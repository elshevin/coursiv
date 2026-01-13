// Types
export * from './types';

// Main Components
export { CourseViewer } from './CourseViewer';

// Common Components
export { ContinueButton } from './common/ContinueButton';
export { ProgressBar } from './common/ProgressBar';
export { PageHeader } from './common/PageHeader';

// Page Components
export { IntroPage } from './pages/IntroPage';
export { TextPage } from './pages/TextPage';
export { TaskCardPage } from './pages/TaskCardPage';

// Quiz Components (renamed to avoid conflicts with types)
export { QuizSinglePage as QuizSinglePageComponent } from './quiz/QuizSinglePage';
export { QuizOption as QuizOptionComponent } from './quiz/QuizOption';
export { QuizFeedback } from './quiz/QuizFeedback';
export { HintButton } from './quiz/HintButton';

// Playground Components (renamed to avoid conflicts with types)
export { PlaygroundPage as PlaygroundPageComponent } from './playground/PlaygroundPage';
export { PromptEditor } from './playground/PromptEditor';
export { OptionPicker } from './playground/OptionPicker';
export { ResultDisplay } from './playground/ResultDisplay';
export { SuccessFeedback } from './playground/SuccessFeedback';

// Test Data
export { testLesson, testLessonWithQuiz, testLessonWithPlayground } from './testData';
