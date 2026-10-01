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

## 角色任务
- [[CHARACTER_RESULT_SCHEMA]]
- [[../01_Agent库/AG-11_角色Agent]]

角色创建/更新走独立任务轨。角色文字卡可 STAGING 写回；新角色视觉资产必须经风格审核达到门槛后才能成为 approved 主参考。


## 第六轮生产闭环
- [[PRODUCTION_LOOP_PROTOCOL]]
- [[ASSET_RESULT_SCHEMA]]
- [[STYLE_REVIEW_SCHEMA]]
- [[RENDER_TASK_SCHEMA]]

执行 Agent 必须通过上述结构化包接力，不允许把“文件已写入”误判为“执行已开始”。


## 第七轮自动调度
- [[AUTO_DISPATCH_PROTOCOL]]
- [[DISPATCH_TABLE.json]]

导演每个 tick 只选择当前真正需要的 1 个 primary Agent；状态哈希未变化时 NO_OP。

## 第八轮连续镜头验证
- [[CONTINUOUS_SHOT_VALIDATION_PROTOCOL]]
- [[../06_验证/ROUND8_CONTINUITY_VALIDATION_20261001]]

连续生产的硬门：上一镜 PASS.closing_state 必须成为下一镜 opening_state；历史 revision 不得冒充剧情连续镜头。


## 第七轮｜自动调度与上下文工程
- [[AUTO_DISPATCH_PROTOCOL]]
- [[DISPATCH_TABLE.json]]
- [[CONTEXT_DISTILLATION_PROTOCOL]]
- [[../05_索引/INDEX_LITE]]

第七轮不再以“所有 Agent 都读完整索引”为默认。调度器每 tick 只唤醒当前 primary Agent，并只加载其 CTX 与必要 source。

## 第八轮｜连续镜头验证
- [[CONTINUOUS_SHOT_VALIDATION_PROTOCOL]]
- [[../06_验证/ROUND8_CONTINUITY_VALIDATION_20261001]]

历史真实 H3 回放用于验证协议，但旧 revision 没有标准 closing/opening state 时只允许判 AMBIGUOUS，不得伪报连续 PASS。

## 本地素材库
- [[LOCAL_ASSET_LIBRARY_PROTOCOL]]
- [[LOCAL_ASSET_MANIFEST_SCHEMA]]
- [[ASSET_RESULT_SCHEMA]]

本地 watcher 负责扫描真实文件，AG-04 只消费轻量 manifest 与少量候选。默认不把整块素材盘塞进上下文，也不要求把图片本体上传 GitHub。
