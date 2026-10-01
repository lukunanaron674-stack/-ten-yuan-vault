# CHARACTER_ASSET_SYNC_PROTOCOL｜角色 Agent × 素材 Agent 对账协议 v1.1

## 目的
解决“角色正本只登记少量角色，但全库存在大量真实角色图片/候选素材”导致的选角偏差。

正式选角不得只读旧 B 端 `assets/character_pool_index.json`。
该文件降级为**历史实验兼容池**，不再作为项目级选角总入口。

## 双方职责

### AG-11 角色 Agent
负责：
- 角色身份是否已登记；
- 是否 STAGING / LOCKED；
- 世界位置、叙事功能、十元状态；
- 视觉哪些部分已冻结、哪些仍未知；
- 是否允许进入正式生产。

不得：
- 因“素材存在”自动判角色完成；
- 因文件名自动补人物设定；
- 把未注册视觉候选直接升级为 LOCKED。

### AG-04 素材 Agent
负责：
- 真实图片是否存在；
- source_path / sha256 / 尺寸 / 版本；
- 是否有头像、全身、四视图、H3四格卡等生产视图；
- 是否存在重复 SHA、身份冲突或候选图；
- 是否已过静态风格审核、是否可绑定 H3。

不得：
- 因“有 H3 四格卡”自动判角色设定完成；
- 因旧 h3_render_eligible 字段覆盖当前角色正本；
- 只从 B端三人池选角。

## 项目级发现源

### 角色正本入口
- `黎黎隆项目/03_角色/角色库/00_角色总索引.md`
- 目标角色卡 `角色卡/CH-xxx_*.md`

### 素材发现入口
- `黎黎隆项目/00_总览/素材文字对接_全库图床清单_20261001.md`
- `黎黎隆项目/00_总览/图片定位与验证_20260930/图片定位与验证总索引.csv`
- `黎黎隆项目/00_总览/图片定位与验证_20260930/SHA256SUMS_全部图片.txt`
- `03_角色/角色库/02_H3专用角色库/assets/`
- `03_角色/角色库/06_assets/`
- `03_角色/角色库/03_线A_S卡19人/`
- `03_角色/角色库/05_头像与高清素材/`

旧 B 端 `assets/character_pool_index.json` 只用于历史任务兼容。

## 联合状态

每个视觉角色候选必须同时拥有两条轴：

```yaml
character_state:
  registration: REGISTERED|UNREGISTERED|IDENTITY_CONFLICT
  canon: LOCKED|STAGING|UNKNOWN
  visual_status: LOCKED|PARTIAL|EXPLORING|UNKNOWN

asset_state:
  existence: VERIFIED|MISSING
  views: []
  best_view_type: FOUR_GRID|FULL_BODY|MEDIUM_FULL|HEAD_ONLY|NONE
  visual_readiness: READY_VISUAL|HEAD_ONLY_DESIGN_PENDING|ASSET_UNVERIFIED
  source_path:
  sha256:
  style_review: PASS|PENDING|FAIL|UNKNOWN
  h3_bindable: true|false

production_eligibility:
  status: READY|NEEDS_CHARACTER_AUDIT|NEEDS_ASSET_REVIEW|BLOCKED
  blockers: []
```

## 角色设计可用度｜用户当前口径
素材端先给角色设计层一个简单结论：

| 真实素材 | visual_readiness | 角色设计结论 |
|---|---|---|
| 身份匹配的四宫格 | READY_VISUAL | **可用** |
| 身份匹配的全身 / 中全景 / 中景角色设定图 | READY_VISUAL | **可用**，不强制补四宫格 |
| 只有单头像 | HEAD_ONLY_DESIGN_PENDING | **待设计**，不得假装完整造型已完成 |
| 无真实可定位图 | ASSET_UNVERIFIED | 待素材核验 |

`READY_VISUAL` 表示角色视觉设计信息已足够继续使用；来源既可以是四宫格，也可以是清楚的全身/中全景/中景设定图。它不自动跳过 AG-06 风格审核/H3绑定等正式生产门禁。

## 正式生产 READY 条件
必须同时满足：
1. 角色 Agent 明确角色身份可用于本轮正式生产；
2. 视觉关键部位足够锁定，不依赖 AI 首次补全未知核心结构；
3. 素材 Agent 有真实可定位资产；
4. 静态风格/身份审核通过；
5. H3 输入视图满足当前动作需求；
6. 无身份冲突、重复 SHA 误认、用户当前否决或未完成声明。

少一项都不能 READY。

## 新角色优先发现
当用户要求“下一个 / 新角色 / 不要老角色”时：
1. 排除最近已使用角色；
2. 排除用户明确未完成/禁用角色；
3. 优先扫描全库真实视觉候选；
4. 优先选信息量高者：四视图原稿 > H3四格+原始参考 > 全身设定图 > 单张候选 > 头像；
5. 先由素材 Agent 报候选，再由角色 Agent 审角色身份；
6. 不得回退到 B端老三人池，除非用户明确要求。

## 输出
联合结果写：
`06_验证/CHARACTER_ASSET_JOINT_AUDIT_<date>.md`

导演只消费联合结果，不直接从单方状态推断“可生产”。


## 非 CH 候选注册表

当用户要求“新角色 / 下一个 / 不要 CH”时，双方首先读取：
- 人读：`黎黎隆项目/03_角色/角色库/01_视觉候选总表_HNSNPC.md`
- 机器：`黎黎隆项目/03_角色/角色库/01_视觉候选总表_HNSNPC.json`

规则：
1. H/N/S/NPC 的 `visual_id` 永久作为视觉候选 ID，不改成 CH。
2. 不得因为候选有四宫格就直接创建正式角色；先做身份/重复/世界位置审计。
3. 当前 main 若没有真图文件，`live_repo_asset_status` 必须保持未就绪，禁止 H3。
4. 角色 Agent 优先审 `priority=P0`；素材 Agent 同步负责恢复/验证对应真实文件。
5. P00 五色桶 C01–C05 只能在真图恢复并审核后分配；旧“青桶/红桶”只保留为来源证据。
6. 导演选“下一个”时消费本表，而不是重新搜索 CH 或旧 B 端三人池。
