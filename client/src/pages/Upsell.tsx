import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Check, X, Clock, Star, Shield, Zap } from "lucide-react";

export default function Upsell() {
  const [, setLocation] = useLocation();
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

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

  const handleSkip = () => {
    setLocation('/dashboard');
  };

  const handleGetAccess = () => {
    // In production, this would go to payment
    // For demo, just go to dashboard
    setLocation('/dashboard');
  };

  const features = [
    'Unlimited access to all AI tools',
    'Priority support 24/7',
    'Exclusive prompt library (500+ prompts)',
    'Advanced AI courses',
    'Certificate of completion',
    'Community access',
    'Monthly live workshops',
    'Personal AI coach',
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Marketing Manager',
      text: 'Coursiv helped me automate 80% of my content creation. Worth every penny!',
      rating: 5,
    },
    {
      name: 'John D.',
      role: 'Entrepreneur',
      text: 'The AI tools alone saved me $500/month in subscriptions. Amazing value.',
      rating: 5,
    },
    {
      name: 'Emily R.',
      role: 'Freelancer',
      text: 'I doubled my productivity in just 2 weeks. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full px-4 py-4 border-b border-[#E2E5E9] bg-white">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <img src="/2-332.svg" alt="Coursiv" className="h-8" />
          <button 
            onClick={handleSkip}
            className="text-sm text-[#24234C]/60 hover:text-[#24234C] transition-colors"
          >
            Skip for now
          </button>
        </div>
      </header>

      {/* Step Indicator */}
      <div className="bg-gray-50 py-4 px-4 border-b border-[#E2E5E9]">
        <div className="max-w-[600px] mx-auto">
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: 'Get Plan', icon: '📋' },
              { step: 2, label: 'Create Account', icon: '👤' },
              { step: 3, label: 'Get Discount', icon: '🎁' },
              { step: 4, label: 'Start Learning', icon: '🚀' },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    item.step <= 3 
                      ? 'bg-[#5A4CFF] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {item.step <= 2 ? '✓' : item.icon}
                  </div>
                  <span className={`text-xs mt-1 ${
                    item.step <= 3 ? 'text-[#5A4CFF] font-medium' : 'text-gray-400'
                  }`}>
                    {item.label}
                  </span>
                </div>
                {index < 3 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    item.step < 3 ? 'bg-[#5A4CFF]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Countdown Banner */}
      <div className="bg-[#5A4CFF] text-white py-3 px-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-3">
          <Clock className="w-5 h-5" />
          <span className="font-medium">Special offer expires in:</span>
          <span className="font-bold text-xl">
            {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5A4CFF]/10 text-[#5A4CFF] text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Limited Time Offer - 70% OFF
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#24234C] mb-4">
            Unlock Your Full AI Potential
          </h1>
          <p className="text-xl text-[#24234C]/70 max-w-[600px] mx-auto">
            Get unlimited access to all AI tools, courses, and exclusive features
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-[500px] mx-auto mb-12">
          <Card className="border-2 border-[#5A4CFF] overflow-hidden">
            <div className="bg-[#5A4CFF] text-white py-3 px-6 text-center">
              <span className="font-medium">MOST POPULAR</span>
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-[#24234C]/40 line-through">$299</span>
                  <span className="text-5xl font-bold text-[#24234C]">$99</span>
                </div>
                <p className="text-[#24234C]/60">Lifetime access • One-time payment</p>
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-[#24234C]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={handleGetAccess}
                className="w-full h-14 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-xl text-lg font-medium mb-4"
              >
                Get Lifetime Access - $99
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-[#24234C]/60">
                <Shield className="w-4 h-4" />
                <span>30-day money-back guarantee</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#24234C] text-center mb-8">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-[#E2E5E9]">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-[#24234C] mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-medium text-[#24234C]">{testimonial.name}</p>
                    <p className="text-sm text-[#24234C]/60">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skip Option */}
        <div className="text-center">
          <button 
            onClick={handleSkip}
            className="text-[#24234C]/60 hover:text-[#24234C] underline transition-colors"
          >
            No thanks, I'll continue with the free plan
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E2E5E9] py-6 px-4 mt-12">
        <div className="max-w-[1200px] mx-auto text-center text-sm text-[#24234C]/40">
          <p>Coursiv. All rights reserved. © 2025</p>
        </div>
      </footer>
    </div>
  );
}
