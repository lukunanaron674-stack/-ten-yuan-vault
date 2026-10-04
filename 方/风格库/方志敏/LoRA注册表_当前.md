---
类型: LoRA注册表
项目: 方志敏
状态: active
版本: 20260912-v1
---

# LoRA 注册表｜当前

| 顺序 | LoRA | 来源/许可 | 本机状态 | 强度 | 备注 |
|---:|---|---|---|---:|---|
| 1 | `NeonifyV2-4Extreme.safetensors` | 本机已有；公开发布前核对原始许可 | 已安装 | 0.35 / 0.35 | 已有候选样图，待归轴 |
| 2 | `watercolor_v1_sdxl.safetensors` | [ostris/watercolor_style_lora_sdxl](https://huggingface.co/ostris/watercolor_style_lora_sdxl)，Apache-2.0 | 已安装 | 0.85 / 0.85 | SDXL 风格测试 |
| 3 | `crayons_v1_sdxl.safetensors` | [ostris/crayon_style_lora_sdxl](https://huggingface.co/ostris/crayon_style_lora_sdxl)，Apache-2.0 | 已安装 | 0.85 / 0.85 | SDXL 风格测试 |
| 4 | `embroidered_style_v1_sdxl.safetensors` | [ostris/embroidery_style_lora_sdxl](https://huggingface.co/ostris/embroidery_style_lora_sdxl)，Apache-2.0 | 已安装 | 0.90 / 0.90 | SDXL 风格测试 |
| 5 | `sdxl_lora_architecture_siheyuan.safetensors` | [frank-chieng/sdxl_lora_architecture_siheyuan](https://huggingface.co/frank-chieng/sdxl_lora_architecture_siheyuan)，OpenRAIL | 已安装 | 0.80 / 0.80 | 空间/建筑侧测试 |

注册表的机器可读版本在工作区：`C:\Users\19308\Documents\New project 2\lora_style_library\06_LORA\registry.json`。LoRA 文件统一放在当前 ComfyUI 的 `models\loras`，不复制到方志敏正式素材目录。

> [!warning]
> LoRA 兼容性以当前 ComfyUI 的 `object_info` 和实际出图为准。即使任务成功返回，图片也只是候选，不代表风格适合方志敏项目，更不代表正式风格词已改变。
