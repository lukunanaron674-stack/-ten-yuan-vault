# FZM Session Adjudication — B2 staging

状态：`STAGING / PARTIAL`。本文件记录可复核分流，不把索引标题或一次关键词命中升级为整场会话的项目归属。

## 当前机器分流结果

- `LIKELY_FZM`：267 个 session 有正文中的显式别名命中。该标签只表示需要进入方项目复核池，不表示整场都是方项目。
- 其中 203 个 session 的 `USER` 证据至少有一行包含方项目别名；严格以“黎黎隆/黎黎龙/Lililong”作为跨项目标记时，只有 5 个 session 同时出现此标记，需按消息段核查，不能整场归类。`十元`是方志敏项目的理论线，不作为跨项目标记。
- 其余 64 个 alias-hit session 暂无直接 `USER` 方项目别名，命中可能来自助手/工具内容；保留 `LIKELY_FZM`，不得升为用户确认。
- `AMBIGUOUS`：451 个 session 在当前显式别名扫描中未命中。不能据此排除只用卡号、文件名、代称或无别名上下文表达的方项目片段，也不能归为 `OTHER`。
- `BLOCKED`：1 个 0 字节旧 JSONL 来源，没有 session_id、无可解析消息；不计入 718 个唯一 session ID。
- 目前仅将 `01a058e1-5eb9-73c0-a297-98dc9cee4197` 中原始行 7360 的跨项目内容登记为已发现混合片段例子；仍需沿原始 locator 扩展前后边界。

上述计数来自脱敏 `FZM_R2_EVIDENCE_PACKET.jsonl` 的 `USER` 行按原始 `source_id` 去重扫描。先前把“十元”并入跨项目别名而得到的 72 个混合候选是口径过宽，现已更正为 5 个 Lililong 明确候选；即便这 5 个也只是机器候选，不是最终逐段裁决。

## 证据边界与后续裁定

1. `session_index.jsonl` 的 thread_name/updated_at 只是定位提示，不是用户原话、执行回执或项目归属证明。
2. 已对 719 个本机/归档源文件扫描消息文本，发现 3,455 条 alias evidence；267 个命中会话另做工具调用/输出扫描，纳入 9,437 条工具候选记录。调用不等于执行，工具输出需逐条核验来源及实际结果。
3. 长会话按消息段切分；同一 session 可同时有方项目和其他项目片段，不能整场归类。
4. 用户批准/否决、assistant 建议、工具调用、工具输出与真正落盘/提交回执分别编码；候选、生成、审核与交付状态不可混为一谈。
5. 对 session_id 重复的压缩源比较 SHA256；对迁移副本比较同路径文件 hash。活跃 JSONL 在扫描期间发生变化，标为 `LIVE_UNSTABLE_MATCH_SNAPSHOT`，不宣称源文件静止。

## 尚未裁决 / R2 exit gates

- 逐段裁定 267 个 alias-hit session，优先检查 5 个 USER 证据同时出现 FZM 与 Lililong 的 session；`十元`作为本项目理论线单独作领域标签，不据此拆成另一项目。
- 从 451 个 `AMBIGUOUS` 中用镜头号/文件名/工作目录等第二层线索找回方项目候选；没有证据的仍保持 `AMBIGUOUS`。
- 检查两个超大 JSON 行解析异常：session `01a05c0d-aa2a-7f12-9daf-c456c5eeaa3a` 行 445；`01a07750-31f2-7941-b8f3-3d8eaa5ac1ae` 行 2683；明确是否含方项目证据。
- 确认是否有被轮转、迁移或工具导出遗漏的 Codex 历史源。
- 现有执行回执核对只覆盖当前扫描到的工具结果；缺少直接回执的事项维持 `STATE_UNKNOWN`，并继续核对文件/Linear 历史。

R2 不得标记完成，直到上述候选范围与异常均有明确裁定或具名阻塞；R3/L4 不得把本分流草稿当作最终上下文真相。

## 五个 Lililong overlap 候选：首轮人工片段复核

以下仅裁定 FZM 与 Lililong 的交叉内容性质，不代表对整场 session 作排他归属；证据原文与行号仍在 R2 packet。

| Session | 原始 USER locator | 首轮片段判断 |
|---|---:|---|
| `01a058e1-5eb9-73c0-a297-98dc9cee4197` | 7237、7290 | 7237 用户先询问 FZM 工作流；7290 明确纠正“主要是黎黎隆”，并说 FZM 仅作参考。标为 `FZM_REFERENCE_THEN_LILILONG_PRIMARY`；以 7290 作为该请求的范围纠偏边界。 |
| `01a07f64-7b74-7470-b981-f7b47675c121` | 9591 | 用户明确要把“方志敏生图记录/经验总结”用于黎黎隆。标为 `FZM_SOURCE_FOR_CROSS_PROJECT_REUSE`；保留原 FZM 经验来源与目标项目分离。 |
| `01a0915f-aa2e-7091-a30b-422fe6293c5f` | 1274 | USER 证据含黎黎隆、十元与方志敏多个项目条目，指向共享任务/状态总览，不证明这些项目的内容可合并。标为 `CROSS_PROJECT_CONTROL_PLANE`。 |
| `01a0b010-2395-7763-98b0-e51013687de1` | 7 | USER 证据讨论十元作为基础规则、再分别写黎黎隆/方志敏的项目用法。标为 `SHARED_THEORY_RULES_WITH_FZM_MAPPING`；十元是方项目内理论线，不是 Lililong 同义词。 |
| `01a12a7d-d0ee-71d1-bcca-a573b9693350` | 206 | USER 证据在开题/项目进度材料中并列《方志敏》故事线和《黎黎隆》内容。标为 `CROSS_PROJECT_REPORTING`；后续需按页/段抽取 FZM 专属事实。 |

首轮判断：这 5 个都是 FZM 相关的交叉引用候选，但目前均不应把整场 session 直接归为纯 FZM，也不应丢弃其中可追溯的 FZM 片段。其余 262 个 alias-hit session 尚未完成同级人工复核。
