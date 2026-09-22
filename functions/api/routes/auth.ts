import { Hono } from 'hono';
import { verifyPassword, generateToken, verifyToken } from '../utils/security';

export const authRoutes = new Hono<{ Bindings: { DB: D1Database } }>();

// GET /api/auth/me
authRoutes.get('/me', async (c) => {
  const authHeader = c.req.header('Authorization');
  let token = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;

  if (!token) {
    // Try cookie
    const cookie = c.req.header('Cookie');
    if (cookie) {
      const match = cookie.match(/lm_session=([^;]+)/);
      if (match) token = match[1];
    }
  }

  if (!token) {
    return c.json({ success: false, error: { code: 'UNAUTHORIZED', message: 'Chưa đăng nhập' } }, 401);
  }

  const payload = await verifyToken(token);
  if (!payload) {
    return c.json({ success: false, error: { code: 'INVALID_TOKEN', message: 'Phiên làm việc hết hạn' } }, 401);
  }

  const user = await c.env.DB.prepare(
    'SELECT id, uuid, username, email, role, name, avatar FROM cms_users WHERE id = ?'
  ).bind(payload.uid).first();

  if (!user) {
    return c.json({ success: false, error: { code: 'USER_NOT_FOUND', message: 'Tài khoản không tồn tại' } }, 404);
  }

  return c.json({ success: true, data: user });
});

// POST /api/auth/login
authRoutes.post('/login', async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || !body.username || !body.password) {
    return c.json({ success: false, error: { code: 'BAD_REQUEST', message: 'Vui lòng nhập tên đăng nhập và mật khẩu' } }, 400);
  }

  const { username, password } = body;
  const user: any = await c.env.DB.prepare(
    'SELECT id, uuid, username, email, password_hash, role, name, avatar FROM cms_users WHERE username = ? OR email = ?'
  ).bind(username, username).first();

  if (!user) {
    return c.json({ success: false, error: { code: 'INVALID_CREDENTIALS', message: 'Tên đăng nhập hoặc mật khẩu không chính xác' } }, 401);
  }

  const isMatch = await verifyPassword(password, user.password_hash);
  if (!isMatch) {
    return c.json({ success: false, error: { code: 'INVALID_CREDENTIALS', message: 'Tên đăng nhập hoặc mật khẩu không chính xác' } }, 401);
  }

  const token = await generateToken(user.id, user.username);

  // Set HttpOnly session cookie
  c.header('Set-Cookie', `lm_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7 * 24 * 3600}`);

  return c.json({
    success: true,
    data: {
      token,
      user: {
        id: user.id,
        uuid: user.uuid,
        username: user.username,
        email: user.email,
        role: user.role,
        name: user.name,
        avatar: user.avatar
      }
    }
  });
});

// POST /api/auth/logout
authRoutes.post('/logout', (c) => {
  c.header('Set-Cookie', 'lm_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0');
  return c.json({ success: true, data: { message: 'Đăng xuất thành công' } });
});
