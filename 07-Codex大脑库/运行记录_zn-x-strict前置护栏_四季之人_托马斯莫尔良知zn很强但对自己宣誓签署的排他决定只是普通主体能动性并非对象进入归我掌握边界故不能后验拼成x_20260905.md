---
type: ten-yuan-fire-axis-boundary-test
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
focus: strict-v2 / precondition-guard / ordinary-self-agency-not-x
criterion_version: current-layer-specific-anchor-gap-v2_20260829
x_scope_criterion: current-x-scope-distinction-v1_20260830
work: A Man for All Seasons (1966)
character: Thomas More
fact_confidence: 99
classification_confidence: 98
strict_v2_verified_positive: false
strict_precondition_guard: true
counter_increment: true
work_increment: true
created: 2026-09-05
---

# zn↔x 火轴 strict-v2 前置护栏｜《四季之人》托马斯·莫尔｜良知原则成立，但“我只能决定自己是否宣誓”不是 x

## 0｜启动与 current 对齐

本轮以写前 `main@f294f2b367a1a99396eccb415213e2de88d8169e` 为准。已按 L0/L1 启动纪律重读文件权力门禁、L1 十元—五行正本 v1.6、zn/x current 信息卡与准度卡、`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current、x-scope / protected-range current 与最近 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

current 火轴已经有 strict-v2 首个 verified positive `Defiance / Tuvia Bielski`，所以本轮不再做“破零”，而是选取不同题材、不同对象机制做 adversarial replication。

## 1｜候选与 current window

作品：`A Man for All Seasons (1966)`。
主体：Thomas More。

锁定窗口：新誓言文本明确要求承认 Henry VIII 的教会最高权后，More 拒绝宣誓，并在监禁、家人劝说、审讯与死刑风险下持续不改；审判前又持续以沉默避免主动表达违背良知的立场。

事实来源：
- https://en.wikipedia.org/wiki/A_Man_for_All_Seasons_(1966_film)
- https://www.imdb.com/title/tt0060665/plotsummary/
- https://www.sparknotes.com/lit/amanforallseasons/summary/

这些来源一致支持：More 并非拒绝一切誓言；他先检查誓言内容，发现其要求承认 King 为 Church 最高首脑后拒绝，并承担监禁与最终处死风险。

## 2｜zn 独立过门

先不用被测 x 命名 zn：

> **不能以宣誓或公开认可的方式，把自己认为违背良知与宗教—法律秩序的命题说成正确；即使服从可以换来自由、安全、职位或家人团聚，这条边界仍进入最终选择。**

该原则符合 current zn：

- 命题明确，不是抽象“做个好人”；
- 拿掉职位、国王认可、现实利益，仍持续成立；
- 家人劝说、监禁、财产损失和死刑风险都没有自动改写其排序；
- More 不是条件反射地拒绝，他先判断誓言具体内容，说明原则有适用边界；
- 该原则跨多个阶段持续进入未来判断。

判定：`zn_current = true`，置信度 `99/98`。

## 3｜最诱人的 x 候选

最容易后验拼出的候选是：

```yaml
actor: Thomas More
candidate_object: 自己的 oath / signature / explicit assent
candidate_permission_type:
  - swear
  - refuse_to_swear
  - sign
  - withhold_signature
candidate_scope: 自己当前被要求作出的宣誓/明示认可
term: oath-demand → imprisonment / trial window
same_layer_pre_effect_veto: Crown 可惩罚拒绝，但不能替 More 真实完成其个人宣誓
ultimate_title: n/a
final_decision_structure: actor-exclusive over own assent
execution_structure: actor personally speaks/signs or withholds
```

表面看，它很像“这个决定只归 More 自己”。但 current x 不是“凡是别人不能替我做的事都归我掌握”。x 要求有自然可识别的对象、资源、权限或关系进入“归我 / 我方掌握”的边界，并有占有、使用、调配、调用、处分、否决或排除意义上的实际权限。

## 4｜关键最小差异：排他作者资格 ≠ x

More 对自己是否宣誓具有排他决定性，首先来自普通主体能动性与言语/签署的作者资格：

```text
只有本人能真实作出“我的宣誓 / 我的认可”
≠
一个外部对象、资源、权限或关系被纳入“归我掌握”的 x 边界
```

如果把“只有我能决定自己的签名、说话、同意、拒绝”本身直接判成 x，那么几乎所有自主行为都会被自动灌成 x：

- 我决定是否说一句话；
- 我决定是否点头；
- 我决定是否签名；
- 我决定是否答应；
- 我决定是否沉默。

这会把 `ordinary agency / authorship` 错当成“归我掌握”，使 x 失去对象边界与现实权限的区分力。

因此本轮新增护栏：

> **subject-exclusive authorship / ordinary self-agency ≠ x。**
>
> 只有当“签署/宣誓/同意”背后还存在一个独立、自然可识别的对象或权限边界，主体能现实调配、处分、否决或排除该对象时，才继续检查 x；不能把“这是我的行为，所以我能决定做不做”后验复合成 x。

## 5｜为什么 legal silence 也不能救成 strict x

More 还利用法律上的沉默规则保护自己，但这也不能直接补成 x：

- 这是法律制度提供的程序接口，不是 More 对某对象的归属/处分边界；
- 该接口本身有独立法律用途，不由他的 zn 创建；
- 后续 Rich 的伪证与法院裁决也证明，沉默只是当前防御路径，不是 More 对最终案件结果的稳定 disposition x。

所以不能把 `ordinary self-agency + legal silence interface` 拼成 posthoc composite-x。

## 6｜拿掉 / 反向 / 第三因素冻结

### 拿掉 zn

若拿掉良知原则，More 当然仍保有“自己决定是否说话/签字”的普通能动性。这不产生 x 的用途缺口，只说明人仍是自己行为的作者。

因此这里不是 `zn → x` 失败，而是更前一层：**被测 x 根本没有独立过 current canonical。**

### 反向

拿掉“自己行为只能由自己完成”的普通能动性，会直接破坏人物作为行动主体的基本设定，而不是拿掉一个可识别的 x 对象边界。因此这种反向测试没有十元区分价值，不能拿来证明 `x → zn`。

### 第三因素

已冻结：

- 国王的惩罚与职位压力；
- 家庭劝说；
- 宗教身份标签本身；
- 法律沉默规则；
- 结局中的殉难与公开声望。

这些都不能替代 zn，也不能把普通能动性升级为 x。

## 7｜strict-v2 / x-scope / protected-range 判定

```yaml
same_current_window: pass
same_object_layer: candidate_only
zn_independent: pass
x_independent: fail
posthoc_composite_x: rejected
third_factor_freeze: pass
zn_to_x: not_reached
x_to_zn: not_reached
strict_v2: precondition-fail
x_scope_dynamic: no_count
protected_range: no_count
```

本案不进入 strict negative guard，因为它没有到“双向关系已可测试但失败”的阶段；它应进入 `strict_precondition_guard`。

## 8｜统计变化

按 current criterion、不同作品、真实新护栏计：

```text
strict-v2 verified positive: 1 / 1 work → 不变
strict-v2 deferred: 不变
strict-v2 negative guards: 不变
strict precondition guards: 20 / 9 works → 21 / 10 works
x-scope: 不变
protected-range: 不变
```

本作品此前未进入 strict-precondition work ledger，因此 `+1 control / +1 independent work`。

## 9｜本轮新增信息

与已有“职位/投票有独立制度用途”“实体载体有功能等价 anchor”“一次执行接口不是对象 anchor”等护栏不同，本轮补的是更上游的对象资格门：

```text
我能决定自己的行为
≠
该行为本身成为归我掌握的 x 对象

排他作者资格
≠
归属/调配/处分边界
```

这能提前拦截一整类高诱惑伪对子：良知原则 + 自己的签名、宣誓、沉默、同意、拒绝。

## 10｜下一缺口

P0 仍需要第二份跨作品、跨对象机制的 strict-v2 verified positive；下一候选必须让 x 自身先通过自然对象/权限边界，不得再用普通主体能动性充当 x。若连续找不到 ≥95 的跨机制正向，应按 current registry 转 P1 的完整 path-set exhaustion dynamic。