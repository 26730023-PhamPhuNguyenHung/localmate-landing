# Deep QA Audit across all secondary routes
$baseUrl = "http://localhost:3002"
$pages = @(
    "/",
    "/mam-non",
    "/geo",
    "/kien-thuc",
    "/kien-thuc/entity-seo-la-gi-co-can-thiet-cho-doanh-nghiep-nho",
    "/chinh-sach-bao-mat"
)

$viewports = @(
    @{ w = 1920; h = 1080; name = "Desktop_1920" },
    @{ w = 1366; h = 768;  name = "Laptop_1366" },
    @{ w = 768;  h = 1024; name = "Tablet_768" },
    @{ w = 390;  h = 844;  name = "Mobile_390" },
    @{ w = 360;  h = 800;  name = "Mobile_360" }
)

Write-Host "=== STARTING DEEP QA AUDIT ACROSS ROUTES ===" -ForegroundColor Cyan
$auditLog = @()

foreach ($p in $pages) {
    Write-Host "`n--- Auditing: $p ---" -ForegroundColor Yellow
    agent-browser open "$baseUrl$p"
    Start-Sleep -Milliseconds 600

    # 1. Check page title & status
    $title = agent-browser get title

    # 2. Check errors on load
    $pageErrors = agent-browser errors

    # 3. Check responsive overflow across 5 key viewports
    foreach ($vp in $viewports) {
        $w = $vp.w
        $h = $vp.h
        agent-browser set viewport $w $h
        Start-Sleep -Milliseconds 250

        $evalRes = agent-browser eval "(() => {
            const docW = document.documentElement.scrollWidth;
            const winW = window.innerWidth;
            return JSON.stringify({
                hasOverflow: docW > winW,
                docW: docW,
                winW: winW
            });
        })()"

        $jsonStr = $evalRes
        if ($jsonStr -match '^"(.*)"$') {
            $jsonStr = $matches[1] -replace '\\"', '"'
        }
        $parsed = $jsonStr | ConvertFrom-Json

        $safeP = ($p -replace '/', '_')
        if ($safeP -eq '_') { $safeP = '_home' }
        $shot = "artifacts/screenshots/deep_$($safeP)_$($w)x$($h).png"
        
        if ($w -in @(1366, 390)) {
            agent-browser screenshot $shot
        }

        $auditLog += [PSCustomObject]@{
            Page = $p
            Viewport = "$($w)x$($h)"
            DocWidth = $parsed.docW
            WinWidth = $parsed.winW
            HasOverflow = $parsed.hasOverflow
            PageTitle = $title
            Screenshot = $shot
        }

        $status = if ($parsed.hasOverflow) { "OVERFLOW ($($parsed.docW) > $($parsed.winW))" } else { "OK" }
        Write-Host "  [$($w)x$($h)]: $status"
    }

    # 4. Check broken images on page
    agent-browser scroll down 3000
    Start-Sleep -Milliseconds 500
    $imgRes = agent-browser eval "(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        const broken = imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.src);
        return JSON.stringify({ total: imgs.length, brokenCount: broken.length, broken: broken });
    })()"
    Write-Host "  Images: $imgRes"
}

$auditLog | ConvertTo-Json -Depth 4 | Set-Content "artifacts/deep-qa-audit.json" -Encoding UTF8
Write-Host "`n=== DEEP AUDIT COMPLETED. Saved to artifacts/deep-qa-audit.json ===" -ForegroundColor Cyan
