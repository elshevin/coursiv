#!/usr/bin/env node

/**
 * Mock Course Content Generator
 * 为所有课程模块生成完整的学习内容和 Quiz
 */

const fs = require('fs');
const path = require('path');

// 课程内容模板
const courseContentTemplates = {
  'chatgpt': {
    'chatgpt-1-1': {
      title: 'What is ChatGPT?',
      pages: [
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
      quiz: {
        question: 'What does LLM stand for?',
        options: [
          'Large Language Model',
          'Long Learning Method',
          'Linear Language Matrix',
          'Latest Learning Machine'
        ],
        correctIndex: 0,
        explanation: 'LLM stands for Large Language Model - a type of AI trained on massive amounts of text data.'
      }
    },
    'chatgpt-1-2': {
      title: 'Creating Your First Prompt',
      pages: [
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
      quiz: {
        question: 'What is the most important element of a good prompt?',
        options: [
          'Using complex language',
          'Being clear and specific about what you want',
          'Making it as long as possible',
          'Using technical jargon'
        ],
        correctIndex: 1,
        explanation: 'Clear and specific prompts lead to better results. ChatGPT responds better when you tell it exactly what you need.'
      }
    },
    'chatgpt-1-3': {
      title: 'Understanding Responses',
      pages: [
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
        },
        {
          text: `**Quality Checks**

Always ask yourself:

1. Is the information accurate?
2. Does it match what I asked for?
3. Is the tone appropriate?
4. Are there any obvious errors?

If something seems off, ask ChatGPT to revise or try a different approach.`,
          image: '✅'
        }
      ],
      quiz: {
        question: 'What should you do if ChatGPT\'s response isn\'t what you wanted?',
        options: [
          'Give up and try a different tool',
          'Accept it as is',
          'Refine your prompt and ask for a revision',
          'Report it as a bug'
        ],
        correctIndex: 2,
        explanation: 'ChatGPT learns from your feedback. Refining your prompt and asking for revisions is the best way to get better results.'
      }
    },
    'chatgpt-1-4': {
      title: 'Basic Prompt Techniques',
      pages: [
        {
          text: `**Technique 1: Role-Playing**

Give ChatGPT a role to play. This helps it understand the context and tone you want.

Example: "You are a professional copywriter. Write an engaging product description for a new coffee maker."

This technique works because ChatGPT adapts its response based on the role.`,
          image: '🎭'
        },
        {
          text: `**Technique 2: Breaking Down Complex Tasks**

Instead of asking for everything at once, break it into steps.

❌ Bad: "Write a complete marketing plan"
✅ Good: "First, list 5 target audience segments for a fitness app"

Then ask follow-up questions about each segment.`,
          image: '🔗'
        },
        {
          text: `**Technique 3: Providing Examples**

Show ChatGPT what you want by providing examples.

Example: "Write product descriptions in this style: [example 1] [example 2]"

ChatGPT will learn your preferred style and apply it.`,
          image: '📋'
        }
      ],
      quiz: {
        question: 'What is the role-playing technique in prompting?',
        options: [
          'Pretending to be ChatGPT',
          'Giving ChatGPT a role to play to set context',
          'Playing games with ChatGPT',
          'Using ChatGPT to write fiction'
        ],
        correctIndex: 1,
        explanation: 'Role-playing helps ChatGPT understand the context and tone you want. It\'s a powerful technique for getting better results.'
      }
    },
    'chatgpt-1-quiz': {
      title: 'Beginner Quiz',
      pages: [],
      quiz: {
        question: 'Which of these is the best ChatGPT prompt?',
        options: [
          'Write something',
          'Write a professional email to a client explaining a project delay. Keep it concise and apologetic.',
          'ChatGPT write',
          'Help me'
        ],
        correctIndex: 1,
        explanation: 'The best prompts are specific, include context, and clearly state what you want. The second option includes all these elements.'
      }
    }
  },
  'dalle': {
    'dalle-1-1': {
      title: 'Introduction to DALL-E',
      pages: [
        {
          text: `**What is DALL-E?**

DALL-E is an AI system that creates images from text descriptions. It's like having an artist who can bring your imagination to life instantly.

**How it works:**
1. You describe an image in words
2. DALL-E understands your description
3. It generates a unique image matching your description`,
          image: '🎨'
        },
        {
          text: `**Why DALL-E is Powerful**

• **Speed** - Creates images in seconds
• **Creativity** - Generates unique, original images
• **Accessibility** - No art skills needed
• **Versatility** - Works for any style or subject

Whether you need professional graphics, creative art, or product mockups, DALL-E can help.`,
          image: '⚡'
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
          image: '🚀'
        }
      ],
      quiz: {
        question: 'What does DALL-E do?',
        options: [
          'Writes text based on images',
          'Creates images from text descriptions',
          'Edits existing images',
          'Generates videos'
        ],
        correctIndex: 1,
        explanation: 'DALL-E is an AI system that generates images based on text descriptions you provide.'
      }
    },
    'dalle-1-2': {
      title: 'Your First Image',
      pages: [
        {
          text: `**Getting Started**

Creating your first DALL-E image is simple:

1. **Sign up** for OpenAI's DALL-E service
2. **Write a description** of what you want
3. **Generate** the image
4. **Refine** if needed

Let's try a simple example: "A cozy coffee shop with warm lighting and wooden furniture"`,
          image: '☕'
        },
        {
          text: `**Understanding the Generation Process**

When you submit a prompt, DALL-E:

1. **Analyzes** your text
2. **Understands** the concepts and relationships
3. **Generates** multiple image variations
4. **Displays** the results

You typically get 4 variations to choose from.`,
          image: '🔄'
        },
        {
          text: `**Tips for Your First Image**

• Be descriptive but not too long
• Include style hints (e.g., "oil painting", "photography")
• Mention mood or atmosphere
• Specify any important details

Example: "A serene mountain landscape at sunset, oil painting style, warm golden light"`,
          image: '💡'
        }
      ],
      quiz: {
        question: 'How many image variations does DALL-E typically generate?',
        options: [
          '1',
          '2',
          '4',
          '10'
        ],
        correctIndex: 2,
        explanation: 'DALL-E typically generates 4 image variations for each prompt, giving you options to choose from.'
      }
    }
  }
};

// 生成完整的内容文件
function generateCompleteContent() {
  console.log('🚀 Starting Mock Course Content Generation...\n');

  let contentCode = `// Auto-generated Mock Course Content
// This file contains complete lesson content and quizzes for all modules

import { ContentPage, QuizQuestion } from './courseData';

// Content for each module - keyed by module ID
export const moduleContent: Record<string, ContentPage[]> = {
`;

  let quizCode = `};

// Quiz questions for each module
export const moduleQuizzes: Record<string, QuizQuestion> = {
`;

  // 生成所有课程的内容
  for (const [courseId, modules] of Object.entries(courseContentTemplates)) {
    for (const [moduleId, moduleData] of Object.entries(modules)) {
      // 添加内容
      contentCode += `  '${moduleId}': ${JSON.stringify(moduleData.pages, null 2)},\n`;
      
      // 添加 Quiz
      if (moduleData.quiz) {
        quizCode += `  '${moduleId}': ${JSON.stringify(moduleData.quiz, null 2)},\n`;
      }
    }
  }

  // 添加默认内容
  contentCode += `  // Default content for modules without specific content
  'default': [
    {
      text: \`**Coming Soon**

This lesson content is being prepared. Check back soon for the full content!

In the meantime, explore other lessons in this course.\`,
      image: '🚧'
    }
  ]
`;

  quizCode += `};

// Helper function to get content for a module
export function getModuleContent(moduleId: string): ContentPage[] {
  return moduleContent[moduleId] || moduleContent['default'];
}

// Helper function to get quiz for a module
export function getModuleQuiz(moduleId: string): QuizQuestion | null {
  return moduleQuizzes[moduleId] || null;
}
`;

  const finalCode = contentCode + quizCode;

  // 写入文件
  const outputPath = path.join(process.cwd(), 'shared', 'courseContent.ts');
  fs.writeFileSync(outputPath, finalCode);

  console.log(`✅ Generated content for ${Object.keys(courseContentTemplates).length} courses`);
  console.log(`✅ Total modules with content: ${Object.values(courseContentTemplates).reduce((sum, course) => sum + Object.keys(course).length, 0)}`);
  console.log(`✅ File saved to: ${outputPath}\n`);
}

// 运行生成器
generateCompleteContent();
console.log('🎉 Mock course content generation complete!');
