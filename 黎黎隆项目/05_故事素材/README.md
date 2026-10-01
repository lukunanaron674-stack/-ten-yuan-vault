# 05_故事素材｜README

## 定位
保存“已经有故事价值、但尚未进入正式剧本正本”的素材。

这里不是废稿箱，也不是角色卡附录。

核心原则：
- 不因为当前轮未选中就删除好点子。
- “不适合当前角色主线”与“素材本身不成立”分开。
- 角色、主题、世界观、叙事机制四种价值分别管理。
- 作者明确否决的素材直接 REJECT，不让 Agent 反复捡回来。

## 四类素材
- CHARACTER_CANDIDATE：与某个角色强绑定。
- THEME_SEED：主题价值高，可脱离当前角色复用。
- WORLD_SEED：更适合扩展世界机制。
- MECHANISM_SEED：叙事机关/关系机制有价值，但角色尚未匹配。

## 状态
- ACTIVE：继续开发。
- HOLD：保留，当前不开发。
- PROMOTE：已进入正式剧本。
- MERGED：已并入其他种子。
- REJECT：作者或审核明确否决；不得自动复活。

## 最小字段
seed_id / title / one_line / source_character / bucket / theme / status / why_keep_or_reject / next_use

## 剧本 Agent 规则
1. 每轮发散后，未进前三不等于淘汰。
2. 先分 CHARACTER / THEME / WORLD / MECHANISM。
3. 作者否决 > Agent评分；标 REJECT 后不得自动再次推荐。
4. HOLD 素材遇到更适合的角色/主题时允许回收。
5. ACTIVE 素材最多保留少量，避免素材池变成第二个剧本库。
