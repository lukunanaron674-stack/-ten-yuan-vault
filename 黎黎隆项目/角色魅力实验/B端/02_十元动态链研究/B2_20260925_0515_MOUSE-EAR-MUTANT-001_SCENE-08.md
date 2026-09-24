# B2 十元动态链｜2026-09-25 05:15｜MOUSE-EAR-MUTANT-001 × SCENE-08

## B1 对应
- source: `B1素材索引/B1_ASSET_AUDIT_20260925_0003_R48.md`
- B1 blob: `f9b934b8e7ddcb02e74974becc5327762c460489`
- upstream: `MOUSE_B_20260924_2310_R47 v1.0`
- character candidate SHA-256: `417ce97887ba92b6d1c526bb8e6604a6f6d6d81a58a8eb94f0e1309192ea90ef`, 941×1672
- SCENE-08 registered blob: `3f0a6664e66899a228a8513bfc70688c0a866908`
- gates: same-character=null; H3 four-grid=null; scene actual binding/geometry=null.
- 黎黎隆本人继续排除。没有声称 H3、seed、output、盲审已发生。

## 本轮故事｜《她听见第二次，仍然不回头》
目标：测试“重复刺激”是否会把一次已结束的回应重新夺回行动权。

### 理论
- 主：N8
- 次：NZ7
- 变量：Z5、XN5
- 起点：第一次环境变化已被确认并结束，角色恢复原路线。
- 变化：同方向出现第二次相似、无升级的轻微刺激。
- 选择A：把第二次出现理解为必须追索，停下并转身。
- 选择B：耳朵再次确认，但判断信息没有增加，不重新打开整条回应链。
- 本轮：B。
- 终点：感知确认发生，但身体路线、步速与任务连续性保持。

候选链：
`N8 → NZ7→8克N7 → Z5补NZ8 → XN5→8克Z5→3 → N8补XN8 → N8+NZ7+XN8`

关系：
环境拥有再次请求注意的权利；角色允许第二次感知确认，但“重复”本身不足以获得第二次完整介入。

生克补候选：
1. NZ7→8 克 N8→7：第二次刺激仍可短暂打开感知。
2. Z5 补 NZ8：识别“它又发生了”。
3. XN5→8 克 Z5→3：新信息量为零时，既有行动链压制继续追索。
4. N8 补 XN8：确认结束后保持路线连续性。

阶段体量：
- S0 恢复：N8/NZ7/XN7
- S1 第二刺激：NZ8/N7
- S2 确认：Z5/NZ8
- S3 判断无新增：XN8/Z3
- S4 回收：N8/NZ7/XN8

### 镜头证据
必须在同一连续镜头读到：第一次事件已经结束并恢复步速 → 第二次同方向刺激出现 → 耳朵再次转向、眼睛只短暂偏移 → 头部不完成第二次大幅转向 → 脚步不减速、不改线。决定性证据是“第二次确实被听见，但响应深度下降”，不能拍成没听见。

### 独立检验
- 主A/B：第二次相似刺激后完整转身追索 vs 只做耳/眼确认继续走。
- 固定：两次刺激方向、强度、间隔、初始路线、步速。
- 控制1：第二次刺激更强，检验是否因“无升级”才停止扩张。
- 控制2：第二次加入新信息，检验 XN 截断是否依赖“信息重复”。
- 盲审问题：观众能否读成“她听见第二次了，只是判断没有必要再次介入”，而不是“她没听见/麻木”。

## B3 结构化工单
```json
{
  "task":"B2_20260925_0515_MOUSE-EAR-MUTANT-001_SCENE-08",
  "character":"MOUSE-EAR-MUTANT-001",
  "scene":"SCENE-08",
  "upstream":"MOUSE_B_20260924_2310_R47",
  "source_b1":{"path":"黎黎隆项目/角色魅力实验/B端/B1素材索引/B1_ASSET_AUDIT_20260925_0003_R48.md","blob":"f9b934b8e7ddcb02e74974becc5327762c460489"},
  "asset_state":{"character_sha256":"417ce97887ba92b6d1c526bb8e6604a6f6d6d81a58a8eb94f0e1309192ea90ef","character_dimensions":"941x1672","same_character_visual_verified":null,"h3_four_grid_layout_verified":null,"scene_git_blob":"3f0a6664e66899a228a8513bfc70688c0a866908","scene_actual_bound_path":null,"scene_geometry_check":null},
  "theory":{"primary":"N8","secondary":"NZ7","variables":["Z5","XN5"],"start":"第一次回应已结束并恢复路线","change":"同方向第二次相似刺激出现","choice":"确认重复但不重新开启完整介入","end":"路线与步速连续","chain":"N8 -> NZ8克N7 -> Z5补NZ8 -> XN8克Z3 -> N8补XN8","status":"experimental_hypothesis_not_frozen"},
  "b3_spec":{"duration_seconds":11,"aspect_ratio":"16:9","paired_runs":2,"gate":"text_ready_image_binding_pending"}
}
```

## 最终视频描述词（无十元术语）
```text
2D hand-drawn cinematic character sequence, 11 seconds, 16:9.

Preserve the established mouse-eared mutant girl from Picture 1 exactly. Do not redesign her identity, face, hair, mouse ears, clothing silhouette, or existing carried items.

Use Picture 2 only as the visual identity of the established environment. Do not invent architecture, creatures, props, or spatial structures unsupported by the bound reference.

Use one stable medium-wide shot that keeps her ears, eyes, head, pelvis, and feet readable.

She is already walking calmly along a clear route. A small off-screen environmental sound has just ended; her attention has returned forward and her normal walking rhythm is fully restored.

After a short interval, the same kind of harmless sound occurs again from the same direction, with no increase in intensity and no new information.

Her mouse ears turn toward it immediately. Her eyes make one brief sideways check, clearly showing that she heard the second sound.

This time her head does not complete another full turn. Her shoulders, pelvis, and feet remain aligned with the original route. She does not slow down and does not step toward the sound.

After the brief confirmation, her ears relax back toward neutral while she continues walking at the same pace.

End without revealing the source.

The emotional emphasis is on someone who notices a repeated request for attention but does not automatically reopen a decision she has already completed when nothing has changed.

Restrained 2D hand-drawn animation, precise ear-eye timing, stable walking rhythm, readable silhouette, minimal gesture, quiet pacing.

No second physical character, no invented creature, no new prop, no route change, no stop, no fear reaction, no character redesign, no text, no subtitle, no logo, no glossy 3D rendering.
```

## 状态
B2 complete; B3 text-ready; image binding pending; hypothesis only, not experimental result.
