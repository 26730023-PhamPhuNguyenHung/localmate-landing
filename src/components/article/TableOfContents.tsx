import React, { useState, useEffect, useRef, useCallback } from 'react';
import { List, ChevronDown, ChevronUp, ArrowUp, BookOpen, Check } from 'lucide-react';
import { TOCItem, slugifyVietnamese, generateUniqueSlug, extractHeadingsFromHtml } from './tocUtils';
import { ReadingProgressBar } from './ReadingProgressBar';

export interface TableOfContentsProps {
  /**
   * Raw HTML content string.
   * If provided, headings (h2, h3) will be extracted automatically.
   */
  htmlContent?: string;

  /**
   * CSS selector of the article container where HTML is rendered in DOM (e.g. '.article-rendered-body').
   * If provided, TableOfContents will scan and ensure DOM heading IDs match TOC links 100%.
   */
  contentSelector?: string;

  /**
   * React Ref to the article container element. Takes precedence over contentSelector.
   */
  contentRef?: React.RefObject<HTMLElement>;

  /**
   * Title of the Table of Contents card. Default: 'Mục lục bài viết'
   */
  title?: string;

  /**
   * Offset in pixels from top of viewport when scrolling to heading (to account for sticky header). Default: 88
   */
  headerOffset?: number;

  /**
   * Whether the TOC card should be sticky on desktop viewports. Default: false
   */
  sticky?: boolean;

  /**
   * Top offset when sticky is enabled. Default: '96px'
   */
  stickyTop?: string;

  /**
   * Whether to display the ultra-thin Reading Progress Bar at the top of the screen. Default: true
   */
  showProgressBar?: boolean;

  /**
   * Whether the TOC card can be collapsed/expanded by the user. Default: true
   */
  collapsible?: boolean;

  /**
   * Initial collapsed state. Default: false (open)
   */
  defaultCollapsed?: boolean;

  /**
   * Optional custom CSS class name.
   */
  className?: string;

  /**
   * Optional custom CSS style object.
   */
  style?: React.CSSProperties;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  htmlContent,
  contentSelector = '.article-rendered-body',
  contentRef,
  title = 'Mục lục bài viết',
  headerOffset = 88,
  sticky = false,
  stickyTop = '96px',
  showProgressBar = true,
  collapsible = true,
  defaultCollapsed = false,
  className = '',
  style
}) => {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);
  const [readingPercent, setReadingPercent] = useState<number>(0);
  const tocListRef = useRef<HTMLUListElement>(null);
  const isClickScrolling = useRef<boolean>(false);
  const clickTimeoutRef = useRef<number | null>(null);

  // 1. Extract H2 and H3 Headings from DOM or HTML string
  const syncHeadings = useCallback(() => {
    const container = contentRef?.current || (contentSelector ? (document.querySelector(contentSelector) as HTMLElement) : null);

    if (container) {
      // Extract directly from rendered DOM and ensure every heading has a unique ID
      const headingElements = container.querySelectorAll<HTMLElement>('h2, h3');
      const extracted: TOCItem[] = [];
      const existingSlugs = new Set<string>();

      headingElements.forEach((el) => {
        const text = el.textContent?.trim() || '';
        if (!text) return;

        let id = el.getAttribute('id')?.trim();
        if (!id) {
          id = generateUniqueSlug(text, existingSlugs);
          el.setAttribute('id', id);
        } else {
          existingSlugs.add(id);
        }

        const level = el.tagName.toLowerCase() === 'h2' ? 2 : 3;
        extracted.push({ id, text, level });
      });

      setItems(extracted);
      if (extracted.length > 0 && !activeId) {
        setActiveId(extracted[0].id);
      }
    } else if (htmlContent) {
      // Fallback: extract from raw HTML string
      const extracted = extractHeadingsFromHtml(htmlContent);
      setItems(extracted);
      if (extracted.length > 0 && !activeId) {
        setActiveId(extracted[0].id);
      }
    }
  }, [contentRef, contentSelector, htmlContent]);

  useEffect(() => {
    syncHeadings();

    // Re-check after short delay to handle asynchronous hydration or rich text rendering
    const timer = setTimeout(syncHeadings, 150);
    return () => clearTimeout(timer);
  }, [syncHeadings]);

  // 2. High-Performance ScrollSpy (60fps: IntersectionObserver + passive RAF-throttled scroll handler)
  useEffect(() => {
    if (items.length === 0) return;

    const headingEls: HTMLElement[] = [];
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) headingEls.push(el);
    });

    if (headingEls.length === 0) return;

    let rafId: number | null = null;

    const checkActiveHeading = () => {
      rafId = null;
      if (isClickScrolling.current) return;

      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const readingLine = scrollY + headerOffset + 40; // Detection threshold just below header

      // Find heading closest to but above the reading line
      let currentActiveId = items[0].id;

      for (let i = 0; i < headingEls.length; i++) {
        const el = headingEls[i];
        const top = el.getBoundingClientRect().top + scrollY;

        if (top <= readingLine) {
          currentActiveId = el.id;
        } else {
          break;
        }
      }

      // Special case: if scrolled near the bottom of page, highlight the last heading
      const doc = document.documentElement;
      if (window.innerHeight + scrollY >= doc.scrollHeight - 50) {
        currentActiveId = headingEls[headingEls.length - 1].id;
      }

      setActiveId((prev) => (prev !== currentActiveId ? currentActiveId : prev));
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(checkActiveHeading);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    checkActiveHeading();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [items, headerOffset]);

  // 3. Keep active TOC item visible inside TOC container if it scrolls
  useEffect(() => {
    if (!activeId || !tocListRef.current) return;
    const activeLink = tocListRef.current.querySelector<HTMLElement>(`[data-toc-id="${activeId}"]`);
    if (activeLink) {
      activeLink.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      });
    }
  }, [activeId]);

  // 4. Smooth Scroll to Heading on Click
  const handleScrollToHeading = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    isClickScrolling.current = true;
    setActiveId(id);

    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const targetTop = target.getBoundingClientRect().top + scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth'
    });

    // Update URL hash smoothly without default jump
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${id}`);
    }

    // Reset lock after smooth scroll completes
    if (clickTimeoutRef.current !== null) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  // Scroll to Top helper
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (items.length > 0) {
      setActiveId(items[0].id);
    }
  };

  // If there are less than 2 headings, don't show empty TOC to keep page clean
  if (items.length < 2) {
    return showProgressBar ? (
      <ReadingProgressBar
        targetSelector={contentSelector}
        targetRef={contentRef}
        onProgressChange={setReadingPercent}
      />
    ) : null;
  }

  return (
    <>
      {/* 1. Ultra-thin 60fps Reading Progress Bar at Top of Viewport */}
      {showProgressBar && (
        <ReadingProgressBar
          targetSelector={contentSelector}
          targetRef={contentRef}
          onProgressChange={setReadingPercent}
        />
      )}

      {/* 2. Table of Contents Card */}
      <nav
        aria-label="Mục lục bài viết"
        className={`table-of-contents-wrapper ${className}`}
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
          overflow: 'hidden',
          marginBottom: '2rem',
          position: sticky ? 'sticky' : 'relative',
          top: sticky ? stickyTop : 'auto',
          zIndex: sticky ? 20 : 'auto',
          scrollbarGutter: 'stable',
          transition: 'box-shadow 0.2s ease',
          ...style
        }}
      >
        {/* Header bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.875rem 1.25rem',
            backgroundColor: '#f8fafc',
            borderBottom: isCollapsed ? 'none' : '1px solid #e2e8f0',
            cursor: collapsible ? 'pointer' : 'default',
            userSelect: 'none'
          }}
          onClick={() => collapsible && setIsCollapsed(!isCollapsed)}
          role={collapsible ? 'button' : undefined}
          tabIndex={collapsible ? 0 : undefined}
          onKeyDown={(e) => {
            if (collapsible && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              setIsCollapsed(!isCollapsed);
            }
          }}
          aria-expanded={!isCollapsed}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                backgroundColor: '#edf7f1',
                color: '#0d7647',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <List size={16} strokeWidth={2.4} />
            </div>
            <span
              style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.01em',
                textWrap: 'pretty'
              }}
            >
              {title}
            </span>
            <span
              style={{
                fontSize: '0.725rem',
                fontWeight: 600,
                color: '#64748b',
                backgroundColor: '#e2e8f0',
                padding: '0.15rem 0.5rem',
                borderRadius: '9999px',
                lineHeight: 1.2
              }}
            >
              {items.length} mục
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Reading progress pill indicator */}
            {readingPercent > 0 && (
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: readingPercent >= 100 ? '#15803d' : '#0d7647',
                  backgroundColor: '#edf7f1',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {readingPercent >= 100 ? (
                  <>
                    <Check size={12} strokeWidth={3} /> Hoàn thành
                  </>
                ) : (
                  `Đã đọc ${readingPercent}%`
                )}
              </span>
            )}

            {collapsible && (
              <button
                type="button"
                aria-label={isCollapsed ? 'Mở rộng mục lục' : 'Thu gọn mục lục'}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '44px',
                  minHeight: '44px',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  borderRadius: '6px'
                }}
              >
                {isCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
              </button>
            )}
          </div>
        </div>

        {/* Content list */}
        {!isCollapsed && (
          <div style={{ padding: '0.75rem 0.5rem 0.75rem 0.5rem' }}>
            <ul
              ref={tocListRef}
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                maxHeight: sticky ? 'calc(100vh - 240px)' : '420px',
                overflowY: 'auto',
                scrollbarGutter: 'stable',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
              }}
            >
              {items.map((item, index) => {
                const isActive = activeId === item.id;
                const isH3 = item.level === 3;

                return (
                  <li key={`${item.id}-${index}`} data-toc-id={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleScrollToHeading(item.id, e)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        padding: isH3 ? '0.45rem 0.75rem 0.45rem 1.75rem' : '0.55rem 0.75rem',
                        fontSize: isH3 ? '0.85rem' : '0.9rem',
                        fontWeight: isActive ? 700 : isH3 ? 500 : 600,
                        color: isActive ? '#0d7647' : isH3 ? '#475569' : '#1e293b',
                        backgroundColor: isActive ? '#edf7f1' : 'transparent',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        lineHeight: 1.5,
                        textWrap: 'pretty',
                        position: 'relative',
                        transition: 'background-color 0.15s ease, color 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = '#f1f5f9';
                          e.currentTarget.style.color = '#0f172a';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = isH3 ? '#475569' : '#1e293b';
                        }
                      }}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <span
                          style={{
                            position: 'absolute',
                            left: '4px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '3px',
                            height: '65%',
                            backgroundColor: '#0d7647',
                            borderRadius: '2px'
                          }}
                        />
                      )}

                      {/* Sub-item prefix */}
                      {isH3 && (
                        <span
                          style={{
                            color: isActive ? '#0d7647' : '#94a3b8',
                            fontSize: '0.8rem',
                            userSelect: 'none',
                            lineHeight: 1.4
                          }}
                        >
                          ↳
                        </span>
                      )}

                      <span style={{ flex: 1 }}>{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Bottom actions: Back to Top button */}
            <div
              style={{
                marginTop: '0.5rem',
                paddingTop: '0.5rem',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: '0.5rem'
              }}
            >
              <button
                type="button"
                onClick={handleScrollToTop}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0d7647')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              >
                <ArrowUp size={13} />
                <span>Lên đầu trang</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
