---
name: tenyuan-h3-shadow
description: Read the approved Linear/Obsidian H3 task packet and output a strictly read-only Qwen shadow decision, with no GPU action or Canon change. Use while Codex is still the primary hourly executor.
---
# 十元 H3 千问影子执行

## 模式（不可省略）
`QWEN_MODE=SHADOW`、`ACTIVE_EXECUTOR=CODEX`。本Skill只教千问读当前任务、找前置阻塞并输出候选技术决策；**禁止调用ComfyUI /prompt、禁止写正式任务队列、禁止改文件、禁止运行任意shell或管理Windows服务**。模型本身无执行授权。

## 每次只读最小内容
1. 当前 `674-216/286` 指定job的HOT task与base_state_version；
2. `AGENT_IO_PROTOCOL.md` 的输入输出头、`RENDER_TASK_SCHEMA.md` preflight约束；
3. `674-296` 的角色/独立场景参考资产一对（路径/SHA/review_scope），与 `674-173` 对应格位裁决；
4. `AG-07_H3渲染Agent.md` 最小岗位约束；
5. 十元引用仅按现有Canon/IR ID读取，不能猜十元含义，避免Q-DSL-001.2所述跨模型漂移。

## 影子输出
只生成遵从 `QWEN_SHADOW_PACKET_SCHEMA.json` 的JSON：
- action只能取 `NO_OP | READ_ONLY_PREFLIGHT | PROPOSE_NEXT_TEST | ESCALATE_NX`；
- reason，source_refs，current_z，xn_candidate（若有），nx_gap（若有），blocker，next_action；
- 明确 `submitted_to_comfyui=false`、`authority=NONE`；
- 所有感受判断只记录B端或USER已证实来源。H06USER认为缓慢压掌与圣光表达神圣感，不准凭此推出通用高可信XN。

## 安全与效率
- 首轮上下文约4096 tokens为工程试点，仅加载当前小包，不整库灌入；
- 无source SHA、审核格位或真实PATH，输出BLOCKED而非补造图；
- 本地Qwen和Codex意见冲突时，以当前USER/Canon/真实EVIDENCE/Director为准，记录差异作NX，不覆盖；
- 两轮影子输出相同且无新证据则NO_OP，不再重复研究。
- 本Skill不能直接降低显存；搭配CPU量化/串行GPU资源管理。

## DONE/STOP
DONE：对三张历史已冻结任务包输出可解析的JSON，字段完整，不含越权指令，与Codex参考结果作差异报告。
STOP：任何要求实际GPU/发布/修改Canon/资产/定时器的动作，交由原Codex+Director流程，影子不执行。
