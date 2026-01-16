import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLocation, useParams } from "wouter";
import { ChevronLeft, Loader2, Eye, EyeOff, Check, Star, TrendingUp, Brain, Target, Clock } from "lucide-react";
import { useEmailAuth } from "@/hooks/useEmailAuth";
import { useDemoAuth } from "@/hooks/useDemoAuth";
import { ScratchCardPage } from "@/components/ScratchCardPage";

// Quiz step types
type QuizStepType = 
  | 'identity' 
  | 'social-proof' 
  | 'question' 
  | 'multi-select'
  | 'motivation' 
  | 'ai-profile' 
  | 'personal-plan' 
  | 'loading' 
  | 'scratch-card'
  | 'register';

interface QuizOption {
  id: string;
  label: string;
  icon?: string;
  description?: string;
}

interface QuizStep {
  id: number;
  type: QuizStepType;
  question?: string;
  title?: string;
  subtitle?: string;
  options?: QuizOption[];
  stats?: { value: string; label: string }[];
  motivationContent?: {
    headline: string;
    subtext: string;
    source?: string;
    image?: string;
  };
}

// Coursiv-style Quiz Data - 24 steps with motivation pages
const quizSteps: QuizStep[] = [
  {
    id: 1,
    type: 'identity',
    question: "Who are you?",
    subtitle: "Select the option that best describes you",
    options: [
      { id: 'employee', label: 'I work for a company', icon: '💼' },
      { id: 'freelancer', label: 'I am a freelancer', icon: '🎯' },
      { id: 'business', label: 'I run my own business', icon: '🏢' },
      { id: 'student', label: 'I am a student', icon: '📚' },
      { id: 'other', label: 'Other', icon: '✨' },
    ]
  },
  {
    id: 2,
    type: 'social-proof',
    title: "700,000+ people",
    subtitle: "have chosen Coursiv to master AI skills",
    stats: [
      { value: '700K+', label: 'Active learners' },
      { value: '4.8', label: 'App Store rating' },
      { value: '50+', label: 'AI courses' },
    ]
  },
  {
    id: 3,
    type: 'question',
    question: "What's your age?",
    options: [
      { id: '18-24', label: '18-24', icon: '🌱' },
      { id: '25-34', label: '25-34', icon: '🚀' },
      { id: '35-44', label: '35-44', icon: '💪' },
      { id: '45-54', label: '45-54', icon: '🎯' },
      { id: '55+', label: '55+', icon: '🌟' },
    ]
  },
  {
    id: 4,
    type: 'question',
    question: "What's your main goal?",
    options: [
      { id: 'career', label: 'Professional growth', icon: '📈' },
      { id: 'personal', label: 'Personal development', icon: '🌱' },
      { id: 'fun', label: 'Just for fun', icon: '🎮' },
    ]
  },
  {
    id: 5,
    type: 'question',
    question: "How often do you use AI tools?",
    options: [
      { id: 'never', label: 'Never', icon: '🆕' },
      { id: 'sometimes', label: 'Sometimes', icon: '🔄' },
      { id: 'often', label: 'Often', icon: '⚡' },
      { id: 'daily', label: 'Daily', icon: '🔥' },
    ]
  },
  {
    id: 6,
    type: 'question',
    question: "How would you rate your writing skills?",
    options: [
      { id: 'struggle', label: 'I struggle sometimes', icon: '😅' },
      { id: 'okay', label: 'They are okay', icon: '👍' },
      { id: 'good', label: 'Pretty good', icon: '✨' },
      { id: 'excellent', label: 'Excellent', icon: '🌟' },
    ]
  },
  {
    id: 7,
    type: 'question',
    question: "How often do you procrastinate?",
    options: [
      { id: 'never', label: 'Never', icon: '🎯' },
      { id: 'rarely', label: 'Rarely', icon: '👍' },
      { id: 'sometimes', label: 'Sometimes', icon: '😅' },
      { id: 'often', label: 'Often', icon: '😰' },
    ]
  },
  {
    id: 8,
    type: 'motivation',
    title: "Great news!",
    subtitle: "You're already ahead of most people",
    motivationContent: {
      headline: "Coursiv helps you stay on track",
      subtext: "Our bite-sized lessons and daily reminders help you build consistent learning habits, even with a busy schedule.",
      image: "/images/motivation-1.jpg"
    }
  },
  {
    id: 9,
    type: 'question',
    question: "Have you ever used AI-generated content?",
    options: [
      { id: 'yes-often', label: 'Yes, I use it often', icon: '🚀' },
      { id: 'yes-sometimes', label: 'Yes, but I still want to learn', icon: '📚' },
      { id: 'not-really', label: 'Not really', icon: '🤔' },
    ]
  },
  {
    id: 10,
    type: 'question',
    question: "Do you have any AI-related experience?",
    options: [
      { id: 'yes', label: 'Yes', icon: '✅' },
      { id: 'some', label: 'Some', icon: '📊' },
      { id: 'no', label: 'No', icon: '🆕' },
    ]
  },
  {
    id: 11,
    type: 'question',
    question: "What's your current AI skill level?",
    options: [
      { id: 'beginner', label: 'Beginner', icon: '🌱' },
      { id: 'intermediate', label: 'Intermediate', icon: '📈' },
      { id: 'advanced', label: 'Advanced', icon: '🚀' },
    ]
  },
  {
    id: 12,
    type: 'question',
    question: "Have you ever used ChatGPT?",
    options: [
      { id: 'daily', label: 'Yes, I use it daily', icon: '🤖' },
      { id: 'few-times', label: 'Yes, I used it few times', icon: '👋' },
      { id: 'afraid', label: "I'm afraid to use it", icon: '😰' },
      { id: 'not-familiar', label: 'I am not familiar with ChatGPT', icon: '🤔' },
    ]
  },
  {
    id: 13,
    type: 'multi-select',
    question: "What other AI tools are you already familiar with?",
    subtitle: "Choose all that apply",
    options: [
      { id: 'new', label: "I'm new to AI tools", icon: '🆕' },
      { id: 'midjourney', label: 'Midjourney', icon: '🎨' },
      { id: 'gemini', label: 'Google Gemini', icon: '💎' },
      { id: 'dalle', label: 'DALL-E', icon: '🖼️' },
      { id: 'copilot', label: 'Copilot', icon: '👨‍✈️' },
      { id: 'claude', label: 'Claude', icon: '🤖' },
    ]
  },
  {
    id: 14,
    type: 'question',
    question: "Are you afraid to be replaced by AI?",
    options: [
      { id: 'all-time', label: 'Yes, all the time', icon: '😰' },
      { id: 'sometimes', label: 'Yes, sometimes', icon: '😟' },
      { id: 'no', label: 'No, because I know how to use it', icon: '😎' },
      { id: 'never-thought', label: 'I never thought about it', icon: '🤔' },
    ]
  },
  {
    id: 15,
    type: 'motivation',
    title: "There is nothing to worry about",
    motivationContent: {
      headline: "AI Won't Replace You",
      subtext: "According to Harvard Business Review \"AI Won't Replace Humans — But Humans With AI Will Replace Humans Without AI\". By mastering AI right now you are never going to be worried about being replaced by AI anymore.",
      source: "Harvard Business Review",
      image: "/images/motivation-2.jpg"
    }
  },
  {
    id: 16,
    type: 'question',
    question: "What income range aligns with your current career goals?",
    options: [
      { id: '50-100k', label: '$50,000 - $100,000', icon: '💵' },
      { id: '100-300k', label: '$100,000 - $300,000', icon: '💰' },
      { id: '300k+', label: 'More than $300,000', icon: '🤑' },
    ]
  },
  {
    id: 17,
    type: 'question',
    question: "Have you considered how AI skills could impact your career?",
    options: [
      { id: 'heard', label: "Yes, I've heard of it", icon: '👂' },
      { id: 'curious', label: "I'm curious", icon: '🤔' },
      { id: 'news', label: 'No, this is news to me', icon: '📰' },
    ]
  },
  {
    id: 18,
    type: 'question',
    question: "Are you comfortable with learning new skills or techniques?",
    options: [
      { id: 'yes', label: 'Yes', icon: '👍' },
      { id: 'no', label: 'No', icon: '👎' },
      { id: 'not-sure', label: 'Hm, not sure', icon: '🤷' },
    ]
  },
  {
    id: 19,
    type: 'question',
    question: "Rate your readiness to master AI",
    options: [
      { id: 'all-set', label: 'All set', icon: '😎' },
      { id: 'ready', label: 'Ready', icon: '😊' },
      { id: 'somewhat', label: 'Somewhat Ready', icon: '🤔' },
      { id: 'not-ready', label: 'Not Ready', icon: '😅' },
    ]
  },
  {
    id: 20,
    type: 'question',
    question: "Do you find it easy to maintain your focus?",
    options: [
      { id: 'easy', label: 'Yes, I can easily stay focused', icon: '🎯' },
      { id: 'mostly', label: 'Mostly, but I sometimes get distracted', icon: '😊' },
      { id: 'struggle', label: 'I often struggle', icon: '😅' },
      { id: 'procrastinate', label: 'No, I frequently procrastinate', icon: '😰' },
    ]
  },
  {
    id: 21,
    type: 'ai-profile',
    title: "Here's Your AI Experience Profile",
  },
  {
    id: 22,
    type: 'question',
    question: "How much time are you ready to spend to achieve your goal?",
    options: [
      { id: '5min', label: '5 min/day', icon: '⏱️' },
      { id: '10min', label: '10 min/day', icon: '⏰' },
      { id: '15min', label: '15 min/day', icon: '🕐' },
      { id: '20min', label: '20 min/day', icon: '🔥' },
    ]
  },
  {
    id: 23,
    type: 'personal-plan',
    title: "Your Personal AI Challenge",
    subtitle: "We expect you to gain necessary skills of"
  },
  {
    id: 24,
    type: 'loading',
    title: "Creating your AI challenge...",
    subtitle: "Based on your answers, we're building the perfect learning path for you"
  },
  {
    id: 25,
    type: 'scratch-card',
    title: "Scratch & Save on your 28-Day AI Challenge!",
    subtitle: "Boost your skills and master AI. Get your gift with us 🎁"
  },
  {
    id: 26,
    type: 'register',
    title: "Enter your email to get your Personal AI Challenge!",
    subtitle: "We respect your privacy and are committed to protecting your personal data."
  },
];

// Calculate AI Profile based on answers
function calculateAIProfile(answers: Record<number, string | string[]>) {
  let motivation = 'High';
  let potential = 'High';
  let focus = 'High';
  let aiKnowledge = 'Low';
  let readinessScore = 50;

  // AI Knowledge based on experience questions
  const aiExperience = answers[10] as string;
  const chatgptUsage = answers[12] as string;
  const skillLevel = answers[11] as string;
  
  if (skillLevel === 'advanced' || chatgptUsage === 'daily') {
    aiKnowledge = 'High';
    readinessScore += 20;
  } else if (skillLevel === 'intermediate' || chatgptUsage === 'few-times') {
    aiKnowledge = 'Moderate';
    readinessScore += 10;
  }

  // Focus based on procrastination and focus questions
  const procrastination = answers[7] as string;
  const focusAbility = answers[20] as string;
  
  if (procrastination === 'often' || focusAbility === 'procrastinate') {
    focus = 'Limited';
    readinessScore -= 10;
  } else if (procrastination === 'sometimes' || focusAbility === 'struggle') {
    focus = 'Moderate';
  }

  // Motivation based on goals
  const mainGoal = answers[4] as string;
  if (mainGoal === 'career') {
    motivation = 'High';
    readinessScore += 10;
  }

  // Readiness
  const readiness = answers[19] as string;
  if (readiness === 'all-set' || readiness === 'ready') {
    readinessScore += 15;
  }

  return {
    motivation,
    potential,
    focus,
    aiKnowledge,
    readinessScore: Math.min(Math.max(readinessScore, 20), 95),
    readinessLabel: readinessScore >= 70 ? 'Perfect' : readinessScore >= 50 ? 'Good' : 'Moderate'
  };
}

export default function Quiz() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { register } = useEmailAuth();
  const { demoUser, isLoading: authLoading } = useDemoAuth();
  
  const currentStep = parseInt(params.step || '1');
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [multiSelectAnswers, setMultiSelectAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);

  const step = quizSteps[currentStep - 1];
  const progress = (currentStep / quizSteps.length) * 100;

  // Redirect to dashboard if user is already logged in
  useEffect(() => {
    if (!authLoading && demoUser) {
      setLocation('/dashboard');
    }
  }, [demoUser, authLoading, setLocation]);

  // Auto-advance for loading step with progress animation
  useEffect(() => {
    if (step?.type === 'loading') {
      setLoadingProgress(0);
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 2;
        });
      }, 60);

      const timer = setTimeout(() => {
        setLocation(`/quiz/${currentStep + 1}`);
      }, 3500);

      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }
  }, [currentStep, step?.type, setLocation]);

  const handleOptionSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: optionId }));
    
    // Auto-advance to next step
    if (currentStep < quizSteps.length) {
      setTimeout(() => {
        setLocation(`/quiz/${currentStep + 1}`);
      }, 300);
    }
  };

  const handleMultiSelectToggle = (optionId: string) => {
    setMultiSelectAnswers(prev => {
      if (prev.includes(optionId)) {
        return prev.filter(id => id !== optionId);
      }
      return [...prev, optionId];
    });
  };

  const handleMultiSelectContinue = () => {
    setAnswers(prev => ({ ...prev, [currentStep]: multiSelectAnswers }));
    setMultiSelectAnswers([]);
    if (currentStep < quizSteps.length) {
      setLocation(`/quiz/${currentStep + 1}`);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setLocation(`/quiz/${currentStep - 1}`);
    } else {
      setLocation('/');
    }
  };

  const handleRegisterSubmit = async () => {
    if (!email || !password) return;
    
    setError('');
    setIsLoading(true);

    try {
      const quizAnswers: Record<string, string> = {};
      Object.entries(answers).forEach(([key, value]) => {
        quizAnswers[`step_${key}`] = Array.isArray(value) ? value.join(',') : value;
      });

      await register(email, password, email.split('@')[0], quizAnswers);
      setLocation('/upsell');
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinue = () => {
    if (currentStep < quizSteps.length) {
      setLocation(`/quiz/${currentStep + 1}`);
    }
  };

  if (!step) {
    setLocation('/quiz/1');
    return null;
  }

  const aiProfile = calculateAIProfile(answers);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-[#E2E5E9] px-4 py-4">
        <div className="max-w-[800px] mx-auto flex items-center justify-between">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-[#24234C]/60 hover:text-[#24234C] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <img src="/logo.png" alt="Coursiv" className="h-8" />
          
          {/* Only show progress for question steps */}
          {(step.type === 'identity' || step.type === 'question' || step.type === 'multi-select') && (
            <div className="text-sm text-[#24234C]/40">
              {quizSteps.filter((s, i) => i < currentStep - 1 && (s.type === 'identity' || s.type === 'question' || s.type === 'multi-select')).length + 1} / {quizSteps.filter(s => s.type === 'identity' || s.type === 'question' || s.type === 'multi-select').length}
            </div>
          )}
          {/* Empty placeholder for non-question steps to maintain layout */}
          {!(step.type === 'identity' || step.type === 'question' || step.type === 'multi-select') && (
            <div className="w-12"></div>
          )}
        </div>
      </header>

      {/* Progress Bar */}
      {step.type !== 'loading' && step.type !== 'ai-profile' && step.type !== 'personal-plan' && (
        <div className="w-full px-4 py-3">
          <div className="max-w-[800px] mx-auto">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      )}

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[600px]">
          
          {/* Identity Selection */}
          {step.type === 'identity' && (
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#24234C] mb-3">
                {step.question}
              </h1>
              <p className="text-lg text-[#24234C]/60 mb-10">
                {step.subtitle}
              </p>
              
              <div className="grid gap-4">
                {step.options?.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={`w-full p-5 rounded-2xl border-2 text-left transition-all duration-200 hover:border-[#5A4CFF] hover:shadow-lg ${
                      answers[currentStep] === option.id 
                        ? 'border-[#5A4CFF] bg-[#5A4CFF]/5' 
                        : 'border-[#E2E5E9]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{option.icon}</span>
                      <span className="font-semibold text-[#24234C]">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Social Proof */}
          {step.type === 'social-proof' && (
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-[#5A4CFF] mb-2">
                {step.title}
              </div>
              <p className="text-xl text-[#24234C]/60 mb-10">
                {step.subtitle}
              </p>
              
              {/* Trustpilot-style rating */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-sm text-[#24234C]/60">
                  "The experience is topnotch" - Featured reviews from Trustpilot
                </p>
              </div>
              
              <Button 
                onClick={handleContinue}
                className="h-14 px-12 bg-[#FFD84D] hover:bg-[#FFCE1F] text-[#24234C] rounded-full text-lg font-medium"
              >
                CONTINUE
              </Button>
            </div>
          )}

          {/* Standard Question */}
          {step.type === 'question' && (
            <div className="text-center">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#24234C] mb-8">
                {step.question}
              </h1>
              
              <div className="grid gap-3">
                {step.options?.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-[#5A4CFF] hover:shadow-md flex items-center gap-4 ${
                      answers[currentStep] === option.id 
                        ? 'border-[#5A4CFF] bg-[#5A4CFF]/5' 
                        : 'border-[#E2E5E9]'
                    }`}
                  >
                    {option.icon && <span className="text-2xl">{option.icon}</span>}
                    <span className="font-medium text-[#24234C]">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Multi-Select Question */}
          {step.type === 'multi-select' && (
            <div className="text-center">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#24234C] mb-2">
                {step.question}
              </h1>
              <p className="text-[#24234C]/60 mb-8">{step.subtitle}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {step.options?.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleMultiSelectToggle(option.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-[#5A4CFF] flex items-center gap-3 ${
                      multiSelectAnswers.includes(option.id)
                        ? 'border-[#5A4CFF] bg-[#5A4CFF]/5' 
                        : 'border-[#E2E5E9]'
                    }`}
                  >
                    {option.icon && <span className="text-xl">{option.icon}</span>}
                    <span className="font-medium text-[#24234C] text-sm">{option.label}</span>
                    {multiSelectAnswers.includes(option.id) && (
                      <Check className="w-5 h-5 text-[#5A4CFF] ml-auto" />
                    )}
                  </button>
                ))}
              </div>
              
              <Button 
                onClick={handleMultiSelectContinue}
                className="h-14 px-12 bg-[#FFD84D] hover:bg-[#FFCE1F] text-[#24234C] rounded-full text-lg font-medium"
              >
                NEXT STEP
              </Button>
            </div>
          )}

          {/* Motivation Page */}
          {step.type === 'motivation' && (
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#5A4CFF] mb-6">
                {step.title}
              </h1>
              
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h2 className="text-xl font-bold text-[#24234C] mb-4">
                  {step.motivationContent?.headline}
                </h2>
                <p className="text-[#24234C]/70 leading-relaxed">
                  {step.motivationContent?.subtext}
                </p>
                {step.motivationContent?.source && (
                  <p className="text-sm text-[#5A4CFF] mt-4 font-medium">
                    — {step.motivationContent.source}
                  </p>
                )}
              </div>
              
              <Button 
                onClick={handleContinue}
                className="h-14 px-12 bg-[#FFD84D] hover:bg-[#FFCE1F] text-[#24234C] rounded-full text-lg font-medium"
              >
                CONTINUE
              </Button>
            </div>
          )}

          {/* AI Profile Page */}
          {step.type === 'ai-profile' && (
            <div className="text-center">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#24234C] mb-8">
                {step.title}
              </h1>
              
              <div className="bg-white rounded-2xl border-2 border-[#E2E5E9] p-6 mb-8">
                {/* Readiness Score */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-[#24234C]">Readiness score</span>
                    <span className="text-sm text-[#24234C]/60">Result: {aiProfile.readinessLabel}</span>
                  </div>
                  <div className="relative h-3 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full">
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#5A4CFF] rounded-full shadow-md transition-all duration-500"
                      style={{ left: `${aiProfile.readinessScore}%`, transform: 'translate(-50%, -50%)' }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-[#24234C]/40 mt-1">
                    <span>LOW</span>
                    <span>INTERMEDIATE</span>
                    <span>HIGH</span>
                  </div>
                </div>

                {/* Success Message */}
                <div className="bg-[#5A4CFF]/5 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👍</span>
                    <div className="text-left">
                      <p className="font-semibold text-[#24234C]">Impressive score to succeed in AI</p>
                      <p className="text-sm text-[#24234C]/60 mt-1">
                        A recent study by PwC in 2024 revealed that professionals in AI-related roles earn, on average, 25% more than their peers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Profile Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div className="text-left">
                      <p className="text-xs text-[#24234C]/40">Motivation</p>
                      <p className="font-semibold text-[#24234C]">{aiProfile.motivation}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div className="text-left">
                      <p className="text-xs text-[#24234C]/40">Potential</p>
                      <p className="font-semibold text-[#24234C]">{aiProfile.potential}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Target className="w-5 h-5 text-blue-500" />
                    <div className="text-left">
                      <p className="text-xs text-[#24234C]/40">Focus</p>
                      <p className="font-semibold text-[#24234C]">{aiProfile.focus}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Brain className="w-5 h-5 text-purple-500" />
                    <div className="text-left">
                      <p className="text-xs text-[#24234C]/40">AI Knowledge</p>
                      <p className="font-semibold text-[#24234C]">{aiProfile.aiKnowledge}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleContinue}
                className="h-14 px-12 bg-[#FFD84D] hover:bg-[#FFCE1F] text-[#24234C] rounded-full text-lg font-medium"
              >
                CONTINUE
              </Button>
            </div>
          )}

          {/* Personal Plan Page */}
          {step.type === 'personal-plan' && (
            <div className="text-center">
              {/* Readiness Level Badge */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-[#24234C]/60">Your readiness level</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  It's Perfect!
                </span>
              </div>

              {/* 4-Week Growth Curve */}
              <div className="bg-white rounded-2xl border-2 border-[#E2E5E9] p-6 mb-6">
                <div className="relative h-48">
                  {/* SVG Growth Curve */}
                  <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="140" x2="400" y2="140" stroke="#E5E7EB" strokeWidth="1" />
                    
                    {/* Animated growth curve */}
                    <defs>
                      <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="33%" stopColor="#F59E0B" />
                        <stop offset="66%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#5A4CFF" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 20 130 Q 100 120 150 100 Q 200 80 250 50 Q 300 25 380 15"
                      fill="none"
                      stroke="url(#curveGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="animate-drawPath"
                    />
                    
                    {/* Week markers */}
                    {[0, 1, 2, 3].map((week) => (
                      <g key={week}>
                        <circle
                          cx={20 + week * 120}
                          cy={week === 0 ? 130 : week === 1 ? 100 : week === 2 ? 50 : 15}
                          r="6"
                          fill={week === 0 ? '#EF4444' : week === 1 ? '#F59E0B' : week === 2 ? '#10B981' : '#5A4CFF'}
                          className="animate-pulse"
                        />
                      </g>
                    ))}
                  </svg>
                  
                  {/* Week labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
                    {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, index) => (
                      <span key={week} className="text-xs text-[#24234C]/40">{week}</span>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#24234C]/40 mt-4">Results will be influenced by your consistency and commitment</p>
              </div>

              {/* Title */}
              <h1 className="text-xl lg:text-2xl font-bold text-[#24234C] mb-6">
                Your 4-week Personal AI Challenge is ready!
              </h1>
              
              <Button 
                onClick={handleContinue}
                className="h-14 px-12 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full text-lg font-medium"
              >
                CONTINUE
              </Button>

              <style>{`
                @keyframes drawPath {
                  from { stroke-dashoffset: 500; }
                  to { stroke-dashoffset: 0; }
                }
                .animate-drawPath {
                  stroke-dasharray: 500;
                  animation: drawPath 2s ease-out forwards;
                }
              `}</style>
            </div>
          )}

          {/* Loading */}
          {step.type === 'loading' && (
            <div className="text-center">
              {/* Circular Progress */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#E2E5E9"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#5A4CFF"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - loadingProgress / 100)}`}
                    className="transition-all duration-100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#24234C]">{loadingProgress}%</span>
                </div>
              </div>
              
              <h1 className="text-xl lg:text-2xl font-bold text-[#24234C] mb-3">
                {step.title}
              </h1>
              
              {/* Social Proof during loading */}
              <div className="mt-8">
                <p className="text-4xl font-bold text-[#5A4CFF] mb-2">700,000+ people</p>
                <p className="text-[#24234C]/60">have chosen Coursiv</p>
              </div>

              {/* Trustpilot Review */}
              <div className="bg-gray-50 rounded-2xl p-6 mt-8 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="font-semibold text-[#24234C] mb-2">The experience is topnotch</p>
                <p className="text-sm text-[#24234C]/60">
                  "Excellent service, clear communication, and a real commitment to quality made my experience outstanding."
                </p>
                <p className="text-xs text-[#24234C]/40 mt-3">Featured reviews from Trustpilot.</p>
              </div>
            </div>
          )}

          {/* Scratch Card */}
          {step.type === 'scratch-card' && (
            <ScratchCardPage onComplete={handleContinue} />
          )}

          {/* Registration */}
          {step.type === 'register' && (
            <div className="text-center">
              <h1 className="text-xl lg:text-2xl font-bold text-[#24234C] mb-2">
                Enter your email to get your{' '}
                <span className="text-[#5A4CFF]">Personal AI Challenge!</span>
              </h1>
              <p className="text-sm text-[#24234C]/60 mb-8">
                {step.subtitle}
              </p>
              
              <div className="space-y-4 max-w-[400px] mx-auto">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full h-14 px-6 pl-12 rounded-xl border-2 border-dashed border-orange-300 focus:border-[#5A4CFF] focus:border-solid focus:outline-none text-lg bg-white"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#24234C]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className="w-full h-14 px-6 pr-12 rounded-xl border-2 border-[#E2E5E9] focus:border-[#5A4CFF] focus:outline-none text-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#24234C]/40 hover:text-[#24234C]"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <p className="text-xs text-[#24234C]/40 flex items-start gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  We respect your privacy and are committed to protecting your personal data. Your data will be processed in accordance with our Privacy Policy.
                </p>
                
                <Button 
                  onClick={handleRegisterSubmit}
                  disabled={!email || !password || password.length < 6 || isLoading}
                  className="w-full h-14 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-xl text-lg font-medium disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'CONTINUE'
                  )}
                </Button>

                <div className="pt-4 border-t border-[#E2E5E9]">
                  <p className="text-sm text-[#24234C]/60">
                    Already have an account?{' '}
                    <a href="/login" className="text-[#5A4CFF] hover:underline font-medium">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
