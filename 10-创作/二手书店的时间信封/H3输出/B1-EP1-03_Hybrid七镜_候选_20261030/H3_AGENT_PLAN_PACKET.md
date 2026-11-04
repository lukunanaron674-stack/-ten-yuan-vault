# H3_AGENT_PLAN_PACKET — B1-EP1-03 Card 3

- status: APPROVED_FOR_LOCAL_CANDIDATE_PREVIEW
- source_task: `01_任务卡/B1-EP1-03_卡3_孤独共鸣递信_任务卡.md` and `信封发散树.canvas` node `envelope_1_3`
- user authorization: one approximately 14.3-second H3 candidate, seven beats in order, one H3 run; candidate may be added but is not approved as final.
- dispatch: LOCAL ComfyUI (`127.0.0.1:8188`), one pending render after the active Card 1 job; no Linear dispatch.
- character refs: `女主.png` (FOUR_PANEL/TURNAROUND, 1548x1016, IDENTITY_ONLY/BODY_PROPORTION/COSTUME; SHA in manifest); `男主.png` (FOUR_PANEL/TURNAROUND, 1548x1016, IDENTITY_ONLY/BODY_PROPORTION/COSTUME; SHA in manifest).
- scene refs: opening candidate frame (SCENE+COMPOSITION; derived from user-approved bookstore exterior and Claire images); `LOC03-S01_地铁钢琴站台_二维手绘候选.png` (SCENE); `Pasted image 20261029071905.png` (COMPOSITION/POSE); `Pasted image 20261030115223.png` (SCENE/FLASHBACK).
- input_preflight: PASS for existence, dimensions, SHA-256, roles and 16:9-compatible output. Workflow uses `ref_image_size=match`; references preserve aspect ratio; no stretch or force resize. Character images are multi-view/full-body, not headshots. ComfyUI node supports `first_frame` plus up to nine actual `ref_images`; each reference is bound through a `LoadImage` node.
- experiment_or_shot_goal: one Hybrid H3 sequence, seven time-coded shots, 345 native frames at 24 fps (14.375s; rounded 14.4s), 736x416. The one-H3 clip will be cropped to 343 frames after generation for 14.292s (14.3s) if the runtime provides a decodable output.
- variables_changed: replaced the previous Ref2Video-only setup with `MiniMaxH3AudioConditioningT8` Hybrid; connected the generated opening frame through the actual `first_frame` input; bound Claire, Lucas, metro environment, duo staging, and workshop memory separately; rewrote prompt to unambiguously map six picture refs and seven exact beats.
- controls_locked: one seed; one run; 8-step dual-clock sampler from active local workflow; no old video frames as inputs; no changes to source images or task card approval states.
- planned_runs: exactly one Card 3 candidate job; queue only after active Card 1 completes; no duplicate enqueue.
- stop_conditions: stop on ComfyUI validation error, missing bound input, or non-success receipt; no automatic resubmit. Preserve the raw output and error evidence.
- production_gate: `NOT_READY_FOR_H3_PACKET`; this is a user-authorized local candidate preview only. Character and storyboard locks remain pending; no formal PASS/USER_PASS claim.

## Execution parameter rationale

The active local Hybrid H3 job uses the requested 8-step dual-clock workflow at 736x416. Card 3 reuses that same resolution and sampler stack to keep this single seven-shot candidate within the current local runtime envelope. 736x416 is a widescreen frame close to 16:9; all source references use `ref_image_size=match`, which preserves each source aspect ratio and does not stretch the 1672x941 scene images or 1548x1016 character turnarounds. Native 345 frames are retained as the H3 source; a post-process copy will be cut to 343 frames (14.2917s, approximately 14.3s) and cropped by one pixel at the top and bottom to 736x414 (exact 16:9), if the output decodes successfully.




## Updated sampler setting

User requested 8 sampling steps. Only workflow node 8 (MiniMaxH3DualClockSamplerT8) has an explicit steps field; it is set to 8. dual_clock_euler, 
ative_flow, and the video/audio shift values remain unchanged. No other dual-clock node exposes a separate step count.

