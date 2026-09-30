# DISCUSSION_PROTOCOL｜内容 Agent 讨论协议 v1

## 目标
让主题 / 剧本 / 十元 / 分镜围绕同一任务收敛，而不是各自重写整张镜头卡。

## 默认顺序
1. 主题 Agent：THEME_PLAN
2. 剧本 Agent：SCRIPT_PROPOSAL
3. 十元 Agent：TENYUAN_REVIEW
4. 分镜 Agent：STORYBOARD_REVIEW
5. 导演 Agent：MERGE / DECIDE

必要时允许一次：
SCRIPT_PROPOSAL → THEME_AUDIT → SCRIPT_REVISION

## 回合格式
每个 Agent 每轮只能返回：
- verdict: ACCEPT | MODIFY | REJECT
- target_fields: []
- reason
- proposed_patch
- protected_fields: []

禁止：
- 重写无关字段
- 用长篇自由讨论代替字段修改
- 越权改别的 Agent 的专业结论

## 谁能质疑谁
### 主题 Agent
可以质疑：
- 剧情是否真正承受主题压力
不可以：
- 重写完整剧情
- 定十元
- 定机位

### 剧本 Agent
可以质疑：
- 十元建议是否破坏人物因果
- 分镜是否删掉核心剧情变化
不可以：
- 改十元理论正本
- 替分镜定镜头语言

### 十元 Agent
可以质疑：
- 剧情/分镜对十元关系的误读
- 动态链是否与当前状态不一致
不可以：
- 为了映射方便改剧情目标
- 改主题问题

### 分镜 Agent
可以质疑：
- 当前内容是否无法在 8–10 秒内清楚呈现
- 动作、景别、节奏是否超出执行能力
不可以：
- 删除核心剧情变化
- 改十元结论本身

## 讨论轮数
- 普通讨论最多 3 轮
- THEME_AUDIT 最多 1 轮
- 同一字段连续两轮没有新证据时，禁止继续重复争论

## 自动收敛
满足以下条件即可结束讨论：
- 所有冲突字段均为 ACCEPT；或
- MODIFY 已被字段拥有者接受并回写；或
- 冲突只剩表达层，不涉及 canonical / continuity / story_goal

## 必须导演裁决
以下任一出现时停止讨论：
- canonical 冲突
- 角色核心设定冲突
- 连续性冲突
- story_goal 被要求改变
- 同一字段 3 轮仍未收敛
- 两个 Agent 都有有效证据且无法兼容

## 导演裁决原则
优先级：
1. 用户明确目标
2. canonical 正本
3. 已锁连续性
4. 当前 story_goal
5. 已验证知识
6. 待验证假设
7. 表达偏好

导演不得用个人偏好覆盖更高优先级事实。

## 输出
讨论结束后生成：
- discussion_id
- rounds_used
- accepted_fields
- modified_fields
- rejected_fields
- unresolved_fields
- director_decision_required
- final_patch
