#!/usr/bin/env python3
from __future__ import annotations

import html
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any

ROOT = Path("05-银矿库/角色库/发型库总表")
ASSET_DIR = ROOT / "assets/refs/batch05"
OUT_DIR = ROOT / "批次05_主要类型一次跑完"
INDEX_PATH = ROOT / "女性发型库_总索引.canvas"
MANIFEST_PATH = ROOT / "批次05_自动检索与许可清单.md"
MISSING_PATH = ROOT / "批次05_缺证据清单.md"
USER_AGENT = "TenYuanVaultHairLibrary/2.0 (research image audit; GitHub Actions)"

FAMILIES = {
    "A_马尾与双束扎发": {"label": "马尾与双束扎发", "color": "5"},
    "B_丸子与盘发": {"label": "丸子、发髻与盘发", "color": "6"},
    "C_编发与保护性": {"label": "编发与保护性发型", "color": "1"},
    "D_短发与现代剪裁": {"label": "短发与现代层次剪裁", "color": "3"},
    "E_长发与纹理": {"label": "长发轮廓与纹理", "color": "2"},
    "F_特殊新潮剪裁": {"label": "特殊新潮剪裁", "color": "4"},
}


def item(i: str, family: str, name: str, en: str, queries: list[str], layer: str,
         variable: str, structure: str, exclude: str, ten: str,
         include: list[str] | None = None, exclude_tokens: list[str] | None = None) -> dict[str, Any]:
    return {
        "id": i, "family": family, "name": name, "en": en, "queries": queries,
        "layer": layer, "variable": variable, "structure": structure,
        "exclude": exclude, "ten": ten,
        "include": include or ["hair"],
        "exclude_tokens": exclude_tokens or [],
    }


ITEMS = [
    item("A01","A_马尾与双束扎发","低马尾","Low Ponytail",['"low ponytail" hairstyle woman','low ponytail hair woman'],"单束扎发","主束点位于后颈或枕骨下方","头发表面向低位锚点集中，尾部贴近颈背向下垂落。","束点位于冠部属于高马尾；尾部盘成团属于低发髻。","低位停靠偏 nz／n；规则集中可出现 xn。"),
    item("A02","A_马尾与双束扎发","侧马尾","Side Ponytail",['"side ponytail" hairstyle woman','side ponytail hair'],"单束偏轴扎发","主束点偏离后脑中轴并落在单侧","发束跨过中轴集中到左或右侧，尾部越肩形成横向方向。","仅侧分披发没有束点；双侧各一束属于双马尾。","单向偏移可偏 zx；柔性垂落可出现 nz。"),
    item("A03","A_马尾与双束扎发","泡泡马尾","Bubble Ponytail",['"bubble ponytail" hairstyle','bubble braid ponytail'],"分段扎发","一条马尾被多个等距束点切分成连续鼓包","主束点之后继续重复收束，形成多个体量段和稳定节拍。","普通马尾只有一个主束点；泡泡辫并非传统交叉编织。","重复节拍偏 xn；连续推进可出现 zx。"),
    item("A04","A_马尾与双束扎发","编织马尾","Braided Ponytail",['"braided ponytail" hairstyle woman','ponytail braid woman'],"扎发＋编发混合","主束点之后的尾部继续进入编织结构","头皮区先集中成单束，尾部再出现三股或多股交叉纹理。","从头皮起编且无主束点属于法式辫或荷兰辫。","束点偏 z／xn；尾部连接偏 n。"),
    item("A05","A_马尾与双束扎发","高双马尾","High Pigtails",['"high pigtails" hairstyle woman','high twin ponytails woman'],"双束扎发","左右两个束点同时位于耳上或冠部侧后方","中轴分区明确，两条尾部从高位向外或向下甩出。","束点在耳下属于低双马尾；盘成团属于双丸子。","对称重复偏 xn；高位外甩可出现 zx。"),
    item("A06","A_马尾与双束扎发","泡泡双马尾","Bubble Pigtails",['"bubble pigtails" hairstyle','bubble twin ponytails'],"双束＋分段扎发","左右两条尾部各被多个束点分段","两个主束点之外，每条尾部继续形成等距鼓包。","普通双马尾没有尾部二次束点；单条泡泡马尾只有一侧主体。","双轴重复与分段均偏 xn；外扩可出现 zx。"),

    item("B01","B_丸子与盘发","双丸子头","Space Buns",['"space buns" hairstyle woman','double buns hairstyle woman'],"双团状盘发","左右两个高位团状收纳体同时成立","中轴分区后，两侧头发分别盘成圆团，颈后基本清空。","高双马尾保留自由尾部；Bantu knots通常数量更多且更小。","双重节点偏 xn／z；团状壳体可出现 x并z。"),
    item("B02","B_丸子与盘发","低发髻","Low Bun",['"low bun" hairstyle woman','low hair bun woman'],"低位团状盘发","全部或大部分头发收纳在后颈低位团体","发束沿头皮向下汇聚，形成低位圆团或扁团。","低马尾保留自由尾部；法式扭转形成纵向卷脊而非团体。","低位停靠偏 nz；收纳壳体偏 x并z。"),
    item("B03","B_丸子与盘发","松散丸子头","Messy Bun",['"messy bun" hairstyle woman','loose bun hairstyle woman'],"团状盘发","主团体成立但边缘保留松散发束与不规则体量","收束中心可见，脸侧、后颈或团体边缘存在有意松量。","完全散发没有主团体；规则芭蕾髻边缘更紧、更平。","主节点偏 z；松散余波可偏 xz／nz。"),
    item("B04","B_丸子与盘发","编织丸子头","Braided Bun",['"braided bun" hairstyle woman','braid bun hairstyle'],"编发＋盘发混合","编织辫体被再次卷绕并收纳成团","团体表面可读出交叉编织纹；发尾隐藏或固定在内部。","普通丸子头表面无稳定辫纹；皇冠辫围绕头部但未必形成团体。","编织节拍偏 xn；团体收纳偏 x并z。"),
    item("B05","B_丸子与盘发","低盘髻","Chignon",['chignon hairstyle woman','low chignon hair'],"古典低位盘发","后颈形成横向或椭圆形紧致收纳体","表面平顺，发尾被隐藏，轮廓比松散低髻更封闭。","法式扭转以纵向卷脊为主；普通低丸子可更圆更松。","封闭外壳偏 x并z；稳定节点偏 z／xn。"),
    item("B06","B_丸子与盘发","蜂巢头","Beehive Hairstyle",['beehive hairstyle woman','1960s beehive hair'],"复古高体量盘发","冠部和后上方形成连续高耸体量","头发被倒梳、填充并固定成上升壳体，颈后可收纳或垂落。","普通高丸子是独立团体；蓬巴杜主要抬高前额而非整个后上方。","外壳体量偏 x并z；高位节点可出现 z／zx。"),

    item("C01","C_编发与保护性","三股辫","Three-Strand Braid",['"three strand braid" hairstyle','three plait hair woman'],"基础编发","三条主束按固定顺序交替跨越","辫体有连续V形或链状纹理，主束数量稳定为三。","鱼骨辫由细束高频交替；绳辫由两股扭转。","规则循环偏 xn；跨束连接偏 n。"),
    item("C02","C_编发与保护性","法式辫","French Braid",['"French braid" hairstyle woman','French plait woman hair'],"贴头增量编发","编织从头顶开始并持续吸收两侧新发束","辫纹贴近头皮，宽度随新增发束逐步变化并向后推进。","普通三股辫从固定束点后开始；荷兰辫纹理向外凸起。","持续接入偏 n；规则推进偏 xn／zx。"),
    item("C03","C_编发与保护性","荷兰辫","Dutch Braid",['"Dutch braid" hairstyle woman','inverted French braid hair'],"贴头外翻编发","发束从下方交叉，使主辫体明显凸出头皮","编织从头顶或前额开始，辫脊外凸并向后延伸。","法式辫的主纹理更贴平或内嵌；拳击辫通常为左右双轨。","外凸主脊偏 x／zx；重复交叉偏 xn。"),
    item("C04","C_编发与保护性","皇冠辫","Crown Braid",['"crown braid" hairstyle woman','halo braid hairstyle woman'],"环形编发","一条或多条辫体沿头部周边形成闭合环","辫体围绕额侧、耳上和后脑，中心头发被环形结构包围。","普通侧辫不闭合；编织丸子形成团体而非头部周环。","闭合边界偏 x／x并z；连续承载偏 n。"),
    item("C05","C_编发与保护性","瀑布辫","Waterfall Braid",['"waterfall braid" hairstyle woman','waterfall braid hair'],"半开放编发","横向辫道持续释放垂直落下的独立发束","上方有连续编织轨道，下方多缕头发穿出并自由披落。","皇冠辫闭合且不持续放束；普通半扎没有交替释放结构。","轨道偏 xn／n；释放与让位可偏 nx。"),
    item("C06","C_编发与保护性","Cornrows贴头辫","Cornrows",['cornrows hairstyle woman','cornrow braids woman'],"多轨贴头编发","多条窄辫沿头皮形成平行或图案化轨道","头皮分区清晰，辫体紧贴发根，方向从前额向后或向侧面。","Box braids从小方区起辫后自由垂落；拳击辫通常只有两条主轨。","多轨秩序偏 xn；单向推进偏 zx。",include=["cornrow","hair"],exclude_tokens=["field","crop"]),
    item("C07","C_编发与保护性","Box Braids盒子辫","Box Braids",['"box braids" hairstyle woman','box braided hair woman'],"多区自由垂辫","头皮被分成多个方形或几何小区并各自起辫","大量独立辫束从发根垂落，根部分区与尾部自由束体同时可见。","Cornrows辫体贴头推进；Locs不是规则编织。","分区偏 xn／x；多束承载偏 n。"),
    item("C08","C_编发与保护性","Bantu Knots班图结","Bantu Knots",['"Bantu knots" hairstyle woman','Bantu knot hair'],"多节点盘结","头皮多区分别扭转成多个小型结体","分区边界清晰，结点数量多，均匀分布在头部表面。","双丸子只有两个大团体；Cornrows形成线性轨道而非点状结。","多节点重复偏 xn／z；团体边界偏 x。",include=["bantu","hair"]),

    item("D01","D_短发与现代剪裁","Bixie混合短发","Bixie Cut",['"bixie haircut" woman','bixie cut hairstyle'],"短发混合剪裁","长度介于Pixie与Bob之间，周边略长且内部碎层","顶部和耳侧保留纹理，后颈短，外轮廓比Pixie更完整。","Pixie耳侧与后颈更短；Bob有更清楚的完整重量线。","混合断点偏 z／x；碎层可出现 xz。"),
    item("D02","D_短发与现代剪裁","长Bob","Lob / Long Bob",['"long bob" haircut woman','lob hairstyle woman'],"中短长度轮廓","周边重量线落在下颌以下至锁骨附近","整体仍保留Bob的连续底边，但长度明显越过下巴。","齐颌Bob更短；普通中长发缺少集中重量线。","底边偏 x／z；垂落停靠可出现 nz。"),
    item("D03","D_短发与现代剪裁","A字Bob","A-Line Bob",['"A-line bob" haircut woman','angled bob hairstyle woman'],"方向性Bob","后部较短、前侧逐渐变长并形成斜向底边","从后颈向脸侧推进，前长后短的外轮廓清楚。","齐切Bob周边长度近一致；渐层Bob强调后部堆叠层次。","斜向推进偏 zx；底边切口偏 x／z。"),
    item("D04","D_短发与现代剪裁","不对称Bob","Asymmetrical Bob",['"asymmetrical bob" haircut woman','asymmetric bob hairstyle'],"非对称短发","左右两侧长度或体量明显不同","一侧可短至耳上，另一侧延伸至下颌或更长，差异稳定存在。","侧分造成的视觉偏重不等于剪裁长度不对称。","不等向结构偏 xz；明确切线偏 x／z。"),
    item("D05","D_短发与现代剪裁","Shag碎层剪","Shag Haircut",['shag haircut woman hairstyle','shaggy layered haircut woman'],"高层次碎剪","顶部短层、脸周碎层与发尾稀薄同时成立","整体呈蓬松而破碎的多层轮廓，层次从冠部向下释放。","普通长层次顶部更平顺；狼尾通常后颈尾部更突出。","碎散层次偏 xz；层级推进可出现 zx。"),
    item("D06","D_短发与现代剪裁","狼尾剪","Wolf Cut",['"wolf cut" hairstyle woman','wolf haircut woman hair'],"上短下长层次剪","冠部蓬松短层与后颈较长尾部同时成立","脸周碎层明显，顶部体量高，后部长度形成尾状延伸。","Shag未必保留明显后颈长尾；Mullet前后断差更硬。","不等向碎层偏 xz；后冲方向可出现 zx。",include=["hair"],exclude_tokens=["animal","wolfdog","canis","arctic"]),
    item("D07","D_短发与现代剪裁","经典鲻鱼头","Mullet",['mullet haircut woman hairstyle','female mullet hair'],"前短后长剪裁","前额、耳侧明显短，后颈主体显著更长","前后长度断差硬，耳区开放，后部长尾独立可读。","狼尾层次过渡更碎更软；Mixie整体更短。","断点偏 z／x；后向延伸可出现 zx。",include=["hair"],exclude_tokens=["fish","mugil"]),
    item("D08","D_短发与现代剪裁","Pageboy页童头","Pageboy Haircut",['pageboy haircut woman','pageboy hairstyle hair'],"复古齐圆短发","厚重周边线沿耳侧和后颈形成圆滑连续轮廓","发尾常内扣，刘海与侧后部共同形成帽状体。","普通Bob未必有帽状包裹与厚圆周边；碗头长度更统一。","包裹壳体偏 x并z；连续底边偏 x／n。"),
    item("D09","D_短发与现代剪裁","侧剃不对称发型","Side-Shaved Hair",['"side shaved" hairstyle woman','shaved side haircut woman'],"剃短＋保留体量","一侧头皮剃短，另一侧保留明显长度或体量","左右密度反差极大，剃短边界和保留区分界清楚。","Undercut可隐藏在上层头发下；普通不对称Bob未必剃短。","硬边界偏 x；单侧权重偏 xz／zx。"),

    item("E01","E_长发与纹理","长直发","Long Straight Hair",['"long straight hair" woman hairstyle','woman long straight hairstyle'],"长度＋纹理","胸下至腰部的主体保持低卷度直向垂落","发流整体纵向，弯曲少，外轮廓连续而稳定。","超长发强调腰以下长度；波浪发存在连续S形纹理。","原生直向发流可偏 zn／n；规则平顺可出现 xn。"),
    item("E02","E_长发与纹理","波浪长发","Long Wavy Hair",['"long wavy hair" woman hairstyle','wavy hairstyle woman long hair'],"波浪纹理","发丝沿长度形成较大、较松的连续S形波","卷径大、转折柔，通常从发中或脸侧开始。","卷发曲率更高并形成闭合C卷；直发缺少重复波峰。","连续承载偏 n；不等向漂移可出现 xz。"),
    item("E03","E_长发与纹理","紧密Coily卷发","Coily Hair",['coily hair woman hairstyle','type 4 natural hair woman'],"紧密自然纹理","发根至发尾保持小卷径、强回缩的螺旋或折线卷","体量向外扩张，单缕长度因回缩而缩短，纹理密度高。","Afro是整体轮廓类型；Coily强调单缕纹理，可披落或扎束。","原生纹理偏 zn；密集边界可出现 x／n。",include=["hair"],exclude_tokens=["coil","spring","wire"]),
    item("E04","E_长发与纹理","长层次发","Long Layered Hair",['"long layered haircut" woman','long layers hairstyle woman'],"层次剪裁","不同长度层从脸周或肩部向下连续递进","整体保留长发主体，但边缘与内部出现多个可读长度层。","齐切长发只有单一底边；Shag顶部短层和碎度更强。","连续连接偏 n；层级节点可出现 z／zx。"),
    item("E05","E_长发与纹理","U形长发底线","U-Shaped Haircut",['"U shaped haircut" long hair','U cut hairstyle back view'],"长发底线","后视底边中央较长、两侧较短，形成柔和U形","底部轮廓连续圆弧，左右对称，中央最低点明确。","V形底线中央更尖；齐切底线接近水平。","对称弧线偏 xn／n；最低停靠点可出现 nz。"),
    item("E06","E_长发与纹理","V形长发底线","V-Shaped Haircut",['"V shaped haircut" long hair','V cut hairstyle back view'],"长发底线","后视底边向中央收束成明显尖角","左右两侧斜向下降，中央形成单一最低尖点。","U形底线转折更圆；层次长发未必形成整体V轮廓。","收束节点偏 z；斜向推进可出现 zx。"),
    item("E07","E_长发与纹理","手推波纹","Finger Waves",['"finger waves" hairstyle woman','1920s finger wave hair'],"复古表面造型","贴头发片被塑造成连续规则S波脊","波峰和波谷清楚、贴近头皮，通常集中在额侧和耳侧。","普通波浪长发体量更松、更离头皮；水波纹不一定具有硬脊。","重复节拍偏 xn；表面壳体可出现 x并z。"),
    item("E08","E_长发与纹理","玉米烫／压纹发","Crimped Hair",['crimped hair woman hairstyle','crimp hairstyle woman'],"人工细密波纹","发丝形成高频、小幅、近锯齿状的重复压纹","纹理从发根或发中持续到发尾，整体体量明显增加。","自然Coily卷更立体回缩；普通波浪纹理尺度更大。","高频重复偏 xn；不规则扩张可出现 xz。"),

    item("F01","F_特殊新潮剪裁","水母头","Jellyfish Haircut",['"jellyfish haircut" woman hairstyle','jellyfish cut hair'],"双层断层剪裁","上层短圆轮廓与下层长直主体形成强断层","上层近Bob或碗状，下层保留长发，两个长度层同时独立可读。","公主切只在脸侧形成短片；狼尾层次过渡更碎更连续。","双层壳体偏 x并z／x；断层偏 z。",include=["hair"],exclude_tokens=["animal","jellyfish","medusa"]),
    item("F02","F_特殊新潮剪裁","蝴蝶剪","Butterfly Haircut",['"butterfly haircut" woman hair','butterfly layers hairstyle'],"大跨度脸周层次","短脸周层与长主体共同形成向外翻开的翼状体量","冠部与脸侧层次较短，后部保留长度，吹整后两侧外翻。","普通长层次层差较小；八字刘海只处理前额与脸侧少量发束。","外拨方向可偏 zx；上下连接偏 n。",include=["hair"],exclude_tokens=["insect","butterfly wing"]),
    item("F03","F_特殊新潮剪裁","章鱼剪","Octopus Haircut",['"octopus haircut" woman hair','octopus cut hairstyle'],"顶部圆体＋下部长触须层","顶部保持较圆体量，下层分出多条细长碎束","头顶短层构成主体，肩下或后颈出现稀薄、分叉的长尾束。","狼尾更强调上短下长整体；水母头上下两层边界更硬。","多向尾束偏 xz；顶部壳体偏 x并z。",include=["hair"],exclude_tokens=["animal","octopus"]),
]


def api(params: dict[str, Any]) -> dict[str, Any]:
    params = {**params, "format": "json", "formatversion": "2"}
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def clean_html(text: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", html.unescape(text or ""))).strip()


def tokenise(text: str) -> list[str]:
    return [t for t in re.findall(r"[a-z0-9]+", text.lower()) if len(t) > 2 and t not in {
        "the","and","with","woman","women","hair","hairstyle","haircut","style","female"
    }]


def candidate_score(entry: dict[str, Any], page: dict[str, Any], query: str) -> tuple[int, str]:
    title = page.get("title", "").lower()
    ii = (page.get("imageinfo") or [{}])[0]
    meta = ii.get("extmetadata") or {}
    desc = clean_html((meta.get("ImageDescription") or {}).get("value", "")).lower()
    obj = clean_html((meta.get("ObjectName") or {}).get("value", "")).lower()
    cats = clean_html((meta.get("Categories") or {}).get("value", "")).lower()
    hay = f"{title} {desc} {obj} {cats}"
    score = 0
    for token in tokenise(query + " " + entry["en"]):
        if token in title:
            score += 5
        elif token in hay:
            score += 2
    include_hits = 0
    for token in entry["include"]:
        if token.lower() in hay:
            score += 4
            include_hits += 1
    for token in entry["exclude_tokens"]:
        if token.lower() in hay:
            score -= 12
    mime = ii.get("mime", "")
    if mime in {"image/jpeg", "image/png", "image/webp"}:
        score += 2
    width, height = ii.get("width", 0), ii.get("height", 0)
    if max(width, height) >= 800:
        score += 2
    if include_hits == 0:
        score -= 4
    return score, hay


def search_item(entry: dict[str, Any]) -> dict[str, Any] | None:
    best: dict[str, Any] | None = None
    for query in entry["queries"]:
        data = api({
            "action": "query", "generator": "search", "gsrsearch": query,
            "gsrnamespace": 6, "gsrlimit": 25, "prop": "imageinfo",
            "iiprop": "url|size|mime|extmetadata", "iiurlwidth": 1200,
        })
        for page in data.get("query", {}).get("pages", []):
            ii = (page.get("imageinfo") or [{}])[0]
            if not ii.get("url"):
                continue
            meta = ii.get("extmetadata") or {}
            license_name = clean_html((meta.get("LicenseShortName") or {}).get("value", ""))
            if not license_name or license_name.lower() in {"copyrighted", "fair use"}:
                continue
            score, _ = candidate_score(entry, page, query)
            candidate = {
                "score": score, "query": query, "title": page.get("title", ""),
                "source": ii.get("descriptionurl") or f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(page.get('title','').replace(' ','_'))}",
                "url": ii.get("thumburl") or ii.get("url"), "original_url": ii.get("url"),
                "mime": ii.get("mime", ""), "width": ii.get("width", 0), "height": ii.get("height", 0),
                "license": license_name,
                "author": clean_html((meta.get("Artist") or {}).get("value", ""))[:240],
                "description": clean_html((meta.get("ImageDescription") or {}).get("value", ""))[:300],
            }
            if best is None or candidate["score"] > best["score"]:
                best = candidate
        time.sleep(0.15)
    if best and best["score"] >= 8:
        return best
    return None


def ext_for(mime: str) -> str:
    return {"image/png": ".png", "image/webp": ".webp"}.get(mime, ".jpg")


def download(url: str, path: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=90) as r:
        data = r.read()
    if len(data) < 5000:
        raise ValueError(f"download too small: {len(data)} bytes")
    path.write_bytes(data)


def card_text(entry: dict[str, Any], result: dict[str, Any] | None) -> str:
    status = "`candidate-image / evidence-audit-pending`" if result else "`evidence-pending / no-safe-image`"
    source_name = result["title"] if result else "未找到达到自动门槛的开放许可图片"
    return (
        f'# {entry["id"]}｜{entry["name"]}\n### {entry["en"]}\n\n'
        f'**层级：** {entry["layer"]}\n**一级结构变量：** {entry["variable"]}\n'
        f'**结构：** {entry["structure"]}\n**排除：** {entry["exclude"]}\n'
        f'**十元入口：** {entry["ten"]}\n**自动候选：** {source_name}\n**证据状态：** {status}'
    )


def build_family_canvas(family: str, entries: list[dict[str, Any]], results: dict[str, dict[str, Any] | None]) -> Path:
    meta = FAMILIES[family]
    nodes: list[dict[str, Any]] = [{
        "id":"title","type":"text",
        "text":f'# 批次05｜{meta["label"]}\n\n**05库一次跑完批次｜14库S级Skill为规则源**\n\n自动检索只负责建立开放许可候选图，不把候选冒充S级证据。每项保留来源、作者、许可、自动匹配分和结构排除条件。',
        "x":-1500,"y":-980,"width":3000,"height":360,"color":meta["color"]
    }]
    edges: list[dict[str, Any]] = []
    x_pairs = [(-1500,-970),(-50,480)]
    row_h = 720
    for idx, entry in enumerate(entries):
        row, col = divmod(idx, 2)
        x_img, x_card = x_pairs[col]
        y = -500 + row * row_h
        result = results[entry["id"]]
        if result:
            nodes.append({"id":f'ref-{entry["id"]}',"type":"file","file":result["local_path"],"x":x_img,"y":y,"width":470,"height":430})
            nodes.append({"id":f'src-{entry["id"]}',"type":"text",
                          "text":f'[来源与许可页面]({result["source"]})\n\n文件：{result["title"]}\n作者：{result["author"] or "未明确"}\n许可：{result["license"]}｜自动匹配分：{result["score"]}',
                          "x":x_img,"y":y+445,"width":470,"height":170,"color":"6"})
            edges.append({"id":f'e-{entry["id"]}',"fromNode":f'ref-{entry["id"]}',"fromSide":"right","toNode":f'card-{entry["id"]}',"toSide":"left","color":meta["color"]})
        else:
            nodes.append({"id":f'ref-{entry["id"]}',"type":"text",
                          "text":"## 图片证据待补\n\n自动检索没有找到达到最低门槛的开放许可候选图。\n\n按 fail-closed 保留空缺，不拿相似图冒充。",
                          "x":x_img,"y":y,"width":470,"height":430,"color":"1"})
        nodes.append({"id":f'card-{entry["id"]}',"type":"text","text":card_text(entry,result),
                      "x":x_card,"y":y,"width":820,"height":615,"color":meta["color"]})
    out = OUT_DIR / f"{family}.canvas"
    out.write_text(json.dumps({"nodes":nodes,"edges":edges,"metadata":{"version":"1.0","frontmatter":{}}}, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
    return out


def update_index(success_count: int, family_paths: list[Path], missing_count: int) -> None:
    data = json.loads(INDEX_PATH.read_text(encoding="utf-8"))
    data["nodes"] = [n for n in data.get("nodes",[]) if not str(n.get("id","")).startswith("batch05-")]
    data["edges"] = [e for e in data.get("edges",[]) if not str(e.get("id","")).startswith("batch05-")]
    total = 20 + success_count
    for n in data["nodes"]:
        if n.get("id") == "title_hair_index":
            n["text"] = re.sub(r"本地可见配图：\d+项", f"本地可见配图：{total}项", n.get("text",""))
    base_y = 4200
    data["nodes"].append({
        "id":"batch05-summary","type":"text",
        "text":f'# 批次05｜主要类型一次跑完\n\n**处理：{len(ITEMS)}项｜本地图片候选：{success_count}项｜待补证据：{missing_count}项**\n\n规则：自动候选不等于S/A级通过；所有图片均保留Commons来源、作者与许可。未达到门槛的类型按fail-closed进入缺证据清单。\n\n[[批次05_自动检索与许可清单]]\n[[批次05_缺证据清单]]',
        "x":-650,"y":base_y-500,"width":1300,"height":420,"color":"4"
    })
    positions = [-2500,-1500,-500,500,1500,2500]
    for idx, path in enumerate(family_paths):
        family = path.stem
        meta = FAMILIES[family]
        node_id = f"batch05-file-{idx+1}"
        rel = path.as_posix()
        data["nodes"].append({"id":node_id,"type":"file","file":rel,"x":positions[idx],"y":base_y,"width":820,"height":760})
        data["nodes"].append({"id":f"batch05-card-{idx+1}","type":"text","text":f'## {meta["label"]}\n\n[[{rel}]]\n\n候选图与结构卡独立维护。',"x":positions[idx],"y":base_y+800,"width":820,"height":220,"color":meta["color"]})
        data["edges"].append({"id":f"batch05-edge-{idx+1}","fromNode":"batch05-summary","fromSide":"bottom","toNode":node_id,"toSide":"top","color":meta["color"]})
    data["metadata"] = {"version":"2.0","frontmatter":{}}
    INDEX_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")


def main() -> None:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    results: dict[str, dict[str, Any] | None] = {}
    for idx, entry in enumerate(ITEMS, 1):
        print(f"[{idx}/{len(ITEMS)}] {entry['id']} {entry['name']}", flush=True)
        try:
            result = search_item(entry)
            if result:
                suffix = ext_for(result["mime"])
                filename = f'{entry["id"].lower()}_{re.sub(r"[^a-z0-9]+","_",entry["en"].lower()).strip("_")}{suffix}'
                path = ASSET_DIR / filename
                download(result["url"], path)
                result["local_path"] = path.as_posix()
                results[entry["id"]] = result
                print(f"  -> {result['title']} score={result['score']}", flush=True)
            else:
                results[entry["id"]] = None
                print("  -> no candidate above threshold", flush=True)
        except Exception as exc:
            print(f"  !! {exc}", flush=True)
            results[entry["id"]] = None
        time.sleep(0.2)

    family_paths: list[Path] = []
    for family in FAMILIES:
        family_entries = [e for e in ITEMS if e["family"] == family]
        family_paths.append(build_family_canvas(family, family_entries, results))

    rows = ["# 批次05｜自动检索与开放许可清单","","> 自动匹配只建立候选池，不等于S/A级证据通过。正式入库仍需图片与名称双向核验。","","| 编号 | 类型 | 状态 | Commons文件 | 许可 | 作者 | 匹配分 | 来源 |","|---|---|---|---|---|---|---:|---|"]
    missing = []
    for entry in ITEMS:
        result = results[entry["id"]]
        if result:
            rows.append(f'| {entry["id"]} | {entry["name"]} | candidate-image | {result["title"].replace("|","/")} | {result["license"]} | {(result["author"] or "未明确").replace("|","/")} | {result["score"]} | [来源]({result["source"]}) |')
        else:
            rows.append(f'| {entry["id"]} | {entry["name"]} | evidence-pending | — | — | — | — | — |')
            missing.append(entry)
    MANIFEST_PATH.write_text("\n".join(rows)+"\n", encoding="utf-8")

    miss_lines = ["# 批次05｜缺证据清单","","以下类型没有找到达到自动门槛的开放许可候选图。按S级Skill停在 `evidence-pending`，禁止拿近似图凑数。",""]
    for entry in missing:
        miss_lines.append(f'- **{entry["id"]}｜{entry["name"]}**：检索种子 `{" / ".join(entry["queries"])}`')
    if not missing:
        miss_lines.append("- 无。全部类型至少取得一张开放许可候选图，但仍需人工S/A级审计。")
    MISSING_PATH.write_text("\n".join(miss_lines)+"\n", encoding="utf-8")

    success_count = sum(v is not None for v in results.values())
    update_index(success_count, family_paths, len(missing))
    print(f"done: success={success_count}, missing={len(missing)}")


if __name__ == "__main__":
    main()
