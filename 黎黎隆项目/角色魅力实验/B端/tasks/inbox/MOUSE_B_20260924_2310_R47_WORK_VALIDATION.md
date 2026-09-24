# MOUSE_B_20260924_2310_R47｜WORK_VALIDATION

## 输入闸门
- [ ] Picture 1实际绑定；记录路径、SHA-256、宽高。
- [ ] same_character_visual_verified明确为true/false。
- [ ] h3_four_grid_layout_verified明确为true/false。
- [ ] 两只短椭圆鼠耳连接头骨侧面，没有肩后/背部翼状结构。
- [ ] Picture 2实际绑定SCENE-08；记录路径、SHA-256、宽高。
- [ ] 实图支持异种村庄身份、双色逻辑、可用负空间；不凭prompt补门、桥、摊位或生物。

任一身份/四宫格/场景闸门失败：停止R47渲染并回填失败原因。

## 执行
- [ ] 输出16:9横屏且width > height。
- [ ] 回填workflow_id、fps_num/fps_den、total_frames、实际时长。
- [ ] run_A / run_B完全同词同输入同参数；分别回填真实seed、task/output ID。
- [ ] 不复用R28/R29/R35/R37的seed、输出或帧。
- [ ] H3不产音频时，将音频设计标为后期需求，不声称已有音轨。

## 节点证据
- [ ] 每节点pre/onset/peak/post；相邻同帧可去重。
- [ ] n4决定停顿与n5手部起动追加密集帧，能区分“有意停顿”与“生成卡顿”。
- [ ] 严格先后不足则标NEEDS_TEMPORAL_REVIEW。
- [ ] 每帧记录run/node/frame/timestamp/path/SHA-256/宽高。
- [ ] 真实首帧可供网页卡面；参考图、旧帧、占位图不得冒充本轮首帧。

## 感受盲审
真实视频或足够帧证据存在后，再让不了解目标与十元的观察者回答四个问题。未收集时保持pending。
