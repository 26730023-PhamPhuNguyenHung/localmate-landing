import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Phone,
  MessageSquare,
  Sparkles,
  Loader2,
  Lock,
  Clock,
  ArrowRight
} from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';
import { trackFormStart } from '../../analytics/tracker';
import { submitLead } from '../../services/leadService';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceName?: string;
}

const COMMON_SERVICES = [
  'Thiết kế Website & Landing Page theo ngành',
  'Xác minh & Tối ưu Google Maps (Local SEO)',
  'Chạy quảng cáo Google / Facebook chuyển đổi',
  'Gói số hóa & Marketing tổng thể cho tiệm',
  'Khác / Cần chuyên viên khảo sát tư vấn 1-1'
];

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  defaultServiceName = 'Tư vấn giải pháp Website & Marketing'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultServiceName,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (defaultServiceName) {
      setFormData((prev) => ({ ...prev, service: defaultServiceName }));
    }
  }, [defaultServiceName]);

  useEffect(() => {
    if (isOpen) {
      trackFormStart('Universal_Lead_Modal');
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const cleanPhone = formData.phone.trim().replace(/[\s\-\.\(\)]/g, '');

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMsg('Vui lòng nhập họ và tên của bạn (tối thiểu 2 ký tự).');
      return;
    }

    if (!cleanPhone || !/^(0|\+?84)(3|5|7|8|9|2[0-9])[0-9]{8}$/.test(cleanPhone)) {
      setErrorMsg('Số điện thoại không hợp lệ. Vui lòng nhập số di động (Ví dụ: 0912 345 678).');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        serviceInterest: formData.service,
        message: formData.message || `Đăng ký từ Modal tư vấn: ${formData.service}`,
        sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/'
      });
    } catch (err) {
      console.debug('Lead submission catch:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrorMsg('');
    setFormData({
      name: '',
      phone: '',
      service: defaultServiceName,
      message: ''
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="lead-modal-overlay"
    >
      {/* Backdrop (Strictly solid tint, NO glassmorphism) */}
      <div
        className="modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className="modal-content-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Đóng cửa sổ"
          onClick={handleResetAndClose}
          className="modal-close-btn"
        >
          <X size={22} />
        </button>

        {isSubmitted ? (
          <div className="modal-success-state">
            <div className="success-icon-circle">
              <CheckCircle2 size={38} />
            </div>
            <h3 className="success-title">Đã Nhận Yêu Cầu Của Bạn!</h3>
            <p className="success-text">
              Chuyên viên LocalMate đã tiếp nhận thông tin về nhu cầu <strong>"{formData.service}"</strong> và sẽ liên hệ hỗ trợ bạn qua Zalo/SĐT trong vòng <strong>15 phút</strong>.
            </p>

            <div className="success-buttons">
              <a
                href={CONTACT_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modal-zalo"
              >
                <MessageSquare size={18} /> Mở Chat Zalo Tiếp Tục
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="btn-modal-call"
              >
                <Phone size={18} /> Gọi Hotline Ngay ({CONTACT_INFO.phoneRaw})
              </a>
              <button
                type="button"
                className="btn-modal-close"
                onClick={handleResetAndClose}
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-inner">
            {/* Header */}
            <div className="modal-header">
              <div className="modal-top-tag">
                <Sparkles size={14} /> KHỞI ĐẦU DỄ DÀNG • DEMO 0Đ
              </div>
              <h3 id="modal-headline" className="modal-title">
                Đăng Ký Tư Vấn &amp; Nhận Demo 0đ
              </h3>
              <p className="modal-desc">
                Chuyên viên kỹ thuật sẽ tư vấn giải pháp phù hợp nhất với mô hình kinh doanh của bạn.
              </p>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="modal-error-box" role="alert">
                {errorMsg}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="modal-form" noValidate>
              {/* Row: Họ và tên */}
              <div className="form-field-wrap">
                <label htmlFor="modal-lead-name" className="field-title">
                  Họ và tên của bạn <span className="field-required">*</span>
                </label>
                <input
                  id="modal-lead-name"
                  type="text"
                  required
                  placeholder="Ví dụ: Anh Tuấn / Chị Lan"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errorMsg) setErrorMsg('');
                  }}
                  className="modal-input"
                  autoComplete="name"
                />
              </div>

              {/* Row: Số điện thoại / Zalo */}
              <div className="form-field-wrap">
                <label htmlFor="modal-lead-phone" className="field-title">
                  Số điện thoại / Zalo <span className="field-required">*</span>
                </label>
                <input
                  id="modal-lead-phone"
                  type="tel"
                  required
                  placeholder="Ví dụ: 0912 345 678"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errorMsg) setErrorMsg('');
                  }}
                  className="modal-input"
                  autoComplete="tel"
                />
              </div>

              {/* Row: Dịch vụ quan tâm */}
              <div className="form-field-wrap">
                <label htmlFor="modal-lead-service" className="field-title">
                  Nhu cầu bạn đang quan tâm
                </label>
                <select
                  id="modal-lead-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="modal-input modal-select"
                >
                  {COMMON_SERVICES.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row: Ghi chú */}
              <div className="form-field-wrap">
                <label htmlFor="modal-lead-msg" className="field-title">
                  Ghi chú thêm (không bắt buộc)
                </label>
                <textarea
                  id="modal-lead-msg"
                  rows={2}
                  placeholder="Ví dụ: Cần làm website trong 5 ngày, xem demo trước..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="modal-input modal-textarea"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-modal-submit"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={19} className="spin-icon" /> Đang gửi đăng ký...
                  </>
                ) : (
                  <>
                    Gửi Đăng Ký Nhận Demo 0đ <ArrowRight size={19} />
                  </>
                )}
              </button>

              {/* CAM KẾT UY TÍN: 'Bảo mật thông tin - Phản hồi trong 15 phút - Hoàn toàn miễn phí' */}
              <div className="modal-trust-bar">
                <div className="trust-item">
                  <Lock size={13} className="t-icon" />
                  <span>Bảo mật thông tin</span>
                </div>
                <div className="dot-sep">•</div>
                <div className="trust-item">
                  <Clock size={13} className="t-icon" />
                  <span>Phản hồi 15 phút</span>
                </div>
                <div className="dot-sep">•</div>
                <div className="trust-item">
                  <ShieldCheck size={13} className="t-icon" />
                  <span>Hoàn toàn miễn phí</span>
                </div>
              </div>

              {/* INTERACTIVE OPTION 2: Direct Call Callout */}
              <div className="modal-hotline-option">
                <span className="hotline-option-text">Hoặc trao đổi nhanh với kỹ thuật viên:</span>
                <div className="hotline-links">
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="quick-tel-link"
                  >
                    <Phone size={14} /> Hotline: <strong>0834.422.439</strong>
                  </a>
                  <a
                    href={CONTACT_INFO.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-zalo-link"
                  >
                    <MessageSquare size={14} /> Chat Zalo 24/7
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      <style>{`
        .lead-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1rem, 3vw, 2rem);
          overflow-y: auto;
        }

        /* Backdrop - Opaque tint, NO glassmorphism */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.75);
          z-index: 10000;
        }

        /* Card Container */
        .modal-content-card {
          position: relative;
          background-color: #ffffff;
          border-radius: 20px;
          width: 100%;
          max-width: 520px;
          padding: clamp(1.5rem, 4vw, 2.25rem);
          box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.35);
          z-index: 10001;
          border: 1px solid #e2e8f0;
          max-height: 92dvh;
          overflow-y: auto;
          scrollbar-gutter: stable;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.15rem;
          right: 1.15rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #64748b;
          padding: 0.35rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }

        .modal-close-btn:hover {
          background-color: #f1f5f9;
          color: #0f172a;
        }

        /* Modal Header */
        .modal-header {
          margin-bottom: 1.25rem;
          padding-right: 2rem;
        }

        .modal-top-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #0d7647;
          background-color: #edf7f1;
          padding: 0.3rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid #c6ebd4;
          margin-bottom: 0.5rem;
          letter-spacing: 0.03em;
        }

        .modal-title {
          font-size: clamp(1.35rem, 2.2vw, 1.6rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.4rem 0;
          line-height: 1.25;
          letter-spacing: -0.01em;
          text-wrap: balance;
        }

        .modal-desc {
          font-size: 0.875rem;
          color: #475569;
          margin: 0;
          line-height: 1.5;
        }

        .modal-error-box {
          padding: 0.75rem 1rem;
          background-color: #fee2e2;
          border: 1px solid #f87171;
          border-radius: 10px;
          color: #b91c1c;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        /* Form Controls */
        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-field-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .field-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: #1e293b;
        }

        .field-required {
          color: #dc2626;
        }

        .modal-input {
          width: 100%;
          min-height: 48px;
          padding: 0.75rem 1rem;
          border: 1.5px solid #cbd5e1;
          border-radius: 10px;
          font-size: 1rem; /* 16px to prevent iOS auto-zoom */
          color: #0f172a;
          background-color: #ffffff;
          box-sizing: border-box;
          outline: none;
          font-family: inherit;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .modal-input:focus {
          border-color: #0d7647;
          box-shadow: 0 0 0 3px #edf7f1;
        }

        .modal-select {
          cursor: pointer;
          appearance: auto;
        }

        .modal-textarea {
          min-height: 64px;
          resize: vertical;
        }

        /* Submit Button */
        .btn-modal-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          width: 100%;
          min-height: 52px;
          padding: 0.85rem 1.5rem;
          background-color: #0d7647;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          transition: background-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
          box-shadow: 0 4px 14px rgba(13, 118, 71, 0.32);
          margin-top: 0.25rem;
        }

        .btn-modal-submit:hover:not(:disabled) {
          background-color: #095935;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(13, 118, 71, 0.42);
        }

        .btn-modal-submit:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .spin-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Trust Bar */
        .modal-trust-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.45rem;
          padding: 0.65rem 0.75rem;
          background-color: #edf7f1;
          border-radius: 8px;
          border: 1px solid #c6ebd4;
        }

        .trust-item {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #065f46;
        }

        .t-icon {
          color: #0d7647;
          flex-shrink: 0;
        }

        .dot-sep {
          color: #94a3b8;
          font-size: 0.75rem;
        }

        /* Hotline Option */
        .modal-hotline-option {
          padding-top: 0.85rem;
          border-top: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
          text-align: center;
        }

        .hotline-option-text {
          font-size: 0.8rem;
          color: #64748b;
        }

        .hotline-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .quick-tel-link,
        .quick-zalo-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          font-weight: 700;
          text-decoration: none;
          padding: 0.4rem 0.85rem;
          border-radius: 8px;
          transition: all 0.15s ease;
        }

        .quick-tel-link {
          color: #074e2e;
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
        }

        .quick-tel-link:hover {
          background-color: #dcfce7;
        }

        .quick-zalo-link {
          color: #0284c7;
          background-color: #f0f9ff;
          border: 1px solid #bae6fd;
        }

        .quick-zalo-link:hover {
          background-color: #e0f2fe;
        }

        /* Success State */
        .modal-success-state {
          text-align: center;
          padding: 1.5rem 0.5rem;
        }

        .success-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: #edf7f1;
          color: #0d7647;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
          box-shadow: 0 0 0 6px #f0fdf4;
        }

        .success-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .success-text {
          font-size: 0.925rem;
          color: #334155;
          line-height: 1.6;
          margin: 0 0 1.75rem 0;
        }

        .success-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .btn-modal-zalo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 48px;
          padding: 0.75rem 1.5rem;
          background-color: #0d7647;
          color: #ffffff;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(13, 118, 71, 0.25);
        }

        .btn-modal-call {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 46px;
          padding: 0.65rem 1.25rem;
          background-color: #ffffff;
          color: #074e2e;
          border: 1.5px solid #0d7647;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
        }

        .btn-modal-close {
          min-height: 42px;
          padding: 0.5rem 1rem;
          background: none;
          border: 1px solid #cbd5e1;
          color: #64748b;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
        }

        .btn-modal-close:hover {
          background-color: #f8fafc;
          color: #0f172a;
        }
      `}</style>
    </div>
  );
};

export default LeadModal;
