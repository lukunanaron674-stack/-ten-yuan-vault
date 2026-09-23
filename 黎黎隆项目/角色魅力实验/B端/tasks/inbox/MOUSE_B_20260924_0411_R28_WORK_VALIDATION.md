# MOUSE_B_20260924_0411_R28｜WORK VALIDATION

## 交接结论

这是完整的每小时 B端任务，**同时包含 A段与B段**。两段各15秒；每段同一完整prompt分别执行run_A、run_B，共计划4次。当前仅提交文本，未执行渲染。

## Picture 映射

### Picture 1：唯一角色

- character_id：`MOUSE-EAR-MUTANT-001`
- 原始全身身份图：`黎黎隆项目/角色魅力实验/B端/assets/character_refs/030F6E3B89E0998CBF695064BC27C2A8.jpeg`
- 半身动态四宫格：`黎黎隆项目/角色魅力实验/B端/assets/character_refs/MOUSE-EAR-MUTANT-001_H3半身动态四宫格_v2.0.png`
- 当前状态：`pending_image_validation`
- 强制解释：两张图及四宫格中的所有视图均指向**同一个鼠耳异变少女身份**；不得生成多人、分身或第二实例。
- Work需自行绑定真实图片并核对：白色短发、遮眼刘海、小翘发、浅紫半透明鼠耳结构、小体型、宽大浅色短袍、深色边块、斜挎带、侧包。

### Picture 2：唯一场景

- scene_id：`SCENE-09`
- 路径：`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-12_异种村庄_五色组合.png`
- 已记录blob：`709a66e1b0a939a6e8443a278f3c12857eb342f8`
- Picture 2只锁：场景身份、既有元素、空间连续性、五色色卡逻辑。
- Picture 2不锁：景别、机位、画幅或唯一构图。
- 当前未完成二进制视觉审计；A/B均标记`needs_environment_inference=true`。若原图不支持所写明暗边界或横向空间，使用文档内固定机位回退，不新增物件或全新反向空间。

## 执行前硬检查

- [ ] 最终workflow的prompt确为R28 A段或B段，不残留澈或旧任务文本。
- [ ] 全部LoadImage节点只绑定本轮鼠耳角色与SCENE-09。
- [ ] Picture 1只产生一个物理角色实例。
- [ ] 不出现第二人物、可见小生物、完整人物倒影、影子替身、分屏或四宫格输出。
- [ ] A段两次使用完全相同prompt和其他参数。
- [ ] 从A段run_A/run_B中选定一个真实尾帧后，B段两次绑定同一尾帧。
- [ ] B段两次使用完全相同prompt和其他参数。
- [ ] 若接口提供seed，只在真实运行后记录整数；否则保持null。
- [ ] 四次真实task_id分别记录；未运行时保持null。
- [ ] 若H3节点不支持音轨，将audio_design交后期；不得声称已有音轨。

## 双抽登记

| segment | run | seed | work_task_id | status |
|---|---|---:|---|---|
| A | run_A | null | null | planned |
| A | run_B | null | null | planned |
| B | run_A | null | null | planned |
| B | run_B | null | null | planned |

## Work判定

图片缺失或身份/单实例检查未通过时，Work自行决定不渲染；B端文本仍有效。不得把待验证写成passed。
