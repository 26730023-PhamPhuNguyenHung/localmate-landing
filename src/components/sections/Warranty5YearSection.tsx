import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { 
  ShieldCheck, 
  Clock, 
  RefreshCw, 
  Lock, 
  MapPin, 
  PhoneCall, 
  CheckCircle2, 
  XCircle, 
  Headphones, 
  Server, 
  Award,
  Zap
} from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';

interface Warranty5YearSectionProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const Warranty5YearSection: React.FC<Warranty5YearSectionProps> = ({ onOpenConsultForm }) => {
  const pillars = [
    {
      id: '01',
      title: 'Bảo hành mã nguồn & hỗ trợ hạ tầng kỹ thuật',
      subtitle: 'Hạ tầng Cloudflare Edge toàn cầu, tối ưu độ sẵn sàng cao và ổn định',
      desc: 'Mã nguồn tối ưu hiệu năng cao, vận hành trên mạng lưới Cloudflare Edge với chứng chỉ bảo mật SSL tự động. Kiến trúc tĩnh giảm thiểu tối đa sự cố máy chủ, đảm bảo khách truy cập mượt mà và ổn định.',
      icon: Server,
      badge: 'Trụ cột 01 • Hạ tầng Cloudflare',
      tags: ['Uptime 99.99%', 'Chứng chỉ SSL tự động', 'Hạ tầng Cloudflare Edge']
    },
    {
      id: '02',
      title: 'Hỗ trợ sự cố kỹ thuật khẩn cấp trong 2 giờ',
      subtitle: 'Phản hồi Zalo 1-1 nhanh chóng hoặc KTV ghé tận nơi tại địa phương',
      desc: 'Khi có bất kỳ trục trặc nào về kết nối, hiển thị hoặc tiếp nhận cuộc gọi, kỹ thuật viên phụ trách khu vực sẽ tiếp nhận xử lý trong vòng 2 giờ. Nếu cần thiết, nhân sự LocalMate có mặt tận cơ sở để hỗ trợ trực tiếp.',
      icon: Clock,
      badge: 'Trụ cột 02 • Phản ứng khẩn cấp',
      tags: ['KTV địa phương', 'Zalo nhóm riêng 1-1', 'Xử lý trong 2h']
    },
    {
      id: '03',
      title: 'Cập nhật thông tin cơ bản định kỳ miễn phí',
      subtitle: 'Đổi số hotline, cập nhật địa chỉ mới, thay menu món & hình ảnh',
      desc: 'Cơ sở của bạn đổi đầu số, đổi địa chỉ chi nhánh, điều chỉnh bảng giá hay ra mắt món mới? Đừng lo phát sinh chi phí lặt vặt. Chỉ cần gửi thông tin qua Zalo, LocalMate chỉnh sửa và cập nhật lên web/Maps nhanh chóng.',
      icon: RefreshCw,
      badge: 'Trụ cột 03 • Chăm sóc định kỳ',
      tags: ['Đổi hotline & địa chỉ 0đ', 'Thay ảnh menu & giá', 'Không chi phí ẩn']
    },
    {
      id: '04',
      title: 'Bảo vệ an toàn tài sản số và dữ liệu',
      subtitle: 'Hỗ trợ bảo vệ Google Maps, sao lưu mã nguồn và thiết lập bảo mật',
      desc: 'Hỗ trợ giám sát hồ sơ Google Maps trước các đề xuất chỉnh sửa thông tin bất thường. Thiết lập cơ chế sao lưu dữ liệu định kỳ, sẵn sàng khôi phục nhanh chóng khi có sự cố kỹ thuật.',
      icon: Lock,
      badge: 'Trụ cột 04 • An toàn số',
      tags: ['Giám sát hồ sơ Maps', 'Backup định kỳ', 'Chính chủ 100%']
    }
  ];

  const comparisonRows = [
    {
      criteria: 'Trách nhiệm sau khi bàn giao',
      others: 'Kết thúc hợp đồng là dừng hỗ trợ, khó liên hệ khi phát sinh lỗi kỹ thuật',
      localmate: 'Đồng hành kỹ thuật lên đến 5 năm, kỹ thuật viên hỗ trợ trực tiếp 1-1'
    },
    {
      criteria: 'Phí sửa lỗi & cập nhật nhỏ',
      others: 'Mỗi chỉnh sửa nhỏ như đổi số điện thoại hay cập nhật ảnh thường phát sinh phụ phí',
      localmate: 'Hỗ trợ cập nhật thông tin cơ bản định kỳ (hotline, địa chỉ, menu, ưu đãi)'
    },
    {
      criteria: 'Tốc độ xử lý sự cố',
      others: 'Quy trình xử lý qua ticket 24 - 48 giờ, chậm trễ khi hệ thống gặp gián đoạn',
      localmate: 'Cam kết tiếp nhận và hỗ trợ sự cố khẩn cấp trong 2 giờ, có mặt tận nơi khi cần'
    },
    {
      criteria: 'Quyền sở hữu tài sản số',
      others: 'Đơn vị dịch vụ nắm quyền quản trị, thủ tục chuyển giao phức tạp và tốn kém',
      localmate: 'Bàn giao 100% tài khoản chính chủ bằng CCCD/SĐT khách hàng, minh bạch tuyệt đối'
    }
  ];

  const handleConsult = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm('Tư vấn Chính sách Bảo hành 5 năm & Cam kết địa phương');
    } else {
      window.location.href = '#lien-he';
    }
  };

  return (
    <section 
      id="bao-hanh-5-nam" 
      aria-label="Chính Sách Bảo Hành Kỹ Thuật Lên Đến 5 Năm"
      style={{
        backgroundColor: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        padding: '5rem 0',
        position: 'relative'
      }}
    >
      <Container size="lg">
        {/* Header Section */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 3.5rem auto' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#ecfdf5',
              color: '#065f46',
              border: '1px solid #a7f3d0',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}
          >
            <ShieldCheck size={18} color="#059669" />
            Bảo Hành Kỹ Thuật 5 Năm • Cam Kết Bằng Văn Bản
          </div>

          <h2 
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              textWrap: 'pretty'
            }}
          >
            Chính Sách Bảo Hành Kỹ Thuật Lên Đến 5 Năm – Người Đồng Hành Số Đích Thực Tại Địa Phương
          </h2>

          <p 
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              color: '#334155',
              fontWeight: 600,
              lineHeight: 1.6,
              margin: '0 auto',
              textWrap: 'pretty'
            }}
          >
            <strong style={{ color: '#0d7647' }}>Đồng hành kỹ thuật dài hạn cùng sự phát triển của cơ sở kinh doanh</strong>: bảo hành mã nguồn, cấu hình DNS/Cloudflare và hỗ trợ xử lý lỗi kỹ thuật phát sinh trong suốt vòng đời vận hành.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
          {pillars.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Badge & Pillar Number */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span 
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#0d7647',
                        backgroundColor: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px'
                      }}
                    >
                      {item.badge}
                    </span>
                    <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#94a3b8' }}>
                      #{item.id}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                    <div 
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        backgroundColor: '#ecfdf5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#059669',
                        flexShrink: 0
                      }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <h3 
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        lineHeight: 1.35,
                        margin: 0
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <div 
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#0d7647',
                      marginBottom: '0.85rem',
                      lineHeight: 1.4
                    }}
                  >
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p 
                    style={{
                      fontSize: '0.925rem',
                      color: '#475569',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div style={{ borderTop: '1px dashed #e2e8f0', paddingTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#334155',
                        backgroundColor: '#f1f5f9',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px'
                      }}
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Comparison: Others vs LocalMate */}
        <div 
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #cbd5e1',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden',
            marginBottom: '3.5rem'
          }}
        >
          <div 
            style={{
              backgroundColor: '#0f172a',
              color: '#ffffff',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Bảng So Sánh Minh Bạch
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0.25rem 0 0 0' }}>
                Tại Sao Khách Hàng Địa Phương Chọn Đồng Hành Cùng LocalMate?
              </h3>
            </div>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(52, 211, 153, 0.15)',
                border: '1px solid #059669',
                color: '#6ee7b7',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 700
              }}
            >
              <Award size={16} /> Cam kết pháp nhân rõ ràng
            </div>
          </div>

          <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '0.85rem 1rem', fontSize: '0.9rem', fontWeight: 700, color: '#64748b', width: '25%' }}>Tiêu chí</th>
                  <th style={{ padding: '0.85rem 1rem', fontSize: '0.9rem', fontWeight: 700, color: '#ef4444', width: '37.5%' }}>Mô hình triển khai thông thường</th>
                  <th style={{ padding: '0.85rem 1rem', fontSize: '0.95rem', fontWeight: 800, color: '#0d7647', width: '37.5%', backgroundColor: '#f0fdf4', borderRadius: '8px 8px 0 0' }}>LocalMate (Bảo hành 5 năm)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1.15rem 1rem', fontWeight: 700, color: '#0f172a', fontSize: '0.9rem', verticalAlign: 'top' }}>
                      {row.criteria}
                    </td>
                    <td style={{ padding: '1.15rem 1rem', color: '#64748b', fontSize: '0.9rem', verticalAlign: 'top', lineHeight: 1.5 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.others}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1.15rem 1rem', color: '#0f172a', fontSize: '0.925rem', fontWeight: 600, verticalAlign: 'top', backgroundColor: '#f0fdf4', lineHeight: 1.5 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.localmate}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Commitment Banner & Call To Action */}
        <div 
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '2px solid #bbf7d0',
            padding: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            boxShadow: '0 10px 25px -5px rgba(13, 118, 71, 0.08)'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0d7647', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <Zap size={18} />
              CAM KẾT CÓ GIÁ TRỊ PHÁP LÝ &amp; THỰC THI THỰC TẾ
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', lineHeight: 1.3 }}>
              Cơ sở của bạn xứng đáng có một đội kỹ thuật riêng túc trực
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Chúng tôi không coi việc giao web hay xác minh Google Maps là xong việc. Mọi sự cố kỹ thuật, cập nhật thông tin trong suốt 5 năm đều có người thật phụ trách tận tâm.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <Button 
              variant="primary" 
              size="lg" 
              onClick={handleConsult}
              style={{ fontWeight: 800, padding: '0.85rem 1.75rem' }}
            >
              Kích Hoạt Bảo Hành 5 Năm
            </Button>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.5rem',
                backgroundColor: '#f1f5f9',
                color: '#0f172a',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '1px solid #cbd5e1'
              }}
            >
              <PhoneCall size={18} color="#0d7647" />
              Hotline Kỹ Thuật: {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
