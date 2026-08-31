---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
priority_slot: P5
sample_type: true-zn-false-x-strict-precondition-guard
work: Antigone
character: Antigone
stage: Creon burial-ban -> first symbolic burial -> guards strip corpse -> Antigone returns and performs rites -> arrest
criterion_version: current-layer-specific-anchor-gap-v2_20260829
x_scope_criterion_reference: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
zn_current: true
x_tested_stable_disposition: false
strict_test_allowed: false
strict_verified_positive_increment: false
strict_precondition_guard_increment: true
strict_precondition_guard_work_increment: true
x_scope_boundary_guard_increment: false
created: 2026-09-01
---

# 运行记录｜Antigone：zn 真 + 假 x 的 strict-v2 前置反向护栏

## 0｜本轮为什么值得收

本轮不重复已经 saturated / pending-review 的普通 x-scope 正例，也不把“单次行为成功≠stable x”本身再重复计入 x-scope boundary guard。

真正新增的是 P5 明确要求的高纯伪对子：

> **独立 `zn=true` + 一次现实行为 effect=true，仍不能把同一对象的 stable `x` 补出来。拒绝 x 一端，不影响 zn 独立成立；zn 真实也不能反向救活未过门的 x。**

这直接校准 strict-v2 前置门：两端必须分别独立过 current canonical，不能因一端极强而给另一端降门槛。

## 1｜事实链

作品：Sophocles《Antigone》。

被测阶段固定在 Creon 公布 Polyneices 禁葬令后，到 Antigone 被守卫抓获并公开承认行为之间。

可观察事实：

1. Creon 明确禁止为 Polyneices 下葬。
2. Antigone 预先知道禁令，仍决定为兄长执行葬礼义务。
3. 守卫第一次发现尸体已被覆土并完成象征性葬仪；执行者当时未被抓到。
4. 守卫随后把尸体重新弄成裸露状态并继续看守。
5. Antigone 返回后看到尸体再次裸露，重新覆土并行奠酒礼；守卫当场冲出将她抓获。
6. 面对 Creon，她承认自己明知禁令仍故意违反，并以不受凡人命令取消的神圣/不成文法为依据；她明确表示，若让兄长尸体不葬才会真正使她痛苦。

因此该窗口同时存在：

```text
principle persists under punishment risk
+
principle ranks Creon's decree below burial duty
+
first burial effect occurs
+
external node immediately reverses that local effect
+
second attempt is again intercepted
```

## 2｜zn 独立命名与判定

先完全不用被测 x 的语言命名 `zn`：

> **“亲属死者应得到神圣葬礼义务；凡人政令不能取消这一义务。”**

按 current zn v2：

- 原则命题明确：是；
- 不依赖外部奖励/认可：是；公开违令只增加惩罚风险；
- 冲突排序：是；Creon 法令与葬兄义务冲突时，后者被置于更高位；
- 条件变化后仍保留未来调用资格：是；第一次葬仪被守卫抹除后，她返回再次执行；
- 主体承担坚持责任：是；被捕后不否认；
- 不是从身份、善恶、悲剧结局倒推：是；判定只用明确陈述、重复行为与冲突排序。

结论：

```yaml
zn_current: true
zn_fact_confidence: 99
zn_classification_confidence: 98
```

## 3｜被测 x 的对象与权限结构

本轮不测试 Antigone 是否“能接触尸体”，而测试容易被局部行为倒灌出来的更宽命题：

> **Antigone 是否对 Polyneices 尸体/葬仪结果拥有 stable current burial-disposition x。**

```yaml
actor: Antigone
object: Polyneices corpse / burial-state on the public field
permission_type:
  confirmed:
    - contact
    - perform-local-burial-act
    - perform-libation
  not_locked:
    - stable custody
    - stable management
    - stable burial-state disposition
    - exclusion of competing handlers
    - veto over unburial / re-exposure
scope:
  confirmed: momentary local ritual effect
  rejected_inference: durable control over corpse or burial state
term: burial-ban current window
revocability: local effect immediately reversible by guards
return_obligation: N/A
same-layer_pre-effect_veto: Creon's guards physically enforce contrary state
global_override: Creon + guard enforcement node
ultimate_title: not relevant / not inferred
decision_structure: Antigone unilateral on her own attempted act
consultation_structure: none required
final_decision_structure: contested; Antigone cannot make burial state persist
execution_structure: Antigone acts locally; guards can undo/intercept
co-decision_nodes: none; this is competing control, not joint approval
```

结论：

```text
local burial act effect = true
stable corpse/burial-state x = false / not locked
```

## 4｜关键压力

最强压力不是“她最后被抓”，而是同对象层内发生的真实反向操作：

```text
Antigone 覆土/葬仪
→ 守卫恢复尸体裸露状态
→ Antigone 再次尝试
→ 守卫直接捕获并阻断后续稳定处分
```

这证明她能造成一次 local effect，但没有稳定排除 competing handler、否决逆转或持续保持 burial-state 的 current x。

## 5｜最近邻排除

### 5.1 不是“行为失败，所以 x=false”
第一次覆土行为客观成功。否定的是更宽的 stable disposition/custody，而不是 contact/use 型局部权限。

### 5.2 不重复 Earth King one-shot-compliance 护栏
Earth King 校准的是：一次命令被组织节点执行，不足推出 stable command over that organization。

Antigone 本轮的新信息增益不计为第二条同型 x-scope guard，而是：

> **即便 `zn` 已独立高置信成立，且原则驱动的一次现实 effect 也成立，也不得因为火轴期待 `zn↔x` 就把缺失的 stable x 补出来。**

所以 `x_scope_boundary_guard_increment=false`，只计 strict-v2 前置反向护栏。

### 5.3 不是“Creon 法律名义上更高，所以她没 x”
若守卫并未现实撤除覆土、无法抓捕她、也无法再次改变尸体状态，则仅凭禁令文本不能自动否决她的 current x。

本例有现实 competing enforcement node 的反向 effect-test，所以不是名义权冲突。

## 6｜拿掉 / 反向 / 第三因素冻结

### 拿掉 x
拿掉“Antigone 对尸体拥有 stable disposition”的假设，保留她的原则、一次葬仪行为和守卫反向控制，全部事实仍可完整解释。因此 stable x 不是解释 zn 的必要前提。

### 拿掉 zn
如果去掉“神圣葬礼义务高于政令”的内部原则，只保留她短暂接触尸体的机会，就无法解释她为何在第一次效果被抹除、惩罚风险已现实化后仍返回并再次执行，更无法解释她面对 Creon 的冲突排序陈述。

因此：

```text
zn 可独立成立
x 可独立失败
```

### 第三因素冻结
冻结：

- Antigone 的王族身份；
- 女性/亲属标签；
- Creon 的君主身份；
- 悲剧主题；
- 她是否勇敢或正义；
- 她最终死亡；
- Chorus / Haemon 的态度；
- 观众对她的道德评价。

只保留“原则陈述 + 冲突排序 + 重复执行 + 现实 competing control”即可得到同一结论。

## 7｜strict-v2 判定

strict-v2 前置条件要求 zn 与 x 分别独立通过 current canonical。

本例：

```yaml
same_current_window: true
same_object_layer_for_pair_test: attempted but x fails independent gate
zn_independent_gate: pass
x_independent_gate_for_stable_disposition: fail
strict_test_allowed: false
zn_to_x_test: not_entered
x_to_zn_test: not_entered
strict_verified_positive: false
```

所以本轮不是 deferred strict candidate，而是高纯 strict precondition negative control。

锁定护栏：

> **`zn=true` 不给 `x` 降门槛。原则能解释“为什么一定要做”，不能自动制造“对象现实归我掌握”。一次由 zn 驱动的成功行为，也只能证明该次 effect，不自动证明 stable x。**

## 8｜成熟度与计数

事实 99 / 分类 98，进入 `evidence-locked`。

按 current strict-v2 registry 启动基线：

```yaml
strict_v2_verified_positive_controls: 0
strict_v2_verified_positive_works: 0
strict_precondition_guards: 16
strict_precondition_guard_works: 5
```

本轮变化：

```yaml
strict_verified_positive_increment: 0
strict_deferred_increment: 0
strict_precondition_guard_increment: 1
strict_precondition_guard_work_increment: 1
x_scope_boundary_guard_increment: 0
protected_range_increment: 0
```

因此 evidence-layer：

```yaml
strict_precondition_guards: 17
strict_precondition_guard_works: 6
strict_v2_verified_positive_controls: 0
strict_v2_verified_positive_works: 0
```

《Antigone》此前未进入 strict-precondition work 集合，因此 independent work 可真实 +1。

## 9｜下一轮最高信息增益

不再重复“强原则 + 一次行为 ≠ stable x”。

下一轮优先寻找真正的 P0 镜像：

```text
独立 zn >=95
+
同一对象层天然 stable x >=95
+
competing control 已冻结
+
zn→x：拿掉 zn 后 x 仍存在但失去用途/守护/放弃/排序标准
+
x→zn：拿掉 current x 后 zn 在同一对象层失去具体现实落点/可保护范围/调用或处分接口
```

尤其优先专属托管对象、明确单一资产池、稳定领地或天然我方边界，而不是再找一次性行为或瞬时效果。
