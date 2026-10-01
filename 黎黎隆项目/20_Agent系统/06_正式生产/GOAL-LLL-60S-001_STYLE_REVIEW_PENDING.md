# GOAL-LLL-60S-001｜STYLE REVIEW

- agent: AG-06 风格审核
- input_pack: PACK-LLL-60S-MECHAIR-001
- decision: PENDING_VISUAL_EVIDENCE

## 已确认
- 素材包中的角色与场景路径均已由素材 Agent 确认存在/可定位。
- 角色 `LLL-MAIN-001` 在现有角色池登记为 `github_direct_read` 且 `h3_render_eligible=true`。
- `SCENE-11/12/13` 属于正式 13 场景池并登记 `available_by_github_path`。

## 本轮未确认
按 CTX-06，正式 PASS 必须核对身份、比例、剪影、线稿、二维感、限制色、材质与构图。本轮在仓库文本证据中没有找到这四项资产对应的既有 `style_review=PASS` 记录，也没有取得可供当前审核器视觉比对的原图证据，因此不得把 manifest 登记冒充风格终审。

## 缺口
- `LLL-MAIN-001`：需要当前锁定原图/可视证据完成本轮风格复核。
- `SCENE-11/12/13`：需要当前原图/可视证据或已有可追溯的 style PASS receipt。

## 路由
保持 `assets.status=PENDING_REVIEW`；不启动主题、剧本或 H3。由能够读取实际图片的本地/云端素材执行端返回 style review receipt 后再继续。
