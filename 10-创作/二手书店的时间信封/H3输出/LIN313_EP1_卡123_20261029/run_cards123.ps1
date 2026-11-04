$ErrorActionPreference='Stop'
$comfy='C:\ComfyUI_portable\ComfyUI_windows_portable\ComfyUI'
$run='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\LIN313_EP1_卡123_20261029'
$workflowPath='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\EP01_1-12_Lucas_20261029\H3_I2V_API_workflow_v3.json'
$ffmpeg='C:\ComfyUI_portable\ComfyUI_windows_portable\python_embeded\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe'
$workflowBase=Get-Content -LiteralPath $workflowPath -Raw | ConvertFrom-Json -AsHashtable
$inRel='ten_yuan_envelope_h3_20261029\LIN313_EP1_卡123'
$work=@(
  @{id='C1A'; title='卡1 工作室冲突'; frame='C1A_工作室冲突_首帧.png'; frames=175; seed=202610291301; prompt='Use the supplied first frame as the exact opening composition and visual style. Preserve Claire identity, long dark wavy hair, clips, gray patterned sweater, backpack and headphones, adult proportions; preserve the Paris fashion studio, fabric and classmate. One continuous medium-wide shot: the classmate cuts through Claires fabric; Claire quickly reaches to stop them, pulls back, looks hurt and angry, and says in clear Mandarin Chinese: 你根本不懂我的设计！ The classmate leaves the worktable. Keep gestures controlled and readable. Maintain same framing, room, lighting and painterly 2D anime look. No camera move, no cut, no outfit changes, no face/body redesign, no morphing, no extra fingers, no readable text, no subtitles, no logos.'},
  @{id='C1B'; title='卡1 未发出的道歉'; frame=''; frames=175; seed=202610291302; prompt='Continue from the supplied exact frame, maintaining Claire, outfit, fashion studio, lighting and painterly 2D anime style. One quiet continuous shot: after the classmate has gone, Claire sits alone at the worktable; she looks at the damaged fabric and her phone, types a short apology but hesitates and does not send it, then lowers the phone and stays still. Phone screen must remain unreadable. Subtle breathing and hand movement only, restrained emotion. Locked medium shot, no camera move, no cut, no new people, no redesign, no morphing, no extra fingers, no legible text, no subtitles.'},
  @{id='C2A'; title='卡2-1 街头听见琴声入店'; frame='C2A_巴黎街道入店_首帧.png'; frames=294; seed=202610291303; prompt='Use the supplied first frame as the exact opening composition. Preserve Claire identity and gray patterned sweater, hair, headphones, backpack; preserve the Paris street and secondhand bookshop exterior. One continuous street-level shot: Claire walks slowly with her phone lowered, hears a resonant piano melody from the secondhand bookshop, pauses and turns toward the music, then follows it and enters through the shop door. The bell gives a small ring as the warm interior shelves appear. Let curiosity replace her sadness. Natural subtle movement, same framing and warm textured 2D anime style; no readable phone text, no subtitles, no logos, no camera move, no cuts, no new central characters, no face/body redesign.'},
  @{id='C2B'; title='卡2-2 信件触发与Marcel赶人'; frame='C2B_书店信封触发_首帧.png'; frames=311; seed=202610291304; prompt='Use the supplied first frame as exact opening composition. Preserve Claires gray sweater, hair and adult proportions, the old bookstore and Marcel reading far in the background. One continuous medium-wide shot: Claire notices a worn book and sealed envelope, carefully opens the book and finds the envelope. A very brief nonliteral warm fantasy glimmer appears around the opened letter, then vanishes; keep it subtle and do not add recognizable people or readable writing. Claire recoils in disbelief and blurts What the fuck?! Marcel is startled, closes his book, stands and ushers her toward the door, pointing her out. End with Claire outside the shop holding the envelope. Keep actions clear and grounded, painterly 2D anime style, no camera move, no cuts, no extra people, no morphing, no legible text, no subtitles.'},
  @{id='C3A'; title='卡3-1 Lucas独自弹琴'; frame='C3A_站台独奏_首帧.png'; frames=243; seed=202610291305; prompt='Use the supplied first frame as exact opening composition. Preserve Claire in the gray sweater holding the cream envelope, Lucas in the navy jacket, and the quiet tiled Paris metro piano platform. One continuous wide shot: Lucas plays alone; a few distant commuters pass without stopping or noticing him. Claire watches from the foreground, pauses, remembers her own loneliness, grips the envelope and slowly walks toward him. Lucas continues playing, unaware until the end. Warm subdued station light, consistent textured 2D anime style and adult proportions. No camera move, no cuts, no new foreground people, no text, no subtitles, no morphing.'},
  @{id='C3B'; title='卡3-2 Claire递信给Lucas'; frame='C3B_递交信件_首帧.png'; frames=243; seed=202610291306; prompt='Use the supplied first frame as exact opening composition. Preserve Claires gray patterned sweater, long dark hair and headphones; preserve Lucass dark hair, navy jacket and the piano platform. Continue the gentle handover: Claire lets go of the cream envelope; Lucas takes it, stops playing, looks down at the envelope and then up at Claire with quiet surprise. Claire stays shy and sincere, no extra dialogue. Subtle hand, eye and breathing motion only; same warm textured 2D anime style and proportions. Locked medium-wide framing, no camera move, no cut, no magic effects, no readable writing, no subtitles, no face or clothing redesign, no morphing, no extra fingers.'}
)
$work=@($work | Where-Object { $_.id -ne 'C1A' })
$summary=@(Get-Content -LiteralPath (Join-Path $run 'run_receipts.json') -Raw | ConvertFrom-Json)
foreach($job in $work){
  if($job.id -eq 'C1B'){
    $source=Join-Path $run 'C1A_工作室冲突_首帧.png'
    $clip=Join-Path $run 'C1A_卡1 工作室冲突_175f.mp4'
    $tail=Join-Path $run 'C1A_尾帧续接.png'
    & $ffmpeg -hide_banner -loglevel error -sseof -0.05 -i $clip -frames:v 1 -update 1 $tail -y
    if($LASTEXITCODE -ne 0 -or !(Test-Path -LiteralPath $tail)){throw 'Failed to extract C1A tail frame'}
    Add-Type -AssemblyName System.Drawing
    $img=[Drawing.Image]::FromFile($tail); $bmp=[Drawing.Bitmap]::new(1024,576); $g=[Drawing.Graphics]::FromImage($bmp); $g.InterpolationMode=[Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic; $g.DrawImage($img,0,0,1024,576); $g.Dispose(); $img.Dispose(); $tailInput=Join-Path $comfy ('input\'+$inRel+'\C1B_未发道歉_接续首帧.png'); $bmp.Save($tailInput,[Drawing.Imaging.ImageFormat]::Png); $bmp.Dispose()
    $job.frame='C1B_未发道歉_接续首帧.png'
  }
  Write-Output "QUEUE $($job.id) $($job.title) frames=$($job.frames)"
  $w=$workflowBase | ConvertTo-Json -Depth 100 | ConvertFrom-Json -AsHashtable
  $w['6'].inputs.image="$inRel\$($job.frame)"
  $w['8'].inputs.prompt=$job.prompt
  $w['8'].inputs.length=$job.frames
  $w['10'].inputs.noise_seed=$job.seed
  $safeName=$job.id+'_'+($job.title -replace '[\\/:*?"<>|]','_')+'_'+$job.frames+'f'
  $w['17'].inputs.filename_prefix="ten_yuan_envelope_h3_20261029/LIN313_EP1_卡123/$safeName"
  $body=@{prompt=$w;client_id='codex-lin313-cards123-20261029'} | ConvertTo-Json -Depth 100 -Compress
  $posted=Invoke-RestMethod -Uri 'http://127.0.0.1:8188/prompt' -Method Post -ContentType 'application/json' -Body $body -TimeoutSec 30
  $promptId=$posted.prompt_id
  if(!$promptId){throw "No prompt_id for $($job.id): $($posted | ConvertTo-Json -Compress)"}
  Write-Output "STARTED $($job.id) prompt=$promptId"
  $done=$false
  for($i=0;$i -lt 1000;$i++){
    Start-Sleep -Seconds 15
    $hist=Invoke-RestMethod -Uri "http://127.0.0.1:8188/history/$promptId" -TimeoutSec 15
    $entry=$hist.$promptId
    if($entry -and $entry.status.completed){
      if($entry.status.status_str -ne 'success'){throw "H3 status $($entry.status.status_str) for $($job.id); prompt $promptId"}
      $fileInfo=$entry.outputs.'17'.images[0]
      $src=Join-Path (Join-Path $comfy 'output') (Join-Path $fileInfo.subfolder $fileInfo.filename)
      $dst=Join-Path $run ($safeName+'.mp4')
      if(!(Test-Path -LiteralPath $src)){throw "Comfy output missing: $src"}
      Copy-Item -LiteralPath $src -Destination $dst
      $hash=(Get-FileHash -Algorithm SHA256 -LiteralPath $dst).Hash.ToLower()
      $row=[pscustomobject]@{id=$job.id;title=$job.title;prompt_id=$promptId;frames=$job.frames;seconds=[math]::Round($job.frames/24,3);file=(Split-Path $dst -Leaf);sha256=$hash;status='SUCCESS_CANDIDATE'}
      $summary+=$row
      $summary | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $run 'run_receipts.json') -Encoding utf8
      Write-Output "DONE $($job.id) $($row.seconds)s $($row.file) sha256=$hash"
      $done=$true
      break
    }
    if($i % 8 -eq 7){ Write-Output "WAIT $($job.id) elapsed_minutes=$([math]::Round((($i+1)*15)/60,1))" }
  }
  if(!$done){throw "Timed out waiting for $($job.id) prompt $promptId"}
}
Write-Output 'ALL_RENDERED'
