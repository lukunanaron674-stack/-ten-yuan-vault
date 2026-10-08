# AI感受系统｜生产接口与预注册实验包 v1.0
updated: 2026-10-07
status: ACTIVE
authority: research-interface
canonical_feeling_model: 01-十元系统/三元十元感受模型_核心正本_v1.0_20261007.md

## 0｜目的
把感受研究接到角色链 674-282 与 H3 B端 canonical 674-276，同时严格阻止“文档完成=证据升级”。

## 1｜统一 C 分流
- C0-C4: RESEARCH_ONLY
- C5-C6: EXPERIMENTAL_ONLY
- C7-C8: CALLABLE_CREATIVE_ASSIST
- C9: CONTROL_RULE_CANDIDATE；必须同时满足 HUMAN_GATE + 反向生成真实命中
- C10: 不作为近期目标

## 2｜角色链 282 写回包
```yaml
character_id:
asset_id:
feeling_profile_latest:
  X: null
  Z: null
  N: null
  ZN: null
  NZ: null
  XN: null
  NX: null
  ZX: null
  XZ: null
  X并Z: null
feeling_rule_refs: []
c_level:
evidence_level:
human_gate_status: NOT_REQUIRED|PENDING|PASSED|FAILED
source_scope:
candidate_xn: []
counterexamples: []
next_z:
```
没有真实 HUMAN_GATE 时 feeling_profile_latest 若来自 AI，只能标 prediction，不得写 human_observed。

## 3｜H3 B端 276 输入包
```yaml
task_id:
character_id:
scene_id:
target_feeling_profile_10d:
target_top1_top3: []
feeling_control_variables: []
elicitation_rule_refs: []
predictor_confidence:
evidence_level:
c_level:
usage_permission: RESEARCH_ONLY|EXPERIMENTAL_ONLY|CALLABLE_CREATIVE_ASSIST|CONTROL_RULE_CANDIDATE
human_gate_required:
fixed_variables: []
controlled_variable:
competing_hypothesis:
```

## 4｜H3/C端回流误差包
```yaml
task_id:
video_version:
prediction_locked_before_render: true
predicted_feeling_profile_10d:
human_feeling_profile_10d:
profile_mae:
top1_hit:
top3_overlap:
directional_shift_hit:
free_report:
failure_family:
c_level_before:
c_level_after:
upgrade_reason:
downgrade_reason:
next_action:
```
无 HUMAN_GATE 时 human_feeling_profile_10d / profile_mae / top1_hit / top3_overlap 必须保持 null，不得由 AI 自填。

## 5｜非人类门禁可立即执行：预注册 A/B
### FEEL-AB-AXIS-01｜单变量控制
目的：先验证“形式变量能否推动感受方向”，不证明十元本体。
- 固定：character_id / scene_id / event / duration / seed family / style / weather / light（除非它是 controlled_variable）
- A/B 只改一个 controlled_variable
- 每条件至少双抽，防止单 seed 偶然
- 生成前锁定 expected_direction 与 competing_hypothesis
- 技术失败与感受失败分开

### FEEL-PRED-01｜AI预注册预测
1. AI 在看不到人反馈时锁定 10D prediction。
2. 记录 predictor_version / rule_refs / confidence。
3. 再进入盲化 HUMAN_GATE。
4. 揭晓后才计算 MAE / Top1 / Top3 / direction shift。
5. failure 不删除，进入 failure_family。

### FEEL-GEN-01｜反向生成
仅 C5+ 可实验；C7+ 才可作为稳定创作辅助候选。
目标谱 → 选控制变量 → A/B H3 → HUMAN_GATE → 误差 → 只改失败字段 → next_version。
C9 必须有第二任务/媒介复验，不得单样本升级。

## 6｜盲化 HUMAN_GATE 卡
给用户只显示：
- A/B 或 2-4 张参考图/H3抽帧；
- 不显示十元名、目标标签、预测答案；
- 只问第一感觉、哪张更接近目标描述、强弱排序；
- 自由描述先于十元1-10谱。

## 7｜failure family
- F-FEEL-01 标签泄漏
- F-FEEL-02 多变量污染
- F-FEEL-03 seed偶然
- F-FEEL-04 生成器未执行目标变量
- F-FEEL-05 角色/场景身份漂移
- F-FEEL-06 AI自产自评
- F-FEEL-07 近邻感受混淆
- F-FEEL-08 观察者分歧
- F-FEEL-09 跨语境失效
- F-FEEL-10 漂亮结果选择偏差
- F-FEEL-11 动态终点命中但过程未命中
- F-FEEL-12 结构关系成立但人类感受未位移

## 8｜当前真实成熟度
沿用 AI感受系统 Z1-Z8 阶梯，不因本接口落地升级：
Z1≈C2；Z2≈C3；Z3≈C3；Z4≈C3；Z5≈C2；Z6≈C2-C3；Z7≈C2；Z8≈C4。
因此当前所有生产接入均为 RESEARCH_ONLY；真正 H3 感受控制仍需先获得 HUMAN_GATE 数据。

## 9｜下一自动动作
1. 从现有角色/场景池选可追溯资产；
2. 自动形成 FEEL-AB-AXIS-01 实验卡；
3. 锁预测后跑 H3/抽帧；
4. 准备盲化参考图/抽帧组；
5. 到此才触发 HUMAN_GATE；
6. 回写误差与 C 等级，不自动升级。
