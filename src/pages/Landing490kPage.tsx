import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  BarChart2, 
  Layers, 
  RefreshCw, 
  ShieldCheck, 
  Smartphone, 
  PhoneCall, 
  MessageSquare, 
  FileText, 
  Search, 
  Clock, 
  Globe, 
  Lock, 
  HelpCircle, 
  Send,
  Sparkles,
  ChevronDown,
  TrendingUp,
  Zap,
  MousePointer,
  Users,
  Award,
  Store,
  Scissors,
  Wrench,
  Stethoscope
} from 'lucide-react';
import { CONTACT_INFO } from '../data/landingContent';
import { submitLead } from '../services/leadService';

export const Landing490kPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedIndustryDemo, setSelectedIndustryDemo] = useState<'fb' | 'spa' | 'repair' | 'clinic'>('fb');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    notes: ''
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const trackingFeatures = [
    {
      title: 'Lượng người truy cập (Pageviews)',
      desc: 'Biết chính xác từng lượt khách bấm vào xem trang bán hàng từ Facebook Ads hoặc Google Ads.',
      icon: <Users size={20} color="#0d7647" />,
      colorBg: '#e8f5ed'
    },
    {
      title: 'Lượt bấm gọi Hotline (Click-to-Call)',
      desc: 'Ghi nhận bao nhiêu khách bấm nút gọi điện ngay lập tức khi đang xem trên điện thoại.',
      icon: <PhoneCall size={20} color="#0284c7" />,
      colorBg: '#e0f2fe'
    },
    {
      title: 'Lượt bấm mở chat Zalo (Click-to-Chat)',
      desc: 'Theo dõi số người bấm kết nối Zalo trao đổi giá cả và nhận tư vấn chi tiết.',
      icon: <MessageSquare size={20} color="#0d9488" />,
      colorBg: '#ccfbf1'
    },
    {
      title: 'Khách bắt đầu điền form (Form Start)',
      desc: 'Phát hiện bao nhiêu người đã bắt đầu gõ thông tin vào form để lại số điện thoại.',
      icon: <MousePointer size={20} color="#d97706" />,
      colorBg: '#fef3c7'
    },
    {
      title: 'Khách gửi đơn thành công (Form Submit)',
      desc: 'Ghi nhận chính xác số đơn hoàn tất, tự động gửi tín hiệu để máy học Ads tối ưu tiếp.',
      icon: <TrendingUp size={20} color="#7c3aed" />,
      colorBg: '#f3e8ff'
    }
  ];

  const inclusions = [
    { title: '01 Landing Page (3 section chuẩn)', desc: 'Cấu trúc tinh gọn: Giới thiệu ➔ Sản phẩm & Ưu đãi ➔ Báo giá & Liên hệ', icon: <FileText size={20} color="#0d7647" /> },
    { title: 'Tối ưu Mobile First & Tốc độ <1s', desc: 'Hiển thị sắc nét, tải cực nhanh trên 4G điện thoại và màn hình máy tính', icon: <Smartphone size={20} color="#0d7647" /> },
    { title: 'Nút Gọi Hotline & Zalo 1-chạm', desc: 'Thanh CTA dính chân màn hình di động, khách chạm nhẹ là kết nối ngay', icon: <PhoneCall size={20} color="#0d7647" /> },
    { title: 'Google Analytics 4 (GA4)', desc: 'Khởi tạo luồng dữ liệu chuẩn để đếm chính xác từng hành vi của khách', icon: <BarChart2 size={20} color="#0d7647" /> },
    { title: 'Google Tag Manager (GTM)', desc: 'Container quản lý thẻ chuyên nghiệp, dễ dàng thêm Pixel sau này mà không sửa code', icon: <Layers size={20} color="#0d7647" /> },
    { title: 'Cài đặt Tracking Chuyển Đổi', desc: 'Gắn sự kiện đo click call, click chat Zalo và submit form vào GA4 & Ads', icon: <Search size={20} color="#0d7647" /> },
    { title: 'Hỗ trợ trỏ Tên Miền riêng', desc: 'Hỗ trợ kết nối tên miền chính hoặc subdomain (vd: khuyenmai.tenmien.vn)', icon: <Globe size={20} color="#0d7647" /> },
    { title: 'Chứng chỉ bảo mật SSL HTTPS', desc: 'Tích xanh bảo mật miễn phí trọn đời, an tâm tuyệt đối cho khách xem', icon: <Lock size={20} color="#0d7647" /> },
    { title: '01 Vòng chỉnh sửa hoàn chỉnh', desc: 'Điều chỉnh chữ, hình ảnh, hotline và thông điệp trước khi chạy chính thức', icon: <RefreshCw size={20} color="#0d7647" /> },
    { title: 'Bàn giao siêu tốc trong 24 Giờ', desc: 'Gửi đủ thông tin là có web demo chạy thật trong vòng 24 giờ làm việc', icon: <Clock size={20} color="#0d7647" /> }
  ];

  const industryDemos = [
    {
      id: 'fb',
      name: 'Ẩm Thực / Quán Ăn / Cafe',
      icon: <Store size={18} />,
      headline: 'Đặc Sản Bún Bò Gia Truyền — Tặng Trà Tắc Cho Đơn Từ 100k',
      subtext: 'Nước dùng ninh xương 12h đậm đà. Đặt bàn trước giảm 10%.',
      ctaText: 'Gọi Giao Tận Nơi',
      callout: 'Quán ăn, nhà hàng, quán nước, tiệm bánh...'
    },
    {
      id: 'spa',
      name: 'Spa / Làm Đẹp / Tiệm Tóc',
      icon: <Scissors size={18} />,
      headline: 'Combo Chăm Sóc Da Chuyên Sâu 699k — Đặt Lịch Ngay Hôm Nay',
      subtext: 'Liệu trình 9 bước bằng thảo mộc tự nhiên. Cam kết da sáng mịn sau 1 buổi.',
      ctaText: 'Đặt Lịch Giữ Chỗ',
      callout: 'Spa, thẩm mỹ viện, nails, salon tóc, phun xăm...'
    },
    {
      id: 'repair',
      name: 'Thợ / Sửa Chữa / Gara / Nhôm Kính',
      icon: <Wrench size={18} />,
      headline: 'Sửa Chữa Điện Nước & Nhôm Kính Tận Nhà — Có Mặt Sau 20 Phút',
      subtext: 'Thợ tay nghề cao 10 năm kinh nghiệm. Báo giá trước khi làm, bảo hành 12 tháng.',
      ctaText: 'Gọi Thợ Đến Ngay',
      callout: 'Điện lạnh, thợ sửa ống nước, nhôm kính, gara ô tô, cứu hộ...'
    },
    {
      id: 'clinic',
      name: 'Phòng Khám / Nha Khoa',
      icon: <Stethoscope size={18} />,
      headline: 'Niềng Răng Thẩm Mỹ Trả Góp 0% — Khám & Chụp X-Quang 0đ',
      subtext: 'Bác sĩ chuyên khoa Răng Hàm Mặt trực tiếp thăm khám. Hợp đồng bảo hành minh bạch.',
      ctaText: 'Đăng Ký Khám 0đ',
      callout: 'Nha khoa, phòng khám nhi, da liễu, mắt, nhà thuốc...'
    }
  ];

  const faqs = [
    {
      q: '1. Thời gian bàn giao 24 giờ tính từ khi nào?',
      a: 'Thời gian 24 giờ được tính từ lúc bạn gửi đủ thông tin (tên sản phẩm/dịch vụ, hình ảnh thực tế, hotline/Zalo và nội dung cơ bản). LocalMate sẽ bắt tay vào dựng ngay và gửi link demo cho bạn duyệt trực tiếp trên điện thoại trong vòng 24 giờ.'
    },
    {
      q: '2. Tôi chưa có tên miền riêng thì có làm được không?',
      a: 'Hoàn toàn được! Bạn có thể sử dụng subdomain miễn phí do LocalMate cấp tạm (ví dụ: tenquan.localmate.vn) để bắt đầu chạy quảng cáo ngay lập tức. Sau này khi bạn mua tên miền riêng, LocalMate sẽ hỗ trợ trỏ kết nối hoàn toàn miễn phí.'
    },
    {
      q: '3. Gói 490k đã gồm tiền nạp chạy quảng cáo chưa?',
      a: 'Gói 490k là phí thiết kế, lập trình landing page tốc độ cao và cài đặt toàn bộ hạ tầng đo lường (GA4, GTM, tracking sự kiện nút gọi/chat). Phí này chưa bao gồm ngân sách bạn nạp vào tài khoản Google Ads hoặc Facebook Ads để chạy tiếp thị.'
    },
    {
      q: '4. Tôi có được chỉnh sửa sau khi nhận bản demo không?',
      a: 'Có. Gói 490k đã bao gồm 01 vòng chỉnh sửa hoàn chỉnh để bạn rà soát lại thông tin, số điện thoại, giá cả, thực đơn hoặc hình ảnh sao cho ưng ý nhất trước khi chạy quảng cáo chính thức.'
    },
    {
      q: '5. Sau này tôi muốn nâng cấp thêm section hoặc tính năng thì sao?',
      a: 'Rất dễ dàng. Khi quy mô kinh doanh mở rộng, bạn có thể nâng cấp lên các gói website doanh nghiệp đầy đủ của LocalMate (2.900.000đ) mà vẫn giữ nguyên toàn bộ dữ liệu đo lường đã tích lũy trên GA4 & GTM.'
    }
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setToastMessage('⚠️ Vui lòng nhập họ tên và số điện thoại liên hệ!');
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        businessName: formData.service || 'Chưa ghi rõ ngành nghề',
        serviceInterest: 'Gói Landing Page Chạy Quảng Cáo 490.000đ',
        message: `Khách đăng ký Gói 490k. Ngành: ${formData.service || 'Chưa điền'} | Ghi chú: ${formData.notes || 'Không'}`,
        sourcePage: '/landing-490k'
      });
    } catch (err) {
      console.debug('Submit lead error:', err);
    }

    const message = `Chào LocalMate, tôi muốn đăng ký Gói Landing Page 490k.\n- Họ tên: ${formData.name}\n- SĐT: ${formData.phone}\n- Dịch vụ: ${formData.service || 'Chưa điền'}\n- Ghi chú: ${formData.notes || 'Không'}`;
    const encodedMsg = encodeURIComponent(message);
    const zaloUrl = `https://zalo.me/0834422439?text=${encodedMsg}`;

    setToastMessage(`Cảm ơn ${formData.name}! Đang chuyển hướng sang Zalo để kết nối KTV...`);
    setTimeout(() => {
      window.open(zaloUrl, '_blank');
      setToastMessage(null);
    }, 1200);
  };

  const scrollToForm = (prefillService?: string) => {
    if (prefillService) {
      setFormData(prev => ({ ...prev, service: prefillService }));
    }
    const el = document.getElementById('order-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentDemoData = industryDemos.find(d => d.id === selectedIndustryDemo) || industryDemos[0];

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', paddingBottom: '4rem', scrollbarGutter: 'stable' }}>
      
      {/* Dynamic SEO Head */}
      <SEOHead
        title="Landing Page Chạy Quảng Cáo 490.000đ — Tốc Độ <1s, Đo Lường GA4 & Bàn Giao 24H | LocalMate"
        description="Thiết kế Landing Page chuẩn chạy quảng cáo chỉ 490.000đ trọn gói. Tối ưu Mobile First, tải trang siêu tốc <1s, tích hợp sẵn GA4, GTM, nút Gọi & Zalo 1-chạm, bàn giao trong 24 giờ."
        canonicalPath="/landing-490k"
        breadcrumbs={[
          { name: 'Trang chủ', url: '/' },
          { name: 'Landing Page 490k', url: '/landing-490k' }
        ]}
        schemaType="Service"
        schemaData={{
          name: 'Gói Thiết Kế Landing Page Chạy Quảng Cáo 490k',
          serviceType: 'Landing Page Web Design',
          provider: {
            '@type': 'LocalBusiness',
            name: 'LocalMate',
            telephone: '+84834422439',
            url: 'https://localmate.vn'
          },
          offers: {
            '@type': 'Offer',
            price: '490000',
            priceCurrency: 'VND'
          }
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#0d7647',
            color: '#ffffff',
            padding: '14px 20px',
            borderRadius: '10px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            zIndex: 10000,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span>✅</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT */}
      <div
        style={{
          backgroundColor: '#0d7647',
          color: '#ffffff',
          fontSize: '0.85rem',
          padding: '0.6rem 1rem',
          textAlign: 'center',
          fontWeight: 700,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          borderBottom: '1px solid #16a34a'
        }}
      >
        <span
          style={{
            backgroundColor: '#facc15',
            color: '#0f172a',
            padding: '2px 8px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 900
          }}
        >
          GÓI SIÊU TỐC 24H
        </span>
        <span>⚡ Bàn giao hoàn thiện &amp; sẵn sàng chạy quảng cáo Google/Meta trong <strong>24 giờ</strong>!</span>
      </div>

      {/* ==================== SECTION 1: HERO ==================== */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <Breadcrumbs items={[{ name: 'Landing Page 490k', url: '/landing-490k' }]} />
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center',
              marginTop: '1rem'
            }}
          >
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.825rem',
                  fontWeight: 800,
                  color: '#0d7647',
                  backgroundColor: '#e8f5ed',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  width: 'fit-content',
                  border: '1px solid #a3e635'
                }}
              >
                <Sparkles size={15} color="#16a34a" />
                <span>GIẢI PHÁP TIẾT KIỆM CHO CỬA HÀNG &amp; DOANH NGHIỆP ĐỊA PHƯƠNG</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2rem, 4.2vw, 3rem)',
                  fontWeight: 900,
                  color: '#0f172a',
                  lineHeight: 1.2,
                  margin: 0,
                  textWrap: 'pretty'
                }}
              >
                LANDING PAGE CHẠY ADS – <span style={{ color: '#0d7647' }}>490.000Đ</span> TRỌN GÓI
              </h1>

              <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)', fontWeight: 700, color: '#1e293b', margin: 0 }}>
                Có ngay trang bán hàng chuẩn di động để bắt đầu chạy quảng cáo ra khách ngay hôm nay.
              </p>

              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Bạn chỉ cần gửi 1 sản phẩm hoặc dịch vụ, LocalMate thiết kế trang đích đơn giản, rõ ràng, tốc độ tải dưới 1 giây, tích hợp sẵn đo lường GA4/GTM và nút gọi Zalo 1-chạm.
              </p>

              {/* Delivery Time Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#f0fdf4',
                  border: '1.5px solid #86efac',
                  borderRadius: '10px',
                  fontWeight: 700,
                  color: '#0d7647',
                  width: 'fit-content'
                }}
              >
                <Clock size={18} color="#0d7647" />
                <span>Bàn giao hoàn thiện chạy thật trong <strong>24 giờ</strong></span>
              </div>

              {/* 5 Quick Features Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  backgroundColor: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1rem 0.5rem',
                  textAlign: 'center',
                  gap: '0.25rem'
                }}
              >
                <div>
                  <FileText size={20} color="#0d7647" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>3 Section</div>
                </div>
                <div>
                  <BarChart2 size={20} color="#0d7647" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Cài GA4</div>
                </div>
                <div>
                  <Layers size={20} color="#0d7647" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Cài GTM</div>
                </div>
                <div>
                  <Search size={20} color="#0d7647" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Tracking</div>
                </div>
                <div>
                  <RefreshCw size={20} color="#0d7647" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>1 Vòng Sửa</div>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Button variant="primary" size="lg" onClick={() => scrollToForm()}>
                  <Rocket size={18} /> Đặt Làm Landing Page 490K
                </Button>
                <a
                  href={`${CONTACT_INFO.zaloUrl}?text=${encodeURIComponent('Chào LocalMate, tôi muốn tư vấn làm Landing Page 490k chạy quảng cáo.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0.75rem 1.25rem',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '8px',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none'
                  }}
                >
                  <MessageSquare size={18} color="#0d7647" />
                  <span>Tư Vấn Qua Zalo</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.85rem', fontWeight: 700, color: '#64748b' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={16} color="#0d7647" /> Giá niêm yết cố định
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Zap size={16} color="#0d7647" /> Tốc độ dưới 1.0 giây
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle2 size={16} color="#0d7647" /> Sẵn sàng chạy ads ngay
                </span>
              </div>
            </div>

            {/* Right Visual: LIVE PHONE MOCKUP (Sắc nét 100% bằng Pure CSS & SVG, không mờ vỡ hạt) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '100%',
                  maxWidth: '340px',
                  backgroundColor: '#0f172a',
                  borderRadius: '38px',
                  padding: '10px',
                  boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px #334155',
                  position: 'relative'
                }}
              >
                {/* Dynamic Floating Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '-10px',
                    backgroundColor: '#0d7647',
                    color: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    boxShadow: '0 4px 10px rgba(13, 118, 71, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    zIndex: 10
                  }}
                >
                  <Zap size={12} color="#facc15" />
                  <span>LOAD &lt; 0.8S</span>
                </div>

                {/* Phone Screen Container */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #cbd5e1'
                  }}
                >
                  {/* Phone Top Notch Bar */}
                  <div
                    style={{
                      backgroundColor: '#f8fafc',
                      padding: '8px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid #e2e8f0',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: '#475569'
                    }}
                  >
                    <span>9:41</span>
                    <div style={{ width: '48px', height: '14px', backgroundColor: '#0f172a', borderRadius: '10px' }} />
                    <span>5G 100%</span>
                  </div>

                  {/* Mockup Landing Page Content Inside Phone */}
                  <div style={{ padding: '12px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {/* Mockup Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <div style={{ width: '22px', height: '22px', borderRadius: '6px', backgroundColor: '#0d7647', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 900 }}>
                          L
                        </div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a' }}>TIỆM CỦA BẠN</span>
                      </div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#dc2626', backgroundColor: '#fee2e2', padding: '2px 6px', borderRadius: '4px' }}>
                        HOTLINE 24/7
                      </span>
                    </div>

                    {/* Mockup Hero Banner Box */}
                    <div
                      style={{
                        backgroundColor: '#e8f5ed',
                        border: '1px solid #86efac',
                        borderRadius: '10px',
                        padding: '12px 10px',
                        textAlign: 'center'
                      }}
                    >
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#0d7647', backgroundColor: '#ffffff', padding: '2px 8px', borderRadius: '9999px', display: 'inline-block', marginBottom: '4px' }}>
                        ƯU ĐÃI KHAI TRƯƠNG
                      </span>
                      <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.3 }}>
                        Giảm 30% Dịch Vụ Cho 50 Khách Đầu Tiên
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: '4px' }}>
                        Bảng giá rõ ràng • Bảo hành uy tín
                      </div>
                    </div>

                    {/* Mockup Product Grid Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 6px', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2rem', marginBottom: '2px' }}>⭐</div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Gói Cơ Bản</div>
                        <div style={{ fontSize: '0.7rem', color: '#0d7647', fontWeight: 700 }}>490.000đ</div>
                      </div>
                      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 6px', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2rem', marginBottom: '2px' }}>💎</div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Gói Cao Cấp</div>
                        <div style={{ fontSize: '0.7rem', color: '#0d7647', fontWeight: 700 }}>990.000đ</div>
                      </div>
                    </div>

                    {/* Mockup Form Section */}
                    <div style={{ backgroundColor: '#f1f5f9', borderRadius: '8px', padding: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                        Nhận Báo Giá Sau 5 Phút:
                      </div>
                      <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', height: '22px', marginBottom: '4px', padding: '2px 6px', fontSize: '0.65rem', color: '#94a3b8', display: 'flex', alignItems: 'center' }}>
                        Họ tên của bạn...
                      </div>
                      <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', height: '22px', marginBottom: '6px', padding: '2px 6px', fontSize: '0.65rem', color: '#94a3b8', display: 'flex', alignItems: 'center' }}>
                        Số điện thoại / Zalo...
                      </div>
                      <div style={{ backgroundColor: '#0d7647', color: '#ffffff', borderRadius: '4px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                        GỬI YÊU CẦU NGAY
                      </div>
                    </div>

                    {/* Mockup Sticky Call Bar */}
                    <div
                      style={{
                        display: 'flex',
                        gap: '4px',
                        padding: '6px',
                        backgroundColor: '#ffffff',
                        border: '1.5px solid #0d7647',
                        borderRadius: '8px'
                      }}
                    >
                      <div style={{ flex: 1, backgroundColor: '#dc2626', color: '#fff', borderRadius: '4px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800, gap: '4px' }}>
                        <PhoneCall size={11} /> Gọi Ngay
                      </div>
                      <div style={{ flex: 1, backgroundColor: '#0284c7', color: '#fff', borderRadius: '4px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800, gap: '4px' }}>
                        <MessageSquare size={11} /> Chat Zalo
                      </div>
                    </div>
                  </div>

                  {/* Phone Bottom Footer Indicator */}
                  <div style={{ backgroundColor: '#f8fafc', padding: '6px', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
                    <div style={{ width: '70px', height: '3px', backgroundColor: '#94a3b8', borderRadius: '2px', margin: '0 auto' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 2: WHY TRACKING ==================== */}
      <section style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <SectionHeader
            eyebrow="ĐO LƯỜNG HIỆU QUẢ THỰC TẾ"
            title="Tracking để làm gì? Vì sao trang 490k phải có đo lường?"
            subtitle="Hiểu đơn giản: LocalMate giúp bạn biết chính xác khách vào trang làm những gì để không phí hoài ngân sách quảng cáo."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Live Analytics Dashboard Simulator (Thay thế hoàn toàn ảnh PNG cũ) */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '2px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
              }}
            >
              {/* Dashboard Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#16a34a', boxShadow: '0 0 0 3px rgba(22,163,74,0.2)' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>BẢNG ĐO LƯỜNG GA4 REALTIME</span>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0d7647', backgroundColor: '#e8f5ed', padding: '2px 8px', borderRadius: '4px' }}>
                  Live 24h
                </span>
              </div>

              {/* 4 Conversion Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Khách xem trang</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>1,280</div>
                  <div style={{ fontSize: '0.7rem', color: '#16a34a', fontWeight: 700 }}>+100% từ Google/Meta Ads</div>
                </div>

                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Bấm nút Gọi Hotline</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#dc2626' }}>86 <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>(6.7%)</span></div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Khách có nhu cầu gấp</div>
                </div>

                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Bấm mở Chat Zalo</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0284c7' }}>142 <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>(11.1%)</span></div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Nhận tư vấn trực tiếp</div>
                </div>

                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Gửi Form thành công</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0d7647' }}>53 <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>(4.1%)</span></div>
                  <div style={{ fontSize: '0.7rem', color: '#16a34a', fontWeight: 700 }}>Lead chất lượng cao</div>
                </div>
              </div>

              {/* Conversion Funnel Mini Bar */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                  <span>Tỷ lệ chuyển đổi ra khách liên hệ:</span>
                  <strong style={{ color: '#0d7647' }}>21.9% (Tổng 281 liên hệ)</strong>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '22%', height: '100%', backgroundColor: '#0d7647', borderRadius: '4px' }} />
                </div>
              </div>
            </div>

            {/* Tracking List Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {trackingFeatures.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: item.colorBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaway */}
          <div
            style={{
              marginTop: '2rem',
              backgroundColor: '#e8f5ed',
              border: '1.5px solid #86efac',
              borderRadius: '12px',
              padding: '1.25rem 1.75rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}
          >
            <span style={{ fontSize: '1.75rem' }}>💡</span>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0d7647', margin: '0 0 4px 0' }}>
                Nhờ tracking chuẩn, AI của Google Ads &amp; Meta Ads tự động tìm đúng khách mua
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#166534', margin: 0, lineHeight: 1.5 }}>
                Khi máy học quảng cáo biết chính xác chân dung người đã bấm gọi Hotline hoặc gửi form, hệ thống sẽ tự động dồn ngân sách vào tệp người tương tự, giúp bạn giảm 50% chi phí tìm khách.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 3: 4 MẪU LANDING PAGE THEO NGÀNH (MỚI) ==================== */}
      <section style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <SectionHeader
            eyebrow="MẪU GIAO DIỆN THỰC CHIẾN"
            title="Chọn Mẫu Landing Page Phù Hợp Với Ngành Của Bạn"
            subtitle="Xem trước cấu trúc 3 section được tối ưu sẵn cho từng lĩnh vực kinh doanh cụ thể."
          />

          {/* Industry Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '2rem'
            }}
          >
            {industryDemos.map((demo) => (
              <button
                key={demo.id}
                type="button"
                onClick={() => setSelectedIndustryDemo(demo.id as any)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  border: `1.5px solid ${selectedIndustryDemo === demo.id ? '#0d7647' : '#cbd5e1'}`,
                  backgroundColor: selectedIndustryDemo === demo.id ? '#0d7647' : '#ffffff',
                  color: selectedIndustryDemo === demo.id ? '#ffffff' : '#0f172a',
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  boxShadow: selectedIndustryDemo === demo.id ? '0 4px 10px rgba(13,118,71,0.2)' : 'none'
                }}
              >
                {demo.icon}
                <span>{demo.name}</span>
              </button>
            ))}
          </div>

          {/* Active Demo Preview Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid #0d7647',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              maxWidth: '850px',
              margin: '0 auto',
              boxShadow: '0 10px 25px -5px rgba(13, 118, 71, 0.08)'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', backgroundColor: '#e8f5ed', padding: '2px 8px', borderRadius: '4px' }}>
                  GỢI Ý PHÙ HỢP: {currentDemoData.callout}
                </span>
                <h3 style={{ margin: '0.5rem 0 0 0', fontSize: '1.35rem', fontWeight: 900, color: '#0f172a' }}>
                  {currentDemoData.headline}
                </h3>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToForm(currentDemoData.name)}
              >
                Chọn Mẫu Này (490k)
              </Button>
            </div>

            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>
              {currentDemoData.subtext}
            </p>

            {/* 3 Sections Wireframe Breakdown */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase' }}>Section 1: Hero</div>
                <div style={{ fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>Tiêu Đề &amp; Ưu Đãi Nóng</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Hình ảnh thực tế cơ sở, lời hứa hẹn cốt lõi và nút gọi/đặt hẹn ngay lập tức.</div>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase' }}>Section 2: Sản Phẩm</div>
                <div style={{ fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>Bảng Giá &amp; Điểm Mạnh</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Liệt kê dịch vụ nổi bật, giá niêm yết minh bạch và cam kết chất lượng.</div>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase' }}>Section 3: Liên Hệ</div>
                <div style={{ fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>Form Thu Lead &amp; Maps</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Form điền SĐT nhanh gọn, bản đồ chỉ đường Google Maps và nút chat Zalo.</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 4: PACKAGE INCLUDES ==================== */}
      <section style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <SectionHeader
            eyebrow="PHẠM VI CÔNG VIỆC TRỌN GÓI"
            title="490.000đ Bao Gồm Những Gì?"
            subtitle="Một mức giá minh bạch, không phí ẩn, đầy đủ hạ tầng kỹ thuật chuẩn chỉnh để bạn an tâm chạy quảng cáo."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left: 10 Inclusions Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '12px'
              }}
            >
              {inclusions.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}
                >
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Digital Handover Blueprint (Thay thế ảnh package-includes.png cũ) */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #0d7647',
                borderRadius: '16px',
                padding: '1.75rem',
                boxShadow: '0 4px 20px rgba(13, 118, 71, 0.08)'
              }}
            >
              <div style={{ textAlign: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647', textTransform: 'uppercase', backgroundColor: '#e8f5ed', padding: '2px 8px', borderRadius: '4px' }}>
                  CAM KẾT BÀN GIAO 100%
                </span>
                <h3 style={{ margin: '0.5rem 0 0.25rem 0', fontSize: '1.35rem', fontWeight: 900, color: '#0f172a' }}>
                  Hồ Sơ Bàn Giao Tài Sản Số
                </h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
                  Khách hàng nắm giữ 100% tài khoản chính chủ, không giữ pass.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>1. Trang Landing Page Chuẩn Di Động</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647' }}>Đạt chuẩn &lt;1s</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>2. Tài Khoản Google Tag Manager (GTM)</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647' }}>Bàn giao Admin</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>3. Luồng Dữ Liệu Google Analytics 4 (GA4)</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647' }}>Bàn giao Admin</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>4. Cài Đặt Tracking Click Call / Zalo / Form</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647' }}>Đã test chạy thật</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>5. Chứng Chỉ Bảo Mật SSL HTTPS</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647' }}>Miễn phí trọn đời</span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <Button variant="primary" size="lg" onClick={() => scrollToForm()} style={{ width: '100%' }}>
                  Bắt Đầu Làm Landing Page (490k) ➔
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 5: REQUIREMENTS & ORDER FORM ==================== */}
      <section id="order-form-section" style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: '#e8f5ed', borderBottom: '1px solid #86efac' }}>
        <Container size="lg">
          <SectionHeader
            eyebrow="CHUẨN BỊ ĐƠN GIẢN"
            title="Bạn Cần Gửi Gì Cho LocalMate?"
            subtitle="Chỉ cần gửi những thông tin cơ bản dưới đây, đội ngũ kỹ thuật LocalMate sẽ lo trọn gói phần còn lại!"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'start'
            }}
          >
            {/* Left: 6 Items Checklist */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                📋 6 Thông tin bạn gửi qua Zalo:
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: '1. Tên sản phẩm hoặc dịch vụ kinh doanh', req: true },
                  { name: '2. Hình ảnh thực tế (chụp từ điện thoại)', req: true },
                  { name: '3. Điểm mạnh hoặc ưu đãi đặc biệt', req: true },
                  { name: '4. Bảng giá hoặc khuyến mãi áp dụng', req: false },
                  { name: '5. Hotline nghe máy và số Zalo tư vấn', req: true },
                  { name: '6. Tên miền riêng (nếu bạn đã mua sẵn)', req: false }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: '#1e293b'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} color="#0d7647" />
                      {item.name}
                    </span>
                    {!item.req ? (
                      <span style={{ fontSize: '0.75rem', backgroundColor: '#e2e8f0', color: '#475569', padding: '2px 8px', borderRadius: '9999px' }}>
                        Tùy chọn
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.75rem', backgroundColor: '#e8f5ed', color: '#0d7647', padding: '2px 8px', borderRadius: '9999px' }}>
                        Cần thiết
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* 3 Steps Structure */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px dashed #cbd5e1' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', textAlign: 'center' }}>
                  🌿 Cấu trúc 3 Section tinh gọn:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '8px 4px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647' }}>01</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>Giới thiệu</div>
                  </div>
                  <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '8px 4px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647' }}>02</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>Sản phẩm</div>
                  </div>
                  <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '8px 4px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d7647' }}>03</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>Liên hệ</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Registration Form */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2.5px solid #0d7647',
                borderRadius: '16px',
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                boxShadow: '0 10px 25px -5px rgba(13, 118, 71, 0.15)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  backgroundColor: '#e8f5ed',
                  color: '#0d7647',
                  border: '1px solid #86efac',
                  padding: '4px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  display: 'inline-block',
                  marginBottom: '0.75rem'
                }}
              >
                GÓI LANDING PAGE QUẢNG CÁO 24H
              </div>

              <div style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', fontWeight: 900, color: '#0d7647', lineHeight: 1 }}>
                490.000đ <span style={{ fontSize: '1rem', fontWeight: 600, color: '#64748b' }}>/ trọn gói</span>
              </div>

              <form onSubmit={handleFormSubmit} style={{ marginTop: '1.25rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <label htmlFor="reg-name" style={{ fontSize: '0.825rem', fontWeight: 700, color: '#1e293b' }}>Họ và tên của bạn: *</label>
                  <input
                    id="reg-name"
                    type="text"
                    required
                    placeholder="Ví dụ: Anh Tuấn, Chị Lan..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', marginTop: '4px', boxSizing: 'border-box', outline: 'none' }}
                  />
                </div>

                <div>
                  <label htmlFor="reg-phone" style={{ fontSize: '0.825rem', fontWeight: 700, color: '#1e293b' }}>Số điện thoại / Zalo nhận demo: *</label>
                  <input
                    id="reg-phone"
                    type="tel"
                    required
                    placeholder="Ví dụ: 0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', marginTop: '4px', boxSizing: 'border-box', outline: 'none' }}
                  />
                </div>

                <div>
                  <label htmlFor="reg-service" style={{ fontSize: '0.825rem', fontWeight: 700, color: '#1e293b' }}>Sản phẩm / Ngành nghề cần làm:</label>
                  <input
                    id="reg-service"
                    type="text"
                    placeholder="Ví dụ: Nhôm kính, Spa, Quán ăn, Nha khoa..."
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', marginTop: '4px', boxSizing: 'border-box', outline: 'none' }}
                  />
                </div>

                <div>
                  <label htmlFor="reg-notes" style={{ fontSize: '0.825rem', fontWeight: 700, color: '#1e293b' }}>Ghi chú thêm (Link Fanpage hoặc yêu cầu):</label>
                  <textarea
                    id="reg-notes"
                    placeholder="Nhập thêm link Fanpage hoặc các ghi chú đặc biệt..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', marginTop: '4px', minHeight: '60px', boxSizing: 'border-box', outline: 'none' }}
                  />
                </div>

                <Button variant="primary" size="lg" type="submit" style={{ width: '100%', marginTop: '6px', fontWeight: 800 }}>
                  <Send size={18} /> Đăng Ký Gói 490K – Bàn Giao 24h
                </Button>

                <a
                  href={`${CONTACT_INFO.zaloUrl}?text=${encodeURIComponent('Chào LocalMate, tôi muốn đăng ký làm Landing Page 490k cho quán của tôi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '10px',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #0d7647',
                    borderRadius: '8px',
                    color: '#0d7647',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    marginTop: '4px'
                  }}
                >
                  <MessageSquare size={16} color="#0d7647" />
                  <span>Nhắn Tin Trực Tiếp Qua Zalo</span>
                </a>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 6: FAQ ==================== */}
      <section style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: '#ffffff' }}>
        <Container size="md">
          <SectionHeader
            eyebrow="GIẢI ĐÁP THẮC MẮC"
            title="Câu Hỏi Thường Gặp Về Gói 490K"
            subtitle="Những thông tin minh bạch bạn cần biết trước khi bắt đầu làm landing page với LocalMate."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    textAlign: 'left',
                    backgroundColor: activeFaq === idx ? '#e8f5ed' : '#ffffff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#0f172a'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    color="#0d7647"
                    style={{
                      transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '16px 20px', fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
};

export default Landing490kPage;
