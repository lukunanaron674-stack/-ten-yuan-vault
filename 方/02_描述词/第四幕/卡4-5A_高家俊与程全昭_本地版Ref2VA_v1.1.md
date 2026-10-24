# 卡4-5A｜高家俊与程全昭｜本地版执行词 v1.1（多参考图 · Ref2VA · 3图7s）

> 版本：v1.1｜2026-09-08｜**v1.0→v1.1 关键修订**（用户 2026-09-08 反馈）：
>
> 1. **删除首帧参考图 `ref1_scene_empty`**：该图是**写实 3D 暗色渲染**（铁链/石墙/铁窗皆写实质感），与本卡要求的"冷灰蓝二维手绘"严重不符，又兼作 `@图片1` 开场锚（0–1s 锁定 1 秒），等于把 3D 暗色画风钉死在首帧。**v1.1 起首帧改用纯文字钉死，不挂 @图片**。
> 2. **补全胡逸民角色参考（R2）**：明确袖色（深蓝灰囚服）、手部规格，并链回 `03_角色卡/胡逸民.md`。
> 3. **修正胡逸民配音**：改用角色卡标准"成年男性、中音偏低、温厚真诚带生活气、略微压低声量"，替代原 v1.0 泛化的"约50，低沉克制微急"。
> 4. 参考图 **4 张 → 3 张**（ref2/ref3/ref4 保留），`@图片` 顺位重编为 `@图片1/2/3`。
> 5. 工作流 4 图版 → **3 图版**（`workflow_45a_v11.json`）；其余档位（mp0.7 / 8 步 / 24fps / 2×2 / 裁剪版 `minimax_h3_ref2va_pruned_int8_convrot`）不变。
>
> 工作流：`minimax_h3_setup/004_batch/workflow_45a_v11.json`（生成器 `gen_workflow_45a_v11.py`）。

---

## 1. 风格（Style）

- **Include**：冷灰蓝二维手绘历史动画；细墨线、哑光水彩颗粒、低饱和监狱色调、潮湿深色石墙纹理；同一镜内全程统一平面绘风。
- **Exclude**：3D 渲染、写实、字幕、风格漂移（任何一帧掉出冷灰蓝手绘都算不合格）；**禁止套用外部参考图（ref2/ref3 也带较写实倾向）较写实的画风**，全程以本节文字为唯一画风准绳。
- **全局光源/色调/氛围**：阴郁克制的监狱外清晨感；冷调天光从高墙上方低位窗口斜入；潮湿石面反光；安静、压迫、隐秘。

## 2. 时间轴（Timeline · 7.00s · 24fps · 单镜不切）

| # | 时间 | 机位/运镜 | 画面 | 台词·画外音 | 光源/色调 | 音效 |
|---|---|---|---|---|---|---|
| T1 | 00:00–01:00 | 固定正面中景，不推不摇 | **空监狱外墙 + 低位横向铁栏窗**；铁栏笔直平行等距、窗内深暗；**纯文字钉死，不挂 @图片**；全程无人物 | 无 | 冷灰蓝，高墙天光 | 极低环境风 |
| T2 | 01:00–02:00 | 同上锁定 | 程全昭眼睛从铁栏后现，谨慎外望；一手搭下窗沿（脸/发/服/位锚 `@图片2` = v1.0 ref3 完整构图） | 无 | 同上 | 极轻衣料 |
| T3 | 02:00–03:00 | 同上 | 右下方伸入**深蓝灰囚服袖口 + 一前臂 + 一手 + 折叠信**，缓慢靠近窗口；不露头脸肩身 | 无 | 同上 | 手掌窗沿轻响 |
| T4 | 03:00–04:00 | 同上 | 胡将信递到窗口下，全昭伸手接；此构图必须锁 `@图片1`（= v1.0 ref2，3-4s 帧） | 胡（画外，**成年男性、中音偏低、温厚真诚带生活气、略微压低声量**；为隔窗请求**再压一档**音量、声带略紧、气息先于辅音；**不油滑、不煽情、不用舞台朗诵腔**）：**拜托了，全昭。** | 同上 | 轻微纸张摩擦 |
| T5 | 04:00–05:00 | 同上 | 全昭接信握稳，胡略收手 | 程（接信后即刻，**成年女性、中音、短促坚定、一声即收、不拖音**）：**嗯！** | 同上 | 衣料微动 |
| T6 | 05:00–07:00 | 同上 | 停留完成交接；自然呼吸+衣料微动，终帧锁 `@图片3`（= v1.0 ref4，手+信裁切） | 无 | 同上，风声收住 | 安静 |

**运镜铁律**：镜头固定正面中景，不推拉、不摇移、不变焦、不虚焦、不切场景；铁栏笔直平行等距，只修全昭手边那根错误贴手栏杆；全昭铁栏后稳定不变形；胡逸民只露一袖一前臂一手一信，绝不露头/脸/肩/身。

**首帧画风硬锁（防 ref1 复发）**：0–1s 严禁出现 ref1 风格的写实 3D 暗色调；以"冷灰蓝 2D 手绘 + 细墨线 + 哑光水彩颗粒 + 低饱和潮湿石墙"为唯一画风；首帧**不引用任何参考图**，由本节文字独立约束。

## 3. 角色参考（按出现顺序）

- **R1 程全昭**：铁栏后。脸型、黑发低盘髻、浅灰蓝立领斜襟长袖上衣、深藏蓝百褶长裙、白袜、黑色玛丽珍鞋。手自然搭下窗沿，外形/位置/服饰全程稳定。配音资产默认无台词（见 `03_角色卡/程全昭.md`）；本卡 4-5s 显式增补一句"嗯！"，声线为成年女性、中音、短促坚定、一声即收、不拖音。
- **R2 胡逸民**（v1.1 新增完整规格）：仅窗口外侧**一袖（深蓝灰囚服袖口）+ 一前臂 + 一手 + 一折叠信件**（由画面右下方伸入）。不出现头、脸、肩膀、胸口或身体。**袖口/手部造型锁定同第二幕 2-4 与第四幕其余胡逸民出场**（`03_角色卡/胡逸民.md` 完整规范）；**配音锁定角色卡标准**："成年男性、中音偏低、温厚真诚、带生活气、略微压低声量；不油滑、不煽情、不用舞台朗诵腔"。本卡 3-4s 画外一句"拜托了，全昭。"按此规格执行，并在"隔窗请求"情境下再压一档音量（声带略紧、气息先于辅音）。无台词镜头按角色卡记录为"无台词，仅呼吸/动作声"。

## 4. 场景设定（C1）

- **C1 监狱外低位传递窗**：镜头位于监狱外侧，正对低位横向传递窗口；窗口上方可见高墙、瞭望塔、铁丝网。潮湿深色石墙、笔直平行等距铁栏、固定透视。环境压迫、克制、安静。
- **画风硬约束**：C1 全程以本节文字 + 风格节为唯一准绳；**严禁以任何参考图（ref1 类写实 3D 暗色 / ref2-ref3 类较写实倾向）替代画风**。参考图仅作构图与交接动作锚，不作画风锚。

## 5. 道具参考（P1）

- **P1 折叠信件**：胡手中持有的折叠信，单一连续实体道具；不得凭空出现、消失、变形、复制，不得出现可读文字。
- 参考图：`@图片1`（原 ref2）、`@图片2`（原 ref3）、`@图片3`（原 ref4）中均含信件形态。

## 6. 负面提示词（Dropped）

- 风格：3D、写实、风格漂移、变脸、动画崩坏；**禁止 ref1 类写实暗色画风出现在任何一帧（包括首帧）**。
- 人物：额外人物、额外手指、胡逸民头/脸/肩/身露出、全昭服饰或位置漂移、夸张表情。
- 结构：铁栏弯曲/变形/不等距、信件凭空消失/变形/可读文字、栏杆穿手。
- 镜头：推拉、摇移、变焦、虚焦、切场景、爆闪、字幕、logo、现代物件。
- 配音：油滑、煽情、舞台朗诵腔；与角色卡不符的声线。

## 7. 资产入口登记

**导演台执行词（与 `workflow_45a_v11.json` 一致）**

```
Cold gray-blue 2D hand-drawn historical animation with fine ink outlines, matte watercolour grain,
low-saturation prison tones and damp dark stone wall texture — ONE consistent flat-painted style held across the ENTIRE shot.
NO 3D, NO photorealism, NO subtitles, NO style drift. Do NOT adopt the darker photorealistic look
that any previously-cleared reference image may suggest — text style is the sole arbiter.

The shot is ONE continuous LOCKED single take at a low prison transfer window on the OUTSIDE of the wall:
the camera faces the low horizontal barred window straight on at medium-shot height and stays fixed —
no push, no pan, no zoom, no rack focus, no cut. High wall, watchtower and barbed wire are visible above the window;
oppressive, restrained, quiet.

Cheng Quanzhao stays BEHIND the iron bars: keep her face shape, black low bun, light gray-blue standing-collar
slanted-frontal long-sleeve top, deep navy pleated long skirt, white socks and black Mary-Jane shoes;
one hand rests on the lower window edge, outward appearance and position stable.

Hu Yimin appears ONLY as one dark blue-grey prison sleeve, forearm, one hand and a folded letter entering
from the lower-right of frame — NO head, face, shoulder, chest or body. The visible sleeve matches
the deep blue-grey prison costume anchor from the character card (03_角色卡/胡逸民.md).
Hu passes the letter toward the window; Cheng reaches from behind the bars to receive it:
one restrained, hidden, oppressive handover. The letter must NOT appear, vanish, deform, duplicate
or show readable text.

The iron bars must stay straight, parallel, equally spaced, fixed perspective; only the one wrongly-shaped stray bar
right next to Cheng's hand may be removed; do not break any other structure.

[0-1s PURE-TEXT FIRST FRAME — NO @图片 ANCHOR]
The first 1.00 second holds a completely EMPTY prison outer wall with the low horizontal iron-barred window,
absolutely NO person visible. The wall is rendered in cold gray-blue 2D hand-drawn style: fine ink outlines,
matte watercolour grain, low-saturation prison tones, damp dark stone texture. The window shows thick parallel
iron bars with a deep dark interior, identical in style and composition to the rest of the shot.
The camera stays locked. This empty hold is described by text ONLY — do NOT composite, paste, or import
any reference image into the first 1.00 second. Maintain the locked cold gray-blue 2D hand-drawn style
throughout this opening hold; do not drift into the darker photorealistic look that any reference might tempt.

From 00:01.000 to about 00:02.000 — Cheng Quanzhao's eyes appear from behind the bars and she looks out cautiously;
one hand stays on the lower window edge. Keep her face shape, hairstyle, clothing and position exactly as anchored by @图片2.

From 00:02.000 to about 00:03.000 — a partial figure enters from the lower-right: show only the dark blue-grey
prison sleeve, forearm and one hand holding a folded letter, slowly approaching the window.
Do NOT reveal the person's head, face, shoulder or body.

From 00:03.000 to about 00:04.000 — Hu Yimin extends the folded letter down to the lower window; Cheng reaches out and
makes contact with the letter. This exact handover composition must match @图片1 (the 3-4s frame reference you supplied).
An off-screen male voice — ADULT, mid-low pitch, WARM, SINCERE, plain-spoken, deliberately lowered in volume and slightly
tight-throated for a hidden, through-the-window request, NOT slick, NOT theatrical, NOT melodramatic — says exactly:
<d>[Chinese] 拜托了，全昭。</d>

From 00:04.000 to about 00:05.000 — Cheng Quanzhao takes the letter and holds it firmly; Hu Yimin slightly withdraws his
arm after releasing. Cheng replies short and firm, exactly: <d>[Chinese] 嗯！</d>

From 00:05.000 to about 00:07.000 — hold the completed handover: small natural breathing and cloth movement, composition
matching @图片3. The final frame at 07.00 seconds must match @图片3 as closely as possible.
No extra person, extra finger, bar deformation, face change, modern object, readable text, subtitle, logo, flicker or
exaggerated motion.

overall_soundscape: Quiet damp prison exterior ambience, faint wind, restrained cloth movement, hand touching iron window
edge, subtle paper friction during the handoff; Hu Yimin's off-screen line at 3-4s delivered in the established character
voice (adult male, mid-low pitch, warm/sincere/plain-spoken, slightly lowered volume — per 03_角色卡/胡逸民.md) and
Cheng Quanzhao's short firm reply at 4-5s. No loud music.

non_diegetic_music: N/A
```

**参考图 3 张**（已就位 `E:/ComfyUI_portable/.../input/45a_director/`，**v1.1 已从工作流移除 ref1_scene_empty.png**）

| # | 文件名 | 来源 | 作用 | 旧 v1.0 @编号 |
|---|---|---|---|---|
| 1 | `ref2_exchange_3-4s.png` | 临时截图/Pasted image 20260905114209.png（用户 2026-09-07 新给） | 3-4s 帧参考·交接时刻构图与动作锚 | 旧 `@图片2` |
| 2 | `ref3_full_comp.png` | 临时截图/4-5a1.png | 完整构图（全昭脸+手+信+递信右手） | 旧 `@图片3` |
| 3 | `ref4_crop.png` | 临时截图/4-5a2.png | 裁切（手+信交接区） | 旧 `@图片4` |

**工作流**：`minimax_h3_setup/004_batch/workflow_45a_v11.json`（3 图 / 7.0s / mp0.7 / 8 步 / 裁剪版 `minimax_h3_ref2va_pruned_int8_convrot` / 24fps / 2×2 四宫格）。

## 📚 资料库素材索引（跨设备取全 · 我的文档）

> v1.1 已上传：描述词 1 篇 + 参考图 3 张（ref1 作废）+ 工作流 v1.1 1 个，给 4090 跑。
> **v1.0 资料库节点作废**（可保留但不再被工作流引用）：描述词 `5Qb171Z2SmCY6WkvsAD8sG`、ref1 `i1FgYfoSjRNyXaEZsTjUMq`、工作流 `gTiNl9aDvwoVtydpdW1pkQ`。
> 参考图下载后按 `ref2_exchange_3-4s/ref3_full_comp/ref4_crop` 原文件名放入 `ComfyUI/input/45a_director/`。

**描述词**
- 本篇（v1.1 本地版主执行依据）：`wAOKab9u5bHC8uHn5MicWQ`

**参考图 3 张**
| # | v1.0 库节点 | v1.1 新节点 | 对应文件名 | 状态 |
|---|---|---|---|---|
| 1 | ~~`i1FgYfoSjRNyXaEZsTjUMq`~~ | — | ~~`ref1_scene_empty.png`~~ | **作废移除** |
| 2 | `SLwDAOetNeAf0NWInA2tnr` | `RY5AUa9CAXXB3wSGeIuXKh` | `ref2_exchange_3-4s.png` | 保留（→ 新 `@图片1`） |
| 3 | `tS6QZeY75aWfcH38kagM9w` | `ElUTNoilgDFUax8lS84OId` | `ref3_full_comp.png` | 保留（→ 新 `@图片2`） |
| 4 | `TWTX9U6haB3F37xsMTTDpz` | `8yVPZdbEJkXJPJeg3dW2Dy` | `ref4_crop.png` | 保留（→ 新 `@图片3`） |

**工作流**
- v1.1 三图 · 7.0s · mp0.7 · 8步（默认档）：`USPMCkocispqhAiEqguvax`
- ~~v1.0 四图版 `gTiNl9aDvwoVtydpdW1pkQ`~~ 作废
