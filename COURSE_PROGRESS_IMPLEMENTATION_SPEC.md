# 课程和进度系统完整实现需求文档

## 一、项目目标

将我们的课程内流程与 Coursiv 完全对齐，实现：
1. 完整的课程进度保存和显示功能
2. Quiz/Playground 嵌入式卡片展示
3. 页面切换动画和样式优化
4. 课程路径页面优化

---

## 二、问题清单

### P0 阻塞性问题（3个）

| ID | 问题 | 描述 |
|----|------|------|
| P0-1 | 进度百分比缺失 | 课程路径页面不显示进度百分比 |
| P0-2 | 模块完成状态缺失 | 已完成模块没有绿色背景和勾选图标 |
| P0-3 | 进度自动保存缺失 | 每页完成后不会自动保存进度 |

### P1 高优先级问题（2个）

| ID | 问题 | 描述 |
|----|------|------|
| P1-1 | Quiz 展示方式 | Quiz 是独立全屏页面，应改为嵌入式卡片 |
| P1-2 | Playground 展示方式 | Playground 是独立全屏页面，应改为嵌入式卡片 |

### P2 中等优先级问题（8个）

| ID | 问题 | 描述 |
|----|------|------|
| P2-1 | 页面切换动画 | 无淡入淡出动画 |
| P2-2 | Quiz 选中状态 | 应改为紫色圆点图标 |
| P2-3 | Quiz 按钮布局 | Hint 和 Submit 应改为左右布局 |
| P2-4 | Quiz 反馈样式 | 应改为绿色/红色左边框样式 |
| P2-5 | Quiz 反馈位置 | 应在卡片内部而非下方 |
| P2-6 | Quiz 卡片阴影 | 缺少阴影效果 |
| P2-7 | 课程路径布局 | 应改为蛇形路径布局 |
| P2-8 | 音频按钮功能 | 仅图标展示，无实际功能 |

### P3 低优先级问题（2个）

| ID | 问题 | 描述 |
|----|------|------|
| P3-1 | 反馈按钮 | 缺少右下角旗帜图标反馈按钮 |
| P3-2 | 证书进度 | 缺少证书解锁进度显示 |

---

## 三、数据库设计

### 3.1 用户课程进度表

```sql
CREATE TABLE user_course_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id VARCHAR(255) NOT NULL,
  module_id VARCHAR(255) NOT NULL,
  lesson_id VARCHAR(255),
  current_page_index INTEGER DEFAULT 0,
  total_pages INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP,
  quiz_answers JSONB DEFAULT '{}',
  playground_answers JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, course_id, module_id)
);

-- 索引
CREATE INDEX idx_user_course_progress_user_id ON user_course_progress(user_id);
CREATE INDEX idx_user_course_progress_course_id ON user_course_progress(course_id);
```

### 3.2 字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| user_id | INTEGER | 用户 ID |
| course_id | VARCHAR | 课程 ID（如 "chatgpt-mastery"） |
| module_id | VARCHAR | 模块 ID（如 "module-1"） |
| lesson_id | VARCHAR | 课时 ID（可选） |
| current_page_index | INTEGER | 当前页面索引 |
| total_pages | INTEGER | 总页面数 |
| completed | BOOLEAN | 是否完成 |
| quiz_answers | JSONB | Quiz 答案记录 |
| playground_answers | JSONB | Playground 答案记录 |

---

## 四、API 设计

### 4.1 保存进度

**POST /api/progress/save**

```typescript
// 请求
{
  courseId: string;
  moduleId: string;
  lessonId?: string;
  currentPageIndex: number;
  totalPages: number;
  completed?: boolean;
  quizAnswers?: Record<string, string>;
  playgroundAnswers?: Record<string, string[]>;
}

// 响应
{
  success: boolean;
  progress: {
    id: number;
    currentPageIndex: number;
    completed: boolean;
    updatedAt: string;
  }
}
```

### 4.2 获取课程进度

**GET /api/progress/:courseId**

```typescript
// 响应
{
  courseId: string;
  totalModules: number;
  completedModules: number;
  progressPercent: number;
  modules: {
    moduleId: string;
    currentPageIndex: number;
    totalPages: number;
    completed: boolean;
    completedAt?: string;
  }[]
}
```

### 4.3 获取模块进度

**GET /api/progress/:courseId/:moduleId**

```typescript
// 响应
{
  moduleId: string;
  currentPageIndex: number;
  totalPages: number;
  completed: boolean;
  quizAnswers: Record<string, string>;
  playgroundAnswers: Record<string, string[]>;
}
```

---

## 五、前端组件改造

### 5.1 QuizCard 组件（替代 QuizSinglePage）

**改动点：**
1. 从全屏页面改为嵌入式卡片
2. 添加白色背景 + 圆角 + 阴影
3. 选中状态改为紫色圆点图标
4. Hint 和 Submit 改为左右布局
5. 反馈改为绿色/红色左边框样式
6. 反馈位置改为卡片内部

**样式规范：**
```css
.quiz-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin: 16px 0;
}

.quiz-option-selected {
  border-color: #7C3AED;
}

.quiz-option-selected::before {
  content: '';
  width: 12px;
  height: 12px;
  background: #7C3AED;
  border-radius: 50%;
}

.quiz-feedback-correct {
  border-left: 4px solid #22C55E;
  background: #F0FDF4;
  padding: 12px 16px;
}

.quiz-feedback-incorrect {
  border-left: 4px solid #EF4444;
  background: #FEF2F2;
  padding: 12px 16px;
}
```

### 5.2 PlaygroundCard 组件（替代 PlaygroundPage）

**改动点：**
1. 从全屏页面改为嵌入式卡片
2. 添加白色背景 + 圆角 + 阴影
3. 保持现有填空交互逻辑

### 5.3 CourseViewer 改造

**改动点：**
1. 添加页面切换动画（Framer Motion）
2. 根据页面类型渲染 QuizCard 或 PlaygroundCard
3. 每页完成后调用进度保存 API
4. 支持从上次进度继续学习

### 5.4 CoursePathway 页面改造

**改动点：**
1. 显示进度百分比
2. 已完成模块显示绿色背景 + 勾选图标
3. 当前模块高亮显示
4. 未解锁模块灰色显示

---

## 六、迭代计划

### 迭代 1：数据库和 API（2 小时）

**功能点：**
- [ ] 创建 user_course_progress 数据库表
- [ ] 实现 POST /api/progress/save API
- [ ] 实现 GET /api/progress/:courseId API
- [ ] 实现 GET /api/progress/:courseId/:moduleId API
- [ ] 编写 API 单元测试

**E2E 测试用例：**
1. 调用保存进度 API，验证数据库记录正确
2. 调用获取进度 API，验证返回数据正确
3. 多次保存同一模块进度，验证更新而非新增
4. 保存完成状态，验证 completed 和 completed_at 正确

### 迭代 2：进度显示和保存集成（2 小时）

**功能点：**
- [ ] CourseViewer 集成进度保存
- [ ] 每页完成后自动调用保存 API
- [ ] 课程路径页面显示进度百分比
- [ ] 已完成模块显示绿色背景 + 勾选图标
- [ ] 支持从上次进度继续学习

**E2E 测试用例：**
1. 进入课程内容，翻页后刷新页面，验证进度已保存
2. 完成一个模块，返回课程路径页面，验证模块显示绿色
3. 课程路径页面显示正确的进度百分比
4. 点击已完成模块，可以重新学习
5. 点击未完成模块，从上次进度继续

### 迭代 3：QuizCard 嵌入式组件（2 小时）

**功能点：**
- [ ] 创建 QuizCard 组件（嵌入式卡片）
- [ ] 选中状态改为紫色圆点图标
- [ ] Hint 和 Submit 改为左右布局
- [ ] 反馈改为绿色/红色左边框样式
- [ ] 反馈位置改为卡片内部
- [ ] 集成到 CourseViewer

**E2E 测试用例：**
1. Quiz 卡片显示在内容页面中（非全屏）
2. 点击选项显示紫色圆点选中状态
3. Hint 按钮在左侧，Submit 按钮在右侧
4. 正确答案显示绿色左边框反馈
5. 错误答案显示红色左边框反馈
6. 反馈在卡片内部显示

### 迭代 4：PlaygroundCard 嵌入式组件（2 小时）

**功能点：**
- [ ] 创建 PlaygroundCard 组件（嵌入式卡片）
- [ ] 保持现有填空交互逻辑
- [ ] 添加卡片样式（白色背景 + 圆角 + 阴影）
- [ ] 集成到 CourseViewer
- [ ] 保存 Playground 答案到进度

**E2E 测试用例：**
1. Playground 卡片显示在内容页面中（非全屏）
2. 填空交互功能正常
3. 选项点击填入空白
4. 退格删除功能正常
5. Check 按钮验证答案
6. 成功反馈显示图片

### 迭代 5：页面切换动画（1 小时）

**功能点：**
- [ ] 安装 Framer Motion
- [ ] CourseViewer 添加页面切换动画
- [ ] 淡入淡出效果
- [ ] 滑动效果（可选）

**E2E 测试用例：**
1. 点击 Continue，页面有淡出淡入动画
2. 动画流畅，无卡顿
3. 动画时间适中（约 300ms）

### 迭代 6：样式优化和最终测试（1 小时）

**功能点：**
- [ ] Quiz 卡片阴影效果
- [ ] 选项悬停效果
- [ ] 响应式布局检查
- [ ] 完整流程测试

**E2E 测试用例：**
1. 从 Dashboard 进入课程
2. 完成 IntroPage → TextPage → QuizCard → PlaygroundCard 完整流程
3. 进度正确保存和显示
4. 返回课程路径页面，显示正确的进度
5. 移动端布局正确

---

## 七、完整 E2E 测试检查清单

### 进度保存功能

- [ ] 翻页后进度自动保存
- [ ] 刷新页面后可从上次进度继续
- [ ] 完成模块后 completed 状态正确
- [ ] 进度百分比计算正确
- [ ] 多模块进度独立保存

### 进度显示功能

- [ ] 课程路径页面显示进度百分比
- [ ] 已完成模块显示绿色背景
- [ ] 已完成模块显示勾选图标
- [ ] 当前模块高亮显示
- [ ] 未开始模块正常显示

### QuizCard 功能

- [ ] 嵌入式卡片显示
- [ ] 白色背景 + 圆角 + 阴影
- [ ] 紫色圆点选中状态
- [ ] Hint 左侧 + Submit 右侧布局
- [ ] 绿色/红色左边框反馈
- [ ] 反馈在卡片内部

### PlaygroundCard 功能

- [ ] 嵌入式卡片显示
- [ ] 白色背景 + 圆角 + 阴影
- [ ] 填空交互正常
- [ ] 选项消失机制正确
- [ ] 退格删除功能正常
- [ ] 成功反馈显示图片

### 动画效果

- [ ] 页面切换淡入淡出
- [ ] 动画流畅无卡顿
- [ ] 动画时间适中

---

## 八、时间估算

| 迭代 | 内容 | 时间 |
|------|------|------|
| 1 | 数据库和 API | 2 小时 |
| 2 | 进度显示和保存集成 | 2 小时 |
| 3 | QuizCard 嵌入式组件 | 2 小时 |
| 4 | PlaygroundCard 嵌入式组件 | 2 小时 |
| 5 | 页面切换动画 | 1 小时 |
| 6 | 样式优化和最终测试 | 1 小时 |

**总计：10 小时**

---

## 九、需要确认的问题

### 9.1 进度保存策略

**问题**：进度何时保存？
- **方案 A**：每次点击 Continue 时保存
- **方案 B**：每次页面切换时保存（包括返回）
- **方案 C**：仅在完成模块时保存

**建议**：方案 A，每次点击 Continue 时保存，与 Coursiv 一致

### 9.2 Quiz 答案保存

**问题**：Quiz 答案是否需要保存？
- **方案 A**：保存，用户重新进入可以看到之前的答案
- **方案 B**：不保存，每次重新进入都是新的

**建议**：方案 A，保存答案，提供更好的用户体验

### 9.3 Playground 答案保存

**问题**：Playground 答案是否需要保存？
- **方案 A**：保存，用户重新进入可以看到之前的答案
- **方案 B**：不保存，每次重新进入都是新的

**建议**：方案 A，保存答案，与 Quiz 保持一致

### 9.4 未完成模块是否可访问

**问题**：用户是否可以跳过模块？
- **方案 A**：可以，所有模块都可访问
- **方案 B**：不可以，必须按顺序完成

**建议**：方案 A，允许跳过，提供更灵活的学习体验

### 9.5 课程路径布局

**问题**：是否需要实现蛇形路径布局？
- **方案 A**：是，完全复刻 Coursiv
- **方案 B**：否，保持当前垂直列表布局

**建议**：方案 B（本次迭代），蛇形布局复杂度较高，可作为后续优化

---

## 十、风险和依赖

### 风险

1. **Framer Motion 兼容性**：需要测试与现有组件的兼容性
2. **进度保存性能**：频繁保存可能影响性能，需要考虑防抖
3. **数据库迁移**：需要确保生产环境数据库迁移顺利

### 依赖

1. **用户认证系统**：进度保存依赖用户登录状态
2. **数据库连接**：需要确保数据库连接稳定
3. **现有组件**：需要在不破坏现有功能的前提下改造

---

## 十一、交付物

1. **数据库表**：user_course_progress
2. **API 端点**：3 个进度相关 API
3. **前端组件**：QuizCard、PlaygroundCard、CourseViewer 改造
4. **动画效果**：页面切换动画
5. **测试报告**：E2E 测试结果文档
