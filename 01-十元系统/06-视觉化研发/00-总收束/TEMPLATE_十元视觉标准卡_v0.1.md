---
type: ten-yuan-visual-standard-card-template
status: template
version: v0.1
updated: 2026-09-16
---

# 十元视觉标准卡｜TEMPLATE

## 1｜身份

```yaml
ten_yuan: REPLACE_ME
status: research
upstream_canonical: null
last_reviewed: 2026-09-16
```

## 2｜一句话视觉本体

> 只写底层结构，不写颜色、职业、性格、题材。

## 3｜核心视觉变量

```yaml
core_visual_variables:
  - variable_1
  - variable_2
  - variable_3
```

## 4｜构图语法

```yaml
composition_grammar:
  center: null
  boundary: null
  spacing: null
  direction: null
  enclosure: null
  path: null
  endpoint: null
  hierarchy: null
```

## 5｜形体语法

```yaml
shape_language:
  unit_relation: null
  silhouette: null
  mass_distribution: null
  articulation: null
  continuity_vs_separation: null
```

## 6｜动态语法

```yaml
motion_grammar:
  start_state: null
  trigger: null
  transition: null
  blocked_path: null
  opened_path: null
  endpoint: null
```

## 7｜正证据

- 
- 
- 

## 8｜负证据

出现以下情况不得仅凭外观判为本十元：

- 
- 
- 

## 9｜最近邻

| 最近邻 | 最容易混淆处 | 最小差分变量 |
|---|---|---|
| | | |
| | | |

## 10｜禁止捷径

```yaml
forbidden_shortcuts:
  - color
  - occupation
  - facial_expression
  - genre_symbol
  - weapon
  - UI_text
```

补充：

- 

## 11｜跨对象压力测试

| 对象 | 状态 | 结论 |
|---|---|---|
| 角色 | pending | |
| 建筑 | pending | |
| 机器 | pending | |
| 植物群 | pending | |
| 城市 | pending | |
| 房间 | pending | |
| 组织 | pending | |

## 12｜关键三样本

```yaml
positive_sample: null
nearest_sample: null
negative_sample: null
```

## 13｜审核结果

```yaml
audit:
  structure_visible: null
  shortcut_dependency: null
  nearest_neighbor_separable: null
  changed_variable_visible: null
  confidence: null
  failure_family: null
```

## 14｜证据来源

### 深度研究

- 

### 历史实验

- 

### 项目实战

- 

### 反例 / failure

- 

## 15｜冲突记录

| 结论A | 结论B | 冲突层级 | 处理 |
|---|---|---|---|
| | | | |

## 16｜冻结判定

```yaml
freeze_gate:
  core_variables_stable: false
  nearest_neighbor_separable: false
  shortcut_removed: false
  cross_object_or_cross_topic_passed: false
  audit_repeatable: false
```

若全部为 true：

```text
FROZEN
```

否则保留为 `research` 或 `candidate_frozen`。
