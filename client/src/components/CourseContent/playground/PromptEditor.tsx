import React from 'react';
import type { PromptSegment } from '../types';

interface PromptEditorProps {
  template: PromptSegment[];
  filledBlanks: Record<string, string>;
  nextBlankLabel: string | null;
}

export const PromptEditor: React.FC<PromptEditorProps> = ({
  template,
  filledBlanks,
  nextBlankLabel
}) => {
  return (
    <div className="text-lg leading-relaxed">
      {template.map((segment, index) => {
        if (segment.type === 'text') {
          return (
            <span key={index} className="text-gray-700">
              {segment.content}
            </span>
          );
        }

        // It's a blank
        const label = segment.label!;
        const filledValue = filledBlanks[label];
        const isNext = label === nextBlankLabel;

        if (filledValue) {
          // Filled blank - show the value with purple background
          return (
            <span
              key={index}
              className="inline-flex items-center px-2 py-0.5 mx-1 bg-purple-100 text-[#7C3AED] rounded border-l-2 border-[#7C3AED] font-medium"
            >
              {filledValue}
            </span>
          );
        }

        // Empty blank - show placeholder
        return (
          <span
            key={index}
            className={`inline-flex items-center px-3 py-0.5 mx-1 rounded border-2 ${
              isNext
                ? 'border-[#7C3AED] bg-purple-50 text-[#7C3AED]'
                : 'border-gray-300 bg-gray-50 text-gray-400'
            }`}
          >
            {segment.content || label}
          </span>
        );
      })}
    </div>
  );
};

export default PromptEditor;
