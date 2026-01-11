import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay before triggering animation
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, threshold]);

  const baseClasses = 'transition-all duration-700 ease-out';
  
  const animationClasses = {
    fadeIn: {
      initial: 'opacity-0 translate-y-8',
      visible: 'opacity-100 translate-y-0',
    },
    slideInLeft: {
      initial: 'opacity-0 -translate-x-8',
      visible: 'opacity-100 translate-x-0',
    },
    slideInRight: {
      initial: 'opacity-0 translate-x-8',
      visible: 'opacity-100 translate-x-0',
    },
    scaleIn: {
      initial: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100',
    },
  };

  const animClass = animationClasses[animation];
  const stateClass = isVisible ? animClass.visible : animClass.initial;

  return (
    <div ref={ref} className={`${baseClasses} ${stateClass} ${className}`}>
      {children}
    </div>
  );
}
