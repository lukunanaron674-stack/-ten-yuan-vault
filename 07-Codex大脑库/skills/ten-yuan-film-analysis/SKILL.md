---
name: ten-yuan-film-analysis
description: 用真实可访问影片的时间码、截图和字幕辅助十元作品研究，生成分幕卡、图形拓扑、文字横纵构图、视听证据与可迁移事件零件；证据不足必须停，不能凭片名臆测镜头。
version: 1.0.0
status: repo-ready-local-unverified
issue: 674-324
authority_level: L5
updated: 2026-11-02
---

# 十元电影拉片 Skill｜证据 → L3 → L2 → L1

## 唯一方法接口
- 原理论：01-十元系统/三元十元感受模型_核心正本_v1.0_20261007.md。
- 关系门禁：01-十元系统/04-十元生克补卡/README_生克补卡总控_v2.0.md 与674-105。含z/zn旧关系继续冻结。
- 文字横纵：07-Codex大脑库/skills/story-horizontal-vertical-text/SKILL.md。
- Canvas原位排版：07-Codex大脑库/skills/obsidian-canvas-layout/SKILL.md。
- 三级编译正本：黎黎隆项目/20_Agent系统/04_协议/STORY_TENYUAN_CROSS_VERTICAL_PROTOCOL.md。

本技能只补 **影片实际证据入口**，不新建电影Canvas，不改L2理论。674-324的R6已由独立定时任务完成；这里是工程子模块，不重新计R6。

## 让本地Codex识别Skill（用户本机执行）

GitHub里存在SKILL.md **不等于**本地Codex已经安装。先确认Git工作树没有未同步/未提交的改动并安全拉取，再在Windows PowerShell、Obsidian仓库根目录执行（若目标已存在，先对比，禁止直接覆盖）：

~~~powershell
$src = (Resolve-Path "07-Codex大脑库/skills/ten-yuan-film-analysis").Path
$dst = Join-Path $HOME ".codex\skills\ten-yuan-film-analysis"
New-Item -ItemType Directory -Force (Split-Path $dst) | Out-Null
if (Test-Path $dst) { Write-Error "目标Skill已存在，请先检查差异，勿直接复制"; exit 1 }
Copy-Item -LiteralPath $src -Destination $dst -Recurse
~~~

之后重启Codex会话，再让Codex调用 ten-yuan-film-analysis。若用户用的是项目级而非全局Skill位置，应按所用Agent的官方发现规则登记；仅调用本Python脚本不需要安装到Codex目录。完成这一操作需要真正访问用户电脑，远程GitHub写回不能代替本地安装证明。

## 可执行命令（Windows原生）
前提：Python 3.10+、ffmpeg与ffprobe位于PATH。先在仓库根执行：

~~~powershell
python "07-Codex大脑库/skills/ten-yuan-film-analysis/scripts/film_evidence.py" doctor
python "07-Codex大脑库/skills/ten-yuan-film-analysis/scripts/film_evidence.py" extract --input "D:\Movies\authorized_clip.mp4" --out "D:\film-evidence\case-001" --case-id CASE-001 --title "作品与版本" --start 0 --end 120 --interval 5 --max-frames 80
~~~

会在**仓库外**输出 evidence.json / agent_input.md / frames。只抽帧、不调用AI、不改变原视频；输出本地留存，不提交Git。默认低密采样，不能宣称完整看过电影。可选安装 Python包 scenedetect[opencv] 后使用 --mode scenes 自动检测候选切点；如果模式不可用必须报错，不隐式冒充镜头识别完成。

## 外部项目接线（不复制、不默认已安装）
- watchvideo https://github.com/Dunteng/watch-video-skill ：Codex + 本地视频的字幕/关键帧/转录证据；完整 analyze 目前不支持Windows原生，Windows使用WSL2。其默认抽帧上限80；电影按段提取。只有文件证据才能总结，不能单看片名或流媒体页面。
- video-analysis-skill https://github.com/zhenwusw/video-analysis-skill ：逐帧拉片分析规范，内容线与技术线分开；重点区间重新抽帧。此仓库的 shell脚本主要用于类Unix环境，Windows可用本技能Python入口。
- PySceneDetect https://github.com/Breakthrough/PySceneDetect ：检测**算法候选切镜**，并非人工已确认的镜头。
- Qwen3-VL https://github.com/QwenLM/Qwen3-VL ：短片段/截图的可选本地视觉解释；本技能尚未接通用户4080真实模型服务，不能宣称已跑推理。
- WhisperX https://github.com/m-bain/whisperX ：可选语音对齐。MovieChat https://github.com/wenhaochai/MovieChat ：长视频研究备选，并非必要依赖。
- 不提供版权电影下载、DRM绕过、Cookie采集或平台限制绕过；只处理用户有权分析的文件/片段。

## 固定分层
- F0：片名目录；F1：可追溯的片介/剧本事实。
- F2_FRAME_CAPTURED：从实际视频抽出的**单张样本帧及时间码**，不能自动推导连续动作、声音、移动机位。
- F2_EVENT_CONFIRMED：人或具备多帧证据的代理确认动作前后，并留下实际证据ID。
- F2_SHOT_CONFIRMED：看片或取得足够连续声画证据核实镜头/声音；F3：真人观众的主观感受反馈。
- 没片源→WAIT_SOURCE；有截图没真正阅读→WAIT_IMAGE_REVIEW；无声音→SOUND_UNVERIFIED；无真人评价human_feeling=null。所有十元分布均标【H】预测，严格生克补必须经过L2关系审计。

## 影片到十元
流程：

~~~text
授权视频(具体版本)→F2采样帧/字幕/时间码
     ↓逐帧审看，不脑补缺失区间
L3：幕号Axx-Cxx；每卡唯一主变量，人物动作/障碍/可见后果
     ↓按事件串联
L2：第一屏等宽横纵图＋T01–T12候选图形
     │横线：同一窗主体→动作→物件/制度→changed_variable
     │纵线：上卡后果→下卡前提→新的选择与残留
     └──反馈：明确回到哪张卡及其改变变量
     ↓删卡/逆向反例
L1：五维主题问题＋十元感受主/次【H】＋竞争骨架
     ↓
单一事件零件：可迁移机制＋不可照抄的具体戏剧动作
~~~

每张卡需保留 source_media_id / film_title / version / start_s / end_s / frame_ids / act_id / card_id / subject / action / object / changed_variable / consequence / relation_status / topology_id / counterfactual / shot_scale / camera / composition / light_color / movement / sound_music / intended_feeling_H / human_feeling / state。无证据留空，绝不可把概念/形容词替代具体事件。文字横纵图需满足现有Skill的横向+纵向+反馈三追踪，Canvas内容写入前遵守默认排版Skill。只将**脱敏研究文字、视频证据ID与时间码**写回已有方法正本/Canvas，不上传截图或字幕。

## 本次交付门禁
GitHub上 Skill 与脚本文件回读完成=REPO_READY；本地真实授权片源、ffmpeg/模型环境、镜头审看、返回回执尚未完成=WAIT_LOCAL_F2。不改674-313生产卡，不自动触发H3或后台GPU；R7/R8保持原有限轮次。
