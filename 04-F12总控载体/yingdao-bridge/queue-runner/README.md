# 民国素材影刀队列驱动器

## 作用

本程序不控制鼠标，也不打开影刀设计器。它负责把现有民国素材队列逐张投递给已发布的影刀应用：

1. 从两个 `minguo-priority-batch-*.json` 队列读取第一个未完成任务。
2. 把当前任务写到 `inbox/command.json`，触发影刀文件监听器。
3. 等待影刀生成并保存本轮图片。
4. 验证图片存在、大小超过 10KB、修改时间属于本轮。
5. 成功后写回任务状态并自动投递下一张。
6. 失败或超时后暂停，保留断点，不继续污染后面的任务。

## 使用前提

- 影刀应用必须已经保存、发布并启用文件触发器。
- 触发器监听 `yingdao-bridge/inbox`，文件类型为 `command.json`，事件为“创建、更新”。
- 影刀单次流程必须读取动态 `promptPath` 和 `imagePath`，处理一张后写入 `outbox/minguo-contact-sheet-result.json`。
- 固定使用 ChatGPT 素材框：`https://chatgpt.com/c/6a54b960-7854-83ea-ac0d-a4e9fded575f`。

## 日常使用

- 双击 `启动民国素材队列.cmd`：从断点继续。
- 双击 `查看民国素材队列状态.cmd`：只查看，不运行。
- 双击 `重试失败的民国素材任务.cmd`：把失败或中断任务恢复为待执行，然后重新启动队列。

## 状态位置

- 队列状态：原始两个 `minguo-priority-batch-*.json`
- 当前断点：`state/minguo-queue-runner.json`
- 运行日志：`logs/minguo-queue-runner.log`
- 影刀命令：`inbox/command.json`
- 影刀回执：`outbox/minguo-contact-sheet-result.json`

不要同时打开两个“启动民国素材队列”窗口。驱动器会用锁文件阻止重复运行。
