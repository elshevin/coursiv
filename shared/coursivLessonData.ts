// Coursiv-style Lesson Data
// Contains text, playground, quiz, and discovery blocks
// Following Coursiv's content density: playground every 2-3 texts, quiz every 4-5 playgrounds

import {
  CoursivLesson,
  createTextBlock,
  createPlaygroundBlock,
  createQuizBlock,
  createDiscoveryBlock,
  createFeedbackBlock,
} from './courseContentTypes';

// ChatGPT Lesson 1: What is ChatGPT? (ChatGPT's Brain)
export const chatgptLesson1: CoursivLesson = {
  id: 'chatgpt-1-1',
  title: "ChatGPT's Brain",
  blocks: [
    // Text 1: Introduction
    createTextBlock(
      [
        "ChatGPT runs on something called a **Large Language Model (LLM)**. It sounds complicated, but don't worry!",
        "Let's sort out how it works.",
        "Basically, an LLM is like a super-smart librarian who has read every book, article, and webpage, capable of understanding and generating human-like text. Why \"large\"? Because LLMs are trained on **massive amounts of data**.",
      ],
      { image: '🧠' }
    ),

    // Text 2: How it works
    createTextBlock(
      [
        "As a result, by learning patterns and structures in language, they can create coherent and contextually appropriate responses.",
        "But that's not all!",
        "There is another interesting aspect of LLMs like ChatGPT — they *keep track* of your conversation.",
      ]
    ),

    // Playground 1: Simple prompt exercise
    createPlaygroundBlock(
      'Your First Prompt',
      'Send a simple question without repeating the context.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Help me ' },
        { type: 'blank', label: 'action' },
        { type: 'text', content: ' for dinner tonight.' },
      ],
      ['order a pizza', 'cook pasta', 'find a restaurant'],
      { action: 'order a pizza' },
      { title: 'Great!', message: 'You just sent your first prompt to ChatGPT!' },
    ),

    // Feedback after playground
    createFeedbackBlock(
      'Was this task helpful?',
      ['Yes', 'No'],
      0
    ),

    // Discovery 1
    createDiscoveryBlock(
      1,
      'First Discovery',
      'ChatGPT remembers context from earlier in the conversation, so you don\'t need to repeat yourself!'
    ),

    // Text 3: Memory feature
    createTextBlock(
      [
        "ChatGPT knew you meant a vegetarian breakfast in NYC. Why is it so?",
        "It remembered the earlier conversation. This is **conversation memory** in action.",
        "Let's try another example to see how powerful this can be.",
      ]
    ),

    // Playground 2: Context exercise
    createPlaygroundBlock(
      'Memory Test',
      'Ask a follow-up question that relies on context.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'What about ' },
        { type: 'blank', label: 'meal' },
        { type: 'text', content: ' options?' },
      ],
      ['lunch', 'dinner', 'breakfast'],
      { meal: 'lunch' },
      { title: 'Perfect!', message: 'ChatGPT understood you\'re still talking about NYC and vegetarian food!' },
    ),

    // Feedback
    createFeedbackBlock(
      'Did ChatGPT remember the context?',
      ['Yes', 'No'],
      0
    ),

    // Discovery 2
    createDiscoveryBlock(
      2,
      'Second Discovery',
      'You can have natural conversations with ChatGPT without repeating context every time.'
    ),

    // Text 4: Limitations
    createTextBlock(
      [
        "However, ChatGPT's memory has limits. Very long conversations may cause it to \"forget\" earlier details.",
        "Also, ChatGPT doesn't remember conversations from previous sessions unless you use the memory feature.",
        "Let's practice managing context effectively.",
      ]
    ),

    // Playground 3: Context management
    createPlaygroundBlock(
      'Context Refresh',
      'Practice reminding ChatGPT of important context.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Remember, I\'m looking for ' },
        { type: 'blank', label: 'diet' },
        { type: 'text', content: ' options in ' },
        { type: 'blank', label: 'location' },
        { type: 'text', content: '.' },
      ],
      ['vegetarian', 'NYC', 'budget-friendly'],
      { diet: 'vegetarian', location: 'NYC' },
      { title: 'Excellent!', message: 'You\'ve learned how to refresh context when needed!' },
    ),

    // Feedback
    createFeedbackBlock(
      'Is context management clear now?',
      ['Yes', 'No'],
      0
    ),

    // Discovery 3
    createDiscoveryBlock(
      3,
      'Third Discovery',
      'When conversations get long, briefly remind ChatGPT of key context to get better responses.'
    ),

    // Text 5: Summary
    createTextBlock(
      [
        "**Key Takeaways:**",
        "• ChatGPT uses Large Language Models trained on massive data",
        "• It maintains conversation context within a session",
        "• Long conversations may require context refreshes",
        "• Each new session starts fresh unless memory is enabled",
      ]
    ),

    // Quiz: Test understanding
    createQuizBlock(
      'ChatGPT knew you meant a vegetarian breakfast in NYC. Why is it so?',
      [
        'It searched the internet for context',
        'It remembered the earlier conversation',
        'It made a lucky guess',
      ],
      1,
      'ChatGPT retained the NYC and vegetarian context from earlier. This is conversation memory in action.'
    ),
  ],
};

// ChatGPT Lesson 2: Creating Your First Prompt
export const chatgptLesson2: CoursivLesson = {
  id: 'chatgpt-1-2',
  title: 'Creating Your First Prompt',
  blocks: [
    // Text 1: What is a prompt
    createTextBlock(
      [
        "A **prompt** is simply the text you type to ChatGPT. It's how you communicate what you want.",
        "**Good prompts lead to good responses.**",
        "Let's start with something simple.",
      ],
      { image: '✍️' }
    ),

    // Playground 1: Simple prompt
    createPlaygroundBlock(
      'Write a Simple Prompt',
      'Create a basic prompt asking for creative content.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Write a ' },
        { type: 'blank', label: 'format' },
        { type: 'text', content: ' about ' },
        { type: 'blank', label: 'topic' },
        { type: 'text', content: '.' },
      ],
      ['haiku', 'coding', 'poem', 'nature'],
      { format: 'haiku', topic: 'coding' },
      { title: 'Nice!', message: 'You\'ve written your first creative prompt!' },
    ),

    // Feedback
    createFeedbackBlock(
      'Was this prompt easy to write?',
      ['Yes', 'No'],
      0
    ),

    // Discovery 1
    createDiscoveryBlock(
      1,
      'First Discovery',
      'Simple prompts work great for straightforward requests. Just state what you want clearly!'
    ),

    // Text 2: Anatomy of a good prompt
    createTextBlock(
      [
        "**The Anatomy of a Good Prompt**",
        "Great prompts usually include:",
        "• **Clear intent** - What do you want?",
        "• **Context** - Any background info needed",
        "• **Format** - How should the response look?",
      ]
    ),

    // Playground 2: Structured prompt
    createPlaygroundBlock(
      'Build a Structured Prompt',
      'Create a prompt with clear intent, context, and format.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Write a ' },
        { type: 'blank', label: 'length' },
        { type: 'text', content: ' email to my boss explaining why I need ' },
        { type: 'blank', label: 'request' },
        { type: 'text', content: '. Keep it ' },
        { type: 'blank', label: 'tone' },
        { type: 'text', content: '.' },
      ],
      ['3-paragraph', 'Friday off', 'professional but friendly'],
      { length: '3-paragraph', request: 'Friday off', tone: 'professional but friendly' },
      { title: 'Excellent!', message: 'This prompt has clear intent, context, and format!' },
    ),

    // Feedback
    createFeedbackBlock(
      'Do you understand the prompt structure?',
      ['Yes', 'No'],
      0
    ),

    // Discovery 2
    createDiscoveryBlock(
      2,
      'Second Discovery',
      'The more specific your prompt, the better the response. Include intent, context, and format!'
    ),

    // Text 3: Practice prompts
    createTextBlock(
      [
        "**Practice Time!**",
        "Try these starter prompts:",
        "1. \"Explain [topic] like I'm 5 years old\"",
        "2. \"Give me 5 ideas for [something]\"",
        "3. \"Help me write a [type of content] about [topic]\"",
        "The more specific you are, the better results you'll get!",
      ],
      { image: '🎯' }
    ),

    // Playground 3: ELI5 prompt
    createPlaygroundBlock(
      'Explain Like I\'m 5',
      'Use the ELI5 technique to get simple explanations.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Explain ' },
        { type: 'blank', label: 'topic' },
        { type: 'text', content: ' like I\'m ' },
        { type: 'blank', label: 'age' },
        { type: 'text', content: ' years old.' },
      ],
      ['quantum physics', '5', 'machine learning', '10'],
      { topic: 'quantum physics', age: '5' },
      { title: 'Great!', message: 'ELI5 is a powerful technique for getting simple explanations!' },
    ),

    // Feedback
    createFeedbackBlock(
      'Will you use ELI5 prompts?',
      ['Yes', 'Maybe'],
      0
    ),

    // Discovery 3
    createDiscoveryBlock(
      3,
      'Third Discovery',
      'The "Explain like I\'m 5" technique forces ChatGPT to use simple language and analogies.'
    ),

    // Playground 4: Ideas prompt
    createPlaygroundBlock(
      'Generate Ideas',
      'Ask ChatGPT to brainstorm ideas for you.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Give me ' },
        { type: 'blank', label: 'number' },
        { type: 'text', content: ' ideas for ' },
        { type: 'blank', label: 'topic' },
        { type: 'text', content: '.' },
      ],
      ['5', 'a birthday gift', '10', 'weekend activities'],
      { number: '5', topic: 'a birthday gift' },
      { title: 'Perfect!', message: 'ChatGPT is great at brainstorming!' },
    ),

    // Quiz
    createQuizBlock(
      'What makes a good prompt?',
      [
        'Using as few words as possible',
        'Including clear intent, context, and format',
        'Using technical jargon',
        'Making it as long as possible',
      ],
      1,
      'Good prompts include clear intent (what you want), context (background info), and format (how the response should look).'
    ),
  ],
};

// Export all lessons
export const coursivLessons: Record<string, CoursivLesson> = {
  'chatgpt-1-1': chatgptLesson1,
  'chatgpt-1-2': chatgptLesson2,
};

// Helper to get lesson by ID
export function getCoursivLesson(lessonId: string): CoursivLesson | null {
  return coursivLessons[lessonId] || null;
}
