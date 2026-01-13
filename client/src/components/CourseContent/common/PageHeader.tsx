import React from 'react';
import { X, Volume2, VolumeX } from 'lucide-react';
import { ProgressBar } from './ProgressBar';

interface PageHeaderProps {
  progress: number;
  onClose: () => void;
  hasAudio?: boolean;
  audioEnabled?: boolean;
  onToggleAudio?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  progress,
  onClose,
  hasAudio = false,
  audioEnabled = false,
  onToggleAudio
}) => {
  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Progress Bar */}
        <div className="flex-1 mx-4">
          <ProgressBar progress={progress} />
        </div>

        {/* Audio Toggle */}
        {hasAudio && onToggleAudio && (
          <button
            onClick={onToggleAudio}
            className="p-2 -mr-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={audioEnabled ? "Disable audio" : "Enable audio"}
          >
            {audioEnabled ? (
              <Volume2 className="w-5 h-5 text-[#7C3AED]" />
            ) : (
              <VolumeX className="w-5 h-5 text-gray-400" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
