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
  priceNote: string;
  duration: string;
  ctaText: string;
  serviceNameForLead: string;
  highlights: string[];
}

export const CORE_SERVICES_CARDS: ServiceCardItem[] = [
  {
    id: 'website-business-sales',
    title: 'Website cho doanh nghiệp & Bán hàng',
    slug: '/dich-vu/website-landing-page',
    badge: 'Phổ biến nhất',
    badgeType: 'hot',
    icon: 'Globe',
    description: 'Website responsive, chuẩn SEO Google, tải dưới 1.5s và sẵn sàng nhận khách.',
    price: 'Từ 2.900.000đ',
    priceNote: 'Thanh toán sau khi nghiệm thu',
    duration: 'Bàn giao sau 3–5 ngày (Có demo trước 0đ)',
    ctaText: 'Xem chi tiết website →',
    serviceNameForLead: 'Thiết kế Website Doanh nghiệp & Bán hàng',
    highlights: [
      'Giao diện chuẩn di động, tốc độ tải < 1.5s',
      'Chuẩn SEO Google & tối ưu AI Search',
      'Tích hợp nút gọi, Zalo & form nhận báo giá',
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
    description: 'Xác minh Google Business Profile, định vị tiệm trên bản đồ, tối ưu lên top tìm kiếm gần đây.',
    price: 'Từ 2.000.000đ',
    priceNote: 'Trọn gói 1 lần — Sở hữu vĩnh viễn',
    duration: 'Hoàn thành sau 3–7 ngày',
    ctaText: 'Xem gói Google Maps →',
    serviceNameForLead: 'Xác minh & Tối ưu Google Maps',
    highlights: [
      'Xác minh tích xanh Google Business Profile',
      'Tối ưu SEO bản đồ lên top tìm kiếm gần đây',
      'Bộ mã QR in sẵn đặt tại quầy nhận review 5 sao',
      'Bảo vệ vị trí, chống đối thủ cắm cờ phá hoại'
    ]
  },
  {
    id: 'google-meta-ads',
    title: 'Quảng cáo Google Ads & Meta Ads',
    slug: '/dich-vu/google-ads',
    badge: 'Ra khách ngay',
    badgeType: 'popular',
    icon: 'TrendingUp',
    description: 'Thiết lập chiến dịch tìm kiếm đúng từ khóa khách mua, báo cáo minh bạch 100% ngân sách.',
    price: 'Từ 2.500.000đ',
    pricePeriod: '/ tháng',
    priceNote: 'Chạy trực tiếp trên tài khoản của bạn',
    duration: 'Khởi tạo trong 48 giờ',
    ctaText: 'Tư vấn quảng cáo →',
    serviceNameForLead: 'Quảng cáo Google Ads & Meta Ads',
    highlights: [
      'Nhắm đúng từ khóa khách đang cần mua ngay',
      'Minh bạch 100% tài khoản, không ăn chênh lệch',
      'Tối ưu từng đồng chi phí theo cuộc gọi & tin nhắn',
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
    price: 'Từ 990.000đ',
    pricePeriod: '/ tháng',
    priceNote: 'Không ràng buộc hợp đồng dài hạn',
    duration: 'Đồng hành hàng tháng',
    ctaText: 'Xem gói quản trị →',
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
        borderBottom: '1px solid var(--color-border)',
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
                    <IconComponent size={24} className="service-card-icon" />
                  </div>
                  <span className={`service-card-badge badge-${card.badgeType}`}>
                    {card.badgeType === 'hot' && <Sparkles size={12} className="badge-sparkle" />}
                    {card.badge}
                  </span>
                </div>

                {/* Card Main Info */}
                <div className="service-card-body">
                  <h3 className="service-card-title">{card.title}</h3>
                  <p className="service-card-desc">{card.description}</p>
                </div>

                {/* Pricing & Time Commitment Block */}
                <div className="service-card-meta-block">
                  <div className="service-card-price-row">
                    <span className="service-card-price">{card.price}</span>
                    {card.pricePeriod && (
                      <span className="service-card-period">{card.pricePeriod}</span>
                    )}
                  </div>
                  <div className="service-card-price-note">{card.priceNote}</div>

                  <div className="service-card-duration-pill">
                    <Clock size={13} className="duration-icon" />
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
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: clamp(1.25rem, 2.5vw, 1.5rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.15rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
          cursor: pointer;
          user-select: none;
          outline: none;
          box-sizing: border-box;
          width: 100%;
        }

        .service-card:focus-visible {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(13, 118, 71, 0.2);
        }

        @media (hover: hover) and (pointer: fine) {
          .service-card:hover {
            transform: translateY(-3px);
            border-color: #86efac;
            box-shadow: 0 12px 24px -4px rgba(13, 118, 71, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04);
          }

          .service-card:hover .service-card-cta-btn {
            background-color: var(--color-primary);
            color: #ffffff;
            border-color: var(--color-primary);
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
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .service-card-icon {
          stroke-width: 2.2px;
        }

        .service-card-badge {
          font-size: 0.725rem;
          font-weight: 800;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .badge-hot {
          background-color: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fecaca;
        }

        .badge-trusted {
          background-color: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        }

        .badge-popular {
          background-color: #fefce8;
          color: #a16207;
          border: 1px solid #fef08a;
        }

        .badge-efficient {
          background-color: #f0fdf4;
          color: #15803d;
          border: 1px solid #bbf7d0;
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
          font-size: 1.18rem;
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.35;
          margin: 0;
          text-wrap: pretty;
        }

        .service-card-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0;
          text-wrap: pretty;
        }

        /* Pricing & SLA Block */
        .service-card-meta-block {
          background-color: #f9fafb;
          border: 1px dashed var(--color-border);
          border-radius: 12px;
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .service-card-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
          flex-wrap: wrap;
        }

        .service-card-price {
          font-size: 1.4rem;
          font-weight: 900;
          color: var(--color-primary);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .service-card-period {
          font-size: 0.8rem;
          font-weight: 600;
          color: #6b7280;
        }

        .service-card-price-note {
          font-size: 0.725rem;
          font-weight: 600;
          color: #64748b;
          line-height: 1.3;
        }

        .service-card-duration-pill {
          margin-top: 0.35rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: #ecfdf5;
          border: 1px solid #d1fae5;
          padding: 0.3rem 0.55rem;
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
          font-size: 0.8rem;
          color: #374151;
          line-height: 1.45;
        }

        .check-icon {
          color: var(--color-primary);
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
          background-color: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius-md);
          color: var(--color-navy);
          font-weight: 700;
          font-size: 0.875rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          transition: all var(--transition-fast);
          text-align: center;
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
