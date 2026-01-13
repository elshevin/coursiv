import React from 'react';
import { Check, Flag } from 'lucide-react';

interface SuccessFeedbackProps {
  title: string;
  message: string;
  onContinue: () => void;
}

/**
 * Coursiv-style Success Feedback Component
 * 
 * Key styling:
 * - Green left border (4px) instead of top border
 * - White background with shadow
 * - "Correct answer" style title
 */
export const SuccessFeedback: React.FC<SuccessFeedbackProps> = ({
  title,
  message,
  onContinue
}) => {
  return (
    <div 
      className="mt-6 p-4 rounded-xl bg-white border border-gray-100 shadow-sm border-l-4 border-l-green-500"
      data-testid="success-feedback"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          {/* Success Icon */}
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <Check className="w-5 h-5 text-green-600" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-base font-bold text-green-700 mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-700">
              {message}
            </p>
          </div>
        </div>

        {/* Report Button */}
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Flag className="w-5 h-5" />
        </button>
      </div>

      {/* Continue Button */}
      <button
        onClick={onContinue}
        className="w-full mt-6 py-4 rounded-xl font-semibold text-base bg-[#7C3AED] text-white hover:bg-[#5B21B6] active:scale-[0.98] transition-all duration-200"
        data-testid="continue-button"
      >
        Continue
      </button>
    </div>
  );
};

export default SuccessFeedback;
