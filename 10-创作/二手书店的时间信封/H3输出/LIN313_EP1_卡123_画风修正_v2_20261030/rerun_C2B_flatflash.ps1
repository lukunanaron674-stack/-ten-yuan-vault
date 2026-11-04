$ErrorActionPreference='Stop'
$comfy='C:\ComfyUI_portable\ComfyUI_windows_portable\ComfyUI'
$run='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\LIN313_EP1_卡123_画风修正_v2_20261030'
$workflowPath='C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\EP01_1-12_Lucas_20261029\H3_I2V_API_workflow_v3.json'
$wf=Get-Content -LiteralPath $workflowPath -Raw | ConvertFrom-Json -AsHashtable
$inRel='ten_yuan_envelope_h3_20261030\LIN313_EP1_卡123_v2'
$wf['6'].inputs.image="$inRel\C2B_书店信件_首帧.png"
$wf['8'].inputs.length=311
$wf['8'].inputs.prompt='Use the supplied first frame as the exact opening composition. Preserve Claire identity, gray patterned sweater, long dark hair and headphones; preserve the secondhand bookstore and the older bookseller reading in the background. One continuous medium-wide shot: Claire opens a worn book and finds a cream envelope. For a brief instant, a small hand-inked 2D doodle appears over the open page, then disappears; it is a simple flat line drawing, and the room lighting and colors remain completely unchanged. Claire reacts with surprise and blurts What the fuck. Marcel closes his book, stands and ushers her toward the door; finish outside with the envelope in her hand. Maintain the exact clean 2D TV-animation cel style of the Lucas character sheet: dark ink outlines, matte flat color areas, restrained two-tone shadows, low-saturation gray-brown palette, even neutral exposure. No visual glow, no brightness change, no golden bloom, no cinematic lighting, no 3D, no bokeh, no readable text or subtitles.'
$wf['10'].inputs.noise_seed=202610301307
$safe='C2B_stylefix_卡2-2_311f'
$wf['17'].inputs.filename_prefix="ten_yuan_envelope_h3_20261030/LIN313_EP1_卡123_v2/$safe"
$posted=Invoke-RestMethod -Uri 'http://127.0.0.1:8188/prompt' -Method Post -ContentType 'application/json' -Body (@{prompt=$wf;client_id='codex-lin313-stylefix-20261030'} | ConvertTo-Json -Depth 100 -Compress) -TimeoutSec 30
$id=$posted.prompt_id
if(!$id){throw 'No prompt id'}
Write-Output "STARTED C2B stylefix prompt=$id"
for($i=0;$i -lt 1000;$i++){
 Start-Sleep -Seconds 15
 $hist=Invoke-RestMethod -Uri "http://127.0.0.1:8188/history/$id" -TimeoutSec 15
 $entry=$hist.$id
 if($entry -and $entry.status.completed){
   if($entry.status.status_str -ne 'success'){throw "H3 failure: $($entry.status.status_str)"}
   $fi=$entry.outputs.'17'.images[0]
   $src=Join-Path (Join-Path $comfy 'output') (Join-Path $fi.subfolder $fi.filename)
   $dst=Join-Path $run 'C2B_stylefix_卡2-2_311f.mp4'
   Copy-Item -LiteralPath $src -Destination $dst
   $hash=(Get-FileHash -Algorithm SHA256 -LiteralPath $dst).Hash.ToLower()
   Write-Output "DONE C2B stylefix output=$($fi.filename) sha256=$hash"
   break
 }
 if($i -eq 999){throw 'Timed out waiting for C2B stylefix'}
 if($i % 8 -eq 7){Write-Output "WAIT C2B stylefix elapsed_minutes=$([math]::Round((($i+1)*15)/60,1))"}
}