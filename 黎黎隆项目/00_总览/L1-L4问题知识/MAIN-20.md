---
title: MAIN-20｜本地/云端硬件、ComfyUI、4090/5090、Windows 等基础设施如何成为可靠生产底座
tags:
  - lililong
  - problem-map
  - l1-l4
  - main-20
linear_issue: 674-116
r2_phase: R2-D
status: partial
problem_level: MAIN
subproblem_count: 13
---

# MAIN-20｜本地 4080 32GB、ComfyUI/H3、Windows 与历史云经验如何成为可靠生产底座

Canvas 入口：[[黎黎隆问题系统]]
来源：Linear 674-116｜R1 + R2-D｜comment ae4736f4-64e2-4df9-b1cb-2c37c2b9cc25

## Canvas 状态

- 当前状态：PARTIAL
- 本轮判断：已有办法或局部结果，但尚未覆盖完整 DONE 范围。
- Canvas 颜色：橙色（部分完成）
- 正式 Q：本卡不是正式 Q，不自行分配 Q-ID。

## DONE

完成该 MAIN 的关键 SUB 验证；每个验证都有可追溯输入、证据、办法、结果和审核状态，并回写 Canvas。当前：尚未覆盖完整范围。

## STOP

最多 3 轮；缺真实素材、权限或运行回执即 BLOCKED；遇到用户身份/审美审核即 USER_REVIEW；发现与现有 Q 重复则 MERGE；不把候选或 assistant proposal 升格为事实。

## 当前解决办法

- 先按 SUB 拆分可观察问题，再单变量验证。
- 把 BLOCKER、NEGATIVE/PSEUDO、RESOLVED_HISTORY 分开记录。
- 证据不足时保持 OPEN / BLOCKED，不提前改成 DONE。
- 结果回写原问题和 Canvas，不创建平行问题树。

## 子问题 SUB

- SUB-20-01｜当前本地 4080 魔改 32GB 能稳定承担哪些 H3 / ComfyUI / 批处理任务，并如何建立真实基线。
- SUB-20-02｜4090 / 5090 已退役云 worker 的历史实战经验如何迁移为本地 4080 的安全基线，而不是继续保留旧拓扑。
- SUB-20-03｜ComfyUI 工作流、模型、CUDA 版本、依赖如何版本化。
- SUB-20-04｜H3 工作流如何验证 input / output / VRAM / 时长 / 失败重试。
- SUB-20-05｜外接 Windows 是否适合作为临时 Codex / 烤机 / H3 环境。
- SUB-20-06｜SSD / HDD / NVMe 的项目、缓存、模型、素材目录如何分配。
- SUB-20-07｜96GB 混插内存的稳定性如何验证，是否影响长期渲染。
- SUB-20-08｜电源 / 16Pin / GPU 烤机 / 温度如何做安全基线。
- SUB-20-09｜本地 watcher / Windows Task Scheduler / 云 worker 的调度职责怎么分。
- SUB-20-10｜本地 API / SSH / Linear MCP / GitHub / Codex 多端连接如何做最小可恢复配置。
- SUB-20-11｜硬件故障、系统重装、云实例释放后如何快速恢复生产。
- SUB-20-12｜日志、缓存、输出、模型、凭据如何分离，避免重装时丢失关键状态。
- SUB-20-13｜基础设施问题何时升级为项目 BLOCKER，何时只是 SUPPORT 问题。

## 2026-10-06｜硬件拓扑更正与 4090 经验迁移

- 当前主生产环境：**本地 4080 魔改 32GB**。
- 4090 云端：**RETIRED**；5090 云端不作为当前默认生产端。
- 4090 实战文档不再用于决定“云端怎么分工”，而作为 H3 故障库 / 启动纪律 / 调度纪律的历史证据源。

### 可迁移
- 单实例优先；
- queue/write/receipt 状态分离；
- /history 为运行时权威；
- error body 优先；
- 真实素材绑定；
- 崩源任务拉黑而非循环重启。

### 仅作 4080 初始假设，必须复验
- 264f / 11s 极限；
- RAM/VRAM staged 峰值；
- >21GB 单模型风险；
- ~800s/1500s 超时经验；
- 4090 上的吞吐与并发结论。

### 生产基础设施新增 preflight
H3 执行前不仅检查模型/路径/实例，还检查输入图的 source_type、景别职责、宽高比和 resize 策略。非等比拉伸属于 **TASK/INPUT CONFIG ERROR**，不是模型质量问题。

## BLOCKER

（无）

## NEGATIVE / PSEUDO

（无）

## RESOLVED_HISTORY

（无）

## 本轮结果

- 本卡已完成横向问题登记和第一层下钻。
- 当前状态仍由证据覆盖范围决定；子问题解决后再回写 MAIN。
- 详细状态由 Canvas 管理，本卡保存知识、证据和方法。

## 下一步

从 BLOCKER 中选择一个有真实输入、可观察 DONE 条件的 SUB，完成一轮有限验证后回写 Canvas。

