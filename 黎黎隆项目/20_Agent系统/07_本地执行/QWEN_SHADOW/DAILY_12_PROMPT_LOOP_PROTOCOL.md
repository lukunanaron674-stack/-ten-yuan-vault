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


## v1.1 USER覆盖｜根据问题系统知识XN/NX弹性回收未跑槽位（2026-10-11）

**本节覆盖v1中“当天12卡按原计划执行/只在USER反馈后更新”的任何隐含假设。** 每天12个是“同时管理的候选槽位”而非12条不可更换的描述词、不是必须跑满12条视频。第一轮给12槽提供可追溯的候选初稿，之后各小时按最新 **Z→知识XN→NX→PATH→执行证据** 重排。即使没有新的USER反馈，知识XN状态变化、已有技术回执、PATH能力变化，也应触发未跑候选重新评价。**禁止为满足数字12而保持过时测试。**

### 1. 每小时先检XN，再选词
1. 读取674-276问题树 + 674-286本轮Z和XN_delta/NX_delta + 216技术失败族/真实receipt + 173 USER反馈 + 293/296双图素材PATH；增量读，不重复全文。
2. 对所有尚未QUEUED的槽，重算`z_coverage`, `xn_evidence_level`, `nx_remaining`, `path_ready`, `expected_information_gain`, `expected_feeling_gain`, `experiment_cost`，只要事实增量导致结论变了就产生`plan_revision`。
3. 先用新证据归档已经无需再验证的候选，再从最重要的剩余Z/NX选下一条最小差异实验；B端AG-00审核，CODEX仅执行合规READY卡，Qwen仍SHADOW。
4. 目标不是填满12轮，是用最少GPU出片获得足够的有效感受与问题收敛证据。必要时只保留3条READY+其余备用或空槽，不能伪造“12轮全READY”。

### 2. 未跑候选的可回收动作
- `KEEP`：当前知识XN仍适用，研究价值与素材门都成立，保留原提示词。
- `PATCH`：XN/NX或USER反馈要求改动作/镜头/光影/十元关系，生成`prompt_vN+1`，保留v0及变更证据。
- `REPRIORITIZE`：仍有研究价值但不是当前最大NX，后移；可转次日carryover。
- `RECYCLE`：知识XN已解决旧问题、测试与新规则矛盾、重复低收益或PATH改变时，将**未运行**候选标`SUPERSEDED_UNRUN`，释放其SXX槽并放入另一个针对优先NX的新候选，新的`candidate_id`、`prompt_v0`及`replaces_candidate_id`。原条保留只读审计，不能静默覆盖。
- `HOLD`：素材/审核/显存/批准暂缺且暂不值得替换，等待真实外部变化；HOLD与RECYCLE不同。
- `DROP`：用户明确否决或安全/审核禁止，记录原因和证据，不得借RECYCLE在同一时刻绕过拒绝。

### 3. 不可回收范围与预算
- 只能回收`DRAFT / CONDITIONAL / RESERVE / READY / WAIT_ASSET / WAIT_REVIEW / HOLD`且**未曾QUEUE**的候选。
- `QUEUED / RUNNING / RENDERED / USER_WAIT / PASS / QA_FAIL / STOP` 的已发生attempt绝不复用ID，也不得把用户看过的片改成新词；需继续实验时为新候选/子attempt安排空闲槽且重新审核，不覆盖视频回执。
- `S01..S12`是每日**12个可循环占用的位置**，在同日RECYCLE后历史candidate数量可以超过12，但任一时点不超过12个活跃候选；真正GPU运行数由可用小时/显存/审核门决定，**不强制12次渲染、不自动加GPU工作量**。
- 不能为了填空槽重复自我改词。连续两个小时同一XN/NX没有新证据，则`UNCHANGED/IDLE_WATCH`，等待真实反馈；重大已验证问题优先，避免无限更换假设。
- 十元代码`tenyuan_code_XN`与问题系统`knowledge_XN`必须在所有字段中使用不同名字。

### 4. 每次回收的强制记录
```yaml
slot_id: S07
old_candidate_id: "S07-C01"
old_state: READY
new_state: SUPERSEDED_UNRUN
recycle_reason: "XN evidence now covers old Z; related NX has shifted"
knowledge_xn_ref: "674-276/problem-ref-required"
nx_ref: "problem-ref-required"
evidence_refs: ["real-feedback-or-receipt-required"]
old_prompt_hash: "sha256-required"
new_candidate_id: "S07-C02"
replaces_candidate_id: "S07-C01"
new_prompt_version: 0
new_target_z: "required"
review_gate: "RECHECK_293_296_173_AND_AG07"
committed_to_gpu: false
```
示例仅说明结构，**不是实际发生的XN解决或真实回收记录**。

### 5. 动态循环 DONE/STOP
DONE：在出现真实XN/NX/USER/PATH证据变更的后续小时里，至少一次完成`KEEP/PATCH/RECYCLE/REPRIORITIZE/HOLD`逐槽判定，对RECYCLE保留旧候选并生成新candidate、重做素材/导演门禁；只选择一条最有价值且READY的任务执行。
STOP：无新证据不翻新12词、不为“让千问有任务”强行重投GPU；遇到正在执行或已验收的版本不能回收。小时服务保持轻量心跳，`ACTIVE_EXECUTOR=CODEX`，Qwen在未实机授权前不执行生产。
