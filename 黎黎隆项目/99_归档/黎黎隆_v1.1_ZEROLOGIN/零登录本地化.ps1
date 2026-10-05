$ErrorActionPreference = "Continue"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$Here = Split-Path -Parent $MyInvocation.MyCommand.Path
$Canvas = Join-Path $Here "黎黎隆_场景风格视觉化发散树_v1.2_ZEROLOGIN.canvas"
$Manifest = Join-Path $Here "reference_manifest.json"
$OutCanvas = Join-Path $Here "黎黎隆_场景风格视觉化发散树_v1.2_LOCAL.canvas"
$RefDir = Join-Path $Here "assets\references"
$FailedFile = Join-Path $Here "FAILED_参考图.txt"

New-Item -ItemType Directory -Force -Path $RefDir | Out-Null

function Get-Ext([string]$url) {
    $p = ([System.Uri]$url).AbsolutePath.ToLower()
    if ($p.EndsWith(".png")) { return ".png" }
    if ($p.EndsWith(".webp")) { return ".webp" }
    if ($p.EndsWith(".gif")) { return ".gif" }
    return ".jpg"
}

function Download-Image([string]$url, [string]$outPath, [string]$sourceUrl) {
    $headers = @{
        "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36"
        "Accept" = "image/avif,image/webp,image/apng,image/*,*/*;q=0.8"
    }

    # First try direct image URL only. Never open source page.
    try {
        Invoke-WebRequest -Uri $url -OutFile $outPath -Headers $headers -TimeoutSec 35 -MaximumRedirection 5
        if ((Test-Path $outPath) -and ((Get-Item $outPath).Length -gt 10000)) {
            return $true
        }
    } catch {}

    # Second try only changes Referer header. Still does NOT open the source page.
    try {
        if ($sourceUrl) { $headers["Referer"] = $sourceUrl }
        Invoke-WebRequest -Uri $url -OutFile $outPath -Headers $headers -TimeoutSec 35 -MaximumRedirection 5
        if ((Test-Path $outPath) -and ((Get-Item $outPath).Length -gt 10000)) {
            return $true
        }
    } catch {}

    if (Test-Path $outPath) { Remove-Item $outPath -Force -ErrorAction SilentlyContinue }
    return $false
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host " 黎黎隆参考图本地化 v1.2 ZERO-LOGIN" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "这版不会启动浏览器，也不会打开 Pinterest/Behance。" -ForegroundColor Yellow
Write-Host "下载失败就留占位卡，不登录。" -ForegroundColor Yellow
Write-Host ""

$data = Get-Content -Raw -Encoding UTF8 $Canvas | ConvertFrom-Json
$manifest = Get-Content -Raw -Encoding UTF8 $Manifest | ConvertFrom-Json

# Convert manifest PSCustomObject into a dictionary-like lookup
$manifestMap = @{}
$manifest.psobject.Properties | ForEach-Object {
    $manifestMap[$_.Name] = $_.Value
}

$success = 0
$failed = @()
$newNodes = @()

foreach ($node in $data.nodes) {
    $id = [string]$node.id

    if ($manifestMap.ContainsKey($id)) {
        $meta = $manifestMap[$id]
        $imageUrl = [string]$meta.image_url
        $sourceUrl = [string]$meta.source_url
        $ext = Get-Ext $imageUrl
        $safe = ($id -replace '[^A-Za-z0-9_.-]', '_')
        $fileName = $safe + $ext
        $absPath = Join-Path $RefDir $fileName

        Write-Host ("[{0}] " -f $id) -NoNewline
        $ok = Download-Image $imageUrl $absPath $sourceUrl

        if ($ok) {
            Write-Host "OK" -ForegroundColor Green
            $rel = "黎黎隆_v1.1_ZEROLOGIN/assets/references/" + $fileName

            $o = [ordered]@{
                id = $id
                type = "file"
                file = $rel
                x = $node.x
                y = $node.y
                width = $node.width
                height = 420
            }
            if ($null -ne $node.color) { $o["color"] = $node.color }
            $newNodes += [pscustomobject]$o
            $success++
        } else {
            Write-Host "失败（不登录）" -ForegroundColor DarkYellow
            $hostName = ""
            try { $hostName = ([System.Uri]$sourceUrl).Host } catch {}
            $o = [ordered]@{
                id = $id
                type = "text"
                text = "## ❌ 参考图未下载`n`n$id`n`n**不会打开登录页。**`n`n来源域名：$hostName`n`n后续只替换这一张参考，不影响其余 Canvas。"
                x = $node.x
                y = $node.y
                width = $node.width
                height = 260
            }
            if ($null -ne $node.color) { $o["color"] = $node.color }
            $newNodes += [pscustomobject]$o
            $failed += "$id`t$imageUrl`t$sourceUrl"
        }
    }
    elseif ($node.type -eq "link") {
        # Absolute safety: no live website cards survive into LOCAL canvas.
        $o = [ordered]@{
            id = $node.id
            type = "text"
            text = "## 外部网页预览已禁用`n`n为避免登录墙，本地版不会自动加载网页。"
            x = $node.x
            y = $node.y
            width = $node.width
            height = 200
        }
        if ($null -ne $node.color) { $o["color"] = $node.color }
        $newNodes += [pscustomobject]$o
    }
    else {
        $newNodes += $node
    }
}

$data.nodes = $newNodes

# Safety check
$linkCount = @($data.nodes | Where-Object { $_.type -eq "link" }).Count

$data | ConvertTo-Json -Depth 100 | Set-Content -Encoding UTF8 $OutCanvas
$failed | Set-Content -Encoding UTF8 $FailedFile

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ("成功下载：{0}" -f $success) -ForegroundColor Green
Write-Host ("失败留占位：{0}" -f $failed.Count) -ForegroundColor Yellow
Write-Host ("LOCAL Canvas 外部 link 节点：{0}" -f $linkCount) -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "请打开：" -ForegroundColor Green
Write-Host $OutCanvas
Write-Host ""
Write-Host "无论成功多少张，这个 LOCAL Canvas 都不会弹登录页。" -ForegroundColor Green
Write-Host ""
Read-Host "按 Enter 关闭"
