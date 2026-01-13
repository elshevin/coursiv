// Course Content Types - Coursiv Style

// Page Types
export type PageType = 
  | 'intro'           // 介绍页（标题+描述+插图）
  | 'text'            // 文本页（标题+多段文本+插图）
  | 'quiz_single'     // 单选题
  | 'quiz_multiple'   // 多选题
  | 'playground'      // Playground 填空练习
  | 'task_card'       // 任务卡片（引导进入 Playground）
  | 'video'           // 视频页
  | 'recap'           // 总结页
  | 'completion';     // 完成页

// Base Page Interface
export interface BasePage {
  id: string;
  type: PageType;
}

// Intro Page
export interface IntroPage extends BasePage {
  type: 'intro';
  content: {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
  };
}

// Text Paragraph
export interface TextParagraph {
  text: string;
  highlight?: boolean;
}

// Text Page
export interface TextPage extends BasePage {
  type: 'text';
  content: {
    title: string;
    paragraphs: TextParagraph[];
    image?: string;
    imagePosition?: 'top' | 'bottom' | 'inline';
  };
}

// Quiz Option
export interface QuizOption {
  id: string;
  text: string;
}

// Quiz Single Page
export interface QuizSinglePage extends BasePage {
  type: 'quiz_single';
  content: {
    context?: {
      title: string;
      description: string;
    };
    question: string;
    options: QuizOption[];
    correctAnswer: string;
    hint?: string;
    explanation: string;
  };
}

// Prompt Segment for Playground
export interface PromptSegment {
  type: 'text' | 'blank';
  content?: string;  // 文本内容（text 类型必需，blank 类型可选）
  label?: string;    // 空白标签（blank 类型必需）
}

// AI Tool Info
export interface AITool {
  name: string;
  icon: string;
}

// Playground Page
export interface PlaygroundPage extends BasePage {
  type: 'playground';
  content: {
    id: string;
    title: string;
    description: string;
    aiTool: AITool;
    promptTemplate: PromptSegment[];
    options: string[];
    correctAnswers: Record<string, string>;
    resultImage: string;
    successFeedback: {
      title: string;
      message: string;
    };
  };
}

// Task Card Page
export interface TaskCardPage extends BasePage {
  type: 'task_card';
  content: {
    contextTitle?: string;
    contextDescription?: string;
    task: {
      title: string;
      description: string;
      buttonText: string;
      playgroundId: string;
    };
    status?: 'pending' | 'completed';
  };
}

// Video Page
export interface VideoPage extends BasePage {
  type: 'video';
  content: {
    title: string;
    description?: string;
    videoUrl: string;
    thumbnail?: string;
    duration?: string;
  };
}

// Recap Page
export interface RecapPage extends BasePage {
  type: 'recap';
  content: {
    title: string;
    summary: string;
    keyPoints: string[];
    nextSteps?: {
      title: string;
      description: string;
    };
  };
}

// Completion Page
export interface CompletionPage extends BasePage {
  type: 'completion';
  content: {
    title: string;
    message: string;
    taskSummary?: {
      title: string;
      status: 'completed';
      repeatButtonText?: string;
    };
  };
}

// Union type for all pages
export type Page = 
  | IntroPage 
  | TextPage 
  | QuizSinglePage 
  | PlaygroundPage 
  | TaskCardPage 
  | VideoPage 
  | RecapPage 
  | CompletionPage;

// Lesson
export interface Lesson {
  id: string;
  title: string;
  pages: Page[];
}

// Module Types
export type ModuleType = 
  | 'content'      // 内容模块（阅读/听课）
  | 'practice'     // 练习模块（Playground）
  | 'quiz'         // 测试模块（选择题）
  | 'video'        // 视频模块
  | 'recap'        // 总结模块
  | 'takeaways';   // 要点回顾

export type ModuleIcon = 
  | 'book'         // 紫色书本图标
  | 'star'         // 紫色星星图标
  | 'trophy'       // 奖杯图标
  | 'play'         // 播放图标
  | 'question';    // 问号图标

export type ModuleStatus = 'locked' | 'available' | 'in_progress' | 'completed';

// Module
export interface Module {
  id: string;
  title: string;
  description: string;
  type: ModuleType;
  icon: ModuleIcon;
  status: ModuleStatus;
  lessons: Lesson[];
}

// PlaygroundContent (for standalone playground data)
export interface PlaygroundContent {
  title: string;
  description: string;
  aiTool: AITool;
  promptTemplate: PromptSegment[];
  options: string[];
  correctAnswers: Record<string, string>;
  resultImage: string;
  successFeedback: {
    title: string;
    message: string;
  };
}

// Course
export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  level: number;
  levelTitle: string;
  totalLessons: number;
  estimatedTime: string;
  modules: Module[];
}
