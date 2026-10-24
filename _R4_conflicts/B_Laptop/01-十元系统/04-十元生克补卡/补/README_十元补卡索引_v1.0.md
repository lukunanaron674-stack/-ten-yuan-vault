---
type: ten-yuan-single-relation-card-index
relation_kind: 补
status: canonical-current
version: v1.0
updated: 2026-07-28
card_count: 5
card_schema_version: v1.1
memory_record_schema_version: v1.0
---

# 十元补卡索引 v1.0

> 每一组补位单独一张卡；卡内再分A补B与B补A两个方向，不能用一句“互相帮助”代替。

| 补位组 | 状态 | 单卡 |
|---|---|---|
| zx ↔ nx | 已锁定 | [[zx补nx_补卡]] |
| zn ↔ x | 已锁定 | [[zn补x_补卡]] |
| n ↔ x并z | 已锁定 | [[n补x并z_补卡]] |
| xn ↔ z | 已锁定 | [[xn补z_补卡]] |
| xz ↔ nz | 已锁定 | [[xz补nz_补卡]] |

## 版本纪律

- `version`记录理论变化。
- `memory_record_version`记录运行记忆变化。
- 两个补向分别记录缺口变量、案例、拿掉与七项评分。
- 每次账本必须记录实际更新的单卡路径及其起止版本。