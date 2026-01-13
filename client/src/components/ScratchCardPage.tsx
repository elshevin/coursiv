import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface ScratchCardPageProps {
  onComplete: () => void;
}

export function ScratchCardPage({ onComplete }: ScratchCardPageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 200;
    canvas.height = 200;

    // Draw scratch layer (gray with pattern)
    ctx.fillStyle = '#E5E7EB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add some texture
    ctx.fillStyle = '#D1D5DB';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add text hint
    ctx.fillStyle = '#9CA3AF';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch here!', canvas.width / 2, canvas.height / 2);
  }, []);

  const scratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isScratching) return;
    
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

    // Scale coordinates
    x = x * (canvas.width / rect.width);
    y = y * (canvas.height / rect.height);

    // Erase (scratch)
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();

    // Calculate scratch progress
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparentPixels = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) {
        transparentPixels++;
      }
    }
    const progress = (transparentPixels / (canvas.width * canvas.height)) * 100;
    setScratchProgress(progress);

    // Auto-reveal when 50% scratched
    if (progress > 50 && !isRevealed) {
      setIsRevealed(true);
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    }
  };

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
      <div className="relative inline-block mb-8">
        {/* Hidden discount underneath */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl">
          <div className="text-center">
            <p className="text-6xl font-bold text-[#5A4CFF]">50%</p>
            <p className="text-2xl font-bold text-[#24234C]">OFF</p>
          </div>
        </div>

        {/* Scratch canvas */}
        <canvas
          ref={canvasRef}
          className={`rounded-2xl cursor-pointer transition-opacity duration-500 ${isRevealed ? 'opacity-0' : 'opacity-100'}`}
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
      {!isRevealed && (
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl animate-scaleIn">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-[#24234C] mb-2">Wooo hooo!</h3>
            <p className="text-[#24234C]/60 mb-2">You unlocked your own</p>
            <p className="text-4xl font-bold text-[#5A4CFF] mb-6">50% off</p>
            <p className="text-sm text-[#24234C]/40 mb-6">& a personalized learning plan</p>
            
            <Button
              onClick={handleClaimDiscount}
              className="w-full h-14 bg-[#5A4CFF] hover:bg-[#4B3FE0] text-white rounded-full text-lg font-medium"
            >
              CLAIM MY DISCOUNT
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
