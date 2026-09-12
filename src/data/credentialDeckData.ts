/**
 * LOCALMATE CREDENTIAL PROPOSAL 2026 — 40 SLIDES DATA SSOT
 * Định vị: "LocalMate - Người đồng hành số cho doanh nghiệp địa phương
 * (Đưa công việc lên môi trường số, tìm khách hàng, tự động hóa vận hành, bảo hành kỹ thuật 5 năm)"
 *
 * Cấu trúc 4 phần chuẩn mực (40 slides):
 * - Phần 1: Giới thiệu & Năng lực (Slide 01 - 07)
 * - Phần 2: Hệ thống Giải pháp 5 Trụ Cột (Slide 08 - 24)
 * - Phần 3: Case Studies & Tình Huống Thực Tế (Slide 25 - 36)
 * - Phần 4: Hợp tác & Cam kết (Slide 37 - 40)
 */

export interface CredentialMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface CredentialQuote {
  text: string;
  author: string;
  role: string;
}

export interface CredentialSlide {
  id: string;
  index: number;
  screen: string;
  label: string;
  title: string;
  partId: 'part-1' | 'part-2' | 'part-3' | 'part-4';
  partTitle: string;
  isDivider: boolean;
  summary: string;
  bullets: string[];
  metrics: CredentialMetric[];
  tags: string[];
  quote: CredentialQuote;
  notes: string;
}

export interface CredentialPart {
  id: 'part-1' | 'part-2' | 'part-3' | 'part-4';
  partNumber: number;
  title: string;
  subtitle: string;
  slidesCount: number;
  slideRange: string;
  description: string;
}

export const CREDENTIAL_PARTS: CredentialPart[] = [
  {
    id: 'part-1',
    partNumber: 1,
    title: 'Giới thiệu & Năng lực',
    subtitle: 'Nền móng kỹ thuật và năng lực triển khai thực tế',
    slidesCount: 7,
    slideRange: '01 - 07',
    description: 'Bản sắc, định vị, pháp nhân chính thức và mạng lưới 250+ doanh nghiệp tin cậy cùng hạ tầng kỹ thuật chuẩn quốc tế.'
  },
  {
    id: 'part-2',
    partNumber: 2,
    title: 'Hệ thống Giải pháp 5 Trụ Cột',
    subtitle: 'Khung kiến trúc số hóa toàn diện cho kinh doanh địa phương',
    slidesCount: 17,
    slideRange: '08 - 24',
    description: 'Từ thiết kế Sales Hub, tối ưu Local AI Search (AEO/GEO), tự động hóa CRM Mini đến checklist 35 hạng mục kỹ thuật khắt khe.'
  },
  {
    id: 'part-3',
    partNumber: 3,
    title: 'Case Studies & Tình Huống Thực Tế',
    subtitle: 'Bằng chứng đo lường từ những dự án người thật - việc thật',
    slidesCount: 12,
    slideRange: '25 - 36',
    description: '6 bài học thực chiến từ bán lẻ, phòng khám, F&B, gara ô tô, dịch vụ tại nhà đến kinh nghiệm tự thân của chính LocalMate.'
  },
  {
    id: 'part-4',
    partNumber: 4,
    title: 'Hợp tác & Cam kết',
    subtitle: 'Quy trình đồng hành 5 bước và chính sách bảo hành 5 năm',
    slidesCount: 4,
    slideRange: '37 - 40',
    description: 'Ba gói giải pháp đầu tư rõ ràng, quy trình làm việc không rủi ro và thông tin kết nối hỗ trợ 1-1 tại chỗ.'
  }
];

export const CREDENTIAL_SLIDES: CredentialSlide[] = [
  // =========================================================================
  // PHẦN 1: GIỚI THIỆU & NĂNG LỰC (SLIDE 01 - 07)
  // =========================================================================
  {
    id: 'slide-01-cover',
    index: 1,
    screen: '01',
    label: 'Bìa Hồ Sơ Năng Lực 2026',
    title: 'LocalMate: Người Đồng Hành Số Cho Doanh Nghiệp Địa Phương',
    partId: 'part-1',
    partTitle: 'Phần 1: Giới thiệu & Năng lực',
    isDivider: true,
    summary: 'Giải pháp trọn gói giúp chủ cửa hàng và doanh nghiệp vừa & nhỏ đưa toàn bộ quy trình lên môi trường số, chủ động đón khách từ Google Maps & AI Search, tự động hóa đơn hàng và an tâm vận hành nhờ bảo hành kỹ thuật 5 năm.',
    bullets: [
      'Định vị duy nhất: Người đồng hành kỹ thuật số trực tiếp tại địa phương, nói không với lý thuyết xa rời thực tế.',
      '4 Trọng tâm cam kết: Đưa việc lên số — Tìm kiếm khách hàng — Tự động hóa vận hành — Bảo hành 5 năm.',
      'Triết lý phục vụ: Làm kỹ, làm thật, bàn giao 100% quyền quản trị chính chủ cho chủ cơ sở.',
      'Sẵn sàng trải nghiệm: Khảo sát thực địa, lên bản demo trực quan trong 48h hoàn toàn miễn phí.'
    ],
    metrics: [
      { label: 'Doanh nghiệp tin chọn', value: '250+', detail: 'Cơ sở tại miền Trung & cả nước' },
      { label: 'Thời gian lên Demo', value: '48 Giờ', detail: 'Xem trước giao diện trên điện thoại' },
      { label: 'Bảo hành kỹ thuật', value: '5 Năm', detail: 'Hỗ trợ sự cố và bảo dưỡng định kỳ' }
    ],
    tags: ['Credential 2026', 'Doanh Nghiệp Địa Phương', 'Chuyển Đổi Số', 'Bảo Hành 5 Năm'],
    quote: {
      text: 'Doanh nghiệp địa phương không cần những kế hoạch viển vông hàng trăm triệu. Họ cần một người thợ kỹ thuật số lành nghề đến tận nơi, dựng nền móng chắc chắn và đồng hành dài hạn.',
      author: 'Đội ngũ Sáng lập LocalMate',
      role: 'Kỹ sư Trưởng & Cố vấn Kỹ thuật'
    },
    notes: 'Slide mở đầu gây ấn tượng bằng cam kết 5 năm độc bản và phong cách kỹ thuật địa phương mộc mạc, đáng tin cậy.'
  },
  {
    id: 'slide-02-founder-letter',
    index: 2,
    screen: '02',
    label: 'Thư Ngỏ Founder & KTV Trưởng',
    title: 'Khách Hàng Đang Hỏi AI Và Google Maps Trước Khi Họ Hỏi Bạn',
    partId: 'part-1',
    partTitle: 'Phần 1: Giới thiệu & Năng lực',
    isDivider: false,
    summary: 'Hành vi mua hàng địa phương đã đổi thay vĩnh viễn. Khi cần sửa máy lạnh, khám răng, mua thiết bị hay tìm quán ăn, khách hàng không còn hỏi hàng xóm mà tra cứu ngay trên Google Maps hoặc nhờ ChatGPT/Gemini gợi ý cơ sở uy tín nhất.',
    bullets: [
      'Sự thật hiển nhiên: Nếu cơ sở kinh doanh không xuất hiện khi khách tìm quanh đây, doanh thu đang chảy vào túi đối thủ lân cận.',
      'Nỗi đau chung: Thuê agency đắt đỏ chỉ nhận báo cáo tương tác ảo, thuê thợ ngoài thì khi web lỗi không biết tìm ai.',
      'Giải pháp LocalMate: Đóng vai trò phòng kỹ thuật số thuê ngoài, có mặt trực tiếp tại cửa hàng giải quyết từng vướng mắc.',
      'Tư duy thực tế: Đo lường bằng lượt gọi Hotline, lượt chỉ đường đến cửa hàng và đơn hàng thực nhận, không chạy đua like ảo.'
    ],
    metrics: [
      { label: 'Khách tra Maps trước', value: '82%', detail: 'Người dùng tìm dịch vụ lân cận' },
      { label: 'Chuyển sang AI Search', value: '3.4x', detail: 'Tốc độ tăng trưởng hỏi AI gợi ý' },
      { label: 'Tỷ lệ gọi ngay khi thấy', value: '65%', detail: 'Nếu có thông tin và giá rõ ràng' }
    ],
    tags: ['Thư Ngỏ', 'Hành Vi Khách Hàng', 'Thực Tế Kinh Doanh', 'Kỹ Thuật Viên 1-1'],
    quote: {
      text: 'Chúng tôi thành lập LocalMate để các chủ doanh nghiệp địa phương không còn phải bơ vơ giữa những thuật ngữ công nghệ phức tạp. Công nghệ sinh ra là để làm việc nhà và kéo khách cho bạn, không phải để làm khó bạn.',
      author: 'Kỹ Sư Trưởng LocalMate',
      role: 'Đại diện Đội ngũ Kỹ thuật'
    },
    notes: 'Đánh trúng tâm lý lo âu của chủ tiệm khi thấy lượng khách vãng lai giảm sút và các đối thủ mới nổi chiếm trọn màn hình điện thoại.'
  },
  {
    id: 'slide-03-table-of-contents',
    index: 3,
    screen: '03',
    label: 'Mục Lục Tổng Quan',
    title: 'Khung Cấu Trúc Hồ Sơ Năng Lực & Lộ Trình Đồng Hành 4 Phần',
    partId: 'part-1',
    partTitle: 'Phần 1: Giới thiệu & Năng lực',
    isDivider: false,
    summary: 'Bản đề xuất được thiết kế thành 4 phần logic chặt chẽ, dẫn dắt từ năng lực hạ tầng thật, bộ 5 trụ cột giải pháp, bằng chứng từ các case study thực tế đến quy trình cam kết bảo hành 5 năm minh bạch.',
    bullets: [
      'Phần 1 (Slide 01 - 07): Giới thiệu bản sắc, số liệu năng lực thật, đội ngũ kỹ thuật viên và hạ tầng đối tác công nghệ.',
      'Phần 2 (Slide 08 - 24): Hệ thống 5 Trụ cột Giải pháp LocalMate, tối ưu AI Search, AEO, công cụ Audit và 35 đầu việc kỹ thuật.',
      'Phần 3 (Slide 25 - 36): Phân tích 6 Case Studies thực chiến từ bán lẻ, phòng khám, F&B đến kinh nghiệm ứng dụng của LocalMate.',
      'Phần 4 (Slide 37 - 40): 3 Gói giải pháp đầu tư rõ ràng, quy trình 5 bước nghiệm thu hài lòng mới trả phí và thông tin liên hệ.'
    ],
    metrics: [
      { label: 'Tổng số slide', value: '40 Slide', detail: 'Chuẩn mực chi tiết từng khâu' },
      { label: 'Trụ cột cốt lõi', value: '5 Trụ Cột', detail: 'Bao quát toàn bộ vòng đời số' },
      { label: 'Hạng mục kiểm tra', value: '35 Đầu Việc', detail: 'Quy chuẩn kỹ thuật khắt khe' }
    ],
    tags: ['Mục Lục', 'Lộ Trình', 'Khung Kiến Trúc', '4 Phần Chuẩn'],
    quote: {
      text: 'Một hồ sơ năng lực trung thực không giấu nghề, không dùng từ ngữ mập mờ mà bày ra rõ ràng từng quy trình, từng con số để khách hàng tự đối chứng.',
      author: 'Quy chuẩn Vận hành LocalMate',
      role: 'Tiêu chuẩn Hồ sơ 2026'
    },
    notes: 'Giúp người nghe dễ dàng theo dõi mạch thuyết trình và nắm rõ những gì mình sắp được khám phá.'
  },
  {
    id: 'slide-04-verified-metrics',
    index: 4,
    screen: '04',
    label: 'Số Liệu Năng Lực Thật',
    title: 'Năng Lực Triển Khai Thực Chiến: Đo Lường Được, Không Cam Kết Ảo',
    partId: 'part-1',
    partTitle: 'Phần 1: Giới thiệu & Năng lực',
    isDivider: false,
    summary: 'Những con số minh chứng cho uy tín của LocalMate được tích lũy từ hơn 250 điểm kinh doanh thực tế, tuân thủ nguyên tắc tôn trọng dữ liệu và nói không với cam kết hão huyền.',
    bullets: [
      'Hơn 250+ điểm kinh doanh địa phương đã vận hành ổn định trên nền tảng do LocalMate thiết lập.',
      'Bàn giao bản xem thử (Demo) đúng ngành nghề chỉ sau 48 giờ làm việc kể từ lúc nhận thông tin.',
      '100% Tài khoản chính chủ: Khách hàng giữ toàn bộ mã nguồn, tài khoản Google Maps, tên miền và quảng cáo.',
      'Chính sách bảo hành kỹ thuật 5 năm duy nhất trên thị trường: Khắc phục sự cố trong vòng 4 giờ.'
    ],
    metrics: [
      { label: 'Cơ sở vận hành', value: '250+', detail: 'Khách hàng thực tế đang hoạt động' },
      { label: 'Tài khoản chính chủ', value: '100%', detail: 'Bàn giao trọn vẹn quyền Admin' },
      { label: 'Thời hạn bảo hành', value: '5 Năm', detail: 'Hỗ trợ kỹ thuật và sao lưu dữ liệu' }
    ],
    tags: ['Số Liệu Thật', 'Chính Chủ 100%', 'Bảo Hành 5 Năm', 'Cam Kết Trách Nhiệm'],
    quote: {
      text: 'Chúng tôi từ chối cam kết "Top 1 Google sau 3 ngày" vì đó là nói dối. Nhưng chúng tôi cam kết hệ thống của bạn sẽ nhanh nhất khu vực, chuẩn chỉnh dữ liệu và có mặt xử lý ngay khi gặp sự cố.',
      author: 'Chính sách Minh bạch LocalMate',
      role: 'Bộ tiêu chuẩn tiếp thị nội bộ'
    },
    notes: 'Khẳng định sự khác biệt với các agency vẽ cam kết ảo, ghi điểm nhờ tính thực chất và bảo đảm an toàn cho khách hàng.'
  },
  {
    id: 'slide-05-local-team',
    index: 5,
    screen: '05',
    label: 'Đội Ngũ Kỹ Thuật Viên',
    title: 'Đội Ngũ Kỹ Thuật Viên In-House: Hỗ Trợ 1-1 Tại Chỗ, Rõ Việc, Tận Tâm',
    partId: 'part-1',
    partTitle: 'Phần 1: Giới thiệu & Năng lực',
    isDivider: false,
    summary: 'Không qua trung gian tư vấn bán hàng (sale), khách hàng làm việc trực tiếp với kỹ thuật viên in-house am hiểu địa bàn, sẵn sàng xách máy tính đến tận cửa hàng để chụp ảnh, cài đặt và hướng dẫn nhân viên thao tác.',
    bullets: [
      'Đội ngũ kỹ thuật viên cơ hữu (In-house): Trực tiếp viết code, cấu hình hệ thống, không thuê ngoài (outsource).',
      'Hỗ trợ thực địa 1-1: Đến tận nơi đo đạc vị trí GPS, chụp ảnh mặt tiền chuẩn nhận diện và cài đặt ứng dụng vào máy của chủ.',
      'Ngôn ngữ bình dân: Giải thích rõ ràng bằng tiếng Việt đời thường, nói không với việc ném thuật ngữ chuyên môn đánh đố khách.',
      'Đường dây nóng kỹ thuật riêng: Có kênh Zalo/Telegram riêng cho từng khách hàng, phản hồi dưới 15 phút.'
    ],
    metrics: [
      { label: 'Kỹ thuật viên in-house', value: '100%', detail: 'Chuyên viên kỹ thuật trực tiếp' },
      { label: 'Thời gian phản hồi', value: '< 15 Phút', detail: 'Kênh hỗ trợ khẩn cấp 24/7' },
      { label: 'Hỗ trợ tại chỗ', value: 'Tận Cửa Hàng', detail: 'Trực tiếp tại Đà Nẵng & miền Trung' }
    ],
    tags: ['Đội Ngũ Kỹ Thuật', 'In-House', 'Hỗ Trợ 1-1', 'Tận Tâm'],
    quote: {
      text: 'Chủ tiệm không cần phải học làm lập trình viên. Việc của bạn là nấu món ngon, sửa xe giỏi, khám bệnh chuẩn; việc đưa bạn lên mạng và giữ hệ thống chạy êm cứ để chúng tôi lo.',
      author: 'Trần Văn Hoàng',
      role: 'Trưởng nhóm Kỹ thuật Thực địa'
    },
    notes: 'Nhấn mạnh tính địa phương, tính sẵn sàng ghé tận nơi hỗ trợ, tạo cảm giác an tâm tuyệt đối so với các dịch vụ online xa xôi.'
  },
  {
    id: 'slide-06-client-network',
    index: 6,
    screen: '06',
    label: 'Mạng Lưới Khách Hàng',
    title: 'Mạng Lưới Khách Hàng Địa Phương: Đa Dạng Ngành Nghề Đã Triển Khai',
    partId: 'part-1',
    partTitle: 'Phần 1: Giới thiệu & Năng lực',
    isDivider: false,
    summary: 'Hơn 250 doanh nghiệp từ chuỗi ẩm thực F&B, phòng khám nha khoa, gara sửa xe đến đội thợ thi công tại nhà đã và đang tạo ra doanh thu đều đặn nhờ hệ thống nền tảng số của LocalMate.',
    bullets: [
      'Ngành F&B & Dịch vụ giải trí: Chuỗi quán ăn đặc sản, tiệm cà phê, cơ sở lưu trú homestay đón khách vãng lai và du lịch.',
      'Y tế & Chăm sóc sức khỏe: Phòng khám nha khoa, thẩm mỹ viện, spa, trung tâm vật lý trị liệu cần lịch hẹn chuẩn xác.',
      'Kỹ thuật & Cứu hộ ô tô/xe máy: Gara sơn sửa ô tô, trạm cứu hộ lốp 24/7, tiệm đồ chơi xe hơi cần khách gọi khẩn cấp.',
      'Thợ thi công & Dịch vụ gia đình: Cơ sở nhôm kính, mái tôn, điện lạnh, thông nghẹt cống cần khách hàng trong bán kính 10km.'
    ],
    metrics: [
      { label: 'Nhóm ngành phục vụ', value: '12+ Nhóm', detail: 'Bao quát toàn bộ dịch vụ đời sống' },
      { label: 'Tỷ lệ khách gia hạn', value: '94%', detail: 'Gia hạn gói chăm sóc kỹ thuật hàng năm' },
      { label: 'Cuộc gọi phát sinh/tháng', value: '45.000+', detail: 'Ghi nhận qua hệ thống nút bấm gọi' }
    ],
    tags: ['Khách Hàng', 'F&B', 'Nha Khoa', 'Gara Ô Tô', 'Dịch Vụ Tại Nhà'],
    quote: {
      text: 'Khách hàng ở địa phương chọn chúng tôi vì thấy các quán quen cạnh nhà mình cũng đang dùng và tạo ra khách hàng thật mỗi ngày.',
      author: 'Báo Cáo Cộng Đồng LocalMate',
      role: 'Đánh giá mạng lưới đối tác'
    },
    notes: 'Liệt kê các ngành nghề tương đồng để khách hàng đối chiếu ngay mô hình của mình và thấy được tính khả thi.'
  },
  {
    id: 'slide-07-tech-stack-partners',
    index: 7,
    screen: '07',
    label: 'Hạ Tầng & Công Nghệ',
    title: 'Hạ Tầng Cloudflare Edge & Chuẩn Dữ Liệu Quốc Tế Cho Doanh Nghiệp Nhỏ',
    partId: 'part-1',
    partTitle: 'Phần 1: Giới thiệu & Năng lực',
    isDivider: false,
    summary: 'LocalMate không dùng các mã nguồn cồng kềnh dễ nhiễm mã độc. Chúng tôi xây dựng hạ tầng dựa trên mạng lưới biên Cloudflare Edge toàn cầu, chuẩn cấu trúc Schema.org và OpenSearch để dữ liệu doanh nghiệp kết nối thông suốt với mọi công cụ AI.',
    bullets: [
      'Cloudflare Edge Network: Website được phân phối qua hơn 300 trung tâm dữ liệu, chống tấn công DDoS và tải tức thì.',
      'Google Business Profile API: Tích hợp đồng bộ dữ liệu địa điểm, giờ mở cửa và bài đăng trực tiếp với Google.',
      'Schema.org Chuẩn Địa Phương: Đóng gói dữ liệu chuẩn JSON-LD (LocalBusiness, MedicalBusiness, AutomotiveBusiness...).',
      'OpenSearch & llms.txt: Chuẩn bị tệp dữ liệu máy chủ đặc biệt giúp ChatGPT, Gemini và Perplexity đọc hiểu dịch vụ chuẩn xác.'
    ],
    metrics: [
      { label: 'Tốc độ phản hồi Edge', value: '< 50ms', detail: 'Trung tâm dữ liệu gần người dùng nhất' },
      { label: 'Thời gian hoạt động (Uptime)', value: '99.98%', detail: 'Không lo sập web khi khách truy cập đông' },
      { label: 'Chứng chỉ bảo mật SSL', value: 'Miễn Phí', detail: 'Mã hóa cấp cao trọn đời' }
    ],
    tags: ['Cloudflare', 'Google Maps API', 'Schema.org', 'llms.txt', 'Hạ Tầng Hiện Đại'],
    quote: {
      text: 'Dù bạn chỉ là một tiệm vá vỏ xe hay phòng khám gia đình, hệ thống của bạn vẫn được vận hành trên hạ tầng công nghệ tương đương các tập đoàn quốc tế hàng đầu.',
      author: 'Nguyễn Quốc Tuấn',
      role: 'Kiến trúc sư Hạ tầng Cloud LocalMate'
    },
    notes: 'Giải thích công nghệ cao cấp bằng ứng dụng thực tiễn: chống sập web, tải siêu nhanh và sẵn sàng cho các thế hệ tìm kiếm AI.'
  },

  // =========================================================================
  // PHẦN 2: HỆ THỐNG GIẢI PHÁP 5 TRỤ CỘT (SLIDE 08 - 24)
  // =========================================================================
  {
    id: 'slide-08-five-pillars-overview',
    index: 8,
    screen: '08',
    label: 'Hệ Thống Giải Pháp 5 Trụ Cột',
    title: '5 Trụ Cột Giải Pháp Số Toàn Diện Cho Doanh Nghiệp Địa Phương',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: true,
    summary: 'Khung kiến trúc giải pháp toàn diện của LocalMate bao gồm 5 mắt xích gắn kết chặt chẽ: Nền tảng số vững chắc -> Được khách tìm thấy -> Thu hút chuyển đổi -> Tự động hóa vận hành -> Đồng hành chăm sóc dài hạn.',
    bullets: [
      'Trụ cột 1 — Xây dựng nền tảng số: Sales Hub tải cực nhanh, tên miền chính chủ, bảo mật HTTPS và chuẩn di động.',
      'Trụ cột 2 — Được khách hàng tìm thấy: Top 3 Google Maps địa phương, SEO từ khóa dịch vụ theo quận và tối ưu AI Search.',
      'Trụ cột 3 — Thu hút khách hàng: Nội dung thực chiến, trang bán hàng theo dịch vụ mũi nhọn, bộ ảnh và video sắc nét.',
      'Trụ cột 4 — Vận hành tự động hóa: CRM Mini trên Google Sheets, thông báo cuộc gọi & tin nhắn ngay về Zalo/Telegram cá nhân.',
      'Trụ cột 5 — Đồng hành chăm sóc: Bảo hành kỹ thuật 5 năm, cập nhật nội dung định kỳ và xử lý lỗi trong vòng 4 giờ.'
    ],
    metrics: [
      { label: 'Trụ cột giải pháp', value: '5 Trụ Cột', detail: 'Liền mạch từ A đến Z' },
      { label: 'Dịch vụ chuyên sâu', value: '41 Dịch Vụ', detail: 'Đáp ứng mọi bài toán phát sinh' },
      { label: 'Tỷ lệ che phủ quy trình', value: '100%', detail: 'Không bỏ sót bất kỳ mắt xích nào' }
    ],
    tags: ['5 Trụ Cột', 'Kiến Trúc Số', 'Vận Hành Toàn Diện', 'Local Business Engine'],
    quote: {
      text: 'Làm số hóa cũng giống như xây một ngôi nhà: móng phải vững (Trụ cột 1), có biển hiệu rõ (Trụ cột 2), cửa hàng bày đẹp (Trụ cột 3), quản lý thông minh (Trụ cột 4) và bảo trì đều đặn (Trụ cột 5).',
      author: 'Cẩm Nang Kiến Trúc Giải Pháp',
      role: 'Hội đồng Cố vấn LocalMate'
    },
    notes: 'Slide bản lề mở ra toàn bộ khung giải pháp cốt lõi, chứng minh LocalMate cung cấp giải pháp đồng bộ chứ không bán dịch vụ lẻ loi.'
  },
  {
    id: 'slide-09-ai-search-geo-framework',
    index: 9,
    screen: '09',
    label: 'Khung Giải Pháp GEO & AI Search',
    title: 'Định Vị Doanh Nghiệp Trong Kỷ Nguyên Trí Tuệ Nhân Tạo & Local AI Search',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Generative Engine Optimization (GEO) là bước tiến tiếp theo của SEO. Khi khách hàng hỏi ChatGPT, Gemini hoặc Bing Copilot tìm dịch vụ quanh đây, hệ thống của LocalMate đảm bảo doanh nghiệp bạn xuất hiện trong câu trả lời gợi ý kèm liên kết xác thực.',
    bullets: [
      'Chuyển đổi từ SEO truyền thống sang GEO: Không chỉ tối ưu cho cỗ máy tìm kiếm Google mà tối ưu trực tiếp cho mô hình ngôn ngữ lớn (LLM).',
      'Định dạng cấu trúc tri thức: Chuyển toàn bộ thế mạnh, bảng giá, địa chỉ và phản hồi của khách thành tệp vector tri thức chuẩn hóa.',
      'Trích dẫn nguồn uy tín: Xây dựng mạng lưới xác thực đa kênh (Google Profile, Facebook, báo chí địa phương, diễn đàn đánh giá).',
      'Tối ưu hóa phản hồi tức thì: Đảm bảo AI luôn lấy được thông tin giờ mở cửa và hotline mới nhất, không báo nhầm cho khách.'
    ],
    metrics: [
      { label: 'Tỷ lệ tăng hiển thị trên AI', value: '+310%', detail: 'Khi áp dụng chuẩn hóa GEO' },
      { label: 'Độ chính xác thông tin trích dẫn', value: '99.2%', detail: 'Số điện thoại, địa chỉ và dịch vụ' },
      { label: 'Công cụ AI hỗ trợ', value: '5+ Nền tảng', detail: 'ChatGPT, Gemini, Copilot, Perplexity, Apple' }
    ],
    tags: ['GEO', 'Local AI Search', 'ChatGPT', 'Gemini', 'Perplexity'],
    quote: {
      text: 'Năm 2026, khách hàng không đọc hết 10 kết quả Google nữa. Họ nhờ AI tóm tắt 3 nơi tốt nhất gần họ. Nếu bạn không có tên trong 3 lựa chọn đó, bạn vô hình.',
      author: 'Lê Minh Tuấn',
      role: 'Chuyên gia Tối ưu hóa GEO LocalMate'
    },
    notes: 'Tạo bước đột phá so với các đơn vị thiết kế web cũ, khẳng định LocalMate đi đầu xu hướng AI Search tại Việt Nam.'
  },
  {
    id: 'slide-10-why-local-presence-now',
    index: 10,
    screen: '10',
    label: 'Bối Cảnh Thị Trường',
    title: 'Vì Sao Doanh Nghiệp Địa Phương Cần Hiện Diện Số Chuẩn GEO Ngay Hôm Nay?',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Chi phí thuê mặt bằng vật lý ngày càng đắt đỏ trong khi lưu lượng người đi bộ ngoài đường giảm dần. Mặt bằng số trên Google Maps và AI Search chính là mặt tiền đắc địa thứ hai quyết định sống còn của điểm kinh doanh.',
    bullets: [
      'Mặt bằng vật lý giảm giá trị: Khách hàng ngồi phòng máy lạnh mở điện thoại tìm quán ăn hoặc thợ sửa chữa trước khi bước chân ra đường.',
      'Hiệu ứng "Gần Tôi" (Near Me): Lượng tìm kiếm kèm định vị vị trí tăng trưởng hơn 400% trong 2 năm qua.',
      'Chi phí giữ chỗ ngày càng cao nếu đi sau: Đối thủ ghim Maps trước và có nhiều đánh giá sẽ chiếm trọn vị trí Top 3, rất khó lật đổ về sau.',
      'Lợi thế người tiên phong: Chuẩn hóa dữ liệu GEO sớm giúp cơ sở của bạn trở thành nguồn dữ liệu gốc được AI ghi nhớ trọn đời.'
    ],
    metrics: [
      { label: 'Tìm kiếm "quanh đây"', value: '+400%', detail: 'Tăng trưởng trong 2 năm qua' },
      { label: 'Tỷ lệ chuyển đổi ghé tiệm', value: '76%', detail: 'Đến cửa hàng trong 24 giờ sau tìm' },
      { label: 'Mặt bằng số', value: 'Chi Phí 1/10', detail: 'So với tiền thuê mặt bằng phố lớn' }
    ],
    tags: ['Bối Cảnh', 'Near Me', 'Mặt Bằng Số', 'Cơ Hội Tiên Phong'],
    quote: {
      text: 'Một vị trí đẹp trên đường Trường Chinh hay Nguyễn Văn Linh tốn vài chục triệu mỗi tháng. Nhưng một vị trí Top 1 trên Google Maps và ChatGPT phục vụ bạn 24/7 với chi phí chỉ bằng vài ly cà phê mỗi ngày.',
      author: 'Nguyễn Đình Phúc',
      role: 'Tư vấn Chuyển đổi số Doanh nghiệp'
    },
    notes: 'Thuyết phục chủ cơ sở nhìn nhận chi phí số hóa là khoản đầu tư sinh lời trực tiếp thay vì là một khoản phí tổn vô ích.'
  },
  {
    id: 'slide-11-impacted-businesses',
    index: 11,
    screen: '11',
    label: 'Tác Động Thị Trường',
    title: 'Những Nhóm Ngành Bị Tác Động Trực Tiếp Khi Hành Vi Tìm Kiếm Đổi Mới',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Bất kỳ dịch vụ nào có tính chất cấp thiết hoặc giá trị cao trong bán kính 10km đều đang chịu ảnh hưởng sâu sắc bởi sự thay đổi từ việc hỏi bạn bè sang hỏi cỗ máy tìm kiếm thông minh.',
    bullets: [
      'Dịch vụ khẩn cấp (Emergency Services): Cứu hộ ô tô, mở khóa, thông nghẹt, sửa điện lạnh — khách bấm gọi người đầu tiên xuất hiện.',
      'Dịch vụ niềm tin y tế & thẩm mỹ: Khám răng, làm đẹp, phục hồi chức năng — khách đọc kỹ đánh giá và hỏi AI về tay nghề bác sĩ.',
      'Ẩm thực F&B & Trải nghiệm: Nhà hàng, quán cafe, karaoke — khách xem ảnh menu, giá niêm yết và không gian trước khi đặt bàn.',
      'Thương mại bán lẻ chuyên dụng: Cửa hàng thiết bị âm thanh, máy lọc nước, đồ thể thao — khách tra cứu sẵn model và giá bán tại kho.'
    ],
    metrics: [
      { label: 'Tác động trực tiếp', value: '88%', detail: 'Khách chọn dịch vụ khẩn cấp trong top 3' },
      { label: 'Đọc review trước khi chi', value: '92%', detail: 'Khách hàng phân khúc y tế và làm đẹp' },
      { label: 'Thoát trang nếu không có giá', value: '73%', detail: 'Khách muốn thấy biểu phí minh bạch' }
    ],
    tags: ['Tác Động', 'Khẩn Cấp', 'Niềm Tin', 'Bán Lẻ', 'Ẩm Thực'],
    quote: {
      text: 'Khách hàng không còn kiên nhẫn hỏi han inbox chờ đợi 30 phút. Họ tìm cơ sở nào có số điện thoại bấm gọi được ngay, có bảng giá rõ ràng và vị trí gần họ nhất.',
      author: 'Khảo Sát Khách Hàng Địa Phương 2026',
      role: 'Bộ phận Nghiên cứu Thị trường LocalMate'
    },
    notes: 'Giúp khách hàng tự nhận diện ngành nghề của mình trong danh sách và nhận thức tính cấp bách của dự án.'
  },
  {
    id: 'slide-12-target-models',
    index: 12,
    screen: '12',
    label: 'Mô Hình Phù Hợp',
    title: 'Giải Pháp Của LocalMate Phù Hợp Nhất Với Những Mô Hình Kinh Doanh Nào?',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Chúng tôi thiết kế hệ thống tinh gọn, may đo chính xác cho các mô hình kinh doanh thực chiến, không tuyển dụng nhân sự IT cồng kềnh nhưng cần một giải pháp số vận hành trơn tru tự động.',
    bullets: [
      'Cửa hàng độc lập (Single Store): Cần khẳng định vị thế số 1 trong bán kính phường, quận của mình.',
      'Chuỗi chi nhánh nhỏ (2 - 5 điểm): Cần đồng bộ hình ảnh, giá bán và phân luồng khách hàng về đúng chi nhánh gần nhất.',
      'Đội thợ dịch vụ lưu động: Không cần mặt bằng hoành tráng, chỉ cần website giới thiệu năng lực để gửi Zalo chốt hợp đồng nhanh.',
      'Cơ sở gia đình truyền thống: Đang chuyển giao thế hệ, thế hệ kế nghiệp muốn hiện đại hóa cách bán hàng và lưu trữ thông tin khách.'
    ],
    metrics: [
      { label: 'Thời gian làm quen hệ thống', value: '< 30 Phút', detail: 'Nhân viên lớn tuổi cũng thao tác được' },
      { label: 'Chi phí nhân sự IT tiết kiệm', value: '15 Tr/tháng', detail: 'Không cần thuê nhân sự công nghệ riêng' },
      { label: 'Khả năng quản lý tập trung', value: '1 Ứng Dụng', detail: 'Theo dõi toàn bộ đơn và khách qua điện thoại' }
    ],
    tags: ['Mô Hình Phù Hợp', 'Cửa Hàng Đơn', 'Chuỗi Chi Nhánh', 'Thợ Dịch Vụ'],
    quote: {
      text: 'Giải pháp tốt nhất không phải là giải pháp nhiều tính năng nhất, mà là giải pháp vừa vặn nhất với năng lực vận hành và túi tiền của bạn.',
      author: 'Nguyên Tắc Thiết Kế Sản Phẩm',
      role: 'Đội ngũ Phát triển LocalMate'
    },
    notes: 'Tạo cảm giác thân thiện, xóa tan rào cản tâm lý sợ công nghệ phức tạp của các chủ tiệm truyền thống.'
  },
  {
    id: 'slide-13-multi-location-scale',
    index: 13,
    screen: '13',
    label: 'Khả Năng Mở Rộng',
    title: 'Năng Lực Mở Rộng Chuỗi & Đồng Hành Kỹ Thuật Đa Chi Nhánh Tỉnh Thành',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Khi bạn mở thêm chi nhánh thứ hai, thứ ba tại Đà Nẵng, Quảng Nam, Huế hay TP.HCM, kiến trúc số của LocalMate cho phép nhân bản vị trí, phân bổ dữ liệu tự động mà không phải xây dựng lại từ đầu.',
    bullets: [
      'Kiến trúc đa chi nhánh tập trung: Một tên miền thương hiệu duy nhất quản lý hàng chục trang chi nhánh con chuẩn vị trí GPS.',
      'Điều hướng thông minh theo định vị khách: Khách ở quận nào tự động được gợi ý số hotline và bản đồ chỉ đường của chi nhánh đó.',
      'Quản lý đánh giá tập trung: Nhận thông báo review xấu hoặc tốt của tất cả các chi nhánh về một bảng điều khiển duy nhất.',
      'Đồng bộ dữ liệu bảng giá tức thì: Cập nhật giá khuyến mãi một lần, toàn bộ hệ thống web và bản đồ tự động áp dụng.'
    ],
    metrics: [
      { label: 'Thời gian mở thêm chi nhánh số', value: '24 Giờ', detail: 'Cấu hình hoàn chỉnh vị trí mới' },
      { label: 'Chi phí phát sinh mỗi điểm', value: 'Cực Thấp', detail: 'Tận dụng hạ tầng lõi đã có' },
      { label: 'Độ đồng bộ nhận diện', value: '100%', detail: 'Chuẩn hóa hình ảnh trên toàn hệ thống' }
    ],
    tags: ['Mở Rộng Chuỗi', 'Đa Chi Nhánh', 'Đồng Bộ Hóa', 'Định Vị Thông Minh'],
    quote: {
      text: 'Chúng tôi xây dựng hệ thống với tầm nhìn mở rộng: ngày hôm nay bạn có 1 tiệm, nhưng khi bạn mở 5 tiệm, hệ thống vẫn vận hành mượt mà không cần đập đi xây lại.',
      author: 'Kiến Trúc Nhân Bản Chuỗi',
      role: 'Bộ phận Công nghệ LocalMate'
    },
    notes: 'Chứng minh năng lực đi đường dài cùng khách hàng từ quy mô khởi đầu nhỏ đến khi phát triển thành chuỗi thương hiệu.'
  },
  {
    id: 'slide-14-opensearch-llms-txt',
    index: 14,
    screen: '14',
    label: 'Công Nghệ llms.txt & OpenSearch',
    title: 'Cơ Chế Đưa Dữ Liệu Kinh Doanh Vào ChatGPT, Gemini & Copilot Bằng llms.txt',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'LocalMate là đơn vị tiên phong áp dụng tiêu chuẩn `llms.txt` và `opensearch.xml` cho doanh nghiệp địa phương. Đây là những tập tin được cấu trúc riêng biệt để các robot AI đọc trực tiếp dữ liệu sản phẩm, dịch vụ và bảng giá mà không gặp lỗi.',
    bullets: [
      'Tập tin `llms.txt` chuẩn hóa: Bảng tóm tắt súc tích chứa toàn bộ thông tin cốt lõi (tên cơ sở, dịch vụ, địa chỉ, cam kết, giá tham khảo).',
      'Chuẩn kết nối OpenSearch: Cho phép trình duyệt và các công cụ tra cứu tích hợp ô tìm kiếm nội dung doanh nghiệp của bạn tức thì.',
      'Cung cấp ngữ cảnh sạch cho AI: Loại bỏ mã rác, hình ảnh nặng; chỉ giữ lại tri thức tinh túy để AI ghi nhớ và trích dẫn chuẩn.',
      'Cập nhật tự động định kỳ: Mỗi khi bạn thay đổi số điện thoại hay thêm món mới, tệp `llms.txt` tự động cập nhật đến các crawler AI.'
    ],
    metrics: [
      { label: 'Tốc độ quét của AI Bot', value: '< 200ms', detail: 'Tối ưu cho GPTBot, Google-Extended' },
      { label: 'Tỷ lệ hiểu đúng dữ liệu', value: '98.8%', detail: 'Không bị AI bịa đặt thông tin (hallucination)' },
      { label: 'Tương thích công cụ AI', value: '100%', detail: 'Chuẩn mở được chấp nhận toàn cầu' }
    ],
    tags: ['llms.txt', 'OpenSearch', 'AI Context', 'GPTBot', 'Gemini Crawler'],
    quote: {
      text: 'Muốn AI nói tốt về bạn, trước hết bạn phải cung cấp cho nó một tài liệu dễ đọc nhất. `llms.txt` chính là chiếc thẻ căn cước số của doanh nghiệp bạn trong thế giới AI.',
      author: 'Đặng Tuấn Anh',
      role: 'Trưởng nhóm Dữ liệu & AI Search'
    },
    notes: 'Trình bày một công nghệ thời thượng nhưng với giải thích mộc mạc, tạo sự khác biệt công nghệ vượt trội.'
  },
  {
    id: 'slide-15-google-aio-aeo',
    index: 15,
    screen: '15',
    label: 'Chiến Lược AEO & Google AI Overviews',
    title: 'Tối Ưu Hóa Công Cụ Trả Lời (AEO) & Xuất Hiện Trực Tiếp Trên Google AI Overviews',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Google AI Overviews hiện nay tự động tạo câu trả lời tổng hợp ngay đầu trang tìm kiếm. Kỹ thuật Answer Engine Optimization (AEO) của LocalMate giúp thương hiệu của bạn được chọn làm nguồn trích dẫn đáng tin cậy.',
    bullets: [
      'Cấu trúc nội dung dạng Hỏi — Đáp (FAQ): Biên soạn các câu hỏi khách hàng thường tra cứu kèm câu trả lời ngắn gọn, chuẩn chuyên môn.',
      'Schema FAQPage & HowTo: Gắn mã dữ liệu có cấu trúc giúp thuật toán hiểu ngay đây là câu trả lời có giá trị cho người dùng.',
      'Khối thông tin súc tích (Direct Answer Snippet): Viết sẵn đoạn văn 45-60 từ chuẩn format để Google dễ dàng trích xuất lên đầu trang.',
      'Định danh thực thể thương hiệu (Entity Authority): Khẳng định chuyên gia trong ngành tại khu vực địa lý cụ thể.'
    ],
    metrics: [
      { label: 'Khả năng lọt AI Overviews', value: '4.2x', detail: 'So với bài viết website thông thường' },
      { label: 'Tỷ lệ nhấp chuột từ trích dẫn', value: '+45%', detail: 'Khách tin tưởng vì được AI chứng thực' },
      { label: 'Từ khóa dạng câu hỏi', value: 'Top 1 - 3', detail: 'Ví dụ: "Giá nhổ răng khôn bao nhiêu ở Đà Nẵng"' }
    ],
    tags: ['AEO', 'Google AI Overviews', 'FAQ Schema', 'Direct Snippet'],
    quote: {
      text: 'Khi khách hỏi "ở đâu sửa máy giặt uy tín gần tôi?", chúng tôi không chỉ muốn Google hiện trang web của bạn, mà muốn AI Overviews nói rõ: "Cơ sở này có 10 năm kinh nghiệm, nhận sửa tại nhà trong 30 phút".',
      author: 'Võ Minh Nhật',
      role: 'Chuyên viên Tối ưu Answer Engine'
    },
    notes: 'Định vị LocalMate nắm rất vững các thuật toán tìm kiếm mới nhất năm 2026 của Google.'
  },
  {
    id: 'slide-16-core-foundation-services',
    index: 16,
    screen: '16',
    label: 'Bộ 5 Dịch Vụ Nền Tảng',
    title: 'Bộ 5 Dịch Vụ Nền Tảng: Xây Dựng Bản Doanh Số Bền Vững & Tự Động Hóa',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Thay vì làm dàn trải tốn kém, LocalMate chắt lọc 5 dịch vụ nền tảng mang lại 80% hiệu quả tức thì cho bất kỳ cơ sở kinh doanh địa phương nào khi bắt đầu bước lên mạng.',
    bullets: [
      '1. Trang bán hàng Sales Hub di động: Tải siêu tốc, bố cục thuyết phục, hiển thị rõ 5 yếu tố cốt lõi để khách quyết định gọi điện.',
      '2. Xác minh & Tối ưu Google Maps: Đăng ký Gmail chính chủ, ghim chuẩn định vị, cập nhật ảnh chất lượng cao và chống cướp quyền sở hữu.',
      '3. Bộ nhận diện mã QR Review 5 sao: Thiết kế bảng mica để bàn có mã QR thông minh, khách quét là mở ngay form chấm 5 sao Google.',
      '4. Hệ thống thông báo đơn tự động: Khách bấm gọi hoặc gửi thông tin, chuông điện thoại chủ tiệm reo và tin nhắn đổ về Zalo trong 2 giây.',
      '5. Gói bảo dưỡng & sao lưu định kỳ: Hàng tuần hệ thống tự động backup dữ liệu, kiểm tra liên kết hỏng và cập nhật bảo mật.'
    ],
    metrics: [
      { label: 'Thời gian hoàn thiện trọn gói', value: '7 Ngày', detail: 'Nhanh chóng đưa vào hoạt động' },
      { label: 'Mức độ hài lòng khách hàng', value: '99%', detail: 'Đơn giản, dễ sử dụng' },
      { label: 'Hiệu quả mang lại', value: 'Thực Tế', detail: 'Đo lường bằng đơn và cuộc gọi' }
    ],
    tags: ['5 Dịch Vụ Nền Tảng', 'Sales Hub', 'Google Maps', 'Mã QR Review', 'Tự Động Hóa'],
    quote: {
      text: 'Đừng phức tạp hóa công nghệ. 5 món nền tảng này đã đủ giúp một tiệm bánh, phòng khám hay xưởng cơ khí đón thêm từ 20 đến 50 khách hàng mới mỗi tháng.',
      author: 'Trần Đình Quân',
      role: 'Giám đốc Vận hành Dịch vụ LocalMate'
    },
    notes: 'Cung cấp danh mục dịch vụ rõ ràng, dễ hiểu, không có chi tiết thừa thãi.'
  },
  {
    id: 'slide-17-instant-business-audit',
    index: 17,
    screen: '17',
    label: 'Công Cụ Chẩn Đoán Sức Khỏe',
    title: 'Instant Business Audit: Công Cụ Chẩn Đoán Sức Khỏe Số Tức Thì Trong 30 Giây',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Công cụ độc quyền do LocalMate phát triển cho phép quét toàn diện hồ sơ số của doanh nghiệp: kiểm tra tốc độ web, tình trạng vị trí Google Maps, lỗ hổng bảo mật và mức độ sẵn sàng cho các công cụ AI Search.',
    bullets: [
      'Quét đa chiều tức thì: Chỉ cần nhập tên cơ sở kinh doanh hoặc đường dẫn web, kết quả hiển thị sau đúng 30 giây.',
      'Đánh giá chuẩn Core Web Vitals: Đo lường chính xác tốc độ tải trang trên mạng 4G thực tế tại Việt Nam.',
      'Kiểm tra độ trùng khớp NAP (Name - Address - Phone): Phát hiện lỗi sai địa chỉ hoặc số điện thoại giữa các trang mạng xã hội.',
      'Báo cáo trực quan kèm hành động sửa chữa: Điểm số từ 0 - 100 và danh sách việc cần làm ngay để cải thiện thứ hạng.'
    ],
    metrics: [
      { label: 'Thời gian quét chẩn đoán', value: '30 Giây', detail: 'Tự động kiểm tra qua API' },
      { label: 'Tiêu chí đánh giá', value: '28 Tiêu Chí', detail: 'Bao gồm SEO, Maps, Tốc độ, AI' },
      { label: 'Chi phí chẩn đoán', value: '0 Đồng', detail: 'Hỗ trợ miễn phí cho chủ cơ sở' }
    ],
    tags: ['Instant Audit', 'Chẩn Đoán Số', 'Core Web Vitals', 'Đo NAP', 'Công Cụ Độc Quyền'],
    quote: {
      text: 'Trước khi bốc thuốc phải bắt mạch. Công cụ Audit giúp chủ cơ sở nhìn thấy điểm nghẽn của mình một cách khoa học bằng số liệu chứ không qua cảm tính.',
      author: 'Hệ Thống Phân Tích Dữ Liệu',
      role: 'LocalMate Audit Engine'
    },
    notes: 'Thể hiện năng lực công nghệ tự phát triển của LocalMate, tăng uy tín khi đi gặp khách hàng.'
  },
  {
    id: 'slide-18-ai-citation-signals',
    index: 18,
    screen: '18',
    label: 'Thuật Toán Đề Xuất AI',
    title: 'Các Tín Hiệu Số Giúp Mô Hình AI Đề Xuất Doanh Nghiệp Bạn Đầu Tiên',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Mô hình AI không đoán mò mà tổng hợp dữ liệu từ những nguồn có độ uy tín thực tế cao. LocalMate tối ưu đồng bộ 4 nhóm tín hiệu số cốt lõi để thương hiệu của bạn luôn là câu trả lời mặc định của AI.',
    bullets: [
      'Tín hiệu 1 — Dữ liệu thực thể đồng nhất (NAP Consistency): Tên, địa chỉ, số điện thoại khớp từng chữ trên mọi nền tảng.',
      'Tín hiệu 2 — Khối lượng & Chất lượng Đánh giá (Review Velocity): Đánh giá 5 sao đều đặn có kèm hình ảnh và từ khóa dịch vụ cụ thể.',
      'Tín hiệu 3 — Cấu trúc Schema Microdata sạch: Website khai báo rõ ràng ai là chủ sở hữu, bằng cấp chuyên môn và giấy phép kinh doanh.',
      'Tín hiệu 4 — Mức độ trích dẫn của bên thứ ba (Brand Citations): Được các trang báo địa phương, danh bạ doanh nghiệp uy tín nhắc tên.'
    ],
    metrics: [
      { label: 'Trọng số dữ liệu đồng nhất', value: '35%', detail: 'Yếu tố quan trọng nhất của AI' },
      { label: 'Trọng số đánh giá thật', value: '40%', detail: 'Từ người dùng địa phương có tài khoản thật' },
      { label: 'Tỷ lệ đề xuất thành công', value: '89%', detail: 'Khi thỏa mãn trọn vẹn 4 tín hiệu' }
    ],
    tags: ['Tín Hiệu AI', 'NAP', 'Review 5 Sao', 'Entity Schema', 'Trích Dẫn Số'],
    quote: {
      text: 'AI rất thông minh nhưng cũng rất cẩn trọng. Nó chỉ dám gợi ý cho người dùng những cơ sở có dữ liệu minh bạch, vị trí xác thực và khách hàng cũ khen ngợi đều đặn.',
      author: 'Phan Quốc Bảo',
      role: 'Kỹ sư Thuật toán Dữ liệu LocalMate'
    },
    notes: 'Giải thích nguyên lý AI vận hành một cách logic, giúp khách hàng hiểu vì sao cần làm kỹ từng chi tiết.'
  },
  {
    id: 'slide-19-six-core-metrics',
    index: 19,
    screen: '19',
    label: 'Chỉ Số Đo Lường Định Kỳ',
    title: 'Bộ 6 Chỉ Số Đo Lường Hiệu Quả Bạn Nhận Được Mỗi Tháng',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'LocalMate không gửi cho bạn những bản báo cáo chỉ số ảo như lượt tương tác, lượt thích hay số hiển thị vô nghĩa. Chúng tôi đo lường chính xác 6 chỉ số gắn liền trực tiếp với doanh thu cửa hàng.',
    bullets: [
      '1. Lượt bấm gọi Hotline: Số cuộc gọi thực tế của khách hàng trực tiếp từ website và Google Maps.',
      '2. Lượt yêu cầu chỉ đường (Directions): Số người dùng mở bản đồ để lái xe hoặc đi bộ đến tận cửa hàng của bạn.',
      '3. Tỷ lệ xuất hiện trên AI Search: Tần suất thương hiệu của bạn được ChatGPT và Gemini trích dẫn khi khách hỏi quanh khu vực.',
      '4. Số lượng khách điền form / nhắn tin Zalo: Lượng khách hàng chủ động để lại số điện thoại yêu cầu báo giá hoặc tư vấn.',
      '5. Điểm số đánh giá trung bình & Số review mới: Tốc độ tăng trưởng uy tín thật của cửa hàng.',
      '6. Chi phí trên mỗi khách hàng tiềm năng thực nhận (Cost Per Lead): Con số cụ thể để bạn biết tiền quảng cáo sinh lời ra sao.'
    ],
    metrics: [
      { label: 'Chỉ số đo lường cốt lõi', value: '6 Chỉ Số', detail: 'Tất cả đều quy về doanh thu thật' },
      { label: 'Tần suất gửi báo cáo', value: 'Hàng Tháng', detail: 'Kèm nhận xét của kỹ thuật viên' },
      { label: 'Độ minh bạch dữ liệu', value: '100%', detail: 'Khách tự đối chiếu với danh bạ điện thoại' }
    ],
    tags: ['6 Chỉ Số', 'Đo Lường Doanh Thu', 'Cuộc Gọi Hotline', 'Chỉ Đường Maps', 'Báo Cáo Minh Bạch'],
    quote: {
      text: 'Một chiến dịch thành công không phải là chiến dịch có 10.000 lượt like, mà là chiến dịch khiến điện thoại bàn rung chuông liên tục và khách bấm chuông cửa mỗi ngày.',
      author: 'Nguyên Tắc Báo Cáo LocalMate',
      role: 'Ban Quản trị Hiệu quả'
    },
    notes: 'Cam kết rõ ràng về phương pháp đo lường, tạo sự yên tâm cho các chủ tiệm vốn dị ứng với các báo cáo ma.'
  },
  {
    id: 'slide-20-weekly-progress-reports',
    index: 20,
    screen: '20',
    label: 'Báo Cáo Tiến Độ Minh Bạch',
    title: 'Quy Trình Cập Nhật Tiến Độ & Quản Trị Công Việc Minh Bạch Hàng Tuần',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Mọi đầu việc kỹ thuật đều được ghi chép vào bảng tiến độ trực tuyến dùng chung (SSOT Timeline). Chủ cơ sở theo dõi được ngay kỹ thuật viên hôm nay đang làm gì, đã xong hạng mục nào và kết quả ra sao mà không cần phải gọi điện giục giã.',
    bullets: [
      'Nhóm trao đổi riêng: Mỗi khách hàng có một nhóm làm việc riêng trên Zalo gồm Kỹ thuật viên trưởng, nhân sự phụ trách và chủ quán.',
      'Cập nhật tiến độ mỗi thứ Sáu: Báo cáo ngắn gọn 3 câu: Tuần này đã làm được gì — Tuần tới làm gì — Có khó khăn gì cần chủ tiệm phối hợp.',
      'Bảng kiểm tra trực tuyến: Danh sách 35 đầu việc tích xanh trạng thái theo thời gian thực (Đang làm, Đã xong, Đã nghiệm thu).',
      'Ảnh chụp bằng chứng nghiệm thu: Mỗi hạng mục hoàn thành đều có ảnh chụp màn hình hoặc video quay lại thao tác thực tế.'
    ],
    metrics: [
      { label: 'Tần suất cập nhật', value: 'Hàng Tuần', detail: 'Đúng 17h00 thứ Sáu hàng tuần' },
      { label: 'Độ trễ phản hồi tin nhắn', value: '< 15 Phút', detail: 'Trong giờ làm việc kỹ thuật' },
      { label: 'Tỷ lệ bàn giao đúng hạn', value: '98.5%', detail: 'Cam kết tiến độ bằng văn bản' }
    ],
    tags: ['Báo Cáo Tuần', 'SSOT Timeline', 'Minh Bạch Tiến Độ', 'Zalo Group'],
    quote: {
      text: 'Khách hàng sợ nhất là ký hợp đồng xong thì đơn vị làm mất hút, gọi không nghe máy. Ở LocalMate, bạn không cần hỏi chúng tôi cũng chủ động báo cáo mỗi tuần.',
      author: 'Lâm Hoàng Hải',
      role: 'Quản lý Trải nghiệm Khách hàng'
    },
    notes: 'Giải quyết triệt để nỗi sợ bị đem con bỏ chợ của các chủ tiệm khi thuê dịch vụ ngoài.'
  },
  {
    id: 'slide-21-automation-mini-crm',
    index: 21,
    screen: '21',
    label: 'Tự Động Hóa Vận Hành',
    title: 'Hệ Thống Tự Động Hóa Nhẹ Nhàng: CRM Mini & Bắn Đơn Ngay Về Zalo / Telegram',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Không cần cài đặt những phần mềm CRM cồng kềnh khó dùng trị giá hàng chục triệu. LocalMate thiết kế giải pháp CRM Mini chạy trực tiếp trên Google Sheets quen thuộc, kết nối tức thì với ứng dụng Zalo hoặc Telegram trên điện thoại của bạn.',
    bullets: [
      'Thông báo tức thì khi có khách: Khách vừa nhấn gửi số điện thoại trên web, điện thoại của bạn reo chuông báo ngay trong 2 giây.',
      'Lưu trữ dữ liệu khách hàng sạch sẽ: Tên khách, số điện thoại, dịch vụ cần làm tự động nhảy vào bảng Google Sheets riêng của bạn.',
      'Phân quyền nhân viên trực: Tự động chia thông tin khách cho thợ trực ca hoặc nhân viên trực điện thoại theo vòng quay.',
      'Không phí duy trì phần mềm hàng tháng: Tận dụng hạ tầng đám mây Google hoàn toàn miễn phí trọn đời.'
    ],
    metrics: [
      { label: 'Tốc độ đẩy thông báo', value: '1.8 Giây', detail: 'Từ web về Zalo / Telegram' },
      { label: 'Chi phí phần mềm hàng tháng', value: '0 Đồng', detail: 'Không mất tiền bản quyền CRM' },
      { label: 'Thời gian gọi lại cho khách', value: '< 3 Phút', detail: 'Tăng tỷ lệ chốt sale lên 2.5 lần' }
    ],
    tags: ['Tự Động Hóa', 'CRM Mini', 'Google Sheets', 'Zalo Webhook', 'Telegram Bot'],
    quote: {
      text: 'Khách hàng để lại số điện thoại mà sau 1 tiếng bạn mới gọi thì họ đã đi thuê chỗ khác rồi. Nhận tin báo ngay lập tức giúp bạn gọi chốt khách ngay lúc họ đang có nhu cầu cao nhất.',
      author: 'Đoàn Nhật Nam',
      role: 'Kỹ sư Tự động hóa Vận hành'
    },
    notes: 'Giải pháp cực kỳ thiết thực, đánh đúng vào nhu cầu giữ chân khách và tiết kiệm chi phí phần mềm của doanh nghiệp nhỏ.'
  },
  {
    id: 'slide-22-performance-edge-speed',
    index: 22,
    screen: '22',
    label: 'Tốc Độ & Hạ Tầng Điện Toán',
    title: 'Tối Ưu Tốc Độ Tải Trang < 0.8s Trên Mạng Lưới Cloudflare Edge & Core Web Vitals > 90',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Một trang web tải chậm quá 2 giây trên điện thoại sẽ đánh mất một nửa số khách hàng tiềm năng. LocalMate tinh gọn mã nguồn, tối ưu hình ảnh định dạng WebP hiện đại và phân phối qua hạ tầng Cloudflare Edge để đạt tốc độ mở trang chớp nhoáng.',
    bullets: [
      'Mở trang dưới 0.8 giây: Khách bấm vào là trang hiện ngay lập tức, không có vòng tròn quay quay chờ đợi.',
      'Điểm Google PageSpeed 90 - 100 điểm: Xanh mướt trên cả bản di động và máy tính, được Google ưu ái xếp hạng cao hơn.',
      'Chống co giật khung hình (Zero CLS): Nút bấm và văn bản cố định vị trí, không bị nhảy lung tung làm khách bấm nhầm.',
      'Tiết kiệm dung lượng 4G cho khách: Ảnh được nén thông minh nhẹ hơn 80% mà chất lượng sắc nét như ảnh gốc.'
    ],
    metrics: [
      { label: 'Thời gian tải trang thực tế', value: '< 0.8 Giây', detail: 'Đo trên mạng 4G Viettel / Vinaphone' },
      { label: 'Điểm Google PageSpeed', value: '95 - 100', detail: 'Chuẩn Core Web Vitals khắt khe' },
      { label: 'Tỷ lệ thoát trang do tải chậm', value: '< 5%', detail: 'Giữ chân khách hàng tối đa' }
    ],
    tags: ['Tốc Độ Tải Trang', 'Core Web Vitals', 'Cloudflare Edge', 'PageSpeed 90+', 'Không Co Giật'],
    quote: {
      text: 'Tốc độ chính là sự lịch sự đầu tiên bạn dành cho khách hàng. Trang web nhanh thể hiện bạn là một người làm ăn chuyên nghiệp, tôn trọng thời gian của họ.',
      author: 'Nguyễn Văn Toàn',
      role: 'Kỹ sư Tối ưu Hiệu năng Web'
    },
    notes: 'Điểm mạnh kỹ thuật vượt bậc của LocalMate so với các web mã nguồn mở cũ kềnh càng cài đầy plugin nặng.'
  },
  {
    id: 'slide-23-quick-traction-channels',
    index: 23,
    screen: '23',
    label: 'Kênh Kéo Khách Tức Thì',
    title: 'Chiếm Lĩnh Top 3 Google Maps & Chạy Quảng Cáo Khu Vực Đo Lường Từng Cuộc Gọi',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'Nếu như SEO và AI Search là giải pháp bền vững lâu dài, thì Google Maps Top 3 và Quảng cáo Google Tìm Kiếm theo bán kính khu vực là chiếc cần gạt tạo ra cuộc gọi và đơn hàng ngay trong tuần đầu tiên khai trương.',
    bullets: [
      'Bộ ba Local Pack (Top 3 Maps): Chiếm trọn vị trí nổi bật nhất khi người dùng tìm kiếm từ khóa ngành nghề tại địa phương.',
      'Quảng cáo khoanh vùng theo bán kính (Radius Geo-Targeting): Chỉ hiện quảng cáo cho những người đang đứng trong bán kính 3 - 7km quanh cơ sở.',
      'Danh sách từ khóa phủ định sạch (Negative Keywords): Chặn toàn bộ click rác, tìm việc làm, thanh lý đồ cũ — chỉ giữ lại người thực sự muốn mua.',
      'Gắn mã đo lường từng cuộc gọi (Call Tracking): Biết chính xác mỗi cuộc gọi đến tốn bao nhiêu nghìn đồng chi phí quảng cáo.'
    ],
    metrics: [
      { label: 'Thời gian tạo ra khách đầu tiên', value: '3 - 5 Ngày', detail: 'Sau khi kích hoạt chiến dịch' },
      { label: 'Tỷ lệ tiết kiệm ngân sách rác', value: '40 - 60%', detail: 'Nhờ danh sách từ khóa phủ định chuẩn' },
      { label: 'Đo lường cuộc gọi chính xác', value: '100%', detail: 'Minh bạch từng đồng chi phí' }
    ],
    tags: ['Kéo Khách Ngay', 'Top 3 Maps', 'Google Ads Bán Kính', 'Call Tracking', 'Chặn Click Rác'],
    quote: {
      text: 'Đừng rải tiền khắp thành phố nếu bạn chỉ phục vụ được trong bán kính 5km. Hãy dồn lực đánh thắng tuyệt đối tại chính sân nhà của bạn trước.',
      author: 'Lê Thanh Bình',
      role: 'Chuyên gia Chiến dịch Tìm kiếm Địa phương'
    },
    notes: 'Giải quyết bài toán dòng tiền ngắn hạn của khách hàng, kết hợp hài hòa giữa ngắn hạn (quảng cáo) và dài hạn (SEO/GEO).'
  },
  {
    id: 'slide-24-technical-checklist',
    index: 24,
    screen: '24',
    label: 'Checklist 35 Hạng Mục Kỹ Thuật',
    title: 'Checklist 35 Hạng Mục Kỹ Thuật Chuẩn Hóa Được Nghiệm Thu Minh Bạch',
    partId: 'part-2',
    partTitle: 'Phần 2: Hệ thống Giải pháp 5 Trụ Cột',
    isDivider: false,
    summary: 'LocalMate không làm việc theo cảm tính. Toàn bộ quá trình thiết lập và bàn giao được chuẩn hóa thành checklist 35 đầu việc kỹ thuật chi tiết, khách hàng kiểm tra từng tích xanh trước khi ký biên bản nghiệm thu.',
    bullets: [
      'Nhóm 1 — Hạ tầng & Tên miền (6 mục): DNS Cloudflare, SSL HTTPS, Backup tự động, Tường lửa WAF, Sitemap XML, Robots.txt.',
      'Nhóm 2 — Giao diện & Trải nghiệm di động (8 mục): Bố cục di động 100%, Core Web Vitals > 90, Nút gọi dính chân, Font chữ bản địa.',
      'Nhóm 3 — Dữ liệu thực thể & Google Maps (7 mục): Xác minh GBP chính chủ, Đồng nhất NAP, Bộ ảnh 360, Mã QR Review, Đặt danh mục chuẩn.',
      'Nhóm 4 — AI Search & Schema (8 mục): Cài đặt llms.txt, OpenSearch.xml, LocalBusiness Schema, FAQ Schema, Geocoordinates GPS.',
      'Nhóm 5 — Đo lường & Tự động hóa (6 mục): GA4, Google Tag Manager, Webhook Zalo/Telegram, Form chống spam Cloudflare Turnstile.'
    ],
    metrics: [
      { label: 'Hạng mục kỹ thuật', value: '35 Đầu Việc', detail: 'Chuẩn hóa khắt khe từng khâu' },
      { label: 'Tỷ lệ kiểm tra chéo', value: '2 Lần', detail: 'Kỹ thuật viên trưởng rà soát độc lập' },
      { label: 'Biên bản nghiệm thu', value: 'Bằng Văn Bản', detail: 'Kèm tài khoản bàn giao đầy đủ' }
    ],
    tags: ['Checklist 35 Mục', 'Quy Chuẩn Kỹ Thuật', 'Nghiệm Thu Minh Bạch', 'Không Bỏ Sót'],
    quote: {
      text: 'Chất lượng không phải là lời hứa suông mà là một bảng danh sách các việc kỹ thuật được kiểm tra tỉ mỉ và tích xanh từng dòng.',
      author: 'Quy Trình Kiểm Thử Chất Lượng',
      role: 'Phòng Kỹ Thuật LocalMate'
    },
    notes: 'Tạo ấn tượng cực kỳ chuyên nghiệp và kỷ luật kỹ thuật, giúp khách hàng hoàn toàn tin tưởng vào độ tin cậy của sản phẩm.'
  },

  // =========================================================================
  // PHẦN 3: CASE STUDIES & TÌNH HUỐNG THỰC TẾ (SLIDE 25 - 36)
  // =========================================================================
  {
    id: 'slide-25-case-studies-divider',
    index: 25,
    screen: '25',
    label: 'Hồ Sơ Thực Chiến',
    title: 'Kinh Nghiệm Thực Tế Từ 250+ Dự Án Số Hóa Doanh Nghiệp Địa Phương',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: true,
    summary: 'Không có lý thuyết sách vở nào giá trị bằng những tình huống người thật - việc thật. Phần 3 phân tích 6 trường hợp điển hình đã vượt qua khó khăn, tối ưu chi phí và tăng trưởng doanh thu ấn tượng cùng LocalMate.',
    bullets: [
      'Case 1: Cửa hàng bán lẻ & thiết bị âm thanh — Tối ưu định vị và tăng lưu lượng khách ghé tiệm.',
      'Case 2: Phòng khám nha khoa chuyên khoa — Tăng 250% cuộc gọi đặt lịch từ bán kính 5km và đón đầu AI Search.',
      'Case 3: Chuỗi nhà hàng & quán cafe F&B — Phủ từ khóa địa phương và tự động thu thập đánh giá 5 sao thật.',
      'Case 4: Gara sửa chữa & cứu hộ ô tô 24/7 — Chiếm lĩnh top tìm kiếm nhu cầu khẩn cấp.',
      'Case 5: Thợ dịch vụ sửa chữa tại nhà — Xây dựng uy tín và báo giá minh bạch chốt hợp đồng nhanh.',
      'Case 6: Bản thân LocalMate — Ứng dụng chính xác những gì triển khai cho khách hàng để tăng trưởng tự thân.'
    ],
    metrics: [
      { label: 'Dự án thực tế đúc kết', value: '250+ Dự Án', detail: 'Đa dạng ngành nghề kinh doanh' },
      { label: 'Tỷ lệ tăng trưởng cuộc gọi TB', value: '+180%', detail: 'Sau 60 ngày triển khai chuẩn' },
      { label: 'Bằng chứng số liệu', value: '100% Xác Thực', detail: 'Từ báo cáo Google và danh bạ khách' }
    ],
    tags: ['Case Studies', 'Người Thật Việc Thật', 'Bằng Chứng Thực Tế', 'Kinh Nghiệm Địa Phương'],
    quote: {
      text: 'Những bài học đắt giá nhất không nằm trong giáo trình đại học, mà nằm ở những buổi chiều ngồi cùng chủ gara ô tô phân tích từng cuộc gọi khách lỡ ngoài giờ.',
      author: 'Nhật Ký Thực Địa LocalMate',
      role: 'Tổng hợp Case Study 2026'
    },
    notes: 'Chuyển sang phần bằng chứng thuyết phục nhất: chứng minh những gì đã nói ở Phần 2 đã tạo ra kết quả cụ thể ra sao.'
  },
  {
    id: 'slide-26-case-retail-store',
    index: 26,
    screen: '26',
    label: 'Case 1 - Cửa Hàng Bán Lẻ & Thiết Bị',
    title: 'Cửa Hàng Thiết Bị Âm Thanh & Điện Máy: Tối Ưu Định Vị Và Kéo Khách Đến Cửa Hàng',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: false,
    summary: 'Cửa hàng thiết bị âm thanh tại Đà Nẵng sở hữu hàng trăm mẫu loa kéo, vang số nhưng trước đây chỉ đăng bài Facebook trôi bài liên tục. Khách hàng tìm kiếm sản phẩm trên Google chỉ thấy các trang thương mại điện tử xa xôi.',
    bullets: [
      'Bài toán: Khách muốn mua thiết bị âm thanh cần đến nghe thử thực tế, nhưng không biết cửa hàng có sẵn mẫu nào trong kho.',
      'Giải pháp triển khai: Xây dựng Sales Hub trưng bày các bộ dàn âm thanh chủ lực kèm video test âm thanh chân thực.',
      'Định vị Google Maps chuẩn xác: Thêm danh mục sản phẩm chi tiết có niêm yết giá bán rõ ràng và thông tin bảo hành tại chỗ.',
      'Kết quả: Khách hàng tìm kiếm "dàn karaoke gia đình Đà Nẵng" thấy ngay bản đồ cửa hàng chỉ cách họ 2km kèm nút chỉ đường.'
    ],
    metrics: [
      { label: 'Lượt khách đến nghe thử', value: '+68%', detail: 'Tăng sau 45 ngày bàn giao' },
      { label: 'Lượt yêu cầu chỉ đường Maps', value: '420+', detail: 'Mỗi tháng từ khách hàng khu vực' },
      { label: 'Tỷ lệ chốt đơn khi khách đến', value: '85%', detail: 'Nhờ đã xem giá và video trước' }
    ],
    tags: ['Case 1', 'Bán Lẻ', 'Thiết Bị Âm Thanh', 'Kéo Khách Đến Tiệm', 'Chỉ Đường Maps'],
    quote: {
      text: 'Khách đến tiệm bảo trước đây toàn tính mua trên Shopee nhưng sợ hỏng không biết đền ai. Nhờ thấy web và bản đồ của tiệm rõ ràng nên chạy qua nghe thử rồi bưng luôn một dàn về.',
      author: 'Anh Nguyễn Hữu Tuấn',
      role: 'Chủ Cửa hàng Âm thanh Tuấn Pro (Đà Nẵng)'
    },
    notes: 'Minh chứng cho sức mạnh của việc kết hợp Sales Hub rõ giá + Google Maps kéo khách đến trải nghiệm thực tế.'
  },
  {
    id: 'slide-27-case-retail-ai-visibility',
    index: 27,
    screen: '27',
    label: 'Case 1 - Đo Lường AI Visibility',
    title: 'Đo Lường Tỷ Lệ Đề Xuất Của AI Và Lưu Lượng Khách Hàng Ghé Tiệm Thực Tế',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: false,
    summary: 'Sau khi triển khai tệp `llms.txt` và Schema Product chuẩn mực cho cửa hàng thiết bị âm thanh, chúng tôi đo lường tỷ lệ gợi ý khi người dùng hỏi các trợ lý AI về địa chỉ mua sắm uy tín tại địa phương.',
    bullets: [
      'Thử nghiệm câu hỏi thực tế: "Tôi ở Hải Châu muốn mua bộ mic không dây Shure chính hãng bảo hành gần đây thì mua ở đâu?".',
      'Kết quả AI đề xuất: ChatGPT và Gemini lập tức liệt kê cửa hàng ở vị trí số 1 kèm địa chỉ chính xác, hotline và chính sách đổi trả 7 ngày.',
      'Cơ chế nhận diện của AI: Nhờ dữ liệu Schema Product và các bài đánh giá có nhắc đến từ khóa "mic Shure chính hãng Đà Nẵng".',
      'Đóng góp doanh thu mới: 28% khách hàng mới trong tháng 5/2026 cho biết họ được AI gợi ý đến cửa hàng.'
    ],
    metrics: [
      { label: 'Tỷ lệ AI gợi ý trong top 2', value: '86%', detail: 'Trên 50 câu hỏi thử nghiệm độc lập' },
      { label: 'Doanh thu từ nguồn AI', value: '28%', detail: 'Được khách xác nhận khi ghé tiệm' },
      { label: 'Chi phí quảng cáo cho nguồn này', value: '0 Đồng', detail: 'Tự nhiên hoàn toàn nhờ chuẩn GEO' }
    ],
    tags: ['AI Visibility', 'Đo Lường AI', 'Schema Product', 'ChatGPT Trích Dẫn'],
    quote: {
      text: 'Tuần trước có bạn trẻ đến mua máy bảo em hỏi ChatGPT xem ở Đà Nẵng chỗ nào bán loa bãi xịn thì nó chỉ thẳng địa chỉ quán anh. Lúc đó tôi mới thực sự hiểu sức mạnh của AI Search.',
      author: 'Anh Nguyễn Hữu Tuấn',
      role: 'Chủ Cửa hàng Âm thanh Tuấn Pro'
    },
    notes: 'Bằng chứng không thể chối cãi về hiệu quả của việc đi đầu xu hướng tối ưu GEO và llms.txt.'
  },
  {
    id: 'slide-28-case-dental-clinic',
    index: 28,
    screen: '28',
    label: 'Case 2 - Y Tế & Nha Khoa Chuyên Khoa',
    title: 'Nha Khoa Chuyên Khoa: Tăng 250% Cuộc Gọi Đặt Lịch Trong Bán Kính 5km',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: false,
    summary: 'Một phòng khám nha khoa uy tín từng đốt hơn 15 triệu/tháng chạy quảng cáo Facebook nhưng chỉ nhận về các bình luận hỏi giá rồi im lặng. LocalMate tái cơ cấu toàn bộ kênh tiếp cận, tập trung vào bán kính 5km quanh phòng khám.',
    bullets: [
      'Phát hiện lỗ hổng: Khách đi làm răng rất sợ đau và sợ giá mập mờ, nhưng trang Fanpage cũ chỉ toàn ảnh quảng cáo sơ sài.',
      'Xây dựng trang chuyên sâu theo dịch vụ: Trang riêng cho Nhổ răng khôn không đau, trang riêng cho Niềng răng trong suốt.',
      'Công khai bảng giá và hồ sơ bác sĩ: Đưa bằng cấp chuyên môn, số ca điều trị thành công và hình ảnh phòng khám vô trùng.',
      'Kích hoạt Google Maps & Nút đặt lịch Zalo: Khách bấm gọi thẳng hotline bác sĩ trực hoặc chọn giờ khám trên lịch hẹn.'
    ],
    metrics: [
      { label: 'Cuộc gọi đặt lịch hẹn', value: '+250%', detail: 'So với giai đoạn chỉ chạy Facebook' },
      { label: 'Chi phí trên mỗi lịch khám', value: 'Giảm 62%', detail: 'Tiết kiệm ngân sách đáng kể' },
      { label: 'Tỷ lệ khách đến đúng hẹn', value: '91%', detail: 'Nhờ có tin nhắn tự động nhắc lịch' }
    ],
    tags: ['Case 2', 'Nha Khoa', 'Y Tế', 'Tăng Cuộc Gọi', 'Bán Kính 5km'],
    quote: {
      text: 'Làm y tế quan trọng nhất là niềm tin. Nhờ LocalMate làm trang web rõ ràng từng khâu, có bảng giá minh bạch và hồ sơ bác sĩ đầy đủ mà bệnh nhân gọi đến đều rất tin tưởng và chốt lịch hẹn nhanh.',
      author: 'Bác Sĩ Nguyễn Thị Thuỳ Linh',
      role: 'Giám đốc Chuyên môn Phòng khám Nha khoa'
    },
    notes: 'Khẳng định giá trị của việc làm chuẩn nội dung chuyên môn và sự minh bạch trong ngành dịch vụ sức khỏe.'
  },
  {
    id: 'slide-29-case-dental-ai-answers',
    index: 29,
    screen: '29',
    label: 'Case 2 - Trích Dẫn Chuyên Môn AI Search',
    title: 'Xây Dựng Schema Y Tế Giúp AI Trích Dẫn Phòng Khám Khi Khách Hỏi Triệu Chứng',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: false,
    summary: 'Người bệnh hiện nay thường gõ các triệu chứng như "răng khôn mọc lệch hàm dưới sưng đau phải làm sao" lên Google hoặc ChatGPT trước khi quyết định đi khám. Chúng tôi cấu trúc nội dung phòng khám để đón đầu hành vi này.',
    bullets: [
      'Gắn Schema MedicalCondition & MedicalProcedure: Khai báo với công cụ tìm kiếm về chuyên môn điều trị răng hàm mặt.',
      'Bộ bài viết hỏi đáp ngắn gọn: Bác sĩ trả lời trực tiếp các nỗi lo thường gặp (nhổ răng khôn có đau không, chi phí bao nhiêu, bao lâu lành).',
      'Google AI Overviews trích dẫn trực tiếp: Khi tìm kiếm tại khu vực, câu trả lời của bác sĩ phòng khám được hiển thị ngay trên cùng.',
      'Chuyển đổi tức thì: Cuối câu trả lời là nút "Khám tư vấn miễn phí cùng Bác sĩ Linh" dẫn thẳng vào cuộc gọi hotline.'
    ],
    metrics: [
      { label: 'Lượt trích dẫn trên AI Overviews', value: '18 Từ Khóa', detail: 'Chiếm lĩnh top câu trả lời triệu chứng' },
      { label: 'Lượt click tự nhiên hàng tháng', value: '1.850+', detail: 'Truy cập chất lượng cao không tốn tiền ads' },
      { label: 'Khách đặt lịch nhổ răng khôn', value: '35 ca/tháng', detail: 'Từ các truy vấn tìm kiếm triệu chứng' }
    ],
    tags: ['Schema Medical', 'AEO Y Tế', 'AI Overviews', 'Trích Dẫn Bác Sĩ'],
    quote: {
      text: 'Bệnh nhân đến bảo đọc được bài bác sĩ giải thích trên mạng thấy khoa học và dễ hiểu quá nên muốn qua khám bác sĩ Linh luôn. Đó là cách tiếp cận bệnh nhân văn minh nhất.',
      author: 'Bác Sĩ Nguyễn Thị Thuỳ Linh',
      role: 'Giám đốc Chuyên môn Phòng khám'
    },
    notes: 'Cho thấy đẳng cấp của AEO: không cần chèo kéo mà khách hàng tự tìm đến vì sự chuyên môn và tận tụy.'
  },
  {
    id: 'slide-30-case-fb-restaurant',
    index: 30,
    screen: '30',
    label: 'Case 3 - Nhà Hàng & Quán Cafe F&B',
    title: 'Chuỗi Nhà Hàng & Cafe: Phủ Từ Khóa Khu Vực & Tự Động Thu Hút Đánh Giá 5 Sao Thật',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: false,
    summary: 'Nhà hàng ẩm thực đặc sản miền Trung với 3 chi nhánh tại khu du lịch ven biển gặp khó khăn trong việc thu hút khách du lịch tự túc và khách gia đình do thiếu hụt đánh giá thực tế trên Google Maps.',
    bullets: [
      'Vấn đề cũ: Khách ăn xong rất hài lòng nhưng hầu như không ai nhớ lên mạng đánh giá; đối thủ cạnh tranh mua review ảo lấn lướt.',
      'Giải pháp Mã QR Review Thông Minh: Thiết kế bảng mica trang trọng tại mỗi bàn ăn; khách quét QR là mở thẳng trang đánh giá 5 sao kèm gợi ý món ngon.',
      'Chính sách tặng tráng miệng nhẹ: Khách check-in và gửi đánh giá được tặng một phần chè hoặc nước uống thanh mát.',
      'Phủ từ khóa ẩm thực địa phương: Tối ưu trang web với các từ khóa "quán hải sản ngon gần biển Mỹ Khê", "ăn gì ngon ở Đà Nẵng".'
    ],
    metrics: [
      { label: 'Đánh giá 5 sao thật tích lũy', value: '480+ Review', detail: 'Tăng vọt chỉ sau 3 tháng' },
      { label: 'Điểm số Google trung bình', value: '4.9 / 5.0', detail: 'Nổi bật nhất khu vực ven biển' },
      { label: 'Lượng khách du lịch ghé quán', value: '+140%', detail: 'Tìm thấy qua tìm kiếm bản đồ' }
    ],
    tags: ['Case 3', 'F&B', 'Nhà Hàng', 'Mã QR Review', 'Đánh Giá 5 Sao Thật'],
    quote: {
      text: 'Trước đây khách ăn xong khen ngon rồi về, tiệm chẳng đọng lại gì trên mạng. Từ ngày có cái bảng QR của LocalMate, chỉ 3 tháng mà quán lên gần 500 review thật, khách du lịch Tây lẫn Ta cứ thế mở Maps đi tới.',
      author: 'Anh Lê Văn Khang',
      role: 'Chủ chuỗi Nhà hàng Ẩm thực Ven Biển'
    },
    notes: 'Giải pháp mã QR kết hợp tâm lý học hành vi khách hàng, biến khách hàng hài lòng thành đại sứ thương hiệu miễn phí.'
  },
  {
    id: 'slide-31-case-auto-garage',
    index: 31,
    screen: '31',
    label: 'Case 4 - Gara Ô Tô & Cứu Hộ',
    title: 'Gara Sửa Chữa & Cứu Hộ 24/7: Chiếm Lĩnh Top Tìm Kiếm Nhu Cầu Cao Và Cứu Hộ Gấp',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: false,
    summary: 'Dịch vụ cứu hộ ô tô và sửa chữa máy gầm là ngành có tính cấp thiết cực cao. Khách xe chết máy giữa đường chỉ tìm kiếm và bấm gọi ngay số điện thoại đầu tiên họ nhìn thấy trên màn hình điện thoại.',
    bullets: [
      'Tối ưu nút bấm gọi khẩn cấp (Emergency Call): Thiết kế thanh Hotline màu đỏ nổi bật dính cố định chân màn hình điện thoại.',
      'Xác minh vị trí Google Maps 24/7: Cài đặt chế độ mở cửa ban đêm và ghim chuẩn trạm xe cứu hộ lưu động.',
      'Chạy chiến dịch Google Ads tìm kiếm khẩn cấp: Đẩy mạnh các từ khóa "cứu hộ ắc quy ô tô Đà Nẵng", "gara ô tô gần nhất".',
      'Đồng bộ nhóm thợ cứu hộ qua Telegram: Cuộc gọi đến là chuông reo cùng lúc trên máy trực ban và nhóm thợ ứng trực.'
    ],
    metrics: [
      { label: 'Cuộc gọi cứu hộ hàng tháng', value: '180+ Cuộc', detail: 'Phát sinh từ tìm kiếm di động' },
      { label: 'Thời gian kết nối khách - thợ', value: '< 10 Giây', detail: 'Bấm gọi là gặp thợ kỹ thuật ngay' },
      { label: 'Doanh thu dịch vụ khẩn cấp', value: '+320%', detail: 'Tăng trưởng vượt bậc so với trước' }
    ],
    tags: ['Case 4', 'Gara Ô Tô', 'Cứu Hộ 24/7', 'Nhu Cầu Gấp', 'Emergency Call'],
    quote: {
      text: 'Khách hỏng xe giữa đêm họ cuống lắm, web tải chậm 3 giây là họ tắt tìm chỗ khác ngay. Nhờ LocalMate làm web bấm gọi phát ăn liền mà anh em thợ có việc làm đều đặn cả đêm lẫn ngày.',
      author: 'Anh Đỗ Minh Hùng',
      role: 'Chủ Gara Ô Tô & Đội Cứu Hộ 24/7'
    },
    notes: 'Đặc thù ngành khẩn cấp: tốc độ tải trang và nút bấm gọi dính chân chính là chìa khóa vàng mở ra doanh thu.'
  },
  {
    id: 'slide-32-case-home-services',
    index: 32,
    screen: '32',
    label: 'Case 5 - Dịch Vụ Sửa Chữa Tại Nhà',
    title: 'Thợ Điện Lạnh & Nhôm Kính: Xây Dựng Uy Tín Địa Phương Và Báo Giá Minh Bạch',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: false,
    summary: 'Đội thợ thi công nhôm kính và sửa điện lạnh dân dụng thường gặp khó khăn vì khách sợ bị "chặt chém" hoặc thợ không có địa chỉ rõ ràng. LocalMate giúp chuẩn hóa hồ sơ năng lực thành một Sales Hub cực kỳ uy tín.',
    bullets: [
      'Minh bạch bảng giá vật tư & công thợ: Đăng rõ giá nạp gas, thay block, giá kính cường lực theo mét vuông để khách yên tâm.',
      'Bộ sưu tập công trình thực tế (Portfolio): Trưng bày các hình ảnh trước - sau khi thi công kèm địa chỉ công trình đã làm quanh phường.',
      'Tạo đường link chuyên sâu gửi Zalo: Khi khách hỏi báo giá trên Zalo, thợ chỉ cần gửi link trang web chứa đầy đủ hình ảnh và cam kết bảo hành.',
      'Tích hợp phiếu bảo hành điện tử: Khách quét mã tra cứu thời hạn bảo hành máy lạnh sau khi sửa chữa.'
    ],
    metrics: [
      { label: 'Tỷ lệ khách đồng ý sau báo giá', value: '78%', detail: 'Tăng từ mức 35% khi chỉ báo miệng' },
      { label: 'Thời gian tư vấn qua tin nhắn', value: 'Giảm 70%', detail: 'Khách tự xem đầy đủ trên link web' },
      { label: 'Doanh thu công trình tháng', value: '+85 Tr', detail: 'Tăng trưởng đều đặn quanh khu vực' }
    ],
    tags: ['Case 5', 'Dịch Vụ Tại Nhà', 'Thợ Điện Lạnh', 'Nhôm Kính', 'Minh Bạch Giá'],
    quote: {
      text: 'Hồi trước nhắn tin báo giá khách cứ nghi ngờ hỏi tới hỏi lui. Giờ gửi cho khách cái link web của LocalMate làm, có đủ hình ảnh xưởng, bảng giá và công trình đã làm, khách xem xong là hẹn lịch tới làm luôn.',
      author: 'Anh Phạm Văn Đức',
      role: 'Đội trưởng Cơ khí & Nhôm kính Đức Phát'
    },
    notes: 'Cho thấy cách số hóa nâng tầm uy tín của những người thợ lành nghề chân chính, giúp họ cạnh tranh sòng phẳng với các công ty lớn.'
  },
  {
    id: 'slide-33-case-localmate-internal',
    index: 33,
    screen: '33',
    label: 'Case 6 - Bản Thân LocalMate (Dogfooding)',
    title: 'Dogfooding: LocalMate Tăng Trưởng 100% Bằng Chính Giải Pháp Triển Khai Cho Bạn',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: false,
    summary: 'Triết lý của chúng tôi: "Ăn chính thức ăn mình nấu" (Dogfooding). LocalMate không có đội ngũ telesale gọi điện làm phiền khách. Toàn bộ 250+ khách hàng hiện tại đều tự tìm đến chúng tôi thông qua Google Maps, bài viết SEO chuyên sâu và các câu trả lời của AI.',
    bullets: [
      'Không cuộc gọi rác (No Cold Calls): Chúng tôi tôn trọng khách hàng và chỉ phục vụ những ai thực sự có nhu cầu tìm giải pháp.',
      'Hạ tầng tự vận hành: Trang web của LocalMate đạt 99 điểm Google PageSpeed, tải dưới 0.6s trên Cloudflare Edge.',
      'Tệp llms.txt công khai: Bất kỳ ai hỏi ChatGPT hay Gemini về "dịch vụ làm web uy tín bảo hành 5 năm tại Đà Nẵng" đều thấy LocalMate.',
      'Tự động hóa 100%: Khi bạn để lại thông tin trên web, điện thoại của kỹ thuật viên trưởng reo chuông trong 2 giây giống hệt hệ thống chúng tôi dựng cho bạn.'
    ],
    metrics: [
      { label: 'Khách hàng tự tìm đến', value: '100%', detail: 'Không tốn một đồng chi phí telesale' },
      { label: 'Điểm Google PageSpeed', value: '99/100', detail: 'Hiệu năng mẫu mực thực tế' },
      { label: 'Tốc độ phản hồi tư vấn', value: '< 10 Phút', detail: 'Vận hành bằng chính hệ thống CRM Mini' }
    ],
    tags: ['Case 6', 'Dogfooding', 'Bản Thân LocalMate', 'Không Telesale', 'Uy Tín Tuyệt Đối'],
    quote: {
      text: 'Một công ty làm dịch vụ số mà chính trang web của họ tải chậm, không lên được Maps thì làm sao làm tốt cho khách hàng? Chúng tôi chứng minh năng lực bằng chính sự hiện diện của mình.',
      author: 'Ban Giám Đốc LocalMate',
      role: 'Tuyên bố Đạo đức Kỹ thuật'
    },
    notes: 'Lời khẳng định mạnh mẽ nhất về sự trung thực và tính hiệu quả của giải pháp: chúng tôi thành công nhờ chính những gì chúng tôi bán cho bạn.'
  },
  {
    id: 'slide-34-ad-policy-recovery',
    index: 34,
    screen: '34',
    label: 'Xử Lý Sự Cố Tài Khoản',
    title: 'Khắc Phục Lỗi Chính Sách Google/Meta, Xử Lý Kháng Nghị & Cấp Tài Khoản Sạch',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: false,
    summary: 'Rất nhiều doanh nghiệp địa phương bị khóa tài khoản Google Maps hoặc Google Ads vô cớ vì vi phạm chính sách thuật toán mà không biết kêu ai. Đội ngũ kỹ thuật viên của LocalMate hỗ trợ rà soát, kháng nghị chuẩn chỉnh và khôi phục hoạt động.',
    bullets: [
      'Xử lý Maps bị tạm ngưng / vô hiệu hóa: Chuẩn bị bộ hồ sơ pháp lý (giấy phép kinh doanh, hợp đồng thuê nhà, hóa đơn điện nước) để kháng nghị trực tiếp với chuyên viên Google.',
      'Khắc phục web dính mã độc / redirect bẩn: Quét sạch mã độc, loại bỏ backdoor của các theme lậu và đưa web về trạng thái an toàn tuyệt đối.',
      'Xử lý tài khoản quảng cáo bị vô hiệu hóa: Kiểm tra trang đích (landing page), gỡ bỏ các từ ngữ vi phạm chính sách y tế / cam kết quá đà.',
      'Bàn giao tài khoản sạch chính chủ: Hướng dẫn khách hàng tự nắm giữ quyền quản trị tối cao, không phụ thuộc vào bất kỳ ai.'
    ],
    metrics: [
      { label: 'Tỷ lệ kháng nghị Maps thành công', value: '89%', detail: 'Với hồ sơ địa điểm kinh doanh có thật' },
      { label: 'Thời gian xử lý mã độc web', value: '< 12 Giờ', detail: 'Bảo vệ danh tiếng thương hiệu' },
      { label: 'Tài khoản bàn giao', value: '100% Sạch', detail: 'Lịch sử thanh toán minh bạch' }
    ],
    tags: ['Xử Lý Sự Cố', 'Kháng Nghị Maps', 'Gỡ Mã Độc', 'Tài Khoản Sạch', 'Bảo Vệ Tài Sản'],
    quote: {
      text: 'Mất địa điểm trên Google Maps cũng như bị thu hồi mặt bằng kinh doanh. Chúng tôi hỗ trợ bằng quy trình pháp lý bài bản chứ không dùng mẹo vặt đen tối để bảo đảm an toàn vĩnh viễn.',
      author: 'Huỳnh Bá Đạt',
      role: 'Chuyên viên Xử lý Tranh chấp & Kháng nghị'
    },
    notes: 'Giải quyết một trong những nỗi đau nhức nhối nhất của các doanh nghiệp hiện nay khi bị Google quét phạt.'
  },
  {
    id: 'slide-35-deliverables-package',
    index: 35,
    screen: '35',
    label: 'Bộ Ấn Phẩm & Tài Sản Bàn Giao',
    title: 'Bộ Ấn Phẩm & Tài Sản Số Cụ Thể Khách Hàng Sở Hữu Toàn Quyền Khi Bàn Giao',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: false,
    summary: 'Nghiệm thu dự án không phải là một đường link web vô hồn. Khách hàng của LocalMate nhận trọn vẹn bộ tài sản số hoàn chỉnh gồm mã nguồn, hồ sơ xác thực, ấn phẩm để bàn thực tế và tài liệu hướng dẫn sử dụng.',
    bullets: [
      '1. Toàn bộ mã nguồn & Hosting Edge: Bàn giao quyền quản trị tên miền, tài khoản Cloudflare và mã nguồn trang web.',
      '2. Hồ sơ Google Business Profile chính chủ: Chuyển giao quyền Chủ sở hữu chính vào tài khoản Gmail riêng của khách hàng.',
      '3. Bảng Mica Mã QR Review 5 sao cao cấp: Kỹ thuật viên mang đến tận cửa hàng đặt tại quầy lễ tân hoặc từng bàn.',
      '4. Hệ thống CRM Mini Google Sheets: Cấu hình sẵn bảng tính lưu trữ khách hàng kèm liên kết Webhook Zalo/Telegram.',
      '5. Bộ video hướng dẫn 3 phút: Video quay màn hình hướng dẫn chủ tiệm tự sửa đổi giá món ăn, cập nhật ảnh mới trên điện thoại.',
      '6. Giấy chứng nhận bảo hành kỹ thuật 5 năm: Văn bản pháp lý cam kết thời hạn hỗ trợ và đường dây nóng hỗ trợ khẩn cấp.'
    ],
    metrics: [
      { label: 'Tài sản số bàn giao', value: '6 Hạng Mục', detail: 'Trọn gói đầy đủ vật phẩm & tài khoản' },
      { label: 'Quyền sở hữu thuộc về khách', value: '100%', detail: 'Không giữ bất kỳ chìa khóa nào của khách' },
      { label: 'Thời hạn bảo hành ghi nhận', value: '5 Năm', detail: 'Cam kết bằng văn bản hợp đồng' }
    ],
    tags: ['Deliverables', 'Bàn Giao', 'Mã Nguồn', 'Bảng Mica QR', 'Bảo Hành 5 Năm'],
    quote: {
      text: 'Tiền bạn bỏ ra, tài sản phải là của bạn. Chúng tôi trao tận tay bạn toàn bộ chìa khóa nhà số của mình cùng sự bảo đảm luôn đứng sau hỗ trợ bảo trì.',
      author: 'Chính Sách Bàn Giao Tài Sản',
      role: 'Ban Điều Hành LocalMate'
    },
    notes: 'Tạo cảm giác giá trị vượt trội: khách hàng thấy rõ ràng những món đồ vật lý và tài sản số mà mình thực tế cầm nắm được.'
  },
  {
    id: 'slide-36-comparison-matrix',
    index: 36,
    screen: '36',
    label: 'So Sánh Giải Pháp Đối Chiếu',
    title: 'So Sánh Chi Phí & Hiệu Quả: Cách Làm Rời Rạc Cũ vs Giải Pháp Đồng Hành LocalMate',
    partId: 'part-3',
    partTitle: 'Phần 3: Case Studies & Tình Huống Thực Tế',
    isDivider: false,
    summary: 'Bảng đối chiếu minh bạch giúp khách hàng nhìn thấy rõ ràng vì sao việc chọn một người đồng hành kỹ thuật trọn gói lại tiết kiệm ngân sách và mang lại hiệu quả cao hơn hẳn việc tự mò mẫm thuê ngoài rời rạc.',
    bullets: [
      'Chi phí đầu tư: Cách cũ tốn 20-30 triệu cho web + 10 triệu/tháng nuôi nhân sự IT. LocalMate: Chi phí tinh gọn cố định, báo trước một lần.',
      'Trách nhiệm bảo hành: Cách cũ đùn đẩy trách nhiệm giữa bên làm web, bên hosting và bên chạy quảng cáo. LocalMate: Một đầu mối chịu trách nhiệm toàn diện 5 năm.',
      'Khả năng sẵn sàng với AI: Cách cũ dùng mã nguồn cũ kỹ bị AI bỏ qua. LocalMate: Tích hợp sẵn llms.txt, Schema và chuẩn bị đón đầu AEO/GEO.',
      'Hỗ trợ thực tế: Cách cũ chỉ chat online khi rảnh. LocalMate: Kỹ thuật viên in-house ghé tận tiệm hỗ trợ 1-1.'
    ],
    metrics: [
      { label: 'Tiết kiệm ngân sách tổng', value: '50 - 70%', detail: 'So với thuê các agency rời rạc' },
      { label: 'Thời gian triển khai', value: 'Nhanh gấp 3x', detail: 'Đồng bộ từ đầu không phải sửa chắp vá' },
      { label: 'Mức độ an tâm vận hành', value: 'Tuyệt Đối', detail: 'Có kỹ thuật viên địa phương túc trực' }
    ],
    tags: ['Bảng So Sánh', 'Cách Cũ vs LocalMate', 'Tiết Kiệm Chi Phí', 'Trách Nhiệm Một Đầu Mối'],
    quote: {
      text: 'Thuê 3 bên làm 3 việc khác nhau giống như thuê 3 người thợ xây 1 căn nhà mà không có bản vẽ chung: nhà sẽ xiêu vẹo và khi dột chẳng ai nhận lỗi. Hãy chọn một người chịu trách nhiệm trọn gói từ móng đến mái.',
      author: 'Phân Tích Hiệu Quả Đầu Tư',
      role: 'Cố vấn Tài chính Doanh nghiệp'
    },
    notes: 'Đòn bẩy tâm lý chốt hạ: dập tắt hoàn toàn ý định tự làm chắp vá hoặc thuê các freelancer rẻ tiền thiếu bảo hành.'
  },

  // =========================================================================
  // PHẦN 4: HỢP TÁC & CAM KẾT (SLIDE 37 - 40)
  // =========================================================================
  {
    id: 'slide-37-partnership-divider',
    index: 37,
    screen: '37',
    label: 'Hợp Tác & Cam Kết',
    title: 'Nguyên Tắc Hợp Tác & Cam Kết Đồng Hành Kỹ Thuật Bền Vững 5 Năm',
    partId: 'part-4',
    partTitle: 'Phần 4: Hợp tác & Cam kết',
    isDivider: true,
    summary: 'Phần 4 vạch ra lộ trình hợp tác không rủi ro: từ 3 gói đầu tư linh hoạt, quy trình 5 bước nghiệm thu hài lòng mới thanh toán đến thông tin kết nối trực tiếp với đội ngũ kỹ thuật viên địa phương của LocalMate.',
    bullets: [
      'Nguyên tắc 1 — Không rủi ro: Khách hàng được xem bản demo thực tế trên điện thoại của mình trước khi quyết định ký hợp đồng.',
      'Nguyên tắc 2 — Báo giá cố định trọn gói: Không bao giờ tự phát sinh chi phí ẩn trong quá trình triển khai.',
      'Nguyên tắc 3 — Nghiệm thu hài lòng mới thanh toán: Đạt chuẩn 35 checklist kỹ thuật mới thanh toán phần còn lại.',
      'Nguyên tắc 4 — Bảo hành kỹ thuật 5 năm: Luôn có mặt hỗ trợ khi hệ thống gặp sự cố, cập nhật bản vá bảo mật định kỳ.'
    ],
    metrics: [
      { label: 'Thời gian bảo hành', value: '5 Năm', detail: 'Cam kết bằng văn bản hợp đồng pháp nhân' },
      { label: 'Rủi ro tài chính', value: '0 Đồng', detail: 'Không hài lòng bản demo không tính phí' },
      { label: 'Pháp nhân bảo hộ', value: 'Công Ty TNHH', detail: 'Xuất hóa đơn VAT đầy đủ theo quy định' }
    ],
    tags: ['Hợp Tác', 'Cam Kết 5 Năm', 'Không Rủi Ro', 'Pháp Nhân Minh Bạch'],
    quote: {
      text: 'Chúng tôi không kiếm tiền từ việc ký được hợp đồng, chúng tôi kiếm sống từ việc khách hàng kinh doanh tốt lên và tiếp tục gắn bó cùng chúng tôi năm này qua năm khác.',
      author: 'Ban Giám Đốc LocalMate',
      role: 'Tuyên ngôn Cam kết 2026'
    },
    notes: 'Tạo tâm lý hoàn toàn cởi mở và an tâm trước khi bước vào chi tiết các gói giá dịch vụ.'
  },
  {
    id: 'slide-38-three-tier-packages',
    index: 38,
    screen: '38',
    label: '3 Tầng Đầu Tư Linh Hoạt',
    title: '3 Tầng Đầu Tư Linh Hoạt: Khởi Tạo Nền Tảng — Vận Hành Duy Trì — Tăng Tốc Tăng Trưởng',
    partId: 'part-4',
    partTitle: 'Phần 4: Hợp tác & Cam kết',
    isDivider: false,
    summary: 'Tùy thuộc vào giai đoạn kinh doanh và ngân sách hiện tại, bạn có thể lựa chọn điểm xuất phát phù hợp nhất. Mọi gói đều được bảo hành kỹ thuật 5 năm và có thể nâng cấp liền mạch bất cứ lúc nào.',
    bullets: [
      'Gói 1 — Khởi Tạo Nền Tảng (Foundation): Dành cho cơ sở mới mở, thợ cá nhân cần Sales Hub di động, ghim Google Maps chính chủ, mã QR Review và hệ thống nhận đơn Zalo.',
      'Gói 2 — Vận Hành Chuẩn Hóa (Growth): Bổ sung tối ưu Local AI Search (llms.txt, Schema), chiến dịch kéo khách Top 3 Google Maps và báo cáo đo lường hàng tháng.',
      'Gói 3 — Tăng Tốc Đột Phá (Scale Pro): Dành cho chuỗi chi nhánh, phòng khám, gara lớn cần tối ưu đa điểm, chạy quảng cáo Google Ads tối ưu cuộc gọi và kỹ thuật viên chăm sóc ưu tiên 24/7.',
      'Chính sách nâng cấp linh hoạt: Khách hàng có thể bắt đầu từ Gói 1, khi thấy hiệu quả có khách thì nâng cấp lên Gói 2 và chỉ cần bù phần chênh lệch.'
    ],
    metrics: [
      { label: 'Tầng giải pháp', value: '3 Gói Rõ Ràng', detail: 'Phù hợp mọi quy mô ngân sách' },
      { label: 'Chi phí ẩn phát sinh', value: '0 Đồng', detail: 'Báo giá niêm yết công khai' },
      { label: 'Thời hạn hỗ trợ kỹ thuật', value: '5 Năm', detail: 'Áp dụng đồng đều cho cả 3 gói' }
    ],
    tags: ['3 Gói Giải Pháp', 'Foundation', 'Growth', 'Scale Pro', 'Linh Hoạt Ngân Sách'],
    quote: {
      text: 'Hãy bắt đầu từ gói nhỏ nhất nếu bạn còn e dè. Khi thấy kết quả khách gọi thật và tiền về tài khoản, bạn tự tin đầu tư tiếp cũng chưa muộn.',
      author: 'Chính Sách Bán Hàng Thật',
      role: 'Đội ngũ Cố vấn LocalMate'
    },
    notes: 'Trình bày cơ cấu gói giải pháp cực kỳ hợp lý, không ép khách mua gói đắt mà tạo điều kiện nâng cấp dần.'
  },
  {
    id: 'slide-39-five-step-workflow',
    index: 39,
    screen: '39',
    label: 'Quy Trình Làm Việc 5 Bước',
    title: 'Quy Trình 5 Bước Làm Việc Minh Bạch: Không Rủi Ro, Hài Lòng Mới Thanh Toán',
    partId: 'part-4',
    partTitle: 'Phần 4: Hợp tác & Cam kết',
    isDivider: false,
    summary: 'Quy trình chuẩn hóa 5 bước của LocalMate đảm bảo quyền lợi tối đa cho khách hàng. Bạn luôn là người kiểm duyệt từng khâu và chỉ trả tiền khi nhìn thấy sản phẩm hoạt động hoàn hảo trên tay mình.',
    bullets: [
      'Bước 1: Khảo sát thực địa & Lắng nghe nhu cầu — Kỹ thuật viên đến tận nơi hoặc gọi video tìm hiểu kỹ ngành nghề và đối thủ lân cận.',
      'Bước 2: Lên bản Demo trực quan 0 đồng — Trong vòng 48h, chúng tôi gửi bản mẫu web và kế hoạch để bạn xem trước trên điện thoại.',
      'Bước 3: Báo giá cố định & Thống nhất đầu việc — Ký hợp đồng rõ ràng 35 checklist kỹ thuật, không thêm bớt chi phí.',
      'Bước 4: Triển khai & Nghiệm thu hài lòng mới trả phí — Khách tự tay kiểm tra từng tính năng, hài lòng mới chuyển khoản thanh toán.',
      'Bước 5: Bàn giao tài sản chính chủ & Bảo hành 5 năm — Trao quyền admin, tặng bảng mica QR và đồng hành bảo trì trong suốt 5 năm.'
    ],
    metrics: [
      { label: 'Thời gian lên Demo', value: '48 Giờ', detail: 'Xem trước hoàn toàn miễn phí' },
      { label: 'Thời gian hoàn thành trọn gói', value: '7 Ngày', detail: 'Chuẩn bị chu đáo và nhanh gọn' },
      { label: 'Tỷ lệ khách hài lòng bước 4', value: '99.2%', detail: 'Nghiệm thu đạt chuẩn checklist' }
    ],
    tags: ['Quy Trình 5 Bước', 'Demo 0đ', 'Báo Giá Cố Định', 'Hài Lòng Mới Trả Phí', 'Bảo Hành 5 Năm'],
    quote: {
      text: 'Thấy tận mắt, sờ tận tay, kiểm tra mượt mà trên chính chiếc điện thoại của mình rồi mới trả tiền. Đó là sự công bằng lớn nhất trong kinh doanh dịch vụ.',
      author: 'Quy Chuẩn Đồng Hành',
      role: 'Bộ phận Giám sát Khách hàng'
    },
    notes: 'Quy trình 5 bước loại bỏ 100% rào cản do dự của khách, khiến việc ra quyết định hợp tác trở nên vô cùng dễ dàng.'
  },
  {
    id: 'slide-40-contact-consultation',
    index: 40,
    screen: '40',
    label: 'Liên Hệ & Hỗ Trợ 1-1',
    title: 'Khởi Động Ngay Hôm Nay: Tư Vấn Kỹ Thuật 1-1 Trực Tiếp Tại Điểm Bán Của Bạn',
    partId: 'part-4',
    partTitle: 'Phần 4: Hợp tác & Cam kết',
    isDivider: false,
    summary: 'Đừng để khách hàng quanh khu vực tiếp tục chảy vào tay đối thủ. Hãy kết nối ngay với kỹ thuật viên trưởng của LocalMate để nhận bản khảo sát sức khỏe số và bản demo 48h miễn phí ngay hôm nay.',
    bullets: [
      'Đường dây nóng kỹ thuật (24/7): 0834.422.439 — Bấm gọi hoặc nhắn Zalo gặp trực tiếp Kỹ thuật viên trưởng.',
      'Văn phòng & Trạm Kỹ thuật thực địa: 03 Trường Chinh, Quận Thanh Khê, TP. Đà Nẵng (Sẵn sàng ghé tận nơi trong bán kính 20km).',
      'Kênh tiếp nhận yêu cầu Demo 48h: Truy cập https://localmate.vn hoặc quét mã QR trên màn hình.',
      'Cam kết phản hồi: Tiếp nhận thông tin và phản hồi giải pháp sơ bộ trong vòng 15 phút làm việc.',
      'Ưu đãi khởi động: Tặng ngay bộ Bảng Mica Mã QR Review 5 sao và gói Audit sức khỏe số miễn phí cho 10 điểm đăng ký sớm trong tháng.'
    ],
    metrics: [
      { label: 'Hotline trực tiếp', value: '0834.422.439', detail: 'Tư vấn kỹ thuật 1-1 không qua sale' },
      { label: 'Địa chỉ văn phòng', value: '03 Trường Chinh', detail: 'Thanh Khê, Đà Nẵng' },
      { label: 'Thời gian có mặt tại tiệm', value: '< 2 Giờ', detail: 'Hỗ trợ thực địa tại Đà Nẵng' }
    ],
    tags: ['Liên Hệ', 'Hotline 0834422439', '03 Trường Chinh Đà Nẵng', 'Đặt Lịch 1-1', 'Demo 48h Miễn Phí'],
    quote: {
      text: 'Một cuộc gọi 10 phút hôm nay có thể thay đổi hoàn toàn cách cửa hàng của bạn đón khách trong suốt 5 năm tới. Chúng tôi đã sẵn sàng đồng hành cùng bạn.',
      author: 'Đội Ngũ LocalMate',
      role: 'Người đồng hành số địa phương'
    },
    notes: 'Slide kết thúc tràn đầy năng lượng kêu gọi hành động (Call To Action), để lại thông tin liên hệ rõ ràng và cam kết hỗ trợ tận tâm.'
  }
];

// =========================================================================
// HELPER FUNCTIONS & SELECTORS
// =========================================================================

/**
 * Lấy slide theo chỉ số thứ tự (1 -> 40)
 */
export const getSlideByIndex = (index: number): CredentialSlide | undefined => {
  return CREDENTIAL_SLIDES.find((s) => s.index === index);
};

/**
 * Lấy slide theo mã screen ("01" -> "40")
 */
export const getSlideByScreen = (screen: string): CredentialSlide | undefined => {
  return CREDENTIAL_SLIDES.find((s) => s.screen === screen);
};

/**
 * Lấy danh sách slide thuộc một phần cụ thể ('part-1' | 'part-2' | 'part-3' | 'part-4')
 */
export const getSlidesByPart = (partId: CredentialSlide['partId']): CredentialSlide[] => {
  return CREDENTIAL_SLIDES.filter((s) => s.partId === partId);
};

/**
 * Báo cáo tổng hợp số liệu toàn bộ Deck
 */
export const CREDENTIAL_DECK_SUMMARY = {
  totalSlides: CREDENTIAL_SLIDES.length,
  totalParts: CREDENTIAL_PARTS.length,
  positioning: 'LocalMate - Người đồng hành số cho doanh nghiệp địa phương (Đưa công việc lên môi trường số, tìm khách hàng, tự động hóa vận hành, bảo hành kỹ thuật 5 năm)',
  hotline: '0834.422.439',
  address: '03 Trường Chinh, Quận Thanh Khê, TP. Đà Nẵng',
  partsBreakdown: CREDENTIAL_PARTS.map((p) => ({
    partNumber: p.partNumber,
    title: p.title,
    slidesCount: p.slidesCount,
    slideRange: p.slideRange
  }))
};
