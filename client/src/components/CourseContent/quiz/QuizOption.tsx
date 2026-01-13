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

/**
 * Coursiv-style Quiz Option Component
 * 
 * Key styling differences from original:
 * - Selected state: Purple filled circle indicator (not just border)
 * - Correct state: Green left border + green check icon
 * - Wrong state: Red left border + red X icon
 */
export const QuizOption: React.FC<QuizOptionProps> = ({
  option,
  index,
  isSelected,
  isCorrect,
  isWrong,
  isSubmitted,
  onClick
}) => {
  // Determine the style based on state - Coursiv style
  const getStyles = () => {
    if (isCorrect) {
      return {
        container: 'border-l-4 border-l-green-500 border-y border-r border-gray-200 bg-white',
        label: 'bg-green-500 text-white',
        text: 'text-gray-800',
        icon: <Check className="w-5 h-5 text-green-500" />,
        radioIcon: null
      };
    }
    if (isWrong) {
      return {
        container: 'border-l-4 border-l-red-500 border-y border-r border-gray-200 bg-white',
        label: 'bg-red-500 text-white',
        text: 'text-gray-800',
        icon: <X className="w-5 h-5 text-red-500" />,
        radioIcon: null
      };
    }
    if (isSelected) {
      return {
        container: 'border border-[#7C3AED] bg-white shadow-sm',
        label: 'bg-gray-100 text-gray-600',
        text: 'text-gray-800',
        icon: null,
        // Purple filled circle for selected state (Coursiv style)
        radioIcon: (
          <div className="w-5 h-5 rounded-full bg-[#7C3AED] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        )
      };
    }
    return {
      container: 'border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm',
      label: 'bg-gray-100 text-gray-600',
      text: 'text-gray-700',
      icon: null,
      // Empty circle for unselected state
      radioIcon: (
        <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
      )
    };
  };

  const styles = getStyles();

  return (
    <button
      onClick={onClick}
      disabled={isSubmitted}
      className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${styles.container} ${
        !isSubmitted ? 'cursor-pointer' : 'cursor-default'
      }`}
      data-testid={`quiz-option-${optionLabels[index]}`}
    >
      {/* Radio Icon (Coursiv style - circle indicator) */}
      {styles.radioIcon && (
        <span className="flex-shrink-0">
          {styles.radioIcon}
        </span>
      )}

      {/* Option Label (A, B, C, D) */}
      <span className={`w-8 h-8 flex items-center justify-center rounded-lg font-semibold text-sm ${styles.label}`}>
        {optionLabels[index]}
      </span>

      {/* Option Text */}
      <span className={`flex-1 text-left font-medium ${styles.text}`}>
        {option.text}
      </span>

      {/* Result Icon (check or X) */}
      {styles.icon && (
        <span className="flex-shrink-0">
          {styles.icon}
        </span>
      )}
    </button>
  );
};

export default QuizOption;
