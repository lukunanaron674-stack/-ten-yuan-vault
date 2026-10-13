---
name: tenyuan-shadow-review
description: Validate and compare Qwen shadow-only H3 decisions against frozen Codex task baselines, report XN/NX differences, and forbid automatic handover or user-aesthetic verdicts.
---
# 千问影子复盘与主权闸
此Skill始终保持Qwen为SHADOW，只复盘、不执行、不下生产调度命令；正式执行者仍为既有每小时Codex。

## 操作
1. 从674-216/286读取一条有明确source、状态和结论的历史冻结任务，不接受缺少source SHA或ID的脑补任务。
2. 使用 `shadow_decision_check.py` 检查Qwen输出的结构不变量（仅安全smoke test，完整JSON Schema验证需单独jsonschema库）。
3. 再与冻结的Codex结果人工/脚本按字段比较：asset_id、SHA、review_scope、GPU是否忙、render_action、USER_GATE、QN(技术知识XN)/NX，任何影子方案都不允许覆盖当前事实。
4. Qwen得出与Codex不同的USER感受判断时，只记录 `CANDIDATE_NX`，不可直接升级正式XN_LOCK。十元代码XN与问题系统知识XN命名分离。
5. 保留原Codex每小时心跳和A端成功生成回执；不要为了测试Qwen去暂停Codex。

## 门槛
- 3个离线历史用例（可执行已审核/缺独立场景/待USER感受），决策结构正确、无越权、无重复无效GPU建议；
- 只读R1本机审计、R3 GPU队列观测、R4首批SHA审计都有证据，Codex仍正常每小时运行；
- **用户另行明确批准**，才可安排单次Qwen试运行独占GPU；该授权≠正式切主。
- 真正切主必须进一步有真实MP4+SHA+抽帧+GPU时序/零碰撞+173结果，并二次USER批准。
没有上述条件：保持SHADOW，不默认切换。

DONE：影子比较报告可复核、局部XN/NX差异进入276/286，Codex不受影响。
STOP：千问误读十元定义、擅自要求GPU、读不到原始审核、任务队列竞争，立即停千问，Codex维持原运行。
