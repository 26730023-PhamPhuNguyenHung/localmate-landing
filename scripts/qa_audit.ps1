# QA Audit Script using agent-browser
$viewports = @(
    @{ w = 1920; h = 1080; name = "Desktop_1920x1080" },
    @{ w = 1600; h = 900;  name = "Desktop_1600x900" },
    @{ w = 1536; h = 864;  name = "Laptop125_1536x864" },
    @{ w = 1366; h = 768;  name = "Laptop_1366x768" },
    @{ w = 1024; h = 768;  name = "Tablet_1024x768" },
    @{ w = 768;  h = 1024; name = "Tablet_768x1024" },
    @{ w = 430;  h = 932;  name = "Mobile_430x932" },
    @{ w = 390;  h = 844;  name = "Mobile_390x844" },
    @{ w = 360;  h = 800;  name = "Mobile_360x800" }
)

$baseUrl = "http://localhost:3002"
$routes = @("/", "/mam-non", "/geo", "/kien-thuc")
$results = @()

New-Item -ItemType Directory -Force -Path "artifacts/screenshots" | Out-Null

Write-Host "=== STARTING QA AUDIT ON LOCALMATE (PORT 3002) ===" -ForegroundColor Cyan

foreach ($route in $routes) {
    Write-Host "`nTesting route: $route" -ForegroundColor Yellow
    agent-browser open "$baseUrl$route"
    Start-Sleep -Milliseconds 800

    foreach ($vp in $viewports) {
        $w = $vp.w
        $h = $vp.h
        $vpName = $vp.name
        
        agent-browser set viewport $w $h
        Start-Sleep -Milliseconds 300

        $jsCheck = @"
(() => {
    const docW = document.documentElement.scrollWidth;
    const bodyW = document.body ? document.body.scrollWidth : 0;
    const winW = window.innerWidth;
    const hasOverflow = docW > winW || bodyW > winW;
    
    // Find top overflowing elements if any
    let badEls = [];
    if (hasOverflow) {
        const all = document.querySelectorAll('*');
        for (let i = 0; i < all.length; i++) {
            const el = all[i];
            const r = el.getBoundingClientRect();
            if (r.right > winW + 1 || el.scrollWidth > winW + 1) {
                badEls.push({
                    tag: el.tagName,
                    id: el.id || '',
                    class: (typeof el.className === 'string' ? el.className.slice(0, 60) : ''),
                    right: Math.round(r.right),
                    scrollWidth: el.scrollWidth
                });
                if (badEls.length >= 5) break;
            }
        }
    }
    return JSON.stringify({
        winW: winW,
        winH: window.innerHeight,
        docW: docW,
        bodyW: bodyW,
        hasOverflow: hasOverflow,
        badEls: badEls
    });
})()
"@
        $evalRes = agent-browser eval $jsCheck
        # Parse evalRes
        $jsonStr = $evalRes
        if ($jsonStr -match '^"(.*)"$') {
            $jsonStr = $matches[1] -replace '\\"', '"'
        }
        
        $safeRoute = ($route -replace '/', '_')
        if ($safeRoute -eq '_') { $safeRoute = '_home' }
        $shotPath = "artifacts/screenshots/qa$($safeRoute)_$($w)x$($h).png"
        
        # Take screenshot for primary viewports: 1920, 1366, 768, 390
        if ($w -in @(1920, 1366, 768, 390)) {
            agent-browser screenshot $shotPath
        }

        $resObj = [PSCustomObject]@{
            Route = $route
            Viewport = "$($w)x$($h)"
            Category = $vpName
            DocWidth = $null
            WinWidth = $null
            HasOverflow = $false
            OverflowElements = ""
            Screenshot = $shotPath
        }

        try {
            $parsed = $jsonStr | ConvertFrom-Json
            $resObj.DocWidth = $parsed.docW
            $resObj.WinWidth = $parsed.winW
            $resObj.HasOverflow = $parsed.hasOverflow
            if ($parsed.badEls.Count -gt 0) {
                $resObj.OverflowElements = ($parsed.badEls | ForEach-Object { "$($_.tag)#$($_.id).$($_.class) [right=$($_.right)]" }) -join "; "
            }
        } catch {
            $resObj.OverflowElements = "Parse error: $_"
        }

        $results += $resObj

        $statusColor = if ($resObj.HasOverflow) { "Red" } else { "Green" }
        $statusText = if ($resObj.HasOverflow) { "FAIL (Overflow: $($resObj.DocWidth)px > $($resObj.WinWidth)px)" } else { "PASS" }
        Write-Host "  [$vpName] ($($w)x$($h)): $statusText" -ForegroundColor $statusColor
        if ($resObj.HasOverflow) {
            Write-Host "    Bad elements: $($resObj.OverflowElements)" -ForegroundColor DarkRed
        }
    }
}

$results | Export-Clixml -Path "artifacts/qa-results.xml"
$results | ConvertTo-Json -Depth 5 | Set-Content "artifacts/qa-results.json" -Encoding UTF8
Write-Host "`n=== QA AUDIT FINISHED. Saved to artifacts/qa-results.json ===" -ForegroundColor Cyan
