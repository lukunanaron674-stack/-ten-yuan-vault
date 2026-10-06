# 674-273｜CODEX + WORKER｜AI_LEARN BASE

> 类型：可勾选的问题解决 BASE，不是总说明文档。
> Linear：674-273
> 父工单：674-272
> 责任主体：CODEX + WORKER

## 状态栏

- 总状态：⬜ READY_CONNECT
- 已解决：0 / 17
- 待验证：0
- 阻塞：0
- NEXT：`A-L1-01｜F-IDEMPOTENCY`

### 状态图例
- ⬜ 未开始
- 🟡 处理中
- 🟠 待验证 / WAIT_EVIDENCE
- 🔵 WAIT_74（原则上应转 674-274，不在本 BASE 长期等待）
- ✅ 已解决 / VERIFIED
- ⛔ STOP / 阻塞

> `[x]` 只能用于已经有验证证据、真正解决的项目。实现了但未验证仍保持 `[ ]`。

---

## A-L1｜F 可靠生产｜0 / 5

状态：⬜ READY_CONNECT

- [ ] ⬜ `A-L1-01｜F-IDEMPOTENCY`｜同一 execution key 重复执行不得产生重复正式副作用
  - DONE：执行两次；正式副作用只发生一次；保留 execution record / output hash / log
- [ ] ⬜ `A-L1-02｜F-RECOVERY`｜强制中断后从有效 checkpoint 正确恢复
  - DONE：无损坏、无重复正式输出，并留下恢复证据
- [ ] ⬜ `A-L1-03｜F-PROVENANCE`｜任一正式资产可反查生产链
  - DONE：可反查 task / input / executor / model-tool / params / version
- [ ] ⬜ `A-L1-04｜F-OBSERVABILITY`｜失败可定位 first failure
  - DONE：日志可回答谁、何时、哪一步、发生什么、为什么
- [ ] ⬜ `A-L1-05｜F-VERSION-MANIFEST`｜输入输出版本与 hash 可追溯
  - DONE：重跑/改版后仍可确认准确输入与输出版本

NEXT：`A-L1-01`

---

## A-L2｜C 意图执行｜0 / 3

状态：⬜ WAIT_PREVIOUS_LAYER

- [ ] ⬜ `A-L2-01｜C-CONSTRAINT`｜约束被机器执行而非只存在于提示文字
  - DONE：冻结约束集 + 已知违规 case，机器检测/执行达到冻结验收条件
- [ ] ⬜ `A-L2-02｜C-CONTROLLED-EDIT-MACHINE`｜允许变量/保护变量进入机器侧执行规则
  - DONE：机器能记录 allowed variable 与 protected variables；审美漂移转 674-274/B-L2
- [ ] ⬜ `A-L2-03｜C-CONSISTENCY-METRICS`｜建立连续修改的一致性机器指标
  - DONE：连续任务能输出可比较的 drift evidence；最终审美 Ground Truth 转 B-L3

NEXT：等待 A-L1 DONE

---

## A-L3｜D 自主控制｜0 / 4

状态：⬜ WAIT_PREVIOUS_LAYER

- [ ] ⬜ `A-L3-01｜D-CALIBRATION`｜置信度与实际成功率建立可验证对应
- [ ] ⬜ `A-L3-02｜D-ABSTENTION`｜低把握/越权条件触发拒绝或暂停
- [ ] ⬜ `A-L3-03｜D-RISK`｜风险条件影响自主执行权限
- [ ] ⬜ `A-L3-04｜D-ESCALATION-MACHINERY`｜升级/找74机制能被正确触发和记录
  - DONE：机制本身机器验证；“该不该找74”的准确性转 674-274/B-L4

NEXT：等待 A-L2 DONE

---

## A-L4｜E 评价器｜0 / 5

状态：⬜ WAIT_PREVIOUS_LAYER

- [ ] ⬜ `A-L4-01｜E-CONSTRAINT-EVAL`｜约束评价器
- [ ] ⬜ `A-L4-02｜E-TRAJECTORY`｜轨迹/first-failure 评价
- [ ] ⬜ `A-L4-03｜E-FAILURE-TAXONOMY`｜失败类型结构化
- [ ] ⬜ `A-L4-04｜E-LLM-JUDGE`｜Judge 只作为受控评价组件，不自产自评
- [ ] ⬜ `A-L4-05｜E-EVIDENCE-SEPARATION`｜生产执行与评价证据分离
  - DONE：生产 Agent 不得自己出题、自己评分、自己宣布成功

NEXT：等待 A-L3 DONE

---

# 273 续跑规则

1. 默认从 `NEXT` 开始，不重新研究已经冻结的知识体系。
2. 子项：READY_CONNECT → CONNECTING → CONNECTED → MACHINE_VERIFY → VERIFIED → `[x]`。
3. 只有验证证据存在才允许 `[x]`。
4. 一个子项 VERIFIED 后自动推进同层下一项。
5. 一层全部 `[x]` 后，该层标 ✅ DONE，并推进下一层。
6. 机器无法提供 Ground Truth 的审美、偏好、意图问题转 `674-274`，273 不等待74。
7. 任何失败必须保留 first-failure / evidence；不得只回一句“已支持”。

# 273 DONE 条件

- [ ] A-L1 全部 VERIFIED
- [ ] A-L2 全部 VERIFIED 或需74部分已正确转交274
- [ ] A-L3 全部 VERIFIED 或需74部分已正确转交274
- [ ] A-L4 全部 VERIFIED
- [ ] 所有已解决项登记 knowledge_id / knowledge_version(commit) / executor / task_id / input_version / evidence

全部勾选后：`674-273 = ✅ DONE`。

## 依赖知识
- `AI_KNOWLEDGE/AI_LEARN_MASTER_INDEX.md`
- `AI_KNOWLEDGE/EXECUTOR_ROUTING.md`
- `AI_KNOWLEDGE/VERIFICATION_MATRIX.md`
