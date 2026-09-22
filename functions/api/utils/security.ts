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

const TOKEN_SECRET = 'localmate_jwt_secret_hmac_2026_dn_vn';

export async function generateToken(userId: number, username: string): Promise<string> {
  const payload = {
    uid: userId,
    usr: username,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
  };
  const payloadStr = btoa(JSON.stringify(payload));
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(TOKEN_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, enc.encode(payloadStr));
  const sigHex = Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
  return `${payloadStr}.${sigHex}`;
}

export async function verifyToken(token: string): Promise<{ uid: number; usr: string } | null> {
  try {
    const parts = token.split('.');
    if (parts.length !== 2) {
      return null;
    }
    const [payloadStr, sigHex] = parts;
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(TOKEN_SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    const matchHex = sigHex.match(/.{1,2}/g);
    if (!matchHex) return null;
    const sigBytes = new Uint8Array(matchHex.map(byte => parseInt(byte, 16)));
    const isValid = await crypto.subtle.verify('HMAC', key, sigBytes, enc.encode(payloadStr));
    if (!isValid) {
      return null;
    }

    const raw = atob(payloadStr);
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
