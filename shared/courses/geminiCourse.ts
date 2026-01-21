/**
 * Gemini Course - Complete Lesson Data
 * 
 * Course Structure:
 * - Level 1 (Beginner): 4 modules (gemini-1-1 to gemini-1-quiz)
 * - Level 2 (Intermediate): 4 modules (gemini-2-1 to gemini-2-quiz)
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

export const geminiLesson1_1: CoursivLesson = {
  id: 'gemini-1-1',
  courseId: 'gemini',
  title: 'Introduction to Gemini',
  subtitle: 'Understanding Gemini\'s capabilities',
  blocks: [
    createTextBlock(
      "What is Gemini?",
      "✨",
      [
        "Gemini is Google's most capable AI model, designed from the ground up to be multimodal - meaning it can understand and work with text, images, audio, video, and code.",
        "It represents Google's most advanced AI technology, integrated across their products from Search to Workspace.",
      ]
    ),
    createTextBlock(
      "Gemini's Unique Strengths",
      "💪",
      [
        "**Multimodal Native**: Built to understand multiple types of content together",
        "**Google Integration**: Seamlessly works with Google Workspace, Search, and more",
        "**Reasoning**: Strong logical and mathematical reasoning capabilities",
        "**Code Understanding**: Excellent at understanding and generating code",
      ]
    ),
    createPlaygroundBlock(
      'Your First Gemini Prompt',
      'Start a conversation with Gemini.',
      { name: 'Gemini', icon: '✨', logo: '/images/ai-tools/gemini.jpg' },
      'Help me [task] by [approach]. I want the output in [format].',
      [
        { id: 'task', placeholder: 'task', correctAnswer: 'plan my week' },
        { id: 'approach', placeholder: 'approach', correctAnswer: 'considering my priorities' },
        { id: 'format', placeholder: 'format', correctAnswer: 'a structured schedule' }
      ],
      ['plan my week', 'considering my priorities', 'a structured schedule'],
      'Gemini excels at structured tasks and organization.',
      { title: 'Great start!', message: "You've engaged Gemini effectively!" },
      { title: 'Try again', message: 'Be specific about your task and desired format.' },
      '/images/course/gemini/gemini-first.jpg',
      'Gemini works well with structured requests that specify the desired output format.',
      `I'd be happy to help you plan your week! Let me create a structured schedule based on your priorities.

**Weekly Planning Framework**

**Step 1: Priority Assessment**
Before we build your schedule, let's identify:
- 🔴 High Priority (Must complete)
- 🟡 Medium Priority (Should complete)
- 🟢 Low Priority (Nice to complete)

**Step 2: Time Block Template**

| Time Block | Monday | Tuesday | Wednesday | Thursday | Friday |
|------------|--------|---------|-----------|----------|--------|
| Morning (9-12) | Deep work | Meetings | Deep work | Meetings | Review |
| Afternoon (1-4) | Tasks | Tasks | Tasks | Tasks | Planning |
| Evening (4-6) | Admin | Admin | Admin | Admin | Wrap-up |

**Step 3: Weekly Structure**
\`\`\`
📅 Monday: Week kickoff, tackle hardest tasks
📅 Tuesday: Collaboration and meetings
📅 Wednesday: Mid-week deep work
📅 Thursday: Project progress
📅 Friday: Review and next week prep
\`\`\`

**To Customize This:**
Please share:
1. Your top 3 priorities this week
2. Any fixed commitments (meetings, deadlines)
3. Your most productive time of day

I'll create a personalized schedule based on your input!`
    , true),
    createFeedbackBlock(
      'How intuitive is Gemini to use?',
      ['Very intuitive', 'Somewhat intuitive', 'Takes practice'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Meet Gemini',
      'Gemini is Google\'s multimodal AI, excelling at structured tasks and Google integration.'
    ),
  ],
};

export const geminiLesson1_2: CoursivLesson = {
  id: 'gemini-1-2',
  courseId: 'gemini',
  title: 'Text Generation',
  subtitle: 'Creating content with Gemini',
  blocks: [
    createTextBlock(
      "Gemini for Writing",
      "✍️",
      [
        "Gemini is highly capable at generating various types of text content, from creative writing to technical documentation.",
        "Its integration with Google Docs makes it particularly useful for document creation and editing.",
      ]
    ),
    createTextBlock(
      "Writing Capabilities",
      "📝",
      [
        "**Creative Writing**: Stories, poems, scripts, and creative content",
        "**Business Writing**: Emails, reports, proposals, and presentations",
        "**Technical Writing**: Documentation, guides, and explanations",
        "**Editing**: Improving, summarizing, and reformatting existing text",
      ]
    ),
    createPlaygroundBlock(
      'Creating Content',
      'Use Gemini to generate written content.',
      { name: 'Gemini', icon: '✨', logo: '/images/ai-tools/gemini.jpg' },
      'Write a [content_type] about [topic] for [audience]. The tone should be [tone].',
      [
        { id: 'content_type', placeholder: 'content type', correctAnswer: 'blog post' },
        { id: 'topic', placeholder: 'topic', correctAnswer: 'productivity tips' },
        { id: 'audience', placeholder: 'audience', correctAnswer: 'remote workers' },
        { id: 'tone', placeholder: 'tone', correctAnswer: 'friendly and practical' }
      ],
      ['blog post', 'productivity tips', 'remote workers', 'friendly and practical'],
      'Specify content type, topic, audience, and tone for best results.',
      { title: 'Content created!', message: "You've generated great content with Gemini!" },
      { title: 'Try again', message: 'Be more specific about your content needs.' },
      '/images/course/gemini/gemini-content.jpg',
      'Always specify your audience and tone for more targeted content.',
      `Here's a friendly, practical blog post for remote workers:

---

# 🏠 5 Productivity Tips That Actually Work for Remote Workers

*Because "just be more disciplined" isn't helpful advice*

Hey there, fellow remote worker! 👋

If you've ever found yourself still in pajamas at 2 PM wondering where the day went, you're not alone. After years of working from home, I've discovered what actually moves the needle on productivity.

## 1. Create a "Commute" Ritual ☕

**The Problem:** Without a commute, work and life blur together.

**The Fix:** Create a 10-minute ritual that signals "work mode":
- Make your coffee
- Take a short walk
- Review your daily priorities

This mental transition is game-changing.

## 2. Time-Block Like Your Calendar Depends on It 📅

| Block | Purpose | Pro Tip |
|-------|---------|---------|
| 9-11 AM | Deep work | No Slack, no email |
| 11-12 PM | Meetings | Batch them together |
| 1-3 PM | Collaborative work | Open for interruptions |
| 3-5 PM | Admin tasks | Emails, planning |

## 3. The "Two-Minute Rule" for Small Tasks ⚡

If it takes less than 2 minutes, do it now. Seriously. That quick reply, that file rename, that calendar update—just do it.

## 4. Invest in Your Environment 🪴

Your workspace affects your mindset:
- Good lighting (natural if possible)
- A plant or two
- Noise-canceling headphones
- A comfortable chair

## 5. End Your Day with a "Shutdown Ritual" 🌅

Before closing your laptop:
- Write tomorrow's top 3 priorities
- Clear your desk
- Say "shutdown complete" (yes, out loud!)

---

**The Bottom Line:** Remote work productivity isn't about working more—it's about working intentionally.

*What's your best remote work tip? Drop it in the comments!*`
    , true),
    createFeedbackBlock(
      'How useful is Gemini for writing tasks?',
      ['Very useful', 'Somewhat useful', 'Need more practice'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Writing Partner',
      'Gemini excels at various writing tasks when you specify content type, audience, and tone.'
    ),
  ],
};

export const geminiLesson1_3: CoursivLesson = {
  id: 'gemini-1-3',
  courseId: 'gemini',
  title: 'Image Understanding',
  subtitle: 'Multimodal capabilities',
  blocks: [
    createTextBlock(
      "Gemini Sees Images",
      "👁️",
      [
        "One of Gemini's most powerful features is its ability to understand and analyze images alongside text.",
        "You can upload images and ask Gemini to describe, analyze, extract information, or answer questions about them.",
      ]
    ),
    createTextBlock(
      "Image Capabilities",
      "🖼️",
      [
        "**Description**: Detailed descriptions of image contents",
        "**Analysis**: Understanding context, mood, and composition",
        "**Text Extraction**: Reading text from images (OCR)",
        "**Q&A**: Answering specific questions about images",
      ]
    ),
    createPlaygroundBlock(
      'Working with Images',
      'Learn how to prompt Gemini about images.',
      { name: 'Gemini', icon: '✨', logo: '/images/ai-tools/gemini.jpg' },
      'Looking at this image, please [task]. Focus on [focus_area] and provide [output_type].',
      [
        { id: 'task', placeholder: 'task', correctAnswer: 'identify all the objects' },
        { id: 'focus_area', placeholder: 'focus area', correctAnswer: 'the main subject' },
        { id: 'output_type', placeholder: 'output type', correctAnswer: 'a detailed list' }
      ],
      ['identify all the objects', 'the main subject', 'a detailed list'],
      'Be specific about what you want Gemini to analyze in the image.',
      { title: 'Image analysis ready!', message: "You understand multimodal prompting!" },
      { title: 'Try again', message: 'Specify what aspect of the image to focus on.' },
      '/images/course/gemini/gemini-images.jpg',
      'Gemini can analyze images for objects, text, data, and contextual information.',
      `I'll analyze the image systematically, focusing on the main subject and providing a detailed list.

**Image Analysis Report**

**Main Subject Identification:**
🎯 Primary Focus: [Detected main subject]

**Detailed Object List:**

| Category | Objects Detected | Confidence |
|----------|-----------------|------------|
| **Foreground** | | |
| | Object 1 | High |
| | Object 2 | High |
| **Background** | | |
| | Element 1 | Medium |
| | Element 2 | High |
| **Text/Labels** | | |
| | Any visible text | - |

**Spatial Relationships:**
- Main subject positioned: [location]
- Relative to other objects: [relationships]

**Additional Observations:**
- Lighting conditions: [description]
- Color palette: [dominant colors]
- Image quality: [assessment]
- Potential context: [interpretation]

**Extracted Information:**
\`\`\`
[Any text, numbers, or data visible in the image]
\`\`\`

**Confidence Assessment:**
- Object detection: High confidence
- Text extraction: [confidence level]
- Context interpretation: Medium confidence

Would you like me to focus on any specific aspect of this image?`
    , true),
    createFeedbackBlock(
      'How useful is image understanding for you?',
      ['Very useful', 'Somewhat useful', 'Haven\'t tried it yet'],
      0
    ),
    createDiscoveryBlock(
      3,
      'Multimodal Power',
      'Gemini can analyze images for objects, text, and context - ask specific questions for best results.'
    ),
  ],
};

export const geminiLesson1_Quiz: CoursivLesson = {
  id: 'gemini-1-quiz',
  courseId: 'gemini',
  title: 'Beginner Quiz',
  subtitle: 'Test your Gemini knowledge',
  blocks: [
    createTextBlock(
      "Beginner Assessment",
      "📝",
      [
        "Let's test what you've learned about Gemini basics!",
        "Pass this quiz to unlock intermediate techniques.",
      ]
    ),
    createQuizBlock(
      'What company created Gemini?',
      [
        'OpenAI',
        'Anthropic',
        'Google',
        'Microsoft'
      ],
      2,
      'Gemini is Google\'s most advanced AI model.',
      'Think about Gemini\'s integration with other products.'
    ),
    createQuizBlock(
      'What does "multimodal" mean for Gemini?',
      [
        'It can only process text',
        'It can understand text, images, audio, video, and code',
        'It works on multiple devices',
        'It has multiple versions'
      ],
      1,
      'Multimodal means Gemini can process and understand multiple types of content together.',
      'Consider the different types of input Gemini can handle.'
    ),
    createQuizBlock(
      'What should you specify for better writing results?',
      [
        'Only the topic',
        'Content type, topic, audience, and tone',
        'Just the word count',
        'Only the format'
      ],
      1,
      'Specifying content type, topic, audience, and tone helps Gemini generate more targeted content.',
      'Think about what information helps create better content.'
    ),
    createDiscoveryBlock(
      4,
      'Beginner Complete!',
      'Great job! You understand Gemini basics. Ready for code and data analysis?'
    ),
  ],
};

// ============================================
// LEVEL 2: INTERMEDIATE
// ============================================

export const geminiLesson2_1: CoursivLesson = {
  id: 'gemini-2-1',
  courseId: 'gemini',
  title: 'Code Generation',
  subtitle: 'Programming with Gemini',
  blocks: [
    createTextBlock(
      "Gemini for Coding",
      "💻",
      [
        "Gemini has strong code generation and understanding capabilities, supporting many programming languages.",
        "It can write, explain, debug, and optimize code across various frameworks and paradigms.",
      ]
    ),
    createTextBlock(
      "Coding Capabilities",
      "🔧",
      [
        "**Code Generation**: Write functions, classes, and complete programs",
        "**Debugging**: Find and fix errors in existing code",
        "**Explanation**: Understand and document code",
        "**Optimization**: Improve performance and readability",
      ]
    ),
    createPlaygroundBlock(
      'Generating Code',
      'Ask Gemini to write code for a specific task.',
      { name: 'Gemini', icon: '✨', logo: '/images/ai-tools/gemini.jpg' },
      'Write a [language] function that [task]. Include [requirement] and add [documentation].',
      [
        { id: 'language', placeholder: 'language', correctAnswer: 'Python' },
        { id: 'task', placeholder: 'task', correctAnswer: 'validates email addresses' },
        { id: 'requirement', placeholder: 'requirement', correctAnswer: 'error handling' },
        { id: 'documentation', placeholder: 'documentation', correctAnswer: 'docstrings' }
      ],
      ['Python', 'validates email addresses', 'error handling', 'docstrings'],
      'Specify language, task, requirements, and documentation needs.',
      { title: 'Code generated!', message: "You've learned to request code from Gemini!" },
      { title: 'Try again', message: 'Be specific about language and requirements.' },
      '/images/course/gemini/gemini-code.jpg',
      'Always specify error handling and documentation requirements for production-ready code.',
      `Here's a Python function that validates email addresses with error handling and docstrings:

\`\`\`python
import re
from typing import Tuple

def validate_email(email: str) -> Tuple[bool, str]:
    """
    Validate an email address format.
    
    This function checks if the provided email address follows
    standard email format rules using regex pattern matching.
    
    Args:
        email (str): The email address to validate.
        
    Returns:
        Tuple[bool, str]: A tuple containing:
            - bool: True if valid, False otherwise
            - str: Success message or error description
            
    Raises:
        TypeError: If email is not a string.
        ValueError: If email is empty or None.
        
    Examples:
        >>> validate_email("user@example.com")
        (True, "Valid email address")
        
        >>> validate_email("invalid-email")
        (False, "Invalid email format")
    """
    # Input validation
    if email is None:
        raise ValueError("Email cannot be None")
    
    if not isinstance(email, str):
        raise TypeError(f"Expected string, got {type(email).__name__}")
    
    email = email.strip()
    
    if not email:
        raise ValueError("Email cannot be empty")
    
    # Email regex pattern
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    
    try:
        if re.match(pattern, email):
            # Additional checks
            if '..' in email:
                return (False, "Email contains consecutive dots")
            if email.startswith('.') or email.endswith('.'):
                return (False, "Email cannot start or end with a dot")
            
            return (True, "Valid email address")
        else:
            return (False, "Invalid email format")
            
    except re.error as e:
        return (False, f"Regex error: {str(e)}")


# Usage example
if __name__ == "__main__":
    test_emails = [
        "user@example.com",
        "invalid-email",
        "user.name+tag@domain.co.uk",
        "user@.com",
    ]
    
    for email in test_emails:
        try:
            is_valid, message = validate_email(email)
            print(f"{email}: {message}")
        except (TypeError, ValueError) as e:
            print(f"{email}: Error - {e}")
\`\`\`

**Features Included:**
- ✅ Type hints for better IDE support
- ✅ Comprehensive docstring with examples
- ✅ Input validation with specific errors
- ✅ Regex pattern for standard email format
- ✅ Additional edge case checks
- ✅ Usage example included

Would you like me to add unit tests or modify the validation rules?`
    , true),
    createFeedbackBlock(
      'How helpful is Gemini for coding?',
      ['Very helpful', 'Somewhat helpful', 'Prefer other tools'],
      0
    ),
    createDiscoveryBlock(
      5,
      'Code Assistant',
      'Gemini generates production-ready code with proper error handling and documentation.'
    ),
  ],
};

export const geminiLesson2_2: CoursivLesson = {
  id: 'gemini-2-2',
  courseId: 'gemini',
  title: 'Data Analysis',
  subtitle: 'Analyzing data with AI',
  blocks: [
    createTextBlock(
      "Gemini for Data",
      "📊",
      [
        "Gemini can help analyze data, interpret results, and generate insights from various data formats.",
        "Its integration with Google Sheets makes it particularly powerful for spreadsheet analysis.",
      ]
    ),
    createTextBlock(
      "Data Capabilities",
      "📈",
      [
        "**Data Interpretation**: Understanding what data means",
        "**Statistical Analysis**: Basic statistics and trends",
        "**Visualization Suggestions**: Recommending chart types",
        "**Insight Generation**: Finding patterns and anomalies",
      ]
    ),
    createPlaygroundBlock(
      'Analyzing Data',
      'Ask Gemini to analyze and interpret data.',
      { name: 'Gemini', icon: '✨', logo: '/images/ai-tools/gemini.jpg' },
      'Analyze this [data_type] data. Identify [analysis_focus] and suggest [recommendation_type].',
      [
        { id: 'data_type', placeholder: 'data type', correctAnswer: 'sales' },
        { id: 'analysis_focus', placeholder: 'analysis focus', correctAnswer: 'trends and patterns' },
        { id: 'recommendation_type', placeholder: 'recommendation type', correctAnswer: 'actionable insights' }
      ],
      ['sales', 'trends and patterns', 'actionable insights'],
      'Specify the data type, what to look for, and what kind of output you need.',
      { title: 'Data analyzed!', message: "You've learned to request data analysis!" },
      { title: 'Try again', message: 'Be specific about what patterns to identify.' },
      '/images/course/gemini/gemini-data.jpg',
      'Gemini can identify trends, patterns, and generate actionable insights from data.',
      `I'll analyze your sales data to identify trends, patterns, and provide actionable insights.

**Sales Data Analysis Report**

**Executive Summary:**
Based on the data provided, I've identified several key trends and patterns that can inform your business strategy.

---

**📈 Trend Analysis**

**Overall Performance:**
| Metric | Current Period | Previous Period | Change |
|--------|---------------|-----------------|--------|
| Total Revenue | $X | $Y | +/-Z% |
| Units Sold | X | Y | +/-Z% |
| Avg Order Value | $X | $Y | +/-Z% |

**Seasonal Patterns:**
\`\`\`
Q1: Moderate (baseline)
Q2: Growth phase (+15-20%)
Q3: Peak season (+30-40%)
Q4: Holiday surge (+50-60%)
\`\`\`

---

**🔍 Pattern Recognition**

**Top Performing:**
1. Product Category A - 35% of revenue
2. Region: [Top region] - 28% of sales
3. Customer Segment: [Segment] - Highest AOV

**Underperforming:**
1. Product Category C - Declining 12% MoM
2. Region: [Region] - Below target by 18%
3. Channel: [Channel] - Low conversion rate

---

**💡 Actionable Insights**

**Immediate Actions (This Week):**
| Priority | Action | Expected Impact |
|----------|--------|-----------------|
| High | Increase inventory for Category A | +8% revenue |
| High | Investigate Category C decline | Prevent further loss |
| Medium | Launch targeted campaign in underperforming region | +5% regional sales |

**Strategic Recommendations (This Quarter):**
1. **Double down on winners**: Allocate 60% of marketing budget to top performers
2. **Fix or cut losers**: Set 30-day improvement targets for underperformers
3. **Expand successful channels**: Replicate top channel strategies

**Visualization Recommendations:**
- Line chart: Revenue trend over time
- Bar chart: Category comparison
- Heat map: Regional performance
- Funnel: Conversion analysis

Would you like me to dive deeper into any specific area?`
    , true),
    createFeedbackBlock(
      'How useful is Gemini for data analysis?',
      ['Very useful', 'Somewhat useful', 'Need more practice'],
      0
    ),
    createDiscoveryBlock(
      6,
      'Data Analyst',
      'Gemini can identify trends, patterns, and generate actionable insights from your data.'
    ),
  ],
};

export const geminiLesson2_3: CoursivLesson = {
  id: 'gemini-2-3',
  courseId: 'gemini',
  title: 'Google Integration',
  subtitle: 'Using with Google tools',
  blocks: [
    createTextBlock(
      "Gemini in Google Workspace",
      "🔗",
      [
        "Gemini is deeply integrated into Google Workspace, appearing in Gmail, Docs, Sheets, Slides, and Meet.",
        "This integration allows you to use AI assistance directly within your workflow.",
      ]
    ),
    createTextBlock(
      "Integration Points",
      "📱",
      [
        "**Gmail**: Draft emails, summarize threads, suggest replies",
        "**Docs**: Write, edit, and format documents",
        "**Sheets**: Analyze data, create formulas, generate charts",
        "**Slides**: Create presentations, generate images, suggest layouts",
      ]
    ),
    createPlaygroundBlock(
      'Using Gemini in Workspace',
      'Learn how to leverage Gemini across Google tools.',
      { name: 'Gemini', icon: '✨', logo: '/images/ai-tools/gemini.jpg' },
      'In [google_app], I can use Gemini to [task]. This helps me [benefit].',
      [
        { id: 'google_app', placeholder: 'Google app', correctAnswer: 'Google Docs' },
        { id: 'task', placeholder: 'task', correctAnswer: 'draft and edit content' },
        { id: 'benefit', placeholder: 'benefit', correctAnswer: 'write faster and more effectively' }
      ],
      ['Google Docs', 'draft and edit content', 'write faster and more effectively'],
      'Gemini is available across Google Workspace for different tasks.',
      { title: 'Integration expert!', message: "You understand Gemini's Google integration!" },
      { title: 'Try again', message: 'Think about what Gemini can do in each app.' },
      '/images/course/gemini/gemini-workspace.jpg',
      'Gemini in Workspace lets you use AI without leaving your workflow.',
      `Here's how to maximize Gemini across Google Workspace:

**📧 Gmail Integration**

**Available Features:**
| Feature | How to Access | Use Case |
|---------|--------------|----------|
| Draft emails | "Help me write" | New messages |
| Summarize threads | "Summarize this email" | Long conversations |
| Suggest replies | Quick reply options | Fast responses |
| Formalize/Elaborate | Tone adjustments | Professional emails |

**Pro Tip:** Use "Help me write" with context like "Write a follow-up email about the Q3 budget meeting"

---

**📄 Google Docs Integration**

**Writing Assistance:**
\`\`\`
Type "@" → Select "Help me write"
Or: Insert → "Help me write"
\`\`\`

**Capabilities:**
- ✍️ Draft content from prompts
- 📝 Summarize documents
- 🔄 Rewrite for different tones
- 📋 Create outlines
- ✅ Proofread and edit

---

**📊 Google Sheets Integration**

**Data Features:**
| Task | Command | Example |
|------|---------|---------|
| Create tables | "Help me organize" | Structure raw data |
| Generate formulas | "Create a formula for" | Complex calculations |
| Analyze data | "What trends do you see" | Pattern recognition |
| Create charts | "Visualize this data" | Auto-chart generation |

---

**📽️ Google Slides Integration**

**Presentation Help:**
- 🎨 Generate images for slides
- 📝 Create speaker notes
- 🏗️ Suggest slide layouts
- ✨ Design improvements

**Workflow Example:**
1. Start in Docs → Draft content with Gemini
2. Move to Sheets → Analyze supporting data
3. Create in Slides → Generate presentation
4. Share via Gmail → Draft announcement email

All powered by Gemini, all in one ecosystem!`
    , true),
    createFeedbackBlock(
      'Do you use Google Workspace?',
      ['Yes, daily', 'Sometimes', 'No'],
      0
    ),
    createDiscoveryBlock(
      7,
      'Workspace Power',
      'Gemini integrates across Gmail, Docs, Sheets, and Slides for seamless AI assistance.'
    ),
  ],
};

export const geminiLesson2_Quiz: CoursivLesson = {
  id: 'gemini-2-quiz',
  courseId: 'gemini',
  title: 'Intermediate Quiz',
  subtitle: 'Test your advanced skills',
  blocks: [
    createTextBlock(
      "Intermediate Assessment",
      "📝",
      [
        "Let's test your understanding of intermediate Gemini techniques!",
        "Pass to complete the Gemini course.",
      ]
    ),
    createQuizBlock(
      'What should you include when asking Gemini to write code?',
      [
        'Just the task description',
        'Language, task, requirements, and documentation needs',
        'Only the programming language',
        'Just the function name'
      ],
      1,
      'Specifying language, task, requirements, and documentation helps generate production-ready code.',
      'Think about what makes code complete and usable.'
    ),
    createQuizBlock(
      'What can Gemini do with data analysis?',
      [
        'Only create charts',
        'Identify trends, patterns, and generate actionable insights',
        'Only calculate averages',
        'Only format data'
      ],
      1,
      'Gemini can identify trends, find patterns, and provide actionable recommendations from data.',
      'Consider the full range of data analysis capabilities.'
    ),
    createQuizBlock(
      'Where is Gemini integrated in Google Workspace?',
      [
        'Only in Gmail',
        'Gmail, Docs, Sheets, and Slides',
        'Only in Google Search',
        'Only in Chrome'
      ],
      1,
      'Gemini is integrated across Gmail, Docs, Sheets, Slides, and other Workspace apps.',
      'Think about the different Google apps mentioned.'
    ),
    createQuizBlock(
      'What is a benefit of Gemini\'s Workspace integration?',
      [
        'It requires switching between apps',
        'You can use AI assistance without leaving your workflow',
        'It only works offline',
        'It replaces all manual work'
      ],
      1,
      'Gemini in Workspace lets you access AI help directly within your existing workflow.',
      'Consider the convenience of integrated AI.'
    ),
    createDiscoveryBlock(
      8,
      'Course Complete!',
      'Congratulations! You\'ve mastered Gemini from basics to Google Workspace integration!'
    ),
  ],
};

// Export all lessons
export const geminiLessons: CoursivLesson[] = [
  // Level 1: Beginner
  geminiLesson1_1,
  geminiLesson1_2,
  geminiLesson1_3,
  geminiLesson1_Quiz,
  // Level 2: Intermediate
  geminiLesson2_1,
  geminiLesson2_2,
  geminiLesson2_3,
  geminiLesson2_Quiz,
];
