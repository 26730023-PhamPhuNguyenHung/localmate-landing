import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { RedirectEntity } from '../../cms/types';
import { PlusCircle, Trash2, ArrowRight, Loader2, Compass } from 'lucide-react';

export const RedirectsPage: React.FC = () => {
  const [redirects, setRedirects] = useState<RedirectEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Form state
  const [sourcePath, setSourcePath] = useState('');
  const [destinationUrl, setDestinationUrl] = useState('');
  const [statusCode, setStatusCode] = useState<number>(301);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadRedirects();
  }, []);

  const loadRedirects = async () => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getRedirects();
      if (res.success && res.data) {
        setRedirects(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sourcePath.trim() || !destinationUrl.trim()) return;

    setIsSubmitting(true);
    try {
      await cmsClient.createRedirect({
        source_path: sourcePath.trim(),
        destination_url: destinationUrl.trim(),
        status_code: statusCode
      });
      setSourcePath('');
      setDestinationUrl('');
      loadRedirects();
    } catch (err: any) {
      alert(err.message || 'Lỗi thêm chuyển hướng');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa quy tắc chuyển hướng này?')) return;
    try {
      await cmsClient.deleteRedirect(id);
      loadRedirects();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AdminLayout activeKey="redirects" title="Quản Lý Chuyển Hướng 301 / 302 (Redirect Manager)">
      <div style={{ display: 'grid', gridTemplateColumns: '360px minmax(0, 1fr)', gap: '2rem', alignItems: 'start' }}>
        {/* Add Form */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0' }}>
            Tạo Chuyển Hướng Mới
          </h3>
          <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 1.25rem 0' }}>
            Hệ thống tự động tạo 301 khi bạn đổi slug của bài đã xuất bản để không bị mất thứ hạng SEO Google. Bạn cũng có thể thêm thủ công tại đây.
          </p>

          <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Đường dẫn nguồn (Source Path) *
              </label>
              <input
                type="text"
                placeholder="/kien-thuc/duong-dan-cu"
                value={sourcePath}
                onChange={(e) => setSourcePath(e.target.value)}
                required
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Đường dẫn đích (Destination URL) *
              </label>
              <input
                type="text"
                placeholder="/kien-thuc/duong-dan-moi"
                value={destinationUrl}
                onChange={(e) => setDestinationUrl(e.target.value)}
                required
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Mã trạng thái HTTP
              </label>
              <select
                value={statusCode}
                onChange={(e) => setStatusCode(parseInt(e.target.value, 10))}
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', backgroundColor: '#ffffff' }}
              >
                <option value={301}>301 Moved Permanently (Vĩnh viễn - Chuẩn SEO)</option>
                <option value={302}>302 Found (Tạm thời)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '0.65rem 1rem',
                backgroundColor: '#0d7647',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 700,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                marginTop: '0.5rem'
              }}
            >
              {isSubmitting ? 'Đang lưu...' : 'Thêm chuyển hướng'}
            </button>
          </form>
        </div>

        {/* Redirects Table */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          {isLoading ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              <Loader2 size={28} className="spin" color="#0d7647" style={{ margin: '0 auto 0.5rem auto' }} />
              <div>Đang tải chuyển hướng...</div>
            </div>
          ) : redirects.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              <Compass size={36} color="#cbd5e1" style={{ margin: '0 auto 0.5rem auto' }} />
              <p style={{ margin: 0 }}>Chưa có quy tắc chuyển hướng nào.</p>
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 700 }}>
                  <th style={{ padding: '0.85rem 1.25rem' }}>Đường dẫn cũ (Nguồn)</th>
                  <th style={{ padding: '0.85rem 1.25rem' }}>Đích chuyển đến</th>
                  <th style={{ padding: '0.85rem 1.25rem', width: '90px' }}>Mã</th>
                  <th style={{ padding: '0.85rem 1.25rem', width: '80px', textAlign: 'right' }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {redirects.map((r) => (
                  <tr key={r.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '0.85rem 1.25rem', fontWeight: 600, color: '#dc2626' }}>
                      {r.source_path}
                    </td>
                    <td style={{ padding: '0.85rem 1.25rem', fontWeight: 600, color: '#15803d' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <ArrowRight size={14} color="#94a3b8" />
                        <span>{r.destination_url}</span>
                      </div>
                    </td>
                    <td style={{ padding: '0.85rem 1.25rem' }}>
                      <span style={{ padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, backgroundColor: r.status_code === 301 ? '#dcfce7' : '#fef3c7', color: r.status_code === 301 ? '#15803d' : '#b45309' }}>
                        {r.status_code}
                      </span>
                    </td>
                    <td style={{ padding: '0.85rem 1.25rem', textAlign: 'right' }}>
                      <button
                        type="button"
                        onClick={() => handleDelete(r.id)}
                        title="Xóa chuyển hướng"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc2626', padding: '0.25rem' }}
                      >
                        <Trash2 size={16} />
                      </button>
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
