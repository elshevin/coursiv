import { useState, useEffect } from 'react';

export default function BrowserWindowAnimation() {
  const [inputText, setInputText] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = 'Generate a social m';

  // Typing animation for input
  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      // Reset after a delay
      const resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setIsTyping(true);
      }, 3000);
      return () => clearTimeout(resetTimeout);
    }
  }, [displayedText, isTyping]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="w-full max-w-[550px] mx-auto">
      {/* Browser Window */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Browser Top Bar */}
        <div className="bg-gradient-to-r from-[#5A4CFF] to-[#6B5DFF] px-6 py-3 flex items-center gap-3">
          {/* Traffic Lights */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2 ml-4">
            <button className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Browser Content */}
        <div className="bg-white">
          {/* Content Area */}
          <div className="h-[400px] bg-gradient-to-br from-white via-gray-50 to-white p-8 flex flex-col">
            {/* Placeholder content with subtle animation */}
            <div className="flex-1 flex items-center justify-center">
              <div className="space-y-4 w-full">
                {/* Animated loading lines */}
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex items-center gap-3 bg-gray-50 rounded-full px-6 py-4 border border-gray-200 hover:border-gray-300 transition-colors">
              {/* Input Field */}
              <input
                type="text"
                value={displayedText}
                onChange={(e) => setDisplayedText(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 outline-none text-base"
                disabled
              />
              
              {/* Cursor */}
              {isTyping && displayedText.length < fullText.length && (
                <span className={`w-0.5 h-5 bg-[#5A4CFF] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
              )}
              
              {/* Send Button */}
              <button className="w-10 h-10 rounded-full bg-[#5A4CFF] flex items-center justify-center text-white hover:bg-[#4B3FE0] transition-colors shadow-lg shadow-[#5A4CFF]/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.0766914 0.837654326,3.16608266 1.15159189,3.95158951 L3.03521743,10.3925826 C3.03521743,10.54968 3.34915502,10.7067774 3.50612381,10.7067774 L16.6915026,11.4922643 C16.6915026,11.4922643 17.1624089,11.4922643 17.1624089,12.0351689 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle shadow effect below */}
      <div className="mt-4 h-1 bg-gradient-to-r from-[#5A4CFF]/10 via-[#5A4CFF]/5 to-transparent rounded-full blur-sm"></div>
    </div>
  );
}
