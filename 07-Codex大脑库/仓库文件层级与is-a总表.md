---
type: repository-governance-index
status: current
version: v3.1
updated: 2026-07-25T20:04:22+08:00
priority: governance
is_a: 总表
parent: 07-Codex大脑库/Codex大脑总入口.md
index-of: [仓库文件层级, is-a关系, 正本读取顺序, 覆盖关系]
archive_source:
  - 07-Codex大脑库/归档/仓库文件层级与is-a总表_v2.0_20260722_原件.md
---

# 仓库文件层级与 is-a 总表

> 只治理文件身份、读取顺序与覆盖，不改写理论。三元与十元并行；文件 parent/child 不代表理论派生。

## 当前高价值核验表

| 文件路径 | 文件类型 | is-a | 直接上位 | 直接下位 | 现行状态 | 优先级 | 被谁覆盖 | 覆盖谁 | 冲突状态 | 读取入口 | 最后核验 SHA |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `07-Codex大脑库/每次任务必读_十元关系防遗忘清单.md` | 总入口门控 | 强制任务预检与滚动推进中枢 | `AGENTS.md` | 总入口、核心表、关系词典、专项索引、理论运行账本 | canonical-current v8.14 | absolute-highest（仅任务启动门控） | 与核心表版本冲突时必须同步 | 任务启动顺序与理论断点 | 已与总入口建立显式反链；不覆盖理论正本 | AGENTS→强制清单↔总入口 | `8bed2b3faa810fcd221e7ed68152ff043aaef4ec` |
| `07-Codex大脑库/Codex大脑总入口.md` | 总入口 | 正本与索引路由入口 | 强制任务预检 | 核心正本、专项索引、审计索引、治理总表 | current | highest-entry | 无 | 已整合读取优先级协议 | 强制必读反链已闭环；第14层理论读取顺序保持不变 | 强制清单↔总入口 | `dcb4ce15d173a5a0a1fed2faa88e0a053f7081b2` |
| `07-Codex大脑库/正本读取优先级增补协议_v1.0_2026-07-16.md` | 解释性协议 | 读取顺序形成记录 | 总入口#当前语义优先级 | 无 | integrated-reference v1.1 | reference | 总入口 | 早期入口缺口 | 无 | 总入口→读取顺序 | `3879898a8abcfc1b21457a6fa098a02ccd62a89c` |
| `07-Codex大脑库/_纠正档案_20260716_zx与剧本人物锚.md` | 纠正档案 | 用户纠正记录 | 总入口 | 无 | locked-correction-reference | correction-reference | z、zx 现行卡与总入口 | 语音误识别及人物锚错误 | locked 仅限 scope-lock | 总入口→纠正档案 | `824d9cd7d0f446e0c705ecb30ac12b5dd1b1d726` |
| `07-Codex大脑库/待用户确认问题队列.md` | 自动运行交接 | 确认队列 | 总入口 | 活动 UQ-003、UQ-005；已解决 UQ-004 | active / updated 2026-07-24 | highest-for-confirmation-only | 正式专项可通过 `resolves` 关闭具体项目 | 历史提问证据 | UQ-005 与当前 `z 生 nz` 未锁定状态一致；不得因治理任务擅自关闭 | 总入口→确认队列 | `8f97eb77239948512ce6f24bc5b721f7114b6915` |
| `01-十元系统/十元生补克表.md` | 核心正本 | 十元关系几何位与现行状态总览 | 总入口第14层 | 专项正本索引、审计索引 | current v2.22 | canonical-direct | 无 | 关系摘要与状态来源 | 无 | 总入口→核心表 | `f7f0e6901210eb1e1173a9376891354ed04d0375` |
| `01-十元系统/十元关系词典.md` | 字典或总表 | 现行关系摘要 | 核心表与专项索引 | 关系短摘要 | current-summary v3.3 | summary-below-canonical | 核心表、专项正本 | 旧词典摘要 | 不得据缺项反推未锁定 | 核心表→专项索引→词典 | `2b8e37d63b631828b4bb9a28d02caf16101dbc0e` |
| `01-十元系统/关系专项/README_十元关系专项正本索引.md` | 字典或总表 | 专项正本与补丁生命周期路由 | 总入口第14层 | 专项正本、审计索引、补丁 | current v1.8 | canonical-relation-routing | 无 | 专项正本与补丁身份 | 两份长补丁旧 current 字段已被索引撤销；仍待文件自身无损降级 | 总入口→核心表→专项索引 | `62341e2bb72ba535d5cc1b34d8a895a42ccc3b9e` |
| `01-十元系统/关系专项/README_十元关系审计索引.md` | 字典或总表 | 未锁定审计、历史证据与纠正补丁路由 | 专项正本索引 | 未锁定审计、二次/三次审计、已覆盖旧审计 | current v0.6 | audit-routing | 专项正本索引 | 审计文件读取身份 | 旧快照已同步；`zn生n`、`xz生zx` 旧二审已降为 evidence-only | 总入口→核心表→专项索引→审计索引 | `bc247b54f9a918bf8497c0d80b296a36a377540a` |
| `01-十元系统/关系专项/zn生n_意义撤回推出资格并生成持续承载正式机制_20260723.md` | 专项正本 | 十元关系正式机制 | 核心表几何位 | 旧二次审计、UQ-20260718-004 | canonical-current v1.0 | canonical-relation | 无 | 旧 `zn生n` 审计与队列分歧 | `resolves: UQ-20260718-004`；旧二审只作 evidence | 核心表→专项索引→本文件 | `64c552622fdcc3ad65c6f8dc2b7166d8f38c79b5` |
| `01-十元系统/关系专项/zn生n_意义扩大承接边界机制二次审计_20260719.md` | 旧稿 | 已覆盖关系审计／证据保留 | 核心表几何位 | 无 | legacy-covered / evidence-retained | legacy-evidence-only | `zn生n` 正式专项 | 旧候选形成、反例与中介排除材料 | 正文“机制未锁定”已失效；不得覆盖正式专项 | 专项索引→审计索引→旧证据 | `52cedf0302e18f798f09dacb22d0f23a6e6ac000` |
| `01-十元系统/关系专项/xz生zx_危险造成决定空位并生成临时公开权能正式机制_20260723.md` | 专项正本 | 十元关系正式机制 | 核心表几何位 | 旧二次审计 | canonical-current | canonical-relation | 无 | 旧 `xz生zx` 审计 | `supersedes-as-mechanism` 已建立；旧二审只按 evidence-only | 核心表→专项索引→本文件 | `c2be448641f2bf82124472e5e07807d1bf7f7416` |
| `01-十元系统/关系专项/xz生zx_危险迫使潜在权能公开还是仅显影二次审计_20260720.md` | 旧稿 | 已覆盖关系审计／证据保留 | 核心表几何位 | 无 | legacy-covered / evidence-retained | legacy-evidence-only | `xz生zx` 正式专项 | 显影/生成区分、案例污染与测试材料 | 正文“机制未锁定”已失效；不得覆盖正式专项 | 专项索引→审计索引→旧证据 | `a7b73573b1c99280d20494fce9e43ec3851dc95e` |
| `01-十元系统/关系专项/xz克zn_自然危险能否改写意义无条件性三次审计_20260720.md` | 待二审 | 十元关系三次审计 | 初次、二次审计 | 无 | position-locked-mechanism-unresolved | audit-only | 核心表与专项索引路由 | 前两轮审计的自然危险纯化测试 | 必读 v8.14 仍列为未锁定；不得越级正式调用 | 专项索引→审计索引→三审 | `2f8b3a78b0ad775f67732f66175d5a33df169e52` |
| `n补x并z_核心摘要与总词典旧建筑比喻撤回同步补丁_20260721.md` | 旧稿 | 已并入正式机制同步补丁 | n补x并z 专项正本 | 无 | integrated-legacy v1.1 | archive-reference | 核心表、词典、强制必读 | 旧建筑比喻 | 无 | 专项索引→已并入补丁 | `55f587e90612e8abc68c2f41b16abeffc2060602` |
| `xz补nz_总词典旧题材口径撤回与正式机制同步补丁_20260720.md` | 旧稿待降级 | 同步补丁兼独有审计材料 | xz补nz 专项正本 | 无 | lifecycle-only / frontmatter-current | archive-pending | 核心表、词典、强制必读、正式专项、专项索引 v1.8 | 旧题材口径 | 文件内 current 字段已失效；不得恢复理论覆盖权 | 专项索引→生命周期待修 | `bf0b2ac31ab08031bf9422bf5f166c3594f20f28` |
| `x并z克nz_总词典旧太太团口径撤回与正式机制同步补丁_20260721.md` | 旧稿待降级 | 同步补丁兼审计材料 | x并z克nz 专项正本 | 无 | lifecycle-only / frontmatter-current | archive-pending | 正式专项、核心表、词典、强制必读、专项索引 v1.8 | 旧太太团题材口径 | 文件内 current 字段已失效；不得恢复理论覆盖权 | 专项索引→生命周期待修 | `d5699ca31e642697bac2a6c79c738ac0e839150b` |
| `07-Codex大脑库/十元理论每小时运行记录.md` | 自动运行记录 | 十元理论唯一活动账本 | 强制必读中枢 | Git 历史与 previous_active_blob | active v10.12 | highest-log | 无 | 当前理论运行状态 | 不得被分散补记替代 | 强制清单→理论账本 | `9aacd692243e9b1d899f0eccbcf858d9b6040f29` |
| `07-Codex大脑库/归档/十元理论每小时运行记录_v6.6_截至20260723-1829_原件.md` | 归档 | 理论运行账本历史原件 | 当前理论运行账本 | 无 | archived-source | archive | 当前理论运行账本 | v6.6 历史运行内容 | 归档内部 active 字样不代表现行状态 | 当前理论账本→Git历史/旧归档 | 由提交 `01bf771601c2896240bbcddf2d2cfd682bdfa6b6` 核验 |
| `07-Codex大脑库/仓库文件层级与is-a总表.md` | 字典或总表 | 仓库治理总表 | 总入口 | 治理运行记录 | current v3.1 | governance | 无 | 历史治理快照 | 无 | 总入口→治理总表 | 本轮提交后回读核验 |
| `07-Codex大脑库/仓库层级清理运行记录.md` | 自动运行记录 | 仓库治理唯一活动账本 | 治理总表 | 历史治理归档 | active v3.1 | log | 无 | 历史治理快照 | 无 | 治理总表→运行账本 | 本轮提交后回读核验 |

## 本轮结论

1. 强制必读中枢已同步到 v8.14，理论唯一运行账本同步到 v10.12。
2. 治理运行账本的总表登记由错误的 `active v2.9，待本轮更新` 修正为 `active v3.1`。
3. 关系审计索引保持 v0.6；`zn生n`、`xz生zx` 旧二审继续只按 evidence-only 读取。
4. `xz克zn` 三次审计与强制必读 v8.14 的未锁定状态一致，不越级调用。
5. 两份长补丁继续保留全文；文件自身 frontmatter 仍待无损降级，但其理论覆盖资格已由专项索引与治理总表撤销。
6. UQ-003、UQ-005 继续活动；本轮没有理论 `resolves` 证据，不做治理性关闭。
7. 三元与十元继续并行，文件层级关系不构成理论父子派生。