import React, { useState, useEffect, useRef } from 'react';
import { AdminLayout } from '../AdminLayout';
import { TiptapEditor } from './TiptapEditor';
import { cmsClient } from '../../cms/services/cmsClient';
import { PostEntity, CategoryEntity, TagEntity, PostContentBrief } from '../../cms/types';
import { useRouter, Link } from '../../components/layout/Router';
import {
  ArrowLeft, Save, Eye, CheckCircle2, Globe, Clock,
  Calendar, Image as ImageIcon, Tag as TagIcon, Search,
  AlertCircle, ExternalLink, HelpCircle, Loader2,
  FileText, Sparkles, Link2, ShieldCheck, History,
  AlertTriangle, Check, BookOpen, Layers, Target,
  Compass, Lightbulb, ChevronDown, ChevronRight
} from 'lucide-react';
import { MediaPickerModal } from '../components/MediaPickerModal';

interface PostEditorPageProps {
  postId?: number;
}

type EditorTab = 'content' | 'seo' | 'geo' | 'internal_links' | 'evidence' | 'revisions';

export const PostEditorPage: React.FC<PostEditorPageProps> = ({ postId }) => {
  const { navigate } = useRouter();
  const [isLoading, setIsLoading] = useState(!!postId);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved');
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [allTags, setAllTags] = useState<TagEntity[]>([]);
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

  // Content Brief (Extended)
  const [brief, setBrief] = useState<PostContentBrief & {
    primary_question?: string;
    unique_angle?: string;
    key_takeaway?: string;
    pillar_id?: number;
    related_service?: string;
    quality_status?: string;
    seo_status?: string;
    evidence_type?: string;
    author?: string;
    reviewed_by?: string;
  }>({
    primary_keyword: '',
    secondary_keywords: [],
    search_intent: '',
    target_customer: '',
    content_goal: '',
    outline: [],
    primary_question: '',
    unique_angle: '',
    key_takeaway: '',
    pillar_id: 1,
    related_service: '/giai-phap/nen-tang-so',
    quality_status: 'pass',
    seo_status: 'optimized',
    evidence_type: 'Field Observation',
    author: 'Kỹ thuật viên LocalMate',
    reviewed_by: 'Ban Biên Tập Kỹ Thuật LocalMate'
  });

  // Media Picker Modal
  const [isMediaPickerOpen, setIsMediaPickerOpen] = useState(false);
  const [isPickingForFeatured, setIsPickingForFeatured] = useState(true);

  // Sidebar Panels Collapsible
  const [isBriefPanelOpen, setIsBriefPanelOpen] = useState(true);
  const [isQualityPanelOpen, setIsQualityPanelOpen] = useState(true);

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
    const [catRes, tagRes] = await Promise.all([
      cmsClient.getCategories(),
      cmsClient.getTags()
    ]);
    if (catRes.success && catRes.data) setCategories(catRes.data);
    if (tagRes.success && tagRes.data) setAllTags(tagRes.data);
  };

  const loadPost = async (pId: number) => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getPostById(pId);
      if (res.success && res.data) {
        const p = res.data;
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

        if (p.rendered_html) {
          setRenderedHtml(p.rendered_html);
        }

        if (p.content_json) {
          try {
            setContentJson(JSON.parse(p.content_json));
          } catch (e) {
            setContentJson(null);
          }
        }

        if (p.brief_json) {
          try {
            const parsedBrief = JSON.parse(p.brief_json);
            setBrief(prev => ({ ...prev, ...parsedBrief }));
          } catch (e) {
            console.error(e);
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
    }, 7000);
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
    triggerAutosave();
  };

  const handleEditorChange = ({ json, html }: { json: any; html: string }) => {
    setContentJson(json);
    setRenderedHtml(html);
    // Simple word count
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

    const payload: Partial<PostEntity> = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      content_json: JSON.stringify(contentJson || { type: 'doc', content: [] }),
      rendered_html: renderedHtml,
      status: finalStatus,
      category_id: categoryId,
      featured_image_id: featuredImageId,
      scheduled_at: finalStatus === 'scheduled' ? scheduledAt : null,
      seo_title: seoTitle || title,
      seo_description: seoDescription || excerpt,
      focus_keyword: focusKeyword,
      canonical_url: canonicalUrl || `https://localmate.vn/kien-thuc/${slug}`,
      robots_index: robotsIndex ? 1 : 0,
      robots_follow: robotsFollow ? 1 : 0,
      brief_json: JSON.stringify(brief),
      word_count: wordCount
    };

    try {
      if (id) {
        const res = await cmsClient.updatePost(id, payload);
        if (res.success) {
          if (res.data?.slug) setSlug(res.data.slug);
          setSaveStatus('saved');
          if (targetStatus) setStatus(targetStatus);
        }
      } else {
        const res = await cmsClient.createPost(payload);
        if (res.success && res.data) {
          setId(res.data.id);
          setUuid(res.data.uuid);
          setSlug(res.data.slug);
          setSaveStatus('saved');
          if (targetStatus) setStatus(targetStatus);
          window.history.replaceState({}, '', `/admin/posts/${res.data.id}/edit`);
        }
      }
    } catch (err) {
      console.error(err);
      setSaveStatus('unsaved');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSelectMedia = (media: any) => {
    if (isPickingForFeatured) {
      setFeaturedImageId(media.id);
      setFeaturedImageUrl(media.url);
      triggerAutosave();
    }
    setIsMediaPickerOpen(false);
  };

  // Real-time Quality Checker Logic
  const fullText = (title + ' ' + excerpt + ' ' + (renderedHtml || '')).toLowerCase();
  
  // 1. Generic / AI Clichés check
  const genericClichés = [
    'trong thời đại số', 'không thể phủ nhận', 'đóng vai trò vô cùng quan trọng',
    'chiếm lĩnh', 'vũ khí bí mật', 'thần tốc', 'cắt cổ', 'bắt cóc làm con tin',
    'hãy cùng tìm hiểu', 'bài viết này sẽ'
  ];
  const detectedClichés = genericClichés.filter(c => fullText.includes(c));

  // 2. Unsupported statistics check (regex for % without clear source)
  const percentMatches = renderedHtml.match(/\d+%/g) || [];
  const hasUnsupportedStats = percentMatches.length > 3 && !fullText.includes('google') && !fullText.includes('kinh nghiệm');

  // 3. Missing example check
  const exampleKeywords = ['ví dụ', 'xưởng', 'tiệm', 'gara', 'phòng khám', 'quận', 'anh tuấn', 'chị lan'];
  const hasExample = exampleKeywords.some(k => fullText.includes(k));

  // 4. Missing actionable component check
  const hasActionableTable = (renderedHtml || '').includes('<table');
  const hasActionableList = (renderedHtml || '').includes('<ul') || (renderedHtml || '').includes('<ol');
  const hasActionable = hasActionableTable || hasActionableList;

  // 5. Answer-first check (H2 early or blockquote in beginning)
  const hasAnswerFirst = (renderedHtml || '').slice(0, 800).includes('<blockquote>') || (renderedHtml || '').slice(0, 600).includes('trả lời nhanh');

  // 6. Internal links count
  const internalLinks = (renderedHtml || '').match(/href=["'](\/kien-thuc\/|\/giai-phap\/)/g) || [];
  const internalLinkCount = internalLinks.length;

  const isQualityPass = detectedClichés.length === 0 && hasExample && hasActionable && wordCount > 400;

  return (
    <AdminLayout activeKey="posts" title={id ? `Chỉnh sửa: ${title || 'Bài viết'}` : 'Viết Bài Mới'}>
      {isLoading ? (
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <Loader2 size={32} className="spin" color="#0d7647" style={{ margin: '0 auto 1rem auto' }} />
          <div>Đang tải dữ liệu bài viết...</div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Top Sticky Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#ffffff',
              padding: '0.75rem 1.25rem',
              borderRadius: '10px',
              border: '1px solid #e2e8f0',
              position: 'sticky',
              top: 60,
              zIndex: 25
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

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}>
                {saveStatus === 'saving' && <span style={{ color: '#0369a1', display: 'flex', alignItems: 'center', gap: 4 }}><Loader2 size={13} className="spin" /> Đang lưu...</span>}
                {saveStatus === 'saved' && <span style={{ color: '#15803d', display: 'flex', alignItems: 'center', gap: 4 }}><CheckCircle2 size={13} /> Đã lưu</span>}
                {saveStatus === 'unsaved' && <span style={{ color: '#d97706', display: 'flex', alignItems: 'center', gap: 4 }}><AlertCircle size={13} /> Thay đổi chưa lưu</span>}
              </div>

              {/* Quality Badge Indicator */}
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.75rem',
                padding: '0.2rem 0.55rem',
                borderRadius: '6px',
                fontWeight: 700,
                backgroundColor: isQualityPass ? '#dcfce7' : '#fef3c7',
                color: isQualityPass ? '#15803d' : '#92400e'
              }}>
                <ShieldCheck size={13} />
                {isQualityPass ? 'Quality Gate: PASS' : 'Quality: Cần sửa lỗi'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              {/* Preview Button */}
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
                  padding: '0.5rem 0.85rem',
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

              {/* Publish Button */}
              <button
                type="button"
                onClick={() => savePost(true, 'published')}
                disabled={isSaving}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1.1rem',
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

          {/* Editor Tabs Navigation */}
          <div style={{
            display: 'flex',
            gap: '0.4rem',
            borderBottom: '2px solid #e2e8f0',
            backgroundColor: '#ffffff',
            padding: '0.25rem 0.5rem 0 0.5rem',
            borderRadius: '8px 8px 0 0'
          }}>
            <button
              type="button"
              onClick={() => setActiveTab('content')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1rem',
                border: 'none',
                borderBottom: activeTab === 'content' ? '2px solid #0d7647' : '2px solid transparent',
                backgroundColor: 'transparent',
                color: activeTab === 'content' ? '#0d7647' : '#64748b',
                fontWeight: activeTab === 'content' ? 700 : 500,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              <FileText size={16} /> 1. Nội dung (Content)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('seo')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1rem',
                border: 'none',
                borderBottom: activeTab === 'seo' ? '2px solid #0d7647' : '2px solid transparent',
                backgroundColor: 'transparent',
                color: activeTab === 'seo' ? '#0d7647' : '#64748b',
                fontWeight: activeTab === 'seo' ? 700 : 500,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              <Globe size={16} /> 2. SEO On-Page
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('geo')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1rem',
                border: 'none',
                borderBottom: activeTab === 'geo' ? '2px solid #0d7647' : '2px solid transparent',
                backgroundColor: 'transparent',
                color: activeTab === 'geo' ? '#0d7647' : '#64748b',
                fontWeight: activeTab === 'geo' ? 700 : 500,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              <Sparkles size={16} /> 3. GEO & AI Visibility
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('internal_links')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1rem',
                border: 'none',
                borderBottom: activeTab === 'internal_links' ? '2px solid #0d7647' : '2px solid transparent',
                backgroundColor: 'transparent',
                color: activeTab === 'internal_links' ? '#0d7647' : '#64748b',
                fontWeight: activeTab === 'internal_links' ? 700 : 500,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              <Link2 size={16} /> 4. Internal Links ({internalLinkCount})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('evidence')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1rem',
                border: 'none',
                borderBottom: activeTab === 'evidence' ? '2px solid #0d7647' : '2px solid transparent',
                backgroundColor: 'transparent',
                color: activeTab === 'evidence' ? '#0d7647' : '#64748b',
                fontWeight: activeTab === 'evidence' ? 700 : 500,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              <ShieldCheck size={16} /> 5. Evidence & Citations
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('revisions')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1rem',
                border: 'none',
                borderBottom: activeTab === 'revisions' ? '2px solid #0d7647' : '2px solid transparent',
                backgroundColor: 'transparent',
                color: activeTab === 'revisions' ? '#0d7647' : '#64748b',
                fontWeight: activeTab === 'revisions' ? 700 : 500,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              <History size={16} /> 6. Lịch sử phiên bản (v{revisionNumber})
            </button>
          </div>

          {/* Main Grid: Left Tab Content vs Right Sidebars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 380px', gap: '1.5rem', alignItems: 'start' }}>
            {/* Left Content Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* TAB 1: CONTENT */}
              {activeTab === 'content' && (
                <>
                  {/* Title & Slug */}
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
                          padding: '0.2rem 0.5rem',
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
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Đoạn tóm lược nhanh (Excerpt / Quick Answer)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Đoạn văn ngắn 1-2 câu tóm tắt câu trả lời cho người đọc trong 5 giây đầu..."
                      value={excerpt}
                      onChange={(e) => { setExcerpt(e.target.value); triggerAutosave(); }}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.875rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Tiptap Editor */}
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
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Cấu Hình SEO On-Page Chuẩn Tìm Kiếm
                  </h3>

                  {/* SERP Preview Box */}
                  <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Google SERP Snippet Preview
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#1e293b' }}>
                      https://localmate.vn › kien-thuc › {slug || 'duong-dan-bai-viet'}
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1a0dab', textDecoration: 'none', margin: '0.2rem 0' }}>
                      {seoTitle || title || 'Tiêu đề bài viết xuất hiện tại đây | LocalMate'}
                    </div>
                    <div style={{ fontSize: '0.825rem', color: '#4d5156', lineHeight: 1.4 }}>
                      {seoDescription || excerpt || 'Mô tả tóm tắt nội dung bài viết hiển thị trên trang kết quả tìm kiếm của Google...'}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                        Từ khóa mục tiêu (Focus Keyword)
                      </label>
                      <input
                        type="text"
                        value={focusKeyword}
                        onChange={(e) => { setFocusKeyword(e.target.value); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                      />
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                        <span>SEO Title (50 - 60 ký tự)</span>
                        <span style={{ color: seoTitle.length >= 50 && seoTitle.length <= 65 ? '#15803d' : '#94a3b8' }}>{seoTitle.length}/60</span>
                      </div>
                      <input
                        type="text"
                        value={seoTitle}
                        onChange={(e) => { setSeoTitle(e.target.value); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                      />
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                        <span>Meta Description (140 - 160 ký tự)</span>
                        <span style={{ color: seoDescription.length >= 130 && seoDescription.length <= 165 ? '#15803d' : '#94a3b8' }}>{seoDescription.length}/160</span>
                      </div>
                      <textarea
                        rows={3}
                        value={seoDescription}
                        onChange={(e) => { setSeoDescription(e.target.value); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontFamily: 'inherit' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                        Canonical URL
                      </label>
                      <input
                        type="text"
                        value={canonicalUrl || `https://localmate.vn/kien-thuc/${slug}`}
                        onChange={(e) => { setCanonicalUrl(e.target.value); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: GEO & AI VISIBILITY */}
              {activeTab === 'geo' && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Tối Ưu Hiển Thị Cho Mô Hình Ngôn Ngữ Lớn (GEO & LLM Visibility)
                    </h3>
                    <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', backgroundColor: '#ecfdf5', color: '#047857', fontWeight: 700 }}>
                      Google AI Overviews Ready
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0 }}>
                    Đảm bảo nội dung có các đoạn định nghĩa trực diện (Answer-first), bảng so sánh có cấu trúc và dẫn nguồn minh bạch để ChatGPT Search, Perplexity và Google AI trích dẫn làm nguồn uy tín.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', backgroundColor: '#f8fafc' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Check size={14} color="#15803d" /> Answer-First Snippet (40-60 từ)
                      </div>
                      <p style={{ fontSize: '0.78rem', color: '#475569', margin: 0 }}>
                        {hasAnswerFirst ? 'Đã phát hiện đoạn trả lời trực diện ở phần đầu bài viết.' : 'Chưa có khối Answer-First rõ ràng ở 100-180 từ đầu.'}
                      </p>
                    </div>

                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', backgroundColor: '#f8fafc' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Check size={14} color="#15803d" /> Bảng Biểu So Sánh Có Cấu Trúc
                      </div>
                      <p style={{ fontSize: '0.78rem', color: '#475569', margin: 0 }}>
                        {hasActionableTable ? 'Đã có bảng biểu đối chiếu số liệu có cấu trúc HTML chuẩn.' : 'Nên bổ sung 01 bảng so sánh để LLM dễ trích xuất dữ liệu.'}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                      Định nghĩa thực thể chính (Entity Scope Claim)
                    </label>
                    <textarea
                      rows={2}
                      value={brief.unique_angle || ''}
                      onChange={(e) => { setBrief({ ...brief, unique_angle: e.target.value }); triggerAutosave(); }}
                      placeholder="Tuyên ngôn phạm vi: Áp dụng cho đối tượng nào, không áp dụng cho ai..."
                      style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontFamily: 'inherit' }}
                    />
                  </div>
                </div>
              )}

              {/* TAB 4: INTERNAL LINKS */}
              {activeTab === 'internal_links' && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Mạng Lưới Liên Kết Nội Bộ (Internal Link Graph)
                  </h3>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                        1. Liên kết Dọc (Pillar Link)
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#475569' }}>
                        Bài viết này trỏ về Pillar: <strong>ID #{brief.pillar_id || 1}</strong>
                      </div>
                    </div>

                    <div style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                        2. Dịch vụ mục tiêu (Contextual Service)
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#0d7647', fontWeight: 600 }}>
                        {brief.related_service || '/giai-phap/nen-tang-so'}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                      Đường dẫn dịch vụ liên quan (Contextual CTA Link)
                    </label>
                    <input
                      type="text"
                      value={brief.related_service || ''}
                      onChange={(e) => { setBrief({ ...brief, related_service: e.target.value }); triggerAutosave(); }}
                      style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                    />
                  </div>
                </div>
              )}

              {/* TAB 5: EVIDENCE & CITATIONS */}
              {activeTab === 'evidence' && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Thẩm Định Nguồn & Bằng Chứng (Evidence Policy)
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ padding: '0.85rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>
                        Phân loại bằng chứng chính:
                      </div>
                      <div style={{ fontSize: '0.825rem', color: '#334155' }}>
                        {brief.evidence_type || 'Quan sát thực nghiệm tại hiện trường (Local Practical Observation)'}
                      </div>
                    </div>

                    <div style={{ padding: '0.85rem', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '6px' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#065f46', marginBottom: '0.25rem' }}>
                        Trách nhiệm biên tập & Thẩm định thực tế:
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#047857' }}>
                        Tác giả: {brief.author || 'Kỹ thuật viên LocalMate'} | Người duyệt: {brief.reviewed_by || 'Ban Biên Tập Kỹ Thuật LocalMate'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 6: REVISIONS */}
              {activeTab === 'revisions' && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0' }}>
                    Lịch Sử Phiên Bản & Thay Đổi
                  </h3>
                  <div style={{ borderLeft: '2px solid #0d7647', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>
                      Phiên bản hiện tại: v{revisionNumber}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      Được cập nhật tự động khi lưu bản nháp hoặc xuất bản. Dữ liệu đã được nạp hạt nhân vào hệ thống.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Panels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* 1. Status & Media Panel */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0' }}>
                  Xuất bản & Chuyên mục
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '0.3rem' }}>
                      Trạng thái
                    </label>
                    <select
                      value={status}
                      onChange={(e) => { setStatus(e.target.value as any); triggerAutosave(); }}
                      style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem' }}
                    >
                      <option value="draft">Bản nháp (Draft)</option>
                      <option value="review">Đang duyệt (Review)</option>
                      <option value="scheduled">Hẹn giờ đăng (Scheduled)</option>
                      <option value="published">Đã xuất bản (Published)</option>
                      <option value="archived">Lưu trữ (Archived)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '0.3rem' }}>
                      Chuyên mục chính
                    </label>
                    <select
                      value={categoryId}
                      onChange={(e) => { setCategoryId(parseInt(e.target.value, 10)); triggerAutosave(); }}
                      style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem' }}
                    >
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* 2. Content Brief Panel (Collapsible) */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                <button
                  type="button"
                  onClick={() => setIsBriefPanelOpen(!isBriefPanelOpen)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    backgroundColor: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Compass size={15} color="#0d7647" /> Content Brief Panel
                  </span>
                  {isBriefPanelOpen ? <ChevronDown size={16} color="#64748b" /> : <ChevronRight size={16} color="#64748b" />}
                </button>

                {isBriefPanelOpen && (
                  <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid #f1f5f9' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '0.2rem' }}>
                        Câu hỏi cốt lõi (Primary Question)
                      </label>
                      <input
                        type="text"
                        value={brief.primary_question || ''}
                        onChange={(e) => { setBrief({ ...brief, primary_question: e.target.value }); triggerAutosave(); }}
                        placeholder="Người đọc đang thắc mắc điều gì?"
                        style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.8rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '0.2rem' }}>
                        Độc giả mục tiêu (Target Persona)
                      </label>
                      <input
                        type="text"
                        value={brief.target_customer || ''}
                        onChange={(e) => { setBrief({ ...brief, target_customer: e.target.value }); triggerAutosave(); }}
                        placeholder="ví dụ: Chủ tiệm dịch vụ địa phương..."
                        style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.8rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '0.2rem' }}>
                        Search Intent
                      </label>
                      <input
                        type="text"
                        value={brief.search_intent || ''}
                        onChange={(e) => { setBrief({ ...brief, search_intent: e.target.value }); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.8rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '0.2rem' }}>
                        Góc nhìn riêng (LocalMate POV)
                      </label>
                      <textarea
                        rows={2}
                        value={brief.unique_angle || ''}
                        onChange={(e) => { setBrief({ ...brief, unique_angle: e.target.value }); triggerAutosave(); }}
                        style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.8rem', fontFamily: 'inherit' }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Quality Gate & Anti-AI Slop Panel (Collapsible) */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                <button
                  type="button"
                  onClick={() => setIsQualityPanelOpen(!isQualityPanelOpen)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    backgroundColor: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={15} color={isQualityPass ? '#15803d' : '#d97706'} /> Quality Gate & Anti-AI Slop
                  </span>
                  {isQualityPanelOpen ? <ChevronDown size={16} color="#64748b" /> : <ChevronRight size={16} color="#64748b" />}
                </button>

                {isQualityPanelOpen && (
                  <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid #f1f5f9', fontSize: '0.8rem' }}>
                    {/* Clichés check */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: detectedClichés.length === 0 ? '#15803d' : '#dc2626' }}>
                      <span>AI Clichés / Từ sáo rỗng:</span>
                      <span style={{ fontWeight: 700 }}>{detectedClichés.length === 0 ? '0 vi phạm' : `${detectedClichés.length} lỗi`}</span>
                    </div>

                    {/* Example check */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: hasExample ? '#15803d' : '#d97706' }}>
                      <span>Ví dụ xưởng/tiệm thực tế:</span>
                      <span style={{ fontWeight: 700 }}>{hasExample ? 'Đã có' : 'Chưa có'}</span>
                    </div>

                    {/* Actionable component check */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: hasActionable ? '#15803d' : '#d97706' }}>
                      <span>Bảng đối soát / Checklist:</span>
                      <span style={{ fontWeight: 700 }}>{hasActionable ? 'Đã có' : 'Thiếu'}</span>
                    </div>

                    {/* Word count status */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: wordCount >= 500 ? '#15803d' : '#d97706' }}>
                      <span>Dung lượng từ thực tế:</span>
                      <span style={{ fontWeight: 700 }}>{wordCount} từ</span>
                    </div>

                    {/* Internal link check */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: internalLinkCount >= 2 ? '#15803d' : '#d97706' }}>
                      <span>Liên kết nội bộ (Links):</span>
                      <span style={{ fontWeight: 700 }}>{internalLinkCount} liên kết</span>
                    </div>
                  </div>
                )}
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
