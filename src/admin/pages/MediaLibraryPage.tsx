import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { MediaEntity } from '../../cms/types';
import {
  Upload, Search, Copy, Check, Trash2, Edit2,
  Loader2, Image as ImageIcon, ExternalLink, X
} from 'lucide-react';

export const MediaLibraryPage: React.FC = () => {
  const [mediaList, setMediaList] = useState<MediaEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Selected media detail modal
  const [selectedItem, setSelectedItem] = useState<MediaEntity | null>(null);
  const [altText, setAltText] = useState('');
  const [caption, setCaption] = useState('');
  const [isSavingDetail, setIsSavingDetail] = useState(false);

  useEffect(() => {
    loadMedia();
  }, [searchQuery]);

  const loadMedia = async () => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getMedia({ q: searchQuery, limit: 50 });
      if (res.success && res.data) {
        setMediaList(res.data.media);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    try {
      for (let i = 0; i < files.length; i++) {
        await cmsClient.uploadMedia(files[i]);
      }
      loadMedia();
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleCopyUrl = (url: string, id: number) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDeleteMedia = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa hình ảnh này khỏi thư viện?')) return;
    try {
      await cmsClient.deleteMedia(id);
      if (selectedItem?.id === id) setSelectedItem(null);
      loadMedia();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveDetails = async () => {
    if (!selectedItem) return;
    setIsSavingDetail(true);
    try {
      await cmsClient.updateMedia(selectedItem.id, { alt_text: altText, caption });
      selectedItem.alt_text = altText;
      selectedItem.caption = caption;
      alert('Đã cập nhật thông tin ảnh');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSavingDetail(false);
    }
  };

  const openDetail = (item: MediaEntity) => {
    setSelectedItem(item);
    setAltText(item.alt_text || '');
    setCaption(item.caption || '');
  };

  return (
    <AdminLayout activeKey="media" title="Thư Viện Media (Cloudflare R2)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Top Control Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff', padding: '1.25rem 1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Quản lý tài sản hình ảnh
            </h2>
            <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.2rem 0 0 0' }}>
              Lưu trữ trực tiếp trên Cloudflare R2 (localmate-assets-prod), không chiếm bộ nhớ database.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '260px' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Tìm tên tệp ảnh..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem 0.5rem 2.2rem',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <label
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
                cursor: isUploading ? 'not-allowed' : 'pointer'
              }}
            >
              {isUploading ? <Loader2 size={16} className="spin" /> : <Upload size={16} />}
              <span>{isUploading ? 'Đang tải lên...' : 'Tải ảnh lên'}</span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                disabled={isUploading}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>

        {/* Media Grid */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem', minHeight: '400px' }}>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
              <Loader2 size={32} className="spin" color="#0d7647" style={{ margin: '0 auto 0.5rem auto' }} />
              <div>Đang tải thư viện ảnh...</div>
            </div>
          ) : mediaList.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
              <ImageIcon size={48} color="#cbd5e1" style={{ margin: '0 auto 0.75rem auto' }} />
              <p style={{ fontSize: '1rem', fontWeight: 600, margin: '0 0 0.5rem 0' }}>Chưa có tệp nào trong thư viện</p>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>Bấm nút "Tải ảnh lên" ở trên để đưa ảnh đầu tiên vào hệ thống.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.25rem' }}>
              {mediaList.map((item) => (
                <div
                  key={item.id}
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: '#f8fafc',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    onClick={() => openDetail(item)}
                    style={{ position: 'relative', aspectRatio: '16/10', cursor: 'pointer', overflow: 'hidden', backgroundColor: '#e2e8f0' }}
                  >
                    <img
                      src={item.url}
                      alt={item.alt_text || item.filename}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <div style={{ padding: '0.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div
                        onClick={() => openDetail(item)}
                        style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', cursor: 'pointer' }}
                        title={item.original_filename || item.filename}
                      >
                        {item.original_filename || item.filename}
                      </div>
                      <div style={{ fontSize: '0.725rem', color: '#64748b', marginTop: '0.2rem' }}>
                        {(item.size / 1024).toFixed(1)} KB • {item.mime_type.split('/')[1]?.toUpperCase()}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid #e2e8f0' }}>
                      <button
                        type="button"
                        onClick={() => handleCopyUrl(item.url, item.id)}
                        title="Sao chép URL"
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontSize: '0.75rem',
                          color: copiedId === item.id ? '#15803d' : '#0d7647',
                          fontWeight: 600
                        }}
                      >
                        {copiedId === item.id ? <Check size={13} /> : <Copy size={13} />}
                        <span>{copiedId === item.id ? 'Đã chép' : 'Copy link'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteMedia(item.id)}
                        title="Xóa ảnh"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc2626', padding: '0.2rem' }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Media Detail Drawer / Modal */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem'
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '650px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Chi Tiết Hình Ảnh
              </h3>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', maxHeight: '70vh', overflowY: 'auto' }}>
              <div style={{ width: '220px', flexShrink: 0 }}>
                <img
                  src={selectedItem.url}
                  alt={selectedItem.alt_text || ''}
                  style={{ width: '100%', borderRadius: '8px', border: '1px solid #e2e8f0', objectFit: 'cover' }}
                />
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem', lineHeight: 1.5 }}>
                  <div><strong>Tệp:</strong> {selectedItem.filename}</div>
                  <div><strong>Kích thước:</strong> {(selectedItem.size / 1024).toFixed(1)} KB</div>
                  <div><strong>Định dạng:</strong> {selectedItem.mime_type}</div>
                  <div><strong>Ngày tạo:</strong> {selectedItem.created_at}</div>
                </div>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.25rem' }}>
                    Đường dẫn URL
                  </label>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <input
                      type="text"
                      readOnly
                      value={selectedItem.url}
                      style={{ flex: 1, padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.8rem', backgroundColor: '#f8fafc' }}
                    />
                    <button
                      type="button"
                      onClick={() => handleCopyUrl(selectedItem.url, selectedItem.id)}
                      style={{ padding: '0.45rem 0.75rem', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer' }}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.25rem' }}>
                    Văn bản thay thế (Alt text)
                  </label>
                  <input
                    type="text"
                    value={altText}
                    onChange={(e) => setAltText(e.target.value)}
                    placeholder="Mô tả cho công cụ tìm kiếm và khiếm thị..."
                    style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.25rem' }}>
                    Chú thích ảnh (Caption)
                  </label>
                  <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Chú thích hiển thị dưới ảnh..."
                    style={{ width: '100%', padding: '0.45rem 0.65rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={handleSaveDetails}
                    disabled={isSavingDetail}
                    style={{
                      padding: '0.5rem 1.2rem',
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: isSavingDetail ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSavingDetail ? 'Đang lưu...' : 'Lưu thông tin'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};
