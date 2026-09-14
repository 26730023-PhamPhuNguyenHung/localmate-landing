import React from 'react';
import { Container } from '../ui/Container';
import {
  Sparkles,
  ArrowRight,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Zap,
  Star,
  Quote,
  Clock,
  ChevronRight
} from 'lucide-react';
import { useRouter } from '../layout/Router';

interface FeaturedProjectsSectionProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();

  const projects = [
    {
      id: 'xeo-restaurant',
      slug: 'xeo-restaurant',
      title: 'Quán XÈO — Đặc Sản Bánh Xèo Tôm Nhảy',
      subtitle: 'Đón khách du lịch quốc tế nhờ tốc độ web dưới 0.8s & Google Maps',
      industry: 'Ẩm thực & Nhà hàng Du lịch',
      location: 'Hội An & Đà Nẵng',
      link: '/du-an/xeo-restaurant',
      badge: 'F&B Du Lịch',
      problem: 'Định vị Google Maps lệch 200m dẫn khách vào ngõ cụt, thực đơn ảnh chụp mờ nặng >5MB, khách nước ngoài không thể đặt bàn.',
      solution: 'Xác minh nắn tọa độ GPS chính xác, dựng Sales Hub song ngữ Việt - Anh tải trong 0.7s trên Cloudflare Edge, bộ thẻ QR để bàn nhận đánh giá chân thực.',
      metrics: [
        { label: 'PageSpeed di động', value: '99/100' },
        { label: 'Tốc độ mở trang', value: '0.7s' },
        { label: 'Google Maps', value: 'Top 1' }
      ],
      quote: 'Khách nước ngoài vào quán khen menu mở nhanh và dễ chọn món. Vị trí trên Google Maps giờ chuẩn 100%, không còn cảnh khách gọi điện phàn nàn vì lạc đường.',
      author: 'Anh Tuấn — Chủ sáng lập quán XÈO'
    },
    {
      id: 'nam-phat',
      slug: 'nam-phat',
      title: 'Xưởng Sản Xuất & Thi Công Nội Thất Nam Phát',
      subtitle: 'Tăng gấp đôi lượng khách gọi báo giá xưởng nhờ website chuẩn thực thể',
      industry: 'Thi công nội thất & Xưởng mộc',
      location: 'Đà Nẵng & Quảng Nam',
      link: '/du-an/nam-phat',
      badge: 'Sản Xuất & Xưởng Mộc',
      problem: 'Phụ thuộc bài đăng Facebook cá nhân dễ trôi bài, gửi ảnh qua Zalo bị mờ vỡ nét, không có form dự toán khiến khách e ngại hỏi giá.',
      solution: 'Website catalogue 50+ công trình sắc nét, tích hợp bộ tính dự toán gửi thông báo tức thì về Zalo xưởng, đồng bộ thực thể pháp nhân trên Google.',
      metrics: [
        { label: 'Điểm Lighthouse', value: '98/100' },
        { label: 'Tốc độ tải web', value: '0.9s' },
        { label: 'Khách gọi báo giá', value: '+200%' }
      ],
      quote: 'Trước đây gửi ảnh qua Zalo cho khách thường bị mờ và trôi tin nhắn. Giờ chỉ cần gửi link website là khách xem được tất cả công trình đã làm, khách tin tưởng chốt hợp đồng nhanh hơn nhiều.',
      author: 'Anh Phát — Giám đốc Xưởng Nội Thất Nam Phát'
    },
    {
      id: 'huong-sen',
      slug: 'huong-sen',
      title: 'Hương Sen Traditional Massage & Spa',
      subtitle: 'Lấp đầy lịch đặt chỗ cuối tuần nhờ tối ưu tìm kiếm Local & GEO AI',
      industry: 'Chăm sóc sức khỏe & Spa trị liệu',
      location: 'Hội An',
      link: '/du-an/huong-sen',
      badge: 'Spa & Trị Liệu',
      problem: 'Web WordPress cũ tải mất hơn 6 giây khiến khách thoát liên tục, vắng khách ngày thường và quá tải cuối tuần vì không có đặt lịch online.',
      solution: 'Chuyển sang nền tảng siêu tốc LocalMate (<0.8s), tích hợp form giữ chỗ online có mã xác nhận Zalo, tối ưu GEO để trợ lý AI (ChatGPT/Gemini) ưu tiên gợi ý.',
      metrics: [
        { label: 'Điểm Lighthouse', value: '100/100' },
        { label: 'Tốc độ mở web', value: '0.8s' },
        { label: 'Đặt chỗ online', value: '+85%' }
      ],
      quote: 'Khách nước ngoài khen đặt lịch trên web rất nhanh và tiện. Trước đây dùng web cũ khách vào là thoát vì quay vòng vòng, giờ đổi sang LocalMate web mở vèo một cái, lịch cuối tuần lúc nào cũng kín chỗ.',
      author: 'Chị Mai — Quản lý Hương Sen Spa Hội An'
    }
  ];

  return (
    <section
      className="featured-projects-section"
      id="du-an-tieu-bieu"
      aria-label="3 Dự Án Thực Tế Tiêu Biểu"
      style={{
        backgroundColor: '#edf5f1',
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
        borderBottom: '1px solid var(--color-border)',
        scrollbarGutter: 'stable'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
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
              backgroundColor: '#e2efe7',
              padding: '0.4rem 0.95rem',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={14} color="#0d7647" />
            <span>KẾT QUẢ TRIỂN KHAI THỰC TẾ</span>
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
            3 Dự Án Thực Tế Tiêu Biểu
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
            Không nói lý thuyết chung chung. Đây là các cơ sở kinh doanh địa phương đã cải thiện rõ rệt tốc độ tải trang,
            độ chuẩn xác định vị bản đồ và lượng khách hàng liên hệ thật mỗi ngày.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.75rem',
            marginBottom: '2.5rem'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
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
                {/* Meta Header: Badge + Location */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#0d7647',
                      backgroundColor: '#eaf5ee',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid #bbf7d0'
                    }}
                  >
                    {project.badge}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.8rem',
                      color: '#64748b',
                      fontWeight: 600
                    }}
                  >
                    <MapPin size={13} />
                    {project.location}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    lineHeight: 1.35,
                    marginBottom: '0.5rem'
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#64748b',
                    lineHeight: 1.5,
                    marginBottom: '1.25rem'
                  }}
                >
                  {project.subtitle}
                </p>

                {/* Real Metrics Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '10px',
                    padding: '0.85rem 0.5rem',
                    marginBottom: '1.25rem',
                    border: '1px solid #f1f5f9',
                    textAlign: 'center'
                  }}
                >
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 800,
                          color: '#0d7647',
                          lineHeight: 1.2
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontSize: '0.7rem',
                          color: '#64748b',
                          fontWeight: 600,
                          marginTop: '0.15rem'
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Problem vs Solution snippet */}
                <div style={{ marginBottom: '1.25rem', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  <div style={{ marginBottom: '0.5rem', color: '#dc2626' }}>
                    <strong>Vấn đề:</strong> <span style={{ color: '#475569' }}>{project.problem}</span>
                  </div>
                  <div style={{ color: '#0d7647' }}>
                    <strong>Giải pháp:</strong> <span style={{ color: '#334155' }}>{project.solution}</span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div
                  style={{
                    backgroundColor: '#f1f8f4',
                    borderLeft: '3px solid #0d7647',
                    borderRadius: '0 8px 8px 0',
                    padding: '0.75rem 0.85rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.825rem',
                      fontStyle: 'italic',
                      color: '#1e293b',
                      lineHeight: 1.45,
                      margin: '0 0 0.35rem 0'
                    }}
                  >
                    "{project.quote}"
                  </p>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#0d7647'
                    }}
                  >
                    — {project.author}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={() => navigate(project.link)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#ffffff',
                    color: '#0d7647',
                    borderRadius: '10px',
                    border: '1.5px solid #0d7647',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>Xem chi tiết dự án thực tế</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Projects */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={() => navigate('/du-an')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              backgroundColor: '#ffffff',
              color: '#0f172a',
              borderRadius: '9999px',
              border: '1px solid #cbd5e1',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
            }}
          >
            <span>Khám phá thêm các tình huống & giải pháp theo ngành</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </Container>
    </section>
  );
};
