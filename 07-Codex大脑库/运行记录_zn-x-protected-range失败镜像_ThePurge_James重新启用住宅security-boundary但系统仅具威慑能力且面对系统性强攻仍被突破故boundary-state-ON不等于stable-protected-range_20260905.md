---
type: ten-yuan-fire-axis-protected-range-negative-guard
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: The Purge
character: James Sandin
stage: James重新启用security system→armed gang对住宅发出最后通牒→系统性强攻→住宅边界被突破
priority_bucket: P1
criterion_version:
  protected_range: protected-range-risk-test-v1_20260831
  x_scope: current-x-scope-distinction-v1_20260830
  strict: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 98
protected_range_negative_guard_increment: true
protected_range_negative_guard_work_increment: true
protected_range_positive_increment: false
protected_range_dynamic_increment: false
x_scope_dynamic_increment: false
strict_v2_increment: false
may_override_canonical: false
created: 2026-09-05
---

# zn ↔ x｜protected-range P1 失败镜像｜《The Purge》：重新上锁 ≠ 稳定保护已经成立

## 0｜启动与 current 对齐

本轮写前以 `main@b7f2da16af048ca987de46df10e0e76d681bd256` 为准。按 current canonical 重读火轴待审议清单、protected-range 专项、既有《The Purge》x-scope 决策/执行结构校准与最近 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

protected-range 已处于 `pending-review`，普通正向停止堆量。本轮只处理 P1 的一个真实缺口：**边界状态重新显示 ON 以后，如果主体自己已经知道系统仅能威慑、无法承受确定性强攻，而真实 risk-test 随后确实突破，该 ON 是否仍可被误写成 stable protected-range。**

## 1｜样本与阶段

作品：《The Purge》(2013)

固定 current window：

```text
Charlie 暂时解除住宅 security system，让受伤陌生人进入
→ James 重新启用 security system
→ armed gang 到达并要求交出陌生人
→ James 明确承认该系统无法承受 systematic assault
→ gang 对住宅实施强攻
→ security boundary 被现实突破，攻击者进入住宅
```

公开剧情材料一致：James 在 Charlie 放入陌生人后重新启用系统；随后武装团伙到达并威胁强攻。James 承认系统虽然表面强大，但无法抵抗系统性攻击；最终团伙现实进入住宅。

来源：
- https://en.wikipedia.org/wiki/The_Purge_(2013_film)
- https://www.imdb.com/title/tt2184339/plotsummary/

## 2｜为什么比现有控制有新信息

当前负向已有：

- 《War of the Worlds》：拥有/驾驶移动载体但边界被直接突破；
- 《Home Alone》：局部防御反复造成伤害、延迟、改道，但最终仍被突破；
- 《Panic Room》：一个 risk-channel 成功，另一个 ingress-path 失败；
- 《John Wick》：事后处罚不等于事前排除。

本轮最小差异不是“又一个门被打破”，而是：

```text
same security-control layer
+ authorized actor 真实重新启用边界
+ visible/realized boundary state = ON
+ actor retains management/use x
+ hostile risk subsequently targets same boundary
+ system's actual exclusion capacity is known to be insufficient
+ risk-test ends in penetration
```

因此补上一个 current 专项尚未显式锁定的假阳性：

> **boundary-state ON / armed / re-enabled ≠ stable protected-range ON。**

状态位、金属屏障落下、控制接口重新启用，只证明 security boundary 被部署；stable protected-range 仍必须由真实风险下的阻断结果单独验证。

## 3｜x / 权限结构

沿用此前已 evidence-locked 的《The Purge》x-scope 事实，但本轮只取 James：

```yaml
actor: James Sandin
object: Sandin residence security-boundary control layer
permission_type:
  use: true
  management: true
  activate_lockdown: true
  reactivate_lockdown: true
scope: house doors/windows security boundary
term: current Purge-night window
revocability: operationally reversible
ultimate_title: not_needed
consultation_structure: no mandatory consultation for James reactivation
final_decision_structure: James command can make reactivation effective
execution_structure: system-mediated boundary deployment
co_decision_nodes:
  Charlie: independent same-layer control node exists in earlier window
```

现实测试：Charlie 解除后，James 的重新启用命令确实让门窗 security boundary 恢复部署，所以 James 的 management/use x 不能因为后续失败被抹掉。

但：

```text
real security-management x
≠ successful hostile-risk exclusion
```

## 4｜对象层 / current window / risk-channel

- same object layer：Sandin residence 的 doors/windows security boundary；
- current window：James 重新启用后到 armed gang 现实突破；
- protected object：Sandin household / interior occupants；
- risk-channel：armed human forced entry / systematic assault；
- ingress-path：住宅 physical security boundary；
- local/global：只测住宅这一 boundary，不推 whole-neighborhood safety；
- nominal/real：不看“高级系统”“豪宅”“安全设备销售者”标签，只看现实 risk-test。

## 5｜protected-range 五门

```text
boundary-on = yes
object-inside = yes
real risk enters / targets boundary = yes
subject-specific current x = yes (James can reactivate/manage boundary)
stable deny / block / redirect before effect = no
```

关键失败点是最后一门：armed gang 的同 risk-channel 强攻最终穿透边界并进入住宅。

所以：

```yaml
protected_range_v1: negative_guard
stable_protected_range: false
partial_or_nominal_boundary_effect: true
```

## 6｜最近邻

### vs 《Home Alone》
Kevin 的陷阱存在多次局部防御效果；本轮无需依赖“多次局部效果”即可失败。James 的 security boundary 甚至可以完整重新启用，但 actor 自己已知其 capacity 只够威慑、不能承受系统性强攻，真实 risk-test 随后确认这一点。

最小差异：

```text
Home Alone:
multiple local defense effects
→ eventual penetration

The Purge:
nominal/realized boundary state ON
+ retained management x
→ known capacity insufficiency
→ actual systematic-assault penetration
```

### vs 《The Martian》
Watney 是已通过同 risk-channel 真实保护后发生结构破裂，再修复并恢复保护，属于 `ON→OFF→ON` dynamic。

The Purge 不能写成同型 dynamic：重新启用 security state 后，没有证据证明该状态曾对 armed systematic assault 通过 stable risk-test；它只是“系统重新武装”。因此：

> **re-enabled ≠ restored protected-range。**

这正是本轮新增边界。

### vs 《War of the Worlds》
Ray 的 mobile-use x 与移动载体边界被 crowd 突破；The Purge 新增的是：**系统/边界可以处于明确部署 ON 状态，甚至由主体真实重新启用，但 protection predicate 仍需独立测试。**

## 7｜拿掉 / 反向

### 拿掉 James 的 x
如果 James 无法重新启用 system，则只能证明某个现成物理装置失败，不能测试“真实 management x retained 时 protected-range 是否仍可失败”。

### 拿掉真实强攻
如果只有 gang 口头威胁、从未攻击 boundary，则不能判 protected-range 失败，因为没有完成 risk-test。

### 反向
若同一 security state 在同等 armed systematic assault 下现实稳定阻断、迫使 attackers 无法进入或持续改道离开，则应撤销本负向，转为 protected-range positive / dynamic 候选。

实际剧情相反：团伙最终进入住宅。

## 8｜第三因素冻结

冻结：

- James 是房主 / 父亲 / security salesman；
- 家庭保护动机；
- Purge 法律合法化暴力；
- Charlie 之前主动放人；
- Henry 已预先藏在住宅内；
- 后续 James 的武装反击；
- 邻居最终介入；
- 陌生人最终救援。

这些都不能把“security boundary 在 armed risk-test 下是否稳定排除攻击者”改写成别的对象。

## 9｜strict-v2 / x-scope / protected-range 判定

### strict-v2
本轮不锁 zn。家庭责任、生存压力、对陌生人的道德判断和战略判断竞争严重；不启动 strict 双向关系。

```yaml
strict_v2: not_tested
strict_increment: 0
```

### x-scope
James 对 security boundary 的 management/use x 已由既有记录锁定。本轮 permission bundle 没有发生新变化；只观察到保护结果失败，因此：

```yaml
x_scope_dynamic_increment: 0
```

### protected-range
本轮新增一个失败机制护栏：

```text
boundary state ON
+ current management x retained
+ physical barricades deployed
≠ stable protected-range

re-enabled security boundary
≠ restored protection

stable protected-range
requires hostile-risk reality-test PASS
not merely deployed/armed state
```

## 10｜统计变化

同一 criterion：`protected-range-risk-test-v1_20260831`。

```text
protected-range positive: 4 / 4 works      不变
protected-range negative: 4 / 4 works      → 5 / 5 works
protected-range dynamic: 1 / 1 work        不变
strict-v2:                                  不变
x-scope dynamic:                            不变
```

《The Purge》此前进入 x-scope provenance，但未作为 protected-range v1 negative work 计数；本轮在 protected-range criterion 内新增 1 control / 1 independent work。不同 criterion 不把旧 x-scope control 重复当成 protected-range control。

## 11｜本轮锁定短句

> **“上锁了”不等于“守得住”。**

形式化：

```text
real boundary-control x
+ deployed/armed boundary state
≠ stable protected-range x

stable protected-range
= boundary deployed
+ real hostile risk-test
+ subject-specific pre-effect exclusion actually holds
```

本轮只锁 L4 evidence；protected-range 已 pending-review，不自动升格，不修改 L1/L2 canonical。
