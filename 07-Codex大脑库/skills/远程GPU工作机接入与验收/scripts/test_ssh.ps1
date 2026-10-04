param(
    [string]$Alias = 'h3',
    [string]$KeyPath = "$env:USERPROFILE\.ssh\h3_4090"
)

if (-not (Test-Path -LiteralPath $KeyPath)) {
    Write-Error "SSH private key not found: $KeyPath"
    exit 2
}

$sshArgs = @(
    '-i', $KeyPath,
    '-o', 'IdentitiesOnly=yes',
    '-o', 'BatchMode=yes',
    '-o', 'ConnectTimeout=10',
    '-o', 'ConnectionAttempts=1',
    $Alias,
    'whoami && hostname'
)

& ssh.exe @sshArgs 2>&1
$exitCode = $LASTEXITCODE
if ($exitCode -ne 0) {
    Write-Output "SSH_RESULT=FAILED exit=$exitCode"
    exit $exitCode
}
Write-Output 'SSH_RESULT=SUCCESS'
exit 0
