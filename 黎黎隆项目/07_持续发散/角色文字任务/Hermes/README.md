# Hermes 读取入口｜黎黎隆角色魅力实验

## 读取顺序

1. 先读 `LATEST.md`，确认本轮状态是 `BLOCKED`、`已入队`、`已生成_待人工验收` 还是 `FAILED`。
2. 再按 `run_dir` 读取该轮 `experiment.md`、`shots/`、`run-summary.json` 和 H3 日志。
3. 需要回看历史时，逐行读取 `character-charm-results.jsonl`；每行是一轮，不要把候选当作正式设定。

## 状态含义

- `BLOCKED_4090D_COMFYUI_OFFLINE`：SSH/GPU/生产心跳可以有证据，但 ComfyUI API 离线；没有提交任务。
- `BLOCKED_4090D_PREFLIGHT_FAILED`：已到 4090D 通道，但 `pool_submit --check-only` 未通过；没有入池。
- `已入队_待4090D生产`：只证明任务写入远端 pending；不代表 ComfyUI 已完成，也不代表有 MP4。
- `已生成_待人工验收`：已有本地 MP4 和 probe；仍需人工检查角色行为、关系变化和十元魅力。
- `FAILED_4090D_REMOTE` / `FAILED_4090D_COLLECT`：保留失败证据，不自动重跑。

## 4090D 边界

Hermes 只允许调用项目根目录的 `h3_4090d_channel.py`：先 `status`，再 `check --spec`，通过后才 `submit --spec`；完成后用 `result --task-id` 和 `collect --task-id --out-dir` 读取/回收。Hermes 不直接 POST `/prompt`，不启动、停止或杀远端 ComfyUI；唯一生产者是远端 `pool_run.py`。

## 当前轮

当前 `LATEST.md` 是机器可读交接摘要。候选素材、角色卡和正式 Canvas 之间保持分离；人工验收前不得锁定角色、关系或交付片。
