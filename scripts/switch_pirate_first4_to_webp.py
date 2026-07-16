from pathlib import Path

canvas = Path('09-给674（我）用的库/画画理论/海盗航海_is-a名词素材库.canvas')
text = canvas.read_text(encoding='utf-8')
replacements = {
    'assets/海盗航海_is-a名词素材库/n26_黑帆港.jpg': 'assets/海盗航海_is-a名词素材库/n26_黑帆港.webp',
    'assets/海盗航海_is-a名词素材库/n27_雾海沉船湾.jpg': 'assets/海盗航海_is-a名词素材库/n27_雾海沉船湾.webp',
    'assets/海盗航海_is-a名词素材库/n28_海盗酒馆.jpg': 'assets/海盗航海_is-a名词素材库/n28_海盗酒馆.webp',
    'assets/海盗航海_is-a名词素材库/n29_船长舱.jpg': 'assets/海盗航海_is-a名词素材库/n29_船长舱.webp',
}
for old, new in replacements.items():
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f'{old}: expected 1 reference, found {count}')
    text = text.replace(old, new)
canvas.write_text(text, encoding='utf-8')
print('updated 4 Canvas image references')
