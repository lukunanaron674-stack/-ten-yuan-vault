---
type: current-visual-rd-phase
status: active
updated: 2026-09-16
version: v0.8.0
release: RELEASE_视觉化体系_v0.8.0_20260916.md
phase: STYLE_GRAMMAR_CAUSAL_VALIDATION
---

# 当前视觉化研发阶段｜v0.8.0

当前版本：**视觉化体系 v0.8.0 — Consolidation Candidate**。

当前阶段已经从“视觉化总收束 R0”推进到：

> **十元角色设计 Style Grammar｜视觉因果验证阶段**

## 默认策略

```text
停止无边界找图
→ 保留定向反例 / 混淆样本搜索
→ 跑最小 A/B 单变量实验
→ 删除测试
→ 跨部位
→ 跨风格外部复核
→ 通过者冻结
```

当前资源比例建议：

```text
20% 定向找图复核
80% 控变量验证 / 审核
```

核心原则：

> 找图 = 外部普适性验证；生图 = 关键因果验证。

没有新视觉证据，不因文字逻辑完整自动进入下一轮或冻结。

## 当前版本成果入口

1. `VERSION_视觉化体系.yaml`
2. `RELEASE_视觉化体系_v0.8.0_20260916.md`
3. `CHANGELOG_视觉化体系.md`
4. `00-总收束/README_视觉化总收束R0_20260916.md`
5. `十元角色设计StyleGrammar_研究总整理_20260916.md`

## 当前冻结状态

```text
X       → FROZEN
Z       → FROZEN
N       → A_B_VALIDATION_REQUIRED
ZN      → A_B_VALIDATION_REQUIRED
NZ      → REVISED_A_B_VALIDATION_REQUIRED
XN      → STRONG_FREEZE_CANDIDATE_A_B_REQUIRED
NX      → REVISED_PRIORITY_A_B_REQUIRED
ZX      → REVISED_PRIORITY_A_B_REQUIRED
XZ      → STRONG_FREEZE_CANDIDATE_A_B_REQUIRED
X并Z    → FREEZE_CANDIDATE_A_B_REQUIRED
```

说明：
- X、Z 核心定义已冻结，除明确反证外不再追加理论轮次。
- 未经过真实控变量图像因果验证的对象不得正式冻结。
- NZ / NX / ZX 已因深研与反证发生候选改写。

## 当前最短十元 Style Grammar

```text
X       独立自足
Z       方向迁移
N       双向互为条件
ZN      关系规则改写
NZ      终端嵌合
XN      规则槽位化
NX      缺席组织位
ZX      非对称组织锚点
XZ      临界耦合
X并Z    上位包络双读
```

## 当前执行顺序

按“最容易被模型视觉捷径污染”排序：

```text
ZX
→ NX
→ NZ
→ ZN
→ N
→ X并Z
→ XZ
→ XN
```

但若继续按原聊天推进顺序，则当前 N 仍停留在 A/B 关键因果验证口，不应因文字研究完成自动跳到 ZN。

## 当前 N 状态

当前假设：

> 两个保持独立身份的形体，在局部结构上互为成立条件。

最小实验：

```text
A：单向接口 A → B
B：双向接口 A ⇄ B
```

通过条件：
- 不依赖同形、同色、对称、共同朝向、连接线、共同外框；
- 删除任意一方后，另一方留下明显“无结构理由”的局部接口；
- B 相比 A 出现稳定、可重复的额外互依可读性。

## 找图继续使用的条件

只在以下情况继续：

- 寻找反例或假阳性；
- 解决 ZX vs 视觉中心、NX vs 普通负空间、NZ vs 普通包围、X并Z vs common region 等具体混淆；
- A/B 通过后做跨风格 / 跨题材外部复核；
- 出现新的稳定 failure family。

否则不继续扩大参考图数量。

## v1.0.0 升级门槛

```text
十元视觉标准卡 10/10 冻结
+ 最近邻矩阵完成
+ 去视觉捷径回归通过
+ 跨对象/跨题材回归通过
+ 图像审核器重复判定稳定
+ 生克补最小视觉语法完成
+ 动态链视觉回归完成
```

## 允许重新深研的条件

仅限：

- 已有研究核心冲突无法消解
- 最近邻反复不可分
- 跨对象 / 跨风格系统性失败
- 新稳定 failure family
- 真实项目出现现有规则无法解释的结构

否则：`NO_NEW_DEEP_RESEARCH`。
