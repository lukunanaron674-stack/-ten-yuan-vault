---
type: progress-log
status: active
updated: 2026-06-03
workflow: [[Hermes-漫画五大主题整理工单]]
task_list: [[Hermes-漫画五大主题任务清单]]
target_total: 499
pause_at_total: 250
first_theme_target: 因果型 zx+nx
---

# Hermes-漫画归档进度台账

用途：记录 Hermes / DeepSeek / Qwen 漫画归档试跑进度。达到暂停阈值后，先停下来给用户看流程和工作经验。

## 暂停阈值

| 条件 | 当前值 | 目标值 | 状态 |
|---|---:|---:|---|
| 精修全名单总进度 | 0 | 250 | 未开始 |
| 因果型 zx+nx 完整主题 | 0 | 7 | 未开始 |
| 每 25 条流程记录 | 0 | 25 | 未开始 |
| DeepSeek 调用次数 | 0 | 越少越好 | 省 token 指标 |
| Obsidian 命中跳过次数 | 0 | 越多越好 | 省 token 指标 |
| Qwen/Ollama 压缩次数 | 0 | 按需 | 本地低成本处理 |

## 当前阶段

- 阶段：试跑前
- 当前优先主题：因果型 `zx+nx`
- 当前优先批次：`Monster`、`Watchmen`、`端脑`、`历史之眼`、`MPD Psycho`
- 暂停策略：因果型 7 条全部完成后先暂停一次；若用户继续，再跑到总进度约 250 条后暂停复盘。

## 因果型试跑台账

| 状态 | 漫画 | 评分 | DeepSeek | Qwen | Obsidian | 问题记录 |
|---|---|---:|---|---|---|---|
| 待跑 | Monster | 96 | 未跑 | 未跑 | 未写入 |  |
| 待跑 | Watchmen | 96 | 未跑 | 未跑 | 未写入 |  |
| 待跑 | 端脑 | 94 | 未跑 | 未跑 | 未写入 |  |
| 待跑 | 历史之眼 | 93 | 未跑 | 未跑 | 未写入 |  |
| 待跑 | MPD Psycho | 92 | 未跑 | 未跑 | 未写入 |  |
| 待跑 | Low Tide in Twilight | 92 | 未跑 | 未跑 | 未写入 |  |
| 待跑 | 进击的巨人 | 91 | 未跑 | 未跑 | 未写入 |  |

## 总进度记录

| 批次 | 数量 | 累计 | 范围 | 状态 | 备注 |
|---|---:|---:|---|---|---|
| 0 | 0 | 0 | 试跑前 | 未开始 | 等待 Hermes/QQBot 启动 |

## 每 25 条复盘记录

| 累计 | DeepSeek 次数 | Obsidian 跳过 | Qwen 次数 | 判断质量 | 写入问题 | 低置信度/错误 |
|---:|---:|---:|---:|---|---|---|
| 25 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 50 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 75 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 100 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 125 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 150 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 175 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 200 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 225 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 250 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |

## Hermes 更新规则

每处理完一部漫画，Hermes 应更新：

- 因果型试跑台账中的状态。
- 总进度记录中的累计数量。
- 若该条进入待二审，要在问题记录写明原因。
- 若 DeepSeek 或 Qwen 输出空泛、跑题、改分数、改理论判断，要记录为流程问题。

暂停条件触发时：

1. 停止继续调用 DeepSeek。
2. 不再写 finalized。
3. 汇总本页问题记录。
4. 返回 QQBot/用户一份流程复盘。

## 复盘输出模板

```md
## 漫画归档试跑复盘

- 已处理：
- 完整主题：
- DeepSeek 判断质量：
- Qwen 压缩质量：
- Hermes 路由问题：
- Obsidian 写入问题：
- 低置信度/待二审：
- 建议修正：
```


## status update - 2026-06-03 01:42:13

- manga: Monster
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:42:13

- manga: Watchmen
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:42:13

- manga: 端脑
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:42:13

- manga: 历史之眼
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:42:13

- manga: MPD Psycho
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:43:56

- manga: Low Tide in Twilight
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:43:56

- manga: 进击的巨人
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox
