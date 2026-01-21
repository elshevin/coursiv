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
  startDate: string | null; // ISO date string when user started the challenge, null if not started
  tasks: ChallengeTask[];
}

// Helper function to calculate current day based on start date
export function calculateCurrentDay(startDate: string | null, totalDays: number): number {
  if (!startDate) return 0;
  
  const start = new Date(startDate);
  const now = new Date();
  
  // Reset time to midnight for accurate day calculation
  start.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  
  const diffTime = now.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 because day 1 is the start day
  
  // Return 0 if not started yet, or cap at totalDays if challenge is complete
  if (diffDays < 1) return 0;
  if (diffDays > totalDays) return totalDays;
  return diffDays;
}

// Helper function to get challenge with computed currentDay
export function getChallengeWithProgress(challenge: Challenge): Challenge & { currentDay: number } {
  return {
    ...challenge,
    currentDay: calculateCurrentDay(challenge.startDate, challenge.totalDays)
  };
}

// Get all challenges with computed progress
export function getAllChallengesWithProgress(): (Challenge & { currentDay: number })[] {
  return challengeData.map(getChallengeWithProgress);
}

// 4 Challenges with daily tasks - All tasks linked to course modules
// startDate is set to actual dates for active challenges
export const challengeData: Challenge[] = [
  {
    id: 'ai-reinvention-2026',
    title: 'AI Reinvention 2026 Challenge',
    description: 'Master the latest AI tools and transform your workflow in 28 days. Learn DeepSeek, ChatGPT, Claude, and more.',
    totalDays: 28,
    difficulty: 'Beginner',
    category: 'AI Fundamentals',
    image: '/images/course/covers/deepseek-cover.jpg',
    icon: '🚀',
    startDate: '2026-01-10', // Started on Jan 10, 2026
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
    image: '/images/course/covers/chatgpt-cover.jpg',
    icon: '🌟',
    startDate: '2026-01-19', // Started on Jan 19, 2026
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
    image: '/images/course/covers/midjourney-cover.jpg',
    icon: '💰',
    startDate: null, // Not started yet
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
      { id: 'asg-d8', day: 8, title: 'Building a Portfolio', description: 'Showcase your AI work', duration: '30 min', type: 'practice', courseId: 'midjourney', moduleId: 'mj-2-3' },
      { id: 'asg-d9', day: 9, title: 'AI for Social Media', description: 'Create content with AI', duration: '25 min', type: 'lesson', courseId: 'dalle', moduleId: 'dalle-2-1' },
      { id: 'asg-d10', day: 10, title: 'Automation Tips', description: 'Automate your workflow', duration: '20 min', type: 'lesson', courseId: 'copilot', moduleId: 'copilot-2-1' },
      { id: 'asg-d11', day: 11, title: 'Client Communication', description: 'Working with clients', duration: '20 min', type: 'lesson', courseId: 'claude', moduleId: 'claude-2-1' },
      { id: 'asg-d12', day: 12, title: 'Scaling Your Business', description: 'Grow your AI business', duration: '25 min', type: 'lesson', courseId: 'claude', moduleId: 'claude-2-2' },
      { id: 'asg-d13', day: 13, title: 'Final Quiz', description: 'Test your business knowledge', duration: '15 min', type: 'quiz', courseId: 'midjourney', moduleId: 'mj-2-quiz' },
      { id: 'asg-d14', day: 14, title: 'Launch Your Business', description: 'Put it all together', duration: '30 min', type: 'practice', courseId: 'chatgpt', moduleId: 'chatgpt-2-5' },
    ]
  },
  {
    id: 'prompt-engineering-pro',
    title: '7-Day Prompt Engineering Pro',
    description: 'Become a prompt engineering expert in just one week. Learn advanced techniques to get better results from any AI.',
    totalDays: 7,
    difficulty: 'Advanced',
    category: 'Advanced Skills',
    image: '/images/course/covers/claude-cover.jpg',
    icon: '⚡',
    startDate: null, // Not started yet
    tasks: [
      { id: 'pep-d1', day: 1, title: 'Prompt Fundamentals', description: 'Master the basics of prompting', duration: '25 min', type: 'lesson', courseId: 'chatgpt', moduleId: 'chatgpt-3-1' },
      { id: 'pep-d2', day: 2, title: 'Chain of Thought', description: 'Learn CoT prompting', duration: '30 min', type: 'lesson', courseId: 'chatgpt', moduleId: 'chatgpt-3-2' },
      { id: 'pep-d3', day: 3, title: 'Few-Shot Learning', description: 'Master few-shot techniques', duration: '25 min', type: 'lesson', courseId: 'claude', moduleId: 'claude-3-1' },
      { id: 'pep-d4', day: 4, title: 'Mid-Week Quiz', description: 'Test your skills', duration: '15 min', type: 'quiz', courseId: 'chatgpt', moduleId: 'chatgpt-3-quiz' },
      { id: 'pep-d5', day: 5, title: 'System Prompts', description: 'Create effective system prompts', duration: '30 min', type: 'lesson', courseId: 'claude', moduleId: 'claude-3-2' },
      { id: 'pep-d6', day: 6, title: 'Advanced Techniques', description: 'Expert-level prompting', duration: '35 min', type: 'lesson', courseId: 'deepseek', moduleId: 'deepseek-3-1' },
      { id: 'pep-d7', day: 7, title: 'Final Project', description: 'Build your prompt library', duration: '40 min', type: 'practice', courseId: 'deepseek', moduleId: 'deepseek-3-2' },
    ]
  }
];
