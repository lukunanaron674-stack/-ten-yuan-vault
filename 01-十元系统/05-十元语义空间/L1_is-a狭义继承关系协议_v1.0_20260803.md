---
type: narrow-is-a-inheritance-canon
status: canonical-current
version: v1.1
updated: 2026-08-03
level: L1
scope: [五行, 十元, 领域狭义, is-a, 五大主题, 五脏, 十元映射度]
upper_canon:
  - L1_十元即阴阳五行相反轴正本_v1.6.md
  - L1_十元映射度协议_v1.0_20260803.md
---

# L1｜五行广义—领域狭义 `is-a` 继承关系协议 v1.1

## 0｜正式关系

```text
子概念 --is-a狭义[domain=具体领域]→ 五行广义父项
```

方向固定为“狭义子项指向广义父项”。

```text
五大主题 --is-a狭义[domain=叙事]→ 五行
五脏     --is-a狭义[domain=生理]→ 五行
```

五行是广义本体；领域狭义子项继承五行轴，但只覆盖该领域中的狭义外延。

## 1｜五大主题的 `is-a狭义`

| 叙事狭义子项 | 五行父项 | 继承十元轴 | 类型轴继承度 |
|---|---|---|---:|
| 因果 | 木 | `zx ↔ nx` | 100 |
| 本体 | 火 | `zn ↔ x` | 100 |
| 空间 | 土 | `n ↔ x并z` | 100 |
| 时间 | 金 | `xn ↔ z` | 100 |
| 命运 | 水 | `xz ↔ nz` | 100 |

标准写法：

```text
因果 --is-a狭义[domain=叙事]→ 木
本体 --is-a狭义[domain=叙事]→ 火
空间 --is-a狭义[domain=叙事]→ 土
时间 --is-a狭义[domain=叙事]→ 金
命运 --is-a狭义[domain=叙事]→ 水
```

## 2｜十元映射度

每条正式 `is-a狭义` 边必须保存十元继承映射度：

```yaml
axis_inheritance_degree: 100
ten_yuan_inheritance_degree:
  同行阳端: 100
  同行阴端: 100
```

两个100表示狭义类型完整继承五行的两端结构，不表示具体案例里两端各占50%。具体案例另用总和为100的实例十元映射度向量。

五条叙事边：

```yaml
因果: {parent: 木, axis_degree: 100, ten_yuan_degree: {zx: 100, nx: 100}}
本体: {parent: 火, axis_degree: 100, ten_yuan_degree: {zn: 100, x: 100}}
空间: {parent: 土, axis_degree: 100, ten_yuan_degree: {n: 100, x并z: 100}}
时间: {parent: 金, axis_degree: 100, ten_yuan_degree: {xn: 100, z: 100}}
命运: {parent: 水, axis_degree: 100, ten_yuan_degree: {xz: 100, nz: 100}}
```

## 3｜生理领域对照

```text
肝 --is-a狭义[domain=生理]→ 木
心 --is-a狭义[domain=生理]→ 火
脾 --is-a狭义[domain=生理]→ 土
肺 --is-a狭义[domain=生理]→ 金
肾 --is-a狭义[domain=生理]→ 水
```

五大主题与五脏是不同领域的狭义子项，但分别继承同一五行父项和同行十元轴。

## 4｜继承与新增

`is-a狭义`子项必须继承：

1. 五行广义核心变量；
2. 同行阴阳十元两端；
3. 五行相生、相克位置；
4. 对立统一方向；
5. 类型轴继承度与两端十元继承度。

狭义子项同时增加：领域名称、领域对象、可观察判据、具象名词、反例与最近邻。

## 5｜与其他关系区分

```text
is-a狭义 ≠ 完全等号
is-a狭义 ≠ 仅仅映射／类比
is-a狭义 ≠ part-of
is-a狭义 ≠ instance-of
is-a狭义 ≠ 生／克／补关系
类型继承映射度 ≠ 实例十元显影比例
```

示例：

```text
因果 --is-a狭义[叙事]→ 木
某作品中的复仇因果结构 --instance-of→ 因果
```

前者保存类型继承度；后者保存具体实例十元映射度。

## 6｜新领域保存规则

```yaml
relation_type: is_a_narrow
child: 领域狭义名称
parent: 木|火|土|金|水
domain: 叙事|生理|发型|角色行为|音乐|游戏|其他
axis_inheritance_degree: 100
ten_yuan_inheritance_degree:
  阳端符号: 100
  阴端符号: 100
inherits:
  - ten_yuan_poles
  - broad_core_axis
  - sheng_ke_position
adds:
  - domain_object
  - narrow_definition
  - observable_evidence
  - concrete_terms
status: draft | evidence-tested | canonical
```

缺少 `parent`、`domain`、十元继承映射度或领域证据时，不得标记为正式狭义定义。

## 7｜防错纪律

禁止：

- 把五大主题写成与五行互不相关的第二套系统；
- 把五大主题直接写成五行全部广义本体；
- 只写十元点位相同，却不保存 `is-a狭义` 边；
- 保存父项却漏掉两端十元映射度；
- 把类型继承度误当成具体案例的十元构成比例；
- 从肝、颜色、季节等狭义词直接倒推其他领域的具体十元行为。

## 8｜机器可读总表

```yaml
is_a_narrow_relations:
  narrative:
    因果: {parent: 木, axis_degree: 100, ten_yuan_degree: {zx: 100, nx: 100}}
    本体: {parent: 火, axis_degree: 100, ten_yuan_degree: {zn: 100, x: 100}}
    空间: {parent: 土, axis_degree: 100, ten_yuan_degree: {n: 100, x并z: 100}}
    时间: {parent: 金, axis_degree: 100, ten_yuan_degree: {xn: 100, z: 100}}
    命运: {parent: 水, axis_degree: 100, ten_yuan_degree: {xz: 100, nz: 100}}
```
