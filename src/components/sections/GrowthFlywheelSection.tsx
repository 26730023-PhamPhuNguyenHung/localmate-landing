import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import {
  MapPin,
  Zap,
  Star,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  RotateCw,
  Play,
  Pause,
  PhoneCall,
  ShieldCheck,
  TrendingUp,
  Compass,
  Layers,
  HelpCircle,
  Clock
} from 'lucide-react';
import { useRouter } from '../layout/Router';

export interface GrowthFlywheelSectionProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

interface FlywheelStage {
  id: number;
  stageNumber: string;
  title: string;
  englishTitle: string;
  tagline: string;
  solutionSlug: string;
  solutionTitle: string;
  color: {
    primary: string;
    bgSoft: string;
    border: string;
    text: string;
    badgeBg: string;
    gradient: string;
  };
  icon: React.ComponentType<{ size?: number | string; color?: string; className?: string }>;
  kpiHighlight: string;
  kpiLabel: string;
  localMateServices: string[];
  deliverables: {
    title: string;
    desc: string;
  }[];
  traditionalProblem: string;
  flywheelAdvantage: string;
  ctaText: string;
}

const FLYWHEEL_STAGES: FlywheelStage[] = [
  {
    id: 1,
    stageNumber: '01',
    title: 'Thu Hút Khách Địa Phương',
    englishTitle: 'Stay Visible',
    solutionSlug: '/giai-phap/duoc-tim-thay',
    solutionTitle: 'Trụ Cột 02: Được Khách Hàng Tìm Thấy (Maps & AI)',
    tagline: 'Xuất hiện nổi bật trên Google Maps & Google Search trong bán kính 3-10km khi khách hàng tìm kiếm dịch vụ.',
    color: {
      primary: '#0d7647',
      bgSoft: '#ecfdf5',
      border: '#a7f3d0',
      text: '#065f46',
      badgeBg: '#d1fae5',
      gradient: 'linear-gradient(135deg, #0d7647 0%, #16a34a 100%)'
    },
    icon: MapPin,
    kpiHighlight: 'Top 3 Maps & Bán kính 3–10km',
    kpiLabel: 'Độ phủ tìm kiếm địa phương chính xác',
    localMateServices: [
      'Khởi tạo & Tối ưu Google Business Profile (Maps)',
      'SEO từ khóa địa phương không dấu & có dấu',
      'Đồng bộ NAP (Tên - Địa chỉ - SĐT) trên danh bạ số',
      'Cắm mốc định vị chính xác vị trí cơ sở'
    ],
    deliverables: [
      {
        title: 'Hiển thị Top 3 Google Maps',
        desc: 'Tối ưu danh mục kinh doanh, mô tả chuẩn SEO, định vị tọa độ GPS chuẩn xác để khách mở ứng dụng bản đồ là thấy ngay.'
      },
      {
        title: 'Chiếm lĩnh từ khóa có nhu cầu cao',
        desc: 'Tập trung từ khóa có ý định mua hàng quanh khu vực (VD: "sửa chữa điện thoại gần đây", "phòng khám nha khoa quận...").'
      },
      {
        title: 'Bàn giao 100% tài khoản chính chủ',
        desc: 'Chủ cơ sở nắm toàn quyền sở hữu email quản trị Google Business Profile, không bị phụ thuộc vào bên thứ ba.'
      }
    ],
    traditionalProblem: 'Bỏ tiền chạy quảng cáo mạng xã hội dàn trải khắp thành phố, vừa đắt đỏ vừa thu về khách ở quá xa không thể đến trực tiếp.',
    flywheelAdvantage: 'Thu hút đúng tệp khách hàng lân cận đang có nhu cầu tức thì, mang lại lượt ghé quán và cuộc gọi thực tế với chi phí 0đ mỗi click.',
    ctaText: 'Nhận tư vấn Giai đoạn Thu hút'
  },
  {
    id: 2,
    stageNumber: '02',
    title: 'Chuyển Đổi Một Chạm',
    englishTitle: 'Capture Leads',
    solutionSlug: '/giai-phap/nen-tang-so',
    solutionTitle: 'Trụ Cột 01: Xây Dựng Nền Tảng Số (Web < 1.5s)',
    tagline: 'Website tải siêu tốc < 1s, bộ nút Gọi/Zalo/Chỉ đường trực quan giúp khách ghé thăm lập tức liên hệ mà không rời đi.',
    color: {
      primary: '#0284c7',
      bgSoft: '#f0f9ff',
      border: '#bae6fd',
      text: '#0369a1',
      badgeBg: '#e0f2fe',
      gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)'
    },
    icon: Zap,
    kpiHighlight: 'Tốc độ < 1s & PageSpeed 95+',
    kpiLabel: 'Chuẩn tối ưu trải nghiệm người dùng di động',
    localMateServices: [
      'Thiết kế Website / Landing Page tối giản tải siêu tốc',
      'Bộ nút CTA một chạm: Gọi hotline, Chat Zalo, Chỉ đường',
      'Form đăng ký nhận tư vấn / demo 0đ tinh gọn 2-3 trường',
      'Tối ưu chuẩn UX Mobile chống nhảy trang'
    ],
    deliverables: [
      {
        title: 'Tốc độ tải trang dưới 1 giây',
        desc: 'Công nghệ Cloudflare Edge hiện đại không làm người dùng sốt ruột chờ đợi, giảm tối đa tỷ lệ thoát trang do mạng yếu.'
      },
      {
        title: 'Nút hành động một chạm nổi bật',
        desc: 'Khách hàng trên di động bấm 1 chạm là gọi ngay hotline hoặc mở ứng dụng Zalo/Google Maps chỉ đường tới cửa hàng.'
      },
      {
        title: 'Form demo 0đ tiện lợi',
        desc: 'Khách hàng có thể để lại số điện thoại xem trước giao diện demo phù hợp với ngành nghề mà chưa cần thanh toán bất kỳ khoản nào.'
      }
    ],
    traditionalProblem: 'Website tải chậm 5-7 giây, giao diện rối rắm nhiều hiệu ứng giật lag, thiếu nút gọi nhanh khiến 70% khách tiềm năng bấm thoát.',
    flywheelAdvantage: 'Điểm chạm tinh gọn loại bỏ mọi rào cản thao tác, biến từng lượt click từ Google Maps thành cuộc gọi và tin nhắn tư vấn thực.',
    ctaText: 'Xem demo website tốc độ < 1s'
  },
  {
    id: 3,
    stageNumber: '03',
    title: 'Chăm Sóc & Vận Hành',
    englishTitle: 'Care & RevOps',
    solutionSlug: '/giai-phap/dong-hanh-duy-tri',
    solutionTitle: 'Trụ Cột 05: Chăm Sóc & Đồng Hành Kỹ Thuật',
    tagline: 'Chăm sóc Fanpage định kỳ 990k/tháng, quy trình tích lũy review Google Maps 5 sao và bảo mật hạ tầng số ổn định 24/7.',
    color: {
      primary: '#d97706',
      bgSoft: '#fffbeb',
      border: '#fde68a',
      text: '#b45309',
      badgeBg: '#fef3c7',
      gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)'
    },
    icon: Star,
    kpiHighlight: '990.000đ/tháng & 100% An toàn',
    kpiLabel: 'Đội ngũ IT & Nội dung số đồng hành trọn gói',
    localMateServices: [
      'Gói Digital Care chăm sóc Fanpage & Website 990k/tháng',
      'Kịch bản QR Code tích lũy đánh giá Google Maps 5 sao thật',
      'Bảo mật SSL, chống spam, sao lưu mã nguồn định kỳ',
      'Hỗ trợ kỹ thuật 1-1 qua Zalo khi có phát sinh'
    ],
    deliverables: [
      {
        title: 'Fanpage luôn có nội dung mới',
        desc: 'Đăng tải bài viết chuyên môn, hình ảnh dịch vụ chỉn chu định kỳ hàng tuần giúp khách hàng cảm thấy tin cậy và cơ sở luôn hoạt động sôi nổi.'
      },
      {
        title: 'Tích lũy đánh giá 5 sao từ khách thật',
        desc: 'Quy trình đặt mã QR tại quầy và kịch bản xin đánh giá khéo léo sau bán, tạo nền tảng tín nhiệm vững chắc cho địa điểm.'
      },
      {
        title: 'Hạ tầng số luôn an toàn & ổn định',
        desc: 'Bảo mật SSL, theo dõi uptime 99.9%, hỗ trợ cập nhật thông tin thực đơn, bảng giá hay giờ mở cửa khi có thay đổi.'
      }
    ],
    traditionalProblem: 'Tốn 8-10 triệu thuê nhân viên riêng hoặc bỏ mặc Fanpage mốc meo; bị đối thủ chơi xấu đánh giá 1 sao mà không biết xử lý ra sao.',
    flywheelAdvantage: 'Có nguyên một đội ngũ kỹ thuật và nội dung đồng hành chi phí chỉ 990k/tháng; uy tín 5 sao tích lũy liên tục tạo lực đẩy lớn cho bánh đà.',
    ctaText: 'Đăng ký gói Digital Care 990k'
  },
  {
    id: 4,
    stageNumber: '04',
    title: 'Đo Lường & Tăng Trưởng',
    englishTitle: 'Measure & Predict',
    solutionSlug: '/giai-phap/thu-hut-khach-hang',
    solutionTitle: 'Trụ Cột 03: Thu Hút Khách Hàng & Chuyển Đổi',
    tagline: 'Báo cáo hàng tuần số cuộc gọi thật, lượt khách tìm đường và tin nhắn Zalo để ra quyết định kinh doanh chuẩn xác.',
    color: {
      primary: '#7c3aed',
      bgSoft: '#f5f3ff',
      border: '#ddd6fe',
      text: '#6d28d9',
      badgeBg: '#ede9fe',
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)'
    },
    icon: BarChart3,
    kpiHighlight: '100% Số liệu thật & Báo cáo tuần',
    kpiLabel: 'Đo lường cuộc gọi, tin nhắn Zalo, chỉ đường Maps',
    localMateServices: [
      'Theo dõi số lượt click gọi hotline và click Zalo',
      'Thống kê số lượt yêu cầu chỉ đường trên Google Maps',
      'Báo cáo minh bạch qua Zalo định kỳ hàng tuần',
      'Tư vấn tối ưu từ khóa và dịch vụ sinh lời cao'
    ],
    deliverables: [
      {
        title: 'Số liệu kinh doanh minh bạch',
        desc: 'Nói không với các số ảo như "lượt tiếp cận mơ hồ". Báo cáo của LocalMate chỉ tập trung vào: bao nhiêu người gọi, bao nhiêu người hỏi đường, bao nhiêu người gửi tin nhắn.'
      },
      {
        title: 'Nhận diện kênh sinh khách tốt nhất',
        desc: 'Biết chính xác khách tìm đến nhiều nhất từ từ khóa nào hoặc khu vực bán kính nào để chủ động điều phối sản phẩm/dịch vụ.'
      },
      {
        title: 'Nạp lại động năng cho Bánh đà',
        desc: 'Dữ liệu đo lường từ Giai đoạn 04 trực tiếp tối ưu lại Giai đoạn 01, giúp cơ sở ngày càng hút khách với chi phí rẻ hơn từng tháng.'
      }
    ],
    traditionalProblem: 'Báo cáo toàn thuật ngữ khó hiểu (Reach, Impression, CPM) nhưng cuối tháng cửa hàng vẫn vắng khách, không rõ tiền đã tiêu đi đâu.',
    flywheelAdvantage: 'Báo cáo bằng ngôn ngữ kinh doanh thực chiến, rõ ràng từng đầu mối khách; dùng dữ liệu thực để bánh đà xoay nhanh hơn và tăng trưởng bền vững.',
    ctaText: 'Khám phá phương pháp đo lường'
  }
];

export const GrowthFlywheelSection: React.FC<GrowthFlywheelSectionProps> = ({ onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeStage = FLYWHEEL_STAGES.find((s) => s.id === activeStageId) || FLYWHEEL_STAGES[0];

  // Auto rotation effect
  useEffect(() => {
    if (!isAutoPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveStageId((prev) => (prev % 4) + 1);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  const handleSelectStage = (id: number) => {
    setIsAutoPlaying(false);
    setActiveStageId(id);
  };

  const handleToggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <Section id="growth-flywheel" variant="bg" padding="spacious">
      <Container size="lg">
        {/* Section Header */}
        <SectionHeader
          eyebrow="MÔ HÌNH BÁNH ĐÀ DOANH THU ĐỊA PHƯƠNG (LOCAL REVENUE FLYWHEEL)"
          title="Bánh Đà Tăng Trưởng Doanh Thu Địa Phương 4 Giai Đoạn"
          subtitle="Khác với phễu marketing cũ làm hao hụt ngân sách sau mỗi chiến dịch, mô hình Bánh đà (Flywheel) của LocalMate tích lũy động năng liên tục: càng quay lâu, uy tín càng cao, chi phí tìm khách mới càng giảm."
          align="center"
        />

        {/* Flywheel Interactive Board */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
            padding: 'clamp(1.5rem, 3.5vw, 3rem)',
            marginBottom: '3.5rem'
          }}
        >
          {/* Top Quick Navigation Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.75rem',
              marginBottom: '2.5rem',
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '1.25rem'
            }}
          >
            {FLYWHEEL_STAGES.map((stage) => {
              const isSelected = stage.id === activeStageId;
              const IconComp = stage.icon;
              return (
                <button
                  key={stage.id}
                  onClick={() => handleSelectStage(stage.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-lg)',
                    border: isSelected ? `2px solid ${stage.color.primary}` : '1px solid var(--color-border)',
                    backgroundColor: isSelected ? stage.color.bgSoft : '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected ? stage.color.primary : '#f1f5f9',
                      color: isSelected ? '#ffffff' : '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontWeight: 800,
                      fontSize: '0.85rem'
                    }}
                  >
                    <IconComp size={18} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: isSelected ? stage.color.text : '#64748b'
                      }}
                    >
                      Giai đoạn {stage.stageNumber}
                    </div>
                    <div
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: isSelected ? '#0f172a' : '#334155',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {stage.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main Stage Interactive Layout: Left Visual Wheel & Right Active Detail */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* LEFT: Flywheel Circular Engine Visual */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                padding: '1rem 0'
              }}
            >
              {/* Flywheel Hub Visual Container */}
              <div
                style={{
                  position: 'relative',
                  width: 'min(100%, 360px)',
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  border: '2px dashed #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.25rem'
                }}
              >
                {/* 4 Quadrants as Interactive Orbit Nodes */}
                {FLYWHEEL_STAGES.map((st, index) => {
                  const isNodeActive = st.id === activeStageId;
                  const NodeIcon = st.icon;

                  // Positions around the circle (0: Top, 1: Right, 2: Bottom, 3: Left)
                  const positions = [
                    { top: '-24px', left: '50%', transform: 'translateX(-50%)' }, // 01 Top
                    { top: '50%', right: '-24px', transform: 'translateY(-50%)' }, // 02 Right
                    { bottom: '-24px', left: '50%', transform: 'translateX(-50%)' }, // 03 Bottom
                    { top: '50%', left: '-24px', transform: 'translateY(-50%)' } // 04 Left
                  ];

                  const pos = positions[index];

                  return (
                    <button
                      key={st.id}
                      onClick={() => handleSelectStage(st.id)}
                      title={`Xem chi tiết Giai đoạn ${st.stageNumber}: ${st.title}`}
                      style={{
                        position: 'absolute',
                        ...pos,
                        width: isNodeActive ? '64px' : '52px',
                        height: isNodeActive ? '64px' : '52px',
                        borderRadius: '50%',
                        backgroundColor: isNodeActive ? st.color.primary : '#ffffff',
                        border: isNodeActive ? `3px solid #ffffff` : `2px solid ${st.color.border}`,
                        boxShadow: isNodeActive ? '0 10px 25px -3px rgba(13, 118, 71, 0.35)' : '0 4px 10px rgba(0,0,0,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: isNodeActive ? '#ffffff' : st.color.text,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: isNodeActive ? 10 : 2
                      }}
                    >
                      <NodeIcon size={isNodeActive ? 22 : 18} />
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          lineHeight: 1,
                          marginTop: '2px'
                        }}
                      >
                        {st.stageNumber}
                      </span>
                    </button>
                  );
                })}

                {/* Center Core Engine */}
                <div
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    border: `3px solid ${activeStage.color.border}`,
                    boxShadow: '0 8px 30px rgba(15, 23, 42, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '1rem',
                    position: 'relative',
                    transition: 'border-color 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: activeStage.color.bgSoft,
                      color: activeStage.color.primary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <RotateCw
                      size={20}
                      className={isAutoPlaying ? 'animate-spin-slow' : ''}
                      style={{
                        animation: isAutoPlaying ? 'spin 12s linear infinite' : 'none'
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: activeStage.color.text,
                      marginBottom: '2px'
                    }}
                  >
                    BÁNH ĐÀ LOCALMATE
                  </span>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.2
                    }}
                  >
                    Tự Động Sinh Khách Hàng
                  </span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: '#64748b',
                      marginTop: '4px'
                    }}
                  >
                    Động năng tích lũy liên tục
                  </span>
                </div>
              </div>

              {/* Flywheel Controls and Momentum Status */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginTop: '1.75rem',
                  backgroundColor: '#f8fafc',
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <button
                  onClick={handleToggleAutoPlay}
                  style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    color: '#475569',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.775rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.4rem'
                  }}
                  title={isAutoPlaying ? 'Tạm dừng tự động quay' : 'Tiếp tục tự động quay bánh đà'}
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause size={14} color="#0d7647" />
                      <span>Đang xoay tự động</span>
                    </>
                  ) : (
                    <>
                      <Play size={14} color="#64748b" />
                      <span>Bấm để tiếp tục xoay</span>
                    </>
                  )}
                </button>
                <span style={{ color: '#cbd5e1' }}>|</span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: '#64748b',
                    fontWeight: 600
                  }}
                >
                  Bấm góc 01–04 để chọn
                </span>
              </div>
            </div>

            {/* RIGHT: Active Stage Deep-Dive Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: `1.5px solid ${activeStage.color.border}`,
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                position: 'relative'
              }}
            >
              {/* Header Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      backgroundColor: activeStage.color.badgeBg,
                      color: activeStage.color.text,
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    Giai đoạn {activeStage.stageNumber} — {activeStage.englishTitle}
                  </span>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--color-border)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#334155'
                  }}
                >
                  <TrendingUp size={14} color={activeStage.color.primary} />
                  <span>{activeStage.kpiHighlight}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3
                }}
              >
                {activeStage.title}
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#475569',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem'
                }}
              >
                {activeStage.tagline}
              </p>

              {/* LocalMate Deliverables Checklist */}
              <div
                style={{
                  backgroundColor: activeStage.color.bgSoft,
                  border: `1px solid ${activeStage.color.border}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: activeStage.color.text,
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Layers size={15} />
                  <span>Hạng mục LocalMate triển khai thực tế:</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {activeStage.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem'
                      }}
                    >
                      <CheckCircle2
                        size={17}
                        color={activeStage.color.primary}
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <div>
                        <strong style={{ fontSize: '0.875rem', color: '#0f172a', display: 'block' }}>
                          {item.title}
                        </strong>
                        <span style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 1.5 }}>
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contrast: Traditional Problem vs Flywheel Advantage */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '0.85rem',
                  marginBottom: '1.75rem',
                  fontSize: '0.825rem'
                }}
              >
                <div
                  style={{
                    backgroundColor: '#fff1f2',
                    border: '1px solid #fecdd3',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem'
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      color: '#9f1239',
                      marginBottom: '0.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span>✕ Cách làm cũ tốn kém:</span>
                  </div>
                  <p style={{ color: '#881337', margin: 0, lineHeight: 1.45 }}>
                    {activeStage.traditionalProblem}
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem'
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      color: '#166534',
                      marginBottom: '0.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span>✓ Lợi thế Bánh đà:</span>
                  </div>
                  <p style={{ color: '#14532d', margin: 0, lineHeight: 1.45 }}>
                    {activeStage.flywheelAdvantage}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <button
                  onClick={() =>
                    onOpenConsultForm && onOpenConsultForm(`Bánh đà Giai đoạn ${activeStage.stageNumber}: ${activeStage.title}`)
                  }
                  style={{
                    backgroundColor: activeStage.color.primary,
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1.6rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{activeStage.ctaText}</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => navigate(activeStage.solutionSlug)}
                  style={{
                    backgroundColor: '#ffffff',
                    color: activeStage.color.primary,
                    border: `1.5px solid ${activeStage.color.border}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1.4rem',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'all 0.2s ease'
                  }}
                  title={`Khám phá chi tiết ${activeStage.solutionTitle}`}
                >
                  <span>Xem giải pháp tương ứng</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const nextId = (activeStageId % 4) + 1;
                    handleSelectStage(nextId);
                  }}
                  style={{
                    backgroundColor: '#f8fafc',
                    color: '#64748b',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1.15rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>Chuyển giai đoạn ({((activeStageId % 4) + 1).toString().padStart(2, '0')})</span>
                  <ArrowRight size={14} color="#64748b" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison: Flywheel vs Traditional Marketing Funnel */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2rem auto' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                color: 'var(--color-primary-dark)',
                backgroundColor: 'var(--color-primary-soft)',
                padding: '0.3rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              SO SÁNH CHIẾN LƯỢC TĂNG TRƯỞNG
            </span>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                fontWeight: 800,
                color: '#0f172a',
                marginTop: '0.6rem',
                marginBottom: '0.5rem'
              }}
            >
              Tại Sao Bánh Đà Vượt Trội Hơn Phễu Marketing Cũ?
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
              Học hỏi từ triết lý tăng trưởng doanh thu số hiện đại (WebFX Revenue Flywheel), LocalMate thay thế cách làm vụn vặt bằng một cỗ máy tự tích lũy động lượng cho hộ kinh doanh địa phương.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '1.5rem'
            }}
          >
            {/* Traditional Funnel Column */}
            <div
              style={{
                backgroundColor: '#fff7ed',
                border: '1px solid #fed7aa',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '1rem',
                  color: '#9a3412',
                  fontWeight: 800,
                  fontSize: '1rem'
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: '#ffedd5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ✕
                </div>
                <span>Phễu Marketing Tuyến Tính Cũ</span>
              </div>
              <ul
                style={{
                  paddingLeft: '1.25rem',
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  fontSize: '0.875rem',
                  color: '#7c2d12',
                  lineHeight: 1.55
                }}
              >
                <li>
                  <strong>Khách hàng là điểm kết thúc:</strong> Sau khi bán xong hoặc kết thúc chiến dịch quảng cáo, năng lượng rơi về số 0.
                </li>
                <li>
                  <strong>Chi phí ngày càng tăng:</strong> Tháng nào cũng phải chi ngân sách quảng cáo mới có khách, tắt tiền là tắt đơn.
                </li>
                <li>
                  <strong>Bỏ quên uy tín tích lũy:</strong> Không có quy trình thu nhận đánh giá 5 sao và bảo dưỡng số nên tài sản số không tăng giá trị.
                </li>
                <li>
                  <strong>Số liệu phân tán:</strong> Khó nắm bắt khách đến từ đâu, đo lường toàn lượt click ảo không sinh ra tiền.
                </li>
              </ul>
            </div>

            {/* LocalMate Flywheel Column */}
            <div
              style={{
                backgroundColor: '#f0fdf4',
                border: '1.5px solid #86efac',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '1rem',
                  color: '#166534',
                  fontWeight: 800,
                  fontSize: '1rem'
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: '#dcfce7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CheckCircle2 size={18} color="#166534" />
                </div>
                <span>Bánh Đà Doanh Thu Địa Phương LocalMate</span>
              </div>
              <ul
                style={{
                  paddingLeft: '1.25rem',
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  fontSize: '0.875rem',
                  color: '#14532d',
                  lineHeight: 1.55
                }}
              >
                <li>
                  <strong>Khách hàng là động lực trung tâm:</strong> Khách hài lòng để lại đánh giá 5 sao trên Google Maps, kéo thêm hàng chục khách mới.
                </li>
                <li>
                  <strong>Chi phí tìm khách giảm dần:</strong> Thứ hạng Google Maps và SEO địa phương bền vững, khách tự tìm đến mà không phụ thuộc tiền ads.
                </li>
                <li>
                  <strong>Chăm sóc trọn gói chỉ 990k/tháng:</strong> Đội ngũ LocalMate vận hành liên tục, Fanpage & Website luôn tươi mới và an toàn.
                </li>
                <li>
                  <strong>Báo cáo số liệu người thật:</strong> Chỉ đo lường số cuộc gọi thật, lượt khách chỉ đường thật và tin nhắn Zalo mỗi tuần.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
