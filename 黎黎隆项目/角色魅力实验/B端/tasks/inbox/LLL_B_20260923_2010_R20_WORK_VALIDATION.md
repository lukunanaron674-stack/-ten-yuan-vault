# LLL_B_20260923_2010_R20｜WORK_VALIDATION

## 执行状态

- B端只完成文本交接。
- 当前：`queued_for_workbuddy_validation`
- 身份验证：`pending_work_identity_check`
- 渲染：`not_rendered_by_b_end`
- 音轨：`not_generated_or_unverified`
- Work 无需回传 ChatGPT；自行完成绑定、身份/单实例检查与双抽。

## 输入绑定

| Picture | 类型 | 来源 | 用途 |
|---|---|---|---|
| Picture 1 | 角色 `both` | `黎黎隆项目/角色魅力实验/B端/assets/character_refs/LLL_H3_character_card_001.jpg`；SHA-256 `5df6a463e5ee9fe7c4fc641c86cda9ebc1647867e78afd0d5430de7de02f0143` | 锁同一黎黎隆的脸、红发、比例、装甲、爪足、长机械龙尾与动作视图 |
| Picture 2 | 场景 | `黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-06_机械空港_双色主导.png`；blob `7f600f79069d4f5a839dd44f2160182b0066cb3e` | 锁机械空港双色环境，不覆盖角色 |

## 身份与单实例闸门

- [ ] Picture 1 可读取，且确认为 `LLL-MAIN-001`。
- [ ] 角色卡的多个视图被理解为同一人，不生成多个黎黎隆。
- [ ] 画面始终只有一个角色实体；无第二人、分身、镜像完整人物、分屏或四宫格输出。
- [ ] 红发、同一脸型、红白黑装甲、青蓝信号、机械爪足、长机械龙尾及连接连续。
- [ ] 无翅膀、武器、重复尾巴、额外肢体或新机械模块。
- [ ] Picture 2 仅控制场景；不把场景设施长到角色身上。

任一身份/单实例项失败，Work保留 `pending_image_validation` 并停止对应渲染；不得写成 passed。

## 动作与镜头闸门

- A段：唯一外部刺激为青蓝光带短亮；视线先动；前侧爪足停步；龙尾只反摆一次。
- B段：只续接选中的A段尾帧；龙尾末段先动；只迈一个侧向小步；随后停稳。
- 两段固定全身三分之四中远景、固定机位、固定光线；无推摇、环绕、转场。
- 不添加门、接口、车辆、生物、道具或第二表演主体。

## 双抽执行表

| clip | run | seed | work_task_id | render_status | identity/single-instance |
|---|---|---:|---|---|---|
| A_15s | run_A | null | null | queued | unverified |
| A_15s | run_B | null | null | queued | unverified |
| B_15s | run_A | null | null | queued | unverified |
| B_15s | run_B | null | null | queued | unverified |

- 同一clip的两次运行必须使用完全相同的prompt、Picture映射和其他参数。
- 接口实际支持可控seed且已生成后，才写真整数；否则维持 `seed=null`，用真实 `work_task_id` 区分。
- B段必须记录 `selected_A_run` 后才能建立连续性，不得混接未选中的A段。
- 若H3节点不支持音轨，按后期音效设计处理，不得声称已生成音轨。
