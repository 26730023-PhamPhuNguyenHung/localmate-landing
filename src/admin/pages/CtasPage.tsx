import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { CtaEntity } from '../../cms/types';
import {
  MousePointerClick, PlusCircle, Trash2, Edit2, CheckCircle2,
  Loader2, ExternalLink, Eye, BarChart2
} from 'lucide-react';

export const CtasPage: React.FC = () => {
  const [ctas, setCtas] = useState<CtaEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Form state
  const [editingId, setEditingId] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  const [buttonLabel, setButtonLabel] = useState('');
  const [destinationUrl, setDestinationUrl] = useState('');
  const [placement, setPlacement] = useState<'after-intro' | 'middle' | 'before-conclusion' | 'end'>('end');
  const [isActive, setIsActive] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadCtas();
  }, []);

  const loadCtas = async () => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getCtas();
      if (res.success && res.data) {
        setCtas(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (cta: CtaEntity) => {
    setEditingId(cta.id);
    setName(cta.name);
    setHeadline(cta.headline);
    setDescription(cta.description || '');
    setButtonLabel(cta.button_label);
    setDestinationUrl(cta.destination_url);
    setPlacement(cta.placement);
    setIsActive(!!cta.is_active);
  };

  const handleReset = () => {
    setEditingId(null);
    setName('');
    setHeadline('');
    setDescription('');
    setButtonLabel('');
    setDestinationUrl('');
    setPlacement('end');
    setIsActive(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !headline.trim() || !buttonLabel.trim() || !destinationUrl.trim()) {
      alert('Vui lòng điền đầy đủ các thông tin bắt buộc');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        name: name.trim(),
        headline: headline.trim(),
        description: description.trim(),
        button_label: buttonLabel.trim(),
        destination_url: destinationUrl.trim(),
        placement,
        is_active: isActive ? 1 : 0
      };

      if (editingId) {
        await cmsClient.updateCta(editingId, payload);
      } else {
        await cmsClient.createCta(payload);
      }

      handleReset();
      loadCtas();
    } catch (err: any) {
      alert(err.message || 'Lỗi lưu CTA');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa khối CTA này?')) return;
    try {
      await cmsClient.deleteCta(id);
      loadCtas();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AdminLayout activeKey="ctas" title="Khối Kêu Gọi Hành Động (CTA Manager)">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 380px', gap: '2rem', alignItems: 'start' }}>
        {/* List of CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Danh Sách CTA Chuyển Đổi Lead
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.2rem 0 0 0' }}>
                Gắn linh hoạt vào bài viết để biến độc giả thành khách hàng thật sự.
              </p>
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d7647' }}>
              {ctas.length} Mẫu CTA
            </div>
          </div>

          {isLoading ? (
            <div style={{ padding: '3rem', textAlign: 'center' }}>
              <Loader2 size={30} className="spin" color="#0d7647" style={{ margin: '0 auto 0.5rem auto' }} />
              <div style={{ color: '#64748b' }}>Đang tải danh sách CTA...</div>
            </div>
          ) : ctas.length === 0 ? (
            <div style={{ backgroundColor: '#ffffff', padding: '3rem', textAlign: 'center', borderRadius: '12px', border: '1px solid #e2e8f0', color: '#64748b' }}>
              <MousePointerClick size={36} color="#cbd5e1" style={{ margin: '0 auto 0.5rem auto' }} />
              <p style={{ margin: 0 }}>Chưa có khối CTA nào. Hãy tạo mẫu đầu tiên bên phải.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {ctas.map((cta) => {
                const ctr = cta.impressions > 0 ? ((cta.clicks / cta.impressions) * 100).toFixed(1) : '0.0';
                return (
                  <div
                    key={cta.id}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0',
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.45rem', borderRadius: '4px', backgroundColor: '#edf7f1', color: '#0d7647' }}>
                          ID: #{cta.id}
                        </span>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                          {cta.name}
                        </h4>
                        <span style={{ fontSize: '0.72rem', color: '#64748b' }}>({cta.placement})</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button
                          type="button"
                          onClick={() => handleEdit(cta)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0284c7', padding: '0.2rem' }}
                          title="Chỉnh sửa"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(cta.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc2626', padding: '0.2rem' }}
                          title="Xóa"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Preview Box */}
                    <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
                      <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                        {cta.headline}
                      </div>
                      {cta.description && (
                        <div style={{ fontSize: '0.825rem', color: '#475569', marginBottom: '0.75rem', lineHeight: 1.45 }}>
                          {cta.description}
                        </div>
                      )}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ display: 'inline-block', padding: '0.4rem 0.9rem', borderRadius: '6px', backgroundColor: '#0d7647', color: '#ffffff', fontSize: '0.78rem', fontWeight: 700 }}>
                          {cta.button_label}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Đích: {cta.destination_url}</span>
                      </div>
                    </div>

                    {/* Stats Metrics */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.78rem', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '0.65rem' }}>
                      <div>Lượt hiển thị: <strong style={{ color: '#0f172a' }}>{cta.impressions}</strong></div>
                      <div>Lượt click: <strong style={{ color: '#0f172a' }}>{cta.clicks}</strong></div>
                      <div>Tỷ lệ CTR: <strong style={{ color: '#0d7647' }}>{ctr}%</strong></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Create / Edit Form */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1.25rem 0' }}>
            {editingId ? `Sửa CTA #${editingId}` : 'Tạo Mới Khối CTA'}
          </h3>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Tên định danh nội bộ *
              </label>
              <input
                type="text"
                placeholder="ví dụ: CTA Demo Web 0đ Cuối Bài"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Tiêu đề nổi bật (Headline) *
              </label>
              <input
                type="text"
                placeholder="ví dụ: Bạn muốn có Website chuẩn SEO cho tiệm của mình?"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                required
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Đoạn mô tả thuyết phục
              </label>
              <textarea
                rows={3}
                placeholder="Mô tả lợi ích trực tiếp mà khách hàng nhận được..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Nhãn nút bấm (Button Label) *
              </label>
              <input
                type="text"
                placeholder="ví dụ: Đăng Ký Tư Vấn Ngay"
                value={buttonLabel}
                onChange={(e) => setButtonLabel(e.target.value)}
                required
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Đường dẫn chuyển hướng (URL) *
              </label>
              <input
                type="text"
                placeholder="/lien-he hoặc /dich-vu/google-maps-seo"
                value={destinationUrl}
                onChange={(e) => setDestinationUrl(e.target.value)}
                required
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Vị trí hiển thị đề xuất
              </label>
              <select
                value={placement}
                onChange={(e) => setPlacement(e.target.value as any)}
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              >
                <option value="end">Cuối bài viết (End of Article)</option>
                <option value="middle">Giữa bài viết (Middle)</option>
                <option value="before-conclusion">Trước phần kết luận (Before Conclusion)</option>
                <option value="after-intro">Ngay sau đoạn mở đầu (After Intro)</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  padding: '0.65rem',
                  borderRadius: '8px',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Đang lưu...' : editingId ? 'Cập Nhật CTA' : 'Tạo Khối CTA'}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    padding: '0.65rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#ffffff',
                    color: '#475569',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                >
                  Hủy
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};
