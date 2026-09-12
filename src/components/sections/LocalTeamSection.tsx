import React from 'react';
import { Container } from '../ui/Container';
import {
  Server,
  MapPin,
  Bot,
  Headphones,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  UserCheck,
  FileCheck,
  Clock,
  Search,
  ExternalLink
} from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';
import { useRouter } from '../layout/Router';

export interface LocalTeamSectionProps {
  isSummary?: boolean;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const LocalTeamSection: React.FC<LocalTeamSectionProps> = ({
  isSummary = false,
  onOpenConsultForm
}) => {
  const { navigate } = useRouter();

  const technicalRoles = [
    {
      id: 'infrastructure',
      role: 'Kỹ thuật viên Trưởng Hạ Tầng & Mã Nguồn',
      leadBadge: 'Hạ tầng & Bảo mật',
      icon: Server,
      accentColor: '#0d7647',
      accentBg: '#f0fdf4',
      accentBorder: '#bbf7d0',
      keyMetric: '< 0.8s tải trang | 5 năm bảo hành',
      mainDuty: 'Phụ trách bảo mật Cloudflare, tốc độ tải trang < 0.8s và bảo hành mã nguồn 5 năm.',
      deliverables: [
        'Cấu hình Cloudflare Enterprise Edge & SSL/TLS chuẩn ngân hàng',
        'Tối ưu Core Web Vitals, nén ảnh AVIF/WebP siêu tốc',
        'Bảo dưỡng cấu trúc mã nguồn, chống DDoS & trực tiếp bảo hành 5 năm'
      ],
      commitProof: 'Cam kết Uptime 99.9% — Độc lập hosting, không mã hóa mã nguồn'
    },
    {
      id: 'local-seo-maps',
      role: 'Kỹ thuật viên Bản Đồ & Local SEO',
      leadBadge: 'Định vị & Maps',
      icon: MapPin,
      accentColor: '#0284c7',
      accentBg: '#f0f9ff',
      accentBorder: '#bae6fd',
      keyMetric: 'GPS chính xác 100% | Bán kính 5-15km',
      mainDuty: 'Phụ trách xác minh Google Maps, đồng bộ định vị GPS và tối ưu bán kính phủ sóng.',
      deliverables: [
        'Xác minh chính chủ Google Business Profile qua video thực địa',
        'Cố định tọa độ GPS micro-location, chống cắm cờ phá hoại vị trí',
        'Đồng bộ NAP (Tên - Địa chỉ - SĐT) phủ sóng tìm kiếm khu vực lân cận'
      ],
      commitProof: 'Bàn giao quyền Chủ sở hữu chính (Primary Owner) vào Gmail của bạn'
    },
    {
      id: 'ai-geo-data',
      role: 'Chuyên viên Dữ Liệu AI Search & GEO',
      leadBadge: 'AI Search & GEO',
      icon: Bot,
      accentColor: '#7c3aed',
      accentBg: '#f5f3ff',
      accentBorder: '#ddd6fe',
      keyMetric: 'Schema JSON-LD | llms.txt chuẩn hóa',
      mainDuty: 'Phụ trách cấu trúc Schema JSON-LD, file llms.txt và thử nghiệm trích dẫn trên ChatGPT/Gemini.',
      deliverables: [
        'Xây dựng cấu trúc dữ liệu LocalBusiness Schema, Menu & Bảng giá máy đọc',
        'Khởi tạo tệp llms.txt tối ưu cho các mô hình ngôn ngữ lớn (LLMs)',
        'Test prompt đối soát trích dẫn thực tế trên ChatGPT, Gemini & Perplexity'
      ],
      commitProof: 'Máy học hiểu đúng ngành nghề, địa chỉ và giá dịch vụ của cơ sở'
    },
    {
      id: 'operations-support',
      role: 'Kỹ thuật viên Vận Hành & Hỗ Trợ 1-1',
      leadBadge: 'Hỗ trợ 1-1 & Thực địa',
      icon: Headphones,
      accentColor: '#d97706',
      accentBg: '#fffbeb',
      accentBorder: '#fde68a',
      keyMetric: 'Phản hồi 15-30 phút | Ghé tiệm tận nơi',
      mainDuty: 'Trực Zalo hỗ trợ giải quyết sự cố trong 15-30 phút, ghé tiệm khảo sát thực tế.',
      deliverables: [
        'Túc trực nhóm Zalo kỹ thuật 1-1, xử lý sự cố cấp tốc trong 15-30 phút',
        'Đến trực tiếp cửa hàng/cơ sở chụp ảnh thực tế và kiểm tra định vị',
        'Cầm tay chỉ việc, hỗ trợ sửa giá thực đơn, số hotline không tính phí ẩn'
      ],
      commitProof: 'Hỗ trợ người thật việc thật — Không dùng bot trả lời tự động'
    }
  ];

  const threeNoCommitments = [
    {
      title: 'KHÔNG giấu mặt đẩy việc cho cộng tác viên bên ngoài',
      desc: '100% dự án do đội ngũ kỹ thuật viên in-house LocalMate trực tiếp đảm nhiệm và kiểm thử. Chúng tôi nắm từng dòng mã nguồn, hiểu sâu từng tiệm địa phương và chịu trách nhiệm tận cùng.',
      highlight: '100% nhân sự in-house'
    },
    {
      title: 'KHÔNG thu tiền rồi biến mất',
      desc: 'Dựng website demo 0đ xem trước trên điện thoại. Bạn kiểm tra thực tế ưng ý rồi mới thanh toán. Hợp đồng pháp nhân kinh tế rõ ràng, có bảo hành 5 năm và hóa đơn tài chính đầy đủ.',
      highlight: 'Nghiệm thu mới thanh toán'
    },
    {
      title: 'KHÔNG giam giữ tài khoản hay mật khẩu của khách hàng',
      desc: 'Toàn bộ tên miền, Google Business Profile, hosting Cloudflare đều đăng ký bằng thông tin chính chủ của bạn. LocalMate bàn giao toàn quyền quản trị, bạn là người làm chủ 100% tài sản số.',
      highlight: 'Chính chủ 100%'
    }
  ];

  return (
    <section
      className="section-component local-team-section"
      id="doi-ngu-ky-thuat"
      aria-label="Đội ngũ kỹ thuật viên thực chiến tại địa phương LocalMate"
      style={{
        backgroundColor: isSummary ? '#f8fafc' : '#ffffff',
        padding: 'clamp(3.5rem, 5.5vw, 5.5rem) 0',
        borderBottom: '1px solid var(--color-border)',
        scrollbarGutter: 'stable'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3.25rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-primary-dark)',
              backgroundColor: 'var(--color-primary-soft)',
              padding: '0.4rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem',
              border: '1px solid var(--color-primary-border)'
            }}
          >
            <UserCheck size={14} color="var(--color-primary)" />
            <span>KỸ THUẬT VIÊN THỰC CHIẾN IN-HOUSE 100%</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
              color: 'var(--color-navy)',
              fontWeight: 800,
              lineHeight: 1.28,
              marginBottom: '1rem',
              textWrap: 'balance'
            }}
          >
            Làm Việc Trực Tiếp Với Kỹ Thuật Viên Thật
            <br />
            <span style={{ color: 'var(--color-primary)' }}>Không Qua Sale Ép Hợp Đồng, Không Bán Thầu Trung Gian</span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-text)',
              lineHeight: 1.68,
              textWrap: 'pretty',
              margin: '0 auto',
              fontWeight: 500
            }}
          >
            <strong>"Chúng tôi không có phòng ban sale gọi điện ép ký hợp đồng. Bạn làm việc trực tiếp với những kỹ thuật viên thật, phụ trách từng việc cụ thể."</strong> Kỹ thuật viên LocalMate lắng nghe bài toán thực tế, khảo sát tận tiệm và giải quyết triệt để từng điểm nghẽn kỹ thuật.
          </p>

          {/* Quick Stats Strip */}
          <div
            style={{
              marginTop: '1.75rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.25rem'
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--color-navy)',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
              }}
            >
              <CheckCircle2 size={15} color="#0d7647" /> 100% Nhân sự in-house có mặt tại địa phương
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--color-navy)',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
              }}
            >
              <Clock size={15} color="#0284c7" /> Phản hồi Zalo sự cố 15-30 phút
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--color-navy)',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
              }}
            >
              <ShieldCheck size={15} color="#d97706" /> Bảo hành mã nguồn 5 năm độc lập
            </span>
          </div>
        </div>

        {/* 4 Technical Roles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {technicalRoles.map((member, idx) => {
            const IconComp = member.icon;
            return (
              <div
                key={member.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(1.5rem, 2vw, 1.85rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Bar: Icon & Category Badge */}
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
                        width: 48,
                        height: 48,
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: member.accentBg,
                        border: `1px solid ${member.accentBorder}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComp size={24} color={member.accentColor} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: member.accentColor,
                        backgroundColor: member.accentBg,
                        border: `1px solid ${member.accentBorder}`,
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        letterSpacing: '0.02em'
                      }}
                    >
                      Vị trí 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Key Metric */}
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: 'var(--color-navy)',
                      lineHeight: 1.35,
                      marginBottom: '0.5rem'
                    }}
                  >
                    {member.role}
                  </h3>

                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: member.accentColor,
                      backgroundColor: member.accentBg,
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-md)',
                      marginBottom: '0.85rem'
                    }}
                  >
                    ⚡ {member.keyMetric}
                  </div>

                  {/* Duty Description */}
                  <p
                    style={{
                      fontSize: '0.925rem',
                      fontWeight: 600,
                      color: 'var(--color-navy)',
                      lineHeight: 1.55,
                      marginBottom: '1rem'
                    }}
                  >
                    {member.mainDuty}
                  </p>

                  {/* Deliverables List */}
                  {!isSummary && (
                    <div
                      style={{
                        borderTop: '1px dashed var(--color-border)',
                        paddingTop: '0.85rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          color: 'var(--color-text-muted)',
                          marginBottom: '0.6rem',
                          letterSpacing: '0.04em'
                        }}
                      >
                        Nhiệm vụ trực tiếp phụ trách:
                      </div>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.45rem'
                        }}
                      >
                        {member.deliverables.map((item, dIdx) => (
                          <li
                            key={dIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.45rem',
                              fontSize: '0.85rem',
                              color: 'var(--color-text)',
                              lineHeight: 1.45
                            }}
                          >
                            <CheckCircle2
                              size={14}
                              color={member.accentColor}
                              style={{ flexShrink: 0, marginTop: '0.15rem' }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom Proof Tag */}
                <div
                  style={{
                    marginTop: '1rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid var(--color-border)',
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontWeight: 600
                  }}
                >
                  <Lock size={13} color={member.accentColor} />
                  <span>{member.commitProof}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Khối Cam Kết 3 KHÔNG */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '2px solid #ef4444',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            boxShadow: '0 4px 16px rgba(239, 68, 68, 0.06)',
            marginBottom: '3rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '1.75rem',
              borderBottom: '1px solid #fee2e2',
              paddingBottom: '1.25rem'
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#b91c1c',
                  backgroundColor: '#fef2f2',
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '0.5rem'
                }}
              >
                <XCircle size={14} color="#dc2626" /> BẢO CHỨNG ĐẠO ĐỨC NGHỀ NGHIỆP
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)',
                  fontWeight: 800,
                  color: 'var(--color-navy)',
                  margin: 0
                }}
              >
                Khối Cam Kết "3 KHÔNG" Bắt Buộc Tại LocalMate
              </h3>
            </div>

            <div
              style={{
                fontSize: '0.875rem',
                color: '#b91c1c',
                fontWeight: 700,
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              Ghi rõ vào phụ lục hợp đồng dịch vụ
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '1.5rem'
            }}
          >
            {threeNoCommitments.map((noItem, nIdx) => (
              <div
                key={nIdx}
                style={{
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.35rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.65rem'
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        backgroundColor: '#ef4444',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 900,
                        flexShrink: 0
                      }}
                    >
                      {nIdx + 1}
                    </div>
                    <h4
                      style={{
                        fontSize: '1.025rem',
                        fontWeight: 800,
                        color: '#991b1b',
                        margin: 0,
                        lineHeight: 1.35
                      }}
                    >
                      {noItem.title}
                    </h4>
                  </div>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#450a0a',
                      lineHeight: 1.6,
                      margin: 0
                    }}
                  >
                    {noItem.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1rem',
                    paddingTop: '0.65rem',
                    borderTop: '1px solid #fca5a5',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: '#991b1b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <CheckCircle2 size={13} color="#dc2626" />
                  <span>Nguyên tắc: {noItem.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action / Connect Banner */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.5rem, 3vw, 2.25rem)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <h4
              style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--color-navy)',
                marginBottom: '0.35rem'
              }}
            >
              Bạn muốn trao đổi thẳng thắn với Kỹ thuật viên phụ trách khu vực của mình?
            </h4>
            <p
              style={{
                fontSize: '0.925rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.55,
                margin: 0
              }}
            >
              Không qua sale tư vấn vòng vo. Kỹ thuật viên trực tiếp kiểm tra tình trạng Google Maps, đo tốc độ website hiện tại và đề xuất giải pháp tiết kiệm nhất.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '0.85rem',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            {onOpenConsultForm && (
              <button
                type="button"
                onClick={() => onOpenConsultForm('Trao đổi cùng Kỹ thuật viên In-house')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.35rem',
                  backgroundColor: 'var(--color-primary)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(13, 118, 71, 0.2)'
                }}
              >
                <span>Hẹn Kỹ Thuật Viên Khảo Sát</span>
                <ArrowRight size={15} />
              </button>
            )}

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.75rem 1.25rem',
                backgroundColor: 'var(--color-navy)',
                color: '#ffffff',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem'
              }}
            >
              <PhoneCall size={15} />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={CONTACT_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.75rem 1.25rem',
                backgroundColor: '#f8fafc',
                color: 'var(--color-primary-dark)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem'
              }}
            >
              <span>Chat Zalo Trực Tiếp 1-1</span>
              <ExternalLink size={14} />
            </a>

            {isSummary && (
              <button
                type="button"
                onClick={() => navigate('/gioi-thieu')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1.15rem',
                  backgroundColor: 'transparent',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                <span>Xem chi tiết về LocalMate</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LocalTeamSection;
