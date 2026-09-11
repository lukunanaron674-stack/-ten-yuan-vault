---
type: ten-yuan-water-axis-method-card
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-backed-structural-candidate
criterion_version: water-axis-boundary-v1-current-canonical_20260904
authority_level: L4
may_override_canonical: false
version: v0.1
created: 2026-09-12
updated: 2026-09-12
research_slot: closed-to-reopen-nz-restoration-gate
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
evidence_refs:
  - 07-Codex大脑库/方法卡_xz-nz水轴_return-space-closure-gate_v0.1_20260911.md
  - 07-Codex大脑库/方法卡_xz-nz水轴_narrow-to-closed_transition-gate_v0.1_20260911.md
canonical_change_required: false
---

# xz ↔ nz 水轴方法卡｜CLOSED → REOPEN / nz 恢复门 v0.1

## 0｜本轮只解决一个问题

已有方法卡已经能区分：

```text
OPEN
NARROW_NONZERO
CLOSED
```

并锁定：

```text
nz hard-OFF ≠ xz 自动 ON
```

但仍缺反向生命周期门：

> **一个曾经真正 CLOSED 的对象特异回返空间，后来恢复“联系、称谓、一个接口、一个中介”时，恢复到什么程度才只是 return-space 从 0 变为非零？又恢复到什么程度，才能把 stable nz 重新判 ON？**

本卡只解决这个恢复门；不修改 L1/L2 canonical，不把“重新联系”或“重新加好友”直接判 nz。

---

## 1｜current canonical 锚点

L1 v1.6：

```text
水 = xz ↔ nz
核心变量 = 可逆性与对象特异回返空间
xz = 持续收窄
nz = 保存、恢复或重建
```

nz v2.0 稳定端点要求：

```text
对象特异
＋ 双方关系曾真实成立
＋ 自由退出/重新进入资格
＋ 现实可调用回返路径
＋ 冲突/分离后的重新接近或修复能力
＋ 双方性
```

因此：

```text
contact restored ≠ nz restored
formal status restored ≠ nz restored
interface restored ≠ nz restored
```

---

## 2｜本轮结构化压力测试

本轮使用同一对象特异关系的结构化控制，不冒充外部作品事实。

```yaml
actor:
  side_A: 合作者A
  side_B: 合作者B

object: A↔B 原对象特异合作关系
object_layer: bilateral_real_reentry_and_repair_position

current_window:
  t0_closed: 原合作关系已现实关闭
  t1_contact_only: 恢复联系方式
  t2_qualified_mediation: 恢复一个有资格的中介重入路径
  t3_reentry_and_repair: 双方重新进入并恢复共同处理能力

changed_variable: object_specific_real_reentry_space

relation_source:
  t0: all_relevant_reentry_paths_and_eligibility_exhausted
  t1: communication_channel_restored_only
  t2: qualified_object_specific_reentry_path_restored
  t3: bilateral_reentry_plus_repair_capacity_restored

relation_shape:
  t0: CLOSED
  t1: CONTACT_ONLY
  t2: NARROW_NONZERO_RESTORABLE
  t3: OPEN / STABLE_NZ_REESTABLISHED

# 金轴等其它权利字段只分账，不作为水轴判定来源
decision_right:
  t0: neither_side_can_reenter_original_relation
  t1: either_side_can_contact_but_not_reenter
  t2: mediator_can_process_reentry_request; both_sides_retain_consent
  t3: both_sides_can_accept_exit_reentry_and_repair_without_coercion

path_set:
  t0:
    direct_reentry: 0
    mediated_reentry: 0
    alternate_reentry: 0
  t1:
    contact_channel: 1
    qualified_reentry_path: 0
  t2:
    direct_reentry: 0
    qualified_mediated_reentry: 1
  t3:
    direct_reentry: 1
    qualified_mediated_reentry: 1

reentry_right:
  t0: 0
  t1: 0
  t2: nonzero_bilateral_consent_required
  t3: bilateral_and_exercisable

future_endpoint:
  independent_xz_audit_required
  no_endpoint_inference_from_nz_state

reality_anchor:
  - t0 原合作位置确已不可重新进入，且没有相关中介/替代路径
  - t1 只能发送消息/见面，不能恢复原合作位置
  - t2 中介被现实授权处理原关系重入，双方都可接受或拒绝
  - t3 双方实际重新进入，恢复共同处理、相互回应与冲突修复
```

---

## 3｜四态恢复阶梯

### S0｜CLOSED

```text
qualified_path_set = 0
reentry_eligibility = 0
bilateral_response = 0
repair_capacity = 0
```

判定：

```text
stable nz = OFF
return-space = CLOSED
```

### S1｜CONTACT_ONLY

只恢复：

```text
电话
私信
见面可能
共同群聊
```

但：

```text
reentry_eligibility = 0
qualified_reentry_path = 0
repair_capacity = 0
```

判定：

```text
stable nz = OFF
return-space = CLOSED for tested original relation position
```

注意：通信空间从 0→1，不等于原对象层的关系回返空间从 0→1。

### S2｜NARROW_NONZERO_RESTORABLE

只增加一个真正合格的对象特异路径：

```text
qualified mediation path = 1
＋ 中介现实有资格处理原关系重入
＋ 双方都仍有接受/拒绝资格
＋ 至少存在非零 bilateral response
＋ repair capacity > 0
```

判定：

```text
return-space = NARROW_NONZERO
stable nz = candidate / recovering
```

这里不能仅因为 path_set 从 0→1 就直接写 stable nz ON；要继续检查路径是否只是名义存在，以及双方性、自由性和修复能力是否现实成立。

### S3｜OPEN / STABLE_NZ_REESTABLISHED

在 S2 基础上，至少出现强现实锚点：

```text
对象特异 reentry eligibility 真实可执行
＋ 双方真实回应
＋ 回来后能够重新接近/共同处理
＋ repair capacity 被现实验证
＋ 离开/返回仍是自愿，不靠扣留、威胁、职位或生存依赖强迫
```

判定：

```text
return-space = OPEN
stable nz = ON
```

实际发生一次成功重入并恢复共同节奏，是最强正控；但若现实路径已明确、双方资格与修复能力均可验证，stable nz 不必机械等待下一次戏剧化“真的离开再回来”才成立。

---

## 4｜最小差异对

冻结：

```text
actor A/B
object token
历史共同关系
冲突原因
时间长度
情绪强度
名义称谓
社会身份
```

只改变：

```text
qualified_reentry_eligibility
bilateral_response
repair_capacity
```

### Pair A｜假恢复

```text
可以重新联系
但没有资格回到原关系位置
```

→ stable nz OFF

### Pair B｜真恢复候选

```text
新增一个有资格的对象特异 mediation path
＋ 双方可自由接受/拒绝
＋ 回来后存在真实 repair capacity
```

→ return-space 至少 NARROW_NONZERO
→ stable nz recovering candidate

### Pair C｜稳定恢复

```text
Pair B
＋ 实际重入/共同处理发生
＋ 冲突后恢复相互回应与共同节奏
```

→ stable nz ON

真正的最小开关不是：

```text
能不能联系
```

而是：

```text
该接口是否有资格恢复同一对象特异关系位置
AND 双方是否仍能现实回应
AND 回来后是否还有修复能力
```

---

## 5｜nearest-neighbor

### x并z｜公共/形式接口恢复

重新出现账号、门牌、职位名、公开称谓、合同入口，只能证明接口/壳可能恢复；若它不能让原双方重新进入同一关系位置，不构成 stable nz。

### z｜单点许可

某负责人重新批准“可以接触”，只是裁定权结构；若双方没有现实 reentry eligibility 与 repair capacity，不能借 z 的许可生成 nz。

### xn｜恢复流程

有申请表、仲裁流程、复职步骤，说明流程结构可能存在；若流程不产生对象特异关系重入资格，不能凭“有流程”判 nz。

### n｜重新承载

一方重新接纳并承担对方现实负荷，可能形成 n；但若对方不能自由退出/返回，或关系靠依赖强制维持，不能倒推 nz。

### legacy residue

重新聊天、回忆、纪念、旧物共享，都可能恢复对象特异意义，但不自动恢复 bilateral reentry。

---

## 6｜removal test

依次拿掉：

```text
“复合/复职/和好”标签
重新加好友
重新关注账号
名义称谓恢复
共同照片/纪念物
单方想修复
```

只保留：

```text
qualified reentry path
reentry eligibility
bilateral response
repair capacity
voluntary exit/reentry
```

若仍成立，stable nz 才有资格恢复。

反过来，若拿掉“重新加好友”后整个 nz 证据消失，原判定就是 CONTACT_AS_NZ。

---

## 7｜reverse test

从 S3 stable nz ON 状态只拿掉：

```text
双方重入资格
或
repair capacity
```

即使联系方式、称谓、共同群聊全部保留，也必须下降：

```text
OPEN → NARROW_NONZERO / CLOSED
stable nz ↓
```

从 S1 CONTACT_ONLY 状态只增加：

```text
一个真正有资格的对象特异 mediation path
＋ 双方可回应
＋ repair capacity > 0
```

则必须：

```text
CLOSED → NARROW_NONZERO
```

若判定不变，说明 object_layer 枚举错了。

---

## 8｜freeze-third-factor

冻结以下变量，不得自行生成 nz：

```text
想念强度
悔恨
时间经过
旧身份
职位名称
公众认可
共同财产
共同秘密
危机
经济依赖
照护依赖
第三方撮合意愿
```

只有当它们真实改变：

```text
qualified_path_set
reentry_right
bilaterality
repair_capacity
```

才进入水轴因果链。

---

## 9｜positive / negative controls

### positive control｜稳定 nz 重新建立

```text
旧关系曾真实成立
→ 曾 CLOSED
→ 现实规则/关系结构重新开放对象特异重入资格
→ 双方自由同意
→ 实际重新进入
→ 冲突后的共同处理与可信接近恢复
```

判定：

```text
nz ON
return-space OPEN
```

### negative control 1｜只恢复联系

```text
能聊天
能见面
但不能回到原关系位置
```

→ nz OFF

### negative control 2｜只恢复名义壳

```text
重新挂名成员/伙伴
但实际无共同处理、无相互回应、无修复位置
```

→ nz OFF

### negative control 3｜只有中介愿意帮

```text
中介可联系双方
但一方明确没有重新进入资格或持续拒绝
```

→ qualified bilateral reentry path 不成立
→ stable nz OFF

### negative control 4｜强迫“回来”

```text
关系位置恢复
但退出会受惩罚/失去生存条件
```

→ 自由性失败
→ 优先检查 x / n / z 等结构
→ 不锁 stable nz

---

## 10｜失败类型

```text
CONTACT_AS_NZ
重新联系/见面就判 nz。

FORMAL_REOPEN_AS_NZ
称谓、账号、职位、合同壳恢复就判 nz。

ONE_PATH_EXISTS_AS_STABLE_NZ
只因 path_set 0→1 就跳过 bilaterality / repair audit。

MEDIATOR_INTENT_AS_REENTRY_RIGHT
中介愿意撮合，被误写成中介现实有资格恢复原关系。

UNILATERAL_WILL_AS_BILATERAL_RETURN
单方想回来，被误写成双方回返空间恢复。

COERCED_RETURN_AS_NZ
靠资源、威胁、职位或照护依赖迫使回来，被误写成可信停靠。

NEW_RELATION_AS_OLD_RELATION_RESTORED
双方重新建立了一个新关系，却倒写成原对象层 reentry。

OPEN_INTERFACE_WITHOUT_REPAIR
接口恢复，但回来后无法重新接近/修复，仍误判 stable nz。

XZ_BACKFILL_FROM_RESTORATION
因为 nz 从 OFF→ON，就反向声称此前必然存在 xz；禁止。
```

---

## 11｜最小判别式

L4 当前恢复门：

```text
CLOSED → NARROW_NONZERO
=
qualified object-specific reentry path restored
＋ reentry eligibility > 0
＋ bilateral response > 0
＋ repair capacity > 0
＋ reality anchor
```

稳定 nz 重新 ON：

```text
prior real object-specific relation
＋ voluntary exit/reentry
＋ qualified real return path
＋ bilateral response
＋ credible repair / renewed approach
＋ reality anchor
→ stable nz ON
```

特别锁定：

```text
contact restored
≠ reentry restored

reentry path restored
≠ stable nz automatically restored

nz restored
≠ previous xz proven
```

---

## 12｜对 xz 的独立分账

本轮不因恢复动作直接判 xz 的反面。

```text
nz OFF → ON
```

只说明对象特异回返空间被恢复/重建；它可以成为水轴“恢复方向”证据。

若要说此前存在 current xz，仍必须独立证明：

```text
future endpoint prior
＋ option/path narrowing over time
＋ convergence
＋ critical approach
```

同理，恢复一个 nz path 可能削弱某段 xz 轨迹，但不自动把所有 xz 证据抹掉。

---

## 13｜本轮裁定

```yaml
new_mechanism: true
mechanism: closed_to_reopen_nz_restoration_gate
new_guard: true
minimum_difference_pair_completed: true
new_independent_work: 0
uses_structural_pressure_test: true
canonical_change_required: false
sync_debt_changed: false
l4_only: true

states:
  S0: CLOSED_NZ_OFF
  S1: CONTACT_ONLY_NZ_OFF
  S2: NARROW_NONZERO_NZ_RECOVERING
  S3: OPEN_STABLE_NZ_ON
```

本轮新增的不是作品样本，而是水轴反向生命周期语法：

```text
CLOSED
→ CONTACT_ONLY
→ NARROW_NONZERO_RESTORABLE
→ OPEN / stable nz ON
```

它与此前：

```text
OPEN / nz ON
→ NARROW_NONZERO
→ CLOSED / nz OFF
```

合并后，水轴 return-space 已具备双向状态迁移门。

---

## 14｜下一断点

最高价值下一问题不再重复做“开/关接口”，而应测试：

> **当 return-space 从 CLOSED 恢复到 NARROW_NONZERO 时，是否一定构成 nz 的主动“重建”方向，还是只有在对象特异关系资格与 repair capacity 被真实恢复后才计 nz restoration evidence？**

尤其需要压住：

```text
0 → 1 个接口
```

与：

```text
0 → 1 个可恢复同一关系位置的 qualified path
```

这两个极易混淆的解释器边界。
