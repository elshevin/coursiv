# 课程内容数据格式规范文档

## 一、概述

本文档定义了课程内容的统一数据格式，使得在前端组件完成后，只需填充数据即可生成完整课件。

**设计原则：**
- 语义化：每个字段都有明确的含义
- 可扩展：支持添加新的内容类型
- 模板化：便于批量生成课件内容

---

## 二、课程结构层级

```
Course (课程)
├── Module (模块)
│   ├── Lesson (课时)
│   │   └── Page (页面/步骤)
│   │       └── Content (内容块)
```

---

## 三、数据类型定义

### 3.1 课程 (Course)

```typescript
interface Course {
  id: string;
  title: string;                    // "Stable Diffusion"
  description: string;              // "Transform ideas into visuals with AI"
  icon: string;                     // 课程图标 URL
  category: string;                 // "AI MASTERY"
  level: number;                    // 1, 2, 3
  levelTitle: string;               // "Starting with Stable Diffusion"
  totalLessons: number;             // 14
  estimatedTime: string;            // "3 hours"
  modules: Module[];
}
```

### 3.2 模块 (Module)

```typescript
interface Module {
  id: string;
  title: string;                    // "Introduction to Stable Diffusion"
  description: string;              // "Transform ideas into visuals with AI"
  type: ModuleType;                 // 模块类型
  icon: ModuleIcon;                 // 图标类型
  status: 'locked' | 'available' | 'in_progress' | 'completed';
  lessons: Lesson[];
}

type ModuleType = 
  | 'content'      // 内容模块（阅读/听课）
  | 'practice'     // 练习模块（Playground）
  | 'quiz'         // 测试模块（选择题）
  | 'video'        // 视频模块
  | 'recap'        // 总结模块
  | 'takeaways';   // 要点回顾

type ModuleIcon = 
  | 'book'         // 紫色书本图标
  | 'star'         // 紫色星星图标
  | 'trophy'       // 奖杯图标
  | 'play'         // 播放图标
  | 'question';    // 问号图标
```

### 3.3 课时 (Lesson)

```typescript
interface Lesson {
  id: string;
  title: string;
  pages: Page[];
}
```

### 3.4 页面 (Page)

```typescript
interface Page {
  id: string;
  type: PageType;
  content: PageContent;
}

type PageType = 
  | 'intro'           // 介绍页（标题+描述+插图）
  | 'text'            // 文本页（标题+多段文本+插图）
  | 'quiz_single'     // 单选题
  | 'quiz_multiple'   // 多选题
  | 'playground'      // Playground 填空练习
  | 'task_card'       // 任务卡片（引导进入 Playground）
  | 'video'           // 视频页
  | 'recap'           // 总结页
  | 'completion';     // 完成页
```

---

## 四、页面内容类型详解

### 4.1 介绍页 (IntroPage)

```typescript
interface IntroPage {
  type: 'intro';
  content: {
    title: string;              // "Turn Words into Images"
    description: string;        // "The art world just got an upgrade..."
    image: string;              // 插图 URL
    imageAlt: string;           // 图片描述
  };
}
```

**示例数据：**
```json
{
  "type": "intro",
  "content": {
    "title": "Turn Words into Images",
    "description": "The art world just got an upgrade. Discover how to command an AI that transforms your wildest ideas into reality with the precision of a seasoned artist.",
    "image": "/images/lessons/sd-intro.svg",
    "imageAlt": "AI art creation concept"
  }
}
```

### 4.2 文本页 (TextPage)

```typescript
interface TextPage {
  type: 'text';
  content: {
    title: string;
    paragraphs: TextParagraph[];
    image?: string;
    imagePosition?: 'top' | 'bottom' | 'inline';
  };
}

interface TextParagraph {
  text: string;                 // 支持 **加粗** 和 *斜体* Markdown 语法
  highlight?: boolean;          // 是否高亮显示
}
```

**示例数据：**
```json
{
  "type": "text",
  "content": {
    "title": "What You Will Learn in This Course?",
    "paragraphs": [
      {
        "text": "Ever thought about creating stunning visuals with just words? In this course, you'll master **Stable Diffusion**, an AI tool to turn your ideas into images with no design skills required."
      },
      {
        "text": "As you move through the course, you'll gain a solid grasp of **prompt crafting, adjusting settings, and using advanced techniques**."
      }
    ],
    "image": "/images/lessons/sd-learning.svg",
    "imagePosition": "bottom"
  }
}
```

### 4.3 单选题 (QuizSinglePage)

```typescript
interface QuizSinglePage {
  type: 'quiz_single';
  content: {
    context?: {                 // 可选的上下文
      title: string;
      description: string;
    };
    question: string;           // "What's the main advantage of importing designs?"
    options: QuizOption[];
    correctAnswer: string;      // 正确答案的 id
    hint?: string;              // 提示文本
    explanation: string;        // 答案解释 "Exactly!"
  };
}

interface QuizOption {
  id: string;                   // "a", "b", "c", "d"
  text: string;                 // 选项文本
}
```

**示例数据：**
```json
{
  "type": "quiz_single",
  "content": {
    "context": {
      "title": "Designers + AI?",
      "description": "While designers create beautiful, user-focused interfaces, AI generates structure and functionality fast. Keep it in mind before answering the next question."
    },
    "question": "In your opinion, what's the main advantage of importing designs into Lovable?",
    "options": [
      { "id": "a", "text": "Imported designs never need any adjustments" },
      { "id": "b", "text": "It's faster than using text prompts" },
      { "id": "c", "text": "It's the only way to create websites in Lovable" },
      { "id": "d", "text": "You maintain professional design while getting functional code automatically" }
    ],
    "correctAnswer": "d",
    "hint": "Think about what makes design imports unique compared to other methods.",
    "explanation": "Exactly!"
  }
}
```

### 4.4 任务卡片页 (TaskCardPage)

```typescript
interface TaskCardPage {
  type: 'task_card';
  content: {
    contextTitle?: string;      // "Create a Complex Prompt"
    contextDescription?: string;
    task: {
      title: string;            // "Fill in the Missing Keywords"
      description: string;      // "Complete the following prompt..."
      buttonText: string;       // "Open Playground"
      playgroundId: string;     // 关联的 Playground ID
    };
    status?: 'pending' | 'completed';
  };
}
```

**示例数据：**
```json
{
  "type": "task_card",
  "content": {
    "contextTitle": "Create a Complex Prompt",
    "contextDescription": "Combine all the elements into one cohesive prompt. Pay attention to how each keyword works together to create a visually compelling and technically accurate image.",
    "task": {
      "title": "Fill in the Missing Keywords",
      "description": "Complete the following prompt by adding the missing subject, medium, and style keywords.",
      "buttonText": "Open Playground",
      "playgroundId": "sd-complex-prompt-1"
    }
  }
}
```

### 4.5 Playground 填空练习 (PlaygroundPage)

```typescript
interface PlaygroundPage {
  type: 'playground';
  content: {
    id: string;
    title: string;              // "Create a Landscape Prompt"
    description: string;        // "Complete the prompt to generate..."
    aiTool: {
      name: string;             // "Stable Diffusion"
      icon: string;             // 图标 URL
    };
    promptTemplate: PromptSegment[];
    options: string[];          // ["misty", "rolling hills", "impressionism"]
    correctAnswers: Record<string, string>;
    resultImage: string;        // 预生成的结果图片 URL
    successFeedback: {
      title: string;            // "Amazing!"
      message: string;          // "You're right on track with your approach"
    };
  };
}

interface PromptSegment {
  type: 'text' | 'blank';
  content: string;              // 文本内容或占位符 ID
  label?: string;               // 占位符显示标签
}
```

**示例数据：**
```json
{
  "type": "playground",
  "content": {
    "id": "sd-landscape-1",
    "title": "Create a Landscape Prompt",
    "description": "Complete the prompt to generate a detailed landscape image.",
    "aiTool": {
      "name": "Stable Diffusion",
      "icon": "/icons/stable-diffusion.svg"
    },
    "promptTemplate": [
      { "type": "text", "content": "Generate a " },
      { "type": "blank", "content": "description", "label": "description" },
      { "type": "text", "content": " landscape with " },
      { "type": "blank", "content": "object", "label": "object" },
      { "type": "text", "content": " and light rain in the " },
      { "type": "blank", "content": "style", "label": "style" },
      { "type": "text", "content": " style." }
    ],
    "options": ["misty", "rolling hills", "impressionism"],
    "correctAnswers": {
      "description": "misty",
      "object": "rolling hills",
      "style": "impressionism"
    },
    "resultImage": "/images/playground/landscape-misty-hills.jpg",
    "successFeedback": {
      "title": "Amazing!",
      "message": "You're right on track with your approach"
    }
  }
}
```

### 4.6 视频页 (VideoPage)

```typescript
interface VideoPage {
  type: 'video';
  content: {
    title: string;
    description?: string;
    videoUrl: string;           // 视频 URL
    thumbnail?: string;         // 缩略图
    duration?: string;          // "5:30"
  };
}
```

### 4.7 总结页 (RecapPage)

```typescript
interface RecapPage {
  type: 'recap';
  content: {
    title: string;              // "Stable Diffusion Recap"
    summary: string;            // 总结文本
    keyPoints: string[];        // 要点列表
    nextSteps?: {
      title: string;
      description: string;
    };
  };
}
```

### 4.8 完成页 (CompletionPage)

```typescript
interface CompletionPage {
  type: 'completion';
  content: {
    title: string;              // "Great job!"
    message: string;            // "Now, let's move on to something more complex."
    taskSummary?: {
      title: string;
      status: 'completed';
      repeatButtonText?: string; // "Repeat task"
    };
  };
}
```

---

## 五、完整课程示例

```json
{
  "id": "stable-diffusion",
  "title": "Stable Diffusion",
  "description": "Transform ideas into visuals with AI",
  "icon": "/icons/courses/stable-diffusion.svg",
  "category": "AI MASTERY",
  "level": 1,
  "levelTitle": "Starting with Stable Diffusion",
  "totalLessons": 14,
  "estimatedTime": "3 hours",
  "modules": [
    {
      "id": "intro-sd",
      "title": "Introduction to Stable Diffusion",
      "description": "Transform ideas into visuals with AI",
      "type": "content",
      "icon": "book",
      "status": "available",
      "lessons": [
        {
          "id": "intro-sd-1",
          "title": "Getting Started",
          "pages": [
            {
              "id": "intro-sd-1-1",
              "type": "intro",
              "content": {
                "title": "Turn Words into Images",
                "description": "The art world just got an upgrade...",
                "image": "/images/lessons/sd-intro.svg"
              }
            },
            {
              "id": "intro-sd-1-2",
              "type": "text",
              "content": {
                "title": "What You Will Learn",
                "paragraphs": [
                  { "text": "In this course, you'll master **Stable Diffusion**..." }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "id": "practice-sd",
      "title": "Practice Newly Acquired Skills",
      "description": "Apply what you've learned",
      "type": "practice",
      "icon": "star",
      "status": "locked",
      "lessons": [
        {
          "id": "practice-sd-1",
          "title": "Prompt Crafting Practice",
          "pages": [
            {
              "id": "practice-sd-1-1",
              "type": "intro",
              "content": {
                "title": "Let's Practice",
                "description": "Time to put your knowledge to the test...",
                "image": "/images/lessons/practice-intro.svg"
              }
            },
            {
              "id": "practice-sd-1-2",
              "type": "task_card",
              "content": {
                "task": {
                  "title": "Create a Landscape Prompt",
                  "description": "Complete the prompt to generate a detailed landscape image.",
                  "buttonText": "Open Playground",
                  "playgroundId": "sd-landscape-1"
                }
              }
            },
            {
              "id": "practice-sd-1-3",
              "type": "playground",
              "content": {
                "id": "sd-landscape-1",
                "title": "Create a Landscape Prompt",
                "description": "Complete the prompt to generate a detailed landscape image.",
                "aiTool": {
                  "name": "Stable Diffusion",
                  "icon": "/icons/stable-diffusion.svg"
                },
                "promptTemplate": [
                  { "type": "text", "content": "Generate a " },
                  { "type": "blank", "content": "description", "label": "description" },
                  { "type": "text", "content": " landscape with " },
                  { "type": "blank", "content": "object", "label": "object" },
                  { "type": "text", "content": " and light rain in the " },
                  { "type": "blank", "content": "style", "label": "style" },
                  { "type": "text", "content": " style." }
                ],
                "options": ["misty", "rolling hills", "impressionism"],
                "correctAnswers": {
                  "description": "misty",
                  "object": "rolling hills",
                  "style": "impressionism"
                },
                "resultImage": "/images/playground/landscape-misty-hills.jpg",
                "successFeedback": {
                  "title": "Amazing!",
                  "message": "You're right on track with your approach"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "quiz-sd",
      "title": "Test Your Knowledge",
      "description": "Apply new concepts in complex scenarios",
      "type": "quiz",
      "icon": "star",
      "status": "locked",
      "lessons": [
        {
          "id": "quiz-sd-1",
          "title": "Advanced Prompt Engineering Test",
          "pages": [
            {
              "id": "quiz-sd-1-1",
              "type": "intro",
              "content": {
                "title": "Advanced Prompt Engineering Test",
                "description": "You've learned about Subject, Medium, Style...",
                "image": "/images/lessons/quiz-intro.svg"
              }
            },
            {
              "id": "quiz-sd-1-2",
              "type": "quiz_single",
              "content": {
                "question": "Which element is most important for defining the visual style?",
                "options": [
                  { "id": "a", "text": "Subject" },
                  { "id": "b", "text": "Medium" },
                  { "id": "c", "text": "Style" },
                  { "id": "d", "text": "Resolution" }
                ],
                "correctAnswer": "c",
                "explanation": "Style defines the overall visual aesthetic of the image."
              }
            }
          ]
        }
      ]
    }
  ]
}
```

---

## 六、模拟数据生成指南

### 6.1 图片资源

**Playground 结果图片：**
- 使用 AI 工具（如 Stable Diffusion、DALL-E）预先生成
- 根据正确的 Prompt 生成对应图片
- 保存到 `/public/images/playground/` 目录

**课程插图：**
- 使用 SVG 或 PNG 格式
- 保存到 `/public/images/lessons/` 目录
- 建议使用抽象、现代风格的插图

### 6.2 数据文件组织

```
/shared/courseData/
├── courses/
│   ├── stable-diffusion.ts
│   ├── chatgpt.ts
│   └── midjourney.ts
├── playgrounds/
│   ├── sd-landscape-1.ts
│   ├── sd-portrait-1.ts
│   └── sd-scene-1.ts
├── types.ts                    // 类型定义
└── index.ts                    // 导出所有数据
```

### 6.3 后续替换为真实数据

当需要替换为真实数据时：

1. **API 集成**：将静态 JSON 替换为 API 调用
2. **CMS 集成**：使用 Headless CMS（如 Strapi、Contentful）管理内容
3. **数据库存储**：将课程数据存储到数据库

```typescript
// 当前：静态数据
import { stableDiffusionCourse } from '@/shared/courseData';

// 未来：API 调用
const course = await fetch('/api/courses/stable-diffusion').then(r => r.json());

// 未来：CMS 集成
const course = await cms.getCourse('stable-diffusion');
```

---

## 七、前端组件映射

| 页面类型 | 前端组件 |
|---------|---------|
| intro | `<IntroPage />` |
| text | `<TextPage />` |
| quiz_single | `<QuizSinglePage />` |
| quiz_multiple | `<QuizMultiplePage />` |
| playground | `<PlaygroundPage />` |
| task_card | `<TaskCardPage />` |
| video | `<VideoPage />` |
| recap | `<RecapPage />` |
| completion | `<CompletionPage />` |

---

## 八、总结

本数据格式规范提供了：

1. **完整的类型定义**：覆盖所有 Coursiv 课程内容类型
2. **语义化的数据结构**：便于理解和维护
3. **模板化的设计**：便于批量生成课件
4. **可扩展的架构**：支持添加新的内容类型
5. **清晰的替换路径**：从模拟数据到真实数据的平滑过渡

**下一步行动：**
1. 确认数据格式
2. 生成 3-5 个 Playground 练习的模拟数据
3. 使用 AI 生成对应的结果图片
4. 开发前端组件
5. 集成测试
