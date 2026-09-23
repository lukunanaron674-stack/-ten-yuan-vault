# MOUSE_B_20260923_1911_R19｜WORK_VALIDATION

## 图片与身份
- character_id：`MOUSE-EAR-MUTANT-001`
- Picture 1：`MOUSE-EAR-MUTANT-001_H3半身动态四宫格_v2.0.png`；Library ID `libfile_36caaef442b08191b0acddf57f8d85e2`
- Picture 2：`030F6E3B89E0998CBF695064BC27C2A8.jpeg`
- Picture 3：`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-01_森林湖泊_单色.png`
- scene_id：`SCENE-01`；blob `fcbbd771567ad65327d18248466f24b0f4339638`
- 两张角色图均`github_image_upload=false`，由Work绑定同一角色原图。

## 验收
- [ ] 半身卡与全身卡都是同一个鼠耳异变少女；四宫格不生成四个人。
- [ ] 保持白发、同一脸型、半透明浅紫鼠耳异变、宽白袍、小体型、深色边块、斜挎带和侧包。
- [ ] 不得识别为澈、兔耳角色、普通少女或其他角色。
- [ ] A段严格先涟漪、后鼠耳、再眼睛与头部；B段只压带、迈小半步、衣包落稳。
- [ ] 全片仅一个角色；无分身、镜像双人、分屏、额外肢体、尾巴、角、翅膀、武器或水印。
- [ ] B段从实际选中的A段结果续接；两段同机位、同方向、同光线。

| clip | prompt_hash | run | seed | Work task_id | render_result | validation |
|---|---|---|---:|---|---|---|
| A_15s | null | run_A | null | null | null | pending |
| A_15s | null | run_B | null | null | null | pending |
| B_15s | null | run_A | null | null | null | pending |
| B_15s | null | run_B | null | null | null | pending |

Work支持seed时只在实际生成后填真实整数；不支持则保持null并分开填写真实task_id。音轨能力为`unverified_by_b_end`，不支持时转后期。
