import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useDemoAuth } from "@/hooks/useDemoAuth";
import { Link } from "wouter";
import { Loader2, LogOut, User, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      <div className="flex justify-between items-center px-4 py-4 lg:px-[60px] lg:py-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img src="/2-332.svg" alt="Coursiv Logo" className="h-8 cursor-pointer" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#5A4CFF] transition-colors">Home</Link>
          <a href="#" className="hover:text-[#5A4CFF] transition-colors">Blog</a>
          <a href="#" className="hover:text-[#5A4CFF] transition-colors">Support Center</a>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium hidden sm:block">EN</span>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#24234C]" />
            ) : (
              <Menu className="w-6 h-6 text-[#24234C]" />
            )}
          </button>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden lg:block">
            {isLoading ? (
              <Button disabled className="bg-[#5A4CFF] text-white rounded-full px-6">
                <Loader2 className="w-4 h-4 animate-spin" />
              </Button>
            ) : isAuthenticated && demoUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="rounded-full px-4 border-[#5A4CFF] text-[#5A4CFF] hover:bg-[#5A4CFF]/10"
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
              <Button 
                onClick={handleLogin}
                disabled={isLoggingIn}
                className="bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full px-6"
              >
                {isLoggingIn ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : null}
                Log in
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-[#E2E5E9] shadow-lg z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-4 gap-4">
            <Link 
              href="/" 
              className="py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#" 
              className="py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="#" 
              className="py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support Center
            </a>
            
            <div className="border-t border-[#E2E5E9] pt-4 mt-2">
              {isLoading ? (
                <Button disabled className="w-full bg-[#5A4CFF] text-white rounded-full">
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
                <Button 
                  onClick={() => {
                    handleLogin();
                    setMobileMenuOpen(false);
                  }}
                  disabled={isLoggingIn}
                  className="w-full bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full"
                >
                  {isLoggingIn ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : null}
                  Log in
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
