---
type: validation-blindset
validation_id: VGAP09-VLM-BLINDSET-V1
status: FROZEN_WAIT_MACHINE_RECEIPT
updated: 2026-10-08
parent_linear: 674-272
execution_issue: 674-216
evidence_store: 674-289
user_gold_issue: 674-173
---

# V-GAP09｜VLM预审盲测集 v1

## 目标
验证机器对现有H3视频的客观技术错误识别能力。

## 冻结样本
1. H3V-0001
2. H3V-0002
3. H3V-0004
4. H3V-0006

## 盲审纪律
机器审阅时禁止读取：
- 674-289 中每条视频的“AI自评”
- reference wiring 的 BROKEN/FIXED 标签
- USER审核字段
- 任何“目标帧参考/实战组合”等会泄露预期结果的标题解释

机器只允许读取：
- 对应 MP4 / 完整时序
- 必要抽帧 / contact sheet / 差分帧
- 原始任务目标/验收条件（不含结果）
- 角色/场景 reference 图，仅用于判断identity/style/scene adherence

## 输出格式
每条视频：

```yaml
video_id:
machine_verdict: PASS | FAIL | AMBIGUOUS
failure_family: []
failure_time_range: []
confidence: 0.0-1.0
findings: []
evidence_frames: []
```

## failure family v1
- IDENTITY_DRIFT
- BODY_DRIFT
- COSTUME_REDESIGN
- LIMB_ERROR
- ACTION_DROP
- ACTION_ORDER_ERROR
- SCENE_REBUILD
- STYLE_MISMATCH
- CAMERA_JUMP
- FLICKER
- DUPLICATION
- REFERENCE_NONCOMPLIANCE
- OTHER_TECH_FAIL

## 冻结规则
1. 四条 machine verdict 必须一次性冻结后再看 USER Gold。
2. 不能根据已知 wiring bug 反推结果。
3. 不能用“生成成功”替代视觉PASS。
4. USER Gold来自674-173；machine review只能写674-289/216 evidence。
5. 计算指标前不得修改机器原始 verdict。
6. 样本量4只做E0/E1可行性，不宣称泛化准确率。

## 当前阻塞
Chat侧现在无法读取这4条本地H3V视频/帧；674-289只有登记和历史自评，不能拿历史自评冒充盲审。

因此由现行本地视频执行链（674-216 / 4080 local Codex）读取完整视频并返回盲审receipt。

## DONE
- [ ] 4条视频都有冻结machine review
- [ ] review receipt带本地evidence locator
- [ ] 在读取173 USER Gold前完成
- [ ] 之后才计算per-family命中/漏报/误报
