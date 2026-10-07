# ROLLBACK LEDGER｜外部知识晋级与回滚账

> 状态：ACTIVE_TEMPLATE
> 规则：每一次外部知识进入 canonical，都必须在这里留下 promotion record；回滚只撤正本副作用，不删除历史证据。

## Promotion Record Template

| field | value |
|---|---|
| promotion_id | |
| external_knowledge_id | |
| target_issue / target_z | |
| target_canonical | |
| pre_promotion_ref | |
| candidate_commit | |
| promotion_commit | |
| changed_paths | |
| evidence_level | |
| evidence_refs | |
| regression_checks | |
| human_gate | |
| rollback_ref | |
| rollback_tested | |
| status | PROMOTED / ROLLED_BACK |
| rollback_reason | |
| affected_z | |
| created_at | |
| rolled_back_at | |

## Rollback discipline

- 不允许 force reset / rewrite main history。
- 默认使用 revert commit 或反向 PR。
- 回滚后保留 candidate、实验、负样本和旧 promotion_id。
- 回滚后证据等级降回当前证据能支持的最高等级。
- 修复后重新晋级必须创建新的 promotion_id。
- 没有 pre_promotion_ref / rollback_ref 的候选不得进入 canonical。

## Current records

暂无正式 promotion record。本文件建立本身不代表任何外部知识已升级正本。
