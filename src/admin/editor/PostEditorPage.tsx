import React, { useState, useEffect, useRef } from 'react';
import { AdminLayout } from '../AdminLayout';
import { TiptapEditor } from './TiptapEditor';
import { cmsClient } from '../../cms/services/cmsClient';
import { PostEntity, CategoryEntity, TagEntity, PostContentBrief } from '../../cms/types';
import { useRouter, Link } from '../../components/layout/Router';
import {
  ArrowLeft, Save, Eye, CheckCircle2, Globe, Clock,
  Calendar, Image as ImageIcon, Tag as TagIcon, Search,
  AlertCircle, ExternalLink, HelpCircle, Loader2
} from 'lucide-react';
import { MediaPickerModal } from '../components/MediaPickerModal';

interface PostEditorPageProps {
  postId?: number;
}

export const PostEditorPage: React.FC<PostEditorPageProps> = ({ postId }) => {
  const { navigate } = useRouter();
  const [isLoading, setIsLoading] = useState(!!postId);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved');
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [allTags, setAllTags] = useState<TagEntity[]>([]);

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

  // SEO Fields
  const [focusKeyword, setFocusKeyword] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const [robotsIndex, setRobotsIndex] = useState(true);
  const [robotsFollow, setRobotsFollow] = useState(true);

  // Content Brief
  const [brief, setBrief] = useState<PostContentBrief>({
    primary_keyword: '',
    secondary_keywords: [],
    search_intent: '',
    target_customer: '',
    content_goal: '',
    outline: []
  });

  // Media Picker Modal
  const [isMediaPickerOpen, setIsMediaPickerOpen] = useState(false);
  const [isPickingForFeatured, setIsPickingForFeatured] = useState(true);

  // Autosave timer
  const autosaveTimerRef = useRef<any>(null);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    loadMetadata();
    if (postId) {
      loadPost(postId);
    } else {
      setIsLoading(false);
    }
  }, [postId]);

  // Warn on unsaved changes when closing tab
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
        setScheduledAt(p.scheduled_at || '');
        setPublishedAt(p.published_at || '');

        setFocusKeyword(p.focus_keyword || '');
        setSeoTitle(p.seo_title || p.title);
        setSeoDescription(p.seo_description || p.excerpt || '');
        setCanonicalUrl(p.canonical_url || `https://localmate.vn/kien-thuc/${p.slug}`);
        setRobotsIndex(p.robots_index === 1);
        setRobotsFollow(p.robots_follow === 1);

        if (p.content_json) {
          try {
            setContentJson(typeof p.content_json === 'string' ? JSON.parse(p.content_json) : p.content_json);
          } catch {
            setContentJson(null);
          }
        }
        setRenderedHtml(p.rendered_html || '');

        if (p.brief_json) {
          try {
            setBrief(typeof p.brief_json === 'string' ? JSON.parse(p.brief_json) : p.brief_json);
          } catch {
            // ignore
          }
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      setTimeout(() => { isInitialLoad.current = false; }, 500);
    }
  };

  const triggerAutosave = () => {
    if (isInitialLoad.current) return;
    setSaveStatus('unsaved');
    if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
    autosaveTimerRef.current = setTimeout(() => {
      savePost(false);
    }, 7000);
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!id && !slug) {
      // Auto-generate slug for new post
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
      brief_json: JSON.stringify(brief)
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
          // Replace URL without reload
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

  return (
    <AdminLayout activeKey="posts" title={id ? `Chỉnh sửa: ${title || 'Bài viết'}` : 'Viết Bài Mới'}>
      {isLoading ? (
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <Loader2 size={32} className="spin" color="#0d7647" style={{ margin: '0 auto 1rem auto' }} />
          <div>Đang tải nội dung bài viết...</div>
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
              padding: '0.85rem 1.25rem',
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
                {saveStatus === 'unsaved' && <span style={{ color: '#d97706', display: 'flex', alignItems: 'center', gap: 4 }}><AlertCircle size={13} /> Có thay đổi chưa lưu</span>}
              </div>
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
                    padding: '0.5rem 0.9rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#ffffff',
                    color: '#334155',
                    fontSize: '0.85rem',
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
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  fontSize: '0.85rem',
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
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: isSaving ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'published' ? 'Cập nhật xuất bản' : 'Xuất bản ngay'}
              </button>
            </div>
          </div>

          {/* Two Columns Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 360px', gap: '1.5rem', alignItems: 'start' }}>
            {/* Left Column: Title, Slug, Excerpt, Tiptap Editor */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Title Input */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.5rem' }}>
                <input
                  type="text"
                  placeholder="Nhập tiêu đề bài viết tại đây..."
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  style={{
                    width: '100%',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    border: 'none',
                    outline: 'none',
                    color: '#0f172a',
                    boxSizing: 'border-box'
                  }}
                />

                {/* Slug display & edit */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.75rem', fontSize: '0.825rem', color: '#64748b' }}>
                  <span>Liên kết tĩnh: https://localmate.vn/kien-thuc/</span>
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
                      minWidth: '180px'
                    }}
                  />
                </div>
              </div>

              {/* Excerpt Input */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Đoạn trích tóm tắt (Excerpt)
                </label>
                <textarea
                  rows={2}
                  placeholder="Đoạn văn ngắn 1-2 câu tóm lược nội dung cốt lõi của bài viết..."
                  value={excerpt}
                  onChange={(e) => { setExcerpt(e.target.value); triggerAutosave(); }}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Tiptap Block Editor */}
              <TiptapEditor
                initialContentJson={contentJson}
                onChange={handleEditorChange}
                onSelectImageRequest={() => {
                  setIsPickingForFeatured(false);
                  setIsMediaPickerOpen(true);
                }}
              />
            </div>

            {/* Right Column: Publish, Media, Taxonomy, SEO & Brief */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* 1. Status & Scheduling Panel */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0' }}>
                  Xuất bản & Lên lịch
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '0.3rem' }}>
                      Trạng thái bài viết
                    </label>
                    <select
                      value={status}
                      onChange={(e) => { setStatus(e.target.value as any); triggerAutosave(); }}
                      style={{
                        width: '100%',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.85rem',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <option value="draft">Bản nháp (Draft)</option>
                      <option value="review">Đang duyệt (Review)</option>
                      <option value="scheduled">Hẹn giờ đăng (Scheduled)</option>
                      <option value="published">Đã xuất bản (Published)</option>
                      <option value="archived">Lưu trữ (Archived)</option>
                    </select>
                  </div>

                  {status === 'scheduled' && (
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '0.3rem' }}>
                        Thời gian xuất bản (GMT+7 Asia/Ho_Chi_Minh)
                      </label>
                      <input
                        type="datetime-local"
                        value={scheduledAt}
                        onChange={(e) => { setScheduledAt(e.target.value); triggerAutosave(); }}
                        style={{
                          width: '100%',
                          padding: '0.5rem 0.75rem',
                          borderRadius: '6px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.85rem'
                        }}
                      />
                    </div>
                  )}

                  {publishedAt && (
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      Đã xuất bản vào: {publishedAt}
                    </div>
                  )}
                </div>
              </div>

              {/* 2. Featured Image Panel */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0' }}>
                  Ảnh đại diện (Featured Image)
                </h3>

                {featuredImageUrl ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <img
                      src={featuredImageUrl}
                      alt="Featured"
                      style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                    />
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        type="button"
                        onClick={() => { setIsPickingForFeatured(true); setIsMediaPickerOpen(true); }}
                        style={{
                          flex: 1,
                          padding: '0.4rem',
                          backgroundColor: '#f1f5f9',
                          border: '1px solid #cbd5e1',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        Đổi ảnh
                      </button>
                      <button
                        type="button"
                        onClick={() => { setFeaturedImageId(null); setFeaturedImageUrl(null); triggerAutosave(); }}
                        style={{
                          padding: '0.4rem 0.8rem',
                          backgroundColor: '#fee2e2',
                          border: 'none',
                          color: '#dc2626',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        Gỡ
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => { setIsPickingForFeatured(true); setIsMediaPickerOpen(true); }}
                    style={{
                      width: '100%',
                      padding: '2rem 1rem',
                      border: '2px dashed #cbd5e1',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      color: '#475569',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <ImageIcon size={28} color="#94a3b8" />
                    <span>Chọn ảnh từ Thư viện Media</span>
                  </button>
                )}
              </div>

              {/* 3. Taxonomy (Category) */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0' }}>
                  Chuyên mục chính
                </h3>
                <select
                  value={categoryId}
                  onChange={(e) => { setCategoryId(parseInt(e.target.value, 10)); triggerAutosave(); }}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.85rem',
                    backgroundColor: '#ffffff'
                  }}
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              {/* 4. SEO & Google SERP Preview Panel */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0' }}>
                  Tối ưu SEO (Search Engine)
                </h3>

                {/* Google SERP Preview Box */}
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.85rem 1rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Google SERP Preview (Xem trước hiển thị)
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#1e293b' }}>
                    https://localmate.vn › kien-thuc › {slug || 'duong-dan-bai-viet'}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#1a0dab', textDecoration: 'none', margin: '0.2rem 0' }}>
                    {seoTitle || title || 'Tiêu đề bài viết xuất hiện tại đây | LocalMate'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#4d5156', lineHeight: 1.4 }}>
                    {seoDescription || excerpt || 'Mô tả tóm tắt nội dung bài viết hiển thị trên trang kết quả tìm kiếm của Google...'}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '0.2rem' }}>
                      Từ khóa chính (Focus Keyword)
                    </label>
                    <input
                      type="text"
                      placeholder="ví dụ: làm website doanh nghiệp nhỏ"
                      value={focusKeyword}
                      onChange={(e) => { setFocusKeyword(e.target.value); triggerAutosave(); }}
                      style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '0.2rem' }}>
                      <span>SEO Title</span>
                      <span style={{ color: seoTitle.length >= 50 && seoTitle.length <= 65 ? '#15803d' : '#94a3b8' }}>{seoTitle.length}/60</span>
                    </div>
                    <input
                      type="text"
                      value={seoTitle}
                      onChange={(e) => { setSeoTitle(e.target.value); triggerAutosave(); }}
                      style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '0.2rem' }}>
                      <span>Meta Description</span>
                      <span style={{ color: seoDescription.length >= 130 && seoDescription.length <= 165 ? '#15803d' : '#94a3b8' }}>{seoDescription.length}/160</span>
                    </div>
                    <textarea
                      rows={3}
                      value={seoDescription}
                      onChange={(e) => { setSeoDescription(e.target.value); triggerAutosave(); }}
                      style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box', fontFamily: 'inherit' }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#334155' }}>
                      <input
                        type="checkbox"
                        checked={robotsIndex}
                        onChange={(e) => { setRobotsIndex(e.target.checked); triggerAutosave(); }}
                      />
                      Index (Cho phép tìm kiếm)
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#334155' }}>
                      <input
                        type="checkbox"
                        checked={robotsFollow}
                        onChange={(e) => { setRobotsFollow(e.target.checked); triggerAutosave(); }}
                      />
                      Follow (Theo liên kết)
                    </label>
                  </div>
                </div>
              </div>

              {/* 5. Content Brief (Internal Metadata) */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
                  Content Brief (Nội bộ)
                </h3>
                <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0 0 1rem 0' }}>
                  Thông tin phục vụ content workflow & AI automation trong tương lai. Không hiển thị public.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.775rem', fontWeight: 600, color: '#475569', marginBottom: '0.2rem' }}>
                      Search Intent
                    </label>
                    <input
                      type="text"
                      placeholder="ví dụ: TOFU - Hướng dẫn nhập môn"
                      value={brief.search_intent}
                      onChange={(e) => { setBrief({ ...brief, search_intent: e.target.value }); triggerAutosave(); }}
                      style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.775rem', fontWeight: 600, color: '#475569', marginBottom: '0.2rem' }}>
                      Đối tượng khách hàng mục tiêu
                    </label>
                    <input
                      type="text"
                      placeholder="ví dụ: Chủ tiệm dịch vụ địa phương"
                      value={brief.target_customer}
                      onChange={(e) => { setBrief({ ...brief, target_customer: e.target.value }); triggerAutosave(); }}
                      style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem', boxSizing: 'border-box' }}
                    />
                  </div>
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
