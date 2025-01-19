import { test, expect } from '@playwright/test';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

const browsers = ['chromium', 'firefox', 'webkit'];
const modes = ['portrait', 'landscape'];

test.describe('Visual Regression Tests', () => {
  for (const browserType of browsers) {
    test(`app shell renders correctly in ${browserType}`, async ({ browser }) => {
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto('http://localhost:4173');
      
      const screenshot = await page.screenshot();
      expect(screenshot).toMatchImageSnapshot({
        customSnapshotIdentifier: `app-shell-${browserType}`
      });
    });

    for (const mode of modes) {
      test(`splash screen appears correctly in ${browserType} ${mode}`, async ({ browser }) => {
        const context = await browser.newContext({
          viewport: mode === 'portrait' ? { width: 375, height: 667 } : { width: 667, height: 375 }
        });
        const page = await context.newPage();
        await page.goto('http://localhost:4173');
        
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchImageSnapshot({
          customSnapshotIdentifier: `splash-screen-${browserType}-${mode}`
        });
      });
    }
  }
});
