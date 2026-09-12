export interface ServiceEntity {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  categorySlug: string;
  badge?: string;
  heroAsset: string;
  
  // 7 Conversion Questions & Positioning (Customer-first, no technical jargon)
  problem: string;
  outcome: string;
  promise: string;
  description: string;
  
  startingPrice: string;
  priceNote: string;
  sla: string;
  
  suitableFor: string[];
  notSuitableFor: string[];
  
  deliverables: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  requirements: string[];
  
  proofCaseStudySlug?: string;
  proofHighlight?: string;
  
  faqs: {
    question: string;
    answer: string;
  }[];
  
  relatedServiceSlugs: string[];
  relatedArticleSlugs: string[];
  
  primaryCTA: string;
  secondaryCTA: string;
  status: 'ACTIVE' | 'DRAFT';
}

export const CORE_P0_SERVICES: ServiceEntity[] = [
  {
    id: 'geo-local',
    slug: 'geo',
    name: 'Tối ưu đề xuất AI (GEO Local) — Đưa cơ sở lên câu trả lời của ChatGPT & Gemini',
    shortName: 'Tối Ưu Đề Xuất AI (GEO)',
    category: 'Đề Xuất AI & Bản Đồ',
    categorySlug: 'google-maps',
    badge: 'Công Nghệ Mới ⭐',
    heroAsset: '/assets/illustrations/mascot-local-seo.png',
    problem: 'Người dùng ngày càng quen hỏi ChatGPT, Gemini hoặc Perplexity để tìm quán ăn, spa, nha khoa uy tín quanh vùng nhưng tiệm của bạn hoàn toàn không được AI nhắc tên.',
    outcome: 'Đưa doanh nghiệp của bạn trở thành câu trả lời gợi ý hàng đầu khi người dùng hỏi các trợ lý AI về dịch vụ trong khu vực.',
    promise: 'Cấu hình chuẩn Schema JSON-LD, kích hoạt tệp llms.txt, đồng bộ thực thể Entity NAP và cung cấp bằng chứng truy vấn AI thực tế hàng tháng.',
    description: 'LocalMate triển khai kỹ thuật Generative Engine Optimization (GEO) chuyên sâu cho điểm bán địa phương: cấu hình dữ liệu máy đọc hiểu, liên kết Knowledge Graph và tối ưu nội dung đàm thoại để các mô hình ngôn ngữ lớn (LLMs) tự tin trích dẫn tiệm của bạn.',
    startingPrice: '2.900.000đ / tháng',
    priceNote: 'Gói định kỳ hàng tháng • Báo cáo xuất hiện AI chi tiết.',
    sla: '48 giờ triển khai kỹ thuật ban đầu',
    suitableFor: [
      'Quán ăn, nhà hàng, quán cafe muốn được AI gợi ý khi khách hỏi "quán ngon gần đây"',
      'Phòng khám, nha khoa, thẩm mỹ viện, spa cần xây dựng vị thế uy tín trên AI Search',
      'Thợ sửa chữa, gara ô tô, nhà thầu thi công muốn đón đầu xu hướng khách hàng hỏi AI trước khi gọi'
    ],
    notSuitableFor: [
      'Cơ sở chưa có địa chỉ thực tế hoặc chưa có vị trí cơ bản trên Google Maps',
      'Đơn vị muốn có kết quả tức thì trong 1 giờ mà không muốn duy trì dữ liệu chuẩn'
    ],
    deliverables: [
      'Kiểm toán (Audit) hiện diện thương hiệu trên 4 nền tảng AI lớn (ChatGPT, Gemini, Perplexity, Copilot)',
      'Cấu hình bộ Schema JSON-LD LocalBusiness & GeoCoordinates nâng cao giúp AI bots đọc hiểu 100%',
      'Tạo lập & triển khai tệp llms.txt và llms-full.txt chuẩn hóa dữ liệu cho AI crawlers',
      'Đồng bộ thực thể thương hiệu (Entity Alignment) và chuẩn hóa thông tin NAP trên toàn bộ kênh số',
      'Tối ưu hồ sơ Google Business Profile liên kết chặt chẽ với thực thể doanh nghiệp trên Knowledge Graph',
      'Xây dựng bộ nội dung hỏi - đáp ngữ nghĩa (FAQ Conversational Content) mô phỏng câu hỏi khách hàng',
      'Chiến lược trích dẫn thực thể (Citation Boost) tại các nguồn tham chiếu mà AI tin cậy',
      'Báo cáo đo lường định kỳ hàng tháng về tần suất xuất hiện và vị thế thương hiệu khi AI trả lời'
    ],
    process: [
      {
        step: '01',
        title: 'Prompt Benchmark',
        description: 'Kiểm tra 30+ câu hỏi tự nhiên trên ChatGPT, Gemini, Perplexity để đo lường tỷ lệ gợi ý hiện tại.'
      },
      {
        step: '02',
        title: 'Cài đặt Schema & llms.txt',
        description: 'Tích hợp cấu trúc dữ liệu máy đọc hiểu và tệp llms.txt lên tên miền website.'
      },
      {
        step: '03',
        title: 'Đồng bộ thực thể số',
        description: 'Chuẩn hóa đồng nhất thông tin Tên, Địa chỉ, Hotline trên Google Maps và danh bạ số.'
      },
      {
        step: '04',
        title: 'Tối ưu nội dung đối thoại',
        description: 'Soạn bộ câu hỏi - giải đáp thực tế chuẩn ngữ nghĩa hành vi người dùng hỏi AI.'
      },
      {
        step: '05',
        title: 'Bàn giao báo cáo minh chứng',
        description: 'Xuất báo cáo định kỳ kèm ảnh chụp kết quả gợi ý thực tế từ các công cụ AI.'
      }
    ],
    requirements: [
      'Địa chỉ tiệm chính xác và số điện thoại hotline tiếp nhận khách',
      'Quyền quản trị website hoặc quyền quản trị Google Business Profile (nếu có)'
    ],
    faqs: [
      {
        question: 'Dịch vụ GEO Local khác gì so với SEO Google Maps truyền thống?',
        answer: 'SEO Google Maps tập trung vào thứ hạng 3-pack trên bản đồ Google. GEO Local tập trung vào việc làm cho các mô hình AI (ChatGPT, Gemini, Perplexity) hiểu sâu về uy tín của bạn để tự động trích dẫn và khuyên người dùng nên chọn tiệm của bạn khi họ trò chuyện với AI.'
      },
      {
        question: 'File llms.txt là gì và tại sao tiệm cần có?',
        answer: 'llms.txt là chuẩn tệp văn bản mới được các hệ thống AI (như Anthropic, OpenAI, Perplexity) quét định kỳ để hiểu nhanh và chính xác nhất thông tin tóm tắt về dịch vụ, bảng giá và chính sách của một doanh nghiệp mà không bị nhiễu.'
      },
      {
        question: 'Bao lâu thì thấy cơ sở xuất hiện trên câu trả lời của ChatGPT / Gemini?',
        answer: 'Thông thường sau khi cấu hình Schema, llms.txt và đồng bộ thực thể từ 2 đến 4 tuần, các AI crawler sẽ cập nhật dữ liệu bộ nhớ đệm và bắt đầu xuất hiện trong các câu trả lời đề xuất khi người dùng hỏi quanh khu vực.'
      },
      {
        question: 'Chính sách bảo hành kỹ thuật 5 năm và hỗ trợ 1-1 tận nơi nghĩa là gì?',
        answer: 'LocalMate cam kết duy trì mã cấu trúc dữ liệu Schema, tệp llms.txt không lỗi thời trong 5 năm, cập nhật miễn phí theo chuẩn của OpenAI và Google. Kỹ thuật viên LocalMate tại địa phương sẵn sàng ghé tận nơi hỗ trợ bạn kiểm tra thực tế trên điện thoại.'
      }
    ],
    relatedServiceSlugs: ['aeo', 'seo-ai', 'seo-chatgpt', 'google-maps', 'website-landing-page'],
    relatedArticleSlugs: ['huong-dan-toi-uu-google-business-profile', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Đăng Ký Tối Ưu Đề Xuất AI (GEO)',
    secondaryCTA: 'Khảo Sát Hiện Diện AI 0đ',
    status: 'ACTIVE'
  },
  {
    id: 'aeo-service',
    slug: 'aeo',
    name: 'Tối ưu công cụ trả lời trực tiếp (AEO) — Trở thành nguồn trích dẫn tin cậy số 1 của AI',
    shortName: 'Tối Ưu Trích Dẫn AI (AEO)',
    category: 'Đề Xuất AI & Bản Đồ',
    categorySlug: 'google-maps',
    badge: 'Trích Dẫn Nguồn ⭐',
    heroAsset: '/assets/illustrations/mascot-local-seo.png',
    problem: 'Người dùng ngày nay tìm kiếm câu trả lời ngay lập tức trên Perplexity, ChatGPT Search hoặc Google Answer Box. Nếu website viết lan man không có cấu trúc câu trả lời nguyên tử (Atomic Answers), AI sẽ trích dẫn website của đối thủ hoặc bỏ qua bạn.',
    outcome: 'Biến website và nội dung doanh nghiệp thành "Primary Citation Source" được các công cụ tìm kiếm tạo sinh và AI trả lời trích dẫn trực tiếp kèm liên kết nguồn.',
    promise: 'Tái cấu trúc nội dung chuẩn Inverted Pyramid, nhúng bộ Schema FAQPage & HowTo, tối ưu chỉ số E-E-A-T, cam kết bảo hành kỹ thuật 5 năm và có kỹ thuật viên địa phương đồng hành 1-1.',
    description: 'Answer Engine Optimization (AEO) là bước tiến hóa của SEO. LocalMate giúp cơ sở chuẩn hóa dữ liệu thành các khối thông tin độc lập (Atomic Content Units), giúp AI bot bóc tách câu trả lời trong tích tắc và đặt website bạn làm link tham chiếu chính thức.',
    startingPrice: '2.900.000đ / tháng',
    priceNote: 'Gói định kỳ hàng tháng • Bảo hành kỹ thuật 5 năm • Hỗ trợ 1-1 tận nơi.',
    sla: '48–72 giờ triển khai cấu trúc trích dẫn',
    suitableFor: [
      'Phòng khám, nha khoa, bác sĩ, dược phẩm cần câu trả lời chuẩn xác được AI trích dẫn uy tín',
      'Văn phòng luật, công chứng, đại lý thuế, kế toán, bất động sản cần giải đáp chuyên môn cao',
      'Doanh nghiệp kinh doanh dịch vụ, xưởng sản xuất có quy trình và bảng giá minh bạch'
    ],
    notSuitableFor: [
      'Website sao chép nội dung 100% từ mạng mà không có thông tin thực tế của cơ sở',
      'Đơn vị không muốn công khai bảng giá hoặc quy trình dịch vụ rõ ràng'
    ],
    deliverables: [
      'Kiểm toán khả năng trích dẫn hiện tại trên Perplexity, ChatGPT Search, Bing Copilot & Google Snippets',
      'Cấu trúc lại nội dung website theo mô hình Kim tự tháp ngược (Inverted Pyramid) & Atomic Q&A',
      'Nhúng hệ thống Schema chuyên sâu: FAQPage, HowTo, TechArticle, DefinedTerm, Dataset',
      'Tối ưu hóa các điểm dữ liệu cụ thể: Bảng so sánh, con số thống kê, bảng giá minh bạch, bullet points',
      'Củng cố tín hiệu tác giả & chuyên gia (Author E-E-A-T) với chứng chỉ hành nghề và bằng chứng xác thực',
      'Định dạng cấu trúc HTML tối ưu cho Answer Engines cào dữ liệu nhanh (Microdata & semantic tags)',
      'Báo cáo đo lường tỷ lệ được trích dẫn (Citation Rate) và nguồn truy cập từ các Answer Engine'
    ],
    process: [
      {
        step: '01',
        title: 'Audit Answer Engine',
        description: 'Đánh giá website trên Perplexity, ChatGPT Search để xem AI đang lấy nguồn từ đâu cho các câu hỏi ngành của bạn.'
      },
      {
        step: '02',
        title: 'Q&A Atomic Re-architecture',
        description: 'Tái cấu trúc các bài viết thành từng đoạn trả lời nguyên tử 40-60 từ có kết luận rõ ràng, số liệu thật.'
      },
      {
        step: '03',
        title: 'Cài đặt Schema FAQ & HowTo',
        description: 'Nhúng mã Schema chuyên sâu để bot của các Answer Engine nhận diện ngay đây là câu trả lời chuẩn xác.'
      },
      {
        step: '04',
        title: 'Thiết lập E-E-A-T & Citation Hub',
        description: 'Kết nối hồ sơ tác giả, giấy phép kinh doanh và chứng thực thực tế để tăng điểm độ tin cậy nguồn.'
      },
      {
        step: '05',
        title: 'Đo lường & Bảo hành 5 năm',
        description: 'Xuất báo cáo trích dẫn định kỳ và duy trì cập nhật kỹ thuật miễn phí theo các thay đổi thuật toán AI.'
      }
    ],
    requirements: [
      'Quy trình dịch vụ và bảng giá chính xác của cơ sở',
      'Quyền quản trị mã nguồn website hoặc CMS đang sử dụng'
    ],
    faqs: [
      {
        question: 'AEO khác gì so với SEO truyền thống và GEO?',
        answer: 'SEO truyền thống tối ưu để lên top 10 link xanh. GEO tối ưu để được AI gợi ý tên thương hiệu khi người dùng trò chuyện. Còn AEO tập trung tối ưu để website của bạn trở thành nguồn trích dẫn được AI dẫn link bấm vào khi trả lời câu hỏi trực tiếp của người dùng.'
      },
      {
        question: 'Tại sao Answer Engines như Perplexity hay ChatGPT Search lại quan trọng?',
        answer: 'Vì người dùng tìm câu trả lời chuyên sâu đang chuyển dịch rất nhanh sang Perplexity và ChatGPT Search. Khi AI trích dẫn link web của bạn, đây là nguồn traffic có tỷ lệ chuyển đổi cực cao vì người dùng đã tin tưởng câu trả lời của AI.'
      },
      {
        question: 'Giá 2.900.000đ/tháng đã bao gồm viết lại nội dung chưa?',
        answer: 'Đã bao gồm cấu trúc lại hệ thống câu hỏi đáp nguyên tử chủ lực, nhúng mã Schema và tối ưu kỹ thuật. Với các bài viết chuyên ngành mới, kỹ thuật viên LocalMate sẽ đồng hành hướng dẫn bạn lên khung chuẩn trích dẫn.'
      }
    ],
    relatedServiceSlugs: ['geo', 'seo-ai', 'seo-chatgpt', 'website-landing-page'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao', 'huong-dan-toi-uu-google-business-profile'],
    primaryCTA: 'Đăng Ký Tối Ưu Trích Dẫn AI (AEO)',
    secondaryCTA: 'Nhận Khảo Sát AEO Miễn Phí',
    status: 'ACTIVE'
  },
  {
    id: 'seo-ai-overviews',
    slug: 'seo-ai',
    name: 'Thống trị Google AI Overviews (SEO AI) — Giữ vững traffic vị trí số 0 trong kỷ nguyên AI Search',
    shortName: 'Tối Ưu Google AI Overviews',
    category: 'Đề Xuất AI & Bản Đồ',
    categorySlug: 'google-maps',
    badge: 'Chiếm Vị Trí Số 0 ⭐',
    heroAsset: '/assets/illustrations/mascot-ga4-gtm-ads.png',
    problem: 'Google AI Overviews đã xuất hiện trên đầu trang tìm kiếm, chiếm trọn màn hình điện thoại và nuốt chửng 60% lượt click của top SEO truyền thống. Nếu không xuất hiện trong khối AI Overviews, bạn sẽ mất trắng khách hàng tiềm năng.',
    outcome: 'Đưa website xuất hiện trong khối tóm tắt AI Overviews của Google, trở thành nguồn tham chiếu hàng đầu và thu hút tệp khách hàng chất lượng cao nhất.',
    promise: 'Tối ưu chỉ số Information Gain, cấu trúc nội dung Helpful Content 2026, Core Web Vitals dưới 1s, cam kết kỹ thuật viên đồng hành 1-1 tận nơi và bảo hành kỹ thuật 5 năm.',
    description: 'Dịch vụ SEO AI Google Overviews của LocalMate tập trung giải quyết bài toán cốt lõi: làm sao để thuật toán Gemini của Google chọn bài viết của bạn vào khung tóm tắt đầu trang. Bằng cách bổ sung góc nhìn thực tế của người làm nghề, số liệu độc quyền và định dạng tóm tắt nhanh, cơ sở của bạn sẽ chiếm lĩnh vị trí số 0 vững chắc.',
    startingPrice: '2.900.000đ / tháng',
    priceNote: 'Gói định kỳ hàng tháng • Tiết kiệm 75% so với agency lớn • Bảo hành 5 năm.',
    sla: 'Triển khai kỹ thuật & tối ưu cấu trúc trong 72 giờ',
    suitableFor: [
      'Doanh nghiệp, phòng khám, trung tâm đào tạo đang bị sụt giảm click do Google AI Overviews',
      'Cơ sở kinh doanh muốn đón đầu xu hướng tìm kiếm mới nhất của Google tại Việt Nam',
      'Đơn vị kinh doanh sản phẩm/dịch vụ có nhiều người dùng tìm kiếm hướng dẫn, so sánh, bảng giá'
    ],
    notSuitableFor: [
      'Website dùng nội dung AI tự động sơ sài, thiếu kinh nghiệm thực tế và hình ảnh độc quyền',
      'Website tải quá chậm (> 4 giây) và không đồng ý tối ưu mã nguồn'
    ],
    deliverables: [
      'Kiểm toán toàn bộ từ khóa mục tiêu xem đã xuất hiện AI Overviews chưa và đối thủ nào đang được chọn',
      'Tối ưu Information Gain: Bổ sung insight thực tế độc quyền của cơ sở vào nội dung bài viết',
      'Định dạng cấu trúc tóm tắt nhanh (Quick Takeaway, Bảng đối sánh, Danh sách bullet points)',
      'Tối ưu hóa kỹ thuật Core Web Vitals (LCP < 1.2s, CLS = 0) giúp Google bot render trang tức thì',
      'Cấu hình Schema Article, LocalBusiness, FAQPage và BreadcrumbList chuẩn xác',
      'Tối ưu thẻ tiêu đề ngữ nghĩa (Semantic H2/H3) trả lời trực tiếp từng ý định tìm kiếm',
      'Báo cáo theo dõi tỷ lệ hiển thị trong Google AI Overviews hàng tuần'
    ],
    process: [
      {
        step: '01',
        title: 'Quét hiện trạng AI Overviews',
        description: 'Xác định các từ khóa ngách trong khu vực của bạn mà Google đã kích hoạt khung tóm tắt AI.'
      },
      {
        step: '02',
        title: 'Bơm thông tin độc quyền (Information Gain)',
        description: 'Thêm ảnh thực tế, bảng giá thật, kinh nghiệm thực chiến tại tiệm mà các trang đối thủ không có.'
      },
      {
        step: '03',
        title: 'Tái cấu trúc bài viết chuẩn AI Snapshot',
        description: 'Tạo các đoạn tóm tắt 30-50 từ ở đầu mục, kẻ bảng so sánh chi tiết giúp Google dễ trích xuất.'
      },
      {
        step: '04',
        title: 'Tăng tốc độ tải trang dưới 1.2s',
        description: 'Dọn sạch mã thừa, tối ưu ảnh WOFF2/WebP để Googlebot duyệt và lập chỉ mục trong chớp mắt.'
      },
      {
        step: '05',
        title: 'Đo lường & Bảo hành 5 năm',
        description: 'Kỹ thuật viên địa phương theo dõi trực tiếp kết quả, bảo hành hạ tầng mã nguồn dài hạn.'
      }
    ],
    requirements: [
      'Thông tin thực tế và kinh nghiệm làm nghề của cơ sở',
      'Hình ảnh thực tế chụp tại cửa hàng, cơ sở hoặc xưởng sản xuất'
    ],
    faqs: [
      {
        question: 'Google AI Overviews đã hoạt động tại Việt Nam chưa?',
        answer: 'Google đã chính thức triển khai AI Overviews bằng Tiếng Việt và trên toàn cầu. Rất nhiều truy vấn về so sánh, hỏi giá, tìm địa chỉ uy tín đã xuất hiện khung AI ở đầu trang.'
      },
      {
        question: 'Nếu website của tôi đã có top 1 Google thì có cần làm SEO AI không?',
        answer: 'Rất cần thiết! Vì khung AI Overviews nằm trên cả vị trí Top 1 truyền thống. Nếu bạn ở Top 1 nhưng không được chọn vào nguồn của AI Overviews, khách hàng sẽ đọc câu trả lời tóm tắt của AI và bấm vào các link nguồn trong khung AI trước khi cuộn tới web của bạn.'
      },
      {
        question: 'LocalMate có hỗ trợ kỹ thuật viên ghé tận nơi không?',
        answer: 'Có! Đúng với tinh thần Người đồng hành số tại địa phương, kỹ thuật viên LocalMate hỗ trợ 1-1, sẵn sàng ghé trực tiếp cơ sở của bạn để chụp hình thực tế và tối ưu dữ liệu gốc.'
      }
    ],
    relatedServiceSlugs: ['geo', 'aeo', 'seo-chatgpt', 'google-maps'],
    relatedArticleSlugs: ['huong-dan-toi-uu-google-business-profile', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Đăng Ký Tối Ưu Google AI Overviews',
    secondaryCTA: 'Kiểm Tra Từ Khóa AI 0đ',
    status: 'ACTIVE'
  },
  {
    id: 'seo-chatgpt-service',
    slug: 'seo-chatgpt',
    name: 'Hiện diện trong hội thoại AI (SEO ChatGPT) — Đưa thương hiệu vào gợi ý tự nhiên của ChatGPT',
    shortName: 'Tối Ưu Đề Xuất ChatGPT',
    category: 'Đề Xuất AI & Bản Đồ',
    categorySlug: 'google-maps',
    badge: 'Hội Thoại Mua Hàng ⭐',
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: 'Hơn 600 triệu người dùng hiện đang hỏi ChatGPT trước khi đưa ra quyết định mua sắm hoặc tìm dịch vụ. Khi khách hàng hỏi ChatGPT tìm tiệm trong vùng, tiệm của bạn không hề được nhắc tên mà chỉ toàn tên đối thủ.',
    outcome: 'Đưa thương hiệu của bạn vào kho dữ liệu tham chiếu và kết quả tìm kiếm thời gian thực của SearchGPT, giúp ChatGPT tự tin nhắc tên tiệm của bạn như một gợi ý hàng đầu.',
    promise: 'Tích hợp chuẩn tệp llms.txt & llms-full.txt, đồng bộ Entity vào Knowledge Base, chiến lược Digital PR hội thoại, bảo hành kỹ thuật 5 năm và hỗ trợ 1-1 tận nơi.',
    description: 'SEO ChatGPT của LocalMate là giải pháp chuyên sâu giúp cơ sở kinh doanh hiện diện trong các cuộc trò chuyện tự nhiên của khách hàng với ChatGPT. Chúng tôi chuẩn hóa dữ liệu máy đọc, xây dựng các tín hiệu danh tiếng ngữ nghĩa để mô hình ngôn ngữ của OpenAI nhận diện tiệm bạn là địa chỉ đáng tin cậy nhất trong khu vực.',
    startingPrice: '2.900.000đ / tháng',
    priceNote: 'Gói định kỳ hàng tháng • Chi phí bình dân • Bảo hành kỹ thuật 5 năm.',
    sla: '48 giờ hoàn tất tích hợp llms.txt và Entity',
    suitableFor: [
      'Quán cafe, nhà hàng, quán ăn, quán nhậu muốn được ChatGPT gợi ý khi khách hỏi tụ tập, hẹn hò',
      'Thẩm mỹ viện, spa, phòng khám, nha khoa muốn tiếp cận tệp khách hàng trẻ, am hiểu công nghệ',
      'Dịch vụ sửa chữa, cứu hộ, thiết kế, kiến trúc muốn đón đầu luồng khách hỏi tư vấn trên AI'
    ],
    notSuitableFor: [
      'Cơ sở có nhiều đánh giá tiêu cực nghiêm trọng chưa được xử lý',
      'Đơn vị không có hotline hoặc người trực tư vấn thường xuyên'
    ],
    deliverables: [
      'Đánh giá hiện diện thương hiệu với bộ 50+ prompt đàm thoại mua sắm trên ChatGPT-4o & SearchGPT',
      'Khởi tạo và cấu hình tệp chuẩn llms.txt và llms-full.txt trên máy chủ website',
      'Đồng bộ thực thể thương hiệu trên các cơ sở dữ liệu mở mà OpenAI thu thập dữ liệu (Wikidata, Maps, Open Data)',
      'Tối ưu hồ sơ thương hiệu số với các từ khóa ngữ nghĩa đàm thoại (Conversational Keywords)',
      'Bộ giải pháp Review Sentiment: Hướng dẫn thu hút đánh giá thực tế giàu ngữ nghĩa tích cực',
      'Báo cáo chụp màn hình thực tế truy vấn ChatGPT hàng tháng chứng minh kết quả hiển thị'
    ],
    process: [
      {
        step: '01',
        title: 'Khảo sát Prompt hội thoại',
        description: 'Kiểm tra xem khi người dùng chat với ChatGPT về ngành nghề tại khu vực của bạn thì AI đang gợi ý ai.'
      },
      {
        step: '02',
        title: 'Cài đặt llms.txt & Dữ liệu máy đọc',
        description: 'Tạo tệp llms.txt trên website tóm tắt toàn bộ dịch vụ, địa chỉ, hotline để bot OpenAI quét trực tiếp.'
      },
      {
        step: '03',
        title: 'Đồng bộ Entity dữ liệu mở',
        description: 'Khai báo thông tin cơ sở đồng nhất trên hệ thống danh bạ số và nền tảng dữ liệu mở mà AI tin cậy.'
      },
      {
        step: '04',
        title: 'Tối ưu cảm xúc đánh giá (Sentiment)',
        description: 'Cung cấp mã QR để khách hàng để lại đánh giá có từ khóa tích cực giúp AI đánh giá điểm uy tín cao.'
      },
      {
        step: '05',
        title: 'Đo lường & Đồng hành 5 năm',
        description: 'Kỹ thuật viên địa phương định kỳ quét kết quả, hỗ trợ 1-1 và bảo hành kỹ thuật dài hạn.'
      }
    ],
    requirements: [
      'Địa chỉ chính xác, hotline và bảng giá dịch vụ chủ lực',
      'Quyền truy cập tên miền website để cấu hình tệp llms.txt'
    ],
    faqs: [
      {
        question: 'ChatGPT lấy dữ liệu từ đâu để gợi ý cho người dùng?',
        answer: 'ChatGPT sử dụng 2 nguồn chính: (1) Dữ liệu huấn luyện đã được nạp từ các nguồn tin cậy trên internet, và (2) Tính năng tìm kiếm thời gian thực (SearchGPT) quét qua các website có cấu trúc chuẩn như llms.txt, Schema và bài viết trích dẫn uy tín.'
      },
      {
        question: 'Dịch vụ này có giúp tiệm xuất hiện trên cả phiên bản miễn phí và trả phí của ChatGPT không?',
        answer: 'Có! Cả người dùng bản ChatGPT miễn phí (GPT-4o mini) và bản trả phí (ChatGPT Plus / Team) đều sử dụng chung cơ chế tìm kiếm dữ liệu thực thể mà LocalMate đã tối ưu.'
      },
      {
        question: 'Tại sao giá của LocalMate chỉ từ 2.900.000đ/tháng trong khi các agency khác báo giá 20-30 triệu?',
        answer: 'LocalMate tối ưu quy trình từ gốc: chúng tôi tập trung trực tiếp vào hạ tầng kỹ thuật chuẩn (Schema, llms.txt, Entity NAP) và có đội ngũ kỹ thuật viên địa phương tinh gọn, không gánh chi phí cồng kềnh của bộ máy agency lớn, mang lại giá trị thật với chi phí bình dân nhất.'
      }
    ],
    relatedServiceSlugs: ['geo', 'aeo', 'seo-ai', 'google-maps'],
    relatedArticleSlugs: ['huong-dan-toi-uu-google-business-profile', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Đăng Ký Tối Ưu Đề Xuất ChatGPT',
    secondaryCTA: 'Khảo Sát ChatGPT 0đ',
    status: 'ACTIVE'
  },
  {
    id: 'google-ads-dia-phuong',
    slug: 'google-ads-dia-phuong',
    name: 'Dịch vụ Google Ads địa phương — Tìm khách quanh tiệm, 0% kê giá, 100% tài khoản chính chủ',
    shortName: 'Google Ads Địa Phương',
    category: 'Quảng Cáo & Tìm Khách',
    categorySlug: 'quang-cao-google',
    badge: '0% Phí Kê Giá ⭐',
    heroAsset: '/assets/illustrations/mascot-ga4-gtm-ads.png',
    problem: 'Quảng cáo tiêu tốn tiền hàng ngày nhưng chỉ nhận toàn click ảo, người bấm nhầm ở tỉnh khác gọi tới hoặc bị các đơn vị dịch vụ kê giá chênh lệch, giấu tài khoản khiến bạn không biết tiền của mình đi đâu.',
    outcome: 'Xuất hiện ngay trước mắt những người đang tìm kiếm dịch vụ trong bán kính 3km – 10km quanh tiệm; tiền chạy trực tiếp trừ từ thẻ Visa/Mastercard của bạn; minh bạch 100% từng lượt click và số cuộc gọi thực tế.',
    promise: '0% phí chênh lệch giá click. 100% quyền Admin tài khoản chính chủ của bạn. Chặn triệt để từ khóa rác và tối ưu nút bấm gọi ngay trên điện thoại.',
    description: 'LocalMate triển khai chiến dịch Google Ads tìm kiếm địa phương chuẩn mực: thiết lập bán kính cắm mốc chuẩn quanh tiệm, chọn lọc từ khóa có ý định mua hàng thật, gắn nút gọi Hotline & chỉ đường Google Maps, thiết lập đo lường cuộc gọi và hướng dẫn bạn tự quản trị tài khoản an toàn.',
    startingPrice: 'Từ 390.000đ (Setup) / 690.000đ / tháng (Quản trị)',
    priceNote: 'Ngân sách quảng cáo trả thẳng cho Google qua thẻ của bạn. LocalMate chỉ thu phí công sức kỹ thuật cố định.',
    sla: 'Khởi tạo chạy ngay trong 24–48 giờ',
    suitableFor: [
      'Tiệm sửa chữa, thợ cứu hộ, thợ điện nước, sửa khoá phục vụ tại chỗ theo quận/huyện',
      'Phòng khám, nha khoa, spa, thẩm mỹ viện cần kéo khách vãng lai quanh bán kính 5km',
      'Quán ăn, nhà hàng, trung tâm đào tạo, cửa hàng bán lẻ đón khách trực tiếp tại tiệm',
      'Chủ cơ sở từng bị các agency cũ giấu tài khoản, kê giá đắt đỏ muốn lấy lại quyền tự chủ'
    ],
    notSuitableFor: [
      'Sản phẩm hoàn toàn mới chưa từng có ai tìm kiếm trên Google (nên chạy mạng xã hội để tạo nhu cầu trước)',
      'Cơ sở chưa có số hotline tiếp nhận cuộc gọi hoặc thường xuyên không nghe máy'
    ],
    deliverables: [
      'Khởi tạo tài khoản Google Ads chính chủ đứng tên Gmail của bạn (bạn giữ quyền Quản trị cao nhất)',
      'Nghiên cứu bộ từ khóa có nhu cầu mua cao tại địa phương, gắn vị trí quận/huyện/phường',
      'Thiết lập danh sách 200+ từ khóa phủ định (loại trừ từ khóa tìm việc làm, miễn phí, tải file, học nghề)',
      'Viết 03–05 mẫu quảng cáo có tiêu đề nổi bật, kèm bảng giá công khai và cam kết chất lượng',
      'Cài đặt đầy đủ 4 tiện ích mở rộng: Nút bấm Gọi điện, Đoạn thông tin có cấu trúc, Liên kết trang web, Tiện ích địa điểm Google Maps',
      'Cài đặt đo lường chuyển đổi: Đo chính xác lượt bấm Gọi Hotline, bấm nhắn Zalo và bấm chỉ đường',
      'Báo cáo minh bạch hàng tuần: Từ khóa nào đem lại khách, chi phí trên mỗi cuộc gọi, số tiền Google đã trừ thẻ thực tế'
    ],
    process: [
      {
        step: '01',
        title: 'Khảo sát địa bàn & Dịch vụ chủ lực',
        description: 'Xác định bán kính phục vụ 3–10km và những dịch vụ có tỷ lệ chuyển đổi cao nhất.'
      },
      {
        step: '02',
        title: 'Thiết lập tài khoản & Thẻ thanh toán',
        description: 'Hướng dẫn bạn tự add thẻ Visa/Mastercard trực tiếp vào Google Ads, tuyệt đối không qua trung gian.'
      },
      {
        step: '03',
        title: 'Lên bộ từ khóa & Viết mẫu quảng cáo',
        description: 'Tập trung từ khóa địa phương sát nhu cầu mua, gắn nút gọi Hotline trực tiếp trên di động.'
      },
      {
        step: '04',
        title: 'Cài đặt đo lường cuộc gọi & Zalo',
        description: 'Gắn mã đếm chuyển đổi chính xác qua GA4/GTM để kiểm soát hiệu quả từng đồng chi phí.'
      },
      {
        step: '05',
        title: 'Theo dõi phủ định từ khóa rác & Tối ưu giá thầu',
        description: 'Rà soát Search Terms mỗi 48h để loại bỏ click rác, tiết kiệm tối đa ngân sách quảng cáo.'
      }
    ],
    requirements: [
      'Gmail chính chủ của bạn để tạo hoặc nhận quyền quản trị tài khoản Google Ads',
      'Thẻ thanh toán quốc tế (Visa/Mastercard) có sẵn số dư để nạp tiền trực tiếp cho Google',
      'Trang web/Landing page giới thiệu dịch vụ và số Hotline/Zalo tiếp nhận khách'
    ],
    proofCaseStudySlug: 'nha-khoa-nucuoiduyen-tphcm',
    proofHighlight: 'Giảm 42% chi phí bấm nhầm sau khi lọc sạch 180+ từ khóa rác và chuyển sang tài khoản chính chủ 0% kê giá.',
    faqs: [
      {
        question: '0% phí kê giá nghĩa là như thế nào?',
        answer: 'Nghĩa là bạn tự thêm thẻ ngân hàng vào tài khoản Google Ads của mình. Google trừ bao nhiêu tiền (ví dụ 1.000.000đ) thì sao kê ngân hàng của bạn trừ đúng bấy nhiêu. LocalMate không thu tiền % ngân sách và không nâng khống giá click, chỉ thu phí dịch vụ cài đặt/quản trị kỹ thuật cố định được niêm yết rõ ràng.'
      },
      {
        question: 'Tôi có toàn quyền sở hữu tài khoản Google Ads không?',
        answer: 'Có 100%. Bạn là Chủ tài khoản (Administrative Owner). Toàn bộ dữ liệu khách hàng, lịch sử từ khóa và điểm chất lượng thuộc về bạn trọn đời, không bao giờ lo bị agency "giữ tài khoản làm con tin".'
      },
      {
        question: 'Ngân sách một ngày tối thiểu bao nhiêu tiền?',
        answer: 'Với quảng cáo địa phương tập trung bán kính hẹp quanh tiệm, bạn có thể bắt đầu thử nghiệm từ 50.000đ – 100.000đ/ngày để kiểm tra lượng cuộc gọi trước khi quyết định tăng ngân sách.'
      }
    ],
    relatedServiceSlugs: ['khac-phuc-loi-google-ads-sua-chua', 'facebook-ads-dia-phuong', 'cham-soc-website-chuan-seo', 'google-maps'],
    relatedArticleSlugs: ['cach-doc-search-terms-google-ads', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Tư Vấn Chạy Google Ads Địa Phương',
    secondaryCTA: 'Xem Báo Giá Minh Bạch 0%',
    status: 'ACTIVE'
  },
  {
    id: 'khac-phuc-loi-google-ads-sua-chua',
    slug: 'khac-phuc-loi-google-ads-sua-chua',
    name: 'Khắc phục lỗi Google Ads ngành Sửa chữa (Điện thoại, Laptop, Điện lạnh) — Kháng chính sách & Whitelist',
    shortName: 'Gỡ Lỗi Ads Sửa Chữa',
    category: 'Gỡ Lỗi & Kháng Nghị Ads',
    categorySlug: 'quang-cao-google',
    badge: 'Chuyên Trị Ngành Khó ⭐',
    heroAsset: '/assets/illustrations/mascot-ga4-gtm-ads.png',
    problem: 'Google siết chặt chính sách ngành sửa chữa kỹ thuật bên thứ ba: quảng cáo liên tục bị từ chối, tài khoản bị tạm ngưng vì "Tránh né hệ thống", "Trình bày sai sự thật", "Vi phạm thương hiệu Apple/Samsung/Dell", làm tiệm mất hoàn toàn nguồn khách gọi mỗi ngày.',
    outcome: 'Khôi phục chiến dịch quảng cáo hoạt động ổn định; chuẩn hóa website tuân thủ chính sách Google 100%; hoàn tất xác minh nhà quảng cáo chính chủ và nộp hồ sơ kháng nghị gỡ gậy tạm ngưng.',
    promise: 'Chẩn đoán nguyên nhân gốc rễ trong 2 giờ. Sửa triệt để vi phạm trên trang đích. Không dùng thủ thuật blackhat bẩn gây chết vĩnh viễn tên miền.',
    description: 'Dịch vụ chuyên sâu dành riêng cho các tiệm sửa điện thoại, ép kính, sửa laptop, máy tính, máy in, sửa điện lạnh (máy lạnh, tủ lạnh, máy giặt), sửa khóa. LocalMate am hiểu sâu sắc chính sách "Third-party consumer technical support" của Google, xử lý triệt để từ nội dung website, giấy tờ ĐKKD đến quy trình kháng nghị trực tiếp với đội ngũ Google Trust & Safety.',
    startingPrice: 'Từ 1.290.000đ / lần xử lý',
    priceNote: 'Đánh giá hồ sơ 0đ trước khi nhận việc. Không sửa được hoàn tiền 100%.',
    sla: 'Hoàn thành sửa đổi trang đích trong 24h — Kháng nghị 2–5 ngày theo SLA Google',
    suitableFor: [
      'Cơ sở sửa chữa điện thoại (iPhone, Samsung, Xiaomi...) bị gắn cờ vi phạm thương hiệu hoặc dịch vụ kỹ thuật bên thứ ba',
      'Trung tâm sửa chữa laptop, máy tính, phục hồi dữ liệu bị từ chối mẫu quảng cáo',
      'Thợ sửa điện lạnh (máy lạnh, tủ lạnh, máy giặt), sửa khóa, thông nghẹt bị tạm ngưng tài khoản hàng loạt',
      'Đơn vị bị khóa tài khoản dạng "Hành vi kinh doanh không được chấp nhận" hoặc "Tránh né hệ thống"'
    ],
    notSuitableFor: [
      'Cơ sở mạo danh lừa đảo, cố tình giả làm trung tâm bảo hành chính hãng của Apple/Samsung để lừa gạt người tiêu dùng',
      'Các dịch vụ vi phạm pháp luật hoặc không có địa chỉ thực tế'
    ],
    deliverables: [
      'Báo cáo kiểm toán (Audit) bóc tách toàn bộ mã lỗi và các yếu tố kích hoạt bộ lọc kiểm duyệt của bot Google',
      'Thêm phần Tuyên bố miễn trừ trách nhiệm pháp lý độc lập (Independent Disclaimer) chuẩn mực ở đầu và chân trang web',
      'Gỡ bỏ sạch sẽ các logo, icon, nhãn hiệu có bản quyền (Apple, Samsung, Dell, Sony...) gây dính bản quyền Trademark',
      'Chuẩn hóa thông tin minh bạch: Bảng giá dịch vụ công khai, quy trình sửa chữa, chính sách bảo hành linh kiện và địa chỉ tiệm có thật',
      'Soạn thảo bộ hồ sơ kháng nghị song ngữ (Việt - Anh) kèm chứng từ ĐKKD, hình ảnh biển hiệu cửa hàng thực tế',
      'Thiết lập quy trình xác minh danh tính nhà quảng cáo (Advertiser Identity Verification) đạt chuẩn whitelist',
      'Cấu trúc lại bộ từ khóa an toàn, tránh các cụm từ kích hoạt quét tự động của AI Google Ads'
    ],
    process: [
      {
        step: '01',
        title: 'Audit mã lỗi & Lý do vi phạm',
        description: 'Rà soát lịch sử tài khoản, đọc kỹ thông báo vi phạm chính sách của Google để tìm nguyên nhân gốc.'
      },
      {
        step: '02',
        title: 'Tái cấu trúc Trang Đích (Landing Page)',
        description: 'Bổ sung disclaimer độc lập, bỏ logo hãng, bổ sung bảng giá & cam kết bảo hành rõ ràng.'
      },
      {
        step: '03',
        title: 'Chuẩn bị hồ sơ pháp lý & Chứng minh thực tế',
        description: 'Thu thập ảnh chụp bảng hiệu, hợp đồng thuê nhà/ĐKKD và hóa đơn linh kiện thực tế.'
      },
      {
        step: '04',
        title: 'Nộp đơn kháng nghị chính ngạch',
        description: 'Soạn văn bản giải trình chi tiết gửi trực tiếp đội ngũ Google Policy Specialist.'
      },
      {
        step: '05',
        title: 'Thiết lập lại chiến dịch trên cấu trúc an toàn',
        description: 'Chạy thử nghiệm ngân sách nhỏ, kiểm tra độ ổn định và bàn giao tài khoản hoạt động trơn tru.'
      }
    ],
    requirements: [
      'Quyền chỉnh sửa trang web/landing page đang dùng để chạy quảng cáo',
      'Quyền truy cập tài khoản Google Ads bị cảnh báo/tạm ngưng',
      'Hình ảnh cửa hàng thực tế và giấy chứng nhận đăng ký kinh doanh/hộ kinh doanh (nếu có)'
    ],
    proofCaseStudySlug: 'nha-khoa-nucuoiduyen-tphcm',
    proofHighlight: 'Khôi phục thành công tài khoản cho chuỗi sửa chữa laptop tại Đà Nẵng sau 4 ngày làm việc với Google Policy.',
    faqs: [
      {
        question: 'Tại sao tiệm sửa điện thoại, laptop, điện lạnh lại hay bị Google khóa ads?',
        answer: 'Do chính sách "Hỗ trợ kỹ thuật người tiêu dùng của bên thứ ba" nhằm ngăn chặn tình trạng mạo danh trung tâm bảo hành chính hãng (Apple, Samsung, Sony, Panasonic...). Nếu website của bạn để logo hãng, dùng từ ngữ gây hiểu lầm hoặc thiếu tuyên bố độc lập, bot Google sẽ tự động quét và khóa tài khoản ngay lập tức.'
      },
      {
        question: 'LocalMate có dùng kỹ thuật lách luật (bọc link, cloaking) không?',
        answer: 'Tuyệt đối KHÔNG. Các thủ thuật lách luật hay cloaking chỉ chạy được vài ngày rồi sẽ bị Google phạt tội "Tránh né hệ thống" (Circumventing systems) dẫn đến khóa vĩnh viễn cả tên miền lẫn thẻ thanh toán. LocalMate xử lý chuẩn chính ngạch theo đúng hướng dẫn chính sách của Google để tài khoản sống bền bỉ.'
      },
      {
        question: 'Nếu kháng nghị không thành công thì sao?',
        answer: 'LocalMate đánh giá hồ sơ miễn phí trước khi nhận. Trong trường hợp đã nhận việc và sửa web nhưng Google vẫn từ chối tài khoản do vi phạm nghiêm trọng trước đó, LocalMate hỗ trợ hướng dẫn khởi tạo cấu trúc tên miền & tài khoản mới chuẩn whitelist hoặc hoàn trả 100% chi phí dịch vụ.'
      }
    ],
    relatedServiceSlugs: ['google-ads-dia-phuong', 'cham-soc-website-chuan-seo', 'website-landing-page'],
    relatedArticleSlugs: ['cach-doc-search-terms-google-ads', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Khám Lỗi Tài Khoản Ads 0đ',
    secondaryCTA: 'Xem Quy Trình Kháng Nghị',
    status: 'ACTIVE'
  },
  {
    id: 'facebook-ads-dia-phuong',
    slug: 'facebook-ads-dia-phuong',
    name: 'Dịch vụ Facebook Ads địa phương — Phủ sóng khách hàng bán kính 5km quanh tiệm',
    shortName: 'Facebook Ads Địa Phương',
    category: 'Quảng Cáo & Tìm Khách',
    categorySlug: 'quang-cao-facebook',
    badge: 'Bán Kính 5km ⭐',
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: 'Tự chạy quảng cáo Facebook nhưng cắn tiền vô tội vạ, tiếp cận người ở tỉnh xa không bao giờ ghé tiệm, tin nhắn vào toàn nick clone hỏi cho vui rồi im lặng.',
    outcome: 'Tiếp cận đúng cư dân đang sinh sống, làm việc trong bán kính 1km – 5km quanh tiệm; nội dung hình ảnh thực tế kích thích khách nhắn tin hỏi giá, đặt lịch hoặc ghé thẳng cửa hàng.',
    promise: 'Cắm mốc định vị GPS chuẩn xác quanh tiệm. Viết bài & thiết kế hình ảnh chân thực chuẩn tâm lý mua hàng địa phương. 100% tài khoản chính chủ của bạn.',
    description: 'Chiến dịch Facebook Ads nhắm mục tiêu địa phương chuyên sâu: tối ưu hoá cho mục tiêu tin nhắn Messenger/Zalo, kéo khách đến trải nghiệm dịch vụ tại quán hoặc gọi thợ tới nhà trong khu vực. LocalMate thiết lập kịch bản tin nhắn tự động hỏi số điện thoại và báo giá ngay.',
    startingPrice: 'Từ 490.000đ (Setup) / 790.000đ / tháng (Chăm sóc)',
    priceNote: 'Ngân sách trả trực tiếp cho Meta (Facebook). Không kê giá, không ăn % chiết khấu.',
    sla: 'Triển khai chạy trong 24–48 giờ',
    suitableFor: [
      'Quán ăn, nhà hàng, tiệm trà sữa, tiệm bánh, cafe muốn lấp đầy bàn vào khung giờ vắng',
      'Tiệm cắt tóc, salon, tiệm nail, spa, nha khoa cần khách đặt lịch hẹn hàng ngày',
      'Phòng gym, yoga, trung tâm tiếng Anh, lớp dạy thêm tuyển sinh theo khu vực dân cư',
      'Tiệm giặt ủi, rửa xe, sửa xe máy, đồ gia dụng phục vụ cư dân các tòa chung cư lân cận'
    ],
    notSuitableFor: [
      'Mô hình bán hàng online toàn quốc (dropshipping, thương mại điện tử giao hàng 63 tỉnh)'
    ],
    deliverables: [
      'Cắm mốc định vị GPS địa chỉ quán và quét bán kính chuẩn 1km – 5km (loại trừ tệp khách vãng lai ở xa)',
      'Phân khúc độ tuổi, giới tính và hành vi mua sắm phù hợp với khách hàng quanh vùng',
      'Biên tập 02–03 bài viết quảng cáo với văn phong gần gũi, giật tít ưu đãi khai trương / trải nghiệm dịch vụ',
      'Thiết kế bộ banner ảnh chuẩn kích thước hiển thị trên bảng tin điện thoại',
      'Cài đặt câu hỏi gợi ý tự động (Menu FAQ tin nhắn) để khách bấm là tự động gửi câu hỏi giá và hotline',
      'Hướng dẫn kỹ năng trực tin nhắn, phản hồi nhanh dưới 5 phút để chốt lịch hẹn thành công',
      'Báo cáo số lượng tin nhắn mới, chi phí trung bình trên mỗi khách hàng liên hệ mỗi tuần'
    ],
    process: [
      {
        step: '01',
        title: 'Xác định bán kính vàng & Ưu đãi mồi câu',
        description: 'Chọn bán kính 1-5km và thông điệp giảm giá/tặng quà kích thích khách ghé quán ngay.'
      },
      {
        step: '02',
        title: 'Soạn bài & Thiết kế hình ảnh thực tế',
        description: 'Dùng ảnh chụp thật tại tiệm, gắn logo và số hotline to rõ, văn phong gần gũi.'
      },
      {
        step: '03',
        title: 'Thiết lập chiến dịch Trình quản lý quảng cáo',
        description: 'Cài đặt vị trí GPS, đối tượng, ngân sách hàng ngày trên tài khoản chính chủ.'
      },
      {
        step: '04',
        title: 'Cài đặt kịch bản trả lời tin nhắn tự động',
        description: 'Soạn sẵn tin nhắn chào mừng, menu bảng giá và form xin số điện thoại tự động.'
      },
      {
        step: '05',
        title: 'Tối ưu hàng tuần & Đo lường khách đến tiệm',
        description: 'Lọc đối tượng, loại bỏ click ảo, duy trì chi phí tin nhắn rẻ nhất.'
      }
    ],
    requirements: [
      'Trang Fanpage Facebook của tiệm (nếu chưa có, LocalMate hỗ trợ tạo chuẩn)',
      'Thẻ thanh toán Visa/Mastercard hoặc ví MoMo liên kết tài khoản quảng cáo của bạn',
      'Hình ảnh thực tế không gian quán, sản phẩm hoặc tay nghề làm việc'
    ],
    proofCaseStudySlug: 'quan-an-ong-tam-saigon',
    proofHighlight: 'Tăng 65% lượng tin nhắn đặt bàn vào dịp cuối tuần từ cư dân trong bán kính 3km.',
    faqs: [
      {
        question: 'Chạy Facebook Ads bán kính 5km có thực sự hiệu quả không?',
        answer: 'Cực kỳ hiệu quả đối với các ngành kinh doanh có địa điểm đón khách hoặc phục vụ tận nơi. Cư dân trong bán kính 5km có thể ghé tiệm bạn chỉ sau 5-15 phút đi xe máy, tỷ lệ chuyển đổi từ người xem thành khách mua thật cao hơn gấp nhiều lần so với chạy phủ toàn thành phố.'
      },
      {
        question: 'Tôi có phải trực trả lời tin nhắn không?',
        answer: 'Có. LocalMate thiết lập kịch bản tin nhắn tự động để chào khách và lấy số điện thoại, nhưng việc tư vấn nhiệt tình và chốt lịch hẹn sẽ do bạn hoặc nhân viên quán thực hiện để đảm bảo chăm sóc khách chu đáo nhất.'
      }
    ],
    relatedServiceSlugs: ['google-ads-dia-phuong', 'cham-soc-website-chuan-seo', 'google-maps'],
    relatedArticleSlugs: ['cach-len-lich-dang-bai-khong-bi-bi-y-tuong', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Tư Vấn Facebook Ads Bán Kính 5km',
    secondaryCTA: 'Xem Mẫu Chiến Dịch Mẫu',
    status: 'ACTIVE'
  },
  {
    id: 'cham-soc-website-chuan-seo',
    slug: 'cham-soc-website-chuan-seo',
    name: 'Dịch vụ chăm sóc website chuẩn SEO & Vận hành — An tâm kinh doanh, bảo hành đến 5 năm',
    shortName: 'Chăm Sóc Website Chuẩn SEO',
    category: 'Vận Hành & Chăm Sóc',
    categorySlug: 'cham-soc-website',
    badge: 'Bảo Hành Đến 5 Năm ⭐',
    heroAsset: '/assets/illustrations/roadmap-flag-path.png',
    problem: 'Website làm xong bị bỏ xơ xác nhiều tháng, không ai cập nhật bài viết hay đổi giá mới; trang tải chậm rì, dính lỗi kỹ thuật, hết hạn bảo mật SSL hoặc tệ hơn là bị hack, sập nguồn mà không biết gọi ai sửa.',
    outcome: 'Website luôn chạy mượt mà, tải siêu tốc < 1.2s, bảo mật an toàn tuyệt đối; bài viết chuẩn SEO lên đều đặn kéo khách tự nhiên từ Google; hỗ trợ cập nhật nội dung tức thì qua Zalo và bảo hành kỹ thuật lên đến 5 năm.',
    promise: 'Bảo hành vận hành lên đến 5 năm. Xử lý yêu cầu sửa đổi nội dung trong 15–30 phút. Hoàn tiền nếu để website bị gián đoạn hoạt động quá cam kết.',
    description: 'Giải pháp "Phòng kỹ thuật & Nội dung số thuê ngoài" trọn gói cho doanh nghiệp nhỏ. Bạn chỉ cần gửi yêu cầu qua Zalo, LocalMate lo toàn bộ từ bảo mật, sao lưu, tối ưu tốc độ, kiểm tra nút bấm hotline đến viết bài chuẩn SEO đưa website lên top Google bền vững.',
    startingPrice: 'Từ 590.000đ / tháng (Gói Chuẩn) / 990.000đ / tháng (SEO & Nội Dung)',
    priceNote: 'Thanh toán theo tháng hoặc theo năm linh hoạt. Tặng thêm tháng sử dụng khi đăng ký dài hạn.',
    sla: 'Hỗ trợ kỹ thuật 24/7 — Xử lý thay đổi nội dung trong 15–30 phút',
    suitableFor: [
      'Doanh nghiệp SME, phòng khám, công ty dịch vụ không có nhân sự IT hoặc Content chuyên trách',
      'Cửa hàng có website nhưng quá bận rộn làm nghề, không có thời gian viết bài và chăm sóc kỹ thuật',
      'Chủ cơ sở từng bị các đơn vị thiết kế web cũ bỏ rơi sau khi bàn giao, khi web lỗi không ai hỗ trợ'
    ],
    notSuitableFor: [
      'Hệ thống phần mềm ngân hàng, ứng dụng tài chính cần đội ngũ kỹ sư túc trực on-site 24/7'
    ],
    deliverables: [
      'Giám sát Uptime & Tốc độ 24/7: Đảm bảo website luôn trực tuyến 99.9%, tự động phát hiện và khắc phục sự cố ngay',
      'Sao lưu dữ liệu định kỳ hàng tuần: Lưu trữ bản backup độc lập trên máy chủ an toàn, sẵn sàng khôi phục trong 15 phút',
      'Duy trì bảo mật SSL & Tường lửa Cloudflare: Gia hạn chứng chỉ bảo mật HTTPS, chặn đứng tấn công DDoS và spam bot',
      'Cập nhật thông tin không giới hạn: Đổi banner, cập nhật giá món, dịch vụ mới, địa chỉ, số hotline theo yêu cầu qua Zalo',
      'Biên tập bài viết chuẩn SEO định kỳ: Viết 04–08 bài viết chuyên môn sâu, nghiên cứu từ khóa giúp website tăng trưởng traffic tự nhiên',
      'Kiểm tra định kỳ các nút chuyển đổi: Test liên tục nút Gọi Hotline, nút chat Zalo, form đặt hẹn để không sót bất kỳ khách nào',
      'Bảo hành kỹ thuật toàn diện lên đến 5 năm: Miễn phí sửa chữa mọi lỗi phát sinh về mã nguồn, giao diện và tương thích trình duyệt',
      'Báo cáo thứ hạng & lượt truy cập hàng tháng: Gửi file tổng kết trực quan về số lượng khách vào web và các từ khóa đang lên top'
    ],
    process: [
      {
        step: '01',
        title: 'Tiếp nhận & Kiểm toán toàn diện website',
        description: 'Rà soát tốc độ, lỗ hổng bảo mật, lỗi hiển thị di động và các nút liên hệ hiện tại.'
      },
      {
        step: '02',
        title: 'Tối ưu hạ tầng & Cài đặt bảo mật',
        description: 'Cấu hình Cloudflare CDN, kích hoạt SSL, thiết lập tự động backup tuần.'
      },
      {
        step: '03',
        title: 'Lập kế hoạch nội dung & Từ khóa chuẩn SEO',
        description: 'Lên danh sách chủ đề bài viết hữu ích và từ khóa tìm kiếm cho ngành nghề của bạn.'
      },
      {
        step: '04',
        title: 'Vận hành & Cập nhật thường nhật',
        description: 'Viết bài chuẩn SEO, cập nhật banner khuyến mãi khi bạn yêu cầu qua Zalo.'
      },
      {
        step: '05',
        title: 'Đo lường & Báo cáo minh bạch hàng tháng',
        description: 'Gửi số liệu truy cập GA4, thứ hạng từ khóa và đề xuất cải tiến định kỳ.'
      }
    ],
    requirements: [
      'Quyền quản trị website (WordPress, CMS, cPanel hoặc mã nguồn Git)',
      'Tài liệu sản phẩm, dịch vụ hoặc định hướng nội dung của cửa hàng'
    ],
    proofCaseStudySlug: 'nha-thau-nhom-kinh-binh-duong',
    proofHighlight: 'Duy trì top 1 tìm kiếm nhôm kính tại Bình Dương suốt 18 tháng và bảo đảm website hoạt động không gián đoạn 1 giây nào.',
    faqs: [
      {
        question: 'Chính sách bảo hành lên đến 5 năm hoạt động như thế nào?',
        answer: 'Khi sử dụng dịch vụ chăm sóc website định kỳ của LocalMate, toàn bộ hạ tầng kỹ thuật, giao diện hiển thị, tương thích thiết bị di động và bảo mật mã nguồn của website đều được bảo hành xuyên suốt lên đến 5 năm. Bất kỳ khi nào web gặp lỗi hiển thị, xung đột mã nguồn hay sự cố hosting, đội ngũ kỹ thuật LocalMate sẽ khắc phục ngay lập tức mà không thu thêm bất kỳ phụ phí nào.'
      },
      {
        question: 'Khi tôi muốn sửa một câu chữ hoặc đổi giá thì báo cho ai?',
        answer: 'Bạn chỉ cần nhắn tin qua nhóm Zalo riêng được LocalMate tạo riêng cho tiệm của bạn. Kỹ thuật viên phụ trách sẽ xác nhận và hoàn thành việc cập nhật chỉ trong 15–30 phút làm việc.'
      },
      {
        question: 'LocalMate có nhận chăm sóc website do đơn vị khác thiết kế từ trước không?',
        answer: 'Có. LocalMate nhận tiếp quản và chăm sóc cho các website chạy mã nguồn WordPress, React, HTML/CSS hoặc các nền tảng phổ biến khác sau khi thực hiện kiểm tra kỹ thuật ban đầu.'
      }
    ],
    relatedServiceSlugs: ['google-ads-dia-phuong', 'facebook-ads-dia-phuong', 'google-maps', 'website-landing-page'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao', 'cach-len-lich-dang-bai-khong-bi-bi-y-tuong'],
    primaryCTA: 'Đăng Ký Chăm Sóc Web (Bảo Hành 5 Năm)',
    secondaryCTA: 'Xem Các Gói Vận Hành',
    status: 'ACTIVE'
  },
  {
    id: 'google-maps',
    slug: 'google-maps',
    name: 'Dịch vụ Google Maps — Xác minh GPS chính chủ 100%, chống cướp Maps & QR Review 5 sao',
    shortName: 'Google Maps Chính Chủ',
    category: 'Bản Đồ & Khách Địa Phương',
    categorySlug: 'google-maps',
    badge: 'Chính Chủ 100% ⭐',
    heroAsset: '/assets/illustrations/mascot-local-map.png',
    problem: 'Khách hàng xung quanh mở điện thoại tìm kiếm nhưng chỉ thấy cơ sở đối thủ, hoặc vị trí của bạn chưa có trên bản đồ, bị sai lệch GPS, hay tệ hơn là bị đối thủ chơi xấu đổi hotline, đề xuất đóng cửa vĩnh viễn và cướp quyền Maps.',
    outcome: 'Hoàn thiện hồ sơ Google Maps được Google xác minh GPS chính chủ 100%, kích hoạt khiên bảo vệ chống cướp Maps, trang bị bộ QR Review 5 sao để bàn giúp khách quét đánh giá dễ dàng và thu hút hàng trăm khách ghé tiệm mỗi tháng.',
    promise: '100% chính chủ bằng Gmail của bạn (Primary Owner), không giữ quyền, hướng dẫn quản trị trực quan, cam kết bảo hành kỹ thuật & bảo vệ vị trí lên đến 5 năm.',
    description: 'LocalMate trực tiếp đo đạc tọa độ GPS thực tế, đăng ký xác minh chính chủ với Google, chuẩn hóa toàn diện danh mục ngành nghề, hình ảnh sắc nét và thiết lập cơ chế giám sát chống bị đối thủ sửa lén thông tin. Đi kèm bộ ấn phẩm mã QR Review 5 sao chuẩn in ấn để bàn.',
    startingPrice: 'Từ 299.000đ',
    priceNote: 'Giá gốc bình dân cho tiểu thương & hộ kinh doanh • Bảo hành kỹ thuật lên đến 5 năm.',
    sla: '3–5 ngày hoàn tất xác minh & bàn giao',
    suitableFor: [
      'Quán ăn, nhà hàng, quán cafe, trà sữa, quán nhậu đón khách tại chỗ quanh khu vực',
      'Phòng khám, nha khoa, tiệm thuốc, thẩm mỹ viện, spa, salon tóc cần định vị uy tín',
      'Gara ô tô, tiệm sửa xe máy, tiệm sửa điện nước, cứu hộ phục vụ theo bán kính quận huyện',
      'Cơ sở chưa có trên bản đồ, bị đối thủ báo cáo sai lệch hoặc bị mất quyền quản trị Maps'
    ],
    notSuitableFor: [
      'Mô hình kinh doanh ảo 100% không có địa chỉ thực tế và không có kho hàng tiếp nhận khách',
      'Đơn vị muốn mua đánh giá ảo (review bot) — LocalMate kiên quyết chỉ làm Review thật từ khách trải nghiệm'
    ],
    deliverables: [
      'Xác minh GPS chính chủ 100% bằng tài khoản Gmail của chính bạn (quyền Chủ sở hữu chính - Primary Owner)',
      'Định vị tọa độ GPS chuẩn xác từng mét, hiển thị rõ số nhà, ngõ hẻm và cổng đón khách',
      'Thiết lập khiên giám sát chống cướp Maps: Cảnh báo và tự động khôi phục nếu đối thủ đề xuất chỉnh sửa sai lệch',
      'Chuẩn hóa đồng bộ thông tin NAP (Tên tiệm, Địa chỉ, Hotline, Giờ mở cửa, Website/Zalo)',
      'Bộ hình ảnh thực tế 15–20 tấm rõ đẹp: Mặt tiền, biển hiệu, không gian trải nghiệm và sản phẩm',
      'Thiết kế bộ mã QR Review 5 sao chuyên nghiệp (file in PDF vector độ phân giải cao + file mẫu standee mica để bàn)',
      'Cài đặt sẵn danh mục sản phẩm/dịch vụ chi tiết kèm mức giá niêm yết công khai trên Maps',
      'Bộ câu hỏi & giải đáp thường gặp (FAQ) tự động trên Google Business Profile',
      'Biên bản bàn giao và cam kết đồng hành bảo hành kỹ thuật lên đến 5 năm'
    ],
    process: [
      {
        step: '01',
        title: 'Khảo sát tọa độ GPS & Hồ sơ',
        description: 'Đo đạc vị trí thực tế, kiểm tra lịch sử địa điểm và rà soát các điểm trùng lặp gây xung đột.'
      },
      {
        step: '02',
        title: 'Xác minh Google chính chủ 100%',
        description: 'Tiến hành quy trình xác minh trực tiếp bằng Gmail của bạn, đảm bảo bạn nắm toàn quyền sở hữu gốc.'
      },
      {
        step: '03',
        title: 'Chuẩn hóa hình ảnh & Dữ liệu',
        description: 'Tải bộ ảnh sắc nét, viết mô tả ngành nghề chuẩn SEO địa phương và bổ sung bảng giá chi tiết.'
      },
      {
        step: '04',
        title: 'Bàn giao Bộ QR Review 5 Sao',
        description: 'Xuất file in ấn mã QR chuyên dụng để bàn, hướng dẫn nhân viên cách xin đánh giá 5 sao từ khách quen.'
      },
      {
        step: '05',
        title: 'Kích hoạt khiên bảo vệ 5 năm',
        description: 'Cài đặt chế độ theo dõi chống cướp quyền, kỹ thuật viên địa phương túc trực hỗ trợ suốt 5 năm.'
      }
    ],
    requirements: [
      'Tên cửa hàng, địa chỉ thực tế chính xác và số điện thoại hotline nhận cuộc gọi',
      'Ảnh chụp biển hiệu mặt tiền rõ ràng và hình ảnh không gian bên trong quán',
      'Tài khoản Gmail cá nhân của bạn để nhận quyền Chủ sở hữu chính'
    ],
    proofCaseStudySlug: 'quan-an-ong-tam-saigon',
    proofHighlight: 'Tăng 320% lượt bấm gọi và chỉ đường trong 60 ngày sau khi xác minh chính chủ và đặt bộ QR Review 5 sao tại bàn.',
    faqs: [
      {
        question: 'Tôi có thực sự làm chủ 100% vị trí Google Maps sau khi làm không?',
        answer: 'Chắc chắn 100%. LocalMate xác minh trực tiếp bằng Gmail của bạn hoặc chuyển quyền Chủ sở hữu chính (Primary Owner) sang cho bạn ngay khi hoàn tất. LocalMate tuyệt đối không giữ quyền hay thu phí duy trì quyền sở hữu của bạn.'
      },
      {
        question: 'Đối thủ có cướp được vị trí Maps của tôi hoặc đổi số điện thoại lén không?',
        answer: 'Google cho phép người dùng đề xuất chỉnh sửa, nên nhiều đối thủ lợi dụng để phá hoại. Với quy trình của LocalMate, chúng tôi cấu hình khiên bảo vệ với thông tin xác thực đầy đủ, giúp Google tự động từ chối các đề xuất chỉnh sửa ác ý, đồng thời hỗ trợ khôi phục ngay nếu có sự cố.'
      },
      {
        question: 'Bộ QR Review 5 sao hoạt động như thế nào?',
        answer: 'Khách hàng chỉ cần giơ camera điện thoại quét mã QR tại bàn hoặc quầy thu ngân, màn hình sẽ mở ngay trang đánh giá 5 sao cho tiệm của bạn mà không cần phải gõ tìm kiếm. Đây là cách tăng đánh giá thật nhanh nhất và an toàn tuyệt đối với Google.'
      },
      {
        question: 'Bảo hành 5 năm của LocalMate gồm những gì?',
        answer: 'Trong suốt 5 năm, nếu Google Maps của bạn bị lỗi định vị, bị thay đổi thông tin trái phép, hoặc cần cập nhật số điện thoại / giờ mở cửa ngày lễ tết, kỹ thuật viên LocalMate luôn sẵn sàng hỗ trợ bạn hoàn toàn miễn phí.'
      }
    ],
    relatedServiceSlugs: ['seo-tong-the-dia-phuong', 'toi-uu-toc-do-web', 'thuc-the-so-entity', 'seo-audit'],
    relatedArticleSlugs: ['huong-dan-toi-uu-google-business-profile', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Xác Minh Google Maps Chính Chủ',
    secondaryCTA: 'Khảo Sát Hiện Trạng Maps 0đ',
    status: 'ACTIVE'
  },
  {
    id: 'website-landing-page',
    slug: 'website-landing-page',
    name: 'Thiết kế website bán hàng và giới thiệu dịch vụ',
    shortName: 'Website & Trang Bán Hàng',
    category: 'Website & Bán Hàng',
    categorySlug: 'thiet-ke-website',
    badge: 'Nền Móng Online ⭐',
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: 'Chưa có website hoặc website cũ tải chậm, chữ nhỏ khó đọc trên điện thoại, khách vào xem không thấy bảng giá và không biết bấm đâu để gọi.',
    outcome: 'Có ngay trang web đẹp, rõ dịch vụ, rõ giá, tải nhanh trên điện thoại, khách bấm một nút là gọi Hotline hoặc nhắn Zalo được ngay.',
    promise: 'Xem thử mẫu website demo 0đ cho ngành nghề của bạn, hài lòng mới triển khai, nghiệm thu hoạt động tốt rồi mới thanh toán.',
    description: 'LocalMate làm website theo tiêu chí: Dễ hiểu — Rõ giá — Dễ liên hệ. Giao diện mở nhanh trong 2 giây trên điện thoại, có sẵn nút gọi Zalo, form báo giá và hướng dẫn tự chỉnh sửa cực kỳ đơn giản.',
    startingPrice: 'Từ 490.000đ (1 trang) / 2.900.000đ (Trọn gói)',
    priceNote: 'Giá báo trước, không tự phát sinh. Bàn giao đầy đủ tài khoản và quyền làm chủ.',
    sla: '3–7 ngày làm việc',
    suitableFor: [
      'Hộ kinh doanh, chủ tiệm, nhà thầu, xưởng sản xuất cần một trang web uy tín để gửi cho khách xem',
      'Doanh nghiệp chạy quảng cáo Google/Facebook cần trang giới thiệu tải nhanh và có nút gọi rõ ràng',
      'Cơ sở dịch vụ muốn công khai bảng giá, hình ảnh công trình và nhận tin nhắn tư vấn 24/7'
    ],
    notSuitableFor: [
      'Các sàn thương mại điện tử đa người bán khổng lồ như Shopee/Lazada'
    ],
    deliverables: [
      'Website hoàn chỉnh hiển thị đẹp trên cả điện thoại, máy tính bảng và máy tính',
      'Bố cục nội dung rõ ràng: Giới thiệu, Sản phẩm/Dịch vụ, Bảng giá, Quy trình, Liên hệ',
      'Thanh nút bấm liên hệ nhanh: Gọi Hotline, Nhắn tin Zalo, Form yêu cầu báo giá',
      'Tối ưu tốc độ mở trang nhanh dưới 2 giây và chứng chỉ bảo mật (ổ khóa xanh SSL)',
      'Tích hợp sẵn công cụ đếm số lượng người vào xem trang web mỗi ngày',
      'Bàn giao toàn bộ quyền quản trị và video hướng dẫn thay đổi nội dung dễ dàng'
    ],
    process: [
      {
        step: '01',
        title: 'Trao đổi nhu cầu',
        description: 'Bạn gửi thông tin dịch vụ, bảng giá hoặc trao đổi nhanh để chốt nội dung cần đưa lên web.'
      },
      {
        step: '02',
        title: 'Xem bản website mẫu 0đ',
        description: 'LocalMate dựng bản mẫu thực tế để bạn xem trước giao diện và cách trình bày.'
      },
      {
        step: '03',
        title: 'Hoàn thiện nội dung & Nút gọi',
        description: 'Điền đầy đủ thông tin, giá bán, hình ảnh và kiểm tra các nút bấm gọi điện.'
      },
      {
        step: '04',
        title: 'Kiểm tra trên điện thoại',
        description: 'Mở thử trên điện thoại thật để đảm bảo chữ to rõ, bấm gọi mượt mà.'
      },
      {
        step: '05',
        title: 'Bàn giao & Hướng dẫn',
        description: 'Bàn giao tài khoản, hướng dẫn sử dụng và thanh toán sau khi bạn đã ưng ý.'
      }
    ],
    requirements: [
      'Tên cửa hàng, ngành nghề kinh doanh và số điện thoại/Zalo',
      'Danh sách dịch vụ/sản phẩm chính và mức giá tham khảo (nếu có)',
      'Một vài hình ảnh thực tế của quán hoặc xưởng làm việc'
    ],
    proofCaseStudySlug: 'mam-non-tu-thuc-tphcm',
    proofHighlight: 'Phụ huynh dễ dàng xem học phí và bấm gọi tư vấn nhờ trang web rõ ràng, tải nhanh trên điện thoại.',
    faqs: [
      {
        question: 'Xem website demo 0đ có bị ép mua không?',
        answer: 'Hoàn toàn không. Nếu xem bản demo thấy không ưng ý, bạn có thể dừng lại mà không mất bất kỳ chi phí nào.'
      },
      {
        question: 'Chi phí duy trì hàng năm gồm những gì?',
        answer: 'Chỉ gồm tiền Tên miền (.vn hoặc .com) và nơi lưu trữ web (Hosting) theo đúng giá gốc của nhà cung cấp. LocalMate không thu thêm phí bản quyền hàng tháng.'
      }
    ],
    relatedServiceSlugs: ['google-ads', 'google-maps', 'content-marketing'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao', 'cach-doc-search-terms-google-ads'],
    primaryCTA: 'Nhận Website Demo 0đ',
    secondaryCTA: 'Xem Mẫu Website',
    status: 'ACTIVE'
  },
  {
    id: 'content-marketing',
    slug: 'content-marketing',
    name: 'Viết bài và chăm sóc Facebook, Google mỗi tháng',
    shortName: 'Viết Bài & Chăm Sóc Nội Dung',
    category: 'Chăm Sóc & Duy Trì',
    categorySlug: 'viet-bai-cham-soc',
    badge: 'Chăm Sóc Đều Đặn ⭐',
    heroAsset: '/assets/illustrations/roadmap-flag-path.png',
    problem: 'Chủ cơ sở bận rộn làm nghề, không có thời gian viết bài, làm hình ảnh khiến trang Facebook và Google bị bỏ trống nhiều tháng, khách vào xem thấy thiếu tin tưởng.',
    outcome: 'Trang Facebook và Google luôn có bài viết mới đều đặn, hình ảnh sản phẩm đẹp mắt, thể hiện sự chuyên nghiệp và uy tín khi khách hàng tìm hiểu.',
    promise: 'Gửi lịch bài viết và hình ảnh cho bạn duyệt trước khi đăng, hỗ trợ sửa đổi nhanh qua Zalo.',
    description: 'LocalMate chuẩn bị nội dung, thiết kế hình ảnh và lên lịch đăng bài định kỳ để bạn không phải vắt óc suy nghĩ "hôm nay đăng gì". Kênh bán hàng của bạn luôn hoạt động và sẵn sàng đón khách.',
    startingPrice: 'Từ 990.000đ / tháng',
    priceNote: 'Gói chăm sóc hàng tháng linh hoạt, có thể tạm dừng bất cứ lúc nào.',
    sla: 'Hỗ trợ nhanh trong vòng 4–24h qua Zalo',
    suitableFor: [
      'Doanh nghiệp, cửa hàng đã có Fanpage hoặc Website nhưng không có thời gian viết bài đều',
      'Chủ tiệm muốn chia sẻ kiến thức làm nghề, kinh nghiệm thực tế để khách tin tưởng hơn',
      'Đơn vị cần có người hỗ trợ cập nhật thông tin sản phẩm và kiểm tra website hàng tuần'
    ],
    notSuitableFor: [
      'Nhu cầu thuê cả đoàn làm phim quay TVC quảng cáo truyền hình lớn'
    ],
    deliverables: [
      'Kế hoạch bài đăng chi tiết trong tháng (chủ đề, nội dung, ngày đăng)',
      '12–15 bài viết giới thiệu dịch vụ, chia sẻ mẹo hay và giải đáp thắc mắc của khách',
      '12–15 hình ảnh hoặc banner thiết kế chỉn chu có gắn logo cửa hàng',
      'Cập nhật thông tin ưu đãi hoặc sản phẩm mới khi bạn có yêu cầu',
      'Kiểm tra định kỳ để đảm bảo website hoạt động ổn định và không bị lỗi'
    ],
    process: [
      {
        step: '01',
        title: 'Thống nhất chủ đề tháng',
        description: 'Trao đổi xem tháng này tiệm có món mới, dịch vụ mới hay ưu đãi gì cần giới thiệu.'
      },
      {
        step: '02',
        title: 'Viết bài & Làm hình ảnh',
        description: 'Đội ngũ LocalMate soạn bài, thiết kế hình ảnh và gửi cho bạn duyệt.'
      },
      {
        step: '03',
        title: 'Đăng bài theo lịch',
        description: 'Lên lịch đăng đều đặn mỗi tuần lên Facebook, Website và Google Maps.'
      },
      {
        step: '04',
        title: 'Kiểm tra kỹ thuật',
        description: 'Kiểm tra tốc độ trang web và đảm bảo nút gọi hotline luôn hoạt động tốt.'
      },
      {
        step: '05',
        title: 'Báo cáo cuối tháng',
        description: 'Gửi bảng tổng kết những bài đã đăng và kế hoạch cho tháng tiếp theo.'
      }
    ],
    requirements: [
      'Quyền đăng bài lên Fanpage/Website hoặc tài khoản cộng tác viên',
      'Ảnh chụp sản phẩm hoặc công việc thực tế (nếu có) để bài viết chân thật hơn'
    ],
    proofCaseStudySlug: 'nha-thau-nhom-kinh-binh-duong',
    proofHighlight: 'Đăng bài hình ảnh thi công thực tế đều đặn giúp khách hàng tin tưởng và gọi hỏi báo giá nhiều hơn.',
    faqs: [
      {
        question: 'Tôi có phải ký hợp đồng nhiều tháng không?',
        answer: 'Không bắt buộc. Bạn có thể thanh toán theo từng tháng. Khi muốn dừng, chỉ cần báo trước 7 ngày.'
      },
      {
        question: 'Tôi có được duyệt bài trước khi đăng không?',
        answer: 'Có. Tất cả bài viết và hình ảnh đều được gửi cho bạn xem và đồng ý qua Zalo trước khi bấm đăng.'
      }
    ],
    relatedServiceSlugs: ['website-landing-page', 'google-maps', 'google-ads'],
    relatedArticleSlugs: ['cach-len-lich-dang-bai-khong-bi-bi-y-tuong', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Đăng Ký Chăm Sóc Nội Dung',
    secondaryCTA: 'Xem Kế Hoạch Mẫu',
    status: 'ACTIVE'
  },
  // Dedicated Landing Pages for Specific Search Intents
  {
    id: 'thiet-ke-website',
    slug: 'thiet-ke-website',
    name: 'Dịch vụ thiết kế website cho doanh nghiệp nhỏ & cửa hàng',
    shortName: 'Thiết Kế Website',
    category: 'Website & Bán Hàng',
    categorySlug: 'thiet-ke-website',
    badge: 'Website Chuẩn Di Động ⭐',
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: 'Chưa có website để khách xem thông tin hoặc website cũ quá rườm rà, xem trên điện thoại bị vỡ khung, không thấy giá cả rõ ràng.',
    outcome: 'Sở hữu website gọn nhẹ, trình bày sản phẩm đẹp mắt, hiển thị chuẩn trên mọi điện thoại, khách bấm một nút là gọi hotline hoặc chat Zalo.',
    promise: 'Dựng bản demo thực tế 0đ, duyệt xong mới làm, nghiệm thu hài lòng mới thanh toán.',
    description: 'LocalMate thiết kế website cho hộ kinh doanh, cửa hàng, công ty nhỏ với đầy đủ trang giới thiệu, danh mục sản phẩm, bảng giá, quy trình làm việc và nút gọi điện thuận tiện.',
    startingPrice: 'Từ 490.000đ (1 trang) / 2.900.000đ (Trọn gói)',
    priceNote: 'Báo giá một lần, không phát sinh chi phí ẩn.',
    sla: '3–7 ngày làm việc',
    suitableFor: [
      'Cửa hàng, tiệm làm đẹp, xưởng sản xuất, nhà thầu xây dựng cần có web uy tín gửi khách',
      'Doanh nghiệp mới mở cần hiện diện trên Google nhanh chóng và tiết kiệm'
    ],
    notSuitableFor: [
      'Sàn thương mại điện tử đa người bán quy mô lớn'
    ],
    deliverables: [
      'Website chuẩn di động, mở nhanh dưới 2 giây',
      'Đầy đủ thông tin giới thiệu, sản phẩm, bảng giá và liên hệ',
      'Nút gọi Hotline và Chat Zalo ghim cố định dễ bấm',
      'Chứng chỉ bảo mật SSL và mã nguồn bàn giao 100%'
    ],
    process: [
      { step: '01', title: 'Tiếp nhận thông tin', description: 'Gửi tên quán, dịch vụ và số hotline.' },
      { step: '02', title: 'Lên website mẫu 0đ', description: 'Xem trước giao diện trên điện thoại.' },
      { step: '03', title: 'Hoàn thiện nội dung', description: 'Điền thông tin bảng giá và sản phẩm.' },
      { step: '04', title: 'Nghiệm thu & Bàn giao', description: 'Kiểm tra hoạt động tốt rồi thanh toán.' }
    ],
    requirements: ['Tên cơ sở, số hotline/Zalo, thông tin sản phẩm và một số hình ảnh thực tế'],
    faqs: [
      { question: 'Làm web xong tôi có tự sửa chữ hay đổi giá được không?', answer: 'Có, LocalMate hướng dẫn bạn tự thay đổi câu chữ, bảng giá rất đơn giản.' }
    ],
    relatedServiceSlugs: ['google-maps', 'google-ads', 'content-marketing'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Nhận Mẫu Website 0đ',
    secondaryCTA: 'Xem Bảng Giá Web',
    status: 'ACTIVE'
  },
  {
    id: 'landing-page',
    slug: 'landing-page',
    name: 'Thiết kế trang giới thiệu 1 trang (Landing Page) giá từ 490k',
    shortName: 'Website 1 Trang',
    category: 'Website & Bán Hàng',
    categorySlug: 'thiet-ke-website',
    badge: 'Tiết Kiệm & Nhanh Gọn ⭐',
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: 'Chỉ cần một trang đơn giản để giới thiệu 1 dịch vụ hoặc chạy quảng cáo mà không muốn tốn nhiều triệu đồng làm website lớn.',
    outcome: 'Có ngay một trang web 1 trang tinh gọn, tập trung giới thiệu đúng thứ bạn bán, có bảng giá và nút gọi ngay.',
    promise: 'Bàn giao nhanh trong 24–48h, giá chỉ từ 490.000đ, không chi phí ẩn.',
    description: 'Giải pháp cực kỳ phù hợp cho người mới mở quán, thợ làm nghề, người chạy quảng cáo thử nghiệm cần một trang đích rõ ràng và chốt khách nhanh.',
    startingPrice: 'Từ 490.000đ',
    priceNote: 'Trọn gói trang giới thiệu 1 trang hoàn chỉnh.',
    sla: '24–48 giờ làm việc',
    suitableFor: [
      'Chạy quảng cáo cho 1 chương trình khuyến mãi hoặc 1 dịch vụ mũi nhọn',
      'Người làm nghề tự do, hộ kinh doanh cần trang thông tin ngắn gọn để khách bấm gọi'
    ],
    notSuitableFor: [
      'Website có hàng trăm sản phẩm bán lẻ cần giỏ hàng phức tạp'
    ],
    deliverables: [
      'Trang giới thiệu 1 trang chuẩn di động',
      'Nút gọi Hotline và Chat Zalo trực tiếp',
      'Bảng giá và form nhận thông tin khách hàng',
      'Bàn giao đầy đủ quyền quản trị'
    ],
    process: [
      { step: '01', title: 'Gửi nội dung', description: 'Gửi thông tin dịch vụ và hình ảnh cần đưa lên trang.' },
      { step: '02', title: 'Dựng trang nhanh', description: 'LocalMate hoàn thiện giao diện trong 1–2 ngày.' },
      { step: '03', title: 'Kiểm tra & Bàn giao', description: 'Duyệt thử trên điện thoại và nhận bàn giao.' }
    ],
    requirements: ['Tên dịch vụ, số hotline nhận cuộc gọi, bảng giá và ưu đãi (nếu có)'],
    faqs: [
      { question: 'Website 1 trang có xem được trên điện thoại không?', answer: 'Có, hiển thị cực kỳ đẹp mắt và tải rất nhanh trên mọi dòng điện thoại.' }
    ],
    relatedServiceSlugs: ['google-ads', 'google-maps', 'website-landing-page'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Làm Website 1 Trang 490k',
    secondaryCTA: 'Xem Mẫu Trang 490k',
    status: 'ACTIVE'
  },
  {
    id: 'seo-tong-the-dia-phuong',
    slug: 'seo-tong-the-dia-phuong',
    name: 'SEO Tổng Thể Địa Phương — Phủ sóng bán kính 3–10km, từ khóa có dấu & không dấu',
    shortName: 'SEO Tổng Thể Địa Phương',
    category: 'Bản Đồ & Khách Địa Phương',
    categorySlug: 'google-maps',
    badge: 'Bán Kính 3-10km ⭐',
    heroAsset: '/assets/illustrations/mascot-local-seo.png',
    problem: 'Khách hàng quanh khu vực (bán kính 3–10km) gõ tìm dịch vụ lúc cần gấp nhưng tiệm của bạn không xuất hiện, hoặc chỉ hiển thị với vài từ khóa rất dài mà không phủ được các từ khóa thực tế mà người dân hay tìm (cả có dấu và không dấu).',
    outcome: 'Đưa thương hiệu phủ kín Top 3 Google Maps & Google Search trong toàn bộ bán kính 3–10km quanh cơ sở kinh doanh, gom trọn lưu lượng tìm kiếm từ khóa có dấu & không dấu, kéo khách ghé tiệm và gọi hotline liên tục.',
    promise: 'Nghiên cứu từ khóa thực tế theo bán kính địa bàn, tối ưu Onpage & tín hiệu Local Citations, hỗ trợ KTV 1-1 tại chỗ, cam kết bảo hành đồng hành kỹ thuật lên đến 5 năm.',
    description: 'LocalMate tối ưu SEO tổng thể địa phương dựa trên hành vi thực tế của khách hàng quanh cơ sở: từ các từ khóa không dấu như "sua xe gan day", "nha khoa uy tin q7" đến các từ khóa cụ thể theo tên đường, ngõ xóm, phường xã. Kết hợp đồng bộ tín hiệu trích dẫn địa phương (Local Citations) để Google tự tin đẩy bạn lên top đầu.',
    startingPrice: 'Từ 390.000đ (Thiết lập) / 990.000đ (Duy trì tháng)',
    priceNote: 'Giá gốc bình dân • Hiệu quả đo lường bằng khách gọi thật • Bảo hành 5 năm.',
    sla: '3–5 ngày tối ưu đợt đầu, tăng trưởng đều đặn theo tuần',
    suitableFor: [
      'Quán ăn, nhà hàng, quán nhậu, cafe muốn đông khách trong phạm vi 3–10km',
      'Phòng khám, nha khoa, tiệm kính, tiệm thuốc, thẩm mỹ viện, spa, làm đẹp',
      'Thợ sửa khoá, sửa điện lạnh, sửa ống nước, cứu hộ bình ắc quy cần khách gọi gấp',
      'Cơ sở đã có Google Maps nhưng bị kẹt ở trang 2, trang 3 hoặc ít cuộc gọi'
    ],
    notSuitableFor: [
      'Doanh nghiệp kinh doanh phần mềm B2B toàn cầu không phục vụ khách tại địa phương',
      'Website cá cược, vi phạm chính sách pháp luật Việt Nam'
    ],
    deliverables: [
      'Bộ từ khóa phủ sóng bán kính 3–10km: 50+ từ khóa có dấu & không dấu sát nhu cầu khách tìm',
      'Tối ưu On-page địa phương: Tiêu đề, Geo Meta Tags, thẻ Heading H1-H3 theo địa danh quận huyện',
      'Tối ưu hồ sơ Google Business Profile: Danh mục phụ (Secondary categories), dịch vụ và bài đăng cập nhật',
      'Xây dựng 25–40 trích dẫn địa phương (Local Citations) trên các danh bạ uy tín tại Việt Nam',
      'Cấu hình mã nhúng bản đồ Google Maps và tín hiệu tương tác địa lý (Geo Tagged Photos)',
      'Tạo kịch bản và mã QR xin đánh giá 5 sao có chứa từ khóa ngành nghề từ khách thật',
      'Báo cáo thứ hạng từ khóa theo bán kính địa lý (Geo-Grid Ranking Report) minh bạch'
    ],
    process: [
      {
        step: '01',
        title: 'Quét bán kính & Phân tích từ khóa',
        description: 'Đo lường thứ hạng hiện tại theo lưới bán kính 3km, 5km, 10km và lập bảng từ khóa có/không dấu.'
      },
      {
        step: '02',
        title: 'Chuẩn hóa On-page & Maps',
        description: 'Tối ưu lại thông tin website và Google Maps đồng nhất với nhau từng dấu phẩy.'
      },
      {
        step: '03',
        title: 'Phủ Local Citations địa phương',
        description: 'Khai báo cơ sở lên các trang vàng, bản đồ vệ tinh và danh bạ địa phương uy tín.'
      },
      {
        step: '04',
        title: 'Tối ưu tương tác người dùng',
        description: 'Triển khai mã QR xin đánh giá có chứa từ khóa mục tiêu để gia tăng tín hiệu thực tế.'
      },
      {
        step: '05',
        title: 'Theo dõi thứ hạng & Bảo hành 5 năm',
        description: 'Cập nhật định kỳ, giữ vững vị trí Top trước đối thủ cạnh tranh và bảo hành kỹ thuật 5 năm.'
      }
    ],
    requirements: [
      'Địa chỉ đón khách chính xác và danh sách dịch vụ chủ đạo muốn đẩy mạnh',
      'Quyền quản trị Google Maps hoặc quyền quản trị website (nếu có)'
    ],
    proofCaseStudySlug: 'tiem-banh-tiem-hoa-an-nhien',
    proofHighlight: 'Tăng 4.2 lần lượt hiển thị tìm kiếm không dấu ("tiem hoa gan day") và lượng khách ghé mua trực tiếp sau 45 ngày.',
    faqs: [
      {
        question: 'Tại sao phải tối ưu cả từ khóa KHÔNG DẤU?',
        answer: 'Hơn 70% người dùng khi mở điện thoại tìm kiếm lúc đang đi đường hoặc cần gấp đều gõ không dấu (ví dụ: "sua khoa q1", "tiem thuoc gan nhat"). Nếu chỉ làm từ khóa có dấu, bạn sẽ bỏ sót tệp khách hàng tiềm năng lớn nhất này.'
      },
      {
        question: 'Bán kính 3–10km là như thế nào?',
        answer: 'Google ưu tiên khoảng cách địa lý (Proximity). LocalMate tối ưu tín hiệu địa lý để tiệm của bạn không chỉ đứng top ngay tại cửa hàng mà còn lan tỏa mạnh mẽ ra các phường lân cận trong bán kính 3 đến 10km.'
      },
      {
        question: 'Cam kết bảo hành 5 năm hỗ trợ những gì?',
        answer: 'LocalMate cam kết đồng hành cùng bạn suốt 5 năm. Khi Google cập nhật thuật toán, hoặc có đối thủ mới xuất hiện tranh chấp vị trí, LocalMate hỗ trợ rà soát, tư vấn và tinh chỉnh kỹ thuật để duy trì hiệu quả kinh doanh cho bạn.'
      }
    ],
    relatedServiceSlugs: ['google-maps', 'toi-uu-toc-do-web', 'thuc-the-so-entity', 'seo-audit'],
    relatedArticleSlugs: ['huong-dan-toi-uu-google-business-profile', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Tư Vấn SEO Địa Phương 3-10km',
    secondaryCTA: 'Khảo Sát Từ Khóa Khu Vực 0đ',
    status: 'ACTIVE'
  },
  {
    id: 'toi-uu-toc-do-web',
    slug: 'toi-uu-toc-do-web',
    name: 'Tối Ưu Tốc Độ Web — Cam kết PageSpeed 90+, mở dưới 1s trên Cloudflare',
    shortName: 'Tối Ưu Tốc Độ Web 90+',
    category: 'Kỹ Thuật & Tối Ưu',
    categorySlug: 'website-fix',
    badge: 'Cam Kết PageSpeed 90+ ⭐',
    heroAsset: '/assets/illustrations/pricing-laptop-analytics.png',
    problem: 'Website tải chậm trên 3 giây khiến hơn 53% khách hàng sốt ruột tắt trang và chuyển sang tiệm đối thủ. Không những vậy, web chậm còn khiến Google Ads bị trừ điểm chất lượng (phí click đắt hơn) và Google Search đánh tụt thứ hạng.',
    outcome: 'Website đạt điểm Google PageSpeed 90+ trên cả điện thoại và máy tính, tốc độ phản hồi mở trang dưới 1 giây trên toàn cầu nhờ hạ tầng Cloudflare Edge, giữ chân 100% khách vào trang.',
    promise: 'Cam kết kiểm tra bằng công cụ Google PageSpeed Insights thực tế, hoàn tiền 100% nếu không đạt cam kết 90+, cam kết bảo hành duy trì tốc độ lên đến 5 năm.',
    description: 'LocalMate cấu hình kỹ thuật chuyên sâu đưa website của bạn lên mạng lưới CDN 300+ thành phố toàn cầu của Cloudflare. Tự động nén ảnh WebP/AVIF không giảm nét, kích hoạt HTTP/3, Early Hints, dọn sạch mã thừa render-blocking và triệt tiêu hoàn toàn co giật khung hình (CLS = 0.000).',
    startingPrice: 'Từ 299.000đ',
    priceNote: 'Chi phí gốc trọn gói một lần • Không phát sinh • Bảo hành tốc độ 5 năm.',
    sla: 'Hoàn thành trong 24–48 giờ',
    suitableFor: [
      'Website doanh nghiệp, landing page chạy quảng cáo Google Ads / Facebook Ads bị chậm',
      'Website WordPress, Shopify, Laravel hoặc mã nguồn tùy chỉnh bị nặng do nhiều plugin và ảnh lớn',
      'Chủ doanh nghiệp muốn tối ưu trải nghiệm khách hàng và tăng điểm chất lượng quảng cáo'
    ],
    notSuitableFor: [
      'Website đặt trên máy chủ lậu bị nhiễm mã độc nặng chưa dọn virus (LocalMate có gói xử lý mã độc riêng)'
    ],
    deliverables: [
      'Tối ưu đạt Google PageSpeed Insights 90+ trên cả Mobile và Desktop',
      'Định tuyến và cấu hình CDN Cloudflare Edge Network miễn phí trọn đời',
      'Kích hoạt giao thức siêu tốc HTTP/3, QUIC và cơ chế nén Brotli hiện đại nhất',
      'Nén ảnh toàn bộ website sang chuẩn WebP/AVIF lossless (tiết kiệm 70% dung lượng)',
      'Loại bỏ triệt để CSS và JavaScript chặn hiển thị (Render-Blocking Resources)',
      'Tối ưu chỉ số Core Web Vitals: LCP < 1.2s, INP < 100ms, CLS = 0.000 (Zero layout shift)',
      'Cấu hình chứng chỉ bảo mật SSL/TLS 1.3 miễn phí trọn đời',
      'Biên bản bàn giao kèm ảnh chụp kết quả kiểm tra tốc độ trước & sau khi tối ưu'
    ],
    process: [
      {
        step: '01',
        title: 'Chẩn đoán Core Web Vitals',
        description: 'Chạy phân tích Google PageSpeed, xác định chính xác các file ảnh, script gây chậm trang.'
      },
      {
        step: '02',
        title: 'Cấu hình Cloudflare Edge CDN',
        description: 'Trỏ tên miền qua Cloudflare, kích hoạt bộ nhớ đệm biên và giao thức HTTP/3 siêu tốc.'
      },
      {
        step: '03',
        title: 'Nén tài nguyên & Dọn dẹp mã',
        description: 'Chuyển đổi ảnh sang WebP, thu nhỏ CSS/JS và trì hoãn tải các thư viện không cần thiết.'
      },
      {
        step: '04',
        title: 'Khử rung giật khung hình (CLS = 0)',
        description: 'Gán kích thước cố định cho hình ảnh và font chữ, đảm bảo trang không bị giật khi cuộn.'
      },
      {
        step: '05',
        title: 'Nghiệm thu PageSpeed 90+ & Bảo hành 5 năm',
        description: 'Khách hàng trực tiếp kiểm tra bằng Google PageSpeed, kích hoạt cam kết bảo hành 5 năm.'
      }
    ],
    requirements: [
      'Quyền quản trị tên miền hoặc quyền truy cập tài khoản quản trị website',
      'Địa chỉ link website cần tối ưu tốc độ'
    ],
    proofCaseStudySlug: 'nha-khoa-nucuoiduyen-tphcm',
    proofHighlight: 'Tăng tốc độ tải trang từ 4.8s xuống còn 0.7s trên Cloudflare Edge, điểm Mobile tăng từ 42 lên 96 điểm.',
    faqs: [
      {
        question: 'Tối ưu tốc độ có làm thay đổi giao diện hoặc mất dữ liệu trên web không?',
        answer: 'Tuyệt đối KHÔNG. LocalMate luôn sao lưu toàn bộ dữ liệu trước khi thực hiện. Việc tối ưu chỉ xử lý tầng nén file, mã nguồn và hạ tầng Cloudflare, toàn bộ nội dung và giao diện của bạn giữ nguyên 100% nhưng mượt hơn rất nhiều.'
      },
      {
        question: 'Dùng Cloudflare có phải trả phí hàng tháng cho Cloudflare không?',
        answer: 'Không. Gói Cloudflare tiêu chuẩn là hoàn toàn miễn phí trọn đời với đầy đủ tính năng CDN, SSL và chống DDoS. Bạn chỉ thanh toán một lần chi phí cấu hình ban đầu cho LocalMate.'
      },
      {
        question: 'Bảo hành tốc độ 5 năm được áp dụng thế nào?',
        answer: 'Trong 5 năm sử dụng, nếu bạn đăng thêm bài viết/sản phẩm mới làm web bị chậm, hoặc Cloudflare có bản cập nhật tối ưu mới, LocalMate sẽ hỗ trợ kiểm tra và tinh chỉnh lại tốc độ hoàn toàn miễn phí cho bạn.'
      }
    ],
    relatedServiceSlugs: ['google-maps', 'seo-tong-the-dia-phuong', 'thuc-the-so-entity', 'seo-audit'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao', 'huong-dan-toi-uu-google-business-profile'],
    primaryCTA: 'Tối Ưu Tốc Độ Web Ngay',
    secondaryCTA: 'Đo Tốc Độ Website 0đ',
    status: 'ACTIVE'
  },
  {
    id: 'thuc-the-so-entity',
    slug: 'thuc-the-so-entity',
    name: 'Dịch vụ Thực Thể Số (Entity) & Schema LocalBusiness Toàn Diện',
    shortName: 'Thực Thể Số & Schema',
    category: 'Kỹ Thuật & Tối Ưu',
    categorySlug: 'google-maps',
    badge: 'Định Danh Độc Nhất ⭐',
    heroAsset: '/assets/illustrations/mascot-local-seo.png',
    problem: 'Website và cửa hàng của bạn không được Google và các AI (ChatGPT, Gemini) nhận diện là một thực thể thương hiệu độc nhất. Kết quả tìm kiếm không hiện ngôi sao đánh giá, giờ mở cửa, và dễ bị thuật toán nhầm lẫn với đối thủ trùng tên.',
    outcome: 'Định danh thương hiệu vững chắc trên Google Knowledge Graph với trọn bộ cấu trúc dữ liệu Schema LocalBusiness chuẩn JSON-LD và đồng bộ thực thể số NAP trên toàn internet.',
    promise: 'Khai báo chuẩn 100% theo tiêu chuẩn schema.org, vượt qua kiểm tra của Google Rich Results Test, bảo hành duy trì cấu trúc dữ liệu lên đến 5 năm.',
    description: 'LocalMate triển khai gói định danh thực thể toàn diện cho điểm bán địa phương: cấu hình mã Schema JSON-LD chi tiết đến từng tọa độ GPS, mức giá, danh mục dịch vụ, giờ hoạt động và liên kết SameAs với tất cả mạng xã hội. Giúp Google hiểu rõ bạn là ai, ở đâu và cung cấp dịch vụ gì uy tín.',
    startingPrice: 'Từ 199.000đ',
    priceNote: 'Giá gốc bình dân • Chuẩn hóa dữ liệu có cấu trúc • Bảo hành 5 năm.',
    sla: 'Hoàn thành trong 24 giờ',
    suitableFor: [
      'Website bán hàng, website giới thiệu dịch vụ địa phương chưa có mã Schema',
      'Doanh nghiệp bị trùng tên hoặc có nhiều chi nhánh cần phân định rành mạch',
      'Đơn vị muốn xuất hiện Rich Snippets (ngôi sao, giá bán, câu hỏi thường gặp) trên Google'
    ],
    notSuitableFor: [
      'Doanh nghiệp không có website hoặc chưa có địa chỉ kinh doanh rõ ràng'
    ],
    deliverables: [
      'Cấu hình bộ mã Schema JSON-LD LocalBusiness hoặc ProfessionalService nâng cao',
      'Khai báo đầy đủ tọa độ GeoCoordinates (kinh độ, vĩ độ) khớp 100% với Google Maps',
      'Khai báo OpeningHoursSpecification (giờ mở cửa các ngày trong tuần và ngày lễ)',
      'Khai báo thuộc tính SameAs liên kết trực tiếp Facebook, Google Maps, Zalo, YouTube',
      'Khai báo PriceRange, Telephone, Email, PostalAddress và AggregateRating (đánh giá sao)',
      'Tạo sơ đồ liên kết Knowledge Graph thực thể thương hiệu',
      'Kiểm định và chứng nhận đạt 100% trên công cụ Google Rich Results Test'
    ],
    process: [
      {
        step: '01',
        title: 'Thu thập dữ liệu thực thể',
        description: 'Tổng hợp chính xác tên pháp nhân, địa chỉ, hotline, giờ mở cửa và liên kết mạng xã hội.'
      },
      {
        step: '02',
        title: 'Soạn mã Schema JSON-LD',
        description: 'Lập trình bộ mã Schema ngữ nghĩa theo tiêu chuẩn quốc tế schema.org mới nhất.'
      },
      {
        step: '03',
        title: 'Cài đặt lên website',
        description: 'Tích hợp mã Schema vào phần đầu trang web mà không ảnh hưởng đến tốc độ tải trang.'
      },
      {
        step: '04',
        title: 'Kiểm tra Google Rich Results',
        description: 'Chạy kiểm thử bằng công cụ chính thức của Google để đảm bảo không có bất kỳ cảnh báo nào.'
      },
      {
        step: '05',
        title: 'Bàn giao & Bảo hành 5 năm',
        description: 'Gửi báo cáo nghiệm thu và cam kết bảo hành duy trì cấu trúc dữ liệu suốt 5 năm.'
      }
    ],
    requirements: [
      'Địa chỉ chính xác, hotline, giờ mở cửa và các link mạng xã hội của cơ sở',
      'Quyền quản trị website để chèn mã Schema'
    ],
    proofCaseStudySlug: 'tiem-banh-tiem-hoa-an-nhien',
    proofHighlight: 'Hiển thị đầy đủ Rich Snippets đánh giá 4.9 sao và giờ mở cửa trên Google Search sau 7 ngày cài đặt Schema.',
    faqs: [
      {
        question: 'Schema LocalBusiness mang lại lợi ích gì trực tiếp cho cửa hàng?',
        answer: 'Khi có Schema, kết quả tìm kiếm của bạn trên Google sẽ to hơn, nổi bật hơn với ngôi sao đánh giá vàng, địa chỉ và giờ mở cửa. Khách hàng tin tưởng hơn và tỷ lệ bấm vào web tăng từ 30% đến 50% so với kết quả tìm kiếm thông thường.'
      },
      {
        question: 'Thực thể số (Entity) có giúp ích cho việc xuất hiện trên AI không?',
        answer: 'Rất nhiều! Các mô hình AI như ChatGPT, Gemini dựa vào các thuộc tính Schema và liên kết SameAs để xác minh cơ sở của bạn có thật và uy tín, từ đó tự tin đề xuất tiệm của bạn cho người dùng.'
      }
    ],
    relatedServiceSlugs: ['google-maps', 'seo-tong-the-dia-phuong', 'toi-uu-toc-do-web', 'seo-audit'],
    relatedArticleSlugs: ['huong-dan-toi-uu-google-business-profile', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Cài Đặt Thực Thể & Schema',
    secondaryCTA: 'Kiểm Tra Schema Hiện Tại 0đ',
    status: 'ACTIVE'
  },
  {
    id: 'seo-audit',
    slug: 'seo-audit',
    name: 'Dịch vụ SEO Audit — Khảo sát hiện trạng 0đ, chỉ ra điểm nghẽn chuyển đổi',
    shortName: 'SEO Audit Hiện Trạng 0đ',
    category: 'Khảo Sát & Đánh Giá',
    categorySlug: 'google-maps',
    badge: 'Khảo Sát 0đ Miễn Phí ⭐',
    heroAsset: '/assets/illustrations/mascot-ga4-gtm-ads.png',
    problem: 'Bạn đang kinh doanh và có website, có Google Maps nhưng không hiểu vì sao vắng khách, ít người gọi điện, hoặc chạy quảng cáo tốn kém mà không ra đơn, không biết chính xác vấn đề đang nằm ở khâu nào.',
    outcome: 'Nhận ngay bản báo cáo khảo sát hiện trạng số toàn diện 0đ: Vạch trần từng điểm nghẽn chuyển đổi, phân tích đối thủ cạnh tranh quanh khu vực đang làm gì hơn bạn, và danh sách việc cần làm ngay để có khách.',
    promise: 'Khảo sát hiện trạng miễn phí 0đ, không phát sinh bất kỳ ràng buộc nào, giải thích bằng ngôn ngữ bình dân dễ hiểu, tư vấn trực tiếp 1-1 từ kỹ thuật viên địa phương.',
    description: 'LocalMate không báo giá chung chung. Chúng tôi trực tiếp đo lường hiện trạng số của bạn: kiểm tra vị trí Google Maps có bị cướp hay thiếu thông tin không, đo tốc độ web trên điện thoại, rà soát từ khóa địa phương có dấu/không dấu và kiểm tra nút bấm gọi hotline có hoạt động trơn tru không.',
    startingPrice: '0đ (Miễn phí 100%)',
    priceNote: 'Khảo sát tận tâm • Không ép mua dịch vụ • Báo cáo chi tiết sau 24h.',
    sla: 'Bàn giao báo cáo trong 24 giờ',
    suitableFor: [
      'Chủ cơ sở, chủ tiệm, hộ kinh doanh đang băn khoăn không biết tại sao kênh online không có khách',
      'Đơn vị muốn biết đối thủ cùng ngành trong khu vực đang đứng top bằng cách nào',
      'Doanh nghiệp chuẩn bị đầu tư làm mới website hoặc chạy quảng cáo muốn đánh giá trước'
    ],
    notSuitableFor: [
      'Doanh nghiệp muốn thuê làm báo cáo giả để đối phó nội bộ'
    ],
    deliverables: [
      'Bảng chẩn đoán Google Maps: Kiểm tra độ chuẩn xác GPS, rủi ro bị cướp quyền và số lượng đánh giá',
      'Bảng đo lường tốc độ website thực tế bằng Google PageSpeed Insights (Mobile & Desktop)',
      'Bảng soi từ khóa địa phương: Danh sách từ khóa cơ sở đang xếp sau đối thủ trong bán kính 3-10km',
      'Báo cáo kiểm tra trải nghiệm chuyển đổi di động: Nút gọi hotline, form tư vấn, nút Zalo',
      'Bảng kiểm tra thực thể số: Tình trạng Schema LocalBusiness và đồng bộ NAP',
      'Lộ trình hành động ưu tiên: Các việc "Quick Win" sửa ngay trong 24h và kế hoạch dài hạn'
    ],
    process: [
      {
        step: '01',
        title: 'Tiếp nhận thông tin cơ sở',
        description: 'Bạn chỉ cần cung cấp tên tiệm, địa chỉ và website hoặc link Google Maps hiện tại.'
      },
      {
        step: '02',
        title: 'Quét hiện trạng đa điểm',
        description: 'Kỹ thuật viên LocalMate dùng công cụ chuyên sâu đo đạc tốc độ, thứ hạng và đối thủ.'
      },
      {
        step: '03',
        title: 'Tổng hợp báo cáo điểm nghẽn',
        description: 'Chỉ rõ vì sao khách vào mà không gọi, từ khóa nào đang mất khách vào tay đối thủ.'
      },
      {
        step: '04',
        title: 'Trao đổi tư vấn 1-1',
        description: 'Kỹ thuật viên giải thích chi tiết, trả lời mọi thắc mắc của bạn bằng ngôn ngữ bình dị nhất.'
      },
      {
        step: '05',
        title: 'Bàn giao kế hoạch 0đ',
        description: 'Bạn nhận file báo cáo đầy đủ, tự do quyết định tự làm hoặc nhờ LocalMate đồng hành.'
      }
    ],
    requirements: [
      'Tên cửa hàng/doanh nghiệp, địa chỉ và đường link website hoặc Google Maps hiện tại'
    ],
    proofCaseStudySlug: 'nha-khoa-nucuoiduyen-tphcm',
    proofHighlight: 'Chỉ ra 3 điểm nghẽn lớn (nút gọi bị che trên mobile, thiếu Schema, mất top từ khóa không dấu), giúp khách hàng khắc phục và tăng gấp đôi lượng đặt lịch.',
    faqs: [
      {
        question: 'Dịch vụ khảo sát hiện trạng có thực sự 0đ không? Có phụ phí gì không?',
        answer: 'Chắc chắn 100% MIỄN PHÍ 0đ. Bạn không cần thanh toán bất kỳ khoản tiền nào. Đây là cách LocalMate tạo dựng sự tin cậy và đồng hành thực chất với cộng đồng kinh doanh địa phương.'
      },
      {
        question: 'Sau khi nhận báo cáo, tôi có bắt buộc phải thuê LocalMate làm tiếp không?',
        answer: 'Hoàn toàn KHÔNG. Báo cáo là tài sản của bạn. Bạn có thể tự mình sửa chữa, nhờ người quen làm, hoặc nếu bạn quá bận rộn thì có thể giao cho LocalMate triển khai với mức giá gốc bình dân.'
      }
    ],
    relatedServiceSlugs: ['google-maps', 'seo-tong-the-dia-phuong', 'toi-uu-toc-do-web', 'thuc-the-so-entity'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao', 'huong-dan-toi-uu-google-business-profile'],
    primaryCTA: 'Đăng Ký Khảo Sát Hiện Trạng 0đ',
    secondaryCTA: 'Xem Báo Cáo Mẫu',
    status: 'ACTIVE'
  },
  {
    id: 'quan-tri-facebook',
    slug: 'quan-tri-facebook',
    name: 'Dịch vụ quản trị Fanpage Facebook cho cửa hàng & doanh nghiệp nhỏ',
    shortName: 'Quản Trị Facebook',
    category: 'Chăm Sóc & Duy Trì',
    categorySlug: 'viet-bai-cham-soc',
    badge: 'Chăm Sóc Fanpage ⭐',
    heroAsset: '/assets/illustrations/roadmap-flag-path.png',
    problem: 'Fanpage nhiều tháng không đăng bài, thông tin cũ kỹ khiến khách hàng vào xem nghĩ cửa hàng đã đóng cửa.',
    outcome: 'Trang Facebook luôn có bài viết và hình ảnh mới đều đặn mỗi tuần, tạo cảm giác uy tín và thu hút khách hàng tương tác.',
    promise: 'Duyệt bài trước khi đăng, hình ảnh thiết kế đồng bộ, hỗ trợ nhanh qua Zalo.',
    description: 'LocalMate chuẩn bị nội dung và hình ảnh bài đăng định kỳ để Fanpage của bạn luôn hoạt động sôi nổi mà bạn không phải tốn thời gian tự viết mỗi ngày.',
    startingPrice: 'Từ 990.000đ / tháng',
    priceNote: 'Gói chăm sóc hàng tháng linh hoạt.',
    sla: 'Hỗ trợ 24/7 qua Zalo',
    suitableFor: [
      'Chủ shop, chủ quán bận rộn không có thời gian chăm sóc Facebook'
    ],
    notSuitableFor: ['Dự án truyền thông lớn cần đội ngũ quay phim trực tiếp hàng ngày'],
    deliverables: [
      '12–15 bài viết chuẩn nhận diện mỗi tháng',
      '12–15 banner hình ảnh thiết kế đẹp mắt',
      'Lên lịch đăng bài đều đặn mỗi tuần'
    ],
    process: [
      { step: '01', title: 'Lên lịch chủ đề', description: 'Thống nhất nội dung trong tháng.' },
      { step: '02', title: 'Soạn bài & Làm ảnh', description: 'Gửi bạn duyệt trước khi đăng.' },
      { step: '03', title: 'Đăng bài đều đặn', description: 'Xuất bản bài viết theo lịch cố định.' }
    ],
    requirements: ['Quyền biên tập viên trên Fanpage'],
    faqs: [
      { question: 'Có được yêu cầu sửa bài không?', answer: 'Có, bạn xem và yêu cầu chỉnh sửa thoải mái trước khi đăng.' }
    ],
    relatedServiceSlugs: ['content-marketing', 'website-landing-page'],
    relatedArticleSlugs: ['cach-len-lich-dang-bai-khong-bi-bi-y-tuong'],
    primaryCTA: 'Đăng Ký Quản Trị Fanpage',
    secondaryCTA: 'Xem Kế Hoạch Mẫu',
    status: 'ACTIVE'
  },
  {
    id: 'viet-bai-facebook',
    slug: 'viet-bai-facebook',
    name: 'Dịch vụ viết bài Facebook & bài viết bán hàng theo yêu cầu',
    shortName: 'Viết Bài Facebook',
    category: 'Chăm Sóc & Duy Trì',
    categorySlug: 'viet-bai-cham-soc',
    badge: 'Nội Dung Bán Hàng ⭐',
    heroAsset: '/assets/illustrations/roadmap-flag-path.png',
    problem: 'Muốn đăng bài giới thiệu sản phẩm hay ưu đãi nhưng không biết viết thế nào cho cuốn hút và dễ hiểu.',
    outcome: 'Có sẵn những bài viết bán hàng hấp dẫn, rõ ưu đãi, đúng tâm lý người mua và có lời mời gọi hành động rõ ràng.',
    promise: 'Viết đúng ngành nghề, từ ngữ gần gũi, giao bài đúng hẹn.',
    description: 'LocalMate nhận viết bài lẻ hoặc theo gói cho Fanpage, trang web hoặc bài quảng cáo với văn phong đời thường, dễ đọc và kích thích khách hàng gọi điện/nhắn tin.',
    startingPrice: 'Từ 990.000đ / tháng (15 bài)',
    priceNote: 'Gói bài viết kèm hình ảnh thiết kế sẵn.',
    sla: 'Giao bài trong 24–48h',
    suitableFor: [
      'Cửa hàng cần bài viết bán hàng chất lượng để đăng Facebook hoặc gửi cho khách'
    ],
    notSuitableFor: ['Bài viết nghiên cứu khoa học hàn lâm'],
    deliverables: [
      'Bài viết hoàn chỉnh kèm gợi ý tiêu đề thu hút',
      'Hình ảnh minh họa thiết kế có gắn logo',
      'Hashtag và lời kêu gọi nhắn tin/gọi điện'
    ],
    process: [
      { step: '01', title: 'Gửi yêu cầu', description: 'Cung cấp sản phẩm hoặc ưu đãi cần viết.' },
      { step: '02', title: 'Soạn bài viết', description: 'Viết nội dung và thiết kế ảnh đi kèm.' },
      { step: '03', title: 'Bàn giao & Đăng tải', description: 'Gửi bài hoàn chỉnh để bạn duyệt và sử dụng.' }
    ],
    requirements: ['Thông tin sản phẩm và chương trình ưu đãi cần viết'],
    faqs: [
      { question: 'Có viết bài theo đợt khuyến mãi ngắn ngày không?', answer: 'Có, LocalMate hỗ trợ viết bài theo từng đợt sự kiện hoặc khai trương.' }
    ],
    relatedServiceSlugs: ['content-marketing', 'quan-tri-facebook'],
    relatedArticleSlugs: ['cach-len-lich-dang-bai-khong-bi-bi-y-tuong'],
    primaryCTA: 'Đặt Viết Bài Facebook',
    secondaryCTA: 'Xem Mẫu Bài Viết',
    status: 'ACTIVE'
  },
  {
    id: 'thiet-ke-hinh-anh',
    slug: 'thiet-ke-hinh-anh',
    name: 'Dịch vụ thiết kế banner & hình ảnh quảng cáo cho cửa hàng',
    shortName: 'Thiết Kế Hình Ảnh',
    category: 'Hình Ảnh & Nhận Diện',
    categorySlug: 'thiet-ke-hinh-anh',
    badge: 'Hình Ảnh Bắt Mắt ⭐',
    heroAsset: '/assets/illustrations/pricing-laptop-analytics.png',
    problem: 'Hình ảnh chụp bằng điện thoại chưa bắt mắt, thiếu logo, chữ chèn lên bị xấu khiến bảng hiệu và bài đăng trông kém chuyên nghiệp.',
    outcome: 'Sở hữu bộ hình ảnh và banner đẹp mắt, màu sắc đồng bộ, nổi bật sản phẩm và giá bán để đăng Facebook hoặc làm bảng quảng cáo.',
    promise: 'Thiết kế nhanh, chỉnh sửa theo ý bạn, giao file chất lượng cao.',
    description: 'LocalMate thiết kế banner sự kiện, ảnh bìa Fanpage, menu sản phẩm và ảnh bài đăng Facebook chuẩn kích thước hiển thị trên điện thoại.',
    startingPrice: 'Từ 99.000đ / ảnh (hoặc theo gói tháng)',
    priceNote: 'Nhận thiết kế ảnh lẻ hoặc trọn gói bộ nhận diện.',
    sla: '24 giờ làm việc',
    suitableFor: [
      'Cửa hàng cần thiết kế ảnh bìa, menu, banner khuyến mãi khai trương'
    ],
    notSuitableFor: ['Vẽ minh họa 3D hoạt hình phức tạp'],
    deliverables: [
      'File ảnh chất lượng cao chuẩn hiển thị di động',
      'Đồng bộ màu sắc nhận diện và logo cửa hàng'
    ],
    process: [
      { step: '01', title: 'Gửi ảnh & Nội dung', description: 'Gửi ảnh sản phẩm và câu chữ cần đưa vào banner.' },
      { step: '02', title: 'Thiết kế mẫu', description: 'LocalMate dựng bản thiết kế và gửi bạn xem.' },
      { step: '03', title: 'Bàn giao file nét', description: 'Xuất file ảnh chất lượng cao để bạn sử dụng.' }
    ],
    requirements: ['Ảnh sản phẩm và nội dung khuyến mãi'],
    faqs: [
      { question: 'Có in ấn luôn không?', answer: 'LocalMate xuất file in ấn chuẩn chất lượng cao để bạn mang ra tiệm in ngay gần nhà.' }
    ],
    relatedServiceSlugs: ['content-marketing', 'website-landing-page'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Đặt Thiết Kế Hình Ảnh',
    secondaryCTA: 'Xem Mẫu Banner',
    status: 'ACTIVE'
  },
  {
    id: 'video-ngan',
    slug: 'video-ngan',
    name: 'Dịch vụ dựng video ngắn TikTok & Reels từ hình ảnh có sẵn',
    shortName: 'Dựng Video Ngắn',
    category: 'Hình Ảnh & Nhận Diện',
    categorySlug: 'video-ngan',
    badge: 'Video Ngắn Thu Hút ⭐',
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: 'Khách hàng thích xem video ngắn trên TikTok/Reels nhưng bạn không biết cắt ghép hay chèn nhạc.',
    outcome: 'Có ngay các video ngắn 15–30s sinh động giới thiệu quán, món ăn hoặc quy trình làm việc để đăng TikTok, Facebook Reels.',
    promise: 'Dựng từ video/hình ảnh bạn tự quay bằng điện thoại, chèn nhạc bắt tai và chữ phụ đề rõ ràng.',
    description: 'LocalMate nhận tư liệu quay đơn giản từ điện thoại của bạn để cắt ghép, chỉnh màu, chèn chữ giá bán và lồng nhạc hot trend giúp video trông chuyên nghiệp hơn.',
    startingPrice: 'Từ 299.000đ / video',
    priceNote: 'Dựng video ngắn từ tư liệu khách hàng cung cấp.',
    sla: '24–48 giờ làm việc',
    suitableFor: [
      'Quán ăn, quán cafe, spa, xưởng làm nghề muốn có video ngắn đăng Reels/TikTok'
    ],
    notSuitableFor: ['Phim điện ảnh hoặc TVC cần đạo diễn trường quay'],
    deliverables: [
      'Video ngắn chuẩn khung dọc (9:16) cho TikTok/Reels',
      'Chèn nhạc hot trend và phụ đề chữ to dễ đọc'
    ],
    process: [
      { step: '01', title: 'Gửi video/ảnh quay', description: 'Gửi các đoạn clip ngắn quay bằng điện thoại qua Zalo/Drive.' },
      { step: '02', title: 'Dựng & Chèn nhạc', description: 'Cắt ghép, thêm hiệu ứng chữ và chèn nhạc phù hợp.' },
      { step: '03', title: 'Bàn giao video', description: 'Gửi file hoàn chỉnh để bạn đăng lên mạng xã hội.' }
    ],
    requirements: ['Clip ngắn hoặc hình ảnh quay chụp tại quán'],
    faqs: [
      { question: 'Tôi quay bằng điện thoại thường có dựng được không?', answer: 'Được, chỉ cần quay rõ nét và đủ sáng là dựng thành video rất đẹp.' }
    ],
    relatedServiceSlugs: ['content-marketing', 'quan-tri-facebook'],
    relatedArticleSlugs: ['cach-len-lich-dang-bai-khong-bi-bi-y-tuong'],
    primaryCTA: 'Đặt Dựng Video Ngắn',
    secondaryCTA: 'Xem Mẫu Video',
    status: 'ACTIVE'
  },
  {
    id: 'khoa-hoc-geo-ai',
    slug: 'khoa-hoc-geo-ai',
    name: 'Khóa Đào Tạo Chuyển Giao GEO & SEO AI — Tự Làm Chủ Đề Xuất AI Cho Cơ Sở Địa Phương',
    shortName: 'Đào Tạo Chuyển Giao GEO & AI',
    category: 'Đào Tạo & Chuyển Giao',
    categorySlug: 'ai-software',
    badge: 'Chuyển Giao Thực Chiến 🎓',
    heroAsset: '/assets/illustrations/roadmap-flag-path.png',
    problem: 'Bạn muốn ứng dụng AI để kéo khách cho tiệm nhưng sợ các khóa học lý thuyết sáo rỗng hàng chục triệu của các diễn giả không có kiến thức kỹ thuật thực tế.',
    outcome: 'Tự tay cài đặt Schema JSON-LD, kích hoạt file llms.txt và sở hữu Prompt Bank 100+ câu lệnh chuẩn xác để điều khiển AI đề xuất tiệm của bạn.',
    promise: 'Cầm tay chỉ việc 1 kèm 1, học thực chiến trên chính cơ sở kinh doanh của bạn, cam kết đồng hành giải đáp kỹ thuật 5 năm.',
    description: 'Chương trình đào tạo chuyển giao công nghệ GEO & SEO AI thực chiến của LocalMate dành riêng cho chủ cơ sở và nhân sự nội bộ. Chúng tôi chia sẻ trọn bộ quy trình, biểu mẫu và công cụ kỹ thuật từ gốc giúp bạn làm chủ hoàn toàn hiện diện của tiệm trên các cỗ máy tìm kiếm AI thế hệ mới với chi phí bình dân chỉ từ 1.990.000đ.',
    startingPrice: 'Từ 1.990.000đ / khóa',
    priceNote: 'Đào tạo 1 kèm 1 (Trực tiếp hoặc Online) • Tặng kèm trọn bộ tài liệu & Prompt Bank.',
    sla: 'Khai giảng linh hoạt theo thời gian rảnh của học viên',
    suitableFor: [
      'Chủ cơ sở kinh doanh muốn tự mình nắm vững công nghệ AI để quản lý cửa hàng',
      'Nhân sự marketing hoặc người thân phụ trách kênh online của gia đình',
      'Freelancer, thợ kỹ thuật muốn bổ sung kỹ năng triển khai GEO để phục vụ khách hàng'
    ],
    notSuitableFor: [
      'Người chỉ muốn học lý thuyết suông để đi chém gió mà không chịu thực hành'
    ],
    deliverables: [
      'Trọn bộ giáo trình thực chiến từng bước tối ưu Schema JSON-LD và file llms.txt chuẩn quốc tế',
      'Bộ Prompt Bank 100+ câu hỏi kiểm thử và kích hoạt nhận diện thương hiệu trên ChatGPT/Gemini',
      'Quy trình chuẩn hóa Google Maps và thực thể số Entity không tốn chi phí',
      'Video quay màn hình thao tác từng bước lưu trữ trọn đời để xem lại bất kỳ lúc nào',
      'Quyền truy cập nhóm hỗ trợ kỹ thuật 1 kèm 1 giải đáp thắc mắc suốt 5 năm'
    ],
    process: [
      { step: '01', title: 'Khảo sát hiện trạng cơ sở', description: 'Đánh giá điểm mạnh yếu của website và Maps hiện tại của học viên.' },
      { step: '02', title: 'Buổi 1: Nền tảng thực thể', description: 'Thực hành chuẩn hóa thông tin NAP và cấu hình Schema LocalBusiness.' },
      { step: '03', title: 'Buổi 2: Làm chủ GEO & llms.txt', description: 'Tự tay tạo tệp dữ liệu sạch và nạp thông tin tiệm cho các mô hình AI.' },
      { step: '04', title: 'Buổi 3: Prompt Bank & Kiểm chứng', description: 'Chạy kiểm thử thực tế và quy trình duy trì thứ hạng đề xuất hàng tháng.' },
      { step: '05', title: 'Chuyển giao & Đồng hành 5 năm', description: 'Bàn giao tài liệu và hỗ trợ kỹ thuật trọn đời trong quá trình kinh doanh.' }
    ],
    requirements: [
      'Điện thoại smartphone hoặc máy tính xách tay kết nối internet',
      'Tài khoản Google và địa chỉ cơ sở kinh doanh'
    ],
    faqs: [
      {
        question: 'Tôi lớn tuổi không rành công nghệ có học được không?',
        answer: 'Hoàn toàn học được. Giáo trình được thiết kế theo dạng cầm tay chỉ việc, từng bước bấm chuột cụ thể như hướng dẫn dùng smartphone, không dùng thuật ngữ tiếng Anh phức tạp.'
      },
      {
        question: 'Sau khi học xong gặp khó khăn thì có ai hỗ trợ không?',
        answer: 'Có! LocalMate cam kết đồng hành kỹ thuật 5 năm cùng học viên qua nhóm hỗ trợ 1-1 riêng biệt, bất cứ khi nào bạn vướng mắc đều có chuyên viên hỗ trợ giải đáp.'
      }
    ],
    relatedServiceSlugs: ['geo', 'aeo', 'seo-ai', 'thiet-ke-website'],
    relatedArticleSlugs: ['huong-dan-toi-uu-google-business-profile', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Đăng Ký Học 1 Kèm 1',
    secondaryCTA: 'Nhận Giáo Trình Mẫu 0đ',
    status: 'ACTIVE'
  }
];

export const getAllServices = (): ServiceEntity[] => {
  return CORE_P0_SERVICES;
};

export const getServiceBySlug = (slug: string): ServiceEntity | undefined => {
  // Direct match
  const directMatch = CORE_P0_SERVICES.find((s) => s.slug === slug);
  if (directMatch) return directMatch;

  // Slug aliases mapping
  const aliasMap: Record<string, string> = {
    'thiet-ke-website': 'website-landing-page',
    'landing-page': 'landing-page',
    'google-ads': 'google-ads-dia-phuong',
    'quang-cao-google': 'google-ads-dia-phuong',
    'quang-cao-google-ads': 'google-ads-dia-phuong',
    'google-ads-dia-phuong': 'google-ads-dia-phuong',
    'khac-phuc-loi-google-ads': 'khac-phuc-loi-google-ads-sua-chua',
    'go-loi-google-ads': 'khac-phuc-loi-google-ads-sua-chua',
    'go-loi-google-ads-sua-chua': 'khac-phuc-loi-google-ads-sua-chua',
    'khac-phuc-google-ads-sua-chua': 'khac-phuc-loi-google-ads-sua-chua',
    'google-ads-sua-dien-thoai-laptop': 'khac-phuc-loi-google-ads-sua-chua',
    'khang-ads-sua-chua': 'khac-phuc-loi-google-ads-sua-chua',
    'facebook-ads': 'facebook-ads-dia-phuong',
    'quang-cao-facebook': 'facebook-ads-dia-phuong',
    'facebook-ads-dia-phuong': 'facebook-ads-dia-phuong',
    'facebook-ads-5km': 'facebook-ads-dia-phuong',
    'cham-soc-website': 'cham-soc-website-chuan-seo',
    'quan-tri-website': 'cham-soc-website-chuan-seo',
    'bao-tri-website': 'cham-soc-website-chuan-seo',
    'cham-soc-website-chuan-seo': 'cham-soc-website-chuan-seo',
    'google-maps': 'google-maps',
    'dich-vu-google-maps': 'google-maps',
    'xac-minh-google-maps': 'google-maps',
    'seo-google-maps': 'seo-tong-the-dia-phuong',
    'seo-tong-the': 'seo-tong-the-dia-phuong',
    'seo-tong-the-dia-phuong': 'seo-tong-the-dia-phuong',
    'seo-dia-phuong': 'seo-tong-the-dia-phuong',
    'local-seo': 'seo-tong-the-dia-phuong',
    'toi-uu-toc-do-web': 'toi-uu-toc-do-web',
    'tang-toc-web': 'toi-uu-toc-do-web',
    'speed-opt': 'toi-uu-toc-do-web',
    'pagespeed': 'toi-uu-toc-do-web',
    'dich-vu-entity': 'thuc-the-so-entity',
    'thuc-the-so-entity': 'thuc-the-so-entity',
    'thuc-the-so': 'thuc-the-so-entity',
    'entity-schema': 'thuc-the-so-entity',
    'schema-localbusiness': 'thuc-the-so-entity',
    'seo-audit': 'seo-audit',
    'khao-sat-hien-trang': 'seo-audit',
    'audit-website': 'seo-audit',
    'audit-seo': 'seo-audit',
    'quan-tri-facebook': 'quan-tri-facebook',
    'viet-bai-facebook': 'viet-bai-facebook',
    'thiet-ke-hinh-anh': 'thiet-ke-hinh-anh',
    'video-ngan': 'video-ngan',
    'content-marketing': 'content-marketing',
    'analytics-tracking': 'google-ads-dia-phuong',
    'geo-local': 'geo',
    'dich-vu-geo': 'geo',
    'toi-uu-ai-geo': 'geo',
    'toi-uu-de-xuat-ai': 'geo',
    'dich-vu-aeo': 'aeo',
    'toi-uu-aeo': 'aeo',
    'aeo-local': 'aeo',
    'dich-vu-seo-ai': 'seo-ai',
    'google-ai-overviews': 'seo-ai',
    'seo-google-ai': 'seo-ai',
    'dich-vu-seo-chatgpt': 'seo-chatgpt',
    'chatgpt-seo': 'seo-chatgpt',
    'seo-ai-chatgpt': 'seo-chatgpt',
    'khoa-hoc-geo-ai': 'khoa-hoc-geo-ai',
    'dao-tao-geo-ai': 'khoa-hoc-geo-ai',
    'khoa-hoc-seo-ai': 'khoa-hoc-geo-ai'
  };

  const targetSlug = aliasMap[slug];
  if (targetSlug) {
    return CORE_P0_SERVICES.find((s) => s.slug === targetSlug);
  }

  return undefined;
};
