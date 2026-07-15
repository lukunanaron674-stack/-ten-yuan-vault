from __future__ import print_function

import math
import os
import shutil
import sys

import maya.standalone

maya.standalone.initialize(name="python")

import maya.cmds as cmds


DESKTOP = "C:/Users/19308/Desktop"
DEFAULT_OUT_DIR = os.path.join(DESKTOP, u"\u5934\u53d1_\u4e8c\u5206\u5f62\u72b6UV\u5bf9\u9f50_\u6700\u7ec8")
DEFAULT_ASCII_DIR = os.path.join(DESKTOP, "hair_uv_tone_aligned_final")
OUT_DIR = os.environ.get("HAIR_RENDER_OUT_DIR", DEFAULT_OUT_DIR)
MODEL = os.environ.get(
    "HAIR_RENDER_MODEL",
    os.path.join(DEFAULT_ASCII_DIR, "hair_two_tone_uv_aligned.ma"),
)
TEXTURE = os.environ.get(
    "HAIR_RENDER_TEXTURE",
    os.path.join(DEFAULT_ASCII_DIR, "hair_two_tone_uv_aligned.png"),
)
PREVIEW_PREFIX = os.environ.get("HAIR_RENDER_PREVIEW_PREFIX", u"06_\u6a21\u578b\u8d34\u56de_")


def visible_mesh_transforms():
    result = []
    for shape in cmds.ls(type="mesh", long=True) or []:
        if cmds.getAttr(shape + ".intermediateObject"):
            continue
        parents = cmds.listRelatives(shape, parent=True, fullPath=True) or []
        if not parents:
            continue
        transform = parents[0]
        current = transform
        visible = True
        while current:
            if cmds.attributeQuery("visibility", node=current, exists=True):
                if not cmds.getAttr(current + ".visibility"):
                    visible = False
                    break
            parent = cmds.listRelatives(current, parent=True, fullPath=True) or []
            current = parent[0] if parent else None
        if visible:
            result.append(transform)
    return sorted(set(result))


def assign_emissive_texture(meshes):
    if not cmds.objExists("file1"):
        raise RuntimeError("file1 texture node was not found")
    cmds.setAttr("file1.fileTextureName", TEXTURE.replace("\\", "/"), type="string")

    shader = cmds.shadingNode("surfaceShader", asShader=True, name="uvCheck_surfaceShader")
    shading_group = cmds.sets(
        renderable=True,
        noSurfaceShader=True,
        empty=True,
        name="uvCheck_surfaceShaderSG",
    )
    cmds.connectAttr(shader + ".outColor", shading_group + ".surfaceShader", force=True)
    cmds.connectAttr("file1.outColor", shader + ".outColor", force=True)
    cmds.sets(meshes, edit=True, forceElement=shading_group)


def aim_camera(camera, center, direction, ortho_width):
    distance = max(100.0, ortho_width * 3.0)
    position = [center[i] + direction[i] * distance for i in range(3)]
    cmds.xform(camera, worldSpace=True, translation=position)
    target = cmds.spaceLocator(name="uvCheck_cameraTarget")[0]
    cmds.xform(target, worldSpace=True, translation=center)
    constraint = cmds.aimConstraint(
        target,
        camera,
        aimVector=(0, 0, -1),
        upVector=(0, 1, 0),
        worldUpType="scene",
    )[0]
    cmds.delete(constraint, target)
    camera_shape = cmds.listRelatives(camera, shapes=True, fullPath=True)[0]
    cmds.setAttr(camera_shape + ".orthographic", True)
    cmds.setAttr(camera_shape + ".orthographicWidth", ortho_width)
    if cmds.attributeQuery("backgroundColor", node=camera_shape, exists=True):
        cmds.setAttr(camera_shape + ".backgroundColor", 0.16, 0.16, 0.17, type="double3")


def render_view(name, file_label, center, direction, ortho_width, width=900, height=1200):
    camera, camera_shape = cmds.camera(name="uvCheckCamera_" + name)
    aim_camera(camera, center, direction, ortho_width)
    for shape in cmds.ls(type="camera") or []:
        if cmds.attributeQuery("renderable", node=shape, exists=True):
            cmds.setAttr(shape + ".renderable", shape == camera_shape)
    cmds.setAttr("defaultResolution.width", width)
    cmds.setAttr("defaultResolution.height", height)
    cmds.setAttr("defaultResolution.pixelAspect", 1.0)
    cmds.setAttr("defaultResolution.deviceAspectRatio", float(width) / float(height))
    cmds.workspace(fileRule=["images", OUT_DIR])
    cmds.setAttr("defaultRenderGlobals.imageFilePrefix", "uvcheck_" + name, type="string")
    output = cmds.render(camera_shape)
    final_path = os.path.join(OUT_DIR, PREVIEW_PREFIX + file_label + ".png")
    if output and os.path.exists(output):
        shutil.copyfile(output, final_path)
    print("rendered", name, output, "=>", final_path)
    cmds.delete(camera)


def main():
    cmds.file(MODEL, open=True, force=True, prompt=False, ignoreVersion=True)
    meshes = visible_mesh_transforms()
    if not meshes:
        raise RuntimeError("No visible hair meshes were found")
    assign_emissive_texture(meshes)

    bounds = cmds.exactWorldBoundingBox(meshes)
    minimum = bounds[:3]
    maximum = bounds[3:]
    center = [(minimum[i] + maximum[i]) * 0.5 for i in range(3)]
    spans = [maximum[i] - minimum[i] for i in range(3)]
    front_width = max(spans[0] * 1.15, spans[1] * 0.88)
    side_width = max(spans[2] * 1.15, spans[1] * 0.88)

    cmds.setAttr("defaultRenderGlobals.currentRenderer", "mayaSoftware", type="string")
    cmds.setAttr("defaultRenderGlobals.imageFormat", 32)
    cmds.setAttr("defaultRenderGlobals.animation", False)
    cmds.setAttr("defaultRenderQuality.edgeAntiAliasing", 2)

    print("bounds", bounds)
    print("mesh_count", len(meshes))
    render_view("front", u"\u6b63\u9762", center, (0, 0, 1), front_width)
    render_view("back", u"\u80cc\u9762", center, (0, 0, -1), front_width)
    render_view("left", u"\u5de6\u4fa7", center, (1, 0, 0), side_width)
    render_view("right", u"\u53f3\u4fa7", center, (-1, 0, 0), side_width)


if __name__ == "__main__":
    try:
        main()
    finally:
        maya.standalone.uninitialize()
