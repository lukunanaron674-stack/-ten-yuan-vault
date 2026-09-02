---
type: ten-yuan-fire-axis-boundary-pressure-test
authority_level: L4
knowledge_status: evidence-locked
status: active-evidence
axis: fire
pair: zn-x
work: King Lear
actor: King Lear
stage: post-abdication hosting / Act 1 Scene 4 through Act 2 Scene 4
sample_type: x-scope-dynamic-quantitative-permission-cap-contraction-by-counterparty-gate
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 97
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
protected_range_increment: false
created: 2026-09-03
---

# zn↔x 火轴边界压力测试｜King Lear｜retained reservation ≠ fixed current scope

## 0｜启动对齐
写前以 `main@a68e5a8cc360c68e79375c42876da6e5dc70e086` 为真值。已重读最近 commits，并按 current canonical 对齐 L0/L1 文件权力与成熟度门禁、L1 十元—五行正本 v1.6、zn/x 信息卡与准度卡、相关关系卡/`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current 与 x-scope current。current canonical 高于本记录；木轴只迁移验证方法，不迁移理论结论。

strict-v2 verified positive 仍为 `0 / 0 works`。x-scope 已 pending-review，因此本轮不堆普通正例，只测试一个新的动态边界：**同一 current permission family 可以不经 credential 失效、物理夺占或资产份额稀释，而由同层 counterparty gate 直接逐级下调可被现实容纳的最大数量上限。**

## 1｜事实 / 触发 / 对象 / 可观察结果
- 作品：William Shakespeare, `King Lear`。
- actor：Lear。
- 对象：Lear 的个人骑士随从团。
- 对象层：退位安排后，在女儿住所中由 Lear 保留并现实携带/容纳的 personal-retinue hosting allowance；不把已转移的王国 sovereignty、revenues、ultimate household title 打包进来。
- 初始安排：Lear 把 powers / revenues 分给 Goneril 与 Regan，同时明确保留 `a hundred knights` 并轮流居住在二女处。
- Stage A reality-test：Lear 实际带着百名骑士居于 Goneril 家；Goneril 对这 `hundred knights` 的现实存在与风险明确抱怨，说明不是纸面数字。
- Trigger 1：Goneril 要求 Lear dismiss half of his train，形成 `100 -> 50 max` 的宿主侧同层容纳上限收缩。
- Trigger 2：Lear 转向 Regan 后，Regan 明确只允许 `five-and-twenty`，并说对更多人 `no more ... give place or notice`，形成 `50-equivalent fallback -> 25 max`。
- Trigger 3：Goneril 随后追问为何需要 25、10、5，Regan直接问 `What need one?`；两人最终都明确愿意接纳 Lear 本人但拒绝任何 follower，形成该 hosting permission family 的 `>0 -> 0`。
- 可观察结果：Lear 不接受被压缩后的条件，离开住所进入暴风雨；这不是“继续拥有100但选择暂不用”，而是当前宿主 gate 已明确拒绝相应数量进入/停留。

Folger 的作品梗概与全文对这些节点一致：Act 1 Scene 1 明示 Lear 保留一百骑士；Act 1 Scene 4 Goneril 要他裁掉一半；Act 2 Scene 4 Regan只给二十五名位置，随后两姐妹把可容纳随从压到零。

## 2｜zn 独立证据
本窗口可观察到 Lear 对 dignity / kingly status / being-followed 的强烈坚持，但本轮不把它锁成 strict `zn`：
- pride、身份惯性、老王权威期待、实际安全与体面需求等 competing anchors 很强；
- 即使独立命名出“不愿被削成纯粹受养者”的原则，拿掉该原则后，personal retinue 仍有护卫、服务、身份展示与日常随从等独立用途；
- 因而 `zn→x` 仍无法 ≥95 通过。

该失败与既有 `true zn + true x but independent purpose/ranking anchors remain` 相邻，不新增 strict-precondition guard。

结论：strict positive / negative / deferred / precondition 全部 `+0`。

## 3｜x-scope 固定拆分
```yaml
actor: King Lear
object: personal knight retinue
object_layer: post-abdication hosted-retinue allowance in daughters' residences
permission_type:
  contact: true
  use_of_retinue_services: true_stage_A
  keep_with_person: true_stage_A
  host_inside_counterparty_residence:
    stage_A: up_to_100 reality-tested at Goneril
    stage_B: up_to_50 offered/required by Goneril
    stage_C: up_to_25 offered by Regan
    stage_D: 0 followers accepted by Goneril/Regan
  management_of_retinue: locally_true_but_not_global_household_control
  disposition_over_daughters_household: false
  veto_over_host_capacity: false
  exclusion: not_global
  transfer: not_material
scope:
  stage_A: quantitative cap 100
  stage_B: quantitative cap 50 at Goneril
  stage_C: quantitative cap 25 at Regan
  stage_D: quantitative cap 0 for continued daughter-hosting
quantitative_scope:
  transition: 100 -> 50 -> 25 -> 0
term: same post-abdication hosting window
revocability: reality-tested_by_counterparty_conditions
return_obligation: n/a
same-layer_pre-effect_veto:
  host_residence_gate: Goneril/Regan can deny additional followers before accommodation
  Lear: can reject the offered terms by leaving, but cannot unilaterally force the former cap to remain
global_override:
  daughters as current household holders control admission/accommodation at their residences
ultimate_title:
  household/residence title not attributed to Lear on tested layer
decision_structure:
  Lear controls whether to travel with / retain his own followers
  host counterparty controls how many will be admitted/accommodated in that residence
consultation_structure: conflict/bargaining rather than consultation
final_decision_structure:
  accommodation quantity requires surviving host gate
execution_structure:
  stage_A hundred-knight retinue is physically present
  later stages host gate reduces/denies admissible quantity; Lear exits rather than accept zero
co-decision_nodes:
  quantitative hosting permission depends on both Lear's retention choice and current host acceptance
scope_transition: quantitative permission-cap contraction
permission_type_transition: hosting/keep-with-person permission remains same family while maximum admissible quantity shrinks
transition_trigger: counterparty host veto / revised accommodation condition
```

## 4｜关键压力
错误推理：

```text
Lear 在退位安排里“保留一百骑士”
→ 这个 x 的 current scope 固定为100
→ 后续只要名义 reservation 仍被 Lear 援引，就仍可写 100
```

本轮锁定：

```text
retained reservation
≠ immutable current quantitative scope

same permission family
+ same actor
+ counterparty pre-effect hosting gate
+ max admissible quantity 现实下调
→ x 可以 100 -> 50 -> 25 -> 0 阶梯收缩
```

因此 `x` 不只需要拆 permission type，还需要拆 `quantitative_scope / cap`。一个 permission 仍“同名存在”时，其现实有效范围可以已经被压缩到接近零。

## 5｜最近邻排除
### Eduardo Saverin / The Social Network
Eduardo 是 divisible equity object 本身从 `34.4% -> 0.03%` 的 quantitative ownership dilution；数量变化发生在资产份额本体。

Lear 本轮不是资产份额被稀释，而是**同一 hosting permission 的最大允许数量 cap 被 counterparty gate 逐级下调**。这使 `quantitative_scope contraction` 从“divisible asset share”扩展到“permission ceiling”。

### Terminator 2 / Dyson
Dyson 是 credential backend invalidation：access `ON -> OFF`；Lear 不涉及凭证失效，而是在 permission family 仍可部分存在时由 `100 -> 50 -> 25 -> 0` 连续收窄。

### John Wick / Mustang
John Wick 是对象被外部夺走，current possession/use 直接退出；Lear 的骑士并未被女儿夺为己有，变化的是女儿住所对其 retinue 的 current accommodation scope。

### Casino Royale / Vesper
Vesper 是 source-specific veto 不等于 target-effect global veto；Lear 本轮相反，宿主 gate 正是 tested accommodation effect 的 mandatory pre-effect node，因此它可以真实改变该层 quantitative scope。

## 6｜拿掉 / 反向 / 第三因素冻结
### 拿掉宿主 gate
如果 Goneril / Regan 只是抱怨骑士太多，却仍现实允许100人继续居住，则不能锁 quantitative contraction；态度与 permission delta 必须分开。

### 拿掉 Stage A reality-test
如果一百骑士只是退位协议里的名义保留、从未现实出现，则最多能做 formal reservation vs realized-x 边界，不能锁 `100 -> narrower` 的 current dynamic。

### 反向
真正镜像应是：同一 actor + same permission family，当前 cap 已明确为较低值，随后 counterparty gate 被解除或扩容，同一对象层现实允许数量从 `25 -> 50 -> 100` 上调，形成 quantitative permission expansion。

### 第三因素冻结
冻结 Lear 的王位、父女伦理、年龄、悲剧主题、人格、胜负与后续结局；只保留：`same actor + same retinue object family + same post-abdication hosting window + observed 100 presence + counterparty gate + explicit numerical caps`，分类仍成立。

## 7｜strict-v2 / x-scope 判定与成熟度
```yaml
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
x_scope_positive: +0
x_scope_boundary: +0
x_scope_dynamic: +1
x_scope_dynamic_work: +1
protected_range_positive: +0
protected_range_negative: +0
fact_confidence: 99
classification_confidence: 97
knowledge_status: evidence-locked
```

写前 current effective dynamic ledger 以最近 evidence records 为准：`22 controls / 20 independent works`。`King Lear` 此前未进入 current dynamic-work 集合，且本轮新增机制是 **permission ceiling / admissible-quantity cap contraction by same-layer counterparty gate**，区别于 equity dilution、credential invalidation、physical dispossession 与 execution-node replacement，因此：

```text
22 / 20
-> 23 dynamic controls / 21 independent works
```

不修改已 pending-review 的 L1/L2 canonical，也不把普通正例槽继续堆量。

## 8｜本轮锁定句
> **current x 的 permission type 不变，不代表 quantitative scope 不变。若同层 effect 必须经过 counterparty gate，且该 gate 将同一对象层的最大可容纳/可调用数量从高值逐级下调，则可以锁 `permission-cap contraction`；历史 reservation 或旧上限不能覆盖当前现实 cap。**

## 9｜下一轮最高信息增益
P0 继续寻找 strict-v2 首个 verified positive，不降门。

若仍无 ≥95，优先寻找本轮严格反向：

```text
same actor + same object layer + same permission family
current cap 已 reality-tested at low level
-> same-layer gate 解除/扩容
-> higher quantity is actually admitted/called/managed
-> quantitative x scope low -> high
```

这样可把 `asset-share dilution` 与 `permission-ceiling contraction/expansion` 两类 quantitative x 彻底分开。