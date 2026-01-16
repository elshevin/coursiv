/**
 * ChatGPT Course - Complete Lesson Data
 * 
 * Course Structure:
 * - Level 1 (Beginner): 5 modules (chatgpt-1-1 to chatgpt-1-quiz)
 * - Level 2 (Intermediate): 6 modules (chatgpt-2-1 to chatgpt-2-quiz)
 * - Level 3 (Advanced): 5 modules (chatgpt-3-1 to chatgpt-3-quiz)
 */

import {
  CoursivLesson,
  createTextBlock,
  createPlaygroundBlock,
  createQuizBlock,
  createDiscoveryBlock,
  createFeedbackBlock,
} from '../courseContentTypes';

// ============================================
// LEVEL 1: BEGINNER
// ============================================

export const chatgptLesson1_1: CoursivLesson = {
  id: 'chatgpt-1-1',
  courseId: 'chatgpt',
  title: "ChatGPT's Brain",
  subtitle: 'Understanding how ChatGPT thinks',
  blocks: [
    createTextBlock(
      "What is ChatGPT?",
      "🧠",
      [
        "ChatGPT is an AI language model developed by OpenAI. It's designed to understand and generate human-like text based on the input it receives.",
        "Think of it as a very sophisticated autocomplete system that has read billions of pages of text and learned patterns in human language.",
      ]
    ),
    createTextBlock(
      "How Does It Work?",
      "⚙️",
      [
        "ChatGPT uses a technology called **transformers** to process and generate text. It doesn't actually \"think\" like humans do - instead, it predicts the most likely next words based on patterns it learned during training.",
        "When you send a message, ChatGPT analyzes the context and generates a response word by word, always choosing what seems most appropriate based on its training.",
      ]
    ),
    createPlaygroundBlock(
      'Your First Prompt',
      'Send a simple question to ChatGPT. Choose the best way to ask for help with dinner.',
      { name: 'ChatGPT', icon: '💬' },
      'Help me [action] for dinner tonight.',
      [
        { id: 'action', placeholder: 'action', correctAnswer: 'order a pizza' }
      ],
      ['order a pizza'],
      'Think about what action you want ChatGPT to help you with. The most direct request usually works best.',
      { title: 'Great!', message: "You've sent your first prompt to ChatGPT!" },
      { title: 'Incorrect', message: 'Try choosing a more specific action.' },
      '/images/course/chatgpt/chatgpt-complete-prompt.png',
      'ChatGPT works best when you give it clear, specific instructions!',
      `I'd be happy to help you order a pizza for dinner! Here are some popular options near you:

**1. Domino's Pizza** ⭐ 4.2
- Fast delivery (25-35 min)
- Great deals on medium pizzas

**2. Pizza Hut** ⭐ 4.0
- Pan pizza specialty
- Family meal deals available

**3. Papa John's** ⭐ 4.3
- Fresh ingredients
- Garlic sauce included

Would you like me to help you place an order? Just let me know your preferred toppings and any dietary restrictions!`
    , true),
    createFeedbackBlock(
      'Was this exercise helpful?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'First Discovery',
      'ChatGPT is a language model that predicts text based on patterns learned from training data.'
    ),
  ],
};

export const chatgptLesson1_2: CoursivLesson = {
  id: 'chatgpt-1-2',
  courseId: 'chatgpt',
  title: 'Creating Your First Prompt',
  subtitle: 'Learn the basics of prompt writing',
  blocks: [
    createTextBlock(
      "The Art of Prompting",
      "✍️",
      [
        "A **prompt** is simply the text you send to ChatGPT. The quality of your prompt directly affects the quality of the response you'll receive.",
        "Good prompts are clear, specific, and provide enough context for ChatGPT to understand what you need.",
      ]
    ),
    createTextBlock(
      "Key Elements of a Good Prompt",
      "🔑",
      [
        "**1. Be Specific**: Instead of 'Tell me about dogs', try 'Explain the key differences between Golden Retrievers and Labrador Retrievers'.",
        "**2. Provide Context**: Tell ChatGPT who you are, what you're trying to accomplish, and any constraints you have.",
        "**3. Set the Format**: If you want a list, bullet points, or a specific structure, ask for it explicitly.",
      ]
    ),
    createPlaygroundBlock(
      'Building a Complete Prompt',
      'Create a well-structured prompt by filling in the blanks.',
      { name: 'ChatGPT', icon: '💬' },
      'I am a [role]. Please help me [task] in a [format] format.',
      [
        { id: 'role', placeholder: 'role', correctAnswer: 'student' },
        { id: 'task', placeholder: 'task', correctAnswer: 'summarize this article' },
        { id: 'format', placeholder: 'format', correctAnswer: 'bullet point' }
      ],
      ['student', 'summarize this article', 'bullet point'],
      'Think about who you are, what you need, and how you want the output formatted.',
      { title: 'Perfect!', message: "You've created a well-structured prompt!" },
      { title: 'Try Again', message: 'Make sure each part of the prompt makes sense together.' },
      '/images/course/chatgpt/chatgpt-complete-prompt.png',
      'Always include your role, task, and desired format for best results!',
      `Of course! As a student, I'd be happy to help you summarize articles in bullet point format. Here's how I'll structure the summary:

**Article Summary**

• **Main Topic**: [Key subject of the article]
• **Key Points**:
  - First major argument or finding
  - Second important detail
  - Third significant point
• **Supporting Evidence**: Brief mention of data or examples
• **Conclusion**: Main takeaway or recommendation

Just paste the article you'd like me to summarize, and I'll create a clear, organized bullet-point summary for you!`
    , true),
    createFeedbackBlock(
      'How clear was this lesson?',
      ['Very clear', 'Somewhat clear', 'Confusing'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Prompt Structure',
      'The best prompts include: your role, the specific task, and the desired output format.'
    ),
  ],
};

export const chatgptLesson1_3: CoursivLesson = {
  id: 'chatgpt-1-3',
  courseId: 'chatgpt',
  title: 'Understanding Responses',
  subtitle: 'How to interpret and refine AI responses',
  blocks: [
    createTextBlock(
      "Reading AI Responses",
      "📖",
      [
        "ChatGPT's responses are generated based on patterns in its training data. This means responses can be helpful, but they're not always perfect.",
        "Learning to evaluate and refine responses is a crucial skill for getting the most out of AI assistants.",
      ]
    ),
    createTextBlock(
      "When to Ask for Clarification",
      "🔍",
      [
        "If a response is too vague, ask ChatGPT to be more specific or provide examples.",
        "If a response is too long, ask for a shorter summary or the key points only.",
        "If something seems incorrect, ask ChatGPT to verify or provide sources.",
      ]
    ),
    createPlaygroundBlock(
      'Refining a Response',
      'Practice asking ChatGPT to improve its response.',
      { name: 'ChatGPT', icon: '💬' },
      'That was helpful, but can you make it [modifier] and add [addition]?',
      [
        { id: 'modifier', placeholder: 'modifier', correctAnswer: 'shorter' },
        { id: 'addition', placeholder: 'addition', correctAnswer: 'examples' }
      ],
      ['shorter', 'examples'],
      'Think about what would make the response more useful for you.',
      { title: 'Excellent!', message: "You've learned to refine AI responses!" },
      { title: 'Not quite', message: 'Try different combinations to improve the response.' },
      '/images/course/chatgpt/chatgpt-refine.png',
      'Don\'t hesitate to ask ChatGPT to modify its responses - iteration is key!',
      `Absolutely! Here's a shorter version with examples:

**Key Points:**
- Be specific in your requests
- Provide context about your situation
- Specify your desired format

**Examples:**
1. ❌ "Tell me about marketing"
   ✅ "Give me 3 social media marketing tips for small businesses"

2. ❌ "Help with my email"
   ✅ "Write a professional follow-up email after a job interview"

Need more examples for any specific use case?`
    , true),
    createFeedbackBlock(
      'Did this help you understand response refinement?',
      ['Yes, very helpful', 'Somewhat helpful', 'Need more practice'],
      0
    ),
    createDiscoveryBlock(
      3,
      'Iteration is Key',
      'The best results come from refining your prompts based on the responses you receive.'
    ),
  ],
};

export const chatgptLesson1_4: CoursivLesson = {
  id: 'chatgpt-1-4',
  courseId: 'chatgpt',
  title: 'Basic Prompt Techniques',
  subtitle: 'Essential techniques for better results',
  blocks: [
    createTextBlock(
      "The Power of Context",
      "🎯",
      [
        "Context is everything when working with ChatGPT. The more relevant information you provide, the better the response will be.",
        "Think of it like talking to a new colleague - they need background information to help you effectively.",
      ]
    ),
    createTextBlock(
      "Common Techniques",
      "🛠️",
      [
        "**Role Assignment**: Tell ChatGPT to act as an expert (e.g., 'Act as a marketing expert')",
        "**Step-by-Step**: Ask ChatGPT to break down complex tasks into steps",
        "**Examples**: Provide examples of what you want to help guide the response",
      ]
    ),
    createPlaygroundBlock(
      'Using Role Assignment',
      'Practice assigning a role to get expert-level responses.',
      { name: 'ChatGPT', icon: '💬' },
      'Act as a [role] and help me [task]. Consider [consideration].',
      [
        { id: 'role', placeholder: 'role', correctAnswer: 'financial advisor' },
        { id: 'task', placeholder: 'task', correctAnswer: 'create a budget' },
        { id: 'consideration', placeholder: 'consideration', correctAnswer: 'my income level' }
      ],
      ['financial advisor', 'create a budget', 'my income level'],
      'Choose a role that matches the expertise you need for your task.',
      { title: 'Well done!', message: "You've mastered role assignment!" },
      { title: 'Try again', message: 'Make sure the role matches the task you need help with.' },
      '/images/course/chatgpt/chatgpt-role.png',
      'Role assignment helps ChatGPT provide more focused, expert-level responses.',
      `As your financial advisor, I'd be happy to help you create a budget tailored to your income level. Here's a personalized approach:

**Step 1: Income Assessment**
First, let's categorize your monthly income:
- Primary salary/wages
- Side income (if any)
- Other sources

**Step 2: The 50/30/20 Rule** (Adjusted for your level)
| Category | Percentage | Purpose |
|----------|------------|---------|
| Needs | 50% | Rent, utilities, groceries |
| Wants | 30% | Entertainment, dining out |
| Savings | 20% | Emergency fund, investments |

**Step 3: Tracking Tools**
I recommend starting with a simple spreadsheet or apps like Mint or YNAB.

Would you like me to create a specific budget template based on your actual income figures?`
    , true),
    createFeedbackBlock(
      'How useful was the role assignment technique?',
      ['Very useful', 'Somewhat useful', 'Not useful'],
      0
    ),
    createDiscoveryBlock(
      4,
      'Role Assignment',
      'Assigning a specific role to ChatGPT helps it provide more focused and expert responses.'
    ),
    createQuizBlock(
      'Which of the following is the BEST example of a well-structured prompt?',
      [
        'Tell me about history',
        'Act as a history teacher and explain the causes of World War I in 3 bullet points',
        'History please',
        'What happened in the past?'
      ],
      1,
      'A well-structured prompt includes a role (history teacher), a specific task (explain causes of WWI), and a format (3 bullet points).',
      'Think about which prompt includes role, task, and format specifications.'
    ),
  ],
};

export const chatgptLesson1_Quiz: CoursivLesson = {
  id: 'chatgpt-1-quiz',
  courseId: 'chatgpt',
  title: 'Beginner Quiz',
  subtitle: 'Test your ChatGPT knowledge',
  blocks: [
    createTextBlock(
      "Time to Test Your Knowledge!",
      "📝",
      [
        "You've completed the beginner level! Let's see how much you've learned about ChatGPT basics.",
        "Answer the following questions to unlock the Intermediate level.",
      ]
    ),
    createQuizBlock(
      'What is ChatGPT primarily designed to do?',
      [
        'Generate images from text',
        'Understand and generate human-like text',
        'Play video games',
        'Edit videos'
      ],
      1,
      'ChatGPT is a language model designed to understand and generate human-like text based on input.',
      'Think about what ChatGPT does when you send it a message.'
    ),
    createQuizBlock(
      'Which element is NOT typically part of a good prompt?',
      [
        'Specific task description',
        'Context about your situation',
        'Random unrelated information',
        'Desired output format'
      ],
      2,
      'Good prompts include specific tasks, context, and format - but not random unrelated information.',
      'Consider what makes a prompt clear and effective.'
    ),
    createQuizBlock(
      'What should you do if ChatGPT\'s response is too vague?',
      [
        'Give up and try a different AI',
        'Ask for more specific details or examples',
        'Accept the vague response',
        'Restart your computer'
      ],
      1,
      'Iteration is key - ask ChatGPT to be more specific or provide examples when responses are vague.',
      'Remember the lesson about refining responses.'
    ),
    createDiscoveryBlock(
      5,
      'Level Complete!',
      'Congratulations! You\'ve mastered the basics of ChatGPT. Ready for intermediate techniques?'
    ),
  ],
};

// ============================================
// LEVEL 2: INTERMEDIATE
// ============================================

export const chatgptLesson2_1: CoursivLesson = {
  id: 'chatgpt-2-1',
  courseId: 'chatgpt',
  title: 'Role-Based Prompting',
  subtitle: 'Using personas for better responses',
  blocks: [
    createTextBlock(
      "The Power of Personas",
      "🎭",
      [
        "Role-based prompting is one of the most powerful techniques for getting high-quality responses from ChatGPT.",
        "By asking ChatGPT to assume a specific role or persona, you tap into specialized knowledge patterns from its training.",
      ]
    ),
    createTextBlock(
      "Effective Role Definitions",
      "📋",
      [
        "**Be Specific**: 'Act as a senior software engineer with 10 years of Python experience' is better than 'Act as a programmer'.",
        "**Add Context**: Include the role's perspective, expertise level, and communication style.",
        "**Set Boundaries**: Define what the role should and shouldn't do.",
      ]
    ),
    createPlaygroundBlock(
      'Creating an Expert Persona',
      'Define a detailed role for ChatGPT to assume.',
      { name: 'ChatGPT', icon: '💬' },
      'You are a [expertise] with [experience]. Your communication style is [style]. Help me with [task].',
      [
        { id: 'expertise', placeholder: 'expertise', correctAnswer: 'UX designer' },
        { id: 'experience', placeholder: 'experience', correctAnswer: '8 years of experience' },
        { id: 'style', placeholder: 'style', correctAnswer: 'friendly and practical' },
        { id: 'task', placeholder: 'task', correctAnswer: 'improving my app design' }
      ],
      ['UX designer', '8 years of experience', 'friendly and practical', 'improving my app design'],
      'Think about what expertise you need and how you want the expert to communicate.',
      { title: 'Excellent!', message: "You've created a detailed expert persona!" },
      { title: 'Try again', message: 'Make sure all parts of the persona work together.' },
      '/images/course/chatgpt/chatgpt-persona.png',
      'Detailed personas lead to more focused and relevant responses.',
      `Hello! I'm excited to help you improve your app design. With 8 years of UX experience, I've seen what works and what doesn't.

**My Approach:**
I'll give you practical, actionable advice that you can implement right away. No jargon, just clear guidance.

**To Get Started, I'd Love to Know:**
1. 📱 What type of app is it? (Mobile/Web/Both)
2. 🎯 Who are your target users?
3. 😤 What's the biggest pain point you've noticed?

**Quick Wins I Often Recommend:**
- Simplify your navigation (3-click rule)
- Increase touch target sizes (min 44x44px)
- Add visual feedback for all interactions
- Reduce cognitive load with progressive disclosure

Share a screenshot or describe your current design, and I'll give you specific, prioritized improvements!`
    , true),
    createFeedbackBlock(
      'How effective do you find role-based prompting?',
      ['Very effective', 'Somewhat effective', 'Need more practice'],
      0
    ),
    createDiscoveryBlock(
      6,
      'Persona Power',
      'Detailed personas with expertise, experience, and communication style produce the best results.'
    ),
  ],
};

export const chatgptLesson2_2: CoursivLesson = {
  id: 'chatgpt-2-2',
  courseId: 'chatgpt',
  title: 'Chain of Thought',
  subtitle: 'Breaking down complex problems',
  blocks: [
    createTextBlock(
      "What is Chain of Thought?",
      "🔗",
      [
        "Chain of Thought (CoT) prompting encourages ChatGPT to break down complex problems into logical steps.",
        "This technique significantly improves accuracy for math, logic, and multi-step reasoning tasks.",
      ]
    ),
    createTextBlock(
      "How to Use CoT",
      "📝",
      [
        "**Explicit Request**: Add 'Let's think step by step' or 'Break this down into steps' to your prompt.",
        "**Show Your Work**: Ask ChatGPT to explain its reasoning at each step.",
        "**Verify Steps**: Review each step to catch errors early in the reasoning process.",
      ]
    ),
    createPlaygroundBlock(
      'Applying Chain of Thought',
      'Use CoT to solve a complex problem.',
      { name: 'ChatGPT', icon: '💬' },
      'I need to [task]. Please [approach] and [verification].',
      [
        { id: 'task', placeholder: 'task', correctAnswer: 'calculate my monthly expenses' },
        { id: 'approach', placeholder: 'approach', correctAnswer: 'break this down step by step' },
        { id: 'verification', placeholder: 'verification', correctAnswer: 'show your reasoning' }
      ],
      ['calculate my monthly expenses', 'break this down step by step', 'show your reasoning'],
      'Think about how to structure a complex problem into manageable steps.',
      { title: 'Perfect!', message: "You've mastered Chain of Thought prompting!" },
      { title: 'Not quite', message: 'Try using step-by-step language in your prompt.' },
      '/images/course/chatgpt/chatgpt-cot.png',
      'Chain of Thought is especially powerful for math, logic, and planning tasks.',
      `I'll help you calculate your monthly expenses step by step, showing my reasoning throughout.

**Step 1: Categorize Your Expenses**
Let's organize expenses into clear categories:
- 🏠 Housing (rent/mortgage, utilities)
- 🚗 Transportation (car, gas, insurance)
- 🍎 Food (groceries, dining out)
- 💊 Health (insurance, medications)
- 🎮 Entertainment (subscriptions, hobbies)

**Step 2: List Fixed Expenses**
These stay the same each month:
| Expense | Amount | Reasoning |
|---------|--------|-----------|
| Rent | $X | Lease agreement |
| Car Payment | $X | Loan terms |
| Insurance | $X | Policy premium |

**Step 3: Estimate Variable Expenses**
These fluctuate - use 3-month averages:
- Groceries: Review bank statements
- Utilities: Average seasonal variation
- Gas: Miles driven × cost per mile

**Step 4: Sum and Verify**
Total = Fixed + Variable
Cross-check against bank statement total

Would you like to fill in your actual numbers? I'll help you calculate the totals.`
    , true),
    createFeedbackBlock(
      'Did Chain of Thought help you understand complex problem solving?',
      ['Yes, very helpful', 'Somewhat helpful', 'Need more examples'],
      0
    ),
    createDiscoveryBlock(
      7,
      'Step-by-Step Thinking',
      'Asking ChatGPT to "think step by step" improves accuracy for complex reasoning tasks.'
    ),
  ],
};

export const chatgptLesson2_3: CoursivLesson = {
  id: 'chatgpt-2-3',
  courseId: 'chatgpt',
  title: 'Few-Shot Learning',
  subtitle: 'Teaching by example',
  blocks: [
    createTextBlock(
      "Learning from Examples",
      "📚",
      [
        "Few-shot learning means providing ChatGPT with examples of what you want before asking it to generate new content.",
        "This technique is incredibly powerful for maintaining consistent style, format, or tone.",
      ]
    ),
    createTextBlock(
      "How Many Examples?",
      "🔢",
      [
        "**Zero-shot**: No examples, just instructions (works for simple tasks)",
        "**One-shot**: One example (good for format demonstration)",
        "**Few-shot**: 2-5 examples (best for complex patterns or styles)",
      ]
    ),
    createPlaygroundBlock(
      'Using Few-Shot Learning',
      'Provide examples to guide ChatGPT\'s output.',
      { name: 'ChatGPT', icon: '💬' },
      'Here are examples of [content_type]:\n\nExample 1: [example1]\nExample 2: [example2]\n\nNow create a similar one for [topic].',
      [
        { id: 'content_type', placeholder: 'content type', correctAnswer: 'product descriptions' },
        { id: 'example1', placeholder: 'example 1', correctAnswer: 'Sleek design meets functionality' },
        { id: 'example2', placeholder: 'example 2', correctAnswer: 'Premium quality at affordable price' },
        { id: 'topic', placeholder: 'topic', correctAnswer: 'wireless headphones' }
      ],
      ['product descriptions', 'Sleek design meets functionality', 'Premium quality at affordable price', 'wireless headphones', 'social media posts', 'Exciting news!', 'Join us today!', 'new feature launch'],
      'Provide clear examples that demonstrate the pattern you want ChatGPT to follow.',
      { title: 'Great job!', message: "You've learned few-shot prompting!" },
      { title: 'Try again', message: 'Make sure your examples clearly show the pattern.' },
      '/images/course/chatgpt/chatgpt-few-shot.png',
      'The quality of your examples directly affects the quality of the output.',
      `Based on your examples, I can see you want concise, benefit-focused product descriptions. Here's one for wireless headphones:

**Wireless Headphones Description:**

"Crystal-clear audio meets all-day comfort"

---

**Additional Variations in Your Style:**

1. "Immersive sound, zero wires, endless freedom"

2. "Studio-quality audio in a lightweight design"

3. "Premium acoustics for the modern listener"

**Pattern I Noticed:**
- Short, punchy phrases
- Focus on key benefits
- Aspirational language
- No technical jargon

Would you like me to generate more variations or adjust the tone?`
    , true),
    createFeedbackBlock(
      'How useful is few-shot learning for your needs?',
      ['Very useful', 'Somewhat useful', 'Not applicable to my use case'],
      0
    ),
    createDiscoveryBlock(
      8,
      'Examples Matter',
      'Providing 2-5 examples helps ChatGPT understand exactly what style and format you want.'
    ),
  ],
};

export const chatgptLesson2_4: CoursivLesson = {
  id: 'chatgpt-2-4',
  courseId: 'chatgpt',
  title: 'Context Management',
  subtitle: 'Managing long conversations',
  blocks: [
    createTextBlock(
      "Understanding Context Windows",
      "🪟",
      [
        "ChatGPT has a limited 'context window' - the amount of conversation it can remember at once.",
        "As conversations get longer, earlier messages may be 'forgotten'. Learning to manage context is essential for complex tasks.",
      ]
    ),
    createTextBlock(
      "Context Management Strategies",
      "🎯",
      [
        "**Summarize Periodically**: Ask ChatGPT to summarize key points from the conversation.",
        "**Restate Important Info**: Repeat crucial details in new messages.",
        "**Use System Messages**: Set persistent context at the start of conversations.",
      ]
    ),
    createPlaygroundBlock(
      'Managing Long Conversations',
      'Practice maintaining context in extended discussions.',
      { name: 'ChatGPT', icon: '💬' },
      'Before we continue, let me [action]: [summary]. Now, regarding [next_topic]...',
      [
        { id: 'action', placeholder: 'action', correctAnswer: 'summarize our discussion' },
        { id: 'summary', placeholder: 'summary', correctAnswer: 'we agreed on the budget and timeline' },
        { id: 'next_topic', placeholder: 'next topic', correctAnswer: 'the implementation plan' }
      ],
      ['summarize our discussion', 'we agreed on the budget and timeline', 'the implementation plan'],
      'Periodically summarizing helps maintain context in long conversations.',
      { title: 'Excellent!', message: "You've learned to manage conversation context!" },
      { title: 'Try again', message: 'Try summarizing before moving to new topics.' },
      '/images/course/chatgpt/chatgpt-long-conv.png',
      'Regular summaries prevent important details from being lost in long conversations.',
      `Great approach! Here's my summary of our discussion:

**Summary of Our Discussion:**
✅ Budget: Agreed on $X allocation
✅ Timeline: Y weeks for completion
✅ Key milestones identified

**Now, Regarding the Implementation Plan:**

I'll structure this in phases:

**Phase 1: Foundation (Week 1-2)**
- Set up development environment
- Define technical architecture
- Create initial prototypes

**Phase 2: Core Development (Week 3-4)**
- Build main features
- Integrate components
- Internal testing

**Phase 3: Polish & Launch (Week 5-6)**
- Bug fixes and optimization
- User acceptance testing
- Deployment preparation

Does this align with your expectations? Any adjustments needed?`
    , true),
    createFeedbackBlock(
      'Do you feel confident managing long conversations now?',
      ['Yes, confident', 'Need more practice', 'Still confused'],
      0
    ),
    createDiscoveryBlock(
      9,
      'Context is King',
      'Summarizing periodically and restating key information keeps long conversations on track.'
    ),
  ],
};

export const chatgptLesson2_5: CoursivLesson = {
  id: 'chatgpt-2-5',
  courseId: 'chatgpt',
  title: 'Writing with ChatGPT',
  subtitle: 'Content creation techniques',
  blocks: [
    createTextBlock(
      "ChatGPT as Your Writing Partner",
      "✍️",
      [
        "ChatGPT excels at various writing tasks: drafting, editing, brainstorming, and reformatting content.",
        "The key is knowing how to direct it effectively for each type of writing task.",
      ]
    ),
    createTextBlock(
      "Writing Workflow",
      "📝",
      [
        "**1. Brainstorm**: Generate ideas and outlines first",
        "**2. Draft**: Create initial content with clear instructions",
        "**3. Refine**: Iterate on tone, style, and details",
        "**4. Polish**: Final edits for grammar and flow",
      ]
    ),
    createPlaygroundBlock(
      'Creating Content',
      'Use ChatGPT to write professional content.',
      { name: 'ChatGPT', icon: '💬' },
      'Write a [content_type] about [topic]. The tone should be [tone] and the target audience is [audience].',
      [
        { id: 'content_type', placeholder: 'content type', correctAnswer: 'blog post introduction' },
        { id: 'topic', placeholder: 'topic', correctAnswer: 'productivity tips' },
        { id: 'tone', placeholder: 'tone', correctAnswer: 'friendly and encouraging' },
        { id: 'audience', placeholder: 'audience', correctAnswer: 'busy professionals' }
      ],
      ['blog post introduction', 'productivity tips', 'friendly and encouraging', 'busy professionals'],
      'Specify the content type, topic, tone, and audience for best results.',
      { title: 'Well done!', message: "You've created professional content with ChatGPT!" },
      { title: 'Try again', message: 'Be more specific about your content requirements.' },
      '/images/course/chatgpt/chatgpt-content.png',
      'Always specify tone and audience when requesting written content.',
      `Here's a blog post introduction tailored for busy professionals:

---

**Title: 5 Productivity Hacks That Actually Work (No Fluff, Just Results)**

Hey there, fellow busy bee! 🐝

Let's be honest – you've probably read a hundred productivity articles that promise to "change your life" but end up being the same recycled advice. *Wake up at 5 AM! Meditate for an hour! Plan every minute of your day!*

Yeah, right. Who has time for that?

Here's the thing: real productivity isn't about doing more. It's about doing what matters, efficiently, so you can actually enjoy your evenings and weekends guilt-free.

In this post, I'm sharing five battle-tested strategies that have helped thousands of professionals like you reclaim their time – without turning into a robot or sacrificing your sanity.

Ready to work smarter? Let's dive in.

---

**Word count:** ~150 words
**Reading level:** Conversational, accessible
**CTA:** Implicit (continue reading)

Want me to continue with the full article or adjust the tone?`
    , true),
    createFeedbackBlock(
      'How helpful was this writing lesson?',
      ['Very helpful', 'Somewhat helpful', 'Need more practice'],
      0
    ),
    createDiscoveryBlock(
      10,
      'Writing Partner',
      'ChatGPT works best as a collaborative writing partner - brainstorm, draft, refine, and polish together.'
    ),
  ],
};

export const chatgptLesson2_Quiz: CoursivLesson = {
  id: 'chatgpt-2-quiz',
  courseId: 'chatgpt',
  title: 'Intermediate Quiz',
  subtitle: 'Test your advanced skills',
  blocks: [
    createTextBlock(
      "Intermediate Assessment",
      "🎓",
      [
        "Great progress! Let's test your understanding of intermediate ChatGPT techniques.",
        "These questions cover role-based prompting, chain of thought, few-shot learning, and more.",
      ]
    ),
    createQuizBlock(
      'What is the main benefit of role-based prompting?',
      [
        'It makes ChatGPT respond faster',
        'It helps ChatGPT provide more focused, expert-level responses',
        'It reduces the cost of API calls',
        'It allows ChatGPT to access the internet'
      ],
      1,
      'Role-based prompting helps ChatGPT tap into specialized knowledge patterns, providing more focused and expert responses.',
      'Think about what happens when you ask ChatGPT to "act as" a specific expert.'
    ),
    createQuizBlock(
      'When should you use Chain of Thought prompting?',
      [
        'For simple yes/no questions',
        'For complex reasoning, math, or multi-step problems',
        'Only for creative writing',
        'Never - it\'s outdated'
      ],
      1,
      'Chain of Thought is most effective for complex problems that require step-by-step reasoning.',
      'Consider which types of tasks benefit from breaking down into steps.'
    ),
    createQuizBlock(
      'How many examples are typically used in "few-shot" learning?',
      [
        '0 examples',
        '1 example',
        '2-5 examples',
        '100+ examples'
      ],
      2,
      'Few-shot learning typically uses 2-5 examples to demonstrate the desired pattern or style.',
      'Think about the name "few-shot" and what it implies.'
    ),
    createQuizBlock(
      'What is the best way to maintain context in long conversations?',
      [
        'Start a new conversation every few messages',
        'Periodically summarize key points and restate important information',
        'Use shorter words to save space',
        'Avoid asking follow-up questions'
      ],
      1,
      'Summarizing periodically and restating key information helps maintain context as conversations grow longer.',
      'Remember the strategies for managing context windows.'
    ),
    createDiscoveryBlock(
      11,
      'Intermediate Complete!',
      'Excellent work! You\'ve mastered intermediate ChatGPT techniques. Ready for advanced strategies?'
    ),
  ],
};

// ============================================
// LEVEL 3: ADVANCED
// ============================================

export const chatgptLesson3_1: CoursivLesson = {
  id: 'chatgpt-3-1',
  courseId: 'chatgpt',
  title: 'API Integration',
  subtitle: 'Using ChatGPT in applications',
  blocks: [
    createTextBlock(
      "Beyond the Chat Interface",
      "🔌",
      [
        "The ChatGPT API allows you to integrate AI capabilities directly into your applications, websites, and workflows.",
        "Understanding the API opens up possibilities far beyond what's available in the chat interface.",
      ]
    ),
    createTextBlock(
      "API Basics",
      "📡",
      [
        "**Endpoints**: The API provides endpoints for chat completions, embeddings, and more.",
        "**Authentication**: Use API keys to authenticate your requests.",
        "**Parameters**: Control temperature, max tokens, and other settings for fine-tuned responses.",
      ]
    ),
    createPlaygroundBlock(
      'Understanding API Calls',
      'Learn the structure of an API request.',
      { name: 'ChatGPT', icon: '💬' },
      'To make an API call, I need to specify the [component1], set the [component2], and include my [component3].',
      [
        { id: 'component1', placeholder: 'component 1', correctAnswer: 'model name' },
        { id: 'component2', placeholder: 'component 2', correctAnswer: 'temperature parameter' },
        { id: 'component3', placeholder: 'component 3', correctAnswer: 'messages array' }
      ],
      ['model name', 'temperature parameter', 'messages array'],
      'Think about the essential components of an API request.',
      { title: 'Correct!', message: "You understand API request structure!" },
      { title: 'Not quite', message: 'Review the key components of API calls.' },
      '/images/course/chatgpt/chatgpt-api.png',
      'The API gives you programmatic control over ChatGPT\'s behavior.',
      `Great question! Here's a complete breakdown of making an API call:

**Essential Components:**

\`\`\`python
import openai

response = openai.ChatCompletion.create(
    model="gpt-4",           # Model name
    temperature=0.7,          # Temperature parameter
    messages=[                # Messages array
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ]
)
\`\`\`

**Parameter Guide:**

| Parameter | Range | Effect |
|-----------|-------|--------|
| temperature | 0-2 | Higher = more creative |
| max_tokens | 1-4096 | Response length limit |
| top_p | 0-1 | Nucleus sampling |

**Best Practices:**
1. Always handle API errors gracefully
2. Implement rate limiting
3. Cache responses when appropriate
4. Monitor token usage for cost control

Want me to show you a complete implementation example?`
    , true),
    createFeedbackBlock(
      'Is API integration relevant to your needs?',
      ['Yes, very relevant', 'Somewhat relevant', 'Not applicable'],
      0
    ),
    createDiscoveryBlock(
      12,
      'API Power',
      'The API allows programmatic control over model, temperature, and message structure.'
    ),
  ],
};

export const chatgptLesson3_2: CoursivLesson = {
  id: 'chatgpt-3-2',
  courseId: 'chatgpt',
  title: 'Custom Instructions',
  subtitle: 'Personalizing ChatGPT behavior',
  blocks: [
    createTextBlock(
      "What Are Custom Instructions?",
      "⚙️",
      [
        "Custom Instructions allow you to set persistent preferences that apply to all your conversations with ChatGPT.",
        "This saves time by eliminating the need to repeat context in every new conversation.",
      ]
    ),
    createTextBlock(
      "Setting Up Custom Instructions",
      "📋",
      [
        "**About You**: Tell ChatGPT about yourself - your profession, expertise level, and preferences.",
        "**Response Preferences**: Specify how you want ChatGPT to respond - format, length, tone, etc.",
        "**Constraints**: Set boundaries on what ChatGPT should or shouldn't do.",
      ]
    ),
    createPlaygroundBlock(
      'Creating Custom Instructions',
      'Design effective custom instructions for your needs.',
      { name: 'ChatGPT', icon: '💬' },
      'About me: I am a [profession] who prefers [preference]. When responding, always [behavior] and avoid [constraint].',
      [
        { id: 'profession', placeholder: 'profession', correctAnswer: 'software developer' },
        { id: 'preference', placeholder: 'preference', correctAnswer: 'concise code examples' },
        { id: 'behavior', placeholder: 'behavior', correctAnswer: 'include code comments' },
        { id: 'constraint', placeholder: 'constraint', correctAnswer: 'lengthy explanations' }
      ],
      ['software developer', 'concise code examples', 'include code comments', 'lengthy explanations'],
      'Think about what information would help ChatGPT serve you better consistently.',
      { title: 'Perfect!', message: "You've created effective custom instructions!" },
      { title: 'Try again', message: 'Make sure your instructions are specific and actionable.' },
      '/images/course/chatgpt/chatgpt-custom.png',
      'Good custom instructions save time and improve response quality across all conversations.',
      `Excellent custom instructions! Here's how I'll apply them:

**Your Profile Saved:**
- 👤 Role: Software Developer
- 📝 Preference: Concise code examples
- ✅ Always: Include code comments
- ❌ Avoid: Lengthy explanations

**Example Response Style:**

Instead of this:
> "To sort an array in JavaScript, you can use the built-in sort method. This method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings..."

I'll respond like this:

\`\`\`javascript
// Sort array ascending
const sorted = arr.sort((a, b) => a - b);

// Sort array descending
const sortedDesc = arr.sort((a, b) => b - a);
\`\`\`

**Pro Tip:** You can update these instructions anytime in Settings → Custom Instructions.

Ready to test this in a real coding scenario?`
    , true),
    createFeedbackBlock(
      'Will you use custom instructions?',
      ['Yes, definitely', 'Maybe', 'No'],
      0
    ),
    createDiscoveryBlock(
      13,
      'Personalization',
      'Custom instructions create a personalized AI experience without repeating context.'
    ),
  ],
};

export const chatgptLesson3_3: CoursivLesson = {
  id: 'chatgpt-3-3',
  courseId: 'chatgpt',
  title: 'Plugins & Tools',
  subtitle: 'Extending ChatGPT capabilities',
  blocks: [
    createTextBlock(
      "ChatGPT Plugins",
      "🔧",
      [
        "Plugins extend ChatGPT's capabilities by connecting it to external services and real-time data.",
        "With plugins, ChatGPT can browse the web, run code, access databases, and interact with third-party services.",
      ]
    ),
    createTextBlock(
      "Popular Plugin Categories",
      "📦",
      [
        "**Web Browsing**: Access current information from the internet",
        "**Code Interpreter**: Run Python code and analyze data",
        "**Third-Party**: Connect to services like Zapier, Wolfram Alpha, etc.",
      ]
    ),
    createPlaygroundBlock(
      'Using Plugins Effectively',
      'Learn when and how to use ChatGPT plugins.',
      { name: 'ChatGPT', icon: '💬' },
      'For this task, I should use the [plugin] plugin because I need to [capability]. This will help me [outcome].',
      [
        { id: 'plugin', placeholder: 'plugin', correctAnswer: 'Code Interpreter' },
        { id: 'capability', placeholder: 'capability', correctAnswer: 'analyze a CSV file' },
        { id: 'outcome', placeholder: 'outcome', correctAnswer: 'visualize the data trends' }
      ],
      ['Code Interpreter', 'analyze a CSV file', 'visualize the data trends'],
      'Match the plugin to the specific capability you need.',
      { title: 'Great choice!', message: "You've selected the right plugin for the task!" },
      { title: 'Try again', message: 'Think about which plugin provides the capability you need.' },
      '/images/course/chatgpt/chatgpt-plugins.png',
      'Choose plugins based on the specific capabilities your task requires.',
      `Perfect plugin choice! Here's how Code Interpreter will help:

**Code Interpreter Capabilities:**

📊 **Data Analysis**
- Upload CSV, Excel, JSON files
- Run statistical analysis
- Create visualizations

**For Your CSV Analysis:**

\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt

# Load and preview data
df = pd.read_csv('your_file.csv')
print(df.head())

# Basic statistics
print(df.describe())

# Visualize trends
plt.figure(figsize=(10, 6))
plt.plot(df['date'], df['value'])
plt.title('Data Trends Over Time')
plt.xlabel('Date')
plt.ylabel('Value')
plt.show()
\`\`\`

**What I Can Generate:**
- 📈 Line charts for trends
- 📊 Bar charts for comparisons
- 🥧 Pie charts for distributions
- 📉 Scatter plots for correlations

Upload your CSV file and tell me what insights you're looking for!`
    , true),
    createFeedbackBlock(
      'How interested are you in using plugins?',
      ['Very interested', 'Somewhat interested', 'Not interested'],
      0
    ),
    createDiscoveryBlock(
      14,
      'Extended Capabilities',
      'Plugins connect ChatGPT to external services, enabling real-time data access and code execution.'
    ),
  ],
};

export const chatgptLesson3_4: CoursivLesson = {
  id: 'chatgpt-3-4',
  courseId: 'chatgpt',
  title: 'Enterprise Use Cases',
  subtitle: 'ChatGPT for business',
  blocks: [
    createTextBlock(
      "ChatGPT in the Enterprise",
      "🏢",
      [
        "Organizations are using ChatGPT to transform workflows across departments - from customer service to product development.",
        "Understanding enterprise use cases helps you identify opportunities in your own organization.",
      ]
    ),
    createTextBlock(
      "Key Enterprise Applications",
      "💼",
      [
        "**Customer Support**: Automated responses, ticket categorization, knowledge base creation",
        "**Content Creation**: Marketing copy, documentation, internal communications",
        "**Data Analysis**: Report generation, insight extraction, trend analysis",
        "**Code Assistance**: Code review, documentation, debugging help",
      ]
    ),
    createPlaygroundBlock(
      'Identifying Business Opportunities',
      'Find ChatGPT applications in your organization.',
      { name: 'ChatGPT', icon: '💬' },
      'In my [department], we could use ChatGPT to [application]. This would save [benefit] and improve [outcome].',
      [
        { id: 'department', placeholder: 'department', correctAnswer: 'customer service' },
        { id: 'application', placeholder: 'application', correctAnswer: 'draft response templates' },
        { id: 'benefit', placeholder: 'benefit', correctAnswer: 'hours of writing time' },
        { id: 'outcome', placeholder: 'outcome', correctAnswer: 'response consistency' }
      ],
      ['customer service', 'draft response templates', 'hours of writing time', 'response consistency'],
      'Think about repetitive tasks in your organization that could benefit from AI assistance.',
      { title: 'Excellent!', message: "You've identified a valuable business application!" },
      { title: 'Try again', message: 'Focus on specific, measurable benefits.' },
      '/images/course/chatgpt/chatgpt-business.png',
      'The best enterprise applications target repetitive tasks with clear ROI.',
      `Great use case identification! Here's a detailed implementation plan:

**Customer Service AI Implementation**

**Current State Analysis:**
- Average response drafting time: ~15 min
- Daily ticket volume: ~100 tickets
- Consistency issues: Variable quality

**Proposed Solution:**

\`\`\`
ChatGPT Integration Points:
1. Response template generation
2. Tone adjustment (formal/casual)
3. Multi-language support
4. Escalation detection
\`\`\`

**Expected ROI:**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Draft time | 15 min | 3 min | 80% ⬇️ |
| Consistency | 65% | 95% | 46% ⬆️ |
| CSAT Score | 4.1 | 4.6 | 12% ⬆️ |

**Implementation Phases:**
1. **Week 1-2**: Template library creation
2. **Week 3-4**: Agent training
3. **Week 5-6**: Pilot with 20% of tickets
4. **Week 7-8**: Full rollout

Would you like me to create a detailed business case document?`
    , true),
    createFeedbackBlock(
      'Do you see enterprise applications in your organization?',
      ['Yes, many opportunities', 'A few possibilities', 'Not applicable'],
      0
    ),
    createDiscoveryBlock(
      15,
      'Business Value',
      'Enterprise ChatGPT applications should target repetitive tasks with measurable ROI.'
    ),
  ],
};

export const chatgptLesson3_Quiz: CoursivLesson = {
  id: 'chatgpt-3-quiz',
  courseId: 'chatgpt',
  title: 'Advanced Quiz',
  subtitle: 'Final assessment',
  blocks: [
    createTextBlock(
      "Final Assessment",
      "🏆",
      [
        "Congratulations on reaching the advanced level! This final quiz will test your mastery of ChatGPT.",
        "Pass this quiz to complete the ChatGPT course and earn your certificate!",
      ]
    ),
    createQuizBlock(
      'What does the "temperature" parameter control in the API?',
      [
        'The speed of response generation',
        'The creativity/randomness of responses',
        'The maximum length of responses',
        'The cost of API calls'
      ],
      1,
      'Temperature controls the randomness of responses - higher values produce more creative/varied outputs, lower values produce more focused/deterministic outputs.',
      'Think about what "temperature" might mean in terms of output variation.'
    ),
    createQuizBlock(
      'What is the main benefit of Custom Instructions?',
      [
        'They make ChatGPT faster',
        'They reduce API costs',
        'They eliminate the need to repeat context in every conversation',
        'They allow ChatGPT to access the internet'
      ],
      2,
      'Custom Instructions persist across conversations, saving time by eliminating repetitive context-setting.',
      'Consider what problem Custom Instructions solve.'
    ),
    createQuizBlock(
      'Which plugin would you use to analyze data from a spreadsheet?',
      [
        'Web Browsing',
        'Code Interpreter',
        'DALL-E',
        'Zapier'
      ],
      1,
      'Code Interpreter can run Python code to analyze data files like CSVs and spreadsheets.',
      'Think about which plugin can execute code and process files.'
    ),
    createQuizBlock(
      'What is the BEST approach for implementing ChatGPT in an enterprise?',
      [
        'Replace all human workers immediately',
        'Start with pilot projects targeting repetitive tasks with clear ROI',
        'Use it only for creative tasks',
        'Avoid any business-critical applications'
      ],
      1,
      'Starting with pilot projects on repetitive tasks allows organizations to measure ROI and refine their approach before scaling.',
      'Consider a practical, measured approach to enterprise adoption.'
    ),
    createDiscoveryBlock(
      16,
      'Course Complete!',
      'Congratulations! You\'ve mastered ChatGPT from basics to advanced techniques. You\'re now a ChatGPT expert!'
    ),
  ],
};

// Export all lessons
export const chatgptLessons: CoursivLesson[] = [
  // Level 1: Beginner
  chatgptLesson1_1,
  chatgptLesson1_2,
  chatgptLesson1_3,
  chatgptLesson1_4,
  chatgptLesson1_Quiz,
  // Level 2: Intermediate
  chatgptLesson2_1,
  chatgptLesson2_2,
  chatgptLesson2_3,
  chatgptLesson2_4,
  chatgptLesson2_5,
  chatgptLesson2_Quiz,
  // Level 3: Advanced
  chatgptLesson3_1,
  chatgptLesson3_2,
  chatgptLesson3_3,
  chatgptLesson3_4,
  chatgptLesson3_Quiz,
];
