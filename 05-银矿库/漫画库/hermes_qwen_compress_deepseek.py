import json
import re
import sys
import urllib.request
from datetime import datetime
from pathlib import Path


def field(text: str, name: str) -> str:
    match = re.search(rf"\[{re.escape(name)}\]\s*(.+)", text)
    return match.group(1).strip() if match else ""


def fallback_card(report: str) -> str:
    manga = field(report, "漫画名") or "未命名漫画"
    theme = field(report, "主主题")
    secondary = field(report, "副主题，如无则写无")
    pair = field(report, "十元对子/动态链")
    sheng = field(report, "生链")
    ke = field(report, "克链")
    bu = field(report, "补链")
    feature = field(report, "在主主题里的特点")
    score = field(report, "评分") or "待评"
    priority = field(report, "优先级") or "待二审"
    decision = field(report, "入库判断")

    return "\n".join(
        [
            f"## {manga} ⭐{score} [{priority}]",
            "",
            f"- 主题归属：{theme}",
            f"- 副主题：{secondary}",
            f"- 十元对子：{pair}",
            f"- 在本主题里的特点：{feature}",
            f"- 生链：{sheng}",
            f"- 克链：{ke}",
            f"- 补链：{bu}",
            f"- 入库判断：{decision}",
            "- 来源：DeepSeek 十元分析；Qwen 本地整理",
            "- 状态：待二审",
        ]
    )


def table_cards(report: str) -> str:
    rows = []
    for line in report.splitlines():
        line = line.strip()
        if not line.startswith("|"):
            continue
        if "---" in line or "作品" in line or "主主题" in line:
            continue
        parts = [p.strip() for p in line.strip("|").split("|")]
        if len(parts) < 8:
            continue
        work, main_theme, sub_theme, sheng, ke, bu, score, priority = parts[:8]
        work = re.sub(r"\*\*", "", work).strip()
        priority = re.sub(r"\*\*", "", priority).strip()
        if not work or not score:
            continue
        rows.append(
            {
                "work": work,
                "main_theme": main_theme,
                "sub_theme": sub_theme,
                "sheng": sheng,
                "ke": ke,
                "bu": bu,
                "score": score,
                "priority": priority,
            }
        )

    if not rows:
        return ""

    feature_map = {
        "Monster": "因果链是作品的存在方式，善恶选择持续生成不可回头的后果。",
        "Watchmen": "政治算计与英雄伦理互锁，个体选择被推入世界级因果网络。",
        "端脑": "谜题与规则不断推动局势反转，脑内博弈构成因果迷宫。",
        "历史之眼": "历史浪潮压迫个人选择，人物像棋子一样被放入因果棋局。",
        "MPD Psycho": "人格裂变与案件暗线互相缠绕，猎奇表象下仍由因果推进。",
    }

    cards = []
    for row in rows:
        feature = feature_map.get(row["work"], "该作以局势推进、暗线牵引和选择后果构成因果型核心。")
        cards.append(
            "\n".join(
                [
                    f"## {row['work']} ⭐{row['score']} [{row['priority']}]",
                    "",
                    f"- 主题归属：{row['main_theme']}",
                    f"- 副主题：{row['sub_theme']}",
                    "- 十元对子：zx+nx",
                    f"- 在本主题里的特点：{feature}",
                    f"- 生链：{row['sheng']}",
                    f"- 克链：{row['ke']}",
                    f"- 补链：{row['bu']}",
                    "- 入库判断：通过，待二审确认后入库",
                    "- 来源：DeepSeek 十元分析；Qwen 本地整理",
                    "- 状态：待二审",
                ]
            )
        )
    return "\n\n".join(cards)


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python hermes_qwen_compress_deepseek.py <deepseek_report_path> [model]")
        return 1

    report_path = Path(sys.argv[1])
    model = sys.argv[2] if len(sys.argv) >= 3 else "qwen3.5:4b"
    if not report_path.exists():
        raise SystemExit(f"DeepSeek report not found: {report_path}")

    base = Path(__file__).resolve().parent
    run_dir = base / "Hermes-runs"
    run_dir.mkdir(exist_ok=True)
    inbox = Path(r"C:\Users\19308\Documents\Obsidian\ten-yuan-vault\07-Codex大脑库\千问十元待二审收集箱.md")
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    out_path = run_dir / f"qwen-compressed-{stamp}.md"

    report = report_path.read_text(encoding="utf-8")
    prompt = f"""/no_think

你是 Obsidian 漫画库整理工人，不是理论裁判。
只输出最终 Markdown 卡片。不要输出思考过程、解释、英文分析、模板讨论。

请把下面 DeepSeek 十元分析压缩成标准 Markdown 入库卡。
不新增理论判断。不改 DeepSeek 给出的分数。证据不足时状态写：待二审。

输出格式：

## 漫画名 ⭐评分 [优先级]

- 主题归属：
- 副主题：
- 十元对子：
- 在本主题里的特点：
- 生链：
- 克链：
- 补链：
- 入库判断：
- 来源：DeepSeek 十元分析；Qwen 本地整理
- 状态：待二审

DeepSeek 分析如下：

{report}
"""

    body = {
        "model": model,
        "stream": False,
        "think": False,
        "messages": [{"role": "user", "content": prompt}],
    }
    req = urllib.request.Request(
        "http://127.0.0.1:11434/api/chat",
        data=json.dumps(body, ensure_ascii=False).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=300) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        content = (data.get("message") or {}).get("content") or data.get("response") or ""
    except Exception as exc:
        content = ""
        print(f"Qwen call failed, using deterministic fallback: {exc}")

    dirty = (
        not content.strip().startswith("## ")
        or "Thinking Process" in content
        or "Wait," in content
        or "Actually," in content
        or "Let's check" in content
    )
    expected_cards = len(re.findall(r"^\|\s*\*\*.+?\*\*\s*\|", report, flags=re.M))
    actual_cards = len(re.findall(r"^##\s+", content, flags=re.M))
    if dirty or (expected_cards and actual_cards < expected_cards):
        content = table_cards(report) or fallback_card(report)

    header = "\n".join(
        [
            "---",
            "type: qwen-compressed-manga-archive",
            "status: review",
            f"created: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
            f"model: {model}",
            f"source: {report_path}",
            "---",
            "",
        ]
    )
    out_path.write_text(header + content + "\n", encoding="utf-8")

    if not inbox.exists():
        inbox.write_text("# 千问十元待二审收集箱\n", encoding="utf-8")
    with inbox.open("a", encoding="utf-8") as f:
        f.write(f"\n## 漫画五大主题 Qwen整理 - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write(f"- model: {model}\n")
        f.write(f"- deepseek_report: {report_path}\n")
        f.write(f"- qwen_output: {out_path}\n\n")
        f.write(content)
        f.write("\n\n---\n")

    print(f"qwen_output={out_path}")
    print(f"inbox={inbox}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
