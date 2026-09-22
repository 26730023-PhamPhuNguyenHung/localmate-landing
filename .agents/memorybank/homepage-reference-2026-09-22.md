# Homepage reference rebuild — 2026-09-22

- Active homepage: `src/pages/HomeReferencePage.tsx`, scoped `src/styles/homepage.css`, data in `src/data/homepageContent.ts`.
- App uses a dedicated header/footer only for homepage and process aliases. Preserve the old layout for other routes.
- 15 individually generated assets under `public/images/home/`; no screenshot crops. Full originals and QA evidence are in ignored `artifacts/`.
- Exact prompt set and verification boundary: `docs/homepage-reference-rebuild.md`.
- Global CSS applies a max-width to paragraphs and a 44px minimum to every link/button. Explicit scoped overrides were required for centered section descriptions, footer density and inline form privacy text.
- Use local Dancing Script for editable handwriting. Mali did not resemble the supplied cursive reference closely enough.
- React 18 needs lowercase `fetchpriority` when passed as a custom image attribute. Check the browser console, not only TypeScript.
- HTML pattern attributes use Unicode sets in current Chromium. Avoid invalid character classes; the phone pattern is `[+]?[0-9](?:[ .]?[0-9]){8,14}`.
- `submitLead` returns an opaque no-cors network result. Do not claim Sheets persistence or an exact response-time SLA. Automated QA intercepts outbound submissions.
- Windows Vite native watcher can crash with EBUSY while font files are being written. Polling was enabled only in the preview process environment.
