# 黎黎隆 Agent 系统

## 目标
把现有 B 端“每小时 10 秒分镜”升级为可持续学习、可调度、可审核、可回写状态的 Agent 流水线。

## 当前核心链
导演 Agent → 剧本 Agent → 十元 Agent → 分镜 Agent → 素材 Agent → 生图 Agent（缺素材时）→ H3 渲染 Agent → 视频审核 Agent → 状态回写。

## 调度原则
- 每小时只触发 1 个总任务，不让多个 Agent 独立抢跑。
- 剧本 / 十元 / 分镜最多交叉校正 3 轮。
- 生产与学习分离，但每轮学习必须回到真实 8–10 秒镜头验证。
- 审核采用 PASS / RETRY / REPLAN。
- 所有 Agent 共用项目状态，不各自维护平行版本。
- 缺素材时才触发生图 Agent；H3 完成后触发审核 Agent。
- 每轮结论必须标记 KEEP / REJECT / STOP，以及“已验证 / 待验证”。

## 目录
- 01_Agent库：各 Agent 岗位说明与边界
- 02_共享状态：当前镜头、上一镜结果、项目进度
- 03_知识库：剧本 / 十元 / 分镜 / 交叉知识
- 04_协议：任务卡、审核卡、状态字段


## 共享状态架构
- 机器唯一事实源：`02_共享状态/PROJECT_STATE.json`
- 人类看板：`02_共享状态/PROJECT_STATE.md`
- 状态机：`02_共享状态/STATE_MACHINE.md`
- 写入协议：`02_共享状态/STATE_WRITE_PROTOCOL.md`
- 连续性：`02_共享状态/CONTINUITY_STATE_SCHEMA.md`
- 事件账本：`02_共享状态/STATE_EVENT_LOG.md`
- 学习状态：`02_共享状态/LEARNING_STATE.md`

### 核心原则
正式生产与每小时学习分离。没有明确导演 production goal 时，每小时循环只产 TEST-SHOT 和知识验证，不得推进正式剧情指针。
