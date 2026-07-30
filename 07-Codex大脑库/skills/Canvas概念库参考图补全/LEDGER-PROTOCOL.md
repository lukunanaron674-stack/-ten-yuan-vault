# Canvas 概念库参考图补全｜分片账本协议

本文件在 `SKILL.md`、`RUNTIME-OVERRIDE.md` 与 `BATCH-OVERRIDE.md` 之后生效；冲突时以本文件为准。

## 目的

解决单一 `run-ledger.md` 持续增长后必须整文件读取、整文件覆盖、容易截断或误删历史的问题。

## 核心边界：账本不是 Canvas 成果

- 账本、分片记录与历史归档只保存执行证据，不等于参考图已经恢复到当前 `main`。
- 历史记录中标记为 `completed` 的概念，必须核对当前 `main` 是否同时存在：参考笔记、`ref_<nodeId>` file 节点、`e_ref_<nodeId>` 连线，以及可读 commit/blob。
- 缺少任一项就必须加入 `historicalRecoveryQueue`，优先从旧分支或历史提交恢复原内容；不得仅因记录已归档而跳过。
- 历史恢复队列清空前，不得开始搜索新的概念参考。
- 只有历史记录对应成果已经真实进入当前 Canvas 并完成远端读回，才可标记恢复完成。

## 文件结构

```text
04-F12总控载体/canvas-single-image-pipeline/
├─ README.md                       # 目录说明与维护边界
├─ state.json                      # 当前唯一断点
├─ run-ledger.md                   # 轻量索引，不再追加完整历史
├─ run-ledger-latest.json          # 最新有效记录指针，可小文件更新
├─ run-ledger.d/YYYY-MM/           # 新记录，一次有效状态变化一个不可变文件
│  └─ <timestamp>__<nodeId>__<result>.md
└─ ledger-archive/                 # 迁移前旧账本，只读归档
   └─ run-ledger_legacy_through_2026-07-28.md
```

## 写入规则

1. 不再向 `run-ledger.md` 追加运行详情。
2. 每个已结束且产生**新证据或新状态**的概念处理或恢复任务，使用 `create_file` 新建一份独立记录。
3. 推荐路径：

```text
04-F12总控载体/canvas-single-image-pipeline/run-ledger.d/<YYYY-MM>/<YYYYMMDDTHHMMSS±ZZZZ>__<nodeId>__<completed|failed|no_missing_concepts>.md
```

4. 文件名必须可重复计算。创建前先读目标路径：
   - 不存在：创建；
   - 已存在且内容一致：视为幂等成功；
   - 已存在但内容不同：停止并记录冲突，不覆盖。
5. 独立记录创建并远端读回成功后，才更新 `run-ledger-latest.json`。
6. `run-ledger-latest.json` 只保存最新记录路径、结果、Canvas、节点、commit 与 blob，不复制整段历史。
7. 历史归档与旧记录文件均不可修改；修正使用新的更正记录，不回写旧文件。
8. 不制造空提交，不为单纯心跳、相同错误重述或未发生仓库变化的重试创建新分片。

## 重复失败去重

相同故障在每小时重试时不得重复制造 `state → failed shard → latest pointer` 三连提交。

定义失败指纹 `failureFingerprint`：

```text
canvasPath
+ nodeId
+ canvasBlobSha
+ referenceBlobSha（无则 none）
+ 规范化 failureClass
+ nextAction
```

当本轮结果为 `failed`，且同时满足以下条件：

- 当前失败指纹与 `run-ledger-latest.json` 指向记录一致；
- `main` 上目标 Canvas、参考笔记、状态所依赖的 blob/commit 均未变化；
- 没有新增参考来源、没有新的写入尝试证据、没有新的并发冲突或校验结果；
- 唯一变化只是时间、心跳或同义改写的错误描述；

则本轮必须：

1. 不创建新的失败分片；
2. 不更新 `run-ledger-latest.json`；
3. 不仅为 `lastHeartbeat` 或 `retryCount` 更新 `state.json`；
4. 输出 `RETRY_DEFERRED_NO_REPO_CHANGE`，保留原断点，下一轮继续重试。

以下任一情况出现时，才创建新的失败分片：

- 首次出现该故障；
- `failureClass` 或唯一 `nextAction` 发生实质变化；
- Canvas、参考笔记、来源页或相关 blob/commit 发生变化；
- 实际执行了新的写入、恢复、下载或校验步骤，并产生可核验的新证据；
- 发生新的并发冲突或权限/网络状态变化；
- 前一失败后已成功，之后又出现新的失败。

后续成功必须创建新的 `completed` 分片，并覆盖 latest 指针；不得因历史存在同节点失败记录而跳过成功登记。

## 单条记录模板

```markdown
# Canvas 参考图运行记录

- 时间：<ISO时间>
- Canvas：<path>
- 节点：<nodeId> <概念名>
- 结果：completed / failed / no_missing_concepts
- 失败指纹：<failureFingerprint或none>
- 参考笔记：<path或none>
- 来源页：<url或none>
- 参考提交：<sha或none>
- Canvas 提交：<sha或none>
- Canvas blob：<sha或none>
- 状态提交：<sha或none>
- 远端读回：<证据>
- 失败原因：<none或真实原因>
- 下一动作：<唯一动作>
```

## 读取规则

每次运行只需读取：

1. `run-ledger.md` 轻量索引；
2. `run-ledger-latest.json`；
3. 状态指定节点对应的历史记录文件；
4. `historicalRecoveryQueue` 非空时，读取队列节点对应的旧归档条目和旧分支文件。

不得为了追加新记录而重新读取或覆盖整个历史归档；但不得以此为由跳过历史成果恢复核对。

## 批处理

一轮最多 5 个概念时，每个产生新证据或新状态的概念各自创建一份独立记录并更新一次最新指针。某个概念失败后停止；此前已创建并远端验证的记录保留。历史恢复队列优先级高于所有新概念。重复且无仓库变化的失败适用去重规则，不创建新记录。