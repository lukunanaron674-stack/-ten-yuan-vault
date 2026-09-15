param(
    [Parameter(Mandatory=$true)]
    [ValidateSet('AUDIT','STYLE','REL','CHAIN','AXIS','ZN','DSL','INBOX')]
    [string]$Module,

    [Parameter(Mandatory=$true)]
    [string]$Target,

    [string]$Round = 'R1',
    [string[]]$Roles = @('POS','NEAR','NEG')
)

$ErrorActionPreference = 'Stop'
$ContextFile = Join-Path $PSScriptRoot 'visual-inbox-context.json'

$ctx = [ordered]@{
    module = $Module.ToUpperInvariant()
    target = $Target.ToUpperInvariant()
    round = $Round.ToUpperInvariant()
    roles = @($Roles | ForEach-Object { $_.ToUpperInvariant() })
    updated_at = (Get-Date -Format 'yyyy-MM-ddTHH:mm:ssK')
}

$ctx | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath $ContextFile -Encoding UTF8

Write-Host ''
Write-Host 'Visual Inbox context updated:'
Write-Host "  module = $($ctx.module)"
Write-Host "  target = $($ctx.target)"
Write-Host "  round  = $($ctx.round)"
Write-Host "  roles  = $($ctx.roles -join ' -> ')"
Write-Host ''
Write-Host '之后下载到 Downloads\十元视觉化 的普通图片会按此上下文自动编号。'
