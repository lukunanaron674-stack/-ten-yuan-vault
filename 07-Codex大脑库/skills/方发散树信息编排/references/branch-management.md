# branch-management｜分支管理规则 v0.1

## 目标

发散不是无限摊平。每个候选都要有“下一步状态”，但状态不等于理论真伪。

## 状态

### expand
继续展开。

适用：
- 改变主问题关键变量；
- 与现有主路径结构差异明显；
- 存在重要证据冲突；
- 可验证十元边界；
- 是当前结构瓶颈。

### hold
保留但本轮不展开。

适用：结构有效，但当前优先级不高或依赖上游结果。

### merge
与另一节点实质同构，合并显示但保留来源。

必须记录：

```yaml
merged_into: TARGET_ID
merge_reason: ...
source_preserved: true
```

### freeze
当前节点暂时锁定，不允许下游发散改写其已确认结构。

freeze ≠ accepted truth；只是工作流锁。

### archive_candidate
当前不进入主视野，但保留为可恢复历史候选。

archive_candidate ≠ delete。

## next_expand 选择

默认最多 3 条：

1. 主路径瓶颈 1 条；
2. 结构差异最大的替代方向 1 条；
3. 边界/反例价值最高方向 1 条。

若没有足够价值，不为了凑 3 条强行推荐。

## 禁止

- 只按视觉好看程度决定 expand；
- 只按 score 机械排序而无结构理由；
- 把低分直接删除；
- 把 archive_candidate 当作理论否定；
- 用“题材不喜欢”覆盖十元结构判断。
