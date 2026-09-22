# LocalMate homepage reference rebuild — 2026-09-22

## Implementation

- `/`, `/cach-lam-viec`, `/quy-trinh` render `src/pages/HomeReferencePage.tsx`.
- Styles are scoped under `.lm-home` in `src/styles/homepage.css`; other routes retain their existing layout.
- Service, industry and process content lives in `src/data/homepageContent.ts`.
- All headings, handwritten notes, service labels, cards, menus and forms are editable HTML. Fonts are self-hosted; licenses are under `public/fonts/`.
- Original source files were preserved. Pre-task copies of App/HomePage are in `artifacts/home-rebuild-before/`.
- The five references are the supplied `ChatGPT Image 10_07_07…10_07_10 17 thg 9, 2026 (1)…(5).png` files. Layout follows their order: hero, services, industry examples, process, contact/footer.

## Generated artwork

Used the built-in **image_gen** tool. No supplied screenshot crops are used by the rebuilt homepage. The existing standalone `/logo.webp` remains the brand logo.

Final assets: `public/images/home/` (15 WebP images, approximately 1.25 MB total). Full PNG originals: `artifacts/home-generated-originals/`. Generation source mapping: `artifacts/home-assets.json`.

### Final prompt set

For each individual service/process image, the generation prompt was:

> Create ONE standalone small website illustration, landscape 3:2. Subject: [subject below]. Premium soft sculptural 3D clay and watercolor mixed illustration. Emerald teal mint cream palette, realistic soft daylight shadows, pale mint organic rounded backing, pure white outer background. Single centered group occupies 80 percent of canvas, entire subject fully visible with clean whitespace all sides. Match warm Vietnamese local-business website art direction. No text, no lettering, no watermark, no card border. Not a screenshot. This is an individual production asset.

| File | Subject |
|---|---|
| service-web.webp | a green website browser window with picture block and rows, two small botanical leaves |
| service-maps.webp | a red location pin standing on a folded green blue cream map, small leaves |
| service-ads.webp | the familiar blue yellow green Google Ads shaped sculptural symbol with an upward green arrow and leaves |
| service-content.webp | a cream white content document with green lines and small picture block, a green pencil leaning beside it, leaves |
| service-crm.webp | three green customer silhouettes with a green cog and two circular arrows, small leaves |
| step-chat.webp | two overlapping dimensional chat bubbles, one emerald green one white, three dots in each, delicate leaves |
| step-plan.webp | a tilted white browser panel with four rows, each row has a small colored website/map/ads/document icon and pale mint abstract lines, green cursor at bottom right |
| step-build.webp | a white website browser with green image block and gray abstract lines, overlapping smaller white card with three emerald check circles and pale blank lines, mint leaves |
| step-support.webp | a friendly smiling teal map-pin mascot wearing a dark green customer support headset, a white speech bubble with tiny green heart, and white checklist panel with three green check circles and gray blank lines |

The four industry assets use supplied reference (3) as **style guidance only**, with the following shared prompt:

> Create ONE new original standalone 4:3 landscape illustration for a website industry card. Reference screenshot is style guidance ONLY, do not crop it or reproduce the cards. [Scene below] Premium highly detailed soft 3D watercolor illustration, emerald greens cream and warm sunshine, same art direction as reference. Scene fills image edge to edge, entire foreground devices fit within canvas, no surrounding white margin, no heading no body text no card border no watermarks.

| File | Scene |
|---|---|
| story-cafe.webp | A charming Vietnamese cafe, cream facade, deep emerald striped awning, lush potted plants, golden cafe light. In foreground laptop with beautiful cafe photo website and smartphone showing a map pin. No text. |
| story-stay.webp | An inviting wood bungalow beside a turquoise lake and Vietnamese green mountains, yellow flowering plants. Foreground laptop showing travel photography and smartphone with booking layout. A few blank wooden directional signs on the right. No text. |
| story-repair.webp | A clean white home repair service van on a sunny Vietnamese residential street, pastel cream homes and trees. Large smartphone foreground right showing clean blue service page with green call icons, no text. No laptop. |
| story-shop.webp | A charming warm beige Vietnamese boutique with green plants and handmade homewares, wood shop sign left blank. Smartphone foreground left showing clean customer management interface as colored person icons and blank rows. No text. |

`hero.webp`, using reference (1):

> Create a NEW original raster illustration asset for the right half of this LocalMate website hero, using the supplied image ONLY as style and composition reference. Not a website screenshot, do not crop the reference. Landscape 4:3. Premium soft realistic 3D mixed watercolor illustration, emerald green, pale mint, warm cream, Vietnamese local flower shop with striped green awning and lush plants in background. Foreground large dark laptop angled slightly clockwise showing a clean green white website with cafe photography, smartphone in front left displaying a local cafe map listing. Blank small floating white rounded chips around devices (no text, we will overlay real HTML labels). Laptop occupies lower center, phone lower left, shop right. Soft daylight, beautiful detailed leaves, subtle distant Hoi An streets. Edges and left third fade naturally to near-white #f6fbf9. NO headings, no typography, no text, no logo, no watermarks, no framing border. Keep entire devices in frame, intended to integrate with live HTML.

`street.webp`, using reference (5):

> Generate NEW original production illustration asset, supplied website screenshot is STYLE REFERENCE ONLY. Never crop or reproduce website UI. A wide 16:9 very airy Vietnamese Hoi An neighborhood backdrop for a live website. 75 percent LEFT and CENTER is nearly white pale mint empty negative space. Far RIGHT quarter a beautiful warm cream flower shop with green striped awning, potted orange flowers, lush foliage and a blank dark chalkboard. Faint distant architecture along bottom. Soft daylight, realistic 3D watercolor storybook style exactly like reference. Leaves peek in far left edge and bottom corners. No typography no text no UI no cards no devices. Fade naturally to almost white at top and center. Emerald teal green, soft cream, delicate natural shadows, premium detailed illustration. Save as street illustration.

Two preliminary strip concepts were discarded; production uses individually generated images. PNG-to-WebP conversion only resizes/encodes, without cropping.

## Verification

Run `node scripts/verify-home-reference.mjs` with the development server at port 3000 (or set `QA_URL`). Requires the installed `agent-browser` CLI.

- Viewports: 320, 390, 768, 1093, 1366 and 1672px.
- No horizontal page overflow or broken images in the tested viewports.
- Mobile navigation, Escape dismissal, all five service dialogs, required fields and invalid phone checks.
- Simulated failed network delivery retains form values and displays an error; simulated successful delivery clears the form.
- Screenshots and machine-readable report: `artifacts/home-reference-qa/`.
- Desktop comparison passes corrected typography, centered descriptions, illustration proportions, card spacing, footer density and handwritten text. Tablet hero is stacked so the devices remain visible.
- Existing knowledge, privacy and GEO routes were opened and their headings verified.

The illustrations are new interpretations, so they are not pixel-identical to the references. Industry illustrations do not represent verified client projects.

## Delivery boundary

The existing lead integration uses an opaque `no-cors` Google Apps Script response. UI tests intercept requests; no QA lead is sent to the live business endpoint. Network completion does **not** verify a Google Sheets write. The homepage message therefore only acknowledges network submission. Live persistence and production deployment are outside this visual rebuild's verified results.

On this Windows machine, adding a font caused Vite's native watcher to stop with `EBUSY`. For the preview session it was restarted with `CHOKIDAR_USEPOLLING=true`; no project-wide polling change was introduced.
