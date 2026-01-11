# Coursiv 缺失功能需求文档

**版本**: 1.0  
**日期**: 2026年1月11日  
**作者**: Manus AI

---

## 1. 概述

本文档基于对 Coursiv 原版应用的详细分析，整理出当前实现中缺失的功能模块。这些功能是实现与原版一致体验的关键组成部分。

---

## 2. 功能对比总览

| 功能模块 | 原版状态 | 当前实现 | 优先级 | 工作量 |
|---------|---------|---------|-------|-------|
| Weekly Streaks 系统 | ✅ 完整 | ❌ 缺失 | 高 | 中 |
| 课程学习路径视图 | ✅ 完整 | ❌ 缺失 | 高 | 高 |
| 课程内容阅读页 | ✅ 完整 | ❌ 缺失 | 高 | 高 |
| 音频播放功能 | ✅ 完整 | ❌ 缺失 | 中 | 中 |
| 证书系统 | ✅ 完整 | ❌ 缺失 | 中 | 中 |
| AI 对话工具 | ✅ 完整 | ❌ 缺失 | 高 | 高 |
| 挑战详情页 | ✅ 完整 | ❌ 缺失 | 中 | 中 |
| Prompts Library | ✅ 完整 | ❌ 缺失 | 低 | 中 |
| 深色模式 | ✅ 完整 | ❌ 缺失 | 低 | 低 |
| 邮箱密码登录 | ✅ 完整 | 部分(Demo) | 高 | 中 |

---

## 3. 高优先级功能需求

### 3.1 Weekly Streaks 系统

**功能描述**: 帮助用户建立学习习惯的连续学习追踪系统。

**UI 组件**:
- 标题卡片显示 "WEEKLY STREAKS"
- 副标题 "Help you build learning habit"
- 7天日历视图 (Sat-Fri)
- 已完成天数显示勾选标记
- 火焰图标 + 连续天数显示在导航栏

**数据模型**:
```typescript
interface UserStreak {
  userId: string;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: Date;
  weeklyProgress: boolean[]; // 7天数组
}
```

**API 端点**:
- `GET /api/user/streak` - 获取用户连续学习数据
- `POST /api/user/streak/update` - 更新学习记录

---

### 3.2 课程学习路径视图

**功能描述**: 以树状结构展示课程模块和学习进度。

**UI 组件**:
- 顶部课程选择下拉菜单
- 进度百分比显示
- 紫色标题栏 (课程分类 + 课程名称)
- 左侧证书卡片 (锁定状态 + 进度条)
- 右侧学习路径树 (节点式，用连线连接)
- 每个节点可点击展开弹窗
- 弹窗包含: 课程标题、描述、Read/Listen 按钮

**数据模型**:
```typescript
interface CoursePathway {
  id: string;
  name: string;
  category: string; // "AI MASTERY"
  level: number;
  modules: CourseModule[];
  progress: number;
}

interface CourseModule {
  id: string;
  title: string;
  description: string;
  type: 'lesson' | 'section' | 'certificate';
  hasAudio: boolean;
  completed: boolean;
  locked: boolean;
}
```

---

### 3.3 课程内容阅读页

**功能描述**: 展示课程具体内容的阅读界面。

**UI 组件**:
- 顶部关闭按钮 (X)
- 横向进度条
- 音频开关按钮
- 课程标题
- 课程正文 (支持富文本)
- 插图 (卡通风格)
- 底部 "Continue" 按钮
- 右下角反馈按钮

**交互逻辑**:
- 点击 Continue 进入下一步内容
- 点击 X 弹出确认弹窗 "Wait, don't go!"
- 支持 Read 和 Listen 两种模式切换
- 自动保存学习进度

**退出确认弹窗**:
- 标题: "Wait, don't go!"
- 说明: "You're right on track! If you quit now, you'll lose your progress."
- "Keep Learning" 按钮 (主按钮)
- "End Session" 按钮 (次按钮)

---

### 3.4 AI 对话工具

**功能描述**: 集成 AI 对话功能，支持多种 AI 模型。

**UI 组件**:
- 标题 "What can I help with?"
- 输入框 (支持图片上传)
- 模型选择下拉 (ChatGPT-5-mini 等)
- 发送按钮
- 快捷操作按钮组:
  - Create an image
  - Give advice
  - Generate ideas
  - Summarize text
  - Analyze this data
  - Translate this

**功能要求**:
- 支持多轮对话
- 支持图片上传和分析
- 支持多种 AI 模型切换
- 对话历史记录
- 积分消耗系统

**API 集成**:
- 需要集成 OpenAI API 或其他 LLM API
- 需要实现积分/额度系统

---

### 3.5 邮箱密码登录系统

**功能描述**: 替换当前的 Demo 登录，实现真实的邮箱密码登录。

**UI 组件**:
- 登录页面:
  - Email 输入框
  - Password 输入框
  - "Forgot password?" 链接
  - "Sign In" 按钮
  - "Don't have an account? Start the quiz" 链接

- 注册流程:
  - 通过 Quiz 完成后创建账号
  - 设置密码页面

**功能要求**:
- 密码加密存储 (bcrypt)
- JWT Token 认证
- 忘记密码流程 (邮件发送)
- 邮箱验证

---

## 4. 中优先级功能需求

### 4.1 证书系统

**功能描述**: 用户完成课程后获得证书。

**UI 组件**:
- Profile 页面证书列表
- 证书详情页
- 证书下载/分享功能

**数据模型**:
```typescript
interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  courseName: string;
  completedAt: Date;
  progress: number;
  isLocked: boolean;
}
```

---

### 4.2 挑战详情页

**功能描述**: 展示挑战的每日任务列表。

**UI 组件**:
- 顶部天数导航 (D1-D28 横向滚动)
- 挑战介绍和进度
- 证书卡片
- 每日任务列表 (工具图标 + 名称 + 状态)
- "Start now" 按钮

**数据模型**:
```typescript
interface Challenge {
  id: string;
  name: string;
  description: string;
  totalDays: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tasks: ChallengeTask[];
}

interface ChallengeTask {
  day: number;
  toolName: string;
  toolIcon: string;
  completed: boolean;
}
```

---

### 4.3 音频播放功能

**功能描述**: 课程内容支持音频播放。

**功能要求**:
- 文字转语音 (TTS)
- 播放/暂停控制
- 进度条
- 语速调节

---

## 5. 低优先级功能需求

### 5.1 Prompts Library

**功能描述**: AI 提示词库。

### 5.2 深色模式

**功能描述**: 支持深色主题切换。

### 5.3 Coursiv Junior

**功能描述**: 儿童 AI 学习模块。

---

## 6. 数据库表设计建议

### 新增表

| 表名 | 说明 |
|-----|------|
| user_streaks | 用户连续学习记录 |
| courses | 课程信息 |
| course_modules | 课程模块 |
| course_content | 课程内容 |
| user_progress | 用户学习进度 |
| certificates | 证书记录 |
| challenges | 挑战信息 |
| challenge_tasks | 挑战任务 |
| user_challenges | 用户挑战进度 |
| ai_conversations | AI 对话记录 |
| user_credits | 用户积分 |

---

## 7. 实施建议

### 第一阶段 (2周)
1. 实现邮箱密码登录系统
2. 实现 Weekly Streaks 系统
3. 添加课程数据模型

### 第二阶段 (3周)
1. 实现课程学习路径视图
2. 实现课程内容阅读页
3. 实现学习进度保存

### 第三阶段 (2周)
1. 实现挑战详情页
2. 实现证书系统

### 第四阶段 (3周)
1. 集成 AI 对话工具
2. 实现积分系统
3. 添加音频播放功能

---

## 8. 参考资料

本文档基于对 Coursiv 原版应用 (https://app.coursiv.io) 的详细分析整理。
