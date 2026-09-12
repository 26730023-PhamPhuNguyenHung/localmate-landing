const { execSync } = require('child_process');
const fs = require('fs');

function runCmd(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (err) {
    return (err.stdout || '') + '\n' + (err.stderr || '');
  }
}

function runAgent(commands) {
  const fullCmd = 'cmd /c "' + commands.join(' && ') + '"';
  return runCmd(fullCmd);
}

const report = {
  timestamp: new Date().toISOString(),
  desktop: {},
  mobile: {},
  pricingPage: {},
  conversionFlow: {},
  anomalies: []
};

console.log('=== STARTING PRICING AUDIT ===');

// 1. DESKTOP AUDIT (1440x900)
console.log('1. Auditing Desktop (1440x900) on Homepage...');
const desktopSetup = [
  'agent-browser --session pricing-auditor set viewport 1440 900',
  'agent-browser --session pricing-auditor open http://localhost:5173',
  'agent-browser --session pricing-auditor wait 1000'
];
runAgent(desktopSetup);

// Desktop Inspection
const desktopInspectCmd = `agent-browser --session pricing-auditor eval "(() => {
  const section = document.getElementById('bang-gia');
  if (!section) return { error: 'Section #bang-gia not found' };

  const searchBox = document.querySelector('.pricing-search-box');
  const searchInput = document.querySelector('.pricing-search-input');
  const tabs = Array.from(document.querySelectorAll('.category-tab-btn')).map(t => ({
    text: t.innerText.trim(),
    active: t.classList.contains('active'),
    width: t.offsetWidth,
    height: t.offsetHeight
  }));

  const tabsContainer = document.querySelector('.pricing-category-tabs');
  const tabsStyle = window.getComputedStyle(tabsContainer);

  const cards = Array.from(document.querySelectorAll('.service-matrix-card')).map(c => {
    const titleEl = c.querySelector('.matrix-service-name');
    const scopeEl = c.querySelector('.matrix-service-scope');
    const priceValEl = c.querySelector('.matrix-price-val');
    const priceUnitEl = c.querySelector('.matrix-price-unit');
    const btnEl = c.querySelector('.matrix-action-btn');
    const popular = c.classList.contains('popular-matrix-card');
    const pill = c.querySelector('.matrix-cat-pill')?.innerText.trim();

    return {
      title: titleEl?.innerText.trim(),
      scope: scopeEl?.innerText.trim(),
      price: priceValEl?.innerText.trim(),
      unit: priceUnitEl?.innerText.trim(),
      hasBtn: !!btnEl,
      btnText: btnEl?.innerText.trim(),
      isPopular: popular,
      pill: pill,
      cardHeight: c.offsetHeight,
      titleHeight: titleEl?.offsetHeight,
      scopeHeight: scopeEl?.offsetHeight
    };
  });

  const cardHeights = cards.map(c => c.cardHeight);
  const minHeight = Math.min(...cardHeights);
  const maxHeight = Math.max(...cardHeights);

  // Horizontal overflow check
  const bodyScrollWidth = document.body.scrollWidth;
  const windowWidth = window.innerWidth;
  const hasOverflow = bodyScrollWidth > windowWidth;

  return {
    sectionTitle: section.querySelector('h2')?.innerText.trim(),
    hasSearch: !!searchInput,
    searchPlaceholder: searchInput?.placeholder,
    searchBoxWidth: searchBox?.offsetWidth,
    tabsDisplay: tabsStyle.display,
    tabsFlexWrap: tabsStyle.flexWrap,
    tabCount: tabs.length,
    tabs: tabs,
    cardCount: cards.length,
    cardHeightsRange: { min: minHeight, max: maxHeight, diff: maxHeight - minHeight },
    hasHorizontalOverflow: hasOverflow,
    sampleCards: cards.slice(0, 5)
  };
})()"`;

const desktopResRaw = runAgent([desktopInspectCmd]);
try {
  const jsonMatch = desktopResRaw.match(/\{[\s\S]*\}/);
  if (jsonMatch) report.desktop = JSON.parse(jsonMatch[0]);
} catch (e) {
  report.desktop = { raw: desktopResRaw };
}

// Test Desktop Search & Tab Filter
console.log('Testing Desktop Search & Filter interactions...');
const testSearchCmd = `agent-browser --session pricing-auditor eval "(() => {
  const input = document.querySelector('.pricing-search-input');
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  nativeInputValueSetter.call(input, 'Google Maps');
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return { searchVal: input.value };
})()"`;

const testSearchRes = runAgent([
  testSearchCmd,
  'agent-browser --session pricing-auditor wait 300',
  `agent-browser --session pricing-auditor eval "(() => {
    const cards = Array.from(document.querySelectorAll('.service-matrix-card')).map(c => c.querySelector('.matrix-service-name')?.innerText.trim());
    const clearBtn = document.querySelector('.search-clear-btn');
    return { filteredCount: cards.length, cards, hasClearBtn: !!clearBtn };
  })()"`
]);
try {
  const match = testSearchRes.match(/\{[\s\S]*\}/g);
  if (match && match.length > 0) {
    report.desktop.searchTest = JSON.parse(match[match.length - 1]);
  }
} catch (e) {}

// Test Clear Search
const clearSearchCmd = [
  'agent-browser --session pricing-auditor click .search-clear-btn',
  'agent-browser --session pricing-auditor wait 300',
  `agent-browser --session pricing-auditor eval "(() => {
    return { restoredCount: document.querySelectorAll('.service-matrix-card').length };
  })()"`
];
const clearRes = runAgent(clearSearchCmd);
try {
  const match = clearRes.match(/\{[\s\S]*\}/g);
  if (match) report.desktop.clearSearchTest = JSON.parse(match[match.length - 1]);
} catch (e) {}

// Test Empty Search Result
const emptySearchCmd = [
  `agent-browser --session pricing-auditor eval "(() => {
    const input = document.querySelector('.pricing-search-input');
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(input, 'xyznonexistent123');
    input.dispatchEvent(new Event('input', { bubbles: true }));
  })()"`,
  'agent-browser --session pricing-auditor wait 300',
  `agent-browser --session pricing-auditor eval "(() => {
    const emptyState = document.querySelector('.no-services-found');
    return {
      hasEmptyState: !!emptyState,
      emptyText: emptyState?.innerText.trim(),
      hasResetBtn: !!document.querySelector('.btn-reset-filter')
    };
  })()"`
];
const emptyRes = runAgent(emptySearchCmd);
try {
  const match = emptyRes.match(/\{[\s\S]*\}/g);
  if (match) report.desktop.emptySearchTest = JSON.parse(match[match.length - 1]);
} catch (e) {}

// Reset back to all
runAgent([
  'agent-browser --session pricing-auditor click .btn-reset-filter',
  'agent-browser --session pricing-auditor wait 300'
]);

// 2. MOBILE AUDIT (390x844)
console.log('2. Auditing Mobile (390x844)...');
const mobileSetup = [
  'agent-browser --session pricing-auditor set viewport 390 844',
  'agent-browser --session pricing-auditor open http://localhost:5173',
  'agent-browser --session pricing-auditor wait 1000'
];
runAgent(mobileSetup);

const mobileInspectCmd = `agent-browser --session pricing-auditor eval "(() => {
  const section = document.getElementById('bang-gia');
  const tabsContainer = document.querySelector('.pricing-category-tabs');
  const tabsStyle = window.getComputedStyle(tabsContainer);

  const bodyScrollWidth = document.body.scrollWidth;
  const windowWidth = window.innerWidth;
  const sectionScrollWidth = section?.scrollWidth || 0;
  const hasHorizontalOverflow = bodyScrollWidth > windowWidth;

  const tabsHeight = tabsContainer?.offsetHeight;
  const tabButtons = Array.from(document.querySelectorAll('.category-tab-btn')).map(b => ({
    text: b.innerText.trim(),
    top: b.offsetTop,
    width: b.offsetWidth,
    height: b.offsetHeight
  }));

  // Check how many rows the tabs wrap into
  const distinctTops = [...new Set(tabButtons.map(b => b.top))];

  // Cards metrics on mobile
  const grid = document.querySelector('.pricing-cards-grid-v2');
  const gridStyle = window.getComputedStyle(grid);
  const gridHeight = grid?.offsetHeight;

  const cards = Array.from(document.querySelectorAll('.service-matrix-card')).map(c => {
    const btn = c.querySelector('.matrix-action-btn');
    const btnRect = btn ? btn.getBoundingClientRect() : null;
    return {
      cardHeight: c.offsetHeight,
      btnHeight: btn ? btn.offsetHeight : 0,
      btnWidth: btn ? btn.offsetWidth : 0,
      priceVal: c.querySelector('.matrix-price-val')?.innerText.trim(),
      priceUnit: c.querySelector('.matrix-price-unit')?.innerText.trim()
    };
  });

  const touchTargets = cards.map(c => ({
    height: c.btnHeight,
    isAccessibleTouchTarget: c.btnHeight >= 44
  }));
  const undersizedButtons = touchTargets.filter(t => !t.isAccessibleTouchTarget).length;

  return {
    viewport: { width: windowWidth, height: window.innerHeight },
    bodyScrollWidth,
    hasHorizontalOverflow,
    tabsWrapRows: distinctTops.length,
    tabsContainerHeight: tabsHeight,
    tabsDisplay: tabsStyle.display,
    tabsFlexWrap: tabsStyle.flexWrap,
    gridTemplateColumns: gridStyle.gridTemplateColumns,
    totalGridHeight: gridHeight,
    cardCount: cards.length,
    averageCardHeight: gridHeight / cards.length,
    undersizedButtonsCount: undersizedButtons,
    sampleButtonHeight: cards[0]?.btnHeight
  };
})()"`;

const mobileResRaw = runAgent([mobileInspectCmd]);
try {
  const jsonMatch = mobileResRaw.match(/\{[\s\S]*\}/);
  if (jsonMatch) report.mobile = JSON.parse(jsonMatch[0]);
} catch (e) {
  report.mobile = { raw: mobileResRaw };
}

// 3. PRICING PAGE AUDIT (/bang-gia) & DIGITAL CARE AUDIT
console.log('3. Auditing /bang-gia page & DigitalCareSection...');
const pricingPageSetup = [
  'agent-browser --session pricing-auditor set viewport 1440 900',
  'agent-browser --session pricing-auditor open http://localhost:5173/bang-gia',
  'agent-browser --session pricing-auditor wait 1000'
];
runAgent(pricingPageSetup);

const pricingPageInspectCmd = `agent-browser --session pricing-auditor eval "(() => {
  const dcSection = document.getElementById('digital-care');
  const starterSection = document.querySelector('.starter-package-section, [id*=\"starter\"], [id*=\"khởi tạo\"]');
  
  // Digital care tiers
  const dcTiers = Array.from(document.querySelectorAll('#digital-care h3')).map(h3 => {
    const parent = h3.closest('div[style*=\"border\"]') || h3.parentElement?.parentElement;
    const price = parent?.querySelector('span[style*=\"color-orange\"]')?.innerText.trim();
    const btn = parent?.querySelector('button');
    return {
      name: h3.innerText.trim(),
      price: price,
      hasBtn: !!btn,
      btnText: btn?.innerText.trim()
    };
  });

  return {
    hasPricingMatrix: !!document.getElementById('bang-gia'),
    hasDigitalCareSection: !!dcSection,
    digitalCareTiers: dcTiers,
    digitalCareSectionTitle: dcSection?.querySelector('h2')?.innerText.trim()
  };
})()"`;

const pricingPageResRaw = runAgent([pricingPageInspectCmd]);
try {
  const jsonMatch = pricingPageResRaw.match(/\{[\s\S]*\}/);
  if (jsonMatch) report.pricingPage = JSON.parse(jsonMatch[0]);
} catch (e) {
  report.pricingPage = { raw: pricingPageResRaw };
}

// 4. CONVERSION FLOW & LEAD MODAL AUDIT ON /bang-gia
console.log('4. Testing Lead Modal conversion on /bang-gia vs Homepage...');
// Test clicking "Tư vấn ngay" on /bang-gia
const testPricingPageBtnClick = [
  `agent-browser --session pricing-auditor eval "(() => {
    const firstBtn = document.querySelector('.service-matrix-card .matrix-action-btn');
    if (firstBtn) {
      firstBtn.click();
      return { clicked: true, btnText: firstBtn.innerText.trim() };
    }
    return { clicked: false };
  })()"`,
  'agent-browser --session pricing-auditor wait 600',
  `agent-browser --session pricing-auditor eval "(() => {
    const modal = document.querySelector('[role=\"dialog\"]');
    return {
      currentUrl: window.location.pathname,
      modalOpened: !!modal,
      didRedirectToContact: window.location.pathname === '/lien-he'
    };
  })()"`
];
const pricingPageBtnRes = runAgent(testPricingPageBtnClick);
try {
  const matches = pricingPageBtnRes.match(/\{[\s\S]*\}/g);
  if (matches) report.conversionFlow.pricingPageAction = JSON.parse(matches[matches.length - 1]);
} catch (e) {}

// Test Digital Care Button Click
runAgent([
  'agent-browser --session pricing-auditor open http://localhost:5173/bang-gia',
  'agent-browser --session pricing-auditor wait 800'
]);
const testDigitalCareClick = [
  `agent-browser --session pricing-auditor eval "(() => {
    const dcBtn = document.querySelector('#digital-care button');
    if (dcBtn) {
      dcBtn.click();
      return { clicked: true, text: dcBtn.innerText.trim() };
    }
    return { clicked: false };
  })()"`,
  'agent-browser --session pricing-auditor wait 600',
  `agent-browser --session pricing-auditor eval "(() => {
    const modal = document.querySelector('[role=\"dialog\"]');
    return {
      currentUrl: window.location.pathname,
      modalOpened: !!modal,
      didRedirectToContact: window.location.pathname === '/lien-he'
    };
  })()"`
];
const dcClickRes = runAgent(testDigitalCareClick);
try {
  const matches = dcClickRes.match(/\{[\s\S]*\}/g);
  if (matches) report.conversionFlow.digitalCareAction = JSON.parse(matches[matches.length - 1]);
} catch (e) {}

// Test Homepage Lead Modal Content
runAgent([
  'agent-browser --session pricing-auditor open http://localhost:5173',
  'agent-browser --session pricing-auditor wait 800'
]);
const testHomepageModalContent = [
  `agent-browser --session pricing-auditor eval "(() => {
    const card = document.querySelector('.service-matrix-card');
    const srvName = card?.querySelector('.matrix-service-name')?.innerText.trim();
    const btn = card?.querySelector('.matrix-action-btn');
    btn?.click();
    return { targetService: srvName };
  })()"`,
  'agent-browser --session pricing-auditor wait 600',
  `agent-browser --session pricing-auditor eval "(() => {
    const modal = document.querySelector('[role=\"dialog\"]');
    const inputs = Array.from(modal?.querySelectorAll('input, textarea') || []).map(i => ({
      placeholder: i.placeholder,
      value: i.value
    }));
    const textContent = modal?.innerText || '';
    return {
      modalOpen: !!modal,
      inputs: inputs,
      modalTextContainsServiceName: textContent.includes('Website 1 Trang'),
      modalTitle: modal?.querySelector('h3')?.innerText.trim(),
      modalEyebrow: modal?.querySelector('span')?.innerText.trim()
    };
  })()"`
];
const hpModalRes = runAgent(testHomepageModalContent);
try {
  const matches = hpModalRes.match(/\{[\s\S]*\}/g);
  if (matches) report.conversionFlow.homepageModalContent = JSON.parse(matches[matches.length - 1]);
} catch (e) {}

console.log('FINAL_AUDIT_OUTPUT_START');
console.log(JSON.stringify(report, null, 2));
console.log('FINAL_AUDIT_OUTPUT_END');
