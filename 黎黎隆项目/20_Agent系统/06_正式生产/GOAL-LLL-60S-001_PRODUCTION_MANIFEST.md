# GOAL-LLL-60S-001｜《黎黎隆》1分钟正式动画

## 状态
- mode: PRODUCTION
- target_duration: 60s
- target_shots: 6
- nominal_shot_duration: 10s
- main_character: LLL-MAIN-001
- scene_id: SCN-LLL-60S-001
- job_id: JOB-LLL-60S-001
- canon_policy: CURRENT_CANON_ONLY
- asset_policy: EXISTING_FIRST_GENERATE_IF_MISSING

## 导演目标
制作一个在约60秒内成立的完整小事件：
- 必须让黎黎隆主动行动，而不是被动看世界；
- 保持 ZX 主 / Z 次 / XN 微量；
- “太想赢使局面更复杂”作为可见后果，不写成旁白；
- 不擅自新增角色核心设定；
- 不把非正史故事候选直接升级为正史；
- 优先使用已有世界观、角色、场景与真实可绑定资产；
- 缺素材才进入 素材Agent → 生图Agent → 风格审核；
- 6镜必须能连续剪成约1分钟。

## 正式镜头槽
| shot | duration | status | purpose |
|---|---:|---|---|
| SHOT-LLL-60S-01 | ~10s | PLANNING | 起点 / 人物主动目标 |
| SHOT-LLL-60S-02 | ~10s | PENDING | 第一次行动与环境回应 |
| SHOT-LLL-60S-03 | ~10s | PENDING | 行动升级 / 局面复杂化 |
| SHOT-LLL-60S-04 | ~10s | PENDING | 被迫变招 |
| SHOT-LLL-60S-05 | ~10s | PENDING | 代价 / 选择 |
| SHOT-LLL-60S-06 | ~10s | PENDING | 局部结算 / 余波 |

## 当前路由
ASSET_AUDIT → STYLE_REVIEW → THEME_PLAN_FROM_ASSETS → SCRIPT_PROPOSAL → TENYUAN_REVIEW → STORYBOARD_BUILD → ASSET_RECHECK → LONGTAKE_PLAN → H3_LONGTAKE → VIDEO_REVIEW

## 素材前置
- 正式创作先消费 [[GOAL-LLL-60S-001_ASSET_READY_REPORT]]。
- 主题与剧本只能在已确认素材边界内选择最强方案。
- 优先使用机械空港同一场景族，除非后续审核明确判定不适用。
- 不再先写完整剧情后反向逼素材补洞。

## LongTake
- formal_h3_mode: LONGTAKE
- target_segments: 6
- nominal_segment_duration: 8–10s
- continuity: previous segment closing_state → next segment opening_state
- rerender_policy: segment-level retry
- scene_switch: only at explicit edit boundary

## 当前硬门禁
- 没有真实 H3 executor receipt，不得标记 RENDERING。
- 缺真实角色/场景绑定时不得伪造“已可渲染”。
- PASS 镜头的 closing_state 才能继承给下一镜 opening_state。


## 当前阻塞｜黎黎隆角色未完成
- status: BLOCKED_CHARACTER_INCOMPLETE
- character: LLL-MAIN-001
- user_canonical: 黎黎隆当前未完成，禁止正式 H3。
- canceled_task: LLL_LONGTAKE_20261001_1930_GOAL60S
- B端 inbox 中该任务已撤销。
- 已完成的主题/剧本/十元/LongTake 方案只保留为**预研草案**，不得视为生产批准。
- resume_condition: 用户明确确认黎黎隆角色完成，然后重新从素材审核开始。
