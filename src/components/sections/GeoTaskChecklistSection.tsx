import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { 
  CheckCircle2, 
  Search, 
  Code2, 
  MapPin, 
  Bot, 
  FileCheck2, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  ChevronDown,
  Layers,
  BarChart3,
  Smartphone,
  Eye,
  LucideIcon
} from 'lucide-react';

export interface GeoTaskItem {
  id: string;
  title: string;
  detail: string;
  deliverable: string;
  tag: string;
  tagColor?: string;
}

export interface GeoTaskGroup {
  id: string;
  number: string;
  name: string;
  shortName: string;
  description: string;
  objective: string;
  icon: any;
  accentColor: string;
  tasks: GeoTaskItem[];
}

export const GEO_TASK_GROUPS: GeoTaskGroup[] = [
  {
    id: 'baseline',
    number: '01',
    name: 'Khảo Sát & Đo Lường Hiện Trạng Đề Xuất AI Ban Đầu',
    shortName: '1. Đo Hiện Trạng AI',
    description: 'Quét toàn diện xem các AI lớn (ChatGPT, Gemini, Perplexity) hiện đang biết gì về quán/shop của bạn và đang đề xuất đối thủ nào.',
    objective: 'Xác lập chỉ số cơ sở (Baseline Scorecard) và phát hiện các thông tin sai lệch do AI tự bịa (Hallucination).',
    icon: Search,
    accentColor: '#0d7647',
    tasks: [
      {
        id: 'task-1-1',
        title: 'Quét tỷ lệ nhắc tên (AI Mention Rate) trên ChatGPT-4o & SearchGPT',
        detail: 'Thực hiện 20 truy vấn tìm kiếm ngách địa phương trên ChatGPT có duyệt web để đo tần suất xuất hiện và vị trí xếp hạng.',
        deliverable: 'Bảng tổng hợp vị trí hiển thị ban đầu trên ChatGPT',
        tag: 'Khởi đầu'
      },
      {
        id: 'task-1-2',
        title: 'Đo lường mức độ ưu tiên trên Google Gemini & AI Overviews',
        detail: 'Kiểm thử phản hồi của Gemini khi người dùng hỏi các cụm từ gắn liền với địa danh, dịch vụ và khu vực kinh doanh của bạn.',
        deliverable: 'Báo cáo trích dẫn nguồn trên Google Gemini',
        tag: 'Cốt lõi'
      },
      {
        id: 'task-1-3',
        title: 'Kiểm toán khả năng trích nguồn trên Perplexity AI',
        detail: 'Phân tích các URL nguồn mà Perplexity trích dẫn khi trả lời câu hỏi của khách (xem website của bạn có nằm trong footnote không).',
        deliverable: 'Danh mục các liên kết nguồn được Perplexity tín nhiệm',
        tag: 'Nguồn tin'
      },
      {
        id: 'task-1-4',
        title: 'Phân tích Top 3 đối thủ đang được AI đề xuất nhiều nhất khu vực',
        detail: 'Giải mã lý do vì sao AI chọn đối thủ (do bài báo, do nhiều đánh giá Google Maps, do dữ liệu Schema hay bài viết FAQ).',
        deliverable: 'Bản đồ giải mã cấu trúc cạnh tranh AI địa phương',
        tag: 'Chiến lược'
      },
      {
        id: 'task-1-5',
        title: 'Kiểm tra lỗi ảo giác (Hallucination) về giá, giờ mở cửa & địa chỉ',
        detail: 'Phát hiện các thông tin cũ, sai giá, sai số điện thoại hoặc sai địa chỉ mà AI đang trả lời bậy cho khách hàng.',
        deliverable: 'Danh sách thông tin sai lệch cần đính chính khẩn cấp',
        tag: 'Quan trọng'
      },
      {
        id: 'task-1-6',
        title: 'Lập Bảng Điểm Chỉ Số Hiện Diện AI (AI Visibility Baseline)',
        detail: 'Tính toán điểm chuẩn tổng hợp ban đầu (0–100%) làm mốc đối chiếu minh bạch cho các tháng triển khai tiếp theo.',
        deliverable: 'File PDF/Sheets Báo Cáo Hiện Trạng AI Baseline tháng đầu',
        tag: 'Nghiệm thu'
      }
    ]
  },
  {
    id: 'schema-entity',
    number: '02',
    name: 'Chuẩn Hóa Schema JSON-LD & Entity Doanh Nghiệp Chuẩn Google & OpenAI',
    shortName: '2. Schema & Entity',
    description: 'Nạp "chứng minh thư số" vào mã nguồn website để các bot AI hiểu cấu trúc doanh nghiệp mà không cần đoán mò.',
    objective: 'Biến website thành nguồn dữ liệu xác thực (Authoritative Source) mà OpenAI GPTBot và Googlebot ưu tiên trích xuất.',
    icon: Code2,
    accentColor: '#1d4ed8',
    tasks: [
      {
        id: 'task-2-1',
        title: 'Cấu hình Schema LocalBusiness / Store / Restaurant chuẩn Schema.org',
        detail: 'Khai báo chuẩn xác loại hình kinh doanh chính xác (Café, DentalClinic, AutoRepair, Restaurant...) vào thẻ `<head>` website.',
        deliverable: 'Mã nguồn Schema JSON-LD hợp lệ 100% trên Google Rich Results',
        tag: 'Kỹ thuật'
      },
      {
        id: 'task-2-2',
        title: 'Định danh Entity duy nhất với thuộc tính @id & Wikidata Reference',
        detail: 'Gán mã định danh URI bất biến cho doanh nghiệp, liên kết tới Wikidata hoặc Google Knowledge Graph Machine ID.',
        deliverable: 'Cấu trúc Entity định danh bất biến chống nhầm lẫn thương hiệu',
        tag: 'Chuyên sâu'
      },
      {
        id: 'task-2-3',
        title: 'Khai báo thuộc tính sameAs liên kết đa nền tảng',
        detail: 'Tích hợp toàn bộ mạng xã hội, hồ sơ Google Maps, mã số thuế và fanpage chính chủ để AI xác nhận cùng một chủ sở hữu.',
        deliverable: 'Mạng lưới liên kết chéo Entity (Cross-Platform Linking)',
        tag: 'Xác thực'
      },
      {
        id: 'task-2-4',
        title: 'Schema Menu & Bảng Giá hasOfferCatalog chi tiết',
        detail: 'Đưa danh mục món ăn, dịch vụ và khung giá niêm yết vào dữ liệu có cấu trúc để AI trả lời đúng mức giá khi khách hỏi.',
        deliverable: 'Bảng giá số hóa chuẩn JSON-LD trích xuất trực tiếp',
        tag: 'Dữ liệu giá'
      },
      {
        id: 'task-2-5',
        title: 'Schema FAQPage dạng hỏi đáp trực diện cho AI trích dẫn',
        detail: 'Cài đặt bộ câu hỏi thường gặp về thanh toán, chỗ đỗ xe, chính sách mang theo thú cưng, đặt bàn trước.',
        deliverable: 'Cấu trúc FAQPage chuẩn Rich Snippets & LLM Snippets',
        tag: 'Trích nguồn'
      },
      {
        id: 'task-2-6',
        title: 'Tối ưu tệp llms.txt & mở quyền cho GPTBot, Google-Extended, PerplexityBot',
        detail: 'Cấu hình tệp `llms.txt` tại gốc website tóm tắt toàn bộ dịch vụ và cho phép các crawler AI lớn nạp dữ liệu nhanh gọn.',
        deliverable: 'Tệp https://tenmien.vn/llms.txt công khai chuẩn hóa',
        tag: 'Chuẩn mới'
      }
    ]
  },
  {
    id: 'nap-citations',
    number: '03',
    name: 'Đồng Bộ NAP (Tên - Địa Chỉ - Điện Thoại) Trên Các Danh Bạ Địa Phương',
    shortName: '3. Đồng Bộ NAP',
    description: 'Thống nhất 100% thông tin Tên - Địa chỉ - Hotline trên toàn bộ không gian mạng để AI xác minh vị trí địa lý chuẩn xác.',
    objective: 'Triệt tiêu tình trạng sai địa chỉ, nhầm hotline và giúp doanh nghiệp được chấm điểm Local Authority cao nhất.',
    icon: MapPin,
    accentColor: '#ea580c',
    tasks: [
      {
        id: 'task-3-1',
        title: 'Audit đối chiếu NAP trên Google Business Profile & Website chính thức',
        detail: 'Kiểm tra từng dấu phẩy, số nhà, phường xã, quận huyện để đảm bảo không lệch 1 ký tự giữa Website và Maps.',
        deliverable: 'Bản chuẩn hóa NAP duy nhất (Single Source of Truth)',
        tag: 'Bắt buộc'
      },
      {
        id: 'task-3-2',
        title: 'Đăng ký & xác thực thông tin trên Cốc Cốc Map',
        detail: 'Đưa doanh nghiệp lên bản đồ Cốc Cốc — công cụ tìm kiếm nội địa phổ biến với người dùng máy tính tại Việt Nam.',
        deliverable: 'Hồ sơ đã được duyệt vị trí trên Cốc Cốc Map',
        tag: 'Nội địa'
      },
      {
        id: 'task-3-3',
        title: 'Cập nhật danh bạ Trang Vàng Việt Nam (YellowPages VN)',
        detail: 'Đưa thông tin pháp nhân, ngành nghề và số hotline vào hệ thống danh bạ doanh nghiệp uy tín lâu đời.',
        deliverable: 'Liên kết hồ sơ niêm yết Trang Vàng có link dẫn về web',
        tag: 'Uy tín'
      },
      {
        id: 'task-3-4',
        title: 'Chuẩn hóa trang địa điểm Facebook Location Page & Check-in',
        detail: 'Ghim đúng tọa độ GPS, số điện thoại và địa chỉ thực tế lên Trang Facebook để khách check-in và AI đọc vị trí.',
        deliverable: 'Trang Facebook khớp 100% tọa độ Google Maps',
        tag: 'Mạng xã hội'
      },
      {
        id: 'task-3-5',
        title: 'Xử lý gộp hoặc xóa các địa điểm trùng lặp (Duplicate Cleanup)',
        detail: 'Báo cáo và dọn dẹp các địa điểm rác do khách tạo nhầm trên Google Maps gây phân tán lượt đánh giá và đề xuất.',
        deliverable: 'Dọn sạch các ghim định vị trùng lặp gây nhiễu AI',
        tag: 'Xử lý rác'
      },
      {
        id: 'task-3-6',
        title: 'Tối ưu Footer & Contact Page chuẩn Microdata địa phương',
        detail: 'Chèn thẻ định vị geo.position, ICBM latitude/longitude vào chân trang web giúp bot định vị tức thì.',
        deliverable: 'Mã chân trang web chuẩn Geo Metadata',
        tag: 'On-page'
      }
    ]
  },
  {
    id: 'prompt-engine',
    number: '04',
    name: 'Thiết Lập Bộ 50–80 Prompt Kiểm Thử & Tối Ưu Câu Trả Lời AI',
    shortName: '4. Bộ 50-80 Prompt',
    description: 'Xây dựng kịch bản truy vấn sát thực tế hành vi khách hàng địa phương và tối ưu nội dung để AI trích dẫn thương hiệu.',
    objective: 'Đảm bảo khi khách hàng hỏi bất kỳ câu hỏi nào trong ngách của bạn, AI đều tự nhiên đưa bạn vào Top 1–3 gợi ý.',
    icon: Bot,
    accentColor: '#7c3aed',
    tasks: [
      {
        id: 'task-4-1',
        title: 'Xây dựng 20 Prompt tìm kiếm giải pháp theo địa danh lân cận',
        detail: 'Tập hợp các câu lệnh thực tế: "Quán ăn gia đình gần...", "Sửa xe uy tín tại phường...", "Phòng khám nha khoa tốt gần..."',
        deliverable: 'Bộ Prompt Định Vị Địa Phương (Local Intent Matrix)',
        tag: 'Tìm kiếm gần'
      },
      {
        id: 'task-4-2',
        title: 'Xây dựng 20 Prompt so sánh và đánh giá chất lượng',
        detail: 'Kịch bản: "So sánh các quán cafe làm việc tốt nhất ở...", "Top địa chỉ làm đẹp có bảng giá minh bạch tại..."',
        deliverable: 'Bộ Prompt So Sánh & Đánh Giá (Comparison Prompts)',
        tag: 'Cân nhắc'
      },
      {
        id: 'task-4-3',
        title: 'Xây dựng 20 Prompt tìm kiếm theo ngân sách và nhóm đối tượng',
        detail: 'Kịch bản: "Ăn trưa dưới 50k gần...", "Dịch vụ kế toán trọn gói cho hộ kinh doanh mới thành lập giá bao nhiêu..."',
        deliverable: 'Bộ Prompt Ngân Sách & Nhóm Khách (Budget Intent)',
        tag: 'Chuyển đổi'
      },
      {
        id: 'task-4-4',
        title: 'Viết nội dung dạng Direct-Answer Engine trên website',
        detail: 'Soạn các đoạn văn trả lời trực diện ngắn gọn (dưới 80 từ), giàu ngữ nghĩa địa phương để LLM dễ dàng trích đoạn (snippet).',
        deliverable: '5-10 bài viết/block thông tin chuẩn LLM-Friendly Content',
        tag: 'Nội dung số'
      },
      {
        id: 'task-4-5',
        title: 'Tối ưu hóa Vector Embedding & Semantic Keywords',
        detail: 'Bổ sung các từ khóa ngữ cảnh tự nhiên (ẩm thực địa phương, không gian mở, bãi đỗ ô tô, máy lạnh...) vào cấu trúc bài viết.',
        deliverable: 'Văn bản tối ưu độ tương đồng ngữ nghĩa với câu hỏi của khách',
        tag: 'Thuật toán'
      },
      {
        id: 'task-4-6',
        title: 'Chạy thử nghiệm tự động và ghi nhận kết quả phản hồi',
        detail: 'Đưa toàn bộ bộ prompt vào ChatGPT, Gemini và Perplexity để ghi nhận tỷ lệ được AI xướng tên và nội dung phản hồi.',
        deliverable: 'Bảng tổng hợp kết quả test câu trả lời thực tế',
        tag: 'Thử nghiệm'
      }
    ]
  },
  {
    id: 'monthly-report',
    number: '05',
    name: 'Báo Cáo Định Kỳ Hàng Tháng Bằng Ảnh Chụp Màn Hình Thực Tế',
    shortName: '5. Báo Cáo Thực Tế',
    description: 'Minh bạch 100% bằng chứng trực quan: Không báo cáo chung chung, LocalMate gửi ảnh chụp thực tế màn hình chat của AI.',
    objective: 'Khách hàng nhìn thấy rõ ràng AI đang khen gì về quán, trích link nào và đề xuất quán bạn trong bối cảnh nào.',
    icon: FileCheck2,
    accentColor: '#059669',
    tasks: [
      {
        id: 'task-5-1',
        title: 'Chụp ảnh màn hình thực tế (Proof of Mention) trên ChatGPT Plus/4o',
        detail: 'Ảnh chụp nguyên vẹn giao diện chat khi người dùng hỏi các câu hỏi ngách và ChatGPT đề xuất thương hiệu của bạn.',
        deliverable: 'Tệp ảnh chụp sắc nét kèm prompt gốc và câu trả lời đầy đủ',
        tag: 'Bằng chứng'
      },
      {
        id: 'task-5-2',
        title: 'Chụp ảnh màn hình trích dẫn nguồn trên Google Gemini & Perplexity',
        detail: 'Chụp lại vị trí footnote, logo website xuất hiện ở phần nguồn trích dẫn của các công cụ AI tìm kiếm.',
        deliverable: 'Ảnh chụp trích dẫn nguồn (Citation Source Screenshots)',
        tag: 'Trực quan'
      },
      {
        id: 'task-5-3',
        title: 'Đo lường Tỷ Lệ Thị Phần Đề Xuất (AI Share of Voice - SoV)',
        detail: 'Tính toán tỷ lệ phần trăm câu hỏi mà thương hiệu của bạn được gợi ý so với tổng số prompt kiểm thử trong tháng.',
        deliverable: 'Biểu đồ tăng trưởng SoV qua các tháng',
        tag: 'Định lượng'
      },
      {
        id: 'task-5-4',
        title: 'Phát hiện câu hỏi mới phát sinh từ xu hướng khách hàng',
        detail: 'Cập nhật các thắc mắc mới mà khách du lịch hoặc người dân địa phương thường hỏi AI để bổ sung vào website.',
        deliverable: 'Danh mục 10-15 câu hỏi mới cần tối ưu cho tháng sau',
        tag: 'Cải tiến'
      },
      {
        id: 'task-5-5',
        title: 'Họp ngắn 15 phút hoặc gửi tóm tắt qua nhóm Zalo riêng',
        detail: 'Kỹ thuật viên địa phương tóm tắt ngắn gọn 3 điểm nổi bật nhất trong tháng, trả lời mọi thắc mắc của chủ quán.',
        deliverable: 'Bản tóm tắt hành động (Executive Summary) gửi thẳng Zalo',
        tag: 'Chăm sóc 1-1'
      }
    ]
  }
];

interface GeoTaskChecklistSectionProps {
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const GeoTaskChecklistSection: React.FC<GeoTaskChecklistSectionProps> = ({ onOpenConsultForm }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedGroup, setExpandedGroup] = useState<string | null>('baseline');
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({});

  const totalTasksCount = GEO_TASK_GROUPS.reduce((acc, g) => acc + g.tasks.length, 0);

  const toggleTaskCheck = (taskId: string) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const handleCTA = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm('Gói Triển Khai GEO 2.9tr/tháng');
    } else {
      window.location.href = '/lien-he';
    }
  };

  const filteredGroups = activeTab === 'all' 
    ? GEO_TASK_GROUPS 
    : GEO_TASK_GROUPS.filter((g) => g.id === activeTab);

  return (
    <section 
      id="geo-checklist"
      style={{
        backgroundColor: '#fbfcfb',
        padding: '5rem 0',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0'
      }}
    >
      <Container size="lg">
        {/* Header Section */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 1rem',
              backgroundColor: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#065f46',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            <Sparkles size={16} color="#0d7647" />
            Bảng 35 Đầu Việc Kỹ Thuật GEO Độc Quyền
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.25,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              textWrap: 'pretty'
            }}
          >
            Danh Mục Triển Khai GEO Toàn Diện <br />
            <span style={{ color: '#0d7647' }}>Gói 2.900.000đ/tháng</span> Của LocalMate
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 auto',
              textWrap: 'pretty'
            }}
          >
            Học hỏi chuẩn mực 69 tác vụ GEO từ FastMarketing quốc tế, nhưng được <strong>tinh gọn thực dụng</strong> cho hộ kinh doanh và doanh nghiệp địa phương tại Việt Nam. Làm thật, kiểm chứng thật, nghiệm thu bằng ảnh chụp màn hình thực tế từ ChatGPT, Gemini & Perplexity.
          </p>
        </div>

        {/* 4 Trust Metrics Strip */}
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
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                backgroundColor: '#ecfdf5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0d7647',
                flexShrink: 0
              }}
            >
              <Layers size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                5 Trụ Cột
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>
                Từ đo hiện trạng đến tối ưu
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                backgroundColor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1d4ed8',
                flexShrink: 0
              }}
            >
              <Code2 size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                35 Đầu Việc
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>
                Kỹ thuật chi tiết, có deliverable
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                backgroundColor: '#f3e8ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#7c3aed',
                flexShrink: 0
              }}
            >
              <Bot size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                50–80 Prompts
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>
                Bộ kiểm thử hành vi khách thật
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                backgroundColor: '#fef3c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#b45309',
                flexShrink: 0
              }}
            >
              <Eye size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                100% Ảnh Thật
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>
                Bằng chứng màn hình AI hàng tháng
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation Filter */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            padding: '0.5rem',
            backgroundColor: '#f1f5f9',
            borderRadius: '12px',
            marginBottom: '2.5rem'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              backgroundColor: activeTab === 'all' ? '#ffffff' : 'transparent',
              color: activeTab === 'all' ? '#0d7647' : '#475569',
              boxShadow: activeTab === 'all' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none'
            }}
          >
            Tất cả ({totalTasksCount} đầu việc)
          </button>

          {GEO_TASK_GROUPS.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveTab(group.id)}
              style={{
                padding: '0.6rem 1rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
                backgroundColor: activeTab === group.id ? '#ffffff' : 'transparent',
                color: activeTab === group.id ? '#0d7647' : '#475569',
                boxShadow: activeTab === group.id ? '0 2px 6px rgba(0,0,0,0.06)' : 'none'
              }}
            >
              {group.shortName} ({group.tasks.length})
            </button>
          ))}
        </div>

        {/* Task Groups Accordion / List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredGroups.map((group) => {
            const GroupIcon = group.icon;
            const isExpanded = activeTab !== 'all' || expandedGroup === group.id;

            return (
              <div
                key={group.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
                  transition: 'border-color 0.2s ease'
                }}
              >
                {/* Group Header Banner */}
                <div
                  onClick={() => {
                    if (activeTab === 'all') {
                      setExpandedGroup(expandedGroup === group.id ? null : group.id);
                    }
                  }}
                  style={{
                    padding: '1.5rem',
                    borderBottom: isExpanded ? '1px solid #f1f5f9' : 'none',
                    backgroundColor: '#ffffff',
                    cursor: activeTab === 'all' ? 'pointer' : 'default',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1, minWidth: '280px' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: group.accentColor,
                        flexShrink: 0
                      }}
                    >
                      <GroupIcon size={28} />
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: group.accentColor,
                            backgroundColor: '#f8fafc',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                            border: '1px solid #e2e8f0'
                          }}
                        >
                          Nhóm {group.number}
                        </span>
                        <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                          • {group.tasks.length} đầu việc kỹ thuật
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          margin: 0,
                          lineHeight: 1.3
                        }}
                      >
                        {group.name}
                      </h3>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: '#475569',
                        backgroundColor: '#f8fafc',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0',
                        display: 'none', // hidden on mobile via CSS inline fallback
                        maxWidth: '320px'
                      }}
                      className="desktop-objective-badge"
                    >
                      <strong>Mục tiêu:</strong> {group.objective}
                    </div>

                    {activeTab === 'all' && (
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          backgroundColor: '#f1f5f9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#475569',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease'
                        }}
                      >
                        <ChevronDown size={20} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Group Body Tasks */}
                {isExpanded && (
                  <div style={{ padding: '1.5rem' }}>
                    <div
                      style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '1rem 1.25rem',
                        marginBottom: '1.5rem',
                        fontSize: '0.9rem',
                        color: '#334155',
                        lineHeight: 1.5
                      }}
                    >
                      <strong style={{ color: '#0f172a' }}>Ý nghĩa thực tế: </strong>
                      {group.description}
                      <div style={{ marginTop: '0.4rem', color: '#0d7647', fontWeight: 600 }}>
                        🎯 {group.objective}
                      </div>
                    </div>

                    {/* Task List Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '1rem'
                      }}
                    >
                      {group.tasks.map((task) => {
                        const isChecked = Boolean(checkedTasks[task.id]);

                        return (
                          <div
                            key={task.id}
                            onClick={() => toggleTaskCheck(task.id)}
                            style={{
                              backgroundColor: isChecked ? '#f0fdf4' : '#ffffff',
                              border: isChecked ? '1px solid #86efac' : '1px solid #e2e8f0',
                              borderRadius: '10px',
                              padding: '1.1rem',
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  justifyContent: 'space-between',
                                  gap: '0.75rem',
                                  marginBottom: '0.5rem'
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                  <div
                                    style={{
                                      width: '20px',
                                      height: '20px',
                                      borderRadius: '4px',
                                      border: isChecked ? 'none' : '2px solid #94a3b8',
                                      backgroundColor: isChecked ? '#0d7647' : '#ffffff',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: '#ffffff',
                                      marginTop: '2px',
                                      flexShrink: 0
                                    }}
                                  >
                                    {isChecked && <CheckCircle2 size={16} />}
                                  </div>
                                  <h4
                                    style={{
                                      fontSize: '0.975rem',
                                      fontWeight: 700,
                                      color: isChecked ? '#065f46' : '#0f172a',
                                      margin: 0,
                                      lineHeight: 1.4
                                    }}
                                  >
                                    {task.title}
                                  </h4>
                                </div>

                                <span
                                  style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    padding: '0.2rem 0.5rem',
                                    borderRadius: '4px',
                                    backgroundColor: '#f1f5f9',
                                    color: '#475569',
                                    whiteSpace: 'nowrap'
                                  }}
                                >
                                  {task.tag}
                                </span>
                              </div>

                              <p
                                style={{
                                  fontSize: '0.85rem',
                                  color: '#475569',
                                  lineHeight: 1.5,
                                  margin: '0.5rem 0 0.75rem 1.85rem'
                                }}
                              >
                                {task.detail}
                              </p>
                            </div>

                            <div
                              style={{
                                marginLeft: '1.85rem',
                                paddingTop: '0.6rem',
                                borderTop: '1px dashed #e2e8f0',
                                fontSize: '0.8rem',
                                color: '#0d7647',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontWeight: 500
                              }}
                            >
                              <FileCheck2 size={14} color="#0d7647" />
                              <span><strong>Bàn giao:</strong> {task.deliverable}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Commitment & Callout Box */}
        <div
          style={{
            marginTop: '3.5rem',
            backgroundColor: '#ffffff',
            border: '2px solid #0d7647',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            boxShadow: '0 10px 25px rgba(13, 118, 71, 0.08)'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#0d7647',
                marginBottom: '0.5rem'
              }}
            >
              <ShieldCheck size={18} />
              CAM KẾT MINH BẠCH & TRÁCH NHIỆM KỸ THUẬT
            </div>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 0.5rem 0'
              }}
            >
              Nhận Báo Cáo Khảo Sát Hiện Trạng AI Miễn Phí Trước Khi Triển Khai
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#475569',
                margin: 0,
                lineHeight: 1.5
              }}
            >
              LocalMate sẽ chạy thử nghiệm 10 prompt ngách thực tế về quán/dịch vụ của bạn trên ChatGPT và gửi ảnh chụp đánh giá hiện trạng hoàn toàn miễn phí trong vòng 24h.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={handleCTA}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Đăng ký khảo sát AI 0đ
                <ArrowRight size={18} />
              </span>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://zalo.me/0834422439', '_blank')}
            >
              Chat Zalo Kỹ Thuật Viên
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
