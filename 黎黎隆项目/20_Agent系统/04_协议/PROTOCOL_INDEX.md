# PROTOCOL_INDEX｜协议总入口

## 每个 Agent 开工前
1. [[../02_共享状态/PROJECT_STATE.json]]
2. [[AGENT_IO_PROTOCOL]]
3. 自己的 Agent 岗位说明
4. 对应知识索引
5. 当前任务包

## 正式镜头
- [[SHOT_TASK_SCHEMA]]
- [[REVIEW_SCHEMA]]
- [[RETRY_PACKET_SCHEMA]]

## 每小时学习
- [[LEARNING_TASK_SCHEMA]]

## 状态相关
- [[../02_共享状态/STATE_MACHINE]]
- [[../02_共享状态/STATE_WRITE_PROTOCOL]]
- [[../02_共享状态/CONTINUITY_STATE_SCHEMA]]

## 核心原则
- 状态决定“现在在哪”
- 协议决定“怎么传”
- Agent 岗位决定“谁能改什么”
- 知识索引决定“去哪里读”


## 内容协作
- [[DISCUSSION_PROTOCOL]]
- [[DIRECTOR_DECISION_SCHEMA]]
- [[WORLD_PROPOSAL_SCHEMA]]

用于主题 / 世界观（条件触发）/ 剧本 / 十元 / 分镜之间的结构化讨论，以及无法自动收敛时的导演裁决。

世界观检查不是每镜必跑。只有 `world_gate = REQUIRED` 才调用 [[../01_Agent库/AG-10_世界观Agent]]；普通镜头直接 BYPASS。


## 第六轮生产闭环
- [[PRODUCTION_LOOP_PROTOCOL]]
- [[ASSET_RESULT_SCHEMA]]
- [[STYLE_REVIEW_SCHEMA]]
- [[RENDER_TASK_SCHEMA]]

执行 Agent 必须通过上述结构化包接力，不允许把“文件已写入”误判为“执行已开始”。
