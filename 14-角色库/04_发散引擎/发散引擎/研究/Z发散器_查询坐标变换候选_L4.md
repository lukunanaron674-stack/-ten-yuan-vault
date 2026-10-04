---
type: z-divergence-query-coordinate-mutation-research
level: L4
status: research-only
maturity: candidate
may_override_canonical: false
semantic_ir_dependency: semantic-ir-field-contract-v20260906
semantic_ir_dependency_note: "research-local snapshot of current Semantic IR fields; canonical semantic authority remains L1/L2 and current interpreter sources"
source_commits:
  - abbcfbac7fd2286a0aadf47b90d2f390e5ed56d2
  - b9fab18f3d168bf6154bfd955dff89a2afec0bba
updated: 2026-09-06
---

# Z发散器｜查询坐标变换候选 L4

> research-only。Z 的职责不是替十元下结论，而是改变“什么值得被检索”。本文件不得反改 L1/L2 canonical、信息卡、准度卡、正式关系卡或行为 evidence 正本；任何 mutation 输出必须重新经过 current 十元语义解释器。

## OP-001｜SHIFT_OBJECT_LAYER

### 0｜为什么保留

普通发散最容易退化成：换题材、换职业、换名词、找更多相似案例。`SHIFT_OBJECT_LAYER` 不替换故事皮肤，而是强制对同一个 actor / object / current window 改变观测层级：从局部对象、执行接口、组织结构、系统结果等相邻层重新发问。

它改变的是“什么被当作对象”，因此同一事实会暴露不同的 changed_variable、decision topology、path set 与 reality anchor。若层级移动后检索结果仍只是同义改写，则 operator 失败。

### 1｜operator contract

```yaml
operator_name: SHIFT_OBJECT_LAYER
mutation_type: shift_object_layer
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
  - object_layer
  - object   # 仅允许为适配新层而重新指称；不得换题材对象
conditionally_rederived_fields:
  - changed_variable
  - relation_shape
  - decision_right
  - path_set
  - reentry_right
  - future_endpoint
  - reality_anchor
frozen_fields:
  - actor
  - current_window
  - source_event_or_problem
  - domain_context
validation_hook: REINTERPRET_WITH_CURRENT_TEN_YUAN_SEMANTIC_INTERPRETER
```

### 2｜层级变换规则

对输入层 `L0` 只允许生成**相邻且现实可定位**的对象层：

```text
L-1 = 更局部的承载/接口/动作对象层
L0  = 原对象层
L+1 = 更高一层的组织/系统/结果对象层
```

禁止一次跳到纯主题词，如“个人按钮 → 人类文明命运”。若中间没有可观测接口，属于 `LAYER_JUMP_HALLUCINATION`。

核心问题不是“同一件事还能怎么说”，而是：

> 当 object_layer 上移或下移一层，哪些原本不可见的现实变量、路径、决定权或回返接口变成可检索对象？

### 3｜query_template

```text
给定以下 Semantic IR：
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

执行 SHIFT_OBJECT_LAYER，只改观察层，不换 actor、不换事件、不换题材：
1. 先给出原层 L0 的一句结构描述。
2. 向下移动一层 L-1：指出新的 object/object_layer，并列出在该层才可观察的 changed_variable、decision_right、path_set、reality_anchor。
3. 向上移动一层 L+1：同样重建这些字段。
4. 对每个新层提出 3 个“只有移动到该层才值得检索”的问题，优先问现实接口、执行链、授权边界、路径集合、回返资格、终点牵引。
5. 若新问题只是原问题同义改写，标 REJECTED_RESKIN。
6. 若只是要求搜索更多相似案例而未产生新字段结构，标 REJECTED_RETRIEVAL_ONLY。
7. 不判十元。把 L-1/L+1 的重建 IR 交回 current 十元语义解释器重新判断。
```

### 4｜expected xn activation

这里的 `xn activation` 只表示**更容易把隐藏的运行/流程/节点组织结构变成可检索对象**，不表示 mutation 结果自动属于十元 `xn`。

典型激活方式：

```text
人物/结果层问题
→ 下移到执行接口层
→ 暴露 sequence / handoff / routing / coordination / fallback / timing
→ AI 可调用已有大量流程知识生成结构候选
→ 再交十元语义解释器判断是否真的 xn
```

反过来，从执行层上移到组织/制度层，又可能暴露 decision_right、ultimate holder、veto、reentry 或 path-set，不应继续硬判 xn。

### 5｜failure_mode

```yaml
failure_modes:
  - RESKIN_ONLY: object_layer 名称换了，但可观测变量、路径、权利结构均未变
  - RETRIEVAL_ONLY: 只生成“再找十个类似案例”
  - LAYER_JUMP_HALLUCINATION: 跨越缺失中间层，直接跳到宏大主题
  - ACTOR_DRIFT: 偷换 actor 或把组织行为归因给个人
  - WINDOW_DRIFT: 为了让新层成立擅自扩大 current_window
  - VARIABLE_SMUGGLING: 声称冻结 changed_variable，却实际改成另一个变量而未重新声明
  - CROSS_LAYER_CONCLUSION: 用 L+1 的结果反推 L-1 的十元成立
  - NO_REALITY_ANCHOR: 新层只有概念名称，没有现实可观测接口
```

### 6｜stop_condition

出现任一情况即停止：

1. 相邻层无法给出独立 reality anchor；
2. 新层的 3 个检索问题与原层可以逐句互换而不损失含义；
3. 连续两次 layer shift 只产生题材词/职业词/形容词替换；
4. 继续上移/下移必须改变 actor、current_window 或事件本身；
5. 已到自然原子接口层或当前问题的最高现实系统层；
6. 新层已足够产生结构差异，立即停止继续套娃，把 IR 送回解释器。

### 7｜when_not_to_use

- 用户只要同层最近邻，优先 nearest-neighbor search；
- 缺失明确 object_layer，先补 IR，不做 layer shift；
- 问题本身就是“完整 path set 有哪些”，优先 enumerate_path_set；
- 需要测试一项条件是否必要，优先 remove_condition / freeze_one_variable；
- 需要验证同一个 changed_variable 在不同背景是否稳定，优先 hold_changed_variable_replace_context；
- 只有审美、颜色、职业、性格词，尚未形成现实对象层时禁止使用。

## 8｜跨领域测试

> 测试只验证 operator 能否打开不同结构空间，不计入任何十元案例库或 evidence 统计。

### T1｜《红楼梦》鸳鸯拒婚

**L0：个人婚姻同意/拒绝层**

```text
actor = 鸳鸯
object = 自身婚配去留
object_layer = personal-consent
current_window = 贾赦求娶至鸳鸯公开拒绝/求助贾母
changed_variable = 谁能对“鸳鸯是否嫁给贾赦”给出有效决定
```

向下 `L-1`：**信息与求助接口层**。

新检索问题不再是“她愿不愿嫁”，而是：她通过谁传话、在哪个节点公开、哪些中介能使拒绝进入共享现实、求助链在哪个节点取得阻断力。

向上 `L+1`：**贾府婚配治理/权威层**。

新问题变成：贾赦的局部权势、贾母的上位权威、个人拒绝与家族决定权如何分层；谁拥有最终 decision right，谁只有施压/执行能力。

**结果：PASS。** 三层问题不可互换；移动后暴露了 route / authority topology，而非换皮。

### T2｜《西游记》孙悟空被逐后的回返

**L0：师徒关系 reentry 层**。

```text
actor = 孙悟空
object = 重返取经共同关系
object_layer = bilateral-reentry
changed_variable = 回返资格是否现实可调用
```

向下 `L-1`：**回返接口/中介路径层**。

检索对象变成 direct request、观音中介、辨认真伪等 route；可问 direct path 与 mediated path 是否独立、哪条被关闭、哪条仍可调用。

向上 `L+1`：**取经任务共同体/任务资格层**。

检索问题变为：恢复师徒关系是否等于恢复取经任务位置；成员关系与任务编制是否同层；谁有资格最终确认重新加入。

**结果：PASS。** 原先单一“回不回来”被拆成 relation reentry、interface path、mission membership 三种结构。

### T3｜《三国演义》马谡街亭

**L0：战术执行方案层**。

```text
actor = 马谡
object = 街亭防守部署
object_layer = tactical-execution
changed_variable = 既定守法如何被主体改写为另一执行方案
```

向下 `L-1`：**兵力/营地/补给配置接口层**。

可检索高地驻营、水源、道路控制、部队布置的具体 dependency 与 failure path。

向上 `L+1`：**战区指挥权/任务方向层**。

问题转为：诸葛亮给的是最终战略方向、局部执行约束还是完整战术处方；马谡改变了 execution，还是改变了上位 decision right。

**结果：PASS。** 能直接防止“违令 = 扩大最终方向权”的同层混淆，也打开工程式 dependency 检索。

### T4｜Apollo 13 服务舱供电

**L0：fuel-cell actuator layer**。

```text
actor = spacecraft power system / crew-operations as separately attributed
object = Service Module fuel-cell electrical supply
object_layer = actuator-family
changed_variable = same-family surviving generation paths
```

向下 `L-1`：**单个 fuel-cell / reactant / feed interface 层**。

检索从“还有几套电源”改成阀门、氧供、单元失效、隔离、恢复可能性等具体 dependency。

向上 `L+1`：**航天器可用电力/任务生存功能层**。

此时 LM、CM batteries 等 alternate sources 会出现，但它们属于更高层 target-effect path，不应倒灌为 Service Module fuel-cell 同族 surviving path。

**结果：PASS。** layer shift 明确改变 path_set 的合法成员，能防 cross-layer substitute 偷算。

### T5｜现实制度：医院手术排程

**L0：单个病人的手术排期层**。

```text
actor = 手术科团队
object = 某患者手术能否在目标时段执行
object_layer = case-scheduling
changed_variable = 当前排期的现实可执行性
```

向下 `L-1`：**资源接口层**：术间、麻醉师、器械、床位、血制品、前置检查，每个都可形成独立 blocking interface。

向上 `L+1`：**医院容量治理层**：谁可调整优先级、紧急插单、跨科资源、取消/延期规则；decision_right 与 resource allocation topology 变成主要问题。

**结果：PASS。** 从“为什么这台手术排不上”打开成 dependency graph 与治理权两类完全不同查询空间。

## 9｜防退化对照

### Probe-R1｜同义词换写

```text
“婚配决定权” → “婚姻主导权” → “嫁娶控制力”
```

object_layer、changed_variable、decision_right、path_set 均不变。

**判定：REJECTED_RESKIN。**

### Probe-R2｜只跨题材搜同结构

```text
“再找 20 个像鸳鸯拒婚一样的拒绝案例”
```

没有变更任何 Semantic IR 坐标，只扩大检索集合。

**判定：REJECTED_RETRIEVAL_ONLY。**

### Probe-R3｜职业替换

```text
“把马谡换成项目经理，把街亭换成软件项目”
```

若 execution / decision topology 未发生变化，只是名词映射。

**判定：REJECTED_RESKIN。**

### 防退化计数

```yaml
REJECTED_RESKIN: 2
REJECTED_RETRIEVAL_ONLY: 1
accepted_structural_tests: 5
```

## 10｜validation hook

所有输出必须执行：

```text
SHIFT_OBJECT_LAYER
→ rebuild mutated Semantic IR
→ mark provenance = z_mutation_research
→ send to current ten-yuan semantic interpreter
→ independently judge symbol / nearest neighbors / false-positive guards
→ only interpreter output may enter downstream candidate review
```

禁止：

```text
mutation 生成“看起来像 xn / x / zx ...”
→ 直接写入十元结论
```

测试中的十元名称只用于说明**为什么新层值得重新解释**，不构成 evidence。

## 11｜本轮验证结论

```yaml
operator: SHIFT_OBJECT_LAYER
verdict: ACCEPT_RESEARCH_CANDIDATE
information_gain: high
reason:
  - 改变可观察对象层而非题材皮肤
  - 同一事件可暴露不同 path_set / decision_right / reality_anchor
  - 对跨层误计有直接防护作用
  - 能把 AI 已有大量流程/制度/工程知识转成新的结构查询入口
canonical_effect: none
behavior_evidence_effect: none
```

## 12｜下一最高价值 mutation

`FREEZE_CHANGED_VARIABLE_REPLACE_CONTEXT`。

原因：`SHIFT_OBJECT_LAYER` 解决“同一事件换观察层”；下一步最需要的正交测试是**冻结 changed_variable，只替换 context/domain**，以区分真正结构可迁移性与题材 reskin。它尤其适合检验某个 mutation 生成的结构是不是只在文学叙事里成立，还是工程、制度、现实组织中仍能保持相同 IR 关系。
