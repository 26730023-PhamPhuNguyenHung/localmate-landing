import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { COMPANY_DATA } from '../data/company';
import { useRouter, Link } from '../components/layout/Router';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Clock,
  ExternalLink,
  Star,
  Check,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  Award,
  HelpCircle,
  Globe,
  Gauge,
  Users,
  Calendar,
  Lock,
  MessageCircle,
  Laptop,
  Smartphone,
  Copy,
  Server,
  FileCheck
} from 'lucide-react';

interface WebDesignPillarPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const WebDesignPillarPage: React.FC<WebDesignPillarPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  // Pillar 1 Data from SSOT
  const webPillar = COMPANY_DATA.pillars.find((p) => p.slug === 'thiet-ke-website') || COMPANY_DATA.pillars[0];
  const { offers } = webPillar;
  const { entity, guarantees, caseStudies } = COMPANY_DATA;

  // Filter case studies related to Web Design (xeo-restaurant & nam-phat)
  const webCaseStudies = caseStudies.filter(
    (cs) => cs.slug === 'xeo-restaurant' || cs.slug === 'nam-phat'
  );

  const breadcrumbs = [
    { name: 'Trang chủ', url: '/' },
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: 'Thiết Kế Website Tốc Độ Cao', url: '/thiet-ke-website' }
  ];

  const handleCTA = (packageName?: string) => {
    const selected = packageName || 'Tư vấn Thiết kế Website Tốc Độ Cao';
    if (onOpenConsultForm) {
      onOpenConsultForm(selected);
    } else {
      navigate('/lien-he');
    }
  };

  const answerFirstText =
    'Tại LocalMate, chi phí thiết kế website 1 trang (Landing Page) cho hộ kinh doanh trọn gói là 490.000đ, hoàn thành trong 24–48 giờ với cam kết bàn giao duyệt ưng ý mới thanh toán. Gói này bao gồm giao diện di động chuẩn tốc độ dưới 1 giây, nút gọi Hotline/Zalo 1-chạm, bản đồ Google Maps và toàn quyền sở hữu mã nguồn vĩnh viễn, không phí duy trì hàng tháng.';

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(answerFirstText);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const faqs = [
    {
      q: 'Cam kết "Bàn giao mới thanh toán" hoạt động cụ thể như thế nào?',
      a: 'Bạn chỉ cần gửi nội dung, hình ảnh và yêu cầu dịch vụ. Đội ngũ LocalMate sẽ trực tiếp dựng demo hoàn chỉnh trên tên miền chạy thử trong vòng 24–48 giờ. Bạn được kiểm tra trực tiếp trên điện thoại: mở thử xem tốc độ có nhanh không, bấm nút gọi Zalo có đổ chuông không, nội dung đã chuẩn chưa. Khi bạn hoàn toàn ưng ý và ký biên bản nghiệm thu trực tuyến, bạn mới thanh toán đúng số tiền niêm yết. Tuyệt đối không yêu cầu cọc trước.'
    },
    {
      q: 'Làm website tại LocalMate sau này có tốn phí duy trì hàng tháng không?',
      a: 'Hoàn toàn KHÔNG. LocalMate triển khai hạ tầng hiện đại trên Cloudflare Edge Network với chi phí hosting 0đ trọn đời cho các website giới thiệu và landing page thông thường. Bạn chỉ cần duy trì tên miền quốc tế (.com/.vn) nếu dùng tên miền riêng, không phải trả bất kỳ khoản phí "thuê hosting" hay "phí bảo trì bắt buộc" hàng tháng nào.'
    },
    {
      q: 'Gói 490.000đ khác gì so với gói Doanh Nghiệp 2.900.000đ?',
      a: 'Gói 490.000đ là Landing Page 1 trang chuyên sâu, tối ưu cho hộ kinh doanh, quán ăn, xưởng mộc, thợ dịch vụ cần giới thiệu nhanh bảng giá và nút gọi Zalo chốt đơn ngay. Gói 2.900.000đ là Website đa trang (5-10 trang) dành cho công ty SME, tích hợp thư viện dự án công trình, hệ thống bài viết chuẩn SEO, Schema thực thể LocalBusiness và kết nối đồng bộ Google Maps.'
    },
    {
      q: 'Tôi không rành công nghệ, sau này muốn đổi giá, ảnh hoặc địa chỉ thì làm sao?',
      a: 'Bạn chỉ cần nhắn tin vào nhóm Zalo hỗ trợ 1-1 của LocalMate. Đội ngũ kỹ thuật sẽ thay đổi nội dung, banner, ảnh sản phẩm hoặc cập nhật bảng giá giúp bạn trong vòng 15–30 phút hoàn toàn miễn phí trong suốt thời gian bảo hành.'
    },
    {
      q: 'Tại sao LocalMate cam kết tốc độ tải trang dưới 1 giây (PageSpeed 90+)?',
      a: 'Hơn 85% khách hàng tra cứu dịch vụ trên điện thoại di động qua sóng 4G. Nếu web mất hơn 3 giây để mở, hơn 53% người dùng sẽ thoát trang và gọi cho đối thủ. LocalMate sử dụng công nghệ Vite React tĩnh hóa (Static Jamstack) phân phối qua 300+ máy chủ biên Cloudflare toàn cầu, loại bỏ hoàn toàn mã nguồn nặng nề của WordPress truyền thống.'
    },
    {
      q: 'Sau khi hoàn thành, tôi có được bàn giao toàn bộ mã nguồn và tài khoản không?',
      a: 'Có, 100%. Toàn bộ mã nguồn, tài khoản quản lý Cloudflare, tài khoản tên miền đều được kích hoạt bằng chính email cá nhân của bạn. Bạn nắm chìa khóa gốc của toàn bộ tài sản số, không sợ bị phụ thuộc hay bị ép gia hạn sau này.'
    }
  ];

  // Schema for FAQ & Service
  const faqSchema = {
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div style={{ backgroundColor: '#fcfdfd', color: '#0f172a', paddingBottom: '5rem' }}>
      <SEOHead
        title="Dịch Vụ Thiết Kế Website Chuẩn Tốc Độ Cao Cho Hộ Kinh Doanh & SME"
        description="Thiết kế website 1 trang (490k) và website doanh nghiệp (2.900k) tải dưới 1 giây, chuẩn di động, tối ưu SEO & GEO. Bàn giao duyệt mới thanh toán, sở hữu 100% tài sản số."
        canonicalPath="/thiet-ke-website"
        breadcrumbs={breadcrumbs}
        schemaType="FAQPage"
        schemaData={faqSchema}
      />

      {/* Breadcrumbs */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '0.75rem 0' }}>
        <Container size="lg">
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      {/* 1. HERO SECTION */}
      <section style={{ backgroundColor: '#ffffff', padding: '3.5rem 0 3rem 0', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            {/* Guarantee Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#ecfdf5',
                color: '#065f46',
                border: '1px solid #a7f3d0',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                marginBottom: '1.25rem'
              }}
            >
              <ShieldCheck className="w-4 h-4 text-[#0d7647]" />
              <span>CAM KẾT: BÀN GIAO DUYỆT ƯNG Ý 100% MỚI THANH TOÁN</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#0f172a',
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
                textWrap: 'pretty'
              }}
            >
              Thiết Kế Website Tốc Độ Cao Cho Hộ Kinh Doanh & SME
            </h1>

            {/* Tagline / Subheadline */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '780px',
                margin: '0 auto 2rem auto',
                textWrap: 'pretty'
              }}
            >
              Website mở dưới 1 giây trên sóng 4G, chuẩn giao diện di động, tích hợp nút gọi Zalo 1-chạm và bản đồ chỉ đường. Khách duyệt ưng ý thực tế mới thanh toán, không phí ẩn hàng tháng.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem'
              }}
            >
              <a
                href={entity.contact.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  boxShadow: '0 2px 4px rgba(13, 118, 71, 0.2)'
                }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Tư vấn Zalo 1-1 ({entity.contact.hotlineDisplay})</span>
              </a>

              <Button
                variant="outline"
                size="lg"
                onClick={() => handleCTA('Đăng ký xem trước Demo Web 0đ')}
                style={{
                  borderColor: '#cbd5e1',
                  color: '#0f172a',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '0.85rem 1.5rem'
                }}
              >
                <span>Nhận bản thiết kế thử 0đ</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* 4 Value Props Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                textAlign: 'left',
                paddingTop: '1.5rem',
                borderTop: '1px solid #f1f5f9'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Zap className="w-5 h-5 text-[#0d7647] flex-shrink-0 mt-0.5" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#0f172a' }}>Tốc độ mở dưới 1s</div>
                  <div style={{ fontSize: '0.825rem', color: '#64748b' }}>Cloudflare Edge 300+ PoPs</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Lock className="w-5 h-5 text-[#0d7647] flex-shrink-0 mt-0.5" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#0f172a' }}>Sở hữu 100% tài sản</div>
                  <div style={{ fontSize: '0.825rem', color: '#64748b' }}>Tên miền & mã nguồn chính chủ</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <ShieldCheck className="w-5 h-5 text-[#0d7647] flex-shrink-0 mt-0.5" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#0f172a' }}>0đ rủi ro thanh toán</div>
                  <div style={{ fontSize: '0.825rem', color: '#64748b' }}>Nghiệm thu hài lòng mới trả tiền</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Server className="w-5 h-5 text-[#0d7647] flex-shrink-0 mt-0.5" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#0f172a' }}>Không phí duy trì tháng</div>
                  <div style={{ fontSize: '0.825rem', color: '#64748b' }}>Miễn phí hosting CDN trọn đời</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. ANSWER-FIRST BLOCK (GEO / AEO SNIPPET) */}
      <section style={{ padding: '2.5rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid #10b981',
              borderRadius: '1rem',
              padding: '1.75rem 2rem',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.08)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '0.25rem'
                  }}
                >
                  Answer-First • Trả Lời Trực Tiếp AI
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>
                  Chuẩn trích dẫn ChatGPT Search, Gemini & Google AI
                </span>
              </div>
              <button
                onClick={handleCopySnippet}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: '#f1f5f9',
                  border: '1px solid #cbd5e1',
                  color: '#334155',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                title="Sao chép đoạn trích dẫn trả lời nhanh"
              >
                {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSnippet ? 'Đã sao chép' : 'Sao chép đoạn trả lời'}</span>
              </button>
            </div>

            {/* Question title */}
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#0f172a',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <HelpCircle className="w-5 h-5 text-[#0d7647] flex-shrink-0" />
              <span>Làm website 1 trang cho hộ kinh doanh giá bao nhiêu?</span>
            </h2>

            {/* 50-80 words answer paragraph */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#1e293b',
                fontWeight: 500,
                backgroundColor: '#f0fdf4',
                padding: '1rem 1.25rem',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #0d7647',
                marginBottom: '0.75rem',
                textWrap: 'pretty'
              }}
            >
              {answerFirstText}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.825rem', color: '#64748b' }}>
              <span>• <strong>Mức giá niêm yết:</strong> 490.000 VNĐ (trọn gói)</span>
              <span>• <strong>Thời gian:</strong> 24–48 giờ</span>
              <span>• <strong>Điều kiện thanh toán:</strong> Bàn giao nghiệm thu hài lòng mới trả</span>
              <span>• <strong>Chi phí định kỳ:</strong> 0đ / tháng</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. BẢNG TÓM TẮT THÔNG TIN RÕ RÀNG (8 TIÊU CHÍ) */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0d7647',
                marginBottom: '0.5rem'
              }}
            >
              Minh Bạch Tiêu Chuẩn & Thông Tin Dịch Vụ
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>
              Bảng Tóm Tắt Thông Tin Dịch Vụ Thiết Kế Website
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
              Toàn bộ các thông số kỹ thuật, quyền lợi sở hữu và cam kết tài chính được công khai rõ ràng.
            </p>
          </div>

          <div
            style={{
              overflowX: 'auto',
              backgroundColor: '#ffffff',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '760px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #cbd5e1' }}>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#0f172a', width: '22%' }}>Tiêu chí</th>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#0d7647', width: '39%' }}>
                    Gói Landing Page 1 Trang Khởi Tạo
                  </th>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1d4ed8', width: '39%' }}>
                    Gói Website Doanh Nghiệp Đa Trang
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '0.95rem' }}>
                {/* 1. Bảng giá */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    1. Bảng giá trọn gói
                  </td>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 800, color: '#0d7647', fontSize: '1.1rem' }}>
                    490.000 VNĐ
                  </td>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 800, color: '#1d4ed8', fontSize: '1.1rem' }}>
                    2.900.000 VNĐ
                  </td>
                </tr>

                {/* 2. Đối tượng phù hợp */}
                <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#fcfdfd' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    2. Đối tượng phù hợp
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    Hộ kinh doanh cá thể, quán ăn, quán cafe, thợ sửa chữa, cá nhân làm nghề tự do cần trang giới thiệu nhanh.
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    Doanh nghiệp SME, phòng khám, công ty tư vấn, xưởng sản xuất, showroom cần xây dựng thương hiệu uy tín.
                  </td>
                </tr>

                {/* 3. Hạng mục bàn giao */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    3. Hạng mục bàn giao
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6 }}>
                      <li>01 trang giao diện di động chuẩn tốc độ dưới 1s</li>
                      <li>Nút gọi Hotline & Zalo 1-chạm cố định</li>
                      <li>Bản đồ Google Maps & form nhận yêu cầu</li>
                      <li>Mã nguồn tĩnh Jamstack tối ưu Core Web Vitals</li>
                    </ul>
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6 }}>
                      <li>Website đa trang (Trang chủ, Giới thiệu, Dịch vụ, Dự án, Báo giá, Liên hệ)</li>
                      <li>Cấu trúc Schema LocalBusiness JSON-LD chuyên sâu</li>
                      <li>Thư viện công trình thực tế có bộ lọc</li>
                      <li>Đồng bộ kết nối Google Maps, Analytics & Fanpage</li>
                    </ul>
                  </td>
                </tr>

                {/* 4. Thời gian triển khai */}
                <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#fcfdfd' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    4. Thời gian triển khai
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#0d7647', fontWeight: 700 }}>
                    24 – 48 giờ làm việc
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#1d4ed8', fontWeight: 700 }}>
                    3 – 7 ngày làm việc
                  </td>
                </tr>

                {/* 5. Chi phí duy trì */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    5. Chi phí duy trì
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#16a34a', fontWeight: 700 }}>
                    0đ / tháng (Hosting Cloudflare Edge miễn phí trọn đời)
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#16a34a', fontWeight: 700 }}>
                    0đ / tháng (Chỉ gia hạn tên miền theo giá gốc nhà đăng ký)
                  </td>
                </tr>

                {/* 6. Quyền sở hữu */}
                <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#fcfdfd' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    6. Quyền sở hữu
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#0f172a', fontWeight: 600 }}>
                    Khách hàng sở hữu 100% mã nguồn và tài khoản tên miền
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#0f172a', fontWeight: 600 }}>
                    Khách hàng sở hữu 100% mã nguồn, hạ tầng Cloudflare và dữ liệu
                  </td>
                </tr>

                {/* 7. Bảo hành */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    7. Bảo hành & Hỗ trợ
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    Bảo hành kỹ thuật 12 tháng, hỗ trợ cập nhật nội dung 1-1 qua Zalo
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    Bảo hành hạ tầng kỹ thuật 5 năm, xử lý sự cố trong 15–30 phút
                  </td>
                </tr>

                {/* 8. Ngày cập nhật */}
                <tr style={{ backgroundColor: '#f8fafc' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    8. Ngày cập nhật
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#64748b' }}>
                    14/09/2026 (Biểu phí niêm yết chính thức)
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#64748b' }}>
                    14/09/2026 (Biểu phí niêm yết chính thức)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 4. CHI TIẾT CÁC GÓI CƯỚC & QUY TRÌNH 4 BƯỚC */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0d7647',
                marginBottom: '0.5rem'
              }}
            >
              Gói Dịch Vụ Minh Bạch
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>
              Chi Tiết 2 Gói Thiết Kế Website Chuyên Nghiệp
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
              Không phát sinh phụ phí ẩn, không ép cọc, nghiệm thu ưng ý mới chuyển tiền.
            </p>
          </div>

          {/* 2 Packages Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              marginBottom: '4.5rem'
            }}
          >
            {offers.map((offer, idx) => {
              const isPopular = offer.id === 'web-landing-490k';
              return (
                <div
                  key={offer.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '1rem',
                    border: isPopular ? '2px solid #0d7647' : '1px solid #e2e8f0',
                    boxShadow: isPopular ? '0 8px 24px rgba(13, 118, 71, 0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                    padding: '2rem',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {isPopular && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#0d7647',
                        color: '#ffffff',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '0.25rem 1rem',
                        borderRadius: '9999px',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}
                    >
                      Phổ biến cho hộ kinh doanh
                    </div>
                  )}

                  <div style={{ marginBottom: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                      {offer.name}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, minHeight: '42px' }}>
                      {offer.shortDesc}
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                      <span style={{ fontSize: '2.25rem', fontWeight: 800, color: isPopular ? '#0d7647' : '#1d4ed8' }}>
                        {offer.priceFormatted}
                      </span>
                      <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                        / {offer.billingType === 'one-time' ? 'trọn gói 1 lần' : 'tháng'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569' }}>
                      <Clock className="w-4 h-4 text-[#0d7647]" />
                      <span>Thời gian hoàn thiện: <strong>{offer.timeline}</strong></span>
                    </div>
                  </div>

                  {/* Target audience */}
                  <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '0.5rem', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                    <strong style={{ color: '#0f172a' }}>Phù hợp cho:</strong>
                    <div style={{ color: '#475569', marginTop: '0.2rem' }}>{offer.targetAudience}</div>
                  </div>

                  {/* Deliverables list */}
                  <div style={{ flex: 1, marginBottom: '2rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a', marginBottom: '0.75rem' }}>
                      Hạng mục bàn giao chi tiết:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {offer.deliverables.map((item, dIdx) => (
                        <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#334155' }}>
                          <CheckCircle2 className="w-4 h-4 text-[#0d7647] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Guarantee info */}
                  <div style={{ padding: '0.75rem 1rem', backgroundColor: '#ecfdf5', borderRadius: '0.5rem', marginBottom: '1.5rem', fontSize: '0.825rem', color: '#065f46' }}>
                    <div style={{ fontWeight: 700 }}>Cam kết bàn giao:</div>
                    <div>{offer.ownership} • {offer.support}</div>
                  </div>

                  {/* Button */}
                  <Button
                    variant={isPopular ? 'primary' : 'outline'}
                    size="lg"
                    style={{ width: '100%', fontWeight: 700 }}
                    onClick={() => handleCTA(`Đăng ký gói ${offer.name} (${offer.priceFormatted})`)}
                  >
                    <span>Chọn gói này (Nghiệm thu mới trả)</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>

          {/* QUY TRÌNH 4 BƯỚC THỰC CHIẾN */}
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#0d7647',
                  marginBottom: '0.5rem'
                }}
              >
                Minh Bạch Từng Bước
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>
                Quy Trình 4 Bước Triển Khai — Bàn Giao Mới Thanh Toán
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#ecfdf5', color: '#0d7647', fontWeight: 800, fontSize: '1rem', padding: '0.25rem 0.65rem', borderRadius: '0.375rem', marginBottom: '0.75rem' }}>
                  Bước 01
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Tiếp nhận & Khảo sát 0đ
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                  Bạn gửi hình ảnh cửa hàng, thông tin dịch vụ, bảng giá qua Zalo. Không cần đặt cọc hay trả trước bất kỳ chi phí nào.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#ecfdf5', color: '#0d7647', fontWeight: 800, fontSize: '1rem', padding: '0.25rem 0.65rem', borderRadius: '0.375rem', marginBottom: '0.75rem' }}>
                  Bước 02
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Dựng Demo Trong 24h–48h
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                  Kỹ thuật viên LocalMate lập trình và đưa trang web lên link chạy thử thực tế. Tối ưu tốc độ di động dưới 1 giây.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #0d7647' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#0d7647', color: '#ffffff', fontWeight: 800, fontSize: '1rem', padding: '0.25rem 0.65rem', borderRadius: '0.375rem', marginBottom: '0.75rem' }}>
                  Bước 03
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Nghiệm thu rồi mới thanh toán
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                  Bạn mở web trên điện thoại, duyệt từng nút bấm, kiểm tra tốc độ. <strong>Chỉ chuyển khoản khi hoàn toàn hài lòng 100%.</strong>
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#ecfdf5', color: '#0d7647', fontWeight: 800, fontSize: '1rem', padding: '0.25rem 0.65rem', borderRadius: '0.375rem', marginBottom: '0.75rem' }}>
                  Bước 04
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Bàn giao quyền & Bảo hành 5 năm
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                  Chuyển quyền quản trị mã nguồn, liên kết tên miền chính chủ. Kỹ thuật viên đồng hành hỗ trợ thay đổi nội dung qua Zalo.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. CASE STUDIES LIÊN QUAN (DẪN LINK SANG /du-an/...) */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <Container size="lg">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0d7647',
                marginBottom: '0.5rem'
              }}
            >
              Hiệu Quả Thực Tế Đã Kiểm Chứng
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>
              Dự Án Website Thực Tế & Đo Lường Tốc Độ
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
              Xem chi tiết cách các hộ kinh doanh và xưởng sản xuất đón nhận khách hàng mới nhờ website tải dưới 1 giây.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {webCaseStudies.map((cs) => (
              <div
                key={cs.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7647', backgroundColor: '#ecfdf5', padding: '0.25rem 0.65rem', borderRadius: '9999px' }}>
                      {cs.industry} • {cs.location}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0d7647' }}>
                      PageSpeed {cs.metrics.pageSpeedMobile}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {cs.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    <strong>Vấn đề trước đây:</strong> {cs.problemBefore}
                  </p>

                  <p style={{ fontSize: '0.9rem', color: '#0d7647', lineHeight: 1.6, marginBottom: '1.5rem', backgroundColor: '#f0fdf4', padding: '0.75rem 1rem', borderRadius: '0.5rem' }}>
                    <strong>Giải pháp LocalMate:</strong> {cs.solution}
                  </p>

                  {/* 3 Key Metrics */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '0.5rem',
                      textAlign: 'center',
                      padding: '0.75rem 0',
                      borderTop: '1px solid #f1f5f9',
                      borderBottom: '1px solid #f1f5f9',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0d7647' }}>{cs.metrics.lighthouseScore}/100</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Lighthouse</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>{cs.metrics.pageSpeedMobile}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Tải trang 4G</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1d4ed8' }}>{cs.metrics.pageWeight}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Dung lượng nhẹ</div>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div style={{ fontStyle: 'italic', fontSize: '0.875rem', color: '#475569', marginBottom: '1.5rem', borderLeft: '3px solid #cbd5e1', paddingLeft: '0.75rem' }}>
                    "{cs.testimonial.quote}" — <strong>{cs.testimonial.author}</strong>, {cs.testimonial.role}
                  </div>
                </div>

                {/* Link to detail */}
                <Link
                  to={cs.canonicalPath}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#f8fafc',
                    color: '#0d7647',
                    fontWeight: 700,
                    fontSize: '0.925rem',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <span>Xem chi tiết câu chuyện dự án</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link
              to="/du-an"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#0d7647',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none'
              }}
            >
              <span>Xem toàn bộ thư viện kịch bản & dự án thực tế</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 6. FAQ CHI TIẾT & CTA CUỐI TRANG */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <Container size="lg">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#0d7647',
                  marginBottom: '0.5rem'
                }}
              >
                Giải Đáp Thắc Mắc
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>
                Câu Hỏi Thường Gặp Về Dịch Vụ Website
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
                Những băn khoăn thực tế của khách hàng trước khi bắt đầu làm website.
              </p>
            </div>

            {/* Accordion list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3.5rem' }}>
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '0.75rem',
                      border: isOpen ? '1px solid #0d7647' : '1px solid #e2e8f0',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1.25rem 1.5rem',
                        textAlign: 'left',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0f172a' }}>
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#0d7647] flex-shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                      )}
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 1.5rem 1.25rem 1.5rem',
                          color: '#475569',
                          fontSize: '0.95rem',
                          lineHeight: 1.7,
                          borderTop: '1px solid #f1f5f9',
                          paddingTop: '1rem'
                        }}
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* HIGH-CONVERSION CTA BOX */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #0d7647',
                borderRadius: '1rem',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                boxShadow: '0 8px 30px rgba(13, 118, 71, 0.1)'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#ecfdf5',
                  color: '#065f46',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  marginBottom: '1rem'
                }}
              >
                <ShieldCheck className="w-4 h-4 text-[#0d7647]" />
                <span>CAM KẾT 3 KHÔNG: KHÔNG CỌC • KHÔNG PHÍ ẨN • KHÔNG GIAM TÀI SẢN</span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                Nhận Bản Thiết Kế Website Demo Trong 24 Giờ
              </h3>
              <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '640px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
                Gửi thông tin quán hoặc ngành nghề của bạn. LocalMate sẽ dựng bản web xem trước để bạn trải nghiệm tốc độ và giao diện thực tế trước khi quyết định.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={entity.contact.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#0d7647',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    padding: '0.85rem 1.75rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none'
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Nhắn Zalo Nhận Demo ({entity.contact.hotlineDisplay})</span>
                </a>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleCTA('Đăng ký tư vấn web qua form')}
                  style={{ borderColor: '#cbd5e1', color: '#0f172a', fontWeight: 700 }}
                >
                  <span>Điền form khảo sát 0đ</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div style={{ marginTop: '1.25rem', fontSize: '0.825rem', color: '#64748b' }}>
                Hotline hỗ trợ kỹ thuật: <strong>{entity.contact.hotline}</strong> (8:00 - 18:30 hàng ngày)
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
