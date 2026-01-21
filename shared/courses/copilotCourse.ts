/**
 * GitHub Copilot Course - Complete Lesson Data
 * 
 * Course Structure:
 * - Level 1 (Beginner): 4 modules (copilot-1-1 to copilot-1-quiz)
 * - Level 2 (Intermediate): 4 modules (copilot-2-1 to copilot-2-quiz)
 * - Level 3 (Advanced): 4 modules (copilot-3-1 to copilot-3-quiz)
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

export const copilotLesson1_1: CoursivLesson = {
  id: 'copilot-1-1',
  courseId: 'copilot',
  title: 'What is GitHub Copilot?',
  subtitle: 'Your AI pair programmer',
  blocks: [
    createTextBlock(
      "Meet Your AI Coding Partner",
      "👨‍💻",
      [
        "GitHub Copilot is an AI-powered code completion tool that suggests code as you type.",
        "It's like having an experienced developer looking over your shoulder, ready to help with suggestions.",
      ]
    ),
    createTextBlock(
      "What Copilot Can Do",
      "🚀",
      [
        "**Code Completion**: Suggests entire lines or blocks of code",
        "**Function Generation**: Writes functions from comments or names",
        "**Documentation**: Generates comments and docstrings",
        "**Test Writing**: Helps create unit tests",
      ]
    ),
    createPlaygroundBlock(
      'Understanding Copilot',
      'Learn how Copilot assists your coding.',
      { name: 'GitHub Copilot', icon: '👨‍💻' },
      'When I write a [trigger], Copilot will [action] based on [context].',
      [
        { id: 'trigger', placeholder: 'trigger', correctAnswer: 'function name or comment' },
        { id: 'action', placeholder: 'action', correctAnswer: 'suggest code completions' },
        { id: 'context', placeholder: 'context', correctAnswer: 'the surrounding code and intent' }
      ],
      ['function name or comment', 'suggest code completions', 'the surrounding code and intent'],
      'Copilot uses context to understand what you\'re trying to do.',
      { title: 'Great start!', message: "You understand how Copilot works!" },
      { title: 'Try again', message: 'Think about what triggers Copilot suggestions.' },
      '/images/course/copilot/copilot-understand.jpg',
      'Copilot learns from your codebase context to provide relevant suggestions.',
      `👨‍💻 **GitHub Copilot Overview**

**How Copilot Works:**
\`\`\`
Your Code + Comments + Context
         ↓
    Copilot AI Model
         ↓
   Code Suggestions
\`\`\`

**Trigger Types:**

| Trigger | Example | Copilot Response |
|---------|---------|------------------|
| **Comment** | \`// sort array\` | Sorting function |
| **Function name** | \`def calculate_tax\` | Tax calculation logic |
| **Variable** | \`const users =\` | Array/object initialization |
| **Partial code** | \`for (let i =\` | Loop completion |

**Context Sources:**
- Current file content
- Open tabs in your editor
- File names and structure
- Comments and documentation
- Import statements

**Suggestion Types:**
1. **Inline completions** - As you type
2. **Multi-line suggestions** - Entire blocks
3. **Alternative suggestions** - Multiple options

**Keyboard Shortcuts:**
| Action | Shortcut |
|--------|----------|
| Accept suggestion | Tab |
| Dismiss | Esc |
| Next suggestion | Alt + ] |
| Previous suggestion | Alt + [ |
| Open Copilot panel | Ctrl + Enter |

**Pro Tip:** Write clear comments describing what you want - Copilot reads them!`
    , true),
    createFeedbackBlock(
      'Are you excited to try Copilot?',
      ['Very excited', 'Curious', 'Already using it'],
      0
    ),
    createDiscoveryBlock(
      1,
      'AI Pair Programmer',
      'Copilot suggests code based on comments, function names, and surrounding context.'
    ),
  ],
};

export const copilotLesson1_2: CoursivLesson = {
  id: 'copilot-1-2',
  courseId: 'copilot',
  title: 'Setup & Installation',
  subtitle: 'Getting Copilot running',
  blocks: [
    createTextBlock(
      "Setting Up Copilot",
      "⚙️",
      [
        "GitHub Copilot works as an extension in popular code editors like VS Code, JetBrains IDEs, and Neovim.",
        "You'll need a GitHub account and a Copilot subscription to get started.",
      ]
    ),
    createTextBlock(
      "Supported Editors",
      "💻",
      [
        "**VS Code**: Most popular, best integration",
        "**JetBrains IDEs**: IntelliJ, PyCharm, WebStorm, etc.",
        "**Neovim**: For terminal enthusiasts",
        "**Visual Studio**: Full IDE support",
      ]
    ),
    createPlaygroundBlock(
      'Installation Steps',
      'Learn the setup process for Copilot.',
      { name: 'GitHub Copilot', icon: '👨‍💻' },
      'To install Copilot, first [step1], then [step2], and finally [step3].',
      [
        { id: 'step1', placeholder: 'step 1', correctAnswer: 'get a Copilot subscription' },
        { id: 'step2', placeholder: 'step 2', correctAnswer: 'install the extension' },
        { id: 'step3', placeholder: 'step 3', correctAnswer: 'sign in with GitHub' }
      ],
      ['get a Copilot subscription', 'install the extension', 'sign in with GitHub'],
      'The setup process is straightforward in most editors.',
      { title: 'Setup ready!', message: "You know how to install Copilot!" },
      { title: 'Try again', message: 'Think about the logical order of setup steps.' },
      '/images/course/copilot/copilot-install.jpg',
      'VS Code has the best Copilot integration with additional features like Copilot Chat.',
      `⚙️ **Copilot Setup Guide**

**Prerequisites:**
- GitHub account
- Copilot subscription ($10/month or $100/year)
- Supported code editor

**VS Code Installation:**

\`\`\`
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search "GitHub Copilot"
4. Click Install
5. Click "Sign in to GitHub"
6. Authorize in browser
7. Return to VS Code
\`\`\`

**Subscription Options:**

| Plan | Price | Features |
|------|-------|----------|
| **Individual** | $10/mo | Full Copilot access |
| **Business** | $19/mo | Team management, policies |
| **Enterprise** | Custom | Advanced security, admin |
| **Free** | $0 | Students, OSS maintainers |

**Verify Installation:**
\`\`\`javascript
// Type this comment and wait:
// function to add two numbers

// Copilot should suggest:
function add(a, b) {
    return a + b;
}
\`\`\`

**Settings to Configure:**

| Setting | Recommended |
|---------|-------------|
| Enable Copilot | ✅ On |
| Inline suggestions | ✅ On |
| Enable for all languages | ✅ On |
| Show completions automatically | ✅ On |

**Troubleshooting:**
- Not seeing suggestions? Check you're signed in
- Slow suggestions? Check internet connection
- Wrong language? Copilot adapts to file extension

**Pro Tip:** Also install "GitHub Copilot Chat" for conversational coding help!`
    , true),
    createFeedbackBlock(
      'Which editor do you use?',
      ['VS Code', 'JetBrains', 'Other'],
      0
    ),
    createDiscoveryBlock(
      2,
      'Easy Setup',
      'Install the extension, sign in with GitHub, and start coding with AI assistance.'
    ),
  ],
};

export const copilotLesson1_3: CoursivLesson = {
  id: 'copilot-1-3',
  courseId: 'copilot',
  title: 'Basic Code Completion',
  subtitle: 'Your first suggestions',
  blocks: [
    createTextBlock(
      "Getting Suggestions",
      "💡",
      [
        "Copilot provides suggestions automatically as you type. The key is learning when and how to trigger useful completions.",
        "Good suggestions come from clear context - comments, function names, and surrounding code.",
      ]
    ),
    createTextBlock(
      "Triggering Suggestions",
      "🎯",
      [
        "**Comments**: Write what you want to do",
        "**Function signatures**: Start with a descriptive name",
        "**Partial code**: Begin typing and let Copilot finish",
        "**Examples**: Show one example, get more",
      ]
    ),
    createPlaygroundBlock(
      'Getting Good Suggestions',
      'Practice triggering Copilot completions.',
      { name: 'GitHub Copilot', icon: '👨‍💻' },
      'To get a function that [task], I should write: // [comment]',
      [
        { id: 'task', placeholder: 'task', correctAnswer: 'validates an email address' },
        { id: 'comment', placeholder: 'comment', correctAnswer: 'function to validate email address format' }
      ],
      ['validates an email address', 'function to validate email address format'],
      'Clear, descriptive comments lead to better suggestions.',
      { title: 'Great prompting!', message: "You know how to trigger good suggestions!" },
      { title: 'Try again', message: 'Be specific and descriptive in your comment.' },
      '/images/course/copilot/copilot-suggest.jpg',
      'The more specific your comment, the more accurate Copilot\'s suggestion.',
      `💡 **Code Completion Techniques**

**Your Comment:**
\`// function to validate email address format\`

**Copilot Suggestion:**
\`\`\`javascript
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
\`\`\`

**Comment Patterns That Work:**

| Pattern | Example | Result |
|---------|---------|--------|
| **Action + Object** | \`// sort users by age\` | Sorting function |
| **Input → Output** | \`// convert celsius to fahrenheit\` | Conversion function |
| **Validation** | \`// check if password is strong\` | Validation logic |
| **API call** | \`// fetch user data from API\` | Async fetch function |

**Progressive Completion:**
\`\`\`javascript
// Step 1: Write comment
// function to calculate compound interest

// Step 2: Start function
function calculateCompoundInterest(

// Step 3: Copilot completes
function calculateCompoundInterest(principal, rate, time, n) {
    return principal * Math.pow((1 + rate/n), n*time);
}
\`\`\`

**Multiple Suggestions:**
Press \`Alt + ]\` to cycle through alternatives:
\`\`\`
Suggestion 1: Using regex
Suggestion 2: Using split and checks
Suggestion 3: Using a library
\`\`\`

**Best Practices:**
1. ✅ Write comments before code
2. ✅ Use descriptive function names
3. ✅ Include type hints when possible
4. ✅ Review suggestions before accepting
5. ❌ Don't accept blindly - verify logic`
    , true),
    createFeedbackBlock(
      'How natural does using Copilot feel?',
      ['Very natural', 'Getting used to it', 'Still learning'],
      0
    ),
    createDiscoveryBlock(
      3,
      'Comment-Driven Development',
      'Write clear comments describing what you want, and Copilot will suggest the code.'
    ),
  ],
};

export const copilotLesson1_Quiz: CoursivLesson = {
  id: 'copilot-1-quiz',
  courseId: 'copilot',
  title: 'Beginner Quiz',
  subtitle: 'Test your Copilot knowledge',
  blocks: [
    createTextBlock(
      "Beginner Assessment",
      "📝",
      [
        "Let's test what you've learned about GitHub Copilot basics!",
        "Pass this quiz to unlock intermediate techniques.",
      ]
    ),
    createQuizBlock(
      'What is GitHub Copilot?',
      [
        'A version control system',
        'An AI-powered code completion tool',
        'A code review platform',
        'A deployment service'
      ],
      1,
      'GitHub Copilot is an AI tool that suggests code as you type.',
      'Think about what Copilot does while you code.'
    ),
    createQuizBlock(
      'What triggers Copilot suggestions?',
      [
        'Only button clicks',
        'Comments, function names, and code context',
        'Only voice commands',
        'Only copy-paste'
      ],
      1,
      'Copilot uses comments, function names, and surrounding code to generate suggestions.',
      'Think about what Copilot reads to understand your intent.'
    ),
    createQuizBlock(
      'How do you accept a Copilot suggestion?',
      [
        'Press Enter',
        'Press Tab',
        'Click Accept',
        'Press Space'
      ],
      1,
      'Press Tab to accept the current Copilot suggestion.',
      'Remember the keyboard shortcuts.'
    ),
    createDiscoveryBlock(
      4,
      'Beginner Complete!',
      'Great job! You understand Copilot basics. Ready for advanced techniques?'
    ),
  ],
};

// ============================================
// LEVEL 2: INTERMEDIATE
// ============================================

export const copilotLesson2_1: CoursivLesson = {
  id: 'copilot-2-1',
  courseId: 'copilot',
  title: 'Copilot Chat',
  subtitle: 'Conversational coding',
  blocks: [
    createTextBlock(
      "Beyond Autocomplete",
      "💬",
      [
        "Copilot Chat lets you have conversations about your code - ask questions, request explanations, and get help with debugging.",
        "It's like having a senior developer available to discuss your code anytime.",
      ]
    ),
    createTextBlock(
      "Chat Capabilities",
      "🗣️",
      [
        "**Explain Code**: Understand complex code blocks",
        "**Fix Errors**: Get help debugging issues",
        "**Refactor**: Improve code structure",
        "**Generate**: Create new code from descriptions",
      ]
    ),
    createPlaygroundBlock(
      'Using Copilot Chat',
      'Learn effective chat interactions.',
      { name: 'GitHub Copilot', icon: '👨‍💻' },
      'To [goal], I can ask Copilot Chat: "[question]"',
      [
        { id: 'goal', placeholder: 'goal', correctAnswer: 'understand a complex function' },
        { id: 'question', placeholder: 'question', correctAnswer: 'Can you explain what this function does step by step?' }
      ],
      ['understand a complex function', 'Can you explain what this function does step by step?', 'fix a bug', 'Why is this code throwing an error and how can I fix it?'],
      'Ask specific questions for better answers.',
      { title: 'Chat ready!', message: "You know how to use Copilot Chat!" },
      { title: 'Try again', message: 'Be specific about what you need help with.' },
      '/images/course/copilot/copilot-chat.jpg',
      'Select code before asking questions for context-aware responses.',
      `💬 **Copilot Chat Guide**

**Your Question:**
"Can you explain what this function does step by step?"

**How to Use Chat:**

**Opening Chat:**
- VS Code: \`Ctrl + Shift + I\` or click chat icon
- Inline: \`Ctrl + I\` for quick questions

**Slash Commands:**

| Command | Purpose | Example |
|---------|---------|---------|
| \`/explain\` | Explain selected code | /explain this regex |
| \`/fix\` | Fix errors | /fix this error |
| \`/tests\` | Generate tests | /tests for this function |
| \`/doc\` | Add documentation | /doc this class |

**Effective Questions:**

✅ **Good:**
\`\`\`
"Explain how this recursive function handles the base case"
"Why does this async function need await here?"
"How can I optimize this loop for better performance?"
\`\`\`

❌ **Too Vague:**
\`\`\`
"Fix this"
"Make it better"
"Help"
\`\`\`

**Context Tips:**
1. Select relevant code before asking
2. Include error messages in your question
3. Mention the language/framework
4. Describe what you expected vs what happened

**Chat Workflow:**
\`\`\`
1. Select problematic code
2. Open Copilot Chat
3. Ask specific question
4. Review explanation
5. Apply suggested changes
6. Follow up if needed
\`\`\`

**Pro Tip:** Use @workspace to ask questions about your entire project!`
    , true),
    createFeedbackBlock(
      'How useful is Copilot Chat?',
      ['Very useful', 'Somewhat useful', 'Haven\'t tried it'],
      0
    ),
    createDiscoveryBlock(
      5,
      'Conversational Coding',
      'Copilot Chat lets you ask questions, get explanations, and debug interactively.'
    ),
  ],
};

export const copilotLesson2_2: CoursivLesson = {
  id: 'copilot-2-2',
  courseId: 'copilot',
  title: 'Test Generation',
  subtitle: 'Writing tests with AI',
  blocks: [
    createTextBlock(
      "AI-Assisted Testing",
      "🧪",
      [
        "Copilot excels at generating unit tests, understanding your code's behavior and edge cases.",
        "It can create test scaffolding, assertions, and even suggest test cases you might have missed.",
      ]
    ),
    createTextBlock(
      "Test Generation Features",
      "✅",
      [
        "**Unit Tests**: Test individual functions",
        "**Edge Cases**: Cover boundary conditions",
        "**Mocking**: Generate mock objects and data",
        "**Assertions**: Appropriate test assertions",
      ]
    ),
    createPlaygroundBlock(
      'Generating Tests',
      'Learn to generate tests with Copilot.',
      { name: 'GitHub Copilot', icon: '👨‍💻' },
      'To generate tests for [function_type], write: // [test_comment]',
      [
        { id: 'function_type', placeholder: 'function type', correctAnswer: 'a validation function' },
        { id: 'test_comment', placeholder: 'test comment', correctAnswer: 'test cases for validateEmail including edge cases' }
      ],
      ['a validation function', 'test cases for validateEmail including edge cases'],
      'Mention edge cases to get more comprehensive tests.',
      { title: 'Test generation ready!', message: "You know how to generate tests!" },
      { title: 'Try again', message: 'Be specific about what to test and edge cases.' },
      '/images/course/copilot/copilot-test.jpg',
      'Always review generated tests - they may miss business logic edge cases.',
      `🧪 **Test Generation Guide**

**Your Comment:**
\`// test cases for validateEmail including edge cases\`

**Generated Tests:**
\`\`\`javascript
describe('validateEmail', () => {
    // Valid email tests
    test('accepts valid email', () => {
        expect(validateEmail('user@example.com')).toBe(true);
    });

    test('accepts email with subdomain', () => {
        expect(validateEmail('user@mail.example.com')).toBe(true);
    });

    // Invalid email tests
    test('rejects email without @', () => {
        expect(validateEmail('userexample.com')).toBe(false);
    });

    test('rejects email without domain', () => {
        expect(validateEmail('user@')).toBe(false);
    });

    // Edge cases
    test('rejects empty string', () => {
        expect(validateEmail('')).toBe(false);
    });

    test('rejects null', () => {
        expect(validateEmail(null)).toBe(false);
    });

    test('handles email with special characters', () => {
        expect(validateEmail('user+tag@example.com')).toBe(true);
    });
});
\`\`\`

**Test Generation Patterns:**

| Pattern | Comment | Result |
|---------|---------|--------|
| **Basic** | \`// test for add function\` | Happy path tests |
| **Edge cases** | \`// test with edge cases\` | Boundary tests |
| **Mocking** | \`// test with mocked API\` | Mock setup |
| **Async** | \`// async test for fetch\` | Async test patterns |

**Using /tests Command:**
\`\`\`
1. Select function to test
2. Open Copilot Chat
3. Type: /tests
4. Review generated tests
5. Add to test file
\`\`\`

**Best Practices:**
1. ✅ Review all generated assertions
2. ✅ Add business-specific edge cases
3. ✅ Verify mock behavior matches reality
4. ✅ Run tests to confirm they pass
5. ❌ Don't assume 100% coverage`
    , true),
    createFeedbackBlock(
      'Do you write tests regularly?',
      ['Yes, always', 'Sometimes', 'Rarely'],
      0
    ),
    createDiscoveryBlock(
      6,
      'Test Generation',
      'Copilot can generate comprehensive tests including edge cases and mocking.'
    ),
  ],
};

export const copilotLesson2_3: CoursivLesson = {
  id: 'copilot-2-3',
  courseId: 'copilot',
  title: 'Documentation',
  subtitle: 'Auto-generating docs',
  blocks: [
    createTextBlock(
      "Documentation Made Easy",
      "📚",
      [
        "Copilot can generate documentation for your code - from inline comments to full docstrings.",
        "Good documentation is crucial, and Copilot makes it much faster to create.",
      ]
    ),
    createTextBlock(
      "Documentation Types",
      "📝",
      [
        "**Docstrings**: Function and class documentation",
        "**Inline Comments**: Explain complex logic",
        "**README**: Project documentation",
        "**API Docs**: Endpoint documentation",
      ]
    ),
    createPlaygroundBlock(
      'Generating Documentation',
      'Learn to generate docs with Copilot.',
      { name: 'GitHub Copilot', icon: '👨‍💻' },
      'To document a [code_element], position cursor and type [trigger] to get [doc_type].',
      [
        { id: 'code_element', placeholder: 'code element', correctAnswer: 'function' },
        { id: 'trigger', placeholder: 'trigger', correctAnswer: '/** or """' },
        { id: 'doc_type', placeholder: 'doc type', correctAnswer: 'a complete docstring' }
      ],
      ['function', '/** or ', 'a complete docstring'],
      'Documentation triggers vary by language.',
      { title: 'Doc generation ready!', message: "You know how to generate documentation!" },
      { title: 'Try again', message: 'Think about documentation syntax for your language.' },
      '/images/course/copilot/copilot-docs.jpg',
      'Type the doc comment opener (/** or """) above a function to trigger docstring generation.',
      `📚 **Documentation Generation**

**Your Trigger: /** or """ above a function**

**JavaScript/TypeScript (JSDoc):**
\`\`\`javascript
/**
 * Validates an email address format.
 * @param {string} email - The email address to validate
 * @returns {boolean} True if valid, false otherwise
 * @example
 * validateEmail('user@example.com') // returns true
 * validateEmail('invalid') // returns false
 */
function validateEmail(email) {
    // ...
}
\`\`\`

**Python (Docstring):**
\`\`\`python
def validate_email(email: str) -> bool:
    """
    Validates an email address format.

    Args:
        email: The email address to validate

    Returns:
        True if the email is valid, False otherwise

    Raises:
        TypeError: If email is not a string

    Example:
        >>> validate_email('user@example.com')
        True
    """
    pass
\`\`\`

**Using /doc Command:**
\`\`\`
1. Select code to document
2. Open Copilot Chat
3. Type: /doc
4. Review and insert
\`\`\`

**Documentation Patterns:**

| Language | Trigger | Style |
|----------|---------|-------|
| JavaScript | \`/**\` | JSDoc |
| TypeScript | \`/**\` | TSDoc |
| Python | \`"""\` | Google/NumPy style |
| Java | \`/**\` | Javadoc |
| C# | \`///\` | XML comments |

**Pro Tips:**
1. Generate docs immediately after writing functions
2. Review for accuracy - Copilot may guess wrong
3. Add examples for complex functions
4. Include edge cases in documentation`
    , true),
    createFeedbackBlock(
      'How often do you document your code?',
      ['Always', 'Sometimes', 'Rarely'],
      0
    ),
    createDiscoveryBlock(
      7,
      'Auto Documentation',
      'Type documentation triggers (/** or """) to generate complete docstrings.'
    ),
  ],
};

export const copilotLesson2_Quiz: CoursivLesson = {
  id: 'copilot-2-quiz',
  courseId: 'copilot',
  title: 'Intermediate Quiz',
  subtitle: 'Test your advanced skills',
  blocks: [
    createTextBlock(
      "Intermediate Assessment",
      "📝",
      [
        "Let's test your understanding of intermediate Copilot techniques!",
        "Pass to unlock advanced features.",
      ]
    ),
    createQuizBlock(
      'What is Copilot Chat used for?',
      [
        'Only chatting with other developers',
        'Asking questions, getting explanations, and debugging',
        'Video calls',
        'Project management'
      ],
      1,
      'Copilot Chat allows conversational interactions for explanations, debugging, and code help.',
      'Think about conversational coding assistance.'
    ),
    createQuizBlock(
      'How do you generate tests with Copilot Chat?',
      [
        'Type /tests after selecting code',
        'Press F5',
        'Click the test button',
        'Write "test" in a file'
      ],
      0,
      'The /tests slash command generates tests for selected code.',
      'Remember the slash commands.'
    ),
    createQuizBlock(
      'What triggers docstring generation?',
      [
        'Pressing Enter',
        'Typing /** or """ above a function',
        'Clicking a button',
        'Saving the file'
      ],
      1,
      'Documentation comment openers like /** or """ trigger docstring generation.',
      'Think about documentation syntax.'
    ),
    createDiscoveryBlock(
      8,
      'Intermediate Complete!',
      'Excellent! You\'ve mastered intermediate techniques. Ready for enterprise features?'
    ),
  ],
};

// ============================================
// LEVEL 3: ADVANCED
// ============================================

export const copilotLesson3_1: CoursivLesson = {
  id: 'copilot-3-1',
  courseId: 'copilot',
  title: 'Workspace Context',
  subtitle: 'Project-wide assistance',
  blocks: [
    createTextBlock(
      "Understanding Your Whole Project",
      "🏗️",
      [
        "Copilot can understand your entire workspace, not just the current file.",
        "Using @workspace in chat gives Copilot context about your full project structure.",
      ]
    ),
    createTextBlock(
      "Workspace Features",
      "📁",
      [
        "**@workspace**: Query entire project context",
        "**Cross-file understanding**: References across files",
        "**Project patterns**: Learns your coding style",
        "**Architecture awareness**: Understands project structure",
      ]
    ),
    createPlaygroundBlock(
      'Using Workspace Context',
      'Learn to leverage project-wide context.',
      { name: 'GitHub Copilot', icon: '👨‍💻' },
      'To ask about my project, I use: @workspace [question]',
      [
        { id: 'question', placeholder: 'question', correctAnswer: 'where is user authentication handled?' }
      ],
      ['where is user authentication handled?'],
      '@workspace gives Copilot access to your entire project.',
      { title: 'Workspace ready!', message: "You understand workspace context!" },
      { title: 'Try again', message: 'Use @workspace for project-wide questions.' },
      '/images/course/copilot/copilot-workspace.jpg',
      '@workspace is powerful for understanding unfamiliar codebases.',
      `🏗️ **Workspace Context Guide**

**Your Query:**
\`@workspace where is user authentication handled?\`

**Copilot Response:**
\`\`\`
Based on your project structure, user authentication is handled in:

📁 src/auth/
├── authController.ts    - Main auth logic
├── authMiddleware.ts    - JWT verification
├── authRoutes.ts        - Auth endpoints
└── authService.ts       - Auth business logic

Key files:
- Login: src/auth/authController.ts (line 45)
- JWT validation: src/auth/authMiddleware.ts (line 12)
- User model: src/models/User.ts

The authentication flow:
1. User submits credentials to /api/auth/login
2. authController validates and generates JWT
3. authMiddleware verifies JWT on protected routes
\`\`\`

**@workspace Use Cases:**

| Query | Purpose |
|-------|---------|
| \`@workspace how is X implemented?\` | Find implementation |
| \`@workspace where is X used?\` | Find usage |
| \`@workspace explain the architecture\` | Understand structure |
| \`@workspace what tests exist for X?\` | Find tests |

**Other Context Commands:**

| Command | Scope |
|---------|-------|
| \`@workspace\` | Entire project |
| \`@file\` | Specific file |
| \`@selection\` | Selected code |
| \`@terminal\` | Terminal output |

**Best Practices:**
1. Use @workspace for architecture questions
2. Be specific about what you're looking for
3. Follow up with file-specific questions
4. Use for onboarding to new projects`
    , true),
    createFeedbackBlock(
      'How useful is workspace context?',
      ['Very useful', 'Somewhat useful', 'Haven\'t tried it'],
      0
    ),
    createDiscoveryBlock(
      9,
      'Project-Wide Intelligence',
      '@workspace gives Copilot context about your entire project for better answers.'
    ),
  ],
};

export const copilotLesson3_2: CoursivLesson = {
  id: 'copilot-3-2',
  courseId: 'copilot',
  title: 'Custom Instructions',
  subtitle: 'Personalizing Copilot',
  blocks: [
    createTextBlock(
      "Tailoring Copilot to You",
      "⚙️",
      [
        "You can customize Copilot's behavior with custom instructions and settings.",
        "This helps Copilot generate code that matches your team's standards and preferences.",
      ]
    ),
    createTextBlock(
      "Customization Options",
      "🔧",
      [
        "**Custom Instructions**: Define coding preferences",
        "**Language Settings**: Preferred languages and frameworks",
        "**Style Guidelines**: Code formatting preferences",
        "**Context Files**: .github/copilot-instructions.md",
      ]
    ),
    createPlaygroundBlock(
      'Setting Custom Instructions',
      'Learn to customize Copilot behavior.',
      { name: 'GitHub Copilot', icon: '👨‍💻' },
      'To customize Copilot for [goal], I can [action] with [specification].',
      [
        { id: 'goal', placeholder: 'goal', correctAnswer: 'consistent code style' },
        { id: 'action', placeholder: 'action', correctAnswer: 'create a copilot-instructions.md file' },
        { id: 'specification', placeholder: 'specification', correctAnswer: 'my team\'s coding standards' }
      ],
      ['consistent code style', 'create a copilot-instructions.md file', "my team's coding standards"],
      'Custom instructions help maintain consistency.',
      { title: 'Customization ready!', message: "You know how to personalize Copilot!" },
      { title: 'Try again', message: 'Think about how to communicate preferences to Copilot.' },
      '/images/course/copilot/copilot-custom.jpg',
      'Create .github/copilot-instructions.md for project-wide Copilot customization.',
      `⚙️ **Copilot Customization Guide**

**Your Goal: Consistent Code Style**

**Method 1: copilot-instructions.md**

Create \`.github/copilot-instructions.md\`:
\`\`\`markdown
# Copilot Instructions

## Code Style
- Use TypeScript with strict mode
- Prefer functional components in React
- Use async/await over .then()
- Include JSDoc comments for all functions

## Naming Conventions
- camelCase for variables and functions
- PascalCase for classes and components
- SCREAMING_SNAKE_CASE for constants

## Error Handling
- Always use try/catch for async operations
- Log errors with context
- Return meaningful error messages

## Testing
- Use Jest for unit tests
- Include edge cases
- Mock external dependencies
\`\`\`

**Method 2: VS Code Settings**

\`\`\`json
{
    "github.copilot.advanced": {
        "customInstructions": "Always use TypeScript. Prefer functional programming patterns."
    }
}
\`\`\`

**Method 3: Chat Instructions**

In Copilot Chat settings:
\`\`\`
When generating code:
- Use TypeScript
- Add comprehensive error handling
- Include unit tests
- Follow REST API best practices
\`\`\`

**Customization Levels:**

| Level | Scope | Method |
|-------|-------|--------|
| **Personal** | Your machine | VS Code settings |
| **Project** | Repository | copilot-instructions.md |
| **Organization** | All repos | GitHub org settings |

**Pro Tips:**
1. Keep instructions concise and specific
2. Update as your standards evolve
3. Include examples for complex patterns
4. Share with team for consistency`
    , true),
    createFeedbackBlock(
      'Do you have team coding standards?',
      ['Yes, detailed', 'Some guidelines', 'Not really'],
      0
    ),
    createDiscoveryBlock(
      10,
      'Personalized AI',
      'Custom instructions help Copilot generate code matching your team\'s standards.'
    ),
  ],
};

export const copilotLesson3_3: CoursivLesson = {
  id: 'copilot-3-3',
  courseId: 'copilot',
  title: 'Enterprise Features',
  subtitle: 'Copilot for organizations',
  blocks: [
    createTextBlock(
      "Copilot for Teams",
      "🏢",
      [
        "GitHub Copilot Business and Enterprise offer additional features for organizations.",
        "These include policy controls, audit logs, and enhanced security features.",
      ]
    ),
    createTextBlock(
      "Enterprise Features",
      "🔒",
      [
        "**Policy Management**: Control Copilot behavior org-wide",
        "**Audit Logs**: Track Copilot usage",
        "**IP Protection**: Filter out matching code",
        "**SSO Integration**: Enterprise authentication",
      ]
    ),
    createPlaygroundBlock(
      'Enterprise Considerations',
      'Understand enterprise Copilot features.',
      { name: 'GitHub Copilot', icon: '👨‍💻' },
      'For enterprise use, [feature] helps with [benefit] by [mechanism].',
      [
        { id: 'feature', placeholder: 'feature', correctAnswer: 'code referencing filter' },
        { id: 'benefit', placeholder: 'benefit', correctAnswer: 'IP protection' },
        { id: 'mechanism', placeholder: 'mechanism', correctAnswer: 'blocking suggestions matching public code' }
      ],
      ['code referencing filter', 'IP protection', 'blocking suggestions matching public code'],
      'Enterprise features focus on security and compliance.',
      { title: 'Enterprise ready!', message: "You understand enterprise Copilot!" },
      { title: 'Try again', message: 'Think about organizational security needs.' },
      '/images/course/copilot/copilot-enterprise.jpg',
      'The code referencing filter helps prevent accidental use of copyrighted code.',
      `🏢 **Enterprise Copilot Guide**

**Your Feature: Code Referencing Filter**

**How It Works:**
\`\`\`
Copilot Suggestion
       ↓
Code Reference Check
       ↓
Match Found? → Block/Flag
       ↓
No Match → Allow
\`\`\`

**Enterprise Plans Comparison:**

| Feature | Individual | Business | Enterprise |
|---------|------------|----------|------------|
| Code completion | ✅ | ✅ | ✅ |
| Copilot Chat | ✅ | ✅ | ✅ |
| Policy controls | ❌ | ✅ | ✅ |
| Audit logs | ❌ | ✅ | ✅ |
| Code referencing | ❌ | ✅ | ✅ |
| SSO/SAML | ❌ | ❌ | ✅ |
| Custom models | ❌ | ❌ | ✅ |

**Policy Controls:**

| Policy | Options |
|--------|---------|
| **Enable/Disable** | Per repo, per org |
| **Suggestions** | Allow all, filter matches |
| **Chat** | Enable/disable |
| **CLI** | Enable/disable |

**Audit Log Events:**
\`\`\`json
{
    "action": "copilot.suggestion_accepted",
    "user": "developer@company.com",
    "repository": "company/project",
    "timestamp": "2024-01-15T10:30:00Z",
    "suggestion_length": 45
}
\`\`\`

**Security Best Practices:**
1. Enable code referencing filter
2. Review audit logs regularly
3. Set clear usage policies
4. Train developers on responsible use
5. Monitor for sensitive data in prompts

**Compliance Considerations:**
- GDPR: Data processing agreements
- SOC 2: Audit trail requirements
- HIPAA: PHI in code/comments
- PCI-DSS: Payment data handling`
    , true),
    createFeedbackBlock(
      'Does your organization use Copilot?',
      ['Yes, enterprise', 'Individual licenses', 'Not yet'],
      0
    ),
    createDiscoveryBlock(
      11,
      'Enterprise Ready',
      'Copilot Business/Enterprise offers policy controls, audit logs, and IP protection.'
    ),
  ],
};

export const copilotLesson3_Quiz: CoursivLesson = {
  id: 'copilot-3-quiz',
  courseId: 'copilot',
  title: 'Advanced Quiz',
  subtitle: 'Final assessment',
  blocks: [
    createTextBlock(
      "Final Assessment",
      "🏆",
      [
        "Congratulations on reaching the advanced level!",
        "Pass this quiz to complete the GitHub Copilot course!",
      ]
    ),
    createQuizBlock(
      'What does @workspace do in Copilot Chat?',
      [
        'Opens a new workspace',
        'Gives Copilot context about your entire project',
        'Saves your work',
        'Shares with teammates'
      ],
      1,
      '@workspace allows Copilot to understand and query your entire project structure.',
      'Think about project-wide context.'
    ),
    createQuizBlock(
      'Where do you put project-wide Copilot instructions?',
      [
        'In any file',
        '.github/copilot-instructions.md',
        'package.json',
        'README.md'
      ],
      1,
      'The .github/copilot-instructions.md file contains project-wide Copilot customizations.',
      'Remember the customization file location.'
    ),
    createQuizBlock(
      'What does the code referencing filter do?',
      [
        'Adds references to code',
        'Blocks suggestions matching public code for IP protection',
        'Formats code',
        'Counts lines of code'
      ],
      1,
      'The code referencing filter helps prevent suggestions that match existing public code.',
      'Think about intellectual property protection.'
    ),
    createQuizBlock(
      'Which Copilot plan includes audit logs?',
      [
        'Individual only',
        'Business and Enterprise',
        'Free tier',
        'None of them'
      ],
      1,
      'Audit logs are available in Copilot Business and Enterprise plans.',
      'Think about enterprise compliance needs.'
    ),
    createDiscoveryBlock(
      12,
      'Course Complete!',
      'Congratulations! You\'ve mastered GitHub Copilot from basics to enterprise features!'
    ),
  ],
};

// Export all lessons
export const copilotLessons: CoursivLesson[] = [
  // Level 1: Beginner
  copilotLesson1_1,
  copilotLesson1_2,
  copilotLesson1_3,
  copilotLesson1_Quiz,
  // Level 2: Intermediate
  copilotLesson2_1,
  copilotLesson2_2,
  copilotLesson2_3,
  copilotLesson2_Quiz,
  // Level 3: Advanced
  copilotLesson3_1,
  copilotLesson3_2,
  copilotLesson3_3,
  copilotLesson3_Quiz,
];
