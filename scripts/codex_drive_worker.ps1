[CmdletBinding()]
param(
    [Parameter(Mandatory = $false)]
    [string]$ConfigPath = "$PSScriptRoot\worker_config.json",

    [Parameter(Mandatory = $false)]
    [switch]$Once
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Write-Log {
    param([string]$Message)
    $stamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Host "[$stamp] $Message"
}

function Read-WorkerConfig {
    param([string]$Path)
    if (-not (Test-Path -LiteralPath $Path)) {
        throw "配置文件不存在：$Path"
    }

    $config = Get-Content -LiteralPath $Path -Raw -Encoding UTF8 | ConvertFrom-Json
    foreach ($field in @("repo_path", "queue_root")) {
        if (-not $config.PSObject.Properties.Name.Contains($field) -or [string]::IsNullOrWhiteSpace($config.$field)) {
            throw "配置缺少字段：$field"
        }
    }

    if (-not (Test-Path -LiteralPath $config.repo_path -PathType Container)) {
        throw "仓库目录不存在：$($config.repo_path)"
    }
    if (-not (Test-Path -LiteralPath (Join-Path $config.repo_path ".git"))) {
        throw "目标目录不是 Git 仓库：$($config.repo_path)"
    }
    if (-not (Test-Path -LiteralPath $config.queue_root -PathType Container)) {
        New-Item -ItemType Directory -Path $config.queue_root -Force | Out-Null
    }

    if (-not $config.PSObject.Properties.Name.Contains("poll_seconds")) {
        $config | Add-Member -NotePropertyName poll_seconds -NotePropertyValue 60
    }
    return $config
}

function Get-ReadyTask {
    param([string]$QueueRoot)

    $tasks = Get-ChildItem -LiteralPath $QueueRoot -Directory -ErrorAction SilentlyContinue |
        Where-Object {
            (Test-Path -LiteralPath (Join-Path $_.FullName "READY.flag")) -and
            (Test-Path -LiteralPath (Join-Path $_.FullName "TASK.md")) -and
            (Test-Path -LiteralPath (Join-Path $_.FullName "manifest.json")) -and
            -not (Test-Path -LiteralPath (Join-Path $_.FullName "DONE.json")) -and
            -not (Test-Path -LiteralPath (Join-Path $_.FullName "PROCESSING.lock"))
        } |
        Sort-Object LastWriteTime

    return $tasks | Select-Object -First 1
}

function Invoke-CodexTask {
    param(
        [System.IO.DirectoryInfo]$TaskDirectory,
        [string]$RepoPath
    )

    $taskId = $TaskDirectory.Name
    $taskFile = Join-Path $TaskDirectory.FullName "TASK.md"
    $manifestFile = Join-Path $TaskDirectory.FullName "manifest.json"
    $lockFile = Join-Path $TaskDirectory.FullName "PROCESSING.lock"
    $resultFile = Join-Path $TaskDirectory.FullName "CODEX_RESULT.md"
    $logFile = Join-Path $TaskDirectory.FullName "CODEX_STDERR.log"
    $failedFile = Join-Path $TaskDirectory.FullName "FAILED.json"
    $doneFile = Join-Path $TaskDirectory.FullName "DONE.json"

    if (Test-Path -LiteralPath $failedFile) {
        Remove-Item -LiteralPath $failedFile -Force
    }

    Set-Content -LiteralPath $lockFile -Encoding UTF8 -Value @"
{
  "task_id": "$taskId",
  "started_at": "$(Get-Date -Format o)",
  "repo_path": "$($RepoPath.Replace('\','\\'))"
}
"@

    $taskText = Get-Content -LiteralPath $taskFile -Raw -Encoding UTF8
    $manifestText = Get-Content -LiteralPath $manifestFile -Raw -Encoding UTF8

    $prompt = @"
你正在执行一个由 ChatGPT 通过 Google Drive 交接的本地仓库任务。

任务目录：$($TaskDirectory.FullName)
仓库目录：$RepoPath
TASK.md：$taskFile
manifest.json：$manifestFile

必须先完整读取 TASK.md 和 manifest.json，再执行。
不得把 Drive 中的图片重新编码、缩小、转格式或改名，除非 TASK.md 明确要求。
不得直接修改 main。必须创建或使用 manifest 指定的 codex/<task-id> 分支。
必须验证 Canvas JSON、所有图片路径、图片尺寸和 SHA256。
必须提交、推送并创建 PR，但不得合并。
成功后必须在任务目录写入 DONE.json，至少包含：task_id、branch、commit_sha、pr_url、changed_files、validation、completed_at。
失败时不要伪造 DONE.json，应在最终回复里明确失败原因。

以下为 TASK.md 内容：
---
$taskText
---

以下为 manifest.json 内容：
---
$manifestText
---
"@

    Write-Log "开始任务：$taskId"
    Push-Location -LiteralPath $RepoPath
    try {
        $prompt | & codex exec --sandbox workspace-write --ephemeral -o $resultFile - 2> $logFile
        $exitCode = $LASTEXITCODE
    }
    finally {
        Pop-Location
    }

    if ($exitCode -ne 0) {
        $failure = [ordered]@{
            task_id = $taskId
            exit_code = $exitCode
            failed_at = (Get-Date -Format o)
            result_file = $resultFile
            log_file = $logFile
        }
        $failure | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $failedFile -Encoding UTF8
        throw "Codex 执行失败，退出码：$exitCode"
    }

    if (-not (Test-Path -LiteralPath $doneFile)) {
        $failure = [ordered]@{
            task_id = $taskId
            exit_code = $exitCode
            failed_at = (Get-Date -Format o)
            reason = "Codex 返回成功，但没有生成 DONE.json"
            result_file = $resultFile
            log_file = $logFile
        }
        $failure | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $failedFile -Encoding UTF8
        throw "任务没有生成 DONE.json，不视为完成"
    }

    Write-Log "任务完成：$taskId"
}

$config = Read-WorkerConfig -Path $ConfigPath
Write-Log "仓库：$($config.repo_path)"
Write-Log "任务队列：$($config.queue_root)"

while ($true) {
    try {
        $task = Get-ReadyTask -QueueRoot $config.queue_root
        if ($null -ne $task) {
            try {
                Invoke-CodexTask -TaskDirectory $task -RepoPath $config.repo_path
            }
            catch {
                Write-Log "任务失败：$($_.Exception.Message)"
            }
            finally {
                $lock = Join-Path $task.FullName "PROCESSING.lock"
                if (Test-Path -LiteralPath $lock) {
                    Remove-Item -LiteralPath $lock -Force
                }
            }
        }
        elseif ($Once) {
            Write-Log "没有待执行任务。"
        }
    }
    catch {
        Write-Log "监听错误：$($_.Exception.Message)"
    }

    if ($Once) { break }
    Start-Sleep -Seconds ([int]$config.poll_seconds)
}
