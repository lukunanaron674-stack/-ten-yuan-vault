# DAILY_12_PROMPT_LOOP_PROTOCOL｜每日12候选词，24小时滚动优化 v1
status: SPEC_ONLY_PENDING_LOCAL_CODEX_EXECUTION
owner: CODEX + B端286
main_issue: 674-286
runtime_issue: 674-216
timezone: Asia/Shanghai
active_executor: CODEX
qwen_mode: SHADOW

## 目的
不再把每天24个不同提示词作为必须完成的产能指标；当日最先一次小时运行生成12张**有实际描述内容**的H3候选卡，24个小时轮转消费真实反馈并修改未投喂后续卡。卡用完时调度器继续监视与处理真实NX/素材/视频QA，不因无GPU任务关闭进程，也不虚构新任务。

## 当日调度
1. 定义`day_id=YYYYMMDD`，本地24个小时tick按真实Codex定时服务情况执行，不补造虚假已发生的tick。
2. tick1：只读获取上日carryover、674-286导演目标、293/296/173已登记角色/独立场景、216现行H3 workflow、276最大价值NX；一次创建S01..S12完整计划（内容/镜头/时序/十元/感受/参考图限制/反向词/验收）。已建计划则恢复，不按同天每次重建。
3. tick2..24：每小时先读新视频技术/USER反馈、再修订未QUEUED卡，保留revision日志；若GPU空闲且有真实合规READY卡则投至多1个 H3 作业；实时进程正在跑则只做CPU任务，遵守既有锁。
4. 当天最后窗口：输出12槽的最终状态、有效实验结果、尚未验证XN/NX、反馈应用次数、明日carryover。未使用的可用候选继承或丢弃均须有理由，不默认重投。

## 12卡实验组（可重排，不强制内容凑满）
- S01–S04：固定身份/角色及环境，明确目标感受和已知有效基线（H06光×慢手势构成为已获作者正反馈示例，不是所有任务的默认情节）。
- S05–S08：只改变一个主要因素：景别、机位、光影、动作节奏、环境响应任选一个；每卡给对照与假设，不把多变量同时改动当单变量。
- S09–S12：与现成场景/其他对象互动的最小关系事件或必要的稳定性复现。若前八轮暴露关键失败，这四槽可以改成故障确认和替代方案，优先解决问题而非增加新世界设定。

## READY门禁
`READY`仅当：
- AG-00批准的DIRECTOR_PACKET & TENYUAN_FEEL_PACKET，十元/感受来源明确；
- 674-293/296记录真实角色ref和独立场景ref的不同source SHA、文件路径、本机可读与173对应review_scope；
- AG-11身份和四宫格/景别准入；AG-07工作流双ref节点与输入比列/画幅、seed、帧数实际合法、单GPU空闲；
- USER 14.5s目标经当前H3工作流实际核定合法帧数，禁止默认362f/15.08s续跑后剪。
不满足以上：DRAFT / WAIT_ASSET / WAIT_REVIEW / BLOCKED，不得为了12槽的数量虚构源图或把未审批图送GPU。

## 原始词保留、未执行修订
每张卡冻结 `prompt_v0`。修改仅对 `DRAFT|WAIT_ASSET|WAIT_REVIEW|READY|HOLD` 开放；`QUEUED|RUNNING|RENDERED|USER_WAIT|PASS|STOP` 当前已提交版本不可改。修改产生`revision_history`：from_version,to_version,feedback_ids,changed_fields,reason,expected_gain,approval_gate。需要重试已出视频则通过原卡`new attempt_id`与新审核，不覆写历史。
用户反馈 event：`event_id/time/ref_video_id/ref_mp4_sha/type(USER|TECH|XN|NX)/source_issue/target_feeling/observation/affected_slots`。收到事件，批量检查所有未QUEUE卡：该变更相关则修改；不相关写UNCHANGED理由。USER直观感受与技术失败需要分开归因，机器不能私自冻结XN。

## 任务状态
DRAFT→READY→QUEUED→RUNNING→RENDERED→USER_WAIT→PASS
以及 WAIT_ASSET / WAIT_REVIEW / HOLD / STOP / QA_FAIL / IDLE_WATCH。
C端只是逻辑岗位，只有GPU_IMAGE与GPU_H3严格互斥且绝不同时运行；Qwen目前只读/CPU影子，不持有正式生产执行权。

## 12卡已无可执行GPU任务的小时退化分支
按顺序执行至多一个有具体DONE的最小CPU子任务：①真实视频抽帧/QA/用户反馈绑定；②C端素材sha与审核索引；③上轮H3失败族一项NX可验证修复；④Qwen仅CPU/离线的Skill+JSON影子测试；⑤若以上均无有效数据则IDLE_WATCH保留计时心跳（此时不占GPU、不生成空话和新issue）。连续同阻塞不得每小时重复报同一个长报告。
每小时本地Scheduler没有真实heartbeat时只能报告UNVERIFIED，不可由本协议假设已经运行。

## 统一最小数据包
```yaml
day_id: "20261011"
timezone: "Asia/Shanghai"
plan_version: 0
slot_count: 12
active_executor: CODEX
qwen_mode: SHADOW
slots:
  - slot_id: S01
    category: BASELINE
    status: DRAFT
    story_and_feeling: REQUIRED_TEXT
    prompt_v0: REQUIRED_TEXT
    prompt_current: REQUIRED_TEXT
    prompt_version: 0
    character_ref: {asset_id: null, sha256: null, review_scope: null}
    scene_ref: {asset_id: null, sha256: null, review_scope: null}
    camera_and_lighting: REQUIRED_TEXT
    main_variable: REQUIRED_TEXT
    target_duration_sec: 14.5
    checked_workflow_frame_grid: false
    run_id: null
    revision_history: []
```
此S01为格式示意，缺真实来源不得当作已生成12词。

## 输出与工单
- 674-286：DAILY_12_PROMPT_PLAN全文与prompt revision log、反馈到文案的变化；
- 674-216：本机Codex hourly receipt、ComfyUI prompt_id、真实MP4 SHA、GPU与技术QA；
- 674-276：跨任务可用的QN(XN)/NX（区分十元XN）；
- 674-293/296：角色与场景ref证据；
- 674-173：USER感受与审美；
- 674-289：USER PASS后的正式成片。

## DONE/STOP
DESIGN_DONE=第一小时实际可追溯地生成12条有效文本候选；LOOP_DONE=后续至少有一个带真实FEEDBACK_EVENT的多卡改版和小时收据，且已排队版本未被篡改；HOST_DONE=现场证明24h小时Scheduler活跃，GPU无并发。
SPEC_DONE=本文件和Linear 286/216同步；HOST_DONE当前未知、Qwen本地尚未安装/实跑。
STOP=无证据、无素材、USER审核缺失时只停当前卡，**不中断小时监测**；当没有真正可做的工作时允许低成本IDLE_WATCH，不为维持“连续思考”反复花token或GPU成本。
