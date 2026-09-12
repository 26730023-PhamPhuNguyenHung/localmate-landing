$viewports = @(
    @{ w = 360;  h = 800;  name = "Mobile Small (360x800)" },
    @{ w = 375;  h = 812;  name = "iPhone Mini/SE (375x812)" },
    @{ w = 390;  h = 844;  name = "iPhone 12/13/14 (390x844)" },
    @{ w = 430;  h = 932;  name = "iPhone 14/15/16 Pro Max (430x932)" },
    @{ w = 768;  h = 1024; name = "iPad / Tablet (768x1024)" },
    @{ w = 1228; h = 768;  name = "Laptop 14in Windows 125% scale (~1228px effective)" },
    @{ w = 1366; h = 768;  name = "Laptop 14in 100% (1366x768)" },
    @{ w = 1440; h = 900;  name = "MacBook / Desktop 1440 (1440x900)" },
    @{ w = 1536; h = 864;  name = "FullHD 125% scale (1536x864)" },
    @{ w = 1920; h = 1080; name = "FullHD Desktop 100% (1920x1080)" }
)

$results = @()

foreach ($vp in $viewports) {
    $w = $vp.w
    $h = $vp.h
    $name = $vp.name
    Write-Host ">>> Testing Viewport: $name ($w x $h)..." -ForegroundColor Cyan

    agent-browser --session localmate set viewport $w $h
    agent-browser --session localmate open "http://127.0.0.1:5177/"
    agent-browser --session localmate wait 1500

    # 1. Check document horizontal overflow
    $docCheck = agent-browser --session localmate eval "JSON.stringify({ scrollWidth: document.documentElement.scrollWidth, innerWidth: window.innerWidth, isOverflow: document.documentElement.scrollWidth > window.innerWidth })"
    
    # 2. Check overflow elements
    $elemCheck = agent-browser --session localmate eval "(() => {
        const overflows = [];
        document.querySelectorAll('*').forEach(el => {
            if (['HTML', 'BODY', 'MAIN', '#root'].includes(el.tagName) || el.classList.contains('localmate-app')) return;
            if (el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0 && getComputedStyle(el).overflowX !== 'auto' && getComputedStyle(el).overflowX !== 'scroll') {
                overflows.push({
                    tag: el.tagName,
                    id: el.id || '',
                    class: (el.className || '').toString().slice(0, 50),
                    scrollWidth: el.scrollWidth,
                    clientWidth: el.clientWidth
                });
            }
        });
        return JSON.stringify(overflows.slice(0, 5));
    })()"

    # 3. Take screenshot
    $screenshotPath = "artifacts/audit-screenshots/vp_${w}x${h}.png"
    agent-browser --session localmate screenshot $screenshotPath

    Write-Host "    Doc: $docCheck" -ForegroundColor Green
    Write-Host "    Overflow elements: $elemCheck" -ForegroundColor Yellow
    Write-Host "    Screenshot: $screenshotPath" -ForegroundColor Magenta

    $results += [PSCustomObject]@{
        name = $name
        width = $w
        height = $h
        docCheck = $docCheck
        overflowElements = $elemCheck
        screenshot = $screenshotPath
    }
}

$results | ConvertTo-Json -Depth 5 | Out-File "artifacts/audit-report.json" -Encoding utf8
Write-Host "=== AUDIT COMPLETED ON LOCALMATE PORT 5177 WITH PERSISTENT SESSION ===" -ForegroundColor Green
