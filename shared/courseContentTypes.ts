// Course Content Types - Coursiv-style content structure
// Supports text, playground, quiz, discovery cards, and feedback

export type ContentBlockType = 'text' | 'playground' | 'quiz' | 'discovery' | 'feedback';

// Text content block
export interface TextBlock {
  type: 'text';
  content: {
    title?: string;
    paragraphs: string[];  // Supports markdown
    image?: string;        // Emoji or image URL
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
    successFeedback: {
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
  title: string;
  blocks: ContentBlock[];
}

// Helper to create text block
export function createTextBlock(
  paragraphs: string[],
  options?: { title?: string; image?: string }
): TextBlock {
  return {
    type: 'text',
    content: {
      title: options?.title,
      paragraphs,
      image: options?.image,
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
  successFeedback: { title: string; message: string },
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
      resultImage,
      successFeedback,
    },
  };
}

// Helper to create quiz block
export function createQuizBlock(
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
): QuizBlock {
  return {
    type: 'quiz',
    content: {
      question,
      options,
      correctIndex,
      explanation,
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
