# Coursiv E2E 对比测试报告

**测试日期**: 2026-01-12
**测试范围**: 引导流程、注册逻辑、课程蛇形路径交互

---

## 一、引导流程（Quiz）对比

### 1.1 原站 Coursiv Quiz 流程

| 步骤 | 问题 | 选项数 | 特点 |
|------|------|--------|------|
| 0 | How would you describe yourself? | 2 | 带真人照片的大卡片 |
| 0.5 | 社交证明页 "More than 700,000" | CONTINUE | 展示用户数量 |
| 1/20 | What is your age? | 4 | 18-24, 25-34, 35-44, 45+ |
| 2/20 | What is your main goal? | 5 | 带图标选项 |
| 3/20 | Do you feel overwhelmed with AI? | 4 | Always/Often/Sometimes/Not really |
| 4/20 | How comfortable are you with AI tools? | 4 | 舒适度选择 |
| 5/20 | Are you afraid to fall behind? | 4 | 恐惧程度 |
| 5.5 | 鼓励页 "Worry no more!" | CONTINUE | 中间激励页 |
| 6/20 | Do you think it's hard to learn AI? | 3 | 难度认知 |
| ... | 继续更多问题 | ... | ... |

**原站特点**：
- 标题 "28-DAY AI CHALLENGE"
- 进度显示在右上角 "X / 20"
- 底部有法律链接（Terms, Privacy）
- 中间有多个鼓励/激励页面
- 第一步是简单二选一（Employee/Self-employed）

### 1.2 本地站 Quiz 流程

| 步骤 | 问题 | 选项数 | 特点 |
|------|------|--------|------|
| 1/22 | Who are you? | 5 | 带 Emoji 的列表卡片 |
| 2/22 | 社交证明页 "Join 2M+ learners" | CONTINUE | 展示用户数量 |
| 3/22 | What's your age? | 5 | 18-24, 25-34, 35-44, 45-54, 55+ |
| 4/22 | What's your current experience with AI? | 4 | AI 经验选择 |
| ... | 继续更多问题 | ... | ... |

**本地站特点**：
- 无标题
- 进度显示在中间 "Step X of 22"
- 无底部法律链接
- 第一步有 5 个选项

### 1.3 差异总结

| 差异项 | 原站 | 本地站 | 优先级 |
|--------|------|--------|--------|
| 标题 | "28-DAY AI CHALLENGE" | 无 | P1 |
| 第一步选项数 | 2 | 5 | P0 |
| 第一步样式 | 真人照片大卡片 | Emoji 列表 | P1 |
| 总步骤数 | 20 | 22 | P1 |
| 进度位置 | 右上角 | 中间 | P2 |
| 底部法律链接 | 有 | 无 | P1 |
| 中间鼓励页 | 有多个 | 无 | P1 |

---

## 二、注册后跳转逻辑

### 2.1 发现的 Bug

**Bug #1: 注册后重复进入引导流程**
- **现象**: 用户完成注册后，有时会再次跳转到 Quiz 引导流程
- **预期**: 注册完成后应直接进入 Dashboard
- **原因**: 可能是状态管理问题，未正确标记用户已完成引导

**Bug #2: 课程 ID 不匹配**
- **现象**: Dashboard 中 DALL-E 课程链接使用 `/course/dalle`，但数据中 ID 是 `dall-e`
- **影响**: 点击 DALL-E 课程显示 "Course not found"
- **修复**: 统一课程 ID

---

## 三、课程蛇形路径交互

### 3.1 测试结果

| 交互 | 状态 | 问题描述 |
|------|------|----------|
| 点击已完成模块 | ✅ 正常 | 弹出模块详情弹窗 |
| 点击当前模块 | ✅ 正常 | 弹出模块详情弹窗 |
| 点击锁定模块 | ⚠️ 无反应 | 应显示"需要先完成前置模块"提示 |
| Read 按钮 | ✅ 正常 | 进入课程内容页 |
| Listen 按钮 | ✅ 正常 | 显示 "Coming Soon" |
| Continue 按钮 | ⚠️ 被遮挡 | 被 Preview mode 提示条遮挡 |

### 3.2 课程内容页问题

| 问题 | 描述 | 优先级 |
|------|------|--------|
| Continue 按钮被遮挡 | Preview mode 提示条遮挡了底部按钮 | P0 |
| 缺少页面切换动画 | 原站有淡入淡出效果 | P2 |
| 缺少返回确认 | 原站有 "Wait, don't go!" 弹窗 | ✅ 已实现 |

---

## 四、其他发现的问题

### 4.1 按钮无响应

| 按钮 | 位置 | 状态 |
|------|------|------|
| Get Certified Today | 主页 | ❌ 无响应 |
| Join Now | 主页 Challenge 部分 | ❌ 无响应 |
| Blog | 导航栏 | ❌ href="#" |
| Support Center | 导航栏 | ❌ href="#" |

### 4.2 页面缺失

| 页面 | 状态 | 建议 |
|------|------|------|
| Blog | ❌ 缺失 | 用 "Coming Soon" 占位 |
| Support Center | ❌ 缺失 | 用 "Coming Soon" 占位 |
| AI Tools | ❌ 显示 "Coming Soon" | 保持现状 |

---

## 五、修复优先级

### P0 - 必须修复（阻塞性问题）

1. **Quiz 第一步改为二选一**
   - 问题: "How would you describe yourself?"
   - 选项: "I work for a company" / "I work for myself"
   - 样式: 带真人照片的大卡片

2. **修复课程 ID 不匹配**
   - Dashboard: `/course/dalle` → `/course/dall-e`

3. **修复 Continue 按钮被遮挡**
   - 增加底部 padding 或调整 z-index

4. **修复注册后跳转逻辑**
   - 确保完成注册后不再进入 Quiz

### P1 - 建议修复（功能差异）

1. 添加 Quiz 标题 "28-DAY AI CHALLENGE"
2. 添加底部法律链接
3. 添加中间鼓励页面
4. 修复无响应按钮（Get Certified Today, Join Now）
5. 创建 Blog/Support Center 占位页

### P2 - 可选优化（体验差异）

1. 调整进度显示位置
2. 添加页面切换动画
3. 锁定模块点击提示

---

## 六、实施计划

| 阶段 | 任务 | 预计时间 |
|------|------|----------|
| Phase 1 | P0 问题修复 | 2 小时 |
| Phase 2 | P1 问题修复 | 3 小时 |
| Phase 3 | 测试验证 | 1 小时 |
| **总计** | | **6 小时** |

---

## 七、测试方案

### 7.1 单元测试

- [ ] Quiz 流程步骤顺序测试
- [ ] 课程 ID 匹配测试
- [ ] 按钮点击响应测试
- [ ] 注册后跳转逻辑测试

### 7.2 E2E 测试

- [ ] 完整 Quiz 流程测试
- [ ] 注册 → Dashboard 流程测试
- [ ] 课程学习完整流程测试
- [ ] 所有 CTA 按钮点击测试
