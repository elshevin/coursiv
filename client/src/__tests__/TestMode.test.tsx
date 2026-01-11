import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

// Test that VITE_ALLOW_TEST_MODE environment variable is set
describe('Test Mode Environment', () => {
  it('should have VITE_ALLOW_TEST_MODE environment variable set', () => {
    // This test verifies the environment variable is accessible
    const allowTestMode = import.meta.env.VITE_ALLOW_TEST_MODE;
    expect(allowTestMode).toBeDefined();
    expect(allowTestMode).toBe('true');
  });
});

// Mock the useEmailAuth hook
vi.mock('@/hooks/useEmailAuth', () => ({
  useEmailAuth: () => ({
    user: { id: 1, email: 'test@example.com', testModeEnabled: false },
    updateSettings: vi.fn().mockResolvedValue(undefined),
  }),
}));

// Import after mocking
import { TestModeProvider, useTestMode } from '@/contexts/TestModeContext';

// Test component to access context
function TestModeConsumer() {
  const { isTestModeEnabled, isTestModeAllowed, toggleTestMode } = useTestMode();
  return (
    <div>
      <span data-testid="allowed">{isTestModeAllowed ? 'allowed' : 'not-allowed'}</span>
      <span data-testid="enabled">{isTestModeEnabled ? 'enabled' : 'disabled'}</span>
      <button onClick={toggleTestMode}>Toggle</button>
    </div>
  );
}

describe('TestModeContext', () => {
  it('should allow test mode when VITE_ALLOW_TEST_MODE is true', () => {
    render(
      <TestModeProvider>
        <TestModeConsumer />
      </TestModeProvider>
    );
    
    expect(screen.getByTestId('allowed')).toHaveTextContent('allowed');
  });

  it('should start with test mode disabled', () => {
    render(
      <TestModeProvider>
        <TestModeConsumer />
      </TestModeProvider>
    );
    
    expect(screen.getByTestId('enabled')).toHaveTextContent('disabled');
  });

  it('should toggle test mode when button is clicked', async () => {
    render(
      <TestModeProvider>
        <TestModeConsumer />
      </TestModeProvider>
    );
    
    const toggleButton = screen.getByRole('button', { name: 'Toggle' });
    fireEvent.click(toggleButton);
    
    // After toggle, should be enabled
    expect(screen.getByTestId('enabled')).toHaveTextContent('enabled');
  });
});
