$ErrorActionPreference = "Stop"

if ($args.Count -lt 2) {
    Write-Output "Usage: hermes_update_manga_status.ps1 <manga> <status> [note]"
    Write-Output "status examples: completed, review, failed"
    exit 1
}

$Manga = [string]$args[0]
$NewStatus = [string]$args[1]
$Note = ""
if ($args.Count -ge 3) {
    $Note = [string]$args[2]
}

$Base = Split-Path -Parent $MyInvocation.MyCommand.Path
$Jsonl = Get-ChildItem -LiteralPath $Base -Filter "*.jsonl" |
    Where-Object { $_.Name -like "Hermes-*.jsonl" } |
    Select-Object -First 1 -ExpandProperty FullName

if (-not $Jsonl -or -not (Test-Path -LiteralPath $Jsonl)) {
    throw "Missing Hermes jsonl task list in: $Base"
}

$Ledger = $null
$mdFiles = Get-ChildItem -LiteralPath $Base -Filter "*.md"
foreach ($md in $mdFiles) {
    $head = Get-Content -Encoding UTF8 -LiteralPath $md.FullName -TotalCount 8
    if ($head -contains "type: progress-log") {
        $Ledger = $md.FullName
        break
    }
}

$items = Get-Content -Encoding UTF8 -LiteralPath $Jsonl |
    Where-Object { $_.Trim().Length -gt 0 } |
    ForEach-Object { $_ | ConvertFrom-Json }

$matched = $false
foreach ($item in $items) {
    if ($item.manga -eq $Manga) {
        $item.status = $NewStatus
        if ($NewStatus -eq "completed") {
            $item.deepseek = "done"
            $item.qwen = "done"
            $item.obsidian = "written"
        } elseif ($NewStatus -eq "review") {
            $item.deepseek = "done"
            $item.qwen = "done"
            $item.obsidian = "review_inbox"
        } elseif ($NewStatus -eq "failed") {
            $item.obsidian = "not_written"
        }
        $matched = $true
    }
}

if (-not $matched) {
    throw "Manga not found in task list: $Manga"
}

$items | ForEach-Object { $_ | ConvertTo-Json -Compress -Depth 5 } |
    Set-Content -Encoding UTF8 -LiteralPath $Jsonl

if ($Ledger -and (Test-Path -LiteralPath $Ledger)) {
    $stamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $entry = @(
        ""
        "## status update - $stamp"
        ""
        "- manga: $Manga"
        "- status: $NewStatus"
        "- note: $Note"
    )
    Add-Content -Encoding UTF8 -LiteralPath $Ledger -Value $entry
}

Write-Output "updated=$Manga"
Write-Output "status=$NewStatus"
Write-Output "jsonl=$Jsonl"
if ($Ledger) {
    Write-Output "ledger=$Ledger"
}
