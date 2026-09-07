---
type: z-divergence-query-coordinate-mutation-run
level: L4
status: research-only
maturity: candidate
may_override_canonical: false
operator_id: OP-006
operator_name: EXPAND_SHRINK_CURRENT_WINDOW
semantic_ir_dependency: ten-yuan-semantic-ir-v0.1
semantic_ir_decision_dependency: ten-yuan-semantic-ir-decision-v0.1
source_commits:
  - 46072b2b7573d10377caec6381859bc823f3104c
  - b8952982c5f35da5272bf4d1f5ce5a88049bd181
updated: 2026-09-07
---

# Z发散器运行记录｜OP-006 EXPAND_SHRINK_CURRENT_WINDOW

> research-only。current canonical、十元语义解释器、L1/L2、信息卡、准度卡、正式关系卡与行为 evidence 正本均只读。本 operator 只改变查询时间窗；任何输出必须重建 Semantic IR，再进入 current 十元语义解释器与结构判定接口，不得继承原十元标签。

## 0｜为什么值得保留

当前 Z 已经能换对象层、冻结 changed_variable 跨 context、枚举 path_set、替换 decision holder、移除现实条件，但仍有一个高频污染源：把不同时段的现实结构揉成一个“人物长期属性”。

典型错误包括：
- 曾经能回返 ≠ 当前仍可回返；
- 后来获得权限 ≠ 当前已经拥有权限；
- 最终失败 ≠ 当前 path_set 已经归零；
- 历史借关系进入 ≠ 当前仍依赖该 relation_source；
- 一次确认节点 ≠ 整段生命周期持续有效。

因此本 operator 不检索更多案例，而是改变“什么时段值得被检索”：冻结 actor/object/object_layer/changed_variable，只伸缩 current_window，观察 decision_right、path_set、reentry_right、future_endpoint、relation structure 与 reality_anchor 在不同窗口是否发生状态变化。

## 1｜operator contract

```yaml
operator_name: EXPAND_SHRINK_CURRENT_WINDOW
mutation_type: expand_shrink_current_window

input_ir_prerequisites:
  required:
    - actor
    - object
    - object_layer
    - current_window
    - changed_variable
    - reality_anchor
  preferred:
    - relation_source
    - relation_shape
    - decision_right
    - path_set
    - reentry_right
    - future_endpoint

mutated_fields:
  - current_window

frozen_fields:
  - actor
  - object
  - object_layer
  - changed_variable
  - target_predicate

conditionally_rederived_fields:
  - relation_source
  - relation_shape
  - decision_right
  - path_set
  - reentry_right
  - future_endpoint
  - reality_anchor

validation_hook: REBUILD_IR_THEN_REINTERPRET_WITH_CURRENT_TEN_YUAN_SEMANTIC_INTERPRETER_AND_DECISION_GATE
```

## 2｜允许的 window mutation

只允许对同一对象层做相邻时间窗变换：

```text
W0      = 当前测试窗口
W-shrink= 缩到包含最关键 trigger→observable_result 的最小充分窗口
W-expand= 向前或向后扩一段，直到出现第一个真实结构状态变化
```

禁止把 current_window 扩成“整个人生/整部作品”后再给人物下长期标签。若扩窗必须换 object、object_layer 或 changed_variable，返回 `WINDOW_EXPANSION_REQUIRES_REEXTRACTION`。

## 3｜query_template

```text
给定 current Semantic IR：
actor={actor}
object={object}
object_layer={object_layer}
current_window={current_window}
changed_variable={changed_variable}
relation_source={relation_source}
relation_shape={relation_shape}
decision_right={decision_right}
path_set={path_set}
reentry_right={reentry_right}
future_endpoint={future_endpoint}
reality_anchor={reality_anchor}

执行 EXPAND_SHRINK_CURRENT_WINDOW：

A. 冻结 actor/object/object_layer/changed_variable/target_predicate。
B. 先做 W-shrink：缩到仍能保留 trigger、关键 action 与 observable_result 的最小充分窗口。
C. 再做 W-expand-before 与 W-expand-after：每次只扩到第一个结构状态变化点，不无限延伸。
D. 对每个窗口重新提取 relation_source / relation_shape / decision_right / path_set / reentry_right / future_endpoint / reality_anchor。
E. 比较三类 delta：
   1) state persisted；
   2) state activated/deactivated；
   3) field became unknown because anchor left the window。
F. 若变化只是叙事信息增加、但 IR 字段结构不变，则标 WINDOW_EXPANSION_NO_GAIN。
G. 若只是把人物更多剧情塞进来，标 REJECTED_RETRIEVAL_ONLY。
H. 若只是“早期/中期/晚期”换标签却无结构边界，标 REJECTED_RESKIN。
I. 不判十元。每个窗口独立重建 IR，再交 current 十元语义解释器与 decision gate。
```

## 4｜expected xn activation

该 operator 预期激活 AI 已有的大量时间运行结构知识，例如：

```text
phase transition
handoff
activation / deactivation
expiry
renewal
retry
fallback activation
permission grant / revoke
gate opening / closure
resource exhaustion
reentry restoration
sequence boundary
before/after dependency
```

这里的 xn activation 仅指更容易检索到“跨阶段运行结构”。窗口扩张后出现 sequence、handoff、节点，不代表十元 `xn=true`；仍必须由 current interpreter 重新判定。

## 5｜核心 guards

### G1｜history presence ≠ current activation
某条 relation/path/permission 曾经存在，不代表 W0 当前仍激活。

### G2｜future outcome ≠ current endpoint lock
后来失败、死亡、被捕、项目取消，不得倒灌为当前窗口 path_set 已归零或 future_endpoint 已锁定。

### G3｜later authority ≠ current decision_right
后期获得 final authority 不能填入早期窗口。

### G4｜past route ≠ current dependency
历史上靠某关系/许可进入，不代表当前推进仍存在 removal gap。

### G5｜window shrink cannot amputate causally necessary anchor
缩窗若删掉使当前字段成立的必要 trigger/reality anchor，该字段必须变 unknown，而不是沿用原值。

### G6｜window expansion cannot merge lifecycle states
若扩窗跨过 ON→OFF、candidate→confirmed、callable→blocked 等边界，必须分阶段，不得平均成“长期如此”。

### G7｜state absence ≠ opposite-pole presence
某字段在新窗口失效，只能先判该状态不成立；不得自动推出同轴对端成立。

### G8｜same actor ≠ same object state
人物没换，但 object/object_layer 的现实状态可随窗口改变。时间连续不等于结构连续。

### G9｜decision gate is window-local
最新 `ten-yuan-semantic-ir-decision-v0.1` 只对当前重建 IR 的已知字段工作；不能拿别的时间窗字段补齐 required_fields。

## 6｜failure modes

```yaml
failure_modes:
  - REJECTED_RESKIN: 仅把“早期/中期/晚期”换成别的时间词，IR 无变化
  - REJECTED_RETRIEVAL_ONLY: 只是要求更多剧情/更多案例
  - BIOGRAPHY_FLATTENING: 把整个人生压成一个长期标签
  - FUTURE_LEAKAGE: 用后续结局填当前字段
  - PAST_LEAKAGE: 用历史 route/authority 填当前字段
  - WINDOW_OVEREXPANSION: 扩窗跨多个状态边界仍不拆段
  - WINDOW_OVERSHRINK: 缩窗删掉必要 reality anchor 后仍沿用原值
  - OBJECT_LAYER_DRIFT: 为了制造变化偷偷换层
  - VARIABLE_DRIFT: changed_variable 随窗口改写
  - LIFECYCLE_AVERAGING: ON/OFF/UNKNOWN 被平均为“总体存在”
  - LABEL_INHERITANCE: 原窗口十元标签直接继承到新窗口
```

## 7｜stop condition

满足任一即停止：

1. W-shrink 已达到 trigger→observable_result 的最小充分窗口；
2. W-expand 遇到第一个明确 IR 状态变化点；
3. 继续扩张必须改变 object/object_layer/changed_variable；
4. 连续两个相邻扩张只增加叙事事实、不增加结构 delta；
5. reality anchor 离开窗口导致字段只能 unknown；
6. 已得到一个清晰 lifecycle transition，立即重建 IR，不继续把整部作品吞进来。

## 8｜when_not_to_use

- 问题是对象层不清：先用 SHIFT_OBJECT_LAYER；
- 问题是路径成员不清：先用 ENUMERATE_PATH_SET；
- 问题是谁握权：先用 REPLACE_DECISION_HOLDER；
- 问题是某条件是否必要：先用 REMOVE_CONDITION；
- 只想找更多相似阶段/案例：属于 retrieval-only；
- 没有可定位 trigger 或 reality anchor：禁止声称 lifecycle transition。

## 9｜跨领域测试

> 以下只验证 operator 是否打开不同结构查询空间，不累计为 xn 或任何十元 evidence。

### T1｜《红楼梦》宝黛关系｜reentry 的窗口污染

冻结 actor=贾宝玉、object=与林黛玉的原关系、object_layer=bilateral-reentry、changed_variable=现实回返资格。

- W0：一次冲突后到双方现实重新接触与修复。
- W-shrink：只保留冲突 trigger→重新接触→回应/修复。
- W-expand-after：扩到关系对象发生不可逆现实变化的阶段。

新查询空间：区分“曾经可修复”“当前仍可修复”“对象层现实接口已消失”。不得用后期 hard-off 倒写早期，也不得由 `reentry_right=false` 自动推出对端十元。

结果：PASS。

### T2｜《西游记》孙悟空被逐与回返｜关系资格 ON/OFF/ON

冻结 actor=孙悟空、object=师徒关系回返、object_layer=bilateral-reentry、changed_variable=当前 reentry 是否可调用。

- W0：被逐后的即时窗口；
- W-expand-after：扩到现实回返接口重新打开；
- W-shrink：分别切出“被逐成立”与“回返成立”的最小窗口。

新查询空间：历史成员身份、当前被逐状态、后续恢复不能混成“他一直都是团队成员”。

结果：PASS。

### T3｜《三国演义》关羽麦城｜最终失败泄漏

冻结 actor=关羽、object=保持控制/脱离包围的现实路径、object_layer=escape-control path set、changed_variable=当前可调用 relevant paths。

- W0：选择并执行某条撤离路线前后；
- W-shrink：只测试该 chosen path；
- W-expand-after：扩到更多路径被验证关闭的阶段。

新查询空间：`chosen path failed` 与 `complete relevant path set exhausted` 被时间窗拆开；最终被擒不得倒灌成早期 path_count=0。

结果：PASS。

### T4｜工程：软件发布权限 grant→revoke

冻结同一 release object、production-deploy layer、changed_variable=当前部署 decision/callability。

- W0：工程师拥有临时 production grant；
- W-shrink：授权生效到一次部署完成；
- W-expand-after：扩到 grant expiry/revoke 后。

新查询空间：`曾有权限`、`当前权限`、`历史执行成功` 分账；过期后 path 可能仍名义存在，但 reality-callability 已改变。

结果：PASS。

### T5｜制度：采购审批额度与任期

冻结 actor=部门负责人、object=同一审批类型、object_layer=approval authority、changed_variable=当前 final decision right。

- W0：其委任与额度授权有效期内；
- W-expand-after：扩到任期届满或 delegation 被撤销；
- W-shrink：只保留一次审批行为本身。

新查询空间：职位称号持续存在时，具体 delegation 是否仍有效；不能用“他一直是负责人”替代 window-local authority。

结果：PASS。

### T6｜现实运维：备用线路从 standby→activated→deactivated

冻结 actor=运维系统、object=同一服务连续性目标、object_layer=failover-routing、changed_variable=当前 callable path set。

- W0：主线路正常，备用仅 standby；
- W-expand-after-1：主线路故障，备用被激活；
- W-expand-after-2：主线路修复，备用回到 standby。

新查询空间：path membership、current callability、active route 三者随时间改变，不能因为备用始终“存在”就视为始终激活。

结果：PASS。

## 10｜防退化 probes

### P1｜REJECTED_RESKIN
“早期/中期/晚期”改写成“第一阶段/第二阶段/第三阶段”，但所有 IR 字段不变。

结果：REJECTED_RESKIN。

### P2｜REJECTED_RESKIN
把“任期内/任期后”换成“授权期/后授权期”，没有 reality anchor 或权限 delta。

结果：REJECTED_RESKIN。

### P3｜REJECTED_RETRIEVAL_ONLY
“再找二十个角色前后变化的故事”。没有 mutation 任何 Semantic IR 坐标。

结果：REJECTED_RETRIEVAL_ONLY。

### P4｜FUTURE_LEAKAGE guard
早期仍有两条现实路径，只因结局最终失败就把 W0 写成 path_set=0。

结果：REJECTED_FUTURE_LEAKAGE。

## 11｜验证结果

```yaml
operator_id: OP-006
operator: EXPAND_SHRINK_CURRENT_WINDOW
accepted_structural_tests: 6
REJECTED_RESKIN: 2
REJECTED_RETRIEVAL_ONLY: 1
REJECTED_FUTURE_LEAKAGE: 1
verdict: ACCEPT_RESEARCH_CANDIDATE
information_gain: high
maturity: candidate
canonical_effect: none
semantic_ir_schema_effect: none
behavior_evidence_effect: none
```

6 个跨领域测试都产生了 window-local IR 差异，而不是题材换皮。最重要的信息增益是：**current_window 不只是过滤器，而是会改变哪些事实有资格进入 IR 字段；因此每次扩缩窗后必须重新提取字段，而不是复用原 IR。**

## 12｜与 current Semantic IR decision interface 的连接

最新 `ten-yuan-semantic-ir-decision-v0.1` 对 candidate gate 只检查当前 IR 的 required_fields 是否已知，并返回 `SYMBOL / AMBIGUOUS / NEEDS_MORE_STRUCTURE / DATA_BLOCKED`。因此本 operator 的强制顺序是：

```text
mutate current_window
→ rebuild all window-sensitive fields
→ validate Semantic IR shape
→ run current structural gates
→ 若字段因窗口变化变 unknown，则接受 NEEDS_MORE_STRUCTURE
→ 禁止从前后窗口借字段补齐 gate
```

这使 `current_window` 从叙事注释升级为真正的结构判定边界，但仍不修改 canonical schema。

## 13｜下一最高价值 mutation

下一轮优先：`REVERSE_RELATION`。

理由：OP-006 已经能识别“同一结构随时间如何开/关”；下一步最有信息增益的是冻结 actor/object/object_layer/current_window/changed_variable，反转 relation_source / relation_shape 的方向，测试：

- A→B 的依赖若改成 B→A，decision_right 是否仍同构；
- borrowed route 反向后是否仍有 removal gap；
- reentry 是单向许可还是 bilateral reality；
- veto/override 是否具有方向不对称；
- 仅把主客体语法调换、现实结构没变时必须 REJECTED_RESKIN。

这样可直接攻击“语言主谓反转 = 关系反转”的常见幻觉。