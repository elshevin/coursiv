import React from 'react';
import type { TextPage as TextPageType } from '../types';

interface TextPageProps {
  content: TextPageType['content'];
}

// Helper function to render text with bold support
const renderText = (text: string) => {
  // Split by **text** pattern for bold
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Bold text
      return (
        <strong key={index} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

export const TextPage: React.FC<TextPageProps> = ({ content }) => {
  const { title, paragraphs, image, imagePosition = 'bottom' } = content;

  const renderImage = () => {
    if (!image) return null;
    
    return (
      <div className="my-6 flex justify-center">
        {image.startsWith('http') || image.startsWith('/') ? (
          <img 
            src={image} 
            alt={title}
            className="max-w-full h-auto rounded-xl"
          />
        ) : (
          // Emoji or icon
          <span className="text-6xl">{image}</span>
        )}
      </div>
    );
  };

  return (
    <div className="px-6 py-8">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
        {title}
      </h2>

      {/* Image at top */}
      {imagePosition === 'top' && renderImage()}

      {/* Paragraphs */}
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index}
            className={`text-base leading-relaxed ${
              paragraph.highlight 
                ? 'bg-purple-50 border-l-4 border-[#7C3AED] pl-4 py-2 rounded-r-lg' 
                : 'text-gray-700'
            }`}
          >
            {renderText(paragraph.text)}
          </p>
        ))}
      </div>

      {/* Image at bottom or inline */}
      {(imagePosition === 'bottom' || imagePosition === 'inline') && renderImage()}
    </div>
  );
};

export default TextPage;
