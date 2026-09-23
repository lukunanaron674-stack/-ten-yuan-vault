# B端版本号与轮次差异记录规范 v1.0

> 生效：2026-09-23。目标：每小时提交的 B端文本任务能准确追踪「这版与上一版改了什么、没改什么、为什么改、Work怎样对照效果」。规则本身的版本与每轮实验版本分开，**不能把已生成文本、图片验证通过、H3视频完成混成一个完成状态**。

## 一、四种编号分开管理

1. **规则版本**：`B-RULE-v1.0`（本文件）；以后规则语义变化递增 minor，如 v1.1；纯错字增加 patch，如 v1.0.1。原有 `video_tenyuan_prompt_schema_v1.0.md` 继续使用，不擅自替换旧版。
2. **每小时实验轮次**：`R17`、`R18`……从 GitHub 已存在的**同系列最高轮次**读取后递增，沿用历史 `<角色缩写>_B_YYYYMMDD_HHMM_RNN` task_id；不得回填旧轮或仅凭聊天记忆推算轮次。
3. **单任务修订**：原任务已提交后需要改文字，保留原文件并创建 `<原task_id>_v1.1`（首次为 v1.0）；`parent_task_id` 指向原任务，记录每处差异。**不能覆盖旧版后假装对比数据仍在**。
4. **澈 MV 基准**：`CHE-MV-BASE-v1.0`，历史案例仅对应 `LLL-CHARM-20260921-104620` 和 `LLL-CHARM-20260921-114620`（用户确认画风与魅力合意的同一提示词重跑）。它是主观风格参照，不是已检验可泛化的成功率；不能拿历史文件名当成当前 GitHub 有原视频的证据。

## 二、每一轮固定记录

在 `tasks/inbox/<task_id>.json` 填写 `version_tracking`；在 `prompts/generated/<task_id>_H3.md` 顶部写**同一份版本对照摘要**；在 `tasks/inbox/<task_id>_WORK_VALIDATION.md` 写明 `task_id / task_version / parent_task_id` 和参考图绑定要求。

```json
{
  "version_tracking": {
    "task_version": "v1.0",
    "rule_version": "B-RULE-v1.0",
    "schema_version": "video_tenyuan_prompt_schema_v1.0",
    "style_reference_version": "CHE-MV-BASE-v1.0",
    "parent_task_id": "上一轮实际可查任务ID或null",
    "comparison_mode": "controlled_ab | multi_variable_exploration | first_baseline",
    "changed_fields": [
      {
        "field": "shot_grammar",
        "before": "上一轮原文/摘要；无对应项则写null",
        "after": "本轮可核对的具体变化",
        "reason": "为何改",
        "expected_observable_effect": "希望画面怎样改变，**不得写成已经实现**"
      }
    ],
    "held_constant": ["未改的角色身份约束/场景/图像视图/H3参数等；仅实际相同时才列出"],
    "confounders": ["角色或场景也变化时如实登记，不能假装单变量对照"],
    "baseline_evidence": "已核实的历史任务路径；找不到写unavailable",
    "text_generation_status": "completed | failed",
    "github_commit_status": "pending | succeeded | failed",
    "work_image_validation": "not_reported_to_b_end",
    "h3_render_status": "not_verified_by_b_end",
    "work_feedback_path": null
  }
}
```

**对比规则**：
- 首次某角色/场景组合没有前例时用 `first_baseline`；角色、场景、视图、动态链同时变化用 `multi_variable_exploration`，只写可观察差异，不声称画风好坏由哪个单项引起。
- 真正比较澈 MV 风格方法时，优先固定同一角色图、同一场景图及Work能够固定的H3参数，只改变一项（如线面/光、镜头节奏、音乐同步）；才能标为 `controlled_ab`。
- `before` 必须有真实来源；若只是对前一轮的概括，写明“依据上一轮文本，非视频比较”。不能把历史用户偏好当作当前视频实测评分。
- 每轮明确画面起点→动作变化→结束；记录人物轮换、选用的13图池场景、视图类型、原图路径/上传状态、Picture映射、十元动态链、镜头数量与节奏、视觉风格措辞、音乐设计的具体差异。
- 与澈基准比较时只借鉴二维手绘线面、柔和光照、主体稳定、动作停顿、音乐镜头配合等**方法**；不得复制澈的角色外形或把其他角色统一改成澈。
- Work 不需要把验证回传给 ChatGPT；Work 可在本地用对应 `task_id + task_version` 保存视频/日志。B端没看到视频，就只报告“文本变化/预期效果”，不报告“画风已提升”。

## 三、可选对照指标（Work自行记录，B端不假填）

原图角色一致性 / 场景一致性 / 干净线面和轻薄光照 / 动作连续性 / 关系变量可读性 / 镜头音乐协调性；Work可记录 pass/fail、可观察故障与实际视频路径。比较结果须注明是否基于同一角色、同一场景、同一输入参数。

## 四、每小时交付与版本日志

每轮在三个标准交付件之外，再创建 `results/version_history/<task_id>_DIFF.md`，至少填写本轮编号、父版本及前后对照表（角色、图/视图、场景、十元链、镜头、风格、音乐、Picture、Work状态），在 `results/version_history/INDEX.md` 追加一行 task_id、版本、父任务、对照模式、改动摘要、四个文件的路径与提交 SHA。INDEX 若有并发写入冲突，重新读取最新版后顺序追加，不覆盖他人记录；INDEX更新失败不取消已成功的本轮文件，但必须明说版本索引未更新。

只有 GitHub 返回真实 commit，才填实际提交信息。一个小时没有新任务时不凭空制造版本号。以 GitHub 文件实际内容为准，历史 R1–R16 不强行补全未知差异；无原始证据的旧状态标记 unknown。
