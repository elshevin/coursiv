import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLocation, useParams } from "wouter";
import { ChevronLeft, Loader2 } from "lucide-react";

// Mock Quiz Data - 22 steps based on Figma design
const quizSteps = [
  {
    id: 1,
    type: 'identity',
    question: "Who are you?",
    subtitle: "Select the option that best describes you",
    options: [
      { id: 'employee', label: 'Employee', icon: '💼', description: 'Working for a company' },
      { id: 'freelancer', label: 'Freelancer', icon: '🎯', description: 'Self-employed professional' },
      { id: 'business', label: 'Business owner', icon: '🏢', description: 'Running my own business' },
      { id: 'student', label: 'Student', icon: '📚', description: 'Currently studying' },
      { id: 'other', label: 'Other', icon: '✨', description: 'Something else' },
    ]
  },
  {
    id: 2,
    type: 'social-proof',
    title: "Join 2M+ learners",
    subtitle: "People just like you are already mastering AI with Coursiv",
    stats: [
      { value: '2M+', label: 'Active learners' },
      { value: '4.8', label: 'App Store rating' },
      { value: '50+', label: 'AI courses' },
    ]
  },
  {
    id: 3,
    type: 'question',
    question: "What's your age?",
    options: [
      { id: '18-24', label: '18-24' },
      { id: '25-34', label: '25-34' },
      { id: '35-44', label: '35-44' },
      { id: '45-54', label: '45-54' },
      { id: '55+', label: '55+' },
    ]
  },
  {
    id: 4,
    type: 'question',
    question: "What's your current experience with AI?",
    options: [
      { id: 'none', label: "I'm completely new to AI" },
      { id: 'basic', label: "I've tried some AI tools" },
      { id: 'intermediate', label: "I use AI regularly" },
      { id: 'advanced', label: "I'm an AI expert" },
    ]
  },
  {
    id: 5,
    type: 'question',
    question: "What's your main goal with AI?",
    options: [
      { id: 'career', label: 'Advance my career' },
      { id: 'productivity', label: 'Boost productivity' },
      { id: 'business', label: 'Grow my business' },
      { id: 'curiosity', label: 'Just curious about AI' },
    ]
  },
  {
    id: 6,
    type: 'question',
    question: "Which AI area interests you most?",
    options: [
      { id: 'chatgpt', label: 'ChatGPT & Language AI' },
      { id: 'image', label: 'Image Generation (DALL-E, Midjourney)' },
      { id: 'automation', label: 'Workflow Automation' },
      { id: 'data', label: 'Data Analysis' },
      { id: 'all', label: 'All of the above' },
    ]
  },
  {
    id: 7,
    type: 'question',
    question: "How much time can you dedicate to learning?",
    options: [
      { id: '5min', label: '5 minutes a day' },
      { id: '15min', label: '15 minutes a day' },
      { id: '30min', label: '30 minutes a day' },
      { id: '1hour', label: '1 hour or more' },
    ]
  },
  {
    id: 8,
    type: 'question',
    question: "What's your preferred learning style?",
    options: [
      { id: 'video', label: 'Video lessons' },
      { id: 'reading', label: 'Reading guides' },
      { id: 'interactive', label: 'Interactive exercises' },
      { id: 'mixed', label: 'Mix of everything' },
    ]
  },
  {
    id: 9,
    type: 'question',
    question: "Have you used ChatGPT before?",
    options: [
      { id: 'never', label: 'Never' },
      { id: 'few', label: 'A few times' },
      { id: 'regular', label: 'Regularly' },
      { id: 'daily', label: 'Daily' },
    ]
  },
  {
    id: 10,
    type: 'question',
    question: "What challenges do you face with AI?",
    options: [
      { id: 'prompts', label: "Don't know how to write good prompts" },
      { id: 'tools', label: "Don't know which tools to use" },
      { id: 'time', label: "Don't have time to learn" },
      { id: 'overwhelmed', label: 'Too much information' },
    ]
  },
  {
    id: 11,
    type: 'question',
    question: "What industry do you work in?",
    options: [
      { id: 'tech', label: 'Technology' },
      { id: 'marketing', label: 'Marketing' },
      { id: 'finance', label: 'Finance' },
      { id: 'healthcare', label: 'Healthcare' },
      { id: 'education', label: 'Education' },
      { id: 'other', label: 'Other' },
    ]
  },
  {
    id: 12,
    type: 'question',
    question: "Do you want to use AI for work tasks?",
    options: [
      { id: 'yes', label: 'Yes, definitely' },
      { id: 'maybe', label: 'Maybe, if it helps' },
      { id: 'personal', label: 'Mostly for personal use' },
    ]
  },
  {
    id: 13,
    type: 'question',
    question: "What would make you feel successful?",
    options: [
      { id: 'promotion', label: 'Getting a promotion' },
      { id: 'efficiency', label: 'Working more efficiently' },
      { id: 'income', label: 'Increasing my income' },
      { id: 'skills', label: 'Learning new skills' },
    ]
  },
  {
    id: 14,
    type: 'question',
    question: "How do you prefer to learn new things?",
    options: [
      { id: 'structured', label: 'Structured courses' },
      { id: 'explore', label: 'Self-exploration' },
      { id: 'mentor', label: 'With a mentor' },
      { id: 'community', label: 'In a community' },
    ]
  },
  {
    id: 15,
    type: 'question',
    question: "What's your biggest motivation?",
    options: [
      { id: 'career', label: 'Career growth' },
      { id: 'money', label: 'Making more money' },
      { id: 'relevance', label: 'Staying relevant' },
      { id: 'curiosity', label: 'Personal curiosity' },
    ]
  },
  {
    id: 16,
    type: 'question',
    question: "When do you usually have time to learn?",
    options: [
      { id: 'morning', label: 'Morning' },
      { id: 'lunch', label: 'Lunch break' },
      { id: 'evening', label: 'Evening' },
      { id: 'weekend', label: 'Weekends' },
    ]
  },
  {
    id: 17,
    type: 'question',
    question: "Do you have a specific AI project in mind?",
    options: [
      { id: 'yes', label: 'Yes, I have a project' },
      { id: 'ideas', label: 'I have some ideas' },
      { id: 'no', label: 'Not yet' },
    ]
  },
  {
    id: 18,
    type: 'question',
    question: "How important is certification to you?",
    options: [
      { id: 'very', label: 'Very important' },
      { id: 'somewhat', label: 'Somewhat important' },
      { id: 'not', label: 'Not important' },
    ]
  },
  {
    id: 19,
    type: 'question',
    question: "Would you recommend AI learning to others?",
    options: [
      { id: 'yes', label: 'Yes, definitely' },
      { id: 'maybe', label: 'Maybe' },
      { id: 'depends', label: 'Depends on the person' },
    ]
  },
  {
    id: 20,
    type: 'question',
    question: "What's holding you back from learning AI?",
    options: [
      { id: 'time', label: 'Lack of time' },
      { id: 'resources', label: 'Lack of resources' },
      { id: 'motivation', label: 'Lack of motivation' },
      { id: 'nothing', label: 'Nothing, I\'m ready!' },
    ]
  },
  {
    id: 21,
    type: 'loading',
    title: "Creating your personalized plan...",
    subtitle: "Based on your answers, we're building the perfect learning path for you"
  },
  {
    id: 22,
    type: 'email',
    title: "Almost there!",
    subtitle: "Enter your email to save your personalized learning plan"
  },
];

export default function Quiz() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const currentStep = parseInt(params.step || '1');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const step = quizSteps[currentStep - 1];
  const progress = (currentStep / quizSteps.length) * 100;

  useEffect(() => {
    // Auto-advance for loading step
    if (step?.type === 'loading') {
      const timer = setTimeout(() => {
        setLocation(`/quiz/${currentStep + 1}`);
      }, 3000);
      return () => clearTimeout(timer);
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

  const handleBack = () => {
    if (currentStep > 1) {
      setLocation(`/quiz/${currentStep - 1}`);
    } else {
      setLocation('/');
    }
  };

  const handleEmailSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLocation('/upsell');
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
            <span className="text-sm">Back</span>
          </button>
          
          <img src="/2-332.svg" alt="Coursiv" className="h-6" />
          
          <div className="w-16" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full px-4 py-3">
        <div className="max-w-[800px] mx-auto">
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-[#24234C]/40 mt-2 text-center">
            Step {currentStep} of {quizSteps.length}
          </p>
        </div>
      </div>

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
                      {'icon' in option && <span className="text-3xl">{option.icon}</span>}
                      <div>
                        <div className="font-semibold text-[#24234C]">{option.label}</div>
                        {'description' in option && <div className="text-sm text-[#24234C]/60">{option.description}</div>}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Social Proof */}
          {step.type === 'social-proof' && (
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#24234C] mb-3">
                {step.title}
              </h1>
              <p className="text-lg text-[#24234C]/60 mb-10">
                {step.subtitle}
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-10">
                {step.stats?.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-[#5A4CFF]">{stat.value}</div>
                    <div className="text-sm text-[#24234C]/60">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={handleContinue}
                className="h-14 px-12 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full text-lg font-medium"
              >
                Continue
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
                    className={`w-full p-4 rounded-xl border-2 text-center transition-all duration-200 hover:border-[#5A4CFF] hover:shadow-md ${
                      answers[currentStep] === option.id 
                        ? 'border-[#5A4CFF] bg-[#5A4CFF]/5' 
                        : 'border-[#E2E5E9]'
                    }`}
                  >
                    <span className="font-medium text-[#24234C]">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading */}
          {step.type === 'loading' && (
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-8 relative">
                <div className="absolute inset-0 border-4 border-[#E2E5E9] rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[#5A4CFF] rounded-full border-t-transparent animate-spin"></div>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#24234C] mb-3">
                {step.title}
              </h1>
              <p className="text-lg text-[#24234C]/60">
                {step.subtitle}
              </p>
            </div>
          )}

          {/* Email Collection */}
          {step.type === 'email' && (
            <div className="text-center">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#24234C] mb-3">
                {step.title}
              </h1>
              <p className="text-lg text-[#24234C]/60 mb-8">
                {step.subtitle}
              </p>
              
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-14 px-6 rounded-xl border-2 border-[#E2E5E9] focus:border-[#5A4CFF] focus:outline-none text-lg"
                />
                
                <Button 
                  onClick={handleEmailSubmit}
                  disabled={!email || isLoading}
                  className="w-full h-14 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-xl text-lg font-medium disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Continue'
                  )}
                </Button>
                
                <p className="text-xs text-[#24234C]/40">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
