import React, { useEffect, useRef, useState } from 'react';

export interface ReadingProgressBarProps {
  /**
   * CSS selector of the article content element (e.g., '.article-rendered-body').
   * If provided, progress measures from the start of this element to its end.
   * If omitted, falls back to full window scroll height.
   */
  targetSelector?: string;

  /**
   * React Ref to the article container element. Takes precedence over targetSelector if provided.
   */
  targetRef?: React.RefObject<HTMLElement>;

  /**
   * Height in pixels of the progress bar. Default: 3px (clean and subtle).
   */
  height?: number;

  /**
   * CSS background gradient or color for the progress bar.
   * Default: Brand emerald gradient (#0d7647 -> #16a34a -> #22c55e).
   */
  color?: string;

  /**
   * CSS z-index. Default: 99999 (ensures it sits on top of headers).
   */
  zIndex?: number;

  /**
   * Optional callback when progress changes (e.g., to display reading % badge in TOC).
   */
  onProgressChange?: (percent: number) => void;

  /**
   * Additional CSS class name.
   */
  className?: string;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  targetSelector,
  targetRef,
  height = 3,
  color,
  zIndex = 99999,
  onProgressChange,
  className = ''
}) => {
  const barFillRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const lastReportedPercent = useRef<number>(-1);
  const [ariaProgress, setAriaProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgress = () => {
      rafId.current = null;

      let ratio = 0;
      const targetEl = targetRef?.current || (targetSelector ? (document.querySelector(targetSelector) as HTMLElement) : null);

      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const targetTop = rect.top + scrollTop;
        const targetHeight = targetEl.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Start tracking when the top of the article reaches the top of the viewport (offset by sticky header ~84px)
        const startY = targetTop - 84;
        // Complete tracking when the bottom of the article reaches the bottom of the viewport
        const endY = targetTop + targetHeight - viewportHeight;
        const totalScrollable = endY - startY;

        if (totalScrollable > 0) {
          ratio = (scrollTop - startY) / totalScrollable;
        } else {
          ratio = scrollTop > startY ? 1 : 0;
        }
      } else {
        // Fallback: document scroll height
        const doc = document.documentElement;
        const totalHeight = doc.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          ratio = (window.scrollY || window.pageYOffset || 0) / totalHeight;
        }
      }

      // Clamp ratio between 0 and 1
      const clampedRatio = Math.min(1, Math.max(0, ratio));

      // 60FPS: Mutate GPU transform directly on the DOM element without triggering React re-render
      if (barFillRef.current) {
        barFillRef.current.style.transform = `scaleX(${clampedRatio})`;
      }

      // Notify callback only when integer percent changes, preventing high-frequency React rerenders
      const intPercent = Math.round(clampedRatio * 100);
      if (intPercent !== lastReportedPercent.current) {
        lastReportedPercent.current = intPercent;
        setAriaProgress(intPercent);
        if (onProgressChange) {
          onProgressChange(intPercent);
        }
      }
    };

    const handleScrollOrResize = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updateProgress);
      }
    };

    // Initial check
    handleScrollOrResize();

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [targetSelector, targetRef, onProgressChange]);

  const defaultGradient = 'linear-gradient(90deg, #0d7647 0%, #16a34a 60%, #22c55e 100%)';

  return (
    <div
      role="progressbar"
      aria-label="Tiến trình đọc bài viết"
      aria-valuenow={ariaProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`reading-progress-track ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: `${height}px`,
        backgroundColor: 'rgba(226, 232, 240, 0.45)', // Subtle slate background
        zIndex,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      <div
        ref={barFillRef}
        className="reading-progress-fill"
        style={{
          width: '100%',
          height: '100%',
          background: color || defaultGradient,
          transform: 'scaleX(0)',
          transformOrigin: '0% 50%',
          willChange: 'transform',
          transition: 'transform 50ms linear',
          boxShadow: '0 0 10px rgba(22, 163, 74, 0.5)'
        }}
      />
    </div>
  );
};
