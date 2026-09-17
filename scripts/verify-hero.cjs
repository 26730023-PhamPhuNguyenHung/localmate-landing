const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (err) {
    return (err.stdout || '') + '\n' + (err.stderr || '');
  }
}

const SESSION = 'hero-verify';
const BASE_URL = 'http://localhost:3001';

console.log('=== HERO COMPONENT VERIFICATION ===');

// Ensure screenshot dir exists
const screenshotDir = path.join(__dirname, '..', 'artifacts', 'screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

// 1. Open on Desktop
console.log('\n1. Testing Desktop Viewport (1440x900)...');
run(`agent-browser --session ${SESSION} set viewport 1440 900`);
run(`agent-browser --session ${SESSION} open ${BASE_URL}`);
run(`agent-browser --session ${SESSION} wait 2000`);

// Check Hero presence & headline
const heroCheckScript = `
(() => {
  const hero = document.getElementById('hero');
  if (!hero) return { found: false };
  const h1 = hero.querySelector('.hero-headline');
  const tabs = Array.from(hero.querySelectorAll('.industry-tab-btn')).map(t => t.textContent.trim());
  const activeTab = hero.querySelector('.industry-tab-btn.active')?.textContent.trim();
  const mockupTitle = hero.querySelector('.mockup-project-title')?.textContent.trim();
  const mockupDomain = hero.querySelector('.url-text')?.textContent.trim();
  const trustItems = Array.from(hero.querySelectorAll('.trust-strip-item')).map(t => t.textContent.trim());
  const hasOverflow = document.documentElement.scrollWidth > window.innerWidth;
  
  return {
    found: true,
    h1: h1 ? h1.textContent.trim() : '',
    tabs,
    activeTab,
    mockupTitle,
    mockupDomain,
    trustCount: trustItems.length,
    trustItems,
    hasOverflow,
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth
  };
})()
`;

const res1 = run(`agent-browser --session ${SESSION} eval "${heroCheckScript.replace(/\n\s*/g, ' ').replace(/"/g, '\\"')}"`);
console.log('Desktop Hero Check Result:', res1.trim());

// 2. Test Tab Clicking
console.log('\n2. Testing Industry Tabs Switching...');
const clickTabTest = `
(() => {
  const tabs = document.querySelectorAll('.industry-tab-btn');
  const results = [];
  tabs.forEach((tab, index) => {
    tab.click();
    const active = document.querySelector('.industry-tab-btn.active')?.textContent.trim();
    const title = document.querySelector('.mockup-project-title')?.textContent.trim();
    const domain = document.querySelector('.url-text')?.textContent.trim();
    results.push({ tabIndex: index, active, title, domain });
  });
  return results;
})()
`;
const res2 = run(`agent-browser --session ${SESSION} eval "${clickTabTest.replace(/\n\s*/g, ' ').replace(/"/g, '\\"')}"`);
console.log('Tab Switch Test Result:', res2.trim());

// 3. Test Mobile Viewport (390x844)
console.log('\n3. Testing Mobile Viewport (390x844)...');
run(`agent-browser --session ${SESSION} set viewport 390 844`);
run(`agent-browser --session ${SESSION} wait 500`);
const mobileCheckScript = `
(() => {
  const hasOverflow = document.documentElement.scrollWidth > window.innerWidth;
  const overflowDiff = document.documentElement.scrollWidth - window.innerWidth;
  const tabs = document.querySelectorAll('.industry-tab-btn').length;
  const mockup = !!document.querySelector('.hero-mockup-card');
  return {
    viewport: '390x844',
    hasOverflow,
    overflowDiff,
    tabsCount: tabs,
    mockupVisible: mockup
  };
})()
`;
const res3 = run(`agent-browser --session ${SESSION} eval "${mobileCheckScript.replace(/\n\s*/g, ' ').replace(/"/g, '\\"')}"`);
console.log('Mobile Check Result:', res3.trim());

// 4. Reset to Desktop and Take Screenshot
console.log('\n4. Capturing Verified Screenshot...');
run(`agent-browser --session ${SESSION} set viewport 1366 768`);
run(`agent-browser --session ${SESSION} wait 500`);
const screenshotPath = path.join(screenshotDir, 'hero-desktop-verified.png');
run(`agent-browser --session ${SESSION} screenshot "${screenshotPath}"`);
console.log('Screenshot saved to:', screenshotPath);

run(`agent-browser --session ${SESSION} close`);
console.log('\n=== VERIFICATION FINISHED ===');
