# semantic-layout｜语义编排规则 v0.1

## 目标

先判断节点之间“是什么关系”，再决定它们在画布上“怎么摆”。

## 关系类型

- `sibling`：同一父问题下，改变的是同一层级变量，但答案方向不同。
- `child`：节点成立依赖父节点，继续细化父节点内部变量。
- `contrast`：针对同一 changed_variable 给出相反或互斥关系形状。
- `duplicate`：changed_variable、relation_shape、module_grammar 实质同构，仅具象名词/题材翻译不同。
- `evidence`：不构成新方向，只证明、反驳或限定某方向。
- `bridge`：连接两个原本分离语义簇，提示存在新的交叉发散入口。

## 聚类优先级

依次比较：

1. `changed_variable`
2. `relation_shape`
3. `module_grammar`
4. `structure_id`
5. `concrete_candidate`

前 3 项优先于具象候选。

## 禁止

- 仅因都属于“监狱/战争/少女/奇幻”等题材就归同一结构簇；
- 仅因十元 token 一样就直接判 duplicate；
- 为了画布整齐强行把结构不同的节点合并；
- 用节点位置反推语义亲疏。

## 输出

```yaml
clusters:
  - id: G1
    basis:
      changed_variable: ...
      relation_shape_family: ...
    nodes: [...]
relations:
  - from: A
    to: B
    type: sibling
    reason: ...
```
