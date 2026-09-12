import React from 'react';
import { Container } from '../ui/Container';
import { KNOWLEDGE_ARTICLES } from '../../data/landingContent';
import { BookOpen, ArrowRight, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const KnowledgeHubSection: React.FC = () => {
  const { navigate } = useRouter();

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Google Maps':
        return { bg: '#ecfdf5', text: '#065f46', border: '#a7f3d0' };
      case 'Làm Website':
        return { bg: '#eff6ff', text: '#1e40af', border: '#bfdbfe' };
      case 'Bảo Mật Số':
        return { bg: '#fffbeb', text: '#92400e', border: '#fde68a' };
      case 'Quảng Cáo Google':
        return { bg: '#f5f3ff', text: '#5b21b6', border: '#ddd6fe' };
      default:
        return { bg: '#f1f5f9', text: '#334155', border: '#e2e8f0' };
    }
  };

  return (
    <section
      id="kien-thuc"
      style={{
        padding: 'clamp(3.5rem, 5vw, 5rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-primary-dark)',
              backgroundColor: 'var(--color-primary-soft)',
              padding: '0.4rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '0.85rem'
            }}
          >
            <BookOpen size={14} /> CẨM NANG THỰC TẾ CHO DOANH NGHIỆP
          </span>

          <h2
            style={{
              fontSize: 'var(--font-size-h2)',
              color: '#0f172a',
              fontWeight: 800,
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
              margin: '0 0 0.75rem 0'
            }}
          >
            Kiến Thức &amp; Hướng Dẫn Thực Tế — Tránh Mất Tiền Oan
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.6,
              margin: 0,
              textWrap: 'pretty'
            }}
          >
            Kinh nghiệm đúc kết từ hàng trăm dự án: cách tự kiểm tra Google Maps, checklist 7 điều cần có trước khi làm website và cách giữ toàn quyền tài khoản số chính chủ 100%.
          </p>
        </div>

        {/* Knowledge Articles Grid */}
        <div className="knowledge-grid">
          {KNOWLEDGE_ARTICLES.map((art) => {
            const badgeTheme = getCategoryTheme(art.category);

            return (
              <article
                key={art.id}
                onClick={() => navigate('/kien-thuc/' + art.slug)}
                className="knowledge-card"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate('/kien-thuc/' + art.slug);
                  }
                }}
              >
                <div className="card-top">
                  <div className="card-meta">
                    <span
                      className="category-badge"
                      style={{
                        backgroundColor: badgeTheme.bg,
                        color: badgeTheme.text,
                        border: `1px solid ${badgeTheme.border}`
                      }}
                    >
                      {art.category}
                    </span>

                    <div className="read-time">
                      <Clock size={12} />
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  <h3 className="card-title">
                    {art.title}
                  </h3>

                  <p className="card-desc">
                    {art.desc}
                  </p>
                </div>

                <div className="card-footer">
                  <span className="footer-link-text">Đọc hướng dẫn chi tiết</span>
                  <div className="footer-arrow-icon">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Hub Footer Action */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            type="button"
            onClick={() => navigate('/kien-thuc')}
            className="knowledge-hub-btn"
          >
            <span>Khám phá toàn bộ cẩm nang &amp; bài viết hướng dẫn</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </Container>

      <style>{`
        .knowledge-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .knowledge-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .knowledge-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .knowledge-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
        }

        .knowledge-card:hover,
        .knowledge-card:focus-visible {
          transform: translateY(-4px);
          border-color: #86efac;
          box-shadow: 0 12px 24px -4px rgba(13, 118, 71, 0.12), 0 0 0 1px #22c55e;
        }

        .card-top {
          display: flex;
          flex-direction: column;
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.85rem;
          gap: 0.5rem;
        }

        .category-badge {
          font-size: 0.725rem;
          font-weight: 700;
          padding: 0.2rem 0.65rem;
          border-radius: 999px;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .read-time {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
          white-space: nowrap;
        }

        .card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.65rem 0;
          line-height: 1.42;
          text-wrap: pretty;
          transition: color 0.2s ease;
        }

        .knowledge-card:hover .card-title {
          color: #0d7647;
        }

        .card-desc {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px dashed #e2e8f0;
          font-size: 0.825rem;
          font-weight: 700;
          color: #0d7647;
          gap: 0.5rem;
        }

        .footer-arrow-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background-color: var(--color-primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .knowledge-card:hover .footer-arrow-icon {
          transform: translateX(3px);
          background-color: #bbf7d0;
        }

        .knowledge-hub-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 44px;
          padding: 0.75rem 1.75rem;
          background-color: #ffffff;
          color: #0f172a;
          border: 1px solid #cbd5e1;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          transition: all 0.2s ease;
        }

        .knowledge-hub-btn:hover {
          background-color: #f8fafc;
          border-color: #0d7647;
          color: #0d7647;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};

