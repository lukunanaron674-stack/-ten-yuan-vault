---
title: 头像消元验证｜Codex 可执行工单（后端锁定 ComfyUI）
tags: [lililong, codex-workorder, main-01, elimination]
status: STAGING
linear_parent: 674-156
created: 2026-10-05
---

# ⛔ 后端锁定声明（先读这条）

**消元轮（R-1～R-7）一律用本地 ComfyUI，禁止用 codeximg2。**

理由：消元的价值在于**归因**。改一个变量、结果变了，才能证明是这个变量的锅。
codeximg2 服务端模型会静默更新、seed 拿不到、workflow 无概念 → 结果变了无法归因，
消元退化成碰运气。

| 阶段 | 后端 |
|---|---|
| 探方向（找画风候选） | codeximg2 可用 |
| **消元实验 R-1～R-6** | **ComfyUI 强制** |
| **复刻验证 R-3（3-run）** | **ComfyUI 强制** |
| 定基线（选哪张当基准） | 不限 |

## 硬约束（全轮适用）

1. **单变量**：一轮只改一项，其余逐字不动。禁止同时改五六项然后宣布「好了」
2. **每张必留三件套**：`output_path` + `SHA256` + `seed` + workflow JSON 落盘路径
3. **色锁**：按 `黎黎隆项目/00_总览/P00_项目统一色卡_v1.0.md`；
   禁黄橙土黄草绿纯蓝粉肤色；禁摄影式棕绿、暖金统治画面
4. **线面**：墨线 / 炭笔 / 干刷 / 薄水粉 / **可见草稿线**
5. **形体**：大块面 + 清晰剪影 + 局部不对称
6. **禁止**：Codex 自己判「像不像」。判读是chat 大脑的职责，Codex 只出图+留痕
7. **STOP**：缺真实素材 / 权限 / 运行回执 → 标 BLOCKED，不要空转重试

## 代码x 不做的事（明确交出去）

- 不做审美判断
- 不写 PASS / RERUN / REJECT
- 不宣布「复刻成功」
- 不把 assistant proposal 升格为事实

---

# WO-1｜整理层（无需生图，Codex 可先跑）

**归**：674-151
**前置**：无

## 1.1找回原 PNG（A1）

目标：`头像精修_第三组_3x5_CANDIDATE.png` 第一手原图

搜索顺序，逐级降级，每级都要记录查了什么：
1. vault 全库精确文件名搜索
2. `git log --all --diff-filter=A -- '*第三组*'` 查历史新增
3. 遍历所有 git worktree副本（已知 `ten-yuan-vault` / `ten-yuan-vault1` / `ten-yuan-pirate-github` / `ten-yuan-vault-cloud-mirror` / `ten-yuan-vault-scene-push` / `pirate-r1-clothing-worktree` / `ten-yuan-fang`）
4. `黎黎隆项目/00_总览/来源索引/CODEX_SESSION_LEDGER.json`（1.85MB，10-03）
5. 三个 legacy 候选的内容比对（见 674-151 comment）

每个候选输出：`local_path` / `file_size` / `sha256` / `created·modified` / `derivation_chain`

**若全查不到** → 标 `IMAGE_MISSING`，**禁止拿相似图顶替**，停止后续 R-3。

## 1.2 画风源 R1-R3 全量盘点（A4）

`黎黎隆项目/03_角色/20_画风源_R1-R3/`

输出 `HEAD_SOURCE_INVENTORY_v1.md`，字段：
`source_id` / `local_path` / `sha256` / `file_size` / `user_provided` / `batch_date` / `current_status`（候选|STAGING|已审核|已锁定）/ `user_judgment`（用户当时原话）

## 1.3 输入项分级（A2）

对每个输入项打标 **REQUIRED / OPTIONAL / FORBIDDEN / UNKNOWN**
每项必须有「拿掉它」+「只加它」两条证据。UNKNOWN 必须显式列出，不得留空。

---

# WO-2｜codex 生图层（ComfyUI 强制）

**前置**：WO-1 全部完成 + `674-167` 输入模板冻结

## R-1 输入项增删消元（~36 张）

| 项 | 归674-151 |
|---|---|
| 做法 | 对每个 REQUIRED候选项，跑「拿掉它」+「只加它」两向 |
| 出图量 | 6 类输入 × 2 向 × 3 张 ≈ 36 张 |
| 留痕 | 三件套 + 变更的输入段落全文 |

## R-3 clean-room 复刻（9 张）→ 674-156

3 次**真正独立**的 clean context：RUN-A / RUN-B / RUN-C

**每次只允许读**：冻结输入模板 + 模板明示的参考图 + 同一份固定测试角色输入
**禁止读**：旧头像聊天全文 / Linear 长评论历史 / 角色库其它候选 / L2 规范 / 其它 run 输出

每 run 输出：1 张头像测试板 + exact prompt + seed/workflow/backend + output_path + SHA256 + clean_context evidence

## R-4 跨轮次漂移（9 张）→ 674-155

同一模板同一样板，不同先后位置各跑 3 张。
记录每轮位置（第1轮/中段/末段）与塌缩程度。

## R-5 跨角色（12 张）→ 674-152

固定 6 角色：H04 / H06 / H09 / H01 / H08 / H10，每角色 2 张
**边界不变**：H06 禁止作S10 身份源；H04 不重开；H09 不得自动升locked；H01/H08/H10 仅作未审候选

## R-6 批次规模阈值（51 张）→ 674-149

单张 1 + 5 张 + 15 张 + 30 张 = 51 张，同模板同参数，只改数量。
每档记录：剪影差异幅度 / 脸型重复率 / template_collapse 触发张数。

---

# WO-3｜判读层（chat 大脑，不归 Codex）

拿到 WO-2 产物后由 chat 大脑跑：
- 8 维评分表（`674-125`）+ 视觉验收五问（总览画布）
- 必须可脚本化的三项：`information_density` / `palette_behavior` / `template_collapse`
- 必须人眼判的五项：`line_block_language` / `face_language` / `edge_handling` / `head_silhouette_diversity` / `structural_diversity`

---

# L1 PASS 门（不变）

- 3/3 独立 clean-room 产出可识别的**同一目标头像画风**
- ≥2/3 不出现明显模板化/平均化
- 不依赖旧聊天隐含上下文
- **674 最终判断「这还是原来那套画风/方法」**

四条缺一不可。Codex 只能证明前三条，第四条只能 674 给。

---

# 关联

| Linear | 内容 |
|---|---|
| 674-156 | HEAD-L1-REPRO 主任务（本工单父） |
| 674-167 | HEAD-TEMPLATE-01 固定输入模板 |
| 674-151 | WO-1 整理层 + R-1 |
| 674-155 | R-4 |
| 674-152 | R-5 |
| 674-149 | R-6 |
| 674-125 | 判读层 8 维评分表 |
| 674-116 | 母单 |