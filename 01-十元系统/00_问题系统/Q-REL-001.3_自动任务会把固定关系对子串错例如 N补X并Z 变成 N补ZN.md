---
q_id: Q-REL-001.3
problem_depth: D2
parent: Q-REL-001
goal: 十元体系稳定、可验证、可生成、可跨模型执行
volume: 9
impact_weight: 10
status: IN_PROGRESS
linear_issue: 674-105
problem_state_version: v1
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
- `01-十元系统/05-十元语义空间/B1_R5关系输入审计_20260920.json` 已存在 30 条有向记录，并为每条记录保存 `id / relation / source_yuan / target_yuan / mechanism_status / r5_use`；该文件明确是 noncanonical audit overlay，不覆盖 L1/R4 canonical。
- 目标正确记录 `补_n_x并z` 已存在于 B1 审计层；仓库检索不到 `补_n_zn`。因此“把 N补X并Z 改写成 N补ZN”不是同一 relation 的自然语言改写，而是产生了一个未登记 tuple。
- `B2_R5具象化编译器实施规范_20260920.md` 已要求传精确 `relation_id`，说明 relation_id 锁定并非新理论，而是已有工程约束可复用。

## 4. 因果链
当前缺口 → 自动任务只读取自然语言关系名或自由生成 from/to → 未登记 tuple 被模型补写 → 下游动态链、视觉化和脚本建立在错误边上 → 阻塞父目标。

## 5. DONE 条件
所有自动任务在关系层只读取版本化 canonical/audit relation record 的 `relation_id / relation / source_yuan / target_yuan`；出现未登记对子直接 FAIL，不允许模型补写；并有至少一组正例/串错负例回归证明 fail-closed 生效。

## 6. 当前结论
状态：**IN_PROGRESS**。

本轮不修改任何十元本体、五轴或关系 canonical，只把已有 B1 审计层收束成最小运行门禁：

```text
INPUT relation_id
→ exact lookup B1_R5关系输入审计
→ assert relation_id == relation + source_yuan + target_yuan 的登记记录
→ assert caller supplied tuple 与登记 tuple 完全一致
→ 检查 mechanism_status / r5_use
→ PASS 才允许下游执行
→ 任一 lookup/match 失败：FAIL_CLOSED / 禁止模型猜测或改写
```

### 最小回归对

- 正例：`relation_id=补_n_x并z` + `relation=补` + `source=n` + `target=x并z` → **REGISTERED_TUPLE**，随后仍需按该记录自身 lifecycle/gate 判断能否调用；“登记存在”不等于机制已实证。
- 串错负例：`relation=补` + `source=n` + `target=zn`，或模型把 `补_n_x并z` 改写成该 tuple → **UNREGISTERED_TUPLE / FAIL_CLOSED**。不得自动创建 `补_n_zn`，不得拿几何位置或语言相似度补齐。

### 新增 failure family

`RELATION_TUPLE_FREE_REWRITE`：调用方没有以精确 relation_id 锁定已登记 tuple，或 relation_id 与 relation/source/target 任一字段不一致，却仍让下游继续执行。

这是一条执行门禁，不是 canonical 关系定义变更。

## 7. 下一步（唯一）
只做一个最小工程回归：复用现有 R5 compiler/preflight，在进入关系执行前加入/验证上述 exact lookup + tuple equality + fail-closed；用 `补_n_x并z` 正例和 `补_n_zn` 串错负例各跑一次。通过前不得把 Q 标 DONE。

## 8. Problem State v1
- known：B1 已有 30 条有向登记记录；`补_n_x并z` 存在；`补_n_zn` 未登记；R5 已使用 relation_id。
- unknown：现有自动任务入口是否全部经过同一 exact tuple gate。
- tried：本轮完成现有资产审计并冻结最小 fail-closed contract。
- rejected：仅靠提示词提醒模型“不要串错”；允许模型按轴位置、语义相似或旧记忆自动补 relation tuple；把 B1 audit overlay 升格为 canonical。
- current_hypotheses：若所有自动关系调用统一经过 exact relation_id lookup + tuple equality，已知串错类可在执行前被机械拦截。
- next_decision：工程回归正/负例均通过后，再检查是否仍存在绕过 gate 的自动任务入口；满足 DONE 才关闭。
