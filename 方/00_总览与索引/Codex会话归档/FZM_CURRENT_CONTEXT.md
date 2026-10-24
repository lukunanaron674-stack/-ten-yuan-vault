# 方志敏项目｜Codex 当前上下文恢复包（暂行）

状态：`STAGING / PARTIAL`。本文件是可导航的恢复入口，不是全量审定后的“当前真相”；只依据本目录已保存的扫描与证据回执，不覆盖原始 session、Canvas、工单或成片。

## 项目范围与证据规则

- 本归档范围是《方志敏》Codex 历史上下文；十元理论线可属于方项目。与《黎黎隆》交叉的会话按消息片段分开，不整场混归。
- `USER` 原话、assistant 提议、工具调用、工具输出、真实执行/审核/交付回执分别保留。候选、生成、用户通过、锁定、交付是不同状态。
- 原始 JSONL/ZST 是私有只读来源；不上传、不修改、不搬移；`state_*.sqlite` 未打开。

## 已核验的会话覆盖（截至 B2）

- 本机与 archived_sessions 共发现 719 个源文件、718 个唯一 session_id；其中一个 session_id 有两份不同大小压缩文件，均保留；另 1 个 0 字节旧 JSONL 为 `EMPTY_SOURCE`。
- 迁移镜像已比对 642/642 个相对路径与 SHA256；640 组稳定，2 组活动 JSONL 按扫描快照登记为 `LIVE_UNSTABLE_MATCH_SNAPSHOT`。
- session index 有 622 行；标题索引只用来定位候选。
- 719 个源文件、851,051 行做过显式别名扫描：267 个 session 命中方项目别名；其中 USER 行含方项目别名 203 个，64 个仅在非 USER 内容命中。451 个无显式别名仍为 `AMBIGUOUS`，不判 `OTHER`。
- 在 203 个 USER 方项目别名命中中，有 5 个还出现 Lililong/黎黎龙，需按段审阅；它们是交叉片段候选，不代表整场归属。
- R2 派生包 13,178 行：USER 1,028、ASSISTANT 2,713、CODEX_ASSISTANT tool-call 4,537、TOOL output 4,900。76 条敏感命令上下文已遮蔽；该包不是原始会话全文。

## 已形成的暂定项目规则与决策线索

请以 `FZM_DECISION_TIMELINE.md` 和 `FZM_R2_CONFLICT_CANDIDATES.md` 为索引：发散树/Canvas 与 Linear 的权威关系、候选不自动替代主剪辑、生成不等于审核等规则均带 source locator，但仍是逐项核实中的候选记录。镜头规则不可脱离卡片版本和时间点直接当成当前锁定状态。

已登记但未解决的代表性问题：2-1B 时长/卡片版本；3-2A 用户指定台词与队列旧句是否已同步；4-5D 锁定版本与修订待审并存；回滚和音视频分交付是否完成；片头标题最终文件/审核状态；2-1C 声线修改是否有后续回执。没有回执的项目状态是 `UNKNOWN`，不是“没做”。

## 解析异常与覆盖限制

1. session `01a05c0d-aa2a-7f12-9daf-c456c5eeaa3a` 原始第 445 行为 4,194,305 字节的 NUL 填充非 JSON 记录，无方项目别名。
2. session `01a07750-31f2-7941-b8f3-3d8eaa5ac1ae` 原始第 2683 行含非法控制/转义字符且跨项目；尚无无损解析方式，不伪造或修补原文。
3. 267 个 alias-hit 会话尚未逐段全部裁定；451 个 ambiguous 尚未做卡号、文件名、代称等第二层全量检索。
4. 原扫描证明本机/归档快照可读，但尚不能证明不存在其它轮转、迁移或外部导出源。

## 恢复入口

- 人类索引：`FZM_CONTEXT_INDEX.md`
- 缺源与阻塞：`FZM_MISSING_SOURCES.md`
- 会话台账：`FZM_SESSION_LEDGER.md` / `.json`
- 分流裁定：`FZM_SESSION_ADJUDICATION.md`
- 脱敏消息证据：`FZM_R2_EVIDENCE_PACKET.md`、`FZM_R2_EVIDENCE_PACKET.part01.jsonl` 至 `part03.jsonl`、`FZM_R2_PARTS_MANIFEST.md`
- 决策时间线候选：`FZM_DECISION_TIMELINE.md`
- 冲突候选：`FZM_R2_CONFLICT_CANDIDATES.md`
- 执行回执审计：`FZM_EXECUTION_RECEIPT_AUDIT.md`
- 扫描/异常/脱敏记录：`FZM_EXTRACTION_RECEIPT.md`

L1/R2、L3、L4 均尚未达到工单 DONE 条件；本文件不能替代尚未完成的逐段裁定、卡片历史和跨源交接验证。
