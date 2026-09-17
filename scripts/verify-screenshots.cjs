const { chromium } = require('C:/Users/ppnh1/AppData/Roaming/npm/node_modules/@playwright/cli/node_modules/playwright-core');
const fs = require('fs');
const path = require('path');

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:4173/ ...');
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });

  // 1. Verify font family of all .handwritten elements
  const fontData = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.handwritten')).map(el => ({
      text: el.innerText.trim(),
      fontFamily: window.getComputedStyle(el).fontFamily,
      fontStyle: window.getComputedStyle(el).fontStyle,
      fontWeight: window.getComputedStyle(el).fontWeight
    }));
  });
  console.log('\n--- VERIFYING HANDWRITING FONTS ---');
  fontData.forEach((item, idx) => {
    console.log(`[${idx + 1}] "${item.text.replace(/\n/g, ' ')}" => font: ${item.fontFamily} (${item.fontStyle} ${item.fontWeight})`);
  });

  // 2. Desktop Screenshot: Hero & Top
  await page.screenshot({ path: 'artifacts/verified-desktop-hero.png' });
  console.log('\nSaved artifacts/verified-desktop-hero.png');

  // 3. Desktop Screenshot: Services & Stories
  await page.evaluate(() => window.scrollTo(0, 950));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'artifacts/verified-desktop-services.png' });
  console.log('Saved artifacts/verified-desktop-services.png');

  // 4. Desktop Screenshot: Process & Contact
  await page.evaluate(() => window.scrollTo(0, 2400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'artifacts/verified-desktop-contact.png' });
  console.log('Saved artifacts/verified-desktop-contact.png');

  // 5. Test Interactive Modal: Click first "Tìm hiểu thêm"
  console.log('\nTesting Modal Dialog...');
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.click('.service-card:first-child .learn-more');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'artifacts/verified-desktop-modal.png' });
  console.log('Saved artifacts/verified-desktop-modal.png');

  // Close modal
  await page.click('.dialog-close');
  await page.waitForTimeout(200);

  // 6. Mobile Viewport (iPhone 14/15: 390x844)
  console.log('\nTesting Mobile Viewport (390x844)...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'artifacts/verified-mobile-hero.png' });
  console.log('Saved artifacts/verified-mobile-hero.png');

  // Mobile Services
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'artifacts/verified-mobile-services.png' });
  console.log('Saved artifacts/verified-mobile-services.png');

  await browser.close();
  console.log('\nALL VERIFICATION PASSES COMPLETED!');
}

run().catch(err => {
  console.error('Error during verification:', err);
  process.exit(1);
});
