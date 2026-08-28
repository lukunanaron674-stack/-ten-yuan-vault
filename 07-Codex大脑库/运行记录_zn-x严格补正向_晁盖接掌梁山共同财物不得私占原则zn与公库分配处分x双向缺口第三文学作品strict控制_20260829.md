---
type: ten-yuan-fire-axis-evidence-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 水浒传
character: 晁盖
stage: 第20回接掌梁山后以自家财物与生辰纲赏众；黄安之战后赏劳；客商财物入库并分配
sample_type: strict-zn-x-positive-control
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
governance: L1-L6文件权力与知识成熟度双轴协议_v2.0_20260827
fact_confidence: 99
classification_confidence: 95
strict_positive_control_index: 3
strict_positive_cross_work_index: 3
same_current_window: true
same_object_layer: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: true
strict_zn_x_complement_locked: true
may_override_canonical: false
created: 2026-08-29
---

# zn ↔ x 严格补正向｜晁盖：共同财物不得首领私占的原则与梁山公库/分配处分形成双向缺口

## 1｜本轮问题

当前 strict 已有两份文学正向：诸葛亮卤城换班、探春理家公私分账。本轮只测试《水浒传》能否出现第三种、且不是事后人工缩窄的同型结构。

被测对象层严格限定为：

> **晁盖作为梁山寨主，对已经进入其现实处分范围的共同所得、战利品、公库财物，是否形成“不得由首领据为私产，应保留公共储备并向共同参与者分配”的内部原则 `zn`，以及这项现实财物处分 `x` 是否反过来构成该原则不可替代的 current 对象边界。**

不测试此前已锁过的“不伤无关者”原则；那个原则已有 strict 负控制，本轮是不同原则、不同对象层。

## 2｜剧情事实

第20回晁盖接掌梁山后，不只使用生辰纲所得，还把自己庄上的金银财帛一并取出，当厅赏赐小头目与众喽啰。

黄安之战后，梁山夺得金银、段匹、马匹等物，晁盖继续按战果赏劳小喽啰。

随后劫得客商二十余车财物，晁盖先确认没有伤人，再把财物公开拆分：

- 每样一半入库，听候山寨支用；
- 另一半再分为两份；
- 一份由厅上十一位头领均分；
- 一份由山上山下众人均分。

随后晁盖还明确把当前富贵安乐归因于众弟兄共同才能，而不是归因于寨主个人。

因此，同一寨主窗口内至少出现三组独立财物对象：自家财物/生辰纲、军事战获、客商财物；处理方向稳定指向公共储备与共同分配，而不是首领私人占有。

## 3｜x 独立成立

被测 `x` 不是“晁盖有寨主称号”，而是：

- 可决定财物是否进入公库；
- 可决定公库与当场分配比例；
- 可决定哪些成员/层级进入分配；
- 掌库节点按其决定执行；
- 财物处理结果直接改变现实库存与成员所得。

所以当前共同财物 / 公库分配处分 `x=true`。

## 4｜zn 独立成立

窄原则不是泛泛“晁盖仗义”，而是：

> **进入自己寨主处分范围、由共同冒险与共同战果形成的财物，不应因为自己坐主位就私有化；首领应把它处理为共同储备和共同成员可分配的公共所得。**

支持它通过 `zn` 硬门的证据：

1. 原则对象明确：共同所得 / 当前寨主可处分财物；
2. 无外部奖赏才执行；
3. 晁盖连自己庄上的财物也投入赏众，存在真实个人让渡代价；
4. 新获得财物时重复按公共储备 + 群体分配处理；
5. 军事战果与客商财物两个不同来源仍重复使用同一排序；
6. 晁盖明确把富贵来源归于众弟兄共同才能，与“不由寨主私占”的处理方向一致。

所以当前窄原则 `zn=true`。

## 5｜strict 前置门

```yaml
same_current_window: true
same_object_layer: true
zn_independently_true: true
x_independently_true: true
result_causality_belongs_to_tested_x: true
equivalent_third_party_veto_or_anchor: false
strict_test_allowed: true
```

掌库小头目只是执行节点，没有证据表明其能替晁盖决定入库比例与分配范围；吴用等也未在被测节点替代这一现实财物处分权。

## 6｜zn → x：成立

拿掉“共同所得不得首领私占、应公共储备并向共同成员分配”的原则，晁盖仍拥有现实财物处分 `x`，但会出现明确缺口：

- 为什么不能把战利品主要归寨主私人？
- 为什么自己的庄财也要投入共同成员？
- 什么情况下应入公库、什么情况下应分给头领与全寨成员？
- 首领处分共同财富时，什么标准限制其私人占有？

因此 `zn` 给 `x` 补入用途、分配、保留与私人占有边界。

结论：`zn_to_x_gap_filling: true`。

## 7｜x → zn：成立

拿掉晁盖当前对这些共同所得 / 公库财物的现实处分 `x`，窄原则虽然还能抽象成“共同所得应共同分配”，但会失去本轮不可替代的 current 现实结构：

```text
我作为寨主当前真实掌握的共同财物
+
我可以把它据为私用、入公库或向成员分配
+
我实际要不要用自己的这项处分权把共同所得私有化
```

这与此前晁盖“不伤无关者”负控制不同：不伤无关者原则离开山寨处分权后，仍可直接约束晁盖个人并指向客商、百姓；而本轮原则天然就在规定“我手里这批共同所得 / 公库财物应怎样被我处分”。

如果没有这项 current 财物处分 `x`，客商、百姓、个人行为等不能等价替代“我现实掌握的共同财富”这一对象边界；第三方也不能替代晁盖本人对当前财物作私有/入库/分配选择。

因此出现 current canonical 所说的“现实落点、明确对象范围与我方边界”缺口。

结论：`x_to_zn_gap_filling: true`。

## 8｜防止人工缩窄

本轮没有把一个宽泛“仗义”原则事后裁成 strict。文本本身连续把：

- 自家财物；
- 生辰纲所得；
- 军事战获；
- 新劫财物；

放入同一寨主处分窗口，并反复做公共赏劳、入库、均分；又明确把富贵来源归于众人共同才能。

所以“共同所得如何由寨主处分”是文本自己反复生成的对象结构，不是为通过 `x→zn` 门临时造出来的词义。

## 9｜最近邻排除

- `zn vs z`：不是因外部赞许、封号、观看才分配；
- `zn vs xn`：掌库、搬运、分账流程回答“怎么执行”，不解释“为何不能首领私占”；
- `x vs zx`：锁的是已经形成后的财物处分边界，不把公开分配动作重复判为扩权；
- `x vs nx`：当前入库/分配节点不需逐次向外部节点申请同一处分；
- `zn vs 旧“不伤无关者”原则`：两者对象不同，前者规定共同财物如何处分，后者规定无关生命如何对待，strict 结果可以不同，不构成同人矛盾。

## 10｜第三因素冻结

冻结：

- “仗义疏财”人物标签；
- 梁山好汉道德评价；
- 强盗共同体浪漫化；
- 众人赞誉；
- 后续宋江时代制度。

只保留：晁盖是否真实处分共同财物、是否反复把自己/共同所得公共化、是否有私人占有的替代可能、拿掉任一端后另一端是否出现 canonical 要求的可命名缺口。

结论不变。

## 11｜结论与成熟度

```yaml
zn_current: true
x_current: true
zn_x_cooccurrence: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: true
strict_zn_x_complement_locked: true
strict_positive_control_index: 3
strict_positive_cross_work_index: 3
```

事实置信：99。
分类置信：95。

知识成熟度：L4 `evidence-locked`。

本轮使文学 strict 正向从 `2 controls / 2 works` 推进到：

```text
3 positive literary controls / 3 independent works
+
1 historical positive contrast
+
4 negative guards / 3 works
```

仍不得自动修改 L2 `zn补x_补卡`，只允许继续停在 `pending-review` 等待授权审议。

## 12｜下一步

普通 strict 正向槽已达到 3 部独立文学作品，停止继续堆第四个普通正例。

下一轮优先：

1. 攻击本条 99/95：检查“共同所得不得私占”是否在无当前财物处分 `x` 时存在等价现实承载，优先尝试把 `x→zn` 打回 94 以下；
2. 继续攻击探春与诸葛亮两个 95 分正向，寻找第三因素或原则人工缩窄风险；
3. 找“表面共同财物公共化，实际只是组织惯例/外部规则/成员压力驱动”的伪 strict 反例；
4. 在正式授权审议前，不修改 L1、zn/x 信息卡、准度卡或 `zn补x_补卡`。
