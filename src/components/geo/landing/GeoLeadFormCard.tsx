import React, { useState } from 'react';
import { Sparkles, Globe, Phone, Zap, ShieldCheck, CheckCircle2, Check, MessageSquare } from 'lucide-react';
import { submitLead } from '../../../services/leadService';
import { trackCTAClick } from '../../../analytics/tracker';
import { CONTACT_INFO } from '../../../data/landingContent';

interface GeoLeadFormCardProps {
  id?: string;
  variant?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
  checkpoints?: string[];
  ctaText?: string;
  selectedPackage?: string;
  sourceContext?: string;
}

export const GeoLeadFormCard: React.FC<GeoLeadFormCardProps> = ({
  id = 'geo-lead-form',
  variant = 'light',
  title = 'Kiểm tra miễn phí thương hiệu của bạn trên AI',
  subtitle = 'Nhập website, chúng tôi kiểm tra:',
  checkpoints = [
    'AI hiện có biết đến thương hiệu không',
    'Khi hỏi về dịch vụ của bạn, AI đang đề xuất ai',
    'Website đang thiếu tín hiệu gì',
    'Những truy vấn nào nên ưu tiên trước'
  ],
  ctaText = 'KIỂM TRA AI VISIBILITY MIỄN PHÍ',
  selectedPackage = 'Gói GEO Setup 2.490.000đ',
  sourceContext = 'hero_form'
}) => {
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!website.trim()) {
      setErrorMsg('Vui lòng nhập địa chỉ website hoặc tên doanh nghiệp.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMsg('Vui lòng nhập số điện thoại hoặc Zalo hợp lệ.');
      return;
    }

    setIsSubmitting(true);
    trackCTAClick(ctaText, sourceContext);

    try {
      await submitLead({
        name: `Khách GEO (${website.trim()})`,
        phone: phone.trim(),
        businessName: website.trim(),
        serviceInterest: `Dịch vụ GEO AI Search - ${selectedPackage}`,
        message: `Đăng ký Audit AI Visibility (${sourceContext}) | Website: ${website.trim()} | SĐT/Zalo: ${phone.trim()}`,
        sourcePage: '/geo'
      });
      setIsSuccess(true);
    } catch (err) {
      setErrorMsg('Có lỗi xảy ra khi gửi thông tin. Vui lòng kết nối trực tiếp qua Zalo/Hotline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === 'dark';

  return (
    <div className={`geo-lead-form-card ${isDark ? 'is-dark' : 'is-light'}`} id={id}>
      {/* Header */}
      <div className="glf-header">
        <div className="glf-icon-badge">
          <Sparkles size={20} className="glf-sparkle" />
        </div>
        <div className="glf-header-text">
          <h3 className="glf-title">{title}</h3>
          {subtitle && <p className="glf-subtitle">{subtitle}</p>}
        </div>
      </div>

      {/* Checkpoints Grid */}
      {checkpoints && checkpoints.length > 0 && (
        <div className="glf-checkpoints-grid">
          {checkpoints.map((cp, idx) => (
            <div key={idx} className="glf-checkpoint-item">
              <CheckCircle2 size={16} className="glf-check-icon" />
              <span>{cp}</span>
            </div>
          ))}
        </div>
      )}

      {/* Success State */}
      {isSuccess ? (
        <div className="glf-success-box">
          <div className="glf-success-icon">
            <Check size={26} />
          </div>
          <h4 className="glf-success-title">Đã tiếp nhận yêu cầu kiểm tra!</h4>
          <p className="glf-success-desc">
            Kỹ thuật viên LocalMate sẽ phân tích AI Visibility cho <strong>{website}</strong> và gửi báo cáo chi tiết về Zalo <strong>{phone}</strong> trong vòng 2-4h làm việc.
          </p>
          <a
            href={CONTACT_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glf-zalo-direct-btn"
          >
            <MessageSquare size={16} />
            <span>Nhắn Zalo nhận báo cáo ưu tiên</span>
          </a>
        </div>
      ) : (
        /* Form Inputs */
        <form onSubmit={handleSubmit} className="glf-form">
          {errorMsg && (
            <div className="glf-error" role="alert">
              {errorMsg}
            </div>
          )}

          <div className="glf-fields-row">
            <div className="glf-field-group">
              <label htmlFor={`${id}-website`} className="glf-label">
                Website của bạn
              </label>
              <div className="glf-input-wrapper">
                <Globe size={18} className="glf-input-icon" />
                <input
                  id={`${id}-website`}
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="vd: yourwebsite.vn hoặc tên quán"
                  className="glf-input"
                  required
                />
              </div>
            </div>

            <div className="glf-field-group">
              <label htmlFor={`${id}-phone`} className="glf-label">
                Số điện thoại / Zalo
              </label>
              <div className="glf-input-wrapper">
                <Phone size={18} className="glf-input-icon" />
                <input
                  id={`${id}-phone`}
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="vd: 0912 345 678 (để nhận kết quả)"
                  className="glf-input"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="glf-submit-button"
          >
            {isSubmitting ? (
              <span>Đang gửi thông tin...</span>
            ) : (
              <>
                <Zap size={18} />
                <span>{ctaText}</span>
              </>
            )}
          </button>

          {/* Microcopy Trust Guarantee */}
          <div className="glf-disclaimer">
            <ShieldCheck size={16} className="glf-shield-icon" />
            <span>
              Không cam kết “ép ChatGPT lên top”. Chúng tôi đo lường hiện trạng và tối ưu những yếu tố có thể tác động.
            </span>
          </div>
        </form>
      )}

      <style>{`
        .geo-lead-form-card {
          width: 100%;
          border-radius: 20px;
          padding: clamp(20px, 2.5vw, 30px);
          box-sizing: border-box;
          text-align: left;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .geo-lead-form-card.is-light {
          background-color: #ffffff;
          border: 2px solid #0d7647;
          box-shadow: 0 14px 34px -8px rgba(13, 118, 71, 0.16), 0 4px 12px -2px rgba(13, 118, 71, 0.06);
        }

        .geo-lead-form-card.is-dark {
          background-color: #0f172a;
          color: #ffffff;
          border: 2px solid #16a34a;
          box-shadow: 0 20px 36px -10px rgba(15, 23, 42, 0.4);
        }

        .glf-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .glf-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .is-light .glf-icon-badge {
          background-color: #edf7f1;
          color: #0d7647;
        }

        .is-dark .glf-icon-badge {
          background-color: rgba(22, 163, 74, 0.2);
          color: #4ade80;
        }

        .glf-header-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .glf-title {
          font-size: clamp(17px, 1.8vw, 21px);
          font-weight: 850;
          margin: 0;
          line-height: 1.3;
          word-break: keep-all;
        }

        .is-light .glf-title { color: #0f172a; }
        .is-dark .glf-title { color: #ffffff; }

        .glf-subtitle {
          font-size: 13.5px;
          font-weight: 650;
          margin: 0;
        }

        .is-light .glf-subtitle { color: #0d7647; }
        .is-dark .glf-subtitle { color: #86efac; }

        .glf-checkpoints-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 16px;
          border-radius: 12px;
          padding: 12px 16px;
          margin-bottom: 18px;
        }

        .is-light .glf-checkpoints-grid {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        .is-dark .glf-checkpoints-grid {
          background-color: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        @media (max-width: 600px) {
          .glf-checkpoints-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }

        .glf-checkpoint-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 550;
        }

        .is-light .glf-checkpoint-item { color: #1e293b; }
        .is-dark .glf-checkpoint-item { color: #e2e8f0; }

        .glf-check-icon {
          color: #16a34a;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .glf-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .glf-fields-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        @media (max-width: 600px) {
          .glf-fields-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        .glf-field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .glf-label {
          font-size: 13.5px;
          font-weight: 750;
        }

        .is-light .glf-label { color: #0f172a; }
        .is-dark .glf-label { color: #e2e8f0; }

        .glf-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .glf-input-icon {
          position: absolute;
          left: 14px;
          pointer-events: none;
        }

        .is-light .glf-input-icon { color: #64748b; }
        .is-dark .glf-input-icon { color: #94a3b8; }

        .glf-input {
          width: 100%;
          min-height: 48px;
          padding: 10px 14px 10px 42px;
          font-size: 14.5px;
          border-radius: 10px;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .is-light .glf-input {
          background-color: #ffffff;
          color: #0f172a;
          border: 1.5px solid #cbd5e1;
        }

        .is-light .glf-input:focus {
          border-color: #0d7647;
          box-shadow: 0 0 0 3px rgba(13, 118, 71, 0.15);
        }

        .is-dark .glf-input {
          background-color: #1e293b;
          color: #ffffff;
          border: 1.5px solid #334155;
        }

        .is-dark .glf-input:focus {
          border-color: #4ade80;
          box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.25);
        }

        .glf-submit-button {
          width: 100%;
          min-height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 850;
          cursor: pointer;
          letter-spacing: 0.02em;
          border: none;
          transition: all 0.15s ease;
          box-sizing: border-box;
        }

        .is-light .glf-submit-button {
          background-color: #0d7647;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(13, 118, 71, 0.25);
        }

        .is-light .glf-submit-button:hover:not(:disabled) {
          background-color: #095935;
          transform: translateY(-1px);
        }

        .is-dark .glf-submit-button {
          background-color: #16a34a;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(22, 163, 74, 0.35);
        }

        .is-dark .glf-submit-button:hover:not(:disabled) {
          background-color: #15803d;
          transform: translateY(-1px);
        }

        .glf-submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .glf-disclaimer {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 6px;
          font-size: 12.5px;
          line-height: 1.45;
          text-align: center;
        }

        .is-light .glf-disclaimer { color: #64748b; }
        .is-dark .glf-disclaimer { color: #94a3b8; }

        .glf-shield-icon {
          color: #16a34a;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .glf-error {
          background-color: #fef2f2;
          border: 1px solid #fecaca;
          color: #b91c1c;
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 13px;
        }

        .glf-success-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          padding: 20px 14px;
          border-radius: 12px;
        }

        .is-light .glf-success-box {
          background-color: #edf7f1;
          border: 1.5px solid #c6ebd4;
        }

        .is-dark .glf-success-box {
          background-color: rgba(22, 163, 74, 0.15);
          border: 1.5px solid rgba(74, 222, 128, 0.3);
        }

        .glf-success-icon {
          width: 44px;
          height: 44px;
          background-color: #16a34a;
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glf-success-title {
          font-size: 17px;
          font-weight: 800;
          margin: 0;
        }

        .glf-success-desc {
          font-size: 13.5px;
          line-height: 1.5;
          margin: 0;
        }

        .glf-zalo-direct-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background-color: #0284c7;
          color: #ffffff;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          margin-top: 4px;
        }
      `}</style>
    </div>
  );
};
