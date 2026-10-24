$ErrorActionPreference = "Stop"

if ($args.Count -lt 1) {
    Write-Output "Usage: hermes_qwen_compress_deepseek.ps1 <deepseek_report_path> [model]"
    Write-Output "default model: qwen3.5:4b"
    exit 1
}

$DeepSeekReport = [string]$args[0]
$Model = "qwen3.5:4b"
if ($args.Count -ge 2 -and $args[1]) {
    $Model = [string]$args[1]
}

if (-not (Test-Path -LiteralPath $DeepSeekReport)) {
    throw "DeepSeek report not found: $DeepSeekReport"
}

$Base = Split-Path -Parent $MyInvocation.MyCommand.Path
$RunDir = Join-Path $Base "Hermes-runs"
if (-not (Test-Path -LiteralPath $RunDir)) {
    New-Item -ItemType Directory -Path $RunDir | Out-Null
}

$Inbox = "C:\Users\19308\Documents\Obsidian\ten-yuan-vault\07-Codex大脑库\千问十元待二审收集箱.md"
$Stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$OutPath = Join-Path $RunDir "qwen-compressed-$Stamp.md"

$ReportText = Get-Content -Encoding UTF8 -LiteralPath $DeepSeekReport -Raw

$Prompt = @"
/no_think

你是 Obsidian 漫画库整理工人，不是理论裁判。

请把下面 DeepSeek 十元分析压缩成标准 Markdown 入库卡。

规则：
- 不新增理论判断。
- 不改 DeepSeek 给出的分数。
- 不扩写空话。
- 证据不足时，状态必须写：待二审。
- 每部漫画保留生链、克链、补链、主题特点、入库判断。

输出格式：

## 漫画名 ⭐评分 [优先级]

- 主题归属：
- 副主题：
- 十元对子：
- 在本主题里的特点：
- 生链：
- 克链：
- 补链：
- 入库判断：
- 来源：DeepSeek 十元分析；Qwen 本地整理
- 状态：待二审

DeepSeek 分析如下：

$ReportText
"@

$Body = @{
    model = $Model
    stream = $false
    think = $false
    messages = @(
        @{
            role = "user"
            content = $Prompt
        }
    )
} | ConvertTo-Json -Depth 8

$Response = Invoke-RestMethod `
    -Uri "http://127.0.0.1:11434/api/chat" `
    -Method Post `
    -Body $Body `
    -ContentType "application/json; charset=utf-8" `
    -TimeoutSec 300

$Content = $Response.message.content
if (-not $Content -and $Response.response) {
    $Content = $Response.response
}
if (-not $Content -and $Response.message.thinking) {
    $Content = $Response.message.thinking
}
if (-not $Content) {
    throw "Qwen returned empty content"
}

$CardStart = $Content.IndexOf("## ")
if ($CardStart -gt 0) {
    $Content = $Content.Substring($CardStart)
}

if ($Content -match "Thinking Process:" -and $CardStart -lt 0) {
    throw "Qwen returned thinking only; no markdown card found"
}

$LooksDirty = (
    $Content -match "\bWait,|\bActually,|\bLet's check|Thinking Process|Analyze the Request" -or
    $Content -match "##\s*漫画名称|##\s*\[Title\]|##\s*漫画名"
)

if ($LooksDirty) {
    function Get-FieldValue($Text, $Name) {
        $pattern = "\[$([regex]::Escape($Name))\]\s*(.+)"
        $m = [regex]::Match($Text, $pattern)
        if ($m.Success) { return $m.Groups[1].Value.Trim() }
        return ""
    }

    $manga = Get-FieldValue $ReportText "漫画名"
    $theme = Get-FieldValue $ReportText "主主题"
    $secondary = Get-FieldValue $ReportText "副主题，如无则写无"
    $pair = Get-FieldValue $ReportText "十元对子/动态链"
    $sheng = Get-FieldValue $ReportText "生链"
    $ke = Get-FieldValue $ReportText "克链"
    $bu = Get-FieldValue $ReportText "补链"
    $feature = Get-FieldValue $ReportText "在主主题里的特点"
    $score = Get-FieldValue $ReportText "评分"
    $priority = Get-FieldValue $ReportText "优先级"
    $decision = Get-FieldValue $ReportText "入库判断"

    if (-not $manga) { $manga = "未命名漫画" }
    if (-not $score) { $score = "待评" }
    if (-not $priority) { $priority = "待二审" }

    $Content = @(
        "## $manga ⭐$score [$priority]"
        ""
        "- 主题归属：$theme"
        "- 副主题：$secondary"
        "- 十元对子：$pair"
        "- 在本主题里的特点：$feature"
        "- 生链：$sheng"
        "- 克链：$ke"
        "- 补链：$bu"
        "- 入库判断：$decision"
        "- 来源：DeepSeek 十元分析；Qwen 本地整理"
        "- 状态：待二审"
    ) -join [Environment]::NewLine
}

$Header = @(
    "---"
    "type: qwen-compressed-manga-archive"
    "status: review"
    "created: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    "model: $Model"
    "source: $DeepSeekReport"
    "---"
    ""
)

Set-Content -Encoding UTF8 -LiteralPath $OutPath -Value ($Header + $Content)

if (-not (Test-Path -LiteralPath $Inbox)) {
    Set-Content -Encoding UTF8 -LiteralPath $Inbox -Value "# 千问十元待二审收集箱`n"
}

$InboxEntry = @(
    ""
    "## 漫画五大主题 Qwen整理 - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    ""
    "- model: $Model"
    "- deepseek_report: $DeepSeekReport"
    "- qwen_output: $OutPath"
    ""
    $Content
    ""
    "---"
)

Add-Content -Encoding UTF8 -LiteralPath $Inbox -Value $InboxEntry

Write-Output "qwen_output=$OutPath"
Write-Output "inbox=$Inbox"
