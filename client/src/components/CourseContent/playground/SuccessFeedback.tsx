import React from 'react';
import { Check, Flag } from 'lucide-react';

interface SuccessFeedbackProps {
  title: string;
  message: string;
  onContinue: () => void;
}

export const SuccessFeedback: React.FC<SuccessFeedbackProps> = ({
  title,
  message,
  onContinue
}) => {
  return (
    <div className="border-t-4 border-green-500 pt-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          {/* Success Icon */}
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
            <Check className="w-5 h-5 text-white" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-gray-600">
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
        className="w-full mt-6 py-4 rounded-xl font-semibold text-base bg-green-500 text-white hover:bg-green-600 active:scale-[0.98] transition-all duration-200"
      >
        Continue
      </button>
    </div>
  );
};

export default SuccessFeedback;
