---
type: ten-yuan-fire-axis-evidence-record
authority_level: L4
knowledge_status: evidence-locked
status: boundary-guard
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
sample: United Airlines Flight 232
sample_type: historical-control
fact_confidence: 99
classification_confidence: 98
may_override_canonical: false
counter_increment: true
work_increment: false
created: 2026-09-05
---

# zn ↔ x｜x-scope 路径集合对象层护栏｜United 232

## 0｜启动与 current 对齐

本轮以写前最新 `main@45dd870abefa2dbed0489a30d6c6e0f36dd1fa79` 为准，按 L0/L1 门禁与 current canonical 对齐火轴 realtime registry、strict-v2、x-scope、protected-range 与最近 commits。木轴 `zx↔nx` 只迁移路径完整审计方法，不迁移理论结论。

current P1 要求真正 path-set exhaustion 先锁 same actor / same object / current window，并冻结 direct repair、bypass、delegated route、parallel authority、emergency interface、alternate execution node。Macondo 已锁 `system-level target-effect path set ≠ actor-indexed x execution path set`。本轮只处理一个新缺口：**如果同一主体还能通过不同执行对象层影响同一个更高层目标，是否应算作原 x 的 surviving path。**

## 1｜样本与事实锁定

1989 年 United Airlines Flight 232 的 No.2 发动机发生灾难性失效，碎片导致三套为正常飞行操纵面供能的液压系统全部丧失。NTSB 明确记录三套液压系统丧失并导致机组严重控制困难；FAA 进一步明确飞机随后仅能通过 asymmetric / differential thrust 获得最低限度控制。NASA 对 throttles-only control 的技术总结也明确：正常飞行控制失效后，可通过总推力控制航迹、差动推力控制滚转/航向，但通常不足以完成安全着陆。

事实来源：
- NTSB DCA89MA063：No.2 发动机碎裂导致三套液压系统全部丧失，正常 flight controls 失去动力；
- FAA Lessons Learned / N1819U：飞机在三套液压失效后，仅能以 asymmetric thrust minimally controllable；
- NASA TM-2004-212045：throttles-only control 是在 normal flight controls lost 后，以发动机推力作为 emergency flight-control substitute。

## 2｜对象层与 current window

actor：Flight 232 flight crew

current window：三套液压飞控动力已经全部丧失后，到机组用差动推力维持有限航迹控制并尝试着陆期间。

必须分两层对象：

### L-A｜被测 x 执行对象层
- object：正常 aerodynamic flight-control surfaces 的液压驱动/操纵执行链；
- permission/effect：通过正常操纵输入现实改变舵面位置并实现姿态控制；
- surviving hydraulic execution path：三套液压系统全部失效后 = 0。

### L-B｜更高层 target-effect
- object/effect：飞机整体航向、滚转、升降轨迹；
- alternate actuator：左右发动机推力差与总推力；
- reality-test：仍可有限影响飞机轨迹，故 target-effect path set ≠ 0。

这两层不能后验拼成同一个 x。

## 3｜新最小差异

锁定：

```text
same actor + same higher-level target effect
≠ same x execution-object path set
```

更具体地说：

```text
原执行对象层路径耗尽
≠ 更高层目标效果路径耗尽
```

Flight 232 中，液压飞控表面执行链确实已经耗尽；但机组仍通过发动机差动推力影响飞机轨迹。若被测 x 是“对正常液压飞控面的现实操纵”，则推力控制不是 surviving path，而是跨执行对象层的 substitute actuator。若被测 target effect 被提升为“改变飞机整体轨迹”，则推力控制必须计入 relevant path-set，不能宣称 exhaustion。

因此 path-set audit 在 actor-index 之外还必须增加 **object-layer / actuator-layer index**。

## 4｜最近邻

### Deepwater Horizon / Macondo
Macondo 锁的是：多个路径指向同一封井效果，但人工、自动与外部 ROV 分属不同 actor/node，不能倒灌成单一主体 x。

### United 232
本轮相反：actor 仍是同一 flight crew，但替代路径换了执行对象层：

```text
hydraulic control-surface actuation
→ propulsion differential-thrust control
```

所以新增的是 **same actor 仍不足以证明 same x path-set**。

### Dr. Strangelove
旧护栏强调漏算 direct repair / bypass 会造成伪 exhaustion；United 232 进一步说明，即使没有漏算同对象层维修路径，也仍要决定“跨 actuator layer 的 workaround”在当前被测对象层究竟算替代路径还是另一个 x。

## 5｜拿掉 / 反向

拿掉三套液压驱动链后，正常飞控面执行 x 确实归零；这与事故现实一致。

但反向看，拿掉正常飞控 x 并没有让更高层“改变飞机轨迹”的所有现实能力归零，因为差动推力仍形成有限 substitute control。

因此：

```text
x-execution OFF at layer A
不能自动推出
higher-level target-effect OFF at layer B
```

反过来，也不能因为 layer B 仍有有限效果，就宣称 layer A 的 x 仍然存在。

## 6｜第三因素冻结

冻结：
- 空管与地面机场支持；
- 额外机组成员的专业协助只作为同一 flight crew execution team 内部协作，不把其身份标签当成独立 x；
- 飞机最终坠毁与伤亡结果不用于倒推权限；
- 发动机推力的普通推进用途与本轮 emergency substitute-control 用途分开；
- 不把“能影响一点轨迹”夸大成“恢复正常飞控能力”。

## 7｜zn / strict-v2 / protected-range 判定

本轮不锁新 zn。机组行为可由职业职责、紧急生存目标与操作任务充分解释，不强行制造内部原则。

strict-v2：不计。

protected-range：不计。

x-scope dynamic：不计。三套液压失效近于同一事故触发导致的 execution-layer collapse，本轮价值在 boundary/path-set semantics，不用于堆普通 dynamic。

x-scope boundary guard：`+1 historical control / +0 independent work`。

## 8｜本轮锁定规则

以后做真正 path-set exhaustion，至少要同时索引：

1. actor；
2. object layer；
3. permission/effect family；
4. actuator / execution layer；
5. target-effect layer。

只有在被测层级明确后，才能判断 workaround 是：
- 同一 x 的 surviving path；
- 跨执行对象层 substitute；
- 或更高层目标效果的 alternate path。

一句话：

> **“还能达到一点同目标”不等于“原 x 还有路”；但如果被测对象本来就是那个更高层目标，就必须把这条跨层 workaround 算进去。**

## 9｜统计

```text
x-scope boundary guards:
25 controls / 21 independent works
→ 26 controls / 21 independent works
```

strict-v2、protected-range、x-scope dynamic 均不变。

## 10｜下一高价值缺口

P1 真正 path-set exhaustion 仍未被本轮宣称填满。下一正例必须在 **same actor + same object layer + same actuator/effect family + same current window** 下先完成路径完整审计，再出现真实 `n>1 → 1 → 0`；所有跨层 substitute 需要先明确是“另一个 x”还是“更高层 target-effect 的 surviving path”，不能混账。