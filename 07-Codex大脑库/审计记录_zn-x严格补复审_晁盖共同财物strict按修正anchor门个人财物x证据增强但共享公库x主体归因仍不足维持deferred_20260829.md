---
type: ten-yuan-fire-axis-strict-rereview
authority_level: L4
knowledge_status: deferred
status: deferred-after-corrected-gate-rereview
axis: fire
pair: zn-x
work: 水浒传
character: 晁盖
stage: 第14回既有仗义疏财→第20回接掌梁山后以自家庄财/生辰纲赏众→共同财物入库与分配
sample_type: strict-positive-rereview-after-canonical-gate-correction
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  corrected_gate: current-layer-specific-anchor-gap-v2_20260829
  retained_gates:
    - zn-definition-independent-of-tested-x-v1_20260829
    - same-current-window-v1
    - same-object-layer-v1
    - subject-specific-x-attribution-v1
    - third-factor-freeze-v1
rereviews:
  - 07-Codex大脑库/运行记录_zn-x严格补正向_晁盖接掌梁山共同财物不得私占原则zn与公库分配处分x双向缺口第三文学作品strict控制_20260829.md
  - 07-Codex大脑库/审计记录_zn-x严格补攻击_晁盖共同财物处分strict正向因个人x归因与zn独立性不足降为deferred_20260829.md
  - 07-Codex大脑库/审计记录_zn-x严格补门禁冲突_辛德勒canonical正例显示不可替代现实落点强门超出L2正本_20260829.md
  - 07-Codex大脑库/审计记录_zn-x严格补门禁冲突_V字仇杀队canonical正例再次显示无等价载体强门超出L2正本_20260829.md
supersedes_as_current_research_judgment: true
old_demotion_retained_as_audit_history: true
fact_confidence: 99
classification_confidence: 93
strict_positive_status: deferred-not-restored
strict_positive_count_effect: 0
personal_property_x_status: evidence-locked
shared_treasury_x_attribution_to_chao_gai: below-95
zn_endpoint_status: plausible-strong-but-below-95-for-tested-strict-principle
zn_to_x_status: plausible
x_to_zn_status: not-legally-testable-at-95-because-tested-x-subject-attribution-is-not-locked
may_override_canonical: false
created: 2026-08-29
---

# strict zn↔x 复审｜晁盖共同财物：修正 anchor 门后仍不足恢复 95

## 1｜本轮结论

本轮不是重新寻找第四个 strict 正例，而是按已经由两个 L2 canonical 正例校准后的 `current-layer-specific-anchor-gap-v2`，重新复审晁盖。

旧攻击把晁盖从 `99/95 evidence-locked` 降为 `99/93 deferred`，其中包含两类问题：

1. `x→zn` 是否被“宇宙唯一不可替代载体”门过度收紧；
2. 被测共同财物 / 公库 `x` 是否真的能高纯归到晁盖本人，以及对应 `zn` 是否独立成立。

第一类门已经被《辛德勒的名单》《V字仇杀队》证明过严，所以本轮撤销。

但第二类问题仍然存在，而且本轮进一步拆清：

> **晁盖本人对“自家庄财、自己可处分的财物”确实有高纯个人 `x`；但这不能跨对象层替“众头领共同决定的公库 / 共同财物处分”补成晁盖个人 `x`。**

因此当前判断维持：

```text
事实 99
分类 93
L4 deferred
strict zn↔x = 未恢复
```

---

## 2｜先修正旧审计的一处过宽表述：晁盖并非“个人 x 证据很弱”

第14回对晁盖的长期行为描述已经明确：

- 本乡富户；
- 平生仗义疏财；
- 投奔者可以住在庄上；
- 离开时又以银两资助。

第20回接掌梁山后，文本又明确出现：

- 取出生辰纲金珠宝贝；
- 连同**自家庄上过活的金银财帛**；
- 当厅赏赐众小头目、众多喽啰。

这一段的当前安全判断是：

```yaml
晁盖自家庄财的现实占有/处分 x: true
晁盖把自己可处分财物用于赏众: true
```

所以旧审计不能泛化成：

> “晁盖本人没有个人财物处分 x。”

这点应正式修正。

---

## 3｜但个人财物 x 不能替共享公库 x 补票

原 strict 正向真正测试的是更窄、更难的一项：

> **晁盖对梁山共同所得 / 公库财物的入库、保留、比例分配是否拥有主体本人可直接归因的现实处分 `x`。**

关键文本写到新劫财物时，最近显式主语是：

> “众头领看了……便叫掌库的小头目……”

现有文本没有高纯出现：

```text
晁盖个人提出分配比例
→ 其他头领存在不同决定或未决
→ 晁盖本人完成最终裁决
→ 掌库节点因晁盖个人决定而执行
```

因此应当严格拆对象：

```text
对象 A｜晁盖自家庄财 / 明确个人可处分财物
→ 晁盖个人 x = true

对象 B｜梁山共同所得 / 公库比例分配
→ 梁山头领集团 / 山寨治理结构 x = true
→ 晁盖个人最终处分 x = 仍不足 95
```

### 拿掉测试

拿掉“晁盖个人拥有共同财物最终比例处分权”假设，只保留：

```text
众头领共同治理
+ 掌库节点执行
+ 梁山需要公共库存与成员分配
```

仍能解释本次“一半入库、其余分配”的结果。

所以：

> **个人财物 x 真实存在，并不能消灭共同治理这个第三因素。**

这也是本轮最重要的方法升级：

> **同一人物在相邻窗口拥有高纯个人 x，不等于可以把另一对象层的共享 x 洗成个人 x。**

---

## 4｜zn 重新拆成两个候选，不能混算

晁盖这里至少存在两个不同强度的 `zn` 候选。

### 候选 P1｜长期仗义疏财 / 对投奔者给予现实扶助

第14回长期描述与第20回拿出自家庄财赏众，使这一候选明显比旧审计中“只看公库分配”时更强：

> **对来投奔、共同承担风险的伙伴，不能只保留口头关系，应愿意承担真实个人物质成本给予扶助。**

这个候选：

```yaml
zn_candidate_strength: strong
cross-stage_repetition: present
real_personal_cost: present
```

但它对应的主要现实对象是：

- 自己的庄财；
- 对投奔者的资助；
- 初始赏众。

它并不能自动证明更窄的 P2。

### 候选 P2｜共同所得不得被寨主私占，应公共入库 / 共同分配

这是原 strict 正向使用的原则。

当前仍存在第三因素：

- 山寨公共库存需求；
- 众头领共同治理；
- 新集团成员共同利益；
- 寨主合法性与组织可持续性。

文本还缺一个 ≥95 的冲突窗口：

```text
晁盖本人可以明确多占 / 私占
+
组织制度并不强制公共化
+
成员压力不足以解释
+
晁盖仍以同一内部原则主动放弃私占
```

因此：

```yaml
P1_仗义疏财_zn: strong
P2_共同所得不得寨主私占_zn: contested_below_95
```

不能把 P1 的高纯证据跨原则倒灌给 P2。

---

## 5｜为什么不能把测试对象改成“自家庄财 × 仗义疏财”就直接恢复 strict

这个替代配对确实比原公库对象更干净：

```text
zn：对投奔/共同冒险者应给予现实扶助，并愿承担个人物质成本
x：晁盖自己真实掌握的庄财 / 财物
```

`zn→x` 很可能成立：

> 原则决定个人财富为何从私人保留转为扶助、赏众。

但 `x→zn` 目前仍不足 95。

拿掉当前这批金银后，原则仍可能通过：

- 提供住处；
- 提供保护；
- 提供食宿；
- 以后新的个人资源；
- 其他现实扶助方式

继续获得当前层现实落点。

修正后的 canonical 门并不要求“宇宙无替代”，但仍要求：

> **拿掉被测 x 后，当前对象层重新出现明确、非仅效率下降的现实 anchor gap。**

目前“这批个人金银”更像高价值现实载体，而不是已经 95% 证明为当前不可缺的具体 anchor。

所以本轮不另造一个新的 95 strict，只登记为：

```yaml
alternate_personal-property_strict_candidate: below-95
```

---

## 6｜strict 启动门的进一步修正

本轮新增两条 L4 方法纪律。

### 6.1｜subject-specific x 不能跨对象层借用

```text
人物在对象 A 有真实个人 x
≠
人物在对象 B 的共享治理 x 自动变成个人 x
```

尤其在组织财产、公共账户、联合军队、共同关系中：

> **必须证明被测主体自己的决定能够在同一对象层直接改变结果。**

### 6.2｜高纯 zn 不能跨原则借用

```text
P1 有强证据
≠
相邻但更窄的 P2 自动同样高纯
```

“仗义疏财”与“共同所得不得寨主私占”相关，但不是同一个命题。

---

## 7｜与诸葛亮、探春当前状态的区别

当前 L4 最新审计应分开读取：

```text
诸葛亮｜99/95 evidence-locked
→ 修正 x→zn 过严门后恢复

探春｜99/94 deferred
→ x 已锁，x→zn 在修正门下可支持
→ 主要卡 zn 独立性 / 原则同一性

晁盖｜99/93 deferred
→ 原共同财物 strict 主要卡 subject-specific x 归因
→ 同时 P2 zn 仍有组织治理第三因素
```

所以晁盖不能因为诸葛亮恢复而自动恢复。

---

## 8｜当前成熟度

```yaml
fact_confidence: 99
classification_confidence: 93
knowledge_status: deferred
strict_positive_status: deferred-not-restored
strict_positive_count_effect: 0

personal_property_x: true
shared_treasury_x_attributable_to_chao_gai: below-95
P1_generosity_zn: strong
P2_common-property-nonprivatization_zn: below-95
alternate_personal-property_strict_candidate: below-95
```

不修改 L1、zn/x 准度卡或 L2 `zn补x_补卡`。

---

## 9｜下一步最高信息增益

不再继续从第20回同一段里榨第四种解释。

下一轮 P0 优先寻找第二部文学 strict 正向，但筛选门应进一步收窄到：

```text
主体个人 x 归因明确
+
zn 无需借用组织规范 / 外部规则才能成立
+
同窗同对象层
+
拿掉 x 后出现 current-layer anchor gap
+
第三方 / 共同治理不能替代
```

如果暂时找不到，优先从《西游记》寻找“主体自己真实掌握的关系/资源处分 x，被一个先于当前组织规范成立的内部 zn 自我约束”的最小桥段。
