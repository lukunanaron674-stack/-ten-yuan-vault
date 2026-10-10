# R2｜Qwen影子模型与Skill读包
issue: 674-216
status: CPU_MODEL_INSTALLED / SHADOW_REPLAY_PASS / PRODUCTION_CUTOVER_NOT_AUTHORIZED

## 成果
- `.qwen/skills/tenyuan-h3-shadow/SKILL.md`：基于Qwen Code官方项目Skill机制，按需加载、禁止越权写任务。
- `QWEN_SHADOW_PACKET_SCHEMA.json`：强制SHADOW、CODEX主执行、ComfyUI提交字段恒false；不能把自然语言“已开始”当真的execution。
- 复用AGENT_IO/RENDER_TASK既有schema，千问包只作为辅助比较，不成为新的Canon。

## 本地Codex运行步骤（不能影响每小时H3）
1. 模型仅安装到用户指定的`C:\Users\19308\Desktop\qwen`，不触碰主仓库/生产目录。
2. 使用官方`Qwen/Qwen3-8B-GGUF`的`Qwen3-8B-Q4_K_M.gguf`（5,027,783,488 bytes，SHA-256 `d98cdcbd03e17ce47681435b5150e34c1417f50b5c0019dd560e4882c5745785`）。llama.cpp官方Windows x64 CPU build b11541，归档SHA-256 `cdc0535d11038bb337dfba3c15682050eaa9c07aedd0f915b4c09e8a8e8c0a5c`。
3. R1主机：Intel i5-14600K，14核/20逻辑处理器，64 GB RAM（约63.72 GiB）；影子回放使用8个CPU线程、`--gpu-layers 0`、4096上下文、单并发。模型服务只绑定`127.0.0.1:18216`，回放后已停止。
4. 用固定Qwen3 ChatML输入和`QWEN_SHADOW_PACKET_SCHEMA.json`约束，回放三类真实门禁案例：当前H06缺场景/工作流门禁、未绑定具体video_id的历史用户反馈、已QUEUED且不得改动的卡。不调用渲染。
5. 后续复跑使用`cpu_replay/run_replay.py`，参数`--llama-server <llama-server.exe> --model <Qwen3-8B-Q4_K_M.gguf>`。脚本仅拉起loopback CPU服务，生成后自动关闭。
6. 通过Draft 2020-12校验并对照冻结动作：`ESCALATE_NX`、`PROPOSE_NEXT_TEST`、`NO_OP`；脚本复跑3/3动作匹配，`authority=NONE`、`submitted_to_comfyui=false`。CPU生成约7.21–7.26 token/s。结果在`REPLAY_RESULTS_20261011.json`和`cpu_replay/SCRIPT_RUN_SUMMARY_20261011.json`。

## DONE/STOP
DONE：3/3输入包解析通过且无越权渲染行为；记录真实CPU速度与回放后GPU快照；无Qwen进程残留。此项不等于生产切主验收。
STOP：CPU负担明显影响Codex/H3主任务、JSON错误、不稳定理解审核范围、下载会占用生产网络/盘IO时局部停千问。

## 2026-10-11 本机清点与模型回放
- 指定目录里原有Qwen2.5与Qwen3文件；Qwen3-8B权重经官方Hub SHA-256核验一致，未重复下载权重。本轮只下载官方CPU运行时并使用现有Qwen3-8B权重。
- llama.cpp命令行直接附加JSON Schema的首轮尝试在Qwen3 ChatML起始token处采样器初始化失败，未产生有效输出。调整为llama.cpp官方本机`/completion` JSON Schema接口后完成回放；过程和每例响应保存在用户指定目录。
- `--gpu-layers 0`，无GPU推理、无ComfyUI提交；本地服务已停止。正式执行仍为CODEX，Qwen仍SHADOW，不得自动切主。
