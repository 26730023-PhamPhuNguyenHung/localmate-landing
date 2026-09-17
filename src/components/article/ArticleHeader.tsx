import React from 'react';
import { Link } from '../layout/Router';
import { ArticleMeta } from './ArticleMeta';

export interface ArticleHeaderProps {
  title: string;
  category: string;
  categorySlug: string;
  excerpt?: string;
  author?: string;
  updatedAt?: string;
  readingTime?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  category,
  categorySlug,
  excerpt,
  author,
  updatedAt,
  readingTime,
  className = '',
  style
}) => {
  // Kiểm tra xem có metadata để hiển thị trong header không
  const hasMeta = Boolean(author || updatedAt || readingTime);

  return (
    <header
      className={`article-header ${className}`.trim()}
      style={{
        maxWidth: '880px',
        margin: '0 auto',
        width: '100%',
        marginBottom: '1.25rem',
        ...style
      }}
    >
      {/* 1. Category Badge & Verified Badge */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center',
          marginBottom: '0.65rem'
        }}
      >
        <Link
          to={`/kien-thuc?chuyen-muc=${categorySlug}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#0d7647',
            backgroundColor: '#edf7f1',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            border: '1px solid #c6ebd4',
            transition: 'background-color 0.15s, border-color 0.15s'
          }}
        >
          {category}
        </Link>
      </div>

      {/* 2. Main Title H1 - Chuẩn Clamp & Line-Height khắt khe */}
      <h1
        style={{
          fontSize: 'clamp(1.65rem, 2.75vw, 2.25rem)',
          fontWeight: 800,
          color: '#0f172a',
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
          marginTop: '0',
          marginBottom: excerpt ? '0.75rem' : '1rem',
          textWrap: 'pretty'
        }}
      >
        {title}
      </h1>

      {/* 3. Short Description / Excerpt (Lead Paragraph) */}
      {excerpt && (
        <p
          style={{
            fontSize: 'clamp(0.975rem, 1.2vw, 1.075rem)',
            lineHeight: 1.6,
            color: '#475569',
            marginTop: '0',
            marginBottom: hasMeta ? '1rem' : '0',
            textWrap: 'pretty',
            fontWeight: 400
          }}
        >
          {excerpt}
        </p>
      )}

      {/* 4. Editorial Metadata (Author • Updated Date • Read Time • Share) */}
      {hasMeta && (
        <ArticleMeta
          author={author}
          updatedAt={updatedAt}
          readingTime={readingTime}
        />
      )}
    </header>
  );
};

export default ArticleHeader;
