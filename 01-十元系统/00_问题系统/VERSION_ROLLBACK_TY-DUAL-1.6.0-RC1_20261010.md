---
title: 十元双轨迁移回滚锚点总账
type: tenyuan-versioned-recovery-manifest
status: VERIFIED_GITHUB_REFS
created: 2026-10-10
candidate_version: TY-DUAL-1.6.0-RC1
release_status: CANDIDATE_NOT_MERGED
---
# 2026-10-10｜可回滚版本号与备份（GitHub提交级别）

## 版本清单（均为不可混写的独立提交）
| 版本 | 作用 | 分支（备份入口） | 固定提交SHA | 状态 |
|---|---|---|---|---|
| TY-LEGACY-0.9.0 | 2026-10-07前旧映射体系历史基线 | `rollback/tenyuan-core-pre-feeling-v0.9.0` | `bd8d49ef5c2556b081c921b491be92f2319fa7df` | 旧版本，只读对照 |
| TY-FEELING-1.5.0-R5 / PRE-DUAL-20261010 | 当前main在双轨候选合并前的快照 | `backup/tenyuan-main-before-dual-v1.5.0-20261010` | `614acc68acbf911b67efcbabecb269fd07193106` | 已创建并确认ref |
| TY-DUAL-1.6.0-RC1 | 旧映射+新感受双轨候选第一次完整提交快照 | `backup/tenyuan-dual-track-v1.6.0-rc1-20261010` | `bafcfb39d2f6216aa63c8d9d9b08959466ea0a0e` | 已创建并确认ref |
| TY-DUAL-1.6.0-RC1+ | 后续ZX映射审计与303工单交付工作区 | `fix/tenyuan-mapping-first-feeling-second-20261010` | 流动head；不得当回滚固定SHA | 工作中、PR #57草稿 |

**注意**：版本号 v1.5.0-R5 指的是感受迁移版本登记，本条新创建的备份分支保存的是**2026-10-10 11:29北京时间前后的main仓库完整提交状态**，其中还可能有与十元无关的后续仓库提交；不是声称main HEAD就是2026-10-07当日提交。

## 经Connector实读核对
- main当前目标提交：`614acc68acbf911b67efcbabecb269fd07193106`
- 两条新备份分支均创建成功并通过GitHub branches API重新读取，SHA完全匹配。
- 历史回滚分支`rollback/tenyuan-core-pre-feeling-v0.9.0`也重新读取，SHA匹配。
- 草稿PR: https://github.com/lukunanaron674-stack/-ten-yuan-vault/pull/57 ，**未合并**。
- 这是Git仓库提交快照，不是本地Windows/Obsidian所有未提交文件、媒体和Linear描述的自动备份。

## 安全恢复（需指定目标版本并核对影响范围）
1. 找到上述备份SHA，确认要恢复的是旧映射、感受迁移前主线，还是双轨RC1；以SHA为准，不要只看分支名。
2. **推荐恢复单文件或工作流**：由目标SHA创建新的恢复分支，选择性从旧提交恢复对应文件，生成diff并开PR；保留2026-10-10后用户认可的其他成果。
3. 如果确需恢复整个仓库旧状态：新建独立 `restore/` 分支指向备份SHA，先比较当前main差异并确认资产/自动化影响，禁止对main执行自动`reset --hard`、`force push`、删除历史。大型仓库整体回退需另经作者确认。
4. **Linear问题描述不在Git备份中**：674-303原描述另生成本轮修改前快照文件（本分支），之后只对303追加任务，不覆盖历史内容。
5. Codex和Agent后续读取顺序必须含OLD_CONTEXT→NEW_CONTEXT→COMPARE→双轨均衡调用协议，后备工单在674-93统一登记。

## 目前限制
- 没有执行main上的恢复、更改或PR合并。
- 没有证明本地Agent已经加载新协议，未验证本地未提交数据。
- 新的ZX映射词库仅结构候选，未获得USER给出的新一轮逐词准度分数。
