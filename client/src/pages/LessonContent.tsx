import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { courses, CourseModule } from "../../../shared/courseData";
import { getModuleContent } from "../../../shared/courseContent";
import { useEmailAuth } from "../hooks/useEmailAuth";
import { useTestMode } from "../contexts/TestModeContext";
import { trpc } from "../lib/trpc";

export default function LessonContent() {
  const params = useParams<{ courseId: string; moduleId: string }>();
  const { courseId, moduleId } = params;
  const [, setLocation] = useLocation();
  const { user } = useEmailAuth();
  const { isTestModeEnabled } = useTestMode();
  
  const [module, setModule] = useState<CourseModule | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showAudioComingSoon, setShowAudioComingSoon] = useState(false);
  
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

  // Get content for this module
  const content = moduleId ? getModuleContent(moduleId) : [];
  const totalPages = content.length;
  const progressPercent = totalPages > 0 ? ((currentPageIndex + 1) / totalPages) * 100 : 0;

  const handleContinue = async () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else {
      // Module completed
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
    }
  };

  const handleClose = () => {
    setShowExitModal(true);
  };

  const handleConfirmExit = () => {
    setLocation(`/course/${courseId}`);
  };

  const handleCancelExit = () => {
    setShowExitModal(false);
  };

  const handleAudioClick = () => {
    setShowAudioComingSoon(true);
    setTimeout(() => setShowAudioComingSoon(false), 2000);
  };

  // Quick complete in test mode
  const handleQuickComplete = async () => {
    if (!isTestModeEnabled || !user || !courseId || !moduleId) return;
    
    try {
      await completeModuleMutation.mutateAsync({
        courseId,
        moduleId
      });
      await recordActivityMutation.mutateAsync({ lessonsCompleted: 1, testMode: true });
      setLocation(`/course/${courseId}`);
    } catch (error) {
      console.error("Failed to quick complete:", error);
    }
  };

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  const currentContent = content[currentPageIndex];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={handleClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Progress bar */}
          <div className="flex-1 mx-4">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-600 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          
          {/* Audio button */}
          <button
            onClick={handleAudioClick}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors relative"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            {showAudioComingSoon && (
              <div className="absolute top-full mt-2 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Coming Soon
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-6 py-8">
          {/* Module title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {module.title}
          </h1>
          
          {/* Page content */}
          {currentContent && (
            <div className="space-y-6">
              {currentContent.image && (
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">{currentContent.image}</div>
                </div>
              )}
              
              <div className="prose prose-lg max-w-none">
                {currentContent.text.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                  </p>
                ))}
              </div>
            </div>
          )}
          
          {/* Page indicator */}
          <div className="text-center text-sm text-gray-500 mt-8">
            {currentPageIndex + 1} / {totalPages}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 pb-6 z-20">
        <div className="max-w-2xl mx-auto flex gap-3">
          {isTestModeEnabled && (
            <button
              onClick={handleQuickComplete}
              className="px-4 py-3 bg-yellow-500 text-white rounded-xl font-medium hover:bg-yellow-600 transition-colors text-sm"
            >
              🧪 Quick Complete
            </button>
          )}
          <button
            onClick={handleContinue}
            className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
          >
            {currentPageIndex < totalPages - 1 ? "Continue" : "Complete"}
          </button>
        </div>
        
        {/* Feedback button */}
        <div className="absolute right-4 bottom-20">
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Exit Modal */}
      {showExitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Wait, don't go!</h2>
            <p className="text-gray-600 mb-6">
              Your progress will be saved, but you're so close to completing this lesson!
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleCancelExit}
                className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
              >
                Keep Learning
              </button>
              <button
                onClick={handleConfirmExit}
                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                End Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
