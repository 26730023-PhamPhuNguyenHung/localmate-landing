import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const seedsFile = path.resolve('content/seeds/drafts_30_articles.json');
const articles = JSON.parse(fs.readFileSync(seedsFile, 'utf-8'));

// Map category slug to id in cms_categories
const categoryMap = {
  'website': 1,
  'google-maps': 2,
  'local-seo': 3,
  'google-ads': 4,
  'content': 5,
  'crm-automation': 6,
  'kinh-doanh-dia-phuong': 7
};

function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
}

let sqlStatements = ['-- Idempotent 30 Seed Draft Articles for LocalMate CMS'];

for (const post of articles) {
  const catId = categoryMap[post.category_slug] || 1;
  const sql = `INSERT OR IGNORE INTO cms_posts (
    uuid, title, slug, excerpt, content_json, rendered_html,
    status, author_id, category_id,
    seo_title, seo_description, focus_keyword, canonical_url,
    og_title, og_description, robots_index, robots_follow,
    reading_time, word_count, revision_number, brief_json
  ) VALUES (
    ${escapeSql(post.uuid)},
    ${escapeSql(post.title)},
    ${escapeSql(post.slug)},
    ${escapeSql(post.excerpt)},
    ${escapeSql(post.content_json)},
    ${escapeSql(post.rendered_html)},
    'draft',
    ${post.author_id},
    ${catId},
    ${escapeSql(post.seo_title)},
    ${escapeSql(post.seo_description)},
    ${escapeSql(post.focus_keyword)},
    ${escapeSql(post.canonical_url)},
    ${escapeSql(post.og_title)},
    ${escapeSql(post.og_description)},
    1,
    1,
    ${escapeSql(post.reading_time)},
    ${post.word_count},
    ${post.revision_number},
    ${escapeSql(post.brief_json)}
  );`;
  sqlStatements.push(sql);
}

const sqlContent = sqlStatements.join('\n\n');
const migrationPath = path.resolve('migrations/0003_seed_draft_posts.sql');
fs.writeFileSync(migrationPath, sqlContent, 'utf-8');
console.log(`Generated migration script at ${migrationPath}`);
