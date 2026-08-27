---
type: ten-yuan-fire-axis-evidence-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 水浒传
character: 晁盖
stage: 第20回梁山客商劫掠规则；第40回江州劫法场制止李逵滥杀百姓作为跨情境复验
sample_type: strict-zn-x-negative-guard
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
governance: L1-L6文件权力与知识成熟度双轴协议_v2.0_20260827
fact_confidence: 99
classification_confidence: 98
strict_negative_guard_index: 2
strict_negative_guard_work_index: 2
may_override_canonical: false
created: 2026-08-27
---

# zn ↔ x 严格补压力测试｜晁盖：zn 给山寨处分 x 划界，但 x 不是该原则不可替代的现实落点

## 1｜本轮问题

旧记录已经以 99/98 锁定：

- `zn`：在取财、脱险、战斗便利与无关者生命发生冲突时，不可任意伤害不抵抗客商/无关百姓；
- `x`：晁盖对梁山人马、劫掠行动、战利品和行动边界具有现实调配/处分权限；
- 两端在同一窗口可以独立共现。

本轮不增加 `zn+x` 共现计数，只测试 current canonical `zn补x_补卡_v0.1` 所要求的双向缺口：

```text
拿掉 zn → x 是否重新出现用途 / 守护 / 放弃标准缺口？
拿掉 x → zn 是否重新出现现实落点 / 可保护对象范围 / 明确我方边界缺口？
```

## 2｜事实复核

第20回，晁盖可真实分派三阮、刘唐、杜迁、宋万等人行动，并明确要求只取金帛、不可伤害客商性命；次日报捷又首先追问是否杀人，并在得知无人被害后表示认可。战利品随后由其组织入库、分配。

第40回江州劫法场后，李逵继续砍杀无关百姓，晁盖明确制止“不干百姓事，休只管伤人”。

因此：

- `x` 不是名义首领，而是现实组织调用与处分边界；
- `zn` 不是一次口号，而是在不同高压窗口重复进入选择。

## 3｜zn → x：成立

拿掉“不任意伤害无关者”原则，保留晁盖对山寨人马、劫掠与处分的现实 `x`：

- 人马仍归其调拨；
- 财物仍可组织处分；
- 行动仍能推进；
- 但“哪些武力使用不能越过”“取财与伤命如何排序”失去最直接的内部边界标准。

所以当前 canonical 所说的：

> `zn` 给 `x` 补掌握用途、守护/放弃标准，以及否决权服务的原则

在本例成立。

结论：`zn_to_x_gap_filling: true`。

## 4｜x → zn：不成立

反向拿掉本轮被测的“梁山人马 / 劫掠 / 战利品现实处分 `x`”，但保留晁盖本人及“不任意伤害无关者”的原则：

- 原则仍有清楚对象：不抵抗客商、无关百姓；
- 原则仍可直接约束晁盖自己的个人行为与未来判断；
- 即使没有山寨首领处分权，他本人遇到类似冲突时仍可选择不伤无关者；
- 第20回与第40回的跨情境重复说明，原则并不以“我拥有一支可处分的山寨武力”作为成立前提。

因此，山寨 `x` 会扩大该原则可现实影响的范围，但不是该原则不可替代的现实落点。

最关键的分层：

```text
被原则保护 / 对待的对象范围
≠
必须先进入主体 x 掌握边界
```

客商和百姓恰恰不是“归晁盖掌握”的 `x`，却仍然是 `zn` 可以现实指向的对象。

所以拿掉山寨处分 `x` 后，`zn` 没有重新陷入“意义悬空、无对象承载”的必要缺口。

结论：`x_to_zn_gap_filling: false`。

## 5｜strict 判定

```yaml
zn_current: true
x_current: true
zn_x_cooccurrence: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: false
strict_zn_x_complement_locked: false
one_way_complement: zn_to_x
strict_negative_guard: true
```

因此本例是第二份高纯：

> **`zn+x` 共现成立，但 strict `zn↔x` 不成立。**

## 6｜拿掉与反向测试

### 拿掉 zn

`x` 仍完整存在，只是缺内部使用边界与守护标准。支持 `zn→x`。

### 拿掉 x

`zn` 仍能通过“无关者不可任意伤害”指向现实对象并约束主体自己的行为。反驳 `x→zn` 的不可替代性。

### 反向改写

若文本变成：某项原则只有在主体拥有并维持一块明确“我方对象/关系/地盘”时才有现实对象；一旦失去该 `x`，原则便只剩无对象的抽象口号，那么才明显支持 `x→zn`。

晁盖本例不是这种结构。

## 7｜最近邻排除

- `zn vs z`：原则不依赖外部奖励或认可；
- `zn vs xn`：调兵、接应和分配是流程问题，不解释无关者生命边界；
- `x vs zx`：本轮用的是已经形成后的山寨现实处分边界，不重复把下令记成扩权；
- `x vs 保护对象`：原则保护谁，不等于谁归主体占有、调用或处分；这是本轮 strict 反向门最重要的新护栏。

## 8｜第三因素冻结

冻结：

- 梁山“好汉”道德滤镜；
- 晁盖善恶评价；
- 强盗伦理；
- 李逵性格；
- 最终梁山命运。

只保留：内部原则是否独立成立、山寨处分 `x` 是否独立成立、拿掉任一端后另一端是否出现 canonical 所要求的可命名缺口。

结论不变。

## 9｜与关羽首份 strict 反例的关系

当前已有两份不同作品反向控制：

1. 《三国演义》关羽：曹赐资源 `x` 对旧义有帮助，但旧义仍可通过归刘、护送二夫人、离曹行动稳定落地，因此 `x→zn` 不成立；
2. 《水浒传》晁盖：山寨处分 `x` 扩大原则可执行范围，但“不伤无关者”本身仍有现实对象并可约束个人行为，因此 `x→zn` 不成立。

共同护栏：

> **`x` 扩大、便利或强化 `zn` 的现实执行，不等于 `x` 在 strict 意义下补回 `zn` 的不可替代现实落点。**

## 10｜成熟度与统计

事实置信：99。
分类置信：98。

知识成熟度：L4 `evidence-locked`。

本轮：

- 不增加 `zn+x` co-occurrence positive count；
- strict positive +0；
- strict negative guard +1；
- strict negative guard work +1；
- 当前 strict 研究推进为 `0 positive / 2 negative guards / 2 works`。

不修改 L1、zn/x 信息卡、准度卡或 `zn补x_补卡`。

## 11｜下一轮最高价值

优先对《西游记》唐僧做第三份 strict 双向缺口压力测试。

如果唐僧也显示“师徒处分 x 只是原则的执行工具之一，而不是不杀人原则不可替代现实落点”，则 strict `zn↔x` 的反向门会形成三作品负控制；届时才值得建立专门的 strict 边界 pending-review，而不是继续搜正例凑数。
