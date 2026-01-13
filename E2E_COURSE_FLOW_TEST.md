# E2E 课程内流程测试记录

## 测试日期
2026-01-13

---

## 一、我们的网站测试

### 1. Dashboard 首页
**URL**: /dashboard

**观察结果**:
- ✅ 顶部导航栏：Home, Guides, Challenges, AI Tools, 火焰图标, Profile
- ✅ 欢迎消息："Welcome back, testuser2! 👋"
- ✅ Weekly Streaks 卡片：显示 3 天连续，日历视图
- ✅ 统计卡片：5 Courses, 21 Lessons, 1,250 Minutes
- ✅ Continue Learning 区域：3 个课程卡片
- ✅ Active Challenges 区域

**截图**: Dashboard 首页显示正常

---

### 2. Guides 课程列表

**URL**: /dashboard/guides

**观察结果**:
- ✅ 页面标题："Guides"
- ✅ 副标题："Master AI tools with our comprehensive guides"
- ✅ 6 个课程卡片网格布局
- ✅ 每个卡片显示：图标、名称、课程数、时长、进度条
- ✅ 有进度的课程显示进度百分比（65%, 30%）
- ✅ 未开始的课程显示 "Start Learning" 按钮

**课程列表**:
1. ChatGPT Mastery - 24 lessons, 4h 30m, 65%
2. DALL-E Creative - 18 lessons, 3h 15m, 30%
3. Midjourney Pro - 20 lessons, 3h 45m
4. Claude Assistant - 16 lessons, 2h 50m
5. GitHub Copilot - 14 lessons, 2h 30m
6. Google Gemini - 12 lessons, 2h 15m

---

### 3. 课程详情页

**URL**: /course/chatgpt

**观察结果**:
- ✅ 顶部课程选择下拉："ChatGPT" + 下拉箭头
- ✅ 课程信息：16 lessons, 2h 30min
- ✅ Your Progress 卡片：3 of 16 lessons completed, 19%
- ✅ About this course 描述
- ✅ 课程标签：ai-tools, 2h 30min, 3 levels
- ✅ Learning Path 蛇形路径布局
- ✅ 模块图标：绿色勾选（已完成）、紫色数字（进行中）、灰色锁（未解锁）
- ✅ 模块名称和时长显示
- ✅ Quiz 模块有 "Quiz" 标签

**模块列表**:
1. What is ChatGPT? - 5 min ✅
2. Creating Your First Prompt - 8 min ✅
3. Understanding Responses - 6 min (进行中)
4. Role-Based Prompting - 8 min 🔒
5. Beginner Quiz - 5 min ✅
6. Basic Prompt Techniques - 10 min 🔒
7. Chain of Thought - 10 min 🔒
8. Few-Shot Learning - 8 min 🔒
9. Context Management - 7 min 🔒
10. API Integration - 15 min 🔒
11. Intermediate Quiz - 8 min 🔒
...

---

### 4. 模块预览弹窗

**观察结果**:
- ✅ 点击模块显示预览弹窗
- ✅ 弹窗标题："Creating Your First Prompt"
- ✅ 弹窗副标题：8 min
- ✅ 弹窗描述："Learn the fundamentals and key concepts in this lesson. Take your time to understand each section."
- ✅ Read 按钮（紫色）
- ✅ Listen 按钮
- ✅ "Completed" 状态标签（绿色勾选）

---

### 5. 课程内容页面（旧版）

**URL**: /lesson/chatgpt/chatgpt-1-2

**观察结果**:
- ✅ 顶部进度条（黄色）
- ✅ 关闭按钮（X）
- ✅ 音频按钮（右上角）
- ✅ 课程标题："Creating Your First Prompt"
- ✅ 插图区域（紫色背景 + 写字 emoji）
- ✅ 内容标题："Your First Prompt"
- ✅ 内容文本：正确显示，包含加粗文本
- ✅ 页面指示器："1/3"
- ✅ Continue 按钮（紫色）
- ✅ 反馈按钮（右下角）

---

### 6. 课程内容翻页

**观察结果**:
- ✅ 点击 Continue 成功翻页到第 2 页
- ✅ 进度条更新（约 50%）
- ✅ 页面指示器更新："2/3"
- ✅ 新内容显示："The Anatomy of a Good Prompt"
- ✅ 列表内容正确显示（Clear intent, Context, Format）
- ✅ 加粗文本正确渲染

---

### 7. 课程内容第 3 页（Take Quiz）

**观察结果**:
- ✅ 进度条 100%
- ✅ 页面指示器："3/3"
- ✅ 内容标题："Practice Time!"
- ✅ 练习提示列表正确显示
- ✅ "Take Quiz" 按钮（替代 Continue）

---

### 8. Quiz 页面（旧版）

**URL**: /course-quiz/chatgpt/chatgpt-1-2

**观察结果**:
- ✅ 顶部进度条（黄色）
- ✅ 关闭按钮（X）
- ✅ "Quiz" 标签
- ✅ 问题文本："What is the most important element of a good prompt?"
- ✅ 4 个选项（A/B/C/D）
- ✅ Check Answer 按钮（灰色禁用状态）

---

### 9. Quiz 选择答案

**观察结果**:
- ✅ 选择 B 后，选项显示紫色选中状态
- ✅ 选项 B 显示紫色圆圈标记
- ✅ Check Answer 按钮变为紫色激活状态

---

### 10. Quiz 提交答案

**观察结果**:
- ✅ 正确答案 B 显示绿色边框和绿色勾选
- ✅ 其他选项变为灰色禁用状态
- ✅ 显示 "Correct!" 反馈（绿色）
- ✅ 显示解释文本："Clear and specific prompts lead to better results..."
- ✅ Continue 按钮出现（替代 Check Answer）

---

## 二、Coursiv 课程内流程测试

现在测试 Coursiv 的课程内流程，用于对比差异。

### 1. Coursiv Guides 页面

**URL**: https://app.coursiv.io/guides

**观察结果**:
- 顶部导航：Home, Guides, Challenges, AI Tools, Profile
- 大型横幅卡片："Lovable" + "Continue learning" 按钮 + 进度条
- "Your Mastery path" 区域：5 个课程卡片（Jasper AI, Stable Diffusion, DeepSeek, Claude, ChatGPT）
- "Recommended for you" 区域：5 个课程卡片
- 每个卡片显示：封面图、名称、Lessons 数、levels

**与我们的差异**:
- Coursiv 有大型横幅卡片显示当前学习课程
- Coursiv 有 "Your Mastery path" 和 "Recommended for you" 分区
- 我们的 Guides 页面是简单的网格布局

---

### 2. Coursiv 课程详情页

**URL**: https://app.coursiv.io/guide-pathway/...

**观察结果**:
- 顶部：课程名称下拉 "Stable Diffusion" + 进度 "0%"
- 蓝色横幅："AI MASTERY • LEVEL 1 / Starting with Stable Diffusion"
- 左侧：证书卡片 "Earn your certificate" + 进度条
- 右侧：蛇形路径布局，模块图标 + 名称
- 模块预览弹窗：标题 + 描述 + Read/Listen 按钮
- 模块类型图标：书本（内容）、星星（练习）、奖杯（总结）

**与我们的差异**:
| 元素 | Coursiv | 我们 |
|------|---------|------|
| 背景色 | 灰色 | 白色 |
| 蛇形路径 | 曲线连接 | 直线连接 |
| 模块图标 | 紫色/蓝色方形 | 圆形 |
| 证书卡片 | 有 | 无 |
| 课程选择 | 下拉菜单 | 下拉菜单 |
| 进度显示 | 右上角百分比 | 卡片内百分比 |

---

### 3. Coursiv 课程内容页面

**URL**: https://app.coursiv.io/guides/.../...

**观察结果**:
- 顶部：关闭按钮（X）+ 进度条（灰色）+ 音频按钮
- 标题："Turn Words into Images"
- 描述文本
- 插图：抽象艺术风格（黄色圆形 + 红色云朵 + 蓝色几何）
- 底部：Continue 按钮（蓝色）
- 右下角：反馈按钮

**与我们的差异**:
| 元素 | Coursiv | 我们 |
|------|---------|------|
| 进度条颜色 | 灰色 | 黄色 |
| Continue 按钮颜色 | 蓝色 | 紫色 |
| 插图风格 | 抽象艺术 | Emoji |
| 页面指示器 | 无 | 有（1/3） |
| 布局 | 标题在上 | 标题在上 |

---

### 4. Coursiv 课程内容翻页

**观察结果**:
- 进度条更新（蓝色部分增加）
- 新页面标题："What You Will Learn in This Course?"
- 描述文本中有**加粗**："Stable Diffusion"
- 新插图：平板电脑 + 云朵 + 抽象形状
- 页面切换无动画（直接替换）

---

### 5. Coursiv Quiz 页面

**观察结果**:
- 蛇形路径布局，模块之间有曲线连接
- 模块类型图标：
  - 书本图标（紫色）：内容模块（Subject and Medium, Style, Website References, Image Resolution, Color Scheme & Lighting）
  - 星星图标（紫色）：练习模块（Test Your Knowledge）
  - 奖杯图标（紫色）：总结模块（Stable Diffusion Recap）
- 已完成模块显示绿色背景
- 当前模块显示紫色边框

---

### 6. Coursiv Lovable 课程 Quiz 页面（选择题）


### 7. Coursiv Quiz 选择题界面

**页面结构**:
- 标题: "Designers + AI?"
- 上下文说明: "While designers create beautiful, user-focused interfaces, AI generates structure and functionality fast. Keep it in mind before answering the next question."
- Quiz 卡片（白色背景，圆角边框）:
  - 问题: "In your opinion, what's the main advantage of importing designs into Lovable?"
  - 4 个选项（label 元素）:
    - A: "Imported designs never need any adjustments"
    - B: "It's faster than using text prompts"
    - C: "It's the only way to create websites in Lovable"
    - D: "You maintain professional design while getting functional code automatically"
  - Hint 按钮（紫色文字，左侧）
  - Submit 按钮（灰色禁用状态，右侧）

**关键差异**:
- Coursiv 的 Quiz 是嵌入在内容页面中的卡片形式
- 我们的 Quiz 是独立的全屏页面
- Coursiv 有上下文说明文字，我们没有



### 8. Coursiv Quiz 正确答案反馈

**反馈界面结构**:
- 正确答案选项显示绿色勾选图标
- 其他选项变为灰色禁用状态
- 反馈区域（绿色左边框）:
  - 绿色勾选图标 + "Correct answer" 标题
  - 解释文字: "Exactly!"
- 底部显示紫色 "Continue" 按钮

**关键差异**:
- Coursiv 的反馈是在 Quiz 卡片内部显示
- 我们的反馈是在 Quiz 卡片下方显示
- Coursiv 使用绿色左边框样式，我们使用绿色背景

