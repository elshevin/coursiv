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
  "moduleId": "课程ID",
  "title": "模块标题",
  "blocks": [
    {
      "type": "text",
      "id": "唯一ID",
      "title": "标题",
      "content": "内容（支持 Markdown）"
    },
    {
      "type": "playground",
      "id": "唯一ID",
      "title": "标题",
      "instruction": "说明",
      "template": "模板文字，用 [答案] 标记填空位置",
      "blanks": [
        {
          "position": 0,
          "answer": "正确答案",
          "options": ["正确答案", "错误选项1", "错误选项2", "错误选项3"]
        }
      ],
      "hint": "提示文字",
      "errorFeedback": {
        "title": "错误标题",
        "message": "错误说明"
      }
    },
    {
      "type": "quiz",
      "id": "唯一ID",
      "title": "标题",
      "question": "问题",
      "options": [
        { "id": "a", "text": "选项A" },
        { "id": "b", "text": "选项B" },
        { "id": "c", "text": "选项C" },
        { "id": "d", "text": "选项D" }
      ],
      "correctAnswer": "正确选项ID",
      "hint": "提示",
      "explanation": "答案解释"
    },
    {
      "type": "discovery",
      "id": "唯一ID",
      "title": "标题",
      "content": "知识点内容"
    },
    {
      "type": "feedback",
      "id": "唯一ID",
      "question": "这个内容对你有帮助吗？"
    }
  ]
}
```

### 步骤 2：把 AI 生成的 JSON 发给工程师

直接复制 AI 输出的 JSON 内容，发给工程师即可。

---

## 示例：一个完整的课程模块 JSON

```json
{
  "moduleId": "chatgpt-1-1",
  "title": "什么是 ChatGPT",
  "blocks": [
    {
      "type": "text",
      "id": "chatgpt-1-1-1",
      "title": "欢迎学习 ChatGPT",
      "content": "ChatGPT 是由 OpenAI 开发的 AI 语言模型。\n\n它可以理解和生成人类语言，帮助你完成各种任务。"
    },
    {
      "type": "text",
      "id": "chatgpt-1-1-2",
      "title": "ChatGPT 能做什么",
      "content": "ChatGPT 可以帮助你：\n- 回答问题\n- 写文章\n- 翻译语言\n- 编写代码"
    },
    {
      "type": "playground",
      "id": "chatgpt-1-1-3",
      "title": "练习：写一个简单的提示词",
      "instruction": "完成下面的提示词，让 ChatGPT 帮你写一封邮件：",
      "template": "请帮我写一封 [正式] 的邮件，主题是 [请假]，收件人是我的 [老板]。",
      "blanks": [
        { "position": 0, "answer": "正式", "options": ["正式", "随意", "搞笑", "愤怒"] },
        { "position": 1, "answer": "请假", "options": ["请假", "辞职", "投诉", "表白"] },
        { "position": 2, "answer": "老板", "options": ["老板", "朋友", "陌生人", "宠物"] }
      ],
      "hint": "想想你需要什么语气和目的",
      "errorFeedback": {
        "title": "再试一次",
        "message": "好的提示词应该明确说明语气、目的和对象"
      }
    },
    {
      "type": "discovery",
      "id": "chatgpt-1-1-4",
      "title": "小技巧",
      "content": "提示词越具体，ChatGPT 的回答就越准确！"
    },
    {
      "type": "quiz",
      "id": "chatgpt-1-1-5",
      "title": "小测验",
      "question": "ChatGPT 是由哪家公司开发的？",
      "options": [
        { "id": "a", "text": "Google" },
        { "id": "b", "text": "OpenAI" },
        { "id": "c", "text": "Microsoft" },
        { "id": "d", "text": "Apple" }
      ],
      "correctAnswer": "b",
      "hint": "回想一下课程开头的介绍",
      "explanation": "ChatGPT 是由 OpenAI 公司开发的，于 2022 年 11 月发布。"
    },
    {
      "type": "feedback",
      "id": "chatgpt-1-1-6",
      "question": "这个模块的内容对你有帮助吗？"
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
2. 将下面的 JSON 数据转换为 TypeScript 格式，使用工厂函数（createTextBlock, createPlaygroundBlock, createQuizBlock, createDiscoveryBlock, createFeedbackBlock）
3. 在文件中添加新的课程变量
4. 在 allCoursivLessons 对象中注册新课程
5. 测试确保页面正常显示

课程数据：
[粘贴教师提供的 JSON]
```

### 示例：Manus 会做什么

Manus 会把教师的 JSON：

```json
{
  "type": "playground",
  "id": "chatgpt-1-1-3",
  "title": "练习：写一个简单的提示词",
  "instruction": "完成下面的提示词",
  "template": "请帮我写一封 [正式] 的邮件",
  "blanks": [
    { "position": 0, "answer": "正式", "options": ["正式", "随意", "搞笑", "愤怒"] }
  ],
  "hint": "想想你需要什么语气",
  "errorFeedback": { "title": "再试一次", "message": "好的提示词应该明确说明语气" }
}
```

转换为 TypeScript 代码：

```typescript
createPlaygroundBlock(
  "chatgpt-1-1-3",
  "练习：写一个简单的提示词",
  "完成下面的提示词",
  "请帮我写一封 [正式] 的邮件",
  [{ position: 0, answer: "正式", options: ["正式", "随意", "搞笑", "愤怒"] }],
  "想想你需要什么语气",
  { title: "再试一次", message: "好的提示词应该明确说明语气" }
)
```

---

## 快速检查清单

集成完成后确认：

- [ ] 新课程出现在 `allCoursivLessons` 对象中
- [ ] 访问 `/lesson/{courseId}/{moduleId}` 页面正常显示
- [ ] 所有测试通过（`pnpm test`）

---

## 相关文件位置

| 文件 | 说明 |
|------|------|
| `shared/allCourseData.ts` | 所有课程数据 |
| `shared/courseContentTypes.ts` | 类型定义和工厂函数 |
| `COURSE_DATA_GENERATION_GUIDE.md` | 详细格式规范（高级参考） |
