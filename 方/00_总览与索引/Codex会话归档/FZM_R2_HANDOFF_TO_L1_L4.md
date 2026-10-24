# 方志敏 Codex 归档 — R2 到 L1–L4 交接

状态：`STAGING / PARTIAL`；不得视为最终档案。此交接仅供后续人工/代理阶段使用。

## 已完成的可复核输入

- `FZM_SESSION_LEDGER.json`：718 个唯一会话 ID 的来源台账；19 个标题候选；267 个显式别名命中；451 个待分段/待裁定；1 个空文件来源阻塞。索引标题不作为正文证据。
- `FZM_R2_EVIDENCE_PACKET.part01.jsonl` 至 `part03.jsonl`：13,178 条脱敏证据行；按 manifest 顺序拼接得到规范包。完整包 SHA256：`31ccfe369add85a57861d2a9a914ce411270e8e106f1f8db69ed194e84042ab4`。
- `FZM_SESSION_ADJUDICATION.md`：当前是分层规则及未决边界，不是 718 个会话的最终语义裁定。
- `FZM_R2_CONFLICT_CANDIDATES.md`：已知版本/执行状态冲突与证据边界。
- `FZM_EXECUTION_RECEIPT_AUDIT.md`：工具回执交叉核对；没有直接回执的事项维持 `STATE_UNKNOWN`。
- `FZM_EXTRACTION_RECEIPT.md`：源盘点、哈希、解析异常、脱敏及边界回执。

## L1 — 来源与会话范围

1. 先按来源路径、session ID、原始行号/ordinal、时间戳核对，不以标题或摘要定归属。
2. 对 267 个别名命中会话逐段判定 `CONFIRMED_FZM` / `MIXED_SEGMENTS` / `LIKELY_FZM`；451 个无显式别名会话保持 `AMBIGUOUS`，不能直接标为 OTHER。
3. 重点补查两个超大 JSON 行解析异常会话：`01a05c0d-aa2a-7f12-9daf-c456c5eeaa3a` 行 445；`01a07750-31f2-7941-b8f3-3d8eaa5ac1ae` 行 2683。
4. 对仍在写入的 JSONL 重新静止取样并记录新 hash；不覆盖旧快照与扫描回执。

## L2 — 证据与用户决策

1. 以 `USER` 原话作为用户决策来源；`ASSISTANT` 是建议/摘要，除非另有用户确认，不升级为用户决定。
2. 为每条入选证据保留 source ID、路径、原始 locator、时间、角色、卡号、文件路径及状态边界。
3. 按项目片段拆分混合会话；不得把同场会话里其他项目内容并入方志敏档案。

## L3 — 决策时间线与执行状态

1. 先解决 `FZM_R2_CONFLICT_CANDIDATES.md` 中冲突；未解决条目保持 `CONFLICT / UNKNOWN`。
2. 把请求、授权、排队、工具调用、成功/失败回执、人工审核、锁定、交付作为分离事件。
3. 时间线只纳入可追溯事件；历史输出不代表当前文件或当前工单状态。

## L4 — 当前上下文包与导航

1. 只有 L1–L3 的证据裁定完成后，才能汇编当前上下文、缺失素材/阻塞项和 Canvas 导航。
2. Canvas 只做导航，不承载或裁决事实；内容文件必须保留证据指针与 `CONFIRMED / CANDIDATE / UNKNOWN` 状态。
3. 不覆盖现有 Canvas、卡片、成片或原始会话；需要新增时另建版本并保留回滚路径。

## 当前不可宣称完成的部分

- 会话级语义归属尚未完成；标题匹配、关键词命中和整场会话归类不能代替片段裁决。
- 冲突事项仍待后续原始材料核对。
- 未形成最终当前上下文，也未改写任何正式 Canvas/工单状态。
- 不运行 ComfyUI/H3、不上传生产素材、不提交付费云端任务。
