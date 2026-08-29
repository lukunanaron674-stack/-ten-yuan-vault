---
type: ten-yuan-fire-axis-audit-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_type: strict-v2-negative-control
work: 三国演义
character: 诸葛亮
stage: 第85回白帝托孤→刘禅即位→诸葛亮实际总揽蜀汉朝廷军政
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 98
zn_current: true
x_current: true
zn_x_cooccurrence: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: false
strict_zn_x_complement_locked: false
strict_positive_increment: false
strict_negative_guard_increment: true
strict_precondition_guard_increment: false
negative_guard_mechanism: very-strong-delegated-power-x-does-not-anchor-loyalty-zn-when-entrusted-person-and-political-order-are-already-same-window-anchors
may_override_canonical: false
created: 2026-08-29
---

# 审计记录｜诸葛亮白帝托孤后：军政 x 极强，但仍不是忠贞辅主 zn 的 current reality anchor

## 1｜研究问题

P0 搜索希望找到第二份真正通过 strict `zn↔x` v2 的文学正例。

白帝托孤后的诸葛亮看起来非常接近：

```text
刘备明确允许“嗣子不才，君可自为成都之主”
+
诸葛亮主动选择“尽忠贞之节，继之以死”
+
刘禅即位后诸葛亮获得极强现实军政 x
→ 是否构成 strict zn↔x？
```

本轮裁决：**否。**

两端都高纯成立，`zn→x` 成立，但 `x→zn` 在 current-layer-specific-anchor-gap-v2 下仍不过门。

## 2｜剧情事实

### 2.1 白帝托孤

《三国演义》第85回，刘备临终将后事托付诸葛亮，并明确说：

> 若刘禅可辅则辅；如其不才，诸葛亮可自为成都之主。

诸葛亮当场并没有把“可自取”作为未来最高方向，而明确以“竭股肱之力、尽忠贞之节、继之以死”回应。

关键点是：

```text
外部授权不是“必须不自立”
而是显式给出了“可以自立”的选项
↓
诸葛亮仍主动把未来方向锁向辅主 / 忠贞
```

所以本轮候选 `zn` 不能被简单解释成“上级命令要求他不篡位”。

### 2.2 刘禅即位后的现实 x

同回刘禅即位后，诸葛亮被加为武乡侯、领益州牧；随后文本明确写出：

> 朝廷、选法、钱粮、词讼等事，皆听诸葛丞相裁处。

五路伐蜀时，诸葛亮又能在成都百官不知情的情况下直接调马超、魏延、赵云、关兴、张苞等军队和将领，并决定外交使者与军事部署。

因此被测 `x` 不是“丞相”称号，而是：

> **蜀汉当前朝廷、军政、人事、钱粮、诉讼与军事调度的大范围现实处分 / 调用边界。**

这项 `x` 极强，且现实生效。

## 3｜zn 证据

本轮将原则独立定义为：

> **在被明确赋予“必要时可自取”的高权力机会后，仍不把自身能力和现实权力转化为个人君权，而把辅刘禅、承继汉统与完成先主托付作为未来最终政治排序。**

为什么可锁 `zn=true`：

1. 不是单纯外部命令；刘备显式留下“可以自为成都之主”的选项。
2. 诸葛亮主动选择忠贞辅主，而不是选择个人君权。
3. 刘禅即位后，他已经拥有远高于普通臣属的现实军政能力，原则仍继续进入实际判断。
4. 五路来犯时，诸葛亮明确以“先帝以陛下付托与臣，臣安敢旦夕怠慢”继续调用同一托孤原则。
5. 原则具有跨阶段未来调用资格，不是一次情绪反应。

所以：

```text
zn_current = true
```

## 4｜x 证据

被测对象层：

> 诸葛亮对蜀汉朝廷政事、选法、钱粮、词讼、军队调遣与重大军事外交事项的现实调用 / 处分边界。

可观察证据：

- 刘禅即位后朝廷多类事务直接听诸葛亮裁处；
- 五路来犯时诸葛亮已经先行调兵、布防、写信、安排预备军；
- 相关现实节点按其决定运行。

所以：

```text
x_current = true
```

## 5｜zn→x：成立

拿掉“忠贞辅主 / 不把受托权力转成个人君权”原则，诸葛亮的现实军政 `x` 仍然存在，但会出现明确方向缺口：

```text
这份巨大现实权力最终服务谁？
可以不可以从辅政转为个人自立？
面对“可自为成都之主”的许可，为什么不把军政 x 转成个人君权？
```

因此 `zn` 确实给 `x` 补入最终用途、守护和退出/不越界标准。

```text
zn_to_x_gap_filling = true
```

## 6｜x→zn：不成立

这是本轮最关键的 P0 压力测试。

按 v2 不再要求被测 `x` 是“世界上唯一可能载体”；只问：

> 拿掉当前军政 `x` 后，这条 `zn` 在当前对象层是否真的重新失去具体现实 anchor？

答案仍偏明确的 **否**。

因为即使拿掉诸葛亮当前总揽的军政处分 `x`，同一窗口内仍然存在不依赖这项 `x` 的直接现实 anchor：

1. **刘禅本人**：托孤所指向的现实继承人和辅佐关系对象仍在。
2. **汉统 / 蜀汉政治秩序**：原则所要承继、维护的现实政治对象仍在。
3. **诸葛亮自己的“辅 / 不自立”选择**：即使权力缩小，他仍可在现实关系中选择是否背弃托付、是否拥立自己。
4. **先主托孤关系本身**：这是一个当前持续存在的关系义务对象，不依赖“必须拥有全部朝廷军政权”才成立。

所以这项巨大 `x` 对 `zn` 的确提供了更强、更高代价、更具诱惑性的检验场，但它更接近：

> **放大原则风险与现实作用范围的高强度权力场。**

而不是：

> **原则在当前窗口不可缺失的对象构成型 anchor。**

拿掉 `x`，原则不会重新变成“没有现实对象”；它仍然直接面对刘禅、汉统、托孤关系以及“辅还是自立”的主体选择。

因此：

```text
x_to_zn_gap_filling = false
strict_zn_x_complement_locked = false
```

## 7｜拿掉测试

### 拿掉 zn

保留诸葛亮巨大军政 `x`，删掉“忠贞辅主 / 不转成个人君权”的内部原则：

- 军政权依然真实存在；
- 但权力最终用途、是否自立、是否守托孤边界出现明确缺口。

所以 `zn→x` 成立。

### 拿掉 x

删掉诸葛亮当前总揽的军政处分，只保留托孤关系和刘禅这个现实对象：

- 忠贞辅主原则仍有对象；
- 仍可判断是否背弃刘禅、是否违背托孤、是否试图自立；
- 原则不会因失去总揽军政就现实悬空。

所以 `x→zn` 不成立。

## 8｜反向测试

真正的 strict 正例需要看到：

```text
原则 P 独立成立
+
现实 x 独立成立
+
P 天然规定“我手里的这项 x 应怎样使用 / 限制 / 退出”
+
拿掉 x 后，当前对象层确实失去一块原本不存在的明确现实 anchor
+
同窗没有人物关系、主体行为、其他稳定对象已经完整承载 P
```

本例最后一项失败：刘禅、汉统与托孤关系本身已经是 same-window anchors。

## 9｜最近邻排除

### zn vs 外部命令 / nx

托孤来自刘备，但刘备并没有命令“绝不可自立”，而是显式提供“可自为成都之主”的选择；因此诸葛亮最终选择仍有内部 `zn` 证据。

### x vs 名位 / z

武乡侯、益州牧只是位置证据；真正 `x` 来自“朝廷多类事务皆听裁处”以及实际调兵、外交、人事和行政决定生效。

### zn vs xn

如何平五路、如何调兵、如何结吴属于运行与策略；不能替代“为什么巨大现实权力仍不转成个人君权”的原则端。

### x vs zx

本轮锁的是刘备死后已经形成的现实军政掌握边界，不把每一次下令重复计成扩权。

## 10｜第三因素冻结

冻结：

- 后世“千古忠臣”评价；
- 武侯祠与文化神化；
- 刘备是否真的试探诸葛亮；
- 刘禅个人能力评价；
- 最终北伐成败。

只保留：

```text
可自立选项是否真实出现
→ 主体是否主动选择忠贞辅主
→ 后续巨大军政 x 是否真实形成
→ 原则是否继续调用
→ 拿掉 x 后是否还有 same-window anchors
```

结论不变。

## 11｜与诸葛亮卤城 strict 正向的区别

同一个诸葛亮不能被人物标签统一判 strict。

### 卤城换班

被测 `zn` 直接规定：已经由自己公开形成稳定期待的军令，不能因即时利益被自己任意毁弃。

被测 `x` 正是当前对这批直属军士“留 / 放”的现实处分边界，构成该窄原则在当前窗口的具体我方军令 anchor。

### 白帝托孤后总揽军政

被测 `zn` 的现实对象本来就包含：刘禅、汉统、托孤关系与主体“辅 / 自立”的选择。

巨大军政 `x` 虽然让原则更高代价、更现实、更危险，但不是创造这些对象的必要 current anchor。

所以：

```text
同一人物
+ 更大的 x
≠
更容易 strict
```

真正决定 strict 的是**原则与对象层关系**，不是权力体量。

## 12｜结论

本轮得到一条新的 strict v2 负控制：

> **即使主体拥有接近总揽政权的极强现实 `x`，只要被测 `zn` 在同一窗口已经由人物关系、政治秩序和主体自身选择获得直接现实 anchor，该 `x` 仍不能因为“权力很大、诱惑很强”就自动补成 `x→zn`。**

新纪律：

```text
x magnitude ≠ x→zn anchor strength
very strong x can still be only a pressure/amplification field
same-window person/order/choice anchors defeat x→zn when they already fully carry the principle
strict belongs to principle × object layer, not to character or power size
```

## 13｜统计纪律

本轮：

```text
strict positive +0
strict v2 negative guard +1
strict precondition guard +0
independent work +0
```

《三国演义》已经存在于 strict v2 negative guard 的作品集合，因此只增加 control，不增加 independent work。

## 14｜治理

- L4 `evidence-locked`。
- 不修改 L1。
- 不修改 `zn/x` 信息卡、准度卡。
- 不修改 `zn补x_补卡`。
- 不覆盖 L2 canonical。
- 可由后续消化任务吸收进 strict 专项和火轴总纲。
