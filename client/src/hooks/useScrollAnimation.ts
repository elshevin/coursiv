import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// CSS classes for animations
export const animationClasses = {
  fadeIn: 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
  fadeInVisible: 'opacity-100 translate-y-0',
  slideInLeft: 'opacity-0 -translate-x-8 transition-all duration-700 ease-out',
  slideInLeftVisible: 'opacity-100 translate-x-0',
  slideInRight: 'opacity-0 translate-x-8 transition-all duration-700 ease-out',
  slideInRightVisible: 'opacity-100 translate-x-0',
  scaleIn: 'opacity-0 scale-95 transition-all duration-700 ease-out',
  scaleInVisible: 'opacity-100 scale-100',
};
