---
name: 刘海98种五行十元分库
version: 1.4.0
status: stable
skill_grade: S
failure_mode: fail-closed
scope: 14-角色库/刘海98种/02_五行十元重组
canonical_path: 14-角色库/刘海98种/02_五行十元重组
canonical: true
critical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/05-十元语义空间/L1_is-a狭义继承关系协议_v1.0_20260803.md
  - 01-十元系统/05-十元语义空间/L1_十元配比度与本征映射准度协议_v1.1_20260803.md
  - ../01_十元分布统计与映射纠偏.md
  - ../SKILL.md
---

# S级 Skill｜刘海98种五行十元分库 v1.4

## 最高口径

```text
五行＝广义对立统一体
五大主题＝五行在叙事领域的狭义子项
```

类型继承保存同行两端各100%的继承度。实例分析另存十元配比度与单十元本征映射准度。

## 双指标

### 十元配比度

回答“一个刘海由哪些十元共同构成”。十项总和必须为100。

当前迁移模型：

```text
主十元配比度＝旧纯度
副十元配比度＝100－旧纯度
其余八项＝0
model＝provisional-two-pole-normalized
```

### 单十元本征映射准度

回答“这个刘海有多像该十元本身”。每个目标十元独立评分0–100，不参与配比总和。

当前种子模型：

```text
目标十元＝正式主十元
本征映射准度＝旧纯度
model＝legacy-purity-seed
视觉本体终审＝pending
```

十元内排名只按本征准度生成，同分共享名次，采用竞赛排名法。

## 数量门禁

```text
木18 = zx6 + nx12
火19 = zn8 + x11
土33 = n21 + x并z12
金18 = xn11 + z7
水10 = xz9 + nz1
总计98
```

## 每张卡最低字段

1. 编号、名称、图片、来源；
2. 五行父项、正式主副十元；
3. 类型十元继承映射度；
4. 十元配比度，总和100；
5. 单十元本征映射准度；
6. 十元内排名与组内样本数；
7. `is-a狭义`继承边；
8. 结构、体量、纯度、证据置信度；
9. 视觉证据、误判边界与原研究链接。

## 自动工具

```text
重建：../tools/rebuild_five_element_canvases.py
继承：../tools/apply_is_a_narrow_semantics.py
配比度：../tools/apply_ten_yuan_mapping_degree.py
本征准度与排行：../tools/apply_ten_yuan_archetype_accuracy.py
来源检查：../tools/check_reference_links.py
综合审计：02_图片与结构审计报告.md
排行榜：05_十元本征映射准度排行榜.md
```

## 失败条件

- 五库总数不等于98；
- 缺配比度或配比总和不等于100；
- 缺本征准度或十元排行榜不完整；
- 使用配比度替代本征准度排名；
- 把配比度、本征准度、纯度、体量、置信度混写；
- 缺图、重复图、冲突标记或Canvas退化。

## 当前输出

```text
00_五行总索引.canvas
五行库/木/木_zx-nx.canvas
五行库/火/火_zn-x.canvas
五行库/土/土_n-x并z.canvas
五行库/金/金_xn-z.canvas
五行库/水/水_xz-nz.canvas
02_图片与结构审计报告.md
04_外链可用性报告.md
05_十元本征映射准度排行榜.md
```
