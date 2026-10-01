# GOAL-LLL-60S-001｜ASSET READY REPORT

## 本 tick
- primary_agent: AG-04 素材 Agent
- production_goal: GOAL-LLL-60S-001
- policy: ASSET_FIRST
- target: 60s formal production
- H3 mode: LONGTAKE_DEFAULT

## 角色
### LLL-MAIN-001｜黎黎隆
- source: `黎黎隆项目/角色魅力实验/B端/assets/character_refs/LLL_H3_character_card_001.jpg`
- **production_status: INCOMPLETE**
- **h3_render_eligible: false**
- verdict: **BLOCKED**
- canonical correction: 2026-10-01 用户明确确认“黎黎隆现在没有完成，不让跑”。
- note: 旧索引中的 `h3_render_eligible=true` 已作废。该角色仍可用于文字研究/分镜预研，但不得进入正式生图/H3视频生产。

## 场景池
现有正式池：13 张，均登记 `available_by_github_path`。

### 推荐正式一分钟主场景族：机械空港
优先顺序：
1. SCENE-11｜R4 起｜安静生命
2. SCENE-12｜R4 承｜技术接口
3. SCENE-13｜R4 合｜稳定结果
4. SCENE-05｜R1 单色机械空港
5. SCENE-06｜R1 双色机械空港
6. SCENE-10｜R2 深墨青机械空港

选择理由：
- 同一 scene_family，适合 LongTake 连续生产，降低跨环境漂移。
- 已有“起 / 承 / 合”阶段，可让主题和剧情从素材结构中生长，而不是反过来逼素材迁就剧本。
- 机械设施、受限路径、技术接口天然支持黎黎隆 ZX 主动抢先、变招、把局面弄复杂的可见动作。

### 备用场景族
- 森林湖泊：SCENE-01 / 02 / 03 / 04
- 异种村庄：SCENE-08 / 09

## LongTake 资产策略
- 60 秒不作为 6 个完全独立视频处理。
- 默认拆为约 6 个 8–10 秒 segment。
- SEG-02 起必须继承 SEG-01 尾状态；依次类推。
- 尽量维持同一主场景族、同一角色主参考、同一色彩脚本。
- 只有明确剪辑点才允许更换场景参考。
- 失败时优先局部重跑单 segment，不重做整分钟。

## 当前门禁
- 角色与场景“存在且可路径绑定”已确认。
- 本 Agent 不把 manifest 登记自动等同于本轮风格终审。
- 因正式流程改为素材前置，旧 THEME_READY 结论不再作为当前正式主题输入；主题 Agent 必须基于本报告与通过门禁的素材重新选择主题。
- 本轮不启动 H3。

## 结果
- asset_inventory: **BLOCKED_CHARACTER_INCOMPLETE**
- asset_pack: NOT_APPROVED
- next_required_gate: WAIT_LLL_CHARACTER_COMPLETE
- H3: DO_NOT_RUN
