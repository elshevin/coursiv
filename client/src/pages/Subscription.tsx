import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Check, X, Clock, Star, Shield, Sparkles, BookOpen, Award, Rocket, Loader2 } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";

// Declare FastSpring global
declare global {
  interface Window {
    fastspring: {
      builder: {
        reset: () => void;
        add: (productPath: string) => void;
        checkout: () => void;
      };
    };
  }
}

export default function Subscription() {
  const [, setLocation] = useLocation();
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 59 });
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');
  const { user, loading, isAuthenticated } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      // Save current path to redirect back after login
      sessionStorage.setItem('redirectAfterLogin', '/subscription');
      setLocation('/login');
    }
  }, [loading, isAuthenticated, setLocation]);

  // Countdown timer - moved before conditional returns
  useEffect(() => {
    if (!isAuthenticated) return; // Don't run if not authenticated
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAuthenticated]);

  // Load FastSpring script - moved before conditional returns
  useEffect(() => {
    if (!isAuthenticated) return; // Don't run if not authenticated
    
    // Define callback for successful purchase
    (window as any).fastspringOnPopupClosed = (orderReference: any) => {
      if (orderReference && orderReference.id) {
        // Payment successful, redirect to dashboard
        setLocation('/dashboard');
      }
    };

    const script = document.createElement('script');
    script.id = 'fsc-api';
    script.src = 'https://sbl.onfastspring.com/sbl/1.0.6/fastspring-builder.min.js';
    script.type = 'text/javascript';
    script.setAttribute('data-storefront', import.meta.env.VITE_FASTSPRING_STOREFRONT || 'aichecker.onfastspring.com/popup-aicourse');
    script.setAttribute('data-popup-closed', 'fastspringOnPopupClosed');
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('fsc-api');
      if (existingScript) {
        existingScript.remove();
      }
      delete (window as any).fastspringOnPopupClosed;
    };
  }, [setLocation, isAuthenticated]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-[#5A4CFF]" />
      </div>
    );
  }

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  const handleSkip = () => {
    setLocation('/dashboard');
  };

  const handleSubscribe = (plan: 'monthly' | 'yearly') => {
    // Trigger FastSpring checkout
    if (window.fastspring && window.fastspring.builder) {
      window.fastspring.builder.reset();
      window.fastspring.builder.add(plan);
      window.fastspring.builder.checkout();
    } else {
      console.error('FastSpring not loaded');
    }
  };

  const monthlyFeatures = [
    { text: 'Unlimited access to all courses', included: true },
    { text: 'Learning certificates', included: true },
    { text: 'Progress tracking', included: true },
    { text: 'AI Learning Assistant', included: false, comingSoon: true },
    { text: 'Priority access to new courses', included: false },
  ];

  const yearlyFeatures = [
    { text: 'Unlimited access to all courses', included: true },
    { text: 'Learning certificates', included: true },
    { text: 'Progress tracking', included: true },
    { text: 'AI Learning Assistant', included: true, comingSoon: true },
    { text: 'Priority access to new courses', included: true },
  ];

  const getCardClass = (plan: 'monthly' | 'yearly', isYearly: boolean = false) => {
    const base = "border-2 cursor-pointer transition-all";
    const extra = isYearly ? " relative overflow-hidden" : "";
    const selected = selectedPlan === plan 
      ? " border-[#5A4CFF] shadow-lg" 
      : " border-gray-200 hover:border-gray-300";
    return base + extra + selected;
  };

  const getRadioClass = (plan: 'monthly' | 'yearly') => {
    const base = "w-5 h-5 rounded-full border-2 flex items-center justify-center";
    return selectedPlan === plan 
      ? base + " border-[#5A4CFF] bg-[#5A4CFF]" 
      : base + " border-gray-300";
  };

  const getButtonClass = (plan: 'monthly' | 'yearly', isMonthly: boolean = false) => {
    const base = "w-full h-12 rounded-xl font-medium";
    if (isMonthly) {
      return selectedPlan === plan 
        ? base + " bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white" 
        : base + " border-gray-300 text-gray-700 hover:bg-gray-50";
    }
    return selectedPlan === plan 
      ? base + " bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white" 
      : base + " bg-gray-100 text-gray-700 hover:bg-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header with countdown */}
      <header className="w-full px-4 py-4 border-b border-[#E2E5E9] bg-white sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Coursiv" className="h-8" />
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4 text-red-500" />
              <span>Discount expires in</span>
              <span className="font-bold text-[#24234C] text-lg">
                {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            className="bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white border-none rounded-full px-6"
            onClick={() => handleSubscribe(selectedPlan)}
          >
            GET MY PLAN
          </Button>
        </div>
      </header>

      {/* Mobile countdown */}
      <div className="sm:hidden bg-red-50 py-2 px-4 flex items-center justify-center gap-2">
        <Clock className="w-4 h-4 text-red-500" />
        <span className="text-sm text-gray-600">Discount expires in</span>
        <span className="font-bold text-[#24234C]">
          {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>

      {/* Main Content */}
      <main className="max-w-[900px] mx-auto px-4 py-8">
        
        {/* Now vs Goal Section - Professional Design */}
        <div className="mb-12">
          <Card className="border-[#E2E5E9] overflow-hidden shadow-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 divide-x divide-[#E2E5E9]">
                {/* Now Column */}
                <div className="p-6 md:p-8">
                  <h3 className="text-center text-lg font-semibold text-gray-400 mb-6">Now</h3>
                  
                  {/* Professional Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="relative w-28 h-28 md:w-32 md:h-32">
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-inner">
                        <svg className="w-14 h-14 md:w-16 md:h-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                          <path d="M9 8.5c0 0 0.5-1 1.5-1s1.5 1 1.5 1" strokeLinecap="round" />
                          <path d="M14 8.5c0 0 0.5-1 1.5-1" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Skills - Now */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-[#24234C] mb-3">AI skills</p>
                    <div className="relative h-2.5 bg-gray-100 rounded-full overflow-visible">
                      <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-full transition-all" style={{ width: '35%' }}></div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-amber-400 rounded-full shadow-md flex items-center justify-center" style={{ left: 'calc(35% - 10px)' }}>
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-center">
                      <span className="px-4 py-1.5 bg-[#24234C] text-white text-xs font-medium rounded-full">Moderate</span>
                    </div>
                  </div>

                  {/* Practical Readiness - Now */}
                  <div>
                    <p className="text-sm font-medium text-[#24234C] mb-3">Practical Readiness</p>
                    <div className="relative h-2.5 bg-gray-100 rounded-full overflow-visible">
                      <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all" style={{ width: '30%' }}></div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-500 rounded-full shadow-md flex items-center justify-center" style={{ left: 'calc(30% - 10px)' }}>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-3 text-center">Limited</p>
                  </div>
                </div>

                {/* Goal Column */}
                <div className="p-6 md:p-8 bg-gradient-to-br from-emerald-50/50 to-white relative">
                  <h3 className="text-center text-lg font-semibold text-[#24234C] mb-6">Goal</h3>
                  
                  {/* Professional Icon with Badges */}
                  <div className="flex justify-center mb-8">
                    <div className="relative w-28 h-28 md:w-32 md:h-32">
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                        <svg className="w-14 h-14 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                          <path d="M9 7.5c0 0 0.5 1 1.5 1s1.5-1 1.5-1" strokeLinecap="round" />
                        </svg>
                      </div>
                      {/* Floating badges */}
                      <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">+45%</div>
                      <div className="absolute -bottom-1 -right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">+72%</div>
                      <div className="absolute bottom-2 -left-3 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">+35%</div>
                    </div>
                  </div>
                  
                  {/* AI Skills - Goal */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-[#24234C] mb-3">AI skills</p>
                    <div className="relative h-2.5 bg-gray-100 rounded-full overflow-visible">
                      <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-400 via-amber-400 to-emerald-400 rounded-full transition-all" style={{ width: '80%' }}></div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-emerald-500 rounded-full shadow-md flex items-center justify-center" style={{ left: 'calc(80% - 10px)' }}>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-center">
                      <span className="px-4 py-1.5 bg-[#24234C] text-white text-xs font-medium rounded-full">High</span>
                    </div>
                  </div>

                  {/* Practical Readiness - Goal */}
                  <div>
                    <p className="text-sm font-medium text-[#24234C] mb-3">Practical Readiness</p>
                    <div className="relative h-2.5 bg-gray-100 rounded-full overflow-visible">
                      <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-full transition-all" style={{ width: '85%' }}></div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-purple-500 rounded-full shadow-md flex items-center justify-center" style={{ left: 'calc(85% - 10px)' }}>
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-sm text-emerald-600 font-medium mt-3 text-center">High</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-xs text-gray-400 text-center mt-3">This is not a guarantee or promise of results.</p>
        </div>

        {/* Your readiness section */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-[#24234C] mb-2">
            Your readiness: <span className="text-emerald-500">83%</span>
          </h2>
          <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
            <span className="text-[#5A4CFF] font-semibold">4-week</span>
            <span className="text-gray-600">program is enough for you to start your AI journey</span>
            <span className="text-xl">💡</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Yearly Plan */}
          <Card 
            className={getCardClass('yearly', true)}
            onClick={() => setSelectedPlan('yearly')}
          >
            {/* Best Value Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#5A4CFF] to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              BEST VALUE - SAVE 50%
            </div>
            
            <CardContent className="p-6 pt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={getRadioClass('yearly')}>
                  {selectedPlan === 'yearly' && <Check className="w-3 h-3 text-white" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#24234C]">Yearly Plan</h3>
                  <p className="text-sm text-gray-500">Best for committed learners</p>
                </div>
              </div>

              {/* Free Trial Badge */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium text-sm">7-Day Free Trial Included</span>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#24234C]">$0.16</span>
                  <span className="text-gray-500">/day</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">$59.99 billed annually</p>
                <p className="text-xs text-gray-400 line-through">$119.88/year</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {yearlyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                      {feature.text}
                      {feature.comingSoon && <span className="ml-2 text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">Coming Soon</span>}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={getButtonClass('yearly')}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSubscribe('yearly');
                }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Start 7-Day Free Trial
              </Button>
            </CardContent>
          </Card>

          {/* Monthly Plan */}
          <Card 
            className={getCardClass('monthly')}
            onClick={() => setSelectedPlan('monthly')}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={getRadioClass('monthly')}>
                  {selectedPlan === 'monthly' && <Check className="w-3 h-3 text-white" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#24234C]">Monthly Plan</h3>
                  <p className="text-sm text-gray-500">Flexible month-to-month</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6 mt-[52px]">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#24234C]">$0.33</span>
                  <span className="text-gray-500">/day</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">$9.99 billed monthly</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {monthlyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                      {feature.text}
                      {feature.comingSoon && <span className="ml-2 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Coming Soon</span>}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className={getButtonClass('monthly', true)}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSubscribe('monthly');
                }}
              >
                Start Monthly Plan
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="text-center p-4 bg-white rounded-xl border border-[#E2E5E9]">
            <Shield className="w-8 h-8 text-[#5A4CFF] mx-auto mb-2" />
            <p className="text-sm font-medium text-[#24234C]">30-Day Money Back</p>
            <p className="text-xs text-gray-500">No questions asked</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-[#E2E5E9]">
            <BookOpen className="w-8 h-8 text-[#5A4CFF] mx-auto mb-2" />
            <p className="text-sm font-medium text-[#24234C]">16+ Courses</p>
            <p className="text-xs text-gray-500">Updated regularly</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-[#E2E5E9]">
            <Award className="w-8 h-8 text-[#5A4CFF] mx-auto mb-2" />
            <p className="text-sm font-medium text-[#24234C]">Certificates</p>
            <p className="text-xs text-gray-500">Share your progress</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-[#24234C] text-center mb-6">What our learners say</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-[#E2E5E9]">
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-3">"The AI courses completely changed how I work. I'm now 3x more productive with ChatGPT!"</p>
                <p className="text-xs text-gray-500">— Sarah M., Marketing Manager</p>
              </CardContent>
            </Card>
            <Card className="border-[#E2E5E9]">
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-3">"Best investment in my career. The practical exercises made everything click."</p>
                <p className="text-xs text-gray-500">— James K., Software Developer</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skip option */}
        <div className="text-center">
          <button
            onClick={handleSkip}
            className="text-gray-400 hover:text-gray-600 text-sm underline"
          >
            Skip for now
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E2E5E9] py-6 mt-12">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">© 2025 Coursiv Limited. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="/privacy-policy" className="text-xs text-gray-400 hover:text-gray-600">Privacy Policy</a>
              <a href="/terms" className="text-xs text-gray-400 hover:text-gray-600">Terms</a>
              <a href="/subscription-terms" className="text-xs text-gray-400 hover:text-gray-600">Subscription Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
