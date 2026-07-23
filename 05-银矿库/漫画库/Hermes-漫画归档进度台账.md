---
type: progress-log
status: active
updated: 2026-07-23T13:28+08:00
workflow: [[Hermes-漫画五大主题整理工单]]
task_list: [[Hermes-漫画五大主题任务清单]]
target_total: 499
pause_at_total: 250
first_theme_target: 因果型 zx+nx
---

# Hermes-漫画归档进度台账

用途：记录 Hermes / DeepSeek / Qwen 漫画归档试跑进度。达到暂停阈值后，先停下来给用户看流程和工作经验。

## 暂停阈值

| 条件 | 当前值 | 目标值 | 状态 |
|:----|---:|---:|---|
| 精修全名单总进度 | 53 | 250 | 活跃 |
| 因果型 zx+nx 完整主题 | 0 | 7 | 未开始 |
| 每 25 条流程记录 | 0 | 25 | 未开始 |
| DeepSeek 调用次数 | 0 | 越少越好 | 省 token 指标 |
| Obsidian 命中跳过次数 | 0 | 越多越好 | 省 token 指标 |
| Qwen/Ollama 压缩次数 | 0 | 按需 | 本地低成本处理 |

## 当前阶段

- 阶段：自动化核心已切换为“先穷举具体行为，再逐条唯一归类十元”；人物索引累计75部独立作品、96位人物对象
- 当前优先主题：人物层十元行为分析（作品五大主题只作背景）
- 当前优先批次：本轮完成 `端脑 / 历史之眼 / MPD Psycho` 3部、4位人物/人格对象、20条动作；旧第一至第八批旧口径清理闭合，下一轮转旧第九批别名复审
- 暂停策略：每轮控制 3-5 部；低置信度或双池冲突只写待二审，不 finalized。

## 因果型试跑台账

| 状态 | 漫画 | 评分 | DeepSeek | Qwen | Obsidian | 问题记录 |
|:---|---:|---:|---|---|---|---|
| 主角公开行为穷举复核完成 | Monster | 96 | 旧报告完成 | 未跑 | 人物索引+第三十七批报告 | 9条唯一归类；待完全版原卷页码 |
| 双人物行为穷举复核完成 | Watchmen | 96 | 旧报告完成 | 未跑 | 人物索引+第三十九批报告 | Ozymandias 8条、Rorschach 9条唯一归类；待第1—12章原页 |
| 主角行为穷举复核完成 | 端脑 | 94 | 20条批次正本 | 旧压缩完成 | 人物索引+第四十一批 | 夏驰5条；待关卡话次 |
| 主角行为穷举复核完成 | 历史之眼 | 93 | 20条批次正本 | 旧压缩完成 | 人物索引+第四十一批 | 欧迈尼斯7条；待原卷页码 |
| 双人格行为穷举复核完成 | MPD Psycho | 92 | 20条批次正本 | 旧压缩完成 | 人物索引+第四十一批 | 雨宫5条/西园3条；共享身体分层 |
| 双主角轻筛完成 | Low Tide in Twilight | 92 | 旧报告完成 | 旧压缩完成 | 人物索引+第九批报告 | 金懿玄/吕太洲已拆分；别名/维度待二审 |
| 主角行为穷举复核完成 | 进击的巨人 | 91 | 旧报告完成 | 未跑 | 人物索引+第三十九批报告 | Eren 7条唯一归类；待第25—26、31、34卷原页 |
| 主角行为穷举复核完成 | 宝石之国 | — | 旧报告完成 | 未跑 | 人物索引+第三十九批报告 | Phos 10条唯一归类；待第1—12卷指定原页 |

## 总进度记录

| 批次 | 数量 | 累计 | 范围 | 状态 | 备注 |
|:----|:---:|:---:|:-----|:----:|:-----|
| 0 | 0 | 0 | 试跑前 | 未开始 | 等待 Hermes/QQBot 启动 |
| 1 | 1 | 1 | Helter Skelter (本体型) | draft | 2026-07-08 cron 完成；待用户二审 |
| 2 | 1 | 2 | はめつのおうこく (本体型推定) | draft | 2026-07-08 cron 完成；B组待实读→推定完成；待用户二审 |
| 3 | 0 | 2 | 偽葬家の一族 (B组→来源待补卡，网络不可用) | draft | 2026-07-08 cron 完成；来源不足，仅标题分析 |
| 4 | 1 | 3 | 菌と鉄 (D组→推定完成：命运型主·本体型次) | draft | 2026-07-08 cron完成；来源充足(公式+新闻+设定)；推定命运型 置信70% |
| 5 | 1 | 4 | Idolatry (アイドラトリィ) — A组待归类→推定完成：空间型主·因果型次 置信65% | draft | 2026-07-08 cron完成；新连载仅1卷(2025.7~)；旧库96分虚高；MAL 7.56/204人 |
| 6 | 1 | 5 | 亜人(Ajin) — 因果型推定分析 | draft | 2026-07-08 cron完成；佐藤(鳄鱼)主zx辅x；核心发现: 不死终结 = 无限执行 |
| 7 | 1 | 6 | 友達だった人 (A组待归类→推定完成：命运型(xz+nz)主 确认 置信85%) | draft | 2026-07-08 cron完成；短篇1卷8话；旧库94分可能偏高，建议二审；核心发现: 余白=距离视觉化 |
| 8 | 1 | 7 | Genikasuri (げにかすり) — B组完全未知→推定完成：因果型(zx+nx)主·时间型(xn+z)次 置信80% | draft | 2026-07-08 cron完成；迫稔雄(嘘喰い作者)回归作；仅4卷进行中；MAL 7.40(评分人数不足)；核心发现: nx+zx在一部体育题材中延续了作者前作的精密计算风格 |
| 9 | 4 | 7 | A组/待实读4部预筛：スパダリ王子様の狂い愛、竜の番のキノコ姫、鬼狩り神社の守り姫、ほんとうに怖い中学受験 | prescreen | 2026-07-08 cron完成；仅更新队列说明，不改评分；最优先下一步为 ほんとうに怖い中学受験 时间型草案，其次 鬼狩り神社の守り姫 空间型低分参考复核 |
| 10 | 1 | 8 | ホストと社畜 (Host to Shachiku) — B组完全未知→推定完成：空间型(x并z+n)主·时间型(xn+z)次 置信75% | draft | 2026-07-08 cron完成；2024年连载、Kawajili作/画、月刊Action；仅256人MAL；核心发现: 容器生规则(n→xn)的日常漫画应用——两套社会时钟在牛丼店重叠；典评7/10 |
| 11 | 1 | 9 | Liar Game — 精修推定因果型(92分)正式分析完成 | draft | 2026-07-08 cron完成；MAL 8.24/127K成员/19卷；zx+nx教科书案例；核心发现: nx剥壳术(结算剥伪装)、规则边界zx(xn内部的执行缺口)、回收型动态链(付出→结算→归零) |
| 12 | 4 | 9 | B组低置信队列复审说明：ムサシノ輪舞曲、ヴァンパイドル滾、圣人女子事件、悪霊家族 | prescreen | 2026-07-08 cron完成；未改评分，仅补充主/次维验证点；下轮可从这4部中挑1-2部做正式Hermes草案 |
| 13 | 1 | 10 | Usogui (嘘喰い) — 因果型(zx+nx)完整分析 | draft | 2026-07-08 cron(2)完成；迫稔雄(Genikasuri作者)前作，49卷539话；MAL 8.70；核心发现: nx+zx教科书、nx剥壳术(结算剥伪装)、规则边界zx(xn内部的执行缺口)、回收型动态链；Usogui本体为纯因果，与Genikasuri(时间次维)形成有趣对比 |
| 14 | 4 | 10 | D组待实读轻量预筛：303号室の神さま、BAYARD、Live Memorium、UNDERGROUND | prescreen | 2026-07-08 cron完成；303号室の神さま→命运主/空间次候选72%，Live Memorium→时间主/本体次候选68%；BAYARD、UNDERGROUND 因作品ID歧义标 pending-source-check，已补入同名冲突复审队列；不改正式评分 |
| 15 | 1 | 11 | ほんとうに怖い中学受験 — B组完全未知→推定完成：时间型(xn+z)主 置信60% | draft | 2026-07-08 cron(2)完成；Champion Cross连载、浦川佳弥作；仅5话(2025.11~)、MAL未登録、AniList無スコア；公式紹介「中学受験をめぐる魑魅魍魎」。核心発見：受験制度がxn（規則）としての時間構造+親子の衝動zが制度に克たれる動態；5話しかないため推定は暫定的、実読後の再判定推奨 |
| 16 | 3 | 11 | B组3部复审收紧：ムサシノ輪舞曲、ヴァンパイドル滾、悪霊家族 | prescreen | 2026-07-08 cron完成；未改评分、不升finalized。ムサシノ輪舞曲→命运主/空间次66%，ヴァンパイドル滾→本体主/空间次70%，悪霊家族→空间主/命运次74%；圣人女子事件公开检索未稳定命中同名漫画，保留源文件回查 |
| 17 | 1 | 12 | 本なら売るほど — A组待归类→推定完成：本体型(zn+x)主 置信80% | draft | 2026-07-08 cron(3)完成；小島あお作、Kadocomi/KADOKAWA連載；2026年マンガ大賞+手塚治虫文化賞受賞；n→x呼吸型episodic、古書店日常；旧庫評分94/88/87/77→建議實讀後確認 |
| 18 | 4 | 12 | B组4部复审收紧 + 1源名回查：まなざし珠子の自由研究、アイツノカノジョ、ケツバトラー、战扬教室/戦奏教室；圣人女子事件 | prescreen | 2026-07-08 cron完成；まなざし珠子→本体/因果候选62%，アイツノカノジョ→命运/因果候选64%，ケツバトラー→本体/时间候选58%，战扬/戦奏教室→空间/因果候选60%；圣人女子事件因作品ID不稳改为source-check；未改评分 |
| 19 | 4 | 12 | D组旧源路径4部预筛：美大生・月浪縁の怪談、二月に殺して桜に埋める、多聞さんのおかしなともだち、飲み食い道楽～日本統一～ | prescreen | 2026-07-08 cron完成；美大生→因果/空间候选68%，二月→本体/时间候选72%，多聞さん→本体/空间候选76%，飲み食い道楽→空间/本体候选70%；旧源路径在精修名单存在但实体旧源文件当前 vault 未命中；未改评分、不升finalized |
| 20 | 1 | 13 | MONSTER (怪物) — 因果型(zx+nx)完整分析 | draft | 2026-07-08 cron(4)完成；浦泽直树代表作，18卷162话；MAL ~8.85(推测)/AniList 90/100K成员；核心发现: 因果螺旋链条(执行+结算的双线咬合)、善恶分岔口的重复结构、三股因果编绳结构；典评9.0/10(对应91-95分)；当前精选版96分可能偏高，建议用户二审 |
| 21 | 1 | 14 | 二月に殺して桜に埋める — D组旧源路径→推定完成：本体型(zn+x)主·时间型(xn+z)次 置信72% | draft | 2026-07-08 cron(5)完成；鳥トマト作、白泉社ヤングアニマル、1卷(2026-05-29発売)；AniList未登録(過新)；核心発見：zn被xz生(制度的压迫逼出的创伤性本体觉醒) + zn克xn(意义意志克制时间规则) — 本体型与时间型的经典骨架；典评6.8/10(推定级)；旧庫評分保留不修 |
| 22 | 4 | 14 | 同名冲突4簇同步：Orb / Gachiakuta / COSMOS / 逃げ上手の若君 | conflict-sync | 2026-07-08 cron(6)完成；补充同名冲突复审队列证据，并在总索引、时间/因果/命运主题页将旧低分行标为旧驳回或冲突隔离证据；未改正式评分、不合并作品ID；另同步二月从预筛升级为Hermes草案完成 |
| 23 | 1 | 15 | 悪霊家族 (Akuryou Kazoku) — B组复审收紧→推定完成：空間型(x并z+n)主·命運型(xz+nz)次 置信74%（維持） | draft | 2026-07-08 cron(7)完成；にしこ作、少年ジャンプ＋2025.11~；AniList無スコア(人気度3)；コメディホラー「一家全員幽霊＋心霊スポット化した家」；核心発見：容器(n)と表面(x并z)の補完構造が空間型のコア五對を形成；典評6.0/10（推定級、source不足により暫定）；創作テンプレート「容器×表面ギャップ」が有用 |
| 24 | 1 | 16 | アイツノカノジョ (Aitsu no Kanojo / Someone's Girlfriend) — B组待实读→正式推定分析完成：命運型(xz+nz)主·因果型(zx+nx)次 置信72% | draft | 2026-07-09 cron完成；肉丸(にくる)作、サンデーうぇぶり/小学館；8卷80话(2022.09~2025.11)；MAL 5.70/6655人；核心発見: 「位置X倒计时」叙事模板(xz↔nz交互补=9/10)、内化规则比外部规则更狠(xn生xz)、低评分命运型的创作启示；典評7.0/10（推定級、需実読後二審） |
| 25 | 1 | 17 | ヴァンパイドル滾 (Vampire-Idol Tagiru) — B组低置信候选→正式推定分析完成：本体型(zn+x)主·因果型(zx+nx)次 置信70% | draft | 2026-07-09 cron完成；島本和彦(燃えよペン)作、サンデーうぇぶり/小学館；5卷47话(2025.05~2026完)；AniList無スコア(人気57)；核心発見: 「滾」一字=z純度ラベル、設定の表面を超える作家の十元署名(島本のzn+xは設定によらない)、容器反転(地下劇場=表層否定形)；典評6.5/10（推定級、実読後再判定推奨） |
| 26 | 1 | 18 | 竜の番のキノコ姬 (Dragon's Mate Mushroom Princess) — A组待实读参考级→推定分析完成：命运型(xz+nz)主·本体型(zn+x)辅 置信62% | draft | 2026-07-09 cron完成；西音(Nishine)作、ヤンチャンWeb/秋田書店；ヤンチャンWeb连载、未确认卷数；AniList未登録(未収録)；核心発見:「蘑菇=情感可视化溢出」创作模板、甜命型命运譜系补充样本(轻喜剧×命运型体量边界)、番设定的逆用(蘑菰是被爱理由也是被排斥理由)；典評6.0/10（推定級、需実読後二審） |
| 27 | 1 | 19 | とりまとります (Torima Torimasu) — B组完全未知→推定完成：空間型(x并z+n)主·時間型(xn+z)次 置信58% | draft | 2026-07-09 cron(2)完成；TNSK作、マガポケ/アフタヌーン(講談社)；2025.08~連載中、AniList人気度38(未スコア)；核心発見: 表面空間(x并z)と裏空間(nz/xz)の往復構造、古いメディア(ビデオテープ)=時間の容器(xn)；極初期連載のため今後の展開で方向転換の可能性大；典評暫定なし(1話のみ) |
| 28 | 1 | 20 | まなざし珠子の自由研究 — B组完全未知→推定完成：本体型(zn+x)主·因果型(zx+nx)次 置信72% | draft | 2026-07-09 cron(3)完成；Tarou Nogizaka作、2025.12~連載；AniList未スコア(新鋭・未収録)、MAL未登録；核心発見: まなざし/跳躍の身体二重性、火傷の痕=存在刻印セット、死者蘇生=垂直方向の物語；典評6.8/10（推定級、実読後二審推奨） |
| 29 | 1 | 21 | 鬼狩り神社の守り姫 — A组待归类→推定分析完成：空間型(x并z+n)主·命運型(xz+nz)辅·本体型(zn+x)底 置信68% | draft | 2026-07-09 cron(4)完成；西音(Nishine)作、カドコミ/KADOKAWA、連載中(未収録)；AniList人気度11/無スコア；核心発見: 容器补表面(n↔x并z)補對8.0/10、神社容器低振动日常型空間模板；典評6.4/10推定級；旧庫77分參考級定位合理 |
|| 30 | 1 | 22 | Gizmorizer (ギズモライザー, formerly "Gizmo-Riser" in pending list) — B组完全未知→推定完成：因果型(zx+nx)主·命运型(xz+nz)次 置信78% | draft | 2026-07-09 cron(5)完成；早名ロク(Roku Souna)作、マグコミ/マッグガーデン；2卷10话(2024.05~2025.05完)；AniList無スコア(人気度26)；核心発見: 「攀爬=结算(垂直zx否定)」叙事模板、机械手套=执行器官外置(zx可視化)、阶层容器(塔层关卡)设计；典評7.5/10（推定級、短2卷完結のため最適情報密度）|
|| 31 | 1 | 23 | ケツバトラー (Ketsu Battler) — B组复审收紧→正式推定分析完成：本体型(zn+x)主·空間型(x并z+n)次 置信62% | draft | 2026-07-09 cron(6)完成；高出直隆(Naotaka Takade)作、週刊コロコロ/小学館；2024.12~連載中(未収録)；Switchゲームタイアップ；AniList無スコア(人気度26)；核心発見: 「尻＝逆転した身体境界」創作テンプレート——body gagの十元的軽さ(zn+x)はコロロ漫画のシグネチャー；時間型から空間型への修正(コロロ系バトルにxn規則性は薄い)；典評6.0/10（推定級、極初期連載のため実読後再判定推奨）|
|| 32 | 1 | 24 | 多聞さんのおかしなともだち (Tamon-san no Okashi na Tomodachi) — D组旧源路径→推定分析完成：本体型(zn+x)主·空間型(x并z+n)次 置信78% | draft | 2026-07-09 cron(7)完成；Toi You(トイ・ヨウ)作、カドコミ/KADOKAWA；2巻12話(2024.05~2025.04完結)；AniList meanScore 57/人気134；核心発見: 「包容下的存在裂缝」創作模板——完全包容環境(クィア家庭)での本体追问、純存在の角色化(xの小生物)、双容器対比構造(n↔x并z)；典評6.9/10（推定級、需実読後二審）|
    83||| 33 | 1 | 25 | 303号室の神さま (303-goushitsu no Kamisama) — D组待实读(D组旧源路径已预筛)→推定分析完成：空間型(x并z+n)主·命運型(xz+nz)次 置信70% | draft | 2026-07-09 cron(8)完成；ふに・無9作、カドコミ/KADOKAWA；3巻29話(2023.12~2026.05完)；AniList 54(mean 67)/人気689；核心発見: n↔x并z補對9.0——偶発的神さま役割(x并z)と303号室容器(n)の補完構造が空間型のコア五對を形成；典評7.0/10（推定級、実読後二審推奨）|
    84|| 34 | 1 | 26 | 美大生・月浪縁の怪談 (Bidaisei Tsukinami Youga no Kaidan) — D组旧源路径(预筛済)→推定分析完成：空間型(x并z+n)主·命運型(xz+nz)次·本体型(zn+x)辅 置信68% | draft | 2026-07-09 cron(9)完成；幹本ヤエ作、チャンピオンクロス/秋田書店；2025.03~連載中(10話)；AniList無スコア(人気度24)；核心発見: 怪談=空間的壞血(nの異化)、写真表面(x并z)与場域容器(n)の補完構造、美大場域内の2つの「見方」(映像科×日本画科)；典評6.8/10（推定級、実読後二審推奨）|
| 35 | 1 | 27 | カグライ～神楽と雷人～ (KaguRai: Kagura to Raito) — B组完全未知+同名冲突→因果型(zx+nx)主·命運型(xz+nz)次·本体型(zn+x)辅 推定分析完成 置信78% | draft | 2026-07-09 cron(10)完成；レタス太郎(原作)/ましゅ太郎(作画)、少年サンデー/Webサンデー(小学館)；連載化(読切好評→連載)；AniList meanScore 67/pop 1029；核心発見: 「再会のために剣を取る」はzx+nx因果構造、旧庫「命運型94分：陰陽交替」はタイトル意象によるF12誤判；典評7.0/10（推定級、實読後二審推奨）；同名衝突：短名カグライ(命運型94分)と本分析の長标题は同作品→主維修正提案|
| 36 | 1 | 28 | Homunculus (ホムンクルス) — 本体型(zn+x)主·命运型(xz+nz)次 推定分析完成 置信82% | draft | 2026-07-09 cron(11)完成；山本英夫(Hideo Yamamoto)作、小学館Big Comic Spirits；15卷166話(2003~2011完)；MAL 83/Pop 70K；核心発見: 钻孔=存在開眼(zn可视化)、「車内永遠の16歳」=nz凝固傷口、山本英夫の作者署名zn+xzを3作跨ぎ確認；典評8.5/10推定級（旧庫91分、典評8.5→建議実読後再評定）；作者十元签名法: 殺手阿一+Voynich酒店+Homunculus 皆zn+xz|
|| 36 | 1 | 29 | Low Tide in Twilight (물가의 밤) — 因果型试跑台账→推定分析完成：因果型(zx+nx)主·命运型(xz+nz)次 置信70% | draft | 2026-07-09 cron(12)完成；BL/Omegaverse/韓国Webtoon；117話(2021.12~2026.01完)；AniList meanScore 76/pop 5846；核心発見: nx債務作为因果引擎、身体的价格化(nx×x的视觉化)、弟弟作为非债务承载点(n)；典評6.8/10（推定級、需実読後二審）
|| 37 | 1 | 30 | Phoenix (火の鳥 / Hi no Tori) — 本体型(zn+x)主·命运型(xz+nz)次 推定分析完成 置信85% | draft | 2026-07-09 cron(13)完成；手塚治虫毕生代表作，16卷134話(1966~1988)；AniList 84/85/Pop 9679；核心発見: zn↔x補對9.0作为叙事引擎(意义给欲望方向，欲望给意义燃料)、容器切换机制作为叙事结构、循环再生型动态链已提取为创作模板；典評9.0/10(推定級，与精选版97分一致)
| 38 | 4 | 46 | 本体A组4部轻筛：藤本树短篇集、恶魔人、ODD TAXI、新宝岛 | prescreen | 2026-07-17 自动化完成；按用户新口径补十元生克补/动态链候选。藤本树短篇集→本体主·时间次·因果辅；恶魔人→本体主·命运次·因果辅；ODD TAXI→本体主候选·因果次，主次需二审；新宝岛→本体主·时间次·空间辅。不改正式评分、不finalized。 |
| 39 | 4 | 50 | 本体A组4部轻筛：Jimmy Corrigan、怪医黑杰克、钻石王牌、The Summer Hikaru Died | prescreen | 2026-07-17 自动化完成；按用户新口径补十元生克补/动态链候选。Jimmy Corrigan→本体主·时间次·命运辅；怪医黑杰克→本体主·因果次·命运辅；钻石王牌→本体主候选·时间次·空间辅，主次需二审；The Summer Hikaru Died→本体主·命运次·空间辅。不改正式评分、不finalized。 |
| 40 | 3 | 53 | 本体/时间收口3部：Toxy Noxy Foresty、20世纪少年、PLUTO；另入队钻石王牌 | prescreen | 2026-07-17 自动化完成；Toxy→本体主候选·空间次·命运辅，源名/实读待二审；20世纪少年→时间主·因果次·命运辅；PLUTO→时间主候选·因果次·本体辅，主次需二审；钻石王牌入维度冲突队列。不改正式评分、不finalized。 |
| 41 | 4 | 53 | 源名/媒介收紧4项：Gachiakuta、カグライ、蓝眼武士、BAYARD | conflict-sync | 2026-07-17 自动化完成；Gachiakuta/ガチアクタ 与 カグライ/カグライ〜神楽と雷人〜 升为高置信别名+维度冲突；蓝眼武士新增媒介风险队列项；BAYARD 继续短名 source-check。不改评分、不合并作品ID、不finalized。 |

## 每 25 条复盘记录

| 累计 | DeepSeek 次数 | Obsidian 跳过 | Qwen 次数 | 判断质量 | 写入问题 | 低置信度/错误 |
|:---|---:|---:|---:|---|---|---|
| 25 | 0(AniList直查) | 33(全部直查) | 0 | 高 | 全正常 | 0 |
| 50 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 75 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 100 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 125 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 150 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 175 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 200 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 225 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |
| 250 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 | 待记录 |

## Hermes 更新规则

每处理完一部漫画，Hermes 应更新：

- 因果型试跑台账中的状态。
- 总进度记录中的累计数量。
- 若该条进入待二审，要在问题记录写明原因。
- 若 DeepSeek 或 Qwen 输出空泛、跑题、改分数、改理论判断，要记录为流程问题。

暂停条件触发时：

1. 停止继续调用 DeepSeek。
2. 不再写 finalized。
3. 汇总本页问题记录。
4. 返回 QQBot/用户一份流程复盘。

## 复盘输出模板

```md
## 漫画归档试跑复盘

- 已处理：
- 完整主题：
- DeepSeek 判断质量：
- Qwen 压缩质量：
- Hermes 路由问题：
- Obsidian 写入问题：
- 低置信度/待二审：
- 建议修正：
```

## status update - 2026-06-03 01:42:13

- manga: Monster
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:42:13

- manga: Watchmen
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:42:13

- manga: 端脑
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:42:13

- manga: 历史之眼
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:42:13

- manga: MPD Psycho
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:43:56

- manga: Low Tide in Twilight
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-06-03 01:43:56

- manga: 进击的巨人
- status: review
- note: DeepSeek analyzed; Qwen compressed to Obsidian review inbox

## status update - 2026-07-10 01:41:20

- manga: 火鸟 / 火の鳥 / Phoenix
- status: hermes_analysis_done_20260709
- note: 已回查 2026-07-09 标准化同步；CSV/JSONL 机器清单由 pending_standardization 改为已分析，obsidian 标记 theme_index_written；保留97分，不改最终归仓。

## status update - 2026-07-10 01:41:20

- manga: Homunculus / ホムンクルス
- status: hermes_analysis_done_20260709_review_score
- note: 已把 Hermes 草案摘要同步到总索引、本体主题页、Markdown/CSV/JSONL 任务清单；主维本体 zn+x、次维命运 xz+nz，旧库91分保留但标记评分待实读二审。

## status update - 2026-07-10 01:57:42

- manga: BLUE GIANT
- status: prescreen_done_20260710
- note: 本轮只做轻量预筛；主维本体 zn+x，次维时间 xn+z，空间为舞台/乐队容器；100分保留，待Hermes深分析，不写finalized。

## status update - 2026-07-10 01:57:42

- manga: 灌篮高手
- status: prescreen_done_20260710
- note: 本轮只做轻量预筛；主维本体 zn+x，次维时间 xn+z，空间为球场容器；98分保留，待Hermes深分析，不写finalized。

## status update - 2026-07-10 01:57:42

- manga: Vagabond
- status: prescreen_done_20260710
- note: 本轮只做轻量预筛；主维本体 zn+x，次维命运 xz+nz，因果为决斗执行链；98分保留，待Hermes深分析，不写finalized。

## status update - 2026-07-10 01:57:42

- manga: Maus
- status: prescreen_done_20260710
- note: 本轮只做轻量预筛；主维本体 zn+x，次维时间 xn+z，命运为创伤继承辅维；97分保留，待Hermes深分析，不写finalized。

## status update - 2026-07-10 02:18:00

- manga: 链锯人
- status: prescreen_done_20260710
- note: 本轮只做轻量预筛；主维本体 zn+x，次维命运 xz+nz，因果为契约/猎杀执行链；96分保留，待Hermes深分析，不写finalized。

## status update - 2026-07-10 02:18:00

- manga: 地。关于地球的运动。
- status: prescreen_done_20260710_alias_review
- note: 本轮只做轻量预筛；主维本体 zn+x，次维时间 xn+z，因果为审判/迫害执行链；96分保留，Orb/チ。别名冲突待二审，不合并作品ID。

## status update - 2026-07-10 02:18:00

- manga: 浪客行
- status: prescreen_done_20260710
- note: 本轮只做轻量预筛；主维本体 zn+x，次维命运 xz+nz，因果为决斗链；96分保留，待Hermes深分析，不写finalized。

## status update - 2026-07-10 02:18:00

- manga: 晚安Punpun
- status: prescreen_done_20260710_alias_review
- note: 本轮只做轻量预筛；主维本体 zn+x，次维命运 xz+nz，时间为成长线辅维；95分保留，Goodnight Punpun别名冲突待二审。

## status update - 2026-07-10 02:18:00

- manga: Goodnight Punpun
- status: alias_conflict_review
- note: 疑似晚安Punpun英文别名/旧批次重复；保留91分证据，不独立finalized，不合并评分，已加入同名冲突队列。

## status update - 2026-07-10 04:24:00

- manga: Orb / 地。关于地球的运动。 / チ。-地球の運動について
- status: alias_conflict_source_checked
- note: 源路径复查显示 Orb 93、Orb On Earth 92、チ。仅分析与地。96高度疑似同作族；短名Orb 10分仍隔离为旧驳回证据，不合并评分。

## status update - 2026-07-10 04:24:00

- manga: 晚安Punpun / Goodnight Punpun / Oyasumi Punpun
- status: ready_to_merge_candidate
- note: 源路径复查显示 Goodnight-Punpun、OyasumiPunpun、囷霜-OyasumiPunpun 多批次同作高疑似；建议以晚安Punpun 95为主，91分作旧批次证据，未实际合并。

## status update - 2026-07-10 04:24:00

- manga: Gachiakuta / ガチアクタ
- status: alias_conflict_source_checked
- note: 英文72分、日文仅分析、7分旧驳回和命运候选并存；继续二审空间/因果/命运主次，不finalized。

## status update - 2026-07-10 04:24:00

- manga: COSMOS / COSMOS银河金融保险公司 / COSMOS-因果型
- status: alias_conflict_source_checked
- note: COSMOS 与 COSMOS-因果型均见91.8高分路径；COSMOS银河金融保险公司仍是低分旧源，未确认同作前继续隔离。

## status update - 2026-07-10 05:58:00

- manga: 擅长逃跑的殿下 / 逃げ上手の若君
- status: prescreen_done_alias_review
- note: 同步五大主题任务清单、CSV/JSONL、总索引、时间/命运主题页；主位时间型xn+z，命运型xz+nz保留次维，日文13分旧驳回不独立计低分；不合并评分、不改90分。

## status update - 2026-07-10 05:58:00

- manga: 蓦然回首
- status: prescreen_done_20260710
- note: 时间型xn+z主，本体型zn+x次，空间辅；96分保留，轻筛置信88%，待Hermes深分析。

## status update - 2026-07-10 05:58:00

- manga: Gundam GQuuuuuuX
- status: prescreen_done_20260710_need_source
- note: 时间型xn+z主候选，因果型zx+nx次，命运辅；96分保留，轻筛置信76%，需资料补采防转因果/命运。

## status update - 2026-07-10 05:58:00

- manga: 花牌情缘
- status: prescreen_done_20260710
- note: 时间型xn+z主，本体型zn+x次，空间辅；95分保留，轻筛置信90%，待Hermes深分析。

## status update - 2026-07-10 06:59:00

- manga: 旱地远走高飞
- status: prescreen_done_20260710_need_source
- note: 时间型xn+z主候选，本体型zn+x次，空间辅；96分保留，轻筛置信64%；短名疑似源名/题名拼接，需回查作者/原题，不finalized。

## status update - 2026-07-10 06:59:00

- manga: 泪雨与小夜曲
- status: prescreen_done_20260710
- note: 时间型xn+z主，命运型xz+nz次，本体辅；93分保留，轻筛置信84%，待Hermes深分析。

## status update - 2026-07-10 06:59:00

- manga: Blue Box
- status: prescreen_done_20260710_alias_review
- note: 时间型xn+z主候选，本体型zn+x次，空间辅；92分保留，轻筛置信82%；与青之箱高度疑似同作，加入别名冲突队列，不合并评分。

## status update - 2026-07-10 06:59:00

- manga: 青之箱
- status: alias_conflict_review
- note: 疑似 Blue Box 中文名/旧批次重复；本体型证据暂作次维候选，保留92分证据，不独立finalized。

## status update - 2026-07-10 06:59:00

- manga: 最后的武士Standing
- status: prescreen_done_20260710_need_source
- note: 时间型xn+z主，因果型zx+nx次，命运辅；92分保留，轻筛置信78%；疑似 Last Samurai Standing/イクサガミ，需源名确认，不finalized。

## status update - 2026-07-10 08:08:00

- manga: 葬送的芙莉莲
- status: overturn_landed_20260710
- note: 空间型任务行改为推翻证据，命运型任务行改为归位完成；主位命运型xz+nz、空间次维，96分保留，不finalized。

## status update - 2026-07-10 08:08:00

- manga: 天使夜未眠
- status: overturn_landed_20260710
- note: 空间型任务行改为推翻证据，命运型任务行改为归位完成；主位命运型xz+nz、空间仅作夜色/都市容器次证据，96分保留。

## status update - 2026-07-10 08:08:00

- manga: 东京日日
- status: overturn_landed_to_body_20260710
- note: 总索引空间池统计从空间型移出并并入本体型推翻归位证据；本体页新增推翻归位证据，不改正式评分，待用户二审。

## status update - 2026-07-10 09:22:00

- manga: 排球少年
- status: prescreen_done_20260710
- note: 空间型x并z+n主、时间型xn+z次、本体辅；球场规则边界定义全部可能性，96分保留，待Hermes深分析。

## status update - 2026-07-10 09:22:00

- manga: 间隙
- status: prescreen_done_20260710_secondary_review
- note: 空间型x并z+n主、本体型zn+x次；临界空间型预筛完成。本体任务行降为次维证据；另有「間隙」94分旧源/别名评分差异待二审。

## status update - 2026-07-10 09:22:00

- manga: 拉面发现传
- status: prescreen_done_20260710
- note: 空间型x并z+n主、本体型zn+x辅、因果型zx+nx辅；一碗面作为便携味觉空间，92分保留，待深分析防转因果。

## status update - 2026-07-10 09:22:00

- manga: 神之水滴
- status: prescreen_done_20260710
- note: 空间型x并z+n主、本体型zn+x次、因果型zx+nx辅；葡萄酒瓶是可移动意义空间胶囊，90分保留。
## status update - 2026-07-10 10:22:00

- manga: 平生純
- status: prescreen_done_dimension_conflict_20260710
- note: 空间型x并z+n主候选，本体型zn+x次，命运型xz+nz辅；日常场域作为纯粹感容器更强，91分保留，待用户二审是否降本体/命运为次维。

## status update - 2026-07-10 10:22:00

- manga: 路漫漫
- status: prescreen_done_dimension_conflict_20260710
- note: 空间型x并z+n主候选，本体型zn+x次，时间型xn+z辅；旅途空间压过存在追问，91分保留，待用户二审是否从本体池降为次维。

## status update - 2026-07-10 10:22:00

- manga: Understanding Comics
- status: prescreen_done_20260710
- note: 空间型x并z+n主，因果型zx+nx次，本体型zn+x辅；漫画格/页/闭合空间构成理解场域，90分保留，待Hermes深分析。

## status update - 2026-07-10 10:22:00

- manga: MOAN
- status: prescreen_done_20260710
- note: 空间型x并z+n主，因果型zx+nx次；病理空间从承载变为吞噬，93分保留，Junji Ito's Moan 暂不合并。

## status update - 2026-07-10 11:18:00

- manga: Junji Ito's Moan
- status: prescreen_done_alias_review
- note: 空间型x并z+n主候选，因果型zx+nx次，本体辅；疑似 MOAN/伊藤润二近名旧批次，保留90分证据，不与93分MOAN合并。

## status update - 2026-07-10 11:18:00

- manga: シテの花
- status: prescreen_done_20260710
- note: 空间型x并z+n主，本体型zn+x次，时间型xn+z辅；舞台/能乐式场域先构成观看容器，91分保留。

## status update - 2026-07-10 11:18:00

- manga: しっぽと逆鱗
- status: prescreen_done_20260710
- note: 空间型x并z+n主，命运型xz+nz次，本体型zn+x辅；龙与少女的归属空间强于番/逆鳞命运线，90分保留。

## status update - 2026-07-10 12:02:00

- manga: チェーザレ-破壊の創造者
- status: prescreen_done_20260710
- note: 空间型x并z+n主，因果型zx+nx次，命运辅；文艺复兴城邦/教会/家族权力场先构成容器，88分保留，待Hermes深分析。

## status update - 2026-07-10 12:02:00

- manga: ありす、宇宙までも / ありす宇宙までも
- status: prescreen_done_alias_review_20260710
- note: 空间型x并z+n主候选，命运型xz+nz次，本体型zn+x辅；86分空间行与89分本体行疑似标点变体/旧批次评分差异，暂不合并。

## status update - 2026-07-10 12:02:00

- manga: 汐風と竜のすみか
- status: prescreen_done_reference_review_20260710
- note: 空间型x并z+n主，命运型xz+nz次，本体辅；海边居所/龙巢形成归属容器，83分属参考级，待实读确认是否只留参考。

## status update - 2026-07-10 13:02:00

- manga: 路边的藤井
- status: prescreen_done_reference_review_20260710
- note: 空间型x并z+n主，本体型zn+x次；路边/街角/日常观察点是低振动容器，78分保留，参考级待二审，不升finalized。

## status update - 2026-07-10 13:02:00

- manga: 十月堂旧书事 / 十月堂旧书店事 / 十月堂旧书店 / 本なら売るほど / Hon-Nara-Uru-Hodo
- status: alias_dimension_conflict_tightened_20260710
- note: 收紧为同作族/译名簇待二审；十月堂旧译名侧95/92/83/10与本なら侧94/88/87/77并存，且空间旧判与本体草案冲突；不合并评分，不改主ID。

## status update - 2026-07-17 02:56:00

- manga: MPD Psycho
- status: prescreen_done_20260717
- note: 因果型zx+nx主，本体型zn+x次，命运辅；CSV/JSONL已为review，本轮同步Markdown任务清单、因果页和总索引；92分不改，待Hermes深分析。

## status update - 2026-07-17 02:56:00

- manga: Low Tide in Twilight
- status: dimension_conflict_review_20260717
- note: 维持因果型zx+nx主候选、命运型xz+nz次；补命运页次维证据和总索引冲突说明；92分不改，待用户实读二审。

## status update - 2026-07-17 02:56:00

- manga: 进击的巨人
- status: prescreen_done_secondary_destiny_20260717
- note: 因果型zx+nx主、命运型xz+nz次、时间辅；同步因果/命运双线状态，命运保留为次维待二审；91分不改。

## status update - 2026-07-17 03:35:00

- manga: 镖人金龙版
- status: prescreen_done_20260717
- note: 命运型xz+nz主、本体型zn+x次、时间型xn+z辅；金龙版按乱世漂流/护送宿命轻筛，96分保留，待Hermes深分析。

## status update - 2026-07-17 03:35:00

- manga: 黎明前的回声
- status: prescreen_done_20260717_need_source
- note: 命运型xz+nz主候选、时间型xn+z次、本体型zn+x辅；现有短评证据不足，需源名和实读补证，不finalized。

## status update - 2026-07-17 03:35:00

- manga: 棋魂
- status: prescreen_done_secondary_destiny_20260717
- note: 本体型zn+x主候选、命运型xz+nz次；围棋精神/棋道燃烧压过千年缘分，93分不改，命运页只保留次维证据。

## status update - 2026-07-17 03:35:00

- manga: 超深宇宙之恋
- status: prescreen_done_secondary_destiny_20260717
- note: 本体型zn+x主候选、命运型xz+nz次、空间辅；孤独中的存在连接压过宇宙尺度宿命，91分不改，待实读二审。

## status update - 2026-07-17 04:55:00

- manga: Jujutsu Kaisen Modulo / 墨比斯精选 / 蓝眼武士 / The Incal
- status: prescreen_done_body_batch_20260717
- note: 本体型高分4项轻筛；JJK Modulo、墨比斯精选、The Incal 同步为预筛完成·待Hermes深分析；蓝眼武士标为媒介/源名待二审；累计进度口径从30调为34，不改评分、不finalized。

## status update - 2026-07-17 05:59:00

- manga: 迷宫饭 / 夏日消失时 / 器官拼图 / 1秒24帧的人生
- status: prescreen_done_body_batch_20260717
- note: 本体型高分4项轻筛；迷宫饭、夏日消失时、器官拼图、1秒24帧的人生同步为预筛完成·待Hermes深分析；1秒24帧的人生在时间页只保留次维证据待二审；累计进度口径从34调为38，不改评分、不finalized。

## status update - 2026-07-17 06:59:00

- manga: 剑豪生死斗 / 镖人 / 愚者之夜 / 全知读者视角
- status: prescreen_done_body_batch_20260717
- note: 本体型A组4项轻筛；4部同步为预筛完成·待Hermes深分析；镖人在时间页只保留次维证据待二审；累计进度口径从38调为42，不改评分、不finalized。

## status update - 2026-07-17 08:59:00

- manga: Jimmy Corrigan / 怪医黑杰克 / 钻石王牌 / The Summer Hikaru Died
- status: prescreen_done_body_batch_20260717
- note: 本体型A组4项轻筛；四部同步为预筛完成，钻石王牌标主次需二审；累计进度口径从46调为50，不改评分、不finalized。


## status update - 2026-07-17 09:35:00

- manga: Toxy Noxy Foresty / 20世纪少年 / PLUTO / 钻石王牌
- status: prescreen_done_and_conflict_queue_20260717
- note: 三部待标准化已同步主题页、总索引、任务清单、CSV/JSONL；钻石王牌已加入维度冲突队列。不改评分、不finalized。

## status update - 2026-07-17 13:00:00

- manga: MOAN / Junji Ito's Moan
- status: alias_source_review_20260717
- note: 公开源名可指向 VIZ `Moan: Junji Ito Story Collection`，但精修全名单未命中 MOAN/Junji 源路径；93/90继续隔离为别名冲突待二审，不合并评分。

## status update - 2026-07-17 13:00:00

- manga: ありす、宇宙までも / ありす宇宙までも
- status: high_confidence_alias_review_20260717
- note: 精修全名单有86带顿号与89无标点两条源路径；公开正式题名为 `ありす、宇宙までも`，无标点行按旧批次别名证据处理，不合并评分。

## status update - 2026-07-17 14:06:00

- manga: 魔男のイチ / 魔男伊奇 / Ichi the Witch
- status: high_confidence_alias_review_20260717
- note: 公开题名核验支持日文/英文/中文译名为同作簇；96.15/99/92/75/70/6/3各批评分继续隔离，不合并作品ID，低分行作为旧驳回或噪声证据。

## status update - 2026-07-17 14:06:00

- manga: 逃げ上手の若君 / 擅长逃跑的殿下
- status: ready_to_merge_alias_review_20260717
- note: 少年Jump官方题名与中文通行译名高置信对应；保留时间型90主、命运型次维，日文13分仅作旧误判样本，不独立计低分。

## status update - 2026-07-17 15:10:00

- manga: Orb / 地。关于地球的运动。 / チ。 / Orb On the Movements of Earth
- status: high_confidence_alias_review_20260717
- note: 二次核验后升为高置信别名簇；主条建议仍以地。96分承接，93/92/87作旧批次证据，10分短名作旧驳回证据；不合并评分。

## status update - 2026-07-17 15:10:00

- manga: COSMOS / COSMOS银河金融保险公司 / COSMOS-因果型
- status: high_confidence_alias_review_20260717
- note: 公开设定与星际保险公司吻合，高分COSMOS/COSMOS-因果型作为主候选，12/6分保留旧驳回证据；不合并评分。

## status update - 2026-07-17 15:10:00

- manga: Gundam GQuuuuuuX
- status: media_risk_review_20260717
- note: 二次核验仍只确认官方动画入口，漫画条目未稳；保留96分原记录但不finalized为漫画正式条目，待旧库来源回查。

## status update - 2026-07-18 14:02:00

- manga: BLUE GIANT / 灌篮高手 / Vagabond / 浪客行 / Maus
- status: codex_relation_prescreen_done_20260718
- note: 按 `十元生补克表 v2.0` 与 `x/xn/z` 最新口径重做本体S级4部关系轻筛；删除摘要中的 `x=欲望` 解释，灌篮高手旧 `z克xn` 降为历史证据；Vagabond/浪客行加入高置信别名队列。保留100/98/98/96/97分，不finalized、不合并作品ID。

## status update - 2026-07-18 15:08:00

- manga: 链锯人 / 地。关于地球的运动。 / 晚安Punpun / Goodnight Punpun / 迷宫饭
- status: codex_relation_prescreen_done_20260718_batch2
- note: 按新版 `x=具体归属/掌握边界` 重做本体S级第二批4部关系轻筛；链锯人改为控制/归属链，地。改为手稿/数据掌握与传承链，晚安Punpun改为厄运侵蚀与病理性占有链；迷宫饭旧“吞噬空间=本体欲望”依据失效，新增本体/空间 dimension-conflict 待二审。保留96/96/95/91/94分，不改正式主维字段、不合并作品ID。

## status update - 2026-07-18 16:09:00

- manga: 火鸟 / 藤本树短篇集 / Homunculus / 本なら売るほど / 十月堂译名簇
- status: codex_relation_reanalysis_done_20260718_batch3
- note: 继续清理旧`x=欲望/执念`口径：火鸟改为永生资源掌握链；Homunculus改为车/脸/身体/身份掌握链；藤本树短篇集新增17–21/22–26 collection-scope源范围待二审；本なら纠正官方作者为児島青，旧`n生x`作废，十月堂簇升为high-confidence-alias + dimension-conflict。保留97/93/91及十月堂/本なら全部多批评分，不拆分、不合并、不改正式主仓。

## status update - 2026-07-18 17:03:00

- manga: BLUE GIANT / 灌篮高手 / 链锯人 / Vagabond / 浪客行
- status: protagonist_tenyuan_behavior_batch1_done_20260718
- note: 自动化改版后的主角人物层第一批。宫本大主zn次zx；樱木花道前期z、后期zn上升、次zx；电次主nx次zx、nz辅助；宫本武藏前中期zx+xz、吉冈战后zn上升。每位主角已提炼5-6条“触发→行动→对象→结果”行为并建立独立主角索引；作品主题与人物十元分开。保留100/98/96/98/96评分，不改归仓，Vagabond/浪客行只计一次人物分析且不合并评分。

## status update - 2026-07-18 18:06:00

- manga: 迷宫饭 / Homunculus / 怪医黑杰克 / 恶魔人
- status: protagonist_tenyuan_behavior_batch2_done_20260718
- note: 主角人物层第二批。莱欧斯主xn次x、nz辅助；名越进主x次xz、zn辅助；间黑男主zn次x、zx执行；不动明主zn次zx、x功能。每位主角已提炼5-6条“触发→行动→对象→结果”证据，并区分跨卷书目轻筛、跨单元轻筛与待原卷验证。保留94/91/91/93评分，不改作品主仓；迷宫饭本体/空间冲突、Homunculus评分二审继续保留。

## status update - 2026-07-18 20:00:00

- manga: 晚安Punpun / Goodnight Punpun / ODD TAXI / 钻石王牌 / PLUTO
- status: protagonist_tenyuan_behavior_batch3_done_20260718
- note: 主角人物层第三批共4个独立作品对象。Punpun主z次nx，Goodnight/Oyasumi别名只计一次；小户川主n次xn，漫画第3—5卷待原卷验证；泽村荣纯主z次zx；盖吉希特第1—6卷主xn次zn，第7—8卷阿童木终局动作另计。每位提炼5—6条“触发→行动→对象→结果”证据并写入主角索引。保留95/91/92/91/93评分，不改正式归仓；别名、媒介范围与作品维度冲突继续挂二审。

## status update - 2026-07-18 22:00:00

- manga: Jimmy Corrigan / 20世纪少年 / The Summer Hikaru Died / 光逝去的夏天 / Blue Box / 青之箱
- status: protagonist_tenyuan_behavior_batch4_done_20260718
- note: 主角人物层第四批共4个独立作品、5位人物、30条“触发→行动→对象→结果”证据。成年Jimmy主nx次z；远藤贤知主zn次xn；辻中佳纪主nz次xn；“光”主x并z次z；猪股大喜主z次xn候选。The Summer Hikaru Died/光逝去的夏天与Blue Box/青之箱均按同作只计一次人物分析；保留91/92/90/95/92评分，不改正式归仓，前者90/95评分及本体/命运主维冲突新增待二审。

## status update - 2026-07-19 14:42:00

- manga: MONSTER / BILLY BAT / 炎拳 / 蓝色时期
- status: protagonist_tenyuan_behavior_batch5_done_20260719
- note: 主角人物层第五批共4个独立作品、4位人物、24条“触发→行动→对象→结果”证据。天马贤三主zn95%次n92%，旧nx+xz卡降权；Kevin Yamagata主nx93%次xn90%，群像角色不混入；Agni主nz90%次nx86%，xz记身体状态；矢口八虎主xn94%次z89%，zn上升。MONSTER保留96分及作品因果主维；BILLY BAT/蓝色时期不补评分；炎拳旧本体96来源待回查，不恢复正式主条；不改最终归仓或理论页。

## status update - 2026-07-19 15:43:00

- manga: WATCHMEN / 进击的巨人 / Vinland Saga / 宝石之国
- status: protagonist_tenyuan_behavior_batch6_done_20260719
- note: 主角人物层第六批共4个独立作品、5位人物、30条“触发→行动→对象→结果”证据。Ozymandias主xn97%次x94%，Rorschach主zn96%次xn90%，旧zx/nx人物配对降权；Eren主zn94%次zx92%，xn为计划功能、晚期x锁始祖/墙中巨人掌握；Thorfinn早zx92%迁移至后期zn95%+xn91%；Phos早z92%迁移至后期xn92%。保留WATCHMEN 96、进击91、Vinland 93证据与作品主维，不给宝石之国补评分，不改归仓或理论。

## status update - 2026-07-19 16:44:00

- manga: Maus / 地。关于地球的运动。 / Orb / 火鸟·凤凰篇
- status: protagonist_tenyuan_behavior_batch7_group_done_20260719
- note: 群像/接力第七批共3个独立作品、7位人物、35条“触发→行动→对象→结果”证据。Maus拆Art主xn94%次zn90%、Vladek主xn96%次x94%；地。拆Rafal主zn95%、Oczy早nx91%转后zn候选90%、Badeni主xn96%次zn92%；火鸟只取凤凰篇，我王早zx94%迁移后zn95%，茜丸主z94%次xn92%。保留97/96/97分，Orb/チ。评分继续隔离，不改作品主维、归仓或理论。

- manga: Maus / 地。关于地球的运动。 / Orb / 火鸟·凤凰篇
- status: protagonist-behavior-enumeration-batch40-done
- note: 2026-07-23复核旧第七批，3部、7位人物、35条动作全部改为逐条唯一归类。Art主xn96/次zn95，Vladek主xn96/次x95；Rafal主zn96、Oczy主nx95、Badeni主xn97且三人次位不判；我王全局主次不判，茜丸主z95候选/次x95候选。旧Oczy后zn、Badeni次zn、我王稳定迁移主位与茜丸次xn均撤回；评分、作品主维、Orb/チ。ID及归仓不改。

## status update - 2026-07-19 17:44:00

- manga: 端脑 / 历史之眼 / MPD Psycho
- status: protagonist_tenyuan_behavior_batch8_causal_done_20260719
- note: 因果高分第八批共3部独立作品、4个人物/人格对象、19条“触发→行动→对象→结果”证据。夏驰主xn91%次zx87%；欧迈尼斯主xn96%次n90%，旧“杨”人名错误已纠正；MPD共享身体分层，雨宫一彦主xn94%次zn88%，西园伸二主zx候选86%次x候选82%，小林前史不混算。保留94/93/92分及作品主维，不改最终归仓或理论；跨人格关系待第1—2卷。

- manga: 端脑 / 历史之眼 / Historie / MPD Psycho
- status: protagonist-behavior-enumeration-batch41-done
- note: 2026-07-23复核旧第八批，3部、4位人物/人格对象、20条动作逐条唯一归类。夏驰5条主xn95候选、次不判；欧迈尼斯将旧混合动作拆为7条，主xn96、次不判；雨宫5条主xn96、次不判；西园公开范围3条主x85低置信候选、zx单点功能。旧夏驰次zx、欧迈尼斯次n、雨宫次zn及西园主zx次x顺序撤回；评分、作品主维、归仓、作品ID与理论不改。

## status update - 2026-07-19 18:45:00

- manga: Low Tide in Twilight / 水边之夜 / 水邊之夜 / 물가의 밤 / 排球少年 / Haikyu!! / 蓦然回首 / Look Back
- status: protagonist_tenyuan_behavior_batch9_alias_review_done_20260719
- note: 第九批共3部独立作品、5位人物、25条“触发→行动→对象→结果”证据。Low Tide拆金懿玄主nx候选88%次nz86%、吕太洲主x94%次zx86%，旧债务=nx报告降权；日向翔阳主zn95%次xn93%；蓦然回首拆藤野早z→后zn候选与京本主z94%。同步Low Tide四语别名及Look Back 96/94/85.4评分冲突，只登记不合并；保留92/96/96正式评分与作品主维，不改归仓或理论。

## status update - 2026-07-19 19:47:00

- manga: 花牌情缘 / Chihayafuru / ちはやふる / 拉面发现传 / ラーメン発見伝 / 神之水滴 / 神の雫 / The Drops of God
- status: protagonist_tenyuan_behavior_batch10_highscore_done_20260719
- note: 第十批共3部独立作品、3位人物、18条“触发→行动→对象→结果”证据。绫濑千早主z95%次xn93%，训练/预选经xn补z指向女王位置；藤本浩平主xn96%次z91%，配方/营业/比赛链使作品空间主位新增dimension-conflict但不改92分；神咲雫主n97%次xn93%，感官/诗性输入经n生xn成为使徒识别链。保留95/92/90分、作品主维与归仓，不改理论。

## status update - 2026-07-19 20:48:00

- manga: 葬送的芙莉莲 / 葬送のフリーレン / Frieren: Beyond Journey's End / 孤独的美食家 / 孤独のグルメ / 神之山岭 / 神々の山嶺
- status: protagonist_tenyuan_behavior_batch11_travel_mountain_done_20260719
- note: 第十一批共3部独立作品、4位人物、22条“触发→行动→对象→结果”证据。芙莉莲主nz95%次n92%，寿命错位只记xz时间状态；井之头五郎主n97%次zn91%，餐馆/菜品x并z与人物分层；深町诚主xn96%次n92%，羽生丈二主zn97%次zx93%，双主角不硬套作品zx+nx公式。芙莉莲96/95/旧源文件名88已入评分来源复审队列；保留作品评分、主维、归仓和官方理论不变。

## status update - 2026-07-19 22:08:00

- manga: 棋魂 / Hikaru no Go / 愚者之夜 / Fool Night / 全知读者视角 / Omniscient Reader's Viewpoint / ORV
- status: protagonist_tenyuan_behavior_batch12_reader_remaining_life_done_20260719
- note: 第十二批共3部独立作品、3位人物、18条“触发→行动→对象→结果”证据。进藤光前中期主z95%、后期zn迁移候选94%，次xn92%；托士郎主n95%次zn93%，xz只记转花身体/倒计时状态；金独子主xn97%次zn94%，x只限独家情报/奖励资源。ORV 93/73.3已入评分别名/来源范围复审队列；`千与千寻 / 少女终末旅行`因未命中漫画库正式条目从下一批建议移除，不新建库外条目；不改评分、主维、归仓或理论。

## status update - 2026-07-19 23:09:00

- manga: 剑豪生死斗 / シグルイ / 镖人 / 镖人金龙版 / 泪雨与小夜曲 / 涙雨とセレナーデ
- status: protagonist_tenyuan_behavior_batch13_sword_rain_done_20260719
- note: 第十三批共3部独立作品、5位人物、28条“触发→行动→对象→结果”证据。剑豪生死斗拆藤木源之助主nx93%次zn91%、伊良子清玄主z95%次xn90%；镖人刀马主zn95%次zx93%，普通1—13卷人物层只计一次，金龙版96分/命运主范围转版本评分二审；泪雨与小夜曲拆片桐阳菜主nz95%次xn92%、本乡孝章主xn94%次nz92%，讲谈社第14卷完结范围已锁。保留93/93/93与金龙版96分、作品主维和归仓，不改理论。

## status update - 2026-07-20 18:45:00

- manga: 逃げ上手の若君 / 擅长逃跑的殿下 / 1秒24帧的人生 / １秒２４コマのぼくの人生 / 天使夜未眠 / アーシアン / EARTHIAN
- status: protagonist_tenyuan_behavior_batch14_escape_frames_angels_done_20260720
- note: 第十四批共3部独立作品、4位人物、23条“触发→行动→对象→结果”证据。北条时行主xz96%次xn93%，人物主元支持命运次维而非自动改作品时间主；自传主人公りんたろう主zn96%次xn94%，正式日/法文题名已入版本范围复审；天使夜未眠拆千飒主zn96%次nz94%、影艳前nx94%→后nz95%候选，日版5卷与中文版/OVA范围分开。人物索引累计48部独立作品、61位人物；保留90/13、93、96分及作品主维/归仓，不改官方理论。现行xz信息量卡第192行冲突标记仅记录未修。

## status update - 2026-07-20 19:12:00

- manga: The Incal / 器官拼图 / Rest in Pieces / 黎明前的回声 / The Echo Before Dawn / 夏日消失时
- status: protagonist_tenyuan_behavior_batch15_organs_echo_incal_done_20260720
- note: 第十五批完成3部独立作品、5位人物对象、25条“触发→行动→对象→结果”证据。John Difool主nx93%次n89%；《器官拼图》按11篇合集拆分，只计〈宇宙的幽灵〉女太空人主xz89%次nz86%与〈幻肢〉幸存者主n87%；《黎明前的回声》拆王宥杰主n96%次zn93%、颜一辰主nz92%次nx90%，正式副题/作者/双主角已锁。`夏日消失时`确认是已分析`The Summer Hikaru Died / 光逝去的夏天 / 光が死んだ夏`题名变体，只修别名不重复计数。人物索引累计51部独立作品、66位人物；不改94/93/93及90/94/95评分、主维、最终归仓或官方理论。

## status update - 2026-07-21 16:13:00

- manga: 呪術廻戦≡（モジュロ） / Jujutsu Kaisen Modulo / 超深宇宙より愛をこめて / 超深宇宙之恋 / 新寳島 / 新宝岛
- status: protagonist_tenyuan_behavior_batch16_space_vow_treasure_done_20260721
- note: 第十六批完成3部独立作品、4位人物对象、14条“触发→行动→对象→结果”证据。乙骨真剑主zx91%次n88%，忧花因公开梗概不足3条主动行为暂缓；寺馆天主nz93%次z89%，Lulu主nz92%次zx88%；Pete主xn91%次nx88%。新增超深宇宙正式日文题名与新寳島1947初版/全集重构版范围隔离；人物索引累计54部独立作品、70位人物。不改96/91/90评分、作品主维、最终归仓或官方理论。

## status update - 2026-07-21 17:53:00

- manga: Toxy Noxy Foresty Forest / Toxy Noxy Foresty / イクサガミ / Last Samurai Standing / 最后的武士Standing / Gachiakuta / ガチアクタ
- status: protagonist_tenyuan_behavior_batch17_source_locked_done_20260721
- note: 第十七批完成3部独立作品、3位人物对象、16条“触发→行动→对象→结果”证据。Toxy无名菌菇少女主zn91%次xz88%，正式题名、作者Noboru Segawa与第1卷官方试读已锁，人物名待全卷；嵯峨愁二郎主n94%次xn91%，讲谈社漫画媒介与今村翔吾/立沢克美、第1—6卷已锁；Rudo主x96%次zn92%，具体物件x与作品容器x并z分层。人物索引累计57部独立作品、73位人物；墨比斯精选仍按合集阻塞，不生成总主角。不改91/92及Gachiakuta各批评分、作品主维、最终归仓或官方理论。

## status update - 2026-07-21 19:21:00

- manga: 墨比斯精选 / 魔男のイチ / Ichi the Witch / 本なら売るほど / 十月堂旧书事 / COSMOS
- status: protagonist_tenyuan_behavior_batch18_collection_catalog_done_20260721
- note: 第十八批完成3部独立作品、4位人物对象、22条“触发→行动→对象→结果”证据。伊奇主x95%次zx90%；十月堂店主（官方未公开姓名）主n95%次xn92%；COSMOS拆水森楓主n95%次nx92%、穂村燐主xn94%次n90%。《墨比斯精选》高置信对应四川文艺2021版ISBN 9787541158728，30篇目录已拆，繁中2022十篇版隔离，仍禁止合集总主角。人物索引累计60部独立作品、77位人物；不改96/96.15/91.8及各旧低分、作品主维、最终归仓或官方理论。

## status update - 2026-07-21 20:16:00

- manga: みいちゃんと山田さん / ミハルの戦場 / ありす、宇宙までも / ありす宇宙までも
- status: protagonist_tenyuan_behavior_batch19_night_sniper_space_training_done_20260721
- note: 第十九批完成3部独立作品、5位人物对象、28条“触发→行动→对象→结果”证据。未衣主nx94%次n91%，山田主n95%次xn92%；美晴主n92%次zx候选88%；Alice主n95%次xn91%，犬星主xn95%次z90%。人物索引累计63部、82位人物；ありす簇升为高置信别名+空间/时间维度待二审，但86/89分仍隔离。保留みい100、ミハル96及ありす86/89分，不改作品正式主维、最终归仓或官方理论。

## status update - 2026-07-21 21:08:00

- manga: 運命の巻戻士 / CXLVII-運命の巻戻士 / 大ダーク / Dai-Dark / 妹は知っている
- status: protagonist_tenyuan_behavior_batch20_loop_pursuit_identity_done_20260721
- note: 第二十批完成3部独立作品、3位人物对象、16条“触发→行动→对象→结果”证据。Chrono主`xn`95%次`n`92%，登记`n生xn`92%候选；Sanko主`xz`95%次`zx`90%，登记`xz生zx`88%候选；三木貴一郎主`zn`96%次`n`91%，登记`zn生n`90%候选。官方题名锁定`運命の巻戻士`（CXLVII仅旧前缀）与`大ダーク`（Dai-Dark为库内别名）；新增三项维度二审：命运/时间、空间/因果、因果旧推定/本体候选。人物索引累计66部、85位人物；保留102/86、100、98分、正式主维与归仓，不改理论。

## status update - 2026-07-21 22:17:00

- manga: Dorohedoro / DOROHEDORO / 异兽魔都 / ルリドラゴン / RuriDragon / ダーウィン事変 / 达尔文事变
- status: protagonist_tenyuan_behavior_batch21_body_anomaly_origin_done_20260721
- note: 第二十一批完成3部独立作品、3位人物对象、16条“触发→行动→对象→结果”证据。开曼主`x`92%次`xn`90%；青木琉璃主`n`95%次`xn`91%，仅登记`n生xn`88%候选；查理主`nx`92%次`n`89%，`xn/zx`只留功能位。新增三簇追踪：Dorohedoro 100分因果源路径/空间汇总维度冲突，RuriDragon 96/源名66.25及“未入库”状态冲突，达尔文事变95/85评分来源冲突。人物索引累计69部、88位人物；不改任何正式评分、作品主维、最终归仓或官方理论。

## status update - 2026-07-21 23:19:00

- manga: 君と宇宙を歩くために / 为了与你在宇宙行走 / 为了与你慢步宇宙 / タコピーの原罪 / 章鱼嗶的原罪 / ダンダダン / 胆大党 / Dandadan
- status: protagonist_tenyuan_behavior_batch22_school_adjustment_paranormal_investigation_done_20260721
- note: 第二十二批完成3部独立作品、5位人物对象、25条“触发→行动→对象→结果”证据。君と宇宙を歩くために拆小林主`n`94%次`xn`90%、宇野主`xn`95%次`n`90%；Takopi主`nx`92%次`zn`候选88%，官方上下卷仅够3条粗粒度动作；ダンダダン拆桃主`xn`94%次`n`90%、厄卡伦主`xn`95%次`n`91%。登记4项`n生xn`候选但均保留第三因素。新增/更新三簇题名追踪：君与宇宙簇96/95/84.62及命运/本体冲突，Takopi正式题名映射，胆大党91/旧6及因果/命运存疑。人物索引累计72部、93位人物；不改正式评分、作品主维、最终归仓或官方理论。

## status update - 2026-07-22 00:25:00

- manga: アイドラトリィ / Idolatry / 邪神の弁当屋さん / 判处勇者刑 / 判處勇者刑 / 勇者刑に処す 懲罰勇者9004隊刑務記録
- status: protagonist_tenyuan_behavior_batch23_behavior_first_done_20260722
- note: 第二十三批按“先穷举具体行为、再逐条后置归类”完成3部独立作品、3位主角、16条可核验行为；不再把多条动作压缩成行为总结，一条行为只归一个十元，证据不足者保留为暂不归类。陽見循菜5条：`xn`3、`nx`1、暂不归类1，主`xn`95%、次`nx`92%；レイニー6条：`n`3、`xn`2、`nx`1，主`n`94%、次`xn`88%；ザイロ5条：`nx`3、`n`1、`zx`1，主`nx`92%、次`n`88%、`zx`战斗功能84%，仅登记`nx补zx`83%候选。人物索引累计75部、96位人物。纠正アイドラトリィ旧“仅1卷”为讲谈社4卷范围，新增判处勇者刑93/旧9分与三向维度隔离；未改任何评分、作品主维、最终归仓或官方理论。

## status update - 2026-07-22 01:44:00

- manga: Dorohedoro / DOROHEDORO / 异兽魔都 / ルリドラゴン / RuriDragon / ダーウィン事変 / 达尔文事变
- status: protagonist_tenyuan_behavior_enumeration_batch24_old_summary_reaudit_20260722
- note: 第二十四批把旧第二十一批改造成“具体行为穷举→逐条唯一十元归类”。旧16条经主体动作审核和来源簇去重后保留13条：开曼5条（`x`2/`xn`1/`n`1/`nx`1），主`x`93%、次`xn`91%；青木琉璃4条（`n`3/`xn`1），主`n`92%、次`xn`88%，撤回旧`n生xn`关系候选；查理4条均归`nx`，主`nx`94%、次位未判定，撤回旧次`n`89%。删除3条背景、抽象总述或未获官方书目支持的推断。本轮复核不新增独立作品/人物，人物索引累计仍为75部、96位人物；未改评分、作品主维、最终归仓或理论文件。

## status update - 2026-07-22 02:13:00

- manga: 運命の巻戻士 / CXLVII-運命の巻戻士 / 大ダーク / Dai-Dark / 妹は知っている
- status: protagonist_tenyuan_behavior_enumeration_batch25_old_summary_reaudit_20260722
- note: 第二十五批把旧第二十批改造成“具体行为穷举→逐条唯一十元归类”，共保留15条：Chrono 4条（`nx`3/`zx`1），主`nx`92%、次位未判定；Sanko 6条（`zx`3/`nx`2/暂不归类1），主`zx`90%、次`nx`86%；三木貴一郎5条（`n`2/`xn`1/`x`1/`nx`1），主`n`91%、次`xn`90%。撤回旧Chrono`xn/n`与`n生xn`、Sanko`xz`与`xz生zx`、貴一郎`zn`与`zn生n`；不再把组织设定、受害状态、被控制动作或否定式动机计为主角行为。本轮复核不新增独立作品/人物，人物索引累计仍为75部、96位人物；未改评分、作品主维、最终归仓或理论文件。

## status update - 2026-07-22 03:15:00

- manga: みいちゃんと山田さん / ミハルの戦場 / ありす、宇宙までも / ありす宇宙までも
- status: protagonist_tenyuan_behavior_enumeration_batch26_old_summary_reaudit_20260722
- note: 第二十六批把旧第十九批改造成“具体行为穷举→逐条唯一十元归类”，共3部、5位人物、33条：未衣7条（`nx`4/`x并z`2/暂不归类1），主`nx`90%、次`x并z`86%；山田5条（`n`2/`x并z`1/`zx`1/`nx`1），主`n`92%、次位未判；美晴5条（`nx`3/`n`2），主`nx`91%、次`n`90%；Alice 10条（`nx`7/`xn`1/`n`1/暂不归类1），主`nx`92%、次位未判；犬星6条（`xn`4/`nx`2），主`xn`94%、次`nx`88%。撤回旧多标签关系与背景推断；`ありす`新增小学馆第7卷覆盖，但作品/人物累计仍75部、96人。未改100、96、86/89分、作品主维、归仓或理论。

## status update - 2026-07-22 04:16:00

- manga: 魔男のイチ / Ichi the Witch / 本なら売るほど / 十月堂旧书事 / COSMOS
- status: protagonist_tenyuan_behavior_enumeration_batch27_old_summary_reaudit_20260722
- note: 第二十七批把旧第十八批人物部分改造成22条“具体行为→下一行唯一归类”，共3部、4位人物：伊奇6条（`x`2/`n`2/`xn`1/`nx`1），主`x`91%、次`n`88%，旧`zx`次位撤回；十月堂店主7条（`n`4/`xn`2/`x`1），主`n`94%、次`xn`90%，旧`n生xn`候选撤回；水森5条（`nx`4/`n`1），主`nx`93%；穂村4条（`xn`2/`nx`1/`n`1），主`xn`92%，两人旧`n生xn`候选撤回。范围检查确认《魔男のイチ》已到第8卷、《COSMOS》到第9卷，但新卷其他人物动作未借入。累计仍75部、96人；未改正式评分、主维、归仓、作品ID或理论。

## status update - 2026-07-22 05:26:00

- manga: Toxy Noxy Foresty Forest / Toxy Noxy Foresty / イクサガミ / Last Samurai Standing / 最后的武士Standing / Gachiakuta / ガチアクタ
- status: protagonist_tenyuan_behavior_enumeration_batch28_old_summary_reaudit_20260722
- note: 第二十八批把旧第十七批改造成17条“具体行为→下一行唯一归类”：无名菌菇少女5条（`n`2/`nx`1/`xz`1/暂不归类1），暂定主`n`90%、次位未判，撤回旧`zn`与`xz↔nz`；嵯峨愁二郎7条（`nx`4/`xz`2/`n`1），主`nx`95%、次`xz`91%，撤回旧`n/xn`与`n生xn`；Rudo 5条（`nx`3/`x`1/`xz`1），主`nx`93%、次位未判，撤回旧`x/zn`与`zn↔x`。范围更新为《イクサガミ》第1—7卷公开书目，并确认Gachiakuta英文版已到第11卷但未借入未逐卷核验动作。累计仍75部、96人；未改正式评分、主维、归仓、作品ID或理论。

## status update - 2026-07-22 16:17:00

- manga: 呪術廻戦≡（モジュロ） / Jujutsu Kaisen Modulo / 超深宇宙より愛をこめて / 超深宇宙之恋 / 新寳島 / 新宝岛
- status: protagonist_tenyuan_behavior_enumeration_batch29_old_summary_reaudit_20260722
- note: 第二十九批把旧第十六批改造成12条“具体行为→下一行唯一归类”：乙骨真剑3条（`nx`1/`n`1/`xz`1），主次未判、撤回旧主`zx`；寺馆天4条（`nz`2/`nx`1/暂不归类1），暂定主`nz`92%、次位未判，并仅登记`nz生nx`86%候选；Lulu公开资料仅2条（`nz`1/暂不归类1），主次未判、撤回旧`nz/zx`；Pete跨版共通2条（`n`1/`nx`1）主次未判，全集重构版救Pan另记`n`，撤回跨版旧`xn`及`n生xn`。删除/排除“被俘、漂流、被抓”等非主动行为。累计仍75部、96人；未改96/91/90分、作品主维、归仓、作品ID或理论。

## status update - 2026-07-22 18:20:00

- manga: The Incal / 器官拼图 / Rest in Pieces / 黎明前的回声 / The Echo Before Dawn
- status: protagonist_tenyuan_behavior_enumeration_batch30_old_summary_reaudit_20260722
- note: 第三十批把旧第十五批收紧为20条“具体行为→下一行唯一归类”，共3部、5位人物对象：John Difool 5条（`xz`3/`n`1/暂不归类1），暂定主`xz`91%、次位未判，撤回旧`nx/n/x`组合；〈宇宙的幽灵〉女太空人6条（`xz`2/`n`2/`z`1/`nx`1），暂定主`xz`92%、次`n`86%，撤回旧`nz`次位；〈幻肢〉幸存者2条（`n`1/暂不归类1），主次未判，梦象不硬判`x并z`；王宥杰4条（`n/nx/nz/zn`各1），主次未判，撤回旧`n/zn`主次；颜一辰3条（`nz`2/`nx`1），暂定主`nz`89%、次位未判。全批不登记关系候选。累计仍75部、96人；未改94/93/93分、作品主维、归仓、作品ID或理论。

## status update - 2026-07-22 19:21:00

- manga: 逃げ上手の若君 / 擅长逃跑的殿下 / 1秒24帧的人生 / １秒２４コマのぼくの人生 / 天使夜未眠 / アーシアン / EARTHIAN
- status: protagonist_tenyuan_behavior_enumeration_batch31_old_summary_reaudit_20260722
- note: 第三十一批把旧第十四批收紧为23条“具体行为→下一行唯一归类”，共3部、4位人物对象。北条时行9条（`nx`4，`xn/z/n/xz/zx`各1），暂定主`nx`95%、次未判，撤回旧`xz/xn`主次与`xn生xz`；りんたろう11条（`xn`8/`nx`2/`x并z`1），主`xn`95%、次`nx`89%，撤回旧`zn`主位与`xn补z`；千飒仅2条（`zn/nx`各1）、影艳仅1条`nx`，二人主次均未判，撤回旧`nz`与`nx→nz`迁移。第3—5卷的分离、不舍、动摇、袭击均未冒充人物动作；全批不登记关系候选。累计仍75部、96人；未改90/13、93、96分、作品主维、归仓、作品ID或理论。

- manga: BLUE GIANT / 灌篮高手 / 链锯人
- status: protagonist_tenyuan_behavior_enumeration_batch32_reaudit_20260722
- note: 第三十二批把旧高分第一批中的3部收紧为24条“具体行为→下一行唯一归类”。宫本大10条（`zn`4/`z`4/`nx`1/未判1），主`zn`94%、次`z`92%，旧`zx`次位撤回；樱木花道7条（`zx`2、`z/xn/nx/xz`各1、未判1），主候选`zx`94%、次未判，旧后期`zn`迁移降为待原卷假设；电次公安篇7条（`nx`4/`xn`1/`zx`1/未判1），主`nx`95%、次未判，旧`nz`辅助撤回、`nx生x`不登记。旧高分第一批仅三者被局部替代，Vagabond部分仍当前；累计仍75部、96人。未改100/98/96分、作品维度、归仓、作品ID或理论。

## status update - 2026-07-23 01:16:00

- manga: Vagabond / 浪客行 / 迷宫饭 / 怪医黑杰克
- status: protagonist_tenyuan_behavior_enumeration_batch33_old_summary_reaudit_20260723
- note: 第三十三批把旧高分第一批剩余Vagabond及旧第二批中的《迷宫饭》《怪医黑杰克》收紧为19条“具体行为→下一行唯一归类”。宫本武藏6条（`zn`2/`xz`1/`zx`1/未判2），主`zn`91%候选、次未判，撤回旧“前`zx`后`zn`”阶段迁移；莱欧斯7条（`xn`2/`zx`1/`xz`1/未判3），主`xn`94%候选、次未判，团队总结果不借给个人，旧次`x`与`nz`撤回，仅登记`xn生xz`93%终局候选；间黑男6条（`n`4/`nz`1/`zn`1），主`n`96%候选、次未判，撤回旧主`zn`、次`x`与`zx`执行位。旧高分第一批已完全历史化；旧第二批当前仅余Homunculus、恶魔人待逐条复核。累计仍75部、96人；未改98/96/94/91分、作品主维、归仓、作品ID或理论。

## status update - 2026-07-23 02:17:00

- manga: Homunculus / ホムンクルス / 恶魔人 / Devilman / 晚安Punpun / Goodnight Punpun
- status: protagonist_tenyuan_behavior_enumeration_batch34_old_summary_reaudit_20260723
- note: 第三十四批把旧第二批剩余Homunculus、恶魔人及旧第三批《晚安Punpun》收紧为17条“具体行为→下一行唯一归类”。名越进8条（`xz`2/`x`2/`n`2/`zn`1/`xn`1），主`xz`96%候选、次`x`92%、`n`功能91%，旧主`x`下调，仅留`xz克zn`90%候选；不动明公开书目仅3条（`xz`1/`zx`1/未判1），主次均未判，撤回旧主`zn`次`zx`，仅留`xz生zx`94%候选；Punpun 6条（`nx`2/`z`1/`xn`1/未判2），主`nx`93%候选、次未判，撤回旧主`z`与未经动作支持的`x/xz`功能。旧第二批已完全历史化；旧第三批仅余ODD TAXI、钻石王牌、PLUTO。累计仍75部、96人；未改95/93/91分、作品主维、归仓、作品ID、别名评分或理论。

## status update - 2026-07-23 03:18:00

- manga: ODD TAXI / オッドタクシー / 钻石王牌 / Ace of the Diamond / PLUTO / PLUTO冥王
- status: protagonist_tenyuan_behavior_enumeration_batch35_old_summary_reaudit_20260723
- note: 第三十五批把旧第三批剩余3部收紧为26条“具体行为→下一行唯一归类”。小户川8条（`nx`5/`xz`1/未判2），主`nx`88%候选、次未判；五次载客同属一个书目证据簇并降权，旧主`n`次`xn`撤回。泽村荣纯10条（`nx`5/`nz/zn/z/zx`各1/未判1），主`nx`94%候选、次未判、`zx`单点功能，旧主`z`次`zx`撤回。盖吉希特8条（`xn`4/`nx/n/zn`各1/未判1），主`xn`96%候选、次未判，旧次`zn`撤回；第7—8卷阿童木边界继续隔离。三者均不登记关系候选。旧第三批已完全历史化；累计仍75部、96人。未改92/91/93分、作品维度冲突、归仓、作品ID或理论。

## status update - 2026-07-23 04:18:00

- manga: 20世纪少年 / The Summer Hikaru Died / 光逝去的夏天 / 夏日消失时 / Blue Box / 青之箱
- status: protagonist_tenyuan_behavior_enumeration_batch36_old_summary_reaudit_20260723
- note: 第三十六批把旧第四批中的3部收紧为25条“具体行为→下一行唯一归类”，共4位人物对象。远藤贤知7条（`xn`4/`xz`1/`zx`1/未判1），主`xn`96%候选、次未判，旧主`zn`撤回；辻中佳纪6条（`nz`2/`xn`2/`nx/n`各1），主`nz`95%候选、次`xn`94%；“光”5条（`xn`2/`x并z/n/xz`各1），主`xn`94%候选、次未判，旧主`x并z`次`z`撤回，并登记`xn生xz`94%候选；猪股大喜7条（`n`3/`nx`3/`zx`1），主`n`96%候选、次`nx`93%候选，旧主`z`次`xn`撤回，登记`nx补zx`95%候选。旧第四批改为部分历史化，仅Jimmy Corrigan仍当前；人物索引累计仍75部、96人。未发行《The Summer Hikaru Died》第8卷预告不入证；未改92/90/94/95/92评分、作品主维、归仓、别名作品ID或理论。

## status update - 2026-07-23 05:18:00

- manga: MONSTER / Monster / 炎拳 / Fire Punch / 蓝色时期 / Blue Period
- status: protagonist_tenyuan_behavior_enumeration_batch37_old_summary_reaudit_20260723
- note: 第三十七批把旧第五批中的3部收紧为26条“具体行为→下一行唯一归类”。天马贤三9条（`xn`3/`xz`2/`nx`2/`zn`1/`n`1），主`xn`95%候选、次未判，旧主`zn`次`n`及`zn生n`撤回；Agni 8条（`zx`3/`xn`2/`xz`2/未判1），主`zx`96%候选、次未判，旧主`nz`次`nx`撤回，仅保留`xz生zx`90%候选；矢口八虎9条（`nx`5/`zn`2/`x`1/`xn`1），主`nx`95%候选、次`zn`94%候选，旧主`xn`次`z`撤回，因现行`nx生x`机制待补不登记关系。旧第五批改为部分历史化，仅BILLY BAT仍当前；累计仍75部、96人。未改MONSTER 96分、炎拳精修名单86分/旧96来源、蓝色时期无评分状态、作品主维、归仓、作品ID、同名队列或理论。

## status update - 2026-07-23 06:25:00

- manga: BILLY BAT / Billy Bat / Jimmy Corrigan / Vinland Saga / 冰海战记
- status: protagonist_tenyuan_behavior_enumeration_batch38_old_summary_reaudit_20260723
- note: 第三十八批把旧第四批剩余Jimmy、旧第五批剩余BILLY BAT及旧第六批Vinland Saga收紧为19条“具体行为→下一行唯一归类”。Kevin Yamagata 5条（`nx`3/`xn`2），主`nx`94%候选、次`xn`92%候选，保留旧主次方向但撤回单条多标签与第7卷未确认主动牺牲动作；成年Jimmy 5条（`nx`3/未判2），主`nx`95%候选、次未判，旧次`z`撤回，遮嘴与幻想不硬判；Thorfinn 9条（`xn`4/`zx/nx/zn/n`各1/未判1），主`xn`95%候选、次未判，旧“早`zx`→后`zn`”主位迁移及`zn生n`候选撤回。旧第四、第五批已完全历史化；旧第六批仅余WATCHMEN、进击的巨人、宝石之国。累计仍75部、96人。未改Jimmy 91分、Vinland 93分、BILLY BAT无评分状态、作品主维、归仓、作品ID、同名队列或理论。

## status update - 2026-07-23 07:26:00

- manga: WATCHMEN / Watchmen / 进击的巨人 / Attack on Titan / 宝石之国 / Land of the Lustrous
- status: protagonist_tenyuan_behavior_enumeration_batch39_old_summary_reaudit_20260723
- note: 第三十九批完成旧第六批剩余3部、4位人物、34条“具体行为→下一行唯一归类”。Ozymandias 8条（`xn`3/`zx`2/`x并z`2/`x`1），主`xn`97%候选、次未判，旧次`x`撤回，登记`xn克zx`95%候选；Rorschach 9条（`xn`5/`zn`2/`n/zx`各1），主`xn`96%候选、次`zn`95%，旧主`zn`下调，登记`zn克xn`94%候选；Eren 7条（`zx`3/`xn`2/`zn/x`各1），主`zx`97%候选、次`xn`95%，旧主`zn`撤回，不登记关系；Phos 10条（`nx`3/`xn`3/`zx`2/`nz`1/未判1），全局主`xn`94%候选、次`nx`93%，阶段早`nx`—中`xn`—晚`zx`，旧前期`z`撤回，仅留第8卷`xn克zx`92%阶段候选。旧第六批完全历史化，旧第一至第六批旧口径清理闭合；累计仍75部、96人。未改WATCHMEN 96分、进击91分、宝石之国无机器评分状态、作品主维、归仓、作品ID、同名队列或理论。

## status update - 2026-07-23 10:27:57

- manga: Low Tide in Twilight / 水边之夜 / 水邊之夜 / 물가의 밤 / 排球少年 / Haikyu!! / 蓦然回首 / Look Back
- status: protagonist_tenyuan_behavior_enumeration_batch42_old_ninth_reaudit_20260723
- note: 第四十二批把旧第九批3部、5位人物收紧为27条“具体行为→下一行唯一归类”。金懿玄4条（`nx`2/`zx`2），暂定主`nx`90%、次未判；吕太洲4条（`x`3/`zx`1），主`x`96%、次未判；日向翔阳7条（`xn`2/`z`2/`zn/nx/n`各1），主`xn`94%、次`z`91%，旧主`zn`及关系撤回；藤野7条（`xn`3/`z`3/`zn`1），主`xn`95%、次`z`94%；京本5条（`xn`2/`z`2/`zn`1），暂定主`xn`94%、次`z`93%。本批不登记关系，旧第九批完全历史化。未改Low Tide 92分、排球少年96分、蓦然回首96分、96/94/85.4评分隔离、作品主维、归仓、作品ID或理论。

## status update - 2026-07-23 11:28:58

- manga: 花牌情缘 / Chihayafuru / ちはやふる / 拉面发现传 / ラーメン発見伝 / 神之水滴 / 神の雫 / The Drops of God
- status: protagonist_tenyuan_behavior_enumeration_batch43_old_tenth_reaudit_20260723
- note: 第四十三批把旧第十批3部、3位人物收紧为22条“具体行为→下一行唯一归类”。绫濑千早7条（`z`4/`xn`2/`n`1），主`z`96%次`xn`94%，旧`zn`与关系撤回；藤本浩平8条（`xn`3/`z`3/`x并z`1/`x`1），主`xn`95%次`z`93%，终局正式店铺才计`x`；神咲雫7条（`n`2/`xn`2/`nx`2/`zn`1），主`n`95%次`xn`94%，旧`n生xn`撤回。旧第十批完全历史化。未改95/92/90分、作品主维、拉面维度冲突、归仓、作品ID或理论。
## 2026-07-23 12:28｜第四十四批主角十元行为穷举

- 完成《葬送的芙莉莲》《孤独的美食家》《神之山岭》3部、4位人物、26条具体行为逐条唯一归类。
- 芙莉莲主`xn`95%候选/次`nx`92%候选；五郎主`xn`95%候选/次`n`95%；深町主`xn`96%/次未判；羽生主`zn`97%/次`xn`94%。
- 旧第十一批标为历史口径；关系候选全部撤回或不登记。正式评分、作品主维、归仓、作品ID与理论未改。
- 正本：[[2026-07-23_主角十元行为穷举_第四十四批3部旅途饮食与山岭复核]]。
- scan_time: 2026-07-23 13:28:58 +08:00
- manga: 棋魂 / Hikaru no Go / 愚者之夜 / Fool Night / 全知读者视角 / Omniscient Reader's Viewpoint / ORV
- status: protagonist_tenyuan_behavior_enumeration_batch45_old_summary_reaudit_20260723
- note: 第四十五批把旧第十二批改造成23条“具体行为→下一行唯一归类”：进藤光8条=`z`4/`xn`2/`nx`1/`zn`1，主`z`96%次`xn`95%，撤回旧后期`zn`主位迁移；神谷托士郎7条=`xn`4/`n`3，主`xn`96%次`n`95%，撤回旧`n/zn`主次；金独子8条=`xn`4/`zn`2/`nx`1/`zx`1，主`xn`97%次`zn`95%，撤回旧`x`动作功能。三人旧关系候选全部撤回。证据均为出版社公开书目/旧稿范围，不冒充全作逐页实读；未改三部93分、ORV旧73.3分、作品主维、归仓、作品ID或理论。

## status update - 2026-07-23 14:29:28

- manga: 剑豪生死斗 / シグルイ / 镖人 / 泪雨与小夜曲 / 涙雨とセレナーデ
- status: protagonist_tenyuan_behavior_enumeration_batch46_old_thirteenth_reaudit_20260723
- note: 第四十六批把旧第十三批3部、5位人物收紧为40条“具体行为→下一行唯一归类”。藤木7条（`zx`4/`nx`3）主`zx`97%次`nx`95%，旧次`zn`撤回；伊良子6条（`z`3/`zx`2/`xn`1）主`z`97%次`zx`95%，旧次`xn`下调；刀马8条（`zx`4/`zn`3/`n`1）主`zx`97%次`zn`96%，旧主次对调；阳菜9条（`nz`4/`xn`2/`nx/x并z/n`各1）主`nz`97%次`xn`95%；孝章10条（`xn`4/`nz`2/`z`2/`n/zn`各1）主`xn`97%次`nz`95%。保留3个机制候选，撤回刀马/孝章旧关系。未改三部93分、镖人金龙版96分、作品主维、归仓、作品ID或理论。
