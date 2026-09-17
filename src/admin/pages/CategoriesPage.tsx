import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { CategoryEntity } from '../../cms/types';
import { PlusCircle, Edit2, Trash2, Loader2, FolderTree } from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Form state
  const [editingId, setEditingId] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getCategories();
      if (res.success && res.data) {
        setCategories(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (cat: CategoryEntity) => {
    setEditingId(cat.id);
    setName(cat.name);
    setSlug(cat.slug);
    setDescription(cat.description || '');
  };

  const handleResetForm = () => {
    setEditingId(null);
    setName('');
    setSlug('');
    setDescription('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    try {
      if (editingId) {
        await cmsClient.updateCategory(editingId, { name, slug, description });
      } else {
        await cmsClient.createCategory({ name, slug, description });
      }
      handleResetForm();
      loadCategories();
    } catch (err: any) {
      alert(err.message || 'Lỗi xử lý chuyên mục');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: number, catName: string) => {
    if (!window.confirm(`Bạn có chắc chắn muốn xóa chuyên mục "${catName}"? Các bài viết thuộc chuyên mục này sẽ được chuyển về chuyên mục mặc định.`)) {
      return;
    }
    try {
      await cmsClient.deleteCategory(id);
      loadCategories();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AdminLayout activeKey="categories" title="Quản Lý Chuyên Mục">
      <div style={{ display: 'grid', gridTemplateColumns: '360px minmax(0, 1fr)', gap: '2rem', alignItems: 'start' }}>
        {/* Left: Create/Edit Form */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1.25rem 0' }}>
            {editingId ? 'Cập Nhật Chuyên Mục' : 'Thêm Chuyên Mục Mới'}
          </h3>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Tên chuyên mục *
              </label>
              <input
                type="text"
                placeholder="ví dụ: Google Maps"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Đường dẫn tĩnh (Slug)
              </label>
              <input
                type="text"
                placeholder="ví dụ: google-maps"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
              />
              <span style={{ fontSize: '0.725rem', color: '#64748b', marginTop: '0.25rem', display: 'block' }}>
                Để trống nếu muốn hệ thống tự sinh từ tên chuyên mục.
              </span>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Mô tả chuyên mục
              </label>
              <textarea
                rows={3}
                placeholder="Mô tả ngắn gọn mục đích và nội dung chuyên mục này..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box', fontFamily: 'inherit' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  padding: '0.6rem 1rem',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Đang lưu...' : editingId ? 'Lưu cập nhật' : 'Thêm chuyên mục'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={handleResetForm}
                  style={{
                    padding: '0.6rem 1rem',
                    backgroundColor: '#f1f5f9',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}
                >
                  Hủy
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Right: Table of Categories */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          {isLoading ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              <Loader2 size={28} className="spin" color="#0d7647" style={{ margin: '0 auto 0.5rem auto' }} />
              <div>Đang tải chuyên mục...</div>
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 700 }}>
                  <th style={{ padding: '0.85rem 1.25rem' }}>Tên chuyên mục</th>
                  <th style={{ padding: '0.85rem 1.25rem' }}>Slug</th>
                  <th style={{ padding: '0.85rem 1.25rem', width: '100px', textAlign: 'center' }}>Số bài viết</th>
                  <th style={{ padding: '0.85rem 1.25rem', width: '120px', textAlign: 'right' }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat: any) => (
                  <tr key={cat.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '0.85rem 1.25rem' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>{cat.name}</div>
                      {cat.description && (
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>{cat.description}</div>
                      )}
                    </td>
                    <td style={{ padding: '0.85rem 1.25rem', color: '#64748b', fontSize: '0.8rem' }}>
                      /{cat.slug}
                    </td>
                    <td style={{ padding: '0.85rem 1.25rem', textAlign: 'center' }}>
                      <span style={{ padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, backgroundColor: '#edf7f1', color: '#0d7647' }}>
                        {cat.real_post_count ?? cat.post_count ?? 0}
                      </span>
                    </td>
                    <td style={{ padding: '0.85rem 1.25rem', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                        <button
                          type="button"
                          onClick={() => handleEdit(cat)}
                          title="Sửa chuyên mục"
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0d7647', padding: '0.25rem' }}
                        >
                          <Edit2 size={16} />
                        </button>
                        {cat.id !== 1 && (
                          <button
                            type="button"
                            onClick={() => handleDelete(cat.id, cat.name)}
                            title="Xóa chuyên mục"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc2626', padding: '0.25rem' }}
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};
