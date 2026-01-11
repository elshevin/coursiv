// Course Content Mock Data
// This file contains the actual lesson content for each module

import { ContentPage, QuizQuestion } from './courseData';

// Content for each module - keyed by module ID
export const moduleContent: Record<string, ContentPage[]> = {
  // ChatGPT Beginner
  'chatgpt-1-1': [
    {
      text: `**ChatGPT's Brain**

ChatGPT runs on something called a **Large Language Model (LLM)**. It sounds complicated, but don't worry!

Let's sort out how it works.

Basically, an LLM is like a super-smart librarian who has read every book, article, and webpage, capable of understanding and generating human-like text.`,
      image: '🧠'
    },
    {
      text: `**Why "Large"?**

Because LLMs are trained on **massive amounts of data**.

As a result, by learning patterns and structures in language, they can create coherent and contextually appropriate responses.

Think of it like learning a language by reading millions of books - you start to understand not just words, but context, tone, and meaning.`,
      image: '📚'
    },
    {
      text: `**How ChatGPT Thinks**

When you type a message, ChatGPT:

1. **Analyzes** your input word by word
2. **Predicts** the most likely next words
3. **Generates** a response based on patterns it learned

It doesn't "think" like humans, but it's incredibly good at producing helpful, relevant text.`,
      image: '💭'
    }
  ],
  'chatgpt-1-2': [
    {
      text: `**Your First Prompt**

A prompt is simply the text you type to ChatGPT. It's how you communicate what you want.

**Good prompts lead to good responses.**

Let's start with something simple: "Write a haiku about coding."`,
      image: '✍️'
    },
    {
      text: `**The Anatomy of a Good Prompt**

Great prompts usually include:

• **Clear intent** - What do you want?
• **Context** - Any background info needed
• **Format** - How should the response look?

Example: "Write a 3-paragraph email to my boss explaining why I need Friday off. Keep it professional but friendly."`,
      image: '📝'
    },
    {
      text: `**Practice Time!**

Try these starter prompts:

1. "Explain [topic] like I'm 5 years old"
2. "Give me 5 ideas for [something]"
3. "Help me write a [type of content] about [topic]"

The more specific you are, the better results you'll get!`,
      image: '🎯'
    }
  ],
  'chatgpt-1-3': [
    {
      text: `**Understanding AI Responses**

ChatGPT's responses aren't always perfect. Learning to evaluate and refine them is a key skill.

**Remember:** ChatGPT is a tool, not an oracle. Always verify important information.`,
      image: '🔍'
    },
    {
      text: `**When Responses Miss the Mark**

If the response isn't what you wanted:

• **Be more specific** in your follow-up
• **Provide examples** of what you're looking for
• **Ask for alternatives** - "Can you try a different approach?"

ChatGPT learns from the conversation, so keep refining!`,
      image: '🔄'
    }
  ],
  'chatgpt-1-4': [
    {
      text: `**Essential Prompt Techniques**

Let's learn some powerful techniques that will transform your ChatGPT experience.

**Technique 1: Role Assignment**

Tell ChatGPT to act as an expert:
"You are an experienced marketing consultant. Help me..."`,
      image: '🎭'
    },
    {
      text: `**Technique 2: Step-by-Step**

Ask for structured responses:
"Walk me through this step by step..."
"Break this down into simple steps..."

This helps with complex tasks and makes responses easier to follow.`,
      image: '📋'
    },
    {
      text: `**Technique 3: Examples**

Provide examples of what you want:
"Write a product description like this example: [your example]"

This is called **few-shot prompting** and dramatically improves results.`,
      image: '💡'
    }
  ],
  
  // DALL-E Beginner
  'dall-e-1-1': [
    {
      text: `**Welcome to DALL-E**

DALL-E is OpenAI's AI image generator. It creates images from text descriptions - like having an artist who can paint anything you describe!

**The magic:** You type words, DALL-E creates pictures.`,
      image: '🎨'
    },
    {
      text: `**How DALL-E Works**

DALL-E was trained on millions of images with descriptions. It learned:

• What objects look like
• How styles differ (cartoon vs realistic)
• Composition and lighting
• Artistic techniques

Now it can combine these learnings to create new images!`,
      image: '🖼️'
    }
  ],
  'dall-e-1-2': [
    {
      text: `**Your First Image Prompt**

Start simple! Try: "A cat sitting on a windowsill"

DALL-E will generate an image based on your description. The more details you add, the more specific the result.`,
      image: '🐱'
    },
    {
      text: `**Adding Details**

Compare these prompts:

**Basic:** "A house"
**Better:** "A cozy cottage with a thatched roof, surrounded by wildflowers, golden hour lighting"

Details like style, lighting, and mood make a huge difference!`,
      image: '🏠'
    }
  ],
  
  // Midjourney Beginner
  'midjourney-1-1': [
    {
      text: `**Introduction to Midjourney**

Midjourney is an AI art generator known for creating stunning, artistic images. It runs through Discord and has a unique aesthetic style.

**What makes it special:** Midjourney excels at creating beautiful, stylized artwork.`,
      image: '✨'
    },
    {
      text: `**Getting Started**

To use Midjourney:

1. Join the Midjourney Discord server
2. Go to a #newbies channel
3. Type /imagine followed by your prompt
4. Wait for your images to generate

It's that simple to start creating!`,
      image: '🚀'
    }
  ],
  
  // Claude Beginner
  'claude-1-1': [
    {
      text: `**Meet Claude**

Claude is Anthropic's AI assistant, known for being helpful, harmless, and honest.

**Key strengths:**
• Long context window (can read entire documents)
• Strong reasoning abilities
• Careful and thoughtful responses`,
      image: '🤖'
    },
    {
      text: `**Claude vs ChatGPT**

Both are powerful, but they have different strengths:

**Claude:** Better at long documents, more cautious
**ChatGPT:** Broader knowledge, more creative

Try both and see which fits your needs!`,
      image: '⚖️'
    }
  ],
  
  // DeepSeek Beginner
  'deepseek-1-1': [
    {
      text: `**Introducing DeepSeek**

DeepSeek is a powerful AI model that excels at coding and technical tasks.

**Why DeepSeek?**
• Strong coding abilities
• Good at math and logic
• Open-source friendly`,
      image: '🔍'
    }
  ],
  
  // Stable Diffusion Beginner
  'sd-1-1': [
    {
      text: `**Stable Diffusion Basics**

Stable Diffusion is an open-source image generation AI. Unlike DALL-E, you can run it on your own computer!

**Benefits:**
• Free to use
• Highly customizable
• Active community with models and tools`,
      image: '🎭'
    }
  ],
  
  // Gemini Beginner
  'gemini-1-1': [
    {
      text: `**Google's Gemini**

Gemini is Google's most capable AI model, designed to be multimodal - it can understand text, images, audio, and video.

**Unique features:**
• Integrated with Google services
• Strong at research tasks
• Multimodal understanding`,
      image: '💎'
    }
  ],
  
  // Jasper AI Beginner
  'jasper-1-1': [
    {
      text: `**Jasper AI for Marketing**

Jasper is an AI writing assistant specifically designed for marketing and business content.

**Best for:**
• Ad copy
• Blog posts
• Social media content
• Email marketing`,
      image: '📢'
    }
  ],
  
  // Lovable Beginner
  'lovable-1-1': [
    {
      text: `**Build Apps with Lovable**

Lovable is an AI tool that helps you build web applications by describing what you want in plain English.

**No coding required!** Just describe your app idea and Lovable creates it.`,
      image: '💜'
    }
  ]
};

// Quiz questions for each quiz module
export const moduleQuizzes: Record<string, QuizQuestion> = {
  'chatgpt-1-quiz': {
    question: 'What does LLM stand for?',
    options: [
      'Large Language Model',
      'Linear Learning Machine',
      'Language Logic Module',
      'Learning Language Method'
    ],
    correctIndex: 0,
    explanation: 'LLM stands for Large Language Model, which is the technology behind ChatGPT. These models are trained on massive amounts of text data.'
  },
  'chatgpt-2-quiz': {
    question: 'What is "few-shot prompting"?',
    options: [
      'Asking short questions',
      'Providing examples in your prompt',
      'Using minimal words',
      'Taking screenshots'
    ],
    correctIndex: 1,
    explanation: 'Few-shot prompting means providing examples in your prompt to help the AI understand what kind of output you want.'
  },
  'chatgpt-3-quiz': {
    question: 'What is the main benefit of Custom Instructions?',
    options: [
      'Faster responses',
      'Cheaper API calls',
      'Personalized behavior across conversations',
      'Better image generation'
    ],
    correctIndex: 2,
    explanation: 'Custom Instructions allow you to set preferences that persist across all your conversations, personalizing ChatGPT\'s behavior.'
  },
  'dall-e-1-quiz': {
    question: 'What makes a good DALL-E prompt?',
    options: [
      'Using only one word',
      'Adding specific details about style, lighting, and mood',
      'Writing in code',
      'Using emojis only'
    ],
    correctIndex: 1,
    explanation: 'Good DALL-E prompts include specific details about style, lighting, mood, and composition to get better results.'
  },
  'midjourney-1-quiz': {
    question: 'Where does Midjourney run?',
    options: [
      'A mobile app',
      'Discord',
      'A web browser only',
      'Microsoft Teams'
    ],
    correctIndex: 1,
    explanation: 'Midjourney operates through Discord. You use the /imagine command in Discord channels to generate images.'
  }
};

// Helper function to get content for a module
export function getModuleContent(moduleId: string): ContentPage[] {
  return moduleContent[moduleId] || [
    {
      text: `**Coming Soon**

This lesson content is being prepared. Check back soon for the full content!

In the meantime, explore other lessons in this course.`,
      image: '🚧'
    }
  ];
}

// Helper function to get quiz for a module
export function getModuleQuiz(moduleId: string): QuizQuestion | null {
  return moduleQuizzes[moduleId] || null;
}
