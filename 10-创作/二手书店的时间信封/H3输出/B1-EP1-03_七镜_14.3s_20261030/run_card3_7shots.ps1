$ErrorActionPreference='Stop'
$comfy='C:\ComfyUI_portable\ComfyUI_windows_portable\ComfyUI'
$run='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\B1-EP1-03_七镜_14.3s_20261030'
$inRel='ten_yuan_envelope_h3_20261030\B1_EP1_03_7shots'
$inDir=Join-Path $comfy ('input\'+$inRel)
New-Item -ItemType Directory -Path $inDir -Force | Out-Null
$refs=@(
 @{file='01_opening.png';source=(Join-Path $run '卡3_镜1_店外离开_首帧.png');role='opening composition, Claire and bookstore'},
 @{file='02_duo_station.png';source='C:\work\ten-yuan-vault\Pasted image 20261029071905.png';role='Claire and Lucas at metro piano'},
 @{file='03_station.png';source='C:\work\ten-yuan-vault\LOC03-S01_地铁钢琴站台_二维手绘候选.png';role='metro piano environment'},
 @{file='04_studio.png';source='C:\work\ten-yuan-vault\Pasted image 20261030115223.png';role='card 1 studio flashback'},
 @{file='05_claire.png';source='C:\work\ten-yuan-vault\女主.png';role='Claire identity and clothing'},
 @{file='06_lucas.png';source='C:\work\ten-yuan-vault\男主.png';role='Lucas identity and clothing'}
)
$manifest=@()
foreach($r in $refs){if(!(Test-Path -LiteralPath $r.source)){throw "Reference missing: $($r.source)"};$dst=Join-Path $inDir $r.file;Copy-Item -LiteralPath $r.source -Destination $dst;$manifest += [ordered]@{source=$r.source;role=$r.role;comfy_input=($inRel+'\'+$r.file);sha256=(Get-FileHash -Algorithm SHA256 -LiteralPath $dst).Hash.ToLower()}}
$base=Get-Content -LiteralPath 'C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\EP01_1-12_Lucas_20261029\H3_ReferenceToVideo_API_workflow_v2.json' -Raw | ConvertFrom-Json -AsHashtable
$w=$base[2]
$nodeIds=@('6','7','8','19','20','21')
for($i=0;$i -lt $nodeIds.Count;$i++){$w[$nodeIds[$i]]=@{class_type='LoadImage';inputs=@{image=($inRel+'\'+$refs[$i].file)}}}
$bindings=[ordered]@{}
for($i=0;$i -lt $nodeIds.Count;$i++){$bindings[('ref_image_'+$i)]=@($nodeIds[$i],0)}
$w['9'].inputs.ref_images=$bindings
$w['9'].inputs.ref_image_size='match'
$w['9'].inputs.width=1024
$w['9'].inputs.height=576
$w['9'].inputs.length=345
$w['9'].inputs.prompt='Create ONE 14.3-second edited sequence with seven DISTINCT film shots in exact order; each shot fills the screen, never a grid. <Picture 1> is the opening composition: Claire alone walks away outside the green bookshop holding a cream envelope. <Picture 2> supplies Claire and Lucas at the metro piano. <Picture 3> supplies the metro piano platform architecture. <Picture 4> supplies the fashion studio for a short memory. <Picture 5> and <Picture 6> are exact Claire and Lucas character designs and clothing. Preserve Claire dark wavy hair and clips, gray striped sweater, headphones and backpack; Lucas dark wavy hair, navy jacket and white shirt. Maintain the referenced hand-drawn 2D style and stable adult proportions. SHOT 1, 0.0-1.6 seconds: exterior medium shot, Claire walks away alone holding the envelope. CUT. SHOT 2, 1.6-3.2 seconds: wide establishing view of the metro entrance, time elides, the same piano melody returns. CUT. SHOT 3, 3.2-5.4 seconds: metro medium-wide, Lucas plays the public piano alone, commuters pass without stopping. CUT. SHOT 4, 5.4-7.0 seconds: Claire side close-up, she sees Lucas across the crowd and stops. MATCH CUT. SHOT 5, 7.0-8.5 seconds: brief memory of the fashion studio from Picture 4, the classmate empty place and Claire lowering her hand. CUT BACK. SHOT 6, 8.5-11.7 seconds: medium-long two-shot, Claire approaches from the edge of the crowd and closes the distance to Lucas. CUT. SHOT 7, 11.7-14.3 seconds: close-up hands passing the cream envelope, then a two-person ending: Lucas stops playing, looks up and accepts, Claire, Lucas and the envelope visible together. Clear hard editorial cuts, restrained emotion and coherent piano motif. No dialogue, text, subtitles, invented central characters, costume changes, face redesign, red hair, magic effects, photorealism, 3D, split screens, storyboard grid or extra fingers.'
$w['11'].inputs.noise_seed=202610301431
$w['18'].inputs.filename_prefix='ten_yuan_envelope_h3_20261030/B1_EP1_03_7shots/Card3_7shots_345f'
$w | ConvertTo-Json -Depth 100 | Set-Content -LiteralPath (Join-Path $run 'H3_ReferenceToVideo_API_workflow.json') -Encoding utf8
$manifest | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath (Join-Path $run 'reference_manifest.json') -Encoding utf8
$payload=@{prompt=$w;client_id='codex-card3-seven-shots-20261030'} | ConvertTo-Json -Depth 100 -Compress
$posted=Invoke-RestMethod -Uri 'http://127.0.0.1:8188/prompt' -Method Post -ContentType 'application/json' -Body $payload -TimeoutSec 30
$promptId=$posted.prompt_id
if(!$promptId){throw "No prompt id: $($posted | ConvertTo-Json -Depth 6 -Compress)"}
Set-Content -LiteralPath (Join-Path $run 'prompt_id.txt') -Value $promptId -Encoding ascii
Write-Output "STARTED CARD3 7 shots prompt=$promptId native 345 frames"
for($i=0;$i -lt 240;$i++){
 Start-Sleep -Seconds 15
 $history=Invoke-RestMethod -Uri "http://127.0.0.1:8188/history/$promptId" -TimeoutSec 20
 $entry=$history.$promptId
 if($entry -and $entry.status.completed){
  if($entry.status.status_str -ne 'success'){$entry | ConvertTo-Json -Depth 30 | Set-Content -LiteralPath (Join-Path $run 'error.json') -Encoding utf8;throw "H3 failure: $($entry.status.status_str)"}
  $f=$entry.outputs.'18'.images[0];$src=Join-Path (Join-Path $comfy 'output') (Join-Path $f.subfolder $f.filename)
  if(!(Test-Path -LiteralPath $src)){throw "Missing H3 output: $src"}
  $dst=Join-Path $run '卡3_七镜_H3原始输出_345帧.mp4';Copy-Item -LiteralPath $src -Destination $dst
  [ordered]@{task='B1-EP1-03';prompt_id=$promptId;status='SUCCESS_CANDIDATE';native_frames=345;fps=24;raw_duration_seconds=14.375;output=(Split-Path $dst -Leaf);sha256=(Get-FileHash -Algorithm SHA256 -LiteralPath $dst).Hash.ToLower();input_manifest='reference_manifest.json';review='PENDING';production_gate='NOT_READY_FOR_H3_PACKET'} | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $run 'run_receipt.json') -Encoding utf8
  Write-Output "DONE $dst";exit 0
 }
 if($i % 4 -eq 3){Write-Output "WAIT minutes=$([math]::Round((($i+1)*15)/60,1))"}
}
throw "Timeout for $promptId"
