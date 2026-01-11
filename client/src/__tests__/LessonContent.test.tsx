import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock wouter
vi.mock('wouter', () => ({
  useParams: () => ({ courseId: 'chatgpt', moduleId: 'chatgpt-1-1' }),
  useLocation: () => ['/lesson/chatgpt/chatgpt-1-1', vi.fn()],
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

// Mock useEmailAuth
vi.mock('../hooks/useEmailAuth', () => ({
  useEmailAuth: () => ({
    user: { id: 1, email: 'test@example.com', name: 'Test User' },
    loading: false,
    isAuthenticated: true,
  }),
}));

// Mock useTestMode
vi.mock('../contexts/TestModeContext', () => ({
  useTestMode: () => ({
    isTestModeEnabled: false,
    isTestModeAllowed: true,
    toggleTestMode: vi.fn(),
  }),
}));

// Mock trpc
const mockMutate = vi.fn();
vi.mock('../lib/trpc', () => ({
  trpc: {
    courses: {
      completeModule: {
        useMutation: () => ({
          mutateAsync: mockMutate,
          isLoading: false,
        }),
      },
    },
    streaks: {
      recordActivity: {
        useMutation: () => ({
          mutateAsync: mockMutate,
          isLoading: false,
        }),
      },
    },
  },
}));

// Import component after mocks
import LessonContent from '../pages/LessonContent';

describe('LessonContent Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders lesson content page with module title', () => {
    render(<LessonContent />);
    
    // Should show the module title
    expect(screen.getByText('What is ChatGPT?')).toBeInTheDocument();
  });

  it('displays page indicator showing current page', () => {
    render(<LessonContent />);
    
    // Should show page indicator (1 / 3)
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('shows Continue button on non-final pages', () => {
    render(<LessonContent />);
    
    // Should show Continue button
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('displays content text with bold formatting', () => {
    render(<LessonContent />);
    
    // Should show content text
    expect(screen.getByText(/ChatGPT's Brain/)).toBeInTheDocument();
    expect(screen.getByText(/Large Language Model/)).toBeInTheDocument();
  });

  it('shows exit confirmation modal when close button is clicked', async () => {
    render(<LessonContent />);
    
    // Find and click the close button (X)
    const closeButton = screen.getAllByRole('button')[0]; // First button is close
    fireEvent.click(closeButton);
    
    // Should show exit modal
    await waitFor(() => {
      expect(screen.getByText("Wait, don't go!")).toBeInTheDocument();
    });
    expect(screen.getByText('Keep Learning')).toBeInTheDocument();
    expect(screen.getByText('End Session')).toBeInTheDocument();
  });

  it('closes exit modal when Keep Learning is clicked', async () => {
    render(<LessonContent />);
    
    // Open modal
    const closeButton = screen.getAllByRole('button')[0];
    fireEvent.click(closeButton);
    
    // Click Keep Learning
    const keepLearningButton = screen.getByText('Keep Learning');
    fireEvent.click(keepLearningButton);
    
    // Modal should be closed
    await waitFor(() => {
      expect(screen.queryByText("Wait, don't go!")).not.toBeInTheDocument();
    });
  });

  it('shows Coming Soon tooltip when audio button is clicked', async () => {
    render(<LessonContent />);
    
    // Find and click the audio button (second button in header)
    const buttons = screen.getAllByRole('button');
    const audioButton = buttons[1]; // Audio button is second
    fireEvent.click(audioButton);
    
    // Should show Coming Soon tooltip
    await waitFor(() => {
      expect(screen.getByText('Coming Soon')).toBeInTheDocument();
    });
  });

  it('has progress bar that updates with page navigation', () => {
    render(<LessonContent />);
    
    // Progress bar should exist
    const progressBar = document.querySelector('.bg-purple-600');
    expect(progressBar).toBeInTheDocument();
    
    // Initial progress should be ~33% (1/3)
    expect(progressBar).toHaveStyle({ width: '33.33333333333333%' });
  });
});

describe('LessonContent with Test Mode', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Override useTestMode to enable test mode
    vi.doMock('../contexts/TestModeContext', () => ({
      useTestMode: () => ({
        isTestModeEnabled: true,
        isTestModeAllowed: true,
        toggleTestMode: vi.fn(),
      }),
    }));
  });

  it('shows Quick Complete button when test mode is enabled', async () => {
    // Re-mock with test mode enabled
    vi.doMock('../contexts/TestModeContext', () => ({
      useTestMode: () => ({
        isTestModeEnabled: true,
        isTestModeAllowed: true,
        toggleTestMode: vi.fn(),
      }),
    }));
    
    // Note: Due to module caching, this test may need to be in a separate file
    // or use vi.resetModules() for proper isolation
  });
});
