-- LocalMate CMS - Initial Defaults (Categories, Site Settings, Admin User)
-- Migration: 0002_cms_defaults.sql

-- 1. Insert Default Categories
INSERT OR IGNORE INTO cms_categories (id, name, slug, description, post_count) VALUES
(1, 'Website', 'website', 'Hướng dẫn thiết kế website, tối ưu tốc độ và chuyển đổi cho doanh nghiệp nhỏ', 0),
(2, 'Google Maps', 'google-maps', 'Kinh nghiệm xác minh, quản lý và tối ưu Google Business Profile', 0),
(3, 'Local SEO', 'local-seo', 'Chiến lược đưa doanh nghiệp lên top tìm kiếm tại địa phương', 0),
(4, 'Google Ads', 'google-ads', 'Cách chạy quảng cáo Google tiết kiệm chi phí và ra khách thật', 0),
(5, 'Content', 'content', 'Xây dựng nội dung thu hút khách hàng và giữ chân thương hiệu', 0),
(6, 'CRM & Automation', 'crm-automation', 'Tự động hóa chăm sóc khách hàng và quản lý doanh nghiệp nhỏ', 0),
(7, 'Kinh doanh địa phương', 'kinh-doanh-dia-phuong', 'Kinh nghiệm kinh doanh và chuyển đổi số cho cửa hàng, tiệm dịch vụ', 0);

-- 2. Insert Default Site Settings
INSERT OR IGNORE INTO cms_settings (key, value) VALUES
('site_name', 'LocalMate'),
('site_description', 'Đơn vị thiết kế Website, SEO & Giải pháp Tăng Trưởng Khách Hàng cho Doanh Nghiệp Nhỏ'),
('phone', '+84834422439'),
('email', 'contact@localmate.vn'),
('address', 'TP. Hồ Chí Minh, Việt Nam'),
('facebook', 'https://facebook.com/localmate.vn'),
('zalo', 'https://zalo.me/0834422439'),
('logo_url', 'https://localmate.vn/logo.png'),
('default_og_image', 'https://localmate.vn/logo.png'),
('default_meta_title', 'LocalMate | Đồng Hành Cùng Doanh Nghiệp Nhỏ'),
('default_meta_description', 'Giải pháp làm website, tối ưu Google Maps và chạy quảng cáo rõ ràng, minh bạch cho tiệm và doanh nghiệp địa phương.'),
('business_name', 'LocalMate Co., Ltd'),
('business_url', 'https://localmate.vn');

-- 3. Insert Default Admin User (Password: LocalMate@2026 - hash with SHA-256 + salt)
-- Salt: "localmate_salt_2026", String: "localmate_salt_2026:LocalMate@2026"
-- SHA-256 of "localmate_salt_2026:LocalMate@2026": fb78ff03f674f356d1ee1b20e11e0f9a4b220c2bdab7b3c6e1b83f0b76397d95
INSERT OR IGNORE INTO cms_users (id, uuid, username, email, password_hash, role, name) VALUES
(1, 'usr_admin_001', 'admin', 'contact@localmate.vn', 'sha256:localmate_salt_2026:fb78ff03f674f356d1ee1b20e11e0f9a4b220c2bdab7b3c6e1b83f0b76397d95', 'admin', 'LocalMate Admin');
