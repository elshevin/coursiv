// Coursiv-style Lesson Viewer
// Supports scroll-to-expand content with text, playground, quiz, and discovery blocks

import { useState, useRef, useEffect } from 'react';
import { PlaygroundPage } from './PlaygroundPage';
import {
  ContentBlock,
  TextBlock,
  PlaygroundBlock,
  QuizBlock,
  DiscoveryBlock,
  FeedbackBlock,
  PlaygroundBlank,
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
  const [openPlaygroundIndex, setOpenPlaygroundIndex] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lastBlockRef = useRef<HTMLDivElement>(null);

  const progressPercent = (visibleBlockCount / blocks.length) * 100;
  const isLastBlock = visibleBlockCount >= blocks.length;
  const currentBlockIndex = visibleBlockCount - 1;
  const currentBlock = blocks[currentBlockIndex];

  // Check if current block requires interaction (playground, quiz)
  // Note: feedback is optional and does not block progression
  const requiresInteraction = currentBlock && 
    (currentBlock.type === 'playground' || 
     currentBlock.type === 'quiz');

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

  // If a playground is open, show the PlaygroundPage
  if (openPlaygroundIndex !== null) {
    const playgroundBlock = blocks[openPlaygroundIndex] as PlaygroundBlock;
    return (
      <PlaygroundPage
        block={playgroundBlock}
        onComplete={() => {
          handleBlockComplete(openPlaygroundIndex);
        }}
        onBack={() => {
          // Close playground and auto-advance to next block if playground is completed
          const isPlaygroundCompleted = completedBlocks.has(openPlaygroundIndex);
          setOpenPlaygroundIndex(null);
          if (isPlaygroundCompleted && visibleBlockCount < blocks.length) {
            setVisibleBlockCount(prev => prev + 1);
          }
        }}
      />
    );
  }

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
                onOpenPlayground={() => setOpenPlaygroundIndex(index)}
                onSkip={() => {
                  handleBlockComplete(index);
                  if (visibleBlockCount < blocks.length) {
                    setVisibleBlockCount(prev => prev + 1);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Continue button and Skip practice */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-6 z-20">
        <div className="max-w-2xl mx-auto space-y-2">
          {/* Show Skip practice button when current block is playground and not completed */}
          {currentBlock?.type === 'playground' && !isCurrentBlockCompleted && (
            <button
              onClick={() => {
                // Skip practice - just move to next block without marking as completed
                // The playground remains in default state, user can come back anytime
                if (visibleBlockCount < blocks.length) {
                  setVisibleBlockCount(prev => prev + 1);
                }
              }}
              className="w-full py-3 text-purple-600 font-medium hover:bg-purple-50 rounded-xl transition-colors flex items-center justify-center gap-1"
            >
              Skip practice
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          
          {/* Continue button - only show when can continue (not playground or playground completed) */}
          {(canContinue || currentBlock?.type !== 'playground') && (
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
          )}
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
  onOpenPlayground?: () => void;
  onSkip?: () => void;
}

function BlockRenderer({ block, blockIndex, isCompleted, onComplete, onOpenPlayground, onSkip }: BlockRendererProps) {
  switch (block.type) {
    case 'text':
      return <TextBlockComponent block={block} />;
    case 'playground':
      return <PlaygroundBlockComponent block={block} isCompleted={isCompleted} onComplete={onComplete} onOpenPlayground={onOpenPlayground} onSkip={onSkip} />;
    case 'quiz':
      return <QuizBlockComponent block={block} isCompleted={isCompleted} onComplete={onComplete} />;
    case 'discovery':
      return <DiscoveryBlockComponent block={block} />;
    case 'feedback':
      // Feedback block removed as per user request
      return null;
    default:
      return null;
  }
}

// Helper function to check if a string is an image path
function isImagePath(str: string): boolean {
  return str.startsWith('/') || str.startsWith('http') || str.includes('.png') || str.includes('.jpg') || str.includes('.svg');
}

// Text Block Component
function TextBlockComponent({ block }: { block: TextBlock }) {
  return (
    <div className="space-y-4">
      {block.content.image && (
        <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center overflow-hidden">
          {isImagePath(block.content.image) ? (
            <img 
              src={block.content.image} 
              alt="Course illustration" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-6xl">{block.content.image}</div>
          )}
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

// Parse prompt template string to extract text and blank parts
function parsePromptTemplate(template: string, blanks: PlaygroundBlank[]): Array<{ type: 'text' | 'blank'; content?: string; blank?: PlaygroundBlank }> {
  const parts: Array<{ type: 'text' | 'blank'; content?: string; blank?: PlaygroundBlank }> = [];
  let remaining = template;
  
  // Create a map of blank IDs to blank objects
  const blankMap = new Map(blanks.map(b => [b.id, b]));
  
  // Find all [blankId] patterns
  const regex = /\[([^\]]+)\]/g;
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(template)) !== null) {
    // Add text before this blank
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: template.slice(lastIndex, match.index) });
    }
    
    // Add the blank
    const blankId = match[1];
    const blank = blankMap.get(blankId);
    if (blank) {
      parts.push({ type: 'blank', blank });
    } else {
      // If no matching blank found, treat as text
      parts.push({ type: 'text', content: match[0] });
    }
    
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < template.length) {
    parts.push({ type: 'text', content: template.slice(lastIndex) });
  }
  
  return parts;
}

// Playground Block Component - Entry card that opens full-screen playground
function PlaygroundBlockComponent({
  block,
  isCompleted,
  onComplete,
  onOpenPlayground,
  onSkip,
}: {
  block: PlaygroundBlock;
  isCompleted: boolean;
  onComplete: () => void;
  onOpenPlayground?: () => void;
  onSkip?: () => void;
}) {
  // If completed, show completed state
  if (isCompleted) {
    return (
      <div className="space-y-4">
        {/* Result image - only show if not showImageOnStart */}
        {block.content.resultImage && !block.content.showImageOnStart && (
          <div className="flex justify-start">
            <div className="max-w-[450px] rounded-xl overflow-hidden border border-gray-200">
              <img 
                src={block.content.resultImage} 
                alt="AI Generated Result" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/course/success.jpg';
                }}
              />
            </div>
          </div>
        )}
        
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <span>✓</span>
            <span>Task completed</span>
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-2">{block.content.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{block.content.description}</p>
          
          <button
            onClick={onOpenPlayground}
            className="w-full py-3 border-2 border-purple-300 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
          >
            <span>↻</span>
            <span>Repeat task</span>
          </button>
        </div>
        
        {/* AI Response */}
        {block.content.aiResponse && (
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
              {block.content.aiTool.logo ? (
                <img 
                  src={block.content.aiTool.logo} 
                  alt={block.content.aiTool.name}
                  className="w-6 h-6 object-contain"
                />
              ) : (
                <span className="text-xl">{block.content.aiTool.icon}</span>
              )}
              <span className="font-medium text-gray-700">{block.content.aiTool.name}</span>
            </div>
            <div className="prose prose-sm max-w-none text-gray-700">
              <MarkdownRenderer content={block.content.aiResponse} />
            </div>
          </div>
        )}
        
        {/* Pro Tip */}
        {block.content.proTip && (
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1">Pro Tip</p>
            <p className="text-gray-600 text-sm">{block.content.proTip}</p>
          </div>
        )}
      </div>
    );
  }

  // Entry card state - show image and "Open Playground" button
  return (
    <div className="space-y-4">
      {/* Show reference image if showImageOnStart */}
      {block.content.showImageOnStart && block.content.resultImage && (
        <div className="flex justify-start">
          <div className="max-w-[450px] rounded-xl overflow-hidden border border-gray-200">
            <img 
              src={block.content.resultImage} 
              alt="Reference" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      )}
      
      {/* Entry card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-2">{block.content.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{block.content.description}</p>
        
        <button
          onClick={onOpenPlayground}
          className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
        >
          Open Playground
        </button>
      </div>
      

    </div>
  );
}

// Legacy Playground Block Component - kept for reference
function LegacyPlaygroundBlockComponent({
  block,
  isCompleted,
  onComplete,
}: {
  block: PlaygroundBlock;
  isCompleted: boolean;
  onComplete: () => void;
}) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [activeBlankIndex, setActiveBlankIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);

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
      // All blanks filled, stay at last
      setActiveBlankIndex(blanks.length);
    }
  };

  const handleBlankClick = (blankIndex: number) => {
    if (!showResult) {
      setActiveBlankIndex(blankIndex);
    }
  };

  const handleBackspace = () => {
    // Find the last filled blank
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

  const handleSkip = () => {
    // Skip practice - just continue without marking as completed
    // User can come back and do the practice anytime
  };

  const handleTryAgain = () => {
    setSelectedAnswers({});
    setActiveBlankIndex(0);
    setShowResult(false);
    setIsCorrect(false);
  };

  const handleContinue = () => {
    setTaskCompleted(true);
  };

  const handleRepeatTask = () => {
    setSelectedAnswers({});
    setActiveBlankIndex(0);
    setShowResult(false);
    setIsCorrect(false);
    setTaskCompleted(false);
  };

  // Task completed state (Coursiv-style)
  if (taskCompleted || (isCompleted && showResult && isCorrect)) {
    return (
      <div className="space-y-4">
        {/* Result image - only show if not already shown at start */}
        {block.content.resultImage && !block.content.showImageOnStart && (
          <div className="flex justify-start">
            <div className="max-w-[450px] rounded-xl overflow-hidden border border-gray-200">
              <img 
                src={block.content.resultImage} 
                alt="AI Generated Result" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  (e.target as HTMLImageElement).src = '/images/course/success.jpg';
                }}
              />
            </div>
          </div>
        )}
        
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          {/* Task completed badge */}
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <span>✓</span>
            <span>Task completed</span>
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-2">{block.content.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{block.content.description}</p>
          
          {/* Repeat task button */}
          <button
            onClick={handleRepeatTask}
            className="w-full py-3 border-2 border-purple-300 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
          >
            <span>↻</span>
            <span>Repeat task</span>
          </button>
        </div>
        
        {/* Simulated AI Response */}
        {block.content.aiResponse && (
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
              {block.content.aiTool.logo ? (
                <img 
                  src={block.content.aiTool.logo} 
                  alt={block.content.aiTool.name}
                  className="w-6 h-6 object-contain"
                />
              ) : (
                <span className="text-xl">{block.content.aiTool.icon}</span>
              )}
              <span className="font-medium text-gray-700">{block.content.aiTool.name}</span>
            </div>
            <div className="prose prose-sm max-w-none text-gray-700">
              <MarkdownRenderer content={block.content.aiResponse} />
            </div>
          </div>
        )}
        
        {/* Pro Tip */}
        {block.content.proTip && (
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1">Pro Tip</p>
            <p className="text-gray-600 text-sm">{block.content.proTip}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      {/* Show image at start if showImageOnStart is true */}
      {block.content.showImageOnStart && block.content.resultImage && (
        <div className="flex justify-start mb-4">
          <div className="max-w-[450px] rounded-xl overflow-hidden border border-gray-200">
            <img 
              src={block.content.resultImage} 
              alt="Reference" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      )}
      
      {/* AI Tool header */}
      <div className="bg-gray-50 rounded-lg px-4 py-2 mb-4 inline-flex items-center gap-2">
        {block.content.aiTool.logo ? (
          <img 
            src={block.content.aiTool.logo} 
            alt={block.content.aiTool.name}
            className="w-5 h-5 object-contain"
          />
        ) : (
          <span className="text-xl">{block.content.aiTool.icon}</span>
        )}
        <span className="text-sm font-medium text-gray-700">{block.content.aiTool.name}</span>
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-2">{block.content.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{block.content.description}</p>
      
      {/* Prompt template with blanks */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex flex-wrap items-center gap-1 leading-relaxed">
          {templateParts.map((part, index) => {
            if (part.type === 'text') {
              return <span key={index} className="text-gray-700">{part.content}</span>;
            } else if (part.blank) {
              const blankIndex = blanks.findIndex(b => b.id === part.blank!.id);
              const value = selectedAnswers[part.blank.id];
              const isActive = blankIndex === activeBlankIndex && !showResult;
              
              return (
                <button
                  key={index}
                  onClick={() => handleBlankClick(blankIndex)}
                  disabled={showResult}
                  className={`inline-flex items-center px-3 py-1 rounded-lg border-2 min-w-[80px] transition-all ${
                    value
                      ? isActive
                        ? 'border-purple-500 bg-purple-50 text-purple-700 border-l-4'
                        : 'border-gray-300 bg-white text-gray-700'
                      : isActive
                        ? 'border-purple-500 border-l-4 bg-purple-50 text-purple-400'
                        : 'border-dashed border-gray-300 bg-white text-gray-400'
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
      
      {/* Options - only show when not showing result */}
      {!showResult && (
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {availableOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
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
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Check
            </button>
            <button
              onClick={handleBackspace}
              disabled={Object.keys(selectedAnswers).length === 0}
              className={`px-4 py-3 rounded-xl border transition-colors ${
                Object.keys(selectedAnswers).length > 0
                  ? 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  : 'border-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              ⌫
            </button>
          </div>
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
        <div className="mb-4">
          <div className={`border-t-4 ${isCorrect ? 'border-green-500' : 'border-red-500'}`} />
          <div className={`p-4 ${isCorrect ? 'bg-white' : 'bg-white'}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className={`text-xl ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? '✓' : '✗'}
                </span>
                <span className={`font-bold text-lg ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? block.content.successFeedback.title : 'Incorrect'}
                </span>
              </div>
              {/* Report button */}
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </button>
            </div>
            
            {isCorrect ? (
              <p className="text-gray-600 mb-4">{block.content.successFeedback.message}</p>
            ) : (
              <p className="text-gray-600 mb-4">
                Correct answer: {blanks.map(b => b.correctAnswer).join(', ')}
              </p>
            )}
            
            {/* Simulated AI Response - shown when correct */}
            {isCorrect && block.content.aiResponse && (
              <div className="mb-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                  {block.content.aiTool.logo ? (
                    <img 
                      src={block.content.aiTool.logo} 
                      alt={block.content.aiTool.name}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <span className="text-xl">{block.content.aiTool.icon}</span>
                  )}
                  <span className="font-medium text-gray-700">{block.content.aiTool.name}</span>
                </div>
                <div className="prose prose-sm max-w-none text-gray-700">
                  <MarkdownRenderer content={block.content.aiResponse} />
                </div>
              </div>
            )}
            
            {/* Action button */}
            {isCorrect ? (
              <button
                onClick={handleContinue}
                className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleTryAgain}
                className="w-full py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors"
              >
                Try again
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Bottom buttons - only show when not showing result */}
      {!showResult && (
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => setShowHint(true)}
            disabled={showHint}
            className={`px-4 py-2 text-sm transition-colors ${
              showHint ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            {showHint ? 'Hint shown' : 'Show hint'}
          </button>
          <button
            onClick={handleSkip}
            className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Skip practice
          </button>
        </div>
      )}
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

  if (isCompleted && showResult) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-4">{block.content.question}</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">{block.content.explanation}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="font-semibold text-gray-900 mb-4">{block.content.question}</h3>
      
      {/* Options */}
      <div className="space-y-3 mb-4">
        {block.content.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            disabled={showResult}
            className={`w-full p-4 rounded-xl border-2 text-left transition-colors ${
              selectedIndex === index
                ? showResult
                  ? index === block.content.correctIndex
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-purple-500 bg-purple-50'
                : showResult && index === block.content.correctIndex
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      
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
      
      {/* Result explanation */}
      {showResult && (
        <div className={`border-l-4 p-4 rounded-r-lg mb-4 ${
          isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
        }`}>
          <div className="flex items-center gap-2 mb-1">
            <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
              {isCorrect ? '✓' : '✗'}
            </span>
            <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {block.content.explanation}
          </p>
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
  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
          {block.content.number}
        </div>
        <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Discovery</span>
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{block.content.title}</h3>
      <p className="text-gray-700">{block.content.message}</p>
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

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onComplete();
  };

  if (isCompleted) {
    return (
      <div className="bg-gray-50 rounded-xl p-6">
        <p className="text-gray-600 text-sm mb-3">{block.content.question}</p>
        <div className="flex gap-2">
          {block.content.options.map((option, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedIndex === index
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {option}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-3">
        <p className="text-gray-600 text-sm">{block.content.question}</p>
        <span className="text-xs text-gray-400">(optional)</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {block.content.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors text-sm"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
