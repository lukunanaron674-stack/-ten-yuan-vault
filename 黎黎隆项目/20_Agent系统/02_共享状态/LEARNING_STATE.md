# LEARNING_STATE｜每小时学习状态

## 目的
学习循环与正式生产指针分离，避免每小时研究误推进剧情。

## 当前模式
- run_mode: LEARNING_AND_TEST
- 正式生产需要导演存在明确 production goal。
- 没有 production goal 时，只允许产生 TEST-SHOT，不修改 current_shot_id。

## 每小时记录
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

## 门禁
1. TEST-SHOT 不自动进入正式剧情。
2. 研究结论不能修改角色/世界观正本。
3. 同主题重复时优先做反例或边界验证。
4. 只有通过多轮验证的结论才可提议升级主库。
