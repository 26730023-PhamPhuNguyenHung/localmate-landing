import React, { useState, useMemo } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { LeadModal } from '../conversion/LeadModal';
import { CONTACT_INFO } from '../../data/landingContent';
import {
  Calculator,
  CheckCircle2,
  Sparkles,
  Store,
  Building2,
  TrendingUp,
  PhoneCall,
  ShieldCheck,
  Zap,
  Target,
  ArrowRight,
  Info,
  DollarSign,
  Users,
  Check,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

interface InteractiveCostEstimatorProps {
  onOpenConsultForm?: (serviceName?: string, note?: string) => void;
}

// 1. Scale Options
interface ScaleOption {
  id: 'single' | 'chain_small' | 'chain_large';
  title: string;
  badge?: string;
  description: string;
  icon: typeof Store;
  multiplierSetup: number;
  multiplierMonthly: number;
  multiplierLeads: number;
}

const SCALE_OPTIONS: ScaleOption[] = [
  {
    id: 'single',
    title: '1 Cơ sở độc lập',
    badge: 'Phổ biến nhất',
    description: 'Dành cho quán ăn, tiệm nails, spa, gara hoặc cửa hàng đơn lẻ',
    icon: Store,
    multiplierSetup: 1,
    multiplierMonthly: 1,
    multiplierLeads: 1
  },
  {
    id: 'chain_small',
    title: 'Chuỗi 2 - 3 điểm',
    badge: 'Tiết kiệm 20%',
    description: 'Tối ưu quản trị tập trung, ưu đãi giảm 20% chi phí các cơ sở bổ sung',
    icon: Building2,
    multiplierSetup: 1.8,
    multiplierMonthly: 1.8,
    multiplierLeads: 2.2
  },
  {
    id: 'chain_large',
    title: 'Chuỗi từ 5 điểm trở lên',
    badge: 'Tiết kiệm 35%',
    description: 'Hệ thống chuỗi quy mô lớn, chiết khấu sâu 35% trên toàn mạng lưới',
    icon: Building2,
    multiplierSetup: 3.2,
    multiplierMonthly: 3.2,
    multiplierLeads: 4.5
  }
];

// 2. Service Definitions
interface ServiceItem {
  id: string;
  name: string;
  category: 'setup' | 'monthly';
  tag: string;
  shortDesc: string;
  basePrice: number;
  priceDisplay: string;
  priceNote?: string;
  estLeadsMin: number;
  estLeadsMax: number;
  isPopular?: boolean;
  hasSubOptions?: boolean;
  subOptions?: {
    id: string;
    label: string;
    price: number;
    priceDisplay: string;
    leadsMin: number;
    leadsMax: number;
  }[];
}

const AVAILABLE_SERVICES: ServiceItem[] = [
  {
    id: 'website',
    name: 'Nền tảng số & Website chuẩn di động',
    category: 'setup',
    tag: 'Tài sản số 100% sở hữu',
    shortDesc: 'Chuẩn tốc độ < 1s, chuẩn SEO Google, tối ưu nút gọi & chat Zalo chuyển đổi cao',
    basePrice: 1990000,
    priceDisplay: 'Từ 490.000đ - 1.990.000đ',
    priceNote: 'Trả 1 lần, bàn giao 100% tài khoản chính chủ',
    estLeadsMin: 25,
    estLeadsMax: 60,
    isPopular: true,
    hasSubOptions: true,
    subOptions: [
      {
        id: 'web_starter_490k',
        label: 'Gói Cơ Bản 1 Trang (Landing 490k)',
        price: 490000,
        priceDisplay: '490.000đ',
        leadsMin: 15,
        leadsMax: 35
      },
      {
        id: 'web_pro_1990k',
        label: 'Gói Bán Hàng & Đặt Hẹn Nâng Cao (Khuyên dùng)',
        price: 1990000,
        priceDisplay: '1.990.000đ',
        leadsMin: 35,
        leadsMax: 70
      }
    ]
  },
  {
    id: 'google_maps',
    name: 'Khởi tạo & Tối ưu Google Maps Top 3',
    category: 'setup',
    tag: 'Được tìm thấy tại địa phương',
    shortDesc: 'Xác minh NAP chính chủ, tối ưu danh mục, phủ từ khóa vị trí kéo khách ghé tiệm',
    basePrice: 990000,
    priceDisplay: '990.000đ',
    priceNote: 'Khởi tạo & bàn giao 1 lần',
    estLeadsMin: 45,
    estLeadsMax: 110,
    isPopular: true
  },
  {
    id: 'ai_geo_search',
    name: 'Tối ưu AI Search & GEO địa phương',
    category: 'monthly',
    tag: 'Đề xuất số 1 trên AI',
    shortDesc: 'Được ChatGPT, Google AI Overviews & Gemini khuyên dùng khi khách hỏi tìm tiệm',
    basePrice: 2900000,
    priceDisplay: '2.900.000đ',
    priceNote: '/ tháng (Không phạt huỷ)',
    estLeadsMin: 40,
    estLeadsMax: 95,
    isPopular: true
  },
  {
    id: 'google_ads',
    name: 'Chạy quảng cáo Google Ads bán kính tiệm',
    category: 'monthly',
    tag: 'Có khách ngay tức thì',
    shortDesc: 'Nhắm trúng khách hàng đang tìm kiếm dịch vụ quanh bán kính 3 - 10km của tiệm',
    basePrice: 1490000,
    priceDisplay: '1.490.000đ',
    priceNote: '/ tháng (Phí quản trị & tối ưu)',
    estLeadsMin: 60,
    estLeadsMax: 140
  },
  {
    id: 'digital_care',
    name: 'Chăm sóc & Vận hành Digital Care',
    category: 'monthly',
    tag: 'Đồng hành kỹ thuật 1-1',
    shortDesc: 'Viết bài định kỳ, trực kỹ thuật 24/7, cập nhật bảng giá và chống lỗi website',
    basePrice: 990000,
    priceDisplay: '990.000đ',
    priceNote: '/ tháng',
    estLeadsMin: 20,
    estLeadsMax: 45
  }
];

// Preset ngành nghề để tính điểm hòa vốn
interface IndustryPreset {
  id: string;
  name: string;
  avgOrderValue: number; // VND
  profitMargin: number; // 0 - 1
}

const INDUSTRY_PRESETS: IndustryPreset[] = [
  { id: 'fnb', name: 'Quán ăn / Cà phê / F&B', avgOrderValue: 120000, profitMargin: 0.35 },
  { id: 'beauty', name: 'Spa / Thẩm mỹ / Tiệm Nails', avgOrderValue: 350000, profitMargin: 0.50 },
  { id: 'clinic', name: 'Phòng khám / Nha khoa', avgOrderValue: 950000, profitMargin: 0.45 },
  { id: 'auto_service', name: 'Gara xe / Sửa chữa / Dịch vụ', avgOrderValue: 650000, profitMargin: 0.40 },
  { id: 'retail', name: 'Cửa hàng bán lẻ / Tiệm đồ', avgOrderValue: 250000, profitMargin: 0.30 }
];

export const InteractiveCostEstimator: React.FC<InteractiveCostEstimatorProps> = ({
  onOpenConsultForm
}) => {
  // 1. Selection State
  const [selectedScale, setSelectedScale] = useState<'single' | 'chain_small' | 'chain_large'>('single');
  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({
    website: true,
    google_maps: true,
    ai_geo_search: true,
    google_ads: false,
    digital_care: false
  });
  const [selectedWebTier, setSelectedWebTier] = useState<string>('web_pro_1990k');

  // 2. Business ROI Input State
  const [selectedIndustry, setSelectedIndustry] = useState<string>('beauty');
  const [customAOV, setCustomAOV] = useState<number>(350000);
  const [customMargin, setCustomMargin] = useState<number>(50); // 50%

  // 3. Fallback Lead Modal State (nếu onOpenConsultForm không truyền vào)
  const [isInternalModalOpen, setIsInternalModalOpen] = useState(false);
  const [modalServiceName, setModalServiceName] = useState('');
  const [modalNote, setModalNote] = useState('');

  // Handle Scale Change
  const currentScale = useMemo(() => {
    return SCALE_OPTIONS.find((s) => s.id === selectedScale) || SCALE_OPTIONS[0];
  }, [selectedScale]);

  // Handle Preset Industry Change
  const handleIndustryChange = (presetId: string) => {
    setSelectedIndustry(presetId);
    const found = INDUSTRY_PRESETS.find((p) => p.id === presetId);
    if (found) {
      setCustomAOV(found.avgOrderValue);
      setCustomMargin(Math.round(found.profitMargin * 100));
    }
  };

  // Toggle Service
  const toggleService = (id: string) => {
    setSelectedServices((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      // Đảm bảo ít nhất 1 dịch vụ được chọn
      const hasAny = Object.values(next).some(Boolean);
      if (!hasAny) return prev;
      return next;
    });
  };

  // Calculations
  const calculation = useMemo(() => {
    let rawSetup = 0;
    let rawMonthly = 0;
    let rawLeadsMin = 0;
    let rawLeadsMax = 0;

    AVAILABLE_SERVICES.forEach((srv) => {
      if (!selectedServices[srv.id]) return;

      let itemPrice = srv.basePrice;
      let leadsMin = srv.estLeadsMin;
      let leadsMax = srv.estLeadsMax;

      if (srv.id === 'website' && srv.hasSubOptions && srv.subOptions) {
        const sub = srv.subOptions.find((o) => o.id === selectedWebTier) || srv.subOptions[1];
        itemPrice = sub.price;
        leadsMin = sub.leadsMin;
        leadsMax = sub.leadsMax;
      }

      if (srv.category === 'setup') {
        rawSetup += itemPrice;
      } else {
        rawMonthly += itemPrice;
      }

      rawLeadsMin += leadsMin;
      rawLeadsMax += leadsMax;
    });

    const finalSetup = Math.round(rawSetup * currentScale.multiplierSetup);
    const finalMonthly = Math.round(rawMonthly * currentScale.multiplierMonthly);
    const finalLeadsMin = Math.round(rawLeadsMin * currentScale.multiplierLeads);
    const finalLeadsMax = Math.round(rawLeadsMax * currentScale.multiplierLeads);

    // Điểm hòa vốn: Giả định khấu hao chi phí Setup trong 6 tháng + chi phí duy trì hàng tháng
    const monthlyEquivalent = finalMonthly + Math.round(finalSetup / 6);
    const profitPerOrder = customAOV * (customMargin / 100);

    // Số đơn hàng cần mỗi tháng để hòa vốn đầu tư
    const breakEvenOrders = profitPerOrder > 0 ? Math.ceil(monthlyEquivalent / profitPerOrder) : 1;

    // Tỷ lệ chuyển đổi tối thiểu cần thiết từ lượng khách tiềm năng ước tính
    const avgLeads = (finalLeadsMin + finalLeadsMax) / 2;
    const requiredConversionRate = avgLeads > 0 ? ((breakEvenOrders / avgLeads) * 100).toFixed(1) : '2.0';

    return {
      finalSetup,
      finalMonthly,
      finalLeadsMin,
      finalLeadsMax,
      monthlyEquivalent,
      profitPerOrder,
      breakEvenOrders,
      requiredConversionRate
    };
  }, [selectedServices, selectedWebTier, currentScale, customAOV, customMargin]);

  // Format VND
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  // Open Lead CTA Modal
  const handleOpenLead = () => {
    const selectedList: string[] = [];
    AVAILABLE_SERVICES.forEach((srv) => {
      if (selectedServices[srv.id]) {
        if (srv.id === 'website') {
          const sub = srv.subOptions?.find((o) => o.id === selectedWebTier);
          selectedList.push(`Website (${sub ? sub.label : 'Chuẩn di động'})`);
        } else {
          selectedList.push(srv.name);
        }
      }
    });

    const summaryNote = [
      `[DỰ TOÁN NGÂN SÁCH & ROI]`,
      `• Quy mô: ${currentScale.title}`,
      `• Gói giải pháp: ${selectedList.join(' + ')}`,
      `• Chi phí khởi tạo (1 lần): ${formatCurrency(calculation.finalSetup)}`,
      `• Chi phí duy trì: ${formatCurrency(calculation.finalMonthly)}/tháng`,
      `• Khách tiềm năng ước tính: ${calculation.finalLeadsMin} - ${calculation.finalLeadsMax} khách/tháng`,
      `• Điểm hòa vốn: Chỉ cần ~${calculation.breakEvenOrders} đơn/tháng (giá trị đơn: ${formatCurrency(customAOV)})`,
      `Khách hàng yêu cầu gửi bảng dự toán chi tiết và tư vấn qua Zalo.`
    ].join('\n');

    const serviceTitle = `Báo giá & Dự toán ROI (${currentScale.title})`;

    if (onOpenConsultForm) {
      onOpenConsultForm(serviceTitle, summaryNote);
    } else {
      setModalServiceName(serviceTitle);
      setModalNote(summaryNote);
      setIsInternalModalOpen(true);
    }
  };

  return (
    <section
      id="cost-roi-estimator"
      style={{
        backgroundColor: '#ffffff',
        padding: '5rem 0',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-primary-dark)',
              backgroundColor: 'var(--color-primary-soft)',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem',
              border: '1px solid var(--color-primary-border)'
            }}
          >
            <Calculator size={15} color="var(--color-primary)" />
            CÔNG CỤ BÁO GIÁ &amp; DỰ TOÁN ROI TƯƠNG TÁC
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
              color: 'var(--color-navy)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              textWrap: 'pretty'
            }}
          >
            Tự Chọn Dịch Vụ &amp; Dự Toán Điểm Hòa Vốn Trong 30 Giây
          </h2>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1.05rem',
              marginTop: '0.85rem',
              lineHeight: 1.6,
              textWrap: 'pretty'
            }}
          >
            Không mập mờ, không báo giá chào mời. Chọn đúng quy mô tiệm của bạn để xem rõ chi phí đầu tư 1 lần,
            chi phí duy trì và số đơn hàng tối thiểu cần thiết để thu hồi 100% vốn.
          </p>
        </div>

        {/* 2-Column Responsive Estimator Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* LEFT COLUMN: Controls & Selections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* STEP 1: Chọn quy mô cơ sở */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '1.75rem',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-primary-soft)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9rem'
                  }}
                >
                  1
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                    Chọn Quy Mô Cơ Sở Kinh Doanh
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    Áp dụng chính sách ưu đãi chiết khấu theo số lượng điểm bán
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                  gap: '0.85rem'
                }}
              >
                {SCALE_OPTIONS.map((scale) => {
                  const isSelected = selectedScale === scale.id;
                  const Icon = scale.icon;
                  return (
                    <button
                      key={scale.id}
                      type="button"
                      onClick={() => setSelectedScale(scale.id)}
                      style={{
                        textAlign: 'left',
                        padding: '1.15rem 1rem',
                        borderRadius: '12px',
                        border: isSelected
                          ? '2px solid var(--color-primary)'
                          : '1px solid var(--color-border)',
                        backgroundColor: isSelected ? 'var(--color-primary-soft)' : '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '0.65rem'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                          <Icon size={20} color={isSelected ? 'var(--color-primary)' : 'var(--color-text-muted)'} />
                          {scale.badge && (
                            <span
                              style={{
                                fontSize: '0.68rem',
                                fontWeight: 700,
                                padding: '0.2rem 0.5rem',
                                borderRadius: '9999px',
                                backgroundColor: isSelected ? 'var(--color-primary)' : '#f1f5f9',
                                color: isSelected ? '#ffffff' : 'var(--color-text-muted)'
                              }}
                            >
                              {scale.badge}
                            </span>
                          )}
                        </div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            color: isSelected ? 'var(--color-primary-dark)' : 'var(--color-navy)'
                          }}
                        >
                          {scale.title}
                        </div>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                        {scale.description}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Chọn các giải pháp cần triển khai */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '1.75rem',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-primary-soft)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9rem'
                  }}
                >
                  2
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                    Chọn Các Giải Pháp Cần Triển Khai
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    Bật/tắt các hạng mục để kiểm tra chi phí và hiệu quả tương ứng
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {AVAILABLE_SERVICES.map((srv) => {
                  const isChecked = !!selectedServices[srv.id];
                  return (
                    <div
                      key={srv.id}
                      style={{
                        border: isChecked
                          ? '1.5px solid var(--color-primary)'
                          : '1px solid var(--color-border)',
                        borderRadius: '12px',
                        padding: '1.15rem',
                        backgroundColor: isChecked ? '#ffffff' : '#f8fafc',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          gap: '1rem',
                          cursor: 'pointer'
                        }}
                        onClick={() => toggleService(srv.id)}
                      >
                        {/* Checkbox & Info */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                          <div
                            style={{
                              width: '22px',
                              height: '22px',
                              borderRadius: '6px',
                              border: isChecked
                                ? '2px solid var(--color-primary)'
                                : '2px solid #cbd5e1',
                              backgroundColor: isChecked ? 'var(--color-primary)' : '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: '2px',
                              flexShrink: 0
                            }}
                          >
                            {isChecked && <Check size={14} color="#ffffff" strokeWidth={3} />}
                          </div>

                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                              <span
                                style={{
                                  fontWeight: 700,
                                  fontSize: '0.975rem',
                                  color: 'var(--color-navy)'
                                }}
                              >
                                {srv.name}
                              </span>
                              <span
                                style={{
                                  fontSize: '0.7rem',
                                  fontWeight: 600,
                                  padding: '0.15rem 0.5rem',
                                  borderRadius: '9999px',
                                  backgroundColor: isChecked ? 'var(--color-primary-soft)' : '#e2e8f0',
                                  color: isChecked ? 'var(--color-primary-dark)' : '#475569'
                                }}
                              >
                                {srv.tag}
                              </span>
                            </div>

                            <p
                              style={{
                                margin: '0.35rem 0 0 0',
                                fontSize: '0.825rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.45
                              }}
                            >
                              {srv.shortDesc}
                            </p>
                          </div>
                        </div>

                        {/* Price Badge */}
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div
                            style={{
                              fontWeight: 800,
                              fontSize: '1rem',
                              color: 'var(--color-primary)'
                            }}
                          >
                            {srv.priceDisplay}
                          </div>
                          {srv.priceNote && (
                            <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                              {srv.priceNote}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Sub-options for Website (Starter 490k vs Pro 1.990k) */}
                      {srv.id === 'website' && isChecked && srv.subOptions && (
                        <div
                          style={{
                            marginTop: '1rem',
                            paddingTop: '0.9rem',
                            borderTop: '1px dashed var(--color-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                          }}
                        >
                          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-text)' }}>
                            Chọn gói xây dựng Website:
                          </div>
                          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                            {srv.subOptions.map((sub) => {
                              const isSubActive = selectedWebTier === sub.id;
                              return (
                                <button
                                  key={sub.id}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedWebTier(sub.id);
                                  }}
                                  style={{
                                    padding: '0.55rem 0.85rem',
                                    borderRadius: '8px',
                                    border: isSubActive
                                      ? '1.5px solid var(--color-primary)'
                                      : '1px solid var(--color-border)',
                                    backgroundColor: isSubActive ? 'var(--color-primary-soft)' : '#ffffff',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.825rem',
                                    fontWeight: isSubActive ? 700 : 500,
                                    color: isSubActive ? 'var(--color-primary-dark)' : 'var(--color-text)'
                                  }}
                                >
                                  <div
                                    style={{
                                      width: '14px',
                                      height: '14px',
                                      borderRadius: '50%',
                                      border: isSubActive
                                        ? '4px solid var(--color-primary)'
                                        : '1.5px solid #94a3b8',
                                      backgroundColor: '#ffffff'
                                    }}
                                  />
                                  <span>{sub.label}: <strong>{sub.priceDisplay}</strong></span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: Tinh chỉnh Ngành nghề & Điểm hòa vốn */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '1.75rem',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-primary-soft)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9rem'
                  }}
                >
                  3
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                    Thông Số Đơn Hàng Của Tiệm
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    Dùng để tính toán số đơn hàng tối thiểu giúp tiệm thu hồi vốn
                  </p>
                </div>
              </div>

              {/* Industry Preset Pills */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  Chọn ngành kinh doanh của bạn:
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {INDUSTRY_PRESETS.map((preset) => {
                    const isSelected = selectedIndustry === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => handleIndustryChange(preset.id)}
                        style={{
                          padding: '0.45rem 0.85rem',
                          borderRadius: '9999px',
                          border: isSelected
                            ? '1.5px solid var(--color-primary)'
                            : '1px solid var(--color-border)',
                          backgroundColor: isSelected ? 'var(--color-primary-soft)' : '#ffffff',
                          color: isSelected ? 'var(--color-primary-dark)' : 'var(--color-text)',
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        {preset.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sliders for AOV and Margin */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.25rem',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid var(--color-border)'
                }}
              >
                {/* AOV Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>Giá trị đơn trung bình (AOV):</span>
                    <strong style={{ color: 'var(--color-primary-dark)' }}>{formatCurrency(customAOV)}</strong>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={2000000}
                    step={50000}
                    value={customAOV}
                    onChange={(e) => setCustomAOV(Number(e.target.value))}
                    style={{
                      width: '100%',
                      accentColor: 'var(--color-primary)',
                      cursor: 'pointer'
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                    <span>50k</span>
                    <span>1.000k</span>
                    <span>2.000k</span>
                  </div>
                </div>

                {/* Margin Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>Tỷ suất lợi nhuận ròng:</span>
                    <strong style={{ color: 'var(--color-primary-dark)' }}>{customMargin}%</strong>
                  </div>
                  <input
                    type="range"
                    min={15}
                    max={75}
                    step={5}
                    value={customMargin}
                    onChange={(e) => setCustomMargin(Number(e.target.value))}
                    style={{
                      width: '100%',
                      accentColor: 'var(--color-primary)',
                      cursor: 'pointer'
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                    <span>15%</span>
                    <span>45%</span>
                    <span>75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Real-Time Summary & ROI Dashboard (Sticky) */}
          <div
            style={{
              position: 'sticky',
              top: '90px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid var(--color-primary)',
                borderRadius: '20px',
                padding: '2rem 1.75rem',
                boxShadow: '0 10px 25px -5px rgba(13, 118, 71, 0.12), 0 8px 10px -6px rgba(13, 118, 71, 0.08)'
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--color-border)',
                  marginBottom: '1.5rem'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.05em' }}>
                    DỰ TOÁN THỜI GIAN THỰC
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                    Bảng Tổng Hợp Đầu Tư
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: 'var(--color-primary-soft)',
                    color: 'var(--color-primary-dark)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}
                >
                  {currentScale.title}
                </div>
              </div>

              {/* 2 Main Cost Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                {/* Setup Cost Card */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    padding: '1.15rem',
                    borderRadius: '12px',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                    Chi phí khởi tạo (1 lần)
                  </div>
                  <div
                    style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.45rem)',
                      fontWeight: 800,
                      color: 'var(--color-navy)',
                      marginTop: '0.35rem'
                    }}
                  >
                    {formatCurrency(calculation.finalSetup)}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.25rem' }}>
                    Nghiệm thu mới trả tiền
                  </div>
                </div>

                {/* Monthly Cost Card */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    padding: '1.15rem',
                    borderRadius: '12px',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                    Chi phí duy trì / tháng
                  </div>
                  <div
                    style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.45rem)',
                      fontWeight: 800,
                      color: 'var(--color-primary)',
                      marginTop: '0.35rem'
                    }}
                  >
                    {calculation.finalMonthly > 0 ? formatCurrency(calculation.finalMonthly) : '0đ'}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.25rem' }}>
                    {calculation.finalMonthly > 0 ? 'Không hợp đồng trói buộc' : 'Chỉ tính khi chọn duy trì'}
                  </div>
                </div>
              </div>

              {/* Estimated Inbound Calls & Leads */}
              <div
                style={{
                  backgroundColor: 'var(--color-primary-soft)',
                  border: '1px solid var(--color-primary-border)',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <PhoneCall size={16} color="var(--color-primary)" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                      Khách tiềm năng &amp; cuộc gọi ước tính:
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.4rem' }}>
                  <span
                    style={{
                      fontSize: '1.85rem',
                      fontWeight: 900,
                      color: 'var(--color-primary-dark)',
                      lineHeight: 1
                    }}
                  >
                    {calculation.finalLeadsMin} - {calculation.finalLeadsMax}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                    lượt khách &amp; cuộc gọi / tháng
                  </span>
                </div>

                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem', color: 'var(--color-text-body)', lineHeight: 1.4 }}>
                  Ước tính từ lưu lượng tìm kiếm Google Maps vị trí gần, truy vấn đề xuất AI và các lượt truy cập chuẩn di động.
                </p>
              </div>

              {/* BREAK-EVEN ANALYSIS BOX */}
              <div
                style={{
                  backgroundColor: '#fffbeb',
                  border: '1px solid #fde68a',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  marginBottom: '1.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
                  <Target size={18} color="#b45309" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Phân Tích Điểm Hòa Vốn
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: '#78350f',
                    lineHeight: 1.4,
                    marginBottom: '0.65rem',
                    textWrap: 'pretty'
                  }}
                >
                  Chỉ cần <span style={{ color: '#b45309', textDecoration: 'underline' }}>{calculation.breakEvenOrders} đơn hàng / tháng</span> là tiệm hoàn vốn đầu tư!
                </div>

                <p style={{ margin: 0, fontSize: '0.8rem', color: '#92400e', lineHeight: 1.45 }}>
                  Với ước tính <strong>{calculation.finalLeadsMin} - {calculation.finalLeadsMax}</strong> lượt khách quan tâm mỗi tháng,
                  tiệm chỉ cần tỷ lệ chốt thành công tối thiểu <strong>{calculation.requiredConversionRate}%</strong> là đã sinh lời ròng.
                </p>
              </div>

              {/* PRIMARY CTA BUTTON: Zalo Lead Form */}
              <button
                type="button"
                onClick={handleOpenLead}
                style={{
                  width: '100%',
                  minHeight: '52px',
                  backgroundColor: 'var(--color-primary)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  boxShadow: '0 4px 14px rgba(13, 118, 71, 0.28)',
                  transition: 'all 0.2s ease',
                  padding: '0.75rem 1.25rem'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
              >
                <MessageSquare size={19} />
                <span>Nhận Bảng Dự Toán Chi Tiết Qua Zalo</span>
                <ArrowRight size={17} />
              </button>

              {/* Secondary Support Link */}
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  style={{
                    fontSize: '0.825rem',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontWeight: 600
                  }}
                >
                  <PhoneCall size={14} color="var(--color-primary)" />
                  Hoặc gọi hotline khảo sát tận nơi: <strong style={{ color: 'var(--color-navy)' }}>{CONTACT_INFO.phoneDisplay}</strong>
                </a>
              </div>

              {/* Guarantees List */}
              <div
                style={{
                  marginTop: '1.25rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  <ShieldCheck size={14} color="var(--color-primary)" />
                  <span>Cam kết hợp đồng minh bạch, không chi phí ẩn phát sinh</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  <CheckCircle2 size={14} color="var(--color-primary)" />
                  <span>Kỹ thuật viên địa phương hỗ trợ trực tiếp 1-1 tại cơ sở</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  <Zap size={14} color="var(--color-primary)" />
                  <span>Nghiệm thu hoàn tất hài lòng mới tiến hành thanh toán</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Fallback Internal LeadModal if no external handler is provided */}
      {!onOpenConsultForm && (
        <LeadModal
          isOpen={isInternalModalOpen}
          onClose={() => setIsInternalModalOpen(false)}
          defaultServiceName={modalServiceName}
          initialNote={modalNote}
        />
      )}
    </section>
  );
};
