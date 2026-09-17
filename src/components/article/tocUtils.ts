/**
 * Utility functions for Table of Contents (TOC) & Reading Progress
 * Supports clean Vietnamese slugification, heading extraction, and duplicate ID resolution.
 */

export interface TOCItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Converts Vietnamese and Unicode text into a clean, SEO-friendly URL slug.
 * Example: "1. Bản chất thực sự của một website doanh nghiệp?" -> "1-ban-chat-thuc-su-cua-mot-website-doanh-nghiep"
 */
export function slugifyVietnamese(text: string): string {
  if (!text) return '';

  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Decompose combined characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritic marks
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '') // Strip symbols, punctuation
    .trim()
    .replace(/\s+/g, '-') // Replace whitespace with hyphen
    .replace(/-+/g, '-'); // Collapse multiple hyphens
}

/**
 * Ensures unique IDs even if multiple headings share identical text.
 */
export function generateUniqueSlug(text: string, existingSlugs: Set<string>): string {
  const baseSlug = slugifyVietnamese(text) || 'muc-luc';
  let uniqueSlug = baseSlug;
  let counter = 1;

  while (existingSlugs.has(uniqueSlug)) {
    uniqueSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  existingSlugs.add(uniqueSlug);
  return uniqueSlug;
}

/**
 * Extracts H2 and H3 headings from an HTML string without mutating DOM.
 * Works in both browser (DOMParser) and fallback environments.
 */
export function extractHeadingsFromHtml(html: string): TOCItem[] {
  if (!html || typeof html !== 'string') return [];

  const items: TOCItem[] = [];
  const existingSlugs = new Set<string>();

  // Browser environment: DOMParser is robust against unescaped HTML entities & nested tags
  if (typeof window !== 'undefined' && typeof DOMParser !== 'undefined') {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const headingElements = doc.querySelectorAll('h2, h3');

      headingElements.forEach((el) => {
        const text = el.textContent?.trim() || '';
        if (!text) return;

        const level = el.tagName.toLowerCase() === 'h2' ? 2 : 3;
        const existingId = el.getAttribute('id')?.trim();
        const id = existingId || generateUniqueSlug(text, existingSlugs);
        if (existingId) existingSlugs.add(existingId);

        items.push({ id, text, level });
      });

      return items;
    } catch {
      // Fall through to regex parser
    }
  }

  // Regex fallback (for SSR or environments without DOMParser)
  const headingRegex = /<h([23])(?:\s+[^>]*?id=["']([^"']*)["'][^>]*|\s*[^>]*)>(.*?)<\/h\1>/gis;
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1], 10) as 2 | 3;
    const explicitId = match[2]?.trim();
    // Strip inner HTML tags from heading text
    const rawContent = match[3] || '';
    const cleanText = rawContent.replace(/<[^>]+>/g, '').trim();

    if (cleanText) {
      const id = explicitId || generateUniqueSlug(cleanText, existingSlugs);
      if (explicitId) existingSlugs.add(explicitId);
      items.push({ id, text: cleanText, level });
    }
  }

  return items;
}

/**
 * Utility to inject matching ID attributes into H2 and H3 tags of an HTML string.
 * Useful before passing HTML to dangerouslySetInnerHTML so anchors match 100%.
 */
export function injectHeadingIds(html: string): { processedHtml: string; items: TOCItem[] } {
  if (!html || typeof html !== 'string') {
    return { processedHtml: html || '', items: [] };
  }

  const items: TOCItem[] = [];
  const existingSlugs = new Set<string>();

  if (typeof window !== 'undefined' && typeof DOMParser !== 'undefined') {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const headingElements = doc.querySelectorAll('h2, h3');

      headingElements.forEach((el) => {
        const text = el.textContent?.trim() || '';
        if (!text) return;

        const level = el.tagName.toLowerCase() === 'h2' ? 2 : 3;
        let id = el.getAttribute('id')?.trim();

        if (!id) {
          id = generateUniqueSlug(text, existingSlugs);
          el.setAttribute('id', id);
        } else {
          existingSlugs.add(id);
        }

        items.push({ id, text, level });
      });

      return {
        processedHtml: doc.body.innerHTML,
        items
      };
    } catch {
      // Fall through to regex injection
    }
  }

  // Regex injection fallback
  const processedHtml = html.replace(
    /<h([23])(?:\s+[^>]*?)?(?:\s+id=["']([^"']*)["'])?([^>]*)>(.*?)<\/h\1>/gis,
    (fullMatch, levelStr, explicitId, otherAttrs, innerHtml) => {
      const level = parseInt(levelStr, 10) as 2 | 3;
      const cleanText = innerHtml.replace(/<[^>]+>/g, '').trim();
      const id = explicitId || generateUniqueSlug(cleanText, existingSlugs);
      if (explicitId) existingSlugs.add(explicitId);

      items.push({ id, text: cleanText, level });

      // Clean otherAttrs from duplicate id
      const sanitizedAttrs = (otherAttrs || '').replace(/\bid=["'][^"']*["']/gi, '').trim();
      const attrsStr = sanitizedAttrs ? ` ${sanitizedAttrs}` : '';
      return `<h${level} id="${id}"${attrsStr}>${innerHtml}</h${level}>`;
    }
  );

  return { processedHtml, items };
}
