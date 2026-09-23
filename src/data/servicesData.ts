export interface ServiceItem {
  id: string;
  category: 'website' | 'maps' | 'ads' | 'content' | 'crm';
  categoryLabel: string;
  title: string;
  shortDesc: string;
  priceBadge: string;
  deliverables: string[];
  image: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  label: string;
}

export const serviceCategories: ServiceCategory[] = [
  { id: 'all', label: 'Tất cả dịch vụ (5)' },
  { id: 'website', label: 'Thiết kế website' },
  { id: 'maps', label: 'Google Maps & Local SEO' },
  { id: 'ads', label: 'Google Ads' },
  { id: 'content', label: 'Content & Chăm sóc' },
  { id: 'crm', label: 'CRM & Tự động hóa' },
];

export const servicesData: ServiceItem[] = [
  {
    id: '0',
    category: 'website',
    categoryLabel: 'Thiết kế website',
    title: 'Thiết kế website cho doanh nghiệp nhỏ',
    shortDesc: 'Website rõ ràng, tải nhanh, tối ưu chuyển đổi và tập trung vào việc khách hàng dễ liên hệ.',
    priceBadge: 'Chỉ từ 490.000đ',
    popular: true,
    deliverables: [
      'Bàn giao 100% mã nguồn & tài khoản chính chủ',
      'Tối ưu tốc độ tải trang 4G (Cloudflare CDN < 0.8s)',
      'Nút gọi khẩn cấp & Zalo 1 chạm tiện lợi',
      'Bảo hành hạ tầng kỹ thuật và sao lưu định kỳ',
    ],
    image: '/images/services/website-design.png',
  },
  {
    id: '1',
    category: 'maps',
    categoryLabel: 'Google Maps & Local SEO',
    title: 'Google Maps & Local SEO',
    shortDesc: 'Xác minh hồ sơ, tối ưu thông tin để khách hàng quanh khu vực dễ dàng tìm thấy và ghé tiệm.',
    priceBadge: 'Từ 299.000đ',
    popular: true,
    deliverables: [
      'Xác minh hồ sơ Google Business Profile chính chủ Gmail',
      'Tặng bảng mã QR Mica để bàn xin đánh giá 5 sao',
      'Chuẩn hóa bộ dữ liệu NAP (Tên - Địa chỉ - SĐT)',
      'Báo cáo thứ hạng tìm kiếm bán kính 3km – 5km',
    ],
    image: '/images/services/google-maps.png',
  },
  {
    id: '2',
    category: 'ads',
    categoryLabel: 'Google Ads',
    title: 'Google Ads cho dịch vụ địa phương',
    shortDesc: 'Tiếp cận người đang có nhu cầu thực sự tại khu vực của bạn, ngân sách linh hoạt theo ngày.',
    priceBadge: 'Setup từ 390.000đ',
    deliverables: [
      'Cài đặt tài khoản Ads chính chủ thẻ ngân hàng của bạn',
      'Loại bỏ triệt để từ khóa rác & ngăn chặn click ảo',
      'Cài đặt đo lường chuẩn xác cuộc gọi và tin nhắn Zalo',
      'Minh bạch 100% chi phí, không kê giá hay ăn chênh lệch',
    ],
    image: '/images/services/google-ads.png',
  },
  {
    id: '3',
    category: 'content',
    categoryLabel: 'Content & Chăm sóc',
    title: 'Chăm sóc nội dung & vận hành số',
    shortDesc: 'Cập nhật website, viết bài, chuẩn hóa thông tin định kỳ giúp kênh online luôn sống động.',
    priceBadge: 'Chăm sóc từ 290k/tháng',
    deliverables: [
      'Biên soạn bài viết chuẩn SEO thực tế cho ngành nghề',
      'Tự động sao lưu mã nguồn và cơ sở dữ liệu định kỳ',
      'Giám sát hoạt động hệ thống và máy chủ 24/7',
      'Hỗ trợ cập nhật nội dung qua nhóm Zalo riêng trong 15–30p',
    ],
    image: '/images/services/content-care.png',
  },
  {
    id: '4',
    category: 'crm',
    categoryLabel: 'CRM & Tự động hóa',
    title: 'Hệ thống CRM & Tự động hóa',
    shortDesc: 'Thu thập thông tin khách hàng, đồng bộ tin nhắn và giảm thiểu việc bỏ sót cơ hội bán hàng.',
    priceBadge: 'Từ 390.000đ',
    deliverables: [
      'Bắn thông báo đơn hàng/khách liên hệ về Zalo/Telegram sau 3s',
      'Bảng quản lý CRM Google Sheets tự động, dễ dùng',
      'Phân quyền tài khoản quản trị và nhân viên xử lý số',
      'Video hướng dẫn sử dụng và hỗ trợ kỹ thuật trực tiếp',
    ],
    image: '/images/services/crm-automation.png',
  },
];
