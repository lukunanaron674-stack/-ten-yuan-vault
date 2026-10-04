---
title: R3 Existing Q Updates
tags:
  - lililong
  - source-ingestion
  - problem-state
status: CANDIDATE
linear_issue: 674-102
---

# R3｜现有 Q 的 Problem State 增量候选

> [!warning] 本文件不回写正式 Q 卡或 Canvas。下列内容是 R3 的 delta proposal，R4/R5 按来源复核后才能决定是否落库。

## Q-ASSET-001｜候选增量（唯一进入本文件的 existing-Q update）

映射卡：[[Q-ASSET-001_旧角色设定和新设定谁优先]]。现存 ID、parent、goal、状态与版本沿用，不创建子 Q。

```yaml
q_id: "Q-ASSET-001"
parent_goal: "G6"
problem_statement: "下游可能把历史设定、用户批准原稿和未核验候选误当成同等有效输入，导致角色资产版本错用。"
problem_depth: "D1"
domain: "asset_provenance_and_approval"
status: "OPEN"
known:
  - "用户在 R2E-00059 报告某 H3 B 端任务 JSON 只有角色卡文字路径与场景文字描述，未写角色/场景参考图 asset ID、路径及 SHA-256；这是用户明确陈述，尚不是本轮重新检查云端文件的回执。"
  - "现有正式卡已记录 CH-013 版本优先级与 SC-001 批准范围，不在本轮重写。"
unknown:
  - "R2E-00060 的 assistant 文件检查报告是否仍对应当前云端 JSON/工作流版本，待按其路径和版本重新读取。"
  - "H3 运行时是否加载相同角色/场景图、SHA 是否匹配、是否存在可归因的 prompt/output receipt，R2 packet 未证明。"
tried:
  - "历史 user request 要求只读核验 asset ID、路径、SHA、可访问性、视频节点接线及输出归因（R2E-00059）。"
  - "历史 assistant FILE_REF 报告称仅有元数据、未找到运行链路证据（R2E-00060）；作为待复验报告保存，不视为 execution receipt。"
rejected:
  - "不能把 ref_images 元数据存在当作图片已加载。"
  - "不能把 assistant 对旧工作流的报告当作当前云端执行状态。"
current_hypotheses:
  - "任务 JSON 与 H3 实际消费工作流的资产绑定若缺少可核验 ID/path/SHA，可能导致引用不可追溯或输入漂移；需以当前运行链确认。"
evidence:
  - "R2E-00059：user constraint/report；source locator line:11013;message:3817。"
  - "R2E-00060：assistant FILE_REF；source locator line:11179;message:3885；需要重读原始工作流和执行日志。"
source_refs:
  - "[[R2_EVIDENCE_PACKET#R2E-00059]]"
  - "[[R2_EVIDENCE_PACKET#R2E-00060]]"
  - "E:\\C_Migration\\19308\\.codex\\sessions\\2026\\09\\08\\rollout-2026-09-08T13-01-26-01a07f64-7b74-7470-b981-f7b47675c121.jsonl"
current_version: "1.1 (delta candidate only; no version bump applied)"
next_decision: "R4/R5 只读重查对应 JSON、当前 H3 workflow、prompt/output 记录和资产 SHA；将 user statement、当前文件事实与执行 receipt 分栏后，再决定是否并入原卡。"
done_condition: "正式输入均有可验证路径、当前 SHA、批准范围和状态，且任何候选/历史版本不会被误认作批准输入；另须证明实际消费工作流绑定与输出归因。"
required_agent:
  - "素材/资产 Agent"
  - "审核 Agent"
  - "Codex 只读路径/哈希/工作流核验"
```

## 其余已有 Q

- [[Q-CHAR-001_头像怎么稳定扩中全景]] 与 `.1`、`.4`：本轮证据没有可升级为身份判断的新原始用户确认；不重开已关闭卡。
- [[Q-WORLD-001_候选世界观版本如何安全进入实验]]：两条 user constraint 是世界观内容，不证明新版本冲突或 canonical 选择。
- [[Q-SCENE-001_SC-001森林背景批准来源是否已定位核验]]：assistant 记述的视觉 FAIL 缺原始结果与 SC-001 批准资产对应链，不改 BLOCKED 状态。
- [[Q-PIPE-001_冻结项可发散项禁止项怎么进入生图流程]]：R2 中的 674-77 规则/盘点消息没有真实任务规则映射测试结果，不更新其验收状态。

## Problem State 字段检查

Q-ASSET-001 delta 已包含 q_id、parent_goal、problem_statement、problem_depth、domain、status、known、unknown、tried、rejected、current_hypotheses、evidence、source_refs、current_version、next_decision、done_condition、required_agent。`parent`/`goal`/volume/impact_weight/priority_score`沿用原卡，不重建、不改写。
