# B4 质量审查｜R37 真实关键帧回馈轮次

时间：2026-09-24 19:35 +08:00
对象：`ADV_B_20260924_1308_R37` / ADV-001 × SCENE-04
审查模式：`KEYFRAME_ONLY`。仅以 GitHub 已回传的 run_A/run_B 首/中/尾 6 帧作为画面证据；不把关键帧审查冒充完整视频质量审查。

## 证据状态

- B1/B2/B3 任务与 prompt：已读取。
- 4090 回写 results：已读取，`status=work_render_completed`，`actual_completed_runs=2`。
- Picture 1：云端文件存在、尺寸/SHA 已回填；与旧声明文件名/SHA 不一致，因此“云端绑定存在”PASS，“与原 B1 声明同一源文件”FAIL/需修订索引。
- Picture 2：SCENE-04 blob `efefd97514fc31d569134c821aada9cb3fdcb206` 匹配，云端文件 SHA/尺寸已回填；视觉几何仍未由 Work 人眼/模型验证。
- run_A/run_B：均有真实 seed、work_task_id、output_id、output_sha256，2/2 completed。
- 关键帧：6/6 已上传到 `results/frames/ADV_B_20260924_1308_R37/`。
- 完整视频：不作为本轮 B4 必需输入；本轮不宣称完成完整视频质量审核。

## 逐项判定

| 项目 | 判定 | 证据/问题 | 修订动作 |
|---|---|---|---|
| B1 素材索引/绑定 | AMBIGUOUS | Picture 1 实际绑定 `ADV-001_冒险者_H3_sheet_001.jpg` SHA256 `4284...e10c`，而 R37 声明 `FE5A...jpeg` SHA256 `dd81...d1c4` | B1 将实际 H3 sheet 登记为当前生产源，或证明二者身份等价并记录映射；禁止继续双 SHA 无解释 |
| Picture 2 版本 | PASS·字节层 | SCENE-04 git blob 匹配，云端 SHA256 `b31c...08eb` | 保留 |
| 场景视觉几何 | AMBIGUOUS | Work 明确 `visually_verified_by_work=false` | 下一轮必须对上传的场景参考图和 6 帧做人眼/视觉模型几何核验 |
| H3 四宫格适配 | AMBIGUOUS | 实际 Picture 1 为 H3 sheet，但未从回写字段证明四宫格各区是否正确编译为同一角色 | B1 增加 `sheet_layout_validation` 与 `single_identity_validation` |
| 动态链主次/体量 | PASS·设计层 | XN8/X8 → NX6/N7 → X7/X并Z7，阶段与动作证据字段完整 | 冻结理论链，不因输出好坏事后改链 |
| 生克补方向 | PASS·假设层 | 克/补/生均对应可观察动作：负重滞后、等待/压带、回中后下一步 | 用关键帧只能验证阶段状态，不能证明连续时序全部成立 |
| 实际事件/角色魅力 | PASS·设计层 | “一步后身体停而负重继续→等待回中”是明确事件，魅力来自经验和克制 | 保留 |
| 9:16 | FAIL·实际执行 | prompt 写 vertical 9:16，但 render_claim 实际为 1280×736 横向 | B3/4090 workflow 强制输出 9:16；下一抽不得仅靠 prompt 文本声明 |
| 最终 prompt 无十元术语 | PASS | 执行 prompt 使用动作/空间语言，十元仅在内部分析 | 保留 |
| ambient_soundscape | PASS | 已结构化 | 保留；关键帧模式不要求音轨 |
| emotional_sound_cue | PASS | 已结构化 | 保留 |
| audio_role | PASS | task JSON 已显式结构化 | 保留 |
| run_A/run_B 双抽 | PASS·执行 | 2/2 completed，真实 seed/task/output/SHA 已回填 | 保留 |
| 首中尾帧证据 | PASS·存在性 | run_A/run_B 各 3 帧，共 6 张 | 后续统一作为 B4 最低视觉回馈标准 |
| 角色画风一致性 | AMBIGUOUS | 6 帧存在，但本轮连接器只证明文件/路径存在，未完成像素级视觉判读 | 下一轮 B4 必须实际读取/展示 6 帧后再判 |
| 镜头一致性 | AMBIGUOUS | 同上；且实际分辨率已违背 9:16 | 先修 workflow 纵向尺寸，再比较首中尾构图漂移 |
| 完整视频画质 | NOT_REVIEWED | 用户协议已改为只需首中尾帧；本轮不要求视频本体 | 不得写 PASS |

## 关键缺陷

1. **真实输出不是 9:16**：`render_claim.width=1280`、`height=736`。这是执行层 FAIL，不允许被 prompt 中的 `vertical 9:16` 掩盖。
2. **Picture 1 来源发生漂移**：B3 声明 FE5A 文件，云端实际使用 H3 sheet。身份可能正确，但证据链没有解释二者映射。
3. **R37 还是旧 15s A/B 协议**：本次云端实际只回写 Segment A 的两抽，不能把它当成 R37 A+B 全链均已验证。当前只证明 Segment A 2/2 已执行。
4. **六帧已到，但尚未完成像素级画面判读**：因此角色脸、装备连续性、场景构图和动作阶段只可标 AMBIGUOUS，不能虚报视觉 PASS。

## 下一轮 B1 / B2 / B3 工单

### B1
- 将 `ADV-001_冒险者_H3_sheet_001.jpg` 的 SHA256/尺寸/来源写入生产索引。
- 建立旧 FE5A 源与 H3 sheet 的明确 lineage；无法证明同源则旧声明废止。
- 增加 H3 sheet 四宫格/单身份验证字段。
- 对 SCENE-04 上传参考图执行视觉几何核验。

### B2
- 冻结 R37 的核心可证伪链：`身体先停 → 负重仍偏离中心 → 等待/压带 → 回中`。
- 不根据抽帧结果重写十元关系；只记录 observable_result。
- 关键帧协议下，只要求首/中/尾能分别承载起始、变化、结果状态，不声称证明所有中间连续动作。

### B3
- 立即修 workflow：实际输出必须为 9:16，不能再出现 1280×736。
- 新协议采用单条 10–11s prompt + run_A/run_B；每抽回传首/中/尾 3 帧。
- 每轮回写：真实输入 SHA、final_prompt_hash、seed、work_task_id、output_id、output_sha256、width/height、3 个 frame path。
- 音频字段继续保留为设计要求，但关键帧审查不要求上传音轨。

## B4 放行规则

下一轮只有在以下条件同时满足时，才允许把画面项从 AMBIGUOUS 升为 KEYFRAME_PASS：

- 6 张关键帧真实可读；
- 实际输出尺寸为 9:16；
- Picture 1 身份来源链无冲突；
- run_A/run_B 首中尾均保持同角色、同装备、同场景、同镜头轴；
- 三阶段状态与动态链的 observable_result 对应。

`KEYFRAME_PASS != FULL_VIDEO_PASS`。
