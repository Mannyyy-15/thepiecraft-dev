const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  try {
      const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
      console.log('Navigating to devshelter...');
      await page.goto('https://devshelter.in/', { waitUntil: 'load', timeout: 60000 });
      await page.waitForTimeout(5000); // wait for initial animations
      console.log('Taking screenshot...');
      await page.screenshot({ path: `public/projects/devshelter-full.png`, fullPage: true });
      console.log('Success: devshelter');
  } catch (e) {
      console.error('Error with devshelter:', e.message);
  }
  await browser.close();
  console.log('Done devshelter!');
})();
