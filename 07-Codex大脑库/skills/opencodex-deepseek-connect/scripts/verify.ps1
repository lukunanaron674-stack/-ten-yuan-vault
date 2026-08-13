# Quick DeepSeek-connection self-check for a fresh Codex conversation.
$ok = $true
Write-Output "== 1. proxy health =="
try {
  $h = curl.exe -sS --noproxy "*" http://127.0.0.1:10100/healthz
  Write-Output $h
  if ($h -notmatch '"status":"ok"') { $ok = $false }
} catch { Write-Output "FAIL: $($_.Exception.Message)"; $ok = $false }

Write-Output "== 2. scheduled task =="
$t = Get-ScheduledTask -TaskName opencodex-proxy -ErrorAction SilentlyContinue
if ($t) { Write-Output "opencodex-proxy: $($t.State)" } else { Write-Output "TASK MISSING"; $ok = $false }

Write-Output "== 3. config.toml proxy line =="
$cfg = Get-Content "C:\Users\19308\.codex\config.toml" -Raw -ErrorAction SilentlyContinue
if ($cfg -match 'openai_base_url\s*=\s*"http://127\.0\.0\.1:10100/v1"') { Write-Output "openai_base_url OK" } else { Write-Output "openai_base_url MISSING"; $ok = $false }

Write-Output "== 4. deepseek key =="
$oc = Get-Content "C:\Users\19308\.opencodex\config.json" -Raw -ErrorAction SilentlyContinue
if ($oc -match 'sk-') { Write-Output "key present in config.json" } elseif ($env:DEEPSEEK_API_KEY) { Write-Output "key present in env" } else { Write-Output "KEY MISSING"; $ok = $false }

Write-Output "== 5. catalog =="
$cat = Get-Content "C:\Users\19308\.codex\opencodex-catalog.json" -Raw -ErrorAction SilentlyContinue
if ($cat -match 'deepseek-v4-flash') { Write-Output "catalog has deepseek-v4-flash" } else { Write-Output "CATALOG MISSING deepseek"; $ok = $false }

if ($ok) { Write-Output "RESULT: ALL OK - pick deepseek/deepseek-v4-flash in the model picker" } else { Write-Output "RESULT: ISSUES FOUND - follow SKILL.md restore steps" }
