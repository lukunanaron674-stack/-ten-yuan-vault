/**
 * 囷B站采集 v2
 * 真实调用B站搜索API
 */
const https = require('https');
const fs = require('fs');

const kw = process.argv[2] || '插画';
const outFile = '/tmp/workflow_result.txt';

function bilibiliSearch(keyword) {
  return new Promise((resolve, reject) => {
    const encKw = encodeURIComponent(keyword);
    const url = `https://api.bilibili.com/x/web-interface/search/type?search_type=video&keyword=${encKw}&page=1&pagesize=5`;
    
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'https://www.bilibili.com'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.data && json.data.result) {
            const items = json.data.result.map(v => ({
              title: v.title.replace(/<[^>]+>/g, ''),
              author: v.author,
              play: v.play,
              pubdate: v.pubdate,
              duration: v.duration,
              description: v.description.replace(/<[^>]+>/g, '').substring(0, 100)
            }));
            resolve(JSON.stringify(items, null, 2));
          } else {
            resolve('[]');
          }
        } catch(e) {
          resolve('[]');
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log(`[囷] B站搜索: ${kw}`);
  const results = await bilibiliSearch(kw);
  fs.writeFileSync(outFile, results);
  console.log(`[囷] 采集完成: ${JSON.parse(results).length} 条结果`);
  if (results.length > 10) {
    console.log('样本:', JSON.parse(results)[0]?.title || '无');
  }
}

main().catch(console.error);
