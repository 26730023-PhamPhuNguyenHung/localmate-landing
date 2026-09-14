#!/usr/bin/env node

/**
 * ============================================================================
 * IndexNow Submission Script for LocalMate (localmate.vn)
 * Pings Bing and IndexNow API with standard canonical URLs upon deployment.
 * ============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 1. Configuration & Key Loading
const HOST = 'localmate.vn';
const INDEXNOW_CONFIG_PATH = path.join(projectRoot, 'public', 'indexnow.json');

let key = '8c3b7a2d59144e3fae8026194b159f8e';
let keyLocation = `https://${HOST}/${key}.txt`;

if (fs.existsSync(INDEXNOW_CONFIG_PATH)) {
  try {
    const raw = JSON.parse(fs.readFileSync(INDEXNOW_CONFIG_PATH, 'utf-8'));
    if (raw.key) key = raw.key;
    if (raw.keyLocation) keyLocation = raw.keyLocation;
  } catch (err) {
    console.warn(`[WARN] Could not parse indexnow.json, using fallback key.`, err.message);
  }
}

// 2. Canonical Standard URLs (15 SSOT core pages)
const CANONICAL_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/thiet-ke-website`,
  `https://${HOST}/google-maps-local-seo`,
  `https://${HOST}/google-ads`,
  `https://${HOST}/content-marketing`,
  `https://${HOST}/automation`,
  `https://${HOST}/bang-gia`,
  `https://${HOST}/du-an`,
  `https://${HOST}/du-an/xeo-restaurant`,
  `https://${HOST}/du-an/nam-phat`,
  `https://${HOST}/du-an/huong-sen`,
  `https://${HOST}/ve-localmate`,
  `https://${HOST}/lien-he`,
  `https://${HOST}/kien-thuc`,
  `https://${HOST}/landing-490k`
];

// Target IndexNow Endpoints (Bing & IndexNow central gateway)
const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow'
];

/**
 * Submit URL payload to an IndexNow endpoint
 */
async function submitToIndexNow(endpoint, payload) {
  const endpointName = new URL(endpoint).hostname;
  console.log(`\n📡 Submitting ${payload.urlList.length} URLs to: ${endpointName}...`);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'LocalMate-IndexNow-Submitter/1.0'
      },
      body: JSON.stringify(payload)
    });

    const status = response.status;
    let text = '';
    try {
      text = await response.text();
    } catch {
      text = '';
    }

    // HTTP Status handling according to IndexNow specifications
    switch (status) {
      case 200:
        console.log(`   ✅ [${status} OK] Submitted successfully to ${endpointName}`);
        break;
      case 202:
        console.log(`   ✅ [${status} Accepted] URLs received by ${endpointName}. Key validation is in progress.`);
        break;
      case 400:
        console.error(`   ❌ [${status} Bad Request] Invalid format sent to ${endpointName}. ${text}`);
        break;
      case 403:
        console.error(`   ⚠️ [${status} Forbidden] Key not yet verified or domain mismatch on ${endpointName}. ${text}`);
        console.log(`      (Note: Normal during pre-deploy before DNS/Key file is live at ${keyLocation})`);
        break;
      case 422:
        console.error(`   ❌ [${status} Unprocessable Entity] URLs do not match the specified host on ${endpointName}. ${text}`);
        break;
      case 429:
        console.warn(`   ⏳ [${status} Too Many Requests] Rate limited by ${endpointName}.`);
        break;
      default:
        console.log(`   ℹ️ [HTTP ${status}] Response from ${endpointName}: ${text || '(empty body)'}`);
    }

    return { endpoint, status, success: status === 200 || status === 202 };
  } catch (error) {
    console.error(`   ❌ Network error connecting to ${endpointName}:`, error.message);
    return { endpoint, status: 0, error: error.message, success: false };
  }
}

/**
 * Main Execution
 */
async function main() {
  console.log(`=======================================================`);
  console.log(`🚀 LOCALMATE TECHNICAL CRAWL & INDEXNOW AUTOMATION`);
  console.log(`=======================================================`);
  console.log(`Host:        ${HOST}`);
  console.log(`Key:         ${key}`);
  console.log(`KeyLocation: ${keyLocation}`);
  console.log(`Total URLs:  ${CANONICAL_URLS.length}`);
  console.log(`URLs List:`);
  CANONICAL_URLS.forEach((u, i) => console.log(`  ${(i + 1).toString().padStart(2, ' ')}. ${u}`));

  const payload = {
    host: HOST,
    key: key,
    keyLocation: keyLocation,
    urlList: CANONICAL_URLS
  };

  const results = [];
  for (const endpoint of ENDPOINTS) {
    const res = await submitToIndexNow(endpoint, payload);
    results.push(res);
  }

  console.log(`\n=======================================================`);
  console.log(`📊 INDEXNOW SUBMISSION SUMMARY`);
  console.log(`=======================================================`);
  results.forEach(r => {
    const host = new URL(r.endpoint).hostname;
    const badge = r.success ? 'PASSED' : (r.status === 403 ? 'PENDING LIVE DEPLOY (403)' : 'CHECK');
    console.log(`- ${host.padEnd(22)}: Status ${r.status} [${badge}]`);
  });
  console.log(`=======================================================\n`);
}

main().catch(err => {
  console.error('Fatal error running IndexNow submission:', err);
  process.exit(1);
});
