# H3_AGENT_PLAN_PACKET | EP01 1-12 Lucas | v3 local preview

- status: APPROVED_FOR_RENDER (user-authorized local TEST preview only)
- source_task: EP01 1-12, select one music score and settle
- character_refs: first-frame composite derived from the user-selected Lucas visual; no formal CHARACTER_H3_READY_PACKET was found, so this remains a candidate preview and cannot enter formal production.
- scene_refs: bookstore and table are embedded in the exact first frame; no separate scene conditioning in this run.
- input_preflight: PASS (PNG decodes; 882005 bytes; 1024x576; 16:9; CROP_PRESERVE_IDENTITY from 1672x941; SHA256 98857bb5d6b45d34a17507b3028943e218214ebb9013dbe1be5a65933a52676c)
- experiment_or_shot_goal: use the frame as the actual I2V first frame to preserve the look and composition that was diluted when it was added as an ordinary third Ref2V reference.
- variables_changed: conditioning route Ref2V -> I2V first_frame; simplify action to one visible selection-and-settle chain.
- controls_locked: 345 frames; 24 fps; 1024x576; 4 steps; model and LoRA from prior workflow; seed 202610290113; one ComfyUI instance.
- planned_runs: 1
- stop_conditions: queue error, memory pressure, wrong prompt ID/history, unreadable output; no automatic retry.
- render_task_id: EP01-1-12-LUCAS-I2V-V3-20261029
- migrated_4090_rules_used: single instance, inspect /history and actual output, do not treat file appearance as completion.
- rules_requiring_4080_revalidation: 345-frame duration remains a candidate runtime observation; output is not formal PASS or USER_PASS.
