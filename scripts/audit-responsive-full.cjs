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
  { name: 'Mobile 360 (Android Small)', width: 360, height: 800, isMobile: true },
  { name: 'Mobile 390 (iPhone Standard)', width: 390, height: 844, isMobile: true },
  { name: 'Mobile 430 (iPhone 15 Pro Max)', width: 430, height: 932, isMobile: true },
  { name: 'Tablet 768 (iPad Portrait)', width: 768, height: 1024, isTablet: true },
  { name: 'Tablet 1024 (iPad Landscape)', width: 1024, height: 768, isTablet: true },
  { name: 'Laptop 14 1093 (Win 125% Zoom)', width: 1093, height: 614, isLaptop: true },
  { name: 'Laptop 1366 (Standard)', width: 1366, height: 768, isLaptop: true },
  { name: 'Desktop 1440 (FHD Standard)', width: 1440, height: 900, isDesktop: true }
];

const ROUTES = [
  { name: 'Trang Chu', path: '/' },
  { name: 'Landing 490k', path: '/landing-490k' },
  { name: 'Bang Gia', path: '/bang-gia' },
  { name: 'Dich Vu', path: '/dich-vu' },
  { name: 'Giai Phap', path: '/giai-phap' },
  { name: 'Du An', path: '/du-an' },
  { name: 'Kien Thuc', path: '/kien-thuc' },
  { name: 'Lien He', path: '/lien-he' }
];

const SESSION_NAME = 'responsive-auditor';
const BASE_URL = 'http://localhost:5173';

const auditResults = {
  timestamp: new Date().toISOString(),
  viewportsTested: VIEWPORTS.length,
  routesTested: ROUTES.length,
  summary: {
    totalChecks: 0,
    passedChecks: 0,
    overflowIssues: [],
    smallTouchTargets: []
  },
  details: {}
};

console.log('==================================================');
console.log('   LOCALMATE COMPREHENSIVE RESPONSIVE AUDIT       ');
console.log('==================================================\n');

// Read eval script and minify to single line
const evalScriptPath = path.join(__dirname, 'audit-eval.js');
const rawEvalScript = fs.readFileSync(evalScriptPath, 'utf-8');
const minifiedEval = rawEvalScript.replace(/\n\s*/g, ' ').replace(/"/g, '\\"');

runCmd('agent-browser --session ' + SESSION_NAME + ' close');

for (const vp of VIEWPORTS) {
  console.log('\n🔍 AUDITING VIEWPORT: ' + vp.name + ' (' + vp.width + 'x' + vp.height + ')');
  auditResults.details[vp.name] = {};

  runCmd('agent-browser --session ' + SESSION_NAME + ' set viewport ' + vp.width + ' ' + vp.height);

  for (const route of ROUTES) {
    auditResults.summary.totalChecks++;
    const targetUrl = BASE_URL + route.path;

    runCmd('agent-browser --session ' + SESSION_NAME + ' open ' + targetUrl);
    runCmd('agent-browser --session ' + SESSION_NAME + ' wait 400');

    const evalCmd = 'agent-browser --session ' + SESSION_NAME + ' eval "' + minifiedEval + '"';
    const evalOut = runCmd(evalCmd);

    let parsed = null;
    try {
      parsed = JSON.parse(evalOut.trim());
      if (typeof parsed === 'string') {
        parsed = JSON.parse(parsed);
      }
    } catch (e) {
      const match = evalOut.match(/\{[\s\S]*\}/);
      if (match) {
        try {
          parsed = JSON.parse(match[0]);
          if (typeof parsed === 'string') parsed = JSON.parse(parsed);
        } catch (e2) {}
      }
    }

    if (!parsed || typeof parsed !== 'object') {
      console.log('  ❌ [' + route.name + '] Eval output: ' + evalOut.slice(0, 100));
      continue;
    }

    auditResults.details[vp.name][route.name] = parsed;

    if (parsed.hasOverflow) {
      console.log(
        '  ⚠️  [' + route.name + '] OVERFLOW! docW=' +
          parsed.docW +
          'px > winW=' +
          parsed.winW +
          'px (Tràn ' +
          parsed.overflowAmount +
          'px)'
      );
      if (parsed.topOverflowing && parsed.topOverflowing.length > 0) {
        parsed.topOverflowing.forEach(o => {
          console.log(
            '      -> [' +
              o.selector +
              '] width=' +
              o.width +
              'px, right=' +
              o.right +
              'px (+' +
              o.overflow +
              'px) | "' +
              o.textSnippet +
              '"'
          );
        });
      }
      auditResults.summary.overflowIssues.push({
        viewport: vp.name,
        width: vp.width,
        route: route.name,
        path: route.path,
        overflowAmount: parsed.overflowAmount,
        topOverflowing: parsed.topOverflowing
      });
    } else {
      auditResults.summary.passedChecks++;
      console.log('  ✅ [' + route.name + '] PASS (docW=' + parsed.docW + 'px <= winW=' + parsed.winW + 'px)');
    }

    if (vp.isMobile && parsed.smallTargetsCount > 0) {
      auditResults.summary.smallTouchTargets.push({
        viewport: vp.name,
        route: route.name,
        count: parsed.smallTargetsCount,
        targets: parsed.topSmallTargets
      });
    }
  }
}

runCmd('agent-browser --session ' + SESSION_NAME + ' close');

const reportPath = path.join(__dirname, '..', 'artifacts', 'responsive-audit-report.json');
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(auditResults, null, 2), 'utf-8');

console.log('\n==================================================');
console.log('AUDIT COMPLETE! Summary:');
console.log('Total Checks: ' + auditResults.summary.totalChecks);
console.log('Passed: ' + auditResults.summary.passedChecks);
console.log('Overflow Issues Found: ' + auditResults.summary.overflowIssues.length);
console.log('Report written to: ' + reportPath);
console.log('==================================================');