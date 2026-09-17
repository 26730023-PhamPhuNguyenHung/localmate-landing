import React, { useState, useEffect, useRef } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { MediaEntity } from '../../cms/types';
import { optimizeImageClient, formatFileSize } from '../../utils/imageOptimizer';
import { Link } from '../../components/layout/Router';
import {
  Upload, Search, Copy, Check, Trash2, Edit2,
  Loader2, Image as ImageIcon, ExternalLink, X,
  AlertTriangle, Filter, CheckCircle2, FileText,
  Layers, HardDrive, Eye, ArrowRight, ShieldAlert, Sparkles
} from 'lucide-react';

export const MediaLibraryPage: React.FC = () => {
  const [mediaList, setMediaList] = useState<MediaEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'used' | 'unused' | 'missing-alt' | 'oversized'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  // Upload state tracking
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgressText, setUploadProgressText] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  // Copy feedback
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Selected media detail drawer
  const [selectedItem, setSelectedItem] = useState<MediaEntity | null>(null);
  const [altText, setAltText] = useState('');
  const [caption, setCaption] = useState('');
  const [isSavingDetail, setIsSavingDetail] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState<{ isOpen: boolean; usedIn: any[] }>({ isOpen: false, usedIn: [] });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadMedia();
  }, [searchQuery, activeFilter, currentPage]);

  const loadMedia = async () => {
    setIsLoading(true);
    try {
      const res = await cmsClient.getMedia({
        q: searchQuery,
        filter: activeFilter,
        page: currentPage,
        limit: 30
      });
      if (res.success && res.data) {
        setMediaList(res.data.media);
        setTotalPages(res.data.pagination.totalPages || 1);
        setTotalItems(res.data.pagination.total || 0);

        // Update selected item if open
        if (selectedItem) {
          const fresh = res.data.media.find((m: MediaEntity) => m.id === selectedItem.id);
          if (fresh) setSelectedItem(fresh);
        }
      }
    } catch (err) {
      console.error('Lỗi tải media:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const processAndUploadFiles = async (fileList: FileList | File[]) => {
    if (!fileList || fileList.length === 0) return;
    setIsUploading(true);

    const total = fileList.length;
    let successCount = 0;

    for (let i = 0; i < total; i++) {
      const rawFile = fileList[i];
      setUploadProgressText(`Đang tối ưu & nén WebP ảnh ${i + 1}/${total}: ${rawFile.name}...`);

      try {
        // Nén client-side sang WebP, trích xuất width, height, hash
        const opt = await optimizeImageClient(rawFile);

        setUploadProgressText(`Đang tải lên Cloudflare R2 (${i + 1}/${total})...`);
        const res = await cmsClient.uploadMedia(opt.file, {
          alt_text: '',
          caption: '',
          width: opt.width,
          height: opt.height,
          format: opt.format,
          hash: opt.hash,
          size_original: opt.originalSize,
          size_optimized: opt.optimizedSize
        });

        if (res.success) {
          successCount++;
        }
      } catch (err) {
        console.error('Lỗi upload file:', rawFile.name, err);
      }
    }

    setIsUploading(false);
    setUploadProgressText('');
    loadMedia();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processAndUploadFiles(e.target.files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      processAndUploadFiles(e.dataTransfer.files);
    }
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const openDetail = (item: MediaEntity) => {
    setSelectedItem(item);
    setAltText(item.alt_text || '');
    setCaption(item.caption || '');
    setDeleteWarning({ isOpen: false, usedIn: [] });
  };

  const handleSaveDetails = async () => {
    if (!selectedItem) return;
    setIsSavingDetail(true);
    try {
      await cmsClient.updateMedia(selectedItem.id, { alt_text: altText, caption });
      selectedItem.alt_text = altText;
      selectedItem.caption = caption;
      alert('Đã lưu thông tin ảnh thành công');
      loadMedia();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSavingDetail(false);
    }
  };

  const handleDeleteMedia = async (force: boolean = false) => {
    if (!selectedItem) return;
    try {
      const res = await cmsClient.deleteMedia(selectedItem.id, force);
      if (res.success) {
        setSelectedItem(null);
        setDeleteWarning({ isOpen: false, usedIn: [] });
        loadMedia();
      } else if (res.error?.code === 'CANNOT_DELETE_USED_MEDIA') {
        setDeleteWarning({
          isOpen: true,
          usedIn: (res.error as any).used_in_posts || []
        });
      } else {
        alert(res.error?.message || 'Không thể xóa ảnh');
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Tính tỷ lệ khung hình
  const getAspectRatio = (w?: number | null, h?: number | null) => {
    if (!w || !h) return 'Tự do';
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(w, h);
    return `${w / divisor}:${h / divisor}`;
  };

  return (
    <AdminLayout activeKey="media" title="Thư Viện Media (Cloudflare R2)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Top Control Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}
        >
          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Quản Lý Tài Sản Hình Ảnh R2
            </h2>
            <p style={{ fontSize: '0.825rem', color: '#64748b', margin: '0.2rem 0 0 0' }}>
              Tự động nén WebP chuẩn Core Web Vitals, bảo vệ tốc độ tải trang & chống giật layout (CLS).
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search Box */}
            <div style={{ position: 'relative', width: '240px' }}>
              <Search size={15} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Tìm tên tệp, thẻ ALT..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem 0.5rem 2.2rem',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              multiple
              accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
              onChange={handleFileInputChange}
              style={{ display: 'none' }}
            />

            {/* Upload Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1.1rem',
                borderRadius: '8px',
                backgroundColor: '#0d7647',
                color: '#ffffff',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: isUploading ? 'not-allowed' : 'pointer'
              }}
            >
              {isUploading ? <Loader2 size={16} className="spin" /> : <Upload size={16} />}
              <span>{isUploading ? 'Đang tải lên...' : 'Tải Ảnh Lên'}</span>
            </button>
          </div>
        </div>

        {/* Upload Progress Bar (if uploading) */}
        {isUploading && (
          <div
            style={{
              padding: '0.85rem 1.25rem',
              backgroundColor: '#edf7f1',
              borderRadius: '8px',
              border: '1px solid #bbf7d0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#15803d',
              fontSize: '0.875rem',
              fontWeight: 600
            }}
          >
            <Loader2 size={18} className="spin" />
            <span>{uploadProgressText}</span>
          </div>
        )}

        {/* Filter Tabs Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            { key: 'all', label: 'Tất cả ảnh' },
            { key: 'used', label: 'Đang sử dụng' },
            { key: 'unused', label: 'Chưa sử dụng' },
            { key: 'missing-alt', label: '⚠️ Thiếu thẻ ALT' },
            { key: 'oversized', label: '⚠️ Dung lượng lớn (>500KB)' }
          ].map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveFilter(tab.key as any);
                  setCurrentPage(1);
                }}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '6px',
                  border: isActive ? '1px solid #0d7647' : '1px solid #cbd5e1',
                  backgroundColor: isActive ? '#0d7647' : '#ffffff',
                  color: isActive ? '#ffffff' : '#334155',
                  fontSize: '0.825rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer'
                }}
              >
                {tab.label}
              </button>
            );
          })}
          <div style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#64748b' }}>
            Tổng cộng: <strong>{totalItems}</strong> hình ảnh
          </div>
        </div>

        {/* Drop Zone & Grid Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            border: isDragging ? '2px dashed #0d7647' : '1px solid transparent',
            backgroundColor: isDragging ? '#f0fdf4' : 'transparent',
            borderRadius: '12px',
            transition: 'all 0.2s ease',
            minHeight: '300px'
          }}
        >
          {isLoading ? (
            <div style={{ padding: '4rem', textAlign: 'center' }}>
              <Loader2 size={32} className="spin" color="#0d7647" style={{ margin: '0 auto 0.75rem auto' }} />
              <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Đang tải thư viện ảnh...</div>
            </div>
          ) : mediaList.length === 0 ? (
            /* Refactored Compact Empty State */
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px dashed #cbd5e1',
                borderRadius: '12px',
                padding: '3.5rem 2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.85rem'
              }}
            >
              <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                <ImageIcon size={28} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                {searchQuery || activeFilter !== 'all' ? 'Không tìm thấy hình ảnh phù hợp' : 'Thư viện hình ảnh hiện đang trống'}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', maxWidth: '420px', margin: 0 }}>
                Ảnh tải lên sẽ được nén tự động sang WebP chuẩn Google để bảo toàn 100% tốc độ cho website.
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                style={{
                  marginTop: '0.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.55rem 1.25rem',
                  borderRadius: '8px',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <Upload size={16} /> Tải Ảnh Đầu Tiên Lên
              </button>
            </div>
          ) : (
            /* Media Grid */
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1rem'
              }}
            >
              {mediaList.map((item) => {
                const isUsed = item.used_in_posts && item.used_in_posts.length > 0;
                const isMissingAlt = !item.alt_text || item.alt_text.trim() === '';
                const isSelected = selectedItem?.id === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => openDetail(item)}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '10px',
                      border: isSelected ? '2px solid #0d7647' : isMissingAlt ? '1px solid #fde047' : '1px solid #e2e8f0',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: isSelected ? '0 4px 12px rgba(13, 118, 71, 0.15)' : 'none',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '140px',
                        backgroundColor: '#f8fafc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                      }}
                    >
                      <img
                        src={item.url}
                        alt={item.alt_text || item.filename}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />

                      {/* Usage Badge */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '6px',
                          left: '6px',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          backgroundColor: isUsed ? '#dcfce7' : '#f1f5f9',
                          color: isUsed ? '#15803d' : '#64748b'
                        }}
                      >
                        {isUsed ? `${item.used_in_posts!.length} bài dùng` : 'Chưa dùng'}
                      </div>

                      {/* Missing ALT Warning Badge */}
                      {isMissingAlt && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '6px',
                            right: '6px',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            padding: '0.15rem 0.4rem',
                            borderRadius: '4px',
                            backgroundColor: '#fef08a',
                            color: '#854d0e',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.2rem'
                          }}
                          title="Hình ảnh này chưa có thẻ ALT mô tả"
                        >
                          <AlertTriangle size={11} /> Thiếu ALT
                        </div>
                      )}
                    </div>

                    {/* Meta Footer */}
                    <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                        title={item.filename}
                      >
                        {item.filename}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.725rem', color: '#64748b' }}>
                        <span>
                          {item.width && item.height ? `${item.width}×${item.height}` : 'Vector/SVG'}
                        </span>
                        <span style={{ fontWeight: 600 }}>{formatFileSize(item.size)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
              <button
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                style={{
                  padding: '0.45rem 0.85rem',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  fontSize: '0.825rem',
                  cursor: currentPage <= 1 ? 'not-allowed' : 'pointer'
                }}
              >
                Trang trước
              </button>
              <span style={{ display: 'flex', alignItems: 'center', fontSize: '0.825rem', color: '#475569', padding: '0 0.5rem' }}>
                Trang {currentPage} / {totalPages}
              </span>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                style={{
                  padding: '0.45rem 0.85rem',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  fontSize: '0.825rem',
                  cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer'
                }}
              >
                Trang sau
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Asset Detail Drawer (Side Modal) */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.4)',
            display: 'flex',
            justifyContent: 'flex-end',
            zIndex: 100
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '520px',
              height: '100%',
              backgroundColor: '#ffffff',
              boxShadow: '-4px 0 24px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto'
            }}
          >
            {/* Drawer Header */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Chi Tiết Tài Sản Media
                </h3>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>ID: #{selectedItem.id}</div>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Content */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
              {/* Large Image Preview */}
              <div
                style={{
                  width: '100%',
                  maxHeight: '260px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={selectedItem.url}
                  alt={selectedItem.alt_text || selectedItem.filename}
                  style={{ maxWidth: '100%', maxHeight: '260px', objectFit: 'contain' }}
                />
              </div>

              {/* Copy Links Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                <button
                  onClick={() => handleCopy(selectedItem.url, 'url')}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: copiedType === 'url' ? '#dcfce7' : '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem'
                  }}
                >
                  {copiedType === 'url' ? <Check size={14} color="#15803d" /> : <Copy size={14} />}
                  {copiedType === 'url' ? 'Đã chép URL' : 'Chép URL'}
                </button>

                <button
                  onClick={() => handleCopy(`![${selectedItem.alt_text || selectedItem.filename}](${selectedItem.url})`, 'md')}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: copiedType === 'md' ? '#dcfce7' : '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem'
                  }}
                >
                  {copiedType === 'md' ? <Check size={14} color="#15803d" /> : <Copy size={14} />}
                  {copiedType === 'md' ? 'Đã chép MD' : 'Chép Markdown'}
                </button>

                <button
                  onClick={() => handleCopy(`<img src="${selectedItem.url}" alt="${selectedItem.alt_text || ''}" width="${selectedItem.width || ''}" height="${selectedItem.height || ''}" loading="lazy" />`, 'html')}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: copiedType === 'html' ? '#dcfce7' : '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem'
                  }}
                >
                  {copiedType === 'html' ? <Check size={14} color="#15803d" /> : <Copy size={14} />}
                  {copiedType === 'html' ? 'Đã chép HTML' : 'Chép HTML'}
                </button>
              </div>

              {/* Technical Spec Table */}
              <div style={{ backgroundColor: '#f8fafc', borderRadius: '8px', padding: '1rem', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                  Thông Số Kỹ Thuật
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', fontSize: '0.8rem' }}>
                  <div>
                    <span style={{ color: '#64748b' }}>Kích thước: </span>
                    <strong style={{ color: '#0f172a' }}>{selectedItem.width && selectedItem.height ? `${selectedItem.width} × ${selectedItem.height} px` : 'Tự do'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>Tỷ lệ: </span>
                    <strong style={{ color: '#0f172a' }}>{getAspectRatio(selectedItem.width, selectedItem.height)}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>Dung lượng: </span>
                    <strong style={{ color: '#0f172a' }}>{formatFileSize(selectedItem.size)}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>Định dạng: </span>
                    <strong style={{ color: '#0f172a', textTransform: 'uppercase' }}>{selectedItem.format || selectedItem.mime_type.split('/')[1] || 'WebP'}</strong>
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <span style={{ color: '#64748b' }}>Lưu trữ R2: </span>
                    <code style={{ fontSize: '0.72rem', backgroundColor: '#e2e8f0', padding: '0.1rem 0.3rem', borderRadius: '4px' }}>
                      {selectedItem.r2_key}
                    </code>
                  </div>
                </div>
              </div>

              {/* Used by Articles Section */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1rem', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Đang Được Sử Dụng Ở Đâu?</span>
                  <span style={{ fontSize: '0.75rem', color: selectedItem.used_in_posts && selectedItem.used_in_posts.length > 0 ? '#15803d' : '#64748b' }}>
                    {selectedItem.used_in_posts && selectedItem.used_in_posts.length > 0 ? `${selectedItem.used_in_posts.length} bài viết` : 'Chưa có bài nào dùng'}
                  </span>
                </div>

                {selectedItem.used_in_posts && selectedItem.used_in_posts.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {selectedItem.used_in_posts.map((post) => (
                      <div
                        key={post.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.45rem 0.65rem',
                          backgroundColor: '#f8fafc',
                          borderRadius: '6px',
                          fontSize: '0.8rem'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', overflow: 'hidden' }}>
                          <FileText size={14} color="#0d7647" />
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px', fontWeight: 600 }}>
                            {post.title}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {post.is_featured && (
                            <span style={{ fontSize: '0.68rem', backgroundColor: '#dcfce7', color: '#15803d', padding: '0.1rem 0.35rem', borderRadius: '4px', fontWeight: 700 }}>
                              Featured
                            </span>
                          )}
                          <Link to={`/admin/posts/${post.id}/edit`} style={{ color: '#0d7647', textDecoration: 'none' }}>
                            <ExternalLink size={13} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                    Hình ảnh này hiện đang an toàn để xóa hoặc thay thế nếu không còn cần thiết.
                  </p>
                )}
              </div>

              {/* Editable Metadata Form */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <label style={{ fontSize: '0.825rem', fontWeight: 700, color: '#334155' }}>
                      Thẻ mô tả hình ảnh (ALT Text) *
                    </label>
                    <span style={{ fontSize: '0.72rem', color: altText ? '#15803d' : '#eab308', fontWeight: 600 }}>
                      {altText ? '✓ Đã có ALT' : '⚠️ Cần nhập ALT cho SEO'}
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Mô tả chính xác nội dung hiển thị của ảnh..."
                    value={altText}
                    onChange={(e) => setAltText(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 0.75rem',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.85rem',
                      boxSizing: 'border-box'
                    }}
                  />
                  <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.25rem' }}>
                    Google dùng ALT để hiểu hình ảnh và đọc cho người khiếm thị. Hãy mô tả tự nhiên, tránh nhồi nhét từ khóa.
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Chú thích ảnh (Caption)
                  </label>
                  <input
                    type="text"
                    placeholder="Chú thích hiển thị bên dưới ảnh khi đọc bài..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 0.75rem',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.85rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <button
                  onClick={handleSaveDetails}
                  disabled={isSavingDetail}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    padding: '0.6rem 1.25rem',
                    borderRadius: '8px',
                    backgroundColor: '#0d7647',
                    color: '#ffffff',
                    border: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: isSavingDetail ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSavingDetail ? <Loader2 size={16} className="spin" /> : <Edit2 size={16} />}
                  <span>{isSavingDetail ? 'Đang lưu...' : 'Lưu Thay Đổi'}</span>
                </button>
              </div>

              {/* Delete Warning Box (if attempting delete used media) */}
              {deleteWarning.isOpen && (
                <div
                  style={{
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '8px',
                    padding: '1rem',
                    color: '#991b1b',
                    fontSize: '0.825rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800 }}>
                    <ShieldAlert size={18} /> Cảnh Báo An Toàn: Ảnh Đang Được Sử Dụng!
                  </div>
                  <div>
                    Hình ảnh này đang xuất hiện trong {deleteWarning.usedIn.length} bài viết. Nếu bạn xóa, các bài viết đó sẽ bị mất ảnh hoặc lỗi giao diện.
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <button
                      onClick={() => setDeleteWarning({ isOpen: false, usedIn: [] })}
                      style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        backgroundColor: '#ffffff',
                        color: '#334155',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Hủy Bỏ
                    </button>
                    <button
                      onClick={() => handleDeleteMedia(true)}
                      style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: '#dc2626',
                        color: '#ffffff',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Vẫn Xóa (Bắt Buộc)
                    </button>
                  </div>
                </div>
              )}

              {/* Normal Delete Button */}
              {!deleteWarning.isOpen && (
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
                  <button
                    onClick={() => handleDeleteMedia(false)}
                    style={{
                      width: '100%',
                      padding: '0.55rem',
                      borderRadius: '8px',
                      border: '1px solid #fecaca',
                      backgroundColor: '#fff1f2',
                      color: '#e11d48',
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <Trash2 size={16} /> Xóa Hình Ảnh Này
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};
