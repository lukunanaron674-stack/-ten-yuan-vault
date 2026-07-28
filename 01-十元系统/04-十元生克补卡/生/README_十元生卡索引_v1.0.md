---
type: ten-yuan-single-relation-card-index
relation_kind: 生
status: canonical-current
version: v1.0
updated: 2026-07-28
card_count: 10
card_schema_version: v1.1
memory_record_schema_version: v1.0
---

# 十元生卡索引 v1.0

> 每一条生关系单独一张卡。每小时研究优先回写对应单卡，不再回写一张总生卡。

| 生位 | 状态 | 单卡 |
|---|---|---|
| zx 生 zn | 未锁定 | [[zx生zn_生卡]] |
| x并z 生 z | 已锁定 | [[x并z生z_生卡]] |
| zn 生 n | 已锁定 | [[zn生n_生卡]] |
| z 生 nz | 未锁定 | [[z生nz_生卡]] |
| n 生 xn | 已锁定 | [[n生xn_生卡]] |
| nz 生 nx | 未锁定 | [[nz生nx_生卡]] |
| xn 生 xz | 已锁定 | [[xn生xz_生卡]] |
| nx 生 x | 未锁定 | [[nx生x_生卡]] |
| xz 生 zx | 已锁定 | [[xz生zx_生卡]] |
| x 生 x并z | 已锁定 | [[x生x并z_生卡]] |

## 版本纪律

- `version`记录理论变化。
- `memory_record_version`记录运行记忆变化。
- 每次账本必须记录实际更新的单卡路径及其起止版本。