# R3｜GPU显存互斥只读探针与验证
status: OFFLINE_REGRESSION_PASS / LIVE_GPU_TEST_WAIT_LOCAL
issue: 674-216

## 本轮交付
项目Skill `.qwen/skills/h3-gpu-observer/SKILL.md`和无依赖只读Python `h3_gpu_observer.py`。
- nvidia-smi查询GPU index/name/total/used/free；必须显式传入R1确认的index，且名称包含RTX 4080，否则WAIT。
- ComfyUI本机`GET /queue`查running/pending；不允许远端URL。
- 输出 `WAIT` 或 `IDLE_SNAPSHOT_ONLY`；**两个状态都不意味着提交视频渲染许可**。脚本退出码0=空闲快照，2=需要等待，适合日志使用。
- `--fixture`允许离线测试，不访问真实ComfyUI。
- 离线回归覆盖空闲/忙队列/坏输入/非4080错卡、loopback限制、SHA通过/不符/重复asset_id/缺审核元数据、影子schema和权限漂移。重定向不会被跟随。
- 不会kill进程、卸载模型、改ComfyUI内存、改端口、提交新job，也不触碰Codex调度。

## 离线用例格式
Fixture顶层含`gpu`对象（ok/index/name/total_mib/used_mib/free_mib）和`comfyui_queue`对象（ok/running_count/pending_count）。空闲队列返回`IDLE_SNAPSHOT_ONLY`；busy、字段缺失、计数类型错误或GPU名称不含RTX 4080一律WAIT。工具只向本机loopback发GET，并拒绝凭据/远程主机/HTTP重定向。

## 2026-10-11 CPU回归实测
- `tests/test_qwen_shadow.py`：13 tests / PASS；使用Python 3.12.14，Draft 2020-12 JSON Schema校验由隔离测试依赖`requirements-test.txt`提供，依赖装在临时目录，不进入生产环境。
- R1现场（01:01 Asia/Shanghai）：RTX 4080 index 0，32760 MiB总显存；observer快照 1030 MiB used / 31339 MiB free。ComfyUI 8188连接被拒绝，observer输出WAIT/QUEUE_UNVERIFIED；没有把空闲显存当作渲染许可。每小时计划任务未发现。
- 仍未在实际ComfyUI/GPU上测试显存峰值、队列占用转换、锁或H3连续生产；`min_free_mib`仍是临时门槛。

## 下一步（需要真实现场）
Codex现场记录完整GPU index/VRAM、H3单条峰值、Qwen CPU-only驻留、H3前后显存碎片/释放、ComfyUI队列长度；由此标定真实`min_free_mib`，独占锁应先集成现有Codex排队器而不是第二个竞争队列。千问不得主动切主。
DONE：只读测试PASS + Codex每小时实际持续一轮无回归；STOP：任何显存争抢、OOM或脚本看不到现有队列。
