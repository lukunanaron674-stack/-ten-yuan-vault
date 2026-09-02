---
type: zn-x-fire-axis-boundary-pressure-run
authority_level: L4
knowledge_status: evidence-locked
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate: current-x-scope-distinction-v1_20260830
work: Harry Potter and the Deathly Hallows
character: Harry Potter
stage: immediately before and after seventeenth birthday / Trace expiry
sample_type: x-scope-dynamic-expansion-term-trigger
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_positive_increment: false
strict_negative_increment: false
strict_deferred_increment: false
strict_precondition_increment: false
protected_range_increment: false
---

# zn↔x 火轴边界压力测试｜Harry Potter and the Deathly Hallows｜法定年龄阈值可使同一 use-permission scope 现实扩张

## 0｜启动与 current 对齐

写前以 `main@18c8aad34971bb07077f17d1b2728a74e2261e78` 为 HEAD。已读取 L0 `AGENTS.md`、文件权力与任务总览、十元关系 L1 门禁、L1 十元—五行正本 v1.6、zn/x 信息卡与准度卡检索结果、火轴待审议清单、火轴研究总纲、strict-v2 current、x-scope current 与最近 commits。仓库 current canonical 高于本记录；木轴 `zx↔nx` 仅迁移验证方法，不迁移理论结论。

待审议清单当前记录 dynamic `23/21`、boundary `22/19`、decision calibration `5`，但其内容尚未吸收其后已提交的 The Terminal boundary、Evangelion Episode 19 dynamic restoration 与 The Martian decision calibration。按同 criterion_version 与已提交记录叠加，写前 effective x-scope dynamic 为 `24 controls / 21 works`；本轮若成立应为 `25 / 22`。

## 1｜事实链

官方 Harry Potter 资料明确：未满 17 岁的巫师通常不得在 Hogwarts 校外施法；用于监管未成年施法的 Trace 会在巫师满 17 岁时自动失效。

《Deathly Hallows》第七章给出同一人物的紧邻 reality-test：Harry 意识到自己刚满 17 岁后，立即用魔杖施法召来眼镜，并继续在房间内自由施法；文本把这一行为直接与 Trace 的解除联系起来。

因此本轮只测同一人物、同一施法 use-permission family 在年龄阈值前后的 current scope，不把“魔法能力强弱”“成年身份”“英雄角色”倒推为 x。

公开来源：
- https://www.harrypotter.com/features/some-rules-about-magic-its-important-to-bear-in-mind
- https://www.harrypotter.com/features/differences-between-muggle-and-wizarding-world-law
- Harry Potter and the Deathly Hallows, Chapter 7；公开检索版本可见 Harry 满 17 岁后立即 `Accio` 眼镜并连续施法。

## 2｜x 固定拆分

```yaml
actor: Harry Potter
object: Harry's own wand-mediated spell use
object_layer: legal/current use-permission for spellcasting outside Hogwarts
permission_type:
  possess_wand: not_the_tested_permission
  technical_capacity_to_cast: not_the_tested_permission
  use_magic_inside_school: available_before_age_17_under_school_rules
  use_magic_outside_school_without_underage-prohibition: false_before_17__true_after_17
scope:
  before: school-bounded_or_exception-limited
  after: adult outside-school use no longer barred by underage-sorcery rule
term:
  before: until seventeenth birthday
  after: adult legal-age window
revocability:
  age_based_underage_restriction: expires_at_17
return_obligation: none_material
same-layer_pre-effect_veto:
  before: Ministry underage-sorcery enforcement / Trace-backed legal restriction
  after: this_specific_underage_gate_removed
global_override:
  other wizarding laws remain; adulthood does not create unlimited magic permission
ultimate_title:
  wand ownership and magical ability are separate from tested legal use scope
decision_structure:
  individual spell choice after applicable law gate
consultation_structure: none_material
final_decision_structure:
  individual for ordinary spell use subject to remaining law
execution_structure:
  Harry personally casts spells
co-decision_nodes: none_on_tested_ordinary-use-layer
scope_transition:
  school-limited_or_exception-limited -> adult_outside-school_scope
trigger:
  seventeenth_birthday + Trace expiry
reality_test_after_transition:
  immediate successful spellcasting after turning seventeen
```

## 3｜关键压力

错误推理一：

```text
Harry 一直会魔法
→ x 一直完全相同
```

不成立。technical capability 与 current permission scope 必须分账。未满 17 岁时“会施法”并不等于拥有相同的校外合法 use scope。

错误推理二：

```text
Harry 满 17 岁
→ 因为身份变成成年人，所以自动推 x
```

也不成立。本轮不是从“成年人”标签倒推，而是有明确制度触发：underage restriction / Trace 到龄失效，并且 transition 后 Harry 立即在校外现实施法完成 same-layer reality-test。

因此锁：

> **technical capability retained across stages ≠ permission scope unchanged across stages。明确 term/age gate 可以在能力不变时使 current use-x 发生现实扩张。**

更窄地写：

```text
same actor
+ same object
+ same use-permission family
+ technical capability exists before and after
+ explicit age/term gate expires
+ after-stage reality-test succeeds
→ current permission scope can expand without a capability delta
```

## 4｜最近邻与最小差异

### 对 King Lear
King Lear 锁的是 host-side gate 使同一 hosted-retinue permission ceiling `100 -> 50 -> 25 -> 0`，即 quantitative contraction。

Harry 本轮不是数量上限，而是 **term-triggered spatial/legal scope expansion**：年龄期限届满，原先校外受限的同一 use permission 扩张，并立即 reality-test。

因此不是 King Lear 的反向数量镜像，不能伪称已经补齐 `low quantitative cap -> high quantitative cap`；它只补齐“permission scope 可以由明确 term trigger 向外扩张”的独立机制。真正 quantitative cap expansion 仍是高价值缺口。

### 对 Evangelion 18/19
Evangelion 是 execution routing 在 human actor 与 automated substitute node 之间 OFF/ON 迁移；Harry 没有替代执行节点，变化的是 permission boundary，不是 execution attribution。

### 对技术能力变化护栏
本轮反而进一步证明 capability 与 permission 可反向解耦：Harry 的基础施法能力跨节点持续存在，变化的是法律/监管 permission scope。

## 5｜拿掉 / 反向 / 第三因素冻结

### 拿掉测试
拿掉“满 17 岁/Trace expiry”节点，校外普通施法仍处于未成年限制之下；因此本轮 scope expansion 不能由“他本来就会魔法”解释。

### 反向测试
若只看到 Trace 消失而没有之后现实施法，则最多是制度状态变化候选；本轮有生日后立即成功施法，因此 transition 完成 reality-test。

### 第三因素冻结
- magical ability：解释能不能施法，不解释校外 current legal permission scope；
- wand possession：解释接口在手，不解释 underage gate；
- Hogwarts student identity：不是 transition 原因；
- adult identity label：不作为分类证据，只把明确年龄法律节点作为 trigger；
- Ministry / Statute of Secrecy 其他规则：仍可能限制具体施法，故 after-scope 不能写成 unlimited/global x。

## 6｜zn 与 strict-v2

本轮不锁 Harry 的 zn，也不从“反抗 Voldemort / 勇敢 / 成年”倒推 zn。

即使另行找到稳定 zn，本轮被测 spell-use x 仍有学习、防卫、交通、生活工具等大量 independent purpose anchors，因此没有理由把它伪装成 strict-v2 `zn→x` 正例。

```yaml
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
```

strict-v2 verified positive 继续保持 `0 / 0 works`。

## 7｜成熟度与统计

```yaml
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
```

写前 effective dynamic ledger（按待审议清单 + 已提交未同步记录校正）：

```text
24 controls / 21 independent works
```

Harry Potter 此前未进入 current dynamic-work 集合，本轮：

```text
x-scope dynamic
24 / 21
→
25 controls / 22 independent works
```

其余：

```yaml
ordinary_x_scope_positive: +0
x_scope_boundary: +0
x_scope_decision_calibration: +0
protected_range: +0
strict_all: +0
```

## 8｜本轮结论

锁定新动态机制：

> **term/age-triggered permission expansion**：同一人物、同一对象、同一 use-permission family，即使技术能力前后不变，明确期限门到期仍可使 current permission scope 从受限范围扩张；必须在扩张后做 same-layer reality-test，不能只凭“成年”“毕业”“解禁”等名义状态自动判 x。

本轮不修改 L1/L2 canonical，不把数量型 permission-cap expansion 缺口伪装成已经完成。

## 9｜下一轮最高信息增益

1. P0：继续寻找首个 ≥95 strict-v2 verified positive，不降门。
2. 若仍无，优先真正的 **quantitative permission-cap expansion mirror**：same actor/object/permission family，low cap 已 reality-tested，明确 gate 解除后 higher cap 也 reality-tested。
3. 次选 path-exhaustion dynamic：多个 independent paths 逐一关闭，surviving path count 归零后同一 target-effect reality-test OFF。
