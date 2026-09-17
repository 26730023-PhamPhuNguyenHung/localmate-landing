import os
import sys
import json
from playwright.sync_api import sync_playwright

# Đảm bảo UTF-8 cho Windows console
sys.stdout.reconfigure(encoding='utf-8')

os.makedirs('artifacts/screenshots', exist_ok=True)

viewports = [
    {'w': 1920, 'h': 1080, 'name': '1920x1080_desktop_fhd'},
    {'w': 1440, 'h': 900,  'name': '1440x900_desktop_hd_plus'},
    {'w': 1366, 'h': 768,  'name': '1366x768_laptop_std'},
    {'w': 1024, 'h': 768,  'name': '1024x768_tablet_landscape'},
    {'w': 768,  'h': 1024, 'name': '768x1024_tablet_portrait'},
    {'w': 390,  'h': 844,  'name': '390x844_mobile_iphone'}
]

results = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:3000', wait_until='networkidle')
    page.wait_for_selector('.localmate-footer')

    for vp in viewports:
        page.set_viewport_size({'width': vp['w'], 'height': vp['h']})
        page.wait_for_timeout(300)
        
        # Cuộn xuống footer
        footer_el = page.locator('.localmate-footer')
        footer_el.scroll_into_view_if_needed()
        page.wait_for_timeout(200)

        rect = footer_el.bounding_box()
        doc_scroll_width = page.evaluate('document.documentElement.scrollWidth')
        window_inner_width = page.evaluate('window.innerWidth')
        overflow = doc_scroll_width > window_inner_width

        data = {
            'viewport': f"{vp['w']}x{vp['h']}",
            'name': vp['name'],
            'footer_height': round(rect['height']) if rect else 0,
            'footer_width': round(rect['width']) if rect else 0,
            'scroll_width': doc_scroll_width,
            'inner_width': window_inner_width,
            'has_overflow': overflow
        }
        results.append(data)

        # Chụp screenshot 2 viewports quan trọng nhất: 1366x768 và 390x844
        if vp['w'] in (1366, 390):
            footer_el.screenshot(path=f"artifacts/screenshots/footer_{vp['name']}.png")

    # Đọc cấu trúc chi tiết
    columns_info = page.evaluate('''() => {
        const f = document.querySelector('.localmate-footer');
        return {
            headings: Array.from(f.querySelectorAll('.footer-col-title')).map(h => h.textContent.trim()),
            links: Array.from(f.querySelectorAll('a')).map(a => ({
                text: a.textContent.trim(),
                href: a.getAttribute('href')
            })),
            ctaText: f.querySelector('.footer-cta-btn')?.textContent?.trim(),
            copyright: f.querySelector('.footer-copyright')?.textContent?.trim(),
            brandDesc: f.querySelector('.footer-brand-desc')?.textContent?.trim(),
            brandLocation: f.querySelector('.footer-brand-location')?.textContent?.trim()
        };
    }''')

    browser.close()

print('=== AUDIT RESULTS ===')
print(json.dumps(results, indent=2))
print('=== FOOTER DOM STRUCTURE ===')
print(json.dumps(columns_info, indent=2, ensure_ascii=False))
