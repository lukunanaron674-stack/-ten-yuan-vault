# 卡3-1B｜高家骏门外听｜本地版执行词 v1.0（多参考图 · Ref2VA）

> 版本：v1.0｜2026-09-07｜镜像 3-2A 本地版（Ref2VA 多参考图）做法，把 3-1B 也做成可在本地 3070 跑的版本
> 模式：导演台·全能参考（Ref2VA multi-reference）｜时长：6.5s｜24fps｜1280×736
> 内容版本：20260907-01（待闸门对齐后正式登记）
> 历史底稿：卡3-1B_画面描述词 v1.0（2026-08-13）、卡3-1B_分镜动作时间 v1.2（2026-08-15）、FZM-3-1B-H3（FL2VA 草稿，从未执行）均保留不混用。
> ⚠️ **Dropped（不得投喂）**：
> - 旧 `FZM-3-1B-H3.md` 的 FL2VA 单图工作流 —— 本次改走 Ref2VA 多参考图，与 3-2A 本地版一致。

## 1️⃣ 风格 (Style)

**Include**
- 经典上海动画派头、2D 手绘、笔触明确、纸纹底、平涂填色
- 工笔淡彩人物；五官轮廓鲜明，衣物褶皱写意
- 监牢冷调：青蓝灰主导（背景），前景人物肤色/制服偏中褐色（不过亮）
- 光源：右上监牢小窗自然光 5600K + 室内顶光 3000K（铁栏投影落在地）

**Exclude**
- ❌ 3D / 写实摄影
- ❌ 卡通夸张 / 超现实
- ❌ 字幕 / 水印 / Logo
- ❌ 镜头抖动 / 快推 / 拉镜 / 大幅横摇
- ❌ 后期滤镜（晕影 / 调色 / 复古噪点）

**整体氛围**：历史正剧，含蓄克制；方志敏平静坚定；高家骏职业值守、仅极轻注意。

## 2️⃣ 时间轴（3 段 · 24fps · 总 6.5s）

### T1 ｜ 00:00.000 – 00:01.000｜起始首帧稳定 (FIXED)

- **机位/运镜**：与 Picture 1 同构图，**DO NOT cut**、**DO NOT move**、**DO NOT pan**。
- **画面**：冷灰蓝旧监狱中远景，方志敏与三四名狱友围坐，高家骏在牢门外值守；人物、服装、位置严格接续首帧。
- **台词/画外音**：无（仅低声含混底声）。
- **光源/色调**：右上小窗 5600K 自然光主导，整体冷青蓝灰。
- **音效**：牢房低声交谈、远处脚步、钥匙轻碰。

### T2 ｜ 00:01.000 – 00:06.000｜方志敏回答三民主义（主体）

- **机位/运镜**：**LOCKED medium-wide composition**，机位高度与轴线不变；**连续静止构图**，不做任何景别切换、不做横摇。
- **画面**：方志敏平静坚定地回答，嘴型逐字同步，只做轻微手势；其余狱友安静听、不抢话、不东张西望；高家骏仍在门外值守、目光朝走廊，**此时尚未转头**。
- **台词/画外音**：方志敏（S1）一句，压低、克制、清晰靠前——"<d>[Chinese] 耕田的有田种，做工的有工钱，孩子念得起书——做到了这些，就是三民主义。</d>"，**不喊、不多句**。
- **光源/色调**：同 T1。
- **音效**：关键台词清晰靠前，环境声压低；牢房底噪持续。

### T3 ｜ 00:06.000 – 00:06.500｜高家骏极轻转头（收尾）

- **机位/运镜**：构图继续锁定为 Picture 4 目标尾帧；**DO NOT add a close-up of Gao**、**DO NOT cut to new angle**。
- **画面**：高家骏（造型锚定 Picture 3）把头部与眼神**极轻微**转向牢内的方志敏，神情从冷淡变为注意；转头一次完成、幅度极小，**不做完整"被感化"表演、不迈步、不进牢门**。末帧必须严格匹配 Picture 4。
- **台词/画外音**：无。
- **光源/色调**：与 Picture 4 目标尾帧一致。
- **音效**：背景只留低声牢房底噪和轻微铁栏声。

## 3️⃣ 角色参考（按出现顺序）

| 编号 | 角色 | 主要来源 | 备注 |
|---|---|---|---|
| R101 | 方志敏 | Picture 1（首帧围坐右侧人物） + Picture 4（尾帧锁定） | 深蓝传统衫、左手绑绷带 |
| R102 | 高家骏 | Picture 3（三视图锁定造型） + Picture 4（尾帧转头姿态） | 1930 国民党看守制服，门外值守 |
| R103 | 围坐狱友群 | Picture 1（首帧围坐） | 三四名，安静听，不抢戏 |

- 角色长期档案：[[方/03_角色卡/方志敏.md]]、[[方/03_角色卡/高家骏.md]]

## 4️⃣ 场景设定

- **C1 = 空牢房场景基准** — `方/07_素材图/第三幕/第三幕_3-1空牢房场景基准_v1.png`
  - 空间：1930 旧监狱牢房，铁栏正面对镜头，右侧高墙窄窗，地面干草，冷蓝灰日光透入；铁栏投影落在地。

## 5️⃣ 道具参考

- 本卡无关键手持道具；高家骏造型锁定的三视图见角色参考 R102 / Picture 3。
- 不引入报纸、信件等额外道具（与 3-2A 递报区分）。

## 6️⃣ 负面提示词 (Negative)

**DO NOT：**
- 切到任何其他机位或景别、做横摇 / 拉镜 / 快推（违反 T2 锁定中远景构图）
- 让高家骏在 6.0s 之前转头（转头只出现在 T3 收尾）
- 让高家骏迈步、进牢门、做夸张"被感化"表演
- 让方志敏站起、离座、做多余大动作
- 出现字幕、Logo、水印、3D / 写实摄影效果
- 新增人物（不引入胖子、凌凤梧或任何额外角色）
- 面孔漂移、第三只手、多指、比例漂移、铁栏穿过人物
- 生成可读额外文字

## 7️⃣ 资产入口登记

| 类别 | 编号 | 路径 (vault 内链接) | 用途 |
|---|---|---|---|
| 角色-方 | R101 | 方/07_素材图/第三幕/卡3-1_狱中围坐.png | 首帧 + 尾帧（围坐右侧） |
| 场景-空牢房 | C1 | 方/07_素材图/第三幕/第三幕_3-1空牢房场景基准_v1.png | 空间锚 |
| 角色-高家骏 | R102 | 方/07_素材图/第二幕/高家骏_三视图.png | 造型锚 |
| 终帧-高家骏转头 | — | 方/07_素材图/第三幕/卡3-2A_首帧_来自3-1B尾帧.png | 锁终帧 |

**Dropped（不得投喂）**：
- ❌ `FZM-3-1B-H3.md` 的 FL2VA 单图工作流 —— 本次改 Ref2VA 多参考图。

**音效 / 音乐表**：
- 牢房底噪（低声交谈 + 远处脚步 + 钥匙轻碰）
- 方志敏台词：「耕田的有田种，做工的有工钱，孩子念得起书——做到了这些，就是三民主义。」（平静坚定、压低）
- 高家骏：无台词
- 非叙事音乐：无（N/A）

---

## 🔧 运行参数（导演台·全能参考）

- 引擎：Ref2VA (`CSH3MultimodalDirector` 导演台·全能参考)
- 时长：6.5s（156 帧 @ 24fps）
- 输出：1280×736（比例自动跟随首帧）
- 采样：res_multistep · steps 8 · simple scheduler
- 强度：0.7 (默认)
- 模式：全能参考 timeline（multi-reference, 主提示词中 @图片N 标记引用）
- 音频：CreateVideo 默认合成 audio（与首帧视频一致）

### timeline_data JSON 模板（提交到 Director 节点）

```json
{
  "items": [
    {
      "file": "31b_director/ref1_firstframe.png",
      "prompt": "@图片1 First frame anchor: a 1930s Chinese prison cell, cold blue-grey. Fang Zhimin seated among three to four fellow prisoners; Gao Jiajun standing on duty outside the cell door. Restrained 2D hand-drawn style."
    },
    {
      "file": "31b_director/ref2_empty_cell.png",
      "prompt": "@图片2 Empty prison cell scene baseline: same cell layout, vertical iron bars, no characters, ambient cool blue-grey lighting, high narrow window on the upper right wall, straw floor. Used only for spatial anchoring."
    },
    {
      "file": "31b_director/ref3_gaojiajun.png",
      "prompt": "@图片3 Gao Jiajun character reference: 1930s Nationalist warder uniform, standing on duty at a cell door, calm professional posture. Used only to lock his look and clothing."
    },
    {
      "file": "31b_director/ref4_endframe.png",
      "prompt": "@图片4 Target end frame: Gao Jiajun with head and gaze turned very slightly toward Fang Zhimin inside the cell, expression shifting from cold to attentive; same seated group, same cold prison wall and high window; restrained 2D hand-drawn style. The final 6.50-second frame of this clip MUST match this image as closely as possible."
    }
  ],
  "main_prompt": "Restrained 2D hand-drawn animation inspired by classic Shanghai animation, with clear ink outlines, flat painted colour blocks, subtle paper texture, low-saturation cold blue-grey prison tones, and stable historical composition. NO 3D rendering, NO photorealism, NO subtitles. The shot begins by holding @图片1 exactly for approximately 1.00 seconds. Fang Zhimin is seated among three to four fellow prisoners in a cold blue-grey old prison cell; Gao Jiajun stands on duty outside the cell door. Characters, their clothing, and their positions must remain unchanged during this opening hold.\n\nFrom 00:01.000 to about 00:06.000, Fang Zhimin answers calmly and firmly. His mouth moves in sync with the words, and he makes only slight hand gestures. The fellow prisoners listen quietly and do not interrupt or look around. Gao Jiajun remains on duty at the door, gaze toward the corridor, mostly still — he does NOT yet turn toward the cell. The camera does not cut, does not change shot size, and does not pan; it is a locked medium-wide composition faithful to @图片1 and the cell layout of @图片2.\n\nFrom 00:06.000 to 00:06.500, Gao Jiajun (whose look is anchored by @图片3) turns his head and gaze very slightly toward Fang Zhimin inside the cell; his expression shifts from cold/indifferent to attentive. The turn is minimal and completed in one smooth motion — no exaggerated movement, no full 'being moved' performance, no step forward, no entering the cell.\n\nThe final frame at 6.50 seconds must match @图片4 as closely as possible: Gao Jiajun with head slightly turned toward the cell, the same seated group, the same cold prison wall and high window, and the same restrained 2D hand-drawn style. End on this target composition. No subtitles, logos, watermarks, modern objects, camera shake, fast zoom, extra scene, or additional character. No facial drift, no extra fingers, no proportion drift.\n\nFang Zhimin (S1) speaks once, quiet and restrained, in a calm firm low adult-male voice: <d>[Chinese] 耕田的有田种，做工的有工钱，孩子念得起书——做到了这些，就是三民主义。</d> He does not raise his voice. Gao Jiajun has no dialogue.\n\noverall_soundscape: Quiet prison room tone, distant restrained footsteps, faint iron-bar resonance, soft clothing movement, and the calm clear dialogue from Fang Zhimin. No exaggerated reverb and no loud music.\n\nnon_diegetic_music: N/A"
}
```

### reference_images 列表（对应 disk 文件 · 4 张）

| # | disk 文件名 | 来源路径 | 作用 |
|---|---|---|---|
| 1 | `ref1_firstframe.png` | 方/07_素材图/第三幕/卡3-1_狱中围坐.png | 起始画面锚定 |
| 2 | `ref2_empty_cell.png` | 方/07_素材图/第三幕/第三幕_3-1空牢房场景基准_v1.png | 空间锁定（无人物） |
| 3 | `ref3_gaojiajun.png` | 方/07_素材图/第二幕/高家骏_三视图.png | 高家骏造型锚定 |
| 4 | `ref4_endframe.png` | 方/07_素材图/第三幕/卡3-2A_首帧_来自3-1B尾帧.png | 终帧目标锁定（高家骏转头） |

## ❌ 硬驳回条件

- 首帧未与 Picture 1 同框 → 驳回。
- 终帧未与 Picture 4（高家骏转头）对齐 → 驳回。
- T2 切到任何其他机位或景别、做横摇 / 拉镜 → 驳回。
- 高家骏在 6.0s 之前转头 / 迈步 / 进牢门 / 做"被感化"表演 → 驳回。
- 重生监牢布局 / 方志敏离座 / 新增人物（胖子、凌凤梧等）/ 面孔漂移 / 多指 / 比例漂移 / 铁栏穿人 → 驳回。
- 出现字幕 / 水印 / 3D 渲染 / 写实摄影 / 镜头抖动 / 可读额外文字 → 驳回。
- 音频可静音或低声，最终台词可后期修复；视觉首末帧接续为优先。

---

## 📚 资料库素材索引（跨设备取全 · 我的文档）

> 待上传资料库后回填（描述词 1 篇 + 参考图 4 张 + 工作流 1 个）。
> 参考图下载后按 `ref1/ref2/ref3/ref4` 原文件名放入 `ComfyUI/input/31b_director/`。

**描述词**
- 本篇（v1.0 多参考图主执行依据）：（待回填）

**参考图 4 张**
| # | 库节点 | 对应文件名 |
|---|---|---|
| 1 | （待回填） | ref1_firstframe.png |
| 2 | （待回填） | ref2_empty_cell.png |
| 3 | （待回填） | ref3_gaojiajun.png |
| 4 | （待回填） | ref4_endframe.png |

**工作流**
- v1.0 四图 · 6.5s · mp0.7 · 8步（默认档）：（待回填）
