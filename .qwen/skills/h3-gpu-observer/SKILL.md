---
name: h3-gpu-observer
description: Inspect local NVIDIA VRAM and ComfyUI queue status in read-only mode before any Qwen shadow evaluation, while Codex keeps full H3 production control.
---
# GPU冲突观察员｜只读Skill
仅允许使用项目脚本 `黎黎隆项目/20_Agent系统/07_本地执行/QWEN_SHADOW/h3_gpu_observer.py` 获取显存与ComfyUI队列快照；所有结果仅做技术建议，不是渲染批准。

## 只读执行
`python "黎黎隆项目/20_Agent系统/07_本地执行/QWEN_SHADOW/h3_gpu_observer.py" --gpu-index <R1确认的4080编号> --expected-gpu-name "RTX 4080" --min-free-mib 4096`
脚本不再默认index=0；现场确认设备编号后显式传入。只读探针会校验名称确属RTX 4080，错卡返回WAIT。
纯离线测试提供`--fixture path/to/test.json`，无GPU/ComfyUI即可测试。
`--min-free-mib`起点不是H3模型峰值需求，必须在实机测过H3峰值和余量后由Codex填写。

## 硬边界
- 正在渲染或队列非空时一律WAIT；不在本Skill调用`POST /prompt`、`POST /free`、Ollama unload、kill、重启、切换端口/工作流。
- Qwen CPU优先；若推理需GPU，必须等原Codex让出明确维护窗口、调度锁与USER另行授权。
- 任何探针错误都报告BLOCKED/UNKNOWN，不能估算可用VRAM。
- `IDLE_SNAPSHOT_ONLY`不是批准生产；真实投喂始终由Codex/AG-07按296+173+216门禁决定。
- 不能用Skill替代4-bit量化、CPU offload、短ctx和显存互斥。

DONE：三种只读回执可重现（GPU/Comfy正常空闲；Comfy忙；缺GPU/接口），脚本不改系统状态。
STOP：脚本异常、识别到非4080目标GPU、产出与ComfyUI现场队列冲突时。
