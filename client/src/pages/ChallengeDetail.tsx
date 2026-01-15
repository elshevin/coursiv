import React, { useState, useRef, useEffect } from 'react';
import { useParams, useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  Lock, 
  CheckCircle2, 
  Play, 
  BookOpen, 
  HelpCircle,
  Trophy,
  Flame,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { challengeData, getChallengeById, ChallengeTask } from '@/data/challengeData';
import { useTestMode } from '@/contexts/TestModeContext';

export default function ChallengeDetail() {
  const { challengeId } = useParams<{ challengeId: string }>();
  const [, setLocation] = useLocation();
  const { isTestModeEnabled } = useTestMode();
  
  const challenge = getChallengeById(challengeId || '');
  const [selectedDay, setSelectedDay] = useState(1);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const dayNavRef = useRef<HTMLDivElement>(null);
  
  // Mock: In test mode, first 5 days are completed
  useEffect(() => {
    if (isTestModeEnabled) {
      const initialCompleted = new Set<string>();
      challenge?.tasks.slice(0, 5).forEach(task => {
        initialCompleted.add(task.id);
      });
      setCompletedTasks(initialCompleted);
    }
  }, [isTestModeEnabled, challenge]);

  if (!challenge) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#24234C] mb-4">Challenge not found</h1>
          <Button onClick={() => setLocation('/dashboard/challenges')}>
            Back to Challenges
          </Button>
        </div>
      </div>
    );
  }

  const currentTask = challenge.tasks.find(t => t.day === selectedDay);
  const completedCount = completedTasks.size;
  const progressPercent = Math.round((completedCount / challenge.totalDays) * 100);
  
  // All days are unlocked - users can freely choose any task
  const isDayUnlocked = (day: number) => {
    return true;
  };

  const handleCompleteTask = (taskId: string) => {
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      newSet.add(taskId);
      return newSet;
    });
  };

  const handleStartTask = (task: ChallengeTask) => {
    if (task.courseId && task.moduleId) {
      setLocation(`/lesson/${task.courseId}/${task.moduleId}`);
    } else {
      // For tasks without course links, just mark as complete
      handleCompleteTask(task.id);
    }
  };

  const scrollDayNav = (direction: 'left' | 'right') => {
    if (dayNavRef.current) {
      const scrollAmount = 200;
      dayNavRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getTaskIcon = (task: ChallengeTask, isCompleted: boolean) => {
    if (isCompleted) {
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    }
    switch (task.type) {
      case 'quiz':
        return <HelpCircle className="w-5 h-5 text-purple-500" />;
      case 'practice':
        return <Play className="w-5 h-5 text-blue-500" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#5A4CFF]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-[#E2E5E9]">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <button 
            onClick={() => setLocation('/dashboard/challenges')}
            className="flex items-center gap-2 text-[#24234C]/60 hover:text-[#24234C] transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Challenges</span>
          </button>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#24234C] mb-2">{challenge.title}</h1>
              <p className="text-[#24234C]/60 max-w-2xl">{challenge.description}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="px-3 py-1 bg-[#5A4CFF]/10 text-[#5A4CFF] text-sm font-medium rounded-full">
                  {challenge.difficulty}
                </span>
                <span className="text-sm text-[#24234C]/60">
                  {challenge.totalDays} days
                </span>
                <span className="text-sm text-[#24234C]/60">
                  {challenge.category}
                </span>
              </div>
            </div>
            
            {/* Progress Card */}
            <Card className="border-[#E2E5E9] min-w-[200px]">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold text-[#24234C]">{progressPercent}% Complete</span>
                </div>
                <Progress value={progressPercent} className="h-2 mb-2" />
                <p className="text-xs text-[#24234C]/60">
                  {completedCount} of {challenge.totalDays} days completed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Day Navigation */}
      <div className="bg-white border-b border-[#E2E5E9] sticky top-0 z-10">
        <div className="max-w-[1200px] mx-auto px-6 py-3">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scrollDayNav('left')}
              className="p-2 rounded-full hover:bg-[#F0F2F5] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#24234C]/60" />
            </button>
            
            <div 
              ref={dayNavRef}
              className="flex-1 overflow-x-auto scrollbar-hide flex gap-2 py-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {Array.from({ length: challenge.totalDays }, (_, i) => i + 1).map(day => {
                const task = challenge.tasks.find(t => t.day === day);
                const isCompleted = task ? completedTasks.has(task.id) : false;
                const isUnlocked = isDayUnlocked(day);
                const isSelected = day === selectedDay;
                
                return (
                  <button
                    key={day}
                    onClick={() => isUnlocked && setSelectedDay(day)}
                    disabled={!isUnlocked}
                    className={`
                      flex-shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center
                      transition-all font-medium text-sm
                      ${isSelected 
                        ? 'bg-[#5A4CFF] text-white' 
                        : isCompleted 
                          ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                          : isUnlocked 
                            ? 'bg-[#F0F2F5] text-[#24234C] hover:bg-[#E2E5E9]' 
                            : 'bg-[#F0F2F5] text-[#24234C]/30 cursor-not-allowed'
                      }
                    `}
                  >
                    <span className="text-xs opacity-70">D</span>
                    <span>{day}</span>
                  </button>
                );
              })}
            </div>
            
            <button 
              onClick={() => scrollDayNav('right')}
              className="p-2 rounded-full hover:bg-[#F0F2F5] transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#24234C]/60" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Task Details */}
          <div className="lg:col-span-2">
            {currentTask && (
              <Card className="border-[#E2E5E9]">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-[#5A4CFF]/10 text-[#5A4CFF] text-xs font-medium rounded">
                          Day {currentTask.day}
                        </span>
                        <span className="px-2 py-1 bg-[#F0F2F5] text-[#24234C]/60 text-xs font-medium rounded capitalize">
                          {currentTask.type}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-[#24234C] mb-2">{currentTask.title}</h2>
                      <p className="text-[#24234C]/60">{currentTask.description}</p>
                    </div>
                    {getTaskIcon(currentTask, completedTasks.has(currentTask.id))}
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-[#24234C]/60">
                    <span>⏱️ {currentTask.duration}</span>
                  </div>
                  
                  {completedTasks.has(currentTask.id) ? (
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-medium text-green-700">Task Completed!</p>
                        <p className="text-sm text-green-600">Great job! Move on to the next day.</p>
                      </div>
                    </div>
                  ) : isDayUnlocked(currentTask.day) ? (
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => handleStartTask(currentTask)}
                        className="flex-1 bg-[#5A4CFF] hover:bg-[#4B3FE0]"
                      >
                        {currentTask.type === 'quiz' ? 'Start Quiz' : currentTask.type === 'practice' ? 'Start Practice' : 'Start Lesson'}
                      </Button>
                      {isTestModeEnabled && (
                        <Button 
                          onClick={() => handleCompleteTask(currentTask.id)}
                          variant="outline"
                          className="border-amber-500 text-amber-600 hover:bg-amber-50"
                        >
                          🧪 Quick Complete
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 p-4 bg-[#F0F2F5] rounded-xl">
                      <Lock className="w-6 h-6 text-[#24234C]/40" />
                      <div>
                        <p className="font-medium text-[#24234C]/60">Task Locked</p>
                        <p className="text-sm text-[#24234C]/40">Complete the previous day to unlock.</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Task List */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#24234C] mb-4">All Tasks</h3>
              <div className="space-y-3">
                {challenge.tasks.map(task => {
                  const isCompleted = completedTasks.has(task.id);
                  const isUnlocked = isDayUnlocked(task.day);
                  const isSelected = task.day === selectedDay;
                  
                  return (
                    <button
                      key={task.id}
                      onClick={() => isUnlocked && setSelectedDay(task.day)}
                      disabled={!isUnlocked}
                      className={`
                        w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left
                        ${isSelected 
                          ? 'border-[#5A4CFF] bg-[#5A4CFF]/5' 
                          : 'border-[#E2E5E9] hover:border-[#5A4CFF]/30'
                        }
                        ${!isUnlocked && 'opacity-50 cursor-not-allowed'}
                      `}
                    >
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                        ${isCompleted ? 'bg-green-100' : 'bg-[#F0F2F5]'}
                      `}>
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : isUnlocked ? (
                          <span className="font-medium text-[#24234C]">{task.day}</span>
                        ) : (
                          <Lock className="w-4 h-4 text-[#24234C]/40" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium truncate ${isCompleted ? 'text-green-700' : 'text-[#24234C]'}`}>
                          {task.title}
                        </p>
                        <p className="text-sm text-[#24234C]/60 truncate">{task.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#24234C]/60">
                        <span>{task.duration}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Certificate Card */}
            <Card className="border-[#E2E5E9] mb-6">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F0F2F5] flex items-center justify-center">
                  {progressPercent >= 100 ? (
                    <Trophy className="w-10 h-10 text-amber-500" />
                  ) : (
                    <Lock className="w-10 h-10 text-[#24234C]/30" />
                  )}
                </div>
                <h3 className="font-bold text-[#24234C] mb-2">Challenge Certificate</h3>
                <p className="text-sm text-[#24234C]/60 mb-4">
                  {progressPercent >= 100 
                    ? 'Congratulations! You earned this certificate.' 
                    : `Complete all ${challenge.totalDays} days to earn your certificate.`
                  }
                </p>
                <Progress value={progressPercent} className="h-2" />
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="border-[#E2E5E9]">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#24234C] mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#24234C]/60">Days Completed</span>
                    <span className="font-medium text-[#24234C]">{completedCount}/{challenge.totalDays}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#24234C]/60">Lessons</span>
                    <span className="font-medium text-[#24234C]">
                      {challenge.tasks.filter(t => t.type === 'lesson' && completedTasks.has(t.id)).length}/
                      {challenge.tasks.filter(t => t.type === 'lesson').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#24234C]/60">Quizzes</span>
                    <span className="font-medium text-[#24234C]">
                      {challenge.tasks.filter(t => t.type === 'quiz' && completedTasks.has(t.id)).length}/
                      {challenge.tasks.filter(t => t.type === 'quiz').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#24234C]/60">Practice</span>
                    <span className="font-medium text-[#24234C]">
                      {challenge.tasks.filter(t => t.type === 'practice' && completedTasks.has(t.id)).length}/
                      {challenge.tasks.filter(t => t.type === 'practice').length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
