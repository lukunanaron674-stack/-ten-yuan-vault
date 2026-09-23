# ADV_B_20260924_0609_R30｜WORK_VALIDATION

## 当前真实状态

- B端仅完成文本任务，未绑定图片、未渲染、未生成音轨。
- Picture 1：ADV-001 原始文件声明为 `FE5A039B15C5C5B5EA4D721B5C37AB26.jpeg`；GitHub 图片未上传，身份状态 `pending_image_validation`。
- Picture 2：`SCENE-13`，GitHub 路径 `黎黎隆项目/04_场景/五色视觉系统/R4_色彩脚本/assets/R4-04_机械空港_合_稳定结果.png`，记录 blob `c1ad3a5feb333383d8275159e8db04793e71a6c2`。
- B端未视觉确认 SCENE-13 的具体放置面与大范围纵深，A/B 均为 `needs_environment_inference=true`。

## Picture 映射

- Picture 1 → ADV-001 唯一角色身份。若参考卡含全身、三分之二、表情和装备细节，它们都是同一人物的多视图，不能解释成多人。
- Picture 2 → SCENE-13 场景身份、既有元素、空间连续性和色卡逻辑。它不锁死景别，但也不能据文字新增门、栏杆、控制台、塔、标牌、车辆或反打空间。

## Work 必检

- [ ] 定位真实 ADV JPEG，核对字节 SHA-256、尺寸、版本和身份。
- [ ] 核对只有一个宽厚成年冒险者；短黑发、厚胡须、疲惫成熟面部、完整披风/背带/金属肩架/背包/卷包/手套/靴子。
- [ ] 核对开始时只有一盏青色腰灯，A 摘下后腰间不再另有灯，B 放下后手中不再另有灯。
- [ ] 核对 Picture 1 的多视图没有被生成成多个角色或四宫格输出。
- [ ] 实际查看 Picture 2，选择已存在的放置面；无合适高处时改用既有地面。
- [ ] 若场景不支持推镜或拉远，固定机位；不得制造新结构来配合文本。
- [ ] A 段单人单实例检查通过后，从真实 run_A/run_B 中选定一个尾帧。
- [ ] B 段两次抽样使用同一个已选 A 尾帧、同一 prompt 与同一其他参数。
- [ ] 执行前核对 workflow final prompt 和所有 LoadImage 都是 R30。
- [ ] A、B 每段分别 run_A/run_B，共4次；每次记录独立真实 task_id。
- [ ] seed 只在接口实际暴露整数时记录，否则保持 null。
- [ ] H3 不支持音轨时，音频字段仅作后期音效设计，不得写已生成音轨。

## 判定

当前：`pending_image_validation / text_ready`。  
禁止预填 passed、rendered、done、seed 或 task_id。验证失败时 Work 自行决定不渲染或采用文中固定机位/既有地面回退，不需等待 ChatGPT。
