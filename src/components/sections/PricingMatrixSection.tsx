import React, { useState, useEffect, useMemo } from 'react';
import { Container } from '../ui/Container';
import { CatalogServiceItem, TECH_CATEGORIES, TechCategoryKey } from '../../data/servicesCatalog';
import { getCatalogServices, subscribeCatalogChanges } from '../../services/pricingStorage';
import {
  ArrowRight,
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
  Zap,
  Check
} from 'lucide-react';
import { useRouter } from '../layout/Router';

interface PricingMatrixSectionProps {
  onOpenLeadForm?: (serviceName?: string) => void;
}

export const PricingMatrixSection: React.FC<PricingMatrixSectionProps> = ({ onOpenLeadForm }) => {
  const { navigate } = useRouter();
  const [services, setServices] = useState<CatalogServiceItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);

  useEffect(() => {
    setServices(getCatalogServices());
    const unsubscribe = subscribeCatalogChanges((updated) => {
      setServices(updated);
    });
    return unsubscribe;
  }, []);

  const activeServices = services.filter((s) => s.isActive);

  const filteredServices = useMemo(() => {
    return activeServices.filter((srv) => {
      const matchCategory = activeCategory === 'all' || srv.categoryGroup === activeCategory;
      if (!matchCategory) return false;
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

  const handleSelectService = (serviceName: string) => {
    if (onOpenLeadForm) {
      onOpenLeadForm(serviceName);
    } else {
      navigate('/lien-he');
    }
  };

  const mainCategories = [
    { key: 'all', label: 'Tất cả dịch vụ' },
    { key: 'website-landing', label: 'Website' },
    { key: 'google-seo', label: 'Google Maps' },
    { key: 'ads-conversion', label: 'Quảng cáo' },
    { key: 'digital-care', label: 'Chăm sóc tháng' },
    { key: 'crm-automation', label: 'Tự động hóa' }
  ];

  return (
    <section className="section-component pricing-premium-section" id="bang-gia" aria-label="Bảng giá dịch vụ">
      <Container size="wide">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} /> BẢNG GIÁ NIÊM YẾT MINH BẠCH
          </span>
          <h2>Bảng Giá Dịch Vụ Cố Định &amp; Bàn Giao</h2>
          <p className="subtitle">
            Không chi phí ẩn, không phát sinh mập mờ. Báo giá cố định trước khi làm, nghiệm thu hài lòng trên điện thoại mới thanh toán.
          </p>
        </div>

        {/* ASYMMETRIC 3-PACKAGE GRID */}
        <div className="asymmetric-pricing-layout">
          {/* PRIMARY FEATURED PACKAGE (Left 60%) */}
          <div className="package-card-featured">
            <div className="featured-ribbon-badge">
              <Sparkles size={14} /> ⭐ LỰA CHỌN KHUYÊN DÙNG CHO CỬA HÀNG &amp; DOANH NGHIỆP
            </div>

            <div className="featured-card-top">
              <div>
                <h3 className="featured-title">Gói Khởi Tạo Chuẩn (Website + Maps)</h3>
                <p className="featured-target">Dành cho cửa hàng, nhà thầu và tiệm dịch vụ muốn hiện diện số bài bản, chuyên nghiệp.</p>
              </div>
              <div className="featured-price-block">
                <div className="featured-price">2.900.000đ</div>
                <div className="featured-price-note">Trọn gói • Bàn giao 3–5 ngày</div>
              </div>
            </div>

            <div className="featured-features-list">
              <div className="feature-item">
                <CheckCircle2 size={18} className="feature-icon" />
                <div>
                  <strong>Website 3–5 trang hoàn chỉnh:</strong> Chuẩn thương hiệu, tải siêu nhanh dưới 1.5s, tối ưu 100% hiển thị trên điện thoại.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} className="feature-icon" />
                <div>
                  <strong>Xác minh Google Maps chính chủ:</strong> Cắm mốc định vị GPS chuẩn xác, hiển thị bài bản trên tìm kiếm địa phương.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} className="feature-icon" />
                <div>
                  <strong>Tặng bộ mã QR để bàn xin Review:</strong> File in chất lượng cao đặt tại quầy để khách quét đánh giá 5 sao tức thì.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} className="feature-icon" />
                <div>
                  <strong>Bàn giao 100% tài khoản:</strong> Đăng ký bằng CCCD &amp; Gmail của bạn. Video 2 phút hướng dẫn tự sửa nội dung.
                </div>
              </div>
            </div>

            <div className="featured-cta-row">
              <button
                type="button"
                className="btn btn-primary featured-btn"
                onClick={() => handleSelectService('Gói Khởi Tạo Chuẩn 2.900.000đ')}
              >
                Nhận Bản Demo 0đ Gói 2.9Tr <ArrowRight size={18} />
              </button>
              <span className="featured-guarantee">✓ Xem demo trước trên điện thoại • Nghiệm thu mới thanh toán</span>
            </div>
          </div>

          {/* SECONDARY PACKAGES (Right 40% - Stacked) */}
          <div className="package-secondary-stack">
            {/* Package 1: Starter 490k */}
            <div className="secondary-card">
              <div className="secondary-card-header">
                <div>
                  <span className="secondary-badge">TIẾT KIỆM &amp; NHANH NHẤT</span>
                  <h4 className="secondary-title">Gói Bán Hàng 1 Trang</h4>
                  <p className="secondary-sub">1 trang landing page gọn gàng nhận khách qua Zalo &amp; Hotline.</p>
                </div>
                <div className="secondary-price-box">
                  <div className="secondary-price">490.000đ</div>
                  <div className="secondary-unit">Trọn gói / 24h</div>
                </div>
              </div>

              <ul className="secondary-bullets">
                <li><Check size={14} /> Giao diện 1 chạm, chuẩn di động 100%</li>
                <li><Check size={14} /> Nút gọi hotline &amp; chat Zalo ngay trước mắt</li>
                <li><Check size={14} /> Bàn giao mã nguồn &amp; quyền sở hữu</li>
              </ul>

              <button
                type="button"
                className="btn btn-secondary secondary-btn"
                onClick={() => handleSelectService('Gói Bán Hàng 1 Trang 490.000đ')}
              >
                Chọn Gói 490k <ArrowRight size={16} />
              </button>
            </div>

            {/* Package 2: Care 990k */}
            <div className="secondary-card">
              <div className="secondary-card-header">
                <div>
                  <span className="secondary-badge">ĐỒNG HÀNH DÀI HẠN</span>
                  <h4 className="secondary-title">Gói Quản Trị &amp; Chăm Sóc</h4>
                  <p className="secondary-sub">Chăm sóc nội dung, hình ảnh &amp; kỹ thuật website, Google Maps định kỳ.</p>
                </div>
                <div className="secondary-price-box">
                  <div className="secondary-price">990.000đ</div>
                  <div className="secondary-unit">/ tháng</div>
                </div>
              </div>

              <ul className="secondary-bullets">
                <li><Check size={14} /> Đăng bài định kỳ duy trì top Google Maps</li>
                <li><Check size={14} /> Đổi giá, cập nhật hình ảnh &amp; tin tức qua Zalo 1-1</li>
                <li><Check size={14} /> Sao lưu dữ liệu &amp; bảo mật máy chủ 24/7</li>
              </ul>

              <button
                type="button"
                className="btn btn-secondary secondary-btn"
                onClick={() => handleSelectService('Gói Quản Trị & Chăm Sóc 990.000đ/tháng')}
              >
                Đăng Ký Gói Đồng Hành <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE 41-SERVICE CATALOG ACCORDION */}
        <div className="catalog-drawer-wrapper">
          <button
            type="button"
            className="catalog-toggle-btn"
            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            aria-expanded={isCatalogOpen}
          >
            <div className="toggle-left">
              <Layers size={18} className="toggle-icon" />
              <span>Cần sửa lỗi nhỏ hoặc dịch vụ kỹ thuật riêng lẻ? Xem toàn bộ 41 dịch vụ từ 99k</span>
            </div>
            <div className={`toggle-arrow ${isCatalogOpen ? 'open' : ''}`}>
              <ChevronDown size={18} />
            </div>
          </button>

          {isCatalogOpen && (
            <div className="catalog-content-box">
              {/* Filter Tabs & Search Bar */}
              <div className="catalog-toolbar">
                <div className="catalog-tabs-list">
                  {mainCategories.map((cat) => (
                    <button
                      key={cat.key}
                      type="button"
                      className={`catalog-tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat.key)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="catalog-search-box">
                  <Search size={16} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Tìm dịch vụ (vd: sửa SSL, cài maps, n8n...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="catalog-search-input"
                  />
                </div>
              </div>

              {/* Service Table / Cards */}
              <div className="catalog-items-grid">
                {filteredServices.slice(0, 16).map((item) => (
                  <div key={item.id} className="catalog-item-card">
                    <div className="item-card-top">
                      <h5 className="item-title">{item.name}</h5>
                      <span className="item-price">{item.priceDisplay}</span>
                    </div>
                    <p className="item-scope">{item.scope}</p>
                    <div className="item-card-bottom">
                      <span className="item-sla">⏱ {item.effort}</span>
                      <button
                        type="button"
                        className="btn-item-select"
                        onClick={() => handleSelectService(item.name)}
                      >
                        Chọn <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>

      <style>{`
        .pricing-premium-section {
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }

        .asymmetric-pricing-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 1024px) {
          .asymmetric-pricing-layout {
            grid-template-columns: 1.35fr 1fr;
            gap: 2rem;
            align-items: stretch;
          }
        }

        /* PRIMARY FEATURED PACKAGE */
        .package-card-featured {
          background-color: #ffffff;
          border: 2px solid var(--color-primary);
          border-radius: var(--radius-xl);
          padding: clamp(1.75rem, 3vw, 2.75rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          box-shadow: 0 12px 32px -6px rgba(13, 118, 71, 0.12);
        }

        .featured-ribbon-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: var(--color-primary-soft);
          color: var(--color-primary-dark);
          font-size: 0.8125rem;
          font-weight: 700;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        .featured-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--color-border-subtle);
          padding-bottom: 1.5rem;
        }

        .featured-title {
          font-size: 1.65rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0 0 0.35rem 0;
          line-height: 1.2;
        }

        .featured-target {
          font-size: 0.9375rem;
          color: var(--ink-soft);
          margin: 0;
          max-width: 480px;
        }

        .featured-price-block {
          text-align: right;
        }

        .featured-price {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .featured-price-note {
          font-size: 0.8125rem;
          color: var(--ink-muted);
          margin-top: 0.35rem;
        }

        .featured-features-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9375rem;
          color: var(--ink-body);
          line-height: 1.5;
        }

        .feature-item strong {
          color: var(--ink);
        }

        .feature-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .featured-cta-row {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .featured-btn {
          width: 100%;
          min-height: 52px;
          font-size: 1.0625rem;
          font-weight: 700;
        }

        .featured-guarantee {
          font-size: 0.8125rem;
          color: var(--ink-muted);
          text-align: center;
        }

        /* SECONDARY STACK */
        .package-secondary-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .secondary-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          transition: border-color var(--transition-fast);
        }

        .secondary-card:hover {
          border-color: var(--color-primary-border);
        }

        .secondary-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-sm);
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .secondary-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .secondary-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 0.25rem 0;
        }

        .secondary-sub {
          font-size: 0.875rem;
          color: var(--ink-soft);
          margin: 0;
        }

        .secondary-price-box {
          text-align: right;
          flex-shrink: 0;
        }

        .secondary-price {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--ink);
        }

        .secondary-unit {
          font-size: 0.75rem;
          color: var(--ink-muted);
        }

        .secondary-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .secondary-bullets li {
          font-size: 0.875rem;
          color: var(--ink-body);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .secondary-bullets li svg {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .secondary-btn {
          width: 100%;
          min-height: 44px;
        }

        /* CATALOG DRAWER */
        .catalog-drawer-wrapper {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          background-color: #ffffff;
          overflow: hidden;
        }

        .catalog-toggle-btn {
          width: 100%;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--ink);
          text-align: left;
        }

        .catalog-toggle-btn:hover {
          background-color: var(--color-surface-subtle);
        }

        .toggle-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .toggle-icon {
          color: var(--color-primary);
        }

        .toggle-arrow {
          transition: transform var(--transition-fast);
          color: var(--ink-muted);
        }

        .toggle-arrow.open {
          transform: rotate(180deg);
        }

        .catalog-content-box {
          padding: 1.5rem;
          border-top: 1px solid var(--color-border);
          background-color: var(--color-surface-subtle);
        }

        .catalog-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .catalog-tabs-list {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .catalog-tab-btn {
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background-color: #ffffff;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--ink-soft);
          cursor: pointer;
        }

        .catalog-tab-btn.active {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
        }

        .catalog-search-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.45rem 0.85rem;
          min-width: 260px;
        }

        .search-icon {
          color: var(--ink-muted);
        }

        .catalog-search-input {
          border: none;
          outline: none;
          font-size: 0.875rem;
          width: 100%;
          font-family: inherit;
        }

        .catalog-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }

        .catalog-item-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .item-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .item-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0;
        }

        .item-price {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-primary);
          white-space: nowrap;
        }

        .item-scope {
          font-size: 0.8125rem;
          color: var(--ink-soft);
          margin: 0;
          line-height: 1.4;
        }

        .item-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5rem;
          border-top: 1px solid var(--color-border-subtle);
        }

        .item-sla {
          font-size: 0.75rem;
          color: var(--ink-muted);
        }

        .btn-item-select {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
          background: none;
          border: none;
          cursor: pointer;
        }

        .btn-item-select:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

export default PricingMatrixSection;
