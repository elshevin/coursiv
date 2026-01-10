import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    title: "Truly valuable!",
    content: "Easy to follow, straight to the point. Helps you learn AI tools and concepts in a very practical way. A must-have for anyone wanting to stay competitive.",
    author: "Sarah J."
  },
  {
    id: 2,
    title: "Best AI learning app",
    content: "I've tried several apps but this is the best one. It breaks down complex topics into simple lessons. Highly recommended!",
    author: "Michael T."
  },
  {
    id: 3,
    title: "It's a life changer!",
    content: "I didn't know much about AI before, but now I use it daily for my work. This app gave me the confidence to use these new tools.",
    author: "Jessica R."
  },
  {
    id: 4,
    title: "Amazing learning experience",
    content: "The structured approach to learning AI is fantastic. Each lesson builds on the previous one, making complex concepts easy to understand.",
    author: "David K."
  },
  {
    id: 5,
    title: "Highly recommended!",
    content: "This platform has transformed how I approach my work. The AI skills I've learned have made me more efficient and productive.",
    author: "Emily W."
  },
  {
    id: 6,
    title: "Perfect for beginners",
    content: "As someone with no tech background, I was worried about learning AI. Coursiv made it accessible and fun. Now I use AI tools every day!",
    author: "Robert M."
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Number of cards to show based on screen size
  const cardsToShow = 3;
  const totalSlides = Math.ceil(testimonials.length / cardsToShow);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance) {
      nextSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    } else if (distance < -minSwipeDistance) {
      prevSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  // Get current visible testimonials
  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * cardsToShow;
    return testimonials.slice(startIndex, startIndex + cardsToShow);
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 py-[80px] lg:py-[120px] text-center">
      <h2 className="text-[32px] lg:text-[48px] font-medium mb-6 tracking-[-1px]">
        See how Coursiv changes lives
      </h2>
      <div className="flex justify-center items-center gap-2 mb-16">
        <span className="text-[20px] font-medium">Excellent</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-6 h-6 bg-[#00B67A] flex items-center justify-center text-white text-xs">
              ★
            </div>
          ))}
        </div>
        <span className="text-[16px] text-[#24234C]/60 ml-2">Based on 1,200+ reviews on Trustpilot</span>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrows */}
        <button
          onClick={() => {
            prevSlide();
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 10000);
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-[#E2E5E9] rounded-full shadow-md flex items-center justify-center hover:bg-[#F9FAFB] transition-colors"
          aria-label="Previous testimonials"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 10000);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-[#E2E5E9] rounded-full shadow-md flex items-center justify-center hover:bg-[#F9FAFB] transition-colors"
          aria-label="Next testimonials"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Cards Container with Animation */}
        <div className="px-12">
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ease-out"
            style={{
              opacity: 1,
              transform: 'translateX(0)'
            }}
          >
            {getVisibleTestimonials().map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white border border-[#E2E5E9] rounded-xl p-6 text-left shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 text-[#00B67A] mb-4">★★★★★</div>
                <h4 className="font-bold mb-2">{testimonial.title}</h4>
                <p className="text-sm text-[#24234C]/80 mb-4">
                  "{testimonial.content}"
                </p>
                <div className="text-xs text-[#24234C]/40">{testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#5A4CFF] w-8' 
                : 'bg-[#E2E5E9] hover:bg-[#C4C9D0]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="mt-4 text-xs text-[#24234C]/40">
        {isAutoPlaying ? (
          <span className="flex items-center justify-center gap-1">
            <span className="w-2 h-2 bg-[#00B67A] rounded-full animate-pulse"></span>
            Auto-playing
          </span>
        ) : (
          <span>Paused - will resume in a few seconds</span>
        )}
      </div>
    </section>
  );
}
