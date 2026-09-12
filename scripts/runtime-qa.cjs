const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCmd(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (err) {
    return (err.stdout || '') + '\n' + (err.stderr || '');
  }
}

const VIEWPORTS = [
  { name: 'Mobile 375', width: 375, height: 812, isMobile: true },
  { name: 'Mobile 390', width: 390, height: 844, isMobile: true },
  { name: 'Mobile 430', width: 430, height: 932, isMobile: true },
  { name: 'Tablet 768', width: 768, height: 1024, isTablet: true },
  { name: 'Laptop 14 (1152x720 - 125%)', width: 1152, height: 720, isLaptop: true },
  { name: 'Laptop 1366', width: 1366, height: 768, isLaptop: true },
  { name: 'Desktop 1440', width: 1440, height: 900, isDesktop: true },
  { name: 'Desktop 1536', width: 1536, height: 864, isDesktop: true }
];

const ROUTES = [
  { name: 'Trang Chu', path: '/' },
  { name: 'Landing 490k', path: '/landing-490k' },
  { name: 'Ho So Nang Luc', path: '/ho-so-nang-luc' },
  { name: 'Khao Sat Du An', path: '/khao-sat-du-an' },
  { name: 'Chien Luoc 5 Giai Doan', path: '/chien-luoc-5-giai-doan' },
  { name: 'Quy Trinh GEO', path: '/quy-trinh-geo' },
  { name: 'Tieu Chuan Audit', path: '/tieu-chuan-audit' },
  { name: 'Quy Trinh Cham Soc', path: '/quy-trinh-cham-soc' },
  { name: 'Bang Gia', path: '/bang-gia' },
  { name: 'Giai Phap Hub', path: '/giai-phap' },
  { name: 'Dich Vu Local Search', path: '/dich-vu/local-search' },
  { name: 'Dich Vu GEO', path: '/dich-vu/geo' },
  { name: 'Du An Matrix', path: '/du-an' },
  { name: 'Chi Tiet Case Study', path: '/du-an/nha-khoa-sai-gon-tam-duc' },
  { name: 'Kien Thuc Hub', path: '/kien-thuc' },
  { name: 'Lien He', path: '/lien-he' }
];

const BASE_URL = 'http://localhost:5173';

const auditResults = {
  timestamp: new Date().toISOString(),
  viewportsCount: VIEWPORTS.length,
  routesCount: ROUTES.length,
  totalChecks: 0,
  passedChecks: 0,
  overflowCount: 0,
  overflows: [],
  smallTouchTargetsCount: 0,
  smallTouchTargets: [],
  glassmorphismCount: 0,
  glassmorphismIssues: [],
  details: {}
};

console.log('>>> STARTING QA RUNTIME AUDIT <<<');

// Open base first
runCmd('agent-browser open ' + BASE_URL);

for (const vp of VIEWPORTS) {
  console.log(`\n==============================\n📱 VIEWPORT: ${vp.name} (${vp.width}x${vp.height})\n==============================`);
  runCmd(`agent-browser set viewport ${vp.width} ${vp.height}`);
  auditResults.details[vp.name] = {};

  for (const route of ROUTES) {
    auditResults.totalChecks++;
    const url = BASE_URL + route.path;
    runCmd(`agent-browser open ${url}`);

    // Evaluation JS
    const evalScript = `JSON.stringify((() => {
      const winW = window.innerWidth;
      const docW = document.documentElement.scrollWidth;
      const bodyW = document.body.scrollWidth;
      const hasOverflow = (docW > winW + 1) || (bodyW > winW + 1);
      
      const overflows = [];
      if (hasOverflow) {
        document.querySelectorAll('*').forEach(el => {
          if (['SCRIPT','STYLE','HEAD','META','LINK','TITLE','PATH','G','DEFS','CLIPPATH'].includes(el.tagName)) return;
          const r = el.getBoundingClientRect();
          if (r.right > winW + 1 && r.width > 0) {
            let sel = el.tagName.toLowerCase();
            if (el.id) sel += '#' + el.id;
            else if (el.className && typeof el.className === 'string') {
              sel += '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.');
            }
            overflows.push({
              sel: sel.slice(0, 60),
              w: Math.round(r.width),
              right: Math.round(r.right),
              excess: Math.round(r.right - winW)
            });
          }
        });
      }

      const smallTargets = [];
      document.querySelectorAll('button, a, select').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && r.top >= 0 && r.top < window.innerHeight) {
          if (r.width < 44 || r.height < 44) {
            let sel = el.tagName.toLowerCase();
            if (el.id) sel += '#' + el.id;
            else if (el.className && typeof el.className === 'string') {
              sel += '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.');
            }
            smallTargets.push({
              sel: sel.slice(0, 60),
              w: Math.round(r.width),
              h: Math.round(r.height),
              txt: (el.innerText || el.getAttribute('aria-label') || '').slice(0, 25).trim()
            });
          }
        }
      });

      const glass = [];
      document.querySelectorAll('*').forEach(el => {
        const s = window.getComputedStyle(el);
        const bf = s.backdropFilter || s.webkitBackdropFilter;
        if (bf && bf !== 'none') {
          glass.push({ tag: el.tagName, cls: String(el.className).slice(0, 30), bf });
        }
      });

      const htmlStyle = window.getComputedStyle(document.documentElement);
      const scrollbarGutter = htmlStyle.scrollbarGutter;

      return {
        winW,
        docW,
        bodyW,
        hasOverflow,
        overflowAmount: Math.max(0, docW - winW, bodyW - winW),
        overflows: overflows.slice(0, 5),
        smallTargetsCount: smallTargets.length,
        smallTargets: smallTargets.slice(0, 5),
        glassCount: glass.length,
        scrollbarGutter
      };
    })())`;

    const cleanEval = evalScript.replace(/\n\s*/g, ' ').replace(/"/g, '\\"');
    const out = runCmd(`agent-browser eval "${cleanEval}"`);
    
    let res = null;
    try {
      res = JSON.parse(out.trim());
      if (typeof res === 'string') res = JSON.parse(res);
    } catch (e) {
      const m = out.match(/\{[\s\S]*\}/);
      if (m) {
        try {
          res = JSON.parse(m[0]);
          if (typeof res === 'string') res = JSON.parse(res);
        } catch (e2) {}
      }
    }

    if (!res || typeof res !== 'object') {
      console.log(`  [${route.name}] Eval failed or timed out`);
      continue;
    }

    auditResults.details[vp.name][route.name] = res;

    if (res.hasOverflow) {
      auditResults.overflowCount++;
      const item = {
        viewport: vp.name,
        width: vp.width,
        route: route.name,
        path: route.path,
        amount: res.overflowAmount,
        top: res.overflows
      };
      auditResults.overflows.push(item);
      console.log(`  ❌ [${route.name}] OVERFLOW: docW=${res.docW}px > winW=${res.winW}px (+${res.overflowAmount}px)`);
      if (res.overflows && res.overflows.length > 0) {
        res.overflows.forEach(o => console.log(`      -> ${o.sel} w=${o.w}px right=${o.right}px (+${o.excess}px)`));
      }
    } else {
      auditResults.passedChecks++;
      console.log(`  ✅ [${route.name}] PASS (docW=${res.docW}px, winW=${res.winW}px)`);
    }

    if (vp.isMobile && res.smallTargetsCount > 0) {
      auditResults.smallTouchTargetsCount += res.smallTargetsCount;
      auditResults.smallTouchTargets.push({
        viewport: vp.name,
        route: route.name,
        count: res.smallTargetsCount,
        targets: res.smallTargets
      });
    }

    if (res.glassCount > 0) {
      auditResults.glassmorphismCount += res.glassCount;
      auditResults.glassmorphismIssues.push({
        viewport: vp.name,
        route: route.name,
        count: res.glassCount
      });
    }
  }
}

const outPath = path.join(__dirname, '..', 'artifacts', 'runtime-qa-report.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(auditResults, null, 2), 'utf-8');

console.log('\n====================================================');
console.log('🏁 QA RUNTIME AUDIT FINISHED');
console.log(`Total Route Checks: ${auditResults.totalChecks}`);
console.log(`Passed (No Overflow): ${auditResults.passedChecks}`);
console.log(`Overflow Violations: ${auditResults.overflowCount}`);
console.log(`Glassmorphism Violations: ${auditResults.glassmorphismCount}`);
console.log(`Small Touch Target Reports: ${auditResults.smallTouchTargets.length}`);
console.log(`Report JSON: ${outPath}`);
console.log('====================================================');
