import React, { useState, useEffect, useMemo } from 'react';
import { Container } from '../ui/Container';
import { CatalogServiceItem, TECH_CATEGORIES, TechCategoryKey } from '../../data/servicesCatalog';
import { getCatalogServices, subscribeCatalogChanges } from '../../services/pricingStorage';
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  Search,
  Globe,
  Wrench,
  MapPin,
  TrendingUp,
  BarChart2,
  Cpu,
  Bot,
  Scale,
  Clock,
  CheckCircle2,
  ChevronDown,
  Layers,
  Zap
} from 'lucide-react';
import { useRouter } from '../layout/Router';

interface PricingMatrixSectionProps {
  onOpenLeadForm?: (serviceName?: string) => void;
}

interface StartingPackage {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  badgeType: 'starter' | 'popular' | 'maps' | 'care';
  highlightText: string;
  priceDisplay: string;
  unit: string;
  sla: string;
  features: string[];
  ctaLabel: string;
  isPopular?: boolean;
}

const STARTING_PACKAGES: StartingPackage[] = [
  {
    id: 'starter-minimal',
    name: 'Gói Khởi Nghiệp Tối Giản',
    subtitle: '1 trang landing gọn gàng cho cá nhân & hộ kinh doanh',
    badge: 'Tiết kiệm nhất',
    badgeType: 'starter',
    highlightText: '1 trang landing gọn gàng',
    priceDisplay: '490.000đ',
    unit: 'Trọn gói',
    sla: 'Bàn giao trong 24h–48h',
    features: [
      'Giao diện 1 trang tinh gọn, chuẩn di động 100%',
      'Tích hợp nút gọi hotline & nhắn tin Zalo tức thì',
      'Tốc độ tải trang siêu tốc (< 1.5s), chuẩn SEO',
      'Bàn giao toàn quyền quản trị, hướng dẫn tự dùng'
    ],
    ctaLabel: 'Tư vấn gói này'
  },
  {
    id: 'web-showcase',
    name: 'Gói Web Giới Thiệu',
    subtitle: 'Website đa trang chuyên nghiệp cho công ty & dịch vụ',
    badge: '⭐ Phổ biến nhất',
    badgeType: 'popular',
    highlightText: 'Xem demo trước, ưng ý mới thanh toán',
    priceDisplay: 'Từ 2.900.000đ',
    unit: 'Trọn gói',
    sla: 'Bàn giao từ 3–5 ngày',
    isPopular: true,
    features: [
      'Thiết kế 3–5 trang hoàn chỉnh theo thương hiệu riêng',
      'Xem thử website demo trực quan trước khi chốt',
      'Tặng kèm trọn bộ cài đặt SEO Google & đo lường GA4',
      'Bàn giao 100% mã nguồn, tên miền & tài khoản chính chủ'
    ],
    ctaLabel: 'Xem demo & Tư vấn'
  },
  {
    id: 'google-maps',
    name: 'Gói Google Maps',
    subtitle: 'Khởi tạo & đưa vị trí cửa hàng lên top tìm kiếm Google',
    badge: 'Xác minh chính chủ',
    badgeType: 'maps',
    highlightText: 'Xác minh chính chủ 100%',
    priceDisplay: '2.000.000đ',
    unit: 'Trọn gói',
    sla: 'Hoàn tất trong 2–4 ngày',
    features: [
      'Xác minh địa điểm chính chủ 100% trên Google Maps',
      'Tối ưu Local SEO: Danh mục ngành nghề, định vị GPS',
      'Bộ nhận diện địa điểm: Đăng 20+ hình ảnh, menu & bài viết',
      'Tặng bộ mã QR để bàn xin đánh giá 5 sao tại quầy'
    ],
    ctaLabel: 'Tư vấn gói này'
  },
  {
    id: 'digital-care-monthly',
    name: 'Gói Quản Trị Duy Trì',
    subtitle: 'Chăm sóc nội dung & kỹ thuật website, Google Maps định kỳ',
    badge: 'Vận hành an tâm',
    badgeType: 'care',
    highlightText: 'Chăm sóc nội dung & kỹ thuật',
    priceDisplay: '990.000đ',
    unit: '/ tháng',
    sla: 'Hỗ trợ ưu tiên trong 2h–4h',
    features: [
      'Sao lưu dữ liệu định kỳ, giám sát hoạt động 24/7',
      'Biên tập & cập nhật bài viết, sản phẩm, khuyến mãi mới',
      'Đăng bài định kỳ duy trì thứ hạng top Google Maps',
      'Hỗ trợ sửa lỗi, xử lý kỹ thuật trực tiếp qua nhóm Zalo riêng'
    ],
    ctaLabel: 'Tư vấn gói này'
  }
];

export const PricingMatrixSection: React.FC<PricingMatrixSectionProps> = ({ onOpenLeadForm }) => {
  const { navigate } = useRouter();
  const [services, setServices] = useState<CatalogServiceItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExpandedAll, setIsExpandedAll] = useState<boolean>(false);

  useEffect(() => {
    setServices(getCatalogServices());
    const unsubscribe = subscribeCatalogChanges((updated) => {
      setServices(updated);
    });
    return unsubscribe;
  }, []);

  const activeServices = services.filter((s) => s.isActive);

  // Filter by category and search query
  const filteredServices = useMemo(() => {
    return activeServices.filter((srv) => {
      // Category match
      const matchCategory = activeCategory === 'all' || srv.categoryGroup === activeCategory;
      if (!matchCategory) return false;

      // Search match
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      return (
        srv.name.toLowerCase().includes(query) ||
        srv.scope.toLowerCase().includes(query) ||
        srv.priceDisplay.toLowerCase().includes(query) ||
        srv.code.toLowerCase().includes(query)
      );
    });
  }, [activeServices, activeCategory, searchQuery]);

  // Sort: Gói in đậm viền / Khuyên dùng (isPopular) lên ĐẦU TIÊN
  const sortedServices = useMemo(() => {
    return [...filteredServices].sort((a, b) => {
      if (a.isPopular && !b.isPopular) return -1;
      if (!a.isPopular && b.isPopular) return 1;
      return 0;
    });
  }, [filteredServices]);

  // Smart Progressive Disclosure: Hiển thị 9 gói mặc định, chỉ bung hết khi tìm kiếm, lọc danh mục hoặc người dùng bấm Xem thêm
  const displayedServices = useMemo(() => {
    if (searchQuery.trim() || activeCategory !== 'all' || isExpandedAll) {
      return sortedServices;
    }
    return sortedServices.slice(0, 9);
  }, [sortedServices, searchQuery, activeCategory, isExpandedAll]);

  const handleSelectService = (serviceName: string) => {
    if (onOpenLeadForm) {
      onOpenLeadForm(serviceName);
    } else {
      navigate('/lien-he');
    }
  };

  const getCategoryMeta = (key: TechCategoryKey) => {
    switch (key) {
      case 'website-landing':
        return { label: 'Website', icon: Globe, colorClass: 'cat-green' };
      case 'website-fix':
        return { label: 'Sửa lỗi 99k', icon: Wrench, colorClass: 'cat-orange' };
      case 'google-seo':
        return { label: 'Google Maps', icon: MapPin, colorClass: 'cat-blue' };
      case 'ads-conversion':
        return { label: 'Quảng cáo Ads', icon: TrendingUp, colorClass: 'cat-pink' };
      case 'analytics-tracking':
        return { label: 'Đo lường', icon: BarChart2, colorClass: 'cat-teal' };
      case 'crm-automation':
        return { label: 'Tự động hóa', icon: Cpu, colorClass: 'cat-purple' };
      case 'ai-software':
        return { label: 'Phần mềm & AI', icon: Bot, colorClass: 'cat-indigo' };
      case 'legal-compliance':
        return { label: 'Pháp lý BCT', icon: Scale, colorClass: 'cat-emerald' };
      case 'digital-care':
        return { label: 'Chăm sóc tháng', icon: Clock, colorClass: 'cat-amber' };
      default:
        return { label: 'Dịch vụ', icon: Sparkles, colorClass: 'cat-green' };
    }
  };

  const formatServiceUnit = (unit: string) => {
    if (!unit || unit === 'trọn gói' || unit === 'lần') return 'Trọn gói';
    if (unit === 'tháng' || unit === '/ tháng') return '/ tháng';
    if (unit === 'dự án') return 'Trọn gói';
    return unit.startsWith('/') ? unit : `/${unit}`;
  };

  return (
    <section
      style={{
        padding: 'clamp(3.5rem, 5vw, 5.5rem) 0',
        backgroundColor: '#f8faf9',
        borderBottom: '1px solid var(--color-border)',
        scrollbarGutter: 'stable'
      }}
      id="bang-gia"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.75rem', textAlign: 'center' }}>
          <span className="section-eyebrow">
            <Sparkles size={14} /> BẢNG GIÁ NIÊM YẾT MINH BẠCH
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Bảng Giá Dịch Vụ Niêm Yết Công Khai
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem', maxWidth: '720px', margin: '0.5rem auto 0 auto', textWrap: 'pretty' }}>
            Không chi phí ẩn. Báo giá rõ ràng từng hạng mục từ <strong>99.000đ</strong> (sửa lỗi nhỏ), <strong>490.000đ</strong> (Landing page), <strong>2.000.000đ</strong> (Google Maps) đến các gói doanh nghiệp trọn gói.
          </p>
        </div>

        {/* 1. STARTING PACKAGES HIGHLIGHT (TOP POPULAR TIERS) */}
        <div className="starting-packages-section">
          <div className="starting-section-heading">
            <div className="starting-badge">
              <Zap size={14} /> GÓI KHỞI ĐIỂM PHỔ BIẾN
            </div>
            <h3 className="starting-title">
              Lựa Chọn Khởi Điểm Nhanh Chóng Cho Doanh Nghiệp
            </h3>
            <p className="starting-subtitle">
              Xem trước demo thực tế · Ký hợp đồng minh bạch · Bàn giao 100% tài khoản chính chủ
            </p>
          </div>

          <div className="starting-packages-grid">
            {STARTING_PACKAGES.map((pkg) => {
              return (
                <div
                  key={pkg.id}
                  className={`starting-card ${pkg.isPopular ? 'popular-tier' : ''}`}
                >
                  {/* Top Badge */}
                  <div className="starting-card-top">
                    <span className={`pkg-badge badge-${pkg.badgeType}`}>
                      {pkg.badge}
                    </span>
                    <div className="pkg-sla-pill">
                      <Clock size={12} />
                      <span>{pkg.sla}</span>
                    </div>
                  </div>

                  {/* Header & Title */}
                  <div className="starting-card-header">
                    <h4 className="pkg-name">{pkg.name}</h4>
                    <p className="pkg-subtitle">{pkg.subtitle}</p>
                  </div>

                  {/* Highlight feature callout */}
                  <div className="pkg-highlight-box">
                    <Sparkles size={14} className="pkg-highlight-icon" />
                    <span>{pkg.highlightText}</span>
                  </div>

                  {/* Price */}
                  <div className="pkg-price-row">
                    <div className="pkg-price-val">{pkg.priceDisplay}</div>
                    <div className="pkg-price-unit">{pkg.unit}</div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="pkg-feature-list">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="pkg-feature-item">
                        <CheckCircle2 size={16} className="pkg-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Action */}
                  <button
                    type="button"
                    onClick={() => handleSelectService(pkg.name)}
                    className={`pkg-cta-btn ${pkg.isPopular ? 'btn-popular' : 'btn-standard'}`}
                    title={`Chọn ${pkg.name}`}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. TRANSITION HEADER TO FULL 41 SERVICES DIRECTORY */}
        <div className="directory-divider-wrap">
          <div className="directory-divider-line" />
          <div className="directory-divider-badge">
            <Layers size={15} />
            <span>TRA CỨU TOÀN BỘ 41 DỊCH VỤ CÔNG KHAI</span>
          </div>
          <div className="directory-divider-line" />
        </div>

        <div className="directory-intro-text">
          <p>
            Cần sửa nhanh một lỗi nhỏ từ <strong>99.000đ</strong>, cấu hình đo lường hay thêm tính năng riêng lẻ? Bạn chỉ trả tiền đúng công việc mình cần.
          </p>
        </div>

        {/* 3. SEARCH & CATEGORY FILTER TOOLBAR */}
        <div className="pricing-toolbar">
          {/* Search Box */}
          <div className="pricing-search-box">
            <Search size={17} className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm nhanh dịch vụ (ví dụ: Google Maps, Sửa web, 99k, Zalo, Ads, BCT...)"
              className="pricing-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
                aria-label="Xóa tìm kiếm"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="pricing-category-tabs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`category-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            >
              <span>⭐ Tất cả ({activeServices.length})</span>
            </button>
            {TECH_CATEGORIES.map((cat) => {
              const count = activeServices.filter((s) => s.categoryGroup === cat.key).length;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`category-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <span>{cat.title} ({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. PRICING CARDS GRID (3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile) */}
        {displayedServices.length > 0 ? (
          <>
            <div className="pricing-cards-grid-v2">
              {displayedServices.map((srv) => {
                const catMeta = getCategoryMeta(srv.categoryGroup);
                const CatIcon = catMeta.icon;

                return (
                  <div
                    key={srv.id}
                    className={`service-matrix-card ${srv.isPopular ? 'popular-matrix-card' : ''}`}
                  >
                    {/* Card Top: Category Badge, Icon & SLA Pill */}
                    <div className="matrix-card-header">
                      <div className="matrix-icon-with-badge">
                        <div className={`matrix-icon-box ${catMeta.colorClass}`}>
                          <CatIcon size={18} />
                        </div>
                        <span className={`matrix-cat-pill ${catMeta.colorClass}`}>
                          {catMeta.label}
                        </span>
                      </div>

                      {srv.isPopular && (
                        <span className="matrix-popular-badge">
                          ⭐ Khuyên dùng
                        </span>
                      )}
                    </div>

                    {/* Card Content: Title, Scope, SLA */}
                    <div className="matrix-card-body">
                      <h3 className="matrix-service-name">
                        {srv.name}
                      </h3>
                      <p className="matrix-service-scope">
                        {srv.scope}
                      </p>

                      {/* Timeline / SLA Row */}
                      <div className="matrix-timeline-row">
                        <Clock size={13} className="matrix-sla-clock" />
                        <span>Thời gian hoàn thành: <strong>{srv.effort}</strong></span>
                      </div>
                    </div>

                    {/* Card Bottom: Price & CTA Action */}
                    <div className="matrix-card-footer">
                      <div className="matrix-price-wrap">
                        <span className="matrix-price-val">
                          {srv.priceDisplay}
                        </span>
                        <span className="matrix-price-unit">
                          {formatServiceUnit(srv.unit)}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleSelectService(srv.name)}
                        className="matrix-action-btn"
                        title={`Tư vấn dịch vụ ${srv.name}`}
                      >
                        <span>Tư vấn gói này</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Smart Progressive Disclosure Toggle Button */}
            {!searchQuery.trim() && activeCategory === 'all' && sortedServices.length > 9 && (
              <div className="pricing-expand-toggle-wrap">
                <button
                  type="button"
                  onClick={() => setIsExpandedAll(!isExpandedAll)}
                  className="pricing-expand-toggle-btn"
                  aria-expanded={isExpandedAll}
                >
                  <span>
                    {isExpandedAll
                      ? 'Thu gọn danh sách dịch vụ'
                      : `Xem thêm toàn bộ bảng giá (${activeServices.length} dịch vụ niêm yết)`}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isExpandedAll ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-services-found">
            <p>Không tìm thấy dịch vụ nào khớp với từ khóa <strong>"{searchQuery}"</strong>.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="btn-reset-filter"
            >
              Xem tất cả dịch vụ
            </button>
          </div>
        )}

        {/* 5. GUARANTEE CALLOUT */}
        <div className="pricing-guarantee-banner">
          <ShieldCheck size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-primary-dark)', margin: '0 0 0.3rem 0' }}>
              Cam kết báo giá rõ ràng · Không phát sinh chi phí · Bàn giao 100% tài khoản
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5, textWrap: 'pretty' }}>
              Khách hàng xem thử website demo trước khi thanh toán. Toàn bộ mã nguồn, tài khoản Google Maps và quyền sở hữu thuộc về bạn trọn đời.
            </p>
          </div>
        </div>
      </Container>

      <style>{`
        /* ==========================================================================
           1. STARTING PACKAGES SECTION (Top Highlights)
           ========================================================================== */
        .starting-packages-section {
          margin-bottom: 3.5rem;
        }

        .starting-section-heading {
          text-align: center;
          margin-bottom: 2rem;
        }

        .starting-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.85rem;
          background-color: #ecfdf5;
          color: #047857;
          border: 1px solid #a7f3d0;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 0.65rem;
        }

        .starting-title {
          font-size: clamp(1.25rem, 2vw, 1.65rem);
          font-weight: 800;
          color: var(--color-navy);
          margin: 0 0 0.45rem 0;
          text-wrap: pretty;
        }

        .starting-subtitle {
          font-size: 0.925rem;
          color: var(--color-text-muted);
          margin: 0;
          text-wrap: pretty;
        }

        /* 4 Columns Responsive Grid */
        .starting-packages-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .starting-packages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1080px) {
          .starting-packages-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Starting Package Card */
        .starting-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 18px;
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
          box-sizing: border-box;
        }

        .starting-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px -6px rgba(13, 118, 71, 0.08);
          border-color: #a7f3d0;
        }

        .starting-card.popular-tier {
          border: 2px solid var(--color-primary);
          box-shadow: 0 8px 24px -4px rgba(13, 118, 71, 0.14);
          background-color: #ffffff;
        }

        .starting-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
          flex-wrap: wrap;
        }

        .pkg-badge {
          font-size: 0.725rem;
          font-weight: 800;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .badge-starter {
          background-color: #f1f5f9;
          color: #334155;
          border: 1px solid #e2e8f0;
        }

        .badge-popular {
          background-color: #fef3c7;
          color: #b45309;
          border: 1px solid #fde68a;
        }

        .badge-maps {
          background-color: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        }

        .badge-care {
          background-color: #ecfdf5;
          color: #047857;
          border: 1px solid #a7f3d0;
        }

        .pkg-sla-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.7rem;
          color: var(--color-text-muted);
          background-color: #f8fafc;
          padding: 0.2rem 0.45rem;
          border-radius: var(--radius-sm);
          border: 1px solid #f1f5f9;
        }

        .starting-card-header {
          margin-bottom: 0.75rem;
        }

        .pkg-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-navy);
          margin: 0 0 0.35rem 0;
          line-height: 1.35;
          text-wrap: pretty;
        }

        .pkg-subtitle {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.45;
          margin: 0;
          min-height: 2.4em;
          text-wrap: pretty;
        }

        .pkg-highlight-box {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.65rem;
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #166534;
          margin-bottom: 1rem;
        }

        .pkg-highlight-icon {
          flex-shrink: 0;
          color: #16a34a;
        }

        .pkg-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
          margin-bottom: 1.1rem;
          padding-bottom: 0.85rem;
          border-bottom: 1px dashed var(--color-border);
        }

        .pkg-price-val {
          font-size: 1.45rem;
          font-weight: 900;
          color: var(--color-primary-dark);
          line-height: 1;
        }

        .pkg-price-unit {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .pkg-feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.25rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          flex: 1;
        }

        .pkg-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.825rem;
          color: var(--color-navy);
          line-height: 1.45;
          text-wrap: pretty;
        }

        .pkg-check-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pkg-cta-btn {
          width: 100%;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          font-size: 0.875rem;
          font-weight: 800;
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-top: auto;
          box-sizing: border-box;
          padding: 0.65rem 1rem;
        }

        .btn-standard {
          background-color: #f1f5f9;
          color: var(--color-navy);
          border: 1px solid #cbd5e1;
        }

        .btn-standard:hover {
          background-color: var(--color-primary-soft);
          border-color: var(--color-primary);
          color: var(--color-primary-dark);
        }

        .btn-popular {
          background-color: var(--color-primary);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(13, 118, 71, 0.25);
        }

        .btn-popular:hover {
          background-color: var(--color-primary-dark);
          box-shadow: 0 6px 18px rgba(13, 118, 71, 0.35);
          transform: translateY(-1px);
        }

        /* ==========================================================================
           2. DIRECTORY DIVIDER
           ========================================================================== */
        .directory-divider-wrap {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 2rem 0 1rem 0;
        }

        .directory-divider-line {
          flex: 1;
          height: 1px;
          background-color: var(--color-border);
        }

        .directory-divider-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 1rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .directory-intro-text {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 2.25rem auto;
        }

        .directory-intro-text p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin: 0;
          text-wrap: pretty;
        }

        /* ==========================================================================
           3. SEARCH & CATEGORY TOOLBAR
           ========================================================================== */
        .pricing-toolbar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .pricing-search-box {
          position: relative;
          width: 100%;
          max-width: 580px;
        }

        .search-icon {
          position: absolute;
          left: 1.1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
        }

        .pricing-search-input {
          width: 100%;
          min-height: 44px;
          padding: 0.75rem 2.8rem 0.75rem 2.8rem;
          font-size: 0.925rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background-color: #ffffff;
          color: var(--color-navy);
          box-sizing: border-box;
          outline: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all var(--transition-fast);
        }

        .pricing-search-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px var(--color-primary-soft);
        }

        .search-clear-btn {
          position: absolute;
          right: 1.1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          font-size: 0.85rem;
          padding: 0.4rem;
          min-width: 32px;
          min-height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pricing-category-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .category-tab-btn {
          min-height: 42px;
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          font-weight: 700;
          background-color: #ffffff;
          color: var(--color-navy);
          border: 1px solid var(--color-border);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .category-tab-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }

        .category-tab-btn.active {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: 0 2px 8px rgba(13, 118, 71, 0.25);
        }

        /* ==========================================================================
           4. 3-COLUMN DETAIL MATRIX GRID
           - Desktop: 3 Columns
           - Tablet: 2 Columns
           - Mobile: 1 Column
           ========================================================================== */
        .pricing-cards-grid-v2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 640px) {
          .pricing-cards-grid-v2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1040px) {
          .pricing-cards-grid-v2 {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        /* Detail Card Item */
        .service-matrix-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          box-sizing: border-box;
        }

        .service-matrix-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
          border-color: #a7f3d0;
        }

        .service-matrix-card.popular-matrix-card {
          border: 1.5px solid var(--color-primary);
          background-color: #ffffff;
          box-shadow: 0 4px 16px rgba(13, 118, 71, 0.08);
        }

        /* Header in Detail Card */
        .matrix-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .matrix-icon-with-badge {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }

        .matrix-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .matrix-cat-pill {
          font-size: 0.725rem;
          font-weight: 800;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .matrix-popular-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: #b45309;
          background-color: #fef3c7;
          border: 1px solid #fde68a;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        /* Category Color Tokens */
        .cat-green { background-color: #ecfdf5; color: #047857; }
        .cat-orange { background-color: #fffbeb; color: #b45309; }
        .cat-blue { background-color: #f0f9ff; color: #0369a1; }
        .cat-pink { background-color: #f8fafc; color: #475569; }
        .cat-teal { background-color: #f0fdfa; color: #0f766e; }
        .cat-purple { background-color: #f1f5f9; color: #334155; }
        .cat-indigo { background-color: #eff6ff; color: #1d4ed8; }
        .cat-emerald { background-color: #ecfdf5; color: #047857; }
        .cat-amber { background-color: #fffbeb; color: #b45309; }

        /* Detail Card Body */
        .matrix-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          flex: 1;
        }

        .matrix-service-name {
          font-size: clamp(0.98rem, 1.1vw, 1.08rem);
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.35;
          margin: 0;
          text-wrap: pretty;
          word-break: break-word;
        }

        .matrix-service-scope {
          font-size: 0.84rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
          flex: 1;
          text-wrap: pretty;
        }

        /* SLA timeline row */
        .matrix-timeline-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.785rem;
          color: var(--color-navy);
          margin-top: 0.35rem;
          padding-top: 0.55rem;
          border-top: 1px dashed var(--color-border);
        }

        .matrix-sla-clock {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        /* Detail Card Footer */
        .matrix-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding-top: 0.85rem;
          border-top: 1px solid var(--color-border);
          flex-wrap: wrap;
        }

        .matrix-price-wrap {
          display: flex;
          flex-direction: column;
          min-width: 90px;
        }

        .matrix-price-val {
          font-size: clamp(1.15rem, 1.35vw, 1.3rem);
          font-weight: 900;
          color: var(--color-primary-dark);
          line-height: 1.1;
        }

        .matrix-price-unit {
          font-size: 0.725rem;
          color: var(--color-text-muted);
          font-weight: 600;
          margin-top: 2px;
        }

        .matrix-action-btn {
          min-height: 40px;
          padding: 0.5rem 1rem;
          background-color: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          white-space: nowrap;
          transition: background-color var(--transition-fast), transform var(--transition-fast);
          flex-shrink: 0;
        }

        .matrix-action-btn:hover {
          background-color: var(--color-primary-dark);
          transform: translateY(-1px);
        }

        /* Expand/Collapse Button */
        .pricing-expand-toggle-wrap {
          display: flex;
          justify-content: center;
          margin-top: 1.25rem;
          margin-bottom: 2.75rem;
        }

        .pricing-expand-toggle-btn {
          min-height: 48px;
          padding: 0.75rem 1.85rem;
          background-color: #ffffff;
          border: 2px solid var(--color-primary);
          color: var(--color-primary-dark);
          font-size: 0.925rem;
          font-weight: 800;
          border-radius: var(--radius-full);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          box-shadow: 0 4px 12px rgba(13, 118, 71, 0.08);
          transition: all var(--transition-fast);
        }

        .pricing-expand-toggle-btn:hover {
          background-color: var(--color-primary-soft);
          border-color: var(--color-primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(13, 118, 71, 0.15);
        }

        /* Guarantee Banner */
        .pricing-guarantee-banner {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 18px;
          padding: 1.4rem 1.75rem;
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .no-services-found {
          text-align: center;
          padding: 3rem 1rem;
          background-color: #ffffff;
          border-radius: 16px;
          border: 1px dashed var(--color-border);
          margin-bottom: 2rem;
        }

        .btn-reset-filter {
          margin-top: 0.75rem;
          padding: 0.5rem 1.25rem;
          background-color: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
        }

        /* 14" Laptop 125% DPI scale (~1228px) safety adjustments */
        @media (max-width: 1240px) {
          .service-matrix-card {
            padding: 1.2rem;
          }
          .matrix-action-btn {
            padding: 0.45rem 0.85rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 640px) {
          .pricing-guarantee-banner {
            flex-direction: column;
            text-align: center;
            padding: 1.25rem;
          }
          .directory-divider-wrap {
            flex-direction: column;
            gap: 0.5rem;
          }
          .directory-divider-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
