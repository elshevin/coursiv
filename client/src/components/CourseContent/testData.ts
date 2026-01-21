import type { Lesson } from './types';

// Test lesson data for iteration 1
export const testLesson: Lesson = {
  id: 'test-lesson-1',
  title: 'Introduction to Stable Diffusion',
  pages: [
    {
      id: 'page-1',
      type: 'intro',
      content: {
        title: 'Turn Words into Images',
        description: 'The art world just got an upgrade. Discover how to command an AI that transforms your wildest ideas into reality with the precision of a seasoned artist.',
        image: '🎨'
      }
    },
    {
      id: 'page-2',
      type: 'text',
      content: {
        title: 'What You Will Learn in This Course?',
        paragraphs: [
          {
            text: 'Ever thought about creating stunning visuals with just words? In this course, you\'ll master **Stable Diffusion**, an AI tool to turn your ideas into images with no design skills required.'
          },
          {
            text: 'As you move through the course, you\'ll gain a solid grasp of **prompt crafting, adjusting settings, and using advanced techniques**.'
          },
          {
            text: 'By the end, you\'ll be able to create professional-quality images for any purpose—whether it\'s for social media, presentations, or personal projects.',
            highlight: true
          }
        ],
        image: '💡',
        imagePosition: 'bottom'
      }
    },
    {
      id: 'page-3',
      type: 'text',
      content: {
        title: 'How Stable Diffusion Works',
        paragraphs: [
          {
            text: '**Stable Diffusion** is a type of AI called a "diffusion model." It works by starting with random noise and gradually refining it into a coherent image based on your text prompt.'
          },
          {
            text: 'Think of it like a sculptor starting with a block of marble. The AI chips away at the noise, guided by your words, until a beautiful image emerges.'
          },
          {
            text: 'The key to getting great results is learning how to write effective prompts. A good prompt is specific, descriptive, and includes details about style, lighting, and composition.'
          }
        ],
        image: '🖼️',
        imagePosition: 'top'
      }
    }
  ]
};

// More test data for quiz (iteration 2)
export const testLessonWithQuiz: Lesson = {
  id: 'test-lesson-quiz',
  title: 'Test Your Knowledge',
  pages: [
    {
      id: 'quiz-intro',
      type: 'intro',
      content: {
        title: 'Let\'s Test Your Knowledge',
        description: 'You\'ve learned about Stable Diffusion basics. Now let\'s see how much you remember!',
        image: '🧠'
      }
    },
    {
      id: 'quiz-1',
      type: 'quiz_single',
      content: {
        context: {
          title: 'Understanding Prompts',
          description: 'A good prompt is the key to getting great results from Stable Diffusion.'
        },
        question: 'What makes a prompt effective for Stable Diffusion?',
        options: [
          { id: 'a', text: 'Using as few words as possible' },
          { id: 'b', text: 'Being specific and descriptive about style, lighting, and composition' },
          { id: 'c', text: 'Using only technical terms' },
          { id: 'd', text: 'Writing in a foreign language' }
        ],
        correctAnswer: 'b',
        hint: 'Think about what information the AI needs to create your vision.',
        explanation: 'Exactly! Specific and descriptive prompts help the AI understand exactly what you want to create.'
      }
    }
  ]
};

// Test data for playground (iteration 3-4)
export const testLessonWithPlayground: Lesson = {
  id: 'test-lesson-playground',
  title: 'Practice Prompt Crafting',
  pages: [
    {
      id: 'playground-intro',
      type: 'intro',
      content: {
        title: 'Let\'s Practice',
        description: 'Time to put your knowledge to the test. Complete the prompts to generate amazing images!',
        image: '✨'
      }
    },
    {
      id: 'task-1',
      type: 'task_card',
      content: {
        contextTitle: 'Create a Landscape Prompt',
        contextDescription: 'Combine all the elements into one cohesive prompt. Pay attention to how each keyword works together.',
        task: {
          title: 'Fill in the Missing Keywords',
          description: 'Complete the following prompt by adding the missing description, object, and style keywords.',
          buttonText: 'Open Playground',
          playgroundId: 'playground-1'
        }
      }
    },
    {
      id: 'playground-1',
      type: 'playground',
      content: {
        id: 'playground-1',
        title: 'Create a Landscape Prompt',
        description: 'Complete the prompt to generate a detailed landscape image.',
        aiTool: {
          name: 'Stable Diffusion',
          icon: '🎨'
        },
        promptTemplate: [
          { type: 'text', content: 'Generate a ' },
          { type: 'blank', content: 'description', label: 'description' },
          { type: 'text', content: ' landscape with ' },
          { type: 'blank', content: 'object', label: 'object' },
          { type: 'text', content: ' and light rain in the ' },
          { type: 'blank', content: 'style', label: 'style' },
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
          message: 'You\'re right on track with your approach'
        }
      }
    }
  ]
};

export default testLesson;
