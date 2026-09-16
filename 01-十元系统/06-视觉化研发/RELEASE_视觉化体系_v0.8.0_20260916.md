---
type: visualization-release-snapshot
version: v0.8.0
codename: Consolidation Candidate
status: active
released: 2026-09-16
phase: VISUAL_CONSOLIDATION_R0
---

# 视觉化体系 v0.8.0｜成果快照

> 这是当前十元 / 五轴视觉化研发的统一版本快照。它整理已经完成的深度研究、生成实验、审核方法、Visual DSL、动态链视觉化与自动化成果。v0.8.0 不是最终理论封版，而是“研究基本够用，进入总收束与回归验证”的生产前版本。

## 1｜版本定位

```text
v0.8.0 = 核心架构已成型
       + 大量深研已完成
       + 视觉转译方法已建立
       + 图像审核方法已建立
       + 低图耗生产链已建立
       + 自动归档已建立
       - 十元标准卡尚未全部冻结
       - 最近邻矩阵尚未全部完成
       - 生克补 / 动态链仍需视觉回归
```

因此当前主任务不是继续无限搜资料，而是：

```text
归并已有成果
→ 十元标准卡
→ 最近邻差分
→ 少量关键图验证
→ 冻结
```

---

## 2｜已经完成 / 成型的成果

### A. 五轴 V1.0 已封版

固定映射：

```text
木 = ZX ↔ NX
火 = ZN ↔ X
土 = N ↔ X并Z
金 = XN ↔ Z
水 = XZ ↔ NZ
```

传统相生与相克结构验证已完成。五轴从研究对象转为视觉化基础设施，后续只接受 failure-driven reopen。

### B. 十元视觉化从“题材词”升级为“结构语法”

当前统一原则：

```text
颜色 / 职业 / 表情 / 道具 / 题材
≠ 十元本体证据
```

真正优先审核：

```text
边界
方向
重心
路径
端点
开合
层级
间隔
包裹 / 分离
可逆性
关系作用前后变化
```

这解决了早期“ZX=王座强势、XZ=黑红危险、ZN=温柔少女”一类表面映射问题。

### C. X Style Grammar 已冻结

```text
独立形体单元
+ 清晰边界
+ 单元自足
+ 彼此不融合
+ 留有间隔
```

明确排除：几何、机能、冷酷、黑白、尖角、科技感等题材捷径。

状态：`FROZEN`。

### D. XZ Visual Grammar 已进入候选冻结

已经清除：

```text
黑手
怪物
血
恐怖表情
黑红配色
单纯危险感
```

当前核心验证方向：

```text
可用路径持续收窄
临界位置显性化
未来端点逐步唯一化
可逆性下降
对象处于边界 / 切线 / 阈值结构中
```

状态：`CANDIDATE_FROZEN`。

### E. ZN Visual Grammar 已进入候选冻结

已明确 ZN 不等于：

```text
少女
自然
柔和
温暖
梦幻
```

当前跨对象压力测试：

```text
建筑
机器
植物群
城市
房间
组织
```

状态：`CANDIDATE_FROZEN`。

### F. 图像审核器 R1.5 方法已建立

审核目标不是“好不好看”，而是：

```yaml
structure_visible: 目标结构是否直接可见
shortcut_dependency: 是否依赖题材捷径
nearest_neighbor_separable: 是否能与最近邻区分
changed_variable_visible: 本轮变量是否真正显影
relation_real: 生/克/补是否真实发生
failure_family: 失败属于哪一类
```

最低真实实验协议：

```text
同角色
同场景
同画风
只改一个结构变量

A 正样本
B 最近邻对照
C 非目标负样本
```

状态：`ACTIVE_VALIDATION`。

### G. Visual DSL 骨架已经可用

当前统一中间表示至少包括：

```yaml
subject:
object:
primary_ten_yuan:
secondary_ten_yuan:
relation:
relation_direction:
changed_variable:
composition:
  center:
  boundary:
  direction:
  spacing:
  enclosure:
  path:
  endpoint:
controlled_variables:
forbidden_shortcuts:
audit_target:
```

作用：把“长篇定义”变成可供 GPT / Codex / Qwen / ComfyUI / 审核器共同读取的视觉结构协议。

状态：`USABLE_SKELETON`。

### H. 生克补视觉化判定规则已经明确

```text
生 = A 的结构变化生成 B 成立条件
克 = A 压缩 / 否决 B 的合法状态空间
补 = A 补足 B 缺失结构，但不替代 B 本体
```

关键防线：

```text
同时出现 ≠ 发生关系
题材冲突 ≠ 克
情绪互补 ≠ 补
帮助 ≠ 生
```

当前进入最小对照集构建阶段。

### I. 动态链视觉化目标已经收束

不再继续证明链理论本身，视觉化统一关注：

```text
起始状态
→ 触发条件
→ 中段变化
→ 路径关闭 / 打开
→ 终点
```

审核重点：

```text
单帧能否读当前阶段
连续关键帧能否读方向
终点变化是否显性
去文字后是否成立
```

状态：`VISUAL_REGRESSION_REQUIRED`。

### J. 低图耗视觉研发协议 V1 已建立

```text
L0 Visual DSL / 结构推演
↓
L1 草图 / 本地低成本粗图
↓
L2 少量结构样本
↓
L3 正式关键三样本
```

正式高成本生图只有通过闸门才允许执行。

价值：让视觉研发不再受网页生图额度绑架。

### K. Visual Inbox 自动归档 V1 已实现

Windows 当前链：

```text
网页生图
→ 下载到 Downloads\十元视觉化
→ watcher 自动识别
→ 自动 sample_id
→ 自动归档
→ 自动 YAML
→ 自动 audit.md
→ git commit
→ git push
```

状态：`IMPLEMENTED`。

---

## 3｜十元当前冻结矩阵

| 十元 | v0.8.0 状态 | 当前任务 |
|---|---|---|
| X | **FROZEN** | 作为十元标准卡样板，只低频回归 |
| Z | CONSOLIDATION | 裁定 / 中心化的结构可视化 |
| N | CONSOLIDATION | 承载 / 纳入，排除“厚重=N” |
| ZN | **CANDIDATE_FROZEN** | 六类跨对象验证 |
| NZ | CONSOLIDATION | 保存 / 恢复 / 对象特异回返 |
| XN | CONSOLIDATION | 规则节点、流程、分布运行权 |
| NX | PRIORITY_CONSOLIDATION | 严格三样本、最近邻边界 |
| ZX | CONSOLIDATION | 去“强势人格”，回到方向生成 / 作用权来源 |
| XZ | **CANDIDATE_FROZEN** | 路径收窄 / 临界 / 不可逆回归 |
| X并Z / XPZ | CONSOLIDATION | 内→外映射，排除“爆炸/扩散”捷径 |

---

## 4｜已经停止继续浪费算力的内容

v0.8.0 起默认停止：

- 无边界继续 Deep Research。
- 每个想法直接正式生 10～50 张图。
- 用漂亮图反向给理论找解释。
- 用颜色、王冠、黑手、武器、科技感、少女感直接判十元。
- 已封版五轴继续主动扩理论。
- 十宫格代替逐样本实验。

只有真实 failure 才允许定点重开。

---

## 5｜v0.8.0 的生产链

```text
自然语言目标
↓
十元 / 五轴结构
↓
十元视觉标准卡
↓
Visual DSL
↓
低成本结构草图
↓
关键三样本
↓
图像审核器
↓
Visual Inbox 入库
↓
PASS / FAIL / AMBIGUOUS
↓
项目生产或 failure-driven reopen
```

这条链已经能服务：

- 角色设计
- 场景设计
- 分镜
- 动态链关键帧
- 十元生克补关系图
- AI 动画生成
- 视觉审美审核
- 黎黎隆等实际项目

---

## 6｜仍未完成

v0.8.0 明确不是最终版。剩余主要工作：

1. 十元 10 张视觉标准卡全部完成并冻结。
2. 完成十元最近邻差分矩阵。
3. NX / ZX / XN / NZ / N / Z / XPZ 等严格关键三样本回归。
4. ZN 六类跨对象回归。
5. XZ 最近邻回归。
6. 生 / 克 / 补最小视觉对照集。
7. 动态链 3 阶段视觉回归。
8. 图像审核器形成稳定重复判定。
9. 累积足够真实 failure family。

---

## 7｜v1.0.0 升级门槛

只有同时达到：

```yaml
ten_visual_cards_frozen: 10/10
nearest_neighbor_matrix_complete: true
shortcut_free_regression_passed: true
cross_object_or_cross_topic_regression_passed: true
image_auditor_repeatable: true
relation_visual_grammar_minimum_set_complete: true
dynamic_chain_visual_regression_complete: true
```

才能发布：

```text
视觉化体系 v1.0.0
```

在此之前不为了“版本看起来厉害”提前叫 V1.0。数字又不会因为写大一点就突然获得科学性。

---

## 8｜本版本读取顺序

```text
VERSION_视觉化体系.yaml
↓
RELEASE_视觉化体系_v0.8.0_20260916.md
↓
CURRENT_视觉化研发阶段.md
↓
00-总收束/README_视觉化总收束R0_20260916.md
↓
低图耗视觉化研发协议_v1.0_20260916.md
↓
tools/README_VisualInbox自动入库.md
```

**v0.8.0 的核心结论：研究材料已经足够丰富，下一阶段的价值来自收束、冻结、验证和生产化，而不是继续堆资料。**
