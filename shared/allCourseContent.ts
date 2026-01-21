/**
 * Complete Course Content for All Modules
 * This file provides comprehensive content for testing all course interactions
 */

import { ContentPage, QuizQuestion } from './courseData';

// ============================================
// ChatGPT Course - Intermediate Level
// ============================================

export const chatgptIntermediateContent: Record<string, ContentPage[]> = {
  'chatgpt-2-1': [
    {
      text: `**Role-Based Prompting**

One of the most powerful techniques in ChatGPT is **role-based prompting**. This involves asking ChatGPT to adopt a specific persona or expertise.

For example: "Act as a senior software engineer and review this code."`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Why Roles Work**

When you assign a role, ChatGPT:

• **Adjusts its vocabulary** to match the expertise level
• **Focuses on relevant details** for that role
• **Provides more specialized** and accurate responses

Think of it like consulting with an expert in that field.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Common Roles to Try**

Here are some effective roles:

1. **Teacher** - For explanations and learning
2. **Editor** - For writing feedback
3. **Developer** - For code review
4. **Consultant** - For business advice
5. **Coach** - For motivation and guidance`,
      image: '/images/course/learning.jpg'
    }
  ],
  'chatgpt-2-2': [
    {
      text: `**Chain of Thought Prompting**

Chain of Thought (CoT) is a technique where you ask ChatGPT to **think step by step**.

This dramatically improves results for complex problems like math, logic, and analysis.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**How to Use CoT**

Simply add phrases like:

• "Let's think step by step"
• "Walk me through your reasoning"
• "Explain your thought process"
• "Break this down into steps"

This forces the model to show its work.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**When to Use Chain of Thought**

CoT is most effective for:

1. **Math problems** - Calculations and equations
2. **Logic puzzles** - Deductive reasoning
3. **Complex analysis** - Multi-factor decisions
4. **Debugging code** - Finding errors systematically`,
      image: '/images/course/practice.jpg'
    }
  ],
  'chatgpt-2-3': [
    {
      text: `**Few-Shot Learning**

Few-shot learning means giving ChatGPT **examples** of what you want before asking for output.

It's like showing someone a sample before asking them to create something similar.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Example Format**

Here's how to structure few-shot prompts:

**Example 1:**
Input: "The weather is nice"
Output: "Il fait beau"

**Example 2:**
Input: "I love pizza"
Output: "J'adore la pizza"

**Now translate:**
Input: "Hello world"`,
      image: '/images/course/success.jpg'
    },
    {
      text: `**Tips for Few-Shot Learning**

• Use **2-5 examples** for best results
• Keep examples **consistent** in format
• Choose **diverse examples** covering edge cases
• Make sure examples are **correct**`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'chatgpt-2-4': [
    {
      text: `**Context Management**

ChatGPT has a **context window** - a limit on how much text it can "remember" in a conversation.

Understanding this helps you have more effective long conversations.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Managing Long Conversations**

Tips for better context management:

• **Summarize periodically** - Ask ChatGPT to summarize key points
• **Reference earlier content** - "As we discussed earlier..."
• **Start fresh** when switching topics
• **Be explicit** about what information to retain`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Context Window Limits**

Different models have different limits:

• **GPT-3.5**: ~4,000 tokens
• **GPT-4**: ~8,000-32,000 tokens
• **GPT-4 Turbo**: ~128,000 tokens

A token is roughly 4 characters or 0.75 words.`,
      image: '/images/course/quiz.jpg'
    }
  ],
  'chatgpt-2-5': [
    {
      text: `**Writing with ChatGPT**

ChatGPT excels at various writing tasks:

• Blog posts and articles
• Emails and messages
• Creative stories
• Technical documentation
• Marketing copy`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Effective Writing Prompts**

For better writing output, specify:

1. **Tone** - Professional, casual, humorous
2. **Length** - Word count or paragraph count
3. **Audience** - Who will read this
4. **Purpose** - Inform, persuade, entertain
5. **Style** - Formal, conversational, technical`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Iterative Refinement**

Don't expect perfection on the first try:

• Ask for **revisions** with specific feedback
• Request **alternative versions**
• Have ChatGPT **expand** or **condense** sections
• Use it as a **starting point** for your own editing`,
      image: '/images/course/practice.jpg'
    }
  ]
};

// ============================================
// ChatGPT Course - Advanced Level
// ============================================

export const chatgptAdvancedContent: Record<string, ContentPage[]> = {
  'chatgpt-3-1': [
    {
      text: `**API Integration**

The ChatGPT API allows you to integrate AI capabilities into your own applications.

This opens up possibilities for automation, custom tools, and scalable solutions.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Getting Started with the API**

Basic steps:

1. **Create an OpenAI account**
2. **Generate an API key**
3. **Install the SDK** (Python, Node.js, etc.)
4. **Make your first API call**
5. **Handle responses** in your application`,
      image: '/images/course/success.jpg'
    },
    {
      text: `**API Best Practices**

• **Secure your API key** - Never expose it in client-side code
• **Implement rate limiting** - Respect API limits
• **Handle errors gracefully** - Plan for failures
• **Monitor usage** - Track costs and performance`,
      image: '/images/course/quiz.jpg'
    }
  ],
  'chatgpt-3-2': [
    {
      text: `**Custom Instructions**

Custom Instructions let you set **persistent preferences** that apply to all your conversations.

This saves time by not having to repeat context every time.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**What to Include**

In your custom instructions, consider:

• **Your profession** or expertise
• **Preferred response style**
• **Common use cases**
• **Output format preferences**
• **Things to avoid**`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Example Custom Instructions**

"I'm a software developer working with Python and JavaScript. I prefer concise code examples with comments. Always consider security best practices. Format code blocks properly."`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'chatgpt-3-3': [
    {
      text: `**Plugins & Tools**

ChatGPT can be extended with **plugins** that give it new capabilities:

• Web browsing
• Code execution
• Image generation
• Data analysis
• Third-party integrations`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Popular Plugin Categories**

• **Productivity** - Task management, calendars
• **Research** - Academic papers, data sources
• **Shopping** - Price comparison, reviews
• **Travel** - Flights, hotels, itineraries
• **Development** - Code analysis, documentation`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Using Plugins Effectively**

• **Enable only what you need** - Too many can confuse
• **Be specific** about which tool to use
• **Verify results** - Plugins can have errors
• **Combine capabilities** for complex tasks`,
      image: '/images/course/practice.jpg'
    }
  ],
  'chatgpt-3-4': [
    {
      text: `**Enterprise Use Cases**

ChatGPT is transforming business operations:

• **Customer support** - Automated responses
• **Content creation** - Marketing, documentation
• **Data analysis** - Reports, insights
• **Training** - Employee onboarding`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Implementation Considerations**

For enterprise deployment:

• **Data privacy** - Where is data processed?
• **Compliance** - Industry regulations
• **Integration** - Existing systems
• **Training** - Employee adoption
• **Governance** - Usage policies`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**ROI Measurement**

Track the impact of ChatGPT:

• **Time saved** per task
• **Quality improvements** in output
• **Customer satisfaction** scores
• **Employee productivity** metrics
• **Cost reduction** vs. alternatives`,
      image: '/images/course/quiz.jpg'
    }
  ]
};

// ============================================
// DALL-E Course - Intermediate & Advanced
// ============================================

export const dalleIntermediateContent: Record<string, ContentPage[]> = {
  'dalle-2-1': [
    {
      text: `**Style Modifiers**

Style modifiers are keywords that dramatically change how your image looks.

They're like filters, but much more powerful and specific.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Popular Style Keywords**

• **Art styles**: watercolor, oil painting, digital art
• **Photography**: portrait, landscape, macro
• **Lighting**: dramatic lighting, soft light, backlit
• **Mood**: moody, vibrant, ethereal
• **Era**: vintage, futuristic, retro`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Combining Styles**

You can combine multiple style modifiers:

"A cat in a garden, watercolor style, soft lighting, whimsical mood"

Experiment with different combinations!`,
      image: '/images/course/success.jpg'
    }
  ],
  'dalle-2-2': [
    {
      text: `**Composition Techniques**

Composition is how elements are arranged in your image.

Good composition makes images more visually appealing and professional.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Key Composition Terms**

• **Rule of thirds** - Subject off-center
• **Leading lines** - Guide the eye
• **Symmetry** - Balanced elements
• **Framing** - Natural borders
• **Negative space** - Empty areas`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Composition in Prompts**

Include composition in your prompts:

"A lighthouse on a cliff, rule of thirds composition, leading lines from the path, dramatic sky"`,
      image: '/images/course/practice.jpg'
    }
  ],
  'dalle-2-3': [
    {
      text: `**Lighting & Mood**

Lighting is one of the most powerful tools for creating atmosphere.

Different lighting creates completely different emotions.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Lighting Types**

• **Golden hour** - Warm, soft, romantic
• **Blue hour** - Cool, mysterious, calm
• **Dramatic lighting** - High contrast, intense
• **Soft diffused** - Even, gentle, flattering
• **Backlit** - Silhouettes, halos`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Mood Keywords**

• **Peaceful**: serene, tranquil, calm
• **Dramatic**: intense, powerful, bold
• **Mysterious**: enigmatic, shadowy, intriguing
• **Joyful**: bright, cheerful, vibrant
• **Melancholic**: somber, wistful, nostalgic`,
      image: '/images/course/learning.jpg'
    }
  ],
  'dalle-2-4': [
    {
      text: `**Image Editing**

DALL-E can edit existing images, not just create new ones.

This includes inpainting, outpainting, and variations.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Editing Capabilities**

• **Inpainting** - Replace parts of an image
• **Outpainting** - Extend beyond borders
• **Variations** - Create similar versions
• **Style transfer** - Apply new styles`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Best Practices for Editing**

• Start with a **high-quality base image**
• Be **specific** about what to change
• Use **masks** to isolate areas
• **Iterate** - Multiple edits often needed`,
      image: '/images/course/thinking.jpg'
    }
  ]
};

export const dalleAdvancedContent: Record<string, ContentPage[]> = {
  'dalle-3-1': [
    {
      text: `**Photorealistic Images**

Creating photorealistic images requires attention to detail and specific techniques.

The goal is images that look like real photographs.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Photorealism Keywords**

• **Technical**: 8K, high resolution, sharp focus
• **Camera**: DSLR, 85mm lens, shallow depth of field
• **Lighting**: natural light, studio lighting
• **Quality**: professional photography, award-winning`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Common Pitfalls**

Watch out for:

• **Uncanny valley** - Almost real but off
• **Inconsistent lighting** - Shadows don't match
• **Texture issues** - Skin, fabric, surfaces
• **Proportions** - Especially hands and faces`,
      image: '/images/course/quiz.jpg'
    }
  ],
  'dalle-3-2': [
    {
      text: `**Brand & Marketing**

DALL-E is a powerful tool for creating marketing visuals.

From social media to advertisements, AI can accelerate content creation.`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Marketing Applications**

• **Social media graphics**
• **Product mockups**
• **Blog illustrations**
• **Ad creatives**
• **Presentation visuals**`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Brand Consistency**

Tips for maintaining brand identity:

• Create a **style guide** for AI prompts
• Use **consistent color palettes**
• Develop **reusable prompt templates**
• **Document** what works for your brand`,
      image: '/images/course/practice.jpg'
    }
  ]
};

// ============================================
// Midjourney Course - All Levels
// ============================================

export const midjourneyContent: Record<string, ContentPage[]> = {
  'mj-1-4': [
    {
      text: `**Understanding Parameters**

Midjourney parameters let you fine-tune your generations.

They're added at the end of your prompt with -- syntax.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Essential Parameters**

• **--ar** - Aspect ratio (16:9, 1:1, 9:16)
• **--v** - Version number (5, 5.1, 5.2)
• **--q** - Quality (0.25, 0.5, 1, 2)
• **--s** - Stylize (0-1000)
• **--c** - Chaos (0-100)`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Parameter Examples**

"A mountain landscape --ar 16:9 --v 5.2 --s 500"

This creates a widescreen, highly stylized image using the latest version.`,
      image: '/images/course/learning.jpg'
    }
  ],
  'mj-2-1': [
    {
      text: `**Advanced Prompt Structure**

Intermediate Midjourney users learn to structure prompts strategically.

The order and grouping of words matters!`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Prompt Anatomy**

A well-structured prompt includes:

1. **Subject** - What is the main focus
2. **Environment** - Where is it
3. **Style** - How should it look
4. **Lighting** - What's the mood
5. **Parameters** - Technical settings`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Word Weighting**

Use :: to weight words:

"cat::2 dog::1" - Cat is twice as important

"fantasy::3 realistic::-1" - More fantasy, less realistic`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'mj-2-2': [
    {
      text: `**Image Prompting**

You can use images as part of your prompt!

This is powerful for style transfer and consistency.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**How to Use Image Prompts**

1. Upload an image to Discord
2. Copy the image URL
3. Paste URL at the start of your prompt
4. Add text description after

"[image URL] in the style of this image, a forest scene"`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Image Weight**

Control image influence with --iw:

• **--iw 0.5** - Less influence
• **--iw 1** - Default
• **--iw 2** - More influence

Higher values = more similar to reference.`,
      image: '/images/course/practice.jpg'
    }
  ],
  'mj-2-3': [
    {
      text: `**Consistent Characters**

Creating the same character across multiple images is challenging but possible.

This is crucial for storytelling and branding.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Techniques for Consistency**

• **Detailed descriptions** - Be very specific
• **Reference images** - Use your own generations
• **Seed values** - --seed for reproducibility
• **Style references** - --sref for style consistency`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Character Sheet Approach**

Create a character reference sheet first:

"Character sheet, multiple angles, front view, side view, 3/4 view, consistent lighting"

Then use this as a reference for future generations.`,
      image: '/images/course/learning.jpg'
    }
  ],
  'mj-2-4': [
    {
      text: `**Remix Mode**

Remix mode lets you modify prompts while keeping some elements.

It's like having a conversation with your image.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Using Remix**

1. Enable with /settings → Remix Mode
2. Generate an image
3. Click variation buttons (V1-V4)
4. Modify the prompt in the popup
5. Generate with changes`,
      image: '/images/course/success.jpg'
    },
    {
      text: `**Remix Best Practices**

• **Small changes** work best
• Keep the **core subject** the same
• Change **style, lighting, or mood**
• Useful for **iterative refinement**`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'mj-3-1': [
    {
      text: `**Professional Workflows**

Advanced users develop systematic approaches to Midjourney.

This ensures quality and efficiency at scale.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Workflow Components**

• **Prompt libraries** - Tested, effective prompts
• **Style guides** - Consistent aesthetics
• **Batch processing** - Multiple generations
• **Quality control** - Selection criteria
• **Post-processing** - Editing and refinement`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Organization Tips**

• Create **Discord servers** for different projects
• Use **threads** to organize generations
• **Tag and categorize** your best work
• Build a **reference library** of successful prompts`,
      image: '/images/course/quiz.jpg'
    }
  ],
  'mj-3-2': [
    {
      text: `**Commercial Applications**

Midjourney is increasingly used for professional work.

Understanding commercial use is essential for professionals.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Commercial Use Cases**

• **Book covers** and illustrations
• **Marketing materials**
• **Concept art** for games/film
• **Product visualization**
• **Social media content**`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Legal Considerations**

• Review **Midjourney's terms of service**
• Understand **copyright implications**
• Be aware of **style mimicry** concerns
• Consider **disclosure** requirements`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'mj-3-3': [
    {
      text: `**Style Fusion**

Advanced users combine multiple styles for unique results.

This creates distinctive, original aesthetics.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Fusion Techniques**

• **Artist combinations** - "Style of X and Y"
• **Era mixing** - "Victorian cyberpunk"
• **Medium blending** - "Oil painting meets digital"
• **Cultural fusion** - "Japanese Art Nouveau"`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Experimentation**

The best fusions come from experimentation:

• Try **unexpected combinations**
• Use **weight balancing** (::)
• **Document** what works
• Build your **signature style**`,
      image: '/images/course/thinking.jpg'
    }
  ]
};

// ============================================
// Claude Course - All Levels
// ============================================

export const claudeContent: Record<string, ContentPage[]> = {
  'claude-2-1': [
    {
      text: `**Long-Form Content**

Claude excels at handling long documents and creating extended content.

Its large context window makes it ideal for complex projects.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Long-Form Capabilities**

• **Document analysis** - Summarize lengthy reports
• **Book writing** - Maintain consistency across chapters
• **Research synthesis** - Combine multiple sources
• **Technical documentation** - Comprehensive guides`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Tips for Long Content**

• **Structure your request** clearly
• **Break into sections** if needed
• **Provide context** about the whole project
• **Review incrementally** rather than all at once`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'claude-2-2': [
    {
      text: `**Analysis & Reasoning**

Claude is particularly strong at analytical tasks.

It can break down complex problems and provide structured insights.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Analysis Types**

• **SWOT analysis** - Strengths, weaknesses, opportunities, threats
• **Comparative analysis** - Side-by-side evaluation
• **Root cause analysis** - Finding underlying issues
• **Risk assessment** - Identifying potential problems`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Getting Better Analysis**

• Ask for **structured output** (tables, lists)
• Request **multiple perspectives**
• Ask Claude to **consider counterarguments**
• Have it **rate confidence levels**`,
      image: '/images/course/practice.jpg'
    }
  ],
  'claude-2-3': [
    {
      text: `**Working with Code**

Claude is an excellent coding assistant.

It can write, review, explain, and debug code across many languages.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Code Capabilities**

• **Writing code** from descriptions
• **Explaining code** line by line
• **Debugging** - Finding and fixing errors
• **Refactoring** - Improving code quality
• **Documentation** - Adding comments and docs`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Best Practices**

• **Specify the language** clearly
• **Provide context** about your project
• **Include error messages** when debugging
• **Ask for explanations** to learn`,
      image: '/images/course/quiz.jpg'
    }
  ],
  'claude-3-1': [
    {
      text: `**Advanced Prompting**

Expert Claude users develop sophisticated prompting strategies.

These techniques unlock Claude's full potential.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Advanced Techniques**

• **System prompts** - Set persistent behavior
• **XML tags** - Structure complex inputs
• **Chain prompting** - Multi-step reasoning
• **Persona assignment** - Specialized expertise`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**XML Tag Example**

<document>
Your content here
</document>

<instructions>
Analyze the document above and provide...
</instructions>

This helps Claude understand structure.`,
      image: '/images/course/learning.jpg'
    }
  ],
  'claude-3-2': [
    {
      text: `**Enterprise Integration**

Claude can be integrated into business workflows and applications.

This enables scalable AI-powered solutions.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Integration Options**

• **API access** - Direct integration
• **Slack/Teams bots** - Workplace assistants
• **Custom applications** - Tailored solutions
• **Workflow automation** - Process optimization`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Implementation Considerations**

• **Data privacy** - Anthropic's policies
• **Rate limits** - API constraints
• **Cost management** - Token usage
• **Error handling** - Graceful failures`,
      image: '/images/course/quiz.jpg'
    }
  ]
};

// ============================================
// Gemini Course - All Levels
// ============================================

export const geminiContent: Record<string, ContentPage[]> = {
  'gemini-2-1': [
    {
      text: `**Multimodal Mastery**

Gemini's multimodal capabilities let you work with text, images, and code together.

This opens up unique possibilities for complex tasks.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Multimodal Use Cases**

• **Image analysis** - Describe and analyze photos
• **Document processing** - Extract info from scans
• **Code + visuals** - Explain diagrams
• **Creative projects** - Combine media types`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Tips for Multimodal**

• **Be specific** about what to analyze
• **Combine modalities** strategically
• **Verify outputs** - AI can misinterpret
• **Iterate** on complex tasks`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'gemini-2-2': [
    {
      text: `**Google Workspace Integration**

Gemini integrates deeply with Google's productivity tools.

This makes it powerful for everyday work tasks.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Workspace Features**

• **Gmail** - Draft and summarize emails
• **Docs** - Write and edit documents
• **Sheets** - Analyze and visualize data
• **Slides** - Create presentations
• **Meet** - Transcribe and summarize`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Productivity Tips**

• Use **@gemini** in Docs for quick help
• **Summarize** long email threads
• **Generate** first drafts quickly
• **Analyze** spreadsheet data naturally`,
      image: '/images/course/success.jpg'
    }
  ],
  'gemini-2-3': [
    {
      text: `**Advanced Research**

Gemini excels at research tasks with its broad knowledge and reasoning.

It can help synthesize information from multiple sources.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Research Capabilities**

• **Literature review** - Summarize research
• **Fact-checking** - Verify claims
• **Comparative analysis** - Evaluate options
• **Trend identification** - Spot patterns`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Research Best Practices**

• **Cross-reference** important facts
• **Ask for sources** when possible
• **Break complex topics** into parts
• **Verify** critical information independently`,
      image: '/images/course/success.jpg'
    }
  ]
};

// ============================================
// Perplexity Course - All Levels
// ============================================

export const perplexityContent: Record<string, ContentPage[]> = {
  'perplexity-1-3': [
    {
      text: `**Understanding Sources**

Perplexity's strength is providing answers with citations.

Learning to evaluate sources is key to using it effectively.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Source Evaluation**

Look for:

• **Credibility** - Is the source reputable?
• **Recency** - Is the information current?
• **Relevance** - Does it answer your question?
• **Consistency** - Do multiple sources agree?`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Using Citations**

• **Click through** to original sources
• **Verify** important claims
• **Note** when sources disagree
• **Consider** the source's perspective`,
      image: '/images/course/success.jpg'
    }
  ],
  'perplexity-2-1': [
    {
      text: `**Advanced Search Techniques**

Power users leverage Perplexity's advanced features for better results.

These techniques help you find exactly what you need.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Search Strategies**

• **Focus modes** - Academic, writing, etc.
• **Follow-up questions** - Dig deeper
• **Specific domains** - Limit to certain sites
• **Time filters** - Recent information only`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Pro Tips**

• Start **broad**, then narrow down
• Use **follow-ups** to clarify
• **Compare** different focus modes
• **Save** useful threads for reference`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'perplexity-2-2': [
    {
      text: `**Research Workflows**

Perplexity can be the center of your research process.

Building effective workflows maximizes its value.`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Workflow Steps**

1. **Initial query** - Broad overview
2. **Follow-ups** - Specific details
3. **Source review** - Verify key points
4. **Synthesis** - Combine findings
5. **Documentation** - Save and organize`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Organization Tips**

• Create **collections** for projects
• **Tag** important threads
• **Export** findings regularly
• Build a **knowledge base** over time`,
      image: '/images/course/quiz.jpg'
    }
  ],
  'perplexity-2-3': [
    {
      text: `**Perplexity Pro Features**

Perplexity Pro unlocks advanced capabilities for power users.

Understanding these features helps you decide if it's worth it.`,
      image: '/images/course/success.jpg'
    },
    {
      text: `**Pro Capabilities**

• **Unlimited** Pro searches
• **File upload** for analysis
• **GPT-4** and Claude access
• **Longer** context windows
• **API** access`,
      image: '/images/course/success.jpg'
    },
    {
      text: `**When to Upgrade**

Consider Pro if you:

• Do **frequent research**
• Need **document analysis**
• Want **multiple AI models**
• Require **API integration**`,
      image: '/images/course/thinking.jpg'
    }
  ]
};

// ============================================
// Copilot Course - All Levels
// ============================================

export const copilotContent: Record<string, ContentPage[]> = {
  'copilot-1-1': [
    {
      text: `**Introduction to GitHub Copilot**

GitHub Copilot is an AI pair programmer that helps you write code faster.

It suggests code as you type, like autocomplete on steroids.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**How Copilot Works**

• **Analyzes context** - Your code and comments
• **Predicts intent** - What you're trying to do
• **Suggests code** - Complete lines or functions
• **Learns patterns** - From your codebase`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Getting Started**

1. **Install** the extension in your IDE
2. **Sign in** with GitHub
3. **Start coding** - Suggestions appear automatically
4. **Accept** with Tab or modify as needed`,
      image: '/images/course/success.jpg'
    }
  ],
  'copilot-1-2': [
    {
      text: `**Writing Effective Comments**

Comments are the key to getting good Copilot suggestions.

Think of comments as prompts for your AI assistant.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Comment Best Practices**

• **Be specific** about what you want
• **Include types** and parameters
• **Describe edge cases**
• **Mention libraries** to use`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Example Comments**

// Function to validate email address
// Returns true if valid, false otherwise
// Should handle common edge cases

This gives Copilot clear direction.`,
      image: '/images/course/success.jpg'
    }
  ],
  'copilot-1-3': [
    {
      text: `**Understanding Suggestions**

Not all Copilot suggestions are equal.

Learning to evaluate and modify suggestions is crucial.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Evaluating Suggestions**

Ask yourself:

• Is the **logic correct**?
• Does it handle **edge cases**?
• Is it **efficient**?
• Does it follow **best practices**?
• Is it **secure**?`,
      image: '/images/course/success.jpg'
    },
    {
      text: `**Modifying Suggestions**

• **Accept partially** - Take what's useful
• **Iterate** - Let it suggest again
• **Combine** - Mix suggestions with your code
• **Refine** - Edit after accepting`,
      image: '/images/course/practice.jpg'
    }
  ],
  'copilot-1-4': [
    {
      text: `**Keyboard Shortcuts**

Mastering shortcuts makes Copilot much more efficient.

These are essential for a smooth workflow.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Essential Shortcuts**

• **Tab** - Accept suggestion
• **Esc** - Dismiss suggestion
• **Alt+]** - Next suggestion
• **Alt+[** - Previous suggestion
• **Ctrl+Enter** - Open Copilot panel`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Workflow Tips**

• Keep **hands on keyboard**
• **Cycle through** suggestions quickly
• Use **panel** for complex tasks
• **Dismiss** bad suggestions fast`,
      image: '/images/course/success.jpg'
    }
  ],
  'copilot-2-1': [
    {
      text: `**Multi-File Context**

Copilot can understand context across multiple files.

This makes it powerful for larger projects.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Context Sources**

Copilot considers:

• **Open files** in your editor
• **Imported modules**
• **Project structure**
• **Related files** by name`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Maximizing Context**

• Keep **related files open**
• Use **consistent naming**
• **Import** modules you want to use
• **Reference** existing code in comments`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'copilot-2-2': [
    {
      text: `**Test Generation**

Copilot excels at generating test code.

This can dramatically speed up your testing workflow.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Test Generation Tips**

• Write a **test description** first
• **Import** your testing framework
• **Reference** the function to test
• Ask for **edge cases** explicitly`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Example Workflow**

// Test the validateEmail function
// Should return true for valid emails
// Should return false for invalid formats
// Should handle empty strings

Copilot will generate comprehensive tests.`,
      image: '/images/course/success.jpg'
    }
  ],
  'copilot-2-3': [
    {
      text: `**Documentation Generation**

Copilot can help write documentation as you code.

Good docs are essential for maintainable code.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Documentation Types**

• **Function docs** - Parameters, returns
• **Class docs** - Purpose, usage
• **README** - Project overview
• **Inline comments** - Complex logic`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Doc Generation Tips**

• Start with **doc comment syntax** (/** */)
• **Describe the purpose** first
• Let Copilot fill in **parameters**
• **Review** for accuracy`,
      image: '/images/course/success.jpg'
    }
  ],
  'copilot-2-4': [
    {
      text: `**Refactoring with Copilot**

Copilot can help you improve existing code.

Use it as a refactoring assistant.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Refactoring Approaches**

• **Comment your intent** - "Refactor to use async/await"
• **Show the pattern** - Write one example
• **Ask for alternatives** - Multiple suggestions
• **Incremental changes** - Small steps`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Common Refactors**

• **Extract functions** - Break up large code
• **Simplify logic** - Reduce complexity
• **Update patterns** - Modern syntax
• **Improve naming** - Clearer variables`,
      image: '/images/course/success.jpg'
    }
  ],
  'copilot-3-1': [
    {
      text: `**Copilot Chat**

Copilot Chat brings conversational AI to your IDE.

Ask questions, get explanations, and solve problems.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Chat Capabilities**

• **Explain code** - "What does this do?"
• **Fix errors** - "Why is this failing?"
• **Suggest improvements** - "How can I optimize?"
• **Generate code** - "Write a function that..."`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Chat Best Practices**

• **Select code** before asking
• Be **specific** in questions
• **Follow up** for clarification
• Use **slash commands** for common tasks`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'copilot-3-2': [
    {
      text: `**Enterprise Features**

Copilot for Business adds enterprise-grade features.

These are essential for team and organizational use.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Enterprise Capabilities**

• **Organization management** - Central control
• **Policy settings** - Usage rules
• **Audit logs** - Track usage
• **SSO integration** - Enterprise auth
• **IP protection** - Code privacy`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Implementation Tips**

• Define **usage policies** clearly
• **Train teams** on best practices
• **Monitor** adoption and impact
• **Gather feedback** for optimization`,
      image: '/images/course/quiz.jpg'
    }
  ]
};

// ============================================
// Stable Diffusion Course - All Levels
// ============================================

export const stableDiffusionContent: Record<string, ContentPage[]> = {
  'sd-1-1': [
    {
      text: `**Introduction to Stable Diffusion**

Stable Diffusion is an open-source AI image generator.

Unlike cloud services, you can run it on your own computer.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Key Advantages**

• **Free to use** - No subscription
• **Run locally** - Privacy and control
• **Highly customizable** - Models and settings
• **No content restrictions** - Your rules
• **Community models** - Thousands available`,
      image: '/images/course/success.jpg'
    },
    {
      text: `**Requirements**

• **GPU** - NVIDIA with 4GB+ VRAM recommended
• **RAM** - 16GB+ for smooth operation
• **Storage** - Models can be 2-7GB each
• **Software** - Various UIs available`,
      image: '/images/course/practice.jpg'
    }
  ],
  'sd-1-2': [
    {
      text: `**Setting Up Your Environment**

There are several ways to run Stable Diffusion locally.

The most popular is Automatic1111's WebUI.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Popular Interfaces**

• **Automatic1111** - Feature-rich, most popular
• **ComfyUI** - Node-based, powerful
• **InvokeAI** - User-friendly
• **Fooocus** - Simple, Midjourney-like`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Installation Steps**

1. **Install Python** (3.10 recommended)
2. **Clone the repository**
3. **Run the installer**
4. **Download a model**
5. **Launch the WebUI**`,
      image: '/images/course/success.jpg'
    }
  ],
  'sd-1-3': [
    {
      text: `**Your First Generation**

Let's create your first image with Stable Diffusion.

Start simple and build from there.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Basic Prompt Structure**

A good prompt includes:

• **Subject** - What you want to see
• **Style** - How it should look
• **Quality tags** - masterpiece, best quality
• **Details** - Specific elements`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Example First Prompt**

"A cute cat sitting on a windowsill, soft lighting, detailed fur, masterpiece, best quality"

Start with something simple to learn the basics.`,
      image: '/images/course/learning.jpg'
    }
  ],
  'sd-1-4': [
    {
      text: `**Understanding Settings**

Stable Diffusion has many settings that affect output.

Learning these gives you more control.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Key Settings**

• **Steps** - More = better quality, slower
• **CFG Scale** - How closely to follow prompt
• **Sampler** - Algorithm for generation
• **Seed** - For reproducibility
• **Size** - Image dimensions`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Recommended Starting Values**

• **Steps**: 20-30
• **CFG Scale**: 7
• **Sampler**: DPM++ 2M Karras
• **Size**: 512x512 or 768x768`,
      image: '/images/course/quiz.jpg'
    }
  ],
  'sd-2-1': [
    {
      text: `**Negative Prompts**

Negative prompts tell SD what to avoid.

They're crucial for quality results.`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Common Negative Prompts**

• **Quality**: blurry, low quality, worst quality
• **Anatomy**: bad hands, extra fingers, deformed
• **Style**: cartoon, anime (if unwanted)
• **Artifacts**: watermark, text, signature`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Building Your Negative**

Start with a base negative prompt and customize:

"(worst quality:1.4), (low quality:1.4), blurry, bad anatomy, bad hands, extra fingers, watermark"`,
      image: '/images/course/success.jpg'
    }
  ],
  'sd-2-2': [
    {
      text: `**Custom Models**

The SD community creates specialized models.

These can dramatically change your results.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Model Types**

• **Checkpoints** - Complete models
• **LoRAs** - Small style/subject additions
• **Embeddings** - Trained concepts
• **VAEs** - Color/detail improvements`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Finding Models**

• **Civitai** - Largest model repository
• **Hugging Face** - Official models
• **Reddit** - Community recommendations

Always check model licenses before use.`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'sd-2-3': [
    {
      text: `**LoRA Training Basics**

LoRAs let you train custom styles and subjects.

This is powerful for consistent characters or styles.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**LoRA Concepts**

• **Training data** - 10-20 quality images
• **Captions** - Describe each image
• **Steps** - Training iterations
• **Strength** - How much to apply`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Training Tips**

• Use **consistent quality** images
• **Caption accurately**
• Start with **lower steps**
• **Test** at different strengths`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'sd-2-4': [
    {
      text: `**ControlNet**

ControlNet gives you precise control over composition.

Use reference images to guide generation.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**ControlNet Types**

• **Canny** - Edge detection
• **Depth** - 3D depth maps
• **Pose** - Human poses
• **Scribble** - Rough sketches
• **Tile** - Upscaling/detail`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Using ControlNet**

1. **Choose a preprocessor**
2. **Upload reference image**
3. **Adjust strength**
4. **Generate with your prompt**`,
      image: '/images/course/practice.jpg'
    }
  ],
  'sd-3-1': [
    {
      text: `**Advanced Workflows**

Power users combine multiple techniques.

This creates professional-quality results.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Workflow Components**

• **Txt2img** - Initial generation
• **Img2img** - Refinement
• **Inpainting** - Fix specific areas
• **Upscaling** - Increase resolution
• **Post-processing** - Final touches`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Example Workflow**

1. Generate base image
2. Img2img for refinement
3. Inpaint problem areas
4. Upscale 2-4x
5. Final color correction`,
      image: '/images/course/success.jpg'
    }
  ],
  'sd-3-2': [
    {
      text: `**ComfyUI Mastery**

ComfyUI offers node-based workflows.

It's more complex but incredibly powerful.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**ComfyUI Advantages**

• **Visual workflows** - See the process
• **Reusable nodes** - Save and share
• **Advanced control** - Fine-grained settings
• **Batch processing** - Automate tasks`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Getting Started**

• **Learn basic nodes** first
• **Copy existing workflows**
• **Modify incrementally**
• **Build your library**`,
      image: '/images/course/success.jpg'
    }
  ],
  'sd-3-3': [
    {
      text: `**Production Workflows**

For professional use, efficiency matters.

Build systems that scale.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Production Considerations**

• **Batch generation** - Multiple images
• **Quality control** - Consistent output
• **Asset management** - Organize results
• **Version control** - Track settings`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Optimization Tips**

• **Template prompts** - Reusable bases
• **Preset settings** - Saved configurations
• **Automated workflows** - Scripts and batches
• **Cloud options** - Scale when needed`,
      image: '/images/course/success.jpg'
    }
  ]
};

// ============================================
// Notion AI Course - All Levels
// ============================================

export const notionContent: Record<string, ContentPage[]> = {
  'notion-1-1': [
    {
      text: `**Introduction to Notion AI**

Notion AI brings artificial intelligence to your workspace.

It helps you write, summarize, and organize faster.`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Key Features**

• **Writing assistance** - Draft and edit
• **Summarization** - Condense long content
• **Translation** - Multiple languages
• **Brainstorming** - Generate ideas
• **Extraction** - Pull key information`,
      image: '/images/course/success.jpg'
    },
    {
      text: `**Accessing Notion AI**

• **Space bar** on empty line
• **Highlight text** and ask AI
• **Slash command** /ai
• **AI block** in any page`,
      image: '/images/course/success.jpg'
    }
  ],
  'notion-1-2': [
    {
      text: `**Writing with Notion AI**

Notion AI can help at every stage of writing.

From first draft to final polish.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Writing Capabilities**

• **Draft** - Start from scratch
• **Continue** - Extend existing text
• **Improve** - Enhance writing
• **Fix** - Grammar and spelling
• **Simplify** - Make clearer`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Writing Tips**

• **Be specific** about tone and style
• **Provide context** for better results
• **Iterate** - Multiple passes
• **Edit** - AI is a starting point`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'notion-1-3': [
    {
      text: `**Summarization Features**

Notion AI excels at condensing information.

Turn long documents into actionable summaries.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Summary Types**

• **Key points** - Main takeaways
• **Action items** - Tasks to do
• **Meeting notes** - Discussion summary
• **TLDR** - Quick overview`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Best Practices**

• **Select relevant text** only
• **Specify format** you want
• **Review** for accuracy
• **Add context** if needed`,
      image: '/images/course/success.jpg'
    }
  ],
  'notion-2-1': [
    {
      text: `**Database Integration**

Notion AI works with your databases.

Automate data entry and analysis.`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Database Features**

• **Auto-fill properties** - AI suggestions
• **Generate content** - From templates
• **Summarize entries** - Quick overviews
• **Extract data** - From text to fields`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Use Cases**

• **CRM** - Customer summaries
• **Projects** - Status updates
• **Content** - Draft generation
• **Research** - Note synthesis`,
      image: '/images/course/learning.jpg'
    }
  ],
  'notion-2-2': [
    {
      text: `**Templates with AI**

Create smart templates that use AI.

Automate repetitive content creation.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Template Ideas**

• **Meeting notes** - Auto-summary
• **Project briefs** - AI-assisted drafts
• **Weekly reviews** - Generated insights
• **Content calendars** - Topic suggestions`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Building AI Templates**

• **Include AI blocks** in templates
• **Set up prompts** for common tasks
• **Add instructions** for users
• **Test and refine** over time`,
      image: '/images/course/practice.jpg'
    }
  ],
  'notion-2-3': [
    {
      text: `**Team Workflows**

Notion AI can enhance team collaboration.

Shared AI capabilities for everyone.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Team Use Cases**

• **Shared prompts** - Consistent output
• **Knowledge base** - AI-powered search
• **Documentation** - Auto-generated
• **Onboarding** - AI assistance`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Implementation Tips**

• **Train the team** on AI features
• **Create guidelines** for use
• **Share successful prompts**
• **Gather feedback** for improvement`,
      image: '/images/course/quiz.jpg'
    }
  ]
};

// ============================================
// DeepSeek Course - All Levels
// ============================================

export const deepseekContent: Record<string, ContentPage[]> = {
  'deepseek-1-1': [
    {
      text: `**Introduction to DeepSeek**

DeepSeek is a powerful AI model known for its reasoning capabilities.

It excels at complex problem-solving and analysis.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Key Strengths**

• **Reasoning** - Step-by-step thinking
• **Coding** - Strong programming abilities
• **Math** - Complex calculations
• **Analysis** - Deep understanding
• **Cost-effective** - Competitive pricing`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Getting Started**

• Access via **API** or **chat interface**
• Similar to other **chat-based AI**
• Strong at **technical tasks**
• Good for **detailed explanations**`,
      image: '/images/course/success.jpg'
    }
  ],
  'deepseek-1-2': [
    {
      text: `**DeepSeek for Coding**

DeepSeek is particularly strong at coding tasks.

It can write, explain, and debug code effectively.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Coding Capabilities**

• **Code generation** - From descriptions
• **Bug fixing** - Find and fix errors
• **Explanation** - Line-by-line breakdown
• **Optimization** - Improve performance
• **Documentation** - Add comments`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Tips for Code Tasks**

• **Specify language** clearly
• **Provide context** about your project
• **Include error messages** for debugging
• **Ask for explanations** to learn`,
      image: '/images/course/quiz.jpg'
    }
  ],
  'deepseek-1-3': [
    {
      text: `**Reasoning with DeepSeek**

DeepSeek's reasoning capabilities set it apart.

It can break down complex problems systematically.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Reasoning Features**

• **Chain of thought** - Step-by-step
• **Multi-step problems** - Complex solutions
• **Logical analysis** - Clear reasoning
• **Math problems** - Detailed solutions`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**Best Practices**

• Ask it to **think step by step**
• Request **explanations** of reasoning
• **Verify** complex calculations
• Use for **learning** and understanding`,
      image: '/images/course/success.jpg'
    }
  ],
  'deepseek-2-1': [
    {
      text: `**Advanced Prompting**

Get more from DeepSeek with advanced techniques.

These strategies unlock its full potential.`,
      image: '/images/course/learning.jpg'
    },
    {
      text: `**Advanced Techniques**

• **System prompts** - Set behavior
• **Few-shot examples** - Show what you want
• **Structured output** - JSON, tables
• **Role assignment** - Expert personas`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**Prompt Engineering**

• **Be specific** about requirements
• **Provide context** and constraints
• **Request format** explicitly
• **Iterate** on prompts`,
      image: '/images/course/thinking.jpg'
    }
  ],
  'deepseek-2-2': [
    {
      text: `**API Integration**

DeepSeek offers API access for developers.

Build AI-powered applications with ease.`,
      image: '/images/course/practice.jpg'
    },
    {
      text: `**API Features**

• **Chat completions** - Conversational AI
• **Function calling** - Tool use
• **Streaming** - Real-time responses
• **Batch processing** - Multiple requests`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**Integration Tips**

• **Secure your API key**
• **Handle errors** gracefully
• **Monitor usage** and costs
• **Cache responses** when appropriate`,
      image: '/images/course/quiz.jpg'
    }
  ],
  'deepseek-2-3': [
    {
      text: `**Comparing AI Models**

Understanding how DeepSeek compares helps you choose the right tool.

Different models excel at different tasks.`,
      image: '/images/course/thinking.jpg'
    },
    {
      text: `**DeepSeek vs Others**

• **Reasoning** - Often stronger
• **Coding** - Competitive
• **Cost** - Generally lower
• **Speed** - Varies by task
• **Context** - Good window size`,
      image: '/images/course/quiz.jpg'
    },
    {
      text: `**When to Use DeepSeek**

• **Complex reasoning** tasks
• **Technical problems**
• **Cost-sensitive** applications
• **Detailed explanations** needed`,
      image: '/images/course/practice.jpg'
    }
  ]
};

// ============================================
// Quiz Content for All Courses
// ============================================

export const allQuizzes: Record<string, QuizQuestion> = {
  // ChatGPT Quizzes
  'chatgpt-2-quiz': {
    question: 'What is the main benefit of role-based prompting?',
    options: [
      'It makes responses shorter',
      'It helps ChatGPT adopt specialized expertise',
      'It reduces API costs',
      'It speeds up response time'
    ],
    correctIndex: 1,
    explanation: 'Role-based prompting helps ChatGPT adopt a specific persona or expertise, leading to more specialized and accurate responses.'
  },
  'chatgpt-3-quiz': {
    question: 'What should you NEVER do with your API key?',
    options: [
      'Use it in server-side code',
      'Store it in environment variables',
      'Expose it in client-side code',
      'Rotate it periodically'
    ],
    correctIndex: 2,
    explanation: 'API keys should never be exposed in client-side code as they can be easily stolen and misused.'
  },
  
  // DALL-E Quizzes
  'dalle-1-quiz': {
    question: 'What is the best way to describe an image you want?',
    options: [
      'Use single words only',
      'Be vague and let AI decide',
      'Include subject, style, and mood details',
      'Write as little as possible'
    ],
    correctIndex: 2,
    explanation: 'Including subject, style, and mood details gives DALL-E clear direction for generating the image you want.'
  },
  'dalle-2-quiz': {
    question: 'What does "golden hour" lighting create?',
    options: [
      'Cool, blue tones',
      'Warm, soft, romantic atmosphere',
      'High contrast shadows',
      'Flat, even lighting'
    ],
    correctIndex: 1,
    explanation: 'Golden hour lighting creates warm, soft, romantic atmosphere - it\'s the light just after sunrise or before sunset.'
  },
  'dalle-3-quiz': {
    question: 'What is important for photorealistic images?',
    options: [
      'Using cartoon style keywords',
      'Avoiding any technical terms',
      'Including camera and lighting details',
      'Making prompts as short as possible'
    ],
    correctIndex: 2,
    explanation: 'For photorealistic images, including camera details (lens, settings) and lighting specifications helps achieve realistic results.'
  },
  
  // Midjourney Quizzes
  'mj-1-quiz': {
    question: 'What parameter controls aspect ratio in Midjourney?',
    options: [
      '--size',
      '--ar',
      '--ratio',
      '--dim'
    ],
    correctIndex: 1,
    explanation: 'The --ar parameter controls aspect ratio in Midjourney. For example, --ar 16:9 creates a widescreen image.'
  },
  'mj-2-quiz': {
    question: 'What does the :: syntax do in Midjourney?',
    options: [
      'Adds a comment',
      'Weights words differently',
      'Changes the version',
      'Adds negative prompts'
    ],
    correctIndex: 1,
    explanation: 'The :: syntax allows you to weight words differently. For example, "cat::2 dog::1" makes cat twice as important.'
  },
  'mj-3-quiz': {
    question: 'What is the best approach for consistent characters?',
    options: [
      'Use random seeds',
      'Change descriptions each time',
      'Use reference images and detailed descriptions',
      'Avoid using parameters'
    ],
    correctIndex: 2,
    explanation: 'Using reference images and detailed, consistent descriptions helps maintain character consistency across generations.'
  },
  
  // Claude Quizzes
  'claude-1-quiz': {
    question: 'What is Claude particularly good at?',
    options: [
      'Only image generation',
      'Writing, analysis, and long-form content',
      'Only code generation',
      'Only translation'
    ],
    correctIndex: 1,
    explanation: 'Claude excels at writing, analysis, and handling long-form content thanks to its large context window.'
  },
  'claude-2-quiz': {
    question: 'What helps Claude understand complex inputs?',
    options: [
      'Using emojis',
      'Writing in all caps',
      'Using XML tags for structure',
      'Keeping everything on one line'
    ],
    correctIndex: 2,
    explanation: 'XML tags help Claude understand the structure of complex inputs, making it easier to process and respond appropriately.'
  },
  'claude-3-quiz': {
    question: 'What should you consider for enterprise Claude integration?',
    options: [
      'Only the cost',
      'Data privacy, compliance, and governance',
      'Only the speed',
      'Only the features'
    ],
    correctIndex: 1,
    explanation: 'Enterprise integration requires considering data privacy, compliance with regulations, and governance policies.'
  },
  
  // Gemini Quizzes
  'gemini-1-quiz': {
    question: 'What makes Gemini unique?',
    options: [
      'It only works with text',
      'It has multimodal capabilities',
      'It cannot generate code',
      'It only works offline'
    ],
    correctIndex: 1,
    explanation: 'Gemini\'s multimodal capabilities allow it to work with text, images, and code together.'
  },
  'gemini-2-quiz': {
    question: 'Which Google tool does Gemini integrate with?',
    options: [
      'Only Gmail',
      'Only Docs',
      'The entire Google Workspace suite',
      'None of them'
    ],
    correctIndex: 2,
    explanation: 'Gemini integrates with the entire Google Workspace suite including Gmail, Docs, Sheets, Slides, and Meet.'
  },
  
  // Perplexity Quizzes
  'perplexity-1-quiz': {
    question: 'What does Perplexity provide with its answers?',
    options: [
      'Only the answer',
      'Answer with source citations',
      'Only links',
      'Only images'
    ],
    correctIndex: 1,
    explanation: 'Perplexity provides comprehensive answers with source citations, allowing you to verify the information.'
  },
  'perplexity-2-quiz': {
    question: 'What is a key feature of Perplexity Pro?',
    options: [
      'Fewer searches',
      'No source citations',
      'Access to multiple AI models',
      'Slower responses'
    ],
    correctIndex: 2,
    explanation: 'Perplexity Pro provides access to multiple AI models including GPT-4 and Claude for more powerful searches.'
  },
  
  // Copilot Quizzes
  'copilot-1-quiz': {
    question: 'What is the best way to get good Copilot suggestions?',
    options: [
      'Write no comments',
      'Write detailed comments describing what you want',
      'Use random variable names',
      'Avoid importing libraries'
    ],
    correctIndex: 1,
    explanation: 'Detailed comments act as prompts for Copilot, helping it understand what code you want to generate.'
  },
  'copilot-2-quiz': {
    question: 'What keyboard shortcut accepts a Copilot suggestion?',
    options: [
      'Enter',
      'Space',
      'Tab',
      'Escape'
    ],
    correctIndex: 2,
    explanation: 'Tab is the keyboard shortcut to accept a Copilot suggestion. Escape dismisses it.'
  },
  'copilot-3-quiz': {
    question: 'What does Copilot Chat allow you to do?',
    options: [
      'Only generate images',
      'Have conversations about code in your IDE',
      'Only run code',
      'Only format code'
    ],
    correctIndex: 1,
    explanation: 'Copilot Chat allows you to have conversations about code directly in your IDE, asking questions and getting explanations.'
  },
  
  // Stable Diffusion Quizzes
  'sd-1-quiz': {
    question: 'What is a key advantage of Stable Diffusion?',
    options: [
      'It requires internet',
      'It\'s cloud-only',
      'You can run it locally for free',
      'It only works on Mac'
    ],
    correctIndex: 2,
    explanation: 'Stable Diffusion can be run locally on your own computer for free, giving you privacy and control.'
  },
  'sd-2-quiz': {
    question: 'What do negative prompts do?',
    options: [
      'Make images darker',
      'Tell SD what to avoid in the image',
      'Increase generation speed',
      'Add more subjects'
    ],
    correctIndex: 1,
    explanation: 'Negative prompts tell Stable Diffusion what to avoid, helping eliminate unwanted elements from your images.'
  },
  'sd-3-quiz': {
    question: 'What is ControlNet used for?',
    options: [
      'Controlling computer volume',
      'Precise control over image composition',
      'Network security',
      'File management'
    ],
    correctIndex: 1,
    explanation: 'ControlNet gives you precise control over image composition using reference images for poses, edges, depth, and more.'
  },
  
  // Notion AI Quizzes
  'notion-1-quiz': {
    question: 'How do you access Notion AI on an empty line?',
    options: [
      'Click a button',
      'Press Space bar',
      'Right-click',
      'Press Enter twice'
    ],
    correctIndex: 1,
    explanation: 'Pressing the Space bar on an empty line in Notion opens the AI assistant.'
  },
  'notion-2-quiz': {
    question: 'What can Notion AI do with databases?',
    options: [
      'Only delete entries',
      'Auto-fill properties and generate content',
      'Only export data',
      'Only sort entries'
    ],
    correctIndex: 1,
    explanation: 'Notion AI can auto-fill properties, generate content, and help with data entry in databases.'
  },
  
  // DeepSeek Quizzes
  'deepseek-1-quiz': {
    question: 'What is DeepSeek particularly strong at?',
    options: [
      'Only image generation',
      'Reasoning and coding tasks',
      'Only translation',
      'Only summarization'
    ],
    correctIndex: 1,
    explanation: 'DeepSeek is particularly strong at reasoning and coding tasks, with excellent step-by-step problem solving.'
  },
  'deepseek-2-quiz': {
    question: 'When should you consider using DeepSeek?',
    options: [
      'Only for simple tasks',
      'For complex reasoning and technical problems',
      'Only for image generation',
      'Only for translation'
    ],
    correctIndex: 1,
    explanation: 'DeepSeek is ideal for complex reasoning tasks, technical problems, and when you need detailed explanations.'
  }
};

// ============================================
// Export combined content
// ============================================

export const allCourseContent: Record<string, ContentPage[]> = {
  ...chatgptIntermediateContent,
  ...chatgptAdvancedContent,
  ...dalleIntermediateContent,
  ...dalleAdvancedContent,
  ...midjourneyContent,
  ...claudeContent,
  ...geminiContent,
  ...perplexityContent,
  ...copilotContent,
  ...stableDiffusionContent,
  ...notionContent,
  ...deepseekContent
};
