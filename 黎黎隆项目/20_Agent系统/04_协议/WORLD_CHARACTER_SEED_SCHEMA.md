# WORLD_CHARACTER_SEED_SCHEMA｜世界观 → 角色种子协议 v1

## 用途
当世界观中的地理、组织、产业、资源、生态、制度、生活方式自然需要具体人物时，由 AG-10 输出角色种子给 AG-11。

它不是角色卡，也不直接等于角色 Canon。

## payload
```yaml
world_character_seed_id:
project_id: LLL
source_world_result_id:
region:
source_type: GEOGRAPHY|ORGANIZATION|RESOURCE|INDUSTRY|ECOLOGY|INSTITUTION|LIFESTYLE|MIXED

world_context:
  geography:
    location:
    terrain_or_space:
    climate_or_environment:
    mobility_conditions:
  organization:
    name:
    status: CONFIRMED|CANDIDATE|NONE
    function:
    power_scope:
  mechanisms: []
  resources: []
  social_rules: []
  daily_life_constraints: []

character_slot:
  why_this_person_exists:
  role_in_world:
  possible_profession:
  social_position:
  affected_population:
  daily_problem:
  required_skills: []
  required_body_or_equipment_adaptations: []
  visual_consequences: []
  behavior_pressures: []
  forbidden_shortcuts: []

tenyuan_context:
  world_relation_refs: []
  character_tenyuan_locked: false
  notes: 世界十元不能直接替角色十元定型

status: CANDIDATE|READY_FOR_CHARACTER_AGENT
next_route: CHARACTER_BUILD
```

## 硬门
1. AG-10 可以规划“什么样的人会在这里自然出现”，但不直接锁角色姓名、完整个人性格、个人十元、最终脸与完整造型。
2. 地理必须能影响角色：移动、衣着、工具、身体适应、职业或生活节奏至少一项。
3. 组织必须能影响角色：职责、权限、制服/标识、风险、资源或社会位置至少一项。
4. AG-11 可以基于种子继续发散个体，但不得反向修改世界 Canon。
5. 如果角色生成过程中发现世界缺口，转 WORLD_PROPOSAL。
6. 一个世界设定可生成多个不同角色种子，禁止把一个组织只等于一种性格模板。