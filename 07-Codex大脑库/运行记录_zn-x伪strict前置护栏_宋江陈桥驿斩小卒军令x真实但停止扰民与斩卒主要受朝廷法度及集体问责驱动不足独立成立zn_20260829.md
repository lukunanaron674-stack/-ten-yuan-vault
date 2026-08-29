---
type: ten-yuan-fire-axis-running-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_type: false-strict-precondition-guard
work: 水浒传
character: 宋江
stage: 第83回陈桥驿出征破辽前
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
fact_confidence: 99
classification_confidence: 98
x_current: true
zn_current_for_tested_principle: false
zn_x_cooccurrence: false
strict_test_allowed: false
strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
negative_guard_mechanism: external-law-and-collective-liability-explains-self-restraint
may_override_canonical: false
created: 2026-08-29
---

# 运行记录｜宋江陈桥驿：军令 x 真实，但“自我约束”不足独立成立 zn

## 1｜被测窗口

《水浒传》第83回，梁山受招安后奉诏破辽。宋江作为出征主将，对所属军队已经具有现实军令、调兵、处分与军纪执行能力。

本轮只测试一个高风险 strict 假阳性：

> **宋江拥有现实军令/军纪处分 `x`，又在陈桥驿因部卒杀死中书省厢官而含泪处置本部军校；这是否足以独立成立“掌军者应以军纪自我约束、不得纵兵扰民”的 `zn`，进而进入 strict `zn↔x`？**

结论：**不能。** `x` 可独立过门，但当前所谓 `zn` 仍可被朝廷法度、招安身份、违令问责与全军集体风险充分解释，strict 前置门因此不通过。

---

## 2｜剧情事实

第83回关键事实链：

1. 宋江受诏为破辽先锋，真实统领梁山军马出征；
2. 出发前宋江传令诸军，沿途不得扰动乡民；
3. 中书省厢官克减御赐酒肉，军校受辱后杀死厢官；
4. 项充、李衮飞报宋江；
5. 吴用明确指出此事会给省院借题陷害梁山的机会，建议先斩本犯、申复省院、勒兵听罪，并让戴宗、燕青入城请宿太尉预先奏知；
6. 宋江亲自审问军校，明确强调被杀者是朝廷命官，并担忧此事“连累我等众人”，因为梁山刚受招安、尚未立功；
7. 军校伏罪后，宋江令其先饮酒，再缢死、斩首号令，并申呈省院；
8. 皇帝随后以“既斩正犯”为由暂记宋江禁治不严之罪，并催军出征；
9. 此后军队沿途秋毫无犯。

因此“宋江有军纪处分能力”是事实；但“为什么必须如此处分”的因果链，同时高度包含外部法度与现实问责压力。

---

## 3｜x 证据：成立

被测 `x`：

> **宋江对当前所属梁山出征军队的军令、行军纪律与违纪处分边界。**

可观察证据：

- 能直接传令“毋得动扰乡民”；
- 能调动、编排、推进军队；
- 能审问违纪军校；
- 能决定缢死、斩首、号令全军；
- 处分决定直接进入现实执行，无需每一处分动作都另向上级申请。

所以 current narrow layer：

```text
x_current = true
```

这不是靠“先锋”头衔判 `x`，而是靠真实军令与处分因果链。

---

## 4｜候选 zn：不过独立门

表面候选原则可以写成：

> **掌军者即使面对部下受辱，也不能放任己军破坏军纪、扰民或杀害朝廷体系中的非敌对对象；自己的军权也必须受纪律约束。**

这个表述看起来很接近“自我约束型 zn + 军纪 x”，容易被误判成 strict 候选。

但 current `zn` 需要拿掉奖励、认可、制度要求、惩罚与当前利益后，原则仍能独立进入判断、参与冲突排序并保有未来调用资格。

本例做不到这一点。

### 4.1 外部制度压力并非背景噪音，而是当前因果主干

文本明确出现：

- 被杀者是“朝廷命官”；
- 梁山“方始奉诏”，尚未立功；
- 宋江担忧“连累我等众人”；
- 吴用明确提出必须先斩本犯、申复省院、勒兵听罪，并通过宿太尉预先防止省院借题陷害；
- 皇帝随后按“正犯已斩”处理，并仍记宋江“禁治不严”。

也就是说，现实选择可以由：

```text
朝廷法度
+
招安后的官方军籍位置
+
省院现实追责风险
+
全军集体受牵连风险
+
当前征辽政治任务
```

完整解释。

### 4.2 拿掉外因后，原则独立性不足

如果冻结：

- 朝廷命官身份；
- 省院追责；
- 新招安身份；
- 对梁山全体被重新定罪的风险；
- 征辽任务的政治信用；

当前文本不足 ≥95% 证明宋江仍会在同型冲突里按同一个“军权必须自我受限”原则作出相同处分。

因此：

```text
zn_current_for_tested_principle = false
```

更准确说，是**不足独立过 current canonical 的 zn 门**，不是判定宋江整体没有任何 zn。

---

## 5｜strict 前置测试

strict 只有在：

```text
zn independently true
+
x independently true
+
same current window
+
same object layer
```

以后才允许启动双向缺口。

本例：

```text
x = true
zn = not independently locked
```

所以：

```text
zn+x co-occurrence = false
strict_test_allowed = false
```

本轮不进入 `zn→x / x→zn` 双向缺口，不计 strict negative guard；只计 **strict-precondition guard**。

---

## 6｜拿掉测试

### 拿掉 x

如果宋江根本没有对该军队的现实军纪处分权，本案的具体处刑与号令当然无法发生；这只证明 `x` 是现实处分接口，不能反向证明候选 `zn` 独立成立。

### 拿掉外部法度 / 问责

如果被杀者不是朝廷命官、没有省院追责、没有刚招安后的集体政治风险，当前材料不足证明宋江仍会以同一理由作同等处分。

所以候选 `zn` 仍被第三因素替代解释。

---

## 7｜反向测试

若未来找到同一人物或独立作品中的更干净窗口：

```text
主体已有真实军队处分 x
+
没有上位命令要求自限
+
没有现实处罚 / 连坐 / 身份收益压力
+
放宽纪律对主体短期更有利
+
主体仍主动以同一原则限制自己的处分权
+
后续独立场景仍复现
```

才可把“军权自我受限”提高到高纯 `zn`，再讨论 strict。

---

## 8｜最近邻排除

- **zn vs z**：招安后的“忠臣/官军”身份与朝廷认可不能替代内部原则。
- **zn vs nx**：奉诏征辽、受朝廷军令属于外部任务来源，不是内部原则本身。
- **zn vs xn**：吴用设计“斩犯—申报—找宿太尉”的保全流程解释怎么处理危机，不解释为什么原则本身独立成立。
- **x vs 名义职位**：`x` 由真实军令、处分、调兵证据成立，不靠“先锋”称号。
- **strict vs 自我约束表象**：主体确实在限制自己军队，但限制来源仍可能主要在外部制度；行为表象不能越过 `zn` 独立门。

---

## 9｜第三因素冻结

必须冻结：

- 朝廷官军身份；
- 中书省追责；
- 皇帝是否赦罪；
- 吴用危机处理策略；
- 征辽是否成功；
- 后世“忠义宋江”评价。

冻结后，剩余证据不足让候选 `zn` 达到 ≥95%。

---

## 10｜本轮新增纪律

新增一条 strict 前置护栏：

> **主体拥有真实 `x`，并表现出“限制自己如何使用 x”，也不能自动成立自我约束型 `zn`。先检查限制是否主要由外部法度、上位命令、惩罚、连坐、身份收益或即时保全策略解释。**

简式：

```text
self-restraint-looking use of x
≠
independent zn
```

这与既有探春、晁盖审计互补：

- 探春提示旧例 / 职责 / 效率可替代部分 `zn`；
- 晁盖提示组织共同治理可替代个人 `x`；
- 本例提示**外部法度 / 集体问责可以替代“自我约束原则”解释**。

---

## 11｜结论与计数

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

x_current: true
zn_current_for_tested_principle: false
zn_x_cooccurrence: false
strict_test_allowed: false

strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
cross_work_increment: false
```

该案例不改变 current canonical，不修改 L1、zn/x 信息卡、准度卡或 `zn补x_补卡`。

下一轮 P0 若继续搜 strict 正向，应优先排除这一类“看起来很自律，实际外部制度已经足以解释”的样本。
