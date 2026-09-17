-- LocalMate CMS - Advanced Upgrade Migration
-- Migration: 0004_cms_advanced_upgrade.sql
-- Database: localmate_survey_db

-- 1. Upgrade cms_media with metadata & optimization tracking
ALTER TABLE cms_media ADD COLUMN format TEXT;
ALTER TABLE cms_media ADD COLUMN hash TEXT;
ALTER TABLE cms_media ADD COLUMN size_original INTEGER;
ALTER TABLE cms_media ADD COLUMN size_optimized INTEGER;
ALTER TABLE cms_media ADD COLUMN focal_x REAL DEFAULT 0.5;
ALTER TABLE cms_media ADD COLUMN focal_y REAL DEFAULT 0.5;

-- 2. Upgrade cms_posts with GEO, Conversion & Schema fields
ALTER TABLE cms_posts ADD COLUMN geo_main_question TEXT;
ALTER TABLE cms_posts ADD COLUMN geo_direct_answer TEXT;
ALTER TABLE cms_posts ADD COLUMN geo_entities TEXT;
ALTER TABLE cms_posts ADD COLUMN geo_sources TEXT;
ALTER TABLE cms_posts ADD COLUMN geo_faq_json TEXT;
ALTER TABLE cms_posts ADD COLUMN cta_id INTEGER;
ALTER TABLE cms_posts ADD COLUMN schema_type TEXT DEFAULT 'Article';
ALTER TABLE cms_posts ADD COLUMN og_image_url TEXT;

-- 3. Upgrade cms_redirects with hit tracking
ALTER TABLE cms_redirects ADD COLUMN hits INTEGER NOT NULL DEFAULT 0;
ALTER TABLE cms_redirects ADD COLUMN last_hit_at DATETIME;

-- 4. Create Reusable Conversion CTAs Table
CREATE TABLE IF NOT EXISTS cms_ctas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  headline TEXT NOT NULL,
  description TEXT,
  button_label TEXT NOT NULL,
  destination_url TEXT NOT NULL,
  placement TEXT NOT NULL DEFAULT 'end' CHECK (placement IN ('after-intro', 'middle', 'before-conclusion', 'end')),
  is_active INTEGER NOT NULL DEFAULT 1 CHECK (is_active IN (0, 1)),
  impressions INTEGER NOT NULL DEFAULT 0,
  clicks INTEGER NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Seed Initial High-Converting CTAs for LocalMate
INSERT OR IGNORE INTO cms_ctas (id, name, headline, description, button_label, destination_url, placement, is_active) VALUES
(1, 'CTA Mặc Định: Tư Vấn Web Demo 0đ', 'Bạn muốn có một Website chuẩn SEO & Tốc độ vượt trội cho tiệm của mình?', 'Đội ngũ kỹ thuật LocalMate sẽ khảo sát và lên bản demo giao diện thực tế hoàn toàn miễn phí trong 24 giờ.', 'Đăng Ký Nhận Tư Vấn Ngay', '/lien-he', 'end', 1),
(2, 'CTA Google Maps: Xác Minh & Đưa Tiệm Lên Top', 'Khách hàng xung quanh có đang tìm thấy cửa hàng của bạn trên Google Maps?', 'LocalMate giúp xác minh chính chủ, dọn sạch thông tin sai lệch và tối ưu Local SEO bền vững.', 'Kiểm Tra Vị Trí Cửa Hàng Ngay', '/dich-vu/google-maps-seo', 'middle', 1),
(3, 'CTA GEO & AI Search: Đón Đầu Tìm Kiếm Bằng AI', 'Chuẩn bị nội dung để ChatGPT và Google Gemini sẵn sàng đề xuất tiệm của bạn.', 'Giải pháp tối ưu thực thể và dữ liệu có cấu trúc giúp thương hiệu giữ vững vị thế trong kỷ nguyên AI.', 'Tìm Hiểu Giải Pháp GEO', '/dich-vu/geo', 'before-conclusion', 1);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_cms_media_hash ON cms_media(hash);
CREATE INDEX IF NOT EXISTS idx_cms_ctas_active ON cms_ctas(is_active);
