import React from 'react';
import { Container } from '../ui/Container';
import {
  Globe,
  MapPin,
  TrendingUp,
  FileText,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Clock,
  Layers
} from 'lucide-react';
import { useRouter } from '../layout/Router';

interface CorePillarsSectionProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

interface PillarItem {
  id: string;
  pillarNumber: string;
  title: string;
  slug: string;
  link: string;
  tagline: string;
  priceTag: string;
  sla: string;
  icon: React.ElementType;
  deliverables: string[];
}

export const CorePillarsSection: React.FC<CorePillarsSectionProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();

  const pillars: PillarItem[] = [
    {
      id: 'pillar-web',
      pillarNumber: '01',
      title: 'Thiết Kế Website Tốc Độ Cao',
      slug: 'thiet-ke-website',
      link: '/thiet-ke-website',
      tagline: 'Website tải dưới 1s, chuẩn di động, bàn giao mới thanh toán',
      priceTag: 'Từ 490.000đ',
      sla: 'Bàn giao 24h - 48h',
      icon: Globe,
      deliverables: [
        'Trang đơn hoặc đa trang chuẩn SEO & di động',
        'Tốc độ tải dưới 1 giây trên mạng 4G/5G',
        'Nút gọi Zalo/Hotline 1-chạm tăng tỉ lệ chốt đơn',
        'Khách hàng sở hữu 100% mã nguồn và tên miền'
      ]
    },
    {
      id: 'pillar-maps',
      pillarNumber: '02',
      title: 'Google Maps & Local SEO',
      slug: 'google-maps-local-seo',
      link: '/google-maps-local-seo',
      tagline: 'Lên Top 3 tìm kiếm quanh bán kính 3-10km, xác minh GPS chính chủ',
      priceTag: 'Từ 990.000đ',
      sla: 'Triển khai 1 - 3 ngày',
      icon: MapPin,
      deliverables: [
        'Xác minh vị trí GPS chính chủ vào Gmail của bạn',
        'Tối ưu danh mục, thông tin NAP & chống cướp Maps',
        'Bộ mã QR để bàn giúp thu hút đánh giá 5 sao chân thực',
        'Đẩy thứ hạng tìm kiếm địa phương quanh bán kính quán'
      ]
    },
    {
      id: 'pillar-ads',
      pillarNumber: '03',
      title: 'Google Ads & Tìm Kiếm',
      slug: 'google-ads',
      link: '/google-ads',
      tagline: 'Tiếp cận đúng khách đang cần gấp, chặn click ảo, tối ưu từng đồng',
      priceTag: 'Từ 1.500.000đ/tháng',
      sla: 'Thiết lập trong 24h',
      icon: TrendingUp,
      deliverables: [
        'Nghiên cứu bộ từ khóa có ý định mua hàng cao',
        'Loại trừ triệt để từ khóa rác & ngăn chặn click tặc',
        'Cài đặt theo dõi chuyển đổi cuộc gọi và tin nhắn Zalo',
        'Bàn giao tài khoản Google Ads chính chủ khách tự trả tiền thẻ'
      ]
    },
    {
      id: 'pillar-content',
      pillarNumber: '04',
      title: 'Content Marketing & Chăm Sóc Số',
      slug: 'content-marketing',
      link: '/content-marketing',
      tagline: 'Chăm sóc nội dung, bài viết SEO, hình ảnh và bảo trì kỹ thuật',
      priceTag: 'Từ 990.000đ/tháng',
      sla: 'Duy trì hàng tuần',
      icon: FileText,
      deliverables: [
        'Bài viết hữu ích chuẩn SEO trên Website & Fanpage',
        'Thiết kế banner sản phẩm, menu cập nhật sắc nét',
        'Sao lưu dữ liệu định kỳ hàng tuần lên Cloudflare R2',
        'Hỗ trợ thay đổi nội dung, giá bán nhanh trong 15-30 phút'
      ]
    },
    {
      id: 'pillar-automation',
      pillarNumber: '05',
      title: 'Phần Mềm & Tự Động Hóa',
      slug: 'automation',
      link: '/automation',
      tagline: 'Tự động báo đơn Zalo, gom khách vào Google Sheets, không sót lịch',
      priceTag: 'Từ 1.900.000đ',
      sla: 'Triển khai 2 - 4 ngày',
      icon: Cpu,
      deliverables: [
        'Tích hợp form web gửi thông báo tức thì về Zalo/Telegram',
        'Đồng bộ dữ liệu khách hàng vào Google Sheets chuẩn CRM',
        'Kịch bản trả lời tự động khi khách hỏi bảng giá ngoài giờ',
        'Bàn giao kịch bản và video hướng dẫn vận hành dễ hiểu'
      ]
    }
  ];

  const handleConsult = (pillarTitle: string) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(`Tư vấn giải pháp: ${pillarTitle}`);
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <section
      className="core-pillars-section"
      id="dich-vu-cot-loi"
      aria-label="5 Nhóm Dịch Vụ Cốt Lõi LocalMate"
      style={{
        backgroundColor: '#fbfcfb',
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
        borderBottom: '1px solid var(--color-border)',
        scrollbarGutter: 'stable'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3.5rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#0d7647',
              backgroundColor: '#eaf5ee',
              padding: '0.4rem 0.95rem',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={14} color="#0d7647" />
            <span>5 NHÓM DỊCH VỤ CỐT LÕI</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
              color: '#0f172a',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1rem',
              textWrap: 'balance'
            }}
          >
            Chọn Đúng Giải Pháp Cho Giai Đoạn Kinh Doanh Của Bạn
          </h2>

          <p
            style={{
              fontSize: '1.025rem',
              color: '#475569',
              lineHeight: 1.65,
              textWrap: 'pretty',
              margin: '0 auto'
            }}
          >
            LocalMate tập trung vào 5 trụ cột thiết yếu nhất để cơ sở kinh doanh bắt đầu có khách từ internet:
            Website nhanh, định vị bản đồ chuẩn xác, quảng cáo đúng nhu cầu, nội dung chỉn chu và luồng nhận khách tự động.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1.5px solid #e2e8f0',
                  padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  {/* Top Row: Icon + Number + Price */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1.25rem',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          backgroundColor: '#eaf5ee',
                          border: '1px solid #bbf7d0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon size={24} color="#0d7647" />
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            letterSpacing: '0.05em',
                            color: '#0d7647',
                            textTransform: 'uppercase'
                          }}
                        >
                          Trụ Cột {pillar.pillarNumber}
                        </span>
                        <h3
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            color: '#0f172a',
                            lineHeight: 1.3,
                            marginTop: '0.15rem'
                          }}
                        >
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: '#0d7647',
                        backgroundColor: '#eaf5ee',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '8px',
                        whiteSpace: 'nowrap',
                        border: '1px solid #bbf7d0'
                      }}
                    >
                      {pillar.priceTag}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: '#334155',
                      lineHeight: 1.5,
                      marginBottom: '1.25rem',
                      fontWeight: 600
                    }}
                  >
                    {pillar.tagline}
                  </p>

                  {/* Deliverables Checklist */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: '#64748b',
                        marginBottom: '0.65rem'
                      }}
                    >
                      Hạng mục bàn giao thực tế:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {pillar.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.875rem',
                            color: '#1e293b',
                            lineHeight: 1.4
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            color="#0d7647"
                            style={{ flexShrink: 0, marginTop: '2px' }}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid #f1f5f9'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => navigate(pillar.link)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      borderRadius: '10px',
                      border: 'none',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'background-color 0.15s ease'
                    }}
                  >
                    <span>Xem chi tiết giải pháp {pillar.pillarNumber}</span>
                    <ArrowRight size={15} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => handleConsult(pillar.title)}
                      style={{
                        padding: '0.55rem 0.85rem',
                        backgroundColor: '#ffffff',
                        color: '#0d7647',
                        borderRadius: '8px',
                        border: '1px solid #bbf7d0',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <PhoneCall size={13} />
                      <span>Nhận tư vấn 0đ</span>
                    </button>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.75rem',
                        color: '#64748b',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Clock size={12} /> {pillar.sla}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BANNER LỚN NỔI BẬT: DẪN TỚI /BANG-GIA (45 DỊCH VỤ CHI TIẾT) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '2px solid #0d7647',
            borderRadius: '20px',
            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.75rem',
            boxShadow: '0 8px 24px -6px rgba(13, 118, 71, 0.12)'
          }}
        >
          <div style={{ flex: '1 1 500px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#0d7647',
                backgroundColor: '#eaf5ee',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                marginBottom: '0.75rem'
              }}
            >
              <Layers size={13} />
              <span>BẢNG GIÁ MINH BẠCH 100%</span>
            </div>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.3,
                marginBottom: '0.5rem'
              }}
            >
              Cần Tra Cứu Từng Hạng Mục & Dịch Vụ Cụ Thể?
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#475569',
                lineHeight: 1.55,
                margin: 0
              }}
            >
              Xem danh mục toàn bộ <strong>45 vi dịch vụ kỹ thuật số</strong> được niêm yết biểu phí công khai:
              từ gói tạo trang bán hàng 490k, phục hồi Maps bị tạm ngưng, cài đặt mã chuyển đổi Zalo đến bảo trì website định kỳ.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/bang-gia')}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#0d7647',
              color: '#ffffff',
              borderRadius: '12px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 4px 14px rgba(13, 118, 71, 0.25)',
              transition: 'all 0.15s ease'
            }}
          >
            <span>Xem toàn bộ 45 dịch vụ chi tiết</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
};
