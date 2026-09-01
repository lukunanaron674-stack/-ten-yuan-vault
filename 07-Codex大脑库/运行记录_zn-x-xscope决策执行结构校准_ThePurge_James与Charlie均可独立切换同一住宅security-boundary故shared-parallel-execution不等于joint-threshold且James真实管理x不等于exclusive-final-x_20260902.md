---
type: ten-yuan-fire-axis-xscope-decision-structure-calibration
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
updated: 2026-09-02
priority_bucket: P3-P4-P5
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate_current: current-x-scope-distinction-v1_20260830
sample_type: x-scope-decision-execution-structure-calibration
fact_confidence: 99
classification_confidence: 98
strict_v2_verified_positive_increment: false
x_scope_ordinary_boundary_increment: false
x_scope_dynamic_transition_increment: false
x_scope_decision_structure_calibration_increment: true
may_override_canonical: false
---

# zn ↔ x｜x-scope 决策/执行结构校准｜《The Purge》(2013) James 与 Charlie 对同一住宅 security boundary 的独立切换

## 0｜启动对齐

本轮以 `main@8e16f544ec3ac7b41a18adf83fb88740c5f84fb0` 为写前 HEAD。已重读 `AGENTS.md`、文件权力总览、总入口、L1 十元—五行正本 v1.6、十元关系防遗忘中枢、zn/x 信息卡、zn/x 准度卡、火轴研究总纲、strict-v2 专项、x-scope 专项、最新 evidence ledger 与最近 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

当前有效 evidence-layer 采用最新同步账本：strict-v2 verified positive `0/0`；strict-precondition `18/7`；x-scope ordinary positive `4/3`、boundary `16/13`、dynamic `15/13`、decision-structure calibration `1`；protected-range positive `4/4`、negative `3/3`。

## 1｜作品 / 人物 / 明确阶段

- 作品：`The Purge` (2013)
- actor：James Sandin
- co-execution node：Charlie Sandin
- object：Sandin residence 的 security-boundary control layer（门窗金属 barricades / lockdown system）
- current window：Purge 开始后第一次 lockdown → Charlie 为受伤陌生人独立解除 security system → 陌生人进入 → James 独立重新启用 security system。

公开剧情与剧本材料一致：James 先启用系统，金属屏障封闭门窗；Charlie 看到受伤陌生人后自己解除系统，使其进入；James 随后重新启用系统。来源：

- Universal/公开剧情摘要可交叉验证：`https://en.wikipedia.org/wiki/The_Purge_(2013_film)`
- ScriptSlug screenplay：`https://assets.scriptslug.com/live/pdf/scripts/the-purge-2013.pdf`

本轮只测试上述同一 boundary control layer，不把后续 armed gang 强攻、James 生死或邻居介入倒灌进本轮 x-scope 判定。

## 2｜zn 证据

本轮不锁 `zn`。

James 的家庭保护、Purge 制度立场、是否应交出陌生人等都存在亲属责任、即时生存压力、制度认同与策略判断等竞争解释。不能由“父亲”“保护家人”“安全系统销售者”或最终牺牲直接倒推 zn。

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_positive_increment: 0
strict_negative_increment: 0
strict_deferred_increment: 0
strict_precondition_increment: 0
```

## 3｜x 权限结构固定拆分

```yaml
actor: James Sandin
object: Sandin residence security-boundary control layer

permission_type:
  contact: true
  use: true
  management: true
  activate_lockdown: true
  re_activate_lockdown: true
  disable_lockdown: not_tested_for_James_in_this_window
  exclude_entry_when_boundary_on: system_effect_true_for_ordinary_entry
  ultimate_disposition_over_house: not_inferred

scope:
  spatial: house doors/windows security boundary
  permission_family: lockdown activation / boundary-state control
  global_all_house_rights: false

term: current Purge-night window
revocability: boundary state is operationally reversible
return_obligation: n/a

same_layer_pre_effect_veto:
  James_action: none_shown_when_he_reactivates
  but_independent_co_execution_node_exists: Charlie

global_override:
  no_single_superior_node_needed_for_this_test

ultimate_title:
  not_needed_for_current_x

decision_structure:
  not_joint_threshold
  not_joint_unanimous
  multi_principal_shared_access

consultation_structure:
  no_mandatory_consultation_before_Charlie_disables
  no_mandatory_consultation_before_James_reactivates

final_decision_structure:
  boundary_state_at_each_act_can_be_changed_by_one_authorized_actor

execution_structure:
  parallel_independent

co_decision_nodes:
  mandatory_joint_nodes: none_observed
  independent_execution_nodes:
    - James
    - Charlie

unilateral_effect:
  James_reactivate: true
  Charlie_disable: true

scope_transition:
  permission_structure: no_verified_change
  realized_boundary_state: ON -> OFF -> ON
```

## 4｜关键压力：shared execution ≠ joint final decision

最容易误写成：

```text
James 和 Charlie 都能控制 security system
→ 两人共同控制
→ joint decision
```

但剧情 reality-test 正好反证这种偷换。

Charlie 不需要 James 同意即可使 security boundary 从 ON 变 OFF；James 之后也不需要 Charlie 同意即可重新让 boundary 从 OFF 变 ON。也就是说，多主体都拥有同一 permission family 的现实接口，但每次 system state change 并不要求跨越 mandatory multi-node approval threshold。

因此应写：

```text
multiple authorized actors
+ each can independently make same-layer state change effective
→ shared / parallel-independent execution
≠ joint-threshold
```

这与 current x-scope 的固定门完全一致：`shared permission ≠ joint-threshold`；多个 co-holder 若任一可独立生效，不得写成 joint-threshold。

## 5｜对 James 的 x 归因：真实但不 exclusive

James 的 `x` 不能因为 Charlie 也有接口就被抹掉：

- James 已现实启用 lockdown；
- Charlie 暂时关闭后，James 又现实重新启用；
- 所以 James 对该 boundary-control layer 的 use/manage/activation x 是 true。

但同一事实也禁止升级：

```text
James has real security-management x
≠ James has exclusive final x over boundary state
```

因为 Charlie 已被 reality-test 证明存在 endogenous independent execution node。

所以本轮锁：**共同可调用不等于 joint；主体真实 x 不等于 exclusive x。**

## 6｜对象层 / 当前窗口 / 名义现实

- same object layer：同一住宅 security-boundary control layer。
- same current window：同一晚第一次 lockdown 的连续数分钟。
- 名义/现实：不依赖 James 是房主、父亲、销售者或系统购买者；只看谁的 command 能现实改变 boundary state。
- 局部/整体：这里只锁 security-boundary control，不倒灌为全部住宅处分权、全部家庭成员控制权或 permanent exclusive title。

## 7｜最近邻

### 7.1 Crimson Tide
`Captain + XO mandatory concurrence`：同一 final launch 必须跨固定多节点门，任一单节点不能独立让 final launch 生效，属于 genuine joint-threshold。

### 7.2 The Purge
James 或 Charlie 任一人的同层 command 都可独立改变 security state，所以属于 shared / parallel-independent execution，不是 joint-threshold。

最小差异：

```text
multi-actor presence
≠ joint

mandatory multi-node threshold
= joint evidence

independent per-node effect
= shared / parallel-independent
```

### 7.3 Queeg / The Caine Mutiny
Queeg 是 replacement execution node 现实接管后旧 actor 的 command effect 退出；本轮则没有 old node 退出，James 与 Charlie 的节点都真实存在。因此不是 command-node replacement/contraction 的重复样本。

## 8｜拿掉 / 反向

### 拿掉 Charlie 的 independent effect
如果 Charlie 只能请求 James 开门，而 security boundary 必须由 James 批准后才会解除，则只证明 consultation/input，不证明 shared execution。

### 拿掉 James 的 independent effect
如果 Charlie 解除后，James 必须获得 Charlie 同意才能重新启用，则可转向 genuine joint-threshold 候选。

### 反向
若作品显示任一 actor 的 command 在另一个 actor 未批准前都无法生效，则本轮分类必须撤销，改测 joint。

实际材料相反：Charlie 的 disable 与 James 的 re-enable 都分别现实生效。

## 9｜第三因素冻结

冻结：

- James 的职业与房主标签；
- 父亲身份；
- Purge 法律制度；
- 陌生人的道德身份；
- 后续 gang 是否突破；
- 邻居是否介入；
- 系统究竟“高级不高级”。

只留下：

```text
same system
+ same permission family
+ Charlie unilateral disable effect
+ James unilateral re-enable effect
```

分类仍成立。

## 10｜strict-v2 / protected-range 判定

### strict-v2
`zn` 未独立过门，不启动 strict。verified positive 继续 `0/0 works`。

### protected-range
本轮不计 protected-range positive/negative。Charlie 放入陌生人的动作是主动授权通行，不是 hostile risk 对 boundary 的外部强制 penetration；后续 armed gang risk-test 属另一个明确阶段，不能为了凑动态开关把两段硬焊成一个 control。

这也是本轮边界收益：

```text
boundary state OFF by authorized co-user
≠ protected-range risk-test failure
```

risk-test 要求真实风险攻击/进入并测试阻断效果；授权开门只是 permission/execution structure 事实。

## 11｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

strict_v2_verified_positive: +0
strict_v2_negative: +0
strict_deferred: +0
strict_precondition: +0

x_scope_positive: +0
x_scope_boundary: +0
x_scope_dynamic: +0
x_scope_decision_structure_calibration: +1

protected_range_positive: +0
protected_range_negative: +0
```

current x-scope specialty file 的 `decision_structure_calibration_controls=1` 是多数/k-of-n 对 `absence of individual veto ≠ unilateral` 的结构校准；本轮是另一方向：**multiple co-holders + independent unilateral effect ≠ joint-threshold**。机制不同，因此可增加 calibration control。

有效 calibration layer：

```text
1 control
→ 2 controls
```

当前 schema 未维护 `decision_structure_calibration_work_count`，本轮不擅自发明正式 work counter；《The Purge》作为新独立作品记录在 provenance 中，但 ordinary boundary/dynamic works 均 `+0`。

## 12｜本轮锁定的最小规则

```text
shared access / shared permission
≠ joint final decision

multiple actors can touch same permission family
≠ mandatory co-decision

if each authorized actor can independently make same-layer effect real
→ execution structure = shared / parallel-independent

real x for actor A
≠ exclusive x for actor A
when actor B has an independently effective same-layer node
```

## 13｜下一轮最高信息增益

P0 继续优先 strict-v2 天然对象构成型候选，不降门。

若 P0 继续无 ≥95，优先找真正的 P4 动态迁移：

```text
same actor + same object + same permission family
Stage A: parallel-independent/shared execution
→ real node-removal / credential withdrawal / access revocation
Stage B: only one actor can make same-layer effect real
→ unilateral execution
```

或反向 `unilateral → shared/parallel-independent`，要求新增 co-execution node 真正通过 reality-test；不要把“多个人被咨询”冒充执行结构迁移。
