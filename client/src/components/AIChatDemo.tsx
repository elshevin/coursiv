import { useState, useEffect } from 'react';

interface Message {
  type: 'user' | 'ai';
  text: string;
}

const demoConversation: Message[] = [
  { type: 'user', text: 'How can I use AI to improve my productivity?' },
  { type: 'ai', text: 'Great question! Here are 3 ways AI can boost your productivity:\n\n1. **Automate repetitive tasks** - Use AI tools to handle emails, scheduling, and data entry\n\n2. **Generate content faster** - AI can help draft documents, code, and creative content\n\n3. **Analyze data instantly** - Get insights from complex data in seconds' },
];

export default function AIChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentMessageIndex >= demoConversation.length) {
      // Reset after a delay
      const resetTimeout = setTimeout(() => {
        setMessages([]);
        setCurrentMessageIndex(0);
        setCurrentCharIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimeout);
    }

    const currentMessage = demoConversation[currentMessageIndex];
    
    if (currentCharIndex === 0) {
      // Start typing a new message
      setIsTyping(true);
      setMessages(prev => [...prev, { type: currentMessage.type, text: '' }]);
    }

    if (currentCharIndex < currentMessage.text.length) {
      // Type next character
      const typingSpeed = currentMessage.type === 'user' ? 50 : 20;
      const timeout = setTimeout(() => {
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            ...newMessages[newMessages.length - 1],
            text: currentMessage.text.slice(0, currentCharIndex + 1)
          };
          return newMessages;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Message complete, move to next
      setIsTyping(false);
      const nextMessageTimeout = setTimeout(() => {
        setCurrentMessageIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 1000);
      return () => clearTimeout(nextMessageTimeout);
    }
  }, [currentMessageIndex, currentCharIndex]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-[400px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5A4CFF] to-purple-500 px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-lg">🤖</span>
        </div>
        <div>
          <div className="text-white font-semibold">AI Assistant</div>
          <div className="text-white/70 text-xs flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Online
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 h-[280px] overflow-y-auto bg-gray-50 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                message.type === 'user'
                  ? 'bg-[#5A4CFF] text-white rounded-br-md'
                  : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
              }`}
            >
              <div className="whitespace-pre-wrap">{message.text}</div>
            </div>
          </div>
        ))}
        
        {/* Typing indicator */}
        {isTyping && currentMessageIndex < demoConversation.length && demoConversation[currentMessageIndex].type === 'ai' && currentCharIndex === 0 && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-100 bg-white">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Ask anything..."
            className="flex-1 bg-transparent text-sm outline-none"
            disabled
          />
          <button className="w-8 h-8 rounded-full bg-[#5A4CFF] flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
