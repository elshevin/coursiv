# 四个关键界面差异分析

根据用户提供的截图，对比当前实现与 Coursiv 原站的差异。

## 1. 加载页面（Creating your AI challenge...）

### Coursiv 原站
- 进度圆环显示百分比（57%）
- 文字："Creating your AI challenge..."
- 下方显示："700,000+ people have chosen Coursiv"
- Trustpilot 评价卡片（绿色五星 + 用户评价）
- "Featured reviews from Trustpilot" 底部说明

### 当前实现
- ❌ **缺失此页面** - 没有带进度圆环的加载页面
- ❌ **缺失 Trustpilot 评价卡片**

### 需要添加
- [ ] 创建加载页面组件（进度圆环 0-100%）
- [ ] 添加 "Creating your AI challenge..." 文字
- [ ] 添加 "700,000+ people have chosen Coursiv"
- [ ] 添加 Trustpilot 评价卡片（绿色五星）

---

## 2. 刮刮卡折扣页面（Scratch & Save）

### Coursiv 原站
- 标题："Scratch & Save on your 28-Day AI Challenge!"
- 副标题："Boost your skills and master AI. Get your gift with us 🎁"
- 刮刮卡区域（可刮开显示折扣）
- 刮开后显示 "50% OFF"
- 弹窗："Wooo hooo!" + "You unlocked your own 50% off" + "CLAIM MY DISCOUNT" 按钮

### 当前实现
- ❌ **缺失此页面** - 没有刮刮卡交互页面

### 需要添加
- [ ] 创建刮刮卡组件（canvas 实现刮刮效果）
- [ ] 添加 "Scratch & Save" 标题和说明
- [ ] 刮开后显示折扣百分比
- [ ] 添加 "Wooo hooo!" 成功弹窗

---

## 3. 个性化课程页面（Your 4-week Personal AI Challenge）

### Coursiv 原站
- 标题："Your readiness level" + 绿色 "It's Perfect!" 标签
- 4 周成长曲线图（Week 1 → Week 2 → Week 3 → Week 4）
- 曲线从左下到右上，带渐变色
- 底部说明："Results will be influenced by your consistency and commitment"
- 标题："Your 4-week Personal AI Challenge is ready!"
- 蓝色 "CONTINUE" 按钮

### 当前实现（/quiz/23）
- ✅ 标题 "Your Personal AI Challenge"
- ✅ 目标日期 "AI Confident by Apr 2026"
- ⚠️ 成长曲线图是静态的（Jan → Feb → Mar → Apr）
- ❌ **缺失 "Your readiness level" + "It's Perfect!" 标签**
- ❌ **缺失 4 周格式**（当前是 4 个月）
- ❌ **缺失成长曲线动效**

### 需要修改
- [ ] 改为 4 周格式（Week 1-4）而非 4 个月
- [ ] 添加 "Your readiness level" + "It's Perfect!" 标签
- [ ] 添加成长曲线动画效果
- [ ] 修改底部说明文字

---

## 4. 付款页面（Paywall）

### Coursiv 原站
- 顶部步骤指示器（购买计划 → 创建账户 → 注册优惠 → 入职）
- 语言选择下拉框
- 倒计时 "剩余时间 10:00 分:秒"
- 两个按钮："购买" 和 "登记"

### 当前实现
- ✅ 有 Upsell 页面 (/upsell)
- ⚠️ 需要检查是否有倒计时
- ⚠️ 需要检查步骤指示器

### 需要检查
- [ ] 检查 Upsell 页面的倒计时功能
- [ ] 检查步骤指示器
- [ ] 检查语言选择功能

---

## 总结

| 界面 | 状态 | 优先级 |
|------|------|--------|
| 加载页面（进度圆环+Trustpilot） | ❌ 缺失 | 高 |
| 刮刮卡折扣页面 | ❌ 缺失 | 高 |
| 个性化课程页面 | ⚠️ 需改进 | 中 |
| 付款页面 | ⚠️ 需检查 | 低 |

