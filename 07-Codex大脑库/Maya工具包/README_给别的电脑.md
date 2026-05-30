# Maya 手指 M 工具便携包

## 文件

- `mood2_M_hand_tool.py`：主工具
- `启动_M工具_通用_MEL.mel`：给 MEL 输入/Source Script 用
- `启动_M工具_通用_Python.py`：给 Python 输入/Source Script 用

## 最稳使用法

1. 把整个 `Maya_M_Tool_Portable` 文件夹复制到别的电脑。
2. 打开 Maya。
3. 打开 Script Editor。
4. 菜单选择 `File > Source Script...`。
5. 选择 `启动_M工具_通用_MEL.mel`。
6. 弹出选择文件时，选择同文件夹里的 `mood2_M_hand_tool.py`。

这样不依赖 `C:\Users\19308\...`，放桌面、D 盘、U 盘都可以。

## 工具流程

1. 选手腕/手掌控制圈，点“加载当前选择为 M 控制器”。
2. 选这只手的手指 root joint，点“加载当前选择及子级里的 joints”。
3. 要重做时，先点“准备手动重做”。
4. 摆伸直，点“记录当前姿势为 M=0”。
5. 摆拳头，点“记录当前姿势为 M=5”。
6. 测试控制器属性 `M`：`0` 是伸直，`5` 是拳头。

## 注意

- 不要用旧镜像工具。
- 弄错优先 `Ctrl+Z`。
- 这个工具只操作你加载的 joints 的 rotate 驱动。
