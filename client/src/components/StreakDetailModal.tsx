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

  // Calculate current challenge target (3, 7, or 14)
  const getCurrentChallengeTarget = (): number => {
    if (currentStreak < 3) return 3;
    if (currentStreak < 7) return 7;
    return 14;
  };

  const challengeTarget = getCurrentChallengeTarget();
  const progressPercentage = Math.min((currentStreak / 14) * 100, 100);

  // Milestone positions (as percentage of total width)
  const milestones = [
    { day: 3, position: (3 / 14) * 100 },
    { day: 7, position: (7 / 14) * 100 },
    { day: 14, position: 100 },
  ];

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
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md max-h-[90vh] overflow-y-auto"
        data-testid="streak-detail-modal"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="relative p-6 text-center">
            <button
              onClick={onClose}
              className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              data-testid="streak-modal-close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-6">Streak details</h2>

            {/* Streak count display */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <span className="text-5xl font-light text-gray-300">{currentStreak}</span>
                  <p className="text-gray-600 mt-1">day streak!</p>
                </div>
                <Flame className="w-16 h-16 text-gray-300" />
              </div>
            </div>

            {/* Streak Challenge Progress Bar */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6" data-testid="streak-challenge-progress">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-gray-800">Streak Challenge</span>
                <span className="text-sm text-gray-500">Day {currentStreak} of {challengeTarget}</span>
              </div>
              
              {/* Progress bar with milestones */}
              <div className="relative">
                {/* Background bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  {/* Progress fill */}
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                
                {/* Milestone markers */}
                <div className="absolute top-0 left-0 w-full h-2 flex items-center">
                  {milestones.map((milestone) => (
                    <div
                      key={milestone.day}
                      className="absolute transform -translate-x-1/2"
                      style={{ left: `${milestone.position}%` }}
                    >
                      {/* Milestone dot on the bar */}
                      <div
                        className={`w-3 h-3 rounded-full border-2 ${
                          currentStreak >= milestone.day
                            ? "bg-purple-500 border-purple-500"
                            : "bg-white border-gray-300"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Milestone labels below the bar */}
                <div className="relative mt-3">
                  {milestones.map((milestone) => (
                    <div
                      key={milestone.day}
                      className="absolute transform -translate-x-1/2"
                      style={{ left: `${milestone.position}%` }}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 text-xs font-medium rounded border ${
                          currentStreak >= milestone.day
                            ? "bg-purple-100 border-purple-300 text-purple-700"
                            : "bg-white border-gray-300 text-gray-500"
                        }`}
                      >
                        {milestone.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Streak Details Stats */}
          <div className="px-6 pb-4">
            <h3 className="font-semibold text-gray-800 mb-4">Streak details</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Current streak</p>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs">🎯</span>
                  </span>
                  <span className="text-xl font-semibold text-gray-800" data-testid="streak-current-count">
                    {currentStreak}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Longest streak</p>
                <span className="text-xl font-semibold text-gray-800" data-testid="streak-longest-count">
                  {longestStreak}
                </span>
              </div>
            </div>

            {/* Motivation message */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-gray-600 text-sm">
                Finish <span className="font-semibold text-blue-600">1 lesson</span> to begin your streak
              </p>
            </div>
          </div>

          {/* Calendar */}
          <div className="px-6 pb-6" data-testid="streak-calendar">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">
                {monthNames[currentMonth]} {currentYear}
              </h3>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
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
                    aspect-square flex items-center justify-center text-sm rounded-full
                    ${!day ? "" : isCompleted(day) 
                      ? "bg-purple-500 text-white font-medium" 
                      : day === today.getDate() 
                        ? "bg-purple-100 text-purple-700 font-medium border-2 border-purple-300"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {day || ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StreakDetailModal;
