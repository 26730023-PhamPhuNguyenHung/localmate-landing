// Vietnamese slugify and collision resolution

export function slugify(text: string): string {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // separate accents from letters
    .replace(/[\u0300-\u036f]/g, '') // remove accent markers
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric chars
    .replace(/[\s_]+/g, '-') // replace spaces and underscores with -
    .replace(/-+/g, '-') // collapse multiple dashes
    .replace(/^-+|-+$/g, ''); // trim leading/trailing dashes
}

export async function generateUniqueSlug(
  db: D1Database,
  baseTitle: string,
  excludePostId?: number
): Promise<string> {
  const baseSlug = slugify(baseTitle) || 'bai-viet';
  let candidate = baseSlug;
  let counter = 1;

  while (true) {
    let query = 'SELECT id FROM cms_posts WHERE slug = ?';
    const params: any[] = [candidate];
    if (excludePostId) {
      query += ' AND id != ?';
      params.push(excludePostId);
    }

    const res = await db.prepare(query).bind(...params).first();
    if (!res) {
      return candidate;
    }
    counter++;
    candidate = `${baseSlug}-${counter}`;
  }
}
