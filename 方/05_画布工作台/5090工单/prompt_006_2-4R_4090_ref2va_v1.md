<!-- 默认跑法: Ref2VA | 1152×640 (0.7MP) | 8步 (Turbo) | 24fps | 11.5s (276帧) | 输出前缀 FZM_第二幕_2-4R_4090_ref2va_v1 -->
<!-- 风格唯一基准: 卡2-3_风格参考_卡2-1C胡逸民反打.png (二维老上影平涂) -->
<!-- 参考视频(含音轨): 2-4_合并_11p5s_运动音频参考.mp4 | 首帧: 卡2-4_首帧_来自2-3v2尾帧.png -->

subject_definitions:
<Subject 1> is Hu Yimin, the gray-streaked-haired prisoner seated on the left side of the bench, wearing a complete dark blue-gray prison tunic; he remains silent with closed lips throughout the entire 11.500-second target video.
<Subject 2> is Fang Zhimin, the injured black-haired prisoner seated on the right side of the bench, wearing torn dark blue-gray prison clothing and ankle restraints; he is the only visible speaking character in the bread-exchange portion.
<Subject 3> is the cold gray-blue prison cell with a barred window on screen left, textured gray wall, woven bench, hard side light, controlled ink outlines, flat color blocks, and subtle paper grain.
<Subject 4> is one intact round shaobing, broken exactly once into two stable halves; it never duplicates, merges, changes filling, or changes size.
<Video 1> is `2-4_合并_11p5s_运动音频参考.mp4`, a continuous 11.500-second source structure: its first 3.500 seconds provide the Card 2-3 reverse reaction timing, and its remaining 8.000 seconds provide the complete Card 2-4 bread-exchange action and timing.
<Picture 1> is `卡2-3_风格参考_卡2-1C胡逸民反打.png`, the full-video style, linework, color, character-proportion, eyeline, and screen-direction reference (restrained old-Shanghai 2D hand-drawn: controlled dark ink contours, hard-edged flat fills, muted cold gray-blue colors, subtle paper fibers, minimal cel shading, no glossy or realistic rendering).
<Picture 2> is `卡2-4_首帧_来自2-3v2尾帧.png`, the concrete continuity keyframe for [Shot 2] at 00:03.500, defining the cut from the reverse reaction into the two-person bread shot.
<Picture 3> is `方志敏_三视图.png`, the identity and costume reference for <Subject 2>.
<Picture 4> is `08_胡逸民_三视图.png`, the identity and costume reference for <Subject 1>.
<Audio 1> is the complete synchronized 11.500-second audio track of <Video 1>, including prison ambience, the existing dialogue tail, Fang Zhimin's two bread-exchange lines, breathing, cloth movement, one bread break, and one soft bread contact.

summary:
[video editing + keyframe completion + reference generation + audio reuse] The target video is an edited version of <Video 1>. It removes the damaged ghosted reverse frames in the opening 3.500 seconds, then reaches <Picture 2> at 00:03.500 and redraws the complete 8.000-second bread exchange in the stable style of <Picture 1>. The result remains one continuous 11.500-second prison sequence, preserves <Audio 1>, keeps Hu Yimin silent, and keeps Fang Zhimin as the only visible speaker. Output at 1152×640, 8 steps, 24fps.

retention_analysis:
<Subject 1> (appears in [Shot 1], [Shot 2]): fully_preserved - Hu Yimin's gray-streaked hair, left-side position, complete tunic, closed lips, restrained lowering gaze, receiving action, and final look toward Fang are preserved.
<Subject 2> (appears in [Shot 1], [Shot 2]): fully_preserved - Fang Zhimin's injuries, dark hair, right-side position, torn clothing, controlled gestures, mouth timing, and two original spoken lines are preserved.
<Subject 3> (appears in [Shot 1], [Shot 2]): fully_preserved - the barred cell, bench, cold gray-blue palette, hard side light, flat ink outlines, and paper texture remain stable across the cut.
<Subject 4> (appears in [Shot 2]): fully_preserved - one shaobing is broken once into two stable halves, transferred once, and touched once without duplication or morphing.
<Video 1> (complete 11.500-second timing and cut structure): partially_preserved - retain its timing, action order, seated geometry, dialogue timing, and shot change at 00:03.500 while removing ghost faces, double exposure, blur, unstable contours, and style drift.
<Picture 1> (full-video visual style): attribute_transfer - transfer its controlled dark ink lines, muted cold gray-blue colors, stable proportions, restrained paper texture, and Hu-left/Fang-right screen direction to every frame.
<Picture 2> ([Shot 2] keyframe at 00:03.500): fully_preserved - use it as the exact continuity anchor for identity, brightness, seated positions, and camera side at the cut.
<Picture 3> (Fang identity): attribute_transfer - keep Fang's face shape, dark hair, injuries, clothing, and proportions consistent.
<Picture 4> (Hu identity): attribute_transfer - keep Hu's face shape, gray-streaked hair, moustache, clothing, and proportions consistent.
<Audio 1>: fully_copy - reuse the complete synchronized source audio 1:1 as the final soundtrack.

detailed_description:
The target video uses restrained old-Shanghai 2D hand-drawn animation with controlled dark ink contours, hard-edged flat fills, muted cold gray-blue colors, subtle paper fibers, minimal cel shading, and no glossy or realistic rendering. The camera stays on the same axis and preserves the visual language of <Picture 1> through the whole 11.500-second sequence.
[Shot 1] A static eye-level over-the-shoulder reverse composition begins from the first frame of <Video 1>. <Subject 1>, Hu Yimin, is in focus on the left half of the frame. <Subject 2>, Fang Zhimin, is a stable right-foreground shoulder and partial side profile. <Subject 3> remains fixed behind them. From 00:00.000 to 00:00.700, Hu looks toward Fang with his lips fully closed. From 00:00.700 to 00:02.500, Hu lowers his eyes and chin once with very small amplitude toward the half bread below the frame edge; his expression moves from attention into quiet reflection. From 00:02.500 to 00:03.500, he holds the lowered gaze and makes only a slight final eye movement toward Fang. Fang remains still, makes no new hand gesture, and keeps his mouth outside the readable lip area. Remove all double exposure, ghost faces, duplicate eyes, blur, and unstable linework from this shot.
[Shot 2] At 00:03.500, cut cleanly to the static eye-level two-person medium close shot defined by <Picture 2>. <Subject 1> sits on the left and <Subject 2> on the right foreground; their faces, brightness, line weight, and screen direction must match the final state of Shot 1. From 00:03.500 to 00:04.300, Fang holds <Subject 4>, one intact shaobing, with both hands while Hu watches it. From 00:04.300 to 00:05.400, Fang lowers his gaze and breaks the shaobing exactly once into two stable halves with natural five-finger hands. From 00:05.400 to 00:07.700, Fang keeps one half and extends the other once to Hu. <Subject 2> (S1) says in the exact timing from <Audio 1>, <d>[Chinese]先吃，凉了就不好吃了。</d> Hu receives the half without speaking. From 00:07.700 to 00:08.500, both men pause, each holding one stable half. From 00:08.500 to 00:10.300, the two bread halves touch lightly exactly once; there is no handshake, toast, embrace, or celebration. <Subject 2> (S1) says, <d>[Chinese]自有人间真情在，干一个。</d> Hu remains silent. From 00:10.300 to 00:11.500, Hu looks down at his half, then slowly raises his eyes toward Fang and settles; Fang stops speaking and holds still. No camera reversal, zoom, shake, standing, seat swap, extra gesture, repeated bread break, bread duplication, extra fingers, face swap, clothing change, document, subtitles, readable text, extra people, extra dialogue, warm orange grade, 3D rendering, or background music.

overall_soundscape:
<Audio 1> is copied as the full synchronized soundtrack: cold prison-room ambience, dialogue tail, restrained breathing, faint cloth movement, one dry bread break, and one soft bread contact. Do not add water, impacts, whooshes, voices, or music.

non_diegetic_music: N/A
