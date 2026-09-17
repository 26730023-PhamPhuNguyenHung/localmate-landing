import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { PostEntity, CategoryEntity } from '../../cms/types';
import { Link, useRouter } from '../../components/layout/Router';
import {
  Search, Filter, PlusCircle, Edit, Eye, Copy, Trash2,
  CheckCircle, Clock, Calendar, AlertTriangle, Loader2, ArrowUpDown
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
        limit: 15
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

  const handleQuickPublish = async (id: number) => {
    try {
      await cmsClient.publishPost(id);
      loadPosts();
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
        return <span style={{ padding: '0.2rem 0.55rem', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#e0f2fe', color: '#0369a1' }}>Đã lên lịch</span>;
      case 'archived':
        return <span style={{ padding: '0.2rem 0.55rem', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#fef3c7', color: '#b45309' }}>Lưu trữ</span>;
      default:
        return <span style={{ padding: '0.2rem 0.55rem', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#f1f5f9', color: '#475569' }}>{status}</span>;
    }
  };

  return (
    <AdminLayout activeKey="posts" title="Danh Sách Bài Viết">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Top Control Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
              Tất cả bài viết ({totalPosts})
            </span>
          </div>

          <Link
            to="/admin/posts/new"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#0d7647',
              color: '#ffffff',
              padding: '0.55rem 1rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            <PlusCircle size={16} /> Thêm bài viết mới
          </Link>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '1rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Left: Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center' }}>
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
              style={{
                padding: '0.5rem 0.8rem',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                fontSize: '0.85rem',
                backgroundColor: '#ffffff',
                outline: 'none'
              }}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="published">Đã xuất bản</option>
              <option value="draft">Bản nháp</option>
              <option value="scheduled">Đã hẹn giờ</option>
              <option value="archived">Lưu trữ</option>
            </select>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}
              style={{
                padding: '0.5rem 0.8rem',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                fontSize: '0.85rem',
                backgroundColor: '#ffffff',
                outline: 'none'
              }}
            >
              <option value="all">Tất cả chuyên mục</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>

            {/* Bulk Action */}
            {selectedIds.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginLeft: '0.5rem' }}>
                <select
                  value={bulkAction}
                  onChange={(e) => setBulkAction(e.target.value)}
                  style={{
                    padding: '0.5rem 0.8rem',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                >
                  <option value="">Thao tác hàng loạt ({selectedIds.length})</option>
                  <option value="publish">Xuất bản</option>
                  <option value="draft">Chuyển về nháp</option>
                  <option value="archive">Lưu trữ</option>
                  <option value="delete">Xóa vĩnh viễn</option>
                </select>
                <button
                  onClick={handleBulkApply}
                  disabled={!bulkAction || isActing}
                  style={{
                    padding: '0.5rem 0.85rem',
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
          <div style={{ position: 'relative', width: '280px' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Tìm kiếm tiêu đề, slug..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem 0.5rem 2.2rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '0.85rem',
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
              <div>Đang tải dữ liệu bài viết...</div>
            </div>
          ) : posts.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>Không tìm thấy bài viết nào phù hợp.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 700 }}>
                    <th style={{ padding: '0.85rem 1rem', width: '40px' }}>
                      <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={selectedIds.length > 0 && selectedIds.length === posts.length}
                      />
                    </th>
                    <th style={{ padding: '0.85rem 1rem' }}>Tiêu đề bài viết</th>
                    <th style={{ padding: '0.85rem 1rem', width: '130px' }}>Trạng thái</th>
                    <th style={{ padding: '0.85rem 1rem', width: '160px' }}>Chuyên mục</th>
                    <th style={{ padding: '0.85rem 1rem', width: '130px' }}>Tác giả</th>
                    <th style={{ padding: '0.85rem 1rem', width: '140px' }}>Ngày cập nhật</th>
                    <th style={{ padding: '0.85rem 1rem', width: '150px', textAlign: 'right' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr
                      key={post.id}
                      style={{
                        borderBottom: '1px solid #f1f5f9',
                        transition: 'background-color 0.1s',
                        backgroundColor: selectedIds.includes(post.id) ? '#f0fdf4' : 'transparent'
                      }}
                    >
                      {/* Checkbox */}
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(post.id)}
                          onChange={() => handleToggleSelect(post.id)}
                        />
                      </td>

                      {/* Title */}
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <Link
                          to={`/admin/posts/${post.id}/edit`}
                          style={{
                            fontWeight: 700,
                            color: '#0f172a',
                            textDecoration: 'none',
                            display: 'block',
                            lineHeight: 1.4
                          }}
                        >
                          {post.title}
                        </Link>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                          slug: /{post.slug}
                        </div>
                      </td>

                      {/* Status */}
                      <td style={{ padding: '0.85rem 1rem' }}>
                        {getStatusBadge(post.status)}
                      </td>

                      {/* Category */}
                      <td style={{ padding: '0.85rem 1rem', color: '#475569', fontWeight: 500 }}>
                        {post.category_name || '—'}
                      </td>

                      {/* Author */}
                      <td style={{ padding: '0.85rem 1rem', color: '#64748b' }}>
                        {post.author_name || 'Admin'}
                      </td>

                      {/* Updated Date */}
                      <td style={{ padding: '0.85rem 1rem', color: '#64748b', fontSize: '0.8rem' }}>
                        {post.updated_at ? post.updated_at.split(' ')[0] : '—'}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Link
                            to={`/admin/posts/${post.id}/edit`}
                            title="Chỉnh sửa bài viết"
                            style={{
                              padding: '0.35rem',
                              color: '#0d7647',
                              borderRadius: '4px',
                              textDecoration: 'none'
                            }}
                          >
                            <Edit size={16} />
                          </Link>

                          {/* Preview Link */}
                          <a
                            href={`/preview/post/${post.id}?token=preview_${post.uuid}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Xem trước bài viết"
                            style={{
                              padding: '0.35rem',
                              color: '#0284c7',
                              borderRadius: '4px'
                            }}
                          >
                            <Eye size={16} />
                          </a>

                          <button
                            onClick={() => handleDuplicatePost(post.id)}
                            title="Nhân bản bài viết"
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              padding: '0.35rem',
                              color: '#64748b',
                              borderRadius: '4px'
                            }}
                          >
                            <Copy size={16} />
                          </button>

                          <button
                            onClick={() => handleDeletePost(post.id, post.title)}
                            title="Xóa bài viết"
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              padding: '0.35rem',
                              color: '#dc2626',
                              borderRadius: '4px'
                            }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination Footer */}
          {!isLoading && totalPages > 1 && (
            <div style={{ padding: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <div style={{ color: '#64748b' }}>
                Trang {currentPage} / {totalPages} (Tổng cộng {totalPosts} bài)
              </div>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  style={{
                    padding: '0.4rem 0.8rem',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    cursor: currentPage <= 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  Trang trước
                </button>
                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  style={{
                    padding: '0.4rem 0.8rem',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer'
                  }}
                >
                  Trang sau
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};
