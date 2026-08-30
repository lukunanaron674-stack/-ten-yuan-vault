---
type: ten-yuan-fire-axis-research-record
authority_level: L4
knowledge_status: evidence-locked
status: current
date: 2026-08-30
axis: fire
pair: zn-x
work: 西游记
character: 孙悟空
stage: 第3回花果山整军守山 → 第5-6回天兵围剿 → 第28回回山见烧毁结果
sample_type: strict-precondition-guard
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 98
strict_test_allowed: false
strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
independent_work_increment: false
negative_guard_mechanism: territorial-governance-x-does-not-equal-stable-protected-range-x
may_override_canonical: false
---

# zn-x 伪 strict 前置护栏｜孙悟空花果山：内部治理 x 真实，但 territorial x ≠ stable protected-range x

## 1｜本轮问题

P0 / P1 当前正在优先寻找天然、单一、subject-specific，且经过现实风险测试的 `protected-range / organized-boundary x`。

花果山是一个高价值最小差异：孙悟空对山场内部治理与军事组织的现实 `x` 很强，但当天庭与二郎神把真实外部风险压进来时，这个 `x` 是否足以证明“花果山已经成为孙悟空可稳定排除外敌的 protected-range x”？

结论：**不能。**

本轮锁出的不是“孙悟空没有花果山 x”，而是：

> **territorial / internal-governance x 可以成立，同时 stable protected-range x 不成立。**

## 2｜剧情事实

### 阶段 A｜内部治理与守山准备真实成立

第3回孙悟空回花果山后：

- 逐日操演群猴；
- 让群猴制作旗幡、哨子，操练一进一退、安营下寨；
- 明确担心人王、禽王、兽王兴师来攻；
- 主动为“守护山场”寻找锋利兵器。

这里不是“猴王”名号自动生成权限，而是山场内部军事组织、训练和守备安排确实围绕孙悟空的决定运行。

所以窄对象层可以锁：

```text
花果山内部军事 / 组织治理 x = true
```

### 阶段 B｜真实外部风险进入

第5-6回，天庭派兵围剿花果山；外部风险不是假设，而是现实进入：

- 天兵天将包围花果山；
- 孙悟空与天将、二郎神持续交战；
- 群猴 / 妖众也被卷入守山战斗。

这满足 protected-range 研究所要求的 `risk-test` 前件：风险真的撞进来了。

### 阶段 C｜风险排除并没有稳定成功

第28回孙悟空五百年后回花果山，文本明确回顾：

- 花果山被二郎神等纵火烧坏；
- 山场花木、林木与环境大面积毁损；
- 群猴称当年很多猴众被烧杀，幸存者靠躲入井、涧、铁板桥下保命；
- 后来又因山场供养条件恶化而继续流散。

因此真实风险测试的可观察结果不是“外敌被稳定排除”，而是：

```text
risk entered
→ territorial defense activated
→ external force still penetrated / destroyed / displaced
```

## 3｜x 分层判定

必须拆成两个不同权限对象层：

### A｜内部 territorial / governance x

```text
对象：花果山内部军事组织与守山安排
主体：孙悟空
现实证据：操练、编组、安营、守山准备、群猴节点响应
结论：x = true
```

### B｜stable protected-range x

```text
对象：花果山作为“可稳定排除外部侵夺/毁灭”的保护范围
真实风险：天兵、二郎神围剿
观测：山场被突破、焚毁，群猴大量死散
结论：stable protected-range x = false / not locked
```

因此：

> **内部归我管 ≠ 外部一定进不来。**

更精确：

```text
territorial-governance x
≠
externally exclusionary protected-range x
```

## 4｜zn 检查

可以提出候选方向：保护花果山、猴群与自己的山场共同体。

但本轮不锁 `zn`，原因是当前守山行为同时被以下因素强解释：

- 自己的领地 / 家园直接受攻击；
- 自身生存与反天庭冲突；
- 猴王 / 统领关系位置；
- 群体自保与战争胜负。

现有窗口不足 ≥95% 证明一项在拿掉身份、阵营、领地利益、战争生存后仍能独立通过 `zn` 无奖励、冲突排序与未来调用资格门的原则。

因此：

```yaml
zn: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
```

## 5｜拿掉测试

### 拿掉“protected-range x”假设

只保留孙悟空对内部军事治理的真实 `x`，剧情仍完全可解释：

- 他可以组织守山；
- 可以训练、调动群猴；
- 可以与外敌作战；
- 但更强外敌仍可以突破、焚毁山场。

所以不需要假设“稳定排除外敌的 protected-range x”才能解释内部治理事实。

### 反向

如果未来找到：

```text
对象留在边界内
+
外部风险真实进入
+
主体自己的单一 x 稳定阻断 / 否决 / 迫使风险改道
+
不是第三方代做
```

才有资格高纯锁 `protected-range x`。

花果山当前不是这种结果。

## 6｜第三因素冻结

冻结：

- “齐天大圣”称号；
- 孙悟空战力高低；
- 天庭正邪评价；
- 二郎神是否留手的后世解释；
- 花果山象征意义。

只保留：

```text
内部治理是否真实？
外部风险是否真实进入？
保护边界是否稳定改变 / 阻断同一风险结果？
```

结论不变。

## 7｜最近邻排除

- 战斗力 / 能打退某一波敌人 ≠ stable `x`；
- `zx` 式公开战斗/显权不得替代本轮 `x` 判定；
- “猴王”名义位置不得替内部治理现实证据；
- 领地归属感、愤怒、家园被毁的情绪不得替 `zn`。

## 8｜本轮新增规则

### 规则 A

> **territorial-governance x ≠ stable protected-range x。**

主体可以真实管理一个领地 / 组织，却仍不能稳定排除外部风险。

### 规则 B

> **protected-range 的 risk-test 不能只看“主体有防御动作”，还要看边界是否现实改变同一外部风险的结果。**

### 规则 C

> **内部管理权与外部排除权必须分账。**

不要从：

```text
我能管这里的人 / 资源 / 防务
```

倒推：

```text
外部力量不能进入 / 夺取 / 摧毁这里
```

## 9｜统计影响

```yaml
strict_positive_increment: 0
strict_negative_guard_increment: 0
strict_precondition_guard_increment: 1
independent_work_increment: 0
```

《西游记》已在 strict-precondition guard 的作品集合中，因此只增加 control，不增加 independent work。

## 10｜来源

- 《西游记》第3回：花果山整军、安营、为“守护山场”准备兵器。
- 《西游记》第5-6回：天兵与二郎神围剿花果山，真实风险进入。
- 《西游记》第28回：孙悟空回山，确认花果山曾被二郎神等烧毁、群猴大量死散。

## 11｜成熟度

```yaml
fact_confidence: 99
classification_confidence: 98
authority_level: L4
knowledge_status: evidence-locked
may_override_canonical: false
```

本轮不修改 L1、zn/x 信息卡、准度卡、关系卡或 L2 `zn补x` 正本。