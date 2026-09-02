---
type: ten-yuan-fire-axis-evidence
status: evidence-locked
knowledge_status: evidence-locked
authority_level: L4
axis: fire
pair: zn-x
work: The Lord of the Rings
character: Gandalf
stage: The Shadow of the Past / Frodo offers the One Ring
sample_type: strict-v2-precondition-guard-acquisition-opportunity
criterion_version: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 97
strict_v2_verified_positive_increment: false
strict_v2_negative_guard_increment: false
strict_precondition_guard_increment: true
strict_precondition_guard_work_increment: true
x_scope_boundary_guard_increment: false
may_override_canonical: false
updated: 2026-09-02
---

# zn↔x 火轴边界压力测试｜Gandalf｜可取得对象不等于 current x

## 0｜启动对齐
本轮以写前 `main@4e7cc15ae34935237a7b079dfb41a79d0fc68af1` 为准。已重读 AGENTS、文件权力与总入口、L1 十元—五行正本 v1.6、zn/x 信息卡与准度卡、zn补x、火轴待审议清单、研究总纲、strict-v2 current、x-scope current 与最近 commits。current canonical 高于本记录；木轴只迁移验证方法，不迁移理论结论。

## 1｜事实窗口
对象固定为 One Ring。Gandalf 已确认 Frodo 所持戒指是至尊魔戒；他此前可短暂拿取/接触戒指完成火焰辨识，但在 Frodo 明确请求 Gandalf 接受戒指、承担持有与任务时，Gandalf 主动拒绝。他解释接受该力量会把自己的善意与行善欲望扭转为危险的支配路径，同时仍承诺帮助 Frodo 处理并最终摧毁至尊魔戒。

事实来源：Tolkien Gateway 对《The Shadow of the Past》章节与电影场景的梗概均明确记录 Gandalf 先接触/检验戒指，随后在 Frodo 主动提出交付时拒绝接受，并说明腐化风险；Council of Elrond 阶段继续维持“不把至尊魔戒纳入自己掌握并用于权力”的方向。

## 2｜zn 独立命名
不引用被测 x，可独立命名为：

> 即使权力可以被用于善意目的，也不应接受一种会把善意转化为支配并最终使主体成为其权力逻辑载体的力量；对这种路径应主动拒绝，并继续支持消除其支配来源。

该原则不是从“巫师身份”“好人阵营”“最终胜利”倒推。它在 Frodo 主动交付、可明显增加 Gandalf 现实力量的情境下直接改变选择，并在之后处理至尊魔戒的阶段继续被调用。current zn 判定：`true`，端点置信度 97+。

## 3｜x 权限结构

```yaml
actor: Gandalf
object: One Ring
permission_type:
  contact: true_on_brief_test
  temporary_handling: true_on_brief_test
  acquisition_opportunity: true
  offered_transfer: true
  stable_possession: false
  custody: false_after_refusal
  ordinary_use: false
  management: false
  disposition: false
  veto_over_Frodo_possession: false
  exclusion: false
  transfer: not_exercised_as_holder
scope:
  brief_contact: local
  offered_acquisition: unrealized
  stable_current_control: none
term:
  brief_test_contact: transient
  offered_possession: rejected_before_current_x_forms
revocability: n/a_for_unaccepted_transfer
return_obligation: n/a
same-layer_pre-effect_veto: none_because_stable_x_never_forms
global_override: none
ultimate_title: not_used
decision_structure:
  accept_or_refuse_offer: Gandalf-unilateral
  Ring_current_possession_after_refusal: Frodo-side
consultation_structure: Frodo requests transfer
final_decision_structure: Gandalf can refuse acquisition but cannot thereby be treated as current holder
execution_structure: refusal prevents acquisition from entering realized permission bundle
co-decision_nodes: none_required_for_refusal
```

## 4｜关键压力
错误推理：

```text
对象就在眼前
+ 主体曾经碰过/拿过
+ 当前持有人明确愿意交给主体
+ 主体对对象命运承担高度责任
→ x=true
```

不成立。

本轮锁定：

> **real acquisition opportunity + offered transfer + transient contact/handling ≠ realized current x。**

只有交付被现实接受、对象进入主体稳定 possession/use/manage/disposition 边界，才能在相应 permission family 上记 current x。主体主动拒绝取得，恰好证明“有能力取得”“可以取得”“被请求取得”与“已经归我掌握”必须分账。

## 5｜最近邻与新增机制
- 与 Antigone 不同：Antigone 是 `zn=true + 一次局部 effect ≠ stable x`；Gandalf 是 **stable x 在形成前被主体主动拒绝，acquisition opportunity 本身不得计 x**。
- 与临时 custody/use 类案例不同：本轮不讨论“已经形成窄 x 但不能倒灌 full disposition”，而是更前置地判定 **offer/opportunity 尚未转化为 realized permission bundle**。
- 与 Frodo/One Ring 既有 `possession/use ≠ destruction-disposition` 边界不同：Frodo 已是 holder；Gandalf 本轮恰好检验“未接受成为 holder”的前门。

因此该机制不是旧 ordinary x-scope guard 的换皮，优先计 strict precondition，不重复增加 ordinary boundary guard。

## 6｜拿掉 / 反向 / 第三因素
- 拿掉 Gandalf 的独立反支配原则：Frodo 的交付机会仍然存在，但不能据此推定 Gandalf 会接受；这只说明 opportunity 与 zn 是不同变量。
- 反向：如果 Gandalf 接受交付，并在随后窗口持续 possession/use/manage，才可从 `x=false` 转入对应窄 current x；“本可以接受”不是这一步的替代证据。
- 冻结：巫师身份、阵营、善恶评价、力量等级、最终结局、Frodo 的主角身份、至尊魔戒的主题象征。只保留 offer、brief contact、explicit refusal、post-refusal holder structure，分类仍成立。

## 7｜strict-v2 判定

```yaml
same_current_window: true
zn_independently_true: true
x_independently_true_on_tested_stable_holder_layer: false
strict_v2_verified_positive: false
strict_v2_negative: false
strict_precondition_guard: true
```

由于被测 stable holder/use/disposition x 未独立过门，本轮不进入 strict 双向缺口测试；也不允许用强 zn 给 x 降门槛。

## 8｜成熟度与统计
事实置信 `99`；分类置信 `97`；成熟度 `evidence-locked`。

写前有效 strict-precondition evidence-layer 已经由 Book of Eli 状态同步为 `18 controls / 7 independent works`。本轮《The Lord of the Rings》此前未进入 strict-precondition work 集合，且机制不同于 Antigone / Book of Eli，因此有效层：

```text
strict-precondition
18 / 7
→ 19 controls / 8 independent works
```

其余不变：

```yaml
strict_v2_verified_positive: 0/0
strict_v2_negative_increment: 0
strict_v2_deferred_increment: 0
x_scope_boundary_increment: 0
x_scope_dynamic_increment: 0
protected_range_increment: 0
```

## 9｜最小规则

```text
can acquire
≠ has acquired

offered transfer
≠ realized possession

transient handling
≠ stable current x

refusal of acquisition
can itself be zn-driven
but does not make the refused object part of subject current x
```

## 10｜下一轮高信息增益
P0 继续优先天然对象构成型 strict-v2 正例，不降低门槛。若仍无 ≥95 正例，最值得找本机制的动态镜像：same actor + same object，Stage A 明确拒绝/未接受所以 stable x=false，之后真实接受交付并完成 sustained possession/use reality-test，使 `acquisition opportunity → realized current x`；或反向从 stable x 主动拒绝/交回后退出 current boundary。要求同对象层、同 permission family，并与已有 voluntary release / external dispossession 机制分开。