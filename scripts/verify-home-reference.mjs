import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const executable = path.join(process.env.APPDATA, 'npm/node_modules/agent-browser/bin/agent-browser-win32-x64.exe');
const session = 'localmate-reference-qa';
const out = 'artifacts/home-reference-qa';
mkdirSync(out, { recursive: true });
const run = (...args) => execFileSync(executable, ['--session', session, ...args], { encoding: 'utf8', timeout: 45000 }).trim();
const evaluate = expression => {
  let result = JSON.parse(run('eval', `JSON.stringify(${expression})`));
  return typeof result === 'string' ? JSON.parse(result) : result;
};
const report = { viewports: [], interactions: [] };
const assert = (name, result) => { report.interactions.push({ name, passed: !!result }); if (!result) throw new Error(name); };
run('open', process.env.QA_URL || 'http://127.0.0.1:3000/');
run('set', 'media', 'light', 'reduced-motion');
for (const [width, height] of [[320, 700], [390, 844], [768, 1024], [1093, 614], [1366, 768], [1672, 941]]) {
  run('set', 'viewport', String(width), String(height));
  run('eval', 'window.scrollTo({top:0,behavior:"instant"})');
  run('eval', 'document.querySelectorAll("img").forEach(i=>i.loading="eager")');
  run('eval', '(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));return true})()');
  const metrics = evaluate(`({width:innerWidth,documentWidth:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth,broken:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),overflow:[...document.querySelectorAll('.lm-home *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>document.documentElement.clientWidth+2||r.left < -2)&&!e.closest('.lm-hero-visual')&&!e.matches('.lm-skip,.lm-sr-only')}).map(e=>e.className),headerHeight:document.querySelector('.lm-header').getBoundingClientRect().height})`);
  report.viewports.push(metrics);
  run('screenshot', `${out}/home-${width}.png`);
  if (width === 390) run('screenshot', `${out}/full-${width}.png`, '--full');
  if (width === 1672) {
    for (const section of ['services', 'stories', 'process', 'contact']) {
      run('eval', `window.scrollTo({top:document.getElementById('${section}').offsetTop-92,behavior:'instant'})`);
      run('screenshot', `${out}/${section}-${width}.png`);
    }
  }
}
assert('No horizontal page overflow at six viewports', report.viewports.every(v => v.scrollWidth <= v.documentWidth && !v.overflow.length));
assert('All image assets decode', report.viewports.every(v => !v.broken.length));
run('set', 'viewport', '390', '844');
run('eval', 'window.scrollTo({top:0,behavior:"instant"})');
run('click', '.lm-menu-toggle');
assert('Mobile menu opens', evaluate(`document.querySelector('.lm-menu-toggle').getAttribute('aria-expanded')==='true'`));
run('press', 'Escape');
assert('Escape closes mobile menu', evaluate(`document.querySelector('.lm-menu-toggle').getAttribute('aria-expanded')==='false'`));
for (let index = 1; index <= 5; index++) {
  run('click', `.lm-service-card:nth-child(${index}) > button`);
  assert(`Service dialog ${index} opens`, evaluate(`document.querySelector('.lm-dialog').open`));
  run('press', 'Escape');
  assert(`Service dialog ${index} closes with Escape`, evaluate(`!document.querySelector('.lm-dialog').open`));
}
run('click', '.lm-form button[type="submit"]');
assert('Empty form is invalid', evaluate(`!document.querySelector('.lm-form').checkValidity()`));
run('fill', '.lm-form input[name="name"]', 'LocalMate QA fixture');
run('fill', '.lm-form input[name="phone"]', 'abc');
assert('Invalid phone rejected', evaluate(`!document.querySelector('.lm-form input[name="phone"]').checkValidity()`));
run('fill', '.lm-form input[name="phone"]', '0900000000');
run('select', '.lm-form select', 'Khác');
run('network', 'route', 'https://script.google.com/*', '--abort');
run('click', '.lm-form button[type="submit"]');
run('wait', '.lm-form-status.is-error');
assert('Network failure displays error and retains input', evaluate(`document.querySelector('.lm-form-status').classList.contains('is-error') && document.querySelector('.lm-form input[name="name"]').value==='LocalMate QA fixture'`));
run('network', 'unroute', 'https://script.google.com/*');
run('network', 'route', 'https://script.google.com/*', '--body', '{"ok":true}');
run('click', '.lm-form button[type="submit"]');
run('wait', '.lm-form-status:not(.is-error)');
assert('Mocked delivery resets form without claiming Sheets persistence', evaluate(`document.querySelector('.lm-form input[name="name"]').value==='' && document.querySelector('.lm-form-status').textContent.includes('qua mạng')`));
run('network', 'unroute', 'https://script.google.com/*');
report.consoleErrors = run('errors');
writeFileSync(`${out}/report.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
