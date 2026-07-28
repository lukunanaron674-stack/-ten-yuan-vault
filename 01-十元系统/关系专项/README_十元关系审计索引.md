---
type: relation-audit-index
status: current
version: v0.6
updated: 2026-07-25T11:59:48+08:00
system: 十元
is_a: 字典或总表
parent: 01-十元系统/关系专项/README_十元关系专项正本索引.md
index-of:
  - 十元关系审计
  - 待二审关系
  - 已被正式机制覆盖但仍含独有材料的旧审计
priority: audit-routing
covered-by:
  - 01-十元系统/关系专项/README_十元关系专项正本索引.md
canonical_snapshot:
  relation_table: v2.22
  relation_dictionary: v3.3
  rolling_preflight: v8.6
  canonical_index: v1.8
---

# 十元关系审计索引

> 本页路由“审计完成但机制未锁定”的关系文件，以及“已被新正式机制覆盖、但仍含独有案例或证据材料”的旧审计。它们提供边界、反例、未判定理由或历史证据，不覆盖《十元生补克表》几何位、现行定义正本或已锁定关系专项正本。

## 当前正本快照

```text
十元生补克表：v2.22
十元关系词典：v3.3
每次任务必读滚动中枢：v8.6
十元关系专项正本索引：v1.8
```

快照只用于判断审计文件是否已经被正式机制覆盖，不赋予本索引改写理论的权限。发生版本变化时，应先核对核心表与专项正本索引，再更新本页状态。

## 读取规则

1. 先读 `十元生补克表.md` 判断几何位置。
2. 再读 `README_十元关系专项正本索引.md`，确认是否已有正式机制。
3. 已有正式机制时，旧审计只能按 `legacy-covered / evidence-retained` 读取，不得继续调用其旧端点、旧机制或旧“未锁定”状态。
4. 只有正式索引未列出正式机制时，才进入本审计索引补读未锁定证据边界。
5. `audit-only / 未锁定 / position-locked-mechanism-unresolved` 不得被动态链当作已锁定机制调用。
6. 审计文件与关系词典冲突时，只能撤回旧案例资格或标记冲突，不能自动把候选机制抬成正本。
7. 二次、三次审计必须明确前次审计；前次审计也必须在本索引中明确 `supplemented-by`，避免单向断链。
8. 当核心总表误把未过95%的短机制列为“已锁定”时，可由 `current-patch` 暂时覆盖错误锁定状态；核心表原位同步后，补丁必须降级。
9. 正式专项使用 `supersedes`、`supersedes-as-mechanism` 或 `resolves` 指向旧审计后，旧审计即使正文仍写“机制未锁定”“待确认”，也只保留历史证据资格。
10. 本索引版本快照滞后时，不得用旧快照否定当前专项正本；快照只描述核验时点，不构成覆盖。

## 当前审计路由

| 关系 | 文件 | 文件类型 | is-a | 直接上位 | 直接下位 | 状态 | 优先级 | 覆盖关系 | 冲突状态 | 最后核验 SHA |
|---|---|---|---|---|---|---|---|---|---|---|
| `nx 克 x并z` | `nx克x并z_已锁定状态撤回与接口候选保留补丁_20260720.md` | 当前补丁 | 十元关系锁定状态纠正补丁 | `十元生补克表.md#nx克x并z` | `nx克x并z_不认领是否切断身份壳接口机制审计_20260719.md` | position-locked-mechanism-unresolved | current-patch | covers 核心表旧“已锁定”状态；supplements 20260719 专项审计 | 现行必读 v8.6 仍列为不得擅自锁定；补丁不得越级成为正式机制 | `6b8d36bb41e788574fc41092e74d974c335f4840` |
| `nz 生 nx` | `nz生nx_柔情停靠是否降低方向认领机制审计_20260719.md` | 待二审 | 十元关系审计 | `十元生补克表.md#nz生nx` | 无 | 审计完成·机制未锁定 | audit-only | conflicts-with 核心表旧锁定口径；现行核心表已撤回旧锁定资格 | 必读 v8.6 仍列为未锁定；不得按稳定人物本体生成调用 | `dbed3d264e61031599b293a80513996259adf568` |
| `zn 生 n` | `zn生n_意义扩大承接边界机制二次审计_20260719.md` | 旧稿 | 已覆盖关系审计／证据保留 | `十元生补克表.md#zn生n` | 无 | legacy-covered / evidence-retained | legacy-evidence-only | superseded-by `zn生n_意义撤回推出资格并生成持续承载正式机制_20260723.md`；UQ-004 已由正式专项 resolves | 旧“机制未锁定”状态已失效；只保留候选形成、反例与中介排除材料 | `52cedf0302e18f798f09dacb22d0f23a6e6ac000` |
| `xz 生 zx` | `xz生zx_危险迫使潜在权能公开还是仅显影二次审计_20260720.md` | 旧稿 | 已覆盖关系审计／证据保留 | `十元生补克表.md#xz生zx` | 无 | legacy-covered / evidence-retained | legacy-evidence-only | superseded-as-mechanism by `xz生zx_危险造成决定空位并生成临时公开权能正式机制_20260723.md` | 旧“机制未锁定”状态已失效；只保留显影与生成区分、案例污染和测试材料 | `a7b73573b1c99280d20494fce9e43ec3851dc95e` |
| `nz 克 x` | `nz克x_关系保留压缩独占边界机制审计_20260719.md` | 旧稿 | 已覆盖关系审计／证据保留 | `十元生补克表.md#nz克x` | 无 | legacy-covered / evidence-retained | legacy-evidence-only | covered-by `nz克x_关系余温压缩关系控制边界正式机制_20260719.md` | 旧审计不得覆盖正式机制 | `888a9045d1825881a55847a9970f9cfe6f4ca4b8` |
| `x并z 克 nz` | `x并z克nz_身份壳侵蚀关系余温机制审计_20260719.md` | 旧稿 | 已覆盖关系审计／证据保留 | `十元生补克表.md#x并z克nz` | 无 | legacy-covered / evidence-retained | legacy-evidence-only | covered-by 正式专项、关系词典 v3.3、必读中枢 v8.6 | 旧《色，戒》太太团案例资格已撤回；旧审计不得覆盖正式机制 | `d33a1c6d50aba7254a60f30c1f1bee9bba9eefa5` |
| `xz 克 zn` | `xz克zn_危险临界压缩意义机制审计_20260718.md` | 待二审 | 十元关系初次审计 | `十元生补克表.md#xz克zn` | 二次审计 | position-locked-mechanism-unresolved | audit-only | supplemented-by 二次审计 | 初审不是正式机制 | `1c6b569a9335f7c47560ee528286070423cad67a` |
| `xz 克 zn` | `xz克zn_危险测试意义而非自动摧毁二次审计_20260719.md` | 待二审 | 十元关系二次审计 | 初次审计 | 三次审计 | position-locked-mechanism-unresolved | audit-only | supplements 初次审计；supplemented-by 三次审计 | 三轮审计均未过95%，不得当正式机制 | `e3daf4de3bf32fe7cacc396343c5f2cd1fde0ac6` |
| `xz 克 zn` | `xz克zn_自然危险能否改写意义无条件性三次审计_20260720.md` | 待二审 | 十元关系三次审计 | 初次、二次审计 | 无 | position-locked-mechanism-unresolved | audit-only | supplements 初次、二次审计 | 必读 v8.6 仍列为未锁定；自然危险只能证明实践压缩与意义排序，未证明稳定意义改判 | `2f8b3a78b0ad775f67732f66175d5a33df169e52` |
| `x 克 z` | `x克z_对象门控机制审计_20260718.md` | 旧稿 | 已覆盖关系审计／证据保留 | `十元生补克表.md#x克z` | 方志敏文稿出口对象链等独有案例候选 | legacy-covered / evidence-retained | legacy-evidence-only | covered-by `x克z_掌握认可接口压制确认正式机制_20260719.md` | 文件正文仍自称“机制锁定”，不得按该状态读取；正式 z 端点以现行正本为准 | `8103be995ec6f17c916757bb5ac34aec93efd249` |

## 上下位关系

```text
README_十元关系专项正本索引
→ parent / covered-by
README_十元关系审计索引
→ index-of
未锁定关系审计、二次审计、三次审计、当前纠正补丁、已覆盖但保留证据的旧审计
```

- `zn生n...二次审计`：已被 20260723 正式专项 supersedes，并由正式专项解决 UQ-004；旧未锁定状态失效，只保留证据。
- `xz生zx...二次审计`：已被 20260723 正式专项 supersedes-as-mechanism；只保留“显影还是生成”的历史边界材料。
- `nx克x并z...补丁`：当前补丁；只撤回旧错误“已锁定”状态，保留接口候选，不建立正式机制。
- `nz生nx...审计`：待二审；只保留状态层候选，不得按正式机制或稳定人物生成调用。
- `xz克zn` 三轮审计：初审→二审→三审形成连续 evidence 链，三轮都受核心表和专项正本索引路由约束，均未锁定。
- 已被正式专项覆盖的 `nz克x`、`x并z克nz`、`x克z` 旧审计仅保留独有材料。

## 禁止越级

以下写法一律视为读取错误：

```text
审计完成 = 正式机制
位置锁定 = 机制锁定
撤回旧案例 = 新候选自动成为正本
二次或三次审计 = 覆盖现行定义正本
正式专项已 supersedes 旧审计 = 旧审计仍可用“未锁定”状态覆盖正本
旧审计正文仍写“机制锁定” = 仍可覆盖后续正式机制
核心总表短机制列在“已锁定” = 可以无视专项审计未过95%
路径别名 = 第二份并列正本
旧版本快照 = 可以覆盖当前核心表或专项正本
```