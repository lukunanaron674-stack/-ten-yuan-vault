# LEARNING_STATE｜每小时学习状态

## 目的
学习循环与正式生产指针分离，避免每小时研究误推进剧情。

## 当前模式
- run_mode: LEARNING_AND_TEST
- 正式生产需要导演存在明确 production goal。
- 没有 production goal 时，只允许产生 TEST-SHOT，不修改 current_shot_id。

## 每小时记录
- theme_topic
- script_topic
- tenyuan_topic
- storyboard_topic
- cross_question
- sources_used
- test_shot_id
- KEEP / REJECT / STOP
- verified / pending
- new_knowledge_written
- duplicate_skipped

## 主题研究入口
- [[../05_索引/IDX-06_主题Agent索引]]
- 五维电影研究只作为 P2 研究证据；P0 canonical 永远优先。
- 同一主题重复时，优先做反例、边界或机制验证，不机械重复电影标签。

## 门禁
1. TEST-SHOT 不自动进入正式剧情。
2. 研究结论不能修改角色/世界观正本。
3. 同主题重复时优先做反例或边界验证。
4. 只有通过多轮验证的结论才可提议升级主库。
5. 主题 Agent 的学习输出必须最终能转成 `theme_question / theme_experiment / pressure_mechanism`，否则不算可执行知识。
