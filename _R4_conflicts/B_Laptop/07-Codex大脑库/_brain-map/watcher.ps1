# Ten Yuan Brain Map - File Watcher
# Monitors _brain-map/ and nodes/ for changes, appends to events.jsonl

param(
    [string]$BaseDir = "$PSScriptRoot",
    [string]$EventsFile = "$PSScriptRoot\events.jsonl",
    [int]$IdleSeconds = 2
)

$Script:LastEvent = Get-Date
$Script:IdleTimer = $null
$Script:Changes = @()

function Write-Event($changes) {
    $entry = @{
        time = (Get-Date -Format "yyyy-MM-ddTHH:mm:ss")
        event = "file_change"
        changed = $changes
    } | ConvertTo-Json -Compress
    Add-Content -Path $EventsFile -Value $entry -Encoding UTF8
    Write-Host "[EVENT] $entry"
}

function Flush-Changes {
    if ($Script:Changes.Count -gt 0) {
        Write-Event $Script:Changes
        $Script:Changes = @()
    }
    $Script:IdleTimer = $null
}

$Watcher = [System.IO.FileSystemWatcher]::new()
$Watcher.Path = $BaseDir
$Watcher.IncludeSubdirectories = $true
$Watcher.NotifyFilter = [System.IO.NotifyFilters]::FileName -bor
                        [System.IO.NotifyFilters]::LastWrite -bor
                        [System.IO.NotifyFilters]::Size
$Watcher.Filter = "*"

$Action = {
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType

    if ($path -match 'events\.jsonl$') { return }
    if ($path -match '\.git') { return }
    if ($path -match '\.obsidian') { return }

    $relPath = $path.Replace($BaseDir + '\', '')
    $Script:Changes += "$changeType`: $relPath"
    $Script:LastEvent = Get-Date

    if ($Script:IdleTimer) {
        $Script:IdleTimer.Stop()
        $Script:IdleTimer.Dispose()
    }
    $Script:IdleTimer = [System.Timers.Timer]::new($IdleSeconds * 1000)
    $Script:IdleTimer.AutoReset = $false
    $Script:IdleTimer.add_Elapsed({ Flush-Changes })
    $Script:IdleTimer.Start()
}

$handlers = @(
    [System.IO.FileSystemEventHandler]$Action,
    [System.IO.RenamedEventHandler]$Action
)

Register-ObjectEvent -InputObject $Watcher -EventName Created  -Action $Action -SourceIdentifier "FSCreated"  | Out-Null
Register-ObjectEvent -InputObject $Watcher -EventName Changed  -Action $Action -SourceIdentifier "FSChanged"  | Out-Null
Register-ObjectEvent -InputObject $Watcher -EventName Deleted  -Action $Action -SourceIdentifier "FSDeleted"  | Out-Null
Register-ObjectEvent -InputObject $Watcher -EventName Renamed  -Action $Action -SourceIdentifier "FSRenamed"  | Out-Null

$Watcher.EnableRaisingEvents = $true

Write-Host "Watching: $BaseDir"
Write-Host "Events:  $EventsFile"
Write-Host "Press Ctrl+C to stop..."

try {
    while ($true) { Start-Sleep -Seconds 1 }
} finally {
    Unregister-Event -SourceIdentifier "FSCreated"  -ErrorAction SilentlyContinue
    Unregister-Event -SourceIdentifier "FSChanged"  -ErrorAction SilentlyContinue
    Unregister-Event -SourceIdentifier "FSDeleted"  -ErrorAction SilentlyContinue
    Unregister-Event -SourceIdentifier "FSRenamed"  -ErrorAction SilentlyContinue
    $Watcher.Dispose()
    Write-Host "Watcher stopped."
}
