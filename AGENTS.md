---
type: repository-root-rules
status: canonical-current
version: v2.0
updated: 2026-07-30
authority_level: L0
scope: all
---

# AI Agent Rules for ten-yuan-vault

This workspace is an Obsidian vault, not a normal code repository.

L0 only governs startup, authority, safety, and write boundaries. It does not define 十元 endpoints, relations, dynamic-chain mechanisms, cases, ratings, or project conclusions.

## 1. Minimum Boot Sequence

Before reading or writing the vault:

1. Record the latest `main` commit SHA.
2. Read `00-中枢索引/AI文件权力与任务总览.md`.
3. Read `00-中枢索引/总入口.md`.
4. Classify the task scope, then follow the L1 gate or rolling hub registered for that scope.
5. Read the relevant L2 canon before making knowledge judgments.

Scope routes:

- 十元关系审计：`07-Codex大脑库/每次任务必读_十元关系防遗忘清单.md` → its declared execution gate and current card/canon chain.
- 生克补动态链：`08-生克补动态链研究/每次任务必读_生克补动态链滚动中枢.md` → its declared execution gate, index, template, and exact previous case.
- 十元语义空间：`01-十元系统/05-十元语义空间/README_十元语义空间研究总入口_v1.0.md` → the registered validation or compile route.
- 专项知识生产：only when the task explicitly enters that workflow, read `07-Codex大脑库/给 Codex 看的训练协议.md`.
- 静态文字横纵构图：当用户要求文字横纵构图、静态视觉线、多泳道关系、剧情横纵网、审核反馈/依赖回流时，必须读取 `07-Codex大脑库/skills/story-horizontal-vertical-text/SKILL.md` 及其所指向的 `黎黎隆项目/20_Agent系统/04_协议/STORY_TENYUAN_CROSS_VERTICAL_PROTOCOL.md`。**先出等宽纯文字主图**，横向同层多方与流向、纵向跨层因果、反馈回流都须清楚；禁止用散文、普通表格、独立角色时间线或 Obsidian 卡片排布冒充文字横纵构图。这是逻辑/文本图 Skill，与上一条 Canvas 几何排版 Skill 相互独立。
- Canvas 排版与 Obsidian 可视化（CANVAS-DEFAULT-SKILL，USER 2026-11-01 明确要求默认执行）：**任何新建、编辑、补节点、接入素材、更新链接、调整分组或几何的 `.canvas` 任务，均必须主动读取并应用** `07-Codex大脑库/skills/obsidian-canvas-layout/SKILL.md`（现行 v1.5.1）及相关 Linear 674-77/XN-CANVAS-01 规则，**不等用户提醒“使用排版 Skill”**。先检查已有唯一 Canvas、原始节点/边及证据资料；内容修改后自动按布局 Skill 做只读审计、必要时干跑与安全原位调整、文字自适应与多中心排布，最终校验节点ID、颜色、文字、引用、边、分组归属、零越界与零重叠，再 Git SHA 回读；无法安全自动重排则 FAIL CLOSED 并报告阻塞。不得复制第二份 Canvas、不得改变理论正本，不得将程序 PASS 冒充 Windows Obsidian 视觉 PASS（未实屏验收标 WAIT_LOCAL_UI）。独立静态横纵文字构图仍遵守其自身 Skill。

A task has not started until its registered L1 gate and relevant L2 canon have been read.

## 2. Authority and Conflict Order

```text
L0 root rules
→ L1 scope gate / rolling hub
→ L2 theory canon
→ L3 route / governance
→ L4 ledger / audit evidence
→ L5 case / project / material
→ L6 archive / legacy / superseded
```

- Process questions obey L0/L1.
- Knowledge judgments obey L2.
- File identity, routing, and coverage obey L3.
- L4/L5 provide evidence only.
- L6 preserves history only.
- Newer dates, longer files, or titles containing “总 / 正本 / 完成” do not raise authority by themselves.
- If same-level conflict remains unresolved, mark `待二审` or `未判定`; do not silently choose one file.

## 3. Repository Safety

1. Do not delete files unless the user explicitly authorizes deletion or cleanup.
2. Before deletion, verify the exact path, current role, references, replacement, and whether unique evidence would be lost.
3. Do not move large folders without a written migration plan and verified redirect/index updates.
4. Do not directly change L2 theory canon under `01-十元系统` unless the user asks or the task explicitly authorizes a high-confidence correction.
5. Do not change official ratings or review conclusions in `05-银矿库` unless asked.
6. Do not create new top-level folders.
7. Before creating a file, check for an existing file with the same function; prefer updating the existing file.
8. AI/F12 outputs remain `pending-absorb` until promoted through the registered review route.
9. Never invent a category, parent, is-a relation, canonical status, commit SHA, run result, or evidence.
10. A ledger entry, Canvas edge, co-occurrence, sequence, contrast, or visual similarity does not by itself prove a theory relation.
11. **Single-source updates**: if a Canvas, document, or data index for the requested function already exists, edit that exact file in place. Do not create suffixed variants such as `_实验版`, `_v2`, `_接入版`, `_标题总览` or copies merely to represent a revision unless the user explicitly authorizes a genuinely separate artifact. Use Git commits for version history; preserve content, IDs, and source evidence and validate all links before duplicate cleanup.

## 4. Write Discipline

1. Read the current blob and latest `main` before replacing an existing file.
2. Preserve unrelated user content and unique historical evidence.
3. Governance work may change routing, status, and authority labels, but must not silently rewrite theory.
4. Every write must be followed by a remote read-back of the changed path.
5. Automation success may be reported only when its own L1 gate and canonical ledger success conditions are satisfied.
6. Canvas visualizes structure; it never creates theory authority.

## Core Principle

入口只指路，门禁管执行，理论管判断，治理管身份，案例进二审，账本只证明运行，归档只保留历史。
