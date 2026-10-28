[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^[0-9]+(?:-[0-9A-Za-z]+)+$')]
    [string]$CardNo,

    [Parameter(Mandatory = $true)]
    [ValidatePattern('^20[0-9]{6}-[0-9]+$')]
    [string]$ContentVersion,

    [string]$WorkOrderPath,

    [switch]$RequireMirrorSync,

    [string]$MirrorRoot = 'C:\Users\19308\Documents\New project 2\.projects\fangzhimin-ai-video\方'
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$vaultRoot = Split-Path -Parent $projectRoot
$mainCanvas = Join-Path $projectRoot '方志敏任务卡发散树.canvas'
$statusRoot = Join-Path $PSScriptRoot '卡级状态'
$problems = [System.Collections.Generic.List[string]]::new()
$versionPattern = '内容版本[：:]\s*["“”'']?\s*' + [regex]::Escape($ContentVersion)

function Add-Problem([string]$Message) {
    $script:problems.Add($Message)
    Write-Output "阻塞：$Message"
}

if (-not (Test-Path -LiteralPath $mainCanvas -PathType Leaf)) {
    Add-Problem "活库主 Canvas 不存在：$mainCanvas"
} else {
    try {
        $canvas = Get-Content -LiteralPath $mainCanvas -Raw | ConvertFrom-Json
        $nodes = @($canvas.nodes)
        $edges = @($canvas.edges)
        $allIds = @($nodes.id) + @($edges.id)
        if (($allIds | Group-Object | Where-Object Count -gt 1).Count -gt 0) {
            Add-Problem '主 Canvas 存在重复节点或边 ID。'
        }
        $nodeIds = @($nodes.id)
        foreach ($edge in $edges) {
            if ($edge.fromNode -notin $nodeIds -or $edge.toNode -notin $nodeIds) {
                Add-Problem "主 Canvas 存在悬空边：$($edge.id)"
            }
        }
        foreach ($node in $nodes | Where-Object type -eq 'file') {
            $referencedPath = if ($node.file -like '方/*') {
                Join-Path $vaultRoot ($node.file -replace '/', '\\')
            } else {
                Join-Path $projectRoot ($node.file -replace '/', '\\')
            }
            if (-not (Test-Path -LiteralPath $referencedPath)) {
                Add-Problem "主 Canvas 文件节点失效：$($node.file)"
            }
        }
        $activeText = @($nodes | Where-Object { $_.type -eq 'text' -and $_.text -match "(?<![0-9A-Za-z])$([regex]::Escape($CardNo))(?![0-9A-Za-z])" })
        if ($activeText.Count -eq 0) {
            Add-Problem "主 Canvas 找不到卡号 $CardNo 的活动入口。"
        } elseif (@($activeText | Where-Object { $_.text -match $versionPattern }).Count -eq 0) {
            Add-Problem "主 Canvas 的卡号 $CardNo 未写入内容版本 $ContentVersion。"
        }
    } catch {
        Add-Problem "主 Canvas 无法解析：$($_.Exception.Message)"
    }
}

$statusFiles = @(Get-ChildItem -LiteralPath $statusRoot -File -Filter "卡$CardNo*.md" -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -notmatch '\.bak|backup|旧版' })
if ($statusFiles.Count -eq 0) {
    Add-Problem "卡级状态中找不到卡号 $CardNo。"
} elseif ($statusFiles.Count -gt 1) {
    Add-Problem "卡级状态中卡号 $CardNo 有 $($statusFiles.Count) 个活动文件；先消除重复入口。"
} else {
    $statusText = Get-Content -LiteralPath $statusFiles[0].FullName -Raw
    if ($statusText -notmatch $versionPattern) {
        Add-Problem "卡级状态 $($statusFiles[0].Name) 未写入内容版本 $ContentVersion。"
    }
}

if ($WorkOrderPath) {
    if (-not (Test-Path -LiteralPath $WorkOrderPath -PathType Leaf)) {
        Add-Problem "工单不存在：$WorkOrderPath"
    } else {
        $workOrderText = Get-Content -LiteralPath $WorkOrderPath -Raw
        if ($workOrderText -notmatch "(?<![0-9A-Za-z])$([regex]::Escape($CardNo))(?![0-9A-Za-z])") {
            Add-Problem "工单未登记卡号 $CardNo。"
        }
        if ($workOrderText -notmatch $versionPattern) {
            Add-Problem "工单未写入内容版本 $ContentVersion。"
        }
    }
}

if ($RequireMirrorSync) {
    $mirrorCanvas = Join-Path $MirrorRoot '方志敏任务卡发散树.canvas'
    if (-not (Test-Path -LiteralPath $MirrorRoot -PathType Container)) {
        Add-Problem "要求镜像同步，但镜像目录不存在：$MirrorRoot"
    } elseif (-not (Test-Path -LiteralPath $mirrorCanvas -PathType Leaf)) {
        Add-Problem "要求镜像同步，但镜像主 Canvas 不存在：$mirrorCanvas"
    } elseif ((Get-FileHash -LiteralPath $mainCanvas -Algorithm SHA256).Hash -ne (Get-FileHash -LiteralPath $mirrorCanvas -Algorithm SHA256).Hash) {
        Add-Problem '镜像主 Canvas 与活库不一致；禁止从镜像建立或推进任务。'
    }
}

if ($problems.Count -gt 0) {
    Write-Output "校验结束：阻塞，共 $($problems.Count) 项。"
    exit 1
}

Write-Output "可建立/推进任务：$CardNo"
Write-Output "活库：$projectRoot"
if ($RequireMirrorSync) { Write-Output '镜像：已与活库主 Canvas 一致。' }
