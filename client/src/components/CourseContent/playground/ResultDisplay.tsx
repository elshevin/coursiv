import React, { useState } from 'react';

interface ResultDisplayProps {
  imageUrl: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
  imageUrl
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex justify-start mb-6">
      <div className="relative rounded-xl overflow-hidden bg-gray-100 max-w-[280px]">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 min-h-[120px]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-3 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
              <span className="text-sm text-gray-500">Generating image...</span>
            </div>
          </div>
        )}

        {/* Image */}
        <img
          src={imageUrl}
          alt="AI Generated Result"
          className={`w-full h-auto transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default ResultDisplay;
