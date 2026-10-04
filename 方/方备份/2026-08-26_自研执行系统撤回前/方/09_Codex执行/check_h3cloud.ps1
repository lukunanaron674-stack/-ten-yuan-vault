param([string]$Target="h3cloud")
$ssh=Get-Command ssh -ErrorAction SilentlyContinue
if(-not $ssh){Write-Error "ssh.exe not found"; exit 2}
$out=& ssh -o BatchMode=yes -o ConnectTimeout=10 $Target "echo H3CLOUD_OK; hostname; command -v python3; command -v nvidia-smi" 2>&1
$out
if($LASTEXITCODE -ne 0){Write-Error "SSH handshake/remote shell failed; no task was submitted."; exit $LASTEXITCODE}
