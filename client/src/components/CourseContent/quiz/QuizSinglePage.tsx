import React, { useState } from 'react';
import type { QuizSinglePage as QuizSinglePageType } from '../types';
import { QuizOption } from './QuizOption';
import { QuizFeedback } from './QuizFeedback';
import { HintButton } from './HintButton';

interface QuizSinglePageProps {
  content: QuizSinglePageType['content'];
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizSinglePage: React.FC<QuizSinglePageProps> = ({ 
  content, 
  onAnswer 
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const isCorrect = selectedOption === content.correctAnswer;

  const handleOptionSelect = (optionId: string) => {
    if (!isSubmitted) {
      setSelectedOption(optionId);
    }
  };

  const handleSubmit = () => {
    if (selectedOption && !isSubmitted) {
      setIsSubmitted(true);
      onAnswer(isCorrect);
    }
  };

  const handleTryAgain = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setShowHint(false);
  };

  return (
    <div className="px-6 py-8">
      {/* Context (optional) */}
      {content.context && (
        <div className="mb-6 p-4 bg-gray-50 rounded-xl">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">
            {content.context.title}
          </h3>
          <p className="text-sm text-gray-600">
            {content.context.description}
          </p>
        </div>
      )}

      {/* Question */}
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        {content.question}
      </h2>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {content.options.map((option, index) => (
          <QuizOption
            key={option.id}
            option={option}
            index={index}
            isSelected={selectedOption === option.id}
            isCorrect={isSubmitted && option.id === content.correctAnswer}
            isWrong={isSubmitted && selectedOption === option.id && option.id !== content.correctAnswer}
            isSubmitted={isSubmitted}
            onClick={() => handleOptionSelect(option.id)}
          />
        ))}
      </div>

      {/* Hint Button */}
      {content.hint && !isSubmitted && (
        <HintButton
          hint={content.hint}
          isOpen={showHint}
          onToggle={() => setShowHint(!showHint)}
        />
      )}

      {/* Feedback */}
      {isSubmitted && (
        <QuizFeedback
          isCorrect={isCorrect}
          explanation={content.explanation}
          onTryAgain={handleTryAgain}
        />
      )}

      {/* Submit Button */}
      {!isSubmitted && (
        <button
          onClick={handleSubmit}
          disabled={!selectedOption}
          className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 mt-6 ${
            selectedOption
              ? 'bg-[#7C3AED] text-white hover:bg-[#5B21B6] active:scale-[0.98]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default QuizSinglePage;
