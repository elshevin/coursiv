# Coursiv 项目最终迭代需求文档 V2

**更新日期**: 2026-01-12
**版本**: V2 (整合 E2E 测试结果)
**状态**: 待确认

---

## 一、需求范围确认

根据用户要求，本次迭代**不包含**以下功能：
- ❌ AI Tools 完整实现（用 "Coming Soon" 代替）
- ❌ 音频播放功能（不做）
- ❌ Blog 完整实现（用 "Coming Soon" 代替）

**本次迭代重点**：
- ✅ 注册前引导流程（Quiz）与原站逻辑完全一致
- ✅ 注册后跳转逻辑 Bug 修复
- ✅ 课程蛇形路径交互问题修复
- ✅ 所有 "建设中" 改为 "Coming Soon"

---

## 二、E2E 测试发现的问题

### 2.1 Quiz 引导流程差异（P0 - 必须修复）

| 差异项 | 原站 Coursiv | 本地站 | 状态 |
|--------|-------------|--------|------|
| **标题** | "28-DAY AI CHALLENGE" | 无 | ❌ 需添加 |
| **第一步问题** | "How would you describe yourself?" | "Who are you?" | ❌ 需修改 |
| **第一步选项数** | 2 个（带真人照片） | 5 个（带 Emoji） | ❌ 需修改 |
| **第一步选项内容** | "I work for a company" / "I work for myself" | 5 个职业选项 | ❌ 需修改 |
| **总步骤数** | 20 步 | 22 步 | ❌ 需调整 |
| **进度显示** | "X / 20" 右上角 | "Step X of 22" 中间 | ❌ 需修改 |
| **底部法律链接** | 有（Terms, Privacy） | 无 | ❌ 需添加 |
| **中间鼓励页** | 有（"Worry no more!"） | 无 | ❌ 需添加 |

### 2.2 注册后跳转逻辑 Bug（P0 - 必须修复）

| Bug | 描述 | 影响 |
|-----|------|------|
| **重复进入引导** | 用户完成注册后，有时会再次跳转到 Quiz 流程 | 用户体验差 |
| **状态未保存** | 引导完成状态可能未正确持久化 | 重复引导 |

### 2.3 课程蛇形路径交互问题（P1 - 建议修复）

| 问题 | 描述 | 优先级 |
|------|------|--------|
| **锁定模块点击无反馈** | 点击锁定的模块没有任何提示 | P1 |
| **Continue 按钮被遮挡** | 被 Preview mode 提示条遮挡 | P0 |
| **缺少 "You're here" 标签** | 当前学习位置不明显 | P2 |

### 2.4 其他问题

| 问题 | 位置 | 优先级 |
|------|------|--------|
| 课程 ID 不匹配 | Dashboard (`dalle` vs `dall-e`) | P0 |
| "Get Certified Today" 无响应 | 主页 | P0 |
| "Join Now" 无响应 | 主页 Challenge 部分 | P0 |
| Blog 链接无效 | 导航栏 | P0 |
| Support Center 链接无效 | 导航栏 | P0 |

---

## 三、功能迭代方案

### Phase 1: Quiz 引导流程重构（2 小时）

#### 1.1 修改第一步为二选一

**当前**：5 个选项（Employee, Freelancer, Student, Business Owner, Other）

**目标**：2 个选项，带真人照片
- "I work for a company" （带职场人士照片）
- "I work for myself" （带自由职业者照片）

**文件**：`client/src/components/QuizContent.tsx`

```tsx
// Step 1: 身份选择
const identityOptions = [
  {
    id: 'employee',
    label: 'I work for a company',
    image: '/images/quiz/employee.jpg', // 需要添加图片
    description: 'Employee, manager, or corporate professional'
  },
  {
    id: 'self-employed',
    label: 'I work for myself',
    image: '/images/quiz/self-employed.jpg', // 需要添加图片
    description: 'Freelancer, entrepreneur, or business owner'
  }
];
```

#### 1.2 添加 "28-DAY AI CHALLENGE" 标题

```tsx
<div className="text-center mb-8">
  <span className="text-purple-600 font-bold text-lg">
    28-DAY AI CHALLENGE
  </span>
</div>
```

#### 1.3 调整进度显示位置

```tsx
// 从中间移到右上角
<div className="absolute top-4 right-4 text-sm text-gray-500">
  {currentStep} / 20
</div>
```

#### 1.4 添加底部法律链接

```tsx
<div className="fixed bottom-4 left-0 right-0 text-center text-xs text-gray-400">
  By continuing, you agree to our{' '}
  <a href="/terms" className="underline">Terms of Service</a>
  {' '}and{' '}
  <a href="/privacy" className="underline">Privacy Policy</a>
</div>
```

#### 1.5 添加中间鼓励页面

在适当位置（如第 5-6 步之间）添加：

```tsx
// 鼓励页面组件
const EncouragementPage = () => (
  <div className="text-center py-12">
    <div className="text-6xl mb-4">🎉</div>
    <h2 className="text-3xl font-bold mb-4">Worry no more!</h2>
    <p className="text-gray-600 mb-8">
      You're on the right track. Let's continue to personalize your learning experience.
    </p>
    <button onClick={handleContinue} className="...">
      CONTINUE
    </button>
  </div>
);
```

#### 1.6 调整问题顺序和数量

将 22 步调整为 20 步，与原站一致：

| 步骤 | 问题 |
|------|------|
| 0 | 身份选择（二选一） |
| 0.5 | 社交证明页 |
| 1/20 | 年龄 |
| 2/20 | 主要目标 |
| 3/20 | AI 困惑程度 |
| 4/20 | AI 工具舒适度 |
| 5/20 | 落后恐惧 |
| 5.5 | 鼓励页 "Worry no more!" |
| 6/20 | 学习难度认知 |
| ... | 继续其他问题 |

---

### Phase 2: 注册后跳转逻辑修复（1 小时）

#### 2.1 问题分析

**可能原因**：
1. `hasCompletedOnboarding` 状态未正确保存到数据库
2. 页面刷新后状态丢失
3. 路由守卫逻辑有漏洞

#### 2.2 修复方案

**文件**：`client/src/hooks/useEmailAuth.ts` 或相关认证逻辑

```typescript
// 确保完成引导后正确保存状态
const completeOnboarding = async () => {
  try {
    await api.post('/users/complete-onboarding');
    setUser({ ...user, hasCompletedOnboarding: true });
    // 强制跳转到 Dashboard
    navigate('/dashboard/guides');
  } catch (error) {
    console.error('Failed to complete onboarding:', error);
  }
};
```

**文件**：`client/src/App.tsx` 或路由配置

```typescript
// 路由守卫：已完成引导的用户不再进入 Quiz
const ProtectedRoute = ({ children }) => {
  const { user } = useEmailAuth();
  
  if (user?.hasCompletedOnboarding && location.pathname.startsWith('/quiz')) {
    return <Navigate to="/dashboard/guides" replace />;
  }
  
  return children;
};
```

---

### Phase 3: 课程交互问题修复（1.5 小时）

#### 3.1 修复课程 ID 不匹配

**文件**：`client/src/pages/Dashboard.tsx`

```typescript
// 第 229 行左右
const courses = [
  { id: 'chatgpt', ... },
  { id: 'dall-e', ... },  // 修复：dalle → dall-e
  { id: 'midjourney', ... },
  { id: 'claude', ... },
  { id: 'copilot', ... },
  { id: 'gemini', ... },
];
```

#### 3.2 锁定模块点击提示

**文件**：`client/src/pages/CourseDetail.tsx`

```tsx
const handleModuleClick = (module, isLocked) => {
  if (isLocked) {
    // 显示提示
    toast.info('Complete previous modules to unlock this lesson');
    return;
  }
  setSelectedModule(module);
};
```

#### 3.3 修复 Continue 按钮被遮挡

**文件**：`client/src/pages/LessonContent.tsx`

```tsx
// 增加底部 padding 避免被遮挡
<div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 pb-20">
  {/* 或者调整 z-index */}
  <button className="... z-50">Continue</button>
</div>
```

#### 3.4 添加 "You're here" 标签

**文件**：`client/src/pages/CourseDetail.tsx`

```tsx
{isCurrentModule && (
  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
      You're here
    </div>
    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600 mx-auto" />
  </div>
)}
```

---

### Phase 4: 按钮和链接修复（30 分钟）

#### 4.1 修复 "Get Certified Today" 按钮

**文件**：`client/src/pages/LandingPage.jsx`

```jsx
<Link href="/quiz/1">
  <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
    Get Certified Today
  </button>
</Link>
```

#### 4.2 修复 "Join Now" 按钮

```jsx
<Link href="/dashboard/challenges">
  <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
    Join Now
  </button>
</Link>
```

#### 4.3 修复导航链接

**文件**：`client/src/components/Navbar.tsx`

```tsx
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },           // 修复
  { href: '/support', label: 'Support Center' }, // 修复
];
```

---

### Phase 5: "Coming Soon" 页面（30 分钟）

#### 5.1 通用 Coming Soon 组件

**新建文件**：`client/src/components/ComingSoon.tsx`

```tsx
interface ComingSoonProps {
  title: string;
  description?: string;
  icon?: string;
}

export default function ComingSoon({ title, description, icon = '🚧' }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="text-6xl mb-6">{icon}</div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {description || 'This feature is coming soon. Stay tuned!'}
        </p>
        <Link href="/">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
```

#### 5.2 Blog 页面

**新建文件**：`client/src/pages/Blog.tsx`

```tsx
import ComingSoon from '../components/ComingSoon';

export default function Blog() {
  return (
    <ComingSoon 
      title="Blog"
      description="AI learning tips, tutorials, and insights are coming soon!"
      icon="📝"
    />
  );
}
```

#### 5.3 Support 页面

**新建文件**：`client/src/pages/Support.tsx`

```tsx
import ComingSoon from '../components/ComingSoon';

export default function Support() {
  return (
    <ComingSoon 
      title="Support Center"
      description="Our help center is being prepared. For now, contact us at support@coursiv.com"
      icon="💬"
    />
  );
}
```

#### 5.4 替换所有 "建设中" 为 "Coming Soon"

搜索并替换所有中文 "建设中" 为英文 "Coming Soon"。

---

## 四、测试方案

### 4.1 Quiz 流程测试

| 测试用例 | 预期结果 |
|----------|----------|
| 第一步显示二选一 | 显示 2 个带图片的选项 |
| 第一步问题文本 | "How would you describe yourself?" |
| 进度显示位置 | 右上角 "X / 20" |
| 标题显示 | "28-DAY AI CHALLENGE" |
| 底部法律链接 | 显示 Terms 和 Privacy 链接 |
| 鼓励页出现 | 在第 5-6 步之间显示 |
| 总步骤数 | 20 步 |

### 4.2 注册后跳转测试

| 测试用例 | 预期结果 |
|----------|----------|
| 新用户完成注册 | 跳转到 Dashboard |
| 已注册用户访问 /quiz | 重定向到 Dashboard |
| 刷新页面后 | 保持在 Dashboard |

### 4.3 课程交互测试

| 测试用例 | 预期结果 |
|----------|----------|
| 点击已完成模块 | 弹出详情弹窗 |
| 点击当前模块 | 弹出详情弹窗 |
| 点击锁定模块 | 显示提示信息 |
| Continue 按钮 | 正常翻页 |
| DALL-E 课程访问 | 正常显示课程 |

### 4.4 按钮响应测试

| 测试用例 | 预期结果 |
|----------|----------|
| "Get Certified Today" | 跳转到 /quiz/1 |
| "Join Now" | 跳转到 /dashboard/challenges |
| Blog 链接 | 跳转到 /blog |
| Support 链接 | 跳转到 /support |

---

## 五、实施时间表

| 阶段 | 任务 | 预计时间 |
|------|------|----------|
| Phase 1 | Quiz 引导流程重构 | 2 小时 |
| Phase 2 | 注册后跳转逻辑修复 | 1 小时 |
| Phase 3 | 课程交互问题修复 | 1.5 小时 |
| Phase 4 | 按钮和链接修复 | 30 分钟 |
| Phase 5 | Coming Soon 页面 | 30 分钟 |
| Phase 6 | 测试编写和验证 | 1 小时 |
| **总计** | | **6.5 小时** |

---

## 六、确认清单

请确认以下内容后开始实施：

### 功能确认
- [ ] Quiz 第一步改为二选一（带真人照片）
- [ ] 添加 "28-DAY AI CHALLENGE" 标题
- [ ] 调整进度显示到右上角
- [ ] 添加底部法律链接
- [ ] 添加中间鼓励页面
- [ ] 调整总步骤为 20 步
- [ ] 修复注册后跳转 Bug
- [ ] 修复课程 ID 不匹配
- [ ] 修复按钮无响应问题
- [ ] 创建 Coming Soon 页面
- [ ] 替换 "建设中" 为 "Coming Soon"

### 不包含的功能
- [ ] 确认 AI Tools 用 Coming Soon 代替
- [ ] 确认音频播放不做
- [ ] 确认 Blog 用 Coming Soon 代替

### 其他
- [ ] 6.5 小时时间预算可接受
- [ ] 测试方案可接受

---

**请确认后，我将立即开始实施。**
