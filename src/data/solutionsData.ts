/**
 * SOLUTIONS DATA & TAXONOMY MODEL
 * Single Source of Truth (SSOT) cho 5 Trụ Cột Giải Pháp (Solution Pillars) của LocalMate.
 * 
 * 5 Trụ Cột Giải Pháp Cốt Lõi:
 * 1. xay-nen-tang-so     (/giai-phap/xay-nen-tang-so)     : Xây dựng nền tảng số
 * 2. duoc-tim-thay       (/giai-phap/duoc-tim-thay)       : Được khách hàng tìm thấy
 * 3. thu-hut-khach-hang  (/giai-phap/thu-hut-khach-hang)  : Thu hút khách hàng & Tìm lead
 * 4. van-hanh-tu-dong-hoa (/giai-phap/van-hanh-tu-dong-hoa): Quản lý & Tự động hóa vận hành
 * 5. dong-hanh-cham-soc  (/giai-phap/dong-hanh-cham-soc)  : Chăm sóc & Đồng hành kỹ thuật
 */

export interface SolutionOutcome {
  id?: string;
  metric: string;
  title: string;
  label: string;
  description: string;
  highlight?: string;
}

export interface SolutionCapability {
  id: string;
  name: string;
  techName: string;
  tag: string;
  badge?: string;
  iconName?: string;
  shortDescription: string;
  description: string;
  plainLanguageMeaning: string;
  practicalBenefit: string;
  mappedCatalogServiceIds: string[];
  detailSlug?: string;
}

export interface SolutionDeliverable {
  id?: string;
  title: string;
  description: string;
  items: string[];
  ownershipTag: string;
}

export interface SolutionProcessStep {
  step: string;
  title: string;
  description: string;
  duration?: string;
}

export interface SolutionUseCase {
  id?: string;
  targetCustomer: string;
  industryName: string;
  iconName?: string;
  scenario: string;
  keySetup: string[];
  result: string;
  resultHighlight: string;
}

export interface SolutionOffer {
  id: string;
  name: string;
  priceDisplay: string;
  numericPrice?: number;
  setupPrice?: string;
  maintenancePrice?: string;
  targetFit?: string;
  features?: string[];
  unit?: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  highlights: string[];
  ctaText?: string;
}

export type SolutionPricingPackage = SolutionOffer;

export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface SolutionWorkflowStep {
  step: string;
  title: string;
  duration: string;
  localmateDoes: string;
  clientDoes: string;
  outcome: string;
}

export interface SolutionProblemItem {
  problem: string;
  detail: string;
  iconName?: string;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  demandTitle: string;
  subtitle: string;
  badge: string;
  painPointPill: string;
  iconName: string;
  customerProblem: string;
  promise: string;
  summary: string;
  heroDescription: string;
  targetAudience: string;
  breadcrumbs: { label: string; href?: string }[];
  meta: {
    title: string;
    description: string;
  };

  // 10 Thành phần bắt buộc theo cấu trúc giải pháp
  outcomes: SolutionOutcome[];
  problems: SolutionProblemItem[];
  commonProblems: string[];
  whatWeDo: string[];
  workflow: SolutionWorkflowStep[];
  capabilities: SolutionCapability[];
  deliverables: SolutionDeliverable[];
  process: SolutionProcessStep[];
  processSteps: SolutionProcessStep[];
  useCases: SolutionUseCase[];
  pricing: SolutionOffer[];
  pricingPackages: SolutionOffer[];
  faqs: SolutionFAQ[];
  relatedSolutionSlugs: string[];
}

export const SOLUTIONS: Solution[] = [
  // =========================================================================
  // TRỤ CỘT 1: XÂY DỰNG NỀN TẢNG SỐ (xay-nen-tang-so)
  // =========================================================================
  {
    id: 'xay-nen-tang-so',
    slug: '/giai-phap/xay-nen-tang-so',
    title: 'Xây dựng nền tảng số',
    demandTitle: 'Cần có một website bán hàng tử tế, tải nhanh trên điện thoại',
    subtitle: 'Biến thông tin rời rạc thành trang web bán hàng tinh gọn, tải siêu tốc trên điện thoại',
    badge: 'Trụ Cột 01 • Nền Tảng Khởi Đầu',
    painPointPill: 'Gửi Zalo 20 ảnh rời rạc ➔ Khách trôi tin, ngại hỏi giá',
    iconName: 'Layout',
    customerProblem:
      'Doanh nghiệp chưa có nền tảng số tử tế, gửi báo giá hay giới thiệu cho khách qua Zalo chỉ có vài tấm ảnh trôi tin, thông tin rời rạc khiến khách hàng ngần ngại và thiếu tin tưởng.',
    promise: 'Xây dựng nền tảng số rõ ràng để khách hàng tìm thấy, hiểu và tin tưởng bạn.',
    summary:
      'LocalMate xây dựng cho bạn một trang web bán hàng (Sales Hub) tinh gọn, tải siêu tốc trên điện thoại, hiển thị đầy đủ hình ảnh công trình thật, bảng giá minh bạch và nút liên hệ bấm là gọi ngay.',
    heroDescription:
      'Giải pháp xây dựng website và Sales Hub chuẩn di động cho thợ, xưởng và hộ kinh doanh. Tải trang dưới 1.2s, bàn giao chính chủ 100% và bảo hành kỹ thuật 5 năm.',
    targetAudience: 'Thợ thi công, xưởng sản xuất, quán ăn, spa và cơ sở dịch vụ gia đình',
    breadcrumbs: [
      { label: 'Trang chủ', href: '/' },
      { label: 'Giải pháp', href: '/giai-phap' },
      { label: 'Xây dựng nền tảng số', href: '/giai-phap/xay-nen-tang-so' }
    ],
    meta: {
      title: 'Giải Pháp Xây Dựng Nền Tảng Số & Website Bán Hàng Tinh Gọn | LocalMate',
      description: 'Xây dựng nền tảng số rõ ràng để khách hàng tìm thấy, hiểu và tin tưởng bạn. Website chuẩn di động mở dưới 1.2s, bàn giao chính chủ.'
    },
    outcomes: [
      {
        id: 'out-1-speed',
        metric: '< 1.2s',
        title: 'Mở trang tức thì trên di động',
        label: 'Mở trang tức thì trên mạng 3G/4G',
        description: 'Khách hàng bấm vào link là xem được ngay trong 1.2 giây, kể cả khi dùng mạng di động ngoài đường.',
        highlight: 'Chống mất khách do tải chậm'
      },
      {
        id: 'out-1-ownership',
        metric: '100%',
        title: 'Sở hữu tài nguyên chính chủ',
        label: 'Bàn giao 100% tài khoản chính chủ',
        description: 'Bàn giao đầy đủ tên miền riêng .vn/.com, hosting và tài khoản quản trị cho chính bạn nắm giữ.',
        highlight: 'Không bị khóa chân bởi bên thứ 3'
      },
      {
        id: 'out-1-trust',
        metric: '3 - 5x',
        title: 'Tăng độ tin tưởng khi báo giá',
        label: 'Tăng tỷ lệ khách phản hồi báo giá',
        description: 'Khách hàng xem bảng giá chuẩn và hình ảnh thi công sắc nét thay vì mớ tin nhắn hình ảnh rời rạc.',
        highlight: 'Dễ chốt lịch hẹn đo đạc'
      }
    ],
    problems: [
      {
        problem: 'Chưa có website hoặc website cũ bị vỡ trên điện thoại',
        detail: 'Website cũ mở trên iPhone hay Android bị tràn mép, chữ bé tí, khách lướt 3 giây là thoát ra tìm bên khác.',
        iconName: 'Smartphone'
      },
      {
        problem: 'Tư vấn qua Zalo bằng cách copy-paste 20 tấm ảnh',
        detail: 'Ảnh chụp lộn xộn trong máy gửi đi trôi tin rất nhanh, khách không nắm được quy trình và bảng giá cụ thể.',
        iconName: 'FileText'
      },
      {
        problem: 'Bảng giá mập mờ khiến khách hàng e dè',
        detail: 'Không có bảng giá dịch vụ công khai làm khách nghi ngại bị chặt chém hoặc phát sinh thêm chi phí.',
        iconName: 'AlertCircle'
      }
    ],
    commonProblems: [
      'Chưa có website hoặc website cũ làm từ lâu, mở trên điện thoại bị tràn viền, chữ quá bé không đọc được.',
      'Khi khách hỏi tư vấn trên Zalo, phải copy-paste mớ ảnh lộn xộn trong máy gửi đi, khách xem lướt qua rồi im lặng.',
      'Không có bảng giá hoặc danh mục dịch vụ công khai, khách hàng sợ bị chặt chém hoặc báo giá mập mờ.',
      'Website trước đây thuê ngoài giá cao nhưng chậm chạp, hay bị lỗi, muốn sửa đổi số điện thoại cũng phải chờ cả tuần.'
    ],
    whatWeDo: [
      'Thiết kế trang bán hàng (Sales Hub) tập trung chuyển đổi, tối ưu riêng cho màn hình điện thoại của khách hàng.',
      'Chuẩn hóa bảng giá dịch vụ, bộ ảnh sản phẩm/công trình thực tế và hồ sơ năng lực thành các khối rõ ràng, dễ hiểu.',
      'Tích hợp sẵn các nút hành động cốt lõi: Nút Gọi Hotline nổi bật, Chat Zalo 1 chạm, và Form yêu cầu báo giá.',
      'Cài đặt tên miền riêng (.vn/.com), kích hoạt chứng chỉ bảo mật HTTPS và tối ưu máy chủ tốc độ cao mở tức thì.'
    ],
    workflow: [
      {
        step: '01',
        title: 'Tiếp nhận thông tin cơ bản & Bảng giá',
        duration: '1 buổi làm việc',
        localmateDoes: 'Gửi bảng câu hỏi ngắn 5 câu, tiếp nhận ảnh xưởng/công trình và số điện thoại nhận khách.',
        clientDoes: 'Chỉ cần gửi bảng giá đang dùng và vài tấm ảnh chụp công trình thực tế qua Zalo.',
        outcome: 'Khung nội dung Sales Hub hoàn chỉnh phù hợp với ngành nghề của bạn'
      },
      {
        step: '02',
        title: 'Thiết kế giao diện & Lập trình chuẩn di động',
        duration: '1 - 2 ngày',
        localmateDoes: 'Xây dựng website trên nền tảng máy chủ tốc độ cao, tối ưu nút Gọi và Chat Zalo dính chân trang.',
        clientDoes: 'Thảnh thơi làm việc chuyên môn, chờ nhận link xem thử nghiệm trên điện thoại.',
        outcome: 'Bản xem trước website trực tiếp mở được ngay trên điện thoại cá nhân'
      },
      {
        step: '03',
        title: 'Gắn tên miền & Bàn giao toàn quyền',
        duration: '0.5 ngày',
        localmateDoes: 'Trỏ tên miền chính chủ, kích hoạt khóa SSL xanh và bàn giao toàn bộ tài khoản đăng nhập.',
        clientDoes: 'Bấm thử nút gọi hotline kiểm tra và lưu lại link để gửi khách mỗi khi báo giá.',
        outcome: 'Hệ thống nền tảng số chính thức đi vào vận hành và sẵn sàng đón khách'
      }
    ],
    capabilities: [
      {
        id: 'sales-hub-website',
        name: 'Website Bán Hàng & Sales Hub Chuẩn Di Động',
        techName: 'Mobile-First Sales Hub Architecture',
        tag: 'Bán Hàng',
        badge: 'Cốt Lõi',
        iconName: 'Layout',
        shortDescription: 'Trang web tinh gọn tối ưu cho việc chốt khách trên điện thoại.',
        description: 'Trình bày đủ 5 yếu tố ra quyết định: Năng lực thật, hình ảnh thực tế, bảng giá minh bạch, đánh giá khách cũ và nút liên hệ bấm là gọi ngay.',
        plainLanguageMeaning: 'Một trang web bán hàng hiện đại mở cực nhanh trên điện thoại, khách xem là hiểu bạn làm gì và bấm gọi ngay.',
        practicalBenefit: 'Khách hàng có đủ thông tin tin cậy để đưa ra quyết định mà không cần hỏi đi hỏi lại.',
        mappedCatalogServiceIds: ['01', '02', '03', '04', '05']
      },
      {
        id: 'service-sales-pages',
        name: 'Trang Bán Hàng Chuyên Sâu Từng Dịch Vụ',
        techName: 'Dedicated Service Landing Pages',
        tag: 'Chốt Sale',
        badge: 'Chốt Khách',
        iconName: 'FileText',
        shortDescription: 'Mỗi dịch vụ chủ lực có một trang riêng biệt để ném Zalo cho khách xem.',
        description: 'Thay vì gửi 15 tấm ảnh rời rạc, gửi 1 link chuyên biệt (ví dụ /mai-ton, /nhom-xingfa) cho khách hàng xem đủ video, bảng giá, quy trình thi công trong 30 giây.',
        plainLanguageMeaning: 'Tạo các trang riêng cho từng dịch vụ chủ lực, chỉ cần copy link ném vào tin nhắn Zalo cho khách xem.',
        practicalBenefit: 'Tăng tỷ lệ khách đồng ý nhận tư vấn và khảo sát trực tiếp lên gấp đôi.',
        mappedCatalogServiceIds: ['05', '06', '07']
      },
      {
        id: 'domain-ssl-security',
        name: 'Tên Miền Riêng & Bảo Mật Khóa Xanh HTTPS',
        techName: 'Custom Domain & Managed SSL Security',
        tag: 'Bảo Mật',
        badge: 'Chính Chủ',
        iconName: 'ShieldCheck',
        shortDescription: 'Kết nối tên miền thương hiệu và bảo mật ổ khóa xanh HTTPS an toàn.',
        description: 'Cài đặt tên miền .vn hoặc .com do bạn đứng tên chính chủ 100%, kích hoạt chứng chỉ bảo mật HTTPS (SSL) duy trì an toàn và miễn phí lâu dài.',
        plainLanguageMeaning: 'Website mang tên thương hiệu của bạn, có biểu tượng ổ khóa an toàn không bị trình duyệt cảnh báo nguy hiểm.',
        practicalBenefit: 'Xây dựng uy tín bền vững, khách hàng an tâm tuyệt đối khi bấm vào link.',
        mappedCatalogServiceIds: ['12', '13']
      },
      {
        id: 'mobile-cro-optimization',
        name: 'Tối Ưu Trải Nghiệm Bấm Gọi & Liên Hệ (CRO)',
        techName: 'Thumb-Zone Mobile CRO Optimization',
        tag: 'Chuyển Đổi',
        badge: 'Chuyển Đổi',
        iconName: 'Smartphone',
        shortDescription: 'Bố trí thanh gọi Hotline và nút chat Zalo dính chân màn hình.',
        description: 'Thiết kế nút Gọi Ngay và Chat Zalo tại đúng vị trí ngón tay cái dễ bấm nhất trên điện thoại thông minh, bấm vào là kết nối ngay trong 1 giây.',
        plainLanguageMeaning: 'Hai nút bấm Gọi Điện và Nhắn Zalo luôn nằm ở góc dưới màn hình điện thoại, khách muốn liên hệ chỉ cần chạm nhẹ ngón tay.',
        practicalBenefit: 'Khách hàng không phải tìm kiếm số điện thoại, kết nối trực tiếp với bạn trong 3 giây.',
        mappedCatalogServiceIds: ['01', '03', '10']
      },
      {
        id: 'speed-pagespeed-90',
        name: 'Tối Ưu Mở Trang Cực Nhanh Dưới 1.2 Giây',
        techName: 'PageSpeed & Image Compression Engine',
        tag: 'Tốc Độ',
        badge: 'Hiệu Năng',
        iconName: 'Zap',
        shortDescription: 'Mở trang dưới 1.2 giây trên mạng 3G/4G di động.',
        description: 'Mã nguồn siêu nhẹ, nén ảnh tự động rõ nét không vỡ hạt và phân phối dữ liệu qua máy chủ tăng tốc, đạt điểm tốc độ cao trên mọi dòng điện thoại.',
        plainLanguageMeaning: 'Trang web mở ra gần như ngay lập tức sau cú chạm tay, mượt mà kể cả khi mạng điện thoại chập chờn.',
        practicalBenefit: 'Khách hàng không mất kiên nhẫn tắt trang, tăng tỷ lệ gọi điện chốt đơn.',
        mappedCatalogServiceIds: ['11', '13']
      }
    ],
    deliverables: [
      {
        id: 'del-1-web',
        title: 'Hệ thống Sales Hub hoàn chỉnh',
        description: 'Trang web hoạt động trơn tru với đầy đủ nội dung chuyên nghiệp.',
        items: [
          '01 Website / Landing Page chuẩn di động bàn giao chính chủ',
          '01 Tên miền riêng kết nối chuẩn DNS và khóa SSL bảo mật',
          'Bảng giá công khai & Danh mục dịch vụ chuẩn hóa',
          'Bộ nút liên hệ nhanh: Gọi Hotline, Chat Zalo, Form báo giá',
          'Tài khoản quản trị cập nhật nội dung dễ dàng'
        ],
        ownershipTag: 'Sở hữu chính chủ 100%'
      },
      {
        id: 'del-1-guide',
        title: 'Tài liệu bàn giao & Hướng dẫn sử dụng',
        description: 'Chủ doanh nghiệp tự làm chủ 100% tài nguyên số của mình.',
        items: [
          'Video hướng dẫn thay đổi giá, thêm hình ảnh, sửa số điện thoại',
          'Biên bản bàn giao tài khoản tên miền, hosting và quyền quản trị',
          'Cam kết bảo hành kỹ thuật và hỗ trợ qua Zalo'
        ],
        ownershipTag: 'Toàn quyền quản trị'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Khảo sát & Thu thập thông tin cốt lõi',
        description: 'Hỏi 5 câu về ngành nghề, bảng giá hiện tại, hình ảnh xưởng/công trình và số điện thoại nhận khách.',
        duration: '1 buổi'
      },
      {
        step: '02',
        title: 'Biên tập nội dung & Lên khung Sales Hub',
        description: 'Sắp xếp thông tin theo cấu trúc thuyết phục: Vấn đề khách gặp -> Giải pháp của bạn -> Bảng giá -> Bằng chứng.',
        duration: '1 ngày'
      },
      {
        step: '03',
        title: 'Thiết kế & Lập trình chuẩn di động',
        description: 'Xây dựng giao diện sáng màu, tốc độ cao, hiển thị hoàn hảo trên điện thoại và máy tính.',
        duration: '1 - 2 ngày'
      },
      {
        step: '04',
        title: 'Kiểm thử kết nối & Bàn giao chính chủ',
        description: 'Thử nghiệm nút gọi thoại, nút Zalo, form báo giá trên điện thoại thực tế và bàn giao toàn quyền.',
        duration: '0.5 ngày'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Khảo sát & Thu thập thông tin cốt lõi',
        description: 'Hỏi 5 câu về ngành nghề, bảng giá hiện tại, hình ảnh xưởng/công trình và số điện thoại nhận khách.',
        duration: '1 buổi'
      },
      {
        step: '02',
        title: 'Biên tập nội dung & Lên khung Sales Hub',
        description: 'Sắp xếp thông tin theo cấu trúc thuyết phục: Vấn đề khách gặp -> Giải pháp của bạn -> Bảng giá -> Bằng chứng.',
        duration: '1 ngày'
      },
      {
        step: '03',
        title: 'Thiết kế & Lập trình chuẩn di động',
        description: 'Xây dựng giao diện sáng màu, tốc độ cao, hiển thị hoàn hảo trên điện thoại và máy tính.',
        duration: '1 - 2 ngày'
      },
      {
        step: '04',
        title: 'Kiểm thử kết nối & Bàn giao chính chủ',
        description: 'Thử nghiệm nút gọi thoại, nút Zalo, form báo giá trên điện thoại thực tế và bàn giao toàn quyền.',
        duration: '0.5 ngày'
      }
    ],
    useCases: [
      {
        id: 'uc-1-xuong',
        targetCustomer: 'Xưởng cơ khí, nhôm kính, thợ thi công mái tôn, sửa nhà',
        industryName: 'Xưởng Cơ Khí & Nhôm Kính',
        iconName: 'Wrench',
        scenario:
          'Trước đây mỗi lần khách hỏi giá trên Zalo phải gửi 20 tấm ảnh chụp điện thoại và chat giải thích rất dài dòng, khách xem lướt qua rồi so sánh giá chỗ khác.',
        keySetup: [
          'Trang chuyên sâu /mai-ton và /nhom-xingfa',
          'Bảng giá barem tham khảo tính theo m2 rõ ràng',
          'Nút gửi bản vẽ qua Zalo nhận tư vấn đo đạc',
          'Ảnh thực tế các công trình đã hoàn thành'
        ],
        result:
          'Sau khi có trang Sales Hub có bảng giá rõ ràng và ảnh công trình sắc nét, chỉ cần gửi 1 link là khách hiểu ngay và bấm gọi chốt đo đạc.',
        resultHighlight: 'Tỷ lệ khách đồng ý cho thợ đến đo đạc trực tiếp tăng lên 70%'
      },
      {
        id: 'uc-1-fnb',
        targetCustomer: 'Quán ăn, quán cafe, tiệm bánh gia đình',
        industryName: 'Quán Ăn & Tiệm Cafe',
        iconName: 'Utensils',
        scenario:
          'Khách đến quán hoặc bạn bè muốn xem thực đơn nhưng không có menu trực tuyến, khách ở xa không biết quán có món gì và giá bao nhiêu.',
        keySetup: [
          'Menu điện tử hình ảnh rõ đẹp kèm giá công khai',
          'Nút gọi Hotline đặt bàn trước và ship mang về',
          'Ghim bản đồ chỉ đường Google Maps chính xác',
          'Hiển thị khung giờ mở cửa và chỗ để xe'
        ],
        result:
          'Có trang web 1 trang kèm menu điện tử và nút chỉ đường Google Maps, khách tiện xem món trước khi đến hoặc bấm gọi giao hàng nhanh.',
        resultHighlight: 'Tăng 30% lượng khách gọi đặt bàn trước vào các ngày cuối tuần'
      }
    ],
    pricing: [
      {
        id: 'offer-launch-490k',
        name: 'Gói Web Khởi Đầu',
        priceDisplay: '490.000đ',
        numericPrice: 490000,
        unit: 'trọn gói',
        description: 'Dành cho cơ sở nhỏ hoặc cá nhân kinh doanh cần một trang giới thiệu chuẩn để gửi khách hàng.',
        highlights: [
          'Trang bán hàng 1 trang đầy đủ 4-5 phần cốt lõi',
          'Nút bấm gọi điện thoại & chat Zalo ngay',
          'Tối ưu hiển thị đẹp trên mọi loại điện thoại',
          'Bàn giao và hướng dẫn tự cập nhật'
        ],
        ctaText: 'Đăng Ký Gói 490k'
      },
      {
        id: 'offer-launch-790k',
        name: 'Gói Web Doanh Nghiệp Tinh Gọn',
        priceDisplay: '790.000đ',
        numericPrice: 790000,
        unit: 'trọn gói',
        badge: 'Khuyên Dùng ⭐',
        isPopular: true,
        description: 'Trang web bán hàng đầy đủ hình ảnh công trình, bảng giá dịch vụ và form tư vấn nhận khách.',
        highlights: [
          'Trang giới thiệu 6-8 phần chuyên sâu',
          'Bảng giá dịch vụ & thư viện hình ảnh thực tế',
          'Bản đồ Google Maps & form yêu cầu báo giá',
          'Tối ưu tốc độ tải trang dưới 1.2 giây',
          'Tặng kèm tài liệu hướng dẫn sử dụng'
        ],
        ctaText: 'Chọn Gói Doanh Nghiệp'
      },
      {
        id: 'offer-launch-1990k',
        name: 'Gói Web Đa Trang Chuyên Nghiệp',
        priceDisplay: '1.990.000đ',
        numericPrice: 1990000,
        unit: 'trọn gói',
        description: 'Hệ thống website nhiều trang (Trang chủ, từng Dịch vụ riêng, Báo giá, Liên hệ) cho doanh nghiệp bài bản.',
        highlights: [
          'Website 3-5 trang dịch vụ riêng biệt',
          'Mỗi dịch vụ là 1 Sales Page riêng để ném Zalo',
          'Tặng kèm gói cài đặt SEO & đo lường trị giá 496k',
          'Tích hợp kết nối thông báo đơn về Zalo/Telegram'
        ],
        ctaText: 'Tư Vấn Gói Đa Trang'
      }
    ],
    pricingPackages: [
      {
        id: 'offer-launch-490k',
        name: 'Gói Web Khởi Đầu',
        priceDisplay: '490.000đ',
        numericPrice: 490000,
        unit: 'trọn gói',
        description: 'Dành cho cơ sở nhỏ hoặc cá nhân kinh doanh cần một trang giới thiệu chuẩn để gửi khách hàng.',
        highlights: [
          'Trang bán hàng 1 trang đầy đủ 4-5 phần cốt lõi',
          'Nút bấm gọi điện thoại & chat Zalo ngay',
          'Tối ưu hiển thị đẹp trên mọi loại điện thoại',
          'Bàn giao và hướng dẫn tự cập nhật'
        ],
        ctaText: 'Đăng Ký Gói 490k'
      },
      {
        id: 'offer-launch-790k',
        name: 'Gói Web Doanh Nghiệp Tinh Gọn',
        priceDisplay: '790.000đ',
        numericPrice: 790000,
        unit: 'trọn gói',
        badge: 'Khuyên Dùng ⭐',
        isPopular: true,
        description: 'Trang web bán hàng đầy đủ hình ảnh công trình, bảng giá dịch vụ và form tư vấn nhận khách.',
        highlights: [
          'Trang giới thiệu 6-8 phần chuyên sâu',
          'Bảng giá dịch vụ & thư viện hình ảnh thực tế',
          'Bản đồ Google Maps & form yêu cầu báo giá',
          'Tối ưu tốc độ tải trang dưới 1.2 giây',
          'Tặng kèm tài liệu hướng dẫn sử dụng'
        ],
        ctaText: 'Chọn Gói Doanh Nghiệp'
      },
      {
        id: 'offer-launch-1990k',
        name: 'Gói Web Đa Trang Chuyên Nghiệp',
        priceDisplay: '1.990.000đ',
        numericPrice: 1990000,
        unit: 'trọn gói',
        description: 'Hệ thống website nhiều trang (Trang chủ, từng Dịch vụ riêng, Báo giá, Liên hệ) cho doanh nghiệp bài bản.',
        highlights: [
          'Website 3-5 trang dịch vụ riêng biệt',
          'Mỗi dịch vụ là 1 Sales Page riêng để ném Zalo',
          'Tặng kèm gói cài đặt SEO & đo lường trị giá 496k',
          'Tích hợp kết nối thông báo đơn về Zalo/Telegram'
        ],
        ctaText: 'Tư Vấn Gói Đa Trang'
      }
    ],
    faqs: [
      {
        question: 'Tôi không rành về máy tính và công nghệ, có tự quản lý được không?',
        answer:
          'Hoàn toàn được. LocalMate thiết kế hệ thống cực kỳ đơn giản. Khi cần đổi số điện thoại, đổi giá hay thêm ảnh, bạn chỉ cần vài thao tác như đăng bài Facebook hoặc gửi tin nhắn qua Zalo để đội ngũ kỹ thuật làm thay.'
      },
      {
        question: 'Chi phí trên đã bao gồm tiền mua tên miền và máy chủ lưu trữ (hosting) chưa?',
        answer:
          'Chi phí trên là phí dịch vụ thiết kế và hoàn thiện kỹ thuật trọn gói. Bạn chỉ cần trả thêm tiền mua tên miền (khoảng 200k - 400k/năm tùy đuôi .vn hay .com) và tên miền đó đứng tên chính chủ cá nhân bạn nắm giữ 100% lâu dài.'
      },
      {
        question: 'Làm xong bao lâu thì có trang web hoàn chỉnh để sử dụng?',
        answer:
          'Chỉ mất từ 1 đến 3 ngày làm việc sau khi bạn cung cấp đủ thông tin cơ bản về dịch vụ và hình ảnh. LocalMate tập trung làm nhanh, thực tế, không kéo dài thời gian của bạn.'
      }
    ],
    relatedSolutionSlugs: ['/giai-phap/duoc-tim-thay', '/giai-phap/thu-hut-khach-hang']
  },

  // =========================================================================
  // TRỤ CỘT 2: ĐƯỢC KHÁCH HÀNG TÌM THẤY (duoc-tim-thay)
  // =========================================================================
  {
    id: 'duoc-tim-thay',
    slug: '/giai-phap/duoc-tim-thay',
    title: 'Được khách hàng tìm thấy',
    demandTitle: 'Muốn khách quanh vùng tìm thấy cơ sở trên Google Maps & Google Search',
    subtitle: 'Đưa vị trí cửa hàng lên Google Maps, xuất hiện khi khách tìm quanh vùng và được trợ lý AI gợi ý',
    badge: 'Trụ Cột 02 • Khám Phá & Hiện Diện',
    painPointPill: 'Tìm Maps không ra, tìm từ khóa Google toàn ra đối thủ',
    iconName: 'MapPin',
    customerProblem:
      'Có website rồi nhưng không ai tìm thấy, tìm tên cơ sở trên Google Maps không ra hoặc bị sai địa chỉ, khách quanh vùng có nhu cầu tìm thợ, tìm tiệm thì toàn ra đối thủ.',
    promise: 'Giúp doanh nghiệp hiện diện đúng lúc khách hàng có nhu cầu trên Google Search, Google Maps và AI Search.',
    summary:
      'LocalMate phủ sóng sự hiện diện của cơ sở bạn trên mọi công cụ tìm kiếm: xác minh Google Maps định vị GPS chính chủ, tối ưu SEO từ khóa theo quận huyện và cấu hình dữ liệu để ChatGPT, Gemini đề xuất tiệm của bạn.',
    heroDescription:
      'Giải pháp tối ưu hiện diện địa phương đa kênh: Google Maps chính chủ 100%, xuất hiện khi khách tìm kiếm quanh vùng (3-10km) và cấu hình sẵn sàng để trợ lý AI (ChatGPT, Gemini) gợi ý tiệm của bạn.',
    targetAudience: 'Cửa hàng, tiệm sửa chữa, phòng khám, nha khoa, spa và dịch vụ phục vụ tận nơi',
    breadcrumbs: [
      { label: 'Trang chủ', href: '/' },
      { label: 'Giải pháp', href: '/giai-phap' },
      { label: 'Được khách hàng tìm thấy', href: '/giai-phap/duoc-tim-thay' }
    ],
    meta: {
      title: 'Giải Pháp Được Khách Hàng Tìm Thấy: Google Maps & SEO Địa Phương | LocalMate',
      description: 'Hiện diện đúng lúc khách hàng tìm kiếm trên Google Maps, Google Search và trợ lý AI (ChatGPT, Gemini). Xác minh Maps chính chủ, đồng hành hỗ trợ kỹ thuật lâu dài.'
    },
    outcomes: [
      {
        id: 'out-2-maps',
        metric: 'Top 3',
        title: 'Xuất hiện trên Google Maps khu vực',
        label: 'Hiện diện Top 3 Google Maps bán kính 3 - 10km',
        description: 'Khách hàng quanh bán kính 3 - 10km tìm dịch vụ là thấy ngay vị trí cửa hàng cùng nút bấm gọi và chỉ đường.',
        highlight: 'Khách tìm là thấy ngay'
      },
      {
        id: 'out-2-owner',
        metric: '100%',
        title: 'Chính chủ xác minh bằng Gmail bạn',
        label: 'Chính chủ Gmail của bạn 100%',
        description: 'Xác minh quyền sở hữu chính chủ 100%, chống đối thủ cướp maps hoặc bị đổi số hotline lén lút.',
        highlight: 'Bàn giao 100% tài khoản chính chủ'
      },
      {
        id: 'out-2-ai',
        metric: 'Đón Đầu',
        title: 'Được AI đề xuất khi khách hỏi trợ lý ảo',
        label: 'Được ChatGPT & Gemini đề xuất cơ sở',
        description: 'Khai báo thông tin xác thực chuẩn xác để các công cụ tìm kiếm và trợ lý AI (ChatGPT, Google AI) tự tin giới thiệu cơ sở của bạn.',
        highlight: 'Đón đầu xu hướng tìm kiếm AI'
      }
    ],
    problems: [
      {
        problem: 'Tìm tên cửa hàng trên Google Maps không thấy xuất hiện',
        detail: 'Địa chỉ bị ghim lệch sang ngõ khác hoặc hồ sơ chưa được xác minh khiến khách đi lạc hoặc không dám gọi.',
        iconName: 'MapPin'
      },
      {
        problem: 'Maps bị người lạ tạo giúp rồi giữ quyền quản trị',
        detail: 'Không thể chỉnh sửa giờ mở cửa, số hotline hay phản hồi đánh giá vì không có tài khoản quản lý chính chủ.',
        iconName: 'ShieldAlert'
      },
      {
        problem: 'Khách hỏi ChatGPT/Gemini nhưng AI toàn gợi ý đối thủ',
        detail: 'Website chưa có cấu trúc dữ liệu xác thực khiến các trợ lý AI không nhận diện được địa chỉ, dịch vụ và độ uy tín của tiệm trong khu vực.',
        iconName: 'Bot'
      }
    ],
    commonProblems: [
      'Cửa hàng mở đã lâu nhưng tìm kiếm trên Google Maps không thấy tên, hoặc tên vị trí bị ghim sai chỗ khiến khách đi lạc.',
      'Maps không thuộc quyền sở hữu của bạn, do người lạ tạo giúp rồi giữ tài khoản quản trị, không thể chỉnh sửa thông tin.',
      'Có website nhưng tìm từ khóa ngành nghề trên Google không thấy xuất hiện ở trang nào, không có lượt khách tự nhiên.',
      'Khách hàng chuyển sang hỏi ChatGPT và Gemini: "Quán ăn ngon gần đây" hoặc "Thợ nhôm kính uy tín khu vực này" nhưng cơ sở của bạn hoàn toàn vô hình.'
    ],
    whatWeDo: [
      'Đăng ký, xác minh chính chủ và tối ưu hóa hồ sơ Google Business Profile (Google Maps) chuẩn vị trí địa chỉ thật.',
      'Tạo QR giúp khách hàng đã sử dụng dịch vụ để lại đánh giá chân thực trên Google nhanh chóng trong 5 giây.',
      'Tối ưu hóa nội dung tìm kiếm địa phương: cài đặt sitemap, robots.txt, tiêu đề dịch vụ và từ khóa có dấu / không dấu bám sát vị trí quận huyện.',
      'Khai báo thông tin xác thực cơ sở (địa chỉ, số hotline, giờ mở cửa, dịch vụ) và cấu hình sẵn sàng để trợ lý AI dễ dàng đọc hiểu và gợi ý.',
      'Tăng tốc độ tải trang đạt chuẩn tối ưu để được Google ưu tiên xếp hạng cao.'
    ],
    workflow: [
      {
        step: '01',
        title: 'Khảo sát hiện trạng & Rà soát trùng lặp Maps',
        duration: '0.5 ngày',
        localmateDoes: 'Kiểm tra tọa độ GPS, rà soát các ghim trùng lặp và phân tích thứ hạng đối thủ quanh bán kính 5km.',
        clientDoes: 'Cung cấp địa chỉ chính xác, biển hiệu mặt tiền và tài khoản Gmail chính chủ.',
        outcome: 'Báo cáo hiện trạng vị trí và lộ trình xác minh chính chủ'
      },
      {
        step: '02',
        title: 'Xác minh Google Business Profile & Đồng bộ NAP',
        duration: '1 - 2 ngày',
        localmateDoes: 'Tiến hành quy trình xác minh chính chủ Google Maps, chuẩn hóa Tên - Địa chỉ - Điện thoại đồng nhất.',
        clientDoes: 'Nhận mã xác nhận qua tin nhắn/cuộc gọi của Google và gửi cho kỹ thuật viên.',
        outcome: 'Google Maps hiển thị công khai trên ứng dụng bản đồ'
      },
      {
        step: '03',
        title: 'Khai báo dữ liệu xác thực & Tối ưu AI Search',
        duration: '1 ngày',
        localmateDoes: 'Cài đặt mã dữ liệu xác thực cơ sở vào web, tạo tệp dữ liệu máy học và cấu hình thông tin tóm tắt cho AI.',
        clientDoes: 'Đặt bộ bảng mica mã QR tại quầy giúp khách hàng để lại đánh giá chân thực trên Google.',
        outcome: 'Hệ sinh thái tìm kiếm đa kênh Google + Maps + AI hoạt động đồng bộ'
      }
    ],
    capabilities: [
      {
        id: 'google-maps-optimization',
        name: 'Xác Minh & Tối Ưu Google Maps Chính Chủ',
        techName: 'Google Business Profile Optimization',
        tag: 'Bản Đồ',
        badge: 'Bán Kính Gần',
        iconName: 'MapPin',
        shortDescription: 'Đưa cơ sở lên vị trí hàng đầu trên bản đồ tìm kiếm địa phương.',
        description: 'Xác minh quyền sở hữu Google Business Profile bằng Gmail của bạn, chống cướp Maps, gắn đầy đủ số hotline, ảnh mặt tiền, giờ mở cửa và link website.',
        plainLanguageMeaning: 'Đưa tiệm của bạn lên bản đồ Google Maps chính chủ, khách tìm kiếm quanh vùng là thấy ngay đường đi và số điện thoại.',
        practicalBenefit: 'Đón nhận khách hàng vãng lai và cư dân trong bán kính 3-10km tìm đến mỗi ngày.',
        mappedCatalogServiceIds: ['19', '20', '22'],
        detailSlug: '/dich-vu/local-search'
      },
      {
        id: 'seo-google-local',
        name: 'Hiện Diện Trên Google Khi Khách Tìm Quanh Vùng (Local Search)',
        techName: 'On-Page Local SEO & Citations',
        tag: 'Tìm Kiếm',
        badge: 'Bền Vững',
        iconName: 'Search',
        shortDescription: 'Lên top từ khóa tìm kiếm theo quận, huyện và khu vực.',
        description: 'Tối ưu trang web và bài viết bám sát từ khóa nhu cầu thực tế của cư dân địa phương (ví dụ: thợ sửa điện lạnh Cầu Giấy, cắt kính cường lực Thủ Đức).',
        plainLanguageMeaning: 'Làm cho website xuất hiện trên trang đầu Google khi người dân trong khu vực tìm dịch vụ bạn đang làm.',
        practicalBenefit: 'Nhận khách gọi điện đều đặn hàng tháng mà không tốn tiền mua quảng cáo.',
        mappedCatalogServiceIds: ['16', '18', '20'],
        detailSlug: '/dich-vu/local-search'
      },
      {
        id: 'schema-entity-nap',
        name: 'Đồng Bộ Thông Tin Xác Thực Doanh Nghiệp (Cấu Trúc Dữ Liệu)',
        techName: 'LocalBusiness Entity & Schema Module',
        tag: 'Cấu Trúc',
        badge: 'Kỹ Thuật',
        iconName: 'Code',
        shortDescription: 'Đồng bộ tên tiệm, địa chỉ, số hotline chuẩn xác để máy tìm kiếm nhận diện.',
        description: 'Khai báo thông tin cơ sở thành cấu trúc dữ liệu chuẩn giúp Google hiểu chính xác doanh nghiệp của bạn là ai, hoạt động ở đâu và cung cấp những dịch vụ gì.',
        plainLanguageMeaning: 'Khai báo thông tin cơ sở thành dữ liệu chuẩn để Google và các hệ thống tìm kiếm hiểu rõ bạn là tiệm uy tín có thật tại địa phương.',
        practicalBenefit: 'Giúp Google xếp hạng vị trí Maps và website của bạn cao hơn đối thủ.',
        mappedCatalogServiceIds: ['17']
      },
      {
        id: 'ai-search-geo-aeo',
        name: 'Tối Ưu Để Trợ Lý AI Đề Xuất (ChatGPT & Gemini)',
        techName: 'AI Engine Optimization Module (GEO/AEO)',
        tag: 'Trí Tuệ Nhân Tạo',
        badge: 'Xu Hướng Mới',
        iconName: 'Bot',
        shortDescription: 'Xuất hiện trong câu trả lời gợi ý của ChatGPT, Gemini, Perplexity.',
        description: 'Cấu hình thông tin tóm tắt và tệp dữ liệu máy học (llms.txt) để các trợ lý AI đọc hiểu chính xác bảng giá, dịch vụ và tự tin gợi ý cơ sở của bạn khi có người hỏi.',
        plainLanguageMeaning: 'Khi người dùng hỏi ChatGPT hoặc Gemini tìm địa chỉ uy tín trong khu vực, AI sẽ có đủ dữ liệu để đọc và giới thiệu tiệm của bạn.',
        practicalBenefit: 'Đón đầu nhóm khách hàng công nghệ trẻ tuổi hay hỏi AI trước khi mua hàng.',
        mappedCatalogServiceIds: ['21', '40'],
        detailSlug: '/dich-vu/geo'
      },
      {
        id: 'pagespeed-technical-seo',
        name: 'Tối Ưu Kỹ Thuật Hạ Tầng & Tốc Độ Chuẩn Google',
        techName: 'Technical SEO & PageSpeed Engine',
        tag: 'Tốc Độ',
        badge: 'Hạ Tầng',
        iconName: 'Zap',
        shortDescription: 'Tốc độ mở trang cực nhanh và dọn sạch lỗi kỹ thuật.',
        description: 'Tối ưu mã nguồn siêu gọn, nén ảnh thế hệ mới và dọn dẹp lỗi kỹ thuật để website đạt điểm tốc độ cao, giúp Google ưu tiên hiển thị.',
        plainLanguageMeaning: 'Website sạch lỗi kỹ thuật, chạy êm ru và được Google bot ghé thăm lập chỉ mục thường xuyên.',
        practicalBenefit: 'Được Google ưu tiên giữ vững thứ hạng tìm kiếm lâu dài.',
        mappedCatalogServiceIds: ['11', '13', '16']
      }
    ],
    deliverables: [
      {
        id: 'del-2-maps',
        title: 'Hồ sơ Google Maps chính chủ & Bộ nhận diện',
        description: 'Cơ sở hiện diện rõ ràng trên Google Maps và tìm kiếm xung quanh.',
        items: [
          'Tài khoản Google Business Profile xác minh chính chủ 100% bàn giao cho Gmail bạn',
          'Tối ưu đầy đủ danh mục dịch vụ, hình ảnh thực tế, số hotline và địa chỉ ghim đúng vị trí',
          'Bộ file thiết kế mã QR Code để bàn giúp khách để lại đánh giá chân thực trên Google',
          'Bảo hành chống cướp Maps và hỗ trợ cập nhật thông tin trong 5 năm'
        ],
        ownershipTag: 'Chính chủ Gmail cá nhân'
      },
      {
        id: 'del-2-seo',
        title: 'Hạ tầng kỹ thuật SEO & Đề xuất AI',
        description: 'Website được cấu hình toàn diện để Google và AI lập chỉ mục.',
        items: [
          'Đồng bộ dữ liệu xác thực chuẩn (thông tin tiệm, bảng giá, đánh giá)',
          'Khai báo sơ đồ trang web và kết nối Google Search Console',
          'Cấu hình tệp dữ liệu máy học (llms.txt) phục vụ tìm kiếm AI',
          'Báo cáo kiểm tra tốc độ mở trang đạt chuẩn tối ưu'
        ],
        ownershipTag: 'Bàn giao mã nguồn & Báo cáo'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Kiểm tra hiện trạng & Rà soát vị trí',
        description: 'Rà soát xem tên cơ sở đã có trên Google Maps chưa, kiểm tra tình trạng trùng lặp vị trí và đánh giá đối thủ quanh bán kính 5km.',
        duration: '0.5 ngày'
      },
      {
        step: '02',
        title: 'Xác minh Google Maps & Đồng bộ NAP',
        description: 'Tiến hành quy trình xác minh chính chủ vị trí Google Business Profile và chuẩn hóa Tên - Địa chỉ - Điện thoại.',
        duration: '1 - 2 ngày'
      },
      {
        step: '03',
        title: 'Khai báo kỹ thuật SEO & Schema JSON-LD',
        description: 'Chèn mã Schema có cấu trúc lên website, khai báo sơ đồ trang web cho Google Search Console.',
        duration: '1 ngày'
      },
      {
        step: '04',
        title: 'Kích hoạt tối ưu AI Search & Bàn giao QR Review',
        description: 'Triển khai cấu hình GEO cho các công cụ AI và bàn giao bảng QR đánh giá chân thực cho tiệm.',
        duration: '0.5 ngày'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Kiểm tra hiện trạng & Rà soát vị trí',
        description: 'Rà soát xem tên cơ sở đã có trên Google Maps chưa, kiểm tra tình trạng trùng lặp vị trí và đánh giá đối thủ quanh bán kính 5km.',
        duration: '0.5 ngày'
      },
      {
        step: '02',
        title: 'Xác minh Google Maps & Đồng bộ NAP',
        description: 'Tiến hành quy trình xác minh chính chủ vị trí Google Business Profile và chuẩn hóa Tên - Địa chỉ - Điện thoại.',
        duration: '1 - 2 ngày'
      },
      {
        step: '03',
        title: 'Khai báo kỹ thuật SEO & Schema JSON-LD',
        description: 'Chèn mã Schema có cấu trúc lên website, khai báo sơ đồ trang web cho Google Search Console.',
        duration: '1 ngày'
      },
      {
        step: '04',
        title: 'Kích hoạt tối ưu AI Search & Bàn giao QR Review',
        description: 'Triển khai cấu hình GEO cho các công cụ AI và bàn giao bảng QR đánh giá chân thực cho tiệm.',
        duration: '0.5 ngày'
      }
    ],
    useCases: [
      {
        id: 'uc-2-clinic',
        targetCustomer: 'Phòng khám nha khoa, thẩm mỹ viện, tiệm spa',
        industryName: 'Nha Khoa & Thẩm Mỹ Viện',
        iconName: 'Sparkles',
        scenario:
          'Khách hàng xung quanh khu đô thị tìm từ khóa nha khoa gần đây nhưng Google Maps chỉ hiển thị các cơ sở cách đó 3-4km vì tiệm chưa được tối ưu từ khóa địa phương.',
        keySetup: [
          'Xác minh Maps chuẩn địa chỉ tòa nhà',
          'Đồng bộ từ khóa dịch vụ: niềng răng, bọc sứ, nhổ răng khôn',
          'Bộ mã QR để bàn giúp khách để lại đánh giá chân thực sau khi làm dịch vụ',
          'Khai báo Schema MedicalBusiness chuẩn y tế'
        ],
        result:
          'Sau khi tối ưu Google Maps và Local SEO, cơ sở lọt vào Top 3 bản đồ tìm kiếm bán kính 5km, mỗi tuần nhận thêm 15 - 25 cuộc gọi và lượt chỉ đường trực tiếp.',
        resultHighlight: 'Nhận thêm 15-25 cuộc gọi và lượt đặt lịch khám mỗi tuần'
      },
      {
        id: 'uc-2-repair',
        targetCustomer: 'Thợ sửa điện lạnh, thông tắc cống, cứu hộ xe máy',
        industryName: 'Sửa Chữa & Cứu Hộ Khẩn Cấp',
        iconName: 'Wrench',
        scenario:
          'Khách gặp sự cố gấp thường mở điện thoại tìm ngay thợ gần nhất trên Google hoặc hỏi nhanh ChatGPT: thợ sửa điều hòa uy tín khu vực gần tôi.',
        keySetup: [
          'Ghim vị trí phủ các quận huyện phục vụ',
          'Nút gọi Hotline khẩn cấp hiển thị ngay trên kết quả tìm kiếm',
          'Tối ưu dữ liệu tóm tắt để trợ lý AI trích xuất bảng giá sửa chữa',
          'Bảo hành tay nghề và báo giá minh bạch'
        ],
        result:
          'Nhờ đồng bộ dữ liệu xác thực và tối ưu đề xuất AI, tiệm luôn xuất hiện ở các vị trí đầu kèm số điện thoại hotline, khách bấm gọi ngay trong lúc cấp bách.',
        resultHighlight: 'Khách gọi đến đều đặn ngay khi gặp sự cố mà không mất phí quảng cáo'
      }
    ],
    pricing: [
      {
        id: 'offer-maps-setup',
        name: 'Tạo Google Maps Chính Chủ & QR Đánh Giá Chân Thực',
        priceDisplay: '299.000đ',
        numericPrice: 299000,
        unit: 'trọn gói',
        description: 'Xác minh vị trí chính chủ trên Google Maps và bàn giao bộ mã QR xin đánh giá.',
        highlights: [
          'Xác minh vị trí chính chủ bằng Gmail cá nhân',
          'Ghim đúng tọa độ GPS, chống thất lạc vị trí',
          'Tạo QR giúp khách hàng đã sử dụng dịch vụ để lại đánh giá chân thực trên Google',
          'Đồng hành hỗ trợ chống cướp Maps trong 5 năm'
        ],
        ctaText: 'Đăng Ký Làm Maps 299k'
      },
      {
        id: 'offer-local-seo-pack',
        name: 'Gói SEO Tổng Thể Địa Phương & Bản Đồ',
        priceDisplay: '690.000đ',
        numericPrice: 690000,
        unit: 'trọn gói',
        badge: 'Phổ Biến Nhất ⭐',
        isPopular: true,
        description: 'Phủ sóng từ khóa dịch vụ quanh bán kính 3-10km và tối ưu toàn diện kỹ thuật SEO on-page.',
        highlights: [
          'Toàn bộ quyền lợi gói Google Maps chính chủ',
          'Tối ưu từ khóa tìm kiếm địa phương có dấu & không dấu',
          'Đồng bộ thông tin xác thực doanh nghiệp chuẩn xác',
          'Xác minh Google Search Console & tối ưu mở trang cực nhanh',
          'Cấu hình dữ liệu đề xuất cho trợ lý AI (ChatGPT, Gemini)'
        ],
        ctaText: 'Chọn Gói SEO Địa Phương'
      },
      {
        id: 'offer-seo-monthly',
        name: 'Duy Trì Top Google Maps & SEO Định Kỳ',
        priceDisplay: '990.000đ',
        numericPrice: 990000,
        unit: 'tháng',
        description: 'Chăm sóc vị trí bản đồ định kỳ, đăng ảnh và bài viết mới để giữ vững vị trí dẫn đầu khu vực.',
        highlights: [
          'Đăng bài và hình ảnh dịch vụ mới định kỳ hàng tuần',
          'Hỗ trợ phản hồi và chăm sóc đánh giá của khách hàng',
          'Rà soát và xử lý các đánh giá xấu hoặc vị trí bị báo cáo sai',
          'Báo cáo số lượt người tìm kiếm, bấm gọi và xem chỉ đường hàng tháng'
        ],
        ctaText: 'Tư Vấn Gói Duy Trì'
      }
    ],
    pricingPackages: [
      {
        id: 'offer-maps-setup',
        name: 'Tạo Google Maps Chính Chủ & QR Đánh Giá Chân Thực',
        priceDisplay: '299.000đ',
        numericPrice: 299000,
        unit: 'trọn gói',
        description: 'Xác minh vị trí chính chủ trên Google Maps và bàn giao bộ mã QR xin đánh giá.',
        highlights: [
          'Xác minh vị trí chính chủ bằng Gmail cá nhân',
          'Ghim đúng tọa độ GPS, chống thất lạc vị trí',
          'Tạo QR giúp khách hàng đã sử dụng dịch vụ để lại đánh giá chân thực trên Google',
          'Đồng hành hỗ trợ chống cướp Maps trong 5 năm'
        ],
        ctaText: 'Đăng Ký Làm Maps 299k'
      },
      {
        id: 'offer-local-seo-pack',
        name: 'Gói SEO Tổng Thể Địa Phương & Bản Đồ',
        priceDisplay: '690.000đ',
        numericPrice: 690000,
        unit: 'trọn gói',
        badge: 'Phổ Biến Nhất ⭐',
        isPopular: true,
        description: 'Phủ sóng từ khóa dịch vụ quanh bán kính 3-10km và tối ưu toàn diện kỹ thuật SEO on-page.',
        highlights: [
          'Toàn bộ quyền lợi gói Google Maps chính chủ',
          'Tối ưu từ khóa tìm kiếm địa phương có dấu & không dấu',
          'Đồng bộ thông tin xác thực doanh nghiệp chuẩn xác',
          'Xác minh Google Search Console & tối ưu mở trang cực nhanh',
          'Cấu hình dữ liệu đề xuất cho trợ lý AI (ChatGPT, Gemini)'
        ],
        ctaText: 'Chọn Gói SEO Địa Phương'
      },
      {
        id: 'offer-seo-monthly',
        name: 'Duy Trì Top Google Maps & SEO Định Kỳ',
        priceDisplay: '990.000đ',
        numericPrice: 990000,
        unit: 'tháng',
        description: 'Chăm sóc vị trí bản đồ định kỳ, đăng ảnh và bài viết mới để giữ vững vị trí dẫn đầu khu vực.',
        highlights: [
          'Đăng bài và hình ảnh dịch vụ mới định kỳ hàng tuần',
          'Hỗ trợ phản hồi và chăm sóc đánh giá của khách hàng',
          'Rà soát và xử lý các đánh giá xấu hoặc vị trí bị báo cáo sai',
          'Báo cáo số lượt người tìm kiếm, bấm gọi và xem chỉ đường hàng tháng'
        ],
        ctaText: 'Tư Vấn Gói Duy Trì'
      }
    ],
    faqs: [
      {
        question: 'Google Maps có bị mất phí duy trì hàng tháng cho Google không?',
        answer:
          'Không. Google Maps (Google Business Profile) là dịch vụ hoàn toàn miễn phí của Google. Bạn chỉ trả phí một lần cho LocalMate để thực hiện việc xác minh, chuẩn hóa thông tin và tối ưu kỹ thuật.'
      },
      {
        question: 'Làm sao để biết Maps đã thuộc sở hữu chính chủ của tôi?',
        answer:
          'LocalMate sử dụng chính tài khoản Gmail của bạn để xác minh. Bạn là Chủ sở hữu chính (Primary Owner), có toàn quyền thêm bớt người quản lý và không ai có thể lấy đi nếu bạn không cho phép.'
      },
      {
        question: 'Tối ưu để trợ lý AI (ChatGPT, Gemini) gợi ý là làm gì và mang lại lợi ích gì?',
        answer:
          'Ngày nay nhiều khách hàng hỏi trực tiếp ChatGPT hoặc Gemini: "Tìm quán ăn ngon gần đây" hoặc "Thợ sửa khóa uy tín quanh khu vực này". LocalMate cấu trúc lại toàn bộ thông tin cơ sở (bảng giá, địa chỉ, số điện thoại) thành định dạng chuẩn để các trợ lý AI đọc hiểu chính xác và tự tin giới thiệu tên cơ sở của bạn khi có người hỏi.'
      }
    ],
    relatedSolutionSlugs: ['/giai-phap/xay-nen-tang-so', '/giai-phap/thu-hut-khach-hang']
  },

  // =========================================================================
  // TRỤ CỘT 3: THU HÚT KHÁCH HÀNG & TÌM LEAD (thu-hut-khach-hang)
  // =========================================================================
  {
    id: 'thu-hut-khach-hang',
    slug: '/giai-phap/thu-hut-khach-hang',
    title: 'Thu hút khách hàng & Tìm lead',
    demandTitle: 'Cần có thêm nhiều cuộc gọi & tin nhắn hỏi giá nhanh chóng',
    subtitle: 'Quảng cáo Google & Facebook nhắm chuẩn bán kính quanh cơ sở, đo lường sát từng cuộc gọi',
    badge: 'Trụ Cột 03 • Quảng Cáo & Đo Lường Lead',
    painPointPill: 'Tự chạy Ads tốn tiền, click tặc nhiều, không biết chi phí ra khách',
    iconName: 'Target',
    customerProblem:
      'Cần cuộc gọi, tin nhắn và khách hàng nhanh hơn để nuôi xưởng và nuôi quân, nhưng tự chạy quảng cáo thì tốn tiền mà toàn bị click tặc, ra tin nhắn rác hoặc không biết chi phí thực tế cho mỗi cuộc gọi là bao nhiêu.',
    promise: 'Triển khai chiến dịch quảng cáo rõ ràng, đo lường được chi phí trên từng liên hệ.',
    summary:
      'LocalMate thiết lập chiến dịch quảng cáo Google Search và Facebook đúng bán kính khu vực quanh cơ sở kinh doanh, nhắm trúng đối tượng có nhu cầu thật, loại trừ click ảo và đo lường chính xác từng cuộc gọi hay tin nhắn Zalo.',
    heroDescription:
      'Triển khai quảng cáo địa phương minh bạch 100%: bạn tự thanh toán cho Google/Facebook với 0% phí kê giá. Chặn click ảo triệt để và gắn mã đo lường chi phí từng cuộc gọi.',
    targetAudience: 'Xưởng thi công, tiệm sửa chữa, gara ô tô, phòng khám và cơ sở cần khách gọi ngay',
    breadcrumbs: [
      { label: 'Trang chủ', href: '/' },
      { label: 'Giải pháp', href: '/giai-phap' },
      { label: 'Thu hút khách hàng & Tìm lead', href: '/giai-phap/thu-hut-khach-hang' }
    ],
    meta: {
      title: 'Giải Pháp Quảng Cáo Địa Phương & Thu Hút Lead Khách Hàng | LocalMate',
      description: 'Chạy Google Ads & Facebook Ads bán kính quanh tiệm. 0% kê giá, chặn click ảo, đo lường sát từng cuộc gọi và tin nhắn Zalo.'
    },
    outcomes: [
      {
        id: 'out-3-transparent',
        metric: '0% Kê Giá',
        title: 'Minh bạch 100% ngân sách quảng cáo',
        label: 'Minh bạch 100% ngân sách chi tiêu',
        description: 'Bạn tự thanh toán trực tiếp cho Google / Facebook qua thẻ ngân hàng, LocalMate chỉ thu phí kỹ thuật thiết lập.',
        highlight: 'Khách tự nắm giữ thẻ thanh toán'
      },
      {
        id: 'out-3-speed',
        metric: '24 - 48h',
        title: 'Bắt đầu có khách hỏi giá nhanh chóng',
        label: 'Có khách gọi sau 24 - 48 giờ',
        description: 'Chiến dịch quảng cáo được kích hoạt nhanh để đón đầu khách hàng đang có nhu cầu cần gấp.',
        highlight: 'Giải quyết ngay bài toán thiếu việc'
      },
      {
        id: 'out-3-tracking',
        metric: 'Chi Tiết',
        title: 'Đo lường chính xác chi phí từng liên hệ',
        label: 'Biết rõ chi phí trên mỗi cuộc gọi',
        description: 'Biết rõ mỗi cuộc gọi hotline hoặc lượt bấm chat Zalo tốn bao nhiêu tiền, không báo cáo chung chung số lượt xem ảo.',
        highlight: 'Báo cáo số liệu thực chiến'
      }
    ],
    problems: [
      {
        problem: 'Tự chạy Ads Google tiền trừ vèo vèo mà không có khách gọi',
        detail: 'Bị dính từ khóa mở rộng quá chung chung hoặc bị đối thủ trong vùng bấm click tặc làm cạn ngân sách trong buổi sáng.',
        iconName: 'AlertTriangle'
      },
      {
        problem: 'Thuê dịch vụ ngoài bị kê khống giá gấp 2-3 lần',
        detail: 'Đưa 5 triệu tiền quảng cáo nhưng bên dịch vụ chỉ nạp vào tài khoản 2 triệu, báo cáo gửi về chỉ có lượt xem ảo.',
        iconName: 'DollarSign'
      },
      {
        problem: 'Quảng cáo sửa chữa liên tục bị khóa tài khoản',
        detail: 'Ngành sửa laptop, điện thoại, máy lạnh hay bị Google đánh vi phạm chính sách bên thứ ba hoặc vi phạm bản quyền nhãn hiệu.',
        iconName: 'ShieldAlert'
      }
    ],
    commonProblems: [
      'Tự nạp tiền chạy quảng cáo Google nhưng tiền trừ rất nhanh mà không có cuộc gọi nào, nghi ngờ bị đối thủ bấm click tặc.',
      'Thuê các đơn vị quảng cáo ngoài nhưng bị kê khống ngân sách, báo cáo gửi về chỉ toàn số lượt xem và lượt tiếp cận chứ không có khách mua thật.',
      'Quảng cáo ngành sửa chữa (điện thoại, laptop, sửa điện lạnh) liên tục bị khóa tài khoản hoặc báo vi phạm chính sách bên thứ ba.',
      'Không cài mã theo dõi nên không biết khách gọi đến từ từ khóa nào, từ kênh Facebook hay từ tìm kiếm Google để tập trung ngân sách.'
    ],
    whatWeDo: [
      'Khởi tạo tài khoản quảng cáo chính chủ đứng tên khách hàng, cài đặt phương thức thanh toán an toàn, không thu % ngân sách.',
      'Nghiên cứu bộ từ khóa có nhu cầu mua cao nhất (từ khóa giao dịch) và thiết lập danh sách từ khóa phủ định để chặn triệt để click rác.',
      'Viết mẫu quảng cáo thực tế, nêu bật thế mạnh tay nghề, cam kết bảo hành và bảng giá minh bạch kèm nút bấm Gọi Ngay.',
      'Cài đặt bộ đo lường chuyển đổi thực tế: đếm chính xác số lần khách bấm nút Gọi, bấm nút Zalo hoặc điền form báo giá.',
      'Hỗ trợ kháng nghị tài khoản và xử lý lỗi vi phạm nhãn hiệu đối với ngành sửa chữa thiết bị công nghệ và gia dụng.'
    ],
    workflow: [
      {
        step: '01',
        title: 'Xác định dịch vụ chủ lực & Bán kính mục tiêu',
        duration: '1 buổi',
        localmateDoes: 'Lên danh sách từ khóa nhu cầu cao, viết mẫu quảng cáo và thiết lập bộ từ khóa phủ định chống click tặc.',
        clientDoes: 'Chốt ngân sách dự kiến (ví dụ: 100k - 200k/ngày) và cung cấp bán kính tiệm có thể phục vụ nhanh nhất.',
        outcome: 'Kế hoạch chạy quảng cáo rõ ràng với danh sách từ khóa mục tiêu'
      },
      {
        step: '02',
        title: 'Cài đặt kỹ thuật & Gắn mã đo chuyển đổi',
        duration: '1 ngày',
        localmateDoes: 'Khởi tạo chiến dịch trên tài khoản chính chủ của bạn, gắn mã đếm cuộc gọi và tin nhắn Zalo.',
        clientDoes: 'Thêm thẻ thanh toán cá nhân vào tài khoản Google/Facebook theo hướng dẫn bảo mật.',
        outcome: 'Tài khoản quảng cáo hoạt động dưới sự làm chủ 100% của bạn'
      },
      {
        step: '03',
        title: 'Theo dõi 72 giờ đầu & Chặn click tặc',
        duration: '3 ngày đầu',
        localmateDoes: 'Rà soát cụm từ tìm kiếm thực tế 24h/lần, loại bỏ ngay các từ khóa không liên quan để bảo toàn ngân sách.',
        clientDoes: 'Trực điện thoại, đón nhận cuộc gọi từ khách hàng và ghi nhận các thắc mắc thường gặp.',
        outcome: 'Chiến dịch đi vào quỹ đạo ổn định và tối ưu chi phí trên mỗi cuộc gọi'
      }
    ],
    capabilities: [
      {
        id: 'google-search-ads',
        name: 'Quảng Cáo Google Tìm Kiếm Địa Phương (Google Ads)',
        techName: 'Hyper-Local Google Search Ads Setup',
        tag: 'Tìm Kiếm',
        badge: 'Nhu Cầu Gấp',
        iconName: 'Target',
        shortDescription: 'Đón đầu khách hàng tìm kiếm khi có nhu cầu sửa chữa, mua sắm ngay.',
        description: 'Nhắm trúng khách hàng đang gõ tìm kiếm dịch vụ trong khu vực lân cận, hiển thị số hotline ngay trên mẫu quảng cáo để khách bấm gọi ngay.',
        plainLanguageMeaning: 'Khi người dân quanh tiệm gõ tìm thợ sửa chữa hoặc dịch vụ trên Google, quảng cáo của bạn hiện ra đầu tiên kèm số điện thoại.',
        practicalBenefit: 'Đón đúng khách hàng đang có nhu cầu thực sự khẩn cấp.',
        mappedCatalogServiceIds: ['28', '30']
      },
      {
        id: 'facebook-local-ads',
        name: 'Quảng Cáo Facebook Bán Kính 1-5km Quanh Tiệm',
        techName: 'Geo-Fenced Meta Ads Targeting',
        tag: 'Mạng Xã Hội',
        badge: 'Phủ Vùng',
        iconName: 'Compass',
        shortDescription: 'Cắm mốc GPS tiếp cận đúng người dân sinh sống trong khu vực lân cận.',
        description: 'Tiếp cận cư dân sinh sống trong khu vực lân cận với nội dung giới thiệu chân thực, video tay nghề thợ và chương trình ưu đãi rõ ràng.',
        plainLanguageMeaning: 'Quảng cáo video tay nghề và hình ảnh tiệm xuất hiện trên Facebook của những người sống cách tiệm 1-5km.',
        practicalBenefit: 'Tạo dựng sự quen thuộc và tin tưởng của bà con lối xóm.',
        mappedCatalogServiceIds: ['29']
      },
      {
        id: 'conversion-tracking-setup',
        name: 'Đo Lường Chi Phí Từng Cuộc Gọi & Tin Nhắn Zalo',
        techName: 'Call & Message Conversion Tracking Engine',
        tag: 'Đo Lường',
        badge: 'Đo Lường',
        iconName: 'BarChart2',
        shortDescription: 'Biết chính xác mỗi cuộc gọi, tin nhắn tốn bao nhiêu tiền quảng cáo.',
        description: 'Thiết lập bộ đo lường tự động ghi nhận chính xác mỗi khi khách hàng bấm Gọi Hotline, nhắn tin Zalo hoặc gửi yêu cầu báo giá.',
        plainLanguageMeaning: 'Hệ thống tự động đếm mỗi ngày có bao nhiêu người bấm Gọi và nhắn Zalo từ quảng cáo, giúp bạn biết rõ chi phí trên từng khách.',
        practicalBenefit: 'Biết chính xác chi phí thực tế bỏ ra để có được 1 cuộc gọi của khách.',
        mappedCatalogServiceIds: ['23', '24', '25', '26', '27']
      },
      {
        id: 'ads-policy-repair-fix',
        name: 'Khắc Phục Lỗi Quảng Cáo Ngành Sửa Chữa',
        techName: 'Third-Party Repair Policy Exemption & Whitelist',
        tag: 'Chính Sách',
        badge: 'Chuyên Sâu',
        iconName: 'AlertTriangle',
        shortDescription: 'Gỡ lỗi vi phạm chính sách bên thứ ba cho tiệm sửa chữa.',
        description: 'Chuẩn hóa website thêm disclaimer độc lập, gỡ bỏ vi phạm nhãn hiệu Trademark và nộp hồ sơ kháng nghị mở lại quyền chạy quảng cáo.',
        plainLanguageMeaning: 'Sửa lỗi vi phạm chính sách để các tiệm sửa điện thoại, máy tính, điều hòa được duyệt chạy quảng cáo bình thường.',
        practicalBenefit: 'Mở lại nguồn khách hàng đều đặn mà không sợ bị tạm khóa tài khoản vô cớ.',
        mappedCatalogServiceIds: ['31']
      }
    ],
    deliverables: [
      {
        id: 'del-3-campaign',
        title: 'Chiến dịch quảng cáo hoàn chỉnh & Minh bạch',
        description: 'Tài khoản và chiến dịch do chính bạn sở hữu và nắm giữ thẻ thanh toán.',
        items: [
          'Tài khoản Google Ads / Facebook Ads chính chủ 100%',
          'Bộ từ khóa mục tiêu bám sát dịch vụ địa phương kèm danh sách phủ định click ảo',
          'Các mẫu quảng cáo viết theo phong cách chân thành kèm nút Gọi & Chỉ đường',
          'Cài đặt vùng bán kính hiển thị chuẩn xác quanh cơ sở kinh doanh'
        ],
        ownershipTag: 'Khách tự nắm giữ tài khoản'
      },
      {
        id: 'del-3-tracking',
        title: 'Hệ thống đo lường cuộc gọi & Tin nhắn',
        description: 'Báo cáo thực tế tập trung vào những cuộc hội thoại mua hàng.',
        items: [
          'Mã theo dõi sự kiện bấm Hotline và bấm Zalo cài đặt hoàn chỉnh',
          'Bảng theo dõi số lượng liên hệ và chi phí trung bình trên mỗi khách hàng liên hệ',
          'Tài liệu hướng dẫn cách xem số dư và nạp tiền trực tiếp cho nền tảng'
        ],
        ownershipTag: 'Báo cáo minh bạch 100%'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Xác định dịch vụ chủ lực & Bán kính mục tiêu',
        description: 'Thống nhất dịch vụ mang lại lợi nhuận tốt nhất và phạm vi địa lý bạn có thể phục vụ nhanh nhất (3km, 5km hoặc toàn thành phố).',
        duration: '1 buổi'
      },
      {
        step: '02',
        title: 'Soạn thảo thông điệp & Thiết lập kỹ thuật',
        description: 'Viết nội dung quảng cáo thực tế, lọc bộ từ khóa phủ định chống click tặc và gắn mã theo dõi nút gọi.',
        duration: '1 ngày'
      },
      {
        step: '03',
        title: 'Kết nối thanh toán & Duyệt quảng cáo',
        description: 'Hướng dẫn bạn thêm thẻ ngân hàng cá nhân trực tiếp vào tài khoản và gửi nền tảng phê duyệt mẫu quảng cáo.',
        duration: '0.5 ngày'
      },
      {
        step: '04',
        title: 'Theo dõi 72 giờ đầu & Tối ưu chặn click ảo',
        description: 'Rà soát các cụm từ tìm kiếm thực tế của người dùng, bổ sung từ khóa phủ định để ngân sách chỉ tập trung vào khách có nhu cầu thật.',
        duration: '3 ngày đầu'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Xác định dịch vụ chủ lực & Bán kính mục tiêu',
        description: 'Thống nhất dịch vụ mang lại lợi nhuận tốt nhất và phạm vi địa lý bạn có thể phục vụ nhanh nhất (3km, 5km hoặc toàn thành phố).',
        duration: '1 buổi'
      },
      {
        step: '02',
        title: 'Soạn thảo thông điệp & Thiết lập kỹ thuật',
        description: 'Viết nội dung quảng cáo thực tế, lọc bộ từ khóa phủ định chống click tặc và gắn mã theo dõi nút gọi.',
        duration: '1 ngày'
      },
      {
        step: '03',
        title: 'Kết nối thanh toán & Duyệt quảng cáo',
        description: 'Hướng dẫn bạn thêm thẻ ngân hàng cá nhân trực tiếp vào tài khoản và gửi nền tảng phê duyệt mẫu quảng cáo.',
        duration: '0.5 ngày'
      },
      {
        step: '04',
        title: 'Theo dõi 72 giờ đầu & Tối ưu chặn click ảo',
        description: 'Rà soát các cụm từ tìm kiếm thực tế của người dùng, bổ sung từ khóa phủ định để ngân sách chỉ tập trung vào khách có nhu cầu thật.',
        duration: '3 ngày đầu'
      }
    ],
    useCases: [
      {
        id: 'uc-3-dienlanh',
        targetCustomer: 'Tiệm sửa chữa điện lạnh, lắp đặt máy lạnh, máy giặt',
        industryName: 'Sửa Chữa Điện Lạnh & Gia Dụng',
        iconName: 'Flame',
        scenario:
          'Vào đầu mùa nóng nhu cầu lắp đặt và vệ sinh máy lạnh tăng cao, nhưng tiệm không biết làm sao để khách quanh bán kính 5km biết đến và gọi thợ.',
        keySetup: [
          'Google Search Ads nhắm từ khóa sửa máy lạnh tại nhà',
          'Chặn danh sách 150+ từ khóa click tặc và tài liệu học nghề',
          'Nút bấm gọi Hotline trực tiếp ngay trên mẫu quảng cáo',
          'Quét bán kính 5km quanh tiệm để thợ chạy đến nhanh nhất'
        ],
        result:
          'Chạy chiến dịch Google Ads bán kính 5km với ngân sách 100k/ngày, mỗi ngày nhận đều đặn 3 - 6 cuộc gọi hỏi giá vệ sinh và sửa chữa máy lạnh.',
        resultHighlight: 'Chi phí trung bình chỉ 25.000đ - 35.000đ cho mỗi cuộc gọi chốt thợ'
      },
      {
        id: 'uc-3-nhomkinh',
        targetCustomer: 'Xưởng thi công nhôm kính Xingfa, cửa cuốn',
        industryName: 'Nhà Thầu Cửa Nhôm & Thi Công Kính',
        iconName: 'Store',
        scenario:
          'Muốn tìm khách hàng làm công trình nhà dân nhưng đăng bài Facebook cá nhân không ai hỏi, chạy quảng cáo rộng thì tốn tiền mà toàn khách ở quá xa.',
        keySetup: [
          'Quảng cáo Google tìm kiếm nhắm từ khóa làm cửa nhôm Xingfa',
          'Trang đích Sales Page chi tiết có video thi công thực tế',
          'Gắn mã theo dõi nút bấm gửi bản vẽ kích thước qua Zalo',
          'Ngân sách linh hoạt nạp trực tiếp qua thẻ'
        ],
        result:
          'Thiết lập chiến dịch Google Search nhắm trúng từ khóa làm cửa nhôm tại địa phương dẫn về trang Sales Page chi tiết, chi phí trung bình chỉ 35.000đ cho mỗi khách bấm nhắn tin Zalo gửi bản vẽ báo giá.',
        resultHighlight: 'Mỗi tuần chốt 1 - 2 hợp đồng thi công cửa nhôm nhà dân'
      }
    ],
    pricing: [
      {
        id: 'offer-ads-setup-google',
        name: 'Khởi Tạo Google Ads Địa Phương',
        priceDisplay: '390.000đ',
        numericPrice: 390000,
        unit: 'trọn gói',
        badge: '0% Kê Giá',
        description: 'Thiết lập trọn gói chiến dịch quảng cáo tìm kiếm Google chính chủ bám sát khu vực.',
        highlights: [
          'Tài khoản chính chủ 100%, khách tự thanh toán cho Google',
          'Lọc danh sách từ khóa phủ định hạn chế tối đa click tặc',
          'Viết mẫu quảng cáo thực tế kèm nút Gọi Hotline trực tiếp',
          'Cài đặt mã theo dõi lượt bấm gọi điện thoại'
        ],
        ctaText: 'Đăng Ký Cài Google Ads 390k'
      },
      {
        id: 'offer-ads-setup-meta',
        name: 'Quảng Cáo Facebook Bán Kính Quanh Tiệm',
        priceDisplay: '390.000đ',
        numericPrice: 390000,
        unit: 'trọn gói',
        description: 'Cắm mốc định vị GPS quét bán kính 1 - 5km tiếp cận đúng bà con lân cận.',
        highlights: [
          'Thiết lập bán kính GPS chuẩn xác quanh địa chỉ cửa hàng',
          'Thiết kế 02 banner hình ảnh thực tế và viết bài thu hút',
          'Cài đặt kịch bản tin nhắn tự động mở đầu cuộc trò chuyện',
          'Hướng dẫn quản lý hộp thư và trả lời khách nhanh'
        ],
        ctaText: 'Cài Đặt Facebook Ads 390k'
      },
      {
        id: 'offer-ads-mgmt-monthly',
        name: 'Quản Trị & Tối Ưu Chống Click Ảo Hàng Tháng',
        priceDisplay: '690.000đ',
        numericPrice: 690000,
        unit: 'tháng',
        badge: 'Khuyên Dùng ⭐',
        isPopular: true,
        description: 'Rà soát truy vấn 48h/lần, chặn từ khóa rác và tối ưu chi phí trên mỗi cuộc gọi phát sinh.',
        highlights: [
          'Rà soát báo cáo tìm kiếm 48 giờ/lần để phủ định từ khóa rác',
          'Điều chỉnh giá thầu theo khung giờ có nhiều khách gọi nhất',
          'Theo dõi và báo cáo số lượng cuộc gọi và tin nhắn thực tế',
          'Tư vấn cải thiện tỷ lệ chốt đơn khi tiếp nhận cuộc gọi'
        ],
        ctaText: 'Chọn Gói Quản Trị Ads'
      }
    ],
    pricingPackages: [
      {
        id: 'offer-ads-setup-google',
        name: 'Khởi Tạo Google Ads Địa Phương',
        priceDisplay: '390.000đ',
        numericPrice: 390000,
        unit: 'trọn gói',
        badge: '0% Kê Giá',
        description: 'Thiết lập trọn gói chiến dịch quảng cáo tìm kiếm Google chính chủ bám sát khu vực.',
        highlights: [
          'Tài khoản chính chủ 100%, khách tự thanh toán cho Google',
          'Lọc danh sách từ khóa phủ định hạn chế tối đa click tặc',
          'Viết mẫu quảng cáo thực tế kèm nút Gọi Hotline trực tiếp',
          'Cài đặt mã theo dõi lượt bấm gọi điện thoại'
        ],
        ctaText: 'Đăng Ký Cài Google Ads 390k'
      },
      {
        id: 'offer-ads-setup-meta',
        name: 'Quảng Cáo Facebook Bán Kính Quanh Tiệm',
        priceDisplay: '390.000đ',
        numericPrice: 390000,
        unit: 'trọn gói',
        description: 'Cắm mốc định vị GPS quét bán kính 1 - 5km tiếp cận đúng bà con lân cận.',
        highlights: [
          'Thiết lập bán kính GPS chuẩn xác quanh địa chỉ cửa hàng',
          'Thiết kế 02 banner hình ảnh thực tế và viết bài thu hút',
          'Cài đặt kịch bản tin nhắn tự động mở đầu cuộc trò chuyện',
          'Hướng dẫn quản lý hộp thư và trả lời khách nhanh'
        ],
        ctaText: 'Cài Đặt Facebook Ads 390k'
      },
      {
        id: 'offer-ads-mgmt-monthly',
        name: 'Quản Trị & Tối Ưu Chống Click Ảo Hàng Tháng',
        priceDisplay: '690.000đ',
        numericPrice: 690000,
        unit: 'tháng',
        badge: 'Khuyên Dùng ⭐',
        isPopular: true,
        description: 'Rà soát truy vấn 48h/lần, chặn từ khóa rác và tối ưu chi phí trên mỗi cuộc gọi phát sinh.',
        highlights: [
          'Rà soát báo cáo tìm kiếm 48 giờ/lần để phủ định từ khóa rác',
          'Điều chỉnh giá thầu theo khung giờ có nhiều khách gọi nhất',
          'Theo dõi và báo cáo số lượng cuộc gọi và tin nhắn thực tế',
          'Tư vấn cải thiện tỷ lệ chốt đơn khi tiếp nhận cuộc gọi'
        ],
        ctaText: 'Chọn Gói Quản Trị Ads'
      }
    ],
    faqs: [
      {
        question: 'LocalMate có cam kết ra bao nhiêu đơn hàng khi chạy quảng cáo không?',
        answer:
          'Không có bên nào có thể cam kết trước số đơn hàng vì việc chốt đơn còn phụ thuộc vào giá cả sản phẩm, tay nghề thợ và cách bạn tư vấn khi khách gọi đến. Tuy nhiên, LocalMate cam kết đưa quảng cáo đến đúng người có nhu cầu thật, chặn tối đa click ảo và đo lường chính xác từng cuộc gọi đến.'
      },
      {
        question: '0% phí kê giá là gì? Tôi sẽ nạp tiền quảng cáo như thế nào?',
        answer:
          'Nhiều bên nhận chạy quảng cáo thu 5 triệu nhưng chỉ nạp cho Google 2-3 triệu. Ở LocalMate, bạn dùng thẻ Visa/Mastercard của chính bạn để nạp tiền trực tiếp cho Google/Facebook. Bạn nạp bao nhiêu thì tài khoản hiển thị bấy nhiêu, LocalMate chỉ thu một khoản phí công thiết lập kỹ thuật cố định.'
      },
      {
        question: 'Ngành sửa chữa của tôi hay bị Google báo vi phạm chính sách bên thứ ba thì xử lý ra sao?',
        answer:
          'Google siết chặt chính sách đối với ngành sửa chữa điện tử, điện máy để chống lừa đảo. LocalMate có dịch vụ chuyên xử lý: thêm các tuyên bố miễn trừ độc lập trên website, gỡ bỏ logo thương hiệu vi phạm và nộp hồ sơ giải trình minh bạch để khôi phục tài khoản.'
      }
    ],
    relatedSolutionSlugs: ['/giai-phap/xay-nen-tang-so', '/giai-phap/van-hanh-tu-dong-hoa']
  },

  // =========================================================================
  // TRỤ CỘT 4: QUẢN LÝ & TỰ ĐỘNG HÓA VẬN HÀNH (van-hanh-tu-dong-hoa)
  // =========================================================================
  {
    id: 'van-hanh-tu-dong-hoa',
    slug: '/giai-phap/van-hanh-tu-dong-hoa',
    title: 'Quản lý & Tự động hóa vận hành',
    demandTitle: 'Không muốn bỏ sót khách khi đang bận việc dưới xưởng hay ngoài đường',
    subtitle: 'Chuông báo khách mới về Telegram tức thì, tự động lưu Google Sheets và trợ lý AI trực 24/7',
    badge: 'Trụ Cột 04 • Vận Hành & Tự Động Hóa',
    painPointPill: 'Khách điền form trôi vào email rác, bận việc quên gọi lại là mất khách',
    iconName: 'Cpu',
    customerProblem:
      'Có khách rồi nhưng vận hành thủ công, dễ sót tin nhắn, khách điền form trên web lúc đang bận làm việc thì không biết để gọi lại ngay, khách chờ lâu chuyển sang gọi chỗ khác.',
    promise: 'Số hóa quy trình tiếp nhận, chăm sóc và quản lý để giảm tải công việc thủ công.',
    summary:
      'LocalMate tự động hóa toàn bộ khâu tiếp nhận thông tin khách hàng từ website: chuông điện thoại báo tin nhắn Telegram/Zalo tức thì trong 3 giây, tự động lưu thông tin vào bảng tính Google Sheets và tích hợp trợ lý AI giải đáp thắc mắc 24/7.',
    heroDescription:
      'Số hóa khâu tiếp nhận khách hàng với chi phí 0đ duy trì hàng tháng. Chuông báo điện thoại đổ ngay trong 3 giây khi khách gửi form, tự động lưu trữ và phân loại trên Google Sheets.',
    targetAudience: 'Chủ tiệm, thợ thi công thường xuyên bận rộn ngoài công trình, cơ sở có nhiều đầu việc',
    breadcrumbs: [
      { label: 'Trang chủ', href: '/' },
      { label: 'Giải pháp', href: '/giai-phap' },
      { label: 'Quản lý & Tự động hóa vận hành', href: '/giai-phap/van-hanh-tu-dong-hoa' }
    ],
    meta: {
      title: 'Giải Pháp Quản Lý & Tự Động Hóa Vận Hành Khách Hàng | LocalMate',
      description: 'Báo chuông Telegram trong 3s khi có khách gửi thông tin. Tự động lưu Google Sheets, đặt lịch online và trợ lý AI trực 24/7 không phí duy trì.'
    },
    outcomes: [
      {
        id: 'out-4-speed',
        metric: '< 3s',
        title: 'Chuông báo khách mới tức thì',
        label: 'Chuông báo điện thoại reng sau 3 giây',
        description: 'Khách vừa bấm gửi yêu cầu trên web là điện thoại của bạn reng chuông báo qua Telegram hoặc Zalo ngay lập tức.',
        highlight: 'Gọi lại cho khách ngay khi họ đang cần'
      },
      {
        id: 'out-4-miss',
        metric: '0',
        title: 'Không còn tình trạng bỏ sót khách',
        label: '0 khách hàng bị bỏ sót',
        description: 'Dữ liệu được tự động đồng bộ tập trung vào bảng tính Google Sheets, không lo quên số điện thoại hay thất lạc sổ sách.',
        highlight: 'Quản lý khoa học, không lo thất lạc'
      },
      {
        id: 'out-4-ai',
        metric: '24/7',
        title: 'Tiếp nhận thông tin cả khi bạn ngủ',
        label: 'Tiếp nhận yêu cầu 24/7 liên tục',
        description: 'Hệ thống form đặt lịch và trợ lý AI luôn trực sẵn để giải đáp báo giá và ghi nhận thông tin khách hàng mọi lúc.',
        highlight: 'Không lo mất khách ban đêm'
      }
    ],
    problems: [
      {
        problem: 'Khách điền form nhưng trôi vào hộp thư rác email',
        detail: 'Cả tuần không mở máy tính kiểm tra email nên không hề biết có 5-7 khách hàng để lại số điện thoại xin báo giá.',
        iconName: 'AlertCircle'
      },
      {
        problem: 'Đang leo giàn giáo hoặc lái xe không tiện chép sổ',
        detail: 'Khách nhắn tin hỏi giá, định bụng tối về nhà ghi vào sổ nhưng đến tối thì quên mất hoặc số bị trôi tin nhắn.',
        iconName: 'Clock'
      },
      {
        problem: 'Nhắn tin qua lại hẹn giờ rất mất thời gian',
        detail: 'Khách hỏi đi hỏi lại: Ngày mai mấy giờ thợ qua được? khiến bạn mất nửa ngày chỉ để xếp lịch làm việc.',
        iconName: 'Calendar'
      }
    ],
    commonProblems: [
      'Khách vào website điền form yêu cầu tư vấn nhưng form gửi vào email, cả tuần không mở hộp thư rác nên mất trắng khách hàng.',
      'Đang bận leo giàn giáo, đang thi công dưới xưởng hoặc đang lái xe thì khách nhắn tin hỏi giá, đến tối về mở ra thì khách đã chốt bên khác.',
      'Quản lý khách hàng và đơn hàng bằng sổ tay hoặc ghi nhớ trong đầu, lúc bận rộn dễ quên lịch hẹn khảo sát công trình.',
      'Nhiều khách hỏi đi hỏi lại các câu hỏi cơ bản: địa chỉ ở đâu, giá sửa cái này khoảng bao nhiêu, mất nhiều thời gian trả lời lặp đi lặp lại.'
    ],
    whatWeDo: [
      'Kết nối form liên hệ trên website với ứng dụng nhắn tin Telegram / Zalo để gửi chuông báo kèm tên, số điện thoại và nhu cầu của khách ngay lập tức.',
      'Tự động lưu trữ thông tin khách hàng vào 1 file Google Sheets có tổ chức theo cột: Thời gian, Họ tên, SĐT, Dịch vụ cần làm, Trạng thái (Đã gọi / Chưa gọi).',
      'Cài đặt tính năng đặt lịch hẹn trực tuyến tự động cho các cơ sở dịch vụ (spa, nha khoa, gara sửa xe, đặt bàn ăn) chống trùng giờ.',
      'Tích hợp trợ lý ảo AI thông minh được huấn luyện theo tài liệu bảng giá của quán để tự động trả lời thắc mắc và lấy số điện thoại khách hàng 24/7.'
    ],
    workflow: [
      {
        step: '01',
        title: 'Khảo sát luồng nhận tin & Kênh tiếp nhận',
        duration: '0.5 ngày',
        localmateDoes: 'Khảo sát form hiện tại, thiết lập bot Telegram hoặc kết nối webhook với nhóm chat nội bộ của bạn.',
        clientDoes: 'Chỉ định ai là người trực tiếp nghe máy hoặc nhận chuông báo trong đội ngũ.',
        outcome: 'Quy trình tiếp nhận thông tin được chuẩn hóa và rõ ràng đầu mối'
      },
      {
        step: '02',
        title: 'Lập trình kết nối tự động hóa & Google Sheets',
        duration: '1 ngày',
        localmateDoes: 'Xây dựng kịch bản đẩy dữ liệu: Form web -> Báo chuông Telegram -> Điền 1 dòng vào Google Sheets.',
        clientDoes: 'Thử gửi thông tin từ điện thoại thật để nghe chuông reng kiểm tra.',
        outcome: 'Điện thoại reng chuông sau 3 giây mỗi khi có khách gửi số điện thoại'
      },
      {
        step: '03',
        title: 'Bàn giao bảng tính quản lý & Hướng dẫn sử dụng',
        duration: '0.5 ngày',
        localmateDoes: 'Bàn giao file Google Sheets phân quyền xem/sửa, hướng dẫn cách đổi trạng thái khách hàng.',
        clientDoes: 'Bắt đầu sử dụng trong công việc thực tế hàng ngày mà không mất thêm chi phí.',
        outcome: 'Chấm dứt hoàn toàn tình trạng thất lạc thông tin và chậm trễ gọi lại'
      }
    ],
    capabilities: [
      {
        id: 'instant-lead-alert',
        name: 'Báo Thông Báo Khách Mới Về Telegram / Zalo',
        techName: 'Instant Webhook Push Notifications',
        tag: 'Thông Báo',
        badge: 'Tức Thì',
        iconName: 'PhoneCall',
        shortDescription: 'Khách điền form là điện thoại reng chuông báo tin trong 3 giây.',
        description: 'Kết nối webhook tự động: khi khách gửi thông tin trên web, bot tự động gửi tin nhắn đẩy về nhóm chat nội bộ hoặc điện thoại cá nhân của bạn.',
        plainLanguageMeaning: 'Mỗi khi có khách bấm gửi số điện thoại trên web, điện thoại của bạn đổ chuông báo tin nhắn Telegram ngay.',
        practicalBenefit: 'Bạn gọi lại cho khách chỉ sau 2 phút, khách còn đang cầm máy nên tỷ lệ chốt đơn rất cao.',
        mappedCatalogServiceIds: ['34']
      },
      {
        id: 'auto-google-sheets-crm',
        name: 'Tự Động Đồng Bộ Khách Hàng Vào Google Sheets',
        techName: 'Serverless Google Sheets CRM Pipeline',
        tag: 'Lưu Trữ',
        badge: 'CRM Tinh Gọn',
        iconName: 'Cpu',
        shortDescription: 'Lưu trữ thông tin khách hàng vào bảng tính quản lý tinh gọn.',
        description: 'Toàn bộ liên hệ từ các nguồn được tự động thêm vào một bảng tính Google Sheets trung tâm, giúp chủ tiệm dễ dàng theo dõi và giao việc cho nhân viên.',
        plainLanguageMeaning: 'Tất cả khách hàng được tự động lưu vào 1 file Excel/Google Sheets gọn gàng trên điện thoại của bạn.',
        practicalBenefit: 'Không sợ mất sổ tay, dễ dàng xem lại lịch sử và phân công việc cho thợ phụ.',
        mappedCatalogServiceIds: ['32', '36']
      },
      {
        id: 'auto-booking-system',
        name: 'Hệ Thống Đặt Lịch Hẹn Trực Tuyến Tự Động',
        techName: 'Automated Real-Time Booking Engine',
        tag: 'Lịch Hẹn',
        badge: 'Tự Động',
        iconName: 'Zap',
        shortDescription: 'Khách tự chọn ngày giờ làm dịch vụ, hệ thống tự khóa khung giờ.',
        description: 'Phù hợp cho spa, phòng khám, salon hoặc dịch vụ bảo dưỡng: khách hàng tự chọn khung giờ còn trống và nhận thông báo xác nhận tự động.',
        plainLanguageMeaning: 'Khách tự chọn ngày giờ trên màn hình điện thoại, giờ nào có người đặt rồi thì hệ thống tự ẩn đi.',
        practicalBenefit: 'Tránh trùng lịch, đỡ mất hàng giờ nhắn tin qua lại với khách.',
        mappedCatalogServiceIds: ['33', '35']
      },
      {
        id: 'ai-chatbot-receptionist',
        name: 'Trợ Lý AI Tư Vấn & Lấy Số Điện Thoại 24/7',
        techName: '24/7 Knowledge-Grounded AI Receptionist',
        tag: 'Trợ Lý Ảo',
        badge: 'Trực 24/7',
        iconName: 'Cpu',
        shortDescription: 'AI trực website trả lời báo giá cơ bản và xin thông tin liên hệ.',
        description: 'Được huấn luyện bằng danh mục dịch vụ và câu hỏi thường gặp của cơ sở bạn, AI giải đáp thắc mắc của khách mọi lúc và khéo léo xin số điện thoại để bạn tư vấn tiếp.',
        plainLanguageMeaning: 'Một nhân viên trực chat AI thông minh luôn có mặt trên website để trả lời thắc mắc lúc đêm muộn và xin số điện thoại khách.',
        practicalBenefit: 'Không bỏ lỡ khách hàng ghé thăm website vào ngoài giờ hành chính.',
        mappedCatalogServiceIds: ['37', '38']
      }
    ],
    deliverables: [
      {
        id: 'del-4-alert',
        title: 'Hệ thống thông báo tức thì & Bảng quản lý khách',
        description: 'Quy trình nhận tin tự động không tốn phí duy trì phần mềm cồng kềnh.',
        items: [
          '01 Bot Telegram tự động báo tin nhắn kèm chuông điện thoại',
          '01 Bảng tính Google Sheets CRM tinh gọn phân quyền quản lý',
          'Form tiếp nhận thông tin tùy biến theo đặc thù ngành nghề',
          'Tự động gửi email hoặc tin nhắn xác nhận cho khách hàng'
        ],
        ownershipTag: 'Không mất phí duy trì hàng tháng'
      },
      {
        id: 'del-4-ai',
        title: 'Hệ thống trợ lý AI & Đặt lịch hẹn (Tùy chọn)',
        description: 'Tự động hóa khâu tiếp khách ban đầu trên website.',
        items: [
          'Cấu hình kịch bản trợ lý AI tư vấn theo bảng giá thực tế',
          'Hệ thống lịch hẹn online đồng bộ với lịch làm việc của cơ sở',
          'Tài liệu hướng dẫn quản lý và xem báo cáo khách hàng'
        ],
        ownershipTag: 'Bàn giao kịch bản hoàn chỉnh'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Khảo sát quy trình tiếp nhận khách hiện tại',
        description: 'Xác định ai là người trực tiếp nghe máy, nhận tin nhắn và bạn muốn nhận thông báo qua ứng dụng nào (Telegram, Zalo, Email).',
        duration: '0.5 ngày'
      },
      {
        step: '02',
        title: 'Thiết lập luồng tự động hóa & Kết nối',
        description: 'Lập trình kết nối form website -> Webhook xử lý -> Đẩy chuông báo tin nhắn và lưu vào Google Sheets.',
        duration: '1 ngày'
      },
      {
        step: '03',
        title: 'Kiểm thử thực tế & Mô phỏng khách gửi tin',
        description: 'Thử gửi thông tin từ điện thoại thật để kiểm tra độ trễ chuông báo và độ chính xác của các trường dữ liệu.',
        duration: '0.5 ngày'
      },
      {
        step: '04',
        title: 'Bàn giao & Hướng dẫn sử dụng',
        description: 'Hướng dẫn chủ tiệm và nhân viên cách xem bảng tính, cập nhật trạng thái chăm sóc khách hàng.',
        duration: '1 buổi'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Khảo sát quy trình tiếp nhận khách hiện tại',
        description: 'Xác định ai là người trực tiếp nghe máy, nhận tin nhắn và bạn muốn nhận thông báo qua ứng dụng nào (Telegram, Zalo, Email).',
        duration: '0.5 ngày'
      },
      {
        step: '02',
        title: 'Thiết lập luồng tự động hóa & Kết nối',
        description: 'Lập trình kết nối form website -> Webhook xử lý -> Đẩy chuông báo tin nhắn và lưu vào Google Sheets.',
        duration: '1 ngày'
      },
      {
        step: '03',
        title: 'Kiểm thử thực tế & Mô phỏng khách gửi tin',
        description: 'Thử gửi thông tin từ điện thoại thật để kiểm tra độ trễ chuông báo và độ chính xác của các trường dữ liệu.',
        duration: '0.5 ngày'
      },
      {
        step: '04',
        title: 'Bàn giao & Hướng dẫn sử dụng',
        description: 'Hướng dẫn chủ tiệm và nhân viên cách xem bảng tính, cập nhật trạng thái chăm sóc khách hàng.',
        duration: '1 buổi'
      }
    ],
    useCases: [
      {
        id: 'uc-4-emergency',
        targetCustomer: 'Dịch vụ sửa ống nước, thợ khóa, cứu hộ xe',
        industryName: 'Thợ Khẩn Cấp & Cứu Hộ',
        iconName: 'Truck',
        scenario:
          'Khách hàng gặp sự cố thường cần thợ gọi lại ngay trong 5 phút. Nếu thợ không hay biết form đã gửi thì khách sẽ lập tức gọi bên khác.',
        keySetup: [
          'Form gửi vị trí và số điện thoại cấp tốc',
          'Chuông báo Telegram đổ chuông to như cuộc gọi đến',
          'Nút bấm gọi lại trực tiếp từ tin nhắn bot trong 1 chạm',
          'Lưu tọa độ sự cố vào bảng tính để điều thợ gần nhất'
        ],
        result:
          'Sau khi kết nối báo tin Telegram, điện thoại thợ đổ chuông ngay khi khách bấm gửi số điện thoại. Thợ gọi lại sau 2 phút và tỷ lệ chốt đơn đạt trên 80%.',
        resultHighlight: 'Thời gian gọi lại cho khách giảm từ 45 phút xuống dưới 2 phút'
      },
      {
        id: 'uc-4-spa',
        targetCustomer: 'Tiệm spa, phòng khám thú cưng, làm móng nail',
        industryName: 'Spa & Chăm Sóc Sức Khỏe',
        iconName: 'HeartPulse',
        scenario:
          'Chủ tiệm vừa làm dịch vụ vừa phải trả lời tin nhắn hỏi: Còn chỗ lúc 3 giờ chiều không em? dẫn đến gián đoạn công việc và hay nhầm lẫn lịch hẹn.',
        keySetup: [
          'Lịch đặt hẹn online hiển thị khung giờ còn trống',
          'Khóa khung giờ tự động khi có khách đăng ký',
          'Gửi tin nhắn xác nhận lịch hẹn tự động cho khách',
          'Thông báo nhắc lịch hẹn trước 2 giờ'
        ],
        result:
          'Khách hàng tự vào web xem khung giờ trống và đặt lịch, hệ thống tự khóa lịch và gửi thông báo xác nhận, tiết kiệm 1-2 tiếng nhắn tin mỗi ngày.',
        resultHighlight: 'Tiết kiệm 1.5 giờ trả lời tin nhắn mỗi ngày cho chủ tiệm'
      }
    ],
    pricing: [
      {
        id: 'offer-alert-telegram',
        name: 'Báo Tin Nhắn Đơn Hàng Về Telegram',
        priceDisplay: '299.000đ',
        numericPrice: 299000,
        unit: 'trọn gói',
        description: 'Điện thoại reng chuông thông báo ngay khi có khách điền form yêu cầu trên website.',
        highlights: [
          'Chuông báo tin nhắn tức thì về Telegram cá nhân hoặc nhóm',
          'Hiển thị đầy đủ Tên, SĐT, Địa chỉ và nhu cầu của khách',
          'Không tốn bất kỳ chi phí duy trì hàng tháng nào',
          'Cài đặt nhanh hoàn thành trong 60 phút'
        ],
        ctaText: 'Cài Chuông Báo Telegram 299k'
      },
      {
        id: 'offer-crm-sheets',
        name: 'Tự Động Đẩy Khách Về Google Sheets & Telegram',
        priceDisplay: '490.000đ',
        numericPrice: 490000,
        unit: 'trọn gói',
        badge: 'Khuyên Dùng ⭐',
        isPopular: true,
        description: 'Combo hoàn chỉnh: vừa báo chuông điện thoại vừa lưu thông tin vào bảng tính trung tâm.',
        highlights: [
          'Bao gồm toàn bộ tính năng chuông báo Telegram tức thì',
          'Tự động ghi nhận thông tin khách vào Google Sheets',
          'Có sẵn cột phân loại: Chưa gọi, Đã báo giá, Đã chốt đơn',
          'Bàn giao quyền quản trị cho chủ tiệm chia sẻ cho nhân viên'
        ],
        ctaText: 'Chọn Gói Sheets + Telegram'
      },
      {
        id: 'offer-booking-system',
        name: 'Hệ Thống Đặt Lịch Hẹn / Đặt Bàn Trực Tuyến',
        priceDisplay: '690.000đ',
        numericPrice: 690000,
        unit: 'trọn gói',
        description: 'Hệ thống đặt hẹn tự động cho khách chọn ngày giờ và nhận thông báo xác nhận.',
        highlights: [
          'Giao diện chọn ngày giờ trực quan trên màn hình điện thoại',
          'Tự động khóa các khung giờ đã có người đặt tránh trùng lịch',
          'Gửi thông báo lịch hẹn mới cho chủ tiệm và khách hàng',
          'Tích hợp mượt mà vào trang web hiện có của bạn'
        ],
        ctaText: 'Đăng Ký Đặt Lịch Online'
      }
    ],
    pricingPackages: [
      {
        id: 'offer-alert-telegram',
        name: 'Báo Tin Nhắn Đơn Hàng Về Telegram',
        priceDisplay: '299.000đ',
        numericPrice: 299000,
        unit: 'trọn gói',
        description: 'Điện thoại reng chuông thông báo ngay khi có khách điền form yêu cầu trên website.',
        highlights: [
          'Chuông báo tin nhắn tức thì về Telegram cá nhân hoặc nhóm',
          'Hiển thị đầy đủ Tên, SĐT, Địa chỉ và nhu cầu của khách',
          'Không tốn bất kỳ chi phí duy trì hàng tháng nào',
          'Cài đặt nhanh hoàn thành trong 60 phút'
        ],
        ctaText: 'Cài Chuông Báo Telegram 299k'
      },
      {
        id: 'offer-crm-sheets',
        name: 'Tự Động Đẩy Khách Về Google Sheets & Telegram',
        priceDisplay: '490.000đ',
        numericPrice: 490000,
        unit: 'trọn gói',
        badge: 'Khuyên Dùng ⭐',
        isPopular: true,
        description: 'Combo hoàn chỉnh: vừa báo chuông điện thoại vừa lưu thông tin vào bảng tính trung tâm.',
        highlights: [
          'Bao gồm toàn bộ tính năng chuông báo Telegram tức thì',
          'Tự động ghi nhận thông tin khách vào Google Sheets',
          'Có sẵn cột phân loại: Chưa gọi, Đã báo giá, Đã chốt đơn',
          'Bàn giao quyền quản trị cho chủ tiệm chia sẻ cho nhân viên'
        ],
        ctaText: 'Chọn Gói Sheets + Telegram'
      },
      {
        id: 'offer-booking-system',
        name: 'Hệ Thống Đặt Lịch Hẹn / Đặt Bàn Trực Tuyến',
        priceDisplay: '690.000đ',
        numericPrice: 690000,
        unit: 'trọn gói',
        description: 'Hệ thống đặt hẹn tự động cho khách chọn ngày giờ và nhận thông báo xác nhận.',
        highlights: [
          'Giao diện chọn ngày giờ trực quan trên màn hình điện thoại',
          'Tự động khóa các khung giờ đã có người đặt tránh trùng lịch',
          'Gửi thông báo lịch hẹn mới cho chủ tiệm và khách hàng',
          'Tích hợp mượt mà vào trang web hiện có của bạn'
        ],
        ctaText: 'Đăng Ký Đặt Lịch Online'
      }
    ],
    faqs: [
      {
        question: 'Sử dụng hệ thống tự động qua Telegram và Google Sheets có phải trả phí duy trì hàng tháng không?',
        answer:
          'Hoàn toàn không mất phí duy trì. Telegram và Google Sheets là các nền tảng miễn phí. Bạn chỉ trả phí thiết lập kỹ thuật một lần duy nhất cho LocalMate.'
      },
      {
        question: 'Tôi có thể thêm người nhà hoặc nhân viên vào nhận chuông báo cùng không?',
        answer:
          'Có thể thêm bao nhiêu người tùy thích. LocalMate sẽ tạo một nhóm Telegram chung, bất kỳ khi nào có khách mới thì tất cả mọi người trong nhóm đều nhận được chuông thông báo cùng lúc.'
      },
      {
        question: 'Nếu website của tôi làm từ đơn vị khác, LocalMate có tích hợp được tính năng này không?',
        answer:
          'Có. LocalMate hỗ trợ tích hợp luồng tự động hóa thông báo cho hầu hết các loại website hiện có (WordPress, Ladipage, Web tự code HTML/PHP) chỉ trong vòng 1-2 giờ làm việc.'
      }
    ],
    relatedSolutionSlugs: ['/giai-phap/xay-nen-tang-so', '/giai-phap/dong-hanh-cham-soc']
  },

  // =========================================================================
  // TRỤ CỘT 5: CHĂM SÓC & ĐỒNG HÀNH KỸ THUẬT (dong-hanh-cham-soc)
  // =========================================================================
  {
    id: 'dong-hanh-cham-soc',
    slug: '/giai-phap/dong-hanh-cham-soc',
    title: 'Chăm sóc & Đồng hành kỹ thuật',
    demandTitle: 'Cần có một đội ngũ kỹ thuật tin cậy để an tâm kinh doanh',
    subtitle: 'Bảo trì website 24/7, cập nhật nội dung qua Zalo và hỗ trợ kỹ thuật lâu dài cho doanh nghiệp',
    badge: 'Trụ Cột 05 • Đồng Hành & Bảo Trì',
    painPointPill: 'Website lỗi không ai sửa, bên làm web cũ biến mất, đổi giá bị chặt chém',
    iconName: 'ShieldCheck',
    customerProblem:
      'Làm xong không biết ai duy trì, website bị lỗi không biết kêu ai, bên làm web cũ biến mất hoặc đòi phí sửa chữa trên trời, muốn thay đổi số điện thoại hay cập nhật bảng giá cũng không làm được.',
    promise: 'Duy trì hệ thống ổn định, hỗ trợ kỹ thuật kịp thời để bạn yên tâm kinh doanh.',
    summary:
      'LocalMate đóng vai trò như bộ phận kỹ thuật số tin cậy cho doanh nghiệp nhỏ: định kỳ kiểm tra website hoạt động 24/7, sao lưu dữ liệu an toàn, xử lý sự cố nhanh qua Zalo và cập nhật bảng giá, bài viết mới đều đặn hàng tháng.',
    heroDescription:
      'Đồng hành kỹ thuật toàn diện cho doanh nghiệp nhỏ: hỗ trợ trực tiếp qua Zalo xử lý trong ngày, bảo hành kỹ thuật 5 năm và hỗ trợ thủ tục thông báo website với Bộ Công Thương.',
    targetAudience: 'Doanh nghiệp không có nhân viên IT/marketing riêng, muốn an tâm vận hành dài hạn',
    breadcrumbs: [
      { label: 'Trang chủ', href: '/' },
      { label: 'Giải pháp', href: '/giai-phap' },
      { label: 'Chăm sóc & Đồng hành kỹ thuật', href: '/giai-phap/dong-hanh-cham-soc' }
    ],
    meta: {
      title: 'Giải Pháp Chăm Sóc & Đồng Hành Kỹ Thuật Website | LocalMate',
      description: 'Đồng hành kỹ thuật số tin cậy: bảo trì 24/7, cập nhật giá qua Zalo trong 30p, bảo hành 5 năm và hoàn thiện pháp lý Bộ Công Thương.'
    },
    outcomes: [
      {
        id: 'out-5-uptime',
        metric: '24/7',
        title: 'Giám sát hệ thống hoạt động liên tục',
        label: 'Giám sát hoạt động 24/7 liên tục',
        description: 'Đảm bảo website luôn mở nhanh, nút gọi thoại luôn hoạt động và không bao giờ bị gián đoạn tiếp nhận khách.',
        highlight: 'An tâm không lo lỗi web'
      },
      {
        id: 'out-5-sla',
        metric: '< 24h',
        title: 'Xử lý lỗi và hỗ trợ thay đổi nhanh chóng',
        label: 'Xử lý yêu cầu nhanh trong 24h',
        description: 'Cần đổi số điện thoại, đổi giá hay sửa chữ, chỉ cần nhắn 1 tin qua Zalo là kỹ thuật viên xử lý ngay.',
        highlight: 'Chỉ cần gửi tin nhắn Zalo'
      },
      {
        id: 'out-5-warranty',
        metric: '5 Năm',
        title: 'Cam kết bảo hành kỹ thuật lâu dài',
        label: 'Bảo hành kỹ thuật dài hạn 5 năm',
        description: 'Không lo tình trạng làm xong bàn giao rồi đem con bỏ chợ, luôn có đầu mối kỹ thuật chịu trách nhiệm đồng hành.',
        highlight: 'Đồng hành dài hạn cùng doanh nghiệp'
      }
    ],
    problems: [
      {
        problem: 'Bên làm web cũ bàn giao xong rồi biến mất',
        detail: 'Website bị lỗi trắng trang hoặc hết hạn SSL không liên lạc được ai, gọi điện thoại thì thuê bao.',
        iconName: 'AlertCircle'
      },
      {
        problem: 'Đổi số hotline hay thêm 1 bài viết bị đòi phí tiền triệu',
        detail: 'Những việc nhỏ sửa mất 5 phút nhưng bị các đơn vị khác tính phí phát sinh cắt cổ.',
        iconName: 'DollarSign'
      },
      {
        problem: 'Lo lắng bị phạt vì chưa đăng ký với Bộ Công Thương',
        detail: 'Không nắm rõ quy định pháp lý thương mại điện tử, sợ bị thanh tra kiểm tra và xử phạt hành chính.',
        iconName: 'ShieldAlert'
      }
    ],
    commonProblems: [
      'Website làm xong vài tháng thì bị lỗi trắng trang, bị nhiễm mã độc hoặc hết hạn chứng chỉ bảo mật nhưng đơn vị làm web trước không liên lạc được.',
      'Mỗi lần muốn đổi số hotline, thay địa chỉ cửa hàng hoặc đăng vài tấm ảnh công trình mới thì bị báo giá hàng triệu đồng phí phát sinh.',
      'Google Maps bị người lạ đổi số điện thoại hoặc sửa tên mà không hay biết, dẫn đến mất khách hàng vào tay đối thủ.',
      'Website chưa hoàn tất thủ tục thông báo với Bộ Công Thương theo quy định, lo sợ bị cơ quan quản lý kiểm tra và xử phạt.'
    ],
    whatWeDo: [
      'Giám sát thời gian hoạt động (uptime) của website 24/7, tự động phát hiện và xử lý ngay khi có sự cố kỹ thuật.',
      'Sao lưu (backup) định kỳ toàn bộ dữ liệu trang web đề phòng sự cố máy chủ hoặc mất mát thông tin.',
      'Tiếp nhận các yêu cầu sửa đổi nhỏ (thay banner, sửa giá, cập nhật số điện thoại, đăng ảnh mới) qua Zalo và xử lý trong ngày.',
      'Chăm sóc hồ sơ Google Maps: kiểm tra định kỳ, bảo vệ thông tin vị trí, hỗ trợ phản hồi đánh giá và bổ sung hình ảnh mới.',
      'Hỗ trợ thủ tục kiểm tra tính tuân thủ pháp lý và thực hiện thủ tục thông báo website với Bộ Công Thương.'
    ],
    workflow: [
      {
        step: '01',
        title: 'Tiếp nhận hệ thống & Khảo sát bảo mật 0đ',
        duration: '1 ngày',
        localmateDoes: 'Rà soát hiện trạng website, kiểm tra chứng chỉ SSL, dọn dẹp mã độc nếu có và tạo bản backup khởi đầu.',
        clientDoes: 'Cung cấp đường link website đang chạy và thông tin quản trị (nếu có).',
        outcome: 'Website được đưa vào hệ thống giám sát an toàn 24/7'
      },
      {
        step: '02',
        title: 'Tạo nhóm hỗ trợ Zalo riêng phụ trách',
        duration: '30 phút',
        localmateDoes: 'Thành lập nhóm Zalo riêng gồm kỹ thuật viên phụ trách chính để tiếp nhận mọi yêu cầu.',
        clientDoes: 'Tham gia nhóm Zalo và gửi các yêu cầu sửa đổi nội dung bất cứ khi nào phát sinh.',
        outcome: 'Có ngay đường dây nóng kỹ thuật chuyên nghiệp hỗ trợ 24/7'
      },
      {
        step: '03',
        title: 'Vận hành định kỳ & Báo cáo minh bạch cuối tháng',
        duration: 'Hàng tháng',
        localmateDoes: 'Kiểm tra bảo mật, backup dữ liệu, cập nhật nội dung và gửi báo cáo tổng kết lượt khách gọi.',
        clientDoes: 'Tập trung vào kinh doanh và tiếp đón khách hàng.',
        outcome: 'Hệ sinh thái số luôn mới mẻ, ổn định và tuân thủ đầy đủ pháp lý'
      }
    ],
    capabilities: [
      {
        id: 'website-maintenance-backup',
        name: 'Bảo Trì Kỹ Thuật & Sao Lưu Dữ Liệu Định Kỳ',
        techName: '24/7 Uptime Monitoring & Automated Backups',
        tag: 'Bảo Trì',
        badge: 'An Toàn',
        iconName: 'ShieldCheck',
        shortDescription: 'Giám sát website 24/7 và sao lưu an toàn.',
        description: 'Kiểm tra tình trạng hoạt động của hosting, chứng chỉ bảo mật SSL, hệ thống form liên hệ và tạo bản sao lưu dữ liệu an toàn.',
        plainLanguageMeaning: 'Hệ thống tự động theo dõi để web không bao giờ bị sập, dữ liệu được sao lưu định kỳ đề phòng mọi sự cố.',
        practicalBenefit: 'Bạn hoàn toàn an tâm vì website luôn hoạt động trơn tru không gián đoạn.',
        mappedCatalogServiceIds: ['09', '11', '12', '13']
      },
      {
        id: 'content-update-support',
        name: 'Cập Nhật Nội Dung & Hỗ Trợ Sửa Nhanh Qua Zalo',
        techName: 'Dedicated Zalo Helpdesk & Content Updates',
        tag: 'Hỗ Trợ',
        badge: 'Linh Hoạt',
        iconName: 'PhoneCall',
        shortDescription: 'Cần đổi giá, sửa số hotline chỉ cần nhắn Zalo.',
        description: 'Hỗ trợ thay đổi nội dung, thêm bài viết dịch vụ mới, cập nhật bảng giá và hình ảnh công trình mà không mất thêm chi phí.',
        plainLanguageMeaning: 'Mỗi khi muốn đổi số hotline, sửa giá hay thêm vài tấm ảnh mới, bạn chỉ cần gửi tin nhắn Zalo là xong.',
        practicalBenefit: 'Không lo bị chặt chém phí phát sinh lặt vặt cho những thay đổi nhỏ.',
        mappedCatalogServiceIds: ['09', '10']
      },
      {
        id: 'google-maps-care',
        name: 'Chăm Sóc & Bảo Vệ Vị Trí Google Maps Định Kỳ',
        techName: 'Google Business Profile Safeguard & Posts',
        tag: 'Bản Đồ',
        badge: 'Bảo Vệ',
        iconName: 'MapPin',
        shortDescription: 'Giữ vững thông tin chính chủ và bổ sung hình ảnh định kỳ.',
        description: 'Theo dõi sự thay đổi trên hồ sơ doanh nghiệp, ngăn chặn hành vi sửa đổi lén từ đối thủ, đăng bài cập nhật và hỗ trợ trả lời đánh giá.',
        plainLanguageMeaning: 'Giữ cho hồ sơ bản đồ luôn chính xác, ngăn kẻ xấu sửa đổi thông tin lén và đăng ảnh mới đều đặn.',
        practicalBenefit: 'Bảo vệ tài sản số quan trọng, giữ vững uy tín thương hiệu chân thực với khách hàng.',
        mappedCatalogServiceIds: ['22']
      },
      {
        id: 'legal-bct-compliance',
        name: 'Hỗ Trợ Pháp Lý & Khai Báo Bộ Công Thương',
        techName: 'E-commerce Legal Compliance & MoIT Badge',
        tag: 'Pháp Lý',
        badge: 'Tuân Thủ',
        iconName: 'FileText',
        shortDescription: 'Chuẩn hóa bộ chính sách và hỗ trợ gắn huy hiệu BCT.',
        description: 'Kiểm tra tính tuân thủ, bổ sung 4 trang chính sách chuẩn (Chính sách bảo mật, Điều khoản dịch vụ...) và hỗ trợ nộp hồ sơ thông báo với Bộ Công Thương.',
        plainLanguageMeaning: 'Bổ sung đầy đủ các trang điều khoản theo luật và hướng dẫn thủ tục để có logo xanh của Bộ Công Thương.',
        practicalBenefit: 'Yên tâm tuyệt đối về mặt pháp lý, không sợ bị xử phạt hành chính.',
        mappedCatalogServiceIds: ['41a', '41b', '41c', '41d', '41e']
      },
      {
        id: 'monthly-growth-reporting',
        name: 'Báo Cáo Hiệu Quả & Minh Bạch Số Liệu Hàng Tháng',
        techName: 'Monthly Conversion & Health Summary',
        tag: 'Báo Cáo',
        badge: 'Minh Bạch',
        iconName: 'BarChart2',
        shortDescription: 'Tổng kết số lượt khách gọi, bấm Zalo và tìm thấy cơ sở.',
        description: 'Gửi báo cáo định kỳ rõ ràng: bao nhiêu người đã tìm thấy bạn trên Google, bao nhiêu người bấm nút gọi và gợi ý những điểm cần tối ưu tiếp theo.',
        plainLanguageMeaning: 'Báo cáo ngắn gọn dễ hiểu vào cuối tháng: có bao nhiêu người tìm thấy bạn và có bao nhiêu cuộc gọi.',
        practicalBenefit: 'Nắm chắc hiệu quả đầu tư và biết rõ công việc kinh doanh đang phát triển ra sao.',
        mappedCatalogServiceIds: ['23', '25']
      }
    ],
    deliverables: [
      {
        id: 'del-5-desk',
        title: 'Kênh hỗ trợ kỹ thuật trực tiếp qua Zalo',
        description: 'Nhóm hỗ trợ riêng dành cho cơ sở của bạn.',
        items: [
          '01 Nhóm hỗ trợ Zalo kết nối trực tiếp với kỹ thuật viên phụ trách',
          'Cam kết phản hồi trong vòng 30 phút trong giờ làm việc',
          'Hạn mức xử lý các công việc nhỏ định kỳ hàng tháng theo gói',
          'Bản ghi sao lưu (backup) lưu trữ tại máy chủ an toàn'
        ],
        ownershipTag: 'Hỗ trợ kỹ thuật 1-1'
      },
      {
        id: 'del-5-legal',
        title: 'Báo cáo vận hành & Hồ sơ tuân thủ',
        description: 'Minh bạch tình trạng hệ thống số.',
        items: [
          'Báo cáo tình trạng hoạt động và lượt khách liên hệ hàng tháng',
          'Bộ 4 trang chính sách pháp lý chuẩn hóa trên website',
          'Hồ sơ hỗ trợ nộp thủ tục Cổng thông tin Bộ Công Thương (nếu đăng ký)'
        ],
        ownershipTag: 'Tuân thủ pháp lý 100%'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Tiếp nhận hệ thống & Kiểm tra sức khỏe',
        description: 'Rà soát hiện trạng website, kiểm tra mã nguồn, cấu hình tên miền, SSL và lập bản sao lưu khởi đầu.',
        duration: '1 ngày'
      },
      {
        step: '02',
        title: 'Thiết lập nhóm hỗ trợ Zalo riêng',
        description: 'Tạo nhóm kết nối giữa chủ cơ sở và kỹ thuật viên LocalMate để trao đổi công việc nhanh chóng.',
        duration: '30 phút'
      },
      {
        step: '03',
        title: 'Thực hiện công việc định kỳ & Xử lý yêu cầu',
        description: 'Hàng tháng thực hiện kiểm tra bảo trì, cập nhật nội dung khi bạn gửi yêu cầu và chăm sóc Google Maps.',
        duration: 'Đều đặn hàng tháng'
      },
      {
        step: '04',
        title: 'Gửi báo cáo tổng kết & Đề xuất cải thiện',
        description: 'Vào cuối mỗi tháng, gửi báo cáo ngắn gọn về lượt khách gọi và những điểm cần lưu ý cho tháng tiếp theo.',
        duration: 'Cuối tháng'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Tiếp nhận hệ thống & Kiểm tra sức khỏe',
        description: 'Rà soát hiện trạng website, kiểm tra mã nguồn, cấu hình tên miền, SSL và lập bản sao lưu khởi đầu.',
        duration: '1 ngày'
      },
      {
        step: '02',
        title: 'Thiết lập nhóm hỗ trợ Zalo riêng',
        description: 'Tạo nhóm kết nối giữa chủ cơ sở và kỹ thuật viên LocalMate để trao đổi công việc nhanh chóng.',
        duration: '30 phút'
      },
      {
        step: '03',
        title: 'Thực hiện công việc định kỳ & Xử lý yêu cầu',
        description: 'Hàng tháng thực hiện kiểm tra bảo trì, cập nhật nội dung khi bạn gửi yêu cầu và chăm sóc Google Maps.',
        duration: 'Đều đặn hàng tháng'
      },
      {
        step: '04',
        title: 'Gửi báo cáo tổng kết & Đề xuất cải thiện',
        description: 'Vào cuối mỗi tháng, gửi báo cáo ngắn gọn về lượt khách gọi và những điểm cần lưu ý cho tháng tiếp theo.',
        duration: 'Cuối tháng'
      }
    ],
    useCases: [
      {
        id: 'uc-5-biz',
        targetCustomer: 'Chủ doanh nghiệp nhỏ, thợ làm nghề bận rộn',
        industryName: 'Chủ Doanh Nghiệp Nhỏ & Xưởng Dịch Vụ',
        iconName: 'Briefcase',
        scenario:
          'Muốn thay đổi số điện thoại hotline vì đổi nhân viên mới, nhưng người làm web trước đây gọi không nghe máy hoặc đòi phí 500k cho mỗi lần đổi số.',
        keySetup: [
          'Nhóm hỗ trợ Zalo riêng với kỹ thuật viên',
          'Đổi hotline và cập nhật bảng giá chỉ trong 15 phút',
          'Tự động kiểm tra trạng thái hoạt động website mỗi ngày',
          'Cam kết bảo hành kỹ thuật 5 năm'
        ],
        result:
          'Tham gia gói chăm sóc của LocalMate, chỉ cần gửi tin nhắn Zalo kèm số mới, kỹ thuật viên cập nhật xong trong 15 phút, trang web hoạt động liên tục không gián đoạn.',
        resultHighlight: 'Xử lý mọi thay đổi nhỏ qua Zalo trong 15-30 phút không tính phí'
      },
      {
        id: 'uc-5-legal',
        targetCustomer: 'Công ty thương mại, dịch vụ tại địa phương',
        industryName: 'Doanh Nghiệp Thương Mại & Bán Lẻ',
        iconName: 'ShieldCheck',
        scenario:
          'Lo lắng bị cơ quan chức năng phạt vì website bán hàng chưa có thông báo với Bộ Công Thương và chưa có các trang chính sách bắt buộc.',
        keySetup: [
          'Soạn thảo bộ 4 trang chính sách chuẩn pháp lý',
          'Hướng dẫn nộp hồ sơ thông báo lên cổng online.gov.vn',
          'Gắn huy hiệu xanh chính thức của Bộ Công Thương',
          'Định kỳ sao lưu dữ liệu hóa đơn và khách hàng'
        ],
        result:
          'LocalMate chuẩn hóa toàn bộ 4 trang chính sách và hướng dẫn hoàn tất thủ tục gắn huy hiệu xanh của Bộ Công Thương, an tâm kinh doanh lâu dài.',
        resultHighlight: 'Hoàn tất thủ tục thông báo Bộ Công Thương hợp lệ 100%'
      }
    ],
    pricing: [
      {
        id: 'offer-care-mini',
        name: 'Gói Chăm Sóc Care Mini',
        priceDisplay: '290.000đ',
        numericPrice: 290000,
        unit: 'tháng',
        description: 'Dành cho website nhỏ cần an tâm về kỹ thuật và có người hỗ trợ khi gặp sự cố.',
        highlights: [
          'Giám sát website hoạt động 24/7',
          'Sao lưu dữ liệu định kỳ an toàn',
          'Hỗ trợ thay đổi/sửa lỗi nhỏ: 2 việc / tháng',
          'Hỗ trợ kỹ thuật nhanh chóng qua Zalo'
        ],
        ctaText: 'Đăng Ký Gói 290k/Tháng'
      },
      {
        id: 'offer-care-business',
        name: 'Gói Chăm Sóc Care Business',
        priceDisplay: '590.000đ',
        numericPrice: 590000,
        unit: 'tháng',
        badge: 'Phổ Biến Nhất ⭐',
        isPopular: true,
        description: 'Đồng hành toàn diện: vừa chăm sóc website vừa chăm sóc vị trí Google Maps.',
        highlights: [
          'Toàn bộ quyền lợi của gói Care Mini',
          'Hạn mức xử lý công việc: 4 việc nhỏ / tháng',
          'Chăm sóc và bảo vệ thông tin Google Maps định kỳ',
          'Kiểm tra hệ thống form và nút gọi hotline đều đặn',
          'Cam kết bảo hành kỹ thuật lên đến 5 năm'
        ],
        ctaText: 'Chọn Gói Care Business'
      },
      {
        id: 'offer-care-growth',
        name: 'Gói Chăm Sóc & Tăng Trưởng Care Growth',
        priceDisplay: '990.000đ',
        numericPrice: 990000,
        unit: 'tháng',
        description: 'Chăm sóc kỹ thuật kết hợp viết bài chuẩn SEO và tối ưu thứ hạng tìm kiếm.',
        highlights: [
          'Toàn bộ quyền lợi của gói Care Business',
          'Hạn mức xử lý công việc: 6 - 8 việc / tháng',
          'Biên tập 04 bài viết giới thiệu dịch vụ chuẩn SEO/tháng',
          'Báo cáo thứ hạng từ khóa và số lượng khách gọi hàng tháng',
          'Ưu tiên xử lý sự cố trong vòng 2 - 4 giờ làm việc'
        ],
        ctaText: 'Đăng Ký Gói Care Growth'
      }
    ],
    pricingPackages: [
      {
        id: 'offer-care-mini',
        name: 'Gói Chăm Sóc Care Mini',
        priceDisplay: '290.000đ',
        numericPrice: 290000,
        unit: 'tháng',
        description: 'Dành cho website nhỏ cần an tâm về kỹ thuật và có người hỗ trợ khi gặp sự cố.',
        highlights: [
          'Giám sát website hoạt động 24/7',
          'Sao lưu dữ liệu định kỳ an toàn',
          'Hỗ trợ thay đổi/sửa lỗi nhỏ: 2 việc / tháng',
          'Hỗ trợ kỹ thuật nhanh chóng qua Zalo'
        ],
        ctaText: 'Đăng Ký Gói 290k/Tháng'
      },
      {
        id: 'offer-care-business',
        name: 'Gói Chăm Sóc Care Business',
        priceDisplay: '590.000đ',
        numericPrice: 590000,
        unit: 'tháng',
        badge: 'Phổ Biến Nhất ⭐',
        isPopular: true,
        description: 'Đồng hành toàn diện: vừa chăm sóc website vừa chăm sóc vị trí Google Maps.',
        highlights: [
          'Toàn bộ quyền lợi của gói Care Mini',
          'Hạn mức xử lý công việc: 4 việc nhỏ / tháng',
          'Chăm sóc và bảo vệ thông tin Google Maps định kỳ',
          'Kiểm tra hệ thống form và nút gọi hotline đều đặn',
          'Cam kết bảo hành kỹ thuật lên đến 5 năm'
        ],
        ctaText: 'Chọn Gói Care Business'
      },
      {
        id: 'offer-care-growth',
        name: 'Gói Chăm Sóc & Tăng Trưởng Care Growth',
        priceDisplay: '990.000đ',
        numericPrice: 990000,
        unit: 'tháng',
        description: 'Chăm sóc kỹ thuật kết hợp viết bài chuẩn SEO và tối ưu thứ hạng tìm kiếm.',
        highlights: [
          'Toàn bộ quyền lợi của gói Care Business',
          'Hạn mức xử lý công việc: 6 - 8 việc / tháng',
          'Biên tập 04 bài viết giới thiệu dịch vụ chuẩn SEO/tháng',
          'Báo cáo thứ hạng từ khóa và số lượng khách gọi hàng tháng',
          'Ưu tiên xử lý sự cố trong vòng 2 - 4 giờ làm việc'
        ],
        ctaText: 'Đăng Ký Gói Care Growth'
      }
    ],
    faqs: [
      {
        question: 'Tôi có bị ép buộc phải ký hợp đồng chăm sóc dài hạn 1-2 năm không?',
        answer:
          'Không. Gói chăm sóc của LocalMate được thanh toán theo từng tháng hoặc quý. Bạn hoàn toàn có quyền dừng gói bất cứ lúc nào nếu cảm thấy không còn nhu cầu, không có bất kỳ ràng buộc phiền phức nào.'
      },
      {
        question: 'Nếu website của tôi không phải do LocalMate làm thì có nhận chăm sóc không?',
        answer:
          'Có. Kỹ thuật viên của LocalMate sẽ tiến hành khảo sát hiện trạng 0đ trước để đánh giá mã nguồn website cũ của bạn. Nếu hệ thống đảm bảo tiêu chuẩn cơ bản, chúng tôi sẵn sàng tiếp nhận quản lý và chăm sóc.'
      },
      {
        question: 'Gói chăm sóc có bao gồm phí gia hạn tên miền và hosting không?',
        answer:
          'Phí chăm sóc là phí công hỗ trợ kỹ thuật và vận hành nội dung. Tiền gia hạn tên miền và hosting hàng năm bạn thanh toán trực tiếp cho nhà cung cấp (mắt bão, inet, cloudflare...) hoặc nhờ LocalMate hỗ trợ nộp giúp đúng theo hóa đơn thực tế.'
      }
    ],
    relatedSolutionSlugs: ['/giai-phap/xay-nen-tang-so', '/giai-phap/van-hanh-tu-dong-hoa']
  }
];

// =========================================================================
// HELPER FUNCTIONS
// =========================================================================

/**
 * Lấy danh sách tất cả 5 Solution Pillars
 */
export function getAllSolutions(): Solution[] {
  return SOLUTIONS;
}

/**
 * Lấy thông tin 1 Solution Pillar theo slug (hỗ trợ cả slug đầy đủ dạng '/giai-phap/xyz' lẫn dạng rút gọn 'xyz')
 */
export function getSolutionBySlug(slug: string): Solution | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.trim();
  const normalizedSlug = cleanSlug.startsWith('/giai-phap/')
    ? cleanSlug
    : `/giai-phap/${cleanSlug.replace(/^\//, '')}`;
  const idVariant = cleanSlug.replace(/^\/giai-phap\//, '').replace(/\/$/, '');

  return SOLUTIONS.find((s) => s.slug === normalizedSlug || s.id === idVariant);
}

/**
 * Lấy Solution Pillar theo ID
 */
export function getSolutionById(id: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.id === id);
}

/**
 * Lấy danh sách các Solution Pillars liên quan đến 1 slug cụ thể
 */
export function getRelatedSolutions(slug: string): Solution[] {
  const current = getSolutionBySlug(slug);
  if (!current || !current.relatedSolutionSlugs) return [];

  return current.relatedSolutionSlugs
    .map((relSlug) => getSolutionBySlug(relSlug))
    .filter((s): s is Solution => s !== undefined);
}
