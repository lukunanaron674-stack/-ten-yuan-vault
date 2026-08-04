---
type: ten-yuan-single-relation-card
relation_kind: 生
relation: xn 生 xz
source: xn
target: xz
relation_status: locked-edge-mechanism-revalidated
status: canonical-current-card
version: v0.2
card_schema_version: v1.1
memory_record_version: v1.1
updated: 2026-08-04
relation_table_version: v2.22
primary_hourly_write_target: true
source_information_card: 01-十元系统/【xn信息量卡v2】.md
target_information_card: 01-十元系统/【xz信息量卡v2】.md
source_accuracy_card: 01-十元系统/03-十元准度卡/xn_准度卡_v0.1.md
target_accuracy_card: 01-十元系统/03-十元准度卡/xz_准度卡_v0.3.md
canonical_specialty: 01-十元系统/关系专项/xn生xz_结构把偏离转成临界风险正式机制_20260719.md
---

# xn 生 xz｜单条生卡 v0.2

## 当前锁定机制

> **xn把规则、记录、追踪和处理分布到多个节点；偏差在网络中被持续识别、传递和叠加，原本局部的风险逐渐耦合成整体高压结构，使一个节点故障、越界或触发即可牵动全局，生成xz火药桶。**

```text
分布式规则与节点运行（xn）
→ 偏差被持续记录、传递、叠加
→ 风险跨节点耦合并形成整体蓄积
→ 局部触发可引发全局连锁
→ xz成立
```

## 被改变变量

- 风险累积量；
- 节点间耦合度；
- 局部偏差传播率；
- 触发敏感度；
- 单点故障牵动全局的概率；
- 系统恢复原状的成本。

## 与旧机制的关系

危险可达性、路线减少和时间窗关闭可以是本关系的动态显影，但不再是目标xz的唯一主骨。必须证明xn结构让危险成为“一个点可引爆全局”的整体蓄积。

## 红线

以下不足以成立：

- 普通守规则；
- 单次处罚；
- 只有倒计时文字；
- 一个节点坏了但不会传播；
- 危险来自外部，xn只负责记录；
- 路线减少却没有风险蓄积和连锁触发。

## 固定测试

- **最近邻**：`xn`正常运行、`zx`主动追击、外部灾害、普通程序拥堵；
- **拿掉**：拿掉分布式记录、传递和叠加后，若火药桶仍以同样方式形成，则不支持`xn生xz`；
- **反向**：隔离节点、停止传播、清除累积记录或解除耦合后，整体触发敏感度应下降；
- **第三因素**：外部敌人、资源耗尽、主体自曝、自然灾害、单一恶意触发者。

## 证据门槛

至少证明：

1. 风险不是一次外部注入，而是在xn网络运行中累积；
2. 多节点共同扩大整体压力；
3. 一个局部节点能够触发跨节点连锁；
4. 拿掉xn网络后，xz显著下降；
5. 至少两类不同系统复现同一机制。

## 记忆记录

v0.2根据`xz信息量卡v2.1`重校机制。旧“安全路线持续减少”只保留为可能显影，不再替代火药桶本体。
