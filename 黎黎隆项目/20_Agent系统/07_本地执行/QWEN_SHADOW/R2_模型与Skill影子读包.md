# R2｜Qwen影子模型与Skill读包
issue: 674-216
status: SKILL_AND_JSON_SCHEMA_WRITTEN / LOCAL_MODEL_UNVERIFIED

## 成果
- `.qwen/skills/tenyuan-h3-shadow/SKILL.md`：基于Qwen Code官方项目Skill机制，按需加载、禁止越权写任务。
- `QWEN_SHADOW_PACKET_SCHEMA.json`：强制SHADOW、CODEX主执行、ComfyUI提交字段恒false；不能把自然语言“已开始”当真的execution。
- 复用AGENT_IO/RENDER_TASK既有schema，千问包只作为辅助比较，不成为新的Canon。

## 本地Codex运行步骤（不能影响每小时H3）
1. R1确认Qwen是否已经安装。已有可用CPU文本模型则先复用；否则记录WAIT_MODEL，**不自动下载**。
2. 若选用llama.cpp GGUF量化文本模型，先试`--n-gpu-layers 0 --ctx-size 4096 --parallel 1`，记录真实CPU耗时与显存驻留。若不支持某版本参数，按本机`--help`修正，禁止想当然安装。
3. 将一条历史674-286 DIRECTOR_PACKET喂给Qwen，限制只读输出JSON；用标准JSON Schema验证。测试3例（READY、MISSING_SCENE、USER_GATE），不调用渲染。
4. 与Codex已冻结结果对照结构（不是让Qwen裁定主观十元），产出 disagreement_refs 和对应NX，不改Canon。
5. 保留必要日志：model_id, quantization, context_tokens, CPU_RAM, GPU_used_before_after, decision_json, schema_validation, latency_sec, tool_calls=0。

## DONE/STOP
DONE：3/3输入包解析通过且无越权渲染行为；真实CPU/显存实测；不影响旧Codex运行。
STOP：CPU负担明显影响Codex/H3主任务、JSON错误、不稳定理解审核范围、下载会占用生产网络/盘IO时局部停千问。
