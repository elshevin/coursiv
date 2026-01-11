import React from 'react';
import { useTestMode } from '@/contexts/TestModeContext';
import { FlaskConical, X } from 'lucide-react';

export function TestModeBanner() {
  const { isTestModeEnabled, isTestModeAllowed, toggleTestMode } = useTestMode();

  if (!isTestModeAllowed || !isTestModeEnabled) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-amber-500 text-amber-950 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FlaskConical className="w-4 h-4" />
          <span className="text-sm font-medium">
            Test Mode Enabled - Some features behave differently for testing
          </span>
        </div>
        <button
          onClick={toggleTestMode}
          className="p-1 hover:bg-amber-600 rounded transition-colors"
          aria-label="Disable test mode"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
