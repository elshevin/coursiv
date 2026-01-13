import { useState, useEffect, ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  pageKey: string | number;
  className?: string;
}

/**
 * Coursiv-style Page Transition Component
 * 
 * Provides smooth fade-in/fade-out animation when switching between pages
 * in the lesson content viewer.
 */
export function PageTransition({ children, pageKey, className = "" }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentKey, setCurrentKey] = useState(pageKey);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (pageKey !== currentKey) {
      // Start fade out
      setIsVisible(false);
      
      // After fade out, update content and fade in
      const timer = setTimeout(() => {
        setCurrentKey(pageKey);
        setDisplayChildren(children);
        setIsVisible(true);
      }, 150); // Match the CSS transition duration

      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [pageKey, children, currentKey]);

  return (
    <div
      className={`transition-all duration-150 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } ${className}`}
      data-testid="page-transition"
    >
      {displayChildren}
    </div>
  );
}

export default PageTransition;
