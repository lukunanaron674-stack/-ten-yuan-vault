# 三元宇宙 · HEARTBEAT

> 每次心跳检查以下事项，有变化才报告，无变化回复 HEARTBEAT_OK

---

## 检查清单

### 1. 任务队列（tasks/）
检查 `/workspace/三元宇宙/tasks/` 有无新的未处理任务卡（TASK-*.md）：
- 有 → 更新台账「待分发」状态，通知架构师
- 无 → 继续

### 2. 子代理活跃状态（agent_registry.md）
检查 `/workspace/三元宇宙/system/agent_registry.md` 里的「上次活跃」时间戳：
- 有代理超过7天未活跃 → 标记🟡休眠
- 有代理超过30天未活跃 → 标记🔴失效
- 正常 → 无需操作

### 3. 观察者日志（_观察者_memory.md）
读取最新观察日志，检查是否有>48h未更新的重大事件待记录：
- 有 → 补充记录
- 无 → 继续

### 4. 系统健康度
简单自检：
- memory/ 各文件是否存在
- agents/ 各SOUL是否齐全
- 台账与实际是否一致

---

## 触发条件

以上任意一项有异常 → 写状态报告到 `/workspace/三元宇宙/tasks/_输出/HEARTBEAT-{日期}.md`
全部正常 → 回复 HEARTBEAT_OK
