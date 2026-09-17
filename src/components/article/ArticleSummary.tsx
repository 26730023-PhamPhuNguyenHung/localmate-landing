import React from 'react';
import { Sparkles } from 'lucide-react';

export interface ArticleSummaryProps {
  summary?: string | null;
  title?: string;
  className?: string;
}

export const ArticleSummary: React.FC<ArticleSummaryProps> = ({
  summary,
  title = 'Tóm tắt nhanh',
  className = ''
}) => {
  const cleanSummary = summary?.trim();

  // Chỉ hiển thị khi bài viết thực sự có summary hợp lệ
  if (!cleanSummary) {
    return null;
  }

  return (
    <div
      className={`article-summary-callout ${className}`.trim()}
      style={{
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderLeft: '3px solid #0d7647',
        borderRadius: '8px',
        padding: '0.8rem 1.1rem',
        marginBottom: '1.25rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.8rem',
          fontWeight: 700,
          color: '#0d7647',
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
          marginBottom: '0.35rem'
        }}
      >
        <Sparkles size={13} style={{ flexShrink: 0 }} />
        <span>{title}</span>
      </div>
      <p
        style={{
          margin: 0,
          color: '#334155',
          fontSize: '0.935rem',
          lineHeight: 1.6,
          fontWeight: 400
        }}
      >
        {cleanSummary}
      </p>
    </div>
  );
};

export default ArticleSummary;
