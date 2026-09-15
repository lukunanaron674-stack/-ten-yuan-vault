param(
    [switch]$VisibleWindow
)

$ErrorActionPreference = 'Stop'
$Watcher = Join-Path $PSScriptRoot 'visual-inbox-watcher.ps1'
if (-not (Test-Path -LiteralPath $Watcher)) {
    throw "找不到 watcher：$Watcher"
}

$Inbox = Join-Path $HOME 'Downloads\十元视觉化'
New-Item -ItemType Directory -Path $Inbox -Force | Out-Null

$Startup = [Environment]::GetFolderPath('Startup')
$ShortcutPath = Join-Path $Startup 'TenYuan Visual Inbox Watcher.lnk'
$Shell = New-Object -ComObject WScript.Shell
$Shortcut = $Shell.CreateShortcut($ShortcutPath)
$Shortcut.TargetPath = "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe"
$windowArg = if ($VisibleWindow) { '' } else { '-WindowStyle Hidden ' }
$Shortcut.Arguments = "-NoProfile -ExecutionPolicy Bypass $windowArg-File `"$Watcher`""
$Shortcut.WorkingDirectory = $PSScriptRoot
$Shortcut.Description = 'Ten Yuan Visual Inbox automatic Git importer'
$Shortcut.Save()

Write-Host ''
Write-Host '已安装 Visual Inbox 开机自启。'
Write-Host "Inbox:    $Inbox"
Write-Host "Shortcut: $ShortcutPath"
Write-Host ''
Write-Host '现在无需重启也可直接双击 start-visual-inbox.cmd 启动。'
