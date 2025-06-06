import { test, expect } from '@playwright/test';

test.describe('Consumer Page Tests', () => {
  test('Home page has title', async ({ page }) => {
    await page.goto('http://localhost:5173/consumer');
    await expect(page).toHaveTitle(/Portfolio - Consumer/);
  });

  test('About page has title', async ({ page }) => {
    await page.goto('http://localhost:5173/consumer/about');
    await expect(page.url()).toContain('about');
  });
});
