describe('Service Worker Tests', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4173');
  });

  test('service worker registers successfully', async () => {
    const registration = await page.evaluate(() => {
      return navigator.serviceWorker.getRegistration();
    });
    expect(registration).toBeTruthy();
  });

  test('offline functionality works', async () => {
    // Disable network
    await page.setOffline(true);
    
    // Try to load the page
    const response = await page.goto('http://localhost:4173');
    expect(response.status()).toBe(200);
    
    // Check if critical content is present
    const heading = await page.$('h1');
    expect(heading).toBeTruthy();
  });

  test('cache is properly populated', async () => {
    const caches = await page.evaluate(() => {
      return caches.keys();
    });
    expect(caches.length).toBeGreaterThan(0);
  });
});
