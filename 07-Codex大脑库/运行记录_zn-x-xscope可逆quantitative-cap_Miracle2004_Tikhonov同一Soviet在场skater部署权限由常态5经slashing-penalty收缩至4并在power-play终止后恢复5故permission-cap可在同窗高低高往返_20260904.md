---
type: ten-yuan-fire-axis-x-scope-dynamic-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: x-scope-reversible-quantitative-permission-cap-high-low-high
priority_bucket: P2
work: Miracle (2004 film)
character: Viktor Tikhonov
phase: USA-USSR medal-round third-period Soviet slashing penalty -> Soviet short-handed interval -> U.S. power-play goal as penalty ends -> next even-strength phase
mechanism: same-actor same-object-layer same-deployment-permission-family quantitative cap 5 -> 4 -> 5 under temporary penalty gate
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
strict_precondition_guard_increment: false
protected_range_increment: false
may_override_canonical: false
created: 2026-09-04
---

# zn ↔ x｜x-scope 可逆 quantitative cap 边界压力测试｜《Miracle》(2004) / Viktor Tikhonov

## 0｜启动与 current 对齐

本轮写前以 `main@fcca274a4f2fb8d36862b3128fb24ad0b9b1ccf1` 为真值。启动按 L0/L1 门禁与 current canonical 重读：`AGENTS.md`、十元理论每小时执行门禁、L1 十元—五行正本 v1.6、zn/x current 信息卡、zn↔x 补卡、火轴待审议清单、火轴研究总纲、x-scope current 路由与最近 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

当前 ordinary x-scope 已 `pending-review`，不得继续堆普通 expansion/contraction。实时清单明确把 **same actor + same permission family 的 quantitative cap 可逆动态 `high→low→high` / `low→high→low`** 列为 P2 高价值空槽。本轮只填该槽。

## 1｜事实链与触发

被测材料只采用电影《Miracle》(2004) 自己呈现的 USA–USSR 第三节连续窗口，不把现实 1980 比赛与电影改编细节混成同一事实层。

电影中：

1. 苏联队正常五人 skater deployment 状态进入第三节；
2. 苏联球员因 slashing 被判罚离场，解说明确把随后阶段称为美国队的 `power play`；
3. 电影对白继续倒数 power-play 剩余时间，并说明 Johnson 在该次 power play 只剩数秒时得分；
4. 得分后该 power-play/penalty interval 结束，比赛恢复常态在场人数结构。

公开电影梗概与转录均支持：第三节苏联被判罚、美国获得 power play、Johnson 在 penalty 即将结束时得分并扳平。这里研究的是电影中的权限拓扑，不依赖角色身份标签或比赛胜负倒推十元。

## 2｜为什么比现有控制新增信息

已有：

- King Lear：quantitative cap contraction `100→50→25→0`；
- XCOM 2：quantitative deployment cap expansion `4→5→6`。

它们共同证明 quantitative cap 可以缩小，也可以扩大，但仍是**跨作品单向镜像**。

本轮新增的是同一 actor / 同一对象层 / 同一 permission family / 同一连续比赛窗口中的真实往返：

```text
normal deployment cap
5 skaters
↓ penalty gate ON
4 skaters
↓ penalty/power-play interval terminates
5 skaters
```

因此锁定：

> **quantitative x-scope 不只是永久升级或单向稀释；在 permission type 不变时，临时规则 gate 可以使同一主体的 cardinality ceiling 现实 `high→low→high` 可逆迁移。**

进一步护栏：

> **temporary cap contraction ≠ underlying permission family 消失；cap restoration ≠ new permission type acquisition。**

## 3｜zn 证据

本轮不锁 `zn`。

Tikhonov 的换人、部署与比赛选择可由教练职责、战术收益、比赛规则和即时赛况充分解释。没有独立证据把某项“不引用被测 x 的内部不可轻易让渡原则”锁到 ≥95，更不能从苏联教练身份、胜负目标或竞技主题倒推 `zn`。

```yaml
zn_current: not_locked
strict_candidate: false
```

## 4｜x / 权限结构固定拆分

```yaml
actor: Viktor Tikhonov
object: Soviet active-skater deployment subset in the same USA-USSR game
object_layer: currently deployable on-ice skaters from the Soviet bench/roster
permission_type:
  select_deploy_active_skaters: true
  substitute_within_legal_strength: true
  exceed_current_legal_on_ice_cap: false
  waive_penalty_by_unilateral_coach_decision: false
scope: current active-skater subset
quantitative_cap:
  stage_A_normal: 5
  stage_B_penalty_short_handed: 4
  stage_C_after_penalty_interval_ends: 5
term:
  stage_A: ordinary play interval
  stage_B: temporary penalty interval
  stage_C: restored ordinary play interval
revocability: rule-triggered temporary contraction; coach cannot unilaterally revoke the penalty gate
return_obligation: not_applicable
same-layer_pre-effect_veto: game officials/rules prohibit deploying the fifth skater while penalty gate is active
global_override: officiating/rule structure overrides coach deployment choice on active-player count
ultimate_title: not_applicable_to_roster_deployment_permission
source_decision_structure: coach selects legal deployment from roster
consultation_structure: team/bench coordination may exist but not the tested variable
final_decision_structure: unilateral-within-rule-bounded-cap for lineup deployment
execution_structure: players enter/leave ice under rule-bounded deployment
co-decision_nodes: none required for each ordinary legal line choice; officials/rules remain external cap gate
scope_transition:
  - 5 -> 4
  - 4 -> 5
transition_trigger:
  - slashing penalty activates short-handed cap
  - penalty/power-play interval terminates after the U.S. power-play goal near expiry
realized_effect_test:
  - U.S. receives a power play while USSR is penalized
  - power-play interval visibly continues under reduced Soviet strength
  - after termination, ordinary strength is restored
```

## 5｜current window / object layer

窗口严格冻结在同一场 USA–USSR 比赛第三节 penalty 前后，不跨比赛、不跨赛季、不跨规则版本。

对象始终是：

> `Soviet active-skater deployment subset`

不是“苏联队整体实力”、不是球员技术能力、不是教练职位、也不是比赛结果。

因此这不是：

- capability delta；
- title delta；
- task-source delta；
- 新 permission type；
- roster ownership 变化。

唯一被测变量是 **同一 deployment permission family 的 simultaneously deployable cardinality ceiling**。

## 6｜最近邻排除

### 最近邻 A｜XCOM 2 Commander `4→5→6`

相同：same actor / deployment object / permission family / quantitative cap。

不同：XCOM 是升级触发后的单向 expansion；本轮是临时 penalty gate 造成 `5→4→5` 可逆迁移。

所以本轮不是 XCOM 的第2个普通正例，而是它尚缺的 **reversibility mirror**。

### 最近邻 B｜King Lear `100→50→25→0`

相同：permission type 不变时 quantitative ceiling 收窄。

不同：Lear 是连续不可逆式 contraction；本轮 contraction 有明确 term/gate，并在同一 current window 内恢复原 cap。

### 最近邻 C｜technical capability retained

即使第五名 skater 身体上仍能滑入冰面，也不等于 Tikhonov 当前有合法 deploy permission。这里测的是现实 rule-bounded `x` scope，不是物理 capability。

## 7｜拿掉 / 反向

### 拿掉 penalty gate

若拿掉 slashing penalty，苏联不会进入 short-handed power-play 状态，被测 simultaneous deployment cap 不发生 `5→4`。

因此 contraction 对该 trigger 有现实依赖。

### 反向

若 penalty gate 保持 active，却仍允许 Tikhonov 合法部署五名 skater，则“cap=4”判定失败；电影明确进入美国 power-play 状态，与该反向不符。

若 penalty interval 终止后 cap 仍永久停在4，则 `4→5` restoration 判定失败；该结构也与 hockey penalty 的临时性及电影继续普通比赛不符。

## 8｜第三因素冻结

冻结：

- 球员伤病与竞技能力；
- 比分与最终胜负；
- 苏联/美国阵营身份；
- Tikhonov 的教练职位标签本身；
- 战术偏好；
- goalie replacement；
- 现实 1980 比赛中与电影不同的被罚球员/时间细节。

这些都不是本轮 scope_transition 的判据。

真正 causal trigger 只取电影中的：

```text
penalty gate ON
→ legal active-skater cap contracts
penalty interval ends
→ legal active-skater cap restores
```

## 9｜strict-v2 / protected-range 判定

```yaml
strict_v2_verified_positive: false
strict_v2_negative_guard_increment: false
strict_precondition_guard_increment: false
protected_range_increment: false
```

原因：本轮 `zn` 未独立过门，且研究对象就是 x-scope quantitative cap，不拿竞技目标或教练责任冒充 strict 方向门。

## 10｜成熟度与统计

```yaml
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
criterion_version: current-x-scope-distinction-v1_20260830
```

按写前实时清单：

```text
x_scope_dynamic_transition_controls: 27 -> 28
x_scope_dynamic_transition_works: 24 -> 25

strict_v2_verified_positive_controls: 0 -> 0
strict_v2_verified_positive_works: 0 -> 0
protected_range: no change
ordinary x-scope positive/boundary: no change
```

本条是 novel reversible quantitative-cap mechanism，所以允许在 `pending-review` 后继续计 dynamic；不修改 L1/L2 canonical。

## 11｜来源

公开核验入口：

- `Miracle (2004 film)` 剧情梗概：第三节苏联被判罚，美国进入 power play，Johnson 在 penalty 临近结束时得分。
- `Miracle (2004) Script` 公开转录：包含 Soviet slashing penalty、`power play`、剩余秒数倒计时和 Johnson 在 power play 尾声得分的连续对白。
- IIHF hockey penalty/situation materials：用于核对 minor-penalty / short-handed / full-strength 的规则型背景；不拿现代规则去覆盖电影自己的改编事实。

## 12｜下一高价值缺口

优先级回到：

1. P0 strict-v2 第一份真正 verified positive；
2. P1 path-set completeness 后的真 `n>1→1→0→target effect OFF`；
3. P3 edge-veto retained + downstream disposition `ON→OFF/narrower`；
4. P4 只收与 Pacific Rim 不同 trigger/topology 的 execution 机制。

quantitative cap 的 `high→low→high` 槽本轮已填，后续停止继续采同机制普通案例。