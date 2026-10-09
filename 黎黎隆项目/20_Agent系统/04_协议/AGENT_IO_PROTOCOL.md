# AGENT_IO_PROTOCOL｜Agent 接力协议 v1.1

## 总原则
所有 Agent 接力都通过结构化任务包，不允许只靠聊天上下文猜测。

## 调度顺序
director
→ asset_discovery
→ **character_alignment（有角色镜头/测试时）**
→ **theme**
→ **world（条件触发）**
→ script
→ tenyuan
→ storyboard
→ asset
→ image（仅缺素材时）
→ style_review（仅新素材）
→ h3
→ video_review
→ director merge

必要时允许一次：
`script → theme(THEME_AUDIT) → script`

## 独立角色任务轨
角色创建/更新与正式镜头分轨：
`director/user goal → character → (world/tenyuan review when required) → asset → image(if missing) → style_review → character writeback`

角色任务统一使用 [[CHARACTER_RESULT_SCHEMA]]；不得因为角色卡写回而推进 SHOT / RENDER 状态。

## 统一输入头
每个 Agent 必须收到：
- project_id
- job_id
- shot_id 或 test_shot_id
- base_state_version
- task_mode
- assigned_agent
- input_refs

## 统一输出头
每个 Agent 必须返回：
- project_id
- job_id
- shot_id 或 test_shot_id
- base_state_version
- agent
- result_type
- status
- payload
- submitted_at

## 各 Agent 责任
- **theme_agent**：只定义五维主题问题、主题实验、压力机制和人物困境目标，不写完整剧情；只提交 `theme_result`。
- **world_agent**：仅在 `world_gate = REQUIRED` 时做 Canon / 区域规则 / 文明机制校验；只提交 `world_result`。普通镜头 BYPASS，不强制参与。
- **character_agent**：新建/更新角色正本、定义人物世界位置与视觉冻结项；正式角色镜头还必须生成 CHARACTER_H3_READY_PACKET，把角色认知与四宫格/全身真实视觉逐格对齐。没有 READY_FOR_H3 不得进入 H3。
- script_agent：根据 theme_result 定义故事变化，不定机位；只提交 `script_result`。
- tenyuan_agent：只定义十元结构与验证状态，不强改主题/剧情；只提交 `tenyuan_result`。
- storyboard_agent：把前三者变成时间镜头；只提交 `storyboard_result`。
- asset_agent：只查真实素材并报告缺口。
- image_agent：只补已确认缺失素材。
- style_review_agent：只审核新参考图。
- h3_agent：先把 READY 镜头/测试任务转成 H3_AGENT_PLAN_PACKET，完成真实输入 source_type / intended_role / aspect / resize / role_fit preflight；只有 PLAN=APPROVED_FOR_RENDER 且 preflight=PASS 才生成 RENDER_TASK。不得拿到任务就直接渲染。
- video_review_agent：只审核生成结果。
- director_agent：唯一合并全局状态并决定下一跳。

## 内容接口
`theme_result → world_result(conditional) → script_result → tenyuan_result → storyboard_result`

- theme_result 回答：**研究什么问题？**
- world_result 回答：**这个世界允许怎样发生？哪些规则不能被临时改？**
- script_result 回答：**人物因此发生什么？**
- tenyuan_result 回答：**内部力量是什么性质、如何作用？**
- storyboard_result 回答：**怎样在 8–10 秒内让变化可见？**

禁止反向覆盖：
- 世界观不得为了服务单镜临时发明高体量规则。
- 世界观不得改主题问题或十元 canonical。
- 十元不得因为映射方便而改写主题问题。
- 分镜不得为了画面方便删除核心剧情变化。
- 主题不得为了“深刻”破坏角色/世界观正本。

## 交叉讨论
主题 / 世界观（条件触发）/ 剧本 / 十元 / 分镜最多 3 轮。WORLD_CHECK 最多 1 轮。
THEME_AUDIT 默认最多 1 轮。
每轮只能返回：
- ACCEPT
- MODIFY
- REJECT
并附具体字段，不允许整段泛聊。

## 串轨禁止
PRODUCTION 使用 shot_id。
LEARNING 使用 test_shot_id。
两者结果禁止互相覆盖。


## 第五轮讨论与裁决
- 内容争议统一读取 [[DISCUSSION_PROTOCOL]]。
- 无法自动收敛时由导演生成 [[DIRECTOR_DECISION_SCHEMA]]。
- 讨论只允许修改冲突字段，禁止重写整张任务卡。
- 主题 / 世界观（条件触发）/ 剧本 / 十元 / 分镜最多 3 轮；THEME_AUDIT 与 WORLD_CHECK 各最多 1 轮。
- 导演裁决后生成 final_patch，并写回当前任务包。


## 第六轮｜执行层闭环
内容层 RESOLVED 后统一进入 [[PRODUCTION_LOOP_PROTOCOL]]。

执行包：
- 素材：[[ASSET_RESULT_SCHEMA]]
- 新素材审核：[[STYLE_REVIEW_SCHEMA]]
- H3 执行：[[RENDER_TASK_SCHEMA]]
- 视频审核：[[REVIEW_SCHEMA]]
- 返工：[[RETRY_PACKET_SCHEMA]]

### 角色进入 H3 的交接
- 有角色的正式镜头，asset_agent 先提供真实资产事实，character_agent 再做语义/身份/四宫格对齐，AG-06 对新/待审视觉做静态审核。
- 最终只把 CHARACTER_H3_READY_PACKET=READY_FOR_H3 交给 h3_agent。
- “角色卡正确”不能代替“视觉正确”；“四宫格存在”也不能代替“认知对齐”。

### 状态推进责任
- asset_agent 只能提交素材结果，不能自己把镜头推进到渲染。
- image_agent 生成的新素材必须先 style_review。
- style_review_agent PASS 后才能成为 approved_assets。
- h3_agent 必须先完成 PLAN/PREFLIGHT；之后生成 RENDER_TASK，且只有收到 executor_receipt 才能标记 RENDERING。
- video_review_agent PASS 后只提交 closing_state；next_shot_id 仍由导演合并。

## H3_15S_PILOT｜R1–R3 专项交接（2026-10-10）

以下仅覆盖本专项15秒H3实践的默认代理调度；通用PRODUCTION/LEARNING、主题与世界观门禁保持不变。专项生产入口674-286、素材事实293、A端可用池296、USER审核173；297只作感受既有证据来源，用户已否决的低质EXT-R1素材不得复用。**工单先行，不自行搜扫场景库和角色库。**

### 顺序与责任
1. AG-00导演/问题系统：读取当前674-286目标、上轮NX和status，确定一个本轮问题，锁定任务ID。
2. AG-04素材：按296→293→173回读出具ASSET_PAIR_PACKET_V1（角色图×1、独立场景图×1）及SHA/版本/USER审核格位/A端可达性；不假定双图READY。
3. AG-11角色：读取AG-04真实素材事实，核角色身份、固定设定及画面允许的动作，回CHARACTER_H3_READY_PACKET或精确BLOCKED。
4. AG-02十元：选择SINGLE_OBJECT或TWO_OBJECT_RELATION其中之一，继承各对象十元证据及目标感受，回TENYUAN_FEEL_PACKET_V1。单对象中的第二张图仅为技术输入/情境支持；双对象双方十元分别登记，明确作用机制。
5. AG-01剧本：按选定模式产出2–3个不同事件机制候选，最终选一条15秒最小故事，回STORY_PACKET_V1。
6. AG-02反审一次真实因果与目标感受；AG-01只修争议字段，AG-00合并决策，反审未过则REPLAN，不无限循环。
7. R4后AG-03分镜与H3提示词编译，AG-07输入与4080执行门，A端只有真实执行receipt才算RENDERED；本地技术审核独立于173 USER最终PASS。
8. USER只审临时视频；用户PASS后才进入289正式视频库。失败反馈写286问题NX，可靠新证据支持才升级问题XN。

### 交接硬条件
- 资产与业务状态分轴记录：已登记/候选≠USER_PASS，素材TECH_PASS≠A_READY，剧本READY≠RENDER_READY。
- 每轮只选一个问题/一种模式/一个最小故事；前置素材缺失仍允许离线DRAFT，但不得伪称A端执行。
- 通用AGENT_IO中script先于tenyuan的旧序列，对本专项允许AG-02先给感受关系方案、AG-01写事件、AG-02反审；两者不越权改写主题与世界Canon。
- 所有结果携带job_id、base_state_version与证据；状态过期标STALE_RESULT；交AG-00唯一合并，不以十个虚拟代理阶段充当十次真实执行。

### R1–R3当前验收状态
R1：AG-04专项读工单与双图ASSET_PAIR_PACKET已写入岗位卡；Windows目录、双图实际可达性仍BLOCKED_LOCAL_EVIDENCE。
R2：AG-02单对象/双对象感受协议及结构化输出已写入岗位卡；尚无USER感受实测。
R3：AG-01 15秒最小故事协议、反审与脚本输出已写入岗位卡；真实素材组合未READY，不放行渲染。

## H3_15S_PILOT｜R4–R6 编译、问题回收与端到端验收（2026-10-10）

本节与本协议R1–R3专项交接配套，只对674-286每小时15秒H3任务生效，其他项目仍使用原协议。

R4（已定义）：AG-00统一目标和真实双图包；AG-03从TENYUAN_FEEL_PACKET_V1和STORY_PACKET_V1推导15秒镜头卡及英文H3 prompt，输出SHOT_PACKAGE_15S_V1。H06必须优先遵照USER最新原生15秒单镜执行方向，不能机械复用旧五镜剪辑。AG-03不直接运行GPU。AG-07只在两张独立真图、USER审核、SHA、角色身份、A端ref_images双节点、机位与景别均真实PASS后提交RENDER_TASK。

R5（已定义）：问题系统入口仍为674-286（AG-SYS逻辑职责，不等于另起一个后台进程）。正本Canvas为黎黎隆项目/00_总览/B端问题系统.canvas，其中链接H3_15秒多代理问题系统_R4-R6_20261010.canvas。每轮只选一个NX，输出Z/XN(知识规则)/NX/PATH/EVIDENCE与变更版本。十元体系的XN是tenyuan_code_XN，与知识XN必须区分。Z量级Z0–Z3仅为待校准管理模型。无新资产/运行证据时WAIT_ASSET或NO_OP，不变更XN成熟度。

R6（验收门）：只在真实GPU和视频可读回执下，逐级验证：
- SOURCE：674-296+293+173提供两张**不同原始资产**，角色图、场景图均有独立asset_id/完整SHA/version/review_scope/原始字节和4080路径；AG-11角色包有效。
- SCRIPT：模式唯一，AG-02对象十元来源明确，AG-01故事存在起始/触发/选择或动作/结果，AG-02已反审；AG-03分镜/词包足够表达。
- PREFLIGHT：AG-07实测两图绑定、模型工作流、4080节点/参数，收到执行方回执。
- RENDER：真实可解码MP4、完整视频SHA、帧率/帧数/时长、关键帧、动作质检与运行receipt。禁止同源双图通过；旧同源15秒历史输出只可当工程样本。
- REVIEW：AG-08机械技术质检；674-173的USER实际观看明确PASS/FAIL/RERUN/AMBIGUOUS。机器技术PASS不等于USER审美或十元感受PASS。
- STORAGE：只有USER PASS才允许674-289正式保存；未审/FAIL只本地临时，元数据存Linear。

R6失败应返回**第一个真正阻塞项**而不是一长串猜测。当前读取674-286 2026-10-10 A端最新回执：H06角色P3真图据报可读；**没有被工单登记及实机核验的独立场景图**，因此R6结果=BLOCKED_MISSING_SCENE；R4文稿完成、R5 Canvas落地，不代表R6真实生产闭环PASS。只从674-296/293/173补齐证据后复验，不新建Issue、不重启297 EXT-R1被拒路线。
