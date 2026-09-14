export type PriorityLevel = 'critical' | 'high' | 'advanced';

export type CategoryId = 'speed-mobile' | 'local-signals' | 'data-identity' | 'ai-search' | 'security-infra';

export interface AuditCriterion {
  id: string; // e.g. CWV-01
  number: number; // 1 - 30
  categoryId: CategoryId;
  categoryName: string;
  categoryShort: string;
  title: string;
  benchmark: string;
  priority: PriorityLevel;
  priorityLabel: string;
  simpleExplanation: string; // Giải thích đơn giản cho chủ tiệm
  businessImpact: string; // Ảnh hưởng trực tiếp đến khách hàng & doanh thu
  localmateSolution: string; // Cách LocalMate xử lý kỹ thuật triệt để
  badgeColor?: string;
}

export interface AuditCategory {
  id: CategoryId;
  index: number;
  name: string;
  shortName: string;
  description: string;
  iconName: string;
  criteriaCount: number;
}

export const AUDIT_CATEGORIES: AuditCategory[] = [
  {
    id: 'speed-mobile',
    index: 1,
    name: 'Tốc độ & Trải nghiệm di động',
    shortName: 'Tốc độ & Di động',
    description: 'Đo lường thời gian tải trang thực tế, độ mượt mà và tương tác bằng 1 ngón tay cái trên điện thoại 4G.',
    iconName: 'Zap',
    criteriaCount: 6
  },
  {
    id: 'local-signals',
    index: 2,
    name: 'Bản đồ & Tín hiệu địa phương (Local Signals)',
    shortName: 'Bản đồ & Tín hiệu',
    description: 'Xác minh tọa độ GPS, hồ sơ Google Maps chính chủ, đồng nhất thông tin để kéo khách ghé tiệm.',
    iconName: 'MapPin',
    criteriaCount: 6
  },
  {
    id: 'data-identity',
    index: 3,
    name: 'Cấu trúc dữ liệu & Định danh số (Semantic & Schemas)',
    shortName: 'Cấu trúc & Định danh',
    description: 'Dán nhãn căn cước số cho website giúp các công cụ tìm kiếm hiểu chính xác tiệm làm gì, ở đâu.',
    iconName: 'Code2',
    criteriaCount: 6
  },
  {
    id: 'ai-search',
    index: 4,
    name: 'Thân thiện với AI Search (AEO & GEO Ready)',
    shortName: 'Thân thiện AI Search',
    description: 'Sẵn sàng để các trợ lý ảo (ChatGPT, Gemini, Perplexity) đọc hiểu và ưu tiên trích dẫn giới thiệu.',
    iconName: 'Bot',
    criteriaCount: 6
  },
  {
    id: 'security-infra',
    index: 5,
    name: 'Bảo mật & Hạ tầng (Security & Infrastructure)',
    shortName: 'Bảo mật & Hạ tầng',
    description: 'Bảo vệ website không bị hack hay sập trang, sao lưu dữ liệu an toàn và hoạt động liên tục 24/7.',
    iconName: 'ShieldCheck',
    criteriaCount: 6
  }
];

export const AUDIT_CRITERIA_30: AuditCriterion[] = [
  // ==========================================
  // NHÓM 1: TỐC ĐỘ & TRẢI NGHIỆM DI ĐỘNG (1 - 6)
  // ==========================================
  {
    id: 'CWV-01',
    number: 1,
    categoryId: 'speed-mobile',
    categoryName: 'Tốc độ & Trải nghiệm di động',
    categoryShort: 'Tốc độ & Di động',
    title: 'Core Web Vitals LCP < 1.2 giây trên mạng di động 4G',
    benchmark: 'LCP ≤ 1.2s (Màu xanh Google PageSpeed)',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Khách hàng bấm vào link là màn hình chính phải hiện ra ngay trong tích tắc (dưới 1.2 giây). Nếu đợi quá 2.5 giây, hơn một nửa số khách sẽ tắt đi tìm tiệm khác.',
    businessImpact: 'Giảm 50% tỷ lệ khách thoát trang ngay từ giây đầu tiên; tăng mạnh điểm xếp hạng hiển thị tự nhiên trên Google tìm kiếm.',
    localmateSolution: 'Mã nguồn dựng bằng Vite + React tinh gọn tuyệt đối, nén toàn bộ tài nguyên bằng thuật toán Brotli/Gzip, không dùng WordPress cồng kềnh với hàng chục plugin rác.'
  },
  {
    id: 'CWV-02',
    number: 2,
    categoryId: 'speed-mobile',
    categoryName: 'Tốc độ & Trải nghiệm di động',
    categoryShort: 'Tốc độ & Di động',
    title: 'CLS = 0.000 (Tuyệt đối không giật nảy khung hình khi tải)',
    benchmark: 'CLS = 0.000 (Zero Cumulative Layout Shift)',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Trang web tải tới đâu phải đứng yên tới đó. Không có tình trạng khách vừa đưa tay định bấm nút "Gọi điện" thì hình nhảy xuống làm bấm nhầm vào chỗ khác gây bực mình.',
    businessImpact: 'Tránh trải nghiệm bấm trượt gây mất khách hàng; tạo cảm giác trang web cực kỳ chỉn chu, tin cậy và mượt mà như ứng dụng di động cao cấp.',
    localmateSolution: 'Cố định kích thước khung chứa ảnh và video bằng aspect-ratio chuẩn, dự trữ sẵn vùng hiển thị nội dung và kích hoạt thuộc tính scrollbar-gutter: stable chống rung lắc layout.'
  },
  {
    id: 'CWV-03',
    number: 3,
    categoryId: 'speed-mobile',
    categoryName: 'Tốc độ & Trải nghiệm di động',
    categoryShort: 'Tốc độ & Di động',
    title: 'Độ trễ tương tác chạm FID / INP < 100ms',
    benchmark: 'INP ≤ 100ms (Phản hồi tức thì sau cú chạm)',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Khách chạm ngón tay vào menu, xem bảng giá hay ấn nút gọi thì máy phải phản hồi ngay lập tức, không có cảm giác bị "đơ" hay giật đứng hình.',
    businessImpact: 'Khách hàng thao tác xem menu hoặc đặt dịch vụ nhanh chóng mà không thấy ức chế, tăng tỷ lệ hoàn tất cuộc gọi tư vấn lên 25%.',
    localmateSolution: 'Tối ưu hóa luồng thực thi JavaScript chính, loại bỏ toàn bộ mã phân tích theo dõi thừa thãi, đảm bảo điện thoại tầm trung và máy cũ đều chạy cực êm.'
  },
  {
    id: 'CWV-04',
    number: 4,
    categoryId: 'speed-mobile',
    categoryName: 'Tốc độ & Trải nghiệm di động',
    categoryShort: 'Tốc độ & Di động',
    title: 'Nút gọi thoại & Zalo cố định (Touch Target) ≥ 44px',
    benchmark: 'Kích thước nút bấm ≥ 48 x 48px (Chuẩn WCAG 2.1 AA)',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Nút Gọi điện thoại và Nhắn Zalo luôn nổi cố định ở góc dưới màn hình, kích thước vừa vặn cho ngón tay cái người lớn chạm vào dễ dàng mà không bị bấm trượt.',
    businessImpact: 'Là "cần câu cơm" trực tiếp của tiệm: Giúp khách cần gấp (cứu hộ xe, đặt bàn ăn, khám bệnh, làm tóc) bấm gọi thợ chỉ sau 1 thao tác duy nhất.',
    localmateSolution: 'Tích hợp Floating CTA cố định đáy màn hình, kích thước nút chuẩn 48-52px, tính toán tự động khoảng cách đệm an toàn cho tai thỏ và viền bo đáy iPhone (Safe Area Insets).'
  },
  {
    id: 'CWV-05',
    number: 5,
    categoryId: 'speed-mobile',
    categoryName: 'Tốc độ & Trải nghiệm di động',
    categoryShort: 'Tốc độ & Di động',
    title: 'Tối ưu ảnh thế hệ mới (Next-Gen WebP/AVIF & Lazy-load)',
    benchmark: '100% ảnh định dạng WebP/AVIF dung lượng < 120KB',
    priority: 'high',
    priorityLabel: 'Quan trọng',
    simpleExplanation: 'Hình chụp món ăn, không gian quán hay sản phẩm của tiệm vẫn sắc nét long lanh nhưng dung lượng nhẹ gấp 5 lần ảnh gốc, không làm tốn 4G của khách.',
    businessImpact: 'Tiết kiệm tối đa lưu lượng dữ liệu di động cho khách ghé thăm; giúp website tải vù vù ngay cả khi khách đang ở vùng sóng yếu.',
    localmateSolution: 'Quy trình nén lossless và chuyển đổi tự động sang chuẩn AVIF/WebP, áp dụng thuộc tính loading="lazy" để ảnh chỉ tải khi khách cuộn màn hình đến gần vị trí đó.'
  },
  {
    id: 'CWV-06',
    number: 6,
    categoryId: 'speed-mobile',
    categoryName: 'Tốc độ & Trải nghiệm di động',
    categoryShort: 'Tốc độ & Di động',
    title: 'Tự lưu trữ Font chữ (Self-Hosted WOFF2) & Chống nháy chữ',
    benchmark: 'Font WOFF2 nội bộ domain + font-display: swap',
    priority: 'advanced',
    priorityLabel: 'Nâng cao',
    simpleExplanation: 'Chữ trên trang web hiện ra đọc được ngay khi mở, không bị mất nét chữ hay trắng xóa màn hình trong lúc chờ tải bộ chữ từ nước ngoài.',
    businessImpact: 'Tạo trải nghiệm đọc liền mạch, chữ tiếng Việt hiển thị đầy đủ dấu không bị lỗi font cục bộ, ghi điểm chuyên nghiệp trong mắt khách hàng.',
    localmateSolution: 'Lưu trữ trực tiếp các tệp font WOFF2 nhẹ nhất (như Be Vietnam Pro) ngay trên máy chủ dự án, kích hoạt preload và font-display: swap triệt tiêu hiện tượng FOUT/FOIT.'
  },

  // ==========================================
  // NHÓM 2: BẢN ĐỒ & TÍN HIỆU ĐỊA PHƯƠNG (7 - 12)
  // ==========================================
  {
    id: 'LOC-01',
    number: 7,
    categoryId: 'local-signals',
    categoryName: 'Bản đồ & Tín hiệu địa phương (Local Signals)',
    categoryShort: 'Bản đồ & Tín hiệu',
    title: 'Hồ sơ Google Business Profile (GBP) xác minh chính chủ',
    benchmark: 'Hồ sơ có dấu tích xác minh + Bàn giao tài khoản Owner chính',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Địa điểm kinh doanh của bạn trên Google Maps phải được xác nhận là cơ sở thật do chính bạn làm chủ, không lo bị kẻ xấu báo cáo mạo danh hay đổi số điện thoại.',
    businessImpact: 'Bảo vệ quyền sở hữu thương hiệu địa phương; mở khóa khả năng xuất hiện trong top 3 đề xuất khi khách tìm kiếm dịch vụ ở khu vực lân cận.',
    localmateSolution: 'Hướng dẫn và đồng hành xác minh Google Business Profile chính chủ bằng video trực quan hoặc mã bưu điện, phân quyền sở hữu vĩnh viễn cho tài khoản Gmail của khách hàng.'
  },
  {
    id: 'LOC-02',
    number: 8,
    categoryId: 'local-signals',
    categoryName: 'Bản đồ & Tín hiệu địa phương (Local Signals)',
    categoryShort: 'Bản đồ & Tín hiệu',
    title: 'Tọa độ GPS chính xác tuyệt đối đến số nhà / cổng vào',
    benchmark: 'Sai số GPS < 3 mét, ghim đúng cổng đón khách thực tế',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Khách hàng bấm "Chỉ đường" thì Google Maps phải dẫn xe thẳng tới cửa tiệm, không bị dẫn đi lòng vòng sang hẻm cụt hay chỉ sang mặt sau nhà.',
    businessImpact: 'Giúp khách tìm đường dễ dàng không bị lạc và bực dọc quay đầu; tăng 40% tỷ lệ khách thực sự bước chân vào cửa hàng sau khi tìm kiếm.',
    localmateSolution: 'Đo đạc và ghim tọa độ thực địa chính xác theo định dạng vĩ độ/kinh độ 6 chữ số thập phân, nhúng bản đồ tương tác responsive có liên kết trực tiếp ứng dụng Google Maps app.'
  },
  {
    id: 'LOC-03',
    number: 9,
    categoryId: 'local-signals',
    categoryName: 'Bản đồ & Tín hiệu địa phương (Local Signals)',
    categoryShort: 'Bản đồ & Tín hiệu',
    title: 'Đồng nhất thông tin NAP 100% (Name, Address, Phone)',
    benchmark: 'Khớp 100% từng chữ số nhà, tên tiệm, hotline trên mọi nền tảng',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Tên quán, địa chỉ và số điện thoại trên Website, Google Maps, Facebook, Zalo phải giống hệt nhau từng chữ một. Nếu mỗi nơi ghi một kiểu, Google sẽ nghi ngờ tiệm ảo.',
    businessImpact: 'Tạo độ tin cậy tuyệt đối cho thuật toán xếp hạng cục bộ; đưa điểm kinh doanh vào nhóm ưu tiên hàng đầu trong bán kính 3 - 10km.',
    localmateSolution: 'Rà soát và chuẩn hóa toàn bộ cấu trúc địa chỉ hành chính theo định dạng chuẩn quốc gia, đồng bộ hóa danh bạ số (Citation) trên website và các mạng xã hội chính.'
  },
  {
    id: 'LOC-04',
    number: 10,
    categoryId: 'local-signals',
    categoryName: 'Bản đồ & Tín hiệu địa phương (Local Signals)',
    categoryShort: 'Bản đồ & Tín hiệu',
    title: 'Tạo QR giúp khách hàng đã sử dụng dịch vụ để lại đánh giá chân thực trên Google',
    benchmark: 'Quét 1 giây mở thẳng giao diện để lại đánh giá chân thực trên Google Maps',
    priority: 'high',
    priorityLabel: 'Quan trọng',
    simpleExplanation: 'Khách dùng dịch vụ xong chỉ cần đưa điện thoại quét mã QR tại quầy là màn hình mở ngay chỗ viết nhận xét chân thực, không phải mất công tìm kiếm tên quán.',
    businessImpact: 'Tăng nhanh số lượng đánh giá thực tế từ khách hàng thật; giúp cơ sở vượt mặt đối thủ cùng phố về điểm uy tín và đánh giá khách quan.',
    localmateSolution: 'Tạo mã QR tĩnh liên kết trực tiếp URL đánh giá chuẩn của Google Maps, thiết kế sẵn mẫu in để bàn/quầy thu ngân đẹp mắt và nhúng widget đánh giá uy tín trên website.'
  },
  {
    id: 'LOC-05',
    number: 11,
    categoryId: 'local-signals',
    categoryName: 'Bản đồ & Tín hiệu địa phương (Local Signals)',
    categoryShort: 'Bản đồ & Tín hiệu',
    title: 'Cập nhật Giờ mở cửa & Ngày lễ thời gian thực',
    benchmark: 'Hiển thị chính xác trạng thái Đang mở cửa / Đã đóng cửa',
    priority: 'high',
    priorityLabel: 'Quan trọng',
    simpleExplanation: 'Website và bản đồ phải thông báo đúng tiệm đang mở hay đóng cửa lúc này, tránh tình trạng khách chạy xe giữa trưa tới nơi thấy tiệm khóa cửa làm khách tức giận đánh giá 1 sao.',
    businessImpact: 'Google rất ưu tiên hiển thị các cơ sở đang trong giờ mở cửa cho những khách đang tìm kiếm gấp; tránh mất khách hàng tiềm năng.',
    localmateSolution: 'Thiết lập Schema openingHoursSpecification hỗ trợ đa khung giờ trong tuần, cập nhật lịch nghỉ lễ/Tết trước 48 giờ và hiển thị nhãn trạng thái thời gian thực trên thanh tiêu đề.'
  },
  {
    id: 'LOC-06',
    number: 12,
    categoryId: 'local-signals',
    categoryName: 'Bản đồ & Tín hiệu địa phương (Local Signals)',
    categoryShort: 'Bản đồ & Tín hiệu',
    title: 'Chuẩn hóa Danh mục kinh doanh (Primary & Secondary Categories)',
    benchmark: '1 Danh mục chính xác thực + 3-5 danh mục phụ liên quan',
    priority: 'advanced',
    priorityLabel: 'Nâng cao',
    simpleExplanation: 'Ví dụ tiệm sửa xe thì phải chọn đúng "Tiệm sửa xe máy", nếu chọn nhầm sang "Cửa hàng phụ tùng xe" thì khách cần sửa xe tìm trên mạng sẽ không bao giờ thấy tiệm bạn.',
    businessImpact: 'Định vị chính xác nhóm khách hàng mục tiêu; không bị lãng phí lượt tìm kiếm vào những dịch vụ mà cơ sở không cung cấp.',
    localmateSolution: 'Khảo sát hành vi tìm kiếm thực tế tại địa phương, lựa chọn mã danh mục chuẩn xác nhất theo phân loại của Google Maps và nhúng vào Schema ProfessionalService/Store.'
  },

  // ==========================================
  // NHÓM 3: CẤU TRÚC DỮ LIỆU & ĐỊNH DANH SỐ (13 - 18)
  // ==========================================
  {
    id: 'SCH-01',
    number: 13,
    categoryId: 'data-identity',
    categoryName: 'Cấu trúc dữ liệu & Định danh số (Semantic & Schemas)',
    categoryShort: 'Cấu trúc & Định danh',
    title: 'Schema.org LocalBusiness JSON-LD hoàn chỉnh',
    benchmark: 'Vượt qua 100% bài kiểm tra Google Rich Results Test (0 lỗi)',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Đây là "bản dịch căn cước công dân của tiệm" viết bằng ngôn ngữ riêng để robot Google đọc: tiệm tên gì, ở đâu, bán gì, giá khoảng bao nhiêu, liên hệ thế nào.',
    businessImpact: 'Giúp cỗ máy tìm kiếm hiểu sâu sắc mô hình kinh doanh mà không cần đoán mò; nâng cao đáng kể tỷ lệ được chọn hiển thị ở vị trí trang trọng.',
    localmateSolution: 'Cấu hình mã JSON-LD chuẩn Schema.org phân nhánh cụ thể (Restaurant, AutoRepair, MedicalBusiness, Store...) chứa đầy đủ tọa độ geo, priceRange, telephone và address.'
  },
  {
    id: 'SCH-02',
    number: 14,
    categoryId: 'data-identity',
    categoryName: 'Cấu trúc dữ liệu & Định danh số (Semantic & Schemas)',
    categoryShort: 'Cấu trúc & Định danh',
    title: 'BreadcrumbList Schema (Thanh điều hướng phân cấp)',
    benchmark: 'Phân cấp rõ ràng 3 tầng: Trang chủ > Danh mục > Trang dịch vụ',
    priority: 'high',
    priorityLabel: 'Quan trọng',
    simpleExplanation: 'Giúp khách và Google biết họ đang đứng ở mục nào trong tiệm, bấm quay lại mục trước nhanh chóng; kết quả tìm kiếm trên Google hiện đường dẫn phân cấp chuyên nghiệp.',
    businessImpact: 'Tăng diện tích hiển thị trên Google; giúp người dùng di chuyển giữa các trang dịch vụ thuận tiện, giảm tỷ lệ thoát trang.',
    localmateSolution: 'Tạo thanh Breadcrumbs semantic chuẩn ngữ nghĩa kèm thẻ dữ liệu có cấu trúc BreadcrumbList tự động cập nhật theo đường dẫn URL của website.'
  },
  {
    id: 'SCH-03',
    number: 15,
    categoryId: 'data-identity',
    categoryName: 'Cấu trúc dữ liệu & Định danh số (Semantic & Schemas)',
    categoryShort: 'Cấu trúc & Định danh',
    title: 'FAQPage Schema (Khối câu hỏi thường gặp hiển thị rộng trên Google)',
    benchmark: '3 - 5 câu hỏi giải tỏa thắc mắc khách hàng đạt chuẩn Google Search',
    priority: 'high',
    priorityLabel: 'Quan trọng',
    simpleExplanation: 'Website của bạn xuất hiện trên Google sẽ to gấp rưỡi các website khác nhờ có thêm các dòng câu hỏi kèm câu trả lời giải đáp thắc mắc xổ xuống ngay trên trang tìm kiếm.',
    businessImpact: 'Tăng gấp đôi tỷ lệ khách bấm vào xem trang (CTR); giải quyết ngay các băn khoăn về giá cả, thời gian làm và cam kết bảo hành của tiệm.',
    localmateSolution: 'Biên tập các câu hỏi khách hàng hay thắc mắc nhất, hiển thị dưới dạng accordion mở gập êm ái và nhúng thẻ cấu trúc Schema.org/FAQPage đạt chuẩn Rich Snippets.'
  },
  {
    id: 'SCH-04',
    number: 16,
    categoryId: 'data-identity',
    categoryName: 'Cấu trúc dữ liệu & Định danh số (Semantic & Schemas)',
    categoryShort: 'Cấu trúc & Định danh',
    title: 'Thuộc tính SameAs Profiles kết nối định danh đa kênh',
    benchmark: 'Tối thiểu 4 liên kết mạng xã hội chính thức (Maps, Facebook, Zalo, TikTok)',
    priority: 'high',
    priorityLabel: 'Quan trọng',
    simpleExplanation: 'Khai báo rõ cho Google biết trang Facebook, kênh TikTok, Zalo OA và địa chỉ Google Maps này đều thuộc về cùng một cửa hàng thực tế của bạn.',
    businessImpact: 'Tập hợp toàn bộ uy tín từ các mạng xã hội đổ dồn về website chính; gia tăng quyền lực thương hiệu và tránh bị nhầm lẫn với đối thủ trùng tên.',
    localmateSolution: 'Khai báo mảng SameAs trong cấu trúc JSON-LD liên kết chính xác các trang mạng xã hội chính chủ, tạo thực thể kinh doanh vững chắc trên Internet.'
  },
  {
    id: 'SCH-05',
    number: 17,
    categoryId: 'data-identity',
    categoryName: 'Cấu trúc dữ liệu & Định danh số (Semantic & Schemas)',
    categoryShort: 'Cấu trúc & Định danh',
    title: 'Cấu trúc ngữ nghĩa Semantic HTML5 chuẩn xác',
    benchmark: 'Duy nhất 1 thẻ H1, phân cấp H2-H3 logic, có header/main/footer',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Như một ngôi nhà được phân chia rõ phòng khách, phòng bếp, phòng ngủ; website phải có tiêu đề chính và tiêu đề phụ mạch lạc để máy đọc hiểu nội dung quan trọng nhất.',
    businessImpact: 'Robot tìm kiếm lập chỉ mục (index) nội dung nhanh hơn gấp 3 lần; hỗ trợ người khiếm thị sử dụng phần mềm đọc màn hình thuận tiện.',
    localmateSolution: 'Xây dựng layout chuẩn HTML5 (header, main, section, footer), tuân thủ nghiêm ngặt nguyên tắc chỉ 1 thẻ H1 đại diện cho chủ đề cốt lõi của trang, không nhảy cóc cấp độ tiêu đề.'
  },
  {
    id: 'SCH-06',
    number: 18,
    categoryId: 'data-identity',
    categoryName: 'Cấu trúc dữ liệu & Định danh số (Semantic & Schemas)',
    categoryShort: 'Cấu trúc & Định danh',
    title: 'Thẻ Open Graph & Twitter Cards tối ưu chia sẻ mạng xã hội',
    benchmark: 'Ảnh đại diện chuẩn 1200x630px, tiêu đề hấp dẫn, mô tả rõ ràng',
    priority: 'advanced',
    priorityLabel: 'Nâng cao',
    simpleExplanation: 'Khi bạn gửi link website qua Zalo, Facebook Messenger hay dán lên nhóm, tin nhắn sẽ hiện ra hình ảnh đẹp mắt kèm dòng giới thiệu sang trọng chứ không phải chỉ là dòng chữ xanh thô kệch.',
    businessImpact: 'Tạo ấn tượng chuyên nghiệp ngay khi nhắn tin tư vấn cho khách; kích thích người nhận bấm vào xem chi tiết cao hơn 70%.',
    localmateSolution: 'Thiết lập đầy đủ các thẻ meta og:title, og:description, og:image, og:url với ảnh đại diện được tối ưu tỉ lệ vàng 1.91:1 sắc nét trên mọi ứng dụng nhắn tin.'
  },

  // ==========================================
  // NHÓM 4: THÂN THIỆN VỚI AI SEARCH (19 - 24)
  // ==========================================
  {
    id: 'AEO-01',
    number: 19,
    categoryId: 'ai-search',
    categoryName: 'Thân thiện với AI Search (AEO & GEO Ready)',
    categoryShort: 'Thân thiện AI Search',
    title: 'Tệp định vị thông tin `llms.txt` tại thư mục gốc domain',
    benchmark: 'Tệp https://tenmien.vn/llms.txt công khai, chuẩn định dạng Markdown',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Đây là cuốn "sổ tay tóm tắt thông tin" viết riêng cho các trí tuệ nhân tạo (ChatGPT, Gemini, Perplexity) đọc để hiểu tiệm bạn chỉ sau 1 giây mà không phải lùng sục cả web.',
    businessImpact: 'Khi người dân dùng AI để hỏi "Tìm quán ăn ngon gần đây" hay "Tìm thợ sửa máy lạnh uy tín", AI sẽ trích xuất ngay dữ liệu từ tệp này để giới thiệu tiệm bạn.',
    localmateSolution: 'Tạo tệp /llms.txt chuẩn hóa quốc tế chứa thông tin cốt lõi: giới thiệu dịch vụ, bảng giá công khai, địa chỉ phục vụ, cam kết chất lượng và liên kết đến các trang chi tiết.'
  },
  {
    id: 'AEO-02',
    number: 20,
    categoryId: 'ai-search',
    categoryName: 'Thân thiện với AI Search (AEO & GEO Ready)',
    categoryShort: 'Thân thiện AI Search',
    title: 'Cấu trúc Inverted Pyramid FAQ (Thông tin cốt lõi đưa lên đầu)',
    benchmark: 'Câu trả lời cốt lõi nằm trọn vẹn trong 1-2 câu đầu tiên (< 45 từ)',
    priority: 'high',
    priorityLabel: 'Quan trọng',
    simpleExplanation: 'Trả lời thẳng vào câu hỏi của khách ngay dòng đầu tiên (Ví dụ: "Giá thay nhớt xe từ 120.000đ, làm trong 15 phút"), sau đó mới giải thích chi tiết bên dưới, không vòng vo.',
    businessImpact: 'AI luôn ưu tiên trích dẫn các câu trả lời ngắn gọn, trực diện để đưa vào phần tóm tắt trả lời cho người dùng.',
    localmateSolution: 'Biên tập nội dung theo nguyên lý kim tự tháp ngược (Inverted Pyramid): Tóm tắt kết luận cốt lõi ở 45 từ đầu tiên, theo sau là danh sách số liệu và giải thích chuyên môn.'
  },
  {
    id: 'AEO-03',
    number: 21,
    categoryId: 'ai-search',
    categoryName: 'Thân thiện với AI Search (AEO & GEO Ready)',
    categoryShort: 'Thân thiện AI Search',
    title: 'Cấu trúc câu trả lời súc tích, Fact-dense dễ trích dẫn cho LLMs',
    benchmark: 'Chứa số liệu thực tế: Giá tiền, thời gian thực hiện, phạm vi bảo hành',
    priority: 'high',
    priorityLabel: 'Quan trọng',
    simpleExplanation: 'Nội dung chứa đầy đủ các con số thực tế thay vì những lời quảng cáo chung chung như "chất lượng số 1", "giá rẻ nhất thị trường" mà AI thường bỏ qua.',
    businessImpact: 'Tăng cơ hội được AI trích dẫn làm nguồn tài liệu tham khảo chính thức, củng cố vị thế chuyên gia hàng đầu trong khu vực.',
    localmateSolution: 'Thiết kế cấu trúc dữ liệu giàu số kiện (Fact Density): Ghi rõ đơn giá niêm yết, thời gian phục vụ, khoảng cách địa lý và chính sách bồi hoàn nếu không hài lòng.'
  },
  {
    id: 'AEO-04',
    number: 22,
    categoryId: 'ai-search',
    categoryName: 'Thân thiện với AI Search (AEO & GEO Ready)',
    categoryShort: 'Thân thiện AI Search',
    title: 'Cấu hình robots.txt & Meta cho phép AI Crawlers truy cập',
    benchmark: 'Allow rõ ràng cho các bot AI thịnh hành: GPTBot, ClaudeBot, PerplexityBot',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Mở cửa chào đón các "chú robot thông minh" của ChatGPT, Claude, Perplexity vào thu thập dữ liệu của quán, không khóa cửa chặn đường chúng.',
    businessImpact: 'Đảm bảo thông tin của cơ sở luôn được cập nhật mới nhất trong cơ sở dữ liệu của các mô hình trí tuệ nhân tạo thế hệ mới.',
    localmateSolution: 'Cấu hình tệp robots.txt chuẩn chỉ, phân quyền cụ thể cho GPTBot, PerplexityBot, Applebot, Google-Extended được phép đọc nội dung công khai.'
  },
  {
    id: 'AEO-05',
    number: 23,
    categoryId: 'ai-search',
    categoryName: 'Thân thiện với AI Search (AEO & GEO Ready)',
    categoryShort: 'Thân thiện AI Search',
    title: 'Bảng giá & Dịch vụ rõ ràng bằng thẻ HTML Semantic (Table/DL)',
    benchmark: 'Dùng bảng HTML table hoặc danh sách dl/dt/dd, tuyệt đối không dùng ảnh chụp bảng giá',
    priority: 'high',
    priorityLabel: 'Quan trọng',
    simpleExplanation: 'Bảng giá dịch vụ phải được gõ bằng chữ rõ ràng trên web, tuyệt đối không chụp ảnh bảng giá rồi đăng lên vì robot AI sẽ không đọc được chữ trong ảnh.',
    businessImpact: 'Khách hỏi AI về giá tiền dịch vụ của bạn sẽ được báo giá chính xác 100%, thúc đẩy quyết định nhấc máy gọi ngay.',
    localmateSolution: 'Xây dựng bảng giá minh bạch bằng các phần tử HTML semantic có cấu trúc cột rõ ràng: Tên dịch vụ, Mô tả công việc, Đơn giá trọn gói và Cam kết phụ tùng chính hãng.'
  },
  {
    id: 'AEO-06',
    number: 24,
    categoryId: 'ai-search',
    categoryName: 'Thân thiện với AI Search (AEO & GEO Ready)',
    categoryShort: 'Thân thiện AI Search',
    title: 'Tín hiệu định danh thực thể (Entity Authority & Local N-Grams)',
    benchmark: 'Lồng ghép các địa danh phụ cận, cột mốc khu vực tự nhiên trong nội dung',
    priority: 'advanced',
    priorityLabel: 'Nâng cao',
    simpleExplanation: 'Nội dung nhắc đến các địa điểm quen thuộc xung quanh như: gần chợ nào, đối diện trường học nào, cách ngã tư bao xa để AI hiểu chính xác tiệm phục vụ dân cư ở đâu.',
    businessImpact: 'Tăng khả năng xuất hiện khi người dân tìm kiếm bằng ngôn ngữ tự nhiên địa phương như "gần ngã 4 Tân Thới Hiệp" hay "đoạn chợ Hóc Môn".',
    localmateSolution: 'Phân tích và đưa vào bài viết các thực thể địa lý địa phương (landmarks, tên đường nhánh, khu công nghiệp lân cận) một cách tự nhiên và chính xác.'
  },

  // ==========================================
  // NHÓM 5: BẢO MẬT & HẠ TẦNG (25 - 30)
  // ==========================================
  {
    id: 'SEC-01',
    number: 25,
    categoryId: 'security-infra',
    categoryName: 'Bảo mật & Hạ tầng (Security & Infrastructure)',
    categoryShort: 'Bảo mật & Hạ tầng',
    title: 'Chứng chỉ bảo mật SSL TLS 1.3 & HSTS ép buộc HTTPS 100%',
    benchmark: 'Khóa xanh ổ khóa, giao thức TLS 1.3, tự động chuyển 100% về https://',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Khi khách vào trang web luôn có biểu tượng ổ khóa an toàn màu xanh, không bao giờ bị báo lỗi đỏ "Trang web không an toàn" làm khách sợ bị hack máy hay lừa đảo.',
    businessImpact: 'Xây dựng niềm tin ban đầu của người mua hàng; đáp ứng điều kiện tiên quyết của Google để được xếp hạng tìm kiếm.',
    localmateSolution: 'Trang bị chứng chỉ mã hóa SSL 256-bit chuẩn TLS 1.3 tự động gia hạn vĩnh viễn, kích hoạt HSTS (HTTP Strict Transport Security) chống chuyển hướng độc hại.'
  },
  {
    id: 'SEC-02',
    number: 26,
    categoryId: 'security-infra',
    categoryName: 'Bảo mật & Hạ tầng (Security & Infrastructure)',
    categoryShort: 'Bảo mật & Hạ tầng',
    title: 'Cloudflare CDN Edge Cache phân phối siêu tốc trong nước',
    benchmark: 'Máy chủ đệm tại TP.HCM & Hà Nội, độ trễ máy chủ TTFB < 80ms',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Dữ liệu trang web được lưu sẵn tại các máy chủ đặt ngay ở TP.HCM và Hà Nội, dù cáp quang biển quốc tế có bị đứt thì khách mở trang web vẫn nhanh như chớp.',
    businessImpact: 'Đảm bảo hoạt động kinh doanh online không bị gián đoạn vào những đợt đứt cáp quang biển định kỳ hàng năm.',
    localmateSolution: 'Định tuyến toàn bộ lưu lượng qua mạng lưới Cloudflare Edge CDN với các PoP nội địa Việt Nam, thiết lập cache tĩnh cho mã nguồn, hình ảnh và tệp CSS.'
  },
  {
    id: 'SEC-03',
    number: 27,
    categoryId: 'security-infra',
    categoryName: 'Bảo mật & Hạ tầng (Security & Infrastructure)',
    categoryShort: 'Bảo mật & Hạ tầng',
    title: 'Tường lửa chống tấn công DDoS & Web Application Firewall (WAF)',
    benchmark: 'Chặn 100% các cuộc tấn công quét lỗ hổng và làm nghẽn mạng',
    priority: 'high',
    priorityLabel: 'Quan trọng',
    simpleExplanation: 'Bảo vệ trang web không bị đối thủ xấu chơi thuê người bấm liên tục làm sập trang, hoặc bị kẻ gian cài cắm các đường link cờ bạc cá độ bẩn thỉu.',
    businessImpact: 'Giữ cho website luôn vững vàng trước mọi hình thức cạnh tranh không lành mạnh; giữ gìn uy tín kinh doanh trong sáng.',
    localmateSolution: 'Kích hoạt tường lửa ứng dụng web Cloudflare WAF, cơ chế lọc tự động các truy cập bot spam, bảo vệ biểu mẫu liên hệ chống spam thư rác.'
  },
  {
    id: 'SEC-04',
    number: 28,
    categoryId: 'security-infra',
    categoryName: 'Bảo mật & Hạ tầng (Security & Infrastructure)',
    categoryShort: 'Bảo mật & Hạ tầng',
    title: 'Tự động sao lưu dữ liệu (Weekly Backups) lưu trữ độc lập',
    benchmark: 'Bản sao lưu tạo tự động hàng tuần, lưu trữ đám mây tách biệt',
    priority: 'critical',
    priorityLabel: 'Bắt buộc',
    simpleExplanation: 'Lỡ như nhân viên bấm nhầm xóa mất bài viết hoặc có sự cố ngoài ý muốn thì chỉ cần 1 cuộc gọi là khôi phục lại nguyên vẹn website chỉ trong 15 phút.',
    businessImpact: 'Loại bỏ hoàn toàn nỗi sợ mất dữ liệu khách hàng, hình ảnh hay bài viết đã kỳ công xây dựng qua nhiều năm kinh doanh.',
    localmateSolution: 'Hệ thống tự động sao lưu mã nguồn và cơ sở dữ liệu định kỳ hàng tuần, mã hóa và cất giữ an toàn trên kho lưu trữ đám mây độc lập tách rời máy chủ chính.'
  },
  {
    id: 'SEC-05',
    number: 29,
    categoryId: 'security-infra',
    categoryName: 'Bảo mật & Hạ tầng (Security & Infrastructure)',
    categoryShort: 'Bảo mật & Hạ tầng',
    title: 'Hệ thống giám sát Uptime 99.9% cảnh báo sự cố tức thì',
    benchmark: 'Kiểm tra trạng thái mỗi 60 giây từ 5 trạm quan sát trên toàn cầu',
    priority: 'high',
    priorityLabel: 'Quan trọng',
    simpleExplanation: 'Nếu trang web gặp trục trặc lúc nửa đêm, hệ thống sẽ báo ngay cho kỹ thuật viên LocalMate để xử lý trước khi khách hàng hay bạn kịp phát hiện.',
    businessImpact: 'Đảm bảo khách hàng bấm vào link quảng cáo hay kết quả tìm kiếm vào bất cứ giờ nào trong ngày cũng xem được thông tin thông suốt.',
    localmateSolution: 'Tích hợp hệ thống theo dõi Uptime tự động 24/7/365, tự động gửi cảnh báo khẩn cấp đến phòng kỹ thuật LocalMate qua Telegram/Zalo ngay khi có gián đoạn dịch vụ.'
  },
  {
    id: 'SEC-06',
    number: 30,
    categoryId: 'security-infra',
    categoryName: 'Bảo mật & Hạ tầng (Security & Infrastructure)',
    categoryShort: 'Bảo mật & Hạ tầng',
    title: 'Tuân thủ pháp lý & Minh bạch thông tin (Bộ Công Thương & Privacy)',
    benchmark: 'Đầy đủ trang Chính sách bảo mật, Điều khoản dịch vụ và hồ sơ Thông báo BCT',
    priority: 'advanced',
    priorityLabel: 'Nâng cao',
    simpleExplanation: 'Website có đầy đủ thông tin chủ sở hữu, chính sách bảo vệ số điện thoại khách hàng và thông báo hợp lệ với Bộ Công Thương, hoạt động đàng hoàng đúng pháp luật.',
    businessImpact: 'Tạo sự tin tưởng tối đa cho những khách hàng lớn và cơ quan nhà nước; tránh các rủi ro bị xử phạt hành chính về thương mại điện tử.',
    localmateSolution: 'Thiết kế sẵn bộ trang mẫu chính sách bảo mật, điều khoản sử dụng, chính sách bảo hành/hoàn tiền và hướng dẫn hoàn tất thủ tục thông báo website với Bộ Công Thương (online.gov.vn).'
  }
];

export const AUDIT_STATS = {
  total: 30,
  critical: 14,
  high: 10,
  advanced: 6,
  categoriesCount: 5
};

export const COMPARISON_TABLE = [
  {
    metric: 'Tốc độ tải trang 4G',
    traditional: '4.5s - 8s (WordPress nhiều plugin nặng)',
    localmate: '< 1.2s (Vite React siêu nhẹ, tải tức thì)',
    highlight: true
  },
  {
    metric: 'Hiện tượng giật khung hình (CLS)',
    traditional: 'Giật nảy lung tung, hay bấm nhầm nút',
    localmate: 'CLS = 0.000 (Cố định vị trí tuyệt đối)',
    highlight: true
  },
  {
    metric: 'Nút gọi / Zalo di động',
    traditional: 'Bé xíu, chìm nghỉm hoặc bị che khuất',
    localmate: 'Nổi cố định ≥ 48px, chạm ngón cái cực dễ',
    highlight: true
  },
  {
    metric: 'Xác minh Google Business Profile',
    traditional: 'Tự bơi hoặc mua map rác dễ bị khóa',
    localmate: 'Xác minh chính chủ 100%, bàn giao trọn gói',
    highlight: true
  },
  {
    metric: 'Cấu trúc dữ liệu Schema.org',
    traditional: 'Không có hoặc tạo sai cú pháp báo lỗi đỏ',
    localmate: 'Chuẩn LocalBusiness JSON-LD đạt Rich Results',
    highlight: true
  },
  {
    metric: 'Thân thiện AI Search (llms.txt)',
    traditional: 'Hoàn toàn không biết đến, bị AI bỏ qua',
    localmate: 'Tệp llms.txt + Cấu trúc AEO chuẩn 2026',
    highlight: true
  },
  {
    metric: 'Bảo mật & Phòng thủ sự cố',
    traditional: 'SSL cơ bản, hosting yếu đứt cáp là sập',
    localmate: 'Cloudflare Edge CDN + WAF + Sao lưu tuần',
    highlight: false
  },
  {
    metric: 'Bàn giao tài khoản',
    traditional: 'Giam giữ mã nguồn, đổi đơn vị bị đòi tiền',
    localmate: 'Chính chủ 100%, bàn giao toàn quyền sở hữu',
    highlight: false
  }
];

export const AUDIT_FAQS = [
  {
    q: 'Tại sao điểm kinh doanh địa phương lại cần đến 30 tiêu chuẩn kỹ thuật này?',
    a: 'Năm 2026, khách hàng tìm kiếm tiệm bằng điện thoại di động và hỏi các trợ lý AI nhiều hơn bao giờ hết. Một website chỉ đẹp mắt thôi là chưa đủ; nó phải đáp ứng tốc độ mở dưới 1.2 giây, ghim định vị GPS chuẩn xác và có mã dữ liệu cho Google & AI đọc. Nếu thiếu các tiêu chuẩn này, đối thủ cạnh tranh gần đó sẽ được ưu tiên xuất hiện trước bạn.'
  },
  {
    q: 'Tiệm của tôi chưa có website hoặc đang dùng web cũ thì kiểm tra thế nào?',
    a: 'LocalMate hỗ trợ kiểm tra chẩn đoán hoàn toàn miễn phí (0đ). Bạn chỉ cần gửi đường link website hiện tại (hoặc địa chỉ tiệm trên Google Maps), kỹ thuật viên của chúng tôi sẽ quét toàn bộ 30 tiêu chuẩn này và gửi bảng phân tích chi tiết kèm giải pháp xử lý qua Zalo trong 24 giờ.'
  },
  {
    q: 'Chi phí để nâng cấp website đạt chuẩn 30 tiêu chí này là bao nhiêu?',
    a: 'Mọi website do LocalMate thiết kế mới (từ gói Khởi Tạo 490k đến gói Toàn Diện) đều được tích hợp sẵn 100% các tiêu chí Bắt buộc và Quan trọng ngay từ đầu. Chúng tôi không thu thêm phí cài đặt từng tiêu chí như các đơn vị báo giá theo kiểu vẽ vời.'
  },
  {
    q: 'Tôi có thể tự tải bảng Checklist này về để tự kiểm tra tiệm của mình không?',
    a: 'Hoàn toàn được! Bạn hãy bấm nút "Tải Checklist PDF / In bản kiểm" ở đầu trang. Bảng kiểm tra sẽ được định dạng khổ in A4 gọn gàng để bạn hoặc nhân viên kỹ thuật có thể tích chọn từng tiêu chí trực tiếp.'
  },
  {
    q: 'Website của LocalMate làm ra có cam kết bảo hành các tiêu chuẩn này không?',
    a: 'Có. LocalMate cam kết bảo hành kỹ thuật 5 năm đối với tốc độ tải trang, mã dữ liệu Schema, chứng chỉ SSL và hỗ trợ kỹ thuật 1-1 trọn đời cho chủ cơ sở.'
  }
];
