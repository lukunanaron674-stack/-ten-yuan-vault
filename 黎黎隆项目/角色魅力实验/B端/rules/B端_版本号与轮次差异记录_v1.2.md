# B端版本号与轮次差异记录规范 v1.2

> v1.0：轮次/父任务/具体before-after；v1.1：不做MV、单人单实例；v1.2：四技能执行链、氛围音与情绪音、每段同prompt双抽。旧版本文档保留，**新轮次**标记 `B-RULE-v1.2` / `video_tenyuan_prompt_schema_v1.2` / `H3动画四技能执行链_v1.0`。

每轮 `version_tracking` 补 `audio_design_version: v1.0`、`sampling_version: double_draw_v1.0`、`skills_pipeline_version: v1.0`，并把「相较上一轮是否新增音频、prompt是否逐抽相同、run_A/run_B分开记录、角色图场景图和运行参数有无变化」写入差异表。

每个clip记录两次抽样**计划**，渲染未实际发生时`run_A`、`run_B` 均标 `queued_for_workbuddy_validation`，`seed=null`，`render_result=null`。Work 可自行记录真实 seed 和任务 ID，不支持seed时不要编造值。两段各两次最多4个视频任务；Work可按用户授权和现有预算/生产队列执行，不能由B端文字任务声称4个都已渲染。

音频逐段标明确切可观察动作触发点；Work若无生成音频能力则转为音效后期清单。新规则的首次采用记录为 `changed_fields` 的规则变化，与角色/场景变化分开，不能拿新旧不同角色视频评价单变量因果。
