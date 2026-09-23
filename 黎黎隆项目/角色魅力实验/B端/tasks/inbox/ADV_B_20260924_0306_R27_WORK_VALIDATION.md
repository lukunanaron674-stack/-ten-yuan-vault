# ADV_B_20260924_0306_R27｜WORK VALIDATION

## 1. Picture 映射
- Picture 1 / 角色：`FE5A039B15C5C5B5EA4D721B5C37AB26.jpeg`
  - 角色：ADV-001 冒险者
  - 原图 SHA-256：`dd81d92d9f565831c8e924aa2ff36b3fd3cf85b526376971b51ec4f1dd43d1c4`
  - 视图：full_body_identity；正面、45°、脸部和装备区均属于同一角色。
  - GitHub 图片上传：false。Work 必须从真实可访问位置绑定原始 JPEG。
- Picture 2 / 场景：`黎黎隆项目/04_场景/五色视觉系统/R4_色彩脚本/assets/R4-04_机械空港_合_稳定结果.png`
  - 场景：SCENE-13
  - GitHub blob：`c1ad3a5feb333383d8275159e8db04793e71a6c2`
  - 用途：锁机械空港稳定结果场景的身份、既有元素、空间连续性和色卡逻辑，不锁死原图景别或唯一构图。

## 2. v1.3 画风检查
- [ ] style_identity_lock 服从角色图和场景图的真实线面、材质与原色。
- [ ] visual_expression_variable 仅改变景别、留白和同轴慢推，不重设计角色。
- [ ] 没有复制澈的青白能量身体、发色、材质或构图。
- [ ] 没有因 V35 的“低饱和/白色高光”文字强改 ADV 与 SCENE-13 的原色。
- [ ] 不把 V35 文字当作已被 V35 成片验证的因果证据。

## 3. 单人和素材检查
- [ ] 最终 workflow 的 Picture 1 是真实 ADV 原图；Picture 2 是 SCENE-13。
- [ ] 所有 LoadImage 节点与最终 prompt 均属于 R27，无旧模板残留。
- [ ] 四区角色参考没有生成四个人；全片始终只有一个 ADV-001。
- [ ] 体型、脸、胡须、披风层次、红围巾/背带、白色支架、背包和青蓝腰灯连续。
- [ ] A 段灯具只摆一次；角色不迈步。
- [ ] B 段使用真实选定的 A 尾帧，并保持相同人物位置、朝向和背景轴。

## 4. 环境推导闸门
两段均标记 `needs_environment_inference=true`：
- A 的大远景重构未由本轮二进制视觉审核确认。
- B 的慢推需要场景近层几何连续。
- 若出现新增结构、空间漂移或场景身份丢失，Work 应固定原景别或减小推镜，不得把推导结果写成原图已验证事实。

## 5. 双抽计划
| clip | run | prompt_hash | seed | actual_task_id | status |
|---|---|---|---:|---|---|
| A_15s | run_A | null | null | null | queued_for_workbuddy_validation |
| A_15s | run_B | null | null | null | queued_for_workbuddy_validation |
| B_15s | run_A | null | null | null | queued_for_workbuddy_validation |
| B_15s | run_B | null | null | null | queued_for_workbuddy_validation |

- 同一段两抽必须使用完全相同 prompt、图片和其他参数。
- Work 记录真实 selected_A_run 与尾帧后才解锁 B。
- seed 只有接口真实返回整数时填写，否则保持 null，以不同实际 task_id 区分。
- 当前没有成片、评分、task_id 或音轨记录。

## 6. 闸门状态
```yaml
image_validation: pending_image_validation
single_instance_validation: pending
style_identity_lock_validation: pending
environment_inference_validation: pending
workflow_binding_preflight: pending
clip_A_double_draw: not_started
selected_A_run: null
clip_B_double_draw: blocked_until_selected_A_frame
render_status: not_rendered_by_b_end
audio_status: capability_unverified
```
