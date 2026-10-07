# 674-272｜外部知识接入协议 v1.0

> 状态：STAGING
> 适用范围：论文 / GitHub 项目 / 技术报告 / 行业方法 → 内部已有 Z
> 原则：外部知识永远先做候选，不得直接覆盖 canonical。

## 0｜唯一主链

```text
外部来源
  ↓
674-272 收件 / 去重 / provenance
  ↓
INTERNAL_Z_ROUTE_REGISTRY
  ↓
先查“它解决哪个已有 Z？”
  ↓
104 / 105 / 106 / 118 / 282 / 286 / 276 / ...
  ↓
CANDIDATE
  ↓
实验 / 复现 / 对照
  ↓
E0 → E1 → E2 → E3 → E4 → E5
  ↓
PROMOTION_ELIGIBLE
  ↓
目标 Z 的 canonical gate
  ↓
正本
```

若无法命中已有 Z：路由到 674-276 / 674-116 做“已有问题发现”，禁止因为一篇外部资料直接新建第二套问题树或新 canonical。

## 1｜候选记录最小 Schema

```yaml
external_knowledge_id:
title:
source_type: paper|github|technical_report|industry_method|other
source_locator:
source_version:
source_date:
captured_at:

claim:
solves_problem:
target_z:
target_issue:
target_canonical:
route_status: UNROUTED|ROUTED|ROUTE_CONFLICT

candidate_state: COLLECTED|CANDIDATE|EXPERIMENTING|PROMOTION_ELIGIBLE|PROMOTED|REJECTED|ROLLED_BACK
evidence_profile:
evidence_level: E0|E1|E2|E3|E4|E5
evidence_refs: []
negative_evidence_refs: []

experiment_id:
frozen_protocol:
result:
regression_checks: []

promotion_id:
promotion_commit:
pre_promotion_ref:
rollback_status: NOT_NEEDED|READY|TRIGGERED|DONE
rollback_ref:
```

## 2｜E0–E5 接入梯度

E0–E5 是“能否进入正本”的门，不允许用来源名气代替实验。

- **E0｜SOURCE_ONLY**：已采集来源和明确 claim，但还未证明适合本系统。
- **E1｜LOCAL_REPRO**：在本地/现有工具链完成一次可重复复现，保留输入、版本、输出与失败记录。
- **E2｜CONTROLLED_REPEAT**：同一目标 Z 下重复或 A/B/对照成立；不是一次碰巧成功。
- **E3｜CROSS_CASE**：跨至少一个角色/场景/任务/样本仍成立，或在目标 Z 指定的独立案例中成立。
- **E4｜SHADOW_INTEGRATION**：接入真实链路的 shadow/staging 路径，不写 canonical；验证不会破坏现有链路，并完成 rollback 演练。
- **E5｜PROMOTION_ELIGIBLE**：达到目标 Z 的领域门槛、回归检查通过、provenance 完整、rollback 可执行。只有 E5 才允许申请升级正本。

注意：
1. “允许申请升级” ≠ “自动覆盖正本”。
2. 如果目标 Z 已有自己的 E0–E5 定义（例如十元感受系统），优先使用目标 Z 的定义；本协议只规定接入门与 rollback 纪律。
3. 需要 74 Ground Truth 的问题，即使机器到 E5，也必须经过对应 HUMAN_GATE。

## 3｜双轨状态

不得把 AI_LEARN 状态与 E0–E5 混为同一件事。

```text
知识接入状态：
DRAFT → KNOWLEDGE_READY → ROUTED → CONNECTED → VERIFIED → AI_LEARNED

证据等级：
E0 → E1 → E2 → E3 → E4 → E5
```

- ROUTED：找到了内部 Z。
- CONNECTED：执行器实际读取/调用该候选知识。
- VERIFIED：通过冻结实验。
- AI_LEARNED：已登记证据和版本，执行器可稳定调用。
- PROMOTED：只有 E5 + 目标 canonical gate 通过后才发生。

## 4｜Canonical 写入硬门

升级正本必须同时满足：

1. target_z / target_issue / target_canonical 三者明确；
2. evidence_level = E5；
3. 对应实验协议在结果揭晓前已冻结；
4. 有正例、失败或反例记录，禁止只留成功样本；
5. regression_checks PASS；
6. pre_promotion_ref 已记录；
7. rollback_ref 已生成并可执行；
8. 若涉及人的审美、感受、身份、Canon 决策，经过 HUMAN_GATE；
9. 写入通过独立 commit / PR，不允许无 provenance 的直接覆盖。

## 5｜Rollback 协议

每次 PROMOTED 都必须创建 promotion record：

```yaml
promotion_id:
external_knowledge_id:
target_z:
target_canonical:
pre_promotion_ref:
promotion_commit:
changed_paths: []
evidence_snapshot:
regression_snapshot:
rollback_ref:
rollback_tested: true|false
```

### 回滚触发条件
- 合入后出现回归；
- 与更高权重 canonical 冲突；
- 新证据使原 E5 失效；
- 目标 Z owner / HUMAN_GATE 判定不成立；
- provenance 丢失、版本不可重现；
- 接入导致错误扩散到其它 Z。

### 回滚动作
1. **禁止 force reset / 改写 main 历史**；
2. revert promotion commit 或通过反向 PR 恢复 `pre_promotion_ref`；
3. candidate_state → `ROLLED_BACK`；
4. 保留失败证据，不删除来源和实验记录；
5. evidence_level 降回可被当前证据支持的等级；
6. 记录 rollback_reason / regression / affected_z；
7. 若修复后再次升级，生成新的 promotion_id，不复用旧记录。

## 6｜禁止项

- 外部论文/项目“看起来高级”就直接改正本；
- 674-272 自己生成第二套内部问题树；
- 未查内部 Z 就建新工单；
- 生产执行器自产、自测、自宣 E5；
- 失败样本被删除；
- Canvas 全图覆盖式写回；
- 没有 pre_promotion_ref 的 canonical 修改；
- rollback 只写“可以回滚”但未保存可恢复版本。

## 7｜当前 GitHub 接线

- 主入口：`AI_KNOWLEDGE/BASE_SOCIAL_TO_US_TASKS.md`
- 内部路由：`AI_KNOWLEDGE/INTERNAL_Z_ROUTE_REGISTRY.md`
- AI_LEARN 索引：`AI_KNOWLEDGE/AI_LEARN_MASTER_INDEX.md`
- 执行器路由：`AI_KNOWLEDGE/EXECUTOR_ROUTING.md`
- 验证门：`AI_KNOWLEDGE/VERIFICATION_MATRIX.md`
- 回滚账：`AI_KNOWLEDGE/ROLLBACK_LEDGER.md`

本协议只负责“外部知识如何安全进入已有内部系统”，不改变各目标 Z 自己的 canonical 定义。
