---
q_id: Q-REL-002
problem_depth: D1
parent: G3
goal: AI能理解、预测、生成并编排人的目标感受
volume: 9
impact_weight: 9
status: OPEN
problem_state_version: v2
updated: 2026-10-07
---

# Q-REL-002｜生克补需要改写为感受之间的增强、压制、补全关系并重新验证

## 1｜问题一句话
旧生克补主要以端点结构机制描述；新体系需要验证的是：当一种感受或诱发结构加入后，另一种感受的强度、方向、完整性或张力是否发生稳定变化。

## 2｜新口径
- 生：是否提高另一感受出现/增强的概率或条件。
- 克：是否压低、限制或改写另一感受。
- 补：是否在同轴/相关感受间形成缺口填补、完整性提升或张力回收。

这些均为待验证感受关系，不因传统位置或旧关系表自动成立。

## 3｜前置依赖
Q-FEEL-001 与 Q-AXIS-002 至少达到可测量阶段。

## 4｜DONE
每条保留关系至少具备：
- 预测的感受谱变化；
- 控变量 A/B；
- 竞争解释；
- 反例；
- 人类盲审；
- 跨至少两个语境复现。


## FEEL-REL-XN-ZX-001｜2026-10-08｜本轮资产/基线门禁 receipt

- run_type: RESEARCH / Q-REL-002 / single-variable A/B
- campaign_status: PRELAUNCH_WAIT_ASSET（未启动有效实验）
- cycle_result: BLOCKER_CONFIRMED
- effective_rounds: 0/6
- scope: 仅研究感受层“克”关系；不修改 R4、五轴端点或30条关系表。
- checked_sources: Linear 674-104 的 FEEL-AXIS-TU-001 主观反馈；Linear 674-105 现行关系路由；GitHub 感受核心正本、R4 研究路线、B1_R5关系输入审计、Q-REL-002。
- registered_relation: `克_xn_zx` / 克 / xn → zx；B1 状态 `legacy_mechanism_documented`、`case_valid=not_assessed`、`r5_use=conditional_with_case_evidence`，不等于人类感受层已证实。
- hypothesis_to_freeze_before_launch: 同一主体、相同目标与相同场景下，加入外部持续有效的程序性决定权限限制（B），比没有该限制（A）更可能降低“自主决定、立即开路”的人类主观感受强度；预期作用为“克”，但不预设十元标签为真。
- changed_variable_only: 外部规则是否真实限制主体的决定权（off/on）；其余构图、角色、动作、事件结果、照明、颜色和镜头保持一致。
- negative_control: 仅出现规章文字但不实际限制决定权的版本，不可被当作“克”。
- asset_locator_A: null
- asset_locator_B: null
- human_baseline: null（Q-FEEL-001 测量可靠性基线未找到可核验样本）
- prereg_threshold: null（必须在正式启动前连同基线、最小独立样本量和盲测方案共同冻结；不能事后根据结果定阈值）
- blind_test: 待真实 A/B 资产与基线齐备后，随机化 A/B、隐藏假设与关系标签；先自由感受描述，再填 1–10 强度。
- current_human_observation: FEEL-AXIS-TU-001 A=温暖3、B=神圣3、差异5，仅是土轴微光方向案例，既非本关系样本，也不满足单变量/独立复现；不得计入本 Campaign。
- metrics: {genuine_blind_samples: null, feeling_intensity_error: null, relation_direction_accuracy: null, sheng_ke_bu_agreement: null, label_correct_feeling_wrong_fp: null, unknown_original_ratio: null}
- blocker: 缺少带原始 locator / 版本 / 审核状态的同主体单变量 A/B 真实素材，且没有可核验的人类测量基线；当前无法合法启动“克_xn_zx”感受实验。
- next_gate: 只准备并核验一组中性、不带答案的真实 A/B 素材与人类基线；未满足前保持 WAIT_ASSET，不生成指标、不调用总控重复统计。
- can_update_canonical: false
- total_control_interface: 仅输出此 receipt 指针给证据总控，后者不得重复执行或计数。


## FEEL-REL-XN-ZX-001｜2026-10-08 R0.2｜资产适配复核

- cycle_result: BLOCKER_CONFIRMED（新确认的是“存在可取回图像 ≠ 存在可用单变量关系对照”；不等于有效实验完成）
- checked_at: 2026-10-08 21:06 Asia/Shanghai
- campaign: FEEL-REL-XN-ZX-001 / Q-REL-002 / 仅验证感受层“克_xn_zx”
- evidence_sources:
  - GitHub Q-FEEL-001 §8 R1.8：674-293 六张 PNG 原字节可取回、6/6 SHA 匹配且工具侧可渲染；但属于同来源板的感受测量候选，**不是**“XN 对 ZX 的决定权 off/on”配对刺激，且人类盲化展示及父图链仍未验收。
  - Linear 674-296：截至本次读取仍为 Todo；R3 附件明示 A_READY=0 / 4080 host blocked。注意 H3 的 A_READY 不是离线感受实验的必要条件；不能以此声称所有静态图不可用。
  - Linear 674-297：最新快照称受控实验 0，角色/场景的感受判断仍 UNKNOWN/PROVISIONAL；没有找到可复用的同主体、同场景、单变量权限 off/on 的合格 A/B 配对。
  - Linear 674-104：FEEL-AXIS-TU-001 人类“温暖3/神圣3/差异5”属土轴微光案例，既不是本关系，也未通过控变量复现；不挪用。
  - Linear 674-105：关系母框明确五轴对立不等于生克补；冻结关系登记与感受层实证严格分开。
- frozen_hypothesis: 继续沿用上条 receipt 的 XN→克→ZX 候选假设；本轮没有修改 R4 / 五轴配对 / 30 条关系登记。
- asset_status: WAIT_ASSET（有可追溯图像，但**无本关系的合格 A/B**）；human_baseline: null；human_verdict: null。
- metrics: {genuine_blind_samples: null, feeling_intensity_error: null, relation_direction_accuracy: null, sheng_ke_bu_agreement: null, label_correct_feeling_wrong_fp: null, unknown_original_ratio: null}
- effective_rounds: 0/6；此轮只做资产适配门禁核验，不记为有效实验轮次，也不计入总控 Benchmark。
- new_failure_family: SOURCE_IMAGES_EXIST_BUT_NOT_MATCHED_CAUSAL_PAIR（真实图可用性与受控关系对照适配性混淆）。
- next_gate: 在已有资产中找到/制作同主体同语境的两版真实刺激，唯一操纵“最终决定权是否受外部程序限制”，同时取得可核验的人类自由描述+1–10测量基线；冻结样本量、成功阈值与盲码后才能启动有效轮次。不能满足则继续 WAIT_ASSET/WAIT_EXTERNAL，不用 AI 自评填数。
- can_update_canonical: false；handoff: 本 receipt 供证据总控消费，禁止总控重复执行或统计。
