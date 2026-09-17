import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { PostEntity, CategoryEntity } from '../../cms/types';
import { Link, useRouter } from '../../components/layout/Router';
import {
  Search, Filter, PlusCircle, Edit, Eye, Copy, Trash2,
  CheckCircle2, Clock, Calendar, AlertTriangle, Loader2, ArrowUpDown,
  BookOpen, Link2, ShieldCheck, Sparkles, AlertCircle
} from 'lucide-react';

export const PostsListPage: React.FC = () => {
  const { navigate } = useRouter();
  const [posts, setPosts] = useState<PostEntity[]>([]);
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Filters & Pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [intentFilter, setIntentFilter] = useState('all');
  const [qualityFilter, setQualityFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  // Bulk action state
  const [bulkAction, setBulkAction] = useState('');
  const [isActing, setIsActing] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadPosts();
  }, [searchQuery, statusFilter, categoryFilter, currentPage]);

  const loadCategories = async () => {
    const res = await cmsClient.getCategories();
    if (res.success && res.data) {
      setCategories(res.data);
    }
  };

  const loadPosts = async () => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getPosts({
        q: searchQuery,
        status: statusFilter,
        category_id: categoryFilter,
        page: currentPage,
        limit: 30
      });
      if (res.success && res.data) {
        setPosts(res.data.posts);
        setTotalPages(res.data.pagination.totalPages || 1);
        setTotalPosts(res.data.pagination.total || 0);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(posts.map((p) => p.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleToggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleBulkApply = async () => {
    if (!bulkAction || selectedIds.length === 0) return;
    if (bulkAction === 'delete' && !window.confirm(`Bạn có chắc chắn muốn xóa ${selectedIds.length} bài viết đã chọn?`)) {
      return;
    }

    setIsActing(true);
    try {
      await cmsClient.bulkPostAction(selectedIds, bulkAction as any);
      setSelectedIds([]);
      setBulkAction('');
      loadPosts();
    } catch (err) {
      console.error(err);
    } finally {
      setIsActing(false);
    }
  };

  const handleDeletePost = async (id: number, title: string) => {
    if (!window.confirm(`Bạn có chắc chắn muốn xóa bài viết "${title}"?`)) return;
    try {
      await cmsClient.deletePost(id);
      loadPosts();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDuplicatePost = async (id: number) => {
    try {
      const res = await cmsClient.duplicatePost(id);
      if (res.success && res.data) {
        navigate(`/admin/posts/${res.data.id}/edit`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <span style={{ padding: '0.2rem 0.55rem', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#dcfce7', color: '#15803d' }}>Xuất bản</span>;
      case 'draft':
        return <span style={{ padding: '0.2rem 0.55rem', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#f1f5f9', color: '#475569' }}>Bản nháp</span>;
      case 'scheduled':
        return <span style={{ padding: '0.2rem 0.55rem', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#e0f2fe', color: '#0369a1' }}>Đã hẹn giờ</span>;
      case 'archived':
        return <span style={{ padding: '0.2rem 0.55rem', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#fef3c7', color: '#b45309' }}>Lưu trữ</span>;
      default:
        return <span style={{ padding: '0.2rem 0.55rem', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#f1f5f9', color: '#475569' }}>{status}</span>;
    }
  };

  const parseBrief = (briefJson?: string) => {
    if (!briefJson) return {};
    try {
      return JSON.parse(briefJson);
    } catch (e) {
      return {};
    }
  };

  const countInternalLinks = (html?: string) => {
    if (!html) return 0;
    const matches = html.match(/href=["'](\/kien-thuc\/|\/giai-phap\/|\/dich-vu\/)/g);
    return matches ? matches.length : 0;
  };

  // Rule-Derived Health Engine: Không dùng điểm ảo, tính trực tiếp từ quy tắc thực tế
  const evaluatePostHealth = (post: PostEntity) => {
    const html = post.rendered_html || '';
    const seoTitle = post.seo_title || '';
    const desc = post.seo_description || '';
    const wordCount = post.word_count || 0;
    
    // 1. SEO Health
    const seoFails: string[] = [];
    if (!seoTitle) seoFails.push('Chưa có SEO Title');
    else if (seoTitle.length > 70) seoFails.push(`Title quá dài (${seoTitle.length} ký tự, cắt SERP)`);
    if (!desc) seoFails.push('Chưa có Meta Description');
    else if (desc.length < 85 || desc.length > 170) seoFails.push(`Mô tả chưa chuẩn (${desc.length} ký tự)`);
    if (!post.focus_keyword) seoFails.push('Chưa có Focus Keyword');
    if (wordCount < 500) seoFails.push(`Nội dung mỏng (${wordCount} từ < 500 từ)`);

    // 2. GEO Health (AI Citation)
    const geoFails: string[] = [];
    const hasAnswerBlock = html.includes('blockquote') || html.includes('Trả lời nhanh') || html.includes('Answer First');
    if (!hasAnswerBlock) geoFails.push('Thiếu Answer-First block');
    if (!html.includes('<h2')) geoFails.push('Thiếu thẻ Heading H2');
    if (!html.includes('<table')) geoFails.push('Thiếu Bảng đối chiếu / Decision Table');
    if (wordCount < 600) geoFails.push('Độ sâu chưa đủ cho RAG vector');

    // 3. Evidence Health
    const evidenceFails: string[] = [];
    const hasOutbound = html.includes('href="http') || html.includes('google.com') || html.includes('vnnic');
    if (!hasOutbound) evidenceFails.push('0 External Citation chính thống');
    if (html.includes('Penguin') || html.includes('giảm 40% chi phí') || html.includes('60% trọng số')) {
      evidenceFails.push('Chứa khẳng định thuật toán/số liệu ước lệ');
    }

    // 4. Link Health
    const links = countInternalLinks(html);
    const linkFails: string[] = [];
    if (links === 0) linkFails.push('Bài viết mồ côi (0 internal links)');
    else if (links < 2) linkFails.push('Ít liên kết nội bộ (< 2 links)');

    return {
      seo: { pass: seoFails.length === 0, reasons: seoFails },
      geo: { pass: geoFails.length === 0, reasons: geoFails },
      evidence: { pass: evidenceFails.length === 0, reasons: evidenceFails },
      links: { pass: linkFails.length === 0, reasons: linkFails, count: links }
    };
  };

  // Filter posts locally by intent & quality if set
  const displayedPosts = posts.filter(post => {
    const brief = parseBrief(post.brief_json);
    if (intentFilter !== 'all') {
      const intentStr = (brief.search_intent || '').toLowerCase();
      if (!intentStr.includes(intentFilter.toLowerCase())) return false;
    }
    if (qualityFilter !== 'all') {
      const qStatus = brief.quality_status || 'review_required';
      if (qStatus !== qualityFilter) return false;
    }
    return true;
  });

  return (
    <AdminLayout activeKey="posts" title="Danh Sách Bài Viết (Editorial Dashboard)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Top Control Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
              Kho Nội Dung ({displayedPosts.length} / {totalPosts})
            </span>
            <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#065f46', fontWeight: 600 }}>
              Anti-AI Slop Ready
            </span>
          </div>

          <Link
            to="/admin/posts/new"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.55rem 1rem',
              backgroundColor: '#0d7647',
              color: '#ffffff',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.85rem',
              textDecoration: 'none'
            }}
          >
            <PlusCircle size={16} />
            Viết bài mới
          </Link>
        </div>

        {/* Filters & Search Toolbar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          padding: '0.85rem 1rem',
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem' }}>
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
              style={{
                padding: '0.45rem 0.75rem',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                fontSize: '0.825rem',
                backgroundColor: '#ffffff',
                outline: 'none'
              }}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="draft">Bản nháp</option>
              <option value="published">Đã xuất bản</option>
              <option value="scheduled">Đã hẹn giờ</option>
              <option value="archived">Lưu trữ</option>
            </select>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}
              style={{
                padding: '0.45rem 0.75rem',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                fontSize: '0.825rem',
                backgroundColor: '#ffffff',
                outline: 'none'
              }}
            >
              <option value="all">Tất cả chuyên mục</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>

            {/* Search Intent Filter */}
            <select
              value={intentFilter}
              onChange={(e) => setIntentFilter(e.target.value)}
              style={{
                padding: '0.45rem 0.75rem',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                fontSize: '0.825rem',
                backgroundColor: '#ffffff',
                outline: 'none'
              }}
            >
              <option value="all">Tất cả Search Intent</option>
              <option value="tofu">TOFU (Nhận thức)</option>
              <option value="mofu">MOFU (Tìm hiểu / So sánh)</option>
              <option value="bofu">BOFU (Quyết định / Giá)</option>
              <option value="pillar">Pillar Cornerstone</option>
            </select>

            {/* Quality Status Filter */}
            <select
              value={qualityFilter}
              onChange={(e) => setQualityFilter(e.target.value)}
              style={{
                padding: '0.45rem 0.75rem',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                fontSize: '0.825rem',
                backgroundColor: '#ffffff',
                outline: 'none'
              }}
            >
              <option value="all">Tất cả Quality Gate</option>
              <option value="pass">PASS (Đạt chuẩn)</option>
              <option value="review_required">Cần thẩm định</option>
            </select>

            {/* Bulk Action */}
            {selectedIds.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginLeft: '0.5rem' }}>
                <select
                  value={bulkAction}
                  onChange={(e) => setBulkAction(e.target.value)}
                  style={{
                    padding: '0.45rem 0.75rem',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    fontSize: '0.825rem',
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                >
                  <option value="">Thao tác ({selectedIds.length})</option>
                  <option value="publish">Xuất bản</option>
                  <option value="draft">Chuyển về nháp</option>
                  <option value="archive">Lưu trữ</option>
                  <option value="delete">Xóa vĩnh viễn</option>
                </select>
                <button
                  onClick={handleBulkApply}
                  disabled={!bulkAction || isActing}
                  style={{
                    padding: '0.45rem 0.75rem',
                    backgroundColor: '#0d7647',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    cursor: bulkAction ? 'pointer' : 'not-allowed'
                  }}
                >
                  Áp dụng
                </button>
              </div>
            )}
          </div>

          {/* Right: Search Input */}
          <div style={{ position: 'relative', width: '260px' }}>
            <Search size={15} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Tìm theo tiêu đề, slug..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              style={{
                width: '100%',
                padding: '0.45rem 0.75rem 0.45rem 2.1rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '0.825rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* Posts Table */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
          {isLoading ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              <Loader2 size={28} className="spin" style={{ margin: '0 auto 0.5rem auto' }} color="#0d7647" />
              <div>Đang tải kho bài viết...</div>
            </div>
          ) : displayedPosts.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>Không tìm thấy bài viết nào phù hợp.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 700 }}>
                    <th style={{ padding: '0.75rem 0.85rem', width: '35px' }}>
                      <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={selectedIds.length > 0 && selectedIds.length === displayedPosts.length}
                      />
                    </th>
                    <th style={{ padding: '0.75rem 0.85rem', minWidth: '240px' }}>Tiêu đề & Góc nhìn riêng</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '95px' }}>Loại bài</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '100px' }}>SEO Health</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '100px' }}>GEO Health</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '105px' }}>Evidence</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '75px' }}>Số từ</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '75px' }}>Links</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '95px' }}>Cập nhật</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '115px', textAlign: 'right' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedPosts.map((post) => {
                    const brief = parseBrief(post.brief_json);
                    const isPillar = post.id === brief.pillar_id || [1, 7, 13, 19, 25, 30].includes(post.id);
                    const health = evaluatePostHealth(post);

                    return (
                      <tr
                        key={post.id}
                        style={{
                          borderBottom: '1px solid #f1f5f9',
                          transition: 'background-color 0.1s',
                          backgroundColor: selectedIds.includes(post.id) ? '#f0fdf4' : 'transparent'
                        }}
                      >
                        {/* Checkbox */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(post.id)}
                            onChange={() => handleToggleSelect(post.id)}
                          />
                        </td>

                        {/* Title & Unique Angle */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Link
                              to={`/admin/posts/${post.id}/edit`}
                              style={{
                                fontWeight: 700,
                                color: '#0f172a',
                                textDecoration: 'none',
                                lineHeight: 1.35
                              }}
                            >
                              {post.title}
                            </Link>
                          </div>
                          {brief.unique_angle && (
                            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem', fontStyle: 'italic', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                              POV: {brief.unique_angle}
                            </div>
                          )}
                          <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                            /{post.slug}
                          </div>
                        </td>

                        {/* Content Type / Pillar */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          {isPillar ? (
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.25rem',
                              padding: '0.15rem 0.45rem',
                              borderRadius: '4px',
                              fontSize: '0.725rem',
                              fontWeight: 700,
                              backgroundColor: '#fef3c7',
                              color: '#92400e'
                            }}>
                              <Sparkles size={11} />
                              Pillar
                            </span>
                          ) : (
                            <span style={{
                              padding: '0.15rem 0.45rem',
                              borderRadius: '4px',
                              fontSize: '0.725rem',
                              fontWeight: 600,
                              backgroundColor: '#f1f5f9',
                              color: '#475569'
                            }}>
                              Supporting
                            </span>
                          )}
                        </td>

                        {/* SEO Health Rule-Derived */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          {health.seo.pass ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.725rem', fontWeight: 700, backgroundColor: '#dcfce7', color: '#15803d' }}>
                              <CheckCircle2 size={12} /> PASS
                            </span>
                          ) : (
                            <span
                              title={`Lý do chưa đạt:\n• ${health.seo.reasons.join('\n• ')}`}
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.725rem', fontWeight: 700, backgroundColor: '#fee2e2', color: '#991b1b', cursor: 'help' }}
                            >
                              <AlertCircle size={12} /> FAIL ({health.seo.reasons.length})
                            </span>
                          )}
                        </td>

                        {/* GEO Health Rule-Derived */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          {health.geo.pass ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.725rem', fontWeight: 700, backgroundColor: '#dcfce7', color: '#15803d' }}>
                              <ShieldCheck size={12} /> PASS
                            </span>
                          ) : (
                            <span
                              title={`Lý do chưa đạt:\n• ${health.geo.reasons.join('\n• ')}`}
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.725rem', fontWeight: 700, backgroundColor: '#ffedd5', color: '#c2410c', cursor: 'help' }}
                            >
                              <AlertTriangle size={12} /> FAIL ({health.geo.reasons.length})
                            </span>
                          )}
                        </td>

                        {/* Evidence Health Rule-Derived */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          {health.evidence.pass ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.725rem', fontWeight: 700, backgroundColor: '#dcfce7', color: '#15803d' }}>
                              <CheckCircle2 size={12} /> PASS
                            </span>
                          ) : (
                            <span
                              title={`Lý do chưa đạt:\n• ${health.evidence.reasons.join('\n• ')}`}
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.725rem', fontWeight: 700, backgroundColor: '#fee2e2', color: '#991b1b', cursor: 'help' }}
                            >
                              <AlertCircle size={12} /> FAIL ({health.evidence.reasons.length})
                            </span>
                          )}
                        </td>

                        {/* Word Count */}
                        <td style={{ padding: '0.75rem 0.85rem', color: '#334155', fontWeight: 600, fontSize: '0.8rem' }}>
                          {post.word_count || 0} từ
                        </td>

                        {/* Internal Links Count & Orphan Warning */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          <span
                            title={health.links.pass ? `${health.links.count} liên kết nội bộ` : health.links.reasons.join(', ')}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.2rem',
                              fontSize: '0.78rem',
                              color: health.links.count === 0 ? '#dc2626' : (health.links.count >= 2 ? '#0d7647' : '#d97706'),
                              fontWeight: 700,
                              cursor: health.links.count === 0 ? 'help' : 'default'
                            }}
                          >
                            <Link2 size={13} />
                            {health.links.count === 0 ? '0 (Mồ côi)' : health.links.count}
                          </span>
                        </td>

                        {/* Updated Date */}
                        <td style={{ padding: '0.75rem 0.85rem', color: '#64748b', fontSize: '0.78rem' }}>
                          {post.updated_at ? post.updated_at.split(' ')[0] : 'Hôm nay'}
                        </td>

                        {/* Actions */}
                        <td style={{ padding: '0.75rem 0.85rem', textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                            <Link
                              to={`/admin/posts/${post.id}/edit`}
                              title="Chỉnh sửa bài viết"
                              style={{
                                padding: '0.3rem',
                                color: '#0d7647',
                                borderRadius: '4px',
                                textDecoration: 'none'
                              }}
                            >
                              <Edit size={15} />
                            </Link>

                            <button
                              onClick={() => handleDuplicatePost(post.id)}
                              title="Nhân bản bài viết"
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0.3rem',
                                color: '#64748b',
                                borderRadius: '4px'
                              }}
                            >
                              <Copy size={15} />
                            </button>

                            <button
                              onClick={() => handleDeletePost(post.id, post.title)}
                              title="Xóa bài viết"
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0.3rem',
                                color: '#dc2626',
                                borderRadius: '4px'
                              }}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};
