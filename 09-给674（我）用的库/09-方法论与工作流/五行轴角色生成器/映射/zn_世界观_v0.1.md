---
type: five-axis-character-generator-application-mapping
status: candidate
knowledge_status: candidate
authority_level: L5
symbol: zn
module: 世界观
version: v0.1
created: 2026-09-04
updated: 2026-09-04
may_override_canonical: false
canonical_read:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/01-十元信息卡/【zn信息量卡v2】.md
  - 01-十元系统/03-十元准度卡/zn_准度卡_v0.1.md
same_axis_counterpart:
  - 01-十元系统/01-十元信息卡/【x信息量卡v2】.md
source_evidence:
  - 07-Codex大脑库/运行记录_zn-x最近邻_关羽挂印封金旧义zn高显影与曹赐资源x主动让渡首轮火轴控制_20260827.md
---

# zn × 世界观｜应用映射 v0.1

> 本文件只负责把 current `zn` 的理论变量翻译成世界观生成语法。任何宗教、太阳、火焰、旗帜、圣女、誓约石、教堂、王国、职业或颜色都只是候选载体，不能反向定义 `zn`。

## 0｜本轮 canonical 锚点

current `zn`：主体内部一项不可轻易让渡的意义或原则，拥有未来调用、冲突排序与最终指导选择的资格。

火轴广义变量：对象独立成立资格与归属方式；`zn` 保留自身成立，`x` 纳入掌握、调用与处分边界。

本轮只抽取适合世界观翻译的变量：

```text
原则/意义对象明确
→ 正确性或不可抛弃性不依赖奖励、认可、观看
→ 能在冲突中排序其他选项
→ 条件变化后仍保留未来调用资格
→ 可有边界、修订条件与让渡代价
```

应用层禁止偷换为：

```text
发光 / 神圣 / 红色 / 宗教 / 英雄 / 牺牲 / 口号 / 有信仰
```

这些都只是可能显影，不是判据。

---

## 1｜候选 A：跨阶段保留的“自选底线”世界

```yaml
symbol: zn
module: 世界观
sub_semantic: 跨阶段未来调用资格
changed_variable: 某项自选原则在身份、环境与收益变化后是否仍拥有进入后续判断的资格
relation_shape: 当前选择 -> 原则被保留 -> 条件改变 -> 原则再次被调用并排序新冲突
concrete_candidate: 成年人可以为自己立一条“不可轻易让渡底线”；制度不替其执行，只有后续冲突能证明它是否真实存在
genre_context: 现代幻想 / 校园 / 都市 / 低魔
positive_reason: 世界机制把 zn 放在“未来是否继续调用”而不是宣誓仪式本身；即使无人观看、无人奖励，后续选择仍需让该原则重新进入判断
nearest_neighbor: xn / z
why_not_neighbor: 若只是登记、审核、流程执行则偏 xn；若只有被他人承认后才成立则偏 z；本候选要求原则的指导资格来自主体内部并跨阶段保留
removal_test: 去掉登记仪式、旁观者与奖励后，只要角色后续仍按该原则排序冲突，世界机制仍成立
reverse_test: 若角色一离开仪式场景就不再认为该原则应影响未来选择，则 zn 显著下降
counterexample: 学校规定所有学生必须写一句校训并背诵，学生只因惩罚而遵守
source_evidence: zn 信息卡 v2.0；zn 准度卡 v0.1；关羽挂印封金 evidence-locked 控制
confidence: 96
status: candidate
```

世界观语法：

> **世界允许角色主动选择一项内部底线，但不替她保真；真正的世界机制是让后续不同阶段不断出现可放弃它的机会，以检验它是否仍拥有未来指导资格。**

---

## 2｜候选 B：记忆/身份变化后仍可回调的“原则锚”世界

```yaml
symbol: zn
module: 世界观
sub_semantic: 反事实与跨身份指导
changed_variable: 身份、记忆或外部身份改变后，某项意义是否仍被角色视为应当指导未来选择
relation_shape: 身份变化/记忆断裂 -> 外部标签失效 -> 原则锚仍可回调 -> 新选择被其重新排序
concrete_candidate: 周期性更换身份或部分记忆的世界里，角色可保留一个非物质“原则锚”；它不保存财产与职位，只保存一条自己仍认定有效的判断标准
genre_context: 科幻 / 轮回 / 赛博 / 奇幻
positive_reason: 把 zn 的“未来调用授权”和“不依赖外部身份/奖励”直接转成世界机制，同时主动切断 x 的资源归属层
nearest_neighbor: x / xz / nz
why_not_neighbor: 不是保存物品、权限或所有权（x）；也不是单纯保留回返路径（nz）或命运收窄（xz），而是保留一条能够继续排序选择的内部指导标准
removal_test: 删除原则锚后，只剩身份重置机制，角色不再有跨阶段稳定的内部排序依据，zn 核心消失
reverse_test: 如果原则锚只是一个可交易的数据资产、谁持有谁就能调用，则转向 x，不再是本候选
counterexample: 记忆芯片保存所有银行账户和身份权限，但没有任何价值判断内容
source_evidence: L1 v1.6 火轴；zn 信息卡 v2.0；x 信息卡 v2.0
confidence: 95
status: candidate
```

世界观语法：

> **把“我拥有什么”全部允许重置，只让“我仍认为什么值得坚持”拥有跨身份回调接口。**

---

## 3｜候选 C：资源可让渡、原则不可自动让渡的交换社会

```yaml
symbol: zn
module: 世界观
sub_semantic: 原则与归属资源分层
changed_variable: 当现实资源/地位与内部原则冲突时，哪一层拥有最终排序权
relation_shape: 获得资源/地位 -> 原则与收益冲突 -> 可主动让渡 x 对象 -> 原则继续保留未来指导资格
concrete_candidate: 社会允许人自由买卖头衔、土地、装备与身份权限，但任何“原则承诺”不能随资产交易自动转让；是否继续认可该原则只能由主体后续选择证明
genre_context: 中古奇幻 / 商业城邦 / 星际殖民 / 黑帮都市
positive_reason: 明确把火轴两端拆开：x 负责现实归属与处分，zn 负责为什么某些东西即便能卖、能丢、能换，仍不能自动替换内部最终标准
nearest_neighbor: x
why_not_neighbor: 世界中大量财产交易只是 x；只有当角色能放弃 x 而仍保留某项内部原则的最终指导资格时，才显出 zn
removal_test: 拿掉资源交易后，原则仍可在其他冲突中成立，因此 x 不是 zn 的必要条件
reverse_test: 若原则本身可被合同直接出售并由新持有人获得其“正确性”，则原则被当成 x 对象，本候选失败
counterexample: 买下骑士徽章即可自动获得其全部信条与忠诚，没有主体内部判断
source_evidence: 关羽挂印封金 evidence-locked zn-vs-x separation；zn/x current cards
confidence: 98
status: candidate
```

世界观语法：

> **让世界中的绝大多数对象都可交易，唯独“这件事为什么仍值得做”不能随着所有权自动过户。**

---

## 4｜候选 D：多结局分支中保持“排序原则”的模拟世界

```yaml
symbol: zn
module: 世界观
sub_semantic: 冲突排序权与反事实指导
changed_variable: 面对不同未来结果时，某项原则是否仍拥有排序多个可行选项的资格
relation_shape: 多条未来同时可行 -> 原则参与排序 -> 选择其一 -> 新条件出现 -> 原则仍可再次排序
concrete_candidate: 人们能预览多条未来分支，但系统不告诉哪个结局“正确”；角色必须携带自己的原则去排序安全、利益、关系与责任
 genre_context: 科幻预测 / 魔法预言 / 时间分支 / 游戏世界
positive_reason: 直接测试 zn 的反事实指导能力；世界提供更多事实，不提供价值答案
nearest_neighbor: xn / xz
why_not_neighbor: 预测和计算流程本身偏 xn；未来被锁死偏 xz；本候选的 zn 只发生在“知道多个可能结果后，什么仍值得优先”这一内部排序层
removal_test: 去掉预言/模拟功能后，只要角色仍在现实冲突中按同一原则排序，zn 仍可成立；模拟只是高压测试器
reverse_test: 如果系统直接给出唯一最优答案，角色只照算式执行，则优先 xn/xz，不足以成立 zn
counterexample: AI 每次计算收益最大路线，所有人必须按系统结果行动
source_evidence: zn 信息卡 v2.0 的冲突排序、反事实指导与未来调用条件
confidence: 96
status: candidate
```

世界观语法：

> **世界负责把未来全部摊开，角色负责回答“即便知道后果，我仍用什么标准选择”。**

---

## 5｜候选 E：原则可修订但必须支付“解释代价”的世界

```yaml
symbol: zn
module: 世界观
sub_semantic: 修订边界与让渡代价
changed_variable: 原则变化是条件细化/主动修订，还是因奖励、恐惧与方便而失去内部指导资格
relation_shape: 原原则 -> 新事实/冲突 -> 主体说明边界或修订理由 -> 修订后的原则继续拥有未来调用资格
concrete_candidate: 世界允许角色修改自己的核心誓约，但每次修改必须留下“为何原规则不再足够”的个人解释记录；记录不由权威审批，只供之后的自己回看
 genre_context: 魔法契约 / 学院 / 星际航行 / 末世共同体
positive_reason: current zn 明确允许策略变化、条件细化与原则修订，不把“永不改变”误当成 zn；该机制生成的是可检验的修订边界
nearest_neighbor: z / xn
why_not_neighbor: 不要求外部主体批准，因此不是 z；记录格式可以有 xn 外壳，但 zn 核心在主体是否仍认定修订后的原则具有最终指导资格
removal_test: 去掉公开记录与审核，只保留主体在新条件下能说明为何修改且继续调用，zn 仍成立
reverse_test: 若角色只是为了领取奖励而每次改成系统推荐答案，内部指导资格消失，zn 下降
counterexample: 教会审批“正确的新信条”，未获批准者的原则一律无效
source_evidence: zn 信息卡 v2.0 的修订边界；zn 准度卡 v0.1 的让渡代价与未来调用资格
confidence: 95
status: candidate
```

世界观语法：

> **zn 不是把角色冻成石头；更好的世界机制是让她可以改，但必须能回答“为什么改了以后，这仍然是我愿意让未来继续调用的标准”。**

---

# 6｜本轮 rejected：表面联想不能直接生成 zn 世界

## R1｜“太阳、火焰、红色、圣光，所以是 zn”

```yaml
symbol: zn
module: 世界观
sub_semantic: 视觉象征误判
changed_variable: none
relation_shape: none
concrete_candidate: 永昼圣城 / 红色太阳 / 火焰神殿
 genre_context: 奇幻 / 神话
positive_reason: none
nearest_neighbor: 无法由视觉直接判十元
why_not_neighbor: 颜色、发光与火元素没有证明内部原则的未来指导资格
removal_test: 去掉红色与火焰后，若世界机制完全不变，则这些视觉元素不是 zn 变量
reverse_test: 换成蓝色、黑暗、地下世界，只要原则结构存在，zn 仍可成立
counterexample: 太阳神国所有人只因惩罚服从祭司命令
source_evidence: zn 信息卡/准度卡明确“光、教堂、旗帜只作辅助；发光不能单判”
confidence: 99
status: rejected
```

## R2｜“宗教、圣女、信徒，所以是 zn”

```yaml
symbol: zn
module: 世界观
sub_semantic: 身份与题材误判
changed_variable: none
relation_shape: none
concrete_candidate: 神殿国家 / 圣女制度 / 朝圣世界
 genre_context: 宗教奇幻
positive_reason: none
nearest_neighbor: z / xn / x
why_not_neighbor: 宗教可以由权威认可、规则服从、资源控制等完全不同机制维持；身份不能证明主体内部原则在无人认可时仍指导选择
removal_test: 拿掉神职身份与组织认可后，若角色原则不再成立，则原案例不足以判 zn
reverse_test: 无宗教背景的普通人也可拥有高纯 zn 原则
counterexample: 圣女因职位要求背诵教义，私下并不认可其正确性
source_evidence: zn 信息卡 v2.0；zn 准度卡 v0.1
confidence: 99
status: rejected
```

## R3｜“牺牲、英雄、坚持到底，所以是 zn”

```yaml
symbol: zn
module: 世界观
sub_semantic: 行为结果误判
changed_variable: none
relation_shape: none
concrete_candidate: 英雄社会 / 决死竞技场 / 殉道文化
 genre_context: 战争 / 热血 / 黑暗奇幻
positive_reason: none
nearest_neighbor: zx / xn / xz / z
why_not_neighbor: 牺牲可由命令、压力、荣誉认可、公开显权或无路可退造成；只有明确原则对象及其冲突排序与未来资格才能判 zn
removal_test: 拿掉观众、奖章、命令和惩罚后，检查角色是否仍认为该原则值得指导未来
reverse_test: 若无人观看就不再坚持，优先检查 z；若只是服从命令，优先 xn；若已无其他路径，检查 xz
counterexample: 士兵因逃跑会被处决而留在阵地
source_evidence: zn current cards；火轴 pure-zn 反向护栏资产
confidence: 99
status: rejected
```

---

# 7｜生成器调用纪律

### 单符号 zn 世界

所有世界模块都必须能回到 `zn` 的 current 变量，但可以分别调用：未来资格、冲突排序、不可轻易让渡、反事实指导、修订边界。禁止为了“视觉丰富”偷塞 `z` 的认可中心、`zx` 的公开显权、`x` 的占有结构，再假装仍是纯 zn。

### 多符号

示例只允许写成职责分配：

```text
zn 主：决定“为什么值得继续”与冲突排序
x 副：负责资源/领地/权限归属
```

两者的关系必须来自具体案例或已登记关系，不使用百分比混合。

### 无向量尺标

只保留：

```text
原则节点 -> 冲突节点 -> 未来调用节点 -> 修订/保持节点
```

不写“zn 85%”“强 zn 世界”。

---

# 8｜本轮结论

本轮最稳定的世界观生成母句不是：

> “一个崇尚信仰、火焰和英雄的世界。”

而是：

> **“一个不断改变角色身份、利益和环境，却持续逼问某项内部原则是否仍拥有未来指导资格的世界。”**

这比固定视觉词更适合继续向服装、发型、道具与一生模块传递，因为后续模块可以围绕“原则如何被保存、调用、修订、与现实归属冲突”展开，而不必把所有 zn 少女都生产成红发圣女。