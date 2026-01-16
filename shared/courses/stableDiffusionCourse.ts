/**
 * Stable Diffusion Course - Complete Lesson Data
 * 
 * Course Structure:
 * - Level 1 (Beginner): 5 modules (sd-1-1 to sd-1-quiz)
 * - Level 2 (Intermediate): 5 modules (sd-2-1 to sd-2-quiz)
 * - Level 3 (Advanced): 4 modules (sd-3-1 to sd-3-quiz)
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

export const sdLesson1_1: CoursivLesson = {
  id: 'sd-1-1',
  courseId: 'stable-diffusion',
  title: 'What is Stable Diffusion?',
  subtitle: 'Introduction to open-source AI art',
  blocks: [
    createTextBlock(
      "Welcome to Stable Diffusion",
      "🎨",
      [
        "Stable Diffusion is an open-source AI image generation model that you can run on your own computer or use through various services.",
        "Unlike cloud-only services, Stable Diffusion gives you complete control over your image generation, with no usage limits when running locally.",
      ]
    ),
    createTextBlock(
      "Why Stable Diffusion?",
      "💡",
      [
        "**Open Source**: Free to use, modify, and build upon",
        "**Local Control**: Run on your own hardware with no limits",
        "**Customizable**: Train custom models and use community extensions",
        "**Privacy**: Your prompts and images stay on your machine",
      ]
    ),
    createPlaygroundBlock(
      'Your First SD Prompt',
      'Create a basic Stable Diffusion prompt.',
      { name: 'Stable Diffusion', icon: '🎨' },
      '[subject], [style], [quality], [lighting]',
      [
        { id: 'subject', placeholder: 'subject', correctAnswer: 'a beautiful landscape' },
        { id: 'style', placeholder: 'style', correctAnswer: 'digital art' },
        { id: 'quality', placeholder: 'quality', correctAnswer: 'highly detailed' },
        { id: 'lighting', placeholder: 'lighting', correctAnswer: 'golden hour' }
      ],
      ['a beautiful landscape', 'digital art', 'highly detailed', 'golden hour'],
      'SD prompts are comma-separated descriptors.',
      { title: 'Great prompt!', message: "You've created your first SD prompt!" },
      { title: 'Try again', message: 'Use comma-separated descriptive terms.' },
      '/images/course/stable-diffusion/sd-first-prompt.png',
      'Stable Diffusion prompts work best with comma-separated descriptive terms.',
      `🎨 **Stable Diffusion Generation**

**Prompt:** a beautiful landscape, digital art, highly detailed, golden hour

**Generation Settings:**
| Parameter | Value |
|-----------|-------|
| Model | SD XL 1.0 |
| Steps | 30 |
| CFG Scale | 7 |
| Sampler | DPM++ 2M Karras |
| Size | 1024×1024 |

**Prompt Analysis:**

**Subject: "a beautiful landscape"**
- Triggers nature/scenery generation
- Open to interpretation (mountains, valleys, etc.)

**Style: "digital art"**
- Clean, polished aesthetic
- Vibrant colors
- Modern artistic approach

**Quality: "highly detailed"**
- Increases fine detail rendering
- Better textures and elements
- More complex compositions

**Lighting: "golden hour"**
- Warm, orange-gold tones
- Long shadows
- Atmospheric depth
- Romantic/dramatic mood

**Expected Result:**
A stunning digital artwork featuring a scenic landscape bathed in warm golden hour light, with intricate details in vegetation, terrain, and atmospheric effects.

**Pro Tips:**
- Add negative prompts to avoid unwanted elements
- Experiment with different samplers
- Adjust CFG scale for creativity vs prompt adherence

Welcome to the world of open-source AI art! 🌟`
    ),
    createFeedbackBlock(
      'Are you interested in running SD locally?',
      ['Yes, definitely', 'Maybe later', 'Prefer cloud services'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Open Source Power',
      'Stable Diffusion is open-source, giving you complete control and unlimited local generation.'
    ),
  ],
};

export const sdLesson1_2: CoursivLesson = {
  id: 'sd-1-2',
  courseId: 'stable-diffusion',
  title: 'Installation Options',
  subtitle: 'Ways to use Stable Diffusion',
  blocks: [
    createTextBlock(
      "How to Access SD",
      "🖥️",
      [
        "There are multiple ways to use Stable Diffusion, from cloud services to local installation.",
        "Your choice depends on your hardware, technical comfort, and usage needs.",
      ]
    ),
    createTextBlock(
      "Access Options",
      "📋",
      [
        "**Cloud Services**: DreamStudio, RunDiffusion, Replicate (easy, paid)",
        "**Web UIs**: Automatic1111, ComfyUI, InvokeAI (local, free)",
        "**Notebooks**: Google Colab, Kaggle (free GPU access)",
        "**Direct**: Python scripts with diffusers library (advanced)",
      ]
    ),
    createPlaygroundBlock(
      'Choosing Your Setup',
      'Select the right setup for your needs.',
      { name: 'Stable Diffusion', icon: '🎨' },
      'For [use_case], I should use [option] because it offers [benefit].',
      [
        { id: 'use_case', placeholder: 'use case', correctAnswer: 'learning and experimentation' },
        { id: 'option', placeholder: 'option', correctAnswer: 'Automatic1111 WebUI' },
        { id: 'benefit', placeholder: 'benefit', correctAnswer: 'a user-friendly interface with many features' }
      ],
      ['learning and experimentation', 'Automatic1111 WebUI', 'a user-friendly interface with many features'],
      'Match your setup to your needs and technical level.',
      { title: 'Good choice!', message: "You've selected an appropriate setup!" },
      { title: 'Try again', message: 'Consider your use case and technical requirements.' },
      '/images/course/stable-diffusion/sd-setup.png',
      'Automatic1111 is the most popular local option due to its features and community support.',
      `🖥️ **Setup Comparison Guide**

**Your Choice: Automatic1111 WebUI**

**Why A1111 is Great for Learning:**
- ✅ Visual interface (no coding needed)
- ✅ Huge extension ecosystem
- ✅ Active community support
- ✅ All features in one place
- ✅ Free and unlimited

**Setup Requirements:**
| Component | Minimum | Recommended |
|-----------|---------|-------------|
| GPU VRAM | 4GB | 8GB+ |
| RAM | 8GB | 16GB+ |
| Storage | 10GB | 50GB+ |
| OS | Windows/Linux/Mac | Any |

**Installation Steps:**
\`\`\`bash
# 1. Install Python 3.10
# 2. Install Git
# 3. Clone repository
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
# 4. Run installer
./webui.sh  # Linux/Mac
webui-user.bat  # Windows
\`\`\`

**Alternative Options:**

| Option | Best For | Pros | Cons |
|--------|----------|------|------|
| **DreamStudio** | Quick start | No setup | Paid credits |
| **ComfyUI** | Advanced users | Node-based, flexible | Steeper learning curve |
| **Google Colab** | No GPU owners | Free GPU | Session limits |
| **InvokeAI** | Artists | Clean UI | Fewer extensions |

**Recommendation Path:**
1. Start with DreamStudio to learn prompting
2. Move to A1111 for serious work
3. Explore ComfyUI for advanced workflows

Would you like detailed installation instructions for your platform?`
    ),
    createFeedbackBlock(
      'Which setup interests you most?',
      ['Local WebUI', 'Cloud service', 'Not sure yet'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Setup Options',
      'Automatic1111 WebUI is the most popular local option for its features and community.'
    ),
  ],
};

export const sdLesson1_3: CoursivLesson = {
  id: 'sd-1-3',
  courseId: 'stable-diffusion',
  title: 'Basic Parameters',
  subtitle: 'Understanding generation settings',
  blocks: [
    createTextBlock(
      "Generation Parameters",
      "⚙️",
      [
        "Stable Diffusion has several parameters that control how images are generated.",
        "Understanding these parameters helps you get consistent, high-quality results.",
      ]
    ),
    createTextBlock(
      "Key Parameters",
      "🔧",
      [
        "**Steps**: Number of denoising iterations (20-50 typical)",
        "**CFG Scale**: How closely to follow the prompt (7-12 typical)",
        "**Sampler**: Algorithm for image generation (DPM++, Euler, etc.)",
        "**Seed**: Random number for reproducibility (-1 for random)",
      ]
    ),
    createPlaygroundBlock(
      'Setting Parameters',
      'Learn to configure generation parameters.',
      { name: 'Stable Diffusion', icon: '🎨' },
      'For [goal], I should set steps to [steps], CFG scale to [cfg], and use [sampler] sampler.',
      [
        { id: 'goal', placeholder: 'goal', correctAnswer: 'high quality detailed images' },
        { id: 'steps', placeholder: 'steps', correctAnswer: '30' },
        { id: 'cfg', placeholder: 'CFG', correctAnswer: '7' },
        { id: 'sampler', placeholder: 'sampler', correctAnswer: 'DPM++ 2M Karras' }
      ],
      ['high quality detailed images', '30', '7', 'DPM++ 2M Karras'],
      'Balance quality and speed with your parameter choices.',
      { title: 'Parameter pro!', message: "You understand SD parameters!" },
      { title: 'Try again', message: 'Match parameters to your quality goals.' },
      '/images/course/stable-diffusion/sd-parameters.png',
      'DPM++ 2M Karras at 30 steps with CFG 7 is a great starting point for most images.',
      `⚙️ **Parameter Deep Dive**

**Your Settings:**
- Steps: 30
- CFG Scale: 7
- Sampler: DPM++ 2M Karras

**Why These Work Well:**

**Steps: 30**
\`\`\`
10-15: Fast but rough
20-30: Good balance ✓
40-50: Diminishing returns
100+: Usually unnecessary
\`\`\`

**CFG Scale: 7**
| Value | Effect |
|-------|--------|
| 1-4 | Very creative, may ignore prompt |
| 5-8 | Balanced creativity and adherence ✓ |
| 9-12 | Strict prompt following |
| 13+ | Often oversaturated/artifacts |

**Sampler: DPM++ 2M Karras**
Best for: General purpose, good quality/speed balance

**Sampler Comparison:**
| Sampler | Speed | Quality | Best For |
|---------|-------|---------|----------|
| Euler a | Fast | Good | Quick iterations |
| DPM++ 2M Karras | Medium | Excellent | Final renders ✓ |
| DPM++ SDE Karras | Slow | Excellent | Maximum quality |
| DDIM | Fast | Good | Img2img |

**Seed Explained:**
- **-1**: Random seed each time
- **Specific number**: Reproducible results
- **Pro tip**: Find a good seed, then vary prompt

**Recommended Starting Points:**

| Use Case | Steps | CFG | Sampler |
|----------|-------|-----|---------|
| Quick test | 15 | 7 | Euler a |
| Standard | 30 | 7 | DPM++ 2M Karras |
| High quality | 40 | 7.5 | DPM++ SDE Karras |
| Portraits | 30 | 8 | DPM++ 2M Karras |

Save these as presets in your WebUI!`
    ),
    createFeedbackBlock(
      'How comfortable are you with parameters?',
      ['Very comfortable', 'Getting there', 'Need more practice'],
      0
    ),
    createDiscoveryBlock(
      3,
      'Parameter Basics',
      'Steps, CFG Scale, and Sampler are the key parameters for controlling image generation.'
    ),
  ],
};

export const sdLesson1_4: CoursivLesson = {
  id: 'sd-1-4',
  courseId: 'stable-diffusion',
  title: 'Negative Prompts',
  subtitle: 'Avoiding unwanted elements',
  blocks: [
    createTextBlock(
      "The Power of Negative Prompts",
      "🚫",
      [
        "Negative prompts tell Stable Diffusion what NOT to include in your image.",
        "They're essential for avoiding common artifacts and unwanted elements.",
      ]
    ),
    createTextBlock(
      "Common Negative Prompts",
      "📝",
      [
        "**Quality**: blurry, low quality, jpeg artifacts, pixelated",
        "**Anatomy**: bad hands, extra fingers, deformed, mutated",
        "**Style**: cartoon, anime (if wanting realism)",
        "**Elements**: watermark, text, signature, logo",
      ]
    ),
    createPlaygroundBlock(
      'Using Negative Prompts',
      'Create effective negative prompts.',
      { name: 'Stable Diffusion', icon: '🎨' },
      'Negative prompt: [quality_issues], [anatomy_issues], [unwanted_elements], [style_issues]',
      [
        { id: 'quality_issues', placeholder: 'quality issues', correctAnswer: 'blurry, low quality' },
        { id: 'anatomy_issues', placeholder: 'anatomy issues', correctAnswer: 'bad hands, extra fingers' },
        { id: 'unwanted_elements', placeholder: 'unwanted elements', correctAnswer: 'watermark, text' },
        { id: 'style_issues', placeholder: 'style issues', correctAnswer: 'cartoon, anime' }
      ],
      ['blurry, low quality', 'bad hands, extra fingers', 'watermark, text', 'cartoon, anime'],
      'Negative prompts help avoid common SD issues.',
      { title: 'Negative prompt master!', message: "You know how to avoid unwanted elements!" },
      { title: 'Try again', message: 'Include quality, anatomy, and element issues.' },
      '/images/course/stable-diffusion/sd-negative.png',
      'A good negative prompt is as important as a good positive prompt.',
      `🚫 **Negative Prompt Guide**

**Your Negative Prompt:**
\`blurry, low quality, bad hands, extra fingers, watermark, text, cartoon, anime\`

**Why Each Matters:**

| Category | Terms | What It Prevents |
|----------|-------|------------------|
| **Quality** | blurry, low quality | Soft/unfocused images |
| **Anatomy** | bad hands, extra fingers | Common SD artifacts |
| **Elements** | watermark, text | Unwanted overlays |
| **Style** | cartoon, anime | Style bleeding |

**Universal Negative Prompt Template:**

\`\`\`
(worst quality, low quality:1.4), blurry, 
bad anatomy, bad hands, extra fingers, 
fewer fingers, missing fingers, 
deformed, mutated, disfigured,
watermark, text, signature, logo,
jpeg artifacts, pixelated
\`\`\`

**Specialized Negative Prompts:**

**For Portraits:**
\`\`\`
bad face, ugly, asymmetric eyes,
cross-eyed, bad teeth, 
multiple people, extra limbs
\`\`\`

**For Landscapes:**
\`\`\`
people, humans, animals,
buildings (if natural scene),
modern elements (if historical)
\`\`\`

**For Product Photos:**
\`\`\`
background clutter, shadows,
reflections, other products,
hands holding item
\`\`\`

**Weight Syntax:**
- \`(term:1.4)\` = Stronger effect
- \`(term:0.8)\` = Weaker effect
- \`[term]\` = Reduce importance

**Pro Tips:**
1. Start with universal template
2. Add category-specific terms
3. Adjust weights based on results
4. Save working negatives as presets

**Common Mistake:** Over-stuffing negatives can reduce image quality. Start simple!`
    ),
    createFeedbackBlock(
      'Do negative prompts improve your results?',
      ['Yes, significantly', 'Somewhat', 'Still testing'],
      0
    ),
    createDiscoveryBlock(
      4,
      'Negative Power',
      'Negative prompts are essential for avoiding artifacts and unwanted elements.'
    ),
  ],
};

export const sdLesson1_Quiz: CoursivLesson = {
  id: 'sd-1-quiz',
  courseId: 'stable-diffusion',
  title: 'Beginner Quiz',
  subtitle: 'Test your SD knowledge',
  blocks: [
    createTextBlock(
      "Beginner Assessment",
      "📝",
      [
        "Let's test what you've learned about Stable Diffusion basics!",
        "Pass this quiz to unlock intermediate techniques.",
      ]
    ),
    createQuizBlock(
      'What makes Stable Diffusion unique among AI image generators?',
      [
        'It\'s the fastest',
        'It\'s open-source and can run locally',
        'It only works online',
        'It\'s made by Google'
      ],
      1,
      'Stable Diffusion is open-source, allowing local installation with no usage limits.',
      'Think about what "open-source" means.'
    ),
    createQuizBlock(
      'What does CFG Scale control?',
      [
        'Image size',
        'How closely the image follows the prompt',
        'Generation speed',
        'Color saturation'
      ],
      1,
      'CFG Scale (Classifier-Free Guidance) controls how strictly the model follows your prompt.',
      'Think about prompt adherence.'
    ),
    createQuizBlock(
      'What is the purpose of negative prompts?',
      [
        'To make images darker',
        'To specify what NOT to include in the image',
        'To speed up generation',
        'To add more detail'
      ],
      1,
      'Negative prompts tell the model what elements to avoid in the generated image.',
      'Think about avoiding unwanted elements.'
    ),
    createDiscoveryBlock(
      5,
      'Beginner Complete!',
      'Great job! You understand SD basics. Ready for models and LoRAs?'
    ),
  ],
};

// ============================================
// LEVEL 2: INTERMEDIATE
// ============================================

export const sdLesson2_1: CoursivLesson = {
  id: 'sd-2-1',
  courseId: 'stable-diffusion',
  title: 'Models & Checkpoints',
  subtitle: 'Understanding different models',
  blocks: [
    createTextBlock(
      "The World of SD Models",
      "🧠",
      [
        "Stable Diffusion has many different model versions and community-trained checkpoints.",
        "Each model has different strengths, styles, and capabilities.",
      ]
    ),
    createTextBlock(
      "Model Types",
      "📦",
      [
        "**Base Models**: SD 1.5, SD 2.1, SDXL (official releases)",
        "**Fine-tuned**: Trained on specific styles or subjects",
        "**Merged**: Combinations of multiple models",
        "**Specialized**: Anime, realistic, artistic styles",
      ]
    ),
    createPlaygroundBlock(
      'Choosing Models',
      'Select the right model for your needs.',
      { name: 'Stable Diffusion', icon: '🎨' },
      'For [use_case], I should use [model] because it excels at [strength].',
      [
        { id: 'use_case', placeholder: 'use case', correctAnswer: 'photorealistic portraits' },
        { id: 'model', placeholder: 'model', correctAnswer: 'Realistic Vision' },
        { id: 'strength', placeholder: 'strength', correctAnswer: 'lifelike human features' }
      ],
      ['photorealistic portraits', 'Realistic Vision', 'lifelike human features'],
      'Different models excel at different styles and subjects.',
      { title: 'Model expert!', message: "You understand SD model selection!" },
      { title: 'Try again', message: 'Match the model to your specific use case.' },
      '/images/course/stable-diffusion/sd-models.png',
      'Choosing the right model is often more important than prompt engineering.',
      `🧠 **Model Selection Guide**

**Your Choice: Realistic Vision for Photorealistic Portraits**

**Why Realistic Vision Works:**
- ✅ Trained on high-quality photos
- ✅ Excellent skin textures
- ✅ Natural lighting understanding
- ✅ Accurate facial features

**Popular Models by Category:**

| Category | Model | Best For |
|----------|-------|----------|
| **Realistic** | Realistic Vision | Portraits, photos |
| | Juggernaut XL | General realism |
| | CyberRealistic | Cinematic look |
| **Anime** | Anything V5 | General anime |
| | Counterfeit | Detailed anime |
| | MeinaMix | Soft anime style |
| **Artistic** | DreamShaper | Fantasy art |
| | RevAnimated | Dynamic scenes |
| | Deliberate | Versatile art |
| **SDXL** | SDXL Base | High resolution |
| | Juggernaut XL | Best overall |
| | RealVisXL | Realistic SDXL |

**Model Comparison:**

**SD 1.5 Based:**
\`\`\`
+ Huge model ecosystem
+ Lower VRAM requirement (4GB+)
+ Fast generation
- Lower resolution (512×512 native)
\`\`\`

**SDXL Based:**
\`\`\`
+ Higher resolution (1024×1024)
+ Better composition
+ More detailed
- Higher VRAM (8GB+)
- Slower generation
\`\`\`

**Where to Find Models:**
- [Civitai](https://civitai.com) - Largest collection
- [Hugging Face](https://huggingface.co) - Official models
- Model-specific Discord servers

**Pro Tips:**
1. Start with versatile models (DreamShaper, Juggernaut)
2. Specialize based on your needs
3. Read model cards for optimal settings
4. Test with same prompt across models`
    ),
    createFeedbackBlock(
      'Have you tried different models?',
      ['Yes, many', 'A few', 'Not yet'],
      0
    ),
    createDiscoveryBlock(
      6,
      'Model Matters',
      'Choosing the right model is often more important than prompt engineering.'
    ),
  ],
};

export const sdLesson2_2: CoursivLesson = {
  id: 'sd-2-2',
  courseId: 'stable-diffusion',
  title: 'LoRAs & Embeddings',
  subtitle: 'Customizing your generations',
  blocks: [
    createTextBlock(
      "Extending SD with Add-ons",
      "🔌",
      [
        "LoRAs (Low-Rank Adaptations) and embeddings are small files that modify how SD generates images.",
        "They let you add specific styles, characters, or concepts without changing the base model.",
      ]
    ),
    createTextBlock(
      "Add-on Types",
      "📎",
      [
        "**LoRA**: Adds styles, characters, or concepts (small file, big impact)",
        "**Textual Inversion**: Teaches new concepts through embeddings",
        "**Hypernetworks**: Modifies generation style (less common now)",
        "**LyCORIS**: Advanced LoRA variants with more flexibility",
      ]
    ),
    createPlaygroundBlock(
      'Using LoRAs',
      'Learn to apply LoRAs to your prompts.',
      { name: 'Stable Diffusion', icon: '🎨' },
      '[subject], [style] <lora:[lora_name]:[weight]>',
      [
        { id: 'subject', placeholder: 'subject', correctAnswer: 'portrait of a woman' },
        { id: 'style', placeholder: 'style', correctAnswer: 'cinematic lighting' },
        { id: 'lora_name', placeholder: 'LoRA name', correctAnswer: 'FilmGrain' },
        { id: 'weight', placeholder: 'weight', correctAnswer: '0.7' }
      ],
      ['portrait of a woman', 'cinematic lighting', 'FilmGrain', '0.7'],
      'LoRAs are added to prompts with <lora:name:weight> syntax.',
      { title: 'LoRA loaded!', message: "You understand how to use LoRAs!" },
      { title: 'Try again', message: 'Use the <lora:name:weight> syntax.' },
      '/images/course/stable-diffusion/sd-lora.png',
      'LoRA weights between 0.5-0.8 usually work best; 1.0 can be too strong.',
      `🔌 **LoRA & Embedding Guide**

**Your Prompt:**
\`portrait of a woman, cinematic lighting <lora:FilmGrain:0.7>\`

**How LoRAs Work:**
\`\`\`
Base Model + LoRA = Modified Output
     ↓         ↓           ↓
  General   Specific    Targeted
  Knowledge  Style      Result
\`\`\`

**LoRA Syntax:**
| Format | Example | Effect |
|--------|---------|--------|
| Basic | \`<lora:name:0.7>\` | Standard application |
| Multiple | \`<lora:A:0.5><lora:B:0.5>\` | Combine effects |
| Weighted | \`<lora:name:0.3>\` | Subtle effect |

**Weight Guidelines:**
\`\`\`
0.3-0.5: Subtle influence
0.5-0.7: Balanced effect ✓
0.7-0.9: Strong influence
1.0+: May overpower/distort
\`\`\`

**Popular LoRA Categories:**

| Category | Examples | Use For |
|----------|----------|---------|
| **Style** | FilmGrain, Anime | Visual aesthetics |
| **Detail** | add_detail, epiNoiseoffset | Quality boost |
| **Character** | Specific characters | Consistent faces |
| **Concept** | Specific objects/poses | Targeted elements |

**Textual Inversions (Embeddings):**
\`\`\`
Positive: (embedding_name)
Negative: (bad_embedding)
\`\`\`

**Common Negative Embeddings:**
- \`bad_prompt\` - General quality
- \`bad-hands-5\` - Hand improvement
- \`easynegative\` - Universal negative

**Combining Multiple LoRAs:**
\`\`\`
portrait <lora:FilmGrain:0.5><lora:add_detail:0.6>
\`\`\`

**Pro Tips:**
1. Total LoRA weight shouldn't exceed 1.5
2. Test each LoRA individually first
3. Some LoRAs have trigger words - check the model page
4. Lower weights for style LoRAs, higher for character LoRAs`
    ),
    createFeedbackBlock(
      'Have you tried using LoRAs?',
      ['Yes, love them', 'A few times', 'Not yet'],
      0
    ),
    createDiscoveryBlock(
      7,
      'LoRA Power',
      'LoRAs add specific styles or concepts without changing your base model.'
    ),
  ],
};

export const sdLesson2_3: CoursivLesson = {
  id: 'sd-2-3',
  courseId: 'stable-diffusion',
  title: 'Img2Img',
  subtitle: 'Transforming existing images',
  blocks: [
    createTextBlock(
      "Image-to-Image Generation",
      "🔄",
      [
        "Img2Img lets you use an existing image as a starting point for generation.",
        "This is powerful for editing, style transfer, and iterative refinement.",
      ]
    ),
    createTextBlock(
      "Img2Img Uses",
      "🖼️",
      [
        "**Style Transfer**: Apply artistic styles to photos",
        "**Refinement**: Improve or modify generated images",
        "**Upscaling**: Increase resolution with detail",
        "**Editing**: Change specific elements while keeping composition",
      ]
    ),
    createPlaygroundBlock(
      'Using Img2Img',
      'Configure img2img for different purposes.',
      { name: 'Stable Diffusion', icon: '🎨' },
      'For [purpose], set denoising strength to [strength]. This will [effect].',
      [
        { id: 'purpose', placeholder: 'purpose', correctAnswer: 'subtle style changes' },
        { id: 'strength', placeholder: 'strength', correctAnswer: '0.3-0.4' },
        { id: 'effect', placeholder: 'effect', correctAnswer: 'keep most of the original image' }
      ],
      ['subtle style changes', '0.3-0.4', 'keep most of the original image'],
      'Denoising strength controls how much the image changes.',
      { title: 'Img2Img ready!', message: "You understand img2img settings!" },
      { title: 'Try again', message: 'Match denoising strength to your goal.' },
      '/images/course/stable-diffusion/sd-img2img.png',
      'Lower denoising = subtle changes, higher denoising = major transformations.',
      `🔄 **Img2Img Mastery**

**Your Setting: 0.3-0.4 for Subtle Style Changes**

**Denoising Strength Guide:**

| Strength | Effect | Best For |
|----------|--------|----------|
| 0.1-0.3 | Very subtle | Color correction, minor tweaks |
| 0.3-0.5 | Moderate | Style transfer, refinement ✓ |
| 0.5-0.7 | Significant | Major style changes |
| 0.7-0.9 | Dramatic | Near-complete transformation |
| 0.9-1.0 | Almost txt2img | Using image as loose reference |

**Visual Guide:**
\`\`\`
Original → 0.3 → 0.5 → 0.7 → 0.9
[Photo]   [Styled] [Changed] [Different] [New]
\`\`\`

**Common Workflows:**

**1. Style Transfer**
\`\`\`
Input: Photo
Prompt: "oil painting style, impressionist"
Denoising: 0.4-0.6
Result: Photo as painting
\`\`\`

**2. Iterative Refinement**
\`\`\`
Input: Generated image with issues
Prompt: Same + fixes
Denoising: 0.2-0.4
Result: Improved version
\`\`\`

**3. Upscaling (with SD Upscale)**
\`\`\`
Input: Low-res image
Prompt: Describe the image
Denoising: 0.2-0.3
Result: Higher resolution with detail
\`\`\`

**4. Inpainting (Masked Img2Img)**
\`\`\`
Input: Image with masked area
Prompt: What should fill the mask
Denoising: 0.7-0.9 (for masked area)
Result: Seamless edit
\`\`\`

**Pro Tips:**
1. Match your prompt to the input image
2. Use same seed for consistent iterations
3. Increase steps for better quality at low denoising
4. Try different samplers - DDIM works well for img2img`
    ),
    createFeedbackBlock(
      'How useful is img2img for your workflow?',
      ['Essential', 'Helpful', 'Haven\'t used it much'],
      0
    ),
    createDiscoveryBlock(
      8,
      'Img2Img Power',
      'Denoising strength controls how much img2img changes your original image.'
    ),
  ],
};

export const sdLesson2_4: CoursivLesson = {
  id: 'sd-2-4',
  courseId: 'stable-diffusion',
  title: 'ControlNet',
  subtitle: 'Precise image control',
  blocks: [
    createTextBlock(
      "What is ControlNet?",
      "🎯",
      [
        "ControlNet is a powerful extension that gives you precise control over image composition.",
        "It uses various inputs (poses, edges, depth maps) to guide generation.",
      ]
    ),
    createTextBlock(
      "ControlNet Types",
      "🔧",
      [
        "**Canny**: Edge detection for preserving outlines",
        "**OpenPose**: Human pose control",
        "**Depth**: Spatial depth information",
        "**Scribble**: Sketch-to-image generation",
      ]
    ),
    createPlaygroundBlock(
      'Using ControlNet',
      'Choose the right ControlNet for your needs.',
      { name: 'Stable Diffusion', icon: '🎨' },
      'For [goal], I should use [controlnet_type] ControlNet with weight [weight].',
      [
        { id: 'goal', placeholder: 'goal', correctAnswer: 'matching a specific pose' },
        { id: 'controlnet_type', placeholder: 'ControlNet type', correctAnswer: 'OpenPose' },
        { id: 'weight', placeholder: 'weight', correctAnswer: '0.8-1.0' }
      ],
      ['matching a specific pose', 'OpenPose', '0.8-1.0'],
      'Different ControlNets serve different purposes.',
      { title: 'ControlNet ready!', message: "You understand ControlNet selection!" },
      { title: 'Try again', message: 'Match the ControlNet type to your control needs.' },
      '/images/course/stable-diffusion/sd-controlnet.png',
      'OpenPose is essential for consistent character poses across multiple images.',
      `🎯 **ControlNet Mastery**

**Your Choice: OpenPose for Matching Poses**

**Why OpenPose:**
- Detects human body keypoints
- Maintains consistent poses
- Works with any character style
- Essential for character consistency

**ControlNet Types Explained:**

| Type | Input | Best For | Weight |
|------|-------|----------|--------|
| **OpenPose** | Pose skeleton | Character poses | 0.8-1.0 |
| **Canny** | Edge map | Structure preservation | 0.5-0.8 |
| **Depth** | Depth map | Spatial composition | 0.6-0.9 |
| **Scribble** | Rough sketch | Sketch to image | 0.7-1.0 |
| **Lineart** | Line drawing | Clean line preservation | 0.6-0.9 |
| **Softedge** | Soft edges | Gentle guidance | 0.5-0.8 |
| **Tile** | Texture | Upscaling, texture | 0.4-0.7 |

**OpenPose Workflow:**
\`\`\`
1. Upload reference image with pose
2. Preprocessor: openpose_full
3. Model: control_v11p_sd15_openpose
4. Weight: 0.8-1.0
5. Generate with your prompt
\`\`\`

**Multi-ControlNet:**
You can combine multiple ControlNets:
\`\`\`
ControlNet 0: OpenPose (pose) - Weight 0.8
ControlNet 1: Depth (composition) - Weight 0.5
\`\`\`

**Weight Guidelines:**
\`\`\`
0.3-0.5: Loose guidance
0.5-0.7: Balanced control
0.7-0.9: Strong adherence
1.0+: Very strict (may reduce quality)
\`\`\`

**Pro Tips:**
1. Preprocess your reference image first
2. Lower weight if output looks distorted
3. Combine with img2img for best results
4. Use "Guess Mode" for automatic preprocessing`
    ),
    createFeedbackBlock(
      'How useful is ControlNet for your work?',
      ['Game-changing', 'Very useful', 'Still learning'],
      0
    ),
    createDiscoveryBlock(
      9,
      'ControlNet Control',
      'ControlNet provides precise control over poses, edges, depth, and composition.'
    ),
  ],
};

export const sdLesson2_Quiz: CoursivLesson = {
  id: 'sd-2-quiz',
  courseId: 'stable-diffusion',
  title: 'Intermediate Quiz',
  subtitle: 'Test your advanced skills',
  blocks: [
    createTextBlock(
      "Intermediate Assessment",
      "📝",
      [
        "Let's test your understanding of intermediate SD techniques!",
        "Pass to unlock advanced features.",
      ]
    ),
    createQuizBlock(
      'What is a LoRA?',
      [
        'A type of image format',
        'A small file that modifies how SD generates images',
        'A sampling method',
        'A type of GPU'
      ],
      1,
      'LoRAs are small files that add specific styles, characters, or concepts to SD.',
      'Think about customizing generation.'
    ),
    createQuizBlock(
      'What does denoising strength control in img2img?',
      [
        'Image resolution',
        'How much the original image changes',
        'Color saturation',
        'Generation speed'
      ],
      1,
      'Denoising strength determines how much img2img transforms the input image.',
      'Think about the balance between original and new.'
    ),
    createQuizBlock(
      'Which ControlNet type is best for matching human poses?',
      [
        'Canny',
        'Depth',
        'OpenPose',
        'Scribble'
      ],
      2,
      'OpenPose detects human body keypoints and is ideal for pose matching.',
      'Think about body position control.'
    ),
    createQuizBlock(
      'What is a good starting LoRA weight?',
      [
        '0.1',
        '0.5-0.8',
        '1.5',
        '2.0'
      ],
      1,
      'LoRA weights between 0.5-0.8 usually provide balanced results without overpowering.',
      'Think about balanced influence.'
    ),
    createDiscoveryBlock(
      10,
      'Intermediate Complete!',
      'Excellent! You\'ve mastered intermediate techniques. Ready for advanced workflows?'
    ),
  ],
};

// ============================================
// LEVEL 3: ADVANCED
// ============================================

export const sdLesson3_1: CoursivLesson = {
  id: 'sd-3-1',
  courseId: 'stable-diffusion',
  title: 'ComfyUI Workflows',
  subtitle: 'Advanced node-based generation',
  blocks: [
    createTextBlock(
      "Beyond WebUI: ComfyUI",
      "🔗",
      [
        "ComfyUI is a node-based interface for Stable Diffusion that offers maximum flexibility and control.",
        "While more complex than A1111, it enables advanced workflows impossible in traditional interfaces.",
      ]
    ),
    createTextBlock(
      "ComfyUI Advantages",
      "⚡",
      [
        "**Visual Workflows**: See exactly how your pipeline works",
        "**Reusability**: Save and share complex workflows",
        "**Efficiency**: Better VRAM management and speed",
        "**Flexibility**: Create custom generation pipelines",
      ]
    ),
    createPlaygroundBlock(
      'Understanding ComfyUI',
      'Learn the basics of node-based workflows.',
      { name: 'Stable Diffusion', icon: '🎨' },
      'In ComfyUI, [input_node] connects to [process_node] which outputs to [output_node].',
      [
        { id: 'input_node', placeholder: 'input node', correctAnswer: 'Load Checkpoint' },
        { id: 'process_node', placeholder: 'process node', correctAnswer: 'KSampler' },
        { id: 'output_node', placeholder: 'output node', correctAnswer: 'Save Image' }
      ],
      ['Load Checkpoint', 'KSampler', 'Save Image'],
      'ComfyUI uses nodes connected in a pipeline.',
      { title: 'Node master!', message: "You understand ComfyUI basics!" },
      { title: 'Try again', message: 'Think about the flow: load → process → output.' },
      '/images/course/stable-diffusion/sd-comfyui.png',
      'ComfyUI workflows are shareable - you can import complex setups with one click.',
      `🔗 **ComfyUI Workflow Guide**

**Basic Workflow Structure:**
\`\`\`
Load Checkpoint → CLIP Text Encode → KSampler → VAE Decode → Save Image
      ↓                  ↓               ↓
    Model            Prompts         Generation
\`\`\`

**Essential Nodes:**

| Node | Purpose | Connections |
|------|---------|-------------|
| **Load Checkpoint** | Load model | → MODEL, CLIP, VAE |
| **CLIP Text Encode** | Process prompts | CLIP → CONDITIONING |
| **KSampler** | Generate image | MODEL, +/- COND → LATENT |
| **VAE Decode** | Convert to image | LATENT, VAE → IMAGE |
| **Save Image** | Output result | IMAGE → File |

**Minimal Working Workflow:**
\`\`\`
┌─────────────────┐
│ Load Checkpoint │
└───────┬─────────┘
        │ MODEL, CLIP, VAE
        ▼
┌─────────────────┐     ┌─────────────────┐
│ CLIP Text Encode│     │ CLIP Text Encode│
│   (Positive)    │     │   (Negative)    │
└───────┬─────────┘     └───────┬─────────┘
        │ CONDITIONING          │
        └──────────┬────────────┘
                   ▼
           ┌─────────────┐
           │  KSampler   │
           └──────┬──────┘
                  │ LATENT
                  ▼
           ┌─────────────┐
           │ VAE Decode  │
           └──────┬──────┘
                  │ IMAGE
                  ▼
           ┌─────────────┐
           │ Save Image  │
           └─────────────┘
\`\`\`

**Advanced Workflow Features:**
- **Reroute nodes**: Organize complex connections
- **Group nodes**: Bundle related nodes
- **Primitive nodes**: Create reusable values
- **Custom nodes**: Extend functionality

**Where to Find Workflows:**
- [ComfyUI Examples](https://github.com/comfyanonymous/ComfyUI_examples)
- [OpenArt Workflows](https://openart.ai/workflows)
- [Civitai Workflows](https://civitai.com)

**Pro Tips:**
1. Start with example workflows
2. Modify one node at a time
3. Use preview nodes for debugging
4. Save working workflows as templates`
    ),
    createFeedbackBlock(
      'Are you interested in ComfyUI?',
      ['Yes, want to try it', 'Maybe later', 'Prefer A1111'],
      0
    ),
    createDiscoveryBlock(
      11,
      'Node-Based Power',
      'ComfyUI enables advanced, shareable workflows with visual node-based editing.'
    ),
  ],
};

export const sdLesson3_2: CoursivLesson = {
  id: 'sd-3-2',
  courseId: 'stable-diffusion',
  title: 'Training Custom Models',
  subtitle: 'Creating your own LoRAs',
  blocks: [
    createTextBlock(
      "Training Your Own Models",
      "🎓",
      [
        "You can train custom LoRAs to capture specific styles, characters, or concepts.",
        "This lets you create personalized AI art that matches your exact needs.",
      ]
    ),
    createTextBlock(
      "Training Options",
      "🔧",
      [
        "**LoRA Training**: Quick, small files, specific concepts",
        "**Dreambooth**: Full fine-tuning, more comprehensive",
        "**Textual Inversion**: Teach new words/concepts",
        "**Hypernetworks**: Style modification (less common)",
      ]
    ),
    createPlaygroundBlock(
      'Planning LoRA Training',
      'Understand the requirements for training.',
      { name: 'Stable Diffusion', icon: '🎨' },
      'To train a [lora_type] LoRA, I need [requirement1] and [requirement2]. Training takes about [time].',
      [
        { id: 'lora_type', placeholder: 'LoRA type', correctAnswer: 'character' },
        { id: 'requirement1', placeholder: 'requirement 1', correctAnswer: '15-30 high-quality images' },
        { id: 'requirement2', placeholder: 'requirement 2', correctAnswer: 'consistent captions' },
        { id: 'time', placeholder: 'time', correctAnswer: '1-2 hours on consumer GPU' }
      ],
      ['character', '15-30 high-quality images', 'consistent captions', '1-2 hours on consumer GPU'],
      'Training requirements vary by LoRA type.',
      { title: 'Training ready!', message: "You understand LoRA training basics!" },
      { title: 'Try again', message: 'Consider image count, captions, and time.' },
      '/images/course/stable-diffusion/sd-lora-training.png',
      'Quality of training images matters more than quantity.',
      `🎓 **LoRA Training Guide**

**Your Plan: Character LoRA Training**

**Requirements:**
- 15-30 high-quality images
- Consistent captions
- ~1-2 hours training time

**Training Setup:**

| Component | Requirement |
|-----------|-------------|
| **GPU** | 8GB+ VRAM (12GB+ recommended) |
| **Software** | Kohya_ss, EveryDream2, or similar |
| **Images** | 15-50 depending on type |
| **Captions** | .txt file per image |

**Image Preparation:**

**For Characters:**
\`\`\`
✅ Do:
- Various angles (front, side, 3/4)
- Different expressions
- Consistent lighting
- Clean backgrounds
- 512×512 or 768×768

❌ Don't:
- Blurry images
- Extreme crops
- Inconsistent subjects
- Low resolution
\`\`\`

**Caption Format:**
\`\`\`
[trigger word], [subject description], [pose], [setting]

Example:
"ohwx person, woman with red hair, smiling, portrait, studio lighting"
\`\`\`

**Training Parameters:**

| Parameter | Character | Style |
|-----------|-----------|-------|
| **Steps** | 1500-3000 | 3000-5000 |
| **Learning Rate** | 1e-4 | 5e-5 |
| **Network Dim** | 32-64 | 64-128 |
| **Network Alpha** | 16-32 | 32-64 |
| **Batch Size** | 1-2 | 2-4 |

**Training Workflow:**
\`\`\`
1. Collect & prepare images
2. Create captions
3. Configure training settings
4. Start training
5. Test at checkpoints
6. Select best epoch
\`\`\`

**Testing Your LoRA:**
\`\`\`
[trigger word], [your prompt] <lora:your_lora:0.7>
\`\`\`

**Pro Tips:**
1. Start with fewer images, add more if needed
2. Use regularization images to prevent overfitting
3. Save checkpoints every 500 steps
4. Test at multiple weights (0.5, 0.7, 1.0)`
    ),
    createFeedbackBlock(
      'Are you interested in training custom LoRAs?',
      ['Yes, definitely', 'Maybe someday', 'Too advanced for now'],
      0
    ),
    createDiscoveryBlock(
      12,
      'Custom Training',
      'Training custom LoRAs requires quality images, good captions, and patience.'
    ),
  ],
};

export const sdLesson3_3: CoursivLesson = {
  id: 'sd-3-3',
  courseId: 'stable-diffusion',
  title: 'Production Workflows',
  subtitle: 'Professional SD usage',
  blocks: [
    createTextBlock(
      "SD for Production",
      "🏭",
      [
        "Using Stable Diffusion professionally requires efficient workflows, quality control, and batch processing.",
        "Let's explore how to scale your SD usage for production work.",
      ]
    ),
    createTextBlock(
      "Production Considerations",
      "📋",
      [
        "**Batch Processing**: Generate multiple images efficiently",
        "**Quality Control**: Consistent results across batches",
        "**Asset Management**: Organize models, LoRAs, and outputs",
        "**Automation**: Scripts and APIs for repetitive tasks",
      ]
    ),
    createPlaygroundBlock(
      'Production Planning',
      'Plan a production workflow.',
      { name: 'Stable Diffusion', icon: '🎨' },
      'For [project_type], I need to [step1], then [step2], and finally [step3].',
      [
        { id: 'project_type', placeholder: 'project type', correctAnswer: 'a product photo series' },
        { id: 'step1', placeholder: 'step 1', correctAnswer: 'establish consistent style settings' },
        { id: 'step2', placeholder: 'step 2', correctAnswer: 'batch generate with variations' },
        { id: 'step3', placeholder: 'step 3', correctAnswer: 'quality review and select finals' }
      ],
      ['a product photo series', 'establish consistent style settings', 'batch generate with variations', 'quality review and select finals'],
      'Production workflows require planning and consistency.',
      { title: 'Production ready!', message: "You understand production workflows!" },
      { title: 'Try again', message: 'Think about the logical order of production steps.' },
      '/images/course/stable-diffusion/sd-production.png',
      'Consistency in settings and prompts is key to professional results.',
      `🏭 **Production Workflow Guide**

**Your Project: Product Photo Series**

**Phase 1: Style Establishment**
\`\`\`
1. Define visual requirements
   - Lighting style
   - Background type
   - Color palette
   - Composition rules

2. Create reference prompt
   - Test multiple variations
   - Lock in working parameters
   - Document everything
\`\`\`

**Phase 2: Batch Generation**

**Batch Settings:**
| Setting | Value | Purpose |
|---------|-------|---------|
| Batch count | 4-8 | Variations per prompt |
| Batch size | 1-2 | Parallel generation |
| Seed | Fixed base + variation | Reproducibility |
| CFG | Locked | Consistency |

**Prompt Template:**
\`\`\`
[product name], [angle], [lighting], [background],
product photography, 8k, sharp focus
Negative: [standard negatives]
\`\`\`

**Phase 3: Quality Control**

**QC Checklist:**
- [ ] Product accurately represented
- [ ] No artifacts or distortions
- [ ] Consistent lighting across set
- [ ] Background clean and uniform
- [ ] Resolution meets requirements

**Automation Options:**

**A1111 API:**
\`\`\`python
import requests

payload = {
    "prompt": "your prompt",
    "negative_prompt": "your negatives",
    "steps": 30,
    "cfg_scale": 7,
    "batch_size": 4
}

response = requests.post(
    "http://127.0.0.1:7860/sdapi/v1/txt2img",
    json=payload
)
\`\`\`

**File Organization:**
\`\`\`
project/
├── inputs/
│   ├── references/
│   └── source_images/
├── outputs/
│   ├── raw/
│   ├── selected/
│   └── final/
├── models/
│   └── project_loras/
└── prompts/
    └── templates.txt
\`\`\`

**Pro Tips:**
1. Create prompt templates for consistency
2. Use X/Y/Z plot for parameter testing
3. Implement naming conventions
4. Back up successful seeds and settings`
    ),
    createFeedbackBlock(
      'Do you plan to use SD professionally?',
      ['Yes, for work', 'For side projects', 'Personal use only'],
      0
    ),
    createDiscoveryBlock(
      13,
      'Production Ready',
      'Professional SD usage requires consistent settings, batch processing, and quality control.'
    ),
  ],
};

export const sdLesson3_Quiz: CoursivLesson = {
  id: 'sd-3-quiz',
  courseId: 'stable-diffusion',
  title: 'Advanced Quiz',
  subtitle: 'Final assessment',
  blocks: [
    createTextBlock(
      "Final Assessment",
      "🏆",
      [
        "Congratulations on reaching the advanced level!",
        "Pass this quiz to complete the Stable Diffusion course!",
      ]
    ),
    createQuizBlock(
      'What is ComfyUI?',
      [
        'A mobile app for SD',
        'A node-based interface for advanced workflows',
        'A cloud service',
        'A type of model'
      ],
      1,
      'ComfyUI is a node-based interface that enables advanced, visual SD workflows.',
      'Think about visual workflow creation.'
    ),
    createQuizBlock(
      'What do you need to train a character LoRA?',
      [
        'Just one image',
        '15-30 high-quality images with consistent captions',
        'Only text descriptions',
        'A subscription service'
      ],
      1,
      'Character LoRAs need multiple quality images with consistent captions for training.',
      'Think about training data requirements.'
    ),
    createQuizBlock(
      'What is key to professional SD production?',
      [
        'Using random settings each time',
        'Consistent settings, batch processing, and quality control',
        'Only using default parameters',
        'Avoiding documentation'
      ],
      1,
      'Professional production requires consistency, efficient batching, and quality review.',
      'Think about what makes work professional.'
    ),
    createQuizBlock(
      'What is the advantage of ComfyUI workflows?',
      [
        'They are simpler than A1111',
        'They are shareable and enable complex custom pipelines',
        'They only work online',
        'They don\'t support ControlNet'
      ],
      1,
      'ComfyUI workflows are visual, shareable, and enable complex custom generation pipelines.',
      'Think about workflow flexibility and sharing.'
    ),
    createDiscoveryBlock(
      14,
      'Course Complete!',
      'Congratulations! You\'ve mastered Stable Diffusion from basics to professional production!'
    ),
  ],
};

// Export all lessons
export const stableDiffusionLessons: CoursivLesson[] = [
  // Level 1: Beginner
  sdLesson1_1,
  sdLesson1_2,
  sdLesson1_3,
  sdLesson1_4,
  sdLesson1_Quiz,
  // Level 2: Intermediate
  sdLesson2_1,
  sdLesson2_2,
  sdLesson2_3,
  sdLesson2_4,
  sdLesson2_Quiz,
  // Level 3: Advanced
  sdLesson3_1,
  sdLesson3_2,
  sdLesson3_3,
  sdLesson3_Quiz,
];
