# ADV_B_20260924_1009_R34｜WORK_VALIDATION

## 当前事实状态

- B端只完成文本交接；图片未由本轮绑定，H3未运行，音轨未生成。
- Picture 1：`FE5A039B15C5C5B5EA4D721B5C37AB26.jpeg`，声明SHA-256 `dd81d92d9f565831c8e924aa2ff36b3fd3cf85b526376971b51ec4f1dd43d1c4`；`github_image_upload=false / pending_image_validation`。
- Picture 2：`SCENE-03`，`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-03_森林湖泊_三色层级.png`，blob `a877b428bd9cf86dded78f4a00c36671afeaa35e`。
- 已登记语义只有“三色前中后景层级；适合限制、绕行和空间改道”；具体收窄区与开放侧带仍待Work实图确认。

## Picture映射

- Picture 1只负责唯一ADV-001的身份、体量、服装和装备连接；身份卡多区域不得生成多人。
- Picture 2只负责SCENE-03场景身份、真实既有元素、空间连续性与三色色卡逻辑，不授权新增障碍、路径或反打空间。

## Work必检

- [ ] 定位真实JPEG并核对SHA-256、尺寸、版本和身份。
- [ ] 确认只有一个宽厚成年冒险者，全部负重保持连接。
- [ ] 实际查看Picture 2，确认直行收窄关系和现有开放侧带真实可用。
- [ ] 若几何不成立，标记验证失败并停止；不得让H3补造地形。
- [ ] 若仅横移机位空间不足，B段改固定机位，不改变路线事件。
- [ ] A段从真实输出选定一个尾帧；B两抽使用同一个A尾帧。
- [ ] final prompt及所有LoadImage节点均属于R34。
- [ ] A/B各run_A/run_B，共4次；记录独立真实task_id。
- [ ] seed只有接口真实返回整数时填写，否则保持null。
- [ ] H3不支持音轨时，音频字段仅作后期清单。

当前判定：`pending_image_validation / pending_environment_geometry_validation / text_ready`。禁止预填passed、rendered、done、seed或task_id。
