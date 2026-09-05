---
name: 方发散树信息编排
description: 将十元映射发散产生的候选树整理为可阅读、可判断、可继续生长的结构；只负责语义聚类、视觉层级、分支状态与Canvas编排，不定义十元、不替代发散器、不做仓库抽卡。
version: 0.1
status: active
repository: lukunanaron674-stack/-ten-yuan-vault
branch: main
authority_level: L4-workflow
scope: 方发散树 / 十元映射发散结果的组织与Canvas表现
state: 07-Codex大脑库/skills/方发散树信息编排/state.json
ledger: 07-Codex大脑库/skills/方发散树信息编排/run-ledger.md
application_root: 方/08_探索/方发散树_编排协议_v0.1.md
---

# 方发散树信息编排 Skill v0.1

## 1｜定位

本 Skill 不是新的十元解释层，也不是仓库抽卡器，更不是“把卡片摆漂亮”。

固定链路：

```text
问题 / 创作对象
→ 十元结构拆解
→ 十元映射发散
→ RAW TREE
→【本 Skill：信息编排】
→ 可见树 / 折叠树 / 下一步路径
→ Canvas
→ 人工裁决
```

本 Skill 只回答四件事：

1. 哪些候选属于同一语义簇；
2. 哪些节点应该并列、从属、合并或折叠；
3. 当前视野里谁是主节点、谁是次节点；
4. 下一轮最值得继续展开哪几条路径。

严禁：

- 根据表面词重新定义十元；
- 把题材卡、世界观卡、角色卡当成固定抽卡仓库；
- 因为版面需要而改写十元 structure_id；
- 用视觉大小冒充理论强弱；
- 删除尚未裁决的候选；
- 将“折叠”误写成“淘汰”。

---

## 2｜权责边界

```text
十元系统：这个结构是什么
发散器：它还能如何变化
信息编排器：这些变化怎样被组织给人看
裁决器：下一步研究什么
Canvas：把编排结果画出来
```

编排层不得越权修改上游语义结论。

---

## 3｜输入

最低接受：

```yaml
root_question: 当前问题
nodes:
  - id: ZX-W-005
    parent_id: ROOT
    structure_id: ...
    changed_variable: ...
    relation_shape: ...
    module_grammar: ...
    concrete_candidate: ...
    status: candidate
```

推荐保留：

- `structure_id`
- `changed_variable`
- `relation_shape`
- `module_grammar`
- `concrete_candidate`
- `evidence`
- `score / confidence`（若上游已有）
- `status`

没有上游字段时可以做弱编排，但不得补造十元事实。

---

## 4｜三段式编排

### A. semantic-layout｜语义编排

读取：`references/semantic-layout.md`

输出：

- cluster
- sibling / child / duplicate / contrast
- group_role

### B. visual-hierarchy｜视觉层级

读取：`references/visual-hierarchy.md`

输出：

- focus
- level
- visible / collapsed
- canvas size / spacing / region

### C. branch-management｜分支管理

读取：`references/branch-management.md`

输出：

- expand
- hold
- merge
- freeze
- archive_candidate

三者顺序固定：

```text
语义关系
→ 视觉层级
→ 分支动作
```

不得先按画布位置倒推语义。

---

## 5｜核心规则

### 5.1 一个视野最多 3 个一级视觉中心

一级视觉中心 > 3 时必须：

- 聚类；或
- 选择 1 个 focus + 2 个主要替代方向；
- 其余进入二级或折叠区。

### 5.2 相近不是相同

候选只有在 `changed_variable + relation_shape + module_grammar` 实质重复时才能合并。

只因为题材、名词或画面相似，不得判 duplicate。

### 5.3 空间距离表达语义距离

同簇靠近；不同簇拉开；对立方向允许镜像放置。

Canvas 空间是语义标记，不是装饰。

### 5.4 折叠不等于删除

任何被折叠节点都必须保留：

```yaml
collapsed_reason: ...
recoverable: true
```

### 5.5 下一步展开必须说明原因

不得只输出“推荐 ZX-W-005”。

至少给出一条结构理由，例如：

- 与现有路径差异最大；
- 能改变关键变量；
- 证据冲突尚未解决；
- 是当前主问题的瓶颈；
- 可验证某条十元边界。

---

## 6｜标准输出

```yaml
layout_version: fang-tree-layout-v0.1
root_question: ...
focus: ZX-W-005

groups:
  - id: G1
    role: primary
    label: ...
    nodes: [ZX-W-005, ZX-W-011]
  - id: G2
    role: alternative
    label: ...
    nodes: [...]

visible:
  primary: [ZX-W-005]
  secondary: [ZX-W-011, ZX-W-013]

collapsed:
  - id: ZX-W-021
    reason: 与G1同构但仅替换具象名词
    recoverable: true

branch_actions:
  expand: [ZX-W-005, ZX-W-011]
  hold: [...]
  merge: [...]
  freeze: [...]
  archive_candidate: [...]

next_expand:
  - id: ZX-W-005
    reason: 改变主问题中的行动方向生成权，结构差异最大
```

---

## 7｜Canvas 表现协议

Canvas 只消费编排结果，不自行判断创作结构。

最低视觉层级：

```text
ROOT / 当前问题       100%
一级主方向             80%
二级候选               60%
证据 / 说明            45%
折叠入口               30%
```

同一级节点：

- 尺寸一致；
- 字段顺序一致；
- 间距一致；
- 不因“看起来酷”临时放大。

不同语义簇之间必须有明显留白。

---

## 8｜与现有方项目的接入

当前 `方/方志敏任务卡发散树.canvas` 仍是生产项目入口。

v0.1 不直接重写历史 Canvas；先把规则接到 `方/08_探索/` 的十元探索与后续发散结果上。

等编排协议稳定后，再让 Canvas 重建脚本消费标准输出。

因此：

```text
旧任务卡树：继续生产
新十元发散树：先经过编排层
```

避免拿正在生产的三幕动画当试验田。

---

## 9｜v0.1 验收

满足以下条件才算通过：

1. 10+ 候选输入时，一级视觉中心不超过 3；
2. duplicate 判定不依赖具象名词相似；
3. 所有 collapsed 节点可恢复；
4. next_expand 每项有结构理由；
5. Canvas 层不得修改 structure_id；
6. 不出现“世界观卡仓库抽取”式逻辑；
7. 十元发散结果即使没有 Canvas 也能独立输出编排 JSON/YAML。

---

## 10｜下一阶段

```text
v0.1 规则协议
→ 真实十元发散样本回归
→ layout JSON schema
→ rebuild_divergence_canvas.py
→ Obsidian Canvas 自动重建
→ 再推广到题材树 / 角色树 / 行为库 / 五行轴证据树
```
