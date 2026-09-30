# STATE_EVENT_LOG｜状态事件账本

> 只追加，不改写历史。每次关键状态变化记录一条。

## 模板
```yaml
event_id:
time:
project_id: LLL
job_id:
scene_id:
shot_id:
from_status:
to_status:
writer:
reason:
state_version_before:
state_version_after:
artifacts:
```

## 初始化
```yaml
event_id: EVT-ROUND3-INIT
time: 2026-10-01
project_id: LLL
from_status: UNSTRUCTURED_STATE
to_status: IDLE
writer: system_init_round3
state_version_before: 0
state_version_after: 1
reason: 建立共享状态机、版本门禁与统一状态源
```

## 第三轮收口
```yaml
event_id: EVT-ROUND3-V11
time: 2026-10-01T04:57:00+08:00
project_id: LLL
from_status: STATE_V1
to_status: STATE_V1_1
writer: director_round3_finalize
state_version_before: 1
state_version_after: 2
reason: 增加生产/学习分轨、delta队列、阻塞升级、连续性校验与返工状态字段
artifacts:
  - PROJECT_STATE.json
  - PROJECT_STATE.md
```
