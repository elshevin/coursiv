// Challenge data structure
export interface ChallengeTask {
  id: string;
  day: number;
  title: string;
  description: string;
  duration: string;
  type: 'lesson' | 'quiz' | 'practice';
  courseId?: string;
  moduleId?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  totalDays: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  image: string;
  icon: string;
  currentDay: number;
  tasks: ChallengeTask[];
}

// 4 Challenges with daily tasks - All tasks linked to course modules
export const challengeData: Challenge[] = [
  {
    id: 'ai-reinvention-2026',
    title: 'AI Reinvention 2026 Challenge',
    description: 'Master the latest AI tools and transform your workflow in 28 days. Learn DeepSeek, ChatGPT, Claude, and more.',
    totalDays: 28,
    difficulty: 'Beginner',
    category: 'AI Fundamentals',
    image: '/images/course/covers/deepseek-cover.png',
    icon: '🚀',
    currentDay: 12,
    tasks: [
      // Week 1: AI Basics
      { id: 'air-d1', day: 1, title: 'Introduction to DeepSeek', description: 'Learn the basics of DeepSeek AI', duration: '15 min', type: 'lesson', courseId: 'deepseek', moduleId: 'deepseek-1-1' },
      { id: 'air-d2', day: 2, title: 'ChatGPT Fundamentals', description: 'Master ChatGPT basics', duration: '20 min', type: 'lesson', courseId: 'chatgpt', moduleId: 'chatgpt-1-1' },
      { id: 'air-d3', day: 3, title: 'Prompting Basics', description: 'Learn effective prompting techniques', duration: '15 min', type: 'lesson', courseId: 'chatgpt', moduleId: 'chatgpt-1-2' },
      { id: 'air-d4', day: 4, title: 'Day 4 Quiz', description: 'Test your knowledge', duration: '10 min', type: 'quiz', courseId: 'chatgpt', moduleId: 'chatgpt-1-quiz' },
      { id: 'air-d5', day: 5, title: 'Claude Introduction', description: 'Discover Claude AI capabilities', duration: '15 min', type: 'lesson', courseId: 'claude', moduleId: 'claude-1-1' },
      { id: 'air-d6', day: 6, title: 'AI for Writing', description: 'Use AI to improve your writing', duration: '20 min', type: 'lesson', courseId: 'claude', moduleId: 'claude-1-2' },
      { id: 'air-d7', day: 7, title: 'Week 1 Review', description: 'Practice what you learned', duration: '25 min', type: 'practice', courseId: 'claude', moduleId: 'claude-1-3' },
      // Week 2: Image Generation
      { id: 'air-d8', day: 8, title: 'Advanced Prompting', description: 'Master advanced prompt techniques', duration: '20 min', type: 'lesson', courseId: 'chatgpt', moduleId: 'chatgpt-2-1' },
      { id: 'air-d9', day: 9, title: 'AI Image Generation', description: 'Create images with AI', duration: '15 min', type: 'lesson', courseId: 'dalle', moduleId: 'dalle-1-1' },
      { id: 'air-d10', day: 10, title: 'DALL-E Basics', description: 'Learn DALL-E fundamentals', duration: '20 min', type: 'lesson', courseId: 'dalle', moduleId: 'dalle-1-2' },
      { id: 'air-d11', day: 11, title: 'Day 11 Quiz', description: 'Test your image AI knowledge', duration: '10 min', type: 'quiz', courseId: 'dalle', moduleId: 'dalle-1-quiz' },
      { id: 'air-d12', day: 12, title: 'Midjourney Introduction', description: 'Explore Midjourney', duration: '15 min', type: 'lesson', courseId: 'midjourney', moduleId: 'mj-1-1' },
      { id: 'air-d13', day: 13, title: 'Midjourney Prompts', description: 'Master Midjourney prompts', duration: '20 min', type: 'lesson', courseId: 'midjourney', moduleId: 'mj-1-2' },
      { id: 'air-d14', day: 14, title: 'Week 2 Review', description: 'Practice and consolidate', duration: '25 min', type: 'practice', courseId: 'midjourney', moduleId: 'mj-1-3' },
      // Week 3: Productivity & Automation
      { id: 'air-d15', day: 15, title: 'AI Automation', description: 'Automate tasks with AI', duration: '20 min', type: 'lesson', courseId: 'copilot', moduleId: 'copilot-1-1' },
      { id: 'air-d16', day: 16, title: 'AI for Productivity', description: 'Boost productivity with AI', duration: '15 min', type: 'lesson', courseId: 'copilot', moduleId: 'copilot-1-2' },
      { id: 'air-d17', day: 17, title: 'AI Coding Assistants', description: 'Use AI for coding', duration: '20 min', type: 'lesson', courseId: 'copilot', moduleId: 'copilot-1-3' },
      { id: 'air-d18', day: 18, title: 'Day 18 Quiz', description: 'Test your automation knowledge', duration: '10 min', type: 'quiz', courseId: 'copilot', moduleId: 'copilot-1-quiz' },
      { id: 'air-d19', day: 19, title: 'Notion AI Basics', description: 'Learn Notion AI features', duration: '15 min', type: 'lesson', courseId: 'notion-ai', moduleId: 'notion-1-1' },
      { id: 'air-d20', day: 20, title: 'AI for Note-Taking', description: 'Enhance notes with AI', duration: '15 min', type: 'lesson', courseId: 'notion-ai', moduleId: 'notion-1-2' },
      { id: 'air-d21', day: 21, title: 'Week 3 Review', description: 'Practice and review', duration: '25 min', type: 'practice', courseId: 'notion-ai', moduleId: 'notion-1-3' },
      // Week 4: Advanced Topics
      { id: 'air-d22', day: 22, title: 'Building AI Workflows', description: 'Create AI-powered workflows', duration: '20 min', type: 'lesson', courseId: 'gemini', moduleId: 'gemini-1-1' },
      { id: 'air-d23', day: 23, title: 'AI Integration', description: 'Integrate AI into your tools', duration: '20 min', type: 'lesson', courseId: 'gemini', moduleId: 'gemini-1-2' },
      { id: 'air-d24', day: 24, title: 'Perplexity for Research', description: 'Research with Perplexity AI', duration: '15 min', type: 'lesson', courseId: 'perplexity', moduleId: 'perplexity-1-1' },
      { id: 'air-d25', day: 25, title: 'Day 25 Quiz', description: 'Final knowledge check', duration: '15 min', type: 'quiz', courseId: 'perplexity', moduleId: 'perplexity-1-quiz' },
      { id: 'air-d26', day: 26, title: 'AI Future Trends', description: 'Explore upcoming AI trends', duration: '15 min', type: 'lesson', courseId: 'deepseek', moduleId: 'deepseek-2-1' },
      { id: 'air-d27', day: 27, title: 'Personal AI Strategy', description: 'Create your AI strategy', duration: '20 min', type: 'practice', courseId: 'deepseek', moduleId: 'deepseek-2-2' },
      { id: 'air-d28', day: 28, title: 'Challenge Completion', description: 'Celebrate and review', duration: '15 min', type: 'practice', courseId: 'deepseek', moduleId: 'deepseek-2-3' },
    ]
  },
  {
    id: 'junior-ai-challenge',
    title: 'Junior AI Challenge',
    description: 'Perfect for beginners! Start your AI journey with easy-to-follow lessons and hands-on practice.',
    totalDays: 28,
    difficulty: 'Beginner',
    category: 'Getting Started',
    image: '/images/course/covers/chatgpt-cover.png',
    icon: '🌟',
    currentDay: 3,
    tasks: [
      // Week 1: Introduction to AI
      { id: 'jac-d1', day: 1, title: 'What is AI?', description: 'Introduction to artificial intelligence', duration: '10 min', type: 'lesson', courseId: 'chatgpt', moduleId: 'chatgpt-1-1' },
      { id: 'jac-d2', day: 2, title: 'ChatGPT Basics', description: 'Your first ChatGPT conversation', duration: '15 min', type: 'lesson', courseId: 'chatgpt', moduleId: 'chatgpt-1-2' },
      { id: 'jac-d3', day: 3, title: 'Asking Good Questions', description: 'Learn to prompt effectively', duration: '15 min', type: 'lesson', courseId: 'chatgpt', moduleId: 'chatgpt-1-3' },
      { id: 'jac-d4', day: 4, title: 'Day 4 Practice', description: 'Practice your prompting skills', duration: '20 min', type: 'practice', courseId: 'chatgpt', moduleId: 'chatgpt-1-4' },
      { id: 'jac-d5', day: 5, title: 'AI for Homework', description: 'Use AI to help with studies', duration: '15 min', type: 'lesson', courseId: 'claude', moduleId: 'claude-1-1' },
      { id: 'jac-d6', day: 6, title: 'AI for Creative Writing', description: 'Write stories with AI', duration: '20 min', type: 'lesson', courseId: 'claude', moduleId: 'claude-1-2' },
      { id: 'jac-d7', day: 7, title: 'Week 1 Quiz', description: 'Test your knowledge', duration: '10 min', type: 'quiz', courseId: 'chatgpt', moduleId: 'chatgpt-1-quiz' },
      // Week 2: AI Images
      { id: 'jac-d8', day: 8, title: 'Image AI Introduction', description: 'Learn about AI images', duration: '15 min', type: 'lesson', courseId: 'dalle', moduleId: 'dalle-1-1' },
      { id: 'jac-d9', day: 9, title: 'Creating AI Art', description: 'Make your first AI image', duration: '20 min', type: 'practice', courseId: 'dalle', moduleId: 'dalle-1-2' },
      { id: 'jac-d10', day: 10, title: 'AI Safety', description: 'Stay safe with AI', duration: '10 min', type: 'lesson', courseId: 'dalle', moduleId: 'dalle-1-3' },
      { id: 'jac-d11', day: 11, title: 'AI vs Human', description: 'Understanding AI limitations', duration: '15 min', type: 'lesson', courseId: 'gemini', moduleId: 'gemini-1-1' },
      { id: 'jac-d12', day: 12, title: 'Day 12 Practice', description: 'Hands-on AI practice', duration: '20 min', type: 'practice', courseId: 'gemini', moduleId: 'gemini-1-2' },
      { id: 'jac-d13', day: 13, title: 'AI for Research', description: 'Research with AI help', duration: '15 min', type: 'lesson', courseId: 'perplexity', moduleId: 'perplexity-1-1' },
      { id: 'jac-d14', day: 14, title: 'Week 2 Quiz', description: 'Mid-challenge quiz', duration: '10 min', type: 'quiz', courseId: 'dalle', moduleId: 'dalle-1-quiz' },
      // Week 3: Different AI Tools
      { id: 'jac-d15', day: 15, title: 'AI Tools Overview', description: 'Explore different AI tools', duration: '15 min', type: 'lesson', courseId: 'perplexity', moduleId: 'perplexity-1-2' },
      { id: 'jac-d16', day: 16, title: 'Comparing AI Tools', description: 'ChatGPT vs Claude vs Others', duration: '20 min', type: 'lesson', courseId: 'perplexity', moduleId: 'perplexity-1-3' },
      { id: 'jac-d17', day: 17, title: 'AI for Presentations', description: 'Create presentations with AI', duration: '20 min', type: 'practice', courseId: 'notion-ai', moduleId: 'notion-1-1' },
      { id: 'jac-d18', day: 18, title: 'AI for Summarizing', description: 'Summarize content with AI', duration: '15 min', type: 'lesson', courseId: 'notion-ai', moduleId: 'notion-1-2' },
      { id: 'jac-d19', day: 19, title: 'Day 19 Practice', description: 'Practice summarization', duration: '20 min', type: 'practice', courseId: 'notion-ai', moduleId: 'notion-1-3' },
      { id: 'jac-d20', day: 20, title: 'AI for Translation', description: 'Translate with AI', duration: '15 min', type: 'lesson', courseId: 'deepseek', moduleId: 'deepseek-1-1' },
      { id: 'jac-d21', day: 21, title: 'Week 3 Quiz', description: 'Knowledge check', duration: '10 min', type: 'quiz', courseId: 'perplexity', moduleId: 'perplexity-1-quiz' },
      // Week 4: Projects
      { id: 'jac-d22', day: 22, title: 'Building AI Projects', description: 'Start your AI project', duration: '25 min', type: 'practice', courseId: 'deepseek', moduleId: 'deepseek-1-2' },
      { id: 'jac-d23', day: 23, title: 'AI Project Day 2', description: 'Continue your project', duration: '25 min', type: 'practice', courseId: 'deepseek', moduleId: 'deepseek-1-3' },
      { id: 'jac-d24', day: 24, title: 'AI Project Day 3', description: 'Finish your project', duration: '25 min', type: 'practice', courseId: 'copilot', moduleId: 'copilot-1-1' },
      { id: 'jac-d25', day: 25, title: 'Sharing AI Work', description: 'Present your AI project', duration: '15 min', type: 'practice', courseId: 'copilot', moduleId: 'copilot-1-2' },
      { id: 'jac-d26', day: 26, title: 'AI Future', description: 'What\'s next in AI', duration: '15 min', type: 'lesson', courseId: 'gemini', moduleId: 'gemini-1-3' },
      { id: 'jac-d27', day: 27, title: 'Final Review', description: 'Review all you learned', duration: '20 min', type: 'practice', courseId: 'chatgpt', moduleId: 'chatgpt-2-1' },
      { id: 'jac-d28', day: 28, title: 'Challenge Complete!', description: 'Celebrate your achievement', duration: '10 min', type: 'practice', courseId: 'chatgpt', moduleId: 'chatgpt-2-2' },
    ]
  },
  {
    id: 'ai-side-gigs',
    title: '14-Day AI Side Gigs Challenge',
    description: 'Learn how to earn money using AI tools. Discover freelancing opportunities and build your AI-powered side business.',
    totalDays: 14,
    difficulty: 'Intermediate',
    category: 'Business',
    image: '/images/course/covers/midjourney-cover.png',
    icon: '💰',
    currentDay: 0,
    tasks: [
      // Week 1: Foundations
      { id: 'asg-d1', day: 1, title: 'Freelancing with AI', description: 'Introduction to AI freelancing', duration: '20 min', type: 'lesson', courseId: 'chatgpt', moduleId: 'chatgpt-2-1' },
      { id: 'asg-d2', day: 2, title: 'AI Writing Services', description: 'Offer AI-powered writing', duration: '25 min', type: 'lesson', courseId: 'chatgpt', moduleId: 'chatgpt-2-2' },
      { id: 'asg-d3', day: 3, title: 'Setting Up Your Profile', description: 'Create your freelancer profile', duration: '30 min', type: 'practice', courseId: 'chatgpt', moduleId: 'chatgpt-2-3' },
      { id: 'asg-d4', day: 4, title: 'AI Image Services', description: 'Sell AI-generated images', duration: '25 min', type: 'lesson', courseId: 'midjourney', moduleId: 'mj-2-1' },
      { id: 'asg-d5', day: 5, title: 'Pricing Your Services', description: 'How to price AI work', duration: '20 min', type: 'lesson', courseId: 'midjourney', moduleId: 'mj-2-2' },
      { id: 'asg-d6', day: 6, title: 'Week 1 Quiz', description: 'Test your knowledge', duration: '10 min', type: 'quiz', courseId: 'chatgpt', moduleId: 'chatgpt-2-quiz' },
      { id: 'asg-d7', day: 7, title: 'Finding Clients', description: 'Where to find AI work', duration: '25 min', type: 'lesson', courseId: 'chatgpt', moduleId: 'chatgpt-2-4' },
      // Week 2: Scaling
      { id: 'asg-d8', day: 8, title: 'AI Consulting', description: 'Become an AI consultant', duration: '25 min', type: 'lesson', courseId: 'claude', moduleId: 'claude-2-1' },
      { id: 'asg-d9', day: 9, title: 'Building a Portfolio', description: 'Showcase your AI work', duration: '30 min', type: 'practice', courseId: 'claude', moduleId: 'claude-2-2' },
      { id: 'asg-d10', day: 10, title: 'AI Automation Services', description: 'Offer automation services', duration: '25 min', type: 'lesson', courseId: 'copilot', moduleId: 'copilot-2-1' },
      { id: 'asg-d11', day: 11, title: 'Client Communication', description: 'Work with clients effectively', duration: '20 min', type: 'lesson', courseId: 'copilot', moduleId: 'copilot-2-2' },
      { id: 'asg-d12', day: 12, title: 'Scaling Your Business', description: 'Grow your AI side gig', duration: '25 min', type: 'lesson', courseId: 'copilot', moduleId: 'copilot-2-3' },
      { id: 'asg-d13', day: 13, title: 'Final Quiz', description: 'Complete knowledge check', duration: '15 min', type: 'quiz', courseId: 'copilot', moduleId: 'copilot-2-quiz' },
      { id: 'asg-d14', day: 14, title: 'Launch Your Business', description: 'Start earning with AI', duration: '30 min', type: 'practice', courseId: 'copilot', moduleId: 'copilot-2-4' },
    ]
  },
  {
    id: 'no-code-challenge',
    title: 'No Code Challenge',
    description: 'Build apps and automations without writing code. Learn to use AI-powered no-code tools to create real products.',
    totalDays: 14,
    difficulty: 'Beginner',
    category: 'Development',
    image: '/images/course/covers/copilot-cover.png',
    icon: '🛠️',
    currentDay: 0,
    tasks: [
      // Week 1: Basics
      { id: 'ncc-d1', day: 1, title: 'Intro to No-Code', description: 'What is no-code development', duration: '15 min', type: 'lesson', courseId: 'notion-ai', moduleId: 'notion-1-1' },
      { id: 'ncc-d2', day: 2, title: 'No-Code Tools Overview', description: 'Explore popular no-code tools', duration: '20 min', type: 'lesson', courseId: 'notion-ai', moduleId: 'notion-1-2' },
      { id: 'ncc-d3', day: 3, title: 'Building Your First App', description: 'Create a simple app', duration: '30 min', type: 'practice', courseId: 'notion-ai', moduleId: 'notion-1-3' },
      { id: 'ncc-d4', day: 4, title: 'AI + No-Code', description: 'Combine AI with no-code', duration: '25 min', type: 'lesson', courseId: 'copilot', moduleId: 'copilot-1-1' },
      { id: 'ncc-d5', day: 5, title: 'Automations Basics', description: 'Create your first automation', duration: '25 min', type: 'practice', courseId: 'copilot', moduleId: 'copilot-1-2' },
      { id: 'ncc-d6', day: 6, title: 'Week 1 Quiz', description: 'Test your knowledge', duration: '10 min', type: 'quiz', courseId: 'notion-ai', moduleId: 'notion-1-quiz' },
      { id: 'ncc-d7', day: 7, title: 'Advanced Automations', description: 'Complex automation workflows', duration: '30 min', type: 'lesson', courseId: 'copilot', moduleId: 'copilot-1-3' },
      // Week 2: Advanced
      { id: 'ncc-d8', day: 8, title: 'Database Basics', description: 'Work with no-code databases', duration: '25 min', type: 'lesson', courseId: 'notion-ai', moduleId: 'notion-2-1' },
      { id: 'ncc-d9', day: 9, title: 'Building a Dashboard', description: 'Create a data dashboard', duration: '30 min', type: 'practice', courseId: 'notion-ai', moduleId: 'notion-2-2' },
      { id: 'ncc-d10', day: 10, title: 'API Integrations', description: 'Connect to external services', duration: '25 min', type: 'lesson', courseId: 'copilot', moduleId: 'copilot-2-1' },
      { id: 'ncc-d11', day: 11, title: 'User Authentication', description: 'Add login to your app', duration: '25 min', type: 'lesson', courseId: 'copilot', moduleId: 'copilot-2-2' },
      { id: 'ncc-d12', day: 12, title: 'Deploying Your App', description: 'Launch your no-code app', duration: '20 min', type: 'practice', courseId: 'copilot', moduleId: 'copilot-2-3' },
      { id: 'ncc-d13', day: 13, title: 'Final Quiz', description: 'Complete knowledge check', duration: '15 min', type: 'quiz', courseId: 'notion-ai', moduleId: 'notion-2-quiz' },
      { id: 'ncc-d14', day: 14, title: 'Challenge Complete', description: 'Review and celebrate', duration: '15 min', type: 'practice', courseId: 'notion-ai', moduleId: 'notion-2-3' },
    ]
  }
];

// Helper function to get challenge by ID
export function getChallengeById(id: string): Challenge | undefined {
  return challengeData.find(c => c.id === id);
}

// Helper function to get task by challenge and day
export function getTaskByDay(challengeId: string, day: number): ChallengeTask | undefined {
  const challenge = getChallengeById(challengeId);
  return challenge?.tasks.find(t => t.day === day);
}
