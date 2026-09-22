import { execSync } from 'child_process';

const routes = [
  { name: 'Homepage', path: '/' },
  { name: 'GEO Landing', path: '/geo' },
  { name: 'Knowledge Index', path: '/kien-thuc' },
  { name: 'Article Detail', path: '/kien-thuc/entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho' }
];

const viewports = [
  { w: 1280, h: 720, label: '1280x720 (Laptop 13" 125%)' },
  { w: 1280, h: 800, label: '1280x800 (Laptop 16:10 125%)' },
  { w: 1366, h: 768, label: '1366x768 (Laptop 14-15" 125%)' },
  { w: 1440, h: 900, label: '1440x900 (Laptop 15" 125%)' },
  { w: 1536, h: 864, label: '1536x864 (FHD 1080p 125%)' },
  { w: 1600, h: 900, label: '1600x900 (HD+ 125%)' }
];

const baseUrl = 'http://localhost:3002';

console.log('='.repeat(70));
console.log('AUDIT MA TRẬN VIEWPORT DISPLAY SCALE 125% CHO LOCALMATE');
console.log('='.repeat(70));

const results = [];

for (const route of routes) {
  console.log(`\n>>> ĐANG KIỂM TRA ROUTE: ${route.name} (${route.path})`);
  // Navigate
  try {
    execSync(`agent-browser open "${baseUrl}${route.path}"`, { stdio: 'pipe' });
  } catch (e) {
    console.error(`Lỗi mở route: ${e.message}`);
    continue;
  }

  for (const vp of viewports) {
    try {
      execSync(`agent-browser set viewport ${vp.w} ${vp.h}`, { stdio: 'pipe' });

      // Run deep inspection script safely via base64
      const evalScript = `
        (() => {
          const docEl = document.documentElement;
          const innerW = window.innerWidth;
          const scrollW = docEl.scrollWidth;
          const hasPageOverflow = scrollW > innerW;

          const headerInner = document.querySelector('.header-inner');
          const headerCta = document.querySelector('.header-cta');
          let headerOverflow = false;
          let ctaMargin = 0;
          if (headerInner && headerCta) {
            const hRect = headerInner.getBoundingClientRect();
            const cRect = headerCta.getBoundingClientRect();
            ctaMargin = Math.round(hRect.right - cRect.right);
            headerOverflow = cRect.right > (hRect.right + 2);
          }

          // Check if any element has horizontal overflow
          const allEls = document.querySelectorAll('h1, h2, h3, p, .service-card, .story-card, .footer-col, .geo-card, article');
          let clippedCount = 0;
          const clippedSamples = [];
          allEls.forEach(el => {
            const style = window.getComputedStyle(el);
            if (style.overflowX === 'auto' || style.overflowX === 'scroll' || el.closest('[style*="overflow-x"]') || el.closest('[style*="overflowX"]')) {
              return;
            }
            if (el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0) {
              clippedCount++;
              if (clippedSamples.length < 2) {
                clippedSamples.push(el.tagName + ': ' + (el.textContent || '').trim().substring(0, 30));
              }
            }
          });

          return JSON.stringify({
            innerW,
            scrollW,
            hasPageOverflow,
            headerOverflow,
            ctaMargin,
            clippedCount,
            clippedSamples
          });
        })()
      `;

      const b64 = Buffer.from(evalScript).toString('base64');
      const out = execSync(`agent-browser eval "eval(atob('${b64}'))"`, { encoding: 'utf-8' });
      
      let parsed = {};
      try {
        parsed = JSON.parse(JSON.parse(out.trim()));
      } catch (err) {
        parsed = { raw: out.trim() };
      }

      const pass = !parsed.hasPageOverflow && !parsed.headerOverflow && parsed.clippedCount === 0;
      results.push({
        route: route.name,
        vp: vp.label,
        width: vp.w,
        height: vp.h,
        scrollW: parsed.scrollW,
        innerW: parsed.innerW,
        overflow: parsed.hasPageOverflow,
        headerOverflow: parsed.headerOverflow,
        ctaMargin: parsed.ctaMargin,
        clippedCount: parsed.clippedCount,
        clippedSamples: parsed.clippedSamples,
        status: pass ? 'PASS' : 'FAIL'
      });

      console.log(`  [${pass ? 'PASS' : 'FAIL'}] ${vp.label} -> ScrollW: ${parsed.scrollW}/${parsed.innerW}px | CTA margin: +${parsed.ctaMargin}px | Clipped: ${parsed.clippedCount}`);
      if (!pass && parsed.clippedSamples?.length) {
        console.log(`         Samples: ${parsed.clippedSamples.join(', ')}`);
      }
    } catch (err) {
      console.error(`  [ERR] ${vp.label}: ${err.message}`);
    }
  }
}

console.log('\n' + '='.repeat(70));
console.log('TỔNG HỢP KẾT QUẢ KIỂM THỬ:');
const total = results.length;
const passed = results.filter(r => r.status === 'PASS').length;
console.log(`Đạt: ${passed}/${total} test cases (${Math.round((passed/total)*100)}%)`);
console.log('='.repeat(70));
