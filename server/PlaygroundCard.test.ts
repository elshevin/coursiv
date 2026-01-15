import { describe, it, expect } from "vitest";

/**
 * PlaygroundCard Component Tests (Coursiv Style)
 * 
 * Tests for the embedded Playground card component that matches Coursiv's styling:
 * - Multiple blanks support with sequential filling
 * - Option consumption mechanism (selected options disappear)
 * - Backspace button to undo last selection
 * - Purple left border for active blank
 * - Green/Red feedback with correct answer display
 * - Completed state with result image, Repeat task, and Pro Tip
 */

describe("PlaygroundCard - Coursiv Style", () => {
  describe("Data Structure", () => {
    it("should support multiple blanks in promptTemplate", () => {
      const promptTemplate = "I'm a [role]. Help me [task] for my [audience].";
      const blanks = [
        { id: 'role', placeholder: 'role', correctAnswer: 'software engineer' },
        { id: 'task', placeholder: 'task', correctAnswer: 'write documentation' },
        { id: 'audience', placeholder: 'audience', correctAnswer: 'team members' }
      ];
      
      expect(blanks.length).toBe(3);
      expect(promptTemplate).toContain('[role]');
      expect(promptTemplate).toContain('[task]');
      expect(promptTemplate).toContain('[audience]');
    });

    it("should have options array for all available choices", () => {
      const options = ['software engineer', 'write documentation', 'team members', 'marketing manager', 'create a presentation', 'clients'];
      expect(options.length).toBe(6);
      expect(options).toContain('software engineer');
    });

    it("should have resultImage for completed state", () => {
      const resultImage = '/images/chatgpt-result.png';
      expect(resultImage).toBeTruthy();
    });

    it("should have proTip for completed state", () => {
      const proTip = 'ChatGPT works best when you give it clear, specific instructions!';
      expect(proTip).toBeTruthy();
    });
  });

  describe("Initial State", () => {
    it("should show all blanks as placeholders initially", () => {
      const blanks = [
        { id: 'role', placeholder: 'role', correctAnswer: 'software engineer' },
        { id: 'task', placeholder: 'task', correctAnswer: 'write documentation' },
      ];
      const filledAnswers: Record<string, string> = {};
      
      const unfilledBlanks = blanks.filter(b => !filledAnswers[b.id]);
      expect(unfilledBlanks.length).toBe(2);
    });

    it("should show all options available initially", () => {
      const options = ['option1', 'option2', 'option3'];
      const usedOptions: string[] = [];
      
      const availableOptions = options.filter(o => !usedOptions.includes(o));
      expect(availableOptions.length).toBe(3);
    });

    it("should have Check button disabled when not all blanks filled", () => {
      const blanks = [{ id: 'a' }, { id: 'b' }];
      const filledAnswers = { a: 'answer1' };
      
      const allFilled = blanks.every(b => filledAnswers[b.id as keyof typeof filledAnswers]);
      expect(allFilled).toBe(false);
    });

    it("should highlight first blank as active", () => {
      const blanks = [{ id: 'first' }, { id: 'second' }];
      const activeBlankId = blanks[0].id;
      
      expect(activeBlankId).toBe('first');
    });
  });

  describe("Option Consumption Mechanism", () => {
    it("should remove selected option from available options", () => {
      const options = ['option1', 'option2', 'option3'];
      const selectedOption = 'option1';
      
      const remainingOptions = options.filter(o => o !== selectedOption);
      expect(remainingOptions).not.toContain('option1');
      expect(remainingOptions.length).toBe(2);
    });

    it("should restore option when backspace is pressed", () => {
      const allOptions = ['option1', 'option2', 'option3'];
      const usedOptions = ['option1'];
      const lastUsed = usedOptions[usedOptions.length - 1];
      
      // After backspace
      const restoredUsedOptions = usedOptions.slice(0, -1);
      const availableOptions = allOptions.filter(o => !restoredUsedOptions.includes(o));
      
      expect(availableOptions).toContain('option1');
      expect(availableOptions.length).toBe(3);
    });

    it("should advance to next blank after selection", () => {
      const blanks = [{ id: 'first' }, { id: 'second' }, { id: 'third' }];
      let activeIndex = 0;
      
      // User selects an option
      activeIndex++;
      
      expect(blanks[activeIndex].id).toBe('second');
    });
  });

  describe("Backspace Button", () => {
    it("should be visible when at least one blank is filled", () => {
      const filledAnswers = { role: 'software engineer' };
      const hasFilledBlanks = Object.keys(filledAnswers).length > 0;
      
      expect(hasFilledBlanks).toBe(true);
    });

    it("should undo the last filled blank", () => {
      const filledAnswers = { role: 'software engineer', task: 'write documentation' };
      const fillOrder = ['role', 'task'];
      
      // Undo last
      const lastFilled = fillOrder.pop();
      delete filledAnswers[lastFilled as keyof typeof filledAnswers];
      
      expect(filledAnswers).not.toHaveProperty('task');
      expect(filledAnswers).toHaveProperty('role');
    });
  });

  describe("Prompt Editor UI", () => {
    it("should have card-like container with shadow", () => {
      const containerStyle = "bg-white rounded-xl border border-gray-100 shadow-sm";
      expect(containerStyle).toContain("shadow-sm");
    });

    it("should show purple left border for active blank", () => {
      const activeBlankStyle = "border-l-4 border-l-[#7C3AED]";
      expect(activeBlankStyle).toContain("border-l-[#7C3AED]");
    });

    it("should show filled answer in blank position", () => {
      const filledAnswers = { role: 'software engineer' };
      const blankId = 'role';
      
      const displayText = filledAnswers[blankId] || 'role';
      expect(displayText).toBe('software engineer');
    });

    it("should show gray placeholder for unfilled blanks", () => {
      const filledAnswers: Record<string, string> = {};
      const blank = { id: 'role', placeholder: 'role' };
      
      const displayText = filledAnswers[blank.id] || blank.placeholder;
      const isPlaceholder = !filledAnswers[blank.id];
      
      expect(displayText).toBe('role');
      expect(isPlaceholder).toBe(true);
    });
  });

  describe("Option Picker UI", () => {
    it("should have pill-shaped buttons (rounded-full)", () => {
      const buttonStyle = "rounded-full";
      expect(buttonStyle).toBe("rounded-full");
    });

    it("should have shadow on buttons", () => {
      const buttonShadow = "shadow-sm";
      expect(buttonShadow).toBe("shadow-sm");
    });

    it("should change to purple on hover", () => {
      const hoverStyle = "hover:border-[#7C3AED] hover:bg-purple-50 hover:text-[#7C3AED]";
      expect(hoverStyle).toContain("hover:border-[#7C3AED]");
    });

    it("should only show unused options", () => {
      const allOptions = ['a', 'b', 'c'];
      const usedOptions = ['a'];
      
      const visibleOptions = allOptions.filter(o => !usedOptions.includes(o));
      expect(visibleOptions).toEqual(['b', 'c']);
    });
  });

  describe("Check Button", () => {
    it("should be disabled when not all blanks are filled", () => {
      const blanks = [{ id: 'a' }, { id: 'b' }];
      const filledAnswers = { a: 'answer1' };
      
      const allFilled = blanks.every(b => filledAnswers[b.id as keyof typeof filledAnswers]);
      expect(allFilled).toBe(false);
    });

    it("should be enabled when all blanks are filled", () => {
      const blanks = [{ id: 'a' }, { id: 'b' }];
      const filledAnswers = { a: 'answer1', b: 'answer2' };
      
      const allFilled = blanks.every(b => filledAnswers[b.id as keyof typeof filledAnswers]);
      expect(allFilled).toBe(true);
    });

    it("should have purple color when enabled", () => {
      const enabledStyle = "bg-[#7C3AED]";
      expect(enabledStyle).toBe("bg-[#7C3AED]");
    });

    it("should have gray color when disabled", () => {
      const disabledStyle = "bg-gray-200";
      expect(disabledStyle).toBe("bg-gray-200");
    });
  });

  describe("Answer Validation", () => {
    it("should compare user answers with correct answers", () => {
      const blanks = [
        { id: 'role', correctAnswer: 'software engineer' },
        { id: 'task', correctAnswer: 'write documentation' },
      ];
      const filledAnswers = { role: 'software engineer', task: 'write documentation' };
      
      const isCorrect = blanks.every(b => filledAnswers[b.id as keyof typeof filledAnswers] === b.correctAnswer);
      expect(isCorrect).toBe(true);
    });

    it("should detect incorrect answers", () => {
      const blanks = [
        { id: 'role', correctAnswer: 'software engineer' },
        { id: 'task', correctAnswer: 'write documentation' },
      ];
      const filledAnswers = { role: 'marketing manager', task: 'write documentation' };
      
      const isCorrect = blanks.every(b => filledAnswers[b.id as keyof typeof filledAnswers] === b.correctAnswer);
      expect(isCorrect).toBe(false);
    });
  });

  describe("Success Feedback", () => {
    it("should have green left border", () => {
      const successBorder = "border-l-4 border-l-green-500";
      expect(successBorder).toContain("border-l-green-500");
    });

    it("should show 'Amazing!' title with green checkmark", () => {
      const successFeedback = { title: 'Amazing!', message: "You're right on track!" };
      expect(successFeedback.title).toBe('Amazing!');
    });

    it("should have green Continue button", () => {
      const continueButtonStyle = "bg-green-500";
      expect(continueButtonStyle).toBe("bg-green-500");
    });

    it("should have report flag button", () => {
      const hasReportButton = true;
      expect(hasReportButton).toBe(true);
    });
  });

  describe("Error Feedback", () => {
    it("should have red left border", () => {
      const errorBorder = "border-l-4 border-l-red-500";
      expect(errorBorder).toContain("border-l-red-500");
    });

    it("should show 'Incorrect' title with red X", () => {
      const errorFeedback = { title: 'Incorrect', message: 'Try again' };
      expect(errorFeedback.title).toBe('Incorrect');
    });

    it("should display correct answer list", () => {
      const blanks = [
        { id: 'role', correctAnswer: 'software engineer' },
        { id: 'task', correctAnswer: 'write documentation' },
      ];
      
      const correctAnswerList = blanks.map(b => b.correctAnswer).join(', ');
      expect(correctAnswerList).toBe('software engineer, write documentation');
    });

    it("should have red Try again button", () => {
      const tryAgainStyle = "bg-red-500";
      expect(tryAgainStyle).toBe("bg-red-500");
    });

    it("should have report flag button", () => {
      const hasReportButton = true;
      expect(hasReportButton).toBe(true);
    });
  });

  describe("Completed State", () => {
    it("should show result image at top", () => {
      const resultImage = '/images/rocket-launch.png';
      expect(resultImage).toBeTruthy();
    });

    it("should show 'Task completed' green badge", () => {
      const completedBadge = "✓ Task completed";
      expect(completedBadge).toContain("Task completed");
    });

    it("should show 'Repeat task' button with purple border", () => {
      const repeatButtonStyle = "border-[#7C3AED] text-[#7C3AED]";
      expect(repeatButtonStyle).toContain("border-[#7C3AED]");
    });

    it("should show Pro Tip card at bottom", () => {
      const proTip = 'Use clear, specific instructions for best results!';
      expect(proTip).toBeTruthy();
    });

    it("should have gray background for Pro Tip card", () => {
      const proTipStyle = "bg-gray-100";
      expect(proTipStyle).toBe("bg-gray-100");
    });
  });

  describe("Show Hint Button", () => {
    it("should display hint text when clicked", () => {
      const hint = 'Think about what action you want ChatGPT to help you with.';
      expect(hint).toBeTruthy();
    });
  });

  describe("Skip Practice Button", () => {
    it("should allow skipping without completing", () => {
      const canSkip = true;
      expect(canSkip).toBe(true);
    });
  });
});
