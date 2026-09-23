# B端视频十元描述词编译规范 v1.3｜V35画风锁＋场景身份与景别分离

> v1.3 基于 v1.2 新增以下视觉编译规则；继续沿用单角色、非MV、2×15秒（每段同词双抽）、环境音/情绪音、Work图片验证和真实seed记录。历史V35原始MD不覆盖。重要：V35原始MD与实际渲染输入存在待确认不一致，故V35文本只能作视觉设计参照，**不能声称其画风已被V35视频实证**。

## A. STYLE：画风固定层与镜头表现变化层分离

保留可复用画风描述：清晰的二维手绘形体与粗细变化的墨线、轻薄水彩晕染、柔和漫射光与克制阴影、清晰动作、充足留白、避免发亮塑料3D及硬数字边缘。但不能强制覆盖项目原图的独特画风/色卡、不能一律锁定青白或低饱和；若角色原图明显不符合这些风格形容词，优先忠实于角色/场景参考图与现有色卡，记录冲突而非重设计角色。

将 STYLE 分成：
- style_identity_lock：原角色与场景共有的绘画线面、材质边界与已确认色卡，不随景别改造身份。
- visual_expression_variable：本轮可通过文本控制的景别、远近层次、构图留白、天气、雾层、光照方向和互动配色；任何改变须仍保持场景和角色可辨识。
禁止把角色身体内发光/能量人形、澈的发色和材质当成通用视觉锁；只有角色原图/身份卡确认才使用对应效果。

## B. ENVIRONMENT：场景身份锁≠原图固定构图

Picture 2 是**场景身份与美术参考**（例如原图确实是森林湖泊时：水岸、湖面、树木层次、雾与配色关系），不得把场景图误作角色造型参考；必须优先从本轮真实13图池记录核实所选场景中的元素，不能从文字标签无证据杜撰桥、塔、建筑或湖岸方向。

Picture 2 不强制相同画幅、同一景别、同一相机角度或原图像素级构图。允许文字为**同一个空间**设计：大远景/中远景/中景/近景/特写，平视/俯视/仰视、前中后景层次、焦点、横移/推拉/轻环绕、天气雾层和光照变化。镜头变化须符合场景可以推导的空间连续性；对原图未提供足够几何信息的反打/俯视/大范围移动标注 `needs_environment_inference`，提示Work谨慎执行，不宣称这些新视角已被原图验证。

## C. 每个镜头新增字段

```yaml
scene_reference:
  picture_ref: "Picture 2"
  scene_id: "<实际13图池编号>"
  source_path: "<核验过的GitHub路径或待Work绑定>"
  identity_elements: ["<从原图/可信描述可核实的元素>"]
  locked: ["location identity", "spatial consistency", "palette logic"]
  variable: ["shot_size", "camera_angle", "composition", "foreground_background", "weather_lighting_if_supported"]
  needs_environment_inference: false
style:
  style_identity_lock: "<角色原图/场景图一致的线面材质色卡>"
  visual_expression_variable: "<本镜头具体景别构图光线>"
shot:
  shot_size: "medium_wide"
  camera_angle: "slightly_elevated_three_quarter"
  composition: "<角色所占画面、留白与景物相对位置>"
  action_start: "<起始>"
  observable_change: "<动作及环境反应>"
  action_end: "<结果>"
  camera_move: "slow_push_in"
  spatial_continuity: "<与上一镜头的岸线/方位/角色位置关系>"
```

上述示例不可不加判断地套为森林湖泊或固定机位；每轮根据真实场景、动态链与单角色行动选择一至数个必要镜头，不在单段15秒里硬塞全部景别。

## D. H3文字编译顺序

STYLE（固定画风＋本轮变化）→ CHARACTER (Picture 1; 唯一出镜实体，外形锁) → ENVIRONMENT (Picture 2; 场景身份与色彩关系，不固定镜头) → CAMERA AND COMPOSITION（明确景别、机位、相机运动、前中后景与空间连续性）→ ACTION（可观察的起点→动作→终点）→ ambient_soundscape/emotional_sound_cue（仅辅助动作和情绪，不做MV）→ NEGATIVE（无第二人/克隆/多视图角色表输出/改设/无端换场）。若只有单图参考，明确 scene reference 为文字/未绑定而不可写作 Picture 2 已提供。

## E. 对照实验与真实性

V35原文（20260923_222921_18208.md）保存为 `V35_TEXT_REFERENCE`，不能复写或谎称V35实际成片一定由其生成。新增一个变量时可固定同一角色/场景/模型参数分别测景别或光线，不将seed随机差异解释为景别效果。按 v1.2继续每段 run_A、run_B 两抽；没有Work运行结果时只记录计划。
