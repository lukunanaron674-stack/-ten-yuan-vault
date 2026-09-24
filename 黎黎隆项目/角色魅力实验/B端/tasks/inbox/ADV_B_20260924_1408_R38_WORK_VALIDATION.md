# ADV_B_20260924_1408_R38｜WORK_VALIDATION

## Picture映射

- Picture 1：ADV-001 冒险者
  - 声明源：`FE5A039B15C5C5B5EA4D721B5C37AB26.jpeg`
  - 声明SHA-256：`dd81d92d9f565831c8e924aa2ff36b3fd3cf85b526376971b51ec4f1dd43d1c4`
  - GitHub图片绑定：false
  - 状态：`pending_image_validation`
- Picture 2：SCENE-04 森林湖泊·五色组合
  - 路径：`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-04_森林湖泊_五色组合.png`
  - 声明blob：`efefd97514fc31d569134c821aada9cb3fdcb206`
  - 状态：路径可引用；视觉几何 `pending_work_visual_check`
  - `needs_environment_inference=true`

## Work硬闸门（未执行，不得写passed）

- [ ] 核对ADV真实JPEG字节、尺寸、身份和完整负重
- [ ] 确认Picture 1四区域只对应同一人物，不得生成四个人
- [ ] 确认SCENE-04存在可支持全身落脚与小幅负重摆弧的画面空间
- [ ] 确认五色色卡逻辑来自实图，不用通用低饱和色替换
- [ ] 确认最终workflow prompt与全部LoadImage节点均属于R38
- [ ] 确认A的身体先停、负重后停可观察
- [ ] A双抽完成后选择一个真实尾帧供B两抽共用
- [ ] 确认B只在负重接近回中后迈步，且摆幅小于A
- [ ] 确认全程一个物理角色、无分身、无其他人物、无MV
- [ ] 若H3无音轨能力，仅将声音字段作为后期设计

## Sampling

- Segment A：run_A / run_B，完全相同prompt
- Segment B：run_A / run_B，完全相同prompt，依赖同一真实A尾帧
- planned=4；actual_completed=0
- 所有seed=null；所有work_task_id=null

任何图片、几何或身份闸门失败，Work自行停止渲染；不得把待验证改写成passed。