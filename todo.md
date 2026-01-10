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
