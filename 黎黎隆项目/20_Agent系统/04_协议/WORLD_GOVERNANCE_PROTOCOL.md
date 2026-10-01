# WORLD_GOVERNANCE_PROTOCOL｜世界观治理与正本规整协议 v1

## 目标
AG-10 不只负责扩展世界观，还负责把已有设定**管理、归并、去重、编号、建立层级、维护正本与角色接口**。

世界观工作分成两条同等重要的职责：
1. EXPAND：继续长出新设定。
2. GOVERN：把已经长出来的东西整理成可调用的世界。

## 世界设定层级
每条世界设定至少归入一种：
- REGION：色区/大区域
- GEOGRAPHY：地理/城市/路域/生态带
- ORGANIZATION：组织/公司/制度机构/群体
- RESOURCE：资源/材料/能源/生命来源
- INDUSTRY：产业/职业系统/生产维护
- LIFESTYLE：日常生活/消费/交通/居住
- BIOLOGY：族群/身体适应/生命机制
- INFRASTRUCTURE：基础设施
- LAW_RULE：许可/法律/规则
- HISTORY_EVENT：历史事件
- WORLD_MECHANISM：高层机制

## 统一字段
```yaml
setting_id:
name:
region: cyan|red|pink|cross_region|unassigned
type:
parent_setting_id:
canon_status: CANON|STAGING|MERGE_CANDIDATE|RETIRED
source_refs: []
tenyuan_refs: []
geography_refs: []
organization_refs: []
character_refs: []
asset_refs: []
world_impact: 1-10
duplicate_status: UNIQUE|POSSIBLE_DUPLICATE|MERGED
merge_target:
updated_at:
```

## AG-10 新运行模式
### WORLD_GOVERN
- 扫当前区域正本与增量；
- 将散落设定归到统一层级；
- 建立 parent/child；
- 标重复与冲突；
- 不创造新设定，只整理。

### WORLD_MERGE
- 同义/近义机制合并；
- 保留旧来源与别名；
- 不用换名字制造“新设定”。

### WORLD_REINDEX
- 更新世界总索引；
- 维护区域 → 地理 → 组织 → 职业/生活 → 角色接口；
- 不重写正文。

### WORLD_CHARACTER_SYNC
逐角色检查：
- 世界区域是否明确；
- 地理位置是否存在于正本；
- 组织是否存在于正本；
- 职业是否由世界机制支持；
- 身体/装备是否能由环境、组织或个人特例解释；
- 角色卡是否引用过期/不存在的世界设定。

输出：
`PASS | PARTIAL | CONFLICT | UNASSIGNED`

## 世界观与角色的同化规则
角色不能只写“属于青色/红色/粉色”。

至少需要：
- region
- geography
- organization 或 NONE
- world_mechanism_refs
- daily_life_effects
- world_constraints
- 若有特殊身体/装备：说明是世界普遍、组织标准、地域适应还是个人特例

如果角色需要一个世界中不存在的组织/地理/资源：
- 不得在角色卡里直接造正本；
- 转 WORLD_PROPOSAL；
- AG-10 审核后再回流角色。

## 世界总索引
维护：
`黎黎隆项目/世界观/00_世界观总索引.md`

总索引只记录路由和状态，不复制所有正文。

## 五色与世界色区禁止混淆
P00 五色是视觉系统，不是世界区域编号。
当前世界正本区域仍是：cyan / red / pink；其余区域若未来建立，必须由世界正本明确创建，不能从视觉色卡反推。
