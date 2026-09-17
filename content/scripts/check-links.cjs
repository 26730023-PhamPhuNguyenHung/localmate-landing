const fs = require('fs');
const path = require('path');

function auditLinkGraph() {
  const articlesDir = path.resolve('content/articles');
  if (!fs.existsSync(articlesDir)) {
    console.log('No articles found in content/articles.');
    return;
  }

  const subdirs = fs.readdirSync(articlesDir).filter(f => fs.statSync(path.join(articlesDir, f)).isDirectory());
  console.log(`\n🔗 AUDITING INTERNAL LINK GRAPH FOR ${subdirs.length} ARTICLES IN content/articles/\n`);

  const graph = {};
  const inDegree = {};
  const validSlugs = new Set(subdirs);

  // Initialize
  for (const slug of subdirs) {
    graph[slug] = [];
    inDegree[slug] = 0;
  }

  // Scan links
  for (const slug of subdirs) {
    const draftPath = path.join(articlesDir, slug, 'draft.md');
    if (!fs.existsSync(draftPath)) continue;

    const content = fs.readFileSync(draftPath, 'utf-8');
    const linkMatches = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];

    for (const linkStr of linkMatches) {
      const m = linkStr.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (!m) continue;
      const url = m[2].trim();

      // Check kien-thuc internal link
      const articleMatch = url.match(/\/kien-thuc\/([a-zA-Z0-9_-]+)/);
      if (articleMatch) {
        const targetSlug = articleMatch[1];
        graph[slug].push(targetSlug);
        if (inDegree[targetSlug] !== undefined) {
          inDegree[targetSlug]++;
        }
      }
    }
  }

  console.log('--- LINK MATRIX ---');
  for (const slug of subdirs) {
    console.log(`[${slug}] -> Outgoing: ${graph[slug].length} | Incoming: ${inDegree[slug] || 0}`);
  }

  const orphans = subdirs.filter(s => inDegree[s] === 0);
  if (orphans.length > 0 && subdirs.length > 1) {
    console.log('\n⚠️ ORPHAN ARTICLES DETECTED (0 incoming links):');
    orphans.forEach(s => console.log(`   - ${s}`));
  } else {
    console.log('\n✅ No orphan articles detected.');
  }
}

if (require.main === module) {
  auditLinkGraph();
}

module.exports = { auditLinkGraph };
