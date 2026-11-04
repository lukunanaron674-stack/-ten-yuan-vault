from __future__ import annotations
import json, os, subprocess, sys
from pathlib import Path
import av
import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFont

raw = Path(sys.argv[1])
final = Path(sys.argv[2])
outdir = Path(sys.argv[3])
outdir.mkdir(parents=True, exist_ok=True)
if not raw.exists():
    raise SystemExit(f"missing raw H3 output: {raw}")

# Read metadata and decode all native frames while sampling review moments.
cont = av.open(str(raw))
v = cont.streams.video[0]
fps = float(v.average_rate or 24)
raw_audio = []
for a in cont.streams.audio:
    raw_audio.append({"codec": a.codec_context.name, "sample_rate": a.rate,
                      "channels": len(a.layout.channels) if a.layout else None,
                      "duration_seconds": (float(a.duration * a.time_base) if a.duration and a.time_base else None)})
requested = [0.8, 1.58, 2.4, 3.18, 4.3, 5.39, 6.0, 6.99, 7.7, 8.49, 10.0, 11.69, 12.5, 14.2]
indices = sorted(set(max(0, round(t * fps)) for t in requested))
chosen = {}
frame_count = 0
for frame in cont.decode(video=0):
    if frame_count in indices:
        chosen[frame_count] = frame.to_image().convert("RGB")
    frame_count += 1
cont.close()
if frame_count < 343:
    raise SystemExit(f"native output has only {frame_count} decoded frames; cannot create 343-frame deliverable")

# Keep the native H3 MP4 untouched. Create a same-shot-set 343-frame candidate.
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
duration = 343 / 24
cmd = [ffmpeg, "-hide_banner", "-loglevel", "error", "-y", "-i", str(raw),
       "-map", "0:v:0", "-map", "0:a?", "-frames:v", "343", "-t", f"{duration:.12f}",
       "-vf", "crop=736:414:0:1", "-c:v", "libx264", "-preset", "fast", "-crf", "18", "-pix_fmt", "yuv420p",
       "-r", "24", "-fps_mode", "cfr", "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", str(final)]
subprocess.run(cmd, check=True)

# Extract representative frames for every shot and each cut boundary.
font = ImageFont.load_default()
thumbs = []
for t in requested:
    idx = max(0, round(t * fps))
    src = chosen.get(idx)
    if src is None:
        continue
    p = outdir / f"review_{idx:04d}_{t:05.2f}s.png"
    src.save(p)
    thumb = src.copy()
    thumb.thumbnail((360, 203))
    canvas = Image.new("RGB", (380, 235), "#efefef")
    canvas.paste(thumb, ((380-thumb.width)//2, 8))
    ImageDraw.Draw(canvas).text((10, 215), f"{t:.2f}s | frame {idx}", fill="black", font=font)
    thumbs.append(canvas)
cols = 4
rows = (len(thumbs)+cols-1)//cols
sheet = Image.new("RGB", (cols*380, rows*235), "white")
for i, thumb in enumerate(thumbs):
    sheet.paste(thumb, ((i%cols)*380, (i//cols)*235))
sheet.save(outdir / "contact_sheet_7shots.png")

# Verify final container frame count, duration, and sound stream; estimate audio level.
verify = av.open(str(final))
vv = verify.streams.video[0]
final_frames = sum(1 for _ in verify.decode(video=0))
verify.seek(0)
final_audio = []
for ai, a in enumerate(verify.streams.audio):
    rms_parts = []
    peak = 0.0
    samples = 0
    for af in verify.decode(audio=ai):
        arr = af.to_ndarray().astype("float64")
        if arr.size:
            peak = max(peak, float(abs(arr).max()))
            rms_parts.append(float((arr*arr).mean() ** 0.5))
            samples += arr.size
    final_audio.append({"codec": a.codec_context.name, "sample_rate": a.rate,
                        "channels": len(a.layout.channels) if a.layout else None,
                        "duration_seconds": (float(a.duration * a.time_base) if a.duration and a.time_base else None),
                        "peak_sample": peak, "mean_frame_rms": (sum(rms_parts)/len(rms_parts) if rms_parts else 0.0),
                        "decoded_values": samples})
verify.close()
if final_frames != 343:
    raise SystemExit(f"final candidate frame count mismatch: {final_frames}, expected 343")
report = {"raw_file": str(raw), "native_video_frames": frame_count, "native_fps": fps,
          "native_duration_seconds": frame_count/fps, "native_audio_streams": raw_audio,
          "deliverable_file": str(final), "deliverable_frames": final_frames,
          "deliverable_fps": 24, "deliverable_width": vv.width, "deliverable_height": vv.height, "deliverable_duration_seconds": final_frames/24,
          "deliverable_audio_streams": final_audio,
          "trim_note": "Post-production trim only; first 343 of 345 H3 frames retained. No H3 segments were split or joined.",
          "contact_sheet": str(outdir / "contact_sheet_7shots.png")}
(outdir / "media_qa.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps(report, ensure_ascii=False, indent=2))




