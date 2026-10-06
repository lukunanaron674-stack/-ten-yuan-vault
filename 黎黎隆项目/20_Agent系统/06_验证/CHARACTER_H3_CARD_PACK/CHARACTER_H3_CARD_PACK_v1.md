# CHARACTER_H3_CARD_PACK v1

source_task: Linear 674-257  
scope: H04 only  
status: **PASS**

| character | card | gate | next |
|---|---|---|---|
| H04 旧门看守人 | v1 | CHARACTER_CARD_READY=PASS | 674-258 WORKER 装配 |

本包只证明“角色认知正本可供生产包装配”，不代表 H3 已可渲染。  
最终 H3 放行仍需 674-258 输出 `production_gate=READY_FOR_H3`。

## Files
- `H04/card.md`
- `H04/card.json`
- `H04/source_map.json`
- `H04/validation.json`

## 核心约束
- H04 为 cross_region；旧青桶是历史视觉桶，不等于青色世界。
- 年龄/精确体型继续 UNKNOWN。
- 最新真图视觉冻结覆盖旧 STAGING 的“深色面帘”候选。
- H3 不得再从散乱头像/整张四宫格自行猜角色。
