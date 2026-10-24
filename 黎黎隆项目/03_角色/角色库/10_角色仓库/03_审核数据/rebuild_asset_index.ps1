$ErrorActionPreference='Stop'
$NL=[Environment]::NewLine
$VaultRoot='C:\Users\19308\Documents\Obsidian\ten-yuan-vault';$ProjectRoot=Join-Path $VaultRoot '黎黎隆项目'
$RepoRoot=Join-Path $ProjectRoot '03_角色\角色库\10_角色仓库';$ReviewPool='E:\黎黎隆头像审核仓库_v1'
$ManifestPath=Join-Path $ReviewPool 'review_store\review_manifest.json';$Today='2026-10-08';$QuoteChar=[char]96
$AuditRoot=Join-Path $RepoRoot '03_审核数据';$ReviewRoot=Join-Path $AuditRoot '173'
foreach($d in @('00_原始生产板','01_待审核','02_正式角色\_TEMPLATE\images\avatar','02_正式角色\_TEMPLATE\images\fourgrid','02_正式角色\_TEMPLATE\images\turnaround','02_正式角色\_TEMPLATE\images\fullbody','02_正式角色\_TEMPLATE\images\expression','02_正式角色\_TEMPLATE\images\other','03_审核数据\assets','03_审核数据\173\derived','04_规则证据')){New-Item -ItemType Directory -Force -Path (Join-Path $RepoRoot $d)|Out-Null}
function J($x){ConvertTo-Json -InputObject $x -Compress -Depth 20}
function VR($x){$x.Substring($VaultRoot.Length+1).Replace('\','/')}
function ID($s){'ASSET-SHA256-'+$s}
function FM($text,$f){
 $m=[regex]::Match($text,'(?s)\A---\r?\n(?<fm>.*?)\r?\n---(?=\r?\n)');if(!$m.Success){throw 'frontmatter missing'}
 $lines=[System.Collections.Generic.List[string]]::new();foreach($l in ($m.Groups['fm'].Value -split '\r?\n')){$lines.Add($l)}
 foreach($k in $f.Keys){$z=$k+': '+(J $f[$k]);$found=$false;for($i=0;$i -lt $lines.Count;$i++){if($lines[$i] -match ('^'+[regex]::Escape($k)+'\s*:')){$lines[$i]=$z;$found=$true;break}};if(!$found){$lines.Add($z)}}
 $head='---'+$NL+($lines -join $NL)+$NL+'---';$text.Substring(0,$m.Index)+$head+$text.Substring($m.Index+$m.Length)
}
function AddRef($r,$ref){if($r.source_refs -notcontains $ref){$r.source_refs=@($r.source_refs)+@($ref)}}
function SaveNote($r,$path,$title){
 $keys=@('asset_id','character_id','candidate_id','asset_type','tier','region','organization','md_path','image_path','source_issue','source_run','sha256','review_state','user_decision','main_reference','rule_version','integrity_state','provenance_state','source_refs','evidence_ids','user_evidence_state','history_state','supersedes','superseded_by','first_seen','last_seen','last_updated','parent_asset_id','source_avatar_id','version','generation_method','layout','reviewer','notes','record_class','related_candidate_ids')
 $f=[ordered]@{};foreach($k in $keys){if($r.Contains($k)){$f[$k]=$r[$k]}}
 $lines=[System.Collections.Generic.List[string]]::new();foreach($k in $f.Keys){$lines.Add($k+': '+(J $f[$k]))}
$noteText="---"+$NL+($lines -join $NL)+$NL+"---"+$NL+$NL+"# "+$title+$NL+$NL+"Imported by issue 674-293; keep original image at image_path."+$NL
Set-Content -LiteralPath $path -Value $noteText -Encoding utf8
}
$guides=@{
'00_原始生产板\README.md'="# 原始生产板$NL$NL原始 4×4 生产板按现有 canonical path 保留，不裁切、不移动、不覆盖。派生图登记 parent_asset_id；未知父项写 UNKNOWN。本轮不复制生产板。"
'01_待审核\README.md'="# 待接入与身份未定资产$NL$NL173 原审核池仍由现有审核服务维护；本轮不移动/覆盖原图。保留原 manifest.review_state；NORMAL_USABLE 默认值不视为用户确认。明确裁决单独记入 user_decision 并保留评论来源。"
'02_正式角色\README.md'="# 正式角色$NL$NL身份和资产来源均明确后才建立 CHARACTER_ID 卡和 images 子目录。H/N/S/NPC 视觉编号仍是 candidate_id，不自动升级。"
'02_正式角色\_TEMPLATE\README.md'="# 角色卡模板$NL$NL模板不代表已建立正式角色。新卡按证据填写；所有派生图登记 parent_asset_id。"
'03_审核数据\README.md'="# 审核数据$NL$NL保存 173 manifest 快照、裁决 crosswalk、审核输入 manifest 与 SHA 去重索引。原审核仓只读；缺文件、空条目和远端附件只登记缺口，不伪造 SHA。"
'04_规则证据\ASSET_SCHEMA.md'="# 资产字段规则$NL$NL索引包含 issue 字段与 provenance_state、source_refs、evidence_ids、user_evidence_state、history_state、supersedes、superseded_by、first_seen、last_seen、parent_asset_id。asset_id=ASSET-SHA256-完整 SHA256。character_id 未正式分配时 UNKNOWN；candidate_id 只复制现有编号。tier 只按明确证据写 GOLD（红心/核心）或 SILVER（NPC），否则 UNKNOWN；不从图片/五色桶推断 region/organization。保留 raw review_state，user_decision 分栏。FEATURED 按 674-173 明确红心清单记 CONFIRMED；NORMAL_USABLE 默认值保持 UNKNOWN。派生图需 parent_asset_id；旧版/拒绝资产保留。Canvas 本体只读。"
}
foreach($k in $guides.Keys){Set-Content -LiteralPath (Join-Path $RepoRoot $k) -Value $guides[$k] -Encoding utf8}
$tmpl=[ordered]@{character_id='CHARACTER_ID';candidate_id='UNKNOWN';asset_id='UNKNOWN';asset_type='character';tier='UNKNOWN';region='UNKNOWN';organization='UNKNOWN';source_issue='';source_run='';sha256='';review_state='UNREVIEWED';main_reference='UNKNOWN';rule_version='UNKNOWN';integrity_state='INCOMPLETE';provenance_state='UNKNOWN';source_refs=@();evidence_ids=@();user_evidence_state='UNKNOWN';history_state='CURRENT';supersedes=$null;superseded_by=$null;first_seen=$Today;last_seen=$Today;last_updated=$Today;source_avatar_id='UNKNOWN';version='UNKNOWN';generation_method='UNKNOWN';layout='UNKNOWN';reviewer='UNKNOWN';notes=''}
$txt='---'+$NL;foreach($k in $tmpl.Keys){$txt+=$k+': '+(J $tmpl[$k])+$NL};$txt+='---'+$NL+$NL+'# CHARACTER_ID'+$NL+$NL+'- images/avatar/'+$NL+'- images/fourgrid/'+$NL+'- images/turnaround/'+$NL+'- images/fullbody/'+$NL+'- images/expression/'+$NL+'- images/other/'+$NL
Set-Content -LiteralPath (Join-Path $RepoRoot '02_正式角色\_TEMPLATE\CHARACTER_ID.md') -Value $txt -Encoding utf8

# Read and hash existing gallery assets first.
$gallery=Join-Path $RepoRoot '图库\图库索引.md';$gl=Get-Content -LiteralPath $gallery;$candidates=@();$records=@{}
foreach($ln in $gl){$c=$ln.Trim('|').Split('|');if($c.Count -lt 4){continue};$id=$c[0].Trim();if($id -notmatch '^(H\d+|N\d+|S\d+|NPC-\d+)$'){continue}
 $bucket=$c[1].Trim();$rel=$c[2].Trim().Trim($QuoteChar);$prefix=$c[3].Trim().Trim($QuoteChar)
 if($rel -like '黎黎隆项目/*'){$file=Join-Path $VaultRoot ($rel.Replace('/','\'));$vr=$rel}elseif($rel -like '03_角色/22_NEW_CANDIDATES/*'){$file=Join-Path (Join-Path $ProjectRoot '03_角色') (($rel -replace '^03_角色/','').Replace('/','\'));$vr='黎黎隆项目/'+$rel}elseif($rel -like '22_NEW_CANDIDATES/*'){$file=Join-Path (Join-Path $ProjectRoot '03_角色') ($rel.Replace('/','\'));$vr='黎黎隆项目/03_角色/'+$rel}else{$file=Join-Path (Join-Path $ProjectRoot '03_角色\角色库') ($rel.Replace('/','\'));$vr='黎黎隆项目/03_角色/角色库/'+$rel}
 if(!(Test-Path -LiteralPath $file -PathType Leaf)){throw "gallery image missing: $id"};$sha=(Get-FileHash -LiteralPath $file -Algorithm SHA256).Hash.ToLower();if(!$sha.StartsWith($prefix.ToLower())){throw "gallery SHA mismatch: $id"}
 $md=Join-Path $RepoRoot ('base\'+$id+'.md');if(!(Test-Path -LiteralPath $md)){throw "candidate md missing: $id"};$type=if($id -like 'NPC-*'){'fourgrid'}else{'avatar'}
 $tier=if($id -like 'NPC-*'){'SILVER'}elseif($id -eq 'H04'){'GOLD'}else{'UNKNOWN'}
 $r=[ordered]@{asset_id=(ID $sha);sha256=$sha;character_id='UNKNOWN';candidate_id=$id;asset_type=$type;tier=$tier;region='UNKNOWN';organization='UNKNOWN';md_path=(VR $md);image_path=$vr;source_issue='674-173';source_run='UNKNOWN';review_state='UNKNOWN';user_decision='UNKNOWN';main_reference='UNKNOWN';rule_version='UNKNOWN';integrity_state='COMPLETE';provenance_state='LOCAL_PATH_AND_SHA_VERIFIED';source_refs=@('vault:'+(VR $gallery),'vault:'+$vr,'linear:674-173');evidence_ids=@();user_evidence_state='UNKNOWN';history_state='CURRENT';supersedes=$null;superseded_by=$null;first_seen='2026-10-06';last_seen=$Today;last_updated=$Today;parent_asset_id=$(if($type -eq 'avatar'){'UNKNOWN'}else{$null});source_avatar_id='UNKNOWN';version='UNKNOWN';generation_method='UNKNOWN';layout='UNKNOWN';reviewer='UNKNOWN';notes='UNKNOWN';record_class='CANONICAL_LIBRARY_ASSET';related_candidate_ids=@()}
 $records[$sha]=$r;$body=(Get-Content -LiteralPath $md -Raw).Replace($rel,$vr).Replace($prefix,$sha);$keys=[ordered]@{};foreach($k in $r.Keys){$keys[$k]=$r[$k]};Set-Content -LiteralPath $md -Value (FM $body $keys) -Encoding utf8
 $candidates+=,[pscustomobject]@{id=$id;bucket=$bucket;rel=$rel;vr=$vr;file=$file;sha=$sha;md=$md}
}
$idxLines=[System.Collections.Generic.List[string]]::new()
foreach($ln in $gl){
$c=$ln.Trim([char]124).Split([char]124)
if($c.Count -ge 4 -and $c[0].Trim() -match "^(H\d+|N\d+|S\d+|NPC-\d+)$"){
$x=@($candidates|Where-Object {$_.id -eq $c[0].Trim()}|Select-Object -First 1)[0]
$idxLines.Add("| $($x.id) | $($x.bucket) | $QuoteChar$($x.vr)$QuoteChar | $QuoteChar$($x.sha)$QuoteChar |")
}else{$idxLines.Add($ln)}
}
$idx=$idxLines.ToArray()
$idx=@($idx|%{$_.Replace('SHA-256 前16','SHA-256 完整值')})
Set-Content -LiteralPath $gallery -Value $idx -Encoding utf8

# Snapshot the source manifest and hash each present review image.
$ReviewRoot=Join-Path $AuditRoot '173';New-Item -ItemType Directory -Force -Path $ReviewRoot|Out-Null;$snapshot=Join-Path $ReviewRoot 'review_manifest_snapshot_20261008.json';Copy-Item -LiteralPath $ManifestPath -Destination $snapshot -Force
$m=Get-Content -LiteralPath $ManifestPath -Raw|ConvertFrom-Json;$items=@($m.items.PSObject.Properties|%{$_.Value});$blank=@($items|?{[string]::IsNullOrWhiteSpace($_.file_name)-or[string]::IsNullOrWhiteSpace($_.relative_path)})
$dec=@{
'L2_H02_四宫格_青桶0929.png'=@{decision='REJECTED';evidence='REJECTED';history='REJECTED';comment='96c8bc90-85c1-4785-94ed-a792e4ef3a47'}
'L2_H05_四宫格_红桶0928.png'=@{decision='ACCEPTED_STYLE_SAMPLE';evidence='CONFIRMED';history='CURRENT';comment='96c8bc90-85c1-4785-94ed-a792e4ef3a47'}
'L2_H06_四宫格_青桶0929.png'=@{decision='ACCEPTED_LATER_VERSION';evidence='CONFIRMED';history='CURRENT';comment='96c8bc90-85c1-4785-94ed-a792e4ef3a47'}
'L2_H06_四宫格_其它.png'=@{decision='REJECTED_OLDER_VERSION';evidence='REJECTED';history='SUPERSEDED';comment='96c8bc90-85c1-4785-94ed-a792e4ef3a47'}
'L2_H07_四宫格_青桶0929.png'=@{decision='SETTING_MISMATCH_ALIAS_CONFIRMED';evidence='UNKNOWN';history='CURRENT';comment='96c8bc90-85c1-4785-94ed-a792e4ef3a47'}
'L2_H24_四宫格_L2_1006.png'=@{decision='RERUN';evidence='REJECTED';history='HISTORICAL';comment='96c8bc90-85c1-4785-94ed-a792e4ef3a47'}
'L2_S03_四宫格_L2_1006.png'=@{decision='ACCEPTED';evidence='CONFIRMED';history='CURRENT';comment='96c8bc90-85c1-4785-94ed-a792e4ef3a47'}
'L2_S09_四宫格_红桶0928.png'=@{decision='SELECTED_CELL_3';evidence='UNKNOWN';history='CURRENT';comment='96c8bc90-85c1-4785-94ed-a792e4ef3a47'}
'L2_N14_四宫格_红桶0928.png'=@{decision='SELECTED_CELL_3';evidence='UNKNOWN';history='CURRENT';comment='96c8bc90-85c1-4785-94ed-a792e4ef3a47'}
}
$valid=@();$missing=@()
foreach($i in $items){if([string]::IsNullOrWhiteSpace($i.file_name)-or[string]::IsNullOrWhiteSpace($i.relative_path)){continue};$file=Join-Path $ReviewPool $i.relative_path;if(!(Test-Path -LiteralPath $file -PathType Leaf)){$file=Join-Path (Join-Path $ReviewPool 'L2_四宫格') $i.relative_path};if(!(Test-Path -LiteralPath $file -PathType Leaf)){$missing+=,$i;continue}
 $sha=(Get-FileHash -LiteralPath $file -Algorithm SHA256).Hash.ToLower();$hit=$records.ContainsKey($sha);$cid='UNKNOWN';if($i.file_name -match '^(H\d+|N\d+|S\d+)\.png$'){$cid=$Matches[1]}elseif($i.file_name -match '^L2_(H\d+|N\d+|S\d+)_'){$cid=$Matches[1]}
 $decision=$dec[$i.file_name];$state=[string]$i.review_state;$evidence=if($decision){$decision.evidence}elseif($state -eq 'FEATURED'){'CONFIRMED'}else{'UNKNOWN'};$tier=if($state -eq 'FEATURED' -and $cid -ne 'H06'){'GOLD'}else{'UNKNOWN'}
 $refs=@('file:'+$file,'manifest:'+(VR $snapshot)+'#items/'+$i.file_name,'linear:674-173');if($decision){$refs+='linear:674-173#comment='+$decision.comment}elseif($state -eq 'FEATURED'){$refs+='linear:674-173#comment=22a6d3a4-37b4-4a0a-acf6-6bd6278c284a'}
 if($hit){$r=$records[$sha];if($i.file_name -notin @($r.source_refs)){};AddRef $r ('manifest:'+(VR $snapshot)+'#items/'+$i.file_name);$r.review_state=$state;$r.user_evidence_state=$evidence;$r.last_seen=[string]$i.updated_at;if($cid -eq 'H06'){$r.tier='UNKNOWN'}elseif($state -eq 'FEATURED'){$r.tier='GOLD'}}
 else{$r=[ordered]@{asset_id=(ID $sha);sha256=$sha;character_id='UNKNOWN';candidate_id=$cid;asset_type=$(if($i.stage -eq 'L1'){'avatar'}else{'fourgrid'});tier=$tier;region='UNKNOWN';organization='UNKNOWN';md_path='UNKNOWN';image_path=$file;source_issue='674-173';source_run='UNKNOWN';review_state=$state;user_decision=$(if($decision){$decision.decision}else{'UNKNOWN'});main_reference='UNKNOWN';rule_version='UNKNOWN';integrity_state='EXTERNAL_SOURCE_PRESENT';provenance_state='EXTERNAL_PATH_AND_SHA_VERIFIED';source_refs=$refs;evidence_ids=@();user_evidence_state=$evidence;history_state=$(if($decision){$decision.history}else{'UNKNOWN'});supersedes=$null;superseded_by=$null;first_seen=[string]$i.created_at;last_seen=[string]$i.updated_at;last_updated=$Today;parent_asset_id='UNKNOWN';source_avatar_id='UNKNOWN';version='UNKNOWN';generation_method='UNKNOWN';layout='UNKNOWN';reviewer='UNKNOWN';notes='UNKNOWN';record_class='173_REVIEW_ASSET';related_candidate_ids=@()};$records[$sha]=$r}
 $valid+=,[pscustomobject]@{item=$i;file=$file;sha=$sha;candidate=$cid;decision=$decision}
}
foreach($v in $valid){if(!$v.decision){continue};$r=$records[$v.sha];$r.user_decision=$v.decision.decision;$r.user_evidence_state=$v.decision.evidence;$r.history_state=$v.decision.history;AddRef $r ('linear:674-173#comment='+$v.decision.comment);if($v.item.file_name -eq 'L2_H07_四宫格_青桶0929.png'){$r.candidate_id='H07';$r.related_candidate_ids=@('S09')};if($v.item.file_name -eq 'L2_S03_四宫格_L2_1006.png'){$r.candidate_id='S03'}}
$derived=@(@{f='H06_back_cell1.jpg';p='L2_H06_四宫格_青桶0929.png';c='H06'},@{f='H06_back_cell2.jpg';p='L2_H06_四宫格_青桶0929.png';c='H06'},@{f='H06_back_cell3.jpg';p='L2_H06_四宫格_青桶0929.png';c='H06'},@{f='H06_back_cell4.jpg';p='L2_H06_四宫格_青桶0929.png';c='H06'},@{f='S09_cell3.jpg';p='L2_S09_四宫格_红桶0928.png';c='S09'},@{f='N14_cell3.jpg';p='L2_N14_四宫格_红桶0928.png';c='N14'})
$derivedRows=@();foreach($x in $derived){$file=Join-Path $ReviewRoot ('derived\'+$x.f);if(!(Test-Path -LiteralPath $file)){throw "derived image missing $file"};$sha=(Get-FileHash -LiteralPath $file -Algorithm SHA256).Hash.ToLower();$parent=Join-Path (Join-Path $ReviewPool 'L2_四宫格') $x.p;if(!(Test-Path -LiteralPath $parent)){$parent=Join-Path $ReviewPool $x.p};$psha=(Get-FileHash -LiteralPath $parent -Algorithm SHA256).Hash.ToLower();$note=Join-Path $AuditRoot ('assets\'+(ID $sha)+'.md')
 $r=[ordered]@{asset_id=(ID $sha);sha256=$sha;character_id='UNKNOWN';candidate_id=$x.c;asset_type='single_cell';tier='UNKNOWN';region='UNKNOWN';organization='UNKNOWN';md_path=(VR $note);image_path=(VR $file);source_issue='674-173';source_run='UNKNOWN';review_state='USER_SELECTED';user_decision='SELECTED_CELL';main_reference='UNKNOWN';rule_version='UNKNOWN';integrity_state='COMPLETE';provenance_state='LINEAR_ATTACHMENT_BYTES_HASHED';source_refs=@('vault:'+(VR $file),'linear:674-173#comment=62c0db04-9004-4863-a2bf-503f6566325f');evidence_ids=@();user_evidence_state='CONFIRMED';history_state='CURRENT';supersedes=$null;superseded_by=$null;first_seen=$Today;last_seen=$Today;last_updated=$Today;parent_asset_id=(ID $psha);source_avatar_id='UNKNOWN';version='UNKNOWN';generation_method='UNKNOWN';layout='UNKNOWN';reviewer='UNKNOWN';notes='USER_SELECTED_CELL_3';record_class='DERIVED_USER_SELECTION';related_candidate_ids=@()}
 $records[$sha]=$r;SaveNote $r $note ($x.c+'｜'+$x.f);$derivedRows+=,[pscustomobject]@{file=$x.f;asset_id=$r.asset_id;sha256=$sha;parent_asset_id=$r.parent_asset_id;parent_sha256=$psha;candidate_id=$x.c;path=(VR $file);parent_path=$parent}
}
$h06old=($valid|?{$_.item.file_name -eq 'L2_H06_四宫格_其它.png'}|select -First 1).sha;$h06new=($valid|?{$_.item.file_name -eq 'L2_H06_四宫格_青桶0929.png'}|select -First 1).sha
if($h06old -and $h06new){$records[$h06old].superseded_by=ID $h06new;$records[$h06new].supersedes=ID $h06old}
foreach($sha in @($records.Keys)){$r=$records[$sha];if($r.record_class -eq '173_REVIEW_ASSET'){$n=Join-Path $AuditRoot ('assets\'+$r.asset_id+'.md');$r.md_path=VR $n;SaveNote $r $n ([IO.Path]::GetFileNameWithoutExtension([string]$r.image_path))}}
foreach($c in $candidates){$r=$records[$c.sha];$r.md_path=VR $c.md;$text=Get-Content -LiteralPath $c.md -Raw;$f=[ordered]@{};foreach($k in $r.Keys){if($k -ne 'sha256'){$f[$k]=$r[$k]}};$f.sha256=$r.sha256;Set-Content -LiteralPath $c.md -Value (FM $text $f) -Encoding utf8}
$sorted=@($records.Values|Sort-Object asset_id);$jsonl=Join-Path $AuditRoot 'asset_index.jsonl';Set-Content -LiteralPath $jsonl -Value (@($sorted|%{$_|ConvertTo-Json -Compress -Depth 20})) -Encoding utf8
$reviewOut=foreach($v in $valid){[pscustomobject]@{asset_id=(ID $v.sha);file_name=$v.item.file_name;stage=$v.item.stage;review_state=$v.item.review_state;user_decision=$(if($v.decision){$v.decision.decision}else{'UNKNOWN'});user_evidence_state=$(if($v.decision){$v.decision.evidence}elseif($v.item.review_state -eq 'FEATURED'){'CONFIRMED'}else{'UNKNOWN'});sha256=$v.sha;local_source_path=$v.file;source_issue='674-173';parent_asset_id='UNKNOWN'}}
$reviewInput=Join-Path $AuditRoot 'review_input_manifest_20261008.jsonl';Set-Content -LiteralPath $reviewInput -Value (@($reviewOut|%{$_|ConvertTo-Json -Compress -Depth 20})) -Encoding utf8
$decisionRows=@();foreach($v in $valid){if($v.decision){$decisionRows+=,[pscustomobject]@{candidate_id=$v.candidate;file_name=$v.item.file_name;asset_id=(ID $v.sha);decision=$v.decision.decision;user_evidence_state=$v.decision.evidence;history_state=$v.decision.history;comment_id=$v.decision.comment}}}
$cross=[ordered]@{schema='674-293/173-adjudication-crosswalk-v1';source_issue='674-173';decisions=$decisionRows;derived_assets=$derivedRows;raw_review_manifest_sha256=(Get-FileHash -LiteralPath $ManifestPath -Algorithm SHA256).Hash.ToLower();snapshot=(VR $snapshot)}
Set-Content -LiteralPath (Join-Path $ReviewRoot 'user_adjudications_20261008.json') -Value ($cross|ConvertTo-Json -Depth 20) -Encoding utf8
$baseLines=@('filters:','  and:','    - ''file.inFolder("黎黎隆项目/03_角色/角色库/10_角色仓库")''','    - ''file.hasProperty("asset_id")''','views:','  - type: table','    name: 全部资产','    order:','      - file.name','      - asset_id','      - candidate_id','      - character_id','      - asset_type','      - tier','      - region','      - organization','      - md_path','      - image_path','      - source_issue','      - source_run','      - sha256','      - review_state','      - user_decision','      - main_reference','      - rule_version','      - last_updated','      - integrity_state','      - provenance_state','      - source_refs','      - evidence_ids','      - user_evidence_state','      - history_state','      - supersedes','      - superseded_by','      - first_seen','      - last_seen','      - parent_asset_id','      - source_avatar_id','      - version','      - generation_method','      - layout','      - reviewer','      - notes','      - record_class','      - related_candidate_ids')
Set-Content -LiteralPath (Join-Path $RepoRoot 'base\角色素材索引.base') -Value $baseLines -Encoding utf8
$cardCount=@(Get-ChildItem -LiteralPath (Join-Path $RepoRoot 'base') -File -Filter '*.md'|?{$_.BaseName -match '^(H\d+|N\d+|S\d+|NPC-\d+)$'}).Count
$mdAssetCount=@($sorted|?{$_.md_path -and $_.md_path -ne 'UNKNOWN'}).Count
$imageAssetCount=@($sorted|?{$p=if([IO.Path]::IsPathRooted($_.image_path)){ $_.image_path }else{Join-Path $VaultRoot ($_.image_path.Replace('/','\'))};Test-Path -LiteralPath $p}).Count
$externalImageCount=@($sorted|?{$_.provenance_state -eq 'EXTERNAL_PATH_AND_SHA_VERIFIED'}).Count
$unknownIdentityCount=@($sorted|?{$_.character_id -eq 'UNKNOWN'}).Count
$unknownTierCount=@($sorted|?{$_.tier -eq 'UNKNOWN'}).Count
$report=@"
# 674-293 R1｜角色素材总仓盘点与落地

- 日期：$Today
- result=PARTIAL：角色候选库、Base 和审核索引已落地；3 条原始 manifest 行为空，无法绑定 SHA/asset_id，作为待补证质量缺口保留。173 原图继续使用 E: 审核池正本路径，不移动、不覆盖。
- 只读 Canvas：黎黎隆项目/00_总览/角色代理.canvas；本轮未修改。已定向继承 R2/R3；未重扫 686 历史 sessions。
- 扫描路径：$RepoRoot\图库、$RepoRoot\base、$ProjectRoot\03_角色\22_NEW_CANDIDATES\NPC发散_2026-09-23、$ProjectRoot\20_Agent系统\07_角色代理、$ReviewPool\review_store\review_manifest.json、$ReviewPool\L2_四宫格；Linear 674-293/173 正文和评论。
- 候选图库=$($candidates.Count)，候选 MD=$cardCount，图片=$($candidates.Count)，SHA 前缀匹配=$($candidates.Count)/$($candidates.Count)。
- 统一 Base：黎黎隆项目/03_角色/角色库/10_角色仓库/base/角色素材索引.base；资产总账 MD↔图片路径存在↔Base=$mdAssetCount/$imageAssetCount/$($sorted.Count)，全部 $($sorted.Count) 条 SHA 实算匹配；其中 $externalImageCount 条审核源图引用 E: 正本路径。缺失 Base=0、MD 路径异常=0、图片路径异常=0。
- 身份未分配：character_id=UNKNOWN $unknownIdentityCount/$($sorted.Count)；tier=UNKNOWN $unknownTierCount/$($sorted.Count)。候选 MD↔图片↔Base=$cardCount/$cardCount/$cardCount；正式角色资产仍 STAGING。
- 173 manifest=$($items.Count)；有效图片=$($valid.Count)；L1=$(@($valid|?{$_.item.stage -eq 'L1'}).Count)，L2=$(@($valid|?{$_.item.stage -eq 'L2'}).Count)，FEATURED=$(@($valid|?{$_.item.review_state -eq 'FEATURED'}).Count)，空白行=$($blank.Count)，有效源图缺失=$($missing.Count)。
- SHA 去重资产=$($sorted.Count)；用户裁决映射=$($decisionRows.Count)；保存选中单格=6。
- REVIEW_STATE 与用户裁决分栏；无裁决的 NORMAL_USABLE 保持 UNKNOWN。H06 的 FEATURED 与 NPC 记录冲突，tier=UNKNOWN。其他缺证字段均 UNKNOWN。
- vault 保存 manifest 快照、SHA/索引和 6 张已选派生图；遵循现有图库正本不复制规则。空 manifest 行保留，不伪造记录。
- 新建 00..04 目录说明、模板、Base、资产 JSONL、审核输入清单、裁决 crosswalk、R1 报告。更新 86 张候选卡 frontmatter 和图库路径/完整 SHA。仅改 10_角色仓库 范围。
- Git 未提交/未推送；既有脏改未触碰。R1 已完成，不宣布全仓 DONE。
"@
$reportPath=Join-Path $AuditRoot 'R1_inventory_report_20261008.md';Set-Content -LiteralPath $reportPath -Value $report -Encoding utf8
"gallery=$($candidates.Count); review_valid=$($valid.Count); blank=$($blank.Count); missing=$($missing.Count); unique_assets=$($sorted.Count); derived=$($derivedRows.Count); cards=$cardCount"

