---
title: 黎黎隆主题曲 · Suno 投喂包 v1.0（STAGING）
date: 2026-10-02
status: STAGING
tags: [主题曲, Suno, STAGING, 投喂包]
companion: 黎黎隆_世界观主题曲_v1.0_STAGING.md
---

# Suno 投喂包 · 使用说明

**三步**：
1. Suno → **Create** → 打开 **Custom**（自定义模式）
2. 下面三个框（①②③）分别整段复制粘贴到 **Style of Music / Exclude Styles / Lyrics**
3. Title 填歌名（还没拍板，先填《留一个锚》占位）→ 生成

> ⚠️ 歌词是中文，Suno 支持；**演唱提示都写成英文方括号标签**，识别更稳。
> ⚠️ 一次生成 2 首，挑好的 → Extend / Remix 再迭代；别指望一条过。

---

## ① Style of Music（复制这个）

**精简版（首选，风格框短更稳）：**

```
cold biomechanical fantasy, organic-industrial, haunting restrained, E Dorian, 72-92 BPM, breathy intimate female vocal, children choir hum, muted cello, hydraulic heartbeat pulses, glassy metallic resonances, cinematic dry mix, no EDM, no epic orchestra
```

**完整版（如果精简版方向不对再换）：**

```
Cold-white biomechanical fantasy ballad, organic-industrial texture, haunting and restrained. Sparse prepared piano, muted solo cello, sub-bass hydraulic pulses like a slow heartbeat, glassy metallic wire resonances, cold cyan synth pads, heavy low bowed strings. Breathy intimate close-mic female vocal with faint childlike choral hum; a second voice enters only in the final chorus. Starts slow 72 BPM, builds to 92, bridge slows to 68. Cinematic dry mix, no EDM drop, no generic epic orchestra, no trap percussion.
```

## ② Exclude Styles（复制这个）

```
EDM, dubstep, trap, epic orchestral, trailer music, upbeat pop, power ballad, screamo, aggressive drums
```

## ③ Lyrics（复制这个，从 [Intro] 到最后一行）

```
[Intro - instrumental, door-station self-check beeps, hydraulic hiss, cold ambient pads]

[Verse 1 - soft breathy vocal, sparse piano]
进雾之前 我先留一个名字
刻在门站那面墙的第三格刻度里
尾尖垂下来 接上青蓝的冷却液
他们说往前走的人 不必留证据

我把自己的一节 放在你门口
等路线稳了 你再把灯提在右手
承重带勒进肩膀 转身半径要够
异体的街口 从来不留窄口

[Pre-Chorus - rising tension, cello enters]
可我的尾在长 长过你们画的线
它扫过的地方 通道就得让一边
他们管这叫开路 又叫不回头
只有我知道 哪节关节开始生锈

[Chorus - full instruments, slow heavy groove]
每留一个锚 就锁住我一节
路线越稳 我越是不能改向
把我的名字 挂在别人的灯上
我就成了那条 撤不回来的网

去得更远 是我说的
还能回来 是他们说的
中间只隔着一节尾骨的锁
和一张回接床上 没人躺的角落

[Verse 2 - stripped back, colder]
第二片雾里 有更干净的骨头
他们说拔下来 能换一整年的油
保养身体的匠人 替我换了新口
旧的壳不降解 夜里朝雾区走

[Pre-Chorus 2 - uneasy, granular texture]
我听见它爬 像听见我自己
被丢在维护街 第三级台阶那里

[Chorus]

[Bridge - slow down, heartbeat only, children choir hum]
公共接口是好的 插槽还亮着
卸装槽排着队 回接床空着
只是远行的人 再也找不到
那条只属于自己的 回身的角落

他们管它叫断点 管它叫进步
管我叫开路者 管我叫遗物

[Final Chorus - two voices, children hum, higher octave]
要我把锚全拔了 你们就自由
要你们留着灯 我就不能回头
这道题没有第三行的解法
只有尾骨一节一节地回答

[Outro - instrumental, fading beeps, cold pad, long tail]
雾散了 门站亮起青绿
卸装槽里躺着 一具不属任何任务的身体
尾托托住它 像托住一句
没有说完的 我回来了

[End]
```

---

## 十元对照审计表（**不要**粘进 Suno，只做审计）

| Suno 标签 | 段落 | 十元 |
|---|---|---|
| [Intro] | 门站自检音 | `n`（容器/承载） |
| [Verse 1] | 留锚 | `xn3`（把一节自己交给公共节点） |
| [Pre-Chorus] | 夺路 | `zx8`（尾改变通过条件，路线重排） |
| [Chorus] | 锁止+被看见 | `nz + z`（不想结束 + 挂在别人灯上） |
| [Verse 2] | 欲望与代价 | `x`（更干净的骨头换油；旧壳反噬） |
| [Pre-Chorus 2] | 旧壳回爬 | `xn` 污染桥 |
| [Bridge] | **返身断点** | `xz`（克位，整首歌张力落点） |
| [Final Chorus] | 拔锚二选一 | `zx + xn`（没有第三行） |
| [Outro] | 回接床安顿 | `n`（收束，不给答案） |

## 生成后验收 4 问

1. 桥段有没有**明显减速 + 空拍**？（没有 → 加重 `[Bridge - slow down, heartbeat only]` 或单独重跑桥段）
2. 童声哼鸣出没出现？（没出现 → style 里把 `children choir hum` 提到最前）
3. 有没有唱成"燃向"？（有 → Exclude Styles 加 `anthemic, uplifting`）
4. 中文咬字糊不糊？（糊 → 换精简 Style，去掉过多风格词）

## 待拍板
- 歌名：《留一个锚》/《尾骨的锁》/《门站刻度》/《回接床空着》
- 要不要纯器乐版 → `Style` 删 `breathy intimate female vocal, children choir hum`，`Lyrics` 全部换成 `[Instrumental]` 一行即可
