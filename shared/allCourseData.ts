/**
 * All Course Data for Coursiv
 * 
 * This file contains complete course content data for all courses.
 * Each course follows the Coursiv-style content structure with:
 * - Text blocks (educational content)
 * - Playground blocks (fill-in-the-blank exercises with multiple blanks)
 * - Quiz blocks (multiple choice questions)
 * - Discovery blocks (knowledge highlights)
 * - Feedback blocks (user surveys)
 * 
 * Content Density Rules:
 * - Every 2-3 text blocks → 1 playground
 * - Every 4-5 playgrounds → 1 quiz
 * - Every playground → 1 feedback + 1 discovery
 * 
 * Playground Format (Coursiv-style):
 * - promptTemplate: String with [blankId] placeholders
 * - blanks: Array of { id, placeholder, correctAnswer }
 * - options: Array of all available options (consumed as user selects)
 */

import {
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
    // Playground 1 - Single blank example
    createPlaygroundBlock(
      'Your First Prompt',
      'Send a simple question to ChatGPT. Choose the best way to ask for help with dinner.',
      { name: 'ChatGPT', icon: '💬' },
      'Help me [action] for dinner tonight.',
      [
        { id: 'action', placeholder: 'action', correctAnswer: 'order a pizza' }
      ],
      ['order a pizza', 'cook pasta', 'find a restaurant'],
      'Think about what action you want ChatGPT to help you with. The most direct request usually works best.',
      { title: 'Great!', message: "You've sent your first prompt to ChatGPT!" },
      { title: 'Incorrect', message: 'Try choosing a more specific action.' },
      '/images/chatgpt-result.png',
      'ChatGPT works best when you give it clear, specific instructions!'
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
    // Playground 2 - Multiple blanks example
    createPlaygroundBlock(
      'Adding Context',
      'Make your request more specific by adding your role and goal.',
      { name: 'ChatGPT', icon: '💬' },
      "I'm a [role]. Help me [task] for my [audience].",
      [
        { id: 'role', placeholder: 'role', correctAnswer: 'software engineer' },
        { id: 'task', placeholder: 'task', correctAnswer: 'write documentation' },
        { id: 'audience', placeholder: 'audience', correctAnswer: 'team members' }
      ],
      ['software engineer', 'write documentation', 'team members', 'marketing manager', 'create a presentation', 'clients'],
      'Adding your role, task, and audience helps ChatGPT tailor the response to your specific needs.',
      { title: 'Amazing!', message: "You're right on track with your approach!" },
      { title: 'Incorrect', message: 'Try thinking about who you are, what you need, and who will read it.' },
      '/images/context-result.png',
      'The more context you provide (role, goal, audience), the more tailored ChatGPT\'s responses will be.'
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
      'Complete this sentence about when to verify ChatGPT\'s responses.',
      { name: 'ChatGPT', icon: '💬' },
      'I should fact-check ChatGPT when it provides [type] information about [topic].',
      [
        { id: 'type', placeholder: 'type', correctAnswer: 'statistical' },
        { id: 'topic', placeholder: 'topic', correctAnswer: 'recent events' }
      ],
      ['statistical', 'recent events', 'creative', 'historical facts', 'formatting tips'],
      'Think about which type of information is most likely to be incorrect or outdated.',
      { title: 'Correct!', message: 'Statistical and factual information should always be verified!' },
      { title: 'Incorrect', message: 'Statistical data and recent events are most likely to be incorrect.' },
      '/images/factcheck-result.png',
      'Always fact-check important information, especially statistics and recent events.'
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
    createTextBlock(
      "What is a Prompt?",
      "✍️",
      [
        "A **prompt** is the text you send to ChatGPT to get a response. It's like giving instructions to a very capable assistant.",
        "The quality of your prompt directly affects the quality of the response you get. Better prompts = better answers!",
      ]
    ),
    createTextBlock(
      "The Anatomy of a Good Prompt",
      "🔍",
      [
        "A well-structured prompt typically includes:",
        "• **Task**: What you want ChatGPT to do",
        "• **Context**: Background information",
        "• **Format**: How you want the response structured",
        "• **Constraints**: Any limitations or requirements",
      ]
    ),
    createPlaygroundBlock(
      'Building a Complete Prompt',
      'Create a well-structured prompt by filling in all the components.',
      { name: 'ChatGPT', icon: '💬' },
      'Write a [format] about [topic] for [audience]. Make it [tone] and include [elements].',
      [
        { id: 'format', placeholder: 'format', correctAnswer: 'blog post' },
        { id: 'topic', placeholder: 'topic', correctAnswer: 'AI productivity' },
        { id: 'audience', placeholder: 'audience', correctAnswer: 'beginners' },
        { id: 'tone', placeholder: 'tone', correctAnswer: 'friendly' },
        { id: 'elements', placeholder: 'elements', correctAnswer: 'examples' }
      ],
      ['blog post', 'AI productivity', 'beginners', 'friendly', 'examples', 'email', 'coding tips', 'experts', 'formal', 'statistics'],
      'Think about what format, topic, audience, tone, and elements would make a great prompt.',
      { title: 'Perfect!', message: "You've created a well-structured prompt!" },
      { title: 'Incorrect', message: 'A good prompt includes format, topic, audience, tone, and specific elements.' },
      '/images/prompt-result.png',
      'The more specific your prompt, the better the response!'
    ),
    createFeedbackBlock(
      'Was this prompt structure helpful?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Prompt Engineering',
      'The art of writing effective prompts is called "prompt engineering" - it\'s a valuable skill in the AI age!'
    ),
    createQuizBlock(
      'Which element is NOT typically part of a well-structured prompt?',
      [
        'Task description',
        'Context information',
        'Random keywords',
        'Output format',
      ],
      2,
      'Random keywords don\'t help ChatGPT understand what you need. Good prompts are structured and purposeful.',
      'Think about what actually helps ChatGPT understand your request.'
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
        "DALL-E is an AI system created by OpenAI that can create realistic images and art from natural language descriptions.",
        "It's named after the artist Salvador Dalí and the Pixar character WALL-E, combining art and AI.",
      ]
    ),
    createTextBlock(
      "How Does It Work?",
      "🖼️",
      [
        "DALL-E uses a type of AI called a **diffusion model** to generate images. It starts with random noise and gradually refines it into a coherent image based on your text description.",
        "The more detailed and specific your description, the better DALL-E can understand what you want to create.",
      ]
    ),
    createPlaygroundBlock(
      'Your First Image Prompt',
      'Create a simple image prompt by describing what you want to see.',
      { name: 'DALL-E', icon: '🎨' },
      'A [style] painting of a [subject] in a [setting], [lighting] lighting.',
      [
        { id: 'style', placeholder: 'style', correctAnswer: 'watercolor' },
        { id: 'subject', placeholder: 'subject', correctAnswer: 'cat' },
        { id: 'setting', placeholder: 'setting', correctAnswer: 'garden' },
        { id: 'lighting', placeholder: 'lighting', correctAnswer: 'soft' }
      ],
      ['watercolor', 'cat', 'garden', 'soft', 'oil', 'dog', 'city', 'dramatic'],
      'Think about the art style, subject, setting, and lighting you want.',
      { title: 'Beautiful!', message: "You've created your first DALL-E prompt!" },
      { title: 'Incorrect', message: 'Try combining style, subject, setting, and lighting for best results.' },
      '/images/dalle-result.png',
      'DALL-E works best with descriptive prompts that include style, subject, and atmosphere.'
    ),
    createFeedbackBlock(
      'Was this exercise helpful?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Art Styles Matter',
      'Specifying an art style (watercolor, oil painting, digital art) dramatically changes the output!'
    ),
    createQuizBlock(
      'What makes a good DALL-E prompt?',
      [
        'Very short descriptions',
        'Detailed descriptions with style, subject, and atmosphere',
        'Only naming the subject',
        'Using technical AI terms',
      ],
      1,
      'DALL-E creates better images when you provide detailed descriptions including style, subject, setting, and atmosphere.',
      'Think about what information an artist would need to create your vision.'
    ),
  ],
};

const dalleLesson1_2: CoursivLesson = {
  id: 'dalle-1-2',
  courseId: 'dall-e',
  title: 'Advanced Prompting Techniques',
  subtitle: 'Master the art of image prompts',
  blocks: [
    createTextBlock(
      "Beyond Basic Prompts",
      "🚀",
      [
        "Now that you understand the basics, let's explore advanced techniques to create even more stunning images.",
        "Professional prompt engineers use specific keywords and structures to get consistent, high-quality results.",
      ]
    ),
    createPlaygroundBlock(
      'Professional Image Prompt',
      'Create a professional-quality prompt using advanced techniques.',
      { name: 'DALL-E', icon: '🎨' },
      'A [quality] [style] of [subject], [composition], [lighting], [mood], trending on [platform].',
      [
        { id: 'quality', placeholder: 'quality', correctAnswer: 'highly detailed' },
        { id: 'style', placeholder: 'style', correctAnswer: 'digital art' },
        { id: 'subject', placeholder: 'subject', correctAnswer: 'futuristic city' },
        { id: 'composition', placeholder: 'composition', correctAnswer: 'wide angle' },
        { id: 'lighting', placeholder: 'lighting', correctAnswer: 'golden hour' },
        { id: 'mood', placeholder: 'mood', correctAnswer: 'cinematic' },
        { id: 'platform', placeholder: 'platform', correctAnswer: 'ArtStation' }
      ],
      ['highly detailed', 'digital art', 'futuristic city', 'wide angle', 'golden hour', 'cinematic', 'ArtStation', 'simple', 'sketch', 'portrait', 'close up', 'harsh', 'moody', 'DeviantArt'],
      'Professional prompts include quality modifiers, composition, lighting, mood, and platform references.',
      { title: 'Stunning!', message: "You've mastered professional prompting!" },
      { title: 'Incorrect', message: 'Professional prompts combine quality, style, composition, lighting, mood, and platform.' },
      '/images/dalle-pro-result.png',
      'Adding "trending on ArtStation" or similar platforms often improves quality!'
    ),
    createFeedbackBlock(
      'Did you learn something new?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Platform References',
      'Mentioning platforms like ArtStation or DeviantArt can influence the style and quality of generated images.'
    ),
    createQuizBlock(
      'Which modifier typically improves DALL-E image quality?',
      [
        'Low resolution',
        'Highly detailed',
        'Simple',
        'Blurry',
      ],
      1,
      'Quality modifiers like "highly detailed", "8K", or "photorealistic" help DALL-E generate higher quality images.',
      'Think about what words describe high-quality images.'
    ),
  ],
};

// ============================================
// MIDJOURNEY MASTERY COURSE
// ============================================

const midjourneyLesson1_1: CoursivLesson = {
  id: 'midjourney-1-1',
  courseId: 'midjourney',
  title: 'Getting Started with Midjourney',
  subtitle: 'Your first steps in AI art',
  blocks: [
    createTextBlock(
      "What is Midjourney?",
      "🌟",
      [
        "Midjourney is an AI art generator that creates images from text descriptions. It's known for its artistic, stylized outputs.",
        "Unlike other AI art tools, Midjourney runs through Discord, making it unique in how you interact with it.",
      ]
    ),
    createTextBlock(
      "The /imagine Command",
      "💭",
      [
        "In Midjourney, you create images using the **/imagine** command followed by your prompt.",
        "The basic format is: `/imagine prompt: [your description here]`",
      ]
    ),
    createPlaygroundBlock(
      'Your First Midjourney Prompt',
      'Create a prompt for Midjourney using the /imagine command structure.',
      { name: 'Midjourney', icon: '🌟' },
      '/imagine prompt: a [adjective] [subject] in [setting], [style] style, [aspect]',
      [
        { id: 'adjective', placeholder: 'adjective', correctAnswer: 'majestic' },
        { id: 'subject', placeholder: 'subject', correctAnswer: 'dragon' },
        { id: 'setting', placeholder: 'setting', correctAnswer: 'mountain peaks' },
        { id: 'style', placeholder: 'style', correctAnswer: 'fantasy art' },
        { id: 'aspect', placeholder: 'aspect', correctAnswer: '--ar 16:9' }
      ],
      ['majestic', 'dragon', 'mountain peaks', 'fantasy art', '--ar 16:9', 'tiny', 'robot', 'underwater', 'minimalist', '--ar 1:1'],
      'Midjourney prompts work best with descriptive adjectives, clear subjects, and style references.',
      { title: 'Magical!', message: "You've created your first Midjourney prompt!" },
      { title: 'Incorrect', message: 'Try combining adjective, subject, setting, style, and aspect ratio.' },
      '/images/midjourney-result.png',
      'The --ar parameter controls aspect ratio: 16:9 for widescreen, 1:1 for square, 9:16 for portrait.'
    ),
    createFeedbackBlock(
      'Was this helpful?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Aspect Ratios',
      'Use --ar to control image dimensions: 16:9 (widescreen), 1:1 (square), 9:16 (portrait).'
    ),
    createQuizBlock(
      'What command do you use to generate images in Midjourney?',
      [
        '/create',
        '/imagine',
        '/generate',
        '/draw',
      ],
      1,
      'Midjourney uses the /imagine command to generate images from text prompts.',
      'Think about what word relates to visualization and creativity.'
    ),
  ],
};

const midjourneyLesson1_2: CoursivLesson = {
  id: 'midjourney-1-2',
  courseId: 'midjourney',
  title: 'Midjourney Parameters',
  subtitle: 'Fine-tune your generations',
  blocks: [
    createTextBlock(
      "Understanding Parameters",
      "⚙️",
      [
        "Midjourney offers various parameters to fine-tune your image generation.",
        "Parameters are added at the end of your prompt using double dashes (--) followed by the parameter name and value.",
      ]
    ),
    createPlaygroundBlock(
      'Using Multiple Parameters',
      'Combine different parameters to control your image generation.',
      { name: 'Midjourney', icon: '🌟' },
      '/imagine prompt: ethereal forest scene [quality] [stylize] [chaos] [aspect]',
      [
        { id: 'quality', placeholder: 'quality', correctAnswer: '--q 2' },
        { id: 'stylize', placeholder: 'stylize', correctAnswer: '--s 750' },
        { id: 'chaos', placeholder: 'chaos', correctAnswer: '--c 20' },
        { id: 'aspect', placeholder: 'aspect', correctAnswer: '--ar 3:2' }
      ],
      ['--q 2', '--s 750', '--c 20', '--ar 3:2', '--q 1', '--s 100', '--c 50', '--ar 1:1'],
      'Quality (--q), stylize (--s), and chaos (--c) parameters affect different aspects of the output.',
      { title: 'Expert!', message: "You've mastered Midjourney parameters!" },
      { title: 'Incorrect', message: 'Parameters control quality, stylization, chaos, and aspect ratio.' },
      '/images/midjourney-params-result.png',
      '--q controls quality, --s controls artistic stylization, --c controls variation randomness.'
    ),
    createFeedbackBlock(
      'Are parameters clear now?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Stylize Parameter',
      'Higher --s values (up to 1000) make images more artistic, lower values are more literal.'
    ),
    createQuizBlock(
      'What does the --c parameter control in Midjourney?',
      [
        'Color saturation',
        'Chaos/variation',
        'Contrast',
        'Crop size',
      ],
      1,
      'The --c (chaos) parameter controls how varied the four generated images will be from each other.',
      'Think about what "chaos" might mean in terms of image generation.'
    ),
  ],
};

// ============================================
// STABLE DIFFUSION COURSE
// ============================================

const stableDiffusionLesson1_1: CoursivLesson = {
  id: 'stable-diffusion-1-1',
  courseId: 'stable-diffusion',
  title: 'Introduction to Stable Diffusion',
  subtitle: 'Open-source AI image generation',
  blocks: [
    createTextBlock(
      "What is Stable Diffusion?",
      "🔓",
      [
        "Stable Diffusion is an open-source AI image generation model that you can run locally on your own computer.",
        "Unlike cloud-based services, you have complete control over the model and can customize it extensively.",
      ]
    ),
    createTextBlock(
      "Key Advantages",
      "✨",
      [
        "• **Free to use**: No subscription or per-image costs",
        "• **Privacy**: Images are generated locally",
        "• **Customizable**: Train your own models and styles",
        "• **No content restrictions**: Full creative freedom",
      ]
    ),
    createPlaygroundBlock(
      'Basic Stable Diffusion Prompt',
      'Create a prompt optimized for Stable Diffusion.',
      { name: 'Stable Diffusion', icon: '🔓' },
      '[quality], [subject], [style], [details], [negative: bad quality]',
      [
        { id: 'quality', placeholder: 'quality', correctAnswer: 'masterpiece' },
        { id: 'subject', placeholder: 'subject', correctAnswer: 'portrait of a woman' },
        { id: 'style', placeholder: 'style', correctAnswer: 'oil painting' },
        { id: 'details', placeholder: 'details', correctAnswer: 'intricate details' }
      ],
      ['masterpiece', 'portrait of a woman', 'oil painting', 'intricate details', 'sketch', 'landscape', 'digital art', 'simple'],
      'Stable Diffusion prompts often start with quality tags and include negative prompts.',
      { title: 'Excellent!', message: "You understand Stable Diffusion prompting!" },
      { title: 'Incorrect', message: 'Start with quality tags, then subject, style, and details.' },
      '/images/sd-result.png',
      'Quality tags like "masterpiece" and "best quality" significantly improve Stable Diffusion outputs.'
    ),
    createFeedbackBlock(
      'Was this clear?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Negative Prompts',
      'Stable Diffusion uses negative prompts to specify what you DON\'T want in the image.'
    ),
    createQuizBlock(
      'What is a key advantage of Stable Diffusion over cloud-based AI art tools?',
      [
        'Better image quality',
        'Faster generation',
        'Can run locally with full privacy',
        'Easier to use',
      ],
      2,
      'Stable Diffusion can run on your own computer, giving you complete privacy and control.',
      'Think about what "open-source" and "local" mean for users.'
    ),
  ],
};

const stableDiffusionLesson1_2: CoursivLesson = {
  id: 'stable-diffusion-1-2',
  courseId: 'stable-diffusion',
  title: 'Advanced SD Techniques',
  subtitle: 'Master local AI art generation',
  blocks: [
    createTextBlock(
      "ControlNet and Extensions",
      "🎛️",
      [
        "Stable Diffusion's power comes from its extensibility. ControlNet allows you to guide image generation with reference images.",
        "You can control pose, depth, edges, and more to get exactly the composition you want.",
      ]
    ),
    createPlaygroundBlock(
      'ControlNet Prompt',
      'Create a prompt that works with ControlNet for precise control.',
      { name: 'Stable Diffusion', icon: '🔓' },
      '[quality], [subject] in [pose], [style], [lighting], ControlNet: [control_type]',
      [
        { id: 'quality', placeholder: 'quality', correctAnswer: 'best quality' },
        { id: 'subject', placeholder: 'subject', correctAnswer: 'anime girl' },
        { id: 'pose', placeholder: 'pose', correctAnswer: 'dynamic pose' },
        { id: 'style', placeholder: 'style', correctAnswer: 'anime style' },
        { id: 'lighting', placeholder: 'lighting', correctAnswer: 'studio lighting' },
        { id: 'control_type', placeholder: 'control_type', correctAnswer: 'openpose' }
      ],
      ['best quality', 'anime girl', 'dynamic pose', 'anime style', 'studio lighting', 'openpose', 'high quality', 'robot', 'standing', 'realistic', 'natural light', 'depth'],
      'ControlNet types include openpose (body pose), depth, canny (edges), and more.',
      { title: 'Pro Level!', message: "You've mastered ControlNet prompting!" },
      { title: 'Incorrect', message: 'Combine quality, subject, pose, style, lighting, and ControlNet type.' },
      '/images/sd-controlnet-result.png',
      'ControlNet openpose is great for controlling character poses, depth for composition.'
    ),
    createFeedbackBlock(
      'Is ControlNet clear?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'ControlNet Types',
      'OpenPose for body poses, Depth for composition, Canny for edge detection, Scribble for sketches.'
    ),
    createQuizBlock(
      'What does ControlNet allow you to do in Stable Diffusion?',
      [
        'Generate images faster',
        'Guide generation with reference images',
        'Improve image quality',
        'Add text to images',
      ],
      1,
      'ControlNet lets you use reference images to control pose, depth, edges, and composition.',
      'Think about what "control" means in image generation.'
    ),
  ],
};

// ============================================
// CLAUDE AI COURSE
// ============================================

const claudeLesson1_1: CoursivLesson = {
  id: 'claude-1-1',
  courseId: 'claude',
  title: 'Introduction to Claude',
  subtitle: 'Meet Anthropic\'s AI assistant',
  blocks: [
    createTextBlock(
      "What is Claude?",
      "🤖",
      [
        "Claude is an AI assistant created by Anthropic, designed to be helpful, harmless, and honest.",
        "It excels at nuanced conversations, analysis, coding, and creative writing.",
      ]
    ),
    createTextBlock(
      "Claude's Strengths",
      "💪",
      [
        "• **Long context**: Can process very long documents",
        "• **Nuanced responses**: Understands subtlety and context",
        "• **Coding**: Excellent at programming tasks",
        "• **Analysis**: Great for breaking down complex topics",
      ]
    ),
    createPlaygroundBlock(
      'Effective Claude Prompt',
      'Create a prompt that leverages Claude\'s analytical strengths.',
      { name: 'Claude', icon: '🤖' },
      'Analyze this [content_type] and provide [output_type]. Focus on [aspect] and format as [format].',
      [
        { id: 'content_type', placeholder: 'content type', correctAnswer: 'business proposal' },
        { id: 'output_type', placeholder: 'output type', correctAnswer: 'key insights' },
        { id: 'aspect', placeholder: 'aspect', correctAnswer: 'strengths and weaknesses' },
        { id: 'format', placeholder: 'format', correctAnswer: 'bullet points' }
      ],
      ['business proposal', 'key insights', 'strengths and weaknesses', 'bullet points', 'code snippet', 'summary', 'technical details', 'paragraphs'],
      'Claude excels at analysis tasks with clear structure and specific focus areas.',
      { title: 'Insightful!', message: "You've crafted an effective Claude prompt!" },
      { title: 'Incorrect', message: 'Specify content type, output type, focus area, and format.' },
      '/images/claude-result.png',
      'Claude works best when you specify exactly what kind of analysis you need.'
    ),
    createFeedbackBlock(
      'Was this helpful?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Long Context',
      'Claude can process up to 100K tokens - that\'s about 75,000 words or a full novel!'
    ),
    createQuizBlock(
      'What is Claude particularly good at?',
      [
        'Image generation',
        'Video editing',
        'Long document analysis',
        'Voice synthesis',
      ],
      2,
      'Claude excels at processing and analyzing long documents thanks to its large context window.',
      'Think about what "long context" enables.'
    ),
  ],
};

const claudeLesson1_2: CoursivLesson = {
  id: 'claude-1-2',
  courseId: 'claude',
  title: 'Advanced Claude Techniques',
  subtitle: 'Maximize Claude\'s potential',
  blocks: [
    createTextBlock(
      "System Prompts",
      "⚙️",
      [
        "Claude supports system prompts that set the context and behavior for the entire conversation.",
        "Use system prompts to define Claude's role, tone, and constraints.",
      ]
    ),
    createPlaygroundBlock(
      'System Prompt Design',
      'Create an effective system prompt for Claude.',
      { name: 'Claude', icon: '🤖' },
      'You are a [role] who specializes in [specialty]. Your tone is [tone]. Always [constraint] and never [restriction].',
      [
        { id: 'role', placeholder: 'role', correctAnswer: 'senior developer' },
        { id: 'specialty', placeholder: 'specialty', correctAnswer: 'code review' },
        { id: 'tone', placeholder: 'tone', correctAnswer: 'constructive' },
        { id: 'constraint', placeholder: 'constraint', correctAnswer: 'explain your reasoning' },
        { id: 'restriction', placeholder: 'restriction', correctAnswer: 'give incomplete answers' }
      ],
      ['senior developer', 'code review', 'constructive', 'explain your reasoning', 'give incomplete answers', 'junior assistant', 'general help', 'formal', 'be brief', 'use jargon'],
      'System prompts define role, specialty, tone, and behavioral constraints.',
      { title: 'Expert!', message: "You've mastered Claude system prompts!" },
      { title: 'Incorrect', message: 'Include role, specialty, tone, positive constraint, and restriction.' },
      '/images/claude-system-result.png',
      'Good system prompts include both what Claude should do AND what it should avoid.'
    ),
    createFeedbackBlock(
      'Are system prompts clear?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Behavioral Constraints',
      'Adding "never" constraints helps prevent unwanted behaviors in Claude\'s responses.'
    ),
    createQuizBlock(
      'What is the purpose of a system prompt in Claude?',
      [
        'To generate images',
        'To set context and behavior for the conversation',
        'To speed up responses',
        'To reduce costs',
      ],
      1,
      'System prompts define Claude\'s role, tone, and behavioral guidelines for the entire conversation.',
      'Think about what "system" level settings would control.'
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
        "Gemini is Google's most capable AI model, designed to be multimodal from the ground up.",
        "It can understand and generate text, code, images, audio, and video.",
      ]
    ),
    createTextBlock(
      "Multimodal Capabilities",
      "🔄",
      [
        "• **Text**: Natural language understanding and generation",
        "• **Images**: Analyze and describe visual content",
        "• **Code**: Write, explain, and debug code",
        "• **Reasoning**: Complex problem-solving",
      ]
    ),
    createPlaygroundBlock(
      'Multimodal Prompt',
      'Create a prompt that leverages Gemini\'s multimodal capabilities.',
      { name: 'Gemini', icon: '💎' },
      'Look at this [input_type] and [action]. Then [follow_up] in [format] format.',
      [
        { id: 'input_type', placeholder: 'input type', correctAnswer: 'image' },
        { id: 'action', placeholder: 'action', correctAnswer: 'describe what you see' },
        { id: 'follow_up', placeholder: 'follow up', correctAnswer: 'suggest improvements' },
        { id: 'format', placeholder: 'format', correctAnswer: 'numbered list' }
      ],
      ['image', 'describe what you see', 'suggest improvements', 'numbered list', 'document', 'summarize the content', 'translate it', 'paragraph'],
      'Gemini can process multiple types of input and provide structured outputs.',
      { title: 'Multimodal Master!', message: "You understand Gemini's capabilities!" },
      { title: 'Incorrect', message: 'Specify input type, action, follow-up task, and output format.' },
      '/images/gemini-result.png',
      'Gemini excels when you combine different types of input and output in one prompt.'
    ),
    createFeedbackBlock(
      'Was this clear?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Multimodal Power',
      'Gemini can analyze images, understand context, and provide detailed responses all in one interaction.'
    ),
    createQuizBlock(
      'What makes Gemini unique among AI models?',
      [
        'It\'s the fastest',
        'It\'s designed to be multimodal from the ground up',
        'It\'s the cheapest',
        'It only works with text',
      ],
      1,
      'Gemini was built from the start to understand and work with multiple types of data.',
      'Think about what "multimodal" means.'
    ),
  ],
};

const geminiLesson1_2: CoursivLesson = {
  id: 'gemini-1-2',
  courseId: 'gemini',
  title: 'Advanced Gemini Features',
  subtitle: 'Unlock Gemini\'s full potential',
  blocks: [
    createTextBlock(
      "Gemini Pro vs Ultra",
      "⚡",
      [
        "Gemini comes in different versions optimized for different use cases:",
        "• **Gemini Pro**: Balanced performance for most tasks",
        "• **Gemini Ultra**: Maximum capability for complex tasks",
      ]
    ),
    createPlaygroundBlock(
      'Complex Reasoning Prompt',
      'Create a prompt that requires Gemini\'s advanced reasoning.',
      { name: 'Gemini', icon: '💎' },
      'Given [context], analyze [data_type] to find [goal]. Consider [factors] and present [deliverable].',
      [
        { id: 'context', placeholder: 'context', correctAnswer: 'market trends' },
        { id: 'data_type', placeholder: 'data type', correctAnswer: 'sales figures' },
        { id: 'goal', placeholder: 'goal', correctAnswer: 'growth opportunities' },
        { id: 'factors', placeholder: 'factors', correctAnswer: 'seasonal patterns' },
        { id: 'deliverable', placeholder: 'deliverable', correctAnswer: 'actionable recommendations' }
      ],
      ['market trends', 'sales figures', 'growth opportunities', 'seasonal patterns', 'actionable recommendations', 'company history', 'customer feedback', 'cost savings', 'competitor actions', 'summary report'],
      'Complex reasoning prompts include context, data, goals, considerations, and deliverables.',
      { title: 'Brilliant!', message: "You've mastered complex Gemini prompts!" },
      { title: 'Incorrect', message: 'Include context, data type, goal, factors to consider, and deliverable.' },
      '/images/gemini-advanced-result.png',
      'Gemini Ultra excels at complex reasoning tasks that require analyzing multiple factors.'
    ),
    createFeedbackBlock(
      'Is this level clear?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Chain of Thought',
      'For complex tasks, ask Gemini to "think step by step" to improve reasoning accuracy.'
    ),
    createQuizBlock(
      'When should you use Gemini Ultra over Gemini Pro?',
      [
        'For simple questions',
        'For complex, multi-step reasoning tasks',
        'For faster responses',
        'For cheaper API costs',
      ],
      1,
      'Gemini Ultra is designed for the most complex tasks requiring advanced reasoning.',
      'Think about what "Ultra" implies about capability.'
    ),
  ],
};

// ============================================
// EXPORT ALL LESSONS
// ============================================

export const allCoursivLessons: Record<string, CoursivLesson> = {
  // ChatGPT
  'chatgpt-1-1': chatgptLesson1_1,
  'chatgpt-1-2': chatgptLesson1_2,
  // DALL-E
  'dalle-1-1': dalleLesson1_1,
  'dalle-1-2': dalleLesson1_2,
  // Midjourney
  'midjourney-1-1': midjourneyLesson1_1,
  'midjourney-1-2': midjourneyLesson1_2,
  // Stable Diffusion
  'stable-diffusion-1-1': stableDiffusionLesson1_1,
  'stable-diffusion-1-2': stableDiffusionLesson1_2,
  // Claude
  'claude-1-1': claudeLesson1_1,
  'claude-1-2': claudeLesson1_2,
  // Gemini
  'gemini-1-1': geminiLesson1_1,
  'gemini-1-2': geminiLesson1_2,
};

// Helper to get lesson by ID
export function getLessonById(lessonId: string): CoursivLesson | undefined {
  return allCoursivLessons[lessonId];
}

// Helper to get all lessons for a course
export function getLessonsByCourse(courseId: string): CoursivLesson[] {
  return Object.values(allCoursivLessons).filter(
    (lesson) => lesson.courseId === courseId
  );
}
