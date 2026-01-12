import { useState } from 'react';
import { TopNavbar } from '@/components/TopNavbar';
import { Search, Copy, Check, Sparkles, Code, FileText, MessageSquare, Briefcase, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  icon: string;
}

const categories = [
  { id: 'all', name: 'All', icon: Sparkles },
  { id: 'writing', name: 'Writing', icon: FileText },
  { id: 'coding', name: 'Coding', icon: Code },
  { id: 'business', name: 'Business', icon: Briefcase },
  { id: 'creative', name: 'Creative', icon: Palette },
  { id: 'chat', name: 'Chat', icon: MessageSquare },
];

const prompts: Prompt[] = [
  {
    id: '1',
    title: 'Professional Email Writer',
    description: 'Write professional emails for any business situation',
    prompt: 'Write a professional email about [topic]. The tone should be [formal/casual]. Include a clear subject line, greeting, body, and sign-off.',
    category: 'writing',
    icon: '📧',
  },
  {
    id: '2',
    title: 'Code Debugger',
    description: 'Help identify and fix bugs in your code',
    prompt: 'Debug the following code and explain what was wrong:\n\n[paste your code here]\n\nProvide the corrected code with comments explaining the fixes.',
    category: 'coding',
    icon: '🐛',
  },
  {
    id: '3',
    title: 'Business Plan Generator',
    description: 'Create a comprehensive business plan outline',
    prompt: 'Create a business plan outline for [business idea]. Include: Executive Summary, Market Analysis, Products/Services, Marketing Strategy, Financial Projections, and Team Structure.',
    category: 'business',
    icon: '📊',
  },
  {
    id: '4',
    title: 'Creative Story Starter',
    description: 'Generate creative story ideas and openings',
    prompt: 'Write an engaging opening paragraph for a [genre] story about [theme]. Include vivid descriptions and an intriguing hook.',
    category: 'creative',
    icon: '✨',
  },
  {
    id: '5',
    title: 'Interview Preparation',
    description: 'Prepare for job interviews with common questions',
    prompt: 'Generate 10 common interview questions for a [job title] position at a [industry] company. Include tips for answering each question.',
    category: 'business',
    icon: '💼',
  },
  {
    id: '6',
    title: 'Code Refactoring Assistant',
    description: 'Improve code quality and readability',
    prompt: 'Refactor the following code to improve readability, performance, and maintainability:\n\n[paste your code here]\n\nExplain each improvement made.',
    category: 'coding',
    icon: '🔧',
  },
  {
    id: '7',
    title: 'Social Media Caption',
    description: 'Create engaging social media captions',
    prompt: 'Write 5 engaging social media captions for [platform] about [topic]. Include relevant hashtags and a call-to-action.',
    category: 'creative',
    icon: '📱',
  },
  {
    id: '8',
    title: 'Meeting Summary',
    description: 'Summarize meeting notes into action items',
    prompt: 'Summarize the following meeting notes into key points, decisions made, and action items with owners and deadlines:\n\n[paste meeting notes]',
    category: 'business',
    icon: '📝',
  },
];

export default function PromptsLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPrompts = prompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopy = async (prompt: Prompt) => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopiedId(prompt.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <TopNavbar />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#24234C] mb-2">Prompts Library</h1>
          <p className="text-[#24234C]/60">Discover and use AI prompts to boost your productivity</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5A4CFF]/20 focus:border-[#5A4CFF]"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#5A4CFF] text-white'
                    : 'bg-white text-[#24234C] border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPrompts.map(prompt => (
            <div
              key={prompt.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{prompt.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[#24234C]">{prompt.title}</h3>
                    <p className="text-sm text-[#24234C]/60">{prompt.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 font-mono whitespace-pre-wrap line-clamp-3">
                  {prompt.prompt}
                </p>
              </div>

              <Button
                onClick={() => handleCopy(prompt)}
                variant="outline"
                className="w-full"
              >
                {copiedId === prompt.id ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Prompt
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="text-center py-12">
            <Sparkles className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No prompts found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
}
