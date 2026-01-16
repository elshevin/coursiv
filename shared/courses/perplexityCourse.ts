/**
 * Perplexity Course - Complete Lesson Data
 * 
 * Course Structure:
 * - Level 1 (Beginner): 4 modules (perplexity-1-1 to perplexity-1-quiz)
 * - Level 2 (Intermediate): 4 modules (perplexity-2-1 to perplexity-2-quiz)
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

export const perplexityLesson1_1: CoursivLesson = {
  id: 'perplexity-1-1',
  courseId: 'perplexity',
  title: 'What is Perplexity?',
  subtitle: 'AI-powered search reimagined',
  blocks: [
    createTextBlock(
      "Meet Perplexity AI",
      "🔍",
      [
        "Perplexity is an AI-powered answer engine that combines the power of large language models with real-time web search.",
        "Unlike traditional search engines that give you links, Perplexity gives you direct answers with cited sources.",
      ]
    ),
    createTextBlock(
      "Why Perplexity?",
      "✨",
      [
        "**Direct Answers**: Get synthesized answers, not just links",
        "**Cited Sources**: Every claim is backed by references",
        "**Real-time Data**: Access current information from the web",
        "**Follow-up Questions**: Continue conversations naturally",
      ]
    ),
    createPlaygroundBlock(
      'Your First Perplexity Query',
      'Learn how to ask questions effectively.',
      { name: 'Perplexity', icon: '🔍', logo: '/images/ai-tools/perplexity.png' },
      'To research [topic], I should ask: "[question]"',
      [
        { id: 'topic', placeholder: 'topic', correctAnswer: 'recent AI developments' },
        { id: 'question', placeholder: 'question', correctAnswer: 'What are the most significant AI breakthroughs in 2024?' }
      ],
      ['recent AI developments', 'What are the most significant AI breakthroughs in 2024?', 'climate change', 'What are the latest findings on climate change impacts?'],
      'Ask specific questions for better answers.',
      { title: 'Great query!', message: "You've asked an effective question!" },
      { title: 'Try again', message: 'Be specific about what you want to know.' },
      '/images/course/perplexity/perplexity-first.png',
      'Perplexity works best with specific, well-formed questions.',
      `🔍 **Perplexity Search Results**

**Query:** What are the most significant AI breakthroughs in 2024?

**Answer:**

The most significant AI breakthroughs in 2024 include several major developments across different domains:

**1. Multimodal AI Models**
Large language models have evolved to seamlessly process text, images, audio, and video together, enabling more natural human-AI interaction [1].

**2. AI Agents**
Autonomous AI agents capable of completing complex multi-step tasks have emerged, from coding assistants to research helpers [2].

**3. Smaller, More Efficient Models**
Significant progress in model compression allows powerful AI to run on consumer devices without cloud connectivity [3].

**4. Scientific Discovery**
AI systems have accelerated drug discovery and materials science, with several AI-designed compounds entering clinical trials [4].

| Breakthrough | Impact | Key Players |
|--------------|--------|-------------|
| Multimodal AI | Universal interfaces | OpenAI, Google, Anthropic |
| AI Agents | Task automation | Various startups |
| Efficient models | Edge deployment | Meta, Mistral |
| Scientific AI | Research acceleration | DeepMind, Isomorphic |

---

**Sources:**
[1] TechCrunch - "The Year of Multimodal AI"
[2] MIT Technology Review - "AI Agents Are Here"
[3] Ars Technica - "Small Models, Big Impact"
[4] Nature - "AI in Drug Discovery 2024"

**Related Questions:**
- How do multimodal AI models work?
- What are the limitations of current AI agents?
- Which companies are leading AI research?`
    , true),
    createFeedbackBlock(
      'How does Perplexity compare to Google?',
      ['Much better', 'Different use cases', 'Still exploring'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Answer Engine',
      'Perplexity provides direct, cited answers instead of just links to search results.'
    ),
  ],
};

export const perplexityLesson1_2: CoursivLesson = {
  id: 'perplexity-1-2',
  courseId: 'perplexity',
  title: 'Search Modes',
  subtitle: 'Different ways to search',
  blocks: [
    createTextBlock(
      "Perplexity Search Modes",
      "🎯",
      [
        "Perplexity offers different search modes optimized for various types of queries.",
        "Choosing the right mode helps you get more relevant and accurate results.",
      ]
    ),
    createTextBlock(
      "Available Modes",
      "📊",
      [
        "**Quick Search**: Fast answers for simple questions",
        "**Pro Search**: Deep research with multiple sources",
        "**Focus Modes**: Academic, Writing, Math, Video, Social",
        "**Collections**: Organize research by topic",
      ]
    ),
    createPlaygroundBlock(
      'Choosing Search Modes',
      'Select the right mode for your query.',
      { name: 'Perplexity', icon: '🔍', logo: '/images/ai-tools/perplexity.png' },
      'For [research_type], I should use [mode] because it [benefit].',
      [
        { id: 'research_type', placeholder: 'research type', correctAnswer: 'academic research' },
        { id: 'mode', placeholder: 'mode', correctAnswer: 'Academic Focus' },
        { id: 'benefit', placeholder: 'benefit', correctAnswer: 'searches scholarly sources and papers' }
      ],
      ['academic research', 'Academic Focus', 'searches scholarly sources and papers'],
      'Different modes are optimized for different types of queries.',
      { title: 'Mode selected!', message: "You understand Perplexity search modes!" },
      { title: 'Try again', message: 'Match the mode to your research needs.' },
      '/images/course/perplexity/perplexity-modes.png',
      'Pro Search is best for complex questions requiring multiple sources.',
      `🎯 **Search Mode Guide**

**Your Choice: Academic Focus for Research**

**Why Academic Focus:**
- Searches scholarly databases
- Prioritizes peer-reviewed sources
- Includes citation information
- Filters out non-academic content

**All Search Modes:**

| Mode | Best For | Sources |
|------|----------|---------|
| **Quick** | Simple facts | Web, news |
| **Pro** | Deep research | Multiple passes |
| **Academic** | Scholarly work | Papers, journals |
| **Writing** | Content creation | Style guides, examples |
| **Math** | Calculations | Wolfram, calculators |
| **Video** | Visual content | YouTube, Vimeo |
| **Social** | Trends, opinions | Reddit, Twitter |

**Pro Search Deep Dive:**
\`\`\`
Query → Initial search → Analysis → 
Follow-up searches → Synthesis → Answer
\`\`\`

Pro Search performs multiple search iterations:
1. Initial broad search
2. Identifies knowledge gaps
3. Targeted follow-up searches
4. Synthesizes comprehensive answer

**Focus Mode Examples:**

**Academic:**
\`\`\`
"What is the current scientific consensus on 
intermittent fasting and longevity?"
→ Searches PubMed, Google Scholar, arXiv
\`\`\`

**Writing:**
\`\`\`
"How should I structure a persuasive essay?"
→ Searches writing guides, style manuals
\`\`\`

**Math:**
\`\`\`
"Solve the integral of x^2 * e^x"
→ Uses Wolfram Alpha, shows steps
\`\`\`

**Pro Tips:**
1. Use Pro Search for complex questions
2. Use Focus modes for specialized topics
3. Quick Search for simple facts
4. Create Collections for ongoing research`
    , true),
    createFeedbackBlock(
      'Which mode do you use most?',
      ['Pro Search', 'Quick Search', 'Focus modes'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Search Modes',
      'Different modes optimize for different query types - Academic, Writing, Math, and more.'
    ),
  ],
};

export const perplexityLesson1_3: CoursivLesson = {
  id: 'perplexity-1-3',
  courseId: 'perplexity',
  title: 'Understanding Sources',
  subtitle: 'Evaluating cited information',
  blocks: [
    createTextBlock(
      "Sources and Citations",
      "📚",
      [
        "Every Perplexity answer includes citations to its sources, allowing you to verify information.",
        "Understanding how to evaluate these sources is crucial for research quality.",
      ]
    ),
    createTextBlock(
      "Source Evaluation",
      "✅",
      [
        "**Check the Source**: Click citations to verify claims",
        "**Consider Authority**: Is the source reputable?",
        "**Check Recency**: Is the information current?",
        "**Cross-Reference**: Compare multiple sources",
      ]
    ),
    createPlaygroundBlock(
      'Evaluating Sources',
      'Learn to assess source quality.',
      { name: 'Perplexity', icon: '🔍', logo: '/images/ai-tools/perplexity.png' },
      'When evaluating a source, I should check [factor1], [factor2], and [factor3].',
      [
        { id: 'factor1', placeholder: 'factor 1', correctAnswer: 'the publication\'s reputation' },
        { id: 'factor2', placeholder: 'factor 2', correctAnswer: 'the date of publication' },
        { id: 'factor3', placeholder: 'factor 3', correctAnswer: 'author credentials' }
      ],
      ["the publication's reputation", 'the date of publication', 'author credentials'],
      'Multiple factors determine source reliability.',
      { title: 'Source evaluator!', message: "You know how to assess sources!" },
      { title: 'Try again', message: 'Consider what makes a source trustworthy.' },
      '/images/course/perplexity/perplexity-sources.png',
      'Always click through to sources for important research - don\'t just trust the summary.',
      `📚 **Source Evaluation Framework**

**Your Criteria:**
1. Publication's reputation
2. Date of publication
3. Author credentials

**CRAAP Test for Sources:**

| Criterion | Questions to Ask |
|-----------|------------------|
| **Currency** | When was it published? Updated? |
| **Relevance** | Does it relate to your topic? |
| **Authority** | Who is the author/publisher? |
| **Accuracy** | Is it supported by evidence? |
| **Purpose** | Why does this information exist? |

**Source Tiers:**

| Tier | Examples | Reliability |
|------|----------|-------------|
| **Tier 1** | Peer-reviewed journals, official reports | Highest |
| **Tier 2** | Major news outlets, expert blogs | High |
| **Tier 3** | General websites, forums | Moderate |
| **Tier 4** | Social media, anonymous sources | Low |

**Red Flags:**
⚠️ No author listed
⚠️ No date provided
⚠️ Extreme bias evident
⚠️ No citations/references
⚠️ Sensational language
⚠️ Unknown domain

**Verification Workflow:**
\`\`\`
1. Read Perplexity's answer
2. Note key claims
3. Click source citations
4. Verify claims in original
5. Check for additional sources
6. Cross-reference if important
\`\`\`

**Pro Tips:**
1. For important decisions, always verify sources
2. Look for consensus across multiple sources
3. Be skeptical of single-source claims
4. Check if sources cite each other (circular)
5. Consider potential biases`
    , true),
    createFeedbackBlock(
      'Do you verify Perplexity sources?',
      ['Always', 'Sometimes', 'Rarely'],
      0
    ),
    createDiscoveryBlock(
      3,
      'Source Literacy',
      'Always evaluate sources using criteria like authority, recency, and accuracy.'
    ),
  ],
};

export const perplexityLesson1_Quiz: CoursivLesson = {
  id: 'perplexity-1-quiz',
  courseId: 'perplexity',
  title: 'Beginner Quiz',
  subtitle: 'Test your Perplexity knowledge',
  blocks: [
    createTextBlock(
      "Beginner Assessment",
      "📝",
      [
        "Let's test what you've learned about Perplexity basics!",
        "Pass this quiz to unlock intermediate techniques.",
      ]
    ),
    createQuizBlock(
      'What makes Perplexity different from traditional search engines?',
      [
        'It\'s faster',
        'It provides direct answers with cited sources',
        'It has more ads',
        'It only searches images'
      ],
      1,
      'Perplexity synthesizes information and provides direct answers with citations.',
      'Think about how Perplexity presents information.'
    ),
    createQuizBlock(
      'Which mode is best for academic research?',
      [
        'Quick Search',
        'Video Focus',
        'Academic Focus',
        'Social Focus'
      ],
      2,
      'Academic Focus searches scholarly databases and peer-reviewed sources.',
      'Consider which mode prioritizes scholarly sources.'
    ),
    createQuizBlock(
      'What should you do with important claims from Perplexity?',
      [
        'Accept them without question',
        'Verify them by checking the cited sources',
        'Ignore the sources',
        'Only trust the first result'
      ],
      1,
      'Always verify important claims by clicking through to the original sources.',
      'Think about responsible research practices.'
    ),
    createDiscoveryBlock(
      4,
      'Beginner Complete!',
      'Great job! You understand Perplexity basics. Ready for advanced research techniques?'
    ),
  ],
};

// ============================================
// LEVEL 2: INTERMEDIATE
// ============================================

export const perplexityLesson2_1: CoursivLesson = {
  id: 'perplexity-2-1',
  courseId: 'perplexity',
  title: 'Pro Search Mastery',
  subtitle: 'Deep research techniques',
  blocks: [
    createTextBlock(
      "Mastering Pro Search",
      "🔬",
      [
        "Pro Search is Perplexity's most powerful mode, performing multiple search iterations for comprehensive answers.",
        "Learning to use it effectively can dramatically improve your research quality.",
      ]
    ),
    createTextBlock(
      "Pro Search Features",
      "⚡",
      [
        "**Multi-step Research**: Automatic follow-up searches",
        "**Source Diversity**: Pulls from many source types",
        "**Clarifying Questions**: Asks for specifics when needed",
        "**Detailed Answers**: Comprehensive, well-structured responses",
      ]
    ),
    createPlaygroundBlock(
      'Crafting Pro Search Queries',
      'Learn to write effective Pro Search queries.',
      { name: 'Perplexity', icon: '🔍', logo: '/images/ai-tools/perplexity.png' },
      'For comprehensive research on [topic], I should ask: "[detailed_question]"',
      [
        { id: 'topic', placeholder: 'topic', correctAnswer: 'renewable energy trends' },
        { id: 'detailed_question', placeholder: 'detailed question', correctAnswer: 'What are the current trends, challenges, and future projections for renewable energy adoption globally?' }
      ],
      ['renewable energy trends', 'What are the current trends, challenges, and future projections for renewable energy adoption globally?', 'AI in healthcare', 'How is AI being used in healthcare diagnosis, what are the accuracy rates, and what are the regulatory challenges?'],
      'Pro Search works best with multi-faceted questions.',
      { title: 'Pro researcher!', message: "You've crafted an excellent Pro Search query!" },
      { title: 'Try again', message: 'Include multiple aspects in your question.' },
      '/images/course/perplexity/perplexity-pro.png',
      'Pro Search can handle complex, multi-part questions better than Quick Search.',
      `🔬 **Pro Search Deep Dive**

**Your Query:**
"What are the current trends, challenges, and future projections for renewable energy adoption globally?"

**Pro Search Process:**

\`\`\`
Step 1: Initial Search
├── "renewable energy trends 2024"
├── "global renewable energy adoption"
└── "clean energy market analysis"

Step 2: Gap Analysis
├── Missing: Regional breakdown
├── Missing: Cost comparisons
└── Missing: Policy impacts

Step 3: Follow-up Searches
├── "renewable energy by country 2024"
├── "solar wind cost trends"
└── "renewable energy policy effectiveness"

Step 4: Synthesis
└── Comprehensive answer with all aspects
\`\`\`

**Answer Structure:**

**Current Trends:**
| Trend | Growth Rate | Key Markets |
|-------|-------------|-------------|
| Solar PV | +25% YoY | China, US, EU |
| Wind | +18% YoY | US, Germany, UK |
| Storage | +40% YoY | Global |

**Challenges:**
1. Grid infrastructure limitations
2. Intermittency issues
3. Initial capital costs
4. Policy inconsistency

**Future Projections:**
- 2030: 50% of global electricity
- 2040: Grid parity achieved globally
- 2050: 80%+ renewable mix

**Sources:** [12 sources from IEA, Bloomberg NEF, academic papers]

**Pro Search Tips:**
1. Ask multi-faceted questions
2. Include timeframes when relevant
3. Request comparisons explicitly
4. Ask for data and statistics
5. Follow up on interesting points`
    , true),
    createFeedbackBlock(
      'How often do you use Pro Search?',
      ['Always', 'For complex topics', 'Rarely'],
      0
    ),
    createDiscoveryBlock(
      5,
      'Pro Search Power',
      'Pro Search performs multiple search iterations for comprehensive, well-researched answers.'
    ),
  ],
};

export const perplexityLesson2_2: CoursivLesson = {
  id: 'perplexity-2-2',
  courseId: 'perplexity',
  title: 'Collections & Organization',
  subtitle: 'Managing your research',
  blocks: [
    createTextBlock(
      "Organizing Research",
      "📁",
      [
        "Perplexity Collections help you organize related searches and build knowledge bases.",
        "They're essential for ongoing research projects and team collaboration.",
      ]
    ),
    createTextBlock(
      "Collection Features",
      "🗂️",
      [
        "**Thread Organization**: Group related queries",
        "**Sharing**: Collaborate with others",
        "**Export**: Download research for external use",
        "**AI Memory**: Context carries across threads",
      ]
    ),
    createPlaygroundBlock(
      'Using Collections',
      'Learn to organize research effectively.',
      { name: 'Perplexity', icon: '🔍', logo: '/images/ai-tools/perplexity.png' },
      'For my [project_type] project, I should create a collection to [benefit1] and [benefit2].',
      [
        { id: 'project_type', placeholder: 'project type', correctAnswer: 'market research' },
        { id: 'benefit1', placeholder: 'benefit 1', correctAnswer: 'keep all related queries together' },
        { id: 'benefit2', placeholder: 'benefit 2', correctAnswer: 'share findings with my team' }
      ],
      ['market research', 'keep all related queries together', 'share findings with my team'],
      'Collections help maintain context and organization.',
      { title: 'Organized!', message: "You understand Collections!" },
      { title: 'Try again', message: 'Think about the benefits of organized research.' },
      '/images/course/perplexity/perplexity-collections.png',
      'Collections maintain context, so follow-up questions understand previous research.',
      `📁 **Collections Guide**

**Your Use Case: Market Research Project**

**Collection Benefits:**
1. All queries in one place
2. Context preserved across sessions
3. Easy sharing with team
4. Export for reports

**Setting Up a Collection:**
\`\`\`
1. Click "New Collection"
2. Name: "Q1 Market Research"
3. Description: "Competitive analysis and trends"
4. Add initial threads
5. Invite collaborators
\`\`\`

**Collection Structure Example:**

\`\`\`
📁 Q1 Market Research
├── 📄 Industry Overview
│   ├── Market size and growth
│   ├── Key players analysis
│   └── Trend identification
├── 📄 Competitor Analysis
│   ├── Company A deep dive
│   ├── Company B deep dive
│   └── Competitive positioning
├── 📄 Customer Insights
│   ├── Demographics
│   ├── Pain points
│   └── Buying behavior
└── 📄 Recommendations
    ├── Opportunities
    └── Strategy suggestions
\`\`\`

**Collaboration Features:**

| Feature | How to Use |
|---------|------------|
| **Share** | Click Share → Add email |
| **Permissions** | View only or Edit |
| **Comments** | Add notes to threads |
| **Export** | Download as PDF/Markdown |

**Context Continuity:**
\`\`\`
Thread 1: "What is Company A's market share?"
→ Answer: 23% of the market

Thread 2: "How does that compare to last year?"
→ Perplexity remembers Company A context
→ Answer: Up from 19%, growth of 4%
\`\`\`

**Pro Tips:**
1. Name collections descriptively
2. Use threads for subtopics
3. Add summary notes
4. Export regularly for backup
5. Archive completed projects`
    , true),
    createFeedbackBlock(
      'Do you use Collections?',
      ['Yes, regularly', 'Sometimes', 'Not yet'],
      0
    ),
    createDiscoveryBlock(
      6,
      'Research Organization',
      'Collections keep research organized, maintain context, and enable collaboration.'
    ),
  ],
};

export const perplexityLesson2_3: CoursivLesson = {
  id: 'perplexity-2-3',
  courseId: 'perplexity',
  title: 'API & Integration',
  subtitle: 'Programmatic access',
  blocks: [
    createTextBlock(
      "Perplexity API",
      "🔌",
      [
        "The Perplexity API allows you to integrate AI-powered search into your applications.",
        "It's useful for building research tools, chatbots, and automated information systems.",
      ]
    ),
    createTextBlock(
      "API Capabilities",
      "⚙️",
      [
        "**Search Queries**: Programmatic searches",
        "**Model Selection**: Choose different AI models",
        "**Streaming**: Real-time response streaming",
        "**Custom Integration**: Build into your apps",
      ]
    ),
    createPlaygroundBlock(
      'Understanding the API',
      'Learn API basics.',
      { name: 'Perplexity', icon: '🔍', logo: '/images/ai-tools/perplexity.png' },
      'The Perplexity API allows me to [capability] by [method] for [use_case].',
      [
        { id: 'capability', placeholder: 'capability', correctAnswer: 'perform AI-powered searches' },
        { id: 'method', placeholder: 'method', correctAnswer: 'sending HTTP requests' },
        { id: 'use_case', placeholder: 'use case', correctAnswer: 'building research automation tools' }
      ],
      ['perform AI-powered searches', 'sending HTTP requests', 'building research automation tools'],
      'The API enables programmatic access to Perplexity\'s capabilities.',
      { title: 'API ready!', message: "You understand the Perplexity API!" },
      { title: 'Try again', message: 'Think about what the API enables.' },
      '/images/course/perplexity/perplexity-api.png',
      'The API is great for building research tools and automating information gathering.',
      `🔌 **Perplexity API Guide**

**Your Use Case: Research Automation Tools**

**API Overview:**
\`\`\`
Your App → HTTP Request → Perplexity API → AI Search → Response
\`\`\`

**Basic API Call:**
\`\`\`python
import requests

url = "https://api.perplexity.ai/chat/completions"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

payload = {
    "model": "llama-3.1-sonar-small-128k-online",
    "messages": [
        {
            "role": "user",
            "content": "What are the latest developments in quantum computing?"
        }
    ]
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
\`\`\`

**Available Models:**

| Model | Best For | Speed |
|-------|----------|-------|
| sonar-small | Quick queries | Fast |
| sonar-medium | Balanced | Medium |
| sonar-large | Complex research | Slower |

**API Features:**

| Feature | Parameter | Example |
|---------|-----------|---------|
| **Streaming** | stream: true | Real-time responses |
| **Temperature** | temperature: 0.7 | Creativity control |
| **Max tokens** | max_tokens: 1000 | Response length |

**Use Case Examples:**

**1. Research Bot:**
\`\`\`python
def research_topic(topic):
    query = f"Provide a comprehensive overview of {topic}"
    return call_perplexity_api(query)
\`\`\`

**2. Fact Checker:**
\`\`\`python
def verify_claim(claim):
    query = f"Is this claim accurate: {claim}? Provide sources."
    return call_perplexity_api(query)
\`\`\`

**3. News Summarizer:**
\`\`\`python
def get_news_summary(topic):
    query = f"What are today's top news about {topic}?"
    return call_perplexity_api(query)
\`\`\`

**Pricing:**
- Pay per request
- Different rates per model
- Volume discounts available

**Pro Tips:**
1. Cache responses for repeated queries
2. Use streaming for better UX
3. Handle rate limits gracefully
4. Log queries for debugging`
    , true),
    createFeedbackBlock(
      'Are you interested in the API?',
      ['Yes, for projects', 'Maybe later', 'Just using the web app'],
      0
    ),
    createDiscoveryBlock(
      7,
      'API Access',
      'The Perplexity API enables building research tools and automating information gathering.'
    ),
  ],
};

export const perplexityLesson2_Quiz: CoursivLesson = {
  id: 'perplexity-2-quiz',
  courseId: 'perplexity',
  title: 'Intermediate Quiz',
  subtitle: 'Test your advanced skills',
  blocks: [
    createTextBlock(
      "Intermediate Assessment",
      "📝",
      [
        "Let's test your understanding of intermediate Perplexity techniques!",
        "Pass to complete the Perplexity course.",
      ]
    ),
    createQuizBlock(
      'What makes Pro Search different from Quick Search?',
      [
        'It\'s faster',
        'It performs multiple search iterations for comprehensive answers',
        'It only searches images',
        'It doesn\'t cite sources'
      ],
      1,
      'Pro Search performs multiple search iterations and follow-ups for deeper research.',
      'Think about the depth of research.'
    ),
    createQuizBlock(
      'What is the main benefit of Collections?',
      [
        'They make searches faster',
        'They organize research and maintain context across sessions',
        'They remove citations',
        'They only work offline'
      ],
      1,
      'Collections help organize research, maintain context, and enable collaboration.',
      'Consider research organization benefits.'
    ),
    createQuizBlock(
      'What can you build with the Perplexity API?',
      [
        'Only mobile apps',
        'Research tools, chatbots, and automated information systems',
        'Only websites',
        'Only games'
      ],
      1,
      'The API enables building various tools including research automation and intelligent chatbots.',
      'Think about programmatic access capabilities.'
    ),
    createQuizBlock(
      'What type of questions work best with Pro Search?',
      [
        'Simple yes/no questions',
        'Multi-faceted questions requiring comprehensive research',
        'Questions about images only',
        'Questions with one-word answers'
      ],
      1,
      'Pro Search excels at complex, multi-part questions that require deep research.',
      'Consider what Pro Search is optimized for.'
    ),
    createDiscoveryBlock(
      8,
      'Course Complete!',
      'Congratulations! You\'ve mastered Perplexity from basics to API integration!'
    ),
  ],
};

// Export all lessons
export const perplexityLessons: CoursivLesson[] = [
  // Level 1: Beginner
  perplexityLesson1_1,
  perplexityLesson1_2,
  perplexityLesson1_3,
  perplexityLesson1_Quiz,
  // Level 2: Intermediate
  perplexityLesson2_1,
  perplexityLesson2_2,
  perplexityLesson2_3,
  perplexityLesson2_Quiz,
];
