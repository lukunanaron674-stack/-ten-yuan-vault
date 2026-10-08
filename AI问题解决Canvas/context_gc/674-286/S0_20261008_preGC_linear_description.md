# 674-286 pre-GC Linear description snapshot

archived_at: 2026-10-08
source_issue: 674-286
source_title: B-END｜端B问题系统总控｜Z→XN→PATH→H3生产→反馈
reason: CONTEXT_GC initial compaction
policy: 674-294

---

# CONTEXT_GC HOT HEADER｜默认读取入口

```yaml
CONTEXT_GC_STATE:
  policy: 674-294
  read_mode: HOT_ONLY
  current_snapshot_version: GC-S0-20261008
  recent_receipts_kept: 5
  archive_pointer: AI问题解决Canvas/context_gc/674-286/
  gc_required: false
```

## CURRENT_SNAPSHOT

* role: 端B问题系统 / H3生产编排总控
* authoritative_interface: DA_INTERFACE_V1
* input: 293 ASSET_PACKET + SHOT_NEED + FEEDBACK_PACKET
* output: REF_SELECTION + SHOT_PACKAGE
* compatibility: DA_INTERFACE_V1 > LEGACY_COMPAT_OVERRIDE > 旧286文本
* hard_boundary: 自动选图评分、局部retake稳定性、LongTake等效果性能力仍归 <issue id="adad9533-ee17-4d68-858b-a5b8306d9bbb" href="https://linear.app/674/issue/674-272/chatgptsocialus-知识吸收与验证总控">674-272</issue> 验证

## ACTIVE_LINKS

293 → 286 → A端执行 → 289 → 173 → FEEDBACK_PACKET → 282/286。

## BLOCKERS

缺正式资产引用、USER PASS 未成立、候选能力未 E0→E5 时不得伪装成稳定能力。

## NEXT

只消费增量 SHOT_NEED / FEEDBACK_PACKET 与最近有效 receipt；不全量重读历史运行。

## ARCHIVE_POINTER

`AI问题解决Canvas/context_gc/674-286/`

**读取纪律：默认禁止批量读取本 Issue 全量 comments/history；需要复现旧任务时按 run_id / video_id / version 定向恢复。**

---

# 2026-10-07｜端B重启：问题系统总控（LATEST / 覆盖旧端定义）

## Z0｜端B总目标

> **持续发现、拆解并解决“已审核资产 → 可稳定、连续、自动生产 H3 动画视频”之间的全部问题，使端B从单纯提示词生产器升级为可校准的问题解决/编排系统。**

端B的问题系统与《黎黎隆问题总览》使用同一问题语法：
`Z → 子Z → XN候选 → NX缺口 → PATH → 执行 → 证据/反馈 → 校准 → DONE/继续拆Z`

复用 <issue id="52af2c35-eef2-40e9-9728-2fad46a6e5c2" href="https://linear.app/674/issue/674-276/chatgptworker问题系统架构zzxnpath执行反馈总控重构">674-276</issue> 的 Z/XN/NX/PATH/主权框架，不建立第二套互相冲突的术语。

### 边界冻结

* **B = 编排/问题解决层**：问题拆解、规则选择、动态链、镜头编译、H3描述词、反馈学习。
* **C = Linux资产能力层**：不再等同于3070电脑。负责资产路径、SHA、裁切/命名/版本、Manifest、帧包/视频资产记录等机械资产能力；硬件可迁移。
* **A = H3渲染执行端**：当前4080实际执行 H3、输出MP4/抽帧/运行回执。
* 角色设计/四宫格生产、角色仓建设、154全量素材仓、173人工审核入口、125返工队列属于B的上游/外部系统，不重新塞进B问题树。
* B只能消费已确认/可追溯资产；缺真实资产时登记 PATH/BLOCKER，不用纯文字假装素材存在。

## L1｜当前5个主Z

### B-Z1｜输入可靠性

目标：B稳定取得正确 PASS 角色/场景/首帧/版本，避免错角色、错版本、错路径。
DONE：每次任务都能追溯 asset_id/path/SHA/version/review state。

### B-Z2｜镜头编译

目标：把角色资产 + 场景资产 + 十元/动态链稳定编译为 H3 可执行镜头。
DONE：描述词不是漂亮文案，而是动作顺序、端点、摄影机、禁止项均可执行且可审核。

### B-Z3｜连续性

目标：前后镜头的身份、空间方向、动作端点、摄影机、时间状态可以继承。
DONE：上一镜 end_state 可机械成为下一镜 start_state，并有失败字段。

### B-Z4｜生成反馈学习

目标：A端真实生成结果/抽帧审核能反向修正 B 的 XN，而不是每次整条重写。
DONE：failure_family → changed_fields → next_version 可追踪；保留 kept_fields。

### B-Z5｜自动生产稳定性

目标：B可周期运行、幂等续跑、失败恢复、正确STOP/WAIT/升级NX。
DONE：任务不会重复生产；阻塞类型明确；可继续项自动继续；必须人工判断时才上报74。

## 每个Z统一字段

`z_id / parent_z / z_statement / z_volume / desired_level_1_10 / current_level_1_10 / done_condition / xn[] / nx_gap[] / path_state / evidence / confidence / owner / next`

XN来源沿用<issue id="52af2c35-eef2-40e9-9728-2fad46a6e5c2" href="https://linear.app/674/issue/674-276/chatgptworker问题系统架构zzxnpath执行反馈总控重构">674-276</issue>：
`SOCIAL / COMMERCIAL / PERSONAL / MIGRATED / EXPERIMENTAL / UNKNOWN`

PATH状态沿用：
`FOUND → ACQUIRED → READABLE → UNDERSTOOD → ADAPTED → EXECUTABLE → AUTOMATABLE → VERIFIED`

## 端B运行顺序

`B1 索引/状态读取 → B2 Z/XN/动态链 → B3 镜头/H3编译 → A执行 → C/Linux资产记录 → 审核证据 → B4质检/反馈校准 → NEXT`

### STOP原则

* 缺XN：研究/实验后再继续。
* 缺PATH：登记现实能力阻塞，不把它误判为提示词问题。
* 缺NX：交74做最小必要判断，再沉淀候选XN。
* 已有可靠XN+PATH：直接执行，不继续研究。
* 每个研究Z必须有STOP；每个生产Z必须有DONE。

---

# B端永久母工单｜H3 动画视频描述词生产

## 固定用途

* 本工单是后续 **B端 H3 动画视频描述词唯一长期工单**。
* 以后 B 端新增 H3 动画任务不再新建根工单编号，统一在本工单内继续追加任务与每小时回传。
* **B端 = ChatGPT / 文字导演端**：只负责每小时生成、优化、续写 H3 动画视频描述词，不负责实际跑图、不负责 H3 渲染。
* **C端 = Linux资产能力层**：不绑定3070电脑；负责素材定位、路径/SHA、版本、Manifest、裁切/命名与资产记录。实际素材可位于可访问仓库，由 locator/path 指向。
* **A端 = 4080 魔改 32G**：旧的 H3 实际执行端；只有明确进入 H3 执行阶段时才由 A端消费 B端描述词 + C端素材。
* **4090 已停用，不再进入当前生产链。**
* 每条 B端任务默认 10–11 秒；优先单一主动作链，避免一镜塞太多动作。
* Picture1 锁角色身份/比例/服装；Picture2 锁环境/构图/色调。
* 禁止无依据新增角色、换装、改脸、增殖肢体/武器、字幕、Logo、3D 化。
* 每小时只做文字增量：已完成描述词不重复生产，除非有新的审核反馈要求修订。

---

# 首批 3 条 H3 动画任务

## H3-B-001｜发现异常｜轻动作稳定镜

### C端3070｜图素材仓库要求

* Picture1：当前 B 端选定角色的清晰中景/中全景角色图，角色身份、服装、比例已锁。
* Picture2：角色所在环境的稳定构图图，留出角色行动空间。

### H3 动画视频描述词

> 保持 Picture1 中角色的脸型、发型、服装、身体比例与所有识别结构不变，保持 Picture2 的场景布局、光线和色调不变。角色原本自然站立或缓慢行走，随后注意到画面侧前方出现异常动静，动作短暂停顿，头部与视线先转向异常方向，身体随后轻微跟转并向前迈出一步，神情从放松逐渐转为警觉和好奇。镜头以稳定中景开始，仅做非常轻微的缓慢前推，动作连续、重心自然、没有突然跳切。结尾停在角色已经确认目标、准备继续靠近的状态。

### 本镜必须发生

1. 察觉异常。
2. 视线转向目标。
3. 身体跟转并前进一步。
4. 结尾形成下一镜可继承的“准备靠近”状态。

### 禁止

换脸、换衣、突然多出第二角色、凭空新增武器/道具、肢体增殖、背景重建、强烈镜头运动、字幕、Logo。

---

## H3-B-002｜接近并观察｜角色×空间连续镜

### C端3070｜图素材仓库要求

* Picture1：与 001 同一角色版本，优先使用相同角色主参考。
* Picture2：与 001 同一地点或明确相邻空间的场景图，保持方向关系一致。

### H3 动画视频描述词

> 延续上一镜的角色身份、服装、比例、朝向与情绪状态。角色保持对异常目标的注意，向目标方向自然走近两到三步，在接近目标后速度放缓并停住，身体略微前倾观察，手部只做一次克制、清楚的小幅试探动作，不触碰时不要凭空抓取任何东西。角色的目光始终锁定目标，服装与发饰仅产生符合运动的轻微惯性。摄影机以轻微横向跟随配合人物移动，人物停止时镜头也逐渐稳定，不做突然推拉或大幅绕拍。结尾停在角色靠近目标、正在判断是否继续接触的状态。

### 本镜必须发生

1. 从上一镜位置向目标移动。
2. 走近两到三步。
3. 停住并观察。
4. 出现一次明确但克制的试探动作。
5. 终态可接“目标反应”。

### 禁止

瞬移、连续复杂手势、第二角色、换装、改变场景方向、突然切镜、明显背景重构、额外道具、字幕、Logo。

---

## H3-B-003｜目标反应与角色应对｜小幅动态镜

### C端3070｜图素材仓库要求

* Picture1：继续沿用同一角色主参考。
* Picture2：继续沿用同一环境；若目标属于 L1 持续对象，由 3070 WORK 先补目标参考，不允许 H3 每镜重新发明。

### H3 动画视频描述词

> 保持前两镜全部角色与空间连续性。角色正靠近并观察目标时，目标突然产生一次清楚但不过度夸张的反应，使角色本能地向侧后方退半步或一步避让；角色重心先后移，随后迅速稳定身体，再重新把视线锁回目标，情绪从好奇短暂转为惊讶，再收束成警觉和准备行动。角色不要转身逃跑，不要加入额外攻击动作。摄影机只做轻微侧向跟随和极小幅度调整，保持人物始终处于主要构图区域。结尾必须停在角色重新站稳、确认目标变化、准备做下一步决定的状态。

### 本镜必须发生

1. 目标发生一次反应。
2. 角色后撤避让。
3. 身体重新站稳。
4. 视线重新锁回目标。
5. 情绪完成“好奇 → 惊讶 → 警觉”的清楚变化。

### 禁止

大幅翻滚、复杂打斗、瞬移、角色复制、换脸、换装、武器凭空出现、背景崩坏、大幅镜头旋转、字幕、Logo。

---

# A端4080｜H3执行交接规则

B端只准备可执行文字包，不负责真实渲染。

当 A端4080 领取某条 H3-B 任务时，必须核对：

```text
task_id
Picture1 actual path + SHA256
Picture2 actual path + SHA256
prompt_version
duration
seed
```

真实输入与 B端任务一致后，A端才执行 H3。

A端完成后可回传：

```text
[A-END H3 RECEIPT]
task_id=
status=PASS/PARTIAL/FAIL/BLOCKED
picture1=
picture2=
output=
identity=
action_completion=
scene_continuity=
failure_family=
next=
```

A端是否运行，不阻塞 B端继续按小时生产下一批文字描述词。

---

# 每小时续跑规则

1. B端每小时优先完成当前未完成的 H3-B 描述词。
2. 每小时最多新增/修订 3 条 H3-B 描述词。
3. C端3070只提供图素材仓库状态；素材缺失时标记 WAIT_C_ASSET，不由 B端假装有图。
4. A端4080是否实际跑 H3 与 B端文字生产解耦；A端未执行时，B端仍继续准备后续可执行描述词。
5. 首批 001–003 完成后，继续编号 H3-B-004、005、006……，仍然只在 <issue id="5dc719f3-5f18-4959-bd88-9d3d73eb1315" href="https://linear.app/674/issue/674-286/b-end-hourlyh3动画视频描述词3070配图永久母工单">674-286</issue> 内继续，不另开 B端根工单。
6. 每小时回传：
   * 本小时新增/修订的 H3 描述词
   * C端素材依赖
   * A端执行状态（如有）
   * BLOCKER
   * NEXT

## STOP

B端只在以下情况暂停：

* 用户明确暂停 B端；
* 当前可用角色/场景信息不足以安全编写描述词，且继续写会变成编造；
* 连续两轮没有任何新的可执行描述词，只是在重复改写措辞。

C端素材迁移、A端4080排队或暂时未跑 H3，都**不构成 B端 STOP**。

---

# 2026-10-07｜B→C 帧审核与视频版本仓库规则（最新覆盖）

## 固定闭环

```text
B端：生成 H3 描述词
↓
C端3070：提供 Picture1 / Picture2 源素材
↓
A端4080：执行 H3
↓
A端：保存 MP4 + 自动抽帧
↓
B端：领取 A端帧包与运行回执
↓
B端：把帧包交给 C端
↓
C端：逐帧审核 + 视频版本管理 + 首帧图归档 + 素材仓库入库
↓
C端：把结构化审核文字回传 B端
↓
B端：根据审核结果修下一版描述词 / 继续下一镜
```

## A端4080只负责

* 执行 H3；
* 保存 MP4；
* 为每个视频自动抽帧；
* 至少输出：start / 25% / 50% / 75% / end；
* 输出首帧图；
* 记录 output_path / output_sha256；
* 不做最终素材入库；
* 不做 B端提示词改写。

A端抽帧完成后输出：

```text
[A-H3-FRAME-PACK]
task_id=
video_version_candidate=
output_mp4=
output_sha256=
first_frame=
q1_frame=
mid_frame=
q3_frame=
end_frame=
extra_keyframes=
status=READY_FOR_B_HANDOFF|BLOCKED
blocker=
```

## B端帧交接职责

B端收到 A-H3-FRAME-PACK 后，不直接做最终视觉审核。

B端必须建立：

```text
[B-FRAME-HANDOFF]
task_id=
source_video=
video_version_candidate=
frame_pack=
target=C_REVIEW_AND_ASSET
status=QUEUED
```

然后把帧包交给 C端3070。

## C端3070新增职责：审核 + 素材管理

C端不再只是“原始图素材仓库”，还负责 **H3 输出帧审核与视频素材归档**。

### C端审核内容

必须基于 A端抽帧检查：

* identity_stability
* body_ratio_stability
* costume_structure_stability
* action_completion
* action_order
* limb_integrity
* scene_continuity
* camera_continuity
* flicker
* duplicate_character
* unexpected_redesign
* required_event_completion
* end_state_match

可用：
PASS / PARTIAL / FAIL / NOT_APPLICABLE

### C端每个视频必须建立版本号

格式建议：

```text
H3-B-004_v001
H3-B-004_v002
H3-B-004_v003
```

不得覆盖旧版本。

每次重跑都递增版本号。

### 每个视频版本必须归档

```text
VIDEO_ASSET_RECORD
task_id=
video_version=
mp4_path=
mp4_sha256=
first_frame_path=
first_frame_sha256=
frame_pack_paths=
source_picture1=
source_picture1_sha256=
source_picture2=
source_picture2_sha256=
prompt_version=
seed=
review_status=
review_report_path=
created_at=
supersedes=
```

## 首帧图规则

每个视频版本必须单独保存首帧图。

首帧图用途：

* 版本可视化索引
* 视频仓库缩略图
* 人工快速浏览
* 后续版本对照
* 必要时作为连续性参考证据

禁止只保存 MP4 而没有首帧图。

## C端素材仓库建议结构

```text
C_ASSET_REPO/
└─ H3_VIDEO/
   └─ H3-B-004/
      ├─ v001/
      │  ├─ H3-B-004_v001.mp4
      │  ├─ first_frame.png
      │  ├─ frames/
      │  │  ├─ start.png
      │  │  ├─ q1.png
      │  │  ├─ mid.png
      │  │  ├─ q3.png
      │  │  └─ end.png
      │  ├─ review.json
      │  └─ asset_record.json
      └─ v002/
```

C端作为 Linux 资产能力层运行，不绑定具体GPU机器；未来迁移存储时只迁移仓库 locator / path，不改变 video_version 与 asset_id。

## C端回传 B端格式

```text
[C-H3-REVIEW]
task_id=
video_version=
review_status=PASS|PARTIAL|FAIL|BLOCKED
first_frame=
identity_stability=
body_ratio_stability=
costume_structure_stability=
action_completion=
action_order=
limb_integrity=
scene_continuity=
camera_continuity=
flicker=
duplicate_character=
unexpected_redesign=
required_event_completion=
end_state_match=
failure_family=
text_findings=
recommended_prompt_change=
asset_repo_status=STORED|PARTIAL|BLOCKED
asset_record=
next=B_RETURN
```

## B端收到 C-H3-REVIEW 后

* PASS：锁定该 video_version，继续下一任务；
* PARTIAL：只修失败字段，生成下一 video_version；
* FAIL：按 failure_family 定向改写，不整条重写；
* BLOCKED：等待 C端素材/仓库问题解除。

B端修订继续使用：

```text
[B-FEEDBACK-APPLY]
source_task=
source_video_version=
source_review=
changed_fields=
kept_fields=
reason=
next_version=
next_task=
```

## 版本冻结

只有 C端 `review_status=PASS` 且 `asset_repo_status=STORED`：
该版本才允许标记为：

```text
VIDEO_VERSION_LOCKED=TRUE
```

未通过版本保留，不删除，用于失败族与版本对照。

---

# 2026-10-07｜SOCIAL→B：H3 稳定生产能力吸收层（人在环外）

## 上位目标

本层不是独立研究项目。唯一目的：把社会/官方/社区已经跑通的 H3/HunyuanVideo 稳定生成经验，转译为《黎黎隆》可执行 XN，并服务端B总目标与 <issue id="b8dd5507-cddf-4fd8-999d-43bf91bf03e5" href="https://linear.app/674/issue/674-282/worker角色-xnz-实验对象系统落地纵向主链横向分流base闭环">674-282</issue> 角色生产链。

## 输入/输出关系

社会已有 H3 经验 / 官方参数 / 社区工作流 → 证据分级 → 候选 XN → 本地4080适配 → 最小 A/B 实验 → A端真实生成 → C端抽帧审核 → B端失败族归因 → VERIFIED_XN → B-Z2/B-Z3/B-Z4/B-Z5。

角色侧：<issue id="b8dd5507-cddf-4fd8-999d-43bf91bf03e5" href="https://linear.app/674/issue/674-282/worker角色-xnz-实验对象系统落地纵向主链横向分流base闭环">674-282</issue> → CHARACTER_IDENTITY_PACKET → ASSET_BIND_PACKET → H3_PRODUCTION_INPUT → 本层只研究“怎样稳定地让它动起来”。

## 社会知识四层

1. OFFICIAL：官方 prompt handbook / 推荐 workflow / 参数。形成高置信候选 XN，但仍需本地验证。
2. REPRODUCIBLE_COMMUNITY：有 workflow JSON、模型版本、节点/参数、样例或可复现实验记录。
3. PRACTITIONER_HEURISTIC：漫剧/H3从业者经验、教程、案例；作为实验假设，不能直接写 XN_LOCK。
4. LOCAL_EVIDENCE：本地4080同条件双 seed / 多镜结果 + C端审核。只有这一层能把候选升级为本项目 VERIFIED_XN。

## 首批要吸收的 XN 类

* PROMPT：主体动作、场景动态、镜头运动；动作按时间顺序拆解；抽象情绪改为可见动作；明确左右/前后/主体归属。
* INPUT：角色身份图/身体图/服装图/场景图的职责与最小输入组合；禁止 HEAD_ONLY 越权承担 BODY。
* PARAM：模型/checkpoint、分辨率、steps、CFG、flow_shift、seed、帧数、SR、VAE/tile 等形成版本化 profile。
* MOTION：单镜动作复杂度、动作数量、速度、幅度、起止状态。
* CAMERA：静态/跟随/推拉/摇移/环绕等可用边界与角色动作耦合。
* CONTINUITY：上一镜 end_state → 下一镜 start_state；方向、姿态、道具、角色状态继承。
* FAILURE：身份漂移、肢体异常、动作漏项、动作乱序、背景重构、镜头失控、闪烁、角色复制等 failure_family → 定向修复字段。
* LONGTAKE：稳定短块先成立，再研究拼接/长镜；不得用一次偶然长视频 PASS 代替短块稳定率。

## 实验纪律

* 一次只改变 1 个主变量；其余 controls_locked。
* 默认同条件 Seed A/B；关键规则扩到多 seed。
* 记录 model/workflow/prompt/input SHA/seed/参数/输出 SHA/审核。
* 一次 PASS = anecdote，不升级规则。
* 规则必须写适用域、反例、失败族、置信度。
* 社会经验与本地经验分栏，禁止把“别人说稳定”写成本机稳定。

## 人在环外

默认自动执行：SEARCH/RECOVER → EVIDENCE_RANK → XN_EXTRACT → LOCAL_ADAPT → EXPERIMENT_DISPATCH → RECEIPT_VERIFY → XN_UPDATE → NEXT_Z。

只有以下情况升级 74：

1. 需要改变角色 Canon / 作者审美主权；
2. 两套 VERIFIED_XN 冲突且无法由实验判定；
3. 需要付费购买资料/不可逆外部操作；
4. 连续实验达到重试上限仍无法区分原因；
5. 高影响 candidate XN 升项目级永久规则但证据仍有歧义。

## DONE

* 形成 Prompt/Input/Param/Motion/Camera/Continuity/Failure 7 类 XN 表；
* 每条 XN 都有 source_class + evidence + applicability + confidence；
* 至少 1 个 <issue id="b8dd5507-cddf-4fd8-999d-43bf91bf03e5" href="https://linear.app/674/issue/674-282/worker角色-xnz-实验对象系统落地纵向主链横向分流base闭环">674-282</issue> READY_FOR_H3 角色跑通“输入→双seed→抽帧审核→反馈→第二版”闭环；
* FP-13 的稳定边界由真实统计而非单次观感回答；
* 后续社会经验自动进入同一吸收管道，不再靠74手工搬运。

---

## 2026-10-07｜B端 Human Snapshot 输出契约

B端继续按既有 H3 文字→A执行→抽帧→C审核→反馈闭环运行；新增一条用户层输出规则：

* 内部可以保留完整 prompt_version / seed / SHA / failure_family / asset_record。
* 对 674 默认只汇报：本轮做成了什么、是否卡住、下一步、是否需要用户。
* 只有需要审美/Canon/主参考判断时才升级 674。
* Human Snapshot 回写 `黎黎隆项目/00_总览/674总览.canvas`。

---

## 2026-10-07｜三层架构实施回执：DONE

本次 Human View / AI Execution / AI Database 拆分已真实落到 GitHub/Obsidian 正本；`674总览.canvas` 为用户默认入口，现有问题 Canvas 保留为 AI 后台，AI数据库只承担索引与 schema。**本次架构改造子任务 DONE，不依赖新增定时任务。**

---

# 2026-10-08｜第一批 Step 1：DIRECT_APPLY 镜头编译结构

以下只定义工程结构，不宣称任何自动选图算法已经有效。

## SHOT_NEED

```yaml
shot_id:
sequence_id:
story_beat:
characters:
scene_id:
required_action:
start_state:
end_state:
camera:
duration_target:
required_ref_roles:
```

286 先生成 SHOT_NEED，再向 293 请求真实资产。

## REF_SELECTION

```yaml
shot_id:
selected_refs:
  - asset_id:
    path:
    sha256:
    version:
    roles:
selection_reason:
status: SELECTED | PARTIAL | WAIT_ASSET
```

selection_reason 必须保留，但具体自动评分权重属于 <issue id="adad9533-ee17-4d68-858b-a5b8306d9bbb" href="https://linear.app/674/issue/674-272/chatgptsocialus-知识吸收与验证总控">674-272</issue> CANDIDATE，不在此锁定。

## SHOT_PACKAGE

```yaml
shot_id:
sequence_id:
package_version:
story_beat:
start_state:
end_state:
entities:
refs:
action:
  ordered_beats:
  must_happen:
  forbidden_events:
camera:
generation:
  model:
  workflow_profile:
  prompt_version:
  duration:
  seed:
prompt:
  positive:
  negative:
review_contract:
provenance:
status: READY_TO_RENDER
```

正式执行必须绑定 refs 的 asset_id / path / SHA / version；A端不得只消费一段无法追溯的裸 prompt。

## 连续性与返工字段

前镜 USER 通过后的 end_state 可显式进入下一镜 start_state。

所有修订保留：

```text
failure_family
kept_fields
changed_fields
source_version
next_version
```

“局部 segment retake 是否真的可稳定执行”仍是 <issue id="adad9533-ee17-4d68-858b-a5b8306d9bbb" href="https://linear.app/674/issue/674-272/chatgptsocialus-知识吸收与验证总控">674-272</issue> 待验证能力；当前只保留数据结构，不把它当成已验证能力。

---

# 2026-10-08｜Step 1 · R2｜DA_INTERFACE_V1：SHOT_PACKAGE + FEEDBACK_PACKET

本节只统一跨工单数据结构，不声明自动选图、自动连续性、局部返工等能力已经验证。

## 输入 A｜ASSET_PACKET

286 只消费 293 输出的 `DA_INTERFACE_V1 / ASSET_PACKET`。
正式镜头引用必须记录：

```yaml
asset_id:
path:
sha256:
version:
normalized_review_state:
reference_roles:
```

## 输入 B｜SHOT_NEED

```yaml
schema: DA_INTERFACE_V1
packet_type: SHOT_NEED

shot_id:
sequence_id:
story_beat:
characters: []
scene_id:
props: []

start_state:
end_state_target:

required_action:
camera:
duration_target:
required_ref_roles: []

provenance:
  world_source:
  rule_sources: []
```

## 中间结果｜REF_SELECTION

```yaml
schema: DA_INTERFACE_V1
packet_type: REF_SELECTION

shot_id:
selected_refs:
  - asset_id:
    sha256:
    version:
    roles: []

selection_reason:
selection_mode: MANUAL | RULE_BASED | EXPERIMENTAL
status: SELECTED | PARTIAL | WAIT_ASSET
```

说明：

* 允许机械记录“为什么选它”；
* 不锁定任何自动评分权重；
* `EXPERIMENTAL` 选择策略必须回 272。

## 输出｜SHOT_PACKAGE

```yaml
schema: DA_INTERFACE_V1
packet_type: SHOT_PACKAGE

shot_id:
sequence_id:
package_version:

story_beat:
start_state:
end_state_target:

entities:
  characters: []
  scene_id:
  props: []

refs:
  - asset_id:
    path:
    sha256:
    version:
    roles: []

action:
  ordered_beats: []
  must_happen: []
  forbidden_events: []

camera:
generation:
  model:
  workflow_profile:
  prompt_version:
  duration:
  seed:

prompt:
  positive:
  negative:

review_contract:
  required_events: []
  expected_end_state:

provenance:
  asset_packet_versions: []
  world_source:
  compiler_source: 674-286

status: READY_TO_RENDER
```

## 连续镜字段

仅允许做数据传递：

```text
173 USER_PASS
→ 289 对应 video_version
→ 286 读取 approved_end_state
→ next SHOT_NEED.start_state
```

这不等于“模型会自动保持连续性”。

## 输入 C｜FEEDBACK_PACKET

```yaml
schema: DA_INTERFACE_V1
packet_type: FEEDBACK_PACKET

source_type: VIDEO | STATIC
source_id:
source_version:
decision_source: USER | MACHINE | EXECUTION
decision:

user_nx:
failure_family:
failure_time_range:

kept_fields: []
changed_fields: []

route_target: 282 | 286 | 293 | 289
provenance:
```

`failure_family / kept_fields / changed_fields` 只是记录接口；“哪种改法最好”仍属于 272 CANDIDATE。

---

# 2026-10-08｜Step 1 · R3｜LEGACY_COMPAT_OVERRIDE（AUTHORITATIVE）

本节只解决旧规则与 DA_INTERFACE_V1 的语义冲突，不删除历史记录。

## 1. 旧 C端 PASS 语义降级

历史字段：
`C-H3-REVIEW.review_status=PASS|PARTIAL|FAIL|BLOCKED`

从本节起只解释为：

```text
C PASS      → MACHINE/TECHNICAL_REVIEW_CANDIDATE
C PARTIAL   → MACHINE_PARTIAL
C FAIL      → MACHINE_FAIL
C BLOCKED   → EXECUTION_BLOCKED
```

它们均不是 USER_REVIEW_PACKET 的 PASS。

历史规则：
`C端 review_status=PASS + STORED → VIDEO_VERSION_LOCKED=TRUE`

现在改解释为：
`TECHNICALLY_STORED=TRUE`

只有 173 的 USER_REVIEW_PACKET.decision=PASS 才允许生成跨工单正式状态：
`normalized_review_state=PASS`

## 2. A端 PASS 语义降级

历史 A-END receipt：
`status=PASS/PARTIAL/FAIL/BLOCKED`

统一解释为：
`execution_status`

只表示任务是否成功执行/是否得到可检查输出，不表示审美 PASS。

## 3. Picture1 / Picture2 固定职责降级

历史：
`Picture1 锁角色；Picture2 锁场景/画风`

从本节起仅作为：
`LEGACY_HEURISTIC`

可以继续用于历史 H3 任务复现，但不能当成项目级 VERIFIED_XN。

正式新任务使用：
`REF_SELECTION.roles[]`

Picture 槽最佳职责组合仍归 <issue id="adad9533-ee17-4d68-858b-a5b8306d9bbb" href="https://linear.app/674/issue/674-272/chatgptsocialus-知识吸收与验证总控">674-272</issue> / C-09，完成 E0→E5 前不得升级。

## 4. 优先级

发生语义冲突时：
`DA_INTERFACE_V1 > 本节兼容映射 > 旧 286 文本`

旧文本保留用于历史复现与 provenance，不作为最新跨工单协议。