# 课程数据添加指南

本文档分为两部分：**教师篇**和**工程师篇**。

---

# 第一部分：教师篇

## 你需要做什么？

用 AI（如 ChatGPT、Claude）生成课程数据，然后把生成的内容发给工程师。

## 如何生成课程数据？

### 步骤 1：复制下面的 Prompt 给 AI

```
请帮我生成一个 AI 课程模块的数据，格式要求如下：

课程信息：
- 课程名称：[填写课程名，如 ChatGPT 基础]
- 模块 ID：[填写，如 chatgpt-1-1]
- 模块标题：[填写，如 什么是 ChatGPT]

内容要求：
1. 包含 10-15 个内容块
2. 内容块类型包括：文本(text)、填空练习(playground)、单选测验(quiz)、知识点(discovery)、反馈(feedback)
3. 比例：每 2-3 个文本块后放 1 个填空练习，每 4-5 个填空练习后放 1 个测验
4. 每个填空练习必须有 hint（提示）和 errorFeedback（错误反馈）
5. 每个测验必须有 hint（提示）和 explanation（解释）

请按照以下 JSON 格式输出：

{
  "id": "模块ID，如 chatgpt-1-1",
  "courseId": "课程ID，如 chatgpt",
  "title": "模块标题",
  "subtitle": "副标题（可选）",
  "blocks": [
    {
      "type": "text",
      "title": "标题",
      "icon": "emoji图标，如 🧠",
      "paragraphs": ["段落1", "段落2（支持 **粗体** 和列表）"]
    },
    {
      "type": "playground",
      "title": "练习标题",
      "description": "练习说明",
      "aiTool": { "name": "ChatGPT", "icon": "💬" },
      "promptTemplate": "Help me [action] for dinner tonight.",
      "blanks": [
        { "label": "action", "correctAnswer": "order a pizza", "options": ["order a pizza", "错误选项1", "错误选项2"] }
      ],
      "hint": "提示文字",
      "successFeedback": { "title": "成功标题", "message": "成功说明" },
      "errorFeedback": { "title": "错误标题", "message": "错误说明" }
    },
    {
      "type": "quiz",
      "question": "问题",
      "options": ["选项A", "选项B", "选项C", "选项D"],
      "correctIndex": 0,
      "hint": "提示",
      "explanation": "答案解释"
    },
    {
      "type": "discovery",
      "number": 1,
      "title": "知识点标题",
      "message": "知识点内容"
    },
    {
      "type": "feedback",
      "question": "这个内容对你有帮助吗？",
      "options": ["Yes", "Somewhat", "No"],
      "correctIndex": 0
    }
  ]
}

Playground 填空格式说明：
- promptTemplate 中用 [label] 标记填空位置，如 "Help me [action] for dinner"
- blanks 数组中每个对象的 label 必须与 promptTemplate 中的 [label] 对应
- 每个填空提供 3-4 个选项，包含一个正确答案
```

### 步骤 2：把 AI 生成的 JSON 发给工程师

直接复制 AI 输出的 JSON 内容，发给工程师即可。

---

## 示例：一个完整的课程模块 JSON

```json
{
  "id": "chatgpt-1-1",
  "courseId": "chatgpt",
  "title": "什么是 ChatGPT",
  "subtitle": "了解 ChatGPT 的基本原理",
  "blocks": [
    {
      "type": "text",
      "title": "欢迎学习 ChatGPT",
      "icon": "🧠",
      "paragraphs": [
        "ChatGPT 是由 OpenAI 开发的 AI 语言模型。",
        "它可以理解和生成人类语言，帮助你完成各种任务。"
      ]
    },
    {
      "type": "text",
      "title": "ChatGPT 能做什么",
      "icon": "✨",
      "paragraphs": [
        "ChatGPT 可以帮助你：",
        "• **回答问题** - 解答各种疑问",
        "• **写文章** - 帮你起草邮件、报告",
        "• **翻译语言** - 多语言互译",
        "• **编写代码** - 辅助编程"
      ]
    },
    {
      "type": "playground",
      "title": "练习：写一个简单的提示词",
      "description": "完成下面的提示词，让 ChatGPT 帮你写一封邮件",
      "aiTool": { "name": "ChatGPT", "icon": "💬" },
      "promptTemplate": "请帮我写一封 [tone] 的邮件给我的 [recipient]。",
      "blanks": [
        { "label": "tone", "correctAnswer": "正式", "options": ["正式", "随意", "搞笑"] },
        { "label": "recipient", "correctAnswer": "老板", "options": ["老板", "朋友", "陌生人"] }
      ],
      "hint": "想想你需要什么语气和收件人",
      "successFeedback": { "title": "太棒了！", "message": "你已经学会了如何写基本的提示词！" },
      "errorFeedback": { "title": "再试一次", "message": "好的提示词应该明确说明语气和对象" }
    },
    {
      "type": "feedback",
      "question": "这个练习对你有帮助吗？",
      "options": ["Yes", "Somewhat", "No"],
      "correctIndex": 0
    },
    {
      "type": "discovery",
      "number": 1,
      "title": "小技巧",
      "message": "提示词越具体，ChatGPT 的回答就越准确！"
    },
    {
      "type": "quiz",
      "question": "ChatGPT 是由哪家公司开发的？",
      "options": ["Google", "OpenAI", "Microsoft", "Apple"],
      "correctIndex": 1,
      "hint": "回想一下课程开头的介绍",
      "explanation": "ChatGPT 是由 OpenAI 公司开发的，于 2022 年 11 月发布。"
    }
  ]
}
```

---

# 第二部分：工程师篇

## 你需要做什么？

拿到教师提供的 JSON 数据后，用 Manus 将其集成到系统中。

## 如何用 Manus 集成课程数据？

### 给 Manus 的 Prompt

```
请帮我把以下课程数据集成到项目中：

1. 打开文件 shared/allCourseData.ts
2. 将下面的 JSON 数据转换为 TypeScript 格式，使用工厂函数：
   - createTextBlock(title, icon, paragraphs)
   - createPlaygroundBlock(title, description, aiTool, promptTemplate, options, correctAnswers, hint, successFeedback, errorFeedback)
   - createQuizBlock(question, options, correctIndex, explanation, hint)
   - createDiscoveryBlock(number, title, message)
   - createFeedbackBlock(question, options, correctIndex)
3. 注意 Playground 的 promptTemplate 需要转换为数组格式：
   - "Help me [action] for dinner" 转换为：
   - [{ type: 'text', content: 'Help me ' }, { type: 'blank', label: 'action' }, { type: 'text', content: ' for dinner' }]
4. correctAnswers 格式为 { label: answer }，如 { action: 'order a pizza' }
5. 在 allCoursivLessons 对象中注册新课程
6. 测试确保页面正常显示

课程数据：
[粘贴教师提供的 JSON]
```

### Playground 转换示例

教师提供的 JSON：
```json
{
  "type": "playground",
  "promptTemplate": "请帮我写一封 [tone] 的邮件给我的 [recipient]。",
  "blanks": [
    { "label": "tone", "correctAnswer": "正式", "options": ["正式", "随意", "搞笑"] },
    { "label": "recipient", "correctAnswer": "老板", "options": ["老板", "朋友", "陌生人"] }
  ]
}
```

转换后的 TypeScript：
```typescript
createPlaygroundBlock(
  '练习：写一个简单的提示词',
  '完成下面的提示词，让 ChatGPT 帮你写一封邮件',
  { name: 'ChatGPT', icon: '💬' },
  [
    { type: 'text', content: '请帮我写一封 ' },
    { type: 'blank', label: 'tone' },
    { type: 'text', content: ' 的邮件给我的 ' },
    { type: 'blank', label: 'recipient' },
    { type: 'text', content: '。' },
  ],
  ['正式', '随意', '搞笑', '老板', '朋友', '陌生人'],  // 所有选项合并
  { tone: '正式', recipient: '老板' },  // 正确答案映射
  '想想你需要什么语气和收件人',
  { title: '太棒了！', message: '你已经学会了如何写基本的提示词！' },
  { title: '再试一次', message: '好的提示词应该明确说明语气和对象' }
)
```

---

## 快速检查清单

集成完成后确认：

- [ ] 新课程出现在 `allCoursivLessons` 对象中
- [ ] 访问 `/lesson/{courseId}/{moduleId}` 页面正常显示
- [ ] Playground 填空和选项正常工作
- [ ] 所有测试通过（`pnpm test`）

---

## 相关文件位置

| 文件 | 说明 |
|------|------|
| `shared/allCourseData.ts` | 所有课程数据 |
| `shared/courseContentTypes.ts` | 类型定义和工厂函数 |
| `COURSE_DATA_GENERATION_GUIDE.md` | 详细格式规范（高级参考） |
