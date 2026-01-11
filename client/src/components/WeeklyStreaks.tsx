import React, { useEffect, useState } from 'react';
import { trpc } from '@/lib/trpc';
import { useTestMode } from '@/contexts/TestModeContext';

interface DayData {
  day: string;
  date: Date;
  completed: boolean;
}

export function WeeklyStreaks() {
  const { isTestModeEnabled } = useTestMode();
  const [weekDays, setWeekDays] = useState<DayData[]>([]);
  
  const { data: streak, refetch: refetchStreak } = trpc.streaks.get.useQuery();
  const { data: weeklyActivity } = trpc.streaks.getWeeklyActivity.useQuery();
  const recordActivity = trpc.streaks.recordActivity.useMutation({
    onSuccess: () => {
      refetchStreak();
    }
  });

  useEffect(() => {
    // Generate week days (Sat-Fri)
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysToSaturday = (dayOfWeek + 1) % 7;
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - daysToSaturday);
    startOfWeek.setHours(0, 0, 0, 0);

    const days: DayData[] = [];
    const dayNames = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      
      // Check if this day has activity
      const hasActivity = weeklyActivity?.some(activity => {
        const activityDate = new Date(activity.activityDate);
        return activityDate.toDateString() === date.toDateString();
      }) || false;
      
      days.push({
        day: dayNames[i],
        date,
        completed: hasActivity,
      });
    }
    
    setWeekDays(days);
  }, [weeklyActivity]);

  const handleDayClick = async (day: DayData) => {
    if (isTestModeEnabled && !day.completed) {
      // In test mode, allow clicking to mark day as completed
      try {
        await recordActivity.mutateAsync({ testMode: true });
      } catch (error) {
        console.error('Failed to record activity:', error);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">WEEKLY STREAKS</h3>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <span className="text-xl font-bold text-orange-500">{streak?.currentStreak || 0}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day, index) => (
          <div
            key={index}
            onClick={() => handleDayClick(day)}
            className={`
              flex flex-col items-center p-2 rounded-lg transition-all
              ${day.completed 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-50 text-gray-400'}
              ${isTestModeEnabled && !day.completed ? 'cursor-pointer hover:bg-gray-100' : ''}
            `}
          >
            <span className="text-xs font-medium">{day.day}</span>
            <div className={`
              w-6 h-6 mt-1 rounded-full flex items-center justify-center
              ${day.completed 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200'}
            `}>
              {day.completed && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {isTestModeEnabled && (
        <p className="text-xs text-amber-600 mt-3 text-center">
          🧪 Test mode: Click any day to mark as completed
        </p>
      )}
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Longest streak</span>
          <span className="font-semibold text-gray-900">{streak?.longestStreak || 0} days</span>
        </div>
      </div>
    </div>
  );
}
