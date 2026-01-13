import React from 'react';
import type { PromptSegment } from '../types';

interface PromptEditorProps {
  template: PromptSegment[];
  filledBlanks: Record<string, string>;
  nextBlankLabel: string | null;
}

/**
 * Coursiv-style Prompt Editor Component
 * 
 * Key styling:
 * - Filled blanks: Purple background with purple left border
 * - Empty blanks: Purple border when active, gray when inactive
 * - Card-like container with shadow
 */
export const PromptEditor: React.FC<PromptEditorProps> = ({
  template,
  filledBlanks,
  nextBlankLabel
}) => {
  return (
    <div 
      className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
      data-testid="prompt-editor"
    >
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
            // Filled blank - show the value with purple background (Coursiv style)
            return (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 mx-1 bg-purple-100 text-[#7C3AED] rounded-lg border-l-4 border-l-[#7C3AED] font-medium"
                data-testid={`filled-blank-${label}`}
              >
                {filledValue}
              </span>
            );
          }

          // Empty blank - show placeholder with animation
          return (
            <span
              key={index}
              className={`inline-flex items-center px-4 py-1 mx-1 rounded-lg border-2 transition-all duration-200 ${
                isNext
                  ? 'border-[#7C3AED] bg-purple-50 text-[#7C3AED] animate-pulse'
                  : 'border-gray-300 bg-gray-50 text-gray-400'
              }`}
              data-testid={`empty-blank-${label}`}
            >
              {segment.content || label}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PromptEditor;
