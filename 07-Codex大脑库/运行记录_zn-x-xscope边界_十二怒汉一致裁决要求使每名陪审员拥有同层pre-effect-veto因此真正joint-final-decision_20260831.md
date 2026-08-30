---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_type: x-scope-boundary-guard-true-joint-final-decision
work: 十二怒汉
work_year: 1957
character: 十二人陪审团（以8号陪审员为最小差异入口）
stage: 法官要求一致裁决→首轮11比1→持续审议→最终12比0无罪
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_accuracy: x_准度卡_v0.1
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 99
x_scope_boundary_guard_increment: true
independent_work_increment_for_x_scope_guard_set: true
joint_final_decision_control: true
zn_increment: false
strict_increment: false
may_override_canonical: false
created: 2026-08-31
---

# 运行记录｜《十二怒汉》一致裁决：每名陪审员拥有同层 pre-effect veto，是真正 joint final decision

## 1｜本轮问题

当前火轴 `x scope` 已经明确：

- 多人咨询不等于共同最终裁决；
- collective conferral 不预设后续 joint execution；
- shared-governance 不能倒灌成领导者单方最终处分。

P3 仍缺一份真正高纯的反向对照：

> **什么才算 joint/shared final decision，而不是“大家都说了话”？**

《十二怒汉》提供了非常干净的制度结构。

## 2｜剧情事实

法官在陪审团退庭前明确交代：

- 若存在合理怀疑，应作无罪裁决；
- 若不存在合理怀疑，才可判有罪；
- **无论怎样裁决，最终 verdict 必须 unanimous；**
- 有罪将触发强制死刑后果。

首轮陪审投票为：

```text
11 guilty
1 not guilty（8号）
```

因为 verdict 必须 unanimous，这个 11:1 并不能形成最终有罪裁决。

随着讨论推进，其他陪审员逐步改票；直到最后所有人都投向 not guilty，最终 verdict 才真正形成。

## 3｜被测 x 对象层

本轮只测：

> **本案 jury verdict 的最终形成权限。**

不测：

- 谁最有说服力；
- 谁主持讨论；
- 谁更理性；
- 谁影响别人最多。

### x-scope 固定字段

```yaml
actor: 十二名陪审员组成的陪审团
object: 本案最终 guilty / not-guilty verdict
permission_type:
  - vote
  - approve
  - veto-before-effect
scope: 单一案件最终裁决
term: 本案陪审窗口
revocability: 当前窗口内由陪审制度规定
return_obligation: none
same_layer_pre_effect_veto: true
global_override: 法官解释法律但不替陪审团形成事实裁决
ultimate_title: 最终 verdict 只在一致时成立
source_decision_structure: institutional-conferral-to-all-jurors
consultation_structure: plural / deliberative
final_decision_structure: joint-unanimous
execution_structure: joint-finalization
co_decision_nodes: 12名陪审员
unilateral_effect: false
joint_veto: true
```

## 4｜为什么这是真正 joint final decision

关键不是“十二个人都参加讨论”，而是：

> **任一名陪审员都能在最终 verdict 生效前，通过不同意阻断该 verdict。**

首轮 11:1 已经提供最小差异：

```text
11人赞成 guilty
+
1人不同意
→ guilty verdict 不能形成
```

这正是 `same-layer pre-effect veto` 的高纯现实证据。

因此：

```yaml
joint_final_decision_x: true
single_juror_unilateral_final_x: false
```

8号陪审员的一票是真实 `x`，但它不是“8号拥有整个 verdict”。更准确是：

> **每个陪审员拥有同层 veto / approval slice；最终处分属于 joint structure。**

## 5｜与孙权赤壁案的最小差异

此前孙权赤壁战降公议已经锁出：

```text
多人参与咨询
≠
共同最终裁决
```

因为文武群臣可以提出战/降意见，但最终由孙权决定是否抗曹，当前没有证据显示每个咨询节点拥有 same-layer pre-effect veto。

《十二怒汉》恰好反过来：

```text
多人讨论
+
每名成员都有现实 pre-effect veto
+
11:1 无法形成 verdict
→ genuine joint final decision
```

所以这两案共同把一个关键边界锁得更清楚：

> **consultation plurality 不是 joint 的证据；pre-effect veto 才是。**

## 6｜拿掉测试

### 6.1 拿掉 unanimous rule

如果把制度改成简单多数即可形成 verdict，那么首轮 11:1 将直接足够产生结果。

此时8号的一票仍是真实投票权，但不再拥有阻断最终结果的同层 veto。

所以：

```text
unanimity requirement
→ 构成当前 joint-final-decision structure
```

### 6.2 拿掉“8号特别有说服力”

即使8号一句话都说不漂亮，只要他仍投 not guilty，在 unanimous rule 下首轮 guilty verdict 就不能形成。

因此他的 veto `x` 不依赖人格魅力或说服能力。

## 7｜反向测试

若结构是：

```text
多人可以发言 / 建议 / 投偏好票
但最终由一个节点单独拍板
```

则应判：

```text
consultation_structure = plural
final_decision_structure = unilateral
```

不能因为“大家都参与”就写 joint。

真正 joint 至少要看到：

```text
任一共同节点不同意
→ 同一结果在生效前停住
```

或等价的共同批准门。

## 8｜第三因素冻结

冻结：

- 8号陪审员是否更聪明；
- 被告客观上是否无罪；
- 影片的道德立场；
- 谁改变了谁的意见；
- 最终 12:0 的戏剧效果。

只保留：

> unanimous rule、首轮11:1、是否能形成最终 verdict。

结论不变。

## 9｜最近邻排除

### x vs z

8号被其他人尊重与否，不改变他的一票 veto 权。

### x vs xn

秘密投票、证据重构、讨论顺序属于“怎么推进审议”；不能替代“谁拥有最终批准/否决”。

### x vs zx

8号后来影响力扩大，不等于其正式权限从一票扩张成整个 verdict。正式 `x` scope 始终是 one approval/veto share。

### x vs nx

陪审权限由制度授予，但外部来源不否定授权生效后的 current `x`。

## 10｜zn / strict 分账

本轮不重新审 `zn`。

该作品已有另一条 99/98 evidence-locked 记录指出：8号陪审员的“合理怀疑”候选原则与正式陪审职责语义高度同构，因此不足独立成立 `zn`。

所以本轮：

```yaml
zn_increment: false
zn_x_cooccurrence: false
strict_test_allowed: false
strict_increment: false
```

这次只增加 `x scope / decision_structure` 的第二研究用途。

## 11｜本轮新增规则

> **真正 joint/shared final decision 的高纯证据，不是“多人参与”，而是同层节点拥有 pre-effect veto / mandatory co-approval。**

压缩公式：

```text
broad consultation
≠ joint final decision

collective conferral
≠ joint final decision

same-layer pre-effect veto
or mandatory co-approval
→ joint final decision
```

建议 L4 `x scope` 后续把以下字段视为核心：

```yaml
final_decision_structure: unilateral / joint / shared / vetoed
same_layer_pre_effect_veto: true / false
mandatory_co_approval: true / false
unilateral_effect: true / false
```

## 12｜知识成熟度与统计

- `fact_confidence: 99`
- `classification_confidence: 99`
- `authority_level: L4`
- `knowledge_status: evidence-locked`
- `may_override_canonical: false`

本轮只增加：

```text
x-scope boundary guard/control +1
independent work +1
```

不增加 ordinary positive、dynamic transition、zn、strict positive 或 strict negative。

《十二怒汉》此前不在 `x scope boundary guard` 的作品集合，因此本轮可增加一个独立作品计数。

## 13｜外部事实校准

外部资料共同确认电影中的裁决结构：法官要求最终 verdict 必须 unanimous；首轮为 11:1，8号的 dissent 在 unanimous decision rule 下真实阻断立即有罪结果。Cornell Law 对该片也明确将 dissenters 的作用与 unanimous decision rule 联系起来。

外部材料只用于锁剧情/制度事实；十元分类完全服从仓库 current canonical。
