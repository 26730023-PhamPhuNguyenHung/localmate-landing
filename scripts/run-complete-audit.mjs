import { execSync } from 'child_process';
import fs from 'fs';

const baseUrl = 'http://localhost:3002';

const routes = [
  { name: 'Homepage (Trang chủ)', path: '/' },
  { name: 'Mầm Non Landing (/mam-non)', path: '/mam-non' },
  { name: 'GEO Landing (/geo)', path: '/geo' },
  { name: 'Knowledge Index (/kien-thuc)', path: '/kien-thuc' },
  { name: 'Article Detail (/kien-thuc/website-doanh-nghiep-la-gi)', path: '/kien-thuc/website-doanh-nghiep-la-gi' },
  { name: 'Chính Sách Bảo Mật (/chinh-sach-bao-mat)', path: '/chinh-sach-bao-mat' }
];

const viewports = [
  // 1. Mobile Breakpoint Matrix
  { w: 320, h: 568, category: 'Mobile', label: '320x568 (iPhone SE v1 / Tiny Mobile)' },
  { w: 360, h: 640, category: 'Mobile', label: '360x640 (Galaxy S / Moto G)' },
  { w: 375, h: 667, category: 'Mobile', label: '375x667 (iPhone SE v2 / 8)' },
  { w: 390, h: 844, category: 'Mobile', label: '390x844 (iPhone 12/13/14 Standard)' },
  { w: 412, h: 915, category: 'Mobile', label: '412x915 (Samsung Galaxy S20/S21/A)' },
  { w: 430, h: 932, category: 'Mobile', label: '430x932 (iPhone 14/15/16 Pro Max)' },

  // 2. Tablet Breakpoint Matrix
  { w: 768, h: 1024, category: 'Tablet', label: '768x1024 (iPad Mini / Portrait Tablet)' },
  { w: 820, h: 1180, category: 'Tablet', label: '820x1180 (iPad Air portrait)' },
  { w: 1024, h: 768, category: 'Tablet', label: '1024x768 (iPad landscape)' },

  // 3. Mid-Range & Navbar Transition Zone (900px - 1150px)
  { w: 899, h: 700, category: 'Mid-Range', label: '899x700 (Just below 900px)' },
  { w: 900, h: 700, category: 'Mid-Range', label: '900x700 (900px threshold)' },
  { w: 960, h: 600, category: 'Mid-Range', label: '960x600 (FHD 200% zoom / Mid-Range)' },
  { w: 1000, h: 700, category: 'Mid-Range', label: '1000x700 (1000px threshold)' },
  { w: 1050, h: 700, category: 'Mid-Range', label: '1050x700 (1050px threshold)' },
  { w: 1093, h: 614, category: 'Laptop 125%', label: '1093x614 (Laptop 14" 1366x768 @ 125% scale)' },
  { w: 1100, h: 700, category: 'Mid-Range', label: '1100x700 (1100px threshold)' },
  { w: 1120, h: 700, category: 'Mid-Range', label: '1120x700 (Header Collapse Breakpoint exact)' },
  { w: 1121, h: 700, category: 'Mid-Range', label: '1121x700 (Header Desktop Nav Just Activated)' },
  { w: 1125, h: 700, category: 'Mid-Range', label: '1125x700 (Header Desktop Nav 1125px)' },
  { w: 1130, h: 700, category: 'Mid-Range', label: '1130x700 (Header Desktop Nav 1130px)' },
  { w: 1140, h: 700, category: 'Mid-Range', label: '1140x700 (Header Desktop Nav 1140px)' },
  { w: 1150, h: 700, category: 'Mid-Range', label: '1150x700 (Header Desktop Nav 1150px threshold)' },
  { w: 1200, h: 750, category: 'Mid-Range', label: '1200x750 (Sub-laptop 1200px)' },

  // 4. Laptop Breakpoint Matrix
  { w: 1280, h: 720, category: 'Laptop', label: '1280x720 (Laptop 720p / FHD 150%)' },
  { w: 1366, h: 768, category: 'Laptop', label: '1366x768 (Most Common VN Laptop 100%)' },
  { w: 1440, h: 900, category: 'Laptop', label: '1440x900 (MacBook Air / Laptop 15")' },

  // 5. Desktop Breakpoint Matrix
  { w: 1536, h: 864, category: 'Desktop/Scale', label: '1536x864 (Windows FHD 1080p @ 125% scale)' },
  { w: 1600, h: 900, category: 'Desktop', label: '1600x900 (HD+ 900p Desktop)' },
  { w: 1920, h: 1080, category: 'Desktop', label: '1920x1080 (Full HD Standard 100%)' },
  { w: 2560, h: 1440, category: 'Desktop 2K', label: '2560x1440 (2K QHD Desktop)' },

  // 6. Zoom Matrix Equivalents
  { w: 2400, h: 1350, category: 'Zoom', label: 'Zoom 80% on FHD (2400x1350)' },
  { w: 2133, h: 1200, category: 'Zoom', label: 'Zoom 90% on FHD (2133x1200)' },
  { w: 1745, h: 982, category: 'Zoom', label: 'Zoom 110% on FHD (1745x982)' },
  { w: 911, h: 512, category: 'Zoom', label: 'Zoom 150% on Laptop 1366 (911x512)' },
  { w: 781, h: 439, category: 'Zoom', label: 'Zoom 175% on Laptop 1366 (781x439)' },
  { w: 683, h: 384, category: 'Zoom', label: 'Zoom 200% on Laptop 1366 (683x384)' }
];

console.log('='.repeat(80));
console.log('CHƯƠNG TRÌNH AUDIT TOÀN DIỆN LOCALMATE: BREAKPOINT, ZOOM & LAYOUT MATRIX');
console.log(`Server mục tiêu: ${baseUrl}`);
console.log(`Số route: ${routes.length} | Số viewport: ${viewports.length} (Tổng ${routes.length * viewports.length} checks)`);
console.log('='.repeat(80));

const inspectScript = `
(() => {
  const doc = document.documentElement;
  const innerW = window.innerWidth;
  const innerH = window.innerHeight;
  const scrollW = doc.scrollWidth;
  const hasPageOverflow = scrollW > (innerW + 1);
  const overflowPx = Math.max(0, scrollW - innerW);

  // 1. Elements causing page horizontal overflow
  const badElements = [];
  document.querySelectorAll('*').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.width > 0 && rect.right > innerW + 2) {
      const style = window.getComputedStyle(el);
      if (style.overflowX === 'auto' || style.overflowX === 'scroll' || el.closest('[style*="overflow-x"]')) return;
      badElements.push({
        tag: el.tagName.toLowerCase(),
        id: el.id || undefined,
        cls: (typeof el.className === 'string' ? el.className.split(' ').slice(0, 3).join('.') : ''),
        right: Math.round(rect.right),
        excess: Math.round(rect.right - innerW)
      });
    }
  });

  // 2. Header and Navbar Inspection
  const header = document.querySelector('.site-header');
  const headerInner = document.querySelector('.header-inner');
  const desktopNav = document.querySelector('.header-nav-desktop');
  const desktopActions = document.querySelector('.header-actions-desktop');
  const menuToggle = document.querySelector('.menu-toggle');
  const brand = document.querySelector('.brand');
  const phone = document.querySelector('.site-header .phone');

  const headerState = {
    headerInnerScrollW: headerInner ? headerInner.scrollWidth : 0,
    headerInnerClientW: headerInner ? headerInner.clientWidth : 0,
    headerInnerOverflow: headerInner ? (headerInner.scrollWidth > headerInner.clientWidth + 1) : false,
    desktopNavDisplay: desktopNav ? window.getComputedStyle(desktopNav).display : 'none',
    desktopActionsDisplay: desktopActions ? window.getComputedStyle(desktopActions).display : 'none',
    menuToggleDisplay: menuToggle ? window.getComputedStyle(menuToggle).display : 'none',
    phoneDisplay: phone ? window.getComputedStyle(phone).display : 'none',
    navWrapped: false,
    navTopSpread: 0,
    overlapBrand: false,
    overlapCta: false,
    gapToBrand: 0,
    gapToActions: 0
  };

  if (headerState.desktopNavDisplay !== 'none' && desktopNav) {
    const links = desktopNav.querySelectorAll('.nav-link, .nav-dropdown-btn');
    if (links.length > 1) {
      const tops = Array.from(links).map(l => l.getBoundingClientRect().top);
      headerState.navTopSpread = Math.round(Math.max(...tops) - Math.min(...tops));
      headerState.navWrapped = headerState.navTopSpread > 8;
    }
    if (brand) {
      const bRect = brand.getBoundingClientRect();
      const nRect = desktopNav.getBoundingClientRect();
      headerState.gapToBrand = Math.round(nRect.left - bRect.right);
      if (nRect.left < bRect.right) headerState.overlapBrand = true;
    }
    if (desktopActions && headerState.desktopActionsDisplay !== 'none') {
      const nRect = desktopNav.getBoundingClientRect();
      const aRect = desktopActions.getBoundingClientRect();
      headerState.gapToActions = Math.round(aRect.left - nRect.right);
      if (aRect.left < nRect.right) headerState.overlapCta = true;
    }
  }

  // 3. Hero Visual vs Copy Overlap (Homepage & Geo)
  const heroArt = document.querySelector('.hero-art, .geo-hero-art');
  const heroCopy = document.querySelector('.hero-copy, .geo-hero-copy');
  let heroArtCollision = null;
  if (heroArt && heroCopy && window.getComputedStyle(heroArt).display !== 'none') {
    const artRect = heroArt.getBoundingClientRect();
    const copyRect = heroCopy.getBoundingClientRect();
    const artStyle = window.getComputedStyle(heroArt);
    const horizOverlap = (artRect.left < copyRect.right) && (artRect.right > copyRect.left);
    const vertOverlap = (artRect.top < copyRect.bottom) && (artRect.bottom > copyRect.top);
    const isAbsolute = artStyle.position === 'absolute';
    const opacity = parseFloat(artStyle.opacity || '1');
    if (horizOverlap && vertOverlap && isAbsolute && opacity > 0.3) {
      heroArtCollision = {
        artLeft: Math.round(artRect.left),
        copyRight: Math.round(copyRect.right),
        overlapPx: Math.round(copyRect.right - artRect.left),
        opacity: opacity
      };
    }
  }

  // 4. Form inputs overflowing container
  const inputOverflows = [];
  document.querySelectorAll('.quote-form, .geo-lead-card, form').forEach(f => {
    const fRect = f.getBoundingClientRect();
    f.querySelectorAll('input, select, textarea, button').forEach(inp => {
      const iRect = inp.getBoundingClientRect();
      if (iRect.right > fRect.right + 3 && fRect.width > 0) {
        inputOverflows.push({
          tag: inp.tagName.toLowerCase(),
          placeholder: inp.getAttribute('placeholder') || inp.className || 'input',
          diff: Math.round(iRect.right - fRect.right)
        });
      }
    });
  });

  // 5. Button clipping
  const buttonIssues = [];
  document.querySelectorAll('.button, .header-cta-btn, .service-note .button').forEach(btn => {
    if (btn.scrollWidth > btn.clientWidth + 2 && btn.clientWidth > 0) {
      buttonIssues.push({
        text: (btn.textContent || '').trim().substring(0, 30),
        scrollW: btn.scrollWidth,
        clientW: btn.clientWidth
      });
    }
  });

  return JSON.stringify({
    innerW,
    innerH,
    scrollW,
    hasPageOverflow,
    overflowPx,
    badElements: badElements.slice(0, 3),
    headerState,
    heroArtCollision,
    inputOverflows: inputOverflows.slice(0, 3),
    buttonIssues
  });
})()
`;

const b64 = Buffer.from(inspectScript).toString('base64');
const auditLog = [];

for (const route of routes) {
  console.log(`\\n>>> ĐANG KIỂM TRA ROUTE: ${route.name} (${route.path})`);
  try {
    execSync(`agent-browser open "${baseUrl}${route.path}"`, { stdio: 'pipe' });
    execSync(`agent-browser wait 200`, { stdio: 'pipe' });
  } catch (e) {
    console.error(`  Lỗi mở trang ${route.path}: ${e.message}`);
    continue;
  }

  let routeFailCount = 0;

  for (const vp of viewports) {
    try {
      execSync(`agent-browser set viewport ${vp.w} ${vp.h}`, { stdio: 'pipe' });
      const out = execSync(`agent-browser eval "eval(atob('${b64}'))"`, { encoding: 'utf-8' });
      
      let res = {};
      try {
        res = JSON.parse(JSON.parse(out.trim()));
      } catch {
        res = { error: out.trim() };
      }

      const issues = [];
      if (res.hasPageOverflow) {
        issues.push({
          type: 'HORIZONTAL_SCROLL',
          desc: `Tràn ngang trang ${res.overflowPx}px (scrollW: ${res.scrollW}px > innerW: ${res.innerW}px). Phần tử: ${res.badElements?.map(e => e.tag + '.' + e.cls).join(', ')}`
        });
      }
      if (res.headerState?.headerInnerOverflow) {
        issues.push({
          type: 'HEADER_INNER_OVERFLOW',
          desc: `Header-inner tràn ngang: scrollW ${res.headerState.headerInnerScrollW}px > clientW ${res.headerState.headerInnerClientW}px (dư ${res.headerState.headerInnerScrollW - res.headerState.headerInnerClientW}px)`
        });
      }
      if (res.headerState?.navWrapped) {
        issues.push({
          type: 'NAVBAR_WRAPPED',
          desc: `Navbar links bị rớt dòng (chênh lệch hàng: ${res.headerState.navTopSpread}px)`
        });
      }
      if (res.headerState?.overlapBrand) {
        issues.push({
          type: 'NAVBAR_OVERLAP_BRAND',
          desc: `Navbar đè lên Logo (khoảng cách: ${res.headerState.gapToBrand}px)`
        });
      }
      if (res.headerState?.overlapCta) {
        issues.push({
          type: 'NAVBAR_OVERLAP_CTA',
          desc: `Navbar đè lên Nút Action (khoảng cách: ${res.headerState.gapToActions}px)`
        });
      }
      if (res.heroArtCollision) {
        issues.push({
          type: 'HERO_ART_COLLISION',
          desc: `Ảnh minh họa Hero (.hero-art) đè chữ (.hero-copy) với độ chồng lấn ${res.heroArtCollision.overlapPx}px (opacity: ${res.heroArtCollision.opacity})`
        });
      }
      if (res.inputOverflows && res.inputOverflows.length > 0) {
        issues.push({
          type: 'INPUT_OVERFLOW',
          desc: `Input tràn container: ${res.inputOverflows.map(i => i.placeholder + ' (+' + i.diff + 'px)').join(', ')}`
        });
      }
      if (res.buttonIssues && res.buttonIssues.length > 0) {
        issues.push({
          type: 'BUTTON_CLIPPED',
          desc: `Nút bị cắt chữ / vỡ: ${res.buttonIssues.map(b => '"' + b.text + '" (' + b.scrollW + 'px > ' + b.clientW + 'px)').join(', ')}`
        });
      }

      const pass = issues.length === 0;
      if (!pass) routeFailCount++;

      auditLog.push({
        route: route.path,
        routeName: route.name,
        viewport: vp.label,
        category: vp.category,
        w: vp.w,
        h: vp.h,
        pass,
        issues,
        res
      });

      const status = pass ? '  [PASS]' : '  [FAIL]';
      if (!pass) {
        console.log(`${status} ${vp.label.padEnd(50)}`);
        issues.forEach(iss => console.log(`     ⚠️  [${iss.type}] ${iss.desc}`));
      }
    } catch (err) {
      console.error(`  Lỗi viewport ${vp.label}: ${err.message}`);
    }
  }

  if (routeFailCount === 0) {
    console.log(`  🎉 TẤT CẢ ${viewports.length} VIEWPORTS ĐỀU PASS 100%!`);
  } else {
    console.log(`  🚨 CÓ ${routeFailCount}/${viewports.length} VIEWPORTS BỊ LỖI TRÊN ROUTE NÀY!`);
  }
}

fs.writeFileSync('artifacts/full-responsive-audit.json', JSON.stringify({
  timestamp: new Date().toISOString(),
  totalChecks: auditLog.length,
  totalFailures: auditLog.filter(a => !a.pass).length,
  details: auditLog
}, null, 2));

console.log('\\n' + '='.repeat(80));
console.log(`TỔNG HỢP: Kiểm tra ${auditLog.length} trường hợp.`);
console.log(`Số trường hợp lỗi phát hiện: ${auditLog.filter(a => !a.pass).length}`);
console.log('File báo cáo chi tiết: artifacts/full-responsive-audit.json');
console.log('='.repeat(80));
