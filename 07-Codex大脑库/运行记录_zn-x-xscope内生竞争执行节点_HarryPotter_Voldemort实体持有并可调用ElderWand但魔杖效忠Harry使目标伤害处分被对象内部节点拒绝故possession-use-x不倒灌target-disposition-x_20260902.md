---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_type: x-scope-boundary-guard-endogenous-competing-execution-node
work: Harry Potter and the Deathly Hallows
actor: Lord Voldemort
stage: Voldemort取得Elder Wand后至霍格沃茨最终决斗
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_guard_increment: false
may_override_canonical: false
created: 2026-09-02
---

# zn-x 火轴边界压力测试｜Voldemort / Elder Wand｜内生竞争执行节点

## 0｜启动对齐

本轮以 `main@ca9708edc42e8fa27d892614e020b2526e18d517` 为写前 HEAD。启动时重读最新 commits、L0/L1 文件权力与任务门禁、L1 十元—五行正本、zn/x current 信息卡与准度路由、相关关系卡/`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current 与 x-scope current。current canonical 高于本记录；木轴只迁移验证方法，不迁移理论结论。

x-scope 已 pending-review，普通正例停止堆量。本轮只因命中一个此前 ordinary boundary guards 未单独锁定的机制进入：**对象内部存在可独立拒绝/反向影响同一目标结果的 execution node。**

## 1｜作品 / 人物 / 当前窗口

- 作品：《Harry Potter and the Deathly Hallows》
- actor：Lord Voldemort
- object：同一支 Elder Wand
- current window：Voldemort 从 Dumbledore 墓中取得 Elder Wand 后，持续实际持有、施法，直到最终对 Harry 的决斗。
- 最小测试对象层：`physical possession/use of Elder Wand` 与 `Elder Wand 对 Harry 的 lethal-harm target disposition/effect` 必须分账。

官方 Harry Potter Encyclopedia / Wizarding World 对事实链的 current 支持：

1. Elder Wand 会效忠于“赢得”它的巫师，而非仅跟随当前物理持有人；
2. Draco disarm Dumbledore 后获得其 allegiance，Harry 后来战胜 Draco 又使 allegiance 转向 Harry；
3. Voldemort 实际持有并使用 Elder Wand，但并非其 true master；
4. 最终战中该 wand 识别 Harry 为真正主人，Voldemort 的杀戮咒没有按其目标意图完成，反而导致 Voldemort 自毁。

来源：
- Official Harry Potter Encyclopedia, `The Elder Wand`
- Wizarding World / Pottermore, `Everything We Know About the Elder Wand`
- Wizarding World, `The best theories made by Harry Potter characters`

## 2｜zn 独立门

本轮不锁 `zn`。

Voldemort 的“追求不死 / 权力 / 杀死 Harry”虽然跨阶段稳定出现，但仍首先表现为目标、欲望与战略驱动；当前证据不足以在不借身份、主题、胜负和结局的情况下，以 ≥95 置信证明其满足 current zn 的“内部原则、无外部奖励仍成立、冲突最终排序、不可轻易让渡、未来调用资格”完整门槛。

因此：

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
```

本轮不得因为 x 结构特别干净就替 zn 补票。

## 3｜x 权限结构

```yaml
actor: Lord Voldemort
object: Elder Wand

permission_type:
  contact: true
  physical_possession: true
  custody: true_current_window
  use: true
  invoke_spellcasting: true
  ordinary_magic_execution: true_observed
  target_specific_lethal_harm_against_Harry: false_at_final_reality_test
  full_mastery_or_allegiance: false
  ultimate_disposition: not_inferred

scope:
  physical_object_layer: true
  ordinary_use_layer: true
  target_specific_harm_layer: false
  global_all-effects: false

term: possession after removal from Dumbledore tomb through final duel
revocability: physical possession externally reversible; allegiance follows object-specific rules
return_obligation: none_material

same_layer_pre_effect_veto:
  external_human_veto: none_required
  endogenous_object_constraint: present

global_override: none_needed_for_test
ultimate_title: not_used_as_ten_yuan_proof

source_decision_structure: Voldemort chooses spells unilaterally
consultation_structure: none_material
final_decision_structure: unilateral_intent_but_object-constrained_target-effect
current_execution_structure: contested_on_target-specific-harm
co_decision_nodes: none_human_mandatory
unilateral_effect:
  ordinary_spell_use: true
  kill_Harry_with_Elder_Wand: false

independent_execution_nodes: none_human_material
endogenous_competing_execution_node: Elder_Wand_allegiance_to_Harry
competing_anchor: Harry_true_master_allegiance
object_specific_constraint: wand_chooses_and_refuses_target-harm_against_true_master
realized_effect_test: final_Killing_Curse_backfires
causal_mapping_verified: true_on_target-specific-final-test
```

## 4｜关键压力

最危险的错误推理：

```text
Voldemort 物理持有 Elder Wand
+ 他能用它施法
+ 他能决定要向谁施法
→ Voldemort 对 Elder Wand 的全部目标效果拥有 global / full x
```

该推理失败。

本轮事实同时满足：

```text
physical possession/custody x = true
ordinary use/invocation x = true

但

target-specific lethal-harm effect against Harry = false
```

差值不能只解释成“Voldemort 能力不足”。官方设定明确把失败映射到 Elder Wand 的 allegiance / true-master 机制：对象本身拥有一个会改变同一目标结果的内生约束节点。

因此新增边界句：

> **对象在手、能调用、甚至能让大量普通效果现实生效，只能锁对应的 possession/use/invoke `x`；如果对象内部存在独立 allegiance / autonomous refusal / endogenous execution node，则不能把局部 use `x` 倒灌成 target-specific disposition/effect `x`。**

更短写法：

```text
physical possession + usable interface
≠
verified global target-disposition

when object-internal execution node can refuse / redirect effect
```

## 5｜最近邻排除

### 5.1 vs 《The Dark Knight》interface → target-disposition guard
相同点：都拒绝“有接口”直接推出目标处分。

不同点：Dark Knight 的核心攻击是 `interface possession + claimed causal mapping` 未充分验证；本轮则更强：**接口到普通效果的 causal mapping 已现实验证，但对象内部对特定目标存在 autonomous competing execution node，导致 target-specific mapping 在最终 reality-test 中失败。**

因此不是重复旧机制。

### 5.2 vs Frodo / One Ring possession-use vs destruction-disposition
相同点：possession/use 不等于更宽处分。

不同点：Frodo 主要是 `destruction-disposition` 未由 possession/use 自动推出；本轮不是“尚未证明”，而是目标处分接口经过现实测试后被对象内部节点明确拒绝/反向执行。

### 5.3 vs Otto Octavius endogenous competing-execution-node insertion
Otto 的动态样本记录“原先较宽单方控制 → 内生竞争节点插入 → contested/bidirectional”的动态迁移。

本轮不是 dynamic transition：在被测 Voldemort current window 中，Elder Wand allegiance 已是既存的 object-specific constraint。新增价值是把 schema 中 `endogenous_competing_execution_node` 从“动态插入”扩展为**静态 x-scope 归因护栏**：对象内部节点可以使不同 permission/effect layer 同窗不同步。

## 6｜拿掉 / 反向

### 拿掉对象内部 allegiance 节点
如果保持：
- 同一 Voldemort；
- 同一 Elder Wand；
- 同一 physical possession/use；
- 同一最终施法动作；

但假设 Elder Wand 对 Harry 没有独立效忠/拒绝机制，且 Voldemort 的目标咒稳定按意图生效，则本轮“target-specific x 不成立”的核心证据消失。

说明决定边界的不是“Voldemort 人物标签”，而是 object-specific execution structure。

### 反向
若仅知道 wand 不忠于 Voldemort，但没有普通使用成功与最终 target-specific reality-test，也不能直接推出：

```text
Voldemort physical/use x = false
```

事实上作品明确显示他真实持有并多次使用 Elder Wand。因此：

> **拒绝 full mastery / target-disposition，不得反向抹除已经现实成立的 possession/use/invoke x。**

## 7｜第三因素冻结

冻结：
- Voldemort 的身份、阵营、能力等级、恐惧死亡、情绪；
- Harry 的英雄身份；
- 战争最终胜负；
- Elder Wand “最强魔杖”主题标签；
- Snape / Draco 的人物价值判断；
- “owner/master”作品原生词本身。

只保留可观察结构：

```text
same object
+ Voldemort physical possession
+ repeated ordinary use
+ allegiance lies elsewhere
+ final target-specific lethal effect refused / redirected
```

分类仍成立。

## 8｜strict-v2

本轮 `zn` 未独立过门，所以 strict 不启动：

```yaml
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
```

strict-v2 verified positive 继续 `0 / 0 works`。

## 9｜成熟度与统计

- fact confidence：99
- classification confidence：98
- knowledge status：`evidence-locked`

写入前 current x-scope ordinary boundary ledger：

```text
16 boundary guards / 13 independent works
```

本轮为新的 mechanism-level ordinary guard，且《Harry Potter》此前虽进入 dynamic controls，但未作为 ordinary boundary-guard work 计入该 criterion 槽，因此按同 criterion 分账：

```text
16 / 13
→
17 boundary guards / 14 independent boundary-guard works
```

其他槽不变：

```yaml
x_scope_positive: +0
x_scope_dynamic: +0
decision_structure_calibration: +0
protected_range: +0
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
```

x-scope 已 `pending-review`，本记录只增加新边界机制 evidence，不修改 L1/L2 canonical，不自动升格。

## 10｜本轮锁定句

> **`x` 必须按 permission/effect layer 分账。主体对同一对象的 physical possession、custody、ordinary use 和 invoke 可以真实成立，而 target-specific disposition/effect 仍可因对象内部的 autonomous allegiance / endogenous competing execution node 失败。对象内部节点真实改变结果时，局部 use `x` 不得倒灌为 global target-disposition `x`；反之，目标处分失败也不得抹除已现实成立的窄 use `x`。**

## 11｜下一轮最高信息增益

P0 仍先寻找 strict-v2 首个 verified positive，不降门。

若 P0 继续没有 ≥95 候选，优先寻找本机制的动态镜像：

```text
same actor + same object + same permission family
Stage A: object-internal node causes contested / target-refusal
真实 allegiance / credential / internal-controller 迁移
Stage B: underlying possession/use x 仍在，但 target-specific effect 从 false → true
```

这样可区分：
- `actor possession/use x` 是否变化；
- `object-internal competing node` 是否变化；
- `target-specific disposition/effect x` 是否随之独立迁移。
