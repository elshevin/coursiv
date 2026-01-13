import React from 'react';
import { Check, X, RotateCcw } from 'lucide-react';

interface QuizFeedbackProps {
  isCorrect: boolean;
  explanation: string;
  onTryAgain?: () => void;
}

export const QuizFeedback: React.FC<QuizFeedbackProps> = ({
  isCorrect,
  explanation,
  onTryAgain
}) => {
  return (
    <div className={`mt-6 p-4 rounded-xl ${
      isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
    }`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isCorrect ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {isCorrect ? (
            <Check className="w-5 h-5 text-white" />
          ) : (
            <X className="w-5 h-5 text-white" />
          )}
        </div>
        <span className={`font-bold text-lg ${
          isCorrect ? 'text-green-700' : 'text-red-700'
        }`}>
          {isCorrect ? 'Correct!' : 'Not quite!'}
        </span>
      </div>

      {/* Explanation */}
      <p className={`text-sm leading-relaxed ${
        isCorrect ? 'text-green-700' : 'text-red-700'
      }`}>
        {explanation}
      </p>

      {/* Try Again Button (only for wrong answers) */}
      {!isCorrect && onTryAgain && (
        <button
          onClick={onTryAgain}
          className="mt-4 flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default QuizFeedback;
