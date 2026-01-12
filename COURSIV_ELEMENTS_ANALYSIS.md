# Coursiv 原站内容元素与交互方式分析

**分析时间**：2026-01-12 07:10 GMT+8  
**目的**：记录所有内容元素和交互方式，为 Mock 课程实现提供完整参考

---

## 1. 导航栏元素

### 1.1 顶部导航（Dashboard 内）
| 元素 | 描述 | 交互 |
|------|------|------|
| Logo | Coursiv 草书 Logo | 点击返回首页 |
| Home | 首页图标 + 文字 | 点击进入 Dashboard |
| Guides | 书本图标 + 文字 | 点击进入课程列表 |
| Challenges | 目标图标 + 文字 | 点击进入挑战列表 |
| AI Tools | 星星图标 + 文字 | 点击进入 AI 工具页 |
| 火焰图标 | Streak 计数 | 点击打开 Streak 弹窗 |
| Profile | 用户头像 | 点击进入个人中心 |

---

## 2. Dashboard 首页元素

### 2.1 Streak 提示条
| 元素 | 描述 |
|------|------|
| 文字 | "Finish 1 lesson to continue your streak" |
| 周历 | Mon-Fri 五天显示，当前天高亮 |

### 2.2 继续学习卡片
| 元素 | 描述 |
|------|------|
| 标题 | "Pick up where you left off" |
| 课程图标 | 课程 Logo（如 Midjourney 帆船图标） |
| 课程标签 | "AI MASTERY • BASICS OF CHATGPT" |
| 课程名称 | "MidJourney" |
| 按钮 | "Continue learning" 紫蓝色按钮 |

### 2.3 Prompts Library 入口
| 元素 | 描述 |
|------|------|
| 标题 | "Prompts Library" |
| 副标题 | "The Complete AI Bundle is now in the app!" |
| 图标 | 星星/魔法棒图标 |

---

## 3. 课程列表页（Guides）

### 3.1 AI Mastery 卡片
| 元素 | 描述 |
|------|------|
| 顶部图标 | 紫蓝色方块 + 蓝色花瓣图案 |
| 标题 | "AI Mastery" |
| 描述 | "Step-by-step program to guide you from beginner to expert in using various AI tools" |
| 按钮 | "Resume path" 紫蓝色按钮 |

### 3.2 课程卡片列表
| 课程 | 图标 | 信息 |
|------|------|------|
| ChatGPT | 绿色 OpenAI Logo | "Lessons 16 • 3 levels" |
| Dall-E | 黑色 DALL-E Logo | "Lessons 16 • 3 levels" |
| Midjourney | 蓝色帆船图标 | "Lessons 16 • 3 levels" |

### 3.3 课程卡片交互
- 点击展开/收起（手风琴效果）
- 显示进度条
- 显示 "Continue learning" 按钮

---

## 4. 课程详情页（蛇形路径）

### 4.1 顶部标题栏
| 元素 | 描述 |
|------|------|
| 返回按钮 | 左箭头 |
| 课程标签 | "AI MASTERY • MIDJOURNEY: LEVEL 3" |
| 课程名称 | "Master to MidJourney" |
| 模块数 | "28 modules" 标签 |

### 4.2 蛇形路径布局
| 元素 | 描述 |
|------|------|
| 模块图标 | 绿色圆角方块，带勾选/锁定图标 |
| 模块名称 | 显示在图标下方 |
| 连接线 | 绿色 SVG 曲线连接各模块 |
| 当前位置 | "You're here" 标签 |

### 4.3 模块状态
| 状态 | 图标 | 颜色 |
|------|------|------|
| 已完成 | ✓ 勾选 | 深绿色 |
| 进行中 | 课程图标 | 浅绿色 |
| 锁定 | 🔒 锁 | 灰色 |
| 奖杯 | 🏆 奖杯 | 浅绿色（完成关卡） |

---

## 5. 课程内容阅读页

### 5.1 顶部导航
| 元素 | 描述 |
|------|------|
| 关闭按钮 | X 图标 |
| 进度指示 | "1/3" 页码 |
| 音频按钮 | 🔊 喇叭图标 |

### 5.2 内容区域
| 元素 | 描述 |
|------|------|
| 标题 | 课程章节标题 |
| 图标/图片 | Emoji 或插图 |
| 正文 | Markdown 格式的课程内容 |
| 高亮文字 | 重点内容加粗或高亮 |

### 5.3 底部导航
| 元素 | 描述 |
|------|------|
| Continue 按钮 | 紫蓝色，进入下一页 |
| Complete 按钮 | 最后一页显示，完成模块 |

### 5.4 退出确认弹窗
| 元素 | 描述 |
|------|------|
| 标题 | "Wait, don't go!" |
| 描述 | 提示用户完成学习 |
| 按钮 | "Continue Learning" / "Exit Anyway" |

---

## 6. Quiz 页面

### 6.1 顶部
| 元素 | 描述 |
|------|------|
| 关闭按钮 | X 图标 |
| 进度条 | 显示 Quiz 进度 |

### 6.2 题目区域
| 元素 | 描述 |
|------|------|
| 题目文字 | 问题描述 |
| 选项列表 | A/B/C/D 四个选项 |
| 选项样式 | 圆角卡片，选中时高亮 |

### 6.3 答案反馈
| 状态 | 样式 |
|------|------|
| 正确 | 绿色背景 + ✓ + "Correct!" |
| 错误 | 红色背景 + ✗ + "Not quite!" |
| 解释 | 显示答案解释文字 |

### 6.4 底部按钮
| 元素 | 描述 |
|------|------|
| Check Answer | 提交答案 |
| Try Again | 答错后重试 |
| Continue | 答对后继续 |

---

## 7. AI Tools 页面

### 7.1 顶部工具卡片
| 工具 | 描述 |
|------|------|
| AI Assistant | "Your personal AI-powered helper" |
| ChatGPT Classic | "The latest version of GPT-4 with no..." |
| Business coach | "Get expert business advice and..." |
| Image Gen | "Generate stunning images with AI" |

### 7.2 工具分类
| 分类 | 描述 |
|------|------|
| For You | 推荐工具 |
| Content Creation | 内容创作 |
| Image Generation | 图片生成 |
| Ideas | 创意灵感 |
| Marketing | 营销工具 |
| Social Media | 社交媒体 |
| Lifestyle | 生活方式 |
| Productivity | 生产力 |
| Translation | 翻译工具 |

### 7.3 工具卡片
| 元素 | 描述 |
|------|------|
| 图标 | 工具 Logo |
| 名称 | 工具名称 |
| 描述 | 工具功能描述 |
| 箭头 | 进入工具详情 |

---

## 8. 挑战系统

### 8.1 挑战卡片
| 元素 | 描述 |
|------|------|
| 封面图 | 挑战主题图片 |
| 标题 | 挑战名称 |
| 天数 | "28 days" |
| 难度 | "Beginner" / "Intermediate" / "Advanced" |

### 8.2 挑战详情页
| 元素 | 描述 |
|------|------|
| 天数导航 | D1-D28 横向滚动 |
| 进度百分比 | "0% complete" |
| 证书卡片 | 完成后获得的证书预览 |
| 每日任务列表 | 任务图标 + 名称 + 状态 |

---

## 9. Profile 页面

### 9.1 用户信息
| 元素 | 描述 |
|------|------|
| 头像 | 用户头像（默认图标） |
| 用户名 | 显示用户名 |
| 邮箱 | 显示邮箱地址 |

### 9.2 Quick Actions
| 元素 | 描述 |
|------|------|
| Prompts Library | 进入提示词库 |
| Help | 帮助中心 |
| Settings | 设置页面 |

### 9.3 证书列表
| 元素 | 描述 |
|------|------|
| 证书卡片 | 课程名称 + 进度百分比 |
| 状态图标 | 🔒 锁定 / 🏆 已获得 |
| 进度条 | 显示完成进度 |

---

## 10. 关键交互方式

### 10.1 点击反馈
| 交互 | 效果 |
|------|------|
| 按钮点击 | 按下缩放 + 颜色变深 |
| 卡片点击 | 上浮阴影 + 边框高亮 |
| 选项选择 | 背景色变化 + 勾选图标 |

### 10.2 动画效果
| 动画 | 描述 |
|------|------|
| 页面切换 | 淡入淡出 |
| 弹窗打开 | 从底部滑入 |
| 进度条 | 平滑填充动画 |
| 数字滚动 | 计数器动画 |

### 10.3 手势支持
| 手势 | 效果 |
|------|------|
| 左右滑动 | 切换内容页 |
| 下拉刷新 | 刷新数据 |
| 点击外部 | 关闭弹窗 |

---

## 11. 当前实现缺失的元素

### 11.1 首页 Hero 区域
- ❌ 浏览器窗口演示只显示骨架屏，没有真实 AI 生成内容
- ❌ 没有标题 "Social Media Post for New Fitness App Launch"
- ❌ 没有 AI 生成的图片和文案

### 11.2 课程内容
- ❌ 课程内容缺少丰富的插图
- ❌ 没有音频播放功能
- ❌ 内容格式不够丰富（缺少代码块、表格等）

### 11.3 AI Tools 页面
- ❌ 当前显示 "Coming Soon"
- ❌ 缺少真实的 AI 工具卡片
- ❌ 缺少工具分类筛选

### 11.4 交互细节
- ❌ 部分按钮无响应（Get Certified Today、Join Now）
- ❌ Blog 和 Support Center 链接无功能
- ❌ 深色模式下部分元素样式不完整

---

## 12. 下一步：生成完整需求迭代文档
