---
type: five-axis-character-generator-application-layer
status: candidate
knowledge_status: candidate
authority_level: L5
version: v0.4
created: 2026-09-04
updated: 2026-09-04
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
| nz | - | - | - | - | - | - | - | - | - | - | - | - |
| n | - | - | - | - | - | - | - | - | - | - | - | - |
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

### z 口径同步债

已登记且仍未由应用层裁决：

```text
L1 v1.6：xn↔z = 运行权与裁定重心配置；z 端收束到单一最高裁定点
z 信息卡/准度卡：z = 明确认可主体对明确对象完成看见、回应、确认
旧 z 行为库 evidence-locked：仍保留“单点最高化、认可非必要”口径
```

应用层只使用 current L1 与 current z 信息卡/准度卡的安全交集，并禁止旧行为库反向覆盖 current 卡。

### zn 世界观应用原则

```text
zn 世界观不以“信仰题材、圣光、太阳、火焰、英雄牺牲”成立。
优先生成：
- 原则跨阶段未来调用；
- 无奖励/无认可时仍成立；
- 冲突中拥有排序资格；
- 与 x 资源归属分层；
- 原则可修订但必须保留可说明的边界与未来资格。
```

## 7｜执行层状态 v0.2

已新增：

```text
实现/generator_core_v0.1.js
实现/generator_core_v0.1.test.js
实现/generator_core_v0.2.js
实现/generator_core_v0.2.test.js
数据/世界观_机器映射_v0.1.json
测试/世界观_压力测试_R1_20260904.md
```

### structure_id

统一为：

```text
symbol
+ module
+ changed_variable
+ relation_shape
+ module_grammar
```

以下内容 **不得进入 structure_id**：

```text
concrete_candidate
颜色
职业
角色名
genre_context
genre_translation
```

因此“中古挑战席”和“赛博权限挑战节点”若 underlying structure 相同，只算一个结构换皮，不得重复增益。

### 当前真实实现

`generator_core_v0.2.js` 已实现：

1. `single`：同一十元在指定模块内抽取可用映射；
2. `multi`：同一模块内允许一个 primary + 多个 secondary，强制显式职责与 relation_source；
3. `graph`：输出无向量节点—关系路径，不输出权重；
4. deterministic seed：相同 seed + nonce 得到可复现结果；
5. selective reroll：递增 nonce 重抽；
6. module lock：锁定模块在重抽时完整保留；
7. pending/rejected gate：`rejected` 永不进入运行池，`pending-review` 默认排除；
8. structure dedupe：具象名词和题材换皮不会制造新结构；
9. pseudo-vector guard：拒绝 multi 中的 weight / ratio / percent。

### 当前机器数据覆盖

`数据/世界观_机器映射_v0.1.json` 已投影：

- zx 世界观：5 条；
- z 世界观：5 条，全部保持 `pending-review`，默认运行时不可用；
- zn 世界观：5 条。

该 JSON 只是 Markdown 应用映射的运行时投影，不拥有高于源映射的理论权限。

### 回归测试

`generator_core_v0.2.test.js` 当前覆盖：

- 机器映射 schema 校验；
- 换皮 structure_id 去重；
- seed 可复现；
- z pending 默认隔离；
- 同一世界观模块的 zx primary + zn secondary 多符号组合；
- 百分比炖汤拒绝；
- graph 模式无伪向量；
- multi 模块锁定。

本地 Node 22 试跑结果：`ALL_TESTS_PASS`。这只是执行层测试，不代表任何十元理论获得 canonical 升格。

## 8｜下一轮

理论映射轮转仍按覆盖最少推进：`nz × 世界观`。

执行层下一优先级：

1. 新增 `genre_translation` 的真正题材翻译规则，避免只换 genre 标签；
2. 当 `nz × 世界观` 完成后同步加入机器映射 JSON；
3. 世界观横向覆盖达到至少 5 个十元后，再做 R2 运行时 60+ 样本压力测试；
4. 服装模块开始产生可靠映射后，测试跨模块 lock / reroll，而不是用测试假数据冒充生产覆盖；
5. 一生模块未建立前，`life_order_error_rate` 继续标记 `NOT_IMPLEMENTED`。
