import { useState } from 'react';
import { TopNavbar } from '@/components/TopNavbar';
import { useTheme } from '@/contexts/ThemeContext';
import { useEmailAuth } from '@/hooks/useEmailAuth';
import { 
  User, 
  Bell, 
  Shield, 
  Moon, 
  Sun, 
  Globe, 
  ChevronRight,
  Mail,
  Smartphone,
  Lock,
  Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useEmailAuth();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: false,
  });

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-gray-900">
      <TopNavbar />
      
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#24234C] dark:text-white mb-8">Settings</h1>

        {/* Account Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 mb-6 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-[#24234C] dark:text-white flex items-center gap-2">
              <User className="w-5 h-5" />
              Account
            </h2>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-[#24234C] dark:text-white">Email</p>
                  <p className="text-sm text-gray-500">{user?.email || 'Not set'}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-[#24234C] dark:text-white">Password</p>
                  <p className="text-sm text-gray-500">••••••••</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Change</Button>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 mb-6 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-[#24234C] dark:text-white flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </h2>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-[#24234C] dark:text-white">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive updates via email</p>
                </div>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, email: !prev.email }))}
                className={`relative w-12 h-6 rounded-full transition-colors ${notifications.email ? 'bg-[#5A4CFF]' : 'bg-gray-300'}`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${notifications.email ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
            
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-[#24234C] dark:text-white">Push Notifications</p>
                  <p className="text-sm text-gray-500">Receive push notifications</p>
                </div>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, push: !prev.push }))}
                className={`relative w-12 h-6 rounded-full transition-colors ${notifications.push ? 'bg-[#5A4CFF]' : 'bg-gray-300'}`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${notifications.push ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
            
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-[#24234C] dark:text-white">Marketing Emails</p>
                  <p className="text-sm text-gray-500">Receive promotional content</p>
                </div>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, marketing: !prev.marketing }))}
                className={`relative w-12 h-6 rounded-full transition-colors ${notifications.marketing ? 'bg-[#5A4CFF]' : 'bg-gray-300'}`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${notifications.marketing ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Appearance Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 mb-6 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-[#24234C] dark:text-white flex items-center gap-2">
              {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              Appearance
            </h2>
          </div>
          
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? (
                <Moon className="w-5 h-5 text-gray-400" />
              ) : (
                <Sun className="w-5 h-5 text-gray-400" />
              )}
              <div>
                <p className="font-medium text-[#24234C] dark:text-white">Dark Mode</p>
                <p className="text-sm text-gray-500">{theme === 'dark' ? 'On' : 'Off'}</p>
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

        {/* Privacy Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 mb-6 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-[#24234C] dark:text-white flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Privacy & Security
            </h2>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <p className="font-medium text-[#24234C] dark:text-white">Privacy Policy</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <p className="font-medium text-[#24234C] dark:text-white">Terms of Service</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-red-200 dark:border-red-900 overflow-hidden">
          <div className="px-6 py-4 border-b border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20">
            <h2 className="font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
              <Trash2 className="w-5 h-5" />
              Danger Zone
            </h2>
          </div>
          
          <div className="px-6 py-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <Button variant="destructive" className="w-full">
              Delete Account
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
