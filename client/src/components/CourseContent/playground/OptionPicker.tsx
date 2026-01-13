import React from 'react';

interface OptionPickerProps {
  options: string[];
  onSelect: (option: string) => void;
}

export const OptionPicker: React.FC<OptionPickerProps> = ({
  options,
  onSelect
}) => {
  if (options.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-gray-700 font-medium hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-200 active:scale-95"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionPicker;
