// Lesson Content V2 - Coursiv-style scroll-to-expand lesson viewer
// Uses the new CoursivLessonViewer component

import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { courses, CourseModule } from "../../../shared/courseData";
import { getLesson } from "../../../shared/allCourseData";
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
      const coursivLesson = getLesson(moduleId);
      
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

  const handleComplete = async () => {
    if (user && courseId && moduleId) {
      try {
        await completeModuleMutation.mutateAsync({
          courseId,
          moduleId
        });
        // Record activity for streak
        await recordActivityMutation.mutateAsync({ lessonsCompleted: 1 });
      } catch (error) {
        console.error("Failed to save progress:", error);
      }
    }
    // Navigate back to course detail
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

  return (
    <CoursivLessonViewer
      title={module.title}
      blocks={blocks}
      onComplete={handleComplete}
      onClose={handleClose}
    />
  );
}
