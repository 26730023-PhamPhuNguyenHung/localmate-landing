import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { CONTACT_INFO } from '../data/landingContent';
import { useRouter, Link } from '../components/layout/Router';
import { submitLead } from '../services/leadService';
import { CapabilityContextBox } from '../components/ui/CapabilityContextBox';
import {
  MapPin,
  Search,
  Zap,
  ShieldCheck,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  QrCode,
  Gauge,
  Layers,
  PhoneCall,
  Check,
  HelpCircle,
  Clock,
  Star,
  Lock,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Globe,
  Share2,
  Cpu,
  BarChart3,
  ThumbsUp,
  ExternalLink
} from 'lucide-react';

interface LocalSearchClusterPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const LocalSearchClusterPage: React.FC<LocalSearchClusterPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();

  // Tab state for 5 services
  const [activeTab, setActiveTab] = useState<'maps' | 'seo' | 'speed' | 'entity' | 'audit'>('maps');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Interactive Audit Checklist state
  const [checkedSymptoms, setCheckedSymptoms] = useState<string[]>([
    'no_reviews_qr',
    'slow_mobile'
  ]);

  // Lead Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    serviceInterest: 'Khảo Sát Hiện Trạng Số 0đ',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const breadcrumbs = [
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: 'Được khách hàng tìm thấy', url: '/giai-phap/duoc-tim-thay' },
    { name: 'Local Search & Google Maps & Technical', url: '/dich-vu/local-search' }
  ];

  const handleCTA = (serviceName?: string) => {
    const selected = serviceName || 'Cụm Dịch Vụ Local Search & Technical';
    if (onOpenConsultForm) {
      onOpenConsultForm(selected);
    } else {
      const formEl = document.getElementById('dang-ky-tu-van');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/lien-he');
      }
    }
  };

  const toggleSymptom = (id: string) => {
    setCheckedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateHealthScore = () => {
    const totalSymptoms = 6;
    const score = Math.max(20, Math.round(100 - (checkedSymptoms.length / totalSymptoms) * 75));
    return score;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setToastMessage('Vui lòng điền họ tên và số điện thoại/Zalo để kỹ thuật viên hỗ trợ.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        businessName: formData.businessName || 'Chưa cung cấp tên quán/tiệm',
        serviceInterest: `Cụm Local Search: ${formData.serviceInterest}`,
        message: `Tình trạng ghi nhận: ${checkedSymptoms.join(', ') || 'Không chọn'} | Ghi chú: ${formData.notes || 'Không'}`,
        sourcePage: '/dich-vu/local-search'
      });
      setToastMessage('Gửi yêu cầu thành công! Kỹ thuật viên LocalMate sẽ liên hệ tư vấn trong 15–30 phút.');
      setFormData({
        name: '',
        phone: '',
        businessName: '',
        serviceInterest: 'Khảo Sát Hiện Trạng Số 0đ',
        notes: ''
      });
    } catch {
      setToastMessage('Đã có lỗi xảy ra. Bạn vui lòng gọi hotline 0834.422.439 để được hỗ trợ trực tiếp!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', scrollbarGutter: 'stable' }}>
      <SEOHead
        title="Dịch Vụ Google Maps, SEO Tổng Thể Địa Phương & Tối Ưu Tốc Độ Web | LocalMate"
        description="Cụm dịch vụ Local Search & Technical cho doanh nghiệp địa phương: Xác minh Google Maps GPS chính chủ 100%, chống cướp Maps, bộ QR đánh giá chân thực trên Google, SEO bán kính 3-10km từ khóa có/không dấu, PageSpeed 90+ Cloudflare, Entity Schema và SEO Audit 0đ. Cam kết bảo hành 5 năm!"
        canonicalPath="/dich-vu/local-search"
        breadcrumbs={breadcrumbs}
      />

      {/* 1. Breadcrumbs */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '0.75rem 0' }}>
        <Container size="lg">
          <Breadcrumbs items={breadcrumbs} />
          <CapabilityContextBox
            solutionName="Được khách hàng tìm thấy trên Google & AI"
            solutionUrl="/giai-phap/duoc-tim-thay"
          />
        </Container>
      </div>

      {/* 2. Hero Section — Pure Light Mode, High Contrast */}
      <section style={{ padding: '3.75rem 0 3.25rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#edf7f1',
                border: '1px solid #c6ebd4',
                color: '#063d24',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                letterSpacing: '0.04em'
              }}
            >
              <Sparkles size={16} color="#0d7647" />
              <span>CỤM DỊCH VỤ LOCAL SEARCH &amp; TECHNICAL • BẢO HÀNH LÊN ĐẾN 5 NĂM</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.85rem)',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                textWrap: 'pretty'
              }}
            >
              Tối Ưu Bản Đồ Địa Phương, Hiện Diện Top Tìm Kiếm &amp; Mở Trang Dưới 1 Giây
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                color: '#334155',
                lineHeight: 1.65,
                maxWidth: '850px',
                margin: '0 auto 2.25rem auto',
                textWrap: 'pretty'
              }}
            >
              Giải pháp toàn diện chuẩn hóa cho tiệm, quán ăn, spa, phòng khám và cơ sở dịch vụ địa phương: 
              <strong> Xác minh GPS chính chủ 100%</strong>, chống đối thủ chơi xấu cướp Maps, 
              <strong> phủ sóng bán kính 3–10km</strong> từ khóa có dấu &amp; không dấu, 
              <strong> cam kết PageSpeed 90+ trên Cloudflare</strong>. Giá gốc bình dân, người đồng hành số tận nơi!
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
              <Button
                variant="primary"
                onClick={() => handleCTA('Đăng ký Khảo sát hiện trạng 0đ')}
                style={{
                  height: '52px',
                  padding: '0 1.75rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  borderRadius: '12px'
                }}
              >
                <ClipboardCheck size={20} />
                <span>Khảo Sát Hiện Trạng 0đ (Miễn Phí)</span>
              </Button>
              <Button
                variant="white"
                onClick={() => {
                  const el = document.getElementById('bang-dich-vu');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  height: '52px',
                  padding: '0 1.75rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid #cbd5e1',
                  borderRadius: '12px'
                }}
              >
                <span>Xem Bảng 5 Dịch Vụ Cốt Lõi</span>
                <ArrowRight size={18} />
              </Button>
            </div>

            {/* 4 Trust Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '1.25rem',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ padding: '8px', backgroundColor: '#edf7f1', borderRadius: '10px' }}>
                    <MapPin size={20} color="#0d7647" />
                  </div>
                  <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0d7647' }}>100% GPS</span>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>Chính Chủ Gmail Khách</div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>Không qua trung gian giữ quyền, chống cướp vị trí.</p>
              </div>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ padding: '8px', backgroundColor: '#edf7f1', borderRadius: '10px' }}>
                    <Search size={20} color="#0d7647" />
                  </div>
                  <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0d7647' }}>3–10 km</span>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>Bán Kính Phủ Sóng</div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>Gom trọn từ khóa có dấu &amp; không dấu thực tế.</p>
              </div>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ padding: '8px', backgroundColor: '#edf7f1', borderRadius: '10px' }}>
                    <Zap size={20} color="#0d7647" />
                  </div>
                  <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0d7647' }}>&lt; 1 Giây</span>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>Mở Trang Cloudflare</div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>Cam kết PageSpeed 90+, Zero layout shift CLS.</p>
              </div>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ padding: '8px', backgroundColor: '#edf7f1', borderRadius: '10px' }}>
                    <ShieldCheck size={20} color="#0d7647" />
                  </div>
                  <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0d7647' }}>5 Năm</span>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>Bảo Hành Kỹ Thuật</div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>Kỹ thuật viên địa phương đồng hành dài hạn.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Interactive Service Tabs (5 Core Services) */}
      <section id="bang-dich-vu" style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#0d7647',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'inline-block',
                marginBottom: '0.5rem'
              }}
            >
              CHUẨN HÓA KỸ THUẬT ĐỊA PHƯƠNG
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', fontWeight: 800, color: '#0f172a' }}>
              Cụm 5 Dịch Vụ Trọng Điểm Giúp Tiệm Bùng Nổ Khách
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Bấm chọn từng dịch vụ để xem rõ bài toán, giải pháp thực tế, bộ ấn phẩm bàn giao và mức giá gốc bình dân.
            </p>
          </div>

          {/* Tab Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
              marginBottom: '2.5rem'
            }}
          >
            {[
              { id: 'maps', label: '1. Google Maps Chính Chủ', icon: MapPin, price: 'Từ 299k' },
              { id: 'seo', label: '2. SEO Tổng Thể Địa Phương', icon: Search, price: 'Từ 390k' },
              { id: 'speed', label: '3. Tối Ưu Tốc Độ Web 90+', icon: Zap, price: 'Từ 299k' },
              { id: 'entity', label: '4. Thực Thể Số & Schema', icon: Layers, price: 'Từ 199k' },
              { id: 'audit', label: '5. SEO Audit Hiện Trạng 0đ', icon: ClipboardCheck, price: '0đ Miễn Phí' }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '12px',
                    border: isActive ? '2px solid #0d7647' : '1px solid #e2e8f0',
                    backgroundColor: isActive ? '#edf7f1' : '#ffffff',
                    color: isActive ? '#063d24' : '#1e293b',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <Icon size={18} color={isActive ? '#0d7647' : '#64748b'} />
                  <span>{tab.label}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      backgroundColor: isActive ? '#0d7647' : '#f1f5f9',
                      color: isActive ? '#ffffff' : '#64748b'
                    }}
                  >
                    {tab.price}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab 1 Content: Google Maps */}
          {activeTab === 'maps' && (
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                padding: '2.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#edf7f1', color: '#0d7647', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>
                  <ShieldCheck size={14} /> XÁC MINH GPS CHÍNH CHỦ 100% • CHỐNG CƯỚP MAPS
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '1rem' }}>
                  Dịch Vụ Google Maps — Tọa Độ Chuẩn, Không Bị Chơi Xấu, Tặng Kèm Bộ QR Đánh Giá Chân Thực
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  LocalMate trực tiếp định vị tọa độ GPS chính xác từng mét, kích hoạt quy trình xác minh chính chủ bằng Gmail của bạn (Primary Owner). Thiết lập khiên bảo vệ chống đối thủ đề xuất chỉnh sửa sai hotline hoặc báo đóng cửa vị trí.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    'Xác minh GPS chính chủ 100% bằng Gmail của bạn (Nắm toàn quyền, không ai lấy lại được)',
                    'Thiết lập khiên bảo vệ chống cướp Maps: Ngăn chặn đối thủ đổi lén số điện thoại và giờ mở cửa',
                    'Tạo QR giúp khách hàng đã sử dụng dịch vụ để lại đánh giá chân thực trên Google (File in ấn chuẩn sắc nét đặt tại quầy)',
                    'Đăng tải 15–20 ảnh thực tế rõ đẹp: Mặt tiền, bảng hiệu, không gian và bảng giá',
                    'Cam kết đồng hành & bảo hành kỹ thuật lên đến 5 năm'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.95rem', color: '#1e293b', fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Giá gốc bình dân</div>
                    <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0d7647' }}>Từ 299.000đ</div>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => handleCTA('Đăng ký Dịch vụ Google Maps Chính Chủ')}
                    style={{ backgroundColor: '#0d7647', color: '#ffffff', borderRadius: '10px', padding: '0.75rem 1.5rem', fontWeight: 700 }}
                  >
                    Xác Minh Google Maps Ngay
                  </Button>
                </div>
              </div>

              {/* Showcase Visual Card */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#edf7f1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MapPin size={22} color="#0d7647" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1rem' }}>Hồ Sơ Doanh Nghiệp Chuẩn</div>
                      <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 700 }}>✓ Đã xác minh GPS chính chủ</div>
                    </div>
                  </div>
                  <span style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
                    Khiên 5 Năm
                  </span>
                </div>

                <div style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem', border: '1px dashed #cbd5e1' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <QrCode size={18} color="#0d7647" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>Bộ QR Đánh Giá Google Kèm Theo</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                    In standee mica để tại bàn. Khách chỉ cần mở camera quét là mở thẳng trang để lại đánh giá chân thực trên Google, không cần gõ tìm kiếm.
                  </p>
                </div>

                <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #f8fafc' }}>
                    <span>Thời gian thực hiện:</span>
                    <strong>3 – 5 ngày làm việc</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #f8fafc' }}>
                    <span>Quyền sở hữu:</span>
                    <strong style={{ color: '#0d7647' }}>100% Gmail của khách</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}>
                    <span>Bảo hành &amp; hỗ trợ:</span>
                    <strong>Trọn gói 5 năm</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2 Content: SEO Tổng Thể Địa Phương */}
          {activeTab === 'seo' && (
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                padding: '2.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#edf7f1', color: '#0d7647', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>
                  <Search size={14} /> BÁN KÍNH 3–10KM • PHỦ TỪ KHÓA CÓ DẤU &amp; KHÔNG DẤU
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '1rem' }}>
                  SEO Tổng Thể Địa Phương — Thu Hút Khách Hàng Thực Tế Ghé Tiệm
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Đưa tiệm phủ kín kết quả tìm kiếm Google Maps và Google Search trong toàn bộ bán kính 3-10km. Chúng tôi tối ưu kỹ lưỡng cả từ khóa <strong>KHÔNG DẤU</strong> (thói quen gõ nhanh khi đang đi đường của người Việt) và từ khóa địa phương quận huyện.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    'Bộ 50+ từ khóa bán kính 3-10km sát nhu cầu mua hàng (ví dụ: "sua xe gan day", "tiem hoa q7")',
                    'Tối ưu tín hiệu trích dẫn địa phương (Local Citations) trên 25+ danh bạ uy tín Việt Nam',
                    'Cấu hình thẻ địa lý Geo Meta Tags và nhúng bản đồ trực tiếp vào website',
                    'Đo lường thứ hạng theo lưới bán kính thực tế (Geo-Grid Ranking) minh bạch',
                    'Kỹ thuật viên địa phương túc trực hỗ trợ và cam kết bảo hành kỹ thuật 5 năm'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.95rem', color: '#1e293b', fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Chi phí tối ưu</div>
                    <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0d7647' }}>Từ 390.000đ</div>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => handleCTA('Đăng ký SEO Tổng Thể Địa Phương')}
                    style={{ backgroundColor: '#0d7647', color: '#ffffff', borderRadius: '10px', padding: '0.75rem 1.5rem', fontWeight: 700 }}
                  >
                    Tư Vấn SEO Địa Phương 3-10km
                  </Button>
                </div>
              </div>

              {/* Geo-Grid Visual Box */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  Lưới Phủ Sóng Bán Kính Geo-Grid
                </div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.25rem' }}>
                  Mô phỏng vị trí hiển thị của quán bạn khi khách ở các khoảng cách khác nhau tìm kiếm trên điện thoại:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {[
                    { label: 'Cách 1km', rank: 'Top 1', color: '#16a34a' },
                    { label: 'Cách 2km', rank: 'Top 1', color: '#16a34a' },
                    { label: 'Cách 3km', rank: 'Top 2', color: '#16a34a' },
                    { label: 'Cách 5km', rank: 'Top 2', color: '#16a34a' },
                    { label: 'Cách 7km', rank: 'Top 3', color: '#16a34a' },
                    { label: 'Cách 10km', rank: 'Top 3', color: '#16a34a' }
                  ].map((g, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: '#edf7f1',
                        border: '1px solid #c6ebd4',
                        borderRadius: '10px',
                        padding: '0.75rem',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{g.label}</div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 900, color: g.color }}>{g.rank}</div>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: '0.85rem', color: '#475569', backgroundColor: '#f8fafc', padding: '0.85rem', borderRadius: '10px', borderLeft: '4px solid #0d7647' }}>
                  💡 <strong>Kinh nghiệm thực chiến:</strong> Khách hàng địa phương thường ghé tiệm ngay trong ngày nếu thấy điểm đánh giá cao (từ 4.5 trở lên) và khoảng cách di chuyển dưới 15 phút.
                </div>
              </div>
            </div>
          )}

          {/* Tab 3 Content: Tối Ưu Tốc Độ Web */}
          {activeTab === 'speed' && (
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                padding: '2.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#edf7f1', color: '#0d7647', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>
                  <Zap size={14} /> CAM KẾT PAGESPEED 90+ • MỞ DƯỚI 1S CLOUDFLARE
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '1rem' }}>
                  Tối Ưu Tốc Độ Web — Mở Tức Thì, Khách Không Thoát Trang, Tăng Đơn
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Hơn 53% khách hàng sẽ tắt trang nếu website mất quá 3 giây để tải. LocalMate cấu hình đưa toàn bộ website của bạn lên mạng lưới biên Cloudflare Edge CDN, nén ảnh WebP lossless và dọn sạch mã render-blocking.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    'Cam kết đạt Google PageSpeed Insights 90+ trên cả Mobile & Desktop',
                    'Tốc độ mở trang phản hồi dưới 1 giây trên hạ tầng Cloudflare Edge CDN',
                    'Nén toàn bộ hình ảnh sang chuẩn WebP/AVIF lossless (nhẹ hơn 70%, ảnh vẫn nét)',
                    'Triệt tiêu hoàn toàn co giật khung hình (Zero CLS = 0.000), đạt chuẩn Core Web Vitals',
                    'Cài đặt chứng chỉ bảo mật SSL/TLS 1.3 duy trì an toàn và đồng hành hỗ trợ kỹ thuật 5 năm'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.95rem', color: '#1e293b', fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Trọn gói tối ưu</div>
                    <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0d7647' }}>Từ 299.000đ</div>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => handleCTA('Đăng ký Tối Ưu Tốc Độ Web PageSpeed 90+')}
                    style={{ backgroundColor: '#0d7647', color: '#ffffff', borderRadius: '10px', padding: '0.75rem 1.5rem', fontWeight: 700 }}
                  >
                    Tăng Tốc Website Ngay
                  </Button>
                </div>
              </div>

              {/* Speed Benchmark Comparison */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
                  So Sánh Hiệu Năng Trước &amp; Sau Tối Ưu
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '10px', padding: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 700, color: '#9f1239', fontSize: '0.9rem' }}>Hosting Thông Thường Chưa Tối Ưu</span>
                      <span style={{ fontWeight: 900, color: '#e11d48' }}>38 / 100</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#be123c' }}>
                      Thời gian mở trang: 4.5s • Ảnh quá nặng • 53% khách sốt ruột bỏ đi
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#edf7f1', border: '2px solid #0d7647', borderRadius: '10px', padding: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 800, color: '#063d24', fontSize: '0.95rem' }}>LocalMate Cloudflare Edge CDN</span>
                      <span style={{ fontWeight: 900, color: '#0d7647', fontSize: '1.2rem' }}>96 / 100</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#047857' }}>
                      Thời gian mở trang: 0.8s • Ảnh WebP siêu nhẹ • Tối đa tỷ lệ nhấc máy gọi
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  ✓ Cam kết hoàn tiền 100% nếu sau khi làm không đạt điểm PageSpeed 90+ như thỏa thuận.
                </div>
              </div>
            </div>
          )}

          {/* Tab 4 Content: Thực Thể Số & Schema */}
          {activeTab === 'entity' && (
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                padding: '2.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#edf7f1', color: '#0d7647', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>
                  <Layers size={14} /> SCHEMA LOCALBUSINESS • ĐỒNG BỘ THỰC THỂ NAP 100%
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '1rem' }}>
                  Dịch Vụ Thực Thể Số — Giúp Google &amp; AI Nhận Diện Thương Hiệu Độc Nhất
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Khai báo cấu trúc dữ liệu máy đọc hiểu chuẩn schema.org (GeoCoordinates, OpeningHours, PriceRange, SameAs). Giúp kết quả tìm kiếm của bạn hiển thị ngôi sao vàng, giờ mở cửa và giúp các trợ lý AI (ChatGPT, Gemini) tự tin giới thiệu quán của bạn.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    'Bộ mã Schema JSON-LD LocalBusiness chi tiết từng tọa độ GPS và số điện thoại',
                    'Hiển thị Rich Snippets (ngôi sao đánh giá, giờ mở cửa, danh mục dịch vụ) trên Google',
                    'Đồng bộ thực thể số NAP (Name - Address - Phone) trên toàn bộ mạng xã hội & danh bạ',
                    'Kết nối thực thể vào Google Knowledge Graph, không bị nhầm lẫn với tiệm trùng tên',
                    'Vượt qua 100% kiểm định công cụ Google Rich Results Test và bảo hành 5 năm'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.95rem', color: '#1e293b', fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Chi phí cài đặt</div>
                    <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0d7647' }}>Từ 199.000đ</div>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => handleCTA('Đăng ký Cài Đặt Thực Thể Số & Schema')}
                    style={{ backgroundColor: '#0d7647', color: '#ffffff', borderRadius: '10px', padding: '0.75rem 1.5rem', fontWeight: 700 }}
                  >
                    Khai Báo Schema Ngay
                  </Button>
                </div>
              </div>

              {/* Code Snippet Visual */}
              <div
                style={{
                  backgroundColor: '#0f172a',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  color: '#e2e8f0',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  lineHeight: 1.5,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1rem', borderBottom: '1px solid #334155', paddingBottom: '0.5rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  <span style={{ marginLeft: '0.5rem', color: '#94a3b8', fontSize: '0.75rem' }}>schema-localbusiness.jsonld</span>
                </div>
                <pre style={{ margin: 0, overflowX: 'auto' }}>
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tên Cơ Sở Kinh Doanh Của Bạn",
  "telephone": "+84834422439",
  "priceRange": "100.000 - 500.000 VND",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.776889,
    "longitude": 106.700806
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:30",
      "closes": "22:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/tiemcuaban",
    "https://maps.google.com/?cid=..."
  ]
}`}
                </pre>
              </div>
            </div>
          )}

          {/* Tab 5 Content: SEO Audit Hiện Trạng 0đ */}
          {activeTab === 'audit' && (
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                padding: '2.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#fef3c7', color: '#b45309', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>
                  <ClipboardCheck size={14} /> KHẢO SÁT HIỆN TRẠNG 0Đ • BÁO CÁO SAU 24H
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '1rem' }}>
                  SEO Audit Hiện Trạng — Chỉ Rõ Từng Điểm Nghẽn Khiến Tiệm Vắng Khách
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Bạn đang băn khoăn vì sao có Maps, có Web mà không ai gọi? Kỹ thuật viên LocalMate trực tiếp kiểm toán miễn phí: vạch trần điểm nghẽn chuyển đổi, đo tốc độ web thực tế, soi từ khóa đối thủ và đưa ra bảng việc cần làm ngay trong 24 giờ.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    'Kiểm toán vị trí Maps: Nguy cơ bị cướp quyền, rà soát trùng lặp và số lượng đánh giá thực tế',
                    'Đo tốc độ thực tế bằng Google PageSpeed Insights trên điện thoại',
                    'So sánh đối thủ cùng ngành trong bán kính 3-10km đang đứng top bằng cách nào',
                    'Kiểm tra trải nghiệm di động: Nút bấm gọi hotline, link Zalo, nút chỉ đường Maps',
                    'Kèm bảng lộ trình Quick-Win: Các việc nhỏ sửa xong là thấy khách gọi ngay'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.95rem', color: '#1e293b', fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Chi phí khảo sát</div>
                    <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0d7647' }}>0đ (Miễn phí 100%)</div>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => {
                      const el = document.getElementById('tu-chan-doan');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{ backgroundColor: '#0d7647', color: '#ffffff', borderRadius: '10px', padding: '0.75rem 1.5rem', fontWeight: 700 }}
                  >
                    Bắt Đầu Tự Chẩn Đoán 0đ
                  </Button>
                </div>
              </div>

              {/* Audit Sample Card */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ padding: '8px', backgroundColor: '#fef3c7', borderRadius: '8px' }}>
                    <AlertTriangle size={22} color="#b45309" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0f172a' }}>Ví Dụ Điểm Nghẽn Phổ Biến</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Khảo sát thực tế tại hơn 250 cơ sở</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: '#fff1f2', borderRadius: '8px', color: '#9f1239' }}>
                    ❌ <strong>Nút gọi bị che:</strong> Khách vào bằng điện thoại nhưng banner đè mất số hotline.
                  </div>
                  <div style={{ padding: '0.75rem', backgroundColor: '#fff1f2', borderRadius: '8px', color: '#9f1239' }}>
                    ❌ <strong>Mất top từ không dấu:</strong> Gõ "nha khoa uy tin" ra đối thủ vì chỉ SEO từ có dấu.
                  </div>
                  <div style={{ padding: '0.75rem', backgroundColor: '#fff1f2', borderRadius: '8px', color: '#9f1239' }}>
                    ❌ <strong>Web tải 5.2 giây:</strong> Khách bấm vào từ Facebook nhưng thoát ngay vì chờ lâu.
                  </div>
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px dashed #e2e8f0', fontSize: '0.8rem', color: '#0d7647', fontWeight: 700 }}>
                  ✓ Báo cáo chỉ ra đúng chỗ ngứa, tư vấn thật tâm, không ép mua dịch vụ.
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 4. Interactive Self-Diagnosis Tool (Audit Calculator) */}
      <section id="tu-chan-doan" style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                CÔNG CỤ TỰ CHẨN ĐOÁN MIỄN PHÍ 0Đ
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginTop: '0.4rem' }}>
                Kiểm Tra Sức Khỏe Số Cơ Sở Địa Phương Của Bạn
              </h2>
              <p style={{ color: '#475569', fontSize: '1rem', marginTop: '0.5rem' }}>
                Tích chọn những tình trạng cơ sở của bạn đang gặp phải dưới đây để nhận đánh giá tức thì:
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                padding: '2.25rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  {
                    id: 'no_maps',
                    label: 'Chưa có vị trí Google Maps hoặc chưa xác minh GPS chính chủ bằng Gmail'
                  },
                  {
                    id: 'maps_hijack_risk',
                    label: 'Đã có Maps nhưng bị đối thủ chơi xấu đề xuất sửa số điện thoại, sửa giờ mở cửa'
                  },
                  {
                    id: 'no_keyword_rank',
                    label: 'Tìm kiếm quanh 3–5km từ khóa KHÔNG DẤU (ví dụ: sua xe, nha khoa gan day) không thấy tiệm'
                  },
                  {
                    id: 'slow_mobile',
                    label: 'Website hoặc landing page mở trên điện thoại lâu hơn 3 giây, hình ảnh bị nặng'
                  },
                  {
                    id: 'no_reviews_qr',
                    label: 'Chưa có bộ mã QR để bàn giúp khách để lại đánh giá chân thực trên Google'
                  },
                  {
                    id: 'no_schema_entity',
                    label: 'Tìm kiếm trên Google không hiện ngôi sao vàng, chưa có Schema LocalBusiness'
                  }
                ].map((symptom) => {
                  const isChecked = checkedSymptoms.includes(symptom.id);
                  return (
                    <div
                      key={symptom.id}
                      onClick={() => toggleSymptom(symptom.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: isChecked ? '1px solid #fecdd3' : '1px solid #e2e8f0',
                        backgroundColor: isChecked ? '#fff1f2' : '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        style={{ marginTop: '3px', accentColor: '#e11d48', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '0.9rem', color: isChecked ? '#9f1239' : '#1e293b', fontWeight: isChecked ? 600 : 500, lineHeight: 1.45 }}>
                        {symptom.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Diagnostic Output */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Điểm Sức Khỏe Số Địa Phương Ước Tính:</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.25rem' }}>
                    <span
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        color: calculateHealthScore() > 70 ? '#16a34a' : calculateHealthScore() > 40 ? '#d97706' : '#e11d48'
                      }}
                    >
                      {calculateHealthScore()}/100
                    </span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#475569' }}>
                      ({checkedSymptoms.length} điểm nghẽn cần khắc phục)
                    </span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  onClick={() => handleCTA('Đăng ký Báo Cáo SEO Audit 0đ Tận Nơi')}
                  style={{
                    backgroundColor: '#0d7647',
                    color: '#ffffff',
                    borderRadius: '10px',
                    padding: '0.85rem 1.75rem',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <ClipboardCheck size={18} />
                  <span>Nhận Báo Cáo Khảo Sát Chi Tiết 0đ</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Feature Highlight: Bộ QR Đánh Giá Chân Thực & Khiên Bảo Vệ 5 Năm */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}>
        <Container size="lg">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#edf7f1', color: '#0d7647', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>
                <QrCode size={16} /> GIẢI PHÁP ĐỘC QUYỀN LOCALMATE
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '1.25rem' }}>
                Bộ QR Đánh Giá Chân Thực Để Bàn — Khách Quét 1 Chạm, Để Lại Nhận Xét Nhanh Chóng
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Nhiều quán xin đánh giá bằng miệng nhưng khách thường quên hoặc lười vì phải gõ tìm tên tiệm. 
                LocalMate thiết kế trọn bộ ấn phẩm mã QR chuyên nghiệp: khách dùng camera điện thoại quét là mở ngay trang để lại đánh giá chân thực trên Google mà không cần tìm kiếm.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#edf7f1', color: '#0d7647', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                    1
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a' }}>100% Đánh Giá Thật:</strong> Tuyệt đối nói KHÔNG với review bot ảo khiến Maps bị khóa. Chỉ thu thập đánh giá từ khách hàng đã trải nghiệm tại quán.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#edf7f1', color: '#0d7647', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                    2
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a' }}>File In Ấn Chuẩn Sắc Nét:</strong> Bàn giao file in PDF vector độ nét cao cho tiệm mang ra tiệm photocopy/in ấn gần nhà in thành standee mica để bàn.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#edf7f1', color: '#0d7647', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                    3
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Khiên Bảo Vệ 5 Năm:</strong> Hỗ trợ kỹ thuật viên đồng hành, hướng dẫn nhân viên cách mời khách đánh giá tự nhiên nhất.
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                onClick={() => handleCTA('Đăng ký Bộ QR Đánh Giá Chân Thực')}
                style={{ backgroundColor: '#0d7647', color: '#ffffff', borderRadius: '10px', padding: '0.85rem 1.75rem', fontWeight: 700 }}
              >
                Nhận Bộ QR Đánh Giá Chân Thực Ngay
              </Button>
            </div>

            {/* Visual Standee Demo */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #cbd5e1',
                borderRadius: '20px',
                padding: '2.5rem',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
              }}
            >
              <div
                style={{
                  maxWidth: '280px',
                  margin: '0 auto',
                  backgroundColor: '#ffffff',
                  border: '2px solid #0d7647',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  boxShadow: '0 4px 15px rgba(13,118,71,0.1)'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  CẢM ƠN QUÝ KHÁCH
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem' }}>
                  ĐỂ LẠI ĐÁNH GIÁ TRÊN GOOGLE
                </div>

                <div
                  style={{
                    width: '140px',
                    height: '140px',
                    margin: '0 auto 1rem auto',
                    backgroundColor: '#edf7f1',
                    border: '1px dashed #0d7647',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0d7647'
                  }}
                >
                  <QrCode size={64} />
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, marginTop: '4px' }}>QUÉT ĐỂ ĐÁNH GIÁ</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} fill="#eab308" color="#eab308" />
                  ))}
                </div>
                <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>
                  Mở camera điện thoại quét mã • Vào thẳng trang đánh giá chân thực trên Google
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>
                Mẫu Standee Mica Đặt Tại Bàn / Quầy Thu Ngân
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Commitments: 4 KHÔNG & 4 CÓ */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              NGƯỜI ĐỒNG HÀNH SỐ ĐỊA PHƯƠNG
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800, color: '#0f172a', marginTop: '0.4rem' }}>
              Cam Kết 4 KHÔNG &amp; 4 CÓ — Minh Bạch Tuyệt Đối
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              LocalMate làm thật việc thật, không bao giờ dùng chiêu trò mập mờ để làm khó khách hàng.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* 4 KHÔNG */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #fecdd3',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e11d48', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} />
                <span>4 TIÊU CHUẨN KHÔNG</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#e11d48', fontWeight: 800 }}>✕</span>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Không giữ tài khoản / mật khẩu:</strong> Bàn giao 100% quyền sở hữu chính chủ (Primary Owner) cho Gmail của bạn.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#e11d48', fontWeight: 800 }}>✕</span>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Không phát sinh chi phí ẩn:</strong> Báo giá gốc một lần cố định, thống nhất rõ ràng trước khi bấm tay vào làm.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#e11d48', fontWeight: 800 }}>✕</span>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Không dùng review ảo, bot bẩn:</strong> Tuyệt đối chỉ hướng dẫn thu thập đánh giá từ khách hàng thực tế để bảo vệ Maps bền vững.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#e11d48', fontWeight: 800 }}>✕</span>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Không bỏ rơi khách hàng:</strong> Kỹ thuật viên địa phương hỗ trợ suốt vòng đời dịch vụ, cần là có mặt xử lý.
                  </div>
                </div>
              </div>
            </div>

            {/* 4 CÓ */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #0d7647',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 4px 12px rgba(13,118,71,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#0d7647', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.25rem' }}>
                <CheckCircle2 size={24} />
                <span>4 CAM KẾT VÀNG CỦA LOCALMATE</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#0d7647', fontWeight: 800 }}>✓</span>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Giá gốc bình dân từ 0đ - 299k:</strong> Phù hợp túi tiền của mọi tiểu thương, quán ăn và cơ sở kinh doanh nhỏ.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#0d7647', fontWeight: 800 }}>✓</span>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Nghiệm thu hài lòng mới thanh toán:</strong> Khách kiểm tra hiển thị trên điện thoại đạt yêu cầu rồi mới thanh toán.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#0d7647', fontWeight: 800 }}>✓</span>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Cam kết bảo hành lên đến 5 năm:</strong> Kỹ thuật viên bảo hành vị trí, hỗ trợ cập nhật giờ mở cửa ngày lễ tết miễn phí.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#0d7647', fontWeight: 800 }}>✓</span>
                  <div>
                    <strong style={{ color: '#0f172a' }}>Tặng kèm bộ mã QR đánh giá chân thực:</strong> Tạo QR giúp khách hàng đã sử dụng dịch vụ để lại đánh giá chân thực trên Google.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. FAQs */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}>
        <Container size="md">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              GIẢI ĐÁP THẮC MẮC
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginTop: '0.4rem' }}>
              Những Câu Hỏi Thường Gặp Của Khách Hàng
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'Tôi có cần đưa mật khẩu Gmail cho LocalMate để xác minh Google Maps không?',
                a: 'Tuyệt đối KHÔNG. Bạn không bao giờ cần cung cấp mật khẩu Gmail cho bất kỳ ai. LocalMate hướng dẫn bạn thêm email kỹ thuật của chúng tôi làm người quản lý (Manager), sau khi xác minh xong sẽ bàn giao lại quyền Chủ sở hữu chính (Primary Owner) cho bạn và gỡ email kỹ thuật ra.'
              },
              {
                q: 'Đối thủ có cướp được vị trí Maps của tôi hoặc đổi lén số điện thoại không?',
                a: 'Google cho phép người dùng đóng góp đề xuất chỉnh sửa, nên nhiều cơ sở bị đối thủ đổi lén hotline hoặc báo đóng cửa. Khi LocalMate tối ưu, chúng tôi thiết lập khiên bảo vệ với đầy đủ thông tin pháp lý và xác minh định vị GPS chuẩn, giúp Google tự động chặn các đề xuất ác ý, đồng thời hỗ trợ khôi phục ngay nếu có sự cố.'
              },
              {
                q: 'Tại sao phải tối ưu từ khóa KHÔNG DẤU trong SEO Tổng Thể Địa Phương?',
                a: 'Hơn 70% người dùng khi đi đường hoặc cần dịch vụ gấp đều gõ không dấu trên điện thoại (như "sua may tinh gan day", "nha khoa uy tin q7"). Nếu chỉ làm từ khóa có dấu, bạn sẽ bỏ lỡ tệp khách hàng có nhu cầu nóng nhất này.'
              },
              {
                q: 'Cam kết PageSpeed 90+ trên Cloudflare đo bằng công cụ gì?',
                a: 'Đo trực tiếp bằng công cụ chính thức Google PageSpeed Insights của Google. Bạn chỉ cần dán link website vào là thấy kết quả công khai, minh bạch.'
              },
              {
                q: 'Chính sách bảo hành lên đến 5 năm của LocalMate hoạt động thế nào?',
                a: 'Trong suốt 5 năm, nếu vị trí Google Maps của bạn bị lỗi định vị, bị thay đổi thông tin trái phép, hoặc website cần tinh chỉnh lại tốc độ sau khi đăng thêm ảnh mới, kỹ thuật viên LocalMate luôn sẵn sàng hỗ trợ bạn hoàn toàn miễn phí.'
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#0f172a'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="#0d7647" /> : <ChevronDown size={20} color="#64748b" />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '1.25rem', borderTop: '1px solid #f1f5f9', color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, backgroundColor: '#ffffff' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 8. Registration Lead Form */}
      <section id="dang-ky-tu-van" style={{ padding: '4.5rem 0', backgroundColor: '#edf7f1', borderTop: '1px solid #c6ebd4' }}>
        <Container size="md">
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #c6ebd4',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 8px 30px rgba(13,118,71,0.08)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ĐĂNG KÝ TƯ VẤN TRỰC TIẾP
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', marginTop: '0.4rem' }}>
                Đồng Hành Số Cùng Kỹ Thuật Viên Địa Phương
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.35rem' }}>
                Khảo sát hiện trạng 0đ • Báo giá gốc bình dân • Cam kết bảo hành lên đến 5 năm!
              </p>
            </div>

            {toastMessage && (
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  backgroundColor: toastMessage.includes('thành công') ? '#edf7f1' : '#fff1f2',
                  border: toastMessage.includes('thành công') ? '1px solid #c6ebd4' : '1px solid #fecdd3',
                  color: toastMessage.includes('thành công') ? '#063d24' : '#9f1239',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}
              >
                {toastMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                    Họ và tên của bạn <span style={{ color: '#e11d48' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Anh Tuấn, Chị Lan..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      color: '#0f172a',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                    Số điện thoại / Zalo <span style={{ color: '#e11d48' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Nhập số điện thoại nhận tư vấn"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      color: '#0f172a',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                    Tên cơ sở / Ngành nghề của tiệm
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Cơm Tấm Sài Gòn, Nha Khoa Đức Tín..."
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      color: '#0f172a',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                    Dịch vụ bạn quan tâm nhất
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      color: '#0f172a',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="Khảo Sát Hiện Trạng Số 0đ">Khảo Sát Hiện Trạng Số 0đ (Khuyên Dùng)</option>
                    <option value="Google Maps Chính Chủ 100% & QR Review (Từ 299k)">Google Maps Chính Chủ 100% &amp; QR Review (Từ 299k)</option>
                    <option value="SEO Tổng Thể Địa Phương 3-10km (Từ 390k)">SEO Tổng Thể Địa Phương 3–10km (Từ 390k)</option>
                    <option value="Tối Ưu Tốc Độ Web PageSpeed 90+ (Từ 299k)">Tối Ưu Tốc Độ Web PageSpeed 90+ (Từ 299k)</option>
                    <option value="Thực Thể Số (Entity) & Schema Local (Từ 199k)">Thực Thể Số (Entity) &amp; Schema Local (Từ 199k)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                  Địa chỉ hoặc link Maps / Website hiện tại (nếu có)
                </label>
                <textarea
                  rows={3}
                  placeholder="Điền địa chỉ cơ sở hoặc ghi chú thêm những khó khăn tiệm đang gặp..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.95rem',
                    color: '#0f172a',
                    backgroundColor: '#ffffff',
                    resize: 'vertical'
                  }}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                style={{
                  height: '52px',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  borderRadius: '12px',
                  marginTop: '0.5rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi Yêu Cầu Khảo Sát 0đ & Tư Vấn'}
              </Button>

              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#64748b' }}>
                Hoặc gọi trực tiếp Hotline / Zalo hỗ trợ 24/7:{' '}
                <a href={`tel:${CONTACT_INFO.phone}`} style={{ color: '#0d7647', fontWeight: 700 }}>
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default LocalSearchClusterPage;
