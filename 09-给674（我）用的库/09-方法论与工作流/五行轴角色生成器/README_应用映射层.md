---
type: five-axis-character-generator-application-layer
status: candidate
knowledge_status: candidate
authority_level: L5
version: v0.6
created: 2026-09-04
updated: 2026-09-05
scope: [五行轴角色生成器, 应用映射, 世界观, 服装, 发型, 人生, 具象名词, 题材翻译]
may_override_canonical: false
canonical_read:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
---

# 五行轴角色生成器｜应用映射层

> 这是创作应用层，不是十元定义层。任何具象名词、颜色、职业、服装、发型、题材都不得反向定义十元。

## 1｜固定编译链

```text
十元
→ 可验证 sub_semantic / changed_variable
→ relation_shape
→ module_grammar
→ concrete_candidate
→ genre_translation
```

三类内容必须分账：

1. **理论事实**：只从 current canonical / 信息卡 / 准度卡读取，本目录无权修改。
2. **应用规则**：把理论变量翻译成可生成的结构语法，只能是 candidate / evidence-supported / pending-review。
3. **具象候选**：建筑、衣服、发型、物件、职业、事件等，只是载体；禁止写成“某名词 = 某十元”。

## 2｜三种生成模式

### 单符号
- 所有模块来自同一十元；
- 模块之间允许抽取不同 sub_semantic；
- 任何模块不得用邻居十元的结果偷渡补齐视觉丰富度。

### 多符号
- 同一模块允许“主结构 + 副结构约束”；
- 每个模块必须明确 `primary.symbol + responsibility`；
- 每个 secondary 必须明确 `symbol + responsibility + relation_source`；
- 不使用 `70% zx + 30% zn`、weight、ratio 一类伪精确权重替代结构关系；
- 主副都必须从各自已存在的应用映射中取值，不能临时编一个“混合十元”。

### 无向量尺标
- 只记录节点、关系、路径与模块职责；
- 不生成强弱分数，不把审美强度伪装成理论体量。

## 3｜候选映射字段

每条研究记录必须有：

`symbol / module / sub_semantic / changed_variable / relation_shape / concrete_candidate / genre_context / positive_reason / nearest_neighbor / why_not_neighbor / removal_test / reverse_test / counterexample / source_evidence / confidence / status`

进入机器可读投影时额外必须提供：

`module_grammar / id / genre_translation`

状态只允许：

- `candidate`
- `evidence-supported`
- `rejected`
- `pending-review`

本层不得自动升级 `canonical`。

## 4｜覆盖矩阵

模块顺序：世界观 → 服装 → 发型 → 身体/脸 → 道具 → 身份/工作 → 行为 → 关系 → 一生/生命周期 → 构图/空间 → 具象名词 → 题材翻译。

| symbol | 世界观 | 服装 | 发型 | 身体/脸 | 道具 | 身份/工作 | 行为 | 关系 | 一生 | 构图/空间 | 具象名词 | 题材翻译 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| zx | v0.1 | - | - | - | - | - | - | - | - | - | - | - |
| z | v0.1-pending | - | - | - | - | - | - | - | - | - | - | - |
| zn | v0.1 | - | - | - | - | - | - | - | - | - | - | - |
| nz | v0.1 | - | - | - | - | - | - | - | - | - | - | - |
| n | v0.1 | - | - | - | - | - | - | - | - | - | - | - |
| nx | - | - | - | - | - | - | - | - | - | - | - | - |
| xn | - | - | - | - | - | - | - | - | - | - | - | - |
| x | - | - | - | - | - | - | - | - | - | - | - | - |
| xz | - | - | - | - | - | - | - | - | - | - | - | - |
| x并z | - | - | - | - | - | - | - | - | - | - | - | - |

## 5｜轮转纪律

覆盖最少时按：

`zx → z → zn → nz → n → nx → xn → x → xz → x并z`

同一十元内部按模块顺序补最少覆盖。若后续压力测试发现某格失败，可回退重审，但不得借失败直接改理论正本。

## 6｜当前映射进度

### 已完成
- `zx × 世界观` → `映射/zx_世界观_v0.1.md`
- `z × 世界观` → `映射/z_世界观_v0.1.md`，当前为 `pending-review`
- `zn × 世界观` → `映射/zn_世界观_v0.1.md`
- `nz × 世界观` → `映射/nz_世界观_v0.1.md`
- `n × 世界观` → `映射/n_世界观_v0.1.md`

### z 口径同步债

```text
L1 v1.6：xn↔z = 运行权与裁定重心配置；z 端收束到单一最高裁定点
z 信息卡/准度卡：z = 明确认可主体对明确对象完成看见、回应、确认
旧 z 行为库 evidence-locked：仍保留“单点最高化、认可非必要”口径
```

应用层只使用 current L1 与 current z 信息卡/准度卡的安全交集，并禁止旧行为库反向覆盖 current 卡。

### zn 世界观应用原则

```text
原则跨阶段未来调用
无奖励/无认可时仍成立
冲突中拥有排序资格
与 x 资源归属分层
原则可修订但保留可说明边界与未来资格
```

### nz 世界观应用原则

```text
对象特异
自由退出
真实可回返
冲突后可修复
共同关系证据连续
```

`nz` 不以温暖、家、等待、怀旧、婚姻、同住成立；这些只可作为具象载体。若离开被惩罚或强制召回，优先检查 `x/xn`；若未来选择与退路持续收窄，优先检查同轴 `xz`。

### n 世界观应用原则

```text
真实外→内准入
可持续内部位置
跨阶段现实负荷处理
外部压力下仍保持一定承载连续性
不得强制扣留
重复进入后仍能真正接住
```

`n` 不以家庭、医院、避难所、房屋、温暖、母亲或善良成立；这些只可作为具象载体。若只有外部可识别入口而内部没有真实位置与负荷处理，优先检查同轴 `x并z`；若成员不能自由退出，优先检查 `x/xn/zx` 控制结构。

## 7｜执行层状态 v0.2

已实现 `generator_core_v0.2.js`：single / multi / graph、deterministic seed、selective reroll、module lock、pending/rejected gate、structure dedupe、pseudo-vector guard。

### structure_id

```text
symbol + module + changed_variable + relation_shape + module_grammar
```

`concrete_candidate / 颜色 / 职业 / 角色名 / genre_context / genre_translation` 均不得进入 structure_id。

### 当前机器数据覆盖

`数据/世界观_机器映射_v0.1.json` 当前投影：

- zx 世界观：5 条；
- z 世界观：5 条，全部 `pending-review`；
- zn 世界观：5 条；
- nz 世界观：5 条，全部 `candidate`；
- n 世界观：5 条，全部 `candidate`。

共 25 条运行时映射，其中 z 默认不进入生产池。机器 JSON 只是 Markdown 应用映射投影，不拥有更高理论权限。

世界观横向覆盖现已达到 5 个十元位置，满足进入 R2 60+ 运行时压力测试的覆盖前提；压力测试属于执行层独立工作，不在本轮映射研发中冒充已完成。

## 8｜下一轮

理论映射轮转按覆盖最少进入：`nx × 世界观`。

执行层并行优先级：

1. 继续补真实 `genre_translation`，避免只换 genre 标签；
2. 以当前 5 个世界观十元位置启动 R2 60+ 运行时压力测试；
3. 服装模块开始产生可靠映射后，再测试跨模块 lock / reroll；
4. 一生模块未建立前，`life_order_error_rate` 继续标记 `NOT_IMPLEMENTED`。
