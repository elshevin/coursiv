import React from 'react';
import { Check, X } from 'lucide-react';
import type { QuizOption as QuizOptionType } from '../types';

interface QuizOptionProps {
  option: QuizOptionType;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  isWrong: boolean;
  isSubmitted: boolean;
  onClick: () => void;
}

const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

export const QuizOption: React.FC<QuizOptionProps> = ({
  option,
  index,
  isSelected,
  isCorrect,
  isWrong,
  isSubmitted,
  onClick
}) => {
  // Determine the style based on state
  const getStyles = () => {
    if (isCorrect) {
      return {
        container: 'border-green-500 bg-green-50',
        label: 'bg-green-500 text-white',
        text: 'text-green-700',
        icon: <Check className="w-5 h-5 text-green-500" />
      };
    }
    if (isWrong) {
      return {
        container: 'border-red-500 bg-red-50',
        label: 'bg-red-500 text-white',
        text: 'text-red-700',
        icon: <X className="w-5 h-5 text-red-500" />
      };
    }
    if (isSelected) {
      return {
        container: 'border-[#7C3AED] bg-purple-50',
        label: 'bg-[#7C3AED] text-white',
        text: 'text-[#7C3AED]',
        icon: null
      };
    }
    return {
      container: 'border-gray-200 bg-white hover:border-gray-300',
      label: 'bg-gray-100 text-gray-600',
      text: 'text-gray-700',
      icon: null
    };
  };

  const styles = getStyles();

  return (
    <button
      onClick={onClick}
      disabled={isSubmitted}
      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 ${styles.container} ${
        !isSubmitted ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      {/* Option Label (A, B, C, D) */}
      <span className={`w-8 h-8 flex items-center justify-center rounded-lg font-semibold text-sm ${styles.label}`}>
        {optionLabels[index]}
      </span>

      {/* Option Text */}
      <span className={`flex-1 text-left font-medium ${styles.text}`}>
        {option.text}
      </span>

      {/* Result Icon */}
      {styles.icon && (
        <span className="flex-shrink-0">
          {styles.icon}
        </span>
      )}
    </button>
  );
};

export default QuizOption;
