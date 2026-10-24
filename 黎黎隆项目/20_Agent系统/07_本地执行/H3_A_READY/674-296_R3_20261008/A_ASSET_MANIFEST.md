# A_ASSET_MANIFEST｜674-296 R3 本地素材验收

- audit_id: `674-296-R3-20261008`
- audited_at: `2026-10-08 Asia/Shanghai`
- source: Windows 原始审核仓 `E:\黎黎隆头像审核仓库_v1` + canonical vault `C:\Users\19308\Documents\Obsidian\ten-yuan-vault\黎黎隆项目`
- rule_source: 674-296 R2 checklist (Linear comment `f14f3982-7e64-44c1-8823-9fd2b617d1b2`), 674-294 R3 (2026-10-08), 674-293 current snapshot, 674-173 USER receipts
- scope: H05 / H06 / N14 / S09 + existing scene AST-0284
- generation: none; source files were read only; no image generated; no issue created; no user review field changed
- result: `PARTIAL_BLOCKED`
- counts: `A_READY=0; WAIT_REVIEW=5; MISSING_SOURCE=0; BLOCKED_4080=5`

## Environment gate

- Intended target: Windows RTX 4080 H3 execution host/input path.
- Target host was not reachable from this execution context; therefore `machine_id`, 4080-resolved path and 4080-side stat/read/decode/SHA are `BLOCKED / NOT_VERIFIED` for every row.
- Locally queried `http://127.0.0.1:8188/system_stats` and got `cuda:0 NVIDIA GeForce RTX 3070 Laptop GPU`; local ComfyUI input is `E:\ComfyUI_portable\ComfyUI_windows_portable\ComfyUI\input`. This is explicitly **not** the requested 4080 environment and was not used as a substitute.
- Existing H3 staging copies at `E:\黎黎隆H3可用素材导出_20261008` were read and SHA-compared where applicable; they are not proof of 4080 readability. No copies were placed into the 3070 input.

## Source snapshot evidence

| Input | SHA-256 |
|---|---|
| `03_角色/角色库/10_角色仓库/03_审核数据/asset_index.jsonl` | `a47d978b8e3034ce91d111327910582d781dd465bf978ebb7e555f3c29c88db3` |
| `03_角色/角色库/10_角色仓库/03_审核数据/review_input_manifest_20261008.jsonl` | `61a96f2f47c2c94692587becfce84f561a94e8118e50c57059782e0471e1adf5` |
| `03_角色/角色库/10_角色仓库/03_审核数据/173/user_adjudications_20261008.json` | `a28c3a97b724a852b9303f2a900b0761b2e8793f817ccf440a5402617f4cdbab` |
| `03_角色/角色库/10_角色仓库/03_审核数据/173/review_manifest_snapshot_20261008.json` | `c97abccf5dcb346661e57358f705a664ac89007807c2485b31a5b40c575b4d69` |
| `04_场景/场景库/场景库数据.json` | `0fd33ba12d85770e82005f14446e9f67fd60506d4a2916960258d03085d6995b` |

## Per-asset manifest

| ID / asset | Original Windows file and SHA-256 | Version / USER review scope | Readability and disposition |
|---|---|---|---|
| H05 L2 | `E:\黎黎隆头像审核仓库_v1\L2_四宫格\L2_H05_四宫格_红桶0928.png`; 2,497,364 bytes; `886fdfe486c1daad0d8bab5bd21f61a849c534b3ce2bac962837537795425493`; asset `ASSET-SHA256-886fdfe486c1daad0d8bab5bd21f61a849c534b3ce2bac962837537795425493` | Source label `红桶0928` (asset_index formal `version=UNKNOWN`); 674-173 adjudication `ACCEPTED_STYLE_SAMPLE`, confirmed, applies as style sample only. The four-grid is not promoted to identity PASS/lock. | Original exists and is readable. Export copy `E:\黎黎隆H3可用素材导出_20261008\L2_四宫格_精选对应\L2_H05_四宫格_红桶0928.png` exists and SHA matches. 4080 read `BLOCKED`; `WAIT_REVIEW`. |
| H06 L2 | `E:\黎黎隆头像审核仓库_v1\L2_四宫格\L2_H06_四宫格_青桶0929.png`; 2,704,746 bytes; `941daa3f513998db578ab7ffdcab6525f56f83a9de9fed610892ee0578d0c729`; asset `ASSET-SHA256-941daa3f513998db578ab7ffdcab6525f56f83a9de9fed610892ee0578d0c729` | `青桶0929` is the accepted later version; `L2_H06_四宫格_其它.png` is `REJECTED_OLDER_VERSION` / `SUPERSEDED` (SHA `e2b251054c727ca0e87f3b38b3ba1957c5e6edf83ac89e0fbb6c6c2f4948f494`). H06 selected cell 4 is a separate exact cell receipt, not permission to relabel other versions. | Original exists and is readable. Export copy exists and SHA matches. Derived selected cell 4 exists at `...\173\derived\H06_back_cell4.jpg`, SHA `34de1d31e57dc8c936397c6bfa64a9949b1ec9f8f711c1fc7f936a68b22c2bde`. 4080 read `BLOCKED`; `WAIT_REVIEW`. |
| N14 L2 / selected cell 3 | Parent `E:\黎黎隆头像审核仓库_v1\L2_四宫格\L2_N14_四宫格_红桶0928.png`; 2,758,853 bytes; SHA `e983ef6b3ded987150286934eed6a4c494878c071e85575d299224d0692db292`; asset `ASSET-SHA256-e983ef6b3ded987150286934eed6a4c494878c071e85575d299224d0692db292`. Derived `...\173\derived\N14_cell3.jpg`; SHA `c9b3846e9c6086c2bac4e481c1e9e4e676ff118a824ec9edd47773d71166ad29`; asset `ASSET-SHA256-c9b3846e9c6086c2bac4e481c1e9e4e676ff118a824ec9edd47773d71166ad29`. | Parent cohort label `红桶0928` (formal version field unknown). USER selected **cell 3 only** (`USER_SELECTED_CELL_3`); does not confer four-grid or other-cell PASS. | Parent original and export copy exist; source/export SHA match. Derived cell exists and its SHA matches `asset_index`. 4080 read `BLOCKED`; selected cell stays `WAIT_REVIEW` pending target preflight and scope-specific readiness. |
| S09 L2 / selected cell 3 | Parent `E:\黎黎隆头像审核仓库_v1\L2_四宫格\L2_S09_四宫格_红桶0928.png`; 2,656,768 bytes; SHA `59d091096580dde11653ad2eff25dd137ae24efc21d944066c377749675189fc`; asset `ASSET-SHA256-59d091096580dde11653ad2eff25dd137ae24efc21d944066c377749675189fc`. Derived `...\173\derived\S09_cell3.jpg`; SHA `7ea956c2a5de5a1ef0f9aff03facb92e6b5cd10ace6501edf2920c93685d6309`; asset `ASSET-SHA256-7ea956c2a5de5a1ef0f9aff03facb92e6b5cd10ace6501edf2920c93685d6309`. | Parent cohort label `红桶0928` (formal version field unknown). USER selected **cell 3 only** (`USER_SELECTED_CELL_3`); does not confer four-grid or other-cell PASS. | Parent original and export copy exist; source/export SHA match. Derived cell exists and SHA matches `asset_index`. 4080 read `BLOCKED`; selected cell stays `WAIT_REVIEW` pending target preflight and scope-specific readiness. |
| AST-0284 scene | `C:\Users\19308\Documents\Obsidian\ten-yuan-vault\黎黎隆项目\04_场景\场景库\10_图像仓库\AST-0284__LLL-IMG-83F49E191AE1.png`; 2,436,653 bytes; SHA `ccf676053663eac2e7fa5dd2e724a5f5f582fb51a643b4c8f8cf0a30681e4ed8`; ID `AST-0284` / `SRC-397`. | `I13_洛维恩湖岸台地领_氛围概念`, source `03_持续发散/2026-09-21/场景_I13_洛维恩湖岸台地领_氛围概念_候选01.png`; state `unprocessed · TASK_R0 生产素材清单`; no USER review receipt/version lock found in checked scene record. | Original exists, opens and is readable. It depicts a broad lakeside settlement / cliffs / waterfront quay, but descriptive appearance does not change its registered unprocessed state. 4080 read `BLOCKED`; `WAIT_REVIEW`, not production-ready. |

## Disposition rules applied

- `A_READY=0`: strict 296 R2 requires verified 4080-side stat/read/decode/SHA. That target path is unavailable here. Current 3070 endpoint and E: export folder do not satisfy the 4080 gate.
- H05 remains a style sample only; H06 uses the 0929 later version; N14/S09 inherit only cell 3 selection. No selected cell is expanded to full-grid PASS.
- `MISSING_SOURCE=0` among these five audited requests: all named original source files were found and locally hashed. The inaccessible 4080 host is recorded as `BLOCKED`, not as missing source material.
- Ten-Yuan fields are not inferred from image appearance. Existing scene registry marks AST-0284 non-location/unprocessed; no new Ten-Yuan conclusion added.


## 2026-10-09 Ten-Yuan usage update

The five audited asset results remain unchanged: A_READY=0, WAIT_REVIEW=5, MISSING_SOURCE=0, BLOCKED_4080=5. The user authorized provisional Ten-Yuan use before review; current mappings and exact provenance are recorded in [TEN_YUAN_PROVISIONAL_USE_20261009.md](TEN_YUAN_PROVISIONAL_USE_20261009.md). This update changes planning metadata only, not USER decisions, source review scope, or 4080 reachability.