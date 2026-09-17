const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { validateArticle, parseFrontmatter } = require('./validate-content.cjs');

// Convert Markdown to clean semantic HTML
function markdownToHtml(md) {
  let html = md;

  // Escape special chars
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Restore intentional blockquotes and formatting
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^&gt; (.*$)/gim, '<blockquote><p>$1</p></blockquote>');

  // Bold / Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Markdown Tables
  const lines = html.split('\n');
  let inTable = false;
  let tableRows = [];
  let outputLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      if (line.includes('---')) continue; // skip separator row
      const cells = line.split('|').map(c => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      if (!inTable) {
        inTable = true;
        tableRows = [`<tr>${cells.map(c => `<th>${c}</th>`).join('')}</tr>`];
      } else {
        tableRows.push(`<tr>${cells.map(c => `<td>${c}</td>`).join('')}</tr>`);
      }
    } else {
      if (inTable) {
        outputLines.push(`<div class="table-responsive"><table class="w-full text-left border-collapse border border-slate-200">${tableRows.join('')}</table></div>`);
        inTable = false;
        tableRows = [];
      }
      outputLines.push(line);
    }
  }
  if (inTable) {
    outputLines.push(`<div class="table-responsive"><table class="w-full text-left border-collapse border border-slate-200">${tableRows.join('')}</table></div>`);
  }

  html = outputLines.join('\n');

  // Unordered list
  html = html.replace(/^\s*-\s+\[ \]\s+(.*$)/gim, '<li class="checklist-item"><input type="checkbox" disabled /> <span>$1</span></li>');
  html = html.replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>');

  // Paragraphs
  const paragraphs = html.split(/\n\s*\n/);
  html = paragraphs.map(p => {
    const trimmed = p.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<h1') || trimmed.startsWith('<h2') || trimmed.startsWith('<h3') ||
        trimmed.startsWith('<blockquote') || trimmed.startsWith('<div') || trimmed.startsWith('<li') ||
        trimmed.startsWith('<table')) {
      return trimmed;
    }
    return `<p>${trimmed}</p>`;
  }).filter(Boolean).join('\n\n');

  return html;
}

// Extract FAQ items from body
function extractFaq(body) {
  const faqs = [];
  const faqSectionMatch = body.match(/##.*(FAQ|câu hỏi thường gặp|thắc mắc)[\s\S]*$/i);
  if (!faqSectionMatch) return faqs;

  const faqText = faqSectionMatch[0];
  const questionMatches = [...faqText.matchAll(/###\s+([^\n\?]+\??)/g)];

  for (let i = 0; i < questionMatches.length; i++) {
    const q = questionMatches[i][1].trim();
    const startIdx = questionMatches[i].index + questionMatches[i][0].length;
    const endIdx = (i + 1 < questionMatches.length) ? questionMatches[i + 1].index : faqText.length;
    const answer = faqText.slice(startIdx, endIdx).replace(/---[\s\S]*$/, '').trim();

    if (q && answer) {
      faqs.push({
        question: q,
        answer: answer.replace(/[#*`_]/g, '').trim()
      });
    }
  }

  return faqs;
}

// Main Import Function
function importMarkdownToCms(articleDir, options = { syncD1: false }) {
  const fullDir = path.resolve(articleDir);
  console.log(`\n📦 PROCESSING ARTICLE PIPELINE: ${fullDir}`);

  // 1. RUN QUALITY GATE FIRST
  const validation = validateArticle(fullDir);
  if (!validation.passed) {
    console.error(`❌ REJECTED BY QUALITY GATE (Score: ${validation.score}/100)`);
    validation.errors.forEach((e, i) => console.error(`   ${i + 1}. ${e}`));
    throw new Error('Article did not pass Quality Gate. Import aborted.');
  }

  console.log(`✅ Quality Gate Passed! Score: ${validation.score}/100`);

  // 2. Parse Markdown and Extract Data
  const draftPath = path.join(fullDir, 'draft.md');
  const rawContent = fs.readFileSync(draftPath, 'utf-8');
  const { frontmatter, body } = parseFrontmatter(rawContent);

  const renderedHtml = markdownToHtml(body);
  const faqs = extractFaq(body);

  const articleJson = {
    title: frontmatter.title,
    slug: frontmatter.slug,
    category: frontmatter.category || 'Website',
    category_slug: frontmatter.category_slug || 'website',
    author: frontmatter.author || 'LocalMate Team',
    author_id: parseInt(frontmatter.author_id, 10) || 1,
    reading_time: frontmatter.reading_time || '10 phút đọc',
    word_count: validation.stats.wordCount,
    featured_image: frontmatter.featured_image || '/assets/hero.webp',
    featured_image_alt: frontmatter.featured_image_alt || frontmatter.title,
    lifecycle_status: frontmatter.lifecycle_status || 'publish_ready', // NEVER set published directly
    seo: {
      title: frontmatter.title,
      description: frontmatter.description,
      primary_keyword: frontmatter.primary_keyword,
      canonical_url: frontmatter.canonical || `https://localmate.vn/kien-thuc/${frontmatter.slug}`,
      robots: frontmatter.robots || 'index,follow'
    },
    provenance: {
      content_version: parseInt(frontmatter.content_version, 10) || 1,
      created_by: frontmatter.created_by || 'writer-agent',
      validated_at: new Date().toISOString(),
      quality_score: validation.score
    },
    faqs,
    content: {
      format: 'markdown_and_html',
      raw_markdown: body,
      rendered_html: renderedHtml
    }
  };

  // 3. Write structured article.json
  const jsonPath = path.join(fullDir, 'article.json');
  fs.writeFileSync(jsonPath, JSON.stringify(articleJson, null, 2), 'utf-8');
  console.log(`📄 Generated structured CMS file: ${jsonPath}`);

  // 4. Update seeds file: content/seeds/drafts_30_articles.json
  const seedsFile = path.resolve('content/seeds/drafts_30_articles.json');
  if (fs.existsSync(seedsFile)) {
    const seeds = JSON.parse(fs.readFileSync(seedsFile, 'utf-8'));
    const targetIdx = seeds.findIndex(p => p.slug === frontmatter.slug || (frontmatter.post_id && p.id === parseInt(frontmatter.post_id, 10)));
    if (targetIdx !== -1) {
      seeds[targetIdx].title = articleJson.title;
      seeds[targetIdx].slug = articleJson.slug;
      seeds[targetIdx].seo_title = articleJson.seo.title;
      seeds[targetIdx].seo_description = articleJson.seo.description;
      seeds[targetIdx].focus_keyword = articleJson.seo.primary_keyword;
      seeds[targetIdx].canonical_url = articleJson.seo.canonical_url;
      seeds[targetIdx].word_count = articleJson.word_count;
      seeds[targetIdx].reading_time = articleJson.reading_time;
      seeds[targetIdx].rendered_html = articleJson.content.rendered_html;
      seeds[targetIdx].status = 'draft'; // Strictly draft until human review in CMS
      fs.writeFileSync(seedsFile, JSON.stringify(seeds, null, 2), 'utf-8');
      console.log(`🔄 Synced into seeds file: ${seedsFile}`);
    }
  }

  // 5. Optional sync into local SQLite D1
  if (options.syncD1) {
    console.log('⚡ Syncing into Local Cloudflare D1...');
    const escapeSql = (str) => str ? `'${String(str).replace(/'/g, "''")}'` : 'NULL';
    const sql = `UPDATE cms_posts SET 
      title = ${escapeSql(articleJson.title)},
      seo_title = ${escapeSql(articleJson.seo.title)},
      seo_description = ${escapeSql(articleJson.seo.description)},
      focus_keyword = ${escapeSql(articleJson.seo.primary_keyword)},
      rendered_html = ${escapeSql(articleJson.content.rendered_html)},
      word_count = ${articleJson.word_count},
      status = 'draft',
      updated_at = datetime('now')
    WHERE slug = ${escapeSql(articleJson.slug)} OR id = 1;`;

    const tmpSql = path.resolve('content/scripts/tmp_sync.sql');
    fs.writeFileSync(tmpSql, sql, 'utf-8');
    try {
      execSync(`npx wrangler d1 execute localmate_survey_db --local --file="${tmpSql}"`, { stdio: 'inherit' });
      console.log('✅ Successfully updated local D1 database!');
    } finally {
      if (fs.existsSync(tmpSql)) fs.unlinkSync(tmpSql);
    }
  }

  console.log('🚀 PIPELINE COMPLETE! Article is ready in CMS as DRAFT for human sign-off.\n');
  return articleJson;
}

if (require.main === module) {
  const targetDir = process.argv[2] || 'content/articles/website-doanh-nghiep-la-gi';
  const shouldSyncD1 = process.argv.includes('--sync-d1');
  try {
    importMarkdownToCms(targetDir, { syncD1: shouldSyncD1 });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = { importMarkdownToCms, markdownToHtml };
