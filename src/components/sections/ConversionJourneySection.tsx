import React, { useState } from 'react';
import { Container } from '../ui/Container';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  TrendingUp,
  ShieldCheck,
  Clock,
  Phone,
  MessageSquare,
  Lock,
  ChevronRight,
  HelpCircle,
  FileText
} from 'lucide-react';
import { useRouter } from '../layout/Router';
import { submitLead } from '../../services/leadService';

interface ConversionJourneySectionProps {
  onOpenConsultForm?: (serviceName?: string, defaultNote?: string) => void;
}

interface PainPointItem {
  id: string;
  number: string;
  tabTitle: string;
  painHeading: string;
  painDesc: string;
  icon: React.ElementType;
  solution: {
    title: string;
    badge: string;
    price: string;
    sla: string;
    summary: string;
    highlights: string[];
    workflowLink: string;
    workflowLinkLabel: string;
    workflowSteps: {
      step: string;
      title: string;
      desc: string;
      time: string;
    }[];
    prefillNote: string;
  };
}

const JOURNEY_PAIN_POINTS: PainPointItem[] = [
  {
    id: 'pain-no-web',
    number: '01',
    tabTitle: 'Chưa có Web & Maps',
    painHeading: 'Chưa có website & Chưa có mặt trên Google Maps',
    painDesc: 'Khách tìm quanh phố hay trên mạng không thấy tiệm. Chưa có bảng giá hay thực đơn rõ ràng để gửi khách xem qua Zalo, mất khách quen vào tay đối thủ cùng phố.',
    icon: Globe,
    solution: {
      title: 'Số Hóa Hiện Diện & Bàn Giao Web Chuẩn Di Động 24H',
      badge: 'Khởi đầu nhanh • Demo 0đ',
      price: 'Từ 490.000đ trọn gói',
      sla: 'Hoàn thiện trong 24 giờ',
      summary: 'Dựng ngay trang web giới thiệu chuẩn di động, ghim tọa độ Google Maps GPS chính xác và tích hợp sẵn nút gọi Hotline & Zalo 1-chạm để khách ở gần bấm liên hệ ngay.',
      highlights: [
        'Website chạy thật ngay trong 24 giờ, chuẩn Mobile First',
        'Định vị Google Maps chính chủ, khách tìm quanh tiệm là thấy',
        'Tích hợp nút gọi Hotline & nhắn tin Zalo 1-chạm chuyển đổi nhanh',
        'Bàn giao 100% tài khoản chính chủ & kích hoạt bảo hành kỹ thuật 5 năm'
      ],
      workflowLink: '/giai-phap/hien-dien-so',
      workflowLinkLabel: 'Xem cách Localmate làm hiện diện số',
      workflowSteps: [
        {
          step: '1',
          title: 'Khảo sát tiệm & tiếp nhận thông tin',
          desc: 'Thu thập menu, bảng giá, địa chỉ và hình ảnh thực tế của cơ sở.',
          time: '30 phút'
        },
        {
          step: '2',
          title: 'KTV dựng bản web demo 0đ',
          desc: 'Lên cấu trúc giao diện chuẩn di động để bạn duyệt trực tiếp trên điện thoại.',
          time: 'Trong 24h'
        },
        {
          step: '3',
          title: 'Xác minh Google Maps & tích hợp nút liên hệ',
          desc: 'Ghim chuẩn định vị GPS và kiểm thử cuộc gọi/Zalo thực tế.',
          time: '4 giờ'
        },
        {
          step: '4',
          title: 'Nghiệm thu thực tế & Bàn giao tài khoản gốc',
          desc: 'Khách hàng hài lòng mới thanh toán, làm chủ 100% tài khoản chính chủ.',
          time: 'Bàn giao ngay'
        }
      ],
      prefillNote: 'Tôi chưa có website & Google Maps, cần làm nhanh cho cơ sở để khách tìm thấy và xem bảng giá.'
    }
  },
  {
    id: 'pain-slow-web',
    number: '02',
    tabTitle: 'Web cũ tải chậm, ít khách',
    painHeading: 'Đã có website nhưng mở chậm, không ai bấm gọi hay nhắn tin',
    painDesc: 'Website làm từ lâu mở trên điện thoại bị vỡ khung, tải quá 3 giây khiến khách mất kiên nhẫn thoát ra. Có truy cập nhưng không chuyển đổi thành cuộc gọi hay đơn hàng.',
    icon: Zap,
    solution: {
      title: 'Tái Cấu Trúc Website Tốc Độ Cao (<1s) & Tối Ưu Nút Chuyển Đổi',
      badge: 'Cải tạo tối ưu • Ra khách ngay',
      price: 'Từ 990.000đ',
      sla: 'Hoàn thiện trong 48 giờ',
      summary: 'Tăng tốc độ tải trang đạt 95+ điểm Google PageSpeed, sắp xếp lại thông tin dịch vụ và đặt các nút chuyển đổi (Gọi, Zalo, Đặt hẹn) đúng tầm tay ngón cái của khách.',
      highlights: [
        'Tốc độ mở trang siêu tốc dưới 1 giây (Google PageSpeed 95+)',
        'Giao diện chuẩn di động, chữ rõ nét, chống tràn khung hình',
        'Tối ưu hành trình người xem: đọc hiểu ngay và bấm gọi tức thì',
        'Cài đặt công cụ đo lường chính xác từng cuộc gọi và tin nhắn phát sinh'
      ],
      workflowLink: '/tieu-chuan-audit-ky-thuat',
      workflowLinkLabel: 'Xem tiêu chuẩn kỹ thuật & tốc độ <1s',
      workflowSteps: [
        {
          step: '1',
          title: 'Audit quét toàn bộ điểm nghẽn của web cũ',
          desc: 'Đo lường thời gian tải trang, lỗi vỡ khung và tỷ lệ thoát trang trên di động.',
          time: '1 giờ'
        },
        {
          step: '2',
          title: 'Tái cấu trúc giao diện nhẹ & tối ưu nút Hotline',
          desc: 'Loại bỏ mã nguồn thừa, bố trí lại bảng giá và nút bấm chuyển đổi.',
          time: '24 - 48h'
        },
        {
          step: '3',
          title: 'Kiểm thử tốc độ mở trang thực tế trên 4G',
          desc: 'Đạt điểm xanh Google PageSpeed và đảm bảo tải mượt trên mọi điện thoại.',
          time: '2 giờ'
        },
        {
          step: '4',
          title: 'Nghiệm thu đo lường & Đưa vào vận hành',
          desc: 'Khách hàng kiểm tra thực tế, thấy hiệu quả tốc độ mới thanh toán.',
          time: 'Nghiệm thu'
        }
      ],
      prefillNote: 'Website của tôi mở chậm và không có khách gọi, cần KTV audit và tối ưu lại giao diện chuyển đổi.'
    }
  },
  {
    id: 'pain-ads-waste',
    number: '03',
    tabTitle: 'Sợ bị kê giá chạy Ads',
    painHeading: 'Muốn tìm thêm khách nhưng sợ bị đơn vị ngoài "vẽ voi" kê giá',
    painDesc: 'Từng nghe kể hoặc từng thuê dịch vụ quảng cáo tốn kém nhưng data ảo, không kiểm soát được tài khoản, chi phí bị kê chênh lệch mà không biết tiền đi về đâu.',
    icon: TrendingUp,
    solution: {
      title: 'Chiến Dịch Tiếp Thị Chuyển Đổi Địa Phương Minh Bạch 0% Kê Giá',
      badge: 'Minh bạch 100% • Tài khoản của bạn',
      price: 'Báo giá cố định trọn gói',
      sla: 'Thiết lập chuẩn trong 3 ngày',
      summary: 'Khách hàng làm chủ 100% tài khoản quảng cáo Google & Facebook. Tiền quảng cáo trả thẳng cho nền tảng, LocalMate chỉ tính phí kỹ thuật tối ưu rõ ràng được thống nhất trước.',
      highlights: [
        'Khách hàng sở hữu 100% tài khoản, kiểm tra chi tiêu thực tế 24/7',
        'Tuyệt đối 0% kê giá ngân sách, báo cáo số liệu thật mỗi ngày',
        'Tối ưu nhắm trúng khách hàng có nhu cầu thật trong bán kính 3 - 5km',
        'Đo lường chính xác chi phí trên mỗi khách hàng liên hệ thật'
      ],
      workflowLink: '/quy-trinh-geo-aeo',
      workflowLinkLabel: 'Xem cách Localmate làm tiếp thị địa phương',
      workflowSteps: [
        {
          step: '1',
          title: 'Phân tích từ khóa có ý định mua cao quanh tiệm',
          desc: 'Tìm kiếm chính xác những từ khách ở gần gõ khi muốn mua dịch vụ.',
          time: '1 ngày'
        },
        {
          step: '2',
          title: 'Dựng trang đích chuyển đổi cao & cài mã đo lường',
          desc: 'Thiết kế trang giới thiệu gọn gàng, khách xem là muốn bấm gọi ngay.',
          time: '2 ngày'
        },
        {
          step: '3',
          title: 'Khởi chạy chiến dịch trên tài khoản chính chủ',
          desc: 'Ngân sách trừ thẳng từ thẻ của bạn, hiển thị minh bạch từng lượt bấm.',
          time: 'Ngày thứ 3'
        },
        {
          step: '4',
          title: 'Tối ưu hàng tuần & Báo cáo kết quả thật',
          desc: 'Loại bỏ từ khóa rác, dồn ngân sách vào các từ khóa đem lại cuộc gọi thật.',
          time: 'Liên tục'
        }
      ],
      prefillNote: 'Tôi muốn tìm thêm khách quanh khu vực nhưng cần làm minh bạch, không kê giá ngân sách quảng cáo.'
    }
  },
  {
    id: 'pain-abandoned',
    number: '04',
    tabTitle: 'Cần kỹ thuật túc trực',
    painHeading: 'Không có nhân sự kỹ thuật, sợ làm xong bị bên thiết kế "bỏ rơi"',
    painDesc: 'Mỗi lần muốn đổi giá, thêm món ăn mới, thay ảnh tiệm hay khi website gặp lỗi thì không liên hệ được ai. Bên làm web cũ hứa hẹn nhiều nhưng khi cần thì gọi không bắt máy.',
    icon: ShieldCheck,
    solution: {
      title: 'Đội Kỹ Thuật Viên In-House Túc Trực Đồng Hành 5 Năm (Digital Care)',
      badge: 'Cam kết 5 năm • Hỗ trợ trong 2h',
      price: 'Từ 990.000đ/tháng',
      sla: 'Phản hồi & xử lý trong 2 giờ',
      summary: 'Bạn có ngay một đội ngũ kỹ thuật viên riêng hỗ trợ qua nhóm Zalo 1-1. Mọi việc từ cập nhật bài viết, đổi giá, sao lưu dữ liệu đến giám sát web đều được xử lý nhanh chóng.',
      highlights: [
        'Kỹ thuật viên in-house túc trực nhóm Zalo riêng, hỗ trợ trực tiếp',
        'Xử lý yêu cầu cập nhật hình ảnh, giá cả, thực đơn trong vòng 2 giờ',
        'Giám sát hoạt động 24/7 và sao lưu dữ liệu định kỳ chống mất mát',
        'Cam kết đồng hành 5 năm, không biến mất, không đùn đẩy trách nhiệm'
      ],
      workflowLink: '/quy-trinh-cham-soc-van-hanh',
      workflowLinkLabel: 'Xem quy trình chăm sóc vận hành 2h',
      workflowSteps: [
        {
          step: '1',
          title: 'Thiết lập nhóm Zalo hỗ trợ riêng 1-1',
          desc: 'Kết nối chủ cơ sở trực tiếp với kỹ thuật viên phụ trách kỹ thuật.',
          time: '5 phút'
        },
        {
          step: '2',
          title: 'Tiếp nhận yêu cầu qua tin nhắn hoặc ảnh chụp',
          desc: 'Chỉ cần gửi ảnh menu mới hoặc nhắn nội dung cần đổi qua Zalo.',
          time: 'Tức thì'
        },
        {
          step: '3',
          title: 'Kỹ thuật viên thực thi & kiểm thử cẩn thận',
          desc: 'Cập nhật lên web/Maps, tối ưu hình ảnh và kiểm tra hiển thị di động.',
          time: 'Trong 2 giờ'
        },
        {
          step: '4',
          title: 'Báo cáo hoàn thành & Sao lưu dữ liệu an toàn',
          desc: 'Gửi link kiểm tra ngay, lưu bản backup định kỳ vào hệ thống Cloud.',
          time: 'Định kỳ'
        }
      ],
      prefillNote: 'Cơ sở của tôi cần người hỗ trợ kỹ thuật túc trực lâu dài để cập nhật nội dung và bảo trì website.'
    }
  }
];

export const ConversionJourneySection: React.FC<ConversionJourneySectionProps> = ({
  onOpenConsultForm
}) => {
  const { navigate } = useRouter();
  const [selectedPainId, setSelectedPainId] = useState<string>('pain-no-web');

  // Inline Quick Form State
  const [phoneInput, setPhoneInput] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  const currentItem = JOURNEY_PAIN_POINTS.find((p) => p.id === selectedPainId) || JOURNEY_PAIN_POINTS[0];
  const IconComp = currentItem.icon;

  const handleSelectPain = (item: PainPointItem) => {
    setSelectedPainId(item.id);
    setValidationError('');
    // Prefill the free description if empty
    if (!problemDescription) {
      setProblemDescription(item.solution.prefillNote);
    }
  };

  const handleOpenLeadModal = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm(
        currentItem.solution.title,
        problemDescription || currentItem.solution.prefillNote
      );
    } else {
      navigate('/lien-he');
    }
  };

  const handleInlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phoneInput.trim().replace(/[\s\-\.\(\)]/g, '');

    if (!cleanPhone || !/^(0|\+?84)(3|5|7|8|9|2[0-9])[0-9]{8}$/.test(cleanPhone)) {
      setValidationError('Vui lòng nhập số điện thoại hoặc Zalo hợp lệ để KTV liên hệ.');
      return;
    }

    setValidationError('');
    setIsSubmitting(true);

    try {
      await submitLead({
        name: 'Khách chọn bài toán từ Conversion Journey',
        phone: cleanPhone,
        serviceInterest: currentItem.solution.title,
        message: problemDescription.trim() || currentItem.solution.prefillNote,
        sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/'
      });
      setSubmitSuccess(true);
    } catch (err) {
      console.debug('Lead submission catch:', err);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="hanh-trinh-chuyen-doi"
      className="conversion-journey-section"
      aria-label="Hành trình chuyển đổi từ bài toán đến giải pháp"
    >
      <Container size="lg">
        {/* SECTION HEADER: Đơn giản, thực tế, đúng tâm lý khách hàng */}
        <div className="journey-header">
          <div className="journey-eyebrow">
            <Sparkles size={14} /> HÀNH TRÌNH TỰ NHIÊN • KHÔNG CẦN BIẾT KỸ THUẬT
          </div>
          <h2 className="journey-heading">
            Bạn đang gặp khó khăn ở giai đoạn nào?
          </h2>
          <p className="journey-subheading">
            Chọn đúng vấn đề thực tế của tiệm. LocalMate gợi ý ngay giải pháp giải quyết dứt điểm, xem trước quy trình làm việc và trao đổi trực tiếp cùng kỹ thuật viên.
          </p>
        </div>

        {/* STEP 1: PAIN POINT TABS (4 Thẻ bài toán thực tế) */}
        <div className="pain-tabs-grid" role="tablist" aria-label="Danh sách khó khăn thực tế">
          {JOURNEY_PAIN_POINTS.map((item) => {
            const isSelected = item.id === selectedPainId;
            const ItemIcon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${item.id}`}
                id={`tab-${item.id}`}
                onClick={() => handleSelectPain(item)}
                className={`pain-tab-card ${isSelected ? 'active' : ''}`}
              >
                <div className="tab-card-top">
                  <span className="tab-number-badge">Vấn đề {item.number}</span>
                  <div className="tab-icon-wrapper">
                    <ItemIcon size={18} />
                  </div>
                </div>

                <div className="tab-card-title">{item.tabTitle}</div>

                <div className="tab-card-desc">
                  {item.painHeading}
                </div>

                <div className="tab-indicator">
                  <span>{isSelected ? 'Đang chọn giải pháp này' : 'Bấm xem cách xử lý'}</span>
                  <ChevronRight size={14} className="tab-chevron" />
                </div>
              </button>
            );
          })}
        </div>

        {/* STEP 2 & 3: SOLUTION CARD & WORKFLOW PREVIEW CONTAINER */}
        <div
          id={`panel-${currentItem.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentItem.id}`}
          className="solution-showcase-panel"
        >
          {/* Top Info Bar */}
          <div className="solution-panel-header">
            <div className="solution-meta-cluster">
              <span className="solution-badge">
                <Sparkles size={13} /> {currentItem.solution.badge}
              </span>
              <span className="solution-sla-badge">
                <Clock size={13} /> {currentItem.solution.sla}
              </span>
            </div>

            <div className="solution-price-box">
              <span className="solution-price-label">Chi phí minh bạch</span>
              <strong className="solution-price-val">{currentItem.solution.price}</strong>
            </div>
          </div>

          <div className="solution-panel-body">
            {/* Cột trái: Tên giải pháp & Lợi ích thực tế */}
            <div className="solution-left-pane">
              <div className="solution-matched-badge">
                ✓ Lời giải cho: <strong>"{currentItem.painHeading}"</strong>
              </div>

              <h3 className="solution-title">
                {currentItem.solution.title}
              </h3>

              <p className="solution-summary">
                {currentItem.solution.summary}
              </p>

              <div className="solution-highlights-list">
                {currentItem.solution.highlights.map((highlight, idx) => (
                  <div key={idx} className="solution-highlight-item">
                    <CheckCircle2 size={17} className="highlight-icon" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Lời mời xem workflow chi tiết */}
              <div className="workflow-link-row">
                <button
                  type="button"
                  onClick={() => navigate(currentItem.solution.workflowLink)}
                  className="btn-text-workflow"
                >
                  <span>{currentItem.solution.workflowLinkLabel}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Cột phải: Quy trình thực thi mẫu 4 bước (Workflow Visualizer) */}
            <div className="solution-workflow-pane">
              <div className="workflow-pane-title">
                <FileText size={16} color="#0d7647" />
                <span>Quy trình 4 bước KTV triển khai thực tế</span>
              </div>

              <div className="workflow-steps-timeline">
                {currentItem.solution.workflowSteps.map((wf) => (
                  <div key={wf.step} className="workflow-step-node">
                    <div className="node-marker">
                      <span className="node-number">{wf.step}</span>
                    </div>

                    <div className="node-content">
                      <div className="node-header">
                        <h4 className="node-title">{wf.title}</h4>
                        <span className="node-time-badge">{wf.time}</span>
                      </div>
                      <p className="node-desc">{wf.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="workflow-guarantee-note">
                <ShieldCheck size={16} color="#0d7647" style={{ flexShrink: 0 }} />
                <span>Nghiệm thu hài lòng thực tế mới thanh toán • Bàn giao 100% tài khoản chính chủ.</span>
              </div>
            </div>
          </div>

          {/* STEP 4: FORM NHẸ NHÀNG "KỂ VIỆC ĐANG CẦN" (Ngay tại chỗ) */}
          <div className="solution-action-dock">
            {submitSuccess ? (
              <div className="journey-success-card">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={32} color="#0d7647" />
                </div>
                <div className="success-content">
                  <h4 className="success-title">Đã nhận bài toán của bạn!</h4>
                  <p className="success-desc">
                    Kỹ thuật viên LocalMate sẽ phân tích phương án giải quyết và phản hồi qua Zalo/SĐT trong vòng <strong>15 phút</strong>. Chúng tôi cam kết phản hồi chân thành, tuyệt đối không spam cuộc gọi bán hàng.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitSuccess(false);
                    setPhoneInput('');
                    setProblemDescription('');
                  }}
                  className="btn-reset-light"
                >
                  Gửi thêm yêu cầu khác
                </button>
              </div>
            ) : (
              <div className="journey-inline-form-wrapper">
                <div className="form-lead-pitch">
                  <div className="pitch-tag">
                    <MessageSquare size={14} /> KỂ VIỆC BẠN ĐANG CẦN • TƯ VẤN 0Đ
                  </div>
                  <h4 className="pitch-heading">
                    Kỹ thuật viên lắng nghe &amp; hỗ trợ trực tiếp 1-1
                  </h4>
                  <p className="pitch-sub">
                    Không cần am hiểu kỹ thuật. Bạn chỉ cần mô tả khó khăn hiện tại, chúng tôi sẽ gợi ý phương án thực tế và tiết kiệm nhất.
                  </p>

                  <div className="pitch-trust-chips">
                    <span className="trust-chip">
                      <Lock size={12} /> Bảo mật thông tin
                    </span>
                    <span className="trust-chip">
                      <Clock size={12} /> Phản hồi 15 phút
                    </span>
                    <span className="trust-chip">
                      <ShieldCheck size={12} /> Không spam cuộc gọi
                    </span>
                  </div>
                </div>

                <form onSubmit={handleInlineSubmit} className="journey-inline-form" noValidate>
                  {/* Trường mô tả tự do khó khăn */}
                  <div className="form-field-group">
                    <label htmlFor="journey-problem-desc" className="form-label">
                      Bạn đang gặp khó khăn gì trong công việc hiện tại?
                    </label>
                    <textarea
                      id="journey-problem-desc"
                      rows={2}
                      value={problemDescription || currentItem.solution.prefillNote}
                      onChange={(e) => setProblemDescription(e.target.value)}
                      placeholder="Mô tả khó khăn hoặc bài toán cụ thể bạn cần giải quyết..."
                      className="form-textarea-light"
                    />
                  </div>

                  {/* Hàng số điện thoại & Nút hành động */}
                  <div className="form-submit-row">
                    <div className="form-tel-wrap">
                      <input
                        type="tel"
                        aria-label="Số điện thoại hoặc Zalo nhận tư vấn"
                        placeholder="Số điện thoại hoặc Zalo của bạn *"
                        value={phoneInput}
                        onChange={(e) => {
                          setPhoneInput(e.target.value);
                          if (validationError) setValidationError('');
                        }}
                        className={`form-tel-input ${validationError ? 'has-error' : ''}`}
                      />
                      {validationError && (
                        <div className="form-error-text" role="alert">
                          {validationError}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-journey-submit"
                    >
                      {isSubmitting ? (
                        <>Đang gửi bài toán...</>
                      ) : (
                        <>
                          <span>Kể việc bạn đang cần</span>
                          <ArrowRight size={17} />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Link mở Modal đầy đủ nếu muốn nhập thêm thông tin */}
                  <div className="form-modal-alternative">
                    <span className="alt-text">Hoặc nếu bạn muốn trao đổi chi tiết hơn:</span>
                    <button
                      type="button"
                      onClick={handleOpenLeadModal}
                      className="btn-link-leadmodal"
                    >
                      Mở cửa sổ tiếp nhận tư vấn đầy đủ
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* STYLES: Strict Light Mode, NO glassmorphism, high contrast */}
      <style>{`
        .conversion-journey-section {
          background-color: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: clamp(3rem, 5vw, 5rem) 0;
          scrollbar-gutter: stable;
        }

        .journey-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto clamp(2rem, 3.5vw, 2.75rem) auto;
        }

        .journey-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: #0d7647;
          background-color: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 0.35rem 0.85rem;
          borderRadius: 9999px;
          margin-bottom: 0.85rem;
        }

        .journey-heading {
          font-size: clamp(1.65rem, 3vw, 2.25rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          margin: 0 0 0.75rem 0;
          text-wrap: pretty;
        }

        .journey-subheading {
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          color: #475569;
          line-height: 1.6;
          margin: 0 auto;
          text-wrap: pretty;
        }

        /* 4-Tab Pain Points Grid */
        .pain-tabs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .pain-tab-card {
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 14px;
          padding: 1.25rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          font-family: inherit;
          min-height: 160px;
          outline: none;
        }

        .pain-tab-card:hover {
          border-color: #0d7647;
          background-color: #f0fdf4;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px -4px rgba(0, 0, 0, 0.06);
        }

        .pain-tab-card.active {
          background-color: #ffffff;
          border: 2px solid #0d7647;
          box-shadow: 0 8px 24px -4px rgba(13, 118, 71, 0.15);
        }

        .tab-card-top {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          margin-bottom: 0.65rem;
        }

        .tab-number-badge {
          font-size: 0.725rem;
          font-weight: 700;
          color: #0d7647;
          background-color: #ecfdf5;
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          border: 1px solid #a7f3d0;
        }

        .tab-icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background-color: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #334155;
          transition: all 0.2s ease;
        }

        .pain-tab-card.active .tab-icon-wrapper {
          background-color: #0d7647;
          color: #ffffff;
        }

        .tab-card-title {
          font-weight: 800;
          font-size: 0.95rem;
          color: #0f172a;
          margin-bottom: 0.4rem;
        }

        .tab-card-desc {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.45;
          margin-bottom: 0.85rem;
          flex-grow: 1;
        }

        .tab-indicator {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 700;
          color: #0d7647;
          border-top: 1px solid #f1f5f9;
          padding-top: 0.6rem;
        }

        .pain-tab-card.active .tab-indicator {
          color: #0d7647;
          border-top-color: #e2e8f0;
        }

        .tab-chevron {
          transition: transform 0.2s ease;
        }

        .pain-tab-card.active .tab-chevron {
          transform: translateX(3px);
        }

        /* Showcase Panel Container */
        .solution-showcase-panel {
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .solution-panel-header {
          background-color: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 1.15rem clamp(1.25rem, 3vw, 2rem);
          display: flex;
          flex-wrap: wrap;
          justifyContent: space-between;
          align-items: center;
          gap: 1rem;
        }

        .solution-meta-cluster {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.65rem;
        }

        .solution-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #0d7647;
          background-color: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
        }

        .solution-sla-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #475569;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
        }

        .solution-price-box {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .solution-price-label {
          font-size: 0.8rem;
          color: #64748b;
        }

        .solution-price-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0d7647;
        }

        /* 2-Column Split in Showcase Body */
        .solution-panel-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: clamp(1.5rem, 3.5vw, 2.5rem);
          border-bottom: 1px solid #e2e8f0;
        }

        @media (min-width: 900px) {
          .solution-panel-body {
            grid-template-columns: 1.15fr 0.95fr;
          }
        }

        .solution-matched-badge {
          display: inline-block;
          font-size: 0.825rem;
          color: #166534;
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          margin-bottom: 0.85rem;
        }

        .solution-title {
          font-size: clamp(1.35rem, 2.5vw, 1.75rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          margin: 0 0 0.85rem 0;
          text-wrap: pretty;
        }

        .solution-summary {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 1.25rem 0;
        }

        .solution-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
        }

        .solution-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.875rem;
          color: #1e293b;
          line-height: 1.45;
        }

        .highlight-icon {
          color: #0d7647;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .workflow-link-row {
          padding-top: 0.5rem;
        }

        .btn-text-workflow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: none;
          border: none;
          color: #0d7647;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .btn-text-workflow:hover {
          color: #047857;
        }

        /* Right Pane: Workflow Steps Timeline */
        .solution-workflow-pane {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        .workflow-pane-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.25rem;
        }

        .workflow-steps-timeline {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
        }

        .workflow-step-node {
          display: flex;
          gap: 0.85rem;
          align-items: flex-start;
          position: relative;
        }

        .node-marker {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background-color: #0d7647;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .node-content {
          flex-grow: 1;
        }

        .node-header {
          display: flex;
          justifyContent: space-between;
          align-items: baseline;
          margin-bottom: 0.2rem;
        }

        .node-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .node-time-badge {
          font-size: 0.7rem;
          font-weight: 600;
          color: #0d7647;
          background-color: #ecfdf5;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          border: 1px solid #a7f3d0;
        }

        .node-desc {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.4;
          margin: 0;
        }

        .workflow-guarantee-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px dashed #cbd5e1;
          font-size: 0.775rem;
          color: #166534;
          font-weight: 600;
        }

        /* Step 4 Action Dock: Inline Lead Form */
        .solution-action-dock {
          background-color: #ffffff;
          padding: clamp(1.5rem, 3.5vw, 2.5rem);
        }

        .journey-inline-form-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .journey-inline-form-wrapper {
            grid-template-columns: 1fr 1.15fr;
          }
        }

        .pitch-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #0d7647;
          background-color: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          margin-bottom: 0.65rem;
        }

        .pitch-heading {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
          line-height: 1.35;
        }

        .pitch-sub {
          font-size: 0.875rem;
          color: #475569;
          line-height: 1.5;
          margin: 0 0 1rem 0;
        }

        .pitch-trust-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .trust-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #334155;
          background-color: #f1f5f9;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
        }

        /* Inline Form */
        .journey-inline-form {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .form-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-label {
          font-size: 0.825rem;
          font-weight: 700;
          color: #0f172a;
        }

        .form-textarea-light {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.65rem 0.85rem;
          font-family: inherit;
          font-size: 0.875rem;
          color: #0f172a;
          outline: none;
          box-sizing: border-box;
          resize: vertical;
          background-color: #f8fafc;
        }

        .form-textarea-light:focus {
          border-color: #0d7647;
          background-color: #ffffff;
        }

        .form-submit-row {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 600px) {
          .form-submit-row {
            flex-direction: row;
          }
        }

        .form-tel-wrap {
          flex-grow: 1;
          position: relative;
        }

        .form-tel-input {
          width: 100%;
          height: 48px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0 0.85rem;
          font-family: inherit;
          font-size: 0.9rem;
          color: #0f172a;
          outline: none;
          box-sizing: border-box;
        }

        .form-tel-input:focus {
          border-color: #0d7647;
        }

        .form-tel-input.has-error {
          border-color: #dc2626;
          background-color: #fef2f2;
        }

        .form-error-text {
          font-size: 0.75rem;
          color: #dc2626;
          margin-top: 0.3rem;
        }

        .btn-journey-submit {
          height: 48px;
          background-color: #0d7647;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 0 1.5rem;
          font-family: inherit;
          font-weight: 700;
          font-size: 0.925rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          white-space: nowrap;
          transition: background-color 0.2s ease;
          box-shadow: 0 2px 6px rgba(13, 118, 71, 0.2);
        }

        .btn-journey-submit:hover {
          background-color: #0b633c;
        }

        .btn-journey-submit:disabled {
          background-color: #94a3b8;
          cursor: not-allowed;
        }

        .form-modal-alternative {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.775rem;
          color: #64748b;
          padding-top: 0.25rem;
        }

        .btn-link-leadmodal {
          background: none;
          border: none;
          color: #0d7647;
          font-weight: 700;
          font-size: 0.775rem;
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
        }

        /* Success State Card */
        .journey-success-card {
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
        }

        @media (min-width: 600px) {
          .journey-success-card {
            flex-direction: row;
            text-align: left;
          }
        }

        .success-content {
          flex-grow: 1;
        }

        .success-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #166534;
          margin: 0 0 0.35rem 0;
        }

        .success-desc {
          font-size: 0.85rem;
          color: #1e293b;
          margin: 0;
          line-height: 1.5;
        }

        .btn-reset-light {
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          color: #334155;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.825rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
};
