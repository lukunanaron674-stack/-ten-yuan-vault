---
name: obsidian-canvas-layout
version: 1.0.0
description: 将现有 Obsidian JSON Canvas 安全重排为多个互不连线的独立中心、左右双向发散、紧凑子树和森林布局；保留原文本、职位链接、主题底盘色、分支轴色以及所有关系边；输出副本、验收和概览预览。
---

# Obsidian Canvas｜多中心左右双向自动排版

## 触发与权力

用户说「Canvas排版、左右展开、整理思维导图、缩小空白、多个中心、一个分支一种色、验证可视化」时调用。**执行前读取仓库根 `AGENTS.md`、`00-中枢索引/AI文件权力与任务总览.md`、`00-中枢索引/总入口.md`，并遵守 Linear 674-77 的 XN-CANVAS-01 现行规则**。Canvas 只做可视化，不能改变理论正本或岗位事实。不要新增重复Canvas总入口。

## 布局硬约束

1. **多中心独立**：先识别至少两个顶层 group 底盘，各底盘的文字、子 group 和内部边属于一个中心。跨中心边存在时 **FAIL CLOSED**，不猜归属。
2. **左右分流**：按既有子分组顺序交替放置 hub 左右两侧；同侧子树按实际宽高纵向紧凑堆叠。**子分组内部的公司、岗位、作品、证据等坐标相对关系先保持不动**，不凭算法重写语义。
3. **森林装箱**：各中心排好后，比较 2 列和 3 列矩形打包方案，综合总面积和目标长宽比，选择更紧凑的整体版面。自动更新顶层底盘外包框。
4. **继承颜色**：底盘/中心色、一级方向色、所有下级卡片颜色和关系边颜色**一字不改**。同处左侧不代表必须同色；颜色标示语义分支，不由物理左右位置决定。
5. **尺寸与文字**：此 v1 仅重排节点坐标和**顶层底盘**尺寸。各文本卡已有宽高及所有中文、长JD、URL必须保持；如发现某卡截字，应先用专门的文字尺寸测量流程修好，再运行该Skill，不要自动裁字。
6. **安全验收**：ID唯一、边端点存在、无跨中心边、无文本卡重叠、顶层底盘互不重叠；原 text/file/url/color 和全部原 edge 数组相同。视觉预览是辅助，**不代表已在 Windows Obsidian 实际PASS**。

## 执行指令（Python 3标准库）

```powershell
# 1) 从Vault根目录执行，先模拟（不会写入）
python "07-Codex大脑库/skills/obsidian-canvas-layout/scripts/layout.py" "15-总思路/BOSS求职方向与岗位线索.canvas" --dry-run

# 2) 默认生成新副本 *_LR_PREVIEW.canvas，不覆盖原文件
python "07-Codex大脑库/skills/obsidian-canvas-layout/scripts/layout.py" "15-总思路/BOSS求职方向与岗位线索.canvas"

# 3) 可选生成全图PNG预览（需要pip install pillow）
python "07-Codex大脑库/skills/obsidian-canvas-layout/scripts/preview.py" "15-总思路/BOSS求职方向与岗位线索_LR_PREVIEW.canvas" "15-总思路/BOSS_LR_总览预览.png"
```

**只在用户明确批准覆盖且确认本地工作树没有未保存改动时**使用 `--in-place`，该选项会先创建带时间戳的 `.bak_...` 备份，再原子替换目标；重复运行时默认副本存在即停止，不静默覆盖。

### 自动验收与报告

```powershell
python "07-Codex大脑库/skills/obsidian-canvas-layout/scripts/test_layout.py"
```

此测试含6个独立中心、18条岗位子树、36条边的合成样例及干跑/拒绝覆盖/强制备份检查。真实Canvas需要再用 `--dry-run` 实验，检查实际Obsidian UI截图，不能将合成测试冒充真实作品的屏幕验收。

## DONE / STOP

- **DONE（程序）**：报告树数量、节点、边、布局列数、备份/输出路径；GitHub如有提交则回读 SHA；保留原内容、颜色、所有边；全图检查通过。
- **WAIT_LOCAL_UI**：在Obsidian里看局部卡片可读性、箭头走向、跨区空白，人工确认通过后才将实验版晋升正式版。
- **STOP**：存在跨中心边、无明确顶层分组、子树相互重叠、文本内容变化、原图片资产/引用缺失、输出目标已有文件或工作树冲突时立即停，不自动修造资料。

## 来源与限制

思路借鉴 [Mindvas](https://github.com/mobench/mindvas) 的左右balanced layout与forest packing，参考 [claude-canvas](https://github.com/AgriciDaniel/claude-canvas/tree/main/skills/canvas-layout) 的验证流程；**这里是独立的Python布局实现，不是已经安装并调用的Mindvas原版插件**。
