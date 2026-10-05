# CHAR-R4-CH003-001｜本地生图提示记录

- task: `CHAR-R4-CH003-001`
- execution: `Codex built-in image_gen`
- status: `CANDIDATE`
- requested layout: `9:16`, 2×2 four-panel sheet
- output: `../03_角色/角色库/06_assets/CH-003/CHAR-R4-CH003-001_candidate.png`
- generation controls exposed by backend: prompt + reference images; seed, model build, workflow ID, and explicit pixel-size controls were not exposed.
- attempts: 2; first preview was not selected because the outer garment read as cape-like. The second prompt made a targeted clothing correction. Only the final output is copied into the project asset directory.

## Verified reference assets

| Role | Asset ID | Relative path (root `LLL_CHAR_ASSETS`) | SHA-256 |
|---|---|---|---|
| Primary identity; use head/face/hat only | `AST-IMAGE-8F4BB563` | `CH-003/CH-003_逃票魔法学徒_06x08设定融合版_主参考.png` | `8F4BB563E8123B958631D163A0298687509D29E62D5BD82BF327C8E06B4970F0` |
| Supporting identity and prior single-person proportion/style sheet | `AST-IMAGE-E6071AC0` | `CH-003/CH-003_逃票魔法学徒_9x16_四宫格设定稿_单人_v1.png` | `E6071AC0E593D95AE8887E910EB3954E7D351E38C53156DD5E9B4FC1F97279EC` |
| Selected gray-paper watercolor style calibration | `AST-IMAGE-10BF021C` | `CH-003/CH-003_逃票魔法学徒_9x16_四格_灰纸水彩校准_v1.png` | `10BF021CFAFE7D58E67AF03C33A153BD527922B637087DA1D29D5A973C06F9EF` |

All three source files were opened and visually checked. The main identity reference is also the source image named by style version `LLL-CHAR-STYLE-v0.2`; the style record remains `STAGING`, not a locked global style. No source asset was modified.

## Prompt used for first preview (not selected)

```text
Use case: illustration-story
Asset type: 9:16 character-proportion exploration sheet, one single candidate image for CH-003.
Input images: Image 1 is the primary identity reference; Image 2 is a secondary identity/proportion reference; Image 3 is style-only reference for gray paper, loose ink line, and transparent watercolor. All three depict the same character; do not copy unrelated text, layout annotations, or props.
Primary request: create one vertical 9:16 canvas divided into a clean, even 2x2 grid with four views of the SAME character, the quiet-but-mischievous young magic apprentice wearing the living hat. This is an exploration candidate, not a final design.
Identity anchors that must stay consistent in all four panels: large round face, small facial features, short black hair with slightly asymmetrical fringe, pale lavender circular cheek marks, large asymmetric purple brimmed living hat, pale diagonal hat band, one slender feather-like upright structure. Keep the same face and head-to-body scale as the references. Preserve the low-key curious expression and distinct silhouette.
Panel layout: top-left, full-body proportion candidate A with compact lower-body expansion and grounded center of gravity; no very long legs. Top-right, full-body candidate B, changing only lower-body structure and slightly increasing leg extension while preserving the same head, face, shoulders, and upper-body rhythm; no extreme long legs. Bottom-left, close head portrait that clearly shows face, fringe, brim, diagonal band, and feather. Bottom-right, 45-degree half-side bust showing the head-to-shoulder connection and a subtle living motion of the feather or brim. Keep one character per panel, four views of one identity.
Style: delicate hand-drawn ink contours with slight line-width variation, soft gray-paper texture, restrained transparent watercolor washes and dry-brush edges, muted charcoal, purple, pale cyan, lavender, and neutral gray-white; animation-friendly simplified shapes and clear silhouette. Match the selected CH-003 gray-paper watercolor style, not glossy digital rendering.
Composition: panels large enough to read, generous clean gutters, simple quiet neutral gray paper background, consistent scale and lighting, no camera perspective distortion.
Constraints: preserve all frozen head/face/hat features. Only explore unknown lower body and small clothing details. The black upper-body region in the reference is NOT established as a cape or cloak; do not turn it into a long robe or cloak. Do not copy old speculative tool props or add a new weapon, armor, mechanical core, symbols, typography, labels, watermark, second character, adult scale comparison, or extra panels. Avoid standard chibi big-head short-leg proportions, 3D/game concept art, neon, hard cel-shading, glossy highlights, random white spots, and any new palette hues. No readable text anywhere.
```

## Final targeted revision prompt (used for saved output)

```text
Use case: illustration-story
Asset type: revise one 9:16 character-proportion exploration sheet for CH-003; candidate only.
Input images: Image 1 is the edit target. Preserve its 2x2 grid, four panel roles, face/head identity, hat, paper texture, palette, and overall drawing style. Image 2 is identity reference for the head only. Image 3 is style-only for gray paper, hand ink, and watercolor.
Primary request: keep the existing four-panel composition and same character, but repair the clothing in BOTH full-body panels. Remove the long flared outer garment, cape-like mantle, robe-like hem, diagonal shoulder strap, belts, pouches, dangling tools, and jewelry. These were speculative and are not authorized. Replace them with simple low-detail neutral clothing: a short straight-hem dark charcoal high-neck top ending at the natural waist, no skirt or cloak, and plain compact dark shorts/trousers with clean leg openings; understated gray socks and simple low-detail boots. No new accessories or tools.
Do not change: large round face, small facial features, black short hair and asymmetrical fringe, lavender cheek circles, large asymmetric purple living hat, pale diagonal hat band, slender feather-like top structure, head scale, facial expression, grid layout, style, or muted palette. Keep the feather slightly lively only in the bottom-right view.
Top-left body A: compact grounded pelvis and moderate legs, not tiny or stubby. Top-right body B: same upper body and head with only a small increase in leg length and lower-body openness; not extremely long-legged. The two bodies should read as proportion tests, not different outfits or characters. Bottom-left remains head portrait; bottom-right remains 45-degree half-side bust.
Style: gray paper, thin uneven hand-ink outline, restrained transparent watercolor and dry-brush texture, animation-friendly shapes, charcoal/purple/pale-cyan/lavender/neutral gray-white only. Keep clean even gutters and no lettering.
Avoid: any coat, cloak, cape, poncho, robe, skirt, shoulder sash/strap, harness, belt, bag, pouch, key, weapon, jewelry, armor, mechanical core, extra person, adult comparison, labels, watermark, 3D render, glossy finish, or added colors. This remains an exploratory candidate, not a locked design.
```

## Iteration provenance

- First preview SHA-256 (scratch only; not part of the project asset library): `C6267DA2B188605EDBB93A1EE5320265ACE8B43DFEB4575DCE11013FF31C9CCC`
- Final output SHA-256: `6E858457D5E02D58630B0A0D5F235A88159E8A5CC92E7396B8036932674782D9`
- Seed and model/version: not exposed by the image generation backend; not inferred.
