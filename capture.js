const puppeteer = require('puppeteer');
const fs = require('fs');

const projects = [
  { url: 'https://apex-watch.vercel.app/', file: 'apex-watch.jpg' },
  { url: 'http://yatrisync-web.vercel.app/', file: 'yatrisync-web.jpg' },
  { url: 'http://thepiecraftmarketing.com/', file: 'thepiecraft-marketing.jpg' },
  { url: 'http://thepiecraft.in/', file: 'thepiecraft-in.jpg' },
  { url: 'https://thepiecraft-crm.vercel.app/', file: 'thepiecraft-crm.jpg' },
  { url: 'https://chaat-lounge.vercel.app/', file: 'chaat-lounge.jpg' },
  { url: 'https://mittron-icecream.vercel.app/', file: 'mittron-icecream.jpg' },
  { url: 'https://fragilebase.com/', file: 'fragilebase.jpg' },
  { url: 'https://apexgum.com/', file: 'apexgum.jpg' },
  { url: 'https://devshelter.vercel.app/', file: 'devshelter.jpg' },
  { url: 'https://theunknownband.netlify.app/', file: 'theunknownband.jpg' },
];

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  if (!fs.existsSync('public/projects')) {
    fs.mkdirSync('public/projects', { recursive: true });
  }

  for (const { url, file } of projects) {
    console.log(`Capturing ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      // Wait for 5 seconds to let preloaders and entrance animations finish
      await new Promise(r => setTimeout(r, 5000));
      
      // Auto-scroll to trigger lazy loading if needed
      await page.evaluate(async () => {
          await new Promise((resolve) => {
              let totalHeight = 0;
              const distance = 100;
              const timer = setInterval(() => {
                  const scrollHeight = document.body.scrollHeight;
                  window.scrollBy(0, distance);
                  totalHeight += distance;
                  if (totalHeight >= scrollHeight - window.innerHeight) {
                      clearInterval(timer);
                      resolve();
                  }
              }, 100);
          });
      });

      // Scroll back to top
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(r => setTimeout(r, 1000));

      await page.screenshot({ path: `public/projects/${file}`, fullPage: true, type: 'jpeg', quality: 80 });
      console.log(`Successfully captured ${file}`);
    } catch (err) {
      console.error(`Failed to capture ${url}:`, err);
    }
  }

  await browser.close();
  console.log('All screenshots captured!');
})();
