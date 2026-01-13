# 前端组件和交互实现方案

## 一、组件架构

### 1.1 组件目录结构

```
/client/src/components/CourseContent/
├── pages/                          # 页面类型组件
│   ├── IntroPage.tsx               # 介绍页
│   ├── TextPage.tsx                # 文本页
│   ├── QuizSinglePage.tsx          # 单选题页
│   ├── QuizMultiplePage.tsx        # 多选题页
│   ├── TaskCardPage.tsx            # 任务卡片页
│   ├── PlaygroundPage.tsx          # Playground 填空页
│   ├── VideoPage.tsx               # 视频页
│   ├── RecapPage.tsx               # 总结页
│   └── CompletionPage.tsx          # 完成页
│
├── playground/                     # Playground 子组件
│   ├── PromptEditor.tsx            # Prompt 模板编辑器
│   ├── PromptBlank.tsx             # 空白占位符
│   ├── OptionPicker.tsx            # 选项选择器
│   ├── ResultDisplay.tsx           # 结果图片显示
│   └── SuccessFeedback.tsx         # 成功反馈
│
├── quiz/                           # Quiz 子组件
│   ├── QuizOption.tsx              # 选项组件
│   ├── QuizFeedback.tsx            # 答案反馈
│   └── HintButton.tsx              # 提示按钮
│
├── common/                         # 通用组件
│   ├── ProgressBar.tsx             # 进度条
│   ├── ContinueButton.tsx          # Continue 按钮
│   ├── AudioToggle.tsx             # 音频开关
│   └── PageHeader.tsx              # 页面头部
│
├── CourseViewer.tsx                # 课程内容查看器（主容器）
└── index.ts                        # 导出
```

### 1.2 组件层级关系

```
CourseViewer (主容器)
├── PageHeader (进度条 + 关闭按钮 + 音频开关)
├── PageContent (根据 page.type 渲染对应组件)
│   ├── IntroPage
│   ├── TextPage
│   ├── QuizSinglePage
│   │   ├── QuizOption[]
│   │   ├── HintButton
│   │   └── QuizFeedback
│   ├── PlaygroundPage
│   │   ├── PromptEditor
│   │   │   └── PromptBlank[]
│   │   ├── OptionPicker
│   │   ├── ResultDisplay
│   │   └── SuccessFeedback
│   └── ...
└── ContinueButton (底部按钮)
```

---

## 二、核心组件设计

### 2.1 CourseViewer 主容器

```tsx
interface CourseViewerProps {
  lesson: Lesson;
  onComplete: () => void;
  onClose: () => void;
}

const CourseViewer: React.FC<CourseViewerProps> = ({ lesson, onComplete, onClose }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const currentPage = lesson.pages[currentPageIndex];
  
  const handleContinue = () => {
    if (currentPageIndex < lesson.pages.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
      setProgress((currentPageIndex + 1) / lesson.pages.length * 100);
    } else {
      onComplete();
    }
  };
  
  return (
    <div className="course-viewer">
      <PageHeader 
        progress={progress} 
        onClose={onClose}
        hasAudio={true}
      />
      
      <PageContent page={currentPage} onContinue={handleContinue} />
      
      <ContinueButton onClick={handleContinue} />
    </div>
  );
};
```

### 2.2 PlaygroundPage 组件

```tsx
interface PlaygroundPageProps {
  content: PlaygroundContent;
  onComplete: () => void;
}

const PlaygroundPage: React.FC<PlaygroundPageProps> = ({ content, onComplete }) => {
  const [filledBlanks, setFilledBlanks] = useState<Record<string, string>>({});
  const [availableOptions, setAvailableOptions] = useState(content.options);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  // 获取所有空白的 ID
  const blankIds = content.promptTemplate
    .filter(s => s.type === 'blank')
    .map(s => s.content);
  
  // 检查是否所有空白都已填满
  const allFilled = blankIds.every(id => filledBlanks[id]);
  
  // 处理选项点击
  const handleOptionClick = (option: string) => {
    const nextBlankId = blankIds.find(id => !filledBlanks[id]);
    if (nextBlankId) {
      setFilledBlanks(prev => ({ ...prev, [nextBlankId]: option }));
      setAvailableOptions(prev => prev.filter(o => o !== option));
    }
  };
  
  // 处理退格
  const handleBackspace = () => {
    const filledIds = blankIds.filter(id => filledBlanks[id]);
    if (filledIds.length > 0) {
      const lastFilledId = filledIds[filledIds.length - 1];
      const removedOption = filledBlanks[lastFilledId];
      setFilledBlanks(prev => {
        const newBlanks = { ...prev };
        delete newBlanks[lastFilledId];
        return newBlanks;
      });
      setAvailableOptions(prev => [...prev, removedOption]);
    }
  };
  
  // 检查答案
  const handleCheck = () => {
    const correct = Object.entries(content.correctAnswers).every(
      ([key, value]) => filledBlanks[key] === value
    );
    setIsCorrect(correct);
    setIsChecked(true);
  };
  
  return (
    <div className="playground-page">
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      
      <div className="ai-tool-badge">
        <img src={content.aiTool.icon} alt={content.aiTool.name} />
        <span>{content.aiTool.name}</span>
      </div>
      
      <PromptEditor 
        template={content.promptTemplate}
        filledBlanks={filledBlanks}
        onBlankClick={(id) => {/* 可选：点击空白取消 */}}
      />
      
      {!isChecked ? (
        <>
          <ResultDisplay placeholder={true} />
          
          <OptionPicker 
            options={availableOptions}
            onOptionClick={handleOptionClick}
          />
          
          <div className="action-buttons">
            <button 
              className="check-button"
              disabled={!allFilled}
              onClick={handleCheck}
            >
              Check
            </button>
            <button 
              className="backspace-button"
              onClick={handleBackspace}
            >
              ⌫
            </button>
          </div>
        </>
      ) : (
        <>
          <ResultDisplay 
            image={content.resultImage}
            aiToolIcon={content.aiTool.icon}
          />
          
          <SuccessFeedback 
            title={content.successFeedback.title}
            message={content.successFeedback.message}
          />
          
          <button className="continue-button" onClick={onComplete}>
            Continue
          </button>
        </>
      )}
    </div>
  );
};
```

### 2.3 QuizSinglePage 组件

```tsx
interface QuizSinglePageProps {
  content: QuizSingleContent;
  onComplete: () => void;
}

const QuizSinglePage: React.FC<QuizSinglePageProps> = ({ content, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  
  const isCorrect = selectedOption === content.correctAnswer;
  
  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  
  return (
    <div className="quiz-single-page">
      {content.context && (
        <div className="quiz-context">
          <h2>{content.context.title}</h2>
          <p>{content.context.description}</p>
        </div>
      )}
      
      <div className="quiz-card">
        <p className="quiz-question">{content.question}</p>
        
        <div className="quiz-options">
          {content.options.map(option => (
            <QuizOption
              key={option.id}
              option={option}
              selected={selectedOption === option.id}
              correct={isSubmitted && option.id === content.correctAnswer}
              disabled={isSubmitted}
              onClick={() => setSelectedOption(option.id)}
            />
          ))}
        </div>
        
        {!isSubmitted ? (
          <div className="quiz-actions">
            {content.hint && (
              <button 
                className="hint-button"
                onClick={() => setShowHint(true)}
              >
                Hint
              </button>
            )}
            <button 
              className="submit-button"
              disabled={!selectedOption}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        ) : (
          <QuizFeedback 
            correct={isCorrect}
            explanation={content.explanation}
          />
        )}
      </div>
      
      {showHint && (
        <div className="hint-modal">
          <p>{content.hint}</p>
          <button onClick={() => setShowHint(false)}>Got it</button>
        </div>
      )}
      
      {isSubmitted && (
        <button className="continue-button" onClick={onComplete}>
          Continue
        </button>
      )}
    </div>
  );
};
```

---

## 三、样式规范

### 3.1 颜色系统

```css
:root {
  /* 主色 */
  --primary-purple: #7C3AED;
  --primary-purple-light: #EDE9FE;
  --primary-purple-dark: #5B21B6;
  
  /* 成功色 */
  --success-green: #10B981;
  --success-green-light: #D1FAE5;
  
  /* 错误色 */
  --error-red: #EF4444;
  --error-red-light: #FEE2E2;
  
  /* 中性色 */
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;
  
  /* 特殊色 */
  --yellow-accent: #FCD34D;
  --yellow-border: #F59E0B;
}
```

### 3.2 组件样式

**空白占位符 (PromptBlank)**
```css
.prompt-blank {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border: 2px solid var(--primary-purple);
  border-radius: 8px;
  background: var(--primary-purple-light);
  color: var(--primary-purple);
  font-weight: 500;
  min-width: 80px;
  justify-content: center;
}

.prompt-blank.filled {
  background: var(--primary-purple);
  color: white;
}

.prompt-blank.empty {
  border-style: dashed;
  color: var(--gray-400);
}
```

**选项按钮 (OptionPicker)**
```css
.option-button {
  padding: 12px 20px;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  background: var(--gray-50);
  color: var(--gray-700);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.option-button:hover {
  background: var(--gray-100);
  border-color: var(--gray-300);
}
```

**Check 按钮**
```css
.check-button {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.check-button:disabled {
  background: var(--gray-200);
  color: var(--gray-400);
  cursor: not-allowed;
}

.check-button:not(:disabled) {
  background: var(--primary-purple);
  color: white;
}

.check-button:not(:disabled):hover {
  background: var(--primary-purple-dark);
}
```

**成功反馈 (SuccessFeedback)**
```css
.success-feedback {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-left: 4px solid var(--success-green);
  background: var(--success-green-light);
  border-radius: 0 12px 12px 0;
}

.success-feedback .icon {
  width: 24px;
  height: 24px;
  color: var(--success-green);
}

.success-feedback .title {
  font-size: 18px;
  font-weight: 600;
  color: var(--gray-900);
}

.success-feedback .message {
  font-size: 14px;
  color: var(--gray-600);
}
```

**Continue 按钮**
```css
.continue-button {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background: var(--success-green);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.continue-button:hover {
  background: #059669;
}
```

---

## 四、动效设计

### 4.1 动效列表

| 交互 | 动效 | 时长 |
|------|------|------|
| 选项点击填入空白 | 选项淡出 + 空白淡入 | 200ms |
| 空白填入词汇 | 缩放 + 颜色变化 | 200ms |
| Check 按钮点击 | 加载动画（可选） | 500ms |
| 图片显示 | 淡入 + 缩放 | 300ms |
| 成功反馈显示 | 从底部滑入 | 300ms |
| 页面切换 | 左右滑动 | 300ms |
| 进度条更新 | 宽度过渡 | 300ms |

### 4.2 动效实现

```css
/* 选项淡出 */
.option-button.leaving {
  animation: fadeOut 200ms ease-out forwards;
}

@keyframes fadeOut {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.8); }
}

/* 空白填入 */
.prompt-blank.filling {
  animation: fillIn 200ms ease-out forwards;
}

@keyframes fillIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* 图片显示 */
.result-image.showing {
  animation: imageShow 300ms ease-out forwards;
}

@keyframes imageShow {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* 成功反馈滑入 */
.success-feedback.entering {
  animation: slideUp 300ms ease-out forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 页面切换 */
.page-transition-enter {
  opacity: 0;
  transform: translateX(20px);
}

.page-transition-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 300ms ease-out;
}

.page-transition-exit {
  opacity: 1;
  transform: translateX(0);
}

.page-transition-exit-active {
  opacity: 0;
  transform: translateX(-20px);
  transition: all 300ms ease-out;
}
```

---

## 五、实现步骤

### Phase 1：基础组件（预计 2 小时）
1. 创建组件目录结构
2. 实现 CourseViewer 主容器
3. 实现 PageHeader、ContinueButton 等通用组件
4. 实现 IntroPage、TextPage 基础页面组件

### Phase 2：Quiz 组件（预计 2 小时）
1. 实现 QuizOption 选项组件
2. 实现 QuizFeedback 反馈组件
3. 实现 QuizSinglePage 单选题页面
4. 添加 Hint 功能

### Phase 3：Playground 组件（预计 3 小时）
1. 实现 PromptEditor 模板编辑器
2. 实现 PromptBlank 空白占位符
3. 实现 OptionPicker 选项选择器
4. 实现 ResultDisplay 结果显示
5. 实现 SuccessFeedback 成功反馈
6. 组装 PlaygroundPage 主组件

### Phase 4：动效和样式（预计 1 小时）
1. 添加所有动效
2. 完善样式细节
3. 响应式适配

### Phase 5：集成测试（预计 1 小时）
1. 创建测试数据
2. 集成到课程内容页面
3. 端到端测试
4. 修复问题

---

## 六、测试清单

### 6.1 功能测试

- [ ] IntroPage 正确显示标题、描述、图片
- [ ] TextPage 正确渲染 Markdown 文本
- [ ] QuizSinglePage 选项选择和提交
- [ ] QuizSinglePage 正确/错误答案反馈
- [ ] QuizSinglePage Hint 功能
- [ ] PlaygroundPage 选项填入空白
- [ ] PlaygroundPage 退格删除
- [ ] PlaygroundPage Check 按钮状态
- [ ] PlaygroundPage 成功反馈和图片显示
- [ ] 页面切换和进度更新
- [ ] 课程完成回调

### 6.2 样式测试

- [ ] 颜色符合规范
- [ ] 间距和圆角一致
- [ ] 动效流畅
- [ ] 响应式布局

### 6.3 边界测试

- [ ] 空数据处理
- [ ] 长文本截断
- [ ] 图片加载失败
- [ ] 网络错误处理

---

## 七、总结

本实现方案提供了：

1. **清晰的组件架构**：模块化、可复用
2. **详细的组件设计**：包含完整的 Props 和状态管理
3. **统一的样式规范**：与 Coursiv 一致的视觉效果
4. **完整的动效设计**：流畅的用户体验
5. **分阶段实现计划**：可控的开发进度

**预计总工时：9 小时**

**下一步行动：**
1. 确认方案
2. 生成模拟数据和 AI 图片
3. 按 Phase 顺序开发组件
4. 集成测试
