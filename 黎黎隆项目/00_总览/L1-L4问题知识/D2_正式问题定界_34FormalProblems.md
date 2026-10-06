---
title: D2｜正式问题定界：92 Candidate → 34 Formal Problems
tags: [lililong, problem-dispatch, d2, formal-problem]
status: done
source_issue: 674-177
---

# D2｜正式问题定界

## 结论

- 输入：92 个 Problem Candidate
- 输出：34 个 Formal Problem
- Candidate 覆盖：92/92
- 重复归属：0
- orphan：0
- 另有历史 SUPERSEDED：SUB-15-11，不进入正式问题
- 本轮只冻结问题边界与专员类型，不创建 Linear 问题工单；D3 才执行“一问题一工单一专员”。

## 状态分布

- CORE：20
- CORE_FAST：1
- SECONDARY：8
- SECONDARY_FAST：1
- DEFERRED_RESEARCH：1
- DEFER_TRIGGER：1
- TRIGGER_ONLY：1
- SUPPORT：1

也就是：**21 个核心优先、9 个第二阶段、4 个暂不作为当前主问题推进。**

## 正式问题总表

| ID | 正式问题 | 来源 Candidate | 价值 | 体量 | 状态 | 问题专员 |
|---|---|---|---:|---:|---|---|
| FP-01 | 头像画风稳定复现 | PC-001..004 | 9 | 6 | CORE | 头像风格专员 |
| FP-02 | 世界观到头像的可画视觉语言 | PC-005..007 | 7 | 5 | SECONDARY | 角色世界观接口专员 |
| FP-03 | 头像到中景/全身的身份与比例延展 | PC-008..010 | 9 | 6 | CORE | 角色一致性专员 |
| FP-04 | 服装生成系统 | PC-011..013 | 7 | 5 | SECONDARY | 服装系统专员 |
| FP-05 | 角色世界职责、个人目标与事件能力 | PC-014..016 | 9 | 5 | CORE | 角色剧情职责专员 |
| FP-06 | 93角色去重与等级系统 | PC-017..018 | 7 | 6 | SECONDARY | 角色库治理专员 |
| FP-07 | canonical 与冲突裁决权 | PC-019 | 10 | 5 | CORE | 正本治理专员 |
| FP-08 | 世界设定生命周期与发散STOP | PC-020,023 | 8 | 5 | SECONDARY | 世界观治理专员 |
| FP-09 | 世界底层机制、资源与可调用接口 | PC-021,022,024 | 9 | 7 | CORE | 世界结构专员 |
| FP-10 | 场景画风稳定复现 | PC-025..028 | 9 | 6 | CORE | 场景风格专员 |
| FP-11 | 角色×场景×世界规则的同镜头融合 | PC-029,030 | 9 | 7 | CORE | 综合镜头视觉专员 |
| FP-12 | 跨镜头连续性系统 | PC-032..037 | 10 | 8 | CORE | 连续性专员 |
| FP-13 | H3 10–11秒稳定短块 | PC-038,041 | 10 | 7 | CORE | H3稳定性专员 |
| FP-14 | LongTake拼接与Director→worker执行链 | PC-039,040,042 | 10 | 9 | CORE | LongTake生产专员 |
| FP-15 | 故事事件发动机 | PC-044..046 | 10 | 7 | CORE | 故事事件专员 |
| FP-16 | 故事颗粒度与自动评价 | PC-048,049 | 8 | 5 | SECONDARY | 故事结构评估专员 |
| FP-17 | 十元进入项目生产的最小接口 | PC-031,047,050..053,058 | 8 | 7 | CORE | 十元转译专员 |
| FP-18 | 十元外部验证与旧语法迁移 | PC-056,057 | 6 | 7 | SECONDARY | 十元验证专员 |
| FP-19 | 游戏/音乐动态链专项研究 | PC-054,055 | 4 | 7 | DEFERRED_RESEARCH | 跨媒介动态链专员 |
| FP-20 | 资产版本身份与下游锁定 | PC-059,060 | 10 | 6 | CORE | 资产治理专员 |
| FP-21 | 图片/附件素材传递证据链 | PC-061..066 | 10 | 7 | CORE | 素材传递专员 |
| FP-22 | 生产状态机与质量门 | PC-067..069 | 10 | 7 | CORE | 生产流程专员 |
| FP-23 | 生产修正轮数与吞吐效率 | PC-070,071 | 8 | 6 | SECONDARY | 生产效率专员 |
| FP-24 | 统一问题模型 | PC-076 | 10 | 6 | CORE | 问题模型专员 |
| FP-25 | Agent职责与Codex施工边界 | PC-072,075 | 10 | 6 | CORE | Agent架构专员 |
| FP-26 | Agent增量运行、幂等、STOP与scheduler | PC-073,074 | 10 | 7 | CORE | Agent运行时专员 |
| FP-27 | 作品集核心定位、时长决策与版式 | PC-077,080,081 | 9 | 4 | CORE_FAST | 作品集定位专员 |
| FP-28 | 作品集如何证明稳定生产而非AI抽卡 | PC-078,079 | 9 | 5 | CORE | 作品集证明链专员 |
| FP-29 | 项目优先级与质量护栏 | PC-082 | 8 | 3 | SECONDARY_FAST | 项目决策专员 |
| FP-30 | 生产成本与8分钟预算模型 | PC-043,083 | 7 | 5 | SECONDARY | 成本模型专员 |
| FP-31 | 商业载体与最小市场验证 | PC-084,085 | 5 | 6 | DEFER_TRIGGER | 商业验证专员 |
| FP-32 | 投资合作权责模板 | PC-086 | 3 | 4 | TRIGGER_ONLY | 合作条款专员 |
| FP-33 | 当前本地4080生产基础设施基线 | PC-087,088,091 | 9 | 5 | CORE | 生产基础设施专员 |
| FP-34 | 存储/外接系统/硬件安全与SUPPORT边界 | PC-089,090,092 | 5 | 4 | SUPPORT | 基础设施支持专员 |

## 正式问题卡

### FP-01｜头像画风稳定复现

- **来源 Candidate**：PC-001..004
- **价值/体量**：9/10 · 6/10
- **状态**：CORE
- **问题专员**：头像风格专员
- **Problem Statement**：成功头像的视觉语法、输入模板和审核标准未冻结，跨聊天/轮次/角色会漂移。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结最小视觉语法、固定输入模板、基准集、漂移检测与同画风审核；跨聊天/轮次/角色均有证据。
- **STOP / WAIT**：缺真实成功样本或需新图验证→WAIT_IMAGE_PRODUCTION

### FP-02｜世界观到头像的可画视觉语言

- **来源 Candidate**：PC-005..007
- **价值/体量**：7/10 · 5/10
- **状态**：SECONDARY
- **问题专员**：角色世界观接口专员
- **Problem Statement**：色卡、世界机制、组织和身份进入头像缺统一接口，容易变设定贴纸或反推假正本。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结世界→组织→身份→可画载体字段，以及共享语言/个体差异/禁止反推规则。
- **STOP / WAIT**：只剩审美选择→USER_REVIEW；需新图→WAIT_IMAGE_PRODUCTION

### FP-03｜头像到中景/全身的身份与比例延展

- **来源 Candidate**：PC-008..010
- **价值/体量**：9/10 · 6/10
- **状态**：CORE
- **问题专员**：角色一致性专员
- **Problem Statement**：头像扩到中景/全身时比例、服装、年龄和身份会漂移。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结最小身份/比例锚包、多视图职责、比例传播与漂移诊断；至少两角色跨景别验证。
- **STOP / WAIT**：缺源图或需新生成→WAIT_IMAGE_PRODUCTION

### FP-04｜服装生成系统

- **来源 Candidate**：PC-011..013
- **价值/体量**：7/10 · 5/10
- **状态**：SECONDARY
- **问题专员**：服装系统专员
- **Problem Statement**：服装尚未由身份、组织、世界资源、社会位置和职业工具共同生成。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：形成身份/组织/世界/职业→功能→材料结构→装备接口规则，并解释同组织统一但不复制。
- **STOP / WAIT**：最终审美判断→USER_REVIEW

### FP-05｜角色世界职责、个人目标与事件能力

- **来源 Candidate**：PC-014..016
- **价值/体量**：9/10 · 5/10
- **状态**：CORE
- **问题专员**：角色剧情职责专员
- **Problem Statement**：角色可能只承担设定说明，没有个人目标、世界阻力和制造事件能力。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结机制/生活/问题承担者分类；关键角色具备个人目标、世界阻碍、职业/能力/工具来源和事件能力。
- **STOP / WAIT**：角色身份未定→USER_REVIEW

### FP-06｜93角色去重与等级系统

- **来源 Candidate**：PC-017..018
- **价值/体量**：7/10 · 6/10
- **状态**：SECONDARY
- **问题专员**：角色库治理专员
- **Problem Statement**：93角色存在功能/视觉重复风险，SSR/SR/N判据未统一。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：完成角色功能/视觉去重矩阵并冻结等级判据；重复项均有MERGE/保留理由。
- **STOP / WAIT**：缺完整角色清单→BLOCKED

### FP-07｜canonical 与冲突裁决权

- **来源 Candidate**：PC-019
- **价值/体量**：10/10 · 5/10
- **状态**：CORE
- **问题专员**：正本治理专员
- **Problem Statement**：世界、资产、问题系统在GitHub/Markdown/Canvas/Linear/Chat之间存在source-of-truth冲突。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结每类对象唯一canonical、镜像职责、冲突优先级和回写路径。
- **STOP / WAIT**：无写权限→WAIT_RUNTIME_TEST

### FP-08｜世界设定生命周期与发散STOP

- **来源 Candidate**：PC-020,023
- **价值/体量**：8/10 · 5/10
- **状态**：SECONDARY
- **问题专员**：世界观治理专员
- **Problem Statement**：设定从candidate到accepted/superseded的生命周期和停止发散条件未统一。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结candidate→review→accepted→canonical→superseded状态机及STOP；扩展与治理职责分离。
- **STOP / WAIT**：只剩价值判断→USER_REVIEW

### FP-09｜世界底层机制、资源与可调用接口

- **来源 Candidate**：PC-021,022,024
- **价值/体量**：9/10 · 7/10
- **状态**：CORE
- **问题专员**：世界结构专员
- **Problem Statement**：三色世界、底层异常机制、资源层级、组织/生活和角色/场景/剧情接口尚未收束。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结全局底层机制与三色关系、资源层级、资源→组织/职业/生活链及下游调用字段。
- **STOP / WAIT**：世界价值取向冲突→USER_REVIEW

### FP-10｜场景画风稳定复现

- **来源 Candidate**：PC-025..028
- **价值/体量**：9/10 · 6/10
- **状态**：CORE
- **问题专员**：场景风格专员
- **Problem Statement**：成功背景的最小视觉语法、跨地点/天气/轮次复现和审核标准未冻结。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结背景风格语法、参考消化、跨地点/天气复现和同画风审核器。
- **STOP / WAIT**：需新场景图验证→WAIT_IMAGE_PRODUCTION

### FP-11｜角色×场景×世界规则的同镜头融合

- **来源 Candidate**：PC-029,030
- **价值/体量**：9/10 · 7/10
- **状态**：CORE
- **问题专员**：综合镜头视觉专员
- **Problem Statement**：角色可能只是贴在背景上，线面/尺度/色彩/光照/接触与世界规则互动未形成同一空间。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结同镜头融合检查表，并让世界规则与角色能力对场景产生可观察双向作用。
- **STOP / WAIT**：需新镜头视觉验证→WAIT_IMAGE_PRODUCTION

### FP-12｜跨镜头连续性系统

- **来源 Candidate**：PC-032..037
- **价值/体量**：10/10 · 8/10
- **状态**：CORE
- **问题专员**：连续性专员
- **Problem Statement**：身份、动作、朝向、空间、道具、时间、情绪和叙事信息跨镜头容易断裂。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结State Packet/Shot Packet和连续性审核；把30秒案例沉淀为正反例。
- **STOP / WAIT**：规则完成但缺视觉验证→MIXED_TEXT_DONE/WAIT_IMAGE_PRODUCTION

### FP-13｜H3 10–11秒稳定短块

- **来源 Candidate**：PC-038,041
- **价值/体量**：10/10 · 7/10
- **状态**：CORE
- **问题专员**：H3稳定性专员
- **Problem Statement**：H3稳定边界、最小输入、关键帧、多seed判据与失败分类未冻结。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：形成可复跑10–11s block协议、独立审核与失败分类，并有真实运行证据。
- **STOP / WAIT**：需实际运行→WAIT_RUNTIME_TEST

### FP-14｜LongTake拼接与Director→worker执行链

- **来源 Candidate**：PC-039,040,042
- **价值/体量**：10/10 · 9/10
- **状态**：CORE
- **问题专员**：LongTake生产专员
- **Problem Statement**：多个短block、镜头包、worker领取/回传和音频字段尚未形成稳定长连续执行链。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结block衔接、Director执行包、worker回传/重试和三类音频接入，可扩30s/60s。
- **STOP / WAIT**：真实视频验证缺失→WAIT_RUNTIME_TEST/WAIT_IMAGE_PRODUCTION

### FP-15｜故事事件发动机

- **来源 Candidate**：PC-044..046
- **价值/体量**：10/10 · 7/10
- **状态**：CORE
- **问题专员**：故事事件专员
- **Problem Statement**：故事容易只有设定，没有目标→行动→世界阻力→升级事件，也缺钩子与情绪变化。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结事件发动机、因果钩子/反转和情绪节拍，可稳定产出可拍短故事。
- **STOP / WAIT**：连续3轮无增量→STOP

### FP-16｜故事颗粒度与自动评价

- **来源 Candidate**：PC-048,049
- **价值/体量**：8/10 · 5/10
- **状态**：SECONDARY
- **问题专员**：故事结构评估专员
- **Problem Statement**：10s/30s/60s/8min结构颗粒度和自动评价/停止标准未统一。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结不同时长结构粒度和有趣/清楚/角色/世界/可拍评价门与STOP。
- **STOP / WAIT**：退化为纯审美偏好→USER_REVIEW

### FP-17｜十元进入项目生产的最小接口

- **来源 Candidate**：PC-031,047,050..053,058
- **价值/体量**：8/10 · 7/10
- **状态**：CORE
- **问题专员**：十元转译专员
- **Problem Statement**：十元/五轴/五维/动态链容易停留在标签，缺少真实changed_variable接口。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结职责边界、退出条件、DSL字段，并把生克补/动态链转成角色/场景/故事/镜头可观察变化。
- **STOP / WAIT**：不能解释外部对象→保留HYPOTHESIS

### FP-18｜十元外部验证与旧语法迁移

- **来源 Candidate**：PC-056,057
- **价值/体量**：6/10 · 7/10
- **状态**：SECONDARY
- **问题专员**：十元验证专员
- **Problem Statement**：十元视觉化可能走捷径，自产自测会制造虚假准确率，旧语法也会污染新正本。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：建立盲审/负例/删除/反事实/陌生样本验证与legacy→canonical迁移规则。
- **STOP / WAIT**：无外部样本→BLOCKED

### FP-19｜游戏/音乐动态链专项研究

- **来源 Candidate**：PC-054,055
- **价值/体量**：4/10 · 7/10
- **状态**：DEFERRED_RESEARCH
- **问题专员**：跨媒介动态链专员
- **Problem Statement**：有长期研究价值，但不影响当前《黎黎隆》动画生产主链。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：被项目明确触发时分别形成游戏事件提取法和音乐可验证映射法。
- **STOP / WAIT**：当前不启动

### FP-20｜资产版本身份与下游锁定

- **来源 Candidate**：PC-059,060
- **价值/体量**：10/10 · 6/10
- **状态**：CORE
- **问题专员**：资产治理专员
- **Problem Statement**：资产状态、版本身份、候选/锁定下游调用和动画化简化边界未统一。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结状态枚举、版本/SHA/路径/ID身份、LOCKED_ASSET门禁、冻结/发散/禁止项与动画化简化。
- **STOP / WAIT**：缺真实资产版本→BLOCKED

### FP-21｜图片/附件素材传递证据链

- **来源 Candidate**：PC-061..066
- **价值/体量**：10/10 · 7/10
- **状态**：CORE
- **问题专员**：素材传递专员
- **Problem Statement**：Chat/Canvas/Director/Codex/worker之间真实图片字节、顺序、路径、SHA、过期链接与审核证据无法稳定贯通。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：完成端到端真实图片传递协议和故障分类；审核回传图证据而非文字PASS。
- **STOP / WAIT**：需真实环境测试→WAIT_RUNTIME_TEST

### FP-22｜生产状态机与质量门

- **来源 Candidate**：PC-067..069
- **价值/体量**：10/10 · 7/10
- **状态**：CORE
- **问题专员**：生产流程专员
- **Problem Statement**：WORLD→CHAR/SCENE→SHOT→H3各阶段输入输出、发散/锁定、失败回流和质量维度未统一。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结正式状态机、每阶段输入/输出/验收/STOP、失败回流及质量门。
- **STOP / WAIT**：规则后需实跑→WAIT_RUNTIME_TEST

### FP-23｜生产修正轮数与吞吐效率

- **来源 Candidate**：PC-070,071
- **价值/体量**：8/10 · 6/10
- **状态**：SECONDARY
- **问题专员**：生产效率专员
- **Problem Statement**：一致性修正轮数、返工率与人工审核成本缺量化，吞吐不可管理。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：建立轮次压缩和吞吐/返工/人工审核指标，验证接近3轮且不降质量。
- **STOP / WAIT**：无真实批量样本→WAIT_RUNTIME_TEST

### FP-24｜统一问题模型

- **来源 Candidate**：PC-076
- **价值/体量**：10/10 · 6/10
- **状态**：CORE
- **问题专员**：问题模型专员
- **Problem Statement**：Goal/Problem/Main/Sub/症状/根因/PSEUDO/BLOCKER/关系/DONE/下钻停止缺单一语义模型。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结字段、关系、层级、DONE分层和停止下钻规则，可一致解释现有问题树。
- **STOP / WAIT**：与既有规则冲突→保留版本差异

### FP-25｜Agent职责与Codex施工边界

- **来源 Candidate**：PC-072,075
- **价值/体量**：10/10 · 6/10
- **状态**：CORE
- **问题专员**：Agent架构专员
- **Problem Statement**：发现/判断/解决问题的Agent与Codex施工器边界不清，会抢写、误判和无限新工单。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结L1–L10职责、专业/临时Agent生成条件和Problem Agent→Codex边界。
- **STOP / WAIT**：没有真实必要性的层级直接删除

### FP-26｜Agent增量运行、幂等、STOP与scheduler

- **来源 Candidate**：PC-073,074
- **价值/体量**：10/10 · 7/10
- **状态**：CORE
- **问题专员**：Agent运行时专员
- **Problem Statement**：Agent需要从canonical读delta、回写原Q、跳blocker、正确USER_REVIEW/STOP并由真实scheduler触发。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：形成one-shot幂等循环、delta读取/merge、状态回写、spawn上限和真实调度证据。
- **STOP / WAIT**：无真实scheduler/运行证据→WAIT_RUNTIME_TEST

### FP-27｜作品集核心定位、时长决策与版式

- **来源 Candidate**：PC-077,080,081
- **价值/体量**：9/10 · 4/10
- **状态**：CORE_FAST
- **问题专员**：作品集定位专员
- **Problem Statement**：主岗位定位、45–60秒与8分钟取舍、breakdown版式未冻结。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：明确主岗位、主样/辅样职责、时长决策和breakdown信息层级。
- **STOP / WAIT**：最终岗位偏好冲突→USER_REVIEW

### FP-28｜作品集如何证明稳定生产而非AI抽卡

- **来源 Candidate**：PC-078,079
- **价值/体量**：9/10 · 5/10
- **状态**：CORE
- **问题专员**：作品集证明链专员
- **Problem Statement**：AI参与、后台系统、失败修正和连续镜头如何转化为能力证明尚未形成证据链。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结展示边界，并用连续镜头+失败→修正→验证证明稳定生产与导演能力。
- **STOP / WAIT**：无可展示成片证据→PARTIAL

### FP-29｜项目优先级与质量护栏

- **来源 Candidate**：PC-082
- **价值/体量**：8/10 · 3/10
- **状态**：SECONDARY_FAST
- **问题专员**：项目决策专员
- **Problem Statement**：《黎黎隆》作品集/IP/商业三种目标的当前优先级不清。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：冻结当前阶段主目标与商业/时长/质量不可突破护栏。
- **STOP / WAIT**：价值取向→USER_REVIEW

### FP-30｜生产成本与8分钟预算模型

- **来源 Candidate**：PC-043,083
- **价值/体量**：7/10 · 5/10
- **状态**：SECONDARY
- **问题专员**：成本模型专员
- **Problem Statement**：H3重试、AI/本地GPU/音频/存储/人工审核单位成本和8分钟预算缺统一模型。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：建立单位成本、时间、失败重试和追加成本模型，并能反推质量门。
- **STOP / WAIT**：缺真实计时/失败率/费用→BLOCKED

### FP-31｜商业载体与最小市场验证

- **来源 Candidate**：PC-084,085
- **价值/体量**：5/10 · 6/10
- **状态**：DEFER_TRIGGER
- **问题专员**：商业验证专员
- **Problem Statement**：载体与市场验证尚未决策，但当前不是生产前置。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：核心样片稳定后比较载体，设计最小受众验证和继续投入阈值。
- **STOP / WAIT**：样片未稳定前不启动

### FP-32｜投资合作权责模板

- **来源 Candidate**：PC-086
- **价值/体量**：3/10 · 4/10
- **状态**：TRIGGER_ONLY
- **问题专员**：合作条款专员
- **Problem Statement**：未来真实投资/合作可能需要资产、收益、署名、决策权和亏损责任规则。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：真实合作触发时形成条款清单与谈判边界。
- **STOP / WAIT**：无真实合作对象不启动

### FP-33｜当前本地4080生产基础设施基线

- **来源 Candidate**：PC-087,088,091
- **价值/体量**：9/10 · 5/10
- **状态**：CORE
- **问题专员**：生产基础设施专员
- **Problem Statement**：旧3070/4090/5090云拓扑已过时，需要按本地4080 32GB重冻计算职责、ComfyUI/H3版本和恢复配置。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：形成当前硬件职责、工作流/模型/CUDA版本、调度和多端连接的最小可恢复基线。
- **STOP / WAIT**：性能/稳定性需实测→WAIT_RUNTIME_TEST

### FP-34｜存储/外接系统/硬件安全与SUPPORT边界

- **来源 Candidate**：PC-089,090,092
- **价值/体量**：5/10 · 4/10
- **状态**：SUPPORT
- **问题专员**：基础设施支持专员
- **Problem Statement**：存储、外接Windows、内存/供电安全和SUPPORT→BLOCKER边界需要一次性规则。
- **Evidence**：D1.2 中对应 Candidate 及其原始 SUB；正式施工前必须回读其 MAIN/SUB 最新 canonical，不得只凭本表。
- **DONE**：形成目录分层、恢复/安全检查和升级阈值。
- **STOP / WAIT**：完成一次基线后仅故障触发

## D2 硬规则

1. Formal Problem 才有资格在 D3 建正式问题工单。
2. 1 Formal Problem = 1 Linear 问题工单 = 1 问题专员代理。
3. 专员负责问题闭环，不等于亲自做所有施工；文件施工可调用 674-115，视觉生产另走视觉生产链。
4. 子步骤、症状、验证项不得再冒充新问题工单。
5. DEFERRED_RESEARCH / DEFER_TRIGGER / TRIGGER_ONLY / SUPPORT 默认不占当前核心解决队列。
6. 正式工单 DONE 必须满足该 Formal Problem 自己的 DONE，不以“写了一条评论”冒充解决。

## D2 STOP

本轮已经完成问题定界。下一步 D3 是实际分发：为应当启动的 Formal Problem 建独立 Linear 工单，并给每张工单绑定一个问题专员代理；不需要现在解决的四类问题只登记状态，不制造活跃工单。
