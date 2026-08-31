---
type: ten-yuan-fire-axis-boundary-test
axis: fire
pair: zn-x
focus: x-scope / nominal-authority-vs-current-realized-x
criterion_version: current-x-scope-distinction-v1_20260830
knowledge_status: evidence-locked
authority_level: L4
fact_confidence: 99
classification_confidence: 98
work: Game of Thrones / A Game of Thrones
character: Eddard Stark
window: Robert deathbed decree -> throne-room failed arrest / City Watch betrayal
sample_type: P5 high-purity pseudo-x / source-authority-vs-current-effect guard
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
protected_range_increment: false
zn_increment: false
strict_verified_positive_increment: false
may_override_canonical: false
created: 2026-08-31
---

# zn↔x 火轴边界压力测试｜Eddard Stark：正式摄政授权存在，但现实执行节点倒戈，formal source authority 不等于 current realized x

## 1｜为什么本轮值得收

当前 x-scope 已经 pending-review，普通正例与同型护栏停止堆量。本轮不是“又一个职位不等于权力”，而是把 source / credential / current execution 拆成一个高纯最小差异：

> **正式、可验证、来自原最高授权节点的命令，即使在法理来源层成立，也不能自动计为主体 current `x=true`；若同对象层的现实执行节点拒绝承认并反向执行，主体缺少该 current-effect x。**

这与“名义职位”不同：Ned 不是只有头衔，而是持有 Robert 临终签署、盖印的明确摄政/Protector 授权；真正失败的是授权进入 current reality 的执行链。

## 2｜事实链

1. Robert 临终命 Eddard Stark 在其死后担任 Lord Regent / Protector of the Realm，代行统治直至继承人成年；文本经 Robert 签署。
2. Robert 死后，Ned 在 throne room 出示该命令。
3. Cersei 直接撕毁文件，不承认其现实效力。
4. Ned 随即命 Commander Janos Slynt / City Watch 拘押 Cersei 与 Joffrey。
5. City Watch 没有执行 Ned 的命令，反而攻击 Stark guards；Littlefinger 随后控制 Ned。
6. 因而在“拘押 Cersei/Joffrey、现实控制王廷”这一 current object/action layer，Ned 的 formal authorization 没有形成可生效的 current command/disposition `x`。

## 3｜x-scope 固定拆分

```yaml
actor: Eddard Stark
object:
  source_layer: Robert's post-death regency / Protector authorization
  tested_current_layer: court-control order to arrest Cersei and Joffrey
permission_type:
  source_layer:
    - formal authorization
    - regency mandate
    - command entitlement
  tested_current_layer:
    - command
    - custody order
    - political control
    - enforcement invocation
scope:
  source_layer: realm-level regency authorization
  tested_current_layer: Red Keep / City Watch enforcement act
term: after Robert's death, until lawful heir comes of age under the decree
revocability: contested after Robert's death; not sufficient by itself to decide current x
return_obligation: N/A
same-layer_pre-effect_veto:
  formal_text: not the key issue
  reality: City Watch / court enforcement nodes refuse Ned's command and act against him
global_override:
  de_facto: Cersei/Joffrey faction + City Watch control
ultimate_title: disputed; not used to infer current x
decision_structure:
  source_authorization: unilateral royal grant by Robert
  tested_current_effect: authorization fails to propagate into enforcement
consultation_structure: irrelevant to tested effect
final_decision_structure: Ned issues unilateral arrest order, but lacks realized execution authority
execution_structure: City Watch defects and executes the opposing side's control
co-decision_nodes: none required by Ned's claimed mandate; failure is enforcement non-recognition, not joint-threshold
```

## 4｜关键压力

### 4.1 formal source authority ≠ current realized x

若只读文件来源：

```text
Robert signs decree
→ Ned formally authorized
```

很容易把 `x=true` 写到 current reality。

但现实链是：

```text
formal authorization exists
+ Ned issues same-layer arrest command
+ enforcement node is present
→ enforcement node refuses / defects
→ target is not placed under Ned's custody
→ Ned himself is seized
```

因此本轮锁：

> **source_authority=true 不足推出 current_realized_control=true。**

### 4.2 “文件被撕毁”本身不是核心证据

若 Cersei 只撕纸，但 City Watch 仍按 Ned 命令拘押她，Ned 的 current x 仍可能成立。

真正使分类锁定的是：

> **同一 current effect 被调用时，现实执行节点明确不响应 Ned，且反向执行。**

所以本轮不是“纸被撕 = x 消失”的符号学判断，而是 current-effect test。

## 5｜最近邻排除

### 最近邻 A｜只是未来可能失效

不成立。这里不是 future revocation；Ned 在当下立即调用拘押命令，现实节点当场不执行。

### 最近邻 B｜只是 joint/shared gate 未满足

不成立。作品没有显示该 arrest order 需要另一个平级共同批准；失败点是执行节点倒戈，而不是 mandatory co-approval threshold。

### 最近邻 C｜Ned 完全没有任何 x

也不成立。Ned 此前作为 Hand 拥有现实职务权限；本轮只拒绝把 Robert 的 post-death formal regency authorization 自动倒灌为该 throne-room tested action 的 current realized x。

## 6｜拿掉 / 反向测试

### 拿掉 formal decree

Ned 的法理主张会明显减弱，但不能解释为何他在 throne room 会以 Regent / Protector 身份发号施令。

### 拿掉 City Watch betrayal / enforcement refusal

若 City Watch 按命令拘押 Cersei/Joffrey，则 formal authorization 很可能已经转成 current realized command x。

因此真正决定本轮分类的是：

> `authorization source` 与 `effect realization` 必须分账。

## 7｜第三因素冻结

冻结：

- Ned 的荣誉人格；
- Joffrey 是否真正合法继承；
- Cersei 的阵营；
- Littlefinger 的动机；
- Ned 后续被处决；
- 谁在战争中最终获胜；
- Robert 遗嘱文本中 “my heir” 的继承解释争议。

这些都不能代替本轮唯一被测问题：**Ned 的 formal mandate 是否在该 current action 上形成现实可调用的 x。**

## 8｜zn / strict-v2

`zn` 本轮不锁。

Ned 拒绝承认 Joffrey、坚持 Stannis 继承可由荣誉、法律判断、Robert 遗命、政治选择等多重因素解释；本轮没有独立完成 current `zn` 门。

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_v2_verified_positive_increment: false
```

strict-v2 继续保持 current verified positive = 0。

## 9｜本轮新护栏

> **formal authorization / signed mandate / source legitimacy ≠ current realized `x`。**

进一步：

> **判断 current `x` 时，必须观察被测权限在同对象层被实际调用后，执行/保管/处分/否决节点是否响应；若现实节点明确拒绝并执行相反结果，不能只凭授权来源把 current x 锁真。**

同时保留反向边界：

> **执行失败一次也不自动证明主体所有其他 scope 的 x 都为 false；只否定被测 permission/object/window。**

## 10｜成熟度与计数

```yaml
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
strict_verified_positive_increment: false
zn_increment: false
protected_range_increment: false
```

《Game of Thrones / A Song of Ice and Fire》此前未计入 current x-scope boundary-guard independent-work 集，本轮同 criterion 下可新增 1 control / 1 independent work。

本记录只进入 L4 evidence layer；不修改 L1/L2 canonical，不自动升格已经 pending-review 的 x-scope。
