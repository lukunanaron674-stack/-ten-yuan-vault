import runpy
import maya.cmds as cmds


picked = cmds.fileDialog2(
    caption="选择 mood2_M_hand_tool.py",
    fileMode=1,
    fileFilter="Python Script (*.py)",
)

if picked:
    runpy.run_path(picked[0])
