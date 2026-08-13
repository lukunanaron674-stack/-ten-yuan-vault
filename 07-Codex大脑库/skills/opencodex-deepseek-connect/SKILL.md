---
name: opencodex-deepseek-connect
description: Connect a fresh Codex conversation to DeepSeek through the local opencodex proxy on 127.0.0.1:10100. Use when the user asks to use DeepSeek models (deepseek/deepseek-v4-flash or deepseek/deepseek-v4-pro), when Codex loses connection or shows "connection lost" / "连不上网" after picking a DeepSeek model, when the model picker is missing DeepSeek entries, or when ~/.codex/config.toml has lost its openai_base_url proxy line. Covers verify, restore, and troubleshooting only; do not use for Ten Yuan F12 automation (use deepseek-f12-operator instead).
---

# OpenCodex DeepSeek Connect

Routes Codex Desktop through the local opencodex proxy so DeepSeek models work in any conversation. The proxy translates Codex Responses API calls into DeepSeek chat completions.

## Architecture

```text
Codex Desktop (any conversation)
  -> ~/.codex/config.toml: openai_base_url = "http://127.0.0.1:10100/v1"
    -> opencodex proxy (port 10100, scheduled task opencodex-proxy)
      -> DeepSeek API (api.deepseek.com, key from env DEEPSEEK_API_KEY / config.json apiKeyPool)
```

## Canonical Paths

- Proxy config: `C:\Users\19308\.opencodex\config.json`
- Service log: `C:\Users\19308\.opencodex\service.log`
- Usage trail: `C:\Users\19308\.opencodex\usage.jsonl`
- Codex root override template: `C:\Users\19308\.codex\opencodex.config.toml`
- Model catalog: `C:\Users\19308\.codex\opencodex-catalog.json` (contains `deepseek/deepseek-v4-flash` and `deepseek/deepseek-v4-pro`)
- Obsidian backup: `07-Codex大脑库\skills\opencodex-deepseek-connect\`

## First Command

Always verify before changing anything:

```powershell
curl.exe -sS --noproxy "*" http://127.0.0.1:10100/healthz
```

Expect `{"status":"ok","service":"opencodex",...}`. Then confirm the scheduled task is running:

```powershell
Get-ScheduledTask -TaskName opencodex-proxy | Select-Object TaskName,State
```

## Verify End-to-End

1. Confirm `~/.codex/config.toml` contains both root keys:
   `openai_base_url = "http://127.0.0.1:10100/v1"` and `model_catalog_json = "C:\\Users\\19308\\.codex\\opencodex-catalog.json"`.
2. Confirm the DeepSeek key exists: env `DEEPSEEK_API_KEY` or `apiKeyPool[].key` in `C:\Users\19308\.opencodex\config.json`.
3. Send a real request through the proxy:

```powershell
curl.exe -sS --noproxy "*" -X POST http://127.0.0.1:10100/v1/responses -H "Content-Type: application/json" -d '{\"model\":\"deepseek/deepseek-v4-pro\",\"input\":\"hi\",\"max_output_tokens\":16}'
```

4. In the Codex model picker, select `deepseek/deepseek-v4-flash` (faster, more stable) or `deepseek/deepseek-v4-pro` (harder tasks).

## Restore If Broken

### Proxy not running

```powershell
Start-ScheduledTask -TaskName opencodex-proxy
```

Or manually: `C:\Users\19308\.opencodex\opencodex-service.cmd`. The wrapper auto-restarts on crash.

### config.toml lost the proxy line

Re-add the two root keys from `C:\Users\19308\.codex\opencodex.config.toml` into `~/.codex/config.toml`, then restart Codex Desktop.

### Model picker missing DeepSeek

Restart Codex Desktop (it caches the catalog). If still missing, re-sync from the dashboard at `http://localhost:10100/` or restore `opencodex-catalog.json` from the Obsidian backup folder.

### Key missing

Set `DEEPSEEK_API_KEY` env var (user-level) with the key stored in the Obsidian backup doc, or restore `config.json` from the backup folder.

## Troubleshooting

- `connection reset` / `[upstream-retry]` in service.log: transient upstream or local proxy (127.0.0.1:7890) issue. Check 7890 is listening, then retry the request.
- `The reasoning_text in the thinking mode must be passed back to the API`: switch to `deepseek/deepseek-v4-flash`; the proxy sets `preserveResponsesReasoningContent` for v4 models.
- Whole Codex app goes offline after selecting DeepSeek: restart the proxy task, then restart Codex Desktop.
- `deepseek-chat` / `deepseek-reasoner` dropped from catalog: expected; only `deepseek-v4-flash` and `deepseek-v4-pro` are served by this provider config.

## Related

- Dashboard: `http://localhost:10100/`
- Ten Yuan F12 workflow: `deepseek-f12-operator` skill (do not confuse the two)
