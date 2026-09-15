---
type: five-axis-v1-master-index
status: frozen-regression-only
version: v1.0
updated: 2026-09-16
authority_level: L3
scope: [五轴总览, 十元映射, 五行生克, 五维接口, 研发状态, 维护规则]
canonical_source:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
validation_source:
  - 07-Codex大脑库/R3_五轴传统五行生克结构验证_PASS_20260914.md
may_override_canonical: false
---

# 五轴 V1.0｜总入口

> 本文件是五轴当前统一读取入口。它负责整理，不重新发明定义；若与 L1 正本冲突，以 L1 正本为准。

## 0｜一句话定位

```text
五轴 = 传统五行在十元体系中的结构化表达。
每一轴由同行两个相反十元端构成；五轴之间继承传统五行的相生、相克关系。
```

五轴不是五维。

```text
五轴：五行结构层，研究十元与木火土金水的阴阳两极、跨轴生克与领域转译。
五维：叙事／主题层，用于处理因果、本体、空间、时间、命运等主题问题。
```

五维可以作为五轴进入叙事领域后的狭义显化，但不得反向覆盖十元本体，也不得拿叙事主题直接替代十元判定。

---

## 1｜五轴总表

| 五轴 | 十元两极 | 核心变量 | 叙事领域显化 |
|---|---|---|---|
| 木轴 | `zx ↔ nx` | 最终方向与作用权来源：自身生成并占据方向 ↔ 不占最终方向、沿既有通道续接 | 因果 |
| 火轴 | `zn ↔ x` | 对象独立成立资格与归属方式：保留自身成立 ↔ 纳入掌握、调用与处分边界 | 本体 |
| 土轴 | `n ↔ x并z` | 对象跨越内外边界的方向：外→内纳入承载 ↔ 内→外映射外化 | 空间 |
| 金轴 | `xn ↔ z` | 运行权与裁定重心配置：分布到规则节点流程 ↔ 收束到单一最高裁定点 | 时间 |
| 水轴 | `xz ↔ nz` | 可逆性与对象特异回返空间：持续收窄 ↔ 保存、恢复或重建 | 命运 |

固定映射：

```text
木 = zx ↔ nx
火 = zn ↔ x
土 = n ↔ x并z
金 = xn ↔ z
水 = xz ↔ nz
```

---

## 2｜五轴相生

传统上位约束：

```text
木 → 火 → 土 → 金 → 水 → 木
```

R3 已完成结构验证，5/5 PASS。

| 关系 | 五轴结构桥 |
|---|---|
| 木生火 | 方向／作用来源被确定 → 对象成立资格与归属边界获得可判定锚点 |
| 火生土 | 本体成立与归属边界 → 生成“内／外”边界 |
| 土生金 | 内外跨越 → 形成入口、出口、接口、承载点等可执行节点 |
| 金生水 | 规则、流程与裁定 → 写入 path_set / reentry_right，决定路径继续、终止或重开 |
| 水生木 | 可达／回返空间 → 定义下一轮真实可用方向集合 |

五轴层严格定义：

```text
生 = 结构条件生成
```

即 A 轴的有效结构变化能够建立、激活或重写 B 轴成立所需的结构条件。

`A生B` 不等于所有 A 案例都会自动出现 B。

---

## 3｜五轴相克

传统上位约束：

```text
木克土
土克水
水克火
火克金
金克木
```

R3 已完成结构验证，5/5 PASS。

| 关系 | 五轴结构桥 |
|---|---|
| 木克土 | 定向作用能够穿透、绕过或重写既有内外边界，压缩土轴边界状态空间 |
| 土克水 | 内外边界、入口与出口直接限制 return_path / reentry_right |
| 水克火 | 可逆与回返空间限制对象身份、成立资格与归属状态的可恢复集合 |
| 火克金 | 成立资格与归属先限定哪些节点／主体有资格进入运行和裁定链 |
| 金克木 | 运行权与裁定权能够授权／否决行动方向，压缩方向与作用权来源的状态空间 |

五轴层严格定义：

```text
克 = 合法状态空间约束
```

即 A 轴能够直接压缩、否决或重写 B 轴可成立的状态／迁移空间。

`A克B` 不等于情绪冲突、谁赢谁输，也不能只看题材词汇。

---

## 4｜五轴与十元的层级纪律

```text
十元 = 五轴内部的阴阳操作端
五轴 = 同行两个十元端的对立统一体
五轴生克 = 五个统一体之间的跨轴结构关系
具体案例 = 必须回到对象、变量、方向、权利、路径与边界取证
```

禁止：

1. 用“五行名字”直接倒推人物十元。
2. 只出现一个十元端，就宣布整条五轴完整显影。
3. 因为传统上 A 生 B／A 克 B，就无证据宣布具体案例发生了生克。
4. 把颜色、职业、情绪、季节、脏腑等传统象征直接当作五轴结构证据。
5. 用五维叙事主题反向覆盖十元本体定义。

---

## 5｜五轴判定最低证据

具体案例判断某轴时，至少固定：

```yaml
actor: 谁在作用
object: 被判对象
object_layer: 对象层级
changed_variable: 真正改变了什么
relation_shape: 关系方向／形状
decision_right: 谁拥有运行或裁定权
path_set: 哪些路径真实可达
reentry_right: 是否拥有真实回返权
future_endpoint: 未来端点是否被预置
reality_anchor: 证据是否真实落地
```

同一句中若存在两条独立因果箭头、不同对象层或不同权利主体，优先 `SPLIT_IR`，不得互相回填证据。

---

## 6｜当前研发状态

```text
五轴单轴核心定义        → 已收束
五轴十元固定映射        → 已固定
跨轴传统相生验证        → 5/5 PASS
跨轴传统相克验证        → 5/5 PASS
R3 总验收              → 10/10 PASS
主动扩理论             → 停止
维护模式               → regression-only
```

R3 结论：现有五轴结构无需为了传统五行生克交换五行身份、交换十元两极或重写核心变量。

当前策略：

```text
不再为了“还能发现什么”继续加卡。
只在真实自然语言误判、解释器失败、视觉审核失败或项目应用出现不可由现有 guard 解释的 failure 时，定点重开对应轴。
```

---

## 7｜failure 驱动重开规则

只有出现以下至少一项时才允许重开五轴理论：

- 新机制：现有核心变量无法解释。
- 新边界：最近邻案例无法由现有 guard 区分。
- 新真实 failure family：重复出现且无法归入旧错误族。
- 五轴生克在真实案例中发生系统性反例。
- 十元解释器稳定输出与五轴判定发生无法消解的结构冲突。

否则：

```text
CLOSED_BY_EXISTING_GUARD
→ 不新增定义
→ 不新增理论卡
→ 不修改 canonical
```

---

## 8｜后续使用方向

五轴 V1.0 从“研究对象”转为“基础设施”，主要服务：

```text
自然语言
↓
十元解释器 / IR
↓
十元判定
↓
五轴定位
↓
生克补关系运算
↓
Z 发散 / 创意重构
↓
图像、剧情、角色、镜头审美审核
```

优先级不再是继续扩五轴，而是让五轴进入真实生成、审核和回归链。

---

## 9｜必读源文件

1. `01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md`
   - 五轴／五行与十元固定身份、核心变量、领域显化的 L1 正本。
2. `07-Codex大脑库/R3_五轴传统五行生克结构验证_PASS_20260914.md`
   - 传统五行 5 生 + 5 克的结构验证，10/10 PASS。
3. 各轴研究卡
   - 仅用于边界、guard、反例和 failure 追踪，不得反向覆盖 L1。

---

## 10｜机器可读冻结块

```yaml
five_axis_v1:
  status: FROZEN_REGRESSION_ONLY
  mapping:
    wood:  {poles: [zx, nx], variable: direction_and_action_right_source, narrative_projection: 因果}
    fire:  {poles: [zn, x], variable: object_independence_and_belonging, narrative_projection: 本体}
    earth: {poles: [n, x并z], variable: inside_outside_boundary_direction, narrative_projection: 空间}
    metal: {poles: [xn, z], variable: operation_and_adjudication_center, narrative_projection: 时间}
    water: {poles: [xz, nz], variable: reversibility_and_object_specific_reentry, narrative_projection: 命运}
  generation:
    - wood->fire
    - fire->earth
    - earth->metal
    - metal->water
    - water->wood
  overcoming:
    - wood->earth
    - earth->water
    - water->fire
    - fire->metal
    - metal->wood
  semantics:
    generation: structural_condition_generation
    overcoming: legal_state_space_constraint
  r3:
    passed: 10
    total: 10
    axis_revision_required: false
  maintenance: regression_only
```

**五轴 V1.0 到此封版。**
