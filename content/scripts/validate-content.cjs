const fs = require('fs');
const path = require('path');

// Simple YAML frontmatter parser
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: null, body: content };
  }
  const rawYaml = match[1];
  const body = match[2];
  const frontmatter = {};

  rawYaml.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx > -1) {
      const key = trimmed.slice(0, colonIdx).trim();
      let val = trimmed.slice(colonIdx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      frontmatter[key] = val;
    }
  });

  return { frontmatter, rawYaml, body };
}

// Quality Gate Validator
function validateArticle(articleDir) {
  const results = {
    slug: path.basename(articleDir),
    articleDir,
    passed: false,
    score: 100,
    errors: [],
    warnings: [],
    stats: {
      wordCount: 0,
      h1Count: 0,
      h2Count: 0,
      tableCount: 0,
      faqCount: 0,
      internalLinksCount: 0
    }
  };

  const draftPath = path.join(articleDir, 'draft.md');
  if (!fs.existsSync(draftPath)) {
    results.errors.push(`File draft.md does not exist at ${draftPath}`);
    results.score = 0;
    return results;
  }

  const rawContent = fs.readFileSync(draftPath, 'utf-8');
  const { frontmatter, body } = parseFrontmatter(rawContent);

  // 1. Metadata Validation
  if (!frontmatter) {
    results.errors.push('Missing YAML frontmatter block (bounded by ---)');
    results.score -= 40;
  } else {
    const requiredKeys = ['title', 'slug', 'description', 'primary_keyword', 'category', 'author'];
    for (const key of requiredKeys) {
      if (!frontmatter[key]) {
        results.errors.push(`Missing required frontmatter key: ${key}`);
        results.score -= 10;
      }
    }

    if (frontmatter.title && (frontmatter.title.length < 30 || frontmatter.title.length > 100)) {
      results.warnings.push(`Title length (${frontmatter.title.length}) should ideally be between 40-70 chars`);
      results.score -= 3;
    }

    if (frontmatter.description && (frontmatter.description.length < 100 || frontmatter.description.length > 180)) {
      results.warnings.push(`Description length (${frontmatter.description.length}) should be between 120-165 chars`);
      results.score -= 3;
    }
  }

  // 2. Forbidden Clichés & Placeholders (Anti-AI Slop) - STRICT KNOCKOUT
  const forbiddenPatterns = [
    { pattern: /đang được biên tập/i, desc: 'Placeholder "đang được biên tập"' },
    { pattern: /chúng tôi sẽ cập nhật/i, desc: 'Placeholder "chúng tôi sẽ cập nhật"' },
    { pattern: /nội dung chi tiết cho mục/i, desc: 'Placeholder template "nội dung chi tiết cho mục"' },
    { pattern: /trong thời đại (công nghệ )?số/i, desc: 'AI Cliché "trong thời đại số"' },
    { pattern: /hãy cùng (chúng tôi )?tìm hiểu/i, desc: 'AI Cliché "hãy cùng tìm hiểu"' },
    { pattern: /ở phần tiếp theo/i, desc: 'AI Cliché "ở phần tiếp theo"' },
    { pattern: /placeholder/i, desc: 'Explicit word "placeholder"' },
    { pattern: /lorem ipsum/i, desc: 'Lorem Ipsum dummy text' },
    { pattern: /đóng vai trò vô cùng quan trọng/i, desc: 'AI Cliché "đóng vai trò vô cùng quan trọng"' }
  ];

  for (const item of forbiddenPatterns) {
    if (item.pattern.test(body)) {
      results.errors.push(`FORBIDDEN PATTERN DETECTED: ${item.desc}`);
      results.score -= 35;
    }
  }

  // 3. Structural Heading Hierarchy
  const h1Matches = body.match(/^# [^\n]+/gm) || [];
  results.stats.h1Count = h1Matches.length;
  if (h1Matches.length !== 1) {
    results.errors.push(`Must have exactly 1 H1 heading (found ${h1Matches.length})`);
    results.score -= 20;
  }

  const h2Matches = body.match(/^## [^\n]+/gm) || [];
  results.stats.h2Count = h2Matches.length;
  if (h2Matches.length < 3) {
    results.errors.push(`Must have at least 3 H2 headings (found ${h2Matches.length})`);
    results.score -= 20;
  }

  // 4. Word Count & Substance
  const words = body.replace(/<[^>]+>/g, ' ').replace(/[#*`_>|\[\]\(\)]/g, ' ').trim().split(/\s+/).filter(Boolean);
  results.stats.wordCount = words.length;
  if (words.length < 800) {
    results.errors.push(`Article too thin: ${words.length} words (minimum 800 words required)`);
    results.score -= 30;
  } else if (words.length < 1200) {
    results.warnings.push(`Article is relatively short (${words.length} words). Consider adding practical depth.`);
    results.score -= 5;
  }

  // 5. Answer First / TL;DR Check
  const hasAnswerFirst = /TL;DR|Answer First|tldr|Tóm tắt nhanh/i.test(body.slice(0, 1000));
  if (!hasAnswerFirst) {
    results.warnings.push('Missing TL;DR or Answer-First block in the first 1000 characters');
    results.score -= 10;
  }

  // 6. Comparative Tables
  const tableMatches = body.match(/\|[\s-:]+\|[\s-:]+\|/g) || [];
  results.stats.tableCount = tableMatches.length;
  if (tableMatches.length === 0) {
    results.warnings.push('No comparative Markdown tables found. Tables provide high Information Gain for readers & LLMs.');
    results.score -= 8;
  }

  // 7. Internal Links & Bad Anchors
  const linkMatches = body.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];
  const badAnchors = [/tại đây/i, /bấm vào đây/i, /click here/i, /xem thêm/i, /đọc thêm/i];
  let internalCount = 0;

  for (const linkStr of linkMatches) {
    const m = linkStr.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (!m) continue;
    const anchor = m[1].trim();
    const url = m[2].trim();

    if (url.startsWith('/') || url.includes('localmate.vn')) {
      internalCount++;
      for (const bad of badAnchors) {
        if (bad.test(anchor)) {
          results.warnings.push(`Vague anchor text "${anchor}" for URL: ${url}. Use descriptive keywords.`);
          results.score -= 4;
        }
      }
    }
  }
  results.stats.internalLinksCount = internalCount;
  if (internalCount < 2) {
    results.warnings.push(`Low internal links count (${internalCount}). Expected at least 2 internal links.`);
    results.score -= 5;
  }

  // 8. FAQ Section
  const hasFaq = /##.*(FAQ|câu hỏi thường gặp|thắc mắc)/i.test(body);
  if (!hasFaq) {
    results.warnings.push('No FAQ section found. FAQs are recommended for Google FAQPage Schema and AI retrieval.');
    results.score -= 5;
  }

  // Pass or Fail
  results.score = Math.max(0, results.score);
  results.passed = results.errors.length === 0 && results.score >= 80;

  return results;
}

// CLI Execution
if (require.main === module) {
  const targetDir = process.argv[2] || 'content/articles/website-doanh-nghiep-la-gi';
  const fullPath = path.resolve(targetDir);

  if (!fs.existsSync(fullPath)) {
    console.error(`Error: Directory not found: ${fullPath}`);
    process.exit(1);
  }

  console.log(`\n🔍 AUDITING QUALITY GATE FOR: ${fullPath}`);
  console.log('='.repeat(70));

  const result = validateArticle(fullPath);

  console.log(`Slug: ${result.slug}`);
  console.log(`Word count: ${result.stats.wordCount} words`);
  console.log(`Headings: H1 = ${result.stats.h1Count}, H2 = ${result.stats.h2Count}`);
  console.log(`Tables: ${result.stats.tableCount}`);
  console.log(`Internal Links: ${result.stats.internalLinksCount}`);
  console.log(`Quality Score: ${result.score}/100`);

  if (result.errors.length > 0) {
    console.log('\n❌ BLOCKING ERRORS (Must fix before CMS import):');
    result.errors.forEach((e, i) => console.log(`   ${i + 1}. ${e}`));
  }

  if (result.warnings.length > 0) {
    console.log('\n⚠️ WARNINGS (Should improve):');
    result.warnings.forEach((w, i) => console.log(`   ${i + 1}. ${w}`));
  }

  console.log('='.repeat(70));
  if (result.passed) {
    console.log('✅ QUALITY GATE PASSED! Ready for CMS import.\n');
    process.exit(0);
  } else {
    console.error('⛔ QUALITY GATE FAILED! Fix blocking errors before proceeding.\n');
    process.exit(1);
  }
}

module.exports = { validateArticle, parseFrontmatter };
