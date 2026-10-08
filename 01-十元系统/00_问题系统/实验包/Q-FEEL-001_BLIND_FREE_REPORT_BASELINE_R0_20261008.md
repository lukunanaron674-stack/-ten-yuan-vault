---
experiment_id: Q-FEEL-001-BLIND-R0
parent_q: Q-FEEL-001
status: PREREGISTERED_WAIT_ASSET_VERIFICATION
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
| AV-20261008-BOARD-C-04 | a333396bd303aadd44bbf5bc226897010e0a5 | v3 | UNREVIEWED |
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
