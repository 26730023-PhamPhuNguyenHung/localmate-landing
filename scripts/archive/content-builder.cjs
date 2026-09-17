/**
 * content-builder.cjs
 * Tiện ích chuyển đổi nội dung có cấu trúc thành Tiptap JSON và Clean HTML
 */

function buildTiptapNode(block) {
  if (typeof block === 'string') {
    // Đoạn văn thường
    return {
      type: 'paragraph',
      content: parseInlineFormatting(block)
    };
  }

  if (block.type === 'h2') {
    return {
      type: 'heading',
      attrs: { level: 2 },
      content: [{ type: 'text', text: block.text }]
    };
  }

  if (block.type === 'h3') {
    return {
      type: 'heading',
      attrs: { level: 3 },
      content: [{ type: 'text', text: block.text }]
    };
  }

  if (block.type === 'p') {
    return {
      type: 'paragraph',
      content: parseInlineFormatting(block.text)
    };
  }

  if (block.type === 'blockquote' || block.type === 'tldr' || block.type === 'pov') {
    return {
      type: 'blockquote',
      content: [
        {
          type: 'paragraph',
          content: parseInlineFormatting(block.text)
        }
      ]
    };
  }

  if (block.type === 'hr') {
    return { type: 'horizontalRule' };
  }

  if (block.type === 'list') {
    return {
      type: 'bulletList',
      content: block.items.map(item => ({
        type: 'listItem',
        content: [
          {
            type: 'paragraph',
            content: parseInlineFormatting(item)
          }
        ]
      }))
    };
  }

  if (block.type === 'table') {
    return {
      type: 'table',
      content: [
        {
          type: 'tableRow',
          content: block.headers.map(h => ({
            type: 'tableHeader',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: h }] }]
          }))
        },
        ...block.rows.map(row => ({
          type: 'tableRow',
          content: row.map(cell => ({
            type: 'tableCell',
            content: [{ type: 'paragraph', content: parseInlineFormatting(cell) }]
          }))
        }))
      ]
    };
  }

  return {
    type: 'paragraph',
    content: [{ type: 'text', text: String(block) }]
  };
}

function parseInlineFormatting(rawText) {
  // Parse markdown-like **bold**, *italic*, and [link](url) into Tiptap text marks
  if (!rawText) return [{ type: 'text', text: '' }];
  
  const tokens = [];
  const regex = /(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(rawText)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', text: rawText.substring(lastIndex, match.index) });
    }
    const chunk = match[0];
    if (chunk.startsWith('**') && chunk.endsWith('**')) {
      tokens.push({
        type: 'text',
        text: chunk.slice(2, -2),
        marks: [{ type: 'bold' }]
      });
    } else if (chunk.startsWith('*') && chunk.endsWith('*')) {
      tokens.push({
        type: 'text',
        text: chunk.slice(1, -1),
        marks: [{ type: 'italic' }]
      });
    } else if (chunk.startsWith('[') && chunk.includes('](') && chunk.endsWith(')')) {
      const linkText = chunk.substring(1, chunk.indexOf(']('));
      const linkHref = chunk.substring(chunk.indexOf('](') + 2, chunk.length - 1);
      tokens.push({
        type: 'text',
        text: linkText,
        marks: [{ type: 'link', attrs: { href: linkHref } }]
      });
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < rawText.length) {
    tokens.push({ type: 'text', text: rawText.substring(lastIndex) });
  }

  return tokens.length > 0 ? tokens : [{ type: 'text', text: rawText }];
}

function renderTiptapToHtml(doc) {
  let html = '';
  for (const node of doc.content) {
    if (node.type === 'heading') {
      const level = node.attrs?.level || 2;
      const text = renderTextContent(node.content);
      html += `<h${level}>${text}</h${level}>\n`;
    } else if (node.type === 'paragraph') {
      const text = renderTextContent(node.content);
      html += `<p>${text}</p>\n`;
    } else if (node.type === 'blockquote') {
      let inner = '';
      for (const p of node.content || []) {
        inner += `<p>${renderTextContent(p.content)}</p>`;
      }
      html += `<blockquote>${inner}</blockquote>\n`;
    } else if (node.type === 'bulletList') {
      let items = '';
      for (const li of node.content || []) {
        let pText = '';
        for (const p of li.content || []) {
          pText += renderTextContent(p.content);
        }
        items += `<li>${pText}</li>\n`;
      }
      html += `<ul>\n${items}</ul>\n`;
    } else if (node.type === 'table') {
      let tableHtml = '<table class="min-w-full border-collapse border border-slate-200 text-sm my-4">\n';
      for (const row of node.content || []) {
        tableHtml += '  <tr>\n';
        for (const cell of row.content || []) {
          const isHeader = cell.type === 'tableHeader';
          const tag = isHeader ? 'th' : 'td';
          const css = isHeader 
            ? 'border border-slate-200 bg-slate-100 p-2 font-semibold text-slate-800 text-left'
            : 'border border-slate-200 p-2 text-slate-700';
          const cellText = cell.content?.map(p => renderTextContent(p.content)).join('<br/>') || '';
          tableHtml += `    <${tag} class="${css}">${cellText}</${tag}>\n`;
        }
        tableHtml += '  </tr>\n';
      }
      tableHtml += '</table>\n';
      html += tableHtml;
    } else if (node.type === 'horizontalRule') {
      html += `<hr />\n`;
    }
  }
  return html.trim();
}

function renderTextContent(contents) {
  if (!contents) return '';
  return contents.map(c => {
    let t = c.text || '';
    if (c.marks) {
      for (const m of c.marks) {
        if (m.type === 'bold') t = `<strong>${t}</strong>`;
        if (m.type === 'italic') t = `<em>${t}</em>`;
        if (m.type === 'link') t = `<a href="${m.attrs?.href || '#'}" class="text-emerald-700 underline font-medium">${t}</a>`;
      }
    }
    return t;
  }).join('');
}

function countWordsInDoc(doc) {
  let fullText = '';
  function extract(node) {
    if (node.text) fullText += ' ' + node.text;
    if (node.content) node.content.forEach(extract);
  }
  extract(doc);
  return fullText.trim().split(/\s+/).filter(Boolean).length;
}

module.exports = {
  buildTiptapNode,
  renderTiptapToHtml,
  countWordsInDoc
};
