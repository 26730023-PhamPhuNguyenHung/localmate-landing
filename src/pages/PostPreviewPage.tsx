import React, { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { buildArticleSeoBundle } from '../components/seo/articleSchemaGenerator';
import { TopicClusterNav } from '../components/seo/TopicClusterNav';
import { cmsClient } from '../cms/services/cmsClient';
import { PostEntity } from '../cms/types';
import { useRouter } from '../components/layout/Router';
import { Button } from '../components/ui/Button';
import { AlertTriangle, Clock, Calendar, User, CheckCircle2, HelpCircle } from 'lucide-react';
import { TableOfContents } from '../components/article';
import { InArticleCallout, CalloutTopic } from '../components/conversion/InArticleCallout';
import { MobileFloatingCTA } from '../components/layout/MobileFloatingCTA';
import { LeadModal } from '../components/conversion/LeadModal';

interface PostPreviewPageProps {
  postId: number;
}

export const PostPreviewPage: React.FC<PostPreviewPageProps> = ({ postId }) => {
  const { navigate } = useRouter();
  const [post, setPost] = useState<PostEntity | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  // Lead capture modal state
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Tư vấn giải pháp Website & Marketing');
  const [leadNote, setLeadNote] = useState('');

  const handleOpenLeadModal = (serviceName?: string, initialNote?: string) => {
    if (serviceName) setSelectedService(serviceName);
    if (initialNote) setLeadNote(initialNote);
    setIsLeadModalOpen(true);
  };

  const getDetectedTopic = (): CalloutTopic => {
    if (!post) return 'web-demo';
    const text = `${post.category_name || ''} ${post.title || ''} ${post.related_service || ''}`.toLowerCase();
    if (text.includes('map') || text.includes('địa điểm') || text.includes('bản đồ') || text.includes('local seo')) {
      return 'maps-audit';
    }
    if (text.includes('ads') || text.includes('quảng cáo') || text.includes('facebook') || text.includes('google ads')) {
      return 'ads-optimization';
    }
    if (text.includes('crm') || text.includes('khách hàng') || text.includes('chăm sóc') || text.includes('tin nhắn')) {
      return 'crm-setup';
    }
    return 'web-demo';
  };

  useEffect(() => {
    loadPreview();
  }, [postId]);

  const loadPreview = async () => {
    setIsLoading(true);
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token') || undefined;
      const res = await cmsClient.getPreviewPost(postId, token);
      if (res.success && res.data?.post) {
        setPost(res.data.post);
      } else {
        setErrorMsg(res.error?.message || 'Không tìm thấy bản nháp bài viết');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Lỗi khi tải bản xem trước');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div style={{ padding: '5rem 0', textAlign: 'center' }}>
        <Container size="md">
          <p style={{ fontSize: '1.1rem', color: '#64748b' }}>Đang tải bản xem trước bài viết...</p>
        </Container>
      </div>
    );
  }

  if (errorMsg || !post) {
    return (
      <div style={{ padding: '5rem 0', textAlign: 'center' }}>
        <Container size="md">
          <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
            <AlertTriangle size={24} />
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
            {errorMsg || 'Không thể xem trước bài viết'}
          </h1>
          <p style={{ color: '#64748b', margin: '1rem 0 2rem 0' }}>
            Có thể bài viết không tồn tại hoặc phiên xem trước không hợp lệ.
          </p>
          <Button variant="primary" onClick={() => navigate('/admin/posts')}>
            Quay lại Quản trị
          </Button>
        </Container>
      </div>
    );
  }

  // Tự động sinh Structured Data Bundle cho bài viết
  const seoBundle = React.useMemo(() => {
    if (!post) return null;
    let parsedFaqs: Array<{ question: string; answer: string }> | undefined = undefined;
    if (post.geo_faq_json) {
      try {
        parsedFaqs = JSON.parse(post.geo_faq_json);
      } catch {}
    }
    return buildArticleSeoBundle({
      title: post.title,
      slug: post.slug,
      description: post.seo_description || post.excerpt || post.title,
      canonicalUrl: `/kien-thuc/${post.slug}`,
      featuredImageUrl: post.featured_image_url || undefined,
      datePublished: post.published_at || post.created_at,
      dateModified: post.updated_at || post.created_at,
      authorName: post.author_name || post.author_details?.name || 'LocalMate Team',
      authorRole: post.author_details?.role,
      categoryName: post.category_name,
      categorySlug: post.category_slug,
      tags: post.tags,
      rawMarkdownOrHtml: post.rendered_html,
      predefinedFaqs: parsedFaqs,
      entities: post.geo_entities ? post.geo_entities.split(',').map(s => s.trim()) : undefined,
      wordCount: post.word_count
    });
  }, [post]);

  return (
    <div>
      {/* Draft Preview Warning Banner */}
      <div
        style={{
          backgroundColor: '#fef3c7',
          borderBottom: '2px solid #f59e0b',
          color: '#92400e',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.875rem',
          fontWeight: 700,
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertTriangle size={18} color="#d97706" />
          <span>CHẾ ĐỘ XEM TRƯỚC BẢN NHÁP (DRAFT PREVIEW) — Bài viết chưa được xuất bản chính thức</span>
        </div>

        <button
          onClick={() => window.close()}
          style={{
            padding: '0.35rem 0.75rem',
            backgroundColor: '#ffffff',
            border: '1px solid #d97706',
            borderRadius: '6px',
            color: '#92400e',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          Đóng cửa sổ
        </button>
      </div>

      <SEOHead
        title={`[XEM TRƯỚC] ${post.seo_title || post.title}`}
        description={post.seo_description || post.excerpt}
        canonicalPath={seoBundle ? seoBundle.canonicalPath : `/kien-thuc/${post.slug}`}
        ogImage={seoBundle?.ogImage}
        ogType="article"
        breadcrumbs={seoBundle?.breadcrumbs}
        schemaType="Article"
        schemaData={seoBundle?.articleSchema}
        extraSchemas={seoBundle?.extraSchemas}
        articleMeta={seoBundle?.articleMeta}
        noIndex={true}
      />

      <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
        <Container size="lg">
          <Breadcrumbs
            items={[
              { name: 'Kiến thức', url: '/kien-thuc' },
              { name: post.category_name || 'Chuyên mục', url: '/kien-thuc' },
              { name: post.title, url: `/kien-thuc/${post.slug}` }
            ]}
          />

          <article style={{ maxWidth: '820px', margin: '0 auto' }}>
            {/* Category & Read time */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-dark)',
                  backgroundColor: 'var(--color-primary-soft)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                {post.category_name || 'Kiến thức'}
              </span>
              <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Clock size={14} /> {post.reading_time || '5 phút đọc'}
              </span>
              <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Calendar size={14} /> Trạng thái: <strong>{post.status.toUpperCase()}</strong>
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.3rem)',
                color: 'var(--color-text)',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1.25rem'
              }}
            >
              {post.title}
            </h1>

            {/* Author */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '0.85rem 1.25rem',
                backgroundColor: '#f8fbfa',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '2rem'
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)', fontWeight: 800 }}>
                <User size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-text)' }}>
                  {post.author_name || 'Ban biên tập LocalMate'}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Chuyên gia tư vấn LocalMate</div>
              </div>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <div
                style={{
                  backgroundColor: '#f8fbfa',
                  borderLeft: '4px solid var(--color-primary)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  fontSize: '1.025rem',
                  color: 'var(--color-text)',
                  lineHeight: 1.65,
                  fontWeight: 500,
                  marginBottom: '2rem'
                }}
              >
                {post.excerpt}
              </div>
            )}

            {/* GEO Answer-First Callout */}
            {post.geo_direct_answer && (
              <div
                style={{
                  backgroundColor: '#f0fdf4',
                  border: '1.5px solid #86efac',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '2.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#15803d', fontWeight: 800, fontSize: '0.85rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  <CheckCircle2 size={18} />
                  <span>Câu trả lời trực tiếp (Direct Answer)</span>
                </div>
                {post.geo_main_question && (
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem 0' }}>
                    {post.geo_main_question}
                  </h3>
                )}
                <p style={{ margin: 0, color: '#334155', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  {post.geo_direct_answer}
                </p>
              </div>
            )}

            {/* Featured Image */}
            {post.featured_image_url && (
              <div style={{ marginBottom: '2.5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <img
                  src={post.featured_image_url}
                  alt={post.title}
                  style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Table of Contents & Reading Progress Bar */}
            <TableOfContents
              contentSelector=".article-rendered-body"
              htmlContent={post.rendered_html}
              title="Mục lục bài viết"
              headerOffset={88}
              showProgressBar={true}
              collapsible={true}
            />

            {/* Article Rendered Body */}
            <div
              className="article-rendered-body"
              dangerouslySetInnerHTML={{ __html: post.rendered_html }}
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#334155'
              }}
            />

            {/* GEO FAQ Section if available */}
            {post.geo_faq_json && (() => {
              try {
                const faqs = JSON.parse(post.geo_faq_json);
                if (Array.isArray(faqs) && faqs.length > 0) {
                  return (
                    <div style={{ marginTop: '3.5rem', padding: '1.75rem', backgroundColor: '#f8fbfa', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <HelpCircle size={20} color="var(--color-primary)" />
                        <span>Câu hỏi thường gặp liên quan (FAQ)</span>
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq: any, fIdx: number) => (
                          <div key={fIdx} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem 1.25rem' }}>
                            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a', marginBottom: '0.35rem' }}>
                              {faq.question}
                            </div>
                            <div style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                              {faq.answer}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
              } catch {
                // ignore
              }
              return null;
            })()}

            {/* Topic Cluster & Internal Linking Navigation (Anti-Orphan Pages) */}
            <TopicClusterNav currentPostId={post.id} currentSlug={post.slug} />

            {/* In-Article Conversion Callout Box */}
            {(() => {
              const cta = post.cta_details;
              const topic = getDetectedTopic();
              if (cta) {
                return (
                  <InArticleCallout
                    topic="custom"
                    title={cta.headline}
                    subtitle={cta.description}
                    ctaLabel={cta.button_label}
                    onOpenLeadModal={() => {
                      if (cta.destination_url?.startsWith('http')) {
                        window.open(cta.destination_url, '_blank');
                      } else if (cta.destination_url && cta.destination_url !== '/lien-he') {
                        navigate(cta.destination_url);
                      } else {
                        handleOpenLeadModal(undefined, `Đăng ký từ bài viết: ${post.title}`);
                      }
                    }}
                  />
                );
              }
              return (
                <InArticleCallout
                  topic={topic}
                  onOpenLeadModal={(srv, note) => handleOpenLeadModal(srv, note)}
                />
              );
            })()}
          </article>
        </Container>
      </div>

      {/* Mobile Floating Sticky Quick CTA Bar */}
      <MobileFloatingCTA
        ctaText={
          getDetectedTopic() === 'maps-audit'
            ? 'Kiểm tra Maps 0đ'
            : getDetectedTopic() === 'web-demo'
            ? 'Web Demo 490k'
            : getDetectedTopic() === 'ads-optimization'
            ? 'Rà soát Ads 0đ'
            : 'Tư vấn CRM 0đ'
        }
        serviceName={
          getDetectedTopic() === 'maps-audit'
            ? 'Xác minh & Tối ưu Google Maps (Local SEO)'
            : getDetectedTopic() === 'web-demo'
            ? 'Thiết kế Website & Landing Page theo ngành'
            : getDetectedTopic() === 'ads-optimization'
            ? 'Chạy quảng cáo Google / Facebook chuyển đổi'
            : 'Gói số hóa & Marketing tổng thể cho tiệm'
        }
        sourceContext={`mobile_floating_article_${post.id}`}
        onOpenConsultForm={(srv) => handleOpenLeadModal(srv, `Đăng ký từ thanh liên hệ nhanh bài viết: ${post.title}`)}
      />

      {/* Global Lead Capture Modal */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        defaultServiceName={selectedService}
        initialNote={leadNote}
      />
    </div>
  );
};
