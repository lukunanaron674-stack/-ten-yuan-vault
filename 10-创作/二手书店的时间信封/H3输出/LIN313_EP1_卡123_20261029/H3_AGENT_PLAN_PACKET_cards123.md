# H3_AGENT_PLAN_PACKET | Linear 674-313 EP1 cards 1-3

- status: LOCAL_CANDIDATE_PREVIEW (user requested work on cards 1-3)
- official_review_state: USER_REVIEW_PENDING
- h3_ready: false; do not treat as formal production PASS or USER_PASS
- task_scope: render the currently confirmed card 1, card 2-1, card 2-2 and card 3 beats from Linear 674-313
- character_refs: registered Claire, Lucas, Marcel candidate sheets; assets remain unreviewed
- scene_refs: generated candidate frames for fashion studio, Paris street, bookstore, metro platform; no official scene USER_PASS
- workflow: copied H3_I2V_API_workflow_v3; first-frame I2V; 1024x576; 24 fps; H.264/AAC
- controls: one ComfyUI instance, sequential render, 4 steps, fixed model and LoRA, per-shot seeds; lengths 175,175,294,311,243,243 frames
- outputs: 6 successful H3 segment videos plus 3 card assemblies and a 60.042s master candidate
- preflight: first frames decoded/resized to 1024x576; SHA tracked; ComfyUI /history showed success for every prompt
- review: sampled opening/mid/tail frames saved under review_frames; card 3 starts at the metro platform because the bookstore-to-piano transition remains unresolved
- stop conditions: any queue error, memory pressure, wrong output/prompt ID, unreadable output; no automatic retries were needed
- limitations: no complete audio listening review; no formal H3-ready packet or user visual pass; keep all outputs in candidate status
