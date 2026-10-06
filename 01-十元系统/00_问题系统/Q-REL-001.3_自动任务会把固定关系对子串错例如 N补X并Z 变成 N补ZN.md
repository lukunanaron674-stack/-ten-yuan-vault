---
q_id: Q-REL-001.3
problem_depth: D2
parent: Q-REL-001
goal: 十元体系稳定、可验证、可生成、可跨模型执行
volume: 9
impact_weight: 10
status: IN_PROGRESS
linear_issue: 674-105
problem_state_version: v2
updated: 2026-10-06
---

# Q-REL-001.3｜自动任务会把固定关系对子串错例如 N补X并Z 变成 N补ZN

## 1. 问题一句话
自动任务会把固定关系对子串错例如 N补X并Z 变成 N补ZN。

## 2. 为什么影响父节点
一旦关系对被模型自由重写，后续动态链、视觉化和脚本全部建立在错误边上。

## 3. 当前证据
- 用户 2026-10-03 当前反馈：定时任务会串错生克补对子。
- `07-Codex大脑库/每次任务必读_十元关系防遗忘清单.md` 已要求涉及关系时先查端点冻结、关系卡、核心表与专项索引，但它仍是阅读纪律，不是机器可验证的 tuple gate。
- `01-十元系统/05-十元语义空间/B1_R5关系输入审计_20260920.json` 已存在 30 条有向记录，并保存 `id / relation / source_yuan / target_yuan / mechanism_status / r5_use`；它是 noncanonical audit overlay，不覆盖 L1/R4 canonical。
- `补_n_x并z` 已登记；`补_n_zn` 未登记。
- `B2_R5具象化编译器实施规范_20260920.md` 已要求精确 `relation_id`。
- 2026-10-06 已新增 `tools/r5_relation_tuple_gate_v0_1.mjs`：执行 exact relation_id lookup、tuple equality、position gate；任一缺失/未登记/不一致返回 `FAIL_CLOSED`。
- 已新增 `tests/r5_relation_tuple_gate_v0_1.test.mjs`，固定三例：登记正例 `补_n_x并z`、同 id 串错 target 的负例、虚构 id `补_n_zn` 的负例。
- 当前自动化运行环境无法访问 GitHub 主机以 clone/执行 Node 回归，因此测试文件已落库但尚无真实运行日志；不得把“测试代码存在”冒充“回归已通过”。

## 4. 因果链
当前缺口 → 自动任务只读取自然语言关系名或自由生成 from/to → 未登记 tuple 被模型补写 → 下游动态链、视觉化和脚本建立在错误边上 → 阻塞父目标。

## 5. DONE 条件
所有自动任务在关系层只读取版本化 canonical/audit relation record 的 `relation_id / relation / source_yuan / target_yuan`；出现未登记对子直接 FAIL，不允许模型补写；并有至少一组正例/串错负例回归证明 fail-closed 生效。

## 6. 当前结论
状态：**IN_PROGRESS**。

最小门禁已经从“提示词纪律”升级为可执行模块：

```text
INPUT relation_id + relation + source_yuan + target_yuan
→ exact lookup B1_R5关系输入审计
→ tuple equality
→ position/lifecycle metadata return
→ PASS: REGISTERED_TUPLE
→ 任一 lookup/match 失败: FAIL_CLOSED
```

### 最小回归对
- 正例：`补_n_x并z / 补 / n / x并z` → 预期 `REGISTERED_TUPLE`。
- 串错负例 A：`补_n_x并z / 补 / n / zn` → 预期 `RELATION_TUPLE_MISMATCH:target_yuan / FAIL_CLOSED`。
- 串错负例 B：`补_n_zn / 补 / n / zn` → 预期 `RELATION_NOT_REGISTERED / FAIL_CLOSED`。

### failure family
`RELATION_TUPLE_FREE_REWRITE`：调用方没有以精确 relation_id 锁定已登记 tuple，或 relation_id 与 relation/source/target 任一字段不一致，却仍让下游继续执行。

这是一条执行门禁，不是 canonical 关系定义变更。

## 7. 本轮状态变化
- `contract only` → `gate module + regression fixture committed`
- GitHub commits：`7eaf8e0fa54b3fb04c71edb7eab66de01806ec58`（gate）、`d689a7a70c99e06cde1838e2a0898719e84a8e61`（regression fixture）。
- 尚未达到 DONE：缺真实 Node 执行日志，且尚未证明所有自动任务入口都经过该 gate。

## 8. STOP
本轮命中 **STOP-03**：下一步要求真实执行 Node 回归/入口联调，但当前自动化运行环境无法访问 GitHub 主机取得仓库工作树，不能伪造执行结果。本轮不继续派发新 Codex 任务。

解除条件：本地 Codex/worker 在已有仓库工作树执行 `node tests/r5_relation_tuple_gate_v0_1.test.mjs` 并回传真实 stdout/exit code；若 3/3 PASS，再检查现有自动任务入口是否绕过 gate。

## 9. Problem State v2
- known：B1 有 30 条登记记录；`补_n_x并z` 存在；`补_n_zn` 未登记；fail-closed gate 与三例 regression fixture 已落库。
- unknown：真实 Node 回归是否 3/3 PASS；自动任务入口是否全部经过 gate。
- tried：资产审计、门禁 contract、可执行 gate 模块、正负回归 fixture。
- rejected：只靠提示词；按相似度补 tuple；把 audit overlay 升格 canonical；无执行日志时宣称测试通过。
- next_decision：拿到真实 3/3 日志后，只做入口 bypass audit；否则保持 IN_PROGRESS/STOP-03。
