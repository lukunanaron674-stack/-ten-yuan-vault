---
type: ten-yuan-fire-axis-protected-range-pending-review
authority_level: L4
knowledge_status: pending-review
status: pending-review
axis: fire
pair: zn-x
criterion_version: protected-range-risk-test-v1_20260831
positive_controls: 3
positive_cross_work_count: 3
negative_guards: 1
negative_guard_works: 1
canonical_calibration_controls: 0
may_override_canonical: false
may_update_L2: false
created: 2026-08-31
---

# 待审议问题｜zn-x protected-range 稳定保护范围经真实 risk-test 成立边界

## 0｜为什么进入 pending-review

同一 criterion：`protected-range-risk-test-v1_20260831` 已达到 3 个高纯正向控制 / 3 部独立作品：

1. 《战栗空间》Meg Altman｜99/98｜物理入侵边界；
2. 《火星救援》Mark Watney｜99/98｜持续环境危害隔离；
3. 《哈利·波特》Peter Pettigrew / Fidelius｜99/98｜信息访问门。

另有：

- 《John Wick》Winston / Continental｜99/98｜negative guard：真实事后制裁不等于事前 protected-range。

因此普通正向槽停止继续堆第4、第5个换皮案例。

本文件只进入 L4 `pending-review`，不修改 L1/L2 canonical。

---

## 1｜候选研究规则

stable protected-range `x` 的高纯正向，应至少满足：

```text
boundary-on
+
object-inside
+
real risk enters / targets boundary
+
subject-specific current x
在结果发生前稳定 deny / block / redirect
+
结果不是主要由第三方保护节点完成
```

保护边界可以是：

- 物理 enclosure / access boundary；
- 持续环境隔离 enclosure；
- 信息访问 / location-disclosure gate；
- 其他后续经同判据复验的稳定 access-control boundary。

因此：

> **protected-range 不等于“墙”。核心是主体 current `x` 是否形成稳定、可识别、经真实风险测试的 pre-effect access/exclusion boundary。**

---

## 2｜三个正向机制

### 2.1 《战栗空间》｜physical enclosure

Meg/Sarah 持续留在 panic room；多轮真实入侵撞击；常规入口持续失败并迫使攻击者改用 ventilation/propane；边界打开/离开后才出现进入窗口。

锁：

`stable local protected-range x=true`

不倒灌 whole-house。

### 2.2 《火星救援》｜continuous environmental containment

Watney 持续留在 Hab；火星外部环境持续构成风险；boundary intact 时可居住，Airlock/Hab 破裂时失压、受伤、作物毁坏，修复后 enclosure 再次可用。

锁：

`stable Hab protected-range x=true`

机制：`continuous-environmental-hazard-containment`。

### 2.3 《哈利·波特》｜informational access gate

Potter family 持续留在 Fidelius 隐藏地点；Voldemort 是现实追杀风险；地点在 Secret Keeper 不披露时不可知；Peter 自愿披露后 Voldemort 才取得地点并现实进入攻击链。

锁：

`stable informational protected-range x=true`

机制：`informational-access-gate-protected-range`。

---

## 3｜已锁反向护栏

### John Wick｜posthoc sanction ≠ pre-effect exclusion

Continental 规则和 Winston 的 membership sanction / punishment x 都是真实的；但 Ms. Perkins 仍能在酒店内部实际攻击 John，处罚发生在违规之后。

因此：

```text
post-effect punishment x
≠
pre-effect protected-range x
```

---

## 4｜不得倒灌的邻近概念

以下均不能自动替代 stable protected-range：

- 名义安全区 / sanctuary 标签；
- 产权或凭证；
- 内部治理；
- 规则存在；
- 事后处罚；
- 一次性 chokepoint 阻断；
- 对象靠离开边界获救；
- 局部入口保护成功倒灌整个空间；
- 第三方实时保护效果倒灌主体 `x`；
- 主体宣称“这里安全”。

---

## 5｜与 strict-v2 的关系

protected-range `x` 过门不等于 strict-v2 过门。

仍必须独立验证 `zn`，并按 current `current-layer-specific-anchor-gap-v2_20260829` 做：

- same current window；
- same object layer；
- `zn` 不引用被测 `x` 独立命名；
- 第三因素与 competing anchors 冻结；
- `zn→x`；
- `x→zn` current-layer-specific anchor gap。

当前三份 protected-range 正向均未因此增加 strict verified positive。

因此：

```yaml
strict_v2_verified_positive_increment: 0
```

---

## 6｜后续只收高信息增益

达到 pending-review 后停止普通正例采样。

优先：

1. 新反例机制：边界看似稳定，但风险通过主体未控制的同层入口直接进入；
2. 最小差异：同一主体/对象 `boundary closed → protected` 与 `boundary opened → risk enters`；
3. 动态迁移：protected-range scope 扩大/收缩；
4. 判据冲突：subject-specific access gate 与第三方执行底层如何分账；
5. strict-v2：只有 protected-range `x` 与独立 `zn` 同时过门，才重新冲第一份 verified 正例。

---

## 7｜当前统计

```yaml
criterion_version: protected-range-risk-test-v1_20260831
positive_controls: 3
positive_cross_work_count: 3
negative_guards: 1
negative_guard_works: 1
knowledge_status: pending-review
may_override_canonical: false
```
