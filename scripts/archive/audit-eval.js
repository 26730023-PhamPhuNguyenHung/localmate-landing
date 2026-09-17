(() => {
  const winW = window.innerWidth;
  const docW = document.documentElement.scrollWidth;
  const bodyW = document.body.scrollWidth;
  const hasOverflow = docW > winW + 1 || bodyW > winW + 1;

  const overflowingElements = [];
  const allElements = document.querySelectorAll('*');
  allElements.forEach(el => {
    if (['SCRIPT', 'STYLE', 'HEAD', 'META', 'LINK', 'TITLE', 'PATH', 'G', 'DEFS', 'CLIPPATH'].includes(el.tagName)) return;
    const rect = el.getBoundingClientRect();
    if (rect.right > winW + 1 && rect.width > 0) {
      const overflowAmount = Math.round(rect.right - winW);
      let selector = el.tagName.toLowerCase();
      if (el.id) selector += '#' + el.id;
      else if (el.className && typeof el.className === 'string') {
        selector += '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.');
      }
      overflowingElements.push({
        selector: selector.slice(0, 80),
        tag: el.tagName,
        width: Math.round(rect.width),
        right: Math.round(rect.right),
        overflow: overflowAmount,
        textSnippet: (el.innerText || '').slice(0, 40).replace(/\n/g, ' ')
      });
    }
  });

  const smallTargets = [];
  const interactives = document.querySelectorAll('button, a, select');
  interactives.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0 && (rect.top < window.innerHeight && rect.bottom > 0)) {
      if (rect.width < 44 || rect.height < 44) {
        let selector = el.tagName.toLowerCase();
        if (el.id) selector += '#' + el.id;
        else if (el.className && typeof el.className === 'string') {
          selector += '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.');
        }
        smallTargets.push({
          selector: selector.slice(0, 80),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          text: (el.innerText || el.getAttribute('aria-label') || '').slice(0, 30).trim()
        });
      }
    }
  });

  return JSON.stringify({
    winW,
    docW,
    bodyW,
    hasOverflow,
    overflowAmount: Math.max(0, docW - winW, bodyW - winW),
    overflowingCount: overflowingElements.length,
    topOverflowing: overflowingElements.slice(0, 5),
    smallTargetsCount: smallTargets.length,
    topSmallTargets: smallTargets.slice(0, 5)
  });
})();
