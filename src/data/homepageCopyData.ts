/**
 * HOMEPAGE COPY DATA (SSOT) — BRAND VOICE V2
 * Tinh thần: "Localmate — Người đồng hành số tại địa phương. Công nghệ không cần phức tạp. Quan trọng là công việc được hoàn thành."
 * 100% Tiếng Việt chân thành, gần gũi, không dùng thuật ngữ tiếp thị đao to búa lớn.
 */

export interface HeroTrustBadge {
  icon: string;
  label: string;
  sub: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaPrimary: {
    label: string;
    action: string;
    note: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
  trustBadges: HeroTrustBadge[];
}

export interface PainPointItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  leadContext: string;
}

export interface CoreServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string[];
  sampleJobs: string[];
  ctaText: string;
  link: string;
}

export interface PhilosophyBlock {
  title: string;
  headline: string;
  description: string;
  bullets: {
    bold: string;
    text: string;
  }[];
  quote: string;
}

export interface WorkingStep {
  step: string;
  title: string;
  description: string;
  outcome: string;
}

export interface WorkflowExample {
  id: string;
  industry: string;
  badge: string;
  problem: string;
  oldWay: string;
  localmateWay: string;
  resultSummary: string;
  tags: string[];
}

export interface AiHonestCopy {
  badge: string;
  title: string;
  intro: string;
  whatAiCanDo: {
    title: string;
    desc: string;
  }[];
  whatAiCannotDo: {
    title: string;
    desc: string;
  }[];
  ourStance: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface FinalCtaCopy {
  badge: string;
  title: string;
  description: string;
  ctaButtonText: string;
  secondaryCtaText: string;
  phoneDisplay: string;
  phoneRaw: string;
  commitments: string[];
}

// 1. HERO CONTENT
export const HERO_CONTENT: HeroContent = {
  eyebrow: 'Localmate · Người đồng hành số tại địa phương',
  headline: 'Bạn lo việc kinh doanh. Chuyện công nghệ để Localmate cùng bạn xử lý.',
  subheadline:
    'Từ website, kênh tìm khách, quản lý liên hệ đến tự động hóa bớt việc chân tay — bạn chỉ cần kể công việc đang vướng ở đâu. Localmate cùng bạn giải quyết bằng cách đơn giản, dễ dùng và tiết kiệm nhất.',
  ctaPrimary: {
    label: 'Kể cho Localmate việc bạn cần làm',
    action: 'open_lead_modal',
    note: 'Trao đổi nhanh 1-1 • Không áp lực mua gói • Tư vấn giải pháp đơn giản trước'
  },
  ctaSecondary: {
    label: 'Xem Localmate có thể giúp gì',
    href: '#nhu-cau-thuc-te'
  },
  trustBadges: [
    {
      icon: 'Store',
      label: 'Gần gũi địa phương',
      sub: 'Trao đổi trực tiếp, dễ hiểu, không hoa mỹ'
    },
    {
      icon: 'CheckCircle2',
      label: 'Bắt đầu từ cái nhỏ nhất',
      sub: 'Làm bản chạy thử dùng được rồi mới tính tiếp'
    },
    {
      icon: 'KeyRound',
      label: '100% Thuộc về bạn',
      sub: 'Tài khoản, dữ liệu, mã nguồn bạn tự nắm giữ'
    },
    {
      icon: 'ShieldCheck',
      label: 'Có mặt khi phát sinh việc',
      sub: 'Người thật hỗ trợ kỹ thuật lâu dài'
    }
  ]
};

// 2. PAIN POINTS SECTION (Bạn đang vướng ở đâu?)
export const PAIN_POINTS_LIST: PainPointItem[] = [
  {
    id: 'pain-presence',
    number: '01',
    title: 'Chưa có một nơi đàng hoàng trên mạng để khách tìm hiểu',
    description:
      'Chỉ có trang cá nhân hoặc fanpage chắp vá. Khách hỏi bảng giá, dịch vụ hay uy tín thì phải gửi từng bức ảnh trong chat rất mất thời gian.',
    tag: 'Hiện diện số',
    leadContext: 'Tôi cần một website hoặc trang thông tin đàng hoàng, rõ ràng để khách tin tưởng.'
  },
  {
    id: 'pain-lead-chaos',
    number: '02',
    title: 'Khách có nhắn nhưng quản lý rất rối, hay quên trả lời',
    description:
      'Khách hỏi từ Facebook, Zalo, gọi điện nằm rải rác ở khắp nơi. Nhiều khi bận phục vụ khách tại quán nên sót đơn, quên gọi lại cho khách tiềm năng.',
    tag: 'Gom khách & Chăm sóc',
    leadContext: 'Tôi muốn gom thông tin khách về một chỗ dễ theo dõi, không bị sót việc.'
  },
  {
    id: 'pain-manual-work',
    number: '03',
    title: 'Ngày nào cũng làm đi làm lại mấy việc tay chân lặp lại',
    description:
      'Nhập tay danh sách vào sổ hoặc Excel, copy từng tin nhắn báo giá, nhắn tin nhắc lịch hẹn cho từng người... chiếm hết thời gian bán hàng chính.',
    tag: 'Bớt việc thủ công',
    leadContext: 'Tôi muốn tự động hóa bớt các việc nhập liệu và nhắc lịch hẹn lặp đi lặp lại.'
  },
  {
    id: 'pain-tools-disconnect',
    number: '04',
    title: 'Đang dùng nhiều ứng dụng nhưng chúng không kết nối với nhau',
    description:
      'Fanpage một nơi, Zalo một nẻo, sổ sách một chỗ. Dữ liệu không đồng bộ khiến việc kiểm tra thông tin mất nhiều thời gian và dễ nhầm lẫn.',
    tag: 'Kết nối công cụ',
    leadContext: 'Tôi cần kết nối các công cụ đang dùng lại với nhau để khỏi nhập đi nhập lại.'
  },
  {
    id: 'pain-ai-confusion',
    number: '05',
    title: 'Nghe nói nhiều về AI nhưng chưa biết ứng dụng vào đâu cho tiệm mình',
    description:
      'Thấy xung quanh bàn về AI rất nhiều nhưng không biết áp dụng thế nào để thực sự bớt việc, tăng khách mà không tốn tiền vô ích.',
    tag: 'Ứng dụng AI thực tế',
    leadContext: 'Tôi muốn tìm hiểu xem AI có thể giúp gì thực tế cho công việc của tiệm tôi.'
  },
  {
    id: 'pain-custom-idea',
    number: '06',
    title: 'Có ý tưởng cho công việc riêng nhưng ngại chi phí phần mềm đắt đỏ',
    description:
      'Cần một công cụ tính giá tự động, tra cứu hồ sơ hay form đặt lịch theo đặc thù riêng của mình, nhưng thuê công ty phần mềm lớn thì chi phí quá cao.',
    tag: 'Ý tưởng riêng',
    leadContext: 'Tôi có một nhu cầu phần mềm/công cụ nhỏ theo đặc thù riêng cần làm thử.'
  }
];

// 3. CORE SERVICES SECTION (4 Nhóm giải pháp khách hàng dễ hiểu)
export const CORE_SERVICES_LIST: CoreServiceItem[] = [
  {
    id: 'presence',
    number: '01',
    title: 'Có mặt tốt hơn trên internet',
    summary:
      'Giúp khách hàng trong khu vực tìm thấy bạn dễ dàng, nhìn vào thấy tin tưởng và biết ngay bạn làm gì.',
    details: [
      'Trang giới thiệu / Website tinh gọn, tải nhanh trên điện thoại',
      'Định vị chuẩn trên Google Maps & xác minh chính chủ',
      'Đầy đủ bảng giá minh bạch, hình ảnh thực tế và lời giới thiệu rõ ràng',
      'Nút gọi điện thoại, chỉ đường và nhắn tin Zalo nổi bật một chạm'
    ],
    sampleJobs: ['Làm trang giới thiệu tiệm', 'Cập nhật Google Maps', 'Bảng giá online'],
    ctaText: 'Xem nhóm việc này',
    link: '/dich-vu/website-landing-page'
  },
  {
    id: 'leads',
    number: '02',
    title: 'Tìm và chăm sóc khách hàng',
    summary:
      'Gom khách quan tâm về một nơi, nhắc bạn gọi lại đúng lúc và không để rớt bất kỳ cơ hội bán hàng nào.',
    details: [
      'Gom toàn bộ khách từ web, form, fanpage về thẳng Google Sheets hoặc Zalo của bạn',
      'Chuông báo tức thì vào điện thoại ngay khi có người để lại số',
      'Hệ thống ghi chú trạng thái khách hàng (đã gọi, hẹn xem, đã chốt) cực kỳ đơn giản',
      'Hỗ trợ quảng cáo khoanh vùng đúng bán kính quanh tiệm, không phí tiền vô ích'
    ],
    sampleJobs: ['Chuông báo khách về Zalo', 'Bảng theo dõi khách trên Sheets', 'Quảng cáo quanh vùng'],
    ctaText: 'Xem cách gom khách',
    link: '/dich-vu/google-ads'
  },
  {
    id: 'automation',
    number: '03',
    title: 'Bớt việc thủ công bằng tự động hóa',
    summary:
      'Để máy móc làm những việc lặp đi lặp lại hàng ngày, để bạn và nhân viên tập trung phục vụ khách.',
    details: [
      'Tự động gửi tin nhắn xác nhận lịch hẹn và nhắc lịch trước 2 tiếng',
      'Tự động đồng bộ đơn hàng hoặc số điện thoại vào file tính toán nội bộ',
      'Mẫu phản hồi nhanh câu hỏi thường gặp về giá cả, vị trí và giờ mở cửa',
      'Báo cáo tóm tắt tình hình khách hàng gửi về nhóm Zalo mỗi tuần'
    ],
    sampleJobs: ['Nhắc lịch hẹn tự động', 'Đồng bộ dữ liệu không cần gõ lại', 'Báo cáo tuần tự động'],
    ctaText: 'Xem các tự động hóa mẫu',
    link: '/quy-trinh-geo'
  },
  {
    id: 'support-and-custom',
    number: '04',
    title: 'Có người hỗ trợ công nghệ khi cần & Xây theo nhu cầu riêng',
    summary:
      'Không phải đau đầu mỗi khi máy tính lỗi, web cần đổi giá hay muốn thử một ý tưởng quản lý mới.',
    details: [
      'Kỹ thuật viên địa phương túc trực hỗ trợ qua Zalo 1-1, xử lý nhanh trong 15-30 phút',
      'Hỗ trợ cập nhật banner, sửa món, đổi giá, thêm hình ảnh bất cứ khi nào cần',
      'Xây các công cụ nhỏ riêng biệt: form tính giá thi công, tra cứu mã bảo hành...',
      'Bàn giao 100% tài khoản, hướng dẫn tận tình, không giữ thông tin làm con tin'
    ],
    sampleJobs: ['Đổi giá & banner hộ', 'Xây form tính giá riêng', 'Hỗ trợ kỹ thuật định kỳ'],
    ctaText: 'Xem quy trình đồng hành',
    link: '/quy-trinh-cham-soc'
  }
];

// 4. PHILOSOPHY SECTION (Không bắt đầu bằng công nghệ & Bắt đầu rất nhỏ)
export const PHILOSOPHY_DATA: {
  block1: PhilosophyBlock;
  block2: PhilosophyBlock;
} = {
  block1: {
    title: 'Triết lý 01',
    headline: 'Localmate không bao giờ bắt đầu bằng công nghệ',
    description:
      'Bạn không cần phải học hiểu các thuật ngữ như CRM, Database, API, Cloudflare hay AI Agent. Bạn chỉ cần nói công việc thực tế của bạn đang chạy ra sao.',
    bullets: [
      {
        bold: 'Lắng nghe trước:',
        text: 'Chúng tôi ngồi cùng bạn, nhìn cách bạn ghi chép, nhắn tin với khách và chốt đơn mỗi ngày.'
      },
      {
        bold: 'Tìm cách đơn giản nhất:',
        text: 'Nếu dùng Google Sheet hay Zalo miễn phí mà giải quyết xong việc, chúng tôi sẽ khuyên bạn dùng cái đó thay vì mua phần mềm đắt tiền.'
      },
      {
        bold: 'Không ép dùng công nghệ thừa:',
        text: 'Chỉ bổ sung công cụ mới khi nó thực sự tiết kiệm thời gian hoặc mang lại khách cho bạn.'
      }
    ],
    quote: '“Công nghệ tốt nhất không phải công nghệ phức tạp nhất, mà là thứ giúp bạn hoàn thành công việc nhanh nhất mà không phải bận tâm về nó.”'
  },
  block2: {
    title: 'Triết lý 02',
    headline: 'Một việc luôn có thể bắt đầu từ cái rất nhỏ',
    description:
      'Không phải cứ làm công nghệ là phải đầu tư vài chục triệu ngay từ đầu. Chúng tôi luôn ủng hộ việc làm từng bước nhỏ có thể kiểm chứng được.',
    bullets: [
      {
        bold: 'Bắt đầu từ một trang thông tin:',
        text: 'Có nơi rõ ràng để khách đọc bảng giá và bấm gọi ngay.'
      },
      {
        bold: 'Bắt đầu từ một form nhận khách:',
        text: 'Gom số điện thoại vào một file gọn gàng, có thông báo đổ về điện thoại.'
      },
      {
        bold: 'Bắt đầu từ một luồng tự động nhỏ:',
        text: 'Thử nghiệm tự động nhắc lịch hẹn cho 20 khách đầu tiên để thấy hiệu quả.'
      }
    ],
    quote: '“Thử nghiệm nhỏ, thấy tiện và ra việc thật thì mới làm tiếp. Bạn luôn nắm quyền chủ động tuyệt đối về ngân sách.”'
  }
};

// 5. HOW WE WORK SECTION (4 Bước làm việc gần gũi)
export const WORKING_STEPS: WorkingStep[] = [
  {
    step: '01',
    title: 'Bạn kể việc đang cần làm',
    description:
      'Không cần văn bản kỹ thuật hay chuẩn bị giấy tờ phức tạp. Bạn chỉ cần nhắn hoặc ngồi cà phê kể: chỗ nào đang tốn thời gian, chỗ nào đang sót khách.',
    outcome: 'Hiểu rõ đúng cái đang vướng'
  },
  {
    step: '02',
    title: 'Chọn cách giải quyết đơn giản nhất',
    description:
      'Localmate đề xuất phương án tinh gọn: tận dụng tối đa những thứ bạn đang có sẵn (Zalo, Gmail, Sheets) trước khi nghĩ tới công cụ mới.',
    outcome: 'Có phương án rõ ràng, không vẽ vời'
  },
  {
    step: '03',
    title: 'Làm bản chạy thử nhỏ để bạn dùng thử',
    description:
      'Chúng tôi dựng nhanh bản mẫu dùng được thật trên điện thoại của bạn. Bạn bấm thử, nhập thử, ưng ý và thấy thuận tiện mới tính tiếp.',
    outcome: 'Xem trước sản phẩm chạy thật'
  },
  {
    step: '04',
    title: 'Hoàn thiện, bàn giao và cùng đồng hành',
    description:
      'Bàn giao toàn bộ mật khẩu, tài khoản chính chủ và chỉ bạn cách dùng trong 15 phút. Khi có trục trặc hay đổi bảng giá, có người thật hỗ trợ ngay.',
    outcome: 'Yên tâm sử dụng lâu dài'
  }
];

// 6. WORKFLOW EXAMPLES SECTION (Thẻ workflow minh họa kèm nhãn rõ ràng)
export const WORKFLOW_EXAMPLES: WorkflowExample[] = [
  {
    id: 'wf-fnb',
    industry: 'Quán ăn & Cà phê địa phương',
    badge: 'Workflow minh họa',
    problem: 'Khách nhắn hỏi menu, địa chỉ và đặt bàn lẻ tẻ trên Zalo/Facebook, lúc đông khách nhân viên trả lời không kịp dẫn tới mất khách.',
    oldWay: 'Chụp ảnh menu mờ gửi qua chat, ghi sổ tay đặt bàn, lúc đông dễ quên giữ bàn cho khách.',
    localmateWay: 'Trang xem menu online rõ nét trên điện thoại + Form đặt bàn tự động báo chuông Zalo KTV/Chủ quán + Bảng QR mica đặt bàn tại quầy.',
    resultSummary: 'Khách tự xem menu trong 10 giây, chủ tiệm nhận thông báo đặt bàn ngay tức thì, giảm 80% thời gian gõ tin nhắn trùng lặp.',
    tags: ['Menu Online', 'Báo bàn Zalo', 'Mã QR quầy']
  },
  {
    id: 'wf-clinic',
    industry: 'Phòng khám & Nha khoa chuyên khoa',
    badge: 'Workflow minh họa',
    problem: 'Bệnh nhân hẹn lịch nhưng hay quên giờ, lễ tân phải gọi điện từng người nhắc nhở rất mất công.',
    oldWay: 'Lễ tân ghi sổ giấy, gọi từng cuộc điện thoại lúc 5h chiều để nhắc lịch ngày mai.',
    localmateWay: 'Form đặt hẹn trên web + Hệ thống tự động gửi tin nhắn Zalo xác nhận và tự động nhắc trước 2 tiếng kèm vị trí bản đồ.',
    resultSummary: 'Giảm 90% tình trạng khách quên hẹn, giải phóng hoàn toàn thời gian gọi điện thủ công của nhân viên lễ tân.',
    tags: ['Đặt hẹn online', 'Nhắc lịch Zalo', 'Google Maps']
  },
  {
    id: 'wf-service',
    industry: 'Thợ sửa chữa & Dịch vụ tại nhà',
    badge: 'Workflow minh họa',
    problem: 'Khách gọi hỏi báo giá liên tục nhưng sợ thợ vẽ bệnh, không biết thợ uy tín ở đâu để gọi.',
    oldWay: 'Đăng bài dạo trên các nhóm Facebook, khách hỏi giá mơ hồ không ai chốt, cạnh tranh phá giá.',
    localmateWay: 'Trang báo giá minh bạch theo từng hạng mục + Bảng tính chi phí tham khảo nhanh + Nút gọi khẩn cấp 1-chạm.',
    resultSummary: 'Khách xem bảng giá rõ ràng trước khi gọi nên tỷ lệ chốt đơn khi bấm gọi đạt rất cao, không còn mặc cả hay nghi ngờ.',
    tags: ['Bảng giá minh bạch', 'Nút gọi 1-chạm', 'Google Maps']
  },
  {
    id: 'wf-retail',
    industry: 'Cửa hàng bán lẻ & Đại lý vật tư',
    badge: 'Workflow minh họa',
    problem: 'Sản phẩm nhiều mẫu mã, khách sỉ/lẻ hỏi catalog liên tục, file PDF nặng gửi qua Zalo hay bị trôi.',
    oldWay: 'Gửi hàng chục bức ảnh kèm bảng giá chụp bằng điện thoại qua Zalo, mỗi lần đổi giá phải làm lại từ đầu.',
    localmateWay: 'Trang tra cứu danh mục sản phẩm trực quan + Nút "Gửi danh sách qua Zalo" để chốt đơn nhanh với chủ shop.',
    resultSummary: 'Khách hàng lướt xem danh mục nhẹ nhàng trên điện thoại, tự tick chọn sản phẩm cần lấy và gửi thẳng sang Zalo bán hàng.',
    tags: ['Danh mục sản phẩm', 'Chốt đơn Zalo', 'Tra cứu nhanh']
  }
];

// 7. AI HONEST SECTION (Góc nhìn trung thực về ứng dụng AI)
export const AI_HONEST_DATA: AiHonestCopy = {
  badge: 'Góc nhìn trung thực',
  title: 'AI chỉ thực sự có ích khi giải quyết được một việc thật',
  intro:
    'Hiện tại rất nhiều nơi nói về AI như một phép màu thay đổi tất cả. Tại Localmate, chúng tôi nhìn AI một cách điềm tĩnh và thực tế: đó là một công cụ phụ trợ tốt nếu biết dùng đúng chỗ, chứ không phải giải pháp thần thánh cho mọi việc.',
  whatAiCanDo: [
    {
      title: 'Tự động đọc và phân loại tin nhắn khách',
      desc: 'Giúp nhận biết khách nào đang cần gấp, khách nào hỏi bảng giá để ưu tiên xử lý trước.'
    },
    {
      title: 'Hỗ trợ viết bản nháp nội dung',
      desc: 'Viết nhanh khung bài đăng, lời mô tả món ăn, bài giới thiệu dịch vụ để bạn chỉnh sửa lại theo ý mình.'
    },
    {
      title: 'Tổng hợp báo cáo tuần nhanh gọn',
      desc: 'Đọc số liệu từ file bán hàng và tóm tắt thành vài dòng nhận xét dễ hiểu gửi vào nhóm Zalo.'
    },
    {
      title: 'Tìm kiếm và gợi ý từ khóa khách hay tìm',
      desc: 'Phân tích xem người quanh vùng bạn đang gõ những câu hỏi gì khi tìm kiếm dịch vụ.'
    }
  ],
  whatAiCannotDo: [
    {
      title: 'Không thể thay thế tay nghề và uy tín thật',
      desc: 'Món ăn ngon, thợ sửa có tâm hay bác sĩ nhiệt tình là giá trị cốt lõi con người làm ra, AI không làm thay được.'
    },
    {
      title: 'Không thể tự hiểu hết ngóc ngách của quán bạn',
      desc: 'Nếu không có người thật cấu hình và rà soát, AI rất dễ trả lời chung chung hoặc nhầm lẫn thông tin.'
    },
    {
      title: 'Không cần ép dùng khi giải pháp thông thường đã tốt',
      desc: 'Nếu một cái form đơn giản hay một công thức Excel đã giải quyết xong việc, Localmate tuyệt đối không ép bạn cài AI.'
    }
  ],
  ourStance:
    'Quan điểm của chúng tôi: Cái gì làm bằng cách đơn giản được thì ưu tiên cách đơn giản. Chỉ dùng AI khi nó thực sự tiết kiệm thời gian hoặc đem lại giá trị rõ ràng cho bạn.'
};

// 8. WHY LOCALMATE SECTION (5 Triết lý làm việc của Localmate)
export const WHY_CHOOSE_POINTS: WhyChooseItem[] = [
  {
    number: '01',
    title: 'Bắt đầu từ việc thật, không bán công nghệ thừa',
    description:
      'Chúng tôi không đến để chào mời bạn mua một phần mềm đắt đỏ. Chúng tôi đến để nghe bạn nói chỗ nào đang vướng và cùng bạn gỡ đúng chỗ đó.',
    highlight: 'Đúng việc, đúng chỗ'
  },
  {
    number: '02',
    title: 'Tận dụng tối đa những gì bạn đang có',
    description:
      'Bạn đang quen dùng Zalo, fanpage hay sổ sách Excel? Localmate sẽ tìm cách kết nối dựa trên thói quen sẵn có của bạn, không bắt bạn phải học lại từ đầu.',
    highlight: 'Không đảo lộn công việc'
  },
  {
    number: '03',
    title: 'Làm nhỏ, dùng được ngay rồi mới mở rộng',
    description:
      'Không cần đợi hàng tháng trời hay bỏ ra ngân sách lớn. Một giải pháp nhỏ có thể hoàn thành trong vài ngày để bạn dùng thử và thấy giá trị trước.',
    highlight: 'Nhanh gọn & An toàn'
  },
  {
    number: '04',
    title: 'Tài khoản, dữ liệu và mã nguồn 100% thuộc về bạn',
    description:
      'Mọi tài khoản tên miền, bản đồ Google, file dữ liệu đều được đăng ký chính chủ vào email của bạn. Localmate bàn giao đầy đủ, không giữ bất cứ thứ gì làm con tin.',
    highlight: 'Minh bạch tuyệt đối'
  },
  {
    number: '05',
    title: 'Có người thật cùng xử lý khi phát sinh việc',
    description:
      'Không phải chat với bot hay gửi ticket chờ đợi. Bạn có số điện thoại và nhóm Zalo với kỹ thuật viên địa phương, cần đổi giá hay hỗ trợ là có người nghe máy.',
    highlight: 'Hỗ trợ 1-1 tại chỗ'
  }
];

// 9. FINAL CTA SECTION (Không chắc mình cần gì?)
export const FINAL_CTA_COPY: FinalCtaCopy = {
  badge: 'Cần hỗ trợ công nghệ?',
  title: 'Bạn không chắc mình thực sự cần giải pháp gì?',
  description:
    'Không sao cả. Đa số khách hàng tìm đến Localmate đều chỉ bắt đầu bằng câu: "Tôi đang thấy chỗ này phiền quá". Hãy kể cho chúng tôi cách bạn đang làm việc, Localmate sẽ gợi ý cách giải quyết đơn giản nhất.',
  ctaButtonText: 'Kể cho Localmate việc bạn đang cần làm',
  secondaryCtaText: 'Gọi hoặc nhắn Zalo trao đổi trực tiếp',
  phoneDisplay: '0834.422.439',
  phoneRaw: '0834422439',
  commitments: [
    'Tư vấn miễn phí 100%',
    'Không ép mua hay chào mời phức tạp',
    'Xem bản demo dùng thử trước khi quyết định',
    'Báo giá cố định, không phát sinh'
  ]
};
