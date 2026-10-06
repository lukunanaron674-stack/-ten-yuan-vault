# I04 Canvas 来源与范围路径审计

- run_id: `LLL-674-68-20260919-230520-I04-SOURCE-PATH`
- source_issue: `674-68`
- Canvas: `黎黎隆项目/04_场景/黎黎隆_场景参考_I04_骨骼空港_image-well测试_v1.0.canvas`
- checked_at: `2026-09-19T23:05:20+08:00`
- policy: 只读取 Canvas 文件节点路径、路径存在性、项目内既有索引元数据和项目内文件名；不打开、复制或修改项目根目录外图片。

## 结论

1. Canvas 共 25 个节点、23 个 `file` 节点、6 个 edge。
2. `img_1..img_6` 共 6 个节点按 Vault 根目录解析后位于 `黎黎隆项目` 内，且与已完成 `I04-IMG-001..006` 一一对应；本轮不重复处理。
3. 其余 17 个节点的路径均能按 Vault 根目录解析到真实文件，但全部位于 `方` 项目，项目根目录外；它们不是相对路径解析错误，也没有被打开、复制或修改。
4. 若把 Canvas 的 `file` 字段错误地当作 Canvas 所在目录相对路径，前述 6 个项目内节点会产生假缺失；正确规则是按 Vault 根目录解析。
5. 既有 `inventory_unique_验收版.json` 的已记录 SHA256 映射中，这 17 个外部节点没有对应的项目内同哈希归档路径；项目根目录内也没有同名文件。本轮没有重新读取外部图片字节，因此不作视觉同图结论。
6. 本 Canvas 内没有发现新的、尚未处理且位于授权项目根目录内的 I04 场景参考图；本轮不安排视觉分析下一批。

## 已完成且排除的项目内节点

| 节点 | IMAGE-ID | 项目内路径 |
|---|---|---|
| `img_1` | `I04-IMG-001` | `黎黎隆项目/04_场景/04_视觉参考/image-well-test/I04_骨骼空港/q1/openverse_Albany_Whale_World_Whale_skeleton_exhibi_0621e157.jpg` |
| `img_2` | `I04-IMG-002` | `黎黎隆项目/04_场景/04_视觉参考/image-well-test/I04_骨骼空港/q1/openverse_Whale_Skeleton_95a3c0e5.jpg` |
| `img_3` | `I04-IMG-003` | `黎黎隆项目/04_场景/04_视觉参考/image-well-test/I04_骨骼空港/q1/openverse_Whale_skeleton_554ca8bb.jpg` |
| `img_4` | `I04-IMG-004` | `黎黎隆项目/04_场景/04_视觉参考/image-well-test/I04_骨骼空港/q1/wikimedia_Natural_History_Museum_London_Central_Ha_4bd4884f.jpg` |
| `img_5` | `I04-IMG-005` | `黎黎隆项目/04_场景/04_视觉参考/image-well-test/I04_骨骼空港/q1/wikimedia_Skeleton_of_Sperm_Whale_Physeter_macroce_e61d03ad.jpg` |
| `img_6` | `I04-IMG-006` | `黎黎隆项目/04_场景/04_视觉参考/image-well-test/I04_骨骼空港/q1/wikimedia_Whale_skeleton_5jpg_2e2f11e4.jpg` |

## 项目根目录外节点

以下路径均可存在性解析，但位置超出 `黎黎隆项目` 授权根目录；本轮只记录路径，不打开源图。

| 节点 | Canvas 原始路径 | 正确解析位置 | 既有索引 ID | 项目内同哈希路径 |
|---|---|---|---|---|
| `705be960fae46a8b` | `方/07_素材图/临时截图/Pasted image 20260918172638.png` | `方/.../Pasted image 20260918172638.png` | `IMAGE-088` | 未记录 |
| `88dc36e7dc14c73d` | `方/07_素材图/临时截图/Pasted image 20260918173724.png` | `方/.../Pasted image 20260918173724.png` | `IMAGE-124` | 未记录 |
| `222a5fecc9a94aee` | `方/07_素材图/临时截图/Pasted image 20260918173812.png` | `方/.../Pasted image 20260918173812.png` | `IMAGE-238` | 未记录 |
| `83bd4162692a1aa6` | `方/07_素材图/临时截图/Pasted image 20260918172906.png` | `方/.../Pasted image 20260918172906.png` | `IMAGE-131` | 未记录 |
| `78f3dc7673908d83` | `方/07_素材图/临时截图/Pasted image 20260918173316.png` | `方/.../Pasted image 20260918173316.png` | `IMAGE-214` | 未记录 |
| `167910629a61757c` | `方/07_素材图/临时截图/Pasted image 20260918172615.png` | `方/.../Pasted image 20260918172615.png` | `IMAGE-070` | 未记录 |
| `9b0d441dba1be8e5` | `方/07_素材图/临时截图/Pasted image 20260918171613.png` | `方/.../Pasted image 20260918171613.png` | `IMAGE-158` | 未记录 |
| `941d6567089991db` | `方/07_素材图/临时截图/Pasted image 20260918172001.png` | `方/.../Pasted image 20260918172001.png` | `IMAGE-086` | 未记录 |
| `dfac004b16d68304` | `方/07_素材图/临时截图/Pasted image 20260918172349.png` | `方/.../Pasted image 20260918172349.png` | `IMAGE-011` | 未记录 |
| `50097ff01c891cd8` | `方/07_素材图/临时截图/Pasted image 20260918171405.png` | `方/.../Pasted image 20260918171405.png` | `IMAGE-183` | 未记录 |
| `fadd7ef8b283c8f0` | `方/07_素材图/临时截图/Pasted image 20260918171841.png` | `方/.../Pasted image 20260918171841.png` | `IMAGE-144` | 未记录 |
| `23cdd78b088cb192` | `方/07_素材图/临时截图/Pasted image 20260918172039.png` | `方/.../Pasted image 20260918172039.png` | `IMAGE-212` | 未记录 |
| `c4079281472cf2d1` | `方/07_素材图/临时截图/Pasted image 20260918172557.png` | `方/.../Pasted image 20260918172557.png` | `IMAGE-330` | 未记录 |
| `e4fda2e3d9efcc94` | `方/07_素材图/临时截图/Pasted image 20260918171508.png` | `方/.../Pasted image 20260918171508.png` | `IMAGE-196` | 未记录 |
| `87e3d67427ccd528` | `方/07_素材图/临时截图/Pasted image 20260918171351.png` | `方/.../Pasted image 20260918171351.png` | `IMAGE-010` | 未记录 |
| `093e43fededc5312` | `方/07_素材图/临时截图/Pasted image 20260918171240.png` | `方/.../Pasted image 20260918171240.png` | `IMAGE-314` | 未记录 |
| `ea77b94085aab976` | `方/07_素材图/临时截图/5fcc8c7c868246efd41c01ddc2ec00be.png` | `方/.../5fcc8c7c868246efd41c01ddc2ec00be.png` | `IMAGE-009` | 未记录 |

## 下一步

不安排新的 I04 视觉分析批次。若要处理这 17 个节点，必须先由用户明确授权跨出 `黎黎隆项目` 根目录，或在项目内提供/归档可核验替代来源；在此之前保持 `OUT_OF_SCOPE`，不打开、不复制、不修改。

`h3=NOT_RUN | git_push=NOT_RUN | originals_modified=NOT_MODIFIED`
