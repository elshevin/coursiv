# Playground 功能设计方案

## 一、功能概述

Playground 是一种 **"Prompt 填空练习"** 交互类型，用于教用户如何构建有效的 AI Prompt。用户需要将正确的词汇填入 Prompt 模板的空白位置，完成后显示预生成的 AI 图片作为反馈。

**核心特点：**
- 不需要真实调用 LLM，使用预生成的模拟图片
- 选择式填空（不是自由输入）
- 即时验证 + 视觉反馈
- 教学目的：让用户理解 Prompt 的结构和关键词

---

## 二、数据结构设计

### 2.1 Playground 题目数据结构

```typescript
interface PlaygroundExercise {
  id: string;
  title: string;                    // 如 "Create a Landscape Prompt"
  description: string;              // 如 "Complete the prompt to generate a detailed landscape image."
  aiTool: string;                   // 如 "Stable Diffusion", "ChatGPT", "Midjourney"
  aiToolIcon?: string;              // AI 工具图标 URL
  
  // Prompt 模板
  promptTemplate: PromptTemplate;
  
  // 选项列表
  options: string[];                // 如 ["misty", "rolling hills", "impressionism"]
  
  // 正确答案映射
  correctAnswers: Record<string, string>;  // { "description": "misty", "object": "rolling hills", "style": "impressionism" }
  
  // 结果图片（预生成）
  resultImage: string;              // 图片 URL
  
  // 成功反馈
  successFeedback: {
    title: string;                  // 如 "Amazing!"
    message: string;                // 如 "You're right on track with your approach"
  };
}

interface PromptTemplate {
  // 模板片段，交替包含文本和占位符
  segments: PromptSegment[];
}

interface PromptSegment {
  type: 'text' | 'blank';
  content: string;                  // 文本内容或占位符 ID（如 "description"）
  label?: string;                   // 占位符显示标签（如 "description"）
}
```

### 2.2 示例数据

```typescript
const landscapeExercise: PlaygroundExercise = {
  id: "landscape-prompt-1",
  title: "Create a Landscape Prompt",
  description: "Complete the prompt to generate a detailed landscape image.",
  aiTool: "Stable Diffusion",
  aiToolIcon: "/icons/stable-diffusion.svg",
  
  promptTemplate: {
    segments: [
      { type: 'text', content: 'Generate a ' },
      { type: 'blank', content: 'description', label: 'description' },
      { type: 'text', content: ' landscape with ' },
      { type: 'blank', content: 'object', label: 'object' },
      { type: 'text', content: ' and light rain in the ' },
      { type: 'blank', content: 'style', label: 'style' },
      { type: 'text', content: ' style.' }
    ]
  },
  
  options: ["misty", "rolling hills", "impressionism"],
  
  correctAnswers: {
    "description": "misty",
    "object": "rolling hills",
    "style": "impressionism"
  },
  
  resultImage: "/images/playground/landscape-misty-hills.jpg",
  
  successFeedback: {
    title: "Amazing!",
    message: "You're right on track with your approach"
  }
};
```

---

## 三、模拟数据生成方案

### 3.1 图片生成策略

由于不需要真实调用 LLM，我们需要预先生成一批模拟图片。有以下几种方案：

**方案 A：使用免费图片资源（推荐）**
- 从 Unsplash、Pexels 等免费图库获取高质量图片
- 根据 Prompt 主题选择匹配的图片
- 优点：快速、免费、高质量
- 缺点：可能不完全匹配 Prompt 描述

**方案 B：使用 AI 生成图片**
- 使用 Stable Diffusion、DALL-E 等工具预先生成
- 根据正确的 Prompt 生成对应图片
- 优点：图片与 Prompt 完全匹配
- 缺点：需要额外成本和时间

**方案 C：混合方案（推荐）**
- 对于通用主题（风景、人物等），使用免费图库
- 对于特定主题（AI 工具界面等），使用 AI 生成或截图

### 3.2 模拟数据文件结构

```
/shared/playgroundData/
├── exercises/
│   ├── stable-diffusion/
│   │   ├── landscape-prompt.ts
│   │   ├── portrait-settings.ts
│   │   └── scene-painting.ts
│   ├── chatgpt/
│   │   ├── email-writing.ts
│   │   └── code-generation.ts
│   └── midjourney/
│       └── art-style.ts
├── images/
│   ├── landscape-misty-hills.jpg
│   ├── portrait-scientist.jpg
│   └── japanese-garden.jpg
└── index.ts                        // 导出所有练习数据
```

### 3.3 后续替换为真实数据的方案

当需要替换为真实数据时，只需：

1. **修改数据源**：将静态 JSON/TS 文件替换为 API 调用
2. **添加图片生成逻辑**：在验证答案后调用 AI API 生成图片
3. **保持接口不变**：前端组件无需修改，只需更新数据获取方式

```typescript
// 当前：静态数据
const exercise = playgroundExercises['landscape-prompt-1'];

// 未来：API 调用
const exercise = await fetch('/api/playground/landscape-prompt-1').then(r => r.json());

// 未来：真实 AI 生成
const resultImage = await generateImage(completedPrompt);
```

---

## 四、前端组件设计

### 4.1 组件结构

```
/client/src/components/Playground/
├── PlaygroundExercise.tsx          // 主容器组件
├── PlaygroundHeader.tsx            // 标题和描述
├── PromptEditor.tsx                // Prompt 模板编辑器
├── PromptBlank.tsx                 // 空白占位符组件
├── OptionPicker.tsx                // 选项选择器
├── ResultDisplay.tsx               // 结果图片显示
├── SuccessFeedback.tsx             // 成功反馈组件
└── PlaygroundProgress.tsx          // 进度条
```

### 4.2 核心交互流程

```
1. 初始状态
   ├── 显示 Prompt 模板（带空白占位符）
   ├── 显示所有可选词汇
   ├── 图片区域显示占位符
   └── Check 按钮禁用

2. 填空过程
   ├── 用户点击选项 → 自动填入下一个空白
   ├── 已填入的词汇从选项中移除
   ├── 支持点击已填入的词汇取消
   └── 支持退格按钮删除最后填入的词汇

3. 验证答案
   ├── 所有空白填满后，Check 按钮激活
   ├── 点击 Check → 验证答案
   ├── 答案正确 → 显示图片 + 成功反馈
   └── 答案错误 → 显示错误提示（可选）

4. 完成状态
   ├── 显示完整 Prompt
   ├── 显示 AI 生成的图片
   ├── 显示成功反馈
   └── Continue 按钮进入下一题
```

### 4.3 动效设计

| 交互 | 动效 |
|------|------|
| 点击选项填入空白 | 选项淡出 + 空白淡入显示词汇 |
| 点击 Check 按钮 | 按钮加载动画 |
| 图片显示 | 从占位符渐变为实际图片 |
| 成功反馈 | 从底部滑入 |
| 进入下一题 | 页面滑动过渡 |

### 4.4 样式规范（与 Coursiv 一致）

| 元素 | 样式 |
|------|------|
| 空白占位符 | 紫色边框 (#7C3AED)，圆角，内边距 |
| 已填入词汇 | 紫色背景淡色，紫色文字 |
| 选项按钮 | 灰色背景，圆角，hover 变深 |
| Check 按钮（禁用） | 灰色背景，灰色文字 |
| Check 按钮（激活） | 紫色背景，白色文字 |
| 成功反馈 | 绿色分割线，绿色勾选图标 |
| Continue 按钮 | 绿色背景，白色文字 |

---

## 五、实现步骤

### Phase 1：数据层（1-2 小时）
1. 创建 Playground 数据类型定义
2. 创建 3-5 个示例练习数据
3. 准备对应的模拟图片

### Phase 2：组件开发（3-4 小时）
1. 开发 PromptEditor 组件（核心）
2. 开发 OptionPicker 组件
3. 开发 ResultDisplay 组件
4. 开发 SuccessFeedback 组件
5. 组装 PlaygroundExercise 主组件

### Phase 3：集成与测试（1-2 小时）
1. 集成到课程内容页面
2. 添加路由和导航
3. 测试所有交互流程
4. 优化动效和样式

### Phase 4：扩展（可选）
1. 添加更多练习题
2. 支持错误答案反馈
3. 支持重做功能
4. 添加进度保存

---

## 六、与现有系统的集成

### 6.1 课程内容结构扩展

```typescript
// 现有的课程内容类型
interface ModuleContent {
  type: 'text' | 'quiz' | 'playground';  // 添加 'playground' 类型
  // ...
}

// Playground 内容
interface PlaygroundContent {
  type: 'playground';
  exerciseId: string;                     // 引用 PlaygroundExercise
}
```

### 6.2 路由设计

```
/course/:courseId/module/:moduleId/playground/:exerciseId
```

### 6.3 数据库存储（可选）

如果需要保存用户进度：

```sql
CREATE TABLE user_playground_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  exercise_id VARCHAR(100),
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP,
  attempts INTEGER DEFAULT 0
);
```

---

## 七、总结

本方案提供了一个完整的 Playground 功能实现路径：

1. **数据结构清晰**：易于扩展和维护
2. **模拟数据方案灵活**：可快速实现，后续易于替换
3. **前端组件模块化**：便于复用和测试
4. **与 Coursiv 体验一致**：样式和交互完全复刻

**下一步行动**：
- 确认方案后，开始实现 Phase 1（数据层）
- 准备模拟图片资源
- 开发核心组件
