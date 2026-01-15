/**
 * DALL-E Course - Complete Lesson Data
 * 
 * Course Structure:
 * - Level 1 (Beginner): 4 modules (dalle-1-1 to dalle-1-quiz)
 * - Level 2 (Intermediate): 5 modules (dalle-2-1 to dalle-2-quiz)
 * - Level 3 (Advanced): 3 modules (dalle-3-1 to dalle-3-quiz)
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

export const dalleLesson1_1: CoursivLesson = {
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
      "⚙️",
      [
        "DALL-E uses a type of AI called a **diffusion model** to generate images. It starts with random noise and gradually refines it into a coherent image based on your text description.",
        "The more detailed and specific your description, the better DALL-E can understand what you want to create.",
      ]
    ),
    createPlaygroundBlock(
      'Your First Image Prompt',
      'Create a simple image prompt by describing what you want to see.',
      { name: 'DALL-E', icon: '🎨' },
      'A [style] painting of a [subject] in a [setting] with [lighting] lighting.',
      [
        { id: 'style', placeholder: 'style', correctAnswer: 'watercolor' },
        { id: 'subject', placeholder: 'subject', correctAnswer: 'cat' },
        { id: 'setting', placeholder: 'setting', correctAnswer: 'garden' },
        { id: 'lighting', placeholder: 'lighting', correctAnswer: 'soft' }
      ],
      ['watercolor', 'cat', 'garden', 'soft', 'oil', 'dog', 'city', 'dramatic'],
      'Think about the style, subject, setting, and lighting you want in your image.',
      { title: 'Beautiful!', message: "You've created your first DALL-E prompt!" },
      { title: 'Try again', message: 'Make sure all elements work together visually.' },
      undefined,
      'DALL-E works best with descriptive prompts that include style, subject, and atmosphere.',
      `🎨 **Image Generation Started...**

Processing your prompt: "A watercolor painting of a cat in a garden, soft lighting"

**Generation Progress:** ✅
- Analyzing art style: Watercolor - ✅
- Identifying subject: Cat - ✅
- Setting environment: Garden - ✅
- Applying lighting: Soft, diffused

**Result Preview:**
Your image is being generated! The watercolor style will create soft, flowing edges with gentle color blending. The garden setting adds natural elements like flowers and greenery, while soft lighting creates a peaceful, dreamy atmosphere.

**Tips for Next Time:**
- Add more details like "orange tabby cat" for specific breeds
- Try "morning light" or "golden hour" for different moods
- Include "detailed fur texture" for more realism

Would you like me to generate variations or adjust any parameters?`
    ),
    createFeedbackBlock(
      'Was this introduction helpful?',
      ['Yes', 'Somewhat', 'No'],
      0
    ),
    createDiscoveryBlock(
      1,
      'First Image',
      'DALL-E transforms text descriptions into images using diffusion models.'
    ),
  ],
};

export const dalleLesson1_2: CoursivLesson = {
  id: 'dalle-1-2',
  courseId: 'dall-e',
  title: 'Your First Image',
  subtitle: 'Creating your first AI image',
  blocks: [
    createTextBlock(
      "Crafting Effective Prompts",
      "✍️",
      [
        "The key to great DALL-E images is writing clear, descriptive prompts. Think of it like giving instructions to an artist.",
        "Include details about the subject, style, colors, mood, and composition you want.",
      ]
    ),
    createTextBlock(
      "Prompt Structure",
      "📝",
      [
        "**Subject**: What is the main focus? (a cat, a mountain, a person)",
        "**Style**: What artistic style? (photorealistic, cartoon, oil painting)",
        "**Details**: Colors, textures, lighting, mood",
        "**Composition**: Camera angle, framing, background",
      ]
    ),
    createPlaygroundBlock(
      'Building a Detailed Prompt',
      'Create a more detailed image prompt with multiple elements.',
      { name: 'DALL-E', icon: '🎨' },
      'A [style] [subject], [detail1], [detail2], [composition].',
      [
        { id: 'style', placeholder: 'style', correctAnswer: 'photorealistic' },
        { id: 'subject', placeholder: 'subject', correctAnswer: 'mountain landscape' },
        { id: 'detail1', placeholder: 'detail 1', correctAnswer: 'snow-capped peaks' },
        { id: 'detail2', placeholder: 'detail 2', correctAnswer: 'golden sunset' },
        { id: 'composition', placeholder: 'composition', correctAnswer: 'wide angle shot' }
      ],
      ['photorealistic', 'mountain landscape', 'snow-capped peaks', 'golden sunset', 'wide angle shot', 'digital art', 'forest scene', 'autumn colors', 'misty morning', 'close-up view'],
      'Layer your description with style, subject, details, and composition.',
      { title: 'Stunning!', message: "You've created a detailed image prompt!" },
      { title: 'Try again', message: 'Make sure each element adds to the visual story.' },
      undefined,
      'Layered descriptions with multiple details create more compelling images.',
      `🏔️ **Generating Your Landscape...**

**Prompt Analysis:**
"A photorealistic mountain landscape, snow-capped peaks, golden sunset, wide angle shot"

**Processing Elements:**
| Element | Status | Notes |
|---------|--------|-------|
| Style | ✅ | Photorealistic rendering |
| Subject | ✅ | Mountain terrain |
| Detail 1 | ✅ | Snow textures on peaks |
| Detail 2 | ✅ | Warm golden light |
| Composition | ✅ | Wide FOV, panoramic |

**Image Characteristics:**
- Resolution: High detail
- Color palette: Warm oranges, cool blues, white snow
- Depth: Multiple mountain layers
- Atmosphere: Clear with sunset haze

**Enhancement Suggestions:**
1. Add "reflection in alpine lake" for more interest
2. Try "dramatic clouds" for more atmosphere
3. Include "foreground wildflowers" for depth

Your image captures the majesty of mountain scenery at golden hour!`
    ),
    createFeedbackBlock(
      'How confident do you feel creating prompts?',
      ['Very confident', 'Somewhat confident', 'Need more practice'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Prompt Layers',
      'Great prompts combine subject, style, details, and composition for rich images.'
    ),
  ],
};

export const dalleLesson1_3: CoursivLesson = {
  id: 'dalle-1-3',
  courseId: 'dall-e',
  title: 'Basic Prompt Structure',
  subtitle: 'How to describe what you want',
  blocks: [
    createTextBlock(
      "The Anatomy of a Great Prompt",
      "🔬",
      [
        "Professional DALL-E users follow a consistent structure for their prompts to get predictable, high-quality results.",
        "Understanding this structure will help you create better images every time.",
      ]
    ),
    createTextBlock(
      "The Formula",
      "📐",
      [
        "**[Subject] + [Action/Pose] + [Environment] + [Style] + [Lighting] + [Camera/Perspective]**",
        "Not every prompt needs all elements, but including more details gives DALL-E better guidance.",
      ]
    ),
    createPlaygroundBlock(
      'Using the Formula',
      'Apply the prompt formula to create a professional image.',
      { name: 'DALL-E', icon: '🎨' },
      '[subject] [action] in [environment], [style] style, [lighting] lighting, [perspective].',
      [
        { id: 'subject', placeholder: 'subject', correctAnswer: 'a robot' },
        { id: 'action', placeholder: 'action', correctAnswer: 'reading a book' },
        { id: 'environment', placeholder: 'environment', correctAnswer: 'a cozy library' },
        { id: 'style', placeholder: 'style', correctAnswer: 'steampunk' },
        { id: 'lighting', placeholder: 'lighting', correctAnswer: 'warm candlelight' },
        { id: 'perspective', placeholder: 'perspective', correctAnswer: 'medium shot' }
      ],
      ['a robot', 'reading a book', 'a cozy library', 'steampunk', 'warm candlelight', 'medium shot', 'a wizard', 'casting a spell', 'ancient ruins', 'fantasy', 'magical glow', 'low angle'],
      'Follow the formula: subject + action + environment + style + lighting + perspective.',
      { title: 'Perfect formula!', message: "You've mastered the prompt structure!" },
      { title: 'Try again', message: 'Make sure to include all elements of the formula.' },
      undefined,
      'Following a consistent formula helps create predictable, high-quality results.',
      `🤖 **Steampunk Library Scene**

**Prompt Breakdown:**
"A robot reading a book in a cozy library, steampunk style, warm candlelight lighting, medium shot"

**Visual Elements Generated:**

**Subject:** Brass and copper robot with Victorian-era design
- Gear mechanisms visible
- Glowing amber eyes
- Leather-bound book in mechanical hands

**Environment:** Cozy steampunk library
- Floor-to-ceiling wooden bookshelves
- Brass fixtures and pipes
- Leather armchairs
- Floating dust particles

**Lighting:** Warm candlelight
- Multiple candelabras
- Soft shadows
- Golden ambient glow
- Reflections on metal surfaces

**Composition:** Medium shot
- Robot centered in frame
- Depth of field on background
- Intimate, focused framing

**Style Notes:**
The steampunk aesthetic combines Victorian elegance with industrial machinery, creating a unique retro-futuristic atmosphere.`
    ),
    createFeedbackBlock(
      'Is the prompt formula helpful?',
      ['Very helpful', 'Somewhat helpful', 'Prefer freeform'],
      0
    ),
    createDiscoveryBlock(
      3,
      'The Formula',
      'Subject + Action + Environment + Style + Lighting + Perspective = Great Images'
    ),
  ],
};

export const dalleLesson1_Quiz: CoursivLesson = {
  id: 'dalle-1-quiz',
  courseId: 'dall-e',
  title: 'Beginner Quiz',
  subtitle: 'Test your DALL-E knowledge',
  blocks: [
    createTextBlock(
      "Quiz Time!",
      "📝",
      [
        "Let's test what you've learned about DALL-E basics.",
        "Pass this quiz to unlock intermediate techniques!",
      ]
    ),
    createQuizBlock(
      'What type of AI model does DALL-E use to generate images?',
      [
        'Neural network only',
        'Diffusion model',
        'Simple image filter',
        'Copy-paste algorithm'
      ],
      1,
      'DALL-E uses a diffusion model that starts with noise and gradually refines it into an image.',
      'Think about how DALL-E creates images from scratch.'
    ),
    createQuizBlock(
      'Which element is NOT typically part of a good DALL-E prompt?',
      [
        'Subject description',
        'Art style',
        'Your personal opinion about the image',
        'Lighting conditions'
      ],
      2,
      'Good prompts describe visual elements, not personal opinions or feelings about the image.',
      'Consider what DALL-E can actually visualize.'
    ),
    createQuizBlock(
      'What is the best order for prompt elements?',
      [
        'Random order works fine',
        'Subject → Style → Details → Composition',
        'Style only, no other elements needed',
        'Composition → Subject → Style'
      ],
      1,
      'Starting with the subject and adding style, details, and composition creates clear, structured prompts.',
      'Think about the logical flow of describing an image.'
    ),
    createDiscoveryBlock(
      4,
      'Beginner Complete!',
      'Great job! You understand DALL-E basics. Ready for intermediate techniques?'
    ),
  ],
};

// ============================================
// LEVEL 2: INTERMEDIATE
// ============================================

export const dalleLesson2_1: CoursivLesson = {
  id: 'dalle-2-1',
  courseId: 'dall-e',
  title: 'Style Modifiers',
  subtitle: 'Controlling artistic style',
  blocks: [
    createTextBlock(
      "The Power of Style",
      "🎭",
      [
        "Style modifiers are keywords that dramatically change how DALL-E renders your image.",
        "Understanding style modifiers lets you create images in any artistic tradition or visual aesthetic.",
      ]
    ),
    createTextBlock(
      "Common Style Categories",
      "🖼️",
      [
        "**Traditional Art**: oil painting, watercolor, charcoal sketch, pencil drawing",
        "**Digital Art**: 3D render, digital painting, vector art, pixel art",
        "**Photography**: portrait, landscape, macro, street photography",
        "**Specific Artists**: in the style of Van Gogh, Monet, Picasso (use carefully)",
      ]
    ),
    createPlaygroundBlock(
      'Applying Style Modifiers',
      'Transform a simple subject with different styles.',
      { name: 'DALL-E', icon: '🎨' },
      'A [subject] in the style of [style], with [technique] technique, [color_palette] color palette.',
      [
        { id: 'subject', placeholder: 'subject', correctAnswer: 'sunflower field' },
        { id: 'style', placeholder: 'style', correctAnswer: 'impressionism' },
        { id: 'technique', placeholder: 'technique', correctAnswer: 'visible brushstrokes' },
        { id: 'color_palette', placeholder: 'color palette', correctAnswer: 'warm golden' }
      ],
      ['sunflower field', 'impressionism', 'visible brushstrokes', 'warm golden', 'city skyline', 'cyberpunk', 'neon glow', 'vibrant neon'],
      'Combine style, technique, and color palette for cohesive results.',
      { title: 'Artistic!', message: "You've mastered style modifiers!" },
      { title: 'Try again', message: 'Make sure style elements complement each other.' },
      undefined,
      'Style modifiers can completely transform the same subject into different artworks.',
      `🌻 **Impressionist Sunflower Field**

**Style Analysis:**

**Impressionism Characteristics Applied:**
- Loose, visible brushstrokes
- Emphasis on light and color
- Outdoor/plein air feeling
- Soft edges and atmospheric effects

**Color Palette: Warm Golden**
| Color | Usage |
|-------|-------|
| Cadmium Yellow | Sunflower petals |
| Yellow Ochre | Stems and centers |
| Burnt Sienna | Shadows and depth |
| Cerulean Blue | Sky accents |

**Technique: Visible Brushstrokes**
- Short, dabbing strokes for petals
- Sweeping strokes for sky
- Textured impasto for centers
- Soft blending for background

**Art Historical Reference:**
This style evokes the work of Claude Monet and Vincent van Gogh, who both famously painted sunflowers and fields with impressionist techniques.

**Variations to Try:**
1. "Post-impressionism" for bolder colors
2. "Pointillism" for dotted technique
3. "Fauvism" for wild, expressive colors`
    ),
    createFeedbackBlock(
      'How useful are style modifiers for your needs?',
      ['Very useful', 'Somewhat useful', 'Not my style'],
      0
    ),
    createDiscoveryBlock(
      5,
      'Style Power',
      'Style modifiers let you create images in any artistic tradition or visual aesthetic.'
    ),
  ],
};

export const dalleLesson2_2: CoursivLesson = {
  id: 'dalle-2-2',
  courseId: 'dall-e',
  title: 'Composition Techniques',
  subtitle: 'Arranging elements in images',
  blocks: [
    createTextBlock(
      "Understanding Composition",
      "📐",
      [
        "Composition refers to how elements are arranged within your image. Good composition guides the viewer's eye and creates visual interest.",
        "DALL-E responds well to composition instructions, giving you control over the visual structure.",
      ]
    ),
    createTextBlock(
      "Key Composition Terms",
      "🎯",
      [
        "**Rule of Thirds**: Subject placed off-center for dynamic balance",
        "**Symmetry**: Balanced, mirror-like arrangements",
        "**Leading Lines**: Lines that guide the eye to the subject",
        "**Framing**: Using elements to frame the main subject",
      ]
    ),
    createPlaygroundBlock(
      'Directing Composition',
      'Use composition terms to control image layout.',
      { name: 'DALL-E', icon: '🎨' },
      'A [subject] with [composition_rule], [framing] framing, [depth] depth of field.',
      [
        { id: 'subject', placeholder: 'subject', correctAnswer: 'lone tree on a hill' },
        { id: 'composition_rule', placeholder: 'composition rule', correctAnswer: 'rule of thirds' },
        { id: 'framing', placeholder: 'framing', correctAnswer: 'natural arch' },
        { id: 'depth', placeholder: 'depth', correctAnswer: 'shallow' }
      ],
      ['lone tree on a hill', 'rule of thirds', 'natural arch', 'shallow', 'lighthouse at sunset', 'centered symmetry', 'window', 'deep'],
      'Combine composition rules with framing and depth for professional results.',
      { title: 'Well composed!', message: "You understand composition techniques!" },
      { title: 'Try again', message: 'Think about how these elements work together.' },
      undefined,
      'Composition instructions give you control over the visual structure of your images.',
      `🌳 **Compositional Analysis**

**Your Prompt:**
"A lone tree on a hill with rule of thirds, natural arch framing, shallow depth of field"

**Composition Breakdown:**

**Rule of Thirds:**
\`\`\`
┌───┬───┬───┐
│   │   │ 🌳│  ← Tree placed at right intersection
├───┼───┼───┤
│   │   │   │
├───┼───┼───┤
│   │   │   │
└───┴───┴───┘
\`\`\`

**Natural Arch Framing:**
- Rock formation or branches creating frame
- Draws eye to central subject
- Adds depth and context

**Shallow Depth of Field:**
- Tree in sharp focus
- Background softly blurred
- Creates separation and emphasis

**Visual Impact:**
This composition creates a sense of solitude and importance around the lone tree, with the natural arch adding mystery and the shallow DOF isolating the subject.

**Pro Tips:**
- Add "golden hour lighting" for warmth
- Try "fog in the valley" for atmosphere
- Include "dramatic clouds" for sky interest`
    ),
    createFeedbackBlock(
      'Did composition techniques improve your prompts?',
      ['Yes, significantly', 'Somewhat', 'Need more practice'],
      0
    ),
    createDiscoveryBlock(
      6,
      'Composition Control',
      'Rule of thirds, framing, and depth of field give you professional-level control.'
    ),
  ],
};

export const dalleLesson2_3: CoursivLesson = {
  id: 'dalle-2-3',
  courseId: 'dall-e',
  title: 'Lighting & Mood',
  subtitle: 'Creating atmosphere',
  blocks: [
    createTextBlock(
      "The Magic of Lighting",
      "💡",
      [
        "Lighting is one of the most powerful tools for setting mood and atmosphere in your images.",
        "Different lighting conditions can make the same subject feel completely different.",
      ]
    ),
    createTextBlock(
      "Lighting Vocabulary",
      "🌅",
      [
        "**Natural Light**: golden hour, blue hour, overcast, harsh midday sun",
        "**Artificial Light**: neon, candlelight, studio lighting, spotlight",
        "**Dramatic**: rim lighting, backlighting, chiaroscuro, silhouette",
        "**Soft**: diffused, ambient, reflected, fill light",
      ]
    ),
    createPlaygroundBlock(
      'Setting the Mood with Light',
      'Use lighting to create a specific atmosphere.',
      { name: 'DALL-E', icon: '🎨' },
      'A [subject] with [lighting_type] lighting, [mood] mood, [time] atmosphere.',
      [
        { id: 'subject', placeholder: 'subject', correctAnswer: 'empty street' },
        { id: 'lighting_type', placeholder: 'lighting type', correctAnswer: 'neon signs' },
        { id: 'mood', placeholder: 'mood', correctAnswer: 'mysterious' },
        { id: 'time', placeholder: 'time', correctAnswer: 'rainy night' }
      ],
      ['empty street', 'neon signs', 'mysterious', 'rainy night', 'forest path', 'dappled sunlight', 'peaceful', 'autumn afternoon'],
      'Match lighting type with mood and time of day for cohesive atmosphere.',
      { title: 'Atmospheric!', message: "You've mastered lighting and mood!" },
      { title: 'Try again', message: 'Make sure lighting supports the mood you want.' },
      undefined,
      'Lighting is the key to emotional impact in your images.',
      `🌃 **Noir Street Scene**

**Mood Analysis:**

**Lighting: Neon Signs**
- Pink and blue neon reflections
- Wet pavement catching light
- Deep shadows between lights
- Color contrast creates visual tension

**Mood: Mysterious**
| Element | Contribution |
|---------|--------------|
| Empty street | Isolation, anticipation |
| Neon glow | Urban, slightly dangerous |
| Shadows | Hidden secrets |
| Reflections | Distorted reality |

**Atmosphere: Rainy Night**
- Wet surfaces multiply light sources
- Fog/mist diffuses neon
- Puddles create mirror effects
- Steam from vents adds texture

**Cinematic References:**
This lighting setup evokes:
- Blade Runner's neon-soaked streets
- Film noir's dramatic shadows
- Cyberpunk aesthetics

**Enhancement Ideas:**
1. Add "lone figure with umbrella" for narrative
2. Try "steam rising from manholes" for texture
3. Include "distant car headlights" for depth`
    ),
    createFeedbackBlock(
      'How important is lighting in your images?',
      ['Very important', 'Somewhat important', 'Not a priority'],
      0
    ),
    createDiscoveryBlock(
      7,
      'Light = Mood',
      'Lighting choices directly control the emotional impact of your images.'
    ),
  ],
};

export const dalleLesson2_4: CoursivLesson = {
  id: 'dalle-2-4',
  courseId: 'dall-e',
  title: 'Image Editing',
  subtitle: 'Modifying generated images',
  blocks: [
    createTextBlock(
      "Beyond Generation",
      "✏️",
      [
        "DALL-E isn't just for creating new images - it can also edit existing ones through inpainting and outpainting.",
        "These techniques let you refine, extend, or modify images to get exactly what you want.",
      ]
    ),
    createTextBlock(
      "Editing Techniques",
      "🔧",
      [
        "**Inpainting**: Replace or modify specific areas within an image",
        "**Outpainting**: Extend an image beyond its original borders",
        "**Variations**: Generate alternative versions of an existing image",
        "**Upscaling**: Increase resolution while adding detail",
      ]
    ),
    createPlaygroundBlock(
      'Planning an Edit',
      'Describe how you would edit an existing image.',
      { name: 'DALL-E', icon: '🎨' },
      'Take this image and [edit_type] the [area]. Replace it with [replacement] while maintaining [consistency].',
      [
        { id: 'edit_type', placeholder: 'edit type', correctAnswer: 'inpaint' },
        { id: 'area', placeholder: 'area', correctAnswer: 'background' },
        { id: 'replacement', placeholder: 'replacement', correctAnswer: 'a sunset beach' },
        { id: 'consistency', placeholder: 'consistency', correctAnswer: 'the lighting direction' }
      ],
      ['inpaint', 'background', 'a sunset beach', 'the lighting direction', 'outpaint', 'left side', 'more forest', 'the color palette'],
      'Consider what you want to change and what should stay consistent.',
      { title: 'Great edit plan!', message: "You understand image editing concepts!" },
      { title: 'Try again', message: 'Think about maintaining visual consistency.' },
      undefined,
      'Good edits maintain consistency with the original image\'s style and lighting.',
      `✏️ **Edit Plan Analysis**

**Edit Type: Inpainting**
Replacing a specific area while preserving the rest.

**Target Area: Background**
- Original background will be masked
- Subject/foreground preserved
- Edge blending applied

**Replacement: Sunset Beach**
New background elements:
- Ocean horizon line
- Warm sunset colors
- Sandy beach texture
- Gentle waves

**Consistency Check: Lighting Direction**

| Original | New Background | Match? |
|----------|----------------|--------|
| Light from right | Sunset on right | ✅ |
| Warm tones | Golden hour | ✅ |
| Soft shadows | Beach shadows | ✅ |

**Edit Process:**
1. Mask background area
2. Preserve subject edges
3. Generate beach scene
4. Blend edges seamlessly
5. Match color temperature

**Tips for Better Edits:**
- Always note original lighting direction
- Match color temperature between elements
- Use soft mask edges for natural blending
- Generate multiple variations to choose from`
    ),
    createFeedbackBlock(
      'Will you use image editing features?',
      ['Yes, definitely', 'Maybe', 'Prefer new generations'],
      0
    ),
    createDiscoveryBlock(
      8,
      'Edit & Refine',
      'Inpainting and outpainting let you perfect your images without starting over.'
    ),
  ],
};

export const dalleLesson2_Quiz: CoursivLesson = {
  id: 'dalle-2-quiz',
  courseId: 'dall-e',
  title: 'Intermediate Quiz',
  subtitle: 'Test your advanced skills',
  blocks: [
    createTextBlock(
      "Intermediate Assessment",
      "📝",
      [
        "Let's test your understanding of intermediate DALL-E techniques.",
        "These questions cover style, composition, lighting, and editing.",
      ]
    ),
    createQuizBlock(
      'Which style modifier would create a classic painting look?',
      [
        'Pixel art',
        'Oil painting with visible brushstrokes',
        '3D render',
        'Vector illustration'
      ],
      1,
      'Oil painting with visible brushstrokes creates a traditional, classic art appearance.',
      'Think about what makes paintings look "classic."'
    ),
    createQuizBlock(
      'What does "rule of thirds" help with?',
      [
        'Color selection',
        'Subject placement for dynamic composition',
        'Lighting direction',
        'Image resolution'
      ],
      1,
      'Rule of thirds guides subject placement off-center for more dynamic, interesting compositions.',
      'Consider where subjects are placed in professional photos.'
    ),
    createQuizBlock(
      'Which lighting creates the most dramatic mood?',
      [
        'Overcast, diffused light',
        'Rim lighting with deep shadows',
        'Flat studio lighting',
        'Soft ambient light'
      ],
      1,
      'Rim lighting with deep shadows creates high contrast and dramatic visual impact.',
      'Think about what makes images feel dramatic.'
    ),
    createQuizBlock(
      'What is "inpainting" used for?',
      [
        'Adding borders to images',
        'Replacing or modifying specific areas within an image',
        'Changing image file format',
        'Reducing image size'
      ],
      1,
      'Inpainting allows you to select and replace specific areas while keeping the rest intact.',
      'Think about editing parts of an image.'
    ),
    createDiscoveryBlock(
      9,
      'Intermediate Complete!',
      'Excellent! You\'ve mastered intermediate techniques. Ready for professional-level skills?'
    ),
  ],
};

// ============================================
// LEVEL 3: ADVANCED
// ============================================

export const dalleLesson3_1: CoursivLesson = {
  id: 'dalle-3-1',
  courseId: 'dall-e',
  title: 'Photorealistic Images',
  subtitle: 'Creating lifelike images',
  blocks: [
    createTextBlock(
      "The Art of Photorealism",
      "📸",
      [
        "Creating truly photorealistic images requires understanding camera settings, real-world physics, and subtle details.",
        "The key is using photography terminology and specifying technical details that cameras capture.",
      ]
    ),
    createTextBlock(
      "Photography Terms for DALL-E",
      "📷",
      [
        "**Camera Settings**: 85mm lens, f/1.8 aperture, shallow DOF",
        "**Film/Sensor**: shot on Kodak Portra 400, Sony A7III",
        "**Techniques**: long exposure, HDR, macro photography",
        "**Quality Markers**: 8K, ultra-detailed, professional photography",
      ]
    ),
    createPlaygroundBlock(
      'Creating Photorealistic Images',
      'Use photography terminology for lifelike results.',
      { name: 'DALL-E', icon: '🎨' },
      'Professional [subject] photography, shot on [camera], [lens] lens, [aperture] aperture, [lighting], [quality].',
      [
        { id: 'subject', placeholder: 'subject', correctAnswer: 'portrait' },
        { id: 'camera', placeholder: 'camera', correctAnswer: 'Canon 5D Mark IV' },
        { id: 'lens', placeholder: 'lens', correctAnswer: '85mm' },
        { id: 'aperture', placeholder: 'aperture', correctAnswer: 'f/1.4' },
        { id: 'lighting', placeholder: 'lighting', correctAnswer: 'natural window light' },
        { id: 'quality', placeholder: 'quality', correctAnswer: '8K ultra-detailed' }
      ],
      ['portrait', 'Canon 5D Mark IV', '85mm', 'f/1.4', 'natural window light', '8K ultra-detailed', 'product', 'Hasselblad', '100mm macro', 'f/8', 'studio softbox', '4K sharp'],
      'Use real camera terminology for authentic photorealistic results.',
      { title: 'Professional quality!', message: "You've mastered photorealistic prompts!" },
      { title: 'Try again', message: 'Use more specific photography terminology.' },
      undefined,
      'Real camera and lens specifications help DALL-E understand photographic aesthetics.',
      `📸 **Professional Portrait Analysis**

**Technical Specifications:**

**Camera: Canon 5D Mark IV**
- Full-frame sensor simulation
- Natural color science
- Professional dynamic range

**Lens: 85mm f/1.4**
| Setting | Effect |
|---------|--------|
| 85mm | Flattering compression |
| f/1.4 | Creamy bokeh |
| Wide open | Subject isolation |

**Lighting: Natural Window**
- Soft, directional light
- Gentle shadows
- Catchlights in eyes
- Natural skin tones

**Quality: 8K Ultra-Detailed**
- Skin texture visible
- Hair strand detail
- Fabric weave clarity
- Eye reflection detail

**Photorealistic Markers:**
✅ Realistic skin subsurface scattering
✅ Natural hair highlights
✅ Accurate shadow falloff
✅ Proper depth of field
✅ Film-like color grading

**Pro Enhancement:**
Add "shot during golden hour" or "Rembrandt lighting" for specific portrait styles.`
    ),
    createFeedbackBlock(
      'How useful is photorealistic generation for you?',
      ['Very useful', 'Somewhat useful', 'Prefer artistic styles'],
      0
    ),
    createDiscoveryBlock(
      10,
      'Photo-Real',
      'Photography terminology and camera specifications create convincingly real images.'
    ),
  ],
};

export const dalleLesson3_2: CoursivLesson = {
  id: 'dalle-3-2',
  courseId: 'dall-e',
  title: 'Brand & Marketing',
  subtitle: 'Commercial applications',
  blocks: [
    createTextBlock(
      "DALL-E for Business",
      "💼",
      [
        "DALL-E is increasingly used for commercial applications: product mockups, marketing materials, and brand content.",
        "Understanding how to create consistent, on-brand imagery is valuable for business applications.",
      ]
    ),
    createTextBlock(
      "Commercial Use Cases",
      "🎯",
      [
        "**Product Mockups**: Visualize products in different settings",
        "**Social Media**: Create engaging visual content",
        "**Advertising**: Generate ad concepts and variations",
        "**Packaging**: Design and visualize packaging concepts",
      ]
    ),
    createPlaygroundBlock(
      'Creating Marketing Content',
      'Design a commercial image for a product.',
      { name: 'DALL-E', icon: '🎨' },
      'Professional [product_type] advertisement, [setting], [style] aesthetic, [brand_feel], [composition] composition.',
      [
        { id: 'product_type', placeholder: 'product type', correctAnswer: 'skincare product' },
        { id: 'setting', placeholder: 'setting', correctAnswer: 'minimalist white background' },
        { id: 'style', placeholder: 'style', correctAnswer: 'clean and modern' },
        { id: 'brand_feel', placeholder: 'brand feel', correctAnswer: 'luxury and premium' },
        { id: 'composition', placeholder: 'composition', correctAnswer: 'hero product centered' }
      ],
      ['skincare product', 'minimalist white background', 'clean and modern', 'luxury and premium', 'hero product centered', 'tech gadget', 'lifestyle setting', 'bold and dynamic', 'innovative and cutting-edge', 'action shot'],
      'Consider the brand identity and target audience when creating commercial images.',
      { title: 'Marketing ready!', message: "You've created professional commercial content!" },
      { title: 'Try again', message: 'Think about brand consistency and appeal.' },
      undefined,
      'Commercial images need consistent style, clear focus, and brand alignment.',
      `💄 **Commercial Image Analysis**

**Product: Skincare**
**Target: Luxury Market**

**Visual Strategy:**

**Setting: Minimalist White**
- Clean, distraction-free
- Product as hero
- Premium perception
- Easy for compositing

**Style: Clean & Modern**
| Element | Treatment |
|---------|-----------|
| Lines | Crisp, geometric |
| Colors | Neutral, refined |
| Space | Generous white space |
| Details | Subtle, intentional |

**Brand Feel: Luxury & Premium**
- High-end photography style
- Soft, even lighting
- Reflective surfaces
- Quality materials visible

**Composition: Hero Centered**
- Product at focal point
- Symmetrical balance
- Eye-level perspective
- Space for text overlay

**Commercial Checklist:**
✅ Product clearly visible
✅ Brand-appropriate aesthetic
✅ Space for copy/logo
✅ Consistent lighting
✅ High resolution

**Variations to Generate:**
1. With lifestyle props (flowers, fabric)
2. In-use application shot
3. Ingredient highlight version`
    ),
    createFeedbackBlock(
      'Will you use DALL-E for commercial purposes?',
      ['Yes, regularly', 'Occasionally', 'Personal use only'],
      0
    ),
    createDiscoveryBlock(
      11,
      'Commercial Ready',
      'Brand consistency, clear composition, and professional quality are key for commercial use.'
    ),
  ],
};

export const dalleLesson3_Quiz: CoursivLesson = {
  id: 'dalle-3-quiz',
  courseId: 'dall-e',
  title: 'Advanced Quiz',
  subtitle: 'Final assessment',
  blocks: [
    createTextBlock(
      "Final Assessment",
      "🏆",
      [
        "Congratulations on reaching the advanced level!",
        "Pass this quiz to complete the DALL-E course and earn your certificate!",
      ]
    ),
    createQuizBlock(
      'Which prompt element helps create photorealistic images?',
      [
        'Cartoon style',
        'Specific camera and lens specifications',
        'Abstract shapes',
        'Pixel art aesthetic'
      ],
      1,
      'Real camera and lens specifications (like "85mm f/1.4") help DALL-E create photorealistic images.',
      'Think about what makes photos look real.'
    ),
    createQuizBlock(
      'For commercial product photography, what is most important?',
      [
        'Busy, complex backgrounds',
        'Clear product focus and brand-consistent styling',
        'Maximum artistic expression',
        'Random color choices'
      ],
      1,
      'Commercial images need clear product focus and consistent brand styling for marketing effectiveness.',
      'Consider what makes product photos effective.'
    ),
    createQuizBlock(
      'What does "f/1.4 aperture" indicate in a prompt?',
      [
        'Image file size',
        'Shallow depth of field with blurred background',
        'Color saturation level',
        'Image resolution'
      ],
      1,
      'A wide aperture like f/1.4 creates shallow depth of field, blurring the background and isolating the subject.',
      'Think about photography basics.'
    ),
    createDiscoveryBlock(
      12,
      'Course Complete!',
      'Congratulations! You\'ve mastered DALL-E from basics to professional techniques!'
    ),
  ],
};

// Export all lessons
export const dalleLessons: CoursivLesson[] = [
  // Level 1: Beginner
  dalleLesson1_1,
  dalleLesson1_2,
  dalleLesson1_3,
  dalleLesson1_Quiz,
  // Level 2: Intermediate
  dalleLesson2_1,
  dalleLesson2_2,
  dalleLesson2_3,
  dalleLesson2_4,
  dalleLesson2_Quiz,
  // Level 3: Advanced
  dalleLesson3_1,
  dalleLesson3_2,
  dalleLesson3_Quiz,
];
