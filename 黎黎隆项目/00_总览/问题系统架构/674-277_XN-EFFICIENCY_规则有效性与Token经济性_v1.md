# 674-277｜XN-EFFICIENCY｜规则有效性与Token经济性 v1

状态：CANDIDATE_HIGH_CONFIDENCE

## 核心问题
规则不是越多越好。规则本身会产生：
- 认知成本
- token成本
- 检索成本
- 冲突成本
- 维护成本
- 过度约束风险

因此每条 XN 除“是否正确”外，还必须判断“是否值得长期保留和频繁加载”。

## 每条 XN 新增字段
- effect_size: 1–10｜对 Z 的实际作用大小
- token_cost: LOW/MEDIUM/HIGH 或估算字符/Token级
- scope: GLOBAL / Z1 / Z2 / Z3 / LOCAL_CASE
- load_mode: ALWAYS / ON_DEMAND / EVIDENCE_ONLY
- redundancy: 0–1 或 LOW/MEDIUM/HIGH
- conflict_risk: LOW/MEDIUM/HIGH
- keep_value: 1–10
- last_verified_at
- deprecated_by

## 三级加载
### CORE_XN
高作用、低歧义、跨多个Z反复需要。
默认常驻，但必须短写。

### LOCAL_XN
只在对应 Z 被激活时加载。
默认不进入全局上下文。

### EVIDENCE/HISTORY
只在追溯、争议、复验时读取。
默认不注入当前任务上下文。

## 规则经济性判断
优先保留：
- effect_size 高
- token_cost 低
- redundancy 低
- conflict_risk 低
- scope 清晰

优先合并/下沉/删除：
- 低作用 + 高频读取
- 与其他XN高度重复
- 只在单案例成立却被全局加载
- 已被新规则覆盖
- 只描述历史，不直接影响当前决策

## 核心 XN
XN-EFFICIENCY-01：
> XN不是越多越可信；高作用、低冗余、清晰scope、按需加载的XN才值得长期保留。

XN-EFFICIENCY-02：
> 大Z只读取子Z的状态摘要、关键blocker、verified结果和必要索引；只有进入某个小Z时才加载其local XN全文。

XN-EFFICIENCY-03：
> 同义规则只能保留一个canonical核心表达，其他位置改为引用，不重复铺全文。

XN-EFFICIENCY-04：
> 任何新增XN都必须证明“它改变了判断/执行/权限/验证中的至少一项”；否则只记为NOTE/EVIDENCE，不升级为XN。

## 对当前系统的预期作用
- 降低全局上下文长度
- 减少规则互相冲突
- 降低token浪费
- 提升局部XN命中率
- 避免“规则垃圾场”
