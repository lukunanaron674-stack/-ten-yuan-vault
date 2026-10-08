---
experiment_id: Q-FEEL-001-BLIND-R0
parent_q: Q-FEEL-001
status: WAIT_PARENT_BYTES_AND_BLIND_DISPLAY
date: 2026-10-08
authority: research-only
owner: Lina01/674-104
evidence_governance: Lina00/674-93
asset_source: Linear 674-293
human_gate: NOT_READY
confidence_before: C2
confidence_after: C2
evidence_before: E0
evidence_after: E0
human_feeling_profile: null
profile_mae: null
top1_hit: null
top3_overlap: null
---

# Q-FEEL-001｜BLIND-R0：自由描述可重复性基线｜预注册包

## 0. 边界与目的
本子Campaign只解决 **Q-FEEL-001：自由感受描述能否在同一刺激的重复观察中保持可辨认的稳定性**。它不验证五轴、不执行任何五轴单变量 A/B、不验证十元本体、不调用 H3、不改变十元感受正本。五轴实验的实际执行与计数属于独立的“五轴感受实验推进”；此处仅可读取其receipt，不并入本实验样本数。

现有正本仅冻结 X=醒、Z=张、N=耐三个一级最小体验核；其余七元最小体验句仍未得到人类证据，不在本包内臆造或冻结。自由描述先于理论标签。

## 1. 预注册假设（在人类反馈前冻结）
- H0：同一人面对同一图像的两次自由感受描述，其一致性不高于面对不同图像的描述。
- H1：同一人对同一图像的第一主导感受具有可重复性，且重复一致率比不同图像的匹配率至少高 0.15。
- H2（混淆解释）：差异主要来自记住图像、画面题材或“好看程度”，而非感受本身。须用24小时以上间隔、无提示复测、单独记录“画面特征描述”予以区分。

不预测任何具体图像应当属于 X/Z/N/其余七元；不存在“预设正确答案”。

## 2. 候选真实资产登记（非正式入组）
来自 Linear 674-293 的 `AV-20261008-BOARD-C`，同一张3×5来源板裁切，以下 SHA256 取自 674-293 已登记的资产评论，**尚未在本次运行重新下载并逐字节复算**。

| internal_asset_id | declared SHA256 | version | original status |
|---|---|---|---|
| AV-20261008-BOARD-C-02 | 6934b7e0cb536bd06f7941851b6368edf703e2df8046f4e4b8f79abd7fe7bf45 | v1 | UNREVIEWED |
| AV-20261008-BOARD-C-04 | a333396bd303aadd44bbf5bc139adf01ea816c485547795f9bc226897010e0a5 | v3 | UNREVIEWED |
| AV-20261008-BOARD-C-05 | df31915bc444982d2518aefd922fe95e45d1c55ec3678edfa764611d2ad6acc2 | v2 | UNREVIEWED |
| AV-20261008-BOARD-C-12 | c96d9eb0f97783f6c86410c23cd4e790cc78ac825b60ec0a803025568b644a16 | v1 | UNREVIEWED |
| AV-20261008-BOARD-C-13 | eb15e9b5c024f15c38213281d81813cc673aabc2c877d87ffc2c5aa56c0f2372 | v2 | UNREVIEWED |
| AV-20261008-BOARD-C-15 | 2afe0baa6154f1864bfcfb24dba6af9f5d35da90f816d319e18571e6c439cf72 | v2 | UNREVIEWED |

这六张属于用户筛选过的同板候选，**只允许用于方法回归/个人基线探索**；存在选择偏差、同画风同题材偏差，不允许算外部泛化。UNREVIEWED不等于用户审美PASS；感受测量也不等于角色验收。

正式入组前须：通过 674-293 附件或资产路径读取图像原字节→复核 SHA256→确认盲化显示链接/可展示性→核对 parent_asset_id/version→排除损坏、重复与已被用户看过的泄漏风险。无法完成则 `WAIT_ASSET_VERIFICATION`，不请求用户。

## 3. 盲化/随机化
正式验证后将六张图随机映射为 `S01…S06`（映射密钥保存在非用户展示的记录中）；同一观察者 Session-A 看六张，至少24小时后 Session-B 看同六张但顺序重新随机，任何界面不得显示原图序号、十元标签、目标方向、预测答案。随机种子在执行前冻结并登记，不事后按结果重排。观察者只看到真实图像与通用问题。

如仅有用户一人参与，结果只能标记“个人重复测量”，不得声称多人基线。

## 4. 人类最小任务（仅HUMAN_GATE就绪后）
Stage A（必须最先）：**“第一眼你感到什么？用自己的话说；哪一处最影响这个感觉？”** 保存原话，不即时映射十元。

Stage B（在Stage A锁定后）：
- 感受强度 1–10（允许无明显感受/说不清）；
- 自我确定度 1–10；
- 愉悦度 -5…+5、激活度 0–10；
- 是否先前见过此图 yes/no/unsure。

不显示十元词，不把用户回答自动当成十元标签。若没有合格展示、资产SHA与预锁协议，**不触发 HUMAN_GATE**。

## 5. 分析与验收（预注册）
- Primary：由两名互相独立、对图像身份和理论标签盲化的编码者，对自由描述的“首要感受”进行归纳编码。记录原文、编码者ID、分歧；不许AI自己产出用户原文。
- Repeat agreement：同观察者同图两次首要感受是否一致；和不同图匹配率比较，主效应目标 `Δagreement >= 0.15`。
- Rating stability：同图两次感受强度绝对差 `median <= 2/10` 为探索性门槛。
- Coding agreement：两名独立编码者 Cohen κ >= 0.60 作为最低可用门槛；若类别稀疏同时报告原始一致率，不用单一κ遮蔽类别偏斜。
- 观察者探索 n=5–8 仅用于可行性；正式多人基线建议 n>=20 并报告分布和置信区间。未达到样本量不升多人证据等级。
- 反例：同图描述差异极大、只说画面物件、不自发报告感受、重复被记忆影响，均必须保留为 failure，不删除。
- 若无真实人类自由描述：`human_feeling_profile=null; MAE=null; Top1=null; Top3=null`，不计算“成功率”。

## 6. 轮次预算与停止
最多6个**有效实验轮次**，没有实际新实验数据的调度/读取不计有效轮次。
- R0：预注册与候选资产索引（本文件；不是人类证据）。
- R1：复核图像字节/显示能力，锁盲码与样本包。
- R2：探索性自由描述+重复测量（仅满足HUMAN_GATE后）。
- R3：独立编码与混淆/稳定性分析。
- R4–R6：仅在前轮真实证据显示具体缺口时，限量单变量修正/复测。
连续2个**有效轮次**无新增可复核证据或无改进，STOP/REPLAN；达到预设门槛即STOP并把协议交给Q-FEEL测量生产入口。无真实素材/用户反馈则WAIT，不无限扩轮。

## 7. 本轮可复核结论与状态
- 结论：Q-FEEL-001 的“自由描述可重复性”现已有**冻结的研究设计与可追溯候选资产清单**；尚无资产字节复验、实际盲测、人类重复测量或编码结果。
- C: C2→C2（不升）；E: E0→E0（不升）；usage_permission: RESEARCH_ONLY。
- `HUMAN_GATE=NOT_READY`; `NEXT=VERIFY_ASSET_BYTES_AND_BLIND_DISPLAY`。
- 研究写回位置：Q-FEEL-001 原Q + Lina01/674-104；跨系统证据总控 Lina00/674-93。
- 禁止改写感受正本、伪报USER PASS、借用独立五轴A/B receipt计本包实验成绩。


## 8. R1｜真实图像字节核验回执（2026-10-08）

- receipt_id: `Q-FEEL-001-BLIND-R0-R1-ASSET-VERIFY-20261008`
- source_issue: Linear `674-293`; source_comment_id: `fd93a4cb-4a39-4702-8ea3-c778a8cb83fc`
- verification_method: 上一自动轮读取6个Linear image/png附件原字节，复算SHA256，并检查PNG签名/IHDR尺寸；本次为**既有回执的回写**，不冒充再次下载复算。
- result: 6/6 SHA256匹配；6个SHA互不相同；第04号原预注册文件哈希被截断，现已更正为完整64位值。

| asset_id | bytes | size | verified_sha256 |
|---|---:|---|---|
| AV-20261008-BOARD-C-02 | 113041 | 324×324 | `6934b7e0cb536bd06f7941851b6368edf703e2df8046f4e4b8f79abd7fe7bf45` |
| AV-20261008-BOARD-C-04 | 90223 | 258×324 | `a333396bd303aadd44bbf5bc139adf01ea816c485547795f9bc226897010e0a5` |
| AV-20261008-BOARD-C-05 | 121573 | 359×324 | `df31915bc444982d2518aefd922fe95e45d1c55ec3678edfa764611d2ad6acc2` |
| AV-20261008-BOARD-C-12 | 120638 | 324×324 | `c96d9eb0f97783f6c86410c23cd4e790cc78ac825b60ec0a803025568b644a16` |
| AV-20261008-BOARD-C-13 | 121137 | 309×324 | `eb15e9b5c024f15c38213281d81813cc673aabc2c877d87ffc2c5aa56c0f2372` |
| AV-20261008-BOARD-C-15 | 105430 | 304×324 | `2afe0baa6154f1864bfcfb24dba6af9f5d35da90f816d319e18571e6c439cf72` |

**尚未完成：** 父图字节级SHA与裁切manifest核验；可持续访问的盲化展示；随机盲码冻结。因此 **HUMAN_GATE=NOT_READY**，`status=WAIT_BLIND_DISPLAY_AND_LINEAGE`。

**证据纪律：** C2→C2；E0→E0；`human_feeling_profile=null`；`profile_mae=null`；`top1_hit=null`；`top3_overlap=null`。6张图是**资产字节证据**，不是人类感受实验6例；不计有效实验轮次，不引用独立五轴A/B为本实验成果。

NEXT：核对父图/裁切版本与持久可显示的盲化素材后，再决定是否进入最小HUMAN_GATE。


## 9. R1.5｜父图/裁切版本声明链核对（2026-10-08）

**本轮唯一Q：Q-FEEL-001 / BLIND-R0。** 只对上一轮6张已核验的候选PNG追溯父图与版本声明；没有新增感受实验，不计五轴A/B实验轮次。

- source_issue: `674-293`; source_comment_id: `fd93a4cb-4a39-4702-8ea3-c778a8cb83fc`（2026-10-07 23:34Z创建，23:50Z更新）。
- declared_parent_asset_id: `AV-20261008-BOARD-C`; source_board_layout: 3×5; declared_parent_path: `/workspace/scratch/33d192a5211e/generated_images/exec-45a726c7-c92d-4eec-900e-afbd2a7b0588.png`。
- declared_parent_sha256: `2b4a37070de02fac27b927fdbad3174f73f4a448e152995f4704d702e21cef3f`；**仅来源评论声明，未取得父图原字节，不能宣称父图SHA已复验**。
- declared_crop_manifest: `/workspace/scratch/33d192a5211e/crops/AV-20261008-BOARD-C/manifest.json`；当前执行环境路径不可访问，故未验证裁切坐标与中间版本哈希。
- 已对齐6个裁切附件的**声明版本与源板格号**：`#2→v1`、`#4→v3`、`#5→v2`、`#12→v1`、`#13→v2`、`#15→v2`；附件ID、SHA与上一轮R1回执一致。
- #4/#5/#13/#15 经过边界细修，故这些最终版本不应被宣称为“从父图直接无损裁切”；没有中间版本原字节，无法重建完整编辑链。
- **曝光/选择偏差已登记**：六张是用户已挑选的同一来源板候选；用户此前见过来源板及部分编号，`prior_exposure=YES_OR_LIKELY`，`selection_bias=YES`，`same_board_cluster=YES`，不能当作未见样本或外部泛化。只有个人自由描述方法回归可在后续合格盲化条件下探索。
- source_comment已说明误选 #14 撤下；#14 不入本Campaign。

**状态：** `crop_byte_sha=VERIFIED_PREVIOUS_R1`；`parent_metadata=TRACEABLE_DECLARED`；`parent_byte_sha=UNVERIFIED`；`edit_lineage=PARTIAL`；`blind_display=NOT_READY`；`random_blind_code=NOT_FROZEN`；`HUMAN_GATE=NOT_READY`。

**证据纪律：** `C2→C2`，`E0→E0`，`human_feeling_profile=null`，`MAE=null`，`Top1=null`，`Top3=null`；`research_rounds_completed=0`（本轮为工程溯源，不是有效人类实验轮次）。

**NEXT：** 找到可持续访问的父图/manifest原字节核对其SHA与版本；准备不暴露来源编号的六张真实图片展示与预锁随机盲码；在此之前 `WAIT_PARENT_BYTES_AND_BLIND_DISPLAY`，不触发用户。


## 10. R1.6｜盲码与展示次序预锁（2026-10-08）

**唯一Q：Q-FEEL-001。** 这是一项研究工程预锁，不是人类感受实验，不计有效实验轮次，也不执行独立五轴 A/B。

### 固定样本与盲码规则
- 样本集合固定为上一轮已核验的6张 `AV-20261008-BOARD-C-{02,04,05,12,13,15}`，保留原 SHA256/版本；本轮不换样本、不补选漂亮结果。
- 盲码 `S01…S06` 由稳定算法确定：对每个 `asset_id` 计算 `SHA256("Q-FEEL-001-BLIND-R0|blind-code-v1|" + asset_id)`，按完整哈希字典序升序排列，依次赋 `S01…S06`。
- Session-A 和 Session-B 展示顺序分别由 `SHA256("Q-FEEL-001-BLIND-R0|session-A|" + asset_id)`、`SHA256("Q-FEEL-001-BLIND-R0|session-B|" + asset_id)` 升序决定。复测至少间隔24小时；两个session不可共用固定顺序。
- 预锁的顺序 SHA256 commitment（对逗号拼接的完整 asset_id 顺序取 SHA256）：
  - blind-code-v1: `aeaf85219cf4fc65aead2c52f0f4d9db7d8478822dbddc84b4400732b3f88b66`
  - session-A: `ebacd1943dd77e2a73b7677062e6d000cd28eccf3d87d516e132bb077c6946bc`
  - session-B: `dd0bdcb411d318a35227ee5269741c4373447b327914829c2a8b49e63999345b`
- 以上算法与commitment在任何人类反馈前冻结；前端只显示盲码+图片+通用问题，不显示来源格号、十元标签、预测、候选类别、SHA、主角/有趣备注或原文件名。后台可追溯映射但不得在同一用户展示页面泄漏。
- 渲染器必须从674-293的6个附件ID读取**真实原字节**，在展示时再次比对实验包第8节已登记SHA；临时签名URL不能冒充永久可访问展示。不得用模型重绘/相似图替代。
- `parent_byte_sha=UNVERIFIED`、`edit_lineage=PARTIAL`、`prior_exposure=YES_OR_LIKELY`、`selection_bias=YES`、`same_board_cluster=YES` 均保持不变。若父图/manifest未补齐，不开放HUMAN_GATE；如后续按研究方案批准“只用子图作个人方法回归”，需另行在本Q预注册变更并记录理由。

### 状态与下一步
`blind_code=FROZEN_PRE_FEEDBACK`; `display_order=FROZEN_PRE_FEEDBACK`; `display_runtime=NOT_VERIFIED`; `parent_byte_sha=UNVERIFIED`; `HUMAN_GATE=NOT_READY`; `status=WAIT_PARENT_BYTES_AND_BLIND_DISPLAY`.
`C=C2`; `E=E0`; `human_feeling_profile=null`; `MAE=null`; `Top1=null`; `Top3=null`; `research_rounds_completed=0`.

**NEXT:** 从674-293恢复来源板原字节及crop manifest（不能只复述声明路径）；用真实6张PNG建立可持续的盲化展示并做标签泄漏/顺序/完整性预检。完成前不打扰用户。


## 11. R1.7｜盲码预锁独立复算与父图阻塞审计（2026-10-08）

- receipt_id: `Q-FEEL-001-BLIND-R0-R1.7-COMMITMENT-AUDIT-20261008`
- 本轮唯一Q：`Q-FEEL-001`；未执行五轴A/B、未发起人类感受测试、未修改感受正本。
- 样本集合：`AV-20261008-BOARD-C-{02,04,05,12,13,15}`（六张候选，沿用R1原字节SHA回执）。
- 独立复算：按第10节预注册算法，用 SHA256 对6个完整 asset_id 进行排序，并对逗号连接后的完整 asset_id 顺序再次计算 SHA256；三组承诺均逐字符匹配：
  - blind-code-v1: `aeaf85219cf4fc65aead2c52f0f4d9db7d8478822dbddc84b4400732b3f88b66` — MATCH
  - session-A: `ebacd1943dd77e2a73b7677062e6d000cd28eccf3d87d516e132bb077c6946bc` — MATCH
  - session-B: `dd0bdcb411d318a35227ee5269741c4373447b327914829c2a8b49e63999345b` — MATCH
- A/B展示顺序确实不同，盲码是6个唯一S码；未执行实际前端渲染，因此 `display_runtime=NOT_VERIFIED`。
- 674-293 当前 `get_issue` 返回的50个附件中包含六张子图及BOARD-A/BOARD-B/BOARD-D，但未列出BOARD-C父图；此项只证明“本次返回的附件清单未见父图”，**不证明所有历史附件均不存在父图**。
- 当前执行容器中声明的 `/workspace/scratch/.../exec-45a726c7-c92d-4eec-900e-afbd2a7b0588.png` 与 `/workspace/scratch/.../crops/AV-20261008-BOARD-C/manifest.json` 均不可访问；父图字节与裁切manifest仍未复核。
- `status=WAIT_PARENT_BYTES_AND_BLIND_DISPLAY`; `blind_code=FROZEN_AND_RECOMPUTED`; `parent_byte_sha=UNVERIFIED`; `edit_lineage=PARTIAL`; `HUMAN_GATE=NOT_READY`。
- `C2→C2`; `E0→E0`; `research_rounds_completed=0`; `human_feeling_profile=null`; `MAE=null`; `Top1=null`; `Top3=null`。此回执只证明预锁算法可复算，不能当感受实验成绩。
- NEXT：从有权限的资产环境取得BOARD-C父图与裁切manifest真实字节，建立可持续显示的六图盲化页面，进行标签泄漏/顺序/图片SHA端到端验收；未就绪则WAIT/NO_OP。
