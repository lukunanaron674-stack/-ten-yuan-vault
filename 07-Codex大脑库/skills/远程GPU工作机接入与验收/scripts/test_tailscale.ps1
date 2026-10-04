param(
    [string]$TargetIp = '100.73.131.99',
    [int]$Port = 22
)

$tailscalePath = (Get-Command tailscale.exe -ErrorAction SilentlyContinue).Source
if (-not $tailscalePath -and (Test-Path -LiteralPath 'C:\Program Files\Tailscale\tailscale.exe')) {
    $tailscalePath = 'C:\Program Files\Tailscale\tailscale.exe'
}

if ($tailscalePath) {
    Write-Output '--- tailscale status ---'
    & $tailscalePath status 2>&1
} else {
    Write-Error 'tailscale.exe not found'
    exit 2
}

$pingOk = Test-Connection -ComputerName $TargetIp -Count 2 -Quiet -ErrorAction SilentlyContinue
$tcp = Test-NetConnection -ComputerName $TargetIp -Port $Port -InformationLevel Quiet -WarningAction SilentlyContinue

[pscustomobject]@{
    TargetIp = $TargetIp
    PingSucceeded = [bool]$pingOk
    TcpPort = $Port
    TcpSucceeded = [bool]$tcp
} | Format-List

if (-not $pingOk -or -not $tcp) { exit 1 }
exit 0
