const fs = require('fs');
const path = require('path');

function generateSchemas(articleJsonPath) {
  const fullPath = path.resolve(articleJsonPath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }

  const data = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));

  // 1. Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': data.seo.title,
    'description': data.seo.description,
    'inLanguage': 'vi-VN',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': data.seo.canonical_url
    },
    'image': [
      data.featured_image.startsWith('http') ? data.featured_image : `https://localmate.vn${data.featured_image}`
    ],
    'author': {
      '@type': 'Organization',
      'name': data.author || 'LocalMate Team',
      'url': 'https://localmate.vn'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CÔNG TY TNHH LOCALMATE',
      'url': 'https://localmate.vn',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://localmate.vn/logo.png'
      }
    }
  };

  // 2. BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Trang chủ',
        'item': 'https://localmate.vn'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Kiến thức',
        'item': 'https://localmate.vn/kien-thuc'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': data.title,
        'item': data.seo.canonical_url
      }
    ]
  };

  // 3. FAQPage Schema
  let faqSchema = null;
  if (data.faqs && data.faqs.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': data.faqs.map(item => ({
        '@type': 'Question',
        'name': item.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.answer
        }
      }))
    };
  }

  const fullGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      articleSchema,
      breadcrumbSchema,
      ...(faqSchema ? [faqSchema] : [])
    ]
  };

  return fullGraph;
}

if (require.main === module) {
  const targetPath = process.argv[2] || 'content/articles/website-doanh-nghiep-la-gi/article.json';
  try {
    const graph = generateSchemas(targetPath);
    console.log(JSON.stringify(graph, null, 2));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = { generateSchemas };
