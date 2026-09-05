---
type: ten-yuan-fire-axis-boundary-pressure-test
axis: fire
pair: zn-x
sample: Deepwater Horizon / Macondo well-control incident
sample_type: historical-control
stage: April 20 2010 blowout / BOP emergency shut-in window
criterion_version: current-x-scope-distinction-v1_20260830
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: false
x_scope_dynamic_transition_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_increment: false
protected_range_increment: false
created: 2026-09-05
---

# zn↔x 火轴边界压力测试｜Deepwater Horizon / Macondo｜系统级 path-set ≠ 单一主体 x 的 path-set

## 0｜启动与 current 对齐

本轮写前以 `main@3047c50333f5cb89376bd2fbf20f1d3f0e907099` 为准。已按 L0/L1 启动纪律重读仓库根规则、十元关系必读门禁、L1 十元—五行正本、x current 信息卡、火轴 realtime registry、strict-v2 current 与既有 Dr. Strangelove path-set completeness 护栏；current canonical 高于本记录。木轴 `zx↔nx` 只迁移“路径集合完整审计”的验证方法，不迁移理论结论。

current P1 要求真正的 path-set exhaustion 必须先冻结 direct repair、bypass、delegated route、parallel authority、emergency interface、alternate execution node。本轮没有把事故硬塞成“单一主体 x 的 path exhaustion 正例”，而是锁定其更基础的一条高价值护栏：**目标效果的系统级路径集合，与某一主体实际掌握的 x 路径集合必须分账。**

## 1｜事实窗口

U.S. Chemical Safety Board 对 Deepwater Horizon BOP 控制系统的调查明确区分了：

1. BOP 日常人工控制；
2. 需要人启动的 Emergency Disconnect System（EDS）；
3. 完全自动的 AMF/deadman；
4. 完全自动的 autoshear。

这些路径都以关闭 blind shear ram / 封井为目标。调查记录还指出：事故中这些系统在不同时间都被调用；EDS 人工启动时，平台与 BOP 的通信已经因爆炸和火灾丢失，因此 EDS 不能启动 BSR；AMF/deadman 在失去通信、电力与液压后自动动作，但冗余控制 pod 存在失效/误接线问题；autoshear 后来由 ROV 在海底触发，井流仍未停止。

因此，若只看 target effect“封住 Macondo well”，确实存在一个跨人工、自动、远程节点的系统级路径集合；但这些路径并不都属于同一 actor 的现实 x。

## 2｜x / 路径结构

```yaml
object: Macondo BOP emergency well-shut-in target effect
object_layer: current BOP close/shear/seal execution

system_level_paths:
  normal_manual_BOP_control: human-operated
  EDS: human-initiated emergency interface
  AMF_deadman: automatic alternate execution node
  autoshear: automatic/conditional alternate execution node
  later_ROV_activation: external remote execution node

target_effect: shear/close and seal well at BOP

actor_indexing:
  rig_crew:
    owns_or_operates: [normal_manual_BOP_control, EDS initiation]
    does_not_own_as_direct_permission: [AMF_deadman automatic trigger, autoshear automatic trigger, later ROV node]
  automatic_safety_logic:
    actor_status: not_human_subject_x
  later_ROV_team:
    actor_status: separate execution node

ultimate_title: not_material
same_layer_pre_effect_veto:
  communication_loss: blocks_rig_to_BOP_manual_EDS_path
  latent_control_pod_faults: degrade_redundant_automatic_paths
  drillpipe_position/buckling: blocks_successful_BSR_seal_effect
```

## 3｜本轮真正新增的最小差异

既有 Dr. Strangelove 护栏锁的是：

```text
已枚举控制接口全部失败
≠
所有现实路径已经耗尽
```

本轮新增的不是再说一次“还有隐藏 bypass”。新增的是：

```text
所有指向同一 target effect 的现实路径
≠
同一主体所掌握的 x 路径集合
```

也就是说，path-set completeness 必须至少有两个索引：

```text
A. target-effect system path set
B. actor-indexed x execution path set
```

如果把自动 deadman、autoshear、外部 ROV 节点与 rig crew 的人工 EDS 全塞进一个“crew x”，就是 posthoc composite-x / third-party-or-automatic-node backflow。

因此未来写 `surviving relevant path count = 0` 前，除了证明物理/制度路径完整，还必须回答：**这个 0 是系统级 0，还是被测主体 x 的 actor-indexed 0？** 两者不能互相替代。

## 4｜拿掉 / 反向 / 最近邻

### 拿掉测试

拿掉自动 deadman/autoshear 与后续 ROV 节点，rig crew 的 actor-indexed path set 会明显缩小，但这不能反推原本这些自动/外部路径就是 crew 的 x。

拿掉 crew 的人工 EDS 路径，系统仍保留 automatic deadman/autoshear，所以“主体人工接口归零”也不能直接推出“目标效果系统路径归零”。

### 反向测试

若未来要锁真正 P1 正例，应同时满足：

1. actor/object/current window 固定；
2. actor-indexed 可执行路径集合预先列全；
3. system-level alternate node 单独冻结，不倒灌成主体 x；
4. actor-indexed surviving path `n>1 → 1 → 0` 有逐项现实证据；
5. target effect 对该主体执行层现实 OFF；
6. 若系统仍由第三方/自动节点完成同一效果，只能记“主体 x execution OFF / system effect ON”，不能记全局 path exhaustion。

### 最近邻

- 不同于 Dr. Strangelove：那里遗漏的是 Kong 自己仍可调用的 direct repair/bypass；本轮是**路径从一开始就跨越不同主体与自动节点**。
- 不同于 source-specific veto / parallel authority：本轮不是一个权限被另一个权限绕过，而是同一 target effect 的执行拓扑本身具有 actor-indexed 与 system-level 两套集合。

## 5｜zn / strict-v2 / protected-range

本轮不锁新的 zn。事故中的安全职责、程序要求、紧急生存目标与组织责任足以解释行为，不为追求火轴共现而硬造内部原则。

因此：

```text
strict-v2: +0
protected-range: +0
x-scope dynamic: +0
x-scope boundary guard: +1 historical control / +0 independent work
```

## 6｜锁定规则

> **path-set exhaustion 必须 actor-indexed。system-level target-effect paths 与 subject-specific x execution paths 分账；自动安全节点、第三方远程节点、并行主体权限不得因为目标效果相同而倒灌成被测主体的 x。**

机器可读：

```yaml
new_guard: system_path_set_not_equal_actor_indexed_x_path_set
requires_actor_indexed_path_audit: true
automatic_node_backflow_into_subject_x: forbidden
third_party_execution_node_backflow_into_subject_x: forbidden
system_effect_on_does_not_imply_subject_x_execution_on: true
subject_x_execution_off_does_not_imply_system_path_set_zero: true
```

## 7｜统计与下一缺口

写前 realtime：

```text
x-scope boundary guards = 24 controls / 21 works
x-scope dynamic = 29 controls / 25 works
```

本轮为历史控制，不制造“独立作品”计数：

```text
x-scope boundary guards: 24/21 → 25/21
x-scope dynamic: 29/25 不变
strict: 不变
protected-range: 不变
```

下一高价值缺口仍是 P1 真正正向：找一个**同一主体**、同一对象层、同一 target effect 下，actor-indexed surviving path count 真实 `n>1 → 1 → 0`，同时 system-level alternate nodes 也已明确冻结，最后 target effect reality-test OFF 的控制。