---
type: agent-handoff-protocol
status: proposal-registered
authority_level: L5
updated: 2026-11-10
agents: [AG-16, AG-17]
scope: cross-domain-creative-research
canonical_theory: 01-十元系统/三元十元感受模型_核心正本_v1.0_20261007.md
related: [AG-02, AG-09, AG-11, AG-13, AG-14, AG-15]
local_execution: WAIT_EXECUTION
---

# 材料构成｜AG-16 采集 → AG-17 解构（共享交换协议）

> **十元是构成方法；材料是构成的原料。** 本协议仅规范证据采集、拆解、组合接口，不新增十元端点定义/生克补机制，不占用既有电影卡或角色卡唯一正本。AG-16/17 是岗位协议，**尚未部署成常驻进程或自动任务**。

## 0. 前置门禁
1. 遵守根 `AGENTS.md`、`00-中枢索引/AI文件权力与任务总览.md` 和 `总入口.md`；涉及十元判断读取当前 L2，涉及关系判断交 AG-02。
2. **先事实，后候选解释**：原始现象/作者原话/可核观察必须与推断、感受预测、创作发散分开。
3. 原始作品里的可见事件，不等于创作者意图；AI预测感受不等于真人反馈；电影F0-F3与普通材料证据层级不混用。
4. 去重先查来源定位、事件机制、原材料卡、现有角色/电影唯一卡；旧有材料优先链接和增补，不以更换编号制造增量。
5. 未有真实链接、书目页码/时间码或用户直接提供来源，只能标 `UNVERIFIED` 或 `CREATIVE_H`，不得称实证。

## 1. AG-16 输出：RAW_MATERIAL_PACKET_V1
```yaml
schema: RAW_MATERIAL_PACKET_V1
material_id: MAT-YYYYMMDD-001
topic: ""
domain: psychology|society|history|law|architecture|science|work|everyday|film|literature|music|game|other
medium: text|image|video|audio|firsthand|other
source_kind: primary|secondary|user_provided|creative_hypothesis
source_title: ""
creator_or_publisher: ""
source_url_or_locator: ""       # 真实URL / 书页 / 作品位置 / 用户供稿定位；无则null
retrieved_at: null
excerpt_or_observation: ""     # 原始可观察事实；短引文遵守引用限制
context: ""                    # 地点、时间、当事者、前提
phenomenon: ""                 # 不带十元标签的中性描述
observable_actions: []         # 看得见、可核对
known_consequences: []         # 有源证据；无则[]
uncertainties: []
evidence_state: SOURCE_FOUND|OBSERVED|PARTIAL|UNVERIFIED|CREATIVE_H
dedup_key: ""                  # 来源定位 + 核心机制，不含十元推断
duplicate_of: null
rights_notes: ""               # 仅保留摘要/书目/合法定位
candidate_use: [character,event,relationship,world,feeling,art]
agent16_verdict: ACCEPT|REVIEW|REJECT
```

## 2. AG-17 输出：DECOMPOSED_MATERIAL_PACKET_V1
```yaml
schema: DECOMPOSED_MATERIAL_PACKET_V1
decomp_id: DEC-MAT-YYYYMMDD-001
input_material_id: MAT-YYYYMMDD-001
source_ref: ""                # 一定能返回AG-16源，绝不能覆盖其原话
observable_vs_inference: {observable: [], inference: []}
actors_and_positions: []
conditions: []                # 环境/资源/身份/制度/时间条件
motives_or_needs: []          # 有来源的动机，未核则H
trigger: ""
action_sequence: []           # T0→T1→T2
constraints: []
changed_variable: ""          # 哪个可观察的变量真的改变
cost_and_consequence: []
felt_response: {reported_human: null, inferred_human: [], model_predicted: []}
tenyuan_hypotheses: []        # 各项 {yuan, object_layer, evidence, competitor, counterexample, confidence_note, status:H}
relations_hypotheses: []      # 只写普通作用或H，严格生/克/补交AG-02
five_theme_hypotheses: []     # 五维交AG-09，不等同五轴
transfers: []                 # {context_change, invariant_mechanism, changed_expression, target_project}
negative_case: ""
ablation_test: ""             # 删去关键条件，机制是否仍成立
evidence_gaps: []
handoff_to: [AG-11, AG-13]
verdict: READY_FOR_REVIEW|NEED_MORE_EVIDENCE|REJECT
```

## 3. 不可跨越的职责边界

| 岗位 | 唯一职责 | 明确不能做 |
|---|---|---|
| AG-16 材料采集 | 跨领域检索、证据核对、来源定位、反例发现、去重 | 不先定十元，不把剧情构想写成事实，不对理论正本写回 |
| AG-17 材料解构 | 拆出条件→行为→变量→结果；关系候选、感受候选、跨场景迁移 | 不伪造原始出处，不锁定人物十元或五维主题，不判已证实生克补 |
| AG-04 生产素材 | 定位实际图/音/视频及H3可用性、SHA、路径 | 不代替材料学采集 |
| AG-11 / AG-13 / AG-09 | 角色稳定主次 / 角色关系动态链 / 五维主题 | 不回写原始来源为新事实 |
| AG-02 / AG-15 | 理论机制审门 / 专家阅读编排 | 不代替采集或事实发现 |

## 4. 一轮执行（有限且有停止条件）
- 输入：`QUESTION`（如“XZ在非暴力竞争中有哪些可核现实机制？”）＋目标项目/材料缺口。
- **AG-16** 先检查现有卡，最多搜集5个候选，尽量跨3个不同机制或领域；仅有2个可靠来源时就输出2个，绝不填满额度造假。每条至少保留来源、事实、上下文、疑点、去重键，争议进入REVIEW。
- **AG-17** 仅处理已入AG-16包的最多3条，至少提出1个竞争解释或反例，且给1条可迁移的构成条件；证据不足就 `NEED_MORE_EVIDENCE`。
- 单轮结束点：`至少1条可核原始材料 + 1张回源可查的解构卡`，否则 `NO_VERIFIED_INCREMENT`。不得以“分析文字数量”统计成果；连续2轮无真实新增则 STOP/REPLAN。
- 默认不启动H3/GPU、不写项目生产正本、不创建Canvas、不改十元L2、不设定时任务。

## 5. 入库与验收
- 现有 `05-银矿库/十元血肉库/` 与 `05-银矿库/方法论与工作流/十元血肉采矿方法论.md` 为可复用材料体系；先查重、再按其现行审核路径写入，不以本协议取代旧正本。未过审候选可指向已有 `05-银矿库/00-待二审散点池/`，但**仅有授权和真实素材时才能写入**。
- 质检四项：`SOURCE_TRACEABLE`、`OBSERVATION_INFERENCE_SPLIT`、`ALTERNATIVE_TESTED`、`REUSABLE_CONDITION`。四项满足才是 `READY_FOR_REVIEW`，不是 `TENYUAN_CANON`。
- 通过后按需求交AG-11（角色）、AG-13（事件关系）、AG-09（五维）、AG-02（机制审定）、AG-15（阅读展示）；所有下游需保留 material_id / decomp_id / source_ref。
- 验收指标：**新增独特机制数**、源证据可回查率、反例覆盖、跨题材改写成功率、被实际角色/故事调用的比率；不是材料总字数。

## 6. 演示包（仅创作假设，非真实巴黎案例）
`AG-16: MAT-EXAMPLE-001 | source_kind: creative_hypothesis | evidence_state: CREATIVE_H | phenomenon: 一位交换生为争取获奖名额，需要在合作与个人署名之间作出选择。`
`AG-17: DEC-MAT-EXAMPLE-001 | conditions: 名额稀缺/提交截止 | changed_variable: 合作关系与署名权 | counterexample: 两人协商共享署名则冲突消失 | tenyuan_hypotheses: XZ? XN? ZX? 待证 | transfers: 设计比赛→音乐竞演（机制保留，表达改变）`
**示例不能作为真实比赛制度、巴黎生活事实，也不代表 Claire 现行剧本已经采用。**
