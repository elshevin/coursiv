import React from 'react';
import type { IntroPage as IntroPageType } from '../types';

interface IntroPageProps {
  content: IntroPageType['content'];
}

export const IntroPage: React.FC<IntroPageProps> = ({ content }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-8 text-center">
      {/* Image */}
      {content.image && (
        <div className="mb-8">
          {content.image.startsWith('http') || content.image.startsWith('/') ? (
            <img 
              src={content.image} 
              alt={content.imageAlt || content.title}
              className="w-64 h-64 object-contain"
            />
          ) : (
            // Emoji or icon
            <span className="text-8xl">{content.image}</span>
          )}
        </div>
      )}

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {content.title}
      </h1>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-600 max-w-md leading-relaxed">
        {content.description}
      </p>
    </div>
  );
};

export default IntroPage;
