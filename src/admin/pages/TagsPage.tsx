import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { TagEntity } from '../../cms/types';
import { PlusCircle, Trash2, Loader2, Tag } from 'lucide-react';

export const TagsPage: React.FC = () => {
  const [tags, setTags] = useState<TagEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadTags();
  }, []);

  const loadTags = async () => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getTags();
      if (res.success && res.data) {
        setTags(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    try {
      await cmsClient.createTag(name.trim());
      setName('');
      loadTags();
    } catch (err: any) {
      alert(err.message || 'Lỗi thêm thẻ');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout activeKey="tags" title="Quản Lý Thẻ (Tags)">
      <div style={{ display: 'grid', gridTemplateColumns: '320px minmax(0, 1fr)', gap: '2rem', alignItems: 'start' }}>
        {/* Form Add Tag */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0' }}>
            Thêm Thẻ Mới
          </h3>

          <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Tên thẻ *
              </label>
              <input
                type="text"
                placeholder="ví dụ: google-ads-2026"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
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
              {isSubmitting ? 'Đang thêm...' : 'Thêm thẻ'}
            </button>
          </form>
        </div>

        {/* Tag Cloud & List */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1.25rem 0' }}>
            Danh Sách Thẻ Hiện Có
          </h3>

          {isLoading ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
              <Loader2 size={24} className="spin" color="#0d7647" style={{ margin: '0 auto 0.5rem auto' }} />
              <div>Đang tải thẻ...</div>
            </div>
          ) : tags.length === 0 ? (
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Chưa có thẻ nào.</p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 0.8rem',
                    backgroundColor: '#f1f5f9',
                    border: '1px solid #e2e8f0',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#334155'
                  }}
                >
                  <Tag size={13} color="#0d7647" />
                  <span>{tag.name}</span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>({tag.post_count})</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};
