// LocalMate CMS - Shared Types & Interfaces

export type PostStatus = 'draft' | 'review' | 'scheduled' | 'published' | 'archived';

export interface PostContentBrief {
  primary_keyword: string;
  secondary_keywords: string[];
  search_intent: string;
  target_customer: string;
  content_goal: string;
  outline: string[];
}

export interface PostEntity {
  id: number;
  uuid: string;
  title: string;
  slug: string;
  excerpt: string;
  content_json: string; // Tiptap JSON string
  rendered_html: string;
  featured_image_id?: number | null;
  featured_image_url?: string | null;
  status: PostStatus;
  author_id: number;
  author_name?: string;
  category_id: number;
  category_name?: string;
  category_slug?: string;
  published_at?: string | null;
  scheduled_at?: string | null;
  created_at: string;
  updated_at: string;
  seo_title?: string;
  seo_description?: string;
  focus_keyword?: string;
  canonical_url?: string;
  og_title?: string;
  og_description?: string;
  robots_index: number;
  robots_follow: number;
  reading_time: string;
  word_count: number;
  revision_number: number;
  brief_json?: string;
  tags?: string[];
}

export interface CategoryEntity {
  id: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  created_at: string;
  updated_at: string;
}

export interface TagEntity {
  id: number;
  name: string;
  slug: string;
  post_count: number;
  created_at: string;
  updated_at: string;
}

export interface MediaEntity {
  id: number;
  filename: string;
  original_filename: string;
  mime_type: string;
  size: number;
  width?: number | null;
  height?: number | null;
  alt_text?: string;
  caption?: string;
  r2_key: string;
  url: string;
  created_at: string;
}

export interface PostRevisionEntity {
  id: number;
  post_id: number;
  revision_number: number;
  title: string;
  slug: string;
  content_json: string;
  rendered_html: string;
  author_id: number;
  author_name?: string;
  reason?: string;
  created_at: string;
}

export interface RedirectEntity {
  id: number;
  source_path: string;
  destination_url: string;
  status_code: 301 | 302;
  active: 0 | 1;
  created_at: string;
}

export interface UserEntity {
  id: number;
  uuid: string;
  username: string;
  email: string;
  role: 'admin' | 'editor';
  name: string;
  avatar?: string;
}

export interface DashboardStats {
  stats?: {
    totalPosts: number;
    publishedPosts: number;
    draftPosts: number;
    scheduledPosts: number;
  };
  totalPosts?: number;
  publishedPosts?: number;
  draftPosts?: number;
  scheduledPosts?: number;
  recentPosts: PostEntity[];
  upcomingPosts: PostEntity[];
  topCategories: CategoryEntity[];
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  redirect?: {
    destination: string;
    status: number;
  };
  error?: {
    code: string;
    message: string;
  };
}
