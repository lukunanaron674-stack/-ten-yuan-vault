# D-AGENCY｜674-121｜ROUND-2 自主权分级

> 所属：D｜人机协作
> 状态：ROUND-2 DONE

## 目标
把 R1 的四因子转成可执行的自主权等级：
- confidence
- reversibility
- preference-load
- blast-radius

## 四级策略 v1

### L3｜AUTO
条件同时满足：高 confidence、高 reversibility、低 preference-load、小 blast-radius。
适用：搜索、读取、去重、索引、计算、日志整理、已冻结规则下的机械检查。

### L2｜AUTO + CHECKPOINT
条件：confidence 中高、reversibility 中高、preference-load 低到中、blast-radius 小到中。
要求：记录执行前状态、输入版本、执行回执和恢复点。
适用：状态同步、候选资产批量生成、manifest/hash/版本整理、小规模可逆验证。

### L1｜USER_REVIEW
触发：高 preference-load、低 reversibility、大 blast-radius，或候选要升级为正式正本。
适用：最终角色脸、最终画风、世界观正史、论文最终题目与核心结论。

### L0｜BLOCK / STOP
触发：关键输入不可验证、source-of-truth 冲突、缺原始资产或权限、动作不可安全恢复且影响面大。
适用：固定输入缺失仍继续生产、正本冲突仍覆盖、证据不足却宣称完成。

## 硬门
1. preference-load = HIGH → 至少 L1。
2. confidence = LOW → 不进入 L2/L3。
3. source-of-truth 未确定 → L0。
4. 连续失败 2 次 → 停止无脑重试，转 Recovery / REVIEW。
5. 用户审美/价值判断不得由 Agent 自动冻结。

## 当前工作流映射

| 任务 | 等级 |
|---|---|
| GitHub / Linear 搜索、读取、索引 | L3 |
| Canvas / MD / Linear 状态同步 | L2 |
| 批量生成候选角色/场景 | L2 |
| 选择最终角色脸 / 最终画风 | L1 |
| CANDIDATE → APPROVED / LOCKED | L1 |
| 缺固定输入仍继续生产 | L0 |

## R2 冻结结论
不采用固定 Agent 自主等级；采用任务级动态策略：

`四因子 → 自主权等级 → AUTO / CHECKPOINT / REVIEW / BLOCK`

## NEXT｜ROUND-3
反馈沉淀：研究 ACCEPT / REJECT / MODIFY 如何进入长期知识，同时避免把一次性偏好错误泛化成永久规则。
