---
task_id: B_CARD_FIRST_FRAME_WEB_NEXT_ROUND_20260924
type: card_review_ui_handoff
parent: B_CARD_SYSTEM_NEXT_ROUND_20260924
status: queued_for_next_round
version: v1.0
created_on: 2026-09-24
---

# 下一轮 B 端：卡号 × 实际视频首帧 × 网页审核

本任务落实用户新增指令，不替代已提交的统一卡号任务。**首帧须是真实 H3 视频的第一帧，而不是角色参考图或封面概念图。**

- 现有审核网页：`黎黎隆项目/角色魅力实验/B端/card_review/index.html`
- 数据索引：`黎黎隆项目/角色魅力实验/B端/card_review/cards.json`
- 首帧存放规范：`黎黎隆项目/角色魅力实验/B端/results/frames/<task_id>/run_A_key_head.jpg`，run_B 同理；或登记可直接读图的对象存储 URL。
- 用户网页需要显示 **永久 card_id + 对应首帧**、角色、场景、十元实验、当前轮次、审核状态；展开可查看同轮两个 run 的首/中/尾及后续十元变化节点帧。
- 若 CH 首卡尚未通过卡号索引查重注册，不得用 `CH-000001` 假装注册；在网页显示待注册及缺失首帧。历史 R35/R37 的真实图片可作只读演示，但不能私自转移为新卡的首帧。
- 建立可审核、可导出的状态：`unreviewed / pass / revise / ambiguous` + note + timestamp；审核意见先存在本地浏览器，由人工导出 JSON 给 Codex/4090 交接回仓库，不暴露 GitHub token，不声称网页已自动写入 GitHub。
- 视频继续由 4090 生成，本网页只要求 **真实首帧和按单一十元变化节点规定的关键帧**。若单一十元实验只需首帧作卡面，其余关键帧用于动态证据，不要求上传完整视频。动画输出保持 16:9 横屏，角色参考图可为9:16。
- 静态网页已生成并提交 GitHub，但**没有经核验的线上托管 URL**；如需手机/平板一键公网打开，由有权限的 Codex/4090 在已授权的静态站点配置部署，验证最终 URL 可读后登记至此任务。禁止把 GitHub 源代码页面直接称为已上线网页。
- 下一轮按顺序：查询真实 CARD_INDEX → 分配第一张新卡 → 关联 B1/B2/B3/4090/B4 → 生成首帧并记录 task/output ID、frame_no、timestamp、SHA、宽高 → 更新 cards.json → 实测网页图片显示 → 用户审核与导出 → 同步审核 JSON 和 Git commit。
- 每次改版按 `card_version`、`rule_version`、`round_id` 及 diff 分开登记；已审核的旧数据与旧图片保留。
