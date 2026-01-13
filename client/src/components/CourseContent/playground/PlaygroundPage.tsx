import React, { useState, useCallback } from 'react';
import type { PlaygroundPage as PlaygroundPageType } from '../types';
import { PromptEditor } from './PromptEditor';
import { OptionPicker } from './OptionPicker';
import { ResultDisplay } from './ResultDisplay';
import { SuccessFeedback } from './SuccessFeedback';
import { Delete } from 'lucide-react';

interface PlaygroundPageProps {
  content: PlaygroundPageType['content'];
  onComplete: () => void;
}

export const PlaygroundPage: React.FC<PlaygroundPageProps> = ({ 
  content, 
  onComplete 
}) => {
  // Track filled blanks: { blankLabel: selectedOption }
  const [filledBlanks, setFilledBlanks] = useState<Record<string, string>>({});
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Get all blank labels from the prompt template
  const blankLabels = content.promptTemplate
    .filter(segment => segment.type === 'blank')
    .map(segment => segment.label!);

  // Get available options (not yet used)
  const usedOptions = Object.values(filledBlanks);
  const availableOptions = content.options.filter(opt => !usedOptions.includes(opt));

  // Get the next unfilled blank
  const getNextUnfilledBlank = useCallback(() => {
    return blankLabels.find(label => !filledBlanks[label]) || null;
  }, [blankLabels, filledBlanks]);

  // Handle option selection
  const handleOptionSelect = (option: string) => {
    const nextBlank = getNextUnfilledBlank();
    if (nextBlank) {
      setFilledBlanks(prev => ({
        ...prev,
        [nextBlank]: option
      }));
    }
  };

  // Handle backspace (remove last filled blank)
  const handleBackspace = () => {
    const filledLabels = blankLabels.filter(label => filledBlanks[label]);
    if (filledLabels.length > 0) {
      const lastFilledLabel = filledLabels[filledLabels.length - 1];
      setFilledBlanks(prev => {
        const newBlanks = { ...prev };
        delete newBlanks[lastFilledLabel];
        return newBlanks;
      });
    }
  };

  // Check if all blanks are filled
  const allBlanksFilled = blankLabels.every(label => filledBlanks[label]);

  // Handle check answer
  const handleCheck = () => {
    if (!allBlanksFilled) return;

    // Verify answers
    const correct = Object.entries(content.correctAnswers).every(
      ([label, answer]) => filledBlanks[label] === answer
    );

    setIsCorrect(correct);
    setIsChecked(true);
  };

  // If checked and correct, show result
  if (isChecked && isCorrect) {
    return (
      <div className="px-6 py-8">
        {/* Show the completed prompt */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🎨</span>
            <span className="text-gray-700 font-medium">
              {content.promptTemplate.map((segment, i) => 
                segment.type === 'text' 
                  ? segment.content 
                  : filledBlanks[segment.label!]
              ).join('')}
            </span>
          </div>
        </div>

        {/* AI Tool Badge */}
        <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-gray-100 rounded-lg w-fit">
          <span className="text-sm">{content.aiTool.icon}</span>
          <span className="text-sm font-medium text-gray-700">{content.aiTool.name}</span>
        </div>

        {/* Result Image */}
        <ResultDisplay imageUrl={content.resultImage} />

        {/* Success Feedback */}
        <SuccessFeedback 
          title={content.successFeedback.title}
          message={content.successFeedback.message}
          onContinue={onComplete}
        />
      </div>
    );
  }

  return (
    <div className="px-6 py-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {content.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-6">
        {content.description}
      </p>

      {/* AI Tool Badge */}
      <div className="flex items-center gap-2 mb-6 px-3 py-2 bg-gray-100 rounded-lg w-fit">
        <span className="text-sm">{content.aiTool.icon}</span>
        <span className="text-sm font-medium text-gray-700">{content.aiTool.name}</span>
      </div>

      {/* Prompt Editor */}
      <PromptEditor
        template={content.promptTemplate}
        filledBlanks={filledBlanks}
        nextBlankLabel={getNextUnfilledBlank()}
      />

      {/* Option Picker */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <OptionPicker
            options={availableOptions}
            onSelect={handleOptionSelect}
          />

          {/* Backspace Button */}
          <button
            onClick={handleBackspace}
            disabled={Object.keys(filledBlanks).length === 0}
            className={`p-3 rounded-lg border-2 transition-all ${
              Object.keys(filledBlanks).length > 0
                ? 'border-gray-300 text-gray-600 hover:border-gray-400'
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
          >
            <Delete className="w-5 h-5" />
          </button>
        </div>

        {/* Check Button */}
        <button
          onClick={handleCheck}
          disabled={!allBlanksFilled}
          className={`w-full mt-6 py-4 rounded-xl font-semibold text-base transition-all duration-200 ${
            allBlanksFilled
              ? 'bg-[#7C3AED] text-white hover:bg-[#5B21B6] active:scale-[0.98]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default PlaygroundPage;
