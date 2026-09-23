# LLL_B_20260924_0207_R26｜WORK VALIDATION

## 1. Picture 映射
- Picture 1 / 角色：黎黎隆项目/角色魅力实验/B端/assets/character_refs/LLL_H3_character_card_001.jpg
  - 角色 ID：LLL-MAIN-001
  - 视图：both；卡内多视图都是同一个角色
  - GitHub SHA-256：5df6a463e5ee9fe7c4fc641c86cda9ebc1647867e78afd0d5430de7de02f0143
  - 用途：锁脸、红发、比例、红白黑机械装甲、青蓝功能信号、机械爪足和单条分节长机械龙尾。
- Picture 2 / 场景：黎黎隆项目/04_场景/五色视觉系统/R4_色彩脚本/assets/R4-02_机械空港_承_技术接口.png
  - 场景 ID：SCENE-12
  - GitHub blob：cc932fa2e6ed07affd05fc15adbde0a2d23cfae1
  - 用途：锁机械空港技术接口地点、既有结构、色彩关系和氛围；允许文字选择低机位中全景，但不得替换地点或重设角色。

## 2. 本轮特殊闸门
B1 提交 `1dc712a0` 指出：角色池写有 `h3_render_eligible=true`，但当前人工约束仍把黎黎隆视为未完成角色。Work 必须以当前实际素材与人工约束为准，自行决定是否允许渲染。本文件不得把冲突状态写成 passed。

## 3. Work 执行前验证
- [ ] Picture 1 是当前允许使用的黎黎隆参考，而非旧模板或别的角色。
- [ ] 角色卡多视图只生成同一个黎黎隆实体。
- [ ] Picture 2 是 SCENE-12；场景只作环境，不产生第二演员或人形接口。
- [ ] 全程最多一个角色；只有一条长机械龙尾；无分身、完整镜像人物、额外爪足或尾巴。
- [ ] 最终 workflow prompt 与所有 `LoadImage` 绑定均属于 R26。
- [ ] 固定 9:16 低机位三分之二中全景、固定光线、固定天气、无运镜。
- [ ] A 段只有一次青蓝接口光线刺激；B 段只有原地转向，不向前移动。
- [ ] Clip B 只接续 Work 实际选定的 Clip A 尾帧。

## 4. 双抽计划
| clip | run | prompt_hash | seed | actual_task_id | status |
|---|---|---|---:|---|---|
| A_15s | run_A | null | null | null | queued_for_workbuddy_validation |
| A_15s | run_B | null | null | null | queued_for_workbuddy_validation |
| B_15s | run_A | null | null | null | queued_for_workbuddy_validation |
| B_15s | run_B | null | null | null | queued_for_workbuddy_validation |

- 每段两抽使用完全相同 prompt、角色图、场景图及其他参数。
- Work 先检查 A 两抽，记录 selected_A_run 与真实尾帧，再解锁 B 两抽。
- 只有接口真实支持并返回 seed 时才填写整数；否则保持 null，以不同真实 actual_task_id 区分。
- 当前没有真实 task_id、成片、评分或音轨记录。

## 5. 验收目标
1. 全片每一时刻人物数为 1。
2. 眼睛→头→尾尖→肩→原地爪足转向依次发生，动作小而可读。
3. B 段人物位置不前移；SCENE-12 的地点与结构连续。
4. 脸、红发、装甲、爪足、单尾与比例跨段连续。
5. 若 H3 不支持音轨，声音字段仅交后期，不标记“音轨完成”。

## 6. 闸门状态
```yaml
image_validation: queued_for_workbuddy_validation
character_production_status: conflict_requires_work_revalidation
single_instance_validation: pending
workflow_binding_preflight: pending
clip_A_double_draw: not_started
selected_A_run: null
clip_B_double_draw: blocked_until_selected_A_frame
render_status: not_rendered_by_b_end
audio_status: capability_unverified
```
