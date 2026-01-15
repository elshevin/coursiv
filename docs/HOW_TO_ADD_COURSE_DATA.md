# 课程数据添加指南

本文档为教师和工程师提供添加新课程数据的完整流程。

---

## 第一部分：教师篇

教师负责编写课程内容，只需将以下 Prompt 发送给 AI（如 ChatGPT 或 Claude），AI 会生成标准格式的 JSON 数据。

### 给 AI 的 Prompt

```
请为我生成一个 AI 工具课程模块的数据，格式如下：

课程信息：
- 课程ID：[填写，如 chatgpt]
- 模块ID：[填写，如 chatgpt-1-1]
- 模块标题：[填写]
- 模块副标题：[填写]

内容要求：
- 包含 2-3 个文本块（教学内容）
- 每 2-3 个文本块后有 1 个填空练习（Playground）
- 每个 Playground 后有 1 个反馈问卷和 1 个知识发现卡片
- 最后有 1 个选择题测验（Quiz）

填空练习格式（重要）：
- 模板句子用 [blankId] 标记填空位置，如："I'm a [role]. Help me [task]."
- 每个空需要：id、placeholder（占位符文字）、correctAnswer（正确答案）
- options 数组包含所有可选答案（正确答案 + 干扰项）
- 选项数量 = 填空数量 + 2-3 个干扰项

请输出 JSON 格式，包含以下结构：
{
  "id": "模块ID",
  "courseId": "课程ID", 
  "title": "模块标题",
  "subtitle": "模块副标题",
  "blocks": [
    // 内容块数组
  ]
}
```

### JSON 格式示例

以下是一个完整的课程模块 JSON 示例，包含各种内容块类型：

```json
{
  "id": "chatgpt-1-1",
  "courseId": "chatgpt",
  "title": "ChatGPT 入门",
  "subtitle": "了解 ChatGPT 的基本概念",
  "blocks": [
    {
      "type": "text",
      "title": "什么是 ChatGPT？",
      "icon": "🧠",
      "paragraphs": [
        "ChatGPT 是由 OpenAI 开发的 AI 语言模型。",
        "它能够理解和生成类似人类的文本。"
      ]
    },
    {
      "type": "text",
      "title": "它是如何工作的？",
      "icon": "⚙️",
      "paragraphs": [
        "ChatGPT 使用 **transformers** 技术处理文本。",
        "它根据训练数据预测最可能的下一个词。"
      ]
    },
    {
      "type": "playground",
      "title": "你的第一个提示词",
      "description": "向 ChatGPT 发送一个简单的问题。",
      "aiTool": { "name": "ChatGPT", "icon": "💬" },
      "promptTemplate": "Help me [action] for dinner tonight.",
      "blanks": [
        { "id": "action", "placeholder": "action", "correctAnswer": "order a pizza" }
      ],
      "options": ["order a pizza", "cook pasta", "find a restaurant"],
      "hint": "想想你希望 ChatGPT 帮你做什么。",
      "successFeedback": { "title": "太棒了！", "message": "你已经发送了第一个提示词！" },
      "errorFeedback": { "title": "不太对", "message": "试试选择更具体的动作。" },
      "resultImage": "/images/chatgpt-result.png",
      "proTip": "给 ChatGPT 清晰、具体的指令效果最好！"
    },
    {
      "type": "feedback",
      "question": "这个练习有帮助吗？",
      "options": ["有帮助", "一般", "没帮助"]
    },
    {
      "type": "discovery",
      "number": 1,
      "title": "第一个发现",
      "content": "提供越多上下文，ChatGPT 的回答就越好！"
    },
    {
      "type": "text",
      "title": "添加上下文",
      "icon": "📝",
      "paragraphs": [
        "ChatGPT 会记住对话中的上下文。",
        "你可以引用之前的消息来构建对话。"
      ]
    },
    {
      "type": "playground",
      "title": "多填空练习",
      "description": "通过添加角色和目标让请求更具体。",
      "aiTool": { "name": "ChatGPT", "icon": "💬" },
      "promptTemplate": "I'm a [role]. Help me [task] for my [audience].",
      "blanks": [
        { "id": "role", "placeholder": "role", "correctAnswer": "software engineer" },
        { "id": "task", "placeholder": "task", "correctAnswer": "write documentation" },
        { "id": "audience", "placeholder": "audience", "correctAnswer": "team members" }
      ],
      "options": [
        "software engineer", "write documentation", "team members",
        "marketing manager", "create a presentation", "clients"
      ],
      "hint": "添加角色、任务和受众可以帮助 ChatGPT 更好地理解你的需求。",
      "successFeedback": { "title": "Amazing!", "message": "你的方法完全正确！" },
      "errorFeedback": { "title": "Incorrect", "message": "想想你是谁、需要什么、谁会阅读。" },
      "resultImage": "/images/context-result.png",
      "proTip": "提供越多上下文（角色、目标、受众），回答就越有针对性。"
    },
    {
      "type": "feedback",
      "question": "添加上下文的概念清楚吗？",
      "options": ["清楚", "一般", "不清楚"]
    },
    {
      "type": "discovery",
      "number": 2,
      "title": "上下文是关键",
      "content": "角色 + 目标 + 受众 = 更好的回答"
    },
    {
      "type": "quiz",
      "question": "获得 ChatGPT 准确回答的最佳方式是什么？",
      "options": [
        "问很短的问题",
        "提供清晰的上下文和具体的指令",
        "使用技术术语",
        "一次问多个问题"
      ],
      "correctIndex": 1,
      "explanation": "提供清晰的上下文和具体的指令可以帮助 ChatGPT 更好地理解你的需求。",
      "hint": "想想什么能帮助任何助手（人类或 AI）给你更好的答案。"
    }
  ]
}
```

### 填空练习（Playground）详细说明

填空练习是课程的核心交互组件，需要特别注意以下几点：

| 字段 | 说明 | 示例 |
|------|------|------|
| `promptTemplate` | 模板句子，用 `[blankId]` 标记填空位置 | `"I'm a [role]. Help me [task]."` |
| `blanks` | 填空定义数组，每个空一个对象 | 见下方 |
| `options` | 所有可选答案，包括正确答案和干扰项 | `["answer1", "answer2", "wrong1"]` |
| `hint` | 提示文字，帮助用户思考 | `"想想你的角色是什么"` |
| `successFeedback` | 正确时显示的反馈 | `{ "title": "Amazing!", "message": "..." }` |
| `errorFeedback` | 错误时显示的反馈 | `{ "title": "Incorrect", "message": "..." }` |
| `resultImage` | 完成后显示的图片路径 | `"/images/result.png"` |
| `proTip` | 完成后显示的小贴士 | `"记住这个技巧..."` |

每个 blank 对象的结构：

| 字段 | 说明 | 示例 |
|------|------|------|
| `id` | 唯一标识符，与模板中的 `[blankId]` 对应 | `"role"` |
| `placeholder` | 未填写时显示的占位符文字 | `"role"` |
| `correctAnswer` | 正确答案，必须在 options 中存在 | `"software engineer"` |

---

## 第二部分：工程师篇

工程师负责将教师提供的 JSON 数据集成到系统中。

### 给 Manus 的 Prompt

```
请将以下课程数据集成到 coursiv-landing 项目中：

1. 将 JSON 数据转换为 TypeScript 代码，添加到 shared/allCourseData.ts
2. 使用工厂函数：createTextBlock, createPlaygroundBlock, createQuizBlock, createDiscoveryBlock, createFeedbackBlock
3. 在 allCoursivLessons 对象中注册新课程
4. 运行测试确保没有错误
5. 提交到 GitHub

课程数据：
[粘贴教师提供的 JSON]
```

### 代码转换示例

教师提供的 JSON：

```json
{
  "type": "playground",
  "title": "多填空练习",
  "description": "通过添加角色和目标让请求更具体。",
  "aiTool": { "name": "ChatGPT", "icon": "💬" },
  "promptTemplate": "I'm a [role]. Help me [task] for my [audience].",
  "blanks": [
    { "id": "role", "placeholder": "role", "correctAnswer": "software engineer" },
    { "id": "task", "placeholder": "task", "correctAnswer": "write documentation" },
    { "id": "audience", "placeholder": "audience", "correctAnswer": "team members" }
  ],
  "options": ["software engineer", "write documentation", "team members", "marketing manager", "create a presentation", "clients"],
  "hint": "添加角色、任务和受众可以帮助 ChatGPT 更好地理解你的需求。",
  "successFeedback": { "title": "Amazing!", "message": "你的方法完全正确！" },
  "errorFeedback": { "title": "Incorrect", "message": "想想你是谁、需要什么、谁会阅读。" },
  "resultImage": "/images/context-result.png",
  "proTip": "提供越多上下文（角色、目标、受众），回答就越有针对性。"
}
```

转换后的 TypeScript 代码：

```typescript
createPlaygroundBlock(
  '多填空练习',
  '通过添加角色和目标让请求更具体。',
  { name: 'ChatGPT', icon: '💬' },
  "I'm a [role]. Help me [task] for my [audience].",
  [
    { id: 'role', placeholder: 'role', correctAnswer: 'software engineer' },
    { id: 'task', placeholder: 'task', correctAnswer: 'write documentation' },
    { id: 'audience', placeholder: 'audience', correctAnswer: 'team members' }
  ],
  ['software engineer', 'write documentation', 'team members', 'marketing manager', 'create a presentation', 'clients'],
  '添加角色、任务和受众可以帮助 ChatGPT 更好地理解你的需求。',
  { title: 'Amazing!', message: '你的方法完全正确！' },
  { title: 'Incorrect', message: '想想你是谁、需要什么、谁会阅读。' },
  '/images/context-result.png',
  '提供越多上下文（角色、目标、受众），回答就越有针对性。'
)
```

### 集成检查清单

完成集成后，请确认以下事项：

- [ ] 课程数据已添加到 `shared/allCourseData.ts`
- [ ] 新课程已在 `allCoursivLessons` 对象中注册
- [ ] 所有 `correctAnswer` 都存在于对应的 `options` 数组中
- [ ] `promptTemplate` 中的 `[blankId]` 与 `blanks` 数组中的 `id` 一一对应
- [ ] 运行 `pnpm test` 所有测试通过
- [ ] 在浏览器中测试新课程页面
- [ ] 提交代码到 GitHub

---

## 附录：内容块类型速查表

| 类型 | 用途 | 必填字段 |
|------|------|----------|
| `text` | 教学文本内容 | title, icon, paragraphs |
| `playground` | 填空练习 | title, description, aiTool, promptTemplate, blanks, options, hint, successFeedback, errorFeedback, resultImage, proTip |
| `quiz` | 选择题测验 | question, options, correctIndex, explanation, hint |
| `discovery` | 知识发现卡片 | number, title, content |
| `feedback` | 用户反馈问卷 | question, options |

---

## 附录：图片字段使用指南

课程内容中的 `image` 字段支持两种格式：

### 1. 图片路径（推荐）

使用图片路径可以显示更精美的插图：

```typescript
{
  text: `**标题**\n\n内容文本...`,
  image: '/images/course/learning.png'  // 图片路径
}
```

**可用的通用插图：**

| 图片路径 | 用途 |
|----------|------|
| `/images/course/learning.png` | 学习/阅读相关内容 |
| `/images/course/thinking.png` | 思考/分析相关内容 |
| `/images/course/practice.png` | 实践/练习相关内容 |
| `/images/course/quiz.png` | 测验/检查相关内容 |
| `/images/course/success.png` | 成功/完成相关内容 |

### 2. Emoji 字符（备用）

如果没有合适的图片，也可以使用 emoji：

```typescript
{
  text: `**标题**\n\n内容文本...`,
  image: '🎭'  // Emoji 字符
}
```

### 渲染逻辑

组件会自动检测 `image` 字段的格式：
- 如果以 `/` 或 `http` 开头，或包含 `.png`、`.jpg`、`.svg`，则作为图片路径渲染
- 否则作为文本/emoji 直接显示

---

*文档版本：v2.1 | 更新日期：2026-01-15*
