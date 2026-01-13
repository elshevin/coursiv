import { useEffect } from "react";

interface ExitConfirmModalProps {
  isOpen: boolean;
  onKeepLearning: () => void;
  onEndSession: () => void;
}

/**
 * Coursiv-style exit confirmation modal
 * Shows "Wait, don't go!" warning when user tries to exit mid-lesson
 * 
 * Key differences from original:
 * - Warning message: Progress will be LOST (not saved) - matches Coursiv behavior
 * - Two buttons: "Keep Learning" (primary) and "End Session" (secondary)
 */
export function ExitConfirmModal({
  isOpen,
  onKeepLearning,
  onEndSession,
}: ExitConfirmModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onKeepLearning();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onKeepLearning]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onKeepLearning}
      data-testid="exit-confirm-modal"
    >
      <div 
        className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Warning Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-yellow-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 text-center mb-2">
          Wait, don't go!
        </h2>

        {/* Description - Coursiv warns that progress will be LOST */}
        <p className="text-gray-600 text-center mb-6">
          If you leave now, your progress in this lesson will be lost. Are you sure you want to exit?
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onKeepLearning}
            className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
            data-testid="keep-learning-button"
          >
            Keep Learning
          </button>
          <button
            onClick={onEndSession}
            className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            data-testid="end-session-button"
          >
            End Session
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExitConfirmModal;
