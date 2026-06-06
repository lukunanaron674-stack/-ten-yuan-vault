$ErrorActionPreference = "Stop"

$Theme = "factor"
$Limit = 5

if ($args.Count -ge 1 -and $args[0]) {
    $Theme = [string]$args[0]
}

if ($args.Count -ge 2 -and $args[1]) {
    $Limit = [int]$args[1]
}

$Base = Split-Path -Parent $MyInvocation.MyCommand.Path
$Jsonl = Get-ChildItem -LiteralPath $Base -Filter "*.jsonl" |
    Where-Object { $_.Name -like "Hermes-*.jsonl" } |
    Select-Object -First 1 -ExpandProperty FullName

if (-not $Jsonl -or -not (Test-Path -LiteralPath $Jsonl)) {
    throw "Missing Hermes jsonl task list in: $Base"
}

$PromptDir = Join-Path $Base "Hermes-prompts"
if (-not (Test-Path -LiteralPath $PromptDir)) {
    New-Item -ItemType Directory -Path $PromptDir | Out-Null
}

$items = Get-Content -Encoding UTF8 -LiteralPath $Jsonl |
    Where-Object { $_.Trim().Length -gt 0 } |
    ForEach-Object { $_ | ConvertFrom-Json }

$batch = $items |
    Where-Object {
        ($_.theme -eq $Theme -or $_.formula -eq $Theme -or ($Theme -eq "factor" -and $_.formula -eq "zx+nx")) -and
        $_.status -eq "pending_standardization"
    } |
    Select-Object -First $Limit

if (-not $batch) {
    Write-Output "No pending manga for theme/formula: $Theme"
    exit 0
}

$Stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$DeepSeekPath = Join-Path $PromptDir "deepseek-$Stamp.txt"
$QwenPath = Join-Path $PromptDir "qwen-compress-$Stamp.txt"

$mangaLines = $batch | ForEach-Object {
    "- " + $_.manga + " | score=" + $_.score + " | theme=" + $_.theme + " " + $_.formula + " | current_feature=" + $_.current_feature
}

$deepseekLines = @(
    "Role: You are the Ten-Yuan manga archive judge.",
    "Task: Standardize this batch into the five manga themes.",
    "Primary goal: save tokens. Use only the compact input below. Do not ask for full summaries or long background.",
    "Do not write encyclopedic plot summaries. Focus on Ten-Yuan structure evidence only.",
    "",
    "Five themes:",
    "1. Ontology zn+x: inner burning / existence drive",
    "2. Time xn+z: rhythm pressure / precise timing",
    "3. Space x-and-z+n: field wrapping / stayable world",
    "4. Causality zx+nx: situation game / hidden causal flow",
    "5. Fate xz+nz: drifting fate / destined encounter",
    "",
    "Batch:"
)
$deepseekLines += $mangaLines
$deepseekLines += @(
    "",
    "For each manga, output exactly these fields:",
    "",
    "[manga]",
    "[main_theme]",
    "[secondary_theme_or_none]",
    "[ten_yuan_pair_or_dynamic_chain]",
    "[sheng_chain] valid/invalid + evidence",
    "[ke_chain] unique/not_unique + evidence",
    "[bu_chain] valid/invalid + evidence",
    "[theme_feature] one concrete sentence about the work structure",
    "[score] keep the given score unless you explain why",
    "[priority] S/A/B/review/waste",
    "[archive_decision] archive/review/do_not_archive",
    "[comment] 1-2 sentences",
    "",
    "Rules:",
    "- Token-saving rule: answer compactly; no long plot recap.",
    "- Do not infer Ten-Yuan only from the five-theme label.",
    "- Do not give high score just because the work is famous.",
    "- Do not use power level, popularity, or volume as scoring evidence.",
    "- If evidence is weak, mark review."
)

$qwenLines = @(
    "Role: You are the Obsidian manga archive formatter, not the theory judge.",
    "Task: Compress DeepSeek's Ten-Yuan analysis into standard Markdown archive cards.",
    "Primary goal: save tokens by making reusable Obsidian notes.",
    "Do not add new theory judgment. Do not change scores. Do not inflate vague comments.",
    "",
    "For each manga, output:",
    "",
    "## {{manga}} score={{score}} [{{priority}}]",
    "",
    "- theme:",
    "- secondary_theme:",
    "- ten_yuan_pair:",
    "- theme_feature:",
    "- sheng_chain:",
    "- ke_chain:",
    "- bu_chain:",
    "- archive_decision:",
    "- source: DeepSeek Ten-Yuan analysis; local Qwen formatting",
    "- status: review",
    "",
    "If DeepSeek evidence is weak, status must remain review."
)

Set-Content -Encoding UTF8 -LiteralPath $DeepSeekPath -Value ($deepseekLines -join [Environment]::NewLine)
Set-Content -Encoding UTF8 -LiteralPath $QwenPath -Value ($qwenLines -join [Environment]::NewLine)

Write-Output "deepseek_prompt=$DeepSeekPath"
Write-Output "qwen_prompt=$QwenPath"
Write-Output "count=$($batch.Count)"
$batch | ForEach-Object { Write-Output ("manga=" + $_.manga) }
