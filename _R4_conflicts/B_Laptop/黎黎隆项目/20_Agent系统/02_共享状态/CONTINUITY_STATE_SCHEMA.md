# CONTINUITY_STATE_SCHEMA｜镜头连续性状态

每个 PASS 镜头必须保存 closing_state，下一镜必须继承。

## 角色连续性
- character_id
- screen_position
- facing
- pose
- action_end
- held_objects
- costume_state
- damage_or_dirt
- emotion_visible
- identity_ref

## 场景连续性
- environment_id
- exact_location
- camera_side
- time_of_day
- light_direction
- weather
- active_background_events

## 叙事连续性
- immediate_goal
- known_information
- unresolved_action
- relationship_state
- object_state

## 十元连续性
- primary
- secondary
- active_relation
- volume
- unresolved_dynamic

## 规则
- 切场可重置空间字段，但剧情/人物状态不能凭空重置。
- LongTake 段落必须完整继承角色、空间、光线和动作结束点。
- 普通切镜至少继承人物状态、关系状态、持有物和剧情信息。
