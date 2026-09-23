import { BarChart3, Bot, Briefcase, Coins, Globe2, Lightbulb, Rocket, Settings, ShieldCheck, Store, Users, UtensilsCrossed, Workflow } from 'lucide-react';

export const labsProducts = [
  { id: 'tieu-huu', name: 'Tiểu Hữu AI', description: 'Trợ lý AI hỗ trợ công việc và vận hành hằng ngày, giúp bạn làm nhiều hơn với ít thời gian hơn.', short: 'Trợ lý công việc hằng ngày', image: '/images/labs/product-tieu-huu.webp', icon: Settings, status: 'Đang phát triển', stage: 1, tone: 'mint' },
  { id: 'huu-ta', name: 'Hữu Tá AI', description: 'AI hỗ trợ các hoạt động tài chính theo hướng minh bạch, có con người kiểm soát.', short: 'Hỗ trợ tài chính minh bạch', image: '/images/labs/product-huu-ta.webp', icon: BarChart3, status: 'Pilot', stage: 2, tone: 'blue' },
  { id: 'tieu-nhi', name: 'Tiểu Nhị AI', description: 'Trợ lý AI đặt tại quán, hỗ trợ gọi món, giao tiếp với khách và phối hợp công việc phục vụ.', short: 'Trợ lý cho quán và nhà hàng', image: '/images/labs/product-tieu-nhi.webp', icon: Store, status: 'Thử nghiệm thực tế', stage: 2, tone: 'peach' },
] as const;

export const labsShowcase = [
  ...labsProducts,
  { id: 'exportmate', name: 'ExportMate', description: 'Nền tảng AI hỗ trợ doanh nghiệp theo dõi quy trình, chứng từ và công việc xuất khẩu.', image: '/images/labs/product-exportmate.webp', icon: Globe2, status: 'Dự án liên quan', tone: 'mint', href: 'https://github.com/hungpixi/exportmate' },
  { id: 'vietfi', name: 'VietFi Advisor', description: 'Trợ lý tài chính cho người Việt với công cụ quản lý nợ, theo dõi thị trường và mô phỏng chiến lược.', image: '/images/labs/product-vietfi.webp', icon: Coins, status: 'Dự án liên quan', tone: 'blue', href: 'https://github.com/26730023-PhamPhuNguyenHung/vietfi-advisor' },
] as const;

export const labsValues = [
  { title: 'AI hỗ trợ con người', description: 'Công nghệ để con người làm tốt hơn, không phải thay thế con người.', icon: Users },
  { title: 'Bài toán thực tế', description: 'Tập trung vào những vấn đề cụ thể trong đời sống và kinh doanh địa phương.', icon: Lightbulb },
  { title: 'Dữ liệu có trách nhiệm', description: 'Tôn trọng quyền riêng tư, minh bạch và có kiểm soát.', icon: ShieldCheck },
  { title: 'Triển khai tinh gọn', description: 'Từ ý tưởng đến sản phẩm thực tế với quy trình nhanh và hiệu quả.', icon: Rocket },
] as const;

export const labsProblems = [
  { title: 'Vận hành doanh nghiệp SME', description: 'Tiết kiệm thời gian, tối ưu quy trình, chuyên nghiệp hơn mỗi ngày.', image: '/images/labs/problem-sme.webp', icon: Briefcase, anchor: 'tieu-huu' },
  { title: 'Hỗ trợ tài chính minh bạch', description: 'Công cụ để quản lý tài chính đơn giản, rõ ràng, dễ hiểu và có con người đồng hành.', image: '/images/labs/problem-finance.webp', icon: Coins, anchor: 'huu-ta' },
  { title: 'Hỗ trợ cửa hàng / nhà hàng', description: 'Tự động hóa giao tiếp, gọi món, chăm sóc khách hàng và phối hợp vận hành.', image: '/images/labs/problem-restaurant.webp', icon: UtensilsCrossed, anchor: 'tieu-nhi' },
  { title: 'Tự động hóa công việc nội bộ', description: 'Giúp đội ngũ làm việc hiệu quả hơn với các trợ lý AI chuyên biệt.', image: '/images/labs/problem-automation.webp', icon: Workflow, anchor: 'tieu-huu' },
] as const;

export const labsSteps = [
  { title: 'Xác định vấn đề thật', description: 'Lắng nghe người dùng, tìm hiểu bối cảnh và nhu cầu thực tế.', icon: Lightbulb },
  { title: 'Dựng prototype nhanh', description: 'Phát triển phiên bản thử nghiệm với tính năng cốt lõi.', icon: Settings },
  { title: 'Pilot trong môi trường thực tế', description: 'Đưa sản phẩm vào sử dụng thực tế, thu thập phản hồi và cải tiến.', icon: Users },
  { title: 'Hoàn thiện để có thể triển khai rộng hơn', description: 'Tối ưu sản phẩm, chuẩn hóa và sẵn sàng mở rộng.', icon: BarChart3 },
] as const;

export const labsStages = ['Research', 'Prototype', 'Pilot', 'Beta'] as const;
export const labsNextProduct = { name: 'Sản phẩm tiếp theo', short: 'Đang trong giai đoạn nghiên cứu', status: 'Nghiên cứu', stage: 0, icon: Bot } as const;
