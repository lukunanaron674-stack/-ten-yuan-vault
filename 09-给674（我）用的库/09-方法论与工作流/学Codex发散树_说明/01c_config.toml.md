# ⚙️ 认识 config.toml

> 个人默认配置所在：`C:\Users\19308\.codex\config.toml`

## 关键项（你机器上）

| 键 | 现在值 | 作用 |
|---|---|---|
| `model` | `deepseek/deepseek-v4-flash` | 默认模型（走 opencodex 代理） |
| `model_reasoning_effort` | `medium`（已改） | 推理档位：low/medium/high；越高越慢越细 |
| `web_search` | `live`（还原原值） | 联网搜索：disabled/cached/indexed/live；live 每次真搜 |
| `approval_policy` | `never` | 是否需要你批准跑命令 |
| `sandbox_mode` | `danger-full-access` | 能否读写全盘 |

## 怎么改

- 桌面 App：**设置 → 配置 → 打开 config.toml**
- 改前**先备份**：
  ```powershell
  Copy-Item C:\Users\19308\.codex\config.toml C:\Users\19308\.codex\config.toml.bak-日期
  ```
- 改完**重启 Codex** 才生效

## 已为你调整（2026-08-15）

- `model_reasoning_effort`: high → **medium**（首字延迟从 20~26s 大幅下降）
- `web_search`: 曾误改为 auto（不合法）→ 已还原为 live。若要减少搜索等待可改 cached/disabled

## 分层

- 个人默认：`~/.codex/config.toml`
- 某项目专属：`.codex/config.toml`
- 一次性：CLI 参数（一般不手动）

