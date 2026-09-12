import React from 'react';
import { Container } from '../ui/Container';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  KeyRound,
  FileCheck2,
  Smartphone,
  Headphones,
  PhoneCall
} from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';

export const PhilosophySection: React.FC = () => {
  const commitments = [
    {
      num: '01',
      title: 'Tài khoản thuộc về bạn 100%',
      badge: 'Minh bạch quyền sở hữu',
      icon: KeyRound,
      color: '#0d7647',
      bg: '#f0fdf4',
      border: '#bbf7d0',
      lead: 'Tên miền, hosting, Google Maps và mã nguồn đứng tên chính chủ của bạn.',
      detail: 'LocalMate không giam giữ tài khoản hay mã hóa mã nguồn để giữ chân khách hàng. Toàn bộ tài sản số được đăng ký bằng email, số điện thoại chính chủ và bàn giao quyền quản trị cao nhất ngay sau khi hoàn thành.'
    },
    {
      num: '02',
      title: 'Báo giá cố định trước khi làm',
      badge: '0đ chi phí ẩn',
      icon: FileCheck2,
      color: '#0284c7',
      bg: '#f0f9ff',
      border: '#bae6fd',
      lead: 'Chốt phạm vi công việc và báo giá trọn gói bằng văn bản rõ ràng.',
      detail: 'Tuyệt đối không có chiêu trò báo giá thấp rồi vẽ thêm chi phí phát sinh. Mọi hạng mục từ thiết kế, cài đặt đến bảo hành đều được niêm yết minh bạch, bạn biết chính xác số tiền cần trả trước khi bấm làm.'
    },
    {
      num: '03',
      title: 'Nghiệm thu mới thanh toán',
      badge: 'Demo xem trước 0đ',
      icon: Smartphone,
      color: '#d97706',
      bg: '#fffbeb',
      border: '#fde68a',
      lead: 'Duyệt web demo chạy thật trên điện thoại ưng ý rồi mới thanh toán.',
      detail: 'Bạn được trải nghiệm trực tiếp giao diện, bấm thử nút gọi Hotline, nhắn Zalo và kiểm tra tốc độ tải trang dưới 1.5 giây. Khi mọi tính năng hoạt động trơn tru đúng thỏa thuận, bạn mới tiến hành thanh toán.'
    },
    {
      num: '04',
      title: 'Đồng hành kỹ thuật lâu dài',
      badge: 'Cam kết 5 năm',
      icon: Headphones,
      color: '#7c3aed',
      bg: '#f5f3ff',
      border: '#ddd6fe',
      lead: 'Có kỹ thuật viên túc trực hỗ trợ 1-1 qua Zalo suốt 5 năm.',
      detail: 'Không làm theo kiểu "bàn giao xong phủi trách nhiệm". Nhóm hỗ trợ riêng phản hồi trong 15 phút, xử lý sự cố trong 2 giờ, hỗ trợ cập nhật số điện thoại, đổi giá thực đơn và sao lưu dữ liệu định kỳ an toàn.'
    }
  ];

  return (
    <section
      className="section-component why-localmate-section"
      id="cam-ket-minh-bach"
      aria-label="Tại sao chọn LocalMate - 4 Cam kết trung thực & tôn trọng"
      style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(3.5rem, 5.5vw, 5.5rem) 0',
        borderBottom: '1px solid var(--color-border)',
        scrollbarGutter: 'stable'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-teal-dark)',
              backgroundColor: 'var(--color-teal-soft)',
              padding: '0.4rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem'
            }}
          >
            <ShieldCheck size={14} color="var(--color-teal)" />
            <span>TẠI SAO CHỌN LOCALMATE</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
              color: 'var(--color-navy)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1rem',
              textWrap: 'balance'
            }}
          >
            Bốn Cam Kết Trung Thực &amp; Tôn Trọng Người Làm Nghề
          </h2>

          <p
            style={{
              fontSize: '1.025rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.65,
              textWrap: 'pretty',
              margin: '0 auto'
            }}
          >
            Không bán công nghệ phức tạp để vẽ việc, không dùng chiêu trò giữ chân. LocalMate hợp tác sòng phẳng, minh bạch quyền lợi và đồng hành như một phòng kỹ thuật số ngoài của cơ sở bạn.
          </p>
        </div>

        {/* 4 Commitments Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {commitments.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.num}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: item.bg,
                        border: `1px solid ${item.border}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComp size={22} color={item.color} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: item.color,
                        backgroundColor: item.bg,
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        letterSpacing: '0.03em'
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--color-text-muted)',
                      textTransform: 'uppercase'
                    }}
                  >
                    Cam kết {item.num}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--color-navy)',
                      lineHeight: 1.35,
                      marginTop: '0.2rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-navy)',
                      lineHeight: 1.5,
                      marginBottom: '0.65rem'
                    }}
                  >
                    {item.lead}
                  </p>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.6,
                      margin: 0
                    }}
                  >
                    {item.detail}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.8rem',
                    color: item.color,
                    fontWeight: 700
                  }}
                >
                  <CheckCircle2 size={15} />
                  <span>Bảo đảm 100% bằng văn bản</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div
          style={{
            backgroundColor: '#f8faf9',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem'
          }}
        >
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
              Bạn muốn trao đổi thẳng thắn bài toán của mình trước khi quyết định?
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              Kỹ thuật viên LocalMate lắng nghe và tư vấn phương án tiết kiệm nhất qua Zalo hoặc Hotline 24/7.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.7rem 1.4rem',
                backgroundColor: 'var(--color-navy)',
                color: '#ffffff',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.875rem'
              }}
            >
              <PhoneCall size={15} />
              <span>Hotline: {CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={CONTACT_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.7rem 1.4rem',
                backgroundColor: '#ffffff',
                color: 'var(--color-teal-dark)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.875rem'
              }}
            >
              <span>Nhắn Zalo 24/7</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PhilosophySection;
