# H04｜旧门看守人｜CHARACTER_H3_CARD v1

> Gate: **CHARACTER_CARD_READY=PASS**  
> Scope: 仅冻结 H3 可消费的角色认知；**不把 H04 升级为 LOCKED / LLL-CHAR / CH**。  
> Downstream: Linear **674-258 WORKER** 负责真实素材装配与最终 `production_gate=READY_FOR_H3`。

## 1. 身份与世界职责
- **character_id**: H04
- **canonical_name**: 旧门看守人
- **canonical_status**: CANDIDATE_TEXT_DESIGN_REGISTERED_H3_CARD_READY
- **world_branch**: cross_region
- **world_role**: 世界边界承担者 / 边境归返身份连续性验证者
- **identity_summary**: 守在文明与未知的归返边境，负责判断从异律/未知地域返回的人，与出发时的那个人之间的身份连续性是否仍成立。
- **narrative_function**: 把“探索未知 → 人被改变 → 返回文明 → 验证同一性”具体化；制度宣布结束后，如具体的人仍存在缺口，他会继续保留返回可能，直到必须亲自裁定。

## 2. 行为核心
**confirmed**
- 具体的人优先于抽象档案。
- 发现身份/关系连续性缺口时，不轻易关闭返回回路。
- 变化本身不自动等于人格/身份失效，不按单一污染阈值机械拒绝。
- 关键节点必须明确收束：放行 / 拒绝 / 暂缓关闭 / 封门。

**allowed**
- 观察、核验、对照返回者与记录/标记。
- 持判定器物进行检查。
- 在固定归返门位内转头、转身、迈步、调整位置。
- 用明确手势作裁定。
- 执行放行、拒绝、暂缓关闭、保留回返可能。

**forbidden / unproven**
- 禁止引路人化、神秘导师化、审判官化、纯检疫员化。
- 禁止法槌 / 王冠 / 权杖式审判表演。
- 禁止“污染值超阈值就驱逐”的机械动作逻辑。
- 跑跳、攀爬、格斗、武器战、施法、高速连续动作均 **UNPROVEN**。

## 3. 年龄与身体
- **age_read**: UNKNOWN。不得因为“旧门看守人”自动做成老人。
- **body_structure**: UNKNOWN_TEXT / VISUAL_ASSET_EXISTS。
- 精确身高、头身比、肩胯、腿躯比不得从文字补。由 674-258 从真实四宫格逐格读取并审核。

## 4. 当前视觉冻结项
来源：674-219 对 H04-GRID-20260929 的真图对账，SHA  
`13b1b40120fa0ef6f02a88a0f3501ba4de1dca6e615887efcaa55bb4fc890267`

- 长檐红斗笠
- 侧垂红缨
- 长黑发及腰
- 白灰分层长袍
- 撕裂 / 不齐下摆
- 青绿色提灯 / 判定器物
- 红系腰带
- 面部保持可读，不用深色面帘遮挡

### 禁止漂移
- 不加金色审判装饰、王冠、法槌、权杖。
- 不把帽型改成法帽/王冠。
- 不遮脸。
- 不删青绿提灯，不把它改成武器。
- 不大幅改变黑长发、白灰长袍、红系腰带的识别关系。
- 不把服装重设计成现代制服、重甲或普通赛博装甲。

## 5. 已解决的来源冲突
2026-09-24 的 STAGING 五版稿曾写“宽檐与垂落深色面帘”。  
该字段与 2026-10-06 的 H04 CURRENT_CANON 真图审核冲突。

**处理：**
- 旧“深色面帘”降级为 `SUPERSEDED_CANDIDATE`；
- H3 v1 采用最新 SHA 已验证视觉证据：**面部不遮挡**；
- 不删除历史来源，只禁止它重新覆盖当前 H3 冻结项。

## 6. UNKNOWN（不得补故事）
- 精确年龄
- 精确人体比例
- 五官数值级锚点
- 惯用手 / 具体步态 / 动作速度
- 战斗与武器能力
- 正式组织隶属
- 门与判定器物的工程机制
- 个人身世与长期结局
- 最终十元 ZN/NZ 主次与强度

## 7. Source refs
1. PRIMARY: `03_角色/角色库/候选角色/H04_旧门看守人.md` @ `f304b0cd...`
2. H3 scope: `20_Agent系统/06_验证/H3_PREPLAN_674-216_20261006.md` @ `b6c2c859...`
3. Visual evidence: Linear 674-219 / H04-GRID-20260929 / SHA `13b1b401...`
4. Legacy staging: H04 五版设定 @ `eb60d881...`（冲突字段只作历史候选）

## 8. Gate
- confirmed / inferred / UNKNOWN 分层：PASS
- identity/world role/behavior boundary：PASS
- visual freeze：PASS（以 674-219 当前真图证据为准）
- age/body 未伪造：PASS
- blocking canonical conflict：NONE

**CHARACTER_CARD_READY=PASS**

> 注意：这不是 H3 最终生产放行。674-258 仍必须完成真实 path/SHA、逐格 view_role、cross-cell proportion、AG-06 静态审核与 preflight；只有其 `production_gate=READY_FOR_H3` 后，674-216 才能生成 RENDER_TASK。
