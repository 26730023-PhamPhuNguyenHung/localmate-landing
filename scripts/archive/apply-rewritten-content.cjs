/**
 * scripts/apply-rewritten-content.cjs
 * Tập hợp dữ liệu từ 6 batches và cập nhật vào content/seeds/drafts_30_articles.json
 */

const fs = require('fs');
const path = require('path');
const { buildTiptapNode, renderTiptapToHtml, countWordsInDoc } = require('./content-builder.cjs');

const { batch1Articles } = require('./batches/batch-1.cjs');
const { batch2Articles } = require('./batches/batch-2.cjs');
const { batch3Articles } = require('./batches/batch-3.cjs');
const { batch4Articles } = require('./batches/batch-4.cjs');
const { batch5Articles } = require('./batches/batch-5.cjs');
const { batch6Articles } = require('./batches/batch-6.cjs');

const allBatches = [
  ...batch1Articles,
  ...batch2Articles,
  ...batch3Articles,
  ...batch4Articles,
  ...batch5Articles,
  ...batch6Articles
];

console.log(`Loaded ${allBatches.length} rewritten articles across 6 batches.`);

const seedPath = path.resolve(__dirname, '../content/seeds/drafts_30_articles.json');
const originalData = JSON.parse(fs.readFileSync(seedPath, 'utf8'));

const updatedArticles = originalData.map((orig) => {
  const rewritten = allBatches.find(b => b.id === orig.id);
  if (!rewritten) {
    console.warn(`Article ID ${orig.id} not found in rewritten batches!`);
    return orig;
  }

  // Build Tiptap doc
  const docContent = rewritten.blocks.map(block => buildTiptapNode(block));
  const tiptapDoc = {
    type: 'doc',
    content: docContent
  };

  const renderedHtml = renderTiptapToHtml(tiptapDoc);
  const wordCount = countWordsInDoc(tiptapDoc);
  const readingTime = `${Math.max(3, Math.ceil(wordCount / 220))} phút đọc`;

  // Parse existing brief or build new
  let briefData = {};
  try {
    briefData = orig.brief_json ? JSON.parse(orig.brief_json) : {};
  } catch (e) {
    briefData = {};
  }

  const updatedBrief = {
    primary_keyword: rewritten.focus_keyword,
    secondary_keywords: briefData.secondary_keywords || [rewritten.focus_keyword + ' 2026', 'kinh nghiệm ' + rewritten.focus_keyword],
    search_intent: rewritten.search_intent,
    target_customer: rewritten.target_customer,
    content_goal: briefData.content_goal || '',
    outline: rewritten.blocks.filter(b => b.type === 'h2' || b.type === 'h3').map(b => b.text),
    primary_question: rewritten.primary_question,
    unique_angle: rewritten.unique_angle,
    pillar_id: rewritten.pillar_id,
    related_service: rewritten.related_service,
    quality_status: 'pass',
    seo_status: 'optimized',
    author: 'Kỹ thuật viên LocalMate',
    reviewed_by: 'Ban Biên Tập Kỹ Thuật LocalMate'
  };

  return {
    ...orig,
    title: rewritten.title,
    slug: rewritten.slug,
    focus_keyword: rewritten.focus_keyword,
    seo_title: `${rewritten.title} | LocalMate`,
    seo_description: rewritten.blocks.find(b => b.type === 'tldr')?.text.replace(/\*\*.*?\*\*/g, '').slice(0, 155).trim() || orig.seo_description,
    excerpt: rewritten.blocks.find(b => b.type === 'tldr')?.text.replace(/\*\*.*?\*\*/g, '').slice(0, 220).trim() || orig.excerpt,
    content_json: JSON.stringify(tiptapDoc),
    rendered_html: renderedHtml,
    word_count: wordCount,
    reading_time: readingTime,
    revision_number: (orig.revision_number || 1) + 1,
    brief_json: JSON.stringify(updatedBrief),
    status: 'draft' // Giữ nguyên trạng thái draft theo đúng quy định DoD
  };
});

fs.writeFileSync(seedPath, JSON.stringify(updatedArticles, null, 2), 'utf8');
console.log(`Successfully updated ${updatedArticles.length} articles in ${seedPath}`);

// Also update docs/drafts_30_inventory.json
const inventoryPath = path.resolve(__dirname, '../docs/drafts_30_inventory.json');
const inventoryData = updatedArticles.map(a => ({
  id: a.id,
  title: a.title,
  slug: a.slug,
  category: a.category_slug,
  focus_keyword: a.focus_keyword,
  excerpt: a.excerpt,
  outline: JSON.parse(a.brief_json).outline,
  word_count: a.word_count,
  reading_time: a.reading_time,
  quality_status: 'pass',
  seo_status: 'optimized'
}));
fs.writeFileSync(inventoryPath, JSON.stringify(inventoryData, null, 2), 'utf8');
console.log(`Updated inventory file at ${inventoryPath}`);
