---
type: ten-yuan-water-axis-method-card
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-backed-candidate
criterion_version: water-axis-boundary-v1-current-canonical_20260904
authority_level: L4
may_override_canonical: false
version: v0.1
created: 2026-09-11
updated: 2026-09-11
research_slot: return-space-closure-gate
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
evidence_refs:
  - 07-Codex大脑库/待审议问题_xz-nz_形式关系断裂与现实回返资格分离边界_20260905.md
  - 07-Codex大脑库/待审议问题_xz-nz_红楼梦宝黛关系从repair-nz到死亡hard-off但不自动成为xz生命周期护栏_20260906.md
---

# xz ↔ nz 水轴方法卡｜return-space closure gate v0.1

## 0｜权限与目的

本卡是 L4 研究方法卡，只把已 evidence-locked 的水轴边界压缩成可重复审计的 `return-space closure gate`；不得覆盖 L1/L2 canonical，也不修改 `xz/nz` 信息卡。

current canonical：

```text
水＝阳水 xz ↔ 阴水 nz
广义变量＝可逆性与对象特异回返空间
xz：持续收窄
nz：保存、恢复或重建
```

本卡只回答一个最小问题：

> **什么时候可以把某个对象特异关系/位置的现实回返空间判成真正 CLOSED，而不是“某一个入口刚好关了”？**

---

## 1｜证据来源与已锁边界

### 控制 A｜《西游记》第一次逐出

已锁：

```text
formal_relationship_status = OFF
current_joint_execution = OFF
```

但孙悟空一侧仍保留对象特异救援接口，团队成员后来能够现实调用并恢复共同运行。

所以：

> **形式关系 OFF ≠ return-space OFF。**

### 控制 B｜《西游记》第二次逐出

已锁：

```text
direct_reentry_request = actually_attempted
direct_reentry_consent = explicitly_denied
```

但观音等既有 mediation path 仍现实可调用，后续真悟空重新归队。

所以：

> **direct reentry denied ≠ complete relevant return-path set exhausted。**

### 控制 C｜《红楼梦》宝黛后期

早期 repair-nz 已通过 reality test；黛玉死亡后，原双方现实人际层的 bilateral reentry / response / repair eligibility 归零。

所以：

> **reality-level hard change 可以让 stable nz 真正 hard-OFF。**

但同时已锁：

> **nz hard-OFF ≠ xz 自动 ON。**

三条控制共同要求：`return-space CLOSED` 必须是现实结构判定，不是称谓、情绪、一次拒绝或剧情结局词。

---

## 2｜强制 IR 字段

每次判断 `return-space` 至少建立以下 IR；缺关键字段时只能 `NEEDS_MORE_STRUCTURE`：

```yaml
actor:
object:
object_layer:
current_window:
changed_variable: object_specific_real_reentry_space

path_set:
  direct_reentry:
  mediated_reentry:
  alternate_reentry:

reentry_right:
  actor_side:
  counterpart_side:
  institutional_or_group_side:

bilaterality:
repair_capacity:
future_endpoint:
reality_anchor:
```

字段解释：

- `object_layer`：必须固定同一对象特异关系/位置，禁止把名义身份、任务路线、战斗逃生、记忆余温混成一层；
- `path_set`：枚举当前窗口内**相关且现实可调用**的回返路径，不要求世界上所有理论可能性；
- `reentry_right`：谁仍拥有现实提出、接受、裁定或促成重入的资格；
- `bilaterality`：关系端是否仍属于双方，而非只剩单方愿望；
- `repair_capacity`：回来之后是否还能重新接近、回应或恢复共同节奏；
- `future_endpoint`：只为独立审计 xz 使用，不得因为 nz 关闭而自动填成 xz；
- `reality_anchor`：必须指向现实发生/现实可调用事实，不能只写愿望、称谓、回忆或作者预示。

---

## 3｜return-space 三态，而非二态

为避免把“一个入口关闭”误写成“全部不可回返”，L4 研究层统一使用三态：

```text
OPEN
NARROW_NONZERO
CLOSED
```

### 3.1 OPEN

至少一个对象特异的现实回返路径稳定可调用，且重入资格与修复能力没有被关键现实条件否决。

典型：

```text
曾真实共同成立
＋ 分离/冲突后仍能现实联系
＋ 双方或有效中介能完成重入
＋ 回来后能恢复接近/共同运行
```

### 3.2 NARROW_NONZERO

一个或多个主要入口关闭，但 relevant path set 尚未穷尽。

典型：

```text
formal OFF
但 team rescue path 仍在
```

或：

```text
direct reentry denied
但 established mediation path 仍可调用
```

这时：

```text
stable_bilateral_nz 可能下降/暂停
return-space 仍不得写 CLOSED
```

### 3.3 CLOSED

只有当同一 object layer / current window 下，同时通过以下 closure gate，才可判现实回返空间关闭：

```text
G1 relevant callable path set ≈ 0
AND
G2 reentry eligibility ≈ 0
AND
G3 bilateral reality response ≈ 0
AND
G4 repair / renewed-approach capacity ≈ 0
AND
G5 closure has a reality anchor
```

其中任何一项仅靠称谓、情绪、一次拒绝或单方判断成立，都不能通过。

---

## 4｜closure gate v0.1

### G1｜relevant callable path-set exhaustion

问题：

> 当前窗口内，与该对象特异关系真正相关的 direct / mediated / alternate reentry path 是否都已现实失效？

通过例：

- 原对象死亡，原现实关系层不存在任何能让双方重新回应的路径；
- 所有既有现实中介均无权、拒绝或客观无法介入；
- 后续即使见面也只能建立新关系，不能恢复原关系。

失败例：

- 只关闭 direct path；
- 只撤销名义身份；
- 团队/机构/中介仍可现实促成同一关系重入。

### G2｜reentry eligibility exhaustion

问题：

> 即便找到接口，原双方是否仍有现实资格重新进入同一关系位置？

需要区分：

```text
contact_possible
≠
reentry_eligible
```

能见面、能通信、能纪念，并不等于还能回到原关系位置。

### G3｜bilateral reality-response exhaustion

问题：

> 原对象双方是否仍可能互相回应并共同承认该重入？

单方持续想回去不够。

```text
subjective_return_desire = 1
bilateral_returnability = 0
```

仍可判 stable nz 关闭。

### G4｜repair-capacity exhaustion

问题：

> 就算发生接触，是否仍可能重新接近、修复或恢复共同节奏？

如果只能恢复名义壳、职位壳、纪念壳，而不能恢复现实关系功能，则不算有效 repair path。

### G5｜reality anchor

closure 必须由现实结构锚定，例如：

- 对象本人死亡；
- 原关系位置制度上被不可逆取消，且所有合法/现实重入机制归零；
- 既有现实中介失效，且不存在替代接口；
- 双方明确且现实持续撤销重新进入资格，同时没有可调用的修复机制。

禁止仅凭：

- “绝交”一句话；
- 一次拒绝；
- 悲伤/愤怒；
- 分手/离职/逐出等标签；
- 作者说这是命运；
- 观众知道以后不会复合。

---

## 5｜最小判别式

L4 当前最短可执行式：

```text
return-space CLOSED
=
relevant path-set exhausted
＋ reentry eligibility exhausted
＋ bilateral response unavailable
＋ repair capacity unavailable
＋ reality anchor
```

反之：

```text
任一现实可调用的对象特异 reentry path 仍在
→ 至少 NARROW_NONZERO
→ 不得写 complete CLOSED
```

注意：

```text
stable nz = false/suspended
```

与：

```text
return-space = CLOSED
```

不是同一个字段。

前者可能仅因当前 bilateral consent 失败；后者要求完整相关回返空间通过 closure gate。

---

## 6｜与 xz 的严格分账

`return-space CLOSED` 只说明 `nz` 端的回返/修复空间失效，不自动生成 `xz`。

### xz 仍必须独立建立

```yaml
future_endpoint:
path_set:
option_closure_sequence:
path_convergence:
critical_approach:
reality_anchor:
```

至少要证明：

```text
未来终点提前取得结构地位
→ 当前方向被它规定
→ 多个真实选择/路径持续减少
→ 改路仍汇向同一终点或窄区间
→ 临界持续逼近
```

所以：

```text
nz CLOSED
≠ xz TRUE

xz TRUE
≠ nz CLOSED
```

同轴是相反方向操作，不是布尔补码。

---

## 7｜nearest-neighbor 护栏

### formal shell / x并z

称谓、身份壳、合同壳被撤销，最多说明 formal shell 变化；必须继续查现实 reentry path。

### z

一次“拒绝你回来”的最终裁定节点可以很强，但单节点不等于 relevant path-set exhaustion。

### x

强制驱离、控制接触、扣留资源能关闭当前接触，却未必关闭全部未来回返资格。

### nx

沿团队成员、中介或制度既有通道推进可以是 nx 行为；不能因为“通过中介回来”就把中介动作本身算 nz。本卡只审计这条中介是否构成现实 reentry path。

### legacy residue

记忆、遗愿、旧物、纪念与单方持续牵挂可以对象特异，但没有 bilateral reality path 时不保 stable nz。

---

## 8｜removal test

判断 closure 时依次拿掉：

1. 分手/逐出/离职/死亡等标签词；
2. 悲伤、愤怒、忠诚、爱情；
3. 名义称谓与社会角色；
4. 作者预示与读者已知结局；
5. 单方“我还想回去”。

若剩余现实结构仍能证明：

```text
path_set ≈ 0
＋ reentry_right ≈ 0
＋ bilateral response ≈ 0
＋ repair_capacity ≈ 0
```

才保留 CLOSED。

---

## 9｜reverse test

任何 CLOSED 候选都必须反向问：

> 只要增加一个现实、对象特异、可调用且有资格的重入接口，是否会让判定从 CLOSED 降为 NARROW_NONZERO？

若答案是“不会”，说明当前 `path_set` 很可能没有按同一 object layer 正确枚举，或把情绪/主题词误当成 closure。

反向最小变体：

```text
增加一个可现实调用 mediation path
＋ 该节点有资格处理原关系重入
＋ 原双方仍能回应/修复
→ CLOSED 必须下降
```

---

## 10｜第三因素冻结

以下因素只可解释 trigger / pressure / access cost，不可自行生成 closure：

```text
危机
战斗力依赖
经济压力
家族命令
职位变动
舆论
距离
时间经过
第三方挑拨
一次拒绝
```

除非它们真实改变了：

```text
path_set
reentry_right
bilaterality
repair_capacity
```

---

## 11｜机器可读判定模板

```yaml
water_axis_return_space_audit:
  object_layer:
  current_window:
  changed_variable: object_specific_real_reentry_space

  path_set:
    direct_reentry:
      status: open|closed|unknown
      reality_anchor:
    mediated_reentry:
      status: open|closed|unknown
      reality_anchor:
    alternate_reentry:
      status: open|closed|unknown
      reality_anchor:

  reentry_right:
    actor_side: yes|no|contested|unknown
    counterpart_side: yes|no|contested|unknown
    mediation_side: yes|no|not_applicable|unknown

  bilaterality: yes|no|contested|unknown
  repair_capacity: yes|no|contested|unknown
  future_endpoint: present|absent|unknown
  reality_anchor:

  return_space_state: OPEN|NARROW_NONZERO|CLOSED|NEEDS_MORE_STRUCTURE
  stable_nz: true|false|suspended|candidate|unknown
  current_xz: true|false|candidate|not_tested
  strict_xz_nz: false|candidate|true
```

---

## 12｜当前成熟度与下一测试

本卡由 3 个已锁机制支撑：

```text
formal OFF but path nonzero
＋ direct denied but mediated path nonzero
＋ reality hard-change causing genuine bilateral hard-OFF
```

因此当前可标：

```yaml
method_maturity: evidence-backed-candidate
confidence_mechanism: 96
```

尚不能升为 canonical，因为仍缺第一份强 `nz ON→OFF→ON` reality-tested positive：

```text
OPEN
→ G1-G5 真通过成为 CLOSED
→ 后来出现新的现实机制
→ 同一原对象层重新 OPEN
→ 原关系而非新关系真正恢复
```

下一断点优先寻找这类强正控；若四大名著仍只有 `NARROW_NONZERO` 假关闭，则停止在同机制重复采样，转 `xz/nz` 同层共现或可逆 lifecycle 的其他高信息控制。
