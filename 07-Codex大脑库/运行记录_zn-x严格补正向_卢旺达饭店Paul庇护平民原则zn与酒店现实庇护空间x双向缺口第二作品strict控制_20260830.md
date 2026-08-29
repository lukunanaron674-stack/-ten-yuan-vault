---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_type: strict-v2-positive-film-control
work: 卢旺达饭店
work_original: Hotel Rwanda
work_year: 2004
medium: film
character: Paul Rusesabagina
stage: 屠杀爆发→将家人与邻人带入酒店→酒店转成难民庇护空间→家人获撤离机会时本人留守→最终整体撤离
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 96
zn_current: true
x_current: true
zn_x_cooccurrence: true
same_current_window: true
same_object_layer: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: true
strict_zn_x_complement_locked: true
strict_v2_verified_positive_control_index: 2
strict_v2_verified_positive_cross_work_index: 2
counted_as_historical_contrast: false
counted_as_four_classics_control: false
strict_precondition_guard_increment: false
strict_negative_guard_increment: false
may_override_canonical: false
created: 2026-08-30
---

# 运行记录｜《卢旺达饭店》Paul：庇护平民原则 zn × 酒店现实庇护空间 x｜strict v2 第二作品正向

## 1｜本轮问题

当前 strict v2 只有一份稳定文学正向：诸葛亮卤城换班。大量候选会在以下前置门失败：

- `x` 只是瞬时能力、职位或复合资源包；
- `zn` 可被法律、角色职责、治理绩效或战略收益替代；
- 被测 `x` 只是执行接口，不构成 current reality anchor。

本轮选《卢旺达饭店》Paul Rusesabagina，测试一个不同机制：

> **主体真实掌握一个可持续的庇护空间 `x`，内部保护原则 `zn` 是否定向该空间；反向拿掉该空间后，原则是否在当前对象层重新失去稳定可保护群体和明确庇护边界。**

裁决：**通过 strict v2，99/96，L4 evidence-locked。**

---

## 2｜剧情事实

### 2.1 压力与触发

1994 年卢旺达大屠杀爆发后，Paul 先利用钱财、谈判和关系保护家人与邻人，并把他们带到自己管理的 Hôtel des Mille Collines。

随着外国人撤离、联合国无法提供足够保护，酒店逐渐由普通商业酒店变成大规模平民庇护空间。电影持续呈现：

- 大量 Tutsi 与温和 Hutu 难民进入酒店；
- Paul 作为酒店经理维持住房、物资、人员与酒店运作；
- 酒店内部形成相对稳定的受保护群体；
- Paul 多次利用酒店电话、管理关系和酒店资源阻止军警/民兵直接带走或杀害难民；
- 物资断绝后仍继续维持这一庇护结构。

### 2.2 高代价原则证据

当 Paul 的家人获得撤离机会时，他没有把“保护责任”缩回私人家庭，而是选择本人留下继续保护酒店中无法离开的难民。剧本中的短句是：

> “I cannot leave these people.”

因此候选原则不是酒店经理的商业职责，也不是“保护我自己的家人”这么窄。

最终酒店中的难民与 Paul 一家一起通过 UN convoy 离开危险区，酒店庇护窗口才结束。

---

## 3｜zn 端：独立成立

### 3.1 独立定义

本轮 `zn` 不引用被测酒店 `x`，避免 post-hoc x-dependent principle definition：

> **当无武装平民面临被系统性屠杀，而主体现实具备保护可能时，不能仅为了最大化自身或家庭安全就主动抛弃这些人；保护责任应继续进入最终选择。**

### 3.2 为什么不是角色规则

Paul 的正式角色只是商业酒店经理，并不存在“必须把数百名非住店难民长期变成受保护群体”的普通职业规则。

更关键的是：

- 外国客人撤离后，商业酒店正常运行逻辑已经崩解；
- 难民大多不是正常付费旅客；
- Paul 自己及家人存在更安全的离开机会；
- 继续留守反而显著提高本人死亡风险；
- 他仍把保护难民放进最终选择。

所以：

```yaml
zn_current: true
role_rule_isomorphism_confound: false
identity_reward_explanation_sufficient: false
```

### 3.3 zn 六门

1. 原则对象明确：处于屠杀风险中的无武装平民；
2. 主体主动认可其不可轻易抛弃性；
3. 无奖励、无外部赞誉时仍持续执行；
4. 与本人/家庭更安全撤离发生真实冲突；
5. 多轮围困、缺粮、攻击与撤离节点持续调用；
6. 边界清楚：不能为了个人安全把已经形成的现实保护责任直接抛回屠杀环境。

结论：`zn=true`。

---

## 4｜x 端：独立成立

### 4.1 被测 x 只锁一个自然对象

本轮不把钱、电话、人脉、酒、车辆、国际关系全部打包成一个“万能综合 x”。

只锁：

> **Paul 对 Hôtel des Mille Collines 当前住宿/庇护空间的现实运营、准入与内部安置管理边界。**

### 4.2 x 现实证据

Paul 不是酒店所有者，但 current `x` 不要求所有权，只要求现实掌握、调用或处分边界。

可观察事实：

- 他作为 House Manager 实际运行酒店；
- 能把家人、邻人以及后来大量难民安排进入酒店；
- 能维持酒店房间、公共空间、物资与人员运行；
- 能要求酒店员工执行工作；
- 能决定继续把酒店维持为庇护空间，而不是按普通商业逻辑清空；
- 最终整体撤离时酒店才结束这一庇护运行。

民兵和军方能够威胁、突破或压迫这套边界，不等于 Paul 当前没有 `x`；`x` 不要求绝对不可侵犯。

所以：

```yaml
x_current_for_hotel_refuge_space: true
nominal_title_only: false
posthoc_composite_x_bundling: false
```

---

## 5｜同窗、同对象层

### 当前窗口

锁在：

> **酒店已经成为大规模难民庇护空间，Paul 仍实际管理该空间，并且本人仍能选择继续维持或放弃这一保护运行的围困阶段。**

### 当前对象层

- `zn`：是否继续保护当前面临屠杀风险、已经形成现实托付的平民群体；
- `x`：把这些人稳定维持在一个可住宿、可供给、可阻挡外部直接带走的现实庇护空间。

两端在同一 current window 上直接相遇，不跨阶段拼接。

---

## 6｜zn→x：成立

拿掉 `zn`，酒店运营 `x` 仍然存在。

Paul 仍然可能：

- 管理房间；
- 使用电话；
- 调度员工；
- 保存酒水和物资。

但会重新出现明确方向缺口：

```text
为什么这些商业酒店空间要继续对难民开放？
为什么个人/家庭撤离机会出现后仍继续维持庇护？
为什么稀缺物资继续优先用于维持受保护群体？
为什么酒店运作目标从商业服务改写为保护平民？
```

因此：

```yaml
zn_to_x_gap_filling: true
```

`zn` 给 `x` 补入了用途、守护、继续投入和不能轻易放弃的内部方向。

---

## 7｜x→zn：成立 under v2

### 7.1 不是“宇宙唯一载体”测试

current v2 已经取消旧的 absolute nonreplaceable anchor 强门。

不问：

> Paul 离开酒店以后，世界上是否绝对不可能再救任何人？

只问：

> 拿掉这个酒店庇护 `x`，当前围困窗口是否重新失去由该 `x` 提供的具体现实保护范围、持续投入接口与明确“我方保护空间”边界？

答案：**是。**

### 7.2 current-layer-specific anchor gap

拿掉 Paul 对酒店庇护空间的现实管理 `x` 后，原则仍成立，但当前窗口立即失去：

- 一个能同时容纳数百至上千人的稳定物理庇护空间；
- 一个把分散平民转成明确受保护群体的现实范围；
- 持续供给食物、水、房间和内部秩序的管理接口；
- 一个可以被 Paul 对外宣称、谈判并争取不被军警直接清空的“当前我方保护边界”。

钱、电话、人脉和临时贿赂仍可能救具体个人，但它们在同一窗口不能稳定替代：

> **“这一大批人现在有一个持续可停留、可供给、可识别的庇护空间。”**

所以这些不是 same-window equivalent anchor。

因此：

```yaml
x_to_zn_gap_filling: true
```

这里的酒店 `x` 不是单纯 execution interface，而是 **protected-group-and-space-constituting current anchor**。

---

## 8｜第三因素冻结

### 8.1 商业经理职责

不足解释继续收容大量非正常住客、在商业秩序崩解后本人冒死留守。

### 8.2 家庭利益

早期保护家人可以解释一部分行为，但家人获得撤离机会时 Paul 仍选择留下，排除“只有家庭利益”作为充分解释。

### 8.3 国际关注 / 酒店品牌

国际酒店身份确实帮助形成威慑，是保护机制的一部分，但不能替 Paul 决定继续开放、安置和维持庇护；而外国撤离后这一威慑显著下降，保护行为仍持续。

### 8.4 贿赂 / 电话 / 人脉

它们是并行工具 `x` 或外部通道，不是本轮被测单一酒店庇护 `x`；它们能延长保护，却不能在同窗完整替代稳定庇护空间本身。

### 8.5 联合国

UN 能提供局部外部保护，但行动受限、无法直接替代酒店内部的长期庇护管理；最终 convoy 是退出当前庇护窗口，而非证明酒店 x 从未成立。

---

## 9｜最近邻排除

### zn vs z

国际赞誉和后世英雄评价全部冻结。最强原则证据发生在当时无人保证回报、本人可能死亡的阶段。

### zn vs xn

贿赂、电话、供应、谈判回答“怎么让庇护继续运行”，不能解释“为什么在家人可离开时本人仍不抛下这些人”。

### x vs nx

酒店所有权属于 Sabena、外部军政节点也能干预，但 Paul 在 current window 对内部住宿、安置和运营拥有真实直接管理 `x`；外部来源/撤销可能性不等于 current x 从未成立。

### x vs composite-x

本轮只测酒店庇护空间，不把其他资源捆成综合 x，因此不触发 `posthoc composite-x bundling`。

---

## 10｜拿掉测试

### 拿掉 zn

酒店仍存在、Paul 仍能管理，但不再有必须把酒店持续用于难民庇护的内部方向。

→ `zn→x=true`

### 拿掉 x

保护原则仍存在，但当前围困层重新失去大规模稳定受保护群体、持续投入空间和明确庇护边界；同窗其他工具不能完整替代。

→ `x→zn=true`

---

## 11｜反向测试

如果电影结构是：

```text
Paul 只保护家人
→ 家人获准撤离后本人立即同行
→ 其他难民由 UN 或其他机构完整接管
```

则本轮 `zn` 与 `x→zn` 都会显著下降。

如果酒店只是名义避难点，Paul 无法实际安排人员、维持内部运行或决定继续开放，则 `x` 不成立。

如果同一窗口已有另一处等价安全营地稳定接收并供养全部酒店难民，则酒店 `x` 的 current anchor 独立性会下降。

电影当前结构不满足这些反例条件。

---

## 12｜结论

```yaml
zn: true
x: true
same_current_window: true
same_object_layer: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: true
strict_zn_x_complement_locked: true
fact_confidence: 99
classification_confidence: 96
```

本轮支持一个与诸葛亮不同的 strict v2 机制：

> **当现实 `x` 自然形成一个稳定受保护群体/空间边界，而 `zn` 决定该边界为什么必须被持续用于保护；反向拿掉 `x` 会使当前对象层重新失去稳定可保护范围和明确“我方庇护空间”时，可以成立 strict `zn↔x`。**

这不是“资源有帮助就算 strict”，也不是“x 必须是宇宙唯一载体”。

---

## 13｜统计纪律

本轮：

```yaml
strict_v2_verified_positive_increment: true
strict_v2_verified_positive_controls_after_this_record: 2
strict_v2_verified_positive_works_after_this_record: 2
strict_negative_increment: false
strict_precondition_guard_increment: false
```

作品层分账：

1. 《三国演义》诸葛亮卤城换班；
2. 《卢旺达饭店》Paul 酒店庇护。

本轮属于 film control，不冒充四大名著控制；Washington 继续单独作为 historical positive contrast。

达到 2 works 仍不足建立新的 L2 关系结论；existing strict pending-review 继续停留 L4，`may_override_canonical=false`。

---

## 14｜事实来源

- Hotel Rwanda screenplay：Daily Script，撤离窗口中 Paul 明确选择留下，保护无法撤离的难民。
- IMDb plot summary：Paul 作为酒店经理收容并保护超过一千名难民。
- Roger Ebert review：概括 Paul 以酒店管理能力、关系、贿赂与现实运作维持约 1,200 人安全。
- 电影剧情资料：外国人撤离、酒店变为难民庇护空间、物资短缺、军方威胁、最终 UN convoy 撤离。

本文件只记录电影文本/剧情结构，不把现实 Paul Rusesabagina 后续政治争议倒灌回电影人物判定。

---

## 15｜治理

- `authority_level: L4`
- `knowledge_status: evidence-locked`
- `may_override_canonical: false`
- 不修改 L1；
- 不修改 `zn/x` 信息卡、准度卡；
- 不修改 `zn补x_补卡`；
- existing strict pending-review 需后续资产消化同步计数，避免本轮为少量 metadata 冒险覆盖大型中枢。
