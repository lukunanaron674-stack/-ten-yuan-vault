# B4 质量审查｜R35｜MOUSE-EAR-MUTANT-001 × SCENE-01

- 审查时间：2026-09-24 20:35 +08:00
- 对象：`MOUSE_B_20260924_1110_R35`
- 证据边界：本轮核验 GitHub/Codex 文本交接、4090 relay-gh 写回、素材字节/哈希、真实执行记录及首中尾帧文件存在性。未在本轮完成六帧像素级视觉判读，因此不得声称画面质量已通过。

## 1. 证据状态

- B1：PASS。可访问 `logs/B1_素材索引_20260924_1205.md`，R35 已登记。
- B2：PASS（设计/假设层）。主 N8，次 NZ7，激活 Z/XZ；链为 `N8稳定 → 环境Z4轻触N8→7 → NZ7补N7→8 → Z5生XZ4→5 → N8重新稳定`。
- B3：PASS（文本交接层）。`prompts/generated/MOUSE_B_20260924_1110_R35_H3.md` 存在。
- 4090 执行：PASS。`results/MOUSE_B_20260924_1110_R35_RESULTS.json` 已由 relay-gh 回写为 `work_render_completed`，actual_completed_runs=4；A/B 两段各 run_A/run_B 均有真实 seed/work_task_id/output_id/output_sha256。
- 抽帧证据：PASS（文件存在层）。`results/frames/MOUSE_B_20260924_1110_R35/` 已登记 A/B 各 run_A/run_B 的首/中/尾证据；最新 relay 提交确认 6 张关键帧回写。

## 2. B4 判定

| 项目 | 判定 | 证据/问题 | 修订 |
|---|---|---|---|
| Picture 1 实际存在 | PASS | `030F6E3B89E0998CBF695064BC27C2A8.jpeg`，941×1672，SHA256 `417ce978...90ef` | 保留真实 SHA/尺寸 |
| Picture 1 与 B3 四宫格适配 | AMBIGUOUS | B3 声明 Picture 1 为“半身动态四宫格 + 全身身份图”，4090 实际 refs_used 仅列 `030F...jpeg` 与场景图；未见半身动态四宫格进入实际 workflow 的证据 | 下一轮必须在 writeback 中列出所有 LoadImage；若只用全身身份图，明确降级为 full_body_identity_only |
| Picture 2 实际存在/版本 | PASS | `R1-01_森林湖泊_单色.png`，1672×941，Git blob `fcbbd771...9638` 与声明匹配 | 保留 |
| Picture 2 几何视觉验证 | AMBIGUOUS | relay 明确 `visually_verified_by_work=false` | B1/Work 对实际场景图做人眼/模型视觉检查后再放行“一步安全方向” |
| 角色画风一致性 | AMBIGUOUS | 六帧已回传，但本轮未完成像素级判读 | 必须读取/查看六帧后再判 |
| 镜头实际一致性 | AMBIGUOUS | 文本要求固定 eye-level medium-wide；仅有执行记录，未完成六帧视觉比对 | 用首/中/尾检查景别、轴线、裁切漂移 |
| 动态链主次/阶段体量 | PASS（设计层） | N8/NZ7/Z5 与 start/change/result 明确 | 冻结，不因输出失败事后改理论 |
| 生克补方向可动作证明 | PASS（可证伪设计） | 声音轻触→耳先定位；NZ补N→眼头确认不惊慌；Z生XZ→唯一一步选择 | 六帧只能验证离散阶段，不足以证明完整时间顺序时标 KEYFRAME_ONLY |
| 实际事件 | PASS（设计层） | 左叶声/右水声→定位→确认→一步选择 | 保留单事件 |
| 角色魅力 | PASS（设计层） | 鼠耳先于身体反应，敏感但克制；选择通过小动作表达 | 视觉层待六帧审核 |
| prompt 9:16 | PASS | B3 明确 `vertical 9:16` | 保留 |
| 实际输出 9:16 | FAIL | relay render_claim：1280×736，为横向 | 云端 workflow 强制竖屏尺寸；执行前 gate 检查 width < height，否则拒跑 |
| 最终 prompt 无十元术语 | PASS | H3 执行正文未使用 N/NZ/Z/XZ 等内部标签 | 保留分析/执行隔离 |
| run_A/run_B | PASS | A、B 两段均真实完成双抽，共4次 | 新协议后统一单条10–11秒双抽，避免旧A/B四抽成本 |
| ambient_soundscape | PASS | A/B 均有独立字段 | 保留 |
| emotional_sound_cue | PASS | A/B 均有独立字段 | 保留 |
| audio_role | PASS | A/B 均有独立字段，明确非MV | 保留；无需回传音轨 |
| 完整视频画质 | NOT_REVIEWED | 本轮协议只要求关键帧，不以完整视频作为B4输入 | 不声称视频质量通过 |

## 3. 关键异常

1. **实际比例错误**：prompt 是 9:16，但实际 render_claim 为 1280×736。说明文本约束没有被 workflow 尺寸参数执行。
2. **四宫格实际输入证据不足**：B3 设计要求半身动态四宫格 + 全身身份图共同定义同一角色，但 4090 `refs_used` 仅记录全身 JPEG + 场景 PNG。不能把“设计上适配”冒充“实际加载”。
3. **场景 role 元数据异常**：relay 对 Picture 2 的 evidence 中 `role` 写成 `character`，而 `declared_role` 是 `scene_identity_only`。实际文件/Blob 匹配，但元数据分类需修正为 scene，防止后续自动审计误判。
4. **关键帧只支持 KEYFRAME 级结论**：首中尾可以检查身份、画风、构图和离散动作阶段，但不能证明两帧之间没有变形/跳轴，也不能严格证明“耳一定先于眼头”的连续时间顺序。

## 4. 下一轮 B1/B2/B3 可执行工单

### B1
- 读取并视觉检查 R35 Picture 1、Picture 2 以及六张关键帧。
- 修正 Picture 2 relay 元数据 `role: character` → `role: scene`。
- 输出真实 LoadImage 清单：半身动态四宫格、全身身份图、场景图分别是否实际进入 workflow；记录 SHA256、尺寸、slot。
- 若半身四宫格未实际加载，不得标记 `H3四宫格适配=PASS`。

### B2
- 冻结 R35 动态链，不新增解释。
- 把可证伪观测固定为：`静止 → 耳先产生方向变化 → 眼/头确认 → 一次小选择 → 回稳`。
- 六帧仅能支持的结论标 `KEYFRAME_PASS/FAIL/AMBIGUOUS`；连续先后关系不足时不得升级为完整动作 PASS。

### B3
- 下一轮执行采用当前新协议：单条 10–11 秒 + 同输入 run_A/run_B 双抽。
- workflow 硬闸门：输出必须 width < height，目标 9:16；发现 1280×736 等横屏配置直接拒绝执行。
- 4090 只需回传每抽首/中/尾三帧及 JSON，不要求上传完整视频。
- JSON 必须包含：task_id、实际 LoadImage 路径/SHA/尺寸、final_prompt_hash、run_A/run_B seed/task/output SHA、实际 width/height、六帧路径/SHA。
- 保留 `ambient_soundscape`、`emotional_sound_cue`、`audio_role`，声音只做设计审查，不要求音轨证据。

## 5. B4 当前闸门

`B1 PASS｜B2 PASS·设计层｜B3 PASS·文本层｜4090真实执行 PASS｜双抽/旧协议4次 PASS｜关键帧证据存在 PASS｜Picture1存在 PASS / 四宫格实际加载 AMBIGUOUS｜Picture2版本 PASS / 几何 AMBIGUOUS｜9:16文本 PASS / 实际输出 FAIL｜角色画风与镜头视觉质量 AMBIGUOUS｜完整视频 NOT_REVIEWED`
