---
type: ten-yuan-fire-axis-x-scope-dynamic-control
authority_level: L4
knowledge_status: evidence-locked
status: current-evidence
axis: fire
pair: zn-x
work: Alien (1979)
actor: Ellen Ripley
stage: Nostromo emergency destruct activation → override-expiry threshold → irreversible countdown
sample_type: P2 x-scope dynamic contraction / time-lock revocability transition
criterion_version: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 99
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
x_scope_boundary_guard_increment: false
protected_range_increment: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
updated: 2026-09-01
---

# zn↔x 火轴边界压力测试｜Alien：同一 revoke permission 被时间锁关闭

## 0｜结论

本轮新增一种此前 current dynamic-transition 列表中没有单独锁定的 `x-scope` 收窄机制：

> **time-lock revocability contraction**：主体对同一对象/过程的撤销权限在明确 current window 内真实存在，但经过预先定义的不可逆时间阈值后，同一 permission 自动关闭；主体身份、title、object 与外部上级均可不变。

最小结构：

```text
阶段A：destruct 已启动
+ same actor Ripley
+ same object Nostromo emergency destruct process
+ override/revoke permission = true

↓ five-minute override deadline expires

阶段B：same actor
+ same object
+ override/revoke permission = false
+ self-destruct execution continues irreversibly
```

这不是 `x overall off`。这是同一对象上的 **revocability / veto permission 随时间门收窄**。

## 1｜事实链

电影中 Ripley 启动 Nostromo emergency destruct system 后，系统明确宣布：

- 飞船将在 T-minus ten minutes 自毁；
- override automatic detonation 的选项将在 T-minus five minutes 失效；
- 后续持续提示三分钟、一分钟；
- 阈值到达后明确宣布 override procedure 已过期；
- Ripley 随即恢复 cooling unit 并请求 Mother 停止，但 Mother 只回答飞船仍将在五分钟后自动自毁。

因此作品本身直接给出一条可观察的 permission lifecycle：

```text
activation
→ temporary revoke window exists
→ explicit deadline
→ revoke window expires
→ same process becomes non-revocable
```

主要事实来源：
- transcript: https://transcripts.simpleremix.com/script.php/alien-1979-KU8
- timed dialogue / Blu-ray quote context: https://movie-sounds.org/sci-fi/alien-1979/4876
- activation + five-minute override window: https://movie-sounds.org/sci-fi/alien-1979/4874

## 2｜x 权限结构固定拆分

```yaml
actor: Ellen Ripley
object: Nostromo emergency destruct process

permission_type:
  confirmed_stage_A:
    - invoke/start self-destruct
    - override/revoke automatic detonation within allowed window
  confirmed_stage_B:
    - no longer able to override/revoke after deadline
  not_inferred:
    - ultimate ownership of Nostromo
    - unrestricted ship-wide disposition

scope:
  stage_A: emergency destruct process + temporary override interface
  stage_B: emergency destruct process remains active; override interface closed

term:
  destruct_total_countdown: ten minutes
  revocation_window: first five minutes after activation

revocability:
  stage_A: true
  stage_B: false

return_obligation: N/A

same-layer_pre-effect_veto:
  stage_A: Ripley can still invoke the system-provided override procedure
  stage_B: no current same-layer override remains available to Ripley

global_override:
  no external human superior insertion shown at the transition
  system time-lock becomes binding after threshold

ultimate_title:
  irrelevant / not used for x judgment

decision_structure:
  activation: unilateral by Ripley
  cancellation_stage_A: unilateral system-authorized override available
  cancellation_stage_B: unilateral cancellation unavailable

consultation_structure: none required
final_decision_structure:
  stage_A: destruction remains revocable
  stage_B: destruction execution becomes effectively committed

execution_structure:
  Mother / Nostromo automation executes countdown after activation

co-decision_nodes: none demonstrated for the tested revoke interface

source_native_status_label: unchanged / irrelevant
scope_transition: revocable → non-revocable on same process
permission_type_transition: revoke=true → revoke=false
transition_trigger: five-minute system time-lock expiry
independent_execution_nodes: ship automation continues after revoke expiry
```

## 3｜对象层 / current window

对象层固定为：

> `Nostromo emergency destruct process`。

不是 Ripley 的职位、整艘船的所有权，也不是“她最后能不能活下来”。

current window 固定为：

> 自毁启动后十分钟倒计时内，尤其 override 有效的前五分钟与过期后的后五分钟。

因此前后阶段满足：

```text
same actor
same object
same process
same immediate crisis
same permission type being tested
```

只有 **time threshold** 改变。

## 4｜关键压力

最硬证据不是 Ripley “想取消却失败”，而是系统在启动时就预告该 override 的有效期限，并在阈值后明确宣布 permission 已过期。

所以不能用心理、操作失误或 Alien 干扰来解释 permission 本身的变化。

Alien 的出现只解释 Ripley 为什么浪费了取消时间；它不解释为什么过线后权限关闭。关闭机制来自系统自己的 time-lock。

## 5｜最近邻排除

### 5.1 不等于 Fantasia 的 start ≠ stop

Fantasia 锁的是静态 permission asymmetry：

```text
start=true
stop=false
```

本轮是同一 `revoke/override` permission 自身发生动态迁移：

```text
revoke=true
→ deadline
→ revoke=false
```

因此不是旧攻击换皮。

### 5.2 不等于 Dumbledore external superior override insertion

Dumbledore 案由外部上级规则节点插入导致 scope 收窄。

本轮没有新 superior、owner、co-decision node 或 title 变化：

> 收窄由对象内部预置的 **time-lock / irreversibility threshold** 触发。

### 5.3 不等于 Doc Ock endogenous competing-execution-node insertion

Doc Ock 是对象内部 AI 新增独立执行与反向影响节点。

Alien 本轮没有新竞争主体产生；变化的是 **原本存在的 revoke interface 到期失效**。

因此新机制应单独命名：

`time-lock revocability contraction`。

## 6｜拿掉测试

### 拿掉时间阈值

若 override permission 没有五分钟期限，Ripley 在恢复 cooling unit 后仍应能够继续完成 cancellation。

实际作品明确说 override 已过期，且系统继续执行，因此 deadline 是解释 `revoke x` 收缩的必要变量。

### 拿掉 title / identity

不需要引用 Ripley 是 warrant officer、最后幸存者或临时最高人员。只看实际界面与系统反馈就能判断：

```text
前五分钟可撤销
后五分钟不可撤销
```

所以不是身份倒推。

## 7｜反向测试

如果阈值过后 Ripley 仍能用同一 procedure 成功终止 self-destruct，则只能判倒计时提示是紧迫性信息，不能判 revoke permission 收缩。

电影恰好给出相反的现实 effect-test：

```text
override expired
+ cooling restored
+ Ripley请求停止
→ self-destruct continues
```

因此 stage_B 的 `revoke=false` 是现实验证，不是名义推断。

## 8｜第三因素冻结

冻结以下因素，不用于直接判 `x`：

- Ripley 的船员身份；
- 她是否勇敢；
- Alien 的威胁本身；
- Mother 的“人格”解释；
- Weyland-Yutani 的公司控制；
- 最终 Nostromo 是否爆炸；
- Ripley 是否逃生成功。

唯一被测变量是：

> 同一 destruct process 上，Ripley 的 `override/revoke` permission 是否在 time threshold 前后真实变化。

答案：是。

## 9｜zn / strict-v2

本轮不锁 `zn`。

Ripley 启动自毁与试图取消分别受到生存、Alien 风险、逃生路线变化等即时压力驱动；没有必要为了本轮 x-scope 机制额外制造一个 ≥95 的不可让渡原则。

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
```

strict-v2 verified positive 保持 0。

## 10｜成熟度与统计

事实置信：99。
分类置信：99。
知识成熟度：`evidence-locked`。

current registry 在本轮启动时仍登记：

```yaml
x_scope_dynamic_transition_controls: 8
x_scope_dynamic_transition_works: 6
```

但 latest main 已包含尚未同步进 registry 的 Doc Ock 新 dynamic control：

```text
8 / 6
+ Doc Ock endogenous competing-execution-node insertion = 9 / 7
+ Alien time-lock revocability contraction = 10 / 8
```

因此本轮 evidence-layer 统计变化：

```yaml
x_scope_dynamic_transition_controls: +1
x_scope_dynamic_transition_works: +1
x_scope_boundary_guards: +0
protected_range: +0
strict_verified_positive: +0
strict_deferred: +0
strict_precondition: +0
```

《Alien》此前未进入 current dynamic-transition independent-work 集合，可真实计 `work +1`。

## 11｜本轮锁定的新方法句

> **revocability 是 current `x` 的独立维度；同一 actor、同一 object、同一 title 下，预置 time-lock 可以让同一 revoke permission 从 true 自动收缩为 false。**

进一步写成：

```text
permission existence
≠ permission persistence across time

current x
必须记录 term + revocability + irreversible threshold
```

## 12｜下一轮高信息增益方向

不再收第二个“过期后按钮失效”的换皮案例。

优先找它的镜像：

```text
同人物 + 同对象 + 同 permission
阶段A：不可撤销 / 无 veto
↓ 真实 unlock / cooling-off / credential / threshold node
阶段B：首次获得 revoke / veto permission
```

或者：

```text
shared execution
→ 某一执行节点在真实阶段退出
→ title/ownership 不变
→ unilateral execution 首次成立
```

这两类都比继续堆普通 expansion/contraction 更有信息增益。
