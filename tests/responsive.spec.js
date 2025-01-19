import { test, expect } from '@playwright/test';

const viewports = [
  { width: 320, height: 568 },  // iPhone SE
  { width: 375, height: 667 },  // iPhone 8
  { width: 414, height: 896 },  // iPhone 11
  { width: 768, height: 1024 }, // iPad
  { width: 1024, height: 768 }, // iPad landscape
  { width: 1280, height: 800 }, // Desktop
];

test.describe('Responsive Design Tests', () => {
  for (const viewport of viewports) {
    test(`page renders correctly at ${viewport.width}x${viewport.height}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('http://localhost:4173');
      
      // Check viewport meta tag
      const viewportMeta = await page.$('meta[name="viewport"]');
      expect(viewportMeta).toBeTruthy();

      // Check touch targets
      const links = await page.$$('a, button');
      for (const link of links) {
        const box = await link.boundingBox();
        expect(box.width >= 44).toBeTruthy();
        expect(box.height >= 44).toBeTruthy();
      }

      // Check content scaling
      const content = await page.$('main');
      const box = await content.boundingBox();
      expect(box.width).toBeLessThanOrEqual(viewport.width);
    });
  }
});
