# Linear ↔ Canvas 状态对账｜2026-10-04

> 目标：核对 Linear 已完成事项是否真实同步到《黎黎隆问题系统.canvas》。Canvas 只做导航；详细证据保留在 Linear / Markdown。

## 本轮结论

当前存在真实的 **Linear → Canvas 状态不同步 / 回退**。

根因不是“Linear 没做事”，而是 2026-10-04 GitHub 端曾因远端缺 canonical Canvas 而按 G0→G9 骨架重新建立同路径镜像；这个镜像没有把此前头像问题系统里已经存在的 Q-CHAR-001.1 / Q-CHAR-001.4 子节点与状态完整增量合并回来。

因此出现：
- Linear 工单显示 DONE；
- 工单回写里甚至写了 changed_files 包含 Canvas；
- 但当前 GitHub main 的总 Canvas 只剩 Q-CHAR-001 汇总节点，没有对应的已关闭子问题状态。

## 对账表

| Linear | 实际产物 / 问题状态 | 当前总 Canvas 同步判断 |
|---|---|---|
| 674-87 | Q-CHAR-001.1 头像身份错配进入真实闭环，先 OPEN 等人工验收 | 历史曾回写；当前 GitHub Canvas 未显示子节点，属于状态回退 |
| 674-88 | S10 专属四宫格完成；用户终审 PASS；Q-CHAR-001.1 = DONE | **未在当前 Canvas 明确显示** |
| 674-90 | 新建 Q-CHAR-001.4 = OPEN/BLOCKED；Q-CHAR-001.3 = REJECTED/UNVERIFIED_HYPOTHESIS，不应进入 Canvas | .4 当前未显示；.3 不进 Canvas 是正确行为 |
| 674-91 | AVATAR-PROBLEM-SYSTEM-v1 冻结；当时要求 Canvas 包含 Q-CHAR-001 / .1 / .4 | **当前 Canvas 未保留该完整头像分支** |
| 674-97 | H04 资产证据包 | 专业证据，不需要独立总 Canvas 节点，应汇入 .4 |
| 674-98 | H04 身份锚分析 | 专业证据，不需要独立总 Canvas 节点，应汇入 .4 |
| 674-110 | 用户终审后关闭 Q-CHAR-001.4 = DONE，并明确要求同步 Canvas | **当前 Canvas 未显示 .4 DONE，属于明确不同步** |
| 674-94 / 99 / 100 / 101 | 来源发现、交接、聚类、证据包 | 属于来源工程，不等于问题关闭，不要求单独写总 Canvas |
| 674-102 | R3 编译 existing Q delta / new candidate；任务明确写“R3 不修改正式 Canvas” | **未同步是设计如此，不算漏同步** |
| 674-126 | IMG-SMOKE-01 PASS：Codex imagegen → PNG → Linear attachment 链路已真实跑通 | 当前总 Canvas G5/G9 未显示该能力通过，应该同步到生产/流程状态 |

## 当前应该显示的关键状态

### G2｜角色稳定

- 总体：IN_PROGRESS
- Q-CHAR-001：ACTIVE
- Q-CHAR-001.1：DONE
  - S10 不再使用 H06 作为身份替代
  - S10 专属头像延展已人工身份验收 PASS
- Q-CHAR-001.4：DONE
  - H04 TL / TR / BR 经专项对照 + 用户终审通过
  - BL 低头遮挡，不纳入通过判定
- Q-CHAR-001.3：REJECTED / UNVERIFIED_HYPOTHESIS
  - 按规则不进入 Canvas
- AVATAR-PROBLEM-SYSTEM-v1：FROZEN
- 父问题仍未关闭：头像 → 四宫格 → 中全景/全身 → 多姿态 → 连续镜头尚未全部闭环

### G3｜场景稳定

- IN_PROGRESS / BLOCKED_ON_APPROVED_BASE_ASSET
- STYLE_DIRECTION_CONFIRMED
- IMAGE_FILE_NOT_YET_IDENTIFIED
- 用户确认过动画背景风格方向，但唯一森林背景原件尚未绑定绝对路径 + SHA256

### G5 / G9｜生产链路

- IMG-SMOKE-01：PASS
- 已验证：Codex built-in imagegen → PNG 文件 → SHA256 → Linear attachment
- 这只证明最小图像执行链可用，不代表正式批量生产已解锁

## 以后必须使用的同步契约

Linear 工单不能仅凭 `status=Done` 认为 Canvas 已同步。每个会改变正式 Q / G 状态的工单，关闭前必须有：

```yaml
q_id:
linear_issue:
old_status:
new_status:
canvas_path: 黎黎隆项目/00_总览/黎黎隆问题系统.canvas
canvas_node_id:
canvas_sha_before:
canvas_sha_after:
canvas_sync: PASS
commit_sha:
receipt:
```

规则：

1. **状态改变必须 patch 既有稳定 node_id，禁止整张 Canvas 重建覆盖。**
2. Linear Done 但 `canvas_sync != PASS` 时，只能标记 `DONE_PENDING_CANVAS_SYNC`，不能视为完全闭环。
3. 674-115 / 674-116 每小时先做增量对账：只读取上次 cursor 之后发生状态变化的 Linear issue。
4. 检出 `Linear状态 != Canvas状态` 时，优先修同步债，不继续往下制造新问题。
5. R3 这类明确写着“不得改正式 Canvas”的研究工单不参与状态同步。
6. 专业子工单（AG-04 / AG-11）不单独占总 Canvas 节点，只回流父 Q。
7. REJECTED / hypothesis 按规则只留 Markdown 审计，不进入 Canvas。

## 本次修复

- 对当前 GitHub 总 Canvas 做增量修复，不重建整图。
- 补回 Q-CHAR-001.1 / Q-CHAR-001.4 的 DONE 状态到角色稳定汇总状态。
- 明确 Q-CHAR-001.3 为 REJECTED 且不进 Canvas。
- 补入 IMG-SMOKE-01 PASS 到生产 / 流程状态。
- 将本文件作为总 Canvas 的状态对账入口。
