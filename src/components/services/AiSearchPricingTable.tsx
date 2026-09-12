import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { CheckCircle2, XCircle, ShieldCheck, Zap, Sparkles, MapPin, PhoneCall, HelpCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';

interface AiSearchPricingTableProps {
  onOpenConsultForm?: (serviceName?: string) => void;
  activeServiceSlug?: 'geo' | 'aeo' | 'seo-ai' | 'seo-chatgpt';
}

export const AiSearchPricingTable: React.FC<AiSearchPricingTableProps> = ({
  onOpenConsultForm,
  activeServiceSlug = 'geo'
}) => {
  const handleSelectPackage = (packageName: string) => {
    if (onOpenConsultForm) {
      onOpenConsultForm(`Dịch vụ AI Search & GEO - ${packageName}`);
    } else {
      window.location.href = `tel:${CONTACT_INFO.phoneRaw}`;
    }
  };

  const packages = [
    {
      id: 'local-starter',
      name: 'Khởi Động Địa Phương',
      badge: 'Phổ biến nhất cho cơ sở đơn lẻ ⭐',
      highlight: false,
      price: '2.900.000đ',
      unit: '/ tháng',
      desc: 'Dành cho quán ăn, tiệm nails, spa, phòng khám nha khoa, gara hoặc cửa hàng kinh doanh tại 1 địa bàn quận/huyện.',
      features: [
        'Cài đặt cấu trúc Schema JSON-LD LocalBusiness & FAQPage chuẩn Google',
        'Tạo lập & đưa file chuẩn llms.txt lên website chính',
        'Đồng bộ dữ liệu thực thể NAP trên 15+ danh bạ địa phương uy tín',
        'Tối ưu bộ 30+ prompt đàm thoại mua hàng tại khu vực',
        'Tối ưu cảm xúc đánh giá khách hàng (Review Sentiment NLP)',
        'Kỹ thuật viên địa phương hỗ trợ trực tiếp 1-1 tận cơ sở',
        'Bảo hành kỹ thuật & cập nhật thuật toán AI trong 5 năm',
        'Báo cáo minh chứng ảnh chụp truy vấn AI hàng tháng'
      ],
      notIncluded: [
        'Tối ưu đa chi nhánh liên tỉnh',
        'Chiến dịch Digital PR báo chí chuyên sâu'
      ]
    },
    {
      id: 'regional-growth',
      name: 'Doanh Nghiệp Phủ Vùng',
      badge: 'Khuyên Dùng Cho Chuỗi & Dịch Vụ 🚀',
      highlight: true,
      price: '4.900.000đ',
      unit: '/ tháng',
      desc: 'Dành cho doanh nghiệp dịch vụ, chuỗi 2-5 cơ sở, phòng khám thẩm mỹ, nhà thầu thi công muốn thống trị AI trên toàn thành phố.',
      features: [
        'Bao gồm toàn bộ quyền lợi gói Khởi Động Địa Phương',
        'Mở rộng tối ưu cho chuỗi lên đến 3-5 chi nhánh hoặc toàn thành phố',
        'Xây dựng bộ 80+ prompt chuyên sâu bao phủ mọi khía cạnh ngành nghề',
        'Cấu trúc hóa nội dung Atomic Q&A phục vụ trích dẫn Answer Engines (AEO)',
        'Tối ưu xuất hiện trong khối Google AI Overviews vị trí số 0',
        'Đồng bộ Knowledge Graph trên Wikidata, OpenStreetMap, Crunchbase',
        'Ưu tiên kỹ thuật viên địa phương xử lý sự cố khẩn cấp trong 2 giờ',
        'Bảo hành kỹ thuật hạ tầng 5 năm toàn diện'
      ],
      notIncluded: [
        'Sản xuất video clip truyền hình TVC chuyên biệt'
      ]
    },
    {
      id: 'omnichannel-ai',
      name: 'Toàn Diện Cụm AI Search',
      badge: 'Thống Trị Tuyệt Đối Cụm AI',
      highlight: false,
      price: '7.900.000đ',
      unit: '/ tháng',
      desc: 'Dành cho thương hiệu lớn, tập đoàn dịch vụ đa ngành muốn phủ sóng đồng loạt trên ChatGPT, Gemini, Perplexity & Google AI.',
      features: [
        'Bao gồm toàn bộ tính năng của 4 dịch vụ: GEO + AEO + SEO AI + ChatGPT',
        'Bộ Prompt Bank 150+ kịch bản đối thoại và tìm kiếm chuyên biệt',
        'Triển khai Full Semantic Knowledge Graph đa tầng',
        'Chiến lược Digital PR trích dẫn báo chí xây dựng E-E-A-T uy tín cao',
        'Tối ưu chỉ số Information Gain & Core Web Vitals siêu tốc dưới 1s',
        'Theo dõi trực tiếp biến động Share of Model trên 4 mô hình AI lớn',
        'Bảo hành kỹ thuật cam kết hợp đồng 5 năm',
        'Kỹ sư AI & Kỹ thuật viên cao cấp đồng hành trực tiếp'
      ],
      notIncluded: []
    }
  ];

  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
      <Container size="lg">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <div
            style={{
              color: '#0d7647',
              fontWeight: 800,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem'
            }}
          >
            BẢNG GIÁ MINH BẠCH • THỰC TẾ
          </div>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
            Chi phí bình dân — Đi từ gốc rễ kỹ thuật
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, textWrap: 'pretty' }}>
            Không chém giá hàng chục triệu như các agency lớn. LocalMate xây dựng giải pháp vững chắc từ nền tảng mã nguồn, đồng hành 1-1 tại địa phương và bảo hành kỹ thuật lên đến 5 năm.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch',
            marginBottom: '3.5rem'
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                backgroundColor: pkg.highlight ? '#fcfdfd' : '#ffffff',
                border: pkg.highlight ? '2.5px solid #0d7647' : '1px solid #cbd5e1',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: pkg.highlight ? '0 12px 30px rgba(13, 118, 71, 0.12)' : '0 2px 8px rgba(0,0,0,0.04)'
              }}
            >
              {pkg.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: pkg.highlight ? '#0d7647' : '#0f172a',
                    color: '#ffffff',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '4px 14px',
                    borderRadius: '20px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {pkg.badge}
                </div>
              )}

              <div style={{ marginBottom: '1.25rem', marginTop: pkg.badge ? '0.5rem' : '0' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  {pkg.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5, margin: 0, minHeight: '40px' }}>
                  {pkg.desc}
                </p>
              </div>

              <div style={{ marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                  <span style={{ fontSize: '2.25rem', fontWeight: 900, color: pkg.highlight ? '#0d7647' : '#0f172a', lineHeight: 1 }}>
                    {pkg.price}
                  </span>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: '#64748b' }}>
                    {pkg.unit}
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#0d7647', fontWeight: 700, marginTop: '0.5rem' }}>
                  Bảo hành kỹ thuật 5 năm • KTV 1-1 tận nơi
                </div>
              </div>

              {/* Features List */}
              <div style={{ flex: 1, marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.825rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
                  Quyền lợi bao gồm:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {pkg.features.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#334155', lineHeight: 1.45 }}>
                      <CheckCircle2 size={17} color="#0d7647" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {pkg.notIncluded.map((nfeat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.45 }}>
                      <XCircle size={16} color="#cbd5e1" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ textDecoration: 'line-through' }}>{nfeat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={pkg.highlight ? 'primary' : 'white'}
                size="lg"
                onClick={() => handleSelectPackage(pkg.name)}
                style={{
                  width: '100%',
                  fontWeight: 700,
                  backgroundColor: pkg.highlight ? '#0d7647' : '#ffffff',
                  color: pkg.highlight ? '#ffffff' : '#0f172a',
                  borderColor: pkg.highlight ? '#0d7647' : '#cbd5e1'
                }}
              >
                Đăng ký gói này
              </Button>
            </div>
          ))}
        </div>

        {/* So sánh Đối Lập: Agency lớn vs LocalMate */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2.5rem',
            overflowX: 'auto'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: '3px 10px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 800 }}>
              SỰ KHÁC BIỆT CỐT LÕI
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem' }}>
              Tại sao chọn LocalMate thay vì các Agency báo giá 20–40 triệu?
            </h3>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #cbd5e1' }}>
                <th style={{ padding: '1rem', color: '#475569', fontSize: '0.9rem', width: '30%' }}>Tiêu chí so sánh</th>
                <th style={{ padding: '1rem', color: '#dc2626', fontSize: '0.95rem', width: '35%', backgroundColor: '#fef2f2' }}>
                  Agency truyền thống / FastMarketing
                </th>
                <th style={{ padding: '1rem', color: '#0d7647', fontSize: '0.95rem', width: '35%', backgroundColor: '#f0fdf4' }}>
                  Giải pháp LocalMate (Khuyên dùng)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>Mức giá dịch vụ</td>
                <td style={{ padding: '1rem', color: '#dc2626', backgroundColor: '#fef2f2' }}>
                  Từ 15.000.000đ – 45.000.000đ / tháng (rất đắt đỏ cho quán nhỏ)
                </td>
                <td style={{ padding: '1rem', color: '#0d7647', fontWeight: 700, backgroundColor: '#f0fdf4' }}>
                  Chỉ từ 2.900.000đ / tháng (tiết kiệm 75-80%)
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>Hình thức hỗ trợ</td>
                <td style={{ padding: '1rem', color: '#475569', backgroundColor: '#fef2f2' }}>
                  Chỉ làm việc online qua email/Google Meet, xa cách với thực tế quán
                </td>
                <td style={{ padding: '1rem', color: '#0d7647', fontWeight: 700, backgroundColor: '#f0fdf4' }}>
                  Kỹ thuật viên 1-1 ghé tận nơi tại địa phương, test máy cùng chủ quán
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>Cách tiếp cận kỹ thuật</td>
                <td style={{ padding: '1rem', color: '#475569', backgroundColor: '#fef2f2' }}>
                  Nặng về lý thuyết, vẽ slide phức tạp, nhiều thuật ngữ khó hiểu
                </td>
                <td style={{ padding: '1rem', color: '#0d7647', fontWeight: 700, backgroundColor: '#f0fdf4' }}>
                  Đi thẳng từ gốc: Cấu hình Schema, tệp llms.txt, Entity NAP chuẩn máy đọc
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>Chính sách bảo hành</td>
                <td style={{ padding: '1rem', color: '#475569', backgroundColor: '#fef2f2' }}>
                  Hết tháng dừng tiền là dừng hỗ trợ, lỗi mã nguồn tính phí riêng
                </td>
                <td style={{ padding: '1rem', color: '#0d7647', fontWeight: 700, backgroundColor: '#f0fdf4' }}>
                  Bảo hành kỹ thuật hạ tầng lên đến 5 năm, đồng hành lâu dài
                </td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>Quyền sở hữu dữ liệu</td>
                <td style={{ padding: '1rem', color: '#475569', backgroundColor: '#fef2f2' }}>
                  Giữ quyền tài khoản trong hệ thống agency, khó chuyển giao
                </td>
                <td style={{ padding: '1rem', color: '#0d7647', fontWeight: 700, backgroundColor: '#f0fdf4' }}>
                  Bàn giao 100% tài khoản chính chủ, mã nguồn thuộc về khách hàng
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};
