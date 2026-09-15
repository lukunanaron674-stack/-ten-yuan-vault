# Visual Inbox｜网页生图自动进入 GitHub

## 目标

网页端生成图片后，不需要手动整理仓库结构。

默认链路：

```text
ChatGPT 网页生图
→ 浏览器下载到 Downloads\十元视觉化
→ visual-inbox-watcher.ps1 检测
→ 按当前实验上下文自动命名
→ 移入视觉化研发目录
→ 自动生成 YAML + audit.md
→ git add
→ git commit
→ git push
```

> 网页聊天仍然不能直接把图片二进制写进 GitHub。这个 watcher 把“你下载图片”变成唯一人工动作，其余本地自动完成。

---

## 1｜第一次启用

先在本地仓库执行：

```powershell
git pull
```

进入：

```text
01-十元系统\06-视觉化研发\tools
```

右键 PowerShell 运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\install-visual-inbox-startup.ps1
```

它会：

1. 创建 `Downloads\十元视觉化`。
2. 在 Windows Startup 创建 watcher 快捷方式。
3. 以后登录 Windows 自动启动 watcher。

无需重启即可双击：

```text
start-visual-inbox.cmd
```

---

## 2｜每轮实验只需设置一次上下文

例如当前跑：

```text
图像审核器 R1.5
目标 NX
轮次 R1
三张依次：正样本 / 最近邻 / 负样本
```

执行：

```powershell
.\set-visual-inbox-context.ps1 -Module AUDIT -Target NX -Round R1
```

默认 role 循环：

```text
POS → NEAR → NEG → POS → NEAR → NEG ...
```

于是普通浏览器文件名会自动变成：

```text
VIS-AUDIT-NX-R1-POS-001.png
VIS-AUDIT-NX-R1-NEAR-002.png
VIS-AUDIT-NX-R1-NEG-003.png
```

第四张继续：

```text
VIS-AUDIT-NX-R1-POS-004.png
```

---

## 3｜模块代码

| Module | 自动进入目录 |
|---|---|
| `AUDIT` | `01-图像审核器` |
| `STYLE` | `02-十元风格` |
| `REL` | `03-十元生克补` |
| `CHAIN` | `04-动态链视觉化` |
| `AXIS` | `05-五轴视觉化` |
| `ZN` | `06-ZN跨对象` |
| `DSL` | `07-Visual-DSL` |
| `INBOX` | `99-inbox` |

例：

```powershell
.\set-visual-inbox-context.ps1 -Module ZN -Target BUILDING -Round R1
```

```powershell
.\set-visual-inbox-context.ps1 -Module REL -Target SHENG -Round R2 -Roles POS,CONTROL,NEG
```

---

## 4｜每张图自动产生三件套

例如：

```text
VIS-AUDIT-NX-R1-POS-001.png
VIS-AUDIT-NX-R1-POS-001.yaml
VIS-AUDIT-NX-R1-POS-001_audit.md
```

YAML 初始状态：

```yaml
status: IMPORTED_UNAUDITED
audit:
  verdict: PENDING
```

后续由桌面端 AI / Codex 补：

```text
prompt
Visual DSL
结构证据
捷径依赖
最近邻混淆
failure family
PASS / FAIL / AMBIGUOUS
```

---

## 5｜图片下载规则

推荐把浏览器对 ChatGPT 图片的下载位置设置为：

```text
C:\Users\你的用户名\Downloads\十元视觉化
```

这样操作就是：

```text
生图 → 点下载
```

结束。

如果浏览器仍然下载到普通 Downloads，则手动拖入 `Downloads\十元视觉化` 后也会立即自动处理。

### 不需要手动重命名

普通文件：

```text
ChatGPT Image 2026-09-16.png
image (4).webp
```

都可以自动编号。

如果你自己已经命名成 `VIS-...`，watcher 会尽量保留该 sample id。

---

## 6｜Git 行为

每张图只提交自己的三件套，不会主动把仓库里其他未提交修改一起塞进去。

提交信息：

```text
visual(import): VIS-AUDIT-NX-R1-POS-001
```

默认随后执行：

```text
git push
```

若 push 失败：

- 图片和 sidecar 已安全保留在本地仓库。
- commit 已保留。
- 日志写入 `visual-inbox.log`。
- 不会删除已经归档的图片。

排查后手动 `git push` 即可。

---

## 7｜测试模式

只扫描一次：

```powershell
.\visual-inbox-watcher.ps1 -Once
```

只 commit 不 push：

```powershell
.\visual-inbox-watcher.ps1 -Once -NoPush
```

长期前台运行：

```powershell
.\visual-inbox-watcher.ps1
```

---

## 8｜当前默认上下文

仓库当前预设：

```json
{
  "module": "AUDIT",
  "target": "NX",
  "round": "R1",
  "roles": ["POS", "NEAR", "NEG"]
}
```

正好对应当前视觉化研发下一轮：图像审核器 R1.5 的 NX 三样本组。

---

## 9｜职责边界

Visual Inbox 只负责：

```text
下载图 → 归档 → 命名 → sidecar → Git
```

它不负责自动判断图片是否真的符合十元。

审核仍按：

```text
生成
→ 图像审核器
→ PASS / FAIL / AMBIGUOUS
→ failure 修正
```

避免“成功进 GitHub”被误解成“视觉规则成立”。硬盘很擅长保存错误，并不会因此变聪明。
