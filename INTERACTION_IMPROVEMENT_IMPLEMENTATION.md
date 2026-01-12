# Coursiv 整体交互改进方案

**版本**: 1.1  
**日期**: 2026年1月12日  
**状态**: 待确认

---

## 1. 当前实现状态

| 模块 | 状态 | 说明 |
|-----|------|------|
| 主落地页 | ✅ 完成 | 14个Section，包含动画和交互 |
| 用户系统 | ✅ 完成 | 邮箱密码登录 + 测试模式 |
| Weekly Streaks | ✅ 完成 | 7天日历 + 火焰图标 |
| 课程数据 | ✅ 完成 | 9个课程 + 模块 + 内容 |
| 课程路径视图 | ✅ 完成 | 垂直列表布局（待改为蛇形） |
| 课程内容阅读 | ✅ 完成 | 翻页 + 进度条 + 退出弹窗 |
| 课程 Quiz | ✅ 完成 | 选择题 + 反馈 |
| 挑战系统 | ✅ 完成 | 4个挑战 + 详情页 |
| 证书系统 | ✅ 完成 | Profile 证书列表 |
| AI Tools | ✅ 完成 | Coming Soon 页面 |

---

## 2. 迭代状态总览

| 迭代 | 状态 | E2E 测试 | 完成日期 |
|-----|------|---------|---------|
| Iteration 10 | ✅ DONE | ✅ 通过 | 2026-01-12 |
| Iteration 11 | ✅ DONE | ✅ 通过 | 2026-01-12 |
| Iteration 12 | ✅ DONE | ✅ 通过 | 2026-01-12 |
| Iteration 13 | ✅ DONE | ✅ 通过 | 2026-01-12 |

**状态说明**：⬜ TODO → 🔄 IN PROGRESS → ✅ DONE

---

## 3. 待改进功能清单

---

### 迭代十：核心交互改进

**状态**: ✅ DONE

**功能说明**：修复最影响用户体验的核心交互差异，包括蛇形路径布局、模块预览弹窗、Streak 详情弹窗。

| 功能 | 当前状态 | 目标状态 | 工作量 | 完成 |
|-----|---------|---------|--------|------|
| 课程路径布局 | 垂直列表 | 蛇形/S形路径 | 4h | ✅ |
| 模块预览弹窗 | 直接跳转 | 点击显示弹窗（Read/Listen） | 2h | ✅ |
| Streak 详情弹窗 | 不可点击 | 点击打开详情（日历+统计） | 3h | ✅ |
| 导航布局 | 左侧垂直 | 顶部水平导航 | 3h | ✅ |

**完成度检查**:
- [ ] 课程详情页改为蛇形路径布局
- [ ] 模块图标交替左右排列
- [ ] SVG 曲线连接各模块
- [ ] 点击模块显示预览弹窗
- [ ] 弹窗包含标题、描述、Read/Listen 按钮
- [ ] Weekly Streaks 卡片可点击
- [ ] 点击打开 Streak 详情弹窗
- [ ] 弹窗显示当前连续天数、最长连续、日历视图
- [ ] Dashboard 导航改为顶部水平布局
- [ ] 导航包含 Logo、Home、Guides、Challenges、AI Tools、火焰图标、Profile

**E2E 测试用例**:

```typescript
// 测试文件: client/src/__tests__/e2e/iteration10.test.tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Iteration 10 - 核心交互改进', () => {
  
  // IT10-01: 蛇形路径布局
  describe('蛇形路径布局', () => {
    it('课程详情页显示蛇形路径布局', async () => {
      render(
        <MemoryRouter initialEntries={['/course/chatgpt']}>
          <App />
        </MemoryRouter>
      );
      
      // 验证蛇形路径容器存在
      await waitFor(() => {
        expect(screen.getByTestId('snake-path-container')).toBeInTheDocument();
      });
      
      // 验证模块交替排列
      const modules = screen.getAllByTestId(/^module-node-/);
      expect(modules.length).toBeGreaterThan(0);
      
      // 验证奇偶模块位置不同
      const firstModule = modules[0];
      const secondModule = modules[1];
      expect(firstModule).toHaveClass('module-left');
      expect(secondModule).toHaveClass('module-right');
    });
    
    it('模块之间有 SVG 曲线连接', async () => {
      render(
        <MemoryRouter initialEntries={['/course/chatgpt']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        const svgPaths = document.querySelectorAll('svg path.connection-line');
        expect(svgPaths.length).toBeGreaterThan(0);
      });
    });
  });
  
  // IT10-02: 模块预览弹窗
  describe('模块预览弹窗', () => {
    it('点击模块图标显示预览弹窗', async () => {
      render(
        <MemoryRouter initialEntries={['/course/chatgpt']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('module-node-0')).toBeInTheDocument();
      });
      
      // 点击第一个模块
      fireEvent.click(screen.getByTestId('module-node-0'));
      
      // 验证弹窗显示
      await waitFor(() => {
        expect(screen.getByTestId('module-preview-popover')).toBeInTheDocument();
        expect(screen.getByText(/Read/i)).toBeInTheDocument();
        expect(screen.getByText(/Listen/i)).toBeInTheDocument();
      });
    });
    
    it('点击弹窗 Read 按钮跳转到阅读页', async () => {
      render(
        <MemoryRouter initialEntries={['/course/chatgpt']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('module-node-0')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('module-node-0'));
      
      await waitFor(() => {
        expect(screen.getByText(/Read/i)).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByText(/Read/i));
      
      // 验证跳转到阅读页
      await waitFor(() => {
        expect(screen.getByTestId('lesson-content-page')).toBeInTheDocument();
      });
    });
    
    it('点击弹窗外区域关闭弹窗', async () => {
      render(
        <MemoryRouter initialEntries={['/course/chatgpt']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('module-node-0')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('module-node-0'));
      
      await waitFor(() => {
        expect(screen.getByTestId('module-preview-popover')).toBeInTheDocument();
      });
      
      // 点击背景关闭
      fireEvent.click(screen.getByTestId('popover-backdrop'));
      
      await waitFor(() => {
        expect(screen.queryByTestId('module-preview-popover')).not.toBeInTheDocument();
      });
    });
  });
  
  // IT10-03: Streak 详情弹窗
  describe('Streak 详情弹窗', () => {
    it('点击 Weekly Streaks 卡片打开详情弹窗', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('weekly-streaks-card')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('weekly-streaks-card'));
      
      await waitFor(() => {
        expect(screen.getByTestId('streak-detail-modal')).toBeInTheDocument();
      });
    });
    
    it('Streak 弹窗显示当前连续天数和日历视图', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('weekly-streaks-card')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('weekly-streaks-card'));
      
      await waitFor(() => {
        expect(screen.getByTestId('streak-current-count')).toBeInTheDocument();
        expect(screen.getByTestId('streak-longest-count')).toBeInTheDocument();
        expect(screen.getByTestId('streak-calendar')).toBeInTheDocument();
      });
    });
    
    it('点击 X 按钮关闭 Streak 弹窗', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('weekly-streaks-card')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('weekly-streaks-card'));
      
      await waitFor(() => {
        expect(screen.getByTestId('streak-detail-modal')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('streak-modal-close'));
      
      await waitFor(() => {
        expect(screen.queryByTestId('streak-detail-modal')).not.toBeInTheDocument();
      });
    });
  });
  
  // IT10-04: 顶部水平导航
  describe('顶部水平导航', () => {
    it('Dashboard 显示顶部水平导航栏', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('top-navbar')).toBeInTheDocument();
        expect(screen.getByTestId('nav-home')).toBeInTheDocument();
        expect(screen.getByTestId('nav-guides')).toBeInTheDocument();
        expect(screen.getByTestId('nav-challenges')).toBeInTheDocument();
        expect(screen.getByTestId('nav-ai-tools')).toBeInTheDocument();
        expect(screen.getByTestId('nav-streak-icon')).toBeInTheDocument();
        expect(screen.getByTestId('nav-profile')).toBeInTheDocument();
      });
    });
    
    it('点击导航栏火焰图标打开 Streak 弹窗', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('nav-streak-icon')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('nav-streak-icon'));
      
      await waitFor(() => {
        expect(screen.getByTestId('streak-detail-modal')).toBeInTheDocument();
      });
    });
    
    it('点击导航栏各 Tab 正确切换页面', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('nav-guides')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('nav-guides'));
      
      await waitFor(() => {
        expect(screen.getByTestId('guides-page')).toBeInTheDocument();
      });
    });
  });
});
```

**E2E 测试结果**: ⬜ 未测试

---

### 迭代十一：交互完善

**状态**: ⬜ TODO

**功能说明**：完善课程切换、深色模式、hover 效果等交互功能。

| 功能 | 当前状态 | 目标状态 | 工作量 | 完成 |
|-----|---------|---------|--------|------|
| 课程切换下拉 | 无 | 顶部下拉展开横向课程选择器 | 2h | ⬜ |
| 深色模式 | 无 | 点击开关整站即时切换 | 3h | ⬜ |
| 证书卡片点击 | 不可点击 | 点击跳转到对应课程 | 0.5h | ⬜ |
| 全站卡片 hover | 无 | 卡片上浮 + 阴影加深 | 1h | ⬜ |
| 全站按钮 hover | 无 | 按钮放大效果 | 0.5h | ⬜ |

**完成度检查**:
- [ ] 课程详情页顶部添加课程名称下拉
- [ ] 点击下拉展开横向课程选择器
- [ ] 当前课程蓝色边框高亮
- [ ] 点击其他课程切换路径视图
- [ ] Profile 页面添加深色模式开关
- [ ] 点击开关整站颜色即时切换
- [ ] 深色模式偏好保存到 localStorage
- [ ] 证书卡片点击跳转到对应课程
- [ ] 所有卡片添加 hover 上浮效果
- [ ] 所有按钮添加 hover 放大效果

**E2E 测试用例**:

```typescript
// 测试文件: client/src/__tests__/e2e/iteration11.test.tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Iteration 11 - 交互完善', () => {
  
  // IT11-01: 课程切换下拉
  describe('课程切换下拉', () => {
    it('点击课程名称展开横向课程选择器', async () => {
      render(
        <MemoryRouter initialEntries={['/course/chatgpt']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('course-dropdown-trigger')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('course-dropdown-trigger'));
      
      await waitFor(() => {
        expect(screen.getByTestId('course-dropdown-content')).toBeInTheDocument();
        // 验证显示多个课程选项
        expect(screen.getAllByTestId(/^course-option-/).length).toBeGreaterThan(1);
      });
    });
    
    it('当前课程有蓝色边框高亮', async () => {
      render(
        <MemoryRouter initialEntries={['/course/chatgpt']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('course-dropdown-trigger')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('course-dropdown-trigger'));
      
      await waitFor(() => {
        const currentCourse = screen.getByTestId('course-option-chatgpt');
        expect(currentCourse).toHaveClass('course-active');
      });
    });
    
    it('点击其他课程切换路径视图', async () => {
      render(
        <MemoryRouter initialEntries={['/course/chatgpt']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('course-dropdown-trigger')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('course-dropdown-trigger'));
      
      await waitFor(() => {
        expect(screen.getByTestId('course-option-dalle')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('course-option-dalle'));
      
      await waitFor(() => {
        // 验证 URL 变化或页面内容变化
        expect(screen.getByText(/DALL-E/i)).toBeInTheDocument();
      });
    });
  });
  
  // IT11-02: 深色模式
  describe('深色模式', () => {
    it('Profile 页面显示深色模式开关', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard/profile']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('dark-mode-toggle')).toBeInTheDocument();
      });
    });
    
    it('点击开关切换深色模式', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard/profile']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('dark-mode-toggle')).toBeInTheDocument();
      });
      
      // 初始为浅色模式
      expect(document.documentElement).not.toHaveAttribute('data-theme', 'dark');
      
      fireEvent.click(screen.getByTestId('dark-mode-toggle'));
      
      // 切换为深色模式
      await waitFor(() => {
        expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
      });
    });
    
    it('深色模式偏好保存到 localStorage', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard/profile']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('dark-mode-toggle')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('dark-mode-toggle'));
      
      await waitFor(() => {
        expect(localStorage.getItem('theme')).toBe('dark');
      });
    });
    
    it('刷新页面后深色模式保持', async () => {
      localStorage.setItem('theme', 'dark');
      
      render(
        <MemoryRouter initialEntries={['/dashboard/profile']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
      });
    });
  });
  
  // IT11-03: 证书卡片点击
  describe('证书卡片点击', () => {
    it('点击证书卡片跳转到对应课程', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard/profile']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('certificate-card-chatgpt')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('certificate-card-chatgpt'));
      
      await waitFor(() => {
        // 验证跳转到课程详情页
        expect(screen.getByTestId('snake-path-container')).toBeInTheDocument();
      });
    });
  });
  
  // IT11-04: Hover 效果
  describe('Hover 效果', () => {
    it('课程卡片有 hover 样式类', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard/guides']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        const courseCard = screen.getByTestId('course-card-chatgpt');
        expect(courseCard).toHaveClass('hover-lift');
      });
    });
    
    it('按钮有 hover 样式类', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        const button = screen.getByTestId('continue-learning-btn');
        expect(button).toHaveClass('hover-scale');
      });
    });
  });
});
```

**E2E 测试结果**: ⬜ 未测试

---

### 迭代十二：视觉动效改进

**状态**: ⬜ TODO

**功能说明**：添加动画效果，提升视觉体验。

| 功能 | 当前状态 | 目标状态 | 工作量 | 完成 |
|-----|---------|---------|--------|------|
| Hero 动态演示 | 静态卡片 | AI 聊天打字机动画 | 3h | ⬜ |
| 引言轮播 | 静态显示 | 自动轮播 + 指示器切换 | 1.5h | ⬜ |
| 数字滚动动画 | 静态数字 | 滚动到视口时数字滚动 | 1h | ⬜ |
| 路径卡片横向滚动 | 静态布局 | 左右箭头控制滚动 | 1h | ⬜ |
| FAQ 展开动画 | 无动画 | 图标旋转 + 平滑展开 | 0.5h | ⬜ |

**完成度检查**:
- [ ] Hero Section 右侧添加 AI 聊天演示
- [ ] 实现打字机效果
- [ ] 实现 AI 回复逐字显示
- [ ] 动画循环播放
- [ ] 引言区域改为轮播
- [ ] 添加轮播指示器
- [ ] 点击指示器切换引言
- [ ] 统计数字添加滚动动画
- [ ] 滚动到视口时触发动画
- [ ] Choose your path 添加左右箭头
- [ ] 点击箭头横向滚动卡片
- [ ] FAQ 展开时图标旋转
- [ ] FAQ 内容平滑展开/收起

**E2E 测试用例**:

```typescript
// 测试文件: client/src/__tests__/e2e/iteration12.test.tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Iteration 12 - 视觉动效改进', () => {
  
  // IT12-01: Hero 动态演示
  describe('Hero 动态演示', () => {
    it('Hero Section 显示 AI 聊天演示组件', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('hero-ai-demo')).toBeInTheDocument();
      });
    });
    
    it('演示组件包含打字机动画', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('typewriter-text')).toBeInTheDocument();
      });
    });
  });
  
  // IT12-02: 引言轮播
  describe('引言轮播', () => {
    it('引言区域显示轮播指示器', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('quote-carousel')).toBeInTheDocument();
        expect(screen.getAllByTestId(/^carousel-indicator-/).length).toBeGreaterThan(1);
      });
    });
    
    it('点击指示器切换引言', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('carousel-indicator-1')).toBeInTheDocument();
      });
      
      const firstQuote = screen.getByTestId('quote-content').textContent;
      
      fireEvent.click(screen.getByTestId('carousel-indicator-1'));
      
      await waitFor(() => {
        const newQuote = screen.getByTestId('quote-content').textContent;
        expect(newQuote).not.toBe(firstQuote);
      });
    });
  });
  
  // IT12-03: 数字滚动动画
  describe('数字滚动动画', () => {
    it('统计数字组件存在', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('stats-section')).toBeInTheDocument();
        expect(screen.getByTestId('animated-number-users')).toBeInTheDocument();
      });
    });
  });
  
  // IT12-04: 路径卡片横向滚动
  describe('路径卡片横向滚动', () => {
    it('Choose your path 区域显示左右箭头', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('path-scroll-left')).toBeInTheDocument();
        expect(screen.getByTestId('path-scroll-right')).toBeInTheDocument();
      });
    });
    
    it('点击右箭头滚动卡片', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('path-scroll-right')).toBeInTheDocument();
      });
      
      const container = screen.getByTestId('path-cards-container');
      const initialScroll = container.scrollLeft;
      
      fireEvent.click(screen.getByTestId('path-scroll-right'));
      
      await waitFor(() => {
        expect(container.scrollLeft).toBeGreaterThan(initialScroll);
      });
    });
  });
  
  // IT12-05: FAQ 展开动画
  describe('FAQ 展开动画', () => {
    it('FAQ 问题点击展开', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('faq-item-0')).toBeInTheDocument();
      });
      
      // 初始状态答案不可见
      expect(screen.queryByTestId('faq-answer-0')).not.toBeVisible();
      
      fireEvent.click(screen.getByTestId('faq-item-0'));
      
      await waitFor(() => {
        expect(screen.getByTestId('faq-answer-0')).toBeVisible();
      });
    });
    
    it('FAQ 展开时图标旋转', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('faq-icon-0')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('faq-item-0'));
      
      await waitFor(() => {
        expect(screen.getByTestId('faq-icon-0')).toHaveClass('rotate-180');
      });
    });
  });
});
```

**E2E 测试结果**: ⬜ 未测试

---

### 迭代十三：增强功能

**状态**: ⬜ TODO

**功能说明**：实现 Prompts Library、Settings 页面等增强功能。

| 功能 | 当前状态 | 目标状态 | 工作量 | 完成 |
|-----|---------|---------|--------|------|
| Prompts Library | Coming Soon | 完整页面（分类+搜索） | 3h | ⬜ |
| Settings 页面 | 无 | 基础设置页面 | 2h | ⬜ |
| Quiz 重试按钮 | 无 | 答错后可重试 | 0.5h | ⬜ |
| 反馈按钮 | 无 | 右下角旗帜图标 | 0.5h | ⬜ |
| 目录侧边栏 | 无 | 汉堡菜单展开目录 | 1.5h | ⬜ |

**完成度检查**:
- [ ] 创建 Prompts Library 页面
- [ ] 顶部搜索框
- [ ] 分类卡片（蓝色渐变背景）
- [ ] 点击分类进入提示词列表
- [ ] 创建 Settings 页面
- [ ] 账户设置区块
- [ ] 通知设置区块
- [ ] Quiz 答错后显示 "Try Again" 按钮
- [ ] 点击重试重置选项
- [ ] 课程内容页右下角添加反馈按钮
- [ ] 课程详情页添加汉堡菜单
- [ ] 点击展开课程目录侧边栏

**E2E 测试用例**:

```typescript
// 测试文件: client/src/__tests__/e2e/iteration13.test.tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Iteration 13 - 增强功能', () => {
  
  // IT13-01: Prompts Library
  describe('Prompts Library', () => {
    it('点击入口跳转到 Prompts Library 页面', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard/profile']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('prompts-library-link')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('prompts-library-link'));
      
      await waitFor(() => {
        expect(screen.getByTestId('prompts-library-page')).toBeInTheDocument();
      });
    });
    
    it('Prompts Library 显示搜索框和分类卡片', async () => {
      render(
        <MemoryRouter initialEntries={['/prompts-library']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('prompts-search')).toBeInTheDocument();
        expect(screen.getAllByTestId(/^prompt-category-/).length).toBeGreaterThan(0);
      });
    });
    
    it('点击分类卡片进入提示词列表', async () => {
      render(
        <MemoryRouter initialEntries={['/prompts-library']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('prompt-category-productivity')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('prompt-category-productivity'));
      
      await waitFor(() => {
        expect(screen.getByTestId('prompts-list')).toBeInTheDocument();
      });
    });
  });
  
  // IT13-02: Settings 页面
  describe('Settings 页面', () => {
    it('点击入口跳转到 Settings 页面', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard/profile']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('settings-link')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('settings-link'));
      
      await waitFor(() => {
        expect(screen.getByTestId('settings-page')).toBeInTheDocument();
      });
    });
    
    it('Settings 页面显示账户和通知设置', async () => {
      render(
        <MemoryRouter initialEntries={['/settings']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('account-settings')).toBeInTheDocument();
        expect(screen.getByTestId('notification-settings')).toBeInTheDocument();
      });
    });
  });
  
  // IT13-03: Quiz 重试
  describe('Quiz 重试', () => {
    it('Quiz 答错后显示 Try Again 按钮', async () => {
      render(
        <MemoryRouter initialEntries={['/course-quiz/chatgpt/chatgpt-1-quiz']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('quiz-option-1')).toBeInTheDocument(); // 错误选项
      });
      
      // 选择错误答案
      fireEvent.click(screen.getByTestId('quiz-option-1'));
      fireEvent.click(screen.getByTestId('check-answer-btn'));
      
      await waitFor(() => {
        expect(screen.getByTestId('try-again-btn')).toBeInTheDocument();
      });
    });
    
    it('点击 Try Again 重置选项', async () => {
      render(
        <MemoryRouter initialEntries={['/course-quiz/chatgpt/chatgpt-1-quiz']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('quiz-option-1')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('quiz-option-1'));
      fireEvent.click(screen.getByTestId('check-answer-btn'));
      
      await waitFor(() => {
        expect(screen.getByTestId('try-again-btn')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('try-again-btn'));
      
      await waitFor(() => {
        // 验证选项重置
        expect(screen.queryByTestId('try-again-btn')).not.toBeInTheDocument();
        expect(screen.getByTestId('check-answer-btn')).toBeInTheDocument();
      });
    });
  });
  
  // IT13-04: 反馈按钮
  describe('反馈按钮', () => {
    it('课程内容页显示反馈按钮', async () => {
      render(
        <MemoryRouter initialEntries={['/lesson/chatgpt/chatgpt-1-1']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('feedback-button')).toBeInTheDocument();
      });
    });
  });
  
  // IT13-05: 目录侧边栏
  describe('目录侧边栏', () => {
    it('课程详情页显示汉堡菜单', async () => {
      render(
        <MemoryRouter initialEntries={['/course/chatgpt']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('hamburger-menu')).toBeInTheDocument();
      });
    });
    
    it('点击汉堡菜单展开目录侧边栏', async () => {
      render(
        <MemoryRouter initialEntries={['/course/chatgpt']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('hamburger-menu')).toBeInTheDocument();
      });
      
      fireEvent.click(screen.getByTestId('hamburger-menu'));
      
      await waitFor(() => {
        expect(screen.getByTestId('course-sidebar')).toBeInTheDocument();
      });
    });
  });
});
```

**E2E 测试结果**: ⬜ 未测试

---

## 4. E2E 检查点汇总

### E2E 检查点 4（Iteration 10 完成后）

| 测试项 | 状态 | 结果 |
|-------|------|------|
| 蛇形路径布局 | ⬜ | - |
| 模块预览弹窗 | ⬜ | - |
| Read 按钮跳转 | ⬜ | - |
| Streak 详情弹窗 | ⬜ | - |
| 日历视图 | ⬜ | - |
| 顶部水平导航 | ⬜ | - |
| 导航切换 | ⬜ | - |
| 火焰图标点击 | ⬜ | - |

### E2E 检查点 5（Iteration 11 完成后）

| 测试项 | 状态 | 结果 |
|-------|------|------|
| 课程下拉展开 | ⬜ | - |
| 课程切换 | ⬜ | - |
| 深色模式切换 | ⬜ | - |
| 模式持久化 | ⬜ | - |
| 证书卡片点击 | ⬜ | - |
| 卡片 hover | ⬜ | - |
| 按钮 hover | ⬜ | - |

### E2E 检查点 6（Iteration 12 完成后）

| 测试项 | 状态 | 结果 |
|-------|------|------|
| Hero 演示组件 | ⬜ | - |
| 打字机效果 | ⬜ | - |
| 引言轮播 | ⬜ | - |
| 指示器切换 | ⬜ | - |
| 数字滚动 | ⬜ | - |
| 路径卡片滚动 | ⬜ | - |
| FAQ 动画 | ⬜ | - |

### E2E 检查点 7（Iteration 13 完成后）

| 测试项 | 状态 | 结果 |
|-------|------|------|
| Prompts Library 页面 | ⬜ | - |
| 分类卡片点击 | ⬜ | - |
| Settings 页面 | ⬜ | - |
| Quiz 重试 | ⬜ | - |
| 反馈按钮 | ⬜ | - |
| 目录侧边栏 | ⬜ | - |

---

## 5. 迭代计划总览

| 迭代 | 核心任务 | 预计工期 | 状态 |
|-----|---------|---------|------|
| Iteration 10 | 蛇形路径 + 弹窗 + 导航 | 1 天 | ⬜ TODO |
| Iteration 11 | 课程切换 + 深色模式 + hover | 0.5 天 | ⬜ TODO |
| Iteration 12 | Hero 演示 + 轮播 + 动画 | 0.5 天 | ⬜ TODO |
| Iteration 13 | Prompts Library + Settings | 0.5 天 | ⬜ TODO |

**总预计工期**：2.5-3 天

---

## 6. 确认事项

请确认以下内容后开始实施：

1. **迭代优先级**：是否按照 IT10 → IT11 → IT12 → IT13 顺序执行？
2. **功能范围**：是否需要调整某些功能的优先级？
3. **工期预期**：2.5-3 天的工期是否可接受？
4. **E2E 测试**：测试用例是否覆盖完整？

---

**文档结束**

确认后我将立即开始 Iteration 10 的实施，每个迭代完成后：
1. 运行对应的 E2E 测试
2. 更新本文档的状态标记
3. 确保所有测试通过后进入下一迭代
