# HEAD-L1-SOURCE-PACK v1｜L1 两份头像源文件与文字源整理

> **状态：FROZEN = TRUE（2026-10-06 冻结，工单 `674-167`）**
> 机读入口：同目录 `HEAD_L1_SOURCE_PACK_v1.manifest.json`
> 冻结后 RUN-A/B/C（674-254/255/256）只允许消费本包，不得临时增删约束。

## 冻结头（固定输入字段）

| 字段 | 值 |
|---|---|
| SOURCE_PACK_ID | `HEAD_L1_SOURCE_PACK` |
| SOURCE_PACK_VERSION | `v1` |
| SOURCE_PATH | `黎黎隆项目/03_角色/角色库/05_头像与高清素材/大头联想源页/`（md + manifest.json） |
| ASSET_MANIFEST | 15 项，见 §冻结资产清单（全部 PRESENT，SHA 实测） |
| ASSET_SHA256 | REQUIRED 唯一图像输入 = `62f101a92fa72e62d94966b60b6001dc3eff237d754ef1024b50459d01b888fa` |
| PROMPT_SPEC | 见 §PROMPT_SPEC（英文，来自 RUN-A receipt） |
| NEGATIVE_CONSTRAINT | 见 §NEGATIVE_CONSTRAINT |
| DIVERSITY_CONSTRAINT_REF | `674-259` / `DIVERSITY_CONSTRAINT_v1`（已冻结） |
| OUTPUT_LAYOUT | 3 列 × 5 行 = 15 个头肩候选，972×1618，每 RUN 出 1 板 |
| FROZEN | `TRUE` |
| SOURCE_PACK_READY | `PASS` |

### REQUIRED 资产（唯一图像输入）

- `A_POSITIVE_BASELINE` → `…/头像精修候选_20261003_第三组/头像精修_第三组_3x5_CANDIDATE.png`
- SHA-256：`62f101a92fa72e62d94966b60b6001dc3eff237d754ef1024b50459d01b888fa`｜2,421,642 bytes｜972×1618
- 依据：RUN-A / RUN-B / RUN-C 三份 receipt 均记录 `source_sha256` 为此值，且 `source_role = the only image input`

### 冻结资产清单（15 项，SHA 本次实测）

| key | role | SHA-256（前 16） | bytes |
|---|---|---|---|
| A_POSITIVE_BASELINE | **REQUIRED** | `62f101a92fa72e62` | 2421642 |
| A_SIBLING_G1 | PROVENANCE | `9d57640b21cc5e59` | 2562772 |
| A_SIBLING_G2 | PROVENANCE | `43d524f09e99b14b` | 2339224 |
| LEGACY_CAND01 | CONTEXT | `51a451f10f75a0f8` | 1812701 |
| LEGACY_CAND03 | CONTEXT | `44f188724da1f347` | 2287445 |
| B_REF_01 | REFERENCE | `44ccbc154eed28c9` | 1521861 |
| B_REF_02 | REFERENCE | `319c5feaf0a44a10` | 1833177 |
| B_REF_03 | REFERENCE | `e6a72398016b2aa3` | 2460467 |
| B_REF_04 | REFERENCE | `9366267d990fad85` | 277432 |
| B_REF_05 | REFERENCE | `e1379dff0d0dbce0` | 362871 |
| B_USERORIG_01 | REFERENCE | `3cbc5a86444427d2` | 2819697 |
| B_USERORIG_02 | REFERENCE | `c4906d962353173d` | 2353830 |
| B_USERORIG_03 | REFERENCE | `cb78d33b803e7e96` | 2179242 |
| B_USERORIG_04 | REFERENCE | `57ee6823d4ea75a4` | 1082192 |
| B_REF_NEWBASE | REFERENCE | `6d6718918891eb17` | 3028410 |

完整路径见 manifest.json。`missing_count = 0`。

### PROMPT_SPEC（exact）

```text
Generate one new 3x5 board with exactly 15 head-and-shoulder character candidates.
Use the provided positive source image only as the visual reference for style and structural diversity language.
Required drawing language: ink / charcoal / dry brush / gouache.
Use restrained P00-like color behavior.
Structural diversity must include at least several of: mechanical, hooded, hat/helmet,
horn/ear, older age, short-haired, non-human.
```

- 输入图像：仅 `A_POSITIVE_BASELINE`
- 来源：RUN-A receipt「Generation scope」+ `674-254` 描述；RUN-A/B/C 三次一致

### NEGATIVE_CONSTRAINT

1. 不使用 ComfyUI / H3 / 本地 diffusion workflow。
2. 不使用其他 RUN 的输出作为输入或上下文。
3. 不自行改角色设定、画风目标或输入模板。
4. 禁止 `template_collapse`：不得出现「同脸换饰品」式复用。
5. 禁止「统一极端左视 + 半垂眼」成为默认解（来自 674-254 眼睛/视线约束）。
6. 主要可见眼的虹膜 / 瞳孔必须清晰可读，能直接辨认颜色。
7. 白发不得成为默认解（RUN-B 7/15 为当前可接受上限基线）。
8. 头部剪影差异必须来自结构，不靠小配件。
9. 禁止 fallback 到历史聊天、旧候选图或未登记本地素材。

### DIVERSITY_CONSTRAINT_REF

- `674-259`｜`DIVERSITY_CONSTRAINT_v1`｜`DIVERSITY_CONSTRAINT_FROZEN = TRUE`
- 审核维度固定：head_silhouette_diversity / structural_diversity / face_language / age_read / gaze_readability / hair_head_repetition / template_collapse
- 下一轮 RUN 不得临时增删约束；修改须升版本并留 changelog

---

> 工单：Linear `674-169` HEAD-L1-SOURCE-ORGANIZE（父 `674-156` HEAD-L1-REPRO）；冻结升级见 `674-167`
> 目标：把 L1 当前两份真正输入源整理成可验证 source pack，服务 clean-room 复刻。
> 规则：不生图 / 不四宫格 / 不做 L2。找不到即标 PARTIAL/MISSING，不脑补。
> 校验：size + SHA-256 + 尺寸，全部实算（Python hashlib + PIL）。

---

## 总判定（DONE 口径）

| 源 | 文件 | 文字源 | 总状态 |
|---|---|---|---|
| A 正向头像源（第三组 3×5） | VERIFIED（字节级同源） | PARTIAL（生成系 codex 自动执行，未隔离出独立 prompt） | **VERIFIED + PARTIAL** |
| B 色卡头像发散源 | VERIFIED（第一手原图已定位） | VERIFIED（原始用户原话已找回） | **VERIFIED** |

唯一缺口：A 的「当次生成 prompt 原文」未从会话 transcript 中隔离出来（见 A.6）。不影响 L1 复刻启动——正向基线的**文件实体**与**溯源链**已闭合，原始 prompt 可由 674 从下方 B 的发散指令重建。

---

## Source A｜正向头像源（用户认可的最初三组 3×5 CANDIDATE）

### A.1 exact_positive_image（VERIFIED）

- 文件名：`头像精修_第三组_3x5_CANDIDATE.png`
- vault 路径：`黎黎隆项目/03_角色/角色库/05_头像与高清素材/大头联想源页/头像精修候选_20261003_第三组/头像精修_第三组_3x5_CANDIDATE.png`
- 尺寸：972 × 1618 px
- 文件大小：2,421,642 bytes
- SHA-256：`62f101a92fa72e62d94966b60b6001dc3eff237d754ef1024b50459d01b888fa`

### A.2 provenance（VERIFIED · 字节级同源）

该 PNG 与 codex 生成原图**逐字节一致**：

- 生成原图：`E:\C_Migration\19308\.codex\generated_images\01a058e1-5eb9-73c0-a297-98dc9cee4197\exec-45253683-ca38-462d-9f1e-dc5863c592b9.png`
- 写入时间：2026-10-03 12:15:26（+08:00）
- SHA-256：`62f101a9…d01b888fa`（与 vault 文件相同 ✅）
- 生成线程：codex thread `01a058e1-5eb9-73c0-a297-98dc9cee4197`
- 所属会话：`rollout-2026-10-02T23-17-26-01a0fd31-0edf-7321-a2fc-922546661302.jsonl`（line 1 即该 thread id）

**同源兄弟板（同线程、同日，均 VERIFIED）：**

| 批次 | vault 文件 | 生成原图 | size | SHA-256 | 尺寸 |
|---|---|---|---|---|---|
| 第一组 | 头像精修候选_20261003/头像精修_3x5_CANDIDATE.png | exec-8dc1ebd3 | 2,562,772 | `9d57640b…da76374d` | 1024×1536 |
| 第二组 | 头像精修候选_20261003_第二组/头像精修_第二组_3x5_CANDIDATE.png | exec-ce383621 | 2,339,224 | `43d524f0…ce513480` | 971×1620 |
| **第三组（正向基线）** | 头像精修候选_20261003_第三组/头像精修_第三组_3x5_CANDIDATE.png | exec-45253683 | 2,421,642 | `62f101a9…d01b888fa` | 972×1618 |
| 第四张（无 vault 副本） | — | exec-5d76620f | 2,286,545 | `3d0d39ae…d8a7533` | 1024×1536 |

> 注：第四张（13:46）为 1024×1536 竖版、异于前三张 972×1618 比例，且 vault 无副本——未纳入 L1 正向基线，仅列作同源旁证。

### A.3 raw_user_text（PARTIAL / UNVERIFIED）

- 该批 3×5 头像板系 codex 在 thread `01a058e1` 内**自动执行生图**，未在会话 transcript 中隔离出针对「3×5 头像板」的独立用户 prompt。
- 上游语境指向 Source B 的「色卡头像发散」系列指令（见下）。可判定方向，但**不**作为本图逐字原始输入。
- 因此 raw_user_text = PARTIAL，待 674 从该发散指令集确认/补签。

### A.4 raw_generation_text（PARTIAL）

- 确认的生成出口：`generated_images/01a058e1-5eb9-73c0-a297-98dc9cee4197/exec-45253683-….png`（codex image 工具落盘）。
- 当次具体 prompt / 模型 / seed 未在 transcript 明文留存 → 标 PARTIAL。

### A.5 world / palette / negative / layout 约束（observed）

- layout / quantity：**3 列 × 5 行 = 15 头像板**（图像读得，非原始排版指令）。
- palette / world：继承自 Source B 发散规则——色块比例、点线面、P00 五色体系（深墨青/灰紫/暗红/青绿/淡青灰）。
- negative / forbidden：本次未回收可验证原始负面约束。

### A.6 user_approval_evidence（VERIFIED）

- Linear `674-156` 描述将此图列为用户提供的正向基线之一。
- 评论 `13e00cfb-5c6a-46d2-b859-e24a9d9066d6`：截图标题 `头像精修_第三组_3x5_CANDIDATE.png` 指定为当前正向基线。
- Canvas 节点 `f03f02b7eabb3b93`（`黎黎隆问题系统.canvas`）指向该文件。

### A.7 source_refs

- vault：`黎黎隆项目/03_角色/角色库/05_头像与高清素材/大头联想源页/头像精修候选_20261003_第三组/`
- 生成原图：`E:\C_Migration\19308\.codex\generated_images\01a058e1-5eb9-73c0-a297-98dc9cee4197\exec-45253683-….png`
- 会话：`rollout-2026-10-02T23-17-26-01a0fd31-…jsonl`（thread `01a058e1`）
- Linear：`674-156` + comment `13e00cfb`
- 前序文档：同目录 `HEAD_L1_POSITIVE_SOURCE_RECOVERY_v1.md`（本 pack 为其升级版）

---

## Source B｜色卡头像发散源（当时用于色卡头像发散的第一手原图 + 原始文字输入）

### B.1 raw_user_text（VERIFIED · 原始用户原话，已找回）

来源会话：`rollout-2026-09-23T23-34-38-01a0cee7-91f5-7a02-9f23-d57288473a8d.jsonl`

1. **命名指令（L101，09-23 23:34）**——本源文件夹名即由此句确定：
   > 阅读老世界观 老角色卡们 看看他们的设定 让后给这些角色发散设定和新他们专属世界观（文字x5次得1）之后反补世界观设定 以及为这次探索名字取名为 **头像色卡探索 与旧世界观融合** 单独建立文件夹 canvas md描述 世界观md

2. **发散方法（L77/L99，09-23 21:47）**：
   > 先发散10张角色 每张很多个小人角色 色卡发散色块和比例为主 然后10张场景 10张分镜 线条感辅助色块

3. **纯色发散（L220，09-23 22:50）**：
   > 单独建立文件夹 纯颜色发散探索世界观 和老世界观们独立 就研究这几个色能研究出什么样子的世界观 每次做小世界 设定md（每份推5次得一份）

4. **双文件夹结构（realtime delegation，L998/L1074）**：
   > 他就这一个有两个文件夹嘛，一个是…单独生生头像的文件夹，一个是要结合老的世界观去发散这些角色，一个是…不结合老世界观，单独发散的。

5. **色卡推头像有效性确认（L9/L40，09-25 03:46）**：
   > 这都是色卡推出来的头对吧 是不是色卡推这点很有用？推的出头像能推的出全身不 竖版 5比3试试

### B.2 第一手原图（VERIFIED · 已定位）

色卡头像发散的「第一手原图」= 674 亲绘**色卡** + 手绘角色原稿 + 新基准参考截图。落点在 vault：

- 色卡/比例/身份参考（发散过程 674 指定）：
  - `01_世界观/03_NEW_CANDIDATES/头像色卡探索 与旧世界观融合/04_远景色块小人_2026-09-25/头像接全身_用户指定无脸平面样式参考_2026-09-25.png`
  - `…/头像接全身_用户选定比例参考_2026-09-25.png`
  - `…/05_竖版头像转全身_2026-09-25/用户补充_十五角色头像_身份源候选01.png`
  - `…/06_单角色竖版全身色块_2026-09-25/角色头像_枝状发饰多色发_身份源.png`
  - `01_世界观/03_NEW_CANDIDATES/独立头像世界观探索_2026-10-01/04_第二批头像/第二批头像_15人大头候选_色卡页01.jpg`
- 手绘角色原稿（R1-R3 第一手）：
  - `03_角色/20_画风源_R1-R3/02_USER_ORIGINAL/`：大叔角色配色2.jpg / 小和尚角色_四视图原稿.png / 黎黎角色_配色.jpg / 奇美拉角色.jpg
- 新基准参考截图：
  - `03_角色/20_画风源_R1-R3/01_REFERENCE/USER_INPUT_20260920/黎黎隆角色新基准参考_原始截图.png`

> 分流说明：B 的「第一手原图」为上述参考图集合；具体哪一张被用于第三组 3×5 生成，未在 transcript 中逐一绑定，标注为同源参考而非逐图证据。

### B.3 provenance（VERIFIED）

- 文件夹 `头像色卡探索 与旧世界观融合` 由 674 在 09-23 23:34 会话中亲自命名（见 B.1-1）。
- 该会话同时产出 `头像色卡探索 与旧世界观融合.canvas` 及系列 3×5 候选（03_第三批十五角色图 / 04_远景色块小人 / 05_半身色块 / 05_竖版头像转全身）。

### B.4 约束摘要（从原始文字提取）

- world/theme：结合老世界观发散新角色专属世界观，反补总世界观。
- palette：色卡发散色块与比例为主，线面（点线面）辅助。
- layout/quantity：10 张角色（每图多小人）+ 10 张场景 + 10 张分镜；后续收敛为 3×5 头像板。
- negative：未回收可验证原始负面约束。

### B.5 source_refs

- 会话：`rollout-2026-09-23T23-34-38-01a0cee7-…jsonl`（L101/L77/L220/L998）；`rollout-2026-09-25T03-46-45-01a0d4f4-….jsonl`（L9/L40）
- vault 文件夹：`01_世界观/03_NEW_CANDIDATES/头像色卡探索 与旧世界观融合/`
- 参考原图：见 B.2

---

## 未闭合项（唯一缺口）

1. **A.3 / A.4**：第三组 3×5 的「当次生成 prompt 原文 + seed + 模型」未在 transcript 明文留存（codex 自动执行）。建议 674 从 B.1 发散指令集补签一句「第三组即按此发散规则生成」，即可闭合 A 的文字源。
2. **B→A 绑定**：色卡发散参考图与第三组 3×5 的逐图对应关系未建立（同源参考，非逐图证据）。

以上两项均不阻塞 L1 复刻启动；正向基线实体与溯源链已 VERIFIED。

---

## CHANGELOG

### v1 · 2026-10-06 · FROZEN

1. `FROZEN = TRUE`，新增机读 `HEAD_L1_SOURCE_PACK_v1.manifest.json`。
2. 补齐 15 项资产的实测 SHA-256（本次定向计算，非全库扫描）；正向基线值与 674-169 pack 记录交叉一致。
3. 写入 `PROMPT_SPEC`（取自 RUN-A receipt 的 Generation scope，三次 RUN 一致）。
4. 写入 `NEGATIVE_CONSTRAINT`（674-254 眼睛/视线约束 + 674-259 FAIL 条件）。
5. 挂载 `DIVERSITY_CONSTRAINT_REF → 674-259 / DIVERSITY_CONSTRAINT_v1`（已冻结）。
6. 声明 `SOURCE_PACK_READY = PASS`，解锁 674-254 / 255 / 256 的下一轮 clean-room 复跑。

### 冻结后规则

- CODEX IMAGE 只消费本包，不负责补素材、不负责改规则。
- 缺任一 REQUIRED 资产或 SHA 不符 → `SOURCE_PACK_READY = FAIL`，不得开跑。
- 674-254 / 255 / 256 已有图片全部保留，不删除、不视为白跑。
- 本包修改必须升版本（v2）并留 changelog。
