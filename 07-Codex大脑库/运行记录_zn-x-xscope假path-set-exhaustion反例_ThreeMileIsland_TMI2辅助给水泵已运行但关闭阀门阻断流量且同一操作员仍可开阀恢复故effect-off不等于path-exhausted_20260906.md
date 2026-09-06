---
type: ten-yuan-fire-axis-evidence
status: evidence-locked
knowledge_status: evidence-locked
authority_level: L4
axis: fire
pair: zn-x
research_slot: x-scope-path-set-exhaustion-nearest-negative
criterion_version: current-x-scope-distinction-v1_20260830
sample: Three Mile Island Unit 2 accident
actor: TMI-2 control-room operators
object: auxiliary-feedwater delivery to the steam generators
permission_type: operational control / valve actuation / feedwater restoration
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
strict_v2_increment: false
protected_range_increment: false
created: 2026-09-06
may_override_canonical: false
---

# zn-x x-scope｜假 path-set exhaustion 最近邻反例｜Three Mile Island Unit 2

## 0｜本轮结论

本案锁定一个 Apollo 13 真耗尽的最近邻反例：

> **tested-layer target effect 暂时 OFF，不等于 relevant path-set 已耗尽。若 same actor 对 same object/effect family 仍保有可现实调用的解除隔离、复位或 direct-recovery route，则应判 `blocked / recoverable path retained`，不得判 `path-set exhausted`。**

更短写法：

```text
flow = OFF
≠
path = 0

closed isolation state
+ same-actor reopen command still effective
=
blocked-but-surviving path
```

这不是普通 x 正例，而是 current P1 的 false-exhaustion adversarial guard。

## 1｜事实锚点

NRC 对 1979-03-28 TMI-2 事故的官方通报记录：

1. 初始事件是 main feedwater 丧失，主给水泵不能继续向 steam generators 供水。
2. 两条 auxiliary feedwater trains 在事件发生时被阀门隔离；约 `t=30 sec` 时三台 auxiliary feedwater pumps 已经运行并建立压力，但由于 discharge valves 关闭，**没有流量注入**。
3. 约 `t=8 min`，操作员通过打开这些关闭阀门启动 auxiliary feedwater flow；`t=8 min 21 sec` Steam Generator A 压力开始恢复。

官方来源：
- NRC, Bulletin 79-05A, Nuclear Incident at Three Mile Island - Supplement: https://www.nrc.gov/reading-rm/doc-collections/gen-comm/bulletins/1979/bl79005a
- NRC, Backgrounder on the Three Mile Island Accident: https://www.nrc.gov/reading-rm/doc-collections/fact-sheets/3mile-isle

## 2｜对象层 / current window

```yaml
actor: TMI-2 control-room operators
object: auxiliary-feedwater delivery to Steam Generators A/B
path_object_layer: auxiliary feedwater system delivery path
path_actuator_layer: running AFW pumps + discharge/isolation valve actuation
path_target_effect_layer: actual AFW flow reaching steam generators
current_window: main-feedwater-loss initiation -> AFW valves reopened and flow restored
```

本案不能把对象抬高为“整个 reactor decay-heat removal system”，也不能把 primary-side ECCS/HPI、主给水、后续其他冷却方式一起后验拼成 composite path-set。

被测的是更窄的：

> **TMI-2 操作员对 auxiliary-feedwater delivery path 的 current operational x。**

## 3｜x / 权限结构

`x=true` 只锁 narrow operational control：

- 操作员可通过 control-room actuation 改变 AFW discharge/isolation valve 状态；
- 三台 AFW pumps 已经运行，说明 emergency feedwater source node 并未消失；
- closed valves 阻断了当前 target effect，但并未消灭操作员对该 same-layer delivery path 的现实恢复能力；
- 约 8 分钟开阀后，同一系统重新产生 AFW flow，直接验证该 recovery route 在 current window 内可实现。

不倒灌：

- reactor ownership / plant title；
- NRC authority；
- 自动启动逻辑本身；
- primary-side emergency cooling；
- 最终事故严重程度。

## 4｜path-set completeness audit

若只观察：

```text
main feedwater OFF
+ steam generators drying out
+ AFW flow = 0
```

很容易误写成“给水路径已经耗尽”。

但 complete audit 必须继续检查 emergency interface 与 direct recovery：

```text
AFW pumps running
+ discharge valves closed
+ operators retain valve-opening command
+ opening valves restores same target flow
```

所以在被测窄层里至少仍存在一条：

```text
running AFW source
→ reopen blocked discharge/isolation valve
→ restore AFW flow to steam generator
```

该路径在 `flow=0` 阶段不是 destroyed/exhausted，而是 **isolated / blocked / recoverable**。

因此：

```text
apparent surviving path count = 0
true surviving recoverable path count >= 1
```

## 5｜最近邻｜Apollo 13

Apollo 13 首份 verified path-set exhaustion 锁的是：

```text
same actor
+ same object layer
+ same actuator/effect family
+ complete path audit
+ 3 -> 1 -> 0
+ tested-layer effect OFF
```

TMI-2 的最小差异恰好在最后一步前被击穿：

```text
TMI-2 target effect OFF
但 same-layer emergency-feedwater hardware 仍存在
且 same actor 可解除 valve isolation
且解除后 target effect 恢复
=> path count 不能写 0
```

故新增护栏：

> **`effect OFF` 只是 exhaustion 的必要观察之一，不是充分条件。必须区分 destroyed path、revoked path、blocked path、isolated path 与 recoverable path。**

## 6｜拿掉 / 反向

### 拿掉测试

拿掉操作员对 closed discharge valves 的现实 reopen ability：

- AFW pumps 即使运行，也无法由该 same actor 恢复到 steam-generator feedwater effect；
- 这才更接近被测 actor/object-layer path 真正归零。

### 反向测试

保留操作员 reopen ability，但让当前 flow=0：

- target effect 可以暂时 OFF；
- relevant path 仍不应计 0；
- 因此 `current effect OFF -> path exhausted` 的反推失败。

## 7｜第三因素冻结

冻结：

- stuck-open pressurizer relief valve；
- HPI/ECCS 的后续误操作；
- reactor coolant inventory；
- 最终 partial meltdown；
- 事故责任、培训评价与监管后果。

这些因素解释事故为何继续恶化，但不是本轮判断 AFW path 是否已经 exhausted 的必要组成。

## 8｜zn 判定

本轮不锁 `zn`。

操作员恢复辅助给水可由职责、程序、紧急安全要求与系统状态直接解释；高风险、高代价与事故严重性都不能自动制造“不可轻易让渡的内部意义与未来指导资格”。

所以：

```yaml
zn_locked: false
strict_v2_increment: false
```

## 9｜x-scope / protected-range / strict 判定

```yaml
strict_v2: no_change
protected_range: no_change
x_scope_positive: no_change
x_scope_dynamic: no_change
x_scope_boundary_guard: +1
independent_work: +1
```

本案建议作为 path-set exhaustion 子方法中的 negative / adversarial boundary guard，而不并入 ordinary permission expansion/contraction 动态。

若按 current evidence-layer 追加，本轮 effective：

```text
x-scope boundary guards:
26 controls / 21 works
→ 27 controls / 22 works
```

registry / overview / specialty 是否同步应另按并发与状态更新处理；本 evidence 文件自身只证明新增 control，不越权修改 L1/L2 canonical。

## 10｜新最小判据

path-set completeness audit 在现有字段之外，应明确区分 path state：

```yaml
path_state:
  - active
  - blocked
  - isolated
  - recoverable
  - revoked
  - destroyed
  - exhausted
```

只有当 same actor / same object / same actuator-or-effect family 下：

- active = 0；
- blocked/isolated path 不存在可现实解除方式；
- recoverable = 0；
- direct repair / bypass / delegated route / parallel authority / emergency interface / alternate execution node 均完成审计；
- tested-layer target effect 同时 OFF；

才允许写：

```text
verified path-set exhaustion = true
```

TASK_DONE: FIRE-ZN-X-PATH-SET-FALSE-EXHAUSTION-TMI2-20260906
