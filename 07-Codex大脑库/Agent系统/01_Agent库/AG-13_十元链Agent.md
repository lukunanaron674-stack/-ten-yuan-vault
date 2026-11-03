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
