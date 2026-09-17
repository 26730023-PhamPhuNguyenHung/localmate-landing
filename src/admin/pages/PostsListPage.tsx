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
    const matches = html.match(/href=["'](\/kien-thuc\/|\/giai-phap\/|#)/g);
    return matches ? matches.length : 0;
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
                    <th style={{ padding: '0.75rem 0.85rem', minWidth: '260px' }}>Tiêu đề & Góc nhìn riêng</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '110px' }}>Loại bài</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '130px' }}>Search Intent</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '95px' }}>Quality Gate</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '85px' }}>SEO / GEO</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '90px' }}>Số từ</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '85px' }}>Links</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '100px' }}>Cập nhật</th>
                    <th style={{ padding: '0.75rem 0.85rem', width: '120px', textAlign: 'right' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedPosts.map((post) => {
                    const brief = parseBrief(post.brief_json);
                    const isPillar = post.id === brief.pillar_id || [1, 7, 13, 19, 25, 30].includes(post.id);
                    const linkCount = countInternalLinks(post.rendered_html);
                    const hasTable = (post.rendered_html || '').includes('<table');
                    const hasMissingEvidence = !hasTable && (post.word_count || 0) < 500;

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
                            {hasMissingEvidence && (
                              <span title="Cảnh báo: Thiếu bảng biểu hoặc số liệu đối soát" style={{ color: '#d97706', display: 'inline-flex' }}>
                                <AlertTriangle size={14} />
                              </span>
                            )}
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

                        {/* Search Intent */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          <span style={{
                            padding: '0.15rem 0.45rem',
                            borderRadius: '4px',
                            fontSize: '0.725rem',
                            fontWeight: 600,
                            backgroundColor: '#eff6ff',
                            color: '#1d4ed8'
                          }}>
                            {brief.search_intent ? brief.search_intent.split(' - ')[0] : 'TOFU'}
                          </span>
                        </td>

                        {/* Quality Gate Status */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          {brief.quality_status === 'pass' ? (
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.2rem',
                              padding: '0.15rem 0.45rem',
                              borderRadius: '4px',
                              fontSize: '0.725rem',
                              fontWeight: 700,
                              backgroundColor: '#dcfce7',
                              color: '#15803d'
                            }}>
                              <ShieldCheck size={12} />
                              PASS
                            </span>
                          ) : (
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.2rem',
                              padding: '0.15rem 0.45rem',
                              borderRadius: '4px',
                              fontSize: '0.725rem',
                              fontWeight: 600,
                              backgroundColor: '#fee2e2',
                              color: '#991b1b'
                            }}>
                              <AlertCircle size={12} />
                              Review
                            </span>
                          )}
                        </td>

                        {/* SEO Status */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          <span style={{
                            padding: '0.15rem 0.45rem',
                            borderRadius: '4px',
                            fontSize: '0.725rem',
                            fontWeight: 600,
                            backgroundColor: brief.seo_status === 'optimized' ? '#ecfdf5' : '#f8fafc',
                            color: brief.seo_status === 'optimized' ? '#047857' : '#64748b'
                          }}>
                            {brief.seo_status === 'optimized' ? 'GEO 100%' : 'Chờ audit'}
                          </span>
                        </td>

                        {/* Word Count */}
                        <td style={{ padding: '0.75rem 0.85rem', color: '#334155', fontWeight: 600, fontSize: '0.8rem' }}>
                          {post.word_count || 0} từ
                        </td>

                        {/* Internal Links Count */}
                        <td style={{ padding: '0.75rem 0.85rem' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.2rem',
                            fontSize: '0.78rem',
                            color: linkCount >= 2 ? '#0d7647' : '#d97706',
                            fontWeight: 600
                          }}>
                            <Link2 size={13} />
                            {linkCount}
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
