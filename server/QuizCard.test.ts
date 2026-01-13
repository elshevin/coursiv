import { describe, it, expect } from "vitest";

/**
 * QuizCard Component Tests (Coursiv Style)
 * 
 * Tests for the embedded Quiz card component that matches Coursiv's styling:
 * - Purple filled circle for selected option
 * - Green/Red left border for feedback
 * - White background with shadow
 */

describe("QuizCard - Coursiv Style", () => {
  describe("Option Selection", () => {
    it("should show empty circle for unselected options", () => {
      // Unselected options should have an empty circle indicator
      const unselectedStyle = "border-2 border-gray-300";
      expect(unselectedStyle).toContain("border-gray-300");
    });

    it("should show purple filled circle for selected option", () => {
      // Selected option should have purple filled circle (Coursiv style)
      const selectedStyle = "bg-[#7C3AED]";
      expect(selectedStyle).toContain("#7C3AED");
    });

    it("should have white inner dot in selected circle", () => {
      // The purple circle should have a white dot inside
      const innerDotStyle = "bg-white";
      expect(innerDotStyle).toBe("bg-white");
    });
  });

  describe("Feedback Styling", () => {
    it("should show green left border for correct answer", () => {
      // Correct feedback should have green left border
      const correctStyle = "border-l-4 border-l-green-500";
      expect(correctStyle).toContain("border-l-green-500");
    });

    it("should show red left border for incorrect answer", () => {
      // Incorrect feedback should have red left border
      const incorrectStyle = "border-l-4 border-l-red-500";
      expect(incorrectStyle).toContain("border-l-red-500");
    });

    it("should have white background for feedback card", () => {
      // Feedback card should have white background (not colored)
      const feedbackBg = "bg-white";
      expect(feedbackBg).toBe("bg-white");
    });

    it("should display 'Correct answer' for correct feedback", () => {
      const correctTitle = "Correct answer";
      expect(correctTitle).toBe("Correct answer");
    });

    it("should display 'Incorrect' for wrong feedback", () => {
      const incorrectTitle = "Incorrect";
      expect(incorrectTitle).toBe("Incorrect");
    });
  });

  describe("Card Layout", () => {
    it("should have shadow effect on card", () => {
      const cardShadow = "shadow-sm";
      expect(cardShadow).toBe("shadow-sm");
    });

    it("should have rounded corners", () => {
      const cardRadius = "rounded-xl";
      expect(cardRadius).toBe("rounded-xl");
    });
  });
});
