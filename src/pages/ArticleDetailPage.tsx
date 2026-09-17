import React, { useState, useEffect, useMemo } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { Link, useRouter } from '../components/layout/Router';
import { 
  getArticleBySlug, 
  getRelatedArticles, 
  getArticleMetadataBySlug,
  ArticleDetail,
  ArticleMetadata
} from '../data/articlesData';
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  Share2, 
  AlertCircle,
  Layout,
  MapPin,
  Target,
  TrendingUp,
  Workflow
} from 'lucide-react';
import { Button } from '../components/ui/Button';

interface ArticleDetailPageProps {
  slug: string;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug, onOpenConsultForm }) => {
  const { navigate } = useRouter();
  
  // Fast metadata fallback for 0ms title/breadcrumbs rendering
  const meta = useMemo(() => getArticleMetadataBySlug(slug), [slug]);
  
  // Full article detail state (code-splitted chunk)
  const [article, setArticle] = useState<ArticleDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedUrl, setCopiedUrl] = useState(false);

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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

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

  // Extract TLDR Answer First
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

      {/* Top Header / Breadcrumbs Bar */}
      <div
        style={{
          backgroundColor: '#f8fafc',
          borderBottom: '1px solid #e2e8f0',
          padding: '1.25rem 0'
        }}
      >
        <Container size="lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <Breadcrumbs
              items={[
                { name: 'Kiến thức', url: '/kien-thuc' },
                { name: currentItem.category, url: `/kien-thuc?chuyen-muc=${currentItem.categorySlug}` },
                { name: currentItem.title, url: `/kien-thuc/${currentItem.slug}` }
              ]}
            />

            <Link
              to="/kien-thuc"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#0d7647',
                textDecoration: 'none'
              }}
            >
              <ArrowLeft size={15} />
              <span>Xem tất cả bài viết</span>
            </Link>
          </div>
        </Container>
      </div>

      {/* Article Content Body Wrapper */}
      <div style={{ padding: '2.5rem 0 4rem 0' }}>
        <Container size="lg">
          <div
            style={{
              maxWidth: '840px',
              margin: '0 auto'
            }}
          >
            {/* 1. Category Badge & Verified Status */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem' }}>
              <Link
                to={`/kien-thuc?chuyen-muc=${currentItem.categorySlug}`}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#0d7647',
                  backgroundColor: '#edf7f1',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  border: '1px solid #c6ebd4'
                }}
              >
                {currentItem.category}
              </Link>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.775rem',
                  fontWeight: 600,
                  color: '#15803d',
                  backgroundColor: '#f0fdf4',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid #bbf7d0'
                }}
              >
                <ShieldCheck size={14} />
                <span>Đã kiểm chứng thực tế</span>
              </span>
            </div>

            {/* 2. Main Title H1 */}
            <h1
              style={{
                fontSize: 'clamp(1.85rem, 4vw, 2.65rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.28,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                textWrap: 'pretty'
              }}
            >
              {currentItem.title}
            </h1>

            {/* 3. Author & Meta Header Box */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '1rem 1.25rem',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                marginBottom: '2rem'
              }}
            >
              {/* Author details */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    backgroundColor: '#edf7f1',
                    color: '#0d7647',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
                  }}
                >
                  LM
                </div>
                <div>
                  <div style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0f172a' }}>
                    {currentItem.author || 'Ban biên tập LocalMate'}
                  </div>
                  <div style={{ fontSize: '0.775rem', color: '#64748b' }}>
                    Chuyên gia tư vấn tăng trưởng số địa phương
                  </div>
                </div>
              </div>

              {/* Time & Date */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '0.825rem',
                  color: '#64748b'
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={14} />
                  <span>Cập nhật: {currentItem.updatedAt?.split(' ')[0] || '2026-09-17'}</span>
                </span>
                <span style={{ color: '#cbd5e1' }}>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} />
                  <span>{currentItem.readingTime}</span>
                </span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  aria-label="Chia sẻ bài viết"
                  title="Sao chép đường dẫn bài viết"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    padding: '0.3rem 0.65rem',
                    backgroundColor: copiedUrl ? '#edf7f1' : '#ffffff',
                    border: copiedUrl ? '1px solid #0d7647' : '1px solid #cbd5e1',
                    borderRadius: '6px',
                    color: copiedUrl ? '#0d7647' : '#334155',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <Share2 size={13} />
                  <span>{copiedUrl ? 'Đã chép link!' : 'Chia sẻ'}</span>
                </button>
              </div>
            </div>

            {/* 4. Answer-First TL;DR Callout (GEO / AI Overviews Optimized) */}
            <div
              style={{
                backgroundColor: '#f0fdf4',
                border: '2px solid #86efac',
                borderRadius: '14px',
                padding: '1.35rem 1.6rem',
                marginBottom: '2.5rem',
                boxShadow: '0 4px 12px rgba(13, 118, 71, 0.05)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#15803d',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '0.5rem'
                }}
              >
                <CheckCircle2 size={18} />
                <span>Trả Lời Nhanh Cốt Lõi (TL;DR — Answer First)</span>
              </div>
              <p
                style={{
                  margin: 0,
                  color: '#1e293b',
                  fontSize: '1.02rem',
                  lineHeight: 1.7,
                  fontWeight: 500
                }}
              >
                {tldrText}
              </p>
            </div>

            {/* 5. Rendered HTML Body */}
            {loading ? (
              <div style={{ padding: '3rem 0', textAlign: 'center', color: '#64748b' }}>
                <div style={{ width: 40, height: 40, border: '3px solid #e2e8f0', borderTopColor: '#0d7647', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 1rem auto' }} />
                <p style={{ margin: 0 }}>Đang nạp toàn văn bài viết chất lượng cao...</p>
                <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
              </div>
            ) : (
              <article
                className="article-rendered-content"
                dangerouslySetInnerHTML={{ __html: article?.html || '' }}
                style={{
                  fontSize: '1.075rem',
                  lineHeight: 1.85,
                  color: '#1e293b'
                }}
              />
            )}

            {/* Custom CSS overrides for rendered HTML elements */}
            <style>{`
              .article-rendered-content h1 {
                display: none; /* Already rendered in Hero */
              }
              .article-rendered-content h2 {
                font-size: 1.55rem;
                font-weight: 800;
                color: #0f172a;
                margin-top: 2.75rem;
                margin-bottom: 1rem;
                padding-bottom: 0.5rem;
                border-bottom: 2px solid #edf7f1;
                line-height: 1.35;
                letter-spacing: -0.01em;
              }
              .article-rendered-content h3 {
                font-size: 1.22rem;
                font-weight: 700;
                color: #0f172a;
                margin-top: 1.75rem;
                margin-bottom: 0.75rem;
                line-height: 1.4;
              }
              .article-rendered-content p {
                margin-bottom: 1.35rem;
                color: #334155;
              }
              .article-rendered-content ul, .article-rendered-content ol {
                margin-bottom: 1.5rem;
                padding-left: 1.5rem;
              }
              .article-rendered-content li {
                margin-bottom: 0.65rem;
                line-height: 1.75;
                color: #334155;
              }
              .article-rendered-content strong {
                color: #0f172a;
                font-weight: 700;
              }
              .article-rendered-content blockquote {
                background-color: #f8fafc;
                border-left: 4px solid #0d7647;
                padding: 1.25rem 1.5rem;
                margin: 2rem 0;
                border-radius: 0 10px 10px 0;
                color: #0f172a;
                font-style: normal;
                line-height: 1.7;
              }
              .article-rendered-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 2rem 0;
                font-size: 0.95rem;
                display: block;
                overflow-x: auto;
                background-color: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
              }
              .article-rendered-content th {
                background-color: #f8fafc;
                color: #0f172a;
                font-weight: 700;
                padding: 0.85rem 1rem;
                border: 1px solid #e2e8f0;
                text-align: left;
                white-space: nowrap;
              }
              .article-rendered-content td {
                padding: 0.85rem 1rem;
                border: 1px solid #e2e8f0;
                color: #334155;
                line-height: 1.6;
              }
              .article-rendered-content tr:nth-child(even) td {
                background-color: #fbfcfb;
              }
              .article-rendered-content a {
                color: #0d7647;
                text-decoration: underline;
                font-weight: 600;
              }
              .article-rendered-content a:hover {
                color: #095935;
              }
            `}</style>

            {/* 6. Interactive FAQ Accordion Section */}
            {article?.faqs && article.faqs.length > 0 && (
              <section
                style={{
                  marginTop: '3.5rem',
                  padding: '2rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      backgroundColor: '#edf7f1',
                      color: '#0d7647',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <HelpCircle size={20} />
                  </div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Câu Hỏi Thường Gặp (FAQ)
                  </h2>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
                  Giải đáp ngắn gọn, thực tế cho những băn khoăn hay gặp nhất của chủ cơ sở kinh doanh.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {article.faqs.map((faq, fIdx) => {
                    const isOpen = openFaqIndex === fIdx;
                    return (
                      <div
                        key={fIdx}
                        style={{
                          backgroundColor: '#ffffff',
                          border: isOpen ? '1.5px solid #0d7647' : '1px solid #e2e8f0',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          transition: 'border-color 0.2s'
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(fIdx)}
                          style={{
                            width: '100%',
                            padding: '1rem 1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '1rem',
                            backgroundColor: isOpen ? '#fbfcfb' : '#ffffff',
                            border: 'none',
                            cursor: 'pointer',
                            textAlign: 'left'
                          }}
                        >
                          <span style={{ fontSize: '0.975rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
                            {faq.question}
                          </span>
                          <ChevronDown
                            size={18}
                            style={{
                              color: isOpen ? '#0d7647' : '#64748b',
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease',
                              flexShrink: 0
                            }}
                          />
                        </button>

                        {isOpen && (
                          <div
                            style={{
                              padding: '0.5rem 1.25rem 1.25rem 1.25rem',
                              fontSize: '0.95rem',
                              color: '#334155',
                              lineHeight: 1.7,
                              borderTop: '1px solid #f1f5f9'
                            }}
                          >
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 7. Author Box */}
            <div
              style={{
                marginTop: '3rem',
                padding: '1.75rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                display: 'flex',
                flexDirection: 'row',
                gap: '1.25rem',
                alignItems: 'flex-start'
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: '#edf7f1',
                  color: '#0d7647',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.3rem',
                  flexShrink: 0,
                  border: '2px solid #c6ebd4'
                }}
              >
                LM
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#0d7647', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>
                  Biên soạn bởi
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem 0' }}>
                  {currentItem.author || 'Ban biên tập LocalMate'}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                  Đội ngũ cố vấn và kỹ thuật viên LocalMate với hơn 6 năm kinh nghiệm trực tiếp thiết kế website tinh gọn, triển khai Local SEO và quản trị Google Business Profile cho hàng trăm chủ tiệm, phòng khám và doanh nghiệp dịch vụ tại Việt Nam.
                </p>
              </div>
            </div>

            {/* 8. Contextual Conversion CTA Box */}
            <div
              style={{
                marginTop: '3rem',
                padding: '2.25rem 2rem',
                backgroundColor: '#edf7f1',
                border: '2px solid #0d7647',
                borderRadius: '18px',
                textAlign: 'center',
                boxShadow: '0 8px 24px -4px rgba(13, 118, 71, 0.1)'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: '#0d7647',
                  backgroundColor: '#ffffff',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '9999px',
                  marginBottom: '1rem',
                  border: '1px solid #c6ebd4'
                }}
              >
                <Sparkles size={14} />
                <span>GIẢI PHÁP THỰC TẾ CHO DOANH NGHIỆP CỦA BẠN</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                Cần Triển Khai Bài Bản Ngay Cho Cơ Sở Của Bạn?
              </h2>

              <p style={{ fontSize: '0.95rem', color: '#334155', maxWidth: '600px', margin: '0 auto 1.75rem auto', lineHeight: 1.65 }}>
                Thay vì tự mày mò mất hàng tháng trời, LocalMate giúp bạn thiết lập website tinh gọn, tối ưu Google Maps chuẩn vị trí và lên chiến dịch đón khách quanh khu vực với cam kết minh bạch và hỗ trợ tận tâm.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    if (onOpenConsultForm) {
                      onOpenConsultForm(`Tư vấn từ bài viết: ${currentItem.title}`);
                    } else {
                      navigate('/lien-he');
                    }
                  }}
                >
                  Nhận Tư Vấn & Dựng Bản Demo 0đ
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.location.href = 'tel:0834422439';
                  }}
                >
                  Gọi Hotline: 0834.422.439
                </Button>
              </div>
            </div>

            {/* 9. Related Articles Section */}
            {relatedArticles.length > 0 && (
              <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Bài Viết Cùng Chủ Đề Trong Phễu
                  </h3>

                  <Link
                    to={`/kien-thuc?chuyen-muc=${currentItem.categorySlug}`}
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
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.25rem'
                  }}
                >
                  {relatedArticles.map((rel) => (
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
                        transition: 'transform 0.2s, box-shadow 0.2s'
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
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.35rem' }}>
                          {rel.readingTime} • {rel.category}
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
                            overflow: 'hidden'
                          }}
                        >
                          {rel.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};
