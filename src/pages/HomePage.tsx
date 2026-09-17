import React, { useState, useEffect, useRef } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { submitLead } from '../services/leadService';
import '../styles/reference-landing.css';

// SVG Icons mapping exactly to the reference artwork & vector definitions
const iconPaths: Record<string, string> = {
  chat: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H9l-6 3 1.8-5A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/>',
  leaf: '<path d="M20 3C7 3 2 8 5 16c8 4 15-2 15-13Z"/><path d="M3 22 16 8"/>',
  target: '<circle cx="11" cy="13" r="8"/><circle cx="11" cy="13" r="4"/><path d="m11 13 10-10m-5 0h5v5"/>',
  gear: '<path d="m9 3 1-2h4l1 2 3 2 2 1 2 4-2 2v3l1 2-3 4-3-1-2 1H9l-1-2-3-1H3l-2-4 2-2v-3L2 8l3-4 3 1Z"/><circle cx="12" cy="12" r="4"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-9.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  shield: '<path d="m12 2 9 4v6c0 5-5 8-9 10-4-2-9-5-9-10V6Z"/><path d="m7 12 3 3 7-7"/>',
  people: '<circle cx="12" cy="7" r="4"/><path d="M5 22v-4a7 7 0 0 1 14 0v4ZM3 4a4 4 0 0 0 0 8M21 4a4 4 0 0 1 0 8M1 21v-5m22 5v-5"/>',
  coffee: '<path d="M3 9h14v6a6 6 0 0 1-12 0V9Zm14 1h2a3 3 0 0 1 0 6h-2M2 22h18M7 2v3m5-4v4"/>',
  mountain: '<path d="m1 21 8-16 6 10 3-7 5 13Zm5-9 3 2 3-3"/>',
  wrench: '<path d="M21 3a7 7 0 0 1-9 9L4 21a2 2 0 0 1-3-3l9-8a7 7 0 0 1 9-9l-5 5 4 3Z"/>',
  bag: '<path d="M4 8h16l2 14H2Zm4 1V5a4 4 0 0 1 8 0v4"/>',
  mail: '<rect x="2" y="4" width="20" height="17" rx="2"/><path d="m2 6 10 8L22 6"/>',
  phone: '<path d="m5 2 4 5-3 3a15 15 0 0 0 8 8l3-3 5 4c-1 4-4 5-8 3C6 18 1 12 1 6c0-2 2-4 4-4Z"/>',
  bulb: '<path d="M8 18c0-3-4-4-4-9a8 8 0 0 1 16 0c0 5-4 6-4 9ZM8 21h8M10 24h4M12 1V0"/>'
};

const Icon: React.FC<{ name: keyof typeof iconPaths; className?: string }> = ({ name, className }) => {
  return (
    <svg
      className={`icon ${className || ''}`}
      viewBox="0 0 24 25"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: iconPaths[name] || '' }}
    />
  );
};

// Art Crop helper preserving original pixel precision
interface ArtCropProps {
  image: number;
  box: [number, number, number, number]; // [x, y, w, h]
  className?: string;
  role?: string;
  ariaLabel?: string;
  alt?: string;
}

const ArtCrop: React.FC<ArtCropProps> = ({ image, box, className = '', role, ariaLabel, alt = '' }) => {
  const [x, y, w, h] = box;
  return (
    <div
      className={`art ${className}`}
      style={{
        aspectRatio: `${w}/${h}`
      }}
      role={role}
      aria-label={ariaLabel}
    >
      <img
        src={`/images/landing/artwork-${image}.png`}
        alt={alt}
        decoding="async"
        loading={image === 1 ? 'eager' : 'lazy'}
        style={{
          position: 'absolute',
          width: `${(1672 / w) * 100}%`,
          left: `${(-x / w) * 100}%`,
          top: `${(-y / h) * 100}%`,
          maxWidth: 'none',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

// 5 Core Services Data
const servicesData = [
  {
    id: 0,
    title: 'Thiết kế website',
    shortDesc: 'Website chuyên nghiệp, chuẩn SEO, thể hiện rõ giá trị và bản sắc thương hiệu.',
    fullDesc: 'Xây dựng website tốc độ cao, chuẩn mobile-first và chuẩn SEO 2026. Bàn giao đầy đủ quyền quản trị, tự động tối ưu hình ảnh và tích hợp nút gọi/Zalo để khách vào là liên hệ ngay.',
    box: [83, 434, 245, 155] as [number, number, number, number]
  },
  {
    id: 1,
    title: 'Google Maps & Local SEO',
    shortDesc: 'Tối ưu hiển thị trên Google Maps, đưa doanh nghiệp đến gần hơn với khách hàng địa phương.',
    fullDesc: 'Xác minh Maps GPS chính chủ chống cướp quyền, chuẩn hóa NAP (Tên - Địa chỉ - SĐT), đẩy top 3 Google Maps trong bán kính 3-10km và thiết lập bộ QR nhận đánh giá 5 sao từ khách thực.',
    box: [401, 434, 245, 155] as [number, number, number, number]
  },
  {
    id: 2,
    title: 'Google Ads',
    shortDesc: 'Tiếp cận đúng khách hàng tiềm năng, tối ưu chi phí quảng cáo.',
    fullDesc: 'Cài đặt chiến dịch tìm kiếm từ khóa chính xác cao, chặn click ảo tự động, tối ưu trang đích để tăng tối đa cuộc gọi và tin nhắn với ngân sách tiết kiệm nhất.',
    box: [719, 434, 245, 155] as [number, number, number, number]
  },
  {
    id: 3,
    title: 'Content & chăm sóc số',
    shortDesc: 'Xây dựng nội dung hấp dẫn, quản lý kênh và duy trì hiện diện số chuyên nghiệp.',
    fullDesc: 'Viết bài chuẩn SEO đều đặn, thiết kế hình ảnh nhận diện đồng bộ, bảo trì kỹ thuật và sao lưu dữ liệu tự động hàng tuần để website luôn an toàn và tươi mới.',
    box: [1034, 434, 245, 155] as [number, number, number, number]
  },
  {
    id: 4,
    title: 'CRM & Automation',
    shortDesc: 'Quản lý khách hàng hiệu quả, tự động hóa quy trình, tiết kiệm thời gian và tăng doanh thu.',
    fullDesc: 'Hệ thống chuông báo đơn hàng và lead tức thì về Zalo/Telegram cá nhân chỉ sau 3 giây, tự động đồng bộ khách vào Google Sheets và phân loại trạng thái chăm sóc tự động.',
    box: [1349, 434, 245, 155] as [number, number, number, number]
  }
];

// 4 Stories Data
const storiesData = [
  {
    icon: 'coffee' as const,
    category: 'ẨM THỰC & F&B',
    business: 'Quán cà phê / nhà hàng',
    goal: 'Hiện diện hấp dẫn trên Website và Google Maps',
    challenge: 'Khó được khách hàng địa phương tìm thấy và chưa có kênh online chuyên nghiệp.',
    solution: 'Thiết kế website đẹp, tối ưu Google Maps, giúp quán nổi bật và thu hút nhiều khách hơn.',
    box: [35, 414, 393, 285] as [number, number, number, number]
  },
  {
    icon: 'mountain' as const,
    category: 'DU LỊCH & LƯU TRÚ',
    business: 'Homestay / du lịch địa phương',
    goal: 'Tăng khả năng đặt phòng với nội dung thu hút',
    challenge: 'Khó tiếp cận du khách online, thông tin rời rạc, thiếu hình ảnh và nội dung hấp dẫn.',
    solution: 'Thiết kế website, tối ưu Google Maps, xây dựng nội dung và hình ảnh thu hút, tăng khả năng đặt phòng.',
    box: [444, 414, 386, 285] as [number, number, number, number]
  },
  {
    icon: 'wrench' as const,
    category: 'DỊCH VỤ ĐỊA PHƯƠNG',
    business: 'Dịch vụ địa phương',
    goal: 'Tiếp cận khách hàng tiềm năng với quảng cáo và lead tự động',
    challenge: 'Chủ yếu khách quen, khó tìm kiếm khách mới, phụ thuộc vào giới thiệu truyền miệng.',
    solution: 'Chạy quảng cáo Google Ads, tối ưu landing page, thu thập khách hàng tiềm năng và tự động quản lý với CRM.',
    box: [845, 414, 381, 285] as [number, number, number, number]
  },
  {
    icon: 'bag' as const,
    category: 'BÁN LẺ & SME',
    business: 'Shop / SME',
    goal: 'Xây dựng hiện diện số và chăm sóc khách hàng hiệu quả',
    challenge: 'Khó duy trì liên hệ khách hàng, chưa tận dụng tốt kênh online để phát triển.',
    solution: 'Xây dựng website, kết nối đa kênh và triển khai CRM chăm sóc khách hàng, giúp tăng doanh số và giữ chân khách hàng.',
    box: [1244, 414, 392, 285] as [number, number, number, number]
  }
];

// 4 Steps Data
const stepsData = [
  {
    title: 'Trao đổi nhu cầu',
    desc: 'Lắng nghe mục tiêu, hiện trạng và những khó khăn của bạn để hiểu rõ nhu cầu thực tế.',
    box: [77, 523, 320, 223] as [number, number, number, number]
  },
  {
    title: 'Lên giải pháp phù hợp',
    desc: 'Đề xuất giải pháp tối ưu, phù hợp với ngân sách và mục tiêu kinh doanh của bạn.',
    box: [478, 523, 320, 223] as [number, number, number, number]
  },
  {
    title: 'Triển khai nhanh gọn',
    desc: 'Bắt tay thực hiện với lộ trình rõ ràng, minh bạch, luôn cập nhật tiến độ cho bạn.',
    box: [875, 523, 320, 223] as [number, number, number, number]
  },
  {
    title: 'Đồng hành & tối ưu',
    desc: 'Luôn sẵn sàng hỗ trợ, đo lường hiệu quả và liên tục tối ưu để bạn phát triển bền vững.',
    box: [1275, 523, 320, 223] as [number, number, number, number]
  }
];

interface HomePageProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultForm }) => {
  const [modalService, setModalService] = useState<(typeof servicesData)[0] | null>(null);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  // Quote Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    industry: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; text: string }>({
    type: 'idle',
    text: ''
  });

  const dialogRef = useRef<HTMLDialogElement>(null);

  // Modal open/close sync
  useEffect(() => {
    if (modalService || isPolicyModalOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [modalService, isPolicyModalOpen]);

  const handleCloseModal = () => {
    setModalService(null);
    setIsPolicyModalOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormStatus({ type: 'error', text: 'Vui lòng nhập họ tên và số điện thoại.' });
      return;
    }

    setFormStatus({ type: 'loading', text: 'Đang gửi yêu cầu tư vấn...' });

    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        businessName: formData.industry,
        serviceInterest: `Báo giá nhanh: ${formData.industry || 'Chung'}`,
        message: formData.message,
        sourcePage: '/'
      });

      setFormStatus({
        type: 'success',
        text: '✓ Yêu cầu đã được gửi thành công! LocalMate sẽ liên hệ tư vấn trong vòng 15 phút.'
      });
      setFormData({ name: '', phone: '', industry: '', message: '' });
    } catch {
      setFormStatus({
        type: 'error',
        text: 'Chưa thể gửi qua mạng. Bạn có thể gọi hoặc nhắn Zalo trực tiếp tới 0834 422 439.'
      });
    }
  };

  return (
    <div className="reference-landing">
      <SEOHead
        title="LocalMate | Người đồng hành số cho doanh nghiệp địa phương"
        description="Website, Google Maps, Google Ads, content và CRM tự động cho hộ kinh doanh & SME. Bắt tay làm thật, bàn giao rồi mới thanh toán."
        canonicalPath="/"
      />

      <a className="skip-link" href="#main">
        Đến nội dung chính
      </a>

      {/* Main Content Sections */}
      <main id="main">
        {/* SECTION 1: HERO */}
        <section id="home" className="hero section">
          <ArtCrop
            image={1}
            box={[700, 94, 972, 695]}
            className="hero-art"
            role="img"
            ariaLabel="Website và Google Maps của doanh nghiệp địa phương trên laptop, điện thoại"
          />

          <div className="hero-copy">
            <div className="eyebrow-row">
              <span className="eyebrow">LOCALMATE</span>
              <span>— &nbsp;Người đồng hành số cho doanh nghiệp địa phương</span>
            </div>

            <h1>
              Đồng hành số cho<br />
              <em>doanh nghiệp địa phương</em>
            </h1>

            <p className="hero-description">
              Website, Google Maps / Local SEO, Google Ads, content &amp; chăm sóc số, CRM automation – giải pháp toàn diện cho hộ kinh doanh &amp; SME, giúp bạn hiện diện chuyên nghiệp và phát triển bền vững trên môi trường số.
            </p>

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>
                  <Icon name="chat" />
                </span>{' '}
                Nhận tư vấn <span>→</span>
              </a>
              <a className="button outline" href="#services">
                <span>▦</span> Xem dịch vụ
              </a>
            </div>

            <p className="handwritten hero-note">
              Cùng doanh nghiệp địa phương vươn xa hơn<span className="swoosh"></span>
            </p>
          </div>

          <div className="values hero-values" id="hero-values">
            <div className="value">
              <span className="round" aria-hidden="true">
                <Icon name="leaf" />
              </span>
              <div>
                <strong>Dễ bắt đầu</strong>
                <p>Quy trình đơn giản, rõ ràng</p>
              </div>
            </div>
            <div className="value">
              <span className="round orange" aria-hidden="true">
                <Icon name="target" />
              </span>
              <div>
                <strong>Rõ nhu cầu</strong>
                <p>Tư vấn đúng, làm đúng</p>
              </div>
            </div>
            <div className="value">
              <span className="round" aria-hidden="true">
                <Icon name="gear" />
              </span>
              <div>
                <strong>Triển khai thực tế</strong>
                <p>Giải pháp phù hợp, dễ áp dụng</p>
              </div>
            </div>
            <div className="value">
              <span className="round orange" aria-hidden="true">
                <Icon name="heart" />
              </span>
              <div>
                <strong>Đồng hành dài hạn</strong>
                <p>Luôn bên bạn trên hành trình phát triển</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SERVICES */}
        <section id="services" className="services section">
          <p className="handwritten side-note left">
            Giải pháp thực tế<br />
            cho doanh nghiệp địa phương<br />
            vươn xa cùng công nghệ<span className="swoosh"></span>
          </p>

          <div className="section-heading">
            <span className="eyebrow">DỊCH VỤ CỦA LOCALMATE</span>
            <h2>
              Dịch vụ phù hợp cho<br />
              <em>doanh nghiệp địa phương</em>
            </h2>
            <p style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', maxWidth: '820px' }}>
              Giúp hộ kinh doanh &amp; SME xây dựng hiện diện số chuyên nghiệp,<br className="desktop" /> tiếp cận đúng khách hàng và phát triển bền vững trên môi trường số.
            </p>
          </div>

          <div className="service-grid" id="service-grid">
            {servicesData.map((s) => (
              <article key={s.id} className="service-card">
                <ArtCrop image={2} box={s.box} className="service-art" ariaLabel={s.title} />
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <button
                  className="learn-more"
                  aria-label={`Tìm hiểu ${s.title}`}
                  onClick={() => setModalService(s)}
                >
                  Tìm hiểu thêm <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>

          <aside className="service-note">
            <span className="round orange">
              <Icon name="bulb" />
            </span>
            <div>
              <strong>Bạn có thể bắt đầu từ một dịch vụ hoặc kết hợp nhiều dịch vụ</strong>
              <p>Localmate luôn đồng hành và tư vấn giải pháp phù hợp nhất với nhu cầu và ngân sách doanh nghiệp bạn.</p>
            </div>
            <a className="button outline" href="#contact">
              <span>
                <Icon name="chat" />
              </span>{' '}
              &nbsp; Nhận tư vấn ngay &nbsp; →
            </a>
          </aside>
        </section>

        {/* SECTION 3: STORIES */}
        <section id="stories" className="stories section">
          <p className="handwritten side-note left">
            Mỗi doanh nghiệp<br />
            đều có một hành trình<br />
            đáng kể ♡
          </p>
          <p className="handwritten side-note right">
            Cùng viết nên<br />
            câu chuyện thành công<br />
            của bạn ♡
          </p>

          <div className="section-heading">
            <span className="eyebrow">CÂU CHUYỆN KHÁCH HÀNG</span>
            <h2>
              Mỗi ngành nghề, một câu chuyện <em>tăng trưởng riêng</em>
            </h2>
            <p style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', maxWidth: '820px' }}>
              Localmate thấu hiểu đặc thù từng ngành nghề, từ đó thiết kế giải pháp phù hợp giúp bạn<br className="desktop" /> hiện diện đúng nơi, tiếp cận đúng khách hàng và phát triển bền vững.
            </p>
          </div>

          <div className="story-grid" id="story-grid">
            {storiesData.map((st, i) => (
              <article key={i} className="story-card">
                <div className="story-header">
                  <span className="story-icon" aria-hidden="true">
                    <Icon name={st.icon} />
                  </span>
                  <div>
                    <small>{st.category}</small>
                    <h3>{st.business}</h3>
                    <p>{st.goal}</p>
                  </div>
                </div>

                <ArtCrop image={3} box={st.box} className="story-art" ariaLabel={st.business} />

                <div className="story-body">
                  <div className="story-detail">
                    <span className="status-icon" aria-hidden="true">!</span>
                    <div>
                      <strong>Thách thức</strong>
                      <p>{st.challenge}</p>
                    </div>
                  </div>

                  <div className="story-detail solution">
                    <span className="status-icon" aria-hidden="true">✓</span>
                    <div>
                      <strong>Giải pháp cùng Localmate</strong>
                      <p>{st.solution}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a className="button story-cta" href="#contact">
            <span>
              <Icon name="chat" />
            </span>{' '}
            &nbsp; Trao đổi câu chuyện của bạn với Localmate &nbsp; →
          </a>
        </section>

        {/* SECTION 4: PROCESS */}
        <section id="process" className="process section">
          <p className="handwritten side-note left">
            Đơn giản hơn<br />
            Hiệu quả hơn<br />
            Cùng phát triển<span className="swoosh"></span>
          </p>
          <p className="handwritten side-note right">
            Từ nhu cầu thực tế<br />
            đến kết quả thực tế ♡
          </p>

          <div className="section-heading">
            <span className="eyebrow">QUY TRÌNH LÀM VIỆC</span>
            <h2>
              Cách Localmate <em>đồng hành cùng bạn</em>
            </h2>
            <p style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', maxWidth: '820px' }}>
              Biến hành trình chuyển đổi số trở nên đơn giản, rõ ràng và hiệu quả hơn<br className="desktop" /> cho mọi doanh nghiệp địa phương.
            </p>
          </div>

          <div className="process-grid" id="process-grid">
            {stepsData.map((step, idx) => (
              <article key={idx} className="process-card">
                <div className="step-title">
                  <span className="step-number">{idx + 1}</span>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.desc}</p>
                <ArtCrop image={4} box={step.box} className="process-art" ariaLabel={step.title} />
              </article>
            ))}
          </div>

          <div className="values" id="process-values">
            <div className="value">
              <span className="round" aria-hidden="true">
                <Icon name="leaf" />
              </span>
              <div>
                <strong>Dễ hiểu</strong>
                <p>Ngôn ngữ đơn giản, rõ ràng</p>
              </div>
            </div>
            <div className="value">
              <span className="round orange" aria-hidden="true">
                <Icon name="target" />
              </span>
              <div>
                <strong>Rõ đầu việc</strong>
                <p>Minh bạch, thống nhất ngay từ đầu</p>
              </div>
            </div>
            <div className="value">
              <span className="round" aria-hidden="true">
                <Icon name="gear" />
              </span>
              <div>
                <strong>Làm thực tế</strong>
                <p>Tập trung vào kết quả, hiệu quả</p>
              </div>
            </div>
            <div className="value">
              <span className="round orange" aria-hidden="true">
                <Icon name="heart" />
              </span>
              <div>
                <strong>Hỗ trợ lâu dài</strong>
                <p>Luôn bên bạn trên hành trình phát triển</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CONTACT & FAST QUOTE */}
        <section id="contact" className="contact section">
          <div className="contact-copy">
            <p className="handwritten">
              Cùng doanh nghiệp địa phương<br />
              vươn xa hơn<span className="swoosh"></span>
            </p>
            <h2>
              Sẵn sàng bắt đầu<br />
              <em>cùng Localmate?</em>
            </h2>
            <p className="intro">
              Hãy chia sẻ nhu cầu của bạn, đội ngũ Localmate sẽ tư vấn miễn phí và đề xuất giải pháp phù hợp nhất cho doanh nghiệp của bạn.
            </p>

            <div className="benefits" id="benefits">
              <div className="benefit">
                <span className="round" aria-hidden="true">
                  <Icon name="chat" />
                </span>
                <div>
                  <strong>Trao đổi rõ nhu cầu</strong>
                  <p>Lắng nghe và tư vấn tận tâm</p>
                </div>
              </div>
              <div className="benefit">
                <span className="round" aria-hidden="true">
                  <Icon name="shield" />
                </span>
                <div>
                  <strong>Không ép gói</strong>
                  <p>Chỉ đề xuất khi thật sự phù hợp</p>
                </div>
              </div>
              <div className="benefit">
                <span className="round orange" aria-hidden="true">
                  <Icon name="target" />
                </span>
                <div>
                  <strong>Chọn đúng giải pháp</strong>
                  <p>Tối ưu theo mục tiêu thực tế</p>
                </div>
              </div>
              <div className="benefit">
                <span className="round" aria-hidden="true">
                  <Icon name="people" />
                </span>
                <div>
                  <strong>Phù hợp hộ kinh doanh &amp; SME</strong>
                  <p>Giải pháp linh hoạt, dễ triển khai</p>
                </div>
              </div>
            </div>
          </div>

          <form className="quote-form" onSubmit={handleFormSubmit}>
            <div className="form-title">
              <span className="round">
                <Icon name="mail" />
              </span>
              <div>
                <h3>Nhận báo giá nhanh</h3>
                <p>Điền thông tin, Localmate sẽ liên hệ ngay cho bạn!</p>
              </div>
            </div>

            <label>
              <span className="sr-only">Họ và tên</span>
              <input
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Họ và tên *"
                autoComplete="name"
                required
                maxLength={100}
              />
            </label>

            <label>
              <span className="sr-only">Số điện thoại</span>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Số điện thoại *"
                autoComplete="tel"
                required
                pattern="[+0-9 ().-]{9,20}"
                title="Nhập số điện thoại từ 9 đến 20 ký tự"
              />
            </label>

            <label>
              <span className="sr-only">Lĩnh vực kinh doanh</span>
              <select
                name="industry"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                required
              >
                <option value="">Lĩnh vực kinh doanh *</option>
                <option value="Ẩm thực & F&B">Ẩm thực &amp; F&amp;B</option>
                <option value="Du lịch & lưu trú">Du lịch &amp; lưu trú</option>
                <option value="Dịch vụ địa phương">Dịch vụ địa phương</option>
                <option value="Bán lẻ & SME">Bán lẻ &amp; SME</option>
                <option value="Lĩnh vực khác">Lĩnh vực khác</option>
              </select>
            </label>

            <label>
              <span className="sr-only">Nhu cầu của bạn</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Chia sẻ thêm nhu cầu của bạn (nếu có)"
                rows={3}
                maxLength={2000}
              />
            </label>

            <button className="button" type="submit" disabled={formStatus.type === 'loading'}>
              <span>
                <Icon name="chat" />
              </span>{' '}
              &nbsp; {formStatus.type === 'loading' ? 'Đang gửi...' : 'Nhận báo giá nhanh'}
            </button>

            <p className="form-note">
              Thông tin của bạn được bảo mật tuyệt đối và chỉ dùng để tư vấn giải pháp.
            </p>

            {formStatus.text && (
              <p
                className="form-status"
                role="status"
                style={{
                  color: formStatus.type === 'success' ? '#0d7647' : '#b91c1c',
                  fontWeight: 500,
                  marginTop: '10px'
                }}
              >
                {formStatus.text}
              </p>
            )}
          </form>

          <p className="handwritten contact-note">
            Bắt đầu hành trình<br />
            chuyển đổi số ngay hôm nay!
          </p>
        </section>
      </main>

      {/* DETAIL MODAL DIALOG */}
      <dialog
        id="detail-dialog"
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) handleCloseModal();
        }}
      >
        <button className="dialog-close" aria-label="Đóng" onClick={handleCloseModal}>
          ×
        </button>
        <span className="eyebrow">LOCALMATE</span>
        <h2 id="dialog-title">
          {isPolicyModalOpen ? 'Thông tin và quyền riêng tư' : modalService?.title}
        </h2>
        <p id="dialog-description">
          {isPolicyModalOpen
            ? 'LocalMate cam kết bảo mật 100% dữ liệu khách hàng. Mọi thông tin gửi qua biểu mẫu được mã hóa và chỉ dùng cho mục đích tư vấn trực tiếp từ đội ngũ kỹ thuật của LocalMate. Chúng tôi tuyệt đối không cung cấp dữ liệu cho bên thứ ba.'
            : modalService?.fullDesc}
        </p>
        {!isPolicyModalOpen && (
          <a
            className="button"
            href="#contact"
            id="dialog-contact"
            onClick={() => {
              handleCloseModal();
              if (onOpenConsultForm) onOpenConsultForm(modalService?.title);
            }}
          >
            Trao đổi nhu cầu &nbsp; →
          </a>
        )}
      </dialog>
    </div>
  );
};

export default HomePage;
