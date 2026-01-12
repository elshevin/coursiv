# Coursiv 项目总迭代需求文档

## 文档信息
- **版本**：V1.0 (整合版)
- **日期**：2026-01-12
- **状态**：待确认
- **整合来源**：IMPROVEMENT_PLAN.md, PAGE_LOGIC_ANALYSIS.md, CURRENT_VS_ORIGINAL_DIFF.md, ITERATION_REQUIREMENTS_V16.md

---

## 一、项目当前状态总览

### 1.1 已实现功能完成度

| 模块 | 完成度 | 说明 |
|------|--------|------|
| 主页 Landing Page | 95% | 浏览器窗口动画已实现，部分按钮需修复 |
| Quiz 流程 | 95% | 完整的 22 步问卷，功能正常 |
| Dashboard | 85% | 多 Tab 布局，课程/挑战/AI Tools |
| 课程列表 (Guides) | 85% | 6 个课程卡片，缺少 AI Mastery 总览 |
| 课程详情页 | 80% | 蛇形学习路径，缺少 "You're here" 标签 |
| 课程内容页 | 90% | Mock 内容已生成，格式可增强 |
| AI Tools 页面 | 20% | 显示 "Coming Soon"，需完整实现 |
| Challenge 页面 | 80% | 28 天挑战功能基本完成 |
| Blog 页面 | 0% | 未实现 |
| Support Center | 0% | 未实现 |

### 1.2 测试覆盖情况

| 测试类型 | 数量 | 状态 |
|----------|------|------|
| 单元测试 (Vitest) | 47 | ✅ 通过 |
| E2E 测试 | 35 | ✅ 通过 |
| 跳过的测试 | 1 | ⚠️ |

---

## 二、问题清单与优先级

### 2.1 P0 - 阻塞性问题（必须立即修复）

| # | 问题 | 位置 | 影响 | 预计时间 |
|---|------|------|------|----------|
| 1 | 课程 ID 不匹配 | Dashboard.tsx | DALL-E 课程从 Dashboard 无法访问 | 5 分钟 |
| 2 | "Get Certified Today" 按钮无响应 | LandingPage.jsx | 用户无法通过此入口进入 Quiz | 5 分钟 |
| 3 | "Join Now" 按钮无响应 | LandingPage.jsx | 用户无法参与 Challenge | 5 分钟 |
| 4 | Blog 导航链接无效 | Navbar.tsx | 导航栏功能不完整 | 5 分钟 |
| 5 | Support Center 链接无效 | Navbar.tsx | 导航栏功能不完整 | 5 分钟 |

**P0 总计：25 分钟**

### 2.2 P1 - 功能缺失（高优先级）

| # | 问题 | 描述 | 原站对比 | 预计时间 |
|---|------|------|----------|----------|
| 1 | AI Tools 页面不完整 | 显示 "Coming Soon" | 原站有完整工具列表和分类筛选 | 2 小时 |
| 2 | Blog 页面缺失 | 无页面 | 原站有博客文章列表 | 1 小时 |
| 3 | Support Center 缺失 | 无页面 | 原站有帮助中心 | 1 小时 |
| 4 | AI Mastery 总览卡片 | Guides 页面顶部缺失 | 原站有 "Resume path" 卡片 | 30 分钟 |
| 5 | 浏览器窗口演示内容 | 显示骨架屏 | 原站显示真实 AI 生成内容 | 45 分钟 |
| 6 | "You're here" 标签 | 学习路径缺少当前位置标记 | 原站有明确标记 | 20 分钟 |

**P1 总计：5.5 小时**

### 2.3 P2 - 体验优化（中优先级）

| # | 问题 | 描述 | 预计时间 |
|---|------|------|----------|
| 1 | Emoji 图标 | 使用 Emoji 而非真实 AI 工具 Logo | 45 分钟 |
| 2 | 课程内容格式 | 缺少代码块、表格、列表等丰富格式 | 1 小时 |
| 3 | 蛇形路径连接线 | 缺少 SVG 曲线连接动画 | 45 分钟 |
| 4 | 按钮点击反馈 | 缺少 active/press 效果 | 20 分钟 |

**P2 总计：2.8 小时**

### 2.4 P3 - 可选增强（低优先级）

| # | 问题 | 描述 | 预计时间 |
|---|------|------|----------|
| 1 | 页面切换动画 | 淡入淡出效果 | 30 分钟 |
| 2 | 音频播放功能 | TTS 集成 | 2 小时 |
| 3 | 响应式设计验证 | 移动端/平板完整测试 | 1 小时 |
| 4 | 深色模式完整性 | 所有组件深色模式验证 | 30 分钟 |

**P3 总计：4 小时**

---

## 三、功能迭代方案

### Phase 1: P0 问题修复（25 分钟）

#### 1.1 修复课程 ID 不匹配
**文件**：`client/src/pages/Dashboard.tsx`

```typescript
// 修改第 229 行
{ id: 'dalle', ... }  →  { id: 'dall-e', ... }
```

#### 1.2 修复无响应按钮
**文件**：`client/src/pages/LandingPage.jsx`

```jsx
// "Get Certified Today" 按钮（约第 850 行）
<Link href="/quiz/1">
  <Button className="...">Get Certified Today</Button>
</Link>

// "Join Now" 按钮（约第 920 行）
<Link href="/dashboard/challenges">
  <Button className="...">Join Now</Button>
</Link>
```

#### 1.3 修复导航链接
**文件**：`client/src/components/Navbar.tsx`

```typescript
// Blog 链接
href="#" → href="/blog"

// Support Center 链接
href="#" → href="/support"
```

---

### Phase 2: 页面创建（2 小时）

#### 2.1 Blog 页面（占位符）
**新建文件**：`client/src/pages/Blog.tsx`

```tsx
export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Coming soon! Stay tuned for AI learning tips and insights.
        </p>
        {/* 可选：添加预览文章卡片 */}
      </div>
    </div>
  );
}
```

#### 2.2 Support Center 页面（占位符）
**新建文件**：`client/src/pages/Support.tsx`

```tsx
export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Support Center</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Need help? We're here for you.
        </p>
        {/* FAQ 列表 */}
        {/* 联系方式 */}
      </div>
    </div>
  );
}
```

#### 2.3 添加路由
**文件**：`client/src/App.tsx`

```tsx
import Blog from './pages/Blog';
import Support from './pages/Support';

// 在路由配置中添加
<Route path="/blog" component={Blog} />
<Route path="/support" component={Support} />
```

---

### Phase 3: AI Tools 页面完善（2 小时）

#### 3.1 页面结构
```
┌─────────────────────────────────────────────────┐
│ Get Help with Any task                          │
├─────────────────────────────────────────────────┤
│ [AI Assistant] [ChatGPT] [Business] [Image Gen] │
├─────────────────────────────────────────────────┤
│ Explore other tools                    View All │
├─────────────────────────────────────────────────┤
│ [For You] [Content] [Image] [Ideas] [Marketing] │
├─────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ │Tool 1   │ │Tool 2   │ │Tool 3   │ │Tool 4   │ │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘ │
└─────────────────────────────────────────────────┘
```

#### 3.2 数据模型
```typescript
interface AITool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string[];
  featured: boolean;
}

const aiTools: AITool[] = [
  { id: 'ai-assistant', name: 'AI Assistant', description: 'Your personal AI-powered helper', icon: '🤖', category: ['For You'], featured: true },
  { id: 'chatgpt-classic', name: 'ChatGPT Classic', description: 'The latest version of GPT-4', icon: '💬', category: ['Content Creation'], featured: true },
  { id: 'business-coach', name: 'Business coach', description: 'Get expert business advice', icon: '💼', category: ['Ideas'], featured: true },
  { id: 'image-gen', name: 'Image Gen', description: 'Generate stunning images with AI', icon: '🎨', category: ['Image Generation'], featured: true },
  // ... 更多工具
];
```

---

### Phase 4: Guides 页面增强（30 分钟）

#### 4.1 AI Mastery 总览卡片
在 Guides 页面顶部添加：

```tsx
<div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 mb-8 text-white">
  <div className="flex items-center gap-2 mb-2">
    <span>🎯</span>
    <span className="font-semibold">AI Mastery</span>
    <span className="bg-white/20 px-2 py-0.5 rounded text-sm">28 modules</span>
  </div>
  <p className="text-white/80 mb-4">
    Step-by-step program to guide you from beginner to expert in using various AI tools
  </p>
  <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium">
    Resume path
  </button>
</div>
```

#### 4.2 "You're here" 标签
```tsx
{isCurrentModule && (
  <div className="absolute -top-6 left-1/2 -translate-x-1/2 
                  bg-white px-2 py-1 rounded shadow text-xs font-medium">
    You're here
  </div>
)}
```

---

### Phase 5: 浏览器窗口演示增强（45 分钟）

#### 5.1 真实内容展示
替换骨架屏为真实 AI 生成内容示例：

```tsx
const demoContent = [
  {
    title: "Social Media Post for New Fitness App Launch",
    image: "/demo/fitness-app.jpg",
    content: "Say hello to your new fitness companion - FitPulse! Whether you're a fitness newbie or a seasoned athlete, FitPulse is here to help you crush your goals."
  },
  {
    title: "Email Campaign for Product Launch",
    image: "/demo/email-campaign.jpg",
    content: "Subject: Introducing the Future of Productivity\n\nDear valued customer,\n\nWe're excited to announce..."
  },
  // 更多演示内容
];
```

#### 5.2 多场景轮播
```tsx
const [currentDemo, setCurrentDemo] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentDemo((prev) => (prev + 1) % demoContent.length);
  }, 8000);
  return () => clearInterval(interval);
}, []);
```

---

## 四、测试方案

### 4.1 新增单元测试

| 测试文件 | 测试用例 | 预期结果 |
|----------|----------|----------|
| ButtonLinks.test.tsx | "Get Certified Today" 点击 | 跳转到 /quiz/1 |
| ButtonLinks.test.tsx | "Join Now" 点击 | 跳转到 /dashboard/challenges |
| CourseNavigation.test.tsx | DALL-E 课程卡片点击 | 跳转到 /course/dall-e |
| AITools.test.tsx | AI Tools 页面渲染 | 显示工具列表 |
| AITools.test.tsx | 分类筛选功能 | 正确过滤工具 |
| Blog.test.tsx | Blog 页面渲染 | 显示页面内容 |
| Support.test.tsx | Support 页面渲染 | 显示页面内容 |
| Navbar.test.tsx | Blog 链接 | href="/blog" |
| Navbar.test.tsx | Support 链接 | href="/support" |

### 4.2 E2E 测试场景

| 场景 | 步骤 | 预期结果 |
|------|------|----------|
| 完整课程流程 | 主页 → Quiz → Dashboard → 课程 → 内容 | 全流程无阻塞 |
| 导航测试 | 点击所有导航链接 | 所有链接可用 |
| 按钮响应测试 | 点击所有 CTA 按钮 | 所有按钮有响应 |
| 课程内容测试 | 访问所有课程的第一个模块 | 内容正常显示 |
| AI Tools 测试 | 访问 AI Tools 页面并筛选 | 功能正常 |

### 4.3 验收标准

#### 功能验收
- [ ] 所有 CTA 按钮可点击且有正确响应
- [ ] 所有导航链接可用
- [ ] 所有课程可访问且内容完整
- [ ] AI Tools 页面显示工具列表
- [ ] Blog 和 Support 页面可访问

#### 测试验收
- [ ] 所有单元测试通过（目标：55+ 测试用例）
- [ ] 所有 E2E 测试通过
- [ ] 无 TypeScript 编译错误
- [ ] 无控制台错误

#### 视觉验收
- [ ] 与原站 Coursiv.io 视觉一致性 > 85%
- [ ] 响应式设计在移动端正常
- [ ] 深色模式正常工作

---

## 五、实施时间表

### 推荐实施顺序

| 阶段 | 任务 | 预计时间 | 优先级 |
|------|------|----------|--------|
| **Phase 1** | P0 问题修复（ID、按钮、链接） | 25 分钟 | 🔴 必须 |
| **Phase 2** | Blog + Support 占位符页面 | 30 分钟 | 🔴 必须 |
| **Phase 3** | AI Tools 页面完善 | 2 小时 | 🟡 高 |
| **Phase 4** | Guides 页面增强 | 30 分钟 | 🟡 高 |
| **Phase 5** | 浏览器窗口演示增强 | 45 分钟 | 🟡 高 |
| **Phase 6** | 单元测试编写 | 45 分钟 | 🔴 必须 |
| **Phase 7** | E2E 测试验证 | 30 分钟 | 🔴 必须 |

### 时间汇总

| 优先级 | 任务 | 时间 |
|--------|------|------|
| P0 (必须) | 问题修复 + 占位符 + 测试 | 2 小时 |
| P1 (高) | AI Tools + Guides + 演示 | 3.5 小时 |
| P2 (中) | 视觉优化 | 2.8 小时 |
| P3 (低) | 可选增强 | 4 小时 |

**建议实施范围**：
- **最小可行版本 (MVP)**：Phase 1-2 + 测试 = **2 小时**
- **推荐版本**：Phase 1-6 = **5.5 小时**
- **完整版本**：所有 Phase = **12 小时**

---

## 六、风险与依赖

### 风险评估

| 风险 | 影响 | 概率 | 缓解措施 |
|------|------|------|----------|
| AI 工具 Logo 版权 | 可能无法使用官方 Logo | 中 | 使用通用图标或 Emoji |
| Mock 内容质量 | 内容可能不够专业 | 低 | 后续可替换为真实内容 |
| 测试覆盖不足 | 可能遗漏边界情况 | 中 | 增加测试用例 |

### 依赖关系

- 无外部 API 依赖
- 无第三方服务依赖
- 所有功能可离线开发

---

## 七、确认清单

请确认以下内容后开始实施：

### 实施范围确认
- [ ] **MVP 版本**（2 小时）：仅修复 P0 问题 + 占位符页面
- [ ] **推荐版本**（5.5 小时）：P0 + P1 全部功能
- [ ] **完整版本**（12 小时）：所有功能

### 功能优先级确认
- [ ] 同意 P0 问题最优先修复
- [ ] AI Tools 页面需要完整实现 / 占位符即可
- [ ] 需要使用真实 AI 工具 Logo / Emoji 即可
- [ ] 浏览器窗口演示需要真实内容 / 骨架屏即可

### 其他确认
- [ ] 时间预算可接受
- [ ] 测试方案可接受
- [ ] 有其他需要添加的需求

---

**请确认后，我将立即开始实施。**
