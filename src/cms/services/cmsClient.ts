// API Client for LocalMate CMS
import { ApiResponse, PostEntity, CategoryEntity, TagEntity, MediaEntity, DashboardStats, RedirectEntity } from '../types';

const API_BASE = '/api';

function getHeaders(isJson: boolean = true): HeadersInit {
  const headers: Record<string, string> = {};
  if (isJson) {
    headers['Content-Type'] = 'application/json';
  }
  const token = localStorage.getItem('lm_auth_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const isFormData = options.body instanceof FormData;
    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        ...getHeaders(!isFormData),
        ...(options.headers || {})
      },
      credentials: 'include'
    });

    const data = await res.json();
    if (!res.ok && !data.error) {
      return {
        success: false,
        error: { code: `HTTP_${res.status}`, message: res.statusText || 'Lỗi kết nối máy chủ' }
      };
    }
    return data;
  } catch (err: any) {
    return {
      success: false,
      error: { code: 'NETWORK_ERROR', message: err.message || 'Không thể kết nối tới máy chủ' }
    };
  }
}

export const cmsClient = {
  // Auth
  async login(username: string, password: string) {
    const res = await request<{ token: string; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
    if (res.success && res.data?.token) {
      localStorage.setItem('lm_auth_token', res.data.token);
      localStorage.setItem('lm_auth_user', JSON.stringify(res.data.user));
    }
    return res;
  },

  async logout() {
    localStorage.removeItem('lm_auth_token');
    localStorage.removeItem('lm_auth_user');
    return request('/auth/logout', { method: 'POST' });
  },

  async getMe() {
    return request<any>('/auth/me');
  },

  getCurrentUser() {
    const raw = localStorage.getItem('lm_auth_user');
    return raw ? JSON.parse(raw) : null;
  },

  isAuthenticated() {
    return !!localStorage.getItem('lm_auth_token');
  },

  // Admin Dashboard
  async getDashboardStats() {
    return request<DashboardStats>('/admin/dashboard');
  },

  // Admin Posts
  async getPosts(params: { q?: string; status?: string; category_id?: string; page?: number; limit?: number } = {}) {
    const query = new URLSearchParams();
    if (params.q) query.set('q', params.q);
    if (params.status) query.set('status', params.status);
    if (params.category_id) query.set('category_id', params.category_id);
    if (params.page) query.set('page', String(params.page));
    if (params.limit) query.set('limit', String(params.limit));
    return request<{ posts: PostEntity[]; pagination: any }>(`/admin/posts?${query.toString()}`);
  },

  async getPostById(id: number) {
    return request<PostEntity>(`/admin/posts/${id}`);
  },

  async createPost(data: Partial<PostEntity>) {
    return request<{ id: number; slug: string; uuid: string }>('/admin/posts', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  async updatePost(id: number, data: Partial<PostEntity>) {
    return request<{ id: number; slug: string; revision_number: number }>(`/admin/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },

  async deletePost(id: number) {
    return request(`/admin/posts/${id}`, { method: 'DELETE' });
  },

  async publishPost(id: number) {
    return request(`/admin/posts/${id}/publish`, { method: 'POST' });
  },

  async duplicatePost(id: number) {
    return request<{ id: number; slug: string; title: string }>(`/admin/posts/${id}/duplicate`, { method: 'POST' });
  },

  async getPostRevisions(id: number) {
    return request<any[]>(`/admin/posts/${id}/revisions`);
  },

  async restoreRevision(postId: number, revisionId: number) {
    return request(`/admin/posts/${postId}/revisions/${revisionId}/restore`, { method: 'POST' });
  },

  async bulkPostAction(ids: number[], action: 'publish' | 'draft' | 'archive' | 'delete') {
    return request('/admin/posts/bulk', {
      method: 'POST',
      body: JSON.stringify({ ids, action })
    });
  },

  // Taxonomy
  async getCategories() {
    return request<CategoryEntity[]>('/admin/categories');
  },

  async createCategory(data: { name: string; slug?: string; description?: string }) {
    return request<CategoryEntity>('/admin/categories', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  async updateCategory(id: number, data: { name: string; slug?: string; description?: string }) {
    return request(`/admin/categories/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },

  async deleteCategory(id: number) {
    return request(`/admin/categories/${id}`, { method: 'DELETE' });
  },

  async getTags(q?: string) {
    return request<TagEntity[]>(`/admin/tags${q ? `?q=${encodeURIComponent(q)}` : ''}`);
  },

  async createTag(name: string) {
    return request<TagEntity>('/admin/tags', {
      method: 'POST',
      body: JSON.stringify({ name })
    });
  },

  // Media
  async getMedia(params: { q?: string; filter?: string; page?: number; limit?: number } = {}) {
    const query = new URLSearchParams();
    if (params.q) query.set('q', params.q);
    if (params.filter) query.set('filter', params.filter);
    if (params.page) query.set('page', String(params.page));
    if (params.limit) query.set('limit', String(params.limit));
    return request<{ media: MediaEntity[]; pagination: any }>(`/admin/media?${query.toString()}`);
  },

  async uploadMedia(
    file: File,
    meta?: {
      alt_text?: string;
      caption?: string;
      width?: number;
      height?: number;
      format?: string;
      hash?: string;
      size_original?: number;
      size_optimized?: number;
    }
  ) {
    const formData = new FormData();
    formData.append('file', file);
    if (meta?.alt_text) formData.append('alt_text', meta.alt_text);
    if (meta?.caption) formData.append('caption', meta.caption);
    if (meta?.width) formData.append('width', String(meta.width));
    if (meta?.height) formData.append('height', String(meta.height));
    if (meta?.format) formData.append('format', meta.format);
    if (meta?.hash) formData.append('hash', meta.hash);
    if (meta?.size_original) formData.append('size_original', String(meta.size_original));
    if (meta?.size_optimized) formData.append('size_optimized', String(meta.size_optimized));

    return request<MediaEntity>('/admin/media/upload', {
      method: 'POST',
      body: formData
    });
  },

  async updateMedia(id: number, data: { alt_text?: string; caption?: string; focal_x?: number; focal_y?: number }) {
    return request(`/admin/media/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },

  async deleteMedia(id: number, force: boolean = false) {
    return request(`/admin/media/${id}${force ? '?force=true' : ''}`, { method: 'DELETE' });
  },

  // CTA Conversion Manager
  async getCtas() {
    return request<any[]>('/admin/ctas');
  },

  async createCta(data: any) {
    return request<any>('/admin/ctas', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  async updateCta(id: number, data: any) {
    return request<any>(`/admin/ctas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },

  async deleteCta(id: number) {
    return request<any>(`/admin/ctas/${id}`, { method: 'DELETE' });
  },

  async trackCta(id: number, type: 'impression' | 'click') {
    return request('/public/cta/track', {
      method: 'POST',
      body: JSON.stringify({ cta_id: id, event_type: type })
    });
  },

  // SEO & GEO Global Audit
  async getSeoGeoAudit() {
    return request<any>('/admin/audit/seo-geo');
  },

  // Settings & Redirects
  async getSettings() {
    return request<Record<string, string>>('/admin/settings');
  },

  async updateSettings(settings: Record<string, string>) {
    return request('/admin/settings', {
      method: 'PUT',
      body: JSON.stringify(settings)
    });
  },

  async getRedirects() {
    return request<RedirectEntity[]>('/admin/redirects');
  },

  async createRedirect(data: { source_path: string; destination_url: string; status_code?: number }) {
    return request('/admin/redirects', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  async deleteRedirect(id: number) {
    return request(`/admin/redirects/${id}`, { method: 'DELETE' });
  },

  // Backup
  async exportBackup() {
    return request<any>('/admin/backup/export');
  },

  async importBackup(data: any, dryRun: boolean = true) {
    return request<any>(`/admin/backup/import?dry_run=${dryRun}`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  // Public Endpoints
  async getPublicPosts(params: { category?: string; q?: string; page?: number; limit?: number } = {}) {
    const query = new URLSearchParams();
    if (params.category) query.set('category', params.category);
    if (params.q) query.set('q', params.q);
    if (params.page) query.set('page', String(params.page));
    if (params.limit) query.set('limit', String(params.limit));
    return request<{ posts: PostEntity[]; pagination: any }>(`/public/posts?${query.toString()}`);
  },

  async getPublicPostBySlug(slug: string) {
    return request<{ post: PostEntity; relatedPosts: PostEntity[] }>(`/public/posts/${slug}`);
  },

  async getPreviewPost(id: number, token?: string) {
    return request<{ post: PostEntity; isPreview: boolean }>(`/public/preview/${id}${token ? `?token=${token}` : ''}`);
  },

  async getPublicCategories() {
    return request<CategoryEntity[]>('/public/categories');
  }
};
