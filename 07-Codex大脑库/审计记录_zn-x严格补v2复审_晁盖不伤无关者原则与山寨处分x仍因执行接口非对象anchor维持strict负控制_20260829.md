---
type: ten-yuan-fire-axis-strict-v2-rereview
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 水浒传
character: 晁盖
stage: 梁山初立后的劫掠/武力处分边界；江州高压撤退中的同型限制作跨情境复验
sample_type: strict-negative-guard-v2-rereview
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
legacy_v1_negative_revalidated_under_v2: true
current_v2_negative_guard_increment: true
fact_confidence: 99
classification_confidence: 98
zn_current: true
x_current: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: false
strict_zn_x_complement_locked: false
cross_work_count_correction_required: true
v2_negative_controls_after_this_audit: 4
v2_negative_independent_works_after_this_audit: 3
legacy_v1_negative_guards_pending_after_this_audit: 0
may_override_canonical: false
created: 2026-08-29
---

# strict zn↔x v2 复审｜晁盖“不伤无关者”仍为负控制

## 1｜复审目的

本轮不重新判人物，不新增普通 `zn vs x` 正例。只把旧 v1 strict 负控制“晁盖不伤无关者 `zn` × 山寨武力/处分 `x`”放到 current gate：

`current-layer-specific-anchor-gap-v2_20260829`

下重审，判断旧负结论是否只是被已经退役的“宇宙唯一现实载体”强门误杀。

事实底座沿用既有 99/98 L4 记录：

`07-Codex大脑库/运行记录_zn-x最近邻_晁盖梁山劫掠处分权x受不伤客商性命原则zn主动限权第二作品正向控制_20260827.md`

## 2｜端点复核

### zn

窄原则继续成立：

> 在取财、脱险或武力行动中，不能因为己方有力量/权限就任意伤害不抵抗客商和无关百姓。

它不是“梁山好汉”“仁义”标签，而是事前进入武力使用边界，并在另一高压情境再次限制滥杀。

### x

窄 `x` 继续成立在山寨行动/武力处分层：晁盖处于能调拨己方人马、给行动规定可做/不可做边界，并让组织节点执行的现实指挥位置。

本复审不把梁山全部最终权力或共同财物处分倒灌给晁盖个人。

## 3｜strict 前置门

```text
same current window = true
same comparable object layer = true
zn independently true = true
x independently true = true
subject-specific x attribution = true in narrow command/disposition layer
third-party equivalent anchor freeze = passed for tested narrow layer
```

因此允许启动 strict 双向测试。

## 4｜zn→x

成立。

拿掉“不伤无关者”原则，山寨武力/处分 `x` 仍然存在，但会失去：

- 取财时为什么不能顺手杀害不抵抗客商；
- 脱险时为什么不能把无关百姓也视为可任意伤害对象；
- 有权使用武力时，什么边界必须停止。

所以 `zn` 给已成立 `x` 补入武力使用、限制和例外标准。

结论：`zn→x = true`。

## 5｜x→zn｜v2 关键门

不成立。

v2 不再要求被测 `x` 是全宇宙唯一载体；只问：拿掉山寨武力/处分 `x` 后，当前对象层是否重新失去原本由它构成的具体现实对象范围、可保护范围或“我方”边界。

本例答案仍是否。

拿掉晁盖对山寨人马的现实处分后：

- 不抵抗客商与无关百姓这些被原则直接对待的现实对象仍在；
- 晁盖自己的“伤 / 不伤”行为选择仍在；
- 原原则仍能直接约束主体自身，不需要先拥有一支山寨武力才获得现实对象；
- 消失的是把原则扩展为“约束部属和组织武力”的执行范围与执行接口。

因此被测 `x` 是：

`execution-and-amplification-interface`

而不是：

`object-constituting-current-reality-anchor`

换言之，山寨处分 `x` 让该原则更大范围、更稳定地作用于己方武力，但没有创造“无关者是谁”或“主体自身能否不伤害”的现实对象边界。

结论：`x→zn = false`。

## 6｜与 current v2 其他负控制的区别

- 唐僧：师徒处分 `x` 是“不轻伤人命”原则的执行接口，生命对象本身另在。
- 关羽：曹赐资源是被旧义筛选/使用的资源，同窗已有刘备关系与归刘行动 anchor。
- 严颜：巴郡军政 `x` 在剧情里真实丢失后，主体自身身体/生死/屈服选择仍直接承载原则。
- 晁盖：山寨武力 `x` 扩大“不伤无关者”原则的组织执行范围，但客商/百姓与主体自身行为已经构成 current anchor。

四者共同支持：

> `execution / amplification / screened resource / old governance object ≠ automatically current reality anchor`。

## 7｜拿掉、反向与第三因素

### 拿掉 x

假设晁盖没有山寨人马处分权，他仍可在自己面对客商/百姓时遵守“不任意伤害无关者”。原则没有在当前层悬空。

### 反向

若另一个案例中，原则命题天然只针对“我当前掌握的某项现实对象/权限怎样被我处分”，且拿掉该 `x` 后当前对象层确实失去明确“我的对象 / 我方边界”，才可能支持 `x→zn`。

### 第三因素冻结

冻结梁山“好汉”道德滤镜、官军/百姓阵营评价、最终梁山命运、武力强弱。只保留：原则对象是谁、山寨 `x` 提供的是对象构成还是执行扩大。结论不变。

## 8｜最近邻排除

- `x vs zx`：锁的是既有山寨现实调用/处分，不因公开威势重复升级 zx。
- `x vs xn`：行动组织与接应流程不替代“谁有现实处分权”。
- `zn vs z`：不靠外部赞誉或封号。
- `zn vs xn`：怎样组织“不伤人”的流程，不等于为什么无权任意伤害无关者。

## 9｜统计纠错

在本审计之前，current v2 已重审的负控制是：

1. 《西游记》唐僧；
2. 《三国演义》关羽；
3. 《三国演义》严颜。

因此正确统计应是：

```yaml
v2_negative_controls_before: 3
v2_negative_independent_works_before: 2
```

专项中枢此前写成 `3 controls / 3 works`，把关羽与严颜同属《三国演义》误计成两个独立作品，需在下一次安全中枢同步时纠正。

本轮晁盖属于《水浒传》，因此审计后正确统计为：

```yaml
v2_negative_controls_after: 4
v2_negative_independent_works_after: 3
legacy_v1_negative_pending_after: 0
```

这意味着 legacy v1 strict negative → current v2 negative 的逐案迁移已经清账完成，但跨作品数必须保持独立作品口径。

## 10｜结论

```yaml
zn_current: true
x_current: true
zn_x_cooccurrence: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: false
strict_zn_x_complement_locked: false
legacy_v1_negative_revalidated_under_v2: true
current_v2_negative_guard_increment: true
```

事实置信：99。
分类置信：98。

知识成熟度：L4 `evidence-locked`。

不修改 L1、zn/x 准度卡或 `zn补x_补卡`；本轮只完成最后一条 legacy strict 负控制的 v2 清账与独立作品计数纠错。

## 11｜下一轮最高信息增益

P0 继续攻击当前唯一 verified strict 正向诸葛亮：重点不再重复旧“宇宙唯一载体”门，而检查 `zn` 独立性是否可被长期统军制度/信誉治理策略替代，以及更宽原则下 current anchor 是否仍为同窗对象构成型。

若诸葛亮继续守住 ≥95，则优先寻找第二部独立文学 strict v2 正向；若跌破95，则 strict v2 将暂时进入“0 verified positive + 4 negative controls / 3 works”的重新采矿状态。