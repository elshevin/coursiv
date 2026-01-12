# Coursiv 课程内容完整性分析

## 分析日期：2026-01-12

---

## 一、Coursiv 原站核心功能

### 1. AI Mastery 学习路径
- **28 个模块**的完整学习计划
- **"You're here" 标签**标记当前学习位置
- **步骤式进度**：Start here → Step 1 → Step 2 → Step 3
- **锁定机制**：未解锁的步骤显示锁图标
- **真实 AI 工具图标**：ChatGPT、DALL-E、Midjourney 等

### 2. 课程列表页面（Guides）
- **AI Mastery 总览卡片**：显示"Resume path"按钮
- **课程卡片**：
  - 真实 Logo 图标（非 Emoji）
  - 课程名称 + 课程数 + 级别数
  - "Continue learning" 按钮
  - 进度条显示
- **蛇形路径连接线**：课程之间有 SVG 曲线连接

### 3. 课程详情页面
- **蛇形学习路径**：
  - 绿色完成节点（带勾选图标）
  - 当前节点高亮
  - 灰色锁定节点
  - SVG 曲线连接线
- **级别标题卡片**：如 "AI MASTERY • MIDJOURNEY: LEVEL 3"
- **模块名称**：如 "Composition for Marketing"、"Ethics in AI Art"

### 4. AI Tools 页面
- **顶部推荐工具**：
  - AI Assistant
  - ChatGPT Classic
  - Business coach
  - Image Gen
- **分类筛选标签**：
  - For You、Content Creation、Image Generation、Ideas
  - Marketing、Social Media、Lifestyle、Productivity、Translation
- **工具卡片**：
  - 图标 + 名称 + 描述
  - 箭头指示可点击

### 5. 课程内容页面（推测）
- **标题 + 内容文本**
- **图片/插图**
- **Continue 按钮**
- **页码指示**：如 "1/3"
- **Read/Listen 切换**

---

## 二、当前实现与原站对比

### ✅ 已实现
| 功能 | 状态 | 完整度 |
|------|------|--------|
| 课程列表 | ✅ | 80% |
| 课程详情 | ✅ | 70% |
| 蛇形路径 | ✅ | 60% |
| 课程内容 | ⚠️ | 40% |
| Quiz | ✅ | 80% |
| AI Tools | ⚠️ | 20% |

### ❌ 未实现/缺失
| 功能 | 优先级 | 描述 |
|------|--------|------|
| AI Mastery 总览卡片 | P1 | Guides 页面顶部缺失 |
| 真实 AI 工具 Logo | P2 | 使用 Emoji 而非真实图标 |
| "You're here" 标签 | P1 | 学习路径缺少当前位置标记 |
| 蛇形路径 SVG 连接线 | P2 | 缺少曲线连接动画 |
| AI Tools 完整页面 | P1 | 显示 "Coming Soon" |
| 课程内容丰富格式 | P1 | 缺少代码块、表格、列表 |
| 课程 ID 不匹配 | P0 | dalle vs dall-e |

---

## 三、关键问题

### 问题 1：课程 ID 不匹配
```
Dashboard 链接: /course/dalle
courseData.ts ID: dall-e
结果: "Course not found"
```

### 问题 2：Mock 内容不完整
- 只有 ChatGPT 课程有完整内容
- 其他课程（DALL-E、Midjourney 等）内容为空或不存在

### 问题 3：AI Tools 页面
- 显示 "Coming Soon"
- 原站有完整的工具列表和分类筛选

---

## 四、改进优先级

### P0 - 必须修复（阻塞性问题）
1. 修复课程 ID 不匹配问题
2. 为所有课程生成完整 Mock 内容

### P1 - 高优先级
1. 添加 AI Mastery 总览卡片
2. 添加 "You're here" 当前位置标签
3. 实现完整的 AI Tools 页面
4. 丰富课程内容格式

### P2 - 中优先级
1. 替换 Emoji 为真实 AI 工具 Logo
2. 添加蛇形路径 SVG 连接线动画
3. 添加课程内容图片/插图

### P3 - 低优先级
1. 添加音频播放功能
2. 添加页面切换动画
3. 优化移动端体验
