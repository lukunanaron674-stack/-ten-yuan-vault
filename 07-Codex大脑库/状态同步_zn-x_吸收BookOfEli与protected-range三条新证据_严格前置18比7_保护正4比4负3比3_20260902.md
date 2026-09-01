---
type: ten-yuan-fire-axis-state-sync
authority_level: L4
knowledge_status: evidence-locked
status: state-sync
axis: fire
pair: zn-x
updated: 2026-09-02
criterion_strict: current-layer-specific-anchor-gap-v2_20260829
criterion_protected_range: protected-range-risk-test-v1_20260831
may_override_canonical: false
---

# zn ↔ x 状态同步｜吸收 Book of Eli 与 protected-range 新证据

> 本文件只同步 evidence-layer，不修改 L1/L2 canonical。current canonical 高于本文件。启动 HEAD 为 `026ac47a314e9293b9afdd4927255eec7e202b14`，并已重读 current 待审议清单、strict/x-scope 相关状态与最近 commits。

## 1｜strict-v2 前置护栏同步

current 待审议清单仍登记：

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

## 2｜protected-range 同步

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

## 3｜本轮压力测试结论

本轮没有发现达到 ≥95 的新 strict-v2 verified positive，也没有发现需要重复计数的普通 x-scope control。真正新增价值是状态修正：避免旧 registry 快照继续把 Eli strict-precondition、Furiosa mobile positive、War of the Worlds mobile failure 与 Panic Room risk-channel failure 漏掉。

当前应使用：

```yaml
strict_v2_verified_positive: 0/0
strict_precondition: 18/7
protected_range_positive: 4/4
protected_range_negative: 3/3
```

## 4｜下一轮高信息增益

P0 继续优先天然对象构成型 strict-v2 候选；必须先排除 carrier/content 错层、functional-equivalent anchor、competing purpose/ranking anchor 与第三方 reality anchor。

若仍无 ≥95 P0，protected-range 最值得跑的是 **same actor + same protected object + same boundary + same risk channel** 的动态开关：underlying possession/use x 保持，但 exclusion permission/能力因真实节点被撤回、耗尽或破坏，使 protected-range `ON → OFF`。这能直接区分 `underlying x persists` 与 `protection on tested channel persists`。
