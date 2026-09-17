import React, { useState, useEffect, useRef } from 'react';
import { AdminLayout } from '../AdminLayout';
import { TiptapEditor } from './TiptapEditor';
import { cmsClient } from '../../cms/services/cmsClient';
import { PostEntity, CategoryEntity, TagEntity, CtaEntity } from '../../cms/types';
import { useRouter, Link } from '../../components/layout/Router';
import { evaluatePostSeo } from '../../cms/services/seoEngine';
import { evaluatePostGeo } from '../../cms/services/geoEngine';
import {
  ArrowLeft, Save, Eye, CheckCircle2, Globe, Clock,
  Calendar, Image as ImageIcon, Tag as TagIcon, Search,
  AlertCircle, ExternalLink, HelpCircle, Loader2,
  FileText, Sparkles, Link2, ShieldCheck, History,
  AlertTriangle, Check, BookOpen, Layers, Target,
  Compass, Lightbulb, ChevronDown, ChevronRight, Share2, Code2, MousePointerClick
} from 'lucide-react';
import { MediaPickerModal } from '../components/MediaPickerModal';

interface PostEditorPageProps {
  postId?: number;
}

type EditorTab = 'content' | 'seo' | 'geo' | 'social' | 'schema' | 'cta' | 'internal_links' | 'revisions';

export const PostEditorPage: React.FC<PostEditorPageProps> = ({ postId }) => {
  const { navigate } = useRouter();
  const [isLoading, setIsLoading] = useState(!!postId);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved');
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [allTags, setAllTags] = useState<TagEntity[]>([]);
  const [availableCtas, setAvailableCtas] = useState<CtaEntity[]>([]);
  const [activeTab, setActiveTab] = useState<EditorTab>('content');

  // Post form fields
  const [id, setId] = useState<number | undefined>(postId);
  const [uuid, setUuid] = useState<string>('');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [contentJson, setContentJson] = useState<any>(null);
  const [renderedHtml, setRenderedHtml] = useState('');
  const [status, setStatus] = useState<'draft' | 'review' | 'scheduled' | 'published' | 'archived'>('draft');
  const [categoryId, setCategoryId] = useState<number>(1);
  const [featuredImageId, setFeaturedImageId] = useState<number | null>(null);
  const [featuredImageUrl, setFeaturedImageUrl] = useState<string | null>(null);
  const [featuredImageAlt, setFeaturedImageAlt] = useState<string>('');
  const [scheduledAt, setScheduledAt] = useState<string>('');
  const [publishedAt, setPublishedAt] = useState<string>('');
  const [revisionNumber, setRevisionNumber] = useState<number>(1);
  const [wordCount, setWordCount] = useState<number>(0);

  // SEO Fields
  const [focusKeyword, setFocusKeyword] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const [robotsIndex, setRobotsIndex] = useState(true);
  const [robotsFollow, setRobotsFollow] = useState(true);

  // Social (OpenGraph) Fields
  const [ogTitle, setOgTitle] = useState('');
  const [ogDescription, setOgDescription] = useState('');
  const [ogImageUrl, setOgImageUrl] = useState('');

  // GEO & AI Search Fields
  const [geoMainQuestion, setGeoMainQuestion] = useState('');
  const [geoDirectAnswer, setGeoDirectAnswer] = useState('');
  const [geoEntities, setGeoEntities] = useState('LocalMate, TP. Hồ Chí Minh, Thiết kế website, SEO Google Maps, Doanh nghiệp nhỏ');
  const [geoSources, setGeoSources] = useState('');
  const [geoFaqList, setGeoFaqList] = useState<{ q: string; a: string }[]>([
    { q: '', a: '' }
  ]);

  // Conversion & Schema
  const [ctaId, setCtaId] = useState<number | null>(1);
  const [schemaType, setSchemaType] = useState<string>('Article');

  // Media Picker Modal
  const [isMediaPickerOpen, setIsMediaPickerOpen] = useState(false);
  const [isPickingForFeatured, setIsPickingForFeatured] = useState(true);

  // Autosave timer
  const autosaveTimerRef = useRef<any>(null);

  useEffect(() => {
    loadMetadata();
    if (postId) {
      loadPost(postId);
    } else {
      setIsLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (saveStatus === 'unsaved') {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [saveStatus]);

  const loadMetadata = async () => {
    const [catRes, tagRes, ctaRes] = await Promise.all([
      cmsClient.getCategories(),
      cmsClient.getTags(),
      cmsClient.getCtas()
    ]);
    if (catRes.success && catRes.data) setCategories(catRes.data);
    if (tagRes.success && tagRes.data) setAllTags(tagRes.data);
    if (ctaRes.success && ctaRes.data) setAvailableCtas(ctaRes.data);
  };

  const loadPost = async (pId: number) => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getPostById(pId);
      if (res.success && res.data) {
        const p = res.data as any;
        setId(p.id);
        setUuid(p.uuid);
        setTitle(p.title);
        setSlug(p.slug);
        setExcerpt(p.excerpt || '');
        setStatus(p.status);
        setCategoryId(p.category_id || 1);
        setFeaturedImageId(p.featured_image_id || null);
        setFeaturedImageUrl(p.featured_image_url || null);
        setFocusKeyword(p.focus_keyword || '');
        setSeoTitle(p.seo_title || '');
        setSeoDescription(p.seo_description || '');
        setCanonicalUrl(p.canonical_url || '');
        setRobotsIndex(p.robots_index !== 0);
        setRobotsFollow(p.robots_follow !== 0);
        setScheduledAt(p.scheduled_at ? p.scheduled_at.replace(' ', 'T').slice(0, 16) : '');
        setPublishedAt(p.published_at || '');
        setRevisionNumber(p.revision_number || 1);
        setWordCount(p.word_count || 0);

        // Social
        setOgTitle(p.og_title || '');
        setOgDescription(p.og_description || '');
        setOgImageUrl(p.og_image_url || '');

        // GEO
        setGeoMainQuestion(p.geo_main_question || '');
        setGeoDirectAnswer(p.geo_direct_answer || '');
        setGeoEntities(p.geo_entities || '');
        setGeoSources(p.geo_sources || '');
        if (p.geo_faq_json) {
          try {
            const parsed = JSON.parse(p.geo_faq_json);
            if (Array.isArray(parsed) && parsed.length > 0) setGeoFaqList(parsed);
          } catch {}
        }

        // Conversion & Schema
        setCtaId(p.cta_id || null);
        setSchemaType(p.schema_type || 'Article');

        if (p.rendered_html) setRenderedHtml(p.rendered_html);
        if (p.content_json) {
          try {
            setContentJson(JSON.parse(p.content_json));
          } catch {
            setContentJson(null);
          }
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const triggerAutosave = () => {
    setSaveStatus('unsaved');
    if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
    autosaveTimerRef.current = setTimeout(() => {
      savePost(false);
    }, 8000);
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!id && !slug) {
      const cleanSlug = val
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setSlug(cleanSlug);
    }
    if (!seoTitle) setSeoTitle(val);
    if (!ogTitle) setOgTitle(val);
    triggerAutosave();
  };

  const handleEditorChange = ({ json, html }: { json: any; html: string }) => {
    setContentJson(json);
    setRenderedHtml(html);
    const words = html.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
    setWordCount(words);
    triggerAutosave();
  };

  const savePost = async (isManual: boolean = false, targetStatus?: any) => {
    if (!title.trim()) {
      if (isManual) alert('Vui lòng nhập tiêu đề bài viết');
      return;
    }

    setIsSaving(true);
    setSaveStatus('saving');

    const finalStatus = targetStatus || status;

    // Strict Anti-Placeholder Guardrail when publishing
    if (finalStatus === 'published') {
      const lowerContent = (renderedHtml || '').toLowerCase();
      const bannedPlaceholders = [
        'đang được biên tập', 'sẽ cập nhật', 'nội dung chi tiết cho mục',
        'hướng dẫn từng bước tại đây', 'chúng tôi sẽ cập nhật', 'lorem ipsum'
      ];

      for (const phrase of bannedPlaceholders) {
        if (lowerContent.includes(phrase)) {
          alert(`Xuất bản bị chặn: Bài viết còn chứa placeholder "${phrase}". Hãy viết nội dung thật hoặc lưu nháp.`);
          setIsSaving(false);
          setSaveStatus('unsaved');
          return;
        }
      }

      if (wordCount < 300) {
        if (!window.confirm(`Bài viết hiện có ${wordCount} từ (dưới mức khuyến nghị 400 từ). Bạn có chắc chắn muốn xuất bản ngay?`)) {
          setIsSaving(false);
          setSaveStatus('unsaved');
          return;
        }
      }
    }

    const validFaqs = geoFaqList.filter(f => f.q.trim() && f.a.trim());

    const postPayload: any = {
      title,
      slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      excerpt,
      content_json: contentJson,
      rendered_html: renderedHtml,
      status: finalStatus,
      category_id: categoryId,
      featured_image_id: featuredImageId,
      focus_keyword: focusKeyword,
      seo_title: seoTitle || title,
      seo_description: seoDescription || excerpt,
      canonical_url: canonicalUrl || `https://localmate.vn/kien-thuc/${slug}`,
      robots_index: robotsIndex ? 1 : 0,
      robots_follow: robotsFollow ? 1 : 0,
      og_title: ogTitle || seoTitle || title,
      og_description: ogDescription || seoDescription || excerpt,
      og_image_url: ogImageUrl || featuredImageUrl || '',
      geo_main_question: geoMainQuestion,
      geo_direct_answer: geoDirectAnswer,
      geo_entities: geoEntities,
      geo_sources: geoSources,
      geo_faq_json: validFaqs.length > 0 ? JSON.stringify(validFaqs) : null,
      cta_id: ctaId,
      schema_type: schemaType,
      scheduled_at: scheduledAt ? scheduledAt.replace('T', ' ') : null,
      published_at: finalStatus === 'published' ? (publishedAt || new Date().toISOString()) : null
    };

    try {
      if (id) {
        const res = await cmsClient.updatePost(id, postPayload);
        if (res.success) {
          setSaveStatus('saved');
          if (targetStatus) setStatus(targetStatus);
          setRevisionNumber(res.data?.revision_number || revisionNumber + 1);
        } else {
          alert(res.error?.message || 'Lỗi lưu bài viết');
          setSaveStatus('unsaved');
        }
      } else {
        const res = await cmsClient.createPost(postPayload);
        if (res.success && res.data) {
          setId(res.data.id);
          setUuid(res.data.uuid);
          setSaveStatus('saved');
          if (targetStatus) setStatus(targetStatus);
          window.history.replaceState({}, '', `/admin/posts/${res.data.id}/edit`);
        } else {
          alert(res.error?.message || 'Lỗi tạo bài viết');
          setSaveStatus('unsaved');
        }
      }
    } catch (err: any) {
      alert(err.message || 'Lỗi kết nối máy chủ');
      setSaveStatus('unsaved');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSelectMedia = (media: any) => {
    if (isPickingForFeatured) {
      setFeaturedImageId(media.id);
      setFeaturedImageUrl(media.url);
      setFeaturedImageAlt(media.alt_text || '');
      if (!ogImageUrl) setOgImageUrl(media.url);
      triggerAutosave();
    }
    setIsMediaPickerOpen(false);
  };

  // Run Real-time SEO & GEO Evaluation
  const seoReport = evaluatePostSeo({
    title,
    slug,
    excerpt,
    renderedHtml,
    focusKeyword,
    seoTitle,
    seoDescription,
    canonicalUrl,
    featuredImageId,
    featuredImageUrl,
    featuredImageAlt
  });

  const geoReport = evaluatePostGeo({
    title,
    renderedHtml,
    mainQuestion: geoMainQuestion,
    directAnswer: geoDirectAnswer,
    entities: geoEntities,
    sources: geoSources,
    faqJson: JSON.stringify(geoFaqList.filter(f => f.q && f.a)),
    authorName: 'Chuyên gia LocalMate',
    schemaType
  });

  const selectedCta = availableCtas.find(c => c.id === ctaId);

  return (
    <AdminLayout activeKey="posts" title={id ? `Chỉnh sửa: ${title || 'Bài viết'}` : 'Viết Bài Mới'}>
      {isLoading ? (
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <Loader2 size={32} className="spin" color="#0d7647" style={{ margin: '0 auto 1rem auto' }} />
          <div>Đang tải dữ liệu bài viết...</div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Top Control Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#ffffff',
              padding: '0.85rem 1.5rem',
              borderRadius: '10px',
              border: '1px solid #e2e8f0',
              position: 'sticky',
              top: 60,
              zIndex: 25,
              gap: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link
                to="/admin/posts"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#475569',
                  textDecoration: 'none'
                }}
              >
                <ArrowLeft size={16} /> Danh sách bài
              </Link>

              {/* Status Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}>
                {saveStatus === 'saving' && <span style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: 4 }}><Loader2 size={13} className="spin" /> Đang lưu...</span>}
                {saveStatus === 'saved' && <span style={{ color: '#15803d', display: 'flex', alignItems: 'center', gap: 4 }}><CheckCircle2 size={13} /> Đã lưu</span>}
                {saveStatus === 'unsaved' && <span style={{ color: '#d97706', display: 'flex', alignItems: 'center', gap: 4 }}><AlertCircle size={13} /> Chưa lưu</span>}
              </div>

              {/* Score Badges */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span
                  title="Điểm SEO Rule-Based"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    backgroundColor: seoReport.status === 'good' ? '#dcfce7' : seoReport.status === 'warning' ? '#fef3c7' : '#fee2e2',
                    color: seoReport.status === 'good' ? '#15803d' : seoReport.status === 'warning' ? '#b45309' : '#b91c1c'
                  }}
                >
                  SEO: {seoReport.totalScore}/100
                </span>

                <span
                  title="Mức độ sẵn sàng trích dẫn của AI Search"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    backgroundColor: geoReport.readiness === 'Good' ? '#dcfce7' : geoReport.readiness === 'Needs work' ? '#fef3c7' : '#fee2e2',
                    color: geoReport.readiness === 'Good' ? '#15803d' : geoReport.readiness === 'Needs work' ? '#b45309' : '#b91c1c'
                  }}
                >
                  GEO: {geoReport.readiness}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              {/* Draft Preview Link */}
              {id && (
                <a
                  href={`/preview/post/${id}?token=preview_${uuid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#ffffff',
                    color: '#334155',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <Eye size={15} /> Xem trước
                </a>
              )}

              {/* Save Draft */}
              <button
                type="button"
                onClick={() => savePost(true, 'draft')}
                disabled={isSaving}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  cursor: isSaving ? 'not-allowed' : 'pointer'
                }}
              >
                <Save size={15} /> Lưu nháp
              </button>

              {/* Publish */}
              <button
                type="button"
                onClick={() => savePost(true, 'published')}
                disabled={isSaving}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1.15rem',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  cursor: isSaving ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'published' ? 'Cập nhật' : 'Xuất bản'}
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.25rem',
              borderBottom: '2px solid #e2e8f0',
              backgroundColor: '#ffffff',
              padding: '0.25rem 0.5rem 0 0.5rem',
              borderRadius: '8px 8px 0 0',
              overflowX: 'auto'
            }}
          >
            {[
              { key: 'content', label: '1. Bài Viết', icon: FileText },
              { key: 'seo', label: '2. SEO On-Page', icon: Globe },
              { key: 'geo', label: '3. GEO & AI Search', icon: Sparkles },
              { key: 'social', label: '4. Mạng Xã Hội (OG)', icon: Share2 },
              { key: 'schema', label: '5. Schema JSON-LD', icon: Code2 },
              { key: 'cta', label: '6. CTA Chuyển Đổi', icon: MousePointerClick },
              { key: 'internal_links', label: '7. Gợi Ý Links', icon: Link2 },
              { key: 'revisions', label: `8. Lịch Sử (v${revisionNumber})`, icon: History }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key as any)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.65rem 0.95rem',
                    border: 'none',
                    borderBottom: isActive ? '2px solid #0d7647' : '2px solid transparent',
                    backgroundColor: 'transparent',
                    color: isActive ? '#0d7647' : '#64748b',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Contents Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 360px', gap: '1.5rem', alignItems: 'start' }}>
            {/* Left Main Editing Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* TAB 1: CONTENT */}
              {activeTab === 'content' && (
                <>
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem' }}>
                    <input
                      type="text"
                      placeholder="Nhập tiêu đề bài viết tại đây..."
                      value={title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      style={{
                        width: '100%',
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        border: 'none',
                        outline: 'none',
                        color: '#0f172a',
                        boxSizing: 'border-box'
                      }}
                    />

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.75rem', fontSize: '0.825rem', color: '#64748b' }}>
                      <span>Slug: /kien-thuc/</span>
                      <input
                        type="text"
                        value={slug}
                        onChange={(e) => { setSlug(e.target.value); triggerAutosave(); }}
                        style={{
                          padding: '0.25rem 0.5rem',
                          border: '1px solid #cbd5e1',
                          borderRadius: '4px',
                          fontSize: '0.825rem',
                          color: '#0f172a',
                          fontWeight: 600,
                          outline: 'none',
                          flex: 1
                        }}
                      />
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Đoạn trích tóm tắt (Excerpt)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tóm tắt nội dung chính trong 1-2 câu để người đọc nắm bắt giá trị ngay..."
                      value={excerpt}
                      onChange={(e) => { setExcerpt(e.target.value); triggerAutosave(); }}
                      style={{
                        width: '100%',
                        padding: '0.55rem 0.75rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.85rem',
                        fontFamily: 'inherit',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Tiptap Rich-Text Editor */}
                  <TiptapEditor
                    initialContentJson={contentJson}
                    onChange={handleEditorChange}
                    onSelectImageRequest={() => {
                      setIsPickingForFeatured(false);
                      setIsMediaPickerOpen(true);
                    }}
                  />
                </>
              )}

              {/* TAB 2: SEO ON-PAGE */}
              {activeTab === 'seo' && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Tối Ưu SEO On-Page (Search Engine Optimization)
                  </h3>

                  {/* Google Desktop & Mobile SERP Snippet Preview */}
                  <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Mô Phỏng Hiển Thị Trên Google (SERP Preview)
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#202124', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: '#0d7647', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 800 }}>LM</div>
                      <span>localmate.vn › kien-thuc › {slug || 'duong-dan-bai-viet'}</span>
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1a0dab', textDecoration: 'none', margin: '0.25rem 0', lineHeight: 1.25 }}>
                      {seoTitle || title || 'Tiêu đề bài viết xuất hiện trên kết quả Google'}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#4d5156', lineHeight: 1.45 }}>
                      {seoDescription || excerpt || 'Mô tả bài viết cung cấp thông tin ngắn gọn giúp khách hàng nhấp chuột truy cập trang...'}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        Từ khóa trọng tâm (Focus Keyword)
                      </label>
                      <input
                        type="text"
                        placeholder="ví dụ: thiết kế web tiệm spa"
                        value={focusKeyword}
                        onChange={(e) => { setFocusKeyword(e.target.value); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        <span>Tiêu đề SEO (40 - 65 ký tự)</span>
                        <span style={{ color: seoTitle.length >= 40 && seoTitle.length <= 65 ? '#15803d' : '#d97706' }}>{seoTitle.length}/65</span>
                      </div>
                      <input
                        type="text"
                        value={seoTitle}
                        onChange={(e) => { setSeoTitle(e.target.value); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        <span>Thẻ mô tả (120 - 160 ký tự)</span>
                        <span style={{ color: seoDescription.length >= 120 && seoDescription.length <= 165 ? '#15803d' : '#d97706' }}>{seoDescription.length}/160</span>
                      </div>
                      <textarea
                        rows={3}
                        value={seoDescription}
                        onChange={(e) => { setSeoDescription(e.target.value); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        Đường dẫn chuẩn (Canonical URL)
                      </label>
                      <input
                        type="text"
                        value={canonicalUrl || `https://localmate.vn/kien-thuc/${slug}`}
                        onChange={(e) => { setCanonicalUrl(e.target.value); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={robotsIndex}
                          onChange={(e) => { setRobotsIndex(e.target.checked); triggerAutosave(); }}
                        />
                        <span>Cho phép Google lập chỉ mục (index)</span>
                      </label>

                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={robotsFollow}
                          onChange={(e) => { setRobotsFollow(e.target.checked); triggerAutosave(); }}
                        />
                        <span>Cho phép theo dõi liên kết (follow)</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: GEO & AI SEARCH */}
              {activeTab === 'geo' && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Tối Ưu Đề Xuất Tìm Kiếm AI (GEO / Generative Engine Optimization)
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>
                      Cung cấp cấu trúc câu trả lời trực diện, thực thể xác thực và bảng dữ liệu rõ ràng để ChatGPT Search, Perplexity và Google AI Overviews dễ dàng trích dẫn nội dung của bạn.
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        Câu hỏi trọng tâm của người dùng (Main Question)
                      </label>
                      <input
                        type="text"
                        placeholder="ví dụ: Chi phí thiết kế website cho tiệm tóc là bao nhiêu?"
                        value={geoMainQuestion}
                        onChange={(e) => { setGeoMainQuestion(e.target.value); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        Câu trả lời trực diện (Direct Answer / Answer-First)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Đoạn văn 40-70 từ trả lời thẳng vào câu hỏi, không lan man, nêu rõ con số hoặc giải pháp dứt khoát..."
                        value={geoDirectAnswer}
                        onChange={(e) => { setGeoDirectAnswer(e.target.value); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        Thực thể & Địa bàn liên quan (Key Entities)
                      </label>
                      <input
                        type="text"
                        value={geoEntities}
                        onChange={(e) => { setGeoEntities(e.target.value); triggerAutosave(); }}
                        placeholder="LocalMate, TP.HCM, Việt Nam, Thiết kế web..."
                        style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                      />
                    </div>

                    {/* FAQ Items */}
                    <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>
                          Câu Hỏi Thường Gặp Bổ Trợ (FAQ Items)
                        </div>
                        <button
                          type="button"
                          onClick={() => setGeoFaqList([...geoFaqList, { q: '', a: '' }])}
                          style={{
                            padding: '0.35rem 0.75rem',
                            borderRadius: '6px',
                            border: '1px solid #0d7647',
                            backgroundColor: '#edf7f1',
                            color: '#0d7647',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          + Thêm câu hỏi
                        </button>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {geoFaqList.map((faq, idx) => (
                          <div key={idx} style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.75rem' }}>
                            <input
                              type="text"
                              placeholder={`Câu hỏi ${idx + 1}...`}
                              value={faq.q}
                              onChange={(e) => {
                                const copy = [...geoFaqList];
                                copy[idx].q = e.target.value;
                                setGeoFaqList(copy);
                                triggerAutosave();
                              }}
                              style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem', marginBottom: '0.4rem', boxSizing: 'border-box' }}
                            />
                            <textarea
                              rows={2}
                              placeholder="Câu trả lời thực tế..."
                              value={faq.a}
                              onChange={(e) => {
                                const copy = [...geoFaqList];
                                copy[idx].a = e.target.value;
                                setGeoFaqList(copy);
                                triggerAutosave();
                              }}
                              style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: SOCIAL (OPEN GRAPH) */}
              {activeTab === 'social' && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Hiển Thị Mạng Xã Hội (Facebook, Zalo, LinkedIn)
                  </h3>

                  {/* Facebook Card Mockup */}
                  <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', maxWidth: '500px' }}>
                    <div style={{ width: '100%', height: '220px', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      {ogImageUrl || featuredImageUrl ? (
                        <img src={ogImageUrl || featuredImageUrl || ''} alt="OG Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Chưa có ảnh đại diện mạng xã hội</span>
                      )}
                    </div>
                    <div style={{ padding: '0.85rem' }}>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase' }}>LOCALMATE.VN</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: '0.2rem 0' }}>
                        {ogTitle || seoTitle || title || 'Tiêu đề hiển thị khi chia sẻ link'}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>
                        {ogDescription || seoDescription || excerpt || 'Mô tả ngắn gọn khi chia sẻ link trên mạng xã hội Facebook và Zalo...'}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        OG Title
                      </label>
                      <input
                        type="text"
                        value={ogTitle}
                        onChange={(e) => { setOgTitle(e.target.value); triggerAutosave(); }}
                        placeholder={title}
                        style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        OG Description
                      </label>
                      <textarea
                        rows={2}
                        value={ogDescription}
                        onChange={(e) => { setOgDescription(e.target.value); triggerAutosave(); }}
                        placeholder={seoDescription || excerpt}
                        style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        URL Ảnh Chia Sẻ (OG Image URL)
                      </label>
                      <input
                        type="text"
                        value={ogImageUrl}
                        onChange={(e) => { setOgImageUrl(e.target.value); triggerAutosave(); }}
                        placeholder="https://assets.localmate.vn/..."
                        style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: SCHEMA JSON-LD */}
              {activeTab === 'schema' && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Cấu Hình Dữ Liệu Có Cấu Trúc (Structured Data / Schema.org)
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>
                      Sinh mã JSON-LD chuẩn W3C và Google Search Central, chống tạo dữ liệu giả mạo.
                    </p>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Loại Schema chính của bài viết
                    </label>
                    <select
                      value={schemaType}
                      onChange={(e) => { setSchemaType(e.target.value); triggerAutosave(); }}
                      style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                    >
                      <option value="Article">Article (Mặc định cho bài kiến thức phân tích)</option>
                      <option value="BlogPosting">BlogPosting (Bài viết blog thường thức)</option>
                      <option value="FAQPage">FAQPage (Hỏi - đáp có cấu trúc)</option>
                      <option value="HowTo">HowTo (Hướng dẫn từng bước thực hành)</option>
                      <option value="Service">Service (Bài giới thiệu dịch vụ cụ thể)</option>
                    </select>
                  </div>

                  {/* Schema Code Preview */}
                  <div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Xem trước JSON-LD Schema được render
                    </div>
                    <pre
                      style={{
                        backgroundColor: '#0f172a',
                        color: '#38bdf8',
                        padding: '1rem',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        overflowX: 'auto',
                        lineHeight: 1.4
                      }}
                    >
                      {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": schemaType,
                        "headline": seoTitle || title,
                        "description": seoDescription || excerpt,
                        "image": featuredImageUrl || "https://localmate.vn/logo.png",
                        "datePublished": publishedAt || new Date().toISOString(),
                        "dateModified": new Date().toISOString(),
                        "author": {
                          "@type": "Person",
                          "name": "Chuyên gia tư vấn LocalMate"
                        },
                        "publisher": {
                          "@type": "Organization",
                          "name": "LocalMate",
                          "url": "https://localmate.vn"
                        }
                      }, null, 2)}
                    </pre>
                  </div>
                </div>
              )}

              {/* TAB 6: CTA CONVERSION */}
              {activeTab === 'cta' && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Khối Kêu Gọi Hành Động (Conversion CTA System)
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>
                      Gắn hộp đăng ký nhận tư vấn phù hợp với chủ đề bài viết để tạo khách hàng tiềm năng (Lead Generation).
                    </p>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Chọn mẫu CTA cho bài viết này
                    </label>
                    <select
                      value={ctaId || ''}
                      onChange={(e) => {
                        const val = e.target.value ? parseInt(e.target.value, 10) : null;
                        setCtaId(val);
                        triggerAutosave();
                      }}
                      style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                    >
                      <option value="">Sử dụng CTA mặc định toàn site</option>
                      {availableCtas.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.placement})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Selected CTA Live Preview Box */}
                  {selectedCta && (
                    <div style={{ border: '2px solid #0d7647', borderRadius: '10px', padding: '1.5rem', backgroundColor: '#edf7f1' }}>
                      <div style={{ fontSize: '0.72rem', color: '#0d7647', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                        Khối CTA sẽ hiển thị trong bài viết ({selectedCta.placement})
                      </div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
                        {selectedCta.headline}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: '#334155', margin: '0 0 1rem 0', lineHeight: 1.5 }}>
                        {selectedCta.description}
                      </p>
                      <a
                        href={selectedCta.destination_url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-block',
                          padding: '0.55rem 1.25rem',
                          borderRadius: '8px',
                          backgroundColor: '#0d7647',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          textDecoration: 'none'
                        }}
                      >
                        {selectedCta.button_label}
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 7: INTERNAL LINKS ASSISTANT */}
              {activeTab === 'internal_links' && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Gợi Ý Liên Kết Nội Bộ Chuẩn SEO (Internal Link Assistant)
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>
                      Các dịch vụ và bài viết liên quan của LocalMate để bạn có thể chèn link tự nhiên vào nội dung.
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { title: 'Thiết kế Website tốc độ cao chuẩn SEO', url: '/thiet-ke-website', reason: 'Trỏ link khi đề cập đến xây dựng website, tối ưu tốc độ' },
                      { title: 'Google Maps & Local SEO đưa tiệm lên top', url: '/dich-vu/google-maps-seo', reason: 'Trỏ link khi nói về xác minh vị trí, tiệm xung quanh' },
                      { title: 'Dịch vụ GEO & Đón đầu tìm kiếm AI', url: '/dich-vu/geo', reason: 'Trỏ link khi nói về ChatGPT, AI Overviews' },
                      { title: 'Quảng cáo Google Ads tiết kiệm chi phí', url: '/google-ads', reason: 'Trỏ link khi nói về tìm kiếm khách hàng nhanh' },
                      { title: 'Bảng giá dịch vụ LocalMate minh bạch', url: '/bang-gia', reason: 'Trỏ link khi khách cần tham khảo mức chi phí' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.75rem 1rem',
                          backgroundColor: '#f8fafc',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>{item.title}</div>
                          <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.reason}</div>
                          <code style={{ fontSize: '0.72rem', color: '#0d7647' }}>{item.url}</code>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(`[${item.title}](${item.url})`);
                            alert(`Đã sao chép liên kết Markdown: [${item.title}](${item.url})`);
                          }}
                          style={{
                            padding: '0.4rem 0.8rem',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            backgroundColor: '#ffffff',
                            color: '#334155',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Chép Link
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 8: REVISIONS */}
              {activeTab === 'revisions' && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0' }}>
                    Lịch Sử Phiên Bản & Điểm Khôi Phục (Snapshot History)
                  </h3>
                  <div style={{ borderLeft: '3px solid #0d7647', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                      Phiên bản hiện tại: v{revisionNumber}
                    </div>
                    <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
                      Hệ thống tự động lưu lại bản chụp (snapshot) của bài viết vào cơ sở dữ liệu mỗi khi xuất bản hoặc cập nhật.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Metadata & Checklists Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Publishing & Category */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0' }}>
                  Thuộc Tính Bài Viết
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '0.3rem' }}>
                      Trạng thái bài viết
                    </label>
                    <select
                      value={status}
                      onChange={(e) => { setStatus(e.target.value as any); triggerAutosave(); }}
                      style={{ width: '100%', padding: '0.5rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem' }}
                    >
                      <option value="draft">Bản nháp (Draft)</option>
                      <option value="review">Đang xét duyệt (Review)</option>
                      <option value="scheduled">Hẹn giờ đăng (Scheduled)</option>
                      <option value="published">Đã xuất bản (Published)</option>
                      <option value="archived">Lưu trữ (Archived)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '0.3rem' }}>
                      Chuyên mục
                    </label>
                    <select
                      value={categoryId}
                      onChange={(e) => { setCategoryId(parseInt(e.target.value, 10)); triggerAutosave(); }}
                      style={{ width: '100%', padding: '0.5rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem' }}
                    >
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Featured Image Picker */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '0.35rem' }}>
                      Ảnh đại diện (Featured Image)
                    </label>
                    {featuredImageUrl ? (
                      <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                        <img src={featuredImageUrl} alt="Featured" style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                        <button
                          type="button"
                          onClick={() => {
                            setIsPickingForFeatured(true);
                            setIsMediaPickerOpen(true);
                          }}
                          style={{
                            position: 'absolute',
                            bottom: 6,
                            right: 6,
                            padding: '0.35rem 0.65rem',
                            backgroundColor: 'rgba(15, 23, 42, 0.8)',
                            color: '#ffffff',
                            borderRadius: '4px',
                            border: 'none',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Đổi ảnh
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setIsPickingForFeatured(true);
                          setIsMediaPickerOpen(true);
                        }}
                        style={{
                          width: '100%',
                          padding: '1.5rem',
                          border: '1px dashed #cbd5e1',
                          borderRadius: '8px',
                          backgroundColor: '#f8fafc',
                          color: '#64748b',
                          fontSize: '0.825rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        <ImageIcon size={22} color="#0d7647" />
                        <span>Chọn ảnh đại diện từ R2</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Real-time SEO Scoring Checklist */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Tiêu Chí SEO ({seoReport.totalScore}/100)
                  </h4>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: seoReport.status === 'good' ? '#15803d' : '#d97706' }}>
                    {seoReport.status === 'good' ? 'Đạt chuẩn' : 'Cần khắc phục'}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.78rem' }}>
                  {seoReport.checks.map((c) => (
                    <div
                      key={c.id}
                      style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '0.4rem',
                        color: c.status === 'good' ? '#15803d' : c.status === 'warning' ? '#b45309' : '#b91c1c'
                      }}
                    >
                      <span style={{ marginTop: '2px' }}>
                        {c.status === 'good' ? '✓' : c.status === 'warning' ? '!' : '×'}
                      </span>
                      <div>
                        <div style={{ fontWeight: 700 }}>{c.name}: {c.message}</div>
                        {c.detail && <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{c.detail}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-time GEO AI Search Checklist */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Mức Độ Sẵn Sàng GEO ({geoReport.readiness})
                  </h4>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: geoReport.readiness === 'Good' ? '#15803d' : '#d97706' }}>
                    {geoReport.score}/100
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.78rem' }}>
                  {geoReport.checks.map((g) => (
                    <div
                      key={g.id}
                      style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '0.4rem',
                        color: g.passed ? '#15803d' : '#b45309'
                      }}
                    >
                      <span style={{ marginTop: '2px' }}>{g.passed ? '✓' : '!'}</span>
                      <div>
                        <div style={{ fontWeight: 700 }}>{g.name}</div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{g.recommendation}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media Picker Modal */}
      <MediaPickerModal
        isOpen={isMediaPickerOpen}
        onClose={() => setIsMediaPickerOpen(false)}
        onSelect={handleSelectMedia}
      />
    </AdminLayout>
  );
};
