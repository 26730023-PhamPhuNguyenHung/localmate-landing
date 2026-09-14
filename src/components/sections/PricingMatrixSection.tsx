import React, { useState, useEffect, useMemo } from 'react';
import { Container } from '../ui/Container';
import { CatalogServiceItem } from '../../data/servicesCatalog';
import { getCatalogServices, subscribeCatalogChanges } from '../../services/pricingStorage';
import {
  ArrowRight,
  Sparkles,
  Search,
  CheckCircle2,
  ChevronDown,
  Layers,
  Zap,
  Check,
  ShieldCheck,
  Key,
  HelpCircle,
  Clock,
  Minus,
  TableProperties,
  LayoutGrid
} from 'lucide-react';
import { useRouter } from '../layout/Router';

interface PricingMatrixSectionProps {
  onOpenLeadForm?: (serviceName?: string) => void;
}

// 3 Cấp độ Dịch vụ Chuẩn WebFX
interface ServiceTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  unit: string;
  target: string;
  timeline: string;
  highlights: string[];
  ctaText: string;
}

const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'starter',
    name: 'Gói Khởi Động (Starter)',
    badge: 'TIẾT KIỆM & NHANH NHẤT',
    isPopular: false,
    price: '1.490.000đ',
    unit: 'Trọn gói / 24–48h',
    target: 'Dành cho hộ cá thể, tiệm làm đẹp nhỏ, quán ăn mới mở, dịch vụ sửa chữa độc lập.',
    timeline: '24–48 giờ',
    highlights: [
      '1 Landing Page chuẩn di động, tốc độ tải dưới 1.8s',
      'Xác minh & cắm mốc Google Maps cơ bản',
      'Nút gọi Hotline & chat Zalo 1 chạm nhận khách ngay',
      'Mã QR điện tử xin đánh giá Google Maps',
      'Bàn giao 100% tài khoản chính chủ (Gmail của bạn)',
      'Cam kết: Nghiệm thu đạt chuẩn 100% mới thanh toán'
    ],
    ctaText: 'Chọn Gói Khởi Động'
  },
  {
    id: 'growth',
    name: 'Gói Tăng Trưởng (Growth)',
    badge: '⭐ ĐƯỢC CHỌN NHIỀU NHẤT (KHUYÊN DÙNG)',
    isPopular: true,
    price: '2.900.000đ',
    unit: 'Trọn gói / 3–5 ngày',
    target: 'Dành cho cửa hàng bán lẻ, nhà thầu xây dựng, phòng khám, spa thẩm mỹ và tiệm dịch vụ địa phương.',
    timeline: '3–5 ngày làm việc',
    highlights: [
      'Website 3–5 trang hoàn chỉnh, chuẩn SEO, PageSpeed 95+',
      'Xác minh Google Maps GPS chính chủ 100% (CCCD & Gmail)',
      'Tặng bộ ấn phẩm mã QR Mica/Decal để bàn giúp khách để lại đánh giá chân thực trên Google',
      'Form tư vấn tự động gửi chuông báo về Telegram/Zalo',
      'Tặng 1 năm Cloudflare Edge Hosting tốc độ cao',
      'Video 2 phút hướng dẫn chủ shop tự sửa nội dung 1-1',
      'Cam kết: Nghiệm thu đạt chuẩn 100% mới thanh toán'
    ],
    ctaText: 'Nhận Bản Demo Gói 2.9Tr'
  },
  {
    id: 'enterprise',
    name: 'Gói Doanh Nghiệp (Enterprise)',
    badge: 'QUY MÔ LỚN & ĐA ĐIỂM',
    isPopular: false,
    price: '5.900.000đ',
    unit: 'Trọn gói / 7–14 ngày',
    target: 'Dành cho chuỗi bán lẻ đa chi nhánh, công ty sản xuất B2B, trung tâm đào tạo cần hệ thống số hóa bài bản.',
    timeline: '7–14 ngày làm việc',
    highlights: [
      'Website 7–10 trang thiết kế độc bản theo nhận diện thương hiệu',
      'Quản trị Google Maps chuỗi đa chi nhánh (Multi-location)',
      'Đồng bộ CRM / Google Sheets qua Webhook tự động nhận lead',
      'Tracking chuyên sâu: GA4 + Meta Pixel + Server-side GTM',
      'Hạ tầng Cloudflare Enterprise Pro bảo mật cao cấp',
      'Onboarding trực tiếp 1-1 cho đội ngũ nhân sự',
      'Cam kết: Bàn giao toàn bộ mã nguồn Git & tài khoản chính chủ'
    ],
    ctaText: 'Đăng Ký Gói Doanh Nghiệp'
  }
];

// WebFX Deliverables Comparison Matrix (Chi tiết sản phẩm bàn giao theo nhóm)
interface DeliverableRow {
  name: string;
  hint?: string;
  starter: string | boolean;
  growth: string | boolean;
  enterprise: string | boolean;
}

interface DeliverableGroup {
  groupName: string;
  rows: DeliverableRow[];
}

const WEBFX_DELIVERABLES_MATRIX: DeliverableGroup[] = [
  {
    groupName: '1. Nền Tảng & Thiết Kế Website',
    rows: [
      {
        name: 'Số lượng trang bàn giao',
        hint: 'Cấu trúc trang chuẩn nhận diện thương hiệu',
        starter: '1 Landing Page tinh gọn',
        growth: '3 – 5 Trang hoàn chỉnh',
        enterprise: '7 – 10 Trang (Đa trang cao cấp)'
      },
      {
        name: 'Tốc độ tải trang di động (PageSpeed)',
        hint: 'Tối ưu Core Web Vitals của Google',
        starter: '< 1.8s (Tối ưu chuẩn)',
        growth: '< 1.2s (Google PageSpeed 95+)',
        enterprise: '< 0.8s (Edge CDN toàn cầu)'
      },
      {
        name: 'Giao diện hiển thị trên điện thoại',
        hint: 'Chuẩn UX/UI đo ni đóng giày',
        starter: '100% Chuẩn di động',
        growth: 'Chuẩn UX/UI hành vi khách hàng',
        enterprise: 'Thiết kế độc bản theo Brand Identity'
      },
      {
        name: 'Tên miền & Hạ tầng Hosting',
        hint: 'Lưu trữ đám mây bảo mật',
        starter: 'Hỗ trợ trỏ tên miền của bạn',
        growth: 'Tặng 1 năm Cloudflare Edge Hosting',
        enterprise: 'Hạ tầng Cloudflare Enterprise Pro'
      },
      {
        name: 'Chứng chỉ bảo mật SSL (HTTPS)',
        hint: 'Khóa xanh bảo mật chống đánh cắp dữ liệu',
        starter: true,
        growth: true,
        enterprise: true
      },
      {
        name: 'Tối ưu On-page SEO & Schema Markup',
        hint: 'Khai báo cấu trúc dữ liệu cho Google bot',
        starter: 'Thẻ meta & OpenGraph cơ bản',
        growth: 'Schema LocalBusiness chuẩn Google',
        enterprise: 'Toàn diện Entity & Semantic SEO'
      }
    ]
  },
  {
    groupName: '2. Định Danh & Google Maps (Local SEO)',
    rows: [
      {
        name: 'Xác minh Google Business Profile',
        hint: 'Cắm mốc GPS địa chỉ chính chủ',
        starter: 'Hỗ trợ xác minh cơ bản',
        growth: 'Xác minh chính chủ GPS 100%',
        enterprise: 'Quản trị chuỗi đa chi nhánh (Multi-location)'
      },
      {
        name: 'Tối ưu hồ sơ & Danh mục ngành nghề',
        hint: 'Giúp Google xếp hạng khi khách tìm gần đây',
        starter: 'Cập nhật giờ & SĐT',
        growth: 'Tối ưu danh mục ngách & từ khóa dịch vụ',
        enterprise: 'Chiến lược phủ từ khóa bán kính 10–15km'
      },
      {
        name: 'Bộ ấn phẩm QR Code đánh giá chân thực trên Google',
        hint: 'Tăng uy tín & lượt đánh giá thực tế',
        starter: 'Mã QR điện tử (PNG/SVG)',
        growth: 'Bộ file in Mica/Decal để bàn cao cấp',
        enterprise: 'Bộ ấn phẩm toàn chuỗi + Kịch bản xin review'
      },
      {
        name: 'Geotag hình ảnh & Đăng bài Maps',
        hint: 'Hình ảnh gắn tọa độ kinh độ vĩ độ thực tế',
        starter: '3 ảnh nhận diện',
        growth: '10 ảnh định vị Geotag + 2 bài viết',
        enterprise: '25+ ảnh Geotag + 5 bài chuẩn SEO'
      }
    ]
  },
  {
    groupName: '3. Chuyển Đổi & Tự Động Hóa Lead (Khách Hàng)',
    rows: [
      {
        name: 'Nút gọi Hotline & Chat Zalo OA 1 chạm',
        hint: 'Khách chỉ cần bấm là kết nối ngay',
        starter: true,
        growth: true,
        enterprise: true
      },
      {
        name: 'Form tư vấn & Báo giá thông minh',
        hint: 'Thu thập nhu cầu khách hàng tự động',
        starter: false,
        growth: 'Form chuẩn lọc nhu cầu khách',
        enterprise: 'Form đa bước + Chatbot AI tự động'
      },
      {
        name: 'Chuông báo khách mới (Lead Alerts)',
        hint: 'Thông báo ngay tức thì khi có người gửi liên hệ',
        starter: 'Nhận qua Email',
        growth: 'Chuông báo Telegram / Zalo tức thì',
        enterprise: 'Đẩy tự động vào CRM / Google Sheets'
      },
      {
        name: 'Cài đặt mã đo lường (GA4, Pixel)',
        hint: 'Theo dõi hành vi và chuyển đổi khách hàng',
        starter: 'Google Analytics 4',
        growth: 'GA4 + Meta Pixel + Google Ads Tag',
        enterprise: 'Full tracking Server-side GTM + Phễu'
      }
    ]
  },
  {
    groupName: '4. Bàn Giao & Quyền Sở Hữu (Minh Bạch 100%)',
    rows: [
      {
        name: 'Bàn giao tài khoản chính chủ',
        hint: 'Đăng ký bằng CCCD & Gmail của khách hàng',
        starter: '100% Chính chủ (Gmail của bạn)',
        growth: '100% Chính chủ (CCCD & Gmail)',
        enterprise: '100% Toàn quyền tổ chức doanh nghiệp'
      },
      {
        name: 'Quyền sở hữu mã nguồn & Dữ liệu',
        hint: 'Không mã hóa code, không giữ con tin dữ liệu',
        starter: 'Bàn giao trọn vẹn mã nguồn',
        growth: 'Bàn giao 100% mã nguồn sạch',
        enterprise: 'Kho mã nguồn Git riêng + Tài liệu API'
      },
      {
        name: 'Video & Tài liệu hướng dẫn quản trị',
        hint: 'Dễ dàng tự cập nhật thông tin và hình ảnh',
        starter: 'Tài liệu hướng dẫn PDF',
        growth: 'Video 2 phút quay riêng cho chủ shop',
        enterprise: 'Buổi Onboarding trực tiếp 1-1 cho nhân sự'
      },
      {
        name: 'Cam kết không phí duy trì ẩn',
        hint: 'Minh bạch 100% theo tiêu chuẩn WebFX',
        starter: 'Tuyệt đối không phí ngầm',
        growth: 'Tuyệt đối không phí ngầm',
        enterprise: 'Tuyệt đối không phí ngầm'
      }
    ]
  },
  {
    groupName: '5. Nghiệm Thu, Bảo Hành & Cam Kết WebFX',
    rows: [
      {
        name: 'Cam kết điều kiện thanh toán',
        hint: 'Chỉ thanh toán khi thực sự hài lòng',
        starter: 'Nghiệm thu đạt chuẩn 100% mới thanh toán',
        growth: 'Nghiệm thu đạt chuẩn 100% mới thanh toán',
        enterprise: 'Thanh toán theo nghiệm thu từng mốc'
      },
      {
        name: 'Thời gian hoàn thiện bàn giao',
        hint: 'Tiến độ cam kết đúng thời hạn',
        starter: '24 – 48 giờ',
        growth: '3 – 5 ngày làm việc',
        enterprise: '7 – 14 ngày làm việc'
      },
      {
        name: 'Thời gian bảo hành kỹ thuật',
        hint: 'Hỗ trợ khắc phục lỗi phát sinh',
        starter: '6 tháng kỹ thuật',
        growth: '12 tháng + Backup tự động định kỳ',
        enterprise: 'Đồng hành kỹ thuật lâu dài + SLA phản hồi < 2h'
      }
    ]
  }
];

export const PricingMatrixSection: React.FC<PricingMatrixSectionProps> = ({ onOpenLeadForm }) => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'tiers' | 'matrix'>('tiers');
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
    <section className="section-component pricing-premium-section" id="bang-gia" aria-label="Bảng giá dịch vụ và sản phẩm bàn giao">
      <Container size="wide">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} /> BẢNG GIÁ &amp; BÀN GIAO CHUẨN WEBFX
          </span>
          <h2>Minh Bạch 100% Chi Phí &amp; Sản Phẩm Bàn Giao</h2>
          <p className="subtitle">
            Không chi phí ẩn, không phát sinh mập mờ. Kiểm tra trực tiếp trên điện thoại, nghiệm thu hài lòng đạt chuẩn 100% mới thanh toán.
          </p>
        </div>

        {/* 2 GOLDEN GUARANTEES CALLOUT (WebFX Transparency Standard) */}
        <div className="trust-guarantees-grid">
          <div className="trust-guarantee-card">
            <div className="guarantee-icon-wrap">
              <ShieldCheck size={26} className="guarantee-icon" />
            </div>
            <div className="guarantee-content">
              <div className="guarantee-badge">CAM KẾT 01 • ZERO RỦI RO</div>
              <h3 className="guarantee-title">Nghiệm thu đạt chuẩn 100% mới thanh toán</h3>
              <p className="guarantee-desc">
                Bạn được xem trước bản demo hoạt động thực tế trên chính điện thoại của mình. Kiểm tra số hotline, định vị GPS bản đồ, form đăng ký hoạt động hoàn hảo 100% mới thanh toán.
              </p>
            </div>
          </div>

          <div className="trust-guarantee-card">
            <div className="guarantee-icon-wrap">
              <Key size={26} className="guarantee-icon" />
            </div>
            <div className="guarantee-content">
              <div className="guarantee-badge">CAM KẾT 02 • BÀN GIAO CHÍNH CHỦ 100%</div>
              <h3 className="guarantee-title">Bàn giao tài khoản chính chủ 100%</h3>
              <p className="guarantee-desc">
                Toàn bộ tên miền, Cloudflare, Google Maps được đăng ký trực tiếp bằng CCCD &amp; Gmail của bạn. Bàn giao đầy đủ mã nguồn và quyền quản trị cao nhất, tuyệt đối không giữ con tin kỹ thuật.
              </p>
            </div>
          </div>
        </div>

        {/* VIEW SWITCHER TABS (Tiers View vs WebFX Deliverables Matrix) */}
        <div className="pricing-view-switch">
          <button
            type="button"
            className={`switch-tab-btn ${activeTab === 'tiers' ? 'active' : ''}`}
            onClick={() => setActiveTab('tiers')}
          >
            <LayoutGrid size={16} />
            <span>3 Cấp Độ Dịch Vụ Tiêu Biểu</span>
          </button>
          <button
            type="button"
            className={`switch-tab-btn ${activeTab === 'matrix' ? 'active' : ''}`}
            onClick={() => setActiveTab('matrix')}
          >
            <TableProperties size={16} />
            <span>Bảng So Sánh Quyền Lợi Bàn Giao Chi Tiết (WebFX)</span>
          </button>
        </div>

        {/* TAB 1: 3 SERVICE TIERS CARDS */}
        {activeTab === 'tiers' && (
          <div className="tiers-cards-grid">
            {SERVICE_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`tier-card ${tier.isPopular ? 'popular-card' : ''}`}
              >
                {tier.badge && (
                  <div className="tier-top-badge">
                    {tier.badge}
                  </div>
                )}

                <div className="tier-header">
                  <h3 className="tier-name">{tier.name}</h3>
                  <p className="tier-target">{tier.target}</p>
                </div>

                <div className="tier-price-box">
                  <div className="tier-price">{tier.price}</div>
                  <div className="tier-unit">{tier.unit}</div>
                </div>

                <div className="tier-meta-bar">
                  <span className="tier-meta-item">
                    <Clock size={14} /> Bàn giao: <strong>{tier.timeline}</strong>
                  </span>
                </div>

                <div className="tier-features-wrap">
                  <div className="tier-features-heading">Sản phẩm &amp; Quyền lợi bàn giao:</div>
                  <ul className="tier-features-list">
                    {tier.highlights.map((item, idx) => (
                      <li key={idx} className="tier-feature-item">
                        <CheckCircle2 size={16} className="feature-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tier-cta-box">
                  <button
                    type="button"
                    className={`btn ${tier.isPopular ? 'btn-primary' : 'btn-secondary'} tier-action-btn`}
                    onClick={() => handleSelectService(`${tier.name} - ${tier.price}`)}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight size={16} />
                  </button>
                  <span className="tier-cta-guarantee">
                    ✓ Nghiệm thu 100% mới thanh toán • Bàn giao chính chủ
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: WEBFX COMPREHENSIVE DELIVERABLES MATRIX TABLE */}
        {activeTab === 'matrix' && (
          <div className="webfx-matrix-container">
            <div className="matrix-table-card">
              <div className="matrix-card-header">
                <div>
                  <h3 className="matrix-card-title">Ma Trận Đối Chiếu Chi Tiết Quyền Lợi Bàn Giao</h3>
                  <p className="matrix-card-sub">
                    Minh bạch hóa 100% từng hạng mục công việc, cam kết bàn giao và chính sách bảo hành giữa 3 cấp độ doanh nghiệp.
                  </p>
                </div>
                <div className="matrix-legend">
                  <span className="legend-item"><Check size={14} className="legend-check" /> Có bàn giao</span>
                  <span className="legend-item"><Minus size={14} className="legend-minus" /> Không áp dụng</span>
                </div>
              </div>

              <div className="matrix-table-scroll">
                <table className="webfx-table">
                  <thead>
                    <tr>
                      <th className="col-feature">Hạng mục sản phẩm bàn giao</th>
                      <th className="col-tier starter-header">
                        <div className="th-tier-name">Gói Khởi Động</div>
                        <div className="th-tier-price">1.490.000đ</div>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm th-tier-btn"
                          onClick={() => handleSelectService('Gói Khởi Động 1.490.000đ')}
                        >
                          Chọn Gói
                        </button>
                      </th>
                      <th className="col-tier growth-header">
                        <div className="th-recommended-badge">⭐ KHUYÊN DÙNG</div>
                        <div className="th-tier-name">Gói Tăng Trưởng</div>
                        <div className="th-tier-price">2.900.000đ</div>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm th-tier-btn"
                          onClick={() => handleSelectService('Gói Tăng Trưởng 2.900.000đ')}
                        >
                          Nhận Demo 0đ
                        </button>
                      </th>
                      <th className="col-tier enterprise-header">
                        <div className="th-tier-name">Gói Doanh Nghiệp</div>
                        <div className="th-tier-price">5.900.000đ</div>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm th-tier-btn"
                          onClick={() => handleSelectService('Gói Doanh Nghiệp 5.900.000đ')}
                        >
                          Đăng Ký Gói
                        </button>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {WEBFX_DELIVERABLES_MATRIX.map((group, gIdx) => (
                      <React.Fragment key={gIdx}>
                        <tr className="group-header-row">
                          <td colSpan={4} className="group-header-cell">
                            {group.groupName}
                          </td>
                        </tr>

                        {group.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="data-row">
                            <td className="cell-feature-name">
                              <div className="feature-name-text">{row.name}</div>
                              {row.hint && <div className="feature-hint-text">{row.hint}</div>}
                            </td>

                            {/* Starter Value */}
                            <td className="cell-tier-value">
                              {typeof row.starter === 'boolean' ? (
                                row.starter ? (
                                  <Check size={18} className="icon-cell-check" />
                                ) : (
                                  <Minus size={18} className="icon-cell-minus" />
                                )
                              ) : (
                                <span className="val-text">{row.starter}</span>
                              )}
                            </td>

                            {/* Growth Value (Highlighted) */}
                            <td className="cell-tier-value growth-col-val">
                              {typeof row.growth === 'boolean' ? (
                                row.growth ? (
                                  <Check size={18} className="icon-cell-check text-bold" />
                                ) : (
                                  <Minus size={18} className="icon-cell-minus" />
                                )
                              ) : (
                                <span className="val-text highlight-val">{row.growth}</span>
                              )}
                            </td>

                            {/* Enterprise Value */}
                            <td className="cell-tier-value">
                              {typeof row.enterprise === 'boolean' ? (
                                row.enterprise ? (
                                  <Check size={18} className="icon-cell-check" />
                                ) : (
                                  <Minus size={18} className="icon-cell-minus" />
                                )
                              ) : (
                                <span className="val-text">{row.enterprise}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>

                  <tfoot>
                    <tr>
                      <td className="tfoot-cell">Cam kết &amp; Nghiệm thu</td>
                      <td className="tfoot-cell">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm full-btn"
                          onClick={() => handleSelectService('Gói Khởi Động 1.490.000đ')}
                        >
                          Chọn Gói 1.49Tr
                        </button>
                      </td>
                      <td className="tfoot-cell growth-tfoot">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm full-btn"
                          onClick={() => handleSelectService('Gói Tăng Trưởng 2.900.000đ')}
                        >
                          Nhận Demo 2.9Tr
                        </button>
                      </td>
                      <td className="tfoot-cell">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm full-btn"
                          onClick={() => handleSelectService('Gói Doanh Nghiệp 5.900.000đ')}
                        >
                          Đăng Ký 5.9Tr
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* QUICK LINK TO SWITCH VIEW WHEN ON TIERS TAB */}
        {activeTab === 'tiers' && (
          <div className="matrix-switch-helper">
            <button
              type="button"
              className="btn-switch-helper"
              onClick={() => setActiveTab('matrix')}
            >
              <TableProperties size={16} />
              <span>Xem chi tiết ma trận so sánh quyền lợi &amp; sản phẩm bàn giao đầy đủ (WebFX Matrix)</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}

        {/* COLLAPSIBLE 41-SERVICE CATALOG ACCORDION FOR TECHNICAL MICRO-TASKS */}
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
          scrollbar-gutter: stable;
        }

        /* 2 GOLDEN GUARANTEES CALLOUT */
        .trust-guarantees-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 2.25rem;
        }

        @media (min-width: 768px) {
          .trust-guarantees-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
        }

        .trust-guarantee-card {
          background-color: #ffffff;
          border: 1px solid #bbf7d0;
          border-left: 5px solid var(--color-primary);
          border-radius: var(--radius-lg);
          padding: 1.35rem 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          box-shadow: 0 4px 16px -2px rgba(13, 118, 71, 0.06);
        }

        .guarantee-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--color-primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .guarantee-icon {
          color: var(--color-primary-dark);
        }

        .guarantee-content {
          flex: 1;
        }

        .guarantee-badge {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--color-primary-dark);
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .guarantee-title {
          font-size: 1.0625rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.4rem 0;
          line-height: 1.3;
          text-wrap: pretty;
        }

        .guarantee-desc {
          font-size: 0.875rem;
          color: #475569;
          margin: 0;
          line-height: 1.55;
          text-wrap: pretty;
        }

        /* VIEW SWITCHER TABS */
        .pricing-view-switch {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .switch-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.35rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background-color: #ffffff;
          font-size: 0.9375rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .switch-tab-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary-dark);
        }

        .switch-tab-btn.active {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(13, 118, 71, 0.25);
        }

        /* 3 SERVICE TIERS CARDS */
        .tiers-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 1024px) {
          .tiers-cards-grid {
            grid-template-columns: 1fr 1.05fr 1fr;
            align-items: stretch;
          }
        }

        .tier-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);
        }

        .tier-card:hover {
          border-color: var(--color-primary-border);
          box-shadow: 0 10px 24px -4px rgba(13, 118, 71, 0.1);
        }

        .popular-card {
          border: 2px solid var(--color-primary);
          box-shadow: 0 12px 32px -4px rgba(13, 118, 71, 0.16);
        }

        .tier-top-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 1rem;
          width: fit-content;
        }

        .popular-card .tier-top-badge {
          background-color: #dcfce7;
          color: #0d7647;
          border: 1px solid #86efac;
        }

        .tier-header {
          margin-bottom: 1.25rem;
        }

        .tier-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.4rem 0;
          line-height: 1.25;
        }

        .tier-target {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
          text-wrap: pretty;
        }

        .tier-price-box {
          margin-bottom: 1.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .tier-price {
          font-size: 2.1rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .popular-card .tier-price {
          color: var(--color-primary);
        }

        .tier-unit {
          font-size: 0.8125rem;
          color: #64748b;
          margin-top: 0.35rem;
          font-weight: 600;
        }

        .tier-meta-bar {
          background-color: #f8fafc;
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.45rem 0.75rem;
          margin-bottom: 1.25rem;
        }

        .tier-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          color: #334155;
        }

        .tier-meta-item svg {
          color: var(--color-primary);
        }

        .tier-features-wrap {
          flex: 1;
          margin-bottom: 1.75rem;
        }

        .tier-features-heading {
          font-size: 0.8125rem;
          font-weight: 800;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.75rem;
        }

        .tier-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .tier-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.875rem;
          color: #334155;
          line-height: 1.45;
          text-wrap: pretty;
        }

        .feature-check-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tier-cta-box {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .tier-action-btn {
          width: 100%;
          min-height: 48px;
          font-weight: 700;
          font-size: 0.9375rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .tier-cta-guarantee {
          font-size: 0.75rem;
          color: #64748b;
          text-align: center;
          font-weight: 500;
        }

        .matrix-switch-helper {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .btn-switch-helper {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: 1px dashed var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.65rem 1.5rem;
          color: var(--color-primary-dark);
          font-size: 0.875rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-switch-helper:hover {
          border-color: var(--color-primary);
          background-color: var(--color-primary-soft);
        }

        /* WEBFX COMPARISON MATRIX TABLE */
        .webfx-matrix-container {
          margin-bottom: 2.5rem;
        }

        .matrix-table-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .matrix-card-header {
          padding: 1.5rem 1.75rem;
          border-bottom: 1px solid var(--color-border);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          background-color: #fafbfc;
        }

        .matrix-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.35rem 0;
        }

        .matrix-card-sub {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
          text-wrap: pretty;
        }

        .matrix-legend {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.8125rem;
          color: #475569;
          font-weight: 600;
        }

        .legend-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .legend-check {
          color: var(--color-primary);
        }

        .legend-minus {
          color: #94a3b8;
        }

        .matrix-table-scroll {
          overflow-x: auto;
          scrollbar-gutter: stable;
          -webkit-overflow-scrolling: touch;
        }

        .webfx-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.875rem;
          min-width: 720px;
        }

        .webfx-table th,
        .webfx-table td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--color-border-subtle);
          vertical-align: middle;
        }

        .webfx-table thead th {
          background-color: #ffffff;
          position: sticky;
          top: 0;
          z-index: 10;
          border-bottom: 2px solid var(--color-border);
        }

        .col-feature {
          width: 38%;
          font-size: 0.875rem;
          font-weight: 800;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .col-tier {
          width: 20.6%;
          text-align: center;
          vertical-align: bottom;
        }

        .th-tier-name {
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }

        .th-tier-price {
          font-size: 1.25rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .growth-header {
          background-color: #f0fdf4 !important;
          border-left: 2px solid #86efac;
          border-right: 2px solid #86efac;
          position: relative;
        }

        .growth-header .th-tier-price {
          color: var(--color-primary);
        }

        .th-recommended-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          color: #0d7647;
          background-color: #dcfce7;
          border: 1px solid #86efac;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.4rem;
        }

        .th-tier-btn {
          width: 100%;
          font-size: 0.8125rem;
          font-weight: 700;
          padding: 0.45rem 0.75rem;
        }

        .group-header-row {
          background-color: #f1f5f9;
        }

        .group-header-cell {
          font-size: 0.8125rem;
          font-weight: 800;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.75rem 1.25rem !important;
          border-bottom: 1px solid var(--color-border) !important;
        }

        .data-row:hover {
          background-color: #f8fafc;
        }

        .cell-feature-name {
          font-weight: 600;
          color: #0f172a;
        }

        .feature-name-text {
          font-size: 0.9rem;
          color: #0f172a;
          line-height: 1.4;
        }

        .feature-hint-text {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.2rem;
          font-weight: 400;
          line-height: 1.35;
        }

        .cell-tier-value {
          text-align: center;
          color: #334155;
          font-size: 0.85rem;
        }

        .growth-col-val {
          background-color: #fafdfb;
          border-left: 2px solid #bbf7d0;
          border-right: 2px solid #bbf7d0;
        }

        .highlight-val {
          font-weight: 700;
          color: var(--color-primary-dark);
        }

        .icon-cell-check {
          color: var(--color-primary);
          margin: 0 auto;
        }

        .icon-cell-minus {
          color: #94a3b8;
          margin: 0 auto;
        }

        .tfoot-cell {
          background-color: #fafbfc;
          padding: 1rem 1.25rem !important;
          border-top: 2px solid var(--color-border);
          font-weight: 700;
          color: #0f172a;
        }

        .growth-tfoot {
          background-color: #f0fdf4 !important;
          border-left: 2px solid #86efac;
          border-right: 2px solid #86efac;
        }

        .full-btn {
          width: 100%;
          font-weight: 700;
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
          color: #0f172a;
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
          color: #64748b;
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
          color: #475569;
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
          color: #64748b;
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
          color: #0f172a;
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
          color: #475569;
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
          color: #64748b;
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
