import { execSync } from 'child_process';
import fs from 'fs';

const baseUrl = 'http://localhost:3000';

const viewports = [
  // Mobile
  { w: 320, h: 568, label: '320x568 (iPhone SE v1)' },
  { w: 360, h: 640, label: '360x640 (Galaxy S / Moto)' },
  { w: 375, h: 667, label: '375x667 (iPhone SE / 8)' },
  { w: 390, h: 844, label: '390x844 (iPhone 12/13/14)' },
  { w: 412, h: 915, label: '412x915 (Galaxy S21/A-series)' },
  { w: 430, h: 932, label: '430x932 (iPhone Pro Max)' },
  // Tablet
  { w: 768, h: 1024, label: '768x1024 (iPad Portrait)' },
  { w: 820, h: 1180, label: '820x1180 (iPad Air)' },
  { w: 1024, h: 768, label: '1024x768 (iPad Landscape)' },
  // Navbar Danger Zone 900px - 1150px
  { w: 900, h: 700, label: '900x700 (900px threshold)' },
  { w: 960, h: 600, label: '960x600 (FHD 200% zoom)' },
  { w: 1000, h: 700, label: '1000x700 (1000px threshold)' },
  { w: 1050, h: 700, label: '1050x700 (1050px threshold)' },
  { w: 1093, h: 614, label: '1093x614 (Laptop 1366 @ 125% scale)' },
  { w: 1100, h: 700, label: '1100x700 (1100px threshold)' },
  { w: 1120, h: 700, label: '1120x700 (Header breakpoint exact)' },
  { w: 1121, h: 700, label: '1121x700 (Desktop nav activated min)' },
  { w: 1130, h: 700, label: '1130x700 (Desktop nav min + 10)' },
  { w: 1140, h: 700, label: '1140x700 (Desktop nav min + 20)' },
  { w: 1150, h: 700, label: '1150x700 (1150px threshold)' },
  { w: 1200, h: 750, label: '1200x750' },
  // Laptop & Desktop
  { w: 1280, h: 720, label: '1280x720 (Laptop / FHD 150%)' },
  { w: 1366, h: 768, label: '1366x768 (VN Laptop 100%)' },
  { w: 1440, h: 900, label: '1440x900 (MacBook Air / Laptop 15")' },
  { w: 1536, h: 864, label: '1536x864 (Windows FHD @ 125% scale)' },
  { w: 1600, h: 900, label: '1600x900 (HD+ 900p)' },
  { w: 1920, h: 1080, label: '1920x1080 (FHD 100%)' },
  { w: 2560, h: 1440, label: '2560x1440 (2K QHD Desktop)' }
];

// Open homepage first
execSync(`agent-browser open "${baseUrl}/"`, { stdio: 'inherit' });

const testScript = `
(() => {
  const docEl = document.documentElement;
  const innerW = window.innerWidth;
  const innerH = window.innerHeight;
  const scrollW = docEl.scrollWidth;
  const hasPageOverflow = scrollW > (innerW + 1);
  const overflowPx = Math.max(0, scrollW - innerW);

  // 1. Check all elements overflowing
  const badElements = [];
  document.querySelectorAll('*').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.width > 0 && rect.right > innerW + 2) {
      const style = window.getComputedStyle(el);
      if (style.overflowX !== 'auto' && style.overflowX !== 'scroll') {
        badElements.push({
          tag: el.tagName.toLowerCase(),
          cls: (typeof el.className === 'string' ? el.className.split(' ').slice(0, 3).join('.') : ''),
          right: Math.round(rect.right),
          excess: Math.round(rect.right - innerW)
        });
      }
    }
  });

  // 2. Header details
  const headerInner = document.querySelector('.header-inner');
  const desktopNav = document.querySelector('.header-nav-desktop');
  const desktopActions = document.querySelector('.header-actions-desktop');
  const menuToggle = document.querySelector('.menu-toggle');
  const brand = document.querySelector('.brand');
  const phone = document.querySelector('.site-header .phone');
  const headerCta = document.querySelector('.header-cta-btn');

  let headerState = {
    menuToggleVisible: menuToggle ? window.getComputedStyle(menuToggle).display !== 'none' : false,
    desktopNavVisible: desktopNav ? window.getComputedStyle(desktopNav).display !== 'none' : false,
    phoneVisible: phone ? window.getComputedStyle(phone).display !== 'none' : false,
    ctaVisible: headerCta ? window.getComputedStyle(headerCta).display !== 'none' : false,
    headerInnerScrollW: headerInner ? headerInner.scrollWidth : 0,
    headerInnerClientW: headerInner ? headerInner.clientWidth : 0,
    headerInnerOverflow: headerInner ? (headerInner.scrollWidth > headerInner.clientWidth + 1) : false,
    navWrapped: false,
    navTopSpread: 0,
    brandNavGap: 0,
    navActionsGap: 0
  };

  if (headerState.desktopNavVisible && desktopNav) {
    const links = desktopNav.querySelectorAll('.nav-link, .nav-dropdown-btn');
    if (links.length > 1) {
      const tops = Array.from(links).map(l => l.getBoundingClientRect().top);
      const minTop = Math.min(...tops);
      const maxTop = Math.max(...tops);
      headerState.navTopSpread = Math.round(maxTop - minTop);
      headerState.navWrapped = headerState.navTopSpread > 10;
    }
    if (brand) {
      const bRect = brand.getBoundingClientRect();
      const nRect = desktopNav.getBoundingClientRect();
      headerState.brandNavGap = Math.round(nRect.left - bRect.right);
    }
    if (desktopActions && headerState.ctaVisible) {
      const nRect = desktopNav.getBoundingClientRect();
      const aRect = desktopActions.getBoundingClientRect();
      headerState.navActionsGap = Math.round(aRect.left - nRect.right);
    }
  }

  // 3. Hero Visual vs Copy Overlap
  const heroArt = document.querySelector('.hero-art');
  const heroCopy = document.querySelector('.hero-copy');
  let heroArtDetails = null;
  if (heroArt && heroCopy) {
    const artRect = heroArt.getBoundingClientRect();
    const copyRect = heroCopy.getBoundingClientRect();
    const artStyle = window.getComputedStyle(heroArt);
    const horizOverlap = (artRect.left < copyRect.right) && (artRect.right > copyRect.left);
    const vertOverlap = (artRect.top < copyRect.bottom) && (artRect.bottom > copyRect.top);
    heroArtDetails = {
      position: artStyle.position,
      opacity: artStyle.opacity,
      artLeft: Math.round(artRect.left),
      artRight: Math.round(artRect.right),
      copyRight: Math.round(copyRect.right),
      horizOverlap,
      vertOverlap,
      isColliding: horizOverlap && vertOverlap && artStyle.position === 'absolute' && parseFloat(artStyle.opacity || '1') > 0.3
    };
  }

  // 4. Contact form inputs
  const form = document.querySelector('.quote-form');
  let formOverflow = false;
  let formInputsDetails = [];
  if (form) {
    const fRect = form.getBoundingClientRect();
    form.querySelectorAll('input, select, textarea, button').forEach(inp => {
      const iRect = inp.getBoundingClientRect();
      if (iRect.right > fRect.right + 2) {
        formOverflow = true;
        formInputsDetails.push({
          tag: inp.tagName.toLowerCase(),
          right: Math.round(iRect.right),
          fRight: Math.round(fRect.right),
          diff: Math.round(iRect.right - fRect.right)
        });
      }
    });
  }

  return JSON.stringify({
    innerW,
    innerH,
    scrollW,
    hasPageOverflow,
    overflowPx,
    badElements: badElements.slice(0, 3),
    headerState,
    heroArtDetails,
    formOverflow,
    formInputsDetails
  });
})()
`;

const b64 = Buffer.from(testScript).toString('base64');
const results = [];

console.log('\\n' + '='.repeat(75));
console.log('AUDIT HOMEPAGE (/) TRÊN TẤT CẢ VIEWPORTS & BREAKPOINTS');
console.log('='.repeat(75));

for (const vp of viewports) {
  execSync(`agent-browser set viewport ${vp.w} ${vp.h}`, { stdio: 'pipe' });
  const raw = execSync(`agent-browser eval "eval(atob('${b64}'))"`, { encoding: 'utf-8' });
  let data = {};
  try {
    data = JSON.parse(JSON.parse(raw.trim()));
  } catch {
    data = { error: raw };
  }

  const issues = [];
  if (data.hasPageOverflow) {
    issues.push(`TRÀN NGANG ${data.overflowPx}px (scrollW: ${data.scrollW} > innerW: ${data.innerW}). Phần tử: ${data.badElements.map(e => e.tag + '.' + e.cls).join(', ')}`);
  }
  if (data.headerState?.headerInnerOverflow) {
    issues.push(`HEADER TRÀN (inner scrollW: ${data.headerState.headerInnerScrollW} > clientW: ${data.headerState.headerInnerClientW})`);
  }
  if (data.headerState?.navWrapped) {
    issues.push(`NAVBAR BỊ RỚT DÒNG (navTopSpread: ${data.headerState.navTopSpread}px)`);
  }
  if (data.headerState?.navActionsGap < 0) {
    issues.push(`NAVBAR ĐÈ NÚT ACTION/CTA (overlap ${Math.abs(data.headerState.navActionsGap)}px)`);
  }
  if (data.headerState?.brandNavGap < 0) {
    issues.push(`NAVBAR ĐÈ LOGO (overlap ${Math.abs(data.headerState.brandNavGap)}px)`);
  }
  if (data.heroArtDetails?.isColliding) {
    issues.push(`ẢNH HERO ĐÈ CHỮ (artLeft: ${data.heroArtDetails.artLeft} < copyRight: ${data.heroArtDetails.copyRight}, opacity: ${data.heroArtDetails.opacity})`);
  }
  if (data.formOverflow) {
    issues.push(`FORM INPUT VƯỢT CONTAINER: ${data.formInputsDetails.map(i => i.tag + ' (+' + i.diff + 'px)').join(', ')}`);
  }

  const pass = issues.length === 0;
  console.log(`${pass ? '✅ [PASS]' : '❌ [FAIL]'} ${vp.label.padEnd(45)} | innerW: ${data.innerW}px`);
  if (!pass) {
    issues.forEach(i => console.log(`   🚨 ${i}`));
  }
  results.push({ vp, data, issues, pass });
}

fs.writeFileSync('artifacts/homepage-audit.json', JSON.stringify(results, null, 2));
console.log('\\nĐã lưu kết quả tại artifacts/homepage-audit.json');
