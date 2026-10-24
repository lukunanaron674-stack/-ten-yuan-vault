# FZM watcher

## 安全模式
```powershell
python .\watcher.py --once
```
只扫描并记录 `queued`，不会提交云端。

## 真实提交前
必须先配置 `H3CLOUD_COMMAND`。命令需要接收 `{task}`，成功时最后一行输出 job_id；没有 job_id 不会被视为成功。

```powershell
$env:H3CLOUD_COMMAND = "python C:\path\submit_h3.py --task `"{task}`""
python .\watcher.py --live
```

当前没有检测到用户的 h3cloud/5090 提交命令或 SSH/API 配置，因此未自动启动云端任务。取消动作只写入 `cancel_requested`，远程中止适配器需在提供商命令接入后启用。
