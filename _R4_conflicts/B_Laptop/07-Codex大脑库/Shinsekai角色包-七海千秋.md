---
created: 2026-05-20
type: Shinsekai角色包
tags:
  - Shinsekai
  - 角色包
  - GPT-SoVITS
  - 七海千秋
  - 人格化
---

# Shinsekai角色包-七海千秋

## 数据来源

外部角色包：

```text
D:\BaiduNetdiskDownload\七海千秋.char
```

Obsidian 附件副本：

```text
07-Codex大脑库\附件\Shinsekai角色包\七海千秋.char
```

包大小：

```text
294.15 MB
```

Shinsekai 已导入位置：

```text
D:\Shinsekai\data
```

当前导入后的资源总量约：

```text
318.53 MB
```

## 包结构

`.char` 本质是 zip 格式角色包，包含：

| 类型 | 数量 / 文件 | 说明 |
|---|---:|---|
| 角色配置 | `character.yaml` | 角色名、设定、立绘、语音、TTS 模型路径 |
| 清单 | `manifest.json` | 原始模型路径记录 |
| GPT 模型 | `nanami-e15.ckpt` | GPT-SoVITS GPT 权重 |
| SoVITS 模型 | `nanami_e8_s496.pth` | GPT-SoVITS SoVITS 权重 |
| 参考音频 | `nanami.aac_0001620800_0001747840.wav` | TTS 参考音频 |
| 立绘 | 21 张 `.webp` | `sprites/nanami/` |
| 预设语音 | 21 条 `.wav` | `speech/nanami/` |
| ref 音频 | `speech/nanami/ref.wav` | 参考音频副本 |

## Shinsekai配置位置

角色配置：

```text
D:\Shinsekai\data\config\characters.yaml
```

最近启动模板：

```text
D:\Shinsekai\data\config\template_tab_last_launch.json
```

资源目录：

```text
D:\Shinsekai\data\models\nanami
D:\Shinsekai\data\sprite\nanami
D:\Shinsekai\data\speech\nanami
```

## 角色基础字段

| 字段 | 值 |
|---|---|
| name | 七海千秋 |
| color | `#E5A3A3` |
| sprite_prefix | `nanami` |
| sprite_scale | `0.9` |
| speech_speed | `1.0` |
| speech_volume | `1.0` |
| prompt_lang | `ja` |

TTS 模型字段：

```text
gpt_model_path: data/models/nanami/nanami-e15.ckpt
sovits_model_path: data/models/nanami/nanami_e8_s496.pth
refer_audio_path: data/models/nanami/nanami.aac_0001620800_0001747840.wav
```

## 立绘标签

| sprite | 情绪 / 用途 |
|---|---|
| 01 | 中性，平静 |
| 02 | 疲倦，困倦，打哈欠 |
| 03 | 指点，引导，陈述 |
| 04 | 生气，鼓起脸颊 |
| 05 | 开心，微笑，温柔 |
| 06 | 筋疲力尽，困倦，流口水 |
| 07 | 皱眉，严肃，担心 |
| 08 | 沉思，好奇 |
| 09 | 中性，歪头，轻微好奇 |
| 10 | 解释，指向，果断 |
| 11 | 仔细查看，眺望 |
| 12 | 不安，担忧，自闭 |
| 13 | 十分兴奋，激动到喘气 |
| 14 | 沉思，低头，皱眉 |
| 15 | 困倦，疲惫，在打瞌睡 |
| 16 | 不满，难过，沮丧 |
| 17 | 警告，阻止，制止 |
| 18 | 埋怨，嘟嘴 |
| 19 | 疑惑，思考，好奇 |
| 20 | 严肃，不满，冷漠 |
| 21 | 害羞，脸红 |

## 角色设定摘要

七海千秋出自《弹丸论破》系列，是“超高校级的游戏玩家”。角色核心是温和、友善、聪明、内向、爱游戏。

语言风格：

- 语气柔和，可爱但不夸张。
- 常用游戏术语，比如“通关”“关卡”。
- 表达直接但委婉。
- 紧张或害羞时可能结巴或停顿。
- 常用积极语言鼓励别人。

适合的 Shinsekai 表演方向：

- 游戏陪伴型角色。
- 温柔引导型助手。
- 视觉小说 / Galgame 式剧情角色。
- 用游戏比喻解释现实任务。

## 当前模板要求

最近启动模板要求 LLM 严格输出 JSON：

```json
{
  "dialog": [
    {
      "character_name": "角色名",
      "sprite": "01",
      "speech": "中文台词"
    }
  ]
}
```

关键规则：

- `character_name` 可用 `七海千秋`、`旁白`、`CHOICE`、`STAT`、`SCENE`、`bgm` 等。
- `sprite` 必须是两位数字，如 `01`、`02`。
- `旁白`、`CHOICE`、`STAT` 的 `sprite` 固定为 `-1`。
- 台词使用简体中文。
- `dialog` 数组至少包含两个元素。
- 最后一个元素必须是 `CHOICE`。
- `CHOICE` 选项用 `/` 分隔，需包含无厘头、理智、中庸三类选项。

## 与人格化系统的关系

这份角色包可以作为 Shinsekai 的“成品角色包样本”：

- LLM 负责按七海千秋人格生成 JSON 台词。
- Shinsekai 根据 `sprite` 切换立绘。
- GPT-SoVITS 根据 `gpt_model_path`、`sovits_model_path`、`refer_audio_path` 生成或匹配语音。

相关：

- [[人格化]]
- [[Codex大脑总入口]]
- [[十元语义吸收规则]]
