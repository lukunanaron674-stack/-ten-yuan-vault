# 黎黎隆项目｜角色魅力实验 B端（当前生产入口）

本目录负责**每小时产出文字任务**。B端把角色卡、已有角色素材登记、GitHub 13 张场景索引和十元动态链编译为可执行 H3 描述词，并随任务提供 `WORK_VALIDATION.md` 验证交接纸。云端 Work 持有或获取原始图片、完成 H3 Picture 绑定/身份验证并自行决定渲染；**无需向 ChatGPT 回传验证结果才能继续 B 端下一轮**。

## 当前有效角色池

角色选择以 `assets/character_pool_index.json` 为准，当前仅以下三名：
1. `LLL-MAIN-001` 黎黎隆：GitHub `assets/character_refs/LLL_H3_character_card_001.jpg`。维持现有红发、龙尾、爪足、头盔和基础比例，不因实验改写未冻结角色设定。
2. `ADV-001` 冒险者：身份卡和 JSON 在 `assets/character_refs/`；原始图 `FE5A039B15C5C5B5EA4D721B5C37AB26.jpeg` 暂未登记为已上传 GitHub，由 Work 找到并绑定。主动态视图仅 `full_body_identity`，只执行低动作测试。
3. `MOUSE-EAR-MUTANT-001` 鼠耳异变少女：身份卡和 JSON 在 `assets/character_refs/`；身份图 `030F6E3B89E0998CBF695064BC27C2A8.jpeg`，动态半身图 `MOUSE-EAR-MUTANT-001_H3半身动态四宫格_v2.0.png`。两图均由 Work 在实际可访问素材处绑定，不能混为澈/兔耳角色。

**旧版本 README 中“仅黎黎隆本人可用”的声明已经失效**；R3 预跑合成图、黎黎、大叔、奇美拉等不属于当前 B 端角色池。不要从旧任务、目录中随机图片或实验场景推导角色资格。

## 13 图池与图片责任

场景只从 `assets/scene_pool_13_index.json` 中取 `scene_id`、`source_path`、`github_blob_sha`；环境不覆盖角色外形。场景存在 GitHub 并不等于 H3 已绑定。没有 GitHub 原图的角色仍可以生成文字任务，待 Work 自行找到原图后才可渲染。

角色参考视图必须写明 `full_body_identity` / `half_body_dynamic` / `both`；半身动态图用于脸、表情、识别件和上身动作，全身视图校验身份、比例、服装装备和空间关系。仅有全身图时做低动作测试，不凭空宣称有独立动态卡。

## 每小时输出

读取 `rules/video_tenyuan_prompt_schema_v1.1.md` 和 `assets/character_refs/B端_Work验证交接与单角色叙事规范_v1.1.md`，按选中的角色/场景生成：
- `tasks/inbox/<task_id>.json`：真实参考路径与状态、`subject_definitions`、`retention_analysis`、`changed_variable`、动态链、镜头语法和交接状态。
- `prompts/generated/<task_id>_H3.md`：可见动作、镜头、起始→变化→结束、参考图 Picture 映射；十元术语只放结构字段。
- `tasks/inbox/<task_id>_WORK_VALIDATION.md`：发给 Work 的身份/原图/视图/Picture/场景/动作连续性核验纸；Work 无需回复 ChatGPT，直接按纸执行。

三份文件成功提交 GitHub `main` 后本轮 B端完成；提交失败如实记失败，不写虚构 commit。

## 当前生产方向：单角色叙事（不再制作 MV）

每一条任务只选一个角色 ID 为唯一出镜人物；不同小时可以更换主角，但**同一条视频只出现所选这一名角色的一个实体**。禁止加入其他演员、同屏分身/克隆/双视角/画中画、镜面或水面多出第二个完整人物；角色参考图的正面、45°、全身、半身和四宫格都是同一人的不同视图，不可生成多人。可以切镜、转身、出画再入画，但不得同一时刻复制人物，跨镜头必须保持身份和动作连续。

视频改为十元动态链驱动的单人连续事件短片：起点→阻碍→角色行动→关系改变→结果。场景、物件负责外部关系，不引入第二个人物。**不再使用澈 MV 风格基准，不做音乐卡点蒙太奇或角色轮播**；声音如有仅服务事件氛围。细节以 v1.1 视频编译规范和 v1.1 Work 交接规范为准，旧 v1.0 文件保留仅供历史追溯。

## Work 端的安全闸门

Work 在本地确认真实角色原图已绑定且角色身份匹配后才渲染。缺图/身份错配时 Work 在自己的队列里保留 `pending_image_validation`；**不阻断 B端继续提交下一小时的文本任务**。B端不声称图已上传、已完成身份验证、已出片或已评分，除非有可核实的实际记录。

## 版本号与轮次差异（2026-09-23 起生效）

新轮次统一读取 `rules/B端_版本号与轮次差异记录_v1.1.md`（`B-RULE-v1.1`），与上一轮对比并增加视频模式、出镜角色数量、同屏人物复制和跨镜头连续性字段。每轮先查 GitHub 同系列实际最新轮次再递增，写 `version_tracking`、父任务及文本差异；不把禁止复制的文字约束冒充已经通过 H3 视频实测。

继续按 v1.0 规则输出 `results/version_history/<task_id>_DIFF.md` 并顺序更新 `results/version_history/INDEX.md`。澈 MV 案例和旧规则只保留历史索引，不再用于新轮次的强制画风对照。Work 自行验证原图、单人实例与渲染，不需反馈给 B端才能继续每小时任务。
