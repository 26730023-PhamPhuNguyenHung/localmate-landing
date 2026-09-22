# QA Interactive & Conversion Audit Script
$ErrorActionPreference = "Stop"

Write-Host "=== STARTING INTERACTIVE & CONVERSION QA AUDIT ===" -ForegroundColor Cyan

$testScript = @"
(() => {
    return {
        step: 'init',
        timestamp: new Date().toISOString()
    };
})()
"@

# 1. Test Desktop Lead Modal Flow
Write-Host "`n1. Testing Desktop Lead Modal Flow (1920x1080)..." -ForegroundColor Yellow
agent-browser open "http://localhost:3002"
agent-browser set viewport 1920 1080
Start-Sleep -Milliseconds 500

# Check header CTA button
$checkHeaderBtn = agent-browser eval "(() => { const b = document.querySelector('.header-cta-btn'); return b ? { text: b.innerText.trim(), visible: b.offsetWidth > 0 && b.offsetHeight > 0 } : null; })()"
Write-Host "Header CTA Button: $checkHeaderBtn"

# Click Header CTA
agent-browser click ".header-cta-btn"
Start-Sleep -Milliseconds 400

# Check Modal opened
$checkModalOpen = agent-browser eval "(() => {
    const overlay = document.querySelector('.lead-modal-overlay');
    const title = document.querySelector('#modal-headline');
    const card = document.querySelector('.modal-content-card');
    return {
        isOpen: !!overlay,
        title: title ? title.innerText.trim() : null,
        cardWidth: card ? card.offsetWidth : 0,
        cardHeight: card ? card.offsetHeight : 0
    };
})()"
Write-Host "Modal Open State: $checkModalOpen"
agent-browser screenshot "artifacts/screenshots/qa_modal_desktop_opened.png"

# Test Form Validation - Submit Empty Form
Write-Host "Testing validation with empty phone/name..."
agent-browser click ".btn-modal-submit"
Start-Sleep -Milliseconds 300

$checkValidation = agent-browser eval "(() => {
    const errBox = document.querySelector('.modal-error-box');
    return {
        hasError: !!errBox,
        errorText: errBox ? errBox.innerText.trim() : null
    };
})()"
Write-Host "Validation Error State: $checkValidation"

# Fill Valid Data
Write-Host "Filling test data into Lead Modal..."
agent-browser fill "#modal-lead-msg" "Tôi cần tư vấn thiết kế website landing page cho cửa hàng mới mở."
agent-browser fill "#modal-lead-name" "Nguyễn Văn QA Test"
agent-browser fill "#modal-lead-phone" "0987654321"
Start-Sleep -Milliseconds 200

# Submit Valid Form
Write-Host "Submitting valid lead form..."
agent-browser click ".btn-modal-submit"
Start-Sleep -Milliseconds 800

$checkSuccess = agent-browser eval "(() => {
    const successBox = document.querySelector('.modal-success-state');
    const successTitle = document.querySelector('.success-title');
    const zaloLink = document.querySelector('.btn-modal-zalo');
    const phoneLink = document.querySelector('.btn-modal-call');
    return {
        isSuccess: !!successBox,
        title: successTitle ? successTitle.innerText.trim() : null,
        zaloHref: zaloLink ? zaloLink.getAttribute('href') : null,
        phoneHref: phoneLink ? phoneLink.getAttribute('href') : null
    };
})()"
Write-Host "Submission Result: $checkSuccess"
agent-browser screenshot "artifacts/screenshots/qa_modal_desktop_success.png"

# Close Modal
agent-browser click ".btn-modal-close"
Start-Sleep -Milliseconds 300
$checkClosed = agent-browser eval "(() => !document.querySelector('.lead-modal-overlay'))()"
Write-Host "Modal Closed Successfully: $checkClosed"


# 2. Test Mobile Floating CTA & Mobile Modal Flow (390x844)
Write-Host "`n2. Testing Mobile Floating CTA & Modal Flow (390x844)..." -ForegroundColor Yellow
agent-browser set viewport 390 844
Start-Sleep -Milliseconds 500

$checkMobileFloating = agent-browser eval "(() => {
    const bar = document.querySelector('.mobile-floating-bar');
    if (!bar) return { hasBar: false };
    const style = window.getComputedStyle(bar);
    const btns = Array.from(bar.querySelectorAll('.floating-btn')).map(b => {
        const r = b.getBoundingClientRect();
        return {
            text: b.innerText.trim(),
            w: Math.round(r.width),
            h: Math.round(r.height),
            touchTargetPass: r.width >= 44 && r.height >= 44
        };
    });
    return {
        hasBar: true,
        display: style.display,
        position: style.position,
        buttons: btns
    };
})()"
Write-Host "Mobile Floating Bar Audit: $checkMobileFloating"
agent-browser screenshot "artifacts/screenshots/qa_mobile_floating_bar.png"

# Click Mobile Primary Floating CTA ("Kể việc cần làm")
Write-Host "Clicking mobile floating primary CTA..."
agent-browser click ".floating-btn-primary"
Start-Sleep -Milliseconds 400

$checkMobileModal = agent-browser eval "(() => {
    const overlay = document.querySelector('.lead-modal-overlay');
    const card = document.querySelector('.modal-content-card');
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const cardW = card ? card.offsetWidth : 0;
    const cardH = card ? card.offsetHeight : 0;
    const cardRect = card ? card.getBoundingClientRect() : null;
    return {
        isOpen: !!overlay,
        cardW: cardW,
        cardH: cardH,
        winW: winW,
        winH: winH,
        fitsInViewportX: cardW <= winW,
        fitsInViewportY: cardH <= winH,
        hasHorizontalOverflow: cardRect ? (cardRect.right > winW || cardRect.left < 0) : false
    };
})()"
Write-Host "Mobile Modal Fit Audit: $checkMobileModal"
agent-browser screenshot "artifacts/screenshots/qa_mobile_modal_opened.png"

# Close mobile modal
agent-browser click ".modal-close-btn"
Start-Sleep -Milliseconds 300

# 3. Test Mobile Navigation Drawer (Hamburger Menu)
Write-Host "`n3. Testing Mobile Hamburger Menu..." -ForegroundColor Yellow
$checkMenuToggle = agent-browser eval "(() => {
    const btn = document.querySelector('.menu-toggle');
    return btn ? { exists: true, w: btn.offsetWidth, h: btn.offsetHeight } : { exists: false };
})()"
Write-Host "Menu Toggle Button: $checkMenuToggle"

agent-browser click ".menu-toggle"
Start-Sleep -Milliseconds 400

$checkDrawerOpen = agent-browser eval "(() => {
    const drawer = document.querySelector('.mobile-drawer-overlay');
    const links = Array.from(document.querySelectorAll('.mobile-nav-item')).map(a => a.innerText.trim());
    return {
        isOpen: !!drawer,
        linksCount: links.length,
        links: links
    };
})()"
Write-Host "Mobile Drawer State: $checkDrawerOpen"
agent-browser screenshot "artifacts/screenshots/qa_mobile_drawer_opened.png"

# Close drawer
agent-browser click ".menu-toggle"
Start-Sleep -Milliseconds 300

# 4. Detailed Asset & Network 404 Audit
Write-Host "`n4. Checking Broken Images & Missing Assets..." -ForegroundColor Yellow
$checkBrokenAssets = agent-browser eval "(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    const brokenImgs = imgs.filter(img => !img.complete || img.naturalWidth === 0).map(img => ({
        src: img.src,
        alt: img.alt,
        loading: img.loading
    }));
    return {
        totalImages: imgs.length,
        brokenCount: brokenImgs.length,
        brokenImages: brokenImgs
    };
})()"
Write-Host "Images Health Check: $checkBrokenAssets"

# 5. Touch Target Size Audit on Mobile 390x844
Write-Host "`n5. Audit Touch Target Sizes on Mobile 390x844 (Minimum 44x44px)..." -ForegroundColor Yellow
$checkTouchTargets = agent-browser eval "(() => {
    const interactives = Array.from(document.querySelectorAll('button, a, input, select, textarea'));
    const smallTargets = interactives.filter(el => {
        // filter out hidden elements
        const style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return false;
        // check if visible in viewport or above fold
        return (rect.width < 44 || rect.height < 44) && !el.closest('footer') && !el.closest('.mega-menu-overlay');
    }).map(el => ({
        tag: el.tagName,
        text: el.innerText ? el.innerText.trim().slice(0, 30) : (el.getAttribute('aria-label') || ''),
        class: typeof el.className === 'string' ? el.className.slice(0, 40) : '',
        width: Math.round(el.getBoundingClientRect().width),
        height: Math.round(el.getBoundingClientRect().height)
    })).slice(0, 15);

    return {
        smallCount: smallTargets.length,
        smallTargets: smallTargets
    };
})()"
Write-Host "Touch Targets Audit: $checkTouchTargets"

# 6. Check Console Errors and Logs
Write-Host "`n6. Checking Console Errors..." -ForegroundColor Yellow
agent-browser errors
agent-browser console

Write-Host "`n=== QA INTERACTIVE AUDIT COMPLETED ===" -ForegroundColor Cyan
