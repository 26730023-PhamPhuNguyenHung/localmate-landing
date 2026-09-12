import React from 'react';
import { Container } from '../ui/Container';
import {
  Globe,
  MapPin,
  TrendingUp,
  FileText,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Layers,
  ChevronRight
} from 'lucide-react';
import { useRouter } from '../layout/Router';

export interface ServiceCardItem {
  id: string;
  title: string;
  slug: string;
  badge: string;
  badgeType: 'hot' | 'popular' | 'trusted' | 'efficient';
  icon: 'Globe' | 'MapPin' | 'TrendingUp' | 'FileText';
  description: string;
  price: string;
  pricePeriod?: string;
  starterPriceLabel?: string;
  advancedPrice?: string;
  priceNote: string;
  duration: string;
  ctaText: string;
  serviceNameForLead: string;
  highlights: string[];
}

export const CORE_SERVICES_CARDS: ServiceCardItem[] = [
  {
    id: 'website-business-sales',
    title: 'Website Doanh nghiệp & Bán hàng',
    slug: '/dich-vu/website-landing-page',
    badge: 'Phổ biến nhất',
    badgeType: 'hot',
    icon: 'Globe',
    description: 'Website chuẩn di động, tốc độ tải dưới 1.5s, chuẩn SEO Google và sẵn sàng nhận khách.',
    price: '2.900.000đ',
    starterPriceLabel: 'Gói khởi điểm: 2.900.000đ (Landing/Giới thiệu)',
    advancedPrice: 'Gói nâng cao: Từ 5.900.000đ (Bán hàng & CRM)',
    priceNote: 'Nghiệm thu đạt chuẩn mới thanh toán',
    duration: 'Bàn giao 3–5 ngày (Có demo 0đ trước)',
    ctaText: 'Xem chi tiết & Đăng ký',
    serviceNameForLead: 'Thiết kế Website Doanh nghiệp & Bán hàng',
    highlights: [
      'Tốc độ tải < 1.5s, chuẩn di động 100%',
      'Chuẩn SEO Google & tối ưu AI Search',
      'Tích hợp nút gọi, Zalo & form báo giá',
      'Tặng demo xem trước 0đ chưa cần cọc'
    ]
  },
  {
    id: 'google-maps-local',
    title: 'Google Maps & Định danh địa phương',
    slug: '/dich-vu/google-maps',
    badge: 'Tăng uy tín',
    badgeType: 'trusted',
    icon: 'MapPin',
    description: 'Xác minh Google Business Profile chính chủ, đưa tiệm lên top tìm kiếm gần đây.',
    price: '2.000.000đ',
    starterPriceLabel: 'Gói khởi điểm: 2.000.000đ (1 điểm chính chủ)',
    advancedPrice: 'Gói nâng cao: Từ 3.900.000đ (Chuỗi / Đa chi nhánh)',
    priceNote: 'Trọn gói 1 lần — Sở hữu vĩnh viễn',
    duration: 'Hoàn thành sau 3–7 ngày',
    ctaText: 'Xem gói Google Maps',
    serviceNameForLead: 'Xác minh & Tối ưu Google Maps',
    highlights: [
      'Xác minh tích xanh Google Business Profile',
      'Tối ưu SEO bản đồ lên top tìm kiếm gần đây',
      'Tặng bộ mã QR in sẵn đặt tại quầy nhận review',
      'Bảo vệ vị trí, chống cắm cờ phá hoại'
    ]
  },
  {
    id: 'google-meta-ads',
    title: 'Quảng cáo Google Ads & Meta Ads',
    slug: '/dich-vu/google-ads',
    badge: 'Ra khách ngay',
    badgeType: 'popular',
    icon: 'TrendingUp',
    description: 'Chiến dịch tìm kiếm đúng từ khóa khách mua, báo cáo minh bạch 100% tài khoản.',
    price: '2.500.000đ',
    pricePeriod: '/ tháng',
    starterPriceLabel: 'Gói khởi điểm: 2.500.000đ/tháng (Setup & Tối ưu)',
    advancedPrice: 'Gói nâng cao: Từ 4.900.000đ/tháng (Phễu đa kênh)',
    priceNote: 'Chạy trực tiếp trên tài khoản chính chủ của bạn',
    duration: 'Khởi tạo chạy ngay trong 48 giờ',
    ctaText: 'Tư vấn chiến dịch Ads',
    serviceNameForLead: 'Quảng cáo Google Ads & Meta Ads',
    highlights: [
      'Nhắm đúng từ khóa khách đang cần mua ngay',
      'Minh bạch 100% ngân sách, không chênh lệch',
      'Tối ưu chi phí theo từng cuộc gọi & tin nhắn',
      'Báo cáo rõ ràng: bao nhiêu cuộc gọi, bao nhiêu lead'
    ]
  },
  {
    id: 'content-management',
    title: 'Nội dung & Quản trị định kỳ',
    slug: '/dich-vu/content-marketing',
    badge: 'Tiết kiệm 80% chi phí',
    badgeType: 'efficient',
    icon: 'FileText',
    description: 'Viết bài chuẩn SEO, chăm sóc bài đăng Facebook, sao lưu và bảo trì kỹ thuật hàng tháng.',
    price: '990.000đ',
    pricePeriod: '/ tháng',
    starterPriceLabel: 'Gói khởi điểm: 990.000đ/tháng (Bảo trì & kỹ thuật)',
    advancedPrice: 'Gói nâng cao: 2.490.000đ/tháng (Bài SEO & Fanpage)',
    priceNote: 'Linh hoạt theo tháng, không ràng buộc dài hạn',
    duration: 'Đồng hành hỗ trợ liên tục hàng tháng',
    ctaText: 'Xem gói quản trị định kỳ',
    serviceNameForLead: 'Nội dung & Quản trị định kỳ hàng tháng',
    highlights: [
      'Viết bài chuẩn SEO & chăm sóc Fanpage đều đặn',
      'Sao lưu dữ liệu, bảo mật & cập nhật kỹ thuật tuần',
      'Kỹ thuật viên túc trực hỗ trợ thay đổi nội dung',
      'Thay thế hoàn toàn nhân sự kỹ thuật full-time'
    ]
  }
];

const ICON_COMPONENTS = {
  Globe,
  MapPin,
  TrendingUp,
  FileText
};

export interface ServiceCardsSectionProps {
  onOpenLeadForm?: (serviceName: string) => void;
  onSelectService?: (slug: string) => void;
  className?: string;
  id?: string;
}

export const ServiceCardsSection: React.FC<ServiceCardsSectionProps> = ({
  onOpenLeadForm,
  onSelectService,
  className = '',
  id = 'dich-vu-cot-loi'
}) => {
  const { navigate } = useRouter();

  const handleCardNavigate = (slug: string, serviceName: string) => {
    if (onSelectService) {
      onSelectService(slug);
    } else {
      navigate(slug);
    }
  };

  const handleCtaClick = (e: React.MouseEvent, item: ServiceCardItem) => {
    e.stopPropagation();
    if (item.ctaText.includes('Tư vấn') && onOpenLeadForm) {
      onOpenLeadForm(item.serviceNameForLead);
    } else {
      handleCardNavigate(item.slug, item.serviceNameForLead);
    }
  };

  const handleQuickLeadClick = (e: React.MouseEvent, serviceName: string) => {
    e.stopPropagation();
    if (onOpenLeadForm) {
      onOpenLeadForm(serviceName);
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <section
      id={id}
      className={`service-cards-section ${className}`}
      style={{
        padding: 'clamp(3.5rem, 5vw, 5rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        position: 'relative'
      }}
    >
      <Container size="lg">
        {/* Section Header: Optimized for 5-second scan */}
        <div className="section-header-box">
          <span className="service-section-eyebrow">
            <Layers size={14} /> 4 DỊCH VỤ TRỌNG ĐIỂM CHO DOANH NGHIỆP &amp; SME
          </span>
          <h2 className="service-section-title">
            Dịch vụ số thực tế — Báo giá rõ ràng, nhận khách ngay
          </h2>
          <p className="service-section-subtitle">
            Dễ dàng nắm bắt toàn bộ chi phí và thời gian triển khai trong 5 giây. Không bán gói cồng kềnh, làm đúng thứ cần thiết để đem lại khách hàng thật.
          </p>
        </div>

        {/* 4 Core Service Cards Grid */}
        <div className="service-cards-grid">
          {CORE_SERVICES_CARDS.map((card) => {
            const IconComponent = ICON_COMPONENTS[card.icon];

            return (
              <div
                key={card.id}
                className="service-card"
                onClick={() => handleCardNavigate(card.slug, card.serviceNameForLead)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardNavigate(card.slug, card.serviceNameForLead);
                  }
                }}
              >
                {/* Card Top: Icon & Badge */}
                <div className="service-card-top">
                  <div className="service-card-icon-wrap">
                    <IconComponent size={22} className="service-card-icon" />
                  </div>
                  <span className={`service-card-badge badge-${card.badgeType}`}>
                    {card.badgeType === 'hot' && <Sparkles size={11} className="badge-sparkle" />}
                    {card.badge}
                  </span>
                </div>

                {/* Card Main Info */}
                <div className="service-card-body">
                  <h3 className="service-card-title">{card.title}</h3>
                  <p className="service-card-desc">{card.description}</p>
                </div>

                {/* Pricing Tiers & Transparent Commitment */}
                <div className="service-card-meta-block">
                  <div className="service-card-price-row">
                    <span className="price-lead-tag">Khởi điểm từ</span>
                    <span className="service-card-price">{card.price}</span>
                    {card.pricePeriod && (
                      <span className="service-card-period">{card.pricePeriod}</span>
                    )}
                  </div>

                  {/* Dual Tier Guidance */}
                  {card.advancedPrice && (
                    <div className="service-card-tiers-hint">
                      <span className="tier-dot" />
                      <span>{card.advancedPrice}</span>
                    </div>
                  )}

                  <div className="service-card-price-note">{card.priceNote}</div>

                  <div className="service-card-duration-pill">
                    <Clock size={12} className="duration-icon" />
                    <span>{card.duration}</span>
                  </div>
                </div>

                {/* Quick Scan Deliverables List */}
                <ul className="service-card-checklist">
                  {card.highlights.map((item, idx) => (
                    <li key={idx} className="service-card-check-item">
                      <CheckCircle2 size={15} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom CTA Action Button */}
                <div className="service-card-cta-wrap">
                  <button
                    type="button"
                    className="service-card-cta-btn"
                    onClick={(e) => handleCtaClick(e, card)}
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight size={14} className="cta-arrow-icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner: Transparency & Fast Consultation */}
        <div className="service-cards-bottom-banner">
          <div className="bottom-banner-left">
            <div className="bottom-banner-icon-box">
              <ShieldCheck size={22} color="var(--color-primary)" />
            </div>
            <div className="bottom-banner-text">
              <div className="bottom-banner-title">
                Cam kết minh bạch: Báo giá niêm yết — Nghiệm thu đạt mới thanh toán
              </div>
              <p className="bottom-banner-desc">
                Bàn giao 100% mã nguồn và tài khoản chính chủ. Không giữ tài khoản làm con tin, không phát sinh chi phí ẩn.
              </p>
            </div>
          </div>
          <div className="bottom-banner-right">
            <button
              type="button"
              className="bottom-banner-catalog-btn"
              onClick={() => navigate('/bang-gia')}
            >
              <span>Xem toàn bộ 41 dịch vụ niêm yết</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </Container>

      <style>{`
        /* Service Cards Section Styles */
        .section-header-box {
          max-width: 780px;
          margin: 0 auto clamp(2rem, 4vw, 3rem) auto;
          text-align: center;
        }

        .service-section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.775rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }

        .service-section-title {
          font-size: var(--font-size-h2);
          color: var(--color-navy);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.28;
          margin: 0 0 0.65rem 0;
          text-wrap: balance;
          overflow-wrap: break-word;
        }

        .service-section-subtitle {
          font-size: var(--font-size-subtitle);
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0 auto;
          max-width: 680px;
          text-wrap: pretty;
          overflow-wrap: break-word;
        }

        /* 4 Column / Responsive Grid */
        .service-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 2.25rem;
        }

        @media (min-width: 640px) {
          .service-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }

        @media (min-width: 1024px) {
          .service-cards-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
          }
        }

        /* Card Container */
        .service-card {
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: clamp(1.25rem, 2.5vw, 1.5rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.15rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
          position: relative;
          cursor: pointer;
          user-select: none;
          outline: none;
          box-sizing: border-box;
          width: 100%;
        }

        .service-card:focus-visible {
          border-color: #0d7647;
          box-shadow: 0 0 0 3px rgba(13, 118, 71, 0.15);
        }

        @media (hover: hover) and (pointer: fine) {
          .service-card:hover {
            transform: translateY(-4px);
            border-color: #cbd5e1;
            box-shadow: 0 12px 24px -6px rgba(15, 23, 42, 0.07), 0 4px 10px -2px rgba(15, 23, 42, 0.03);
          }

          .service-card:hover .service-card-cta-btn {
            background-color: #0d7647;
            color: #ffffff;
            border-color: #0d7647;
          }

          .service-card:hover .cta-arrow-icon {
            transform: translateX(3px);
          }
        }

        /* Top Row: Icon & Badge */
        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .service-card-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background-color: #ecfdf5;
          border: 1px solid #d1fae5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d7647;
          flex-shrink: 0;
          transition: background-color 0.2s ease;
        }

        .service-card-icon {
          stroke-width: 2.2px;
        }

        .service-card-badge {
          font-size: 0.725rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .badge-hot {
          background-color: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fee2e2;
        }

        .badge-trusted {
          background-color: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #dbeafe;
        }

        .badge-popular {
          background-color: #fefce8;
          color: #854d0e;
          border: 1px solid #fef08a;
        }

        .badge-efficient {
          background-color: #ecfdf5;
          color: #047857;
          border: 1px solid #d1fae5;
        }

        .badge-sparkle {
          flex-shrink: 0;
        }

        /* Card Body */
        .service-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .service-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.35;
          margin: 0;
          text-wrap: pretty;
        }

        .service-card-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
          text-wrap: pretty;
        }

        /* Pricing & SLA Block */
        .service-card-meta-block {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .service-card-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
          flex-wrap: wrap;
        }

        .price-lead-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .service-card-price {
          font-size: 1.35rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .service-card-period {
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748b;
        }

        .service-card-tiers-hint {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #0d7647;
          line-height: 1.3;
        }

        .tier-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #10b981;
          flex-shrink: 0;
        }

        .service-card-price-note {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748b;
          line-height: 1.3;
        }

        .service-card-duration-pill {
          margin-top: 0.3rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.725rem;
          font-weight: 700;
          color: #0d7647;
          background-color: #ecfdf5;
          border: 1px solid #d1fae5;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          width: fit-content;
          line-height: 1.3;
        }

        .duration-icon {
          flex-shrink: 0;
        }

        /* Checklist Highlights */
        .service-card-checklist {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .service-card-check-item {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.825rem;
          color: #334155;
          line-height: 1.45;
        }

        .check-icon {
          color: #0d7647;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* CTA Button */
        .service-card-cta-wrap {
          margin-top: 0.25rem;
        }

        .service-card-cta-btn {
          width: 100%;
          min-height: 44px;
          padding: 0.65rem 1rem;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          color: #0f172a;
          font-weight: 700;
          font-size: 0.875rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          transition: all 0.2s ease;
          text-align: center;
        }

        .cta-arrow-icon {
          transition: transform 0.2s ease;
        }

        .service-card-cta-btn:active {
          transform: scale(0.99);
        }

        /* Reassurance Bottom Banner */
        .service-cards-bottom-banner {
          background-color: #f8fafc;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .service-cards-bottom-banner {
            flex-direction: row;
            align-items: center;
          }
        }

        .bottom-banner-left {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          max-width: 720px;
        }

        .bottom-banner-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background-color: #ecfdf5;
          border: 1px solid #a7f3d0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bottom-banner-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .bottom-banner-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.4;
        }

        .bottom-banner-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }

        .bottom-banner-right {
          flex-shrink: 0;
          width: 100%;
        }

        @media (min-width: 768px) {
          .bottom-banner-right {
            width: auto;
          }
        }

        .bottom-banner-catalog-btn {
          width: 100%;
          min-height: 44px;
          padding: 0.65rem 1.25rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          color: var(--color-primary-dark);
          font-weight: 700;
          font-size: 0.875rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          transition: all var(--transition-fast);
          box-shadow: var(--shadow-sm);
        }

        .bottom-banner-catalog-btn:hover {
          background-color: var(--color-primary-soft);
          border-color: var(--color-primary-border);
          color: var(--color-primary-dark);
        }
      `}</style>
    </section>
  );
};

export default ServiceCardsSection;
