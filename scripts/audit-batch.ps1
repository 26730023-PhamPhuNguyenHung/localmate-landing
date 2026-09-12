# scripts/audit-batch.ps1
param(
    [int]$Width = 375,
    [int]$Height = 812,
    [string]$VpName = "Mobile 375"
)

$routes = @(
    @{ Name = "Trang Chu"; Path = "/" },
    @{ Name = "Landing 490k"; Path = "/landing-490k" },
    @{ Name = "Khao Sat Du An"; Path = "/khao-sat-du-an" },
    @{ Name = "Chien Luoc 5 Giai Doan"; Path = "/chien-luoc-5-giai-doan" },
    @{ Name = "Quy Trinh GEO"; Path = "/quy-trinh-geo" },
    @{ Name = "Tieu Chuan Audit"; Path = "/tieu-chuan-audit" },
    @{ Name = "Quy Trinh Cham Soc"; Path = "/quy-trinh-cham-soc" },
    @{ Name = "Bang Gia"; Path = "/bang-gia" },
    @{ Name = "Ho So Nang Luc"; Path = "/ho-so-nang-luc" },
    @{ Name = "Giai Phap Hub"; Path = "/giai-phap" },
    @{ Name = "Dich Vu Local Search"; Path = "/dich-vu/local-search" },
    @{ Name = "Dich Vu GEO"; Path = "/dich-vu/geo" },
    @{ Name = "Du An Matrix"; Path = "/du-an" },
    @{ Name = "Chi Tiet Case Study"; Path = "/du-an/nha-khoa-sai-gon-tam-duc" },
    @{ Name = "Kien Thuc Hub"; Path = "/kien-thuc" },
    @{ Name = "Chi Tiet Bai Viet"; Path = "/kien-thuc/toi-uu-google-maps-seo-2026" },
    @{ Name = "Lien He"; Path = "/lien-he" }
)

$baseUrl = "http://localhost:5173"
$jsPath = "D:\03-Startups-Products\localmate\new\scripts\eval-bundle.js"
$jsCode = [System.IO.File]::ReadAllText($jsPath) -replace "`r`n", " " -replace "`n", " "

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " AUDITING VIEWPORT: $VpName (${Width}x${Height})  " -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

$results = @()

foreach ($r in $routes) {
    $url = "$baseUrl$($r.Path)"
    # Run chained open, set viewport, eval
    $cmd = "agent-browser open '$url'; agent-browser set viewport $Width $Height; agent-browser eval '$jsCode'"
    $out = Invoke-Expression $cmd
    
    $jsonStr = ""
    foreach ($line in $out) {
        if ($line -match '\{.*\}') {
            $jsonStr = $matches[0]
            break
        }
    }
    
    if (-not $jsonStr) {
        Write-Host "  ? [$($r.Name)] Eval parse error" -ForegroundColor DarkGray
        continue
    }

    $jsonStrClean = $jsonStr -replace '\\"', '"'
    try {
        $res = $jsonStrClean | ConvertFrom-Json
    } catch {
        try { $res = $jsonStr | ConvertFrom-Json } catch { $res = $null }
    }

    if (-not $res) {
        Write-Host "  ? [$($r.Name)] Invalid JSON" -ForegroundColor DarkGray
        continue
    }

    if ($res.hasOverflow) {
        Write-Host "  ❌ [$($r.Name)] OVERFLOW! docW=$($res.docW)px > winW=$($res.winW)px (+ $($res.overflowAmount)px)" -ForegroundColor Red
        if ($res.overflows) {
            foreach ($o in $res.overflows) {
                Write-Host "      -> $($o.sel) w=$($o.w)px r=$($o.r)px (+$($o.overflow)px) text='$($o.text)'" -ForegroundColor DarkYellow
            }
        }
    } else {
        Write-Host "  ✅ [$($r.Name)] PASS (docW=$($res.docW)px, winW=$($res.winW)px)" -ForegroundColor Green
    }

    if ($res.glassCount -gt 0) {
        Write-Host "      ⚠️ Glassmorphism detected: $($res.glassCount) elements" -ForegroundColor Magenta
    }

    if ($res.smallTargetsCount -gt 0) {
        Write-Host "      ℹ️ Small targets (<44px): $($res.smallTargetsCount)" -ForegroundColor Gray
        if ($res.smallTargets) {
            foreach ($st in $res.smallTargets) {
                $targetInfo = "         * " + $st.sel + " (" + $st.w + "x" + $st.h + "px) '" + $st.txt + "'"
                Write-Host $targetInfo -ForegroundColor DarkGray
            }
        }
    }

    $results += [PSCustomObject]@{
        Viewport = $VpName
        Width = $Width
        Height = $Height
        Route = $r.Name
        Path = $r.Path
        HasOverflow = $res.hasOverflow
        OverflowAmount = $res.overflowAmount
        Overflows = $res.overflows
        SmallTargetsCount = $res.smallTargetsCount
        SmallTargets = $res.smallTargets
        GlassCount = $res.glassCount
        ScrollbarGutter = $res.scrollbarGutter
    }
}

$resPath = "D:\03-Startups-Products\localmate\new\artifacts\audit-$($Width).json"
$results | ConvertTo-Json -Depth 5 | Set-Content -Path $resPath -Encoding UTF8
Write-Host "`nFinished audit for $VpName. Saved to $resPath`n" -ForegroundColor Cyan
