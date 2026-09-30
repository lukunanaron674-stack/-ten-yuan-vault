# REVIEW_SCHEMA｜审核结果包 v2

## 身份
- project_id
- job_id
- shot_id
- render_task_id
- base_state_version
- review_id
- reviewer_agent

## 审核维度
- technical_integrity
- identity_score
- style_score
- environment_score
- motion_score
- storyboard_match
- continuity_score
- tenyuan_expression

## 失败项
每个失败项必须包含：
- dimension
- evidence
- severity: LOW | MEDIUM | HIGH
- keep_fields
- change_fields
- instruction

## 决策
decision: PASS | RETRY | REPLAN | BLOCKED

### PASS
- 必须给 closing_state
- continuity_check 必须 PASS 或 NOT_REQUIRED

### RETRY
- 只能改失败项
- 必须生成 retry_packet_id
- retry_count + 1
- 不得重写已通过字段

### REPLAN
用于 Prompt / 镜头设计本身有问题，返回分镜或导演。

### BLOCKED
用于素材、模型、核心设定冲突或执行环境阻塞。

## 输出
- issues
- failed_dimensions
- retry_instructions
- closing_state
- decision_reason
- max_retry_count: 3
