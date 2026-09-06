---
type: ten-yuan-semantic-interpreter-run
status: research-only
may_override_canonical: false
canonical_source:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/十元广义狭义阴阳相反轴总修正案_20260802.md@v1.1
  - 01-十元系统/十元体系密度卡总览.md@v1.4
semantic_ir_version: ten-yuan-semantic-ir-v0.1
source_commits:
  - e267488abfb0462a031656d2178b171e8f11b337
  - a659483d7d61c30e035926632b396c37fa40db58
maturity: candidate-correction
updated: 2026-09-07
---

# 十元语义解释器｜xn vs z current 修正

> research-only。只修正解释器翻译层，不修改 L1/L2 canonical、信息卡、准度卡、正式关系卡或行为 evidence。current canonical 永远高于本文件。

## 0. 为什么必须先修正

上一轮 `xn vs z` 运行记录把 `z` 主骨写成 recognition / confirmation / adoption state。该写法沿用了旧 z 信息卡的认可口径，但 current 总修正案已经明确覆盖：

```text
xn ↔ z 的同轴核心变量
= 运行权与裁定重心配置

xn：运行权和判断权分布到顺序、规则、记录、节点和流程
z：判断权与结构重心收束到单一最高中心或最终裁定点
```

因此本轮不是扩案例，而是建立解释器级 correction guard：

> `confirmation/recognition verb` 只触发字段提取，不再直接触发 z。只有当该动作真实把同层判断/结构重心收束到一个最高中心或最终裁定点，并使竞争中心退出当前裁定位置时，才进入 z candidate gate。

旧“认可”可作为特定 domain/context 的表现材料，但不能替代 current z 的 changed_variable。

## 1. 本轮目标混淆对与翻译债务

目标：`xn vs z`。

翻译债务：自然语言里的“批准、确认、认定、决定、最终、委员会、中心”很容易让模型直接判 z；而“计划、流程、排程、记录”又容易直接判 xn。真正需要翻译的是：

```text
同一 object_layer 的判断/运行重心
是分布在多个规则/节点/流程中继续运行
还是收束到单一最高中心/最终裁定点。
```

## 2. 新翻译规则｜DISTRIBUTED-RUN-vs-FINAL-CENTER-v0.1

按下列顺序还原 IR，禁止先看关键词：

1. 锁 `actor` 与 `object`。
2. 锁 `object_layer`：当前句在测试流程运行层、候选裁定层、身份层、资源层，还是别层。
3. 锁 `current_window`：必须覆盖重心分布/收束发生的阶段，不得跨历史阶段借旧权力。
4. `changed_variable` 优先写成：
   - `decision_center_distribution`
   - `adjudication_center_distribution`
   - `execution_structure`
   - 或 `unknown`
5. `decision_right` 写现实最终裁定权在哪个节点，而不是谁说了“确认”。
6. `relation_shape` 写 distributed / staged / multi-node / single-final-center / advisory-only / symbolic-confirmation 等结构。
7. `path_set` 只列当前窗口真实可继续产生同层裁定/运行结果的路径；不能把旁观意见算进 final-decision path。
8. `reality_anchor` 必须能证明：若最高中心不裁定，结果是否停住；若它裁定，竞争中心是否退出本轮判断。

### 解释器分流

```text
若重心分布到顺序、规则、记录、多个节点并持续运行
→ 检查 xn。

若重心收束到单一最高中心/最终裁定点，其他候选或判断节点退出当前中心位置
→ 检查 z。

若只是“有人确认/认可/签字”，但该节点没有最高裁定作用，或只是备案/建议/象征表达
→ z FAIL/UNKNOWN。
```

## 3. 标准输入与完整 IR

输入：

> “项目组先由三个评审节点分别打分、记录异议并允许返工；最终风险委员会只能从仍存的三个方案里指定一个为唯一上线方案，一旦它作出最终选择，其余方案立即退出本轮发布资格。”

### IR-A｜分布运行层

```yaml
actor: 项目组
object: 三个候选方案的评审过程
object_layer: 评审运行与筛选流程层
current_window: 三节点独立评审 -> 记录异议 -> 返工 -> 进入最终裁定前
changed_variable: execution_structure
relation_source: internal_multi_node
relation_shape: distributed_staged_recorded_review
decision_right: distributed_before_final_gate
path_set:
  - reviewer_node_A
  - reviewer_node_B
  - reviewer_node_C
reentry_right: rework_allowed_before_final_gate
future_endpoint: final_gate
reality_anchor: 任一节点可形成记录和返工要求，流程在多节点间持续推进
```

判定：`xn candidate PASS`。

### IR-B｜最终裁定层

```yaml
actor: 风险委员会
object: 本轮唯一上线方案
object_layer: 同一候选集的最终裁定层
current_window: 三个方案仍存 -> 风险委员会最终选择 -> 其余方案退出本轮发布资格
changed_variable: adjudication_center_distribution
relation_source: institutional_final_center
relation_shape: multi_candidate_to_single_final_center
decision_right: single_final_center
path_set:
  - committee_final_selection
reentry_right: no_reentry_within_current_round
future_endpoint: one_plan_remains_as_release_endpoint
reality_anchor: 委员会未裁定前多个方案仍具竞争资格；裁定后只有一个方案保留本轮中心资格，其余退出
```

判定：`z candidate PASS`。

整句结论：`xn + z` 可以分层并存，但 z 的理由是“最终裁定中心收束”，不是“委员会确认了某事”。

## 4. Positive decision gates

### xn candidate gate

```text
X1 same object_layer 内存在多个规则/节点/记录/顺序承担运行或判断；
X2 current_window 内这些节点不是装饰，而是真实改变推进；
X3 changed_variable 指向运行/判断权的分布；
X4 removal 分布结构后，同层持续运行、复核、重复或维护能力出现现实缺口；
X5 单一一次 final choice 不得因前面有“评审”字样自动判 xn。
```

### z candidate gate

```text
Z1 object_layer 明确；
Z2 current_window 明确；
Z3 能命名单一最高中心或最终裁定点；
Z4 decision_right 在该层真实收束到该中心，而非建议/备案/礼仪签字；
Z5 裁定后至少一个竞争判断中心/候选中心退出本轮中心位置；
Z6 reality_anchor 能看到“裁定前多中心/未收束 → 裁定后单中心/最终结论”的现实变化；
Z7 removal 该最终中心后，原唯一终局不能以同样路径成立；
Z8 仅有认可、赞美、确认、盖章、宣布、客观事实成立，不足以 positive。
```

## 5. nearest-neighbor 最小差异

### z vs xn

最小差异：

```text
三个节点分别复核并记录，任何一个都可触发返工
→ decision_center distributed
→ xn 候选。

前三节点只能提供输入，最后一个节点能把多候选收束为唯一最终方案
→ decision_center centralized
→ z 候选。
```

### z vs zx

```text
z：在既定同层裁定结构里，谁/什么成为最终中心。
zx：主体自己生成并占据方向，以权能压退竞争方向。
```

某委员会拥有既定最终裁定权并选出唯一方案，可 z，但不因“别人必须服从结果”自动 zx。若主体越出原权力边界、主动压退竞争方向并扩张自身方向源，才另查 zx。

### z vs zn

```text
z：把一个答案/对象/标准提升为最高中心，其他中心退出。
zn：自己成立，同时实际保存他者作为独立对象继续成立。
```

“我选这个作为唯一最终答案”偏 z；“我坚持自己的选择，同时保留你继续独立选择/成立的资格”才查 zn。对端不存在不推出本端成立。

## 6. false-positive guards

1. **确认词护栏**：出现“确认、批准、认定”只触发 IR 提取，不触发 z。
2. **身份/荣誉护栏**：获奖、被赞美、被承认、被看见，不自动 z；要查是否形成同层最高裁定中心。
3. **职位护栏**：CEO、法官、皇帝、委员会身份不自动 z；必须看 current-window 的现实 final decision right。
4. **单点动作护栏**：一次签字若只是备案、形式流程、无现实排他裁定，不算 z。
5. **结果唯一护栏**：最后只剩一个结果，不等于 z；可能由物理淘汰、随机、自动规则、外部事故造成。
6. **流程词护栏**：有流程不自动 xn；必须真实分布运行/判断权。
7. **对端缺席护栏**：没有 xn 不推出 z；没有 z 也不推出 xn。

## 7. removal / reverse / same-layer / current-window

### Removal

- 拿掉多节点分布结构，如果流程仍以同样方式持续运行，xn 下降。
- 拿掉最终中心，如果唯一结论仍可由同层其他节点独立作出且同样有效，z 下降或说明 final center 其实是 shared/multi-center。

### Reverse

- 保留“委员会确认”字样，但把委员会改成只备案、无权排除任何方案：z 必须 FAIL。
- 保留“最终”字样，但最终结果由自动阈值直接生成、无人拥有 final decision right：不得因词判 z，应按实际对象层另查。

### Same-layer

不能用“流程层的分布”与“资格层的终局”直接作相反端。`xn↔z` 的对比必须在可比 object_layer 上回答同一核心变量：运行/裁定重心如何配置。

### Current-window

历史上某人曾是最终裁定者，不等于当前仍 z 在线；若当前该权力已转给多节点或规则流程，必须重判。历史分布流程也不能跨期覆盖当前单点裁定。

## 8. adversarial tests

### T1｜关键词诱导：确认 ≠ z
输入：“经理确认已经读过报告，但他没有决定报告是否通过，真正通过由三个审核节点分别投票决定。”
预期：经理确认句 **z FAIL**；若三个节点投票构成当前分布判断结构，转查 xn/shared structure。

### T2｜题材/职业/情绪诱导
输入：“国王愤怒地坐在王座上，但这件案子的最终裁定由独立三人法庭作出，国王无权改判。”
预期：国王身份/情绪 **z FAIL**；法庭结构按实际 decision topology 重建。

### T3｜对象层错位
输入：“委员会最终裁定供应商 A 中标；项目经理随后把 A 的交付拆成四阶段排程。”
预期：供应商选择最终裁定层可 z；交付运行层可 xn。禁止整句一个标签吞掉两层。

### T4｜时间窗错位
输入：“去年创始人一人拍板所有产品方向；今年章程已改为五人委员会多数决，创始人只有一票。”
预期：当前窗口旧 single-center z 不得延续；今年按 distributed/shared decision structure 重判。

### T5｜同关系词异对象层
A：“委员会决定把值班分成三班并建立交接记录。”
- changed_variable=execution_structure → xn 候选。

B：“委员会决定三个方案中只有 B 进入最终发布，A/C 立即退出本轮资格。”
- changed_variable=adjudication_center_distribution → z 候选。

同一个“决定”不能触发同一标签。

### T6｜对端不存在不等于本端成立
输入：“项目没有流程，也没有任何主体拥有最终裁定权，所有候选都停在那里无人处理。”
预期：xn FAIL/UNKNOWN；z FAIL/UNKNOWN。

### T7｜形式签字伪 z
输入：“董事长必须在文件末尾签名，但章程规定他不能改动结果；结果在签名前已由自动评分规则不可逆确定。”
预期：董事长 **z FAIL**。形式确认不是 final center。

### T8｜唯一结果伪 z
输入：“四条道路因洪水自然被冲毁三条，只剩一条可走，没有任何主体进行选择或裁定。”
预期：z FAIL。结果唯一来自物理状态，不来自裁定重心收束。

### T9｜公开强势伪 zx / z 分账
输入：“法院依据既有权限作出终审判决，双方必须执行；法院没有扩张权限，也没有改写自身方向边界。”
预期：终审节点若满足 same-layer final-center gate，可查 z；不能因强制结果自动 zx。

### T10｜多个中心仍存伪 z
输入：“四个专家分别给出最终意见，制度允许四份意见同时作为有效终局，没有任何一份压过其他。”
预期：单中心 z FAIL；按 multi-center/distributed structure 另判。

## 9. 本轮通过/失败与新增规则

通过：建立了 current canonical 一致的 `DISTRIBUTED-RUN-vs-FINAL-CENTER-v0.1`。

失败/退役：上一轮 `PROCESS-vs-CONFIRMATION-v0.1` 中“confirmation/adoption state → z”的一般映射不得继续作为 current z positive gate。它只能保留为 legacy research artifact，并在调用时受本 correction guard 覆盖。

新增翻译约束：

```text
recognition_word ≠ z
confirmation_state ≠ z by itself
objective_truth ≠ z
single_visible_result ≠ z
final_center requires real exclusion/priority effect
same-layer final-center test precedes label
```

## 10. 下一轮最高翻译风险

优先 `z vs zn`，但必须使用 current 总修正案而不是旧“认可 vs 内在意义”口径：

```text
z：单一最高裁定中心，竞争中心退出。
zn：自己成立，同时真实保存他者独立成立资格。
```

重点压力测试“我坚持自己”在什么条件下只是 z 的自我最高中心，什么时候才真正出现 zn 的他者独立成立保存。
