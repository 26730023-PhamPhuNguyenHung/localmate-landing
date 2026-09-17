import React from 'react';
import { Bot, PhoneCall, MessageSquare, CheckCircle2, ArrowDown } from 'lucide-react';
import { Container } from '../../ui/Container';
import { CONTACT_INFO } from '../../../data/landingContent';
import { trackPhoneClick, trackZaloClick } from '../../../analytics/tracker';
import { GeoLeadFormCard } from './GeoLeadFormCard';

interface GeoHeroSectionProps {
  onScrollToPricing: () => void;
}

export const GeoHeroSection: React.FC<GeoHeroSectionProps> = ({ onScrollToPricing }) => {
  return (
    <section className="geo-hero-viewport" id="geo-hero">
      <Container size="wide">
        <div className="gh-inner-grid">
          {/* Left Column: Value Prop & Authority */}
          <div className="gh-copy-column">
            {/* Category Pill Tag */}
            <div className="gh-pill">
              <span className="gh-pill-dot" />
              <Bot size={15} className="gh-pill-icon" />
              <span className="gh-pill-text">SEO ChatGPT · GEO · AI Search Optimization</span>
            </div>

            {/* Main Headline (2 lines, strong contrast, no word breaking) */}
            <h1 className="gh-title">
              <span className="gh-line gh-line-1">KHÁCH HỎI CHATGPT VỀ DỊCH VỤ CỦA BẠN.</span>
              <span className="gh-line gh-line-2">AI CÓ NHẮC ĐẾN BẠN KHÔNG?</span>
            </h1>

            {/* Sub-headline */}
            <p className="gh-sub">
              Chúng tôi giúp website tối ưu tín hiệu thực thể để tăng khả năng được{' '}
              <strong>ChatGPT, Gemini, Perplexity và Google AI</strong> tìm thấy, hiểu đúng và đề xuất khi khách hàng hỏi mua dịch vụ.
            </p>

            {/* AI Platform Badges */}
            <div className="gh-platforms">
              <span className="gh-plat-label">Nền tảng AI tối ưu:</span>
              <div className="gh-plat-list">
                <span className="gh-chip"><span className="gh-dot chatgpt" /> ChatGPT</span>
                <span className="gh-chip"><span className="gh-dot gemini" /> Google Gemini</span>
                <span className="gh-chip"><span className="gh-dot perplexity" /> Perplexity</span>
                <span className="gh-chip"><span className="gh-dot google-ai" /> Google AI</span>
              </div>
            </div>

            {/* 3 Trust Proof Bullets */}
            <div className="gh-proof-points">
              <div className="gh-proof-item">
                <CheckCircle2 size={16} className="gh-proof-check" />
                <span>Phù hợp với doanh nghiệp đã có website</span>
              </div>
              <div className="gh-proof-item">
                <CheckCircle2 size={16} className="gh-proof-check" />
                <span>Kiểm tra hiện trạng nhanh trong vài phút</span>
              </div>
              <div className="gh-proof-item">
                <CheckCircle2 size={16} className="gh-proof-check" />
                <span>Không cần hiểu kỹ thuật phức tạp</span>
              </div>
            </div>

            {/* Quick Contacts & Scroll Indicator */}
            <div className="gh-actions-row">
              <div className="gh-contacts">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  onClick={() => trackPhoneClick('hero_left_call')}
                  className="gh-contact-btn call"
                >
                  <PhoneCall size={15} />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <a
                  href={CONTACT_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackZaloClick('hero_left_zalo')}
                  className="gh-contact-btn zalo"
                >
                  <MessageSquare size={15} />
                  <span>Chat Zalo</span>
                </a>
              </div>

              <button
                type="button"
                onClick={onScrollToPricing}
                className="gh-scroll-indicator"
                aria-label="Cuộn xem bảng giá"
              >
                <span>Xem bảng giá</span>
                <ArrowDown size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Lead Form Card Anchor */}
          <div className="gh-form-column">
            <GeoLeadFormCard
              id="hero-audit-form"
              variant="light"
              title="Kiểm tra miễn phí thương hiệu trên AI"
              subtitle="Nhập website để nhận phân tích hiện trạng:"
              ctaText="KIỂM TRA AI VISIBILITY MIỄN PHÍ"
              sourceContext="hero_audit_card"
              selectedPackage="Gói GEO Setup 2.490.000đ"
            />
          </div>
        </div>
      </Container>

      <style>{`
        .geo-hero-viewport {
          min-height: calc(100svh - 72px);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          padding-top: clamp(24px, 3.5vh, 48px);
          padding-bottom: clamp(24px, 3.5vh, 48px);
          box-sizing: border-box;
          position: relative;
        }

        .gh-inner-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: clamp(28px, 3.5vw, 56px);
          align-items: center;
          width: 100%;
        }

        @media (max-width: 991px) {
          .geo-hero-viewport {
            min-height: auto;
            padding-top: 32px;
            padding-bottom: 40px;
          }
          .gh-inner-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .gh-copy-column {
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 1.6vh, 18px);
          text-align: left;
        }

        .gh-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          background-color: #edf7f1;
          border: 1px solid #c6ebd4;
          border-radius: 9999px;
          width: fit-content;
        }

        .gh-pill-dot {
          width: 8px;
          height: 8px;
          background-color: #16a34a;
          border-radius: 50%;
          display: inline-block;
          animation: ghPulse 2s infinite;
        }

        @keyframes ghPulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(22, 163, 74, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
        }

        .gh-pill-icon { color: #0d7647; }
        .gh-pill-text {
          font-size: 12.5px;
          font-weight: 800;
          color: #0d7647;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .gh-title {
          font-size: clamp(21px, 2.25vw, 33px);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.015em;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gh-line {
          display: block;
          word-break: keep-all;
          overflow-wrap: normal;
        }

        .gh-line-1 { color: #0f172a; }
        .gh-line-2 { color: #0d7647; }

        .gh-sub {
          font-size: clamp(14.5px, 1.2vw, 17px);
          line-height: 1.6;
          color: #334155;
          margin: 0;
          text-wrap: pretty;
        }

        .gh-sub strong {
          color: #0f172a;
          font-weight: 750;
        }

        .gh-platforms {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .gh-plat-label {
          font-size: 12px;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .gh-plat-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .gh-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 12.5px;
          font-weight: 650;
          color: #0f172a;
        }

        .gh-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .gh-dot.chatgpt { background-color: #10a37f; }
        .gh-dot.gemini { background-color: #1a73e8; }
        .gh-dot.perplexity { background-color: #20b2aa; }
        .gh-dot.google-ai { background-color: #ea4335; }

        .gh-proof-points {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 10px 14px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
        }

        .gh-proof-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #1e293b;
          font-weight: 600;
        }

        .gh-proof-check {
          color: #0d7647;
          flex-shrink: 0;
        }

        .gh-actions-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 8px;
          border-top: 1px solid #f1f5f9;
        }

        .gh-contacts {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gh-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
          min-height: 38px;
          box-sizing: border-box;
          transition: background-color 0.15s ease;
        }

        .gh-contact-btn.call {
          background-color: #f8fafc;
          color: #0f172a;
          border: 1px solid #cbd5e1;
        }

        .gh-contact-btn.call:hover { background-color: #e2e8f0; }

        .gh-contact-btn.zalo {
          background-color: #e0f2fe;
          color: #0284c7;
          border: 1px solid #bae6fd;
        }

        .gh-contact-btn.zalo:hover { background-color: #bae6fd; }

        .gh-scroll-indicator {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          color: #0d7647;
          font-size: 13px;
          font-weight: 750;
          cursor: pointer;
          padding: 6px 8px;
        }

        .gh-scroll-indicator:hover {
          text-decoration: underline;
        }

        .gh-form-column {
          width: 100%;
        }
      `}</style>
    </section>
  );
};
