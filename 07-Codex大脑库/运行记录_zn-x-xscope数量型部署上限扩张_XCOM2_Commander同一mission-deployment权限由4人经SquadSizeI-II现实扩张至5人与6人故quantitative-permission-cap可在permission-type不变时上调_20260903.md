---
type: ten-yuan-fire-axis-xscope-dynamic-control
authority_level: L4
knowledge_status: evidence-locked
status: working-evidence
axis: fire
pair: zn-x
work: XCOM 2
actor: Commander
stage: campaign-before-and-after-Squad-Size-I-II
sample_type: x-scope-dynamic-transition
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
protected_range_increment: false
may_override_canonical: false
created: 2026-09-03
---

# zn-x｜x-scope 数量型 permission-cap 扩张｜XCOM 2 Commander

## 0｜启动与 current 对齐

本轮写前以 `main@b91b1d2f6513c46cc94bd05c89f7188742125782` 为准，按 L0/L1 启动纪律重读文件权力入口、L1 十元—五行正本、zn/x current 信息卡、准度卡、`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current、x-scope current 与最近 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

current 待审议清单明确把 King Lear contraction 的真正数量型反向镜像列为尚缺高信息增益材料；Harry Potter 的 term-triggered spatial/legal expansion 不得冒充数量型镜像。

## 1｜事实与触发

对象固定为 XCOM Commander 对 **单次 mission deployment squad** 的当前编成/部署权限。

外部资料一致记录：

- campaign 初始常规 squad cap 为 4；
- Guerrilla Tactics School 的 `Squad Size I` 把最大 squad size 提升到 5；
- `Squad Size II` 再把最大 squad size 提升到 6；
- 每次任务具体由哪些 soldiers 出击，仍由 Commander 选择并在战术层下达行动命令。

证据：
- StrategyWiki, `XCOM 2/Guerrilla Tactics School`：Squad Size I `maximum squad size to 5`；Squad Size II `maximum squad size to 6`。
- XCOM Wiki, `Soldier (XCOM 2)`：初始 squad 为 1–4，两个 Squad Size upgrades 提升到 5 与 6，并明确 squad composition 由 Commander 决定。
- Gamepressure, `XCOM 2: Guerrilla Tactics School`：明确描述 squad size 从 4→5→6。

## 2｜x 权限结构

```yaml
actor: Commander
object: mission deployment squad
object_layer: same campaign mission-deployment roster layer
permission_type:
  select_soldiers_for_mission: true
  deploy_selected_soldiers: true
  command_deployed_soldiers: true
  deploy_more_than_current_cap: false
scope:
  stage_A: up_to_4_soldiers
  stage_B_after_Squad_Size_I: up_to_5_soldiers
  stage_C_after_Squad_Size_II: up_to_6_soldiers
quantitative_scope:
  transition: 4 -> 5 -> 6
term: campaign-state dependent
revocability: depends_on_retaining_current_upgrade_state
return_obligation: none
same-layer_pre-effect_veto:
  deployment_UI/system_cap: mandatory ceiling before each mission
  another_human_co_decider: none_required
global_override:
  game_campaign_rules_and_upgrade_state: true
ultimate_title: not_applicable
decision_structure: unilateral_within_current_cap
consultation_structure: none_required
final_decision_structure: Commander_selects_roster_within_cap
execution_structure: selected_soldiers_are_deployed_and_then_commanded_in_mission
co-decision_nodes: none_locked
scope_transition: quantitative_permission_cap_expansion_4_to_5_to_6
transition_trigger: purchase/unlock Squad Size I then Squad Size II in Guerrilla Tactics School
retained_layers:
  - same actor
  - same object layer
  - same deployment permission family
  - same mission roster selection function
lost_or_externalized_layers: none_required_for_expansion
```

## 3｜关键压力

本轮要排除两个偷换：

### 3.1 不是 technical capability increase

Squad Size upgrade 不是把 Commander 从“不会指挥第五个人”训练成“会指挥第五个人”。其核心变化是 **当前 mission roster 的最大可部署数量门**。Commander 对士兵的选择/指挥功能在迁移前后都存在；改变的是同一 permission family 下允许进入 current deployment set 的 cardinality ceiling。

### 3.2 不是新 permission type

前后都在做同一件事：`select + deploy soldiers for one mission`。没有从 custody 跳成 disposition，也没有从 consultation 跳成 final decision。变化变量只有最大可纳入对象数：

```text
same permission type
+ same actor
+ same object layer
+ cap 4 reality-tested
→ upgrade trigger
→ cap 5 reality-tested
→ second upgrade trigger
→ cap 6 reality-tested
```

因此锁：

> **`current permission type unchanged ≠ quantitative scope unchanged`；同一 x permission family 可以仅通过 cardinality ceiling 上调而发生真实 scope expansion。**

以及：

> **数量型 scope expansion 必须把“对象个数上限”单列；不能只写 `x=true`，也不能把 4→5→6 误写成新的 permission type。**

## 4｜最近邻最小差异

### vs King Lear

King Lear：

```text
hosted-retinue allowance
100 -> 50 -> 25 -> 0
```

是同 permission family 的 **quantitative cap contraction**。

XCOM 2：

```text
mission-deployment allowance
4 -> 5 -> 6
```

是同 permission family 的 **quantitative cap expansion**。

两者共同锁定数量型 x-scope 可在 binary ON 状态持续不变时双向迁移；本轮因此正好补齐 current backlog 中 King Lear 的数量型反向镜像。

### vs Harry Potter age-triggered expansion

Harry 改的是校外施法的 spatial/legal use scope；XCOM 2 改的是 **同一 mission roster 可纳入对象数量上限**。所以本轮不是重复 term-triggered scope expansion。

### vs Eduardo Saverin

Eduardo 的 34.4%→0.03% 是可分割资产份额变化；XCOM 2 是可部署对象 cardinality ceiling 变化。一个是 share，另一个是 count-cap，不能混成同一量纲。

## 5｜拿掉 / 反向

### 拿掉扩张 trigger

拿掉 Squad Size upgrades，Commander 仍拥有 mission roster selection/deployment `x`，但当前可纳入集合的数量 ceiling 回到 4；第五、第六名士兵不能进入同一常规 mission deployment set。

### 反向

若 upgrade 生效，则新增 slot 现实进入 deployment interface，5人/6人 squad 可被实际部署，因此不是名义“批准更多人”而没有 effect。

该测试只证明 **deployment quantitative scope** 扩张；不倒灌：

- Commander 对所有 XCOM personnel 的永久所有权；
- 不受系统规则限制的无限部署权；
- 对士兵 ultimate title；
- 任何与 mission roster 无关的全局处分权。

## 6｜第三因素冻结

- GTS facility：是权限扩张 trigger/interface，不是被测 actor。
- soldier rank requirement / Supplies：是解锁条件，不等于 Commander 的 zn。
- Skyranger：即使作为运输载体存在，也不能把物理载具容量替代成被测 x；资料将变化直接登记为 `Squad Size` deployment cap upgrade。
- 战术胜负、任务难度、士兵强弱：只解释扩张价值，不定义 x。
- Commander 身份标签：不作为 x 证据；x 由 roster selection、deployment cap 与现实部署结构证明。

## 7｜zn / strict-v2

本轮不锁 `zn`。

Commander 对抗 ADVENT、保护人类、完成任务等目标同时受组织任务、战略收益、战役规则与玩家选择解释，无法在该明确窗口独立得到 ≥95 的不可让渡内部原则。

即使强行另找一个 `zn`，deployment x 自身也已有独立任务/战术用途。因此本轮不冲 strict：

```yaml
strict_v2_verified_positive_increment: 0
strict_v2_negative_increment: 0
strict_v2_deferred_increment: 0
strict_precondition_increment: 0
```

strict-v2 verified positive 继续为 `0 / 0 works`。

## 8｜成熟度与统计

```yaml
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
criterion_version: current-x-scope-distinction-v1_20260830
```

current registry 在吸收 Papers, Please 前显示 dynamic `25 controls / 22 works`；最新 `b91b1d2f...` 已新增 Papers, Please `+1/+1`，故本轮写前 effective evidence-layer 为：

```text
26 controls / 23 works
```

XCOM 2 此前未进入 current x-scope dynamic independent-work 集合，故本轮：

```text
26 / 23
→ 27 dynamic controls / 24 independent works
```

其余：

```yaml
x_scope_positive_increment: 0
x_scope_boundary_increment: 0
x_scope_decision_calibration_increment: 0
protected_range_increment: 0
strict_increment: 0
```

## 9｜本轮锁定

> **quantitative permission-cap expansion：同一 actor、同一 object layer、同一 permission family 下，current x 可以只通过可纳入对象数量上限 `4→5→6` 扩张；permission type 不变不等于 quantitative scope 不变。**

该结果与 King Lear 的 `100→50→25→0` contraction 构成当前 criterion 下的正反数量型镜像。普通同类 count-cap expansion 后续停止堆量；只有出现撤销、回缩、共享 cap、可转让 slot、第三方 same-layer veto 或统计判据冲突时再继续。

## 10｜下一轮最高信息增益

1. P0：strict-v2 第一份 verified positive，仍不降门槛；
2. P1：path-exhaustion dynamic：多个 independent paths 被逐一关闭直到 surviving path count=0 且 target effect reality-test OFF；
3. P2：protected-range 只收同 boundary / same risk-channel 的新动态或失败镜像；
4. deferred 只在出现新证据时二审。
