import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Home, 
  BookOpen, 
  Trophy, 
  Sparkles, 
  User, 
  Flame,
  Menu,
  X
} from "lucide-react";
import { StreakDetailModal } from "./StreakDetailModal";

interface TopNavbarProps {
  currentStreak?: number;
  longestStreak?: number;
  streakDays?: boolean[];
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home, path: '/dashboard' },
  { id: 'guides', label: 'Guides', icon: BookOpen, path: '/dashboard/guides' },
  { id: 'challenges', label: 'Challenges', icon: Trophy, path: '/dashboard/challenges' },
  { id: 'ai-tools', label: 'AI Tools', icon: Sparkles, path: '/dashboard/ai-tools' },
];

export function TopNavbar({ 
  currentStreak = 5, 
  longestStreak = 12,
  streakDays = [true, true, true, true, true, false, false]
}: TopNavbarProps) {
  const [location] = useLocation();
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentTab = location.split('/')[2] || 'home';

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-30" data-testid="top-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img src="/2-332.svg" alt="Coursiv" className="h-8 cursor-pointer" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id || (currentTab === '' && item.id === 'home');
                return (
                  <Link key={item.id} href={item.path}>
                    <a
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                        ${isActive 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }
                      `}
                      data-testid={`nav-${item.id}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </a>
                  </Link>
                );
              })}
            </div>

            {/* Right side items */}
            <div className="flex items-center gap-3">
              {/* Streak Icon */}
              <button
                onClick={() => setIsStreakModalOpen(true)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors"
                data-testid="nav-streak-icon"
              >
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-orange-500">{currentStreak}</span>
              </button>

              {/* Profile */}
              <Link href="/dashboard/profile">
                <a
                  className={`
                    p-2 rounded-lg transition-colors
                    ${currentTab === 'profile' 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                    }
                  `}
                  data-testid="nav-profile"
                >
                  <User className="w-5 h-5" />
                </a>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <Link key={item.id} href={item.path}>
                    <a
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                        ${isActive 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'text-gray-600 hover:bg-gray-100'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Streak Detail Modal */}
      <StreakDetailModal
        isOpen={isStreakModalOpen}
        onClose={() => setIsStreakModalOpen(false)}
        currentStreak={currentStreak}
        longestStreak={longestStreak}
        streakDays={streakDays}
      />
    </>
  );
}

export default TopNavbar;
