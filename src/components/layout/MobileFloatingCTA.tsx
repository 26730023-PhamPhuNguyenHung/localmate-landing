import React from 'react';
import { PhoneCall, MessageCircle, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';
import { trackPhoneClick, trackZaloClick, trackCTAClick } from '../../analytics/tracker';

interface MobileFloatingCTAProps {
  onOpenConsultForm: () => void;
}

export const MobileFloatingCTA: React.FC<MobileFloatingCTAProps> = ({ onOpenConsultForm }) => {
  const handleCallClick = () => {
    trackPhoneClick('mobile_floating_bar');
  };

  const handleZaloClick = () => {
    trackZaloClick('mobile_floating_bar');
  };

  const handleConsultClick = () => {
    trackCTAClick('Đăng ký tư vấn', 'mobile_floating_bar');
    onOpenConsultForm();
  };

  return (
    <nav
      className="mobile-floating-bar"
      aria-label="Thanh liên hệ nhanh di động"
      role="navigation"
    >
      {/* 1. Nút Gọi điện */}
      <a
        href={`tel:${CONTACT_INFO.phoneRaw}`}
        onClick={handleCallClick}
        className="floating-btn floating-btn-call"
        aria-label={`Gọi điện thoại tư vấn ngay: ${CONTACT_INFO.phoneRaw}`}
      >
        <span className="floating-btn-icon-wrapper call-icon-bg">
          <PhoneCall size={16} className="floating-btn-icon" />
        </span>
        <span className="floating-btn-text">Gọi điện</span>
      </a>

      {/* 2. Nút Nhắn Zalo */}
      <a
        href={CONTACT_INFO.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleZaloClick}
        className="floating-btn floating-btn-zalo"
        aria-label="Nhắn tin Zalo tư vấn 24/7"
      >
        <span className="floating-btn-icon-wrapper zalo-icon-bg">
          <MessageCircle size={16} className="floating-btn-icon" />
        </span>
        <span className="floating-btn-text">Nhắn Zalo</span>
      </a>

      {/* 3. Nút Đăng ký tư vấn (Primary CTA nổi bật) */}
      <button
        type="button"
        onClick={handleConsultClick}
        className="floating-btn floating-btn-primary"
        aria-label="Đăng ký tư vấn demo miễn phí"
      >
        <Sparkles size={16} className="floating-btn-icon" />
        <span className="floating-btn-text">Đăng ký tư vấn</span>
      </button>

      <style>{`
        /* Mobile Floating Quick Contacts — Tham chiếu phong cách Sao Sáng Edu */
        .mobile-floating-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 999;
          background-color: #ffffff; /* Strict Solid Light Surface - NO Glassmorphism */
          border-top: 1px solid #e2e8f0;
          box-shadow: 0 -3px 16px rgba(15, 23, 42, 0.08), 0 -1px 3px rgba(15, 23, 42, 0.04);
          padding-top: 8px;
          padding-bottom: max(8px, env(safe-area-inset-bottom, 8px));
          padding-left: max(10px, env(safe-area-inset-left, 10px));
          padding-right: max(10px, env(safe-area-inset-right, 10px));
          box-sizing: border-box;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        @media (max-width: 768px) {
          .mobile-floating-bar {
            display: flex !important;
          }
          body {
            padding-bottom: calc(66px + env(safe-area-inset-bottom, 0px)) !important;
          }
        }

        /* Touch Target & Ergonomics: Chuẩn tối thiểu >= 44x44px, bo góc mềm mại 12px */
        .floating-btn {
          min-height: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-family: inherit;
          font-weight: 700;
          font-size: 0.825rem;
          line-height: 1;
          text-decoration: none;
          border-radius: 12px;
          box-sizing: border-box;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          transition: transform 0.12s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.15s ease,
                      box-shadow 0.15s ease;
        }

        .floating-btn:active {
          transform: scale(0.97);
        }

        .floating-btn-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .floating-btn-icon {
          flex-shrink: 0;
        }

        .floating-btn-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* 1. Nút Gọi điện - Nền ấm vàng cam nhẹ, chữ cam đậm rõ nét */
        .floating-btn-call {
          flex: 0 0 auto;
          min-width: 82px;
          padding: 0 10px;
          background-color: #fff7ed;
          border: 1px solid #fed7aa;
          color: #9a3412;
        }

        .floating-btn-call .call-icon-bg {
          color: #ea580c;
        }

        .floating-btn-call:hover {
          background-color: #ffedd5;
          border-color: #fdba74;
        }

        /* 2. Nút Nhắn Zalo - Nền xanh lam nhạt dịu mắt, chữ xanh đậm */
        .floating-btn-zalo {
          flex: 0 0 auto;
          min-width: 90px;
          padding: 0 10px;
          background-color: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1d4ed8;
        }

        .floating-btn-zalo .zalo-icon-bg {
          color: #0284c7;
        }

        .floating-btn-zalo:hover {
          background-color: #dbeafe;
          border-color: #93c5fd;
        }

        /* 3. Nút Đăng ký tư vấn - Màu xanh thương hiệu Primary Green nổi bật nhất */
        .floating-btn-primary {
          flex: 1 1 auto;
          padding: 0 12px;
          background-color: #0d7647;
          border: 1px solid #095935;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(13, 118, 71, 0.28);
          letter-spacing: 0.01em;
        }

        .floating-btn-primary:hover {
          background-color: #095935;
          box-shadow: 0 4px 12px rgba(13, 118, 71, 0.35);
        }

        /* Màn hình siêu nhỏ (<= 360px): Tự động co giãn hợp lý, chống tràn chữ */
        @media (max-width: 360px) {
          .mobile-floating-bar {
            gap: 5px;
            padding-left: 6px;
            padding-right: 6px;
          }
          .floating-btn {
            font-size: 0.775rem;
            gap: 4px;
            padding: 0 6px;
          }
          .floating-btn-call {
            min-width: 74px;
            padding: 0 6px;
          }
          .floating-btn-zalo {
            min-width: 80px;
            padding: 0 6px;
          }
        }
      `}</style>
    </nav>
  );
};

export default MobileFloatingCTA;
