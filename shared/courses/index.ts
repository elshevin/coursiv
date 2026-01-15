/**
 * Course Data Index
 * 
 * This file exports all course lesson data from individual course files.
 * Import from this file to access all lessons.
 */

// Import all course lessons
export { chatgptLessons } from './chatgptCourse';
export { dalleLessons } from './dalleCourse';
export { midjourneyLessons } from './midjourneyCourse';
export { claudeLessons } from './claudeCourse';
export { geminiLessons } from './geminiCourse';
export { stableDiffusionLessons } from './stableDiffusionCourse';
export { copilotLessons } from './copilotCourse';
export { perplexityLessons } from './perplexityCourse';
export { notionAiLessons } from './notionAiCourse';

// Import types
import { CoursivLesson } from '../courseContentTypes';

// Import lesson arrays
import { chatgptLessons } from './chatgptCourse';
import { dalleLessons } from './dalleCourse';
import { midjourneyLessons } from './midjourneyCourse';
import { claudeLessons } from './claudeCourse';
import { geminiLessons } from './geminiCourse';
import { stableDiffusionLessons } from './stableDiffusionCourse';
import { copilotLessons } from './copilotCourse';
import { perplexityLessons } from './perplexityCourse';
import { notionAiLessons } from './notionAiCourse';

/**
 * All lessons from all courses combined
 */
export const allLessons: CoursivLesson[] = [
  ...chatgptLessons,
  ...dalleLessons,
  ...midjourneyLessons,
  ...claudeLessons,
  ...geminiLessons,
  ...stableDiffusionLessons,
  ...copilotLessons,
  ...perplexityLessons,
  ...notionAiLessons,
];

/**
 * Get a lesson by its ID
 */
export function getLessonById(lessonId: string): CoursivLesson | undefined {
  return allLessons.find(lesson => lesson.id === lessonId);
}

/**
 * Get all lessons for a specific course
 */
export function getLessonsByCourseId(courseId: string): CoursivLesson[] {
  return allLessons.filter(lesson => lesson.courseId === courseId);
}

/**
 * Course statistics
 */
export const courseStats = {
  totalCourses: 9,
  totalLessons: allLessons.length,
  lessonsByCourse: {
    chatgpt: chatgptLessons.length,
    'dall-e': dalleLessons.length,
    midjourney: midjourneyLessons.length,
    claude: claudeLessons.length,
    gemini: geminiLessons.length,
    'stable-diffusion': stableDiffusionLessons.length,
    copilot: copilotLessons.length,
    perplexity: perplexityLessons.length,
    'notion-ai': notionAiLessons.length,
  },
};
