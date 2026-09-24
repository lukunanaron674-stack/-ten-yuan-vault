# ADV_B_20260925_0210_R50｜WORK VALIDATION

## 输入闸门

- Picture 1：回填ADV实际绑定path/SHA/尺寸，核同人及H3布局。
- Picture 2：绑定SCENE-05，回填path/SHA/尺寸。
- 看图确认：角色两侧是否存在半脚宽可用横向空地；是否存在可支持“普通周期提示”的既有元素。任一为false即STOP，不凭文字生成结构。
- 不自动替换角色图或场景图。

## 执行

- 单一完整prompt执行run_A/run_B，共2次。
- 11秒、16:9，width > height；固定机位、固定景别、固定光线。
- 回填本轮真实workflow、fps、总帧、时长、seed、task/output ID。
- 不得复用R31超时重试的seed或任务ID。

## 六段验收

- 0–2秒：完整负重已站稳，装备停止摆动。
- 2–4秒：唯一普通周期提示，无警报、危险或强制移动。
- 4–6秒：局部肩背响应，双脚仍固定。
- 6–8秒：仅眼睛与轻微头部检查侧向余量。
- 8–10秒：只横移半脚宽，不后退。
- 10–11秒：立即停止，仅一次装备回稳。

无法证明“先站对、后微调”时标`NEEDS_TEMPORAL_REVIEW`。若H3不输出音频，标`POST_PRODUCTION_REQUIRED`。