// Course Content Types - Coursiv-style content structure
// Supports text, playground, quiz, discovery cards, and feedback

export type ContentBlockType = 'text' | 'playground' | 'quiz' | 'discovery' | 'feedback';

// Text content block
export interface TextBlock {
  type: 'text';
  content: {
    title?: string;
    icon?: string;          // Emoji icon for the section
    paragraphs: string[];   // Supports markdown
    image?: string;         // Image URL
  };
}

// Playground content block (fill-in-the-blank exercise)
export interface PlaygroundBlock {
  type: 'playground';
  content: {
    title: string;
    description: string;
    aiTool: {
      name: string;
      icon: string;
    };
    promptTemplate: Array<
      | { type: 'text'; content: string }
      | { type: 'blank'; label: string }
    >;
    options: string[];
    correctAnswers: Record<string, string>;
    resultImage?: string;
    hint: string;  // Required: hint text shown when user clicks "Show Hint"
    successFeedback: {
      title: string;
      message: string;
    };
    errorFeedback: {  // Required: feedback shown when user selects wrong answer
      title: string;
      message: string;
    };
  };
}

// Quiz content block (single choice question)
export interface QuizBlock {
  type: 'quiz';
  content: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    hint: string;  // Required: hint text shown when user clicks "Show Hint"
  };
}

// Discovery card (knowledge point highlight)
export interface DiscoveryBlock {
  type: 'discovery';
  content: {
    number: number;  // 1, 2, 3, etc.
    title: string;
    message: string;
  };
}

// Feedback survey block
export interface FeedbackBlock {
  type: 'feedback';
  content: {
    question: string;
    options: string[];
    correctIndex: number;
  };
}

// Union type for all content blocks
export type ContentBlock = TextBlock | PlaygroundBlock | QuizBlock | DiscoveryBlock | FeedbackBlock;

// Lesson with Coursiv-style content
export interface CoursivLesson {
  id: string;
  courseId: string;
  title: string;
  subtitle?: string;
  blocks: ContentBlock[];
}

// Helper to create text block
export function createTextBlock(
  title: string,
  icon: string,
  paragraphs: string[],
  image?: string
): TextBlock {
  return {
    type: 'text',
    content: {
      title,
      icon,
      paragraphs,
      image,
    },
  };
}

// Helper to create playground block
export function createPlaygroundBlock(
  title: string,
  description: string,
  aiTool: { name: string; icon: string },
  promptTemplate: PlaygroundBlock['content']['promptTemplate'],
  options: string[],
  correctAnswers: Record<string, string>,
  hint: string,
  successFeedback: { title: string; message: string },
  errorFeedback: { title: string; message: string },
  resultImage?: string
): PlaygroundBlock {
  return {
    type: 'playground',
    content: {
      title,
      description,
      aiTool,
      promptTemplate,
      options,
      correctAnswers,
      hint,
      resultImage,
      successFeedback,
      errorFeedback,
    },
  };
}

// Helper to create quiz block
export function createQuizBlock(
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  hint: string
): QuizBlock {
  return {
    type: 'quiz',
    content: {
      question,
      options,
      correctIndex,
      explanation,
      hint,
    },
  };
}

// Helper to create discovery block
export function createDiscoveryBlock(
  number: number,
  title: string,
  message: string
): DiscoveryBlock {
  return {
    type: 'discovery',
    content: {
      number,
      title,
      message,
    },
  };
}

// Helper to create feedback block
export function createFeedbackBlock(
  question: string,
  options: string[],
  correctIndex: number
): FeedbackBlock {
  return {
    type: 'feedback',
    content: {
      question,
      options,
      correctIndex,
    },
  };
}
