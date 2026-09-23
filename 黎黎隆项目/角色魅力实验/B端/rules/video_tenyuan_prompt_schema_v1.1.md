# B端视频十元描述词编译规范 v1.1｜单角色叙事短片

> 2026-09-23 起对所有新轮次生效；继承 v1.0 的身份锁、十元链、13 场景池、真实图片绑定、状态字段，以下新规优先。旧任务原样保留作历史数据。

## 一、类型：不再做 MV

每轮产物为**一个角色的连续叙事/动作表演短片**，不是音乐视频、歌曲混剪、角色轮播、卡点换镜或纯造型展示。故事可短，但必须有可观察的起点、阻碍、角色行动、关系变化与结果。镜头根据事件必要性安排，不强制按音乐节拍剪辑；配乐如有仅作环境声音，不当作镜头组织中心。不要再套用「澈 MV」的风格基准或历史 MV 提示词；画风只遵循本轮角色原图、对应场景与项目色卡。

## 二、一个故事只选一个角色，一个时刻只有一个角色实例

- 角色池可以在**不同任务之间**轮换；但**同一条视频/同一任务只选一个 character_id 作为唯一出镜角色**，完整片段中不得加入其他人形角色、陪衬演员、路人、敌人、宠物拟人角色。环境、道具、声画效果可以作为关系端点，不能拟人成第二角色。
- 一个画面里该角色**只能有一个实体实例**。禁止克隆、同屏多视角、角色四宫格输出、画中画、分身、残影实体、镜像中第二个角色、倒影形成第二个完整人物、海报或屏幕上的重复人物，以及首尾帧复制出双主角。
- 多张正面、45°、全身、半身角色参考图仅用于**同一角色身份/结构校验**；H3 不得把多视图参考理解为多人或在同一画面展示多份角色。
- 连续镜头可以重新拍同一名角色，但跨镜头身份、服装、体量、空间位置与动作方向必须连续；禁止同屏两人、同一人物从两个位置同时出现。需要表现过去/想象/影子时改用无人物的环境或道具变化。
- 角色暂时出画后可重入镜，这不是「重复出现」；只要同一时刻仍是单一实例，且没有凭空多出第二个人即可。

## 三、文字输出固定约束

任务 JSON 应新增：
```json
{
  "video_mode": "single_character_narrative",
  "cast": {"character_id": "<唯一有效角色ID>", "on_screen_character_count_max": 1, "other_characters_allowed": false, "duplicate_instance_allowed": false},
  "shot_grammar": {"continuity_guard": "One physical instance of the selected character throughout; single character in frame; no clones, reflections of the character, split screen or duplicate silhouettes."}
}
```

每轮 H3 正文明确写：
```text
A continuous narrative short film featuring exactly one character: <selected character identity>.
Only one physical instance of this character exists at any time. No other people or humanoid characters. No duplicates, clones, split screen, inset panels, character reflections, full-body shadow duplicates, or simultaneous multiple views of the character. Multiple supplied character reference views depict the same single person and must not appear as separate characters. Maintain consistent identity, outfit, body proportions, action and screen direction across cuts.
```

把上句与本轮具体镜头动作相结合，不只写抽象禁令。每份 Work 验证纸必须核对输入的多视图属于同一角色，首尾帧及镜头切换中没有多生角色、倒影/影子形成第二人；如失败，Work 按自身流程调整/重跑。B端没有实测结果时不得宣称已解决。

## 四、保留结构，废止 MV 强制项

十元关系写结构字段，H3 正文只写可见动作。仍按既定交接格式生成 JSON、H3 MD、WORK_VALIDATION.md、DIFF.md 和版本索引。旧约定的“两段各15秒”如现有 H3 任务确需分段可沿用，但同一主角连续承接、不是两个 MV 段落；不强制 2–4 快切镜头，不强制音乐设计、歌曲、节奏卡点、MV 风格对比。
