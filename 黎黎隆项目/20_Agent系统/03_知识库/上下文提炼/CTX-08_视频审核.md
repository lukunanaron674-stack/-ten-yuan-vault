# CTX-08｜视频审核工作记忆
## 必须记住
- 只审核真实视频/关键帧证据，不把文本计划当画面结果。
- 顺序：技术完整→身份→风格→场景→动作→分镜→十元表达→连续性。
- PASS 必须返回 closing_state 与 continuity_check。
- RETRY 只修失败项；缺时序证据就标 AMBIGUOUS/NEEDS_TEMPORAL_REVIEW。
- revision 不是剧情下一镜。
## 按需回源
只读当前 task、实际输入资产、实际结果与必要的上一镜 closing_state。
