# ADV_B_20260924_1308_R37｜WORK_VALIDATION

## Picture映射

- Picture 1：`ADV-001`唯一冒险者，源文件`FE5A039B15C5C5B5EA4D721B5C37AB26.jpeg`，SHA-256 `dd81d92d9f565831c8e924aa2ff36b3fd3cf85b526376971b51ec4f1dd43d1c4`。
- 视图：`full_body_identity`；四个区域只描述同一个人。
- Picture 1状态：`pending_image_validation`，GitHub图片上传为`false`。
- Picture 2：`SCENE-04`，路径`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-04_森林湖泊_五色组合.png`，blob `efefd97514fc31d569134c821aada9cb3fdcb206`。
- Picture 2状态：路径可用；完整全身落脚、五色背景中的剪影分离仍待实图验证。
- `needs_environment_inference=true`。

## Work硬闸门

- [ ] 定位ADV真实JPEG并核对SHA-256。
- [ ] 确认宽厚成年体型、胡须、疲惫脸、披风、背带、完整背包卷筒与唯一腰灯。
- [ ] 确认四个身份区域没有被输出为多人。
- [ ] 绑定SCENE-04准确路径/blob并检查真实五色色卡。
- [ ] 确认固定9:16中远景可显示全身、负重剪影、灯具摆弧与一个安全落脚点。
- [ ] A/B各只有一步；没有跑、跳、跌倒或夸张摇摆。
- [ ] B段必须使用一个真实A段尾帧，且负重接近回中后才迈步。
- [ ] 不得为动作新增道路、障碍、桥、码头、墙、门、石块或建筑。
- [ ] 最终workflow prompt与全部LoadImage节点属于R37。
- [ ] 未通过时保持pending并停止渲染，不得写passed。

## 双抽

| segment | run | prompt/input | seed | work_task_id | status |
|---|---|---|---|---|---|
| A | run_A | 与A/run_B完全相同 | null | null | planned |
| A | run_B | 与A/run_A完全相同 | null | null | planned |
| B | run_A | 与B/run_B相同并共用选定A尾帧 | null | null | planned |
| B | run_B | 与B/run_A相同并共用选定A尾帧 | null | null | planned |

真实运行后才记录真实seed和task_id；接口不支持seed时保持null。音轨能力未验证，声音字段必要时转后期清单。

当前实际完成：0；视频、音轨、图片验证结果：无。
