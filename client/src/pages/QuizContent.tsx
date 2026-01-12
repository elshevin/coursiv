import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { courses, CourseModule } from "../../../shared/courseData";
import { getModuleQuiz } from "../../../shared/courseContent";
import { useEmailAuth } from "../hooks/useEmailAuth";
import { useTestMode } from "../contexts/TestModeContext";
import { trpc } from "../lib/trpc";

export default function QuizContent() {
  const params = useParams<{ courseId: string; moduleId: string }>();
  const { courseId, moduleId } = params;
  const [, setLocation] = useLocation();
  const { user } = useEmailAuth();
  const { isTestModeEnabled } = useTestMode();
  
  const [module, setModule] = useState<CourseModule | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const completeModuleMutation = trpc.courses.completeModule.useMutation();
  const recordActivityMutation = trpc.streaks.recordActivity.useMutation();

  useEffect(() => {
    if (courseId && moduleId) {
      const foundCourse = courses.find(c => c.id === courseId);
      if (foundCourse) {
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

  const quiz = moduleId ? getModuleQuiz(moduleId) : null;

  const handleOptionSelect = (index: number) => {
    if (showResult) return; // Don't allow changing after submission
    setSelectedOption(index);
  };

  const handleSubmit = async () => {
    if (selectedOption === null || !quiz) return;
    
    const correct = selectedOption === quiz.correctIndex;
    setIsCorrect(correct);
    setShowResult(true);
    
    // Save progress regardless of correct/incorrect
    if (user && courseId && moduleId) {
      try {
        await completeModuleMutation.mutateAsync({
          courseId,
          moduleId
        });
        await recordActivityMutation.mutateAsync({ lessonsCompleted: 1 });
      } catch (error) {
        console.error("Failed to save quiz progress:", error);
      }
    }
  };

  const handleContinue = () => {
    setLocation(`/course/${courseId}`);
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

  if (!module || !quiz) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Loading quiz...</p>
        </div>
      </div>
    );
  }

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setLocation(`/course/${courseId}`)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Progress bar - full for quiz */}
          <div className="flex-1 mx-4">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-600 transition-all duration-300"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-6 py-8">
          {/* Quiz badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quiz
          </div>
          
          {/* Question */}
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            {quiz.question}
          </h1>
          
          {/* Options */}
          <div className="space-y-3">
            {quiz.options.map((option, index) => {
              let optionStyle = "border-gray-200 hover:border-purple-300 hover:bg-purple-50";
              
              if (showResult) {
                if (index === quiz.correctIndex) {
                  optionStyle = "border-green-500 bg-green-50";
                } else if (index === selectedOption && !isCorrect) {
                  optionStyle = "border-red-500 bg-red-50";
                } else {
                  optionStyle = "border-gray-200 opacity-50";
                }
              } else if (selectedOption === index) {
                optionStyle = "border-purple-500 bg-purple-50";
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                      showResult && index === quiz.correctIndex
                        ? "bg-green-500 text-white"
                        : showResult && index === selectedOption && !isCorrect
                        ? "bg-red-500 text-white"
                        : selectedOption === index
                        ? "bg-purple-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {showResult && index === quiz.correctIndex ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : showResult && index === selectedOption && !isCorrect ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        optionLabels[index]
                      )}
                    </div>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Result feedback */}
          {showResult && (
            <div className={`mt-6 p-4 rounded-xl ${isCorrect ? "bg-green-50 border border-green-200" : "bg-yellow-50 border border-yellow-200"}`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <>
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-green-700">Correct!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="font-semibold text-yellow-700">Not quite!</span>
                  </>
                )}
              </div>
              <p className="text-gray-700 text-sm">{quiz.explanation}</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-2xl mx-auto flex gap-3">
          {isTestModeEnabled && !showResult && (
            <button
              onClick={handleQuickComplete}
              className="px-4 py-3 bg-yellow-500 text-white rounded-xl font-medium hover:bg-yellow-600 transition-colors text-sm"
            >
              🧪 Skip Quiz
            </button>
          )}
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
                selectedOption === null
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              Check Answer
            </button>
          ) : (
            <>
              {!isCorrect && (
                <button
                  onClick={() => {
                    setSelectedOption(null);
                    setShowResult(false);
                    setIsCorrect(false);
                  }}
                  className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
                >
                  Try Again
                </button>
              )}
              <button
                onClick={handleContinue}
                className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
              >
                Continue
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
