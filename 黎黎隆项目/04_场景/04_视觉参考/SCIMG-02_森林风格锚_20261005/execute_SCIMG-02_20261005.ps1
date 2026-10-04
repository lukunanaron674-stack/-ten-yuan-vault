$ErrorActionPreference='Stop'
$base='http://127.0.0.1:8188'
$refName='SCIMG-02_R1-02_3e1aad5b2d44.png'
$out='C:\Users\19308\Documents\Obsidian\ten-yuan-vault\黎黎隆项目\04_场景\04_视觉参考\SCIMG-02_森林风格锚_20261005'
$receipt=Join-Path $out 'run_receipts.jsonl'
$manifest=Join-Path $out 'SCIMG-02_manifest.json'
if(Test-Path -LiteralPath $receipt){throw 'Receipt log exists; refusing duplicate run'}
if(Test-Path -LiteralPath $manifest){throw 'Manifest exists; refusing overwrite'}
$q=Invoke-RestMethod -Uri "$base/queue" -TimeoutSec 5
if($q.queue_running.Count -ne 0 -or $q.queue_pending.Count -ne 0){throw 'ComfyUI queue is not empty; no submission made'}
$ck=Invoke-RestMethod -Uri "$base/models/checkpoints" -TimeoutSec 5
$loras=Invoke-RestMethod -Uri "$base/models/loras" -TimeoutSec 5
if($ck -notcontains 'novaAnimeXL_ilV190.safetensors'){throw 'Required checkpoint missing from live ComfyUI model list'}
if($loras -notcontains 'lililong_candidates\lililong_scene_focus_v04_96.safetensors'){throw 'Required LoRA missing from live ComfyUI model list'}
$common='同一处森林湖岸的二维场景背景，沿用参考图中的森林、湖面、树根和雾山空间关系，不改变为另一个地点。前景为湿润岸石、低矮根系与少量草丛；中景为可读的湖岸通路、留出人物活动区和长机械龙尾扫动净空；远景为冷色湖面、雾层与低饱和山林。暖天空、冷水面，薄雾。色彩限制：骨白 #E8E2D8 用于亮部、树皮浅面和雾中结构；冷灰 #858D91 用于石材和雾山；炭黑 #292A2D 用于承力轮廓与遮挡；暗红 #82343D 只用于极少量人为维护或警示痕迹；烟紫 #81758C 仅用于少量软膜或异质生体细节；青蓝 #63B9C2 仅作为工作中的接口/感知信号，面积不超过3%。低饱和，背景松绘、形体概括清楚，前中后景分层明确。保持自然森林湖泊，不添加新建筑、港口、圆环遗迹、机械设施或新的世界机制。画面无角色，空间预留给后续角色走位。lililong_style, lililong_scene'
$shots=@(
 [pscustomobject]@{key='01_wide';label='全景建立镜头';desc='高处宽幅建立镜头，完整读到树根前景、大片湖湾中景、远处雾山；湖岸主通路从左前景自然延伸到中景，湖面占画面主体；构图留白充足，不能裁掉岸线。'},
 [pscustomobject]@{key='02_activity';label='中全景人物活动区';desc='中全景机位靠近湖岸通路，清楚显示中景空地与活动区，前景只有少量根系框景，湖面和雾山仍能认出是同一地点；横向留足人物站立和长尾横扫空间。'},
 [pscustomobject]@{key='03_overhead';label='顶视高机位空间关系';desc='高机位俯视同一湖岸转弯处，读清树根、岸线、浅水边界、通路和湖面的相对位置；保持二维背景的形状概括，不做地图符号或建筑平面图。'},
 [pscustomobject]@{key='04_layers';label='局部前中后景与树根湖岸';desc='局部场景镜头，前景树根和岸石，中景浅水边缘与通路，远景湖面和雾山三个层次同时可读；仍能认出是同一森林湖岸，不做纯材质特写。'}
)
$seeds=@([pscustomobject]@{label='seedA';value=[UInt64]2026100521},[pscustomobject]@{label='seedB';value=[UInt64]2026100522})
$negative='文字，字母，数字，标注，水印，logo，漫画分格线，拼贴边框，多地点拼图，重复场景，不同画风，人物，群像，赛博朋克霓虹，金铜蒸汽朋克，纯黑机甲，城市建筑，码头，圆环遗迹，紫膜机械，厚涂，写实照片，3D渲染，过度细碎笔触，高饱和，青蓝大片铺色，暗红大片铺色，紫色滤镜，失焦，低清晰度，压扁前中后景'
$tasks=@()
foreach($seed in $seeds){foreach($shot in $shots){$tasks+=,[pscustomobject]@{seedLabel=$seed.label;seed=[UInt64]$seed.value;shot=$shot.key;shotLabel=$shot.label;description=$shot.desc;filename="SCIMG-02_$($seed.label)_$($shot.key).png"}}}
$manifestObj=[ordered]@{action_id='SCIMG-02-20261005-01';issue='674-127';subtarget='SCIMG-02';status='PREPARED';channel='local ComfyUI 0.31.0 / RTX 3070 Laptop';checkpoint='novaAnimeXL_ilV190.safetensors';lora='lililong_candidates\lililong_scene_focus_v04_96.safetensors';lora_strength=@{model=0.65;clip=0.65};generation='reference edit';reference_path='C:\Users\19308\Documents\Obsidian\ten-yuan-vault\黎黎隆项目\04_场景\01_五色视觉系统\R1_场景配色\assets\R1-02_森林湖泊_双色主导.png';reference_sha256='3e1aad5b2d44cc3fc7143f953870b059183b99e1fe9700c82ca39be910413740';reference_note='Existing generated R1 palette-study candidate; used only as a scene-structure reference, not USER_APPROVED background';comfyui_input=$refName;resolution='1024x576';steps=20;cfg=5.5;sampler='euler';scheduler='normal';denoise=0.65;prompt_suffix='lililong_style, lililong_scene';negative_prompt=$negative;tasks=$tasks;results=@()}
[IO.File]::WriteAllText($manifest,(ConvertTo-Json -InputObject $manifestObj -Depth 12),[Text.UTF8Encoding]::new($false))
foreach($task in $tasks){
  $pos="$common $($task.description)"
  $prefix="SCIMG-02_20261005/$($task.seedLabel)_$($task.shot)"
  $wf=[ordered]@{
   '1'=@{class_type='CheckpointLoaderSimple';inputs=@{ckpt_name='novaAnimeXL_ilV190.safetensors'}}
   '2'=@{class_type='LoraLoader';inputs=@{model=@('1',0);clip=@('1',1);lora_name='lililong_candidates\lililong_scene_focus_v04_96.safetensors';strength_model=0.65;strength_clip=0.65}}
   '3'=@{class_type='CLIPTextEncode';inputs=@{text=$pos;clip=@('2',1)}}
   '4'=@{class_type='CLIPTextEncode';inputs=@{text=$negative;clip=@('2',1)}}
   '5'=@{class_type='LoadImage';inputs=@{image=$refName}}
   '6'=@{class_type='ImageScale';inputs=@{image=@('5',0);upscale_method='lanczos';width=1024;height=576;crop='center'}}
   '7'=@{class_type='VAEEncode';inputs=@{pixels=@('6',0);vae=@('1',2)}}
   '8'=@{class_type='KSampler';inputs=@{model=@('2',0);positive=@('3',0);negative=@('4',0);latent_image=@('7',0);seed=$task.seed;steps=20;cfg=5.5;sampler_name='euler';scheduler='normal';denoise=0.65}}
   '9'=@{class_type='VAEDecode';inputs=@{samples=@('8',0);vae=@('1',2)}}
   '10'=@{class_type='SaveImage';inputs=@{images=@('9',0);filename_prefix=$prefix}}
  }
  $wfPath=Join-Path $out "$($task.seedLabel)_$($task.shot)_workflow_api.json"
  [IO.File]::WriteAllText($wfPath,(ConvertTo-Json -InputObject $wf -Depth 20),[Text.UTF8Encoding]::new($false))
  $before=Invoke-RestMethod -Uri "$base/queue" -TimeoutSec 5
  if($before.queue_running.Count -ne 0 -or $before.queue_pending.Count -ne 0){throw "Queue became busy before $($task.filename); stopped before submit"}
  $body=ConvertTo-Json -InputObject @{prompt=$wf;client_id='codex-SCIMG-02-20261005'} -Depth 24 -Compress
  $bytes=[Text.Encoding]::UTF8.GetBytes($body)
  $submitted=Invoke-RestMethod -Uri "$base/prompt" -Method Post -ContentType 'application/json' -Body $bytes -TimeoutSec 30
  if(!$submitted.prompt_id){throw "ComfyUI did not return prompt_id for $($task.filename)"}
  $promptId=[string]$submitted.prompt_id
  $subrecord=[ordered]@{time=(Get-Date).ToString('o');action_id='SCIMG-02-20261005-01';subtarget='SCIMG-02';seed_label=$task.seedLabel;seed=$task.seed;shot=$task.shot;output_name=$task.filename;prompt_id=$promptId;state='submitted';workflow_file=$wfPath}
  [IO.File]::AppendAllText($receipt,(ConvertTo-Json -InputObject $subrecord -Compress)+"`n",[Text.UTF8Encoding]::new($false))
  Write-Output "SUBMITTED $($task.filename) prompt_id=$promptId seed=$($task.seed)"
  $terminal=$null
  for($n=0;$n -lt 240;$n++){
    Start-Sleep -Seconds 3
    $hist=Invoke-RestMethod -Uri "$base/history/$promptId" -TimeoutSec 5
    $entry=$hist.PSObject.Properties[$promptId].Value
    if($entry -and $entry.status -and $entry.status.completed){$terminal=$entry;break}
    if($entry -and $entry.status -and $entry.status.status_str -eq 'error'){$terminal=$entry;break}
  }
  if(!$terminal){$fail=[ordered]@{time=(Get-Date).ToString('o');prompt_id=$promptId;output_name=$task.filename;state='timeout';detail='No terminal history after 12 minutes'};[IO.File]::AppendAllText($receipt,(ConvertTo-Json -InputObject $fail -Compress)+"`n",[Text.UTF8Encoding]::new($false));throw "Timed out waiting for known prompt $promptId; will not resubmit"}
  if($terminal.status.status_str -ne 'success'){$fail=[ordered]@{time=(Get-Date).ToString('o');prompt_id=$promptId;output_name=$task.filename;state='error';status=$terminal.status.status_str;messages=$terminal.status.messages};[IO.File]::AppendAllText($receipt,(ConvertTo-Json -InputObject $fail -Compress)+"`n",[Text.UTF8Encoding]::new($false));throw "ComfyUI reported error for $promptId; no automatic retry"}
  $image=$terminal.outputs.'10'.images[0]
  if(!$image){throw "No SaveImage output recorded for prompt $promptId"}
  $source=Join-Path 'E:\ComfyUI_portable\ComfyUI_windows_portable\ComfyUI\output' (Join-Path $image.subfolder $image.filename)
  if(!(Test-Path -LiteralPath $source)){throw "History output file missing: $source"}
  $dest=Join-Path $out $task.filename
  if(Test-Path -LiteralPath $dest){throw "Candidate output already exists; refusing overwrite: $dest"}
  $sha=(Get-FileHash -Algorithm SHA256 -LiteralPath $source).Hash.ToLower()
  Copy-Item -LiteralPath $source -Destination $dest
  if((Get-FileHash -Algorithm SHA256 -LiteralPath $dest).Hash.ToLower() -ne $sha){throw "Copy hash mismatch for $dest"}
  $done=[ordered]@{time=(Get-Date).ToString('o');action_id='SCIMG-02-20261005-01';subtarget='SCIMG-02';seed_label=$task.seedLabel;seed=$task.seed;shot=$task.shot;output_name=$task.filename;source_output=$source;output_path=$dest;sha256=$sha;prompt_id=$promptId;state='candidate_generated'}
  [IO.File]::AppendAllText($receipt,(ConvertTo-Json -InputObject $done -Compress)+"`n",[Text.UTF8Encoding]::new($false))
  Write-Output "DONE $($task.filename) sha256=$sha"
}
$manifestObj.status='GENERATED_CANDIDATES'
$manifestObj.results=@(Get-Content -LiteralPath $receipt | ForEach-Object {ConvertFrom-Json $_} | Where-Object {$_.state -eq 'candidate_generated'})
[IO.File]::WriteAllText($manifest,(ConvertTo-Json -InputObject $manifestObj -Depth 12),[Text.UTF8Encoding]::new($false))
Write-Output "SCIMG-02 COMPLETE: $($manifestObj.results.Count)/8 candidate frames generated; no source asset overwritten."
