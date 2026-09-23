# R16｜鼠耳异变少女 H3 验证交接纸｜交给云端 Work

**关联任务**：`MOUSE_B_20260923_1606_R16.json`；**关联描述词**：`prompts/generated/MOUSE_B_20260923_1606_R16_H3.md`。

**职责**：本 MD 是 B 端交接验证要求，不是验证完成证书。Work 自己拿原图、核对、绑 H3、决定能否渲染；**不需要把验证结果反馈给 ChatGPT/B 端**，B端每小时任务照常产生文字成果。

## 1. 角色素材：必须绑定真实原图
- `character_id=MOUSE-EAR-MUTANT-001`，正式名称：**鼠耳异变少女**；不与澈、兔耳角色或普通少女合并。
- `view_type=both`；首要动态参考 `half_body_dynamic`：`MOUSE-EAR-MUTANT-001_H3半身动态四宫格_v2.0.png`（登记 Library ID `libfile_36caaef442b08191b0acddf57f8d85e2`）。主锁脸型、白色短发、表情、鼠耳结构、上身动作。
- 身份校验参考 `full_body_identity`：`030F6E3B89E0998CBF695064BC27C2A8.jpeg`。锁小体型、宽白短袍、深色边块、斜挎带、侧包、身体空间比例。
- **上述原图未登记为已上传 GitHub**；B端不声称图像已上传/已绑定。Work 必须在自己可访问的素材库找到两张原始图。仅有 MD 或缩略图不能替代原图。找不到任一张，则保留 `pending_image_validation`，不要把场景图当角色图替代。
- 身份资料：`assets/character_refs/MOUSE-EAR-MUTANT-001_角色身份验证与十元分析_v1.1.md`；动态资产登记：`assets/character_refs/MOUSE-EAR-MUTANT-001_H3_DYNAMIC_ASSET.json`。

## 2. 场景素材
- 场景：`SCENE-02`，来自 `GITHUB_13_SCENE_POOL_V1`；
- GitHub source_path：`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-02_森林湖泊_双色主导.png`
- GitHub blob SHA（非文件 SHA-256）：`249b3a0f00aa894772d1049e800f4813723184df`。Work 拉取并核实实际文件，保留原图双色关系。
- **Picture 映射**：`Picture 1 = 半身动态v2图（主角色参考）`；`Picture 2 = 全身身份图（同一个角色的比例校验）`；`Picture 3 = SCENE-02（环境参考）`。若 H3 工作流仅支持两张图，Work 先使用软件提供的角色多图绑定或制作**不更改原画**的合法合并参考；不能悄悄挤掉角色身份图或用场景覆盖角色身份；不能绑定成功则等待，不渲染。

## 3. Work 自检清单
- [ ] 绑定的是真实两张角色原图，属于同一鼠耳异变少女；多视图不是多个人。
- [ ] 半身图主导动态，全身图只校验比例服装；角色 ID、Picture 映射、场景路径对应正确。
- [ ] 白色短发、半透明浅紫**鼠耳异变结构**、白短袍、深色边块、斜挎带、侧包连续；耳朵不能变普通兔耳或饰物。
- [ ] `D1` 呼吸微动、`D2` 双耳先后扫听、`D3` 视线观察反光、`D4` 触带并小幅侧移；四个动作中是同一张脸、同一套衣服。
- [ ] 场景只影响环境和光照，不改变角色五官/配色；项目五色色卡按现有规范使用。
- [ ] 对照 `assets/character_refs/B端_Work验证交接与澈MV风格基准_v1.0.md`：借鉴澈 MV 的干净手绘线面、轻薄晕染、柔和克制的光与细腻停顿、关系变化的可读性；**不要复制澈的青白发、青白能量体、灰紫脸和神圣表演**。

## 4. 状态和后续
```yaml
handoff_status: queued_for_workbuddy_validation
image_validation: pending_image_validation
b_end_verified_images: false
b_end_rendered_h3: false
work_may_render: only_after_actual_originals_bound_and_identity_checked
work_feedback_to_chat_required: false
```

Work 可以在自身日志记录通过/失败与视频结果；不要求为了让 B 端继续写描述词而发验证回执。只有 Work 自己确认全部原图绑定、同一角色身份通过后，才进入渲染。
