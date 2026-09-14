import React, { useState, useMemo, useEffect } from 'react';
import { Container } from '../ui/Container';
import { CatalogServiceItem } from '../../data/servicesCatalog';
import { getCatalogServices, subscribeCatalogChanges } from '../../services/pricingStorage';
import { COMPANY_DATA } from '../../data/company';
import {
  Search,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Globe,
  MapPin,
  TrendingUp,
  FileText,
  Cpu,
  X,
  Filter,
  Layers,
  HelpCircle,
  Tag,
  Check,
  LucideIcon
} from 'lucide-react';
import { Link } from '../layout/Router';

interface FullServicesCatalogSectionProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export type PillarFilterKey =
  | 'all'
  | 'thiet-ke-website'
  | 'google-maps-local-seo'
  | 'google-ads'
  | 'content-marketing'
  | 'automation';

interface PillarCategoryMapping {
  key: PillarFilterKey;
  id: string;
  name: string;
  canonicalPath: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  categoryGroups: string[];
  color: string;
  bgColor: string;
  borderColor: string;
}

const PILLAR_MAPPINGS: PillarCategoryMapping[] = [
  {
    key: 'thiet-ke-website',
    id: 'pillar-web',
    name: 'Thiết Kế Website Tốc Độ Cao',
    canonicalPath: '/thiet-ke-website',
    tagline: 'Website tải dưới 1s, chuẩn di động, bàn giao mới thanh toán',
    description: 'Thiết kế website 1 trang hoặc đa trang, tối ưu chuyển đổi gọi Zalo/Hotline, chuẩn SEO và cam kết PageSpeed 90+ trên Cloudflare.',
    icon: Globe,
    categoryGroups: ['website-landing', 'website-fix'],
    color: '#0d7647',
    bgColor: '#f0fdf4',
    borderColor: '#bbf7d0'
  },
  {
    key: 'google-maps-local-seo',
    id: 'pillar-maps',
    name: 'Google Maps & Local SEO',
    canonicalPath: '/google-maps-local-seo',
    tagline: 'Lên Top 3 tìm kiếm quanh bán kính 3-10km, xác minh GPS chính chủ',
    description: 'Khởi tạo, xác minh và tối ưu hồ sơ Google Business Profile chính chủ 100%. Tối ưu từ khóa địa phương, bộ QR đánh giá chân thực và chống cướp Maps.',
    icon: MapPin,
    categoryGroups: ['google-seo'],
    color: '#b45309',
    bgColor: '#fffbeb',
    borderColor: '#fde68a'
  },
  {
    key: 'google-ads',
    id: 'pillar-ads',
    name: 'Google Ads & Tìm Kiếm',
    canonicalPath: '/google-ads',
    tagline: 'Tiếp cận đúng khách đang có nhu cầu, 0% kê giá, tối ưu ngân sách',
    description: 'Thiết lập chiến dịch Google Ads, Facebook Ads 5km quanh tiệm, chặn click ảo và gắn trọn bộ theo dõi GA4/GTM/Pixel.',
    icon: TrendingUp,
    categoryGroups: ['ads-conversion', 'analytics-tracking'],
    color: '#1d4ed8',
    bgColor: '#eff6ff',
    borderColor: '#bfdbfe'
  },
  {
    key: 'content-marketing',
    id: 'pillar-content',
    name: 'Content Marketing & Chăm Sóc Số',
    canonicalPath: '/content-marketing',
    tagline: 'Chăm sóc nội dung, bài viết SEO, hình ảnh và bảo trì website định kỳ',
    description: 'Đồng hành chăm sóc website trọn gói, viết bài chuẩn SEO, bảo mật sao lưu định kỳ và chuẩn hóa pháp lý Bộ Công Thương.',
    icon: FileText,
    categoryGroups: ['digital-care', 'legal-compliance'],
    color: '#0f766e',
    bgColor: '#f0fdfa',
    borderColor: '#99f6e4'
  },
  {
    key: 'automation',
    id: 'pillar-automation',
    name: 'Phần Mềm & Tự Động Hóa',
    canonicalPath: '/automation',
    tagline: 'Báo đơn tức thì, Telegram, CRM Google Sheets, Chatbot AI 24/7',
    description: 'Tự động hóa tiếp nhận khách, báo tin nhắn Telegram, đồng bộ Google Sheets CRM và xây dựng chatbot AI tư vấn bán hàng.',
    icon: Cpu,
    categoryGroups: ['crm-automation', 'ai-software'],
    color: '#7e22ce',
    bgColor: '#faf5ff',
    borderColor: '#e9d5ff'
  }
];

export const FullServicesCatalogSection: React.FC<FullServicesCatalogSectionProps> = ({
  onOpenConsultForm
}) => {
  const [services, setServices] = useState<CatalogServiceItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<PillarFilterKey>('all');
  const [billingFilter, setBillingFilter] = useState<'all' | 'one-time' | 'monthly'>('all');

  useEffect(() => {
    setServices(getCatalogServices());
    const unsubscribe = subscribeCatalogChanges((updated) => {
      setServices(updated);
    });
    return unsubscribe;
  }, []);

  const activeServices = useMemo(() => {
    return services.filter((s) => s.isActive);
  }, [services]);

  // Helper map service to pillar
  const getPillarForService = (service: CatalogServiceItem): PillarCategoryMapping | undefined => {
    return PILLAR_MAPPINGS.find((p) => p.categoryGroups.includes(service.categoryGroup));
  };

  // Filtered services
  const filteredServices = useMemo(() => {
    return activeServices.filter((srv) => {
      // 1. Pillar filter
      if (selectedPillar !== 'all') {
        const targetPillar = PILLAR_MAPPINGS.find((p) => p.key === selectedPillar);
        if (!targetPillar || !targetPillar.categoryGroups.includes(srv.categoryGroup)) {
          return false;
        }
      }

      // 2. Billing filter
      if (billingFilter === 'monthly') {
        if (srv.unit !== 'tháng' && !srv.priceDisplay.includes('/tháng') && !srv.priceDisplay.includes('/th')) {
          return false;
        }
      } else if (billingFilter === 'one-time') {
        if (srv.unit === 'tháng' || srv.priceDisplay.includes('/tháng') || srv.priceDisplay.includes('/th')) {
          return false;
        }
      }

      // 3. Search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        srv.name.toLowerCase().includes(q) ||
        srv.code.toLowerCase().includes(q) ||
        srv.scope.toLowerCase().includes(q) ||
        srv.priceDisplay.toLowerCase().includes(q) ||
        (srv.notes && srv.notes.toLowerCase().includes(q))
      );
    });
  }, [activeServices, selectedPillar, billingFilter, searchQuery]);

  // Count items per pillar
  const countsPerPillar = useMemo(() => {
    const counts: Record<string, number> = { all: activeServices.length };
    PILLAR_MAPPINGS.forEach((p) => {
      counts[p.key] = activeServices.filter((s) => p.categoryGroups.includes(s.categoryGroup)).length;
    });
    return counts;
  }, [activeServices]);

  const handleSelectService = (srvName: string) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(srvName);
    }
  };

  return (
    <section className="comprehensive-catalog-section" id="danh-muc-dich-vu">
      <Container size="lg">
        {/* Section Header */}
        <div className="catalog-header-wrap">
          <div className="catalog-eyebrow">
            <Sparkles size={15} /> CATALOG ĐẦY ĐỦ 41+ MICRO-SERVICES
          </div>
          <h2 className="catalog-main-title">
            Bảng Giá Dịch Vụ Chi Tiết &amp; Tra Cứu Micro-Services
          </h2>
          <p className="catalog-subtitle">
            Toàn bộ dịch vụ từ sửa lỗi nhỏ 99k đến các gói giải pháp doanh nghiệp được niêm yết công khai.
            Không chi phí ẩn, nghiệm thu hài lòng đạt chuẩn 100% mới thanh toán.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="catalog-filter-card">
          {/* Search Box */}
          <div className="catalog-search-row">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon-left" />
              <input
                type="text"
                className="catalog-search-field"
                placeholder="Tìm kiếm dịch vụ (ví dụ: sửa SSL, Google Maps, GA4, Telegram, tăng tốc web...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Tìm kiếm micro-service"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  title="Xóa tìm kiếm"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Quick Billing Mode Filter */}
            <div className="billing-filter-group" role="group" aria-label="Lọc theo loại chi phí">
              <button
                type="button"
                className={`billing-pill-btn ${billingFilter === 'all' ? 'active' : ''}`}
                onClick={() => setBillingFilter('all')}
              >
                Tất cả hình thức
              </button>
              <button
                type="button"
                className={`billing-pill-btn ${billingFilter === 'one-time' ? 'active' : ''}`}
                onClick={() => setBillingFilter('one-time')}
              >
                Trọn gói 1 lần
              </button>
              <button
                type="button"
                className={`billing-pill-btn ${billingFilter === 'monthly' ? 'active' : ''}`}
                onClick={() => setBillingFilter('monthly')}
              >
                Gói duy trì theo tháng
              </button>
            </div>
          </div>

          {/* 5 Solution Pillars Navigation Tabs */}
          <div className="pillar-tabs-container">
            <div className="pillar-tabs-label">
              <Filter size={15} /> Nhóm theo 5 Trụ Cột Giải Pháp:
            </div>
            <div className="pillar-tabs-scroll">
              <button
                type="button"
                className={`pillar-tab-btn ${selectedPillar === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedPillar('all')}
              >
                <Layers size={16} />
                <span>Tất cả dịch vụ</span>
                <span className="count-badge">{countsPerPillar['all'] || 0}</span>
              </button>

              {PILLAR_MAPPINGS.map((pillar) => {
                const IconComp = pillar.icon;
                const isSelected = selectedPillar === pillar.key;
                const count = countsPerPillar[pillar.key] || 0;
                return (
                  <button
                    key={pillar.key}
                    type="button"
                    className={`pillar-tab-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedPillar(pillar.key)}
                  >
                    <IconComp size={16} />
                    <span>{pillar.name}</span>
                    <span className="count-badge">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Info Bar */}
        <div className="results-summary-bar">
          <span className="results-count">
            Hiển thị <strong>{filteredServices.length}</strong> dịch vụ phù hợp
            {selectedPillar !== 'all' && (
              <> thuộc trụ cột <strong>{PILLAR_MAPPINGS.find((p) => p.key === selectedPillar)?.name}</strong></>
            )}
            {searchQuery && <> với từ khóa &ldquo;<strong>{searchQuery}</strong>&rdquo;</>}
          </span>

          {(selectedPillar !== 'all' || billingFilter !== 'all' || searchQuery) && (
            <button
              type="button"
              className="btn-reset-filters"
              onClick={() => {
                setSelectedPillar('all');
                setBillingFilter('all');
                setSearchQuery('');
              }}
            >
              <X size={14} /> Xóa bộ lọc
            </button>
          )}
        </div>

        {/* Services Grid (Grouped by Pillar when viewing All, or Direct Grid when filtered) */}
        {selectedPillar === 'all' && !searchQuery && billingFilter === 'all' ? (
          // GROUPED VIEW BY 5 PILLARS
          <div className="pillars-grouped-view">
            {PILLAR_MAPPINGS.map((pillar) => {
              const IconComp = pillar.icon;
              const pillarServices = activeServices.filter((s) =>
                pillar.categoryGroups.includes(s.categoryGroup)
              );

              if (pillarServices.length === 0) return null;

              return (
                <div key={pillar.key} className="pillar-group-block">
                  <div className="pillar-group-banner" style={{ borderLeftColor: pillar.color }}>
                    <div className="pillar-banner-left">
                      <div className="pillar-banner-icon" style={{ color: pillar.color, backgroundColor: pillar.bgColor }}>
                        <IconComp size={22} />
                      </div>
                      <div>
                        <div className="pillar-banner-title-row">
                          <h3 className="pillar-banner-title">{pillar.name}</h3>
                          <span className="pillar-banner-count">{pillarServices.length} dịch vụ</span>
                        </div>
                        <p className="pillar-banner-tagline">{pillar.tagline}</p>
                      </div>
                    </div>

                    <Link to={pillar.canonicalPath} className="pillar-banner-link">
                      <span>Xem giải pháp</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="catalog-cards-grid">
                    {pillarServices.map((service) => (
                      <ServiceCard
                        key={service.id}
                        service={service}
                        pillar={pillar}
                        onSelect={() => handleSelectService(service.name)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // FILTERED OR SEARCHED GRID VIEW
          <>
            {filteredServices.length === 0 ? (
              <div className="empty-catalog-state">
                <HelpCircle size={40} className="empty-icon" />
                <h3>Không tìm thấy dịch vụ phù hợp</h3>
                <p>
                  Vui lòng thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc để xem toàn bộ danh mục 41+ dịch vụ.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedPillar('all');
                    setBillingFilter('all');
                    setSearchQuery('');
                  }}
                >
                  Xem toàn bộ 41+ dịch vụ
                </button>
              </div>
            ) : (
              <div className="catalog-cards-grid">
                {filteredServices.map((service) => {
                  const pillar = getPillarForService(service) || PILLAR_MAPPINGS[0];
                  return (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      pillar={pillar}
                      onSelect={() => handleSelectService(service.name)}
                    />
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* Bottom Trust Guarantee Strip */}
        <div className="catalog-trust-footer">
          <div className="trust-col">
            <ShieldCheck size={24} className="trust-icon" />
            <div>
              <strong>Nghiệm thu đạt chuẩn 100% mới thanh toán</strong>
              <p>Khách hàng kiểm tra hoạt động mượt mà trên điện thoại thực tế trước khi thanh toán.</p>
            </div>
          </div>
          <div className="trust-col">
            <CheckCircle2 size={24} className="trust-icon" />
            <div>
              <strong>Bàn giao tài khoản chính chủ 100%</strong>
              <p>Toàn bộ tài khoản Cloudflare, Google Maps, mã nguồn đều đứng tên email của bạn.</p>
            </div>
          </div>
          <div className="trust-col">
            <Clock size={24} className="trust-icon" />
            <div>
              <strong>Báo giá trước — Không chi phí ẩn</strong>
              <p>Mức giá niêm yết rõ ràng, cam kết không phát sinh phụ phí vô lý trong quá trình triển khai.</p>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .comprehensive-catalog-section {
          background-color: #ffffff;
          padding: 3.5rem 0 4.5rem 0;
          border-top: 1px solid #e2e8f0;
          font-family: inherit;
          scrollbar-gutter: stable;
        }

        .catalog-header-wrap {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 2.5rem auto;
        }

        .catalog-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #0d7647;
          background-color: #e6f7ef;
          padding: 0.4rem 0.95rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
          border: 1px solid #bbf7d0;
        }

        .catalog-main-title {
          font-size: clamp(1.85rem, 3.8vw, 2.5rem);
          color: #0f172a;
          font-weight: 900;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
          text-wrap: pretty;
        }

        .catalog-subtitle {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
          text-wrap: pretty;
        }

        /* Filter Card */
        .catalog-filter-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.75rem;
        }

        .catalog-search-row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        @media (min-width: 768px) {
          .catalog-search-row {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .search-input-wrapper {
          position: relative;
          flex: 1;
        }

        .search-icon-left {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          pointer-events: none;
        }

        .catalog-search-field {
          width: 100%;
          height: 46px;
          padding: 0 40px 0 42px;
          background-color: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: 10px;
          font-size: 0.95rem;
          color: #0f172a;
          font-family: inherit;
          box-sizing: border-box;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .catalog-search-field:focus {
          outline: none;
          border-color: #0d7647;
          box-shadow: 0 0 0 3px rgba(13, 118, 71, 0.12);
        }

        .search-clear-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }

        .search-clear-btn:hover {
          color: #0f172a;
          background-color: #f1f5f9;
        }

        .billing-filter-group {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .billing-pill-btn {
          font-size: 0.825rem;
          font-weight: 600;
          color: #475569;
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
          min-height: 38px;
        }

        .billing-pill-btn:hover {
          color: #0f172a;
          border-color: #94a3b8;
          background-color: #f8fafc;
        }

        .billing-pill-btn.active {
          color: #0d7647;
          background-color: #e6f7ef;
          border-color: #86efac;
          font-weight: 700;
        }

        /* 5 Pillars Tabs */
        .pillar-tabs-container {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .pillar-tabs-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pillar-tabs-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: thin;
        }

        .pillar-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 650;
          color: #334155;
          background-color: #ffffff;
          border: 1.5px solid #cbd5e1;
          padding: 8px 14px;
          border-radius: 10px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
          min-height: 42px;
        }

        .pillar-tab-btn:hover {
          color: #0d7647;
          background-color: #f0fdf4;
          border-color: #86efac;
        }

        .pillar-tab-btn.active {
          color: #ffffff;
          background-color: #0d7647;
          border-color: #0d7647;
          box-shadow: 0 2px 6px rgba(13, 118, 71, 0.2);
        }

        .pillar-tab-btn .count-badge {
          font-size: 0.75rem;
          font-weight: 800;
          background-color: #f1f5f9;
          color: #475569;
          padding: 2px 8px;
          border-radius: 9999px;
          transition: all 0.15s ease;
        }

        .pillar-tab-btn.active .count-badge {
          background-color: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }

        /* Results bar */
        .results-summary-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          color: #64748b;
        }

        .results-count strong {
          color: #0f172a;
        }

        .btn-reset-filters {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.825rem;
          font-weight: 600;
          color: #dc2626;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 6px;
        }

        .btn-reset-filters:hover {
          background-color: #fef2f2;
        }

        /* Pillars Grouped View */
        .pillars-grouped-view {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .pillar-group-block {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .pillar-group-banner {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-left: 5px solid #0d7647;
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .pillar-group-banner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .pillar-banner-left {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .pillar-banner-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-banner-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .pillar-banner-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .pillar-banner-count {
          font-size: 0.75rem;
          font-weight: 700;
          color: #0d7647;
          background-color: #e6f7ef;
          padding: 2px 8px;
          border-radius: 9999px;
          border: 1px solid #bbf7d0;
        }

        .pillar-banner-tagline {
          font-size: 0.9rem;
          color: #475569;
          margin: 0.25rem 0 0 0;
        }

        .pillar-banner-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #0d7647;
          background-color: #ffffff;
          border: 1px solid #bbf7d0;
          padding: 8px 14px;
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.15s ease;
          align-self: flex-start;
        }

        @media (min-width: 640px) {
          .pillar-banner-link {
            align-self: center;
          }
        }

        .pillar-banner-link:hover {
          background-color: #0d7647;
          color: #ffffff;
          border-color: #0d7647;
        }

        /* Catalog Cards Grid */
        .catalog-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .catalog-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .catalog-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Service Card */
        .catalog-service-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
          position: relative;
        }

        .catalog-service-card:hover {
          border-color: #86efac;
          box-shadow: 0 8px 24px -4px rgba(13, 118, 71, 0.08);
          transform: translateY(-2px);
        }

        .card-top-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .service-code-tag {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.75rem;
          font-weight: 700;
          color: #475569;
          background-color: #f1f5f9;
          padding: 2px 7px;
          border-radius: 5px;
          border: 1px solid #e2e8f0;
        }

        .popular-badge {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 0.7rem;
          font-weight: 800;
          color: #92400e;
          background-color: #fef3c7;
          border: 1px solid #fde68a;
          padding: 2px 8px;
          border-radius: 9999px;
        }

        .service-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.35;
          margin: 0 0 0.65rem 0;
          text-wrap: pretty;
        }

        .service-price-box {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 0.85rem;
        }

        .service-price-display {
          font-size: 1.45rem;
          font-weight: 900;
          color: #0d7647;
          line-height: 1;
        }

        .service-unit {
          font-size: 0.825rem;
          color: #64748b;
          font-weight: 600;
        }

        .service-scope-text {
          font-size: 0.875rem;
          color: #334155;
          line-height: 1.55;
          margin: 0 0 1rem 0;
          flex-grow: 1;
        }

        .service-free-addons {
          background-color: #f0fdf4;
          border: 1px dashed #86efac;
          border-radius: 8px;
          padding: 0.65rem 0.85rem;
          margin-bottom: 1rem;
          font-size: 0.8rem;
          color: #166534;
        }

        .addons-label {
          font-weight: 700;
          margin-bottom: 0.25rem;
          display: block;
        }

        .addons-list {
          margin: 0;
          padding-left: 1.15rem;
        }

        .addons-list li {
          margin-bottom: 2px;
        }

        .service-disclaimer-note {
          font-size: 0.775rem;
          color: #64748b;
          background-color: #f8fafc;
          padding: 0.45rem 0.65rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          line-height: 1.4;
          border-left: 3px solid #cbd5e1;
        }

        .card-bottom-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px solid #f1f5f9;
          gap: 0.5rem;
        }

        .service-sla-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.775rem;
          font-weight: 600;
          color: #64748b;
        }

        .btn-select-service {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.825rem;
          font-weight: 700;
          color: #ffffff;
          background-color: #0d7647;
          border: 1px solid #0d7647;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease;
          min-height: 38px;
        }

        .btn-select-service:hover {
          background-color: #0a5c37;
          border-color: #0a5c37;
          transform: translateY(-1px);
        }

        /* Empty state */
        .empty-catalog-state {
          text-align: center;
          padding: 3.5rem 1.5rem;
          background-color: #f8fafc;
          border: 1px dashed #cbd5e1;
          border-radius: 16px;
          max-width: 540px;
          margin: 1.5rem auto;
        }

        .empty-icon {
          color: #94a3b8;
          margin-bottom: 1rem;
        }

        .empty-catalog-state h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .empty-catalog-state p {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0 0 1.25rem 0;
          line-height: 1.5;
        }

        /* Trust footer */
        .catalog-trust-footer {
          margin-top: 3.5rem;
          padding: 1.75rem 2rem;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .catalog-trust-footer {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.75rem;
          }
        }

        .trust-col {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .trust-col .trust-icon {
          color: #0d7647;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .trust-col strong {
          display: block;
          font-size: 0.9rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }

        .trust-col p {
          font-size: 0.8rem;
          color: #475569;
          margin: 0;
          line-height: 1.45;
        }
      `}</style>
    </section>
  );
};

interface ServiceCardProps {
  service: CatalogServiceItem;
  pillar: PillarCategoryMapping;
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, pillar, onSelect }) => {
  return (
    <div className="catalog-service-card">
      <div>
        <div className="card-top-meta">
          <span className="service-code-tag">{service.code}</span>
          {service.isPopular && (
            <span className="popular-badge">
              <Sparkles size={11} /> Nổi bật
            </span>
          )}
        </div>

        <h4 className="service-name">{service.name}</h4>

        <div className="service-price-box">
          <span className="service-price-display">{service.priceDisplay}</span>
          <span className="service-unit">/ {service.unit}</span>
        </div>

        <p className="service-scope-text">{service.scope}</p>

        {service.includedFreeAddons && service.includedFreeAddons.length > 0 && (
          <div className="service-free-addons">
            <span className="addons-label">🎁 Đã bao gồm miễn phí:</span>
            <ul className="addons-list">
              {service.includedFreeAddons.map((addon, idx) => (
                <li key={idx}>{addon}</li>
              ))}
            </ul>
          </div>
        )}

        {service.disclaimer && (
          <div className="service-disclaimer-note">
            ℹ️ {service.disclaimer}
          </div>
        )}
      </div>

      <div className="card-bottom-actions">
        <span className="service-sla-tag">
          <Clock size={13} /> {service.effort}
        </span>
        <button
          type="button"
          className="btn-select-service"
          onClick={onSelect}
          title={`Chọn dịch vụ ${service.name}`}
        >
          <span>Chọn dịch vụ</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
};

export default FullServicesCatalogSection;
