# Canvas 概念库参考图补全｜账本索引

> 仓库：`lukunanaron674-stack/-ten-yuan-vault`
>
> 账本协议：`07-Codex大脑库/skills/Canvas概念库参考图补全/LEDGER-PROTOCOL.md`
>
> 目录说明：`04-F12总控载体/canvas-single-image-pipeline/README.md`

## 当前结构

- 当前断点：`04-F12总控载体/canvas-single-image-pipeline/state.json`
- 最新有效记录指针：`04-F12总控载体/canvas-single-image-pipeline/run-ledger-latest.json`
- 新记录目录：`04-F12总控载体/canvas-single-image-pipeline/run-ledger.d/`
- 旧账本归档：`04-F12总控载体/canvas-single-image-pipeline/ledger-archive/run-ledger_legacy_through_2026-07-28.md`

## 写入规则

`run-ledger.md` 只作为轻量索引，不追加运行历史，也不保存容易过期的具体节点状态。

每次运行按以下顺序读取：

1. `state.json` 获取当前唯一断点；
2. `run-ledger-latest.json` 获取最新有效记录；
3. 只读取断点对应的必要分片；
4. 历史恢复队列非空时，再读取对应归档证据。

产生新证据或新状态时：

1. 在 `run-ledger.d/YYYY-MM/` 创建一份不可变独立记录；
2. 远端读回该记录；
3. 更新 `run-ledger-latest.json`；
4. 不读取、不覆盖旧历史归档。

相同故障、相同 blob 与相同下一动作的重复重试，不创建新分片、不更新 latest，也不为心跳制造空提交。详见账本协议的“重复失败去重”。

## 迁移断点

旧账本已完整归档到 2026-07-28 的 `n18 手工织毯围裙` 完成记录。

当前动作不得写死在本索引中；始终以 `state.json` 与 `run-ledger-latest.json` 的远端内容为准。