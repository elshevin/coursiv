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

// Blank definition for Playground (Coursiv-style)
export interface PlaygroundBlank {
  id: string;              // Unique identifier for the blank (e.g., 'blank1', 'blank2')
  placeholder: string;     // Placeholder text shown in gray (e.g., 'design source')
  correctAnswer: string;   // The correct answer for this blank
}

// Playground content block (fill-in-the-blank exercise) - Coursiv-style
// Supports multiple blanks with option consumption mechanism
export interface PlaygroundBlock {
  type: 'playground';
  content: {
    title: string;
    description: string;
    aiTool: {
      name: string;
      icon: string;
    };
    // Template string with [blankId] placeholders, e.g., "Convert this [blank1] into [blank2]"
    promptTemplate: string;
    // Array of blanks with their placeholders and correct answers
    blanks: PlaygroundBlank[];
    // All available options (will be consumed as user selects)
    options: string[];
    // Image shown on completion
    resultImage?: string;
    // Pro tip shown on completion
    proTip?: string;
    // Hint text shown when user clicks "Show Hint"
    hint: string;
    // Success feedback (shown when all answers are correct)
    successFeedback: {
      title: string;
      message: string;
    };
    // Error feedback (shown when any answer is wrong)
    errorFeedback: {
      title: string;
      message: string;
    };
    // Simulated AI response shown after user completes the fill-in-the-blank
    // This mimics how ChatGPT/AI would respond to the completed prompt
    // Supports Markdown formatting
    aiResponse?: string;
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

// Helper to create playground block (Coursiv-style with multiple blanks)
export function createPlaygroundBlock(
  title: string,
  description: string,
  aiTool: { name: string; icon: string },
  promptTemplate: string,
  blanks: PlaygroundBlank[],
  options: string[],
  hint: string,
  successFeedback: { title: string; message: string },
  errorFeedback: { title: string; message: string },
  resultImage?: string,
  proTip?: string,
  aiResponse?: string
): PlaygroundBlock {
  return {
    type: 'playground',
    content: {
      title,
      description,
      aiTool,
      promptTemplate,
      blanks,
      options,
      hint,
      resultImage,
      proTip,
      successFeedback,
      errorFeedback,
      aiResponse,
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
