# MOUSE_B_20260924_0107_R25｜WORK VALIDATION

## Picture映射
- Picture 1：030F6E3B89E0998CBF695064BC27C2A8.jpeg
  - full_body_identity；校验小体型、宽大浅色短袍、深色边块、斜挎带和侧包。
- Picture 1B：MOUSE-EAR-MUTANT-001_H3半身动态四宫格_v2.0.png
  - Library ID：libfile_36caaef442b08191b0acddf57f8d85e2
  - half_body_dynamic；主导脸、白短发、表情、半透明浅紫鼠耳异变结构与上身动态。
- Picture 1与Picture 1B必须验证为同一个角色，不能生成两个角色或四宫格。
- Picture 2：黎黎隆项目/04_场景/五色视觉系统/R4_色彩脚本/assets/R4-01_机械空港_起_安静生命.png
  - scene_id：SCENE-11
  - blob：c87915a6d7232e6a485a8904d32b3f8001941283
  - 锁机械空港安静生命阶段、既有技术环境、色彩关系与氛围；不重新定义角色，也不锁死单一机位。

## 执行前检查
- [ ] 两张角色图均已由Work真实绑定。
- [ ] 白短发、半透明浅紫鼠耳异变、小体型、宽袍、深色边块、斜挎带和侧包保持一致。
- [ ] 不误识别为澈、黎黎隆、冒险者、兔耳角色或普通少女。
- [ ] 画面始终只有一个角色实体。
- [ ] 固定微俯三分之二中近景，背景仍可辨识为SCENE-11。
- [ ] A段不抬手、不迈步；B段也不迈步。
- [ ] B段只接续实际选中的A段尾帧。
- [ ] 最终workflow prompt与所有LoadImage节点属于R25，不残留旧Hermes/模板素材。

## 双抽计划
| clip | run | prompt_hash | seed | actual_task_id | status |
|---|---|---|---:|---|---|
| A_15s | run_A | null | null | null | queued_for_workbuddy_validation |
| A_15s | run_B | null | null | null | queued_for_workbuddy_validation |
| B_15s | run_A | null | null | null | queued_for_workbuddy_validation |
| B_15s | run_B | null | null | null | queued_for_workbuddy_validation |

- 同一clip的两抽不得改prompt、角色图、场景图或其他参数。
- 先记录selected_A_run及真实尾帧，再执行B段两抽。
- 仅实际接口返回或显式设置seed时写真实整数；否则保留null并记录不同actual_task_id。
- 音轨能力未核实；不支持时将声音字段视为后期设计。

## 当前闸门
```yaml
image_validation: pending_image_validation
single_instance_validation: pending
workflow_prompt_preflight: pending
loadimage_preflight: pending
clip_A_double_draw: not_started
selected_A_run: null
clip_B_double_draw: blocked_until_selected_A_frame
render_status: not_rendered_by_b_end
audio_status: capability_unverified
```
