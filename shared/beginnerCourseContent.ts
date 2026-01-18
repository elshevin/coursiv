/**
 * Complete Beginner Course Content for All AI Tools
 * This file provides comprehensive beginner-level content for all courses
 */

import { ContentPage, QuizQuestion } from './courseData';

// ============================================
// DALL-E Course - Beginner Level
// ============================================

export const dalleBeginnerContent: Record<string, ContentPage[]> = {
  'dalle-1-1': [
    {
      text: `**Welcome to DALL-E**

DALL-E is OpenAI's revolutionary AI image generator that creates stunning images from text descriptions. Named after the artist Salvador Dalí and Pixar's WALL-E, it represents a breakthrough in creative AI.

**What makes DALL-E special?**
You simply describe what you want to see, and DALL-E creates it. It's like having a talented artist who can paint anything you can imagine.`,
      image: '🎨'
    },
    {
      text: `**How DALL-E Works**

DALL-E was trained on millions of images paired with their descriptions. Through this training, it learned:

• **Visual concepts** - What objects, animals, and scenes look like
• **Artistic styles** - From photorealistic to cartoon, watercolor to oil painting
• **Composition** - How to arrange elements in a pleasing way
• **Lighting & mood** - How light affects the feel of an image

Now it can combine these learnings to create entirely new images!`,
      image: '🖼️'
    },
    {
      text: `**DALL-E 3 vs Earlier Versions**

DALL-E 3 (the current version) is a major improvement:

• **Better text understanding** - Follows complex prompts more accurately
• **Higher quality** - More detailed and realistic images
• **Text in images** - Can now render text correctly
• **Safety features** - Built-in content moderation

You can access DALL-E 3 through ChatGPT Plus or the OpenAI API.`,
      image: '✨'
    },
    {
      text: `**What Can You Create?**

DALL-E can generate almost any type of image:

1. **Photorealistic images** - Looks like real photographs
2. **Illustrations** - Digital art, cartoons, anime
3. **Concept art** - Product designs, architecture
4. **Artistic styles** - Impressionist, surrealist, minimalist
5. **Marketing materials** - Ads, social media graphics

The only limits are your imagination and the content policies.`,
      image: '🚀'
    }
  ],
  'dalle-1-2': [
    {
      text: `**Your First Image Prompt**

Creating your first DALL-E image is exciting! Let's start with the basics.

**Simple prompt example:**
"A golden retriever puppy playing in autumn leaves"

DALL-E will generate an image based on your description. The more details you add, the more specific your result will be.`,
      image: '🐕'
    },
    {
      text: `**The Anatomy of a Good Prompt**

Great DALL-E prompts typically include:

• **Subject** - What's the main focus? (a cat, a house, a person)
• **Action** - What's happening? (sitting, running, flying)
• **Setting** - Where is it? (forest, city, beach)
• **Style** - How should it look? (realistic, cartoon, oil painting)
• **Mood** - What feeling? (peaceful, dramatic, cheerful)`,
      image: '📝'
    },
    {
      text: `**Comparing Prompts**

See how details change the result:

**Basic:** "A house"
**Better:** "A cozy cottage with a thatched roof"
**Best:** "A cozy cottage with a thatched roof, surrounded by wildflowers, golden hour lighting, watercolor style"

Each additional detail gives DALL-E more guidance to create exactly what you envision.`,
      image: '🏠'
    },
    {
      text: `**Practice Exercise**

Try these starter prompts to get comfortable:

1. "A cat wearing a tiny hat, digital art"
2. "A futuristic city at sunset, cyberpunk style"
3. "A coffee cup with steam, cozy café background, warm lighting"
4. "An astronaut riding a horse on Mars, photorealistic"

Notice how each prompt includes subject, setting, and style hints.`,
      image: '🎯'
    }
  ],
  'dalle-1-3': [
    {
      text: `**Basic Prompt Structure**

To consistently get great results, follow this structure:

**[Subject] + [Description] + [Setting] + [Style] + [Mood/Lighting]**

Example: "A majestic lion (subject) with a flowing golden mane (description) standing on a cliff (setting) in the style of a Renaissance painting (style) with dramatic sunset lighting (mood)"`,
      image: '📋'
    },
    {
      text: `**Style Keywords That Work**

Add these to change the artistic style:

**Realistic styles:**
• Photorealistic, hyperrealistic, 4K, high detail

**Artistic styles:**
• Oil painting, watercolor, digital art, anime
• Impressionist, surrealist, minimalist
• Studio Ghibli style, Pixar style

**Photography styles:**
• Portrait, landscape, macro, aerial view
• 35mm film, bokeh, long exposure`,
      image: '🎨'
    },
    {
      text: `**Lighting and Mood Keywords**

Lighting dramatically affects your image:

**Time of day:**
• Golden hour, sunset, sunrise, midnight, noon

**Lighting types:**
• Soft lighting, dramatic lighting, backlit
• Neon lights, candlelight, studio lighting

**Mood keywords:**
• Peaceful, mysterious, energetic, melancholic
• Dreamy, vibrant, dark, ethereal`,
      image: '💡'
    },
    {
      text: `**Common Mistakes to Avoid**

Learn from these common beginner errors:

❌ **Too vague:** "A nice picture"
✅ **Better:** "A serene mountain lake at dawn, photorealistic"

❌ **Contradictory:** "A dark, bright room"
✅ **Better:** "A room with dramatic contrast lighting"

❌ **Too complex:** Describing 10 different things
✅ **Better:** Focus on 2-3 main elements

Start simple, then add details in follow-up generations.`,
      image: '⚠️'
    }
  ]
};

// ============================================
// Midjourney Course - Beginner Level
// ============================================

export const midjourneyBeginnerContent: Record<string, ContentPage[]> = {
  'mj-1-1': [
    {
      text: `**Welcome to Midjourney**

Midjourney is an AI art generator known for creating stunning, artistic images with a distinctive aesthetic quality. It's become the go-to tool for artists, designers, and creators worldwide.

**What makes Midjourney unique?**
• Exceptional artistic quality
• Distinctive, beautiful aesthetic
• Strong community of creators
• Constant improvements and updates`,
      image: '✨'
    },
    {
      text: `**Midjourney's Artistic Strength**

While other AI image generators aim for photorealism, Midjourney excels at creating:

• **Concept art** - Stunning fantasy and sci-fi imagery
• **Illustrations** - Beautiful, stylized artwork
• **Atmospheric scenes** - Moody, evocative environments
• **Character designs** - Unique, memorable characters

Many professional artists use Midjourney for inspiration and concept development.`,
      image: '🎨'
    },
    {
      text: `**How Midjourney Works**

Unlike other AI tools, Midjourney operates through Discord:

1. You join the Midjourney Discord server
2. You type commands in chat channels
3. Midjourney generates images and posts them
4. You can refine, upscale, or create variations

This unique approach creates a community experience where you can see others' creations and get inspired.`,
      image: '💬'
    },
    {
      text: `**Midjourney Versions**

Midjourney constantly improves with new versions:

• **V5** - Highly detailed, realistic capabilities
• **V6** - Better text, improved understanding
• **Niji** - Specialized for anime/manga style

Each version has different strengths. You can specify which version to use in your prompts.`,
      image: '🔄'
    }
  ],
  'mj-1-2': [
    {
      text: `**Setting Up Discord**

To use Midjourney, you need Discord (free):

**Step 1:** Download Discord from discord.com
**Step 2:** Create a free account
**Step 3:** Join the Midjourney server at midjourney.com
**Step 4:** Subscribe to a Midjourney plan

Once set up, you'll have access to the Midjourney bot and community channels.`,
      image: '📱'
    },
    {
      text: `**Navigating the Midjourney Server**

The Midjourney Discord has several important areas:

• **#newbies channels** - Where beginners can generate images
• **#general** - Community discussion
• **#show-and-tell** - Share your best creations
• **#prompt-craft** - Learn prompting techniques

Start in a newbies channel to practice without pressure.`,
      image: '🗺️'
    },
    {
      text: `**Your Midjourney Subscription**

Midjourney offers several plans:

• **Basic ($10/mo)** - ~200 generations/month
• **Standard ($30/mo)** - 15 hours fast generation
• **Pro ($60/mo)** - 30 hours fast + stealth mode
• **Mega ($120/mo)** - 60 hours fast generation

All plans include commercial usage rights for your images.`,
      image: '💳'
    },
    {
      text: `**Private vs Public Generation**

By default, your images are public in Discord. Options:

• **Public channels** - Everyone sees your prompts and images
• **DM the bot** - More private (Pro plan feature)
• **Stealth mode** - Images don't appear in gallery (Pro plan)
• **Private server** - Invite the bot to your own server

Most users start in public channels and that's perfectly fine!`,
      image: '🔒'
    }
  ],
  'mj-1-3': [
    {
      text: `**The /imagine Command**

The core command in Midjourney is /imagine:

\`/imagine prompt: [your description here]\`

Example:
\`/imagine prompt: a magical forest with glowing mushrooms, fantasy art\`

After typing /imagine, Discord will show a prompt field where you enter your description.`,
      image: '⌨️'
    },
    {
      text: `**Understanding the Image Grid**

When Midjourney generates images, you get a 2x2 grid of 4 variations:

• **U1, U2, U3, U4** - Upscale buttons (make one image larger)
• **V1, V2, V3, V4** - Variation buttons (create variations of one)
• **🔄** - Re-roll (generate 4 new images)

The numbers correspond to positions: 1=top-left, 2=top-right, 3=bottom-left, 4=bottom-right`,
      image: '🖼️'
    },
    {
      text: `**Other Essential Commands**

Beyond /imagine, learn these commands:

• **/settings** - Adjust your default settings
• **/describe** - Upload an image, get prompt suggestions
• **/blend** - Combine 2-5 images together
• **/info** - Check your subscription and usage
• **/help** - Get help and documentation`,
      image: '📚'
    },
    {
      text: `**Quick Tips for Beginners**

Start your Midjourney journey right:

1. **Keep prompts simple** at first
2. **Use the V buttons** to explore variations
3. **Study others' prompts** in the community
4. **Save prompts that work** for future reference
5. **Experiment freely** - there's no wrong way!

The best way to learn is by generating lots of images.`,
      image: '💡'
    }
  ],
  'mj-1-4': [
    {
      text: `**Creating Your First Image**

Let's create your first Midjourney image step by step:

1. Go to a #newbies channel
2. Type: \`/imagine prompt: a cute robot holding flowers, digital art\`
3. Press Enter and wait (usually 30-60 seconds)
4. Your image grid will appear!

Congratulations - you're now an AI artist!`,
      image: '🎉'
    },
    {
      text: `**Refining Your Creation**

Once you have your grid, you can:

**Upscale (U buttons):**
Click U1-U4 to get a high-resolution version of that image. This is your "final" image.

**Variations (V buttons):**
Click V1-V4 to generate 4 new images similar to that one. Great for exploring ideas.

**Re-roll (🔄):**
Generate 4 completely new images with the same prompt.`,
      image: '🔧'
    },
    {
      text: `**Saving Your Images**

To save your Midjourney creations:

1. Click on the image to open it full-size
2. Right-click and "Save Image As"
3. Or click "Open in Browser" for highest quality

Your images are also saved in your Midjourney gallery at midjourney.com/app`,
      image: '💾'
    },
    {
      text: `**Practice Prompts**

Try these beginner-friendly prompts:

1. \`/imagine prompt: a cozy coffee shop interior, warm lighting, illustration\`

2. \`/imagine prompt: a majestic dragon flying over mountains, fantasy art\`

3. \`/imagine prompt: a futuristic city street at night, neon lights, cyberpunk\`

4. \`/imagine prompt: a peaceful zen garden with cherry blossoms, Japanese art style\`

Generate, explore variations, and have fun!`,
      image: '🎯'
    }
  ]
};

// ============================================
// Claude Course - Beginner Level
// ============================================

export const claudeBeginnerContent: Record<string, ContentPage[]> = {
  'claude-1-1': [
    {
      text: `**Meet Claude**

Claude is an AI assistant created by Anthropic, a company focused on AI safety. Named after Claude Shannon, the father of information theory, Claude is designed to be helpful, harmless, and honest.

**What makes Claude different?**
• Strong focus on safety and ethics
• Excellent at nuanced, thoughtful responses
• Great for analysis and reasoning
• Very good at following complex instructions`,
      image: '🤖'
    },
    {
      text: `**Claude's Key Strengths**

Claude excels in several areas:

• **Long documents** - Can read and analyze entire books
• **Careful reasoning** - Thinks through problems methodically
• **Writing quality** - Produces clear, well-structured text
• **Following instructions** - Adheres closely to your requests
• **Admitting uncertainty** - Honest about what it doesn't know`,
      image: '💪'
    },
    {
      text: `**Claude vs ChatGPT**

Both are powerful, but they have different personalities:

**Claude:**
• More cautious and thoughtful
• Better at long document analysis
• Tends to be more nuanced
• Stronger ethical considerations

**ChatGPT:**
• More creative and playful
• Broader general knowledge
• More willing to speculate
• Larger plugin ecosystem`,
      image: '⚖️'
    },
    {
      text: `**Accessing Claude**

You can use Claude in several ways:

• **claude.ai** - Free web interface (with limits)
• **Claude Pro** - $20/month for more usage
• **API** - For developers building applications
• **Amazon Bedrock** - Enterprise integration

The free tier is great for getting started and learning!`,
      image: '🌐'
    }
  ],
  'claude-1-2': [
    {
      text: `**Starting a Conversation**

Talking to Claude is natural and intuitive:

• **Be direct** - State what you need clearly
• **Provide context** - Background helps Claude help you
• **Ask follow-ups** - Claude remembers the conversation
• **Be specific** - Details lead to better responses

Example: "I'm writing a blog post about sustainable fashion. Can you help me outline the key points to cover?"`,
      image: '💬'
    },
    {
      text: `**Effective Communication Tips**

Get better results with these approaches:

**Do:**
• Explain your goal and context
• Break complex requests into steps
• Ask Claude to explain its reasoning
• Request specific formats when needed

**Avoid:**
• Vague, open-ended questions
• Assuming Claude knows your situation
• Asking for harmful or unethical content`,
      image: '✅'
    },
    {
      text: `**Using Claude's Memory**

Claude remembers your entire conversation:

• Reference earlier points: "Going back to what you said about..."
• Build on previous responses: "Can you expand on point 3?"
• Correct misunderstandings: "Actually, I meant..."
• Refine outputs: "Make it more formal" or "Shorter please"

This makes Claude great for iterative work.`,
      image: '🧠'
    },
    {
      text: `**Practice Conversations**

Try these conversation starters:

1. "I need to write a professional email declining a job offer politely. Can you help?"

2. "Explain quantum computing to me like I'm a high school student."

3. "I'm planning a trip to Japan. What are the must-see places for a first-time visitor?"

4. "Review this paragraph and suggest improvements: [paste text]"`,
      image: '🎯'
    }
  ],
  'claude-1-3': [
    {
      text: `**Claude for Analysis**

One of Claude's superpowers is analyzing information:

• **Document analysis** - Summarize, extract key points
• **Data interpretation** - Explain trends and patterns
• **Comparison** - Compare options, pros and cons
• **Research synthesis** - Combine information from multiple sources

Claude can handle very long documents - even entire books!`,
      image: '🔍'
    },
    {
      text: `**Uploading Documents**

Claude can read files you upload:

**Supported formats:**
• PDF documents
• Word documents (.docx)
• Text files (.txt)
• Code files
• Images (for analysis)

Simply drag and drop or use the attachment button.`,
      image: '📎'
    },
    {
      text: `**Analysis Prompts**

Try these analysis-focused prompts:

• "Summarize this document in 3 key points"
• "What are the main arguments in this article?"
• "Compare these two proposals and recommend one"
• "Extract all the action items from this meeting notes"
• "What questions does this report leave unanswered?"`,
      image: '📊'
    },
    {
      text: `**Getting Structured Output**

Ask Claude for organized analysis:

"Analyze this business proposal and provide:
1. Executive summary (2-3 sentences)
2. Key strengths (bullet points)
3. Potential risks (bullet points)
4. Questions to ask the proposer
5. Your overall recommendation"

Structured requests get structured, useful responses.`,
      image: '📋'
    }
  ]
};

// ============================================
// Gemini Course - Beginner Level
// ============================================

export const geminiBeginnerContent: Record<string, ContentPage[]> = {
  'gemini-1-1': [
    {
      text: `**Introduction to Gemini**

Gemini is Google's most advanced AI model, designed to be multimodal from the ground up. This means it can understand and work with text, images, audio, and video seamlessly.

**Why Gemini matters:**
• Built by Google with vast resources
• Integrated with Google's ecosystem
• Truly multimodal understanding
• Available in multiple sizes for different needs`,
      image: '💎'
    },
    {
      text: `**Gemini's Multimodal Power**

Unlike text-only AI, Gemini can:

• **See images** - Analyze photos, diagrams, screenshots
• **Read documents** - Process PDFs with text and images
• **Understand context** - Connect visual and textual information
• **Generate content** - Create text based on visual input

This makes it incredibly versatile for real-world tasks.`,
      image: '👁️'
    },
    {
      text: `**Gemini Model Sizes**

Google offers Gemini in different sizes:

• **Gemini Ultra** - Most capable, complex tasks
• **Gemini Pro** - Balanced performance (free tier)
• **Gemini Nano** - Runs on mobile devices

Most users interact with Gemini Pro through Google's interfaces.`,
      image: '📊'
    },
    {
      text: `**Accessing Gemini**

You can use Gemini in several ways:

• **gemini.google.com** - Direct web interface
• **Google AI Studio** - For developers
• **Google Workspace** - Integrated in Docs, Sheets, etc.
• **Android devices** - Built into newer phones

The web interface at gemini.google.com is the easiest way to start.`,
      image: '🌐'
    }
  ],
  'gemini-1-2': [
    {
      text: `**Text Generation with Gemini**

Gemini excels at generating high-quality text:

• **Writing assistance** - Emails, articles, stories
• **Summarization** - Condense long content
• **Translation** - Between many languages
• **Brainstorming** - Generate ideas and options
• **Explanation** - Break down complex topics`,
      image: '✍️'
    },
    {
      text: `**Effective Prompting**

Get better results from Gemini:

**Be specific:** Instead of "Write about dogs," try "Write a 200-word blog post about the benefits of adopting senior dogs"

**Provide context:** "I'm a teacher creating materials for 5th graders. Explain photosynthesis in simple terms."

**Request format:** "Create a bullet-point list of..." or "Write this as a formal letter..."`,
      image: '🎯'
    },
    {
      text: `**Google Integration Benefits**

Gemini works seamlessly with Google tools:

• **Search integration** - Access up-to-date information
• **Gmail** - Draft and summarize emails
• **Docs** - Write and edit documents
• **Sheets** - Analyze data and create formulas
• **Slides** - Generate presentation content

This integration makes Gemini especially powerful for productivity.`,
      image: '🔗'
    },
    {
      text: `**Practice Prompts**

Try these with Gemini:

1. "Write a professional LinkedIn post announcing a new job"

2. "Create a weekly meal plan for a vegetarian family of 4"

3. "Explain blockchain technology in simple terms with an analogy"

4. "Draft a polite email asking for a deadline extension"

Experiment with different styles and formats!`,
      image: '📝'
    }
  ],
  'gemini-1-3': [
    {
      text: `**Image Understanding**

Gemini can analyze images you upload:

• **Describe images** - What's in the photo?
• **Read text** - Extract text from images
• **Analyze charts** - Interpret data visualizations
• **Identify objects** - Recognize items, places, people
• **Answer questions** - About image content`,
      image: '🖼️'
    },
    {
      text: `**How to Use Image Analysis**

To analyze an image with Gemini:

1. Click the image upload button
2. Select your image file
3. Add your question or request
4. Gemini will analyze and respond

Example: Upload a chart and ask "What trends do you see in this data?"`,
      image: '📤'
    },
    {
      text: `**Practical Image Use Cases**

Real-world applications:

• **Homework help** - Upload a math problem photo
• **Recipe identification** - "What dish is this?"
• **Document processing** - Extract info from receipts
• **Design feedback** - "How can I improve this layout?"
• **Plant/animal ID** - "What species is this?"`,
      image: '💡'
    },
    {
      text: `**Tips for Image Prompts**

Get better image analysis:

• **Clear images** - Good lighting, in focus
• **Specific questions** - Ask exactly what you want to know
• **Context helps** - "This is a menu from a restaurant..."
• **Multiple images** - Compare or analyze together

Gemini's multimodal nature makes it uniquely powerful for visual tasks.`,
      image: '✨'
    }
  ]
};

// ============================================
// Perplexity Course - Beginner Level
// ============================================

export const perplexityBeginnerContent: Record<string, ContentPage[]> = {
  'perplexity-1-1': [
    {
      text: `**What is Perplexity?**

Perplexity is an AI-powered search engine that provides direct answers with sources. Think of it as a research assistant that reads the internet for you and summarizes what it finds.

**Key difference from Google:**
Instead of giving you links to click, Perplexity reads those pages and gives you a synthesized answer with citations.`,
      image: '🔍'
    },
    {
      text: `**How Perplexity Works**

When you ask a question:

1. **Searches the web** - Finds relevant, current sources
2. **Reads the content** - Processes multiple pages
3. **Synthesizes an answer** - Combines information
4. **Cites sources** - Shows where info came from
5. **Allows follow-ups** - Continue the conversation

It's like having a research assistant who does the reading for you.`,
      image: '⚙️'
    },
    {
      text: `**Why Use Perplexity?**

Perplexity excels at:

• **Research questions** - Get comprehensive answers
• **Current events** - Up-to-date information
• **Fact-checking** - Verify claims with sources
• **Learning topics** - Understand new subjects
• **Comparison shopping** - Research products

The source citations help you verify and explore further.`,
      image: '✅'
    },
    {
      text: `**Free vs Pro**

Perplexity offers two tiers:

**Free:**
• Unlimited basic searches
• Standard AI model
• Great for most users

**Pro ($20/month):**
• More powerful AI models
• File uploads
• Unlimited Pro searches
• API access

Start with free - it's very capable!`,
      image: '💳'
    }
  ],
  'perplexity-1-2': [
    {
      text: `**Your First Search**

Using Perplexity is simple:

1. Go to perplexity.ai
2. Type your question naturally
3. Press Enter
4. Read the answer with sources

Example: "What are the health benefits of green tea?"

Perplexity will search, synthesize, and cite sources for you.`,
      image: '🚀'
    },
    {
      text: `**Asking Good Questions**

Get better results with clear questions:

**Too vague:** "Tell me about AI"
**Better:** "What are the main applications of AI in healthcare?"

**Too broad:** "Best laptop"
**Better:** "Best laptop for video editing under $1500 in 2024"

Specific questions get specific, useful answers.`,
      image: '❓'
    },
    {
      text: `**Understanding the Results**

Perplexity's answers include:

• **Main answer** - Synthesized response to your question
• **Source citations** - Numbered references [1], [2], etc.
• **Source list** - Links to original sources
• **Follow-up suggestions** - Related questions to explore
• **Images** - When relevant to your query`,
      image: '📖'
    },
    {
      text: `**Follow-up Questions**

Continue your research naturally:

After getting an answer, you can:
• Ask for more detail: "Tell me more about point 2"
• Narrow down: "Which of these is best for beginners?"
• Compare: "How does this compare to [alternative]?"
• Go deeper: "What are the risks of this approach?"

Perplexity remembers your conversation context.`,
      image: '🔄'
    }
  ],
  'perplexity-1-3': [
    {
      text: `**Understanding Sources**

Perplexity shows where information comes from:

• **Numbered citations** - [1], [2] in the text
• **Source cards** - Click to see the original
• **Credibility indicators** - Official sites, news, etc.

Always check sources for important decisions!`,
      image: '📚'
    },
    {
      text: `**Evaluating Source Quality**

Not all sources are equal. Look for:

**Strong sources:**
• Official websites (.gov, .edu)
• Reputable news organizations
• Peer-reviewed research
• Expert publications

**Weaker sources:**
• Random blogs
• User-generated content
• Outdated information
• Biased sources`,
      image: '⚖️'
    },
    {
      text: `**When to Verify Further**

Always double-check for:

• **Medical information** - Consult professionals
• **Legal advice** - Consult lawyers
• **Financial decisions** - Verify with experts
• **Breaking news** - Wait for confirmation
• **Controversial topics** - Check multiple perspectives

Perplexity is a starting point, not the final word.`,
      image: '⚠️'
    },
    {
      text: `**Practice Searches**

Try these research queries:

1. "What's the difference between 401k and IRA?"

2. "Best practices for remote team management"

3. "How does mRNA vaccine technology work?"

4. "Comparison of electric vs hybrid cars for city driving"

Notice how Perplexity synthesizes multiple sources into clear answers.`,
      image: '🎯'
    }
  ]
};

// ============================================
// GitHub Copilot Course - Beginner Level
// ============================================

export const copilotBeginnerContent: Record<string, ContentPage[]> = {
  'copilot-1-1': [
    {
      text: `**Introduction to GitHub Copilot**

GitHub Copilot is an AI pair programmer that helps you write code faster. It suggests code completions, entire functions, and even helps you learn new programming patterns.

**Think of it as:**
An experienced developer sitting next to you, offering suggestions as you type.`,
      image: '💻'
    },
    {
      text: `**How Copilot Works**

Copilot is powered by OpenAI's Codex model:

• **Trained on code** - Billions of lines from GitHub
• **Context-aware** - Understands your current file
• **Multi-language** - Works with most programming languages
• **Real-time** - Suggests as you type

It doesn't just autocomplete - it understands intent.`,
      image: '🧠'
    },
    {
      text: `**What Copilot Can Do**

Copilot helps with:

• **Code completion** - Finish your lines of code
• **Function generation** - Write entire functions from comments
• **Boilerplate code** - Generate repetitive patterns
• **Test writing** - Create unit tests
• **Documentation** - Generate comments and docs
• **Learning** - See how to implement things`,
      image: '✨'
    },
    {
      text: `**Copilot Plans**

GitHub Copilot is available as:

• **Individual ($10/month)** - For personal use
• **Business ($19/user/month)** - For teams
• **Enterprise** - Advanced features for large orgs
• **Free for students** - With GitHub Education

Most developers find it pays for itself in productivity gains.`,
      image: '💳'
    }
  ],
  'copilot-1-2': [
    {
      text: `**Setting Up Copilot**

To use GitHub Copilot:

1. **Subscribe** at github.com/features/copilot
2. **Install the extension** in your code editor
3. **Sign in** with your GitHub account
4. **Start coding** - suggestions appear automatically

Copilot works in VS Code, JetBrains IDEs, Neovim, and more.`,
      image: '🔧'
    },
    {
      text: `**VS Code Installation**

For Visual Studio Code:

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search "GitHub Copilot"
4. Click Install
5. Sign in when prompted

That's it! Copilot is now ready to help.`,
      image: '📦'
    },
    {
      text: `**Copilot Interface**

When Copilot suggests code:

• **Gray text** - Suggested completion
• **Tab** - Accept the suggestion
• **Esc** - Dismiss the suggestion
• **Alt+]** - See next suggestion
• **Alt+[** - See previous suggestion

Suggestions appear automatically as you type.`,
      image: '⌨️'
    },
    {
      text: `**Copilot Chat**

Copilot Chat adds conversation:

• Ask questions about code
• Request explanations
• Get help debugging
• Ask for refactoring suggestions

Access it via the chat icon or Ctrl+I in VS Code.`,
      image: '💬'
    }
  ],
  'copilot-1-3': [
    {
      text: `**Understanding Suggestions**

Copilot suggestions come from context:

• **Current file** - What you're working on
• **Open files** - Related code in your project
• **Comments** - Your descriptions of what you want
• **Function names** - Descriptive names help
• **Patterns** - Recognizes coding patterns`,
      image: '🔍'
    },
    {
      text: `**Getting Better Suggestions**

Help Copilot help you:

**Write clear comments:**
\`// Function to calculate the average of an array of numbers\`

**Use descriptive names:**
\`calculateMonthlyRevenue()\` vs \`calc()\`

**Provide context:**
Start with imports and type definitions`,
      image: '💡'
    },
    {
      text: `**When to Accept Suggestions**

Always review before accepting:

✅ **Accept when:**
• Code looks correct
• Matches your intent
• Follows your project's style

❌ **Reject when:**
• Contains errors
• Doesn't match your needs
• Uses outdated patterns
• Includes security issues`,
      image: '⚠️'
    },
    {
      text: `**Practice Exercise**

Try this in VS Code:

1. Create a new file \`utils.js\`
2. Type: \`// Function to check if a string is a palindrome\`
3. Press Enter and wait for Copilot
4. Review and Tab to accept

Watch how Copilot generates the complete function!`,
      image: '🎯'
    }
  ],
  'copilot-1-4': [
    {
      text: `**Comment-Driven Development**

One of Copilot's best features: write comments, get code.

**Example:**
\`\`\`
// Create a function that:
// 1. Takes an array of numbers
// 2. Filters out negative numbers
// 3. Returns the sum of remaining numbers
\`\`\`

Copilot will generate the complete function!`,
      image: '📝'
    },
    {
      text: `**Effective Comment Patterns**

Comments that work well:

• **Step-by-step:** "First... then... finally..."
• **Input/Output:** "Takes X, returns Y"
• **Examples:** "e.g., input [1,2,3] returns 6"
• **Constraints:** "Must handle empty arrays"

The clearer your comment, the better the code.`,
      image: '✍️'
    },
    {
      text: `**Real-World Examples**

Try these comment patterns:

**API call:**
\`// Fetch user data from /api/users/:id and return the JSON\`

**Data processing:**
\`// Parse CSV string into array of objects with headers as keys\`

**Validation:**
\`// Validate email format and return true/false\``,
      image: '🌐'
    },
    {
      text: `**Best Practices**

Make the most of comment-driven development:

1. **Start with the goal** - What should the code do?
2. **Include edge cases** - Empty inputs, errors
3. **Specify return type** - What comes back?
4. **Review carefully** - Copilot isn't perfect
5. **Iterate** - Refine comments if needed

This approach also creates self-documenting code!`,
      image: '🏆'
    }
  ]
};

// ============================================
// Stable Diffusion Course - Beginner Level
// ============================================

export const stableDiffusionBeginnerContent: Record<string, ContentPage[]> = {
  'sd-1-1': [
    {
      text: `**What is Stable Diffusion?**

Stable Diffusion is an open-source AI image generator. Unlike DALL-E or Midjourney, you can run it on your own computer for free!

**Key advantages:**
• Completely free to use
• Run locally - no internet needed
• Highly customizable
• Active community with thousands of models`,
      image: '🎭'
    },
    {
      text: `**How Stable Diffusion Works**

The "diffusion" process:

1. **Start with noise** - Random static image
2. **Guided denoising** - AI removes noise step by step
3. **Text guidance** - Your prompt steers the process
4. **Final image** - Clean, coherent result

It's like sculpting an image out of chaos!`,
      image: '🔬'
    },
    {
      text: `**Why Choose Stable Diffusion?**

Compared to other AI image tools:

• **Free** - No subscription needed
• **Private** - Images stay on your computer
• **Unlimited** - Generate as many as you want
• **Customizable** - Use custom models and styles
• **No content restrictions** - More creative freedom

The trade-off: requires more technical setup.`,
      image: '⚖️'
    },
    {
      text: `**Ways to Use Stable Diffusion**

You have options:

• **Online services** - No setup needed (some free)
• **Local installation** - Full control, free forever
• **Cloud GPUs** - Powerful, pay-per-use

We'll cover online options first, then local setup later.`,
      image: '🌐'
    }
  ],
  'sd-1-2': [
    {
      text: `**Online Stable Diffusion**

Try SD without installing anything:

• **Clipdrop** - Easy web interface
• **Playground AI** - Free generations daily
• **Leonardo AI** - Generous free tier
• **Tensor.Art** - Community models

These are great for learning before local setup.`,
      image: '💻'
    },
    {
      text: `**Using Playground AI**

A popular free option:

1. Go to playgroundai.com
2. Create a free account
3. Select "Stable Diffusion" model
4. Enter your prompt
5. Click Generate

Free tier: ~500 images per day!`,
      image: '🎮'
    },
    {
      text: `**Understanding the Interface**

Most SD interfaces have:

• **Prompt box** - Describe what you want
• **Negative prompt** - What to avoid
• **Model selector** - Different styles
• **Settings** - Size, steps, guidance
• **Generate button** - Create your image`,
      image: '🖥️'
    },
    {
      text: `**Quick Start Tips**

Get started quickly:

1. **Start simple** - Basic prompts first
2. **Use presets** - Built-in styles help
3. **Experiment** - Try different models
4. **Save favorites** - Note what works
5. **Join communities** - Learn from others

Don't worry about settings yet - defaults work fine!`,
      image: '🚀'
    }
  ],
  'sd-1-3': [
    {
      text: `**Basic Prompting for SD**

Stable Diffusion prompts work differently than other AI:

**Structure:**
\`[subject], [details], [style], [quality tags]\`

**Example:**
\`a majestic lion, golden mane, savanna background, digital art, highly detailed, 4k\``,
      image: '📝'
    },
    {
      text: `**Quality Tags**

Add these for better results:

**Resolution:**
• highly detailed, 4k, 8k, ultra detailed

**Quality:**
• masterpiece, best quality, professional

**Lighting:**
• studio lighting, dramatic lighting, soft lighting

**Style:**
• digital art, oil painting, photograph, anime`,
      image: '✨'
    },
    {
      text: `**Artist and Style References**

SD knows many art styles:

• "in the style of Studio Ghibli"
• "trending on ArtStation"
• "concept art"
• "photorealistic"
• "watercolor painting"
• "anime style"

Combining styles creates unique results!`,
      image: '🎨'
    },
    {
      text: `**Practice Prompts**

Try these beginner prompts:

1. \`beautiful sunset over ocean, dramatic clouds, photography, 4k\`

2. \`cute cat wearing wizard hat, fantasy art, highly detailed\`

3. \`futuristic city, neon lights, cyberpunk, concept art\`

4. \`portrait of a warrior, medieval armor, oil painting style\``,
      image: '🎯'
    }
  ],
  'sd-1-4': [
    {
      text: `**Negative Prompts**

Tell SD what NOT to include:

**Common negative prompts:**
\`ugly, blurry, bad anatomy, bad hands, text, watermark, low quality, deformed\`

This helps avoid common AI image problems.`,
      image: '🚫'
    },
    {
      text: `**Why Negative Prompts Matter**

Without negative prompts, you might get:

• Extra fingers or limbs
• Blurry or distorted faces
• Unwanted text or watermarks
• Low quality artifacts
• Weird anatomy

Negative prompts prevent these issues.`,
      image: '⚠️'
    },
    {
      text: `**Building Your Negative Prompt**

Start with this template:

\`ugly, deformed, blurry, bad anatomy, bad hands, extra fingers, extra limbs, disfigured, mutation, watermark, text, low quality\`

Add more based on what you're creating:
• For portraits: \`cross-eyed, asymmetric face\`
• For landscapes: \`people, buildings\` (if unwanted)`,
      image: '📋'
    },
    {
      text: `**Balancing Positive and Negative**

Tips for best results:

1. **Positive prompt** - What you want (be specific)
2. **Negative prompt** - What to avoid (be thorough)
3. **Don't over-negate** - Too many negatives can hurt quality
4. **Test and refine** - See what works for your style

Most online tools have default negatives - start there!`,
      image: '⚖️'
    }
  ]
};

// ============================================
// Notion AI Course - Beginner Level
// ============================================

export const notionBeginnerContent: Record<string, ContentPage[]> = {
  'notion-1-1': [
    {
      text: `**Introduction to Notion AI**

Notion AI brings artificial intelligence directly into your Notion workspace. It helps you write, brainstorm, summarize, and organize information without leaving your notes.

**What makes it special:**
AI that understands your workspace context and helps where you work.`,
      image: '📝'
    },
    {
      text: `**What Notion AI Can Do**

Built-in AI features:

• **Write content** - Draft documents, emails, posts
• **Summarize** - Condense long documents
• **Brainstorm** - Generate ideas and lists
• **Translate** - Convert between languages
• **Improve writing** - Fix grammar, change tone
• **Extract insights** - Find key points`,
      image: '✨'
    },
    {
      text: `**Accessing Notion AI**

Use Notion AI in several ways:

• **Space bar** - On empty line, press Space
• **Highlight text** - Select and click "Ask AI"
• **Slash command** - Type /ai anywhere
• **AI block** - Insert dedicated AI block

The Space bar shortcut is the fastest way!`,
      image: '⌨️'
    },
    {
      text: `**Notion AI Pricing**

Notion AI is an add-on:

• **Free trial** - Limited AI responses
• **AI Add-on** - $10/member/month
• **Included in some plans** - Check your subscription

The add-on gives unlimited AI usage across your workspace.`,
      image: '💳'
    }
  ],
  'notion-1-2': [
    {
      text: `**AI Writing Assistant**

Let Notion AI help you write:

1. Press Space on an empty line
2. Type what you want: "Write a project proposal for..."
3. Press Enter
4. AI generates content
5. Keep, edit, or regenerate`,
      image: '✍️'
    },
    {
      text: `**Writing Prompts That Work**

Be specific for better results:

**Vague:** "Write about marketing"
**Better:** "Write a 200-word blog intro about social media marketing trends in 2024"

**Vague:** "Make a list"
**Better:** "Create a 10-item checklist for launching a new product"`,
      image: '🎯'
    },
    {
      text: `**Improving Existing Text**

Select text and ask AI to:

• **Improve writing** - Better flow and clarity
• **Fix grammar** - Correct errors
• **Make shorter** - Condense content
• **Make longer** - Expand with details
• **Change tone** - Professional, casual, friendly
• **Simplify** - Easier to understand`,
      image: '🔧'
    },
    {
      text: `**Practice Exercise**

Try this in Notion:

1. Create a new page
2. Press Space and type: "Write a welcome email for new team members"
3. Review the result
4. Select it and click "Make more professional"
5. Compare the versions

See how AI iterates on content!`,
      image: '📋'
    }
  ],
  'notion-1-3': [
    {
      text: `**Summarization Power**

Notion AI excels at summarizing:

• **Meeting notes** - Key decisions and action items
• **Articles** - Main points and takeaways
• **Documents** - Executive summaries
• **Databases** - Insights from entries

Select content and choose "Summarize" from AI options.`,
      image: '📊'
    },
    {
      text: `**Summarization Options**

Different summary types:

• **TL;DR** - Ultra-brief summary
• **Key points** - Bullet list of main ideas
• **Action items** - Extract to-dos
• **Decisions** - What was decided
• **Custom** - Ask for specific focus`,
      image: '📝'
    },
    {
      text: `**Summarizing Long Documents**

For lengthy content:

1. Select all the text (Ctrl+A)
2. Click "Ask AI" in the menu
3. Choose "Summarize" or type custom request
4. AI processes and returns summary
5. Insert above, below, or replace`,
      image: '📚'
    },
    {
      text: `**Real-World Use Cases**

Summarization in action:

• **After meetings** - Summarize notes into action items
• **Research** - Condense articles into key findings
• **Reports** - Create executive summaries
• **Email threads** - Extract main points
• **Documentation** - Quick reference guides

Save hours of reading and writing!`,
      image: '⏱️'
    }
  ]
};

// ============================================
// DeepSeek Course - Beginner Level
// ============================================

export const deepseekBeginnerContent: Record<string, ContentPage[]> = {
  'deepseek-1-1': [
    {
      text: `**Introduction to DeepSeek**

DeepSeek is a powerful AI model that has gained attention for its strong reasoning and coding abilities. Developed in China, it offers capabilities that rival much larger models.

**Key strengths:**
• Excellent at complex reasoning
• Strong coding abilities
• Good at math and logic
• Open-source options available`,
      image: '🧠'
    },
    {
      text: `**What Makes DeepSeek Different**

DeepSeek stands out for:

• **Reasoning chains** - Shows step-by-step thinking
• **Code generation** - Writes and explains code well
• **Math solving** - Strong at mathematical problems
• **Efficiency** - Good performance for its size
• **Transparency** - Often explains its reasoning`,
      image: '💡'
    },
    {
      text: `**DeepSeek Models**

Available versions:

• **DeepSeek-V2** - General purpose, very capable
• **DeepSeek-Coder** - Specialized for programming
• **DeepSeek-Math** - Focused on mathematics

Each is optimized for different tasks.`,
      image: '📊'
    },
    {
      text: `**Accessing DeepSeek**

Ways to use DeepSeek:

• **chat.deepseek.com** - Official web interface
• **API** - For developers
• **Open-source** - Run locally (technical)
• **Third-party apps** - Various integrations

The web chat is the easiest way to start.`,
      image: '🌐'
    }
  ],
  'deepseek-1-2': [
    {
      text: `**Basic Prompting**

Communicate effectively with DeepSeek:

• **Be clear** - State your question directly
• **Provide context** - Background helps
• **Specify format** - How you want the answer
• **Ask for reasoning** - "Explain your thinking"`,
      image: '💬'
    },
    {
      text: `**Prompting for Reasoning**

DeepSeek excels when you ask it to think:

**Good prompts:**
• "Walk me through this step by step"
• "Explain your reasoning"
• "What are the pros and cons?"
• "How did you arrive at this answer?"

This leverages its reasoning strengths.`,
      image: '🤔'
    },
    {
      text: `**Coding with DeepSeek**

For programming help:

• **Describe the task** - What should the code do?
• **Specify language** - Python, JavaScript, etc.
• **Include constraints** - Performance, style
• **Ask for explanation** - Understand the code

Example: "Write a Python function to find prime numbers up to n. Explain how it works."`,
      image: '💻'
    },
    {
      text: `**Practice Prompts**

Try these with DeepSeek:

1. "Explain how a binary search algorithm works, step by step"

2. "What's 15% of 847? Show your calculation"

3. "Write a Python function to reverse a string without using built-in reverse"

4. "Compare REST and GraphQL APIs - pros and cons of each"`,
      image: '🎯'
    }
  ],
  'deepseek-1-3': [
    {
      text: `**Reasoning Tasks**

DeepSeek shines at complex reasoning:

• **Logic puzzles** - Deductive reasoning
• **Analysis** - Breaking down problems
• **Comparisons** - Evaluating options
• **Planning** - Step-by-step approaches
• **Debugging** - Finding errors in logic or code`,
      image: '🧩'
    },
    {
      text: `**Chain of Thought**

Ask DeepSeek to show its work:

"Let's solve this step by step..."

This technique:
• Improves accuracy
• Makes answers verifiable
• Helps you learn
• Catches errors early`,
      image: '🔗'
    },
    {
      text: `**Problem-Solving Framework**

Use this structure for complex problems:

1. **State the problem** clearly
2. **Ask for approach** - "How would you tackle this?"
3. **Request steps** - "Break this down"
4. **Verify reasoning** - "Check your logic"
5. **Iterate** - Refine based on results`,
      image: '📋'
    },
    {
      text: `**When to Use DeepSeek**

DeepSeek is ideal for:

✅ **Use for:**
• Complex reasoning problems
• Code generation and review
• Mathematical calculations
• Logical analysis
• Step-by-step explanations

Consider alternatives for:
• Creative writing
• Image generation
• Real-time information`,
      image: '⚖️'
    }
  ]
};

// ============================================
// Export all beginner content
// ============================================

export const allBeginnerContent: Record<string, ContentPage[]> = {
  ...dalleBeginnerContent,
  ...midjourneyBeginnerContent,
  ...claudeBeginnerContent,
  ...geminiBeginnerContent,
  ...perplexityBeginnerContent,
  ...copilotBeginnerContent,
  ...stableDiffusionBeginnerContent,
  ...notionBeginnerContent,
  ...deepseekBeginnerContent
};

// ============================================
// Beginner Quizzes
// ============================================

export const beginnerQuizzes: Record<string, QuizQuestion> = {
  'dalle-1-quiz': {
    question: 'What makes a good DALL-E prompt?',
    options: [
      'Using only one word',
      'Adding specific details about subject, style, and mood',
      'Writing in code',
      'Using emojis only'
    ],
    correctIndex: 1,
    explanation: 'Good DALL-E prompts include specific details about the subject, artistic style, lighting, and mood to get better, more targeted results.'
  },
  'mj-1-quiz': {
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
  'claude-1-quiz': {
    question: 'What is Claude particularly known for?',
    options: [
      'Image generation',
      'Being helpful, harmless, and honest',
      'Video editing',
      'Music composition'
    ],
    correctIndex: 1,
    explanation: 'Claude is designed by Anthropic with a focus on being helpful, harmless, and honest - emphasizing safety and thoughtful responses.'
  },
  'gemini-1-quiz': {
    question: 'What makes Gemini unique among AI models?',
    options: [
      'It only works offline',
      'It is multimodal - understanding text, images, and more',
      'It only generates images',
      'It requires special hardware'
    ],
    correctIndex: 1,
    explanation: 'Gemini is designed to be multimodal from the ground up, meaning it can understand and work with text, images, audio, and video seamlessly.'
  },
  'perplexity-1-quiz': {
    question: 'How is Perplexity different from traditional search engines?',
    options: [
      'It only searches social media',
      'It provides direct answers with cited sources instead of just links',
      'It requires a subscription to use',
      'It only works in English'
    ],
    correctIndex: 1,
    explanation: 'Unlike traditional search engines that return links, Perplexity reads web pages and provides synthesized answers with citations to the sources.'
  },
  'copilot-1-quiz': {
    question: 'What is the best way to get good suggestions from GitHub Copilot?',
    options: [
      'Write code without any comments',
      'Use vague variable names',
      'Write clear comments describing what you want',
      'Disable all extensions'
    ],
    correctIndex: 2,
    explanation: 'Writing clear comments that describe what you want helps Copilot understand your intent and generate more accurate code suggestions.'
  },
  'sd-1-quiz': {
    question: 'What is a key advantage of Stable Diffusion over other AI image generators?',
    options: [
      'It only works online',
      'It is open-source and can run locally for free',
      'It only generates text',
      'It requires a monthly subscription'
    ],
    correctIndex: 1,
    explanation: 'Stable Diffusion is open-source, meaning you can run it on your own computer for free with no usage limits or subscriptions required.'
  },
  'notion-1-quiz': {
    question: 'What is the fastest way to access Notion AI on an empty line?',
    options: [
      'Click a button in the menu',
      'Press the Space bar',
      'Right-click and select AI',
      'Press Ctrl+Shift+A'
    ],
    correctIndex: 1,
    explanation: 'Pressing the Space bar on an empty line in Notion is the quickest way to open the AI assistant and start generating content.'
  },
  'deepseek-1-quiz': {
    question: 'What is DeepSeek particularly strong at?',
    options: [
      'Only image generation',
      'Reasoning, coding, and mathematical tasks',
      'Only translation',
      'Only summarization'
    ],
    correctIndex: 1,
    explanation: 'DeepSeek excels at complex reasoning tasks, code generation, and mathematical problem-solving, often showing step-by-step thinking.'
  }
};
