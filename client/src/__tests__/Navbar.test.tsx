import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

// Mock the useDemoAuth hook
vi.mock('@/hooks/useDemoAuth', () => ({
  useDemoAuth: () => ({
    demoUser: null,
    isLoading: false,
    isAuthenticated: false,
    login: vi.fn(),
    logout: vi.fn(),
    isLoggingIn: false,
    isLoggingOut: false,
  }),
}));

// Mock wouter
vi.mock('wouter', () => ({
  Link: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe('Navbar Component', () => {
  it('renders logo', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('Coursiv Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Support Center')).toBeInTheDocument();
  });

  it('renders login button when not authenticated', () => {
    render(<Navbar />);
    const loginButtons = screen.getAllByText('Log in');
    expect(loginButtons.length).toBeGreaterThan(0);
  });

  it('renders mobile menu button', () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText('Toggle mobile menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText('Toggle mobile menu');
    
    // Initially mobile menu should not be visible (no duplicate Home links in mobile menu)
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBe(1); // Only desktop link
    
    // Click to open mobile menu
    fireEvent.click(menuButton);
    
    // Now there should be 2 Home links (desktop + mobile)
    const homeLinkAfterOpen = screen.getAllByText('Home');
    expect(homeLinkAfterOpen.length).toBe(2);
  });

  it('closes mobile menu when a link is clicked', () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText('Toggle mobile menu');
    
    // Open mobile menu
    fireEvent.click(menuButton);
    
    // Click on a mobile menu link
    const mobileHomeLinks = screen.getAllByText('Home');
    fireEvent.click(mobileHomeLinks[1]); // Click the mobile menu link
    
    // Mobile menu should be closed (only 1 Home link visible)
    const homeLinksAfterClose = screen.getAllByText('Home');
    expect(homeLinksAfterClose.length).toBe(1);
  });
});
