import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useEmailAuth } from '@/hooks/useEmailAuth';

interface TestModeContextType {
  isTestModeEnabled: boolean;
  isTestModeAllowed: boolean;
  toggleTestMode: () => void;
}

const TestModeContext = createContext<TestModeContextType | undefined>(undefined);

// Check if test mode is allowed via environment variable
const isTestModeAllowed = import.meta.env.VITE_ALLOW_TEST_MODE === 'true';

export function TestModeProvider({ children }: { children: ReactNode }) {
  const { user, updateSettings } = useEmailAuth();
  const [isTestModeEnabled, setIsTestModeEnabled] = useState(false);

  // Sync with user settings from database
  useEffect(() => {
    if (user?.testModeEnabled !== undefined && user?.testModeEnabled !== null) {
      setIsTestModeEnabled(user.testModeEnabled);
    }
  }, [user?.testModeEnabled]);

  const toggleTestMode = async () => {
    if (!isTestModeAllowed) return;
    
    const newValue = !isTestModeEnabled;
    setIsTestModeEnabled(newValue);
    
    // Persist to database if user is logged in
    if (user) {
      try {
        await updateSettings({ testModeEnabled: newValue });
      } catch (error) {
        console.error('Failed to save test mode setting:', error);
        // Revert on error
        setIsTestModeEnabled(!newValue);
      }
    }
  };

  return (
    <TestModeContext.Provider value={{ isTestModeEnabled, isTestModeAllowed, toggleTestMode }}>
      {children}
    </TestModeContext.Provider>
  );
}

export function useTestMode() {
  const context = useContext(TestModeContext);
  if (context === undefined) {
    throw new Error('useTestMode must be used within a TestModeProvider');
  }
  return context;
}
