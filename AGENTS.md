# Hermes / AI Agent Rules for ten-yuan-vault

This workspace is an Obsidian vault, not a normal code repository.

## Mandatory Boot Sequence

Before any analysis, search, writing, file edit, or commit, read in this order:

1. Current `main` latest commit SHA.
2. `07-Codex大脑库/每次任务必读_十元关系防遗忘清单.md`.
3. `07-Codex大脑库/AI可读压缩版_总览.md`.
4. `00-中枢索引/Vault可视化总览.md`.
5. `07-Codex大脑库/Codex大脑总入口.md`.
6. `00-中枢索引/总入口.md`.
7. When the task touches theory, characters, cases, dynamic chains, five themes, or relation language, continue in this fixed order:
   - `01-十元系统/十元体系密度卡总览.md`;
   - the current information cards for every involved endpoint;
   - `01-十元系统/03-十元准度卡/README_准度卡总控_v0.5.md`;
   - the current accuracy cards for every involved endpoint;
   - `01-十元系统/04-十元生克补卡/README_生克补卡总控_v1.0.md`;
   - the relevant 生 card, 克 card, or 补 card;
   - `01-十元系统/十元生补克表.md`;
   - `01-十元系统/关系专项/README_十元关系专项正本索引.md`.

For theory tasks, record before work begins:

```text
starting main SHA
mandatory preflight file version
十元信息卡总览 version
涉及端点的信息卡与准度卡 version
生卡 / 克卡 / 补卡 version
十元生补克表 version
target relation status: locked / 未锁定 / 几何位保留
previous hourly conclusion and next relation
```

If the mandatory preflight file, current endpoint cards, relation card, and current relation table were not read, the theory task has not started and no theory conclusion may be committed.

For the hourly theory automation, the mandatory preflight file is a mutable rolling progress hub, not a read-only checklist. Every hourly run must update its version, last run, relation-table version, latest relation result, evidence gap, and next relation. A run that only updates the hourly ledger but does not write back the rolling hub is incomplete.

## Theory Red Lines

1. Read the current endpoint information cards, accuracy cards, relation cards, relation table, and canonical relation index instead of relying on memory.
2. Information cards answer “what the endpoint is”; accuracy cards answer “why the object must be judged as that endpoint”; relation cards answer “what happens between two already-established endpoints”. They cannot replace one another.
3. `01-十元系统/001-概念的定义.md`, `z切分焦点`, and `x现象集合` are `legacy-evidence-only`; they may explain historical files but may not generate, replace, or prove current endpoints.
4. Geometric position locked does not mean mechanism locked.
5. Co-occurrence, sequence, contrast, or visual similarity does not prove 生 / 克 / 补.
6. 三元 and 十元 are parallel systems. Neither is the parent or child of the other.
7. Do not map `x / z / n` to “现象 / 本质 / 应用”. That old template is invalid.
8. Do not revive obsolete formulas such as `x=无形欲望`, `幕后操盘=nx`, or `nx生x=压抑欲望累积`.
9. Every relation claim must state source endpoint, target endpoint, mechanism, changed variable, stage, third factors, removal test, and reverse test.
10. Separate stable identity, current state, behavior function, light, scene, time relation, relation position, manifestation, and dynamic chain.
11. Old film cards, visual cards, and case cards are evidence sources, not default theory work.
12. Repository hierarchy, old-draft coverage, and index cleanup belong to the independent governance task.
13. No new evidence means update the rolling hub's evidence gap and next target briefly; do not regenerate a full duplicate audit.
14. Every hourly theory run must close the loop: read rolling hub → audit one relation → update canon or evidence gap → write back rolling hub → update canonical ledger → verify commits.

## Safety Rules

1. Do not delete files unless the user explicitly asks.
2. Do not move large folders without a written plan.
3. Do not directly change official theory files under `01-十元系统` unless asked or the task explicitly authorizes high-confidence theory correction.
4. Do not change official ratings or review conclusions in `05-银矿库` unless asked.
5. If uncertain, mark content as `待二审` or `未判定` instead of making a final judgment.
6. New AI-generated summaries, reports, and rules should go under `07-Codex大脑库`.
7. F12 or automation outputs should be marked `pending-absorb` before being promoted.
8. Do not create new top-level folders. New notes must use existing numbered directories or `07-Codex大脑库/`.
9. Before creating a file, check whether a similar note already exists. Prefer updating existing notes over duplicates.
10. Do not invent a category, parent, is-a relation, or canonical status when evidence is insufficient.

## Preferred Output Types

When organizing this vault, produce one of these:

1. Rules: reusable judgment rules, field standards, red lines.
2. Indexes: navigation pages, dashboards, queues.
3. Tasks: next actions for human review or F12 collection.
4. Reports: compressed summaries for the user.

## Core Principle

入口只指路，理论管判断，案例进二审，Codex 做压缩，F12 做补采。

---

## 三阶知识管线

### 第一阶：Hermes 建立大框架

收到用户指令后，在 `05-银矿库/` 下使用现有主题目录或经检查后建立必要子目录，写入框架文件。不要把一般任务自动改造成银矿采集任务。

### 第二阶：Trae 原子化拆分

仅在任务明确进入该管线时，读取 `_bridge/for_trae.md`，将子域拆成原子卡，并在完成后写入 `_bridge/from_trae.md`。

### 第三阶：与用户逐卡讨论

读取 `_bridge/from_trae.md` 的更新后，逐卡讨论、补充与修正。只有用户确认或已有明确授权时，才标记 `status: finalized`。

### 原子卡结构

每张原子卡至少包含：

1. **原版概括**：概念的原始知识和来源边界。
2. **理论分析**：按当前任务需要分别使用三元、十元、五大主题或动态链；开始前必须读取强制清单、三层卡体系与对应正本。

禁止把 `x / z / n` 固定解释为“现象 / 本质 / 应用”。

### 原子卡编号规则

文件名即索引，从大到小编号：

- `1.0-框架.md` — 主题级
- `1.1-子域.md` — 子域级
- `1.1.1-原子概念.md` — 原子级

每个原子卡 YAML 头部需包含 `index` 和 `parent` 字段。
