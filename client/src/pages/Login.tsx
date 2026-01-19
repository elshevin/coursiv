import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { useEmailAuth } from "@/hooks/useEmailAuth";

export default function Login() {
  const [, setLocation] = useLocation();
  const { login, isLoading: authLoading } = useEmailAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      console.log('[Login] Starting login...');
      const result = await login(email, password);
      console.log('[Login] Login successful:', result);
      console.log('[Login] Redirecting to /dashboard...');
      setLocation('/dashboard');
      console.log('[Login] setLocation called');
    } catch (err: any) {
      console.error('[Login] Login error:', err);
      setError(err.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-[#E2E5E9] px-4 py-4">
        <div className="max-w-[800px] mx-auto flex items-center justify-center">
          <a href="/">
            <img src="/2-332.svg" alt="Coursiv" className="h-6" />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[400px]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#24234C] mb-2">
              Welcome back
            </h1>
            <p className="text-[#24234C]/60">
              Sign in to continue your learning journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-[#24234C] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-12 px-4 rounded-xl border-2 border-[#E2E5E9] focus:border-[#5A4CFF] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#24234C] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-12 px-4 pr-12 rounded-xl border-2 border-[#E2E5E9] focus:border-[#5A4CFF] focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#24234C]/40 hover:text-[#24234C]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <a href="/forgot-password" className="text-sm text-[#5A4CFF] hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full h-12 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-xl font-medium disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#24234C]/60">
              Don't have an account?{' '}
              <a href="/quiz/1" className="text-[#5A4CFF] hover:underline font-medium">
                Start the quiz
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
