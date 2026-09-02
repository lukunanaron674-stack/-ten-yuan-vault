---
type: ten-yuan-fire-axis-boundary-pressure-test
authority_level: L4
knowledge_status: evidence-locked
status: active-evidence
axis: fire
pair: zn-x
work: Neon Genesis Evangelion
actor: Shinji Ikari
stage: Episode 18 / Unit-01 vs Bardiel-infected Unit-03
sample_type: x-scope-dynamic-automated-substitute-execution-node-override
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
protected_range_increment: false
created: 2026-09-03
---

# zn↔x 火轴边界压力测试｜Evangelion Episode 18｜physical interface occupancy ≠ current execution x

## 0｜启动对齐
写前以 `main@a10cc80526a455e77b7ae3c97b053b70da822776` 为真值。已重读最近 commits，并按 current canonical 对齐 L0/L1 文件权力与成熟度门禁、L1 十元—五行正本 v1.6、zn/x 信息卡、zn/x 准度卡、`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current 与 x-scope current。current canonical 高于本记录；木轴只迁移验证方法，不迁移理论结论。

current strict-v2 verified positive 仍为 `0 / 0 works`。x-scope 已 pending-review，因此本轮不堆普通正例，只测试一个新动态机制：**主体仍物理占据同一操作接口，但原人类执行链被切断并由自动替代节点接管时，主体 current execution x 可以真实收缩为 OFF。**

## 1｜事实 / 触发 / 可观察结果
- 对象：Evangelion Unit-01。
- 对象层：pilot-to-EVA motor/combat execution control，不把 NERV 最终任务授权、EVA 所有权或 Gendo 指挥权打包进来。
- Stage A：Shinji 作为 Unit-01 当前 pilot，与 EVA 保持 synchronization，拥有现实动作/战斗执行接口；面对 Unit-03 时，他主动拒绝攻击。
- Trigger：Gendo 下令把 pilot 与 Unit-01 的 synchronization 完全切断，并把 control circuit 切换到 Dummy Plug / Dummy System。
- Stage B：操作员确认 control system 已切换、神经连接进入 Dummy System；Unit-01 随即在 Dummy System 控制下攻击并摧毁 Unit-03。
- Shinji 此时仍在 Entry Plug 内，持续要求停止并试图阻止，但不能让同层动作执行链停止或重新服从自己。

公开 Episode 18 transcript 明示：`cut the synchronization of the pilot and Unit 1 completely`、`Switch the circuit to the dummy plug`、`Control system was switched`；随后 Unit-01 由 Dummy System 执行攻击。剧情资料独立确认 Shinji 被切断控制后仍困在座舱，只能无效地要求停止。

## 2｜zn 独立证据
Shinji 在该窗口存在很强 `zn` 候选，可不引用 x 独立命名为：**宁可自己死亡，也不愿主动杀死仍有人的 Unit-03 pilot**。其明确拒绝、面对死亡风险仍坚持，支持原则高显影。

但本轮不将其计入 strict：拿掉该原则，Shinji 的 pilot execution x 仍有独立任务/战斗/防卫用途；因此 `zn→x` 不满足 strict-v2 双向缺口。该失败与《十二怒汉》已锁的 independent institutional/task purpose anchor 相邻，本轮不重复增加 strict-precondition guard。

结论：`zn high-confidence candidate / not used for strict increment`；strict 各槽 +0。

## 3｜x-scope 固定拆分
```yaml
actor: Shinji Ikari
object: Evangelion Unit-01
object_layer: pilot-to-EVA motor/combat execution control
permission_type:
  contact: true_before_and_after
  physical_interface_occupancy: true_before_and_after
  use: true_stage_A
  call_motor_execution: true_stage_A
  combat_execution: true_stage_A
  stop_current_EVA_action:
    stage_A: available_through_pilot_control
    stage_B: false_reality_tested
  management: not_inferred
  disposition: not_inferred
  veto: not_global
  exclusion: not_inferred
  transfer: not_material
scope:
  stage_A: local pilot execution control over Unit-01 movement/combat
  stage_B: physical occupancy retained but pilot execution control removed
term: same Episode-18 combat window
revocability: reality-tested_by_commanded_sync-cut_and_system-switch
return_obligation: n/a
same-layer_pre-effect_veto:
  stage_A: no substitute execution node active
  stage_B: Dummy System is current same-layer execution node
global_override:
  Gendo/NERV can order control-system substitution
ultimate_title: not_used
decision_structure:
  mission/source decision: external NERV command
  tested execution decision: pilot-local before trigger; automated substitute after trigger
consultation_structure: none_material
final_decision_structure: not_equated_with_execution_structure
execution_structure:
  stage_A: Shinji synchronization -> Unit-01 actions
  stage_B: Shinji synchronization cut -> Dummy System -> Unit-01 actions
co-decision_nodes: none_locked
scope_transition: pilot_execution_x ON -> OFF
permission_type_transition: motor/combat execution retained_by_object but reassigned away_from_Shinji
transition_trigger: synchronization cut + Dummy System circuit takeover
```

## 4｜关键压力
错误推理：

```text
主体仍在同一 cockpit / Entry Plug
+ 身体没有离开机器
+ 机器仍在执行动作
→ 主体 current execution x 仍在
```

本轮反例锁定：

```text
physical interface occupancy
≠ synchronization retained
≠ current execution-node attribution retained
```

当同层人类执行链被现实切断，且自动替代节点接管并持续产生主体无法停止的动作时，主体的 current execution x 可以 OFF；机器继续行动不能倒灌成原 operator 的 x。

## 5｜最近邻排除
- Otto Octavius / Spider-Man 2：inhibitor 损坏后是 `broad unilateral/exclusive control → contested/bidirectional`，Otto 仍保留 substantial local command；本轮 Shinji 的同层 pilot execution 被明确切断并由 substitute node 接管，属于更强的 execution-attribution replacement。
- Dumbledore / High Inquisitor：外部 superior override 插入导致 policy/final-authority scope contraction；本轮是同一物理机器内部的 human execution node 被 automated substitute node 替换。
- Terminator 2 / Dyson：credential/backend invalidation 使 access ON→OFF；本轮不是 credential validity，而是 operator 仍在接口内但 execution routing 被系统重定向。
- Crimson Tide / Ramsey：current human command holder 被另一 human command holder 替换；本轮新增的是 `human operator -> automated substitute execution node`。

## 6｜拿掉 / 反向 / 第三因素冻结
### 拿掉同步切断
若 Shinji 仍保持有效 synchronization，只是 Gendo 下命令而 Shinji拒绝，不能把其 execution x 判 OFF；外部命令与现实执行路由必须分开。

### 拿掉 Dummy System reality-test
若只有“准备切换”台词而没有 Unit-01 实际脱离 Shinji、由 Dummy System执行攻击，则不足以锁定 transition。

### 反向
真正镜像应为：Dummy System 当前执行 → substitute node 被切断/退出 → Shinji synchronization 恢复 → 同一 Unit-01 再次现实响应 Shinji，形成 execution x `OFF -> ON` restoration。

### 第三因素冻结
冻结 Shinji 的身份、主角标签、Gendo父子关系、Toji身份、NERV阵营、EVA所有权、Angel主题、战斗胜负与后续结局。只保留 `same actor + same object + same interface occupancy + execution routing before/after trigger`，分类仍成立。

## 7｜strict-v2 / x-scope 判定与成熟度
```yaml
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
x_scope_positive: +0
x_scope_boundary: +0
x_scope_dynamic: +1
x_scope_dynamic_work: +1
protected_range_positive: +0
protected_range_negative: +0
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
```

写前 current effective dynamic ledger 以最近 evidence records 为准：`21 controls / 19 independent works`。Evangelion 此前未进入 current dynamic-work 集合，且本轮机制为新的 automated substitute execution-node takeover，因此：

```text
21 / 19
→ 22 dynamic controls / 20 independent works
```

不修改已 pending-review 的 L1/L2 canonical，也不把同作品其他桥段重复计 work。

## 8｜本轮锁定句
> **主体仍物理占据操作接口，不代表 current execution x 仍归主体。若同层 synchronization / control routing 被现实切断，并由独立自动替代节点接管且主体无法停止同对象动作，则 execution x 可从 ON 收缩为 OFF；对象继续执行不能倒灌给被切断的 operator。**

## 9｜下一轮最高信息增益
P0 继续找首个 strict-v2 verified positive，不降门。

若仍无 ≥95，优先找本轮严格反向：

```text
same actor + same object
execution x 已 reality-test OFF
→ substitute execution node 被移除
→ actor synchronization / routing 真实恢复
→ same object 再次响应 actor
→ execution x OFF -> ON
```

必须看到同层恢复后的 reality-test，不接受“系统恢复”“重新连接”这种仅声明式证据。