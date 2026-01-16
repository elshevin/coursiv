/**
 * Midjourney Course - Complete Lesson Data
 * 
 * Course Structure:
 * - Level 1 (Beginner): 5 modules (mj-1-1 to mj-1-quiz)
 * - Level 2 (Intermediate): 5 modules (mj-2-1 to mj-2-quiz)
 * - Level 3 (Advanced): 4 modules (mj-3-1 to mj-3-quiz)
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

export const mjLesson1_1: CoursivLesson = {
  id: 'mj-1-1',
  courseId: 'midjourney',
  title: 'What is Midjourney?',
  subtitle: 'Introduction to Midjourney',
  blocks: [
    createTextBlock(
      "Welcome to Midjourney",
      "🖼️",
      [
        "Midjourney is an AI art generator that creates stunning images from text descriptions. It's known for its unique artistic style and ability to create beautiful, often surreal imagery.",
        "Unlike other AI image generators, Midjourney has a distinctive aesthetic that many artists and designers love.",
      ]
    ),
    createTextBlock(
      "What Makes Midjourney Special?",
      "✨",
      [
        "**Artistic Quality**: Midjourney excels at creating visually striking, artistic images with a unique aesthetic.",
        "**Community**: It operates through Discord, creating a vibrant community of creators.",
        "**Versatility**: From photorealistic to fantastical, Midjourney handles diverse styles beautifully.",
      ]
    ),
    createPlaygroundBlock(
      'Your First Midjourney Prompt',
      'Create a simple artistic prompt for Midjourney.',
      { name: 'Midjourney', icon: '🖼️' },
      '/imagine prompt: a [subject] in a [setting], [style] style, [mood] atmosphere',
      [
        { id: 'subject', placeholder: 'subject', correctAnswer: 'mystical forest' },
        { id: 'setting', placeholder: 'setting', correctAnswer: 'enchanted realm' },
        { id: 'style', placeholder: 'style', correctAnswer: 'fantasy art' },
        { id: 'mood', placeholder: 'mood', correctAnswer: 'magical' }
      ],
      ['mystical forest', 'enchanted realm', 'fantasy art', 'magical', 'ancient temple', 'mountain peaks', 'cinematic', 'epic'],
      'Midjourney loves descriptive, evocative language. Think artistically!',
      { title: 'Magical!', message: "You've created your first Midjourney prompt!" },
      { title: 'Try again', message: 'Use more evocative, artistic language.' },
      '/images/course/midjourney/mj-first-prompt.png',
      'Midjourney responds beautifully to evocative, artistic descriptions.',
      `🎨 **Midjourney Generation Started**

**/imagine prompt:** a mystical forest in an enchanted realm, fantasy art style, magical atmosphere

**Processing...**

**Style Analysis:**
- Fantasy art detected → Enhancing ethereal elements
- Magical atmosphere → Adding luminescent particles
- Enchanted realm → Incorporating otherworldly colors

**Image Characteristics:**
| Element | Treatment |
|---------|-----------|
| Trees | Ancient, twisted, glowing |
| Lighting | Bioluminescent, mystical |
| Colors | Deep purples, ethereal greens |
| Details | Floating particles, hidden creatures |

**Generation Options:**
You'll receive 4 variations to choose from:
- V1: Dense, mysterious forest
- V2: Open clearing with light beams
- V3: River running through
- V4: Treehouse village version

**Upscale (U1-U4)** for high resolution
**Variation (V1-V4)** for more options

Welcome to the world of Midjourney! 🌟`
    ),
    createFeedbackBlock(
      'How excited are you to learn Midjourney?',
      ['Very excited', 'Curious', 'Just exploring'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Midjourney Magic',
      'Midjourney creates uniquely artistic images with a distinctive aesthetic style.'
    ),
  ],
};

export const mjLesson1_2: CoursivLesson = {
  id: 'mj-1-2',
  courseId: 'midjourney',
  title: 'Discord Setup',
  subtitle: 'Setting up your workspace',
  blocks: [
    createTextBlock(
      "Midjourney Lives on Discord",
      "💬",
      [
        "Unlike other AI tools, Midjourney operates entirely through Discord, a chat platform popular with gamers and communities.",
        "You'll need a Discord account and a Midjourney subscription to start creating.",
      ]
    ),
    createTextBlock(
      "Getting Started",
      "🚀",
      [
        "**Step 1**: Create a Discord account at discord.com if you don't have one",
        "**Step 2**: Visit midjourney.com and click 'Join the Beta'",
        "**Step 3**: Subscribe to a Midjourney plan",
        "**Step 4**: Use /imagine in any Midjourney channel to create",
      ]
    ),
    createPlaygroundBlock(
      'Understanding the Interface',
      'Learn the basic Discord commands for Midjourney.',
      { name: 'Midjourney', icon: '🖼️' },
      'To create an image, type [command] followed by [keyword]: and then your [content].',
      [
        { id: 'command', placeholder: 'command', correctAnswer: '/imagine' },
        { id: 'keyword', placeholder: 'keyword', correctAnswer: 'prompt' },
        { id: 'content', placeholder: 'content', correctAnswer: 'description' }
      ],
      ['/imagine', 'prompt', 'description', '/settings', 'style', 'parameters'],
      'The /imagine command is your gateway to creating images.',
      { title: 'Ready to create!', message: "You understand the basic command structure!" },
      { title: 'Try again', message: 'Remember: /imagine prompt: your description' },
      '/images/course/midjourney/mj-interface.png',
      'All Midjourney creation starts with /imagine prompt:',
      `📱 **Discord Command Reference**

**Primary Command:**
\`\`\`
/imagine prompt: [your description here]
\`\`\`

**After Generation - Button Options:**

**Upscale Buttons (U1-U4):**
- Creates high-resolution version
- U1 = Top-left image
- U2 = Top-right image
- U3 = Bottom-left image
- U4 = Bottom-right image

**Variation Buttons (V1-V4):**
- Generates similar variations
- Keeps the essence, changes details

**Other Useful Commands:**
| Command | Purpose |
|---------|---------|
| /settings | Adjust default settings |
| /info | Check subscription status |
| /help | Get command help |
| /describe | Analyze an image |

**Pro Tip:** Create a private server and invite the Midjourney bot for a cleaner workspace!`
    ),
    createFeedbackBlock(
      'Is the Discord setup clear?',
      ['Yes, very clear', 'Somewhat clear', 'Need more help'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Discord Home',
      'Midjourney operates through Discord using the /imagine command.'
    ),
  ],
};

export const mjLesson1_3: CoursivLesson = {
  id: 'mj-1-3',
  courseId: 'midjourney',
  title: 'Basic Commands',
  subtitle: 'Essential Midjourney commands',
  blocks: [
    createTextBlock(
      "Essential Commands",
      "⌨️",
      [
        "Midjourney has several commands beyond /imagine that help you control and refine your creations.",
        "Learning these commands will make your workflow much more efficient.",
      ]
    ),
    createTextBlock(
      "Command Reference",
      "📋",
      [
        "**/imagine**: Create images from text prompts",
        "**/settings**: Configure your default settings",
        "**/blend**: Combine multiple images together",
        "**/describe**: Get prompt suggestions from an image",
      ]
    ),
    createPlaygroundBlock(
      'Using Commands',
      'Practice using different Midjourney commands.',
      { name: 'Midjourney', icon: '🖼️' },
      'To [action], I should use the [command] command. This will [result].',
      [
        { id: 'action', placeholder: 'action', correctAnswer: 'analyze an existing image' },
        { id: 'command', placeholder: 'command', correctAnswer: '/describe' },
        { id: 'result', placeholder: 'result', correctAnswer: 'suggest prompts based on the image' }
      ],
      ['analyze an existing image', '/describe', 'suggest prompts based on the image', 'combine two images', '/blend', 'merge them into one creation'],
      'Match the action to the correct command.',
      { title: 'Command master!', message: "You know your Midjourney commands!" },
      { title: 'Try again', message: 'Think about what each command does.' },
      '/images/course/midjourney/mj-commands.png',
      '/describe is incredibly useful for learning how to prompt by analyzing images you like.',
      `📚 **Command Deep Dive: /describe**

**What it does:**
Analyzes any image and suggests 4 different prompts that could recreate it.

**How to use:**
\`\`\`
/describe [upload image]
\`\`\`

**Example Output:**
For an uploaded fantasy landscape:

1️⃣ "ethereal mountain landscape with floating islands, bioluminescent plants, fantasy art style, magical atmosphere"

2️⃣ "surreal dreamscape with impossible geometry, glowing flora, digital painting, otherworldly"

3️⃣ "mystical realm with cascading waterfalls, ancient ruins, concept art, epic scale"

4️⃣ "alien planet vista, crystalline formations, science fantasy, volumetric lighting"

**Why it's powerful:**
- Learn prompting by reverse-engineering
- Discover new vocabulary
- Understand style keywords
- Find unexpected descriptions

**Pro Tip:** Use /describe on artwork you admire to learn the vocabulary that creates similar styles!`
    ),
    createFeedbackBlock(
      'How comfortable are you with the commands?',
      ['Very comfortable', 'Getting there', 'Need more practice'],
      0
    ),
    createDiscoveryBlock(
      3,
      'Command Power',
      '/describe helps you learn prompting by analyzing images you like.'
    ),
  ],
};

export const mjLesson1_4: CoursivLesson = {
  id: 'mj-1-4',
  courseId: 'midjourney',
  title: 'Your First Creation',
  subtitle: 'Creating your first image',
  blocks: [
    createTextBlock(
      "Time to Create!",
      "🎨",
      [
        "Now that you understand the basics, let's create your first real Midjourney image.",
        "We'll build a prompt step by step, considering all the elements that make a great image.",
      ]
    ),
    createTextBlock(
      "Building Your Prompt",
      "🏗️",
      [
        "**Subject**: What is the main focus?",
        "**Style**: What artistic style do you want?",
        "**Mood**: What feeling should it evoke?",
        "**Details**: Colors, lighting, composition",
      ]
    ),
    createPlaygroundBlock(
      'Creating Your Masterpiece',
      'Build a complete prompt for your first creation.',
      { name: 'Midjourney', icon: '🖼️' },
      '/imagine prompt: [subject], [style], [lighting], [colors], [quality]',
      [
        { id: 'subject', placeholder: 'subject', correctAnswer: 'a majestic dragon' },
        { id: 'style', placeholder: 'style', correctAnswer: 'digital painting' },
        { id: 'lighting', placeholder: 'lighting', correctAnswer: 'dramatic backlighting' },
        { id: 'colors', placeholder: 'colors', correctAnswer: 'deep blues and golds' },
        { id: 'quality', placeholder: 'quality', correctAnswer: 'highly detailed' }
      ],
      ['a majestic dragon', 'digital painting', 'dramatic backlighting', 'deep blues and golds', 'highly detailed', 'a serene landscape', 'watercolor', 'soft morning light', 'pastel colors', '8k resolution'],
      'Combine all elements for a complete, detailed prompt.',
      { title: 'Masterpiece incoming!', message: "You've created a professional-level prompt!" },
      { title: 'Try again', message: 'Make sure all elements complement each other.' },
      '/images/course/midjourney/mj-masterpiece.png',
      'Quality keywords like "highly detailed" and "8k" can significantly improve results.',
      `🐉 **Dragon Masterpiece Generation**

**/imagine prompt:** a majestic dragon, digital painting, dramatic backlighting, deep blues and golds, highly detailed

**Prompt Analysis:**

**Subject: Majestic Dragon**
- Powerful, noble pose
- Intricate scale details
- Expressive features

**Style: Digital Painting**
- Painterly brushwork
- Rich textures
- Artistic interpretation

**Lighting: Dramatic Backlighting**
- Silhouette edges glowing
- Rim light on scales
- Atmospheric depth

**Colors: Deep Blues & Golds**
| Element | Color |
|---------|-------|
| Scales | Midnight blue |
| Highlights | Burnished gold |
| Eyes | Amber glow |
| Background | Twilight gradient |

**Quality: Highly Detailed**
- Individual scale rendering
- Texture in wings
- Environmental particles

**Expected Result:**
A stunning, gallery-worthy dragon portrait with professional digital art quality. The backlighting will create a dramatic, almost divine presence.

🎉 Welcome to the world of AI art creation!`
    ),
    createFeedbackBlock(
      'How was your first creation experience?',
      ['Amazing!', 'Good', 'Need more guidance'],
      0
    ),
    createDiscoveryBlock(
      4,
      'First Creation',
      'Combining subject, style, lighting, colors, and quality creates professional results.'
    ),
  ],
};

export const mjLesson1_Quiz: CoursivLesson = {
  id: 'mj-1-quiz',
  courseId: 'midjourney',
  title: 'Beginner Quiz',
  subtitle: 'Test your Midjourney knowledge',
  blocks: [
    createTextBlock(
      "Beginner Assessment",
      "📝",
      [
        "Let's test what you've learned about Midjourney basics!",
        "Pass this quiz to unlock intermediate techniques.",
      ]
    ),
    createQuizBlock(
      'Where does Midjourney operate?',
      [
        'A standalone desktop app',
        'Discord',
        'A web browser only',
        'Mobile app'
      ],
      1,
      'Midjourney operates entirely through Discord, using commands in chat channels.',
      'Think about where you create Midjourney images.'
    ),
    createQuizBlock(
      'What command creates images in Midjourney?',
      [
        '/create',
        '/generate',
        '/imagine',
        '/make'
      ],
      2,
      'The /imagine command followed by "prompt:" is how you create images in Midjourney.',
      'Remember the basic command structure.'
    ),
    createQuizBlock(
      'What does the /describe command do?',
      [
        'Describes your subscription',
        'Analyzes an image and suggests prompts',
        'Describes available styles',
        'Shows your creation history'
      ],
      1,
      '/describe analyzes uploaded images and suggests prompts that could recreate them.',
      'Think about reverse-engineering prompts.'
    ),
    createDiscoveryBlock(
      5,
      'Beginner Complete!',
      'Great job! You understand Midjourney basics. Ready for parameters and advanced techniques?'
    ),
  ],
};

// ============================================
// LEVEL 2: INTERMEDIATE
// ============================================

export const mjLesson2_1: CoursivLesson = {
  id: 'mj-2-1',
  courseId: 'midjourney',
  title: 'Parameters Deep Dive',
  subtitle: 'Understanding all parameters',
  blocks: [
    createTextBlock(
      "The Power of Parameters",
      "⚙️",
      [
        "Parameters are special commands added to the end of your prompt that control how Midjourney generates images.",
        "Mastering parameters gives you precise control over your creations.",
      ]
    ),
    createTextBlock(
      "Essential Parameters",
      "📊",
      [
        "**--ar** (Aspect Ratio): Control image dimensions (e.g., --ar 16:9)",
        "**--v** (Version): Use specific Midjourney versions (e.g., --v 6)",
        "**--s** (Stylize): Control artistic interpretation (0-1000)",
        "**--c** (Chaos): Add variation and unexpectedness (0-100)",
      ]
    ),
    createPlaygroundBlock(
      'Using Parameters',
      'Add parameters to control your image generation.',
      { name: 'Midjourney', icon: '🖼️' },
      '/imagine prompt: epic landscape --ar [ratio] --v [version] --s [stylize]',
      [
        { id: 'ratio', placeholder: 'ratio', correctAnswer: '16:9' },
        { id: 'version', placeholder: 'version', correctAnswer: '6' },
        { id: 'stylize', placeholder: 'stylize', correctAnswer: '750' }
      ],
      ['16:9', '6', '750', '1:1', '5.2', '250', '9:16', '5', '1000'],
      'Parameters go at the end of your prompt after --',
      { title: 'Parameter pro!', message: "You've mastered basic parameters!" },
      { title: 'Try again', message: 'Remember the format: --parameter value' },
      '/images/course/midjourney/mj-parameters.png',
      'Higher stylize values (--s) make images more artistic but less literal.',
      `⚙️ **Parameter Analysis**

**Your Prompt:**
\`/imagine prompt: epic landscape --ar 16:9 --v 6 --s 750\`

**Parameter Breakdown:**

**--ar 16:9 (Aspect Ratio)**
| Ratio | Use Case |
|-------|----------|
| 1:1 | Social media, icons |
| 16:9 | Wallpapers, YouTube |
| 9:16 | Phone wallpapers, Stories |
| 2:3 | Portraits |
| 3:2 | Landscapes |

**--v 6 (Version)**
- Latest Midjourney model
- Best text rendering
- Most photorealistic
- Enhanced prompt understanding

**--s 750 (Stylize)**
\`\`\`
0-100    → Very literal, less artistic
250      → Low stylization (default)
500-750  → Balanced artistic interpretation
1000     → Maximum artistic freedom
\`\`\`

**Combined Effect:**
Your settings will create a cinematic widescreen landscape with strong artistic interpretation while maintaining the epic quality you requested.

**Pro Tip:** Save your favorite parameter combinations for consistent results!`
    ),
    createFeedbackBlock(
      'How useful are parameters for your workflow?',
      ['Essential', 'Helpful', 'Still learning'],
      0
    ),
    createDiscoveryBlock(
      6,
      'Parameter Power',
      '--ar, --v, --s, and --c give you precise control over image generation.'
    ),
  ],
};

export const mjLesson2_2: CoursivLesson = {
  id: 'mj-2-2',
  courseId: 'midjourney',
  title: 'Style References',
  subtitle: 'Using reference images',
  blocks: [
    createTextBlock(
      "Learning from References",
      "🖼️",
      [
        "Midjourney can use reference images to guide the style, composition, or content of your generations.",
        "This is incredibly powerful for maintaining consistency or capturing specific aesthetics.",
      ]
    ),
    createTextBlock(
      "Reference Types",
      "📎",
      [
        "**--sref** (Style Reference): Copy the artistic style of an image",
        "**--cref** (Character Reference): Maintain character consistency",
        "**Image URLs**: Include images directly in your prompt",
        "**--iw** (Image Weight): Control reference influence (0-2)",
      ]
    ),
    createPlaygroundBlock(
      'Using Style References',
      'Apply a style reference to your prompt.',
      { name: 'Midjourney', icon: '🖼️' },
      '/imagine prompt: [subject] --sref [reference] --sw [weight]',
      [
        { id: 'subject', placeholder: 'subject', correctAnswer: 'portrait of a warrior' },
        { id: 'reference', placeholder: 'reference', correctAnswer: 'URL_of_style_image' },
        { id: 'weight', placeholder: 'weight', correctAnswer: '100' }
      ],
      ['portrait of a warrior', 'URL_of_style_image', '100', 'fantasy castle', 'URL_of_reference', '50'],
      'Style references let you borrow aesthetics from any image.',
      { title: 'Style master!', message: "You understand style references!" },
      { title: 'Try again', message: 'Remember to include the --sref parameter.' },
      '/images/course/midjourney/mj-style-ref.png',
      '--sw controls how strongly the style reference influences your image (0-1000).',
      `🎨 **Style Reference Guide**

**Your Prompt:**
\`/imagine prompt: portrait of a warrior --sref URL --sw 100\`

**How Style References Work:**

**--sref (Style Reference)**
Extracts and applies:
- Color palette
- Brushwork/texture
- Lighting style
- Overall aesthetic

**--sw (Style Weight)**
| Value | Effect |
|-------|--------|
| 0 | No style influence |
| 50 | Subtle style hints |
| 100 | Default balance |
| 500 | Strong style match |
| 1000 | Maximum style adherence |

**Best Practices:**

✅ **Do:**
- Use high-quality reference images
- Match subject complexity to reference
- Experiment with --sw values
- Combine with descriptive prompts

❌ **Don't:**
- Use copyrighted artwork without permission
- Expect exact replication
- Ignore your text prompt
- Use low-resolution references

**Pro Tip:** Create a collection of style references for different moods and aesthetics!`
    ),
    createFeedbackBlock(
      'Will you use style references?',
      ['Yes, frequently', 'Sometimes', 'Prefer text-only prompts'],
      0
    ),
    createDiscoveryBlock(
      7,
      'Style Transfer',
      '--sref and --sw let you borrow aesthetics from any reference image.'
    ),
  ],
};

export const mjLesson2_3: CoursivLesson = {
  id: 'mj-2-3',
  courseId: 'midjourney',
  title: 'Aspect Ratios',
  subtitle: 'Creating different formats',
  blocks: [
    createTextBlock(
      "Choosing the Right Format",
      "📐",
      [
        "Aspect ratio determines the shape of your image. Different ratios work better for different purposes.",
        "Understanding when to use each ratio will make your images more effective.",
      ]
    ),
    createTextBlock(
      "Common Aspect Ratios",
      "📏",
      [
        "**1:1** - Square, perfect for social media profiles and icons",
        "**16:9** - Widescreen, ideal for desktop wallpapers and YouTube",
        "**9:16** - Vertical, great for phone wallpapers and Stories",
        "**2:3** - Portrait orientation, classic photography ratio",
      ]
    ),
    createPlaygroundBlock(
      'Choosing Aspect Ratios',
      'Select the right aspect ratio for different use cases.',
      { name: 'Midjourney', icon: '🖼️' },
      'For a [use_case], I should use --ar [ratio] because it [reason].',
      [
        { id: 'use_case', placeholder: 'use case', correctAnswer: 'YouTube thumbnail' },
        { id: 'ratio', placeholder: 'ratio', correctAnswer: '16:9' },
        { id: 'reason', placeholder: 'reason', correctAnswer: 'matches video player dimensions' }
      ],
      ['YouTube thumbnail', '16:9', 'matches video player dimensions', 'Instagram post', '1:1', 'fits the square feed format'],
      'Match the aspect ratio to where the image will be used.',
      { title: 'Perfect format!', message: "You understand aspect ratios!" },
      { title: 'Try again', message: 'Think about where the image will be displayed.' },
      '/images/course/midjourney/mj-aspect-ratio.png',
      'Always consider the final use case when choosing aspect ratio.',
      `📐 **Aspect Ratio Guide**

**Your Choice: YouTube Thumbnail (16:9)**

**Why 16:9 Works:**
- Matches YouTube's display format
- No cropping or letterboxing
- Maximum visual impact
- Professional appearance

**Complete Ratio Reference:**

| Ratio | Pixels | Best For |
|-------|--------|----------|
| 1:1 | 1024×1024 | Instagram, avatars |
| 16:9 | 1920×1080 | YouTube, presentations |
| 9:16 | 1080×1920 | TikTok, Stories |
| 2:3 | 1024×1536 | Pinterest, portraits |
| 3:2 | 1536×1024 | Landscapes, prints |
| 4:5 | 1024×1280 | Instagram portrait |
| 21:9 | 2560×1080 | Ultrawide, cinematic |

**Pro Tips:**

📱 **Social Media:**
- Instagram Feed: 1:1 or 4:5
- Instagram Story: 9:16
- Twitter: 16:9 or 2:1
- LinkedIn: 1.91:1

🖥️ **Desktop:**
- Standard: 16:9
- Ultrawide: 21:9
- Dual monitor: 32:9

**Remember:** You can always crop later, but you can't add pixels!`
    ),
    createFeedbackBlock(
      'Do aspect ratios affect your image planning?',
      ['Yes, always consider them', 'Sometimes', 'Rarely think about it'],
      0
    ),
    createDiscoveryBlock(
      8,
      'Format Matters',
      'Choose aspect ratios based on where your image will be displayed.'
    ),
  ],
};

export const mjLesson2_4: CoursivLesson = {
  id: 'mj-2-4',
  courseId: 'midjourney',
  title: 'Variations & Upscaling',
  subtitle: 'Refining your images',
  blocks: [
    createTextBlock(
      "Perfecting Your Images",
      "🔍",
      [
        "After generating images, Midjourney offers powerful tools to refine and perfect your creations.",
        "Understanding variations and upscaling helps you get exactly what you want.",
      ]
    ),
    createTextBlock(
      "Refinement Options",
      "⬆️",
      [
        "**Upscale (U1-U4)**: Create high-resolution versions of selected images",
        "**Variation (V1-V4)**: Generate similar but different versions",
        "**Vary (Strong/Subtle)**: Control how much variation to apply",
        "**Zoom Out**: Expand the image canvas while maintaining the subject",
      ]
    ),
    createPlaygroundBlock(
      'Refining Your Creation',
      'Choose the right refinement option for your needs.',
      { name: 'Midjourney', icon: '🖼️' },
      'I like image 3 but want [goal]. I should click [button] to [result].',
      [
        { id: 'goal', placeholder: 'goal', correctAnswer: 'a higher resolution version' },
        { id: 'button', placeholder: 'button', correctAnswer: 'U3' },
        { id: 'result', placeholder: 'result', correctAnswer: 'upscale it for printing' }
      ],
      ['a higher resolution version', 'U3', 'upscale it for printing', 'similar alternatives', 'V3', 'see variations of that image'],
      'U = Upscale (high-res), V = Variation (alternatives)',
      { title: 'Refinement expert!', message: "You know how to perfect your images!" },
      { title: 'Try again', message: 'Remember: U for upscale, V for variations.' },
      '/images/course/midjourney/mj-refine.png',
      'Always upscale your final choice before downloading for best quality.',
      `🔍 **Refinement Workflow**

**Your Choice: U3 (Upscale Image 3)**

**Image Grid Layout:**
\`\`\`
┌─────┬─────┐
│  1  │  2  │  U1, U2
├─────┼─────┤
│  3  │  4  │  U3, U4
└─────┴─────┘
\`\`\`

**After Upscaling, New Options:**

**Vary Buttons:**
| Button | Effect |
|--------|--------|
| Vary (Strong) | Significant changes |
| Vary (Subtle) | Minor adjustments |
| Vary (Region) | Edit specific areas |

**Zoom Options:**
- Zoom Out 2x → Double the canvas
- Zoom Out 1.5x → 50% more canvas
- Custom Zoom → Specify exact amount

**Pan Directions:**
⬅️ ➡️ ⬆️ ⬇️ Extend in any direction

**Best Practices:**

1️⃣ **Generate** initial 4 images
2️⃣ **Vary** promising candidates
3️⃣ **Upscale** your favorite
4️⃣ **Vary (Subtle)** if almost perfect
5️⃣ **Download** final result

**Pro Tip:** Use Vary (Region) to fix specific parts while keeping the rest!`
    ),
    createFeedbackBlock(
      'How often do you use variations?',
      ['Every generation', 'Sometimes', 'Rarely'],
      0
    ),
    createDiscoveryBlock(
      9,
      'Iterate to Perfection',
      'Use variations and upscaling to refine images until they\'re exactly right.'
    ),
  ],
};

export const mjLesson2_Quiz: CoursivLesson = {
  id: 'mj-2-quiz',
  courseId: 'midjourney',
  title: 'Intermediate Quiz',
  subtitle: 'Test your advanced skills',
  blocks: [
    createTextBlock(
      "Intermediate Assessment",
      "📝",
      [
        "Let's test your knowledge of Midjourney parameters and techniques!",
        "Pass to unlock advanced features.",
      ]
    ),
    createQuizBlock(
      'What does the --s parameter control?',
      [
        'Image size',
        'Stylization level',
        'Speed of generation',
        'Number of images'
      ],
      1,
      '--s (stylize) controls how artistic vs literal the interpretation is (0-1000).',
      'Think about what makes images more "artistic."'
    ),
    createQuizBlock(
      'Which aspect ratio is best for YouTube thumbnails?',
      [
        '1:1',
        '9:16',
        '16:9',
        '4:3'
      ],
      2,
      '16:9 matches YouTube\'s widescreen video format perfectly.',
      'Consider YouTube\'s display format.'
    ),
    createQuizBlock(
      'What does --sref do?',
      [
        'Sets resolution',
        'Applies style from a reference image',
        'Speeds up rendering',
        'Saves the image'
      ],
      1,
      '--sref (style reference) applies the artistic style from a reference image to your generation.',
      'Think about borrowing styles from other images.'
    ),
    createQuizBlock(
      'What is the difference between U and V buttons?',
      [
        'U uploads, V views',
        'U upscales resolution, V creates variations',
        'U undoes, V validates',
        'No difference'
      ],
      1,
      'U buttons upscale to high resolution, V buttons create variations of the selected image.',
      'Remember the refinement options.'
    ),
    createDiscoveryBlock(
      10,
      'Intermediate Complete!',
      'Excellent! You\'ve mastered intermediate techniques. Ready for advanced multi-prompting?'
    ),
  ],
};

// ============================================
// LEVEL 3: ADVANCED
// ============================================

export const mjLesson3_1: CoursivLesson = {
  id: 'mj-3-1',
  courseId: 'midjourney',
  title: 'Multi-Prompting',
  subtitle: 'Complex prompt structures',
  blocks: [
    createTextBlock(
      "Advanced Prompt Techniques",
      "🔀",
      [
        "Multi-prompting allows you to combine multiple concepts with different weights, giving you precise control over complex compositions.",
        "This technique is essential for creating sophisticated, layered images.",
      ]
    ),
    createTextBlock(
      "Multi-Prompt Syntax",
      "📝",
      [
        "**:: (Double Colon)**: Separates prompt concepts",
        "**::2 (Weights)**: Numbers after :: set importance (default is 1)",
        "**Negative Weights**: Use ::-.5 to reduce unwanted elements",
        "**Permutations**: Use {option1, option2} for batch variations",
      ]
    ),
    createPlaygroundBlock(
      'Creating Multi-Prompts',
      'Combine concepts with different weights.',
      { name: 'Midjourney', icon: '🖼️' },
      '/imagine prompt: [concept1]::[weight1] [concept2]::[weight2] [negative]::-.5',
      [
        { id: 'concept1', placeholder: 'concept 1', correctAnswer: 'cyberpunk city' },
        { id: 'weight1', placeholder: 'weight 1', correctAnswer: '2' },
        { id: 'concept2', placeholder: 'concept 2', correctAnswer: 'nature overgrowth' },
        { id: 'weight2', placeholder: 'weight 2', correctAnswer: '1' },
        { id: 'negative', placeholder: 'negative', correctAnswer: 'people' }
      ],
      ['cyberpunk city', '2', 'nature overgrowth', '1', 'people', 'ancient ruins', '1.5', 'futuristic elements', '1', 'modern buildings'],
      'Higher weights make concepts more prominent in the final image.',
      { title: 'Multi-prompt master!', message: "You've learned advanced prompt weighting!" },
      { title: 'Try again', message: 'Remember: higher numbers = more influence.' },
      '/images/course/midjourney/mj-multi-prompt.png',
      'Multi-prompting lets you blend concepts in precise ratios.',
      `🔀 **Multi-Prompt Analysis**

**Your Prompt:**
\`/imagine prompt: cyberpunk city::2 nature overgrowth::1 people::-.5\`

**Weight Breakdown:**

| Concept | Weight | Influence |
|---------|--------|-----------|
| Cyberpunk city | ::2 | 66% (dominant) |
| Nature overgrowth | ::1 | 33% (secondary) |
| People | ::-.5 | Reduced/avoided |

**Visual Result:**
A post-apocalyptic scene where nature reclaims a cyberpunk metropolis, with no human figures.

**How Weights Work:**
\`\`\`
Total positive weight = 2 + 1 = 3
Cyberpunk influence = 2/3 = 66%
Nature influence = 1/3 = 33%
\`\`\`

**Advanced Techniques:**

**Blending Styles:**
\`oil painting::1.5 digital art::1\`

**Concept Fusion:**
\`cat::1 robot::1\` → Cat-robot hybrid

**Reducing Elements:**
\`forest::2 fog::-.5\` → Clear forest

**Pro Tip:** Start with equal weights, then adjust based on results!`
    ),
    createFeedbackBlock(
      'How useful is multi-prompting for your needs?',
      ['Essential', 'Helpful for complex images', 'Too advanced for now'],
      0
    ),
    createDiscoveryBlock(
      11,
      'Weighted Concepts',
      'Use :: and weights to precisely control how concepts blend in your images.'
    ),
  ],
};

export const mjLesson3_2: CoursivLesson = {
  id: 'mj-3-2',
  courseId: 'midjourney',
  title: 'Consistent Characters',
  subtitle: 'Creating character consistency',
  blocks: [
    createTextBlock(
      "The Character Challenge",
      "👤",
      [
        "One of the biggest challenges in AI art is maintaining consistent characters across multiple images.",
        "Midjourney offers several techniques to help achieve character consistency.",
      ]
    ),
    createTextBlock(
      "Consistency Techniques",
      "🎭",
      [
        "**--cref**: Character reference to maintain appearance",
        "**--cw**: Character weight (0-100) for reference strength",
        "**Detailed Descriptions**: Consistent, specific character details",
        "**Seed Locking**: Use --seed to maintain randomness consistency",
      ]
    ),
    createPlaygroundBlock(
      'Creating Consistent Characters',
      'Use character references for consistency.',
      { name: 'Midjourney', icon: '🖼️' },
      '/imagine prompt: [character_description], [action] --cref [reference] --cw [weight]',
      [
        { id: 'character_description', placeholder: 'character', correctAnswer: 'red-haired warrior woman' },
        { id: 'action', placeholder: 'action', correctAnswer: 'riding a horse' },
        { id: 'reference', placeholder: 'reference', correctAnswer: 'URL_of_character' },
        { id: 'weight', placeholder: 'weight', correctAnswer: '100' }
      ],
      ['red-haired warrior woman', 'riding a horse', 'URL_of_character', '100', 'elderly wizard', 'casting a spell', 'URL_of_wizard', '80'],
      '--cref maintains character appearance across different scenes.',
      { title: 'Character consistent!', message: "You understand character consistency!" },
      { title: 'Try again', message: 'Use --cref with a reference image of your character.' },
      '/images/course/midjourney/mj-character.png',
      '--cw at 100 focuses on face, lower values include clothing and style.',
      `👤 **Character Consistency Guide**

**Your Prompt:**
\`/imagine prompt: red-haired warrior woman, riding a horse --cref URL --cw 100\`

**--cref (Character Reference)**
Maintains:
- Facial features
- Hair color/style
- Body type
- Overall appearance

**--cw (Character Weight)**
| Value | Focus |
|-------|-------|
| 0 | Ignore face, use style only |
| 50 | Balance face and style |
| 100 | Maximum face consistency |

**Consistency Workflow:**

1️⃣ **Create Base Character**
\`warrior woman, red hair, green eyes, scar on cheek, detailed portrait\`

2️⃣ **Save Best Result**
Upscale and save the URL

3️⃣ **Use as Reference**
\`[new scene] --cref [saved URL] --cw 100\`

4️⃣ **Iterate**
Adjust --cw if needed

**Additional Tips:**

📝 **Detailed Description:**
Always include consistent details:
- "Red-haired warrior woman with green eyes and a scar on her left cheek"

🎲 **Seed Locking:**
\`--seed 12345\` keeps randomness consistent

**Pro Tip:** Create a "character sheet" with multiple angles as your reference!`
    ),
    createFeedbackBlock(
      'Will you create consistent characters?',
      ['Yes, for storytelling', 'Maybe for projects', 'Not my use case'],
      0
    ),
    createDiscoveryBlock(
      12,
      'Character Consistency',
      '--cref and --cw help maintain character appearance across multiple images.'
    ),
  ],
};

export const mjLesson3_3: CoursivLesson = {
  id: 'mj-3-3',
  courseId: 'midjourney',
  title: 'Commercial Projects',
  subtitle: 'Professional workflows',
  blocks: [
    createTextBlock(
      "Midjourney for Professionals",
      "💼",
      [
        "Many professionals use Midjourney for commercial projects: concept art, marketing, product visualization, and more.",
        "Understanding professional workflows helps you deliver consistent, high-quality work.",
      ]
    ),
    createTextBlock(
      "Professional Workflow",
      "📋",
      [
        "**1. Brief Analysis**: Understand requirements and constraints",
        "**2. Style Development**: Create and refine a consistent style",
        "**3. Batch Generation**: Produce multiple options efficiently",
        "**4. Quality Control**: Review and refine outputs",
      ]
    ),
    createPlaygroundBlock(
      'Planning a Commercial Project',
      'Structure a professional Midjourney workflow.',
      { name: 'Midjourney', icon: '🖼️' },
      'For this [project_type], I need to first [step1], then [step2], and finally [step3].',
      [
        { id: 'project_type', placeholder: 'project type', correctAnswer: 'product campaign' },
        { id: 'step1', placeholder: 'step 1', correctAnswer: 'establish the visual style' },
        { id: 'step2', placeholder: 'step 2', correctAnswer: 'generate hero images' },
        { id: 'step3', placeholder: 'step 3', correctAnswer: 'create variations for different platforms' }
      ],
      ['product campaign', 'establish the visual style', 'generate hero images', 'create variations for different platforms', 'book cover series', 'define the artistic direction', 'create the main cover', 'adapt for different formats'],
      'Professional projects require structured workflows for consistency.',
      { title: 'Professional approach!', message: "You understand commercial workflows!" },
      { title: 'Try again', message: 'Think about the logical order of professional work.' },
      '/images/course/midjourney/mj-commercial.png',
      'Always establish style first, then scale production.',
      `💼 **Commercial Project Workflow**

**Project: Product Campaign**

**Phase 1: Style Establishment**
\`\`\`
1. Gather brand guidelines
2. Create mood board
3. Test 10-20 style variations
4. Get client approval on direction
5. Document winning parameters
\`\`\`

**Phase 2: Hero Image Generation**
| Task | Approach |
|------|----------|
| Main visual | Multiple variations |
| Lighting tests | Different moods |
| Composition options | Various layouts |
| Color variations | Brand palette |

**Phase 3: Platform Adaptation**
- Instagram: 1:1 and 4:5 crops
- Facebook: 1.91:1 for ads
- Website: 16:9 hero banners
- Print: High-res upscales

**Quality Checklist:**
✅ Consistent style across all images
✅ Brand colors accurately represented
✅ No AI artifacts or distortions
✅ Appropriate resolution for use
✅ Licensing compliance verified

**Efficiency Tips:**

📁 **Organization:**
- Name files systematically
- Keep prompt logs
- Save successful seeds

⚡ **Batch Processing:**
Use permutations for variations:
\`{red, blue, green} product on {white, black} background\`

**Pro Tip:** Create a "style guide" document with your winning prompts and parameters!`
    ),
    createFeedbackBlock(
      'Do you plan to use Midjourney commercially?',
      ['Yes, regularly', 'Occasionally', 'Personal use only'],
      0
    ),
    createDiscoveryBlock(
      13,
      'Professional Workflow',
      'Commercial projects require style establishment, batch generation, and quality control.'
    ),
  ],
};

export const mjLesson3_Quiz: CoursivLesson = {
  id: 'mj-3-quiz',
  courseId: 'midjourney',
  title: 'Advanced Quiz',
  subtitle: 'Final assessment',
  blocks: [
    createTextBlock(
      "Final Assessment",
      "🏆",
      [
        "Congratulations on reaching the advanced level!",
        "Pass this quiz to complete the Midjourney course!",
      ]
    ),
    createQuizBlock(
      'What does :: (double colon) do in a prompt?',
      [
        'Adds a comment',
        'Separates concepts for multi-prompting',
        'Ends the prompt',
        'Adds emphasis'
      ],
      1,
      ':: separates different concepts in multi-prompting, allowing you to weight them differently.',
      'Think about combining multiple concepts.'
    ),
    createQuizBlock(
      'What does --cref do?',
      [
        'Creates a reference document',
        'Maintains character consistency using a reference image',
        'Changes resolution',
        'Crops the image'
      ],
      1,
      '--cref (character reference) uses a reference image to maintain character consistency.',
      'Think about keeping characters consistent.'
    ),
    createQuizBlock(
      'In a commercial workflow, what should you do first?',
      [
        'Generate final images immediately',
        'Establish the visual style and get approval',
        'Create platform variations',
        'Upload to social media'
      ],
      1,
      'Professional workflows start with style establishment before scaling production.',
      'Consider the logical order of professional work.'
    ),
    createQuizBlock(
      'What does a negative weight (::-.5) do?',
      [
        'Makes the image darker',
        'Reduces or removes that element from the image',
        'Adds more of that element',
        'Nothing'
      ],
      1,
      'Negative weights reduce the presence of specified elements in the generated image.',
      'Think about what negative means in this context.'
    ),
    createDiscoveryBlock(
      14,
      'Course Complete!',
      'Congratulations! You\'ve mastered Midjourney from basics to professional techniques!'
    ),
  ],
};

// Export all lessons
export const midjourneyLessons: CoursivLesson[] = [
  // Level 1: Beginner
  mjLesson1_1,
  mjLesson1_2,
  mjLesson1_3,
  mjLesson1_4,
  mjLesson1_Quiz,
  // Level 2: Intermediate
  mjLesson2_1,
  mjLesson2_2,
  mjLesson2_3,
  mjLesson2_4,
  mjLesson2_Quiz,
  // Level 3: Advanced
  mjLesson3_1,
  mjLesson3_2,
  mjLesson3_3,
  mjLesson3_Quiz,
];
