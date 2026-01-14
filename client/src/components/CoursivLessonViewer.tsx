// Coursiv-style Lesson Viewer
// Supports scroll-to-expand content with text, playground, quiz, and discovery blocks

import { useState, useRef, useEffect } from 'react';
import {
  ContentBlock,
  TextBlock,
  PlaygroundBlock,
  QuizBlock,
  DiscoveryBlock,
  FeedbackBlock,
} from '../../../shared/courseContentTypes';
import { MarkdownRenderer } from './MarkdownRenderer';

interface CoursivLessonViewerProps {
  title: string;
  blocks: ContentBlock[];
  onComplete: () => void;
  onClose: () => void;
}

export function CoursivLessonViewer({
  title,
  blocks,
  onComplete,
  onClose,
}: CoursivLessonViewerProps) {
  const [visibleBlockCount, setVisibleBlockCount] = useState(1);
  const [completedBlocks, setCompletedBlocks] = useState<Set<number>>(new Set());
  const [showExitModal, setShowExitModal] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const lastBlockRef = useRef<HTMLDivElement>(null);

  const progressPercent = (visibleBlockCount / blocks.length) * 100;
  const isLastBlock = visibleBlockCount >= blocks.length;
  const currentBlockIndex = visibleBlockCount - 1;
  const currentBlock = blocks[currentBlockIndex];

  // Check if current block requires interaction (playground, quiz, feedback)
  const requiresInteraction = currentBlock && 
    (currentBlock.type === 'playground' || 
     currentBlock.type === 'quiz' || 
     currentBlock.type === 'feedback');

  const isCurrentBlockCompleted = completedBlocks.has(currentBlockIndex);

  // Scroll to the last block when new content is revealed
  useEffect(() => {
    if (lastBlockRef.current) {
      lastBlockRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [visibleBlockCount]);

  const handleContinue = () => {
    if (isLastBlock) {
      onComplete();
    } else {
      setVisibleBlockCount(prev => prev + 1);
    }
  };

  const handleBlockComplete = (blockIndex: number) => {
    setCompletedBlocks(prev => {
      const newSet = new Set(prev);
      newSet.add(blockIndex);
      return newSet;
    });
  };

  const handleClose = () => {
    setShowExitModal(true);
  };

  const canContinue = !requiresInteraction || isCurrentBlockCompleted;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={handleClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Progress bar */}
          <div className="flex-1 mx-4">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-600 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          
          {/* Audio button */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div ref={contentRef} className="flex-1 overflow-y-auto pb-32">
        <div className="max-w-2xl mx-auto px-6 py-8">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-8">{title}</h1>
          
          {/* Visible blocks */}
          {blocks.slice(0, visibleBlockCount).map((block, index) => (
            <div
              key={index}
              ref={index === visibleBlockCount - 1 ? lastBlockRef : null}
              className="mb-8 animate-fadeIn"
            >
              <BlockRenderer
                block={block}
                blockIndex={index}
                isCompleted={completedBlocks.has(index)}
                onComplete={() => handleBlockComplete(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Continue button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-6 z-20">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleContinue}
            disabled={!canContinue}
            className={`w-full py-3 rounded-xl font-semibold transition-colors ${
              canContinue
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLastBlock ? 'Complete' : 'Continue'}
          </button>
        </div>
      </div>

      {/* Exit Modal */}
      {showExitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Wait, don't go!</h3>
            <p className="text-gray-600 mb-6">
              Your progress in this lesson will be lost if you leave now.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowExitModal(false)}
                className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
              >
                Keep Learning
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                End Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Block Renderer Component
interface BlockRendererProps {
  block: ContentBlock;
  blockIndex: number;
  isCompleted: boolean;
  onComplete: () => void;
}

function BlockRenderer({ block, blockIndex, isCompleted, onComplete }: BlockRendererProps) {
  switch (block.type) {
    case 'text':
      return <TextBlockComponent block={block} />;
    case 'playground':
      return <PlaygroundBlockComponent block={block} isCompleted={isCompleted} onComplete={onComplete} />;
    case 'quiz':
      return <QuizBlockComponent block={block} isCompleted={isCompleted} onComplete={onComplete} />;
    case 'discovery':
      return <DiscoveryBlockComponent block={block} />;
    case 'feedback':
      return <FeedbackBlockComponent block={block} isCompleted={isCompleted} onComplete={onComplete} />;
    default:
      return null;
  }
}

// Text Block Component
function TextBlockComponent({ block }: { block: TextBlock }) {
  return (
    <div className="space-y-4">
      {block.content.image && (
        <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
          <div className="text-6xl">{block.content.image}</div>
        </div>
      )}
      {block.content.title && (
        <h2 className="text-xl font-bold text-gray-900">{block.content.title}</h2>
      )}
      <div className="prose prose-lg max-w-none">
        {block.content.paragraphs.map((paragraph, index) => (
          <div key={index} className="text-gray-700 leading-relaxed mb-4">
            <MarkdownRenderer content={paragraph} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Playground Block Component
function PlaygroundBlockComponent({
  block,
  isCompleted,
  onComplete,
}: {
  block: PlaygroundBlock;
  isCompleted: boolean;
  onComplete: () => void;
}) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const blanks = block.content.promptTemplate.filter(p => p.type === 'blank') as Array<{ type: 'blank'; label: string }>;
  const allBlanksSelected = blanks.every(b => selectedAnswers[b.label]);

  const handleOptionClick = (option: string) => {
    // Find the first unfilled blank
    const unfilledBlank = blanks.find(b => !selectedAnswers[b.label]);
    if (unfilledBlank) {
      setSelectedAnswers(prev => ({ ...prev, [unfilledBlank.label]: option }));
    }
  };

  const handleCheck = () => {
    const correct = blanks.every(
      b => selectedAnswers[b.label] === block.content.correctAnswers[b.label]
    );
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResult(false);
    setIsCorrect(false);
  };

  if (isCompleted && showResult) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-gray-500">Task completed</span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">{block.content.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{block.content.description}</p>
        
        {/* Success feedback */}
        <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-green-600">✓</span>
            <span className="font-semibold text-green-800">{block.content.successFeedback.title}</span>
          </div>
          <p className="text-green-700 text-sm">{block.content.successFeedback.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{block.content.aiTool.icon}</span>
        <span className="text-sm font-medium text-gray-600">{block.content.aiTool.name}</span>
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-2">{block.content.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{block.content.description}</p>
      
      {/* Prompt template with blanks */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex flex-wrap items-center gap-1">
          {block.content.promptTemplate.map((part, index) => {
            if (part.type === 'text') {
              return <span key={index} className="text-gray-700">{part.content}</span>;
            } else {
              const value = selectedAnswers[part.label];
              return (
                <span
                  key={index}
                  className={`inline-flex items-center px-3 py-1 rounded-lg border-2 min-w-[100px] ${
                    value
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-dashed border-gray-300 bg-white text-gray-400'
                  }`}
                >
                  {value || part.label}
                </span>
              );
            }
          })}
        </div>
      </div>
      
      {/* Options */}
      {!showResult && (
        <div className="flex flex-wrap gap-2 mb-4">
          {block.content.options.map((option, index) => {
            const isUsed = Object.values(selectedAnswers).includes(option);
            return (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                disabled={isUsed}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  isUsed
                    ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'border-purple-300 bg-white text-purple-700 hover:bg-purple-50'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
      
      {/* Hint */}
      {showHint && !showResult && (
        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blue-600">💡</span>
            <span className="font-semibold text-blue-800">Hint</span>
          </div>
          <p className="text-blue-700 text-sm">{block.content.hint}</p>
        </div>
      )}
      
      {/* Result feedback */}
      {showResult && (
        <div className={`border-l-4 p-4 rounded-r-lg mb-4 ${
          isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
        }`}>
          <div className="flex items-center gap-2 mb-1">
            <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
              {isCorrect ? '✓' : '✗'}
            </span>
            <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? block.content.successFeedback.title : block.content.errorFeedback.title}
            </span>
          </div>
          <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? block.content.successFeedback.message : block.content.errorFeedback.message}
          </p>
          {!isCorrect && (
            <p className="text-sm text-red-600 mt-2">
              <span className="font-medium">Correct answer: </span>
              {Object.values(block.content.correctAnswers).join(', ')}
            </p>
          )}
        </div>
      )}
      
      {/* Buttons */}
      <div className="flex gap-3">
        {!showResult ? (
          <>
            <button
              onClick={handleCheck}
              disabled={!allBlanksSelected}
              className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
                allBlanksSelected
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Check
            </button>
            <button
              onClick={() => setShowHint(true)}
              disabled={showHint}
              className={`px-4 py-3 transition-colors ${
                showHint ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              {showHint ? 'Hint shown' : 'Show hint'}
            </button>
            <button
              onClick={handleSkip}
              className="px-4 py-3 text-gray-500 hover:text-gray-700 transition-colors"
            >
              Skip practice
            </button>
          </>
        ) : !isCorrect ? (
          <button
            onClick={handleReset}
            className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        ) : null}
      </div>
    </div>
  );
}

// Quiz Block Component
function QuizBlockComponent({
  block,
  isCompleted,
  onComplete,
}: {
  block: QuizBlock;
  isCompleted: boolean;
  onComplete: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = () => {
    if (selectedIndex !== null) {
      setShowResult(true);
      onComplete();
    }
  };

  const isCorrect = selectedIndex === block.content.correctIndex;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="font-semibold text-gray-900 mb-4">{block.content.question}</h3>
      
      {/* Options */}
      <div className="space-y-3 mb-4">
        {block.content.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrectOption = index === block.content.correctIndex;
          
          let optionStyle = 'border-gray-200 hover:border-purple-300';
          if (showResult) {
            if (isCorrectOption) {
              optionStyle = 'border-green-500 bg-green-50';
            } else if (isSelected && !isCorrectOption) {
              optionStyle = 'border-red-500 bg-red-50';
            }
          } else if (isSelected) {
            optionStyle = 'border-purple-500 bg-purple-50';
          }
          
          return (
            <button
              key={index}
              onClick={() => !showResult && setSelectedIndex(index)}
              disabled={showResult}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-colors text-left ${optionStyle}`}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                showResult && isCorrectOption
                  ? 'border-green-500 bg-green-500'
                  : showResult && isSelected && !isCorrectOption
                  ? 'border-red-500 bg-red-500'
                  : isSelected
                  ? 'border-purple-500 bg-purple-500'
                  : 'border-gray-300'
              }`}>
                {(showResult && isCorrectOption) || (showResult && isSelected) || isSelected ? (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : null}
              </div>
              <span className="text-gray-700">{option}</span>
            </button>
          );
        })}
      </div>
      
      {/* Result feedback */}
      {showResult && (
        <div className={`border-l-4 p-4 rounded-r-lg mb-4 ${
          isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
        }`}>
          <div className="flex items-center gap-2 mb-1">
            <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
              {isCorrect ? '✓' : '✗'}
            </span>
            <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? 'Correct answer' : 'Incorrect'}
            </span>
          </div>
          <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {block.content.explanation}
          </p>
        </div>
      )}
      
      {/* Hint */}
      {showHint && !showResult && (
        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blue-600">💡</span>
            <span className="font-semibold text-blue-800">Hint</span>
          </div>
          <p className="text-blue-700 text-sm">{block.content.hint}</p>
        </div>
      )}
      
      {/* Buttons */}
      {!showResult && (
        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={selectedIndex === null}
            className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
              selectedIndex !== null
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit
          </button>
          <button
            onClick={() => setShowHint(true)}
            disabled={showHint}
            className={`px-4 py-3 transition-colors ${
              showHint ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            {showHint ? 'Hint shown' : 'Show hint'}
          </button>
        </div>
      )}
    </div>
  );
}

// Discovery Block Component
function DiscoveryBlockComponent({ block }: { block: DiscoveryBlock }) {
  const ordinals = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  const ordinal = ordinals[block.content.number - 1] || `#${block.content.number}`;
  
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">💡</span>
        <span className="font-semibold text-yellow-800">{ordinal} Discovery</span>
      </div>
      <p className="text-yellow-900">{block.content.message}</p>
    </div>
  );
}

// Feedback Block Component
function FeedbackBlockComponent({
  block,
  isCompleted,
  onComplete,
}: {
  block: FeedbackBlock;
  isCompleted: boolean;
  onComplete: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selectedIndex !== null) {
      setShowResult(true);
      onComplete();
    }
  };

  const isCorrect = selectedIndex === block.content.correctIndex;

  if (isCompleted && showResult) {
    return (
      <div className={`border-l-4 p-4 rounded-r-lg ${
        isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
      }`}>
        <div className="flex items-center gap-2">
          <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
            {isCorrect ? '✓' : '✗'}
          </span>
          <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect ? 'Thanks for your feedback!' : 'Noted!'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
      <p className="font-medium text-gray-900 mb-4">{block.content.question}</p>
      
      <div className="flex gap-3 mb-4">
        {block.content.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex-1 py-2 px-4 rounded-lg border-2 transition-colors ${
              selectedIndex === index
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={selectedIndex === null}
        className={`w-full py-2 rounded-lg font-medium transition-colors ${
          selectedIndex !== null
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Submit
      </button>
    </div>
  );
}
