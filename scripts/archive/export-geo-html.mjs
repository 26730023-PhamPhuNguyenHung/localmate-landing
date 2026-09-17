import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const server = await createServer({ server: { middlewareMode: true } });
try {
  const { GeoLandingPage } = await server.ssrLoadModule('/src/pages/GeoLandingPage.tsx');
  const markup = renderToStaticMarkup(React.createElement(GeoLandingPage));
  const css = readFileSync('src/styles/geo-landing.css', 'utf8');
  const js = readFileSync('scripts/geo-standalone.js', 'utf8');

  const htmlContent = `<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SEO ChatGPT &amp; GEO | Localmate</title><meta name="description" content="Localmate giúp doanh nghiệp tăng khả năng được ChatGPT, Gemini, Perplexity và Google AI nhắc đến."><link rel="canonical" href="https://localmate.vn/geo"><base href="/"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"><style>*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}h1,h2,h3,p{margin:0}button,input{font:inherit}${css}</style></head><body>${markup}<script>${js}</script></body></html>`;

  writeFileSync('public/landing-geo.html', htmlContent);
  mkdirSync('public/geo', { recursive: true });
  writeFileSync('public/geo/index.html', htmlContent);
  console.log('Generated public/landing-geo.html and public/geo/index.html');
} finally {
  await server.close();
}

