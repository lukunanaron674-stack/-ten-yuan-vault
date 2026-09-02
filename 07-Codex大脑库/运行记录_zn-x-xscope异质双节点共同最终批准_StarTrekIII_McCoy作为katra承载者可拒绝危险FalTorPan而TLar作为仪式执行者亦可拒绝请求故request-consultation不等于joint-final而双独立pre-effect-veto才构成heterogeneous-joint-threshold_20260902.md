---
type: ten-yuan-fire-axis-boundary-pressure-test
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_type: x-scope-decision-structure-calibration-heterogeneous-joint-final-threshold
work: Star Trek III The Search for Spock
actor: Leonard McCoy
stage: Mount Seleya Fal-Tor-Pan initiation
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate_current: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 97
x_scope_decision_structure_calibration_increment: true
x_scope_decision_structure_calibration_work_increment: true
x_scope_boundary_guard_increment: false
x_scope_dynamic_transition_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_guard_increment: false
protected_range_increment: false
may_override_canonical: false
created: 2026-09-02
---

# zn↔x 火轴边界压力测试｜Star Trek III｜Fal-Tor-Pan 异质双节点共同最终批准

## 0｜启动对齐
写前以 `main@fe96f4dd75701908a9bc2a53ae8c2228db12bc01` 为真值。已对齐最近 commits、L0/L1 门禁、L1 十元—五行正本、zn/x current 信息卡与准度路由、相关关系卡/`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current 与 x-scope current。current canonical 高于本记录；木轴只迁移验证方法，不迁移理论结论。

x-scope ordinary positive 已 pending-review，本轮不堆普通正例；只测试 P3：真正 joint/shared final decision 与“多人参与/咨询但单一最终裁决”的最小差异。

## 1｜作品 / 人物 / 阶段 / 样本类型
- 作品：《Star Trek III: The Search for Spock》(1984)
- 锁定人物：Leonard McCoy；同时记录 T'Lar 为同一 final-decision threshold 的另一独立节点。
- 当前窗口：Vulcan Mount Seleya，Sarek 请求执行 Fal-Tor-Pan，到仪式真正启动。
- 对象层：`Fal-Tor-Pan procedure initiation / katra refusion authorization`，不是 Spock 身体所有权、McCoy 人身处分或 Vulcan 全局宗教权威。
- 样本类型：P3 `heterogeneous joint-final threshold calibration`。

## 2｜事实链
1. Spock 死前把 katra 转入 McCoy；《Star Trek III》明确以 McCoy 为当前 katra carrier。
2. Sarek 向 High Priestess T'Lar 请求 Fal-Tor-Pan。
3. T'Lar 明确指出该请求危险、久未实行，并不是收到请求就自动执行。
4. T'Lar 随后直接向 McCoy 说明风险并询问其是否选择承担危险；McCoy明确选择继续。
5. T'Lar随后才开始对 Spock 与 McCoy 执行仪式；仪式最终成功，把 katra 从 McCoy 重新并入 Spock 身体。

外部事实支持：电影剧本中 T'Lar 先审查 Sarek 的请求，再询问 McCoy 是否选择危险；剧情资料一致确认 McCoy 同意后 T'Lar 执行 Fal-Tor-Pan，最终成功完成 refusion。

## 3｜zn 独立门
本轮不锁 McCoy `zn`。

McCoy 接受风险可由救 Spock、解除自身 katra 负担、朋友关系、Sarek/Kirk 已形成的任务链和即时医疗风险共同解释。不能从“忠诚朋友”“医生”“愿冒险”或结局倒推不可让渡原则。

```yaml
zn_current: not_locked
strict_test_allowed: false
```

因此 strict-v2 positive / negative / deferred / precondition 均不增。

## 4｜x-scope 固定拆分
```yaml
actor: Leonard McCoy
object: Fal-Tor-Pan procedure initiation on McCoy-carried Spock katra

permission_type:
  contact: true
  carry_katra: true_current_fact
  consent_to_risk_on_self_and_carried_katra: true
  refuse_consent_before_procedure: true_supported_by_explicit_choice_request
  unilaterally_start_ritual: false
  execute_ritual: false
  dispose_katra_unilaterally: not_inferred

scope:
  McCoy: consent/refusal node for procedure involving his body and carried katra
  T_Lar: ritual-acceptance/execution node
  Sarek: request/source node

term: Mount_Seleya_pre-initiation_window
revocability: pre-effect consent/refusal tested at initiation
return_obligation: not_material

same_layer_pre_effect_veto:
  McCoy: yes
  T_Lar: yes
  Sarek_request_alone: no_effect

global_override: none_inferred
ultimate_title: not_used

decision_structure: joint_threshold_heterogeneous_nodes
consultation_structure:
  Sarek_requests: true
  Kirk_present: true
  request_or_presence_not_counted_as_final_veto
final_decision_structure:
  T_Lar_accepts_and_is_willing_to_perform: required
  McCoy_accepts_personal_risk_and_participation: required
  either_missing_before_effect: procedure_does_not_start_on_shown_structure
execution_structure:
  T_Lar_and_Vulcan_ritual_team_execute
  McCoy_is_required_participant_carrier
co_decision_nodes:
  - T_Lar_procedure_acceptance
  - McCoy_carrier_consent
```

## 5｜关键压力
最危险的错误推理有两种。

第一种：
```text
Sarek 提出请求
+ T'Lar 最终执行
→ Sarek / T'Lar 任一人单方拥有完整 final decision x
```
失败。Sarek 的 request 不会自动生效；T'Lar 在执行前还必须取得 McCoy 对危险程序的明确选择。

第二种：
```text
多人都在场、都发表意见、都参与仪式
→ joint final decision
```
也失败。Kirk、Sarek、仪式团队的存在本身都不能自动计 joint-final node。真正有判别力的是：**生效前同一 procedure initiation 上存在两个功能不同、但都不可跳过的节点。**

因此新增 calibration：

> joint/shared final decision 不要求共同节点拥有同一种权限。若同一 final effect 在生效前必须同时跨过 `operator acceptance` 与 `affected/carrier consent` 两个异质节点，且任一节点可在 effect 前使程序不启动，则可判 `heterogeneous joint-threshold`；request、consultation、presence 与 downstream execution participation 不自动计入 co-decision nodes。

## 6｜最近邻
### vs 《Crimson Tide》mandatory concurrence
Crimson Tide 的 Captain/XO 属于较同质的 mandatory concurrence：两个授权节点共同满足同一特殊对象层 threshold。

本轮新增的是异质节点：
- T'Lar：procedure acceptance + execution authority；
- McCoy：carrier / affected-person consent；
两者权限类型不同，但对同一 procedure initiation 都具有 pre-effect blocking power。

因此补的是“joint 不要求权限同质”的校准，不重复 k-of-n concurrence。

### vs consultation-but-single-final
若 Sarek、Kirk 只是劝说，而 T'Lar 可在无需 McCoy选择的情况下单独启动，则只能判 consultation + unilateral final。作品实际展示了对 McCoy 的独立危险选择门，因此不能把他降格为普通咨询者。

## 7｜拿掉 / 反向
### 拿掉 McCoy consent node
若保持 Sarek request、T'Lar authority 与 ritual team，但 McCoy 的选择不影响程序能否启动，则 final structure 收缩为 T'Lar unilateral/operator-final，joint-threshold 证据消失。

### 拿掉 T'Lar acceptance node
若 McCoy一同意即可自行让 refusion 生效，则 McCoy consent 将同时成为 final effect node；但作品没有这种结构。McCoy不能单独执行 Fal-Tor-Pan。

### 反向
看到两人都参与成功结果，不能反推两人都是 co-final nodes。必须回到 effect 前：谁能让同一结果在生效前停住。

## 8｜第三因素冻结
冻结：Vulcan宗教身份、McCoy医生身份、Sarek父亲身份、Kirk友情、Spock主角地位、仪式神圣主题、最终复活成功与情绪价值。

只保留：
```text
same procedure
+ request node
+ operator acceptance node
+ carrier consent node
+ explicit pre-effect risk choice
+ procedure starts only after threshold completed
```
分类仍成立。

## 9｜strict-v2 / 成熟度 / 统计
```yaml
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
x_scope_positive: +0
x_scope_boundary: +0
x_scope_dynamic: +0
protected_range: +0
decision_structure_calibration: +1_control/+1_work
```

- fact confidence: 99
- classification confidence: 97
- knowledge status: `evidence-locked`

current overview 仅正式聚合 `decision_structure_calibration_controls: 1`，尚未维护独立 work 字段；本轮因此只在 provenance 记录 `+1 control / +1 independent work`，不擅自修改 L1/L2 或 invent canonical aggregate schema。后续 digest 若吸收，应把 calibration controls 从 1→2，并决定是否正式增设 works 字段。

## 10｜本轮锁定句
> **joint/shared final decision 的判据是同一 effect 生效前的 mandatory blocking topology，不是参与人数，也不要求各 co-decision node 权限同质。`operator acceptance + affected/carrier consent` 可以构成 heterogeneous joint-threshold；request、consultation、presence、execution participation 均不能自动替代 pre-effect co-final node。**

## 11｜下一轮最高信息增益
P0 仍优先寻找首个 strict-v2 verified positive，不降门。

若 P0 继续没有 ≥95，P3 下一轮最值钱的是本机制的最小负镜像：
```text
same-looking two-person process
+ A 必须咨询 B / 获取建议
但 B 没有 pre-effect veto
+ A 可在 B 反对后仍让同一 final effect 生效
→ consultation=true
→ final_decision=unilateral
```
优先找同一人物、同一对象层、跨阶段从 `heterogeneous joint-threshold → consultation-only/unilateral` 的动态迁移，信息增益高于再堆第二个静态双签案例。