# STATE_WRITE_PROTOCOL｜状态读写协议 v1.1

## 单一事实源
机器优先读取：
`02_共享状态/PROJECT_STATE.json`

`PROJECT_STATE.md`只做人类查看摘要，不作为自动化主状态。

## 每轮开始
1. 读取 PROJECT_STATE.json
2. 读取 state_version
3. 确认 active_job_id / current_shot_id
4. 再读取 Agent 自己的知识索引
5. 执行任务

## 子 Agent 返回格式
子 Agent 不直接改全局状态，而是返回 delta：

```json
{
  "job_id": "JOB-...",
  "shot_id": "SHOT-...",
  "base_state_version": 12,
  "agent": "theme_agent",
  "result_type": "theme_result",
  "status": "READY",
  "payload": {}
}
```

允许的内容结果按岗位隔离：
- theme_agent → `theme_result`
- script_agent → `script_result`
- tenyuan_agent → `tenyuan_result`
- storyboard_agent → `storyboard_result`

其他生产 Agent 继续只提交各自 asset / render / review 结果。

## 导演合并
导演确认：
- job_id 相同
- shot_id 相同
- base_state_version 等于当前版本
- 结果未越权

然后：
1. 合并允许字段
2. state_version + 1
3. 更新 last_writer / updated_at
4. 写 next_action / assigned_agent

## 禁止覆盖
- 旧镜头结果不得覆盖当前镜头。
- 旧 state_version 返回结果标记 STALE_RESULT。
- REVIEW=PASS 后，任何 RETRY 结果若来自旧 job_id，一律忽略。
- 子 Agent 不允许自行推进 current_shot_id。
- theme_result / script_result / tenyuan_result / storyboard_result 不得互相越权覆盖。

## 人工介入
用户可随时修改导演目标。导演需创建新 job_id，并保留旧任务为 CANCELED / SUPERSEDED，不删除历史。
