---
type: five-axis-character-generator-application-layer
status: candidate
knowledge_status: candidate
authority_level: L5
version: v0.2
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
- 必须先声明主符号负责的变量与模块；
- 副符号必须有明确职责与来源；
- 不使用“70% zx + 30% nx”之类伪精确百分比替代结构关系。

### 无向量尺标
- 只记录节点、关系、路径与模块职责；
- 不生成强弱分数，不把审美强度伪装成理论体量。

## 3｜候选映射字段

每条记录必须有：

`symbol / module / sub_semantic / changed_variable / relation_shape / concrete_candidate / genre_context / positive_reason / nearest_neighbor / why_not_neighbor / removal_test / reverse_test / counterexample / source_evidence / confidence / status`

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
| zn | - | - | - | - | - | - | - | - | - | - | - | - |
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

## 6｜当前进度

### 已完成
- `zx × 世界观` → `映射/zx_世界观_v0.1.md`
- `z × 世界观` → `映射/z_世界观_v0.1.md`，当前为 `pending-review`

### z 口径同步债

本轮发现并明确登记：

```text
L1 v1.6：xn↔z = 运行权与裁定重心配置；z 端收束到单一最高裁定点
z 信息卡/准度卡：z = 明确认可主体对明确对象完成看见、回应、确认
旧 z 行为库 evidence-locked：仍保留“单点最高化、认可非必要”口径
```

应用层不裁决该冲突。`z × 世界观` 只使用 current L1 与 current z 信息卡/准度卡的安全交集，并禁止旧行为库反向覆盖 current 卡。

### 下一轮

按覆盖最少与固定轮转，下一目标：`zn × 世界观`。
