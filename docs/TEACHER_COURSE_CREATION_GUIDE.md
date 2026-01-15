# 教师课程制作指引

本文档为教师提供完整的课程内容制作指南，帮助您创建高质量的 AI 学习课程。

---

## 目录

1. [课程结构概述](#1-课程结构概述)
2. [数据文件说明](#2-数据文件说明)
3. [课程内容类型](#3-课程内容类型)
4. [创建新课程步骤](#4-创建新课程步骤)
5. [创建 Challenge 挑战](#5-创建-challenge-挑战)
6. [内容编写最佳实践](#6-内容编写最佳实践)
7. [图片资源使用](#7-图片资源使用)
8. [测试与验证](#8-测试与验证)
9. [常见问题](#9-常见问题)

---

## 1. 课程结构概述

### 1.1 课程层级

```
课程 (Course)
├── 级别 (Level): Beginner / Intermediate / Advanced
│   ├── 模块 (Module): 课程单元
│   │   ├── 内容页 (Content Page): 教学内容
│   │   ├── Playground: 互动练习
│   │   └── 反馈调查: 用户反馈
│   └── Quiz: 测验模块
└── 挑战 (Challenge): 28天/14天学习计划
```

### 1.2 现有课程列表

| 课程 ID | 课程名称 | 级别数量 | 模块总数 |
|---------|----------|----------|----------|
| chatgpt | ChatGPT | 3 | 16 |
| dalle | DALL-E | 3 | 11 |
| midjourney | Midjourney | 3 | 13 |
| claude | Claude | 3 | 10 |
| gemini | Gemini | 2 | 8 |
| perplexity | Perplexity | 2 | 8 |
| copilot | Copilot | 3 | 12 |
| stable-diffusion | Stable Diffusion | 3 | 13 |
| notion-ai | Notion AI | 2 | 8 |
| deepseek | DeepSeek | 2 | 8 |

---

## 2. 数据文件说明

### 2.1 核心文件

| 文件路径 | 用途 | 说明 |
|----------|------|------|
| `shared/courseData.ts` | 课程结构定义 | 定义课程、级别、模块的元数据 |
| `shared/courseContent.ts` | 内容入口 | 整合所有内容数据 |
| `shared/allCourseContent.ts` | 主要内容 | 存储大部分课程内容 |
| `shared/mockCourseContent.ts` | 模拟内容 | 存储初始/测试内容 |
| `client/src/data/challengeData.ts` | Challenge 数据 | 定义挑战任务 |

### 2.2 文件关系图

```
courseData.ts (结构)
       ↓
courseContent.ts (入口)
       ↓
   ┌───┴───┐
   ↓       ↓
allCourseContent.ts  mockCourseContent.ts
   (主要内容)          (模拟内容)
```

---

## 3. 课程内容类型

### 3.1 文本内容 (Text Block)

用于展示教学文本、概念解释、步骤说明等。

```typescript
{
  type: 'text',
  content: {
    title: '模块标题',
    icon: '📚',  // 可选：emoji 或图片路径
    image: '/images/course/learning.png',  // 插图
    paragraphs: [
      {
        text: `**粗体标题**\n\n正文内容...`,
        image: '/images/course/thinking.png'
      },
      {
        text: `第二段内容...`,
        image: '/images/course/practice.png'
      }
    ]
  }
}
```

**字段说明：**

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | ✅ | 模块标题 |
| icon | string | ❌ | emoji 图标 |
| image | string | ❌ | 头部插图路径 |
| paragraphs | array | ✅ | 内容段落数组 |
| paragraphs[].text | string | ✅ | 段落文本（支持 Markdown） |
| paragraphs[].image | string | ❌ | 段落配图 |

### 3.2 Playground 填空题

互动练习，让用户在模拟 AI 对话中填写正确的 prompt。

> **重要特性**: Playground 支持模拟 AI 回复功能！当用户完成填空后，会显示一个模拟的 AI 回复（如 ChatGPT 的披萨店推荐列表）。这是 Coursiv 的核心交互特色！

**什么情况下需要 aiResponse？**

| 场景 | 是否需要 | 说明 |
|------|----------|------|
| 文本类 AI（ChatGPT, Claude, DeepSeek, Gemini, Perplexity, Copilot） | ✅ 必须 | 核心交互是“输入 prompt → 获得回复” |
| 图像生成 AI（DALL-E, Midjourney, Stable Diffusion） | ✅ 建议 | 可用文字描述生成结果 |
| 工具类 AI（Notion AI） | ✅ 建议 | 模拟工具输出结果 |
| 简单概念练习 | ❌ 可选 | 不涉及 AI 交互可不加 |

```typescript
{
  type: 'playground',
  content: {
    title: 'Practice: Writing a Prompt',
    description: 'Complete the prompt to ask ChatGPT for help.',
    aiTool: {
      name: 'ChatGPT',
      icon: '/chatgpt-icon.svg'
    },
    promptTemplate: 'Help me [action] for dinner tonight.',
    blanks: ['action'],
    options: ['order a pizza', 'cook pasta', 'find a restaurant'],
    correctAnswers: { action: 'order a pizza' },
    hint: 'Think about what you want ChatGPT to help you do.',
    successFeedback: {
      title: 'Great job!',
      message: 'You created a clear and specific prompt.'
    },
    errorFeedback: {
      title: 'Try again',
      message: 'Consider what action you want to take.'
    },
    resultImage: '🚀',
    proTip: {
      title: 'Pro Tip',
      content: 'Always be specific about what you want.'
    },
    // 模拟 AI 回复（支持 Markdown 格式）
    aiResponse: `I'd be happy to help you order a pizza for dinner! Here are some popular options near you:

1. **Domino's Pizza** ⭐ 4.2 - Fast delivery (25-35 min)
2. **Pizza Hut** ⭐ 4.0 - Pan pizza specialty
3. **Papa John's** ⭐ 4.3 - Fresh ingredients

Would you like me to help you place an order?`
  }
}
```

**字段说明：**

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | ✅ | 练习标题 |
| description | string | ✅ | 练习说明 |
| aiTool | object | ✅ | AI 工具信息 |
| promptTemplate | string | ✅ | 带填空的 prompt 模板 |
| blanks | string[] | ✅ | 填空位置标识符 |
| options | string[] | ✅ | 可选答案列表 |
| correctAnswers | object | ✅ | 正确答案映射 |
| hint | string | ❌ | 提示信息 |
| successFeedback | object | ✅ | 成功反馈 |
| errorFeedback | object | ✅ | 错误反馈 |
| resultImage | string | ❌ | 成功图片/emoji |
| proTip | object | ❌ | 专业提示 |
| **aiResponse** | **string** | **✅ 强烈建议** | **模拟 AI 回复内容（支持 Markdown）** |

### 3.3 Quiz 选择题

测验模块，检验用户学习成果。

```typescript
{
  type: 'quiz',
  content: {
    question: 'What makes a good ChatGPT prompt?',
    options: [
      'Being vague and general',
      'Being specific and clear',
      'Using complex vocabulary',
      'Asking multiple questions at once'
    ],
    correctIndex: 1,
    explanation: 'The best prompts are specific, include context, and clearly state what you want.',
    hint: 'Think about what helps AI understand your request better.'
  }
}
```

**字段说明：**

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| question | string | ✅ | 问题文本 |
| options | string[] | ✅ | 选项列表（A/B/C/D） |
| correctIndex | number | ✅ | 正确答案索引（0-3） |
| explanation | string | ✅ | 答案解释 |
| hint | string | ❌ | 提示信息 |

### 3.4 Discovery 发现卡片

用于展示知识点或有趣的发现。

```typescript
{
  type: 'discovery',
  content: {
    number: 1,
    title: 'Did You Know?',
    content: 'ChatGPT was trained on data up to 2021...'
  }
}
```

### 3.5 Feedback 反馈调查

收集用户对课程的反馈。

```typescript
{
  type: 'feedback',
  content: {
    question: 'Was this lesson helpful?',
    options: ['Yes, very helpful', 'Somewhat helpful', 'Not helpful']
  }
}
```

---

## 4. 创建新课程步骤

### 步骤 1: 在 courseData.ts 中定义课程结构

```typescript
// shared/courseData.ts

export const newCourse: Course = {
  id: 'new-course',
  name: 'New AI Tool',
  description: 'Learn to use New AI Tool effectively',
  icon: '/new-ai-icon.svg',
  color: '#6366F1',
  levels: [
    {
      id: 'beginner',
      name: 'Beginner',
      description: 'Start your journey',
      modules: [
        {
          id: 'new-1-1',
          title: 'Introduction',
          duration: '10 min',
          type: 'lesson'
        },
        {
          id: 'new-1-2',
          title: 'Basic Usage',
          duration: '15 min',
          type: 'lesson'
        },
        {
          id: 'new-1-quiz',
          title: 'Beginner Quiz',
          duration: '5 min',
          type: 'quiz'
        }
      ]
    }
  ]
};

// 添加到 courses 数组
export const courses: Course[] = [
  // ... 现有课程
  newCourse
];
```

### 步骤 2: 在 allCourseContent.ts 中添加内容

```typescript
// shared/allCourseContent.ts

export const allCourseContent: Record<string, ContentBlock[]> = {
  // ... 现有内容
  
  'new-1-1': [
    {
      type: 'text',
      content: {
        title: 'Introduction to New AI Tool',
        image: '/images/course/learning.png',
        paragraphs: [
          {
            text: `**Welcome to New AI Tool**\n\nThis course will teach you...`,
            image: '/images/course/learning.png'
          }
        ]
      }
    },
    {
      type: 'playground',
      content: {
        // ... playground 内容
      }
    }
  ],
  
  'new-1-quiz': [
    {
      type: 'quiz',
      content: {
        question: 'What is New AI Tool best used for?',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctIndex: 1,
        explanation: 'New AI Tool is best for...'
      }
    }
  ]
};
```

### 步骤 3: 验证内容加载

访问以下 URL 测试：
- 课程页面: `/course/new-course`
- 模块内容: `/lesson/new-course/new-1-1`
- Quiz: `/course-quiz/new-course/new-1-quiz`

---

## 5. 创建 Challenge 挑战

### 5.1 Challenge 数据结构

```typescript
// client/src/data/challengeData.ts

export interface ChallengeTask {
  id: string;           // 任务唯一 ID
  day: number;          // 第几天
  title: string;        // 任务标题
  description: string;  // 任务描述
  duration: string;     // 预计时长
  type: 'lesson' | 'quiz' | 'practice';  // 任务类型
  courseId?: string;    // 关联课程 ID
  moduleId?: string;    // 关联模块 ID
}

export interface Challenge {
  id: string;           // 挑战唯一 ID
  title: string;        // 挑战标题
  description: string;  // 挑战描述
  totalDays: number;    // 总天数
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;     // 分类
  image: string;        // 封面图
  icon: string;         // 图标 emoji
  currentDay: number;   // 当前进度
  tasks: ChallengeTask[];  // 任务列表
}
```

### 5.2 创建新 Challenge

```typescript
const newChallenge: Challenge = {
  id: 'new-challenge',
  title: '14-Day New Challenge',
  description: 'Master new skills in 14 days.',
  totalDays: 14,
  difficulty: 'Beginner',
  category: 'Learning',
  image: '/challenge-new.webp',
  icon: '🎯',
  currentDay: 0,
  tasks: [
    {
      id: 'nc-d1',
      day: 1,
      title: 'Day 1: Getting Started',
      description: 'Introduction to the challenge',
      duration: '15 min',
      type: 'lesson',
      courseId: 'chatgpt',      // 关联到现有课程
      moduleId: 'chatgpt-1-1'   // 关联到具体模块
    },
    // ... 更多任务
  ]
};
```

### 5.3 任务关联规则

**重要：** 每个任务都应该关联到具体的课程模块，这样用户点击 "Start Lesson" 时才能正确跳转。

| 任务类型 | courseId | moduleId | 说明 |
|----------|----------|----------|------|
| lesson | ✅ 必填 | ✅ 必填 | 跳转到课程内容页 |
| quiz | ✅ 必填 | ✅ 必填 | 跳转到 Quiz 页面 |
| practice | ✅ 必填 | ✅ 必填 | 跳转到练习内容 |

---

## 6. 内容编写最佳实践

### 6.1 文本内容

**推荐：**
- 使用简洁明了的语言
- 每段控制在 2-3 句话
- 使用 **粗体** 强调关键词
- 使用列表展示步骤或要点
- 提供具体的示例

**示例：**
```markdown
**Role-Based Prompting**

One of the most powerful techniques in ChatGPT is **role-based prompting**. 
This involves asking ChatGPT to adopt a specific persona or expertise.

For example: "Act as a senior software engineer and review this code."
```

### 6.2 Playground 设计

**推荐：**
- 填空位置不超过 2 个
- 选项数量控制在 3-4 个
- 提供清晰的提示信息
- 成功反馈要鼓励性
- 错误反馈要引导性

### 6.3 Quiz 设计

**推荐：**
- 问题明确，避免歧义
- 选项长度相近
- 错误选项要有迷惑性但不误导
- 解释要详细说明为什么正确

---

## 7. 图片资源使用

### 7.1 可用的通用插图

| 图片路径 | 用途 | 场景 |
|----------|------|------|
| `/images/course/learning.png` | 学习/阅读 | 介绍性内容 |
| `/images/course/thinking.png` | 思考/分析 | 概念解释 |
| `/images/course/practice.png` | 实践/练习 | 动手操作 |
| `/images/course/quiz.png` | 测验/检查 | Quiz 相关 |
| `/images/course/success.png` | 成功/完成 | 完成反馈 |

### 7.2 图片字段格式

```typescript
// 使用图片路径（推荐）
image: '/images/course/learning.png'

// 使用 emoji（备用）
image: '🎭'

// 使用外部 URL
image: 'https://example.com/image.png'
```

### 7.3 添加新图片

1. 将图片文件放入 `client/public/images/course/` 目录
2. 使用绝对路径引用：`/images/course/your-image.png`
3. 推荐格式：PNG 或 WebP
4. 推荐尺寸：800x400 像素

---

## 8. 测试与验证

### 8.1 本地测试

```bash
# 启动开发服务器
pnpm dev

# 运行单元测试
pnpm test
```

### 8.2 测试清单

- [ ] 课程列表页面显示正确
- [ ] 课程详情页面显示正确
- [ ] 所有模块内容加载正常
- [ ] Playground 填空功能正常
- [ ] Quiz 选择和检查功能正常
- [ ] Challenge 任务跳转正常
- [ ] 图片资源加载正常
- [ ] 移动端显示正常

### 8.3 常见测试 URL

```
# 课程列表
/guides

# 课程详情
/course/chatgpt

# 课程内容
/lesson/chatgpt/chatgpt-1-1

# Quiz
/course-quiz/chatgpt/chatgpt-1-quiz

# Challenge 列表
/challenges

# Challenge 详情
/challenge/ai-reinvention-2026
```

---

## 9. 常见问题

### Q1: 内容不显示怎么办？

**检查步骤：**
1. 确认模块 ID 在 `courseData.ts` 中已定义
2. 确认内容在 `allCourseContent.ts` 或 `mockCourseContent.ts` 中已添加
3. 检查浏览器控制台是否有错误
4. 确认 TypeScript 编译无错误

### Q2: 图片不显示怎么办？

**检查步骤：**
1. 确认图片文件存在于 `client/public/` 目录
2. 确认路径以 `/` 开头（绝对路径）
3. 检查文件名大小写是否正确

### Q3: Challenge 任务点击无反应？

**检查步骤：**
1. 确认任务有 `courseId` 和 `moduleId`
2. 确认关联的模块在 `courseData.ts` 中存在
3. 确认关联的模块有对应的内容

### Q4: 如何添加新的 AI 工具课程？

参考 [步骤 4: 创建新课程](#4-创建新课程步骤)

### Q5: 如何修改现有内容？

1. 找到对应的内容文件（`allCourseContent.ts` 或 `mockCourseContent.ts`）
2. 根据模块 ID 定位内容
3. 修改后保存
4. 刷新页面验证

---

## 附录：模块 ID 命名规范

```
{课程ID}-{级别}-{序号}

示例：
chatgpt-1-1    → ChatGPT Beginner 第1个模块
chatgpt-1-quiz → ChatGPT Beginner Quiz
chatgpt-2-1    → ChatGPT Intermediate 第1个模块
chatgpt-3-1    → ChatGPT Advanced 第1个模块
```

| 级别 | 数字 |
|------|------|
| Beginner | 1 |
| Intermediate | 2 |
| Advanced | 3 |

---

*文档版本：v1.0 | 更新日期：2026-01-15*
