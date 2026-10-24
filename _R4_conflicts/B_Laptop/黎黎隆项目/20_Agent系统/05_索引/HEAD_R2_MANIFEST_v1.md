# HEAD-R2-MANIFEST｜六头像资产可复现入口 v1

> 工单：`674-151`（HEAD-R2-MANIFEST｜六头像资产可复现入口修复）｜父工单 `674-96`
> 作用：把 674-152（MAIN03-6CHAR-STRESS 六角色压力测试）的资产前置固定成 **可被后续 Codex 精确恢复** 的最小 handoff。
> 遵守：`LOCAL_ASSET_MANIFEST_SCHEMA.md` / `LOCAL_ASSET_LIBRARY_PROTOCOL.md`（仓库只写逻辑路径与 hash，本机绝对映射不入库）

- schema_version: `1.2`
- generated_at: `2026-10-06`
- root_id: `CHAR_REF`
- 本次动作：**只做定位与 SHA 定向校验**（只算这 6 个目标文件），未移动/删除/重扫全库，未生图、未跑 ComfyUI、未做审美判定
- 未改动：角色 canonical / Q / Canvas / .gitignore

## 1. 六项 handoff

| visual_id | character_id（name_hint） | local_path（vault 相对） | sha256（本次实测） | size_bytes | source_status | identity_boundary |
|---|---|---|---|---:|---|---|
| H01 | UNKNOWN（无 name_hint，未注册视觉候选） | `黎黎隆项目/03_角色/角色库/05_头像与高清素材/头像切片79/H01.png` | `259e60300f55c60515d4859c27261f11657075b5e232318007a9c33da2caee39` | 128136 | `INDEXED__HEAD_ONLY_DESIGN_PENDING`（user_selected=false） | **UNKNOWN**：无文字设计登记、无世界区域、无 P00 色桶；不得推断姓名/身份/画风归属 |
| H04 | H04｜旧门看守人 | `黎黎隆项目/03_角色/角色库/青桶头像四宫格候选_20260929/H04_四宫格候选.png` | `13b1b40120fa0ef6f02a88a0f3501ba4de1dca6e615887efcaa55bb4fc890267` | 2741595 | `USER_SELECTED__FOUR_GRID__RESYNC_VERIFIED` | 文字设计已登记（角色设计 md + 故事种子 md）；world_region=`cross_region`（跨区边境归返/身份连续性验证） |
| H06 | H06｜钢铁教派主教（青F-Q0） | `黎黎隆项目/03_角色/角色库/青桶头像四宫格候选_20260929/H06_四宫格候选.png` | `941daa3f513998db578ab7ffdcab6525f56f83a9de9fed610892ee0578d0c729` | 2704746 | `USER_SELECTED__FOUR_GRID__RESYNC_VERIFIED` | 仅 name_hint 与池标签，未做身份核验；visual_readiness=`FOUR_GRID_CANDIDATE_NEEDS_IDENTITY_CHECK` |
| H08 | UNKNOWN（无 name_hint，未注册视觉候选） | `黎黎隆项目/03_角色/角色库/05_头像与高清素材/头像切片79/H08.png` | `7b92470b94d4d4989361093f640aef74148a14d9c9cf35e9857d12e39b8dd1f9` | 159141 | `INDEXED__HEAD_ONLY_DESIGN_PENDING`（user_selected=false） | **UNKNOWN**：无文字设计登记、无世界区域、无 P00 色桶；不得推断 |
| H09 | H09｜返身位登记员（青F-Q0） | `黎黎隆项目/03_角色/角色库/青桶头像四宫格候选_20260929/H09_四宫格候选.png` | `f570e50cf083a7e664abf569df762a8b3e1e88589d2f164dbefe2e3c81ce33ee` | 2712432 | `USER_SELECTED__FOUR_GRID__RESYNC_VERIFIED` | 仅 name_hint 与池标签，未做身份核验；visual_readiness=`FOUR_GRID_CANDIDATE_NEEDS_IDENTITY_CHECK` |
| H10 | UNKNOWN（无 name_hint，未注册视觉候选） | `黎黎隆项目/03_角色/角色库/05_头像与高清素材/头像切片79/H10.png` | `18168aa1f3f749fa9dd93738aabb038a2390d91b16e44703e81b7cd044f1ea0c` | 144753 | `INDEXED__HEAD_ONLY_DESIGN_PENDING`（user_selected=false） | **UNKNOWN**：无文字设计登记、无世界区域、无 P00 色桶；不得推断 |

### 两类视图，不要混用

- **H04 / H06 / H09** = `FOUR_GRID_CANDIDATE`（四宫格候选，2.6–2.7 MB，含全身/45°/头部/头部45° 四视图）
- **H01 / H08 / H10** = `HEAD_ONLY`（头像切片，128–159 KB，单头像，无全身比例信息）

后续 IMAGE worker 必须按 `best_view` 取用：做中景/全身压力测试时，H01/H08/H10 **不能**当作四宫格替代品。

## 2. SHA 交叉校验结果

| visual_id | 本次实测 | 历史记录来源 | 结论 |
|---|---|---|---|
| H04 | `13b1b401…890267` | `ASSET-RESYNC-P0-H04-H06-H09-001.json` 期望值 | ✅ 完全一致 |
| H06 | `941daa3f…d0c729` | 同上 | ✅ 完全一致 |
| H09 | `f570e50c…e33ee` | 同上 | ✅ 完全一致 |
| H01 | `259e6030…aee39` | `00_总览/图片定位与验证_20260930/SHA256SUMS_全部图片.txt` | ✅ 完全一致 |
| H08 | `7b92470b…dd1f9` | 同上 | ✅ 完全一致 |
| H10 | `18168aa1…f1ea0c` | 同上 | ✅ 完全一致 |

六张均 `FOUND_EXACT_SHA`，无 MISSING、无 NAME_SHA_MISMATCH。

## 3. codex_read_entry（后续 worker 恢复方式）

```yaml
read_entry:
  root_id: CHAR_REF
  base: vault 相对路径（本机绝对映射保存在 .local_asset_roots.json，不入库）
  per_asset:
    - visual_id: H01
      relative_path: 黎黎隆项目/03_角色/角色库/05_头像与高清素材/头像切片79/H01.png
      expect_sha256: 259e60300f55c60515d4859c27261f11657075b5e232318007a9c33da2caee39
      mode: READ_ONLY
    - visual_id: H04
      relative_path: 黎黎隆项目/03_角色/角色库/青桶头像四宫格候选_20260929/H04_四宫格候选.png
      expect_sha256: 13b1b40120fa0ef6f02a88a0f3501ba4de1dca6e615887efcaa55bb4fc890267
      mode: READ_ONLY
    - visual_id: H06
      relative_path: 黎黎隆项目/03_角色/角色库/青桶头像四宫格候选_20260929/H06_四宫格候选.png
      expect_sha256: 941daa3f513998db578ab7ffdcab6525f56f83a9de9fed610892ee0578d0c729
      mode: READ_ONLY
    - visual_id: H08
      relative_path: 黎黎隆项目/03_角色/角色库/05_头像与高清素材/头像切片79/H08.png
      expect_sha256: 7b92470b94d4d4989361093f640aef74148a14d9c9cf35e9857d12e39b8dd1f9
      mode: READ_ONLY
    - visual_id: H09
      relative_path: 黎黎隆项目/03_角色/角色库/青桶头像四宫格候选_20260929/H09_四宫格候选.png
      expect_sha256: f570e50cf083a7e664abf569df762a8b3e1e88589d2f164dbefe2e3c81ce33ee
      mode: READ_ONLY
    - visual_id: H10
      relative_path: 黎黎隆项目/03_角色/角色库/05_头像与高清素材/头像切片79/H10.png
      expect_sha256: 18168aa1f3f749fa9dd93738aabb038a2390d91b16e44703e81b7cd044f1ea0c
      mode: READ_ONLY
  verify: 读取后比对 sha256；不一致即回写 BLOCKED_SHA_MISMATCH，不得继续
  forbidden: [移动, 重命名, 覆盖, 删除, 生图, ComfyUI, 审美 PASS/FAIL 判定]
  machine_readable: HEAD_R2_MANIFEST_v1.json（同目录）
```

## 4. 遗留 UNKNOWN（显式列出，不留空）

1. H01 / H08 / H10 的**角色身份未定**：候选总表 `name_hint` 为空、`character_registration=UNREGISTERED_VISUAL_CANDIDATE`、`world_region=UNASSIGNED`、`p00_color_bucket=UNASSIGNED`。本清单不推断。
2. H06 / H09 的身份边界**只到 name_hint 层**，未做视觉身份核验（`NEEDS_IDENTITY_CHECK`），不能据此判定“已是该角色”。
3. 六张的 `production_ready` 均为 `false`；本清单只解决**可复现入口**，不授予生产就绪状态。

## 5. DONE 判定

```text
reproducible_source_ready = true
six_assets_exact_sha_verified = true（6/6）
```

六张图均可由后续 IMAGE worker 按本清单的 `relative_path + expect_sha256` 精确恢复。
