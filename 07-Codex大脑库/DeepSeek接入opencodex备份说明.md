# DeepSeek 接入 opencodex 备份说明

> 目的：让任意一次空白对话都能直接让 Codex 用上 DeepSeek。本页是"人读"版，技能版在 `skills\opencodex-deepseek-connect\SKILL.md`。

## 一、现在的链路

```text
Codex 桌面端
  -> C:\Users\19308\.codex\config.toml 里 openai_base_url = "http://127.0.0.1:10100/v1"
    -> opencodex 本地代理（端口 10100，计划任务 opencodex-proxy 自动启动）
      -> DeepSeek API（api.deepseek.com）
```

模型名：`deepseek/deepseek-v4-flash`（日常、快、稳）和 `deepseek/deepseek-v4-pro`（难任务）。

## 二、关键文件

| 文件 | 作用 |
| --- | --- |
| `C:\Users\19308\.opencodex\config.json` | 代理核心配置（deepseek 供应商、密钥池） |
| `C:\Users\19308\.codex\config.toml` | 必须有 `openai_base_url` 和 `model_catalog_json` 两行 |
| `C:\Users\19308\.codex\opencodex-catalog.json` | 模型目录（含 deepseek 两个模型） |
| `C:\Users\19308\.opencodex\service.log` | 服务日志 |
| `C:\Users\19308\.opencodex\usage.jsonl` | 每次请求的流量记录 |
| `C:\Users\19308\.codex\opencodex.config.toml` | 恢复用的根配置模板 |

备份副本就放在本目录的 `skills\opencodex-deepseek-connect\` 里。

## 三、DeepSeek API Key

- 环境变量：`DEEPSEEK_API_KEY`（值已打码，见本地 `C:\Users\19308\.opencodex\config.json` 的 `apiKeyPool`）
- 同值也写在 `C:\Users\19308\.opencodex\config.json` 的 `apiKeyPool` 里
- 丢失时：从本页恢复，或在备份副本 `opencodex-config.json` 里找回

## 四、快速自检

```powershell
curl.exe -sS --noproxy "*" http://127.0.0.1:10100/healthz
```

返回 `{"status":"ok",...}` 就说明代理活着。也可以直接跑：

```powershell
powershell -ExecutionPolicy Bypass -File "C:\Users\19308\.codex\skills\opencodex-deepseek-connect\scripts\verify.ps1"
```

## 五、坏了怎么修

1. 代理没起：`Start-ScheduledTask -TaskName opencodex-proxy`
2. config.toml 丢了代理行：把 `C:\Users\19308\.codex\opencodex.config.toml` 里的两行补回 `~/.codex/config.toml`，重启 Codex
3. 模型列表里没有 DeepSeek：重启 Codex 桌面端；还不行就打开 `http://localhost:10100/` 重新同步
4. 一选 DeepSeek 就"连不上网"：检查 7890 端口代理是否活着，重启 opencodex 计划任务，再重启 Codex
5. `reasoning_text` 报错：换回 `deepseek/deepseek-v4-flash`

## 六、记录

- 首次接通：2026-08-12，密钥有效，两个 v4 模型实测可用
- 服务自启动：计划任务 `opencodex-proxy`（State: Running）
