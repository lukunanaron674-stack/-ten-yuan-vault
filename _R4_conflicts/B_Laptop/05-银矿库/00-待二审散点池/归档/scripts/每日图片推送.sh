#!/bin/bash
IMGS=(
  "/workspace/imgs/本体_znx_01_Two-Sides---People-Wall-Art--Hive-Artes.webp"
  "/workspace/imgs/本体_znx_02_Angel-and-Demon-Duality-by-Sipo-Liimatai.jpg"
  "/workspace/imgs/时间_xnz_01_What-Does-The-Salvador-Dali-Melting-Cloc.png"
  "/workspace/imgs/因果_zxnx_01_The-domino-effect--SPEAKZEASY.jpg"
  "/workspace/imgs/命运_xznz_01_Wanderer-Above-the-Sea-of-Fog-in-the-Ham.jpg"
  "/workspace/imgs/空间_x并zn_01_Duality-Portrait---Surrealism-Living-Roo.jpg"
  "/workspace/imgs/空间_x并zn_04_Faceless-Surreal-Art-Print-Gothic-Horro.jpg"
  "/workspace/imgs/空间_x并zn_01_From-canvas-to-twilight-cute-and-creepy.jpg"
)
LEN=${#IMGS[@]}
seq 0 $((LEN-1)) | shuf | head -3
