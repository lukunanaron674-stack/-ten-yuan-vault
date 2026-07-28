# Canvas 概念库参考图补全｜账本索引

> 仓库：`lukunanaron674-stack/-ten-yuan-vault`
>
> 账本协议：`07-Codex大脑库/skills/Canvas概念库参考图补全/LEDGER-PROTOCOL.md`

## 当前结构

- 最新记录指针：`04-F12总控载体/canvas-single-image-pipeline/run-ledger-latest.json`
- 新记录目录：`04-F12总控载体/canvas-single-image-pipeline/run-ledger.d/`
- 旧账本归档：`04-F12总控载体/canvas-single-image-pipeline/ledger-archive/run-ledger_legacy_through_2026-07-28.md`

## 写入规则

`run-ledger.md` 从现在起只作为轻量索引，不再追加完整运行历史。

每个概念处理结束后：

1. 在 `run-ledger.d/YYYY-MM/` 创建一份不可变独立记录；
2. 远端读回该记录；
3. 更新小文件 `run-ledger-latest.json`；
4. 不读取、不覆盖旧历史归档。

## 迁移断点

旧账本已完整归档到 2026-07-28 的 `n18 手工织毯围裙` 完成记录。

当前下一动作：从 `n25 风帐营地` 开始，继续参考优先、禁止生图，并跳过受污染的旧场景区。