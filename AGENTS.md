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
- Canvas 排版与 Obsidian 可视化：当用户要求布局、左右展开、多中心排布、缩小空白、调整 Canvas 卡片、线条或可读性时，先读取 `07-Codex大脑库/skills/obsidian-canvas-layout/SKILL.md`（现行 v1.3.0）及 Linear 674-77 的 XN-CANVAS-01 约束；只读审计→干跑→原位编辑已有 Canvas→Git SHA 回读与结构验证→Windows Obsidian 视觉人工验收。禁止跳过 Skill、复制第二份 Canvas 正本，或将程序 PASS 当作 Windows 视觉 PASS。该 Skill 的唯一完整正文在上述路径，不能仅凭其存放于 `skills/` 字样推断已被 Codex 原生技能列表自动注册。

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
