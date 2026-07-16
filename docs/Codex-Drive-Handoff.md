# Codex × Google Drive 自动交接

## 用途

ChatGPT 每小时把高清图片、`TASK.md`、`manifest.json` 和 `READY.flag` 放进：

```text
G:\我的云端硬盘\Codex-Handoff\<task-id>\
```

本地 PowerShell 监听器发现完整任务后，会调用本机 Codex CLI 执行仓库修改、校验、提交、推送和创建 PR。只有任务目录出现 `DONE.json` 才算完成。

## 首次配置

1. 拉取最新仓库。
2. 将 `scripts/worker_config.example.json` 复制为：

```text
scripts/worker_config.json
```

3. 修改配置：

```json
{
  "repo_path": "D:\\你的仓库路径\\-ten-yuan-vault",
  "queue_root": "G:\\我的云端硬盘\\Codex-Handoff",
  "poll_seconds": 60
}
```

4. 确认本机 Codex CLI 已登录：

```powershell
codex --version
```

## 测试一次

在仓库根目录运行：

```powershell
powershell -ExecutionPolicy Bypass -File ".\scripts\codex_drive_worker.ps1" -Once
```

## 持续监听

```powershell
powershell -ExecutionPolicy Bypass -File ".\scripts\codex_drive_worker.ps1"
```

监听器只处理同时存在以下文件的任务目录：

```text
TASK.md
manifest.json
READY.flag
```

已存在 `DONE.json` 的任务不会重复执行。运行中的任务会创建 `PROCESSING.lock`。失败时保留：

```text
FAILED.json
CODEX_RESULT.md
CODEX_STDERR.log
```

## 安全边界

- 使用 `codex exec --sandbox workspace-write`，允许编辑工作区，但不使用更宽的 `danger-full-access`。
- 不直接修改 `main`。
- 不自动合并 PR。
- 不重新编码或缩小 Drive 中的图片。
- 必须验证 Canvas JSON、图片路径、图片尺寸和 SHA256。
- 必须写入 `DONE.json`，否则不视为完成。
