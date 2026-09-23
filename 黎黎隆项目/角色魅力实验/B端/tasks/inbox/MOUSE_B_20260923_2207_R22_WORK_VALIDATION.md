# MOUSE_B_20260923_2207_R22｜WORK_VALIDATION

## 状态
- 角色图：`pending_image_validation`
- 渲染：`not_rendered_by_b_end`
- 音轨：`not_generated_or_unverified`
- 输出目标：9:16；Work实际运行时记录真实分辨率。

## Picture绑定

| Picture | 来源 | 用途 |
|---|---|---|
| 1 | `MOUSE-EAR-MUTANT-001_H3半身动态四宫格_v2.0.png`；Library ID `libfile_36caaef442b08191b0acddf57f8d85e2`；GitHub未上传 | 锁脸、白发、鼠耳、视线、头部和单手小动作 |
| 2 | `030F6E3B89E0998CBF695064BC27C2A8.jpeg`；864×1536；GitHub未上传 | 只校验小体型、宽袍、斜挎带、侧包和比例 |
| 3 | `黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-10_异种村庄_双色主导.png`；blob `3f0a6664e66899a228a8513bfc70688c0a866908` | 锁异种村庄双色环境，不生成第二生命主体 |

## 身份/单实例闸门
- [ ] 两张角色图均已绑定，且确认为同一个MOUSE-EAR-MUTANT-001。
- [ ] 两套四宫格没有被生成八个人或多人。
- [ ] 始终只有一个人物实体。
- [ ] 白色短发、同一脸型、半透明浅紫鼠耳、小体型、宽袍、深色边块、斜挎带与侧包稳定。
- [ ] 不得变成澈、兔耳角色、普通少女或其他角色。
- [ ] 场景内不得新增第二个生命、伙伴或表演主体。

失败时保持pending，不得写passed。

## 动作
- A：环境光一次→双耳先动→眼睛和头部跟随。
- B：单手抬至胸前下方→轻微转掌→双耳略放松；双脚不动。
- 固定膝上三分之四中景，无推摇转场。

## 双抽

| clip | run | seed | work_task_id | render_status |
|---|---|---:|---|---|
| A_15s | run_A | null | null | queued |
| A_15s | run_B | null | null | queued |
| B_15s | run_A | null | null | queued |
| B_15s | run_B | null | null | queued |

同一clip两抽必须同prompt、同三张图片、同9:16参数。真实生成后才记录seed/task_id；B段执行前先记录selected_A_run。若节点无音轨，音频字段只交给后期。
