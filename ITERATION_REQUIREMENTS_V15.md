# Coursiv 项目迭代需求文档 V15

**文档版本**：V15  
**创建时间**：2026-01-12  
**作者**：Manus AI  
**状态**：待确认

---

## 执行摘要

本文档详细描述了 Coursiv 项目第 15 次迭代的需求，重点解决当前实现与原站的功能差异。通过深入分析原站的课程体验、内容元素和交互方式，我们识别出 4 个高优先级问题、3 个中优先级改进项和 4 个低优先级增强项。本迭代预计需要 4-6 小时完成，将显著提升用户体验和功能完整性。

---

## 1. 背景与目标

### 1.1 项目背景

Coursiv 是一个 AI 学习平台的落地页和 Dashboard 系统。经过 14 次迭代，已实现了主要功能，包括课程列表、课程详情、课程内容阅读、Quiz 系统、挑战系统、证书系统等。然而，通过与原站 coursiv.io 的对比测试，发现仍存在一些功能差异和交互问题。

### 1.2 迭代目标

本次迭代的核心目标是完善 Mock 课程体验，确保所有交互元素与原站一致。具体目标包括修复无响应按钮、增强首页浏览器窗口演示、完善 AI Tools 页面以及创建缺失的页面。

---

## 2. 当前状态分析

### 2.1 已实现功能

| 功能模块 | 完成度 | 状态 |
|----------|--------|------|
| 主落地页 | 95% | 基本完成，部分按钮无响应 |
| Quiz 流程 | 100% | 完全实现 |
| Dashboard 首页 | 100% | 完全实现 |
| 课程列表 (Guides) | 95% | 缺少 AI Mastery 总览卡片 |
| 课程详情页 | 100% | 蛇形路径已实现 |
| 课程内容阅读 | 90% | Mock 内容已集成，缺少真实图片 |
| Quiz 系统 | 100% | 完全实现 |
| 挑战系统 | 100% | 完全实现 |
| 证书系统 | 100% | 完全实现 |
| AI Tools 页面 | 30% | 仅显示 Coming Soon |
| Profile 页面 | 100% | 完全实现 |
| 深色模式 | 100% | 完全实现 |

### 2.2 测试覆盖

当前项目共有 47 个单元测试用例，1 个跳过。E2E 测试覆盖了 35 个交互场景，全部通过。

---

## 3. 需求详细说明

### 3.1 高优先级需求 (P0)

#### 3.1.1 修复无响应按钮

**问题描述**：4 个按钮/链接在点击时无响应，影响用户体验和功能完整性。

| 按钮 | 位置 | 期望行为 | 实现方案 |
|------|------|----------|----------|
| Get Certified Today | Certificate Section | 跳转到 /dashboard/guides | 添加 Link 包装器 |
| Join Now | 28-Day Challenge | 跳转到 /dashboard/challenges | 添加 Link 包装器 |
| Blog | 导航栏 | 跳转到 /blog | 修改 href 属性 |
| Support Center | 导航栏 | 跳转到 /support | 修改 href 属性 |

**验收标准**：
1. 点击 "Get Certified Today" 按钮后，页面跳转到 /dashboard/guides
2. 点击 "Join Now" 按钮后，页面跳转到 /dashboard/challenges
3. 点击 "Blog" 链接后，页面跳转到 /blog
4. 点击 "Support Center" 链接后，页面跳转到 /support

**预计工时**：30 分钟

---

#### 3.1.2 增强首页浏览器窗口演示

**问题描述**：当前浏览器窗口演示只显示骨架屏加载动画，没有真实的 AI 生成内容。

**原站效果**：
- 标题："Social Media Post for New Fitness App Launch"
- 图片：健身应用的宣传图
- 文案：AI 生成的社交媒体帖子内容
- 输入框：显示用户输入的 prompt

**实现方案**：

```typescript
// 演示场景数据
const demoScenes = [
  {
    title: "Social Media Post for New Fitness App Launch",
    image: "/images/demo/fitness-app.png",
    content: "🏋️ Ready to transform your fitness journey? Our new app makes it easy to track workouts, set goals, and stay motivated. Download now and get 30 days free! #FitnessApp #HealthyLifestyle",
    prompt: "Generate a social media post for a new fitness app launch"
  },
  {
    title: "Professional Email for Client Meeting",
    image: "/images/demo/email.png",
    content: "Dear Mr. Johnson, I hope this email finds you well. I would like to schedule a meeting to discuss our Q1 partnership opportunities...",
    prompt: "Write a professional email to schedule a client meeting"
  },
  {
    title: "Product Description for E-commerce",
    image: "/images/demo/product.png",
    content: "Introducing the UltraComfort Pro Headphones - Experience crystal-clear audio with our advanced noise-cancellation technology...",
    prompt: "Create a product description for wireless headphones"
  }
];
```

**验收标准**：
1. 浏览器窗口显示真实的 AI 生成内容（标题、图片、文案）
2. 每 8 秒自动切换到下一个演示场景
3. 输入框显示对应的 prompt 文字（打字动画）
4. 动画循环播放，无卡顿

**预计工时**：1 小时

---

#### 3.1.3 完善 AI Tools 页面

**问题描述**：当前 AI Tools 页面只显示 "Coming Soon"，与原站差异较大。

**原站功能**：
- 顶部 4 个主要工具卡片（AI Assistant、ChatGPT Classic、Business Coach、Image Gen）
- 工具分类筛选（For You、Content Creation、Image Generation 等 9 个分类）
- 工具列表（Pixel Art、EmailEngine、CreativeCopy 等）

**实现方案**：

```typescript
// 主要工具数据
const mainTools = [
  { id: 'ai-assistant', name: 'AI Assistant', description: 'Your personal AI-powered helper', icon: '🤖' },
  { id: 'chatgpt', name: 'ChatGPT Classic', description: 'The latest version of GPT-4', icon: '💬' },
  { id: 'business-coach', name: 'Business Coach', description: 'Get expert business advice', icon: '💼' },
  { id: 'image-gen', name: 'Image Gen', description: 'Generate stunning images with AI', icon: '🎨' }
];

// 工具分类
const categories = ['For You', 'Content Creation', 'Image Generation', 'Ideas', 'Marketing', 'Social Media', 'Lifestyle', 'Productivity', 'Translation'];

// 工具列表
const tools = [
  { id: 'pixel-art', name: 'Pixel Art', description: 'Create stunning pixel-based artwork', category: 'Image Generation' },
  { id: 'email-engine', name: 'EmailEngine', description: 'Automate your email marketing', category: 'Marketing' },
  // ... 更多工具
];
```

**验收标准**：
1. 页面顶部显示 4 个主要工具卡片
2. 工具分类筛选标签可点击切换
3. 工具列表根据分类筛选显示
4. 工具卡片点击显示 "Coming Soon" 提示（或跳转到工具详情）

**预计工时**：1.5 小时

---

#### 3.1.4 创建 Blog 和 Support Center 页面

**问题描述**：导航栏的 Blog 和 Support Center 链接指向 "#"，没有对应页面。

**实现方案**：

**Blog 页面**：
- 页面标题："Blog"
- 文章列表（Mock 数据，3-5 篇文章）
- 每篇文章显示：标题、摘要、发布日期、阅读时间
- 点击文章显示 "Coming Soon" 或跳转到文章详情

**Support Center 页面**：
- 页面标题："Support Center"
- FAQ 列表（复用首页 FAQ 数据）
- 搜索框（可选）
- 联系方式（support@coursiv.io）

**验收标准**：
1. /blog 路由可访问，显示文章列表
2. /support 路由可访问，显示 FAQ 和联系方式
3. 页面样式与整体设计一致
4. 导航栏链接正确跳转

**预计工时**：1 小时

---

### 3.2 中优先级需求 (P1)

#### 3.2.1 添加 AI Mastery 总览卡片

**问题描述**：原站 Guides 页面顶部有一个 "AI Mastery" 总览卡片，显示整体学习进度。

**实现方案**：
在 Guides 页面顶部添加一个大卡片，显示：
- 标题："AI Mastery"
- 描述："Step-by-step program to guide you from beginner to expert"
- 按钮："Resume path"
- 整体进度百分比

**验收标准**：
1. Guides 页面顶部显示 AI Mastery 卡片
2. 卡片显示整体学习进度
3. 点击 "Resume path" 跳转到最近学习的课程

**预计工时**：30 分钟

---

#### 3.2.2 使用真实课程图标

**问题描述**：当前课程卡片使用 Emoji 图标，与原站的真实 Logo 有差异。

**实现方案**：
- 下载或创建课程图标（ChatGPT、DALL-E、Midjourney 等）
- 替换 Emoji 为真实图标
- 确保图标在深色模式下也清晰可见

**验收标准**：
1. 所有课程卡片显示真实图标
2. 图标在浅色和深色模式下都清晰
3. 图标大小和位置与原站一致

**预计工时**：45 分钟

---

#### 3.2.3 丰富课程内容格式

**问题描述**：当前课程内容主要是纯文本，缺少代码块、表格、列表等丰富格式。

**实现方案**：
- 更新 Mock 课程内容，添加代码示例
- 添加表格展示对比信息
- 添加有序/无序列表
- 添加引用块展示重点内容

**验收标准**：
1. 课程内容包含代码块（带语法高亮）
2. 课程内容包含表格
3. 课程内容包含列表
4. 课程内容包含引用块

**预计工时**：1 小时

---

### 3.3 低优先级需求 (P2)

#### 3.3.1 添加页面切换动画

**问题描述**：页面切换时没有过渡动画，体验不够流畅。

**实现方案**：
- 使用 Framer Motion 或 CSS 动画
- 添加淡入淡出效果
- 添加滑动效果（课程内容页）

**预计工时**：30 分钟

---

#### 3.3.2 完善蛇形路径连接线

**问题描述**：当前蛇形路径的连接线较简单，与原站的 SVG 曲线有差异。

**实现方案**：
- 使用 SVG 绘制曲线连接
- 根据模块状态显示不同颜色
- 添加动画效果（可选）

**预计工时**：45 分钟

---

#### 3.3.3 添加 "You're here" 标签

**问题描述**：原站在当前学习位置显示 "You're here" 标签。

**实现方案**：
- 在当前进行中的模块上方添加标签
- 使用气泡样式
- 添加指向箭头

**预计工时**：20 分钟

---

#### 3.3.4 实现音频播放功能

**问题描述**：课程内容页的音频按钮目前显示 "Coming Soon"。

**实现方案**：
- 集成 Web Audio API 或第三方 TTS 服务
- 添加播放/暂停控制
- 显示播放进度

**预计工时**：2 小时（如使用第三方服务）

---

## 4. 技术实现方案

### 4.1 文件变更清单

| 文件路径 | 变更类型 | 描述 |
|----------|----------|------|
| client/src/pages/LandingPage.jsx | 修改 | 修复按钮跳转 |
| client/src/components/Navbar.tsx | 修改 | 修复 Blog/Support 链接 |
| client/src/components/BrowserWindowAnimation.tsx | 重写 | 增强演示内容 |
| client/src/pages/AITools.tsx | 重写 | 完善工具页面 |
| client/src/pages/Blog.tsx | 新增 | 创建 Blog 页面 |
| client/src/pages/SupportCenter.tsx | 新增 | 创建支持中心页面 |
| client/src/App.tsx | 修改 | 添加新路由 |
| client/src/data/aiToolsData.ts | 新增 | AI 工具数据 |
| client/src/data/blogData.ts | 新增 | Blog 文章数据 |
| shared/mockCourseContent.ts | 修改 | 丰富内容格式 |

### 4.2 数据模型

#### AI Tools 数据模型

```typescript
interface AITool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  isAvailable: boolean;
}

interface ToolCategory {
  id: string;
  name: string;
  count: number;
}
```

#### Blog 数据模型

```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image?: string;
}
```

### 4.3 路由配置

```typescript
// 新增路由
<Route path="/blog" element={<Blog />} />
<Route path="/blog/:postId" element={<BlogPost />} />
<Route path="/support" element={<SupportCenter />} />
```

---

## 5. 测试方案

### 5.1 单元测试

| 测试文件 | 测试内容 | 测试用例数 |
|----------|----------|------------|
| LandingPage.test.tsx | 按钮跳转功能 | 4 |
| BrowserWindowAnimation.test.tsx | 演示内容切换 | 3 |
| AITools.test.tsx | 工具列表和筛选 | 5 |
| Blog.test.tsx | 文章列表显示 | 3 |
| SupportCenter.test.tsx | FAQ 和联系方式 | 3 |

**新增测试用例详情**：

```typescript
// LandingPage.test.tsx
describe('CTA Buttons', () => {
  it('should navigate to guides when clicking Get Certified Today', async () => {
    render(<LandingPage />);
    const button = screen.getByText('Get Certified Today');
    await userEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard/guides');
  });

  it('should navigate to challenges when clicking Join Now', async () => {
    render(<LandingPage />);
    const button = screen.getByText('Join Now');
    await userEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard/challenges');
  });
});

// AITools.test.tsx
describe('AI Tools Page', () => {
  it('should display main tool cards', () => {
    render(<AITools />);
    expect(screen.getByText('AI Assistant')).toBeInTheDocument();
    expect(screen.getByText('ChatGPT Classic')).toBeInTheDocument();
  });

  it('should filter tools by category', async () => {
    render(<AITools />);
    const categoryButton = screen.getByText('Content Creation');
    await userEvent.click(categoryButton);
    expect(screen.getByText('EmailEngine')).toBeInTheDocument();
  });
});
```

### 5.2 E2E 测试

| 测试场景 | 描述 | 验收标准 |
|----------|------|----------|
| IT15-01 | Get Certified Today 按钮跳转 | 点击后跳转到 /dashboard/guides |
| IT15-02 | Join Now 按钮跳转 | 点击后跳转到 /dashboard/challenges |
| IT15-03 | Blog 链接跳转 | 点击后跳转到 /blog |
| IT15-04 | Support Center 链接跳转 | 点击后跳转到 /support |
| IT15-05 | 浏览器窗口演示内容 | 显示真实 AI 生成内容 |
| IT15-06 | 演示场景自动切换 | 每 8 秒切换一次 |
| IT15-07 | AI Tools 主要工具卡片 | 显示 4 个主要工具 |
| IT15-08 | AI Tools 分类筛选 | 点击分类标签筛选工具 |
| IT15-09 | Blog 文章列表 | 显示 3-5 篇文章 |
| IT15-10 | Support Center FAQ | 显示 FAQ 列表 |

### 5.3 回归测试

确保本次迭代不影响现有功能：

| 功能模块 | 测试内容 |
|----------|----------|
| Quiz 流程 | 完整走一遍 22 步 Quiz |
| 课程学习 | 阅读课程内容、完成 Quiz |
| 挑战系统 | 查看挑战详情、完成任务 |
| 深色模式 | 切换主题、验证所有页面 |
| 登录/登出 | Demo 登录功能正常 |

---

## 6. 实施计划

### 6.1 时间表

| 阶段 | 任务 | 预计时间 | 依赖 |
|------|------|----------|------|
| 1 | 修复无响应按钮 | 30 分钟 | 无 |
| 2 | 创建 Blog 页面 | 30 分钟 | 阶段 1 |
| 3 | 创建 Support Center 页面 | 30 分钟 | 阶段 1 |
| 4 | 增强浏览器窗口演示 | 1 小时 | 无 |
| 5 | 完善 AI Tools 页面 | 1.5 小时 | 无 |
| 6 | 添加 AI Mastery 总览卡片 | 30 分钟 | 无 |
| 7 | 编写单元测试 | 45 分钟 | 阶段 1-6 |
| 8 | E2E 测试验证 | 30 分钟 | 阶段 7 |
| 9 | 回归测试 | 30 分钟 | 阶段 8 |

**总预计时间**：6 小时

### 6.2 里程碑

| 里程碑 | 完成标准 | 预计完成时间 |
|--------|----------|--------------|
| M1 | 所有按钮可点击跳转 | +1 小时 |
| M2 | Blog 和 Support 页面可访问 | +1.5 小时 |
| M3 | 浏览器窗口演示完成 | +2.5 小时 |
| M4 | AI Tools 页面完成 | +4 小时 |
| M5 | 所有测试通过 | +5.5 小时 |
| M6 | 回归测试通过，保存检查点 | +6 小时 |

---

## 7. 风险评估

| 风险 | 可能性 | 影响 | 缓解措施 |
|------|--------|------|----------|
| 演示图片资源缺失 | 中 | 中 | 使用占位图或 Emoji |
| AI Tools 数据量大 | 低 | 低 | 先实现核心功能，后续迭代完善 |
| 测试覆盖不完整 | 低 | 中 | 优先覆盖高优先级功能 |
| 深色模式样式问题 | 中 | 低 | 每个组件单独验证 |

---

## 8. 验收清单

### 8.1 功能验收

- [ ] Get Certified Today 按钮可点击跳转
- [ ] Join Now 按钮可点击跳转
- [ ] Blog 链接可点击跳转
- [ ] Support Center 链接可点击跳转
- [ ] 浏览器窗口显示真实 AI 内容
- [ ] 演示场景自动切换
- [ ] AI Tools 页面显示工具卡片
- [ ] AI Tools 分类筛选功能正常
- [ ] Blog 页面显示文章列表
- [ ] Support Center 显示 FAQ

### 8.2 测试验收

- [ ] 所有单元测试通过（预计 65+ 个）
- [ ] 所有 E2E 测试通过（预计 45+ 个）
- [ ] 回归测试无问题
- [ ] 深色模式验证通过

### 8.3 文档验收

- [ ] 代码注释完整
- [ ] README 更新
- [ ] 测试报告生成

---

## 9. 附录

### 9.1 参考资料

- Coursiv 原站：https://coursiv.io
- 项目仓库：ZHouliRic/UHWeb
- 设计规范：DELIVERY_SPEC.md

### 9.2 相关文档

- COURSIV_ELEMENTS_ANALYSIS.md - 原站元素分析
- CURRENT_VS_ORIGINAL_DIFF.md - 差异对比
- MOCK_COURSE_IMPLEMENTATION_REPORT.md - Mock 课程实现报告

---

**文档结束**

请确认以上需求和实施方案，确认后我将开始实施。
