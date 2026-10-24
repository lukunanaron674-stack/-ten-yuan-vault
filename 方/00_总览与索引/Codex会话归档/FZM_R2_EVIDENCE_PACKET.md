# FZM R2 Evidence Packet — staging

本目录的 `FZM_R2_EVIDENCE_PACKET.jsonl` 保存首轮标题候选证据；每条只含带来源定位的短摘录，并已做常见凭据模式脱敏。该文件**不是最终 L2 包**：角色/领域/证据类型仍需逐段复核，尤其不能把 assistant proposal 当用户决定。

## 当前扫描结果

- 依据 622 条 session index 标题先找到 19 个方志敏相关候选；之后扩展扫描本机与归档区全部 719 个源文件（718 个唯一 session ID），合计 851,051 行。
- 全量消息文本别名扫描命中 267 个 session、产生 3,455 条证据；首轮候选卡号补充 632 条，按 session_id+行号合并后主包为 3,741 条、267 个 session。
- 全量扫描有 2 条超大 JSON 行解析失败，位置在 ledger/receipt 标明；其余源成功读取。两条异常 session 标成部分解析。
- 对 267 个命中 session 又扫描了 function_call / function_call_output；0 个读取错误，产生 9,437 条工具调用/工具输出候选记录。
- 主包按 source_id+path+line+role 去重后共 **13,178 行**：USER 1,028、ASSISTANT 2,713、CODEX_ASSISTANT tool-call 4,537、TOOL output 4,900。工具调用不等于执行；工具输出也只有经核验后才可标作 EXECUTION_RECEIPT。
- 合并包 13,178 行全部可解析。敏感命令上下文触发整段遮蔽（共 76 条），复核未检出 password/token/API key/Bearer/SSH 命令/私钥等未脱敏模式。
- 原始会话没有复制到本目录，也没有外发。
- 完整 JSONL 为 18,541,511 bytes，超过 Linear 免费计划单附件 10 MB 限制；Linear 中以 3 个按行边界切分的附件交付。按 `FZM_R2_PARTS_MANIFEST.md` 中 part01→part03 拼接并核 SHA256。

## 下一步

下一步逐段拆分纯 FZM 与跨项目内容，复核 USER 决策、assistant 提议和工具实际行为；再按角色/镜头/版本编译时间线及冲突。当前证据只用于召回候选，不自动升级项目事实。
