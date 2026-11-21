# Q-VIDEO-MANAGE R2｜LibTV / ComfyUI / Spool｜2026-11-22
母工单：Linear [674-341](https://linear.app/674/issue/674-341)；H3 技术见 674-286/216。**不新建重复工单**。

## 目标
复用已有 `C:/work/libtv-studio` 与 ComfyUI/H3，不推倒已实测链路；研究 LibTV 的 4/9/25 宫格、脚本→分镜→候选镜头→视频、参考素材、批量与 Agent；对照 4 个 GitHub 项目，优先增加 Spool 的镜头/Take/时间线与 Agent 功能。

## 一句话复用结论
- [LibTV 官方 Skill](https://github.com/libtv-labs/libtv-skills/blob/main/skills/libtv-skill/SKILL.md)：会话创建、素材上传、增量查询、下载由前端 Agent 操作，复杂编排委托平台后端（本地不能假定 ComfyUI 自带这样的导演）。
- [Spool](https://github.com/doubletwisted/ComfyUI-Spool)：在 ComfyUI 中把 workflow 生成结果变成按 Clip/Take 分类的镜头时间线，并提供受限 Agent API、比较/选定、导出。
- [Workflow Studio](https://github.com/ketle-man/ComfyUI-Workflow-Studio)：提供图库、工作流管理、批量参数矩阵，以及支持 MiniMax H3 等的 Video Plan Block。
- [Director's Console 上游](https://github.com/NickPittas/DirectorsConsole)：分镜 Panel、摄影语法、多实例调度；README 标专有保留所有权利，不直接移植源码。
- [Yanmul/ai-drama-studio](https://github.com/Yanmul/ai-drama-studio)：LibTV 风格脚本与生成画布；作者承认真模型 key 未验、无时间线拼接导出，含清理风险，隔离研究。

## 目前状态
外部源码/官方 README 和本库 H3 门禁已读，**本机并未被本聊天访问、未安装、不宣称任何 GPU 视频出片。**

## P0 给 Codex：唯一下一动作（只读，完成即停）
1. 检查真实的 `C:/work/libtv-studio` git status、现有翻译/修饰器/ComfyUI adapter、3100/8188 端口。
2. 查 ComfyUI 实际 root、Python 解释器、ComfyUI 后端/前端版本、`custom_nodes`、H3 workflow JSON、SaveVideo/VHS 输出、FFmpeg/FFprobe、GPU/磁盘。
3. 对照 Spool 条件 ComfyUI>=0.39/Python>=3.11/FFmpeg>=5.1，给出可行性和隔离试装/备份/回滚方案。
4. 输出真实文件路径、原始命令摘要、环境差距、阻塞；归档 P0_DISCOVERY_REPORT.md 并给 674-341 回执。**禁止安装任何插件、GPU 渲染、收费 API、改既有 H3 工作流或清理。**

## 下一阶段有上限的路线
P1 仅 Spool，旧 MP4 无 GPU 时间线/Take/Export → P2 按需 Workflow Studio 保存 H3 两 Block 计划不运行 → P3 只有 READY+授权后 1镜头×2 Takes 单变量 seed 试验 → P4 才考虑与既有 libtv-studio 的映射；关联 `shot_id↔clip_id↔take_id↔prompt_id`。

## 16 个有限实验
L01-L04 LibTV 及自身代码，S01-S04 Spool Demo/UI/导入/API，W01-W03 Workflow Studio 工作流/Plan/参数矩阵，D01-D02 摄影/多机方法，A01-A02 短剧画布原型与风险，E01 单镜两版受控实验。前 15 项无需新付费 GPU；最后一项须 H3 READY 且用户授权。

**大纲可视化**：同目录 `视频生成管理_LibTV_ComfyUI_Spool_R2_总览_20261122.canvas`。详细的 97 节点 Canvas + 中文手册 + Codex 交接包，已作为本次对话下载附件交付。
