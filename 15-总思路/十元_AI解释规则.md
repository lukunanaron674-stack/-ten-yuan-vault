---
title: 十元 AI 解释规则
type: ten-yuan-interpreter-rules
status: current-readonly-consolidation
version: v1.0
updated: 2026-09-17
authority_level: L3
may_override_canonical: false
required_fields:
  - actor
  - object
  - current_window
  - changed_variable
  - relation_shape
  - decision_right
  - reentry_right
  - current_state
  - endpoint
---

# 十元 AI 解释规则

> 目标：让 Codex、DeepSeek、Qwen 先还原结构，再调用现行信息卡与准度卡做十元映射。自然语言里的相似词只能作为待检索线索，不能直接成为标签。

## 1｜硬规则：不是关键词判断

```text
自然语言词面
≠
十元结论
```

禁止以下捷径：

| 词面或表面元素 | 不能直接推出 |
|---|---|
| 独立、自由、强大 | `x`、`zx` 或 `zn` |
| 中心、焦点、核心 | `z` |
| 秩序、流程、时间表 | `xn` |
| 危险、火、爆炸、黑红 | `xz` |
| 房间、容器、厚重、保护 | `n` |
| 包装、传播、扩散、外壳 | `x并z` 或 `zn` |
| 依恋、温柔、拥抱 | `nz` |
| 服从、被动、沿路走 | `nx` |

表面元素只能进入 `observations` 或 `shortcut_risk`。结论必须由对象、关系、变量、权利、路径和时间窗口支持。

## 2｜解释顺序

### Step 0｜锁定范围

先写：

```yaml
analysis_object:
analysis_domain:
analysis_scale:
object_layer: person | state | action | relation | field | visual | narrative | other
current_window:
source_scope:
```

`current_window` 必须是可复核的片段、阶段、前后状态或视觉帧范围。不能把整部作品、整个人物或整张图的印象当成单一窗口。

### Step 1｜抽取 actor 与 object

```yaml
actor:
object:
secondary_objects: []
audience_or_recipient:
```

- `actor` 是正在施加、组织、让位、承载、收束或保留路径的一方；不一定是画面中心人物。
- `object` 是被改变的具体对象、对象集合、关系接口或状态；必须写清层级。
- 若存在两个不同对象层或两条独立箭头，拆成两个 IR，标记 `SPLIT_IR`，不得互相回填。

### Step 2｜写 current_state

```yaml
current_state:
  before:
  during:
  after_if_known:
  observable_facts: []
  unverified_assumptions: []
```

只写可观察事实和明确来源。把“看起来像”“感觉是”“剧情应该”放进 `unverified_assumptions`，不得放进结论字段。

### Step 3｜找唯一的 changed_variable

```yaml
changed_variable:
  name:
  before:
  after:
  evidence:
```

优先检查：

```text
方向来源、归属边界、成立资格、承载能力、公开接口、运行流程、认可焦点、路径集合、回返权、可逆性、时间窗口
```

一句话若同时改变多个独立变量，先拆边；不能为了让标签成立而把不同变量合并成“局势变化”。

### Step 4｜描述 relation_shape

```yaml
relation_shape:
  source:
  target:
  direction: inward | outward | distributed | convergent | divergent | bidirectional | none
  mechanism:
  dependency:
  replacement_or_support:
```

关系形状先用自然语言和结构字段描述，再检查是否能进入某个十元。`生`、`克`、`补`必须经过 [[十元_生克补关系]] 的关系门，不得用来代替 `relation_shape`。

### Step 5｜抽取权利与路径

```yaml
decision_right:
  holder:
  scope:
  type: use | allocate | operate | veto | adjudicate | none | unknown
reentry_right:
  holder:
  object_specific: true | false | unknown
  can_return: true | false | conditional | unknown
  can_repair_or_reopen: true | false | conditional | unknown
path_set:
  available_before: []
  available_after: []
  blocked: []
  opened: []
```

不要把名义头衔、构图位置、一次授权或道具存在误写成现实决定权；不要把“还能回来”误写成已经存在的对象特异回返权。

### Step 6｜形成 endpoint 候选

```yaml
endpoint:
  primary_candidate:
  secondary_candidates: []
  candidate_basis: []
  counterevidence: []
  nearest_neighbors: []
```

调用顺序固定为：

```text
现行信息卡
→ 现行准度卡
→ 对应视觉狭义卡（仅视觉对象）
→ 生克补关系卡（仅已成立的两端）
→ 动态链 / 五轴投影（需要时）
```

现行入口：[[01-十元系统/十元体系密度卡总览]]、[[01-十元系统/03-十元准度卡/README_准度卡总控_v0.6]]、[[十元_核心定义]]。

### Step 7｜复核后输出

至少完成：

1. 必要条件检查；
2. 至少两个最近邻排除；
3. `removal_test`：拿掉核心变量后结论是否下降；
4. `reverse_test`：反向操作是否恢复或改变端点；
5. `third_factor_test`：是否有更简单的第三因素解释；
6. 去掉文字、颜色、题材和职业后的独立证据检查。

## 3｜端点置信度

沿用准度卡总控的六项端点置信度，分别记录，不把它们混成一枚“感觉分”：

```yaml
endpoint_confidence:
  object_layer: 0-100
  endpoint_fit: 0-100
  neighbor_exclusion: 0-100
  evidence_independence: 0-100
  removal_reverse: 0-100
  cross_context: 0-100
  final: min_of_six
```

没有可观察证据时写 `unscored` 或 `待证据`，不得填一个看似精确的数字。十元配比度、本征映射准度、体量、纯度、端点置信度和动态链质量分数分别保存。

## 4｜不确定输出协议

出现以下任一情况，禁止强行归类：

```text
UNDETERMINED      关键字段缺失
NEEDS_EVIDENCE    需要真实前后状态、序列或来源
SPLIT_IR          同一句含多个对象层 / 独立因果箭头
NEAREST_TIE       最近邻无法排除
SOURCE_CONFLICT   现行来源与工作/视觉来源冲突
```

固定输出：

```text
【判断对象与窗口】
【对象层】
【actor / object】
【current_state】
【changed_variable】
【relation_shape】
【decision_right / reentry_right / path_set】
【十元主候选 / 次候选】
【必要条件与反证】
【最近邻 / 拿掉 / 反向 / 第三因素】
【置信度与最弱项】
【不确定项】
```

## 5｜高风险反例

- 有刀、尖角或危险题材，不等于语义层 `x`；语义层 `x` 仍须证明“归我掌握”。视觉窄义卡只在视觉子域内使用。
- 有爆炸、火焰或黑红，不等于 `xz`；必须检查当前 `xz` 主本体或明确的危险显影结构，并标记来源版本。
- 房间里有人，不等于 `n`；必须证明真实承载、保护、处理与持续维持。
- 中心构图，不等于 `z`；必须有多路径、注意力或资源向同一焦点收束。
- 流程连续，不等于 `xn`；必须有可重复运行、规则节点或主动组织。
- 同框、不对称、冲突、成长、包装，不自动证明生克补关系。
- `五维`主题和`五轴`结构都不能反向替换十元端点。

## 6｜机器可读规则

```yaml
ten_yuan_interpreter:
  order:
    - scope_and_window
    - actor_and_object
    - object_layer
    - current_state
    - changed_variable
    - relation_shape
    - rights_and_paths
    - endpoint_candidates
    - nearest_neighbor_and_counterfactuals
    - confidence
    - optional_relation_dynamic_axis_projection
  required_fields:
    - actor
    - object
    - current_window
    - changed_variable
    - relation_shape
    - decision_right
    - reentry_right
    - current_state
    - endpoint
  no_keyword_shortcut: true
  split_independent_arrows: true
  preserve_source_conflicts: true
  unknown_is_valid_output: true
  relation_requires_two_stable_endpoints: true
```
