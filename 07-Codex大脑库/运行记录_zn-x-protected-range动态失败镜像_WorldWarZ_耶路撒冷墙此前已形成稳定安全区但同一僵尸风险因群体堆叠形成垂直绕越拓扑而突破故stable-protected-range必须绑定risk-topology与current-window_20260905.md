---
type: ten-yuan-fire-axis-evidence
status: evidence-locked
authority_level: L4
axis: fire
pair: zn-x
criterion_version: protected-range-risk-test-v1_20260831
sample: World War Z (2013) / Jerusalem fortified safe zone
stage: protected-range dynamic failure mirror
fact_confidence: 98
classification_confidence: 97
protected_range_dynamic_transition_increment: true
protected_range_dynamic_transition_work_increment: true
protected_range_positive_increment: false
protected_range_negative_increment: false
strict_v2_increment: false
x_scope_increment: false
may_override_canonical: false
may_update_L2: false
created: 2026-09-05
---

# 运行记录｜zn-x protected-range 动态失败镜像｜《World War Z》耶路撒冷墙

## 0｜启动与门禁

本轮以写前 `main@36dd5ff544a13e77378a4f8f1a9e54c63fa44dc5` 为准。启动重读 L0 `AGENTS.md`、AI 文件权力总览、L1 十元关系门禁、L1 十元—五行正本 v1.6、zn/x current 路由、strict-v2 current、x-scope current、protected-range current 与最近 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

protected-range 已 `pending-review`，本轮不采普通正例，只测试一个当前专项明确允许的新 failure topology / dynamic transition。

## 1｜为什么该样本有新增信息

current 已有：

- `Panic Room`：同一 boundary 上不同 ingress/risk channel 分账；常规入口 PASS 不得倒灌 all-hazard protection。
- `Home Alone`：多次 partial-defense effect 不等于 stable protected-range。
- `The Purge`：boundary state 真实 ON / re-enabled 仍不等于已经通过 hostile risk-test。
- `The Martian`：same actor / same boundary / same risk channel / underlying management x retained 时，boundary integrity 可使 protected-range `ON→OFF→ON`。

《World War Z》新增最小差异不是“边界从未通过”、不是“修复状态位冒充保护恢复”，也不是换成另一个 risk channel；而是：

> **同一 protected boundary 在先前已经形成现实安全区后，underlying boundary/governance x 未撤回、墙体也不是先发生技术性失效；同一 zombie risk 因攻击群体形成新的 vertical aggregation / body-pile bypass topology，使原先有效的 perimeter exclusion 从 ON 迁移为 OFF。**

因此 stable protected-range 必须绑定 `current window + risk topology / ingress topology`；过去通过同类风险，不等于未来在威胁拓扑升级后继续自动 ON。

## 2｜事实证据

公开剧情与场景文本一致支持：

1. 以色列在疫情大规模爆发前封锁/加固耶路撒冷并建立大型墙体；该区域作为当时仍维持的安全区接纳未感染者。
2. Gerry 在耶路撒冷看到 Salvation Gates / security perimeter 正在运行，人员仍从受控入口进入。
3. 难民的高声歌唱吸引墙外大量感染者；感染者不是通过原有地面入口直接突破，而是大量堆叠身体形成攀爬结构，越过墙顶进入城内。
4. 城市随后被突破并失去原先的安全区状态。

外部核验：
- IMDb plot summary: https://www.imdb.com/title/tt0816711/plotsummary/
- World War Z transcript: https://transcripts.simpleremix.com/script.php/world-war-z-2013-3QSl
- scene transcript / clip description showing breach over the wall: https://www.dailymotion.com/video/x93g8ca

## 3｜actor / x 权限结构

本轮不把 Jurgen Warmbrunn 个人扩大为整座城市的独占 x。subject-specific actor 锁为：

```yaml
actor: Israeli/Jerusalem security-defense apparatus
object: Jerusalem fortified security perimeter / Salvation Gates
permission_type:
  - perimeter governance
  - controlled admission through gates
  - defensive deployment / access control
scope: fortified Jerusalem perimeter and controlled entry nodes
quantitative_cap: not applicable
term: current outbreak defense window
revocability: not the tested variable
return_obligation: not applicable
same_layer_pre_effect_veto: real against ordinary perimeter ingress before breach
global_override: not asserted
ultimate_title: not relevant to protected-range test
decision_structure: institutional / distributed
consultation_structure: not tested
final_decision_structure: not tested
execution_structure: wall + gates + defense personnel
co_decision_nodes: institutional, not attributed to Warmbrunn alone
```

关键纪律：

> **Warmbrunn 的说明/命令 ≠ 他个人拥有整套 Jerusalem perimeter x。**

所以本案按 institutional actor 记 subject-specific attribution，避免把国家、军队、墙体、门禁与 Warmbrunn 个人后验拼成 composite-x。

## 4｜对象层与 current window

固定对象层：

```text
protected object/range = fortified Jerusalem interior / admitted uninfected population
boundary = fortified perimeter wall + controlled gates
risk channel = infected/zombie physical ingress
```

current window 分两段，但保持同 actor、同 boundary、同 protected range、同 risk family：

### A｜已验证 ON

- fortified perimeter 已建立并运行；
- 城内存在被保护人口，并持续从 controlled Salvation Gates 接纳幸存者；
- 安全区在外部疫情中现实维持；
- 普通地面 zombie ingress 未使城内失去保护状态。

判：`protected-range ON in topology A`。

### Trigger｜risk topology shift

高声歌唱聚集大量感染者到同一墙段，感染者相互堆叠形成可越过墙高的 body-pile / vertical aggregation path。

### B｜现实 OFF

- underlying perimeter governance / defense x 没有先被撤销；
- 墙仍处于 deployed state；
- risk 通过新的 vertical bypass topology 越过墙体；
- 城内安全区被现实突破。

判：`protected-range OFF in topology B`。

## 5｜最近邻

### vs The Purge

The Purge 的住宅 security system 虽重新启用，但它从未在 systematic armed assault 这一测试强度下先通过 stable risk-test；因此锁的是：

`boundary-state ON ≠ protected-range ON`。

World War Z 不同：安全区此前已经现实成立；失败来自同一 risk family 的 ingress topology 改变。

### vs Panic Room

Panic Room 是不同 ingress path / hazard mechanism 分账：door/wall human entry PASS，但 ventilation/propane channel FAIL。

World War Z 更窄：仍是 zombie physical ingress，但从 ordinary perimeter approach 转成 collective vertical body-pile bypass；因此新增的是同 risk family 内的 topology-sensitive transition。

### vs The Martian

The Martian 的 OFF trigger 是 boundary integrity 物理破裂，随后修复后又恢复 ON。

World War Z 的墙体不是先自行失效；失败来自攻击者集体行为改变可达路径，使 intact/deployed boundary 的 exclusion topology 被绕越。

## 6｜拿掉 / 反向

### 拿掉 institutional perimeter x

若拿掉 wall/gate/perimeter governance，耶路撒冷此前的现实安全区不会以同样方式成立；所以 A 阶段的保护效果确实依赖该 actor-specific institutional x，而不是纯粹第三方偶然救场。

### 反向：保留 x，是否必然保留 protected-range

否。B 阶段 institutional x 仍在，边界仍部署，但 zombie aggregation 创造新的越界路径，protected-range 现实转 OFF。

因此：

```text
underlying boundary / governance x retained
+ boundary still deployed
+ same broad risk family
≠ protected-range invariant
```

更精确锁：

```text
stable protected-range is topology-indexed and window-indexed

verified PASS under ingress topology A
≠ automatic PASS under ingress topology B
```

## 7｜第三因素冻结

不把以下因素倒灌为被测 x：

- Gerry 的观察与逃生；
- Warmbrunn 的个人职位与个人命令；
- 单个 IDF 士兵的火力；
- 之后护送 Gerry 离开的节点；
- refugees singing 的价值判断；
- 城市最终失守这一结局本身。

本轮只测试“同一 institutionally controlled perimeter 的 protected-range 状态是否会因 risk ingress topology 改变而迁移”。

## 8｜zn / strict-v2

本轮不锁新的 `zn`。建立墙、接纳幸存者、防疫与军事防御可以由国家安全职责、制度决策和灾难管理目标充分解释；没有必要为了凑 `zn↔x` 强造内部原则。

因此：

```yaml
strict_v2_verified_positive_increment: 0
strict_v2_negative_increment: 0
strict_precondition_increment: 0
```

## 9｜x-scope 判定

本轮 x-scope 权限 bundle 没有发生撤回、扩张、期限变化或 execution topology 权属迁移；变化发生在 protected-range risk-test 的攻击拓扑。

所以：

```yaml
x_scope_boundary_increment: 0
x_scope_dynamic_increment: 0
```

## 10｜protected-range 判定

判为新的 dynamic transition control：

```text
same institutional actor
+ same protected boundary
+ same protected range
+ same broad zombie physical-ingress risk family
+ underlying boundary/governance x retained

stage A: tested/maintained protected-range ON
trigger: collective vertical aggregation creates new ingress topology
stage B: real breach / protected-range OFF
```

锁定：

> **stable protected-range 不是只按“墙在不在 / 权限在不在 / broad risk 名称是否相同”判断；必须把现实 ingress topology 与 current window 一起索引。威胁从 topology A 迁移到 topology B 后，过去 verified ON 不能自动外推。**

计数：

```text
protected-range dynamic controls: 1 → 2
protected-range dynamic works:    1 → 2
```

positive 仍 `4/4`；negative guards 仍 `5/5`。不重复把 A 阶段算成第5个 ordinary positive。

## 11｜本轮结论

这是 current protected-range 专项明确允许的新 topology/dynamic evidence，不是普通正例堆料。

最小新增公式：

```text
verified stable protected-range under topology A
+ same boundary x retained
+ same broad risk family

-- risk ingress topology changes -->

protected-range can become OFF
```

因此后续 dynamic risk-test 至少应显式记录：

```text
risk_channel
+ ingress_path
+ ingress_topology
+ current_window
```

而不能只写一个粗粒度“zombie / armed attacker / environment risk”标签。
