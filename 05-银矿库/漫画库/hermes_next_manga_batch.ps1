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

Write-Output "manga_batch_archive:"
$batch | ForEach-Object { Write-Output $_.manga }

Write-Output ""
Write-Output "# metadata"
Write-Output "theme=$Theme"
Write-Output "count=$($batch.Count)"
Write-Output "source=$Jsonl"
