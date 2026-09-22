import { execSync } from 'child_process';
import fs from 'fs';

const baseUrl = 'http://localhost:3000';

const routes = [
  { name: 'Trang chủ (Homepage)', path: '/' },
  { name: 'Mầm Non Landing (/mam-non)', path: '/mam-non' },
  { name: 'GEO Landing (/geo)', path: '/geo' },
  { name: 'Kiến Thức Index (/kien-thuc)', path: '/kien-thuc' },
  { name: 'Bài Viết Chi Tiết (/kien-thuc/website-doanh-nghiep-la-gi)', path: '/kien-thuc/website-doanh-nghiep-la-gi' },
  { name: 'Chính Sách Bảo Mật (/chinh-sach-bao-mat)', path: '/chinh-sach-bao-mat' }
];

// 1. Breakpoint matrix
const standardBreakpoints = [
  // Mobile
  { w: 320, h: 568, category: 'Mobile', label: '320x568 (iPhone SE v1 / Tiny mobile)' },
  { w: 360, h: 640, category: 'Mobile', label: '360x640 (Galaxy S compact / Moto G)' },
  { w: 375, h: 667, category: 'Mobile', label: '375x667 (iPhone SE / 8)' },
  { w: 390, h: 844, category: 'Mobile', label: '390x844 (iPhone 12/13/14)' },
  { w: 412, h: 915, category: 'Mobile', label: '412x915 (Samsung Galaxy S20/S21/A-series)' },
  { w: 430, h: 932, category: 'Mobile', label: '430x932 (iPhone 14/15/16 Pro Max)' },

  // Tablet
  { w: 768, h: 1024, category: 'Tablet', label: '768x1024 (iPad Mini / Portrait Tablet)' },
  { w: 820, h: 1180, category: 'Tablet', label: '820x1180 (iPad Air portrait)' },
  { w: 1024, h: 768, category: 'Tablet', label: '1024x768 (iPad landscape)' },

  // Transition & Navbar Danger Zone
  { w: 900, h: 700, category: 'Mid-Range', label: '900x700 (Break threshold 900px)' },
  { w: 960, h: 600, category: 'Mid-Range', label: '960x600 (FHD 200% zoom / Mid-Range)' },
  { w: 1000, h: 700, category: 'Mid-Range', label: '1000x700 (Mid threshold)' },
  { w: 1050, h: 700, category: 'Mid-Range', label: '1050x700 (Mid-Range)' },
  { w: 1093, h: 614, category: 'Laptop 125%', label: '1093x614 (Laptop 1366x768 @ 125% scale)' },
  { w: 1100, h: 700, category: 'Mid-Range', label: '1100x700 (Pre-collapse breakpoint)' },
  { w: 1120, h: 700, category: 'Mid-Range', label: '1120x700 (Exact Header Collapse Breakpoint)' },
  { w: 1125, h: 700, category: 'Mid-Range', label: '1125x700 (Header Desktop Nav Just Above 1120px)' },
  { w: 1130, h: 700, category: 'Mid-Range', label: '1130x700 (Header Desktop Nav Just Above 1120px)' },
  { w: 1140, h: 700, category: 'Mid-Range', label: '1140x700 (Header Desktop Nav Just Above 1120px)' },
  { w: 1150, h: 700, category: 'Mid-Range', label: '1150x700 (Header Desktop Nav @ 1150px)' },
  { w: 1200, h: 750, category: 'Mid-Range', label: '1200x750 (Sub-laptop view)' },

  // Laptop
  { w: 1280, h: 720, category: 'Laptop', label: '1280x720 (Laptop 720p / FHD 150%)' },
  { w: 1366, h: 768, category: 'Laptop', label: '1366x768 (Most Common VN Laptop 100%)' },
  { w: 1440, h: 900, category: 'Laptop', label: '1440x900 (MacBook Air / Laptop 15")' },

  // Desktop & High-DPI Zoom
  { w: 1536, h: 864, category: 'Desktop/Scale', label: '1536x864 (Windows FHD 1080p @ 125% scale)' },
  { w: 1600, h: 900, category: 'Desktop', label: '1600x900 (HD+ 900p Desktop)' },
  { w: 1920, h: 1080, category: 'Desktop', label: '1920x1080 (Full HD Standard 100%)' },
  { w: 2560, h: 1440, category: '2K Desktop', label: '2560x1440 (2K QHD Desktop)' }
];

// 2. Zoom matrix equivalents for FHD 1920 and Laptop 1366
const zoomMatrix = [
  { zoom: '80%', vp: { w: 2400, h: 1350, label: 'FHD 1920 @ 80% Zoom (2400 CSS px)' } },
  { zoom: '90%', vp: { w: 2133, h: 1200, label: 'FHD 1920 @ 90% Zoom (2133 CSS px)' } },
  { zoom: '100%', vp: { w: 1920, h: 1080, label: 'FHD 1920 @ 100% Zoom (1920 CSS px)' } },
  { zoom: '110%', vp: { w: 1745, h: 982, label: 'FHD 1920 @ 110% Zoom (1745 CSS px)' } },
  { zoom: '125%', vp: { w: 1536, h: 864, label: 'FHD 1920 @ 125% Zoom / Win Scale (1536 CSS px)' } },
  { zoom: '150%', vp: { w: 1280, h: 720, label: 'FHD 1920 @ 150% Zoom (1280 CSS px)' } },
  { zoom: '175%', vp: { w: 1097, h: 617, label: 'FHD 1920 @ 175% Zoom (1097 CSS px)' } },
  { zoom: '200%', vp: { w: 960, h: 540, label: 'FHD 1920 @ 200% Zoom (960 CSS px)' } },
  // Laptop 1366 specific zoom levels
  { zoom: 'Laptop 125%', vp: { w: 1093, h: 614, label: 'Laptop 1366 @ 125% Zoom / Win Scale (1093 CSS px)' } },
  { zoom: 'Laptop 150%', vp: { w: 911, h: 512, label: 'Laptop 1366 @ 150% Zoom (911 CSS px)' } },
  { zoom: 'Laptop 175%', vp: { w: 781, h: 439, label: 'Laptop 1366 @ 175% Zoom (781 CSS px)' } },
  { zoom: 'Laptop 200%', vp: { w: 683, h: 384, label: 'Laptop 1366 @ 200% Zoom (683 CSS px)' } }
];

console.log('='.repeat(80));
console.log('🚀 KHỞI ĐỘNG KIỂM TRA TOÀN DIỆN RESPONSIVE / BREAKPOINT / ZOOM / LAYOUT CHO LOCALMATE');
console.log('='.repeat(80));

const auditScript = `
(() => {
  const docEl = document.documentElement;
  const innerW = window.innerWidth;
  const innerH = window.innerHeight;
  const scrollW = docEl.scrollWidth;
  const hasPageOverflow = scrollW > (innerW + 1);
  const overflowPx = Math.max(0, scrollW - innerW);

  // 1. Elements overflowing viewport
  const overflowElements = [];
  document.querySelectorAll('*').forEach(el => {
    // skip elements not rendered
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    if (rect.right > innerW + 2) {
      const style = window.getComputedStyle(el);
      if (style.overflowX === 'auto' || style.overflowX === 'scroll' || el.closest('[style*="overflow-x"]') || el.closest('[style*="overflowX"]')) {
        return;
      }
      overflowElements.push({
        tag: el.tagName.toLowerCase(),
        id: el.id || undefined,
        className: (typeof el.className === 'string' ? el.className.split(' ').slice(0, 3).join('.') : ''),
        right: Math.round(rect.right),
        overflowAmount: Math.round(rect.right - innerW)
      });
    }
  });

  // 2. Header & Navbar deep inspect
  const siteHeader = document.querySelector('.site-header, header');
  const headerInner = document.querySelector('.header-inner');
  const brand = document.querySelector('.brand, .logo');
  const desktopNav = document.querySelector('.header-nav-desktop, header nav');
  const desktopActions = document.querySelector('.header-actions-desktop');
  const menuToggle = document.querySelector('.menu-toggle');
  const phone = document.querySelector('.site-header .phone, .phone');
  const headerCta = document.querySelector('.header-cta-btn, .header-cta');

  let headerIssues = [];
  let headerNavWrapped = false;
  let headerOverflow = false;

  if (headerInner) {
    if (headerInner.scrollWidth > headerInner.clientWidth + 1) {
      headerOverflow = true;
      headerIssues.push('header-inner scrollWidth (' + headerInner.scrollWidth + ') > clientWidth (' + headerInner.clientWidth + ')');
    }
  }

  if (desktopNav && window.getComputedStyle(desktopNav).display !== 'none') {
    const navLinks = desktopNav.querySelectorAll('.nav-link, .nav-dropdown-btn');
    if (navLinks.length > 1) {
      const firstTop = navLinks[0].getBoundingClientRect().top;
      const lastTop = navLinks[navLinks.length - 1].getBoundingClientRect().top;
      if (Math.abs(lastTop - firstTop) > 10) {
        headerNavWrapped = true;
        headerIssues.push('header-nav-desktop links are wrapping into multiple rows (first: ' + Math.round(firstTop) + ', last: ' + Math.round(lastTop) + ')');
      }
    }

    // Check collision between nav and actions or brand
    if (brand && desktopNav) {
      const bRect = brand.getBoundingClientRect();
      const nRect = desktopNav.getBoundingClientRect();
      if (nRect.left < bRect.right) {
        headerIssues.push('desktop nav collides with brand logo (gap: ' + Math.round(nRect.left - bRect.right) + 'px)');
      }
    }
    if (desktopNav && desktopActions && window.getComputedStyle(desktopActions).display !== 'none') {
      const nRect = desktopNav.getBoundingClientRect();
      const aRect = desktopActions.getBoundingClientRect();
      if (aRect.left < nRect.right) {
        headerIssues.push('desktop nav collides with action buttons (overlap: ' + Math.round(nRect.right - aRect.left) + 'px)');
      }
    }
  }

  // 3. Hero Visual vs Text Overlap Inspection (Homepage)
  let heroArtOverlap = false;
  let heroArtDetails = null;
  const heroArt = document.querySelector('.hero-art');
  const heroCopy = document.querySelector('.hero-copy');
  const heroH1 = document.querySelector('.hero h1, .geo-hero h1');

  if (heroArt && heroCopy && window.getComputedStyle(heroArt).display !== 'none') {
    const artRect = heroArt.getBoundingClientRect();
    const copyRect = heroCopy.getBoundingClientRect();
    const artStyle = window.getComputedStyle(heroArt);
    const isOverlayArt = artStyle.position === 'absolute';
    
    // If art overlaps copy horizontally and vertically
    if (isOverlayArt) {
      const horizOverlap = (artRect.left < copyRect.right) && (artRect.right > copyRect.left);
      const vertOverlap = (artRect.top < copyRect.bottom) && (artRect.bottom > copyRect.top);
      if (horizOverlap && vertOverlap && artStyle.opacity !== '0' && parseFloat(artStyle.opacity || '1') > 0.3) {
        heroArtOverlap = true;
        heroArtDetails = {
          artLeft: Math.round(artRect.left),
          copyRight: Math.round(copyRect.right),
          overlapWidth: Math.round(copyRect.right - artRect.left),
          opacity: artStyle.opacity
        };
      }
    }
  }

  // 4. Form inputs overflowing their container
  const inputOverflows = [];
  document.querySelectorAll('input, select, textarea').forEach(inp => {
    const p = inp.parentElement;
    if (!p) return;
    const iRect = inp.getBoundingClientRect();
    const pRect = p.getBoundingClientRect();
    if (iRect.right > pRect.right + 3 && pRect.width > 0) {
      inputOverflows.push({
        tag: inp.tagName.toLowerCase(),
        name: inp.getAttribute('name') || inp.getAttribute('placeholder') || 'unnamed',
        inputWidth: Math.round(iRect.width),
        parentWidth: Math.round(pRect.width),
        diff: Math.round(iRect.right - pRect.right)
      });
    }
  });

  // 5. Check text clipping or awkward wraps in headings & buttons
  const textClipping = [];
  document.querySelectorAll('h1, h2, h3, .button, .header-cta-btn, .service-card, .story-card').forEach(el => {
    if (el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0) {
      const style = window.getComputedStyle(el);
      if (style.overflowX !== 'auto' && style.overflowX !== 'scroll') {
        textClipping.push({
          tag: el.tagName.toLowerCase(),
          className: el.className ? String(el.className).substring(0, 30) : '',
          text: (el.textContent || '').trim().substring(0, 40),
          scrollW: el.scrollWidth,
          clientW: el.clientWidth
        });
      }
    }
  });

  return JSON.stringify({
    innerW,
    innerH,
    scrollW,
    hasPageOverflow,
    overflowPx,
    overflowElements: overflowElements.slice(0, 5),
    headerOverflow,
    headerNavWrapped,
    headerIssues,
    menuToggleVisible: menuToggle ? window.getComputedStyle(menuToggle).display !== 'none' : false,
    desktopNavVisible: desktopNav ? window.getComputedStyle(desktopNav).display !== 'none' : false,
    heroArtOverlap,
    heroArtDetails,
    inputOverflows: inputOverflows.slice(0, 3),
    textClipping: textClipping.slice(0, 5)
  });
})()
`;

const b64 = Buffer.from(auditScript).toString('base64');

const allIssues = [];
const routeReports = {};

function runAuditForViewport(route, vp) {
  try {
    execSync(`agent-browser set viewport ${vp.w} ${vp.h}`, { stdio: 'pipe' });
    // small wait for resize layout reflow
    const out = execSync(`agent-browser eval "eval(atob('${b64}'))"`, { encoding: 'utf-8' });
    let data;
    try {
      data = JSON.parse(JSON.parse(out.trim()));
    } catch {
      data = { raw: out.trim() };
    }

    const issues = [];
    if (data.hasPageOverflow) {
      issues.push({
        type: 'HORIZONTAL_SCROLL',
        desc: `Tràn ngang ${data.overflowPx}px (scrollWidth: ${data.scrollW}px > innerWidth: ${data.innerW}px)`,
        elements: data.overflowElements
      });
    }
    if (data.headerIssues && data.headerIssues.length > 0) {
      issues.push({
        type: 'HEADER_NAVBAR_ISSUE',
        desc: data.headerIssues.join('; ')
      });
    }
    if (data.heroArtOverlap) {
      issues.push({
        type: 'HERO_ART_OVERLAP',
        desc: `Ảnh Hero (.hero-art) đè chữ (.hero-copy) với độ chồng lấn ${data.heroArtDetails?.overlapWidth}px (opacity: ${data.heroArtDetails?.opacity})`
      });
    }
    if (data.inputOverflows && data.inputOverflows.length > 0) {
      issues.push({
        type: 'INPUT_OVERFLOW',
        desc: `Input tràn container: ${data.inputOverflows.map(i => i.tag + '[' + i.name + ']').join(', ')}`
      });
    }
    if (data.textClipping && data.textClipping.length > 0) {
      issues.push({
        type: 'TEXT_CLIPPING',
        desc: `Cắt chữ / scrollWidth > clientWidth: ${data.textClipping.map(t => t.tag + ' ("' + t.text + '")').join(', ')}`
      });
    }

    return { data, issues };
  } catch (err) {
    return { error: err.message, issues: [{ type: 'EXEC_ERROR', desc: err.message }] };
  }
}

for (const route of routes) {
  console.log(`\n============================================================`);
  console.log(`🔍 KIỂM TRA ROUTE: ${route.name}`);
  console.log(`URL: ${baseUrl}${route.path}`);
  console.log(`============================================================`);

  try {
    execSync(`agent-browser open "${baseUrl}${route.path}"`, { stdio: 'pipe' });
    execSync(`agent-browser wait 1500`, { stdio: 'pipe' });
  } catch (e) {
    console.error(`Lỗi mở trang ${route.path}:`, e.message);
    continue;
  }

  routeReports[route.path] = { route, results: [] };

  // 1. Audit Breakpoints
  for (const vp of standardBreakpoints) {
    const { data, issues } = runAuditForViewport(route, vp);
    const pass = (!issues || issues.length === 0);
    const statusSymbol = pass ? '✅ PASS' : '❌ FAIL';
    console.log(`  [${statusSymbol}] ${vp.label.padEnd(50)}`);
    if (!pass) {
      issues.forEach(iss => {
        console.log(`     ⚠️  [${iss.type}] ${iss.desc}`);
        allIssues.push({
          route: route.path,
          routeName: route.name,
          viewport: vp.label,
          width: vp.w,
          height: vp.h,
          issue: iss
        });
      });
    }
  }

  // 2. Audit Zoom Matrix
  console.log(`\n  --- Kiểm tra Zoom & Display Scaling Matrix ---`);
  for (const zm of zoomMatrix) {
    const { data, issues } = runAuditForViewport(route, zm.vp);
    const pass = (!issues || issues.length === 0);
    const statusSymbol = pass ? '✅ PASS' : '❌ FAIL';
    console.log(`  [${statusSymbol}] [Zoom ${zm.zoom}] ${zm.vp.label.padEnd(45)}`);
    if (!pass) {
      issues.forEach(iss => {
        console.log(`     ⚠️  [${iss.type}] ${iss.desc}`);
        allIssues.push({
          route: route.path,
          routeName: route.name,
          viewport: `Zoom ${zm.zoom} (${zm.vp.label})`,
          width: zm.vp.w,
          height: zm.vp.h,
          issue: iss
        });
      });
    }
  }
}

// Write findings to artifacts
fs.writeFileSync(
  'artifacts/responsive-audit-results.json',
  JSON.stringify({ timestamp: new Date().toISOString(), totalIssues: allIssues.length, allIssues }, null, 2),
  'utf-8'
);

console.log('\n============================================================');
console.log(`🏁 HOÀN TẤT AUDIT! Tổng số phát hiện lỗi layout/responsive: ${allIssues.length}`);
console.log(`Kết quả chi tiết được lưu tại: artifacts/responsive-audit-results.json`);
console.log('============================================================');
