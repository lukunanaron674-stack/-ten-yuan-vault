# AI 执行状态最小 Schema

## Problem State
```yaml
q_id:
parent_goal:
problem_statement:
known:
unknown:
tried:
rejected:
current_hypotheses:
evidence:
current_version:
done_condition:
required_agent:
next:
```

## Execution Receipt
```yaml
task_id:
status:
changed_files:
created_files:
asset_refs:
evidence:
commit_sha:
blocker:
next:
```

## Asset Ref
```yaml
asset_id:
kind:
version:
locator:
path:
sha256:
source_task:
review_status:
locked:
```

## Human Snapshot
```yaml
goal:
current_stage:
active_tasks:
done_since_last:
next:
needs_user:
user_action:
artifact_entry:
blocker:
updated_at:
```

规则：机器字段可以复杂；Human Snapshot 必须短、可扫读。
