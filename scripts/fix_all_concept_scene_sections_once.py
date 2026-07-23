#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

ROOT = Path("09-给674（我）用的库/概念库")
SUFFIX = "_is-a名词素材库.canvas"
REPORT = ROOT / "场景区全库修复报告_2026-07-23.md"
MARKER = ROOT / ".scene-sections-fixed-20260723"

# 这些都是可以独立形成画面的场景概念，不再使用建筑演化链占位。
LIBRARY: dict[str, list[dict[str, Any]]] = {
    "龙与魔法": [
        {"title": "🐉 龙域日常", "subtitle": "5项 · 驯养/学习/交易", "isa": "龙与魔法日常场景", "shot": "角色与龙、魔法设施发生互动", "names": ["龙骑士晨训", "幼龙孵化守夜", "魔法市集交易", "学徒试咒事故", "飞龙驿站换乘"]},
        {"title": "⚔️ 冒险冲突", "subtitle": "5项 · 追逐/战斗/灾变", "isa": "龙与魔法冒险场景", "shot": "形成明确行动、危险与画面焦点", "names": ["龙群越城", "屠龙队山口集结", "魔法塔失控", "空中骑战", "龙巢夺宝"]},
        {"title": "🔥 神话仪式", "subtitle": "5项 · 契约/王权/传说", "isa": "龙族神话仪式场景", "shot": "突出契约、传承与时代感", "names": ["古龙苏醒", "血契缔结", "王冠受焰", "星陨召龙", "龙骨葬礼"]},
    ],
    "精灵森林": [
        {"title": "🌿 林地生活", "subtitle": "5项 · 采集/照护/交流", "isa": "精灵森林生活场景", "shot": "林地居民与自然环境共同生活", "names": ["月泉取水", "树冠采果", "林间织歌", "小鹿引路", "蘑菇灯夜市"]},
        {"title": "🏹 林境行动", "subtitle": "5项 · 巡守/追踪/救援", "isa": "精灵森林行动场景", "shot": "表现巡守、追踪、防御和救援", "names": ["林哨换岗", "雾径追踪", "古树救援", "弓手伏击", "入侵者审判"]},
        {"title": "🌙 自然仪式", "subtitle": "5项 · 成长/婚盟/送别", "isa": "精灵自然仪式场景", "shot": "表现族群传统与森林回应", "names": ["月下成年礼", "古树记忆回放", "花雨婚礼", "森灵复苏", "落叶送葬"]},
    ],
    "自然之灵": [
        {"title": "🍃 共生日常", "subtitle": "5项 · 元素/村落/陪伴", "isa": "自然精灵共生场景", "shot": "元素生命参与日常劳动与陪伴", "names": ["河灵梳水", "石灵晒太阳", "风灵追叶", "火灵守灶", "苔灵覆屋"]},
        {"title": "🌪 失衡危机", "subtitle": "5项 · 灾害/迁移/修复", "isa": "自然元素失衡场景", "shot": "自然力量改变居民行动与生存", "names": ["河道逆流", "山神震怒", "林火逃亡", "枯季迁灵", "暴风围村"]},
        {"title": "🌱 元素仪式", "subtitle": "5项 · 四季/灵脉/回赠", "isa": "自然元素仪式场景", "shot": "表现季节、灵脉与生命循环", "names": ["四季交接", "灵脉苏醒", "生命回赠", "元素议会", "大地安魂"]},
    ],
    "天使神域": [
        {"title": "☁️ 神域秩序", "subtitle": "5项 · 巡礼/登记/守望", "isa": "天使神域秩序场景", "shot": "表现神域居民、职责与日常秩序", "names": ["云阶巡礼", "羽翼整修", "圣歌晨祷", "灵魂登记", "星门值守"]},
        {"title": "⚡ 战争审判", "subtitle": "5项 · 追捕/空战/裁决", "isa": "天使神域冲突场景", "shot": "突出空战、追捕与神圣裁决", "names": ["堕天追捕", "云海空战", "圣枪降临", "罪魂审判", "天门封锁"]},
        {"title": "✨ 神圣仪式", "subtitle": "5项 · 加冕/神谕/升天", "isa": "天使神圣仪式场景", "shot": "表现祝圣、神谕、复生与送别", "names": ["加冕祝圣", "羽化升天", "神谕降下", "光雨复生", "天使葬礼"]},
    ],
    "远古创世": [
        {"title": "🌍 初世景象", "subtitle": "5项 · 塑造/命名/诞生", "isa": "远古创世诞生场景", "shot": "表现世界、文明与生灵首次出现", "names": ["巨神塑山", "海洋初涌", "第一场雨", "原火传递", "万兽命名"]},
        {"title": "🌋 混沌冲突", "subtitle": "5项 · 裂变/洪水/神战", "isa": "远古创世灾变场景", "shot": "表现世界尺度的冲突与地貌变化", "names": ["天地裂开", "巨兽争陆", "日月追逐", "洪水吞世", "神族内战"]},
        {"title": "🌌 创世仪式", "subtitle": "5项 · 星辰/人类/纪元", "isa": "远古创世仪式场景", "shot": "表现造物、赋予与纪元交接", "names": ["星辰铸造", "人类捏塑", "语言赐予", "纪元封印", "旧神沉眠"]},
    ],
    "乌托邦仙境": [
        {"title": "🌈 乐园日常", "subtitle": "5项 · 休闲/学习/共享", "isa": "乌托邦仙境生活场景", "shot": "表现轻盈便利、共享与快乐秩序", "names": ["空中花园茶会", "彩桥通勤", "无人果园采摘", "云端课堂", "温泉音乐会"]},
        {"title": "🪞 完美裂缝", "subtitle": "5项 · 异常/禁区/怀疑", "isa": "乌托邦仙境异常场景", "shot": "让完美表面出现可见裂缝", "names": ["完美笑容失控", "禁区追逐", "记忆修剪", "天候故障", "边界外窥望"]},
        {"title": "🎉 幻境仪式", "subtitle": "5项 · 庆典/心愿/重置", "isa": "乌托邦仙境仪式场景", "shot": "表现庆典、心愿和系统性重置", "names": ["永昼庆典", "梦境交换", "心愿放飞", "无忧加冕", "乐园重置"]},
    ],
    "矮人地底": [
        {"title": "⛏️ 矿城生活", "subtitle": "5项 · 采矿/锻造/家族", "isa": "矮人地底生活场景", "shot": "表现矿业、锻造、运输与家族生活", "names": ["换班钟响", "晶矿分拣", "锻造学徒考核", "轨道货车交会", "地底家族宴"]},
        {"title": "🧨 采掘危机", "subtitle": "5项 · 塌方/怪物/抢修", "isa": "矮人地底危机场景", "shot": "表现矿难、怪物和工程抢修", "names": ["矿井塌方", "熔炉爆燃", "深层怪物袭击", "岩浆桥抢修", "失踪矿队搜救"]},
        {"title": "🔨 氏族仪式", "subtitle": "5项 · 成年/王权/祖先", "isa": "矮人氏族仪式场景", "shot": "表现器物传承、氏族誓约与送别", "names": ["新锤授予", "祖炉点火", "王印锻造", "石棺送葬", "山心誓约"]},
    ],
    "秘术学院": [
        {"title": "📚 学院日常", "subtitle": "5项 · 课程/社团/研究", "isa": "秘术学院学习场景", "shot": "表现学生、导师、课程与学院生活", "names": ["魔药课爆锅", "图书馆禁书检索", "使魔放风", "夜间天文课", "学生社团决斗"]},
        {"title": "🧪 秘术事故", "subtitle": "5项 · 反噬/失控/封锁", "isa": "秘术学院事故场景", "shot": "表现法术失败、实验失控和救场", "names": ["咒语反噬", "传送门串班", "地下实验失控", "考试召来异物", "校塔时间停滞"]},
        {"title": "🎓 学院仪式", "subtitle": "5项 · 分院/授杖/传承", "isa": "秘术学院仪式场景", "shot": "表现身份确认、学术裁决与传承", "names": ["新生分院", "首席授杖", "禁术听证", "毕业星火礼", "院长封印交接"]},
    ],
    "海盗航海": [
        {"title": "⚓ 船上日常", "subtitle": "5项 · 分赃/劳作/补给", "isa": "海盗船上生活场景", "shot": "表现船员协作、娱乐、修船与补给", "names": ["甲板分赃", "桅杆换帆", "船舱赌局", "暴雨抢修", "岛岸补水"]},
        {"title": "🏴‍☠️ 航海冲突", "subtitle": "5项 · 追击/接舷/海难", "isa": "海盗航海冲突场景", "shot": "表现追逐、战斗、海难与夺宝", "names": ["接舷战", "海军追击", "雾中触礁", "巨兽袭船", "宝图争夺"]},
        {"title": "🌊 海上传说", "subtitle": "5项 · 祭祀/亡魂/宝藏", "isa": "海盗海上传说场景", "shot": "表现海上信仰、诅咒、继承与送别", "names": ["海神祭", "船长加冕", "亡魂船会合", "宝藏开封", "海上葬礼"]},
    ],
    "时间遗迹": [
        {"title": "⏳ 时间异常", "subtitle": "5项 · 逆行/重复/错位", "isa": "时间异常场景", "shot": "让时间规则直接改变人物与环境", "names": ["逆行市集", "重复黄昏", "静止战场", "加速花园", "年龄错位旅店"]},
        {"title": "🕰 遗迹探索", "subtitle": "5项 · 校时/穿越/考古", "isa": "时间遗迹探索场景", "shot": "表现调查、修复、穿越和避难", "names": ["钟塔校时", "断代考古", "时间裂缝穿越", "过去影像追踪", "未来废墟避难"]},
        {"title": "⌛ 纪元仪式", "subtitle": "5项 · 归档/交接/重写", "isa": "时间纪元仪式场景", "shot": "表现记忆归档、历史裁决和时代交接", "names": ["年轮审判", "记忆归档", "纪元交接", "历史重写", "时间守墓人送别"]},
    ],
    "骑士王国": [
        {"title": "🏰 王国日常", "subtitle": "5项 · 守卫/训练/传令", "isa": "骑士王国生活场景", "shot": "表现城镇秩序、骑士训练与后勤", "names": ["城门换岗", "骑士晨练", "市集巡逻", "铁匠配甲", "驿站传令"]},
        {"title": "🛡 战争冲突", "subtitle": "5项 · 守城/冲锋/救援", "isa": "骑士王国战争场景", "shot": "表现集结、攻防、伏击与战后救援", "names": ["边境集结", "城墙守卫", "骑枪冲锋", "林地伏击", "战后救援"]},
        {"title": "👑 荣誉仪式", "subtitle": "5项 · 授勋/宣誓/葬礼", "isa": "骑士王国仪式场景", "shot": "表现荣誉、王权、婚盟与送别", "names": ["骑士授勋", "王室婚礼", "旗帜宣誓", "决斗裁决", "英灵葬礼"]},
    ],
    "游牧流浪": [
        {"title": "🏕 营地日常", "subtitle": "5项 · 家庭/劳作/交流", "isa": "游牧营地生活场景", "shot": "表现家庭、牲畜、手工与营地关系", "names": ["清晨挤奶", "帐前织毯", "儿童赶羊", "驼队装货", "篝火讲故事"]},
        {"title": "🐫 迁徙旅途", "subtitle": "5项 · 拔营/寻水/风暴", "isa": "游牧迁徙场景", "shot": "表现队伍移动、环境压力和互助", "names": ["拔营出发", "风暴中护队", "过河迁牧", "荒原寻水", "夜间迷路"]},
        {"title": "🏇 部族仪式", "subtitle": "5项 · 议事/节庆/盟约", "isa": "游牧部族仪式场景", "shot": "表现部族决策、节庆、婚盟与送别", "names": ["族长议事", "新帐祝福", "赛马节", "婚盟交换", "远行者送别"]},
    ],
    "巨人山脉": [
        {"title": "🏔 山民日常", "subtitle": "5项 · 采石/放牧/建造", "isa": "巨人山脉生活场景", "shot": "表现巨人与山民的体量关系和日常劳动", "names": ["巨人采石", "云巅放牧", "山腰烹锅", "峡谷架桥", "岩洞家宴"]},
        {"title": "🌨 山脉危机", "subtitle": "5项 · 雪崩/雷暴/迁徙", "isa": "巨人山脉危机场景", "shot": "表现极端山地环境与巨人行动", "names": ["雪崩救援", "巨人迁徙", "山神争斗", "攀登者误入", "雷暴封峰"]},
        {"title": "🪨 巨人仪式", "subtitle": "5项 · 成年/命名/长眠", "isa": "巨人氏族仪式场景", "shot": "表现山峰、祖先、器物与生命传承", "names": ["举石成年礼", "山峰命名", "祖骨祭", "雷锤传承", "长眠入山"]},
    ],
    "深渊混沌": [
        {"title": "🫧 异常常态", "subtitle": "5项 · 扭曲/生长/迁移", "isa": "深渊混沌日常场景", "shot": "让异常规则成为居民必须适应的生活", "names": ["触须潮汐", "重力倒置集市", "无脸群体迁徙", "器官墙呼吸", "黑光植物开花"]},
        {"title": "🕳 深渊危机", "subtitle": "5项 · 扩张/污染/吞没", "isa": "深渊混沌危机场景", "shot": "表现形体、意识与城市被侵蚀", "names": ["裂口扩张", "形体崩解", "眷族围猎", "意识污染", "城区吞没"]},
        {"title": "👁 混沌仪式", "subtitle": "5项 · 献祭/重铸/翻面", "isa": "深渊混沌仪式场景", "shot": "表现身份剥离、旧神注视和规则翻转", "names": ["深渊献祭", "名字剥离", "旧神注视", "肉身重铸", "世界翻面"]},
    ],
    "血源诅咒": [
        {"title": "🩸 猎夜生活", "subtitle": "5项 · 整备/血疗/封锁", "isa": "血源诅咒猎夜生活场景", "shot": "表现猎人、市民和教会在夜前的准备", "names": ["猎人整备", "血疗排队", "教会巡夜", "市民封窗", "乌鸦收尸"]},
        {"title": "🐺 猎杀危机", "subtitle": "5项 · 兽化/围猎/血月", "isa": "血源诅咒猎杀场景", "shot": "表现兽化、追猎、清洗与血月升级", "names": ["兽化爆发", "狭巷追猎", "巨兽冲街", "教会清洗", "血月降临"]},
        {"title": "🌕 禁忌仪式", "subtitle": "5项 · 弥撒/古神/继承", "isa": "血源诅咒禁忌仪式场景", "shot": "表现血液信仰、古神降生与猎人传承", "names": ["血液弥撒", "猎人梦醒", "古神诞生", "猎人继承", "月下葬礼"]},
    ],
    "魂系": [
        {"title": "🔥 衰败日常", "subtitle": "5项 · 篝火/修武/巡礼", "isa": "魂系衰败世界生活场景", "shot": "表现短暂休息、补给和孤独守望", "names": ["篝火歇息", "铁匠修武", "亡者排队", "巡礼者交换", "城门守望"]},
        {"title": "⚔️ 苦难战斗", "subtitle": "5项 · 雾门/巨物/绝境", "isa": "魂系高压战斗场景", "shot": "表现巨物、险地、崩塌和终局对决", "names": ["雾门前集结", "巨物苏醒", "城墙坠落战", "毒沼跋涉", "断桥决战"]},
        {"title": "♻️ 轮回仪式", "subtitle": "5项 · 传火/熄火/献身", "isa": "魂系轮回仪式场景", "shot": "表现循环延续、拒绝、献身与无名送别", "names": ["传火", "熄火", "王座献身", "灵魂回收", "无名墓葬"]},
    ],
    "洛夫克拉夫特": [
        {"title": "🌫 异常日常", "subtitle": "5项 · 港镇/学术/梦游", "isa": "洛夫克拉夫特异常日常场景", "shot": "让港镇生活逐渐显出不正常", "names": ["海港居民闭门", "图书馆查禁书", "教授夜谈", "渔民献鱼", "梦游者集合"]},
        {"title": "🔍 调查恐怖", "subtitle": "5项 · 追踪/发现/失控", "isa": "洛夫克拉夫特调查场景", "shot": "表现线索发现、未知接近和理智压力", "names": ["地窖发现符号", "海雾怪影", "地下祭坛追踪", "疯人院失控", "星象异常"]},
        {"title": "🐙 宇宙仪式", "subtitle": "5项 · 召唤/归位/沉没", "isa": "洛夫克拉夫特宇宙仪式场景", "shot": "表现旧神、群星、异族与城镇毁灭", "names": ["深潜者婚礼", "群星归位", "旧神召唤", "理智崩塌", "城镇沉海"]},
    ],
    "末世废土": [
        {"title": "🛠 废土生活", "subtitle": "5项 · 取水/交易/修理", "isa": "末世废土生存场景", "shot": "表现水、废料、车辆、种植和守夜", "names": ["水站排队", "废料市集", "车队修理", "屋顶种植", "夜间守火"]},
        {"title": "☢️ 生存危机", "subtitle": "5项 · 沙暴/掠夺/辐射", "isa": "末世废土危机场景", "shot": "表现极端天气、追车、辐射和资源冲突", "names": ["沙暴撤离", "掠夺者追车", "辐射区搜救", "变异兽围营", "水源争夺"]},
        {"title": "🚩 聚落仪式", "subtitle": "5项 · 开井/结盟/纪念", "isa": "末世废土聚落仪式场景", "shot": "表现水源、联盟、记忆、成年与葬礼", "names": ["新井开封", "车队结盟", "旧世界纪念", "成人远行", "废土葬礼"]},
    ],
    "亡灵诅咒": [
        {"title": "💀 死者日常", "subtitle": "5项 · 巡街/交易/修补", "isa": "亡灵社会日常场景", "shot": "表现亡者秩序、工作、交易和社交", "names": ["骷髅巡街", "幽灵排队", "墓园交易", "尸匠缝补", "亡者晚宴"]},
        {"title": "🕯 诅咒危机", "subtitle": "5项 · 暴动/逃逸/围城", "isa": "亡灵诅咒危机场景", "shot": "表现墓穴暴动、尸潮、扩散和驱魔失败", "names": ["墓穴暴动", "灵魂逃逸", "尸潮围城", "诅咒扩散", "驱魔失败"]},
        {"title": "⚰️ 冥界仪式", "subtitle": "5项 · 招魂/称量/封印", "isa": "亡灵冥界仪式场景", "shot": "表现招魂、王权、裁决、婚礼和封印", "names": ["招魂夜", "死者加冕", "灵魂称量", "棺木婚礼", "永眠封印"]},
    ],
    "哥特奇幻": [
        {"title": "🕯 阴城日常", "subtitle": "5项 · 钟声/夜宴/施药", "isa": "哥特奇幻城市生活场景", "shot": "表现阴雨城市、教会、贵族与墓园日常", "names": ["教堂晨钟", "雨巷马车", "贵族夜宴", "修女施药", "墓园花商"]},
        {"title": "🦇 黑暗事件", "subtitle": "5项 · 追猎/围困/封城", "isa": "哥特奇幻黑暗事件场景", "shot": "表现火灾、追猎、审讯、围困与黑雾", "names": ["尖塔火灾", "夜兽追猎", "密室审讯", "城堡围困", "黑雾封城"]},
        {"title": "🩶 哥特仪式", "subtitle": "5项 · 弥撒/婚礼/继承", "isa": "哥特奇幻仪式场景", "shot": "表现宗教、婚盟、继承、处刑与葬礼", "names": ["午夜弥撒", "血色婚礼", "古堡继承", "钟楼处刑", "家族葬礼"]},
    ],
}


def first_line(text: str) -> str:
    return text.splitlines()[0] if text else ""


def text_successors(node_id: str, node_by_id: dict[str, dict[str, Any]], edges: list[dict[str, Any]]) -> list[dict[str, Any]]:
    result = []
    for edge in edges:
        if str(edge.get("fromNode")) != node_id:
            continue
        target = node_by_id.get(str(edge.get("toNode")))
        if target and target.get("type") == "text":
            result.append(target)
    return result


def column_leaves(header: dict[str, Any], node_by_id: dict[str, dict[str, Any]], edges: list[dict[str, Any]]) -> list[dict[str, Any]]:
    current = header
    x = current.get("x")
    leaves = []
    for _ in range(5):
        candidates = [
            node for node in text_successors(str(current["id"]), node_by_id, edges)
            if node.get("x") == x and node.get("y", -999999) > current.get("y", -999999)
        ]
        if not candidates:
            raise RuntimeError(f"cannot traverse scene column from {header['id']} at {current['id']}")
        current = min(candidates, key=lambda node: node.get("y", 0))
        leaves.append(current)
    return leaves


def rewrite(path: Path, style: str) -> tuple[bool, list[str], list[str]]:
    data = json.loads(path.read_text(encoding="utf-8"))
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])
    node_by_id = {str(node.get("id")): node for node in nodes}
    scene_headers = [node for node in nodes if node.get("type") == "text" and str(node.get("text", "")).startswith("🌄 场景 is-a")]
    if len(scene_headers) != 1:
        raise RuntimeError(f"scene header count={len(scene_headers)}")
    scene_header = scene_headers[0]
    category_headers = sorted(text_successors(str(scene_header["id"]), node_by_id, edges), key=lambda node: node.get("x", 0))
    if len(category_headers) != 3:
        raise RuntimeError(f"scene category count={len(category_headers)}")
    columns = [column_leaves(header, node_by_id, edges) for header in category_headers]
    old_names = [first_line(node.get("text", "")) for column in columns for node in column]
    new_names = [name for category in LIBRARY[style] for name in category["names"]]
    if old_names == new_names:
        return False, old_names, new_names

    cats = LIBRARY[style]
    scene_header["text"] = (
        f"🌄 场景 is-a {style}可绘制场景类目 "
        f"├ {cats[0]['title']} ┤ {cats[1]['title']} ┤ {cats[2]['title']} "
        "├ ↔ 服装·建筑·构件·元素"
    )
    for header, leaves, category in zip(category_headers, columns, cats):
        header["text"] = f"{category['title']}\n{category['subtitle']}"
        for node, name in zip(leaves, category["names"]):
            node["text"] = f"{name}\nis-a {category['isa']}\n🎬 {name} / {category['shot']}"

    path.write_text(json.dumps(data, ensure_ascii=False, indent="\t") + "\n", encoding="utf-8")
    return True, old_names, new_names


def main() -> None:
    paths = sorted(path for path in ROOT.glob(f"*{SUFFIX}") if ".bak" not in path.name and ".backup" not in path.name)
    styles = {path.name[:-len(SUFFIX)] for path in paths}
    expected = set(LIBRARY)
    if styles != expected:
        raise SystemExit(f"Canvas mapping mismatch; missing={sorted(expected-styles)} extra={sorted(styles-expected)}")

    report = [
        "# 概念库场景区全库修复报告",
        "",
        f"- 扫描 Canvas：{len(paths)}",
        "- 修复原则：把建筑全链 v2/v3/v4 占位节点替换为可独立成画的世界观场景",
        "- 保留内容：服装、建筑、构件、元素、参考 file 节点和全部既有连线",
        "",
    ]
    changed = 0
    for path in paths:
        style = path.name[:-len(SUFFIX)]
        did_change, old_names, new_names = rewrite(path, style)
        report.append(f"## {style}")
        report.append("")
        report.append(f"- changed: {str(did_change).lower()}")
        report.append(f"- old: {'、'.join(old_names)}")
        report.append(f"- new: {'、'.join(new_names)}")
        report.append("")
        changed += int(did_change)

    REPORT.write_text("\n".join(report), encoding="utf-8")
    MARKER.write_text(f"fixed=20\nchanged={changed}\n", encoding="utf-8")
    print(f"validated={len(paths)} changed={changed}")


if __name__ == "__main__":
    main()
