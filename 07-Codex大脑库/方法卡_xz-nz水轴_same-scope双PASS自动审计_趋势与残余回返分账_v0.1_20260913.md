---
type: ten-yuan-water-axis-method-card
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-backed-structural-candidate
authority_level: L4
may_override_canonical: false
version: v0.1
created: 2026-09-13
updated: 2026-09-13
research_slot: same-scope-water-contradiction-audit
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
evidence_refs:
  - 07-Codex大脑库/方法卡_xz-nz水轴_持续路径减少不自动等于endpoint-governed-xz_v0.1_20260912.md
  - 07-Codex大脑库/方法卡_xz-nz水轴_0到1合格路径不自动等于nz主动重建_v0.1_20260912.md
  - 07-Codex大脑库/方法卡_xz-nz水轴_跨对象层可共存但同scope不得互相倒灌_SPLIT_IR_v0.1_20260913.md
canonical_change_required: false
---

# xz ↔ nz 水轴方法卡｜same-scope 双 PASS 自动审计：趋势与残余回返分账 v0.1

## 0｜本轮只解决一个问题

上一轮已经锁定：跨 `object/object_layer` 的 xz 与 nz 可以并存，必须 SPLIT_IR；同 scope 出现强 xz + 强 nz 时不能直接双 PASS，必须触发 contradiction audit。

本轮只解决这个自动审计门：

> 当 actor、object、object_layer、current_window 都相同，解释器同时抽到强 xz 与强 nz，什么时候是真矛盾，什么时候其实是“回返空间正在收窄，但对象特异回返能力仍非零”的合法同窗并存？

本轮结论：

```text
same_scope(xz, nz)
+ dual_high_confidence
≠ automatic contradiction

必须先区分：
xz = direction / trend of return-space change over a window
nz = object-specific executable return-state or restoration operation
```

因此新增：

```text
WATER-SAME-SCOPE-DUAL-PASS-AUDIT-v0.1
WATER-TREND-VS-STATE-LEDGER-v0.1
WATER-TOTAL-CLOSURE-CONFLICT-GATE-v0.1
```

注意：本卡仅为 L4 research-only，不改 L1/L2 canonical。

---

## 1｜current criterion 不变

```text
水 = xz ↔ nz
核心变量 = 可逆性与对象特异回返空间

xz:
  终点前置
  + 未来规定方向
  + 真实路径/选择持续收窄
  + 路径汇流
  + 临界逼近

nz:
  对象特异
  + 曾现实成立
  + 现实退出自由
  + 现实返回路径
  + 回来后的重新接近/修复
  + 双方性
```

本轮只增加机器审计解释：

```text
xz evidence is primarily window-dynamic:
  return_space(t2) < return_space(t1)
  under endpoint governance

nz evidence is primarily relationally executable:
  object_specific_return_path(t) > 0
  or a real restoration operation reopens it
```

因此：

```text
shrinking != zero
nonzero != nonshrinking
```

同 scope 下两端可能在一个有限时间窗里同时有证据，但必须核对其是否在同一个 path target 上真正互斥。

---

## 2｜完整 IR

本轮采用“同一维修合作关系在合同终止日前仍可重入，但重入窗口持续被终止日压缩”的结构化压力测试，不冒充外部事实。

```yaml
actor:
  side_A: 设备运营方A
  side_B: 维修团队B

object:
  relation_R: A↔B的对象特异维修合作关系

object_layer:
  tested: bilateral_reentry_and_repair_space_of_R

current_window:
  T0_three_reentry_windows
  -> T1_two_reentry_windows
  -> T2_one_reentry_window
  -> T3_contract_cutoff

changed_variable:
  xz:
    - independent_real_reentry_windows
    - endpoint_binding_strength
    - convergence_to_contract_cutoff
    - distance_to_cutoff
  nz:
    - current_object_specific_reentry_right
    - bilateral_accept_refuse_right
    - executable_repair_path

relation_source:
  xz:
    fixed_contract_cutoff_progressively_invalidates_reentry_windows
  nz:
    standing_bilateral_reentry_clause_keeps_at_least_one_real_reentry_path_executable_before_cutoff

relation_shape:
  xz:
    3 real return windows
    -> 2
    -> 1
    -> cutoff
  nz:
    exit
    -> qualified reentry request
    -> bilateral acceptance
    -> repair/resume relation_R

decision_right:
  A:
    may accept_or_refuse_each_reentry_request
  B:
    may request_or_decline_reentry
  neither_side:
    can_cancel_contract_cutoff_unilaterally

path_set:
  T0:
    - reentry_window_w1
    - reentry_window_w2
    - reentry_window_w3
  T1:
    - reentry_window_w2
    - reentry_window_w3
  T2:
    - reentry_window_w3
  T3:
    - none

reentry_right:
  T0: bilateral_nonzero
  T1: bilateral_nonzero
  T2: bilateral_nonzero_but_last_window
  T3: zero_after_cutoff

future_endpoint:
  binding_contract_cutoff_T3

reality_anchor:
  - 合作关系R曾真实成立
  - T0/T1/T2双方仍保有真实接受或拒绝重入的权利
  - T0到T2至少存在一条可执行重入并修复R的路径
  - T0到T2可用重入窗口按同一合同终止点持续减少
  - 换重入窗口不能绕开T3合同终止
  - T3之后对象特异重入资格真实归零
```

### 判定

在 `T0→T2` 的共同 current_window 内：

```text
xz:
  PASS / strong candidate 0.97
  because endpoint-governed return space is shrinking

nz:
  PASS / active residual-return candidate 0.96
  because object-specific bilateral reentry remains executable

same-scope dual-pass audit:
  PASS 0.99

result:
  DUAL_ACTIVE_SAME_SCOPE
  not automatic contradiction
```

但在 `T3 after cutoff`：

```text
xz endpoint realized / closure state
nz OFF
```

如果解释器在 T3 仍给 stable nz PASS，则触发真实冲突。

---

## 3｜本轮的新结构变量：trend 与 state 分账

最小分账：

```text
xz asks:
  is the realistic return space being progressively reduced
  by a structurally prior future endpoint?

nz asks:
  does this same object-specific relation still have
  at least one real bilateral executable return/repair path now?
```

因此以下组合合法：

```text
return_space_count: 3 -> 2 -> 1
object_specific_executable_path_now: 1

=> xz trend ON
=> nz residual return ON
```

而以下组合不合法：

```text
xz claim:
  all realistic return paths are already closed in the tested window

nz claim:
  a realistic executable return path exists in the same tested window

=> SAME_SCOPE_HARD_CONTRADICTION
```

所以真正的冲突门不是：

```text
xz && nz
```

而是：

```text
XZ_TOTAL_CLOSURE_CLAIM
&&
NZ_NONZERO_EXECUTABLE_RETURN_CLAIM
&&
SAME_SCOPE
&&
SAME_WINDOW
&&
SAME_RETURN_TARGET
```

---

## 4｜自动触发条件

解释器只要满足以下条件，就必须进入 `WATER-SAME-SCOPE-DUAL-PASS-AUDIT-v0.1`：

```text
same(actor or relational actor-set)
AND same(object token)
AND same(object_layer)
AND overlapping(current_window)
AND xz_confidence >= 0.80
AND nz_confidence >= 0.80
```

进入审计后强制检查：

```text
1. xz_mode:
   narrowing_process
   OR total_closure

2. nz_mode:
   residual_preservation
   OR restoration
   OR stable_reentry

3. return_target_same:
   yes/no

4. temporal_overlap:
   full/partial/none

5. nz_path_bypasses_endpoint:
   yes/no

6. xz_claim_all_paths_closed_now:
   yes/no
```

输出只能落入以下状态之一：

```text
A. DUAL_ACTIVE_SAME_SCOPE
B. TEMPORAL_SPLIT
C. PATH_CLASS_SPLIT
D. XZ_DOWNGRADE_FALSE_POSITIVE
E. NZ_DOWNGRADE_FALSE_POSITIVE
F. SAME_SCOPE_HARD_CONTRADICTION
```

禁止直接输出未经审计的：

```text
xz PASS + nz PASS + done
```

---

## 5｜nearest-neighbor 最小差异对

冻结：

```text
同一A/B
同一关系R
同一合同终止日T3
同样的历史合作
同样的重入规则
同样的情绪、身份、成败
```

只改一个变量：

```text
T2最后一条重入路径在当前窗口内是否仍真实可执行
```

### Pair A｜最后一条仍可执行

```text
return path count:
3 -> 2 -> 1

last path executable at T2:
yes
```

判定：

```text
xz PASS 0.97
nz PASS 0.96
DUAL_ACTIVE_SAME_SCOPE 0.98
```

### Pair B｜最后一条已经失效

```text
return path count:
3 -> 2 -> 0

last path executable at T2:
no
```

判定：

```text
xz PASS 0.99
nz FAIL 0.99
```

最小差异不是“有没有终点”，而是：

```text
current_executable_object_specific_return > 0 ?
```

---

## 6｜removal tests

### Removal A｜拿掉 endpoint governance

保留：

```text
3 -> 2 -> 1
```

但路径消失原因互不相关，没有共同未来终点。

结果：

```text
xz -> insufficient
nz may remain PASS
```

说明残余 nz 不能给 xz 补 endpoint。

### Removal B｜拿掉 bilateral reentry

保留完整：

```text
endpoint
+ narrowing
+ convergence
+ critical approach
```

但最后一条所谓“返回路径”只有单方申请，没有对方现实回应/接受位置。

结果：

```text
xz remains PASS
nz -> FAIL
```

### Removal C｜拿掉 repair/relation reentry，只保留 contact

双方还能聊天、留消息、纪念旧合作，但不能回到原关系位置。

结果：

```text
nz -> FAIL
xz unchanged
```

---

## 7｜reverse tests

### Reverse A｜把残余 nz 路径变成真正 endpoint escape

若 T2 的最后一条路径不只是“在终止日前回来一次”，而是能够：

```text
长期绕开T3 cutoff
+ 保持同一关系R持续可重入
```

则：

```text
path convergence breaks
endpoint governance weakens
xz confidence must decrease
```

不能一边承认真实长期逃逸，一边仍把 xz 锁成 0.99。

### Reverse B｜把 narrowing 改成 restoration

如果：

```text
1 -> 2 -> 3
```

且新增路径真实、对象特异、双方可执行、修复能力上升：

```text
nz restoration strengthens
xz must decrease/OFF
```

### Reverse C｜窗口跨过 cutoff

把 current_window 从：

```text
T0 -> T2
```

改成：

```text
T3 after cutoff
```

若所有重入权已经现实归零：

```text
nz cannot inherit earlier-window evidence
```

这防止历史 nz 倒灌当前状态。

---

## 8｜freeze-third-factor

冻结以下因素：

```text
关系亲密度
职业身份
故事悲剧感
危险性
合同名称
剩余天数带来的情绪压力
最终是否真的重入成功
谁更想回来
谁最后获利
```

只看：

```text
endpoint prior status
real path count and independence
same return target
bilateral reentry right
repairability
current window
whether endpoint can be bypassed
```

---

## 9｜positive controls

### P1｜制度域

某资格将在固定日期彻底失效；失效日前申诉窗口从3次缩到1次，但最后一次仍可真实恢复同一资格。

```text
xz trend: PASS
nz residual return: PASS
DUAL_ACTIVE_SAME_SCOPE
```

### P2｜工程域

旧系统将在固定 cutoff 退役；退役前 rollback 机制从三类降为一类，但最后一类仍可真实回到同一旧生产状态。

若最后一类不能绕过 cutoff：

```text
xz process PASS
nz-like object-specific executable return PASS within pre-cutoff window
```

必须审计时间窗，不能互相抹除。

### P3｜创作流程域

项目将在 final-lock 日锁版；锁版前返工入口从多条缩成最后一条，导演与画师仍能通过该入口真实恢复同一镜头版本并继续修复。

```text
pre-lock:
  xz narrowing + nz residual return
post-lock:
  nz OFF if no reopen right remains
```

---

## 10｜negative controls

### N1｜高危险但路径未减少

```text
危险越来越高
但三条真实回返路径均稳定
```

不得判 xz。

### N2｜记忆仍在但关系回返为0

```text
仍记得对方
仍保留旧记录
但双方没有现实重入与修复位置
```

不得判 nz。

### N3｜最后一条路径只是按钮

UI 仍显示“恢复”，但后端已失效。

不得用表面 path count 锁 nz。

### N4｜最后一条路径真实逃逸 endpoint

若它能永久绕过终点，就必须降低 xz；不能把“仍有一条真正逃逸路”描述成完整路径汇流。

---

## 11｜失败类型

新增：

```text
SAME_SCOPE_DUAL_PASS_AS_AUTOMATIC_CONTRADICTION
同scope双PASS直接判冲突，不审计趋势与状态

XZ_NARROWING_AS_ZERO_RETURN
把“持续收窄”偷换成“当前已经无路可回”

NZ_NONZERO_AS_NONSHRINKING
因为仍有一条可回，就错误认为回返空间没有收窄

HISTORICAL_NZ_BACKFILLS_POST_CUTOFF
把cutoff前的nz证据倒灌cutoff后

ENDPOINT_ESCAPE_IGNORED
存在真正绕开终点的长期路径，却仍锁强xz

BUTTON_PATH_AS_EXECUTABLE_NZ
表面入口仍在就判nz

TOTAL_CLOSURE_AND_NONZERO_RETURN_DOUBLE_PASS
同scope同window既说全部关闭，又说真实回返非零，还不触发硬冲突

WINDOW_OVERLAP_IGNORED
不解析current_window重叠程度就让两端互相抹除
```

---

## 12｜解释器最小伪规则

```text
if same_scope(xz, nz) and xz.conf >= .80 and nz.conf >= .80:
    audit = true

    if xz.mode == total_closure and nz.executable_return_now > 0:
        result = SAME_SCOPE_HARD_CONTRADICTION

    elif xz.mode == narrowing_process and nz.executable_return_now > 0:
        if nz.path_bypasses_endpoint_long_term:
            result = XZ_DOWNGRADE_FALSE_POSITIVE
        else:
            result = DUAL_ACTIVE_SAME_SCOPE

    elif windows_do_not_materially_overlap:
        result = TEMPORAL_SPLIT

    else:
        inspect_path_class_and_evidence_quality()
```

这是审计门，不是新 canonical。

---

## 13｜与上一轮水轴卡的关系

上一轮：

```text
不同 object/object_layer
→ xz + nz 可并存
→ MUST SPLIT_IR
```

本轮补：

```text
相同 object/object_layer/current_window
→ 双高置信度必须自动审计
→ 但不自动等于矛盾
```

真正硬冲突只有在：

```text
同scope
+ 同window
+ 同return target
+ xz声称当前已 total closure
+ nz声称当前仍有 executable return
```

因此水轴的机器判别从“二端互斥按钮”推进成：

```text
scope ledger
+ window ledger
+ trend ledger
+ executable-return ledger
+ endpoint-bypass audit
```

---

## 14｜成熟度与收敛

本轮前：

```text
water maturity = 9.8 / 10
AXIS_MATURE_CANDIDATE = true
```

本轮后建议：

```text
water maturity = 9.9 / 10
AXIS_MATURE_CANDIDATE = true
```

原因：本轮闭合了上一张卡明确留下的 `same-scope contradiction audit 自动触发条件`，并形成新机制：

```text
xz narrowing trend
!=
current zero-return state
```

此后水轴不再优先继续概念采矿。除非解释器真实回归出现新 failure，否则下一阶段应转向：

```text
把本卡规则写入解释器测试样例
跑真实自然语言抽取
记录 false positive / false negative
```

无真实 failure 时：NO FURTHER WATER RESEARCH COMMIT。
