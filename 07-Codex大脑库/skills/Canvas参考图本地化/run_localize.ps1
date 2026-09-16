param(
  [Parameter(Mandatory=$true)]
  [string]$Canvas,

  [string]$AssetRel = "黎黎隆项目/场景视觉参考/assets/references",

  [string]$Output = ""
)

$ErrorActionPreference = "Stop"

$SkillDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $SkillDir "../../..")
$Script = Join-Path $SkillDir "scripts/localize_canvas_refs.py"
$Manifest = Join-Path $SkillDir "reference_manifest.json"

if (-not (Test-Path $Canvas)) {
  $candidate = Join-Path $RepoRoot $Canvas
  if (Test-Path $candidate) {
    $Canvas = $candidate
  } else {
    throw "找不到 Canvas: $Canvas"
  }
}

$argsList = @(
  $Script,
  "--canvas", $Canvas,
  "--manifest", $Manifest,
  "--vault-root", $RepoRoot,
  "--asset-rel", $AssetRel
)

if ($Output) {
  $argsList += @("--output", $Output)
}

Write-Host "[Canvas参考图本地化] RepoRoot = $RepoRoot" -ForegroundColor Cyan
Write-Host "[Canvas参考图本地化] Canvas   = $Canvas" -ForegroundColor Cyan
Write-Host "[Canvas参考图本地化] Assets   = $AssetRel" -ForegroundColor Cyan

python @argsList

if ($LASTEXITCODE -ne 0) {
  throw "本地化脚本失败，退出码：$LASTEXITCODE"
}

Write-Host "完成。现在参考图节点应已改成 type:file，不再依赖 Pinterest 登录预览。" -ForegroundColor Green
