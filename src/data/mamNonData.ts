/**
 * Dữ liệu tĩnh có cấu trúc cho trang Localmate Mầm non
 * Trích xuất nguyên bản từ:
 * - D:\01-Life-Operations\output\localmate-preschool\index.html
 * - D:\01-Life-Operations\output\localmate-preschool\fixtures\demo-data.js
 * 
 * 100% typed, không any, giữ nguyên ngữ nghĩa và câu chữ gốc.
 */

// ==========================================
// 1. FEATURE CARDS
// ==========================================
export interface FeatureCardData {
  id: string;
  icon: string;
  iconColor?: 'blue' | 'peach' | '';
  title: string;
  description: string;
}

export const FEATURE_CARDS: FeatureCardData[] = [
  {
    id: 'f1',
    icon: 'calendar-check',
    title: 'Điểm danh bé',
    description: 'Có mặt, nghỉ phép, giờ đến'
  },
  {
    id: 'f2',
    icon: 'child',
    iconColor: 'blue',
    title: 'Hồ sơ của từng bé',
    description: 'Thông tin phụ huynh,\nlớp học, ghi chú'
  },
  {
    id: 'f3',
    icon: 'send',
    iconColor: 'peach',
    title: 'Xin nghỉ & thông báo',
    description: 'Phụ huynh gửi nghỉ,\ncô và quản lý cùng nắm'
  },
  {
    id: 'f4',
    icon: 'coins',
    iconColor: 'peach',
    title: 'Theo dõi học phí',
    description: 'Biết bé nào đã đóng,\nchưa đóng'
  },
  {
    id: 'f5',
    icon: 'sprout',
    title: 'Theo dõi sự phát triển',
    description: 'Cân nặng, chiều cao,\nghi chú theo thời gian'
  },
  {
    id: 'f6',
    icon: 'chart',
    title: 'Báo cáo cho quản lý',
    description: 'Không phải cộng lại\ntừ nhiều cuốn sổ'
  }
];

// ==========================================
// 2. ROLE CARDS
// ==========================================
export interface RoleCardData {
  id: string;
  icon: string;
  role: string;
  title: string;
  description: string;
  items: string[];
  artAriaLabel: string;
  hasRays?: boolean;
}

export const ROLE_CARDS: RoleCardData[] = [
  {
    id: 'teacher',
    icon: 'graduation',
    role: 'Cô giáo',
    title: 'Với cô giáo',
    description: 'Mở danh sách lớp, chạm để điểm danh, cập nhật nhanh trong ngày.',
    items: [
      'Điểm danh nhanh',
      'Cập nhật ăn, ngủ, học',
      'Ghi chú hoạt động'
    ],
    artAriaLabel: 'Minh họa cô giáo cầm máy tính bảng',
    hasRays: true
  },
  {
    id: 'principal',
    icon: 'users',
    role: 'Chủ lớp / hiệu trưởng',
    title: 'Với chủ lớp / hiệu trưởng',
    description: 'Biết sĩ số từng lớp, tra cứu dữ liệu, đối soát và báo cáo dễ hơn.',
    items: [
      'Theo dõi sĩ số, tình hình lớp',
      'Tra cứu lịch sử, đối soát',
      'Báo cáo trực quan, dễ hiểu'
    ],
    artAriaLabel: 'Minh họa hiệu trưởng làm việc trên laptop'
  },
  {
    id: 'parent',
    icon: 'heart',
    role: 'Phụ huynh',
    title: 'Với phụ huynh',
    description: 'Nhận thông tin cần thiết về bé và gửi xin nghỉ thuận tiện.',
    items: [
      'Xem hoạt động trong ngày',
      'Nhận thông báo quan trọng',
      'Gửi xin nghỉ dễ dàng'
    ],
    artAriaLabel: 'Minh họa mẹ và bé cùng xem điện thoại'
  }
];

// ==========================================
// 3. DAY FLOW ITEMS
// ==========================================
export interface DayFlowItem {
  time: string;
  title: string;
  description: string;
  icon: string;
  badgeColor?: 'peach' | 'blue' | '';
}

export const DAY_FLOW_ITEMS: DayFlowItem[] = [
  {
    time: '07:15',
    title: 'Bé đến lớp',
    description: 'Bắt đầu một ngày\ntràn đầy năng lượng',
    icon: 'backpack'
  },
  {
    time: '08:00',
    title: 'Cô điểm danh',
    description: 'Chạm một lần,\nhoàn tất điểm danh',
    icon: 'calendar-check',
    badgeColor: 'peach'
  },
  {
    time: 'Trong ngày',
    title: 'Cập nhật khi cần',
    description: 'Ăn, ngủ, học, hoạt động...\nđược cập nhật linh hoạt',
    icon: 'sun'
  },
  {
    time: 'Cuối ngày',
    title: 'Dữ liệu đã sẵn sàng',
    description: 'Mọi thông tin được tổng hợp\nđầy đủ, rõ ràng',
    icon: 'chart',
    badgeColor: 'blue'
  }
];

// ==========================================
// 4. SCALE STEP ITEMS
// ==========================================
export interface ScaleStepItem {
  step: string;
  title: string;
  description: string;
  icon: string;
  artType: 'classroom' | 'school' | 'laptop';
  artAriaLabel: string;
  artNote?: string;
  artLabel?: string;
}

export const SCALE_STEP_ITEMS: ScaleStepItem[] = [
  {
    step: '01',
    title: 'Nhóm trẻ / lớp mầm non độc lập',
    description: 'Bắt đầu đơn giản với danh sách bé,\nđiểm danh, nghỉ học và học phí.',
    icon: 'home',
    artType: 'classroom',
    artAriaLabel: 'Lớp học nhỏ với bàn ghế gỗ, cây xanh và đồ chơi',
    artNote: 'Lớp nhỏ\nNhững niềm vui lớn\n♡'
  },
  {
    step: '02',
    title: 'Trường mầm non nhỏ',
    description: 'Thêm nhiều lớp, giáo viên, phân\nquyền và báo cáo cho quản lý.',
    icon: 'school',
    artType: 'school',
    artAriaLabel: 'Ngôi trường mầm non nhỏ mái xanh với sân chơi',
    artLabel: 'TRƯỜNG MẦM NON'
  },
  {
    step: '03',
    title: 'Trường đang có cách làm riêng',
    description: 'Cùng xem lại quy trình hiện tại và\nđiều chỉnh theo nhu cầu thực tế.',
    icon: 'settings',
    artType: 'laptop',
    artAriaLabel: 'Minh họa giao diện quản lý lớp học trên laptop'
  }
];

// ==========================================
// 5. SUPPORT GRID ITEMS (CAM KẾT DÙNG THỬ)
// ==========================================
export interface SupportGridItem {
  icon: string;
  title: string;
  description: string;
}

export const SUPPORT_GRID_ITEMS: SupportGridItem[] = [
  {
    icon: 'shield',
    title: 'Bảo hành 5 năm',
    description: 'Yên tâm sử dụng lâu dài'
  },
  {
    icon: 'headset',
    title: 'Hỗ trợ kỹ thuật các ngày trong tuần',
    description: 'Luôn có người đồng hành'
  },
  {
    icon: 'users',
    title: 'Hướng dẫn cô giáo và người quản lý sử dụng',
    description: 'Dễ hiểu, dễ áp dụng'
  },
  {
    icon: 'settings',
    title: 'Nhận bổ sung và điều chỉnh theo nhu cầu',
    description: 'Linh hoạt theo thực tế của lớp'
  }
];

// ==========================================
// 6. PRICING INCLUDED FEATURES
// ==========================================
export interface PricingIncludedFeature {
  icon: string;
  title: string;
}

export const PRICING_INCLUDED_FEATURES: PricingIncludedFeature[] = [
  { icon: 'calendar-check', title: 'Điểm danh' },
  { icon: 'chart', title: 'Báo cáo cơ bản' },
  { icon: 'users', title: 'Hồ sơ bé' },
  { icon: 'headset', title: 'Hỗ trợ kỹ thuật' },
  { icon: 'calendar', title: 'Nghỉ học' },
  { icon: 'shield', title: 'Bảo hành 5 năm' },
  { icon: 'coins', title: 'Học phí' },
  { icon: 'settings', title: 'Tiếp nhận yêu cầu điều chỉnh' }
];

// ==========================================
// 7. FAQ ITEMS
// ==========================================
export interface FaqItem {
  icon: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    icon: 'users',
    question: 'Lớp chỉ có 15–20 bé có dùng được không?',
    answer: 'Có. Localmate phù hợp cả nhóm trẻ và lớp mầm non nhỏ.'
  },
  {
    icon: 'graduation',
    question: 'Cô giáo không rành công nghệ có dùng được không?',
    answer: 'Được. Giao diện làm đơn giản, dễ học và có người hướng dẫn.'
  },
  {
    icon: 'laptop',
    question: 'Có cần cài phần mềm phức tạp không?',
    answer: 'Không cần. Có thể dùng trên điện thoại hoặc laptop.'
  },
  {
    icon: 'coins',
    question: 'Có hỗ trợ nhập dữ liệu ban đầu không?',
    answer: 'Có. Localmate hỗ trợ cô chuẩn bị dữ liệu để bắt đầu nhẹ nhàng hơn.'
  },
  {
    icon: 'settings',
    question: 'Muốn thêm một chức năng riêng thì sao?',
    answer: 'Bên em tiếp nhận và điều chỉnh theo nhu cầu thực tế của lớp hoặc trường.'
  },
  {
    icon: 'shield',
    question: 'Sau 1 tháng dùng thử không phù hợp thì sao?',
    answer: 'Không sao cả. Mục tiêu của dùng thử là để các cô xem hệ thống có thật sự hợp với mình hay không.'
  }
];

// ==========================================
// 8. STUDENT DEMO ITEMS
// ==========================================
export interface StudentDemoItem {
  name: string;
  initial: string;
  girl: boolean;
  present: boolean;
  paid: boolean;
}

export const STUDENT_DEMO_ITEMS: StudentDemoItem[] = [
  { name: 'Nguyễn Minh Anh', initial: 'A', girl: true, present: true, paid: true },
  { name: 'Trần Bảo Nam', initial: 'N', girl: false, present: true, paid: false },
  { name: 'Lê Gia Hân', initial: 'H', girl: true, present: false, paid: true },
  { name: 'Phạm Tuấn Kiệt', initial: 'K', girl: false, present: true, paid: false },
  { name: 'Vũ Ngọc Linh', initial: 'L', girl: true, present: true, paid: true }
];

// ==========================================
// 9. PROFILE DEMO DATA
// ==========================================
export interface ProfileDemoData {
  child: [string, string][];
  parent: string;
  health: string;
  notes: string;
}

export const PROFILE_DEMO_DATA: ProfileDemoData = {
  child: [
    ['Họ và tên', 'Nguyễn Minh Anh'],
    ['Ngày sinh', '28/08/2021'],
    ['Giới tính', 'Nữ'],
    ['Lớp học', 'Lớp Lá 1']
  ],
  parent: 'Bản mẫu chưa có thông tin phụ huynh.',
  health: 'Bản mẫu chưa có dữ liệu sức khỏe.',
  notes: 'Bé ăn tốt, rất ngoan. Thích vẽ tranh và hoạt động ngoài trời.'
};

export const DEMO_TUITION = '3.000.000đ';

// ==========================================
// 10. SEO METADATA
// ==========================================
export interface SeoMetadata {
  title: string;
  description: string;
  canonical: string;
  themeColor: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    locale: string;
    image?: string;
  };
}

export const MAM_NON_SEO: SeoMetadata = {
  title: 'Localmate Mầm non — Thêm thời gian cho các bé',
  description: 'Giao diện giới thiệu Localmate Mầm non: điểm danh, hồ sơ bé, học phí và những việc hàng ngày trong một nơi thật đơn giản.',
  canonical: 'https://localmate.vn/mam-non',
  themeColor: '#00825c',
  openGraph: {
    title: 'Localmate Mầm non — Thêm thời gian cho các bé',
    description: 'Giao diện giới thiệu Localmate Mầm non: điểm danh, hồ sơ bé, học phí và những việc hàng ngày trong một nơi thật đơn giản.',
    url: 'https://localmate.vn/mam-non',
    type: 'website',
    locale: 'vi_VN'
  }
};

// ==========================================
// BỔ SUNG: DỮ LIỆU BÁO CÁO & BÁO NGHỈ MINH HỌA
// ==========================================
export interface RecentAbsenceItem {
  name: string;
  days: string;
  dateRange: string;
  status: 'Đã duyệt' | 'Chờ duyệt';
  isPending?: boolean;
  initial?: string;
  avatarSrc?: string;
}

export const RECENT_ABSENCES_DEMO: RecentAbsenceItem[] = [
  {
    name: 'Trần Bảo Nam',
    days: 'Nghỉ 1 ngày',
    dateRange: '18/09/2024',
    status: 'Đã duyệt',
    initial: 'N'
  },
  {
    name: 'Lê Gia Hân',
    days: 'Nghỉ 2 ngày',
    dateRange: '17–18/09/2024',
    status: 'Đã duyệt',
    avatarSrc: 'assets/child-avatar.png'
  },
  {
    name: 'Nguyễn Minh Anh',
    days: 'Nghỉ 1 ngày',
    dateRange: '16/09/2024',
    status: 'Chờ duyệt',
    isPending: true,
    avatarSrc: 'assets/child-avatar.png'
  }
];

export interface AttendanceChartStat {
  label: string;
  count: number;
  barPercent: string;
  color: string;
}

export const ATTENDANCE_CHART_DEMO: AttendanceChartStat[] = [
  { label: 'Có mặt', count: 22, barPercent: '85%', color: '#56ae88' },
  { label: 'Nghỉ', count: 5, barPercent: '24%', color: '#ff8991' },
  { label: 'Xin nghỉ', count: 3, barPercent: '15%', color: '#ffba47' }
];

export const HERO_ATTENDANCE_SUMMARY = {
  present: 18,
  absent: 2,
  unmarked: 1
};
