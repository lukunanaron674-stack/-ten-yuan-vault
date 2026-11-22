# R12 local Codex prelock — PowerShell 7/Windows. Does not certify independence.
param(
    [Parameter(Mandatory=$true)][string]$CaseInput,
    [string]$RepoPath = 'C:\work\ten-yuan-vault',
    [string]$RunRoot = (Join-Path $env:TEMP 'tenyuan-role-eval')
)
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
if (-not (Test-Path -LiteralPath $CaseInput)) { throw "Missing source-only case input: $CaseInput" }
if (-not (Test-Path -LiteralPath (Join-Path $RepoPath '.git'))) { throw "Missing Git repo: $RepoPath" }
$caseText = Get-Content -LiteralPath $CaseInput -Raw -Encoding utf8
if ($caseText -match '(?i)"(ground_truth|author_label|gold_label|sealed_answer)"\s*:') {
    throw 'The case input contains an answer-like key. Remove it before isolation.'
}
$stamp = Get-Date -Format 'yyyyMMdd_HHmmss'
$session = Join-Path $RunRoot $stamp
$room = Join-Path $session 'source_only'
New-Item -ItemType Directory -Path $room -Force | Out-Null
$casePath = Join-Path $room 'case_input.json'
Copy-Item -LiteralPath $CaseInput -Destination $casePath
$srcDir = Join-Path $RepoPath '01-十元系统'
Copy-Item -LiteralPath (Join-Path $srcDir '三元十元感受模型_核心正本_v1.0_20261007.md') -Destination (Join-Path $room 'tenyuan_core.md')
Copy-Item -LiteralPath (Join-Path $srcDir '十元体系密度卡总览.md') -Destination (Join-Path $room 'tenyuan_info_index.md')
$scriptDir = Join-Path $RepoPath '07-Codex大脑库\skills\ten-yuan-chain\scripts'
Copy-Item -LiteralPath (Join-Path $scriptDir 'role_output_schema.json') -Destination (Join-Path $room 'role_output_schema.json')
$predictionPath = Join-Path $session 'prediction_prelock.json'
$runLog = Join-Path $session 'codex_stdout_stderr.txt'
$checksLog = Join-Path $session 'python_tests.txt'
$gitHead = (& git -C $RepoPath rev-parse HEAD | Out-String).Trim()
$gitDirty = ((& git -C $RepoPath status --porcelain | Out-String).Trim().Length -gt 0)
$pythonVersion = ((& python --version 2>&1 | Out-String).Trim())
$version = 'NOT_INSTALLED'
$exitCode = 127
if (Get-Command codex -ErrorAction SilentlyContinue) {
    $version = ((& codex --version 2>&1 | Out-String).Trim())
    $prompt = '只读取当前工作目录中的 case_input.json、tenyuan_core.md、tenyuan_info_index.md。不要搜索或读取仓库其他电影卡、角色答案、用户记录或评分文件。必须先独立分析人物早中晚具体选择与代价，再区分人物长期主核、向往方向、表面行动、五维主题与观众感受。至少比较两个十元候选，输出证据ID、反例、删核测试、一个可证伪的新情境。证据不足就WAIT_EVIDENCE并写具体缺口，不要硬锁十元。本次是预测预锁，禁止自称作者确认或F3真人实测。结果仅输出符合schema的JSON。'
    & codex exec -C $room --sandbox read-only --output-schema (Join-Path $room 'role_output_schema.json') --output-last-message $predictionPath $prompt 2>&1 | Out-File -FilePath $runLog -Encoding utf8
    $exitCode = $LASTEXITCODE
} else {
    'CODEX_NOT_INSTALLED' | Set-Content -LiteralPath $runLog -Encoding utf8
}
& python -m unittest discover -s $scriptDir -p 'test_*.py' -q *>&1 | Out-File -FilePath $checksLog -Encoding utf8
$testExit = $LASTEXITCODE
$parseOK = $false
if (Test-Path -LiteralPath $predictionPath) {
    try { $null = (Get-Content -LiteralPath $predictionPath -Raw -Encoding utf8 | ConvertFrom-Json -ErrorAction Stop); $parseOK = $true }
    catch { $parseOK = $false }
}
$receipt = [ordered]@{
    runtime_status = if ($exitCode -eq 0 -and $parseOK) { 'LOCAL_CODEX_EXECUTED_PRELOCK_ONLY' } else { 'LOCAL_CODEX_NOT_VERIFIED' }
    local_codex_exit = $exitCode
    python_test_exit = $testExit
    json_parse_pass = $parseOK
    codex_version = $version
    python_version = $pythonVersion
    repo_commit = $gitHead
    repo_dirty = $gitDirty
    case_sha256 = (Get-FileHash -LiteralPath $casePath -Algorithm SHA256).Hash.ToLower()
    output_sha256 = if ($parseOK) { (Get-FileHash -LiteralPath $predictionPath -Algorithm SHA256).Hash.ToLower() } else { $null }
    independent_truth_verified = $false
    human_F3_verified = $false
    c_film_pass = $false
    note = 'This is a local prediction prelock only. Workspace separation does not prevent model memorization or certify a blind holdout. External reviewer must validate case scope and labels.'
}
$receipt | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $session 'run_receipt.json') -Encoding utf8
$receipt | ConvertTo-Json -Depth 5
if ($exitCode -ne 0 -or -not $parseOK -or $testExit -ne 0) { exit 2 }
exit 0
