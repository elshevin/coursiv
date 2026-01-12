import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock wouter
vi.mock('wouter', () => ({
  useParams: () => ({ courseId: 'chatgpt', moduleId: 'chatgpt-1-quiz' }),
  useLocation: () => ['/course-quiz/chatgpt/chatgpt-1-quiz', vi.fn()],
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
import QuizContent from '../pages/QuizContent';

describe('QuizContent Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders quiz page with question', () => {
    render(<QuizContent />);
    
    // Should show the quiz question
    expect(screen.getByText('Which of these is the best ChatGPT prompt?')).toBeInTheDocument();
  });

  it('displays Quiz badge', () => {
    render(<QuizContent />);
    
    // Should show Quiz badge
    expect(screen.getByText('Quiz')).toBeInTheDocument();
  });

  it('shows all four options', () => {
    render(<QuizContent />);
    
    // Should show all 4 options
    expect(screen.getByText('Write something')).toBeInTheDocument();
    expect(screen.getByText(/Write a professional email/)).toBeInTheDocument();
    expect(screen.getByText('ChatGPT write')).toBeInTheDocument();
    expect(screen.getByText('Help me')).toBeInTheDocument();
  });

  it('has Check Answer button initially disabled', () => {
    render(<QuizContent />);
    
    // Check Answer button should be disabled when no option selected
    const checkButton = screen.getByText('Check Answer');
    expect(checkButton).toBeDisabled();
  });

  it('enables Check Answer button when option is selected', async () => {
    render(<QuizContent />);
    
    // Click an option
    const optionA = screen.getByText('Write something');
    fireEvent.click(optionA);
    
    // Check Answer button should be enabled
    const checkButton = screen.getByText('Check Answer');
    expect(checkButton).not.toBeDisabled();
  });

  it('shows correct feedback when correct answer is selected', async () => {
    render(<QuizContent />);
    
    // Select correct answer (B - Write a professional email)
    const correctOption = screen.getByText(/Write a professional email/);
    fireEvent.click(correctOption);
    
    // Click Check Answer
    const checkButton = screen.getByText('Check Answer');
    fireEvent.click(checkButton);
    
    // Should show Correct! feedback
    await waitFor(() => {
      expect(screen.getByText('Correct!')).toBeInTheDocument();
    });
  });

  it('shows incorrect feedback when wrong answer is selected', async () => {
    render(<QuizContent />);
    
    // Select wrong answer (A - Write something)
    const wrongOption = screen.getByText('Write something');
    fireEvent.click(wrongOption);
    
    // Click Check Answer
    const checkButton = screen.getByText('Check Answer');
    fireEvent.click(checkButton);
    
    // Should show Not quite! feedback
    await waitFor(() => {
      expect(screen.getByText('Not quite!')).toBeInTheDocument();
    });
  });

  it('shows Continue button after answering', async () => {
    render(<QuizContent />);
    
    // Select an option
    const option = screen.getByText('Write something');
    fireEvent.click(option);
    
    // Click Check Answer
    const checkButton = screen.getByText('Check Answer');
    fireEvent.click(checkButton);
    
    // Should show Continue button
    await waitFor(() => {
      expect(screen.getByText('Continue')).toBeInTheDocument();
    });
  });

  it('displays explanation after answering', async () => {
    render(<QuizContent />);
    
    // Select an option - the correct answer
    const option = screen.getByText(/Write a professional email to a client/);
    fireEvent.click(option);
    
    // Click Check Answer
    const checkButton = screen.getByText('Check Answer');
    fireEvent.click(checkButton);
    
    // Should show explanation
    await waitFor(() => {
      expect(screen.getByText(/The best prompts are specific/)).toBeInTheDocument();
    });
  });
});
