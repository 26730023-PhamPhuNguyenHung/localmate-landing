(() => {
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
          sel += '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.');
        }
        overflows.push({
          sel: sel.slice(0, 60),
          w: Math.round(r.width),
          r: Math.round(r.right),
          overflow: Math.round(r.right - winW),
          text: (el.innerText || '').slice(0, 30).replace(/\n/g, ' ')
        });
      }
    });
  }

  const smallTargets = [];
  document.querySelectorAll('button, a.btn, .btn, input[type="button"], input[type="submit"]').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && r.height > 0 && r.top >= 0 && r.top < window.innerHeight) {
      if (r.width < 44 || r.height < 44) {
        let sel = el.tagName.toLowerCase();
        if (el.id) sel += '#' + el.id;
        else if (el.className && typeof el.className === 'string') {
          sel += '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.');
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

  const glassmorphism = [];
  document.querySelectorAll('*').forEach(el => {
    const s = window.getComputedStyle(el);
    const bf = s.backdropFilter || s.webkitBackdropFilter;
    if (bf && bf !== 'none') {
      glassmorphism.push({ tag: el.tagName, cls: String(el.className).slice(0, 30), bf: bf });
    }
  });

  const htmlStyle = window.getComputedStyle(document.documentElement);
  const scrollbarGutter = htmlStyle.scrollbarGutter;

  return JSON.stringify({
    winW: winW,
    docW: docW,
    bodyW: bodyW,
    hasOverflow: hasOverflow,
    overflowAmount: Math.max(0, docW - winW, bodyW - winW),
    overflows: overflows.slice(0, 3),
    smallTargetsCount: smallTargets.length,
    smallTargets: smallTargets.slice(0, 3),
    glassCount: glassmorphism.length,
    scrollbarGutter: scrollbarGutter
  });
})()
