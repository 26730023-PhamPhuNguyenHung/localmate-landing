import React, { useState, useEffect, useMemo } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { Link, useRouter } from '../components/layout/Router';
import { 
  getArticleBySlug, 
  getRelatedArticles, 
  getArticleMetadataBySlug,
  ArticleDetail
} from '../data/articlesData';
import { 
  ArticleHeader,
  ArticleMeta,
  ArticleSummary,
  ArticleBody,
  ArticleFaq,
  ArticleAuthor,
  ArticleCta,
  ArticleRelatedPosts,
  TableOfContents,
  ReadingProgressBar
} from '../components/article';
import { ArrowLeft, AlertCircle, Sparkles, PhoneCall } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface ArticleDetailPageProps {
  slug: string;
  onOpenConsultForm?: (serviceName?: string) => void;
}

function useIsDesktop(breakpoint = 1080): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= breakpoint;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [breakpoint]);

  return isDesktop;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug, onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const isDesktop = useIsDesktop(1080);
  
  // Fast metadata fallback for 0ms title/breadcrumbs rendering
  const meta = useMemo(() => getArticleMetadataBySlug(slug), [slug]);
  
  // Full article detail state (code-splitted chunk)
  const [article, setArticle] = useState<ArticleDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Related articles in same cluster
  const relatedArticles = useMemo(() => {
    return getRelatedArticles(slug, 3);
  }, [slug]);

  // Load article chunk dynamically
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    getArticleBySlug(slug)
      .then((data) => {
        if (!isMounted) return;
        if (data) {
          setArticle(data);
        } else {
          setError('Không tìm thấy bài viết');
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err?.message || 'Lỗi khi tải bài viết');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  // 404 Not Found State
  if (!loading && (error || (!article && !meta))) {
    return (
      <div style={{ backgroundColor: '#ffffff', padding: '5rem 0 6rem 0', minHeight: '80vh', textAlign: 'center' }}>
        <Container size="md">
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}
          >
            <AlertCircle size={28} />
          </div>

          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
            Không tìm thấy bài viết yêu cầu
          </h1>

          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            Bài viết có thể đã được cập nhật đường dẫn mới hoặc không còn tồn tại trên hệ thống. Mời bạn quay lại danh mục để tra cứu.
          </p>

          <Button
            variant="primary"
            onClick={() => navigate('/kien-thuc')}
          >
            Quay lại Kho Kiến Thức
          </Button>
        </Container>
      </div>
    );
  }

  // Active data source: article or fallback meta
  const currentItem = article || meta!;

  // Extract article summary (Tóm tắt nhanh)
  const tldrText = useMemo(() => {
    if (article?.html) {
      const match = article.html.match(/<blockquote><p><strong>(.*?)<\/strong>:\s*(.*?)<\/p><\/blockquote>/s);
      if (match) {
        return match[2].replace(/<[^>]+>/g, '').trim();
      }
    }
    return currentItem?.excerpt || '';
  }, [article, currentItem]);

  // Generate Schema FAQ data for Google Rich Snippets
  const faqSchemaData = article?.faqs && article.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  } : undefined;

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Top Reading Progress Bar */}
      <ReadingProgressBar
        height={3}
        color="linear-gradient(90deg, #0d7647 0%, #16a34a 50%, #22c55e 100%)"
        targetSelector=".article-rendered-content"
      />

      {/* SEO & Structured Data Head */}
      <SEOHead
        title={currentItem.seo.title}
        description={currentItem.seo.description}
        canonicalPath={`/kien-thuc/${currentItem.slug}`}
        ogImage={currentItem.featuredImageUrl}
        ogType="article"
        breadcrumbs={[
          { name: 'Kiến thức', url: '/kien-thuc' },
          { name: currentItem.category, url: `/kien-thuc?chuyen-muc=${currentItem.categorySlug}` },
          { name: currentItem.title, url: `/kien-thuc/${currentItem.slug}` }
        ]}
        schemaType="BlogPosting"
        schemaData={faqSchemaData}
      />

      {/* Top Header / Slim Breadcrumbs Bar */}
      <div className="article-top-bar">
        <Container size="lg">
          <div className="article-top-nav-inner">
            <Breadcrumbs
              noMargin
              items={[
                { name: 'Kiến thức', url: '/kien-thuc' },
                { name: currentItem.category, url: `/kien-thuc?chuyen-muc=${currentItem.categorySlug}` },
                { name: currentItem.title, url: `/kien-thuc/${currentItem.slug}` }
              ]}
            />

            <Link
              to="/kien-thuc"
              className="article-top-back-link"
              title="Quay lại danh mục tất cả bài viết"
            >
              <ArrowLeft size={14} />
              <span>Tất cả bài viết</span>
            </Link>
          </div>
        </Container>
      </div>

      {/* Article Content Body Wrapper */}
      <div style={{ padding: '1.25rem 0 3.5rem 0' }}>
        <Container size="lg">
          {/* 1. Article Header Section (Editorial Title & Byline) */}
          <div style={{ maxWidth: '820px', margin: '0 auto 1rem auto' }}>
            <ArticleHeader
              title={currentItem.title}
              category={currentItem.category}
              categorySlug={currentItem.categorySlug}
              excerpt={currentItem.excerpt}
              author={currentItem.author}
              updatedAt={currentItem.updatedAt}
              readingTime={currentItem.readingTime}
            />
          </div>

          {/* 2. Editorial 2-Column Responsive Grid */}
          <div className="article-layout-grid" style={{ maxWidth: '1120px', margin: '0 auto' }}>
            {/* Main Article Content Column */}
            <div className="article-main-column">
              {/* Article Summary (Tóm tắt nhanh) - Chỉ hiện khi là câu trả lời rút gọn độc lập */}
              {tldrText && tldrText.trim() !== currentItem.excerpt?.trim() && (
                <ArticleSummary summary={tldrText} />
              )}

              {/* Mobile/Tablet Inline Accordion TOC (Chỉ mount trên mobile/tablet để triệt tiêu ghost listeners và xung đột DOM) */}
              {!isDesktop && article?.html && (
                <div className="article-mobile-toc-container">
                  <TableOfContents
                    htmlContent={article.html}
                    contentSelector=".article-rendered-content"
                    title="Mục lục"
                    variant="inline-accordion"
                    collapsible={true}
                    defaultCollapsed={true}
                    autoCloseOnSelect={true}
                    showProgressBar={false}
                  />
                </div>
              )}

              {/* Article Body with Editorial Typography */}
              <ArticleBody
                html={article?.html}
                loading={loading}
              />

              {/* FAQ Accordion Section */}
              {article?.faqs && article.faqs.length > 0 && (
                <ArticleFaq faqs={article.faqs} />
              )}

              {/* Author Bio (Chân thực, uy tín) */}
              <ArticleAuthor author={currentItem.author} />

              {/* Call To Action (Tư vấn chuyển đổi tinh tế) */}
              <ArticleCta
                articleTitle={currentItem.title}
                onOpenConsultForm={onOpenConsultForm}
              />

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <ArticleRelatedPosts
                  articles={relatedArticles}
                  categorySlug={currentItem.categorySlug}
                />
              )}
            </div>

            {/* Sticky Sidebar Column (Chỉ mount trên Desktop & Laptop >= 1080px) */}
            {isDesktop && (
              <aside className="article-sidebar-column" aria-label="Mục lục và điều hướng bài viết">
                {article?.html && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    <TableOfContents
                      htmlContent={article.html}
                      contentSelector=".article-rendered-content"
                      title="Mục lục"
                      variant="sidebar"
                      collapsible={false}
                      showProgressBar={false}
                    />

                  {/* Sidebar Quick Consultation Card */}
                  <div
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '1.25rem 1.15rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0d7647', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      <Sparkles size={13} />
                      <span>Hỗ Trợ Tăng Trưởng</span>
                    </div>

                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
                      Cần rà soát vị trí cơ sở & tối ưu tìm kiếm địa phương?
                    </div>

                    <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                      Đội ngũ LocalMate hỗ trợ phân tích hiện trạng và đề xuất giải pháp tinh gọn miễn phí.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenConsultForm) {
                          onOpenConsultForm(`Sidebar tư vấn: ${currentItem.title}`);
                        } else {
                          navigate('/lien-he');
                        }
                      }}
                      style={{
                        width: '100%',
                        padding: '0.65rem 1rem',
                        backgroundColor: '#0d7647',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.825rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#0a5c37';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#0d7647';
                      }}
                    >
                      <span>Nhận Demo 0đ</span>
                    </button>

                    <a
                      href="tel:0834422439"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.35rem',
                        fontSize: '0.775rem',
                        fontWeight: 600,
                        color: '#64748b',
                        textDecoration: 'none',
                        marginTop: '0.2rem'
                      }}
                    >
                      <PhoneCall size={12} />
                      <span>Hotline: 0834.422.439</span>
                    </a>
                  </div>
                </div>
              )}
            </aside>
          )}
          </div>
        </Container>
      </div>
    </div>
  );
};
export default ArticleDetailPage;
