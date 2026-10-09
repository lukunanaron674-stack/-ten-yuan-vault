---
type: feeling-execution-experiment
round: R5
status: INPUT_PREFLIGHT_BLOCKED
updated: 2026-10-09
source_research: "AI问题解决Canvas/五行十元研究/感受实现研究_20261009/R4_AI感受目标编译_H3规则候选.md"
owners: [674-104, 674-106, 674-286, 674-296]
asset_owner: 674-293
review_owner: 674-173
video_evidence_owner: 674-289
canonical_override: false
test_id: FEEL-R5-ISO-v1
human_metrics: null
render_status: NOT_SUBMITTED
---

# R5｜“孤僻 vs 宁静”最小差异 H3 A/B｜真实素材执行包

## 0. 研究目标（不是五轴映射）
验证观众是否因**同一角色对外部环境表现出不同程度的联系/回避**，自发产生“孤僻 / 隔膜”而非“宁静 / 独处 / 警觉 / 冷漠”的感受。观众可以完全不给这些词打分；主要效应必须先通过自由感受报告确定，禁止AI自评命中。

这不是“看N26是不是NX”的测试；NX只是历史标签，不能顶替人的感受。目标词“孤僻”不自动等于N26角色人格，当前只是观众感受假设。

## 1. 2026-10-08 最新可复核门禁
- 674-296 R3 源端实际验证：H05/H06/N14/S09/AST-0284，MISSING_SOURCE=0；但 A_READY=0、WAIT_REVIEW=5、BLOCKED_4080=5。该5项**不包括**本卡N26，不可偷换为N26已PASS或缺失。
- 296 最新 4080 目标端连通性检查（2026-10-08 14:21 UTC）：desktop-fkeugls-1 offline；LAPTOP-M57EA4JG为RTX3070，不能替代4080。
- 286 内部 G3 有历史角色 N26 兜帽海湾旅人与既有 P1/P2/SCIMG_A_wide_nofg 场景的实验候选，状态非新工单最终 A_READY；须逐个查 293/216/173 真实源图和授权。已有测试“连续步行 vs 停顿”研究NX，**不可作为本卡孤僻/宁静已通过证据**。
- 不使用R4草案里未溯源“船房里的小孩”。不新生角色、船、码头设施、建筑或另一角色。

## 2. PRECONDITION 实际材料合格才允许镜头
N26 + 既有海湾画面的证据必须全部填真实：
```yaml
source_character_id: N26
source_identity_images: [P1, P2] # 占位标识；实际路径和字节未复核
source_scene_image: SCIMG_A_wide_nofg # 占位标识
source_char_asset_id: null
source_scene_asset_id: null
source_character_sha256: null
source_scene_sha256: null
source_character_version: null
source_scene_version: null
user_review_receipt: null
review_scope: null
asset_pair_visual_match: null
4080_machine_id: null
4080_gpu_verified: null
4080_character_path_read_ok: null
4080_scene_path_read_ok: null
4080_input_sha_match: null
comfyui_workflow_ref_binding: null
source_binding_gate: BLOCKED
```
且真实画面中必须已经存在一种**可以被观看者识别的联系机会/外部互动信号**。只看无人空湾和旅人转头，很可能只有“独处/警觉”，无资格声称测出了“主动拒绝联系的孤僻感”；若没有可见线索，登记 `BLOCKED_RELATIONAL_CUE` 并返回感受目标编译，不得在Prompt虚构陌生人/喊话/灯塔讯号。

## 3. 预注册预测与反证
- H1（条件性）：如果实际源图提供可识别的既有外部联结线索，B 的“主动回避/隔膜/孤僻”自由感受报告可能多于 A；而 A 相对更“开放/平和/可交流”。
- H0：A/B均只产生“宁静、独处、普通转头、行走”，没有目标感受差。
- H2（竞争）：B 激活“警觉、害怕、害羞、倔强、悲伤、疲惫、冷漠”而非孤僻。
- 如果动作差异难读、同一场景被重构或身份变化，记 TECHNICAL_CONFOUNDED；不当作感受诱发失败或成功。
- 只有单次用户自由报告不能宣称E1“单人重复趋势”；需隔时重测与换seed/素材。

## 4. 原则和镜头时长
第一阶段沿用 **实际验证过** 的 H3 124f/24fps=5.17s 预览配方，不凭空将5秒视频当10秒；若A端另有10–11s验证文件，再另行做完整10s版本。
两版本**同一个** N26 角色身份、同一现有海湾原图、机位、画面密度、画风、颜色、时间、运动量约束、参考图接线、seed和工作流参数；唯一拟控变量是「目光/头部是否主动朝向既有可识别的联系线索」。
音频第一轮禁增角色旁白、对白、煽情配乐；若音轨不可锁定，音频记 confound。

## 5. 秒级时间分镜
| 时刻 | A（朝向联系） | B（回避联系） |
|---|---|---|
| 0–1.5s | 两版同一位置，低限自然静止 | 完全一致 |
| 1.5–3.3s | 仅目光/小幅转头朝向**原图中已经存在**的联系线索 | 同样幅度、同样时长的目光/小幅转头，但转离同一线索 |
| 3.3–5.17s | 固定目光，仍是相同机位 | 保持回避后的视线，同机位 |
不允许多人物、添船、另造互动动作或改变景别。若画面中没有有效联系线索，不做此对照。

## 6. A端英文提示词（待真实资产门通过后启用）
### COMMON
```text
Use the EXACT, hash-verified existing N26 character reference (identity) and the EXACT, hash-verified corresponding N26 harbor environment image (scene). Keep the original costume, hood, face, body proportions, silhouette, linework, palette, lighting, and every existing environment element intact. One locked medium-wide composition for the full 124 frames at 24 fps (about 5.17 seconds), no cuts, no zoom, no new objects, no new character, no new ship, no invented building, no inserted dialogue, no subtitles. Only very subtle natural stillness and the specified small gaze/head adjustment from seconds 1.5 to 3.3. The original reference images must be actually wired into the H3 model workflow; a textual mention alone does not count as reference binding. Do not infer or hallucinate social signals absent from the source.
```

### A behavior (single variable)
```text
The traveler slowly redirects a subtle gaze and slight head orientation TOWARD one ALREADY VISIBLE and socially meaningful point of connection in the exact existing scene; hold the new orientation calmly until the end. No other action changes.
```

### B behavior (single variable)
```text
The traveler slowly redirects a subtle gaze and slight head orientation AWAY FROM the SAME ALREADY VISIBLE point of connection in the exact existing scene; hold the averted orientation calmly until the end. No other action changes.
```

**提示词不保证模型遵守单变量**：逐帧抽查视觉事实，而不是只看文本有无规定。

## 7. USER 感受测试（严格先自由、后标签）
- 呈现前随机编号，不告知“A=朝向/B=回避”，也不透露“孤僻是目标”。
- 第一问：你第一感觉是什么？可以 2–3 种，或者“没感觉”。
- 第二问：哪个画面/动作/秒数最触发这种感觉？
- 最后才给强度1–10：孤僻、宁静、警觉、恐惧、悲伤、冷漠、其他；可填0或“无”作为不存在，1–10表示存在的强度。
- A/B都打分；记录USER原话，不替USER填十元；目标可达到“无差异”或“反向”。
- 判定单次：`TARGET_DIRECTION_SUPPORTED` 仅当自由描述确有孤僻、B比A更强且近邻不是实际主要解释；否则 `NULL / REVERSED / COMPETITOR_DOMINANT / TECH_CONF`。依证据等级不得直接锁XN。

## 8. 执行路由（不得假装已执行）
1. 293+296+173：N26 和既有场景的 source_id、路径、字节SHA、格位版本、身份/景别、 USER 许可、4080目标机读入，全PASS；
2. 286：比对已有 G3 卡避免重复；把本卡 `SHOT_NEED_DRAFT` 编译成两个 `SHOT_PACKAGE`，AG-07 + AG-11 + AG-04 preflight；
3. 216/4080：单实例、串行A→B，实际H3 workflow；记录真实 seed、framecount、run_id、prompt_id、input_sha、output_sha、host_gpu、duration、peak_vram；
4. 289：只在真实文件落地后注册MP4/首中尾帧；不得伪造视频编号；
5. 173（USER盲审）+106（证据）+104（理论候选修正）消费真实回执。
若机器仍离线或素材PASS缺失，维持 `NOT_SUBMITTED/BLOCKED`，保留本包不新建Issue、不制造素材PASS。

## 9. R5当前 receipt
```yaml
test_id: FEEL-R5-ISO-v1
status: BLOCKED_INPUT
latest_verified_296_ready_count: 0
4080_target_offline_on_latest_receipt: true
n26_specific_asset_gate: UNKNOWN_NOT_PASSED
render_submitted: false
video_output: null
blind_human_result: null
evidence_level: E0
next_gate: "核 N26+海湾真实素材和可读互动线索；4080上线后按要求跑最小A/B"
```
