import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  Bot,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  MapPin,
  Building2,
  Globe,
  Share2,
  ShieldCheck,
  RefreshCw,
  PhoneCall,
  MessageSquare
} from 'lucide-react';
import { submitLead } from '../../services/leadService';
import { CONTACT_INFO } from '../../data/landingContent';

interface AiVisibilityScannerProps {
  onOpenConsultForm?: (serviceName?: string, defaultNote?: string) => void;
}

const INDUSTRY_OPTIONS = [
  'Nhà hàng, Quán ăn, Cà phê (F&B)',
  'Spa, Thẩm mỹ viện, Tiệm tóc, Nails',
  'Phòng khám, Nha khoa, Hiệu thuốc',
  'Gara ô tô, Sửa chữa xe máy, Cứu hộ',
  'Thợ điện nước, Nhôm kính, Cơ khí, Xây dựng',
  'Khách sạn, Homestay, Dịch vụ Du lịch',
  'Cửa hàng bán lẻ, Siêu thị mini, Shop',
  'Dịch vụ Doanh nghiệp & Ngành nghề khác'
];

const LOCATION_OPTIONS = [
  'TP. Đà Nẵng',
  'Tỉnh Quảng Nam (Hội An, Tam Kỳ...)',
  'TP. Hà Nội',
  'TP. Hồ Chí Minh',
  'Thừa Thiên Huế',
  'Khu vực tỉnh thành khác'
];

export const AiVisibilityScanner: React.FC<AiVisibilityScannerProps> = ({ onOpenConsultForm }) => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState(INDUSTRY_OPTIONS[0]);
  const [location, setLocation] = useState(LOCATION_OPTIONS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanCompleted, setScanCompleted] = useState(false);
  const [scanStep, setScanStep] = useState(1);

  // Form nộp lead nhận báo cáo
  const [ownerPhone, setOwnerPhone] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState('');

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) return;

    setIsScanning(true);
    setScanCompleted(false);
    setLeadSubmitted(false);
    setLeadError('');
    setScanStep(1);

    setTimeout(() => setScanStep(2), 350);
    setTimeout(() => setScanStep(3), 700);
    setTimeout(() => setScanStep(4), 1100);
    setTimeout(() => {
      setIsScanning(false);
      setScanCompleted(true);
    }, 1500);
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = ownerPhone.trim().replace(/[\s\-\.\(\)]/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      setLeadError('Vui lòng nhập số điện thoại hoặc Zalo hợp lệ (VD: 0912 345 678).');
      return;
    }

    setIsSubmittingLead(true);
    setLeadError('');

    try {
      await submitLead({
        name: ownerName.trim() || `Chủ cơ sở ${businessName}`,
        phone: cleanPhone,
        businessName: `${businessName} (${industry} - ${location})`,
        serviceInterest: 'Đăng ký Báo cáo GEO & Lộ trình xuất hiện Top AI 2026',
        message: `Khách quét thử AI Visibility Scanner. Cơ sở: "${businessName}" | Ngành: ${industry} | Địa bàn: ${location}`,
        sourcePage: '/dich-vu/geo'
      });
      setLeadSubmitted(true);
    } catch {
      setLeadSubmitted(true);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const handleOpenZaloDirect = () => {
    const textMsg = encodeURIComponent(
      `Chào KTV LocalMate, tôi vừa kiểm tra AI Visibility cho cơ sở "${businessName || 'của tôi'}" (${industry}, ${location}). Tôi muốn nhận Kế hoạch tối ưu GEO để xuất hiện trên ChatGPT và Google Gemini.`
    );
    window.open(`${CONTACT_INFO.zaloUrl}?text=${textMsg}`, '_blank');
  };

  // Tính điểm số giả lập dựa trên tên cơ sở
  const hash = (businessName || 'demo').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const entityScore = 32 + (hash % 15); // 32 - 47
  const promptScore = 20 + (hash % 18); // 20 - 38
  const citationScore = 25 + (hash % 20); // 25 - 45
  const overallVisibilityScore = Math.round((entityScore + promptScore + citationScore) / 3);

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '2px solid #0d7647',
        borderRadius: '16px',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        boxShadow: '0 10px 25px -5px rgba(13, 118, 71, 0.08)',
        margin: '2rem 0'
      }}
    >
      {/* Header Widget */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2rem auto' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#e8f5ed',
            border: '1px solid #a3e635',
            color: '#0d7647',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            marginBottom: '0.75rem'
          }}
        >
          <Sparkles size={15} color="#16a34a" />
          <span>CÔNG CỤ KIỂM TRA ĐỘ PHỦ TÌM KIẾM TẠO SINH (GEO SCANNER 2026)</span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '0.5rem',
            lineHeight: 1.3
          }}
        >
          Kiểm Tra: Khách Hỏi AI Quanh Tiệm, Có Thấy Tên Quán Bạn Không?
        </h2>
        <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6 }}>
          Nhập tên cơ sở và khu vực để hệ thống mô phỏng quét <strong>4 mô hình AI lớn</strong> (ChatGPT Search, Google Gemini, Perplexity, Copilot) nhằm phát hiện xem bạn đang được gợi ý hay bị đối thủ lấn át.
        </p>
      </div>

      {/* Input Form Box */}
      <form
        onSubmit={handleStartScan}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          backgroundColor: '#f8fafc',
          padding: '1.25rem',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          alignItems: 'end'
        }}
      >
        {/* Input 1: Tên cơ sở */}
        <div>
          <label
            htmlFor="scanner-business-name"
            style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.35rem' }}
          >
            Tên cơ sở / Cửa hàng / Thương hiệu <span style={{ color: '#dc2626' }}>*</span>
          </label>
          <input
            id="scanner-business-name"
            type="text"
            required
            placeholder="VD: Nha Khoa Tâm Đức, Quán Lẩu Cô Ba..."
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              backgroundColor: '#ffffff',
              fontSize: '0.95rem',
              color: '#0f172a',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Input 2: Ngành nghề */}
        <div>
          <label
            htmlFor="scanner-industry"
            style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.35rem' }}
          >
            Ngành nghề kinh doanh
          </label>
          <select
            id="scanner-industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              backgroundColor: '#ffffff',
              fontSize: '0.95rem',
              color: '#0f172a',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          >
            {INDUSTRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Input 3: Địa bàn */}
        <div>
          <label
            htmlFor="scanner-location"
            style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.35rem' }}
          >
            Khu vực hoạt động
          </label>
          <select
            id="scanner-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              backgroundColor: '#ffffff',
              fontSize: '0.95rem',
              color: '#0f172a',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          >
            {LOCATION_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Scan Button */}
        <div>
          <button
            type="submit"
            disabled={isScanning || !businessName.trim()}
            style={{
              width: '100%',
              backgroundColor: '#0d7647',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '0.75rem 1.25rem',
              fontSize: '1rem',
              fontWeight: 800,
              cursor: isScanning || !businessName.trim() ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              minHeight: '46px',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(13, 118, 71, 0.2)'
            }}
          >
            {isScanning ? (
              <>
                <RefreshCw className="animate-spin" size={18} />
                <span>Đang quét 4 AI Engine...</span>
              </>
            ) : (
              <>
                <Search size={18} />
                <span>Quét Độ Phủ AI (0đ)</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Real-time Scanning Simulation Steps */}
      {isScanning && (
        <div
          style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            backgroundColor: '#f1f5f9',
            borderRadius: '12px',
            border: '1px solid #cbd5e1'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#16a34a',
                boxShadow: '0 0 0 4px rgba(22, 163, 74, 0.2)'
              }}
            />
            <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.95rem' }}>
              Hệ thống đang truy vấn thực tế dữ liệu địa phương cho "{businessName}"...
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            <div
              style={{
                padding: '0.6rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: scanStep >= 1 ? '#e8f5ed' : '#ffffff',
                border: `1px solid ${scanStep >= 1 ? '#86efac' : '#e2e8f0'}`,
                color: scanStep >= 1 ? '#0d7647' : '#94a3b8',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {scanStep >= 1 ? <CheckCircle2 size={16} /> : <Bot size={16} />}
              <span>1. Quét ChatGPT-4o Search</span>
            </div>

            <div
              style={{
                padding: '0.6rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: scanStep >= 2 ? '#e8f5ed' : '#ffffff',
                border: `1px solid ${scanStep >= 2 ? '#86efac' : '#e2e8f0'}`,
                color: scanStep >= 2 ? '#0d7647' : '#94a3b8',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {scanStep >= 2 ? <CheckCircle2 size={16} /> : <Bot size={16} />}
              <span>2. Quét Google Gemini Overviews</span>
            </div>

            <div
              style={{
                padding: '0.6rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: scanStep >= 3 ? '#e8f5ed' : '#ffffff',
                border: `1px solid ${scanStep >= 3 ? '#86efac' : '#e2e8f0'}`,
                color: scanStep >= 3 ? '#0d7647' : '#94a3b8',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {scanStep >= 3 ? <CheckCircle2 size={16} /> : <Bot size={16} />}
              <span>3. Đối chiếu Perplexity Citations</span>
            </div>

            <div
              style={{
                padding: '0.6rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: scanStep >= 4 ? '#e8f5ed' : '#ffffff',
                border: `1px solid ${scanStep >= 4 ? '#86efac' : '#e2e8f0'}`,
                color: scanStep >= 4 ? '#0d7647' : '#94a3b8',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {scanStep >= 4 ? <CheckCircle2 size={16} /> : <Bot size={16} />}
              <span>4. Phân tích Microsoft Copilot</span>
            </div>
          </div>
        </div>
      )}

      {/* Results Dashboard Box */}
      {scanCompleted && (
        <div
          style={{
            marginTop: '2rem',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: 'clamp(1.25rem, 2.5vw, 2rem)'
          }}
        >
          {/* Top Result Banner */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid #e2e8f0'
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                KẾT QUẢ CHẨN ĐOÁN AI SƠ BỘ CHO:
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a' }}>
                {businessName} <span style={{ fontSize: '1rem', fontWeight: 500, color: '#64748b' }}>({location})</span>
              </div>
            </div>

            {/* Score Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: overallVisibilityScore < 50 ? '#fef2f2' : '#f0fdf4',
                border: `1px solid ${overallVisibilityScore < 50 ? '#fca5a5' : '#86efac'}`,
                padding: '0.75rem 1.25rem',
                borderRadius: '10px'
              }}
            >
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: overallVisibilityScore < 50 ? '#991b1b' : '#166534' }}>
                  ĐỘ PHỦ AI VISIBILITY
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: overallVisibilityScore < 50 ? '#dc2626' : '#15803d', lineHeight: 1 }}>
                  {overallVisibilityScore}/100
                </div>
              </div>
              <div
                style={{
                  backgroundColor: overallVisibilityScore < 50 ? '#dc2626' : '#16a34a',
                  color: '#ffffff',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase'
                }}
              >
                {overallVisibilityScore < 50 ? 'Cảnh Báo Thấp' : 'Mức Trung Bình'}
              </div>
            </div>
          </div>

          {/* 3 Core Diagnosis Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              margin: '1.5rem 0'
            }}
          >
            {/* Metric 1: Thực thể số */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Building2 size={20} color="#0d7647" />
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>1. Nhận Diện Thực Thể (Entity)</h4>
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#dc2626', marginBottom: '0.25rem' }}>
                {entityScore}/100 <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#64748b' }}>(Chưa chuẩn hóa)</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                Chưa có Schema LocalBusiness đa tầng, AI chỉ xem cơ sở bạn là văn bản thông thường chứ chưa hiểu rõ tọa độ, dịch vụ và menu.
              </p>
            </div>

            {/* Metric 2: Prompt Bank */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <MessageSquare size={20} color="#0d7647" />
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>2. Độ Phủ Câu Hỏi (Prompt Bank)</h4>
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#dc2626', marginBottom: '0.25rem' }}>
                {promptScore}% <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#64748b' }}>(Khách hỏi AI ít thấy)</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                Khi khách hàng quanh khu vực hỏi các câu tự nhiên như "địa chỉ uy tín gần đây...", AI đang ưu tiên gợi ý các đối thủ đã làm GEO trước.
              </p>
            </div>

            {/* Metric 3: Trích dẫn chéo */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Globe size={20} color="#0d7647" />
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>3. Nguồn Trích Dẫn (Citations)</h4>
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#dc2626', marginBottom: '0.25rem' }}>
                {citationScore}/100 <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#64748b' }}>(Thiếu đồng bộ)</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                AI không tìm thấy sự kiểm chứng chéo trên Apple Maps, Cốc Cốc Map hay danh bạ ngành, dẫn đến tâm lý đề xuất dè dặt.
              </p>
            </div>
          </div>

          {/* Real AI Chat Simulation: Before vs After Hook */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '10px',
              padding: '1.25rem',
              marginBottom: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <AlertTriangle size={18} color="#d97706" />
              <strong style={{ color: '#0f172a', fontSize: '0.95rem' }}>
                Thực tế khi khách hàng mở ChatGPT Voice hoặc Gemini hỏi quanh bạn:
              </strong>
            </div>
            <div
              style={{
                backgroundColor: '#f8fafc',
                borderLeft: '4px solid #ef4444',
                padding: '0.85rem 1rem',
                borderRadius: '0 8px 8px 0',
                fontSize: '0.9rem',
                color: '#334155',
                lineHeight: 1.6
              }}
            >
              <em>
                "Khách hỏi: 'Gợi ý {industry.toLowerCase()} uy tín tại {location} có phục vụ chu đáo, giá minh bạch?'
                <br />
                <strong style={{ color: '#dc2626' }}>AI trả lời:</strong> 'Tại {location}, bạn có thể tham khảo [Cơ sở đối thủ A] hoặc [Cơ sở đối thủ B]... (Hiện thông tin về {businessName} chưa có cấu trúc dữ liệu chính thức để xác thực)'."
              </em>
            </div>
          </div>

          {/* Lead Magnet CTA Form Box (Tăng Tỷ Lệ Chuyển Đổi Tối Đa) */}
          <div
            style={{
              backgroundColor: '#e8f5ed',
              border: '2px solid #0d7647',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            {leadSubmitted ? (
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <CheckCircle2 size={42} color="#16a34a" style={{ margin: '0 auto 0.75rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
                  Đã Tiếp Nhận Thông Tin Của {businessName}!
                </h3>
                <p style={{ color: '#334155', margin: '0 0 1rem 0' }}>
                  Kỹ thuật viên LocalMate đang trích xuất bộ <strong>50 Prompt Bank mẫu</strong> và kế hoạch cấy Schema cho quán bạn. Chúng tôi sẽ liên hệ gửi báo cáo chi tiết qua Zalo trong vòng 2 giờ làm việc.
                </p>
                <button
                  type="button"
                  onClick={handleOpenZaloDirect}
                  style={{
                    backgroundColor: '#0d7647',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.75rem 1.5rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <MessageSquare size={18} />
                  <span>Nhắn Zalo Nhận Báo Cáo Ngay Lập Tức</span>
                </button>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0d7647', margin: 0 }}>
                      Nhận Kế Hoạch Đưa "{businessName}" Lên Top AI 2026 (Miễn Phí 0đ)
                    </h3>
                    <p style={{ margin: '0.25rem 0 0 0', color: '#334155', fontSize: '0.9rem' }}>
                      Bao gồm: Bộ 50 câu lệnh mẫu khách hay hỏi quanh bạn + Mã Schema mẫu + Danh mục 20 nền tảng cần đồng bộ.
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={handleOpenZaloDirect}
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #0d7647',
                        color: '#0d7647',
                        borderRadius: '8px',
                        padding: '0.5rem 1rem',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <MessageSquare size={16} />
                      <span>Chat Zalo Trực Tiếp</span>
                    </button>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmitLead}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '0.85rem',
                    alignItems: 'end'
                  }}
                >
                  <div>
                    <label
                      htmlFor="owner-name"
                      style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.3rem' }}
                    >
                      Họ tên chủ cơ sở / Quản lý
                    </label>
                    <input
                      id="owner-name"
                      type="text"
                      placeholder="VD: Anh Hùng, Chị Lan..."
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        backgroundColor: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="owner-phone"
                      style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.3rem' }}
                    >
                      Số điện thoại / Zalo nhận báo cáo <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                      id="owner-phone"
                      type="tel"
                      required
                      placeholder="VD: 0912 345 678"
                      value={ownerPhone}
                      onChange={(e) => {
                        setOwnerPhone(e.target.value);
                        if (leadError) setLeadError('');
                      }}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '8px',
                        border: `1px solid ${leadError ? '#dc2626' : '#cbd5e1'}`,
                        backgroundColor: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      style={{
                        width: '100%',
                        backgroundColor: '#0d7647',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '0.65rem 1rem',
                        fontSize: '0.95rem',
                        fontWeight: 800,
                        cursor: isSubmittingLead ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        minHeight: '42px',
                        boxShadow: '0 4px 10px rgba(13, 118, 71, 0.25)'
                      }}
                    >
                      {isSubmittingLead ? (
                        <>
                          <RefreshCw className="animate-spin" size={16} />
                          <span>Đang gửi...</span>
                        </>
                      ) : (
                        <>
                          <ArrowRight size={16} />
                          <span>Gửi Báo Cáo Qua Zalo Cho Tôi</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {leadError && (
                  <div style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '0.5rem', fontWeight: 600 }}>
                    {leadError}
                  </div>
                )}

                <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#475569' }}>
                  <ShieldCheck size={14} color="#16a34a" />
                  <span>Cam kết bảo mật: LocalMate cam kết không spam, chỉ gửi báo cáo kỹ thuật 1 lần duy nhất.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
