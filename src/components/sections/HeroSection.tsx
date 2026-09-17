import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import {
  ArrowRight,
  Sparkles,
  Check,
  ExternalLink,
  ShieldCheck,
  Star,
  Lock,
  Smartphone,
  Zap
} from 'lucide-react';
import { useRouter } from '../layout/Router';

interface IndustryDemo {
  id: string;
  name: string;
  tabLabel: string;
  emoji: string;
  title: string;
  domain: string;
  liveUrl: string;
  tagline: string;
  features: string[];
  rating: string;
  reviewCount: string;
  badge: string;
  illustration: string;
  accentColor: string;
  highlightStat: string;
}

const HERO_DEMOS: IndustryDemo[] = [
  {
    id: 'fnb',
    name: 'Quán ăn & Nhà hàng',
    tabLabel: 'Quán ăn / F&B',
    emoji: '🍽️',
    title: 'Nhà Hàng Ẩm Thực XÈO',
    domain: 'xeorestaurant.localmate.vn',
    liveUrl: 'https://xeorestaurant.localmate.vn',
    tagline: 'Thực đơn điện tử quét mã QR, hiển thị ảnh món hấp dẫn, khách tự xem và bấm gọi đặt bàn chỉ với 1 chạm.',
    features: [
      'Thực đơn QR tải siêu tốc dưới 1s',
      'Ghim Google Maps chỉ đường tận cửa',
      'Nút gọi Hotline & nhắn Zalo đặt bàn ngay'
    ],
    rating: '5.0',
    reviewCount: '128 đánh giá',
    badge: 'Tăng 40% khách đặt bàn',
    illustration: '/assets/illustrations/hero-store-phone.png',
    accentColor: '#0d7647',
    highlightStat: 'Tải trang 0.8s'
  },
  {
    id: 'spa',
    name: 'Spa & Làm đẹp',
    tabLabel: 'Spa / Làm đẹp',
    emoji: '💆',
    title: 'Hương Sen Beauty & Spa',
    domain: 'huongsenspa.localmate.vn',
    liveUrl: 'https://huongsenspa.localmate.vn',
    tagline: 'Website làm đẹp sang trọng, niêm yết bảng giá liệu trình minh bạch, khách xem dịch vụ và đặt lịch trước dễ dàng.',
    features: [
      'Đặt lịch hẹn liệu trình trực tuyến',
      'Bảng giá các gói rõ ràng, không phát sinh',
      'Đánh giá 5 sao chân thực từ Google Maps'
    ],
    rating: '4.9',
    reviewCount: '95 đánh giá',
    badge: 'Khách đặt hẹn chủ động',
    illustration: '/assets/illustrations/mascot-conversion-growth.png',
    accentColor: '#0d7647',
    highlightStat: 'Giảm 70% cuộc gọi hỏi giá'
  },
  {
    id: 'construction',
    name: 'Xây dựng & Nội thất',
    tabLabel: 'Xây dựng / Nội thất',
    emoji: '🏗️',
    title: 'Xây Dựng & Nội Thất Nam Phát',
    domain: 'namphatbuild.localmate.vn',
    liveUrl: 'https://namphatbuild.localmate.vn',
    tagline: 'Hồ sơ năng lực công trình sắc nét, minh bạch quy trình dự toán giúp chủ nhà thầu tạo niềm tin tuyệt đối khi gửi báo giá.',
    features: [
      'Thư viện ảnh công trình thật đã thi công',
      'Bảng báo giá dự toán theo từng hạng mục',
      'Cam kết hợp đồng & tiến độ thi công rõ ràng'
    ],
    rating: '5.0',
    reviewCount: 'Doanh nghiệp uy tín',
    badge: 'Tăng tỷ lệ chốt hợp đồng',
    illustration: '/assets/illustrations/pricing-laptop-analytics.png',
    accentColor: '#0d7647',
    highlightStat: 'Chuẩn hồ sơ thầu'
  },
  {
    id: 'retail',
    name: 'Cửa hàng bán lẻ',
    tabLabel: 'Cửa hàng bán lẻ',
    emoji: '🛍️',
    title: 'Cửa Hàng Bán Lẻ & Dịch Vụ Phố',
    domain: 'cuahang.localmate.vn',
    liveUrl: 'https://localmate.vn',
    tagline: 'Trưng bày danh mục sản phẩm nổi bật, khách xung quanh mở bản đồ là thấy cửa hàng và bấm nhắn tin Zalo mua ngay.',
    features: [
      'Danh mục mặt hàng trực quan, dễ tìm kiếm',
      'Ghim định vị tiệm trên Google Maps tìm kiếm',
      'Nút gọi mua hàng & tư vấn nhanh qua Zalo'
    ],
    rating: '5.0',
    reviewCount: 'Khách địa phương tin dùng',
    badge: 'Khách tìm là thấy tiệm',
    illustration: '/assets/illustrations/mascot-local-map.png',
    accentColor: '#0d7647',
    highlightStat: 'Xuất hiện top Google Maps'
  }
];

interface HeroSectionProps {
  onOpenDemoForm?: (serviceOrIndustry?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemoForm }) => {
  const { navigate } = useRouter();
  const [activeIndustryId, setActiveIndustryId] = useState<string>('fnb');

  const currentDemo = HERO_DEMOS.find((d) => d.id === activeIndustryId) || HERO_DEMOS[0];

  return (
    <section
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative'
      }}
      id="hero"
    >
      <Container size="lg" style={{ paddingInline: 'clamp(16px, 4vw, 24px)' }}>
        <div className="hero-centered-content">
          {/* Eyebrow Pill */}
          <div className="hero-eyebrow-wrapper">
            <span className="hero-eyebrow-pill">
              <Sparkles size={14} color="var(--color-primary)" className="sparkle-icon" />
              <span>WEBSITE • GOOGLE MAPS • QUẢNG CÁO • NỘI DUNG</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            Giúp doanh nghiệp nhỏ có website, lên Google <span className="headline-highlight">và tìm thêm khách.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Chọn đúng việc bạn cần: làm website bán hàng, lên Google Maps, chạy Google Ads hoặc viết bài Facebook mỗi tháng.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                if (onOpenDemoForm) {
                  onOpenDemoForm(`Tư vấn Web Demo 0đ (${currentDemo.name})`);
                } else {
                  navigate('/lien-he');
                }
              }}
              className="hero-btn-action hero-btn-primary"
            >
              <Sparkles size={17} />
              <span>Nhận website demo 0đ</span>
              <ArrowRight size={17} />
            </Button>

            <Button
              variant="white"
              size="lg"
              onClick={() => {
                const el = document.getElementById('can-lam-gi') || document.getElementById('bang-gia');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/bang-gia');
                }
              }}
              className="hero-btn-action hero-btn-secondary"
            >
              <span>Xem dịch vụ &amp; giá</span>
            </Button>
          </div>

          {/* Interactive Industry Selector */}
          <div className="hero-industry-selector-wrapper">
            <div className="hero-industry-label">
              <span>👉 Bấm chọn ngành nghề của bạn để xem trước giao diện mẫu:</span>
            </div>
            <div className="hero-industry-tabs" role="tablist" aria-label="Chọn ngành nghề">
              {HERO_DEMOS.map((demo) => {
                const isActive = demo.id === activeIndustryId;
                return (
                  <button
                    key={demo.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndustryId(demo.id)}
                    className={`industry-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <span className="tab-emoji">{demo.emoji}</span>
                    <span className="tab-text">{demo.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clean Mockup Interactive Preview Card */}
          <div className="hero-mockup-card">
            {/* Browser Header Bar */}
            <div className="mockup-browser-bar">
              <div className="mockup-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="mockup-url-bar">
                <Lock size={12} className="url-lock-icon" />
                <span className="url-text">https://{currentDemo.domain}</span>
              </div>
              <div className="mockup-status-tag">
                <span className="status-indicator-dot" />
                <span>Trực tuyến</span>
              </div>
            </div>

            {/* Mockup Body Content */}
            <div className="mockup-body-grid">
              {/* Left Column: Solution Details & Actions */}
              <div className="mockup-info-col">
                <div className="mockup-badge-row">
                  <span className="mockup-industry-badge">
                    <ShieldCheck size={13} />
                    <span>{currentDemo.name}</span>
                  </span>
                  <span className="mockup-highlight-pill">{currentDemo.badge}</span>
                </div>

                <h3 className="mockup-project-title">{currentDemo.title}</h3>
                <p className="mockup-tagline">{currentDemo.tagline}</p>

                {/* 3 Core Value Features */}
                <div className="mockup-features-list">
                  {currentDemo.features.map((feature, idx) => (
                    <div key={idx} className="mockup-feature-item">
                      <div className="mockup-check-circle">
                        <Check size={13} strokeWidth={2.8} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Rating Proof & Tech Specs */}
                <div className="mockup-proof-row">
                  <div className="mockup-rating-box">
                    <div className="stars-row">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <span className="rating-score">{currentDemo.rating}</span>
                    <span className="rating-desc">({currentDemo.reviewCount})</span>
                  </div>
                  <div className="mockup-stat-pill">
                    <Zap size={13} color="#16a34a" />
                    <span>{currentDemo.highlightStat}</span>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="mockup-actions-row">
                  <a
                    href={currentDemo.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mockup-action-btn mockup-btn-live"
                  >
                    <span>Trải nghiệm web mẫu thật</span>
                    <ExternalLink size={15} />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenDemoForm) {
                        onOpenDemoForm(`Web mẫu ${currentDemo.name}`);
                      } else {
                        navigate('/lien-he');
                      }
                    }}
                    className="mockup-action-btn mockup-btn-request"
                  >
                    <Sparkles size={15} />
                    <span>Đăng ký làm web giống mẫu này 0đ</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Device Simulation */}
              <div className="mockup-preview-col">
                <div className="preview-device-screen">
                  {/* Phone Header Mini */}
                  <div className="device-top-notch">
                    <span className="notch-speaker" />
                  </div>

                  {/* Visual Showcase Card */}
                  <div className="device-content-frame">
                    <div className="device-brand-bar">
                      <div className="brand-dot" />
                      <span className="brand-name">{currentDemo.title}</span>
                      <span className="brand-status">Open</span>
                    </div>

                    <div className="device-hero-image-wrap">
                      <img
                        src={currentDemo.illustration}
                        alt={`Giao diện mẫu ${currentDemo.name}`}
                        className="device-preview-img"
                        loading="lazy"
                      />
                    </div>

                    {/* Quick Mockup Interactive Buttons */}
                    <div className="device-quick-actions">
                      <div className="device-action-chip">
                        <span>📞 Gọi ngay</span>
                      </div>
                      <div className="device-action-chip active-chip">
                        <span>📍 Chỉ đường Maps</span>
                      </div>
                      <div className="device-action-chip">
                        <span>💬 Nhắn tin</span>
                      </div>
                    </div>

                    <div className="device-spec-footer">
                      <span className="spec-badge">
                        <Smartphone size={12} />
                        <span>Tối ưu 100% điện thoại</span>
                      </span>
                      <span className="spec-badge">
                        <ShieldCheck size={12} />
                        <span>Chuẩn Google SEO</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Item Trust Grid — Clean & Crisp */}
          <div className="hero-trust-strip">
            <div className="trust-strip-item">
              <Check size={16} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Báo giá trước khi làm</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={16} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Xem thử demo 0đ</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={16} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Bàn giao tài khoản chính chủ</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={16} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Hỗ trợ trọn đời sau bàn giao</span>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .hero-centered-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .hero-eyebrow-wrapper {
          display: inline-flex;
          margin-bottom: 1.15rem;
        }

        .hero-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-full);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .sparkle-icon {
          flex-shrink: 0;
        }

        .hero-headline {
          font-size: clamp(1.9rem, 5vw, 3.25rem);
          color: var(--color-navy);
          font-weight: 800;
          line-height: 1.22;
          letter-spacing: -0.025em;
          margin: 0 0 1rem 0;
          text-align: center;
          text-wrap: balance;
        }

        .headline-highlight {
          color: var(--color-primary);
          display: inline;
        }

        .hero-subtitle {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0 auto 1.75rem auto;
          max-width: 640px;
          text-align: center;
          text-wrap: pretty;
        }

        .hero-cta-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
          max-width: 440px;
          margin-bottom: 2.25rem;
        }

        @media (min-width: 520px) {
          .hero-cta-group {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: auto;
            max-width: none;
          }
        }

        .hero-btn-action {
          width: 100%;
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        @media (min-width: 520px) {
          .hero-btn-action {
            width: auto;
          }
        }

        /* Industry Selector */
        .hero-industry-selector-wrapper {
          width: 100%;
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.65rem;
        }

        .hero-industry-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-wrap: pretty;
        }

        .hero-industry-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          max-width: 100%;
          overflow-x: auto;
          padding: 0.25rem 0.5rem 0.5rem 0.5rem;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .hero-industry-tabs::-webkit-scrollbar {
          display: none;
        }

        .industry-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.6rem 1.15rem;
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 700;
          border: 1.5px solid var(--color-border);
          background-color: #ffffff;
          color: var(--color-navy);
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
        }

        .industry-tab-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
        }

        .industry-tab-btn.active {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(13, 118, 71, 0.2);
        }

        .tab-emoji {
          font-size: 1.05rem;
          line-height: 1;
        }

        /* Mockup Card Container — Zero Glassmorphism */
        .hero-mockup-card {
          width: 100%;
          max-width: 960px;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          margin-bottom: 2.25rem;
          text-align: left;
        }

        /* Browser Header */
        .mockup-browser-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.65rem 1.25rem;
          background-color: #f8fafc;
          border-bottom: 1px solid var(--color-border);
          gap: 1rem;
        }

        .mockup-dots {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-shrink: 0;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #f59e0b; }
        .dot-green { background-color: #10b981; }

        .mockup-url-bar {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          padding: 0.25rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-text-muted);
          max-width: 380px;
          width: 100%;
          justify-content: center;
        }

        .url-lock-icon {
          color: #16a34a;
          flex-shrink: 0;
        }

        .url-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .mockup-status-tag {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #16a34a;
          flex-shrink: 0;
        }

        .status-indicator-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #16a34a;
          box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);
        }

        /* Mockup Grid */
        .mockup-body-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          padding: 1.5rem;
        }

        @media (min-width: 860px) {
          .mockup-body-grid {
            grid-template-columns: 1.15fr 0.85fr;
            padding: 2rem 2.25rem;
            gap: 2rem;
            align-items: center;
          }
        }

        /* Left Info Column */
        .mockup-info-col {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .mockup-badge-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .mockup-industry-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background-color: var(--color-primary-soft);
          color: var(--color-primary-dark);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .mockup-highlight-pill {
          display: inline-flex;
          align-items: center;
          background-color: #fef3c7;
          color: #92400e;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .mockup-project-title {
          font-size: clamp(1.25rem, 2.5vw, 1.6rem);
          font-weight: 800;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.3;
        }

        .mockup-tagline {
          font-size: 0.92rem;
          color: var(--color-text);
          line-height: 1.55;
          margin: 0;
          text-wrap: pretty;
        }

        .mockup-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 0.35rem 0;
        }

        .mockup-feature-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-navy);
        }

        .mockup-check-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: var(--color-primary-soft);
          color: var(--color-primary-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mockup-proof-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.65rem 0.85rem;
          background-color: #f8fafc;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          flex-wrap: wrap;
        }

        .mockup-rating-box {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .stars-row {
          display: flex;
          gap: 2px;
        }

        .rating-score {
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--color-navy);
        }

        .rating-desc {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        .mockup-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: #16a34a;
          margin-left: auto;
        }

        /* Mockup Actions */
        .mockup-actions-row {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-top: 0.5rem;
        }

        @media (min-width: 540px) {
          .mockup-actions-row {
            flex-direction: row;
            align-items: center;
          }
        }

        .mockup-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.15rem;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.15s ease;
          box-sizing: border-box;
        }

        .mockup-btn-live {
          background-color: #ffffff;
          border: 1.5px solid var(--color-border);
          color: var(--color-navy);
        }

        .mockup-btn-live:hover {
          border-color: var(--color-navy);
          background-color: #f8fafc;
        }

        .mockup-btn-request {
          background-color: var(--color-primary);
          border: 1.5px solid var(--color-primary);
          color: #ffffff;
        }

        .mockup-btn-request:hover {
          background-color: var(--color-primary-dark);
          border-color: var(--color-primary-dark);
        }

        /* Right Column: Device Screen Preview */
        .mockup-preview-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .preview-device-screen {
          width: 100%;
          max-width: 320px;
          background-color: #f1f5f9;
          border: 2px solid var(--color-border);
          border-radius: 24px;
          padding: 0.75rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
          box-sizing: border-box;
        }

        .device-top-notch {
          display: flex;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .notch-speaker {
          width: 48px;
          height: 4px;
          background-color: #cbd5e1;
          border-radius: 4px;
        }

        .device-content-frame {
          background-color: #ffffff;
          border-radius: 16px;
          border: 1px solid var(--color-border);
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .device-brand-bar {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 0.5rem;
        }

        .brand-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-primary);
        }

        .brand-name {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--color-navy);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          flex: 1;
        }

        .brand-status {
          font-size: 0.65rem;
          font-weight: 700;
          color: #16a34a;
          background-color: #dcfce7;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-full);
        }

        .device-hero-image-wrap {
          width: 100%;
          height: 130px;
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .device-preview-img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.08));
        }

        .device-quick-actions {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0.35rem;
        }

        .device-action-chip {
          background-color: #f8fafc;
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 0.35rem 0.25rem;
          text-align: center;
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--color-navy);
          white-space: nowrap;
        }

        .device-action-chip.active-chip {
          background-color: var(--color-primary-soft);
          border-color: var(--color-primary-border);
          color: var(--color-primary-dark);
        }

        .device-spec-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f1f5f9;
          padding-top: 0.5rem;
          gap: 0.35rem;
        }

        .spec-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }

        /* Trust Strip Styles */
        .hero-trust-strip {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem 0.85rem;
          padding: 0.85rem 1.25rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--color-navy);
          box-shadow: var(--shadow-sm);
          width: 100%;
          max-width: 860px;
          box-sizing: border-box;
        }

        .trust-strip-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          justify-content: flex-start;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .trust-icon {
          flex-shrink: 0;
        }

        .trust-divider {
          display: none;
        }

        @media (min-width: 840px) {
          .hero-trust-strip {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.75rem;
            padding: 0.85rem 1.5rem;
            font-size: 0.875rem;
          }
          .trust-strip-item {
            justify-content: center;
          }
          .trust-divider {
            display: block;
            width: 1px;
            height: 16px;
            background-color: var(--color-border);
          }
        }
      `}</style>
    </section>
  );
};
