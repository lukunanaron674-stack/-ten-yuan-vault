---
type: skill-reference
skill: 远程GPU工作机接入与验收
status: research-candidate
source: GitHub read-only research
reviewed: 2026-09-06
---

# RTX 4090 24GB + 系统内存 32GB 的 MiniMax H3 流程

## 先给结论

这台机器的主要风险是系统内存，不是显存。软件“加速器”不能凭空减少 H3 权重和长视频激活占用；如果把文本编码器、模型块或 Spectrum 历史放到 CPU，通常是在用更多系统内存换显存。

默认路线应是：

```text
官方 ComfyUI H3 基线
→ 5 秒 124 帧验收
→ 10 秒 243 帧验收
→ 15 秒 362 帧验收
→ Turbo LoRA 6–8 steps 提速
→ 有余量再 A/B Spectrum（历史放 VRAM）
```

15 秒不是任意帧数：H3 使用 24 fps，合法长度遵循 `17k+5`；`362` 帧约 15.08 秒。官方 ComfyUI 节点把约 `124–362` 帧视为训练/验证范围，超过 362 帧不纳入本流程。

## 权重选择

4090（Ada）默认优先验证：

- `minimax_h3_fl2va_pruned_int8_convrot.safetensors`：文生、图生、首尾帧。
- `minimax_h3_ref2va_pruned_int8_convrot.safetensors`：参考图/参考视频。
- `qwen3vl_32b_minimax_h3_int8_convrot.safetensors`：文本/视觉编码器。
- 官方 video VAE FP16 与 audio VAE FP32。

`nvfp4_awq` 不作为 4090 默认项；公开资料主要把它放在 Blackwell/5090 路线，需目标机器实测兼容后才考虑。不要把 5090 的权重组合直接套到 4090。

## 32GB 内存策略

1. 首次基线使用 ComfyUI 默认动态显存管理，不主动加 `--lowvram`、`--cpu-vae` 或全量 CPU offload；这些选项可能把更多组件推到系统内存。
2. 批量固定为 1；关闭实时预览、浏览器标签页、其他模型服务和并行任务。
3. 若系统内存峰值接近 28–30GB，优先加大 NVMe 页面文件作为防崩溃余量；页面文件只保命，不会加速。
4. 内存仍然不够时，才测试 `--disable-pinned-memory`；它可能降低吞吐，但可减少页锁定主机内存压力。每次只改一个参数并记录峰值。
5. 32GB 不能仅凭“总容量”保证 15 秒成功。GitHub 社区的 group-offload 实测有 32GB 约 28.7GB 峰值的案例，但那是另一套 Diffusers 服务实现，不等价于当前 ComfyUI。

## 加速器排序

### 1. MiniMax H3 Turbo LoRA：首选

仓库：<https://github.com/Larryvrh/ComfyUI-MiniMax-H3-Turbo>

它把约 20 steps 降到 4–8 steps，额外 RAM 影响小，适合 4090。优先使用 v4/step600；普通镜头使用 6–8 steps，4 steps 只做草稿或低运动镜头。大幅快速运动在 4 steps 可能出现拖影，音频仍需抽样验收。

### 2. Spectrum：第二阶段 A/B

仓库：<https://github.com/xmarre/ComfyUI-Spectrum-MiniMax-H3>

它通过预测部分 H3 transformer 状态减少昂贵模型调用，但会改变采样轨迹。该仓库默认 `history_storage=system_ram`，与本机目标相反；在 24GB 显存有足够余量时才改成 `history_storage=vram`，并把 `max_history` 从默认 8 降到 2–4 做 A/B。若出现显存不足，卸载 Spectrum，不要把历史退回系统内存来硬撑 15 秒。

### 3. SageAttention：暂不默认

GitHub 上已有 H3 + SageAttention + Spectrum 的组合仓库，但目前检索到的资料主要证明工作流接线存在，没有足够的 4090 H3 同条件收益和音视频质量数据。它先作为单独 A/B 实验，不与 Turbo、Spectrum 首次同时叠加。

### 4. edge-dit.cpp：独立运行时备用

仓库：<https://github.com/THU-MIG/edge-dit.cpp>

它有 RTX 4090 24GB 的 H3 实测，并支持 Q4/Q8、CPU offload 和 362 帧，但不是 ComfyUI 节点路线。公开的 4090 测试是在 56 帧、20 steps 下完成，CPU offload 会明显增加时延；它适合做独立 FL2VA/T2VA 备份，不应直接替换当前 ComfyUI 生产链。

## 15 秒验收门禁

```text
L0：nvidia-smi、系统内存、磁盘和 ComfyUI 版本
L1：确认 H3 权重完整、无占位文件，8188 在线
L2：5 秒 124 帧，原生基线，batch=1
L3：5 秒 Turbo v4，6–8 steps
L4：10 秒 243 帧，记录 RAM/VRAM 峰值和耗时
L5：15 秒 362 帧，先原生或 Turbo 二选一，不叠加 Spectrum
L6：同 seed 对 Turbo/Spectrum 做画面、运动、音频 A/B
```

每次记录：分辨率、帧数、steps、模型文件、RAM 峰值、VRAM 峰值、耗时、MP4 是否可播放和音频是否同步。单次跑通不代表连续队列稳定。

## 参考来源

- 官方 ComfyUI H3 节点：<https://github.com/Comfy-Org/ComfyUI/blob/master/comfy_extras/nodes_minimax_h3.py>
- H3 4090/CPU offload 实测与帧数说明：<https://github.com/THU-MIG/edge-dit.cpp/blob/main/docs/minimax-h3.md>
- H3 Turbo steps/质量折中：<https://github.com/Larryvrh/ComfyUI-MiniMax-H3-Turbo/blob/main/README.md>
- Spectrum 的 `system_ram`/`vram` 历史存储选项：<https://github.com/xmarre/ComfyUI-Spectrum-MiniMax-H3/blob/main/README.md>
- 32GB group-offload 候选案例：<https://github.com/animede/diffusers-movie-server/blob/main/backends/minimax-h3/docs/TECHNICAL_OVERVIEW.en.md>
