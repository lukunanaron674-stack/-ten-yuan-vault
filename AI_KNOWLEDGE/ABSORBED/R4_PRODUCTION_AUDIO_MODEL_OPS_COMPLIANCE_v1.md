---
type: absorbed-knowledge-pack
pack_id: ABS-R4
status: ROUTED
version: v1.0
updated: 2026-10-08
source_master: AI_KNOWLEDGE/EXTERNAL_KNOWLEDGE_MASTER_v2_20261008.md
scope: [production-economics, audio, post, model-ops, commercial-compliance]
primary_linear: 674-76
secondary_linear: [674-286, 674-289, 674-77, 674-272]
---

# ABS-R4｜生产经济 + Audio/Post + Model Ops + 商业合规

## DIRECT｜正式吸收

### M37 PREPRODUCTION BEFORE EXPENSIVE GENERATION
昂贵video generation之前先锁：script可执行性、核心资产、storyboard/animatic、timing、必要reference。

### M42 LOG + TEMPLATE THE REPEATABLE PARTS
记录take、失败、模型、参数、成本、最终选择；稳定链固化为recipe/workflow version。

### M50 AUDIO IS MULTI-LAYER STATE
Dialogue / Voice / Music / SFX / Ambience 分轨分职责。

### M51 VOICE IDENTITY ≠ NATURALNESS ≠ LIP-SYNC ≠ TIMING
声线身份、自然度、嘴型同步、时序/上下文分别表示与审核。

### M52 SEMANTIC SYNC ≠ TEMPORAL SYNC
“声音是什么”和“声音何时发生”是不同约束。

### M53 AUDIO NEEDS TIMELINE EVENTS
对白、SFX、music cue、ambience bed、intensity envelope进入时间线。

### M54 SHOT CUT ≠ AUDIO CUT
video in/out 与 audio in/out 可独立；支持J/L-cut与声桥。

### M56 MIX ≠ STEMS
Final mix与Dialogue / Music / Effects / M&E等生产资产分离。

### M57 LOUDNESS / TRUE-PEAK ARE DELIVERY METRICS
按目标平台/交付profile测量，不设全局固定LUFS。

### M58 COLOR MANAGEMENT IS A PIPELINE
Input → working/timeline → creative grade → output transform 分层。

### M59 FINAL DELIVERY IS A PACKAGE
交付包可包含picture master、mix/stems、captions、timeline/composition metadata、color/output profile、version/provenance。

### M60 OPTIMIZATION IS A PROFILE, NOT A SWITCH
quantization/cache/offload/compile必须绑定model×version×hardware×resolution×frames×workflow。

### M64 LICENSE IS A VERSIONED ASSET FACT
模型资产绑定license/version/territory/commercial conditions；open-weight不等于同许可。

### M65 COMMERCIAL RIGHTS ARE MULTI-LAYER
provider permission、input rights、output copyright、likeness/trademark/audio、data terms、AI disclosure分开检查。

### M66 PROVENANCE ≠ COPYRIGHT ≠ TRUTH
内部lineage/C2PA回答来源与修改；copyright回答权利；真实性另论。
商业交付同时记录jurisdiction / terms snapshot / disclosure / credentials。

## SPLIT｜只吸收结构

### M40 COARSE → SELECT → REFINE
**吸收**：生产允许 preview/coarse → select → refine/upscale winners 的分层结构。
**待验证**：当前项目实际节省与误杀率。

### M41 MODEL BY JOB / VERSION / DATE
**吸收**：模型按job路由，并绑定version/date/cost/locality。
**待验证**：H3/Wan/Vidu/Runway等真实任务矩阵。

### M55 LONG-FORM AUDIO CONTINUITY
**吸收**：voice timbre / ambience / room tone / music texture 作为长程连续状态。
**待验证**：当前工具链具体保持方法。

### M61 VRAM BUDGET + OFFLOAD LADDER
**吸收**：性能profile记录weights/activations/latents/VAE/cache/buffer与offload策略。
**待验证**：4080/H3/Wan具体最佳组合与吞吐。

### M63 SUBMIT IS A COST GATE
**吸收**：不可逆/付费远程任务在submit前做preflight / dedupe / budget / stop-rule。
**待验证**：各平台当前价格与取消/计费语义按date-stamped profile维护。

## VERIFY POINTERS｜不得吸收成效果规则

- M38 approved still → motion 是否在当前生产中显著提高PASS率
- M39 short beat coverage vs longtake 的真实经济边界
- M62 cache speedup / quality regression 在本机与当前模型上的Pareto

## Audio / Post Packet

```yaml
dialogue:
  speaker_id:
  voice_identity_ref:
  text:
  in:
  out:
  lip_sync_required:

sfx_events:
  - event_id:
    semantic_source:
    in:
    reference_audio:

ambience:
  environment_id:
  continuity_group:
  in:
  out:

music:
  cue_id:
  role:
  in:
  out:

split_edit:
  audio_in:
  audio_out:
  video_in:
  video_out:

mix:
  dialogue_stem:
  music_stem:
  effects_stem:
  loudness_profile:
  true_peak_profile:

color:
  source_color_space:
  timeline_space:
  output_space:

delivery:
  picture_master:
  mix_master:
  stems:
  captions:
  timeline_or_cpl:
  qc_profile:
```

## Performance Profile

```yaml
model:
model_version:
workflow_version:
hardware:
  gpu:
  vram:
  system_ram:
generation:
  resolution:
  frames:
  steps:
  dtype:
  quantization:
  cache:
  offload:
  concurrency:
measure:
  peak_vram:
  peak_ram:
  wall_time:
  failure_rate:
  quality_regression:
cost:
  local_gpu_time:
  cloud_credit_or_price:
```

## Commercial Provenance

```yaml
asset_id:
asset_version:
sha256:
generator:
  provider:
  model:
  model_version:
  terms_or_license_snapshot:
inputs:
  - asset_id:
    role:
    rights_basis:
generation_record:
  workflow_version:
  task_or_seed:
  human_edits:
rights:
  provider_commercial_use_status:
  input_rights_status:
  likeness_status:
  trademark_status:
  music_audio_status:
  jurisdiction_profile:
transparency:
  ai_generated_or_modified:
  disclosure_required:
  c2pa_or_content_credentials:
delivery:
  client_or_platform:
  territory:
  rights_receipt:
  compliance_receipt:
```

## 路由

- 项目/商业生产总控：674-76
- B端/生产策略/模型分工：674-286
- 视频版本/交付事实：674-289
- runtime/queue/工程能力：674-77
- 外部来源与条款更新入口：674-272

## 状态

KNOWLEDGE_READY = true
ROUTED = true
CONNECTED = false
VERIFIED = false
AI_LEARNED = false
