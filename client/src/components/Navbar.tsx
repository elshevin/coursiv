import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useDemoAuth } from "@/hooks/useDemoAuth";
import { Link } from "wouter";
import { Loader2, LogOut, User, Menu, X, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { trackLoginClick, trackStartQuizClick } from "@/lib/analytics";

interface NavbarProps {
  variant?: 'light' | 'dark';
}

export default function Navbar({ variant = 'light' }: NavbarProps) {
  const { demoUser, isLoading, isAuthenticated, login, logout, isLoggingIn, isLoggingOut } = useDemoAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-6 py-5 lg:px-[100px] xl:px-[147px] lg:py-6 max-w-[1400px] mx-auto">
        {/* Logo - 增大尺寸 */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.png" alt="Learnway" className="h-10 lg:h-12 w-auto cursor-pointer" />
          </Link>
        </div>
        
        {/* Desktop Navigation - Hidden as requested */}
        {/* <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#24234C]">
          <Link href="/" className="hover:text-[#5A4CFF] transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-[#5A4CFF] transition-colors">Blog</Link>
          <Link href="/support" className="hover:text-[#5A4CFF] transition-colors">Support Center</Link>
        </div> */}
        
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#24234C]" />
            ) : (
              <Menu className="w-5 h-5 text-[#24234C]" />
            )}
          </button>
          
          {/* Desktop Auth Buttons - Login and Start Now */}
          <div className="hidden lg:flex items-center gap-3">
            {isLoading ? (
              <Button disabled className="bg-[#5A4CFF] text-white rounded-full px-6 h-11">
                <Loader2 className="w-4 h-4 animate-spin" />
              </Button>
            ) : isAuthenticated && demoUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="rounded-full px-5 h-11 border-[#5A4CFF] text-[#5A4CFF] hover:bg-[#5A4CFF]/10"
                  >
                    <User className="w-4 h-4 mr-2" />
                    {demoUser.displayName || demoUser.username}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="text-red-600 cursor-pointer"
                  >
                    {isLoggingOut ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <LogOut className="w-4 h-4 mr-2" />
                    )}
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                {/* Login Button */}
                <Link href="/login" onClick={() => trackLoginClick()}>
                  <Button 
                    variant="ghost"
                    className="text-[#24234C] hover:text-[#5A4CFF] hover:bg-transparent text-sm font-medium h-11 px-5"
                  >
                    Login
                  </Button>
                </Link>
                {/* Start Now Button - Highlighted with arrow */}
                <Link href="/quiz" onClick={() => trackStartQuizClick('navbar')}>
                  <Button 
                    className="bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full px-6 h-11 text-sm font-medium flex items-center gap-1"
                  >
                    Start Now
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-[#E2E5E9] shadow-lg z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-4 gap-4">
            <div className="border-t border-[#E2E5E9] pt-4 mt-2">
              {isLoading ? (
                <Button disabled className="w-full bg-[#5A4CFF] text-white rounded-full h-11">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </Button>
              ) : isAuthenticated && demoUser ? (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 text-[#5A4CFF] font-medium">
                    <User className="w-4 h-4" />
                    {demoUser.displayName || demoUser.username}
                  </div>
                  <Link 
                    href="/dashboard" 
                    className="py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    disabled={isLoggingOut}
                    className="py-3 px-4 hover:bg-red-50 rounded-lg transition-colors text-red-600 text-left flex items-center gap-2"
                  >
                    {isLoggingOut ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <LogOut className="w-4 h-4" />
                    )}
                    Log out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/login" onClick={() => { trackLoginClick(); setMobileMenuOpen(false); }}>
                    <Button 
                      variant="outline"
                      className="w-full border-[#5A4CFF] text-[#5A4CFF] rounded-full h-11"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/quiz" onClick={() => { trackStartQuizClick('navbar_mobile'); setMobileMenuOpen(false); }}>
                    <Button 
                      className="w-full bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full h-11 font-medium flex items-center justify-center gap-1"
                    >
                      Start Now
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
