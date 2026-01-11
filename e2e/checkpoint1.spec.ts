import { test, expect } from '@playwright/test';

test.describe('E2E Checkpoint 1: User System + Streaks + Course Data', () => {
  
  // Test User Registration
  test('user can complete quiz and register', async ({ page }) => {
    await page.goto('/quiz');
    
    // Complete quiz steps (simplified - click through)
    for (let i = 0; i < 21; i++) {
      // Click first option if available
      const option = page.locator('[data-testid="quiz-option"]').first();
      if (await option.isVisible({ timeout: 2000 }).catch(() => false)) {
        await option.click();
        await page.waitForTimeout(500);
      } else {
        // Try clicking continue or next button
        const continueBtn = page.locator('button:has-text("Continue"), button:has-text("Next"), button:has-text("Get Started")').first();
        if (await continueBtn.isVisible({ timeout: 1000 }).catch(() => false)) {
          await continueBtn.click();
          await page.waitForTimeout(500);
        }
      }
    }
    
    // On final step, fill email and password
    const emailInput = page.locator('input[type="email"], input[name="email"]');
    const passwordInput = page.locator('input[type="password"], input[name="password"]');
    
    if (await emailInput.isVisible({ timeout: 3000 }).catch(() => false)) {
      await emailInput.fill('e2etest@example.com');
      await passwordInput.fill('TestPassword123!');
      
      const submitBtn = page.locator('button[type="submit"], button:has-text("Create Account")').first();
      await submitBtn.click();
      
      // Should redirect to dashboard or show success
      await expect(page).toHaveURL(/dashboard|upsell/, { timeout: 10000 });
    }
  });

  // Test User Login
  test('user can login with email and password', async ({ page }) => {
    await page.goto('/login');
    
    await page.fill('input[type="email"], input[name="email"]', 'e2etest@example.com');
    await page.fill('input[type="password"], input[name="password"]', 'TestPassword123!');
    
    await page.click('button[type="submit"], button:has-text("Sign In")');
    
    // Should redirect to dashboard
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
  });

  // Test Dashboard Access
  test('logged in user can access dashboard', async ({ page }) => {
    // First login
    await page.goto('/login');
    await page.fill('input[type="email"], input[name="email"]', 'e2etest@example.com');
    await page.fill('input[type="password"], input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"], button:has-text("Sign In")');
    
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
    
    // Check dashboard elements
    await expect(page.locator('text=Home')).toBeVisible();
    await expect(page.locator('text=Guides')).toBeVisible();
    await expect(page.locator('text=Challenges')).toBeVisible();
  });

  // Test Weekly Streaks Display
  test('weekly streaks component is visible on dashboard', async ({ page }) => {
    // Login first
    await page.goto('/login');
    await page.fill('input[type="email"], input[name="email"]', 'e2etest@example.com');
    await page.fill('input[type="password"], input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"], button:has-text("Sign In")');
    
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
    
    // Check for Weekly Streaks component
    await expect(page.locator('text=WEEKLY STREAKS').or(page.locator('text=Weekly Streaks'))).toBeVisible({ timeout: 5000 });
  });

  // Test Guides Page Shows Courses
  test('guides page displays course list', async ({ page }) => {
    // Login first
    await page.goto('/login');
    await page.fill('input[type="email"], input[name="email"]', 'e2etest@example.com');
    await page.fill('input[type="password"], input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"], button:has-text("Sign In")');
    
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
    
    // Navigate to Guides
    await page.click('text=Guides');
    
    // Check for course cards
    await expect(page.locator('text=ChatGPT').first()).toBeVisible({ timeout: 5000 });
  });

  // Test Test Mode Toggle (if allowed)
  test('test mode can be toggled in profile settings', async ({ page }) => {
    // Login first
    await page.goto('/login');
    await page.fill('input[type="email"], input[name="email"]', 'e2etest@example.com');
    await page.fill('input[type="password"], input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"], button:has-text("Sign In")');
    
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
    
    // Navigate to Profile
    await page.click('text=Profile');
    
    // Look for Developer Options (if ALLOW_TEST_MODE is true)
    const devOptions = page.locator('text=Developer Options');
    if (await devOptions.isVisible({ timeout: 3000 }).catch(() => false)) {
      // Toggle test mode
      const toggle = page.locator('text=Enable Test Mode').locator('..').locator('input[type="checkbox"], button');
      if (await toggle.isVisible().catch(() => false)) {
        await toggle.click();
        // Should show test mode banner
        await expect(page.locator('text=Test Mode')).toBeVisible({ timeout: 3000 });
      }
    }
  });

  // Test Logout
  test('user can logout', async ({ page }) => {
    // Login first
    await page.goto('/login');
    await page.fill('input[type="email"], input[name="email"]', 'e2etest@example.com');
    await page.fill('input[type="password"], input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"], button:has-text("Sign In")');
    
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
    
    // Navigate to Profile and logout
    await page.click('text=Profile');
    await page.click('text=Log Out');
    
    // Should redirect to home or login
    await expect(page).toHaveURL(/^\/$|\/login/, { timeout: 10000 });
  });
});
