# FZM Codex Session Ledger

## B1｜2026-10-23 本地来源人口盘点（L1 初筛，未完成语义判定）

### 可访问源

| 来源 | 实况 | 处理方式 |
|---|---:|---|
| `C:\Users\19308\.codex\sessions` | 629 `.zst` + 12 有效 `.jsonl` + 1 个 0 B 空 `.jsonl` | 原件只读；对压缩件读取首条 session metadata |
| `C:\Users\19308\.codex\archived_sessions` | 78 `.zst` | 原件只读；对压缩件读取首条 session metadata |
| `E:\C_Migration\19308\.codex\sessions` | 与 C 盘 642 个相对路径/文件大小完全对齐 | SHA256 核验后去重；不重复计数 |
| `C:\Users\19308\.codex\session_index.jsonl` | 622 条索引记录 | 只用于候选标题和更新时间，不视作消息证据 |

当前共得到 707 条压缩文件 metadata 行、706 个压缩 session_id，以及 12 个有效未压缩 JSONL session；合并后为 **718 个唯一 session_id**。另有 1 个 0 字节旧 JSONL 文件，无 session metadata，不计入 session 数，登记为 `BLOCKED / EMPTY_SOURCE`。一个 session_id 在本机 sessions 中对应两份不同大小的压缩文件，可能是分段/续接，均保留，不按重复副本删除。

迁移盘副本已核对 642/642 个相对路径/文件大小，642 组 SHA256 均匹配、无不匹配；其中 2 个活跃 JSONL 在计算期间变动，只有 640 组可标 `HASH_MATCH_STABLE`，另外 2 组标 `LIVE_UNSTABLE_MATCH_SNAPSHOT`，不能用瞬时 hash 作最终静态归档凭据。

### 初筛及全量别名召回

索引标题精确词组初筛得到 19 个候选 session_id。之后对本机/归档区 719 个源文件（718 个唯一 session_id，重复 session_id 的两段分别保留）做了 message-text 别名扫描：读取 851,051 行，发现 267 个 session 至少有一条明确方项目别名命中，生成 3,455 条带行号/ordinal/timestamp 的证据记录。标题初筛的 19 个均是定位入口，不是全集。

当前分层：267 个命中 session 暂标 `LIKELY_FZM / SEGMENT_REVIEW_PENDING`；其余 451 个 session 标 `AMBIGUOUS / NO_EXPLICIT_ALIAS`，因为卡号或文件名可能没有项目全名，不能标 `OTHER`。未把整场混合会话升级成 `CONFIRMED_FZM`；需继续逐段识别跨项目边界。

全量解析有 2 条超大 JSONL 记录未能解析（各 1 条，定位见 `FZM_ALL_SESSION_SCAN_SUMMARY.json`）；相关 session 仍部分扫描，不能称无遗漏。文件路径、role 计数、消息命中行列表与 SHA256 状态保存在 `FZM_SESSION_LEDGER.json`。

19 个候选标题/ID见 `FZM_SESSION_LEDGER.json` 的 `title_candidates`。标题只能帮助找候选，跨项目会话须按消息区间拆分。

### 覆盖边界

- 已确认的工作区：`C:\Users\19308\Documents\Obsidian\ten-yuan-vault\方`；`D:\01_创作项目\01_项目\方志敏`；`E:\01_创作项目\01_项目\方志敏`；`E:\Vault冷存\20261005\E_方志敏结项_20260925\方`；另对 `D:\方志敏_活跃` 做只读名称检索。
- 未找到单独 `ten-yuan-fang` worktree；`D:\方志敏` 不存在。
- Vault 里有既存执行索引/Canvas，但未发现 `674-314` 或 L1–L4 会话证据归档。它们不等同于本工单归档。
- 会话原件、`state_*.sqlite`、既有执行索引、旧 Canvas 均未改动。没有读取或外发原始会话内容、秘密或凭据。

## 当前判定

`L1_POPULATION_COMPLETE_WITH_EXCEPTIONS`：所有当前可访问源已枚举；迁移镜像 642/642 文件 hash 匹配，640 对稳定、2 对活跃 JSONL 仍标 `LIVE_UNSTABLE`；78 个归档压缩文件已各自计算 SHA256。718 个 session_id、消息数/role 统计和精确命中行已登记，2 条大记录解析异常及 1 个空源明确留痕。L2 的工具回执抽取、跨项目片段裁定与 L3–L4 仍在进行；详见 `FZM_EXTRACTION_RECEIPT.md`。
