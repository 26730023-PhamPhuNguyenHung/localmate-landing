import React, { useState } from 'react';
import { Calendar, Clock, Share2, Check } from 'lucide-react';

export interface ArticleMetaProps {
  author?: string;
  roleDescription?: string;
  updatedAt?: string;
  readingTime?: string;
  className?: string;
}

export const ArticleMeta: React.FC<ArticleMetaProps> = ({
  author = 'Ban biên tập LocalMate',
  roleDescription = 'Chuyên gia tư vấn tăng trưởng số địa phương',
  updatedAt = '2026-09-17',
  readingTime = '5 phút đọc',
  className = ''
}) => {
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  const formattedDate = updatedAt?.split(' ')[0] || '2026-09-17';

  return (
    <div
      className={`article-editorial-byline ${className}`.trim()}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.65rem 1rem',
        padding: '0.5rem 0',
        borderTop: '1px solid #f1f5f9',
        borderBottom: '1px solid #f1f5f9',
        marginBottom: '1.25rem'
      }}
    >
      {/* Author details: Clean inline byline */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: '#edf7f1',
            color: '#0d7647',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '0.825rem',
            border: '1.5px solid #c6ebd4',
            flexShrink: 0
          }}
        >
          LM
        </div>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.25 }}>
            {author}
          </div>
          {roleDescription && (
            <div style={{ fontSize: '0.725rem', color: '#64748b' }}>
              {roleDescription}
            </div>
          )}
        </div>
      </div>

      {/* Date, Reading Time & Subtle Share Action */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.65rem',
          fontSize: '0.785rem',
          color: '#64748b'
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
          <Calendar size={13} style={{ color: '#94a3b8' }} />
          <span>{formattedDate}</span>
        </span>

        <span style={{ color: '#cbd5e1' }}>•</span>

        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
          <Clock size={13} style={{ color: '#94a3b8' }} />
          <span>{readingTime}</span>
        </span>

        <button
          type="button"
          onClick={handleCopyLink}
          aria-label="Chia sẻ bài viết"
          title="Sao chép đường dẫn bài viết"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            minHeight: '44px',
            padding: '0.35rem 0.85rem',
            backgroundColor: copiedUrl ? '#edf7f1' : '#f8fafc',
            border: copiedUrl ? '1px solid #86efac' : '1px solid #e2e8f0',
            borderRadius: '6px',
            color: copiedUrl ? '#0d7647' : '#475569',
            fontSize: '0.785rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          {copiedUrl ? <Check size={13} style={{ color: '#16a34a' }} /> : <Share2 size={13} />}
          <span>{copiedUrl ? 'Đã sao chép!' : 'Chia sẻ'}</span>
        </button>
      </div>
    </div>
  );
};

export default ArticleMeta;
