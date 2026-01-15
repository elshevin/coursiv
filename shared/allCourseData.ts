/**
 * All Course Data for Coursiv
 * 
 * This file re-exports all course content from the modular course files.
 * Each course is defined in its own file under ./courses/
 * 
 * Course Structure:
 * - ChatGPT: 16 lessons (Beginner → Intermediate → Advanced)
 * - DALL-E: 12 lessons (Beginner → Intermediate → Advanced)
 * - Midjourney: 14 lessons (Beginner → Intermediate → Advanced)
 * - Claude: 11 lessons (Beginner → Intermediate → Advanced)
 * - Gemini: 11 lessons (Beginner → Intermediate → Advanced)
 * - Stable Diffusion: 14 lessons (Beginner → Intermediate → Advanced)
 * - Copilot: 12 lessons (Beginner → Intermediate → Advanced)
 * - Perplexity: 8 lessons (Beginner → Intermediate)
 * - Notion AI: 8 lessons (Beginner → Intermediate)
 * 
 * Total: 106 lessons across 9 courses
 * 
 * Content Density Rules:
 * - Every 2-3 text blocks → 1 playground
 * - Every 4-5 playgrounds → 1 quiz
 * - Every playground → 1 feedback + 1 discovery
 * 
 * Playground Format (Coursiv-style):
 * - promptTemplate: String with [blankId] placeholders
 * - blanks: Array of { id, placeholder, correctAnswer }
 * - options: Array of all available options (consumed as user selects)
 */

// Re-export everything from the courses index
export {
  // Individual course lesson arrays
  chatgptLessons,
  dalleLessons,
  midjourneyLessons,
  claudeLessons,
  geminiLessons,
  stableDiffusionLessons,
  copilotLessons,
  perplexityLessons,
  notionAiLessons,
  
  // Combined lessons array
  allLessons,
  
  // Utility functions
  getLessonById,
  getLessonsByCourseId,
  
  // Statistics
  courseStats,
} from './courses/index';

// Also export the combined array as default for backward compatibility
import { allLessons } from './courses/index';
export default allLessons;
