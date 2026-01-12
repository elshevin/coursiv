# Coursiv Quiz 引导流程完整分析

## 对比时间：2026-01-12 08:11 GMT+8

---

## 一、原站 Quiz 流程结构

### 流程概览

| 步骤 | 类型 | 问题/内容 | 选项数量 | 特殊元素 |
|------|------|----------|----------|----------|
| 0 | 身份选择 | How would you describe yourself? | 2 | 带人物图片的卡片 |
| 0.5 | 社交证明 | "More than 700,000" people joined | 1 (CONTINUE) | 创始人图片 |
| 1/20 | 年龄 | What is your age? | 4 | 无图标 |
| 2/20 | 目标 | What is your main goal? | 5 | 带 Emoji 图标 |
| 3/20 | AI困惑 | Do you feel overwhelmed with AI? | 4 | 带 Emoji 图标 |
| 4/20 | AI熟悉度 | How comfortable are you with AI tools? | 4 | 带 Emoji 图标 |
| 5/20 | AI趋势担忧 | Are you afraid to fall behind the AI trend? | 4 | 带 Emoji 图标 |
| 5.5 | 鼓励页 | Worry no more! We will help you... | 1 (CONTINUE) | 用户图片 |
| 6/20 | 学习难度 | Do you think that it's hard to learn AI? | 3 | 带 Emoji 图标 |

### 关键发现

#### 1. 流程结构特点
- **总共 20 个问题步骤**（显示为 X/20）
- **穿插社交证明/鼓励页面**（不计入 20 步）
- **进度条**：左上角显示进度
- **返回按钮**：左上角箭头可返回上一步
- **步骤计数**：右上角显示 "X / 20"

#### 2. 选项卡片样式
- **黄色虚线边框**
- **左侧 Emoji 图标**（大部分问题）
- **文字居左**
- **点击后自动进入下一步**（无需额外确认按钮）

#### 3. 社交证明页面特点
- **大标题**：鼓励性文字
- **副标题**：统计数据
- **右侧图片**：真人照片
- **底部 CONTINUE 按钮**：黄色背景

#### 4. 身份选择页面特点
- **标题**：28-DAY AI CHALLENGE
- **两个大卡片**：带真人照片
- **底部法律链接**：Terms, Privacy, Subscription
- **公司信息**：Harbour TechVision Limited, Hong Kong

---

## 二、本地站 Quiz 流程对比

### 待测试项目
- [ ] 身份选择页面样式
- [ ] 社交证明页面是否存在
- [ ] 进度条显示
- [ ] 步骤计数显示
- [ ] 返回按钮功能
- [ ] 选项卡片样式（Emoji + 虚线边框）
- [ ] 鼓励页面是否存在
- [ ] 问题数量和顺序

---

## 三、差异记录

### 3.1 Quiz 流程结构差异

| 项目 | 原站 Coursiv | 本地站 | 状态 |
|------|-------------|--------|------|
| **总步骤数** | 20 步 | 22 步 | ❌ 不一致 |
| **第一步标题** | "28-DAY AI CHALLENGE" | 无 | ❌ 缺失 |
| **第一步问题** | "How would you describe yourself?" | "Who are you?" | ❌ 不一致 |
| **第一步选项** | 2 个（带真人图片） | 5 个（带 Emoji） | ❌ 不一致 |
| **社交证明页** | 有（"More than 700,000"） | 有（"Join 2M+ learners"） | ✅ 相似 |
| **年龄选项** | 4 个 (18-24, 25-34, 35-44, 45+) | 5 个 (18-24, 25-34, 35-44, 45-54, 55+) | ❌ 不一致 |
| **进度显示** | "X / 20" 右上角 | "Step X of 22" 中间 | ❌ 格式不一致 |
| **返回按钮** | 左上角箭头 | "Back" 文字 | ✅ 功能相同 |
| **底部法律链接** | 有 | 无 | ❌ 缺失 |

### 3.2 原站 Quiz 问题序列（前 6 步）

| 步骤 | 问题 | 选项数 |
|------|------|--------|
| 0 | How would you describe yourself? | 2 |
| 0.5 | 社交证明页 | CONTINUE |
| 1/20 | What is your age? | 4 |
| 2/20 | What is your main goal? | 5 |
| 3/20 | Do you feel overwhelmed with AI? | 4 |
| 4/20 | How comfortable are you with AI tools? | 4 |
| 5/20 | Are you afraid to fall behind the AI trend? | 4 |
| 5.5 | 鼓励页（Worry no more!） | CONTINUE |
| 6/20 | Do you think that it's hard to learn AI? | 3 |

### 3.3 本地站 Quiz 问题序列（前 4 步）

| 步骤 | 问题 | 选项数 |
|------|------|--------|
| 1/22 | Who are you? | 5 |
| 2/22 | 社交证明页 (Join 2M+ learners) | CONTINUE |
| 3/22 | What's your age? | 5 |
| 4/22 | What's your current experience with AI? | 4 |

### 3.4 关键差异总结

1. **第一步完全不同**：原站是简单二选一（Employee/Self-employed），本地站是 5 个选项
2. **缺少 "28-DAY AI CHALLENGE" 标题**
3. **缺少底部法律链接**
4. **问题顺序和内容不一致**
5. **缺少中间的鼓励页面**（如 "Worry no more!" 页）

