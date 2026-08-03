---
type: narrow-is-a-inheritance-canon
status: canonical-current
version: v1.0
updated: 2026-08-03
level: L1
scope: [五行, 十元, 领域狭义, is-a, 五大主题, 五脏]
upper_canon: L1_十元即阴阳五行相反轴正本_v1.6.md
---

# L1｜五行广义—领域狭义 `is-a` 继承关系协议 v1.0

## 0｜正式关系

```text
子概念 --is-a狭义[domain=具体领域]→ 五行广义父项
```

方向固定为“狭义子项指向广义父项”。

```text
五大主题 --is-a狭义[domain=叙事]→ 五行
五脏     --is-a狭义[domain=生理]→ 五行
```

五行是广义本体；五大主题不是五行之外的平行系统，而是五行进入叙事／主题领域后的狭义形态。肝、心、脾、肺、肾与五行的关系同理。

## 1｜五大主题的 `is-a狭义`

| 叙事领域狭义子项 | `is-a狭义`父项 | 继承十元轴 |
|---|---|---|
| 因果 | 木 | `zx ↔ nx` |
| 本体 | 火 | `zn ↔ x` |
| 空间 | 土 | `n ↔ x并z` |
| 时间 | 金 | `xn ↔ z` |
| 命运 | 水 | `xz ↔ nz` |

标准写法：

```text
因果 --is-a狭义[domain=叙事]→ 木
本体 --is-a狭义[domain=叙事]→ 火
空间 --is-a狭义[domain=叙事]→ 土
时间 --is-a狭义[domain=叙事]→ 金
命运 --is-a狭义[domain=叙事]→ 水
```

## 2｜生理领域对照

```text
肝 --is-a狭义[domain=生理]→ 木
心 --is-a狭义[domain=生理]→ 火
脾 --is-a狭义[domain=生理]→ 土
肺 --is-a狭义[domain=生理]→ 金
肾 --is-a狭义[domain=生理]→ 水
```

五大主题与五脏是不同领域的狭义子项，但分别继承同一五行父项。

## 3｜继承与新增

`is-a狭义`子项必须继承：

1. 五行广义核心变量；
2. 同行阴阳十元两端；
3. 五行的相生、相克位置；
4. 对立统一方向。

狭义子项同时增加：

1. 领域名称；
2. 领域对象；
3. 本领域可观察判据；
4. 本领域具象名词；
5. 本领域反例和最近邻。

因此：

```text
因果是木在叙事领域的狭义子项，
但因果不等于木的全部广义外延。
```

## 4｜与其他关系区分

```text
is-a狭义 ≠ 完全等号
is-a狭义 ≠ 仅仅映射／类比
is-a狭义 ≠ part-of
is-a狭义 ≠ instance-of
is-a狭义 ≠ 生／克／补关系
```

示例：

```text
因果 --is-a狭义[叙事]→ 木
某作品中的复仇因果结构 --instance-of→ 因果
```

具体案例属于主题实例；主题才是五行的领域狭义子项。不得把案例直接写成“五行本体”。

## 5｜新领域保存规则

每建立一个新领域五行表，必须同时保存五条 `is-a狭义` 边：

```yaml
relation_type: is_a_narrow
child: 领域狭义名称
parent: 木|火|土|金|水
domain: 叙事|生理|发型|角色行为|音乐|游戏|其他
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

缺少 `parent`、`domain`、继承轴或领域证据时，不得标记为正式狭义定义。

## 6｜防错纪律

禁止：

- 把五大主题写成与五行互不相关的第二套系统；
- 把五大主题直接写成五行全部广义本体；
- 只写十元点位相同，却不保存 `is-a狭义` 继承边；
- 把“叙事”误写成五大主题的五行父项；叙事是领域限定，五行才是广义父项；
- 从肝、颜色、季节等狭义词直接倒推所有领域中的具体十元行为。

## 7｜机器可读总表

```yaml
is_a_narrow_relations:
  narrative:
    因果: {parent: 木, poles: [zx, nx]}
    本体: {parent: 火, poles: [zn, x]}
    空间: {parent: 土, poles: [n, x并z]}
    时间: {parent: 金, poles: [xn, z]}
    命运: {parent: 水, poles: [xz, nz]}
  physiology:
    肝: {parent: 木}
    心: {parent: 火}
    脾: {parent: 土}
    肺: {parent: 金}
    肾: {parent: 水}
```
