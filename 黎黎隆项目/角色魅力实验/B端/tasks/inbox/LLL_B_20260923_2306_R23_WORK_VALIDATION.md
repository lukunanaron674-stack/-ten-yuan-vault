# LLL_B_20260923_2306_R23｜WORK VALIDATION

## 1. Picture 映射
- Picture 1 / 角色：黎黎隆项目/角色魅力实验/B端/assets/character_refs/LLL_H3_character_card_001.jpg
  - 角色 ID：LLL-MAIN-001
  - 视图：both
  - GitHub SHA-256：5df6a463e5ee9fe7c4fc641c86cda9ebc1647867e78afd0d5430de7de02f0143
  - 用途：锁脸型、红发、比例、红白黑装甲、青蓝功能信号、机械爪足、单条分节长机械龙尾。
- Picture 2 / 场景：黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-04_森林湖泊_五色组合.png
  - 场景 ID：SCENE-04
  - GitHub blob：efefd97514fc31d569134c821aada9cb3fdcb206
  - 用途：只锁森林湖泊环境、五色色彩层级和光线；不得改写角色。

## 2. Work 执行前验证
- [ ] Picture 1 确实为黎黎隆本人，身份与角色卡一致。
- [ ] Picture 2 确实为 SCENE-04，不把场景中可能存在的人形元素当演员。
- [ ] 四宫格/多视图只代表同一角色的参考视图，输出始终只有一个角色实体。
- [ ] 角色仅有一条长机械龙尾，没有额外肢体、分身、镜像完整人物或第二表演主体。
- [ ] 目标画幅为 9:16；实际分辨率待真实执行后填写。
- [ ] 固定机位、固定景别、固定光线、固定天气。
- [ ] Clip B 只接续 Work 实际选定的 Clip A 尾帧。

## 3. 双抽计划
| clip | run | prompt_hash | seed | actual_task_id | status |
|---|---|---|---:|---|---|
| A_15s | run_A | null | null | null | queued_for_workbuddy_validation |
| A_15s | run_B | null | null | null | queued_for_workbuddy_validation |
| B_15s | run_A | null | null | null | queued_for_workbuddy_validation |
| B_15s | run_B | null | null | null | queued_for_workbuddy_validation |

- A 段两抽使用完全相同 prompt、角色图、场景图和其他参数。
- Work 先检查 A 两抽，记录 selected_A_run 与真实尾帧，再解锁 B 两抽。
- B 段两抽也使用完全相同 prompt、同一已选 A 尾帧与相同参数。
- 只有接口实际支持并返回 seed 时才填真实整数；否则保留 seed=null，以不同真实 actual_task_id 区分。
- 当前没有任何真实 task_id、成片、评分或音轨记录。

## 4. 验收目标
1. 全片每一时刻人物数为 1。
2. 左向假动作只发生在眼睛、头与肩线，A 段双脚保持原位。
3. B 段尾尖先向右，身体后跟，只完成一个小斜步。
4. 脸、红发、装甲、爪足、单尾与比例跨段连续。
5. 若 H3 不支持音轨，把声音字段交后期，不得标记“音轨完成”。

## 5. 闸门状态
```yaml
image_validation: queued_for_workbuddy_validation
single_instance_validation: pending
clip_A_double_draw: not_started
selected_A_run: null
clip_B_double_draw: blocked_until_selected_A_frame
render_status: not_rendered_by_b_end
audio_status: capability_unverified
```
