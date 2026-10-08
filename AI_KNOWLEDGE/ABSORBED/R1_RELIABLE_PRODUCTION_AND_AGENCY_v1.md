---
type: absorbed-knowledge-pack
pack_id: ABS-R1
status: ROUTED
version: v1.0
updated: 2026-10-08
source_master: AI_KNOWLEDGE/EXTERNAL_KNOWLEDGE_MASTER_v2_20261008.md
scope: [reliable-production, multi-agent, human-gate]
primary_linear: 674-77
secondary_linear: [674-116, 674-276, 674-294]
---

# ABS-R1｜可靠生产 + 多Agent / 人在环外

## 吸收边界

本包只把成熟结构变成内部规则。
不宣称“用了就更快/更准/更省”，没有运行证据不得标 VERIFIED / AI_LEARNED。

## DIRECT｜正式吸收

### M01 OBJECT MODEL
Project / Shot / Asset / Task / Version / File 是不同对象，不允许用文件名代替任务或版本身份。

### M02 EXPLICIT STATE
正式流程必须有显式状态与Gate；不得仅靠聊天上下文判断“做到哪了”。

### M03 NON-DESTRUCTIVE VERSIONING
正式输出不覆盖历史；版本保留 predecessor / provenance / rollback 关系。

### M06 STRUCTURED / COMPILABLE PACKETS
Agent/阶段交接使用结构化 packet；共享事实分层继承，局部覆盖，不把长聊天记录当接口。

### M32 CLEAR OWNERSHIP / DEPENDENCY ORCHESTRATION
任务按 owner + dependency 编排；Sequential / Concurrent / Handoff / Manager 按任务关系选择，不把多Agent做成聊天室。

### M33 BOUNDED SHARED STATE
共享上下文只保留完成当前职责所需事实；其余 private / retrievable，不默认共享全历史。

### M34 TERMINATION / STALL / HUMAN GATE
DONE / STALL / REPLAN / WAIT_HUMAN / TIMEOUT 为正式状态。
低风险可自治；高影响、不可逆、审美/canonical冲突才进入USER门。

### M36 OBSERVABILITY + INDEPENDENT VERIFICATION
trace需覆盖 agent / turn / handoff / tool / approval / side effect。
多Agent共识不能代替独立验证。

## SPLIT｜只吸收结构

### M04 CHECKPOINT / RESUME
**吸收**：长流程必须支持 checkpoint / resume / fork 的结构。
**未验证**：对当前各生产链实际节省多少重跑成本。

### M05 IDEMPOTENT SIDE EFFECTS
**吸收**：可重试步骤的正式副作用必须有 execution key / dedupe / idempotency。
**未验证**：当前所有外部工具是否已正确实现。

### M35 DURABLE + ISOLATED EXECUTION
**吸收**：无人值守流程应具备 job isolation / checkpoint / lock / fan-out/fan-in。
**未验证**：当前具体实现的稳定性与吞吐。

## 执行规则

1. 所有正式运行先确定 object_id / task_id / version_id。
2. 产生外部副作用前必须有可重放/去重策略。
3. Agent交接只发最小 packet。
4. 进入 WAIT_HUMAN 时必须持久化当前状态。
5. 恢复时从 checkpoint 继续，不把“重开聊天”当恢复机制。
6. 任何“更省/更稳”结论必须回到验证矩阵。

## 路由

- 系统协议 / agent runtime / state：674-77
- L1→L4问题判断 / 去重 / 调度：674-116
- Z→XN→PATH架构：674-276
- issue recover-before-create：674-294

## 状态

KNOWLEDGE_READY = true
ROUTED = true
CONNECTED = false
VERIFIED = false
AI_LEARNED = false
