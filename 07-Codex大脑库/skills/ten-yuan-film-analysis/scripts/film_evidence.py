#!/usr/bin/env python3
"""Extract time-stamped evidence from LOCAL lawful media; never makes ten-yuan judgments."""
import argparse
import hashlib
import json
import math
from pathlib import Path
import shutil
import subprocess
import sys
from datetime import datetime, timezone


def run(argv):
    return subprocess.run(argv, check=True, capture_output=True, text=True, encoding="utf-8", errors="replace")


def sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def doctor():
    checks = {"ffmpeg": shutil.which("ffmpeg") is not None, "ffprobe": shutil.which("ffprobe") is not None}
    try:
        import scenedetect  # noqa: F401
        checks["scenedetect_py"] = True
    except ImportError:
        checks["scenedetect_py"] = False
    checks["fixed_ready"] = checks["ffmpeg"] and checks["ffprobe"]
    checks["scenes_ready"] = checks["fixed_ready"] and checks["scenedetect_py"]
    print(json.dumps(checks, ensure_ascii=False, indent=2))
    return 0 if checks["fixed_ready"] else 2


def probe(file):
    data = json.loads(run(["ffprobe", "-v", "error", "-show_entries",
        "format=duration:stream=index,codec_type,width,height,r_frame_rate", "-of", "json", str(file)]).stdout)
    duration = float(data.get("format", {}).get("duration", 0))
    if not math.isfinite(duration) or duration <= 0:
        raise ValueError("ffprobe returned no valid video duration")
    return duration, data.get("streams", [])


def candidate_times(file, mode, begin, end, interval):
    if mode == "fixed":
        n = max(1, math.ceil((end - begin) / interval))
        return [{"candidate_id": "T%05d" % (i + 1), "time_s": round(min(begin + (i + 0.5) * interval, end - 0.001), 3),
                 "start_s": round(begin + i * interval, 3), "end_s": round(min(begin + (i + 1) * interval, end), 3),
                 "kind": "interval_sample"} for i in range(n)]
    try:
        from scenedetect import detect, ContentDetector
    except ImportError as err:
        raise RuntimeError("scenes mode requires pip install scenedetect[opencv]") from err
    results = []
    for i, (a, b) in enumerate(detect(str(file), ContentDetector()), 1):
        low, high = max(begin, a.get_seconds()), min(end, b.get_seconds())
        if low < high:
            results.append({"candidate_id": "S%05d" % i, "time_s": round((low + high) / 2, 3),
                           "start_s": round(low, 3), "end_s": round(high, 3), "kind": "auto_cut_candidate"})
    if not results:
        raise RuntimeError("No candidate scenes detected: use --mode fixed")
    return results


def uniform_pick(items, cap):
    if len(items) <= cap:
        return items
    if cap == 1:
        return [items[len(items) // 2]]
    return [items[round(i * (len(items) - 1) / (cap - 1))] for i in range(cap)]


def extract(options):
    source = Path(options.input).expanduser().resolve(strict=True)
    if not source.is_file():
        raise ValueError("Only existing local media files are supported")
    out = Path(options.out).expanduser().resolve()
    if source == out or source == out.parent:
        raise ValueError("Output must differ from source")
    if options.interval <= 0 or options.max_frames < 1:
        raise ValueError("Positive --interval and --max-frames are required")
    for parent in [out, *out.parents]:
        if (parent / ".git").exists() or (parent / ".obsidian").exists():
            raise ValueError("Output must be OUTSIDE the Git/Obsidian vault")
    if out.exists() and any(out.iterdir()):
        raise FileExistsError("Existing non-empty output: use new run directory")
    duration, streams = probe(source)
    begin = max(0.0, options.start)
    end = min(duration, options.end if options.end is not None else duration)
    if not 0 <= begin < end <= duration:
        raise ValueError("Invalid start/end time")
    all_candidates = candidate_times(source, options.mode, begin, end, options.interval)
    selected = uniform_pick(all_candidates, options.max_frames)
    (out / "frames").mkdir(parents=True, exist_ok=True)
    frames = []
    for i, candidate in enumerate(selected, 1):
        name = "frame_%04d_%010dms.jpg" % (i, int(candidate["time_s"] * 1000))
        target = out / "frames" / name
        try:
            run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-ss", str(candidate["time_s"]),
                 "-i", str(source), "-frames:v", "1", "-q:v", "3", "-y", str(target)])
        except subprocess.CalledProcessError as exc:
            raise RuntimeError("ffmpeg frame extraction failed at %s: %s" % (candidate["time_s"], exc.stderr[-300:])) from exc
        if not target.exists() or target.stat().st_size == 0:
            raise RuntimeError("No image at %s" % candidate["time_s"])
        frames.append({**candidate, "frame_id": "F%04d" % i,
                       "relative_path": "frames/" + name, "sha256": sha256(target),
                       "evidence_scope": "SAMPLED_FRAME_ONLY", "interpretation": None})
    doc = {
        "schema": "ten-yuan-film-evidence/v1",
        "case_id": options.case_id, "film_title": options.title,
        "created_utc": datetime.now(timezone.utc).isoformat(),
        "source": {"kind": "local_file", "basename": source.name, "bytes": source.stat().st_size,
                   "sha256": sha256(source) if options.hash_source else None, "keep_local": True},
        "media": {"duration_s": round(duration, 3), "streams": streams},
        "range": {"start_s": begin, "end_s": end},
        "sampling": {"mode": options.mode, "total_candidates": len(all_candidates),
                     "sampled": len(frames), "max_frames": options.max_frames,
                     "full_shot_verified": False, "unsampled_ranges": "NOT_OBSERVED"},
        "frames": frames,
        "subtitle": {"status": "UNVERIFIED" if options.subtitle else "NOT_PROVIDED",
                     "local_path": str(Path(options.subtitle).expanduser().resolve(strict=True)) if options.subtitle else None},
        "F2_frame_captured": True, "F2_event_confirmed": False, "F2_shot_confirmed": False,
        "F3_human_feeling": None, "tenyuan_H": None, "relation_status": "NOT_ASSESSED",
        "agent_state": "WAIT_IMAGE_REVIEW",
    }
    (out / "evidence.json").write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    lines = ["# " + options.case_id + "｜电影样本帧证据（尚未观看分析）", "",
             "片名/版本：" + (options.title or "【待填】"),
             "输入："+source.name+"（不上传）",
             "范围：%.3f-%.3fs；采样%d/%d，不能推断未采样区间。" % (begin, end, len(frames), len(all_candidates)),
             "", "| FrameID | 时间(s) | 采样图 |", "|---|---:|---|"]
    lines.extend("| {frame_id} | {time_s} | [{relative_path}]({relative_path}) |".format(**f) for f in frames)
    lines.extend(["", "## Agent下一步", "必须真正阅读帧、对照邻接帧/字幕或人工回放原片；缺少的视听事实写【待看片】。",
                  "抽出的帧不是原片已完成的逐镜证据。带frame_id/time_s的可观察事实才能进入L3。",
                  "L3单焦点幕卡 → L2等宽横纵网络/拓扑Txx → L1十元感受【H】，正式生克补仍须L2门禁。",
                  "不得上传原电影、截图、字幕、私有路径至GitHub或公共Canvas。"])
    (out / "agent_input.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(json.dumps({"ok": True, "case_id": options.case_id, "sampled": len(frames),
                      "candidate_count": len(all_candidates), "out": str(out),
                      "status": "F2_FRAME_CAPTURED / WAIT_IMAGE_REVIEW", "ai_inference": False}, ensure_ascii=False))
    return 0


def main():
    parser = argparse.ArgumentParser(description="Evidence-first local film frame sampler; no DRM/download/AI inference")
    subs = parser.add_subparsers(dest="action", required=True)
    subs.add_parser("doctor")
    p = subs.add_parser("extract")
    p.add_argument("--input", required=True)
    p.add_argument("--out", required=True)
    p.add_argument("--case-id", required=True)
    p.add_argument("--title", default="")
    p.add_argument("--mode", choices=["fixed", "scenes"], default="fixed")
    p.add_argument("--interval", type=float, default=5)
    p.add_argument("--start", type=float, default=0)
    p.add_argument("--end", type=float)
    p.add_argument("--max-frames", type=int, default=80)
    p.add_argument("--subtitle")
    p.add_argument("--hash-source", action="store_true")
    options = parser.parse_args()
    try:
        return doctor() if options.action == "doctor" else extract(options)
    except (ValueError, RuntimeError, OSError, subprocess.CalledProcessError) as err:
        print(json.dumps({"ok": False, "error": str(err), "state": "WAIT_SOURCE_OR_ENV"}, ensure_ascii=False), file=sys.stderr)
        return 2


if __name__ == "__main__":
    sys.exit(main())
