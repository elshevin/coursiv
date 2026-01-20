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

  // Countdown timer
  useEffect(() => {
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
  }, []);

  // Load FastSpring script
  useEffect(() => {
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
  }, [setLocation]);

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
            <img src="/2-332.svg" alt="Coursiv" className="h-8" />
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
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shadow-inner">
                        <svg className="w-14 h-14 md:w-16 md:h-16 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                          <path d="M15 2l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M19 4h-4" strokeLinecap="round" />
                        </svg>
                      </div>
                      {/* Improvement Badges */}
                      <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">+45%</div>
                      <div className="absolute top-8 -right-4 md:-right-6 bg-emerald-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full shadow-lg">+72%</div>
                      <div className="absolute bottom-2 -right-2 bg-emerald-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full shadow-lg">+35%</div>
                    </div>
                  </div>
                  
                  {/* AI Skills - Goal */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-[#24234C] mb-3">AI skills</p>
                    <div className="relative h-2.5 bg-gray-100 rounded-full overflow-visible">
                      <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-400 via-amber-400 to-emerald-500 rounded-full transition-all" style={{ width: '85%' }}></div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-emerald-500 rounded-full shadow-md flex items-center justify-center" style={{ left: 'calc(85% - 10px)' }}>
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
                      <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all" style={{ width: '80%' }}></div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-600 rounded-full shadow-md flex items-center justify-center" style={{ left: 'calc(80% - 10px)' }}>
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-sm text-emerald-600 font-semibold mt-3 text-center">High</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-xs text-gray-400 mt-3">This is not a guarantee or promise of results.</p>
        </div>

        {/* Readiness Score */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#24234C]">
            Your readiness: <span className="text-[#5A4CFF]">83%</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3 text-gray-600">
            <span className="text-[#5A4CFF] font-semibold">4-week</span>
            <span>program is enough for you to start your AI journey</span>
            <span className="text-xl">💡</span>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#24234C] text-center mb-8">
            Choose Your Plan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Monthly Plan */}
            <Card 
              className={getCardClass('monthly')}
              onClick={() => setSelectedPlan('monthly')}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#24234C]">Monthly</h3>
                  <div className={getRadioClass('monthly')}>
                    {selectedPlan === 'monthly' && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#24234C]">$0.33</span>
                    <span className="text-gray-500">/day</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">$9.99 billed monthly</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {monthlyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-gray-400" />
                        </div>
                      )}
                      <span className={feature.included ? "text-sm text-[#24234C]" : "text-sm text-gray-400"}>
                        {feature.text}
                        {feature.comingSoon && <span className="ml-1 text-xs text-[#5A4CFF]">(Coming Soon)</span>}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubscribe('monthly');
                  }}
                  variant={selectedPlan === 'monthly' ? 'default' : 'outline'}
                  className={getButtonClass('monthly', true)}
                >
                  Start Monthly Plan
                </Button>
              </CardContent>
            </Card>

            {/* Yearly Plan */}
            <Card 
              className={getCardClass('yearly', true)}
              onClick={() => setSelectedPlan('yearly')}
            >
              {/* Best Value Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#5A4CFF] to-purple-500 text-white text-xs font-medium px-4 py-1 rounded-bl-lg">
                BEST VALUE - SAVE 50%
              </div>
              
              <CardContent className="p-6 pt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#24234C]">Yearly</h3>
                  <div className={getRadioClass('yearly')}>
                    {selectedPlan === 'yearly' && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#24234C]">$0.16</span>
                    <span className="text-gray-500">/day</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-400 line-through">$119.88</span>
                    <span className="text-sm text-gray-500">$59.99 billed yearly</span>
                  </div>
                </div>

                {/* Free Trial Badge */}
                <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700 font-medium">7-day free trial included</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {yearlyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-[#24234C]">
                        {feature.text}
                        {feature.comingSoon && <span className="ml-1 text-xs text-[#5A4CFF]">(Coming Soon)</span>}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubscribe('yearly');
                  }}
                  className={getButtonClass('yearly')}
                >
                  Start 7-Day Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What You'll Get Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#24234C] text-center mb-8">
            What You'll Get
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, title: 'All Courses', desc: 'Unlimited access' },
              { icon: Award, title: 'Certificates', desc: 'Earn credentials' },
              { icon: Rocket, title: 'New Content', desc: 'Weekly updates' },
              { icon: Shield, title: 'Guarantee', desc: '30-day refund' },
            ].map((item, index) => (
              <Card key={index} className="border-[#E2E5E9]">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#5A4CFF]/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-[#5A4CFF]" />
                  </div>
                  <h4 className="font-semibold text-[#24234C] text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#24234C] text-center mb-8">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Sarah M.', role: 'Marketing Manager', text: 'Coursiv helped me automate 80% of my content creation. Worth every penny!' },
              { name: 'John D.', role: 'Entrepreneur', text: 'The AI courses alone saved me months of learning. Amazing value.' },
              { name: 'Emily R.', role: 'Freelancer', text: 'I doubled my productivity in just 2 weeks. Highly recommend!' },
            ].map((testimonial, index) => (
              <Card key={index} className="border-[#E2E5E9]">
                <CardContent className="p-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[#24234C] mb-3">"{testimonial.text}"</p>
                  <div>
                    <p className="font-medium text-sm text-[#24234C]">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skip Option */}
        <div className="text-center pb-8">
          <button 
            onClick={handleSkip}
            className="text-gray-400 hover:text-gray-600 text-sm underline transition-colors"
          >
            No thanks, I'll continue with limited access
          </button>
        </div>
      </main>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden">
        <Button 
          onClick={() => handleSubscribe(selectedPlan)}
          className="w-full h-12 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-xl font-medium"
        >
          {selectedPlan === 'yearly' ? 'Start 7-Day Free Trial' : 'Start Monthly Plan'} - ${selectedPlan === 'yearly' ? '0.16' : '0.33'}/day
        </Button>
      </div>
    </div>
  );
}
