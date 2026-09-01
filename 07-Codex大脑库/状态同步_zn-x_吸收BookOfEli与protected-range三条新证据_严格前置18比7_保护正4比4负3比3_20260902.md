---
type: ten-yuan-fire-axis-state-sync
authority_level: L4
knowledge_status: evidence-locked
status: state-sync
axis: fire
pair: zn-x
updated: 2026-09-02
criterion_strict: current-layer-specific-anchor-gap-v2_20260829
criterion_x_scope: current-x-scope-distinction-v1_20260830
criterion_protected_range: protected-range-risk-test-v1_20260831
may_override_canonical: false
---

# zn ↔ x 状态同步｜Book of Eli、Queeg 与 protected-range 后续证据

> 本文件只同步 evidence-layer，不修改 L1/L2 canonical。current canonical 高于本文件。当前按 `main@974bce9f87fb609e7da35d2b0364c8a76f7b6723` 重读待审议清单、研究总纲、strict/x-scope/protected-range 专项、相关运行记录与最近 commits；木轴只迁移验证方法，不迁移理论结论。

## 1｜strict-v2 前置护栏同步

current 待审议清单与 strict 专项仍登记：

```yaml
strict_precondition_guards: 17
strict_precondition_guard_works: 6
```

但 commit `9dece9ae25a8f6e28eff3f86f86a1d6669ca1dea` 已 evidence-lock 《The Book of Eli》新机制：**唯一 physical carrier 不等于唯一 current reality anchor；若同窗存在可调用的功能等价内容锚点（Eli 完整记忆中的 Biblical text），不能把 carrier-x 与 content-zn 事后 composite bundling 成 same-object-layer strict。**

该机制与既有 Antigone 的 `zn真+局部effect≠stable-x`、Matt King 的 competing-purpose/ranking-anchor 均不同，因此有效 evidence-layer 应同步为：

```text
strict-precondition
17 controls / 6 works
→ 18 controls / 7 independent works
```

strict-v2 verified positive 仍为：

```yaml
v2_verified_positive_controls: 0
v2_verified_positive_works: 0
```

没有破零，也不降低门槛。

## 2｜x-scope dynamic 同步

current 待审议清单与 x-scope 专项仍登记：

```yaml
x_scope_dynamic_transition_controls: 14
x_scope_dynamic_transition_works: 12
```

但 `2f6ff1d397b00e198e45e50dea1b3d0a4804b164` 已 evidence-lock 《The Caine Mutiny》Queeg 紧急解除指挥：主体仍在舰桥、名义 captain 未必即时消失，但 replacement command node 已现实进入 execution chain，旧 actor 的 same-layer command effect 退出。

锁定新机制：

```text
physical presence retained
+ nominal/formal status may remain
+ replacement execution node actually takes over
+ old actor cannot make same-layer orders final
→ current command x contracts
```

因此 current evidence-layer：

```text
14 controls / 12 works
→ 15 dynamic controls / 13 independent works
```

同轮 Crimson Tide 的“替换不合作 XO”攻击不新增 control：**node-holder replacement ≠ node-role removal**。只要 mandatory concurrence role 仍在，换人不能冒充 `joint → unilateral`。

## 3｜protected-range 同步

current 待审议清单仍登记：

```yaml
positive: 3 controls / 3 works
negative: 1 guard / 1 work
```

但 main 上已有三条同 `protected-range-risk-test-v1_20260831` 的后续 evidence：

1. `b48846649074abfe2aad97a5c2addd960e5efdcf`｜Furiosa / Fury Road：mobile controlled boundary 正向；War Rig 持续承载对象，真实追击进入，Furiosa 自身 route/driving x 在 pre-effect 阶段持续改变/改道风险。`+1 positive / +1 work`。
2. `8c6a2cc04b3ea6a3d734e5064b1931be13746c3c`｜Ray / War of the Worlds (2005)：vehicle-use/driving x 真实，但人群直接追上并突破车辆边界，故 mobile protected-range risk-test 失败。`+1 negative guard / +1 work`。
3. `026ac47a314e9293b9afdd4927255eec7e202b14`｜Meg / Panic Room propane：同一 panic-room 对 human-entry channel 可阻断，但 propane 经 ventilation reality-test 成功进入；锁 **protected-range 必须按 risk-channel / ingress-path 分层，不能从一条通道成功全局化为 all-hazard protection**。`+1 negative guard / +1 work`。同作品虽已在 positive works，但 positive/negative 槽独立分账。

因此有效 evidence-layer：

```yaml
protected_range_v1_verified_positive_controls: 4
protected_range_v1_verified_positive_works: 4
protected_range_v1_verified_negative_guards: 3
protected_range_v1_verified_negative_guard_works: 3
knowledge_status: pending-review
```

注意：如果统计 protected-range 全槽去重作品总数，《Panic Room》只能算一个 independent work；这里只按 positive 与 negative guard 子槽分别分账。

## 4｜合并后的当前 evidence ledger

```yaml
strict_v2_verified_positive: 0/0
strict_v2_negative: 7/4
strict_precondition: 18/7
x_scope_positive: 4/3
x_scope_boundary: 16/13
x_scope_dynamic: 15/13
x_scope_decision_calibration: 1
protected_range_positive: 4/4
protected_range_negative: 3/3
pending_review_count: 11
```

本轮没有发现达到 ≥95 的新 strict-v2 verified positive，也没有需要重复计数的 ordinary x-scope positive/boundary control。真正新增价值是三处状态修正：Eli strict-precondition、Queeg command-node transfer、以及 protected-range mobile/risk-channel 正反控制。

## 5｜当前未归并同步债

以下 L4 主中枢目前仍落后于上述 evidence-layer，应在安全全文同步窗口一次性维护，不另建重复总结文件：

1. `zn-x火轴待审议清单.md`：strict-precondition 仍 `17/6`；x-scope dynamic 仍 `14/12`；protected-range 仍 `3/3 + 1/1`。
2. `待审议问题_zn-x严格补中x是否为zn不可替代现实落点边界_20260827.md`：strict-precondition 仍 `17/6`，尚未吸收 Book of Eli carrier/content 错层护栏。
3. `待审议问题_zn-x-xscope权限类型范围期限与最终归属分层边界_20260830.md`：dynamic 仍 `14/12`，尚未吸收 Queeg command-node transfer。
4. `zn-x火轴研究总纲_20260827.md` 与 protected-range 专项需按同一 ledger 检查；若仍是旧统计，只做状态同步，不重复增加 control。

上述为 L4 状态债，不改变 L1/L2 canonical，也不允许借消化任务修 canonical 元数据债。

## 6｜本轮形成/强化的最小规则

```text
carrier uniqueness
≠ current reality-anchor uniqueness

physical presence / nominal title retained
≠ current command x retained

node-holder replacement
≠ node-role removal

protected-range success on one risk channel
≠ all-hazard protected-range

mobile boundary
can still be protected-range
if subject-specific x pre-effect blocks/redirects tested risk
```

## 7｜下一轮高信息增益

P0 继续优先天然对象构成型 strict-v2 候选；必须先排除 carrier/content 错层、functional-equivalent anchor、competing purpose/ranking anchor 与第三方 reality anchor。

x-scope 优先找 Queeg 的反向最小差异：replacement node 退出后，原 actor 是否通过 same-layer reality-test 恢复 command x；以及真正的 `mandatory second role removed → single actor final effect succeeds`，不要再拿“换一个 holder”冒充 role removal。

protected-range 优先找 **same actor + same protected object + same boundary + same risk channel** 的动态开关：underlying possession/use x 保持，但 exclusion permission/realized blocking 因真实节点被撤回、耗尽或破坏，使 protected-range `ON → OFF`。