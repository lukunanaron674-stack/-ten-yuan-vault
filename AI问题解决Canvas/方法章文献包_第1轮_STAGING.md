# 横向扩展·第 1 轮｜方法章文献包（STAGING，2026-10-05）

> 目标：补齐开题报告方法章的合法性支柱——双评信度阈值 + 小样本配对检验。
> 这是此前 22 条里完全没有的一块。检索快照，引用前核原文页码/DOI。

## G 板块｜信度阈值与配对统计规范

| # | 文献 | 出处 | 关键内容 | 对你的用途 |
|---|---|---|---|---|
| G1 | Krippendorff, K. (2004) *Content Analysis: An Introduction to Its Methodology*（2nd ed）, Sage, pp.241-242 | 原始权威 | α≥0.800 为常规要求；0.667≤α<0.800 仅可作**暂时性结论**；α<0.667 数据应弃用 | ⭐ 你的 α≥0.80 门槛**原始出处**，此前凭空写着，现在有书可引 |
| G2 | Hayes, A.F. & Krippendorff, K. (2007) "Answering the call for a standard reliability measure for coding data" | *Communication Methods and Measures* 1(1):77-89 | 内容分析标准信度度量的正式提出 | ⭐ 论文引用应优先用这条（期刊论文，比教科书更好引） |
| G3 | Feng 2014a/2014b；Lombard et al. 2002（转引自 QUT ACIS2017 综述） | *A Critical Analysis of Inter-Coder Reliability Methods* (ACIS 2017) | >0.9 总是可接受；>0.8 适合；>0.7 探索性研究可容忍 | 提供"为什么 0.80 而非 0.70"的学界分布，答辩可答分级依据 |
| G4 | 荷兰互联网新闻难民形象内容分析（KU Leuven） | 内容分析实证范例 | 剔除 α 不达标指标，反复重算直到变量级 α 达标（0.566→0.854） | ⭐ 直接支持你的端点筛选操作：**先算端点级 α，不达标的端点剔除或重定义** |
| G5 | Fagerland, M.W., Lydersen, S. & Laake, P. (2013) "The McNemar test for binary matched-pairs data: mid-p and asymptotic are better than exact conditional" | *BMC Medical Research Methodology* 13:91. doi:10.1186/1471-2288-13-91 | 模拟结论：精确二项 McNemar **过于保守**；**mid-p** 功效接近渐近版本且不超名义显著性水平 | ⭐ **会改你的方法**，见下「方法修订」 |
| G6 | McNemar, Q. (1947) "Note on the sampling error of the difference between correlated proportions" | *Psychometrika* 12(2):153-157. doi:10.1007/BF02295996 | 原始论文 | 方法源头，追溯性引用 |
| G7 | 实践规则（多源一致：Datanovia / CASRAI / LibreTexts / Penn State STAT504） | 教学与实践指南 | 不一致对子总数 b+c < 25 应用精确版；**b+c < 6 时精确 p 恒 > 0.05** | ⭐ 与你已算的"功效地板 0.0625"**独立印证**：n_d≤5 时 p 下限锁死在 0.0625，永不显著 |

## ⚠ 方法修订建议（本轮最有价值的发现）

**开题报告 4.5 节现方案**：`scipy.stats.binomtest(b, b+c, 0.5)` —— 精确二项 McNemar。

**问题**：G5（Fagerland 2013, BMC 医学研究方法学权威刊）通过模拟证明，配对二值数据的精确条件检验在 discordant 计数小时**过于保守**，功效损失明显；作者推荐 **mid-p 版本**（功效接近渐近检验，但不突破名义显著性水平）。你的 N=16 属于小 discordant 场景，正好落在它批评的区间。

**修订方案（三选一，需你拍板）**

| 方案 | 做法 | 优点 | 代价 |
|---|---|---|---|
| A｜换 mid-p（**推荐**） | 主推断改用 McNemar mid-p：`p_mid = p_exact − C(n,b)·0.5^n` | 有 G5 顶刊背书；小样本功效更高；不超水准 | 需在文中说明为何不用传统的 exact |
| B｜exact + mid-p 双报 | 主结论用 exact（保守），附 mid-p 作敏感性 | 最稳，两条口径都在 | 多一层解释成本 |
| C｜维持 exact | 不改 | 最保守、最少争议 | 你的 n_d 常常 ≤8，可能连本可达的显著都丢掉 |

倾向 A：G5 是专门针对"配对二值 + 小 discordant"的论文，正好是你的情形，引它来选 mid-p 属于"有据可依的方法选择"，反而是加分项。

另外 G7 的 "b+c<6 时 p 恒>0.05" 应当**写进预登记**：凡某端点不一致对子总数 <6，该端点直接判为"不可检验"，不作 p 值推断，只报命中率差。这比硬给一个必然不显著的 p 值干净得多。

## 引文增量

本轮 +3 条可直接进开题报告：**G2（优先权）**、**G1（阈值出处）**、**G5（方法选择依据）**。累计提出补充 11 条（13+8+3），实际采用待你拍板。
