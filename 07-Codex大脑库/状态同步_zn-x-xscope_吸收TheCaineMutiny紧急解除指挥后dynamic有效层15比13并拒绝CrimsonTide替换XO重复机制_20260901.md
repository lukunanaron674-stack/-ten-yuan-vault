---
type: ten-yuan-fire-axis-state-sync
authority_level: L4
knowledge_status: evidence-locked
status: state-sync
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 99
may_override_canonical: false
created: 2026-09-01
---

# 状态同步｜吸收 The Caine Mutiny 紧急解除指挥后 dynamic 有效层为 15 / 13；Crimson Tide 替换 XO 攻击命中既有机制，不重复计数

## 0｜启动对齐

本轮以 `main@2f6ff1d397b00e198e45e50dea1b3d0a4804b164` 为启动 HEAD，重读 L0/L1 权力门禁、L1 十元—五行正本、zn/x current 信息卡与准度卡、`zn补x`、火轴待审议清单、研究总纲、strict-v2 专项、x-scope 专项与最近 commits。current canonical 高于本文件；木轴只借验证方法，不迁移理论结论。

## 1｜本轮压力材料

候选攻击：`Crimson Tide` 中 Ramsey 在 Hunter 拒绝核发射 concurrence 后，试图解除 Hunter 并换 Lieutenant Zimmer。

问题：

> mandatory joint gate 中，只要高位 actor 能“换掉不合作的节点”，是否就可以把原 joint final decision 实质改写成 unilateral x？

## 2｜事实与最小差异

电影明确给出：

1. 核武器 release 需要 Captain 与 XO concurrence；Hunter 明确拒绝。
2. Ramsey 随即宣布解除 Hunter，并要求换 Lieutenant Zimmer。
3. 该替换没有被作品当成可自动绕过 concurrence 的有效 unilateral bypass；Hunter 反而据此继续主张 Ramsey 正在规避 governing two-man procedure，并解除 Ramsey 指挥。
4. Chief of the Boat 明确站到“不能在 XO 不 concurrence 时发射”的程序一侧。

因此，本轮没有形成新的 `joint → unilateral` 动态正例。

## 3｜x-scope 拆分

```yaml
actor: Captain Frank Ramsey
object: USS Alabama authenticated nuclear-missile release decision
permission_type:
  broad_command: true
  launch_preparation: true
  unilateral_final_release: false
  replace_nonconcurring_XO_to_bypass_same_gate: not_reality-verified
scope: nuclear-release special object layer
term: interrupted-second-EAM crisis window
revocability: role occupancy may change, but tested gate remains mandatory concurrence
return_obligation: N/A
same-layer_pre-effect_veto: XO concurrence
global_override: authenticated command chain / governing release procedure
ultimate_title: N/A
decision_structure: joint-unanimous / two-node mandatory concurrence
consultation_structure: not mere consultation
final_decision_structure: Captain + valid XO concurrence
execution_structure: multi-node launch procedure after valid concurrence
co-decision_nodes: [Captain, XO]
```

## 4｜关键压力结论

锁定：

> **更换 co-decision node 的人选 ≠ 自动移除 co-decision role。只要 same-layer mandatory threshold 仍存在，personnel replacement 本身不能被记成 `joint → unilateral`。**

进一步写成最小判据：

```text
node-holder replacement
≠ node-role removal

replace B with C
≠ remove B-role entirely

joint threshold persists
→ decision_structure remains joint
```

只有作品证明：替换后 Captain 单人即可让同一 final release 生效，或制度本身撤销第二 concurrence role，才允许判 `joint → unilateral`。

## 5｜最近邻

### vs Ramius / The Hunt for Red October
Ramius 控制锁的是第二 mandatory credential 被现实集中到同一 actor，co-decision node 的独立性消失；因此被测 authorization interface 才发生结构迁移。

Crimson Tide 本轮攻击只有“试图换 holder”，没有证明第二 role 被删除或全部 mandatory credentials 合并到 Ramsey。

### vs The Caine Mutiny / Queeg
Queeg 控制锁的是 replacement command node 已现实进入 execution chain，旧 actor 的同层 command effect 退出。

Crimson Tide 的“换 XO”恰恰缺少这种 post-transition reality effect，因此不能因为宣布 replacement 就记迁移。

## 6｜拿掉 / 反向 / 第三因素

拿掉 Hunter 这个具体人，只保留“XO role 必须 concurrence”，结构仍然成立；说明 gate 绑定的是 role/credential，而不是 Hunter 的人格。

反向：若 Zimmer 接任后作品明确证明 Ramsey 可以不再取得任何第二节点 assent 就完成 launch，则应重新判定为 joint→unilateral；现有材料不支持。

冻结 Ramsey/Hunter 的军衔、性格、能力、政治/道德判断、谁最终判断正确、第二 EAM 最终内容与核战争结果，结论不变。

## 7｜zn / strict-v2

本轮不锁 zn。Ramsey 的坚持可由军令、职责、危机判断与程序解释充分竞争；不能从坚持或职位倒推 zn。

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
```

strict-v2 verified positive 继续 `0 / 0 works`。

## 8｜是否新增 control

本轮压力结论与既有 Crimson Tide boundary guard 高度同源，且原记录已写明 Ramsey 试图解除 Hunter 并换人不能自动绕过特殊 release gate。

因此遵守“同机制跨3作品后停止普通堆量 / 无新机制不制造 control”的纪律：

```yaml
x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
x_scope_boundary_guard_work_increment: false
x_scope_dynamic_transition_increment: false
x_scope_dynamic_transition_work_increment: false
strict_positive_increment: false
strict_negative_increment: false
strict_deferred_increment: false
strict_precondition_increment: false
```

## 9｜真实状态同步

启动时 `zn-x火轴待审议清单.md` 仍登记：

```text
x_scope_dynamic_transition_controls: 14
x_scope_dynamic_transition_works: 12
```

但最新 commit `2f6ff1d397b00e198e45e50dea1b3d0a4804b164` 已新增并 evidence-lock：

- `The Caine Mutiny / Queeg` 紧急解除指挥：`+1 dynamic control / +1 independent work`。

因此 current L4 evidence-layer 应按：

```text
14 / 12
→ 15 dynamic controls / 13 independent works
```

处理。该同步不修改 L1/L2 canonical；待审议清单/研究总纲/x-scope 专项若尚未吸收 15/13，则视为状态同步债，而不是把 Queeg control 丢失。

## 10｜下一轮最高信息增益

P0 仍优先天然对象构成型 strict-v2 候选，不为破零降门。

若无 ≥95 P0 材料，下一轮优先找真正的最小差异：

```text
same actor + same object + same permission family
A: mandatory second role exists
B: second role 被制度性删除，而非仅换人
C: actor 单人 decision reality-test 成功
```

这才能真正验证 `joint → unilateral` 的 role-removal 形成门，而不是继续让“换了个人”冒充“少了一个节点”。