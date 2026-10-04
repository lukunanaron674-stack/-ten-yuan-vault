param(
    [string]$ComputerName = '100.73.131.99',
    [string]$Username = 'h3remote',
    [switch]$WriteProbe
)

$credential = Get-Credential -UserName $Username -Message "Enter the remote Windows credential for $ComputerName"

try {
    Invoke-Command -ComputerName $ComputerName -Credential $credential -ErrorAction Stop -ArgumentList ([bool]$WriteProbe) -ScriptBlock {
        param([bool]$DoWriteProbe)
        $profileDir = 'C:\Users\h3remote'
        $comfyDir = 'C:\ComfyUI'
        $sshdConfig = 'C:\ProgramData\ssh\sshd_config'
        $user = Get-LocalUser -Name 'h3remote' -ErrorAction SilentlyContinue
        $result = [ordered]@{
            Identity = (& whoami)
            Hostname = (& hostname)
            ProfileExists = Test-Path -LiteralPath $profileDir
            ProfileNtUserDat = Test-Path -LiteralPath (Join-Path $profileDir 'NTUSER.DAT')
            AuthorizedKeysExists = Test-Path -LiteralPath (Join-Path $profileDir '.ssh\authorized_keys')
            SSHDConfigExists = Test-Path -LiteralPath $sshdConfig
            ComfyUIExists = Test-Path -LiteralPath $comfyDir
            ComfyModelsExists = Test-Path -LiteralPath (Join-Path $comfyDir 'models')
            ComfyInputExists = Test-Path -LiteralPath (Join-Path $comfyDir 'input')
            ComfyOutputExists = Test-Path -LiteralPath (Join-Path $comfyDir 'output')
            UserEnabled = if ($user) { $user.Enabled } else { $false }
            UserPasswordExpires = if ($user) { $user.PasswordExpires } else { $null }
        }
        if ($DoWriteProbe -and $result.ComfyOutputExists) {
            $probe = Join-Path $comfyDir ('output\.remote-healthcheck-' + $env:COMPUTERNAME)
            [IO.File]::WriteAllText($probe, 'remote-healthcheck')
            $result.WriteProbe = Test-Path -LiteralPath $probe
            Remove-Item -LiteralPath $probe -Force
            $result.WriteProbeCleaned = -not (Test-Path -LiteralPath $probe)
        } else {
            $result.WriteProbe = 'not_requested'
        }
        [pscustomobject]$result | Format-List
    }
    exit 0
} catch {
    Write-Error $_.Exception.Message
    exit 1
}
