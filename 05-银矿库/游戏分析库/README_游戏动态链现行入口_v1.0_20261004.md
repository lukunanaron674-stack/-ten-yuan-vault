---
type: game-dynamic-chain-current-entry
status: canonical-routing
version: v1.0
updated: 2026-10-04
owner: Lina02
source_issue: 674-108
---

# 游戏动态链现行入口 v1.0

> 本页只负责旧游戏分析 → 现行关系/动态链的调用门禁，不覆盖十元 canonical，也不删除历史分析。

## 1. 默认规则

`05-银矿库/游戏分析库/` 下历史条目的 `status: finalized` 只表示该历史分析当时整理完成，**不表示其中的生/克/补、关系五对或动态链已经通过现行 canonical 门禁**。

因此旧条目默认：

```text
historical_status: FINALIZED_ALLOWED
relation_truth_status: LEGACY_RELATION_ANALYSIS
agent_training_truth: DENY_BY_DEFAULT
```

Agent、Benchmark、关系正例库不得直接把旧 `finalized` 条目中的关系边当作现行关系真值。

## 2. 唯一迁移门

每条旧关系边必须重新通过：

```text
POSITION
→ LIFECYCLE
→ OBSERVATION
→ CHAIN
```

含义：

1. POSITION：端点是否构成现行位置盘允许的生/克/补位置。
2. LIFECYCLE：该关系机制当前是否 documented / research / endpoint_redefinition_freeze 等可调用状态。
3. OBSERVATION：具体游戏案例是否真的发生该机制，必须有 source/target、changed_variable、before/after、delete/reverse/third_factor 等证据。
4. CHAIN：只有前序关系边成立后，才允许进入动态链；时间顺序、状态序列、主题序列本身不等于关系链。

## 3. 迁移状态

### INVALID_POSITION
旧关系标签与现行位置盘冲突。保留题材、玩法、体验与历史解释；关系类型不得进入现行训练真值。

### POSITION_VALID / OBSERVATION_UNVERIFIED
位置合法，但旧案例没有重新通过现行 observation 门。不得因“位置合法”或旧文件 `finalized` 自动升级为 observed relation。

### LEGACY_NONSTANDARD_RELATION_TERM
旧文件使用 `共生 / 相生 / 相克 / 张力系` 等非现行关系术语。禁止词面翻译：

```text
共生 ≠ 补
相生 ≠ 生
相克 / 张力 ≠ 克
```

必须剥离旧术语，只保留 underlying observation，再重新走四门。

### LEGACY_STATE_SEQUENCE
旧文件中的 `A→B→C` 若没有逐边通过关系门，只能解释为状态/主题/时间序列候选；箭头不得自动解释为生、克、补或因果。

## 4. 已迁移压力样本

- Undertale：显式旧关系边出现 `INVALID_POSITION`。
- Outer Wilds：同时出现 `INVALID_POSITION` 与 `POSITION_VALID / OBSERVATION_UNVERIFIED`。
- Elden Ring：验证 `LEGACY_NONSTANDARD_RELATION_TERM`，说明旧关系词必须先解耦再判断。

详细审计记录以 Linear `674-108｜DYN-MIGRATE-01` 为准。

## 5. Agent 调用合同

读取游戏分析库时：

```text
IF file.status == finalized AND relation_has_no_current_gate:
    relation_truth = LEGACY_RELATION_ANALYSIS
    training_truth = DENY

IF migration_status == INVALID_POSITION:
    training_truth = DENY

IF migration_status == POSITION_VALID / OBSERVATION_UNVERIFIED:
    relation_truth = CANDIDATE_ONLY
    training_truth = DENY

IF legacy_term in [共生, 相生, 相克, 张力系]:
    do_not_translate_by_wording = true
    rerun_current_gate = required
```

只有明确记录现行端点、位置、机制生命周期、观察证据并通过动态链门的条目，才可由对应现行入口决定是否进入正例/训练真值。

## 6. Failure family

- `LEGACY_FINALIZED_AS_CANONICAL`：把历史 `finalized` 误读成现行 canonical。
- `LEGACY_TERM_LITERAL_TRANSLATION`：把共生/相生/相克按词面直接翻译成补/生/克。
- `POSITION_VALID_AS_OBSERVED`：把合法位置直接升级成案例真实发生。
- `SEQUENCE_ARROW_AS_RELATION`：把时间/状态箭头直接当关系边。

## STOP / 重开条件

本入口建立后，不要求逐个重写所有历史游戏条目。只有在某旧游戏被实际调用为关系证据、Benchmark 样本或 Agent 训练真值时，才按四门做按需迁移。

若发现 Agent 仍能绕过本入口直接读取旧关系为真值，则重开 `674-108` 作为 routing failure；否则不继续进行无边界的逐游戏考古。
