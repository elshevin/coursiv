import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useParams, Link, useLocation } from "wouter";
import { useEmailAuth } from "@/hooks/useEmailAuth";
import { useTestMode } from "@/contexts/TestModeContext";
import { WeeklyStreaks } from "@/components/WeeklyStreaks";
import { 
  Home, 
  BookOpen, 
  Trophy, 
  Sparkles, 
  User, 
  LogOut,
  Play,
  Clock,
  Star,
  ChevronRight,
  Flame,
  Target,
  Zap,
  Settings,
  FlaskConical,
  Lock,
  HelpCircle
} from "lucide-react";

// Mock data for dashboard
const mockCourses = [
  { id: 1, title: 'ChatGPT Mastery', progress: 65, totalLessons: 24, completedLessons: 16, image: '/2-323.webp' },
  { id: 2, title: 'AI for Business', progress: 30, totalLessons: 18, completedLessons: 5, image: '/2-2458.webp' },
  { id: 3, title: 'Prompt Engineering', progress: 0, totalLessons: 12, completedLessons: 0, image: '/2-323.webp' },
];

import { challengeData } from '@/data/challengeData';
import { certificateData } from '@/data/certificateData';

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

const sidebarItems = [
  { id: 'home', label: 'Home', icon: Home, path: '/dashboard' },
  { id: 'guides', label: 'Guides', icon: BookOpen, path: '/dashboard/guides' },
  { id: 'challenges', label: 'Challenges', icon: Trophy, path: '/dashboard/challenges' },
  { id: 'ai-tools', label: 'AI Tools', icon: Sparkles, path: '/dashboard/ai-tools' },
  { id: 'profile', label: 'Profile', icon: User, path: '/dashboard/profile' },
];

export default function Dashboard() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { user, logout, isAuthenticated, isLoading } = useEmailAuth();
  const { isTestModeEnabled, isTestModeAllowed, toggleTestMode } = useTestMode();
  const currentTab = params.tab || 'home';

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
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
        <div className="animate-spin w-8 h-8 border-4 border-[#5A4CFF] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#E2E5E9] flex flex-col">
        <div className="p-6 border-b border-[#E2E5E9]">
          <Link href="/">
            <img src="/2-332.svg" alt="Coursiv" className="h-8 cursor-pointer" />
          </Link>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id || (currentTab === 'home' && item.id === 'home' && !params.tab);
              return (
                <li key={item.id}>
                  <Link href={item.path}>
                    <a className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-[#5A4CFF] text-white' 
                        : 'text-[#24234C]/70 hover:bg-[#F0F2F5]'
                    }`}>
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-[#E2E5E9]">
          <div className="flex items-center gap-3 px-4 py-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#5A4CFF]/10 flex items-center justify-center">
              <User className="w-5 h-5 text-[#5A4CFF]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-[#24234C] truncate">{displayName}</p>
              <p className="text-xs text-[#24234C]/50">{user?.email}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-50 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Home Tab */}
        {(currentTab === 'home' || !currentTab) && (
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#24234C] mb-2">
                Welcome back, {displayName}! 👋
              </h1>
              <p className="text-[#24234C]/60">Continue your AI learning journey</p>
            </div>

            {/* Weekly Streaks */}
            <div className="mb-8">
              <WeeklyStreaks />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-[#E2E5E9]">
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
              
              <Card className="border-[#E2E5E9]">
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
              
              <Card className="border-[#E2E5E9]">
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
                  <Card key={course.id} className="border-[#E2E5E9] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
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
                  <Card key={challenge.id} className="border-[#E2E5E9]">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-[#24234C]">{challenge.title}</h3>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Flame className="w-4 h-4" />
                          <span className="text-sm font-medium">{challenge.streak}</span>
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
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl font-bold text-[#24234C] mb-8">Learning Guides</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCourses.map((course) => (
                <Card key={course.id} className="border-[#E2E5E9] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-[#5A4CFF]/20 to-[#5A4CFF]/5 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-[#5A4CFF]/40" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg text-[#24234C] mb-2">{course.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-[#24234C]/60 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{course.totalLessons} lessons</span>
                    </div>
                    <Progress value={course.progress} className="h-2 mb-4" />
                    <Button className="w-full bg-[#5A4CFF] hover:bg-[#4B3FE0]">
                      {course.progress > 0 ? 'Continue' : 'Start Learning'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {currentTab === 'challenges' && (
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-[#24234C]">Challenges</h1>
              <div className="flex gap-2">
                <Button variant="outline" className="border-[#5A4CFF] text-[#5A4CFF]">All</Button>
                <Button variant="ghost" className="text-[#24234C]/60">Completed</Button>
              </div>
            </div>
            
            {/* My Challenges */}
            {mockChallenges.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#24234C] mb-4">My Challenges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockChallenges.map((challenge) => (
                    <Link key={challenge.id} href={`/challenge/${challenge.id}`}>
                      <Card className="border-[#E2E5E9] hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-xl text-[#24234C]">{challenge.title}</h3>
                            <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
                              <Flame className="w-4 h-4" />
                              <span className="text-sm font-medium">{challenge.streak} day streak</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#24234C]/60 mb-4">
                            <span>Day {challenge.day} of {challenge.totalDays}</span>
                          </div>
                          <Progress value={(challenge.day / challenge.totalDays) * 100} className="h-3 mb-4" />
                          <Button className="w-full bg-[#5A4CFF] hover:bg-[#4B3FE0]">
                            Continue Challenge
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* All Challenges */}
            <div>
              <h2 className="text-xl font-bold text-[#24234C] mb-4">All Challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {challengeData.map((challenge) => (
                  <Link key={challenge.id} href={`/challenge/${challenge.id}`}>
                    <Card className="border-[#E2E5E9] hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <div className="h-32 bg-gradient-to-br from-[#5A4CFF]/20 to-[#5A4CFF]/5 flex items-center justify-center">
                        <Trophy className="w-12 h-12 text-[#5A4CFF]/40" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-[#24234C] mb-2 line-clamp-2">{challenge.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-[#24234C]/60 mb-2">
                          <span>{challenge.totalDays} days</span>
                          <span>•</span>
                          <span>{challenge.difficulty}</span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-[#F0F2F5] text-[#24234C]/60 rounded">
                          {challenge.category}
                        </span>
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
          <div className="max-w-[800px] mx-auto text-center py-16">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#5A4CFF]/10 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-[#5A4CFF]" />
              </div>
              <h1 className="text-4xl font-bold text-[#24234C] mb-4">AI Tools</h1>
              <p className="text-2xl text-[#5A4CFF] font-semibold mb-4">Coming Soon</p>
              <p className="text-[#24234C]/60 max-w-md mx-auto">
                We're building powerful AI tools to help you work smarter. 
                Stay tuned for AI Writer, Image Generator, Code Assistant, and more!
              </p>
            </div>
            
            {/* Preview of upcoming tools */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {mockAITools.map((tool) => (
                <div key={tool.id} className="p-4 bg-white/50 border border-[#E2E5E9] rounded-xl opacity-60">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <p className="text-sm font-medium text-[#24234C]/60">{tool.name}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Button disabled className="bg-[#5A4CFF]/50 text-white cursor-not-allowed">
                Notify Me When Available
              </Button>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {currentTab === 'profile' && (
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-3xl font-bold text-[#24234C] mb-8">Profile</h1>
            
            {/* User Info Card */}
            <Card className="border-[#E2E5E9] mb-6">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-[#5A4CFF]/10 flex items-center justify-center">
                    <User className="w-10 h-10 text-[#5A4CFF]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#24234C]">{displayName}</h2>
                    <p className="text-[#24234C]/60">{user?.email}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-[#E2E5E9]">
                    <span className="text-[#24234C]/60">Member since</span>
                    <span className="font-medium text-[#24234C]">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Today'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#E2E5E9]">
                    <span className="text-[#24234C]/60">Courses enrolled</span>
                    <span className="font-medium text-[#24234C]">3</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#E2E5E9]">
                    <span className="text-[#24234C]/60">Lessons completed</span>
                    <span className="font-medium text-[#24234C]">21</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-[#24234C]/60">Total XP</span>
                    <span className="font-medium text-[#24234C]">1,250</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <button className="flex flex-col items-center gap-2 p-4 bg-white border border-[#E2E5E9] rounded-xl hover:shadow-md transition-shadow">
                <BookOpen className="w-6 h-6 text-[#5A4CFF]" />
                <span className="text-sm font-medium text-[#24234C]">Prompts Library</span>
                <span className="text-xs text-[#24234C]/40">Coming Soon</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-white border border-[#E2E5E9] rounded-xl hover:shadow-md transition-shadow">
                <HelpCircle className="w-6 h-6 text-[#5A4CFF]" />
                <span className="text-sm font-medium text-[#24234C]">Help</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-white border border-[#E2E5E9] rounded-xl hover:shadow-md transition-shadow">
                <Settings className="w-6 h-6 text-[#5A4CFF]" />
                <span className="text-sm font-medium text-[#24234C]">Settings</span>
              </button>
            </div>
            
            {/* Certificates Section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#24234C] mb-4">My Certificates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {certificateData.map((cert) => {
                  // Mock progress - in real app, this would come from user data
                  const mockProgress = cert.courseId === 'chatgpt' ? 13 : cert.courseId === 'ai-business' ? 30 : 0;
                  const isUnlocked = mockProgress >= 100;
                  
                  return (
                    <Card 
                      key={cert.id} 
                      className={`border-[#E2E5E9] overflow-hidden transition-all ${
                        isUnlocked ? 'hover:shadow-lg cursor-pointer' : 'opacity-70'
                      }`}
                    >
                      <div className={`h-24 flex items-center justify-center ${
                        isUnlocked 
                          ? 'bg-gradient-to-br from-amber-100 to-amber-50' 
                          : 'bg-gradient-to-br from-gray-100 to-gray-50'
                      }`}>
                        {isUnlocked ? (
                          <Trophy className="w-10 h-10 text-amber-500" />
                        ) : (
                          <Lock className="w-8 h-8 text-[#24234C]/30" />
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-[#24234C] mb-1 text-sm">{cert.title}</h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-[#24234C]/60">
                            {isUnlocked ? 'Completed' : `${mockProgress}% complete`}
                          </span>
                        </div>
                        <Progress value={mockProgress} className="h-1.5" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Developer Options Card - Only show if test mode is allowed */}
            {isTestModeAllowed && (
              <Card className="border-[#E2E5E9] border-dashed">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2 text-[#24234C]/70">
                    <Settings className="w-5 h-5" />
                    Developer Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <FlaskConical className="w-5 h-5 text-amber-500" />
                      <div>
                        <p className="font-medium text-[#24234C]">Test Mode</p>
                        <p className="text-xs text-[#24234C]/50">Enable testing features for development</p>
                      </div>
                    </div>
                    <button
                      onClick={toggleTestMode}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        isTestModeEnabled ? 'bg-amber-500' : 'bg-[#E2E5E9]'
                      }`}
                    >
                      <span
                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                          isTestModeEnabled ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  {isTestModeEnabled && (
                    <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <p className="text-sm text-amber-800">
                        <strong>Test Mode Active:</strong> Streaks won't reset, progress thresholds are lowered, and some features behave differently.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
