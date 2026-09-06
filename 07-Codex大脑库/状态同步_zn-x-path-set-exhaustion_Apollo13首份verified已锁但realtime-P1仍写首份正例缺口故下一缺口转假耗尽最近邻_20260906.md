---
type: ten-yuan-fire-axis-state-correction
authority_level: L4
knowledge_status: evidence-locked
status: state-correction
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
source_evidence_commit: 6c7927c61e7e7825276944a5e730f7ac8ae9f110
source_evidence: 运行记录_zn-x-xscope首份真实path-set-exhaustion_Apollo13_SM三燃料电池3到1到0但CM电池与LM电源仅属跨actuator对象替代_20260906.md
control_increment_this_file: 0
independent_work_increment_this_file: 0
may_override_canonical: false
may_update_L2: false
created: 2026-09-06
---

# 状态同步｜Apollo 13 已填首份 verified path-set exhaustion，P1 首份正例缺口应退役

## 0｜启动与权力边界

本轮以写前 `main@f1519cb254673dc94db07be0ce2d2d4faf221a92` 为准。已重读 L1 火轴正本、fire-axis realtime registry、研究总纲、strict-v2 / x-scope / protected-range current 专项与最近 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移对象层、current window、最近邻、拿掉、反向、第三因素冻结与 path-set completeness audit 的验证方法，不迁移理论结论。

L1 继续锁：`火 = 阳火 zn ↔ 阴火 x`，主题领域为本体；L4 不修改 L1/L2 canonical。

## 1｜本轮真正缺口不是新案例，而是 P1 状态漂移

`6c7927c61e7e7825276944a5e730f7ac8ae9f110` 已 evidence-lock Apollo 13 / CSM-Service Module fuel-cell generation：

```text
same actor
+ same object layer
+ same actuator/effect family
+ same current window
+ complete relevant path-set audit
+ surviving path 3 -> 1 -> 0
+ same tested-layer target effect OFF
```

因此首份真正 path-set exhaustion positive 已存在：

```yaml
path_set_exhaustion_verified_controls: 1
path_set_exhaustion_verified_works: 1
```

但最新 realtime `zn-x火轴待审议清单.md` 的 D/P1 仍把“真正 path-set exhaustion：寻找 n>1 -> 1 -> 0 + target-effect OFF”写成尚未填入的 active gap；研究总纲与 x-scope 专项也仍只把 Macondo / United 232 写成前置 guard，没有把 Apollo 13 明确登记为首份 verified 子槽。

这会诱导下一轮继续采第二个普通 `3→1→0`，与收束期“只处理真正高信息增益缺口”冲突。

## 2｜Apollo 13 为什么已经满足首份正例门槛

### actor / object / permission

actor：`Apollo 13 onboard flight crew / CSM operating node`。

object：`Service Module fuel-cell electrical generation feeding CSM buses`。

permission 只锁 current use / load-switching / shutdown / electrical-resource allocation，不把 Mission Control source authority、NASA ultimate title 或 LM/CM batteries 倒灌成同一 x execution path。

### current window

正常三 fuel cells 发电 → cells 1/3 丧失输出 → cell 2 独存 → 剩余氧气继续流失、fuel-cell generation 全部不可继续。

### relevant path-set

```text
P = {fuel cell 1, fuel cell 2, fuel cell 3}
```

真实计数：`3 -> 1 -> 0`。

### completeness audit

已逐项冻结：direct repair、bypass、delegated route、parallel authority、emergency interface、alternate execution node、automatic / third-party node、cross-object / cross-actuator substitute。

CM batteries 是 battery storage/discharge family；LM Aquarius 是另一 spacecraft object/node。它们可以维持更高层“仍有电”，但不能作为 Service Module fuel-cell generation 的 surviving path。

### reality-test

被测窄层 target effect：`Service Module fuel-cell generation supplies CSM electrical power`。

path count 到 0 后该层 effect = OFF；更高层 spacecraft electrical capability 仍可由 batteries / LM 继续，不反驳窄层 path exhaustion。

## 3｜zn / strict-v2 / protected-range

本案不锁 zn。紧急生存、职业职责、Mission Control 程序足以解释应对；高代价、英雄结果与救命行为不得自动制造 zn。

因此：

```yaml
strict_v2: no-change
protected_range: no-change
x_scope_ordinary_positive: no-change
x_scope_boundary_guard: no-change
x_scope_dynamic: no-change
```

本案只建立独立 `path-set exhaustion verified` 子槽。

## 4｜最近邻与状态修正

Macondo：锁 `system-level target-effect path set ≠ actor-indexed x path set`。

United 232：锁 `same actor + same higher-level target effect ≠ same object/actuator-layer path set`。

Apollo 13：第一次在上述两道 guard 之后完成真实 `n>1 -> 1 -> 0` 与同层 effect OFF。

故 current P1 的“首份 verified positive”应视为完成，不再自动采第二个同机制普通正例。

## 5｜下一真正高价值缺口

新的 P1 最近邻应改为 **false-exhaustion adversarial guard**：

> 表面上 surviving path 已从多条降到 0，但完整 completeness audit 后发现一个此前漏枚举的 `same actor + same object/actuator/effect family` surviving route，可能是 direct repair、bypass、delegated route、parallel authority、emergency interface 或 alternate execution node；因此原 `path=0` 判定被击穿。

优先要求：

```text
apparent n>1 -> 1 -> 0
BUT
complete audit finds omitted same-layer relevant path
THEREFORE
true surviving_relevant_path_count > 0
AND/OR tested-layer effect remains ON
```

只有这种最近邻，才真正压力测试“enumerated-interface exhaustion ≠ complete path-set exhaustion”，而不是再堆第二个 Apollo 13 换皮。

## 6｜统计

本状态同步文件：

```text
+0 control
+0 independent work
```

有效 evidence truth 保持：

```text
path-set exhaustion verified = 1 control / 1 independent work
```

strict-v2、ordinary x-scope、protected-range 统计均不变。

## 7｜治理结论

1. P1 首份真正 path-set exhaustion positive 已完成。
2. 不修改 L1/L2 canonical。
3. 不把 Apollo 13 重复并入 ordinary x-scope dynamic 29/25，除非 current registry 未来明确做不重复计数的槽迁移。
4. 下一轮优先找 false-exhaustion nearest-neighbor guard；若无 ≥95 事实锚点与清楚 same-layer omitted route，则不提交。
