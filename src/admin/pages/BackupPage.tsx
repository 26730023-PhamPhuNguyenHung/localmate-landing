import React, { useState } from 'react';
import { AdminLayout } from '../AdminLayout';
import { cmsClient } from '../../cms/services/cmsClient';
import { Download, Upload, CheckCircle2, AlertTriangle, Loader2, Database } from 'lucide-react';

export const BackupPage: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [previewData, setPreviewData] = useState<any | null>(null);
  const [importJsonData, setImportJsonData] = useState<any | null>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleExport = async () => {
    setIsExporting(true);
    setErrorMessage('');
    try {
      const res = await cmsClient.exportBackup();
      if (res.success && res.data) {
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(res.data, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute('href', dataStr);
        downloadAnchor.setAttribute('download', `localmate-backup-${new Date().toISOString().split('T')[0]}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        setSuccessMessage('Đã xuất tệp sao lưu JSON thành công!');
        setTimeout(() => setSuccessMessage(''), 4000);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Lỗi khi xuất sao lưu');
    } finally {
      setIsExporting(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrorMessage('');
    setPreviewData(null);

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (!parsed || !Array.isArray(parsed.posts)) {
          throw new Error('Tệp không đúng cấu trúc (thiếu mảng posts)');
        }
        setImportJsonData(parsed);

        // Run dry-run preview
        setIsImporting(true);
        const res = await cmsClient.importBackup(parsed, true);
        if (res.success && res.data) {
          setPreviewData(res.data);
        } else {
          setErrorMessage(res.error?.message || 'Lỗi phân tích tệp');
        }
      } catch (err: any) {
        setErrorMessage('Tệp JSON không hợp lệ: ' + err.message);
      } finally {
        setIsImporting(false);
      }
    };
    reader.readAsText(file);
  };

  const handleConfirmImport = async () => {
    if (!importJsonData) return;
    if (!window.confirm('Bạn có chắc chắn muốn nạp các bài viết này vào hệ thống?')) return;

    setIsImporting(true);
    try {
      const res = await cmsClient.importBackup(importJsonData, false);
      if (res.success) {
        setSuccessMessage(`Đã nhập thành công ${previewData?.summary?.total || 0} bài viết vào hệ thống!`);
        setPreviewData(null);
        setImportJsonData(null);
      } else {
        setErrorMessage(res.error?.message || 'Lỗi khi nạp dữ liệu');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Lỗi khi nạp dữ liệu');
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <AdminLayout activeKey="backup" title="Sao Lưu &amp; Phục Hồi Dữ Liệu">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem', alignItems: 'start' }}>
        {/* Export Box */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '2rem' }}>
          <div style={{ width: 44, height: 44, borderRadius: '10px', backgroundColor: '#edf7f1', color: '#0d7647', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Download size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
            Xuất Dữ Liệu (Export Posts JSON)
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>
            Tải về toàn bộ bài viết, cấu trúc Tiptap JSON, SEO metadata và nội dung tóm tắt dưới dạng tệp JSON chuẩn phiên bản <code>schema_version: 1</code>.
          </p>

          <button
            type="button"
            onClick={handleExport}
            disabled={isExporting}
            style={{
              padding: '0.65rem 1.25rem',
              backgroundColor: '#0d7647',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: isExporting ? 'not-allowed' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            {isExporting && <Loader2 size={16} className="spin" />}
            <span>{isExporting ? 'Đang xuất tệp...' : 'Tải Về Tệp Sao Lưu (.json)'}</span>
          </button>
        </div>

        {/* Import Box */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '2rem' }}>
          <div style={{ width: 44, height: 44, borderRadius: '10px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Upload size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
            Nạp Dữ Liệu (Import Posts JSON)
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>
            Nạp bài viết từ tệp sao lưu JSON. Hệ thống sẽ tự động kiểm tra xem trước (Dry-run preview) các bài mới và bài xung đột slug trước khi ghi vào cơ sở dữ liệu.
          </p>

          <label
            style={{
              padding: '0.65rem 1.25rem',
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Upload size={16} />
            <span>Chọn tệp JSON để kiểm tra...</span>
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>

      {/* Notifications */}
      {successMessage && (
        <div style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '1rem', borderRadius: '8px', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
          <CheckCircle2 size={18} /> <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '1rem', borderRadius: '8px', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
          <AlertTriangle size={18} /> <span>{errorMessage}</span>
        </div>
      )}

      {/* Import Preview Table */}
      {previewData && (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.75rem', marginTop: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Xem Trước Kết Quả Nhập (Import Preview)
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>
                Tổng số bài: <strong>{previewData.summary.total}</strong> | Bài mới: <span style={{ color: '#15803d', fontWeight: 700 }}>{previewData.summary.new}</span> | Cập nhật đè: <span style={{ color: '#0369a1', fontWeight: 700 }}>{previewData.summary.update}</span>
              </p>
            </div>

            <button
              type="button"
              onClick={handleConfirmImport}
              disabled={isImporting}
              style={{
                padding: '0.65rem 1.5rem',
                backgroundColor: '#0d7647',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: isImporting ? 'not-allowed' : 'pointer'
              }}
            >
              {isImporting ? 'Đang ghi vào CSDL...' : 'Xác Nhận Nhập Dữ Liệu'}
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 700 }}>
                  <th style={{ padding: '0.65rem 1rem' }}>Hành động</th>
                  <th style={{ padding: '0.65rem 1rem' }}>Tiêu đề</th>
                  <th style={{ padding: '0.65rem 1rem' }}>Đường dẫn (Slug)</th>
                </tr>
              </thead>
              <tbody>
                {previewData.preview.map((item: any, idx: number) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '0.65rem 1rem' }}>
                      <span style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, backgroundColor: item.action === 'NEW' ? '#dcfce7' : '#e0f2fe', color: item.action === 'NEW' ? '#15803d' : '#0369a1' }}>
                        {item.action === 'NEW' ? 'BÀI MỚI' : 'GHI ĐÈ'}
                      </span>
                    </td>
                    <td style={{ padding: '0.65rem 1rem', fontWeight: 600, color: '#0f172a' }}>{item.title}</td>
                    <td style={{ padding: '0.65rem 1rem', color: '#64748b' }}>/{item.slug}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};
