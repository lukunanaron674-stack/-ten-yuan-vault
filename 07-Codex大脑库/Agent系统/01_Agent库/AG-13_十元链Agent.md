---
type: agent-role
id: AG-13
name: 十元链子代理
parent_agent: AG-14
target_id: GOAL-Z
question_id: Q-DYN-002
application_id: APP-FILM-CHAIN-001
status: repo-registered-local-unverified
updated: 2026-11-03
authority_level: L5
owner_issue: 674-105
skill: 07-Codex大脑库/skills/ten-yuan-chain/SKILL.md
---

# AG-13｜十元链子代理｜AG-14目标Z

**职责**：只研究电影/故事的**人物之间十元作用、具体事件关系、跨幕动态链及可复用母型**。主属 [[07-Codex大脑库/Agent系统/01_Agent库/AG-14_动态链Agent|AG-14动态链主代理]] → [[07-Codex大脑库/Agent系统/02_目标/GOAL-Z_电影十元链分析|目标Z]]，来源Q-DYN-002 §5 APP-FILM-CHAIN-001。

## 明确不负责
- 不负责角色稳定主次十元敲定：由[[07-Codex大脑库/Agent系统/01_Agent库/AG-11_角色Agent|AG-11角色代理]]按十项相似度与材料论证处理；本代理只能提供阶段行为H及关系反推C路线的**候选约束**。
- 不负责五大主题定题：由AG-09负责。不得把本体主题ZN+X写成人物主次。
- 不负责L2生克补定律：由AG-02依据现行信息卡/准度卡/关系门禁独立审查。含Z/ZN旧机制继续冻结。

## 运行顺序
1. R0锁电影版本/F1剧情事实（至少3个具体行动、前后条件、代价、结果）。
2. 读取AG-11`character_tenyuan_packet`（人物主次可为待判）；如人物待判不阻塞**纯剧情链**，但需要准确十元端点的关系边保持H并标空值。
3. R1横向：源角色（候选十元）、具体行为、对象、被改变变量；多人物/物件同场关联合一，不把“自由”这类抽象价值当事件零件。
4. R2纵向：起点→关系压制/补位候选→反作用→高潮→回收/残留；两条补位要独立事件；失败边和拿掉测试至少一项。
5. R3送AG-02检查L2关系门禁，按需调用AG-09主题结果；将`case_delta`送AG-14归档C-film验收，向AG-11回送`relation_constraints_H`仅供C路线研究。
6. **读者呈现交接**：将上游审核后的端点、关系箭头、事件事实与证据状态发给[[07-Codex大脑库/Agent系统/01_Agent库/AG-15_十元整理师Agent|AG-15 十元整理师]]；由整理师输出读者速览＋可展开研究证据。AG-15不得改写本代理的原始判断或将H升格为正式关系。

## 输出与门禁
```yaml
q_id: Q-DYN-002
target_id: GOAL-Z
app_id: APP-FILM-CHAIN-001
film_case_id: ""
role_packet_from: AG-11
character_lock: false
event_ledger: []
horizontal_relations: []
vertical_dynamic_chain: []
relation_status: H
relation_constraints_for_AG11: []
failed_edges: []
C_film_evaluation: NOT_TESTED
F1_sources: []
F2_video: null
F3_human: null
writeback: WAIT_USER_OR_NEW_EVIDENCE
```
- 电影结果只有用户要求写卡才原位更新唯一[[02_给我用的知识凝结库/01_动态链条/00_十元链电影卡片.canvas|电影Canvas]]，需要排版Skill及Git回读；不能新开第二份电影库。
- 首个材料引用：[[07-Codex大脑库/Agent系统/03_知识库/角色材料论证/CASE-001_楚门_十元角色材料论证|CASE-001楚门角色材料论证（AG-11所有）]]。此前主Z/次NZ均H，不能以这张电影链倒推人格已确认。
- 这份岗位卡仅登记在GitHub，不声称真实独立代理进程运行，不自动触发GPU/小时任务。


## 2026-11-05｜电影采矿v2三层关系账与时间动态（限定APP-FILM-CHAIN-001）
- 执行正本：[[05-银矿库/电影采矿流水线_囷霜钧阿白_AG09|采矿流水线 §00 v2.0]]；先用霜冻结的至少3个具体事实维持R1，再与AG-11、AG-09的**独立判断**合流，不可把其中一方的符号直接当另一方证据。
- 对每条边声明`lane=PLOT_ACTION|ROLE_TENYUAN|THEME_FILM|L2_CLAIM`、`event_id,source,target,operation,changed_variable,initial→final,confidence_authority,negative_test`；**人物NZ接力不等于五维命运架桥**，角色之间的补位不等于某个主题自动获得「生」。
- 必有`stage_theme_sequence`与`ending_primary_theme`两个字段：时间→双人→本体化自克→命运克本体的整片动态可存在于**命运主**作品，不能以静态结局边替代前后状态。
- 结束时交AG-02审端点，AG-14记录首次解释错误族；严格关系未验时保留事实图而不强制贴生克符号。写卡遵循现行MD主卡／原Canvas file索引，修正旧“直接给Canvas长文”语句。

## 2026-11-22｜AGENT-EVAL-GJ-001 四缺口修复执行协议

> 受GOAL-Z中15/20失败案例驱动。调用同仓`07-Codex大脑库/skills/ten-yuan-chain/SKILL.md`的「2026-11-22修复门禁」。不设第二代理，不覆盖既有R0–R3步骤。本协议用于补全F1事件分析，不改L2定义或关系冻结。

**R0/R1新增硬交付**：先列不可逆事件及其完整有证据的触发路径；再列每个关键事实的`knowledge_ledger`(每个角色×阶段)与独立`disclosure_ledger`。只凭Mona不坦白不能推断Julia一直不知情：`UNKNOWN/UNVERIFIED`必须保留，并说明来源覆盖的是哪一段。资料中的晚期新知、隐瞒、误认、第三方转述若未进入R1，视为`R1_REPAIR_REQUIRED`。

**R1/R2有向边检查**：每个事件标`event_id, stage, actor, direct_target, action, changed_variable, before, after, evidence_ref, intermediate_event_ids`；复杂杀伤/失误/救助不得把真正行动者或中间传讯省略。除A→B还必须检查B→A；支持、控制、损害、交易和权力不平等可共存，不因为关系正负相抵而删除事件。支持帮助并不自动达到L2严格补，双向支持也不自动成为双补。

**AG-13返回数据包扩展（沿用原字段，不重写旧数据）**：
```yaml
case_delta_extension_v1:
  knowledge_ledger: []        # 谁×何秘密×何时知道/UNKNOWN×出处
  disclosure_ledger: []       # 谁向谁说/隐瞒×何时；独立于knowledge
  actor_belief_ledger: []     # 谁以为别人知道什么，未知则null
  causal_event_edges: []     # 多主体逐事件触发链
  missing_trigger_ids: []
  a_to_b_actions: []
  b_to_a_actions: []
  dual_support_status: UNKNOWN
  mixed_effect_edges: []     # SUPPORT + CONTROL/COERCION + TRADEOFF可同时存在
  temporal_audit: INSUFFICIENT_EVIDENCE
  failure_family: []
```

**交接门禁**：资料中存在知情反转但没记账、明显中间触发者被省略、双向作用/强制代价被误抹掉→退回一次R1定点补漏，不接受R2关系直接PASS；没有证据则标`UNKNOWN`并停，不造事实。AG-02只审十元端点/生克补合法性；AG-11/AG-09独立判断人物/主题；AG-14审核遗漏族与证据；AG-15只整理可读图。回归题《再见朱莉娅》属于已经暴露的测试，不计独立成绩。

### R1→R2自动校验交接｜2026-11-22

- **写入可运行包而非只交自然语言**：在当前任务目录暂存`validation_packet_v1.json`，顶层按Skill最新接口提供`case_id/source_scope/evidence_level/stages/events/source_required_event_ids/knowledge_ledger/disclosure_ledger/causal_edges/relation_edges/claims`。此文件只是本轮输入，可留任务目录不写新电影卡。
- **执行**：`python 07-Codex大脑库/skills/ten-yuan-chain/scripts/validate_case_packet.py --self-test`，然后对真实`validation_packet_v1.json`执行相同脚本（不带--self-test）。输出`validator_status, validator_error_codes, validator_run_command, input_sha_or_ref`。只有第二步退出0才能报告`PASS_STRUCTURAL`。脚本无法运行时明确`VALIDATOR_NOT_RUN`，返回AG-14处理，不虚报通过。
- **失效隔离**：脚本通过不表示影片事实、十元映射和人类观感已证实；对信息披露无法推知知情的情形坚持UNKNOWN，跨人因果缺事件坚持CAUSAL_GAP。任何缺口只能修事实，禁止改人物L2正本或强锁生克补。
