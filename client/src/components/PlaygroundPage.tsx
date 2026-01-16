// Playground Page Component - Full-screen playground experience
// Based on the Coursiv-style design with three states: entry, practice, complete

import React, { useState } from 'react';
import { PlaygroundBlock, PlaygroundBlank } from '../../../shared/courseContentTypes';
import { MarkdownRenderer } from './MarkdownRenderer';

interface PlaygroundPageProps {
  block: PlaygroundBlock;
  onComplete: () => void;
  onBack: () => void;
}

// Parse template string into parts
function parsePromptTemplate(template: string, blanks: PlaygroundBlank[]) {
  const parts: Array<{ type: 'text'; content: string } | { type: 'blank'; blank: PlaygroundBlank }> = [];
  let remaining = template;
  
  while (remaining.length > 0) {
    // Find the next blank placeholder [blankId]
    const match = remaining.match(/\[([^\]]+)\]/);
    if (match && match.index !== undefined) {
      // Add text before the blank
      if (match.index > 0) {
        parts.push({ type: 'text', content: remaining.slice(0, match.index) });
      }
      
      // Find the corresponding blank
      const blankId = match[1];
      const blank = blanks.find(b => b.id === blankId);
      if (blank) {
        parts.push({ type: 'blank', blank });
      } else {
        // If no matching blank, treat as text
        parts.push({ type: 'text', content: match[0] });
      }
      
      remaining = remaining.slice(match.index + match[0].length);
    } else {
      // No more blanks, add remaining text
      parts.push({ type: 'text', content: remaining });
      break;
    }
  }
  
  return parts;
}

export function PlaygroundPage({ block, onComplete, onBack }: PlaygroundPageProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [activeBlankIndex, setActiveBlankIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const blanks = block.content.blanks;
  const allBlanksSelected = blanks.every(b => selectedAnswers[b.id]);
  
  // Parse the template string
  const templateParts = parsePromptTemplate(block.content.promptTemplate, blanks);

  // Get available options (not yet selected)
  const usedOptions = new Set(Object.values(selectedAnswers));
  const availableOptions = block.content.options.filter(opt => !usedOptions.has(opt));

  const handleOptionClick = (option: string) => {
    if (activeBlankIndex >= blanks.length) return;
    
    const currentBlank = blanks[activeBlankIndex];
    setSelectedAnswers(prev => ({ ...prev, [currentBlank.id]: option }));
    
    // Move to next unfilled blank
    const nextUnfilledIndex = blanks.findIndex((b, i) => i > activeBlankIndex && !selectedAnswers[b.id]);
    if (nextUnfilledIndex !== -1) {
      setActiveBlankIndex(nextUnfilledIndex);
    } else {
      setActiveBlankIndex(blanks.length);
    }
  };

  const handleBlankClick = (blankIndex: number) => {
    if (!showResult) {
      setActiveBlankIndex(blankIndex);
    }
  };

  const handleBackspace = () => {
    let lastFilledIndex = -1;
    for (let i = blanks.length - 1; i >= 0; i--) {
      if (selectedAnswers[blanks[i].id]) {
        lastFilledIndex = i;
        break;
      }
    }
    
    if (lastFilledIndex >= 0) {
      const blankId = blanks[lastFilledIndex].id;
      setSelectedAnswers(prev => {
        const newAnswers = { ...prev };
        delete newAnswers[blankId];
        return newAnswers;
      });
      setActiveBlankIndex(lastFilledIndex);
    }
  };

  const handleCheck = () => {
    const correct = blanks.every(
      b => selectedAnswers[b.id] === b.correctAnswer
    );
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) {
      onComplete();
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswers({});
    setActiveBlankIndex(0);
    setShowResult(false);
    setIsCorrect(false);
  };

  // Build the completed prompt text
  const getCompletedPrompt = () => {
    let result = '';
    templateParts.forEach(part => {
      if (part.type === 'text') {
        result += part.content;
      } else if (part.blank) {
        result += selectedAnswers[part.blank.id] || part.blank.placeholder;
      }
    });
    return result;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with back button */}
      <div className="px-4 py-3 border-b border-gray-200">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6">
        <h1 className="text-xl font-bold text-gray-900 mb-2">{block.content.title}</h1>
        <p className="text-gray-600 mb-6">{block.content.description}</p>

        {/* AI Tool header */}
        <div className="bg-gray-100 rounded-lg px-4 py-3 mb-4 flex items-center gap-2">
          <span className="text-xl">{block.content.aiTool.icon}</span>
          <span className="font-medium text-gray-700">{block.content.aiTool.name}</span>
        </div>

        {/* Prompt with blanks or completed prompt */}
        {!showResult ? (
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-1 leading-loose text-gray-700">
              {templateParts.map((part, index) => {
                if (part.type === 'text') {
                  return <span key={index}>{part.content}</span>;
                } else if (part.blank) {
                  const blankIndex = blanks.findIndex(b => b.id === part.blank!.id);
                  const value = selectedAnswers[part.blank.id];
                  const isActive = blankIndex === activeBlankIndex;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleBlankClick(blankIndex)}
                      className={`inline-flex items-center px-3 py-1 rounded border-l-4 min-w-[80px] transition-all ${
                        value
                          ? isActive
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-purple-300 bg-purple-50 text-purple-600'
                          : isActive
                            ? 'border-purple-500 bg-purple-50 text-purple-400'
                            : 'border-gray-300 bg-gray-50 text-gray-400'
                      }`}
                    >
                      {value || part.blank.placeholder}
                    </button>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ) : (
          <div className="mb-6">
            {/* User's completed prompt */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-400 flex-shrink-0" />
              <p className="text-gray-700 pt-1">{getCompletedPrompt()}</p>
            </div>
            
            {/* Result Image - Show immediately after correct answer */}
            {isCorrect && block.content.resultImage && !block.content.showImageOnStart && (
              <div className="w-full rounded-xl overflow-hidden border border-gray-200 mb-4">
                <img 
                  src={block.content.resultImage} 
                  alt="AI Generated Result" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/course/success.png';
                  }}
                />
              </div>
            )}
            
            {/* AI Response */}
            {isCorrect && block.content.aiResponse && (
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{block.content.aiTool.icon}</span>
                  <div className="prose prose-sm max-w-none text-gray-700">
                    <MarkdownRenderer content={block.content.aiResponse} />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom action area */}
      <div className="px-4 py-4 pb-16 border-t border-gray-100 bg-gray-50">
        {!showResult ? (
          <>
            {/* Options */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {availableOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
            
            {/* Check and Backspace buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCheck}
                disabled={!allBlanksSelected}
                className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
                  allBlanksSelected
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Check
              </button>
              <button
                onClick={handleBackspace}
                disabled={Object.keys(selectedAnswers).length === 0}
                className={`px-4 py-3 rounded-xl border transition-colors ${
                  Object.keys(selectedAnswers).length > 0
                    ? 'border-gray-300 text-gray-600 hover:bg-gray-100'
                    : 'border-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                ⌫
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Result feedback */}
            <div className={`border-t-4 ${isCorrect ? 'border-green-500' : 'border-red-500'} -mx-4 -mt-4 mb-4`} />
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`text-xl ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? '✓' : '✗'}
                </span>
                <span className={`font-bold text-lg ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? block.content.successFeedback.title : 'Incorrect'}
                </span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">
              {isCorrect ? block.content.successFeedback.message : `Correct answer: ${blanks.map(b => b.correctAnswer).join(', ')}`}
            </p>
            
            {isCorrect ? (
              <button
                onClick={onBack}
                className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleTryAgain}
                className="w-full py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors"
              >
                Try Again
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
