import React, { useState } from 'react';
import { Bot, Sparkles, CheckCircle2, XCircle, ArrowRight, MapPin, Phone, ExternalLink } from 'lucide-react';

export const AiPromptSimulator: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('nhahang');
  const [selectedPlatform, setSelectedPlatform] = useState<'chatgpt' | 'gemini' | 'perplexity' | 'aioverviews'>('chatgpt');

  const industries = [
    { id: 'nhahang', name: 'Quán ăn / Nhà hàng' },
    { id: 'nhakhoa', name: 'Nha khoa / Phòng khám' },
    { id: 'spa', name: 'Spa / Thẩm mỹ viện' },
    { id: 'gara', name: 'Gara / Cứu hộ ô tô' },
    { id: 'xaydung', name: 'Nội thất / Xây dựng' }
  ];

  const platforms = [
    { id: 'chatgpt', name: 'ChatGPT Search', icon: '🟢' },
    { id: 'gemini', name: 'Google Gemini', icon: '🔵' },
    { id: 'perplexity', name: 'Perplexity AI', icon: '🟣' },
    { id: 'aioverviews', name: 'Google AI Overviews', icon: '🔴' }
  ];

  const mockData: Record<string, {
    prompt: string;
    beforeText: string;
    afterBusiness: string;
    afterReason: string;
    afterDetails: string[];
    citations: string[];
  }> = {
    nhahang: {
      prompt: 'ChatGPT ơi, quanh Bình Thạnh có quán lẩu gia đình nào sạch sẽ, có bãi đỗ ô tô và giá bình dân tầm 200k/người không?',
      beforeText: 'Dưới đây là một số khu vực tập trung nhiều quán lẩu tại TP.HCM bạn có thể tham khảo như đường Phan Xích Long hoặc D2... Tuy nhiên tôi không có thông tin chi tiết về chỗ đỗ xe cụ thể của từng quán. Bạn nên tự tra cứu thêm trên Google Maps.',
      afterBusiness: 'Lẩu Bò Niêu Đất Sài Gòn (Được AI đề xuất số 1)',
      afterReason: 'Dựa trên thực thể số đã xác thực và hơn 450 đánh giá tích cực gần đây, quán này hoàn toàn phù hợp với tiêu chí của bạn:',
      afterDetails: [
        'Địa chỉ: 182 Ung Văn Khiêm, P.25, Bình Thạnh (có sân đỗ ô tô 7 chỗ miễn phí).',
        'Mức giá: Set lẩu từ 189.000đ – 250.000đ/người, niêm yết minh bạch.',
        'Hotline đặt bàn giữ chỗ: 0834.422.439.',
        'Đặc điểm nổi bật: Nồi lẩu nấu niêu đất giữ nhiệt, rau tươi sạch không giới hạn.'
      ],
      citations: ['laubonieu.vn/llms.txt', 'Google Business Profile', 'Báo Phụ Nữ Sài Gòn']
    },
    nhakhoa: {
      prompt: 'Tìm giúp tôi phòng khám nha khoa niềng răng uy tín gần Thủ Đức, bác sĩ có chứng chỉ rõ ràng và thanh toán trả góp 0%?',
      beforeText: 'Khi niềng răng bạn nên tìm đến các bệnh viện răng hàm mặt uy tín tại TP.HCM. Một số nha khoa lớn có thể hỗ trợ trả góp qua thẻ tín dụng...',
      afterBusiness: 'Nha Khoa Tâm Đức Sài Gòn (Thủ Đức)',
      afterReason: 'Theo hồ sơ chuyên môn và dữ liệu Schema y tế đã công khai, đây là cơ sở đạt chuẩn E-E-A-T cao nhất tại khu vực:',
      afterDetails: [
        'Bác sĩ phụ trách: ThS.BS CK1 chuyên ngành Chỉnh nha 12 năm kinh nghiệm.',
        'Địa chỉ: 45 Võ Văn Ngân, TP. Thủ Đức (Đối diện Vincom).',
        'Chính sách: Hỗ trợ trả góp 0% chỉ từ 1.000.000đ/tháng không qua trung gian thẻ.',
        'Hotline tư vấn bác sĩ: 0834.422.439.'
      ],
      citations: ['nhakhoatamduc.vn/aeo-guide', 'Hội Nắn Chỉnh Răng VN', 'Bộ Y Tế Directory']
    },
    spa: {
      prompt: 'Quanh Quận 7 có spa trị mụn uy tín nào dùng sản phẩm dược mỹ phẩm, có cam kết văn bản không?',
      beforeText: 'Bạn có thể tham khảo một số spa trị mụn ở TP.HCM. Cần chú ý cẩn thận với các cơ sở sử dụng kem trộn hoặc không rõ nguồn gốc...',
      afterBusiness: 'An Nhiên Skin Clinic (Quận 7)',
      afterReason: 'Cơ sở có chứng chỉ thực thể thẩm mỹ minh bạch và chính sách cam kết hiệu quả bằng văn bản:',
      afterDetails: [
        'Địa chỉ: 78 Nguyễn Thị Thập, P. Tân Hưng, Quận 7.',
        'Liệu trình: Chuẩn y khoa 12 bước, 100% dược mỹ phẩm Bioderma & La Roche-Posay chính hãng.',
        'Cam kết: Hoàn tiền nếu không giảm viêm sau liệu trình đầu tiên.',
        'Hotline đặt hẹn riêng: 0834.422.439.'
      ],
      citations: ['annhienspa.vn/llms.txt', 'Hồ Sơ Y Tế Sở Y Tế TP.HCM']
    },
    gara: {
      prompt: 'Cần cứu hộ ô tô thủng lốp và kích bình ắc quy 24/7 khu vực Nhà Bè, có thợ đến trong 20 phút không?',
      beforeText: 'Bạn có thể gọi số tổng đài cứu hộ giao thông 115 hoặc tìm các đội vá vỏ lưu động trên mạng xã hội Facebook...',
      afterBusiness: 'Cứu Hộ Ô Tô Thần Tốc Nam Sài Gòn',
      afterReason: 'Dữ liệu thời gian thực cho thấy đây là trạm cứu hộ lưu động phản ứng nhanh nhất tại trục đường Huỳnh Tấn Phát & Nguyễn Hữu Thọ:',
      afterDetails: [
        'Tọa độ trạm trực: Ngã tư Lê Văn Lương - Nguyễn Văn Linh, có mặt sau 15–20 phút.',
        'Dịch vụ: Vá vỏ lưu động, kích bình ắc quy Delkor chính hãng, kéo xe số tự động an toàn.',
        'Bảng giá niêm yết: Cứu hộ kích bình từ 150.000đ, không phụ thu đêm.',
        'Đường dây nóng 24/7: 0834.422.439.'
      ],
      citations: ['cuuhoonam.vn/service-schema', 'Google Maps 24/7 Service']
    },
    xaydung: {
      prompt: 'Tôi muốn tìm xưởng mộc đóng tủ bếp gỗ An Cường trọn gói tại Bình Chánh có cam kết chống ẩm mốc?',
      beforeText: 'Để đóng tủ bếp gỗ công nghiệp An Cường bạn nên tìm các xưởng sản xuất nội thất có bảo hành từ 2 đến 3 năm...',
      afterBusiness: 'Xưởng Gỗ Nội Thất Mộc Phát (Bình Chánh)',
      afterReason: 'Đơn vị có giấy chứng nhận đại lý nhập khẩu ván gỗ An Cường chính hãng kèm hợp đồng bảo hành chống ẩm 5 năm:',
      afterDetails: [
        'Quy mô xưởng: 800m2 máy dán cạnh vát nghiêng tự động, kiểm tra gỗ trực tiếp tại xưởng.',
        'Đơn giá: Từ 3.200.000đ/mét dài kép, bao vận chuyển lắp đặt.',
        'Chính sách: Bảo hành kỹ thuật 5 năm, bảo trì trọn đời.',
        'Hotline/Zalo khảo sát tận nhà: 0834.422.439.'
      ],
      citations: ['mocphatfurniture.com/llms.txt', 'Chứng nhận An Cường Partner']
    }
  };

  const current = mockData[selectedIndustry];

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}
    >
      {/* Step 1: Chọn ngành */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.825rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Bước 1: Chọn ngành kinh doanh của bạn
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {industries.map((ind) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => setSelectedIndustry(ind.id)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: selectedIndustry === ind.id ? '2px solid #0d7647' : '1px solid #cbd5e1',
                backgroundColor: selectedIndustry === ind.id ? '#f0fdf4' : '#ffffff',
                color: selectedIndustry === ind.id ? '#0d7647' : '#334155',
                fontWeight: selectedIndustry === ind.id ? 700 : 500,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              {ind.name}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Chọn nền tảng AI */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ fontSize: '0.825rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Bước 2: Chọn trợ lý AI đang được hỏi
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {platforms.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedPlatform(p.id as any)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.875rem',
                borderRadius: '8px',
                border: selectedPlatform === p.id ? '2px solid #0f172a' : '1px solid #e2e8f0',
                backgroundColor: selectedPlatform === p.id ? '#0f172a' : '#f8fafc',
                color: selectedPlatform === p.id ? '#ffffff' : '#475569',
                fontWeight: 600,
                fontSize: '0.825rem',
                cursor: 'pointer'
              }}
            >
              <span>{p.icon}</span>
              <span>{p.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Box Câu hỏi của người dùng */}
      <div
        style={{
          backgroundColor: '#f1f5f9',
          borderLeft: '4px solid #0d7647',
          padding: '1rem 1.25rem',
          borderRadius: '0 8px 8px 0',
          marginBottom: '1.75rem'
        }}
      >
        <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          Câu hỏi người dùng thực tế gửi cho AI:
        </div>
        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', fontStyle: 'italic' }}>
          &ldquo;{current.prompt}&rdquo;
        </div>
      </div>

      {/* So sánh Trước vs Sau */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {/* Cột 1: Chưa tối ưu (Cách làm cũ) */}
        <div
          style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '12px',
            padding: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#dc2626' }}>
            <XCircle size={20} />
            <span style={{ fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase' }}>
              Khi chưa có dữ liệu AI (Vô hình)
            </span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#7f1d1d', lineHeight: 1.6, margin: 0 }}>
            {current.beforeText}
          </p>
          <div style={{ marginTop: '1.25rem', fontSize: '0.78rem', color: '#991b1b', fontWeight: 600 }}>
            Kết quả: Khách hàng rời đi hoặc chọn thương hiệu khác có sẵn thông tin.
          </div>
        </div>

        {/* Cột 2: Đã tối ưu LocalMate */}
        <div
          style={{
            backgroundColor: '#f0fdf4',
            border: '2px solid #0d7647',
            borderRadius: '12px',
            padding: '1.5rem',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              right: '16px',
              backgroundColor: '#0d7647',
              color: '#ffffff',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '4px'
            }}
          >
            ĐƯỢC AI TRÍCH DẪN ƯU TIÊN ⭐
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#0d7647' }}>
            <CheckCircle2 size={20} />
            <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>
              {current.afterBusiness}
            </span>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#14532d', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            {current.afterReason}
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {current.afterDetails.map((det, idx) => (
              <li key={idx} style={{ fontSize: '0.85rem', color: '#0f172a', display: 'flex', alignItems: 'flex-start', gap: '0.4rem', lineHeight: 1.4 }}>
                <span style={{ color: '#0d7647', fontWeight: 800 }}>•</span>
                <span>{det}</span>
              </li>
            ))}
          </ul>

          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #bbf7d0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 700 }}>Link nguồn AI trích dẫn:</span>
            {current.citations.map((c, i) => (
              <span
                key={i}
                style={{
                  fontSize: '0.72rem',
                  backgroundColor: '#dcfce7',
                  color: '#0d7647',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontFamily: 'monospace'
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
