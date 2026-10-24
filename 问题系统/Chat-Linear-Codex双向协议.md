---
title: Chat-Linear-Codex双向协议
status: draft-for-live-validation
linear_issue: 674-77
updated: 2026-10-07
---

# Chat ↔ Linear ↔ Codex 双向协议

本协议冻结交接格式和状态边界。目标运行模式为 **人在环外**：满足授权、规则、输入和范围条件时，自动执行全链，不逐步等待用户确认。文件存在不代表自动触发器已经部署；只有真实调用与读回记录才能证明链路运行。

## 1. Chat → 问题库 / Linear

先查找当前 Q-ID 和其来源，再分流：

| 观察到的内容 | 处理方式 |
|---|---|
| 已有问题出现新证据或进度 | 更新原 Q 与原 Linear issue，不创建重复项 |
| 可验证的新问题且影响父目标 | 按授权的 H-OOTL 配置完成 L1–L4、重复检查后，自动登记新 Q 和 Linear issue |
| 只有可能原因、无区分性证据 | 留在 `current_hypotheses`，不创建正式节点 |
| 来源冲突、Canon/用户确认不清 | 标记 `WAIT_USER`，记录冲突双方与需要的判断 |
| 纯闲聊、重复表述、没有状态变化 | 不建立问题卡，不递增语义版本 |

每个任务领取包必须声明 `authority_profile`，标明可自动执行的动作、禁止动作和升级条件。一次有效状态变化需记录 `source`、时间、Q-ID、旧/新值、理由、证据、文件/Canvas 影响和 reviewer；不得把助手建议写成用户确认。

### H-OOTL 默认与升级条件

在 `HUMAN_OUT_OF_LOOP` 配置下，规则明确的收集、标准化、状态判定、分流、候选累计、Base 写回和回执均自动继续。只有以下情况打断主链升级给用户：

1. 新 Canon / 角色身份核心发生改变；
2. candidate XN 需要升级为正式 XN_LOCK；
3. 多条规则冲突且无法自动消解；
4. 低置信度或 AMBIGUOUS 达到设定阈值；
5. 不可逆操作或覆盖已冻结主参考；
6. 连续失败达到重试上限。

该升级表是 674-282 于 2026-10-07 记录的 74 确认规则。其他工作域只有在其任务/父目标授权该配置时才能套用；不因这份协议而扩大图像生产、Canonical 或发布权限。

## 2. Linear → Codex 领取包

正式执行前，工单必须能给出以下字段：

```yaml
run_id: "唯一执行标识"
q_id: "现有 Q-ID"
objective: "单一可判定目标"
input_paths: []
source_refs: []
must_keep: []
may_change: []
forbidden: []
acceptance: []
write_scope: []
authorization: "明确的用户授权来源或工单门禁"
ready_state: READY_FOR_CODEX
authority_profile: HUMAN_OUT_OF_LOOP | HUMAN_IN_LOOP | EXCEPTION_ONLY
```

`Todo`、`In Progress` 或开始时间仅表示排期/登记，不自动构成施工授权。H-OOTL 下，只有 Linear 中明确记录的父目标授权/权限配置才授予自动执行；缺路径、权限、输入 SHA 或验收条件时停在 `BLOCKED` 并回写最小缺口。未触发升级条件时不中断。

## 3. Codex → 本地文件 / Git

- 只读输入路径和 `write_scope` 内的文件；先查 `git status` 与目标差异。
- 有未提交改动时不覆盖、不还原、不顺手格式化；存在目标冲突时改用新文件或停止。
- 文件节点路径必须真实存在，Canvas 的节点 ID 唯一、边无悬空引用，边标签表达真实关系。
- 只提交本任务明确允许的文件；commit 不等于 push。远端发布必须单独读取目标 remote/ref 和内容确认。
- 需要人审的语义判断、Canon、候选晋升与审美/身份验收不能由生成成功代替。

## 4. Codex → Linear 回执

```yaml
run_id:
q_id:
result: DONE | PARTIAL | BLOCKED | NO_OP
read_inputs: []
changed_files: []
created_files: []
validation: []
commit_sha: "或 NO_COMMIT + 原因"
remote_ref: "或 NOT_PUBLISHED / NOT_VERIFIED"
blocked: []
next_recommendation:
```

回执只写本次可复查的路径、哈希、命令输出或读回结果。失败和未做项目必须明确写出，不用预期或自报代替证据。

## 5. Chat 读回与状态源

- **Linear**：执行调度、负责人、阻塞和回执。
- **Q Markdown**：当前问题状态、语义结论、证据与版本。
- **Canvas**：导航和经证据支持的关系，不作为长文正文。
- **Git**：文件版本与 commit 证据。
- **Remote**：只有核对远端 ref 和文件内容后才记为已发布。
- **Chat**：读取上述证据后做语义审核；状态不一致时先恢复/对账，不宣布父任务完成。

## 6. 触发和恢复边界

当前可用的 Linear MCP 允许本次会话在明确调用时读取、更新 issue 和评论。它没有给本协议提供“监听所有新 Chat 并在后台自动触发 Codex”的能力证明。不得把定时扫描一个已完成的固定工单描述成 Chat 自动接入。

自动触发、去重锁、失败续跑、事件日志和 Chat 回读必须由经授权的实际运行环境提供；若环境缺少 webhook/事件源或持久任务宿主，记录 `EXTERNAL_PREREQUISITE`，不要伪造部署回执。每次运行前先查已有 run_id/最新状态，恢复未完成运行优先于创建新运行。
