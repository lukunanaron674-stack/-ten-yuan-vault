param(
    [switch]$Manual
)

$ErrorActionPreference = 'Stop'
$TaskRoot = 'C:\Users\19308\Documents\Obsidian\ten-yuan-vault\黎黎隆项目\03_持续发散\角色文字任务'
$StatePath = Join-Path $TaskRoot 'other-character-state.json'
$LogPath = Join-Path $TaskRoot '其他角色十元发散_小时记录.md'
New-Item -ItemType Directory -Force -Path $TaskRoot | Out-Null

# 全部是候选文字，不改正式 Canvas。组合是角色专属工作假设，不是已锁定 canonical。
$Cards = @(
    [ordered]@{ id='O01'; character='大叔'; combo='xn+n'; variable='承载链'; title='巨臂先是身体，再成为外挂承载器'; body='大叔的瘦长松人体保留重心和疲劳感，单侧巨臂从肩胛、背部和腰部形成连续承载链。xn负责巨臂与人的现实错接，n负责人的迟缓与生活动作。巨臂不是武器展示，而是他搬、扶、挡、修东西时必须付出的身体代价。'; test='远景先读“松的人体+一侧重臂”，近景能说清肩背到地面的力线。'; reject='不能套用黎黎隆的尾部路线、锚定或尾根接口。' }
    [ordered]@{ id='O02'; character='大叔'; combo='xn+n'; variable='动作'; title='动作从不对称的准备时间开始'; body='大叔做同一件事时，正常侧先调整，巨臂侧后补偿：抬物先用腰和脚找支点，再让巨臂接管。xn只在接管瞬间暴露错接关系，n保留人的迟缓、疲劳和生活动作。'; test='抬、放、护三个动作都有“人先准备—臂后承接”的时间差。'; reject='不能让巨臂像黎黎隆的尾巴一样自由卷曲或表达情绪。' }
    [ordered]@{ id='O03'; character='塔汀'; combo='z→n→x'; variable='回返条件'; title='模块保存的不是人，而是返身条件'; body='塔汀以回返膜和维护条件为主机制。z先建立一个冷的保存/维护框，n是身体在框内缓慢恢复的生命过程，x只在错误回接处留下缺口。她的辨识点不是大尾，而是“能不能回到原来的身体状态”。'; test='画面中能明确看到保存、维护、拒绝错误回接三个阶段。'; reject='不能借黎黎隆的承力尾、尾尖寻找挂点或尾部表情。' }
    [ordered]@{ id='O04'; character='塔汀'; combo='z→n→x'; variable='接口特异性'; title='每个接口只认一个对象'; body='塔汀的回返膜不做通用护盾。z接口记录对象特异性，n身体提供可被辨认的细微反应，x在陌生对象强行接入时造成局部撕裂。设计重点是“拒绝错误的正确形状”，而非堆更多机械件。'; test='换入另一个角色的部件后，接口应明确拒绝而不是通用吸附。'; reject='不能变成万能治疗装置或平均分布的科技纹理。' }
    [ordered]@{ id='O05'; character='奇美拉'; combo='x+xz'; variable='飞行结构'; title='异形身体与错接结构共同决定翼臂'; body='奇美拉由x的异形身体出发，xz把翼臂、胸腔、后肢组织成能飞、抓取、压制的结构。主剪影是展开的翼臂与胸腔，不是尖刺集合。'; test='收翼、滑翔、抓取三姿态仍共享同一胸腔—翼臂主轴。'; reject='不能借用黎黎隆的“大尾体+偏心弧线”作为主剪影。' }
    [ordered]@{ id='O06'; character='奇美拉'; combo='x+xz'; variable='功能分区'; title='翅膀是手，胸腔是发动机，后肢是刹车'; body='奇美拉所有异形结构都服务动作：翼臂负责展开和抓取，胸腔承担呼吸与推进，后肢负责落地与压制。xz只在这些身体功能发生错接的位置出现，不平均铺开。'; test='删掉装饰后仍能指出哪一部分飞、抓、落地。'; reject='不能用尖刺、翅片和零件数量替代功能解释。' }
    [ordered]@{ id='O07'; character='小和尚'; combo='未定'; variable='仪式动作'; title='仪式动作先观察，不预设十元归属'; body='小和尚暂不分配专属十元组合。先记录服装轮廓、步法、手势以及旧装置回应的可观察关系，等待足够材料后再判断其十元结构。角色的主剪影来自衣摆和持姿，不来自机械附肢。'; test='不加对白也能看懂“准备—呼唤—装置回应”的三段动作。'; reject='不能把和尚强行归入黎黎隆或其他角色的十元组合。' }
    [ordered]@{ id='O08'; character='小和尚'; combo='未定'; variable='服装边界'; title='服装保存身份，裂口暴露世界不一致'; body='小和尚暂不分配专属十元组合。先观察服装承担身份、行动限制和旧缝不一致的方式；z/x/n的归属延后，不用猜测填空。'; test='远景读衣摆与持姿，近景才读裂口和装置接口。'; reject='不能使用黎黎隆的红色行动焦点和尾根护带作为默认模板。' }
    [ordered]@{ id='O09'; character='裂缝听者'; combo='z→x→n'; variable='听觉器官'; title='先听见模块，再让活体尾根追上来'; body='裂缝听者以z模块作为主动接收器，x把声音/信号切成错位片段，n活体尾根被迫绕着模块生长和修正。它的主剪影是听觉模块与尾根的反向牵引，不是黎黎隆的自由尾巴。'; test='静止画面也能看出模块在发出指令、尾根在被动追随。'; reject='不能使用黎黎隆的“尾巴表达情绪代价”机制。' }
    [ordered]@{ id='O10'; character='裂缝听者'; combo='z→x→n'; variable='控制关系'; title='模块发令，裂缝改写，活体补偿'; body='动作顺序固定为模块发令、裂缝造成偏差、活体尾根补偿。z接口越清楚，x错位越具体，n补偿越像生长而非机械展开。角色价值在于控制关系，不在于零件密度。'; test='每个动作姿态都能标出发令点、错位点和补偿点。'; reject='不能让尾根反过来成为像黎黎隆一样的主体路线。' }
)

$state = [ordered]@{ next_index = 0; last_run = $null; last_card = $null; mode = 'candidate_text_only' }
if (Test-Path -LiteralPath $StatePath) {
    try { $saved = Get-Content -Raw -LiteralPath $StatePath | ConvertFrom-Json; if ($null -ne $saved.next_index) { $state.next_index = [int]$saved.next_index } } catch { }
}
$card = $Cards[$state.next_index % $Cards.Count]
$stamp = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss zzz')

if (-not (Test-Path -LiteralPath $LogPath)) {
    @('# 其他角色十元发散｜小时记录', '', '- 黎黎隆专属 `zx + z + 点 xn` 不在本分支复用。', '- 仅候选文字，不写回正式角色 Canvas。', '- H3 / ComfyUI / 批量生图：未执行。', '') | Set-Content -LiteralPath $LogPath -Encoding UTF8
}

$block = @"
## $($card.id)｜$stamp｜$($card.character)｜专属候选：$($card.combo)｜只改变量：$($card.variable)

### $($card.title)

$($card.body)

- 验收：$($card.test)
- 冲突/淘汰：$($card.reject)
- 状态：`CANDIDATE_TEXT_ONLY`
- 说明：本条不改变正式十元、不改正式 Canvas、不启动生图。

"@
Add-Content -LiteralPath $LogPath -Value $block -Encoding UTF8

[ordered]@{ next_index=(($state.next_index + 1) % $Cards.Count); last_run=$stamp; last_card=$card.id; mode='candidate_text_only'; manual=[bool]$Manual } |
    ConvertTo-Json | Set-Content -LiteralPath $StatePath -Encoding UTF8
Write-Output ("RUN_OK card={0} character={1} combo={2} variable={3} log={4}" -f $card.id,$card.character,$card.combo,$card.variable,$LogPath)
