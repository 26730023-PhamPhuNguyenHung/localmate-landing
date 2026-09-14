/**
 * CAPABILITIES DATA & MAPPING TAXONOMY
 * Single Source of Truth (SSOT) cho toàn bộ năng lực giải pháp kỹ thuật của LocalMate.
 * Kết nối chặt chẽ giữa 5 Solution Pillars và 41 dịch vụ trong Service Catalog.
 */

export interface CapabilityItem {
  id: string;
  pillarId: 'xay-nen-tang-so' | 'duoc-tim-thay' | 'thu-hut-khach-hang' | 'van-hanh-tu-dong-hoa' | 'dong-hanh-cham-soc';
  name: string;
  badge?: string;
  shortDescription: string;
  description: string;
  practicalValue: string;
  iconName: string;
  mappedCatalogServiceIds: string[];
  detailSlug?: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  // ==========================================
  // PILLAR 1: XÂY DỰNG NỀN TẢNG SỐ
  // ==========================================
  {
    id: 'sales-hub-website',
    pillarId: 'xay-nen-tang-so',
    name: 'Website Bán Hàng & Sales Hub Chuẩn Di Động',
    badge: 'Cốt Lõi',
    shortDescription: 'Trang web tinh gọn tối ưu cho việc chốt khách trên điện thoại.',
    description: 'Thiết kế trang bán hàng (Sales Hub) tập trung chuyển đổi, trình bày đủ 5 yếu tố ra quyết định: Năng lực thật, hình ảnh thực tế, bảng giá minh bạch, đánh giá khách cũ và nút liên hệ bấm là gọi ngay.',
    practicalValue: 'Khách hàng bấm vào là thấy ngay thông tin cần xem, không bị rối mắt hay thoát trang vì tải chậm.',
    iconName: 'Layout',
    mappedCatalogServiceIds: ['01', '02', '03', '04', '05']
  },
  {
    id: 'service-sales-pages',
    pillarId: 'xay-nen-tang-so',
    name: 'Trang Bán Hàng Chuyên Sâu Từng Dịch Vụ',
    badge: 'Chốt Sale',
    shortDescription: 'Mỗi dịch vụ chủ lực có một trang riêng biệt để ném Zalo cho khách xem.',
    description: 'Thay vì gửi 15 tấm ảnh rời rạc trôi tin trên Zalo, bạn gửi 1 link chuyên biệt (ví dụ /mai-ton, /nhom-xingfa) cho khách hàng xem đủ video, bảng giá, quy trình thi công trong 30 giây.',
    practicalValue: 'Tăng tỷ lệ khách trả lời và đồng ý khảo sát lên gấp 2-3 lần so với cách gửi ảnh thủ công.',
    iconName: 'FileText',
    mappedCatalogServiceIds: ['05', '06', '07']
  },
  {
    id: 'domain-ssl-security',
    pillarId: 'xay-nen-tang-so',
    name: 'Tên Miền Riêng & Khóa Bảo Mật SSL Miễn Phí',
    badge: 'Chính Chủ',
    shortDescription: 'Kết nối tên miền thương hiệu và bảo mật ổ khóa xanh HTTPS.',
    description: 'Cài đặt tên miền .vn hoặc .com do bạn đứng tên chính chủ 100%, kích hoạt chứng chỉ bảo mật HTTPS (SSL) miễn phí trọn đời và thiết lập tường lửa Cloudflare chống tấn công.',
    practicalValue: 'Khách hàng hoàn toàn tin tưởng khi bấm vào đường dẫn web không bị cảnh báo bảo mật nguy hiểm.',
    iconName: 'ShieldCheck',
    mappedCatalogServiceIds: ['12', '13']
  },
  {
    id: 'mobile-cro-optimization',
    pillarId: 'xay-nen-tang-so',
    name: 'Tối Ưu Trải Nghiệm Bấm Gọi & Liên Hệ (CRO)',
    badge: 'Chuyển Đổi',
    shortDescription: 'Bố trí thanh gọi Hotline và nút chat Zalo dính chân màn hình.',
    description: 'Thiết kế nút Gọi Ngay và Chat Zalo tại đúng vị trí ngón tay cái dễ bấm nhất trên điện thoại thông minh, bấm vào là kết nối cuộc gọi hoặc mở app Zalo ngay trong 1 giây.',
    practicalValue: 'Khách hàng lướt web trên điện thoại ngoài đường bấm gọi thợ chỉ trong 3 giây mà không cần lưu số.',
    iconName: 'Smartphone',
    mappedCatalogServiceIds: ['01', '03', '10']
  },
  {
    id: 'speed-pagespeed-90',
    pillarId: 'xay-nen-tang-so',
    name: 'Tối Ưu Tốc Độ Tải Trang Core Web Vitals (90+)',
    badge: 'Hiệu Năng',
    shortDescription: 'Mở trang dưới 1.2 giây trên mạng 3G/4G di động.',
    description: 'Mã nguồn viết siêu nhẹ, nén ảnh định dạng hiện đại WebP/AVIF không vỡ hạt, loại bỏ hiệu ứng giật lag để đạt điểm chuẩn Google PageSpeed từ 90 đến 100 điểm.',
    practicalValue: 'Khách hàng không mất kiên nhẫn tắt trang, đồng thời được Google ưu tiên xếp hạng cao hơn.',
    iconName: 'Zap',
    mappedCatalogServiceIds: ['11', '13']
  },

  // ==========================================
  // PILLAR 2: ĐƯỢC KHÁCH HÀNG TÌM THẤY
  // ==========================================
  {
    id: 'google-maps-optimization',
    pillarId: 'duoc-tim-thay',
    name: 'Xác Minh & Tối Ưu Google Maps Chính Chủ',
    badge: 'Bán Kính Gần',
    shortDescription: 'Đưa cơ sở lên vị trí hàng đầu trên bản đồ tìm kiếm địa phương.',
    description: 'Xác minh quyền sở hữu Google Business Profile bằng Gmail chính chủ của bạn, ghim chuẩn vị trí GPS, cập nhật ảnh mặt tiền, giờ mở cửa, số hotline và tạo QR giúp khách hàng đã sử dụng dịch vụ để lại đánh giá chân thực trên Google.',
    practicalValue: 'Cư dân xung quanh tìm kiếm là thấy ngay chỉ đường đến tiệm và bấm gọi điện thoại trực tiếp.',
    iconName: 'MapPin',
    mappedCatalogServiceIds: ['19', '20', '22'],
    detailSlug: '/dich-vu/local-search'
  },
  {
    id: 'seo-google-local',
    pillarId: 'duoc-tim-thay',
    name: 'SEO Google Tìm Kiếm Địa Phương (Local Search)',
    badge: 'Bền Vững',
    shortDescription: 'Lên top từ khóa tìm kiếm theo quận, huyện và khu vực.',
    description: 'Tối ưu website và trang dịch vụ bám sát các từ khóa có nhu cầu tìm thợ thực tế của bà con (ví dụ: sửa điều hòa Cầu Giấy, nhôm kính quận 7), cấu hình thẻ tiêu đề và sơ đồ sitemap chuẩn Google.',
    practicalValue: 'Nhận khách hàng tự nhiên tìm đến đều đặn mỗi tháng mà không phải trả tiền cho từng lượt click.',
    iconName: 'Search',
    mappedCatalogServiceIds: ['16', '18', '20'],
    detailSlug: '/dich-vu/local-search'
  },
  {
    id: 'schema-entity-nap',
    pillarId: 'duoc-tim-thay',
    name: 'Khai Báo Schema & Thực Thể Số (Entity NAP)',
    badge: 'Kỹ Thuật',
    shortDescription: 'Đồng bộ hóa tên, địa chỉ, số điện thoại cho máy đọc hiểu.',
    description: 'Cài đặt mã JSON-LD cấu trúc dữ liệu LocalBusiness (GeoCoordinates, OpeningHours, SameAs, PriceRange) đồng bộ 100% với Google Maps để công cụ tìm kiếm xác nhận bạn là doanh nghiệp có thật ngoài đời.',
    practicalValue: 'Tăng độ tin cậy của website với Google, giúp Maps và website bổ trợ kéo nhau lên top tìm kiếm.',
    iconName: 'Code2',
    mappedCatalogServiceIds: ['17']
  },
  {
    id: 'ai-search-geo-aeo',
    pillarId: 'duoc-tim-thay',
    name: 'Tối Ưu Tìm Kiếm AI (GEO / AEO / ChatGPT)',
    badge: 'Xu Hướng Mới',
    shortDescription: 'Được ChatGPT, Gemini, Perplexity đề xuất khi khách hỏi.',
    description: 'Tối ưu nội dung theo định dạng Answer Capsule và tệp llms.txt để các trợ lý trí tuệ nhân tạo (LLMs) đọc hiểu rõ năng lực của cơ sở bạn và chủ động đưa vào câu trả lời gợi ý cho người dùng.',
    practicalValue: 'Đón đầu xu hướng khách hàng ngày càng quen hỏi AI trước khi quyết định gọi dịch vụ.',
    iconName: 'Bot',
    mappedCatalogServiceIds: ['21', '40'],
    detailSlug: '/dich-vu/geo'
  },
  {
    id: 'pagespeed-technical-seo',
    pillarId: 'duoc-tim-thay',
    name: 'PageSpeed & Kỹ Thuật SEO Technical',
    badge: 'Hạ Tầng',
    shortDescription: 'Tốc độ tải trang chuẩn xanh Google Core Web Vitals.',
    description: 'Xử lý triệt để lỗi thẻ canonical, sơ đồ sitemap.xml, robots.txt và tối ưu hạ tầng tải trang dưới 1.5s để Google bot thu thập dữ liệu nhanh và xếp hạng website nhanh chóng.',
    practicalValue: 'Website hoạt động ổn định, không bị lỗi 404, lập chỉ mục bài viết mới chỉ sau vài giờ.',
    iconName: 'Activity',
    mappedCatalogServiceIds: ['11', '13', '16']
  },

  // ==========================================
  // PILLAR 3: THU HÚT KHÁCH HÀNG & TÌM LEAD
  // ==========================================
  {
    id: 'google-search-ads',
    pillarId: 'thu-hut-khach-hang',
    name: 'Quảng Cáo Google Tìm Kiếm Địa Phương (Google Ads)',
    badge: 'Nhu Cầu Gấp',
    shortDescription: 'Đón đầu khách hàng tìm kiếm khi có nhu cầu sửa chữa, mua sắm ngay.',
    description: 'Khởi tạo tài khoản chính chủ 100%, chọn lọc từ khóa có nhu cầu mua cao nhất, viết mẫu quảng cáo hấp dẫn kèm nút Gọi Hotline và thiết lập danh sách từ khóa phủ định chặn click rác.',
    practicalValue: 'Bắt đầu nhận cuộc gọi từ khách hàng có nhu cầu khẩn cấp chỉ sau 24-48 giờ kích hoạt chiến dịch.',
    iconName: 'Target',
    mappedCatalogServiceIds: ['28', '30']
  },
  {
    id: 'facebook-local-ads',
    pillarId: 'thu-hut-khach-hang',
    name: 'Quảng Cáo Facebook Bán Kính 1-5km Quanh Tiệm',
    badge: 'Phủ Vùng',
    shortDescription: 'Cắm mốc GPS tiếp cận đúng người dân sinh sống trong khu vực lân cận.',
    description: 'Chạy quảng cáo nhắm đúng bán kính quanh địa chỉ cửa hàng, sử dụng bài viết chân thực và hình ảnh/video công trình thực tế, kèm nút gửi tin nhắn Zalo/Messenger tự động.',
    practicalValue: 'Bà con trong phường, trong quận biết đến tiệm và nhớ tới bạn mỗi khi phát sinh nhu cầu.',
    iconName: 'Compass',
    mappedCatalogServiceIds: ['29']
  },
  {
    id: 'conversion-tracking-setup',
    pillarId: 'thu-hut-khach-hang',
    name: 'Cài Đặt Mã Đo Lường Chuyển Đổi (GA4 & Meta Pixel)',
    badge: 'Đo Lường',
    shortDescription: 'Đo chính xác từng lượt bấm gọi điện thoại và nhắn tin Zalo.',
    description: 'Cài đặt Google Tag Manager, Google Analytics 4 và mã Facebook Pixel để đếm chính xác số lần khách bấm nút Gọi, nút Zalo, điền form báo giá hoặc xem bản đồ chỉ đường.',
    practicalValue: 'Biết rõ mỗi đồng tiền quảng cáo bỏ ra đem lại bao nhiêu cuộc gọi, không còn mù mờ số liệu.',
    iconName: 'BarChart2',
    mappedCatalogServiceIds: ['23', '24', '25', '26', '27']
  },
  {
    id: 'ads-policy-repair-fix',
    pillarId: 'thu-hut-khach-hang',
    name: 'Khắc Phục Lỗi Quảng Cáo Ngành Sửa Chữa',
    badge: 'Chuyên Sâu',
    shortDescription: 'Gỡ lỗi vi phạm chính sách bên thứ ba cho cơ sở sửa chữa.',
    description: 'Rà soát website, bổ sung disclaimer độc lập pháp lý, gỡ bỏ vi phạm nhãn hiệu Trademark và hoàn thiện hồ sơ kháng nghị mở lại tài khoản quảng cáo cho tiệm sửa điện thoại, máy tính, điện máy.',
    practicalValue: 'Khôi phục điều kiện quảng cáo để tiệm tiếp tục nhận khách đều đặn mà không lo bị khóa tài khoản.',
    iconName: 'AlertTriangle',
    mappedCatalogServiceIds: ['31']
  },

  // ==========================================
  // PILLAR 4: QUẢN LÝ & TỰ ĐỘNG HÓA VẬN HÀNH
  // ==========================================
  {
    id: 'instant-lead-alert',
    pillarId: 'van-hanh-tu-dong-hoa',
    name: 'Báo Thông Báo Khách Mới Về Telegram / Zalo',
    badge: 'Tức Thì',
    shortDescription: 'Khách vừa điền form là chuông điện thoại reng báo tin trong 3 giây.',
    description: 'Kết nối webhook tự động: mỗi khi có khách để lại thông tin hoặc yêu cầu báo giá trên website, hệ thống gửi chuông báo ngay về Telegram hoặc nhóm Zalo nội bộ.',
    practicalValue: 'Gọi lại cho khách sau 2 phút khi họ vẫn đang hào hứng, tăng tỷ lệ chốt đơn lên tối đa.',
    iconName: 'Bell',
    mappedCatalogServiceIds: ['34']
  },
  {
    id: 'auto-google-sheets-crm',
    pillarId: 'van-hanh-tu-dong-hoa',
    name: 'Tự Động Đồng Bộ Khách Hàng Vào Google Sheets',
    badge: 'CRM Tinh Gọn',
    shortDescription: 'Lưu trữ thông tin khách hàng vào bảng tính quản lý tập trung.',
    description: 'Toàn bộ liên hệ từ form web được tự động lưu vào 1 file Google Sheets: Thời gian, Họ tên, SĐT, Nhu cầu, Trạng thái (Đã gọi / Đã gửi báo giá / Đã chốt) để theo dõi khoa học.',
    practicalValue: 'Không bao giờ lo quên số điện thoại khách hay thất lạc sổ tay ghi chép khi bận việc.',
    iconName: 'Table',
    mappedCatalogServiceIds: ['32', '36']
  },
  {
    id: 'auto-booking-system',
    pillarId: 'van-hanh-tu-dong-hoa',
    name: 'Hệ Thống Đặt Lịch Hẹn Trực Tuyến Tự Động',
    badge: 'Tự Động',
    shortDescription: 'Khách tự chọn ngày giờ làm dịch vụ, hệ thống tự khóa khung giờ.',
    description: 'Khách hàng chủ động chọn ngày, giờ và loại dịch vụ trên màn hình điện thoại, hệ thống tự động khóa lịch trùng và gửi tin nhắn/email xác nhận lịch hẹn cho khách.',
    practicalValue: 'Tránh hoàn toàn tình trạng đặt trùng giờ và giảm bớt 80% thời gian nhắn tin sắp xếp lịch.',
    iconName: 'Calendar',
    mappedCatalogServiceIds: ['33', '35']
  },
  {
    id: 'ai-chatbot-receptionist',
    pillarId: 'van-hanh-tu-dong-hoa',
    name: 'Trợ Lý AI Tư Vấn & Lấy Số Điện Thoại 24/7',
    badge: 'Trực 24/7',
    shortDescription: 'AI trực website trả lời bảng giá và xin thông tin liên hệ của khách.',
    description: 'Trợ lý AI được nạp bảng giá và tài liệu hỏi-đáp của cơ sở bạn, sẵn sàng giải đáp thắc mắc cơ bản của khách lúc nửa đêm và khéo léo xin số điện thoại để thợ gọi lại vào sáng hôm sau.',
    practicalValue: 'Không bỏ lỡ khách hàng ghé thăm website vào ban đêm hoặc những ngày nghỉ lễ.',
    iconName: 'Cpu',
    mappedCatalogServiceIds: ['37', '38']
  },

  // ==========================================
  // PILLAR 5: CHĂM SÓC & ĐỒNG HÀNH KỸ THUẬT
  // ==========================================
  {
    id: 'website-maintenance-backup',
    pillarId: 'dong-hanh-cham-soc',
    name: 'Bảo Trì Kỹ Thuật & Sao Lưu Dữ Liệu Định Kỳ',
    badge: 'An Toàn',
    shortDescription: 'Giám sát website hoạt động 24/7 và tạo bản sao lưu an toàn.',
    description: 'Kiểm tra trạng thái máy chủ lưu trữ, gia hạn chứng chỉ bảo mật SSL, kiểm tra hệ thống nút gọi thoại và tạo bản sao lưu toàn bộ mã nguồn dữ liệu định kỳ để phòng ngừa sự cố.',
    practicalValue: 'An tâm tuyệt đối vì website luôn mở nhanh và không bao giờ bị mất mát dữ liệu khách hàng.',
    iconName: 'HardDrive',
    mappedCatalogServiceIds: ['09', '11', '12', '13']
  },
  {
    id: 'content-update-support',
    pillarId: 'dong-hanh-cham-soc',
    name: 'Cập Nhật Nội Dung & Hỗ Trợ Sửa Nhanh Qua Zalo',
    badge: 'Linh Hoạt',
    shortDescription: 'Cần đổi số hotline, sửa giá hay thêm ảnh chỉ cần nhắn 1 tin Zalo.',
    description: 'Đội ngũ kỹ thuật viên hỗ trợ tiếp nhận yêu cầu thay đổi qua tin nhắn Zalo và hoàn thành xử lý trong 15-60 phút mà không tính thêm chi phí lặt vặt.',
    practicalValue: 'Bạn chỉ việc tập trung vào chuyên môn làm nghề, mọi việc liên quan đến kỹ thuật đã có người lo.',
    iconName: 'MessageSquare',
    mappedCatalogServiceIds: ['09', '10']
  },
  {
    id: 'google-maps-care',
    pillarId: 'dong-hanh-cham-soc',
    name: 'Chăm Sóc & Bảo Vệ Vị Trí Google Maps Định Kỳ',
    badge: 'Bảo Vệ',
    shortDescription: 'Giữ vững thông tin chính chủ và bổ sung hình ảnh định kỳ.',
    description: 'Theo dõi sự thay đổi trên hồ sơ Google Business Profile, ngăn chặn các hành vi sửa lén thông tin từ đối thủ, cập nhật hình ảnh công trình mới và hỗ trợ phản hồi đánh giá tích cực.',
    practicalValue: 'Bảo vệ tài sản số quan trọng nhất của cơ sở kinh doanh, không lo bị cướp maps hay hạ điểm sao.',
    iconName: 'ShieldAlert',
    mappedCatalogServiceIds: ['22']
  },
  {
    id: 'legal-bct-compliance',
    pillarId: 'dong-hanh-cham-soc',
    name: 'Hỗ Trợ Pháp Lý & Khai Báo Bộ Công Thương',
    badge: 'Tuân Thủ',
    shortDescription: 'Chuẩn hóa bộ 4 trang chính sách và hỗ trợ gắn huy hiệu xanh BCT.',
    description: 'Rà soát thông tin pháp nhân kinh doanh, bổ sung các trang chính sách bắt buộc (Chính sách bảo mật, Điều khoản dịch vụ, Chính sách thanh toán) và hỗ trợ nộp hồ sơ thông báo với Bộ Công Thương.',
    practicalValue: 'Hoàn toàn yên tâm kinh doanh hợp pháp, nâng cao uy tín trong mắt khách hàng và đối tác.',
    iconName: 'FileCheck',
    mappedCatalogServiceIds: ['41a', '41b', '41c', '41d', '41e']
  },
  {
    id: 'monthly-growth-reporting',
    pillarId: 'dong-hanh-cham-soc',
    name: 'Báo Cáo Hiệu Quả & Minh Bạch Số Liệu Hàng Tháng',
    badge: 'Minh Bạch',
    shortDescription: 'Tổng kết số cuộc gọi, tin nhắn Zalo và lượt khách ghé thăm.',
    description: 'Gửi báo cáo định kỳ dễ hiểu: tổng số lượt người tìm thấy cơ sở trên Google, số cuộc gọi đến, số lượt bấm Zalo và đề xuất những điều chỉnh thiết thực cho tháng tiếp theo.',
    practicalValue: 'Nắm chắc hiệu quả đầu tư và biết rõ công việc kinh doanh đang tăng trưởng như thế nào.',
    iconName: 'TrendingUp',
    mappedCatalogServiceIds: ['23', '25']
  }
];

// Helper functions for capabilities
export function getAllCapabilities(): CapabilityItem[] {
  return CAPABILITIES;
}

export function getCapabilitiesByPillar(pillarId: string): CapabilityItem[] {
  return CAPABILITIES.filter((c) => c.pillarId === pillarId);
}

export function getCapabilityById(id: string): CapabilityItem | undefined {
  return CAPABILITIES.find((c) => c.id === id);
}

export function getCapabilitiesForServiceId(serviceId: string): CapabilityItem[] {
  return CAPABILITIES.filter((c) => c.mappedCatalogServiceIds.includes(serviceId));
}
