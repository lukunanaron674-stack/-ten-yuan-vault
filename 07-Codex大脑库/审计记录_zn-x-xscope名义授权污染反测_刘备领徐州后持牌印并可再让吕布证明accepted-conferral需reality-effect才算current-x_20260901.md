---
type: ten-yuan-fire-axis-xscope-calibration-audit
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 三国演义
character: 刘备
stage: 第11回外援/小沛驻屯→第12回最终领徐州→第13回持牌印并主动再让吕布
sample_type: x-scope-activation-calibration-control
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
  audit_target: nominal-conferral-vs-realized-current-x
fact_confidence: 99
classification_confidence: 98
ordinary_positive_increment: false
ordinary_boundary_guard_increment: false
x_scope_dynamic_transition_increment: false
x_scope_dynamic_transition_work_increment: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
calibration_increment: true
may_override_canonical: false
created: 2026-09-01
---

# x-scope 名义授权污染反测｜刘备领徐州旧 dynamic control 扛住 nominal-authority 攻击

## 1｜本轮问题

前两轮已经锁定：

- capability / performance delta ≠ x-boundary delta automatically；
- task-source / direction-source delta ≠ x-boundary delta automatically。

因此本轮专门攻击旧 dynamic control 中最容易混入第三种污染的一条：

> 刘备“受牌印 / 被推举 / 领徐州”是否只是 title、nominal authorization 或 collective recognition，而没有现实 current `x`？

如果答案是“只是名义”，则旧刘备 scope-expansion control 必须撤回；如果同一对象上存在后续 subject-specific reality effect，则旧 control 保留，并锁定 nominal→real activation 的校准线。

## 2｜阶段与事实

### 阶段 A｜第11回
刘备以外援身份进入徐州，拥有自己兵将及小沛驻屯层的窄军事/驻屯 `x`；徐州州域治理仍在陶谦节点。

### 阶段 B｜第12回
陶谦病危时提出让牌印，刘备先明确拒绝。此时即使“授权意图”已经出现，也不能提前计入刘备的徐州-wide `x`。

陶谦死后，糜竺、陈登、孔融等继续推举，刘备最终接受并“领徐州”。这一瞬间单看文字仍可能受到 nominal-authority 攻击，因此本轮不把“领徐州”四字本身当最终现实证据。

### 阶段 C｜第13回 reality test
吕布来投徐州后，文本明确写刘备在州衙与吕布交谈，并主动表示徐州无人管领、自己只是“权摄州事”，随后把徐州牌印再次交让给吕布；吕布见关张怒色才没有接取。

这个桥段提供了比 title 更强的 reality effect：

1. 刘备已经实际持有徐州牌印；
2. 他以 current holder 身份主动发起同一治理对象的再转移；
3. 吕布可以当场接取，说明这不是纯礼仪象征；
4. 陶谦已经死亡，不存在原 holder 逐项 pre-effect veto；
5. 失败原因不是“刘备无权转让”，而是受让者最终没有接取。

因此旧 post-transition `x` 不是仅靠“被推举/挂名”成立。

## 3｜x 固定拆分

```yaml
actor: 刘备
object: 徐州州域 current governance / 牌印对应的州事节点

permission_type:
  stage_A:
    own-force-command: true
    local-garrison-use: true
    Xuzhou-wide-governance: false_or_not_locked
  stage_C:
    current-governance: true
    hold-governance-credential: true
    initiate-transfer-of-governance-credential: reality-tested

scope:
  stage_A: local / own-force subset
  stage_C: Xuzhou-wide current governance layer

term:
  stage_C: 权摄州事 current window

revocability:
  not used as proof of permanence

return_obligation:
  none demonstrated in tested transfer scene

same-layer_pre-effect_veto:
  stage_A: 陶谦 is superior holder
  stage_C: no surviving Tao-Qian veto; no mandatory prior co-approval shown for the attempted transfer

global_override:
  broader imperial sovereignty not collapsed into this local current-governance test

ultimate_title:
  not treated as permanent ownership

decision_structure:
  source activation: collective conferral + Liu Bei acceptance
  current tested transfer: Liu Bei initiates

consultation_structure:
  earlier persuasion by Mi Zhu / Chen Deng / Kong Rong

final_decision_structure:
  acceptance required for initial activation;
  later attempted re-transfer initiated by Liu Bei and depends on Lü Bu acceptance

execution_structure:
  current holder physically controls the governance credential and can attempt handover

co-decision_nodes:
  no mandatory same-layer pre-effect node demonstrated in the tested handover
```

## 4｜关键压力

本轮必须区分三层：

```text
A. 被邀请 / 被推举 / 被授予名义
B. 主体接受
C. 同一对象上的现实调用、管理、处分、否决或转移接口出现
```

A 不足以单独锁 `x`。
B 也不应在没有 reality effect 时自动扩成宽 `x`。
本案因为 C 出现，才把 nominal conferral 转成 current realized `x`。

所以锁：

> **accepted conferral ≠ realized x automatically；accepted conferral + same-object reality effect 才能跨过名义授权门。**

以及：

> **后续主动再转移同一 credential/object，是“这项对象当前确已进入主体处分边界”的强 reality-test，但不能自动外推为永久所有权或国家主权。**

## 5｜拿掉 / 反向

### 拿掉 reality effect
如果只有“陶谦让牌印 + 众人推举 + 刘备接受”，却没有任何后续治理、调用或再处分事实，则旧 dynamic control 至少应降为 `deferred`，不能仅凭 title/authorization 锁 Xuzhou-wide current `x`。

### 保留第13回再让事实
即使冻结刘备皇叔身份、仁德名声、百姓拥戴、陶谦遗命与众人赞誉，刘备作为 current holder 主动把牌印再让吕布这一 same-object effect 仍成立，因此 nominal-only 竞争解释被排除。

### 反向
若第13回实际是：刘备必须先获得糜竺/陈登/朝廷或其他同层节点批准，才有资格把牌印递给吕布；或牌印只是礼仪物、不能影响州事节点，则本轮校准应撤回。现有文本未显示这种结构。

## 6｜最近邻

- 与 Eddard Stark formal-authority guard 不同：本案有 same-object reality effect，不止纸面来源。
- 与宋江招安 contraction 撤回不同：宋江旧 contraction 只证明 task-source 上移，没有锁到一项 subject-specific permission 的 true→false；刘备这里出现了 current-holder 的现实转移接口。
- 与能力污染不同：不是“刘备更会治理”，而是治理 credential 与处分接口是否现实归主体。
- 与 source decision structure 不等同：集体推举只解释权限来源；真正锁 `x` 的证据来自接受之后的现实持有/再转移。

## 7｜zn / strict-v2

本轮不锁 `zn`。刘备接受徐州可由责任、战略、生存、地方支持等多因素解释，不为了 strict 破零制造原则。

```yaml
zn_current: not-locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
```

strict-v2 verified positive 继续保持 0。

## 8｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

ordinary_positive_increment: 0
ordinary_negative_guard_increment: 0
strict_positive_increment: 0
strict_negative_increment: 0
strict_deferred_increment: 0
strict_precondition_increment: 0
x_scope_dynamic_transition_increment: 0
x_scope_dynamic_transition_work_increment: 0
x_scope_activation_calibration_increment: 1
```

本轮不重复增加《三国演义》的 dynamic control/work。旧刘备 expansion control 维持有效；新增的是对该 control 的 adversarial calibration，不进入 ordinary works 计数。

仓库旧 registry 仍存在宋江 contraction 已 superseded 但总计未完全同步的问题；本文件不自行改写中央 registry，避免把 unrelated 状态修正混入单案例校准。

## 9｜最小结论

> **名义授权、被推举、递牌印本身都不能自动锁 `x`；但当主体接受后，出现同一对象上的现实持有、调用或可处分/再转移 effect，才可把 nominal conferral 认定为已激活的 current `x`。刘备领徐州旧 expansion control 因第13回再让牌印的 reality-test 扛住本轮 nominal-authority contamination attack。**

## 10｜下一步

最高信息增益仍优先 P0 strict-v2。若继续 audit dynamic 集合，则优先攻击：

- 只写 appointment / title / recognition、没有 same-object reality effect 的旧控制；
- 或表面看似 veto/transfer，实为第三方逐项批准的代理接口。

不得再用“被任命了”直接替代 current `x`。