# CONTEXT_DISTILLATION_PROTOCOL｜上下文提炼协议 v1

## 核心原则
索引只负责“去哪找”，提炼层负责“当前真正需要知道什么”，原始正本只在证据不足时按需打开。

禁止把索引文件本身写成第二套知识百科。

## 三层结构

### L1｜IDX-LITE
目标：极短路由。
只保留：
- source_id
- source_path
- priority: P0 | P1 | P2
- topic_tags
- last_hash
- distilled_brief_id
- when_to_open_source

默认不得放长摘要、案例复述、历史讨论。

### L2｜DISTILLED BRIEF
Agent 默认读取层。
每份只保留：
- 3–10 条当前有效规则
- 关键反例
- 适用条件
- 禁用条件
- 与当前生产直接相关的字段
- source_refs
- source_hash
- distilled_at
- stale: true | false

要求：
- 不复制原文大段内容
- 不重复 canonical
- 同义规则合并
- 已失效旧规则删除或标 stale

### L3｜SOURCE
原始 Canon / P0 / P1 / P2。
只有以下情况才打开：
1. distilled brief 不足以回答当前任务；
2. 需要核验原文或版本冲突；
3. source_hash 已变化；
4. Agent 要新增或修改知识；
5. 导演要求证据追溯。

## 默认读取顺序
`PROJECT_STATE → 当前任务 → IDX-LITE → 对应 DISTILLED BRIEF → 必要时 SOURCE`

禁止：
`INDEX_MAP → 全部 IDX → 全部 P0/P1/P2 → 再开始工作`

## 缓存与失效
- source_hash 未变化：沿用 distilled brief。
- source_hash 变化：brief 标 stale，重新提炼。
- 当前任务未触及该主题：不加载对应 brief。
- blocker / state_hash 未变化：不重复加载相同上下文。

## 每 Agent 上下文预算
默认每个 tick：
- 1 个状态文件
- 1 个当前任务包
- 1 个 IDX-LITE
- 最多 3 个 distilled briefs
- 最多 2 个原始 source 片段

超过预算时，必须先筛选，不得整库加载。

## 提炼输出格式
```yaml
brief_id:
agent:
topic:
source_refs:
source_hashes:
effective_rules:
counterexamples:
use_when:
do_not_use_when:
production_fields:
stale: false
```

## 与自动调度关系
AUTO_DISPATCH 先决定“谁上场”，本协议再决定“它最少读什么”。

目标不是让 Agent 知道最多，而是让它在当前一步知道得刚刚够用。
