---
name: 五行轴角色生成聊天编译器
description: 把自然语言聊天请求编译为五行轴角色生成器的 resolved_request、会话状态、锁定/重抽与 multi/graph 控制；聊天层不得自行定义十元，只调用 current canonical 驱动的 trigger registry、mapping 与 runtime。
version: 0.1
status: active
repository: lukunanaron674-stack/-ten-yuan-vault
branch: main
authority_level: L5-workflow
scope: 五行轴角色生成器聊天入口
state: 07-Codex大脑库/skills/五行轴角色生成聊天编译器/state.json
ledger: 07-Codex大脑库/skills/五行轴角色生成聊天编译器/run-ledger.md
application_root: 09-给674（我）用的库/09-方法论与工作流/五行轴角色生成器
---

# 五行轴角色生成聊天编译器 Skill v0.1

## 1｜定位

本 Skill 不是第二套生成器，也不是新的十元解释层。

固定结构：

```text
用户聊天
→ 聊天意图识别
→ canonical trigger / session state
→ trigger_compiler resolved_request
→ generator runtime
→ structured output
→ 保存会话生成状态
```

聊天层只负责：

- 理解“生成 / 继续 / 锁定 / 重抽 / 切模式 / 指定主副职责 / 查看原因”等操作意图；
- 维护当前会话的角色生成状态；
- 把自然语言控制转换为现有 runtime 能消费的结构；
- 将 runtime 的 BLOCKED / DATA_BLOCKED / NOT_IMPLEMENTED 原样暴露给用户。

聊天层严禁：

- 用“可爱、红色、骑士、偶像、贫穷、忧郁、高贵”等表面词反推十元；
- 因为用户没写十元就擅自猜一个十元；
- 为 multi 自动编造 primary/secondary 职责；
- 用百分比、weight、ratio 表示多符号；
- 把未实现模块用语言模型自由发挥伪装成 runtime 已实现；
- 修改 L1/L2 canonical、十元信息卡、准度卡、正式关系卡或行为证据正本。

---

## 2｜启动读取顺序

每次首次进入该聊天工作流时，按当前 main 读取：

1. `09-给674（我）用的库/09-方法论与工作流/五行轴角色生成器/README_应用映射层.md`
2. `.../数据/trigger_registry_v0.1.json`
3. `.../数据/chat_intent_registry_v0.1.json`
4. 当前 machine mapping JSON
5. `.../实现/trigger_compiler_v0.1.js`
6. 当前 generator core runtime
7. 当前 session state（若有）

十元 token 只允许从 current trigger registry / current canonical 校验。历史提示不能覆盖仓库 current main。

---

## 3｜聊天的两类入口

### A. 新生成请求

用户明确给出十元触发：

```text
zn少女
来个 zn 少女，科幻
给我一个 xz 少女
做一个 zx+zn 少女
```

处理：

```text
抽取 canonical trigger
→ 其余自然语言拆为 subject / genre_context / control intent
→ 调 trigger compiler
→ 得 resolved_request
→ 调 runtime
```

例：

```text
用户：来个 zn 少女，科幻，锁世界观

chat intent:
  generate_new
canonical trigger:
  zn少女
context:
  genre_context = 科幻
post action:
  lock_modules = [世界观]
```

### B. 会话续接请求

用户不重复十元，但引用当前角色：

```text
这个世界观别动，只换头发
继续上一版
换个道具
改成无向量模式
这个名词不要，结构别动
```

只有 session state 已存在时才能续接。

若不存在活动生成状态，返回：

```text
CHAT_NO_ACTIVE_SESSION
```

不得从聊天历史模糊猜测一个不存在的 runtime state。

---

## 4｜会话状态

聊天 session 至少保存：

```json
{
  "active_raw_trigger": "zn少女",
  "active_subject": "少女",
  "canonical_symbols": ["zn"],
  "mode": "single",
  "genre_context": "科幻",
  "seed": "74",
  "nonce": 0,
  "locked_modules": ["世界观"],
  "last_output": {},
  "roles": null,
  "parser_version": "trigger-parser-v0.1",
  "mapping_version": "世界观_机器映射_v0.1"
}
```

会话状态是运行控制，不是理论正本，不写入 canonical。

### 锁定

```text
“世界观别动”
“锁衣服”
“这个脸保持”
```

转换为 `locked_modules`。

### 局部重抽

```text
“只换发型”
“道具再抽一次”
“世界观和衣服都不动，只换脸”
```

转换为：

```text
reroll_modules = [目标模块]
nonce += 1
```

所有 locked 模块必须完整继承 previous output。

如果目标模块尚未实现，返回：

```text
CHAT_NOT_IMPLEMENTED
```

而不是直接自由生成。

---

## 5｜single / multi / graph 聊天语法

### single

一个 canonical symbol：

```text
zn少女
xz 少女
x并z少女
```

自动进入 `single`。

### multi

显式两个及以上 symbol：

```text
zx+zn少女
x+z少女
```

但聊天层不能只凭符号直接运行。

必须取得同模块职责：

```text
primary:
  symbol: zx
  responsibility: 决定世界中的方向接口如何被公开争夺

secondary:
  symbol: zn
  responsibility: 约束争夺后仍不可自动让渡的内部原则
  relation_source: 用户显式指定 / 已有应用层关系规则
```

如果用户只说：

```text
zx+zn少女
```

而没有可用角色职责来源，返回：

```text
CHAT_MULTI_RESPONSIBILITY_REQUIRED
```

可以解释缺少什么，但不得用“70% zx + 30% zn”代替。

### graph

用户说：

```text
无向量
关系图模式
graph模式
```

则输出节点、关系和 path。

禁止输出：

```text
zn = 0.8
zx 70%
强zn / 弱zx
```

---

## 6｜表面词只做 context

以下词可以影响题材、气质或下游具体候选：

```text
可爱
偶像
红色
骑士
贫穷
科幻
校园
忧郁
```

但它们永远不能决定：

```text
canonical_symbols
```

例：

```text
“可爱偶像少女”
```

若没有活动 session，也没有显式十元，返回：

```text
CHAT_NEEDS_CANONICAL_SYMBOL
```

而不是猜 `zn`、`z` 或任何其他十元。

若用户说：

```text
“zn 可爱偶像少女”
```

则：

```text
symbol = zn
subject/context = 可爱偶像少女
```

十元来自 `zn`，不是来自“可爱/偶像”。

---

## 7｜模块别名

模块自然语言别名读取 `chat_intent_registry_v0.1.json`。

最低支持：

```text
世界/设定 → 世界观
衣服/穿搭 → 服装
头发/刘海 → 发型
脸/外貌 → 身体/脸
物件/装备 → 道具
职业/工作/动作 → 身份/行为
恋爱/朋友/家庭关系 → 关系
人生/成长/结局 → 一生
画面/空间 → 构图
名词/具体物/载体 → 具象名词
```

无法唯一解析时返回 `CHAT_UNKNOWN_MODULE` 或 `CHAT_AMBIGUOUS_COMMAND`。

---

## 8｜聊天响应格式

正常情况下优先给用户可读结果，同时保留机器层摘要。

最低结构：

```text
【当前请求】
zn 少女｜科幻｜single

【状态】
世界观：已生成 / 已锁定
服装：NOT_IMPLEMENTED
发型：NOT_IMPLEMENTED
...

【结构链】
symbol
→ sub_semantic / changed_variable
→ relation_shape
→ module_grammar
→ concrete_candidate
→ genre_translation

【会话控制】
locked_modules
seed / nonce
parser_version
mapping_version
```

用户只说“只换头发”时，不重复解释整套理论，只回报变化与保持项。

---

## 9｜失败必须显式

聊天层接受并保留下列失败状态：

```text
ERROR_UNKNOWN_TOKEN
ERROR_AMBIGUOUS_TOKEN
ERROR_EMPTY_SUBJECT
BLOCKED_MULTI_RESPONSIBILITY_REQUIRED
DATA_BLOCKED_MAPPING_MISSING
NOT_IMPLEMENTED
CHAT_NEEDS_CANONICAL_SYMBOL
CHAT_NO_ACTIVE_SESSION
CHAT_UNKNOWN_MODULE
CHAT_MULTI_RESPONSIBILITY_REQUIRED
CHAT_DATA_BLOCKED
CHAT_NOT_IMPLEMENTED
CHAT_AMBIGUOUS_COMMAND
```

原则：

```text
缺数据 ≠ 允许聊天模型自由补全
缺职责 ≠ 允许百分比混合
未实现 ≠ 可以写一个看起来像实现的答案
```

---

## 10｜v0.1 最小验收样本

必须至少正确处理：

```text
1. “zn少女” → new / single / zn
2. “来个 ZN 少女，科幻” → zn + genre_context=科幻
3. “x并z少女” → 单一 x并z，不拆分
4. “x+z少女” → multi，并等待职责来源
5. “可爱偶像少女” → CHAT_NEEDS_CANONICAL_SYMBOL（无 session 时）
6. 已有 zn session 后“这个世界观别动” → lock 世界观
7. 已有 session 后“只换头发” → reroll 发型；若未实现则 CHAT_NOT_IMPLEMENTED
8. “改成无向量模式” → graph，不产生 weight/percent
9. “这个名词不要，结构别动” → 只允许重抽 concrete candidate，不改 structure_id
10. 无活动 session 时“继续上一版” → CHAT_NO_ACTIVE_SESSION
```

---

## 11｜下一阶段

v0.1 只建立聊天协议与状态约束。

下一步按顺序：

```text
chat_intent parser 可执行代码
→ session state runtime adapter
→ 50+ 聊天回归样本
→ 与 trigger_compiler / generator_core 联调
→ 再考虑聊天 UI / 快捷按钮
```

聊天 Skill 的成熟度不得高于底层 generator runtime。底层模块 `NOT_IMPLEMENTED` 时，聊天层同样必须诚实显示未实现。
