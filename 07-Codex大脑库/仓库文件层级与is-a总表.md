---
type: repository-governance-index
status: current
version: v2.0
updated: 2026-07-22T04:00:00+08:00
priority: governance
is_a: 总表
parent: 07-Codex大脑库/Codex大脑总入口.md
index-of:
  - 仓库文件层级
  - is-a关系
  - 正本读取顺序
  - 覆盖关系
archive_source:
  - 07-Codex大脑库/归档/仓库文件层级与is-a总表_v1.1_20260721_原件.md
---

# 仓库文件层级与 is-a 总表

> 本表只治理文件身份、读取顺序与覆盖关系，不替代或改写三元、十元理论内容。三元与十元并行，不建立父子派生。

## 关系词

- `parent / child`：文件层级上的直接上下位。
- `implements`：落实上位协议。
- `explains`：解释上位文件，不覆盖它。
- `supplements`：补充但不替代。
- `supersedes / covered-by`：明确覆盖。
- `conflicts-with`：存在未解决冲突。
- `example-of`：案例验证。
- `index-of`：索引入口。

## 当前高价值核验表

| 文件路径 | 文件类型 | is-a | 直接上位 | 直接下位 | 现行状态 | 优先级 | 被谁覆盖 | 覆盖谁 | 冲突状态 | 读取入口 | 最后核验 SHA |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `07-Codex大脑库/Codex大脑总入口.md` | 总入口 | 总入口 | 无 | 正本协议、治理索引、确认队列、纠正档案、关系专项索引 | current | highest-entry | 无 | 已整合的临时读取补丁 | 第14层已显式路由生补克表、专项正本索引、审计索引与治理总表 | 仓库主入口 | `829736905722cab5301243f4d06aa790655da83c` |
| `07-Codex大脑库/正本读取优先级增补协议_v1.0_2026-07-16.md` | 解释性协议 | 读取顺序形成记录 | `Codex大脑总入口.md#当前语义优先级` | 无 | integrated-reference | reference | `Codex大脑总入口.md` | 早期未同步入口状态 | 无；正文已声明冲突时以总入口为准 | 总入口→读取顺序 | `3879898a8abcfc1b21457a6fa098a02ccd62a89c` |
| `07-Codex大脑库/待用户确认问题队列.md` | 自动运行交接 | 确认队列 | `Codex大脑总入口.md` | 无 | active | highest-for-confirmation-only | 无 | 无 | `priority: highest` 仅限确认交接，不是理论最高正本 | 总入口→确认队列 | `eba7f120d276bcdeee4358c1723c20832dd4677a` |
| `07-Codex大脑库/_纠正档案_20260716_zx与剧本人物锚.md` | 纠正档案 | 纠正记录 | `Codex大脑总入口.md` | 无 | locked-correction-reference | correction-reference | z、zx 现行信息量卡及总入口 | 被纠正的误识别与人物锚错误 | `locked` 仅限 `scope-lock` | 总入口→纠正档案→现行正本 | `824d9cd7d0f446e0c705ecb30ac12b5dd1b1d726` |
| `01-十元系统/十元生补克表.md` | 核心正本 | 十元关系几何位与现行状态总览 | `Codex大脑总入口.md#第14层` | 关系专项正本索引、关系审计索引、各关系专项 | current v2.8 | canonical-direct | 无 | v2.6 及三条已并入的未锁定状态 | `zn生n`、`xz生zx`、`z生nz` 已原位标记语义待验收；不再依赖覆盖补丁 | 总入口→第14层→生补克表 | `76593d278fdafa6cf043f6a8ca8ef93a59bee380` |
| `01-十元系统/关系专项/README_十元关系专项正本索引.md` | 字典或总表 | 十元关系专项正本索引 | `Codex大脑总入口.md#第14层` | 正式关系正本、同步补丁、审计索引 | current v1.0 | canonical-relation-routing | 无 | 关系词典旧案例、旧状态与旧摘要的读取优先级 | 新近 integrated-legacy 生命周期尚未全部同步到索引 | 总入口→第14层→专项正本索引 | `a28c8cde68a7f4e3605defa9d7ca1a2fcc274987` |
| `01-十元系统/关系专项/README_十元关系审计索引.md` | 字典或总表 | 十元关系审计索引 | 专项正本索引 | 未锁定审计、二次审计、已覆盖旧审计 | current v0.4 | audit-routing | 专项正本索引 | 无 | 未锁定关系继续在此路由，不得越级覆盖核心表 | 总入口→第14层→专项正本索引→审计索引 | `cb833bc440850ea309e1894fda00a035cdfd223b` |
| `01-十元系统/关系专项/zn生n_核心表母行未锁定状态同步补丁_20260722.md` | 旧稿 | 已并入状态补丁 | `十元生补克表.md#5.6` | 归档原件 | integrated-legacy | archive-reference | `十元生补克表.md` v2.8 | 旧核心表裸读状态 | 无；已完成任务 | 核心表→已并入补丁 | `84e86dc2c9bad0e43fd9d5d9ebb85bfc023d1661` |
| `01-十元系统/关系专项/xz生zx_核心表母行未锁定状态同步补丁_20260722.md` | 旧稿 | 已并入状态补丁 | `十元生补克表.md#5.7` | 归档原件 | integrated-legacy | archive-reference | `十元生补克表.md` v2.8 | 旧核心表裸读状态 | 无；已完成任务 | 核心表→已并入补丁 | `9e07a35bbe6d0fc29c5a134650df6f4e6ebab917` |
| `01-十元系统/关系专项/z生nz_认可关系是否生成不愿结束机制二次审计_20260719.md` | 待二审 | 十元关系审计 | `十元生补克表.md#z生nz` | `UQ-20260718-005` | 审计完成·机制未锁定 | audit-only | `十元生补克表.md` v2.8 的状态摘要 | 旧“完成并显现自然沉淀为停靠”口径 | 不得按正式机制调用 | 核心表→审计索引→本文件 | `4b26a195286fc79e539e5041c15ebcbac7e93fcf` |
| `07-Codex大脑库/十元理论每小时运行记录.md` | 自动运行记录 | 理论运行账本 | `Codex大脑总入口.md` | 历史补记与归档账本 | active v2.0 | highest-for-theory-run-log | 无 | 分散补记的活动账本资格 | 无；已恢复唯一活动入口 | 总入口→理论运行账本 | `ea2d5495fa28c4129f4d9f0f2532f018356c47b9` |
| `07-Codex大脑库/仓库文件层级与is-a总表.md` | 字典或总表 | 仓库治理总表 | `Codex大脑总入口.md` | 治理运行记录、各批次治理条目 | current v2.0 | governance | 无 | v1.1 旧快照 | 无 | 总入口→仓库治理 | 本文件提交 SHA |
| `07-Codex大脑库/仓库层级清理运行记录.md` | 自动运行记录 | 仓库治理运行记录 | 本总表 | 历史治理记录归档 | active v2.0 | log | 无 | 分散治理补记的活动账本资格 | 无；本轮恢复唯一活动入口 | 总入口→仓库治理 | 本文件提交 SHA |
| `07-Codex大脑库/归档/仓库文件层级与is-a总表_v1.1_20260721_原件.md` | 归档 | 历史治理总表快照 | 当前治理总表 | 无 | archived-original | historical-evidence | 当前治理总表 v2.0 | 无 | 原 frontmatter 保留旧状态，仅按路径与上位表判归档 | 当前治理总表→归档 | `11ba9cae8b9e98ed4a6ae09c31da2f1867e28c21` |
| `07-Codex大脑库/归档/仓库层级清理运行记录_截至20260718_原件.md` | 归档 | 历史治理运行记录 | 当前治理运行记录 | 无 | archived-original | historical-evidence | 当前治理运行记录 v2.0 | 无 | 原 frontmatter 保留旧状态，仅按路径与上位表判归档 | 当前治理运行记录→归档 | `144c3abe74be49e69b8f0b77626fdf59babb4921` |

## 本批次治理结论

1. `十元生补克表.md` 已从治理总表中的旧 v2.5 记录同步为当前 v2.8；其身份由“可被当前补丁局部覆盖”改为直接正本，三条未锁定状态已原位进入正文。
2. `zn生n` 与 `xz生zx` 两份状态补丁已经降为 `integrated-legacy / archive-reference`，不再与核心表争夺最高优先级。
3. `z生nz` 二次审计是 `audit-only`，由核心表 v2.8 摘要其未锁定状态，不是专项正本。
4. 理论运行账本已经恢复唯一活动入口；治理运行记录本轮同样恢复为唯一活动入口，不再以补记替代。
5. 两份旧治理文件使用原 blob 归档，不改写其历史内容；机器读取必须先看路径、当前总表和 `covered-by`，不得仅凭归档原件内部旧 `status` 判断现行性。
6. 三元与十元继续并行，所有 `parent / child` 仅表示文件读取层级。
