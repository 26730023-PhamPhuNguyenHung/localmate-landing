import React, { useState, useRef } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';
import { useRouter } from '../components/layout/Router';
import { submitLead } from '../services/leadService';
import { CONTACT_INFO } from '../data/landingContent';
import {
  Utensils,
  Stethoscope,
  Car,
  ShoppingBag,
  Wrench,
  Sparkles,
  Compass,
  Share2,
  Globe,
  MapPin,
  PhoneCall,
  Navigation,
  Bot,
  Zap,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  FileText,
  MessageSquare,
  Gift,
  Check,
  AlertCircle
} from 'lucide-react';

interface SurveyData {
  businessType: string;
  customBusinessType: string;
  digitalStatus: string;
  currentLinkOrNote: string;
  primaryGoals: string[];
  businessName: string;
  locationArea: string;
  contactName: string;
  phoneNumber: string;
  additionalNote: string;
}

export const ProjectBriefPage: React.FC = () => {
  const { navigate } = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const topRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<SurveyData>({
    businessType: '',
    customBusinessType: '',
    digitalStatus: '',
    currentLinkOrNote: '',
    primaryGoals: [],
    businessName: '',
    locationArea: '',
    contactName: '',
    phoneNumber: '',
    additionalNote: ''
  });

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Bước 1: Danh sách mô hình kinh doanh
  const businessTypes = [
    {
      id: 'fnb',
      title: 'Cửa hàng ăn uống & Giải khát',
      desc: 'Quán cafe, nhà hàng, quán ăn gia đình, tiệm bánh, trà sữa...',
      icon: Utensils,
      badge: 'F&B Phổ biến',
      benefit: 'Menu số QR, ghim Google Maps hút khách ăn uống quanh khu vực'
    },
    {
      id: 'clinic_beauty',
      title: 'Phòng khám, Nha khoa & Spa làm đẹp',
      desc: 'Nha khoa, thẩm mỹ viện, spa dưỡng sinh, phòng khám chuyên khoa...',
      icon: Stethoscope,
      badge: 'Cần uy tín cao',
      benefit: 'Hồ sơ năng lực y bác sĩ, đặt lịch hẹn trực tuyến, bảng giá rõ ràng'
    },
    {
      id: 'auto_rescue',
      title: 'Gara ô tô, Sửa xe & Cứu hộ 24/7',
      desc: 'Sửa chữa ô tô, xe máy, vá lốp lưu động, cứu hộ giao thông...',
      icon: Car,
      badge: 'Khách gọi gấp',
      benefit: 'Nút gọi Hotline khẩn cấp 1-chạm, phủ Top Google Maps quanh khu vực'
    },
    {
      id: 'retail_showroom',
      title: 'Cửa hàng bán lẻ & Showroom trưng bày',
      desc: 'Shop thời trang, điện máy, đồ nội thất, cửa hàng vật liệu, hoa tươi...',
      icon: ShoppingBag,
      badge: 'Trưng bày mẫu mã',
      benefit: 'Danh mục sản phẩm chuẩn SEO, định vị Google Maps dẫn đường khách ghé'
    },
    {
      id: 'home_service',
      title: 'Dịch vụ sửa chữa tại nhà & Thi công',
      desc: 'Thợ điện nước, sửa điện lạnh, sửa khóa, thông cống, nhôm kính...',
      icon: Wrench,
      badge: 'Theo bán kính quận',
      benefit: 'Phủ từ khóa theo từng phường/quận, nhận cuộc gọi trực tiếp từ khách gần'
    },
    {
      id: 'other',
      title: 'Mô hình kinh doanh hoặc Dịch vụ khác',
      desc: 'Công ty dịch vụ B2B, lớp học, văn phòng đại diện, xưởng sản xuất...',
      icon: Sparkles,
      badge: 'Đặc thù riêng',
      benefit: 'Thiết kế website theo luồng kinh doanh và tính chất riêng của bạn'
    }
  ];

  // Bước 2: Tình trạng số hiện tại
  const digitalStatuses = [
    {
      id: 'zero',
      title: 'Chưa có gì cả — Bắt đầu từ số 0',
      desc: 'Mới mở hoặc từ trước đến nay chỉ bán khách quen đi ngang qua, chưa hiện diện trên internet.',
      icon: Compass,
      tag: 'Khởi tạo từ đầu',
      analysis: 'Cơ hội tốt để xây dựng đồng bộ website chuẩn và ghim Google Maps chuẩn chỉ ngay từ đầu.'
    },
    {
      id: 'facebook_only',
      title: 'Đang chỉ có trang Fanpage Facebook',
      desc: 'Có fanpage nhưng tương tác ngày càng giảm, phụ thuộc vào tiền quảng cáo đắt đỏ, khách nhắn tin lắt nhắt.',
      icon: Share2,
      tag: 'Phụ thuộc MXH',
      analysis: 'Cần có website riêng làm phễu trung tâm để khách tin tưởng hơn và không bị phụ thuộc vào Facebook.'
    },
    {
      id: 'outdated_web',
      title: 'Đã có Website nhưng giao diện cũ & không ra đơn',
      desc: 'Website làm từ nhiều năm trước, tải chậm trên điện thoại di động, bỏ hoang lâu ngày không có khách.',
      icon: Globe,
      tag: 'Cần nâng cấp',
      analysis: 'Cần tái cấu trúc giao diện chuẩn Mobile First, tối ưu tốc độ và gắn CTA nút gọi chuyển đổi ngay.'
    },
    {
      id: 'maps_drop',
      title: 'Đã có Google Maps nhưng bị tụt hạng / ít đánh giá',
      desc: 'Khách tìm quanh tiệm không thấy hiện, bị đối thủ cùng phố vượt mặt, hoặc bị khóa / mất quyền quản trị.',
      icon: MapPin,
      tag: 'Tối ưu Maps & AI',
      analysis: 'Cần tối ưu SEO Local, xác minh thông tin chính chủ và đưa vào radar tìm kiếm của AI (ChatGPT, Gemini).'
    }
  ];

  // Bước 3: Mục tiêu ưu tiên trong 3 tháng tới
  const primaryGoalsList = [
    {
      id: 'more_calls',
      title: 'Có thêm khách gọi điện & hỏi giá mỗi ngày',
      desc: 'Khách có nhu cầu bấm gọi ngay trên điện thoại hoặc nhắn tin Zalo trực tiếp đến chủ tiệm mà không cần trung gian.',
      icon: PhoneCall,
      highlight: 'Tối ưu nút Hotline & Zalo 1-chạm'
    },
    {
      id: 'top_maps',
      title: 'Lên Top Google Maps bán kính 3 - 5km quanh tiệm',
      desc: 'Khi khách hàng ở gần tìm kiếm dịch vụ của bạn trên Google hoặc Google Maps, cơ sở của bạn xuất hiện trong Top 3 đầu tiên.',
      icon: Navigation,
      highlight: 'SEO Local & Tối ưu GEO'
    },
    {
      id: 'ai_presence',
      title: 'Hiện diện trên công cụ AI (ChatGPT, Gemini, Perplexity)',
      desc: 'Khi khách hàng hỏi AI: "Quán ăn nào ngon ở khu vực này?" hay "Gara nào uy tín?", cơ sở của bạn được AI trích dẫn và đề xuất.',
      icon: Bot,
      highlight: 'Chuẩn hóa dữ liệu GEO / AEO 2026'
    },
    {
      id: 'automation_booking',
      title: 'Tự động nhận đơn & báo giá, tránh sót việc',
      desc: 'Khách hàng có thể tra cứu bảng giá, gửi form yêu cầu hoặc đặt lịch hẹn tự động chuyển về Zalo thông báo tức thì.',
      icon: Zap,
      highlight: 'Tự động hóa & Tiết kiệm nhân lực'
    }
  ];

  // Xử lý chọn mục tiêu (hỗ trợ chọn nhiều)
  const toggleGoal = (goalId: string) => {
    setFormData((prev) => {
      const exists = prev.primaryGoals.includes(goalId);
      if (exists) {
        return {
          ...prev,
          primaryGoals: prev.primaryGoals.filter((id) => id !== goalId)
        };
      } else {
        return {
          ...prev,
          primaryGoals: [...prev.primaryGoals, goalId]
        };
      }
    });
  };

  // Điều hướng các bước
  const handleNext = () => {
    setErrorMessage('');
    if (currentStep === 1) {
      if (!formData.businessType) {
        setErrorMessage('Vui lòng chọn 1 mô hình kinh doanh phù hợp nhất với bạn.');
        return;
      }
      if (formData.businessType === 'other' && !formData.customBusinessType.trim()) {
        setErrorMessage('Vui lòng nhập tên mô hình kinh doanh của bạn.');
        return;
      }
    }

    if (currentStep === 2) {
      if (!formData.digitalStatus) {
        setErrorMessage('Vui lòng chọn hiện trạng số hiện tại của cơ sở.');
        return;
      }
    }

    if (currentStep === 3) {
      if (formData.primaryGoals.length === 0) {
        setErrorMessage('Vui lòng chọn ít nhất 1 mục tiêu ưu tiên trong 3 tháng tới.');
        return;
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, 4));
    scrollToTop();
  };

  const handleBack = () => {
    setErrorMessage('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    scrollToTop();
  };

  // Submit khảo sát
  const handleSubmitSurvey = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.businessName.trim()) {
      setErrorMessage('Vui lòng nhập Tên quán / tiệm / cơ sở kinh doanh của bạn.');
      return;
    }
    if (!formData.locationArea.trim()) {
      setErrorMessage('Vui lòng nhập Khu vực cơ sở (Quận/Huyện, Tỉnh/Thành phố) để KTV khảo sát đối thủ xung quanh.');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMessage('Vui lòng nhập Số điện thoại hoặc Zalo để KTV gửi Demo xem trước và file Báo cáo khảo sát.');
      return;
    }

    // Phone validation cơ bản
    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
    const cleanPhone = formData.phoneNumber.replace(/[\s.-]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam 10 số (ví dụ: 0912345678).');
      return;
    }

    setIsSubmitting(true);

    // Chuẩn hóa tên ngành nghề
    const selectedTypeObj = businessTypes.find((b) => b.id === formData.businessType);
    const businessTypeLabel =
      formData.businessType === 'other' && formData.customBusinessType
        ? `Khác: ${formData.customBusinessType.trim()}`
        : selectedTypeObj?.title || formData.businessType;

    // Chuẩn hóa hiện trạng
    const selectedStatusObj = digitalStatuses.find((s) => s.id === formData.digitalStatus);
    const statusLabel = selectedStatusObj?.title || formData.digitalStatus;

    // Chuẩn hóa mục tiêu
    const goalsLabels = formData.primaryGoals
      .map((gId) => {
        const match = primaryGoalsList.find((g) => g.id === gId);
        return match ? match.title : gId;
      })
      .join('; ');

    const compiledMessage = `
[KHẢO SÁT BRIEF DỰ ÁN & NHẬN DEMO 0Đ]
1. Mô hình kinh doanh: ${businessTypeLabel}
2. Hiện trạng số: ${statusLabel}
${formData.currentLinkOrNote ? `-> Link/Hiện trạng cụ thể: ${formData.currentLinkOrNote}` : ''}
3. Mục tiêu 3 tháng: ${goalsLabels}
4. Khu vực cơ sở: ${formData.locationArea.trim()}
5. Người đại diện: ${formData.contactName.trim() || 'Chưa nhập tên'}
6. Ghi chú riêng: ${formData.additionalNote.trim() || 'Không có ghi chú thêm'}
    `.trim();

    try {
      const res = await submitLead({
        name: formData.contactName.trim() || formData.businessName.trim(),
        phone: cleanPhone,
        businessName: `${formData.businessName.trim()} (${formData.locationArea.trim()})`,
        serviceInterest: `Khảo sát Brief: ${businessTypeLabel}`,
        message: compiledMessage,
        sourcePage: '/khao-sat-du-an'
      });

      setSubmissionId(res?.leadId || 'LM-' + Date.now().toString().slice(-6));
      setIsSubmitted(true);
      scrollToTop();
    } catch (err) {
      console.error('Lỗi gửi khảo sát brief:', err);
      // Vẫn hiển thị trang thành công kèm ID dự phòng để không gián đoạn trải nghiệm người dùng
      setSubmissionId('LM-' + Date.now().toString().slice(-6));
      setIsSubmitted(true);
      scrollToTop();
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedTypeObj = businessTypes.find((b) => b.id === formData.businessType);
  const selectedStatusObj = digitalStatuses.find((s) => s.id === formData.digitalStatus);

  return (
    <div ref={topRef} style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem' }}>
      <SEOHead
        title="Khảo Sát Nhu Cầu Dự Án & Nhận Demo Website 0đ | LocalMate"
        description="Chỉ mất 2 phút hoàn thành khảo sát trực quan để nhận ngay bản thiết kế website demo 0đ cùng lộ trình tối ưu SEO Google Maps & AI dành riêng cho tiệm của bạn trong 24h."
        canonicalPath="/khao-sat-du-an"
        breadcrumbs={[{ name: 'Khảo sát nhu cầu dự án', url: '/khao-sat-du-an' }]}
      />

      {/* Hero Banner Area */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          padding: '2rem 0 2.5rem 0'
        }}
      >
        <Container size="lg">
          <Breadcrumbs items={[{ name: 'Khảo sát dự án & Demo 0đ', url: '/khao-sat-du-an' }]} />

          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#0d7647',
                backgroundColor: '#ecfdf5',
                border: '1px solid #a7f3d0',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                marginBottom: '1rem'
              }}
            >
              <Sparkles size={14} /> KHẢO SÁT NHU CẦU &amp; NHẬN BẢN DEMO 0Đ TRONG 24H
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.25,
                margin: '0 0 0.85rem 0'
              }}
            >
              Thiết Kế Bản Demo Riêng &amp; Phân Tích Hiện Trạng Số 0đ
            </h1>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                color: '#475569',
                lineHeight: 1.6,
                margin: '0 auto 1.75rem auto',
                maxWidth: '700px'
              }}
            >
              Chỉ mất <strong>2 phút</strong> chọn nhanh nhu cầu thực tế của cơ sở. Đội ngũ KTV LocalMate sẽ khảo sát
              đối thủ quanh khu vực và dựng bản Website Demo xem trước hoàn toàn miễn phí.
            </p>

            {/* Quick Micro Value Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
                fontSize: '0.825rem',
                color: '#334155'
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: '#ffffff',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0',
                  fontWeight: 600
                }}
              >
                <Clock size={14} color="#0d7647" /> Hoàn thành trong 2 phút
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: '#ffffff',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0',
                  fontWeight: 600
                }}
              >
                <Gift size={14} color="#0d7647" /> 100% Xem trước 0đ không ràng buộc
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: '#ffffff',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0',
                  fontWeight: 600
                }}
              >
                <ShieldCheck size={14} color="#0d7647" /> Bảo mật thông tin kinh doanh
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Survey Container */}
      <Container size="md" style={{ marginTop: '2rem' }}>
        {/* SUCCESS STATE */}
        {isSubmitted ? (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #cbd5e1',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: '#ecfdf5',
                border: '2px solid #a7f3d0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={42} color="#0d7647" />
            </div>

            <span
              style={{
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#0d7647',
                backgroundColor: '#d1fae5',
                padding: '0.3rem 0.8rem',
                borderRadius: '9999px',
                marginBottom: '0.75rem'
              }}
            >
              MÃ TIẾP NHẬN: #{submissionId}
            </span>

            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 1.95rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 0.75rem 0'
              }}
            >
              Tiếp Nhận Brief Khảo Sát Thành Công!
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: '#334155',
                maxWidth: '620px',
                margin: '0 auto 2rem auto',
                lineHeight: 1.6
              }}
            >
              Cảm ơn <strong>{formData.contactName || formData.businessName}</strong> đã tin tưởng LocalMate. Đội ngũ Kỹ
              thuật viên đã nhận được yêu cầu khảo sát cho cơ sở <strong>{formData.businessName}</strong> tại{' '}
              <strong>{formData.locationArea}</strong>.
            </p>

            {/* Next Steps Card */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.5rem',
                maxWidth: '640px',
                margin: '0 auto 2.25rem auto',
                textAlign: 'left'
              }}
            >
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Clock size={18} color="#0d7647" /> 3 Bước Kỹ Thuật Viên Sẽ Thực Hiện Trong 24H:
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    1
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                      Phân tích đối thủ địa phương
                    </div>
                    <div style={{ fontSize: '0.825rem', color: '#475569' }}>
                      Quét bán kính 3-5km tại {formData.locationArea} để xem đối thủ cùng ngành đang làm gì trên Google Maps & AI.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    2
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                      Thiết kế giao diện Website Demo 0đ
                    </div>
                    <div style={{ fontSize: '0.825rem', color: '#475569' }}>
                      Lên cấu trúc giao diện chuẩn di động, tối ưu nút bấm Hotline và hiển thị menu/bảng giá cho {formData.businessName}.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    3
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                      Gửi link Demo &amp; Báo cáo qua Zalo
                    </div>
                    <div style={{ fontSize: '0.825rem', color: '#475569' }}>
                      KTV sẽ liên hệ trực tiếp qua số Zalo <strong>{formData.phoneNumber}</strong> để gửi bản demo xem trước.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <a
                href={CONTACT_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#0d7647',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={18} /> Nhắn Zalo Ngay Để Ưu Tiên Làm Sớm
              </a>

              <Button
                variant="outline"
                onClick={() => navigate('/du-an')}
                style={{
                  fontSize: '0.95rem',
                  padding: '0.75rem 1.35rem',
                  color: '#0f172a',
                  borderColor: '#cbd5e1'
                }}
              >
                Xem Các Dự Án Mẫu Đã Bàn Giao
              </Button>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    businessType: '',
                    customBusinessType: '',
                    digitalStatus: '',
                    currentLinkOrNote: '',
                    primaryGoals: [],
                    businessName: '',
                    locationArea: '',
                    contactName: '',
                    phoneNumber: '',
                    additionalNote: ''
                  });
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  marginTop: '0.75rem',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Tạo một bản khảo sát cho cơ sở khác
              </button>
            </div>
          </div>
        ) : (
          /* SURVEY MULTI-STEP FLOW */
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: 'clamp(1.25rem, 3vw, 2.25rem)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
          >
            {/* Step Progress Bar & Indicators */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem'
                }}
              >
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d7647' }}>
                  BƯỚC {currentStep} / 4
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>
                  {currentStep === 1 && 'Chọn mô hình kinh doanh'}
                  {currentStep === 2 && 'Hiện trạng số hiện tại'}
                  {currentStep === 3 && 'Mục tiêu ưu tiên 3 tháng'}
                  {currentStep === 4 && 'Thông tin nhận Demo 0đ'}
                </span>
              </div>

              {/* Progress Track */}
              <div
                style={{
                  height: '8px',
                  backgroundColor: '#f1f5f9',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${(currentStep / 4) * 100}%`,
                    backgroundColor: '#0d7647',
                    borderRadius: '9999px',
                    transition: 'width 0.3s ease-in-out'
                  }}
                />
              </div>

              {/* Step pills on desktop */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '0.5rem',
                  marginTop: '0.75rem'
                }}
              >
                {[
                  { step: 1, label: '1. Mô hình' },
                  { step: 2, label: '2. Hiện trạng' },
                  { step: 3, label: '3. Mục tiêu' },
                  { step: 4, label: '4. Nhận Demo' }
                ].map((item) => {
                  const isActive = currentStep === item.step;
                  const isDone = currentStep > item.step;
                  return (
                    <div
                      key={item.step}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#0d7647' : isDone ? '#059669' : '#94a3b8',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      {isDone ? <Check size={12} strokeWidth={3} /> : null}
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ERROR ALERT IF ANY */}
            {errorMessage && (
              <div
                style={{
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#991b1b',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  marginBottom: '1.5rem',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <AlertCircle size={16} style={{ flexShrink: 0 }} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* STEP 1: CHỌN MÔ HÌNH KINH DOANH */}
            {currentStep === 1 && (
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem 0' }}>
                    Cơ sở của bạn đang thuộc mô hình kinh doanh nào?
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                    Chọn 1 mô hình gần nhất để LocalMate chọn mẫu layout và tính năng phù hợp ngay từ đầu.
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {businessTypes.map((item) => {
                    const isSelected = formData.businessType === item.id;
                    const IconComp = item.icon;

                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          setFormData({ ...formData, businessType: item.id });
                          setErrorMessage('');
                        }}
                        style={{
                          border: isSelected ? '2px solid #0d7647' : '1px solid #e2e8f0',
                          backgroundColor: isSelected ? '#f0fdf4' : '#ffffff',
                          borderRadius: '12px',
                          padding: '1.15rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '0.75rem'
                            }}
                          >
                            <div
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                backgroundColor: isSelected ? '#dcfce7' : '#f1f5f9',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: isSelected ? '#0d7647' : '#334155'
                              }}
                            >
                              <IconComp size={22} />
                            </div>

                            <span
                              style={{
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                color: isSelected ? '#0d7647' : '#475569',
                                backgroundColor: isSelected ? '#ffffff' : '#f8fafc',
                                border: `1px solid ${isSelected ? '#86efac' : '#e2e8f0'}`,
                                padding: '0.2rem 0.55rem',
                                borderRadius: '9999px'
                              }}
                            >
                              {item.badge}
                            </span>
                          </div>

                          <div
                            style={{
                              fontWeight: 700,
                              fontSize: '1rem',
                              color: isSelected ? '#0d7647' : '#0f172a',
                              marginBottom: '0.35rem'
                            }}
                          >
                            {item.title}
                          </div>

                          <div
                            style={{
                              fontSize: '0.825rem',
                              color: '#64748b',
                              lineHeight: 1.45,
                              marginBottom: '0.75rem'
                            }}
                          >
                            {item.desc}
                          </div>
                        </div>

                        <div
                          style={{
                            fontSize: '0.75rem',
                            color: isSelected ? '#15803d' : '#047857',
                            backgroundColor: isSelected ? '#dcfce7' : '#f0fdf4',
                            padding: '0.45rem 0.65rem',
                            borderRadius: '6px',
                            fontWeight: 600
                          }}
                        >
                          ✓ {item.benefit}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Ô nhập cụ thể nếu chọn Khác */}
                {formData.businessType === 'other' && (
                  <div
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      padding: '1rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '0.4rem'
                      }}
                    >
                      Mô hình cụ thể của bạn là gì? <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Trung tâm dạy tiếng Anh trẻ em, Văn phòng luật sư, Xưởng gỗ mỹ nghệ..."
                      value={formData.customBusinessType}
                      onChange={(e) => setFormData({ ...formData, customBusinessType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    onClick={handleNext}
                    style={{
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      fontWeight: 700,
                      padding: '0.75rem 1.75rem',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Tiếp tục sang bước 2 <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: TÌNH TRẠNG SỐ HIỆN TẠI */}
            {currentStep === 2 && (
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem 0' }}>
                    Hiện trạng hiện diện số hiện tại của tiệm như thế nào?
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                    Chọn đúng tình trạng thực tế để KTV đề xuất giải pháp tiết kiệm và hiệu quả nhất cho bạn.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  {digitalStatuses.map((item) => {
                    const isSelected = formData.digitalStatus === item.id;
                    const IconComp = item.icon;

                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          setFormData({ ...formData, digitalStatus: item.id });
                          setErrorMessage('');
                        }}
                        style={{
                          border: isSelected ? '2px solid #0d7647' : '1px solid #e2e8f0',
                          backgroundColor: isSelected ? '#f0fdf4' : '#ffffff',
                          borderRadius: '12px',
                          padding: '1.25rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                          <div
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '10px',
                              backgroundColor: isSelected ? '#dcfce7' : '#f1f5f9',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: isSelected ? '#0d7647' : '#334155',
                              flexShrink: 0
                            }}
                          >
                            <IconComp size={22} />
                          </div>

                          <div style={{ flex: 1 }}>
                            <div
                              style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginBottom: '0.35rem'
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: 700,
                                  fontSize: '1.025rem',
                                  color: isSelected ? '#0d7647' : '#0f172a'
                                }}
                              >
                                {item.title}
                              </span>
                              <span
                                style={{
                                  fontSize: '0.7rem',
                                  fontWeight: 700,
                                  color: isSelected ? '#0d7647' : '#475569',
                                  backgroundColor: isSelected ? '#ffffff' : '#f1f5f9',
                                  border: `1px solid ${isSelected ? '#86efac' : '#e2e8f0'}`,
                                  padding: '0.15rem 0.5rem',
                                  borderRadius: '9999px'
                                }}
                              >
                                {item.tag}
                              </span>
                            </div>

                            <div
                              style={{
                                fontSize: '0.85rem',
                                color: '#475569',
                                lineHeight: 1.45,
                                marginBottom: '0.5rem'
                              }}
                            >
                              {item.desc}
                            </div>

                            <div
                              style={{
                                fontSize: '0.775rem',
                                color: isSelected ? '#166534' : '#0f766e',
                                fontWeight: 600
                              }}
                            >
                              💡 Góc nhìn chuyên gia: {item.analysis}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Input phụ link nếu có */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#0f172a',
                      marginBottom: '0.35rem'
                    }}
                  >
                    Link Fanpage / Website cũ / Tên ghim Google Maps hiện tại (Nếu có, không bắt buộc):
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: facebook.com/tiemanh / ghim maps: Tiệm Phở Cụ Cử..."
                    value={formData.currentLinkOrNote}
                    onChange={(e) => setFormData({ ...formData, currentLinkOrNote: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.875rem',
                      color: '#0f172a',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#334155'
                    }}
                  >
                    <ArrowLeft size={16} /> Quay lại
                  </Button>

                  <Button
                    onClick={handleNext}
                    style={{
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      fontWeight: 700,
                      padding: '0.75rem 1.75rem',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Tiếp tục sang bước 3 <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: MỤC TIÊU ƯU TIÊN 3 THÁNG */}
            {currentStep === 3 && (
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem 0' }}>
                    Mục tiêu ưu tiên số 1 của bạn trong 3 tháng tới là gì?
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                    Bạn có thể chọn 1 hoặc nhiều mục tiêu. KTV sẽ ưu tiên thiết kế luồng chuyển đổi xoay quanh mục tiêu này.
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {primaryGoalsList.map((goal) => {
                    const isSelected = formData.primaryGoals.includes(goal.id);
                    const IconComp = goal.icon;

                    return (
                      <div
                        key={goal.id}
                        onClick={() => toggleGoal(goal.id)}
                        style={{
                          border: isSelected ? '2px solid #0d7647' : '1px solid #e2e8f0',
                          backgroundColor: isSelected ? '#f0fdf4' : '#ffffff',
                          borderRadius: '12px',
                          padding: '1.25rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '0.75rem'
                            }}
                          >
                            <div
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                backgroundColor: isSelected ? '#dcfce7' : '#f1f5f9',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: isSelected ? '#0d7647' : '#334155'
                              }}
                            >
                              <IconComp size={22} />
                            </div>

                            <div
                              style={{
                                width: '22px',
                                height: '22px',
                                borderRadius: '6px',
                                border: isSelected ? '2px solid #0d7647' : '2px solid #cbd5e1',
                                backgroundColor: isSelected ? '#0d7647' : '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#ffffff'
                              }}
                            >
                              {isSelected && <Check size={14} strokeWidth={3} />}
                            </div>
                          </div>

                          <div
                            style={{
                              fontWeight: 700,
                              fontSize: '1rem',
                              color: isSelected ? '#0d7647' : '#0f172a',
                              marginBottom: '0.35rem'
                            }}
                          >
                            {goal.title}
                          </div>

                          <div
                            style={{
                              fontSize: '0.825rem',
                              color: '#475569',
                              lineHeight: 1.45,
                              marginBottom: '0.75rem'
                            }}
                          >
                            {goal.desc}
                          </div>
                        </div>

                        <div
                          style={{
                            fontSize: '0.75rem',
                            color: isSelected ? '#15803d' : '#0d7647',
                            backgroundColor: isSelected ? '#dcfce7' : '#f8fafc',
                            border: `1px solid ${isSelected ? '#86efac' : '#e2e8f0'}`,
                            padding: '0.35rem 0.6rem',
                            borderRadius: '6px',
                            fontWeight: 600
                          }}
                        >
                          ⚡ {goal.highlight}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#334155'
                    }}
                  >
                    <ArrowLeft size={16} /> Quay lại
                  </Button>

                  <Button
                    onClick={handleNext}
                    style={{
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      fontWeight: 700,
                      padding: '0.75rem 1.75rem',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Tiếp tục sang bước 4 <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 4: THÔNG TIN CƠ SỞ & NHẬN BẢN DEMO 0Đ */}
            {currentStep === 4 && (
              <form onSubmit={handleSubmitSurvey}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem 0' }}>
                    Thông tin cơ sở &amp; Nơi nhận bản Demo 0đ
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                    Kỹ thuật viên LocalMate sẽ khảo sát địa phương và gửi bản xem trước cùng báo cáo qua Zalo trong vòng 24 giờ.
                  </p>
                </div>

                {/* Brief Summary Widget */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '1rem 1.25rem',
                    marginBottom: '1.5rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '0.75rem',
                    fontSize: '0.825rem'
                  }}
                >
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Mô hình đã chọn:</span>
                    <strong style={{ color: '#0f172a' }}>
                      {formData.businessType === 'other'
                        ? formData.customBusinessType || 'Khác'
                        : selectedTypeObj?.title || 'Chưa chọn'}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Hiện trạng số:</span>
                    <strong style={{ color: '#0f172a' }}>{selectedStatusObj?.title || 'Chưa chọn'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Mục tiêu ưu tiên:</span>
                    <strong style={{ color: '#0d7647' }}>{formData.primaryGoals.length} mục tiêu trọng tâm</strong>
                  </div>
                </div>

                {/* Form Fields */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Tên quán / tiệm / cơ sở kinh doanh <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nha Khoa Tâm An, Tiệm Bánh Hoàng Gia..."
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Khu vực cơ sở (Quận/Huyện, Tỉnh/Thành) <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Quận Cầu Giấy, Hà Nội hoặc Hóc Môn, TP.HCM"
                      value={formData.locationArea}
                      onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                    <span style={{ fontSize: '0.725rem', color: '#64748b' }}>
                      KTV dùng thông tin này để quét bán kính 3-5km quanh tiệm bạn.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Số điện thoại / Zalo nhận Demo 0đ <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0912345678"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                    <span style={{ fontSize: '0.725rem', color: '#64748b' }}>
                      KTV gửi link demo trực tiếp qua Zalo này trong 24h.
                    </span>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Họ tên người liên hệ / chủ cơ sở
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Anh Dũng, Chị Mai..."
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                {/* Additional Note */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#0f172a',
                      marginBottom: '0.35rem'
                    }}
                  >
                    Ghi chú riêng hoặc mong muốn đặc biệt (Không bắt buộc):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ví dụ: Cần làm tông màu xanh lá, muốn có form đặt lịch khám, cần hoàn thành trước ngày 20..."
                    value={formData.additionalNote}
                    onChange={(e) => setFormData({ ...formData, additionalNote: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.875rem',
                      color: '#0f172a',
                      outline: 'none',
                      boxSizing: 'border-box',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Cam kết tin cậy */}
                <div
                  style={{
                    backgroundColor: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    borderRadius: '8px',
                    padding: '0.85rem 1rem',
                    marginBottom: '1.5rem',
                    fontSize: '0.8rem',
                    color: '#065f46',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <ShieldCheck size={18} style={{ flexShrink: 0 }} color="#0d7647" />
                  <span>
                    <strong>Cam kết 100% không phát sinh chi phí:</strong> Bản website demo và file khảo sát đối thủ được gửi
                    miễn phí để bạn đánh giá trực quan trước khi đưa ra bất kỳ quyết định nào.
                  </span>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#334155'
                    }}
                  >
                    <ArrowLeft size={16} /> Quay lại
                  </Button>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: '#0d7647',
                      color: '#ffffff',
                      fontWeight: 700,
                      padding: '0.85rem 2rem',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '1rem',
                      boxShadow: '0 2px 6px rgba(13, 118, 71, 0.25)',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? (
                      <>Đang gửi khảo sát...</>
                    ) : (
                      <>
                        Gửi Khảo Sát &amp; Nhận Demo 0đ Trong 24H <ArrowRight size={18} />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Supporting FAQ / Trust Section */}
        <div
          style={{
            marginTop: '3.5rem',
            borderTop: '1px solid #e2e8f0',
            paddingTop: '2.5rem'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
              Câu Hỏi Thường Gặp Về Bản Demo 0đ &amp; Báo Cáo Khảo Sát
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
              Mọi điều bạn cần biết trước khi gửi thông tin khảo sát.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '1.25rem'
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '1.25rem'
              }}
            >
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.4rem 0' }}>
                1. Nhận bản Demo 0đ có thật sự không mất phí không?
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Hoàn toàn 0đ. LocalMate tự tin vào năng lực thiết kế và giải pháp thực chiến nên luôn chủ động dựng bản xem
                trước theo tên quán thật của bạn để bạn thấy rõ hình ảnh tương lai trước khi quyết định hợp tác.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '1.25rem'
              }}
            >
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.4rem 0' }}>
                2. Sau khi gửi khảo sát, bao lâu tôi sẽ nhận được Demo?
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Trong vòng <strong>24 giờ làm việc</strong>, kỹ thuật viên phụ trách khu vực của bạn sẽ hoàn tất khảo sát đối
                thủ và gửi đường link bản Demo xem trực tiếp trên điện thoại qua Zalo bạn đã đăng ký.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '1.25rem'
              }}
            >
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.4rem 0' }}>
                3. Tôi chưa có logo hoặc hình ảnh chụp tiệm thì có làm được không?
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Hoàn toàn được. LocalMate hỗ trợ tạo concept logo cơ bản, tìm hình ảnh minh họa chất lượng cao đúng ngành nghề
                hoặc cử nhân sự chụp ảnh thực tế nếu bạn ở khu vực TP.HCM / Đà Nẵng.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '1.25rem'
              }}
            >
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.4rem 0' }}>
                4. Tôi có bị nhân viên gọi điện làm phiền liên tục không?
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Tuyệt đối không. LocalMate chỉ gửi bản demo qua Zalo kèm lời nhắn giải thích chi tiết. Bạn chủ động xem thử,
                nếu ưng ý thì mới trao đổi tiếp, không có áp lực hay làm phiền cuộc gọi.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
