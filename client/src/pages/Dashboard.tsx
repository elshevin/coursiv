import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useParams, Link, useLocation } from "wouter";
import { useDemoAuth } from "@/hooks/useDemoAuth";
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
  Zap
} from "lucide-react";

// Mock data for dashboard
const mockCourses = [
  { id: 1, title: 'ChatGPT Mastery', progress: 65, totalLessons: 24, completedLessons: 16, image: '/2-323.webp' },
  { id: 2, title: 'AI for Business', progress: 30, totalLessons: 18, completedLessons: 5, image: '/2-2458.webp' },
  { id: 3, title: 'Prompt Engineering', progress: 0, totalLessons: 12, completedLessons: 0, image: '/2-323.webp' },
];

const mockChallenges = [
  { id: 1, title: '28-Day AI Challenge', day: 12, totalDays: 28, streak: 5 },
  { id: 2, title: 'Prompt Master Challenge', day: 3, totalDays: 7, streak: 3 },
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
  const { demoUser, logout, isAuthenticated, isLoading } = useDemoAuth();
  const currentTab = params.tab || 'home';

  const handleLogout = async () => {
    await logout();
    setLocation('/');
  };

  // Redirect to login if not authenticated
  if (!isLoading && !isAuthenticated) {
    setLocation('/');
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
              <p className="font-medium text-[#24234C] truncate">{demoUser?.username}</p>
              <p className="text-xs text-[#24234C]/50">Demo User</p>
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
                Welcome back, {demoUser?.username?.split('_')[1] || 'Learner'}! 👋
              </h1>
              <p className="text-[#24234C]/60">Continue your AI learning journey</p>
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
                      <span>•</span>
                      <Star className="w-4 h-4 text-amber-400" />
                      <span>4.9</span>
                    </div>
                    <Progress value={course.progress} className="h-2 mb-3" />
                    <p className="text-sm text-[#24234C]/60">{course.progress}% complete</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {currentTab === 'challenges' && (
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl font-bold text-[#24234C] mb-8">Challenges</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockChallenges.map((challenge) => (
                <Card key={challenge.id} className="border-[#E2E5E9]">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-xl text-[#24234C] mb-1">{challenge.title}</h3>
                        <p className="text-[#24234C]/60">Complete daily tasks to build your AI skills</p>
                      </div>
                      <div className="flex items-center gap-1 px-3 py-1 bg-amber-100 rounded-full text-amber-600">
                        <Flame className="w-4 h-4" />
                        <span className="text-sm font-medium">{challenge.streak} day streak</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-[#24234C]/60">Progress</span>
                        <span className="font-medium text-[#24234C]">Day {challenge.day}/{challenge.totalDays}</span>
                      </div>
                      <Progress value={(challenge.day / challenge.totalDays) * 100} className="h-3" />
                    </div>
                    <Button className="w-full bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-xl">
                      Continue Challenge
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* AI Tools Tab */}
        {currentTab === 'ai-tools' && (
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl font-bold text-[#24234C] mb-8">AI Tools</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockAITools.map((tool) => (
                <Card key={tool.id} className="border-[#E2E5E9] hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{tool.icon}</div>
                    <h3 className="font-semibold text-lg text-[#24234C] mb-2">{tool.name}</h3>
                    <p className="text-sm text-[#24234C]/60">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {currentTab === 'profile' && (
          <div className="max-w-[600px] mx-auto">
            <h1 className="text-3xl font-bold text-[#24234C] mb-8">Profile</h1>
            <Card className="border-[#E2E5E9]">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-[#5A4CFF]/10 flex items-center justify-center">
                    <User className="w-10 h-10 text-[#5A4CFF]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#24234C]">{demoUser?.username}</h2>
                    <p className="text-[#24234C]/60">Demo Account</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-[#E2E5E9]">
                    <span className="text-[#24234C]/60">Member since</span>
                    <span className="font-medium text-[#24234C]">
                      {demoUser?.createdAt ? new Date(demoUser.createdAt).toLocaleDateString() : 'Today'}
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
                
                <div className="mt-8 pt-6 border-t border-[#E2E5E9]">
                  <p className="text-sm text-[#24234C]/40 text-center">
                    This is a demo account. Data will be reset periodically.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
