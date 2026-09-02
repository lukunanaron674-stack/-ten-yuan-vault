---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: Thirteen Days (2000)
actor: John F. Kennedy
sample_type: x-scope decision-structure negative-mirror calibration
criterion_version: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 97
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_increment: false
x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
x_scope_dynamic_transition_increment: false
x_scope_decision_structure_calibration_increment: true
x_scope_decision_structure_calibration_work_provenance_increment: true
protected_range_positive_increment: false
protected_range_negative_increment: false
protected_range_dynamic_increment: false
created: 2026-09-02
---

# 运行记录｜zn↔x｜《Thirteen Days》JFK｜广泛咨询与强烈反对不等于 joint final decision

## 0｜启动对齐

写前以 `main@763e01bc5bccacd8ecc9f4ed1111a0b38e2ac368` 为真值，按 current canonical 重读/对齐：L0/L1 文件权力门禁、L1 十元—五行正本 v1.6、zn/x current 信息卡及准度路由、`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 专项、x-scope 专项、protected-range 专项、最新 evidence ledger 与最近 commits。仓库 current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

current effective ledger：strict-v2 verified positive `0/0 works`；x-scope ordinary positive `4/3 works`、boundary `21/18 works`、dynamic `21/19 works`、decision-structure calibration `4 controls`；protected-range `4/4 positive + 3/3 negative + dynamic 1/1`。普通正例槽已 pending-review，不继续堆量。

本轮先压力测试《The Zookeeper's Wife》Antonina 的 protected-range strict 候选，但其 villa/house management 在拿掉被测保护原则后仍有家庭居住、家庭安全、日常管理等独立 purpose/ranking anchors；若把对象事后缩成“藏匿网络”又有按结果定义 object-layer 的循环风险。因此 classification 不足95，不进入 strict deferred，也不写第二条记录。

## 1｜作品 / 人物 / 当前窗口

- 作品：`Thirteen Days`（2000）
- 人物：John F. Kennedy
- current window：古巴导弹危机中，ExComm / Joint Chiefs 围绕美国应选择空袭+入侵还是 naval quarantine 的决策窗口。
- 被测对象层：**White House 对同一危机 response-option 的 final policy selection**。
- 不测试：舰队具体拦截动作、单舰开火权限、国会法理、OAS 后续支持、战略核武执行链。

公开剧情材料一致给出：Joint Chiefs 主张攻击导弹阵地并随后入侵；Kennedy 拒绝这一主张，最终政府选择并实施 quarantine。影片还表现 Kennedy 对舰队交战升级保持 final civilian control，军事节点的不同意见并未构成能阻止 quarantine policy selection 生效的同层 mandatory veto。

外部事实来源：
- `Thirteen Days (film)` plot summary（Wikipedia）
- IMDb plot synopsis for `Thirteen Days`
- Roger Ebert review，描述影片核心冲突之一是 White House 迫使主战军事指挥层退让

## 2｜zn 独立判定

本轮不锁 `zn`。

候选原则可描述为“在核升级风险下，应避免把可控危机推进成不可逆战争”；但 same current window 内仍有强 competing explanations：核威慑计算、Berlin 连锁风险、Bay of Pigs 教训、外交交换空间、国内/国际政治成本与纯战略最优化。

因此不能从总统身份、反战形象、谨慎情绪、最终成功避免核战或历史评价倒推 `zn=true`。

```yaml
zn_state: not_locked
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_increment: false
```

## 3｜x permission structure

```yaml
actor: John F. Kennedy
object: Cuban-missile-crisis US response-option selection
object_layer: White-House final policy-selection layer

permission_type:
  receive_proposals: true
  convene_consultation: true
  reject_adviser_recommendation: true_reality_tested
  choose_quarantine_option: true_reality_tested
  authorize_policy_implementation: true_reality_tested
  tactical_ship_fire_execution: not_inferred
  nuclear-release-disposition: not_tested

scope:
  tested: crisis-response policy option selection
  excluded:
    - individual naval engagement execution
    - OAS legal/political support layer
    - Congress-wide war powers
    - nuclear launch chain

term: same Cuban-missile-crisis decision window
revocability: policy can be reconsidered before irreversible downstream acts; not material to this test
return_obligation: n/a

same_layer_pre_effect_veto:
  Joint_Chiefs: none_observed_on_tested_policy-selection_layer
  military_advisers: none_observed_on_tested_policy-selection_layer

global_override: constitutional/legal/downstream institutions not collapsed into tested layer
ultimate_title: n/a

decision_structure: unilateral-final-node on tested policy-selection layer
consultation_structure: broad_multi-node
final_decision_structure: single-final-node / unilateral relative to consulted advisers
execution_structure: downstream military and diplomatic apparatus executes selected policy
co_decision_nodes: none locked on the tested final-policy-selection layer
```

## 4｜关键压力：consultation breadth ≠ final-decision threshold

表面上：

```text
President
+ ExComm
+ Joint Chiefs
+ senior civilian advisers
→ many people discuss the same crisis
```

错误倒推：

```text
多人深度参与
+ 多人明确表达不同方案
→ joint/shared final decision
```

现实最小差异：

```text
Joint Chiefs strongly recommend air strikes + invasion
↓
Kennedy does not accept that option
↓
quarantine is selected and implemented
↓
Joint Chiefs' disagreement does not block the tested final policy choice
```

因此：

> **`consultation_structure=multi-node` 与 `final_decision_structure=joint/shared` 必须分账。反对意见只有在同层 effect 生效前具 mandatory blocking power，才进入 co-final node；“被听取、被要求建议、强烈反对、专业地位很高”都不足。**

## 5｜最近邻

### 5.1 对照 Star Trek III / McCoy + T'Lar

上一条 calibration 锁：

```text
heterogeneous nodes
+ each independently can block procedure before effect
→ heterogeneous joint-final threshold
```

本条提供负镜像：

```text
heterogeneous / numerous advisers
+ strong disagreement
+ no reality-tested pre-effect blocking node
→ broad consultation, but not joint-final
```

两条组成真正最小判据：**角色数量与功能异质性都不是关键；pre-effect mandatory blocking topology 才是关键。**

### 5.2 对照 The Purge / shared parallel execution

`The Purge` 说明多个 actor 可独立切换同一 security boundary，属于 shared/parallel execution，不是 joint threshold。本条甚至不要求 adviser 拥有 independent execution；它只校准“参与 discussion”不能倒灌 final decision。

### 5.3 对照 Crimson Tide nuclear-release layer

`Crimson Tide` 的特殊核发射对象层存在 Captain/XO mandatory concurrence，因此 senior-command 也不能单方越过。`Thirteen Days` 在被测政策选择层没有观察到 Joint Chiefs 的同层 mandatory concurrence。**同一组织中不同 object layer 的 final-decision topology 可以不同。**

## 6｜拿掉 / 反向

### 拿掉 Kennedy 的 final selection node

仅剩 adviser proposals 与分歧，无法从材料推出“哪一方案已经成为美国政府最终政策”；说明 tested node 对 final policy effect 有现实作用。

### 拿掉 Joint Chiefs 的意见

Kennedy 仍可选择 quarantine；因此这些 advisers 的存在不是 final effect 的 mandatory constituent node。

### 反向门

若出现：

```text
A chooses option Q
+ B objects
+ B's approval is legally/operationally mandatory before Q can take effect
+ Q cannot proceed until B approves
```

则必须改判 `joint-threshold`。本轮材料恰好没有这种 same-layer blocking topology。

## 7｜第三因素冻结

冻结：
- Kennedy 的总统身份标签；
- Joint Chiefs 的军衔/专业身份；
- 谁的战略判断更正确；
- 危机最终和平解决；
- 电影主题、英雄化、勇气或谨慎情绪；
- OAS 后续支持与舰队 downstream execution；
- 核威慑能力与美国综合国力。

只看：**同一 response-option decision layer 上，谁的反对能否在生效前现实阻断 final policy selection。**

## 8｜判定与成熟度

```yaml
fact_confidence: 99
classification_confidence: 97
knowledge_status: evidence-locked
criterion_version: current-x-scope-distinction-v1_20260830

judgment:
  consultation_structure: broad_multi-node
  final_decision_structure: unilateral_relative_to_consulted_advisers
  joint_final: false

new_rule:
  broad_consultation_plus_strong_dissent_does_not_create_joint_final
  pre_effect_mandatory_blocking_power_is_the_relevant_topology
```

## 9｜统计变化

本轮不触碰已 pending-review 的 ordinary slots：

```yaml
strict_v2_verified_positive: +0
strict_v2_negative: +0
strict_precondition: +0
x_scope_positive: +0
x_scope_boundary: +0
x_scope_dynamic: +0
protected_range_positive: +0
protected_range_negative: +0
protected_range_dynamic: +0
```

只新增 decision-structure calibration provenance：

```text
x_scope_decision_structure_calibration_controls:
4 → 5

independent work provenance:
Thirteen Days = +1 work
```

current ledger 尚未设置 decision-structure calibration 的正式聚合 `works` 字段，因此本记录只登记 provenance，不擅自发明 schema。

## 10｜本轮结论

```text
number of participants
≠ number of final-decision nodes

consultation
≠ approval threshold

dissent
≠ veto

relevant question:
Can this node stop the same final effect before it becomes effective?
```

这条与 Star Trek III 正向 joint-final control 合并后，把 P3 的正/负镜像补齐：

```text
mandatory pre-effect blocking node present
→ co-final node

only consulted / heard / disagrees
but cannot block same-layer effect
→ not co-final node
```

## 11｜下一轮最高信息增益

P0 继续寻找首个 strict-v2 verified positive，不降门槛。优先天然、单一、稳定、subject-specific object x，并同时冻结 x 端 independent purpose/ranking anchors；本轮 Antonina 候选显示，仅有强 protected-range 与强原则仍不足。

若 P0 继续无 ≥95，P3 下一刀优先找 **same pair / same organization / two nearby object layers**：一层是 consultation-only + unilateral final，另一层是真正 mandatory joint threshold。这样可进一步证明 decision topology 是 object-layer-specific，而不是人物关系或组织结构的固定标签。