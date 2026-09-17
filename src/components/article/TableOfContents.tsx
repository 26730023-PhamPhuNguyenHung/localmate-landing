import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TOCItem, generateUniqueSlug, extractHeadingsFromHtml } from './tocUtils';
import { ReadingProgressBar } from './ReadingProgressBar';

export interface TableOfContentsProps {
  /**
   * Raw HTML content string.
   * Headings (h2, h3) will be extracted automatically if DOM container isn't ready.
   */
  htmlContent?: string;

  /**
   * CSS selector of the article content container (e.g. '.article-rendered-content').
   */
  contentSelector?: string;

  /**
   * React Ref to the article container element. Takes precedence over contentSelector.
   */
  contentRef?: React.RefObject<HTMLElement>;

  /**
   * Title of the Table of Contents. Default: 'Mục lục'
   */
  title?: string;

  /**
   * Sticky header height offset in pixels when scrolling to heading. Default: 88
   */
  headerOffset?: number;

  /**
   * Whether to position sticky on desktop viewports. Default: false (controlled by sidebar wrapper)
   */
  sticky?: boolean;

  /**
   * Top offset when sticky is enabled. Default: '96px'
   */
  stickyTop?: string;

  /**
   * Whether to display ReadingProgressBar. Default: false
   */
  showProgressBar?: boolean;

  /**
   * Whether TOC can be collapsed/expanded (useful for mobile inline view). Default: false
   */
  collapsible?: boolean;

  /**
   * Initial collapsed state if collapsible is true. Default: false
   */
  defaultCollapsed?: boolean;

  /**
   * Display variant: 'sidebar' (desktop guide rail) or 'inline-accordion' (mobile collapsible)
   */
  variant?: 'sidebar' | 'inline-accordion';

  /**
   * Automatically collapse accordion when a heading is clicked (recommended for mobile)
   */
  autoCloseOnSelect?: boolean;

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
  contentSelector = '.article-rendered-content',
  contentRef,
  title = 'Mục lục',
  headerOffset = 88,
  sticky = false,
  stickyTop = '96px',
  showProgressBar = false,
  collapsible = false,
  defaultCollapsed = false,
  variant = 'sidebar',
  autoCloseOnSelect = false,
  className = '',
  style
}) => {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);

  const rootNavRef = useRef<HTMLElement>(null);
  const tocListRef = useRef<HTMLUListElement>(null);
  const isClickScrolling = useRef<boolean>(false);
  const clickTimeoutRef = useRef<number | null>(null);

  // 1. Helper: Check if this specific instance is currently visible in DOM
  const isInstanceVisible = useCallback((): boolean => {
    if (!rootNavRef.current) return false;
    // An element hidden with display: none has offsetParent === null (unless body/fixed)
    return (
      rootNavRef.current.offsetParent !== null ||
      window.getComputedStyle(rootNavRef.current).display !== 'none'
    );
  }, []);

  // 2. Extract H2 and H3 Headings from DOM or HTML string
  const syncHeadings = useCallback(() => {
    const container =
      contentRef?.current ||
      (contentSelector ? (document.querySelector(contentSelector) as HTMLElement) : null);

    if (container) {
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
      const extracted = extractHeadingsFromHtml(htmlContent);
      setItems(extracted);
      if (extracted.length > 0 && !activeId) {
        setActiveId(extracted[0].id);
      }
    }
  }, [contentRef, contentSelector, htmlContent, activeId]);

  useEffect(() => {
    syncHeadings();
    const timer = setTimeout(syncHeadings, 150);
    return () => clearTimeout(timer);
  }, [syncHeadings]);

  // 3. High-Performance ScrollSpy with Visibility Guard (Zero Window Side-Effect)
  useEffect(() => {
    if (items.length === 0) return;

    let rafId: number | null = null;

    const checkActiveHeading = () => {
      rafId = null;

      // GUARD: If user just clicked or this TOC instance is hidden by CSS media queries, do nothing!
      if (isClickScrolling.current || !isInstanceVisible()) {
        return;
      }

      const headingEls: HTMLElement[] = [];
      for (let i = 0; i < items.length; i++) {
        const el = document.getElementById(items[i].id);
        if (el) headingEls.push(el);
      }
      if (headingEls.length === 0) return;

      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const readingThreshold = scrollY + headerOffset + 32;

      let currentActiveId = items[0].id;

      for (let i = 0; i < headingEls.length; i++) {
        const el = headingEls[i];
        const top = el.getBoundingClientRect().top + scrollY;

        if (top <= readingThreshold) {
          currentActiveId = el.id;
        } else {
          break;
        }
      }

      // If near bottom of the page, activate the last heading
      const doc = document.documentElement;
      if (window.innerHeight + scrollY >= doc.scrollHeight - 60) {
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
    checkActiveHeading();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [items, headerOffset, isInstanceVisible]);

  // 4. Keep active TOC item visible inside TOC container (STRICTLY CONTAINER-LOCAL ONLY, NO scrollIntoView)
  useEffect(() => {
    // Only apply to desktop sidebar with fixed height, not inline accordion
    if (variant !== 'sidebar' || !activeId || !tocListRef.current) return;
    const listEl = tocListRef.current;

    // Check if the TOC container is actually scrollable
    if (listEl.scrollHeight <= listEl.clientHeight) return;

    const activeItemEl = listEl.querySelector<HTMLElement>(`[data-toc-id="${activeId}"]`);
    if (!activeItemEl) return;

    const containerRect = listEl.getBoundingClientRect();
    const itemRect = activeItemEl.getBoundingClientRect();

    // Smooth local scroll within the container only
    const padding = 20;
    if (itemRect.top < containerRect.top + padding) {
      listEl.scrollTop -= containerRect.top + padding - itemRect.top;
    } else if (itemRect.bottom > containerRect.bottom - padding) {
      listEl.scrollTop += itemRect.bottom - (containerRect.bottom - padding);
    }
  }, [activeId, variant]);

  // 5. Smooth Scroll to Heading on Click
  const handleScrollToHeading = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    // Tự động thu gọn accordion trên mobile nếu được cấu hình
    if (autoCloseOnSelect && collapsible) {
      setIsCollapsed(true);
    }

    isClickScrolling.current = true;
    setActiveId(id);

    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const targetTop = target.getBoundingClientRect().top + scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth'
    });

    // Update URL hash smoothly without jitter or page reload
    if (window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }

    if (clickTimeoutRef.current !== null) {
      window.clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 650);
  };

  // If there are less than 2 headings, don't show empty TOC
  if (items.length < 2) {
    return showProgressBar ? (
      <ReadingProgressBar
        targetSelector={contentSelector}
        targetRef={contentRef}
      />
    ) : null;
  }

  const isInline = variant === 'inline-accordion';

  return (
    <>
      {showProgressBar && (
        <ReadingProgressBar
          targetSelector={contentSelector}
          targetRef={contentRef}
        />
      )}

      {/* Embedded CSS for clean hidden scrollbar */}
      <style>{`
        .editorial-toc-rail::-webkit-scrollbar {
          display: none;
        }
        .editorial-toc-rail {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <nav
        ref={rootNavRef}
        aria-label="Mục lục bài viết"
        className={`editorial-toc-wrapper ${className}`}
        style={{
          width: '100%',
          backgroundColor: isInline ? '#ffffff' : 'transparent',
          border: isInline ? '1px solid #e2e8f0' : 'none',
          borderRadius: isInline ? '10px' : '0',
          boxShadow: isInline ? '0 1px 3px rgba(0, 0, 0, 0.03)' : 'none',
          padding: isInline ? '0.75rem 1rem' : '0',
          position: sticky ? 'sticky' : 'relative',
          top: sticky ? stickyTop : 'auto',
          zIndex: sticky ? 10 : 'auto',
          ...style
        }}
      >
        {/* Modern Minimalist Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: isInline ? (isCollapsed ? '0' : '0.65rem') : '0.65rem',
            borderBottom: isInline && !isCollapsed ? '1px solid #f1f5f9' : 'none',
            marginBottom: isInline ? (isCollapsed ? '0' : '0.65rem') : '0.5rem',
            cursor: collapsible ? 'pointer' : 'default',
            userSelect: 'none'
          }}
          onClick={() => collapsible && setIsCollapsed(!isCollapsed)}
          role={collapsible ? 'button' : undefined}
          tabIndex={collapsible ? 0 : undefined}
          aria-expanded={collapsible ? !isCollapsed : undefined}
          onKeyDown={(e) => {
            if (collapsible && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              setIsCollapsed(!isCollapsed);
            }
          }}
        >
          <span
            style={{
              fontSize: '0.875rem', // 14px
              fontWeight: 600,
              color: '#0f172a',
              letterSpacing: '-0.01em',
              textTransform: 'none'
            }}
          >
            {title}
          </span>

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
                minWidth: '36px',
                minHeight: '36px',
                padding: '0.25rem',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </button>
          )}
        </div>

        {/* Navigation Rail List */}
        {!isCollapsed && (
          <ul
            ref={tocListRef}
            className="editorial-toc-rail"
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              borderLeft: '1px solid #e2e8f0', // Continuous subtle guide rail line
              maxHeight: isInline ? '320px' : 'calc(100vh - 120px)',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.125rem'
            }}
          >
            {items.map((item, index) => {
              const isActive = activeId === item.id;
              const isH3 = item.level === 3;

              return (
                <li
                  key={`${item.id}-${index}`}
                  data-toc-id={item.id}
                  style={{ position: 'relative' }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollToHeading(item.id, e)}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      fontSize: isH3 ? '0.8125rem' : '0.875rem', // H3: 13px, H2: 14px
                      fontWeight: isActive ? 600 : isH3 ? 400 : 500,
                      lineHeight: isH3 ? 1.4 : 1.45,
                      color: isActive ? '#0d7647' : isH3 ? '#64748b' : '#475569',
                      paddingTop: '0.35rem',
                      paddingBottom: '0.35rem',
                      paddingRight: '0.5rem',
                      paddingLeft: isH3 ? '1.75rem' : '0.875rem', // Indent 14px for H3
                      marginLeft: '-1px', // Seamlessly overlays the 1px guide rail
                      borderLeft: isActive ? '2px solid #0d7647' : '2px solid transparent',
                      transition: 'color 0.15s ease, border-color 0.15s ease',
                      textWrap: 'pretty'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#0d7647';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = isH3 ? '#64748b' : '#475569';
                      }
                    }}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </>
  );
};
