# scripts/run-qa.ps1
# Antigravity Subagent 9 — Responsive & Accessibility Runtime QA

$ErrorActionPreference = "Continue"

$viewports = @(
    @{ Name = "Mobile 375 (iPhone SE/Mini)"; W = 375; H = 812; IsMobile = $true },
    @{ Name = "Mobile 390 (iPhone 13/14)"; W = 390; H = 844; IsMobile = $true },
    @{ Name = "Mobile 430 (iPhone Pro Max)"; W = 430; H = 932; IsMobile = $true },
    @{ Name = "Tablet 768 (iPad Portrait)"; W = 768; H = 1024; IsMobile = $false },
    @{ Name = "Laptop 14 Scale 125% (1152x720)"; W = 1152; H = 720; IsMobile = $false },
    @{ Name = "Laptop 14 Standard (1366x768)"; W = 1366; H = 768; IsMobile = $false },
    @{ Name = "Desktop FHD (1440x900)"; W = 1440; H = 900; IsMobile = $false },
    @{ Name = "Desktop Large Scale (1536x864)"; W = 1536; H = 864; IsMobile = $false }
)

$routes = @(
    @{ Name = "Trang Chu"; Path = "/" },
    @{ Name = "Landing 490k"; Path = "/landing-490k" },
    @{ Name = "Ho So Nang Luc"; Path = "/ho-so-nang-luc" },
    @{ Name = "Khao Sat Du An"; Path = "/khao-sat-du-an" },
    @{ Name = "Chien Luoc 5 Giai Doan"; Path = "/chien-luoc-5-giai-doan" },
    @{ Name = "Quy Trinh GEO"; Path = "/quy-trinh-geo" },
    @{ Name = "Tieu Chuan Audit"; Path = "/tieu-chuan-audit" },
    @{ Name = "Quy Trinh Cham Soc"; Path = "/quy-trinh-cham-soc" },
    @{ Name = "Bang Gia Matrix"; Path = "/bang-gia" },
    @{ Name = "Giai Phap Hub"; Path = "/giai-phap" },
    @{ Name = "Dich Vu Local Search"; Path = "/dich-vu/local-search" },
    @{ Name = "Dich Vu GEO"; Path = "/dich-vu/geo" },
    @{ Name = "Du An Matrix"; Path = "/du-an" },
    @{ Name = "Chi Tiet Case Study"; Path = "/du-an/nha-khoa-sai-gon-tam-duc" },
    @{ Name = "Kien Thuc Hub"; Path = "/kien-thuc" },
    @{ Name = "Lien He"; Path = "/lien-he" }
)

$baseUrl = "http://localhost:5173"
$jsPath = Join-Path $PSScriptRoot "eval-bundle.js"
$jsCode = [System.IO.File]::ReadAllText($jsPath) -replace "`r`n", " " -replace "`n", " "

$totalTests = 0
$passedTests = 0
$overflowList = @()
$smallTargetList = @()
$glassList = @()

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " LOCALMATE RUNTIME RESPONSIVE & ACCESSIBILITY QA AUDIT  " -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

foreach ($vp in $viewports) {
    Write-Host "`n--------------------------------------------------------" -ForegroundColor Yellow
    Write-Host ">>> VIEWPORT: $($vp.Name) ($($vp.W)x$($vp.H))" -ForegroundColor Yellow
    Write-Host "--------------------------------------------------------" -ForegroundColor Yellow
    
    agent-browser set viewport $vp.W $vp.H | Out-Null

    foreach ($r in $routes) {
        $totalTests++
        $targetUrl = "$baseUrl$($r.Path)"
        
        agent-browser open $targetUrl | Out-Null
        
        $rawOut = agent-browser eval "$jsCode"
        
        # Parse JSON
        $data = $null
        if ($rawOut -match '\{.*\}') {
            try {
                $unescaped = $matches[0] -replace '\\"', '"'
                $data = $unescaped | ConvertFrom-Json
            } catch {
                try {
                    $data = $matches[0] | ConvertFrom-Json
                } catch {}
            }
        }

        if (-not $data) {
            Write-Host "  ? [$($r.Name)] Could not parse result: $rawOut" -ForegroundColor DarkGray
            continue
        }

        if ($data.hasOverflow) {
            Write-Host "  [FAIL OVERFLOW] [$($r.Name)] docW=$($data.docW)px > winW=$($data.winW)px (+ $($data.overflowAmount)px)" -ForegroundColor Red
            if ($data.overflows) {
                foreach ($o in $data.overflows) {
                    Write-Host "      --> $($o.sel) w=$($o.w)px right=$($o.r)px (+$($o.overflow)px) text='$($o.text)'" -ForegroundColor DarkYellow
                }
            }
            $overflowList += [PSCustomObject]@{
                Viewport = $vp.Name
                Width = $vp.W
                Route = $r.Name
                Path = $r.Path
                OverflowAmount = $data.overflowAmount
                Elements = $data.overflows
            }
        } else {
            $passedTests++
            Write-Host "  [PASS] [$($r.Name)] docW=$($data.docW)px <= winW=$($data.winW)px" -ForegroundColor Green
        }

        if ($vp.IsMobile -and $data.smallTargetsCount -gt 0) {
            $smallTargetList += [PSCustomObject]@{
                Viewport = $vp.Name
                Route = $r.Name
                Count = $data.smallTargetsCount
                Targets = $data.smallTargets
            }
        }

        if ($data.glassCount -gt 0) {
            $glassList += [PSCustomObject]@{
                Viewport = $vp.Name
                Route = $r.Name
                Count = $data.glassCount
            }
        }
    }
}

Write-Host "`n========================================================" -ForegroundColor Cyan
Write-Host " AUDIT SUMMARY RESULTS                                  " -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "Total Route Checks: $totalTests"
Write-Host "Passed No-Overflow: $passedTests" -ForegroundColor Green
Write-Host "Overflow Issues:    $($overflowList.Count)" -ForegroundColor $(if ($overflowList.Count -eq 0) { "Green" } else { "Red" })
Write-Host "Glassmorphism Violations: $($glassList.Count)" -ForegroundColor $(if ($glassList.Count -eq 0) { "Green" } else { "Red" })
Write-Host "Mobile Small Target Reports: $($smallTargetList.Count)" -ForegroundColor $(if ($smallTargetList.Count -eq 0) { "Green" } else { "Yellow" })

# Export JSON report
$reportObj = @{
    Timestamp = (Get-Date).ToString("o")
    TotalTests = $totalTests
    PassedTests = $passedTests
    Overflows = $overflowList
    Glassmorphism = $glassList
    SmallTargets = $smallTargetList
}
$reportObj | ConvertTo-Json -Depth 5 | Set-Content -Path "artifacts/runtime-qa-report.json" -Encoding UTF8
Write-Host "`nFull report written to artifacts/runtime-qa-report.json" -ForegroundColor Cyan
