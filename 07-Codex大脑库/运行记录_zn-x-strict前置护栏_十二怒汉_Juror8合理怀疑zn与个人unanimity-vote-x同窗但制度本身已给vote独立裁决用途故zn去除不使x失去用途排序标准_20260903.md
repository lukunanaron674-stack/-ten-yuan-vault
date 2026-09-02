---
type: ten-yuan-fire-axis-strict-precondition-guard
authority_level: L4
knowledge_status: evidence-locked
status: current-evidence
axis: fire
pair: zn-x
work: 12 Angry Men
work_cn: 十二怒汉
character: Juror 8
stage: initial 11-1 vote -> deliberation -> unanimous not-guilty verdict
sample_type: strict-v2-precondition-guard
priority_bucket: P0-P5
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate_current: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_guard_increment: true
strict_precondition_guard_work_increment: true
x_scope_boundary_guard_increment: false
x_scope_dynamic_transition_increment: false
mechanism: institutional-purpose-anchor-keeps-x-purpose-independent-of-zn-even-when-zn-governs-current-use
created: 2026-09-03
---

# zn ↔ x 边界压力测试｜《12 Angry Men》Juror 8：原则现实调用 vote-x ≠ vote-x 的用途由该原则构成

## 0｜本轮结论

本轮以 P0 strict-v2 候选进入。Juror 8 在同一 jury-verdict object layer 上同时具备高纯 `zn` 候选与清晰、自然、制度化的个人 vote/veto `x`：他拒绝在没有充分讨论与 reasonable doubt 未排除时投 guilty；而 unanimous-verdict 规则使他的单票现实阻断立即 guilty verdict。

压力测试后不得升为 strict verified positive。新增前置护栏：

> **一个稳定原则即使明确指导主体如何使用某个 current x，且该 x 是原则最直接的现实执行接口，也不能自动推出 `zn→x` strict 方向成立。若制度、任务或对象自身已经为该 x 提供独立于被测 zn 的稳定用途/裁决功能，那么拿掉 zn 后 x 仍有明确 purpose 与 decision role，`zn→x` 失败。**

因此必须区分：

```text
zn governs how x is used
≠
zn constitutes why x has a current purpose
```

本轮只计 `strict-precondition guard`，不计 strict-v2 negative，也不计 ordinary x-scope guard。

## 1｜启动与 current 对齐

写前以 `main@6f339e576c7d53e9dbff3d91efe834397d320bbb` 为 HEAD。启动时重读最近 commits，并按 current canonical 对齐 L0/L1 门禁、L1 十元—五行正本、zn/x 信息卡、准度卡、zn补x、火轴待审议清单、火轴研究总纲、strict 专项、x-scope 专项及最近运行记录。仓库 current canonical 高于本记录；木轴仅迁移验证方法，不迁移理论结论。

本轮没有使用身份、职业、阵营、标签、外观、能力、情绪、主题、胜负或结局倒推 zn/x。

## 2｜作品事实链

1. 法官在陪审团退庭前明确给出裁决标准：若存在 reasonable doubt，必须判 not guilty；若不存在 reasonable doubt，才可判 guilty；最终 verdict 必须 unanimous。
2. 初次投票为 11 guilty / 1 not guilty，唯一 not-guilty 是 Juror 8。
3. Juror 8 明确表示自己并不确定是否相信被告故事；他拒绝立即 guilty 的理由是不能在几分钟内、没有讨论的情况下举手把一个人送去死，并持续追问“如果我们错了怎么办”。
4. 后续他持续检验证词、凶器、时间与目击可靠性；当其他 jurors 逐步形成 reasonable doubt 时，票数向 not guilty 迁移。
5. 最终 Juror 3 也改投 not guilty，形成 unanimous acquittal。

公开事实来源：
- 1957 film transcript / Simpleremix：https://transcripts.simpleremix.com/script.php/12-angry-men-1957-D1n
- Clip.Cafe initial 11-1 discussion：https://clip.cafe/12-angry-men-1957/whats-there-to-talk-about-eleven-men-in-here-think-hes-guiltyno-one-had-to-think-about-it-twice/
- IMDb plot summary：https://www.imdb.com/title/tt0050083/plotsummary/
- Wikipedia plot summary：https://en.wikipedia.org/wiki/12_Angry_Men

## 3｜zn 独立端点

先不用被测 vote `x` 命名原则：

> **在人的生命将因 verdict 被剥夺时，不能在仍存在合理怀疑、证据尚未经充分检验的情况下把不确定性伪装成确定性；必须先把可疑证据真正讨论和检验到足以承担 guilty 判断。**

该候选不是从“陪审员”身份倒推：
- 他在 11-1 社会压力下仍保持；
- 他明确承认自己未必相信被告，却仍拒绝把不确定性当 guilty；
- 后续证据变化时，他持续使用同一合理怀疑标准，而非固定维护某个预设结局；
- 他反复把人的生命与错误裁决风险置于快速结束讨论之前。

本轮对 `zn` 端点可给高置信候选，但 strict 是否成立仍必须独立过双向门，不能因人物塑造鲜明自动升级。

## 4｜x 权限结构

```yaml
actor: Juror 8
object: jury verdict on the defendant in the same murder trial
object_layer: individual juror vote / unanimity threshold contribution

permission_type:
  deliberate: true
  cast_individual_vote: true_reality_tested
  change_own_vote: true
  withhold_guilty_concurrence: true_reality_tested
  block_unanimous_guilty_verdict_while_vote_not_guilty: true_reality_tested
  unilaterally_acquit: false
  control_other_jurors_votes: false
  final_disposition_alone: false

scope:
  own_vote: true
  unanimity_threshold_contribution: true
  whole_jury_verdict_unilateral_control: false

term: current deliberation until verdict
revocability: actor may change own vote; no external same-layer node shown able simply to rewrite his ballot
return_obligation: none
same-layer_pre-effect_veto: each juror can prevent unanimity while dissenting
global_override: none shown that can convert an 11-1 jury into a unanimous guilty verdict inside the tested jury layer
ultimate_title: not applicable
decision_structure: joint/unanimous threshold
consultation_structure: all jurors deliberate
final_decision_structure: unanimous jury verdict
execution_structure: individual ballots aggregate into verdict
co-decision_nodes: all 12 jurors
```

因此 `x` 是真的，但它是 narrow threshold contribution，不是 Juror 8 对被告命运的 unilateral disposition。

## 5｜strict-v2 压力：为什么 `zn→x` 失败

表面最诱人的推理是：

```text
reasonable-doubt zn
→ 指导 Juror 8 使用自己的 vote
→ vote 是该原则现实落地接口
→ strict zn→x 成立
```

这一步过快。

current strict-v2 要求：拿掉 zn 后，x 虽仍存在，但应失去明确用途/守护/放弃/排序标准。可本案的个人 vote 在制度上已经拥有独立用途：

```text
jury institution
→ 每名 juror 必须参与 guilty/not-guilty verdict
→ unanimity rule 赋予每票 threshold function
```

即使反事实拿掉 Juror 8 的被测原则，他的 vote 仍然：
- 有明确对象：该案 verdict；
- 有明确用途：在 guilty / not guilty 之间作裁决贡献；
- 有明确生效结构：参与 unanimity threshold；
- 可由其他标准、偏见、证据评价或草率判断来排序。

换言之，被测 `zn` 高度影响 **他怎样投**，但不是 **这张 vote 为什么存在、为什么有 current decision purpose** 的必要来源。

所以：

```text
remove tested zn
→ vote-x survives
→ institutional purpose survives
→ threshold function survives
→ alternative ranking standards remain possible
```

`zn→x` strict direction 不成立。

## 6｜x→zn 与为什么不计 strict negative

拿掉 Juror 8 的 current vote/veto 接口，确实会让该原则失去本案最直接的 formal blocking interface；但原则仍可通过发言、证据检验、说服他人等方式获得现实表达。因此 `x→zn` 也不能仅凭“没有票就不能直接阻止 verdict”自动锁成严格依赖。

不过本轮没有必要继续把它推进 strict negative：strict candidate 已在 `zn→x` 的 independent institutional-purpose anchor 前置门被高置信卡住。按 current 纪律，前置门失败只记 precondition guard，避免把不同失败层混成 negative。

## 7｜最近邻与新增性

### The Book of Eli
Eli 案锁的是：
`physical carrier uniqueness ≠ current reality anchor uniqueness`，因为 memorized content 是同窗可调用 functional equivalent。

本轮不同：
- 没有 functional-equivalent carrier 问题；
- 被测 vote-x 本身真实、清晰、同层；
- 失败来自 **制度为 x 提供 independent purpose anchor**。

### Thirteen Days / Star Trek III
这些案例校准 consultation / joint-final topology；本轮虽然 jury 是 unanimous joint threshold，但不增加 decision-structure calibration，因为 unanimous threshold 不是本轮的新机制，真正新增的是 strict `zn→x` 的 purpose-source 分离。

## 8｜第三因素冻结

冻结：
- Juror 8 的建筑师职业；
- 主角身份与作品主题；
- 其他 jurors 的阶级、族裔与人格标签；
- 最终 acquittal 结局；
- “他是好人/理性的人”的评价；
- Juror 3 的家庭投射。

保留但分账的 competing anchor：
- judge 给出的 legal standard；
- jury unanimity institution；
- individual ballot threshold function。

其中 unanimity/institution 不是噪声，而正是本轮必须冻结并测试的 independent purpose anchor。

## 9｜判定与统计

```yaml
strict_v2_verified_positive: false
strict_v2_negative: false
strict_precondition_guard: true
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
```

写前 current effective strict-precondition evidence layer 按已锁记录为 `18 controls / 7 independent works`；本轮《12 Angry Men》此前未进入该 strict-precondition work 集合，因此：

```text
18 / 7
→ 19 strict-precondition controls / 8 independent works
```

其余：
- strict positive +0
- strict negative +0
- strict deferred +0
- ordinary x-scope positive +0
- x-scope boundary +0
- x-scope dynamic +0
- decision-structure calibration +0
- protected-range positive/negative +0

## 10｜下一轮最高信息增益

P0 继续寻找首个真正 strict-v2 verified positive，不降低门槛。

若继续无 ≥95，优先找本轮的最小反向：

```text
same actor + naturally identifiable x
x 没有 institution / task / title 提供独立 purpose
被测 zn 出现前 x 只是无明确排序标准的可用资源
zn 稳定成立后，x 获得唯一清晰的 current guard/use/abandon ranking
remove zn → x 仍存在但 purpose/ranking 真正塌空
```

这比继续寻找“原则鲜明的人恰好有一个权限”更能直接攻击 strict-v2 的 `zn→x` 方向门。