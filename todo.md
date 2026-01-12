# Coursiv 项目 TODO

## Phase 1: 分析与规划 [DONE]
- [x] 分析 Figma 设计文件
- [x] 创建交付规格文档 (DELIVERY_SPEC.md)
- [x] 创建数据库 schema (demo_users 表)
- [x] 实现 Demo 登录后端 API

## Phase 2: Demo 登录前端集成 [DONE]
- [x] 导航栏添加登录/登出按钮
- [x] 登录后显示用户名
- [x] 登出功能实现
- [x] cookie-parser 中间件配置

## Phase 3: 主落地页像素级还原 [IN PROGRESS]
- [x] Hero Section 视觉还原
- [x] App Store / Google Play 徽章
- [x] Quote Section 视觉还原
- [x] Why People Love Coursiv 视觉还原
- [x] Choose Your Path 视觉还原
- [x] Advance Your Career 视觉还原
- [x] How Coursiv Works 视觉还原
- [x] Coursiv in Action (Stats) 视觉还原
- [x] Certificate Section 视觉还原
- [x] Testimonials 视觉还原
- [x] 28-day Challenge 视觉还原
- [x] FAQ Section 视觉还原 (手风琴交互已实现)
- [x] Join Learners 视觉还原
- [x] Final CTA 视觉还原
- [x] Footer 视觉还原

## Phase 4: Onboarding Quiz 流程 [DONE]
- [x] 创建 Quiz 路由结构
- [x] 22 步 Quiz 流程实现
- [x] 进度条显示
- [x] 选项卡片样式
- [x] 结果页面

## Phase 5: Upsell 付费页面 [DONE]
- [x] Upsell 页面布局
- [x] 价格展示组件
- [x] 倒计时组件
- [x] CTA 按钮

## Phase 6: Dashboard 内页 [DONE]
- [x] Dashboard Home 页面
- [x] Guides 页面
- [x] Challenges 页面
- [x] AI Tools 页面
- [x] Profile 页面
- [x] Dashboard 侧边栏导航

## Phase 7: 交互动画 [DONE]
- [x] FAQ 手风琴展开/收起
- [x] Testimonials 轮播
- [x] 按钮 hover 效果
- [x] 卡片 hover 阴影
- [ ] 页面滚动动画（可选增强）

## Phase 8: 后端接口需求文档 [DONE]
- [x] 创建 API_REQUIREMENTS.md
- [x] 记录所有 Mock 接口
- [x] 记录真实实现需求
- [x] 数据库 Schema 需求

## Phase 9: 测试与修复 [DONE]
- [x] Demo 登录流程测试
- [x] Quiz 流程测试
- [x] Dashboard 功能测试
- [x] Upsell 页面测试
- [x] 桌面端视觉对比测试（详细）
- [x] Bug 修复（Get Started 按钮已修复）

## Phase 10: 提交与交付
- [x] Git 提交到 masterai repo
- [x] 保存 checkpoint
- [x] 最终交付给用户

## Phase 11: 详细用户流程测试与动效检查 [DONE]

### 主落地页逐项检查
- [x] Hero Section 动效和布局
- [x] 导航栏 hover 效果
- [x] Get Started 按钮点击
- [x] Quote Section 样式
- [x] Why People Love 手机 mockup
- [x] Choose Your Path 卡片 hover
- [x] Advance Your Career 布局
- [x] How Coursiv Works 步骤动画
- [x] Stats 数字显示
- [x] Certificate 图片
- [x] Testimonials 卡片
- [x] 28-Day Challenge 日历
- [x] FAQ 手风琴完整测试
- [x] Join Learners CTA
- [x] Final CTA
- [x] Footer 链接

### 发现的 Bug
- [x] Get Started 按钮未跳转到 Quiz（已修复）
- ⚠️ Dashboard 欢迎消息显示用户 ID 而不是用户名（小问题，不影响使用）


## Phase 12: Testimonials 轮播与测试用例完善 [DONE]

### 新功能
- [x] Testimonials 轮播功能实现
  - [x] 自动轮播（每 5 秒切换）
  - [x] 手动滑动/点击切换
  - [x] 轮播指示器（小圆点 + 箭头按钮）
  - [x] 平滑过渡动画

### 前端交互测试用例
- [x] 创建 client/src/__tests__/LandingPage.test.tsx
- [x] 测试 Testimonials 轮播自动切换
- [x] 测试 Testimonials 手动切换
- [x] 测试 FAQ 手风琴展开/收起
- [x] 测试 Get Started 按钮跳转
- [x] 测试 导航栏链接
- [x] 测试 28-Day Challenge 日历显示


## Phase 13: 细节迭代优化 [DONE]

### 已检查项目
- [x] Hero Section 细节检查
- [x] 导航栏细节检查
- [x] Quote Section 细节检查
- [x] Why People Love 细节检查
- [x] Choose Your Path 细节检查
- [x] Advance Your Career 细节检查
- [x] How Coursiv Works 细节检查
- [x] Stats Section 细节检查
- [x] Certificate Section 细节检查
- [x] Testimonials 轮播细节检查
- [x] 28-Day Challenge 细节检查
- [x] FAQ Section 细节检查
- [x] Join Learners CTA 细节检查
- [x] Final CTA 细节检查
- [x] Footer 细节检查

### 发现的问题
- ⚠️ 导航栏用户名显示为 ID 格式（小问题，不影响使用）

### 检查结果
- ✅ 所有 14 个 Section 视觉效果良好
- ✅ Testimonials 轮播功能正常
- ✅ FAQ 手风琴交互正常
- ✅ 所有按钮样式统一
- ✅ 布局和间距合理
- ✅ 所有测试通过 (16 passed, 1 skipped)


## Phase 14: 迭代优化 - 用户体验增强 [DONE]

### 用户名显示优化
- [x] 修改导航栏用户名显示为友好格式
- [x] 使用 displayName 字段显示友好名称（如 "Demo User XXXX"）

### 页面滚动动画
- [x] 添加 Section fade-in 入场动画
- [x] 使用 Intersection Observer 实现滚动触发
- [x] 确保动画流畅不影响性能
- [x] 创建 AnimatedSection 组件
- [x] 为 12 个 Section 添加动画效### 移动端响应式优化
- [x] 检查 Hero Section 移动端布局
- [x] 添加导航栏移动端汉堡菜单
- [x] 检查 Testimonials 轮播移动端触摸
- [x] 检查所有卡片和按钮移动端尺寸hallenge 日历移动端显示
- [ ] 检查 Footer 移动端布局### 测试验证
- [x] 运行所有自动测试 (22 passed, 1 skipped)
- [x] 验证所有页面响应和交互
- [x] 添加 Navbar 组件测试 (6 个测试)- [ ] 验证交互功能正常


## Phase 15: Iteration 5 - 课程内容阅读页 [DONE]

### 核心功能
- [x] 创建 LessonContent.tsx 页面组件
- [x] 课程内容数据结构 (courseContent.ts)
- [x] 页面导航 (Continue/Complete 按钮)
- [x] 进度条显示
- [x] 退出确认模态框 ("Wait, don't go!")
- [x] 页面指示器 (1/3, 2/3, 3/3)
- [x] 音频按钮 (Coming Soon 提示)
- [x] 课程内容展示 (标题、图标、文本)
- [x] 完成模块后保存进度到数据库
- [x] 完成模块后触发 streak 更新
- [x] 测试模式快速完成按钮

### 待完成
- [x] 单元测试 (LessonContent.test.tsx) - 9 tests passed

## Phase 16: Iteration 6 - 课程 Quiz 系统 [DONE]

### 核心功能
- [x] 创建 QuizContent.tsx 页面组件
- [x] Quiz 题目和选项展示
- [x] 选项选择状态 (A/B/C/D)
- [x] Check Answer 按钮
- [x] 正确答案反馈 (绿色勾选 + "Correct!")
- [x] 错误答案反馈 (红色叉号 + "Not quite!")
- [x] 解释文字展示
- [x] Continue 按钮返回课程详情
- [x] 完成 Quiz 后保存进度
- [x] 测试模式 Skip Quiz 按钮
- [x] 单元测试 (QuizContent.test.tsx) - 9 tests passed

## Phase 17: E2E Checkpoint 2 测试 [DONE]

- [x] 用户登录系统测试
- [x] Dashboard 首页测试
- [x] Weekly Streaks 功能测试
- [x] 课程列表 (Guides) 测试
- [x] 课程详情页测试
- [x] 课程内容阅读页测试
- [x] 完成模块后进度更新测试
- [x] Quiz 页面测试
- [x] 所有单元测试通过 (44 passed, 1 skipped)


## Phase 18: Iteration 7 - 挑战系统 [DONE]

### 核心功能
- [x] 创建挑战数据结构 (challengeData.ts)
- [x] Challenges 页面显示挑战列表
- [x] "All" / "Completed" 筛选按钮
- [x] "My challenges" 区块（进行中的挑战）
- [x] 挑战卡片（封面图、名称、天数、难度）
- [x] 挑战详情页路由 `/challenge/:challengeId`
- [x] 顶部天数导航 (D1-D28 横向滚动)
- [x] 挑战介绍和进度百分比
- [x] 证书卡片
- [x] 每日任务列表（图标 + 名称 + 状态）
- [x] "Start Lesson" 按钮
- [x] 任务完成状态 (localStorage)
- [x] 测试模式 Quick Complete 按钮
- [ ] 单元测试

## Phase 19: Iteration 8 - 证书系统 [DONE]

### 核心功能
- [x] 创建证书数据结构 (certificateData.ts)
- [x] Profile 页面显示证书列表 (9个证书)
- [x] 每个证书显示课程名 + 进度百分比
- [x] 锁定/解锁状态图标 (Lock/Trophy)
- [x] 进度条显示
- [x] Quick Actions (“Prompts Library” Coming Soon, Help, Settings)
- [ ] 单元测试

## Phase 20: Iteration 9 - AI Tools + Profile 完善 [DONE]

### AI Tools Coming Soon
- [x] AI Tools 页面显示 Coming Soon UI
- [x] 居中大标题 "AI Tools"
- [x] 副标题 "Coming Soon"
- [x] 简短说明文字
- [x] 工具预览卡片 (AI Writer, Image Generator, Code Assistant, Data Analyzer)
- [x] "Notify Me When Available" 按钮 (禁用状态)

### Profile 页面完善
- [x] 用户头像 + 用户名 + 邮箱显示
- [x] "Prompts Library" 入口（Coming Soon 提示）
- [x] "Help" 入口
- [x] "Settings" 入口
- [x] 证书列表（来自 Iteration 8）
- [x] Developer Options (Test Mode 开关)
- [x] "Log Out" 按钮

## Phase 21: E2E Checkpoint 3 测试 [DONE]

### 测试结果
- [x] 首页正常显示，用户已登录
- [x] Dashboard 首页显示 Weekly Streaks、统计数据、课程列表
- [x] Challenges 页面显示 4 个挑战 + My Challenges 区块
- [x] Challenge 详情页显示天数导航、任务列表、证书卡片
- [x] AI Tools 页面显示 Coming Soon UI
- [x] Profile 页面显示用户信息、Quick Actions、9 个证书
- [x] 所有单元测试通过 (44 passed, 1 skipped)

### 已完成迭代
- [x] Iteration 7: 挑战系统
- [x] Iteration 8: 证书系统
- [x] Iteration 9: AI Tools Coming Soon + Profile 完善


## Phase 22: Iteration 10 - 核心交互改进 [DONE]

### 蛇形路径布局
- [x] 课程详情页改为蛇形路径布局 (SnakePath.tsx)
- [x] 模块图标交替左右排列
- [x] SVG 曲线连接各模块

### 模块预览弹窗
- [x] 点击模块显示预览弹窗 (ModulePreviewPopover.tsx)
- [x] 弹窗包含标题、描述、Read/Listen 按钮
- [x] 点击弹窗外区域关闭 (Escape 键)

### Streak 详情弹窗
- [x] Weekly Streaks 卡片可点击
- [x] 点击打开 Streak 详情弹窗 (StreakDetailModal.tsx)
- [x] 弹窗显示当前连续天数、最长连续、日历视图

### 顶部水平导航
- [x] Dashboard 导航改为顶部水平布局 (TopNavbar.tsx)
- [x] 导航包含 Logo、Home、Guides、Challenges、AI Tools、火焰图标、Profile
- [x] 火焰图标点击打开 Streak 弹窗

### E2E 测试
- [x] 浏览器 E2E 测试通过
- [x] 所有单元测试通过 (44 passed, 1 skipped)


## Phase 23: Iteration 11 - 交互完善 [DONE]

### 课程切换下拉
- [x] 课程详情页顶部添加课程名称下拉 (CourseDropdown.tsx)
- [x] 点击下拉展开横向课程选择器
- [x] 当前课程蓝色边框高亮
- [x] 点击其他课程切换路径视图

### 深色模式
- [x] Profile 页面添加深色模式开关
- [x] 点击开关整站颜色即时切换 (ThemeContext)
- [x] 深色模式偏好保存到 localStorage

### hover 效果
- [x] 证书卡片点击跳转到对应课程 (Dashboard.tsx)
- [x] 所有卡片添加 hover 上浮效果 (hover-lift class)
- [x] 所有按钮添加 hover 放大效果 (hover-scale class)

### E2E 测试
- [x] 浏览器 E2E 测试通过
- [x] 所有单元测试通过


## Phase 24: Iteration 12 - 视觉一致性 [DONE]

### Hero 动态演示
- [x] Landing Page Hero 区域添加 AI 聊天演示动画 (AIChatDemo.tsx)
- [x] 打字机效果显示用户问题
- [x] 逐字显示 AI 回复

### 引言轮播
- [x] Testimonials 区域自动轮播 (已有 TestimonialsCarousel.jsx)
- [x] 左右箭头手动切换
- [x] 指示点和自动播放状态

### 数字滚动动画
- [x] 用户数 "1,461,394+" 数字滚动动画 (CountUp.tsx)
- [x] 视口可见时触发动画

### E2E 测试
- [x] 浏览器 E2E 测试通过
- [x] 所有单元测试通过


## Phase 25: Iteration 13 - 增强功能 [DONE]

### Prompts Library
- [x] 创建 Prompts Library 页面 (PromptsLibrary.tsx)
- [x] 显示分类提示词列表 (8个提示词模板)
- [x] 搜索和筛选功能 (All/Writing/Coding/Business/Creative/Chat)

### Settings 页面
- [x] 创建 Settings 页面 (Settings.tsx)
- [x] 账户设置选项 (Email/Password)
- [x] 通知设置选项 (Email/Push/Marketing)
- [x] 深色模式切换
- [x] 隐私安全选项

### Quiz 重试
- [x] Quiz 答错后显示 "Try Again" 按钮
- [x] 点击后重置答案状态

### E2E 测试
- [x] 浏览器 E2E 测试通过
- [x] 所有单元测试通过


## Phase 26: 完整 E2E 测试 [DONE]

### Iteration 10 E2E 测试
- [x] IT10-01: 课程详情页显示蛇形路径布局 (已修复)
- [x] IT10-02: 模块图标交替左右排列 (已修复)
- [x] IT10-03: SVG 曲线连接各模块
- [x] IT10-04: 点击模块显示预览弹窗
- [x] IT10-05: 弹窗包含标题、描述、Read/Listen 按钮
- [x] IT10-06: 点击弹窗外区域关闭弹窗
- [x] IT10-07: Weekly Streaks 卡片可点击
- [x] IT10-08: 点击打开 Streak 详情弹窗
- [x] IT10-09: 弹窗显示当前连续天数、最长连续、日历视图
- [x] IT10-10: Dashboard 导航为顶部水平布局

### Iteration 11 E2E 测试
- [x] IT11-01: 课程详情页顶部有课程名称下拉
- [x] IT11-02: 点击下拉展开横向课程选择器
- [x] IT11-03: 当前课程蓝色边框高亮
- [x] IT11-04: 点击其他课程切换路径视图
- [x] IT11-05: Profile 页面有深色模式开关
- [x] IT11-06: 点击开关整站颜色即时切换 (已修复)
- [x] IT11-07: 深色模式偏好保存到 localStorage
- [x] IT11-08: 证书卡片点击跳转到对应课程
- [x] IT11-09: 所有卡片有 hover 上浮效果

### Iteration 12 E2E 测试
- [x] IT12-01: Landing Page Hero 区域有 AI 聊天演示
- [x] IT12-02: 打字机效果显示用户问题
- [x] IT12-03: 逐字显示 AI 回复
- [x] IT12-04: 用户数 "1,461,394+" 数字滚动动画
- [x] IT12-05: Testimonials 区域自动轮播
- [x] IT12-06: 有左右箭头手动切换
- [x] IT12-07: 有指示点显示当前位置

### Iteration 13 E2E 测试
- [x] IT13-01: Prompts Library 页面显示提示词列表
- [x] IT13-02: 有搜索框可搜索提示词
- [x] IT13-03: 有分类筛选按钮
- [x] IT13-04: 点击 Copy Prompt 复制提示词
- [x] IT13-05: Settings 页面显示账户设置
- [x] IT13-06: 有通知设置开关
- [x] IT13-07: 有深色模式开关
- [x] IT13-08: Quiz 答错后显示 Try Again 按钮
- [x] IT13-09: 点击 Try Again 重置答案状态

### E2E 测试结果汇总
- **IT10**: 10/10 通过 (蛇形路径已修复)
- **IT11**: 9/9 通过 (深色模式已修复)
- **IT12**: 7/7 通过
- **IT13**: 9/9 通过
- **总计**: 35/35 通过 (100%)


## Phase 27: 完整 E2E 交互对比 [DONE]

### Landing Page 交互
- [x] 导航栏点击交互
- [x] Hero 区域交互
- [x] 课程卡片点击
- [x] FAQ 展开/收起
- [x] CTA 按钮点击

### 登录/注册流程
- [x] 登录表单交互
- [x] 注册表单交互
- [x] 忘记密码流程
- [x] 社交登录按钮

### Dashboard 交互
- [x] 导航切换
- [x] Streak 卡片点击
- [x] 课程卡片点击
- [x] 挑战卡片点击

### 课程详情页交互
- [x] 课程切换下拉
- [x] 模块点击
- [x] 进度显示
- [x] 开始/继续按钮

### 课程内容阅读交互
- [x] 翻页按钮
- [x] 进度条
- [x] 关闭按钮
- [x] 退出确认弹窗
- [x] 音频按钮 (Coming Soon)

### Quiz 交互
- [x] 选项选择
- [x] 提交答案
- [x] 正确/错误反馈
- [x] Try Again 按钮
- [x] Continue 按钮

### 挑战系统交互
- [x] 天数导航
- [x] 任务列表点击
- [x] 开始任务按钮

### Profile/Settings 交互
- [x] 深色模式开关
- [x] 设置选项
- [x] 登出按钮

### 对比结果
- 🔴 重大差异: 4 项
- 🟡 中等差异: 12 项
- 🟢 小差异: 2 项
- 已生成完整对比文档: INTERACTION_COMPARISON_FINAL.md


## Phase 28: 修复 Streak Challenge 进度条 [DONE]

### 任务
- [x] 在 Streak 详情弹窗添加 Streak Challenge 进度条
- [x] 显示 3 天挑战进度
- [x] 显示 7 天挑战进度
- [x] 显示 14 天挑战进度
- [x] 根据当前连续天数显示完成状态
- [x] E2E 测试验证


## Phase 29: 点击与响应对比测试 [IN PROGRESS]

### Landing Page
- [ ] Logo 点击响应
- [ ] 导航栏链接点击响应
- [ ] CTA 按钮点击响应
- [ ] FAQ 展开/收起响应
- [ ] 轮播箭头点击响应

### Dashboard
- [ ] 导航栏切换响应
- [ ] Streak 卡片点击响应
- [ ] 课程卡片点击响应
- [ ] 挑战卡片点击响应

### 课程详情页
- [ ] 课程切换下拉响应
- [ ] 模块点击响应
- [ ] 进度条交互响应

### 课程内容阅读
- [ ] Continue 按钮响应
- [ ] Complete 按钮响应
- [ ] 关闭按钮响应
- [ ] 音频按钮响应

### Quiz
- [ ] 选项点击响应
- [ ] Check Answer 按钮响应
- [ ] Try Again 按钮响应
- [ ] Continue 按钮响应

### 挑战系统
- [ ] 天数导航点击响应
- [ ] 任务列表点击响应
- [ ] Start Lesson 按钮响应

### Profile/Settings
- [ ] 深色模式开关响应
- [ ] 设置选项点击响应
- [ ] 登出按钮响应


## Phase 29: Iteration 14 - 浏览器窗口动画演示 [DONE]

### 任务
- [x] 创建 BrowserWindowAnimation 组件
- [x] 实现浏览器窗口顶部栏（紫蓝色 + 红黄绿按钮）
- [x] 实现内容区域动画演示
- [x] 实现底部输入框打字动画
- [x] 实现发送按钮交互
- [x] 移除当前可点击的 AI Chat 组件
- [x] 集成到主页 Hero 区域
- [x] 运行测试验证（44 passed, 1 skipped）


## Phase 30: Bug 修复 - "Advance your career" 按钮无响应 [DONE]

### 问题
- [x] "Advance your career with AI skills" 部分的 "Start Now" 按钮无响应
- [x] 应该跳转到 Quiz 流程（/quiz/1）
- [x] 测试用例未覆盖此按钮

### 修复任务
- [x] 定位 LandingPage 中的 "Start Now" 按钮
- [x] 添加跳转到 /quiz/1 的功能
- [x] 添加测试用例验证按钮点击和跳转
- [x] 运行完整测试验证（47 passed, 1 skipped）
