# 方志敏 Codex 历史上下文索引

状态：`STAGING / PARTIAL`。本目录只提供历史来源导航，不裁决项目正史。

## 导航

| 内容 | 文件 | 状态 |
|---|---|---|
| 先读恢复包 | `FZM_CURRENT_CONTEXT.md` | 暂行，不是最终当前真相 |
| L1 来源台账 | `FZM_SESSION_LEDGER.md`、`FZM_SESSION_LEDGER.json` | 718 unique session_id 快照；尚有分类未决 |
| 会话分流 | `FZM_SESSION_ADJUDICATION.md` | B2 更正后仍 PARTIAL |
| 消息级证据 | `FZM_R2_EVIDENCE_PACKET.jsonl` | 13,178 行脱敏派生证据；非 raw 全文 |
| 分段附件清单 | `FZM_R2_PARTS_MANIFEST.md`、`FZM_R2_EVIDENCE_PACKET.part01.jsonl`–`part03.jsonl` | SHA/顺序见 manifest |
| 决策线索 | `FZM_DECISION_TIMELINE.md` | 候选时间线，不能直接当生效状态 |
| 冲突与否决 | `FZM_R2_CONFLICT_CANDIDATES.md` | 未裁定项保持 UNKNOWN/CONFLICT |
| 执行状态核验 | `FZM_EXECUTION_RECEIPT_AUDIT.md` | 无直接回执不等于未执行 |
| 来源、哈希、异常及脱敏 | `FZM_EXTRACTION_RECEIPT.md` | B1/B2 回执 |
| R2 语义交接 | `FZM_R2_HANDOFF_TO_L1_L4.md` | 交接草稿，非最终验收 |
| Canvas 导航 | `FZM_CONTEXT_MAP.canvas` | 本目录并列的只读历史导航图 |

## 证据定位约定

R2 行应结合 `source_id/session_id`、原始 session 路径、源行号/ordinal、role、timestamp 读取；摘要、标题与关键词命中仅是定位手段。需要原话时在本机只读回到对应原始 session，不要把私有 raw 日志上传到 Linear 或外部服务。

## 本轮未纳入

此索引不包含成片素材归档（674-303）、不修改旧发散树或卡片、不把任何候选升级为用户审核通过，也不推断跨项目历史的唯一归属。
