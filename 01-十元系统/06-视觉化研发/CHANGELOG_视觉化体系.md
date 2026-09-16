# 视觉化体系 CHANGELOG

## Unreleased — 2026-09-16 — Style Grammar Causal Validation

### Added
- 新增 `十元角色设计StyleGrammar_研究总整理_20260916.md`，统一收束十元角色设计底层造型语法研究。
- 建立十元 Style Grammar 的统一 R0–R8 研发轮次：资料拆解 → 候选语法 → 反例攻击 → 去捷径 → 极简压力 → A/B 因果 → 跨部位 → 跨风格 → 冻结。
- 建立 8 个未冻结十元的最终 A/B 最小实验队列与删除测试。
- 增补图像审核器结构字段：互为条件、关系状态切换、终端接口、共同规则、缺席组织位、非对称组织锚点、临界余量、上位包络双读等。

### Changed
- Z 正式从 consolidation 提升为 `FROZEN`，核心为“建立方向 → 转向 → 跨不同结构层级继承”。
- N 候选从泛化“呼应 / 互依”收紧为“两个独立形体在局部结构上互为成立条件”。
- ZN 收束为“关系规则 α→β→β”。
- NZ 从“关系停靠”修正为“具有余量和终端性的嵌合”。
- XN 收束为“异质单元共同服从外部槽位规则”。
- NX 从“让位留痕”修正为“缺席组织位”，避免把行为过程误当静态图证据。
- ZX 从“单源触发重排”修正为“非对称组织锚点 / 约束传播”，避免把普通视觉中心误当 ZX。
- XZ 收束为“低余量、低容错、多接口临界耦合”。
- X并Z 收束为“上位包络建立第二层整体读取，同时内部单元保持自治”。
- 默认策略从“找图优先”进一步切换为“20% 定向找图复核 + 80% 控变量验证 / 审核”。
- 找图的职责降级为反例、混淆边界和跨风格普适性验证；生图只承担关键因果验证。

### Current freeze state

```text
X       FROZEN
Z       FROZEN
N       A_B_VALIDATION_REQUIRED
ZN      A_B_VALIDATION_REQUIRED
NZ      REVISED_A_B_VALIDATION_REQUIRED
XN      STRONG_FREEZE_CANDIDATE_A_B_REQUIRED
NX      REVISED_PRIORITY_A_B_REQUIRED
ZX      REVISED_PRIORITY_A_B_REQUIRED
XZ      STRONG_FREEZE_CANDIDATE_A_B_REQUIRED
X并Z    FREEZE_CANDIDATE_A_B_REQUIRED
```

### Current validation queue

```text
ZX → NX → NZ → ZN → N → X并Z → XZ → XN
```

该顺序按“模型最容易被视觉捷径污染”排序，不代表理论价值排名。

---

## v0.8.0 — 2026-09-16 — Consolidation Candidate

### Added
- 建立视觉化体系统一版本快照。
- 建立 Visual DSL 可用骨架。
- 建立图像审核器 R1.5 三样本协议。
- 建立低图耗视觉研发协议 V1。
- 建立 Visual Inbox Windows 自动归档链。
- 建立视觉化总收束 R0 与十元标准卡模板。
- 建立 v1.0.0 明确冻结门槛。

### Consolidated
- 五轴 V1.0 转为视觉化上游基础设施。
- X Style Grammar 标记为 FROZEN。
- XZ Visual Grammar 标记为 CANDIDATE_FROZEN。
- ZN Visual Grammar 标记为 CANDIDATE_FROZEN。
- Z / N / NZ / XN / NX / ZX / XPZ 进入 consolidation 阶段。
- 生克补从题材/共存判断收束为结构作用判断。
- 动态链视觉化从继续证明理论转为起点→变化→终点的视觉回归。

### Changed
- 默认研发策略从“继续 Deep Research + 大量生图”切换为“已有材料归并 → 标准卡 → 低成本验证 → 关键三样本 → 冻结”。
- 正式生图不再承担发现定义职责，只承担验证职责。
- 颜色、职业、表情、武器、怪物、科技感、少女感等被明确降级为非本体证据。

### Automation
- 网页生成图可通过本地 Visual Inbox 下载目录自动归档。
- 自动生成 sample_id / YAML / audit.md。
- 自动 git commit / push。

### Not Yet Frozen
- 十元 10/10 视觉标准卡。
- 十元最近邻矩阵。
- 生 / 克 / 补最小视觉对照集。
- 动态链关键阶段回归。
- 图像审核器稳定重复判定。

### Next
- R0.1 X 冻结样板。
- R0.2 XZ 候选冻结。
- R0.3 ZN 跨对象候选冻结。
- R0.4 NX 严格三样本。
- 剩余十元逐项收束。
- v1.0.0 总冻结审查。

---

## 版本规则

```text
major：生产冻结结构发生大版本升级
minor：新增重要子系统 / 达到重大收束里程碑
patch：兼容性修正、guard、自动化、非破坏性优化
```

### v1.0.0 仅在以下全部完成后发布

```text
十元标准卡 10/10 冻结
最近邻矩阵完成
去捷径回归通过
跨对象/跨题材回归通过
图像审核器可重复
生克补最小视觉语法完成
动态链视觉回归完成
```
