import av, json, os
p = r"C:\work\ten-yuan-vault\10-创作\二手书店的时间信封\H3输出\B1-EP1-02-2_Marcel_20261029\B1-EP1-02-2_Marcel_H3_13s_candidate.mp4"
out = os.path.dirname(p)
c = av.open(p)
s = c.streams.video[0]
meta = {"video_codec": s.codec_context.name, "width": s.width, "height": s.height, "fps": str(s.average_rate), "frames_declared": s.frames, "duration_sec": float(s.duration * s.time_base) if s.duration else (float(c.duration/av.time_base) if c.duration else None), "audio_streams": [{"codec": a.codec_context.name, "rate": a.rate, "channels": a.channels, "duration_sec": float(a.duration*a.time_base) if a.duration else None} for a in c.streams.audio]}
targets = {0.0:"H3_验收帧_头.png", 6.5:"H3_验收帧_中.png", 12.5:"H3_验收帧_尾.png"}
saved = set()
for f in c.decode(s):
    t = float(f.time or 0)
    for target,name in list(targets.items()):
        if target not in saved and t >= target:
            f.to_image().save(os.path.join(out,name))
            meta.setdefault("review_frames",[]).append({"time":t,"file":name})
            saved.add(target)
    if len(saved)==len(targets): break
print(json.dumps(meta, ensure_ascii=False, indent=2))
