# Visual Inbox Watcher for Ten-Yuan visual R&D
# Watches ~/Downloads/十元视觉化 and imports images into the repository.
# No third-party PowerShell modules required.

param(
    [string]$Inbox = (Join-Path $HOME 'Downloads\十元视觉化'),
    [string]$RepoRoot = '',
    [int]$ScanSeconds = 3,
    [switch]$NoPush,
    [switch]$Once
)

$ErrorActionPreference = 'Stop'
$ToolDir = $PSScriptRoot
$ContextFile = Join-Path $ToolDir 'visual-inbox-context.json'
$LogFile = Join-Path $ToolDir 'visual-inbox.log'
$VisualRootRel = '01-十元系统/06-视觉化研发'

$ModuleFolders = @{
    'AUDIT' = '01-图像审核器'
    'STYLE' = '02-十元风格'
    'REL'   = '03-十元生克补'
    'CHAIN' = '04-动态链视觉化'
    'AXIS'  = '05-五轴视觉化'
    'ZN'    = '06-ZN跨对象'
    'DSL'   = '07-Visual-DSL'
    'INBOX' = '99-inbox'
}

$AllowedExt = @('.png', '.jpg', '.jpeg', '.webp')

function Write-Log([string]$Message) {
    $line = "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] $Message"
    Write-Host $line
    Add-Content -LiteralPath $LogFile -Value $line -Encoding UTF8
}

function Resolve-RepoRoot {
    if ($RepoRoot) { return (Resolve-Path -LiteralPath $RepoRoot).Path }
    $out = & git -C $ToolDir rev-parse --show-toplevel 2>$null
    if ($LASTEXITCODE -ne 0 -or -not $out) {
        throw '无法自动定位 Git 仓库。请用 -RepoRoot 指定本地 -ten-yuan-vault 路径。'
    }
    return ($out | Select-Object -First 1).Trim()
}

function Read-Context {
    if (-not (Test-Path -LiteralPath $ContextFile)) {
        throw "缺少上下文文件：$ContextFile"
    }
    $ctx = Get-Content -LiteralPath $ContextFile -Raw -Encoding UTF8 | ConvertFrom-Json
    if (-not $ctx.module -or -not $ctx.target -or -not $ctx.round) {
        throw 'visual-inbox-context.json 缺少 module / target / round。'
    }
    return $ctx
}

function Wait-FileStable([string]$Path) {
    for ($i = 0; $i -lt 6; $i++) {
        if (-not (Test-Path -LiteralPath $Path)) { return $false }
        $a = Get-Item -LiteralPath $Path
        Start-Sleep -Milliseconds 650
        if (-not (Test-Path -LiteralPath $Path)) { return $false }
        $b = Get-Item -LiteralPath $Path
        if ($a.Length -eq $b.Length -and $a.LastWriteTimeUtc -eq $b.LastWriteTimeUtc -and $b.Length -gt 0) {
            return $true
        }
    }
    return $false
}

function Sanitize-Token([string]$Text, [string]$Fallback) {
    $x = ($Text -replace '\s+', '-') -replace '[^0-9A-Za-z_\-一-龥并]', ''
    if ([string]::IsNullOrWhiteSpace($x)) { return $Fallback }
    return $x.ToUpperInvariant()
}

function Get-NextSequence([string]$DestinationDir, [string]$Prefix) {
    $max = 0
    if (Test-Path -LiteralPath $DestinationDir) {
        Get-ChildItem -LiteralPath $DestinationDir -File -ErrorAction SilentlyContinue | ForEach-Object {
            if ($_.BaseName -match ('^' + [regex]::Escape($Prefix) + '-(?<n>\d{3})$')) {
                $n = [int]$Matches['n']
                if ($n -gt $max) { $max = $n }
            }
        }
    }
    return ($max + 1)
}

function Get-Role($Context, [int]$Sequence) {
    $roles = @($Context.roles)
    if ($roles.Count -eq 0) { return 'SAMPLE' }
    $idx = ($Sequence - 1) % $roles.Count
    return (Sanitize-Token ([string]$roles[$idx]) 'SAMPLE')
}

function Get-Destination([string]$Root, $Context) {
    $module = Sanitize-Token ([string]$Context.module) 'INBOX'
    $target = Sanitize-Token ([string]$Context.target) 'UNCLASSIFIED'
    $round = Sanitize-Token ([string]$Context.round) 'R0'
    $folder = $ModuleFolders[$module]
    if (-not $folder) { $folder = $ModuleFolders['INBOX'] }
    $dir = Join-Path $Root $VisualRootRel
    $dir = Join-Path $dir $folder
    $dir = Join-Path $dir $target
    $dir = Join-Path $dir $round
    return @($dir, $module, $target, $round)
}

function Invoke-GitCommitPush([string]$Root, [string[]]$Paths, [string]$SampleId) {
    $relative = @()
    foreach ($p in $Paths) {
        $relative += [System.IO.Path]::GetRelativePath($Root, $p).Replace('\\', '/')
    }

    & git -C $Root add -- @relative
    if ($LASTEXITCODE -ne 0) { throw "git add 失败：$SampleId" }

    & git -C $Root commit -m "visual(import): $SampleId" -- @relative
    if ($LASTEXITCODE -ne 0) {
        Write-Log "WARN commit 未完成（可能无变化）：$SampleId"
        return
    }

    if (-not $NoPush) {
        & git -C $Root push
        if ($LASTEXITCODE -ne 0) {
            Write-Log "WARN push 失败，提交已保留在本地：$SampleId"
        } else {
            Write-Log "PUSHED $SampleId"
        }
    } else {
        Write-Log "COMMITTED(no-push) $SampleId"
    }
}

function Import-Image([string]$Path, [string]$Root) {
    if (-not (Wait-FileStable $Path)) {
        Write-Log "SKIP 文件仍在写入：$Path"
        return
    }

    $ctx = Read-Context
    $destInfo = Get-Destination $Root $ctx
    $destDir = $destInfo[0]
    $module = $destInfo[1]
    $target = $destInfo[2]
    $round = $destInfo[3]
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null

    $item = Get-Item -LiteralPath $Path
    $ext = $item.Extension.ToLowerInvariant()

    # If filename is already a valid VIS-* id, preserve it.
    if ($item.BaseName -match '^VIS-[0-9A-Z_\-一-龥并]+$') {
        $sampleId = $item.BaseName.ToUpperInvariant()
    } else {
        $basePrefix = "VIS-$module-$target-$round"
        $probeSeq = Get-NextSequence $destDir "$basePrefix-(POS|NEAR|NEG|SAMPLE)" # fallback below handles actual prefix scan

        # Determine next number across all roles in this destination.
        $max = 0
        Get-ChildItem -LiteralPath $destDir -File -ErrorAction SilentlyContinue | ForEach-Object {
            if ($_.BaseName -match ('^' + [regex]::Escape($basePrefix) + '-[0-9A-Z_\-一-龥并]+-(?<n>\d{3})$')) {
                $n = [int]$Matches['n']
                if ($n -gt $max) { $max = $n }
            }
        }
        $seq = $max + 1
        $role = Get-Role $ctx $seq
        $sampleId = '{0}-{1}-{2:D3}' -f $basePrefix, $role, $seq
    }

    $destImage = Join-Path $destDir ($sampleId + $ext)
    if (Test-Path -LiteralPath $destImage) {
        Write-Log "SKIP 已存在：$destImage"
        return
    }

    Move-Item -LiteralPath $Path -Destination $destImage

    $yamlPath = Join-Path $destDir ($sampleId + '.yaml')
    if (-not (Test-Path -LiteralPath $yamlPath)) {
        $roleFromId = if ($sampleId -match '-(POS|NEAR|NEG|SAMPLE)-\d{3}$') { $Matches[1] } else { 'UNKNOWN' }
        $yaml = @"
sample_id: $sampleId
module: $module
target: $target
round: $round
role: $roleFromId
source: chatgpt_web_download
source_filename: "$($item.Name.Replace('"',''''))"
imported_at: "$(Get-Date -Format 'yyyy-MM-ddTHH:mm:ssK')"
status: IMPORTED_UNAUDITED
prompt: null
visual_dsl: null
audit:
  verdict: PENDING
  structural_evidence: null
  shortcut_dependency: null
  nearest_confusion: null
  failure_family: null
"@
        Set-Content -LiteralPath $yamlPath -Value $yaml -Encoding UTF8
    }

    $auditPath = Join-Path $destDir ($sampleId + '_audit.md')
    if (-not (Test-Path -LiteralPath $auditPath)) {
        $audit = @"
# $sampleId｜图像审核

- 状态：PENDING
- 目标：$target
- 模块：$module
- 轮次：$round

## 结构证据

待审核。

## 捷径依赖

待审核。

## 最近邻混淆

待审核。

## Verdict

PENDING
"@
        Set-Content -LiteralPath $auditPath -Value $audit -Encoding UTF8
    }

    Write-Log "IMPORTED $($item.Name) -> $sampleId$ext"
    Invoke-GitCommitPush $Root @($destImage, $yamlPath, $auditPath) $sampleId
}

function Scan-Inbox([string]$Root) {
    New-Item -ItemType Directory -Path $Inbox -Force | Out-Null
    $files = Get-ChildItem -LiteralPath $Inbox -File -ErrorAction SilentlyContinue |
        Where-Object { $AllowedExt -contains $_.Extension.ToLowerInvariant() } |
        Sort-Object CreationTimeUtc

    foreach ($f in $files) {
        try { Import-Image $f.FullName $Root }
        catch { Write-Log "ERROR $($f.Name): $($_.Exception.Message)" }
    }
}

$ResolvedRepoRoot = Resolve-RepoRoot
New-Item -ItemType Directory -Path $Inbox -Force | Out-Null
Write-Log "WATCHER_START inbox=$Inbox repo=$ResolvedRepoRoot once=$Once noPush=$NoPush"

try {
    do {
        Scan-Inbox $ResolvedRepoRoot
        if (-not $Once) { Start-Sleep -Seconds $ScanSeconds }
    } while (-not $Once)
} finally {
    Write-Log 'WATCHER_STOP'
}
