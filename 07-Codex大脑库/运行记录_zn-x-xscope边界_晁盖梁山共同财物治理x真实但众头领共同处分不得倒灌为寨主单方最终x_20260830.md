---
type: ten-yuan-fire-axis-xscope-boundary-guard
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 水浒传
character: 晁盖
stage: 第20回接掌梁山后共同财物入库与分配
sample_type: x-scope-shared-governance-vs-unilateral-disposition-boundary
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
  x_accuracy: x_准度卡_v0.1
source_records:
  - 07-Codex大脑库/审计记录_zn-x严格补复审_晁盖共同财物strict按修正anchor门个人财物x证据增强但共享公库x主体归因仍不足维持deferred_20260829.md
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_cross_work_increment: true
shared_governance_x: true
unilateral_chao_gai_x_for_shared_treasury: false
strict_increment: false
zn_increment: false
may_override_canonical: false
created: 2026-08-30
---

# x scope 边界｜晁盖：共享治理 x 不得倒灌为寨主单方最终 x

## 1｜本轮问题

本轮不重新研究“晁盖是否有个人财物 x”，也不重新审 strict。

只测试一个更窄的 `x scope` 问题：

> 梁山共同所得 / 公库财物确实处在梁山组织的现实治理与分配边界中，是否可以因为晁盖是寨主，就把这项共享治理 `x` 直接写成“晁盖个人单方最终处分 x”？

结论：**不可以。**

---

## 2｜剧情事实与可观察变量

第20回接掌梁山后，晁盖本人对“自家庄上过活的金银财帛”具有明确个人处分：这些财物可以由他拿出赏众。

但原 strict 复审已经拆出另一对象层：

```text
对象 A｜晁盖自家庄财 / 明确个人财物
→ 晁盖个人 x = true

对象 B｜梁山共同所得 / 公库比例分配
→ 梁山头领集团 / 山寨治理结构 x = true
→ 晁盖个人最终单方处分 x = 不足以成立
```

共同财物分库与分配段的显式行动主体是“众头领”与掌库执行节点。当前材料不足证明：

```text
晁盖个人提出某一最终比例
→ 其他头领无独立否决 / 共决
→ 晁盖单方裁决
→ 掌库仅因晁盖个人决定而执行
```

因此本轮只锁：

```yaml
shared_governance_x: true
unilateral_chao_gai_x_for_shared_treasury: false
```

---

## 3｜关键本体变量

火轴 L1 当前变量仍是：

> `zn ↔ x` = 对象独立成立资格与归属方式：保留自身成立 ↔ 纳入掌握、调用与处分边界。

本轮只研究 `x` 的“归属主体与处分结构”这一项。

关键变量不是“晁盖是不是寨主”，而是：

```text
谁能对同一共同财物对象作出最终现实处分？
决定是否需要共同节点共同形成？
是否存在成员共同否决 / 共决结构？
主体个人决定能否单独改变同一结果？
```

---

## 4｜拿掉测试

拿掉“晁盖个人拥有共享公库最终单方处分权”这一假设，只保留：

```text
众头领共同治理
+ 掌库节点执行
+ 梁山共同库存与成员分配需求
```

仍然足以解释共同财物入库与分配结果。

所以：

> **晁盖个人单方最终 x 不是当前结果的必要解释。**

---

## 5｜反向测试

如果要把共享治理升级为“晁盖个人单方 x”，应至少出现：

```text
共同财物对象已经明确进入晁盖个人裁决范围
+
其他头领只能建议、不能同层否决
+
晁盖个人决定可以直接改变入库 / 分配结果
+
现实执行节点按其个人裁决运行
```

当前材料没有达到这道门。

---

## 6｜第三因素冻结

必须冻结：

- 晁盖“寨主”名位；
- 晁盖个人威望；
- 他在自家庄财对象层已经拥有的个人 `x`；
- 梁山成员对晁盖的认可。

这些都不能替“共享公库对象层上，是否由晁盖个人单方最终处分”上证。

---

## 7｜最近邻排除

- `x vs z`：被拥戴为寨主不等于共同财物自动归个人最终处分。
- `x vs nx`：组织结构 / 共同治理来源不等于个人单方掌握。
- `x vs xn`：组织分库、掌库执行流程不等于谁拥有最终处分。
- `x vs zx`：晁盖成为寨主或扩大影响不能替共享财物的 current scope 上证。

---

## 8｜本轮新增纪律

> **shared governance x ≠ unilateral disposition x。**

更短：

> **“我们能处分” ≠ “我能单方处分”。**

并进一步要求 `x scope` 增加研究字段：

```yaml
decision_structure: unilateral / joint / shared / vetoed
co_decision_nodes: 共同决定节点
unilateral_effect: 主体单方决定能否直接改变结果
joint_veto: 是否存在同层共同否决
```

这是 L4 方法字段建议，不自动修改 L2 canonical。

---

## 9｜与现有 x-scope 控制的关系

此前 `x scope` 已经锁出：

- temporary use ≠ ownership；
- current governance ≠ permanent title；
- symbol possession ≠ represented authority；
- local management ≠ global final override；
- future revocation ≠ current non-possession。

本轮补的是另一维：

> **归属主体与决策结构必须分账。**

即使对象确实进入某个组织的现实 `x`，也不能因为某人物处于领导位置，就把组织共享 `x` 私有化成个人 `x`。

---

## 10｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

x_scope_boundary_guard_increment: true
x_scope_boundary_guard_cross_work_increment: true
strict_increment: false
zn_increment: false
```

该护栏来自《水浒传》，与现有王熙凤《红楼梦》、天蓬《西游记》两条反向边界形成第三独立作品机制。

因此按证据层实时状态，`x scope` boundary guards 应从：

```text
2 controls / 2 works
```

推进为：

```text
3 controls / 3 independent works
```

达到 3 works 后停止继续堆同型普通护栏，转向同人物 / 同对象最小差异与反例攻击。

---

## 11｜不修改 canonical

本轮不修改：

- L1 十元—五行正本；
- `zn/x` 信息卡与准度卡；
- `zn补x_补卡`；
- strict v2 gate。

TASK_DONE:ZNX_XSCOPE_SHARED_VS_UNILATERAL_GUARD_3WORKS_20260830
