---
type: ten-yuan-fire-axis-research-record
authority_level: L4
knowledge_status: evidence-locked
status: active-evidence
axis: fire
pair: zn-x
sample_type: strict-precondition-guard-self-punishment-governance-credibility
work: 三国演义
character: 曹操
stage: 第十七回征张绣军行麦田→自犯踏麦军令→欲自刎→割发代首示众
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
latest_main_before_write: e7be2d59571d1b0f9a19ef310d9cfa24e950ac60
fact_confidence: 99
classification_confidence: 98
x_current: true
zn_current_for_tested_self_binding_principle: not-locked
strict_test_allowed: false
strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
strict_precondition_guard_work_increment: false
negative_guard_mechanism: self-punishment-display-explainable-by-governance-credibility-and-role-performance
may_override_canonical: false
updated: 2026-08-29
---

# 运行记录｜zn-x 伪 strict 前置护栏｜曹操割发代首：军纪 x 真实，但公开自罚可由“服众/制度威信”解释，不足独立成立 zn

## 1｜本轮问题

本轮不把曹操整个人物贴成火轴，也不把“割发代首”先验解释成守法或奸诈，只测试一个 strict 前置风险：

> 主体拥有真实纪律处分 `x`，又公开把自己置于所制定规则之下并承受象征性/现实代价时，能否直接锁“自我约束型 `zn`”，再启动 strict `zn↔x` 双向测试？

结论：不能。

当前桥段中，军纪处分 `x` 可以独立成立；但所谓“掌令者也应被自己制定的军纪同等约束”这一 `zn`，仍被“维持服众、军令可信度与治理威慑”这一第三因素强烈竞争解释。因 `zn` 未独立过 ≥95 门，strict 测试不得启动。

---

## 2｜current canonical 校准

L1 v1.6：

```text
火 = zn ↔ x
zn：保留自身成立 / 内部最终指导原则
x：对象进入现实掌握、调用与处分边界
```

`zn_准度卡_v0.1` 要求：原则必须在拿掉奖励、认可、观看、制度要求与当前利益后仍进入判断，并在冲突中完成排序、保留未来调用资格。

`x_准度卡_v0.1` 要求：对象、主体与实际权限类型都明确，不能只凭职位、头衔或一次接触。

`zn补x_补卡_v0.1` 要求 strict 先让两端各自独立成立，之后才允许做双向拿掉；共现、自罚、角色身份和治理收益均不能替代端点独立门。

---

## 3｜剧情事实

《三国演义》第十七回征张绣途中：

1. 曹操因麦熟而下军令，军中经过麦田不得践踏，违者斩首；
2. 军令对军队现实生效，军士经过麦田时有明确避踏行为；
3. 曹操坐骑受惊冲入麦田，现实发生与禁令同类的踏麦结果；
4. 曹操召行军主簿要求依法治罪，并明确提出“自制法而自犯，何以服众”的问题；
5. 曹操拔剑欲自刎，众人阻止；
6. 郭嘉以“法不加于尊”等理由劝阻其自杀；
7. 曹操最终以割发代首，并传示三军，使军队看到掌令者并未完全把自己置于规则之外。

本轮不使用“曹操奸雄”或“法治楷模”标签作端点证据。

---

## 4｜x：高纯成立

被测 `x` 只锁：

> **曹操对当前军队踏麦纪律、处罚标准和军令执行的现实处分边界。**

证据：

- 禁令由曹操直接发布；
- 处罚对象和后果明确；
- 军士现实调整行为以避免触犯；
- 曹操能够决定如何处理违令与如何向全军公布处分。

因此：

```yaml
x_current: true
x_scope: current_army_wheatfield_discipline_and_punishment
```

本轮不从“丞相/统帅”身份倒推 `x`，而从军令现实生效取证。

---

## 5｜候选 zn 必须先独立命名

若要启动 strict，候选 `zn` 不能写成“我手里的军纪 x 应约束我”，否则会把被测 `x` 偷写进原则定义。

本轮用更独立的表述：

> **主体已经公开建立并要求他人遵守的规则，不应只因规则制定者自己的身份和当前利益就被任意豁免；主体本人也应承受规则约束。**

这个命题理论上可以成为 `zn`，但本桥段现有证据不足把它锁到 ≥95。

---

## 6｜为什么 zn 不足独立过门

### 6.1 “何以服众”是明确的治理信誉变量

曹操自己的理由直接把“服众”放在决定链里。

这说明公开自罚至少同时服务：

```text
维持军令可信度
+ 维持统帅威信
+ 防止规则因统帅自我豁免而失去约束力
+ 让后续军纪继续可执行
```

这些都属于现实治理收益，不是研究者事后凭空猜出来的隐变量。

### 6.2 最终并未承受与普通军士同等的字面处罚

原军令是“践踏者斩首”；曹操最终通过特殊解释与替代性处分保留了生命与统帅位置。

这不证明他“完全没有原则”，但会削弱一个更窄命题：

> “规则制定者必须在同类违令中承受与普通对象完全相同的结果。”

如果真正原则只是“不能零成本自我豁免，必须以足以维持规则可信度的方式承担后果”，则原则定义又已经发生变化，需要独立跨情境证据，不能在本轮为通过门槛临时缩放。

### 6.3 原著本身保留策略性解释

《三国演义》叙事对这一事件带有明显“权术/诈术”解释空间。

因此存在两套竞争模型：

```text
模型 A｜内部原则
公开规则对制定者本人也有不可轻易让渡的约束资格

模型 B｜治理策略
必须做出足够可见的自我处分，避免军纪、服从与统帅信誉崩塌
```

当前文本不足以 ≥95 排除模型 B。

### 6.4 学理解释也不能把争议粗暴压成“纯骗局”

后世法理讨论指出，古代割发本身也可能具有真实羞辱/刑罚意义，因此本轮同样不能反向写成“曹操只是演戏、绝无内部原则”。

正确裁决不是 `zn=false`，而是：

```text
zn_current_for_tested_self_binding_principle = not-locked
```

---

## 7｜拿掉测试

### 拿掉服众 / 威信 / 军纪可执行性

假设：

- 没有军队观看；
- 自罚不会影响后续服从；
- 不承担任何统帅信誉损失；
- 不会破坏军令威慑；

当前桥段没有独立证据证明曹操仍会在同类冲突中坚持同一自我约束标准。

所以 `zn` 的 evidence_independence 不足 95。

### 反向加强条件

如果另一独立桥段出现：

```text
无人观看
+ 无治理收益
+ 不自罚反而更安全/更有利
+ 曹操仍让已公开规则对自己完成高代价排序
+ 后续同类冲突重复
```

则该候选 `zn` 会明显上升。

---

## 8｜strict 前置门裁决

因为 `zn` 未独立达到 ≥95：

```yaml
x: true
zn: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
```

因此本轮**不做**：

- `zn→x` strict 方向锁定；
- `x→zn` anchor-gap 锁定；
- strict positive / strict negative 计数。

这是 strict 前置护栏，不是“双向测试失败后的 negative guard”。

---

## 9｜最近邻与第三因素冻结

- `zn vs xn`：制定、广播、维持军纪属于规则运行/治理结构；不能自动说明规则已成为内部不可让渡原则。
- `zn vs z`：公开威信、服众与领导合法性属于重要竞争变量；不能由“大家因此更服他”倒推内部原则。
- `x vs zx`：曹操公开显威可有 `zx` 邻近，但本轮 `x` 只取军纪现实处分权。
- `x vs xn`：军令怎样持续运行是流程；“谁有权定罚并处分”才是本轮 `x`。
- 割发代首的戏剧强度、人格评价、后世“法治”赞誉全部冻结。

---

## 10｜与诸葛亮卤城换班的最小差异

两案表面都像“掌权者被自己的规则约束”，但时间结构不同。

### 诸葛亮

```text
魏军急攻，留四万熟兵具有明显即时利益
→ 诸葛亮先按既有换班信用决定放行
→ 军士后来才因感恩主动愿留
→ 诸葛亮第一次仍要求他们回家
→ 后续士气收益属于 post-decision payoff
```

所以目前“长期信誉/士气策略”不足完整替代其 `zn`，诸葛亮仍保留 99/95 strict positive。

### 曹操

```text
自己违反军令
→ 曹操在决定当时就明确提出“何以服众”
→ 自罚从一开始就与军纪可执行性、统帅威信绑定
→ 处分还被公开传示三军
```

因此治理信誉不是事后收益，而是**明确 pre-decision explanatory variable**。

本轮由此强化：

> **post-decision payoff ≠ pre-decision motive。**
>
> 若治理收益在决定前已经被主体明确写进理由链，不能拿“自损很大”直接替代 `zn` 独立证明。

---

## 11｜新增研究纪律

### 纪律 A｜公开自罚 ≠ zn

```text
主体拥有真实 x
+ 主体公开处罚自己
+ 主体承担可见代价
≠
内部不可轻易让渡原则自动成立
```

### 纪律 B｜治理信誉必须冻结

若自罚能被：

```text
服众
制度威慑
领导信誉
规则持续可执行
角色绩效
```

完整或高度解释，则必须先把这些第三因素冻结，再判断 `zn`。

### 纪律 C｜替代处罚不能偷换原则边界

“愿意承担某种代价”支持原则候选，但不能自动证明“愿意承受原规则完全同等后果”。原则边界必须事前独立定义，禁止为过门临时缩窄或放宽。

---

## 12｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
authority_level: L4
knowledge_status: evidence-locked

strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
strict_precondition_guard_work_increment: false
```

曹操属于《三国演义》，strict-precondition guard 集合此前已经有《三国演义》作品，因此本轮只增加 control，不增加 independent work。

按 latest main 的研究资产推算：

- 总纲/清单同步前：`4 controls / 3 works`；
- 柴进最新记录已新增一条同属《水浒传》的 guard，但尚未同步中枢；
- 本轮曹操再新增一条同属《三国演义》的 guard；
- 因此底层 evidence 资产现在应为 `6 strict-precondition controls / 3 independent works`，等待下一轮消化统一中枢。

---

## 13｜下一轮高信息增益

P0 仍优先找第二部可靠文学 strict v2 positive，但筛选必须满足：

```text
单一、天然明确的 x 对象层
+ 主体个人 x 归因清楚
+ zn 独立定义且 ≥95
+ 拿掉法律/上级命令/服众/治理绩效后仍成立
+ same window / same object layer
+ 无 posthoc composite-x bundling
+ 无第三方替代
```

若没有达到 ≥95 的材料，不降门，继续产出 strict 前置反例。
