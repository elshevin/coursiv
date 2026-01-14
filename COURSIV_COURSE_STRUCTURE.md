# Coursiv 课程结构分析

## 课程列表（Guides 页面）

### Your Mastery path（AI 工具课程）
| 课程 | Lessons 数量 | Levels |
|------|-------------|--------|
| Jasper AI | 14 | 2 levels |
| Stable Diffusion | 14 | 2 levels |
| DeepSeek | 15 | 3 levels |
| Claude | 22 | 3 levels |
| ChatGPT | 13 | 2 levels |

### Recommended for you（应用课程）
| 课程 | Lessons 数量 | 时长 |
|------|-------------|------|
| AI for Business Operations | 8 | 3 hours |
| Boost Your Sales with AI | 8 | 3 hours |
| Marketing Your Business with AI | 8 | 3 hours |
| AI Essentials for Project Managers | 8 | 3 hours |
| Turbocharge Your Productivity with AI | 9 | 3 hours |

---

## 课程内容结构分析

### ChatGPT 课程结构（13 Lessons, 2 Levels）

**Level 1: ChatGPT Essentials**
| # | 模块名称 | 类型 |
|---|---------|------|
| 1 | ChatGPT as an LLM | lesson |
| 2 | Intro to Prompting | lesson |
| 3 | Discovering Modes & Features | lesson |
| 4 | Image Generation with ChatGPT | lesson |
| 5 | Advanced Features: Projects | lesson |
| 6 | Advanced Features: Custom GPTs | lesson |

**Level 2: Professional Applications of ChatGPT**
| # | 模块名称 | 类型 |
|---|---------|------|
| 7 | Productivity & Daily Task Automation | lesson |
| 8 | Market Research & Analysis | lesson |
| 9 | Creating Marketing Content | lesson |
| 10 | ChatGPT for Effective Communication | lesson |
| 11 | Planning Multi-Step Workflows | lesson |
| 12 | Organizing Personal Finances | lesson |
| 13 | Realizing Creative Ideas | lesson |

**观察：**
- 课程路径是蛇形设计
- 每个模块有 Read 和 Listen 两个按钮
- 最后有证书图标
- 进度显示 0%

### 课程内容页面结构

**第 1 页：First Mission**
- 标题：First Mission
- 内容：文字段落 + 插图
- 底部：Continue 按钮（蓝色）
- 顶部：进度条 + 关闭按钮 + 音频按钮
- 右下角：反馈按钮

**第 2 页：ChatGPT's Brain**
- 标题：ChatGPT's Brain
- 内容：文字段落（包含粗体文字 **Large Language Model (LLM)**）
- 底部：Continue 按钮
- 无插图

**第 3 页：继续展开**
- 内容：继续上一页的内容，添加了新段落 + 插图
- “Basically, an LLM is like a super-smart librarian...”
- “As a result, by learning patterns and structures in language...”
- 插图：一个人读书的插图

**重要发现：Continue 交互逻辑**
- 点击 Continue 后是 **向下展开新内容**，不是页面切换！
- 页面可以向上滚动查看之前的内容
- 进度条前进了一段
- URL 保持不变
- 这是 **“无限滚动”模式**，不是分页模式
- 每次点击 Continue 后，新内容添加到页面底部
- 页面自动滚动到新内容位置

### Playground 发现！

**第 4 页：Quick Request - Playground 卡片**
- 标题：Quick Request
- 说明：Complete a simple request to ChatGPT about food.
- 按钮 1：**Open Playground**（蓝色主按钮）
- 按钮 2：**Skip practice**（浅蓝色次要按钮）

**Playground 交互界面：**
- 标题：Quick Request
- 说明：Complete a simple request to ChatGPT about food.
- ChatGPT 标签（绿色背景 + ChatGPT logo）
- 填空题："Where to [request] ?"
  - 填空处用紫色边框标记
  - 当前填入的内容是 "request"
- 选项按钮："order a pizza"（圆角按钮）
- Check 按钮（灰色，未激活状态）
- 退格按钮（右下角）
- 返回按钮（左上角 <）

**观察：**
- Playground 是嵌入在课程内容中的卡片
- 出现在第 4 次 Continue 后（约 3-4 个内容块后）
- 可以跳过（Skip practice）
- 填空题形式，选择正确的单词填入
- 点击选项后，填空处更新为选中的内容
- "Where to [order a pizza] ?"
- Check 按钮变为蓝色（可点击状态）
- 选项按钮消失（已选中）

**Playground 正确答案反馈：**
- 显示完整的对话效果：
  - 用户消息："🟡 Where to order a pizza ?"（黄色圆点）
  - ChatGPT 回复："🟢 It depends on where you're located, but here are some general suggestions: - Domino's - Papa John's - Pizza Hut - Little Caesars And many more."
- 绿色成功标记："✅ Amazing!"
- 说明文字："You're right on track with your approach"
- 绿色 Continue 按钮
- 反馈按钮（右上角旗帜图标）

**Playground 完成后的反馈调查：**
- 插图：人物插图
- "✅ Task completed" 标签（绿色）
- 任务卡片：Quick Request + 说明 + "Repeat task" 按钮
- 反馈调查卡片：
  - 标题："Was this response helpful to get you dinner?"
  - 选项 1："Yes, it gave me some options"
  - 选项 2："Not exactly"
  - Submit 按钮（灰色，未选择时禁用）

**反馈调查的错误答案反馈：**
- 选中的选项显示红色 ❌ 标记
- 未选中的选项显示绿色 ✅ 标记（正确答案）
- 红色左边框反馈卡片：
  - "❌ Incorrect answer"
  - 说明："It wasn't helpful — too generic to act on. This is because LLM played it safe and provided a generic list of places typically associated with pizza. It couldn't guess more without details."
- 蓝色 Continue 按钮

**知识点卡片：First Discovery**
- 黄色背景卡片
- "💡 First Discovery"
- 说明："LLMs predict words. If your request is unclear, the prediction will be unclear too."

### 第二个 Playground 发现！

**A Detailed Request - Playground 卡片**
- 标题：A Detailed Request
- 说明：Transform a vague request into a specific one.
- 按钮 1：**Open Playground**（蓝色主按钮）
- 按钮 2：**Skip practice**（浅蓝色次要按钮）

**观察：**
- 第二个 Playground 出现在第一个 Playground 完成后约 2 个内容块后
- 课程内容结构：文本内容 → Playground → 知识点 → 文本内容 → Playground

**跳过 Playground 后的反馈调查：**
- "Task skipped" 标签（灰色）
- 任务卡片仍然显示，可以点击 "Open Playground" 重新开始
- 反馈调查："Was this answer more useful?"
  - 选项 1："Yes, definitely"
  - 选项 2："No, not really"
  - Submit 按钮

**反馈调查正确答案反馈：**
- 选中的选项显示绿色 ✅ 标记
- 绿色左边框反馈卡片：
  - "✅ Correct answer"
  - 说明："Now, ChatGPT knows the time and place, so it can provide suggestions related to these two factors. More context leads to better prediction."
- 蓝色 Continue 按钮

**知识点卡片：Second Discovery**
- 黄色背景卡片
- "💡 Second Discovery"
- 说明："For LLMs, context matters. The more of it you provide, the more ChatGPT can act like your personal assistant instead of a random list generator."

### 第三个 Playground 发现！

**Follow-Up - Playground 卡片**
- 标题：Follow-Up
- 说明：Add your preference to refine the last answer.
- 按钮 1：**Open Playground**（蓝色主按钮）
- 按钮 2：**Skip practice**（浅蓝色次要按钮）

**观察：**
- 第三个 Playground 出现在第二个 Playground 完成后约 1-2 个内容块后
- Playground 密度很高，约每 2-3 个内容块就有一个

### 第四个 Playground 发现！

**Memory Test - Playground 卡片**
- 标题：Memory Test
- 说明：Send a simple question without repeating the context.
- 按钮 1：**Open Playground**（蓝色主按钮）
- 按钮 2：**Skip practice**（浅蓝色次要按钮）

**观察：**
- 第四个 Playground 出现在第三个 Playground 完成后约 1-2 个内容块后
- Playground 密度非常高！

### Quiz 发现！

**Quiz 卡片：**
- 标题："ChatGPT knew you meant a vegetarian breakfast in NYC. Why is it so?"
- 选项 1："It searched the internet for context"
- 选项 2："It remembered the earlier conversation"
- 选项 3："It made a lucky guess"
- Submit 按钮（灰色，未选择时禁用）

**观察：**
- Quiz 出现在第 4 个 Playground 之后
- Quiz 是嵌入式卡片，不是独立页面
- Quiz 密度较低，约每 4-5 个 Playground 后出现一个

**Quiz 正确答案反馈：**
- 选中的选项显示绿色 ✅ 标记
- 其他选项保持灰色圆圈
- 绿色左边框反馈卡片：
  - "✅ Correct answer"
  - 说明："ChatGPT retained the NYC and vegetarian context from earlier. This is conversation memory in action."
- 蓝色 Continue 按钮

### Quiz 密度
- 约每 4-5 个 Playground 后出现一个 Quiz
- Quiz 是嵌入式卡片，与内容混合在一起

### Playground 密度
- 约每 1-2 个内容块后出现一个 Playground
- Playground 密度非常高！

### Continue 交互逻辑

**确认：Continue 是向下展开模式！**

- 点击 Continue 后，新内容在当前页面底部展开
- 可以向上滚动查看之前的所有内容
- 整个课程内容在同一个页面上
- 进度条显示当前进度（蓝色部分）
- 每次点击 Continue，页面自动滚动到新内容位置

**页面结构：**
- 顶部：关闭按钮 (X) + 进度条 + 音频按钮
- 中间：课程内容（文本 + 图片 + Playground + Quiz）
- 底部：Continue 按钮（固定在底部）
- 右下角：反馈按钮

### 嵌入方式

**Playground 嵌入方式：**
- 卡片式嵌入在课程内容中
- 白色背景卡片 + 边框
- 标题 + 说明 + 按钮
- 两个按钮：Open Playground（主按钮） + Skip practice（次要按钮）

**Quiz 嵌入方式：**
- 卡片式嵌入在课程内容中
- 白色背景卡片 + 边框
- 问题 + 选项（单选） + Submit 按钮
- 答案反馈：绿色/红色左边框卡片

**知识点卡片：**
- 黄色背景卡片
- "💡 First/Second/Third Discovery"
- 简短说明文字

---

## 总结

### 课程内容密度比例

| 类型 | 密度 | 说明 |
|------|------|------|
| 文本内容 | 每 1-2 块 | 基础内容 |
| Playground | 每 2-3 块内容后 | 密度很高 |
| Quiz | 每 4-5 个 Playground 后 | 密度较低 |
| 知识点卡片 | 每个 Playground 后 | 总结学习要点 |

### 交互逻辑

1. **Continue 按钮**：向下展开新内容，不是页面切换
2. **Playground**：卡片式嵌入，点击 Open Playground 打开练习
3. **Quiz**：卡片式嵌入，选择后点击 Submit 提交
4. **反馈**：绿色/红色左边框卡片显示正确/错误答案

### 需要改进的地方

1. **Continue 效果**：改为向下展开而非页面切换
2. **课程数据**：添加 Playground 和 Quiz 的密度
3. **Markdown 渲染**：确保粗体、列表等正确渲染

