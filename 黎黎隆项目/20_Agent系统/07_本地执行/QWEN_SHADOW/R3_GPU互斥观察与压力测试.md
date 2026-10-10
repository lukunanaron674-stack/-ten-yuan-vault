# R3｜GPU显存互斥只读探针与验证
status: READONLY_OBSERVER_WRITTEN / GPU_TEST_WAIT_LOCAL
issue: 674-216

## 本轮交付
项目Skill `.qwen/skills/h3-gpu-observer/SKILL.md`和无依赖只读Python `h3_gpu_observer.py`。
- nvidia-smi查询GPU index/name/total/used/free，默认测试GPU0（现场需确认）。
- ComfyUI本机`GET /queue`查running/pending；不允许远端URL。
- 输出 `WAIT` 或 `IDLE_SNAPSHOT_ONLY`；**两个状态都不意味着提交视频渲染许可**。脚本退出码0=空闲快照，2=需要等待，适合日志使用。
- `--fixture`允许离线测试，不访问真实ComfyUI。
- 不会kill进程、卸载模型、改ComfyUI内存、改端口、提交新job，也不触碰Codex调度。

## 建议本地离线用例
A: gpu free_mib=25000、queue_running=[]、queue_pending=[] → IDLE_SNAPSHOT_ONLY。
B: free_mib=12000、queue_running=[job] → WAIT / CODEX_OR_COMFYUI_BUSY。
C: gpu.ok=false、queue.ok=false → WAIT / GPU_UNVERIFIED + QUEUE_UNVERIFIED。
D: free_mib=2048、queue均空 → WAIT / BELOW_PROVISIONAL_FREE_VRAM_THRESHOLD。
E: 无效远程HTTP URL → BLOCKED（不能连向公网设备）。

## 下一步（需要真实现场）
Codex现场记录完整GPU index/VRAM、H3单条峰值、Qwen CPU-only驻留、H3前后显存碎片/释放、ComfyUI队列长度；由此标定真实`min_free_mib`，独占锁应先集成现有Codex排队器而不是第二个竞争队列。千问不得主动切主。
DONE：只读测试PASS + Codex每小时实际持续一轮无回归；STOP：任何显存争抢、OOM或脚本看不到现有队列。
