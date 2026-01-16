/**
 * Notion AI Course - Complete Lesson Data
 * 
 * Course Structure:
 * - Level 1 (Beginner): 4 modules (notion-ai-1-1 to notion-ai-1-quiz)
 * - Level 2 (Intermediate): 4 modules (notion-ai-2-1 to notion-ai-2-quiz)
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

export const notionAiLesson1_1: CoursivLesson = {
  id: 'notion-ai-1-1',
  courseId: 'notion-ai',
  title: 'What is Notion AI?',
  subtitle: 'AI-powered productivity',
  blocks: [
    createTextBlock(
      "Meet Notion AI",
      "📝",
      [
        "Notion AI is an integrated AI assistant built directly into Notion, the popular productivity and note-taking platform.",
        "It helps you write, edit, summarize, and brainstorm - all within your existing workflow.",
      ]
    ),
    createTextBlock(
      "What Notion AI Can Do",
      "✨",
      [
        "**Writing**: Draft content, emails, and documents",
        "**Editing**: Improve, shorten, or expand text",
        "**Summarizing**: Condense long documents",
        "**Brainstorming**: Generate ideas and outlines",
      ]
    ),
    createPlaygroundBlock(
      'Your First Notion AI Command',
      'Learn to invoke Notion AI.',
      { name: 'Notion AI', icon: '📝' },
      'To use Notion AI, I can [method] and then [action] to [result].',
      [
        { id: 'method', placeholder: 'method', correctAnswer: 'press Space or type /ai' },
        { id: 'action', placeholder: 'action', correctAnswer: 'describe what I need' },
        { id: 'result', placeholder: 'result', correctAnswer: 'get AI-generated content' }
      ],
      ['press Space or type /ai', 'describe what I need', 'get AI-generated content'],
      'Notion AI is accessible from anywhere in your workspace.',
      { title: 'Great start!', message: "You know how to invoke Notion AI!" },
      { title: 'Try again', message: 'Think about how to access Notion AI.' },
      '/images/course/notion/notion-first.png',
      'Press Space on an empty line or type /ai to quickly access Notion AI.',
      `📝 **Notion AI Overview**

**How to Access Notion AI:**

| Method | When to Use |
|--------|-------------|
| **Space** (empty line) | Start new content |
| **/ai** | Quick command |
| **Select + Ask AI** | Edit existing text |
| **⌘/Ctrl + J** | Keyboard shortcut |

**Your Command:**
\`Press Space → "Write a project update email"\`

**Notion AI Response:**
\`\`\`
Subject: Project Update - Week 12

Hi team,

I wanted to share a quick update on our project progress:

**Completed This Week:**
- Finalized the design mockups
- Completed backend API integration
- Resolved 15 bug tickets

**In Progress:**
- User testing phase (70% complete)
- Documentation updates
- Performance optimization

**Next Steps:**
- Complete user testing by Friday
- Prepare for stakeholder demo
- Begin deployment planning

Let me know if you have any questions!

Best,
[Your name]
\`\`\`

**Common Commands:**

| Command | Result |
|---------|--------|
| "Write a..." | Generate new content |
| "Summarize this" | Condense text |
| "Make it shorter" | Reduce length |
| "Fix grammar" | Correct errors |
| "Translate to..." | Change language |

**Pro Tips:**
1. Be specific about what you need
2. Provide context for better results
3. Iterate - ask AI to refine its output
4. Use in any Notion page or database`
    , true),
    createFeedbackBlock(
      'Do you already use Notion?',
      ['Yes, daily', 'Sometimes', 'New to Notion'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Integrated AI',
      'Notion AI is built into Notion - access it with Space, /ai, or by selecting text.'
    ),
  ],
};

export const notionAiLesson1_2: CoursivLesson = {
  id: 'notion-ai-1-2',
  courseId: 'notion-ai',
  title: 'Writing with AI',
  subtitle: 'Creating content from scratch',
  blocks: [
    createTextBlock(
      "AI-Powered Writing",
      "✍️",
      [
        "Notion AI excels at generating first drafts, helping you overcome writer's block and create content quickly.",
        "You can write anything from emails to blog posts to meeting notes.",
      ]
    ),
    createTextBlock(
      "Writing Capabilities",
      "📄",
      [
        "**Blog Posts**: Full articles with structure",
        "**Emails**: Professional communications",
        "**Meeting Notes**: Agendas and summaries",
        "**Creative Writing**: Stories, poems, scripts",
      ]
    ),
    createPlaygroundBlock(
      'Generating Content',
      'Learn to write with Notion AI.',
      { name: 'Notion AI', icon: '📝' },
      'To write a [content_type], I should prompt: "[prompt]"',
      [
        { id: 'content_type', placeholder: 'content type', correctAnswer: 'blog post outline' },
        { id: 'prompt', placeholder: 'prompt', correctAnswer: 'Write an outline for a blog post about productivity tips for remote workers' }
      ],
      ['blog post outline', 'Write an outline for a blog post about productivity tips for remote workers', 'meeting agenda', 'Create a meeting agenda for a product launch planning session'],
      'Specific prompts lead to better content.',
      { title: 'Content creator!', message: "You know how to generate content!" },
      { title: 'Try again', message: 'Be specific about the content type and topic.' },
      '/images/course/notion/notion-generate.png',
      'Include context like audience, tone, and purpose for better results.',
      `✍️ **Content Generation Guide**

**Your Prompt:**
"Write an outline for a blog post about productivity tips for remote workers"

**Notion AI Response:**

# Productivity Tips for Remote Workers

## Introduction
- The rise of remote work
- Common productivity challenges
- Why these tips matter

## 1. Create a Dedicated Workspace
- Importance of physical boundaries
- Setting up an ergonomic home office
- Minimizing distractions

## 2. Establish a Routine
- Consistent start and end times
- Morning rituals for focus
- The power of time blocking

## 3. Use the Right Tools
- Communication: Slack, Zoom
- Project management: Notion, Asana
- Focus apps: Forest, Freedom

## 4. Take Strategic Breaks
- The Pomodoro Technique
- Physical movement importance
- Mental reset activities

## 5. Set Clear Boundaries
- Communicating availability
- Saying no to interruptions
- Work-life separation

## 6. Stay Connected
- Virtual coffee chats
- Team rituals
- Combating isolation

## Conclusion
- Recap of key tips
- Call to action
- Additional resources

---

**Writing Prompts That Work:**

| Type | Example Prompt |
|------|----------------|
| **Blog** | "Write a blog post about [topic] for [audience]" |
| **Email** | "Draft a professional email to [recipient] about [subject]" |
| **Social** | "Create 5 LinkedIn posts about [topic]" |
| **Meeting** | "Write meeting notes for a discussion about [topic]" |

**Pro Tips:**
1. Start with an outline, then expand sections
2. Specify word count if needed
3. Mention the target audience
4. Ask for specific tone (professional, casual, etc.)`
    , true),
    createFeedbackBlock(
      'What do you write most often?',
      ['Documents', 'Emails', 'Notes'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Content Generation',
      'Notion AI can generate outlines, drafts, and full content for any type of writing.'
    ),
  ],
};

export const notionAiLesson1_3: CoursivLesson = {
  id: 'notion-ai-1-3',
  courseId: 'notion-ai',
  title: 'Editing & Improving',
  subtitle: 'Enhancing existing content',
  blocks: [
    createTextBlock(
      "AI-Powered Editing",
      "✏️",
      [
        "Notion AI can improve existing text - making it clearer, shorter, longer, or fixing errors.",
        "Select any text and use Ask AI to transform it.",
      ]
    ),
    createTextBlock(
      "Editing Options",
      "🔧",
      [
        "**Improve Writing**: Better clarity and flow",
        "**Fix Grammar**: Correct errors and typos",
        "**Make Shorter**: Condense without losing meaning",
        "**Make Longer**: Expand with more detail",
      ]
    ),
    createPlaygroundBlock(
      'Editing Text',
      'Learn to improve content with AI.',
      { name: 'Notion AI', icon: '📝' },
      'To [goal] my text, I should select it and choose "[command]".',
      [
        { id: 'goal', placeholder: 'goal', correctAnswer: 'make more professional' },
        { id: 'command', placeholder: 'command', correctAnswer: 'Improve writing' }
      ],
      ['make more professional', 'Improve writing', 'reduce length', 'Make shorter', 'fix errors', 'Fix spelling & grammar'],
      'Different commands serve different editing needs.',
      { title: 'Editor ready!', message: "You know how to edit with AI!" },
      { title: 'Try again', message: 'Match the command to your editing goal.' },
      '/images/course/notion/notion-edit.png',
      'You can chain commands - first improve, then shorten, then translate.',
      `✏️ **AI Editing Guide**

**Your Goal: Make More Professional**

**Before:**
\`\`\`
hey team, just wanted to let you know that the 
project is going pretty good. we finished most 
of the stuff and should be done soon. let me 
know if you got questions.
\`\`\`

**After "Improve writing":**
\`\`\`
Hello team,

I wanted to provide a brief update on our project 
progress. We have successfully completed the 
majority of our deliverables and are on track to 
finish within the expected timeline.

Please don't hesitate to reach out if you have 
any questions or concerns.

Best regards
\`\`\`

**Editing Commands:**

| Command | Effect | Best For |
|---------|--------|----------|
| **Improve writing** | Better flow, clarity | Rough drafts |
| **Fix spelling & grammar** | Correct errors | Quick fixes |
| **Make shorter** | Condense text | Verbose content |
| **Make longer** | Add detail | Thin content |
| **Change tone** | Adjust style | Audience fit |
| **Simplify language** | Easier reading | Complex text |

**Tone Options:**
- Professional
- Casual
- Friendly
- Confident
- Straightforward

**Chaining Commands:**
\`\`\`
1. Select text
2. "Improve writing" → Accept
3. Select again
4. "Make shorter" → Accept
5. Select again
6. "Change tone to professional" → Accept
\`\`\`

**Pro Tips:**
1. Review AI suggestions before accepting
2. Use "Continue writing" to extend
3. Undo (⌘Z) if you don't like changes
4. Be specific: "Make this more concise while keeping key points"`
    , true),
    createFeedbackBlock(
      'Which editing feature do you need most?',
      ['Improve writing', 'Make shorter', 'Fix grammar'],
      0
    ),
    createDiscoveryBlock(
      3,
      'AI Editing',
      'Select text and use commands like Improve, Shorten, or Fix Grammar to enhance content.'
    ),
  ],
};

export const notionAiLesson1_Quiz: CoursivLesson = {
  id: 'notion-ai-1-quiz',
  courseId: 'notion-ai',
  title: 'Beginner Quiz',
  subtitle: 'Test your Notion AI knowledge',
  blocks: [
    createTextBlock(
      "Beginner Assessment",
      "📝",
      [
        "Let's test what you've learned about Notion AI basics!",
        "Pass this quiz to unlock intermediate techniques.",
      ]
    ),
    createQuizBlock(
      'How do you access Notion AI on an empty line?',
      [
        'Press Enter',
        'Press Space or type /ai',
        'Click a button',
        'Use voice command'
      ],
      1,
      'Press Space on an empty line or type /ai to access Notion AI.',
      'Remember the quick access methods.'
    ),
    createQuizBlock(
      'What should you do to edit existing text with AI?',
      [
        'Delete it and start over',
        'Select the text and use Ask AI',
        'Copy it to another app',
        'Print it out'
      ],
      1,
      'Select text and use Ask AI to access editing commands.',
      'Think about the editing workflow.'
    ),
    createQuizBlock(
      'Which command makes text more concise?',
      [
        'Make longer',
        'Make shorter',
        'Translate',
        'Continue writing'
      ],
      1,
      'The "Make shorter" command condenses text while preserving meaning.',
      'Consider what "concise" means.'
    ),
    createDiscoveryBlock(
      4,
      'Beginner Complete!',
      'Great job! You understand Notion AI basics. Ready for advanced features?'
    ),
  ],
};

// ============================================
// LEVEL 2: INTERMEDIATE
// ============================================

export const notionAiLesson2_1: CoursivLesson = {
  id: 'notion-ai-2-1',
  courseId: 'notion-ai',
  title: 'Summarization',
  subtitle: 'Condensing information',
  blocks: [
    createTextBlock(
      "AI Summarization",
      "📋",
      [
        "Notion AI can summarize long documents, meeting notes, and research into concise overviews.",
        "This is invaluable for quickly understanding content and sharing key points.",
      ]
    ),
    createTextBlock(
      "Summarization Features",
      "📊",
      [
        "**Page Summary**: Summarize entire pages",
        "**Selection Summary**: Summarize specific sections",
        "**Key Points**: Extract main takeaways",
        "**Action Items**: Identify tasks from notes",
      ]
    ),
    createPlaygroundBlock(
      'Summarizing Content',
      'Learn to create effective summaries.',
      { name: 'Notion AI', icon: '📝' },
      'To summarize [content_type], I should [action] and request "[summary_type]".',
      [
        { id: 'content_type', placeholder: 'content type', correctAnswer: 'meeting notes' },
        { id: 'action', placeholder: 'action', correctAnswer: 'select the content' },
        { id: 'summary_type', placeholder: 'summary type', correctAnswer: 'key points and action items' }
      ],
      ['meeting notes', 'select the content', 'key points and action items', 'a long document', 'use the summarize command', 'a brief overview'],
      'Different content types benefit from different summary styles.',
      { title: 'Summarizer!', message: "You know how to summarize effectively!" },
      { title: 'Try again', message: 'Match the summary type to your content.' },
      '/images/course/notion/notion-summarize.png',
      'Ask for specific summary formats like bullet points, paragraphs, or action items.',
      `📋 **Summarization Guide**

**Your Request: Meeting Notes → Key Points & Action Items**

**Original Meeting Notes:**
\`\`\`
Product Team Sync - January 15, 2024

Attendees: Sarah, Mike, Lisa, Tom

Sarah opened by discussing Q4 results. Revenue was up 
15% but user engagement dropped slightly. Mike suggested 
we need to focus on the onboarding flow. Lisa agreed and 
mentioned she's been working on new tutorial designs.

Tom raised concerns about the mobile app performance. 
Users are reporting slow load times. Sarah said we should 
prioritize this in the next sprint.

We discussed the upcoming feature launch. Lisa will 
finalize designs by Friday. Mike will coordinate with 
engineering. Tom will set up monitoring.

Next meeting scheduled for January 22nd.
\`\`\`

**AI Summary:**

## Key Points
- Q4 revenue up 15%, but user engagement declined
- Onboarding flow identified as priority improvement area
- Mobile app performance issues need immediate attention
- New feature launch preparation underway

## Action Items
| Owner | Task | Due |
|-------|------|-----|
| Lisa | Finalize tutorial designs | Friday |
| Mike | Coordinate with engineering | Ongoing |
| Tom | Set up monitoring | Before launch |
| Team | Address mobile performance | Next sprint |

## Next Steps
- Follow-up meeting: January 22nd
- Focus: Sprint planning for mobile fixes

---

**Summary Types:**

| Type | Best For | Command |
|------|----------|---------|
| **Brief** | Quick overview | "Summarize in 2-3 sentences" |
| **Bullet points** | Scannable format | "Summarize as bullet points" |
| **Key points** | Main takeaways | "Extract key points" |
| **Action items** | Task extraction | "List action items" |
| **Executive** | Leadership updates | "Write executive summary" |

**Pro Tips:**
1. Summarize before sharing long docs
2. Use action item extraction for meetings
3. Create summary blocks at page top
4. Specify desired length if needed`
    , true),
    createFeedbackBlock(
      'How often do you need to summarize content?',
      ['Daily', 'Weekly', 'Occasionally'],
      0
    ),
    createDiscoveryBlock(
      5,
      'Smart Summaries',
      'Notion AI can extract key points, action items, and create various summary formats.'
    ),
  ],
};

export const notionAiLesson2_2: CoursivLesson = {
  id: 'notion-ai-2-2',
  courseId: 'notion-ai',
  title: 'Brainstorming & Ideas',
  subtitle: 'Creative AI assistance',
  blocks: [
    createTextBlock(
      "AI Brainstorming",
      "💡",
      [
        "Notion AI is excellent for brainstorming - generating ideas, exploring concepts, and overcoming creative blocks.",
        "Use it to kickstart projects, expand on ideas, or explore new directions.",
      ]
    ),
    createTextBlock(
      "Brainstorming Features",
      "🧠",
      [
        "**Idea Generation**: Get lists of ideas on any topic",
        "**Pros and Cons**: Analyze decisions",
        "**Mind Mapping**: Explore related concepts",
        "**Creative Prompts**: Spark inspiration",
      ]
    ),
    createPlaygroundBlock(
      'Brainstorming with AI',
      'Learn to generate ideas effectively.',
      { name: 'Notion AI', icon: '📝' },
      'To brainstorm [topic], I should ask: "[brainstorm_prompt]"',
      [
        { id: 'topic', placeholder: 'topic', correctAnswer: 'marketing campaign ideas' },
        { id: 'brainstorm_prompt', placeholder: 'prompt', correctAnswer: 'Generate 10 creative marketing campaign ideas for a sustainable fashion brand' }
      ],
      ['marketing campaign ideas', 'Generate 10 creative marketing campaign ideas for a sustainable fashion brand', 'product features', 'List innovative features for a fitness tracking app targeting seniors'],
      'Specific brainstorming prompts yield better ideas.',
      { title: 'Idea generator!', message: "You know how to brainstorm with AI!" },
      { title: 'Try again', message: 'Include context like audience and constraints.' },
      '/images/course/notion/notion-brainstorm.png',
      'Ask for a specific number of ideas and include constraints for more useful results.',
      `💡 **Brainstorming Guide**

**Your Prompt:**
"Generate 10 creative marketing campaign ideas for a sustainable fashion brand"

**Notion AI Response:**

## Marketing Campaign Ideas for Sustainable Fashion

### 1. "Wear Your Values" Social Campaign
User-generated content showing customers living sustainably while wearing the brand.

### 2. Clothing Swap Events
Host community events where customers trade old clothes for store credit.

### 3. Transparency Timeline
Interactive website showing the journey of each garment from raw material to finished product.

### 4. Carbon Footprint Calculator
Tool showing environmental savings compared to fast fashion alternatives.

### 5. Influencer Garden Project
Partner with eco-influencers to plant trees for every purchase.

### 6. "Second Life" Repair Program
Free repair services to extend garment life, with social media documentation.

### 7. Sustainable Fashion Challenge
30-day social media challenge encouraging capsule wardrobes.

### 8. Behind-the-Scenes Documentary
Short film series featuring artisans and sustainable practices.

### 9. Recycled Materials Art Installation
Pop-up art made from textile waste, touring major cities.

### 10. Impact Report Cards
Personalized annual reports showing each customer's environmental impact.

---

**Brainstorming Prompts:**

| Goal | Prompt Template |
|------|-----------------|
| **Ideas** | "Generate [#] ideas for [topic]" |
| **Pros/Cons** | "List pros and cons of [decision]" |
| **Alternatives** | "What are alternatives to [approach]?" |
| **Questions** | "What questions should I ask about [topic]?" |
| **Angles** | "What are different angles to approach [problem]?" |

**Advanced Brainstorming:**
\`\`\`
"Generate 5 marketing ideas that:
- Target Gen Z audience
- Budget under $10,000
- Can be executed in 2 weeks
- Focus on social media
- Align with sustainability values"
\`\`\`

**Pro Tips:**
1. Add constraints for practical ideas
2. Ask for varied approaches
3. Request pros/cons for each idea
4. Follow up to expand on favorites`
    , true),
    createFeedbackBlock(
      'Do you use AI for brainstorming?',
      ['Yes, frequently', 'Sometimes', 'Not yet'],
      0
    ),
    createDiscoveryBlock(
      6,
      'Creative Partner',
      'Notion AI can generate ideas, explore concepts, and help overcome creative blocks.'
    ),
  ],
};

export const notionAiLesson2_3: CoursivLesson = {
  id: 'notion-ai-2-3',
  courseId: 'notion-ai',
  title: 'Database & Automation',
  subtitle: 'AI in Notion databases',
  blocks: [
    createTextBlock(
      "AI in Databases",
      "🗄️",
      [
        "Notion AI integrates with databases, enabling AI-powered properties and automated content generation.",
        "This is powerful for scaling content creation and maintaining consistency.",
      ]
    ),
    createTextBlock(
      "Database AI Features",
      "⚡",
      [
        "**AI Properties**: Auto-generate summaries, tags, etc.",
        "**Bulk Operations**: Apply AI to multiple items",
        "**Templates**: AI-enhanced page templates",
        "**Autofill**: Smart property completion",
      ]
    ),
    createPlaygroundBlock(
      'Using AI in Databases',
      'Learn to leverage AI with databases.',
      { name: 'Notion AI', icon: '📝' },
      'To auto-generate [property_type] for database items, I should create an AI property that [action].',
      [
        { id: 'property_type', placeholder: 'property type', correctAnswer: 'summaries' },
        { id: 'action', placeholder: 'action', correctAnswer: 'summarizes the page content automatically' }
      ],
      ['summaries', 'summarizes the page content automatically'],
      'AI properties can automate repetitive tasks.',
      { title: 'Database AI ready!', message: "You understand AI in databases!" },
      { title: 'Try again', message: 'Think about automating content generation.' },
      '/images/course/notion/notion-database.png',
      'AI properties update automatically when page content changes.',
      `🗄️ **Database AI Guide**

**Your Goal: Auto-Generate Summaries**

**Setting Up AI Properties:**
\`\`\`
1. Open database
2. Add new property → AI
3. Choose "Summary"
4. Configure prompt (optional)
5. AI generates for each item
\`\`\`

**AI Property Types:**

| Type | Function | Example Use |
|------|----------|-------------|
| **Summary** | Condense content | Meeting notes DB |
| **Key info** | Extract specifics | Research DB |
| **Custom** | Your prompt | Any workflow |

**Example: Content Database**

| Title | Content | AI Summary | AI Tags |
|-------|---------|------------|---------|
| Q1 Report | [Long text...] | Revenue up 15%, focus on mobile | finance, quarterly |
| Product Spec | [Long text...] | New feature for user onboarding | product, feature |
| Meeting Notes | [Long text...] | Team aligned on Q2 priorities | meeting, planning |

**Custom AI Property Prompts:**
\`\`\`
"Extract the main decision made in this meeting"
"List all people mentioned in this document"
"Identify the sentiment of this customer feedback"
"Generate 3 relevant hashtags for this content"
\`\`\`

**Bulk AI Operations:**
\`\`\`
1. Select multiple database items
2. Right-click → Ask AI
3. Choose operation (summarize, translate, etc.)
4. Apply to all selected
\`\`\`

**AI-Enhanced Templates:**
\`\`\`
Meeting Notes Template:
- Date: [Auto]
- Attendees: [Input]
- Discussion: [Input]
- AI Summary: [Auto-generated]
- AI Action Items: [Auto-extracted]
\`\`\`

**Pro Tips:**
1. Use AI properties for consistent formatting
2. Create templates with AI placeholders
3. Bulk process imported content
4. Combine with filters for smart views`
    , true),
    createFeedbackBlock(
      'Do you use Notion databases?',
      ['Yes, extensively', 'Sometimes', 'Learning'],
      0
    ),
    createDiscoveryBlock(
      7,
      'Database Intelligence',
      'AI properties can auto-generate summaries, tags, and custom content for database items.'
    ),
  ],
};

export const notionAiLesson2_Quiz: CoursivLesson = {
  id: 'notion-ai-2-quiz',
  courseId: 'notion-ai',
  title: 'Intermediate Quiz',
  subtitle: 'Test your advanced skills',
  blocks: [
    createTextBlock(
      "Intermediate Assessment",
      "📝",
      [
        "Let's test your understanding of intermediate Notion AI techniques!",
        "Pass to complete the Notion AI course.",
      ]
    ),
    createQuizBlock(
      'What can Notion AI extract from meeting notes?',
      [
        'Only the date',
        'Key points and action items',
        'Only attendee names',
        'Nothing useful'
      ],
      1,
      'Notion AI can extract key points, action items, and summaries from meeting notes.',
      'Think about summarization capabilities.'
    ),
    createQuizBlock(
      'How can you get better brainstorming results?',
      [
        'Use vague prompts',
        'Include specific constraints and context',
        'Ask for only one idea',
        'Avoid mentioning the audience'
      ],
      1,
      'Specific prompts with constraints and context yield more useful brainstorming results.',
      'Consider what makes prompts effective.'
    ),
    createQuizBlock(
      'What is an AI property in Notion databases?',
      [
        'A property that requires manual input',
        'A property that auto-generates content using AI',
        'A property for storing images',
        'A property that only works offline'
      ],
      1,
      'AI properties automatically generate content like summaries or tags for database items.',
      'Think about automation in databases.'
    ),
    createQuizBlock(
      'What happens when you update content with an AI Summary property?',
      [
        'Nothing changes',
        'The AI summary updates automatically',
        'You must manually regenerate',
        'The property is deleted'
      ],
      1,
      'AI properties update automatically when the underlying page content changes.',
      'Consider how AI properties stay current.'
    ),
    createDiscoveryBlock(
      8,
      'Course Complete!',
      'Congratulations! You\'ve mastered Notion AI from basics to database integration!'
    ),
  ],
};

// Export all lessons
export const notionAiLessons: CoursivLesson[] = [
  // Level 1: Beginner
  notionAiLesson1_1,
  notionAiLesson1_2,
  notionAiLesson1_3,
  notionAiLesson1_Quiz,
  // Level 2: Intermediate
  notionAiLesson2_1,
  notionAiLesson2_2,
  notionAiLesson2_3,
  notionAiLesson2_Quiz,
];
