import React, { useState } from 'react';
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
import { certificateData } from '@/data/certificateData';

// Mock data for dashboard
const mockCourses = [
  { id: 1, title: 'ChatGPT Mastery', progress: 65, totalLessons: 24, completedLessons: 16, image: '/2-323.webp' },
  { id: 2, title: 'AI for Business', progress: 30, totalLessons: 18, completedLessons: 5, image: '/2-2458.webp' },
  { id: 3, title: 'Prompt Engineering', progress: 0, totalLessons: 12, completedLessons: 0, image: '/2-323.webp' },
];

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

export default function Dashboard() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { user, logout, isAuthenticated, isLoading } = useEmailAuth();
  const { isTestModeEnabled, isTestModeAllowed, toggleTestMode } = useTestMode();
  const { theme, toggleTheme } = useTheme();
  const currentTab = params.tab || 'home';
  
  // Streak modal state
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setLocation('/');
  };

  // Get display name from user
  const displayName = user?.name || user?.email?.split('@')[0] || 'Learner';

  // Redirect to login if not authenticated
  if (!isLoading && !isAuthenticated) {
    setLocation('/login');
    return null;
  }

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        <div className="animate-spin w-8 h-8 border-4 border-[#5A4CFF] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#F9FAFB]'}`}>
      {/* Top Navigation */}
      <TopNavbar currentStreak={5} longestStreak={12} />

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

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-[#E2E5E9] hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#5A4CFF]/10 flex items-center justify-center">
                      <Flame className="w-6 h-6 text-[#5A4CFF]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#24234C]">5</p>
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
                      <p className="text-2xl font-bold text-[#24234C]">21</p>
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
                      <p className="text-2xl font-bold text-[#24234C]">1,250</p>
                      <p className="text-sm text-[#24234C]/60">XP Earned</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Continue Learning */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#24234C]">Continue Learning</h2>
                <Link href="/dashboard/guides">
                  <a className="text-[#5A4CFF] text-sm font-medium hover:underline">View all</a>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCourses.map((course) => (
                  <Card key={course.id} className="border-[#E2E5E9] overflow-hidden hover-lift cursor-pointer" data-testid="course-card-chatgpt">
                    <div className="h-32 bg-gradient-to-br from-[#5A4CFF]/20 to-[#5A4CFF]/5 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-[#5A4CFF]/40" />
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
                ))}
              </div>
            </div>

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
                  <Card key={challenge.id} className="border-[#E2E5E9] hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-[#24234C]">{challenge.title}</h3>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Flame className="w-4 h-4" />
                          <span className="font-medium">{challenge.streak}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#24234C]/60 mb-3">
                        <span>Day {challenge.day} of {challenge.totalDays}</span>
                      </div>
                      <Progress value={(challenge.day / challenge.totalDays) * 100} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Guides Tab */}
        {currentTab === 'guides' && (
          <div data-testid="guides-page">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#24234C] mb-2">Guides</h1>
              <p className="text-[#24234C]/60">Master AI tools with our comprehensive guides</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 'chatgpt', title: 'ChatGPT Mastery', lessons: 24, duration: '4h 30m', icon: '🤖', progress: 65 },
                { id: 'dalle', title: 'DALL-E Creative', lessons: 18, duration: '3h 15m', icon: '🎨', progress: 30 },
                { id: 'midjourney', title: 'Midjourney Pro', lessons: 20, duration: '3h 45m', icon: '🖼️', progress: 0 },
                { id: 'claude', title: 'Claude Assistant', lessons: 16, duration: '2h 50m', icon: '🧠', progress: 0 },
                { id: 'copilot', title: 'GitHub Copilot', lessons: 14, duration: '2h 30m', icon: '💻', progress: 0 },
                { id: 'gemini', title: 'Google Gemini', lessons: 12, duration: '2h 15m', icon: '✨', progress: 0 },
              ].map((guide) => (
                <Link key={guide.id} href={`/course/${guide.id}`}>
                  <Card className="border-[#E2E5E9] overflow-hidden hover-lift cursor-pointer h-full">
                    <div className="h-32 bg-gradient-to-br from-[#5A4CFF]/20 to-[#5A4CFF]/5 flex items-center justify-center">
                      <span className="text-5xl">{guide.icon}</span>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-[#24234C] mb-2">{guide.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-[#24234C]/60 mb-3">
                        <span>{guide.lessons} lessons</span>
                        <span>•</span>
                        <span>{guide.duration}</span>
                      </div>
                      {guide.progress > 0 ? (
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-[#24234C]/60">Progress</span>
                            <span className="font-medium text-[#5A4CFF]">{guide.progress}%</span>
                          </div>
                          <Progress value={guide.progress} className="h-2" />
                        </div>
                      ) : (
                        <Button className="w-full bg-[#5A4CFF] hover:bg-[#4A3CDF] hover-scale" data-testid="continue-learning-btn">
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
              <p className="text-[#24234C]/60">Push yourself with our AI challenges</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6">
              <Button variant="default" className="bg-[#5A4CFF]">All</Button>
              <Button variant="outline">Completed</Button>
            </div>

            {/* My Challenges */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#24234C] mb-4">My challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challengeData.slice(0, 2).map((challenge) => (
                  <Link key={challenge.id} href={`/challenge/${challenge.id}`}>
                    <Card className="border-[#E2E5E9] overflow-hidden hover-lift cursor-pointer">
                      <div className="h-40 bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center relative">
                        <span className="text-6xl">{challenge.icon}</span>
                        <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                          Day {challenge.currentDay} of {challenge.totalDays}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-[#24234C] mb-1">{challenge.title}</h3>
                        <p className="text-sm text-[#24234C]/60 mb-3">{challenge.difficulty} • {challenge.totalDays} days</p>
                        <Progress value={(challenge.currentDay / challenge.totalDays) * 100} className="h-2" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* All Challenges */}
            <div>
              <h2 className="text-xl font-bold text-[#24234C] mb-4">All challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challengeData.map((challenge) => (
                  <Link key={challenge.id} href={`/challenge/${challenge.id}`}>
                    <Card className="border-[#E2E5E9] overflow-hidden hover-lift cursor-pointer">
                      <div className="h-32 bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                        <span className="text-5xl">{challenge.icon}</span>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-[#24234C] mb-1">{challenge.title}</h3>
                        <p className="text-sm text-[#24234C]/60">{challenge.difficulty} • {challenge.totalDays} days</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AI Tools Tab */}
        {currentTab === 'ai-tools' && (
          <div className="text-center py-16" data-testid="ai-tools-page">
            <div className="max-w-2xl mx-auto">
              <Sparkles className="w-16 h-16 text-[#5A4CFF] mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-[#24234C] mb-4">AI Tools</h1>
              <p className="text-xl text-[#5A4CFF] font-semibold mb-4">Coming Soon</p>
              <p className="text-[#24234C]/60 mb-8">
                We're building powerful AI tools to supercharge your productivity. 
                Stay tuned for AI Writer, Image Generator, Code Assistant, and more!
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {mockAITools.map((tool) => (
                  <div key={tool.id} className="bg-white rounded-xl p-4 border border-[#E2E5E9] opacity-60">
                    <span className="text-3xl mb-2 block">{tool.icon}</span>
                    <h3 className="font-medium text-[#24234C] text-sm">{tool.name}</h3>
                  </div>
                ))}
              </div>
              
              <Button disabled className="bg-[#5A4CFF]/50 cursor-not-allowed">
                Notify Me When Available
              </Button>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {currentTab === 'profile' && (
          <div data-testid="profile-page">
            <div className="max-w-2xl mx-auto">
              {/* User Info */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E5E9] mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5A4CFF] to-purple-400 flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#24234C]">{displayName}</h2>
                    <p className="text-[#24234C]/60">{user?.email}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl border border-[#E2E5E9] mb-6 overflow-hidden">
                <Link href="/prompts">
                  <div 
                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-[#E2E5E9]"
                    data-testid="prompts-library-link"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-[#24234C]">Prompts Library</p>
                      <p className="text-sm text-[#24234C]/60">Browse AI prompts</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#24234C]/40" />
                  </div>
                </Link>
                
                <button 
                  className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-[#E2E5E9]"
                  data-testid="help-link"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-[#24234C]">Help</p>
                    <p className="text-sm text-[#24234C]/60">Get support</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#24234C]/40" />
                </button>
                
                <Link href="/settings">
                  <div 
                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-[#E2E5E9]"
                    data-testid="settings-link"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-[#24234C] dark:text-white">Settings</p>
                      <p className="text-sm text-[#24234C]/60 dark:text-white/60">Account settings</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#24234C]/40 dark:text-white/40" />
                  </div>
                </Link>
                
                {/* Dark Mode Toggle */}
                <div 
                  className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  data-testid="dark-mode-toggle-container"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    {theme === 'dark' ? (
                      <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    ) : (
                      <Sun className="w-5 h-5 text-indigo-600" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-[#24234C] dark:text-white">Dark Mode</p>
                    <p className="text-sm text-[#24234C]/60 dark:text-white/60">{theme === 'dark' ? 'On' : 'Off'}</p>
                  </div>
                  <button
                    onClick={toggleTheme}
                    data-testid="dark-mode-toggle"
                    className={`relative w-12 h-6 rounded-full transition-colors ${theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${theme === 'dark' ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
              </div>

              {/* Certificates */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E5E9] mb-6">
                <h3 className="text-lg font-bold text-[#24234C] mb-4">My Certificates</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certificateData.map((cert) => (
                    <Link key={cert.id} href={`/course/${cert.courseId}`}>
                      <div 
                        className={`p-4 rounded-xl border ${cert.unlocked ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'} hover-lift cursor-pointer`}
                        data-testid={`certificate-card-${cert.courseId}`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{cert.icon}</span>
                          <div className="flex-1">
                            <p className="font-medium text-[#24234C] text-sm">{cert.title}</p>
                            <p className="text-xs text-[#24234C]/60">{cert.progress}% complete</p>
                          </div>
                          {cert.unlocked ? (
                            <Trophy className="w-5 h-5 text-green-500" />
                          ) : (
                            <Lock className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                        <Progress value={cert.progress} className="h-1.5" />
                      </div>
                    </Link>
                  ))}
                </div>
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
        currentStreak={5}
        longestStreak={12}
        streakDays={[true, true, true, true, true, false, false]}
      />
    </div>
  );
}
