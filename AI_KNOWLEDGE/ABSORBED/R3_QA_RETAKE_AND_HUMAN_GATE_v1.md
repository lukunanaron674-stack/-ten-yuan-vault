---
type: absorbed-knowledge-pack
pack_id: ABS-R3
status: ROUTED
version: v1.0
updated: 2026-10-08
source_master: AI_KNOWLEDGE/EXTERNAL_KNOWLEDGE_MASTER_v2_20261008.md
scope: [qa, evaluation, retake, uncertainty, user-gate]
primary_linear: 674-173
secondary_linear: [674-289, 674-286, 674-106]
---

# ABS-R3｜QA / Retake / USER Gate

## DIRECT｜正式吸收

### M26 QUALITY IS A VECTOR
质量拆维：visual/frame、temporal、identity、task adherence、physics/logic、aesthetic等；禁止一个总分覆盖全部。

### M27 DETECT → LOCALIZE → EXPLAIN
机器QA输出至少包含：
- failure_family
- time_range
- region（适用时）
- severity
- confidence
- explanation / evidence pointer

### M29 TASK SUCCESS ≠ VISUAL QUALITY
“好看”“完成任务”“保持未修改区”“时间稳定”分别判定。

### M31 MACHINE REVIEW ≠ FINAL APPROVAL
机器可预审、定位、比较、建议返工。
最终审美 / canonical PASS 绑定USER与确切version。

## SPLIT｜只吸收结构

### M28 UNCERTAINTY IS A STATE
**吸收**：PASS / FAIL之外允许 AMBIGUOUS / LOW_CONFIDENCE / NEEDS_HUMAN。
**待验证**：pairwise相对绝对评分在当前USER判断中的真实优势。

### M30 LOCAL REPAIR + REGRESSION
**吸收**：局部修复后必须同时检查：
1. 原failure是否修复；
2. 正确区是否保持；
3. 是否出现新failure。
**待验证**：Local Retake相对Full Rerender的真实成本/成功率。

## 标准 QA Packet

```yaml
version_id:
review_scope:
quality_axes:
failure_candidates:
  - failure_family:
    time_range:
    region:
    severity:
    confidence:
decision: PASS | FAIL | AMBIGUOUS | NEEDS_HUMAN
repair_scope: SYSTEMIC | MODULAR | INSTANCE
preserve_constraints:
regression_checks:
reviewer:
evidence_refs:
```

## USER门

必须进入USER：
- canonical主参考/主版本选择；
- 审美与风格裁决；
- 高影响且机器不确定；
- 机器与已有USER规则冲突。

不应消耗USER：
- 可客观机器验证的hash/version/state/provenance；
- 已冻结技术规则的机械检查；
- 明确技术失败且自动拦截能力已单独验证后允许的具体failure_family。

## 路由

- USER视觉审核入口：674-173
- H3视频证据：674-289
- 返工/生产闭环：674-286
- 证据方法/benchmark：674-106

## 状态

KNOWLEDGE_READY = true
ROUTED = true
CONNECTED = false
VERIFIED = false
AI_LEARNED = false
