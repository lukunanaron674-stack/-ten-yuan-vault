---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_type: strict-v2-verified-positive
work: Defiance
work_year: 2008
medium: film-with-historical-crosscheck
character: Tuvia Bielski
stage: 逃入森林→持续接纳犹太难民→建立并治理Bielski family camp
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_card: x信息量卡v2
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 97
zn_current: true
x_current: true
zn_x_cooccurrence: true
same_current_window: true
same_object_layer: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: true
strict_v2_verified_positive: true
strict_v2_verified_positive_control_increment: true
strict_v2_verified_positive_work_increment: true
may_override_canonical: false
created: 2026-09-04
---

# 运行记录｜《Defiance》Tuvia Bielski｜救人原则 zn × 家属营地开放准入/治理 x｜strict-v2 首个 verified positive

## 1｜为什么本案比旧 strict 候选有新信息

current registry 的 P0 仍是 strict-v2 第一份 verified positive，当前为 `0 controls / 0 works`。旧 deferred 主要败在三类问题：被测 x 只是执行接口、x 端存在独立 purpose/ranking anchor、或 protected-range 无法高纯归因给主体。

本案与这些失败槽不同：

1. `zn` 有独立、跨来源、反战略收益的高纯证据：Tuvia 把“尽可能救更多犹太人/不抛弃弱者”放在战斗效率和小规模安全之上；
2. `x` 不是武器、一次救援动作或名义职位，而是 Tuvia 对 Bielski group / family camp 的现实准入、组织、调配与治理边界；
3. protected-range 的形成不是第三方临时保护效果，而是同一主体持续把新成员纳入自己指挥的营地，并把营地组织成可持续社区；
4. 同一窗口中，内部成员曾主张“少收人会更安全”，但最终由 Tuvia 主导继续开放接纳，直接排除了“扩大营地只是战略收益最大化”的 competing anchor。

## 2｜事实证据

### 2.1 作品层

《Defiance》(2008) 明确把 Tuvia 置于 forest community 的领导位置；逃亡者持续加入，Tuvia 主张欢迎愿意加入的人并继续领导营地。影片把 growing refugee community、camp governance、与 Zus 更偏战斗路线之间的冲突作为核心结构。

### 2.2 历史交叉核验

USHMM 记录：

- 1942年5月 Tuvia 已指挥一个小组，至战争结束增长到约1,200人；
- 他重点放在尽可能救更多犹太人，并接受任何犹太人进入其 group；
- 1943年夏他领导约700人，并在 Naliboki forest 建立 functioning community，包括医院、儿童课堂、工坊等；
- 高生存率与他的领导及救人决心直接相关。

USHMM 的专题音频还明确记录：组内很多人认为保持人数较少、拒绝更多求庇护者会更安全，但 Tuvia 主导的决定仍是尽可能救更多犹太人。

Yad Vashem 资料同样记录：Tuvia 认为 unit 的主要角色是给逃出 ghettos 的犹太人提供 refuge 并保护他们；family camp 接受所有抵达的犹太人，并在后来仍由 Tuvia 指挥。

来源：
- https://encyclopedia.ushmm.org/content/en/article/tuvia-bielski
- https://www.ushmm.org/learn/podcasts-and-audio/12-years-that-shook-the-world/combatants-and-protectors
- https://wwv.yadvashem.org/yv/en/exhibitions/ready2print/pdf/jews-rescue-60-90.pdf
- https://www.paramountpictures.com/movies/defiance

## 3｜zn 端｜独立成立

先不用被测 x 命名原则：

> 在犹太平民因身份而面临系统性追捕与杀害时，只要仍有现实保护可能，就不应为了提高战斗效率或本组短期安全而主动拒绝弱者；尽可能让更多人活下来应进入最终排序。

### 独立证据

- 该原则不是“复仇德国人”：USHMM 资料直接区分 Tuvia 的救人与杀敌优先级；
- 该原则不是“人数越多战略收益越高”：组内明确存在相反判断，即人数更少会更安全；
- 该原则不是只救强壮战斗员：营地大量成员是老人、妇女和儿童；
- 该原则不是一次情绪：从早期开放接纳，到数百人，再到约1,200人的 family camp 持续调用。

因此：

```yaml
zn_current: true
role_rule_isomorphism_confound: false
strategic_gain_anchor_sufficient: false
revenge_anchor_sufficient: false
future_call_qualification: true
```

## 4｜x 端｜自然单一对象与现实权限

被测 x 不打包“森林、枪、苏联援助、地理知识、粮食、关系”成为万能资源包，只锁：

> **Tuvia 对 Bielski family camp / refugee community 的 current membership admission + internal governance / allocation boundary。**

### x-scope

```yaml
actor: Tuvia Bielski
object: Bielski family camp / refugee community membership-and-governance boundary
permission_type:
  admit_members: true
  retain_members_within_group: true
  organize_internal_roles: true
  allocate community work/resources: true
  direct camp movement/governance: true
scope: current Bielski family camp and incoming Jewish refugees
quantitative_cap: no fixed cap identified; practical size grows over time
term: wartime current camp window
revocability: constrained by group politics and external force, but currently real
return_obligation: none relevant
same-layer_pre-effect_veto: internal opposition exists but does not hold final admission veto over Tuvia's policy
global_override: German military threat; later Soviet partisan command constraints
ultimate_title: not ownership-based
decision_structure: leader-led governance
consultation_structure: brothers/group members can contest
final_decision_structure: Tuvia-led on open-door rescue policy
execution_structure: distributed camp members/guides execute intake and community operation
co-decision_nodes: no same-layer node found with equal final veto over open-door policy
```

这不是“名义 commander = x”。reality-test 是：逃亡者实际被纳入 group；Tuvia 派 guides / emissaries 接人；营地实际形成医院、学校、工坊与内部劳动结构；人数持续扩大且由他领导。

## 5｜same current window / same object layer

current window 锁在：

> **Tuvia 已现实领导 Bielski camp，且新难民持续出现、组内正在真实争论“继续开放接纳还是为安全缩小人数”的阶段。**

same object layer：

- `zn` 排序对象：当前出现、请求进入保护范围的犹太难民，尤其非战斗人员；
- `x` 现实对象：这些人是否被纳入 Tuvia 当前领导的 family-camp membership / protection boundary。

不是“抽象救人原则 × 任意军事资源”的跨层拼接。

## 6｜zn → x｜通过

拿掉 zn，但保留 Tuvia 的 camp governance x：

- 他仍可以领导已有战斗员；
- 仍可组织粮食、警戒与转移；
- 仍可为了生存设置更严格准入；
- 组内甚至已有“人数少更安全”的现实 competing proposal。

于是 x 的排序重新出现明确缺口：

> 为什么在增加暴露、粮食与机动负担的情况下，仍把老人、妇女、儿童和其他新逃亡者纳入自己的 camp boundary？

历史证据显示 Tuvia 的救人原则正是这个排序差异的关键来源。

```yaml
zn_to_x_gap_filling: true
```

## 7｜x → zn｜通过 current v2

拿掉 Tuvia 的 family-camp admission/governance x，原则仍成立，但 current-layer reality anchor 出现明确缺口：

- 新逃亡者不再有一个由 Tuvia 可以现实决定“纳入/不纳入”的持续 membership boundary；
- 已经形成的老人、妇女、儿童与战斗员共同生活的 family-camp protected range 消失；
- 原则失去一个可反复调用的“把求庇护者变成当前我方成员”的现实接口；
- 零散 hiding、其他农户、苏联 partisan unit 都不是同窗等价 anchor：它们不是由 Tuvia 对同一对象集合拥有的开放准入/治理边界，而且部分 partisan groups 本身拒绝非战斗人员或存在反犹排斥。

current v2 不要求“世界上再无任何救人办法”，只要求 relevant current reality-anchor gap。该 gap 成立。

```yaml
x_to_zn_gap_filling: true
```

## 8｜最近邻、拿掉、反向与第三因素冻结

### 最近邻

- `zn` ≠ 战斗/复仇：Tuvia 明确把救命优先于杀敌；
- `x` ≠ 技术能力：森林知识、武器与粮食只是执行资源；
- `x` ≠ 名义 commander：以真实 admission、guides intake、community governance 为 reality-test；
- protected-range ≠ partial defense effect：这里不是一次击退风险，而是持续把成员纳入可生活、可组织、可转移的 community boundary。

### 拿掉

拿掉救人 zn：camp leadership 仍存在，但 open-door admission 在“缩小人数更安全”的 competing ranking 下失去内部排序理由。

拿掉 camp admission/governance x：救人原则仍存在，但“这些人现在进入我方持续保护范围”的 same-window organized boundary 消失。

### 反向

若原则反向为“优先最小化本组风险/只留高战斗价值成员”，在同样 x 下应出现 admission narrowing；历史记录恰好提供了这一反向方案作为组内真实争议，因此反向测试可观察。

### 第三因素冻结

- Soviet partisans：可合作、可提供外部军事关系，但不能替代 Tuvia 对 family camp 的 open-door admission/governance；
- Konstantin Kozlovski 等外部帮助者：能提供中转与帮助逃亡，但不是同一 current protected range 的 final admission/governance actor；
- 武器/森林地理：影响 survival capability，不自动决定谁进入保护范围；
- 战略收益：被“少收人更安全”的组内争议直接反证，不能充分解释 open-door policy；
- brothers：Zus/Asael 是关键共同执行与组织人物，但现有来源对“救更多人/开放准入”的最终政策归因稳定落到 Tuvia leadership；不能把兄弟贡献抹掉，但不足形成 equal same-layer final veto。

## 9｜strict-v2 / x-scope / protected-range 判定

```yaml
strict_v2:
  same_current_window: pass
  same_object_layer: pass
  zn_independent_current_canonical: pass
  x_independent_current_canonical: pass
  posthoc_composite_x: false
  competing_anchor_freeze: pass
  zn_to_x: pass
  x_to_zn: pass
  verdict: verified-positive

x_scope:
  verdict: supporting-structure-only
  new_x_scope_control_increment: false
  reason: 本轮核心增益是 strict-v2 破零，不把同一案例再跨槽重复计数

protected_range:
  boundary_on: true
  object_inside: true
  real_risk_enters: true
  subject_specific_x_stable_block_or_reroute: not separately audited under protected-range-v1
  verdict: not-counted
  reason: 不借 strict 正向顺带增加已 pending-review 的 protected-range 槽
```

## 10｜统计变化

本记录只改变 strict-v2：

```text
strict-v2 verified positive
0 controls / 0 works
→
1 control / 1 independent work
```

不改变：

- deferred former positives `4/4`；
- strict negative `7/4`；
- strict precondition `20/9`；
- x-scope ledger；
- protected-range ledger。

达到第一份 verified positive 后只记录为 L4 evidence-locked，不自动修改 L1/L2 canonical，也不把 strict 槽自动升格为 pending-review。

## 11｜下一高价值缺口

1. P0 从“破零”转为 adversarial replication：寻找 **不同题材/不同对象机制** 的第二个 strict-v2 verified positive，优先避免 protected-range 救援题材自我复制；
2. 若没有 ≥95 第二正向，转 P1 path exhaustion dynamic；
3. P3 只找 downstream disposition `ON→OFF/narrower` 且 edge-veto retained 的反向镜像；
4. P4 只收不同于 Pacific Rim 与 Papers, Please 的新 execution topology。
