// Playground 测试数据 - 包含 5 个完整的 Playground 练习
// 图片已由 AI 预生成，存储在 public/images/playground/ 目录

import { PlaygroundContent } from './types';

export const playgroundExercises: PlaygroundContent[] = [
  // 练习 1: 风景画（印象派风格）
  {
    title: 'Create a Landscape Prompt',
    description: 'Complete the prompt to generate a detailed landscape image.',
    aiTool: {
      name: 'Stable Diffusion',
      icon: '🎨'
    },
    promptTemplate: [
      { type: 'text', content: 'Generate a ' },
      { type: 'blank', label: 'description' },
      { type: 'text', content: ' landscape with ' },
      { type: 'blank', label: 'object' },
      { type: 'text', content: ' and light rain in the ' },
      { type: 'blank', label: 'style' },
      { type: 'text', content: ' style.' }
    ],
    options: ['misty', 'rolling hills', 'impressionism'],
    correctAnswers: {
      description: 'misty',
      object: 'rolling hills',
      style: 'impressionism'
    },
    resultImage: '/images/playground/landscape-impressionism.jpg',
    successFeedback: {
      title: 'Amazing!',
      message: "You're right on track with your approach"
    }
  },

  // 练习 2: 日式花园（吉卜力风格）
  {
    title: 'Painting the Scene',
    description: 'Fill in the missing parts of this AI art prompt to complete the scene.',
    aiTool: {
      name: 'Stable Diffusion',
      icon: '🎨'
    },
    promptTemplate: [
      { type: 'text', content: 'A serene ' },
      { type: 'blank', label: 'place' },
      { type: 'text', content: ' at sunset, with cherry blossoms floating on a ' },
      { type: 'blank', label: 'water' },
      { type: 'text', content: ', painted in the style of ' },
      { type: 'blank', label: 'style' },
      { type: 'text', content: '.' }
    ],
    options: ['Japanese garden', 'koi pond', 'Studio Ghibli'],
    correctAnswers: {
      place: 'Japanese garden',
      water: 'koi pond',
      style: 'Studio Ghibli'
    },
    resultImage: '/images/playground/japanese-garden-ghibli.jpg',
    successFeedback: {
      title: 'Amazing!',
      message: "You're right on track with your approach"
    }
  },

  // 练习 3: 科学家肖像
  {
    title: 'Portrait Prompt Builder',
    description: 'Create a prompt for generating a professional portrait.',
    aiTool: {
      name: 'Midjourney',
      icon: '🖼️'
    },
    promptTemplate: [
      { type: 'text', content: 'A portrait of a ' },
      { type: 'blank', label: 'profession' },
      { type: 'text', content: ' in a modern ' },
      { type: 'blank', label: 'location' },
      { type: 'text', content: ', ' },
      { type: 'blank', label: 'style' },
      { type: 'text', content: ' style.' }
    ],
    options: ['brilliant scientist', 'laboratory', 'realistic digital painting'],
    correctAnswers: {
      profession: 'brilliant scientist',
      location: 'laboratory',
      style: 'realistic digital painting'
    },
    resultImage: '/images/playground/scientist-portrait.jpg',
    successFeedback: {
      title: 'Perfect!',
      message: 'Your prompt will generate an amazing portrait'
    }
  },

  // 练习 4: 未来城市
  {
    title: 'Cyberpunk City Generator',
    description: 'Build a prompt for a futuristic cityscape.',
    aiTool: {
      name: 'DALL-E',
      icon: '🌆'
    },
    promptTemplate: [
      { type: 'text', content: 'A ' },
      { type: 'blank', label: 'setting' },
      { type: 'text', content: ' at night with ' },
      { type: 'blank', label: 'elements' },
      { type: 'text', content: ', ' },
      { type: 'blank', label: 'style' },
      { type: 'text', content: ' style.' }
    ],
    options: ['futuristic city', 'neon lights and flying vehicles', 'cyberpunk digital art'],
    correctAnswers: {
      setting: 'futuristic city',
      elements: 'neon lights and flying vehicles',
      style: 'cyberpunk digital art'
    },
    resultImage: '/images/playground/futuristic-city.jpg',
    successFeedback: {
      title: 'Excellent!',
      message: 'Your cyberpunk city prompt is ready to generate'
    }
  },

  // 练习 5: 抽象艺术
  {
    title: 'Abstract Art Creator',
    description: 'Craft a prompt for surrealist abstract artwork.',
    aiTool: {
      name: 'Stable Diffusion',
      icon: '🎭'
    },
    promptTemplate: [
      { type: 'text', content: 'An abstract ' },
      { type: 'blank', label: 'style' },
      { type: 'text', content: ' artwork featuring ' },
      { type: 'blank', label: 'elements' },
      { type: 'text', content: ', inspired by ' },
      { type: 'blank', label: 'artist' },
      { type: 'text', content: '.' }
    ],
    options: ['surrealist', 'floating geometric shapes and melting clocks', 'Salvador Dali'],
    correctAnswers: {
      style: 'surrealist',
      elements: 'floating geometric shapes and melting clocks',
      artist: 'Salvador Dali'
    },
    resultImage: '/images/playground/abstract-surrealism.jpg',
    successFeedback: {
      title: 'Masterpiece!',
      message: 'Your surrealist prompt captures the essence perfectly'
    }
  }
];

// 导出单个练习用于测试
export const testPlaygroundExercise = playgroundExercises[0];

// 导出完整课程数据（包含多个 Playground 练习）
export const playgroundLessonData = {
  id: 'playground-lesson-1',
  title: 'AI Art Prompt Mastery',
  description: 'Learn to craft effective prompts for AI image generation',
  pages: [
    // 介绍页
    {
      type: 'intro' as const,
      content: {
        title: 'Welcome to AI Art Prompts',
        description: 'In this lesson, you will learn how to write effective prompts for AI image generation tools like Stable Diffusion, Midjourney, and DALL-E.',
        image: '/images/ai-art-intro.svg'
      }
    },
    // 文本页
    {
      type: 'text' as const,
      content: {
        title: 'The Anatomy of a Good Prompt',
        paragraphs: [
          'A well-crafted AI art prompt typically includes several key elements:',
          '**Subject**: What is the main focus of the image? (e.g., "a landscape", "a portrait", "a city")',
          '**Description**: What details should be included? (e.g., "misty", "futuristic", "serene")',
          '**Style**: What artistic style should be applied? (e.g., "impressionism", "cyberpunk", "Studio Ghibli")',
          "Let's practice building prompts step by step!"
        ]
      }
    },
    // 任务卡片 1
    {
      type: 'task_card' as const,
      content: {
        title: 'Create a Landscape Prompt',
        description: 'Your first challenge is to complete a prompt for generating a beautiful landscape image.',
        task: {
          icon: '🎨',
          title: 'Landscape Prompt Builder',
          description: 'Fill in the blanks to create a complete prompt'
        }
      }
    },
    // Playground 1
    {
      type: 'playground' as const,
      content: playgroundExercises[0]
    },
    // 任务卡片 2
    {
      type: 'task_card' as const,
      content: {
        title: 'Painting the Scene',
        description: 'Now try creating a prompt for a Japanese garden scene.',
        task: {
          icon: '🌸',
          title: 'Japanese Garden Prompt',
          description: 'Complete the prompt with the right elements'
        }
      }
    },
    // Playground 2
    {
      type: 'playground' as const,
      content: playgroundExercises[1]
    },
    // 完成页
    {
      type: 'completion' as const,
      content: {
        title: 'Lesson Complete!',
        message: 'You have successfully learned how to craft AI art prompts.',
        nextAction: 'Continue to the next lesson'
      }
    }
  ]
};
