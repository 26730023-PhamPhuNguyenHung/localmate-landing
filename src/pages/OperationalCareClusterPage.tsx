import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { useRouter, Link } from '../components/layout/Router';
import { CONTACT_INFO } from '../data/landingContent';
import { CapabilityContextBox } from '../components/ui/CapabilityContextBox';
import {
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Phone,
  ArrowRight,
  Clock,
  HelpCircle,
  Zap,
  Check,
  AlertTriangle,
  Smartphone,
  Laptop,
  Flame,
  Globe,
  MessageSquare,
  Wrench,
  Percent,
  Search,
  ExternalLink
} from 'lucide-react';

interface OperationalCareClusterPageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const OperationalCareClusterPage: React.FC<OperationalCareClusterPageProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'gads' | 'repair' | 'fb' | 'care'>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleCTA = (serviceName: string) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(serviceName);
    } else {
      navigate('/lien-he');
    }
  };

  const breadcrumbs = [
    { name: 'Giải pháp', url: '/giai-phap' },
    { name: 'Chạy khách & Chăm sóc vận hành', url: '/giai-phap/duoc-tim-thay' },
    { name: 'Chạy khách & Chăm sóc vận hành', url: '/dich-vu/chay-khach-cham-soc' }
  ];

  const servicesList = [
    {
      id: 'gads',
      tag: '0% Kê Giá • Chính Chủ',
      badgeClass: 'badge-emerald',
      title: 'Google Ads Địa Phương',
      subtitle: 'Tìm kiếm khách có nhu cầu mua quanh tiệm',
      price: 'Từ 390.000đ',
      pricePeriod: 'setup • Quản trị 690k/tháng',
      slug: '/dich-vu/google-ads-dia-phuong',
      icon: Search,
      iconColor: '#0d7647',
      iconBg: '#ecfdf5',
      problem: 'Tự chạy bị click ảo, tiền bay vèo vèo mà không có cuộc gọi nào. Thuê bên ngoài thì bị giấu tài khoản, kê giá chênh lệch từng lượt bấm.',
      solution: 'Tiếp cận chính xác khách hàng đang gõ tìm dịch vụ trong bán kính 3–10km. 100% tài khoản chính chủ của bạn, nạp tiền trực tiếp vào Google bằng thẻ riêng, LocalMate chỉ thu phí kỹ thuật minh bạch.',
      keyPoints: [
        '0% phí chênh lệch: Tiền chạy trừ đúng sao kê thẻ Visa của bạn',
        '100% tài khoản chính chủ Gmail của bạn, bạn nắm toàn quyền Admin',
        'Chặn 200+ từ khóa rác (tìm việc, miễn phí, học nghề, tải phần mềm)',
        'Gắn nút gọi Hotline 1 chạm và hiển thị vị trí trên Google Maps',
        'Cài đặt mã GA4/GTM đếm chuẩn xác số cuộc gọi và tin nhắn Zalo'
      ],
      idealFor: 'Tiệm sửa chữa, thợ điện nước/sửa khóa, phòng khám, nha khoa, gara ô tô, quán ăn, dịch vụ tại nhà.'
    },
    {
      id: 'repair',
      tag: 'Chuyên Trị Ngành Nhạy Cảm',
      badgeClass: 'badge-amber',
      title: 'Khắc Phục Lỗi Ads Sửa Chữa (Điện Thoại / Laptop / Điện Lạnh)',
      subtitle: 'Gỡ gậy chính sách bên thứ ba, mạo danh & Whitelist tài khoản',
      price: 'Từ 1.290.000đ',
      pricePeriod: 'lần xử lý (Đánh giá 0đ trước)',
      slug: '/dich-vu/khac-phuc-loi-google-ads-sua-chua',
      icon: Wrench,
      iconColor: '#b45309',
      iconBg: '#fef3c7',
      problem: 'Google siết gắt chính sách "Dịch vụ kỹ thuật bên thứ ba": liên tục từ chối mẫu quảng cáo, tạm ngưng tài khoản vì dính tên thương hiệu Apple, Samsung, Dell hoặc bị gán lỗi "Tránh né hệ thống".',
      solution: 'Chẩn đoán nguyên nhân gốc rễ, sửa triệt để trang đích (thêm Disclaimer độc lập, gỡ logo bản quyền), chuẩn bị hồ sơ pháp lý/ĐKKD và kháng nghị chính ngạch với Google Policy để tài khoản whitelist sống bền.',
      keyPoints: [
        'Audit bóc tách toàn bộ mã lỗi vi phạm chính sách của Google Ads',
        'Thêm tuyên bố miễn trừ độc lập (Independent Disclaimer) chuẩn luật',
        'Gỡ sạch logo/nhãn hiệu vi phạm bản quyền Trademark',
        'Chuẩn hóa bảng giá linh kiện, quy trình và chính sách bảo hành rõ ràng',
        'Soạn hồ sơ kháng nghị song ngữ (Việt - Anh) gửi trực tiếp Google Specialist'
      ],
      idealFor: 'Tiệm sửa điện thoại iPhone/Android, ép kính, sửa laptop/máy tính, sửa máy lạnh/tủ lạnh/máy giặt, cứu hộ khóa.'
    },
    {
      id: 'fb',
      tag: 'Bán Kính 5km Chuẩn Xác',
      badgeClass: 'badge-blue',
      title: 'Facebook Ads Địa Phương',
      subtitle: 'Phủ sóng cư dân đang sinh sống & làm việc quanh tiệm',
      price: 'Từ 490.000đ',
      pricePeriod: 'setup • Chăm sóc 790k/tháng',
      slug: '/dich-vu/facebook-ads-dia-phuong',
      icon: Smartphone,
      iconColor: '#1d4ed8',
      iconBg: '#eff6ff',
      problem: 'Chạy Facebook nhưng cắn tiền vô tội vạ, tiếp cận người ở tỉnh xa xôi không bao giờ ghé tiệm; tin nhắn toàn nick clone hỏi cho vui rồi im lặng.',
      solution: 'Cắm mốc định vị GPS địa chỉ quán và quét bán kính 1km – 5km. Sử dụng hình ảnh và video thực tế tại tiệm, kích thích cư dân lân cận nhắn tin đặt lịch hoặc ghé trải nghiệm trực tiếp.',
      keyPoints: [
        'Cắm mốc GPS địa chỉ quán, quét bán kính 1km – 5km chuẩn xác',
        'Loại trừ hoàn toàn khách vãng lai và người ở tỉnh xa',
        'Viết bài quảng cáo văn phong đời thường, giật tít ưu đãi kéo khách ghé tiệm',
        'Thiết kế banner hình ảnh chụp thật tại quán, nổi bật số hotline',
        'Cài đặt kịch bản FAQ tin nhắn tự động hỏi số điện thoại và báo giá tức thì'
      ],
      idealFor: 'Quán ăn, nhà hàng, cafe, trà sữa, spa, salon tóc, tiệm nail, phòng gym/yoga, lớp học thêm, tiệm giặt ủi.'
    },
    {
      id: 'care',
      tag: 'Bảo Hành Đến 5 Năm',
      badgeClass: 'badge-purple',
      title: 'Chăm Sóc Website Chuẩn SEO & Vận Hành',
      subtitle: 'An tâm kinh doanh, có kỹ thuật viên túc trực hỗ trợ 24/7',
      price: 'Từ 590.000đ',
      pricePeriod: '/ tháng (Linh hoạt theo tháng)',
      slug: '/dich-vu/cham-soc-website-chuan-seo',
      icon: Globe,
      iconColor: '#6d28d9',
      iconBg: '#f5f3ff',
      problem: 'Website làm xong bị bỏ rơi, không ai cập nhật giá món hay bài viết; trang tải chậm, lỗi giao diện điện thoại, hết hạn SSL hoặc bị hack mà không biết gọi ai sửa.',
      solution: 'Đóng vai trò "Phòng IT & Content thuê ngoài" cho tiệm: giám sát website 24/7, sao lưu dữ liệu hàng tuần, cập nhật nội dung qua Zalo trong 15–30 phút, viết bài SEO kéo khách và cam kết bảo hành kỹ thuật 5 năm.',
      keyPoints: [
        'Cam kết bảo hành kỹ thuật toàn diện lên đến 5 năm không lo web hỏng',
        'Giám sát Uptime 99.9% & Tối ưu Cloudflare giúp trang tải < 1.2s',
        'Sao lưu (Backup) cơ sở dữ liệu định kỳ hàng tuần chống mất dữ liệu',
        'Nhận yêu cầu qua nhóm Zalo riêng, xử lý cập nhật nội dung sau 15–30 phút',
        'Biên tập 4–8 bài viết chuẩn SEO/tháng đưa website lên top Google bền vững'
      ],
      idealFor: 'Doanh nghiệp SME, phòng khám, công ty dịch vụ, cửa hàng không có nhân sự kỹ thuật hoặc bị đơn vị làm web cũ bỏ rơi.'
    }
  ];

  const comparisonTable = [
    {
      criteria: 'Quyền sở hữu tài khoản Ads',
      traditional: 'Agency nắm quyền sở hữu, giấu tài khoản, khi chấm dứt hợp đồng là mất trắng toàn bộ dữ liệu & điểm chất lượng.',
      localmate: '100% tài khoản chính chủ của bạn (bạn giữ quyền Admin cao nhất). Dữ liệu khách hàng và lịch sử thuộc về bạn 100% chính chủ.'
    },
    {
      criteria: 'Minh bạch chi phí ngân sách',
      traditional: 'Thường thu % ngân sách (15–30%) hoặc kê khống giá thầu click (báo 10.000đ/click nhưng thực chạy chỉ 4.000đ).',
      localmate: '0% phí chênh lệch / không kê giá. Bạn tự thêm thẻ ngân hàng vào Google/Meta, sao kê trừ bao nhiêu trả bấy nhiêu. LocalMate chỉ thu phí công sức kỹ thuật cố định.'
    },
    {
      criteria: 'Xử lý lỗi ngành nhạy cảm (Sửa chữa)',
      traditional: 'Dùng thủ thuật bẩn (bọc link, cloaking, lách luật), chạy được 2–3 ngày lại chết tài khoản, có nguy cơ bị khóa tên miền lâu dài.',
      localmate: 'Xử lý chuẩn chính sách (Disclaimer độc lập, gỡ nhãn hiệu vi phạm, bổ sung ĐKKD), nộp hồ sơ kháng nghị chính ngạch & xây tài khoản whitelist an toàn.'
    },
    {
      criteria: 'Phạm vi tiếp cận khách hàng',
      traditional: 'Thả target rộng toàn thành phố để đốt nhanh ngân sách, dẫn đến nhiều cuộc gọi nhầm ở huyện xa không phục vụ được.',
      localmate: 'Cắm mốc định vị GPS chuẩn bán kính 1km – 5km quanh tiệm (Facebook) hoặc theo quận/huyện phục vụ (Google), nhắm đúng người mua thực tế.'
    },
    {
      criteria: 'Chăm sóc & Bảo hành Website',
      traditional: 'Làm xong bàn giao là hết trách nhiệm. Khi web lỗi, sập hosting hay cần sửa một dòng chữ thì tính phí đắt đỏ hoặc không phản hồi.',
      localmate: 'Bảo hành kỹ thuật lên đến 5 năm. Hỗ trợ nhóm Zalo 1-1, sửa đổi nội dung nhanh trong 15–30 phút, viết bài chuẩn SEO định kỳ hàng tháng.'
    }
  ];

  const faqs = [
    {
      q: 'Tại sao LocalMate cam kết 0% phí kê giá Google Ads và Facebook Ads?',
      a: 'Vì chúng tôi tin rằng sự minh bạch là nền tảng của mối quan hệ hợp tác lâu dài. Bạn sẽ tự tay nhập thông tin thẻ Visa/Mastercard của mình vào tài khoản quảng cáo. Google và Meta cắn bao nhiêu tiền, bạn kiểm tra trực tiếp trên ứng dụng ngân hàng. LocalMate chỉ thu khoản phí dịch vụ kỹ thuật (công setup và quản trị tối ưu) đã được niêm yết rõ ràng trước khi làm.'
    },
    {
      q: 'Tại sao các tiệm sửa điện thoại, laptop, điện lạnh hay bị Google khóa tài khoản Ads?',
      a: 'Google có chính sách cực kỳ khắt khe về "Hỗ trợ kỹ thuật người tiêu dùng của bên thứ ba" để chống các bên mạo danh trung tâm bảo hành của Apple, Samsung, Dell, Sony, Daikin... Nếu website của bạn có logo hãng, thiếu dòng tuyên bố độc lập (Disclaimer) hoặc thiếu địa chỉ rõ ràng, AI kiểm duyệt của Google sẽ tự động gắn cờ tạm ngưng tài khoản ngay lập tức.'
    },
    {
      q: 'LocalMate xử lý gỡ lỗi tài khoản quảng cáo sửa chữa như thế nào?',
      a: 'Chúng tôi làm đúng theo khuyến nghị của Google Policy: (1) Sửa trang đích, bổ sung văn bản Disclaimer độc lập không liên kết với hãng; (2) Gỡ bỏ toàn bộ logo nhãn hiệu vi phạm bản quyền; (3) Công khai thông tin pháp nhân, bảng giá niêm yết; (4) Chuẩn bị bộ hồ sơ ĐKKD, hợp đồng thuê tiệm và soạn thư giải trình kháng nghị trực tiếp với đội ngũ Google Support.'
    },
    {
      q: 'Chạy Facebook Ads bán kính 5km quanh tiệm có tốn nhiều tiền không?',
      a: 'Rất tiết kiệm. Vì chỉ tập trung vào cư dân trong bán kính 1–5km quanh tiệm, bạn không phải chi tiền cho hàng triệu người ở xa. Ngân sách có thể bắt đầu linh hoạt từ 50.000đ – 100.000đ/ngày là đã đủ để phủ sóng toàn bộ khách hàng tiềm năng trong khu vực.'
    },
    {
      q: 'Chính sách bảo hành website lên đến 5 năm của LocalMate áp dụng như thế nào?',
      a: 'Khi duy trì dịch vụ chăm sóc website định kỳ của LocalMate, mọi lỗi phát sinh về mã nguồn, giao diện hiển thị trên điện thoại mới, chứng chỉ bảo mật SSL hay cấu hình CDN đều được kỹ thuật viên sửa chữa miễn phí 100% trong suốt 5 năm. Bạn hoàn toàn an tâm tập trung bán hàng mà không lo website bị sập hay lỗi thời.'
    },
    {
      q: 'Tôi có website cũ rồi thì LocalMate có nhận chăm sóc không?',
      a: 'Có. LocalMate nhận tiếp quản và chăm sóc các website WordPress, HTML/CSS, React, WooCommerce... Đội ngũ kỹ thuật sẽ tiến hành kiểm toán bảo mật và tốc độ miễn phí trước khi đề xuất gói chăm sóc phù hợp.'
    }
  ];

  const filteredServices = activeTab === 'all'
    ? servicesList
    : servicesList.filter((s) => s.id === activeTab);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '1.5rem 0 5rem 0' }}>
      <SEOHead
        title="Cụm Dịch Vụ Chạy Khách & Chăm Sóc Vận Hành (Google Ads, Facebook Ads, Gỡ Lỗi Ads, Chăm Sóc Web) | LocalMate"
        description="Giải pháp marketing & vận hành thực chiến: Google Ads 0% phí kê giá, Khắc phục lỗi Ads ngành sửa chữa nhạy cảm, Facebook Ads bán kính 5km, Chăm sóc website chuẩn SEO bảo hành 5 năm."
        canonicalPath="/dich-vu/chay-khach-cham-soc"
        breadcrumbs={breadcrumbs}
      />

      <Container size="lg">
        <Breadcrumbs items={breadcrumbs} />

        <CapabilityContextBox
          solutionName="Chạy khách & Chăm sóc vận hành"
          solutionUrl="/giai-phap/duoc-tim-thay"
          customMessage="Đây là cụm năng lực chuyên sâu trực thuộc Giải pháp: [Chạy khách & Chăm sóc vận hành] của Localmate. Phù hợp khi bạn muốn tối ưu quảng cáo địa phương và duy trì hệ thống bền vững."
        />

        {/* HERO SECTION - 100% Light Mode, Clean & Crisp */}
        <section
          style={{
            marginTop: '1.5rem',
            padding: '3rem 2.5rem',
            borderRadius: 'var(--radius-2xl)',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          {/* Eyebrow Pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '9999px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '0.825rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            <Sparkles size={15} color="#0284c7" />
            <span>CHI PHÍ HỢP LÝ • LÀM TỪ GỐC KỸ THUẬT CHO HỘ KINH DOANH</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.25,
              maxWidth: '900px',
              margin: '0 auto 1.25rem auto',
              textWrap: 'pretty'
            }}
          >
            Cụm Dịch Vụ <span style={{ color: 'var(--color-primary)' }}>Chạy Khách Quanh Tiệm</span> &amp; Chăm Sóc Vận Hành An Tâm
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: '#475569',
              lineHeight: 1.65,
              maxWidth: '780px',
              margin: '0 auto 2rem auto',
              textWrap: 'pretty'
            }}
          >
            Không giấu tài khoản, không kê giá ăn chênh lệch, không làm xong bỏ rơi. Bộ 4 giải pháp marketing &amp; kỹ thuật số chuyên sâu giúp điểm bán địa phương và cơ sở sửa chữa luôn có khách gọi đều đặn.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleCTA('Tư vấn Cụm Dịch Vụ Chạy Khách & Vận Hành')}
              style={{ fontWeight: 700, padding: '0.85rem 1.8rem', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>Tư vấn chiến dịch &amp; Khám lỗi Ads 0đ</span>
              <ArrowRight size={18} />
            </Button>

            <a
              href={`https://zalo.me/${CONTACT_INFO.hotlineRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.8rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#0f172a',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              <Phone size={18} color="var(--color-primary)" />
              <span>Gọi / Zalo: {CONTACT_INFO.hotline}</span>
            </a>
          </div>

          {/* 4 Trust Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              textAlign: 'left'
            }}
          >
            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Percent size={22} color="#0d7647" />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a' }}>0% Phí Kê Giá</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Tiền trừ thẻ gốc Google/Meta</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={22} color="#1d4ed8" />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a' }}>100% Chính Chủ</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Khách hàng giữ quyền Admin</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Wrench size={22} color="#b45309" />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a' }}>Gỡ Lỗi Ngành Khó</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Kháng Ads sửa điện thoại/laptop</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={22} color="#6d28d9" />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a' }}>Bảo Hành Đến 5 Năm</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Vận hành an tâm dài lâu</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE FILTER TABS */}
        <div style={{ margin: '3.5rem 0 1.5rem 0', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
          {[
            { id: 'all', label: 'Tất cả 4 Dịch Vụ Mũi Nhọn' },
            { id: 'gads', label: '1. Google Ads Địa Phương (0% kê giá)' },
            { id: 'repair', label: '2. Gỡ Lỗi Ads Sửa Chữa (Điện thoại/Laptop)' },
            { id: 'fb', label: '3. Facebook Ads Bán Kính 5km' },
            { id: 'care', label: '4. Chăm Sóc Web (Bảo hành 5 năm)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: activeTab === tab.id ? '2px solid var(--color-primary)' : '1px solid #e2e8f0',
                backgroundColor: activeTab === tab.id ? 'var(--color-primary-soft)' : '#ffffff',
                color: activeTab === tab.id ? 'var(--color-primary-dark)' : '#475569',
                transition: 'all 0.15s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4 CORE SERVICES DETAILED CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '4.5rem' }}>
          {filteredServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid #e2e8f0',
                  padding: '2.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'start'
                }}
              >
                {/* Left Column: Info & Scope */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: srv.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={24} color={srv.iconColor} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: srv.iconColor, backgroundColor: srv.iconBg, padding: '0.25rem 0.6rem', borderRadius: '9999px' }}>
                        {srv.tag}
                      </span>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0 0', lineHeight: 1.3 }}>
                        {srv.title}
                      </h2>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 600, marginBottom: '1.25rem' }}>
                    {srv.subtitle}
                  </p>

                  <div style={{ backgroundColor: '#fff1f2', borderLeft: '3px solid #e11d48', padding: '0.85rem 1rem', borderRadius: '6px', marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#9f1239', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      Vấn đề thực tế:
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#4c0519', lineHeight: 1.5 }}>
                      {srv.problem}
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#f0fdf4', borderLeft: '3px solid #16a34a', padding: '0.85rem 1rem', borderRadius: '6px', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      Giải pháp LocalMate:
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#14532d', lineHeight: 1.5 }}>
                      {srv.solution}
                    </div>
                  </div>

                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    <strong style={{ color: '#334155' }}>Phù hợp nhất cho:</strong> {srv.idealFor}
                  </div>
                </div>

                {/* Right Column: Deliverables, Price & CTAs */}
                <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
                      Thực tế bạn sẽ nhận được:
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                      {srv.keyPoints.map((pt, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                          <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '0.9rem', color: '#1e293b', lineHeight: 1.45 }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px dashed #cbd5e1', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.25rem' }}>
                      <div>
                        <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0f172a' }}>
                          {srv.price}
                        </span>
                        <span style={{ fontSize: '0.85rem', color: '#64748b', marginLeft: '0.35rem' }}>
                          {srv.pricePeriod}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <Button
                        variant="primary"
                        onClick={() => handleCTA(`Đăng ký ${srv.title}`)}
                        style={{ width: '100%', fontWeight: 700, padding: '0.75rem', justifyContent: 'center' }}
                      >
                        Đăng ký tư vấn gói này
                      </Button>

                      <button
                        type="button"
                        onClick={() => navigate(srv.slug)}
                        style={{
                          width: '100%',
                          background: 'none',
                          border: 'none',
                          color: 'var(--color-primary-dark)',
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.35rem',
                          padding: '0.5rem'
                        }}
                      >
                        <span>Xem trang chi tiết dịch vụ &amp; quy trình</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* COMPARISON TABLE: LOCALMATE VS TRADITIONAL AGENCIES */}
        <section
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid #e2e8f0',
            padding: '3rem 2.5rem',
            marginBottom: '4.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '0.35rem 0.85rem', borderRadius: '9999px' }}>
              ĐỐI CHIẾU THỰC TẾ
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', margin: '0.75rem 0 0.5rem 0' }}>
              Sự Khác Biệt Giữa LocalMate Và Cách Làm Cũ Kém Hiệu Quả
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Minh bạch 100% về tài chính, công nghệ và quyền sở hữu. Chúng tôi không bao giờ giấu tài khoản làm con tin.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '650px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.9rem', color: '#475569', width: '25%' }}>Tiêu chí</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.9rem', color: '#b91c1c', width: '37.5%', backgroundColor: '#fef2f2', borderRadius: '8px 8px 0 0' }}>Agency truyền thống / Thợ làm dạo</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.9rem', color: '#15803d', width: '37.5%', backgroundColor: '#f0fdf4', borderRadius: '8px 8px 0 0' }}>Chuẩn hóa LocalMate</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1.2rem 1rem', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', verticalAlign: 'top' }}>
                      {row.criteria}
                    </td>
                    <td style={{ padding: '1.2rem 1rem', fontSize: '0.875rem', color: '#7f1d1d', backgroundColor: '#fef2f2', verticalAlign: 'top', lineHeight: 1.55 }}>
                      {row.traditional}
                    </td>
                    <td style={{ padding: '1.2rem 1rem', fontSize: '0.875rem', color: '#14532d', backgroundColor: '#f0fdf4', verticalAlign: 'top', lineHeight: 1.55, fontWeight: 500 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.localmate}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4-STEP STREAMLINED PROCESS */}
        <section
          style={{
            backgroundColor: '#f8fafc',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid #e2e8f0',
            padding: '3rem 2.5rem',
            marginBottom: '4.5rem'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '0.35rem 0.85rem', borderRadius: '9999px' }}>
              QUY TRÌNH THỰC THI
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', margin: '0.75rem 0 0.5rem 0' }}>
              4 Bước Triển Khai Nhanh Gọn &amp; Chắc Chắn
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Làm việc trực tiếp qua Zalo hoặc gặp mặt tại tiệm. Rõ việc, rõ giá trước khi bắt đầu.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: 'var(--radius-xl)', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>01</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Khảo sát &amp; Khám lỗi 0đ</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5 }}>
                Trao đổi về địa bàn phục vụ (bán kính 3–5km), dịch vụ có lãi nhất hoặc rà soát mã lỗi Google Ads bị tạm ngưng hoàn toàn miễn phí.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: 'var(--radius-xl)', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>02</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Setup chuẩn chính ngạch</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5 }}>
                Tạo tài khoản chính chủ bằng Gmail của bạn, hướng dẫn add thẻ riêng, viết mẫu quảng cáo hấp dẫn, gắn nút gọi Hotline và mã đếm cuộc gọi.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: 'var(--radius-xl)', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>03</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Duyệt nội dung &amp; Bật chạy</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5 }}>
                Bạn duyệt toàn bộ mẫu quảng cáo, từ khóa và ngân sách mỗi ngày trước khi bật. Quảng cáo duyệt xong sẽ bắt đầu tiếp cận khách tìm kiếm ngay.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: 'var(--radius-xl)', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>04</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Tối ưu &amp; Báo cáo minh bạch</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5 }}>
                Rà soát Search Terms 48h/lần, loại bỏ ngay các từ khóa bấm nhầm, gửi báo cáo số cuộc gọi thực tế và chi phí trực tiếp trên nhóm Zalo riêng.
              </p>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <section style={{ maxWidth: '850px', margin: '0 auto 4.5rem auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '0.35rem 0.85rem', borderRadius: '9999px' }}>
              HỎI ĐÁP MINH BẠCH
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', margin: '0.75rem 0 0.5rem 0' }}>
              Những Câu Hỏi Thường Gặp Về Chạy Khách &amp; Vận Hành
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Giải đáp cặn kẽ mọi thắc mắc trước khi bạn quyết định đồng hành cùng LocalMate.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: isOpen ? 'var(--color-primary)' : '#0f172a'
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '1.25rem', color: '#64748b', marginLeft: '1rem', flexShrink: 0 }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', fontSize: '0.925rem', color: '#475569', lineHeight: 1.65, borderTop: '1px solid #f1f5f9' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section
          style={{
            backgroundColor: 'var(--color-primary-dark)',
            borderRadius: 'var(--radius-2xl)',
            padding: '3.5rem 2.5rem',
            textAlign: 'center',
            color: '#ffffff'
          }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, marginBottom: '1rem', textWrap: 'pretty' }}>
            Bắt Đầu Có Thêm Khách Gọi Quanh Tiệm Ngay Hôm Nay
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#bbf7d0', maxWidth: '680px', margin: '0 auto 2rem auto', lineHeight: 1.6, textWrap: 'pretty' }}>
            Trao đổi 10 phút qua Zalo, chúng tôi khảo sát địa bàn, lọc từ khóa có người tìm và kiểm tra tài khoản miễn phí cho cơ sở của bạn.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Button
              variant="white"
              size="lg"
              onClick={() => handleCTA('Đăng ký tư vấn Chạy Khách & Vận Hành')}
              style={{ fontWeight: 800, padding: '0.85rem 2rem', fontSize: '1rem', color: 'var(--color-primary-dark)' }}
            >
              Gửi yêu cầu tư vấn 0đ
            </Button>

            <a
              href={`https://zalo.me/${CONTACT_INFO.hotlineRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 2rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              <Phone size={18} color="#ffffff" />
              <span>Zalo: {CONTACT_INFO.hotline}</span>
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
};
