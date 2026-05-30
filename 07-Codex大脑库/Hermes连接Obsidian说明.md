---
type: setup-guide
status: active
updated: 2026-05-24
tool: Hermes
provider: deepseek-compatible
---

# Hermes 连接 Obsidian 说明

## 当前状态

Hermes CLI 已安装在 WSL2 的 `Ubuntu-24.04` 中。

当前 Obsidian vault 路径：

```text
/mnt/c/Users/19308/Documents/Obsidian/ten-yuan-vault
```

当前 Hermes 配置：

```text
配置文件：/home/yyy/.hermes/config.yaml
密钥文件：/home/yyy/.hermes/.env
模型：deepseek-chat
Provider：deepseek
Base URL：https://api.deepseek.com
```

## 启动方式

在 Windows 里双击 vault 根目录的：

```text
启动Hermes连接Obsidian.cmd
```

或者在 PowerShell 里运行：

```powershell
wsl -d Ubuntu-24.04
cd /mnt/c/Users/19308/Documents/Obsidian/ten-yuan-vault
hermes chat --provider deepseek -m deepseek-chat
```

## Hermes 进入 vault 后先读

```text
07-Codex大脑库/AI可读压缩版_总览.md
00-中枢索引/Vault可视化总览.md
07-Codex大脑库/Codex大脑总入口.md
00-中枢索引/总入口.md
```

## 给 Hermes 的第一句话

```text
你现在连接的是我的 Obsidian vault。请先读取 AGENTS.md、07-Codex大脑库/AI可读压缩版_总览.md 和 00-中枢索引/Vault可视化总览.md。

规则：
1. 不要删除文件。
2. 不要直接修改 01-十元系统 的核心理论。
3. 不要直接修改 05-银矿库 的正式评分和二审结论。
4. 新报告、压缩版、规则优先写入 07-Codex大脑库。
5. 不确定就标记为 待二审。
```

## 如果以后改成千问 / Qwen

Hermes 支持 Alibaba / Qwen provider。需要把 `/home/yyy/.hermes/.env` 改成：

```text
DASHSCOPE_API_KEY=你的千问DashScope密钥
DASHSCOPE_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
```

并把 `/home/yyy/.hermes/config.yaml` 的模型段改成：

```yaml
model:
  default: qwen-plus
  provider: alibaba
  base_url: https://dashscope.aliyuncs.com/compatible-mode/v1
```

当前 E 盘已找到的是 DeepSeek 兼容 API 配置；如果要换成千问，需要提供 DashScope API key。

## 注意

Hermes 能读写这个 vault，所以默认只让它写：

- `07-Codex大脑库`
- 看板 / 报告 / 待吸收文件
- 明确要求创建的新索引

核心理论、正式评分、旧库归档默认只读。
