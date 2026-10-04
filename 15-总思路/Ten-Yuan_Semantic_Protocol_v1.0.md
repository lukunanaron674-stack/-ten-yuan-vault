---
title: Ten-Yuan Semantic Protocol v1.0
type: ten-yuan-machine-readable-protocol
status: active
version: v1.0
updated: 2026-09-17
authority_level: L3
scope: [Codex, DeepSeek, Qwen, 十元解释, 五轴投影, 生克补调用, 动态链]
may_override_canonical: false
canonical_sources:
  - 01-十元系统/十元体系密度卡总览.md
  - 01-十元系统/01-十元信息卡/
  - 01-十元系统/03-十元准度卡/README_准度卡总控_v0.6.md
  - 01-十元系统/04-十元生克补卡/README_生克补卡总控_v2.0.md
  - 01-十元系统/十元生补克表.md
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/05-十元语义空间/README_五轴V1.0总入口_20260916.md
  - 08-生克补动态链研究/动态链质量评估器_v1.0_20260917.md
---

# Ten-Yuan Semantic Protocol v1.0

> 机器可读总规范：自然语言先转成结构化 IR，再映射十元；映射后必须做最近邻、反事实、置信度与来源冲突复核。任何无法证实的字段都可以保持未知。

## 0｜协议地位

```text
本协议＝跨模型的读取、解释、复核和输出接口
不是新的十元正本
不是新的生克补表
不是新的五轴理论
```

优先级遵循根规则：

```text
L0 根规则
→ L1 任务门禁 / 滚动中枢
→ L2 理论正本
→ 本协议与 15-总思路六份整理页
→ L4 审计证据
→ L5 案例、项目和素材
→ L6 归档与旧稿
```

如果同级来源冲突，检查 `type / status / version / supersedes / parent / 当前索引登记`；仍不能裁决时，保存两种说法，输出 `SOURCE_CONFLICT`、`待二审` 或 `未判定`。日期、长度和“总／正本／完成”字样都不能单独提高权力。

## 1｜统一目标

所有模型都必须遵守：

```text
不是：自然语言 → 关键词联想 → 十元
而是：自然语言 → 结构字段 → 必要条件 → 十元候选 → 反例复核 → 关系 / 动态 / 五轴投影
```

必须区分：

```text
十元：对象当前的结构操作端
五轴：十元 × 五行深化的结构层，由同行阴阳十元构成对立统一体
五维：主题／叙事领域的五个狭义问题
生克补：两个已成立端点之间的作用机制
动态链：结构随时间的阶段迁移
视觉 Style Grammar：某一时刻的静态造型结构
```

这些层可以互相引用，但不能互相代替。

## 2｜输入契约

收到自然语言、图像、视频片段、剧本或案例时，先形成以下 IR。字段缺失就写 `unknown`，不得猜填：

```yaml
ten_yuan_ir:
  analysis_object:
  analysis_domain:
  analysis_scale:
  object_layer: person | state | action | relation | field | visual | narrative | other
  current_window:
  source_scope:
  actor:
  object:
  secondary_objects: []
  audience_or_recipient:
  current_state:
    before:
    during:
    after_if_known:
    observable_facts: []
    unverified_assumptions: []
  changed_variable:
    name:
    before:
    after:
    evidence: []
  relation_shape:
    source:
    target:
    direction:
    mechanism:
    dependency:
    replacement_or_support:
  decision_right:
    holder:
    scope:
    type:
  reentry_right:
    holder:
    object_specific:
    can_return:
    can_repair_or_reopen:
  path_set:
    available_before: []
    available_after: []
    opened: []
    blocked: []
  endpoint:
    primary_candidate:
    secondary_candidates: []
    candidate_basis: []
    counterevidence: []
    nearest_neighbors: []
```

`current_window`是硬字段：必须固定当前阶段、片段、帧范围或前后状态。窗口不清楚时不能把整部作品、整个人物或整张图压成一个端点。

## 3｜固定解析顺序

### 3.1 范围与对象

先找 `current_window`、`object_layer`、`actor`、`object`。主体不一定在画面中心；被改变的对象不一定是说话的人。对象层冲突时拆分。

### 3.2 当前状态

把可见／可复核事实与推测分开：

```text
facts → current_state.observable_facts
猜测 → current_state.unverified_assumptions
```

单帧只能支持单帧可见结构；需要前态、触发和后态的判定，必须保留 `NEEDS_EVIDENCE`，不能从一张图补出序列。

### 3.3 改变变量

问：**到底是什么变量从 before 变到 after？**优先检查：

```text
最终方向与作用权来源
归属与掌握边界
对象独立成立资格
内部承载能力
公开识别与调用接口
运行规则与流程槽位
认可焦点
路径集合与时间窗口
对象特异回返权与可逆性
```

如果没有可观察的 `before → after`，只能记为共现、候选或 `none`。

### 3.4 权利、路径和关系形状

现实的使用、调配、运行、否决、裁定、离开、回返和修复权必须与名义头衔、构图中心、道具位置分开。路径集合要写开放、封闭、收窄和重开，而不是只写“危险增加”。

### 3.5 端点候选

端点判定顺序：

```text
当前信息卡
→ 当前准度卡
→ 对应视觉狭义卡（仅视觉域）
→ 最近邻
→ 必要条件 / 拿掉 / 反向 / 第三因素
→ endpoint candidate
```

主／次是当前窗口内的结构排序，不是先验角色标签。配比度、本征映射准度、体量、纯度和置信度必须单独存储。

## 4｜十元映射规则

### 4.1 固定 token

```yaml
ten_yuan_tokens:
  - x
  - z
  - n
  - zn
  - nz
  - xn
  - nx
  - zx
  - xz
  - "x并z"
```

符号大小写只做输入归一化。`x并z`是当前中文 token；遇到历史来源使用不同写法时，必须保存 `source_token`，不能静默改写成当前 token。

### 4.2 当前稳定召回

详细表在 [[十元_核心定义]]。调用时至少要能回答：

```text
X   → 什么对象 / 资源 / 权限进入谁的掌握边界？
Z   → 哪些关系 / 路径 / 注意力 / 资源收束到哪个明确焦点？
N   → 谁真实承载、稳定或处理了谁，同时没有吞并？
ZN  → 哪个内部内容向哪些对象形成可追踪的外向传播？
NZ  → 为哪个特定对象保留了哪条可返回、停靠或重开路径？
XN  → 哪个对象 / 行动被纳入可重复、可纠偏的规则流程？
NX  → 谁让出什么连续份额，使既有关系 / 通道 / 系统继续？
ZX  → 谁先以自身权能启动并占据方向，使外界随后响应？
XZ  → 哪个前置终点或临界结构使选择 / 退路持续收窄？
X并Z → 哪个内部内容经选择的外部呈现层，被特定受众读取并产生反应？
```

上述问题是结构提问，不是把句子里的词替换成 token。

### 4.3 必须显式保留的口径

#### xz

当前 `xz` 信息卡 v2.2 的主本体是“终点前置、未来规定当前方向、路径收窄与汇流”。本协议同时保留用户要求的危险显影句：

```text
XZ＝易燃易爆炸／高反应性／高危险性／低阈值
```

两者在当前来源中没有被同一份 L2 正本无冲突地统一。机器输出必须区分：

```yaml
xz_resolution:
  main: xz_main_endpoint_precedence_and_path_convergence
  retained_hazard: xz_hazard_low_threshold_high_reactivity
  status: SOURCE_CONFLICT_UNRESOLVED
```

“火、爆炸、危险、黑红”只可作为 `shortcut_risk` 或危险显影线索；要命中危险显影，仍需整体蓄积、低阈值触发、非局部且系统性反应等结构证据。不能把灾难题材直接当成 xz。

#### X Style Grammar

最新视觉 Style Grammar 的 X 冻结边界为：

```text
独立形体单元
+ 清晰边界
+ 单元自足
+ 彼此不融合
+ 留有间隔
```

状态是 `FROZEN`，后续低频回归。它是静态视觉语法，不是语义层“归我掌握”的替代；视觉窄义卡 `x＝刀`也只能在声明的视觉子域内调用。不得用几何、颜色、冷酷、黑白、尖角或科技题材单独判 X。

## 5｜映射后复核

十元候选生成后必须回到结构字段复核：

```text
候选十元
→ 逐条检查必要条件
→ 最近邻至少两项
→ 拿掉核心变量
→ 反向操作
→ 第三因素
→ 去掉颜色 / 文字 / 职业 / 题材 / 道具后的独立证据
→ 置信度
→ 保留 / 降级 / 未判定
```

复核输出至少包含：

```text
【必要条件】
【支持证据】
【反证 / 缺口】
【最近邻】
【拿掉测试】
【反向测试】
【第三因素】
【当前状态：纯 / 主 / 辅 / 状态 / 行为 / 场域 / 视觉 / 未判定】
```

## 6｜置信度与不确定

沿用现行准度卡的六项端点评分：

```yaml
confidence:
  object_layer: 0-100
  endpoint_fit: 0-100
  neighbor_exclusion: 0-100
  evidence_independence: 0-100
  removal_reverse: 0-100
  cross_context: 0-100
  final: min_of_six
```

动态链质量另按 Evaluator 的 `节点20 + 边40 + 整链40` 记录；它不是十元端点置信度。关系也不能用质量分替代机制证据。

有效的保守输出：

```text
UNDETERMINED：关键字段不足
NEEDS_EVIDENCE：需要真实序列、来源或前后状态
SPLIT_IR：多个对象层、权利主体、核心变量或独立因果箭头
NEAREST_TIE：最近邻无法排除
SOURCE_CONFLICT：现行来源彼此冲突
```

未知不是失败；强行确定才是协议失败。

## 7｜生克补投影

只有两个端点先稳定成立，才进入关系检查：

```text
source endpoint
+ target endpoint
+ same object layer
+ same changed variable
+ mechanism
+ before / after
→ 生 / 克 / 补 / none
```

最低定义：

```text
生＝源使目标此前不足的核心变量出现或上升
克＝目标真实存在，源使其核心资格、能力或边界下降
补＝两端独立存在，一端填补另一端真实缺口但不替代它
```

同框、相邻、先后、冲突、成长、拼图和题材感都不是充分条件。含独立 `z` 或 `zn` 端点的旧机制继续遵守 `endpoint-redefinition-freeze`，详见 [[十元_生克补关系]]。

## 8｜动态链投影

动态链只在已有端点和关系之上记录时间迁移：

```text
自然语言一句话
+ 【十元主→次】
+ 【向量起点→变化→终点】
```

每条纵向边最低包含：

```text
trigger
→ mechanism
→ changed_variable Δ
→ residue
→ next_affordance
```

横向阶段保存同一时刻的主、次、强度、关系、约束、可供性与权利；纵向迁移保存触发、变量变化、主次迁移、残余、路径和可逆性。两条独立箭头必须 `SPLIT_IR`。详见 [[十元_动态链]]。

## 9｜五轴投影

五轴只在十元端点和当前变量已经明确后调用：

```text
十元操作端
→ 同行阴阳构成五轴
→ 需要时投影五维主题
→ 具体案例证据
```

固定轴：

```text
木＝zx ↔ nx
火＝zn ↔ x
土＝n ↔ x并z
金＝xn ↔ z
水＝xz ↔ nz
```

五轴相生是结构条件生成；五轴相克是合法状态空间约束。传统映射不等于具体案例已经发生生克；五维主题也不能倒推十元。详见 [[五轴_定义]]。

## 10｜禁止捷径清单

```yaml
forbidden_shortcuts:
  - word_to_label
  - color_to_label
  - occupation_to_label
  - emotion_to_label
  - prop_to_label
  - genre_to_label
  - composition_center_to_z
  - danger_or_explosion_to_xz
  - container_or_room_to_n
  - order_word_to_xn
  - public_visibility_to_zx
  - intimacy_to_nz
  - co_occurrence_to_relation
  - sequence_alone_to_relation
  - five_dimension_to_endpoint
  - five_axis_name_to_endpoint
  - visual_style_to_semantic_endpoint
  - dynamic_continuity_to_sheng_ke_bu
  - score_to_theory_truth
```

## 11｜最小回归测试集建议

协议落地后的第一轮不测“模型背不背定义”，而测它能否拒绝近似词和表面图像：

```yaml
regression_suite_v1:
  - x_semantic_vs_zx_public_power
  - x_visual_style_frozen_vs_x_semantic
  - z_real_convergence_vs_composition_center
  - n_real_bearing_vs_empty_container
  - nz_object_specific_return_vs_generic_intimacy
  - xn_repeatable_rule_vs_passive_schedule
  - nx_continuity_cost_vs_simple_obedience
  - xz_main_convergence_vs_hazard_manifestation
  - xz_hazard_structure_vs_disaster_theme
  - x并z_public_interface_vs_pretty_packaging
  - relation_positive_vs_coexistence_negative_vs_shortcut_negative
  - dynamic_edge_with_delta_residue_affordance_vs_event_sequence
  - same_layer_transition_vs_SPLIT_IR_cross_layer_case
  - five_dimension_projection_without_endpoint_back_inference
```

每个测试至少准备：一条正例、一条最近邻、一条去掉关键变量后的负例；输出完整 IR、主次候选、反证、置信度和不确定项。测试结果不能反向修改理论正本，除非达到相应 failure-driven 重开门。

## 12｜总机器规范

```yaml
ten_yuan_semantic_protocol:
  version: "1.0"
  status: ACTIVE
  authority: L3_ROUTING_AND_INTERPRETATION
  may_override_canonical: false
  parse_order:
    - analysis_object
    - analysis_domain_and_scale
    - current_window
    - object_layer
    - actor
    - object
    - current_state
    - changed_variable
    - relation_shape
    - decision_right
    - reentry_right
    - path_set
    - endpoint_candidates
    - nearest_neighbors
    - counterfactuals
    - confidence
    - relation_projection
    - dynamic_chain_projection
    - five_axis_projection
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
  rules:
    natural_language_is_not_label_evidence: true
    source_conflicts_must_be_preserved: true
    unknown_is_valid_output: true
    split_independent_arrows: true
    relation_requires_two_stable_endpoints: true
    dynamic_edge_requires_delta_residue_affordance: true
    five_axis_case_requires_case_evidence: true
    visual_style_does_not_override_semantics: true
    composition_does_not_prove_endpoint: true
  xz:
    main: endpoint_precedence_and_path_convergence
    retained_hazard_phrase: 易燃易爆炸／高反应性／高危险性／低阈值
    conflict_status: unresolved
  x_style:
    status: FROZEN
    boundary: [independent_shape_unit, clear_boundary, self_sufficient, non_fused, spaced]
  uncertainty_codes: [UNDETERMINED, NEEDS_EVIDENCE, SPLIT_IR, NEAREST_TIE, SOURCE_CONFLICT]
```
