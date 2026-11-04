# Linear 674-313 | EP1 卡1–3 H3候选预览

- 状态：`LOCAL_CANDIDATE_PREVIEW`；Linear/正式审片状态未改，`USER_REVIEW_PENDING`。
- 原因：角色素材登记当前 `h3_ready:false`，素材仍为未审候选；本次按用户“接Linear313做卡123”授权执行本地预览。
- 工作流：H3 MiniMaxH3ImageToVideo，1024×576，24 fps，H.264/AAC；ComfyUI 本地 4080。
- 分段：6 段，最长 12.958 秒；总长 60.042 秒（1441 帧），每段均低于 14.3 秒。
- 总片 SHA-256：`47369029568835ac28628113150a34798274921caf3352fe12576b4538de67aa`
- 视觉抽查：三张 contact sheet 抽查了首/中/尾画面；Claire 发型、灰色针织衫、耳机与登记图一致，主要情节可辨。未做逐帧精修或完整音轨听审。
- 待审点：卡3从站台开始建立琴点，书店到站台的转场未锁定，需后续剪辑或审片确认；H3生成的台词/音效也需听审。所有结果均为候选，未标正式 PASS/USER_PASS。

## 主卡成片

- 卡1（工作室冲突 → 未发出的道歉）：`卡1_工作室冲突与未发道歉_candidate.mp4`，14.584 秒。
- 卡2（街头听琴入店 → 信件触发/Marcel赶人）：`卡2_街头入店与信件触发_candidate.mp4`，25.208 秒。
- 卡3（Lucas独奏 → Claire递信）：`卡3_Lucas独奏与递信_candidate.mp4`，20.250 秒。
- 三卡总片：`LIN313_cards123_H3_candidate_60s.mp4`，约 60.042 秒。

## H3分段回执

|段|内容|帧数|时长|Comfy prompt ID|SHA-256|
|---|---|---:|---:|---|---|
|C1A|卡1 工作室冲突|175|7.292s|add5ce50-27e4-4ed9-8f5c-3677cd3bde9f|d2dd074cc4db58e19e0536fcc1fa77087216a1dcff9049e0496d3e52fa233335|
|C1B|卡1 未发出的道歉|175|7.292s|a67182b2-4e5d-48c8-838b-02015533eaf8|4b6c0ff546291561cf1f5bd9c6a6ff96f4767bfa12a75145d8f8deae8b2bd954|
|C2A|卡2-1 街头听见琴声入店|294|12.25s|96cdec11-da1e-4c0a-9105-f22e21471065|e49a1b41ed1602efef31108e48edddada83fc18366c3998f5ae75c9d8ab5494e|
|C2B|卡2-2 信件触发与Marcel赶人|311|12.958s|97921bb0-ed34-4c8b-b159-35589c68507e|ce7c2d4a9ef6f5b6bb56545352c91b40bf2da867065a5596b2c4c8d53a50fbe0|
|C3A|卡3-1 Lucas独自弹琴|243|10.125s|acf03ff0-3a8f-4121-a727-c15069828124|13c1b34fd21bc8922826e14d3f9c3d36f5f752f020385dc9919fc2f5a11926c3|
|C3B|卡3-2 Claire递信给Lucas|243|10.125s|30af87b9-b07c-4ad4-90ea-f0b73befe31f|b2352842802183df761ad8b96050bd63f0a33e59f88ce3b673167a919785ebb2|

详情与六段逐段哈希见 `run_receipts.json`。
