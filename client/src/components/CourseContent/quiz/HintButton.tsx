import React from 'react';
import { Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

interface HintButtonProps {
  hint: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const HintButton: React.FC<HintButtonProps> = ({
  hint,
  isOpen,
  onToggle
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 text-sm font-medium text-[#7C3AED] hover:text-[#5B21B6] transition-colors"
      >
        <Lightbulb className="w-4 h-4" />
        <span>Need a hint?</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {/* Hint Content */}
      {isOpen && (
        <div className="mt-3 p-4 bg-purple-50 border border-purple-200 rounded-xl">
          <p className="text-sm text-purple-700 leading-relaxed">
            {hint}
          </p>
        </div>
      )}
    </div>
  );
};

export default HintButton;
