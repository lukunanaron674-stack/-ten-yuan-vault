# Canvas 单图参考流水线

本目录只维护“为概念 Canvas 补真实参考图”的运行状态与执行证据，不存放研究正本，也不把账本当成 Canvas 成果。

## 唯一真相源

- 生产分支：`main`
- 当前断点：`state.json`
- 最新有效运行记录：`run-ledger-latest.json`
- 当前目标 Canvas：以 `state.json.canvasPath` 为准
- 执行规则：
  - `07-Codex大脑库/skills/Canvas概念库参考图补全/SKILL.md`
  - `07-Codex大脑库/skills/Canvas概念库参考图补全/RUNTIME-OVERRIDE.md`
  - `07-Codex大脑库/skills/Canvas概念库参考图补全/BATCH-OVERRIDE.md`
  - `07-Codex大脑库/skills/Canvas概念库参考图补全/LEDGER-PROTOCOL.md`

## 目录结构

```text
canvas-single-image-pipeline/
├─ README.md
├─ state.json
├─ run-ledger.md
├─ run-ledger-latest.json
├─ run-ledger.d/YYYY-MM/
└─ ledger-archive/
```

- `state.json`：当前唯一断点与待完成对象。
- `run-ledger.md`：轻量导航，不写具体当前节点，不追加历史。
- `run-ledger-latest.json`：指向最近一次产生新证据或新状态的不可变记录。
- `run-ledger.d/`：按月份保存不可变运行分片。
- `ledger-archive/`：迁移前历史，只读。

## 完成标准

一个概念只有同时满足以下条件才算完成：

1. 当前 `main` 存在可显示的真实参考图资源或参考笔记；
2. Canvas 存在唯一 `ref_<nodeId>` file 节点；
3. Canvas 存在唯一 `e_ref_<nodeId>` text→file 连线；
4. 节点、连线、参考文件、commit 与 blob 均可远端读回；
5. `state.json` 为 `remoteVerified=true` 且 `canvasLinked=true`。

失败记录、外部链接、prompt-reference、账本条目或“已找到图片”均不能代替上述闭环。

## 维护边界

- 不删除或改写历史分片；更正使用新的记录。
- 不为重复心跳、相同错误重述或无仓库变化的重试制造提交。
- 不移动旧 Canvas 节点，不重排旧边，不修改无关 metadata。
- 不在此目录存放图片二进制、临时工作流或一次性脚本。
- 不将 `.bak`、临时副本或历史分支重新当作生产正本。
- 没有实际变化时输出 `RETRY_DEFERRED_NO_REPO_CHANGE` 或 `NO_ACTION_VERIFIED`。

## 常见维护动作

- 当前断点失败：先读 `state.json` 和 latest 指针，再确认失败指纹是否变化。
- 历史 completed 缺成果：加入 `historicalRecoveryQueue`，先恢复后搜索新概念。
- 同一错误重复：不写新分片，保留断点等待下一轮。
- 成功闭环：创建 completed 分片，回读后更新 latest 指针。
- 当前 Canvas 全部完成：按完整路径字典序进入下一 Canvas。