-- LocalMate CMS - Performance Indexes Migration
-- Migration: 0005_performance_indexes.sql
-- Database: localmate_survey_db

-- 1. Index for foreign key lookups in JOIN queries
CREATE INDEX IF NOT EXISTS idx_cms_posts_author ON cms_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_cms_posts_featured_image ON cms_posts(featured_image_id);
CREATE INDEX IF NOT EXISTS idx_cms_posts_cta ON cms_posts(cta_id);

-- 2. Index for scheduled publishing and status filtering
CREATE INDEX IF NOT EXISTS idx_cms_posts_scheduled ON cms_posts(status, scheduled_at);

-- 3. Index for 301 redirect fast path resolution
CREATE INDEX IF NOT EXISTS idx_cms_redirects_active ON cms_redirects(active, source_path);
