# ROLLBACK LEDGER

status: ACTIVE_TEMPLATE
master_issue: 674-272

每次外部知识进入 canonical，必须记录：promotion_id、external_knowledge_id、target_issue、target_z、target_canonical、pre_promotion_ref、candidate_commit、promotion_commit、changed_paths、evidence_level、evidence_refs、negative_evidence_refs、regression_checks、human_gate、rollback_ref、rollback_tested、status、rollback_reason、affected_z、created_at、rolled_back_at。

规则：
- 不改写 main 历史；使用 revert commit 或反向 PR。
- 回滚后保留 candidate、实验、失败与反例证据。
- 回滚后 evidence_level 降回当前证据支持的最高等级。
- 修复后重新晋级必须使用新的 promotion_id。
- 没有 pre_promotion_ref 与 rollback_ref 的候选不得进入 canonical。

Current records: none.
