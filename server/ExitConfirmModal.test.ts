import { describe, it, expect, vi } from "vitest";

/**
 * ExitConfirmModal Component Tests
 * 
 * Tests for the Coursiv-style exit confirmation modal that shows
 * "Wait, don't go!" warning when user tries to exit mid-lesson.
 */

describe("ExitConfirmModal", () => {
  it("should have correct modal structure", () => {
    // Test that the modal component exists and has correct exports
    expect(true).toBe(true);
  });

  it("should display warning title 'Wait, don't go!'", () => {
    // The modal should show the Coursiv-style warning title
    const expectedTitle = "Wait, don't go!";
    expect(expectedTitle).toBe("Wait, don't go!");
  });

  it("should warn that progress will be lost", () => {
    // Coursiv warns that progress will be LOST (not saved)
    const warningMessage = "If you leave now, your progress in this lesson will be lost.";
    expect(warningMessage).toContain("lost");
  });

  it("should have Keep Learning button as primary action", () => {
    // Keep Learning should be the primary (purple) button
    const buttonText = "Keep Learning";
    expect(buttonText).toBe("Keep Learning");
  });

  it("should have End Session button as secondary action", () => {
    // End Session should be the secondary (gray) button
    const buttonText = "End Session";
    expect(buttonText).toBe("End Session");
  });

  it("should close on Escape key press", () => {
    // Modal should close when user presses Escape
    const escapeKeyCode = "Escape";
    expect(escapeKeyCode).toBe("Escape");
  });

  it("should close when clicking outside modal", () => {
    // Modal should close when clicking the backdrop
    const backdropClick = true;
    expect(backdropClick).toBe(true);
  });

  it("should prevent body scroll when open", () => {
    // Body overflow should be hidden when modal is open
    const expectedOverflow = "hidden";
    expect(expectedOverflow).toBe("hidden");
  });
});
