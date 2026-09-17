import React, { useState, useEffect } from 'react';
import { cmsClient } from '../../cms/services/cmsClient';
import { MediaEntity } from '../../cms/types';
import { X, Upload, Check, Loader2, Image as ImageIcon } from 'lucide-react';

interface MediaPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (media: MediaEntity) => void;
}

export const MediaPickerModal: React.FC<MediaPickerModalProps> = ({ isOpen, onClose, onSelect }) => {
  const [activeTab, setActiveTab] = useState<'library' | 'upload'>('library');
  const [mediaList, setMediaList] = useState<MediaEntity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaEntity | null>(null);

  // Upload state
  const [isUploading, setIsUploading] = useState(false);
  const [altText, setAltText] = useState('');

  useEffect(() => {
    if (isOpen) {
      loadMedia();
    }
  }, [isOpen]);

  const loadMedia = async () => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getMedia({ limit: 30 });
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
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const res = await cmsClient.uploadMedia(file, altText);
      if (res.success && res.data) {
        onSelect(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1.5rem',
        fontFamily: 'var(--font-family)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '85vh',
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Thư Viện Hình Ảnh Media
            </h3>
            <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: '#f1f5f9', padding: '0.2rem', borderRadius: '6px' }}>
              <button
                type="button"
                onClick={() => setActiveTab('library')}
                style={{
                  padding: '0.35rem 0.75rem',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  backgroundColor: activeTab === 'library' ? '#ffffff' : 'transparent',
                  color: activeTab === 'library' ? '#0d7647' : '#64748b',
                  cursor: 'pointer'
                }}
              >
                Thư viện
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('upload')}
                style={{
                  padding: '0.35rem 0.75rem',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  backgroundColor: activeTab === 'upload' ? '#ffffff' : 'transparent',
                  color: activeTab === 'upload' ? '#0d7647' : '#64748b',
                  cursor: 'pointer'
                }}
              >
                Tải lên tệp mới
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', minHeight: '360px' }}>
          {activeTab === 'library' ? (
            isLoading ? (
              <div style={{ textAlign: 'center', padding: '3rem' }}>
                <Loader2 size={32} className="spin" color="#0d7647" style={{ margin: '0 auto 0.5rem auto' }} />
                <div>Đang tải ảnh...</div>
              </div>
            ) : mediaList.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
                <ImageIcon size={40} color="#cbd5e1" style={{ margin: '0 auto 0.5rem auto' }} />
                <p style={{ margin: 0 }}>Chưa có hình ảnh nào trong thư viện.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '1rem' }}>
                {mediaList.map((item) => {
                  const isSelected = selectedMedia?.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedMedia(item)}
                      style={{
                        position: 'relative',
                        aspectRatio: '1',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: isSelected ? '3px solid #0d7647' : '1px solid #e2e8f0',
                        backgroundColor: '#f8fafc'
                      }}
                    >
                      <img
                        src={item.url}
                        alt={item.alt_text || item.filename}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      {isSelected && (
                        <div style={{ position: 'absolute', top: 6, right: 6, width: 22, height: 22, borderRadius: '50%', backgroundColor: '#0d7647', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Check size={14} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )
          ) : (
            /* Upload Tab */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', border: '2px dashed #cbd5e1', borderRadius: '10px', padding: '2rem' }}>
              <Upload size={40} color="#0d7647" style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                Kéo thả tệp vào đây hoặc chọn từ máy tính
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1.5rem' }}>
                Hỗ trợ định dạng JPG, PNG, WebP, GIF, SVG. Dung lượng tối đa 10MB.
              </p>

              <div style={{ width: '100%', maxWidth: '360px', marginBottom: '1.25rem' }}>
                <input
                  type="text"
                  placeholder="Mô tả thẻ ảnh (Alt text)..."
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.85rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <label
                style={{
                  padding: '0.65rem 1.5rem',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: isUploading ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {isUploading && <Loader2 size={16} className="spin" />}
                <span>{isUploading ? 'Đang tải lên...' : 'Chọn tệp hình ảnh'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          )}
        </div>

        {/* Footer */}
        {activeTab === 'library' && (
          <div style={{ padding: '0.85rem 1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f8fafc' }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
              {selectedMedia ? `Đã chọn: ${selectedMedia.filename}` : 'Chọn một ảnh từ danh sách'}
            </div>
            <button
              type="button"
              disabled={!selectedMedia}
              onClick={() => {
                if (selectedMedia) onSelect(selectedMedia);
              }}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: selectedMedia ? '#0d7647' : '#cbd5e1',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: selectedMedia ? 'pointer' : 'not-allowed'
              }}
            >
              Chèn ảnh này
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
