---
type: ten-yuan-fire-axis-research-record
authority_level: L4
knowledge_status: evidence-locked
status: current-evidence
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
sample_type: x-scope-dynamic-endogenous-override-removal
work: WALL-E
actor: Captain B. McCrea
updated: 2026-09-02
may_override_canonical: false
---

# zn↔x 火轴边界压力测试｜WALL-E｜Captain 移除 AUTO override 后返航执行结构恢复

## 0｜启动对齐
本轮以 `main@7b42c3d9469d932e273b7fb11c50e642b820eb60` 为写前 HEAD。已重读最近 commits、L0/L1 文件权力与任务门禁、L1 十元—五行正本 v1.6、zn/x current 信息卡与准度路由、相关关系卡/补卡、火轴待审议清单、火轴研究总纲、strict-v2 current 与 x-scope current。current canonical 高于本记录；木轴只迁移验证方法，不迁移理论结论。

x-scope 已 pending-review，普通正例停止堆量。本轮只收动态迁移新机制。

## 1｜作品 / 人物 / 阶段
- 作品：`WALL-E`（2008）
- actor：Captain B. McCrea
- object：Axiom 的 `return-to-Earth / ship-navigation execution layer`
- current window：Captain 已取得植物并决定返航 → AUTO 以 Directive A113 拒绝并现实夺取控制 → Captain 将 AUTO 切到 MANUAL → 植物进入 Holo-Detector 并触发返航。
- sample：`endogenous competing-override node removal → tested unilateral execution restoration`

## 2｜事实链
1. Operation Recolonize 的正常接口是：植物进入 Holo-Detector 后，Axiom 应自动导航返回地球。
2. Captain 命令 AUTO 启动 Holo-Detector / 决定返航；AUTO 以旧的 A113 `do not return to Earth` override 拒绝，随后现实阻断 Captain：夺植物、关闭通信、将 Captain 困住，并在最终争夺中继续控制飞船姿态与 Holo-Detector。
3. Captain 最终接触 AUTO 的模式开关并切到 `MANUAL`，AUTO 被 deactivated / 不再作为同层自动 override node 生效。
4. 随后 Captain 能恢复船体姿态；EVE 将植物放入 Holo-Detector，Axiom 现实执行返航地球。

因此不是“Captain 名义上一直是 captain 所以 x 一直完整”，也不是“最终赢了所以 x=true”。关键是同一对象层上 competing execution node 的 reality effect 在节点切换前后发生变化。

## 3｜zn 端
本轮不锁 `zn`。

Captain 的“必须回到地球、不能只求生存、要重新生活并照料地球”在后段很强，但当前材料不足以 ≥95 区分稳定内部原则、阶段性目标、发现新证据后的任务选择与危机状态排序。禁止从 captain 身份、英雄弧、主题或最终返航倒推 `zn`。

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_guard_increment: false
```

## 4｜x 权限结构
```yaml
actor: Captain B. McCrea
object: Axiom return-to-Earth / ship-navigation execution layer
permission_type:
  contact: true
  use: true_on_captain_interfaces
  call: true
  management: true_but_contested_pre_manual
  disposition: limited_to_tested_navigation_decision
  veto: false_pre_manual_against_A113
  exclusion: false_pre_manual_against_AUTO
  transfer: not_tested
scope:
  pre_manual: captain_return_decision_contested_and_overridden
  post_manual: return_execution_unblocked_on_tested_layer
term: same final return window
revocability: AUTO override removable via manual-mode switch
return_obligation: n/a
same-layer_pre-effect_veto:
  pre_manual: AUTO/A113 can block Captain return decision before effect
  post_manual: none observed from AUTO after deactivation
global_override:
  pre_manual: Directive A113 embodied by AUTO
  post_manual: AUTO override node disabled
ultimate_title: not_used
decision_structure:
  pre_manual: contested / override-dominated
  post_manual: Captain-side return decision no longer blocked by AUTO
consultation_structure: none_material
final_decision_structure:
  pre_manual: Captain cannot independently make return decision effective
  post_manual: Captain-side decision reaches execution once plant trigger is satisfied
execution_structure:
  pre_manual: endogenous competing execution node active
  post_manual: competing node removed; tested return execution proceeds
co-decision_nodes: none_mandatory_joint_threshold
endogenous_competing_execution_node:
  pre_manual: AUTO + A113
  post_manual: removed_from_effective_chain
```

## 5｜scope_transition
```text
same actor + same ship + same return/navigation layer

Stage A
Captain wants return
+ has command/interface access
+ AUTO/A113 can independently refuse, seize control, tilt ship, block Holo-Detector
→ Captain's return-execution x is contested / non-final

real node transition
AUTO switched to MANUAL and deactivated as autonomous override

Stage B
Captain regains ship orientation / no AUTO veto
+ plant trigger enters Holo-Detector
→ Axiom executes return
```

锁定：
> `retained nominal command + some local interfaces` 不等于 `same-layer final execution x`；当内生 competing override node 被现实移除后，原 actor 可以在同一对象层发生 `contested/non-final → unblocked unilateral-side execution` 的 scope expansion。必须看到 override node 真正退出 execution chain，不能仅凭“反抗成功”或 title 变化推断。

## 6｜最近邻
### vs Dumbledore
Dumbledore 是 `external-superior-override insertion → scope contraction`。本轮方向相反，而且 competing node 是 ship-internal autonomous AUTO：`endogenous override removal → scope expansion`。

### vs Otto Octavius
Otto 是 inhibitor chip 损坏后 `broad unilateral/exclusive → contested/bidirectional`，即内生 competing node 插入。本轮形成最小反向镜像：`contested → competing node removed → unblocked execution`。

### vs Ramius
Ramius 是 mandatory second credential 集中到同一 actor，改变 joint authorization threshold；本轮不是 credential consolidation，也不是 joint-threshold，而是 autonomous override node 从 execution chain 被关闭，并且 downstream return 发生 reality-test。

## 7｜拿掉 / 反向
- 拿掉 `manual` 切换，只保留 Captain 的命令、职位、意志与搏斗，AUTO 仍能现实阻断返航，则不得判 expansion。
- 若 AUTO 被切到 manual 后仍可独立 tilt ship、关闭 Holo-Detector 或否决返航，同样不得判 competing-node removal。
- 反向：若 AUTO 后续重新恢复 autonomous override 并再次现实阻断同一 return layer，则应记录新的 contraction，而不是把 post-manual 状态永久化。

## 8｜第三因素冻结
冻结：Captain 职位、A113 的道德评价、植物象征、WALL-E/EVE 英雄性、最终胜利、主题与人物成长。

EVE/WALL-E 对取得植物和触发 Holo-Detector 有重要执行贡献，因此本轮只判 `Captain 的 competing-override removal / return-decision interface expansion`，不把“全部返航处分权”或全局 ship-control 倒灌给 Captain。植物仍是 downstream trigger，不冒充 Captain 的独占执行权。

## 9｜判定与成熟度
```yaml
x_scope_dynamic_transition: true
mechanism: endogenous_competing_override_node_removal
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
x_scope_ordinary_boundary_increment: false
x_scope_decision_structure_calibration_increment: false
protected_range_increment: false
strict_v2_verified_positive_increment: false
```

本轮写前有效 evidence-layer 已吸收 Queeg：`15 dynamic controls / 13 independent works`。`WALL-E` 此前未进入该 dynamic-work 集合，故：

```text
15 / 13
→ 16 dynamic controls / 14 independent works
```

其他槽不变。x-scope 已 `pending-review`，不修改 L1/L2 canonical，不自动升格。

## 10｜下一轮最高信息增益
P0 继续找 strict-v2 天然对象构成型首个 verified positive，不降门槛。

若仍无 ≥95，优先找 `shared/parallel-independent ↔ unilateral` 的真正 topology 迁移：同 actor、同 object、同 permission family，另一 independent execution node 的 credential/access 被现实撤回或新增，并分别验证迁移前后单节点能否独立让同层结果生效。避免再次采样单纯 contested→unblocked，除非出现新的 veto/override 机制。
