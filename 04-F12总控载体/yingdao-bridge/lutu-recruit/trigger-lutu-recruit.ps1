param(
    [Parameter(Mandatory = $true)]
    [ValidateSet("1130", "1200")]
    [string]$Slot
)

$bridge = "C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge"
$commandPath = Join-Path $bridge "inbox\command.json"
$command = [ordered]@{
    action = "lutu_daily_recruit"
    status = "RUN_NOW"
    dispatchId = "lutu-$Slot-$([DateTimeOffset]::Now.ToUnixTimeMilliseconds())"
    slot = $Slot
    dailyBudget = 200
    halfPriceCost = 100
    dryRun = $false
    createdAt = [DateTimeOffset]::Now.ToString("o")
    note = "MuMu: only free plus half-price; never click the 200 full-price state."
}

$json = $command | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText($commandPath, $json, [System.Text.UTF8Encoding]::new($false))
