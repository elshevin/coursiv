import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Crown, Sparkles, Lock, Clock } from 'lucide-react';

declare global {
  interface Window {
    fastspring?: {
      builder?: {
        push: (config: Record<string, unknown>) => void;
        recognize: (config: Record<string, unknown>) => void;
      };
    };
  }
}

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
}

export function SubscriptionModal({ isOpen, onClose, userEmail }: SubscriptionModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = {
    monthly: {
      price: '$9.99',
      pricePerDay: '$0.33',
      period: '/month',
      savings: null,
      trial: null,
      features: [
        'Access to all AI courses',
        'Daily challenges & quizzes',
        'Progress tracking',
        'Certificate of completion',
      ],
    },
    yearly: {
      price: '$59.99',
      pricePerDay: '$0.16',
      period: '/year',
      originalPrice: '$119.88',
      savings: 'Save 50%',
      trial: '7-Day Free Trial',
      features: [
        'Access to all AI courses',
        'Daily challenges & quizzes',
        'Progress tracking',
        'Certificate of completion',
        'Priority support',
        'Early access to new content',
      ],
    },
  };

  const handleSubscribe = (plan: 'monthly' | 'yearly') => {
    setIsProcessing(true);
    
    // Trigger FastSpring checkout
    if (window.fastspring && window.fastspring.builder) {
      const productPath = plan === 'monthly' 
        ? 'learnway-monthly-subscription'
        : 'learnway-yearly-subscription';
      
      // Recognize user email if available
      if (userEmail) {
        window.fastspring.builder.recognize({
          email: userEmail,
        });
      }
      
      window.fastspring.builder.push({
        products: [{ path: productPath, quantity: 1 }],
        checkout: true,
      });
    } else {
      console.error('FastSpring not loaded');
      alert('Payment system is loading. Please try again in a moment.');
    }
    
    setIsProcessing(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-[#5A4CFF] to-[#7C6FFF] p-6 text-white">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5" />
              <DialogTitle className="text-xl font-bold text-white">
                Subscription Required
              </DialogTitle>
            </div>
            <DialogDescription className="text-white/80">
              Unlock full access to all courses, challenges, and features
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Monthly Plan */}
            <Card 
              className={`cursor-pointer transition-all ${
                selectedPlan === 'monthly' 
                  ? 'border-[#5A4CFF] ring-2 ring-[#5A4CFF]/20' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedPlan('monthly')}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900">Monthly</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === 'monthly' ? 'border-[#5A4CFF] bg-[#5A4CFF]' : 'border-gray-300'
                  }`}>
                    {selectedPlan === 'monthly' && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-gray-900">{plans.monthly.pricePerDay}</span>
                  <span className="text-gray-500">/day</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{plans.monthly.price} billed monthly</p>
                <ul className="space-y-2">
                  {plans.monthly.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Yearly Plan */}
            <Card 
              className={`cursor-pointer transition-all relative ${
                selectedPlan === 'yearly' 
                  ? 'border-[#5A4CFF] ring-2 ring-[#5A4CFF]/20' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedPlan('yearly')}
            >
              {plans.yearly.savings && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {plans.yearly.savings}
                  </span>
                </div>
              )}
              <CardContent className="p-4 pt-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">Yearly</span>
                    <Crown className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === 'yearly' ? 'border-[#5A4CFF] bg-[#5A4CFF]' : 'border-gray-300'
                  }`}>
                    {selectedPlan === 'yearly' && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
                
                {/* 7-Day Free Trial Badge */}
                {plans.yearly.trial && (
                  <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-2 py-1 rounded-md text-xs font-medium mb-2 w-fit">
                    <Clock className="w-3 h-3" />
                    {plans.yearly.trial}
                  </div>
                )}
                
                <div className="mb-1">
                  <span className="text-3xl font-bold text-gray-900">{plans.yearly.pricePerDay}</span>
                  <span className="text-gray-500">/day</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-sm text-gray-500">{plans.yearly.price} billed annually</p>
                  {plans.yearly.originalPrice && (
                    <p className="text-xs text-gray-400 line-through">{plans.yearly.originalPrice}</p>
                  )}
                </div>
                <ul className="space-y-2">
                  {plans.yearly.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Button
            onClick={() => handleSubscribe(selectedPlan)}
            disabled={isProcessing}
            className="w-full bg-[#5A4CFF] hover:bg-[#4A3CE0] text-white py-6 text-lg font-semibold"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            {isProcessing ? 'Processing...' : selectedPlan === 'yearly' ? 'Start 7-Day Free Trial' : 'Subscribe Monthly'}
          </Button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Cancel anytime. By subscribing, you agree to our{' '}
            <a href="/subscription-terms" className="underline hover:text-gray-600">
              Subscription Terms
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
