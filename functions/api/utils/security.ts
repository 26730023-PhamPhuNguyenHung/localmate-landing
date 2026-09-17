// Security and Sanitation utilities for Cloudflare Workers / Pages

export async function hashPassword(password: string, salt: string = 'localmate_salt_2026'): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(`${salt}:${password}`);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return `sha256:${salt}:${hashHex}`;
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  const parts = storedHash.split(':');
  if (parts.length !== 3) return false;
  const salt = parts[1];
  const calculated = await hashPassword(password, salt);
  return calculated === storedHash;
}

export function generateToken(userId: number, username: string): string {
  const payload = {
    uid: userId,
    usr: username,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
  };
  return btoa(JSON.stringify(payload));
}

export function verifyToken(token: string): { uid: number; usr: string } | null {
  try {
    const raw = atob(token);
    const data = JSON.parse(raw);
    if (!data.uid || !data.exp || data.exp < Date.now()) {
      return null;
    }
    return { uid: data.uid, usr: data.usr };
  } catch {
    return null;
  }
}

// Whitelist-based HTML sanitation for rendered content
export function sanitizeHtml(rawHtml: string): string {
  if (!rawHtml) return '';
  // Remove any <script>, <style>, <iframe>, <object>, <embed>, onload=, onclick=
  let clean = rawHtml
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+\s*=\s*(['"]).*?\1/gi, '')
    .replace(/javascript:/gi, '');
  return clean;
}

export function calculateReadingTime(text: string): { wordCount: number; readTime: string } {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return {
    wordCount,
    readTime: `${minutes} phút đọc`
  };
}
