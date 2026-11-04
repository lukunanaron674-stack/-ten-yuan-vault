$ErrorActionPreference='Stop'
$run='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\LIN313_EP1_SAGE20_首帧角色场景分镜_20261031'
$comfy='C:\ComfyUI_portable\ComfyUI_windows_portable\ComfyUI'
$vault='C:\work\ten-yuan-vault'
$inRel='ten_yuan_envelope_h3_20261031\LIN313_EP1_SAGE20_HybridRefs'
$inDir=Join-Path $comfy ('input\'+$inRel)
$outRel='ten_yuan_envelope_h3_20261031\LIN313_EP1_SAGE20_HybridRefs'
$outDir=Join-Path $comfy ('output\'+$outRel)
$pkg='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\01_任务卡\B1-EP1_H3_25镜逐镜描述词_生产包_V1_20261030.md'
$pkgHash=(Get-FileHash -Algorithm SHA256 -LiteralPath $pkg).Hash.ToLower()
New-Item -ItemType Directory -Path $run,$inDir,$outDir -Force | Out-Null
$jobs=@(
 [ordered]@{
  id='Card1'; first='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\LIN313_EP1_用户素材首帧_20261030\卡1_工作室合作_首帧.png'; frames=345; seed=202610301701; target=14.5; timing="seconds"; ranges="0-2.2`n2.2-4.2`n4.2-7.0`n7.0-9.7`n9.7-13.8`n13.8-14.375";
  refs=@(@{role='CHARACTER:Claire identity';path=(Join-Path $vault '女主.png');name='Card1_Claire.png'},@{role='SCENE+STORYBOARD:Paris fashion workshop action board';path=(Join-Path $vault 'Pasted image 20261030115223.png');name='Card1_WorkshopStoryboard.png'});
  events=@(
   '00-02.2s | 01-01: Wide establishing view inside the same fashion-design workshop. Claire and the classmate work at one shared table on the same dark fabric; Claire places one fabric piece in the shared work area. No cutting yet.',
   '02.2-04.2s | 01-02: Close insert on the classmates existing hand, scissors and Claires fabric. The scissors close exactly once and sever the crucial detail; the fabric edge falls visibly onto the table.',
   '04.2-07.0s | 01-03: Medium-close on Claire as she sees the cut, pulls back the same damaged fabric and faces the classmate with a controlled angry reaction. Complete torso and arm action; dialogue is added in post.',
   '07.0-09.7s | 01-04: Locked medium-wide on the same table and screen axis. Claire remains planted and continues the confrontation. The classmate stays visible at the edge of frame, frozen, looking down or lifting one defensive hand; nobody leaves. Keep the damaged fabric and both people in the same workshop.',
   '09.7-13.8s | 01-05: Locked close-to-medium close-up on Claire, still standing and visibly angry. She emphasizes the unresolved accusation with one controlled hand gesture; the classmate remains silent and partially visible at the edge. Hold the unresolved tension; no one exits and Claire does not soften into an apology.',
   '13.8-14.375s | 01-06 edit lead-in: Hold on the settled empty workshop image; the exact 0.7-second black is a post-production insert, do not generate text or a new shot.'
  );
  global='Use the attached first frame as the exact opening image and composition. Picture 2 is Claires approved identity and clothing reference. Picture 3 is the workshop scene and action-storyboard reference. Preserve Claire and her classmate as the same two people throughout, the existing dark fabric, scissors, table geometry and workshop. Hand-drawn 2D animation with clean dark ink lines, matte flat colors, restrained gentle shading and warm everyday Paris atmosphere; keep the supplied character proportions. Each timed beat is one full-screen shot in the listed order. Keep screen direction and action continuity. No split-screen or storyboard grid, no extra people, no costume or face redesign, no duplicate scissors or fabric, no legible text, no photorealism or 3D. No intelligible speech; dialogue and the final black are post-production.'
 },
 [ordered]@{
  id='Card2-1'; first='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\LIN313_EP1_用户素材首帧_20261030\卡2-1_街头_首帧.png'; frames=294; seed=202610301702; target=12; timing='seconds'; ranges="0-2.0`n2.0-4.2`n4.2-6.7`n6.7-9.5`n9.5-12.25";
  refs=@(@{role='CHARACTER:Claire identity';path=(Join-Path $vault '女主.png');name='Card2-1_Claire.png'},@{role='SCENE:Paris secondhand bookstore exterior';path='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\B1-EP1-02-1_街边场景_H3准备_20261030\街边书店正面_指定内景_用户确认.png';name='Card2-1_BookshopStreet.png'});
  events=@(
   '00-02.0s | 02-1-01: Full-body side profile. Claire walks alone in one established screen direction, shoulders slightly folded, holding her phone close.',
   '02.0-04.2s | 02-1-02 post insert: Close-up hand and phone. Claire types but does not send; the screen stays blank and stable for exact Chinese UI text to be composited later. Thumb hovers and withdraws; no send cue.',
   '04.2-06.7s | 02-1-03: Close three-quarter face. Her gaze moves from downcast to the side; a small breath and hesitation show disappointment without tears.',
   '06.7-09.5s | 02-1-04: Waist-up, same street axis. While walking, Claire first hears the piano phrase; one foot stops, upper body turns toward the bookshop, head lifts and eyes focus.',
   '09.5-12.25s | 02-1-05: Medium-wide. Claire approaches the same green second-hand bookshop, pushes the existing entrance door open once and steps inside; end on the doorway and bookshelves.'
  );
  global='Use the attached first frame as the exact opening image and composition. Picture 2 is Claires approved identity and clothing reference. Picture 3 is the approved Paris street and bookstore exterior reference. Preserve the green storefront, river-side Paris street geometry, Claires gray patterned sweater, dark hair, headphones and backpack. Hand-drawn 2D animation with clean ink lines, matte flat colors and restrained warm/cool shading; keep the supplied adult proportions and exact character identity. Follow every timed beat in order on the same travel axis. Do not show Lucas or invent a visible piano source. No readable phone text, no send action, no cuts outside the timed storyboard, no extra central characters, no costume or face redesign, no 3D or photorealism. Dialogue/UI are post-production.'
 },
 [ordered]@{
  id='Card2-2'; first='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\LIN313_EP1_用户素材首帧_20261030\卡2-2_书店_首帧.png'; frames=311; seed=202610301703; target=13; timing='seconds'; ranges="0-1.8`n1.8-3.5`n3.5-6.4`n6.4-8.5`n8.5-9.8`n9.8-11.4`n11.4-12.958";
  refs=@(@{role='CHARACTER:Claire identity';path=(Join-Path $vault '女主.png');name='Card2-2_Claire.png'},@{role='CHARACTER:Marcel identity';path=(Join-Path $vault '老板正选.png');name='Card2-2_Marcel.png'},@{role='SCENE:bookshop interior/storyboard';path=(Join-Path $vault 'Pasted image 20261028151014 2.png');name='Card2-2_BookshopInterior.png'},@{role='ACTION:Marcel reading in the bookshop';path=(Join-Path $vault 'Pasted image 20261030112908.png');name='Card2-2_MarcelReading.png'});
  events=@(
   '00-01.8s | 02-2-01: Stable medium inside the approved intimate bookshop. Claire notices one old book while Marcel is already quietly reading in the rear of the same composition.',
   '01.8-03.5s | 02-2-02: Near-top-down hands and single old book. Claire opens the page, reveals one paper envelope between the sheets and touches its edge once. Preserve its dimensions and orientation; no writing.',
   '03.5-06.4s | 02-2-03 VFX placeholder: Hold on the physical page and Claires attention as the subjective beat. Do not render a supernatural glow or change the object; leave any page/piano-shadow composite for separately reviewed post-production.',
   '06.4-08.5s | 02-2-04: Fixed extreme close-up. Claire leans closer in doubt, pauses, then her eyebrows rise and eyes open in genuine shock; no face distortion.',
   '08.5-09.8s | 02-2-05: Medium upper-body. Claire recoils once with a clear torso reaction and opens her mouth for one startled exclamation; spoken line is post-dubbed.',
   '09.8-11.4s | 02-2-06: Hard reaction shot on Marcel in his established chair. The scream interrupts him; he closes his book once, looks up and points toward the existing front door.',
   '11.4-12.958s | 02-2-07 conditional: At the established doorway, Claire ends outside as the door closes once. Do not show the envelope in her hand; ownership and carrying it out remain unconfirmed.'
  );
  global='Use the attached first frame as the exact opening image and composition. Picture 2 is Claires identity reference, Picture 3 is Marcels identity reference, and Picture 4 is the approved bookshop interior reference; Picture 5 shows Marcel quietly reading in the shop. Preserve the same faces, clothing, relative height, room geometry, chair, old book and one cream envelope. Hand-drawn 2D animation with clean ink outlines, matte flat colors and restrained warm shading; match the supplied adult proportions. Follow all time-coded beats in order. Keep the bookseller reading before the interruption. No invented writing, no duplicated envelope, no generated phone UI, no supernatural effect in the placeholder beat, no unapproved envelope carry, no extra people or costume/face redesign, no photorealism or 3D. Dialogue and any VFX are post-production.'
 },
 [ordered]@{
  id='Card3'; first='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\B1-EP1-03_七镜_14.3s_20261030\卡3_镜1_店外离开_首帧.png'; frames=345; seed=202610301704; target=14.3; timing='seconds'; ranges="0-1.6`n1.6-3.2`n3.2-5.4`n5.4-7.0`n7.0-8.5`n8.5-11.7`n11.7-14.375";
  refs=@(@{role='CHARACTER:Claire identity';path=(Join-Path $vault '女主.png');name='Card3_Claire.png'},@{role='CHARACTER:Lucas identity';path=(Join-Path $vault '男主.png');name='Card3_Lucas.png'},@{role='SCENE:Paris metro piano platform';path=(Join-Path $vault 'LOC03-S01_地铁钢琴站台_二维手绘候选.png');name='Card3_MetroPlatform.png'},@{role='STORYBOARD:Claire and Lucas at metro piano';path=(Join-Path $vault 'Pasted image 20261026011800 2.png');name='Card3_PianoComposition.png'},@{role='STORYBOARD:Claire and Lucas at metro piano';path=(Join-Path $vault 'Pasted image 20261029071905.png');name='Card3_MetroStoryboard.png'});
  events=@(
   '00-01.6s | 03-01: Rear three-quarter outside the same bookshop. Claire quietly turns away and walks alone, shoulders slightly drawn in; maintain envelope only as shown in the supplied first frame.',
   '01.6-03.2s | 03-02: Wide establishing view of a verified Paris metro entrance and descending stairs. This is a time-elision cut to another place; Claire walks a few steps down.',
   '03.2-05.4s | 03-03: Stable medium-wide metro piano tableau. Lucas plays alone at the existing public piano while a few commuters pass without stopping; leave the place beside the bench empty.',
   '05.4-07.0s | 03-04: Side-profile close-up across the passing crowd. Claire stops with one precise step and looks toward Lucas offscreen; keep their distance unclosed.',
   '07.0-08.5s | 03-05 memory match cut: Briefly recall the empty place in the fashion studio and Claire lowering her half-raised hand; return immediately to the metro.',
   '08.5-11.7s | 03-06: Medium-long two-character view along the same piano axis. Claire takes several continuous steps from the crowd edge and stops beside the piano while Lucas continues playing, unaware at first.',
   '11.7-14.375s | 03-07: Show one continuous envelope transfer from Claire to Lucas. Lucas lifts both hands from the keys, looks up and accepts with one hand; finish with both faces and the single envelope in a stable two-shot.'
  );
  global='Use the attached first frame as the exact opening image and composition. Picture 2 is Claires identity reference, Picture 3 is Lucass identity reference, Picture 4 is the metro-piano environment, Picture 5 is the approved piano composition, and Picture 6 is the two-character storyboard reference. Preserve Claires gray sweater, headphones and backpack; Lucass navy jacket and white shirt; the piano and metro architecture. Hand-drawn 2D animation, clean ink lines, matte flat colors, restrained shading and consistent adult proportions. Follow the listed time-coded beats in exact order. Use clear editorial transitions at the planned scene and memory changes; do not imply the bookstore and metro are adjacent. Keep the melody a recurring motif, not a proven continuous source. No extra people beyond sparse commuters, no face/costume redesign, no duplicated letter, no readable writing, no photorealism or 3D.'
 }
)
$jobs = @($jobs | Where-Object { $_.id -in @("Card2-2","Card3") })
$runRecords=@()
foreach($job in $jobs){
 $job.refs += @{role='STYLE:Claire close-up illustration style';path='C:\work\ten-yuan-vault\Pasted image 20261028100235.png';name=($job.id+'_ClaireCloseupStyle.png')}
 $stylePicture=$job.refs.Count+1
 $job.global += " Picture $stylePicture is the close-up illustration style reference: borrow its soft warm skin shading, expressive facial rendering, fine dark ink lines, natural hair detail and gentle matte texture. Keep each shot a single full-screen composition; never reproduce its contact sheet or panel grid. Keep character identity and costume from the separate identity references."
 $job.global=$job.global.Replace('Use the attached first frame','Use <Picture 1>')
 $job.global=[regex]::Replace($job.global,'(?<!<)Picture (\d+)(?!>)','<Picture $1>')
 $queue=Invoke-RestMethod -Uri 'http://127.0.0.1:8188/queue' -TimeoutSec 5
 if($queue.queue_running.Count -gt 0 -or $queue.queue_pending.Count -gt 0){
  $allowExistingCard1=($job.id -eq 'Card1' -and $queue.queue_running.Count -eq 1 -and $queue.queue_running[0][1] -eq 'e8fd9bf2-ef54-4f6f-a54f-cea5567fda8e' -and $queue.queue_pending.Count -eq 0)
  if(!$allowExistingCard1){throw 'ComfyUI queue is not empty; stopping before duplicate submission.'}
 }
 $firstPath=Join-Path $inDir ($job.id+'_firstframe.png'); Copy-Item -LiteralPath $job.first -Destination $firstPath -Force
 $inputRefs=@([ordered]@{role='FIRST_FRAME_AND_OPENING_STORYBOARD';source=$job.first;comfy_input=($inRel+'\'+(Split-Path $firstPath -Leaf));sha256=(Get-FileHash -Algorithm SHA256 -LiteralPath $firstPath).Hash.ToLower()})
 $api=@{}
 $api['1']=@{class_type='UNETLoader';inputs=@{unet_name='minimax_h3_ref2va_pruned_int8_convrot.safetensors';weight_dtype='default'}}
 $api['2']=@{class_type='CLIPLoader';inputs=@{clip_name='qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors';type='minimax';device='default'}}
 $api['3']=@{class_type='VAELoader';inputs=@{vae_name='minimax_h3_video_vae_int8_convrot.safetensors'}}
 $api['4']=@{class_type='VAELoader';inputs=@{vae_name='minimax_h3_audio_vae_fp32.safetensors'}}
 $timedPrompt=$job.global+"`n`nTIME-CODED STORYBOARD (follow in order; each range is one full-screen shot):`n"+($job.events -join "`n")
 $api['7']=@{class_type='MiniMaxH3AudioConditioningT8';inputs=@{clip=@('2',0);video_vae=@('3',0);audio_vae=@('4',0);prompt=$timedPrompt;width=736;height=416;length=$job.frames;task_type='Hybrid';audio_mode='native';audio_denoise_strength=0.35;add_source_as_reference=$false;prompt_primary_audio_ordinal=0;strict_prompt_tags=$true;ref_image_size='match';reference_video_policy='official_2_to_15s';first_frame=@('15',0)}}
 $api['15']=@{class_type='LoadImage';inputs=@{image=($inRel+'\'+(Split-Path $firstPath -Leaf))}}
 $next=16
 foreach($ref in $job.refs){
  if(!(Test-Path -LiteralPath $ref.path)){throw "Reference missing for $($job.id): $($ref.path)"}
  $refPath=Join-Path $inDir $ref.name; Copy-Item -LiteralPath $ref.path -Destination $refPath -Force
  $inputRefs+=,[ordered]@{role=$ref.role;source=$ref.path;comfy_input=($inRel+'\'+$ref.name);sha256=(Get-FileHash -Algorithm SHA256 -LiteralPath $refPath).Hash.ToLower()}
  $api["$next"]=@{class_type='LoadImage';inputs=@{image=($inRel+'\'+$ref.name)}}
  $api['7'].inputs[('ref_images.ref_image_'+($next-16))]=@("$next",0)
  $next++
 }
 $api['8']=@{class_type='MiniMaxH3DualClockSamplerT8';inputs=@{model=@('1',0);av_latent=@('7',1);steps=20;shift_video=12.0;shift_audio=3.0;sampler_name='dual_clock_euler';scheduler='native_flow'}}
 $api['9']=@{class_type='RandomNoise';inputs=@{noise_seed=$job.seed}}
 $api['10']=@{class_type='BasicGuider';inputs=@{model=@('8',0);conditioning=@('7',0)}}
 $api['11']=@{class_type='SamplerCustomAdvanced';inputs=@{noise=@('9',0);guider=@('10',0);sampler=@('8',1);sigmas=@('8',2);latent_image=@('7',1)}}
 $api['12']=@{class_type='MiniMaxH3AVDecodeT8';inputs=@{av_latent=@('11',0);video_vae=@('3',0);audio_vae=@('4',0)}}
 $api['13']=@{class_type='CreateVideo';inputs=@{fps=24.0;images=@('12',0);audio=@('12',1);bit_depth=8}}
 $prefix=($outRel+'\'+$job.id+'_'+$job.frames+'f') -replace '\\','/'
 $api['14']=@{class_type='SaveVideo';inputs=@{video=@('13',0);filename_prefix=$prefix;format='mp4';codec='h264'}}
 $apiPath=Join-Path $run ($job.id+'_Hybrid_API_workflow.json');$api | ConvertTo-Json -Depth 100 | Set-Content -LiteralPath $apiPath -Encoding utf8
 $inputRefs | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $run ($job.id+'_input_manifest.json')) -Encoding utf8
 $postBody=@{prompt=$api;client_id='codex-lin313-ep1-sage20-'+$job.id} | ConvertTo-Json -Depth 100 -Compress
 $posted=Invoke-RestMethod -Uri 'http://127.0.0.1:8188/prompt' -Method Post -ContentType 'application/json' -Body $postBody -TimeoutSec 30
 $promptId=$posted.prompt_id; if(!$promptId){throw "No prompt id for $($job.id): $($posted | ConvertTo-Json -Compress)"}
 Write-Output "STARTED $($job.id) prompt=$promptId frames=$($job.frames) refs=$($inputRefs.Count) steps=20 hybrid=first_frame_plus_refs local_events=$($job.events.Count)"
 $done=$false
 for($i=0;$i -lt 600;$i++){
  Start-Sleep -Seconds 15
  $history=Invoke-RestMethod -Uri "http://127.0.0.1:8188/history/$promptId" -TimeoutSec 20
  $entry=$history.$promptId
  if($entry -and $entry.status.completed){
   $entry | ConvertTo-Json -Depth 50 | Set-Content -LiteralPath (Join-Path $run ($job.id+'_history.json')) -Encoding utf8
   if($entry.status.status_str -ne 'success'){throw "H3 status $($entry.status.status_str) for $($job.id); see history JSON"}
   $media=$entry.outputs.'14'.images[0];$source=Join-Path (Join-Path $comfy 'output') (Join-Path $media.subfolder $media.filename)
   if(!(Test-Path -LiteralPath $source)){throw "Comfy output not found: $source"}
   $dest=Join-Path $run ($job.id+'_raw_'+$job.frames+'f.mp4');Copy-Item -LiteralPath $source -Destination $dest -Force
   $row=[ordered]@{task_id=('LIN313_EP1_'+$job.id+'_HYBRID_20261030');execution_class='LOCAL_CANDIDATE_PREVIEW';status='SUCCESS_CANDIDATE';prompt_id=$promptId;source_card=$job.id;source_package=$pkg;source_package_sha256=$pkgHash;first_frame=$job.first;reference_manifest=($job.id+'_input_manifest.json');reference_count=$inputRefs.Count;timed_event_count=$job.events.Count;frames=$job.frames;fps=24;native_duration_seconds=[math]::Round($job.frames/24,3);target_duration_seconds=$job.target;resolution='736x416';workflow=($job.id+'_Hybrid_API_workflow.json');output=$dest;output_sha256=(Get-FileHash -Algorithm SHA256 -LiteralPath $dest).Hash.ToLower();user_review='PENDING';production_gate='NOT_READY_FOR_H3_PACKET'}
   $runRecords+=,$row;$runRecords | ConvertTo-Json -Depth 10 | Set-Content -LiteralPath (Join-Path $run 'run_receipts.json') -Encoding utf8
   Write-Output "DONE $($job.id) native=$($row.native_duration_seconds)s output=$dest sha=$($row.output_sha256)";$done=$true;break
  }
  if($i%8 -eq 7){Write-Output "WAIT $($job.id) elapsed_minutes=$([math]::Round((($i+1)*15)/60,1))"}
 }
 if(!$done){throw "Timed out waiting for $($job.id), prompt $promptId"}
}
Write-Output 'ALL_EP1_HYBRID_CANDIDATES_DONE'












