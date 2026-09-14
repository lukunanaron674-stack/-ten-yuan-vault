---
type: ten-yuan-water-axis-method-card
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-backed-structural-candidate
authority_level: L4
may_override_canonical: false
version: v0.1
created: 2026-09-14
updated: 2026-09-14
research_slot: recurring-reentry-window-vs-terminal-grace-window
canonical_change_required: false
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
evidence_refs:
  - 07-Codex大脑库/方法卡_xz-nz水轴_0到1合格路径不自动等于nz主动重建_v0.1_20260912.md
  - 07-Codex大脑库/方法卡_xz-nz水轴_same-scope双PASS自动审计_趋势与残余回返分账_v0.1_20260913.md
  - 07-Codex大脑库/方法卡_xz-nz水轴_对象改名迁移不自动中断nz_关系身份连续门_v0.1_20260914.md
---

# xz ↔ nz 水轴｜周期重开窗口不等于最后宽限窗口：时间制度连续性门 v0.1

## 0｜本轮只解决一个问题

现有水轴已经知道：

```text
path_exists != stable nz
qualified_path 0->1 != automatic relational restoration
```

但仍缺一个时间制度层的区分：

```text
当前窗口可回返
```

可能来自两种完全不同的结构：

```text
A. recurring window：本轮错过后，未来仍按稳定规则再次开放
B. terminal grace window：这是最后一次宽限，倒计时结束后永久关闭
```

两者当前都可能满足 `path_set > 0`，若解释器只看“现在有路”，会把 terminal grace 错判成 stable nz；若只看“窗口会关闭”，又会把 recurring window 错判成 xz。

本轮新增：

```text
WATER-REENTRY-WINDOW-RECURRENCE-GATE-v0.1
WATER-TERMINAL-GRACE-COUNTDOWN-GATE-v0.1
WATER-TEMPORAL-RIGHT-CONTINUITY-LEDGER-v0.1
```

核心式：

```text
current reentry path > 0
+ future recurrence guaranteed by standing rule
→ nz-compatible recurrent return space
```

```text
current reentry path > 0
+ this is the final admissible window
+ after deadline qualified path_set -> 0 permanently
→ current nz residual may coexist with xz future-governed closure
→ same-scope temporal SPLIT_IR / dual-audit required
```

---

## 1｜完整 IR

```yaml
actor:
  returning_side: 创作者A
  counterpart: 制作组B
  scheduler_or_gatekeeper: 平台C

object:
  relation_R: A↔B的原对象特异合作关系

object_layer:
  tested: bilateral_reentry_and_repair_space_of_relation_R

current_window:
  A已现实退出R
  -> C按制度开放回返窗口
  -> A可申请
  -> B可接受/拒绝
  -> 检查窗口关闭后未来是否还会再次开放

changed_variable:
  temporal_right_continuity:
    S0_recurring: future_windows_guaranteed_by_standing_rule
    S1_terminal: current_window_is_final_and_nonrenewable

relation_source:
  S0_recurring:
    每季度第一个工作周开放回返
    本轮未申请不消灭未来资格
    未来窗口不依赖单一中心临时恩准
  S1_terminal:
    当前为最后一次宽限
    截止后旧关系永久封存
    不存在下一窗口、申诉或等价对象特异回返路径

relation_shape:
  S0_recurring:
    CLOSED_NOW -> SCHEDULED_OPEN -> CLOSED_NOW -> SCHEDULED_OPEN ...
  S1_terminal:
    OPEN_NOW -> deadline -> PERMANENTLY_CLOSED

decision_right:
  A:
    may_apply_or_decline: true
  B:
    may_accept_or_refuse: true
  C:
    S0_recurring:
      executes_standing_schedule: true
      discretionary_cancellation_of_future_windows: false
    S1_terminal:
      executes_final_deadline: true
      can_create_new_window_after_deadline: false

path_set:
  S0_recurring:
    current_window_path: 1_when_open
    future_rule_bound_windows: nonzero
  S1_terminal:
    current_window_path: 1
    post_deadline_qualified_path: 0

reentry_right:
  S0_recurring:
    object_specific_right_persists_across_closed_intervals: true
    bilateral_accept_refuse: true
    post_return_repair: available
  S1_terminal:
    right_exercisable_now: true
    right_survives_deadline: false
    bilateral_accept_refuse_now: true
    post_return_repair_if_entered_before_deadline: available

future_endpoint:
  S0_recurring:
    no_terminal_closure_encoded
  S1_terminal:
    permanent_zero_return_space_after_deadline

reality_anchor:
  - R曾现实成立
  - A已现实退出
  - 当前窗口是否真实可执行
  - B是否保有自由接受/拒绝
  - 窗口关闭后是否存在规则保证的下一次开放
  - 下一窗口是否依赖临时恩准
  - 当前窗口是否被明示为final/nonrenewable
  - 截止后qualified path_set是否永久归零
  - 回返后是否仍可继续原关系修复
```

---

## 2｜两端判定与置信度

### S0｜周期性重开

```text
nz(relation_R): PASS / stable candidate 0.97
xz(relation_R): FAIL / not evidenced 0.95
```

理由不是“今天窗口开着”，而是：

```text
object-specific reentry right
persists across temporarily closed intervals
```

临时关闭是调度，不是返回空间结构性消失。

### S1｜最后宽限窗口

当前时点：

```text
nz residual/reentry evidence: PASS 0.94
```

趋势与未来终点：

```text
xz future-governed closure candidate: PASS 0.98
```

整体不得压成 pure nz 或 pure xz：

```text
same object + same broad window
BUT different temporal predicate
→ WATER_TEMPORAL_SPLIT_IR
```

即：

```text
NOW: return path still callable
FUTURE: endpoint already fixes permanent closure
```

这正是“残余回返”与“终点前置收窄”可同时真实存在的情况。

---

## 3｜nearest-neighbor 最小差异对

冻结：A、B、R、当前开放窗口、申请程序、双方接受/拒绝权、修复能力、窗口长度。

只改变：

```text
future_window_recurrence
```

### Pair A｜周期开放

```text
本周窗口关闭
但章程保证下季度同样开放
错过本周不会消灭未来回返资格
```

判定：

```text
nz PASS 0.97
xz FAIL 0.95
```

### Pair B｜最后宽限

```text
本周窗口完全相同
但公告明确：周五后永久封存，无下一窗口、无申诉、无替代回返路径
```

判定：

```text
current nz residual PASS 0.94
xz future closure PASS 0.98
→ temporal SPLIT_IR
```

最小翻转变量：

```text
future_rule_bound_recurrence: true -> false
terminal_nonrenewable_deadline: false -> true
```

---

## 4｜removal

### Removal A｜删除当前可执行回返

保留最终永久截止，但当前也已经没有任何现实路径：

```text
nz residual -> FAIL
xz -> remains candidate
```

### Removal B｜删除 final/nonrenewable

保留当前截止日期，但制度同时保证下一轮窗口：

```text
xz evidence -> sharply weakens / FAIL
nz recurrent right remains
```

说明“有截止日期”本身不等于 xz。

### Removal C｜删除双方性

即使未来周期开放，只允许A提交但B没有现实接受/拒绝位置：

```text
stable nz -> FAIL / insufficient
```

周期不是双方性的替代品。

---

## 5｜reverse

```text
RECURRING_NZ
-> mark current window as final/nonrenewable
-> post-deadline path_set permanently 0
-> TEMPORAL_SPLIT_IR (current nz residual + xz future closure)
```

反向：

```text
terminal grace
-> add rule-bound future recurrence independent of ad hoc permission
-> xz closure evidence collapses
-> recurrent nz returns
```

若只增加“负责人未来可能特批一次”：

```text
possible mercy != rule-bound recurrence
```

不得恢复 stable nz。

---

## 6｜freeze-third-factor

冻结：

```text
人物身份
职业
情绪
合作质量
冲突原因
窗口长度
申请难度
历史胜负
是否最终真的回来
```

只改变：

```text
future_window_recurrence
terminality
post_deadline_path_set
```

---

## 7｜跨域正反控制

### 正控A｜制度

协会每年固定两次恢复会员窗口，退出者在任何未来窗口都可再次申请，协会对端保有接受/拒绝权：

```text
nz candidate PASS
```

### 正控B｜工程

服务节点离开集群后，每日维护窗都可按固定协议重新加入；错过今天不影响明天的资格：

```text
nz candidate PASS
```

### 正控C｜创作流程

画师退出项目后，制作组每月固定开放一次原镜头返组窗口，旧任务和修复位置持续保留：

```text
nz candidate PASS
```

### 反控A｜最后迁移宽限

旧仓库将在周五永久冻结；周五前原成员可最后一次恢复身份，之后旧关系不可再进入：

```text
current nz residual + xz future closure
→ temporal SPLIT_IR
```

### 反控B｜名字叫“每月申请”，实际每次都要负责人临时批准是否开放

```text
calendar label != recurrent right
stable nz insufficient
```

---

## 8｜失败类型

```text
FAILURE_CURRENT_PATH_AS_STABLE_NZ
```

看到当前可回返就忽略窗口终局性。

```text
FAILURE_ANY_DEADLINE_AS_XZ
```

看到截止日期就忽略未来按规则周期重开。

```text
FAILURE_CALENDAR_RECURRENCE_AS_REAL_RIGHT
```

只因“每月/每年”字样就判周期回返，未验证下一窗口是否由规则保证。

```text
FAILURE_TERMINAL_GRACE_ERASES_CURRENT_NZ_RESIDUAL
```

因为未来会永久关闭，就抹掉当前真实双方回返位置。

```text
FAILURE_ADHOC_EXCEPTION_AS_RECURRENT_REENTRY_RIGHT
```

把未来可能特批当成稳定返回空间。

---

## 9｜执行 guard

```text
WATER-REENTRY-WINDOW-RECURRENCE-GATE-v0.1
```

要求检查：

```text
is_next_window_rule_bound?
is_current_miss_nonterminal?
does_object_specific_right_survive_closed_interval?
```

```text
WATER-TERMINAL-GRACE-COUNTDOWN-GATE-v0.1
```

要求检查：

```text
is_this_window_explicitly_final?
post_deadline_qualified_path_set == 0?
future_endpoint == permanent_closure?
```

```text
WATER-TEMPORAL-RIGHT-CONTINUITY-LEDGER-v0.1
```

建议字段：

```yaml
reentry_window:
  current_open: true|false
  current_executable: true|false
  next_window_rule_bound: true|false
  recurrence_source: standing_rule|ad_hoc_permission|none
  current_miss_terminal: true|false
  final_nonrenewable_deadline: true|false
  post_deadline_path_set: integer|unknown
  bilateral_accept_refuse: true|false
  repair_capacity_after_reentry: true|false
```

---

## 10｜最小判别式

```text
IF
  current path may close periodically
  AND future equivalent object-specific windows are guaranteed by standing rule
  AND missing this window does not terminate future reentry right
  AND bilateral accept/refuse + repair capacity persist
THEN
  nz recurrent return-space candidate
  do not infer xz from the local deadline
```

```text
IF
  current object-specific path is real now
  AND current window is final/nonrenewable
  AND deadline pre-fixes post-deadline path_set = 0
  AND no equivalent reentry/reopen path survives
THEN
  current nz residual may PASS
  AND xz future-governed closure may PASS
  => temporal SPLIT_IR / same-scope dual audit
```

---

## 11｜权限与收敛

本卡仅 L4 research-only：

```text
may_override_canonical: false
canonical_change_required: false
```

不修改 L1/L2、十元信息卡、准度卡、正式关系卡或 behavior evidence。

本轮新增信息增益：

```text
temporal right continuity
```

它补足了现有 `path_exists` 与 `same-scope dual pass` 之间的执行缺口：

```text
recurrent closed interval != structural closure
terminal grace window != stable return space
```

成熟度建议：

```text
water axis: 9.95 -> 9.97 / 10
AXIS_MATURE_CANDIDATE = true
```

后续只有在真实解释器回归出现：

- 周期窗口被误判 xz；
- 最后宽限被误判 pure nz；
- ad-hoc 特批被误判稳定回返；
- 当前 nz residual 与未来 xz closure 被互相抹除；

时才值得再次重开这一缺口。
