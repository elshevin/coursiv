import React, { useState, useCallback } from 'react';
import type { Lesson, Page } from './types';
import { PageHeader } from './common/PageHeader';
import { ContinueButton } from './common/ContinueButton';
import { IntroPage } from './pages/IntroPage';
import { TextPage } from './pages/TextPage';
import { TaskCardPage } from './pages/TaskCardPage';
import { QuizSinglePage } from './quiz';
import { PlaygroundPage } from './playground';

interface CourseViewerProps {
  lesson: Lesson;
  onComplete: () => void;
  onClose: () => void;
}

export const CourseViewer: React.FC<CourseViewerProps> = ({
  lesson,
  onComplete,
  onClose
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const currentPage = lesson.pages[currentPageIndex];
  const totalPages = lesson.pages.length;
  const progress = ((currentPageIndex + 1) / totalPages) * 100;
  const isLastPage = currentPageIndex === totalPages - 1;

  const handleNext = useCallback(() => {
    if (isLastPage) {
      onComplete();
    } else {
      setCurrentPageIndex(prev => prev + 1);
    }
  }, [isLastPage, onComplete]);

  const handleToggleAudio = useCallback(() => {
    setAudioEnabled(prev => !prev);
  }, []);

  // Handle opening a playground from task card
  const handleOpenPlayground = useCallback((playgroundId: string) => {
    // Find the playground page index
    const playgroundIndex = lesson.pages.findIndex(
      p => p.type === 'playground' && p.content.id === playgroundId
    );
    if (playgroundIndex !== -1) {
      setCurrentPageIndex(playgroundIndex);
    } else {
      // If not found, just go to next page
      handleNext();
    }
  }, [lesson.pages, handleNext]);

  // Determine if we should show the continue button
  const shouldShowContinueButton = () => {
    // Don't show continue button for playground pages (they have their own)
    if (currentPage.type === 'playground') {
      return false;
    }
    return true;
  };

  // Render page content based on type
  const renderPageContent = (page: Page) => {
    switch (page.type) {
      case 'intro':
        return <IntroPage content={page.content} />;
      case 'text':
        return <TextPage content={page.content} />;
      case 'task_card':
        return (
          <TaskCardPage 
            content={page.content}
            onOpenPlayground={handleOpenPlayground}
          />
        );
      case 'quiz_single':
        return (
          <QuizSinglePage 
            content={page.content} 
            onAnswer={(isCorrect) => {
              console.log('Quiz answer:', isCorrect);
            }}
          />
        );
      case 'playground':
        return (
          <PlaygroundPage
            content={page.content}
            onComplete={handleNext}
          />
        );
      default:
        return (
          <div className="flex items-center justify-center min-h-[60vh] px-6">
            <p className="text-gray-500">
              Page type "{page.type}" is not yet implemented.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <PageHeader
        progress={progress}
        onClose={onClose}
        hasAudio={true}
        audioEnabled={audioEnabled}
        onToggleAudio={handleToggleAudio}
      />

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {renderPageContent(currentPage)}
      </div>

      {/* Footer with Continue Button */}
      {shouldShowContinueButton() && (
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4">
          <ContinueButton
            onClick={handleNext}
            variant={isLastPage ? 'success' : 'primary'}
          >
            {isLastPage ? 'Complete' : 'Continue'}
          </ContinueButton>
        </div>
      )}
    </div>
  );
};

export default CourseViewer;
