import React from 'react';
import { Container } from '../ui/Container';
import { KNOWLEDGE_ARTICLES } from '../../data/landingContent';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const KnowledgeHubSection: React.FC = () => {
  const { navigate } = useRouter();

  if (!KNOWLEDGE_ARTICLES || KNOWLEDGE_ARTICLES.length === 0) return null;

  const featuredArticle = KNOWLEDGE_ARTICLES[0];
  const sideArticles = KNOWLEDGE_ARTICLES.slice(1, 4);

  return (
    <section className="section-component knowledge-editorial-section" id="kien-thuc" aria-label="Kiến thức thực tế">
      <Container>
        <div className="section-header">
          <span className="section-eyebrow">
            <BookOpen size={14} /> CẨM NANG THỰC TẾ
          </span>
          <h2>Kinh Nghiệm Tránh Mất Tiền Oan Khi Số Hóa</h2>
          <p className="subtitle">
            Những lưu ý thực tế để bạn tự kiểm tra website, định vị Google Maps và bảo vệ 100% quyền làm chủ tài khoản số.
          </p>
        </div>

        <div className="knowledge-editorial-grid">
          {/* LEFT: Featured Large Article */}
          <article
            className="featured-article-card"
            onClick={() => navigate('/kien-thuc/' + featuredArticle.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate('/kien-thuc/' + featuredArticle.slug);
              }
            }}
          >
            <div className="featured-content">
              <div className="article-meta-row">
                <span className="article-badge">{featuredArticle.category}</span>
                <span className="article-time">
                  <Clock size={14} /> {featuredArticle.readTime}
                </span>
                <span className="article-date">{featuredArticle.date}</span>
              </div>
              <h3 className="featured-article-title">{featuredArticle.title}</h3>
              <p className="featured-excerpt">{featuredArticle.excerpt}</p>
              <div className="read-more-link">
                <span>Đọc toàn bộ bài viết</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </article>

          {/* RIGHT: Stacked Secondary Articles */}
          <div className="side-articles-stack">
            {sideArticles.map((art) => (
              <article
                key={art.id}
                className="side-article-item"
                onClick={() => navigate('/kien-thuc/' + art.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate('/kien-thuc/' + art.slug);
                  }
                }}
              >
                <div className="side-meta-row">
                  <span className="side-badge">{art.category}</span>
                  <span className="side-time">{art.readTime}</span>
                </div>
                <h4 className="side-article-title">{art.title}</h4>
                <p className="side-excerpt">{art.excerpt}</p>
                <div className="side-arrow-link">
                  <span>Chi tiết</span> <ArrowRight size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>

      <style>{`
        .knowledge-editorial-section {
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
        }

        .knowledge-editorial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .knowledge-editorial-grid {
            grid-template-columns: 1.35fr 1fr;
            gap: 2.5rem;
            align-items: stretch;
          }
        }

        /* FEATURED ARTICLE */
        .featured-article-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .featured-article-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-primary-border);
          box-shadow: var(--shadow-card-hover);
        }

        .featured-img-wrap {
          width: 100%;
          height: 240px;
          background-color: var(--color-surface-subtle);
          overflow: hidden;
        }

        .featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .featured-article-card:hover .featured-img {
          transform: scale(1.02);
        }

        .featured-content {
          padding: clamp(1.5rem, 2.5vw, 2rem);
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }

        .article-meta-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .article-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .article-time {
          font-size: 0.8125rem;
          color: var(--ink-muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .featured-article-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0 0 0.65rem 0;
          line-height: 1.25;
        }

        .featured-excerpt {
          font-size: 0.9375rem;
          color: var(--ink-soft);
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }

        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        /* SIDE STACK */
        .side-articles-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .side-article-item {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .side-article-item:hover {
          transform: translateX(4px);
          border-color: var(--color-primary-border);
        }

        .side-meta-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .side-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .side-time {
          font-size: 0.75rem;
          color: var(--ink-muted);
        }

        .side-article-title {
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0;
          line-height: 1.35;
        }

        .side-excerpt {
          font-size: 0.875rem;
          color: var(--ink-soft);
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .side-arrow-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-top: 0.25rem;
        }
      `}</style>
    </section>
  );
};

export default KnowledgeHubSection;
