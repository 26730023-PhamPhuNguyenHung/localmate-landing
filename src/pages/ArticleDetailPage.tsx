import React, { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { getArticleBySlug, ArticleEntity } from '../data/articlesData';
import { getServiceBySlug } from '../data/servicesData';
import { useRouter, Link } from '../components/layout/Router';
import { cmsClient } from '../cms/services/cmsClient';
import { PostEntity } from '../cms/types';
import {
  Clock, Calendar, User, ArrowRight, HelpCircle, CheckCircle2,
  AlertTriangle, Lightbulb, Info, BookOpen, Loader2
} from 'lucide-react';

interface ArticleDetailPageProps {
  slug: string;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug, onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const [cmsPost, setCmsPost] = useState<PostEntity | null>(null);
  const [relatedCmsPosts, setRelatedCmsPosts] = useState<PostEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fallback to static article
  const staticArticle = getArticleBySlug(slug);

  useEffect(() => {
    loadArticle();
  }, [slug]);

  const loadArticle = async () => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getPublicPostBySlug(slug);
      if (res.redirect) {
        // 301 SEO redirect triggered
        navigate(res.redirect.destination);
        return;
      }
      if (res.success && res.data?.post) {
        setCmsPost(res.data.post);
        setRelatedCmsPosts(res.data.relatedPosts || []);
      }
    } catch {
      // ignore, will use staticArticle fallback
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (cmsPost?.cta_details?.id) {
      cmsClient.trackCta(cmsPost.cta_details.id, 'impression').catch(() => {});
    }
  }, [cmsPost?.cta_details?.id]);

  // Determine active article source (CMS or static)
  const isCms = !!cmsPost;
  const article = isCms ? null : staticArticle;

  if (!isCms && !article) {
    if (isLoading) {
      return (
        <div style={{ backgroundColor: '#ffffff', padding: '5rem 0', textAlign: 'center' }}>
          <Container size="md">
            <Loader2 size={32} className="spin" color="var(--color-primary)" style={{ margin: '0 auto 1rem auto' }} />
            <p style={{ color: 'var(--color-text-muted)' }}>Đang tải bài viết...</p>
          </Container>
        </div>
      );
    }
    return (
      <div style={{ backgroundColor: '#ffffff', padding: '5rem 0', textAlign: 'center' }}>
        <Container size="md">
          <h1 style={{ fontSize: '2rem', color: 'var(--color-text)', fontWeight: 800 }}>
            Bài viết không tồn tại hoặc đã được cập nhật đường dẫn
          </h1>
          <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0 2rem 0' }}>
            Vui lòng quay lại chuyên mục Kiến thức để khám phá các bài viết hướng dẫn khác.
          </p>
          <Button variant="primary" onClick={() => navigate('/kien-thuc')}>
            Về chuyên mục Kiến Thức
          </Button>
        </Container>
      </div>
    );
  }

  // Active properties
  const title = isCms ? cmsPost!.title : article!.title;
  const summary = isCms ? (cmsPost!.excerpt || '') : article!.summary;
  const categoryName = isCms ? (cmsPost!.category_name || 'Kiến thức') : article!.category;
  const readTime = isCms ? cmsPost!.reading_time : article!.readTime;
  const rawUpdated = isCms ? (cmsPost?.updated_at || cmsPost?.published_at) : article?.updatedAt;
  const updatedAt = rawUpdated ? rawUpdated.split(' ')[0] : '2026-09-17';
  const rawPublished = isCms ? cmsPost?.published_at : article?.publishedAt;
  const publishedAt = rawPublished ? rawPublished.split(' ')[0] : '2026-09-14';
  const authorName = isCms ? (cmsPost!.author_name || 'Ban biên tập LocalMate') : article!.author.name;
  const authorRole = isCms ? 'Chuyên gia tư vấn LocalMate' : article!.author.role;
  const heroImage = isCms ? (cmsPost!.featured_image_url || '/logo.png') : article!.heroImage;

  // Render Table of Contents from H2 in rendered_html for CMS post
  let tocItems: { id: string; title: string }[] = [];
  if (isCms && cmsPost!.rendered_html) {
    const h2Matches = cmsPost!.rendered_html.matchAll(/<h2>(.*?)<\/h2>/gi);
    let count = 1;
    for (const match of h2Matches) {
      const headingText = match[1].replace(/<[^>]*>/g, '').trim();
      if (headingText) {
        tocItems.push({
          id: `section-${count++}`,
          title: headingText
        });
      }
    }
  } else if (article?.tableOfContents) {
    tocItems = article.tableOfContents;
  }

  // Related Services Mapping (Hỗ trợ cả CMS và Static bài viết)
  const getCmsTargetServiceSlug = (catSlug?: string): string => {
    switch (catSlug) {
      case 'website': return 'thiet-ke-website';
      case 'google-maps': return 'google-maps-seo';
      case 'local-seo': return 'google-maps-seo';
      case 'google-ads': return 'quang-cao-google-ads';
      case 'crm-automation': return 'crm-automation';
      default: return 'thiet-ke-website';
    }
  };

  const targetServiceSlug = isCms 
    ? getCmsTargetServiceSlug(cmsPost?.category_slug) 
    : article?.cta?.targetServiceSlug;
  const targetService = targetServiceSlug ? getServiceBySlug(targetServiceSlug) : undefined;

  const handleCTAClick = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm(targetService?.name || 'Tư vấn giải pháp');
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      {/* SEO & Structured Data */}
      <SEOHead
        title={isCms && cmsPost!.seo_title ? cmsPost!.seo_title : title}
        description={isCms && cmsPost!.seo_description ? cmsPost!.seo_description : summary}
        canonicalPath={`/kien-thuc/${slug}`}
        ogImage={heroImage}
        ogType="article"
        breadcrumbs={[
          { name: 'Kiến thức', url: '/kien-thuc' },
          { name: categoryName, url: '/kien-thuc' },
          { name: title, url: `/kien-thuc/${slug}` }
        ]}
        schemaType={(cmsPost?.schema_type || "Article") as any}
        schemaData={{
          headline: title,
          description: summary,
          image: [heroImage.startsWith('http') ? heroImage : `https://localmate.vn${heroImage}`],
          datePublished: publishedAt,
          dateModified: updatedAt,
          author: {
            '@type': 'Person',
            name: authorName,
            jobTitle: authorRole
          },
          publisher: {
            '@type': 'Organization',
            name: 'LocalMate',
            logo: {
              '@type': 'ImageObject',
              url: 'https://localmate.vn/logo.png'
            }
          },
          ...(cmsPost?.geo_faq_json ? (() => {
            try {
              const parsedFaqs = JSON.parse(cmsPost.geo_faq_json);
              if (Array.isArray(parsedFaqs) && parsedFaqs.length > 0) {
                return {
                  mainEntity: parsedFaqs.map((f: any) => ({
                    '@type': 'Question',
                    name: f.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: f.answer
                    }
                  }))
                };
              }
            } catch {
              // ignore json error
            }
            return {};
          })() : {})
        }}
      />

      <Container size="lg">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Kiến thức', url: '/kien-thuc' },
            { name: categoryName, url: '/kien-thuc' },
            { name: title, url: `/kien-thuc/${slug}` }
          ]}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Main Article Content Column */}
          <article style={{ maxWidth: '800px' }}>
            {/* Category & Metadata */}
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
                {categoryName}
              </span>
              <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Clock size={14} /> {readTime}
              </span>
              <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Calendar size={14} /> Cập nhật: {updatedAt}
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
              {title}
            </h1>

            {/* Author Box */}
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
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-text)' }}>{authorName}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{authorRole}</div>
              </div>
            </div>

            {/* Summary Callout */}
            {summary && (
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
                {summary}
              </div>
            )}

            {/* GEO Answer-First Callout (AI & Direct Answer) */}
            {isCms && cmsPost?.geo_direct_answer && (
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
                {cmsPost.geo_main_question && (
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem 0' }}>
                    {cmsPost.geo_main_question}
                  </h3>
                )}
                <p style={{ margin: 0, color: '#334155', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  {cmsPost.geo_direct_answer}
                </p>
              </div>
            )}

            {/* Featured Image if from CMS */}
            {isCms && cmsPost!.featured_image_url && (
              <div style={{ marginBottom: '2.5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <img
                  src={cmsPost!.featured_image_url}
                  alt={title}
                  style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Table of Contents */}
            {tocItems.length > 0 && (
              <div
                style={{
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.5rem 1.75rem',
                  marginBottom: '2.5rem'
                }}
              >
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <BookOpen size={18} color="var(--color-primary)" /> Mục Lục Hướng Dẫn
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {tocItems.map((toc, idx) => (
                    <li key={idx}>
                      <a
                        href={`#${toc.id}`}
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--color-primary-dark)',
                          textDecoration: 'none',
                          fontWeight: 600,
                          lineHeight: 1.5
                        }}
                      >
                        {toc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Body Content */}
            {isCms ? (
              <div
                className="article-rendered-body"
                dangerouslySetInnerHTML={{ __html: cmsPost!.rendered_html }}
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#334155'
                }}
              />
            ) : (
              /* Legacy static sections renderer */
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.75, color: '#334155', fontSize: '1.025rem' }}>
                {article!.contentSections.map((sec, idx) => (
                  <section key={idx} id={sec.headingId}>
                    {sec.heading && (
                      <h2
                        style={{
                          fontSize: '1.35rem',
                          fontWeight: 800,
                          color: 'var(--color-text)',
                          marginBottom: '0.85rem',
                          marginTop: '0.5rem',
                          lineHeight: 1.35
                        }}
                      >
                        {sec.heading}
                      </h2>
                    )}

                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} style={{ margin: '0 0 1rem 0' }}>
                        {p}
                      </p>
                    ))}

                    {sec.listItems && (
                      <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {sec.listItems.map((li, lIdx) => (
                          <li key={lIdx}>{li}</li>
                        ))}
                      </ul>
                    )}

                    {sec.callout && (
                      <div
                        style={{
                          backgroundColor: sec.callout.type === 'warning' ? '#fff7ed' : '#f0fdf4',
                          border: '1px solid',
                          borderColor: sec.callout.type === 'warning' ? '#fdba74' : '#86efac',
                          borderRadius: 'var(--radius-md)',
                          padding: '1.25rem',
                          margin: '1.25rem 0'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '0.9rem', color: sec.callout.type === 'warning' ? '#c2410c' : '#15803d', marginBottom: '0.35rem' }}>
                          {sec.callout.type === 'warning' ? <AlertTriangle size={18} /> : <Lightbulb size={18} />}
                          <span>{sec.callout.title}</span>
                        </div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text)', lineHeight: 1.55 }}>
                          {sec.callout.text}
                        </div>
                      </div>
                    )}
                  </section>
                ))}
              </div>
            )}

            {/* GEO FAQ Section if available */}
            {isCms && cmsPost?.geo_faq_json && (() => {
              try {
                const faqs = JSON.parse(cmsPost.geo_faq_json);
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

            {/* Dynamic or Fallback Conversion Action Box */}
            {(() => {
              const cta = cmsPost?.cta_details;
              const hasCustomCta = !!cta;
              return (
                <div
                  style={{
                    backgroundColor: '#f8fbfa',
                    border: '2px solid var(--color-primary)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.5rem 2rem',
                    marginTop: '3.5rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 20px -2px rgba(13, 118, 71, 0.08)'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: 'var(--color-primary-dark)',
                      backgroundColor: 'var(--color-primary-soft)',
                      padding: '0.3rem 0.85rem',
                      borderRadius: '9999px',
                      marginBottom: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    Hỗ trợ trực tiếp cho chủ cơ sở kinh doanh
                  </span>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.65rem' }}>
                    {hasCustomCta ? cta.headline : 'Cần Triển Khai Thực Tế Cho Cơ Sở Của Bạn?'}
                  </h3>
                  <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', maxWidth: '580px', margin: '0 auto 1.75rem auto', lineHeight: 1.65 }}>
                    {hasCustomCta ? cta.description : 'Đội ngũ LocalMate hỗ trợ dựng bản demo thực tế 0đ, khảo sát trực tiếp tại cửa hàng và tư vấn giải pháp sát với ngân sách thực tế của bạn.'}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => {
                        if (cta?.id) {
                          cmsClient.trackCta(cta.id, 'click').catch(() => {});
                        }
                        if (hasCustomCta && cta.destination_url) {
                          if (cta.destination_url.startsWith('http')) {
                            window.open(cta.destination_url, '_blank');
                          } else {
                            navigate(cta.destination_url);
                          }
                        } else {
                          handleCTAClick();
                        }
                      }}
                      style={{ fontWeight: 700, padding: '0.85rem 1.75rem' }}
                    >
                      {hasCustomCta ? cta.button_label : 'Nhận Bản Demo 0đ Ngay'}
                    </Button>
                    
                    <a
                      href="https://zalo.me/0834422439"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.8rem 1.5rem',
                        backgroundColor: '#ffffff',
                        border: '1.5px solid var(--color-primary)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-primary-dark)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      Nhắn Zalo Trực Tiếp
                    </a>

                    <a
                      href="tel:+84834422439"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.8rem 1.25rem',
                        backgroundColor: 'transparent',
                        border: '1px solid #cbd5e1',
                        borderRadius: 'var(--radius-md)',
                        color: '#475569',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        textDecoration: 'none'
                      }}
                    >
                      Hotline: 0834 422 439
                    </a>
                  </div>

                  <div style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem' }}>
                    <span>✓ Bàn giao xem trước 0đ</span>
                    <span>✓ Minh bạch chi phí 100%</span>
                    <span>✓ Không phát sinh phụ phí</span>
                  </div>
                </div>
              );
            })()}
          </article>

          {/* Right Sticky Sidebar */}
          <aside style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Target Service Card */}
            {targetService && (
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.75rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                  DỊCH VỤ LIÊN QUAN
                </span>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text)', marginTop: '0.65rem', marginBottom: '0.5rem' }}>
                  {targetService.name}
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', lineHeight: 1.55, marginBottom: '1rem' }}>
                  {targetService.outcome}
                </p>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-orange-dark)', marginBottom: '1.25rem' }}>
                  {targetService.startingPrice}
                </div>
                <Link
                  to={`/dich-vu/${targetService.slug}`}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.65rem 1rem',
                    backgroundColor: 'var(--color-primary)',
                    color: '#ffffff',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textDecoration: 'none'
                  }}
                >
                  Xem chi tiết dịch vụ
                </Link>
              </div>
            )}

            {/* Related Articles */}
            {(isCms ? relatedCmsPosts : []).length > 0 && (
              <div
                style={{
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.5rem'
                }}
              >
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem' }}>
                  Bài viết cùng chủ đề
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {relatedCmsPosts.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/kien-thuc/${rel.slug}`}
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px dashed var(--color-border)'
                      }}
                    >
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.4 }}>
                        {rel.title}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        {rel.reading_time || '5 phút đọc'}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </div>
  );
};
