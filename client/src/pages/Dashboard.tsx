import React, { useState, useEffect, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useParams, Link, useLocation } from "wouter";
import { useEmailAuth } from "@/hooks/useEmailAuth";
import { useTestMode } from "@/contexts/TestModeContext";
import { useTheme } from "@/contexts/ThemeContext";
import { WeeklyStreaks } from "@/components/WeeklyStreaks";
import { TopNavbar } from "@/components/TopNavbar";
import { StreakDetailModal } from "@/components/StreakDetailModal";
import { OnboardingModal } from "@/components/OnboardingModal";
import { SubscriptionModal } from "@/components/SubscriptionModal";
import { 
  Home, 
  BookOpen, 
  Trophy, 
  Sparkles, 
  User, 
  LogOut,
  Clock,
  Flame,
  Target,
  Zap,
  Settings,
  FlaskConical,
  Lock,
  HelpCircle,
  ChevronRight,
  Moon,
  Sun
} from "lucide-react";

import { challengeData, getChallengeWithUserProgress, type UserChallengeProgress } from '@/data/challengeData';
// certificateData removed - replaced with coursesWithProgress
import { trpc } from "@/lib/trpc";
import { courses } from "../../../shared/courseData";

// Mock data removed - using real data from backend;

// XP per lesson completed
const XP_PER_LESSON = 50;

export default function Dashboard() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { user, logout, isAuthenticated, isLoading, isSubscribed } = useEmailAuth();
  const { isTestModeEnabled, isTestModeAllowed, toggleTestMode } = useTestMode();
  const { theme, toggleTheme } = useTheme();
  const currentTab = params.tab || 'home';
  
  // Streak modal state
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);
  
  // Onboarding modal state
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  // Track if onboarding has been completed in this session (to prevent re-showing after navigation)
  const [onboardingCompletedInSession, setOnboardingCompletedInSession] = useState(false);
  
  // Subscription modal state
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  
  // Update settings mutation
  const updateSettingsMutation = trpc.emailAuth.updateSettings.useMutation();

  // Fetch streak data from backend
  const { data: streakData } = trpc.streaks.get.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  // Fetch weekly activity data
  const { data: weeklyActivityData } = trpc.streaks.getWeeklyActivity.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  // Fetch all course progress from backend
  const { data: allProgressData } = trpc.courses.getAllProgress.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  // Fetch all challenge progress from backend
  const { data: challengeProgressData } = trpc.challenges.getAllProgress.useQuery(undefined, {
    enabled: isAuthenticated,
    refetchOnWindowFocus: true,
    staleTime: 0,
  });

  // Calculate real statistics
  const stats = useMemo(() => {
    // Calculate total lessons completed across all courses
    let totalLessonsCompleted = 0;
    
    if (allProgressData) {
      allProgressData.forEach(progress => {
        if (progress.completedModules) {
          try {
            const parsed = typeof progress.completedModules === 'string'
              ? JSON.parse(progress.completedModules)
              : progress.completedModules;
            // Flatten and clean the array to handle nested arrays
            const modules = Array.isArray(parsed) 
              ? parsed.flat(Infinity).filter((item): item is string => typeof item === 'string')
              : [];
            totalLessonsCompleted += modules.length;
          } catch {
            // Skip invalid data
          }
        }
      });
    }

    // Calculate XP earned (XP_PER_LESSON per completed lesson)
    const xpEarned = totalLessonsCompleted * XP_PER_LESSON;

    // Get current streak from backend data
    const currentStreak = streakData?.currentStreak || 0;
    const longestStreak = streakData?.longestStreak || 0;

    return {
      streak: currentStreak,
      longestStreak: longestStreak,
      lessonsCompleted: totalLessonsCompleted,
      xpEarned: xpEarned,
    };
  }, [allProgressData, streakData]);

  // Calculate challenges with user progress
  const challengesWithProgress = useMemo(() => {
    // Convert backend progress data to a map for easy lookup
    const progressMap = new Map<string, UserChallengeProgress>();
    
    if (challengeProgressData) {
      challengeProgressData.forEach(progress => {
        let completedTasks: string[] = [];
        if (progress.completedTasks) {
          try {
            const parsed = typeof progress.completedTasks === 'string'
              ? JSON.parse(progress.completedTasks)
              : progress.completedTasks;
            completedTasks = Array.isArray(parsed) ? parsed : [];
          } catch {
            completedTasks = [];
          }
        }
        
        progressMap.set(progress.challengeId, {
          challengeId: progress.challengeId,
          startedAt: progress.startedAt ? new Date(progress.startedAt).toISOString() : null,
          completedTasks,
          completedAt: progress.completedAt ? new Date(progress.completedAt).toISOString() : null,
        });
      });
    }
    
    // Combine static challenge data with user progress
    return challengeData.map(challenge => {
      const userProgress = progressMap.get(challenge.id) || null;
      return getChallengeWithUserProgress(challenge, userProgress);
    });
  }, [challengeProgressData]);

  // Calculate weekly streak days for the modal
  const streakDays = useMemo(() => {
    // Default: all false (no activity)
    const days = [false, false, false, false, false, false, false];
    
    if (weeklyActivityData && weeklyActivityData.length > 0) {
      const today = new Date();
      const dayOfWeek = today.getDay(); // 0 = Sunday
      
      weeklyActivityData.forEach(activity => {
        if (activity.activityDate) {
          const activityDate = new Date(activity.activityDate);
          const activityDay = activityDate.getDay();
          // Map Sunday=0 to index 0, Monday=1 to index 1, etc.
          days[activityDay] = true;
        }
      });
    }
    
    return days;
  }, [weeklyActivityData]);

  // Check if user is new and show onboarding
  useEffect(() => {
    // Check if user has completed onboarding (from user data or in this session)
    const hasCompletedOnboarding = user?.onboardingCompleted === true || onboardingCompletedInSession;
    
    if (isAuthenticated && !isLoading && !hasCompletedOnboarding) {
      // Show onboarding for new users who haven't completed it
      const timer = setTimeout(() => {
        setIsOnboardingOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isLoading, user?.onboardingCompleted, onboardingCompletedInSession]);

  // Handle onboarding completion
  const handleOnboardingComplete = async (selectedCourseId: string) => {
    // Mark as completed in session immediately to prevent re-showing
    setOnboardingCompletedInSession(true);
    setIsOnboardingOpen(false);
    
    // Save onboarding completion to database
    try {
      await updateSettingsMutation.mutateAsync({ onboardingCompleted: true });
    } catch (error) {
      console.error('Failed to save onboarding status:', error);
    }
    
    // If user is subscribed or in test mode, navigate to the selected course
    // Otherwise, show subscription modal instead of redirecting to subscription page
    if (isSubscribed || isTestModeEnabled) {
      setLocation(`/course/${selectedCourseId}`);
    } else {
      // Show subscription modal for non-subscribers
      setIsSubscriptionModalOpen(true);
    }
  };

  // Handle onboarding close (dismiss)
  const handleOnboardingClose = async () => {
    // Mark as completed in session immediately to prevent re-showing
    setOnboardingCompletedInSession(true);
    setIsOnboardingOpen(false);
    
    // Save onboarding completion to database
    try {
      await updateSettingsMutation.mutateAsync({ onboardingCompleted: true });
    } catch (error) {
      console.error('Failed to save onboarding status:', error);
    }
  };

  // Handle content click with subscription check
  const handleContentClick = (e: React.MouseEvent, targetUrl: string) => {
    // Allow access if subscribed or in test mode
    if (isSubscribed || isTestModeEnabled) {
      setLocation(targetUrl);
      return;
    }
    
    // Block access and show subscription modal
    e.preventDefault();
    e.stopPropagation();
    setIsSubscriptionModalOpen(true);
  };

  // Calculate real progress for each course
  const getCoursesWithProgress = () => {
    return courses.map(course => {
      const allModules = course.levels.flatMap(level => level.modules);
      const totalModules = allModules.length;
      
      // Find progress for this course
      const courseProgress = allProgressData?.find(p => p.courseId === course.id);
      let completedModules: string[] = [];
      
      if (courseProgress?.completedModules) {
        try {
          const parsed = typeof courseProgress.completedModules === 'string'
            ? JSON.parse(courseProgress.completedModules)
            : courseProgress.completedModules;
          // Flatten and clean the array to handle nested arrays
          completedModules = Array.isArray(parsed) 
            ? parsed.flat(Infinity).filter((item): item is string => typeof item === 'string')
            : [];
        } catch {
          completedModules = [];
        }
      }
      
      const completedCount = completedModules.length;
      const progressPercent = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;
      
      return {
        id: course.id,
        title: course.title,
        slug: course.id,
        progress: progressPercent,
        totalLessons: totalModules,
        completedLessons: completedCount,
        image: `/images/course/covers/${course.id}-cover.jpg`,
        duration: course.totalDuration,
      };
    });
  };

  const coursesWithProgress = getCoursesWithProgress();
  
  // Filter courses that have progress > 0 for "Continue Learning" section
  const inProgressCourses = coursesWithProgress.filter(c => c.progress > 0 && c.progress < 100).slice(0, 3);

  const handleLogout = async () => {
    await logout();
    setLocation('/');
  };

  // Get display name from user
  const displayName = user?.name || user?.email?.split('@')[0] || 'Learner';

  // Format XP with commas
  const formatXP = (xp: number) => {
    return xp.toLocaleString();
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#5A4CFF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#24234C]/60">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated (only after loading is complete)
  if (!isAuthenticated) {
    console.log('[Dashboard] Not authenticated, redirecting to /login');
    setLocation('/login');
    return null;
  }
  console.log('[Dashboard] User authenticated:', user);

  

  return (
    <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#F9FAFB]'}`}>
      {/* Top Navigation */}
      <TopNavbar currentStreak={stats.streak} longestStreak={stats.longestStreak} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Home Tab */}
        {(currentTab === 'home' || !currentTab) && (
          <div data-testid="home-page">
            <div className="mb-8">
              <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>
                Welcome back, {displayName}! 👋
              </h1>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}>Continue your AI learning journey</p>
            </div>

            {/* Weekly Streaks - Clickable */}
            <div 
              className="mb-8 cursor-pointer" 
              onClick={() => setIsStreakModalOpen(true)}
              data-testid="weekly-streaks-card"
            >
              <WeeklyStreaks />
            </div>

            {/* Stats Cards - Now with real data */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className={`hover-lift ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'border-[#E2E5E9]'}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'bg-[#5A4CFF]/20' : 'bg-[#5A4CFF]/10'}`}>
                      <Flame className="w-6 h-6 text-[#5A4CFF]" />
                    </div>
                    <div>
                      <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>{stats.streak}</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>Day Streak</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`hover-lift ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'border-[#E2E5E9]'}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'bg-green-900/50' : 'bg-green-100'}`}>
                      <Target className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>{stats.lessonsCompleted}</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>Lessons Completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`hover-lift ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'border-[#E2E5E9]'}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'bg-amber-900/50' : 'bg-amber-100'}`}>
                      <Zap className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>{formatXP(stats.xpEarned)}</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>XP Earned</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Continue Learning */}
            {inProgressCourses.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>Continue Learning</h2>
                  <Link href="/dashboard/guides">
                    <a className="text-[#5A4CFF] text-sm font-medium hover:underline">View all</a>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inProgressCourses.map((course) => (
                    <div key={course.id} onClick={(e) => handleContentClick(e, `/course/${course.slug}`)} className="cursor-pointer">
                      <Card className={`overflow-hidden hover-lift relative ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'border-[#E2E5E9]'}`} data-testid={`course-card-${course.slug}`}>
                        {!isSubscribed && !isTestModeEnabled && (
                          <div className="absolute inset-0 bg-black/5 z-10">
                            <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5">
                              <Lock className="w-4 h-4 text-gray-500" />
                            </div>
                          </div>
                        )}
                        <div className="h-32 overflow-hidden">
                          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                        </div>
                        <CardContent className="p-4">
                          <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>{course.title}</h3>
                          <div className={`flex items-center gap-2 text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>
                            <Clock className="w-4 h-4" />
                            <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Active Challenges */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>Active Challenges</h2>
                <Link href="/dashboard/challenges">
                  <a className="text-[#5A4CFF] text-sm font-medium hover:underline">View all</a>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challengesWithProgress.slice(0, 2).map((challenge) => {
                  const isActive = challenge.isStarted;
                  const completedCount = challenge.completedTasks?.length || 0;
                  const progress = Math.round((completedCount / challenge.totalDays) * 100);
                  
                  return (
                    <div key={challenge.id} onClick={(e) => handleContentClick(e, `/challenge/${challenge.id}`)} className="cursor-pointer">
                      <Card className={`hover-lift relative ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'border-[#E2E5E9]'}`}>
                        {!isSubscribed && !isTestModeEnabled && (
                          <div className="absolute inset-0 bg-black/5 z-10 rounded-lg">
                            <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5">
                              <Lock className="w-4 h-4 text-gray-500" />
                            </div>
                          </div>
                        )}
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{challenge.icon}</span>
                              <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>{challenge.title}</h3>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              isActive ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                              {isActive ? `${completedCount}/${challenge.totalDays} completed` : 'Start'}
                            </span>
                          </div>
                          <p className={`text-sm mb-3 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>{challenge.description}</p>
                          
                          {/* Progress bar for challenges */}
                          <div className="mb-3">
                            <div className={`flex justify-between text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>
                              <span>Progress</span>
                              <span>{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                          </div>
                          
                          <div className={`flex items-center gap-4 text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{challenge.totalDays} days</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Target className="w-4 h-4" />
                              <span>{challenge.difficulty}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-[#5A4CFF] font-medium">{challenge.category}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Guides Tab */}
        {currentTab === 'guides' && (
          <div data-testid="guides-page">
            <div className="mb-8">
              <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>AI Guides</h1>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}>Master the most powerful AI tools</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursesWithProgress.map((course) => (
                <div key={course.id} onClick={(e) => handleContentClick(e, `/course/${course.slug}`)} className="cursor-pointer">
                  <Card className={`overflow-hidden hover-lift h-full relative ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'border-[#E2E5E9]'}`}>
                    {/* Lock overlay for non-subscribers */}
                    {!isSubscribed && !isTestModeEnabled && (
                      <div className="absolute inset-0 bg-black/5 z-10 flex items-center justify-center">
                        <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5">
                          <Lock className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    )}
                    <div className="h-40 overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>{course.title}</h3>
                      <div className={`flex items-center gap-2 text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                        <span className="mx-1">•</span>
                        <span>{course.totalLessons} lessons</span>
                      </div>
                      {course.progress > 0 ? (
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className={theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}>{course.completedLessons}/{course.totalLessons} completed</span>
                            <span className="text-[#5A4CFF] font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      ) : (
                        <Button className="w-full bg-[#5A4CFF] hover:bg-[#4A3CE0]">
                          Start Learning
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {currentTab === 'challenges' && (
          <div data-testid="challenges-page">
            <div className="mb-8">
              <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>Challenges</h1>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}>Push your limits with daily challenges</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challengesWithProgress.map((challenge) => {
                // Determine status based on user's progress
                const status = challenge.isStarted ? 'active' : 'available';
                const completedCount = challenge.completedTasks?.length || 0;
                const progress = Math.round((completedCount / challenge.totalDays) * 100);
                
                return (
                  <div key={challenge.id} onClick={(e) => handleContentClick(e, `/challenge/${challenge.id}`)} className="cursor-pointer">
                    <Card className={`overflow-hidden hover-lift relative ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'border-[#E2E5E9]'}`}>
                      {!isSubscribed && !isTestModeEnabled && (
                        <div className="absolute inset-0 bg-black/5 z-10 rounded-lg">
                          <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5">
                            <Lock className="w-4 h-4 text-gray-500" />
                          </div>
                        </div>
                      )}
                      <div className="h-32 overflow-hidden relative">
                        <img src={challenge.image} alt={challenge.title} className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2">
                          <span className="text-2xl">{challenge.icon}</span>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>{challenge.title}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            status === 'active' ? 'bg-green-100 text-green-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {status === 'active' ? `${completedCount}/${challenge.totalDays} completed` : 'Start'}
                          </span>
                        </div>
                        <p className={`text-sm mb-3 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>{challenge.description}</p>
                        
                        {/* Progress bar for challenges */}
                        <div className="mb-3">
                          <div className={`flex justify-between text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>
                            <span>Progress</span>
                            <span>{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                        
                        <div className={`flex items-center gap-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{challenge.totalDays} days</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Target className="w-4 h-4" />
                            <span>{challenge.difficulty}</span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="text-xs text-[#5A4CFF] font-medium">{challenge.category}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* AI Tools Tab */}
        {currentTab === 'ai-tools' && (
          <div data-testid="ai-tools-page" className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>AI Tools</h1>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}>Explore and master the latest AI tools</p>
            </div>

            <div className={`rounded-2xl p-8 border text-center ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#E2E5E9]'}`}>
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-[#5A4CFF]/20' : 'bg-[#5A4CFF]/10'}`}>
                <Sparkles className="w-10 h-10 text-[#5A4CFF]" />
              </div>
              <h2 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>Coming Soon</h2>
              <p className={`max-w-md mx-auto mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>
                We're building an amazing collection of AI tools guides and tutorials. 
                Stay tuned for comprehensive guides on ChatGPT, DALL-E, Midjourney, Claude, and more!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['ChatGPT', 'DALL-E', 'Midjourney', 'Claude', 'Gemini', 'Copilot'].map((tool) => (
                  <span key={tool} className={`px-4 py-2 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-[#F9FAFB] text-[#24234C]/70'}`}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {currentTab === 'profile' && (
          <div data-testid="profile-page" className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>Profile</h1>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}>Manage your account settings</p>
            </div>

            <div className="space-y-6">
              {/* User Info */}
              <div className={`rounded-2xl p-6 border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#E2E5E9]'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#5A4CFF]/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-[#5A4CFF]" />
                  </div>
                  <div>
                    <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>{displayName}</h2>
                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}>{user?.email}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-[#F9FAFB]'}`}>
                    <p className="text-2xl font-bold text-[#5A4CFF]">{stats.streak}</p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>Day Streak</p>
                  </div>
                  <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-[#F9FAFB]'}`}>
                    <p className="text-2xl font-bold text-green-600">{stats.lessonsCompleted}</p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>Lessons</p>
                  </div>
                  <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-[#F9FAFB]'}`}>
                    <p className="text-2xl font-bold text-amber-500">{formatXP(stats.xpEarned)}</p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>XP</p>
                  </div>
                </div>
              </div>

              {/* Theme Toggle */}
              <div className={`rounded-2xl p-6 border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#E2E5E9]'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {theme === 'dark' ? <Moon className="w-5 h-5 text-[#5A4CFF]" /> : <Sun className="w-5 h-5 text-amber-500" />}
                    <div>
                      <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>Dark Mode</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>Toggle dark theme</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className={`relative w-12 h-6 rounded-full transition-colors ${theme === 'dark' ? 'bg-[#5A4CFF]' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${theme === 'dark' ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
              </div>

              {/* AI Tools Learning Progress */}
              <div className={`rounded-2xl p-6 border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#E2E5E9]'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-[#5A4CFF]" />
                  <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>AI Tools Progress</h3>
                </div>
                <div className="space-y-3">
                  {coursesWithProgress.slice(0, 6).map((course) => (
                    <div key={course.id} onClick={(e) => handleContentClick(e, `/course/${course.id}`)} className="cursor-pointer">
                      <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors relative ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-[#F9FAFB]'}`}>
                        {!isSubscribed && !isTestModeEnabled && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Lock className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>{course.title}</p>
                          <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>
                            {course.completedLessons}/{course.totalLessons} lessons • {course.progress}%
                          </p>
                        </div>
                        {(isSubscribed || isTestModeEnabled) && (
                          course.progress === 100 ? (
                            <Trophy className="w-5 h-5 text-green-500" />
                          ) : course.progress > 0 ? (
                            <div className="text-xs font-medium text-[#5A4CFF]">{course.progress}%</div>
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          )
                        )}
                      </div>
                      <Progress value={course.progress} className="h-1.5" />
                    </div>
                  ))}
                </div>
                {coursesWithProgress.length > 6 && (
                  <Link href="/dashboard/guides">
                    <a className="block text-center text-sm text-[#5A4CFF] font-medium mt-4 hover:underline">
                      View all {coursesWithProgress.length} courses
                    </a>
                  </Link>
                )}
              </div>

              {/* Developer Options */}
              {isTestModeAllowed && (
                <div className={`rounded-2xl p-6 border mb-6 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#E2E5E9]'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <FlaskConical className="w-5 h-5 text-purple-600" />
                    <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>Developer Options</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#24234C]'}`}>Test Mode</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#24234C]/60'}`}>Unlock all content for testing</p>
                    </div>
                    <button
                      onClick={toggleTestMode}
                      className={`relative w-12 h-6 rounded-full transition-colors ${isTestModeEnabled ? 'bg-purple-600' : 'bg-gray-300'}`}
                    >
                      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${isTestModeEnabled ? 'left-7' : 'left-1'}`} />
                    </button>
                  </div>
                </div>
              )}

              {/* Logout */}
              <button 
                onClick={handleLogout}
                className={`w-full flex items-center justify-center gap-2 p-4 rounded-xl transition-colors font-medium ${theme === 'dark' ? 'bg-red-900/30 text-red-400 hover:bg-red-900/50' : 'bg-red-50 text-red-600 hover:bg-red-100'}`}
              >
                <LogOut className="w-5 h-5" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Streak Detail Modal */}
      <StreakDetailModal
        isOpen={isStreakModalOpen}
        onClose={() => setIsStreakModalOpen(false)}
        currentStreak={stats.streak}
        longestStreak={stats.longestStreak}
        streakDays={streakDays}
      />

      {/* Onboarding Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={handleOnboardingClose}
        onComplete={handleOnboardingComplete}
        userName={displayName}
      />

      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
        userEmail={user?.email}
      />
    </div>
  );
}
