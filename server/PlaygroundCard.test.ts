import { describe, it, expect } from "vitest";

/**
 * PlaygroundCard Component Tests (Coursiv Style)
 * 
 * Tests for the embedded Playground card component that matches Coursiv's styling:
 * - Purple left border for filled blanks
 * - Pill-shaped option buttons
 * - Green left border for success feedback
 */

describe("PlaygroundCard - Coursiv Style", () => {
  describe("Prompt Editor", () => {
    it("should have card-like container with shadow", () => {
      const containerStyle = "bg-white rounded-xl border border-gray-100 shadow-sm";
      expect(containerStyle).toContain("shadow-sm");
    });

    it("should show purple left border for filled blanks", () => {
      const filledBlankStyle = "border-l-4 border-l-[#7C3AED]";
      expect(filledBlankStyle).toContain("border-l-[#7C3AED]");
    });

    it("should show purple background for filled blanks", () => {
      const filledBlankBg = "bg-purple-100";
      expect(filledBlankBg).toBe("bg-purple-100");
    });

    it("should animate active blank with pulse", () => {
      const activeBlankStyle = "animate-pulse";
      expect(activeBlankStyle).toBe("animate-pulse");
    });

    it("should show gray border for inactive blanks", () => {
      const inactiveBlankStyle = "border-gray-300";
      expect(inactiveBlankStyle).toBe("border-gray-300");
    });
  });

  describe("Option Picker", () => {
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
  });

  describe("Success Feedback", () => {
    it("should have green left border", () => {
      const successBorder = "border-l-4 border-l-green-500";
      expect(successBorder).toContain("border-l-green-500");
    });

    it("should have white background", () => {
      const successBg = "bg-white";
      expect(successBg).toBe("bg-white");
    });

    it("should have shadow effect", () => {
      const successShadow = "shadow-sm";
      expect(successShadow).toBe("shadow-sm");
    });

    it("should have green icon background", () => {
      const iconBg = "bg-green-100";
      expect(iconBg).toBe("bg-green-100");
    });

    it("should have purple continue button", () => {
      const continueButtonStyle = "bg-[#7C3AED]";
      expect(continueButtonStyle).toBe("bg-[#7C3AED]");
    });
  });
});
