param(
    [string]$ComputerName = '100.73.131.99',
    [string]$Username = 'h3remote'
)

$winrm = Get-Service -Name WinRM -ErrorAction Stop
Write-Output "WinRM=$($winrm.Status) StartType=$($winrm.StartType)"
$credential = Get-Credential -UserName $Username -Message "Enter the remote Windows credential for $ComputerName"

try {
    Invoke-Command -ComputerName $ComputerName -Credential $credential -ErrorAction Stop -ScriptBlock {
        whoami
        hostname
    }
    exit 0
} catch {
    Write-Error $_.Exception.Message
    exit 1
}
