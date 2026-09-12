import React, { useState } from 'react';
import { Container } from '../ui/Container';
import {
  DollarSign,
  UserCheck,
  ShieldCheck,
  KeyRound,
  MessageSquareText,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Layers,
  Award,
  Clock,
  ExternalLink
} from 'lucide-react';

interface MarketComparisonSectionProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

interface ComparisonCriterion {
  id: string;
  category: string;
  subtitle: string;
  icon: any;
  agency: {
    tag: string;
    headline: string;
    details: string[];
    riskPoint: string;
  };
  localmate: {
    tag: string;
    headline: string;
    details: string[];
    winPoint: string;
  };
}

export const MarketComparisonSection: React.FC<MarketComparisonSectionProps> = ({ onOpenConsultForm }) => {
  const [selectedAspect, setSelectedAspect] = useState<string>('all');

  const criteria: ComparisonCriterion[] = [
    {
      id: 'cost',
      category: '1. Chi phí đầu tư',
      subtitle: 'Ngân sách thực tế & Phí duy trì định kỳ',
      icon: DollarSign,
      agency: {
        tag: 'Chi phí đắt đỏ • Hợp đồng trói buộc',
        headline: '15.000.000đ – 50.000.000đ / tháng',
        details: [
          'Bắt buộc ký hợp đồng Retainer dài hạn 6 – 12 tháng.',
          'Chưa tính ngân sách chạy quảng cáo (phải nạp thêm hàng chục triệu).',
          'Phát sinh phụ phí cho từng module nhỏ: bảo trì, chỉnh sửa ảnh, viết bài.'
        ],
        riskPoint: 'Nặng gánh chi phí cố định hàng tháng dù chưa biết hiệu quả ra sao.'
      },
      localmate: {
        tag: 'Giá từ gốc • Tiết kiệm đến 85%',
        headline: 'Chỉ từ 490k – 2.900.000đ trọn gói',
        details: [
          'Báo giá niêm yết minh bạch, chi trả một lần theo đúng nhu cầu.',
          'Cam kết 0đ chi phí ẩn, 0đ phụ phí duy trì vô lý.',
          'Tối ưu từng đồng ngân sách cho chủ tiệm & hộ kinh doanh địa phương.'
        ],
        winPoint: 'Chi phí linh hoạt từ gốc, phù hợp ngân sách mọi mô hình quán xá & SMB.'
      }
    },
    {
      id: 'implementer',
      category: '2. Người triển khai',
      subtitle: 'Ai là người trực tiếp chịu trách nhiệm cho bạn?',
      icon: UserCheck,
      agency: {
        tag: 'Sale chốt xong đẩy qua intern/fresher',
        headline: 'Giao tiếp gián tiếp qua Ticket & Email',
        details: [
          'Chuyên gia cấp cao chỉ xuất hiện ở buổi pitching chốt hợp đồng.',
          'Sau khi ký, giao việc lại cho thực tập sinh / nhân sự mới làm thử nghiệm.',
          'Cần hỗ trợ phải tạo ticket, xếp hàng chờ đợi cả tuần không ai xử lý ngay.'
        ],
        riskPoint: 'Người trực tiếp làm không hiểu thực tế kinh doanh tại địa phương.'
      },
      localmate: {
        tag: 'Kỹ thuật viên địa phương 1-1',
        headline: 'Có mặt tại chỗ • Lắng nghe & Hỗ trợ tận quán',
        details: [
          'Kỹ thuật viên tại khu vực trực tiếp ghé quán khảo sát và trao đổi.',
          'Nhóm Zalo riêng phản hồi trong 15 – 30 phút, hỗ trợ cấp tốc.',
          'Cầm tay chỉ việc, hướng dẫn chủ quán và nhân viên tự cập nhật dễ dàng.'
        ],
        winPoint: 'Đồng hành như một kỹ thuật viên riêng ngay tại địa phương.'
      }
    },
    {
      id: 'warranty',
      category: '3. Trách nhiệm sau bàn giao',
      subtitle: 'Chính sách chăm sóc & Bảo hành kỹ thuật dài lâu',
      icon: ShieldCheck,
      agency: {
        tag: 'Hết hợp đồng là phủi tay',
        headline: 'Dừng hợp đồng = Dừng mọi hỗ trợ',
        details: [
          'Muốn sửa đổi số hotline, cập nhật menu hay đổi ảnh cũng bị tính phí sửa chữa.',
          'Nếu không gia hạn gói dịch vụ hàng tháng, website bị bỏ xó không ai trông nom.',
          'Gặp sự cố website sập hay Maps bị chơi xấu thì tự chịu trách nhiệm.'
        ],
        riskPoint: 'Khách hàng bị bỏ rơi khi ngừng trả tiền hàng tháng cho agency.'
      },
      localmate: {
        tag: 'Cam kết bảo hành lên đến 5 NĂM',
        headline: 'Người đồng hành số địa phương bền vững',
        details: [
          'Bảo hành vận hành kỹ thuật hệ thống website & Google Maps lên đến 5 NĂM.',
          'Hỗ trợ cập nhật số điện thoại, bảng giá, địa chỉ bất kỳ lúc nào cần.',
          'Đồng hành theo dõi, bảo vệ điểm Maps chống bị đối thủ phá hoại hay cướp quyền.'
        ],
        winPoint: 'Cam kết bảo hành 5 năm độc nhất, đồng hành an tâm dài lâu.'
      }
    },
    {
      id: 'ownership',
      category: '4. Quyền sở hữu tài sản',
      subtitle: 'Tên miền, Hosting, Tài khoản Maps & Dữ liệu khách',
      icon: KeyRound,
      agency: {
        tag: 'Giam lỏng con tin kỹ thuật',
        headline: 'Agency đứng tên toàn bộ tài khoản',
        details: [
          'Tên miền, hosting và trang quản trị đăng ký dưới tên công ty agency.',
          'Khách hàng muốn chuyển đi hoặc đổi nhà cung cấp bị làm khó dễ hoặc đòi phí chuộc.',
          'Rủi ro mất trắng dữ liệu khách hàng nếu agency ngừng hoạt động.'
        ],
        riskPoint: 'Chủ quán hoàn toàn bị lệ thuộc, không có quyền tự quyết tài sản số của mình.'
      },
      localmate: {
        tag: 'Chính chủ 100% bằng CCCD & Gmail',
        headline: 'Bàn giao trọn vẹn • Khách làm chủ 100%',
        details: [
          'Đăng ký trực tiếp bằng CCCD, số điện thoại và Gmail chính chủ của khách.',
          'Bàn giao 100% tài khoản quản trị domain, hosting, mã nguồn và Google Maps.',
          'Bạn nắm giữ toàn bộ chìa khóa gốc, toàn quyền chuyển nhượng hoặc quản lý vĩnh viễn.'
        ],
        winPoint: 'Tài sản số của bạn thuộc về bạn 100%, an toàn và minh bạch tuyệt đối.'
      }
    },
    {
      id: 'language',
      category: '5. Ngôn ngữ & Tư vấn',
      subtitle: 'Cách trao đổi & Đo lường giá trị thực tế',
      icon: MessageSquareText,
      agency: {
        tag: 'Thuật ngữ công nghệ phức tạp',
        headline: 'Báo cáo biểu đồ ảo: Impression, CTR, GEO, AEO',
        details: [
          'Dùng các thuật ngữ hoa mỹ (AEO, Search Generative, Funnel, Attribution, Entity AI...).',
          'Gửi báo cáo dày đặc số liệu ảo (lượt xem, tương tác) nhưng quán vẫn vắng khách.',
          'Né tránh câu hỏi thực tế: Tháng này tiệm có thêm bao nhiêu người gọi và ghé mua?'
        ],
        riskPoint: 'Làm chủ tiệm hoang mang, mất tiền vào những chỉ số vô thưởng vô phạt.'
      },
      localmate: {
        tag: 'Nói tiếng bình dân • Đo bằng khách thật',
        headline: 'Chỉ rõ khách gọi từ đâu • Tăng đơn thực tế',
        details: [
          'Nói chuyện bằng ngôn ngữ đời thường, giải thích cặn kẽ, không giấu nghề.',
          'Tối ưu nút gọi điện nhanh, nút nhắn tin Zalo, nút chỉ đường Maps tới tiệm.',
          'Đo lường trực diện: Có bao nhiêu khách bấm gọi? Bao nhiêu khách ghé ăn/mua hàng?'
        ],
        winPoint: 'Thực tế, dễ hiểu, đo lường bằng khách hàng thật và doanh thu đổ về quán.'
      }
    },
    {
      id: 'risk',
      category: '6. Rủi ro thanh toán',
      subtitle: 'Chính sách đặt cọc & Điều kiện nghiệm thu',
      icon: CheckCircle2,
      agency: {
        tag: 'Bắt cọc 50% – 100% mới làm',
        headline: 'Chưa thấy sản phẩm đã phải xuống tiền',
        details: [
          'Bắt buộc đặt cọc trước từ 50% đến 100% hợp đồng mới bắt đầu thiết kế.',
          'Nếu sản phẩm làm ra không vừa ý hoặc xấu xí, khách vẫn mất cọc.',
          'Rủi ro tài chính khách hàng phải tự gánh vác hoàn toàn.'
        ],
        riskPoint: 'Chi tiền triệu trước mà không hề biết trước kết quả sẽ ra sao.'
      },
      localmate: {
        tag: 'Dựng Demo xem thử 0đ • Rủi ro bằng 0',
        headline: 'Nghiệm thu ưng ý 100% mới thanh toán',
        details: [
          'Kỹ thuật viên dựng sẵn bản web mẫu ngay trên hình ảnh và thông tin của quán.',
          'Chủ tiệm bấm thử, trải nghiệm thực tế trên điện thoại hoàn toàn miễn phí.',
          'Chỉ khi khách hàng kiểm tra, nghiệm thu và thực sự hài lòng mới tiến hành thanh toán.'
        ],
        winPoint: 'Xem trước demo 0đ không rủi ro, chỉ trả tiền khi đã tận mắt thấy ưng ý.'
      }
    }
  ];

  const filteredCriteria = selectedAspect === 'all'
    ? criteria
    : criteria.filter((item) => item.id === selectedAspect);

  const handleAction = (serviceName: string) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(serviceName);
    } else {
      window.location.href = '/lien-he';
    }
  };

  return (
    <section
      id="so-sanh-thi-truong"
      style={{
        backgroundColor: '#ffffff',
        padding: '4.5rem 0',
        borderTop: '1px solid #e5e7eb',
        borderBottom: '1px solid #e5e7eb'
      }}
    >
      <Container size="wide">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 3rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#0d7647',
              backgroundColor: '#ecfdf5',
              border: '1px solid #a7f3d0',
              padding: '0.4rem 0.95rem',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={15} color="#0d7647" />
            <span>BẢNG ĐỐI CHIẾU THỰC TẾ & ĐỊNH VỊ THỊ TRƯỜNG</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
              fontWeight: 800,
              color: '#111827',
              lineHeight: 1.25,
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}
          >
            Agency Lớn Xa Vời Hay <span style={{ color: '#0d7647' }}>Người Đồng Hành Số Địa Phương?</span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#4b5563',
              lineHeight: 1.6,
              maxWidth: '760px',
              margin: '0 auto'
            }}
          >
            Đừng để những thuật ngữ công nghệ hoa mỹ che lấp bài toán kinh doanh cốt lõi. Xem bảng so sánh minh bạch 6 khía cạnh sống còn giữa mô hình Agency đắt đỏ và LocalMate dành riêng cho chủ tiệm & hộ kinh doanh SMB.
          </p>
        </div>

        {/* Quick Highlights Summary Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}
        >
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.15rem 1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem'
            }}
          >
            <div
              style={{
                backgroundColor: '#dcfce7',
                color: '#0d7647',
                borderRadius: '8px',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <DollarSign size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Chi phí đầu tư</div>
              <div style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 800, marginTop: '0.15rem' }}>
                Từ 490k – 2.9tr trọn gói
              </div>
              <div style={{ fontSize: '0.78rem', color: '#0d7647', fontWeight: 600, marginTop: '0.2rem' }}>
                Tiết kiệm 85% so với Agency 15-50tr
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.15rem 1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem'
            }}
          >
            <div
              style={{
                backgroundColor: '#dcfce7',
                color: '#0d7647',
                borderRadius: '8px',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <UserCheck size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Người hỗ trợ</div>
              <div style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 800, marginTop: '0.15rem' }}>
                Kỹ thuật viên tại chỗ 1-1
              </div>
              <div style={{ fontSize: '0.78rem', color: '#0d7647', fontWeight: 600, marginTop: '0.2rem' }}>
                Đến tận quán, không đùn đẩy ticket
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.15rem 1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem'
            }}
          >
            <div
              style={{
                backgroundColor: '#dcfce7',
                color: '#0d7647',
                borderRadius: '8px',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Cam kết trách nhiệm</div>
              <div style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 800, marginTop: '0.15rem' }}>
                Bảo hành kỹ thuật 5 NĂM
              </div>
              <div style={{ fontSize: '0.78rem', color: '#0d7647', fontWeight: 600, marginTop: '0.2rem' }}>
                Hết hợp đồng vẫn chăm sóc như người nhà
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.15rem 1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem'
            }}
          >
            <div
              style={{
                backgroundColor: '#dcfce7',
                color: '#0d7647',
                borderRadius: '8px',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <CheckCircle2 size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Rủi ro xuống tiền</div>
              <div style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 800, marginTop: '0.15rem' }}>
                Dựng Demo xem thử 0đ
              </div>
              <div style={{ fontSize: '0.78rem', color: '#0d7647', fontWeight: 600, marginTop: '0.2rem' }}>
                Hài lòng 100% mới thanh toán
              </div>
            </div>
          </div>
        </div>

        {/* Aspect Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}
        >
          <button
            onClick={() => setSelectedAspect('all')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: selectedAspect === 'all' ? 700 : 600,
              backgroundColor: selectedAspect === 'all' ? '#0d7647' : '#ffffff',
              color: selectedAspect === 'all' ? '#ffffff' : '#374151',
              border: selectedAspect === 'all' ? '1px solid #0d7647' : '1px solid #d1d5db',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Tất cả 6 khía cạnh
          </button>
          {criteria.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedAspect(c.id)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: selectedAspect === c.id ? 700 : 600,
                backgroundColor: selectedAspect === c.id ? '#0d7647' : '#ffffff',
                color: selectedAspect === c.id ? '#ffffff' : '#374151',
                border: selectedAspect === c.id ? '1px solid #0d7647' : '1px solid #d1d5db',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {c.category}
            </button>
          ))}
        </div>

        {/* Desktop / Tablet Column Header Bar */}
        <div
          className="comparison-table-header"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(260px, 320px) 1fr 1fr',
            gap: '1.25rem',
            padding: '1rem 1.5rem',
            backgroundColor: '#f1f5f9',
            borderRadius: '12px',
            marginBottom: '1rem',
            alignItems: 'center',
            border: '1px solid #e2e8f0'
          }}
        >
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Khía Cạnh So Sánh
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#ef4444'
              }}
            />
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#334155' }}>
              Agency Lớn / Truyền Thống
            </span>
            <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>(Mô hình tập đoàn, giá cao)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981'
              }}
            />
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0d7647' }}>
              Mô Hình LocalMate
            </span>
            <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>(Kỹ thuật viên tại chỗ)</span>
          </div>
        </div>

        {/* 6 Criteria Comparison Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredCriteria.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="comparison-row-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(260px, 320px) 1fr 1fr',
                  gap: '1.25rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
                  transition: 'box-shadow 0.2s ease, border-color 0.2s ease'
                }}
              >
                {/* Column 1: Criterion Category Info */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRight: '1px solid #f1f5f9',
                    paddingRight: '1rem'
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: '#ecfdf5',
                        color: '#0d7647',
                        marginBottom: '0.85rem'
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: '0.35rem',
                        lineHeight: 1.3
                      }}
                    >
                      {item.category}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                      {item.subtitle}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: '1.25rem',
                      padding: '0.6rem 0.8rem',
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px',
                      border: '1px dashed #cbd5e1',
                      fontSize: '0.78rem',
                      color: '#475569',
                      fontWeight: 600
                    }}
                  >
                    Mục tiêu sống còn: Giúp chủ tiệm kiểm soát toàn bộ chất lượng & ngân sách.
                  </div>
                </div>

                {/* Column 2: Big Agency Reality */}
                <div
                  style={{
                    backgroundColor: '#fff7ed',
                    border: '1px solid #fed7aa',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#c2410c',
                        backgroundColor: '#ffedd5',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <XCircle size={13} />
                      <span>{item.agency.tag}</span>
                    </div>

                    <div
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 800,
                        color: '#9a3412',
                        marginBottom: '0.75rem',
                        lineHeight: 1.35
                      }}
                    >
                      {item.agency.headline}
                    </div>

                    <ul style={{ paddingLeft: '1.15rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {item.agency.details.map((detail, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '0.875rem', color: '#431407', lineHeight: 1.5 }}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#ffedd5',
                      borderRadius: '8px',
                      borderLeft: '3px solid #ea580c',
                      fontSize: '0.8rem',
                      color: '#9a3412',
                      fontWeight: 600
                    }}
                  >
                    <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Hệ quả: {item.agency.riskPoint}</span>
                  </div>
                </div>

                {/* Column 3: LocalMate Advantage */}
                <div
                  style={{
                    backgroundColor: '#f0fdf4',
                    border: '2px solid #86efac',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '12px',
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      letterSpacing: '0.04em'
                    }}
                  >
                    LỰA CHỌN TỐI ƯU
                  </div>

                  <div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#0d7647',
                        backgroundColor: '#dcfce7',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <CheckCircle2 size={13} />
                      <span>{item.localmate.tag}</span>
                    </div>

                    <div
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 800,
                        color: '#065f46',
                        marginBottom: '0.75rem',
                        lineHeight: 1.35
                      }}
                    >
                      {item.localmate.headline}
                    </div>

                    <ul style={{ paddingLeft: '1.15rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {item.localmate.details.map((detail, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '0.875rem', color: '#064e3b', lineHeight: 1.5, fontWeight: 500 }}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#dcfce7',
                      borderRadius: '8px',
                      borderLeft: '3px solid #0d7647',
                      fontSize: '0.8rem',
                      color: '#065f46',
                      fontWeight: 700
                    }}
                  >
                    <CheckCircle2 size={15} style={{ flexShrink: 0, marginTop: '2px', color: '#0d7647' }} />
                    <span>Lợi thế: {item.localmate.winPoint}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout & Action Box */}
        <div
          style={{
            marginTop: '3.5rem',
            backgroundColor: '#f8fafc',
            border: '2px dashed #cbd5e1',
            borderRadius: '20px',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            maxWidth: '960px',
            margin: '3.5rem auto 0 auto'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#0d7647',
              backgroundColor: '#ecfdf5',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              marginBottom: '0.85rem'
            }}
          >
            <Sparkles size={16} /> BẢO CHỨNG BẰNG HÀNH ĐỘNG THỰC TẾ
          </div>

          <h3
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '0.75rem'
            }}
          >
            Không Cần Tin Lời Quảng Cáo — Hãy Xem Bản Demo Thực Tế 0đ
          </h3>

          <p
            style={{
              fontSize: '0.95rem',
              color: '#475569',
              maxWidth: '680px',
              margin: '0 auto 1.5rem auto',
              lineHeight: 1.6
            }}
          >
            LocalMate cử kỹ thuật viên dựng trước bản mẫu website và định vị Google Maps hoàn toàn miễn phí trên chính thông tin tiệm của bạn. Bạn bấm thử, thấy đúng ý 100% rồi mới quyết định.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <button
              onClick={() => handleAction('Yêu cầu Dựng Demo 0đ xem thử')}
              style={{
                backgroundColor: '#0d7647',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '0.85rem 1.75rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 12px rgba(13, 118, 71, 0.25)',
                transition: 'background-color 0.2s ease, transform 0.1s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0a5d37';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0d7647';
              }}
            >
              <span>Dựng Demo 0đ Xem Thử Ngay</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => handleAction('Tư vấn kỹ thuật viên địa phương 1-1')}
              style={{
                backgroundColor: '#ffffff',
                color: '#1e293b',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                padding: '0.85rem 1.5rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'border-color 0.2s ease, background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.borderColor = '#94a3b8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#cbd5e1';
              }}
            >
              <UserCheck size={18} color="#0d7647" />
              <span>Gặp Kỹ Thuật Viên Tại Chỗ (1-1)</span>
            </button>
          </div>
        </div>
      </Container>

      {/* Embedded CSS for seamless mobile responsiveness */}
      <style>{`
        @media (max-width: 860px) {
          .comparison-table-header {
            display: none !important;
          }
          .comparison-row-card {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            padding: 1.15rem !important;
          }
          .comparison-row-card > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid #e2e8f0 !important;
            padding-right: 0 !important;
            padding-bottom: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};
