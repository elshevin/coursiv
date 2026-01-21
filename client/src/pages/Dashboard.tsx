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

import { challengeData } from '@/data/challengeData';
// certificateData removed - replaced with coursesWithProgress
import { trpc } from "@/lib/trpc";
import { courses } from "../../../shared/courseData";

const mockChallenges = [
  { id: 'ai-reinvention-2026', title: '28-Day AI Challenge', day: 12, totalDays: 28, streak: 5 },
  { id: 'junior-ai-challenge', title: 'Prompt Master Challenge', day: 3, totalDays: 7, streak: 3 },
];

const mockAITools = [
  { id: 1, name: 'AI Writer', description: 'Generate content with AI', icon: '✍️' },
  { id: 2, name: 'Image Generator', description: 'Create images from text', icon: '🎨' },
  { id: 3, name: 'Code Assistant', description: 'Get help with coding', icon: '💻' },
  { id: 4, name: 'Data Analyzer', description: 'Analyze your data', icon: '📊' },
];

// XP per lesson completed
const XP_PER_LESSON = 50;

export default function Dashboard() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { user, logout, isAuthenticated, isLoading } = useEmailAuth();
  const { isTestModeEnabled, isTestModeAllowed, toggleTestMode } = useTestMode();
  const { theme, toggleTheme } = useTheme();
  const currentTab = params.tab || 'home';
  
  // Streak modal state
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);
  
  // Onboarding modal state
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  // Track if onboarding has been completed in this session (to prevent re-showing after navigation)
  const [onboardingCompletedInSession, setOnboardingCompletedInSession] = useState(false);
  
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
    // Navigate to the selected course
    setLocation(`/course/${selectedCourseId}`);
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
              <h1 className="text-3xl font-bold text-[#24234C] mb-2">
                Welcome back, {displayName}! 👋
              </h1>
              <p className="text-[#24234C]/60">Continue your AI learning journey</p>
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
              <Card className="border-[#E2E5E9] hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#5A4CFF]/10 flex items-center justify-center">
                      <Flame className="w-6 h-6 text-[#5A4CFF]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#24234C]">{stats.streak}</p>
                      <p className="text-sm text-[#24234C]/60">Day Streak</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-[#E2E5E9] hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#24234C]">{stats.lessonsCompleted}</p>
                      <p className="text-sm text-[#24234C]/60">Lessons Completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-[#E2E5E9] hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#24234C]">{formatXP(stats.xpEarned)}</p>
                      <p className="text-sm text-[#24234C]/60">XP Earned</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Continue Learning */}
            {inProgressCourses.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-[#24234C]">Continue Learning</h2>
                  <Link href="/dashboard/guides">
                    <a className="text-[#5A4CFF] text-sm font-medium hover:underline">View all</a>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inProgressCourses.map((course) => (
                    <Link key={course.id} href={`/course/${course.slug}`}>
                      <Card className="border-[#E2E5E9] overflow-hidden hover-lift cursor-pointer" data-testid={`course-card-${course.slug}`}>
                        <div className="h-32 overflow-hidden">
                          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-[#24234C] mb-2">{course.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-[#24234C]/60 mb-3">
                            <Clock className="w-4 h-4" />
                            <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Active Challenges */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#24234C]">Active Challenges</h2>
                <Link href="/dashboard/challenges">
                  <a className="text-[#5A4CFF] text-sm font-medium hover:underline">View all</a>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockChallenges.map((challenge) => (
                  <Link key={challenge.id} href={`/challenge/${challenge.id}`}>
                    <Card className="border-[#E2E5E9] hover-lift cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-[#24234C]">{challenge.title}</h3>
                          <div className="flex items-center gap-1 text-amber-500">
                            <Flame className="w-4 h-4" />
                            <span className="font-medium">{challenge.streak}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#24234C]/60 mb-3">
                          <Clock className="w-4 h-4" />
                          <span>Day {challenge.day} of {challenge.totalDays}</span>
                        </div>
                        <Progress value={(challenge.day / challenge.totalDays) * 100} className="h-2" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Guides Tab */}
        {currentTab === 'guides' && (
          <div data-testid="guides-page">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#24234C] mb-2">AI Guides</h1>
              <p className="text-[#24234C]/60">Master the most powerful AI tools</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursesWithProgress.map((course) => (
                <Link key={course.id} href={`/course/${course.slug}`}>
                  <Card className="border-[#E2E5E9] overflow-hidden hover-lift cursor-pointer h-full">
                    <div className="h-40 overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-[#24234C] mb-2">{course.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-[#24234C]/60 mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                        <span className="mx-1">•</span>
                        <span>{course.totalLessons} lessons</span>
                      </div>
                      {course.progress > 0 ? (
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-[#24234C]/60">{course.completedLessons}/{course.totalLessons} completed</span>
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
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {currentTab === 'challenges' && (
          <div data-testid="challenges-page">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#24234C] mb-2">Challenges</h1>
              <p className="text-[#24234C]/60">Push your limits with daily challenges</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challengeData.map((challenge) => (
                <Link key={challenge.id} href={`/challenge/${challenge.id}`}>
                  <Card className="border-[#E2E5E9] overflow-hidden hover-lift cursor-pointer">
                    <div className="h-32 overflow-hidden">
                      <img src={challenge.image} alt={challenge.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-[#24234C]">{challenge.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          challenge.status === 'active' ? 'bg-green-100 text-green-700' :
                          challenge.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {challenge.status}
                        </span>
                      </div>
                      <p className="text-sm text-[#24234C]/60 mb-3">{challenge.description}</p>
                      <div className="flex items-center gap-4 text-sm text-[#24234C]/60">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{challenge.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="w-4 h-4" />
                          <span>{challenge.reward}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {currentTab === 'profile' && (
          <div data-testid="profile-page" className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#24234C] mb-2">Profile</h1>
              <p className="text-[#24234C]/60">Manage your account settings</p>
            </div>

            <div className="space-y-6">
              {/* User Info */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E5E9]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#5A4CFF]/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-[#5A4CFF]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#24234C]">{displayName}</h2>
                    <p className="text-[#24234C]/60">{user?.email}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-[#F9FAFB] rounded-xl">
                    <p className="text-2xl font-bold text-[#5A4CFF]">{stats.streak}</p>
                    <p className="text-sm text-[#24234C]/60">Day Streak</p>
                  </div>
                  <div className="p-4 bg-[#F9FAFB] rounded-xl">
                    <p className="text-2xl font-bold text-green-600">{stats.lessonsCompleted}</p>
                    <p className="text-sm text-[#24234C]/60">Lessons</p>
                  </div>
                  <div className="p-4 bg-[#F9FAFB] rounded-xl">
                    <p className="text-2xl font-bold text-amber-500">{formatXP(stats.xpEarned)}</p>
                    <p className="text-sm text-[#24234C]/60">XP</p>
                  </div>
                </div>
              </div>

              {/* Theme Toggle */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E5E9]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {theme === 'dark' ? <Moon className="w-5 h-5 text-[#5A4CFF]" /> : <Sun className="w-5 h-5 text-amber-500" />}
                    <div>
                      <p className="font-medium text-[#24234C]">Dark Mode</p>
                      <p className="text-sm text-[#24234C]/60">Toggle dark theme</p>
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
              <div className="bg-white rounded-2xl p-6 border border-[#E2E5E9]">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-[#5A4CFF]" />
                  <h3 className="text-lg font-bold text-[#24234C]">AI Tools Progress</h3>
                </div>
                <div className="space-y-3">
                  {coursesWithProgress.slice(0, 6).map((course) => (
                    <Link key={course.id} href={`/course/${course.id}`}>
                      <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F9FAFB] transition-colors cursor-pointer">
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
                          <p className="font-medium text-[#24234C] text-sm">{course.title}</p>
                          <p className="text-xs text-[#24234C]/60">
                            {course.completedLessons}/{course.totalLessons} lessons • {course.progress}%
                          </p>
                        </div>
                        {course.progress === 100 ? (
                          <Trophy className="w-5 h-5 text-green-500" />
                        ) : course.progress > 0 ? (
                          <div className="text-xs font-medium text-[#5A4CFF]">{course.progress}%</div>
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <Progress value={course.progress} className="h-1.5" />
                    </Link>
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
                <div className="bg-white rounded-2xl p-6 border border-[#E2E5E9] mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FlaskConical className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-bold text-[#24234C]">Developer Options</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#24234C]">Test Mode</p>
                      <p className="text-sm text-[#24234C]/60">Unlock all content for testing</p>
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
                className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-medium"
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
    </div>
  );
}
