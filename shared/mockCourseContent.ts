// Mock Course Content - Complete lesson content for testing
// This file provides comprehensive content for all course modules

import { ContentPage, QuizQuestion } from './courseData';

/**
 * Complete module content for all courses
 * Each module ID maps to an array of content pages
 */
export const completeMockContent: Record<string, ContentPage[]> = {
  // ============================================
  // ChatGPT Course Content
  // ============================================
  
  // Beginner Level
  'chatgpt-1-1': [
    {
      text: `**ChatGPT's Brain**

ChatGPT runs on something called a **Large Language Model (LLM)**. It sounds complicated, but don't worry!

Let's sort out how it works.

Basically, an LLM is like a super-smart librarian who has read every book, article, and webpage, capable of understanding and generating human-like text.`,
      image: '/images/course/thinking.png'
    },
    {
      text: `**Why "Large"?**

Because LLMs are trained on **massive amounts of data**.

As a result, by learning patterns and structures in language, they can create coherent and contextually appropriate responses.

Think of it like learning a language by reading millions of books - you start to understand not just words, but context, tone, and meaning.`,
      image: '/images/course/learning.png'
    },
    {
      text: `**How ChatGPT Thinks**

When you type a message, ChatGPT:

1. **Analyzes** your input word by word
2. **Predicts** the most likely next words
3. **Generates** a response based on patterns it learned

It doesn't "think" like humans, but it's incredibly good at producing helpful, relevant text.`,
      image: '/images/course/thinking.png'
    }
  ],
  
  'chatgpt-1-2': [
    {
      text: `**Your First Prompt**

A prompt is simply the text you type to ChatGPT. It's how you communicate what you want.

**Good prompts lead to good responses.**

Let's start with something simple: "Write a haiku about coding."`,
      image: '/images/course/practice.png'
    },
    {
      text: `**The Anatomy of a Good Prompt**

Great prompts usually include:

• **Clear intent** - What do you want?
• **Context** - Any background info needed
• **Format** - How should the response look?

Example: "Write a 3-paragraph email to my boss explaining why I need Friday off. Keep it professional but friendly."`,
      image: '/images/course/quiz.png'
    },
    {
      text: `**Practice Time!**

Try these starter prompts:

1. "Explain [topic] like I'm 5 years old"
2. "Give me 5 ideas for [something]"
3. "Help me write a [type of content] about [topic]"

The more specific you are, the better results you'll get!`,
      image: '/images/course/practice.png'
    }
  ],
  
  'chatgpt-1-3': [
    {
      text: `**Understanding AI Responses**

ChatGPT's responses aren't always perfect. Learning to evaluate and refine them is a key skill.

**Remember:** ChatGPT is a tool, not an oracle. Always verify important information.`,
      image: '/images/course/thinking.png'
    },
    {
      text: `**When Responses Miss the Mark**

If the response isn't what you wanted:

• **Be more specific** in your follow-up
• **Provide examples** of what you're looking for
• **Ask for alternatives** - "Can you try a different approach?"

ChatGPT learns from the conversation, so keep refining!`,
      image: '/images/course/practice.png'
    },
    {
      text: `**Quality Checks**

Always ask yourself:

1. Is the information accurate?
2. Does it match what I asked for?
3. Is the tone appropriate?
4. Are there any obvious errors?

If something seems off, ask ChatGPT to revise or try a different approach.`,
      image: '/images/course/success.png'
    }
  ],
  
  'chatgpt-1-4': [
    {
      text: `**Technique 1: Role-Playing**

Give ChatGPT a role to play. This helps it understand the context and tone you want.

Example: "You are a professional copywriter. Write an engaging product description for a new coffee maker."

This technique works because ChatGPT adapts its response based on the role.`,
      image: '/images/course/learning.png'
    },
    {
      text: `**Technique 2: Breaking Down Complex Tasks**

Instead of asking for everything at once, break it into steps.

❌ Bad: "Write a complete marketing plan"
✅ Good: "First, list 5 target audience segments for a fitness app"

Then ask follow-up questions about each segment.`,
      image: '/images/course/thinking.png'
    },
    {
      text: `**Technique 3: Providing Examples**

Show ChatGPT what you want by providing examples.

Example: "Write product descriptions in this style: [example 1] [example 2]"

ChatGPT will learn your preferred style and apply it.`,
      image: '/images/course/learning.png'
    }
  ],
  
  // ============================================
  // DALL-E Course Content
  // ============================================
  
  'dalle-1-1': [
    {
      text: `**What is DALL-E?**

DALL-E is an AI system that creates images from text descriptions. It's like having an artist who can bring your imagination to life instantly.

**How it works:**
1. You describe an image in words
2. DALL-E understands your description
3. It generates a unique image matching your description`,
      image: '/images/course/practice.png'
    },
    {
      text: `**Why DALL-E is Powerful**

• **Speed** - Creates images in seconds
• **Creativity** - Generates unique, original images
• **Accessibility** - No art skills needed
• **Versatility** - Works for any style or subject

Whether you need professional graphics, creative art, or product mockups, DALL-E can help.`,
      image: '/images/course/success.png'
    },
    {
      text: `**Real-World Applications**

- Marketing and advertising
- Product design and prototyping
- Social media content
- Book illustrations
- Website design
- Concept art for games and films

The possibilities are endless!`,
      image: '/images/course/success.png'
    }
  ],
  
  'dalle-1-2': [
    {
      text: `**Getting Started**

Creating your first DALL-E image is simple:

1. **Sign up** for OpenAI's DALL-E service
2. **Write a description** of what you want
3. **Generate** the image
4. **Refine** if needed

Let's try a simple example: "A cozy coffee shop with warm lighting and wooden furniture"`,
      image: '/images/course/learning.png'
    },
    {
      text: `**Understanding the Generation Process**

When you submit a prompt, DALL-E:

1. **Analyzes** your text
2. **Understands** the concepts and relationships
3. **Generates** multiple image variations
4. **Displays** the results

You typically get 4 variations to choose from.`,
      image: '/images/course/practice.png'
    },
    {
      text: `**Tips for Your First Image**

• Be descriptive but not too long
• Include style hints (e.g., "oil painting", "photography")
• Mention mood or atmosphere
• Specify any important details

Example: "A serene mountain landscape at sunset, oil painting style, warm golden light"`,
      image: '/images/course/thinking.png'
    }
  ],
  
  'dalle-1-3': [
    {
      text: `**Understanding Prompts for Images**

Image generation prompts are different from text prompts. They need to be visual and descriptive.

**Key elements:**
1. **Subject** - What's the main thing?
2. **Style** - What art style?
3. **Mood** - What feeling?
4. **Details** - What specifics matter?`,
      image: '/images/course/practice.png'
    },
    {
      text: `**Example Prompts**

❌ Bad: "A cat"
✅ Good: "A fluffy orange tabby cat sitting on a windowsill, sunlight streaming in, photorealistic, warm colors"

❌ Bad: "A building"
✅ Good: "A modern glass skyscraper at night, neon lights reflecting, cyberpunk style, dramatic lighting"

The more details, the better the result!`,
      image: '/images/course/practice.png'
    }
  ],
  
  // ============================================
  // Midjourney Course Content
  // ============================================
  
  'mj-1-1': [
    {
      text: `**What is Midjourney?**

Midjourney is an AI image generation tool that creates stunning artwork from text descriptions.

**Key differences from DALL-E:**
- Runs on Discord
- Known for artistic, high-quality images
- Strong community features
- Excellent for creative professionals`,
      image: '/images/course/practice.png'
    },
    {
      text: `**Why Choose Midjourney?**

• **Art quality** - Produces stunning artistic results
• **Community** - Active community sharing and learning
• **Customization** - Extensive parameters for control
• **Speed** - Fast image generation
• **Versatility** - Great for all art styles`,
      image: '/images/course/success.png'
    }
  ],
  
  'mj-1-2': [
    {
      text: `**Setting Up Discord**

To use Midjourney, you need Discord:

1. **Create a Discord account** (if you don't have one)
2. **Join the Midjourney server**
3. **Verify your account**
4. **Start creating!**

Discord is free and easy to set up.`,
      image: '/images/course/practice.png'
    },
    {
      text: `**Navigating the Midjourney Server**

The Midjourney Discord has:

- **#general** - Main chat
- **#announcements** - Updates
- **#newbies** - For beginners
- **Private channels** - For your creations

Start in #newbies to practice without overwhelming the main channels.`,
      image: '/images/course/quiz.png'
    }
  ],
  
  'mj-1-3': [
    {
      text: `**Basic Commands**

The most important Midjourney command is:

**/imagine** - Creates an image from your description

Example: "/imagine a majestic eagle flying over mountains"

That's it! Type the command, add your description, and Midjourney creates 4 variations.`,
      image: '/images/course/success.png'
    },
    {
      text: `**Understanding the Output**

After you use /imagine, Midjourney shows:

1. **4 image variations** - Different interpretations
2. **Buttons below** - U1-U4 (upscale), V1-V4 (variations)
3. **Refresh button** - Generate new variations

U = Upscale (make bigger and better)
V = Variations (create similar images)`,
      image: '/images/course/practice.png'
    }
  ],
  
  // ============================================
  // Claude Course Content
  // ============================================
  
  'claude-1-1': [
    {
      text: `**Meet Claude**

Claude is an AI assistant made by Anthropic. It's known for being helpful, harmless, and honest.

**What makes Claude different:**
- Strong reasoning abilities
- Good at analysis and writing
- Transparent about limitations
- Focuses on safety`,
      image: '/images/course/practice.png'
    },
    {
      text: `**Claude's Strengths**

Claude excels at:

• **Writing** - Essays, stories, code
• **Analysis** - Understanding complex topics
• **Reasoning** - Working through problems
• **Coding** - Debugging and explaining code
• **Research** - Synthesizing information`,
      image: '/images/course/success.png'
    }
  ],
  
  'claude-1-2': [
    {
      text: `**Starting a Conversation**

Using Claude is straightforward:

1. **Go to Claude.ai**
2. **Sign up or log in**
3. **Start typing your question**
4. **Claude responds**

You can have multi-turn conversations where Claude remembers context.`,
      image: '/images/course/thinking.png'
    },
    {
      text: `**Effective Prompts for Claude**

Claude works best with:

• **Clear questions** - Be specific
• **Context** - Provide background
• **Format requests** - Ask for specific output format
• **Examples** - Show what you want

Example: "Explain machine learning in 3 paragraphs for someone with no technical background"`,
      image: '/images/course/practice.png'
    }
  ],
  
  'claude-1-3': [
    {
      text: `**Analysis Tasks with Claude**

Claude is excellent at analyzing:

• **Documents** - Summarize and extract key points
• **Code** - Review and debug
• **Data** - Find patterns and insights
• **Text** - Evaluate tone and clarity

Just paste your content and ask Claude to analyze it.`,
      image: '/images/course/thinking.png'
    },
    {
      text: `**Example Analysis Prompts**

"Analyze this essay and provide feedback on clarity and argument strength"

"Review this code and suggest improvements for performance"

"Summarize this research paper in bullet points"

"What are the main themes in this text?"

Claude provides detailed, thoughtful analysis.`,
      image: '/images/course/quiz.png'
    }
  ],
  
  // ============================================
  // Gemini Course Content
  // ============================================
  
  'gemini-1-1': [
    {
      text: `**Introduction to Gemini**

Gemini is Google's multimodal AI model. It can understand and generate text, images, and code.

**Key capabilities:**
- Text generation
- Image understanding
- Code generation
- Multimodal reasoning`,
      image: '/images/course/success.png'
    },
    {
      text: `**Why Gemini is Special**

• **Multimodal** - Works with text, images, and code
• **Integration** - Connects with Google services
• **Performance** - Fast and efficient
• **Accessibility** - Available through various interfaces`,
      image: '/images/course/success.png'
    }
  ],
  
  'gemini-1-2': [
    {
      text: `**Text Generation with Gemini**

Gemini can generate:

• **Content** - Articles, stories, emails
• **Code** - Multiple programming languages
• **Summaries** - Condensed versions of long text
• **Ideas** - Brainstorming and creative suggestions

Just describe what you need, and Gemini creates it.`,
      image: '/images/course/practice.png'
    },
    {
      text: `**Example Prompts**

"Write a professional email requesting a meeting"

"Generate 5 creative blog post ideas about AI"

"Write Python code to sort a list"

"Create a product description for a new smartphone"

Gemini handles all these tasks effectively.`,
      image: '/images/course/thinking.png'
    }
  ],
  
  'gemini-1-3': [
    {
      text: `**Image Understanding**

Gemini can analyze images and answer questions about them.

**What it can do:**
- Describe images in detail
- Answer questions about image content
- Extract text from images
- Analyze visual elements`,
      image: '/images/course/practice.png'
    },
    {
      text: `**Using Image Analysis**

To use Gemini's image capabilities:

1. **Upload an image**
2. **Ask a question** about it
3. **Gemini analyzes** and responds

Example: "What's in this image?" or "Extract all text from this screenshot"

Perfect for research, documentation, and analysis.`,
      image: '/images/course/practice.png'
    }
  ],
  
  // ============================================
  // Perplexity Course Content
  // ============================================
  
  'perplexity-1-1': [
    {
      text: `**What is Perplexity?**

Perplexity is an AI-powered search engine that provides sourced answers to your questions.

**How it works:**
1. You ask a question
2. Perplexity searches the web
3. It synthesizes information from sources
4. Provides a comprehensive answer with citations`,
      image: '/images/course/thinking.png'
    },
    {
      text: `**Why Use Perplexity?**

• **Sourced answers** - See where information comes from
• **Current information** - Access to recent web data
• **Comprehensive** - Synthesizes multiple sources
• **Conversational** - Ask follow-up questions`,
      image: '/images/course/learning.png'
    }
  ],
  
  'perplexity-1-2': [
    {
      text: `**Asking Effective Questions**

Perplexity works best with:

• **Specific questions** - Not vague queries
• **Context** - Background information helps
• **Clear intent** - What do you want to know?

Example: "What are the latest developments in quantum computing in 2024?"

Perplexity will search and synthesize current information.`,
      image: '/images/course/quiz.png'
    },
    {
      text: `**Understanding the Results**

Perplexity shows:

1. **Comprehensive answer** - Synthesized from sources
2. **Source citations** - Links to original articles
3. **Related questions** - Suggested follow-ups
4. **Web results** - Additional resources

You can verify information by checking the sources.`,
      image: '/images/course/success.png'
    }
  ],
};

/**
 * Complete mock quizzes for all modules
 */
export const completeMockQuizzes: Record<string, QuizQuestion> = {
  // ChatGPT Quizzes
  'chatgpt-1-1': {
    question: 'What does LLM stand for?',
    options: [
      'Large Language Model',
      'Long Learning Method',
      'Linear Language Matrix',
      'Latest Learning Machine'
    ],
    correctIndex: 0,
    explanation: 'LLM stands for Large Language Model - a type of AI trained on massive amounts of text data.'
  },
  
  'chatgpt-1-2': {
    question: 'What is the most important element of a good prompt?',
    options: [
      'Using complex language',
      'Being clear and specific about what you want',
      'Making it as long as possible',
      'Using technical jargon'
    ],
    correctIndex: 1,
    explanation: 'Clear and specific prompts lead to better results. ChatGPT responds better when you tell it exactly what you need.'
  },
  
  'chatgpt-1-3': {
    question: 'What should you do if ChatGPT\'s response isn\'t what you wanted?',
    options: [
      'Give up and try a different tool',
      'Accept it as is',
      'Refine your prompt and ask for a revision',
      'Report it as a bug'
    ],
    correctIndex: 2,
    explanation: 'ChatGPT learns from your feedback. Refining your prompt and asking for revisions is the best way to get better results.'
  },
  
  'chatgpt-1-4': {
    question: 'What is the role-playing technique in prompting?',
    options: [
      'Pretending to be ChatGPT',
      'Giving ChatGPT a role to play to set context',
      'Playing games with ChatGPT',
      'Using ChatGPT to write fiction'
    ],
    correctIndex: 1,
    explanation: 'Role-playing helps ChatGPT understand the context and tone you want. It\'s a powerful technique for getting better results.'
  },
  
  'chatgpt-1-quiz': {
    question: 'Which of these is the best ChatGPT prompt?',
    options: [
      'Write something',
      'Write a professional email to a client explaining a project delay. Keep it concise and apologetic.',
      'ChatGPT write',
      'Help me'
    ],
    correctIndex: 1,
    explanation: 'The best prompts are specific, include context, and clearly state what you want. The second option includes all these elements.'
  },
  
  // DALL-E Quizzes
  'dalle-1-1': {
    question: 'What does DALL-E do?',
    options: [
      'Writes text based on images',
      'Creates images from text descriptions',
      'Edits existing images',
      'Generates videos'
    ],
    correctIndex: 1,
    explanation: 'DALL-E is an AI system that generates images based on text descriptions you provide.'
  },
  
  'dalle-1-2': {
    question: 'How many image variations does DALL-E typically generate?',
    options: [
      '1',
      '2',
      '4',
      '10'
    ],
    correctIndex: 2,
    explanation: 'DALL-E typically generates 4 image variations for each prompt, giving you options to choose from.'
  },
  
  'dalle-1-3': {
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
  
  // Midjourney Quizzes
  'mj-1-1': {
    question: 'Where does Midjourney run?',
    options: [
      'A mobile app',
      'Discord',
      'A web browser only',
      'Microsoft Teams'
    ],
    correctIndex: 1,
    explanation: 'Midjourney operates through Discord. You use the /imagine command in Discord channels to generate images.'
  },
  
  'mj-1-2': {
    question: 'What is the main Midjourney command?',
    options: [
      '/create',
      '/generate',
      '/imagine',
      '/draw'
    ],
    correctIndex: 2,
    explanation: 'The /imagine command is the main Midjourney command used to generate images from text descriptions.'
  },
  
  'mj-1-3': {
    question: 'What does the U button do in Midjourney?',
    options: [
      'Undo the image',
      'Upload the image',
      'Upscale the image',
      'Update the image'
    ],
    correctIndex: 2,
    explanation: 'U stands for Upscale - it enlarges and enhances the quality of the selected image.'
  },
  
  // Claude Quizzes
  'claude-1-1': {
    question: 'Who created Claude?',
    options: [
      'OpenAI',
      'Google',
      'Anthropic',
      'Meta'
    ],
    correctIndex: 2,
    explanation: 'Claude is an AI assistant created by Anthropic, known for being helpful, harmless, and honest.'
  },
  
  'claude-1-2': {
    question: 'What is Claude best at?',
    options: [
      'Image generation only',
      'Writing, analysis, reasoning, and coding',
      'Playing games',
      'Video creation'
    ],
    correctIndex: 1,
    explanation: 'Claude excels at writing, analysis, reasoning, and coding tasks, among other capabilities.'
  },
  
  'claude-1-3': {
    question: 'What can Claude analyze?',
    options: [
      'Only text documents',
      'Documents, code, data, and text',
      'Only images',
      'Only videos'
    ],
    correctIndex: 1,
    explanation: 'Claude can analyze documents, code, data, and text, providing detailed insights and feedback.'
  },
  
  // Gemini Quizzes
  'gemini-1-1': {
    question: 'What is Gemini known for?',
    options: [
      'Text generation only',
      'Image generation only',
      'Multimodal capabilities (text, images, code)',
      'Video editing'
    ],
    correctIndex: 2,
    explanation: 'Gemini is Google\'s multimodal AI that can work with text, images, and code.'
  },
  
  'gemini-1-2': {
    question: 'What can Gemini generate?',
    options: [
      'Only text',
      'Only code',
      'Text, code, summaries, and ideas',
      'Only images'
    ],
    correctIndex: 2,
    explanation: 'Gemini can generate text, code, summaries, creative ideas, and more.'
  },
  
  'gemini-1-3': {
    question: 'What is one of Gemini\'s unique features?',
    options: [
      'It can only work offline',
      'It can analyze and understand images',
      'It cannot generate code',
      'It requires special hardware'
    ],
    correctIndex: 1,
    explanation: 'Gemini can analyze and understand images, extracting information and answering questions about visual content.'
  },
  
  // Perplexity Quizzes
  'perplexity-1-1': {
    question: 'What is Perplexity?',
    options: [
      'A text editor',
      'An AI-powered search engine',
      'A video platform',
      'A coding tool'
    ],
    correctIndex: 1,
    explanation: 'Perplexity is an AI-powered search engine that provides sourced answers to your questions.'
  },
  
  'perplexity-1-2': {
    question: 'What does Perplexity provide with its answers?',
    options: [
      'Only the answer',
      'Answer with source citations',
      'Only links',
      'Video results'
    ],
    correctIndex: 1,
    explanation: 'Perplexity provides comprehensive answers with source citations, so you can verify the information.'
  },
};

/**
 * Helper function to get complete content for a module
 */
export function getCompleteMockContent(moduleId: string): ContentPage[] {
  return completeMockContent[moduleId] || [
    {
      text: `**Module Content**

This module content is available. Click "Continue" to proceed through the lesson.`,
      image: '/images/course/learning.png'
    }
  ];
}

/**
 * Helper function to get complete quiz for a module
 */
export function getCompleteMockQuiz(moduleId: string): QuizQuestion | null {
  return completeMockQuizzes[moduleId] || null;
}
