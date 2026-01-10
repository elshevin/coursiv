import React from 'react';
import { Button } from "@/components/ui/button";
import { useDemoAuth } from "@/hooks/useDemoAuth";
import { Link } from "wouter";
import { Loader2, LogOut, User } from "lucide-react";
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
    <div className="flex justify-between items-center px-6 py-4 lg:px-[60px] lg:py-6">
      <div className="flex items-center gap-2">
        <Link href="/">
          <img src="/2-332.svg" alt="Coursiv Logo" className="h-8 cursor-pointer" />
        </Link>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <Link href="/" className="hover:text-[#5A4CFF] transition-colors">Home</Link>
        <a href="#" className="hover:text-[#5A4CFF] transition-colors">Blog</a>
        <a href="#" className="hover:text-[#5A4CFF] transition-colors">Support Center</a>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium hidden sm:block">EN</span>
        
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
                {demoUser.username}
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
  );
}
