// Course Data Model and Mock Data for Coursiv

export interface ContentPage {
  text: string;
  image?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string; // e.g., "5 min"
  type: 'lesson' | 'quiz' | 'practice';
  completed?: boolean;
  locked?: boolean;
  content?: ContentPage[];
  quiz?: QuizQuestion;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// Type alias for backward compatibility
export type Module = CourseModule;

export interface CourseLevel {
  id: string;
  title: string;
  description: string;
  modules: CourseModule[];
  unlocked: boolean;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  totalLessons: number;
  totalDuration: string;
  levels: CourseLevel[];
  category: 'ai-tools' | 'productivity' | 'creative' | 'business';
}

// Mock Course Data - 9 Courses matching Coursiv
export const courses: Course[] = [
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    subtitle: 'Master conversational AI',
    description: 'Learn how to effectively use ChatGPT for various tasks including writing, coding, analysis, and creative projects.',
    icon: '💬',
    color: '#10A37F',
    totalLessons: 16,
    totalDuration: '2h 30min',
    category: 'ai-tools',
    levels: [
      {
        id: 'chatgpt-beginner',
        title: 'Beginner',
        description: 'Get started with ChatGPT basics',
        unlocked: true,
        modules: [
          { id: 'chatgpt-1-1', title: 'What is ChatGPT?', description: 'Introduction to ChatGPT and how it works', duration: '5 min', type: 'lesson' },
          { id: 'chatgpt-1-2', title: 'Creating Your First Prompt', description: 'Learn the basics of prompt writing', duration: '8 min', type: 'lesson' },
          { id: 'chatgpt-1-3', title: 'Understanding Responses', description: 'How to interpret and refine AI responses', duration: '6 min', type: 'lesson' },
          { id: 'chatgpt-1-4', title: 'Basic Prompt Techniques', description: 'Essential techniques for better results', duration: '10 min', type: 'lesson' },
          { id: 'chatgpt-1-quiz', title: 'Beginner Quiz', description: 'Test your knowledge', duration: '5 min', type: 'quiz' },
        ]
      },
      {
        id: 'chatgpt-intermediate',
        title: 'Intermediate',
        description: 'Advanced prompting techniques',
        unlocked: false,
        modules: [
          { id: 'chatgpt-2-1', title: 'Role-Based Prompting', description: 'Using personas for better responses', duration: '8 min', type: 'lesson' },
          { id: 'chatgpt-2-2', title: 'Chain of Thought', description: 'Breaking down complex problems', duration: '10 min', type: 'lesson' },
          { id: 'chatgpt-2-3', title: 'Few-Shot Learning', description: 'Teaching by example', duration: '8 min', type: 'lesson' },
          { id: 'chatgpt-2-4', title: 'Context Management', description: 'Managing long conversations', duration: '7 min', type: 'lesson' },
          { id: 'chatgpt-2-5', title: 'Writing with ChatGPT', description: 'Content creation techniques', duration: '12 min', type: 'lesson' },
          { id: 'chatgpt-2-quiz', title: 'Intermediate Quiz', description: 'Test your skills', duration: '8 min', type: 'quiz' },
        ]
      },
      {
        id: 'chatgpt-advanced',
        title: 'Advanced',
        description: 'Expert-level techniques',
        unlocked: false,
        modules: [
          { id: 'chatgpt-3-1', title: 'API Integration', description: 'Using ChatGPT in applications', duration: '15 min', type: 'lesson' },
          { id: 'chatgpt-3-2', title: 'Custom Instructions', description: 'Personalizing ChatGPT behavior', duration: '10 min', type: 'lesson' },
          { id: 'chatgpt-3-3', title: 'Plugins & Tools', description: 'Extending ChatGPT capabilities', duration: '12 min', type: 'lesson' },
          { id: 'chatgpt-3-4', title: 'Enterprise Use Cases', description: 'ChatGPT for business', duration: '10 min', type: 'lesson' },
          { id: 'chatgpt-3-quiz', title: 'Advanced Quiz', description: 'Final assessment', duration: '10 min', type: 'quiz' },
        ]
      }
    ]
  },
  {
    id: 'dall-e',
    title: 'DALL-E',
    subtitle: 'AI image generation',
    description: 'Master the art of creating stunning images with DALL-E. Learn prompting techniques for photorealistic and artistic outputs.',
    icon: '🎨',
    color: '#FF6B6B',
    totalLessons: 12,
    totalDuration: '1h 45min',
    category: 'creative',
    levels: [
      {
        id: 'dalle-beginner',
        title: 'Beginner',
        description: 'Introduction to AI image generation',
        unlocked: true,
        modules: [
          { id: 'dalle-1-1', title: 'Introduction to DALL-E', description: 'Understanding AI image generation', duration: '6 min', type: 'lesson' },
          { id: 'dalle-1-2', title: 'Your First Image', description: 'Creating your first AI image', duration: '8 min', type: 'lesson' },
          { id: 'dalle-1-3', title: 'Basic Prompt Structure', description: 'How to describe what you want', duration: '10 min', type: 'lesson' },
          { id: 'dalle-1-quiz', title: 'Beginner Quiz', description: 'Test your knowledge', duration: '5 min', type: 'quiz' },
        ]
      },
      {
        id: 'dalle-intermediate',
        title: 'Intermediate',
        description: 'Advanced image creation',
        unlocked: false,
        modules: [
          { id: 'dalle-2-1', title: 'Style Modifiers', description: 'Controlling artistic style', duration: '10 min', type: 'lesson' },
          { id: 'dalle-2-2', title: 'Composition Techniques', description: 'Arranging elements in images', duration: '12 min', type: 'lesson' },
          { id: 'dalle-2-3', title: 'Lighting & Mood', description: 'Creating atmosphere', duration: '8 min', type: 'lesson' },
          { id: 'dalle-2-4', title: 'Image Editing', description: 'Modifying generated images', duration: '10 min', type: 'lesson' },
          { id: 'dalle-2-quiz', title: 'Intermediate Quiz', description: 'Test your skills', duration: '6 min', type: 'quiz' },
        ]
      },
      {
        id: 'dalle-advanced',
        title: 'Advanced',
        description: 'Professional techniques',
        unlocked: false,
        modules: [
          { id: 'dalle-3-1', title: 'Photorealistic Images', description: 'Creating lifelike images', duration: '12 min', type: 'lesson' },
          { id: 'dalle-3-2', title: 'Brand & Marketing', description: 'Commercial applications', duration: '10 min', type: 'lesson' },
          { id: 'dalle-3-quiz', title: 'Advanced Quiz', description: 'Final assessment', duration: '8 min', type: 'quiz' },
        ]
      }
    ]
  },
  {
    id: 'midjourney',
    title: 'Midjourney',
    subtitle: 'Artistic AI imagery',
    description: 'Create breathtaking artistic images with Midjourney. Learn advanced techniques for stunning visual content.',
    icon: '🖼️',
    color: '#7C3AED',
    totalLessons: 14,
    totalDuration: '2h',
    category: 'creative',
    levels: [
      {
        id: 'mj-beginner',
        title: 'Beginner',
        description: 'Getting started with Midjourney',
        unlocked: true,
        modules: [
          { id: 'mj-1-1', title: 'What is Midjourney?', description: 'Introduction to Midjourney', duration: '5 min', type: 'lesson' },
          { id: 'mj-1-2', title: 'Discord Setup', description: 'Setting up your workspace', duration: '8 min', type: 'lesson' },
          { id: 'mj-1-3', title: 'Basic Commands', description: 'Essential Midjourney commands', duration: '10 min', type: 'lesson' },
          { id: 'mj-1-4', title: 'Your First Creation', description: 'Creating your first image', duration: '8 min', type: 'lesson' },
          { id: 'mj-1-quiz', title: 'Beginner Quiz', description: 'Test your knowledge', duration: '5 min', type: 'quiz' },
        ]
      },
      {
        id: 'mj-intermediate',
        title: 'Intermediate',
        description: 'Advanced techniques',
        unlocked: false,
        modules: [
          { id: 'mj-2-1', title: 'Parameters Deep Dive', description: 'Understanding all parameters', duration: '12 min', type: 'lesson' },
          { id: 'mj-2-2', title: 'Style References', description: 'Using reference images', duration: '10 min', type: 'lesson' },
          { id: 'mj-2-3', title: 'Aspect Ratios', description: 'Creating different formats', duration: '8 min', type: 'lesson' },
          { id: 'mj-2-4', title: 'Variations & Upscaling', description: 'Refining your images', duration: '10 min', type: 'lesson' },
          { id: 'mj-2-quiz', title: 'Intermediate Quiz', description: 'Test your skills', duration: '6 min', type: 'quiz' },
        ]
      },
      {
        id: 'mj-advanced',
        title: 'Advanced',
        description: 'Master-level techniques',
        unlocked: false,
        modules: [
          { id: 'mj-3-1', title: 'Multi-Prompting', description: 'Complex prompt structures', duration: '12 min', type: 'lesson' },
          { id: 'mj-3-2', title: 'Consistent Characters', description: 'Creating character consistency', duration: '15 min', type: 'lesson' },
          { id: 'mj-3-3', title: 'Commercial Projects', description: 'Professional workflows', duration: '10 min', type: 'lesson' },
          { id: 'mj-3-quiz', title: 'Advanced Quiz', description: 'Final assessment', duration: '8 min', type: 'quiz' },
        ]
      }
    ]
  },
  {
    id: 'claude',
    title: 'Claude',
    subtitle: 'Anthropic\'s AI assistant',
    description: 'Learn to use Claude for analysis, writing, and complex reasoning tasks. Discover its unique capabilities.',
    icon: '🤖',
    color: '#D97706',
    totalLessons: 10,
    totalDuration: '1h 30min',
    category: 'ai-tools',
    levels: [
      {
        id: 'claude-beginner',
        title: 'Beginner',
        description: 'Introduction to Claude',
        unlocked: true,
        modules: [
          { id: 'claude-1-1', title: 'Meet Claude', description: 'What makes Claude different', duration: '6 min', type: 'lesson' },
          { id: 'claude-1-2', title: 'Basic Conversations', description: 'Effective communication with Claude', duration: '8 min', type: 'lesson' },
          { id: 'claude-1-3', title: 'Analysis Tasks', description: 'Using Claude for analysis', duration: '10 min', type: 'lesson' },
          { id: 'claude-1-quiz', title: 'Beginner Quiz', description: 'Test your knowledge', duration: '5 min', type: 'quiz' },
        ]
      },
      {
        id: 'claude-intermediate',
        title: 'Intermediate',
        description: 'Advanced Claude usage',
        unlocked: false,
        modules: [
          { id: 'claude-2-1', title: 'Long Document Analysis', description: 'Working with large texts', duration: '12 min', type: 'lesson' },
          { id: 'claude-2-2', title: 'Code Review', description: 'Using Claude for coding', duration: '10 min', type: 'lesson' },
          { id: 'claude-2-3', title: 'Research Assistant', description: 'Claude as research partner', duration: '12 min', type: 'lesson' },
          { id: 'claude-2-quiz', title: 'Intermediate Quiz', description: 'Test your skills', duration: '6 min', type: 'quiz' },
        ]
      },
      {
        id: 'claude-advanced',
        title: 'Advanced',
        description: 'Expert techniques',
        unlocked: false,
        modules: [
          { id: 'claude-3-1', title: 'API Integration', description: 'Building with Claude API', duration: '15 min', type: 'lesson' },
          { id: 'claude-3-2', title: 'Enterprise Applications', description: 'Claude for business', duration: '10 min', type: 'lesson' },
          { id: 'claude-3-quiz', title: 'Advanced Quiz', description: 'Final assessment', duration: '8 min', type: 'quiz' },
        ]
      }
    ]
  },
  {
    id: 'gemini',
    title: 'Gemini',
    subtitle: 'Google\'s multimodal AI',
    description: 'Explore Google\'s Gemini AI for text, image, and code tasks. Learn its unique multimodal capabilities.',
    icon: '✨',
    color: '#4285F4',
    totalLessons: 10,
    totalDuration: '1h 20min',
    category: 'ai-tools',
    levels: [
      {
        id: 'gemini-beginner',
        title: 'Beginner',
        description: 'Getting started with Gemini',
        unlocked: true,
        modules: [
          { id: 'gemini-1-1', title: 'Introduction to Gemini', description: 'Understanding Gemini\'s capabilities', duration: '6 min', type: 'lesson' },
          { id: 'gemini-1-2', title: 'Text Generation', description: 'Creating content with Gemini', duration: '8 min', type: 'lesson' },
          { id: 'gemini-1-3', title: 'Image Understanding', description: 'Multimodal capabilities', duration: '10 min', type: 'lesson' },
          { id: 'gemini-1-quiz', title: 'Beginner Quiz', description: 'Test your knowledge', duration: '5 min', type: 'quiz' },
        ]
      },
      {
        id: 'gemini-intermediate',
        title: 'Intermediate',
        description: 'Advanced features',
        unlocked: false,
        modules: [
          { id: 'gemini-2-1', title: 'Code Generation', description: 'Programming with Gemini', duration: '12 min', type: 'lesson' },
          { id: 'gemini-2-2', title: 'Data Analysis', description: 'Analyzing data with AI', duration: '10 min', type: 'lesson' },
          { id: 'gemini-2-3', title: 'Google Integration', description: 'Using with Google tools', duration: '8 min', type: 'lesson' },
          { id: 'gemini-2-quiz', title: 'Intermediate Quiz', description: 'Test your skills', duration: '6 min', type: 'quiz' },
        ]
      }
    ]
  },
  {
    id: 'perplexity',
    title: 'Perplexity',
    subtitle: 'AI-powered search',
    description: 'Master Perplexity for research and information gathering. Learn to get accurate, sourced answers.',
    icon: '🔍',
    color: '#22C55E',
    totalLessons: 8,
    totalDuration: '1h',
    category: 'productivity',
    levels: [
      {
        id: 'perplexity-beginner',
        title: 'Beginner',
        description: 'Introduction to Perplexity',
        unlocked: true,
        modules: [
          { id: 'perplexity-1-1', title: 'What is Perplexity?', description: 'AI-powered search explained', duration: '5 min', type: 'lesson' },
          { id: 'perplexity-1-2', title: 'Basic Searches', description: 'Getting started with queries', duration: '8 min', type: 'lesson' },
          { id: 'perplexity-1-3', title: 'Understanding Sources', description: 'Evaluating AI responses', duration: '8 min', type: 'lesson' },
          { id: 'perplexity-1-quiz', title: 'Beginner Quiz', description: 'Test your knowledge', duration: '5 min', type: 'quiz' },
        ]
      },
      {
        id: 'perplexity-intermediate',
        title: 'Intermediate',
        description: 'Advanced research',
        unlocked: false,
        modules: [
          { id: 'perplexity-2-1', title: 'Focus Modes', description: 'Specialized search modes', duration: '10 min', type: 'lesson' },
          { id: 'perplexity-2-2', title: 'Research Workflows', description: 'Efficient research methods', duration: '12 min', type: 'lesson' },
          { id: 'perplexity-2-3', title: 'Pro Features', description: 'Advanced capabilities', duration: '10 min', type: 'lesson' },
          { id: 'perplexity-2-quiz', title: 'Intermediate Quiz', description: 'Test your skills', duration: '6 min', type: 'quiz' },
        ]
      }
    ]
  },
  {
    id: 'copilot',
    title: 'GitHub Copilot',
    subtitle: 'AI pair programmer',
    description: 'Boost your coding productivity with GitHub Copilot. Learn to leverage AI for faster development.',
    icon: '💻',
    color: '#6366F1',
    totalLessons: 12,
    totalDuration: '1h 45min',
    category: 'productivity',
    levels: [
      {
        id: 'copilot-beginner',
        title: 'Beginner',
        description: 'Getting started with Copilot',
        unlocked: true,
        modules: [
          { id: 'copilot-1-1', title: 'Introduction to Copilot', description: 'What is GitHub Copilot', duration: '6 min', type: 'lesson' },
          { id: 'copilot-1-2', title: 'Setup & Installation', description: 'Getting Copilot running', duration: '10 min', type: 'lesson' },
          { id: 'copilot-1-3', title: 'Basic Completions', description: 'Understanding suggestions', duration: '8 min', type: 'lesson' },
          { id: 'copilot-1-4', title: 'Comment-Driven Development', description: 'Using comments effectively', duration: '10 min', type: 'lesson' },
          { id: 'copilot-1-quiz', title: 'Beginner Quiz', description: 'Test your knowledge', duration: '5 min', type: 'quiz' },
        ]
      },
      {
        id: 'copilot-intermediate',
        title: 'Intermediate',
        description: 'Advanced Copilot usage',
        unlocked: false,
        modules: [
          { id: 'copilot-2-1', title: 'Copilot Chat', description: 'Interactive coding assistance', duration: '12 min', type: 'lesson' },
          { id: 'copilot-2-2', title: 'Test Generation', description: 'Writing tests with AI', duration: '10 min', type: 'lesson' },
          { id: 'copilot-2-3', title: 'Code Refactoring', description: 'Improving code quality', duration: '12 min', type: 'lesson' },
          { id: 'copilot-2-4', title: 'Documentation', description: 'Auto-generating docs', duration: '8 min', type: 'lesson' },
          { id: 'copilot-2-quiz', title: 'Intermediate Quiz', description: 'Test your skills', duration: '6 min', type: 'quiz' },
        ]
      },
      {
        id: 'copilot-advanced',
        title: 'Advanced',
        description: 'Expert techniques',
        unlocked: false,
        modules: [
          { id: 'copilot-3-1', title: 'Enterprise Features', description: 'Copilot for teams', duration: '10 min', type: 'lesson' },
          { id: 'copilot-3-2', title: 'Security Best Practices', description: 'Safe AI coding', duration: '12 min', type: 'lesson' },
          { id: 'copilot-3-quiz', title: 'Advanced Quiz', description: 'Final assessment', duration: '8 min', type: 'quiz' },
        ]
      }
    ]
  },
  {
    id: 'stable-diffusion',
    title: 'Stable Diffusion',
    subtitle: 'Open-source image AI',
    description: 'Learn Stable Diffusion for local image generation. Master models, LoRAs, and advanced techniques.',
    icon: '🎭',
    color: '#EC4899',
    totalLessons: 14,
    totalDuration: '2h 15min',
    category: 'creative',
    levels: [
      {
        id: 'sd-beginner',
        title: 'Beginner',
        description: 'Introduction to Stable Diffusion',
        unlocked: true,
        modules: [
          { id: 'sd-1-1', title: 'What is Stable Diffusion?', description: 'Understanding the technology', duration: '8 min', type: 'lesson' },
          { id: 'sd-1-2', title: 'Online Interfaces', description: 'Using SD without installation', duration: '10 min', type: 'lesson' },
          { id: 'sd-1-3', title: 'Basic Prompting', description: 'Creating your first images', duration: '12 min', type: 'lesson' },
          { id: 'sd-1-4', title: 'Negative Prompts', description: 'What to avoid in images', duration: '8 min', type: 'lesson' },
          { id: 'sd-1-quiz', title: 'Beginner Quiz', description: 'Test your knowledge', duration: '5 min', type: 'quiz' },
        ]
      },
      {
        id: 'sd-intermediate',
        title: 'Intermediate',
        description: 'Local installation & models',
        unlocked: false,
        modules: [
          { id: 'sd-2-1', title: 'Local Installation', description: 'Setting up on your computer', duration: '15 min', type: 'lesson' },
          { id: 'sd-2-2', title: 'Understanding Models', description: 'Checkpoints and their uses', duration: '12 min', type: 'lesson' },
          { id: 'sd-2-3', title: 'LoRAs & Embeddings', description: 'Fine-tuning outputs', duration: '12 min', type: 'lesson' },
          { id: 'sd-2-4', title: 'ControlNet Basics', description: 'Precise image control', duration: '15 min', type: 'lesson' },
          { id: 'sd-2-quiz', title: 'Intermediate Quiz', description: 'Test your skills', duration: '6 min', type: 'quiz' },
        ]
      },
      {
        id: 'sd-advanced',
        title: 'Advanced',
        description: 'Professional workflows',
        unlocked: false,
        modules: [
          { id: 'sd-3-1', title: 'ComfyUI Workflows', description: 'Node-based generation', duration: '15 min', type: 'lesson' },
          { id: 'sd-3-2', title: 'Training LoRAs', description: 'Creating custom models', duration: '20 min', type: 'lesson' },
          { id: 'sd-3-3', title: 'Animation & Video', description: 'Moving images with SD', duration: '15 min', type: 'lesson' },
          { id: 'sd-3-quiz', title: 'Advanced Quiz', description: 'Final assessment', duration: '8 min', type: 'quiz' },
        ]
      }
    ]
  },
  {
    id: 'notion-ai',
    title: 'Notion AI',
    subtitle: 'AI-powered productivity',
    description: 'Supercharge your Notion workspace with AI. Learn to automate, summarize, and create content.',
    icon: '📝',
    color: '#000000',
    totalLessons: 8,
    totalDuration: '1h',
    category: 'productivity',
    levels: [
      {
        id: 'notion-beginner',
        title: 'Beginner',
        description: 'Getting started with Notion AI',
        unlocked: true,
        modules: [
          { id: 'notion-1-1', title: 'Introduction to Notion AI', description: 'AI features overview', duration: '6 min', type: 'lesson' },
          { id: 'notion-1-2', title: 'Writing Assistant', description: 'AI-powered writing', duration: '10 min', type: 'lesson' },
          { id: 'notion-1-3', title: 'Summarization', description: 'Condensing information', duration: '8 min', type: 'lesson' },
          { id: 'notion-1-quiz', title: 'Beginner Quiz', description: 'Test your knowledge', duration: '5 min', type: 'quiz' },
        ]
      },
      {
        id: 'notion-intermediate',
        title: 'Intermediate',
        description: 'Advanced Notion AI',
        unlocked: false,
        modules: [
          { id: 'notion-2-1', title: 'Database AI', description: 'AI with Notion databases', duration: '12 min', type: 'lesson' },
          { id: 'notion-2-2', title: 'Templates & Automation', description: 'AI-powered workflows', duration: '10 min', type: 'lesson' },
          { id: 'notion-2-3', title: 'Team Collaboration', description: 'AI for teams', duration: '10 min', type: 'lesson' },
          { id: 'notion-2-quiz', title: 'Intermediate Quiz', description: 'Test your skills', duration: '6 min', type: 'quiz' },
        ]
      }
    ]
  }
];

// Helper function to get course by ID
export function getCourseById(id: string): Course | undefined {
  return courses.find(c => c.id === id);
}

// Helper function to get all modules for a course
export function getCourseModules(courseId: string): CourseModule[] {
  const course = getCourseById(courseId);
  if (!course) return [];
  return course.levels.flatMap(level => level.modules);
}

// Helper function to calculate course progress
export function calculateCourseProgress(courseId: string, completedModuleIds: string[]): number {
  const modules = getCourseModules(courseId);
  if (modules.length === 0) return 0;
  const completed = modules.filter(m => completedModuleIds.includes(m.id)).length;
  return Math.round((completed / modules.length) * 100);
}
