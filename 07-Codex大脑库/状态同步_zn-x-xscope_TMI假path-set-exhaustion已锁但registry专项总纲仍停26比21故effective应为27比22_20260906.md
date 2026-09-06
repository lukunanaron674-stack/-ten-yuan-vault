---
type: ten-yuan-fire-axis-state-correction
status: state-correction
knowledge_status: evidence-locked
authority_level: L4
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
source_evidence_commit: 0b577f5e6fa5b857d712f9896a26acbc951f54fb
source_evidence: Three Mile Island Unit 2 false path-set exhaustion guard
control_increment_this_file: 0
independent_work_increment_this_file: 0
may_override_canonical: false
created: 2026-09-06
---

# zn-x x-scope 状态同步｜TMI false-exhaustion 已锁，effective boundary 应为 27/22

## 0｜本轮性质

本轮不采新作品，不修改 L1/L2 canonical，只纠正一处会影响后续火轴采样判断的 L4 状态漂移。

写前最新 main 为 `21b5475ba2bc5c7befd6586b1a55274618cfd227`。current realtime registry、x-scope 专项与研究总纲仍登记：

```text
x-scope boundary guards = 26 controls / 21 works
```

但 `0b577f5e6fa5b857d712f9896a26acbc951f54fb` 已 evidence-lock Three Mile Island Unit 2 的 false path-set exhaustion 最近邻反例，并明确同 criterion 增加：

```text
+1 boundary guard
+1 independent work
```

因此 evidence-layer effective truth 应为：

```text
26 controls / 21 works
→ 27 controls / 22 works
```

本状态文件自身不重复加数。

## 1｜为什么这是高信息增益状态修正

Apollo 13 已锁首份 verified complete path-set exhaustion：同 actor、同 object/actuator/effect layer，完整 relevant path-set audit 后真实 `3→1→0`，并且 tested-layer effect OFF。

TMI-2 则锁住最近邻反例：

```text
tested-layer effect = OFF
但 AFW pumps 仍运行
+ closed discharge/isolation valves 只是阻断
+ same actor 仍可现实开阀
+ 开阀后 same-layer target effect 恢复
→ relevant path 并未归零
```

所以 current path-set 方法新增的不是另一个普通 x 案例，而是：

> `effect OFF ≠ path exhausted`；必须区分 active / blocked / isolated / recoverable / revoked / destroyed / exhausted。

如果 registry / specialty / overview 继续停在 `26/21`，后续会把已经存在的 false-exhaustion guard 当成空缺重复采样。

## 2｜zn / x / 对象层复核

TMI-2 本轮不锁 `zn`。恢复辅助给水可由职责、程序与紧急安全要求解释，高风险或事故严重性不能自动制造 zn。

`x` 只锁 TMI-2 control-room operators 对窄对象 `auxiliary-feedwater delivery to steam generators` 的现实 operational control / valve actuation / feedwater restoration。

对象层与 current window：

```yaml
actor: TMI-2 control-room operators
object: auxiliary-feedwater delivery to Steam Generators A/B
actuator_layer: running AFW pumps + discharge/isolation valve actuation
target_effect_layer: actual AFW flow reaching steam generators
current_window: main-feedwater loss -> AFW pumps running but isolated -> operators reopen valves -> AFW flow restored
```

不把 reactor ownership、NRC authority、primary-side ECCS/HPI 或最终事故后果倒灌为主体 x。

## 3｜最近邻 / 拿掉 / 反向 / 第三因素

最近邻：Apollo 13 true exhaustion。

拿掉 same-actor reopen ability，AFW blocked path 才更接近真正不可恢复；保留 reopen ability 但令当前 flow=0，则仍可得到 `effect OFF + path > 0`，故 `effect OFF → exhausted` 反推失败。

冻结 stuck-open relief valve、HPI/ECCS 后续误操作、core damage、事故责任与监管后果；这些解释事故严重度，不决定 AFW path 是否 exhausted。

## 4｜判定与统计

```yaml
strict_v2: no_change
protected_range: no_change
x_scope_positive: no_change
x_scope_dynamic: no_change
x_scope_path_set_exhaustion_verified: 1_control_1_work_no_change
x_scope_boundary_effective_before_tmi: 26_controls_21_works
x_scope_boundary_effective_after_tmi: 27_controls_22_works
this_file_control_increment: 0
this_file_work_increment: 0
```

## 5｜治理边界

- 本文件只同步 L4 evidence truth，不修改 L1/L2 canonical。
- TMI source evidence 已经计过 `+1 boundary guard / +1 work`，本文件严禁重复计数。
- registry、x-scope 专项、研究总纲若仍显示 `26/21`，应视为 stale sync debt；后续同步时统一改为 `27/22`。
- Apollo 13 true exhaustion 与 TMI false exhaustion 已形成正反最近邻后，不再优先采第二个同机制普通案例。

## 6｜下一高价值缺口

在当前 path-set 子方法下，下一份真正有价值的证据应优先寻找：

> same actor + same object/actuator/effect family 中，某 route 先处于 blocked/recoverable，随后因真实 trigger 失去 repair/reopen/bypass 能力并转为 destroyed/revoked/exhausted；要求 tested-layer effect 同时 OFF，并完成 direct repair、bypass、delegated route、parallel authority、emergency interface、alternate execution node 的 completeness audit。

目标是把 path-set 从静态计数继续推进为动态状态迁移，而不是再收一个“暂时没效果”的换皮反例。

TASK_DONE: FIRE-ZN-X-TMI-FALSE-EXHAUSTION-STATE-SYNC-27-22-20260906
