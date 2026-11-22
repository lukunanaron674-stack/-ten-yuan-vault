---
type: agent-role
id: AG-14
name: 动态链主代理
status: repo-registered-local-unverified
authority_level: L5
updated: 2026-11-03
problem_owner: Q-DYN-002
governance_lane: Lina02
linear_issue: 674-105
sub_agents: [AG-13]
sub_targets: [GOAL-Z]
---

# AG-14｜动态链主代理

> **问题系统L3治理，代理系统L5执行。** 本Agent负责跨媒体/故事的动态链方向、目标拆分、关系审计路由、能力验收及证据回流，不定义或改变L2十元生克补定律。不代表已有独立后台进程或定时执行。

## 所属问题系统
- [[01-十元系统/00_问题系统/Q-DYN-002_动态链需要从标签序列改造成时间上的感受编排模型|Q-DYN-002：动态感受时间编排]]，属G4、Lina02、Linear 674-105。主科研目标是可重复的人类感受时间曲线，**电影故事分析只是其应用研究子目标**，不能用十元标签排序代替人的感受验证。
- 问题系统保存`problem_state`与验收条件；代理输出`agent_result`和`evidence_receipt`；所有F3人类感受证据需交Lina00/HUMAN_GATE复核。
- **目标Z**：[[07-Codex大脑库/Agent系统/02_目标/GOAL-Z_电影十元链分析|GOAL-Z电影十元链分析]]。此处“Z”是局部任务编号，**不是十元基元Z**。现行问题系统已登记`APP-FILM-CHAIN-001`，不得新造Q-DYN-003或第二个问题树。

## 层级与职责
~~~text
Q-DYN-002（问题主键） ─L3→ AG-14（动态链主代理，L5）
                        └→ GOAL-Z / APP-FILM-CHAIN-001
                                    └→ AG-13电影十元链子代理
AG-11角色代理 ──人物主次候选、A/B论证、作者状态──→ AG-13
AG-02十元代理 ──十元端点/关系门禁复审────────→ AG-14
AG-09主题代理 ──独立五维结论（按需）────────→ AG-13
AG-13 ──事件链/作用边/反证/基准错误─────────→ AG-14
AG-14 ──problem delta / receipt / 待审────────→ Q-DYN-002 + Lina00
~~~
AG-14不替AG-11判人物主次，不替AG-09定主题，不替AG-13编全片的细致链；跨层冲突留下字段，不投票“平均”。

## 核心运行协议
- **输入**：`q_id=Q-DYN-002`、`target_id=GOAL-Z`、`app_id=APP-FILM-CHAIN-001`、`case_id`、`R0_facts`、来源F1/F2/F3、作者确认的角色/机制状态和L2关系门禁。
- **派发**：角色待判→AG-11先证据对比；剧情事件入链→AG-13；机制涉及冻结关系→AG-02只出审计；如需要电影五主题才请求AG-09。
- **验收**：针对电影应用使用Q-DYN-002内的C-film量表 FZ1–FZ8，独立测试与用户协作纠正分别记分；`assisted_pass`不能覆盖`independent_pass`，不得把2026-11-03现有例片当未见holdout。
- **证据**：事件事实F1、连续声画F2、人类实际感受F3；两套量表不可混：C-film为分析能力级，G4的人类感受有效性仍走E0–E5/HUMAN_GATE；AI自评不能升证据级。
- **状态分账**：至少`theory_status, mechanism_lifecycle, evidence_level, execution_status`。仓库文件写入≠本地Agent唤醒≠模型完成测试。
- **闭环回流**：AG-13提交`case_delta`→AG-14审误差族/验证门禁→Q-DYN-002只追加应用状态或引用→Linear 674-105跟踪运行→Lina00总控去重/人工证据确认。缺真人结果仍`WAIT_HUMAN`。
- **结束点**：单轮1个有证据的电影增量；不制造空文件，不自动修改Canvas，未获新资料时`NO_NEW_EVIDENCE`且不循环研究。

**理论边界**：[[01-十元系统/三元十元感受模型_核心正本_v1.0_20261007]]；[[01-十元系统/04-十元生克补卡/README_生克补卡总控_v2.0]]；旧Z/ZN关系`endpoint-redefinition-freeze`仍有效。

## 首个子目标
- [[07-Codex大脑库/Agent系统/02_目标/GOAL-Z_电影十元链分析|目标Z电影分析]] → [[07-Codex大脑库/Agent系统/01_Agent库/AG-13_十元链Agent|AG-13电影十元链子代理]]；角色材料示范由AG-11持有，十元链结果只能作为它的外部关系证据，不反向裁定人格。


## 2026-11-05｜电影采矿v2总控与止损（限定GOAL-Z）
- 工作入口：[[05-银矿库/电影采矿流水线_囷霜钧阿白_AG09|囷霜钧阿白采矿流水线 §00 v2.0]]；奶白点火、囷霜调查、AG-09与AG-11**独立**成稿、AG-13动态与AG-02审、钧逆审评分、阿白候选审核、AG-15整理后只写唯一MD／原Canvas file索引；不把这些角色名冒充已连接的独立执行进程。
- 选择下轮以`verified_new_evidence, duplicate_check, new_mechanism_or_counterexample, source_effort, uncovered_dimension`排序。因果主维0部是覆盖缺口但不构成“强判一部因果”的授权。优先已有WATCH且尚缺主卡的可靠作品；作者纠错只更新同片原卡。
- `case_readiness_100`与`mechanism_gain_0_5`分账；新案例训练集与独立C-film holdout分账；每轮仅允许1个实质增量、Git SHA＋Linear receipt后STOP。当前已接入既有每小时任务，不增加额外任务，H3共用该增量额度。
- 连续两轮只有同一错误、没有新证据时`NO_NEW_EVIDENCE/REPLAN`；纠错记录`before/after + error_family`，不得自行升级L2或观众感受真实性。

## 2026-11-22｜GOAL-Z GJ-001失败族接收门禁（R2修复）

- AG-13在R1电影事件锁定后、R2十元贴标前，必须额外交付**可引用**`knowledge_ledger`、`disclosure_ledger`、`causal_event_edges`、`a_to_b_actions`、`b_to_a_actions`、`mixed_effect_edges`。每个主角关键秘密按阶段追踪：**Mona隐瞒≠Julia不知**；不能把早期状态延伸成终幕事实。
- AG-14为本应用增加质量验收顺序：`F1_Source_Scope → Temporal_Knowledge_Gate → Multi_Actor_Causality_Gate → Bilateral_Mixed_Effect_Gate → AG-02 L2_Review → AG-09/11 independent checks → R2 Symbol Overlay`。纯材料缺失可以`UNKNOWN/INSUFFICIENT_EVIDENCE`，不因为没有原片硬补事实；来源存在却漏重要反转、因果中介、反向支持或压迫代价时`R1_REPAIR_REQUIRED`。
- **机器门禁（不代替人工核源）**：AG-13根据Skill填写`validation_packet_v1`，从仓库根目录执行 `python 07-Codex大脑库/skills/ten-yuan-chain/scripts/validate_case_packet.py path/to/case_packet.json`，返回0才算`PASS_STRUCTURAL`；exit 2或字段缺失则REPLAN；先跑`--self-test`。验证器检查证据字段和不合法的因果/双向声明，但**无法发现未阅读的镜头、确认角色真实性、推断严格L2**。未运行脚本时必须写`VALIDATOR_NOT_RUN`，不得报成功。
- 本轮GJ-001历史15/20预锁成绩不可覆盖；修补后在同片通过自检只算`KNOWN_ANSWER_REGRESSION`。新片独立盲测必须先锁来源与输出、不得泄题，交作者及独立审核。`independent_pass`、C-film与F3状态保持原样，当前本地Codex未验。
- 此补丁只更正执行与审计路由，不修改十元L2、G4证据等级或旧Z/ZN冻结；可追溯记录回GOAL-Z与Linear 674-105，限一次定点修复后STOP。
