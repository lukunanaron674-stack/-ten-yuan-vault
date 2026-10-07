# FEEL-AB-AXIS-01｜R1 预注册实验包
updated: 2026-10-08
status: PREREGISTERED_WAIT_RUNTIME
authority: research-only
parent_q: Q-AXIS-002
production_bridge: 674-276
runtime_interface: 674-286
role_lab: 674-282
asset_source: 674-293

## 0｜本轮目的
只验证“单个形式/动作结构变量是否能推动人的感受方向”。不验证十元本体，不升级 canonical，不把 AI 自评当人类证据。

## 1｜当前证据权限
Z1≈C2；Z2≈C3；Z5≈C2；Z6≈C2-C3；Z7≈C2。
usage_permission: RESEARCH_ONLY
human_gate_status: NOT_YET_REACHED
c_level_after_preregistration: unchanged

## 2｜R1 选择：金轴 XN ↔ Z
选择原因：旧候选变量中“裁定/路径预设 ↔ 即兴/临场改道”最容易在同角色、同场景、同事件、同画风下做单变量动态 A/B；适合 H3 10–11 秒短块。
注意：这只是候选诱发机制，不预设它一定造成 XN↔Z 的真实人类感受位移。

### controlled_variable
action_path_precommitment

A:
- 动作路径在起始时即明确；
- 角色沿预设单一路径完成动作；
- 中途不临时改道；
- 端点与节奏提前固定。

B:
- 起始目标与端点保持相同；
- 中途出现一次明确但合理的临场改道；
- 改道不增加新事件、不换目标、不换场景；
- 最终仍到达与 A 相同端点。

### fixed_variables
character_id / canonical identity / costume / body ratio / scene / event goal / start_state / end_state / duration / camera family / style / lighting / weather / seed family / target object

## 3｜预注册预测（生成前锁定）
prediction_id: FEEL-PRED-01-R1
predictor_version: FEEL-PRED-v0
expected_direction:
- A 相对 B：候选 XN 感受分量更高；
- B 相对 A：候选 Z 感受分量更高。
competing_hypothesis:
- H0：A/B 的人类感受谱没有稳定方向位移；
- H1-alt：差异主要被“动作流畅/自然度”解释，而不是 XN↔Z；
- H2-alt：生成器执行差异/身份漂移造成伪位移。

predictor_confidence: LOW
prediction_locked_before_render: true

## 4｜双 seed 最小矩阵
A_seed1 / A_seed2 / B_seed1 / B_seed2
同一 seed family 成对；禁止只挑漂亮结果。
技术失败与感受失败分离。

## 5｜角色/资产选择规则
优先使用 674-293 中满足 asset_id + path + SHA256 + version 且角色身份/身体/服装职责匹配的资产。
当前 674-216 对 H3 新渲染仍存在角色/素材门禁，因此本包不伪造 READY_FOR_H3。
若 H04 完成角色包与生产包装配，优先 H04；否则保持 WAIT_RUNTIME_ASSET_GATE，不临时换散图顶替。

## 6｜H3 B端研究输入包
target_feeling_profile_10d: null
target_top1_top3: [XN, Z]
feeling_control_variables:
  - action_path_precommitment
elicitation_rule_refs:
  - Q-AXIS-002
  - FEEL-AB-AXIS-01-R1
predictor_confidence: LOW
evidence_level: E0
c_level: C3
usage_permission: RESEARCH_ONLY
human_gate_required: true
controlled_variable: action_path_precommitment
competing_hypothesis: H0/H1-alt/H2-alt

## 7｜HUMAN_GATE 触发前必须完成
1. A/B 四条真实 H3 输出存在；
2. 角色/场景/动作变量执行通过技术审核；
3. 抽取统一 start/25/50/75/end 帧；
4. 随机化 A/B 与 seed 顺序；
5. 隐藏十元、轴、预测答案；
6. 用户先自由描述，再做最小选择/强弱排序。

在 1–5 未完成前，不打扰用户。

## 8｜误差回写
无 HUMAN_GATE 时以下字段必须 null：
human_feeling_profile_10d / profile_mae / top1_hit / top3_overlap / directional_shift_hit

失败族优先：
F-FEEL-02 多变量污染
F-FEEL-03 seed偶然
F-FEEL-04 生成器未执行目标变量
F-FEEL-05 角色/场景身份漂移
F-FEEL-06 AI自产自评
F-FEEL-07 近邻感受混淆
F-FEEL-12 结构关系成立但人类感受未位移

## 9｜本轮 DONE / STOP
DONE：预注册变量、固定项、竞争假设、双 seed 矩阵、H3 输入字段、HUMAN_GATE 门槛全部冻结。
STOP：等待真实可绑定角色资产与 H3 runtime gate；不得因预注册完成把 Z2 从 C3 自动升级。
