# MOUSE_B_20260924_1110_R35｜WORK_VALIDATION

## 1. Picture映射与真实来源

### Picture 1｜唯一角色身份

- character_id：`MOUSE-EAR-MUTANT-001`
- 半身动态源：`MOUSE-EAR-MUTANT-001_H3半身动态四宫格_v2.0.png`
- library_file_id：`libfile_36caaef442b08191b0acddf57f8d85e2`
- 全身身份源：`030F6E3B89E0998CBF695064BC27C2A8.jpeg`
- GitHub上传：两张源图均为 `false`
- 当前状态：`pending_image_validation`
- 视图规则：半身图主导脸、表情、鼠耳反应；全身图只校验比例、袍服、背带、侧包、鞋与落脚空间。
- 硬规则：四宫格四个面板和两张身份素材只描述同一人物，绝不能输出四个人、分身或第二个角色。

### Picture 2｜唯一场景

- scene_id：`SCENE-01`
- GitHub路径：`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-01_森林湖泊_单色.png`
- blob：`fcbbd771567ad65327d18248466f24b0f4339638`
- 状态：`available_by_github_path`
- B端视觉几何状态：`pending_work_visual_check`
- Picture 2锁定：森林湖泊身份、已有元素、空间连续性、单色色卡逻辑。
- Picture 2不锁定：原图景别、机位、画幅或唯一构图。
- needs_environment_inference：`true`；固定中远景与安全一步方向必须由Work看真实图确认。

## 2. Work执行前硬闸门

- [ ] 定位并读取两张真实角色图，核对其确为同一鼠耳异变少女。
- [ ] 确认白短发、半透明浅紫鼠耳异变结构、小体型、宽浅色短袍、深色边块、斜挎带与唯一侧包稳定。
- [ ] 确认四宫格不会被解释成四个人。
- [ ] 从上述GitHub路径绑定SCENE-01真实图片，并核对blob。
- [ ] 确认一个固定9:16中远景可同时容纳全身、双脚、左右留白与沿地面的一步方向。
- [ ] 确认场景没有被提示词新增桥、码头、石块、树根、建筑、标牌、灯具或可见声源。
- [ ] 确认自然声只来自风、叶、水，不含人声、动物声或第二人物暗示。
- [ ] 确认A段尾帧被真实选定；B段两抽共同使用该尾帧。
- [ ] 确认最终workflow prompt与全部LoadImage节点都属于R35，没有残留澈或旧任务素材。
- [ ] 若任一角色/场景/单实例检查失败：保持 `pending_image_validation` 并停止渲染，不得写passed。

## 3. 同prompt双抽

| segment | run | prompt | Picture与其他参数 | seed | work_task_id | 当前状态 |
|---|---|---|---|---|---|---|
| A | run_A | H3 MD中A段完整固定prompt | 与A/run_B相同 | null | null | planned |
| A | run_B | H3 MD中A段完整固定prompt | 与A/run_A相同 | null | null | planned |
| B | run_A | H3 MD中B段完整固定prompt | 与B/run_B相同；共同使用选定A尾帧 | null | null | planned |
| B | run_B | H3 MD中B段完整固定prompt | 与B/run_A相同；共同使用选定A尾帧 | null | null | planned |

仅当Work真实接口支持/返回seed且已运行，才填写真实整数；否则继续为 `null`。每次运行分别记录真实 `work_task_id`，禁止复制、猜测或编造。

## 4. 单人连续性验收

- 屏幕中始终只有一个物理角色实例。
- A段左右耳转动次序清楚，眼睛/头部晚于耳朵，双脚不动。
- B段只有一次小步，方向沿Work验证过的地面且不朝水中。
- A/B同轴、固定机位、同场景、同角色、同服装、同侧包。
- 不出现兔耳化、换脸、袍服/色卡漂移、额外肢体、第二人、分身、四人输出。
- 音效只辅助定位与落步；无歌词、卡点剪辑或MV结构。

## 5. 音轨能力

H3节点音轨能力尚未验证。若不支持，`ambient_soundscape`、`emotional_sound_cue`及触发点全部作为后期音效设计，不能声称视频已有音轨。

## 6. 当前事实状态

- 图片绑定：未执行
- 身份验证：未执行
- 场景几何验证：未执行
- H3计划次数：4
- H3实际完成：0
- 视频结果：无
- 音轨结果：无
