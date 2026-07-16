param(
    [switch]$Once,
    [int]$IntervalSeconds = 30
)

$ErrorActionPreference = "Stop"
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$configPath = Join-Path $scriptRoot "watch-config.json"
$runtimeRoot = Join-Path $env:LOCALAPPDATA "TenYuanCanvasDriveBridge"
$statePath = Join-Path $runtimeRoot "state.json"
$logPath = Join-Path $runtimeRoot "watch.log"
$backupRoot = "C:\Users\19308\Documents\Obsidian\ten-yuan-vault-backups\canvas-drive-bridge"

New-Item -ItemType Directory -Path $runtimeRoot -Force | Out-Null
New-Item -ItemType Directory -Path $backupRoot -Force | Out-Null
Add-Type -AssemblyName System.Drawing

function Write-BridgeLog {
    param([string]$Message)
    $line = "{0} {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Message
    Add-Content -LiteralPath $logPath -Value $line -Encoding UTF8
}

function Read-BridgeState {
    if (-not (Test-Path -LiteralPath $statePath)) {
        return @{}
    }

    try {
        $raw = Get-Content -LiteralPath $statePath -Raw -Encoding UTF8
        $object = $raw | ConvertFrom-Json
        $result = @{}
        foreach ($property in $object.PSObject.Properties) {
            $result[$property.Name] = $property.Value
        }
        return $result
    }
    catch {
        Write-BridgeLog "STATE_READ_FAILED $($_.Exception.Message)"
        return @{}
    }
}

function Save-BridgeState {
    param([hashtable]$State)
    $temporaryPath = "$statePath.tmp"
    $State | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $temporaryPath -Encoding UTF8
    Move-Item -LiteralPath $temporaryPath -Destination $statePath -Force
}

function Wait-ForStableFile {
    param([string]$Path)
    $file = Get-Item -LiteralPath $Path
    return ((Get-Date).ToUniversalTime() - $file.LastWriteTimeUtc).TotalSeconds -ge 10
}

function Update-CanvasReference {
    param(
        [string]$CanvasPath,
        [string]$NodeId,
        [string]$ExpectedReference,
        [string]$BackupDirectory
    )

    $text = [System.IO.File]::ReadAllText($CanvasPath, [System.Text.Encoding]::UTF8)
    $json = $text | ConvertFrom-Json
    $node = $json.nodes | Where-Object { $_.id -eq $NodeId -and $_.type -eq "file" } | Select-Object -First 1
    if (-not $node) {
        throw "Canvas image node not found: $NodeId"
    }
    if ($node.file -eq $ExpectedReference) {
        return $false
    }

    New-Item -ItemType Directory -Path $BackupDirectory -Force | Out-Null
    Copy-Item -LiteralPath $CanvasPath -Destination (Join-Path $BackupDirectory (Split-Path -Leaf $CanvasPath)) -Force

    $escapedId = [regex]::Escape($NodeId)
    $pattern = '(?s)("id"\s*:\s*"' + $escapedId + '".*?"file"\s*:\s*")[^"]+("\s*,)'
    $replacement = '${1}' + $ExpectedReference + '${2}'
    $updated = [regex]::Replace($text, $pattern, $replacement, 1)
    if ($updated -eq $text) {
        throw "Canvas reference replacement failed: $NodeId"
    }

    $null = $updated | ConvertFrom-Json
    [System.IO.File]::WriteAllText($CanvasPath, $updated, [System.Text.UTF8Encoding]::new($false))
    return $true
}

function Invoke-BridgeScan {
    $config = Get-Content -LiteralPath $configPath -Raw -Encoding UTF8 | ConvertFrom-Json
    $state = Read-BridgeState
    $stateChanged = $false

    foreach ($job in $config.jobs) {
        if (-not (Test-Path -LiteralPath $job.sourceDirectory)) {
            Write-BridgeLog "SOURCE_OFFLINE job=$($job.id) path=$($job.sourceDirectory)"
            continue
        }
        if (-not (Test-Path -LiteralPath $job.targetCanvas)) {
            Write-BridgeLog "CANVAS_MISSING job=$($job.id) path=$($job.targetCanvas)"
            continue
        }

        $files = Get-ChildItem -LiteralPath $job.sourceDirectory -File -Filter $job.filePattern | Sort-Object Name
        foreach ($sourceFile in $files) {
            try {
                if (-not (Wait-ForStableFile -Path $sourceFile.FullName)) {
                    Write-BridgeLog "FILE_NOT_STABLE job=$($job.id) file=$($sourceFile.Name)"
                    continue
                }

                $sourceHash = (Get-FileHash -LiteralPath $sourceFile.FullName -Algorithm SHA256).Hash
                $stateKey = "$($job.id)|$($sourceFile.Name)"
                $targetFileName = $sourceFile.BaseName + $job.destinationSuffix + $sourceFile.Extension
                $targetPath = Join-Path $job.targetAssetDirectory $targetFileName

                if ((Test-Path -LiteralPath $targetPath) -and
                    (Get-FileHash -LiteralPath $targetPath -Algorithm SHA256).Hash -eq $sourceHash) {
                    if ($state[$stateKey] -ne $sourceHash) {
                        $state[$stateKey] = $sourceHash
                        $stateChanged = $true
                    }
                    continue
                }

                $image = [System.Drawing.Image]::FromFile($sourceFile.FullName)
                try {
                    if ($image.Width -lt $job.minimumWidth -or $image.Height -lt $job.minimumHeight) {
                        throw "Image too small: $($image.Width)x$($image.Height)"
                    }
                }
                finally {
                    $image.Dispose()
                }

                if ($sourceFile.BaseName -notmatch '^(n\d+)_') {
                    throw "Filename does not contain a node prefix: $($sourceFile.Name)"
                }
                $nodeId = "img_$($Matches[1])"
                $expectedReference = "$($job.canvasAssetRelativeDirectory)/$targetFileName"
                $timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
                $backupDirectory = Join-Path $backupRoot "$($job.id)-$timestamp"
                New-Item -ItemType Directory -Path $backupDirectory -Force | Out-Null

                if (Test-Path -LiteralPath $targetPath) {
                    Copy-Item -LiteralPath $targetPath -Destination (Join-Path $backupDirectory $targetFileName) -Force
                }

                New-Item -ItemType Directory -Path $job.targetAssetDirectory -Force | Out-Null
                $temporaryTarget = "$targetPath.bridge-tmp"
                Copy-Item -LiteralPath $sourceFile.FullName -Destination $temporaryTarget -Force
                if ((Get-FileHash -LiteralPath $temporaryTarget -Algorithm SHA256).Hash -ne $sourceHash) {
                    Remove-Item -LiteralPath $temporaryTarget -Force
                    throw "Temporary copy hash mismatch"
                }
                Move-Item -LiteralPath $temporaryTarget -Destination $targetPath -Force

                $canvasChanged = Update-CanvasReference -CanvasPath $job.targetCanvas -NodeId $nodeId -ExpectedReference $expectedReference -BackupDirectory $backupDirectory
                if ((Get-FileHash -LiteralPath $targetPath -Algorithm SHA256).Hash -ne $sourceHash) {
                    throw "Destination hash mismatch"
                }

                $state[$stateKey] = $sourceHash
                $stateChanged = $true
                Write-BridgeLog "SYNCED job=$($job.id) file=$($sourceFile.Name) node=$nodeId canvasChanged=$canvasChanged sha256=$sourceHash"
            }
            catch {
                Write-BridgeLog "SYNC_FAILED job=$($job.id) file=$($sourceFile.Name) error=$($_.Exception.Message)"
            }
        }
    }

    if ($stateChanged) {
        Save-BridgeState -State $state
    }
}

Write-BridgeLog "WATCHER_STARTED once=$Once interval=$IntervalSeconds"
do {
    Invoke-BridgeScan
    if (-not $Once) {
        Start-Sleep -Seconds $IntervalSeconds
    }
} while (-not $Once)
