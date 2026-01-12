import { useEffect, useRef } from "react";
import { CourseModule } from "../../../shared/courseData";
import { Volume2 } from "lucide-react";

interface ModulePreviewPopoverProps {
  module: CourseModule;
  status: "completed" | "current" | "available";
  onClose: () => void;
  onRead: () => void;
  onListen: () => void;
}

export function ModulePreviewPopover({
  module,
  status,
  onClose,
  onRead,
  onListen,
}: ModulePreviewPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        data-testid="popover-backdrop"
        onClick={onClose}
      />

      {/* Popover */}
      <div
        ref={popoverRef}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
        data-testid="module-preview-popover"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              {module.type === "quiz" ? (
                <span className="text-3xl">📝</span>
              ) : (
                <span className="text-3xl">📖</span>
              )}
              <div>
                <h3 className="font-bold text-lg">{module.title}</h3>
                <p className="text-purple-100 text-sm">{module.duration}</p>
              </div>
            </div>
            {module.type === "quiz" && (
              <span className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-medium rounded-full">
                Quiz
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-600 text-sm mb-6">
              {module.type === "quiz"
                ? "Test your knowledge with this interactive quiz. Answer questions to reinforce what you've learned."
                : "Learn the fundamentals and key concepts in this lesson. Take your time to understand each section."}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onRead}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                {module.type === "quiz" ? (
                  <>
                    <span>Start Quiz</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>Read</span>
                  </>
                )}
              </button>

              {module.type !== "quiz" && (
                <button
                  onClick={onListen}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Volume2 className="w-5 h-5" />
                  <span>Listen</span>
                </button>
              )}
            </div>

            {/* Status indicator */}
            {status === "completed" && (
              <div className="mt-4 flex items-center justify-center gap-2 text-green-600 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Completed</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ModulePreviewPopover;
