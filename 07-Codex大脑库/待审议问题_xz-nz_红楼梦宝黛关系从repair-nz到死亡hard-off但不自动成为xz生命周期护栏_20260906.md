---
type: ten-yuan-axis-boundary-research
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-locked
criterion_version: water-axis-boundary-v1-current-canonical_20260904
authority_level: L4
may_override_canonical: false
created: 2026-09-06
updated: 2026-09-06
source_pool: 四大名著
source_priority_compliance: true
work: 红楼梦（程甲本）
characters: [贾宝玉, 林黛玉]
chapters: [第三十回, 第九十八回]
research_slot: lifecycle-hard-off-does-not-imply-xz
related_control:
  - 07-Codex大脑库/待审议问题_xz-nz_红楼梦宝黛冲突回返pure-nz正例_20260905.md
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
  - 01-十元系统/03-十元准度卡/xz_准度卡_v0.3.md
  - 01-十元系统/03-十元准度卡/nz_准度卡_v0.1.md
sources:
  - https://zh.wikisource.org/zh-hans/紅樓夢（程甲本）/三十
  - https://zh.wikisource.org/zh-hans/紅樓夢（程甲本）/九十八
---

# xz ↔ nz 水轴待审议问题｜《红楼梦》宝黛关系：repair nz 可在后期 hard-OFF，但 hard-OFF 不自动生成 xz

## 0｜current canonical

只服从 latest L1 v1.6：

```text
水＝阳水 xz ↔ 阴水 nz
主题领域＝命运
广义变量＝可逆性与对象特异回返空间
xz：持续收窄
nz：保存、恢复或重建
```

本文件只做 L4 边界压力测试，不修改 L1/L2、信息卡、准度卡或正式关系卡。木轴、火轴只迁移 current-window / same-object-layer / nearest-neighbor / removal / reverse / third-factor-freeze / lifecycle 方法，不迁移理论结论。

## 1｜高信息增益问题

同一对象特异关系已经在早期窗口 evidence-locked 为 stable `nz=true`；若后来对象本人死亡、现实 bilateral reentry 从非零直接变成零，能否据此把后期窗口自动判成 `xz=true`？

本轮答案：**不能。**

本轮要锁的不是新的普通案例，而是 lifecycle 边界：

```text
stable nz ON
→ reality condition changed
→ stable nz hard-OFF

不等于

xz automatically ON
```

## 2｜阶段 A：第三十回 repair-nz 已被独立锁定

已有 control 已证明：第二十九至三十回宝黛发生真实冲突、暂时分离，宝玉随后现实上门请求重接；黛玉起初拒门但最终现实允许进入、回应、递帕，并恢复共同接近。凤姐到场前二人已经自行完成修复。

因此阶段 A 不重复记 control，只继承既有判定：

```yaml
stage_A:
  object: 宝玉↔黛玉对象特异关系
  changed_variable: bilateral reentry / repair capacity
  current_nz: true
  current_xz: false
  maturity: evidence-locked
```

## 3｜阶段 B：第九十八回发生 reality-level hard-off

### trigger

黛玉死亡，宝玉随后得知死亡事实。

### actor / object

- actor：贾宝玉 / 林黛玉；
- object：宝玉↔黛玉原对象特异关系；
- object_layer：原双方在现实人际层的 bilateral reentry / repair eligibility；
- changed_variable：原双方是否仍存在现实可调用的重新进入、回应、修复位置。

### action / observable result

第九十八回中，宝玉在尚不知道黛玉已死时仍要求去看黛玉，甚至提出两人若都病死可以同处停放，表明其主观回返意图仍存在。宝钗随后明确告诉宝玉黛玉已经死亡。宝玉得知后企图在梦境/阴司中寻访黛玉，却被告知现实意义上的寻访不可按原方式完成；醒后他确认黛玉已死，并进入“真正无可奈何”的状态。

关键 distinction：

```text
subjective desire to return = remains
legacy / memory interface = remains
original bilateral real-world reentry eligibility = 0
```

因此 stable `nz` 在原现实关系层 hard-OFF。

## 4｜为什么这不是自动 xz

current `xz` 不能由“最终不可回返”或“对象死亡”单点倒推。

本窗口若只看第九十八回死亡后的关系层：

- 有一个 hard terminal reality change：对象死亡；
- 但没有证明多个现实关系路径在此前 current window 内被逐步、可观察地持续关闭；
- 没有证明不同替代路径在同一对象层不断汇向一个预先取得结构支配力的终点；
- 没有 `n>1 → 1 → 0` 的完整 relevant-path-set exhaustion audit；
- “死亡已经发生”是终止事实，不等于“死亡终点此前持续牵引并规定不同现实路径”。

所以：

```text
current_nz = false_as_stable_endpoint
current_xz = not established by hard-off alone
strict_xz_nz = false
```

## 5｜same actor / same object / lifecycle

这是同一组人物、同一对象特异关系跨阶段最小差异：

```text
阶段 A：冲突后仍有 bilateral reality reentry
→ nz ON

阶段 B：对象死亡后原 bilateral reality reentry 不再存在
→ nz OFF
```

changed variable 没换成婚配制度、家族处置或宝玉个人记忆；始终测原双方现实关系的可回返/修复资格。

因此本轮可以锁 `nz ON→OFF` lifecycle，但不能锁 `nz→xz` transition。

## 6｜nearest-neighbor

### 悲伤 / 爱情 / 主题
只能解释体验强度，不能直接判十元。

### `z`
“死亡事实被告知”是强节点式状态确认，但一次终止节点不能替代 xz 的 trajectory evidence。

### `x`
家族隐瞒信息、婚配安排与对宝玉行动的控制属于别的对象层；不能倒灌为本关系层 xz。

### legacy relation residue
宝玉仍思念、仍想寻找、仍保留对象特异记忆，说明 relation residue 很强；但 residue ≠ stable bilateral nz。

## 7｜removal test

拿掉爱情、悲剧情绪、金玉良缘、婚礼、宝玉昏厥、梦境宗教解释，只保留：

```text
同一对象特异关系早期已现实成立并可冲突后修复
＋ 后期对象本人死亡
＋ 单方回返愿望仍存在
＋ 原对象本人不再能现实回应、重入、修复
```

仍可推出：`stable nz ON→OFF`。

但仍不能推出 current `xz=true`，因为缺失 path narrowing / convergence 的 trajectory 证据。

## 8｜reverse test

### 对 nz
若黛玉不是死亡，而只是现实分离，之后仍可重新回应、见面并修复，则 stable `nz` 不应 hard-OFF。

### 对 xz
若后期窗口能够独立证明：死亡/永久分离终点提前取得结构地位，多条现实接触、婚配、迁移、治疗或其他 relevant paths 被逐步关闭，且改走其他同层路径仍汇向同一终点，则 `xz` 才可上升。

“终点最终发生”不能替代上述过程。

## 9｜third-factor freeze

冻结：

- 宝玉对黛玉的感情强度；
- 宝钗婚姻；
- 贾母/王夫人的安排；
- 梦境中的阴司/太虚幻境解释；
- 作者预示或读者已知结局；
- 黛玉病弱主题。

这些因素可以解释情绪、信息与事件背景，但不能替代原现实关系层的 bilateral reentry test，也不能自动生成 current xz trajectory。

## 10｜判定

```yaml
sample_type: lifecycle-boundary
subtype: stable-nz-hard-off-does-not-imply-xz
criterion_version: water-axis-boundary-v1-current-canonical_20260904
source_pool: 四大名著
work: 红楼梦（程甲本）
actors: [贾宝玉, 林黛玉]
same_actor_pair: true
same_object_layer_across_stages: true
same_changed_variable_across_stages: true
stage_A_nz: true
stage_B_nz: false_as_stable_endpoint
stage_B_xz: not_established_by_hard_off_alone
cooccurrence: false
dynamic: true
strict_xz_nz: false
maturity: evidence-locked
fact_confidence: 99
classification_confidence: 98
increment:
  lifecycle_controls: 1
  independent_works: 0
note: same work already counted; this is a new lifecycle mechanism, not a new independent work
```

## 11｜锁定边界

> **nz 的 stable endpoint 可以因为 reality condition 的硬变化而从 ON 直接变 OFF；但“回返空间已经归零”只描述 nz 端失效，不自动证明 xz 端成立。**

> **state absence ≠ opposite-pole presence。** 同轴两端是反向操作，不是简单布尔互补。`nz=false` 不能直接推 `xz=true`；`xz` 仍需独立通过终点前置、路径持续收窄、汇流与临界逼近等 current 门。

## 12｜统计纪律与下一缺口

- 本轮来自四大名著，符合采样优先级；
- 新增的是 `1 lifecycle control`，不是新 independent work；
- 不增加 pure xz / pure nz / co-occurrence / strict 计数；
- 不修改已锁第三十回 pure-nz 正控；
- 不把死亡主题当 xz shortcut。

下一轮最高价值缺口：继续四大名著优先，寻找同一对象层、同一 changed variable 上 `xz=true` 与 `nz=true` 都能独立通过 reality test 的同窗口样本；若找不到，则优先寻找更强的 `nz ON→OFF→ON` 或 `xz OFF→ON→OFF` 可逆 lifecycle 正控，以测试两端状态迁移是否真正独立。