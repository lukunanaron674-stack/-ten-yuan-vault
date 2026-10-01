# CTX-07｜H3 工作记忆
## 必须记住
- 输入只来自 READY 镜头与 approved assets。
- 任务写入队列只算 WRITTEN；executor_receipt 后才算 RENDERING。
- 同一任务锁 prompt/inputs/workflow；双抽只允许 seed 差异（若协议要求）。
- 执行错误分类：TRANSIENT/TASK/ENV；执行级重试最多 2。
- 不在 H3 层修改剧情、十元或角色设计。

## H3 提示词执行 QA v1.0
> 来源：[[../方法论/番茄爆款方法论_代理适配_v1.0]]。H3 只检查，不反向重写剧情。
- 当前 prompt 必须有明确主体、空间与当前压力。
- 短镜至少包含一次可观察变量变化；没有变化则返回上游分镜修改。
- 收束状态必须可读；优先保留一个未关闭状态，但不能牺牲 continuity。
- 0–3 / 3–7 / 7–10 只作 DEFAULT_PATTERN；连续单镜链更清楚时允许偏离。
- 时间段必须服务动作，不允许为了套模板机械切段。
- soundscape 只同步/强化真实动作与空间变化，不驱动无意义剪辑，不凭空制造能量效果。
- hook_density / quality_selfcheck 等工具阈值不进入创作 prompt，只留 QA 层。

## 运行经验硬闸（4090 实战 2026-09，详版见 [[../增量/RUN-20261001-0815_H3渲染运行经验_4090实战]]）
- 帧数硬上限 **264 帧 = 11s**：>264 必崩（内存超限）；约束维度只有时间，参考图张数不限制。
- **单实例铁律**：双实例 = OOM 静默死（日志末行只有 `Using RAM pressure cache.`）。
- argv：`--use-sage-attention` 必带；`--enable-assets` / `--enable-triton-backend` 永久禁。
- 模型只认 `D:\H3\models\`；启动前确认 yaml base_path 与 --output-directory 都指 D（30 秒确诊：curl :8188/object_info/CLIPLoader 是否可见 qwen3vl）。
- 模板 workflow JSON ≠ 运行时 prompt；唯一权威 = ComfyUI `/history/<prompt_id>`。
- 任务 failed 先读完整 error body（node_errors.details），不要猜模型名。
- 出片判完成看 /history 终态 + 文件大小落定；「文件出现」不算（SaveVideo 先建空壳）。
- 失败定性：~2s=8188 未就绪；~800s/1500s=池超时；needs_refs=素材真缺。环境失败可 unsee 重跑；崩源卡必须 block（unsee 崩源卡=重启崩溃循环）。
- R40 闸门：round<40 跳过；**无 R 号卡一律当 pre-R40 跳过**（防漏闸）；新系列低号卡（如 R001）需按前缀白名单放行（防误挡）。
- 崩溃先查该卡 frames 是否超 264，别怪参考图 / flag / sage。

## 按需回源
只打开当前 workflow 规则、当前 render task 与相关真实错误日志；提示词增益规则有争议时回源 [[../方法论/番茄爆款方法论_代理适配_v1.0]]。

- 提示词生产与渲染执行是不同岗位和状态；任务写入不等于已开始执行，需 executor_receipt。
- 轮转和评分要求按当前任务卡复核；迁移边界见 [[../增量/2026-10-01_20代理库并入记录]]。

## LongTake（长镜头 >11s 路线，2026-10-01 冒烟通过）
- 详版见 [[../增量/RUN-20261001-1120_LongTake接入_AG07长镜头路线]]。
- 长镜头路由 LongTake 分段渲染：每段 clip_frames ≤264（推荐 124=5.2s / 243=10.1s，规则 17k+5），keyframe 锚定 + color 接缝，Stitch 拼接回贴音频。
- source_file 视频放 **D:\H3\comfyui_input\**（运行实例 --input-directory 指这里，不是 ComfyUI 根下 input/）。
- H3LongTakeRender 的 prompt 字段必填（接了 prompt_text socket 也要给值）。
- core 升级后按 master 自带 requirements.txt 对齐依赖（本次 comfy-kitchen 0.2.31→0.2.36 修 int8_linear 签名错），升级后重启实例。
- 断点续渲 mode=continue；单段翻车 redo_one 换 seed。
