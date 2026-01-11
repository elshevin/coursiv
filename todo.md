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
