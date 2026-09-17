import React, { useMemo } from 'react';

export interface ArticleBodyProps {
  /** Raw HTML content from article data chunk */
  html?: string;
  /** Loading state indicator */
  loading?: boolean;
  /** Optional additional CSS class */
  className?: string;
  /**
   * Strip redundant leading TL;DR blockquote when ArticleSummary
   * is already displaying it above the body. Default: true.
   */
  stripLeadingTldr?: boolean;
}

/**
 * ArticleBody — Editorial Typography & Prose System Component
 * 
 * Standardized typography according to LocalMate Design System:
 * - Max-width: 760px, margin-inline: auto (Ideal reading measure ~65-75 chars)
 * - Body text: 1.0625rem - 1.125rem (17-18px), line-height: 1.8, color: #1e293b
 * - Paragraph spacing: margin-bottom 1.4em
 * - Heading 2: 1.5rem - 1.75rem, font-weight: 750, margin-top: 2.5rem, margin-bottom: 1rem
 * - Heading 3: 1.25rem - 1.35rem, font-weight: 700, margin-top: 1.8rem, margin-bottom: 0.75rem
 * - Lists: padding-left: 1.4rem, li margin-bottom: 0.5rem, line-height: 1.75
 * - Links: #0d7647, underline with offset, hover: #095935
 * - Strong: font-weight: 650-700 (#0f172a)
 * - Blockquote: border-left 3px solid #0d7647, bg #f8fafc, padding 1rem 1.25rem, radius 0 8px 8px 0
 * - Table: wrapped in horizontal overflow container, responsive on mobile without layout break
 */
export const ArticleBody: React.FC<ArticleBodyProps> = ({
  html = '',
  loading = false,
  className = '',
  stripLeadingTldr = true
}) => {
  // Pre-process HTML content for optimal editorial reading experience
  const processedHtml = useMemo(() => {
    if (!html) return '';
    let clean = html;

    // 1. Strip redundant initial summary blockquote if ArticleSummary displays it separately
    if (stripLeadingTldr) {
      clean = clean.replace(/^\s*<blockquote><p><strong>(?:TL;DR|Tóm tắt nhanh).*?<\/blockquote>/is, '');
    }

    // 2. Convert raw markdown hr artifacts (<p>---</p>) into clean semantic dividers
    clean = clean.replace(/<p>\s*---\s*<\/p>/g, '<hr class="article-divider" />');

    return clean;
  }, [html, stripLeadingTldr]);

  if (loading) {
    return (
      <div
        className="article-body-loading"
        style={{
          padding: '3.5rem 0',
          textAlign: 'center',
          color: '#64748b',
          maxWidth: '760px',
          marginInline: 'auto'
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            border: '3px solid #e2e8f0',
            borderTopColor: '#0d7647',
            borderRadius: '50%',
            animation: 'article-body-spin 0.8s linear infinite',
            margin: '0 auto 1rem auto'
          }}
        />
        <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b' }}>
          Đang nạp toàn văn bài viết chi tiết...
        </p>
        <style>{`
          @keyframes article-body-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <article
        className={`article-body article-rendered-content ${className}`.trim()}
        dangerouslySetInnerHTML={{ __html: processedHtml }}
      />

      <style>{`
        /* ==========================================================================
           LocalMate Prose & Editorial Typography System (SSOT)
           ========================================================================== */

        .article-body,
        .article-rendered-content {
          max-width: 760px;
          margin-inline: auto;
          width: 100%;
          box-sizing: border-box;
          font-size: clamp(1.0625rem, 1.4vw, 1.125rem); /* 17px - 18px */
          line-height: 1.8;
          color: #1e293b;
          font-weight: 400;
          word-break: break-word;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* Headings: Already rendered in ArticleHeader, hide duplicate H1 */
        .article-body h1,
        .article-rendered-content h1 {
          display: none; /* Already rendered in ArticleHeader */
        }

        /* Heading 2 */
        .article-body h2,
        .article-rendered-content h2 {
          font-size: 1.45rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 2.25rem;
          margin-bottom: 0.85rem;
          padding-bottom: 0.4rem;
          border-bottom: 1px solid #f1f5f9;
          line-height: 1.35;
          letter-spacing: -0.01em;
          text-wrap: pretty;
          scroll-margin-top: 96px;
        }

        /* Heading 3 */
        .article-body h3,
        .article-rendered-content h3 {
          font-size: 1.18rem;
          font-weight: 700;
          color: #0f172a;
          margin-top: 1.6rem;
          margin-bottom: 0.65rem;
          line-height: 1.4;
          text-wrap: pretty;
          scroll-margin-top: 96px;
        }

        /* Paragraphs */
        .article-body p,
        .article-rendered-content p {
          margin-top: 0;
          margin-bottom: 1.4em;
          color: #1e293b;
          line-height: 1.8;
          text-wrap: pretty;
        }

        /* Lists */
        .article-body ul,
        .article-rendered-content ul {
          list-style-type: disc;
          padding-left: 1.4rem;
          margin-top: 0.5rem;
          margin-bottom: 1.4em;
        }

        .article-body ol,
        .article-rendered-content ol {
          list-style-type: decimal;
          padding-left: 1.4rem;
          margin-top: 0.5rem;
          margin-bottom: 1.4em;
        }

        .article-body li,
        .article-rendered-content li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
          color: #1e293b;
        }

        /* Fallback for inline li elements inside paragraphs generated by markdown parser */
        .article-body p > li,
        .article-rendered-content p > li {
          display: list-item;
          margin-left: 1.4rem;
          margin-bottom: 0.5rem;
          line-height: 1.75;
        }

        /* Checklist Items */
        .article-body .checklist-item,
        .article-rendered-content .checklist-item {
          list-style: none;
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          margin-bottom: 0.65rem;
          padding-left: 0;
          line-height: 1.75;
        }

        .article-body .checklist-item input[type="checkbox"],
        .article-rendered-content .checklist-item input[type="checkbox"] {
          margin-top: 0.35rem;
          accent-color: #0d7647;
          flex-shrink: 0;
          cursor: default;
        }

        /* Links */
        .article-body a,
        .article-rendered-content a {
          color: #0d7647;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1.5px;
          text-decoration-color: #86efac;
          font-weight: 600;
          transition: color 0.15s ease, text-decoration-color 0.15s ease;
        }

        .article-body a:hover,
        .article-rendered-content a:hover {
          color: #095935;
          text-decoration-color: #095935;
        }

        /* Strong & Emphasis */
        .article-body strong,
        .article-rendered-content strong {
          color: #0f172a;
          font-weight: 650;
        }

        .article-body em,
        .article-rendered-content em {
          font-style: italic;
          color: #334155;
        }

        /* Blockquote: Editorial Style */
        /* Hide first blockquote (summary) because it is already rendered in ArticleSummary */
        .article-body > blockquote:first-of-type,
        .article-rendered-content > blockquote:first-of-type {
          display: none;
        }

        .article-body blockquote,
        .article-rendered-content blockquote {
          border-left: 3px solid #0d7647;
          background-color: #f8fafc;
          padding: 1rem 1.25rem;
          margin: 1.6rem 0;
          border-radius: 0 8px 8px 0;
          color: #334155;
          font-style: normal;
        }

        .article-body blockquote p,
        .article-rendered-content blockquote p {
          margin-bottom: 0.5rem;
          line-height: 1.7;
          color: #334155;
        }

        .article-body blockquote p:last-child,
        .article-rendered-content blockquote p:last-child {
          margin-bottom: 0;
        }

        /* Semantic Section Divider */
        .article-body hr,
        .article-body .article-divider,
        .article-rendered-content hr,
        .article-rendered-content .article-divider {
          border: none;
          height: 1px;
          background: #e2e8f0;
          margin: 2.5rem 0;
        }

        /* Responsive Table Container & Styling */
        .article-body .table-responsive,
        .article-rendered-content .table-responsive,
        .article-body > table,
        .article-rendered-content > table {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin: 1.8rem 0;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background-color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          scrollbar-width: thin;
        }

        .article-body table,
        .article-rendered-content table {
          width: 100%;
          min-width: 580px; /* Prevents cell collapse on mobile devices */
          border-collapse: collapse;
          font-size: 0.9375rem; /* 15px */
          line-height: 1.6;
          text-align: left;
          border: none;
        }

        .article-body th,
        .article-rendered-content th {
          background-color: #f8fafc;
          color: #0f172a;
          font-weight: 700;
          padding: 0.75rem 1rem;
          border-bottom: 2px solid #e2e8f0;
          border-right: 1px solid #f1f5f9;
          white-space: nowrap;
          font-size: 0.875rem;
          letter-spacing: 0.01em;
        }

        .article-body td,
        .article-rendered-content td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid #f1f5f9;
          border-right: 1px solid #f1f5f9;
          color: #334155;
          vertical-align: top;
        }

        .article-body tr:last-child td,
        .article-rendered-content tr:last-child td {
          border-bottom: none;
        }

        .article-body th:last-child,
        .article-body td:last-child,
        .article-rendered-content th:last-child,
        .article-rendered-content td:last-child {
          border-right: none;
        }

        .article-body tr:nth-child(even) td,
        .article-rendered-content tr:nth-child(even) td {
          background-color: #fbfcfb;
        }

        .article-body tr:hover td,
        .article-rendered-content tr:hover td {
          background-color: #f8fafc;
        }

        /* Images inside articles */
        .article-body img,
        .article-rendered-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.75rem 0;
          display: block;
        }

        /* Code snippets */
        .article-body code,
        .article-rendered-content code {
          background-color: #f1f5f9;
          color: #0f172a;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          font-size: 0.875em;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        /* Mobile specific fine-tuning */
        @media (max-width: 640px) {
          .article-body,
          .article-rendered-content {
            font-size: 1.0625rem;
            line-height: 1.75;
          }

          .article-body h2,
          .article-rendered-content h2 {
            margin-top: 2rem;
            font-size: 1.45rem;
          }

          .article-body h3,
          .article-rendered-content h3 {
            margin-top: 1.5rem;
            font-size: 1.2rem;
          }

          .article-body blockquote,
          .article-rendered-content blockquote {
            padding: 0.85rem 1rem;
            margin: 1.25rem 0;
          }

          .article-body th,
          .article-rendered-content th,
          .article-body td,
          .article-rendered-content td {
            padding: 0.65rem 0.75rem;
          }
        }
      `}</style>
    </>
  );
};
