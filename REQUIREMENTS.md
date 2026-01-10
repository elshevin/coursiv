# Coursiv 完整需求文档与交付规格

## 一、项目概述

Coursiv 是一个 AI 学习平台，包含完整的用户引导流程、付费转化漏斗和学习 Dashboard。本项目目标是 100% 复刻该平台的所有页面和功能，使用 Mock 数据填充生成式内容，实现 Demo 登录系统。

---

## 二、完整页面清单

### A. 公开页面（无需登录）

| 页面 | URL | 状态 | 优先级 |
|------|-----|------|--------|
| 1. 主落地页 | `/` | ✅ 已有框架 | P0 |
| 2. 博客页面 | `/blog` | ❌ 待实现 | P2 |
| 3. 支持中心 | `/support` | ❌ 待实现 | P2 |

### B. Onboarding Quiz 流程（25+ 步骤）

| 步骤 | 页面类型 | 内容 | 状态 |
|------|---------|------|------|
| 1 | 身份选择 | "I work for a company" / "I work for myself" | ❌ 待实现 |
| 2 | Social Proof | "700,000+ people joined" | ❌ 待实现 |
| 3-22 | Quiz 问题 | 20 个个性化问题（年龄、目标、痛点等） | ❌ 待实现 |
| 23 | 个人计划 | "Your Personal AI Challenge" 结果页 | ❌ 待实现 |
| 24 | 加载动画 | "Creating your AI challenge..." 进度条 | ❌ 待实现 |
| 25 | 邮箱收集 | "Enter your email" 表单 | ❌ 待实现 |
| 26 | 姓名收集 | "What is your name?" 表单 | ❌ 待实现 |
| 27 | 刮刮卡 | "Scratch & Save" 优惠互动 | ❌ 待实现 |

### C. Upsell 付费页面

| 页面 | 内容 | 状态 |
|------|------|------|
| 1. AI Tools Unlimited | $99.99 AI 工具包 | ❌ 待实现 |
| 2. AI Prompts Bundle | $49.99 11,000+ Prompts | ❌ 待实现 |

### D. 登录后 Dashboard（核心功能区）

| 页面 | URL | 功能 | 状态 |
|------|-----|------|------|
| 1. Home | `/app` | 首页 Dashboard，显示 Weekly Streaks、Prompts Library、Challenges | ❌ 待实现 |
| 2. Guides | `/app/guides` | 学习指南列表 | ❌ 待实现 |
| 3. Challenges | `/app/challenges` | 28-day Challenge 进度 | ❌ 待实现 |
| 4. AI Tools | `/app/ai-tools` | AI 工具集成（ChatGPT、DALL-E 等） | ❌ 待实现 |
| 5. Profile | `/app/profile` | 用户资料设置 | ❌ 待实现 |
| 6. Prompts Library | `/app/prompts-library` | Prompts 库 | ❌ 待实现 |

---

## 三、生成式内容 Mock 方案

| 内容类型 | 原始功能 | Mock 方案 |
|---------|---------|----------|
| AI Assistant 对话 | 实时 AI 回复 | 预设 10 条固定对话 |
| 个性化学习计划 | 根据 Quiz 生成 | 固定 3 套学习计划模板 |
| AI Tools 回复 | ChatGPT/DALL-E API | 预设固定回复和图片 |
| 课程推荐 | 动态推荐 | 固定课程列表 |
| 用户评价 | 动态加载 | 固定 10 条评价 |

---

## 四、Demo 登录系统

### 登录流程
1. 用户点击 "Login" 或 "Start Now"
2. 自动创建新 Demo 用户（用户名：`demo_时间戳_随机码`）
3. 存储到本地数据库
4. 设置 JWT Cookie（7天有效期）
5. 跳转到 Dashboard

### 数据库表结构
```sql
demoUsers:
  - id: int (主键)
  - username: varchar (唯一)
  - displayName: varchar
  - email: varchar
  - quizAnswers: json (存储 Quiz 答案)
  - createdAt: timestamp
  - lastLoginAt: timestamp
```

---

## 五、交付时间表（6小时）

| 时间段 | 交付内容 | 验收标准 |
|--------|---------|---------|
| 0-1h | Demo 登录系统 + 主落地页视觉优化 | 登录/登出功能正常，视觉 95% 还原 |
| 1-2.5h | Onboarding Quiz 流程（25 步） | 所有步骤可点击，流程完整 |
| 2.5-4h | Dashboard 5 个核心页面 | 页面结构完整，Mock 数据展示 |
| 4-5h | Upsell 页面 + 交互动画 | 页面完整，动画流畅 |
| 5-6h | 全量测试 + Bug 修复 | 无明显 Bug，视觉 100% 还原 |

---

## 六、技术实现要点

### 路由结构
```
/                     → 主落地页
/quiz                 → Quiz 流程入口
/quiz/step/:id        → Quiz 各步骤
/quiz/result          → 个人计划结果
/quiz/email           → 邮箱收集
/quiz/name            → 姓名收集
/quiz/scratch         → 刮刮卡
/upsell/ai-tools      → AI Tools Upsell
/upsell/prompts       → Prompts Upsell
/app                  → Dashboard 首页
/app/guides           → 学习指南
/app/challenges       → 挑战进度
/app/ai-tools         → AI 工具
/app/profile          → 用户资料
/login                → Demo 登录
```

### 状态管理
- 使用 React Context 管理用户登录状态
- 使用 localStorage 持久化 Quiz 答案
- 使用 tRPC 与后端通信

---

## 七、验收标准

1. **视觉还原**：与 Figma 设计稿对比，差异 < 5%
2. **功能完整**：所有页面可访问，所有按钮可点击
3. **流程通畅**：从落地页到 Dashboard 的完整流程无阻塞
4. **响应式**：桌面端优先，移动端后续迭代
5. **无 Bug**：无控制台错误，无页面崩溃

---

## 八、后续迭代（不在本次交付范围）

- 移动端响应式适配
- 真实 AI 功能对接
- 支付系统集成
- 博客和支持中心页面
- SEO 优化
