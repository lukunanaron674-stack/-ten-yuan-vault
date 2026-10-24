/**
 * 囷图片采集下载 v3
 * B站视频封面图 → 下载到本地
 */
const https = require('https');
const fs = require('fs');
const path = require('path');
const http = require('http');

const kw = process.argv[2] || '插画';
const outDir = '/workspace/图像积累/囷采集/';
const resultFile = '/tmp/workflow_images.json';

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function searchBili(keyword) {
  return new Promise((resolve) => {
    const enc = encodeURIComponent(keyword);
    const url = `https://api.bilibili.com/x/web-interface/search/type?search_type=video&keyword=${enc}&page=1&pagesize=8`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.bilibili.com' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const items = (json.data?.result || []).map(v => ({
            bvid: v.bvid,
            title: v.title.replace(/<[^>]+>/g, ''),
            author: v.author,
            play: v.play,
            pic: v.pic ? 'https:' + v.pic : ''
          })).filter(v => v.pic && v.pic.startsWith('http'));
          resolve(items);
        } catch(e) { resolve([]); }
      });
    }).on('error', () => resolve([]));
  });
}

function downloadImg(url, filepath) {
  return new Promise((resolve) => {
    if (!url || url.includes('https:https:') || !url.startsWith('http')) {
      resolve(null); return;
    }
    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.bilibili.com' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        downloadImg(res.headers.location, filepath).then(resolve);
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(filepath); });
    }).on('error', (e) => { fs.unlink(filepath, () => {}); resolve(null); });
  });
}

async function main() {
  console.log(`[囷] 搜索: ${kw}`);
  const videos = await searchBili(kw);
  if (!videos.length) { console.log('无结果'); return; }
  
  fs.writeFileSync(resultFile, JSON.stringify(videos, null, 2));
  console.log(`[囷] 找到${videos.length}条，开始下载封面图...`);
  
  let downloaded = 0;
  for (const v of videos) {
    const ext = v.pic.endsWith('.png') ? '.png' : '.jpg';
    const filename = `${v.bvid || v.title.substring(0,20)}${ext}`;
    const filepath = path.join(outDir, filename);
    const result = await downloadImg(v.pic, filepath);
    if (result) {
      downloaded++;
      console.log(`[囷] ✓ ${v.title.substring(0,30)}`);
      console.log(`   → ${filepath}`);
    }
  }
  
  console.log(`\n[囷] 下载完成: ${downloaded}/${videos.length}张`);
  if (downloaded > 0) {
    const files = fs.readdirSync(outDir).slice(-downloaded);
    console.log('新文件:', files.join(', '));
  }
}

main().catch(console.error);
