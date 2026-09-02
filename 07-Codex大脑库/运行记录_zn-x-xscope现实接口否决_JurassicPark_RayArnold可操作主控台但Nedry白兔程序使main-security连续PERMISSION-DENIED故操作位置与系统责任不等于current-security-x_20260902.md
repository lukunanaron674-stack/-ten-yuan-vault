---
type: ten-yuan-fire-axis-xscope-boundary-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: Jurassic Park
character: Ray Arnold
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: nominal-operational-position-with-reality-interface-denial
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_increment: false
protected_range_increment: false
may_override_canonical: false
created: 2026-09-02
---

# zn↔x 火轴边界压力测试｜《Jurassic Park》Ray Arnold｜操作位置/系统责任 ≠ current security x

## 0｜启动对齐
写前以 `main@27658daf43781a3e4e12a04cf200fd9d9d38c6b0` 为准，重读最近 commits，并按 current canonical 对齐 L0/L1 文件权力与任务门禁、L1 十元—五行正本、zn/x current 信息卡与准度卡、相关关系卡/补卡、火轴待审议清单、火轴研究总纲、strict-v2 current 与 x-scope current。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

P0 strict-v2 本轮仍未找到同时满足 independent zn+x、same current window、same object layer、双向缺口与 competing-anchor freeze 的 ≥95 候选，继续不破零。本轮转 P5，专测“主体处于系统操作位置、承担恢复责任、能接触主控台”是否足以倒推出 current security x。

## 1｜作品 / 人物 / 阶段
- 作品：《Jurassic Park》（1993）
- 人物：Ray Arnold
- 被测对象层：Jurassic Park main security / main program security interface
- current window：Nedry 的 white-rabbit sabotage 已运行，门禁/围栏等安全系统异常；Arnold 在主控台尝试 `Access main program`、`Access main security`、`Access main program grid`，系统连续返回 `PERMISSION DENIED`，随后出现 Nedry 预置的 “magic word” 拒绝界面。

事实锁定只依赖可观察接口结果：Arnold 实际发出访问命令，系统实际拒绝；不从其职位名称或“应该有权限”推 x。

## 2｜zn 证据
本轮不锁 `zn`。Arnold 尝试恢复系统可由即时事故处置、岗位责任、人员安全压力和故障排查充分解释，不能由一次紧急操作倒推出稳定不可让渡原则。

```yaml
zn_current: not_locked
strict_v2_verified_positive: false
strict_v2_negative: false
strict_precondition_guard: false
```

strict-v2 verified positive 继续 `0 / 0 works`。

## 3｜x 权限结构
```yaml
actor: Ray Arnold
object: Jurassic Park main security interface
object_layer: current security-program access / control

permission_type:
  physical_console_contact: true
  submit_access_command: true
  inspect_interface: true
  main_security_access: false_reality_tested
  security_management_through_tested_interface: false
  restore_security_by_same_interface: false_at_test_time
  ultimate_system_title: not_inferred

scope:
  local_console_interaction: true
  main_security_permission: false
  whole_park_control: not_inferred

term:
  Nedry white-rabbit lockout window

revocability:
  prior_state: not_needed_for_this_control
  current_state: interface_denied

return_obligation: n/a

same_layer_pre_effect_veto:
  Nedry_white_rabbit_lockout: active

global_override:
  later manual reboot / alternate recovery path is separate and not used to backfill this interface

ultimate_title:
  not_used

decision_structure:
  not_material

consultation_structure:
  Hammond/Wu discussion does not grant interface permission

final_decision_structure:
  tested interface itself rejects Arnold

execution_structure:
  Arnold_command -> PERMISSION_DENIED -> no main-security access

co_decision_nodes: []
```

## 4｜关键压力
错误推理：

```text
主体坐在控制室
+ 能操作主控台
+ 被要求恢复系统
+ 对系统结构很熟
→ current main-security x = true
```

本轮否定该跳步。current x 必须按 permission type 与现实 effect 分层：

```text
console contact/use = true
submit command = true
main-security access = false
same-interface security control = false
```

因此锁定：

> **operational position / responsibility / console contact 不等于 current security x；当同一现实接口明确拒绝主体时，不能用名义职责、技术能力或“本来应该能操作”覆盖 current permission failure。**

## 5｜最近邻排除
### 对 Minority Report / Anderton
Anderton 是上游敌对状态已经形成，但旧 retina 在下游接口仍被接受，因此窄 access-x 继续 true。本轮正好给出反向 reality outcome：Arnold 虽在合法操作位置且能发命令，但 current interface 明确 `PERMISSION DENIED`，所以被测 access-x false。

### 对 Winter Soldier / Fury
Fury 是 credential set 被部分削减后仍有独立第二 retina 成功满足 threshold；Arnold 本轮没有任何 surviving credential/path 被现实接受，故不能把“还有别的恢复办法”倒灌成当前被测接口的 x。

### 对 Ghost Protocol / Hendricks
Hendricks 是 credential completion 后 downstream launch reality-test 成功，属于 permission expansion；Arnold 是现实接口直接否决，属于 nominal/operational-position 与 current permission 的分离。

## 6｜拿掉 / 反向
拿掉 `PERMISSION DENIED` 的 reality-test，只剩 Arnold 在控制室、熟悉系统、承担恢复任务，则只能得到 candidate/nominal access，不能 evidence-lock current security x 的真假。

反向最小差异：若同一 Arnold、同一 main-security interface 在 lockout 清除后重复 `Access main security` 并被系统接受、随后现实改变安全系统状态，则才可记录 `false -> true` 的 dynamic permission restoration；不能仅以重启动作发生自动判恢复。

## 7｜第三因素冻结
冻结 Arnold 的职位、资历、技术能力、Hammond 的命令、事故严重程度、Nedry 的道德评价、恐龙逃逸结局。Nedry 的 sabotage 只作为 current competing execution/lockout node；真正分类证据是同层接口的明确拒绝结果。

## 8｜strict-v2 / x-scope 判定
```yaml
sample_type: nominal-operational-position-with-reality-interface-denial
x_scope_boundary_guard: true
x_scope_dynamic_transition: false
strict_v2_verified_positive: false
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
```

## 9｜统计变化
写前 current ordinary x-scope boundary effective layer：

```text
20 boundary guards / 17 independent works
```

《Jurassic Park》此前未进入该 current boundary work 集合，本轮机制是明确的 reality-interface denial，而非 stale credential、partial revocation 或 credential completion，因此：

```text
20 / 17
+ reality-interface-denial guard: +1 / +1
= 21 boundary guards / 18 independent works
```

其他：
```yaml
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
x_scope_positive: +0
x_scope_dynamic: +0
protected_range_positive: +0
protected_range_negative: +0
```

## 10｜本轮结论
```text
能坐在主控台前
≠ 能让该 permission layer 生效

能提交命令
≠ 命令被接受

岗位/责任/技术能力
≠ current x
```

current x 最终仍回到同一对象层、同一 permission type、同一窗口的现实接口与 effect-test。