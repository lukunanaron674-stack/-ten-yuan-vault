---
type: pipeline
domain: AI动画
status: v1.0
updated: 2026-05-21
parent: "[[动画AI生产方向_能力蓝图]]"
requires: ComfyUI, Wan2.2, HunyuanVideo 1.5
---

# AI 动画化可执行路径

本页是一条端到端的 AI 动画生产管线——从 Obsidian 十元知识库驱动创意，到 Hugging Face 模型生成画面，再到 F12 自动化回流。

---

## 总览：五阶段管线

```text
┌─────────────────────────────────────────────────────────┐
│  Phase 0  环境搭建                                       │
│  ComfyUI + Wan2.2 + HunyuanVideo 1.5 + LTX-Video        │
├─────────────────────────────────────────────────────────┤
│  Phase 1  创意引擎（Obsidian）                            │
│  银矿案例 → 动态链提取 → 十元→视觉映射 → 分镜脚本          │
├─────────────────────────────────────────────────────────┤
│  Phase 2  画面生成（Hugging Face 模型）                    │
│  T2V(Wan2.2) → I2V(HunyuanVideo) → 风格LoRA → 逐场景输出  │
├─────────────────────────────────────────────────────────┤
│  Phase 3  组装与后期                                     │
│  剪映/CapCut 剪辑 → 声音 → 调色                           │
├─────────────────────────────────────────────────────────┤
│  Phase 4  F12 自动化回流                                  │
│  归档轮次 → Codex 吸收 → 下次更准                         │
└─────────────────────────────────────────────────────────┘
```

---

## Phase 0：环境搭建

### 0.1 安装 ComfyUI

```bash
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI
pip install -r requirements.txt
```

安装 ComfyUI Manager（节点管理）：
```bash
cd custom_nodes
git clone https://github.com/ltdrdata/ComfyUI-Manager.git
```

### 0.2 Hugging Face 核心模型

按优先级排列，标注了 Hugging Face 实际下载量和用途：

| 优先级 | 模型 | HF下载量 | 用途 | 显存需求 |
|---|---|---|---|---|
| ★★★ | `Comfy-Org/Wan_2.2_ComfyUI_Repackaged` | 5,799,861 | **主力 T2V/I2V**，Alibaba 最新 | 24GB+ (14B) / 12GB (5B) |
| ★★★ | `Comfy-Org/HunyuanVideo_1.5_repackaged` | 526,508 | **中文内容优化**，Tencent 混元 | 24GB+ |
| ★★☆ | `Lightricks/LTX-Video` | 397,225 | **快速预览**，2B 参数实时 | 8GB |
| ★★☆ | `ByteDance/AnimateDiff-Lightning` | 8,965 | **动画运动控制**，4步快速出片 | 8GB |
| ★☆☆ | `stabilityai/stable-video-diffusion-img2vid-xt` | 279,112 | 图转视频备用 | 16GB |
| ★★★ | `lightx2v/Wan2.2-Distill-Loras` | 1,093,426 | **蒸馏加速** Wan2.2 推理 | — |
| ★★☆ | `zai-org/CogVideoX-5b` | 36,352 | 中文内容备选 | 12GB |
| ★★☆ | `guoyww/animatediff-motion-adapter-*` | ~3,455 | 摄像机运动 LoRA（推拉摇移） | — |

### 0.3 推荐硬件

| 级别 | GPU | 能用什么 |
|---|---|---|
| 入门 | RTX 3060 12GB | LTX-Video + AnimateDiff |
| 中端 | RTX 4070 Ti 16GB | Wan2.2-5B + HunyuanVideo |
| 推荐 | RTX 4090 24GB | Wan2.2-14B 全能力 |
| 云端 | RunPod A6000 | 全部模型，按小时付费 |

---

## Phase 1：创意引擎（Obsidian → 十元 → 分镜）

这是你的独有优势层——别人用 AI 只能写 prompt，你有一个完整的叙事分析系统驱动 AI。

### 1.1 从银矿库取源材料

选一个五大主题仓中的高评分案例作为创作起点。

**示例：用你的名字（命运 xz+nz）启动一条黑暗奇幻短片。**

```text
源材料：[[你的名字-结构分析]]
十元起手：xz（命运临界/漂流）
第一被作用：n（承载/家/小镇）
动态链：xz → n（n克xz：承载反制漂流）
补位：nz（停靠/依恋）
五大主题落点：命运 xz+nz
```

### 1.2 动态链展开为场景序列

用 [[动态母型]] 的链条展开规则：

```text
xz 的动态链条（黑暗奇幻版）：

场景1 / 起  xz 显现
  主角在废墟中醒来，不知道自己为什么在这
  十元：xz = 临界状态/漂流
  视觉：手持晃动镜头、低饱和度、单一冷光源

场景2 / 承  n 克 xz
  发现一座还有人居住的旧城，被收留
  十元：n 克 xz（承载反制漂流）
  视觉：镜头稳定下来、暖光出现、但暗角仍在

场景3 / 转  zn 被 xz 克
  得知这座城的代价——居民在用记忆换取安全
  十元：xz 克 zn（命运压迫意义）
  视觉：暖光开始失真、记忆片段以噪点/闪烁插入

场景4 / 合  nz 补 xz
  选择留下或离开——两种都是归宿
  十元：nz 补 xz（停靠不一定是留下）
  视觉：最后一镜静止、光源不确定、留白
```

### 1.3 十元 → 视觉映射表

这是把 [[十元生补克表]] 转成 AI 可理解的视觉参数：

| 十元 | 镜头运动 | 色调 | 光源 | 构图 | prompt 关键词 |
|---|---|---|---|---|---|
| xz | 手持/倾斜/慢推 | 低饱和冷色 | 单一远方光 | 人物在边缘 | drifting, liminal, cold ambient, solitary figure |
| n | 固定/缓慢摇镜 | 暖灰/木色 | 散射柔光 | 对称/包围 | shelter, warm interior, soft light, contained space |
| nz | 极慢推近/静止 | 暖色褪成中性 | 逐渐变暗的光 | 人物居中变小 | farewell warmth, fading light, quiet ending |
| zn | 仰拍/缓慢上升 | 金/白/过曝 | 顶光/背光 | 人物在下1/3 | meaning, revelation, blinding light, spiritual |
| zx | 快速跟拍/急推 | 高对比 | 硬侧光 | 对角线 | pursuit, action, sharp shadows, forward momentum |
| nx | 窥视/隐藏机位 | 灰绿/病态 | 底光/局部光 | 前景遮挡 | calculation, hidden observer, sickly light, obscured |
| x并z | 展示性摇镜 | 霓虹/高饱和 | 多光源竞争 | 人物在框中框 | spectacle, display, artificial light, framed subject |
| xn | 时间流逝/叠化 | 褪色/棕褐 | 自然光变化 | 重复构图 | passage of time, order, repetition, fading |
| x | 不稳定的特写 | 红/黑 | 闪烁/火光 | 填满画框 | desire, hunger, consuming, unstable close-up |
| z | 聚光灯式 | 单色强光 | 光束/点光 | 主体突出 | spotlight, obsession, singular focus, beam of light |

### 1.4 生成分镜脚本

从动态链和视觉映射自动生成 AI prompt 序列：

```text
场景1 / 3秒
prompt: "A lone figure wakes up in a ruined stone hall, drifting dust particles in cold blue light, handheld camera slight shake, low saturation, cinematic dark fantasy, single light source from crack in ceiling, empty vast space, figure at the edge of frame"
negative: "warm colors, symmetrical composition, crowd, bright daylight"

场景2 / 5秒
prompt: "The same figure enters a small fortified settlement, warm amber torchlight, soft shadows, wooden interiors, stable slow camera pan, people in background moving slowly, sense of temporary safety, weathered textures on stone walls"
negative: "cold light, empty space, horror, violence"

场景3 / 4秒
prompt: "Close-up of an elder revealing a dark secret, warm light starts to distort, visual glitches like old film burns, flickering flames, unsettling stability, camera tilts slightly, color temperature shifting from warm to sickly"
negative: "natural lighting, clean digital look, calm atmosphere"

场景4 / 5秒
prompt: "The figure standing at the settlement gate at dawn, looking back, light is ambiguous neither warm nor cold, long static shot, figure small against architecture, dust motes suspended, quiet resignation, dark fantasy atmosphere"
negative: "action, dialogue, bright colors, clear resolution"
```

---

## Phase 2：画面生成（ComfyUI + Hugging Face 模型）

### 2.1 首发生成策略

```text
第一步：Wan2.2 T2V（文→视频）
  → 每个场景的 prompt 输入 Wan2.2-14B
  → 生成 3-5 个候选版本
  → 选最佳版本进入下一步

第二步：HunyuanVideo 1.5 I2V（图→视频）
  → 如果 T2V 输出不够精准
  → 先用 Flux/SDXL 生成关键帧静图
  → 再喂给 HunyuanVideo 转视频
  → HunyuanVideo 对中文/亚洲审美更友好

第三步：AnimateDiff 微调运动
  → 如果运动不够自然
  → 用 AnimateDiff motion adapter 调整
  → 推拉摇移 LoRA 绑定具体镜头运动

第四步：LTX-Video 快速迭代
  → 粗剪阶段的快速预览用 LTX-Video
  → 2B 参数 + 8GB 显存，秒级出片
  → 确认方向后再切 Wan2.2 精修
```

### 2.2 ComfyUI 工作流骨架

```text
[CLIP Text Encode] → [Wan2.2 T2V 14B] → [VAE Decode] → [Video Output]
                              ↑
                    [Motion LoRA / Distill LoRA]

备选 I2V 分支：
[Load Image] → [CLIP Vision] → [Wan2.2 I2V 14B] → [VAE Decode]
```

### 2.3 关键参数

| 参数 | Wan2.2-14B | HunyuanVideo 1.5 | LTX-Video |
|---|---|---|---|
| 分辨率 | 1280x720 | 1280x720 | 768x512 |
| 帧数 | 81帧 (~5秒@16fps) | 129帧 | 161帧 |
| 步数 | 30-50 | 30-50 | 20 |
| CFG | 5-7 | 6-8 | 3-5 |
| 显存 | 24GB | 24GB | 8GB |
| 生成时间(4090) | ~8分钟 | ~10分钟 | ~30秒 |

### 2.4 去 AI 味注入点

在每个生成步骤中注入 Obsidian 定义的约束：

```text
1. 色彩约束：每个场景限制色板（从十元视觉映射表取）
2. 运动约束：关键帧轨目预设（不准默认 ease-in-out）
3. 留白约束：每个场景指定不准填满的区域
4. 杂质注入：负 prompt 中禁止"perfect, clean, polished"
5. 静止约束：指定哪些帧必须完全静止
```

---

## Phase 3：组装与后期

### 3.1 剪辑

- 剪映/CapCut 免费 + 中文优化
- DaVinci Resolve 免费版做调色
- 关键：人定节奏，不准 AI 自动卡点

### 3.2 声音

- ElevenLabs 生成配音 → 人工微调语气
- Suno/Udio 生成氛围音乐 → 只做铺底
- 环境音用 AI 生成 → 上层叠真实录音

### 3.3 最终检查

对照 [[动画AI生产方向_能力蓝图#零、AI 味的七种症状|AI味七症状]] 逐项检查：
- [ ] 有没有过平滑运动？
- [ ] 调色盘是不是紫橙青？
- [ ] 角色有没有同一张脸？
- [ ] 有没有留白？
- [ ] 构图有没有情绪意图？
- [ ] 细节有没有焦点层次？
- [ ] 情绪有没有蓄力-释放节奏？

---

## Phase 4：F12 自动化回流

### 4.1 归档轮次模板

每次生成后，F12 自动归档：

```text
轮次编号：ANIM-001-场景1
日期：2026-05-21
当前目标：黑暗奇幻短片 - 场景1废墟苏醒
模型：Wan2.2-14B T2V
Prompt：...（完整prompt）
生成结果：附视频路径
十元判定：xz 临界状态
AI味检查：□过平滑 □调色盘 □同一张脸 □全渲染 □构图自动 □细节均匀 □情绪平权
人工二审：待定
下一步：场景2 或 重试场景1变体
回流位置：[[动画AI生产方向_能力蓝图]] → 方向10 简模3D黑暗奇幻
```

### 4.2 回流循环

```text
生成 → 归档 → Codex 吸收 → 更新银矿库 → 下次 prompt 更准
```

每次归档自动加入 [[05-银矿库/00-待二审散点池/待二审散点池索引]]，等待人工二审评分为正式的银矿案例。

---

## 首发方向建议：简模 3D 黑暗奇幻

**为什么选这个：**
1. 蓝海——B站几乎没有专门创作者
2. 低模审美天然规避 AI 的过度渲染问题
3. 黑暗奇幻的 uncanny 感和 AI 的微妙不完美恰好共振
4. 十元系统中命运 xz+nz 和本体 zn+x 在这个方向上表现力最强
5. 不需要角色一致性（低模 + 黑暗 + 远景 = 角色细节不重要）

**首发短片的十元骨架：**

```text
作品：《灰塔》 
时长：30-45秒
五大主题：命运 xz+nz

动态链：
  xz（废墟中醒来/漂流）
  → n克xz（巨塔的承载反制漂流）
  → xz克zn（塔的真相压碎意义）
  → nz补xz（离开或留下的停靠都是归宿）

视觉风格：
  低多边形角色（Blender简模）
  AI生成PBR贴图（锈铁、苔石、旧木）
  Wan2.2生成环境氛围镜头
  暗调、单光源、大量留黑

情绪曲线：
  迷失 → 被接纳 → 真相崩塌 → 静默离开
```

---

## 模型获取速查

```bash
# Wan2.2 主力模型（ComfyUI 一键安装）
# 在 ComfyUI Manager 中搜索 Wan2.2 即可
# Hugging Face: https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged

# HunyuanVideo 1.5
# Hugging Face: https://huggingface.co/Comfy-Org/HunyuanVideo_1.5_repackaged

# LTX-Video 快速预览
# Hugging Face: https://huggingface.co/Lightricks/LTX-Video

# Wan2.2 蒸馏加速 LoRA
# Hugging Face: https://huggingface.co/lightx2v/Wan2.2-Distill-Loras

# AnimateDiff 运动控制
# Hugging Face: https://huggingface.co/ByteDance/AnimateDiff-Lightning
# Motion LoRAs: https://huggingface.co/guoyww/animatediff-motion-adapter-v1-5-2
```

---

## 连接 Obsidian 知识库

```text
本页 → 输入 [[十元生补克表]]（生补克关系）
本页 → 输入 [[动态母型]]（链条展开为场景）
本页 → 输入 [[三元十元语义融合总表]]（判读顺序）
本页 → 输入 [[银矿库总表]]（源案例）
本页 → 输入 [[动画AI生产方向_能力蓝图]]（35方向全览）
本页 → 输出 [[F12 补脑蓝图]]（自动化回流）
本页 → 输出 [[待二审散点池索引]]（生成结果入银矿）
```

## 一句话

```text
Obsidian 定义"为什么动"，HuggingFace 执行"怎么动"，F12 确保"下次动得更好"。
十元不是贴在动画上的标签，是动画的运动逻辑本身。
```