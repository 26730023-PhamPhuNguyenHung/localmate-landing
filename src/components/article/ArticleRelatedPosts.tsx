import React from 'react';
import { Link } from '../layout/Router';
import { ArticleMetadata } from '../../data/articlesData';
import { ArrowRight, Clock } from 'lucide-react';

export interface ArticleRelatedPostsProps {
  articles: ArticleMetadata[];
  categorySlug?: string;
  title?: string;
}

export const ArticleRelatedPosts: React.FC<ArticleRelatedPostsProps> = ({
  articles,
  categorySlug,
  title = 'Bài Viết Liên Quan'
}) => {
  if (!articles || articles.length === 0) return null;

  return (
    <nav
      aria-label="Bài viết liên quan"
      style={{
        marginTop: '4rem',
        paddingTop: '3rem',
        borderTop: '1px solid #e2e8f0'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}
      >
        <h3
          style={{
            fontSize: '1.35rem',
            fontWeight: 800,
            color: '#0f172a',
            margin: 0,
            letterSpacing: '-0.01em'
          }}
        >
          {title}
        </h3>

        {categorySlug && (
          <Link
            to={`/kien-thuc?chuyen-muc=${categorySlug}`}
            style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#0d7647',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            <span>Xem tất cả</span>
            <ArrowRight size={14} />
          </Link>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {articles.map((rel) => (
          <Link
            key={rel.id}
            to={`/kien-thuc/${rel.slug}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(15, 23, 42, 0.08)';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            <div style={{ padding: '1.25rem 1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  color: '#64748b',
                  marginBottom: '0.45rem'
                }}
              >
                <Clock size={12} />
                <span>{rel.readingTime}</span>
                <span style={{ color: '#cbd5e1' }}>•</span>
                <span style={{ color: '#0d7647', fontWeight: 600 }}>{rel.category}</span>
              </div>

              <h4
                style={{
                  fontSize: '0.975rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1.45,
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textWrap: 'pretty'
                }}
              >
                {rel.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};
