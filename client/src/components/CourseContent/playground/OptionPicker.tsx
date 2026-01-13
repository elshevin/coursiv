import React from 'react';

interface OptionPickerProps {
  options: string[];
  onSelect: (option: string) => void;
}

/**
 * Coursiv-style Option Picker Component
 * 
 * Key styling:
 * - Pill-shaped buttons with rounded corners
 * - Purple hover state
 * - Smooth transitions
 */
export const OptionPicker: React.FC<OptionPickerProps> = ({
  options,
  onSelect
}) => {
  if (options.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2" data-testid="option-picker">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-medium hover:border-[#7C3AED] hover:bg-purple-50 hover:text-[#7C3AED] transition-all duration-200 active:scale-95 shadow-sm"
          data-testid={`option-${index}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionPicker;
