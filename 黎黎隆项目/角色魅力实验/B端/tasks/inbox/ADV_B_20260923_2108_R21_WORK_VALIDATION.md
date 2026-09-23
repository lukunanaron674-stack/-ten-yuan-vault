# ADV_B_20260923_2108_R21｜WORK_VALIDATION

## 状态

- B端只完成文字交接。
- 身份：`pending_image_validation`
- 渲染：`not_rendered_by_b_end`
- 音轨：`not_generated_or_unverified`

## Picture绑定

| Picture | 来源 | 视图与用途 |
|---|---|---|
| Picture 1 | `FE5A039B15C5C5B5EA4D721B5C37AB26.jpeg`；SHA-256 `dd81d92d9f565831c8e924aa2ff36b3fd3cf85b526376971b51ec4f1dd43d1c4`；GitHub未上传 | `full_body_identity`；锁同一冒险者的体型、脸、披风、背包背带、腰灯、手套和靴子 |
| Picture 2 | `黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-03_森林湖泊_三色层级.png`；blob `a877b428bd9cf86dded78f4a00c36671afeaa35e` | 锁三色森林湖泊环境；不覆盖角色 |

SCENE-03索引当前不含云端4090D路径/哈希，Work按GitHub source_path经现有通道获取；不得虚构远端路径。

## 身份与单实例闸门

- [ ] Work已找到正确原始JPEG，而非其他“大叔”或旧合成图。
- [ ] 四个参考区域都被识别为同一个ADV-001。
- [ ] 始终只有一个人物实体，无第二人、分身、镜像完整人物、分屏或四宫格输出。
- [ ] 宽厚成年体型、短黑发浓胡须、疲惫眼神稳定。
- [ ] 披风、红围巾、背带、白色支架、背包卷筒、腰灯、手套和靴子保持连接。
- [ ] 无角、尾巴、翅膀、新武器、额外肢体或装备消失。

失败时保留 `pending_image_validation`，不得标为passed。

## 动作检查

- A段：视线下移→靴尖试探→负重牵肩→腰灯一次摆动；不完成大步。
- B段：收紧下方背带一格→一个侧向小步→装备余摆落稳。
- 只允许full_body_identity低动作；不跑、不跳、不大转身、不举灯。
- 固定全身三分之四中远景、固定机位和光线。

## 双抽

| clip | run | seed | work_task_id | render_status | identity/single-instance |
|---|---|---:|---|---|---|
| A_15s | run_A | null | null | queued | unverified |
| A_15s | run_B | null | null | queued | unverified |
| B_15s | run_A | null | null | queued | unverified |
| B_15s | run_B | null | null | queued | unverified |

同一clip两抽保持prompt、Picture映射和参数一致。接口支持且真实生成后才写真整数seed；否则维持null并分别记录真实work_task_id。B段执行前先记录selected_A_run。
