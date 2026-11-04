$ErrorActionPreference='Stop'
$comfy='C:\ComfyUI_portable\ComfyUI_windows_portable\ComfyUI'
$run='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\B1-EP1-03_Card3_14.3s_20261030'
$workflowPath='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\EP01_1-12_Lucas_20261029\H3_I2V_API_workflow_v3.json'
$inputRel='ten_yuan_envelope_h3_20261030\B1_EP1_03_Card3_14s\Card3_站台递信_首帧.png'
$frames=343
$seed=202610301403
$workflow=Get-Content -LiteralPath $workflowPath -Raw | ConvertFrom-Json -AsHashtable
$workflow['6'].inputs.image=$inputRel
$workflow['8'].inputs.prompt='Use the supplied first frame as the exact opening composition. Preserve Claire in her gray patterned sweater, long dark hair, headphones and cream envelope; preserve Lucas in his navy jacket at the upright piano; keep the tiled Paris metro platform and its existing arches, benches and lighting. One continuous 14.3-second wide shot with a locked camera and enough space to see both characters. Lucas plays alone as a few distant commuters pass without stopping. Claire watches quietly, pauses, gathers herself, then walks toward Lucas and offers him the envelope. Lucas notices her, stops playing, turns toward her and accepts the envelope; they share a brief, restrained look. Keep the movement calm, readable and physically natural, with subtle breathing and hand motion. Maintain the supplied flat-color 2D illustration style, clean dark outlines, matte colors and adult proportions. No cuts, no camera move, no flashback, no magic effects, no new foreground people, no readable writing, no subtitles, no logos, no face, hair, clothing or body redesign, no morphing, no extra fingers, no photorealism, no 3D, no cinematic bloom or heavy gradients.'
$workflow['8'].inputs.length=$frames
$workflow['10'].inputs.noise_seed=$seed
$workflow['17'].inputs.filename_prefix='ten_yuan_envelope_h3_20261030/B1_EP1_03_Card3_14s/Card3_Claire递信给Lucas_343f'
$payload=@{prompt=$workflow;client_id='codex-lin313-card3-single-20261030'} | ConvertTo-Json -Depth 100 -Compress
$posted=Invoke-RestMethod -Uri 'http://127.0.0.1:8188/prompt' -Method Post -ContentType 'application/json' -Body $payload -TimeoutSec 30
$promptId=$posted.prompt_id
if(!$promptId){throw "ComfyUI did not return a prompt id: $($posted | ConvertTo-Json -Compress)"}
Set-Content -LiteralPath (Join-Path $run 'prompt_id.txt') -Value $promptId -Encoding ascii
Write-Output "STARTED prompt=$promptId frames=$frames duration=$([math]::Round($frames/24,3))s"
for($i=0;$i -lt 480;$i++){
  Start-Sleep -Seconds 15
  $history=Invoke-RestMethod -Uri "http://127.0.0.1:8188/history/$promptId" -TimeoutSec 20
  $entry=$history.$promptId
  if($entry -and $entry.status.completed){
    if($entry.status.status_str -ne 'success'){
      $body=($entry | ConvertTo-Json -Depth 30)
      Set-Content -LiteralPath (Join-Path $run 'h3_error.json') -Value $body -Encoding utf8
      throw "H3 ended with $($entry.status.status_str). See h3_error.json"
    }
    $imageInfo=$entry.outputs.'17'.images[0]
    $source=Join-Path (Join-Path $comfy 'output') (Join-Path $imageInfo.subfolder $imageInfo.filename)
    if(!(Test-Path -LiteralPath $source)){throw "ComfyUI output file is missing: $source"}
    $target=Join-Path $run 'B1-EP1-03_Card3_Claire递信给Lucas_14.3s_candidate.mp4'
    Copy-Item -LiteralPath $source -Destination $target
    $hash=(Get-FileHash -Algorithm SHA256 -LiteralPath $target).Hash.ToLower()
    $receipt=[ordered]@{task_id='B1-EP1-03-CARD3-20261030-01';execution_class='LOCAL_CANDIDATE_PREVIEW';comfy_prompt_id=$promptId;source_first_frame=$inputRel;source_first_frame_sha256='__SOURCE_HASH__';frames=$frames;fps=24;duration_seconds=[math]::Round($frames/24,3);duration_label='14.3s';resolution='1024x576';seed=$seed;workflow='H3_I2V_API_workflow_v3.json';output_file=(Split-Path $target -Leaf);output_sha256=$hash;status='SUCCESS_CANDIDATE';production_gate='NOT_READY_FOR_H3_PACKET';user_request='Render one Card 3 segment at 14.3 seconds.'}
    $receipt.source_first_frame_sha256=(Get-FileHash -Algorithm SHA256 -LiteralPath (Join-Path $comfy ('input\'+$inputRel))).Hash.ToLower()
    $receipt | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath (Join-Path $run 'run_receipt.json') -Encoding utf8
    Write-Output "DONE $target duration=$($receipt.duration_seconds)s sha256=$hash"
    exit 0
  }
  if($i % 4 -eq 3){Write-Output "WAIT elapsed_minutes=$([math]::Round((($i+1)*15)/60,1))"}
}
throw "Timed out waiting for H3 prompt $promptId"
