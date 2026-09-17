import { Hono } from 'hono';
import { handle } from 'hono/cloudflare-pages';
import { cors } from 'hono/cors';
import { authRoutes } from './routes/auth';
import { adminPostsRoutes } from './routes/adminPosts';
import { adminTaxonomyRoutes } from './routes/adminTaxonomy';
import { adminMediaRoutes } from './routes/adminMedia';
import { adminSettingsRoutes } from './routes/adminSettings';
import { publicContentRoutes } from './routes/publicContent';
import { verifyToken } from './utils/security';

interface Env {
  DB: D1Database;
  MEDIA_BUCKET?: R2Bucket;
}

const app = new Hono<{ Bindings: Env }>().basePath('/api');

// Enable CORS
app.use('*', cors({
  origin: (origin) => origin || '*',
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization']
}));

// Global error handler
app.onError((err, c) => {
  console.error('API Error:', err);
  return c.json({
    success: false,
    error: {
      code: 'INTERNAL_ERROR',
      message: err.message || 'Đã có lỗi xảy ra trên máy chủ'
    }
  }, 500);
});

// Admin Auth Middleware (protects /api/admin/*)
app.use('/admin/*', async (c, next) => {
  // Allow OPTIONS
  if (c.req.method === 'OPTIONS') return next();

  const authHeader = c.req.header('Authorization');
  let token = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;

  if (!token) {
    const cookie = c.req.header('Cookie');
    if (cookie) {
      const match = cookie.match(/lm_session=([^;]+)/);
      if (match) token = match[1];
    }
  }

  if (!token) {
    return c.json({ success: false, error: { code: 'UNAUTHORIZED', message: 'Yêu cầu đăng nhập quản trị' } }, 401);
  }

  const payload = verifyToken(token);
  if (!payload) {
    return c.json({ success: false, error: { code: 'INVALID_TOKEN', message: 'Phiên đăng nhập không hợp lệ hoặc đã hết hạn' } }, 401);
  }

  await next();
});

// Mount Routes
app.route('/auth', authRoutes);
app.route('/admin/posts', adminPostsRoutes);
app.route('/admin', adminTaxonomyRoutes);
app.route('/admin/media', adminMediaRoutes);
app.route('/admin', adminSettingsRoutes);
app.route('/public', publicContentRoutes);

export const onRequest = handle(app);
