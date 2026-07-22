---
type: repository-governance-index
status: current
version: v2.1
updated: 2026-07-22T12:01:21+08:00
priority: governance
is_a: 总表
parent: 07-Codex大脑库/Codex大脑总入口.md
index-of: [仓库文件层级, is-a关系, 正本读取顺序, 覆盖关系]
archive_source:
  - 07-Codex大脑库/归档/仓库文件层级与is-a总表_v2.0_20260722_原件.md
---

# 仓库文件层级与 is-a 总表

> 只治理文件身份、读取顺序与覆盖，不改写理论。三元与十元并行。

## 本轮高价值核验表

| 文件路径 | 文件类型 | is-a | 直接上位 | 直接下位 | 现行状态 | 优先级 | 被谁覆盖 | 覆盖谁 | 冲突状态 | 读取入口 | 最后核验 SHA |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `07-Codex大脑库/每次任务必读_十元关系防遗忘清单.md` | 总入口门控 | 强制任务预检 | `AGENTS.md` | 总入口、核心表、任务专项 | canonical-current v1.6.1 | absolute-highest | 核心表版本冲突时需同步 | 任务启动顺序 | 总入口尚未显式列入该文件，依靠 AGENTS 路由 | AGENTS→强制清单 | `1399e4476b993be7b0e242ecfd0024ce5158c8aa` |
| `07-Codex大脑库/Codex大脑总入口.md` | 总入口 | 总入口 | 强制任务预检 | 正本、专项索引、治理总表 | current | highest-entry | 无 | 已整合读取协议 | 尚未显式列强制预检链接 | 强制清单→总入口 | `829736905722cab5301243f4d06aa790655da83c` |
| `07-Codex大脑库/正本读取优先级增补协议_v1.0_2026-07-16.md` | 解释性协议 | 读取顺序形成记录 | 总入口#当前语义优先级 | 无 | integrated-reference | reference | 总入口 | 早期入口缺口 | 无 | 总入口→读取顺序 | `3879898a8abcfc1b21457a6fa098a02ccd62a89c` |
| `07-Codex大脑库/_纠正档案_20260716_zx与剧本人物锚.md` | 纠正档案 | 纠正记录 | 总入口 | 无 | locked-correction-reference | correction-reference | z、zx 现行卡与总入口 | 语音误识别及人物锚错误 | locked 仅限 scope-lock | 总入口→纠正档案 | `824d9cd7d0f446e0c705ecb30ac12b5dd1b1d726` |
| `07-Codex大脑库/待用户确认问题队列.md` | 自动运行交接 | 确认队列 | 总入口 | UQ 项目 | active | highest-for-confirmation-only | 无 | 无 | 不属于理论最高正本 | 总入口→确认队列 | `eba7f120d276bcdeee4358c1723c20832dd4677a` |
| `01-十元系统/十元生补克表.md` | 核心正本 | 十元关系几何位与现行状态总览 | 总入口第14层 | 专项正本索引、审计索引 | current v2.14.1 | canonical-direct | 无 | v2.12 旧快照及已整合关系摘要 | 无 | 总入口→核心表 | `bfde4a637d90ea58d98fd7960a258ff5f3b0a06a` |
| `01-十元系统/十元关系词典.md` | 字典或总表 | 现行关系摘要 | 核心表与专项索引 | 关系短摘要 | current-summary v2.1 | summary-below-canonical | 核心表、专项正本 | v2.0 前旧词典 | 只含部分已锁定关系摘要，不得反向判未列关系未锁定 | 核心表→专项索引→词典 | `06d1333a22046fc5d8a71171cb043d5554a5b34e` |
| `01-十元系统/关系专项/README_十元关系专项正本索引.md` | 字典或总表 | 专项正本路由 | 总入口第14层 | 专项正本、审计索引、补丁生命周期 | current v1.1 | canonical-relation-routing | 无 | v1.0 旧路由 | 已完成补丁与活动补丁分区 | 总入口→核心表→专项索引 | 本轮提交 |
| `x生x并z...同步补丁` | 旧稿 | 已并入同步补丁 | x生x并z 专项正本 | 归档原件 | integrated-legacy | archive-reference | 核心表、词典、强制清单 | 旧待二审与寄生虫方向 | 无 | 专项索引→已并入补丁 | 本轮提交 |
| `xn生xz...同步补丁` | 旧稿 | 已并入同步补丁 | xn生xz 专项正本 | 归档原件 | integrated-legacy | archive-reference | 核心表、词典、强制清单 | 旧身份漂流口径 | 无 | 专项索引→已并入补丁 | 本轮提交 |
| `zx补nx...同步补丁` | 旧稿 | 已并入同步补丁 | zx补nx 专项正本 | 归档原件 | integrated-legacy | archive-reference | 核心表、词典、强制清单 | 旧暗线与结算口径 | 无 | 专项索引→已并入补丁 | 本轮提交 |
| `07-Codex大脑库/仓库文件层级与is-a总表.md` | 字典或总表 | 仓库治理总表 | 总入口 | 治理运行记录 | current v2.1 | governance | 无 | v2.0 快照 | 无 | 总入口→治理总表 | 本轮提交 |
| `07-Codex大脑库/仓库层级清理运行记录.md` | 自动运行记录 | 仓库治理运行账本 | 治理总表 | 历史治理归档 | active v2.1 | log | 无 | v2.0 快照 | 无 | 治理总表→运行账本 | 本轮提交 |

## 本轮结论

1. 核心表版本从治理记录的 v2.8 同步为 v2.14.1。
2. 关系词典 v2.1 是摘要层，不是全部专项正本的反向权威。
3. 三份目标已原位同步的补丁降为 integrated-legacy；原全文归档。
4. 专项索引 v1.1 将活动补丁与已完成补丁分区，停止把所有补丁永久列为 canonical-amendment。
5. 总入口缺少强制预检显式链接仍是风险，本轮因未安全重写长文件而未动。