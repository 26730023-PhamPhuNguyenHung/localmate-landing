# LocalMate LegalOps Contract Generator CLI (2026 Edition)
param (
    [string]$ConfigPath = "$PSScriptRoot\contract-config.json",
    [string]$Pack = "PackB",
    [string]$OutputDir = "$PSScriptRoot\output-contracts"
)

$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  LOCALMATE LEGALOPS CONTRACT GENERATOR CLI (2026 EDITION) " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan

if (-not (Test-Path -Path $ConfigPath)) {
    Write-Error "Config file not found at: $ConfigPath"
    exit 1
}

Write-Host "[1/4] Loading configuration from: $ConfigPath" -ForegroundColor Yellow
$configRaw = Get-Content -Path $ConfigPath -Raw -Encoding UTF8
$config = $configRaw | ConvertFrom-Json

if (-not (Test-Path -Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

$legalRoot = Split-Path -Path $PSScriptRoot -Parent

# Build replacement hashtable
$replacements = @{
    "\[LOCALMATE_LEGAL_NAME\]" = [string]$config.localmate.legal_name
    "\[MST\]"                  = [string]$config.localmate.mst
    "\[ADDRESS\]"              = [string]$config.localmate.address
    "\[REPRESENTATIVE\]"       = [string]$config.localmate.representative
    "\[TITLE\]"                = [string]$config.localmate.title
    "\[PHONE\]"                = [string]$config.localmate.phone
    "\[EMAIL\]"                = [string]$config.localmate.email
    "\[BANK\]"                 = [string]$config.localmate.bank_name
    "\[BANK_BRANCH\]"          = [string]$config.localmate.bank_branch
    "\[ACCOUNT_NUMBER\]"       = [string]$config.localmate.account_number

    "\[TEN_KHACH_HANG\]"       = [string]$config.customer.legal_name
    "\[MST_KHACH_HANG\]"       = [string]$config.customer.mst
    "\[DIA_CHI_KHACH_HANG\]"   = [string]$config.customer.address
    "\[NGUOI_DAI_DIEN_A\]"     = [string]$config.customer.representative
    "\[CHUC_VU_A\]"            = [string]$config.customer.title
    "\[SDT_A\]"                = [string]$config.customer.phone
    "\[EMAIL_A\]"              = [string]$config.customer.email
    "\[TEN_DAU_MOI_OPS\]"      = [string]$config.customer.ops_contact_name
    "\[SDT_OPS\]"              = [string]$config.customer.ops_contact_phone
    "\[EMAIL_OPS\]"            = [string]$config.customer.ops_contact_email
    "\[NGANH_NGHE_KINH_DOANH\]"= [string]$config.customer.business_sector

    "\[TEN_DU_AN\]"            = [string]$config.project.project_name
    "\[DOMAIN_NAME\]"          = [string]$config.project.domain_name
    "\[GBP_NAME\]"              = [string]$config.project.gbp_name
    "\[SO_HOP_DONG_MSA\]"      = [string]$config.project.contract_code
    "\[SO_DON_HANG\]"          = [string]$config.project.order_code
    "\[SO_SOW\]"               = [string]$config.project.sow_code
    "\[NGAY_KY_MSA\]"          = [string]$config.project.effective_date
    "\[NGAY_BAT_DAU\]"         = [string]$config.project.start_date
    "\[NGAY_KET_THUC\]"        = [string]$config.project.target_end_date

    "\[GIA_WEB\]"              = "{0:N0}" -f [int64]$config.pricing.service_fee_website
    "\[GIA_MAPS\]"             = "{0:N0}" -f [int64]$config.pricing.service_fee_maps
    "\[GIA_ADS\]"              = "{0:N0}" -f [int64]$config.pricing.service_fee_ads
    "\[GIA_CONTENT\]"          = "{0:N0}" -f [int64]$config.pricing.service_fee_content
    "\[GIA_CRM\]"              = "{0:N0}" -f [int64]$config.pricing.service_fee_crm
    "\[TONG_GIA_TRI_HD\]"      = "{0:N0}" -f [int64]$config.pricing.total_contract_value
    "\[TIEN_DOT_1\]"           = "{0:N0}" -f [int64]$config.pricing.deposit_amount
    "\[TIEN_DOT_2\]"           = "{0:N0}" -f [int64]$config.pricing.final_payment_amount
    "\[TIEN_DA_COC\]"          = "{0:N0}" -f [int64]$config.pricing.deposit_amount
    "\[TIEN_CON_LAI_PHAI_TRA\]"= "{0:N0}" -f [int64]$config.pricing.final_payment_amount
    "\[SO_TIEN_BANG_CHU\]"     = [string]$config.pricing.total_value_in_words
}

function Process-File {
    param (
        [string]$RelPath,
        [string]$SubFolder
    )

    $src = Join-Path -Path $legalRoot -ChildPath $RelPath
    if (-not (Test-Path -Path $src)) {
        Write-Warning "Source file not found: $src"
        return
    }

    $fName = Split-Path -Path $src -Leaf
    $destDir = Join-Path -Path $OutputDir -ChildPath $SubFolder
    if (-not (Test-Path -Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    $target = Join-Path -Path $destDir -ChildPath $fName

    $text = Get-Content -Path $src -Raw -Encoding UTF8

    foreach ($k in $replacements.Keys) {
        $v = $replacements[$k]
        $text = $text -replace $k, $v
    }

    [System.IO.File]::WriteAllText($target, $text, [System.Text.Encoding]::UTF8)
    Write-Host "  -> Generated MD:   [$SubFolder] $fName" -ForegroundColor Green

    # Build từng file DOCX riêng lẻ chuẩn thể thức Việt Nam
    $singleDocxScript = Join-Path -Path (Split-Path -Path $legalRoot -Parent) -ChildPath "scripts\build_single_contract_docx.py"
    $targetDocx = [System.IO.Path]::ChangeExtension($target, ".docx")
    if (Test-Path -Path $singleDocxScript) {
        try {
            & python $singleDocxScript $target $targetDocx
            Write-Host "  -> Generated DOCX: [$SubFolder] $(Split-Path $targetDocx -Leaf)" -ForegroundColor Cyan
        } catch {
            Write-Warning "Could not generate DOCX for $target : $_"
        }
    }
}

Write-Host "[2/4] Generating files for Pack: $Pack" -ForegroundColor Yellow

if ($Pack -eq "PackA" -or $Pack -eq "All") {
    Write-Host "`n--- PACK A: SIMPLE SME AGREEMENT ---" -ForegroundColor Cyan
    Process-File "14-simple-contract\30_LOCALMATE_SIMPLE_SERVICE_AGREEMENT.md" "PackA-Simple"
    Process-File "11-acceptance-handover\16_BIEN_BAN_NGHIEM_THU.md" "PackA-Simple"
    Process-File "11-acceptance-handover\17_BIEN_BAN_BAN_GIAO.md" "PackA-Simple"
}

if ($Pack -eq "PackB" -or $Pack -eq "All") {
    Write-Host "`n--- PACK B: STANDARD GROWTH AGREEMENT ---" -ForegroundColor Cyan
    Process-File "01-core\01_MASTER_SERVICE_AGREEMENT_LOCALMATE.md" "PackB-Standard"
    Process-File "01-core\03_SERVICE_ORDER.md" "PackB-Standard"
    Process-File "01-core\04_STATEMENT_OF_WORK_SOW.md" "PackB-Standard"
    Process-File "07-data-protection\10_DATA_PROCESSING_AGREEMENT_DPA.md" "PackB-Standard"
    Process-File "08-security\11_NDA_MUTUAL.md" "PackB-Standard"
    Process-File "09-ip\12_IP_AND_DIGITAL_ASSET_APPENDIX.md" "PackB-Standard"
    Process-File "02-website\05_PHU_LUC_WEBSITE.md" "PackB-Standard"
    Process-File "03-google-maps\06_PHU_LUC_GOOGLE_MAPS_LOCAL_SEO.md" "PackB-Standard"
    Process-File "04-google-ads\07_HOP_DONG_PHU_LUC_GOOGLE_ADS.md" "PackB-Standard"
    Process-File "04-google-ads\22_CUSTOMER_LEGAL_CONTENT_DECLARATION.md" "PackB-Standard"
    Process-File "05-content\08_PHU_LUC_CONTENT_SOCIAL.md" "PackB-Standard"
    Process-File "06-crm-automation\09_PHU_LUC_CRM_AUTOMATION.md" "PackB-Standard"
    Process-File "10-payment\20_PAYMENT_SCHEDULE_APPENDIX.md" "PackB-Standard"
    Process-File "11-acceptance-handover\14_SLA_MAINTENANCE_SUPPORT.md" "PackB-Standard"
    Process-File "11-acceptance-handover\15_CHANGE_REQUEST_FORM.md" "PackB-Standard"
    Process-File "11-acceptance-handover\16_BIEN_BAN_NGHIEM_THU.md" "PackB-Standard"
}

if ($Pack -eq "PackC" -or $Pack -eq "All") {
    Write-Host "`n--- PACK C: ENTERPRISE MASTER AGREEMENT ---" -ForegroundColor Cyan
    Process-File "15-enterprise\31_LOCALMATE_ENTERPRISE_MSA.md" "PackC-Enterprise"
    Process-File "01-core\04_STATEMENT_OF_WORK_SOW.md" "PackC-Enterprise"
    Process-File "07-data-protection\10_DATA_PROCESSING_AGREEMENT_DPA.md" "PackC-Enterprise"
    Process-File "08-security\11_NDA_MUTUAL.md" "PackC-Enterprise"
    Process-File "08-security\13_DIGITAL_ACCOUNT_OWNERSHIP_HANDOVER.md" "PackC-Enterprise"
    Process-File "08-security\21_THIRD_PARTY_SERVICE_APPENDIX.md" "PackC-Enterprise"
    Process-File "08-security\23_INFORMATION_SECURITY_APPENDIX.md" "PackC-Enterprise"
    Process-File "09-ip\12_IP_AND_DIGITAL_ASSET_APPENDIX.md" "PackC-Enterprise"
    Process-File "10-payment\20_PAYMENT_SCHEDULE_APPENDIX.md" "PackC-Enterprise"
    Process-File "11-acceptance-handover\14_SLA_MAINTENANCE_SUPPORT.md" "PackC-Enterprise"
    Process-File "11-acceptance-handover\15_CHANGE_REQUEST_FORM.md" "PackC-Enterprise"
    Process-File "11-acceptance-handover\16_BIEN_BAN_NGHIEM_THU.md" "PackC-Enterprise"
    Process-File "12-termination\18_BIEN_BAN_THANH_LY.md" "PackC-Enterprise"
}

if ($Pack -eq "Agency" -or $Pack -eq "All") {
    Write-Host "`n--- PACK AGENCY: RESELLER & PARTNER AGREEMENT ---" -ForegroundColor Cyan
    Process-File "17-agency-partner\32_LOCALMATE_AGENCY_PARTNERSHIP_AGREEMENT.md" "Pack-Agency"
}

if ($Pack -eq "HR" -or $Pack -eq "All") {
    Write-Host "`n--- PACK HR: LABOR CONTRACT & IP ASSIGNMENT ---" -ForegroundColor Cyan
    Process-File "18-hr-ip\33_EMPLOYEE_LABOR_CONTRACT_WITH_IP.md" "Pack-HR"
    Process-File "18-hr-ip\34_IP_ASSIGNMENT_AND_CONFIDENTIALITY_AGREEMENT.md" "Pack-HR"
}

Write-Host "`n[3/4] Successfully processed and built clean DOCX for all selected contracts!" -ForegroundColor Green
Write-Host "`n[4/4] Output files saved at: $OutputDir" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan
