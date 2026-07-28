---
type: ten-yuan-single-relation-card-index
relation_kind: 克
status: canonical-current
version: v1.0
updated: 2026-07-28
card_count: 10
card_schema_version: v1.1
memory_record_schema_version: v1.0
---

# 十元克卡索引 v1.0

> 每一条克关系单独一张卡。每小时研究优先回写对应单卡，不再回写一张总克卡。

| 克位 | 状态 | 单卡 |
|---|---|---|
| zx 克 n | 已锁定 | [[zx克n_克卡]] |
| x并z 克 nz | 已锁定 | [[x并z克nz_克卡]] |
| zn 克 xn | 已锁定 | [[zn克xn_克卡]] |
| z 克 nx | 未锁定 | [[z克nx_克卡]] |
| n 克 xz | 已锁定 | [[n克xz_克卡]] |
| nz 克 x | 已锁定 | [[nz克x_克卡]] |
| xn 克 zx | 已锁定 | [[xn克zx_克卡]] |
| nx 克 x并z | 未锁定 | [[nx克x并z_克卡]] |
| xz 克 zn | 未锁定 | [[xz克zn_克卡]] |
| x 克 z | 已锁定 | [[x克z_克卡]] |

## 版本纪律

- `version`记录理论变化。
- `memory_record_version`记录运行记忆变化。
- 每次账本必须记录实际更新的单卡路径及其起止版本。