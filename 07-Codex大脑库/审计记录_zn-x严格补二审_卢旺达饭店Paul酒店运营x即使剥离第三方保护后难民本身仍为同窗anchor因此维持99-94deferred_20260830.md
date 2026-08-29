---
type: ten-yuan-fire-axis-audit-record
authority_level: L4
knowledge_status: deferred
status: deferred-after-second-review
axis: fire
pair: zn-x
work: 卢旺达饭店
work_original: Hotel Rwanda
work_year: 2004
medium: film
character: Paul Rusesabagina
stage: 酒店转为难民庇护空间→Paul取得酒店内部运营管理→外部保护节点反复介入→家人撤离机会→Paul留守
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 94
previous_audit: 07-Codex大脑库/审计记录_zn-x严格补攻击_卢旺达饭店Paul庇护空间strict正向因个人运营x与第三方保护anchor混同降为deferred_20260830.md
previous_classification_confidence: 94
current_strict_status: deferred-not-restored-after-second-review
strict_positive_count_effect: 0
zn_status: retained-strong
paul_hotel_operations_x_status: retained-true
zn_to_x_status: retained-strong
x_to_zn_status: not-proven-at-95
third_party_anchor_confound: retained
same_window_people_anchor_competition: true
protected_group_object_exists_independently_of_operations_x: true
posthoc_principle_narrowing_risk: true
may_override_canonical: false
created: 2026-08-30
---

# 审计记录｜《卢旺达饭店》Paul strict 二审：剥离第三方保护后，难民本身仍是同窗 anchor，维持 99/94 deferred

## 1｜二审目标

上一轮已经把 Paul 从 `99/96 evidence-locked strict` 降为 `99/94 deferred`，理由是：

- Paul 的酒店内部运营 `x` 真实成立；
- 但“酒店为何能持续不被武装清空”的完整保护效果，由 Paul 运营 + Sabena/Belgian property + UN/军警 + 外部政治关系 + 贿赂谈判共同构成；
- 因而不能把完整 stable-refuge effect 全部倒灌成 Paul 个人 `x` 的 `x→zn` anchor。

本轮只处理一个问题：

> 如果把 Sabena、UN、军警等第三方保护效果剥离，只把被测 `x` 缩回 Paul 的酒店内部运营 / 房间与人员安置边界，能不能把 `x→zn` 恢复到 ≥95？

裁决：**仍不能。维持 99/94 deferred。**

---

## 2｜zn 继续保留强证据

候选原则继续独立定义为：

> **当无武装平民面临系统性屠杀，而主体现实具备保护可能时，不能仅为了最大化自身或家庭安全就主动抛弃这些人；保护责任应继续进入最终选择。**

影片中 Paul 家人获得撤离机会时，他仍选择留下，并明确表示不能离开仍在酒店中的人。

这继续说明：

```yaml
zn_status: retained-strong
```

本轮不从 `zn` 端降分。

---

## 3｜Paul 的酒店内部运营 x 继续成立

影片可观察事实包括：

- Paul 从 Sabena 总裁处取得酒店管理任命；
- 能要求员工继续工作；
- 能安排房间、宴会厅、人员与登记；
- 能删除/改写住客登记以保护酒店内人员；
- 能维持酒店内部空间和工作人员的运行。

所以窄对象层：

> **Paul 对酒店内部房间/空间、工作人员、登记与安置流程的现实运营 / 调配 `x` = true。**

这不等于产权，也不等于对外部军警的否决权。

---

## 4｜二审关键：把第三方保护剥掉以后，仍有 same-window people anchor

上一轮最大问题是把“完整安全庇护效果”过度归因给 Paul 的内部运营 `x`。

本轮尝试进一步收窄：

> 不再声称 Paul 的运营 `x` 单独让酒店免于屠杀；只问它是否给保护原则补出“具体受保护群体 / 酒店内部空间范围”的 current-layer anchor。

这条路径仍然存在一个更基础的竞争 anchor：

```text
酒店中的具体难民本人
+ 他们已经形成的现实求助 / 被保护关系
+ Paul 自己的“留 / 走、继续保护 / 抛下”选择
```

这些对象在同一个当前窗口里，并不依赖 Paul 的房间分配或员工管理 `x` 才存在。

换言之：

```text
拿掉 Paul 的酒店运营 x
≠
拿掉这些具体难民
≠
拿掉 Paul 是否愿意抛下他们的现实选择
```

因此，`zn` 的“这些人不能被主动抛弃”现实对象边界并没有因为拿掉酒店运营 `x` 就消失。

Paul 的运营 `x` 会显著提高：

- 组织密度；
- 房间/人员安置能力；
- 登记隐匿能力；
- 庇护空间内部秩序；
- 对一大群人的持续协调能力。

但这些更接近：

> **organization / execution / scaling interface**

而不是已经被证明为：

> **the current object-constituting anchor without which the protection principle loses its concrete people/object boundary**。

---

## 5｜为什么不能把 zn 再缩成“维持这个酒店庇护空间”

一种很诱人的补救是把 `zn` 改写成：

> **“既然这些人已经进入我管理的酒店，我必须维持这个酒店庇护空间。”**

这样一来，酒店运营 `x` 当然会显得构成性很强。

但这会触发仓库已经锁出的 `post_hoc_principle_narrowing / x-written-into-zn-definition` 风险：

```text
先把“我管理的酒店”写进原则定义
→ 再拿掉酒店运营 x
→ 发现原则失去酒店对象
→ 宣布 x→zn 成立
```

这不是合法的独立端点验证。

所以本轮继续坚持：

> `zn` 必须先用不引用被测 `x` 的语言独立命名。

在这一条件下，酒店运营 `x` 仍不足以把 `x→zn` 推到 ≥95。

---

## 6｜第三方保护 confound 仍然保留

即便二审新增了“难民本人是 same-window anchor”这一理由，上一轮的第三方保护 confound 仍然成立：

- Sabena 产权 / Belgian property；
- UN；
- Bizimungu / 军警；
- 外部政治联系；
- 贿赂与谈判。

这些节点直接进入“酒店会不会被清空 / 难民会不会被杀”的现实结果链。

因此当前至少有两层独立问题同时存在：

```text
A. endpoint attribution：完整保护效果不能全部归给 Paul 个人运营 x
B. same-window anchor competition：难民本人及保护关系已经直接承载 zn
```

二者任一条未解，都不足恢复 strict 95。

---

## 7｜拿掉测试

### 拿掉 zn

Paul 的酒店运营 `x` 仍存在，但会失去：

- 为什么持续开放给大量难民；
- 为什么在商业秩序崩解后继续维持非商业庇护；
- 为什么家人有撤离机会后本人仍留守。

因此：

```yaml
zn_to_x_status: retained-strong
```

### 拿掉 Paul 的酒店运营 x

保护原则仍存在；具体难民仍存在；Paul 仍可在“是否离开 / 是否继续尝试帮助这些人”的现实选择上按该原则排序。

因此当前只能够锁：

```yaml
x_to_zn_status: not-proven-at-95
```

不是 `false` 的绝对裁决，而是不能把组织/执行/放大接口等同于对象构成型 anchor。

---

## 8｜最近邻与第三因素冻结

- `x vs nx`：Sabena 授权是权限来源，不等于外部任务通道自动吞掉任内酒店运营 `x`。
- `x vs composite-anchor`：酒店运营、产权、军警保护、外交压力必须分开，不得打包。
- `zn vs role-duty`：酒店经理职责不足解释家人可撤时仍留下保护非商业难民。
- `zn vs family-interest`：家人撤离机会出现后保护行为仍继续。
- `zn vs generic-humanitarian-label`：不凭“好人/人道主义者”标签判断，只凭冲突排序。

---

## 9｜本轮结论

```yaml
fact_confidence: 99
classification_confidence: 94

zn_status: retained-strong
paul_hotel_operations_x_status: retained-true
zn_to_x_status: retained-strong
x_to_zn_status: not-proven-at-95
strict_zn_x_complement_locked: false

current_strict_status: deferred-not-restored-after-second-review
strict_positive_count_effect: 0

new_guard:
  same_window_people_anchor_competition: true
  protected_group_object_exists_independently_of_operations_x: true
  posthoc_principle_narrowing_risk: true

may_override_canonical: false
```

## 10｜本轮形成的最短规则

> **被保护者本人已经是 same-window 现实对象，不要把“组织/安置这些人”的运营 `x` 自动升级成“这些人只有靠这个 x 才成为原则对象”。**

以及：

> **operations x can scale and organize a protection principle without constituting its object anchor.**

本轮不恢复 strict positive，不增加 negative guard；Paul 继续留在 `deferred 99/94`，等待更纯的对象构成型 `x` 证据或更强的 endpoint attribution 证明。
