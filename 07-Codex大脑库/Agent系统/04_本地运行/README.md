---
type: local-agent-runtime-handoff
authority_level: L5
owner_issue: 674-77
task_key: AI-LOCAL-32G/AGENT-RUNTIME
status: WEB_SCAFFOLD_READY_WAIT_LOCAL_CODEX
date: 2026-11-25
---

# 本地总代理｜18原岗位＋2本地执行适配位

## CURRENT_SNAPSHOT
目标：把GitHub中原18个专业岗位接入一套本地模型与工具执行内核。20是本地运行席位目标，不是原有20个正式岗位；原README明确AG-00～17共18，旧等级表也说明20是历史目录名。LOCAL-GM、LOCAL-CODE为本次建议的适配位，不占AG-18/19正式编号，不修改原岗位、L2、项目状态或生产权限。先完成18个岗位真实独立回执，再以这两个适配位补齐20个运行席位。一个模型分时承担不同岗位，不同时驻留20个模型。
唯一总调度：674-77既有AI-LOCAL-32G分支下AGENT-RUNTIME，额度不足不建新单；674-347工具桥、674-359三档十元教学、674-356跑团/编程与资源、674-355导演、674-286生产协议、674-105动态链、674-332/333材料业务各自负责，不复制这些工单的历史成果。
已交付：机器注册表（18原岗source_path/blob逐一读取＋2适配位）、6条沙盒演示路由、20项独立任务/验收、dispatch_gate.mjs可移植纯函数门禁，19/19网页隔离JS模拟断言PASS；本机Ollama、真实工具适配、磁盘恢复、真实岗位能力均未跑。注册表blob ec49c873bd526a5649dca775e89bc9b3b2a62a65；代码blob 785d110b4f747ac5323dc46bd5b34e4345f029fc，commit 897c74fbf08b9f65b2272698eafb63a1fbcb573b。此代码不是完整代理进程，不自动执行外部工具。

## 0 前人已有，不重造
- 原岗位核心README与18份AG正文；AG-00唯一状态合并、专业岗只出delta。
- 既有项目`黎黎隆项目/20_Agent系统/02_共享状态/STATE_WRITE_PROTOCOL.md`（dca34456）、`04_协议/AGENT_IO_PROTOCOL.md`（c1fc14c0）、`AUTO_DISPATCH_PROTOCOL.md`（3c473051）、`CONTEXT_DISTILLATION_PROTOCOL.md`（50258117）、`PRODUCTION_LOOP_PROTOCOL.md`（1c9f6c98）：已有状态/接力/按需唤醒/上下文预算/视频反馈协议；继续以现有DISPATCH_TABLE与项目规则为正式生产权威。新注册表的routes只是沙盒示范，不能替换生产路由。
- 359 TY-Q4/Q6/Q8 v0.1是三档独立知识版本（72/68/63仅初始十元短题工程分）。356已有Q4本地GM与Ollama资源调度验证，9B说明文/降级；Q6/Q8跑团教学后未验收。
- 可借鉴的实现：LangGraph (https://github.com/langchain-ai/langgraph) 的可恢复状态图、OpenCode (https://github.com/anomalyco/opencode) 的编程工具接口、MCP SDK (https://github.com/modelcontextprotocol/python-sdk) 的工具契约。Codex先核现有Hermes/LibTV/WorkBuddy环境与版本，复用现有能力，不强制安装新框架。

## 1 注册表和单岗位验收（以原岗位原文为准）
| 岗位 | 输入 | 输出 | 适配器 | 最小验收 |
|---|---|---|---|---|
| AG-00 导演 | 目标与当前项目状态 | director_decision | dispatch | 核对任务/状态版本，过期回执拒绝，按真实阻塞STOP |
| AG-01 剧本 | 主题结果、人物目标、世界规则 | script_result | text | 删去障碍后剧情应发生可解释差异，不定机位 |
| AG-02 十元 | 事件事实、端点卡、关系门禁 | tenyuan_result | text | 复用359现有85分无硬错与留出题门禁，F3不伪造 |
| AG-03 分镜 | 剧本、十元、参考素材与镜头长度 | storyboard_result | text | 时间段覆盖镜头，明确首尾状态及可用素材 |
| AG-04 素材 | 镜头需求、资产索引和可读根 | asset_result | asset_read | 真实存在与缺失分账，不靠文件名假设已审核 |
| AG-05 生图 | 确认缺失的素材与冻结项 | image_result | image_job | 实际生成文件/hash/任务回执存在，不自动批准 |
| AG-06 风格审核 | 真实参考图、候选图、项目风格 | style_review | vision | 复用本岗原>=80/100角色门禁，硬错退回 |
| AG-07 H3渲染 | READY镜头、真实资产、preflight | render_result | render_job | 无实际executor receipt不标渲染；实际MP4与参数回执 |
| AG-08 视频审核 | 实际视频、目标镜头、角色场景参考 | video_review | video_read | 区分静态截图与运动时序；真实时间戳与缺陷；不可自己批准渲染 |
| AG-09 主题 | 作品事实或原创目标、五维正本 | theme_result | text | 不以主题推定角色主元，给必要选择/反例 |
| AG-10 世界观 | 当前项目Canon与新规则需求 | world_result | text | 新设定与原著分账，冲突阻塞，不能改全局Canon |
| AG-11 角色 | 跨阶段选择/代价与角色证据 | character_result | text | AG11已有门禁；有来源和竞争者，用户锁定才升格 |
| AG-12 短剧剧本 | 选题、人物世界与集级目标 | episode_entry | text | 只DRAFT；导演按既有短剧讨论协议裁决SETTLED |
| AG-13 十元链 | 角色证据、事件、主题按需 | event_chain | text | 事件/人物/主题/L2分层，不代AG11锁定 |
| AG-14 动态链 | Q-DYN-002目标、AG13回执 | dynamic_result | text | 按已有C-film及真人F3分账，不将自评升级 |
| AG-15 十元整理师 | AG11/13/09/02结构结果 | reader_view | text | 不改结论、关系方向或来源，引用原唯一卡 |
| AG-16 材料采集 | 材料缺口、已采索引、公开或获许可源 | RAW_MATERIAL_PACKET_V1 | source_read | 至少1可核新材料或NO_VERIFIED_INCREMENT，不刷数量 |
| AG-17 材料解构 | AG16真实原料包 | DECOMPOSED_MATERIAL_PACKET_V1 | text | 源可查、至少1竞争解释，感受H不当F3 |
| LOCAL-GM 本地跑团执行 | 独立普通剧情存档、人物设定、用户行动 | gm_result | gm_sandbox | 356原35条矩阵；实际route.model及正文、设定版本、因果与持久化 |
| LOCAL-CODE 本地编程执行 | 用户授权的隔离仓库、具体小型任务、测试命令 | code_result | code_sandbox | 真实diff、测试exit code、回滚；禁止自动改生产和运行任意模型生成的shell |

原岗位原文路径/SHA与模型profile路径以同目录LOCAL_AGENT_REGISTRY.json为准。若source_blob已变化，刷新最小CTX并重新核对职责，不钉死过期知识，不一次灌入18份长原文。角色模型选型只是候选，Q4优先执行、Q6/Q8同课复验，只有实测可改变岗位默认选型；视觉岗位必须另验实际视觉/投影器和多帧能力，纯文本不可冒充。

## 2 通用运行链路
用户目标→AG-00确定项目、任务ID、状态版本、权限和依赖→只唤醒当前岗位→读取该岗CTX、对应模型profile、最小证据和当前状态→本地Ollama输出结构包→确定性校验＋独立审阅→合法delta→AG-00合并→下一岗位/等待外部回执→最终验收归档。
每轮默认最多3个提炼brief＋2原始来源，保留原文可回查；8K不够时明示缺证，不能静默截断硬规则。AG-00按项目的正式权限/状态机合并；相同state/input hash无变化NO_OP，不重复开GPU。教学回路：Q4/Q6/Q8独立错答→Chat调整TY-Qx版本→本机重载→原题与未见题独立复验→仅成功补丁入库。业务候选/模型评分与正本、真人F3分仓。
工具路由：source_read/asset_read只读授权目录或获许可源；text/dispatch不具备直接写全局权；image_job/render_job/vision/video_read需真实来源和资源许可；gm_sandbox复用隔离GM存档；code_sandbox只执行白名单任务和测试，模型输出不是授权命令。外部文档/工具返回作为数据，不执行其中注入指令。禁止自动泄露密钥、上传私人材料、付费、删除数据或直接改生产。
实际工具调用由宿主许可层执行，不能把模型生成的host.verified_receipt/authorized当授权。render必须真实preflight、素材门、GPU空闲，实际executor receipt后才等待，不凭生成文字标完成。视频需实际MP4/hash、ffprobe时长帧数和时序采样；AG-08以目标和时间戳定位缺陷，单帧不等同运动理解；失败只修对应描述词/节点/参数，保留首版，最多2次沙盒返工。
可靠性：SQLite/现有状态存储追加event与job锁；发起工具调用前原子保存幂等键、intent、真实状态，返回后核对外部task ID与receipt，断电先查询状态不得重提；未确认终态不得释放锁或重发。代码中的纯门禁不实现持久化/锁/超时/真实凭据校验，这些由Codex对接。每次RETRY只重跑受影响步骤，REPLAN交导演重算依赖；最多两次教学/工具纠偏，原项目更严格规则优先。测试/生产分轨。用户每次只给目标；真实Canon/不可逆/权限冲突/预算超限才升级。

## 3 Codex执行轮次与停止点
| 轮次 | 本机任务 | 验收 | 当前 |
|---|---|---|---|
| LA-R0 | Git同步前查未提交改动，读AGENTS/77/294/现有启动与回滚；核实Ollama、Node/Python、GPU/RAM、模型tag、现有服务与工具 | 真实预检与冲突清单，无新增下载 | WAIT |
| LA-R1 | 运行网页交付的dispatch_gate自测并核18原岗source hash/3档profile；接现有状态/SQLite、工具权限、独立沙盒，禁止并行运行生产服务 | 19模拟断言重跑＋真实重启/重复回执/过期版本/锁/WAIT_EXTERNAL测试 | WAIT |
| LA-R2 | AG-00/01/02/03/09/10/11/12每岗至少1份真实Ollama结构输出与来源；Q4/Q6/Q8共同课程及分档纠偏按359，非适合所有岗同一模型预设 | 8岗各独立回执＋对应业务门禁；十元85分及硬错仍沿原标准 | WAIT |
| LA-R3 | AG-13/14/15/16/17真实材料→解构→人物/主题/关系链→编辑交付，复用332/333/105既有唯一案例 | 5岗独立回执；真实可核来源、反例、F3未有则null | WAIT |
| LA-R4 | AG-04/05/06/07/08真实素材→普通参考图（仅缺失）→图审→H3计划→视频→时序审；由355/286/216原授权路径接入 | 5岗独立回执；1段6秒沙盒视频、实际失败定位及最多2次重跑；图像/视频无法生成标BLOCKED | WAIT |
| LA-R5 | LOCAL-GM：继承356普通剧情矩阵和359知识，新增/修订设定、连续五轮、重启恢复 | 既有35条真实回执与三档纠偏前后（同数据不重复计数），独立状态与模型路由 | WAIT |
| LA-R6 | LOCAL-CODE：接已有OpenCode或当前工具沙盒，不强装；完成读取、独立小bug修复、测试与回滚 | 真实diff、测试exit code、未越权、失败可恢复 | WAIT |
| LA-R7 | 20席位可调度验收，选择每岗实测配置，跑一条材料研究/一条普通剧情/一条视频链；按原问题树回写 | 18/18原岗能力回执＋2/2适配位，运行时可恢复；外部等待不伪称DONE | WAIT |

每岗分别记录ROLE_REGISTERED / LOADED / TOOL_PASS / TASK_PASS / BLOCKED；至少一真实样本才有TASK_PASS，不等于该岗全部能力验收。专业岗位目标先L5–L6，AG-00目标先L6–L7，按原等级表实测，不直接承诺L8–10。每轮固定结束点；无可用输入、无真实GPU或权限缺失写BLOCKED/NO_OP，不能无限重试。优先现有已安装模型，旧Q8_0_L取消。若H3占显存，大模型串行让路；生产8849与WorkBuddy占用文件、概念树不动。一次只启动一个受许可GPU任务。

## 4 自测命令
进入本目录后：
```powershell
node --input-type=module -e "import fs from 'node:fs'; import {selfTest} from './dispatch_gate.mjs'; console.log(selfTest(JSON.parse(fs.readFileSync('./LOCAL_AGENT_REGISTRY.json','utf8'))))"
```
网页端已用同一组纯函数运行19断言，包含角色数量/路线、导演优先、拒绝过期与错岗、不可变状态、重复回执、授权、外部证据、等待/恢复、DONE、有限重试、禁止任意跳步、禁止生产、H3与生图前置。模拟mock evidence不是实机证据；Windows运行待验。宿主实现后新增真实持久化/锁/网络错误/素材证据/回滚测试，不把模拟单测算成20岗已跑。

## 5 回执格式与交接
每轮：run_id、agent_id、source_hash、project_id、job_id、model_tag/digest、profile_version、prompt/实际证据引用、可见结构结果、tool_calls/真实artifact或日志引用、耗时/显存、版本前后、verdict、failure_family、next_action、needs_user。数据用用户授权普通创作材料，非敏感回执写GitHub或Linear。R0-R7统一回写77本子键及原业务工单，复用旧Canvas（先按布局skill审计唯一分支，不复制）。Chat负责知识校准、分析证据、方案与复验标准；Codex负责本机代码、加载、运行与回执，网页端不能启动本机。当前状态WEB_SCAFFOLD_READY，20个真实本地席位运行验证0/20。


## 6 用户新增目标｜LibTV文本框 × 每岗位独立Hermes（2026-11-25）
**入口唯一**：LibTV 3100现有画布文本节点，增加普通文字 / Hermes代理两种模式；不另外做第二个聊天软件。每个代理席位（18个原AG＋LOCAL-GM/LOCAL-CODE）对应一个独立Hermes profile候选；独立角色定义、Skill、可访问知识、会话/工作记忆、工具许可，底层共享现有Ollama和GPU调度，非20份模型权重、非20个常驻GPU进程。
**现有事实**：674-217（Duplicate→674-77）历史记录WSL Ubuntu-24.04 Hermes 0.14.0，Linear MCP list/test曾连接并发现59工具；QQ真实消息尚未验收。本机当前版本/运行状态/HTTP端口未核实。674-357明确LibTV唯一记录台，3100、CanvasWorkspace.tsx、现有MCP stdio→HTTP后端，跑团投喂与项目素材验证已有实测；历史记录不等于Hermes已接通。356最新回执为跑团v1.3.0，概念树回灌与在场板由WorkBuddy独占。355实际是跑团文字→构图skill，不是LibTV总母单；其视频识别前置实验保留为子任务。
**官方前人**：[Hermes Agent API Server](https://hermes-agent.nousresearch.com/docs/user-guide/features/api-server) 已实现OpenAI兼容API及profile路由；[Profiles](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/profiles.md) 支持不同配置/Skill/记忆；[MCP](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp) 提供工具连接与筛选；[配置](https://hermes-agent.nousresearch.com/docs/user-guide/configuration) 支持本地Ollama提供者；[Open WebUI](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/open-webui) 是外部聊天界面接Hermes的现成参考。以上为现行文档，不保证历史0.14.0支持同样API。先在WSL用实际帮助、源码和健康检查核对版本/feature；若不支持profile API则在独立测试profile用已验证CLI或官方programmatic接口适配，不强升生产、不暴露任意shell。
**网页端交付**：同目录HERMES_LIBTV_PROFILES.json（commit 9ddd1797d4b64735f6b1be29ba43460d2f4cdee2，blob 1b1e8b19e7280c3651ab728fbe418b3ea3fd0fe0），20个稳定profile名、各岗正本/知识来源、Q4/Q6/Q8教学引用与最小工具许可候选。工具别名为拟定适配器契约，实际MCP名称和输入schema由本机枚举、查现有源码后绑定；不存在就BLOCKED，不假装已注册。Hermes profile隔离是配置与记忆隔离，不能当作OS安全沙箱；跨项目/跨代理访问须由宿主工具白名单、路径约束、凭据权限强制隔离。
**架构**：LibTV文本节点→LibTV服务端Hermes bridge（Node/现有后端实现，私有端口/鉴权）→目标Hermes profile（会话键project_id/node_id/profile_id/session_id）→本地Ollama（明确tag，真实route回执）→授权工具调用（LibTV原MCP/知识只读/独立代码沙盒）→AG-00汇总状态→LibTV事件流显示可见输出/工具/文件/节点/任务回执。优先用Hermes作为运行内核，dispatch_gate.mjs仅作外层确定性约束/测试，不重复造第二个agent loop。浏览器不得直接持有Hermes/Linear密钥；仅本地/鉴权监听，不开放公网/默认远程命令。模型命令不得原样执行为任意shell；终端功能只走明确白名单、隔离工作区与用户已授权任务，不自动删除/改生产/上传/付费。禁静默云端fallback。
**拟定UI**：普通文本节点保留原有编辑和描述词功能；Agent模式可选择Hermes岗位、模型Q4/Q6/Q8、对话/执行模式、当前选中节点作为上下文，显示会话、任务状态、工具调用名称与返回摘要、实际产生的节点/文件、停止与恢复按钮。@AG-xx或明确菜单选择同一路由；@AG-00请求多岗协作时由总控按实际依赖调用，不能并行占GPU；各岗只提交独立delta。聊天记录和任务记录分账；对话不是命令已执行，排队不是视频已生成。
**拟定后端契约**（新增端点名称由本机先查现有路由防冲突）：GET /api/agents列20席位及实际ready状态；POST /api/agent-runs接收project_id、node_id、agent_id、model_profile、message、mode、input_refs、session_id、expected_state_version、idempotency_key；返回run_id和状态。事件流提供MESSAGE_DELTA、TOOL_PROPOSED、TOOL_STARTED、TOOL_RESULT、ARTIFACT_READY、WAIT_GPU、BLOCKED、DONE，均带真实run_id及序号。POST cancel仅取消对应run，不杀其它H3/GM进程。断点恢复按真实task id查询外部状态，重复提交不得重复出片。前端schema新增字段需持久化回读、防旧节点静默strip、npm build后本地验证。
**优先R1–R7（本支线 H-L01～07）**：
1. H-L01：核Hermes实际版本、现有profile/QQ/Linear连接、WSL与Windows Ollama/3100网络路径、真实MCP工具列表；备份并避免更改现有QQ/生产配置。
2. H-L02：先建一个隔离测试profile（AG-00），通过实际本地Ollama成功对话，证明无云端fallback；接LibTV服务端桥与文本框，回传真实可见消息与session id。
3. H-L03：AG-02与AG-08各一独立profile，确认三岗记忆/角色/工具相隔离；Q4/Q6/Q8选择与教学profile匹配，视觉组件不支持则显式BLOCKED。AG-02只能知识研究，AG-08只读取普通创作视频并审核，不能直接渲染。
4. H-L04：AG-00调度AG-03/04/07/08，按现有LibTV项目/素材门，执行1个普通6秒动画闭环：计划→提交→实际MP4→时序抽帧→证据定位→修正→最多2次重试→归档。真实video/job/node id，拒绝仅文字结果冒充出片。
5. H-L05：注册剩余Hermes profile达到20个席位；逐岗按原LA-R2～R6最小验收，确认身份、独立会话、知识来源、实际工具和权限；不能只批量创建空profile就记为已验收。共享模型与显存调度。
6. H-L06：读真实Linear 77测试查询；经批准的隔离代码目录读取→小修复→测试→diff；不直接修改生产、不开任意shell、不自动写工单；验证拒绝越权、取消、重复回执、重启恢复、模型排队。
7. H-L07：LibTV前端构建、隔离端到端验收，原文本节点/画布存档兼容；逐岗回执20/20才算全席位最小可运行。原有AG验收标准不改。接入已有问题树，按Canvas skill先预检；不强行新增图。

**工单**：674-77主控AI-LOCAL-32G/AGENT-RUNTIME/HERMES-LIBTV；674-357唯一LibTV侧记录台（由该端占用者协调前端/后端变更），356跑团与资源调度、359独立十元教学、355视觉识别前置，217保留历史不复活。Codex本机先做H-L01/02，复用已交付注册表与门禁，原LA-R0/R1与本支线前置合并，避免重复测试。所有新开发只覆盖普通动画/研究/代码场景；不读取或复制无关专项生产提示词。当前20个profile映射已写入且回读，实际创建0/20，LibTV-Hermes对话0次，实际视频闭环0次，尚未启动本机，状态WAIT_LOCAL_CODEX。


## 7 用户UI纠正｜左侧独立代理节点类别（覆盖§6的文本节点改造提议）
- 保留原文本/图片/视频节点。左边节点栏新增「代理」类别，点击展开现有18个正式岗位＋2个本地执行适配位，点击某岗位即在当前项目画布创建该岗位独立代理框（不要求拖动，也不将普通text节点变成聊天框）。每框绑定agent_id与对应Hermes profile，允许选择实际已安装Q4/Q6/Q8及对应TY知识版本、输入自然语言、独立会话、引用当前画布已许可节点、显示工具/任务/真实产物、停止与恢复。建议新增独立agent kind；具体schema由本机先核现有节点模型和持久化规则，避免旧节点丢字段。不同框即使同岗位也按project/node/profile/session隔离会话；连线只传明确结构化输出和获授权的asset refs，不自动转移权限或任意执行下游。用户显式执行后才运行，不因创建框就启动模型或渲染。
- 最新证据：359 Q4/Q6/Q8在8K完整GPU驻留分别16.30/20.52/26.15 GiB，55.56/27.29/21.77 token/s；十元基线72/68/63，均未达85。356已有Q4跑团/部分工具调用与识图记录；最新356 13:10回执明确目前Q6/Q8为纯文本加载，不具备当前识图能力。355要求兼容mmproj、实际视觉负控、时序抽帧验证。三档同源checkpoint未证实，不由基线归因量化优劣。
- 运行原则：岗位不等于独立模型。三档可作为文本岗候选；实际工具调用、复杂计划和逐岗质量须测。Q4先用于最小工具闭环，Q6/Q8不因精度高自动PASS。AG04查素材/AG07提交渲染由授权工具执行，可由文本模型规划和调用；AG06/08必须有真实视觉证据，Q6/Q8当前不能独立看图，可消费经Q4或独立视觉工具核验的带时间戳观察结果，标代理间交接，不算本档独立视觉能力。H3与LLM错峰，不同时加载20个模型。
- H-L02验收改为「左栏代理→点击AG-00→独立框→选择Q4→真实Hermes对话与工具回执→刷新后会话可恢复」；H-L03扩展AG-02/08独立框、切换实际模型与知识版本、节点间结构化传递及隔离。H-L05逐岗至少一项真实任务，不强制20×3全组合初轮：先Q4验证宿主工具及18+2个席位，再在文本/导演/编程各1个代表性任务用三档同输入同权限同预算比较真实成功、耗时、重试、人工介入；视觉单独走355，十元原门禁走359。采用同样的输入并区分模型错误/工具错误/宿主问题，至少完成一次实际读取→受控写隔离画布→回读验证以及一次失败→定向重试→STOP；不把文本答复当工具执行。未通过显示BLOCKED或仅对话，不默认具备执行能力。
- 当前只更新UI与能力验收合同，未修改LibTV源码、未创建实际Hermes profile、未启动本机。


## 8. 2026-11-25｜用户要求 Terra / Luna 分单执行（现行优先调度）
77当前执行键 AI-LOCAL-32G/AGENT-RUNTIME/HERMES-LIBTV，指定Terra 6.1 High主工程。历史AI-LOCAL-32G其他探索与LA/H-L轮次保留为来源，不在本次口令中顺带启动。新T-R01～10是集成执行顺序，与旧验收合同兼容，不放宽门禁。Luna 6 Medium另开Codex框执行已有359、355的指定支线（不建新工单，294既有额度阻塞）；不是把两模型能力差异当实测结论。
| 轮次 | Terra主线 | 最小完成证据 |
|---|---|---|
| T-R01 | 核WSL Hermes版本、实际接口、Ollama tag、资源锁、现有LibTV MCP工具/schema；AG-00隔离profile真实对话/工具读取 | 本地调用回执、无云端fallback、兼容性清单；旧QQ/生产服务不动 |
| T-R02 | 左侧代理类别→岗位菜单→点击创建独立agent节点，普通文本/图片/视频保持原样 | 保存刷新恢复、绑定agent/profile/model/session、可见状态 |
| T-R03 | 代理读取授权上游text/image节点，受控新建/连接/修改隔离画布节点，显示真实tool和node id、版本、参数摘要、失败原因；宿主白名单、幂等/回读 | 一次读取→受控写入→回读一致，失败有界修复；UI展示真实调用而非模拟 |
| T-R04 | AG-05接现有本地单图生图后端（先核实际工作流/模型；H3视频后端不自动冒充单图接口），自然语言＋参考图→可见工作流节点→真实提交→结果图片节点 | 普通动画单图实际文件、job/node id/hash、输入边与完整工具回执；只在隔离项目 |
| T-R05 | AG-06按冻结角色/风格和真实图像审核，失败项定向改正 | 已验证视觉模型输入和审核证据、保留首版、最多2次返工；若视觉不达标BLOCKED |
| T-R06 | AG-07读取已批准素材/文本/分镜，H3预检后真实提交普通6秒动画 | 真实MP4、job/node id、时长、资源日志；GPU错峰 |
| T-R07 | AG-08实际视频时序抽帧与目标对照→只针对失败项修正→最多2次重试→复核 | 真实时间戳、前后版本、失败与STOP；依赖355视觉证据，单帧不能冒充时序 |
| T-R08 | 18正式岗＋2适配位独立Hermes profile接入，复用现有映射和359三档教学 | 实际20配置/隔离检查，逐岗至少1真实回执才计TASK_PASS；不同时驻留20模型 |
| T-R09 | AG-00按现有项目协议调度各专业岗，结构化delta与知识检索，连接不传权限 | 材料/普通剧情/视频三线真实回执，未授权工具拒绝 |
| T-R10 | 构建、回归、状态持久化、取消/重启恢复、重复回执、GPU排队、回滚与归档 | 实际测试结果与20席位状态账，失败不算通过 |
优先T-R01→04，先实现真实生图代理。T-R05/07依赖355视觉测试，T-R08/09按359教学实测，未通过可标BLOCKED并推进无依赖项。T-R08逐岗原有LA-R2～R6验收不删，原19个模拟断言不冒充本机PASS。
Luna独立队列：359 LUNA-TY（现有R06–R10、TY-Q4/Q6/Q8三档复跑，真实答卷/注入/逐题证据回传Chat，保留85门）；355 LUNA-VISION（现有V1–V5视觉组件兼容与正常图像/视频样本时序识别，构图原CLI/API回归在许可下进行）。Luna先做359，完成或BLOCKED再做355；不重写LibTV/Hermes主工程，不直接修改生产8849或概念树，不启动H3生产、不自行重启共享服务。仅独立测试目录；共享GPU由Terra/既有调度锁协调，GPU忙先做CPU/只读工作。356跑团由原占用端负责，Luna只准备和回传可复用普通剧情评测，不接管其源码；347仍为独立Linear工具桥，不另派并行改动。20个profile真实创建及集成由Terra负责；Luna可提供只读校验清单/测试回执，不创建同名生产配置。
状态：仅Chat完成排程、登记和已交付网页端框架；本机T-R01～10未收到实测回执，Luna新队列未启动。Terra与Luna均须在Codex由用户选择对应模型执行，工单本身不触发本机运行。