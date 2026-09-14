import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { COMPANY_DATA } from '../data/company';
import { useRouter, Link } from '../components/layout/Router';
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  ExternalLink,
  Star,
  Check,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  QrCode,
  Search,
  Lock,
  MessageCircle,
  Copy,
  Users,
  Compass,
  AlertTriangle
} from 'lucide-react';

interface GoogleMapsPillarPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const GoogleMapsPillarPage: React.FC<GoogleMapsPillarPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  // Pillar 2 Data from SSOT
  const mapsPillar = COMPANY_DATA.pillars.find((p) => p.slug === 'google-maps-local-seo') || COMPANY_DATA.pillars[1];
  const { offers } = mapsPillar;
  const { entity, caseStudies } = COMPANY_DATA;

  // Filter case studies related to Google Maps (xeo-restaurant & huong-sen)
  const mapsCaseStudies = caseStudies.filter(
    (cs) => cs.slug === 'xeo-restaurant' || cs.slug === 'huong-sen'
  );

  const breadcrumbs = [
    { name: 'Trang chủ', url: '/' },
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: 'Google Maps & Local SEO', url: '/google-maps-local-seo' }
  ];

  const handleCTA = (packageName?: string) => {
    const selected = packageName || 'Tư vấn Dịch vụ Google Maps & Local SEO';
    if (onOpenConsultForm) {
      onOpenConsultForm(selected);
    } else {
      navigate('/lien-he');
    }
  };

  const answerFirstText =
    'Dịch vụ Google Maps tại LocalMate bao gồm: xác minh tọa độ GPS chính chủ chống cướp Maps, tối ưu chuẩn danh mục kinh doanh và từ khóa tìm kiếm địa phương trong bán kính 3–10km, thiết kế bộ mã QR xin đánh giá 5 sao văn minh tại quầy, và đồng bộ trích dẫn NAP trên 20+ danh bạ. Chi phí khởi tạo trọn gói từ 990.000đ, bàn giao quyền quản trị mới thanh toán.';

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(answerFirstText);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const faqs = [
    {
      q: 'Hồ sơ Google Maps sau khi làm xong sẽ thuộc quyền sở hữu của ai?',
      a: '100% thuộc về email chính chủ của bạn. LocalMate xác minh và thiết lập hồ sơ trực tiếp dưới quyền sở hữu chính (Primary Owner) bằng tài khoản Gmail của bạn. Bạn toàn quyền quản lý, thêm/bớt nhân viên quản trị và tuyệt đối không bị ai giữ quyền kiểm soát.'
    },
    {
      q: 'Cam kết "Bàn giao mới thanh toán" cho dịch vụ Google Maps hoạt động ra sao?',
      a: 'Khi bạn yêu cầu xác minh vị trí hoặc tạo mới Google Maps, LocalMate sẽ tiến hành đo đạc GPS, gửi hồ sơ xác thực và tối ưu danh mục. Bạn chỉ thanh toán phí dịch vụ khi vị trí Maps đã xuất hiện chính thức, hoạt động ổn định trên Google Search & Google Maps và bạn đã nhận quyền quản trị cao nhất.'
    },
    {
      q: 'Bao lâu thì địa điểm của tôi bắt đầu xuất hiện trong Top 3 Local Pack?',
      a: 'Với gói xác minh chuẩn (990.000đ), địa điểm sẽ hiển thị chính xác trên bản đồ chỉ đường sau 1–3 ngày làm việc. Đối với gói SEO đẩy Top 3 bán kính (2.000.000đ/tháng), thời gian bắt đầu thấy tín hiệu tăng hạng rõ rệt từ tuần thứ 3 đến tuần thứ 6 sau khi đồng bộ dữ liệu trích dẫn NAP và thu thập đánh giá thật.'
    },
    {
      q: 'Bộ mã QR xin đánh giá của LocalMate khác gì việc xin review thông thường?',
      a: 'Bộ mã QR của LocalMate được thiết kế thông minh, in sẵn standee để bàn hoặc dán quầy thu ngân. Khi khách quét mã bằng camera điện thoại, hệ thống sẽ mở thẳng hộp thoại chấm 5 sao trên Google Maps mà không cần tìm kiếm tên quán. Điều này giúp tăng tỷ lệ khách để lại đánh giá thực tế lên gấp 4 lần.'
    },
    {
      q: 'Google Maps của tôi bị đối thủ cướp quyền hoặc sửa số điện thoại thì xử lý thế nào?',
      a: 'LocalMate hỗ trợ quy trình kháng cáo chính chủ: cung cấp giấy phép kinh doanh/hóa đơn điện nước, thiết lập lớp bảo mật 2 lớp chống đề xuất chỉnh sửa bậy bạ từ cộng đồng (User Edits), giúp khôi phục quyền sở hữu và bảo vệ thương hiệu của bạn bền vững.'
    },
    {
      q: 'Tôi chỉ là quán ăn nhỏ hoặc tiệm sửa xe, có cần thiết làm Google Maps không?',
      a: 'Cực kỳ cần thiết. Hơn 78% người dân khi tìm quán ăn ngon, tiệm cà phê gần đây hoặc thợ sửa xe gần nhất đều mở Google Maps để tìm địa chỉ gần mình và xem số điện thoại gọi ngay. Không có Google Maps đồng nghĩa bạn đang nhường toàn bộ khách vãng lai quanh bán kính 3km cho đối thủ.'
    }
  ];

  // Schema for FAQ
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
        title="Dịch Vụ Xác Minh & SEO Google Maps Địa Phương | Top 3 Local Pack"
        description="Khởi tạo, xác minh Google Maps chính chủ 100% (990k) và SEO đẩy Top 3 bán kính 3-10km. Chống cướp Maps, tặng bộ QR đánh giá tại bàn. Bàn giao nghiệm thu mới thanh toán."
        canonicalPath="/google-maps-local-seo"
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
              <span>CAM KẾT: BÀN GIAO QUYỀN QUẢN TRỊ CHÍNH CHỦ MỚI THANH TOÁN</span>
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
              Dịch Vụ Xác Minh & SEO Google Maps Địa Phương
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
              Xuất hiện trong Top 3 Google Maps khi khách hàng tìm kiếm dịch vụ quanh bán kính 3–10km. Xác minh định vị GPS chính chủ 100%, bảo mật chống cướp Maps và tặng kèm bộ mã QR xin đánh giá 5 sao văn minh tại bàn.
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
                onClick={() => handleCTA('Kiểm tra hiện trạng Google Maps 0đ')}
                style={{
                  borderColor: '#cbd5e1',
                  color: '#0f172a',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '0.85rem 1.5rem'
                }}
              >
                <span>Kiểm tra vị trí Maps miễn phí</span>
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
                <MapPin className="w-5 h-5 text-[#0d7647] flex-shrink-0 mt-0.5" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#0f172a' }}>GPS chuẩn từng mét</div>
                  <div style={{ fontSize: '0.825rem', color: '#64748b' }}>Khách tìm không bị lạc đường</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Lock className="w-5 h-5 text-[#0d7647] flex-shrink-0 mt-0.5" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#0f172a' }}>Chính chủ email 100%</div>
                  <div style={{ fontSize: '0.825rem', color: '#64748b' }}>Bảo mật chống cướp đổi số</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <QrCode className="w-5 h-5 text-[#0d7647] flex-shrink-0 mt-0.5" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#0f172a' }}>Tặng Standee QR để bàn</div>
                  <div style={{ fontSize: '0.825rem', color: '#64748b' }}>Hút đánh giá 5 sao tại quầy</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <ShieldCheck className="w-5 h-5 text-[#0d7647] flex-shrink-0 mt-0.5" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#0f172a' }}>Bàn giao mới thu tiền</div>
                  <div style={{ fontSize: '0.825rem', color: '#64748b' }}>Maps sống chuẩn chỉ mới trả</div>
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
                  Chuẩn trích dẫn ChatGPT Search, Gemini & Google Maps AI
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
              <span>Dịch vụ Google Maps bao gồm những gì?</span>
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
              <span>• <strong>Mức giá khởi tạo:</strong> 990.000 VNĐ (trọn gói)</span>
              <span>• <strong>Thời gian:</strong> 1–3 ngày hoàn tất</span>
              <span>• <strong>Quyền sở hữu:</strong> 100% chính chủ email của bạn</span>
              <span>• <strong>Bảo hành:</strong> 12 tháng kỹ thuật</span>
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
              Minh Bạch Tiêu Chuẩn & Báo Giá
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>
              Bảng Tóm Tắt Dịch Vụ Google Maps & Local SEO
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
              So sánh chi tiết giữa gói xác minh một lần và gói duy trì SEO đẩy top bán kính.
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
                    Gói Khởi Tạo & Xác Minh Chính Chủ
                  </th>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1d4ed8', width: '39%' }}>
                    Gói SEO Google Maps Đẩy Top 3 Bán Kính
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '0.95rem' }}>
                {/* 1. Bảng giá */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    1. Bảng giá niêm yết
                  </td>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 800, color: '#0d7647', fontSize: '1.1rem' }}>
                    990.000 VNĐ (trọn gói 1 lần)
                  </td>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 800, color: '#1d4ed8', fontSize: '1.1rem' }}>
                    2.000.000 VNĐ / tháng
                  </td>
                </tr>

                {/* 2. Đối tượng phù hợp */}
                <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#fcfdfd' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    2. Đối tượng phù hợp
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    Quán ăn, quán cafe, spa, nha khoa, tiệm tóc, cửa hàng bán lẻ mới mở hoặc chưa có Maps chính chủ.
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    Cơ sở kinh doanh tại khu vực cạnh tranh cao, cần hút lượng khách du lịch và khách tìm kiếm "gần đây".
                  </td>
                </tr>

                {/* 3. Hạng mục bàn giao */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    3. Hạng mục bàn giao
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6 }}>
                      <li>Xác minh định vị GPS chính xác trên Google Maps</li>
                      <li>Tối ưu danh mục chính và phụ chuẩn xác nghề nghiệp</li>
                      <li>Thiết kế bộ file in mã QR để bàn xin review 5 sao</li>
                      <li>Cài đặt lớp bảo vệ chống sửa số điện thoại trái phép</li>
                    </ul>
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6 }}>
                      <li>Đồng bộ trích dẫn NAP trên 20+ danh bạ địa phương uy tín</li>
                      <li>Đăng bài cập nhật khuyến mãi & hình ảnh chuẩn SEO hàng tuần</li>
                      <li>Tối ưu từ khóa địa phương và tìm kiếm "near me"</li>
                      <li>Báo cáo thứ hạng Maps Pack hàng tháng minh bạch</li>
                    </ul>
                  </td>
                </tr>

                {/* 4. Thời gian triển khai */}
                <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#fcfdfd' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    4. Thời gian triển khai
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#0d7647', fontWeight: 700 }}>
                    1 – 3 ngày làm việc
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#1d4ed8', fontWeight: 700 }}>
                    Triển khai liên tục theo hợp đồng tháng
                  </td>
                </tr>

                {/* 5. Chi phí duy trì */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    5. Chi phí duy trì
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#16a34a', fontWeight: 700 }}>
                    0đ / tháng (Không mất phí duy trì Google)
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#1d4ed8', fontWeight: 700 }}>
                    2.000.000đ / tháng (Có thể tạm dừng bất cứ lúc nào)
                  </td>
                </tr>

                {/* 6. Quyền sở hữu */}
                <tr style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: '#fcfdfd' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    6. Quyền sở hữu
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#0f172a', fontWeight: 600 }}>
                    Tài khoản Google Business Profile thuộc email chính chủ của bạn
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#0f172a', fontWeight: 600 }}>
                    Toàn bộ tài nguyên và đánh giá đều thuộc quyền sở hữu của bạn
                  </td>
                </tr>

                {/* 7. Bảo hành */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    7. Bảo hành & Hỗ trợ
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    Bảo hành kỹ thuật 12 tháng, hỗ trợ khôi phục nếu bị khiếu nại
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                    Hỗ trợ ưu tiên 1-1 qua Zalo, xử lý khiếu nại đánh giá xấu
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
              Lựa Chọn Gói Phù Hợp
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>
              Chi Tiết 2 Gói Google Maps Địa Phương
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
              Định vị chính xác, bảo mật vững vàng và thúc đẩy doanh thu từ khách hàng xung quanh.
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
            {offers.map((offer) => {
              const isPopular = offer.id === 'maps-setup';
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
                      Cần thiết cho mọi cơ sở mới
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
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569' }}>
                      <Clock className="w-4 h-4 text-[#0d7647]" />
                      <span>Thời gian triển khai: <strong>{offer.timeline}</strong></span>
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
                    <div style={{ fontWeight: 700 }}>Quyền sở hữu & Hỗ trợ:</div>
                    <div>{offer.ownership} • {offer.support}</div>
                  </div>

                  {/* Button */}
                  <Button
                    variant={isPopular ? 'primary' : 'outline'}
                    size="lg"
                    style={{ width: '100%', fontWeight: 700 }}
                    onClick={() => handleCTA(`Đăng ký gói ${offer.name} (${offer.priceFormatted})`)}
                  >
                    <span>Chọn gói này (Bàn giao mới trả)</span>
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
                Quy Trình 4 Bước Xác Minh Google Maps & Local SEO
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#ecfdf5', color: '#0d7647', fontWeight: 800, fontSize: '1rem', padding: '0.25rem 0.65rem', borderRadius: '0.375rem', marginBottom: '0.75rem' }}>
                  Bước 01
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Tiếp nhận & Đo đạc GPS
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                  Bạn gửi địa chỉ, biển hiệu và số điện thoại qua Zalo. Kỹ thuật viên kiểm tra tọa độ và trạng thái Maps hiện tại hoàn toàn miễn phí.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#ecfdf5', color: '#0d7647', fontWeight: 800, fontSize: '1rem', padding: '0.25rem 0.65rem', borderRadius: '0.375rem', marginBottom: '0.75rem' }}>
                  Bước 02
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Xác minh & Chuẩn hóa hồ sơ
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                  Tiến hành thủ tục xác thực với Google, cấu hình danh mục kinh doanh chuẩn xác, thiết lập giờ mở cửa và tải ảnh thực tế.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #0d7647' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#0d7647', color: '#ffffff', fontWeight: 800, fontSize: '1rem', padding: '0.25rem 0.65rem', borderRadius: '0.375rem', marginBottom: '0.75rem' }}>
                  Bước 03
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Nghiệm thu Maps thực tế
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                  Bạn mở Google Maps tìm thử vị trí, kiểm tra nút bấm chỉ đường và gọi điện thoại. <strong>Maps sống chuẩn chỉ bạn mới thanh toán.</strong>
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#ecfdf5', color: '#0d7647', fontWeight: 800, fontSize: '1rem', padding: '0.25rem 0.65rem', borderRadius: '0.375rem', marginBottom: '0.75rem' }}>
                  Bước 04
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Bàn giao quyền & Tặng QR Code
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                  Chuyển quyền sở hữu chính chủ vào Gmail của bạn. Gửi file in bộ mã QR xin đánh giá 5 sao để bàn phục vụ kinh doanh.
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
              Kết Quả Đo Lường Thực Tế
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a' }}>
              Dự Án Google Maps & Local SEO Tiêu Biểu
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
              Xem các cơ sở ẩm thực & dịch vụ du lịch thu hút khách vãng lai nhờ thứ hạng Google Maps vững chắc.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {mapsCaseStudies.map((cs) => (
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
                      {cs.metrics.mapRank}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {cs.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    <strong>Tình trạng ban đầu:</strong> {cs.problemBefore}
                  </p>

                  <p style={{ fontSize: '0.9rem', color: '#0d7647', lineHeight: 1.6, marginBottom: '1.5rem', backgroundColor: '#f0fdf4', padding: '0.75rem 1rem', borderRadius: '0.5rem' }}>
                    <strong>Cách giải quyết:</strong> {cs.solution}
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
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0d7647' }}>Top 1–3</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Thứ hạng Maps</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>100%</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>GPS chính chủ</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1d4ed8' }}>QR Độc Quyền</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Đánh giá 5 sao</div>
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
                  <span>Xem chi tiết dự án</span>
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
                Câu Hỏi Thường Gặp Về Google Maps
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
                Những điều bạn cần biết để bảo vệ vị trí kinh doanh và thu hút khách tại địa phương.
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
                <span>CAM KẾT: 100% CHÍNH CHỦ EMAIL BẠN • MAPS SỐNG MỚI TRẢ TIỀN</span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                Xác Minh Google Maps & Đón Khách Ngay Hôm Nay
              </h3>
              <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '640px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
                Gửi tên cơ sở kinh doanh và địa chỉ của bạn. Kỹ thuật viên LocalMate sẽ kiểm tra tọa độ GPS trên Google và hỗ trợ bạn trong vòng 15 phút.
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
                  <span>Tư vấn qua Zalo ({entity.contact.hotlineDisplay})</span>
                </a>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleCTA('Đăng ký kiểm tra Google Maps qua form')}
                  style={{ borderColor: '#cbd5e1', color: '#0f172a', fontWeight: 700 }}
                >
                  <span>Khảo sát vị trí 0đ</span>
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
