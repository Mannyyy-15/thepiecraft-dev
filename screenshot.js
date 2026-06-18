const { chromium } = require('playwright');
const fs = require('fs');

const sites = [
  { name: 'devshelter', url: 'https://devshelter.in/' },
  { name: 'chaatlounge', url: 'https://chaat-lounge.vercel.app/' },
  { name: 'fragilebase', url: 'https://fragilebase.com/' },
  { name: 'apexgum', url: 'https://apexgum.com/' },
  { name: 'mittron', url: 'https://mittron-icecream.vercel.app/' },
  { name: 'thepiecraftmarketing', url: 'https://thepiecraftmarketing.com/' },
  { name: 'crm', url: 'https://thepiecraft-crm.vercel.app/' },
  { name: 'apexwatch', url: 'https://apex-watch.vercel.app/' },
  { name: 'yatrisync', url: 'https://yatrisync-web.vercel.app/' },
  { name: 'thepiecraft', url: 'https://thepiecraft.in/' },
];

(async () => {
  const browser = await chromium.launch();
  for (const site of sites) {
    console.log(`Taking screenshot for ${site.name}...`);
    try {
        const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
        await page.goto(site.url, { waitUntil: 'networkidle', timeout: 60000 });
        await page.waitForTimeout(5000);
        await page.screenshot({ path: `public/projects/${site.name}-full.png`, fullPage: true });
        await page.close();
        console.log(`Success: ${site.name}`);
    } catch (e) {
        console.error(`Error with ${site.name}:`, e.message);
    }
  }
  await browser.close();
  console.log('Done!');
})();
