/**
 * All Course Data for Coursiv
 * 
 * This file contains complete course content data for all courses.
 * Each course follows the Coursiv-style content structure with:
 * - Text blocks (educational content)
 * - Playground blocks (fill-in-the-blank exercises)
 * - Quiz blocks (multiple choice questions)
 * - Discovery blocks (knowledge highlights)
 * - Feedback blocks (user surveys)
 * 
 * Content Density Rules:
 * - Every 2-3 text blocks → 1 playground
 * - Every 4-5 playgrounds → 1 quiz
 * - Every playground → 1 feedback + 1 discovery
 */

import {
  ContentBlock,
  CoursivLesson,
  createTextBlock,
  createPlaygroundBlock,
  createQuizBlock,
  createDiscoveryBlock,
  createFeedbackBlock,
} from './courseContentTypes';

// ============================================
// CHATGPT MASTERY COURSE
// ============================================

const chatgptLesson1_1: CoursivLesson = {
  id: 'chatgpt-1-1',
  courseId: 'chatgpt',
  title: "ChatGPT's Brain",
  subtitle: 'Understanding how ChatGPT thinks',
  blocks: [
    // Text 1
    createTextBlock(
      "What is ChatGPT?",
      "🧠",
      [
        "ChatGPT is an AI language model developed by OpenAI. It's designed to understand and generate human-like text based on the input it receives.",
        "Think of it as a very sophisticated autocomplete system that has read billions of pages of text and learned patterns in human language.",
      ]
    ),
    // Text 2
    createTextBlock(
      "How Does It Work?",
      "⚙️",
      [
        "ChatGPT uses a technology called **transformers** to process and generate text. It doesn't actually \"think\" like humans do - instead, it predicts the most likely next words based on patterns it learned during training.",
        "When you send a message, ChatGPT analyzes the context and generates a response word by word, always choosing what seems most appropriate based on its training.",
      ]
    ),
    // Playground 1
    createPlaygroundBlock(
      'Your First Prompt',
      'Send a simple question to ChatGPT. Choose the best way to ask for help with dinner.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Help me ' },
        { type: 'blank', label: 'action' },
        { type: 'text', content: ' for dinner tonight.' },
      ],
      ['order a pizza', 'cook pasta', 'find a restaurant'],
      { action: 'order a pizza' },
      'Think about what action you want ChatGPT to help you with. The most direct request usually works best.',
      { title: 'Great!', message: 'You\'ve sent your first prompt to ChatGPT!' },
      { title: 'Not quite!', message: 'Try choosing a more specific action. "Order a pizza" is a clear, actionable request.' }
    ),
    // Feedback 1
    createFeedbackBlock(
      'Was this exercise helpful?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    // Discovery 1
    createDiscoveryBlock(
      1,
      'First Discovery',
      'ChatGPT works best when you give it clear, specific instructions. The more context you provide, the better the response!'
    ),
    // Text 3
    createTextBlock(
      "Understanding Context",
      "📝",
      [
        "ChatGPT remembers the conversation context within a single chat session. This means you can refer back to earlier messages and build on previous responses.",
        "However, it doesn't remember conversations between different sessions - each new chat starts fresh.",
      ]
    ),
    // Playground 2
    createPlaygroundBlock(
      'Adding Context',
      'Make your request more specific by adding context.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'I\'m a ' },
        { type: 'blank', label: 'role' },
        { type: 'text', content: '. Help me write a professional email.' },
      ],
      ['software engineer', 'marketing manager', 'student'],
      { role: 'software engineer' },
      'Adding your role helps ChatGPT tailor the response to your specific needs and communication style.',
      { title: 'Perfect!', message: 'Adding context about your role helps ChatGPT give more relevant responses!' },
      { title: 'Try again!', message: 'While all options work, "software engineer" provides the most specific professional context.' }
    ),
    // Feedback 2
    createFeedbackBlock(
      'Did adding context make sense?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    // Discovery 2
    createDiscoveryBlock(
      2,
      'Context is Key',
      'The more context you provide (your role, goal, audience), the more tailored and useful ChatGPT\'s responses will be.'
    ),
    // Text 4
    createTextBlock(
      "Limitations to Know",
      "⚠️",
      [
        "ChatGPT has some important limitations you should be aware of:",
        "• **Knowledge cutoff**: It doesn't know about events after its training date",
        "• **No internet access**: It can't browse the web or access real-time information",
        "• **Can make mistakes**: It may generate incorrect or outdated information",
        "• **No memory between sessions**: Each conversation starts fresh",
      ]
    ),
    // Playground 3
    createPlaygroundBlock(
      'Fact-Checking Awareness',
      'When should you verify ChatGPT\'s response?',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'I should fact-check ChatGPT when it provides ' },
        { type: 'blank', label: 'type' },
        { type: 'text', content: ' information.' },
      ],
      ['statistical', 'creative', 'formatting'],
      { type: 'statistical' },
      'Think about which type of information is most likely to be incorrect or outdated.',
      { title: 'Correct!', message: 'Statistical and factual information should always be verified from reliable sources!' },
      { title: 'Not quite!', message: 'Statistical and factual claims are most likely to be incorrect. Always verify numbers and facts!' }
    ),
    // Feedback 3
    createFeedbackBlock(
      'Do you understand the limitations?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    // Discovery 3
    createDiscoveryBlock(
      3,
      'Trust but Verify',
      'Always fact-check important information from ChatGPT, especially statistics, dates, and factual claims.'
    ),
    // Quiz
    createQuizBlock(
      'What is the best way to get accurate responses from ChatGPT?',
      [
        'Ask very short questions',
        'Provide clear context and specific instructions',
        'Use technical jargon',
        'Ask multiple questions at once',
      ],
      1,
      'Providing clear context and specific instructions helps ChatGPT understand exactly what you need and generate more relevant responses.',
      'Think about what helps any assistant (human or AI) give you better answers.'
    ),
  ],
};

const chatgptLesson1_2: CoursivLesson = {
  id: 'chatgpt-1-2',
  courseId: 'chatgpt',
  title: 'Creating Your First Prompt',
  subtitle: 'Learn the basics of prompt writing',
  blocks: [
    // Text 1
    createTextBlock(
      "What is a Prompt?",
      "✍️",
      [
        "A **prompt** is the text you send to ChatGPT to get a response. It's like giving instructions to a very capable assistant.",
        "The quality of your prompt directly affects the quality of the response you get. Better prompts = better answers!",
      ]
    ),
    // Text 2
    createTextBlock(
      "The Anatomy of a Good Prompt",
      "🔍",
      [
        "A well-structured prompt typically includes:",
        "• **Task**: What you want ChatGPT to do",
        "• **Context**: Background information",
        "• **Format**: How you want the response structured",
        "• **Tone**: The style of communication",
      ]
    ),
    // Playground 1
    createPlaygroundBlock(
      'Building a Complete Prompt',
      'Create a prompt with all the key elements.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Write a ' },
        { type: 'blank', label: 'format' },
        { type: 'text', content: ' about productivity tips for remote workers.' },
      ],
      ['bullet-point list', 'long essay', 'poem'],
      { format: 'bullet-point list' },
      'Consider which format would be most useful for someone looking for quick, actionable tips.',
      { title: 'Excellent!', message: 'A bullet-point list is perfect for actionable tips that are easy to scan and implement!' },
      { title: 'Try again!', message: 'For productivity tips, a bullet-point list is more practical and easier to follow than other formats.' }
    ),
    // Feedback 1
    createFeedbackBlock(
      'Was the format choice clear?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    // Discovery 1
    createDiscoveryBlock(
      1,
      'Format Matters',
      'Specifying the output format (list, paragraph, table, etc.) helps you get responses that are immediately useful.'
    ),
    // Text 3
    createTextBlock(
      "Being Specific",
      "🎯",
      [
        "Vague prompts lead to vague answers. The more specific you are, the better.",
        "Instead of: \"Tell me about marketing\"\nTry: \"Give me 5 social media marketing strategies for a small bakery business\"",
      ]
    ),
    // Playground 2
    createPlaygroundBlock(
      'Making Prompts Specific',
      'Transform a vague prompt into a specific one.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Give me ' },
        { type: 'blank', label: 'number' },
        { type: 'text', content: ' email subject lines for a product launch.' },
      ],
      ['some', '5', 'many'],
      { number: '5' },
      'Specific numbers help ChatGPT know exactly how many examples to provide.',
      { title: 'Perfect!', message: 'Specifying "5" gives you a concrete number of options to choose from!' },
      { title: 'Not quite!', message: 'Using a specific number like "5" is better than vague terms like "some" or "many".' }
    ),
    // Feedback 2
    createFeedbackBlock(
      'Do you see the value of specificity?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    // Discovery 2
    createDiscoveryBlock(
      2,
      'Numbers Work',
      'Using specific numbers (5 tips, 3 examples, 10 ideas) gives you predictable, usable output.'
    ),
    // Playground 3
    createPlaygroundBlock(
      'Adding Tone',
      'Set the right tone for your audience.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Write a ' },
        { type: 'blank', label: 'tone' },
        { type: 'text', content: ' message to announce our new feature to customers.' },
      ],
      ['formal', 'friendly', 'technical'],
      { tone: 'friendly' },
      'Think about how most companies communicate with their customers in announcements.',
      { title: 'Great choice!', message: 'A friendly tone is perfect for customer-facing communications!' },
      { title: 'Consider this!', message: 'For customer announcements, a friendly tone typically works best to build connection.' }
    ),
    // Feedback 3
    createFeedbackBlock(
      'Was choosing the tone helpful?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    // Discovery 3
    createDiscoveryBlock(
      3,
      'Tone Sets Expectations',
      'Specifying tone (formal, casual, professional, friendly) ensures the response matches your audience and purpose.'
    ),
    // Playground 4
    createPlaygroundBlock(
      'Complete Prompt Structure',
      'Put it all together: task + context + format + tone.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'As a ' },
        { type: 'blank', label: 'role' },
        { type: 'text', content: ', write 3 tips for new employees in a friendly tone.' },
      ],
      ['HR manager', 'random person', 'robot'],
      { role: 'HR manager' },
      'The role you assign affects the expertise and perspective of the response.',
      { title: 'Excellent!', message: 'An HR manager perspective gives authoritative, relevant onboarding advice!' },
      { title: 'Try again!', message: 'Assigning a relevant professional role (like HR manager) gives more credible, useful advice.' }
    ),
    // Feedback 4
    createFeedbackBlock(
      'Did the complete structure make sense?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    // Discovery 4
    createDiscoveryBlock(
      4,
      'The Complete Formula',
      'Role + Task + Context + Format + Tone = Powerful prompts that get exactly what you need.'
    ),
    // Quiz
    createQuizBlock(
      'Which prompt is most likely to get a useful response?',
      [
        'Tell me about business',
        'Write something about marketing',
        'Give me 5 Instagram post ideas for a fitness brand targeting young adults',
        'Help me with social media',
      ],
      2,
      'This prompt includes specificity (5 ideas), platform (Instagram), industry (fitness), and audience (young adults) - all the elements of a great prompt!',
      'Look for the prompt that includes the most specific details about what is needed.'
    ),
  ],
};

const chatgptLesson1_3: CoursivLesson = {
  id: 'chatgpt-1-3',
  courseId: 'chatgpt',
  title: 'Understanding Responses',
  subtitle: 'How to interpret and refine AI responses',
  blocks: [
    createTextBlock(
      "Reading AI Responses",
      "📖",
      [
        "When ChatGPT responds, it's important to evaluate the output critically. Not every response will be perfect on the first try.",
        "Look for: accuracy, relevance, completeness, and tone. If something's off, you can always ask for refinements.",
      ]
    ),
    createTextBlock(
      "Iterating on Responses",
      "🔄",
      [
        "One of ChatGPT's strengths is that you can have a conversation. If the first response isn't quite right, you can:",
        "• Ask for more detail on specific points",
        "• Request a different format or structure",
        "• Ask it to adjust the tone or length",
        "• Provide feedback on what to change",
      ]
    ),
    createPlaygroundBlock(
      'Refining a Response',
      'Practice asking for a refinement.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'That\'s good, but can you make it more ' },
        { type: 'blank', label: 'adjustment' },
        { type: 'text', content: '?' },
      ],
      ['concise', 'longer', 'complicated'],
      { adjustment: 'concise' },
      'Think about what adjustment would make most responses more useful in a professional context.',
      { title: 'Perfect!', message: 'Asking for concise responses helps you get to the point faster!' },
      { title: 'Consider this!', message: 'In most cases, asking for more concise responses improves usability.' }
    ),
    createFeedbackBlock(
      'Was the refinement concept clear?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Iteration is Normal',
      'Don\'t expect perfection on the first try. The best results come from refining and iterating on responses.'
    ),
    createPlaygroundBlock(
      'Asking for Examples',
      'Request concrete examples to clarify abstract concepts.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Can you give me ' },
        { type: 'blank', label: 'type' },
        { type: 'text', content: ' of how this works in practice?' },
      ],
      ['an example', 'a theory', 'a definition'],
      { type: 'an example' },
      'Examples make abstract concepts concrete and easier to understand.',
      { title: 'Great!', message: 'Examples are the best way to understand how something works in practice!' },
      { title: 'Try again!', message: 'Asking for examples helps you see practical applications of concepts.' }
    ),
    createFeedbackBlock(
      'Do examples help your understanding?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Examples Clarify',
      'When something is unclear, asking for specific examples is one of the most effective ways to understand it better.'
    ),
    createQuizBlock(
      'What should you do if ChatGPT\'s response is too long?',
      [
        'Start a new conversation',
        'Give up and try a different AI',
        'Ask ChatGPT to summarize or make it more concise',
        'Accept it as is',
      ],
      2,
      'ChatGPT can easily adjust the length of its responses. Just ask it to summarize, shorten, or focus on key points.',
      'Remember that you can always ask ChatGPT to modify its response.'
    ),
  ],
};

const chatgptLesson1_4: CoursivLesson = {
  id: 'chatgpt-1-4',
  courseId: 'chatgpt',
  title: 'Basic Prompt Techniques',
  subtitle: 'Essential techniques for better results',
  blocks: [
    createTextBlock(
      "The Role Technique",
      "🎭",
      [
        "One of the most powerful techniques is assigning ChatGPT a role. This shapes how it responds.",
        "Example: \"Act as a senior software engineer and review this code\" will give you more technical, expert-level feedback.",
      ]
    ),
    createPlaygroundBlock(
      'Assigning Roles',
      'Practice the role technique.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Act as a ' },
        { type: 'blank', label: 'role' },
        { type: 'text', content: ' and give me feedback on my resume.' },
      ],
      ['hiring manager', 'friend', 'random person'],
      { role: 'hiring manager' },
      'Think about who would give the most valuable feedback on a resume.',
      { title: 'Excellent!', message: 'A hiring manager perspective gives you the most relevant professional feedback!' },
      { title: 'Consider this!', message: 'A hiring manager would give the most useful, professional feedback on a resume.' }
    ),
    createFeedbackBlock(
      'Did the role technique make sense?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Roles Shape Responses',
      'Assigning a specific role (expert, teacher, critic) changes the perspective and depth of ChatGPT\'s responses.'
    ),
    createTextBlock(
      "The Step-by-Step Technique",
      "📋",
      [
        "For complex tasks, ask ChatGPT to think step-by-step. This often produces more thorough and accurate results.",
        "Simply add \"Let's think step by step\" or \"Break this down into steps\" to your prompt.",
      ]
    ),
    createPlaygroundBlock(
      'Step-by-Step Thinking',
      'Apply the step-by-step technique.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Help me plan a product launch. ' },
        { type: 'blank', label: 'instruction' },
        { type: 'text', content: '.' },
      ],
      ['Break it down step by step', 'Just give me the answer', 'Be quick'],
      { instruction: 'Break it down step by step' },
      'Complex tasks benefit from structured, step-by-step approaches.',
      { title: 'Perfect!', message: 'Step-by-step instructions help ChatGPT provide more thorough, organized responses!' },
      { title: 'Try again!', message: 'For complex tasks, asking for step-by-step breakdown produces better results.' }
    ),
    createFeedbackBlock(
      'Is step-by-step useful for complex tasks?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Break It Down',
      'The step-by-step technique is especially powerful for complex problems, planning, and analysis tasks.'
    ),
    createTextBlock(
      "The Example Technique",
      "📝",
      [
        "Showing ChatGPT an example of what you want is incredibly effective. This is called \"few-shot prompting.\"",
        "Example: \"Write product descriptions like this: [your example]. Now write one for [new product].\"",
      ]
    ),
    createPlaygroundBlock(
      'Learning from Examples',
      'Use the example technique.',
      { name: 'ChatGPT', icon: '💬' },
      [
        { type: 'text', content: 'Here\'s an example of the style I want: "Fresh, organic, delicious." Now write ' },
        { type: 'blank', label: 'number' },
        { type: 'text', content: ' more taglines like this for a coffee brand.' },
      ],
      ['3', 'some', 'a few'],
      { number: '3' },
      'Specific numbers combined with examples give you predictable, styled output.',
      { title: 'Great!', message: 'Combining examples with specific numbers gives you exactly what you need!' },
      { title: 'Consider this!', message: 'Using a specific number like "3" gives you a predictable amount of output.' }
    ),
    createFeedbackBlock(
      'Did the example technique help?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      3,
      'Show, Don\'t Just Tell',
      'Providing examples (few-shot prompting) is one of the most effective ways to get consistent, styled output.'
    ),
    createQuizBlock(
      'Which technique is best for complex problem-solving tasks?',
      [
        'Asking for a one-word answer',
        'The step-by-step technique',
        'Using emojis',
        'Writing in all caps',
      ],
      1,
      'The step-by-step technique helps ChatGPT break down complex problems into manageable parts, leading to more thorough and accurate solutions.',
      'Think about which approach would help with complex, multi-part problems.'
    ),
  ],
};

// ============================================
// DALL-E MASTERY COURSE
// ============================================

const dalleLesson1_1: CoursivLesson = {
  id: 'dalle-1-1',
  courseId: 'dall-e',
  title: 'Introduction to DALL-E',
  subtitle: 'Understanding AI image generation',
  blocks: [
    createTextBlock(
      "What is DALL-E?",
      "🎨",
      [
        "DALL-E is an AI image generation model created by OpenAI. It can create images from text descriptions, turning your words into visual art.",
        "The name is a combination of the artist Salvador Dalí and the Pixar robot WALL-E, reflecting its creative and technological nature.",
      ]
    ),
    createTextBlock(
      "How Does It Work?",
      "🔮",
      [
        "DALL-E uses a type of AI called a **diffusion model**. It starts with random noise and gradually refines it into an image that matches your description.",
        "The more detailed and specific your prompt, the better DALL-E can understand and create what you're imagining.",
      ]
    ),
    createPlaygroundBlock(
      'Your First Image Prompt',
      'Create a simple image description.',
      { name: 'DALL-E', icon: '🎨' },
      [
        { type: 'text', content: 'A ' },
        { type: 'blank', label: 'subject' },
        { type: 'text', content: ' in a sunny garden.' },
      ],
      ['golden retriever', 'abstract shape', 'blurry thing'],
      { subject: 'golden retriever' },
      'Concrete, specific subjects work better than abstract or vague descriptions.',
      { title: 'Perfect!', message: 'A golden retriever is a clear, specific subject that DALL-E can visualize well!' },
      { title: 'Try again!', message: 'Specific, concrete subjects like "golden retriever" produce better results than vague descriptions.' }
    ),
    createFeedbackBlock(
      'Was this introduction helpful?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Be Specific',
      'DALL-E works best with specific, concrete descriptions. "A golden retriever" is better than "a dog" or "an animal".'
    ),
    createTextBlock(
      "What Can DALL-E Create?",
      "✨",
      [
        "DALL-E can create a wide variety of images:",
        "• **Photorealistic images**: Scenes that look like photographs",
        "• **Artistic styles**: Paintings, illustrations, digital art",
        "• **Abstract concepts**: Visual representations of ideas",
        "• **Product mockups**: Designs for products and packaging",
      ]
    ),
    createPlaygroundBlock(
      'Choosing a Style',
      'Specify an artistic style for your image.',
      { name: 'DALL-E', icon: '🎨' },
      [
        { type: 'text', content: 'A mountain landscape in the style of ' },
        { type: 'blank', label: 'style' },
        { type: 'text', content: '.' },
      ],
      ['impressionist painting', 'random scribbles', 'no style'],
      { style: 'impressionist painting' },
      'Artistic styles give DALL-E clear direction for how to render the image.',
      { title: 'Excellent!', message: 'Specifying "impressionist painting" gives DALL-E a clear artistic direction!' },
      { title: 'Consider this!', message: 'Specifying a known artistic style helps DALL-E create more cohesive images.' }
    ),
    createFeedbackBlock(
      'Did the style concept make sense?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Style Matters',
      'Adding artistic style references (impressionist, watercolor, digital art) dramatically changes the output.'
    ),
    createQuizBlock(
      'What type of AI model does DALL-E use?',
      [
        'A translation model',
        'A diffusion model',
        'A search engine',
        'A calculator',
      ],
      1,
      'DALL-E uses a diffusion model, which starts with noise and gradually refines it into an image matching your description.',
      'Think about how DALL-E creates images from random noise.'
    ),
  ],
};

const dalleLesson1_2: CoursivLesson = {
  id: 'dalle-1-2',
  courseId: 'dall-e',
  title: 'Your First Image',
  subtitle: 'Creating your first AI image',
  blocks: [
    createTextBlock(
      "Crafting Your First Prompt",
      "📝",
      [
        "Creating great images starts with great prompts. A good DALL-E prompt typically includes:",
        "• **Subject**: What's in the image",
        "• **Setting**: Where it takes place",
        "• **Style**: How it should look",
        "• **Details**: Specific attributes",
      ]
    ),
    createPlaygroundBlock(
      'Building a Complete Prompt',
      'Combine subject, setting, and style.',
      { name: 'DALL-E', icon: '🎨' },
      [
        { type: 'text', content: 'A ' },
        { type: 'blank', label: 'subject' },
        { type: 'text', content: ' sitting in a cozy coffee shop, digital art style.' },
      ],
      ['cat wearing glasses', 'something', 'blur'],
      { subject: 'cat wearing glasses' },
      'Interesting, specific subjects with unique details create more engaging images.',
      { title: 'Great!', message: 'A cat wearing glasses is specific and interesting - perfect for a memorable image!' },
      { title: 'Try again!', message: 'Specific, interesting subjects like "cat wearing glasses" create better images than vague descriptions.' }
    ),
    createFeedbackBlock(
      'Was building the prompt intuitive?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Details Add Interest',
      'Adding unique details (wearing glasses, holding a book) makes your images more interesting and specific.'
    ),
    createTextBlock(
      "Describing Lighting and Mood",
      "💡",
      [
        "Lighting dramatically affects the mood of your image. Consider adding:",
        "• **Golden hour**: Warm, soft lighting",
        "• **Dramatic lighting**: High contrast, shadows",
        "• **Soft diffused light**: Even, gentle illumination",
        "• **Neon lights**: Colorful, urban feel",
      ]
    ),
    createPlaygroundBlock(
      'Adding Lighting',
      'Specify the lighting for your scene.',
      { name: 'DALL-E', icon: '🎨' },
      [
        { type: 'text', content: 'A forest path with ' },
        { type: 'blank', label: 'lighting' },
        { type: 'text', content: ' filtering through the trees.' },
      ],
      ['golden sunlight', 'no light', 'darkness'],
      { lighting: 'golden sunlight' },
      'Lighting creates mood and atmosphere in your images.',
      { title: 'Beautiful!', message: 'Golden sunlight creates a warm, inviting atmosphere!' },
      { title: 'Consider this!', message: 'Golden sunlight creates a warm, magical atmosphere that works well for forest scenes.' }
    ),
    createFeedbackBlock(
      'Did lighting make a difference?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Light Sets Mood',
      'Describing lighting (golden hour, dramatic shadows, soft diffused) transforms the entire feel of your image.'
    ),
    createPlaygroundBlock(
      'Complete Image Description',
      'Put all elements together.',
      { name: 'DALL-E', icon: '🎨' },
      [
        { type: 'text', content: 'A peaceful Japanese garden with a ' },
        { type: 'blank', label: 'element' },
        { type: 'text', content: ', cherry blossoms falling, watercolor painting style.' },
      ],
      ['small wooden bridge', 'random object', 'nothing'],
      { element: 'small wooden bridge' },
      'Focal elements give the image a clear point of interest.',
      { title: 'Perfect!', message: 'A small wooden bridge adds a beautiful focal point to the Japanese garden!' },
      { title: 'Try again!', message: 'A specific focal element like a bridge gives the image structure and interest.' }
    ),
    createFeedbackBlock(
      'Did the complete prompt work well?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      3,
      'Focal Points',
      'Including a focal element (bridge, person, object) gives your image a clear center of interest.'
    ),
    createQuizBlock(
      'Which prompt element has the biggest impact on the mood of an image?',
      [
        'The file format',
        'The lighting description',
        'The image size',
        'The number of objects',
      ],
      1,
      'Lighting has the most significant impact on mood. Golden hour creates warmth, dramatic lighting creates tension, soft light creates calm.',
      'Think about what changes the emotional feel of a photograph or painting.'
    ),
  ],
};

// ============================================
// MIDJOURNEY MASTERY COURSE
// ============================================

const midjourneyLesson1_1: CoursivLesson = {
  id: 'mj-1-1',
  courseId: 'midjourney',
  title: 'What is Midjourney?',
  subtitle: 'Introduction to Midjourney',
  blocks: [
    createTextBlock(
      "Welcome to Midjourney",
      "🖼️",
      [
        "Midjourney is an AI art generator known for creating stunning, artistic images. It's particularly good at creating beautiful, stylized artwork.",
        "Unlike other AI image tools, Midjourney runs through Discord, making it a unique community-driven experience.",
      ]
    ),
    createTextBlock(
      "What Makes Midjourney Special?",
      "✨",
      [
        "Midjourney excels at:",
        "• **Artistic quality**: Beautiful, painterly aesthetics",
        "• **Imaginative scenes**: Fantasy, sci-fi, surreal imagery",
        "• **Consistent style**: Recognizable Midjourney look",
        "• **Community**: Active Discord community for inspiration",
      ]
    ),
    createPlaygroundBlock(
      'Understanding Midjourney Style',
      'Midjourney has a distinctive aesthetic. What type of images is it best known for?',
      { name: 'Midjourney', icon: '🖼️' },
      [
        { type: 'text', content: 'Midjourney is best known for creating ' },
        { type: 'blank', label: 'type' },
        { type: 'text', content: ' images.' },
      ],
      ['artistic and stylized', 'plain text', 'spreadsheets'],
      { type: 'artistic and stylized' },
      'Think about what Midjourney is famous for in the AI art community.',
      { title: 'Correct!', message: 'Midjourney is renowned for its artistic, stylized aesthetic!' },
      { title: 'Not quite!', message: 'Midjourney is specifically known for creating artistic, stylized images.' }
    ),
    createFeedbackBlock(
      'Was this introduction clear?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Artistic Excellence',
      'Midjourney\'s strength is artistic, stylized imagery. It naturally creates beautiful, painterly results.'
    ),
    createPlaygroundBlock(
      'Midjourney vs Other Tools',
      'Understanding when to use Midjourney.',
      { name: 'Midjourney', icon: '🖼️' },
      [
        { type: 'text', content: 'For creating fantasy concept art, I would choose ' },
        { type: 'blank', label: 'tool' },
        { type: 'text', content: '.' },
      ],
      ['Midjourney', 'a calculator', 'a text editor'],
      { tool: 'Midjourney' },
      'Consider which tool is best suited for artistic, imaginative imagery.',
      { title: 'Perfect!', message: 'Midjourney excels at fantasy and concept art!' },
      { title: 'Try again!', message: 'Midjourney is the ideal choice for fantasy and artistic concept work.' }
    ),
    createFeedbackBlock(
      'Do you understand when to use Midjourney?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Right Tool for the Job',
      'Midjourney is ideal for artistic, fantasy, and concept art. For photorealistic images, other tools might be better.'
    ),
    createQuizBlock(
      'Where does Midjourney run?',
      [
        'As a mobile app',
        'Through Discord',
        'In Microsoft Word',
        'On a gaming console',
      ],
      1,
      'Midjourney operates through Discord, which creates a unique community experience where you can see others\' creations and get inspiration.',
      'Think about the unique platform Midjourney uses.'
    ),
  ],
};

// ============================================
// CLAUDE AI COURSE
// ============================================

const claudeLesson1_1: CoursivLesson = {
  id: 'claude-1-1',
  courseId: 'claude',
  title: 'Meet Claude',
  subtitle: 'What makes Claude different',
  blocks: [
    createTextBlock(
      "Introducing Claude",
      "🤖",
      [
        "Claude is an AI assistant created by Anthropic. It's designed to be helpful, harmless, and honest.",
        "Claude excels at nuanced conversations, analysis, and tasks requiring careful reasoning.",
      ]
    ),
    createTextBlock(
      "Claude's Strengths",
      "💪",
      [
        "Claude is particularly good at:",
        "• **Long-form analysis**: Detailed, thoughtful responses",
        "• **Nuanced reasoning**: Handling complex, ambiguous topics",
        "• **Document analysis**: Processing and summarizing long texts",
        "• **Ethical considerations**: Thoughtful about potential harms",
      ]
    ),
    createPlaygroundBlock(
      'Understanding Claude',
      'What is Claude best known for?',
      { name: 'Claude', icon: '🤖' },
      [
        { type: 'text', content: 'Claude is particularly strong at ' },
        { type: 'blank', label: 'strength' },
        { type: 'text', content: ' tasks.' },
      ],
      ['analysis and reasoning', 'image generation', 'video editing'],
      { strength: 'analysis and reasoning' },
      'Think about what type of tasks require careful, nuanced thinking.',
      { title: 'Correct!', message: 'Claude excels at analysis and nuanced reasoning tasks!' },
      { title: 'Not quite!', message: 'Claude is specifically designed for analysis and reasoning, not media generation.' }
    ),
    createFeedbackBlock(
      'Was this introduction helpful?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Thoughtful AI',
      'Claude is designed for thoughtful, nuanced responses. It\'s great for analysis, writing, and complex reasoning.'
    ),
    createQuizBlock(
      'What company created Claude?',
      [
        'OpenAI',
        'Google',
        'Anthropic',
        'Microsoft',
      ],
      2,
      'Claude was created by Anthropic, a company focused on AI safety and building helpful, harmless, and honest AI systems.',
      'Remember the company that focuses on AI safety.'
    ),
  ],
};

// ============================================
// GOOGLE GEMINI COURSE
// ============================================

const geminiLesson1_1: CoursivLesson = {
  id: 'gemini-1-1',
  courseId: 'gemini',
  title: 'Introduction to Gemini',
  subtitle: 'Google\'s multimodal AI',
  blocks: [
    createTextBlock(
      "What is Gemini?",
      "💎",
      [
        "Gemini is Google's most capable AI model. It's designed to be multimodal, meaning it can understand and work with text, images, audio, and video.",
        "Gemini comes in different sizes: Ultra (most capable), Pro (balanced), and Nano (efficient for devices).",
      ]
    ),
    createTextBlock(
      "Multimodal Capabilities",
      "🔄",
      [
        "Gemini's multimodal nature means it can:",
        "• **Analyze images**: Understand and describe visual content",
        "• **Process documents**: Read and extract information from PDFs",
        "• **Understand context**: Combine text and visual information",
        "• **Generate responses**: Create text based on multiple input types",
      ]
    ),
    createPlaygroundBlock(
      'Understanding Multimodal AI',
      'What makes Gemini different from text-only AI?',
      { name: 'Gemini', icon: '💎' },
      [
        { type: 'text', content: 'Gemini can process ' },
        { type: 'blank', label: 'capability' },
        { type: 'text', content: ' in addition to text.' },
      ],
      ['images and video', 'only text', 'nothing else'],
      { capability: 'images and video' },
      'Think about what "multimodal" means in the context of AI.',
      { title: 'Correct!', message: 'Gemini\'s multimodal capabilities include processing images, audio, and video!' },
      { title: 'Not quite!', message: 'Multimodal means Gemini can process multiple types of media, not just text.' }
    ),
    createFeedbackBlock(
      'Was the multimodal concept clear?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Beyond Text',
      'Multimodal AI like Gemini can understand and work with text, images, audio, and video together.'
    ),
    createQuizBlock(
      'What does "multimodal" mean for Gemini?',
      [
        'It can only process text',
        'It can process multiple types of media (text, images, audio, video)',
        'It runs on multiple computers',
        'It speaks multiple languages',
      ],
      1,
      'Multimodal means Gemini can understand and process multiple types of media inputs, not just text.',
      'Think about what "multi" and "modal" suggest about input types.'
    ),
  ],
};

// ============================================
// STABLE DIFFUSION COURSE
// ============================================

const stableDiffusionLesson1_1: CoursivLesson = {
  id: 'sd-1-1',
  courseId: 'stable-diffusion',
  title: 'Introduction to Stable Diffusion',
  subtitle: 'Open-source AI image generation',
  blocks: [
    createTextBlock(
      "What is Stable Diffusion?",
      "🎭",
      [
        "Stable Diffusion is an open-source AI image generation model. Unlike proprietary tools, you can run it on your own computer and customize it extensively.",
        "It's known for flexibility, customization options, and a vibrant community creating custom models and extensions.",
      ]
    ),
    createTextBlock(
      "Why Stable Diffusion?",
      "🔓",
      [
        "Stable Diffusion offers unique advantages:",
        "• **Open source**: Free to use and modify",
        "• **Local running**: Run on your own hardware",
        "• **Customizable**: Train custom models, use extensions",
        "• **No content restrictions**: More creative freedom",
        "• **Community models**: Thousands of specialized models",
      ]
    ),
    createPlaygroundBlock(
      'Understanding Open Source AI',
      'What is a key advantage of Stable Diffusion being open source?',
      { name: 'Stable Diffusion', icon: '🎭' },
      [
        { type: 'text', content: 'Being open source means I can ' },
        { type: 'blank', label: 'advantage' },
        { type: 'text', content: ' Stable Diffusion.' },
      ],
      ['run locally and customize', 'only use online', 'never modify'],
      { advantage: 'run locally and customize' },
      'Think about what "open source" means for software.',
      { title: 'Correct!', message: 'Open source means you can run it locally and customize it to your needs!' },
      { title: 'Not quite!', message: 'Open source software can be run locally, modified, and customized freely.' }
    ),
    createFeedbackBlock(
      'Was the open source concept clear?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Freedom to Create',
      'Stable Diffusion\'s open-source nature means unlimited customization, local processing, and no usage fees.'
    ),
    createPlaygroundBlock(
      'Choosing the Right Tool',
      'When would you choose Stable Diffusion over other AI image tools?',
      { name: 'Stable Diffusion', icon: '🎭' },
      [
        { type: 'text', content: 'I would choose Stable Diffusion when I need ' },
        { type: 'blank', label: 'need' },
        { type: 'text', content: '.' },
      ],
      ['maximum customization', 'the simplest option', 'no learning'],
      { need: 'maximum customization' },
      'Consider what makes Stable Diffusion unique compared to other tools.',
      { title: 'Perfect!', message: 'Stable Diffusion is the best choice when you need maximum control and customization!' },
      { title: 'Consider this!', message: 'Stable Diffusion\'s strength is customization, though it has a steeper learning curve.' }
    ),
    createFeedbackBlock(
      'Do you understand when to use Stable Diffusion?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Power vs Simplicity',
      'Stable Diffusion offers the most power and customization, but requires more technical knowledge than cloud-based alternatives.'
    ),
    createQuizBlock(
      'What is a unique feature of Stable Diffusion compared to DALL-E or Midjourney?',
      [
        'It only works online',
        'It\'s open source and can run locally',
        'It\'s made by OpenAI',
        'It only creates text',
      ],
      1,
      'Stable Diffusion is open source, meaning you can download it, run it on your own computer, and customize it however you want.',
      'Think about what makes Stable Diffusion different from proprietary tools.'
    ),
  ],
};

// ============================================
// EXPORT ALL LESSONS
// ============================================

export const allLessons: Record<string, CoursivLesson> = {
  // ChatGPT
  'chatgpt-1-1': chatgptLesson1_1,
  'chatgpt-1-2': chatgptLesson1_2,
  'chatgpt-1-3': chatgptLesson1_3,
  'chatgpt-1-4': chatgptLesson1_4,
  // DALL-E
  'dalle-1-1': dalleLesson1_1,
  'dalle-1-2': dalleLesson1_2,
  // Midjourney
  'mj-1-1': midjourneyLesson1_1,
  // Claude
  'claude-1-1': claudeLesson1_1,
  // Gemini
  'gemini-1-1': geminiLesson1_1,
  // Stable Diffusion
  'sd-1-1': stableDiffusionLesson1_1,
};

// Helper function to get a lesson by ID
export function getLesson(moduleId: string): CoursivLesson | undefined {
  return allLessons[moduleId];
}

// Get all lessons for a course
export function getLessonsByCourse(courseId: string): CoursivLesson[] {
  return Object.values(allLessons).filter(lesson => lesson.courseId === courseId);
}
