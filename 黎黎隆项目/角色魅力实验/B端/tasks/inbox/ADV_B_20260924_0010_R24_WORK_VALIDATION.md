# ADV_B_20260924_0010_R24｜WORK VALIDATION

## Picture 映射
- Picture 1：ADV-001 原始 JPEG FE5A039B15C5C5B5EA4D721B5C37AB26.jpeg
  - SHA-256：dd81d92d9f565831c8e924aa2ff36b3fd3cf85b526376971b51ec4f1dd43d1c4
  - GitHub 图片状态：未上传；由 Work 在实际可访问素材处绑定。
  - 视图：full_body_identity，仅用于身份、比例、服装剪影、装备位置与低动作。
- Picture 2：黎黎隆项目/04_场景/五色视觉系统/R2_主导色/assets/R2-01_机械空港_深墨青主导.png
  - scene_id：SCENE-10
  - GitHub blob：c21d2465577eb2c00b0c66dee749d9e49723ce67
  - 只定义深墨青机械空港的地点身份、技术环境、色彩关系和氛围；不重新定义角色，也不强制复刻参考图的单一机位。

## 身份与单人检查
- [ ] 成年宽厚男性、深色胡须、疲惫宽脸、沉重体型保持一致。
- [ ] 深青黑分层披风、红围巾、交叉背带、白色金属支架、背包、卷筒、手套、重靴与青蓝灯均保留。
- [ ] 不生成年轻纤细剑士，不添加角、尾、翅膀或无来源武器。
- [ ] 四宫格/多视图只解释为同一人的参考，不生成多人。
- [ ] 全程只有一个 ADV-001，没有第二人物、完整镜像人或可见求救对象。
- [ ] 固定低机位中全景；9:16；实际分辨率待执行后填写。

## 内容边界
- B2 的“自动闸门、窄检修通道、门后人物”没有 SCENE-10 实图证据，本轮不得生成。
- 允许：一次地面轻振、灯具摆动、手触扣具、扣具重新扣紧、灯向前抬、一个小幅撑稳步。
- Picture 2 锁场景身份；低机位中全景和留白为文字设计的景别构图，不表示换场景。

## 双抽
| clip | run | prompt_hash | seed | actual_task_id | status |
|---|---|---|---:|---|---|
| A_15s | run_A | null | null | null | queued_for_workbuddy_validation |
| A_15s | run_B | null | null | null | queued_for_workbuddy_validation |
| B_15s | run_A | null | null | null | queued_for_workbuddy_validation |
| B_15s | run_B | null | null | null | queued_for_workbuddy_validation |

- A两抽同prompt、同图、同参数；记录真实task_id。
- 先选定 selected_A_run 和实际尾帧，再执行B两抽。
- 只有实际接口支持并返回seed时才填整数；否则保持null。
- 音轨能力未核实；不支持时将音频字段交后期。

## 当前闸门
```yaml
image_validation: pending_image_validation
single_instance_validation: pending
clip_A_double_draw: not_started
selected_A_run: null
clip_B_double_draw: blocked_until_selected_A_frame
render_status: not_rendered_by_b_end
audio_status: capability_unverified
```
