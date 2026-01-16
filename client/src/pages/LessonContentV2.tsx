/**
 * LessonContentV2 - Coursiv-style lesson viewer
 * Uses the new CoursivLessonViewer component
 */

import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { courses, CourseModule } from "../../../shared/courseData";
import { getLessonById } from "../../../shared/allCourseData";
import { getModuleContent, getModuleQuiz } from "../../../shared/courseContent";
import { useEmailAuth } from "../hooks/useEmailAuth";
import { useTestMode } from "../contexts/TestModeContext";
import { trpc } from "../lib/trpc";
import { CoursivLessonViewer } from "../components/CoursivLessonViewer";
import { ContentBlock, createTextBlock, createQuizBlock } from "../../../shared/courseContentTypes";

export default function LessonContentV2() {
  const params = useParams<{ courseId: string; moduleId: string }>();
  const { courseId, moduleId } = params;
  const [, setLocation] = useLocation();
  const { user } = useEmailAuth();
  const { isTestModeEnabled } = useTestMode();
  
  const [module, setModule] = useState<CourseModule | null>(null);
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [showCompletionPage, setShowCompletionPage] = useState(false);
  const [nextModuleTitle, setNextModuleTitle] = useState<string | null>(null);
  const [nextModuleId, setNextModuleId] = useState<string | null>(null);
  
  const completeModuleMutation = trpc.courses.completeModule.useMutation();
  const recordActivityMutation = trpc.streaks.recordActivity.useMutation();

  useEffect(() => {
    if (courseId && moduleId) {
      const foundCourse = courses.find(c => c.id === courseId);
      if (foundCourse) {
        // Find module across all levels
        for (const level of foundCourse.levels) {
          const mod = level.modules.find(m => m.id === moduleId);
          if (mod) {
            setModule(mod);
            break;
          }
        }
      }
    }
  }, [courseId, moduleId]);

  // Load content blocks
  useEffect(() => {
    if (moduleId) {
      // First try to get Coursiv-style lesson data
      const coursivLesson = getLessonById(moduleId);
      
      if (coursivLesson) {
        // Use Coursiv-style blocks directly
        setBlocks(coursivLesson.blocks);
      } else {
        // Fall back to converting old content format to blocks
        const oldContent = getModuleContent(moduleId);
        const quiz = getModuleQuiz(moduleId);
        
        const convertedBlocks: ContentBlock[] = oldContent.map((page, index) => 
          createTextBlock(
            `Section ${index + 1}`,
            '📖',
            page.text.split('\n\n'),
            page.image
          )
        );
        
        // Add quiz at the end if exists
        if (quiz) {
          convertedBlocks.push(
            createQuizBlock(
              quiz.question,
              quiz.options,
              quiz.correctIndex,
              quiz.explanation,
              'Think carefully about the question before selecting your answer.'
            )
          );
        }
        
        setBlocks(convertedBlocks);
      }
    }
  }, [moduleId]);

  // Find next module title and ID for completion page
  useEffect(() => {
    if (courseId && moduleId) {
      const foundCourse = courses.find(c => c.id === courseId);
      if (foundCourse) {
        let foundCurrentModule = false;
        
        for (const level of foundCourse.levels) {
          for (const mod of level.modules) {
            if (foundCurrentModule) {
              setNextModuleTitle(mod.title);
              setNextModuleId(mod.id);
              return;
            }
            if (mod.id === moduleId) {
              foundCurrentModule = true;
            }
          }
        }
        setNextModuleTitle(null);
        setNextModuleId(null);
      }
    }
  }, [courseId, moduleId]);

  const handleComplete = async () => {
    if (user && courseId && moduleId) {
      try {
        await completeModuleMutation.mutateAsync({
          courseId,
          moduleId,
          nextModuleId: nextModuleId || undefined
        });
        // Record activity for streak
        await recordActivityMutation.mutateAsync({ lessonsCompleted: 1 });
      } catch (error) {
        console.error("Failed to save progress:", error);
      }
    }
    
    // Show completion page instead of navigating directly
    setShowCompletionPage(true);
  };

  const handleContinueToCourse = () => {
    // Navigate back to course detail page
    setLocation(`/course/${courseId}`);
  };

  const handleClose = () => {
    setLocation(`/course/${courseId}`);
  };

  if (!module || blocks.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  // Show completion page
  if (showCompletionPage) {
    const foundCourse = courses.find(c => c.id === courseId);
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-800 flex flex-col items-center justify-center p-6">
        {/* Celebration animation */}
        <div className="text-8xl mb-6 animate-bounce">🎉</div>
        
        {/* Congratulations message */}
        <h1 className="text-3xl font-bold text-white mb-2 text-center">
          Lesson Complete!
        </h1>
        <p className="text-purple-200 text-lg mb-8 text-center">
          You've completed "{module.title}"
        </p>
        
        {/* Stats card */}
        <div className="bg-white rounded-2xl p-6 w-full max-w-sm mb-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Course Progress</span>
            <span className="text-purple-600 font-semibold">{foundCourse?.title}</span>
          </div>
          
          {nextModuleTitle && (
            <div className="bg-purple-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-purple-600 mb-1">Next up:</p>
              <p className="font-semibold text-gray-900">{nextModuleTitle}</p>
            </div>
          )}
          
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span>
              +1 Lesson
            </span>
            <span className="flex items-center gap-1">
              <span className="text-orange-500">🔥</span>
              Streak updated
            </span>
          </div>
        </div>
        
        {/* Continue button - only one button, returns to course detail */}
        <button
          onClick={handleContinueToCourse}
          className="w-full max-w-sm py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors shadow-lg"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <CoursivLessonViewer
      title={module.title}
      blocks={blocks}
      onComplete={handleComplete}
      onClose={handleClose}
    />
  );
}
