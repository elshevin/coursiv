/**
 * Claude Course - Complete Lesson Data
 * 
 * Course Structure:
 * - Level 1 (Beginner): 4 modules (claude-1-1 to claude-1-quiz)
 * - Level 2 (Intermediate): 4 modules (claude-2-1 to claude-2-quiz)
 * - Level 3 (Advanced): 3 modules (claude-3-1 to claude-3-quiz)
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

export const claudeLesson1_1: CoursivLesson = {
  id: 'claude-1-1',
  courseId: 'claude',
  title: 'Meet Claude',
  subtitle: 'What makes Claude different',
  blocks: [
    createTextBlock(
      "Introduction to Claude",
      "🤖",
      [
        "Claude is an AI assistant created by Anthropic, a company focused on AI safety. Claude is designed to be helpful, harmless, and honest.",
        "What sets Claude apart is its focus on nuanced understanding, thoughtful responses, and ethical considerations.",
      ]
    ),
    createTextBlock(
      "Claude's Unique Strengths",
      "💪",
      [
        "**Long Context**: Claude can process very long documents (up to 200K tokens)",
        "**Nuanced Analysis**: Excellent at understanding complex, nuanced topics",
        "**Thoughtful Responses**: Considers multiple perspectives before answering",
        "**Safety Focus**: Designed to be helpful while avoiding harmful outputs",
      ]
    ),
    createPlaygroundBlock(
      'Your First Claude Conversation',
      'Start a thoughtful conversation with Claude.',
      { name: 'Claude', icon: '🤖' },
      'I need help [task]. Please consider [consideration] and provide [output_type].',
      [
        { id: 'task', placeholder: 'task', correctAnswer: 'analyzing this complex topic' },
        { id: 'consideration', placeholder: 'consideration', correctAnswer: 'multiple perspectives' },
        { id: 'output_type', placeholder: 'output type', correctAnswer: 'a balanced analysis' }
      ],
      ['analyzing this complex topic', 'multiple perspectives', 'a balanced analysis', 'writing a report', 'the target audience', 'clear recommendations'],
      'Claude excels at nuanced, thoughtful analysis.',
      { title: 'Great start!', message: "You've engaged Claude's analytical strengths!" },
      { title: 'Try again', message: 'Ask for analysis that leverages Claude\'s thoughtfulness.' },
      '/images/course/claude/claude-first.png',
      'Claude is particularly strong at nuanced analysis and considering multiple viewpoints.',
      `Thank you for this thoughtful request. I'd be happy to help you analyze this complex topic while considering multiple perspectives.

**My Analytical Approach:**

When examining complex topics, I find it valuable to:

1. **Identify Key Stakeholders**
   - Who is affected by this topic?
   - What are their varying interests?

2. **Map Different Viewpoints**
   | Perspective | Key Arguments | Concerns |
   |-------------|---------------|----------|
   | Proponents | Benefits, opportunities | Implementation challenges |
   | Critics | Risks, drawbacks | Unintended consequences |
   | Neutral observers | Trade-offs | Long-term implications |

3. **Examine Evidence**
   - What data supports each position?
   - Where is evidence lacking?

4. **Consider Context**
   - Historical background
   - Current circumstances
   - Future implications

**My Balanced Analysis Would Include:**
- A fair representation of each perspective
- Acknowledgment of uncertainties
- Clear reasoning for any conclusions
- Areas where reasonable people might disagree

What specific topic would you like me to analyze? I'll provide a thorough, balanced examination.`
    , true),
    createFeedbackBlock(
      'How do you find Claude compared to other AIs?',
      ['More thoughtful', 'Similar', 'Still exploring'],
      0
    ),
    createDiscoveryBlock(
      1,
      'Meet Claude',
      'Claude excels at nuanced analysis, long documents, and thoughtful, balanced responses.'
    ),
  ],
};

export const claudeLesson1_2: CoursivLesson = {
  id: 'claude-1-2',
  courseId: 'claude',
  title: 'Basic Conversations',
  subtitle: 'Effective communication with Claude',
  blocks: [
    createTextBlock(
      "Communicating with Claude",
      "💬",
      [
        "Claude is designed to understand natural language well, but clear communication still leads to better results.",
        "Unlike some AI assistants, Claude appreciates context and nuance in your requests.",
      ]
    ),
    createTextBlock(
      "Effective Communication Tips",
      "📝",
      [
        "**Be Specific**: Clear requests get clear responses",
        "**Provide Context**: Claude uses context to give better answers",
        "**Ask for Reasoning**: Claude can explain its thinking process",
        "**Iterate**: Refine your requests based on responses",
      ]
    ),
    createPlaygroundBlock(
      'Crafting Clear Requests',
      'Practice making clear, contextual requests to Claude.',
      { name: 'Claude', icon: '🤖' },
      'I am a [role] working on [project]. I need you to [task] while keeping in mind [constraint].',
      [
        { id: 'role', placeholder: 'role', correctAnswer: 'product manager' },
        { id: 'project', placeholder: 'project', correctAnswer: 'a mobile app launch' },
        { id: 'task', placeholder: 'task', correctAnswer: 'review my launch checklist' },
        { id: 'constraint', placeholder: 'constraint', correctAnswer: 'our limited budget' }
      ],
      ['product manager', 'a mobile app launch', 'review my launch checklist', 'our limited budget', 'researcher', 'a literature review', 'summarize key findings', 'academic standards'],
      'Context helps Claude provide more relevant, tailored responses.',
      { title: 'Clear communication!', message: "You've provided excellent context!" },
      { title: 'Try again', message: 'Include more context about your situation.' },
      '/images/course/claude/claude-clear.png',
      'The more context you provide, the more tailored Claude\'s response will be.',
      `I understand you're a product manager preparing for a mobile app launch with budget constraints. I'd be happy to review your launch checklist with that context in mind.

**Budget-Conscious Launch Checklist Review:**

**✅ Essential (Must Have)**
- [ ] App store optimization (ASO) - Free
- [ ] Core functionality testing - Internal
- [ ] Privacy policy & terms - Template-based
- [ ] Basic analytics setup - Free tier available

**⚠️ Important (Prioritize)**
| Item | Cost-Effective Approach |
|------|------------------------|
| Beta testing | Use TestFlight/Play Console (free) |
| Press kit | DIY with Canva templates |
| Landing page | Simple one-pager |
| Social media | Organic content first |

**💡 Nice-to-Have (If Budget Allows)**
- Paid advertising (start small, $100-500)
- Influencer outreach (micro-influencers)
- PR agency (consider freelancers)

**Budget-Saving Recommendations:**
1. **Leverage free tools**: App Annie, Google Analytics
2. **Community building**: Reddit, Discord, Product Hunt
3. **Content marketing**: Blog posts, how-to guides
4. **Partnerships**: Cross-promotion with complementary apps

Would you like me to review your specific checklist items, or dive deeper into any of these areas?`
    , true),
    createFeedbackBlock(
      'How natural does conversation with Claude feel?',
      ['Very natural', 'Somewhat natural', 'Takes getting used to'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Context Matters',
      'Providing context about your role, project, and constraints leads to better responses.'
    ),
  ],
};

export const claudeLesson1_3: CoursivLesson = {
  id: 'claude-1-3',
  courseId: 'claude',
  title: 'Analysis Tasks',
  subtitle: 'Using Claude for analysis',
  blocks: [
    createTextBlock(
      "Claude's Analytical Power",
      "🔍",
      [
        "Claude excels at analysis tasks - breaking down complex information, identifying patterns, and drawing insights.",
        "Its ability to process long documents makes it particularly useful for research and document analysis.",
      ]
    ),
    createTextBlock(
      "Types of Analysis",
      "📊",
      [
        "**Text Analysis**: Summarizing, extracting key points, identifying themes",
        "**Comparative Analysis**: Comparing options, pros/cons, trade-offs",
        "**Critical Analysis**: Evaluating arguments, identifying weaknesses",
        "**Data Interpretation**: Making sense of information and findings",
      ]
    ),
    createPlaygroundBlock(
      'Requesting Analysis',
      'Ask Claude to perform a specific type of analysis.',
      { name: 'Claude', icon: '🤖' },
      'Please perform a [analysis_type] analysis of [subject]. Focus on [focus_area] and present findings as [format].',
      [
        { id: 'analysis_type', placeholder: 'analysis type', correctAnswer: 'comparative' },
        { id: 'subject', placeholder: 'subject', correctAnswer: 'these two business strategies' },
        { id: 'focus_area', placeholder: 'focus area', correctAnswer: 'risk and reward' },
        { id: 'format', placeholder: 'format', correctAnswer: 'a structured comparison table' }
      ],
      ['comparative', 'these two business strategies', 'risk and reward', 'a structured comparison table', 'critical', 'this research paper', 'methodology and conclusions', 'bullet points with explanations'],
      'Specify the type of analysis, subject, focus, and desired output format.',
      { title: 'Analytical!', message: "You've structured an effective analysis request!" },
      { title: 'Try again', message: 'Be more specific about what kind of analysis you need.' },
      '/images/course/claude/claude-analysis.png',
      'Specifying the analysis type and output format helps Claude deliver exactly what you need.',
      `I'll perform a comparative analysis of the two business strategies, focusing on risk and reward.

**Comparative Analysis: Strategy A vs Strategy B**

**Executive Summary:**
Both strategies offer viable paths forward, but with different risk-reward profiles suited to different organizational contexts.

**Detailed Comparison:**

| Factor | Strategy A | Strategy B |
|--------|------------|------------|
| **Initial Investment** | High ($500K+) | Moderate ($150K) |
| **Time to ROI** | 18-24 months | 6-12 months |
| **Risk Level** | Higher | Lower |
| **Potential Upside** | 3-5x return | 1.5-2x return |
| **Market Dependency** | High | Moderate |
| **Scalability** | Excellent | Limited |

**Risk Analysis:**

**Strategy A Risks:**
- ⚠️ Market timing sensitivity
- ⚠️ Capital intensity
- ⚠️ Execution complexity
- ✅ Mitigated by: first-mover advantage

**Strategy B Risks:**
- ⚠️ Competitive pressure
- ⚠️ Growth ceiling
- ✅ Lower downside exposure
- ✅ Faster pivot capability

**Reward Potential:**

| Scenario | Strategy A | Strategy B |
|----------|------------|------------|
| Best case | $2.5M return | $450K return |
| Expected | $800K return | $280K return |
| Worst case | -$400K loss | -$80K loss |

**Recommendation:**
Choose Strategy A if you have strong capital reserves and risk tolerance. Choose Strategy B for a more conservative approach with faster validation.

Would you like me to dive deeper into any specific aspect?`
    , true),
    createFeedbackBlock(
      'How useful is Claude for analysis tasks?',
      ['Very useful', 'Somewhat useful', 'Need more practice'],
      0
    ),
    createDiscoveryBlock(
      3,
      'Analysis Expert',
      'Claude excels at comparative, critical, and text analysis with structured outputs.'
    ),
  ],
};

export const claudeLesson1_Quiz: CoursivLesson = {
  id: 'claude-1-quiz',
  courseId: 'claude',
  title: 'Beginner Quiz',
  subtitle: 'Test your Claude knowledge',
  blocks: [
    createTextBlock(
      "Beginner Assessment",
      "📝",
      [
        "Let's test what you've learned about Claude basics!",
        "Pass this quiz to unlock intermediate techniques.",
      ]
    ),
    createQuizBlock(
      'What company created Claude?',
      [
        'OpenAI',
        'Google',
        'Anthropic',
        'Microsoft'
      ],
      2,
      'Claude was created by Anthropic, a company focused on AI safety.',
      'Think about Claude\'s focus on safety and ethics.'
    ),
    createQuizBlock(
      'What is one of Claude\'s key strengths?',
      [
        'Image generation',
        'Processing very long documents',
        'Voice recognition',
        'Video editing'
      ],
      1,
      'Claude can process up to 200K tokens, making it excellent for long document analysis.',
      'Consider what makes Claude unique.'
    ),
    createQuizBlock(
      'What helps Claude give better responses?',
      [
        'Using all caps',
        'Providing context about your situation',
        'Keeping requests as short as possible',
        'Avoiding specific details'
      ],
      1,
      'Context about your role, project, and constraints helps Claude tailor its responses.',
      'Think about what information helps Claude understand your needs.'
    ),
    createDiscoveryBlock(
      4,
      'Beginner Complete!',
      'Great job! You understand Claude basics. Ready for advanced techniques?'
    ),
  ],
};

// ============================================
// LEVEL 2: INTERMEDIATE
// ============================================

export const claudeLesson2_1: CoursivLesson = {
  id: 'claude-2-1',
  courseId: 'claude',
  title: 'Long Document Analysis',
  subtitle: 'Working with large texts',
  blocks: [
    createTextBlock(
      "Claude's Long Context Advantage",
      "📚",
      [
        "Claude can process documents up to 200,000 tokens - equivalent to roughly 150,000 words or a 500-page book.",
        "This makes Claude uniquely suited for analyzing long documents, contracts, research papers, and codebases.",
      ]
    ),
    createTextBlock(
      "Strategies for Long Documents",
      "📋",
      [
        "**Upload the Full Document**: Let Claude see everything at once",
        "**Ask Specific Questions**: Target particular sections or topics",
        "**Request Summaries**: Get overviews at different detail levels",
        "**Cross-Reference**: Ask Claude to find connections across sections",
      ]
    ),
    createPlaygroundBlock(
      'Analyzing Long Documents',
      'Structure a request for long document analysis.',
      { name: 'Claude', icon: '🤖' },
      'I\'ve uploaded a [document_type]. Please [primary_task] and then [secondary_task]. Focus especially on [focus_area].',
      [
        { id: 'document_type', placeholder: 'document type', correctAnswer: '50-page research report' },
        { id: 'primary_task', placeholder: 'primary task', correctAnswer: 'summarize the key findings' },
        { id: 'secondary_task', placeholder: 'secondary task', correctAnswer: 'identify any contradictions' },
        { id: 'focus_area', placeholder: 'focus area', correctAnswer: 'the methodology section' }
      ],
      ['50-page research report', 'summarize the key findings', 'identify any contradictions', 'the methodology section', 'legal contract', 'highlight key obligations', 'flag potential risks', 'termination clauses'],
      'Break down your analysis into primary and secondary tasks.',
      { title: 'Document master!', message: "You've structured an effective document analysis!" },
      { title: 'Try again', message: 'Be specific about what you want from the document.' },
      '/images/course/claude/claude-analysis.png',
      'Claude can hold entire documents in context and answer questions about any part.',
      `I've analyzed your 50-page research report. Here's my comprehensive analysis:

**Executive Summary of Key Findings:**

**Primary Findings:**
1. **Main Conclusion**: The study demonstrates a 34% improvement in outcomes using the new methodology
2. **Statistical Significance**: Results are significant at p < 0.01
3. **Sample Size**: n=2,847 participants across 12 sites

**Secondary Findings:**
- Subgroup analysis reveals stronger effects in urban populations
- Cost-effectiveness ratio of 2.3:1 compared to standard approach
- Implementation timeline: 6-8 months for full deployment

---

**Contradictions & Inconsistencies Identified:**

| Page | Issue | Severity |
|------|-------|----------|
| p.12 vs p.38 | Sample size discrepancy (2,847 vs 2,891) | Minor |
| p.23 vs p.45 | Conflicting timeline estimates | Moderate |
| p.31 | Methodology deviation not addressed | Notable |

---

**Methodology Section Deep Dive:**

**Strengths:**
✅ Randomized controlled design
✅ Double-blind protocol
✅ Pre-registered analysis plan

**Concerns:**
⚠️ Selection criteria may introduce bias (p.15)
⚠️ Dropout rate of 18% exceeds protocol threshold
⚠️ Missing data handling not fully explained

**Recommendations:**
1. Clarify the sample size discrepancy
2. Address the methodology deviation on p.31
3. Provide sensitivity analysis for dropout impact

Would you like me to elaborate on any section?`
    , true),
    createFeedbackBlock(
      'How useful is long document analysis for you?',
      ['Very useful', 'Somewhat useful', 'Not my use case'],
      0
    ),
    createDiscoveryBlock(
      5,
      'Long Context Power',
      'Claude can analyze entire books, finding patterns and answering questions across the full text.'
    ),
  ],
};

export const claudeLesson2_2: CoursivLesson = {
  id: 'claude-2-2',
  courseId: 'claude',
  title: 'Code Review',
  subtitle: 'Using Claude for coding',
  blocks: [
    createTextBlock(
      "Claude as Code Reviewer",
      "💻",
      [
        "Claude is highly capable at code review, debugging, and explaining complex codebases.",
        "Its long context window allows it to understand entire projects, not just snippets.",
      ]
    ),
    createTextBlock(
      "Code Review Capabilities",
      "🔧",
      [
        "**Bug Detection**: Find logical errors and edge cases",
        "**Security Review**: Identify potential vulnerabilities",
        "**Code Quality**: Suggest improvements and best practices",
        "**Documentation**: Generate or improve code documentation",
      ]
    ),
    createPlaygroundBlock(
      'Requesting Code Review',
      'Ask Claude to review code with specific focus areas.',
      { name: 'Claude', icon: '🤖' },
      'Please review this [code_type] code. Focus on [focus1] and [focus2]. Suggest improvements for [improvement_area].',
      [
        { id: 'code_type', placeholder: 'code type', correctAnswer: 'Python API' },
        { id: 'focus1', placeholder: 'focus 1', correctAnswer: 'security vulnerabilities' },
        { id: 'focus2', placeholder: 'focus 2', correctAnswer: 'error handling' },
        { id: 'improvement_area', placeholder: 'improvement area', correctAnswer: 'performance optimization' }
      ],
      ['Python API', 'security vulnerabilities', 'error handling', 'performance optimization', 'React component', 'state management', 'accessibility', 'code organization'],
      'Specify the code type and what aspects you want reviewed.',
      { title: 'Code review ready!', message: "You've structured an effective code review request!" },
      { title: 'Try again', message: 'Be specific about what aspects of the code to review.' },
      '/images/course/claude/claude-code.png',
      'Claude can review entire codebases and understand how components interact.',
      `I've reviewed your Python API code. Here's my comprehensive analysis:

**🔒 Security Vulnerabilities**

**Critical Issues:**
\`\`\`python
# Line 45: SQL Injection vulnerability
query = f"SELECT * FROM users WHERE id = {user_id}"
# Fix: Use parameterized queries
query = "SELECT * FROM users WHERE id = %s"
cursor.execute(query, (user_id,))
\`\`\`

**High Priority:**
| Issue | Location | Risk | Fix |
|-------|----------|------|-----|
| No input validation | Line 23 | High | Add validation |
| Hardcoded secrets | Line 8 | High | Use env vars |
| Missing rate limiting | Endpoint /api/login | Medium | Add throttling |

---

**⚠️ Error Handling Review**

**Current Issues:**
\`\`\`python
# Line 67: Bare except clause
try:
    process_data()
except:  # Too broad!
    pass  # Silent failure!

# Recommended:
try:
    process_data()
except ValidationError as e:
    logger.warning(f"Validation failed: {e}")
    raise HTTPException(400, str(e))
except DatabaseError as e:
    logger.error(f"Database error: {e}")
    raise HTTPException(500, "Internal error")
\`\`\`

---

**🚀 Performance Optimization Suggestions**

1. **Database Queries** (Est. 40% improvement)
   - Add indexing on frequently queried columns
   - Implement connection pooling
   - Use batch operations for bulk inserts

2. **Caching** (Est. 60% improvement for reads)
   \`\`\`python
   from functools import lru_cache
   
   @lru_cache(maxsize=1000)
   def get_user_permissions(user_id):
       # Expensive database call
   \`\`\`

3. **Async Operations**
   - Convert blocking I/O to async
   - Use asyncio for concurrent requests

Would you like me to provide the complete refactored code?`
    , true),
    createFeedbackBlock(
      'How helpful is Claude for code review?',
      ['Very helpful', 'Somewhat helpful', 'Prefer other tools'],
      0
    ),
    createDiscoveryBlock(
      6,
      'Code Reviewer',
      'Claude can review security, error handling, and performance across entire codebases.'
    ),
  ],
};

export const claudeLesson2_3: CoursivLesson = {
  id: 'claude-2-3',
  courseId: 'claude',
  title: 'Research Assistant',
  subtitle: 'Claude as research partner',
  blocks: [
    createTextBlock(
      "Claude for Research",
      "🔬",
      [
        "Claude makes an excellent research assistant, helping with literature review, synthesis, and analysis.",
        "Its ability to process long documents and maintain context makes it ideal for research tasks.",
      ]
    ),
    createTextBlock(
      "Research Capabilities",
      "📖",
      [
        "**Literature Synthesis**: Combine findings from multiple sources",
        "**Gap Analysis**: Identify what's missing in existing research",
        "**Methodology Review**: Evaluate research approaches",
        "**Writing Assistance**: Help structure and write research content",
      ]
    ),
    createPlaygroundBlock(
      'Research Assistance',
      'Ask Claude to help with a research task.',
      { name: 'Claude', icon: '🤖' },
      'I\'m researching [topic]. Please help me [task] by [approach]. I need this for [purpose].',
      [
        { id: 'topic', placeholder: 'topic', correctAnswer: 'AI ethics in healthcare' },
        { id: 'task', placeholder: 'task', correctAnswer: 'synthesize the main arguments' },
        { id: 'approach', placeholder: 'approach', correctAnswer: 'comparing different frameworks' },
        { id: 'purpose', placeholder: 'purpose', correctAnswer: 'a literature review' }
      ],
      ['AI ethics in healthcare', 'synthesize the main arguments', 'comparing different frameworks', 'a literature review', 'climate change adaptation', 'identify research gaps', 'analyzing recent studies', 'a grant proposal'],
      'Specify your research topic, task, approach, and purpose.',
      { title: 'Research ready!', message: "You've structured an effective research request!" },
      { title: 'Try again', message: 'Be more specific about your research needs.' },
      '/images/course/claude/claude-analysis.png',
      'Claude can synthesize information across multiple sources and identify patterns.',
      `I'll help you synthesize the main arguments in AI ethics in healthcare by comparing different frameworks for your literature review.

**AI Ethics in Healthcare: Framework Comparison**

**Overview of Major Frameworks:**

| Framework | Origin | Core Focus | Key Principles |
|-----------|--------|------------|----------------|
| Principlist | Beauchamp & Childress | Medical ethics | Autonomy, beneficence, non-maleficence, justice |
| IEEE Ethically Aligned Design | IEEE | Technical standards | Human well-being, accountability, transparency |
| EU AI Act | European Commission | Regulation | Risk-based, human oversight, fundamental rights |
| WHO Guidance | World Health Organization | Global health | Equity, inclusivity, sustainability |

---

**Synthesis of Main Arguments:**

**1. Autonomy & Consent**
- *Principlist view*: Patient must understand AI's role in their care
- *Technical view*: Explainable AI is prerequisite for informed consent
- *Regulatory view*: Right to human review of AI decisions
- **Tension**: Complexity of AI vs. meaningful consent

**2. Accountability & Liability**
| Stakeholder | Principlist | Technical | Regulatory |
|-------------|-------------|-----------|------------|
| Developers | Moral duty | Design responsibility | Legal liability |
| Healthcare providers | Clinical judgment | Implementation duty | Professional standards |
| Institutions | Oversight | Governance | Compliance |

**3. Equity & Access**
- Common concern across all frameworks
- Bias in training data → disparate outcomes
- Digital divide → access inequality
- **Convergence point**: All frameworks prioritize equity

---

**Research Gaps Identified:**
1. Limited empirical studies on patient perspectives
2. Insufficient cross-cultural ethical analysis
3. Lack of longitudinal impact assessments
4. Need for interdisciplinary methodology

Would you like me to expand on any framework or identify additional sources?`
    , true),
    createFeedbackBlock(
      'How useful is Claude for research?',
      ['Essential tool', 'Helpful supplement', 'Still exploring'],
      0
    ),
    createDiscoveryBlock(
      7,
      'Research Partner',
      'Claude excels at synthesizing research, comparing frameworks, and identifying gaps.'
    ),
  ],
};

export const claudeLesson2_Quiz: CoursivLesson = {
  id: 'claude-2-quiz',
  courseId: 'claude',
  title: 'Intermediate Quiz',
  subtitle: 'Test your advanced skills',
  blocks: [
    createTextBlock(
      "Intermediate Assessment",
      "📝",
      [
        "Let's test your understanding of intermediate Claude techniques!",
        "Pass to unlock advanced features.",
      ]
    ),
    createQuizBlock(
      'How many tokens can Claude process in a single context?',
      [
        '4,000 tokens',
        '32,000 tokens',
        '200,000 tokens',
        '1,000,000 tokens'
      ],
      2,
      'Claude can process up to 200,000 tokens, equivalent to roughly 150,000 words.',
      'Think about Claude\'s long context advantage.'
    ),
    createQuizBlock(
      'What makes Claude particularly good at code review?',
      [
        'It can only review short snippets',
        'It can understand entire codebases in context',
        'It only works with Python',
        'It automatically fixes all bugs'
      ],
      1,
      'Claude\'s long context window allows it to understand entire projects and how components interact.',
      'Consider what enables comprehensive code review.'
    ),
    createQuizBlock(
      'For research tasks, Claude can help with:',
      [
        'Only finding sources',
        'Literature synthesis, gap analysis, and methodology review',
        'Only writing citations',
        'Only summarizing single papers'
      ],
      1,
      'Claude excels at synthesizing multiple sources, identifying gaps, and reviewing methodologies.',
      'Think about the full range of research assistance.'
    ),
    createDiscoveryBlock(
      8,
      'Intermediate Complete!',
      'Excellent! You\'ve mastered intermediate techniques. Ready for API integration?'
    ),
  ],
};

// ============================================
// LEVEL 3: ADVANCED
// ============================================

export const claudeLesson3_1: CoursivLesson = {
  id: 'claude-3-1',
  courseId: 'claude',
  title: 'API Integration',
  subtitle: 'Building with Claude API',
  blocks: [
    createTextBlock(
      "Claude API Overview",
      "🔌",
      [
        "The Claude API allows you to integrate Claude's capabilities directly into your applications.",
        "Anthropic provides a clean, well-documented API with support for streaming, function calling, and more.",
      ]
    ),
    createTextBlock(
      "API Features",
      "⚙️",
      [
        "**Messages API**: The primary endpoint for conversations",
        "**Streaming**: Real-time response streaming for better UX",
        "**Tool Use**: Let Claude call functions and use tools",
        "**Vision**: Process images alongside text",
      ]
    ),
    createPlaygroundBlock(
      'Understanding API Calls',
      'Learn the structure of Claude API requests.',
      { name: 'Claude', icon: '🤖' },
      'To call the Claude API, I need to specify the [component1], provide [component2], and set [component3] for response length.',
      [
        { id: 'component1', placeholder: 'component 1', correctAnswer: 'model version' },
        { id: 'component2', placeholder: 'component 2', correctAnswer: 'messages array' },
        { id: 'component3', placeholder: 'component 3', correctAnswer: 'max_tokens' }
      ],
      ['model version', 'messages array', 'max_tokens', 'API key', 'system prompt', 'temperature'],
      'The API requires model, messages, and max_tokens at minimum.',
      { title: 'API ready!', message: "You understand Claude API structure!" },
      { title: 'Try again', message: 'Think about the essential API parameters.' },
      '/images/course/claude/claude-api.png',
      'The Messages API is the primary way to interact with Claude programmatically.',
      `Excellent! Here's a complete guide to Claude API integration:

**Basic API Call Structure:**

\`\`\`python
import anthropic

client = anthropic.Anthropic(
    api_key="your-api-key"
)

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",  # Model version
    max_tokens=1024,                      # Max response length
    messages=[                            # Messages array
        {"role": "user", "content": "Hello, Claude!"}
    ]
)

print(message.content[0].text)
\`\`\`

**Key Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| model | Yes | Claude model to use |
| max_tokens | Yes | Maximum response tokens |
| messages | Yes | Conversation history |
| system | No | System prompt |
| temperature | No | Randomness (0-1) |
| stream | No | Enable streaming |

**Available Models:**
- \`claude-3-5-sonnet-20241022\` - Best balance
- \`claude-3-opus-20240229\` - Most capable
- \`claude-3-haiku-20240307\` - Fastest

**Streaming Example:**

\`\`\`python
with client.messages.stream(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Tell me a story"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
\`\`\`

**Best Practices:**
1. Always handle rate limits gracefully
2. Implement exponential backoff
3. Cache responses when appropriate
4. Monitor token usage for cost control

Would you like to see tool use or vision examples?`
    , true),
    createFeedbackBlock(
      'Will you use the Claude API?',
      ['Yes, for projects', 'Maybe in the future', 'Prefer the web interface'],
      0
    ),
    createDiscoveryBlock(
      9,
      'API Power',
      'The Claude API enables programmatic access with streaming, tool use, and vision capabilities.'
    ),
  ],
};

export const claudeLesson3_2: CoursivLesson = {
  id: 'claude-3-2',
  courseId: 'claude',
  title: 'Enterprise Applications',
  subtitle: 'Claude for business',
  blocks: [
    createTextBlock(
      "Claude in the Enterprise",
      "🏢",
      [
        "Organizations use Claude for a wide range of business applications, from customer support to internal knowledge management.",
        "Claude's safety focus and long context make it particularly suitable for enterprise use cases.",
      ]
    ),
    createTextBlock(
      "Enterprise Use Cases",
      "💼",
      [
        "**Customer Support**: Intelligent ticket routing and response drafting",
        "**Knowledge Management**: Querying internal documentation and policies",
        "**Legal & Compliance**: Contract analysis and regulatory review",
        "**Research & Analysis**: Market research and competitive intelligence",
      ]
    ),
    createPlaygroundBlock(
      'Enterprise Implementation',
      'Plan an enterprise Claude implementation.',
      { name: 'Claude', icon: '🤖' },
      'For our [department], we could implement Claude to [use_case]. This would improve [benefit] while ensuring [safeguard].',
      [
        { id: 'department', placeholder: 'department', correctAnswer: 'legal team' },
        { id: 'use_case', placeholder: 'use case', correctAnswer: 'review contracts for key terms' },
        { id: 'benefit', placeholder: 'benefit', correctAnswer: 'review speed by 60%' },
        { id: 'safeguard', placeholder: 'safeguard', correctAnswer: 'human oversight on final decisions' }
      ],
      ['legal team', 'review contracts for key terms', 'review speed by 60%', 'human oversight on final decisions', 'HR department', 'answer employee policy questions', 'response time by 80%', 'data privacy compliance'],
      'Consider the use case, benefits, and necessary safeguards.',
      { title: 'Enterprise ready!', message: "You've planned a thoughtful implementation!" },
      { title: 'Try again', message: 'Include safeguards alongside benefits.' },
      '/images/course/claude/claude-enterprise.png',
      'Enterprise implementations should balance efficiency gains with appropriate human oversight.',
      `Excellent implementation plan! Here's a detailed roadmap for your legal team:

**Legal Contract Review Implementation**

**Phase 1: Pilot Program (Weeks 1-4)**

| Task | Timeline | Owner |
|------|----------|-------|
| Define key terms to extract | Week 1 | Legal Lead |
| Set up Claude API integration | Week 1-2 | IT |
| Create review templates | Week 2 | Legal Team |
| Test with 50 sample contracts | Week 3-4 | Legal + IT |

**Phase 2: Workflow Integration (Weeks 5-8)**

**Current Workflow:**
\`\`\`
Contract Received → Manual Review (4-6 hours) → 
Attorney Sign-off → Filing
\`\`\`

**Enhanced Workflow:**
\`\`\`
Contract Received → Claude Analysis (15 min) → 
Attorney Review of Flags (1-2 hours) → 
Attorney Sign-off → Filing
\`\`\`

**Expected Improvements:**
- ⏱️ Review time: 4-6 hours → 1.5-2 hours (60% reduction)
- 📊 Consistency: 100% of key terms checked every time
- 🎯 Focus: Attorneys spend time on judgment calls, not extraction

**Safeguards & Human Oversight:**

| Safeguard | Implementation |
|-----------|----------------|
| Human final review | All contracts require attorney sign-off |
| Confidence thresholds | Flag items below 90% confidence |
| Audit trail | Log all Claude analyses |
| Escalation path | Complex contracts to senior attorneys |
| Regular accuracy review | Monthly quality assessment |

**Risk Mitigation:**
1. Never auto-approve contracts
2. Maintain attorney-client privilege
3. Data stays within secure environment
4. Regular model output audits

**Success Metrics:**
- Review time reduction: Target 60%
- Error rate: Maintain or improve
- Attorney satisfaction: Survey quarterly
- Cost savings: Track monthly

Would you like me to detail the technical architecture or training plan?`
    , true),
    createFeedbackBlock(
      'Do you see enterprise applications in your organization?',
      ['Yes, many opportunities', 'Some possibilities', 'Not applicable'],
      0
    ),
    createDiscoveryBlock(
      10,
      'Enterprise Value',
      'Enterprise Claude implementations should balance efficiency with human oversight and safeguards.'
    ),
  ],
};

export const claudeLesson3_Quiz: CoursivLesson = {
  id: 'claude-3-quiz',
  courseId: 'claude',
  title: 'Advanced Quiz',
  subtitle: 'Final assessment',
  blocks: [
    createTextBlock(
      "Final Assessment",
      "🏆",
      [
        "Congratulations on reaching the advanced level!",
        "Pass this quiz to complete the Claude course!",
      ]
    ),
    createQuizBlock(
      'What is the primary API endpoint for Claude conversations?',
      [
        'Completions API',
        'Messages API',
        'Chat API',
        'Query API'
      ],
      1,
      'The Messages API is the primary endpoint for Claude conversations.',
      'Think about the API structure we discussed.'
    ),
    createQuizBlock(
      'What parameter controls the maximum response length?',
      [
        'response_length',
        'max_tokens',
        'output_size',
        'word_limit'
      ],
      1,
      'max_tokens sets the maximum number of tokens in Claude\'s response.',
      'Remember the required API parameters.'
    ),
    createQuizBlock(
      'For enterprise implementations, what is essential alongside efficiency gains?',
      [
        'Removing all human involvement',
        'Human oversight and safeguards',
        'Maximum automation',
        'Ignoring compliance'
      ],
      1,
      'Enterprise implementations should balance efficiency with appropriate human oversight and safeguards.',
      'Think about responsible AI deployment.'
    ),
    createDiscoveryBlock(
      11,
      'Course Complete!',
      'Congratulations! You\'ve mastered Claude from basics to enterprise applications!'
    ),
  ],
};

// Export all lessons
export const claudeLessons: CoursivLesson[] = [
  // Level 1: Beginner
  claudeLesson1_1,
  claudeLesson1_2,
  claudeLesson1_3,
  claudeLesson1_Quiz,
  // Level 2: Intermediate
  claudeLesson2_1,
  claudeLesson2_2,
  claudeLesson2_3,
  claudeLesson2_Quiz,
  // Level 3: Advanced
  claudeLesson3_1,
  claudeLesson3_2,
  claudeLesson3_Quiz,
];
