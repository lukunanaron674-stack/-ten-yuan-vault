# 674-173 Canvas 审核工作台

- `173_USER_REVIEW_WORKBENCH_20261008.canvas`：规则、当前状态和 L1/L2 入口。
- `173_USER_REVIEW_L1_20261008.canvas`：225 张待审 L1 头像。
- `173_USER_REVIEW_L2_20261008.canvas`：51 张待审 L2 四宫格；9 条既有裁决只展示，不重复裁决；其中 3 条 evidence UNKNOWN。
- `review_images/`：从 E: 审核池复制的展示副本。每份副本与输入 SHA-256 完全一致；源文件未移动或覆盖。
- `canvas_asset_copy_manifest_20261008.jsonl`：源路径、目标路径、asset_id 与 SHA 对账回执。
- `user_review_log_20261008.jsonl`：173 新裁决的结构化正本。收到 USER 裁决后追加，不覆盖历史。

- `173_USER_REFERENCES_20261008.canvas`：3 张用户指定参考图及其用途标签；只作参考来源，不自动绑定候选或确认 Canon。副本位于 `reference_images/`，源图保留；SHA 与源文件逐一相同。
- `user_reference_manifest_20261008.jsonl`：用户指定角色、源/副本路径、SHA 和 `USER_PROVIDED_REFERENCE_ONLY` 状态。

当前输入未提供 main_reference 和独立冻结的 rule_version；Canvas 显示 MISSING，不推断补齐。293 快照有 3 条空 manifest 行，未伪造 asset_id/SHA。289 描述有 H3V-0001/0002/0004/0006 元数据，但无附件、视频库路径缺失、video_version 未填；视频入口标 MISSING，待完整 packet。旧 S/A/B/C 不映射为 173 PASS。

在 Canvas 查看后，请在 ChatGPT 对话按候选编号给出明确决定。助手只照录 USER 决定并按 173 路由回写。