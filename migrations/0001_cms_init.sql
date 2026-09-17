-- LocalMate CMS - Cloudflare D1 Initial Migration (Prefixed with cms_ to isolate domain)
-- Database: localmate_survey_db (UUID: 2a283520-4f4d-4542-8493-8caeb7673808)
-- Migration: 0001_cms_init.sql

-- 1. CMS Users Table (Admin & Editors)
CREATE TABLE IF NOT EXISTS cms_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  uuid TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
  name TEXT NOT NULL,
  avatar TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. CMS Categories Table
CREATE TABLE IF NOT EXISTS cms_categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  post_count INTEGER NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 3. CMS Tags Table
CREATE TABLE IF NOT EXISTS cms_tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  post_count INTEGER NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 4. CMS Media Library Table (Cloudflare R2 metadata)
CREATE TABLE IF NOT EXISTS cms_media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  filename TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size INTEGER NOT NULL,
  width INTEGER,
  height INTEGER,
  alt_text TEXT,
  caption TEXT,
  r2_key TEXT NOT NULL UNIQUE,
  url TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 5. CMS Posts Table (Main Articles)
CREATE TABLE IF NOT EXISTS cms_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  uuid TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content_json TEXT NOT NULL,
  rendered_html TEXT NOT NULL,
  featured_image_id INTEGER REFERENCES cms_media(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'scheduled', 'published', 'archived')),
  author_id INTEGER REFERENCES cms_users(id) ON DELETE SET NULL,
  category_id INTEGER REFERENCES cms_categories(id) ON DELETE SET NULL,
  published_at DATETIME,
  scheduled_at DATETIME,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  seo_title TEXT,
  seo_description TEXT,
  focus_keyword TEXT,
  canonical_url TEXT,
  og_title TEXT,
  og_description TEXT,
  og_image_id INTEGER REFERENCES cms_media(id) ON DELETE SET NULL,
  robots_index INTEGER NOT NULL DEFAULT 1,
  robots_follow INTEGER NOT NULL DEFAULT 1,
  schema_json TEXT,
  reading_time TEXT DEFAULT '5 phút đọc',
  word_count INTEGER NOT NULL DEFAULT 0,
  revision_number INTEGER NOT NULL DEFAULT 1,
  brief_json TEXT
);

-- 6. CMS Post Tags Relation Table
CREATE TABLE IF NOT EXISTS cms_post_tags (
  post_id INTEGER NOT NULL REFERENCES cms_posts(id) ON DELETE CASCADE,
  tag_id INTEGER NOT NULL REFERENCES cms_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- 7. CMS Post Revisions History
CREATE TABLE IF NOT EXISTS cms_post_revisions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL REFERENCES cms_posts(id) ON DELETE CASCADE,
  revision_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content_json TEXT NOT NULL,
  rendered_html TEXT NOT NULL,
  author_id INTEGER REFERENCES cms_users(id) ON DELETE SET NULL,
  reason TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 8. CMS Standalone Pages Table
CREATE TABLE IF NOT EXISTS cms_pages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content_json TEXT NOT NULL,
  rendered_html TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published')),
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 9. CMS Site Settings Key-Value Table
CREATE TABLE IF NOT EXISTS cms_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 10. CMS Redirects Table (301 / 302 SEO Manager)
CREATE TABLE IF NOT EXISTS cms_redirects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_path TEXT NOT NULL UNIQUE,
  destination_url TEXT NOT NULL,
  status_code INTEGER NOT NULL DEFAULT 301 CHECK (status_code IN (301, 302)),
  active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0, 1)),
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Optimized Query Indexes
CREATE INDEX IF NOT EXISTS idx_cms_posts_slug ON cms_posts(slug);
CREATE INDEX IF NOT EXISTS idx_cms_posts_status_published ON cms_posts(status, published_at);
CREATE INDEX IF NOT EXISTS idx_cms_posts_category ON cms_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_cms_categories_slug ON cms_categories(slug);
CREATE INDEX IF NOT EXISTS idx_cms_tags_slug ON cms_tags(slug);
CREATE INDEX IF NOT EXISTS idx_cms_redirects_source ON cms_redirects(source_path);
CREATE INDEX IF NOT EXISTS idx_cms_revisions_post ON cms_post_revisions(post_id, revision_number);
