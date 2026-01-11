// Certificate data structure
export interface Certificate {
  id: string;
  title: string;
  courseId: string;
  description: string;
  image: string;
  requiredLessons: number;
}

// 9 Certificates - one for each course/challenge
export const certificateData: Certificate[] = [
  {
    id: 'cert-chatgpt',
    title: 'ChatGPT Mastery',
    courseId: 'chatgpt',
    description: 'Completed the ChatGPT Mastery course',
    image: '/cert-chatgpt.webp',
    requiredLessons: 16
  },
  {
    id: 'cert-ai-business',
    title: 'AI for Business',
    courseId: 'ai-business',
    description: 'Completed the AI for Business course',
    image: '/cert-ai-business.webp',
    requiredLessons: 18
  },
  {
    id: 'cert-prompt-engineering',
    title: 'Prompt Engineering',
    courseId: 'prompt-engineering',
    description: 'Completed the Prompt Engineering course',
    image: '/cert-prompt.webp',
    requiredLessons: 12
  },
  {
    id: 'cert-ai-reinvention',
    title: 'AI Reinvention 2026',
    courseId: 'ai-reinvention-2026',
    description: 'Completed the 28-Day AI Reinvention Challenge',
    image: '/cert-ai-reinvention.webp',
    requiredLessons: 28
  },
  {
    id: 'cert-junior-ai',
    title: 'Junior AI Expert',
    courseId: 'junior-ai-challenge',
    description: 'Completed the Junior AI Challenge',
    image: '/cert-junior.webp',
    requiredLessons: 28
  },
  {
    id: 'cert-side-gigs',
    title: 'AI Side Gigs',
    courseId: 'ai-side-gigs',
    description: 'Completed the 14-Day AI Side Gigs Challenge',
    image: '/cert-side-gigs.webp',
    requiredLessons: 14
  },
  {
    id: 'cert-no-code',
    title: 'No Code Expert',
    courseId: 'no-code-challenge',
    description: 'Completed the No Code Challenge',
    image: '/cert-no-code.webp',
    requiredLessons: 14
  },
  {
    id: 'cert-deepseek',
    title: 'DeepSeek Mastery',
    courseId: 'deepseek',
    description: 'Completed the DeepSeek course',
    image: '/cert-deepseek.webp',
    requiredLessons: 10
  },
  {
    id: 'cert-claude',
    title: 'Claude Expert',
    courseId: 'claude',
    description: 'Completed the Claude AI course',
    image: '/cert-claude.webp',
    requiredLessons: 12
  }
];

// Helper function to get certificate by ID
export function getCertificateById(id: string): Certificate | undefined {
  return certificateData.find(c => c.id === id);
}

// Helper function to get certificate by course ID
export function getCertificateByCourseId(courseId: string): Certificate | undefined {
  return certificateData.find(c => c.courseId === courseId);
}
