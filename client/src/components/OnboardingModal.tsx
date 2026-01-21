import React, { useState, useEffect } from 'react';
import { X, Star, Lock, ChevronRight } from 'lucide-react';
import { courses } from '../../../shared/courseData';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (selectedCourseId: string) => void;
  userName?: string;
}

// Course icons mapping - using ai-tools icons
const courseIcons: Record<string, string> = {
  'chatgpt': '/images/ai-tools/chatgpt.jpg',
  'dall-e': '/images/ai-tools/dall-e.jpg',
  'midjourney': '/images/ai-tools/midjourney.jpg',
  'claude': '/images/ai-tools/claude.jpg',
  'gemini': '/images/ai-tools/gemini.jpg',
  'perplexity': '/images/ai-tools/perplexity.jpg',
  'copilot': '/images/ai-tools/copilot.jpg',
  'notion-ai': '/images/ai-tools/notion-ai.jpg',
  'stable-diffusion': '/images/ai-tools/stable-diffusion.jpg',
  'deepseek': '/images/ai-tools/deepseek.jpg',
};

export function OnboardingModal({ isOpen, onClose, onComplete, userName = 'Learner' }: OnboardingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedCourse(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (step === 1) {
        setStep(2);
      } else if (step === 2 && selectedCourse) {
        setStep(3);
      }
      setIsAnimating(false);
    }, 150);
  };

  const handleComplete = () => {
    if (selectedCourse) {
      onComplete(selectedCourse);
    }
  };

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  // Get selected course details
  const selectedCourseData = courses.find(c => c.id === selectedCourse);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-2xl mx-4 bg-[#1F1F2E] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {/* Progress bar */}
        <div className="flex items-center gap-3 px-6 pt-4">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#5A4CFF] transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Step 1: Welcome */}
          {step === 1 && (
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Your AI Adventure Journey
              </h2>
              <p className="text-gray-300 mb-3">
                Have you always wanted to understand what AI can do? Or learn a new AI tool and make the most of it?
              </p>
              <p className="text-gray-400 mb-8">
                Our guides will help you determine which tools are best suited for you and your goals. For convenience, each guide will focus on a specific AI tool.
              </p>
              
              {/* AI Tools Circle */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                {/* Center star */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#5A4CFF] rounded-full flex items-center justify-center shadow-lg shadow-[#5A4CFF]/30">
                  <Star className="w-12 h-12 text-white" fill="white" />
                </div>
                
                {/* Orbiting icons */}
                {courses.slice(0, 6).map((course, index) => {
                  const angle = (index * 60) - 90; // Start from top
                  const radius = 100;
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;
                  
                  return (
                    <div
                      key={course.id}
                      className="absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden"
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                      }}
                    >
                      <img 
                        src={courseIcons[course.id] || '/images/ai-tools/chatgpt.jpg'}
                        alt={course.title}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  );
                })}
                
                {/* Dashed circle */}
                <div className="absolute inset-0 border-2 border-dashed border-gray-600 rounded-full" />
              </div>

              <button
                onClick={handleNext}
                className="w-full py-4 bg-[#5A4CFF] text-white font-semibold rounded-xl hover:bg-[#4A3CE0] transition-colors"
              >
                Let's Get Started
              </button>
            </div>
          )}

          {/* Step 2: Course Selection */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Before we dive in...
              </h2>
              <p className="text-gray-300 mb-6">
                Which AI tool are you most interested in exploring first?
              </p>
              
              <div className="space-y-3 mb-6 max-h-[400px] overflow-y-auto pr-2">
                {courses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => handleCourseSelect(course.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                      selectedCourse === course.id
                        ? 'bg-[#5A4CFF]/20 border-2 border-[#5A4CFF]'
                        : 'bg-gray-800/50 border-2 border-transparent hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img 
                        src={courseIcons[course.id] || '/images/ai-tools/chatgpt.jpg'}
                        alt={course.title}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-white">{course.title}</h3>
                      <p className="text-sm text-gray-400">{course.description}</p>
                    </div>
                    {selectedCourse === course.id && (
                      <div className="w-6 h-6 bg-[#5A4CFF] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={!selectedCourse}
                className={`w-full py-4 font-semibold rounded-xl transition-colors ${
                  selectedCourse
                    ? 'bg-[#5A4CFF] text-white hover:bg-[#4A3CE0]'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 3: Plan Ready */}
          {step === 3 && selectedCourseData && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Your Plan is Ready!
              </h2>
              <p className="text-gray-300 mb-6">
                Let's dive into the steps you need to become an AI expert and integrate these powerful tools into your daily life.
              </p>
              
              {/* Course path preview */}
              <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{selectedCourseData.title}</h3>
                  <span className="px-3 py-1 bg-[#5A4CFF]/20 text-[#5A4CFF] text-sm rounded-full">
                    {selectedCourseData.levels.flatMap(l => l.modules).length} modules
                  </span>
                </div>
                
                {/* Module grid */}
                <div className="grid grid-cols-4 gap-2">
                  {selectedCourseData.levels.flatMap(level => level.modules).slice(0, 8).map((module, index) => (
                    <div
                      key={module.id}
                      className={`relative aspect-square rounded-lg flex items-center justify-center ${
                        index === 0 
                          ? 'bg-[#5A4CFF]' 
                          : 'bg-gray-700'
                      }`}
                    >
                      {index === 0 ? (
                        <>
                          <Star className="w-6 h-6 text-white" />
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap font-medium">
                            You're here
                          </div>
                        </>
                      ) : (
                        <Lock className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  ))}
                </div>
                
                {selectedCourseData.levels.flatMap(l => l.modules).length > 8 && (
                  <p className="text-center text-gray-500 text-sm mt-3">
                    +{selectedCourseData.levels.flatMap(l => l.modules).length - 8} more modules
                  </p>
                )}
              </div>

              <button
                onClick={handleComplete}
                className="w-full py-4 bg-[#5A4CFF] text-white font-semibold rounded-xl hover:bg-[#4A3CE0] transition-colors flex items-center justify-center gap-2"
              >
                Let's Go!
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
