# ADV_B_20260923_1805_R18｜WORK_VALIDATION

## 原图
- character_id：`ADV-001`
- Picture 1：`FE5A039B15C5C5B5EA4D721B5C37AB26.jpeg`；SHA-256 `dd81d92d9f565831c8e924aa2ff36b3fd3cf85b526376971b51ec4f1dd43d1c4`
- reference_view：`full_body_identity`；GitHub原图未上传，由Work绑定。
- Picture 2：`黎黎隆项目/04_场景/五色视觉系统/R2_主导色/assets/R2-01_机械空港_深墨青主导.png`
- scene_id：`SCENE-10`；blob `c21d2465577eb2c00b0c66dee749d9e49723ce67`

## 验收
- [ ] 四宫格四个视图只生成同一个ADV-001。
- [ ] 宽厚体型、胡须、疲惫脸、披风、围巾、背包、背带、扣具和腰灯连续。
- [ ] A段仅负重落稳、背带小滑、单手压稳；B段仅手移灯具与小角度转灯。
- [ ] 灯具不脱离腰带；无第二人、分身、分屏、额外肢体、新武器或水印。
- [ ] B段从实际选中的A段结果续接；两段同机位、同空间、同光线。

| clip | prompt_hash | run | seed | Work task_id | render_result | validation |
|---|---|---|---:|---|---|---|
| A_15s | null | run_A | null | null | null | pending |
| A_15s | null | run_B | null | null | null | pending |
| B_15s | null | run_A | null | null | null | pending |
| B_15s | null | run_B | null | null | null | pending |

Work支持seed时仅在实际生成后填真实整数；不支持则保持null，但分开填写真实task_id。H3音轨能力为`unverified_by_b_end`，不支持时转后期。
