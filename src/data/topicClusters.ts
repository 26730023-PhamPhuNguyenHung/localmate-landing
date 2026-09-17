/**
 * LocalMate Topic Cluster & Internal Linking SSOT
 * Định nghĩa 5 cụm chủ đề cốt lõi và 30 bài viết chuẩn SEO Hub & Spoke
 * Đảm bảo 100% chống Orphan Pages (Trang mồ côi) và Spider Trap
 */

export interface ClusterArticle {
  id: number;
  slug: string;
  title: string;
  shortTitle?: string;
  path: string;
  badge: string;
  readingTime: string;
  excerpt: string;
  isPillar?: boolean;
}

export interface CommercialTarget {
  label: string;
  path: string;
  badge: string;
  description: string;
}

export interface TopicCluster {
  id: string;
  number: number;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  color: string;
  pillar: ClusterArticle;
  supporting: ClusterArticle[];
  commercialTarget: CommercialTarget;
  relatedClusters: string[];
}

export const TOPIC_CLUSTERS: Record<string, TopicCluster> = {
  'website-doanh-nghiep': {
    id: 'website-doanh-nghiep',
    number: 1,
    name: 'Cụm 1: Website Doanh Nghiệp & Chuyển Đổi Thực Chiến',
    shortName: 'Website Doanh Nghiệp',
    headline: 'Xây dựng văn phòng số chính chủ 24/7 và biến người truy cập thành cuộc gọi',
    description: 'Cẩm nang toàn diện giúp hộ kinh doanh và doanh nghiệp nhỏ hiểu đúng bản chất website, dự toán chi phí minh bạch, chuẩn bị tư liệu và khắc phục dứt điểm tình trạng web vắng khách.',
    color: '#0d7647',
    pillar: {
      id: 1,
      slug: 'website-doanh-nghiep-la-gi',
      title: 'Website Doanh Nghiệp Là Gì? Doanh Nghiệp Nhỏ Có Cần Web Không?',
      shortTitle: 'Bản chất Website Doanh Nghiệp',
      path: '/kien-thuc/website-doanh-nghiep-la-gi',
      badge: 'Nền Tảng Cốt Lõi',
      readingTime: '6 phút',
      excerpt: 'Phân tích bản chất văn phòng số 24/7, so sánh 8 tiêu chí với mạng xã hội và khung 8 trường hợp xác định khi nào nên đầu tư làm web.',
      isPillar: true
    },
    supporting: [
      {
        id: 2,
        slug: 'lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi',
        title: 'Làm website cho doanh nghiệp nhỏ cần chuẩn bị những gì? (Checklist thực chiến)',
        shortTitle: 'Checklist Chuẩn Bị Làm Web',
        path: '/kien-thuc/lam-website-cho-doanh-nghiep-nho-can-chuan-bi-nhung-gi',
        badge: 'Chuẩn Bị',
        readingTime: '7 phút',
        excerpt: 'Checklist 5 nhóm tài liệu cần chuẩn bị trước khi thuê thiết kế: tên miền, hình ảnh xưởng thật, bảng giá sàn và quy trình tiếp nhận cuộc gọi.'
      },
      {
        id: 3,
        slug: 'chi-phi-lam-website-doanh-nghiep-nho-2026',
        title: 'Chi phí làm website doanh nghiệp nhỏ năm 2026 gồm những gì? (Bóc tách minh bạch)',
        shortTitle: 'Bóc Tách Chi Phí Làm Web',
        path: '/kien-thuc/chi-phi-lam-website-doanh-nghiep-nho-2026',
        badge: 'Dự Toán Chi Phí',
        readingTime: '6 phút',
        excerpt: 'Bóc tách chi phí cố định (tên miền, hosting, SSL) và chi phí thiết kế ban đầu; cảnh báo bẫy lừa đảo làm web 500k bị giữ tên miền.'
      },
      {
        id: 4,
        slug: 'website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao',
        title: 'Website giới thiệu công ty nên có những trang nào để chốt khách hiệu quả?',
        shortTitle: 'Cấu Trúc Trang Tối Ưu',
        path: '/kien-thuc/website-gioi-thieu-cong-ty-nen-co-nhung-trang-nao',
        badge: 'Kiến Trúc Web',
        readingTime: '6 phút',
        excerpt: 'Sơ đồ 5 trang cốt lõi bắt buộc phải có để xây dựng uy tín pháp lý, công khai giá cả và kích thích khách bấm gọi điện thoại.'
      },
      {
        id: 5,
        slug: 'website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao',
        title: 'Website Bán Hàng Và Website Giới Thiệu Khác Nhau Thế Nào? Nên Chọn Loại Nào?',
        shortTitle: 'Web Bán Hàng vs Web Giới Thiệu',
        path: '/kien-thuc/website-ban-hang-va-website-gioi-thieu-khac-nhau-nhu-the-nao',
        badge: 'Lựa Chọn Mô Hình',
        readingTime: '7 phút',
        excerpt: 'Bảng so sánh chi tiết tính năng giỏ hàng phức tạp với web dịch vụ tinh gọn; tránh lãng phí hàng chục triệu đồng vào tính năng không dùng.'
      },
      {
        id: 6,
        slug: '10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach',
        title: '10 Lỗi Phổ Biến Khiến Website Doanh Nghiệp Không Có Khách Gọi Điện',
        shortTitle: '10 Lỗi Web Không Có Khách',
        path: '/kien-thuc/10-loi-pho-bien-khien-website-doanh-nghiep-khong-co-khach',
        badge: 'Khắc Phục Lỗi',
        readingTime: '7 phút',
        excerpt: 'Chỉ rõ 10 điểm nghẽn trải nghiệm di động: tải chậm trên 3 giây, giấu giá, thiếu nút gọi nổi và giải pháp xử lý dứt điểm.'
      }
    ],
    commercialTarget: {
      label: 'Dịch Vụ Thiết Kế Website Tinh Gọn',
      path: '/thiet-ke-website',
      badge: 'Gói Web Chuẩn Chuyển Đổi',
      description: 'Khởi tạo website tốc độ cao dưới 1 giây, tối ưu 100% di động, bàn giao tên miền chính chủ và bảo hành trọn đời.'
    },
    relatedClusters: ['google-maps-local-pack', 'local-seo-location-pages']
  },

  'google-maps-local-pack': {
    id: 'google-maps-local-pack',
    number: 2,
    name: 'Cụm 2: Google Maps & Local Pack (Google Business Profile)',
    shortName: 'Google Maps & Local Pack',
    headline: 'Chiếm lĩnh Top 3 Google Maps và đón trọn khách hàng tìm kiếm quanh khu vực',
    description: 'Bộ bí kíp thực chiến thiết lập hồ sơ Google Business Profile, xác minh video thực địa thành công 100%, tích lũy đánh giá 5 sao chuẩn và mở khóa kháng nghị tài khoản bị đình chỉ.',
    color: '#0d7647',
    pillar: {
      id: 7,
      slug: 'google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z',
      title: 'Google Maps cho doanh nghiệp: Hướng dẫn từ A đến Z cho hộ kinh doanh',
      shortTitle: 'Cẩm Nang Google Maps A-Z',
      path: '/kien-thuc/google-maps-cho-doanh-nghiep-huong-dan-tu-a-den-z',
      badge: 'Nền Tảng Cốt Lõi',
      readingTime: '8 phút',
      excerpt: 'Hướng dẫn tổng quan từ đăng ký, cơ chế xếp hạng Local Pack 3 vị trí đầu tiên và lộ trình khai thác khách hàng miễn phí từ bản đồ.',
      isPillar: true
    },
    supporting: [
      {
        id: 8,
        slug: 'cach-dua-doanh-nghiep-len-google-maps',
        title: 'Cách Đưa Doanh Nghiệp Lên Google Maps: Xác Minh Video Thực Địa 2026',
        shortTitle: 'Xác Minh Video Thực Địa',
        path: '/kien-thuc/cach-dua-doanh-nghiep-len-google-maps',
        badge: 'Đăng Ký & Xác Minh',
        readingTime: '7 phút',
        excerpt: 'Kịch bản quay video thực địa 1 take liền mạch: biển hiệu, biển số nhà, công cụ làm việc và giấy phép kinh doanh để duyệt ngay lần đầu.'
      },
      {
        id: 9,
        slug: 'cach-toi-uu-google-business-profile-de-khach-de-tim-thay',
        title: 'Cách Tối Ưu Google Business Profile Để Khách Quanh Đây Dễ Tìm Thấy',
        shortTitle: 'Tối Ưu Hồ Sơ Maps Lên Top',
        path: '/kien-thuc/cach-toi-uu-google-business-profile-de-khach-de-tim-thay',
        badge: 'Tối Ưu Hiển Thị',
        readingTime: '7 phút',
        excerpt: 'Tối ưu danh mục ngành nghề chính xác, cài đặt bán kính phục vụ, cập nhật giờ làm việc và hình ảnh sản phẩm định kỳ.'
      },
      {
        id: 10,
        slug: 'vi-sao-doanh-nghiep-khong-xuat-hien-tren-google-maps',
        title: 'Vì sao doanh nghiệp không xuất hiện trên Google Maps? Cách khắc phục nhanh',
        shortTitle: 'Sửa Lỗi Không Hiện Trên Maps',
        path: '/kien-thuc/vi-sao-doanh-nghiep-khong-xuat-hien-tren-google-maps',
        badge: 'Chẩn Đoán Lỗi',
        readingTime: '6 phút',
        excerpt: 'Bắt bệnh 6 lý do khiến tiệm bị ẩn ghim: trùng lặp địa chỉ, vi phạm tên thương hiệu, thiếu tín hiệu hoạt động hoặc bị cắm cờ sai lệch.'
      },
      {
        id: 11,
        slug: 'cach-tang-danh-gia-google-maps-dung-cach',
        title: 'Cách tăng đánh giá Google Maps đúng cách cho hộ kinh doanh',
        shortTitle: 'Tăng Đánh Giá 5 Sao Chuẩn',
        path: '/kien-thuc/cach-tang-danh-gia-google-maps-dung-cach',
        badge: 'Uy Tín & Đánh Giá',
        readingTime: '6 phút',
        excerpt: 'Cách tạo mã QR xin review trực tiếp tại quầy, quy trình xin đánh giá tự nhiên từ khách thật và cách phản hồi review tiêu cực lịch sự.'
      },
      {
        id: 12,
        slug: 'google-maps-bi-dinh-chi-nguyen-nhan-va-cach-xu-ly',
        title: 'Google Maps bị đình chỉ: Nguyên nhân cốt lõi và quy trình kháng nghị khôi phục',
        shortTitle: 'Kháng Nghị Maps Bị Đình Chỉ',
        path: '/kien-thuc/google-maps-bi-dinh-chi-nguyen-nhan-va-cach-xu-ly',
        badge: 'Kháng Nghị Cấp Cứu',
        readingTime: '8 phút',
        excerpt: 'Quy trình kháng nghị 3 bước với Google Support: chuẩn bị bộ hồ sơ pháp lý, ảnh chụp cơ sở thực tế và mẫu thư kháng nghị chuẩn.'
      }
    ],
    commercialTarget: {
      label: 'Dịch Vụ Tối Ưu Google Maps & Local SEO',
      path: '/google-maps-local-seo',
      badge: 'Khởi Tạo & Kháng Nghị Maps',
      description: 'Xác minh hồ sơ Maps nhanh chóng, tối ưu chuẩn SEO địa phương và hỗ trợ cứu tài khoản Maps bị khóa hoặc mất ghim.'
    },
    relatedClusters: ['website-doanh-nghiep', 'local-seo-location-pages']
  },

  'local-seo-location-pages': {
    id: 'local-seo-location-pages',
    number: 3,
    name: 'Cụm 3: Local SEO & Hệ Thống Location Pages Đa Khu Vực',
    shortName: 'Local SEO & Location Pages',
    headline: 'Thống trị kết quả tìm kiếm địa phương và đề xuất AI quanh bán kính kinh doanh',
    description: 'Chiến lược tối ưu hóa tìm kiếm địa phương, xây dựng mạng lưới trang vệ tinh đa quận huyện, chuẩn hóa thông tin cơ sở và củng cố độ uy tín thương hiệu trên Internet.',
    color: '#0d7647',
    pillar: {
      id: 13,
      slug: 'local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam',
      title: 'Local SEO là gì? Vì sao doanh nghiệp địa phương nên tập trung làm Local SEO?',
      shortTitle: 'Bản Chất Local SEO',
      path: '/kien-thuc/local-seo-la-gi-vi-sao-doanh-nghiep-dia-phuong-nen-lam',
      badge: 'Nền Tảng Cốt Lõi',
      readingTime: '7 phút',
      excerpt: 'Giải mã lý do 78% tìm kiếm địa phương trên di động dẫn đến quyết định mua hàng trong 24h và cách làm SEO địa phương chi phí thấp.',
      isPillar: true
    },
    supporting: [
      {
        id: 14,
        slug: 'seo-google-maps-va-seo-website-khac-nhau-nhu-the-nao',
        title: 'SEO Google Maps và SEO Website khác nhau thế nào? Nên ưu tiên làm cái nào?',
        shortTitle: 'SEO Maps vs SEO Website',
        path: '/kien-thuc/seo-google-maps-va-seo-website-khac-nhau-nhu-the-nao',
        badge: 'Chiến Lược Phối Hợp',
        readingTime: '7 phút',
        excerpt: 'Phân tích cơ chế cộng hưởng giữa Google Maps và Website chính chủ; ma trận ưu tiên triển khai theo ngành nghề và thời gian.'
      },
      {
        id: 15,
        slug: 'cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong',
        title: 'Cách SEO doanh nghiệp lên Google tại khu vực địa phương: Cẩm nang Location Pages',
        shortTitle: 'Cẩm Nang Location Pages',
        path: '/kien-thuc/cach-seo-doanh-nghiep-len-google-tai-khu-vuc-dia-phuong',
        badge: 'Kỹ Thuật SEO Vệ Tinh',
        readingTime: '8 phút',
        excerpt: 'Quy trình tạo trang dịch vụ theo từng quận/huyện mà không dính lỗi trùng lặp nội dung (Doorway Page Penalty) từ Google.'
      },
      {
        id: 16,
        slug: 'entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho',
        title: 'Entity SEO Là Gì? Doanh Nghiệp Nhỏ Có Cần Mua Gói Entity Không?',
        shortTitle: 'Thực Hư Entity SEO',
        path: '/kien-thuc/entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho',
        badge: 'Thực Hư Gói Dịch Vụ',
        readingTime: '7 phút',
        excerpt: 'Làm rõ bản chất thực thể số (Entity) theo bằng sáng chế của Google; vạch trần bẫy bán gói Entity rác hàng chục triệu đồng.'
      },
      {
        id: 17,
        slug: 'citation-trong-local-seo-la-gi',
        title: 'Citation trong Local SEO là gì và cách xây dựng chuẩn xác tại Việt Nam',
        shortTitle: 'Xây Dựng Citation Chuẩn NAP',
        path: '/kien-thuc/citation-trong-local-seo-la-gi',
        badge: 'Đồng Nhất Dữ Liệu',
        readingTime: '6 phút',
        excerpt: 'Tầm quan trọng của nguyên tắc NAP (Name - Address - Phone) trên các danh bạ doanh nghiệp, trang vàng và mạng xã hội tại Việt Nam.'
      },
      {
        id: 18,
        slug: 'checklist-local-seo-cho-doanh-nghiep-dia-phuong',
        title: 'Checklist Local SEO 2026: 20 việc chủ tiệm tự làm để lên top tìm kiếm',
        shortTitle: 'Checklist 20 Việc Local SEO',
        path: '/kien-thuc/checklist-local-seo-cho-doanh-nghiep-dia-phuong',
        badge: 'Checklist Thực Hành',
        readingTime: '8 phút',
        excerpt: '20 đầu việc chi tiết tự thực hiện chia theo 3 giai đoạn: Chuẩn hóa On-page, tối ưu Google Maps và thu thập tín hiệu uy tín xã hội.'
      }
    ],
    commercialTarget: {
      label: 'Giải Pháp Tối Ưu Local SEO & AI Search (GEO)',
      path: '/dich-vu/geo',
      badge: 'Thống Trị Tìm Kiếm Khu Vực',
      description: 'Đưa thương hiệu xuất hiện đồng thời trên Top Google Tìm kiếm, Google Maps và các đề xuất thông minh của AI Search (ChatGPT, Gemini).'
    },
    relatedClusters: ['google-maps-local-pack', 'google-ads-dia-phuong']
  },

  'google-ads-dia-phuong': {
    id: 'google-ads-dia-phuong',
    number: 4,
    name: 'Cụm 4: Google Ads Tìm Kiếm Cho Doanh Nghiệp Địa Phương',
    shortName: 'Google Ads Địa Phương',
    headline: 'Đón đầu khách hàng đang gặp sự cố khẩn cấp và kiểm soát chặt chẽ từng đồng ngân sách',
    description: 'Cẩm nang thực chiến cài đặt chiến dịch Google Search Ads tinh gọn, bí quyết định giá thầu CPC thấp, chống click tặc và xây dựng Landing Page chốt cuộc gọi nhanh chóng.',
    color: '#0d7647',
    pillar: {
      id: 19,
      slug: 'google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau',
      title: 'Google Ads Cho Doanh Nghiệp Nhỏ: Bắt Đầu Từ Đâu Để Không Bị Đốt Tiền Oan?',
      shortTitle: 'Bắt Đầu Google Ads Không Đốt Tiền',
      path: '/kien-thuc/google-ads-cho-doanh-nghiep-nho-bat-dau-tu-dau',
      badge: 'Nền Tảng Cốt Lõi',
      readingTime: '7 phút',
      excerpt: 'Tư duy chạy quảng cáo tìm kiếm cho dịch vụ địa phương: chọn từ khóa nhu cầu cao, khoanh vùng bán kính và tránh các bẫy tự động của Google.',
      isPillar: true
    },
    supporting: [
      {
        id: 20,
        slug: 'google-search-ads-hoat-dong-nhu-the-nao',
        title: 'Google Search Ads hoạt động như thế nào? Cơ chế đấu giá và cách giảm tiền click',
        shortTitle: 'Cơ Chế Đấu Giá & Hạ CPC',
        path: '/kien-thuc/google-search-ads-hoat-dong-nhu-the-nao',
        badge: 'Cơ Chế Đấu Giá',
        readingTime: '7 phút',
        excerpt: 'Hiểu rõ công thức Ad Rank = Điểm chất lượng x Giá thầu tối đa; cách nâng điểm chất lượng lên 9-10 để giảm 30-50% chi phí mỗi click.'
      },
      {
        id: 21,
        slug: 'chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly',
        title: 'Chạy Google Ads bao nhiêu tiền một ngày là hợp lý cho doanh nghiệp nhỏ?',
        shortTitle: 'Ngân Sách Ngày Hợp Lý',
        path: '/kien-thuc/chay-google-ads-bao-nhieu-tien-mot-ngay-la-hop-ly',
        badge: 'Quản Trị Ngân Sách',
        readingTime: '6 phút',
        excerpt: 'Công thức tính ngân sách thử nghiệm từ 50.000đ - 150.000đ/ngày, cách đo lường giá trị cuộc gọi và điểm hòa vốn cho từng ca dịch vụ.'
      },
      {
        id: 22,
        slug: 'vi-sao-chay-google-ads-co-click-nhung-khong-co-khach',
        title: 'Vì sao chạy Google Ads có click nhưng không có khách? Cách xử lý dứt điểm',
        shortTitle: 'Khắc Phục Click Ảo - Mất Khách',
        path: '/kien-thuc/vi-sao-chay-google-ads-co-click-nhung-khong-co-khach',
        badge: 'Chẩn Đoán Điểm Nghẽn',
        readingTime: '7 phút',
        excerpt: 'Bắt bệnh từ khóa quá rộng, phủ định từ khóa rác, thời gian tải trang đích quá chậm hoặc số điện thoại không bấm gọi được.'
      },
      {
        id: 23,
        slug: 'landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao',
        title: 'Landing page chạy Google Ads nên thiết kế thế nào để khách bấm gọi ngay?',
        shortTitle: 'Thiết Kế Landing Page Chạy Ads',
        path: '/kien-thuc/landing-page-chay-google-ads-nen-thiet-ke-nhu-the-nao',
        badge: 'Tối Ưu Chuyển Đổi',
        readingTime: '7 phút',
        excerpt: 'Bố cục 1 trang tinh gọn tải dưới 1 giây, thanh nút gọi khẩn cấp ghim đáy màn hình và thông điệp cam kết phục vụ sau 15-30 phút.'
      },
      {
        id: 24,
        slug: 'google-ads-hay-facebook-ads-phu-hop-hon-voi-doanh-nghiep-dia-phuong',
        title: 'Google Ads hay Facebook Ads phù hợp hơn với doanh nghiệp địa phương?',
        shortTitle: 'So Sánh Google Ads vs Facebook Ads',
        path: '/kien-thuc/google-ads-hay-facebook-ads-phu-hop-hon-voi-doanh-nghiep-dia-phuong',
        badge: 'Lựa Chọn Kênh',
        readingTime: '6 phút',
        excerpt: 'So sánh nhu cầu tìm kiếm chủ động với lướt mạng xã hội bị động; bảng phân loại ngành nghề nào nên chọn kênh nào.'
      }
    ],
    commercialTarget: {
      label: 'Gói Landing Page Đơn 490k Chuẩn Google Ads',
      path: '/landing-490k',
      badge: 'Tối Ưu Chuyển Đổi Cuộc Gọi',
      description: 'Trang đích siêu nhẹ tải dưới 1 giây, tích hợp nút gọi một chạm và mã theo dõi chuyển đổi Google Ads chính xác.'
    },
    relatedClusters: ['website-doanh-nghiep', 'crm-van-hanh-chuyen-doi-so']
  },

  'crm-van-hanh-chuyen-doi-so': {
    id: 'crm-van-hanh-chuyen-doi-so',
    number: 5,
    name: 'Cụm 5: CRM, Tự Động Hóa Vận Hành & Chuyển Đổi Số',
    shortName: 'CRM & Chuyển Đổi Số',
    headline: 'Quản trị khách hàng tập trung trên 1 điện thoại và giải phóng 70% thời gian sự vụ',
    description: 'Lộ trình chuyển đổi số thực tế từ con số 0 cho chủ tiệm nhỏ: lọc tính năng CRM tinh gọn, tự động hóa tin nhắn nhắc lịch, gom kênh Facebook/Zalo/Web và viết content mộc mạc.',
    color: '#0d7647',
    pillar: {
      id: 25,
      slug: 'crm-la-gi-doanh-nghiep-nho-co-can-crm-khong',
      title: 'CRM là gì? Doanh nghiệp nhỏ có thực sự cần mua phần mềm CRM đắt tiền?',
      shortTitle: 'Bản Chất CRM Doanh Nghiệp Nhỏ',
      path: '/kien-thuc/crm-la-gi-doanh-nghiep-nho-co-can-crm-khong',
      badge: 'Nền Tảng Cốt Lõi',
      readingTime: '7 phút',
      excerpt: 'Bóc trần sự lãng phí khi mua phần mềm quản lý hàng chục triệu; định nghĩa CRM tối giản là sổ tay số giúp chăm sóc và giữ chân khách quen.',
      isPillar: true
    },
    supporting: [
      {
        id: 26,
        slug: 'crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao',
        title: 'CRM đơn giản cho doanh nghiệp nhỏ nên có những tính năng nào? (Bảng lọc thực chiến)',
        shortTitle: 'Bộ Lọc Tính Năng CRM Tinh Gọn',
        path: '/kien-thuc/crm-don-gian-cho-doanh-nghiep-nho-nen-co-nhung-tinh-nang-nao',
        badge: 'Lọc Tính Năng',
        readingTime: '6 phút',
        excerpt: '4 tính năng sống còn: Lưu lịch sử cuộc gọi/Zalo, gắn thẻ phân loại khách, hẹn giờ nhắc bảo dưỡng định kỳ và tra cứu trên di động.'
      },
      {
        id: 27,
        slug: 'automation-cho-doanh-nghiep-nho-7-viec-nen-tu-dong-hoa',
        title: 'Automation cho doanh nghiệp nhỏ: 7 việc thủ công nên tự động hóa ngay (Chi phí 0đ)',
        shortTitle: '7 Việc Tự Động Hóa 0đ',
        path: '/kien-thuc/automation-cho-doanh-nghiep-nho-7-viec-nen-tu-dong-hoa',
        badge: 'Tự Động Hóa 0đ',
        readingTime: '7 phút',
        excerpt: 'Tự động gửi tin nhắn xác nhận lịch hẹn, nhắc khách bảo hành sau 6 tháng, đồng bộ số điện thoại vào Google Sheets bằng công cụ miễn phí.'
      },
      {
        id: 28,
        slug: 'cach-quan-ly-khach-hang-tu-facebook-zalo-website-tren-mot-he-thong',
        title: 'Cách quản lý khách hàng từ Facebook, Zalo và Website tập trung trên một điện thoại',
        shortTitle: 'Quản Lý Gom Kênh Đa Nền Tảng',
        path: '/kien-thuc/cach-quan-ly-khach-hang-tu-facebook-zalo-website-tren-mot-he-thong',
        badge: 'Gom Kênh Đa Nền Tảng',
        readingTime: '7 phút',
        excerpt: 'Giải pháp kết nối tin nhắn và cuộc gọi từ mọi nguồn đổ về một hộp thư duy nhất, không bỏ sót khách và phân công thợ dễ dàng.'
      },
      {
        id: 29,
        slug: 'content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau',
        title: 'Content marketing cho doanh nghiệp địa phương: Bắt đầu từ đâu mà không cần viết văn hoa?',
        shortTitle: 'Content Marketing Mộc Mạc',
        path: '/kien-thuc/content-marketing-cho-doanh-nghiep-dia-phuong-bat-dau-tu-dau',
        badge: 'Nội Dung Thực Chiến',
        readingTime: '7 phút',
        excerpt: 'Công thức chụp ảnh thực tế tại công trình kèm lời giải thích mộc mạc; 5 chủ đề viết bài dễ làm giúp khách tin tưởng tay nghề.'
      },
      {
        id: 30,
        slug: 'chuyen-doi-so-cho-doanh-nghiep-nho-5-viec-don-gian',
        title: 'Chuyển đổi số cho doanh nghiệp nhỏ: Lộ trình 5 bước thực tế từ 0 đến có khách',
        shortTitle: 'Lộ Trình Chuyển Đổi Số 5 Bước',
        path: '/kien-thuc/chuyen-doi-so-cho-doanh-nghiep-nho-5-viec-don-gian',
        badge: 'Lộ Trình Số Hóa',
        readingTime: '8 phút',
        excerpt: '5 bước đi thực tế không tốn kém: Chuẩn hóa ghim Google Maps, lập trang web tinh gọn, quản lý Zalo tập trung và thanh toán quét mã QR.'
      }
    ],
    commercialTarget: {
      label: 'Đăng Ký Tư Vấn Giải Pháp Tinh Gọn Trọn Gói',
      path: '/lien-he',
      badge: 'Đồng Hành Kỹ Thuật Số',
      description: 'Đội ngũ kỹ thuật LocalMate hỗ trợ khảo sát mô hình thực tế, tư vấn thiết kế và kết nối các kênh số hoàn toàn miễn phí.'
    },
    relatedClusters: ['website-doanh-nghiep', 'google-ads-dia-phuong']
  }
};

/**
 * Tìm cụm chủ đề theo ID bài viết (1-30)
 */
export function getClusterByPostId(postId: number): TopicCluster | null {
  for (const clusterKey of Object.keys(TOPIC_CLUSTERS)) {
    const cluster = TOPIC_CLUSTERS[clusterKey];
    if (cluster.pillar.id === postId) {
      return cluster;
    }
    if (cluster.supporting.some(art => art.id === postId)) {
      return cluster;
    }
  }
  return null;
}

/**
 * Tìm cụm chủ đề theo Slug bài viết
 */
export function getClusterBySlug(slug: string): TopicCluster | null {
  for (const clusterKey of Object.keys(TOPIC_CLUSTERS)) {
    const cluster = TOPIC_CLUSTERS[clusterKey];
    if (cluster.pillar.slug === slug) {
      return cluster;
    }
    if (cluster.supporting.some(art => art.slug === slug)) {
      return cluster;
    }
  }
  return null;
}

/**
 * Lấy danh sách toàn bộ 5 Cụm
 */
export function getAllClusters(): TopicCluster[] {
  return Object.values(TOPIC_CLUSTERS);
}
