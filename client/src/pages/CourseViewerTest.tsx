import React from 'react';
import { useLocation } from 'wouter';
import { CourseViewer, testLessonWithPlayground } from '@/components/CourseContent';

export default function CourseViewerTest() {
  const [, setLocation] = useLocation();

  const handleComplete = () => {
    alert('Lesson completed!');
    setLocation('/dashboard');
  };

  const handleClose = () => {
    if (window.confirm('Are you sure you want to exit? Your progress will be saved.')) {
      setLocation('/dashboard');
    }
  };

  return (
    <CourseViewer
      lesson={testLessonWithPlayground}
      onComplete={handleComplete}
      onClose={handleClose}
    />
  );
}
