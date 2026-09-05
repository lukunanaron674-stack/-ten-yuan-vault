---
type: ten-yuan-fire-axis-state-reconciliation
authority_level: L4
knowledge_status: evidence-locked
status: working-ledger
axis: fire
pair: zn-x
updated: 2026-09-05
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate: current-x-scope-distinction-v1_20260830
  protected_range_gate: protected-range-risk-test-v1_20260831
may_override_canonical: false
fact_confidence: 99
classification_confidence: 99
---

# 状态同步｜zn ↔ x 当前 evidence ledger｜2026-09-05 批量归并

> L4 working ledger，不覆盖 L1/L2 canonical。仓库 current canonical 高于本文件；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

## 0｜current canonical / 门禁

- L1 current：火＝阳火 `zn` ↔ 阴火 `x`；主题领域＝本体。
- strict：`current-layer-specific-anchor-gap-v2_20260829`。
- x-scope：`current-x-scope-distinction-v1_20260830`。
- protected-range：`protected-range-risk-test-v1_20260831`。
- 历史 `x信息量卡v2` frontmatter 的旧 element 映射继续只登记为 canonical 元数据债，不由 L4 修改。

## 1｜current evidence truth

```yaml
strict_v2_verified_positive_controls: 1
strict_v2_verified_positive_works: 1
strict_v2_deferred_former_positive_controls: 3
strict_v2_deferred_former_positive_works: 3
strict_v2_negative_guards: 8
strict_v2_negative_guard_works: 5
strict_precondition_guards: 21
strict_precondition_guard_works: 10
strict_canonical_calibration_controls: 3

x_scope_positive_controls: 4
x_scope_positive_works: 3
x_scope_boundary_guards: 26
x_scope_boundary_guard_works: 21
x_scope_dynamic_transition_controls: 29
x_scope_dynamic_transition_works: 25
x_scope_decision_structure_calibration_controls: 6
x_scope_knowledge_status: pending-review

protected_range_v1_verified_positive_controls: 4
protected_range_v1_verified_positive_works: 4
protected_range_v1_verified_negative_guards: 5
protected_range_v1_verified_negative_guard_works: 5
protected_range_v1_dynamic_controls: 1
protected_range_v1_dynamic_works: 1
protected_range_knowledge_status: pending-review

pending_review_count: 11
```

## 2｜本批吸收 / 状态迁移 / 去重

### 2.1 Defiance｜Tuvia Bielski
strict-v2 首个 verified positive 已锁，维持 `1/1`。只计 strict，不倒灌 x-scope / protected-range。

### 2.2 A Man for All Seasons｜Thomas More
source `b1192cc5e8e2b73f3b8e74f0beb47cb150dbdf61`。

`subject-exclusive authorship / ordinary self-agency ≠ x`。More 的良知 `zn` 可独立成立，但本人对自己签名/宣誓/沉默的作者资格不能后验拼成归属/处分型 x。计 strict precondition：`20/9 → 21/10`；不计 strict negative、x-scope ordinary guard、protected-range。

### 2.3 Hotel Rwanda｜Paul Rusesabagina｜deferred → negative
source `cb6cd5f5203be0e57cec2fdb9e1f4bcb217d4f3b`；状态纠偏 `ff9f260195747afdef400d24dc95d8d3841259a8`。

同一 criterion 下换槽，不新增 control/work：

```text
deferred former positive 4/4 → 3/3
negative guard 7/4 → 8/5
```

Paul 的 subject-specific x 只稳定到酒店内部运营/安置/物资/局部进入协调；Sabena 产权、住客并行外联、警方、军方、外交与联合国节点不能打包成 Paul 的 x。故 `x→zn` 与 `zn→x` 均无法干净锁定，退出 deferred 自动复采池。

### 2.4 The Purge｜James Sandin｜protected-range 新失败镜像
source `8c3d15594e1b3c7a359963deca2912e09130be9b`。

James 重新启用住宅 security boundary 的操作真实生效，但系统已知无法承受 systematic assault，随后真实强攻突破边界。锁：

```text
boundary-state ON / armed / re-enabled
≠ stable protected-range ON
```

该机制区别于 Home Alone 的 partial-defense-effect：这里边界状态部署本身成功，但 risk-test 仍失败。计 protected-range negative：`4/4 → 5/5`；不计 positive/dynamic/x-scope/strict。

### 2.5 x-scope path-set 主体归因护栏｜Deepwater Horizon / Macondo
source `f34f226e7a31e80bd4d59de1187cf63d906eac90`。

锁：`system-level target-effect path set ≠ actor-indexed x execution path set`。人工 EDS、自动 deadman/autoshear、后续外部 ROV 虽都指向封井效果，但不能因为 target effect 相同就倒灌成同一主体的 `x` 路径集合。真正 path-set exhaustion 必须先按 actor 建索引，再审 direct repair、bypass、delegated route、parallel authority、emergency interface、alternate execution node。

该证据是 historical control，只计 x-scope boundary：`24/21 → 25/21`；不新增 independent work，不计 dynamic/strict/protected-range。

### 2.6 x-scope path-set 对象层/执行层护栏｜United Airlines Flight 232
source `2f07be9a238fb0969221e5db33c66dcb9de40957`；realtime sync `a705c197785eb98d1e21e425497280750585865f`。

锁：`same actor + same higher-level target effect ≠ same x execution-object path set`。Flight 232 三套液压系统全部丧失后，正常液压飞控面执行链已归零；但同一机组仍可通过发动机差动推力有限影响飞机整体航迹。若被测 `x` 锁在“正常液压飞控面操纵”，差动推力属于跨 actuator/object layer substitute，不是原 `x` surviving path；若对象提升为“飞机整体航迹控制”，差动推力必须进入 relevant path-set。

故 path exhaustion 除 actor index 外，还必须锁 object layer / actuator layer / target-effect layer。该证据也是 historical control，只计 x-scope boundary：`25/21 → 26/21`；不新增 independent work，不计 dynamic/strict/protected-range。

### 2.7 x-scope current truth

current：`4/3 positive + 26/21 boundary + 29/25 dynamic + 6 decision calibration`。

继续锁：
- transition-blocking x ≠ resultant-state disposition x；
- quantitative cap expansion/contraction 与 permission family 分账；
- enumerated-interface exhaustion ≠ complete relevant path-set exhaustion；
- system-level target-effect path set ≠ actor-indexed x execution path set；
- same actor + same higher-level target effect ≠ same execution-object / actuator-layer path set；
- permission retained ≠ direct execution path retained；
- final-decision topology ≠ execution topology；
- edge-veto retained ≠ downstream disposition already present。

## 3｜strict-v2 current

```text
verified positive 1/1
deferred former positive 3/3
negative guard 8/5
precondition guard 21/10
canonical calibration 3
```

current-window + same-object-layer + relevant current reality anchor 继续有效；禁止恢复 absolute-unique-anchor。第二份 positive 必须尽量跨题材、跨对象机制，不重复 Defiance 救援/庇护营地母型。

## 4｜x-scope current

最少拆：permission_type、scope、quantitative_cap、term、revocability、return_obligation、same-layer veto/global override、ultimate title、consultation/final decision/execution/co-decision topology。

path exhaustion 只有在 direct repair、bypass、delegated route、parallel authority、emergency interface、alternate execution node 等 relevant paths 一并冻结后，才允许写 surviving relevant path count=0。现在再加两道前置门：先按 actor 建索引，再锁 object / actuator / target-effect layer；跨主体或跨 actuator/object layer 的替代路径必须分账，不能为了得到 `0` 而随意排除，也不能为了得到 `>0` 而随意倒灌。

## 5｜protected-range current

```text
positive 4/4
negative 5/5
dynamic 1/1
```

固定分 no-test / failed-test / successful-test。`partial-defense-effect ≠ stable protected-range`；`boundary-state ON ≠ successful risk-test`。普通正向与同机制失败镜像均停止堆量。

## 6｜仍未同步的 L4 文件

- strict 专项仍需核对是否已吸收 Paul `deferred→negative` 与 Thomas More `21/10`；
- x-scope 专项 frontmatter/正文仍明显落后 current `26/21 + 29/25 + 6`，且尚未吸收 Macondo/United 232 两道 path-set 前置护栏；
- protected-range 专项需核对是否已吸收 The Purge negative `5/5`；
- `zn-x火轴研究总纲_20260827.md` 仍明显停在旧 strict/x-scope/protected-range 统计。

这些是状态同步债，不改变 L1/L2 canonical。

## 7｜下一批最高价值

1. 优先全文同步 x-scope 专项与研究总纲到 `26/21 + 29/25 + 6`，并写入 actor-index + object/actuator-layer path-set 门；再核 strict / protected-range 专项是否仍有旧统计。
2. strict 研究只收第二份跨机制 positive 或 deferred 三案出现真实新证据。
3. x-scope 只收真正 path-set exhaustion：同一 actor、同一 object/actuator layer、同一 current window 下先完成 relevant-path completeness audit，再验证 surviving path `n>1 → 1 → 0` 且 target-effect reality-test OFF。
4. protected-range 只收不同 risk-channel/topology 或同边界动态，不再采 `boundary-state ON 但被突破` 换皮案例。