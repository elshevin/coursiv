import { useEffect, useRef } from "react";
import { X, Flame, Calendar, Trophy, Target } from "lucide-react";

interface StreakDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStreak: number;
  longestStreak: number;
  streakDays: boolean[]; // Array of 7 booleans for the week
  monthlyData?: { date: Date; completed: boolean }[];
}

export function StreakDetailModal({
  isOpen,
  onClose,
  currentStreak,
  longestStreak,
  streakDays,
  monthlyData,
}: StreakDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Generate calendar data for current month
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate calendar grid
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // Check if a day is completed (mock data - last 'currentStreak' days are completed)
  const isCompleted = (day: number): boolean => {
    if (!day) return false;
    const dayDate = new Date(currentYear, currentMonth, day);
    const diffDays = Math.floor((today.getTime() - dayDate.getTime()) / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays < currentStreak;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
        data-testid="streak-detail-modal"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white text-center">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              data-testid="streak-modal-close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-2">
              <div className="relative">
                <Flame className="w-16 h-16 text-yellow-300 animate-pulse" />
                <span
                  className="absolute inset-0 flex items-center justify-center font-bold text-2xl text-white"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                  data-testid="streak-current-count"
                >
                  {currentStreak}
                </span>
              </div>
            </div>
            <h2 className="text-xl font-bold">day streak</h2>
          </div>

          {/* Stats */}
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Streak Challenge</h3>
            
            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-800 font-medium">Day {currentStreak} of 7</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((currentStreak / 7) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Target className="w-5 h-5 text-orange-500" />
                  <span className="text-2xl font-bold text-gray-800" data-testid="streak-current-count">
                    {currentStreak}
                  </span>
                </div>
                <p className="text-xs text-gray-500">Current streak</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-purple-500" />
                  <span className="text-2xl font-bold text-gray-800" data-testid="streak-longest-count">
                    {longestStreak}
                  </span>
                </div>
                <p className="text-xs text-gray-500">Longest streak</p>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="p-6" data-testid="streak-calendar">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                {monthNames[currentMonth]} {currentYear}
              </h3>
            </div>

            {/* Day names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-xs text-gray-400 font-medium py-1">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`
                    aspect-square flex items-center justify-center text-sm rounded-lg
                    ${!day ? "" : isCompleted(day) 
                      ? "bg-orange-500 text-white font-medium" 
                      : day === today.getDate() 
                        ? "bg-purple-100 text-purple-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {day && (
                    <>
                      {isCompleted(day) ? (
                        <Flame className="w-4 h-4" />
                      ) : (
                        day
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6">
            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Keep the streak going! 🔥
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StreakDetailModal;
