# USER实验｜Comfy 完成 → RTX4080 32GB 千问27B → Linear真实读写＋视频装包（R0）
date: 2026-10-11
authority: USER explicitly requested one real capacity test
target_issue: 674-216
director_issue: 674-286
review_issue: 674-173
archive_issue: 674-289
status: SPEC_READY__WAIT_LOCAL_HOST_EXECUTION
active_executor: LOCAL_CODEX
target_model: Qwen3.5-27B-Q4_K_M (GPU; verify runtime model identity)
default_runtime: Ollama if already available and CUDA capable; else separate verified NVIDIA CUDA llama.cpp build
max_parallel_gpu_owners: 1

## USER想验证什么
不是在CPU上跑8B，而是实际使用4080魔改32GB测试能跑多大的千问，**ComfyUI视频生成完后**释放其占显存，才启动本地千问整理一个已存在的真实视频及其run receipt，调用已授权的Linear读写接口把可核实的装包收据回传至674-216。实验仅验证这条连续工作链。千问不修改用户审美判定、知识XN/NX、12槽导演词、H3参数；不接管正在运行的H3。
开始先用真实已出片的H06 v010或v011的现有MP4回放包装，不为了检验装包再生成新视频。当前本地已有Qwen3-8B CPU、Qwen2.5-VL和Coder，不等于已经拥有Qwen3.5-27B CUDA，切勿假报GPU测试完成。

## 状态机 / 原子显卡所有权
GPU_H3_ACTIVE → H3_DONE_RECEIPT → H3_QUEUE_DRAINED → COMFY_RELEASE_REQUESTED → VRAM_FREE_VERIFIED → GPU_QWEN_ACQUIRED → QWEN_POSTPACK → LINEAR_POST → QWEN_UNLOADED → VRAM_RELEASE_VERIFIED → GPU_FREE/RESTORE_H3_READY。
- **所有阶段先持同一个外部GPU_OWNER互斥锁**，锁需被已有Codex H3小时任务查询；若旧队列尚无接锁机制，只能在有监督的显式测试窗口执行，**不可自称已经自动接通**。
- H3_DONE必须具有本机可读MP4文件、完整sha256、prompt_id / seed / workflow/refs（若原记录缺失，记录UNKNOWN不得凭空补）；队列running=0, pending=0，并在短间隔两次查询无新增排队。单靠8188未监听不说明视频完成。
- Comfy进程空闲仍可能持有数GB模型显存：按现有官方兼容接口在空闲时有序释放模型/停止自有服务；不得杀死正在运行的ComfyUI、删除工作流或复写GPU缓存目录。核nvidia-smi显存余额与进程。设置资源安全阈值（保留至少约3-4GiB显存冗余；实际由本机测得的KV cache和runtime调整），若不满足则WAIT_GPU，不启千问。
- 在Qwen持锁期间禁止新H3作业启动；等待队列在超时后跳过本次测试而不是抢锁。Qwen完成/异常时卸载模型并验证VRAM回收，释放锁后H3才能恢复。不要无意将Comfy自动重启成第二实例。
- 如果新H3调度优先到达且千问尚未取得锁，放弃本次Qwen；已经取得锁的短装包测试设置上限（例如20分钟），超时中止并安全释放GPU，保留日志。

## R0模型和速度测试
1. 本机检查GPU NVIDIA driver、nvidia-smi报告32760MiB左右显存/空闲量、运行时CUDA能力、盘剩余量和当前Qwen3.5:27b是否已有。若不存在且有空间、网络，在USER本次测试范围内下载一次**官方模型**，绝不删现有Qwen3-8B及Comfy仓。官方下载参考：https://ollama.com/library/qwen3.5:27b（权重Q4_K_M约17GB、完整模型包约20GB）；若不支持现有Ollama先检查其官方支持版本，不要混装两套推理服务。
2. Windows首测用支持CUDA的Ollama/llama.cpp，不用当前 `llama.cpp-b11541-cpu` 声称GPU。优先从context 8192或16384、1并发、Q4_K_M开始；确认不发生CPU offload/OOM、首字延迟、GPU util、峰值显存、tokens/s、总装包耗时。64K上下文、Q5、35B皆后续，不先追加。
3. 启用结构化工具输出/工具调用，llama.cpp路径需确认聊天模板和jinja；只暴露2个受限Linear操作：READ_ISSUE(674-216,必要字段)，COMMENT_ISSUE(674-216,自已这次生成的SHADOW_POSTPACK收据)，和1个脚本安全工具 POSTPACK_FROM_EXISTING_RECEIPT（仅明确路径）。不要把完整Linear工单历史、293全仓、276 Canvas注入27B上下文。
4. 单条测试至少做：a. 依据真实给定manifest复述run_id、source refs、sha和缺失字段；b. 生成README.md和manifest规范化候选JSON；c. 控制固定脚本抽3帧、复制MP4（不移动/不删除）、校验SHA、ZIP输出及SHA；d. 使用受限Linear API真实读取674-216并发布可复核评论（如果API不可用，记LINEAR_AUTH_BLOCKED，不假称上传）。
5. 测试对象明确：视频原始文件在C:/Users/19308/Desktop/H3视频产出/实际定位；历史674-286第8轮v010/v011有已登记的MP4 SHA，必须现场匹配，不可凭Issue只有描述就创建假包。缺出片字节 STOP=MISSING_MP4。

## 输出物与责任界面
PACK/H06_v010_<sha-short>/ 中：
- original_video.mp4，prompt.txt（源若缺则标MISSING_PROMPT而不是编造），preview/head.jpg mid.jpg tail.jpg（自动抽帧），manifest.json（不可臆测字段）、README.md（Qwen整理、先由schema校验）、evidence_receipt.json（固定脚本生成）、package.zip 及SHA。
- USER未审核的v010/v011只作为REVIEW_PENDING候选，不能写674-289正式PASS/分配Canon编号；本测试只写674-216的**候选打包回执**，B端286可引用。
- 真实Linear评论必须包含：`test=QWEN27B_CUDA_POSTPACK_R0 | model=... | runtime=... | gpu=... | ctx=... | tps=... | gpu_peak_mib=... | run_id=... | original_sha256=... | package_sha256=... | read_linear=true/false | posted_linear=true/false | verified_fields=... | missing_fields=... | result=PASS/PARTIAL/FAIL`；有包但无授权外链仅回本机实际路径，不虚称Linear已上传附件。
- 原始MP4绝不直接给模型自由文件修改权，压缩/抽帧/哈希使用白名单确定性程序。失败后保留原始manifest及日志以便复核。

## 验收和STOP
PASS = 真正使用CUDA运行Qwen3.5-27B Q4 + 完整视频原字节SHA准确 + 生成规范的包、包内完整性通过 + 真实Linear674-216读写成功 + Qwen可卸载让H3恢复。
PARTIAL = 其中任一项仅做到部分，列出单一关键阻塞与真实日志。
STOP = Comfy/H3没完成，任务在队列或锁无法保证；没有原视频；模型部分CPU卸载/显存溢出；Linear未授权；超过时限；任何将USER审美或289正式入库私自写PASS的操作。
实际HOST_RUN未执行前，不能将本规范当作已完成试跑。