[CmdletBinding()]
param(
    [Parameter(Mandatory=$true)]
    [ValidateScript({ Test-Path -LiteralPath $_ -PathType Leaf })]
    [string]$ResultJson,

    [string]$Repo = (Split-Path -Parent (Split-Path -Parent (Split-Path -Parent $PSScriptRoot))),
    [string]$Remote = 'origin',
    [string]$Branch = 'codex/local-review-results'
)

$ErrorActionPreference = 'Stop'

function Invoke-Git {
    param([Parameter(Mandatory=$true)][string[]]$Args)
    & git -C $Repo @Args
    if ($LASTEXITCODE -ne 0) { throw "git failed: $($Args -join ' ')" }
}

$result = Get-Content -LiteralPath $ResultJson -Raw -Encoding UTF8 | ConvertFrom-Json
$required = 'task_id','task_version','asset_id','review_status','summary'
foreach ($name in $required) {
    if ([string]::IsNullOrWhiteSpace([string]$result.$name)) { throw "missing required field: $name" }
}

$allowed = 'PASS','RETRY','REPLAN','BLOCKED'
if ($allowed -notcontains ([string]$result.review_status).ToUpperInvariant()) {
    throw 'review_status must be PASS, RETRY, REPLAN, or BLOCKED'
}

# The cloud callback is text-only. Reject image/path payloads instead of silently publishing them.
$forbidden = 'image','images','image_path','file_path','absolute_path','sha256','hash','attachment','canvas_path'
foreach ($name in $forbidden) {
    if ($null -ne $result.PSObject.Properties[$name]) { throw "text-only callback rejects field: $name" }
}

$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$safeTask = ([string]$result.task_id -replace '[^A-Za-z0-9._-]','_')
$temp = Join-Path ([IO.Path]::GetTempPath()) ("tenyuan-review-" + [guid]::NewGuid().ToString('N'))
$callbackDir = Join-Path $temp '黎黎隆项目\20_Agent系统\06_验证\本地审图回传'
$worktreeAdded = $false

try {
    Invoke-Git @('fetch', $Remote, 'main')
    $base = "$Remote/main"
    $remoteBranch = & git -C $Repo ls-remote --heads $Remote $Branch 2>$null
    if ($LASTEXITCODE -eq 0 -and $remoteBranch) {
        Invoke-Git @('fetch', $Remote, $Branch)
        $base = "$Remote/$Branch"
    }

    New-Item -ItemType Directory -Force -Path $temp | Out-Null
    Invoke-Git @('worktree','add','--detach',$temp,$base)
    $worktreeAdded = $true
    New-Item -ItemType Directory -Force -Path $callbackDir | Out-Null

    $out = Join-Path $callbackDir ("${safeTask}_${stamp}.md")
    $summary = ([string]$result.summary).Trim()
    $status = ([string]$result.review_status).ToUpperInvariant()
    $lines = @(
        '---'
        ('task_id: ' + [string]$result.task_id)
        ('task_version: ' + [string]$result.task_version)
        ('asset_id: ' + [string]$result.asset_id)
        ('review_status: ' + $status)
        'source: local_asset_agent'
        'image_transfer: none'
        '---'
        ''
        '# Local asset review result'
        ''
        ('task: ' + [string]$result.task_id)
        ('version: ' + [string]$result.task_version)
        ('asset: ' + [string]$result.asset_id)
        ('decision: ' + $status)
        ('summary: ' + $summary)
        ''
        '> Text result only. Image files and local paths stay on the local machine.'
    )
    Set-Content -LiteralPath $out -Value $lines -Encoding UTF8

    $relativeOut = $out.Substring($temp.Length + 1)
    & git -C $temp add $relativeOut
    if ($LASTEXITCODE -ne 0) { throw "git add failed" }
    & git -C $temp -c "user.name=local-review-agent" -c "user.email=local-review-agent@localhost" commit -m "review: return local asset result $($result.task_id)"
    if ($LASTEXITCODE -ne 0) { throw "git commit failed" }
    & git -C $temp push $Remote "HEAD:refs/heads/$Branch"
    if ($LASTEXITCODE -ne 0) { throw "git push failed" }
    Write-Output ("PUBLISHED_TEXT_ONLY branch={0} file={1}" -f $Branch, $relativeOut)
}
finally {
    if ($worktreeAdded) { & git -C $Repo worktree remove --force $temp 2>$null }
    if (Test-Path -LiteralPath $temp) { Remove-Item -LiteralPath $temp -Recurse -Force -ErrorAction SilentlyContinue }
}
