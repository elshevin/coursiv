import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";

interface ScratchCardPageProps {
  onComplete: () => void;
}

export function ScratchCardPage({ onComplete }: ScratchCardPageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  // Initialize canvas with scratch layer
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get container dimensions
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Set canvas size to match container
    canvas.width = width;
    canvas.height = height;

    // Create gradient background for scratch layer
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#C4B5FD');
    gradient.addColorStop(0.5, '#A78BFA');
    gradient.addColorStop(1, '#8B5CF6');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Add sparkle/texture pattern
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 3 + 1;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add "Scratch here!" text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ Scratch here! ✨', width / 2, height / 2);

    setIsCanvasReady(true);
  }, []);

  const scratch = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isScratching || isRevealed) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let x, y;

    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    // Scale coordinates to canvas size
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    x = x * scaleX;
    y = y * scaleY;

    // Erase (scratch) with larger brush
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();

    // Calculate scratch progress
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparentPixels = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) {
        transparentPixels++;
      }
    }
    const totalPixels = canvas.width * canvas.height;
    const progress = (transparentPixels / totalPixels) * 100;
    setScratchProgress(progress);

    // Auto-reveal when 30% scratched (lower threshold for better UX)
    if (progress > 30 && !isRevealed) {
      setIsRevealed(true);
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    }
  }, [isScratching, isRevealed]);

  const handleClaimDiscount = () => {
    setShowModal(false);
    onComplete();
  };

  return (
    <div className="text-center relative">
      <h1 className="text-2xl lg:text-3xl font-bold text-[#5A4CFF] mb-2">
        Scratch & Save on your
      </h1>
      <h2 className="text-2xl lg:text-3xl font-bold text-[#24234C] mb-2">
        28-Day AI Challenge!
      </h2>
      <p className="text-[#24234C]/60 mb-8">
        Boost your skills and master AI. Get your gift with us 🎁
      </p>

      {/* Scratch Card Container */}
      <div 
        ref={containerRef}
        className="relative inline-block mb-8 w-[220px] h-[220px]"
      >
        {/* Hidden discount underneath */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl border-4 border-dashed border-yellow-400">
          <div className="text-center">
            <p className="text-6xl font-bold text-[#5A4CFF]">50%</p>
            <p className="text-2xl font-bold text-[#24234C]">OFF</p>
          </div>
        </div>

        {/* Scratch canvas - positioned on top */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 rounded-2xl cursor-pointer transition-opacity duration-500 ${isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ touchAction: 'none' }}
          onMouseDown={() => setIsScratching(true)}
          onMouseUp={() => setIsScratching(false)}
          onMouseLeave={() => setIsScratching(false)}
          onMouseMove={scratch}
          onTouchStart={() => setIsScratching(true)}
          onTouchEnd={() => setIsScratching(false)}
          onTouchMove={scratch}
        />
      </div>

      {/* Progress indicator */}
      {!isRevealed && isCanvasReady && (
        <p className="text-sm text-[#24234C]/40 mb-4">
          {scratchProgress > 0 ? `${Math.round(scratchProgress)}% scratched` : 'Scratch the card to reveal your discount!'}
        </p>
      )}

      {/* Revealed state */}
      {isRevealed && !showModal && (
        <div className="animate-bounce">
          <p className="text-lg font-semibold text-green-600 mb-4">🎉 You got 50% OFF!</p>
        </div>
      )}

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-[320px] text-center shadow-2xl animate-scaleIn">
            <div className="text-5xl mb-3">🎉</div>
            <h3 className="text-xl font-bold text-[#24234C] mb-1">Wooo hooo!</h3>
            <p className="text-sm text-[#24234C]/60 mb-1">You unlocked your own</p>
            <p className="text-3xl font-bold text-[#5A4CFF] mb-1">50% off</p>
            <p className="text-xs text-[#24234C]/40 mb-5">& a personalized learning plan</p>
            
            <Button
              onClick={handleClaimDiscount}
              className="w-full h-12 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full text-sm font-medium"
            >
              Claim My Discount
            </Button>
          </div>
        </div>
      )}

      {/* Skip button for accessibility */}
      {!isRevealed && (
        <button
          onClick={() => {
            setIsRevealed(true);
            setShowModal(true);
          }}
          className="text-sm text-[#24234C]/40 hover:text-[#24234C]/60 underline"
        >
          Skip scratching
        </button>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
