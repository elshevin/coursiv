import React from 'react';
import { Check, X, RotateCcw } from 'lucide-react';

interface QuizFeedbackProps {
  isCorrect: boolean;
  explanation: string;
  onTryAgain?: () => void;
}

/**
 * Coursiv-style Quiz Feedback Component
 * 
 * Key styling differences:
 * - Green/Red left border (4px) instead of full border
 * - White background instead of colored background
 * - "Correct answer" / "Incorrect" title text
 */
export const QuizFeedback: React.FC<QuizFeedbackProps> = ({
  isCorrect,
  explanation,
  onTryAgain
}) => {
  return (
    <div 
      className={`mt-6 p-4 rounded-xl bg-white border border-gray-100 shadow-sm ${
        isCorrect ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-red-500'
      }`}
      data-testid="quiz-feedback"
    >
      {/* Header with icon and title */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isCorrect ? 'bg-green-100' : 'bg-red-100'
        }`}>
          {isCorrect ? (
            <Check className="w-5 h-5 text-green-600" />
          ) : (
            <X className="w-5 h-5 text-red-600" />
          )}
        </div>
        <span className={`font-bold text-base ${
          isCorrect ? 'text-green-700' : 'text-red-700'
        }`}>
          {isCorrect ? 'Correct answer' : 'Incorrect'}
        </span>
      </div>

      {/* Explanation */}
      <p className="text-sm leading-relaxed text-gray-700">
        {explanation}
      </p>

      {/* Try Again Button (only for wrong answers) */}
      {!isCorrect && onTryAgain && (
        <button
          onClick={onTryAgain}
          className="mt-4 flex items-center gap-2 text-sm font-medium text-[#7C3AED] hover:text-[#5B21B6] transition-colors"
          data-testid="try-again-button"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default QuizFeedback;
