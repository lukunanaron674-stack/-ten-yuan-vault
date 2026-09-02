---
type: ten-yuan-fire-axis-x-scope-boundary-pressure-test
authority_level: L4
knowledge_status: evidence-locked
status: criterion-calibration
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
sample_type: x-scope-decision-execution-layer-separation
priority_bucket: P3-P5
work: WarGames (1983)
actor: Captain Jerry Lawson / 1st Lieutenant Steve Phelps
phase: opening missile-silo launch drill
fact_confidence: 99
classification_confidence: 99
may_override_canonical: false
ordinary_x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
x_scope_dynamic_transition_increment: false
x_scope_decision_structure_calibration_increment: true
strict_v2_verified_positive_increment: false
strict_precondition_increment: false
created: 2026-09-02
---

# zn↔x 火轴边界压力测试｜WarGames｜双人同步执行阈值不等于 joint final decision

## 0｜启动对齐

本轮以写前 `main@e2b910468d6874e64fc44f6b8663125b20db9f50` 为准，重读 L0/L1 权力门禁、L1 十元—五行正本 v1.6、zn/x 信息卡与准度路由、相关关系卡/补卡、火轴待审议清单、火轴研究总纲、strict-v2 current、x-scope current、joint-final-decision 判据校准、最近 evidence 与 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

当前 x-scope 已 pending-review，普通正例不再堆量；本轮只记录新判据冲突：**mandatory multi-node execution threshold 是否足以推出 joint final decision。**

## 1｜事实窗口

《WarGames》开场导弹发射井演习中，两名导弹军官收到已经认证的 launch order。两人分别持有自己的 launch key，最后发射要求两把钥匙在相隔位置同步转动；Captain Lawson 在倒计时末拒绝转动自己的钥匙，因此导弹没有发射。

电影随后解释，这些人类操作员的拒绝正是把他们移出发射执行 loop、转交 WOPR 自动化的理由。

外部事实来源：
- IMDb plot synopsis：两名军官必须共同遵循命令并协同完成发射，其中一人拒绝后发射失败：https://www.imdb.com/title/tt0086567/plotsummary/
- 影片台词/角色记录：两人分别插入并操作 launch key；Phelps 要求 Lawson “turn your key”，Lawson 拒绝：https://www.imdb.com/title/tt0086567/characters/nm0817983/
- 同期影片资料明确描述 launch control board 只能由两名 launch officers 同时转动钥匙触发：https://www.ataricompendium.com/archives/magazines/video_games/video_games_aug83.pdf

## 2｜zn 证据

本轮不锁 `zn`。

Lawson 拒绝发射表现出强烈道德判断，但在该极短窗口内不足以 ≥95 排除即时恐惧、程序不确定、责任压力等 competing explanations，也不足以证明 current zn 所需的跨阶段未来调用与稳定冲突排序。

```yaml
zn_current: not_locked
strict_test_allowed: false
```

因此本轮不进入 strict-v2 双向门，strict verified positive 继续保持 `0 / 0 works`。

## 3｜x 权限结构

```yaml
actor:
  - Captain Jerry Lawson
  - 1st Lieutenant Steve Phelps
object: missile-launch execution layer

permission_type:
  contact: true
  use: true_on_own_launch_key
  call: false_for_upstream_launch_order
  management: procedural_local
  disposition: false_for_strategic_launch_decision
  veto: true_at_execution_threshold
  exclusion: n/a
  transfer: not_tested

scope:
  individual_key_execution: local
  combined_launch_execution: joint-threshold
  strategic_target_or_launch_policy: outside_tested_scope

term: current authenticated launch sequence
revocability: not_material
return_obligation: n/a

same-layer_pre-effect_veto:
  execution_layer: true_each_keyholder
  upstream_launch_decision_layer: not_established

global_override: authenticated upstream launch order already exists
ultimate_title: n/a

decision_structure:
  upstream_launch_decision: external_to_silo_pair
  local_execution_compliance: two-person

consultation_structure:
  pair_can_speak_but_consultation_not_source_of_launch_order

final_decision_structure:
  strategic_launch_decision: not_jointly_created_by_the_two_silo_officers

execution_structure:
  joint-threshold

co-decision_nodes:
  strategic_final_decision: not_the_two_keyholders

co-execution_nodes:
  - Lawson key
  - Phelps key

decision_threshold_type: fixed-k-of-n
approval_threshold:
  required_execution_nodes: 2
  eligible_execution_nodes: 2
unilateral_execution_effect: false
```

## 4｜关键压力：joint execution ≠ joint final decision

最危险的误判是：

```text
两个人都必须动作
+ 任一人拒绝都会阻断结果
→ 两个人共同作出最终决定
```

不成立。

本片最小链是：

```text
上游 launch order 已形成并完成认证
→ 两名 silo officers 接收命令
→ 两把钥匙形成 2-of-2 execution threshold
→ 任一人不转钥匙，执行停住
```

因此能锁的是：

> **mandatory multi-node execution threshold 可以产生 same-layer execution veto，但不能自动推出这些执行节点共同构成 upstream/final decision source。**

即：

```text
joint_execution = true
unilateral_execution = false

不推出

joint_final_decision = true
```

必须分别问：
1. 谁决定“要不要发射 / 发射什么”；
2. 谁只是让已经形成的决定穿过现实执行门。

## 5｜最近邻

### 对照《十二怒汉》
《十二怒汉》的 12/12 阈值直接构成 verdict 本身：阈值未满足，最终裁决不存在。

```text
joint threshold
= final decision formation
```

### 对照多数董事会
董事多数票也是 board act 的形成规则：达到阈值才生成 final decision。

```text
joint threshold
= final decision formation
```

### WarGames
双钥匙阈值发生在已经收到并认证 launch order 之后：

```text
joint threshold
= execution gate
≠ source decision formation
```

### 对照《The Purge》
《The Purge》锁的是多个 actor 都能独立切换同一 security state，因此是 `shared / parallel-independent execution`，不是 joint threshold。

本轮补齐另一端：

```text
WarGames = mandatory joint execution
但仍不等于 joint final decision
```

于是 current 至少需要三分：

```text
joint final decision
joint execution threshold
shared / parallel-independent execution
```

## 6｜拿掉 / 反向

### 拿掉上游 launch order
如果两名军官必须先共同决定“是否发射”，只有两人共同批准才生成 launch decision，那么此时才有资格讨论 `joint final decision`。

### 拿掉第二把钥匙阈值
若 Lawson 或 Phelps 任意一人单独转自己的钥匙即可发射，则 execution structure 变为 unilateral / parallel-independent，而不再是 joint execution。

### 反向
“一个人拒绝可以阻断”只能证明该人是 mandatory execution node；若没有证据说明他同时参与 final decision formation，不得升级成 co-final-decision node。

## 7｜第三因素冻结

冻结：军衔、军人身份、核战争主题、道德评价、Phelps 拔枪、演习真假、最终 WOPR 结局。

只测试：
- 上游 decision 是否已经存在；
- 两名军官是否拥有独立 strategic decision source；
- 发射是否必须经过 2-of-2 keys；
- 任一 keyholder 拒绝是否现实阻断执行。

结论不依赖人物标签或结局。

## 8｜判定与成熟度

```yaml
fact_confidence: 99
classification_confidence: 99
knowledge_status: evidence-locked

x_scope_decision_structure_calibration_increment: true
ordinary_x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
x_scope_dynamic_transition_increment: false
strict_v2_verified_positive_increment: false
strict_precondition_increment: false
```

本轮新增 L4 校准句：

> **`joint execution threshold` 与 `joint final decision` 必须分账。执行节点拥有 pre-effect veto，不自动等于它拥有 final-decision authorship。**

当前 decision-structure calibration 有效层由 `2 → 3 controls`。current schema 尚未独立维护 calibration work count，因此不自行制造 work 字段；ordinary literary x-scope controls / works 均不增加。

不修改 L1/L2 canonical，不自动升格 pending-review。

## 9｜统计变化

```yaml
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0

x_scope_positive: +0
x_scope_boundary: +0
x_scope_dynamic: +0

decision_structure_calibration:
  before: 2_controls
  after: 3_controls
  delta: +1_control
  work_count: not_canonically_tracked

protected_range_positive: +0
protected_range_negative: +0
```

## 10｜下一轮最高信息增益

P0 继续优先寻找 strict-v2 首个 verified positive，不降低门槛。

若仍无 ≥95 候选，最高价值转向真正的 P4 动态迁移：

```text
same actor
+ same object
+ same permission family

Stage A: joint execution threshold
真实节点：另一 mandatory execution node 被撤销 / credential consolidation / system redesign
Stage B: unilateral execution
```

或反向 `unilateral → 新 mandatory co-execution node → joint execution`。

这样可以继续检验：**decision topology 与 execution topology 不但需要分账，而且是否能在同一人物、同一对象层上独立迁移。**
