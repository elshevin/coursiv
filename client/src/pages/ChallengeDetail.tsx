import { useState, useEffect, useRef } from 'react';
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
import { challengeData, getChallengeById, ChallengeTask, calculateCurrentDay } from '@/data/challengeData';
import { useTestMode } from '@/contexts/TestModeContext';
import { trpc } from '@/lib/trpc';
import { useEmailAuth } from '@/hooks/useEmailAuth';

export default function ChallengeDetail() {
  const { challengeId } = useParams<{ challengeId: string }>();
  const [, setLocation] = useLocation();
  const { isTestModeEnabled } = useTestMode();
  const { isAuthenticated } = useEmailAuth();
  
  const challenge = getChallengeById(challengeId || '');
  const [selectedDay, setSelectedDay] = useState(1);
  const [localCompletedTasks, setLocalCompletedTasks] = useState<Set<string>>(new Set());
  const dayNavRef = useRef<HTMLDivElement>(null);
  
  // Fetch user's challenge progress from backend
  const { data: progressData, refetch: refetchProgress } = trpc.challenges.getProgress.useQuery(
    { challengeId: challengeId || '' },
    { enabled: isAuthenticated && !!challengeId }
  );
  
  // Start challenge mutation
  const startChallengeMutation = trpc.challenges.start.useMutation({
    onSuccess: () => {
      refetchProgress();
    }
  });
  
  // Complete task mutation
  const completeTaskMutation = trpc.challenges.completeTask.useMutation({
    onSuccess: () => {
      refetchProgress();
    }
  });
  
  // Parse completed tasks from backend data (this is just for reference, actual state is in localCompletedTasks)
  // Note: We use localCompletedTasks state instead of this computed value
  
  // Merge backend data with local state
  useEffect(() => {
    if (progressData?.completedTasks) {
      try {
        const parsed = typeof progressData.completedTasks === 'string'
          ? JSON.parse(progressData.completedTasks)
          : progressData.completedTasks;
        if (Array.isArray(parsed)) {
          setLocalCompletedTasks(new Set(parsed));
        }
      } catch {
        // Keep local state
      }
    }
  }, [progressData]);
  
  // Calculate current day based on user's start date
  const userStartDate = progressData?.startedAt ? new Date(progressData.startedAt).toISOString() : null;
  const currentDay = challenge ? calculateCurrentDay(userStartDate, challenge.totalDays) : 0;
  const isStarted = !!progressData?.startedAt;
  
  // In test mode, simulate some completed tasks
  useEffect(() => {
    if (isTestModeEnabled && !progressData) {
      const initialCompleted = new Set<string>();
      challenge?.tasks.slice(0, 5).forEach(task => {
        initialCompleted.add(task.id);
      });
      setLocalCompletedTasks(initialCompleted);
    }
  }, [isTestModeEnabled, challenge, progressData]);

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
  const completedCount = localCompletedTasks.size;
  const progressPercent = Math.round((completedCount / challenge.totalDays) * 100);
  
  // All days are unlocked - users can freely choose any task
  const isDayUnlocked = (day: number) => {
    return true;
  };

  const handleStartChallenge = async () => {
    if (!challengeId) return;
    
    try {
      await startChallengeMutation.mutateAsync({ challengeId });
    } catch (error) {
      console.error('Failed to start challenge:', error);
    }
  };

  const handleCompleteTask = async (taskId: string) => {
    // Update local state immediately for better UX
    setLocalCompletedTasks(prev => {
      const newSet = new Set(prev);
      newSet.add(taskId);
      return newSet;
    });
    
    // Sync with backend
    if (challengeId && isAuthenticated) {
      try {
        await completeTaskMutation.mutateAsync({ challengeId, taskId });
      } catch (error) {
        console.error('Failed to complete task:', error);
      }
    }
  };

  const handleStartTask = (task: ChallengeTask) => {
    // If challenge not started yet, start it first
    if (!isStarted && isAuthenticated) {
      handleStartChallenge();
    }
    
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

  const getTaskIcon = (type: ChallengeTask['type']) => {
    switch (type) {
      case 'lesson':
        return <BookOpen className="w-5 h-5" />;
      case 'quiz':
        return <HelpCircle className="w-5 h-5" />;
      case 'practice':
        return <Play className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5A4CFF] to-[#7C6FFF] text-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/dashboard/challenges">
            <a className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Challenges
            </a>
          </Link>
          
          <div className="flex items-start gap-4">
            <span className="text-4xl">{challenge.icon}</span>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{challenge.title}</h1>
              <p className="text-white/80 mb-4">{challenge.description}</p>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  <span>{challenge.totalDays} Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  <span>{challenge.difficulty}</span>
                </div>
                {isStarted && (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Day {currentDay} of {challenge.totalDays}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span>{completedCount} of {challenge.totalDays} tasks completed</span>
              <span>{progressPercent}%</span>
            </div>
            <Progress value={progressPercent} className="h-2 bg-white/20" />
          </div>
        </div>
      </div>
      
      {/* Day Navigation */}
      <div className="bg-white border-b border-[#E2E5E9] sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scrollDayNav('left')}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>
            
            <div 
              ref={dayNavRef}
              className="flex-1 overflow-x-auto scrollbar-hide flex gap-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {Array.from({ length: challenge.totalDays }, (_, i) => i + 1).map(day => {
                const task = challenge.tasks.find(t => t.day === day);
                const isCompleted = task && localCompletedTasks.has(task.id);
                const isSelected = day === selectedDay;
                const unlocked = isDayUnlocked(day);
                
                return (
                  <button
                    key={day}
                    onClick={() => unlocked && setSelectedDay(day)}
                    disabled={!unlocked}
                    className={`
                      flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                      transition-all duration-200
                      ${isSelected 
                        ? 'bg-[#5A4CFF] text-white' 
                        : isCompleted 
                          ? 'bg-green-100 text-green-700 border-2 border-green-500' 
                          : unlocked
                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                      }
                    `}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : day}
                  </button>
                );
              })}
            </div>
            
            <button 
              onClick={() => scrollDayNav('right')}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Task Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {!isStarted && !isTestModeEnabled && (
          <Card className="mb-6 border-[#5A4CFF] bg-[#5A4CFF]/5">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#24234C] mb-2">Ready to start this challenge?</h3>
              <p className="text-[#24234C]/60 mb-4">Click the button below to begin your {challenge.totalDays}-day journey!</p>
              <Button 
                onClick={handleStartChallenge}
                disabled={startChallengeMutation.isPending}
                className="bg-[#5A4CFF] hover:bg-[#4A3CE0]"
              >
                {startChallengeMutation.isPending ? 'Starting...' : 'Start Challenge'}
              </Button>
            </CardContent>
          </Card>
        )}
        
        {currentTask ? (
          <Card className="border-[#E2E5E9]">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center
                  ${localCompletedTasks.has(currentTask.id) 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-[#5A4CFF]/10 text-[#5A4CFF]'
                  }
                `}>
                  {localCompletedTasks.has(currentTask.id) 
                    ? <CheckCircle2 className="w-6 h-6" />
                    : getTaskIcon(currentTask.type)
                  }
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-[#5A4CFF] font-medium">Day {currentTask.day}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500 capitalize">{currentTask.type}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{currentTask.duration}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#24234C] mb-2">{currentTask.title}</h2>
                  <p className="text-[#24234C]/60 mb-4">{currentTask.description}</p>
                  
                  {localCompletedTasks.has(currentTask.id) ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-medium">Completed!</span>
                    </div>
                  ) : (
                    <Button 
                      onClick={() => handleStartTask(currentTask)}
                      className="bg-[#5A4CFF] hover:bg-[#4A3CE0]"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Task
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-[#E2E5E9]">
            <CardContent className="p-6 text-center">
              <p className="text-[#24234C]/60">No task found for this day.</p>
            </CardContent>
          </Card>
        )}
        
        {/* All Tasks Overview */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-[#24234C] mb-4">All Tasks</h3>
          <div className="space-y-3">
            {challenge.tasks.map(task => {
              const isCompleted = localCompletedTasks.has(task.id);
              const unlocked = isDayUnlocked(task.day);
              
              return (
                <div 
                  key={task.id}
                  onClick={() => unlocked && setSelectedDay(task.day)}
                  className={`
                    p-4 rounded-xl border cursor-pointer transition-all
                    ${selectedDay === task.day 
                      ? 'border-[#5A4CFF] bg-[#5A4CFF]/5' 
                      : 'border-[#E2E5E9] hover:border-[#5A4CFF]/50'
                    }
                    ${!unlocked && 'opacity-50 cursor-not-allowed'}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                      ${isCompleted 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}>
                      {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : task.day}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#24234C]">{task.title}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 capitalize">
                          {task.type}
                        </span>
                      </div>
                      <p className="text-sm text-[#24234C]/60">{task.duration}</p>
                    </div>
                    
                    {!unlocked && <Lock className="w-4 h-4 text-gray-400" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
