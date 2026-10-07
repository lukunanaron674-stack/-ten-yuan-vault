# BASE｜SOCIAL→US 知识吸收与验证清单

> 用途：作为 SOCIAL→US 后续推进的 BASE 入口。以后换聊天框、换执行器或继续任务时，先读本清单，再进入对应 Linear / Knowledge Pack。

## 0. 四个正式 Linear 入口

| 入口 | Linear | 责任主体 | 核心责任 |
|---|---|---|---|
| MASTER | 674-272 | CHATGPT | 总控、索引、状态同步、NEXT 指针；不在这里重新研究具体知识 |
| A | 674-273 | CODEX + WORKER | AI_LEARN：知识接入、工程实现、机器验证 |
| B | 674-274 | AGENT + 74 | HUMAN_AI_VALIDATE：需要74 Ground Truth 的人机联合验证 |
| C | 674-275 | CHATGPT + 74 | 74_LEARN：74本人需要掌握到 L2–L3 的社会知识 |

## 1. 总状态

### 工单状态
BACKLOG → READY → RUNNING → WAIT_EXTERNAL → VERIFY → DONE

WAIT_EXTERNAL 必须注明：WAIT_CODEX / WAIT_WORKER / WAIT_AGENT / WAIT_74 / WAIT_EVIDENCE。

### AI知识状态
DRAFT → KNOWLEDGE_READY → ROUTED → CONNECTED → VERIFIED → AI_LEARNED

规则：写进 GitHub ≠ AI_LEARNED；有路由 ≠ CONNECTED；无测试证据不得标 VERIFIED。

---

# A｜674-273｜CODEX + WORKER｜AI_LEARN

目标：机器能验证的能力尽量不占74注意力。

## A-L1｜F 可靠生产
- [ ] A-L1-01｜F-IDEMPOTENCY｜重复执行无重复正式副作用
- [ ] A-L1-02｜F-RECOVERY｜强制中断后正确恢复
- [ ] A-L1-03｜F-PROVENANCE｜资产可反查完整生产链
- [ ] A-L1-04｜F-OBSERVABILITY｜失败可定位谁/何时/哪步/为什么
- [ ] A-L1-05｜F-VERSION-MANIFEST｜输入输出版本/hash 可追溯

## A-L2｜C 意图执行
- [ ] Constraint execution
- [ ] Controlled Editing machine-side
- [ ] Consistency machine metrics
- [ ] 机器不能判断的审美/身份/风格漂移转 B，不在 A 等74

## A-L3｜D 自主控制
- [ ] Calibration
- [ ] Abstention
- [ ] Risk-sensitive machinery
- [ ] Escalation machinery
- [ ] “该不该找74”的真实准确性转 B-L4

## A-L4｜E 评价器
- [ ] Constraint Evaluation
- [ ] Trajectory Evaluation
- [ ] Failure Taxonomy
- [ ] LLM/Judge machinery
- [ ] 禁止生产执行器自产、自测、自宣高分

A 状态：READY_CONNECT → CONNECTING → CONNECTED → MACHINE_VERIFY → VERIFIED → DONE

---

# B｜674-274｜AGENT + 74｜HUMAN_AI_VALIDATE

原则：FREEZE → AI先预测/执行并锁定答案 → WAIT_74 → COMPARE → VERIFIED。

- [ ] B-L1｜Preference｜AI预测74选择 vs 74真实选择
- [ ] B-L2｜Controlled Editing / Preserve｜允许改A，74审核B/C/D非目标漂移
- [ ] B-L3｜Multi-turn Consistency｜连续5–10轮后74审核累计漂移
- [ ] B-L4｜121 Agency｜False Escalation + Missed Escalation
- [ ] B-L5｜122 Intent Fidelity｜AI预测接受/重改/否决 vs 74真实审核

## 74审核规则
- 尽量积累成 `74_REVIEW_BATCH`，集中一次审核。
- 机器可客观验证的问题禁止进入本线。
- AI不得在看到74答案后再修改自己的预测。

---

# C｜674-275｜CHATGPT + 74｜74_LEARN

目标深度默认 L2–L3，不要求专业实现 L4。

- [ ] C-L1｜意图与偏好｜Preference Learning + Constraint Conflict
- [ ] C-L2｜人机自主权｜Adjustable Autonomy + Escalation
- [ ] C-L3｜真实评价｜Human Preference Evaluation + Benchmark Design + Inter-rater Reliability
- [ ] C-L4｜长程一致性｜Multi-turn Consistency + Long-horizon Evaluation

学习状态：NOT_STARTED → EXPLAIN → L1 → L2 → L3_APPLY → DONE

L2：遇到实际问题能判断是否该使用该知识。
L3：能决定怎样进入自己的项目、论文或实验。

---

# 2. MASTER 自动续跑顺序

1. P0｜A：机器可以继续的任务优先自动推进。
2. P1｜B：需要74的案例先积累，形成 `74_REVIEW_BATCH`。
3. P2｜C：在74主动学习或知识阻塞项目判断时推进。
4. P3｜只有 A/B/C 暴露出现有社会知识不足，才重新开启 RESEARCH。

MASTER 指针初始值：
- NEXT_A = A-L1-01
- NEXT_B = B-L1
- NEXT_C = C-L1

---

# 3. GitHub 知识入口

- `AI_KNOWLEDGE/AI_LEARN_MASTER_INDEX.md`
- `AI_KNOWLEDGE/EXECUTOR_ROUTING.md`
- `AI_KNOWLEDGE/VERIFICATION_MATRIX.md`
- `AI问题解决Canvas/四主问题与社会映射/SOCIAL_TO_US_社会到我们_学习与吸收.canvas`

## BASE 使用规则

以后收到 `272 / 273 / 274 / 275` 或 `A-Lx / B-Lx / C-Lx`：
1. 先定位本 BASE 中的责任线；
2. 再读取对应 GitHub Knowledge Pack / Linear 工单；
3. 读取现有证据；
4. 只推进 NEXT；
5. 完成后更新状态和 NEXT 指针；
6. 不因换聊天框重新研究已冻结内容。

## 4. 第二阶段｜外部知识接入

固定顺序：

论文 / GitHub项目 / 技术报告 / 行业方法
→ 674-272
→ `INTERNAL_Z_ROUTE_REGISTRY.md`
→ 查“它解决哪个已有 Z？”
→ 候选知识
→ 实验验证
→ E0 → E1 → E2 → E3 → E4 → E5
→ 目标 Z canonical gate
→ 正本

硬规则：
- 未完成内部 GitHub 路由接线前，不允许批量灌入外部知识。
- 674-272 只做 intake / provenance / route / status，不取得领域 canonical 权。
- 未命中已有 Z 时先去 674-276 / 674-116 查现有问题，不直接新建第二套问题树。
- 只有 E5 才允许申请进入正本；E5 不等于自动升级。
- 每次晋级必须登记 pre_promotion_ref / promotion_commit / rollback_ref。
- 回滚使用 revert / 反向 PR，禁止改写 main 历史；失败证据必须保留。

协议：
- `AI_KNOWLEDGE/EXTERNAL_KNOWLEDGE_INGEST_PROTOCOL.md`
- `AI_KNOWLEDGE/INTERNAL_Z_ROUTE_REGISTRY.md`
- `AI_KNOWLEDGE/ROLLBACK_LEDGER.md`
