import { useState, useEffect, useRef } from 'react';

export default function BrowserWindowAnimation() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState<'typing' | 'sending' | 'responding' | 'complete' | 'reset'>('typing');
  const [responseText, setResponseText] = useState('');
  
  const fullPrompt = 'Generate a social media post about AI learning';
  const fullResponse = `Here's a social media post for you:

🚀 Ready to level up your career?

AI isn't just the future—it's NOW. Whether you're a marketer, entrepreneur, or creative professional, mastering AI tools can:

✨ Save hours of work every day
📈 Boost your productivity 10x
💡 Unlock creative possibilities

Start your AI journey today! 🎯

#AILearning #FutureOfWork #Coursiv`;

  // Typing animation for input
  useEffect(() => {
    if (phase !== 'typing') return;

    if (displayedText.length < fullPrompt.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullPrompt.slice(0, displayedText.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      // Move to sending phase after typing completes
      const sendTimeout = setTimeout(() => {
        setPhase('sending');
      }, 800);
      return () => clearTimeout(sendTimeout);
    }
  }, [displayedText, phase]);

  // Sending phase - brief pause then start responding
  useEffect(() => {
    if (phase !== 'sending') return;
    
    const respondTimeout = setTimeout(() => {
      setPhase('responding');
    }, 500);
    return () => clearTimeout(respondTimeout);
  }, [phase]);

  // Response typing animation
  useEffect(() => {
    if (phase !== 'responding') return;

    if (responseText.length < fullResponse.length) {
      const timeout = setTimeout(() => {
        setResponseText(fullResponse.slice(0, responseText.length + 1));
      }, 15);
      return () => clearTimeout(timeout);
    } else {
      // Move to complete phase
      const completeTimeout = setTimeout(() => {
        setPhase('complete');
      }, 2000);
      return () => clearTimeout(completeTimeout);
    }
  }, [responseText, phase]);

  // Reset animation after complete
  useEffect(() => {
    if (phase !== 'complete') return;
    
    const resetTimeout = setTimeout(() => {
      setPhase('reset');
    }, 3000);
    return () => clearTimeout(resetTimeout);
  }, [phase]);

  // Reset everything
  useEffect(() => {
    if (phase !== 'reset') return;
    
    setDisplayedText('');
    setResponseText('');
    setPhase('typing');
  }, [phase]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="w-full max-w-[600px] mx-auto">
      {/* Browser Window - 加宽为 PC 风格 */}
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
          
          {/* URL Bar */}
          <div className="flex-1 ml-4">
            <div className="bg-white/20 rounded-lg px-4 py-1.5 text-white/80 text-sm">
              coursiv.io/ai-assistant
            </div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="bg-white">
          {/* Content Area - 显示 AI 回复 */}
          <div className="h-[380px] bg-gradient-to-br from-white via-gray-50 to-white p-6 overflow-hidden">
            {phase === 'typing' && (
              <div className="flex-1 flex items-center justify-center h-full">
                <div className="space-y-4 w-full">
                  {/* Skeleton loading lines */}
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            
            {phase === 'sending' && (
              <div className="flex-1 flex items-center justify-center h-full">
                <div className="flex items-center gap-3 text-[#5A4CFF]">
                  <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-gray-600">Generating response...</span>
                </div>
              </div>
            )}
            
            {(phase === 'responding' || phase === 'complete' || phase === 'reset') && responseText && (
              <div className="h-full overflow-y-auto">
                {/* AI Response Card */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5A4CFF] to-[#8B7DFF] flex items-center justify-center text-white text-sm font-medium">
                      AI
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Coursiv AI</div>
                      <div className="text-xs text-gray-500">Just now</div>
                    </div>
                  </div>
                  <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap pl-11">
                    {responseText}
                    {phase === 'responding' && (
                      <span className={`inline-block w-0.5 h-4 bg-[#5A4CFF] ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-5">
            <div className="flex items-center gap-3 bg-gray-50 rounded-full px-5 py-3 border border-gray-200 hover:border-gray-300 transition-colors">
              {/* Input Field */}
              <input
                type="text"
                value={displayedText}
                readOnly
                placeholder="Ask anything..."
                className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 outline-none text-sm"
              />
              
              {/* Cursor */}
              {phase === 'typing' && displayedText.length < fullPrompt.length && (
                <span className={`w-0.5 h-5 bg-[#5A4CFF] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
              )}
              
              {/* Send Button */}
              <button 
                className={`w-9 h-9 rounded-full flex items-center justify-center text-white transition-all shadow-lg ${
                  phase === 'sending' 
                    ? 'bg-gray-400' 
                    : 'bg-[#5A4CFF] hover:bg-[#4B3FE0] shadow-[#5A4CFF]/20'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
