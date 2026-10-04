# CHAR-R4-CH003-002｜本地生图提示记录

- task: `CHAR-R4-CH003-002`
- retry_no: `2`
- execution: Codex built-in `image_gen`
- result: CANDIDATE；等待 STYLE_REVIEW 后续流程
- output: `../03_角色/角色库/06_assets/CH-003/CHAR-R4-CH003-002_candidate.png`
- canvas: 941×1672, portrait 9:16, 2×2
- backend exposed seed/model build/workflow ID: no
- previous review: `../reviews/CHAR-R4-CH003-001.style-review.json`

## Reference assets (verified local files)

| Role | Asset ID | Root-relative path | SHA-256 |
|---|---|---|---|
| Edit target / previous candidate | `AST-IMAGE-6E858457` | `CH-003/CHAR-R4-CH003-001_candidate.png` | `6E858457D5E02D58630B0A0D5F235A88159E8A5CC92E7396B8036932674782D9` |
| Identity; head and hat only | `AST-IMAGE-8F4BB563` | `CH-003/CH-003_逃票魔法学徒_06x08设定融合版_主参考.png` | `8F4BB563E8123B958631D163A0298687509D29E62D5BD82BF327C8E06B4970F0` |
| Supporting identity/style | `AST-IMAGE-E6071AC0` | `CH-003/CH-003_逃票魔法学徒_9x16_四宫格设定稿_单人_v1.png` | `E6071AC0E593D95AE8887E910EB3954E7D351E38C53156DD5E9B4FC1F97279EC` |
| Gray-paper watercolor style only | `AST-IMAGE-10BF021C` | `CH-003/CH-003_逃票魔法学徒_9x16_四格_灰纸水彩校准_v1.png` | `10BF021CFAFE7D58E67AF03C33A153BD527922B637087DA1D29D5A973C06F9EF` |

## Final targeted prompt

Use case: illustration-story. Asset type: one exploratory 9:16 character-proportion sheet for CH-003. Image 1 is the previous candidate/edit target; Image 2 is identity reference for face and hat only; Images 3–4 are supplementary same-character/style references only. Do not copy text, speculative clothes, accessories, or layout from references.

IDENTITY: Preserve the same large round face, small features, short black hair with slightly uneven bangs, pale lavender cheek circles, asymmetrical purple living hat, pale diagonal hat band, one slim feather-like top structure, quiet curious expression. Keep head, face, hair, hat, shoulder width, and chest identical in both full-body figures.

BODY STRUCTURE: Make two clearly distinguishable lower-body branches. Upper-left A is compact but not stubby; moderate lower-body extension. Upper-right B has the same head and upper body but a plainly more vertically extended pelvis-below leg-to-torso ratio; natural grounded feet, not extreme long legs. This is an exploratory comparison, not canon.

GARMENT: Replace the broad cape-like silhouette with a clearly separate short charcoal shirt or fitted short jacket, narrow sleeves close to arms, visible straight waist hem and side seams. Separate simple dark shorts/trousers. No connected draped fabric.

STYLE: pale gray-white paper grain, loose uneven dark ink contours, restrained transparent watercolor and dry-brush edges, simple readable flat 2D. Charcoal, muted violet/lavender, pale cool gray/cyan and neutral skin only.

LAYOUT: exact portrait 9:16 clean 2×2 grid with visible gutters. Upper-left full-body A from feather tip to shoes; upper-right full-body B at same scale; lower-left head-and-hat detail; lower-right 45-degree half-body from feather tip through shoulders and chest to below waist, showing head-to-shoulder/chest connection. Same single character in all four panels. No lettering.

VARIABLE DESIGN: Only alter A/B lower-body proportion contrast, make the short upper garment unambiguously separate/non-cape-like, and use the requested lower-right half-body crop.

NEGATIVE: cape, cloak, poncho, robe, mantle, broad triangular drape, long hem, skirt, sash, strap, harness, belt, pouch, bag, tools, key, weapon, jewelry, armor, machinery, extra person, adult comparison, extra panels, labels, text, watermark, neon, new saturated colors, glossy 3D, extreme long legs, stubby legs, standard chibi proportions, changed face/hat/hair/shoulders/chest, differing outfits in A and B.

## Iteration notes

- The first generated revision corrected the clothing and lower-right framing but did not create enough visible A/B leg-ratio contrast; it was not selected.
- A targeted follow-up emphasized a visibly longer leg segment in B while preserving A's head/torso/shoulders/chest and the garment fix. The saved candidate is the resulting image.
- Generation tool did not expose seed, workflow ID, or model build; these are left unknown rather than inferred.
