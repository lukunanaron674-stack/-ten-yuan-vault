# MOUSE_B_20260924_1208_R36｜WORK_VALIDATION

## Picture映射

### Picture 1｜唯一角色

- character_id：`MOUSE-EAR-MUTANT-001`
- 主动态参考：`MOUSE-EAR-MUTANT-001_H3半身动态四宫格_v2.0.png`
- library_file_id：`libfile_36caaef442b08191b0acddf57f8d85e2`
- 全身身份参考：`030F6E3B89E0998CBF695064BC27C2A8.jpeg`
- GitHub图片上传：均为`false`
- 状态：`pending_image_validation`
- 四个面板和两份素材只定义同一个物理角色；不得输出四人或分身。

### Picture 2｜唯一场景

- scene_id：`SCENE-01`
- path：`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-01_森林湖泊_单色.png`
- blob：`fcbbd771567ad65327d18248466f24b0f4339638`
- 状态：`available_by_github_path`
- 视觉几何：`pending_work_visual_check`
- `needs_environment_inference=true`

## R36镜头单变量闸门

- [ ] A段中近景完整保留两侧鼠耳异变结构、脸、眼睛、肩部、上袍与背带顶部。
- [ ] A段背景仍能确认是同一SCENE-01，而不是替换地点。
- [ ] B段可从选定A尾帧沿同轴连续拉远到全身中远景，不切镜、不反打。
- [ ] 拉远揭示的地面、水、树层、雾与留白都能由真实Picture 2支持。
- [ ] 镜头停稳并显示双脚之前，角色不得迈步。
- [ ] B段只有一步，且不朝水中。
- [ ] 所有角色参考面板仍解释为同一个人。
- [ ] 最终workflow prompt与全部LoadImage节点均属于R36。
- [ ] 任一检查失败时保持pending并停止渲染，不得写passed。

## 双抽记录

| segment | run | prompt/input | seed | work_task_id | 当前状态 |
|---|---|---|---|---|---|
| A | run_A | A段完整固定prompt；与A/run_B相同 | null | null | planned |
| A | run_B | A段完整固定prompt；与A/run_A相同 | null | null | planned |
| B | run_A | B段完整固定prompt；与B/run_B共用选定A尾帧 | null | null | planned |
| B | run_B | B段完整固定prompt；与B/run_A共用选定A尾帧 | null | null | planned |

只有Work真实运行并返回后才填写真实seed/task_id；不支持seed则继续为null。

## 音频

音轨能力未验证。若H3节点不支持音轨，环境声、情绪声和动作触发点全部转为后期音效清单。

## 当前状态

- 图片绑定：未执行
- 身份验证：未执行
- 场景与拉远几何验证：未执行
- 计划运行：4
- 实际完成：0
- 视频/音轨：无
