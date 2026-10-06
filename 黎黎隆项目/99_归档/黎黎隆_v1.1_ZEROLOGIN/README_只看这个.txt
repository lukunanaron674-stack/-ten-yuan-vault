# 这次只做一件事：绝不登录

上一版的问题已经确定：
direct 图片下载失败后，脚本会回退到网页抓取，于是 Pinterest 又跑出来要登录。

## v1.2 改动
- 删除 baoyu-fetch / 浏览器回退
- 不启动浏览器
- 不打开 Pinterest、Behance 或任何来源页面
- Canvas 初始文件里 `type:link = 0`
- 只下载 manifest 中的真实图片直链
- 下载成功 → `type:file`
- 下载失败 → 保留“参考图未下载”占位卡
- 无论成功失败，都不会出现登录墙

## 用法
1. 解压
2. 把整个 `黎黎隆_v1.1_ZEROLOGIN` 文件夹放到 Obsidian Vault 根目录
3. 双击 `双击这个_零登录本地化.cmd`
4. 打开 `黎黎隆_场景风格视觉化发散树_v1.2_LOCAL.canvas`

注意：不要再打开旧的 v1.1 URL预览 Canvas。那个文件本来就包含网页 link 卡。
