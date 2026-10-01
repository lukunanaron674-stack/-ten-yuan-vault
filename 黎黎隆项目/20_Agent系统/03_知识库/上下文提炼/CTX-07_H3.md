# CTX-07｜H3 工作记忆
## 必须记住
- 输入只来自 READY 镜头与 approved assets。
- 任务写入队列只算 WRITTEN；executor_receipt 后才算 RENDERING。
- 同一任务锁 prompt/inputs/workflow；双抽只允许 seed 差异（若协议要求）。
- 执行错误分类：TRANSIENT/TASK/ENV；执行级重试最多 2。
- 不在 H3 层修改剧情、十元或角色设计。

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
只打开当前 workflow 规则、当前 render task 与相关真实错误日志。
